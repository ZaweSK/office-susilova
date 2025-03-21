import React from "react";
import Header from "../../components/Header/Header";
import FloorPlan from "../../components/FloorPlan/FloorPlan";
import Gallery from "../../components/Gallery/Gallery";
import Footer from "../../components/Footer/Footer";
import "./Home.css";

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
  "/officeImages/outside_1.jpg",
  "/officeImages/outside_2.jpg",
  "/officeImages/outside_3.jpg",
  "/officeImages/outside_4.jpg",
];

const Home: React.FC = () => {
  return (
    <div>
      <main style={{ display: "flex", justifyContent: "center" }}>
        <div className="content-container">
          <a
            href="https://my.matterport.com/show/?m=4WsqfdkAM99"
            className="button-link"
          >
            VIRTUALNA PREHLIADKA
          </a>
          <FloorPlan />
          <Gallery images={images} />
          {/* <Map /> */}

          <a
            href="https://drive.google.com/drive/folders/1No092ID15yvxCfHzMccFMADwx-8tMVdY?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            style={{ margin: "20px" }}
          >
            ĎALŠIE FOTKY
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
