import React, { useEffect, useState } from "react";
import Profile from "../../profile-page/Profile";
import FriendProfile from "../../friend-profile-page copy/FriendProfile";
import DataService from "../../db-connection/DataService";
import Cookies from "universal-cookie";
import { useLocation } from "react-router-dom";

const ProfileRender = () => {
  const [userData, setUserData] = useState([]);
  const [endUser, setEndUser] = useState(null);

  const cookies = new Cookies();
  let token = cookies.get("mockFacebookToken");

  const location = useLocation();

  useEffect(() => {
    const getData = async () => {
      const currentPath = location.pathname;
      console.log(currentPath);
      const user = await DataService.getAuth("users/me", token);
      console.log(user.data.path);
      if ( currentPath === `/${user.data.path}`) {
        setEndUser("me");
        console.log("me");
        setUserData(user);
      } else {
        const getData = async () => {
          const user = await DataService.getFriendProfile(`${currentPath}`);
          setUserData(user);
          setEndUser("friend");
          console.log("friend");
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
        <FriendProfile data={userData} />
      </div>
    );
  }
  return (
    <div>
      <Profile data={userData} />
    </div>
  );
};

export default ProfileRender;
