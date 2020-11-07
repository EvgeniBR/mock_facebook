import React from "react";
import "./PostContainer.css";
import Post from '../post/Post';
import NewPost from "../new-post/NewPost";

const PostContainer = ({writePost}) => {
  return <div>
      <NewPost username="Jhon" WriteNewPost={() => writePost()}/>
      <Post />
  </div>;
};

export default PostContainer;
