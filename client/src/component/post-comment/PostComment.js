import React , {useEffect , useState} from "react";
import "./PostComment.css";
import CircleIcon from "../circle-Img/CircleIcon";
import FaceBookUserName from "../facebook-username/FaceBookUserName";
import CommentBtn from "../comment-reaction/CommentBtn";
import PostDate from '../date/PostDate';

const PostComment = ({commentPath,id,firstName,lastName,userAvatar,time,likes,message}) => {
  const [comments , setComments] = useState([]);
  
  return (
    <div className="PostCommentContainer">
      <CircleIcon srcIcon={userAvatar} />
      <div className="UserComment">
        <div className="PostComment">
          <FaceBookUserName firstName={firstName} lastName={lastName} path={commentPath} />
          <p>{message}</p>
        </div>
        <div className="CommentOptions">
          <CommentBtn text="Like" hoverOption="like"/> ·
          <CommentBtn text="Reply" /> ·
          <PostDate time={time} comment="true"/>
        </div>
      </div>
    </div>
  );
};

export default PostComment;
