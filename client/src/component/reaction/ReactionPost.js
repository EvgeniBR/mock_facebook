import React from "react";
import './ReactionPost.css'

const ReactionPost = ({reaction , alt , reactionPick}) => {
  return (
    <button className="ReactionPost" onClick={() => reactionPick(alt)}>
      <img src={reaction} alt={alt} />
    </button>
  );
};

export default ReactionPost;
