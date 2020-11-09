import React from "react";
import "./WriteNewComment.css";
import CircleIcon from "../circle-Img/CircleIcon";

const WriteNewComment = ({ username, srcAvatar }) => {
  return (
    <div className="WriteNewComment">
      <CircleIcon srcIcon={srcAvatar}/>
      <input placeholder="Write a comment..."/>
    </div>
  );
};

export default WriteNewComment;