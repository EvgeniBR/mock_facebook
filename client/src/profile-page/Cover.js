import React from "react";
import "./Profile.css";
import Avatar from './Avatar'
const Cover = () => {
  //get cover photo from user to img tag

  return (
    <div className="cover-container">
      <img src="#sd" alt="cover pic"></img>
      <button className="edit-photo">
        <i class="fas fa-camera"> </i> Edit Cover Photo
      </button>
      <Avatar/>
      <h2 className ="profile-name">first_name + last-name <hr className="underLine"/></h2>
    </div>
  );
};

export default Cover;
