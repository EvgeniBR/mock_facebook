import React from "react";
import Header from "../Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProfileRender from "../profile-render/ProfileRender";
import FeedPage from "../../feed-page/FeedPage";


const PageContainer = () => {
  return (
    <Router>
      <Header />
     
        <Route exact path="/">
          
          <FeedPage />
        </Route>
        <Route path="/:username"><ProfileRender/></Route>
     
    </Router>
  );
};

export default PageContainer;
