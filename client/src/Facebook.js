import React, { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./component/Header/Header";
import FeedPage from "./feed-page/FeedPage";
import Login from "./login-page/Login";
import ProfileRender from "./component/profile-render/ProfileRender";
import Cookies from "universal-cookie";
import DataService from "./db-connection/DataService";

const Facebook = () => {
  const [userPath, setUserPath] = useState("");
  const cookies = new Cookies();
  let location = window.location;
  const token = cookies.get("mockFacebookToken");

  useEffect(() => {
    if (token) {
      async function getData() {
        const user = await DataService.getAuth("users/me", token);
        setUserPath(user.data.path);
      }
      getData();
    }
  }, []);

  const pathLocation = location.pathname;

  //get the user path fropm the token.

  if (pathLocation === "/register" || !token) {
    return <Login />;
  }
  return (
    <BrowserRouter>
      <Header userPath={userPath} />
      <Route exact path="/">
        {" "}
      </Route>
      <Route exact path="/">
        <FeedPage />
      </Route>
      <Route path="/:username">
        <ProfileRender />
      </Route>
    </BrowserRouter>
  );
};

export default Facebook;
