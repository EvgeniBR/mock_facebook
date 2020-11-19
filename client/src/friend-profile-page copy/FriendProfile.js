import React  from "react";
import FriendCover from "./FriendCover";
import FriendProfileHeader from "./FriendProfileHeader";


const FriendProfile = (props) => {
  const checkIfExist = () => {
    if(!props.data.data){
     return false;
    }
    return true;
  }

  //check if the user send to the friend profile friend request. 
  const checkIfSendFriendRequest = () => {
    if(checkIfExist()){
      const findSendRequest = props.data.data.friendsRequest.some(fRequest => {
        return fRequest.owner === props.userPath;
      })
      if(findSendRequest){
        return <i id="friendRequestSend" className="fas fa-user-times"></i>
      }
    }
    return false;
  }

  //check if the user already get friend request from the profile
  const checkIfGetFriendRequest = () => {
    if(checkIfExist()){
      const findGetRequest = props.data.data.friendsRequestSend.some(fRequest => {
        return fRequest.owner === props.userPath;})
      if(findGetRequest){
        return <i style={{color:"#0085ff" , width:"100%" , height:"100%" , backgroundColor:"rgba(0, 108, 255, 0.2)" , padding:"10px 0"}} id="friendRequestGet" className="fas fa-user-check"></i>
      }
    }
    return false;
  }

  //check if user and profile alreadt friends 
  const checkIfAlreadyFriends = () => {
    if(checkIfExist()){
      const alreadyFriend = props.data.data.friends.some(fRequest => {
        return fRequest.owner === props.userPath;})
      if(alreadyFriend){
        return <i id="friends" className="fas fa-user-friends"></i>
      }
    }
    return false;
  }



  return (
    <div>
      <FriendCover data = {props.data} />
      <br/>
     <FriendProfileHeader userPath={props.userPath} profilePath={props.data.data.path} request={checkIfSendFriendRequest() || checkIfGetFriendRequest() || checkIfAlreadyFriends()}/>
    </div>
  );
};

export default FriendProfile;
