import React, { useState } from "react";
import "./Post.css";
import CircleIcon from '../circle-Img/CircleIcon';
import FaceBookUserName from '../facebook-username/FaceBookUserName'
import PostDate from '../date/PostDate';

const Post = () => {
  return <div className="PostContainer">
      <div className="post-header">

        <CircleIcon path="/zrihen.1"/>
        <div>
            <FaceBookUserName firstName="dorin" lastName="zrihen" path="/zrihen.1"/>
            <PostDate time="03112020 1350"/>
        </div>
      </div>
      
  </div>
};

export default Post;
