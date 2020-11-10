import React , {useEffect} from "react";
import './FriendProfile.css'

const FriendAvatar = (props) => {
  useEffect(()=>{
    console.log('friend profile',props);
 
     })
  
 
  
  return (
    <div  className="friend-profile-container">
         <img src={`data:image/png;base64,${props.data.data.avatar}`} alt="profile pic"></img>
    </div>
    
  );
  
}

export default FriendAvatar;
