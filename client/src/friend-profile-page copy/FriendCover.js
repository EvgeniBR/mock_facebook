import React from "react";
import "./FriendProfile.css";
import FriendAvatar from './FriendAvatar'
const FriendCover = () => {
  //get cover photo from user to img tag

  return (
    <div className="friend-cover-container">
      <img src="#sd" alt="cover pic"></img>
      <FriendAvatar/>
      <h2 className ="friend-profile-name">first_name + last-name <hr className="underLine"/></h2>
    </div>
  );
};

export default FriendCover;
