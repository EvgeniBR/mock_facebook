import React , { useState } from "react";
import "./Login.css";
import LoginField from '../component/login-filed/LoginField';
import SignUp from '../component/signup/SignUp';
import Cookies from "universal-cookie";

function Login() {
  const [residterMode, setRegisterMode] = useState(false);



  const closeSignUpPopUp = () => {
    setRegisterMode(false)
  }

  const register = (residterMode&&<SignUp closeSignUpPopUp={closeSignUpPopUp}/>)
  return (
    <div className="Login">
      {register}
      <div className="Login-main">
        <div className="Login-title">
          <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="facebook-logo" />
          <h2>Connect with friends and the world around you on Facebook.</h2>
        </div>
        <div className="Login-login-form">
            <LoginField handleClick={() => setRegisterMode(true)}/>
        </div>
      </div>
    </div>
  );
}

export default Login;
