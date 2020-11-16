import React, { useState } from "react";
import "./FeedBoxNote.css";

const FeedSponsored = ({text,imgSponsored,sponsoredText,linkTo,theme}) => {
  const [btnColor, setBtnColor] = useState(`rgba(0,0,0,0)`);

  const pTitleStyle = {
    color: theme.primaryText,
    fontWeight: "bold",
    marginLeft:"5px"
  };

  const pStyle = {
    color: theme.secondText,
    marginLeft:"5px"
  };

  return (
    <div
      className="FeedSponsored"
      style={{ borderBottom: `1px solid ${theme.seperatorLine}` , color: theme.secondText }}
    >
      <p className="FeedPage--title">{text}</p>
      <div
        className="FeedPage--btn"
        onMouseEnter={() => setBtnColor(theme.postCommentBackground)}
        onMouseLeave={() => setBtnColor(`rgba(0,0,0,0)`)}
        style={{backgroundColor:btnColor}}
        onClick={(e) => {
          e.preventDefault();
          window.location.href = "https://www.appleseeds.org.il/bootcamp2021";
        }}
      >
        <img src={imgSponsored} alt="visit us" />
        <div>
          <p style={pTitleStyle}>{sponsoredText}</p>
          <p style={pStyle}>{linkTo}</p>
        </div>
      </div>
    </div>
  );
};

export default FeedSponsored;
