import React, { useState } from "react";
import "./PostButton.css";
import ReactionPostContainer from "../reaction-post-container/ReactionPostContainer";

const PostButton = ({ icon, info, hoverOption }) => {
  const [hoverMode, setHoverMode] = useState(false);
  const [reaction, setReaction] = useState("");

  let option;
  if (hoverOption === "like") {
    option = (
      <ReactionPostContainer
        onMouseOver={() => setHoverMode(true)}
        changeReaction={(userReact) => setReaction(userReact)}
      />
    );
  } else if (hoverOption === "commingsoon") {
  }


  return (
    <div
      className="PostButton"
      onMouseOver={() => setHoverMode(true)}
      onMouseLeave={() => setHoverMode(false)}
    >
      {hoverMode && option}
      <i className={icon}></i>
      {info}
    </div>
  );
};

export default PostButton;
