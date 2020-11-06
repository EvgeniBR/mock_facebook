import React from "react";
import { Link } from "react-router-dom";
import './Profile.css'


const ProfileHeader = () => {


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
       <button className="edit-profile-btn"><i class="fas fa-pencil-alt"></i> Edit Profile</button>
       <button><i class="fas fa-eye"></i></button>
       <button><i class="fas fa-search"></i></button>
       <button>•••</button>
       </div>
     
   </header>
  );
}

export default ProfileHeader;
