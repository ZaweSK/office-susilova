import React from "react";
import "./Header.css";
import IonIcon from "@reacticons/ionicons";

const Header: React.FC = () => {
  return (
    <header className="sticky-header">
      <div className="centered-container">
        <div>
          <nav>
            <ul className="nav-links">
              <li>
                <a className="nav-links" href="/">
                  <IonIcon name="home" size={"large"} color="green" />
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div>
          <nav>
            <ul className="nav-links">
              <li>
                <a href="/remake">
                  <IonIcon name="hammer-outline" size={"large"} color="gray" />
                </a>
              </li>
              <li>
                <a href="/vibe">
                  <IonIcon
                    name="color-palette-outline"
                    size={"large"}
                    color="gray"
                  />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
