import React from "react";

interface PinterestBoardProps {
  title: string;
  boardLink: string;
  iframeLink: string;
}

const PinterestBoard = ({
  title,
  boardLink,
  iframeLink,
}: PinterestBoardProps) => {
  return (
    <div>
      <a
        href={boardLink}
        target="_blank"
        rel="noopener noreferrer"
        className="pinterest-link"
      >
        {title}
      </a>
      <iframe
        width="1800"
        height="900"
        frameBorder="2"
        scrolling="yes"
        style={{ border: "none" }}
        title="Pinterest Board"
        src={iframeLink}
      ></iframe>
    </div>
  );
};

export default PinterestBoard;
