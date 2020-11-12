import React from "react";
import "./FeedBoxNote.css";

const FeedSponsored = ({ text, imgSponsored, sponsoredText, linkTo }) => {
  return (
    <div className="FeedSponsored">
      <p className="FeedPage--title">{text}</p>
      <button
        className="FeedPage--btn"
        onClick={(e) => {
          e.preventDefault();
          window.location.href = "https://www.appleseeds.org.il/bootcamp2021";
        }}
      >
        <img src={imgSponsored} alt="visit us" />
        <div>
          <p className="FeedSponsored__title">{sponsoredText}</p>
          <p className="FeedSponsored__link">{linkTo}</p>
        </div>
      </button>
    </div>
  );
};

export default FeedSponsored;
