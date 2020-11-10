import React from "react";
import FriendCover from "./FriendCover";
import FriendProfileHeader from "./FriendProfileHeader";


const FriendProfile = (props) => {
  console.log('f' , props);
  return (
    <div>
      <FriendCover data = {props.data} />
      <br/>
     <FriendProfileHeader/>
    </div>
  );
};

export default FriendProfile;
