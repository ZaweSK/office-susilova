import React from "react";
import Header from "../../components/Header/Header";
import FloorPlan from "../../components/FloorPlan/FloorPlan";
import Gallery from "../../components/Gallery/Gallery";
import Footer from "../../components/Footer/Footer";
import "./Remake.css";

const images = [
  "/officeImages/remake_1.png",
  "/officeImages/remake_2.png",
  "/officeImages/remake_3.png",
  "/officeImages/remake_4.png",
  "/officeImages/remake_5.png",
  "/officeImages/remake_6.png",
  "/officeImages/remake_7.png",
  "/officeImages/remake_8.png",
];

const Remake: React.FC = () => {
  return (
    <div>
      <main style={{ display: "flex", justifyContent: "center" }}>
        <div className="content-container">{/* <Map /> */}</div>
        <Gallery images={images} />
      </main>
    </div>
  );
};

export default Remake;
