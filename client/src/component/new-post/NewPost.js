import React from "react";
import "./NewPost.css";
import CircleIcon from "../circle-Img/CircleIcon";

const NewPost = ({ username, srcAvatar , WriteNewPost}) => {
  return (
    <div className="NewPost">
      <CircleIcon srcIcon={srcAvatar}/>
      <button onClick={() => WriteNewPost()}>What's on your mind {username}</button>
    </div>
  );
};

export default NewPost;
