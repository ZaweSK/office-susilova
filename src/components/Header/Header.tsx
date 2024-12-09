import React from "react";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="sticky-header">
      <div className="centered-container">
        <div>
          {" "}
          <h1
            className="title"
            style={{
              textAlign: "center",
              fontFamily: "Outfit",
              color: "gray",
              letterSpacing: 2,
              fontSize: 25,
            }}
          >
            Office Sušilova
          </h1>
        </div>

        <div>
          <nav>
            <ul className="nav-links">
              <li>
                <a href="#home">Floor Plan</a>
              </li>
              <li>
                <a href="#about">Gallery</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header; // Ensure the component is exported for use in other files
