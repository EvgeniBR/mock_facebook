import React from "react";
import { Link } from "react-router-dom";
import './Profile.css'


const ProfileHeader = ({theme}) => {

  const btnStyle ={
    color:theme.primaryText,
    backgroundColor:theme.postCommentBackground
  }

  return (
   <header>
       <div className="profile-header-container">
       <Link style={{color:theme.secondText}} to="/:path/">Posts</Link> 
       <Link style={{color:theme.secondText}} to="/:path/about">About</Link> 
       <Link style={{color:theme.secondText}} to="/:path/friends">Friends</Link> 
       <Link style={{color:theme.secondText}} to="/:path/photos">Photos</Link> 
       <Link style={{color:theme.secondText}} to="/:path/archive">Archive</Link> 
       <Link style={{color:theme.secondText}} to="/:path/more">More</Link> 
       <div className="empty-div"></div>
       <button className="edit-profile-btn" style={btnStyle}><i className="fas fa-pencil-alt"></i> Edit Profile</button>
       <button style={btnStyle}><i className="fas fa-eye"></i></button>
       <button style={btnStyle}><i className="fas fa-search" ></i></button>
       <button style={btnStyle}>•••</button>
       </div>
   </header>
  );
}

export default ProfileHeader;
