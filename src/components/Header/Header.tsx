import React from "react";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="sticky-header">
      <div className="centered-container">
        <div>
          <a href="/">
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
          </a>
        </div>

        <div>
          <nav>
            <ul className="nav-links">
              <li>
                <a href="/remake">Remake</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
