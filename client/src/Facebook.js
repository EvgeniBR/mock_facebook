import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./component/Header/Header";
import FeedPage from "./feed-page/FeedPage";
import Login from "./login-page/Login";
import ProfileRender from "./component/profile-render/ProfileRender";
import PageContainer from "../src/component/page-container/PageContaine";

const Facebook = () => {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <PageContainer {...props} />}
        />
        <Route path="/register" render={(props) => <Login {...props} />} />
      </Switch>
    </Router>
  );
};

export default Facebook;
