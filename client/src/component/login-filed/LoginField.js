import React, { useState, useEffect } from "react";
import InputField from "../input-field/InputField";
import ButtonField from "../button-field/ButtonField";
import Seperator from "../seperator/Seperator";
import DataService from "../../db-connection/DataService";
import Cookies from "universal-cookie";
import { useHistory } from "react-router-dom";
import '../../login-page/Login.css'

const LoginField = ({ handleClick ,changeLocation}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  const cookies = new Cookies();
  let history = useHistory();

  const coociesAccess = {
    path: "/",
    sameSite: "strict",
  };

  useEffect(() => {
    if(token){
      history.push("/");
    }
  }, [token]);

  const checkForMatchUser = async () => {
    const data = {
      email,
      password,
    };
    //validation
    const validate = await DataService.create("users/login", data);
    setToken(validate.data.token);
    cookies.set("mockFacebookToken", validate.data.token, coociesAccess);
    changeLocation('/')
  };

  return (
    <>
      <InputField
        Inputtype="text"
        textOfPlaceholder="Email"
        handleChange={(value) => setEmail(value)}
      />
      <InputField
        Inputtype="password"
        textOfPlaceholder="Password"
        handleChange={(value) => setPassword(value)}
      />
      <ButtonField
        btnText="Log In"
        btnWidth="100%"
        btnColor="#504ddb"
        handleClick={checkForMatchUser}
      />
      <a style={{textAlign:"center"}} href="">Forgot Password?</a>
      <Seperator />
      <ButtonField
        btnText="Create New Account"
        btnColor="#229d20"
        btnWidth="60%"
        handleClick={() => handleClick()}
      />
    </>
  );
};

export default LoginField;
