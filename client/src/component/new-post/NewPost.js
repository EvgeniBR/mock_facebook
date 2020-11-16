import React from "react";
import "./NewPost.css";
import CircleIcon from "../circle-Img/CircleIcon";

const NewPost = ({ username, srcAvatar , WriteNewPost , theme}) => {
  const divStyle = {
    backgroundColor: theme.postBackground,
    padding: theme.postPadding,
    color: theme.secondText
  }

  const btnStyle = {
    backgroundColor: theme.postCommentBackground,
    padding: theme.postPadding,
    color: theme.secondText,
    borderRadius: theme.postBorderRadius,
    marginLeft: theme.postMargin
  }

  return (
    <div className="NewPost" style={divStyle}>
      <CircleIcon srcIcon={srcAvatar}/>
      <button style={btnStyle} onClick={() => WriteNewPost()}>What's on your mind {username}</button>
    </div>
  );
};

export default NewPost;
