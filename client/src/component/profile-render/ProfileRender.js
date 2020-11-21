import React, { useEffect, useState } from "react";
import Profile from "../../profile-page/Profile";
import FriendProfile from "../../friend-profile-page copy/FriendProfile";
import DataService from "../../db-connection/DataService";
import Cookies from "universal-cookie";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";

const ProfileRender = ({currentUserPath , theme}) => {
  const [userData, setUserData] = useState([]);
  const [endUser, setEndUser] = useState(null);

  const cookies = new Cookies();
  let token = cookies.get("mockFacebookToken");
  let history = useHistory();
  const location = useLocation();


  useEffect(() => {
    if (!token) {
      //the user not have token so automove to register page
      history.push("/register");
    }
    const getData = async () => {
      const currentPath = location.pathname;
      if(currentUserPath){
        if ( currentPath === `/${currentUserPath}`) {
          const user = await DataService.getAuth("users/me", token);
          setEndUser("me");
          setUserData(user);
        } else {
          const user = await DataService.getFriendProfile(`${currentPath}`);
          setUserData(user);
          setEndUser("friend");
        }
      }
    };
    getData();
  }, [location.pathname , currentUserPath , token]);


  console.log(endUser);

  if (endUser === "me") {
    return (
      <Profile data={userData} userPath={currentUserPath} theme={theme}/>
    );
  }
  else if(endUser === "friend") {
    return (
      <FriendProfile data={userData} userPath={currentUserPath} theme={theme}/>
    );
  }
  else{
    return <div>Loading</div>;
  }
};

export default ProfileRender;
