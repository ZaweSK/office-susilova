---
name: deploy
description: Build and deploy the office-susilova.cz website to Active24 (Websupport) production FTP. Use when the user wants to deploy, publish, push live, release, or "upload the new version" of the office-susilova site. Runs npm run build and mirrors the build output to the FTP docroot.
---

# Deploy office-susilova.cz

Deploys the CRA site in `office-susilova/` to production at
`https://office-susilova.cz` via Active24/Websupport FTP.

## How to run

```bash
"$(git rev-parse --show-toplevel)/.claude/skills/deploy/deploy.sh"
# or from the office-susilova/ project root:
.claude/skills/deploy/deploy.sh
```

Options:
- `--no-build` — upload the existing `build/` without rebuilding
- `--dry-run` — show what mirror *would* upload, change nothing (good sanity check)

The script does: **build → upload changed files → verify the live site**, then
prints whether the live JS bundle matches the freshly built one.

## Credentials

All secrets live in `office-susilova/.env.deploy` (gitignored). The script
sources it. Keys:

| Key | Value |
|-----|-------|
| `FTP_HOST` | `office-susilova.cz` (IP 37.9.175.165) |
| `FTP_PORT` | `21` (FTPS; SFTP also available on 22) |
| `FTP_USER` | `peter.office-susilova.cz` |
| `FTP_PASS` | (in the env file — rotate in Active24 panel if leaked) |
| `FTP_REMOTE_DIR` | `/office-susilova.cz/web` (the docroot) |
| `PROJECT_DIR` | absolute path to `office-susilova/` |
| `LIVE_URL` | `https://office-susilova.cz` |

If `.env.deploy` is missing, recreate it with those keys.

## How the upload works (and why it's safe)

- Uses `lftp mirror -R --size-only` — uploads only files whose size differs
  from the server. The unchanged ~170 MB `officeImages/` folder and the 32 MB
  Lucia video are therefore **skipped** on every deploy.
- **No `--delete`** — server-only files are preserved. Critically this keeps
  `web/.htaccess`, the SPA rewrite that makes deep links like `/lucia` work on
  refresh instead of 404ing. Never delete it.
- CRA static bundles are content-hashed (`main.<hash>.js`), so new code always
  uploads as a new filename; stale old bundles linger harmlessly.
- TLS is on with certificate verification disabled — the server presents a
  shared `*.websupport.sk` cert, so the hostname won't match; the connection is
  still encrypted.

## Server layout (for reference / manual fallback)

```
/  (FTP root)
└── office-susilova.cz/
    ├── logs/
    ├── sub/
    └── web/            <- docroot = FTP_REMOTE_DIR, deploy target
        ├── .htaccess           (SPA rewrite — leave alone)
        ├── index.html          (uploaded — points at hashed bundle)
        ├── asset-manifest.json
        ├── static/             (app JS/CSS/media)
        ├── luciaImages/        (gallery assets + video)
        ├── officeImages/       (large legacy photos — unchanged)
        └── favicon / logos / manifest / robots / floorPlan
```

Manual fallback (browser): log into https://webftp.office-susilova.cz, open the
`web` folder, drag in the changed folders/files from `office-susilova/build/`.

## After deploying

- If the user still sees the old page, it's browser cache — tell them to
  hard-refresh (**Cmd+Shift+R**). Consider adding a no-cache header for
  `index.html` in `.htaccess` as a permanent fix.
- Commit & push source changes to GitHub (`ZaweSK/office-susilova`) if not
  already done — deploy uploads the *build*, it does not commit source.
