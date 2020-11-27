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
  
  const getUserData = async () => {
    setUserPath(cookies.get('userPath'));
    setUserName(cookies.get('userName'));
    setUserLastName(cookies.get('userLastName'));
    setUserAvatar(localStorage.getItem('userAvatar'));
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if(!token){
      return
    }
    async function getData() {
        const user = await DataService.getAuth("users/me", token);
        //set to cookies
        localStorage.setItem('userAvatar',user.data.avatar);
        cookies.set('userName',user.data.first_name);
        cookies.set('userLastName',user.data.last_name);
        cookies.set('userPath',user.data.path);
    }
    if(!(localStorage.getItem('userAvatar') && cookies.get('userName') && cookies.get('userLastName'))) {
      getData()
    }   
    getUserData()
  }, [token, cookies , localStorage]);

  useEffect(() => {
    setUserAvatar(localStorage.getItem('userAvatar'));
  }, [localStorage.getItem('userAvatar')]);


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
