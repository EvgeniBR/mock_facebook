import React, { useState } from "react";
import "./PostButton.css";
import ReactionPostContainer from "../reaction-post-container/ReactionPostContainer";
import emojiOptions from '../../Util/emojiOptions';

const PostButton = ({ icon, info, hoverOption ,updateWithNewLike , emojiPicked}) => {
  const [hoverMode, setHoverMode] = useState(false);
  const [reaction, setReaction] = useState("");


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
      color: emojiOptions.getEmoji(emojiPicked).color,
    };
  }


  return (
    <div
      className="PostButton" style={mystyle}
      onMouseOver={() => setHoverMode(true)}
      onMouseLeave={() => setHoverMode(false)}
    >
      {hoverMode && option}
      {emojiPicked ? <img src={emojiOptions.getEmoji(emojiPicked).emoji} alt={emojiPicked}/> :<i className={icon}></i>} 
      {emojiPicked ? emojiPicked : info}
    </div>
  );
};

export default PostButton;
