import React from "react";
import './ReactionPost.css'

const ReactionPost = ({reaction}) => {
  return (
    <button className="ReactionPost">
      <img src={reaction} alt="angry" />
    </button>
  );
};

export default ReactionPost;
