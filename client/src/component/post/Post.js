import React, { useState, useEffect } from "react";
import "./Post.css";
import CircleIcon from "../circle-Img/CircleIcon";
import FaceBookUserName from "../facebook-username/FaceBookUserName";
import PostDate from "../date/PostDate";
import PostButton from "../post-button/PostButton";
import PostComment from "../post-comment/PostComment";
import WriteNewComment from "../write-new-comment/WriteNewComment";
import DataService from "../../db-connection/DataService";
import PostStatics from '../post-statics/PostStatics';

const Post = ({ id, firstName, lastName, postOwnerPath, userAvatar , theme , userProfileAvatar , currentUserPath}) => {
  //post info
  const [message , setMassege ] = useState("")
  const [time , setTime] = useState("0000-00-00T00:00:00")
  const [likes , setLikes] = useState([])
  const [commentsArr, setCommentsArr] = useState([]);

  //set new like or comment
  
  const [newComment, setNewComment] = useState("");
  const [newLike, setNewLike] = useState("");
  const [currentPick , setCurrentPick] = useState("");


  //change emoji reaction
  const updateDBwithNewLikeSelected = (value) => {
    setNewLike(value);
  }

  const setPostInfo = (postData) => {
    setMassege(postData.message);
    setTime(postData.createdAt);
    setLikes(postData.likes);
  }

  useEffect(() => {
    let currentLikePick = '';
    if(likes.length){
      currentLikePick = likes.find(like =>  like.owner === currentUserPath)
    }
    currentLikePick ? setCurrentPick(currentLikePick.reaction) : setCurrentPick('');
  }, [likes]);

  const getData = async () => {
    const postData = await DataService.get(`facebook-post/get-post/${id}`);
    setPostInfo(postData.data);
    const postCommentsArr = await DataService.get(`facebook-post/post/${id}`);
    setCommentsArr(postCommentsArr.data);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (newComment) {
      console.log(newComment);
      const setData = async () => {
        await DataService.patch(`facebook-comment/${id}`, newComment);
        setNewComment('');
        await getData();
      };
      setData();
    }
  }, [newComment]);


  useEffect(() => {
    if (newLike) {
      const data = {
        owner:currentUserPath
      }
      const setData = async () => {
        await DataService.patch(`facebook-post/${id}/${newLike}`, data).then(() => getData());
        setNewLike("");
      };
      setData();
    }
  }, [newLike]);


  let postComments = [];
  if (commentsArr.length) {
    postComments = commentsArr.map((comment) => {
      console.log(comment);
      return (
        <PostComment
          commentPath={comment.myPost.owner}
          key={comment.myPost._id}
          id={comment.myPost._id}
          firstName={comment.userDataPost.first_name}
          lastName={comment.userDataPost.last_name}
          userAvatar={comment.userDataPost.avatar}
          message={comment.myPost.message}
          comments={comment.myPost.comments}
          time={comment.myPost.createdAt}
          likes={comment.myPost.likes}
          theme={theme}
          userPath={postOwnerPath}
        />
      );
    });
  }


  const updateNewComment = async (value) => {
    const dataFormat = {
      owner: currentUserPath,
      message: value,
    };
    setNewComment(dataFormat);
  };

  return (
    <div className="Post" style={{backgroundColor: `${theme.postBackground}` , padding:`${theme.postPadding}` , color:`${theme.secondText}`}}>
      <div className="PostHeaderUser">
        <CircleIcon srcIcon={userAvatar} />
        <div className="PostHeaderUser__Info" style={{marginLeft: `${theme.postMargin}`}}>
          <FaceBookUserName
            firstName={firstName}
            lastName={lastName}
            path={postOwnerPath}
            fontColor={theme.primaryText}
          />
          <PostDate time={time} />
        </div>
      </div>
      <p>{message}</p>
      {(commentsArr.length || likes.length) ? <PostStatics comments={commentsArr} likes={likes}/> : <></>}
      <div className="PostBtnContainer" style={{borderTop: `1px solid ${theme.secondText}` , borderBottom:`1px solid ${theme.secondText}`}}>
        <PostButton info="Like" icon="far fa-thumbs-up" emojiPicked={currentPick} hoverOption="like" updateWithNewLike={(like) => updateDBwithNewLikeSelected(like)}/>
        <PostButton info="Comment" icon="far fa-comment-alt" />
        <PostButton
          info="Share"
          icon="fas fa-share"
          hoverOption="commingsoon"
        />
      </div>
      {postComments}
      <WriteNewComment
        userAvatar={userProfileAvatar}
        updateNewComment={(e) => updateNewComment(e)}
        theme={theme}
      />
    </div>
  );
};

export default Post;
