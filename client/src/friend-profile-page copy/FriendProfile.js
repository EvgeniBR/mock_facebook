import React  from "react";
import FriendCover from "./FriendCover";
import FriendProfileHeader from "./FriendProfileHeader";


const FriendProfile = (props) => {
  console.log('f' , props);

  const friendRequest = false;
  if(props.data.data){
    if(props.data.data.friendsRequest.includes(props.userPath)){
      friendRequest = true;
    }
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
