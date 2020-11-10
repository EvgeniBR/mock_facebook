import { useHistory } from "react-router-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./component/Header/Header";
import FeedPage from "./feed-page/FeedPage";
import Login from "./login-page/Login";
import ProfileRender from "./component/profile-render/ProfileRender";
import PageContainer from "../src/component/page-container/PageContaine";

import { useEffect } from "react";

const Facebook = () => {

  
 let location = (window.location);
  
const pathLocation =(location.pathname);

  if (pathLocation === "/register") {
    return (
      <BrowserRouter>
      
        <Route exact path="/register"> <Login /></Route>
         
        
      </BrowserRouter>
    );
  }
  return (
    <BrowserRouter>
      <Header />
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
