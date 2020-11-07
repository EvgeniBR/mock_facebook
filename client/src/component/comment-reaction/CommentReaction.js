import React from "react";
import './CommentReaction.css'

const CommentReaction = ({text}) => {
  return <button className="CommentReaction">
      {text}
  </button>;
};

export default CommentReaction;
