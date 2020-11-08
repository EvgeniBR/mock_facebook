import React from "react";
import "./PostContainer.css";
import Post from '../post/Post';
import NewPost from "../new-post/NewPost";

const PostContainer = ({writePost , firstName , lastName , path , srcAvatar}) => {
  return <div>
      <NewPost srcAvatar={srcAvatar} username={firstName} WriteNewPost={() => writePost()}/>
      <Post />
  </div>;
};

export default PostContainer;
