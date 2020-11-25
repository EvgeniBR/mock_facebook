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
import DropDownOptions from '../dropdown-options/DropDownOptions';
import DropDownPost from '../dropdown-options/DropDownPost';
import NewPostField from '../new-post-filed/NewPostField';

const Post = ({ id, firstName, lastName, postOwnerPath, userAvatar , theme , userProfileAvatar , currentUserPath}) => {
  //post info
  const [message , setMassege ] = useState("")
  const [time , setTime] = useState("0000-00-00T00:00:00")
  const [likes , setLikes] = useState([])
  const [commentsArr, setCommentsArr] = useState([]);
  const [showDropDown , setShowDropDown] = useState(false)
  const [postVisability , setPostVisability] = useState(true)
  const [editPostMode, setEditPostMode] = useState(false);
  

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
  }, [likes , currentUserPath]);

  const getData = async () => {
    if(!postVisability){
      return
    }
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

  const showPostOptions = () => {
    setShowDropDown(true);
  }

  const handleCloseDropDown = () => {
    setShowDropDown(false);
  }

  const removePostVisavility = () => {
    setPostVisability(false);
  }

  const updateDBPost = async (value) => {
    const data = {
      message:value
    }
    await DataService.patch(`facebook-post/${id}`, data).then((updatedData) =>{
      setEditPostMode(false)
      setMassege(updatedData.data.message)
    }) 
  }

  if(postVisability){
    return (
      <div className="Post" style={{backgroundColor: `${theme.postBackground}` , padding:`${theme.postPadding}` , color:`${theme.secondText}`}}>
        {editPostMode &&   <NewPostField
            profileAvatar={userProfileAvatar}
            firstName={firstName}
            lastName={lastName}
            userPath={currentUserPath}
            uploadNewPost={(value) => updateDBPost(value)}
            theme={theme}
            title="Edit post"
            btnText="Save"
            postData={message}
          />}
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
          {currentUserPath === postOwnerPath && <button onClick={showPostOptions} className="postOptions" style={{color:theme.primaryText}}>...</button>}
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
        {showDropDown && <DropDownOptions handleDropDownClick={showDropDown} handleCloseDropDown={handleCloseDropDown} background={theme.postBackground} border={theme.dropDownBorder} top="40px" right="15px">
              <DropDownPost theme={theme} id={id} removePostVisavility={removePostVisavility} updatePost={() => {
                setShowDropDown(false)
                setEditPostMode(true)}}/>
          </DropDownOptions>}
      </div>
    );
  }
  else{
    return(
        <></>
    )
  }
 
};

export default Post;
