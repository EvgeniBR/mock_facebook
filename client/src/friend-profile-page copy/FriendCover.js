import React from "react";
import "./FriendProfile.css";
import FriendAvatar from "./FriendAvatar";
const FriendCover = (props) => {
  //get cover photo from user to img tag

  // useEffect(()=>{
  //   console.log('friend',props.data.data);
 
  //    })

  return (
    <div className="friend-cover-container">
      <img
        src={`data:image/png;base64,${props.data.data.cover}`}
        alt="cover pic"
      ></img>
      <FriendAvatar data = {props.data} />
      <h2 className="friend-profile-name">
        {`${props.data.data.first_name} ${props.data.data.last_name}`} <hr className="underLine" />
      </h2>
    </div>
  );
};

export default FriendCover;
