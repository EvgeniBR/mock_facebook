import React, { useEffect, useState } from "react";
import Cover from "./Cover";
import ProfileHeader from "./ProfileHeader";
import PostContainer from "../component/post-container/PostContainer";
// import Cookies from "universal-cookie";
// import DataService from "../db-connection/DataService";
// import { useHistory } from "react-router-dom";
// import { keyframes, ThemeProvider } from "styled-components";
// import { lightTheme, darkTheme } from "../theme";
// import { GlobalStyles } from "../global";

const Profile = ({ data, userPath, theme }) => {
  // const [userName, setUserName] = useState("");
  // const [userLastName, setUserLastName] = useState("");
  // const [userPath, setUserPath] = useState("");
  // const [profilePicture, setProfilePicture] = useState("");
  // const [friendRequests, setFriendRequests] = useState("");

  // const cookies = new Cookies();
  // let history = useHistory();

  // console.log(data)
  // useEffect(() => {
  //   // const token = cookies.get("mockFacebookToken");
  //   // if (!token) {
  //   //   //the user not have token so automove to register page
  //   //   history.push("/register");
  //   // }
  //   // async function getData() {
  //   //   const user = await DataService.getAuth("users/me", token);
  //   //   setUserName(user.data.first_name);
  //   //   setUserLastName(user.data.last_name);
  //   //   setUserPath(user.data.path);
  //   //   setProfilePicture(user.data.avatar);
  //   //   // setFriendRequests(user.data.friendsRequest);
  //   // }
  //   // getData();
  //   // false ? setTheme(lightTheme) : setTheme(darkTheme)
  // // eslint-disable-next-line
  // }, []);

  if(data.data && theme){
    return (
      <div>
        <Cover data={data} />
        <br />
        <ProfileHeader theme={theme} />
        <PostContainer
          // writePost={() => setWritePostMode(true)}
          profileAvatar={data.data.avatar}
          firstName={data.data.first_name}
          lastName={data.data.last_name}
          userPath={userPath}
          theme={theme}
        />
      </div>
    );
  }
  else{
    return <div></div>
  }
  
};

export default Profile;
