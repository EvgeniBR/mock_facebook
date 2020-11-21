import React , {useState,useEffect}  from "react";
import './Profile.css'
import DataService from "../db-connection/DataService";
import Cookies from 'universal-cookie';

const Avatar = ({data , theme}) => {
  const [newAvatar , setNewAvatar ] = useState('')
  const [profileAvatar , setProfileAvatar] = useState('')
  const cookies = new Cookies();
  const token = cookies.get("mockFacebookToken");

  useEffect(()=>{
    if(newAvatar){
      const getNewData =  async () => {
       const newData = await DataService.getAuth(`users/me`, token);
       localStorage.removeItem('userAvatar')
       localStorage.setItem('userAvatar',  newData.data.avatar);
       setProfileAvatar(localStorage.getItem('userAvatar'))
       console.log("yo yo yo");
      }
      getNewData()
    }
  },[newAvatar])

  useEffect(() => {
    if(data.avatar){
      setProfileAvatar(data.avatar)
    }
  },[data.avatar])
  
  const profileSubmit = async (e) => {
    let profileData = new FormData();
    profileData.append("avatar", e.target.files[0]);
   e.preventDefault(e.target.files[0]);
   if(token){
     try{
       await DataService.createAuthP(`users/me`, profileData , token)
       setNewAvatar(e.target.files[0])
      }catch{
     }
   }
  };
 
  
  return (
    <div  className="profile-container" style={{border:`2px soild ${theme.coverBot}`}}>
         <img src={`data:image/png;base64,${profileAvatar}`} alt="profile pic"></img>
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



