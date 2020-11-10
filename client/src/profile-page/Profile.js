import React, { useEffect } from "react";
import Cover from "./Cover";
import ProfileHeader from "./ProfileHeader";


const Profile = (props) => {
  useEffect(()=>{
 console.log('cover' , props.data);
  })
  return (
    <div>
      <Cover data = {props.data}/>
      <br/>
     <ProfileHeader/>
    </div>
  );
};

export default Profile;
