import React , {useState , useEffect} from "react";
import { Link } from "react-router-dom";
import "./FriendProfile.css";
import DataService from '../db-connection/DataService';

const FriendProfileHeader = ({ userPath, profilePath , request}) => {
  const [profileRequest , setProfileRequest] = useState('')
  //update the friend request in the DB;

  useEffect(() => {
    setProfileRequest(request);
  }, [request]);


  const makeFriendRequest = async () => {
    try{
      await DataService.patch(`facebook-profile/send-request`, {userPath , profilePath });
      await DataService.patch(`facebook-profile/get-request`, {profilePath ,userPath});
      setProfileRequest(!profileRequest);
    }
    catch{
      console.log("something wrong try again later");
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
        <button onClick={() => makeFriendRequest()}>
          {profileRequest ? (
            <i className="fas fa-user-times"></i>
          ) : (
            <i className="fas fa-user-plus"></i>
          )}
        </button>
        <button>•••</button>
      </div>
    </header>
  );
};

export default FriendProfileHeader;
