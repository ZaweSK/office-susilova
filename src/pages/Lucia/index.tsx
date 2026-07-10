import React from "react";
import Gallery from "../../components/Gallery/Gallery";

// b1 + b2 first (floor plans), then the rest of the renders.
// All images are the compressed variants stored in /public/luciaImages.
const images = [
  "/luciaImages/b1.jpg",
  "/luciaImages/b2.png",
  "/luciaImages/1.jpg",
  "/luciaImages/2.jpg",
  "/luciaImages/3.jpg",
  "/luciaImages/4.jpg",
  "/luciaImages/5.jpg",
  "/luciaImages/6.jpg",
  "/luciaImages/7.jpg",
  "/luciaImages/8.jpg",
  "/luciaImages/9.jpg",
  "/luciaImages/10.jpg",
  "/luciaImages/11.jpg",
  "/luciaImages/12.jpg",
  "/luciaImages/13.jpg",
  "/luciaImages/kniznica-chodba.jpg",
  "/luciaImages/pultik-kachlicky.jpg",
  "/luciaImages/pultik-kachlicky-01.jpg",
  "/luciaImages/pultik-kachlicky-obluk.jpg",
  "/luciaImages/top-varianta.jpg",
];

const Lucia: React.FC = () => {
  return (
    <div>
      <main style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Gallery images={images} />

        {/* Compressed video at the bottom */}
        <div
          style={{
            width: "100%",
            maxWidth: "1000px",
            padding: "10px",
            marginBottom: "40px",
          }}
        >
          <video
            src="/luciaImages/video.mp4"
            controls
            playsInline
            preload="metadata"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "5px",
              display: "block",
            }}
          />
        </div>
      </main>
    </div>
  );
};

export default Lucia;
