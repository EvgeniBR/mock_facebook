import React , {useEffect , useState} from "react";
import "./PostComment.css";
import CircleIcon from "../circle-Img/CircleIcon";
import FaceBookUserName from "../facebook-username/FaceBookUserName";
import CommentBtn from "../comment-reaction/CommentBtn";
import PostDate from '../date/PostDate';

const PostComment = ({ commentPath, message , date , id}) => {
  const [comments , setComments] = useState([]);
  
  return (
    <div className="PostCommentContainer">
      <CircleIcon path={commentPath} />
      <div className="UserComment">
        <div className="PostComment">
          <FaceBookUserName firstName="Jhon" lastName="Doe" path={commentPath} />
          <p>{message}</p>
        </div>
        <div className="CommentOptions">
          <CommentBtn text="Like" hoverOption="like"/> ·
          <CommentBtn text="Reply" /> ·
          <PostDate time={date} comment="true"/>
        </div>
      </div>
    </div>
  );
};

export default PostComment;
