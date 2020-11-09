import React, { useState, useEffect } from "react";
import "./Post.css";
import CircleIcon from "../circle-Img/CircleIcon";
import FaceBookUserName from "../facebook-username/FaceBookUserName";
import PostDate from "../date/PostDate";
import PostButton from "../post-button/PostButton";
import PostComment from "../post-comment/PostComment";
import WriteNewComment from "../write-new-comment/WriteNewComment";
import DataService from "../../db-connection/DataService";

const Post = ({ id, path, message, firstName, lastName, time }) => {
  const [commentsArr, setCommentsArr] = useState([]);
  const [newComment, setNewComment] = useState("");

  const getData = async () => {
    const postCommentsArr = await DataService.get(
      `facebook-post/post/${id}`
    );
    console.log(postCommentsArr);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    console.log(newComment);
    if (newComment) {
      const setData = async () => {
        const newComment = await DataService.patch(
          `facebook-comment/${id}`,
          newComment
        );
      };
      setData();
      getData();
    }
  }, [newComment]);

  let postComments = [];
  if (commentsArr.length) {
    postComments = commentsArr.map((comment) => {
      console.log(comment);
      return (
        <PostComment
          key={comment._id}
          id={comment._id}
          comments={comment.comments}
          commentPath={comment.owner}
          message={comment.message}
          date={comment.createdAt}
        />
      );
    });
  }

  const updateNewComment = async (value) => {
    const dataFormat = {
      owner: path,
      message: value,
    };
    setNewComment(dataFormat);
  };

  return (
    <div className="Post">
      <div className="post-header">
        <CircleIcon path={path} />
        <div className="PostHeaderUserInfo">
          <FaceBookUserName
            firstName={firstName}
            lastName={lastName}
            path={path}
          />
          <PostDate time={time} />
        </div>
      </div>
      <p>{message}</p>
      <div className="PostBtnContainer">
        <PostButton info="Like" icon="far fa-thumbs-up" hoverOption="like" />
        <PostButton info="Comment" icon="far fa-comment-alt" />
        <PostButton
          info="Share"
          icon="fas fa-share"
          hoverOption="commingsoon"
        />
      </div>
      {/* test only -> need to map over */}
      {postComments}
      <WriteNewComment updateNewComment={(e) => updateNewComment(e)} />
    </div>
  );
};

export default Post;
