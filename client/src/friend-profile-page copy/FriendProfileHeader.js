import React from "react";
import { Link } from "react-router-dom";
import './FriendProfile.css'


const FriendProfileHeader = () => {


  return (
   <header>
     
       <div className="friend-profile-header-container">
       <Link  to="/:path/">Posts</Link> 
       <Link  to="/:path/about">About</Link> 
       <Link  to="/:path/friends">Friends</Link> 
       <Link  to="/:path/photos">Photos</Link> 
       <Link  to="/:path/archive">Archive</Link> 
       <Link  to="/:path/more">More</Link> 
       <div className="friend-empty-div"></div>
       <button className="message-friend-btn"><i className="fab fa-facebook-messenger"></i> Message</button>
       <button><i class="fas fa-phone-alt"></i></button>
       <button><i class="fas fa-user-plus"></i></button>
       <button>•••</button>
       </div>
     
   </header>
  );
}

export default FriendProfileHeader;
