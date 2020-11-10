import React ,{useEffect} from "react";
import './Profile.css'
import DataService from "../db-connection/DataService";
import Cookies from 'universal-cookie';

const Avatar = (props) => {

  useEffect(()=>{
      console.log('avatar',props.data);
  })

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
       console.log('line 23')
     }
   }
  };
 
  
  return (
    <div  className="profile-container" >
         <img src={`data:image/png;base64,${props.data.avatar}`} alt="profile pic"></img>
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



