import React , {useCallback} from "react";
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from './component/Header/Header'
import FeedPage from "./feed-page/FeedPage";
import Login from "./login-page/Login";
import Profile from "./profile-page/Profile";

const Facebook = () => {

  return (
    <Router>
      <Header/>
      <Profile />
      <Switch>
        <Route exact path="/" render={(props) => <FeedPage {...props} />} /> 
        <Route path="/register" render={(props) => <Login {...props} />} />
      </Switch>
    </Router>
  );
}

export default Facebook;
