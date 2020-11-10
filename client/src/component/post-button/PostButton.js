import React, { useState } from "react";
import "./PostButton.css";
import ReactionPostContainer from "../reaction-post-container/ReactionPostContainer";
import angry from "../../img/reaction/angry.png";
import care from "../../img/reaction/care.png";
import haha from "../../img/reaction/haha.png";
import like from "../../img/reaction/like.png";
import love from "../../img/reaction/love.png";
import sad from "../../img/reaction/sad.png";
import wow from "../../img/reaction/wow.png";


const PostButton = ({ icon, info, hoverOption ,updateWithNewLike , emojiPicked}) => {
  const [hoverMode, setHoverMode] = useState(false);
  const [reaction, setReaction] = useState("");

  const getEmoji = {
    care:{
      color:'#FFC433',
      emoji:care
    },
    haha:{
      color:'#FFC433',
      emoji:haha
    },
    sad:{
      color:'#FFC433',
      emoji:sad
    },
    wow:{
      color:'#FFC433',
      emoji:wow
    },
    love:{
      color:'#FF3333',
      emoji:love
    },
    like:{
      color:'#007CFF',
      emoji:like
    },
    angry:{
      color:'#FF8033',
      emoji:angry
    },
  }


  let option;
  if (hoverOption === "like") {
    option = (
      <ReactionPostContainer
        onMouseOver={() => setHoverMode(true)}
        changeReaction={(userReact) => {
          setReaction(userReact);
          updateWithNewLike(userReact);
          setHoverMode(false)
        }}
      />
    );
  } else if (hoverOption === "commingsoon") {
    //show comming soon hover on the btn for unimplement feture
  }

  let mystyle = {};

  if(emojiPicked){
    mystyle = {
      color: getEmoji[emojiPicked].color,
    };
  }


  return (
    <div
      className="PostButton" style={mystyle}
      onMouseOver={() => setHoverMode(true)}
      onMouseLeave={() => setHoverMode(false)}
    >
      {hoverMode && option}
      {emojiPicked ? <img src={getEmoji[emojiPicked].emoji} alt={emojiPicked}/> :<i className={icon}></i>} 
      {emojiPicked ? emojiPicked : info}
    </div>
  );
};

export default PostButton;
