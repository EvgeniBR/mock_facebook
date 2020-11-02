import React , {useCallback} from "react";
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Login from "./login-page/Login";

const Facebook = () => {
  let history = useHistory();



  return (
    <Router>
      <Switch>
        {/* <Route exact path="/" render={(props) => <App {...props} />} /> */}
        <Route path="/register" render={(props) => <Login {...props} />} />
      </Switch>
    </Router>
  );
}

export default Facebook;
