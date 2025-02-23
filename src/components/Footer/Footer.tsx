import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <div
      className="footer"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "gray",
        height: "100px",
        width: "100%",
      }}
    >
      <div
        style={{
          flexDirection: "column",
          display: "flex",
          width: "100%",
          justifyContent: "right",
          alignItems: "end",
          maxWidth: "1100px",
          padding: "15px",
        }}
      >
        <text className="text"> +420 732 117 096 </text>
        <text className="text"> psevcikbn@gmail.com</text>
      </div>
    </div>
  );
};

export default Footer; // Ensure the component is exported for use in other files
