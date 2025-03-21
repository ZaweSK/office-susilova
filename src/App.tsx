import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Remake from "./pages/Remake";
import Vibe from "./pages/Vibe";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <main style={{ display: "flex", justifyContent: "center" }}>
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/remake" element={<Remake />} />
            <Route path="/vibe" element={<Vibe />} />
          </Routes>
        </div>
      </main>
    </BrowserRouter>
  );
};

export default App;
