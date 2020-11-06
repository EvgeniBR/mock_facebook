import React from "react";
import "./PostComment.css";
import CircleIcon from "../circle-Img/CircleIcon";
import FaceBookUserName from "../facebook-username/FaceBookUserName";
import CommentReaction from "../comment-reaction/CommentReaction";
import PostDate from '../date/PostDate';

const PostComment = ({ path, comment }) => {
  return (
    <div className="PostCommentContainer">
      <CircleIcon path={path} />
      <div className="UserComment">
        <div className="PostComment">
          <FaceBookUserName firstName="Jhon" lastName="Doe" path="/Doe.1" />
          <p>{comment}</p>
        </div>
        <div className="CommentOptions">
          <CommentReaction text="Like" />
          <CommentReaction text="Reply" />
          <PostDate time="04112020 1250" comment="true"/>
        </div>
      </div>
    </div>
  );
};

export default PostComment;
