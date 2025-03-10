import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Remake from "./pages/Remake";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <main style={{ display: "flex", justifyContent: "center" }}>
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/remake" element={<Remake />} />

            {/* // <Route path="/gallery" element={<Gallery />} />
            // <Route path="/floorplan" element={<FloorPlan />} />
            // <Route path="/map" element={<Map />} /> */}
          </Routes>
        </div>
      </main>
    </BrowserRouter>
  );
};

export default App;
