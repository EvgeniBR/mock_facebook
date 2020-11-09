import React , {useState} from "react";
import "./Profile.css";
import Avatar from "./Avatar";
import DataService from "../db-connection/DataService";

import Cookies from 'universal-cookie';

const Cover = () => {
  const [userCover , setUserCover ] = useState(null)

   const cookies = new Cookies();
   const token = cookies.get("mockFacebookToken");
  //get cover photo from user to img tag


  const coverSubmit = async (e) => {
    console.log('line 13');
   e.preventDefault()
   if(token){
     setUserCover(e.target.files[0])
     console.log(e.target.files[0]);
     const file = JSON.stringify(e.target.files[0])
     try{
       await DataService.createAuth(`users/me`, {'cover':file} , token)
       
       
      }catch{
       
       console.log('line 23');

     }
   }
   console.log('line 27');
  };

  return (
    <div className="cover-container">
      <img src="#sd" alt="cover pic"></img>
      <form   encType="multipart/form-data">
      <button  className="edit-photo">
        <i className="fas fa-camera"> </i> Edit Cover Photo
      </button>
      </form>
      <form   encType="multipart/form-data" method="post">
        <input type="file" name="cover" onChange={(e)=>coverSubmit(e)} />
        
      </form>
      <Avatar />
      <h2 className="profile-name">
        first_name + last-name <hr className="underLine" />
      </h2>
    </div>
  );
};

export default Cover;
