import React from "react";
import "./Vibe.css";

import Footer from "../../components/Footer/Footer";
import PinterestBoard from "../../components/PinterestBoard";

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

const Vibe: React.FC = () => {
  return (
    <div>
      <main style={{ display: "flex", justifyContent: "center" }}>
        <div className="content-container">
          <PinterestBoard
            title="OBYVACKA"
            boardLink={
              "https://cz.pinterest.com/nikolapreov/susilova-brno-obyvacka/"
            }
            iframeLink={
              "https://petracoding.github.io/pinterest/board.html?link=nikolapreov/susilova-brno-obyvacka/&hideHeader=1&hideFooter=1&transparent=1"
            }
          />
          <PinterestBoard
            title="KUCHYNA"
            boardLink={
              "https://cz.pinterest.com/nikolapreov/susilova-brno-kuchyna/"
            }
            iframeLink={
              "https://petracoding.github.io/pinterest/board.html?link=nikolapreov/susilova-brno-kuchyna/&hideHeader=1&hideFooter=1&transparent=1"
            }
          />

          <PinterestBoard
            title="SPALNA"
            boardLink={
              "https://cz.pinterest.com/nikolapreov/susilova-brno-spalna/"
            }
            iframeLink={
              "https://petracoding.github.io/pinterest/board.html?link=nikolapreov/susilova-brno-spalna/&hideHeader=1&hideFooter=1&transparent=1"
            }
          />

          <PinterestBoard
            title="OTHERS"
            boardLink={
              "https://cz.pinterest.com/nikolapreov/susilova-brno-others/"
            }
            iframeLink={
              "https://petracoding.github.io/pinterest/board.html?link=nikolapreov/susilova-brno-others/&hideHeader=1&hideFooter=1&transparent=1"
            }
          />
        </div>
        {/* <> */}
      </main>
    </div>
  );
};

export default Vibe;
