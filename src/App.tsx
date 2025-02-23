import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Gallery from "./components/Gallery/Gallery";
import FloorPlan from "./components/FloorPlan/FloorPlan";
import Map from "./components/Map/Map";
import Footer from "./components/Footer/Footer";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <main style={{ display: "flex", justifyContent: "center" }}>
        <div className="content-container">
          <a
            href="https://my.matterport.com/show/?m=4WsqfdkAM99"
            className="button-link"
          >
            VIRTUALNA PREHLIADKA
          </a>
          <FloorPlan />
          <Gallery />
          <Map />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
