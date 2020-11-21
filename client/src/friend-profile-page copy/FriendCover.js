import React from "react";
import "./FriendProfile.css";
import FriendAvatar from "./FriendAvatar";
const FriendCover = ({data , theme}) => {
  //get cover photo from user to img tag

  // useEffect(()=>{
  //   console.log('friend',props.data.data);
 
  //    })

  return (
    <div className="friend-cover-container" style={{backgroundImage:`linear-gradient(${theme.coverTop} 25%,  ${theme.coverBot} 75%)`}}>
      <img
        src={`data:image/png;base64,${data.data.cover}`}
        alt="cover pic"
      ></img>
      <FriendAvatar data = {data} theme={theme}/>
      <h2 className="friend-profile-name">
        {`${data.data.first_name} ${data.data.last_name}`} <hr className="underLine" />
      </h2>
    </div>
  );
};

export default FriendCover;
