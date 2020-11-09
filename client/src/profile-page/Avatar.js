import React from "react";
import './Profile.css'
import DataService from "../db-connection/DataService";
import Cookies from 'universal-cookie';

const Avatar = () => {

  const cookies = new Cookies();
  const token = cookies.get("mockFacebookToken");
  
  const coverSubmit = async (e) => {
    console.log('line 13');
   e.preventDefault()
   if(token){
     
     console.log(e.target.files[0]);
     try{
       await DataService.createAuthP(`users/me`, e.target.files[0] , token)
       
       
      }catch{
       
       console.log('line 23');

     }
   }
   console.log('line 27');
  };
 
  
  return (
    <div  className="profile-container">
         <img src="#sd" alt="profile pic"></img>
      <button className="edit-pic">
        <i className="fas fa-camera fa-2x camera-btn"> </i> 
        <form   encType="multipart/form-data">
        <input type="file" name="cover" onChange={(e)=>coverSubmit(e)} />
        
      </form>
      </button>
      
    </div>
    
  );
  
}

export default Avatar;
