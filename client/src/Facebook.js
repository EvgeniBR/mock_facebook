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
  let location = "";
  const token = cookies.get("mockFacebookToken");

  useEffect(() => {
    location = window.location;
  });

  useEffect(() => {
    if (token) {
      async function getData() {
        const user = await DataService.getAuth("users/me", token);
        setUserPath(user.data.path);
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
          <Header userPath={userPath} />
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
