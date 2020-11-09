import React from "react";
import Header from "../Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProfileRender from "../profile-render/ProfileRender";
import FeedPage from "../../feed-page/FeedPage";


const PageContainer = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <FeedPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default PageContainer;
