import React , { useState } from "react";
import "./Login.css";
import LoginField from '../component/login-filed/LoginField';
import SignUp from '../component/signup/SignUp';

function Login({changeLocation}) {
  const [residterMode, setRegisterMode] = useState(false);

  const closeSignUpPopUp = () => {
    setRegisterMode(false)
  }

  const register = (residterMode&&<SignUp changeLocation={changeLocation} closeSignUpPopUp={closeSignUpPopUp}/>)
  return (
    <div className="Login">
      {register}
      <div className="Login-main">
        <div className="Login-title">
          <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="facebook-logo" />
          <h2>Connect with friends and the world around you on Facebook.</h2>
        </div>
        <div className="Login-login-form">
            <LoginField changeLocation={changeLocation} handleClick={() => setRegisterMode(true)}/>
        </div>
      </div>
    </div>
  );
}

export default Login;
