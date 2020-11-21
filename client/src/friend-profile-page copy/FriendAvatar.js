import React from "react";
import './FriendProfile.css'

const FriendAvatar = ({data , theme}) => {
  // useEffect(()=>{
  //   console.log('friend profile',props);
 
  //    })
  
  return (
    <div  className="friend-profile-container" style={{border:`2px soild ${theme.coverBot}`}}>
         <img src={`data:image/png;base64,${data.data.avatar}`} alt="profile pic"></img>
    </div>
    
  );
  
}

export default FriendAvatar;
