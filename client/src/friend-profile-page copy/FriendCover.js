import React from "react";
import "./FriendProfile.css";
import FriendAvatar from "./FriendAvatar";
import FriendProfileHeader from "./FriendProfileHeader";

const FriendCover = ({data , theme , userPath}) => {
  const checkIfExist = () => {
    if (!data.data) {
      return false;
    }
    return true;
  };

  //check if the user send to the friend profile friend request.
  const checkIfSendFriendRequest = () => {
    if (checkIfExist()) {
      const findSendRequest = data.data.friendsRequest.some(
        (fRequest) => {
          return fRequest.owner === userPath;
        }
      );
      if (findSendRequest) {
        return <i id="friendRequestSend" className="fas fa-user-times"></i>;
      }
    }
    return false;
  };

  //check if the user already get friend request from the profile
  const checkIfGetFriendRequest = () => {
    if (checkIfExist()) {
      const findGetRequest = data.data.friendsRequestSend.some(
        (fRequest) => {
          return fRequest.owner === userPath;
        }
      );
      if (findGetRequest) {
        return (
          <i
            style={{
              color: "#0085ff",
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 108, 255, 0.2)",
              padding: "10px 0",
            }}
            id="friendRequestGet"
            className="fas fa-user-check"
          ></i>
        );
      }
    }
    return false;
  };

  //check if user and profile alreadt friends
  const checkIfAlreadyFriends = () => {
    if (checkIfExist()) {
      const alreadyFriend = data.data.friends.some((fRequest) => {
        return fRequest.owner === userPath;
      });
      if (alreadyFriend) {
        return <i id="friends" className="fas fa-user-friends"></i>;
      }
    }
    return false;
  };


  return (
    <div className="friend-cover-container" style={{backgroundImage:`linear-gradient(${theme.coverTop} 25%,  ${theme.coverBot} 75%)`}}>
      <img
        src={`data:image/png;base64,${data.data.cover}`}
        alt="cover pic"
      ></img>
      <FriendAvatar data = {data} theme={theme}/>
      <h2 className="friend-profile-name" style={{color:theme.primaryText}}>
        {`${data.data.first_name} ${data.data.last_name}`} <hr className="underLine" />
      </h2>
      <FriendProfileHeader
        userPath={userPath}
        profilePath={data.data.path}
        theme={theme}
        request={
          checkIfSendFriendRequest() ||
          checkIfGetFriendRequest() ||
          checkIfAlreadyFriends()
        }
      />
    </div>
  );
};

export default FriendCover;
