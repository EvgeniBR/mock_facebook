import React , {useState , useEffect} from "react";
import { Link } from "react-router-dom";
import "./FriendProfile.css";
import DataService from '../db-connection/DataService';
import {dealWithFriendRequest, approveFriendRequest, requestFriendRequest} from '../Util/serverConnect';

const FriendProfileHeader = ({ userPath, profilePath , request , theme}) => {
  const [ profileRequest , setProfileRequest ] = useState('');

  useEffect(() => {
    if(request){
      setProfileRequest(request); 
    }
    else{
      setProfileRequest(<i id="unFriends" className="fas fa-user-plus"></i>);
    }
  }, [request]);

  const btnStyle ={
    color:theme.primaryText,
    backgroundColor:theme.postCommentBackground
  }

  const makeFriendRequest = async (e) => {
    try{
      if(e.target.id === "unFriends"){
        await dealWithFriendRequest(false,userPath,profilePath);
        setProfileRequest(<i id="friendRequestSend" className="fas fa-user-times"></i>);
      }
      else if(e.target.id === "friendRequestSend"){
        await dealWithFriendRequest(true,userPath,profilePath,);
        setProfileRequest(<i id="unFriends" className="fas fa-user-plus"></i>);
      }
      //TO-DO approve or decline - for now - only approve
      else if(e.target.id === "friendRequestGet"){
        await approveFriendRequest(userPath,profilePath);
        setProfileRequest(<i id="friends" className="fas fa-user-friends"></i>);
      }
      else{
        await requestFriendRequest(userPath,profilePath);
        setProfileRequest(<i id="unFriends" className="fas fa-user-plus"></i>);
      }
    }
    catch{
      console.log("cant add ");
    }
  };


  return (
    <header>
      <div className="friend-profile-header-container">
        <Link style={{color:theme.secondText}} to="/:path/">Posts</Link>
        <Link style={{color:theme.secondText}} to="/:path/about">About</Link>
        <Link style={{color:theme.secondText}} to="/:path/friends">Friends</Link>
        <Link style={{color:theme.secondText}} to="/:path/photos">Photos</Link>
        <Link style={{color:theme.secondText}} to="/:path/archive">Archive</Link>
        <Link style={{color:theme.secondText}} to="/:path/more">More</Link>
        <div className="friend-empty-div"></div>
        <button className="message-friend-btn" style={btnStyle}>
          <i className="fab fa-facebook-messenger"></i> Message
        </button>
        <button style={btnStyle}>
          <i className="fas fa-phone-alt"></i>
        </button>
        <button onClick={(e) => makeFriendRequest(e)} style={btnStyle}>
          {profileRequest}
        </button>
        <button style={btnStyle}>•••</button>
      </div>
    </header>
  );
};

export default FriendProfileHeader;
