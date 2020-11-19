import React from "react";
import { Link } from "react-router-dom";
import './Profile.css'


const ProfileHeader = ({theme}) => {


  return (
   <header>
     
       <div className="profile-header-container">
       <Link  to="/:path/">Posts</Link> 
       <Link  to="/:path/about">About</Link> 
       <Link  to="/:path/friends">Friends</Link> 
       <Link  to="/:path/photos">Photos</Link> 
       <Link  to="/:path/archive">Archive</Link> 
       <Link  to="/:path/more">More</Link> 
       <div className="empty-div"></div>
       <button className="edit-profile-btn"><i className="fas fa-pencil-alt"></i> Edit Profile</button>
       <button><i className="fas fa-eye"></i></button>
       <button><i className="fas fa-search"></i></button>
       <button>•••</button>
       </div>
     
   </header>
  );
}

export default ProfileHeader;
