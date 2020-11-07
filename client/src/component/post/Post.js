import React, { useState } from "react";
import "./Post.css";
import CircleIcon from '../circle-Img/CircleIcon';
import FaceBookUserName from '../facebook-username/FaceBookUserName'
import PostDate from '../date/PostDate';
import PostButton from '../post-button/PostButton';
import PostComment from '../post-comment/PostComment';
import ReactionPostContainer from '../reaction-post-container/ReactionPostContainer';


const Post = () => {
  return <div className="PostContainer">
      <div className="post-header">

        <CircleIcon path="/zrihen.1"/>
        <div>
            <FaceBookUserName firstName="dorin" lastName="zrihen" path="/zrihen.1"/>
            <PostDate time="03112020 1350"/>
        </div>
      </div>
      <p>hello facebook</p>
      <div className="PostBtnContainer">
        <PostButton info="Like" icon="far fa-thumbs-up" hoverOption="like"/>
        <PostButton info="Comment" icon="far fa-comment-alt"/>
        <PostButton info="Share" icon="fas fa-share" hoverOption="commingsoon"/>
      </div>
      {/* test only -> need to map over */}
      <PostComment path="/zrihen.1" comment="Hi first comment"/>
      <ReactionPostContainer/>
  </div>
};

export default Post;
