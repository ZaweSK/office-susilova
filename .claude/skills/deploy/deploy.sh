#!/usr/bin/env bash
# Build and deploy office-susilova.cz to Active24 (Websupport) production FTP.
# Reads credentials from office-susilova/.env.deploy (gitignored).
#
# Usage:
#   deploy.sh              # build + upload + verify
#   deploy.sh --no-build   # skip npm run build (upload existing build/)
#   deploy.sh --dry-run    # mirror in test mode (shows what would upload, no changes)
set -euo pipefail

# --- locate + load env ---------------------------------------------------
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ENV_FILE="${DEPLOY_ENV_FILE:-/Users/peter/Documents/Kancelar Susilova/web/office-susilova/.env.deploy}"
if [ ! -f "$ENV_FILE" ]; then
  echo "❌ Missing env file: $ENV_FILE" >&2
  echo "   Create it from the template (see SKILL.md) with FTP_HOST/USER/PASS etc." >&2
  exit 1
fi
set -a; # shellcheck disable=SC1090
source "$ENV_FILE"; set +a

: "${FTP_HOST:?}" "${FTP_PORT:?}" "${FTP_USER:?}" "${FTP_PASS:?}" \
  "${FTP_REMOTE_DIR:?}" "${PROJECT_DIR:?}" "${BUILD_DIR:?}" "${LIVE_URL:?}"

DO_BUILD=1; DRY=""
for a in "$@"; do
  case "$a" in
    --no-build) DO_BUILD=0 ;;
    --dry-run)  DRY="--dry-run" ;;
    *) echo "unknown arg: $a" >&2; exit 2 ;;
  esac
done

cd "$PROJECT_DIR"

# --- build ---------------------------------------------------------------
if [ "$DO_BUILD" -eq 1 ]; then
  echo "==> Building (npm run build)…"
  CI=false npm run build
else
  echo "==> Skipping build (--no-build)"
fi
[ -f "$BUILD_DIR/index.html" ] || { echo "❌ $BUILD_DIR/index.html not found — build failed?" >&2; exit 1; }

# --- ensure lftp ---------------------------------------------------------
if ! command -v lftp >/dev/null 2>&1; then
  echo "==> Installing lftp (one-time)…"
  brew install lftp
fi

# --- upload (mirror, compare by size, never delete) ----------------------
# --ignore-time: compare by SIZE only (ignore mtime). npm build stamps every
#   file with a fresh mtime, so a time-based mirror would re-upload everything;
#   size comparison skips the unchanged ~170 MB officeImages and 32 MB video.
# NO --delete: preserves server-only files like .htaccess (the SPA rewrite).
echo "==> Deploying $BUILD_DIR -> ftp://$FTP_HOST$FTP_REMOTE_DIR ${DRY:+(dry-run)}"
LFTP_PASSWORD="$FTP_PASS" lftp -u "$FTP_USER" --env-password "ftp://$FTP_HOST:$FTP_PORT" <<EOF
set ssl:verify-certificate no
set ftp:ssl-allow true
set ftp:ssl-protect-data true
set net:max-retries 2
set net:timeout 30
mirror -R --ignore-time --parallel=4 --verbose $DRY -X .DS_Store "$BUILD_DIR" "$FTP_REMOTE_DIR"
bye
EOF

if [ -n "$DRY" ]; then
  echo "==> Dry run complete (no files changed)."
  exit 0
fi

# --- verify --------------------------------------------------------------
echo "==> Verifying live site…"
LOCAL_HASH="$(grep -o 'main\.[a-z0-9]*\.js' "$BUILD_DIR/index.html" | head -1 || true)"
LIVE_HASH="$(curl -sS -L --max-time 30 "$LIVE_URL/" | grep -o 'main\.[a-z0-9]*\.js' | head -1 || true)"
LUCIA_CODE="$(curl -sS -o /dev/null -w '%{http_code}' -L --max-time 30 "$LIVE_URL/lucia" || true)"
echo "   local bundle : ${LOCAL_HASH:-?}"
echo "   live  bundle : ${LIVE_HASH:-?}"
echo "   /lucia       : $LUCIA_CODE"
if [ -n "$LOCAL_HASH" ] && [ "$LOCAL_HASH" = "$LIVE_HASH" ]; then
  echo "✅ Deploy verified — live site serves the new build."
else
  echo "⚠️  Live bundle does not match yet. Usually browser/CDN cache — hard-refresh (Cmd+Shift+R)."
fi
