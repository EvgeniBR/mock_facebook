import React, { useState , useEffect } from "react";
import "./Profile.css";
import Avatar from "./Avatar";
import DataService from "../db-connection/DataService";

import Cookies from "universal-cookie";

const Cover = (props) => {
  useEffect(()=>{
     console.log('cover',props.data.data);
     
     
      })

  const cookies = new Cookies();
  const token = cookies.get("mockFacebookToken");
  //get cover photo from user to img tag

  const coverSubmit = async (e) => {
    let data = new FormData();
    data.append("cover", e.target.files[0]);
    e.preventDefault();
    if (token) {
      try {
        await DataService.createAuth(`users/me`, data, token);
      } catch {
        console.log("line 23");
      }
    }
  };
if(props.length === 0 || props.data.data === undefined ){
  return(
    <div>Loading</div>
  )
}
  return (
    <div className="cover-container">
      <img src={`data:image/png;base64,${props.data.data.cover}`}
      alt="111"
      />
      <form encType="multipart/form-data"  method="post">
        <label htmlFor="file" className="edit-photo">
          <i className="fas fa-camera"> </i> Edit Cover Photo
          </label>
          <input style={{display:"none"}} id="file" type="file" name="cover" onChange={(e) => coverSubmit(e)} />
      </form>
      
      <Avatar data={props.data.data} />
      <h2 className="profile-name">
        {`${props.data.data.first_name} ${props.data.data.last_name}`} <hr className="underLine" />
      </h2>
    </div>
  );
};

export default Cover;
