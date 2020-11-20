import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./component/Header/Header";
import FeedPage from "./feed-page/FeedPage";
import Login from "./login-page/Login";
import ProfileRender from "./component/profile-render/ProfileRender";
import Cookies from "universal-cookie";
import DataService from "./db-connection/DataService";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";

const Facebook = () => {
  const [userPath, setUserPath] = useState("");
  const [userName, setUserName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const cookies = new Cookies();
  const location = useRef(window.location);
  const token = cookies.get("mockFacebookToken");
  const [theme, setTheme] = useState(lightTheme);
  const [themePick , setThemePick] = useState(false)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (token) {
      async function getData() {
        const user = await DataService.getAuth("users/me", token);
        setUserPath(user.data.path);
        setUserName(user.data.first_name);
        setUserLastName(user.data.last_name);
        setUserAvatar(user.data.avatar);
      }
      getData();
    }
  }, [token, location.pathname]);

  useEffect(() => {
    themePick ? setTheme(darkTheme) : setTheme(lightTheme)
  }, [themePick]);



  const changeDisplayMode = (value) => {
    setThemePick(value)
  }

  //get the user path from the token.
  if (location.pathname === "/register" || !token) {
    return (
      <BrowserRouter>
        <Route exact path="/">
          <ThemeProvider theme={theme}>
            <Header
              userPath={userPath}
              userName={userName}
              userLastName={userLastName}
              userAvatar={userAvatar}
              theme={theme}
              changeDisplayMode={changeDisplayMode}
              themePick={themePick}
            />
            <FeedPage currentUserPath={userPath} theme={theme} />
          </ThemeProvider>
        </Route>
        <Route exact path="/register">
          <Login />
        </Route>
      </BrowserRouter>
    );
  }
  return (
    <BrowserRouter>
      <Header
        userPath={userPath}
        userName={userName}
        userLastName={userLastName}
        userAvatar={userAvatar}
        theme={theme}
        changeDisplayMode={changeDisplayMode}
        themePick={themePick}
      />
      <Route exact path="/">
        {" "}
      </Route>
      <Route exact path="/">
        <ThemeProvider theme={theme}>
          <FeedPage currentUserPath={userPath} theme={theme} />
        </ThemeProvider>
      </Route>
      <Route path="/:username">
        <ThemeProvider theme={theme}>
          <ProfileRender currentUserPath={userPath} theme={theme} />
        </ThemeProvider>
      </Route>
    </BrowserRouter>
  );
};

export default Facebook;
