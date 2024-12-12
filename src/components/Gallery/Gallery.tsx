import React, { useState } from "react";

const Gallery: React.FC = () => {
  const images = [
    "/officeImages/building.jpg",
    "/officeImages/entrance_fromOutside.jpg",
    "/officeImages/entrance_fromInside.jpg",
    "/officeImages/lobby.jpg",
    "/officeImages/roomA_1.jpg",
    "/officeImages/roomA_2.jpg",
    "/officeImages/roomB_1.jpg",
    "/officeImages/roomB_2.jpg",
    "/officeImages/kitchen_1.jpg",
    "/officeImages/kitchen_2.jpg",
    "/officeImages/kitchen_3.jpg",
    "/officeImages/smallRoom.jpg",
  ];

  const [fullscreenIndex, setFullscreenIndex] = useState<number | null>(null);

  const openFullscreen = (index: number) => {
    setFullscreenIndex(index);
  };

  const closeFullscreen = () => {
    setFullscreenIndex(null);
  };

  const showPreviousImage = () => {
    if (fullscreenIndex !== null) {
      setFullscreenIndex((prevIndex) =>
        prevIndex! > 0 ? prevIndex! - 1 : images.length - 1
      );
    }
  };

  const showNextImage = () => {
    if (fullscreenIndex !== null) {
      setFullscreenIndex((prevIndex) =>
        prevIndex! < images.length - 1 ? prevIndex! + 1 : 0
      );
    }
  };

  return (
    <div>
      {/* Image Gallery */}
      <div
        className="gallery"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gap: "10px",
          padding: "10px",
        //   margin: "0 auto",
          marginTop: "70px",
          maxWidth: "1000px",
        }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Office ${index + 1}`}
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            onClick={() => openFullscreen(index)}
          />
        ))}
      </div>

      {/* Fullscreen Overlay */}
      {fullscreenIndex !== null && (
        <div
          className="fullscreen"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          {/* Previous Button */}
          <button
            onClick={showPreviousImage}
            style={{
              position: "absolute",
              left: "20px",
              color: "white",
              fontSize: "30px",
              background: "transparent",
              border: "none",
              cursor: "pointer",
            }}
          >
            &#10094;
          </button>

          {/* Fullscreen Image */}
          <img
            src={images[fullscreenIndex]}
            alt={`Fullscreen ${fullscreenIndex + 1}`}
            style={{ maxWidth: "90%", maxHeight: "90%", borderRadius: "10px" }}
          />

          {/* Next Button */}
          <button
            onClick={showNextImage}
            style={{
              position: "absolute",
              right: "20px",
              color: "white",
              fontSize: "30px",
              background: "transparent",
              border: "none",
              cursor: "pointer",
            }}
          >
            &#10095;
          </button>

          {/* Close Button */}
          <span
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              color: "white",
              fontSize: "30px",
              cursor: "pointer",
            }}
            onClick={closeFullscreen}
          >
            &times;
          </span>
        </div>
      )}
    </div>
  );
};

export default Gallery;