import React, { useEffect, useState } from "react";
import Profile from "../../profile-page/Profile";
import FriendProfile from "../../friend-profile-page copy/FriendProfile";
import DataService from "../../db-connection/DataService";
import Cookies from "universal-cookie";
import { useLocation } from "react-router-dom";

const ProfileRender = () => {
  const [userData, setUserData] = useState([]);
  const [endUser, setEndUser] = useState(null);
  const [userPath , setUserPath] = useState('')

  const cookies = new Cookies();
  let token = cookies.get("mockFacebookToken");

  const location = useLocation();

  useEffect(() => {
    const getData = async () => {
      const currentPath = location.pathname;
      const user = await DataService.getAuth("users/me", token);
      setUserPath(user.data.path);
      // console.log(user.data.path);
      if ( currentPath === `/${user.data.path}`) {
        setEndUser("me");
        setUserData(user);
      } else {
        const getData = async () => {
          const user = await DataService.getFriendProfile(`${currentPath}`);
          setUserData(user);
          setEndUser("friend");
        };
        getData();
      }
    };
    getData();
  }, [location.pathname , token]);



  if (endUser == null) {
    return <div>Loading</div>;
  }
  if (endUser === "friend") {
    return (
      <div className="test">
        <FriendProfile data={userData} userPath={userPath}/>
      </div>
    );
  }
  return (
    <div>
      <Profile data={userData} userPath={userPath}/>
    </div>
  );
};

export default ProfileRender;
