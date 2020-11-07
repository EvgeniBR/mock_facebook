import React, { useState } from "react";
import ReactionPostContainer from "../reaction-post-container/ReactionPostContainer";
import "./CommentBtn.css";

const CommentBtn = ({ text, hoverOption }) => {
  const [hoverMode, setHoverMode] = useState(false);
  const [reaction, setReaction] = useState("");

  let option = "";
  if (hoverOption === "like") {
    option = (
      <ReactionPostContainer
        onMouseOver={() => setHoverMode(true)}
        changeReaction={(userReact) => setReaction(userReact)}
      />
    );
  }


  return (
    <button
      className="CommentBtn"
      onMouseOver={() => setHoverMode(true)}
      onMouseLeave={() => setHoverMode(false)}
    >
      {hoverMode && option}
      {text}
    </button>
  );
};

export default CommentBtn;
