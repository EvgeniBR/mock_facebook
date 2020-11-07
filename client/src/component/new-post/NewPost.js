import React from "react";
import "./NewPost.css";
import CircleIcon from "../circle-Img/CircleIcon";

const NewPost = ({ username, img , WriteNewPost}) => {
  return (
    <div className="NewPost">
      <CircleIcon />
      <button onClick={() => WriteNewPost()}>What's on your mind {username}</button>
    </div>
  );
};

export default NewPost;
