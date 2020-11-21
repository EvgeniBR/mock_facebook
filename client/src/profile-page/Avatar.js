import React  from "react";
import './Profile.css'
import DataService from "../db-connection/DataService";
import Cookies from 'universal-cookie';

const Avatar = ({data , theme}) => {
  const cookies = new Cookies();
  const token = cookies.get("mockFacebookToken");
  
  const profileSubmit = async (e) => {
    let profileData = new FormData();
    profileData.append("avatar", e.target.files[0]);
   e.preventDefault()
   if(token){
     try{
       await DataService.createAuthP(`users/me`, profileData , token)
      }catch{
     }
   }
  };
 
  
  return (
    <div  className="profile-container" style={{border:`2px soild ${theme.coverBot}`}}>
         <img src={`data:image/png;base64,${data.avatar}`} alt="profile pic"></img>
        <form   encType="multipart/form-data" method="post">
      <label htmlFor="profile" className="edit-pic">
        <i className="fas fa-camera fa-2x camera-btn"> </i> 
      </label>
        <input style={{display:"none"}} id="profile" type="file" name="avatar" onChange={(e)=>profileSubmit(e)} />
        
      </form>
      
    </div>
    
  );
  
}

export default Avatar;



