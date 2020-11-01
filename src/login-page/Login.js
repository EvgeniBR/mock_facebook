import React from "react";
import "./Login.css";
import LoginField from '../component/login-filed/LoginField';

function Login() {
  return (
    <div className="Login">
      <div className="Login-main">
        <div className="Login-title">
          <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="facebook-logo" />
          <h2>Connect with friends and the world around you on Facebook.</h2>
        </div>
        <div className="Login-login-form">
            <LoginField/>

        </div>
      </div>
    </div>
  );
}

export default Login;
