import React, { useState, useEffect , useRef} from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./component/Header/Header";
import FeedPage from "./feed-page/FeedPage";
import Login from "./login-page/Login";
import ProfileRender from "./component/profile-render/ProfileRender";
import Cookies from "universal-cookie";
import DataService from "./db-connection/DataService";

const Facebook = () => {
  const [userPath, setUserPath] = useState("");
  const [userName, setUserName] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const cookies = new Cookies();
  const location = useRef(window.location)
  const token = cookies.get("mockFacebookToken");


  useEffect(() => {
    if (token) {
      async function getData() {
        const user = await DataService.getAuth("users/me", token);
        setUserPath(user.data.path);
        setUserName(`${user.data.first_name} ${user.data.last_name}`)
        setUserAvatar(user.data.avatar)
      }
      getData();
    }
  }, [token, location.pathname]);

  const pathLocation = location.pathname;

  //get the user path fropm the token.

  if (pathLocation === "/register" || !token) {
    return (
      <BrowserRouter>
        <Route exact path="/">
          <Header userPath={userPath} userName={userName} userAvatar={userAvatar}/>
          <FeedPage />
        </Route>
        <Route exact path="/register">
          <Login />
        </Route>
      </BrowserRouter>
    );
  }
  return (
    <BrowserRouter>
      <Header userPath={userPath} userName={userName} userAvatar={userAvatar}/>
      <Route exact path="/">
        {" "}
      </Route>
      <Route exact path="/">
        <FeedPage currentUserPath={userPath}/>
      </Route>
      <Route path="/:username">
        <ProfileRender />
      </Route>
    </BrowserRouter>
  );
};

export default Facebook;
