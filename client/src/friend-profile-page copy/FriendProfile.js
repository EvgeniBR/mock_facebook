import { request } from "http";
import React  from "react";
import FriendCover from "./FriendCover";
import FriendProfileHeader from "./FriendProfileHeader";


const FriendProfile = (props) => {
  console.log('f' , props);

  let friendRequest = false;
  if(props.data.data){
    console.log(props.data.data.friendsRequest);
    const findRequest = props.data.data.friendsRequest.some(fRequest => {
      return fRequest.owner === props.userPath;
    })
    friendRequest = findRequest;
  }


  return (
    <div>
      <FriendCover data = {props.data} />
      <br/>
     <FriendProfileHeader userPath={props.userPath} profilePath={props.data.data.path} request={friendRequest}/>
    </div>
  );
};

export default FriendProfile;
