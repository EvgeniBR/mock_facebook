import React from "react";
import "./Profile.css";
import Avatar from "./Avatar";
import DataService from "../db-connection/DataService";
import Cookies from "universal-cookie";


const Cover = ({data , theme}) => {
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

  if(data.length !== 0 && data.data !== undefined && theme !== null ){
    return (
      <div className="cover-container" style={{backgroundImage:`linear-gradient(${theme.coverTop} 25% , ${theme.coverBot} 75%)`}}>
        <img src={`data:image/png;base64,${data.data.cover}`}
        alt="111"
        />
        <form encType="multipart/form-data"  method="post">
          <label htmlFor="file" className="edit-photo">
            <i className="fas fa-camera"> </i> Edit Cover Photo
            </label>
            <input style={{display:"none"}} id="file" type="file" name="cover" onChange={(e) => coverSubmit(e)} />
        </form>
        
        <Avatar data={data.data} theme={theme}/>
        <h2 className="profile-name">
          {`${data.data.first_name} ${data.data.last_name}`} <hr className="underLine" />
        </h2>
      </div>
    );
  }
  else{
    return(
      <div>Loading</div>
    )
  }
 
};

export default Cover;
