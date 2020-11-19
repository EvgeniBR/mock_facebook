import React , {useState , useEffect} from "react";
import { Link } from "react-router-dom";
import "./FriendProfile.css";
import DataService from '../db-connection/DataService';

const FriendProfileHeader = ({ userPath, profilePath , request}) => {
  const [ profileRequest , setProfileRequest ] = useState('');

  useEffect(() => {
    if(request){
      setProfileRequest(request); 
    }
    else{
      setProfileRequest(<i id="unFriends" className="fas fa-user-plus"></i>);
    }
  }, [request]);

  const dealWithFriendRequest = async (requestType, currentUserPath , profilePath , changeBtnIcon) => {
      await DataService.patch(`facebook-profile/send-request?request=${requestType}`,
       {
        userPath: currentUserPath,
        profilePath: profilePath,
      });
      await DataService.patch(`facebook-profile/get-request?request=${requestType}`, 
      {
        userPath: currentUserPath,
        profilePath: profilePath,
      });
      setProfileRequest(changeBtnIcon);
  }

  const dealWithExistFriendRequest = async (currentUserPath , profilePath , changeBtnIcon) => {
    await DataService.patch(`facebook-profile/getFriendRequest`,
      {
        userPath: currentUserPath,
        profilePath: profilePath,
      }
    );
    setProfileRequest(changeBtnIcon);
  }

  const removeExistFriend = async (currentUserPath , profilePath , changeBtnIcon) => {
    await DataService.patch(`facebook-profile/removeFriend`,
      {
        userPath: currentUserPath,
        profilePath: profilePath,
      }
    );
    setProfileRequest(changeBtnIcon);
  }

  const makeFriendRequest = async (e) => {
    try{
      if(e.target.id === "unFriends"){
        await dealWithFriendRequest(false,userPath,profilePath,<i id="friendRequestSend" className="fas fa-user-times"></i>);
      }
      else if(e.target.id === "friendRequestSend"){
        await dealWithFriendRequest(true,userPath,profilePath,<i id="unFriends" className="fas fa-user-plus"></i>);
      }
      //TO-DO approve or decline - for now - only approve
      else if(e.target.id === "friendRequestGet"){
        await dealWithExistFriendRequest(userPath,profilePath,<i id="friends" className="fas fa-user-friends"></i>)
      }
      else{
        await removeExistFriend(userPath,profilePath,<i id="unFriends" className="fas fa-user-plus"></i>)
      }
    }
    catch{
      console.log("cant add ");
    }
  };

  return (
    <header>
      <div className="friend-profile-header-container">
        <Link to="/:path/">Posts</Link>
        <Link to="/:path/about">About</Link>
        <Link to="/:path/friends">Friends</Link>
        <Link to="/:path/photos">Photos</Link>
        <Link to="/:path/archive">Archive</Link>
        <Link to="/:path/more">More</Link>
        <div className="friend-empty-div"></div>
        <button className="message-friend-btn">
          <i className="fab fa-facebook-messenger"></i> Message
        </button>
        <button>
          <i className="fas fa-phone-alt"></i>
        </button>
        <button onClick={(e) => makeFriendRequest(e)}>
          {profileRequest}
        </button>
        <button>•••</button>
      </div>
    </header>
  );
};

export default FriendProfileHeader;
