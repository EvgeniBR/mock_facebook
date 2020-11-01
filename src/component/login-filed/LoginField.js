import React from "react";
import InputField from "../input-field/InputField";
import ButtonField from "../button-field/ButtonField";
import './LoginField.css'
import Seperator from "../seperator/Seperator";


const LoginField = () => {
  return (
    <div >
        <InputField Inputtype="text" textOfPlaceholder="Email"/>
        <InputField Inputtype="password" textOfPlaceholder="Password"/>
        <ButtonField btnText="Log In" btnWidth="100%" btnColor="#504ddb"/>
        <a href="">Forgot Password?</a>
        <Seperator />
        <ButtonField btnText="Create New Account" btnColor="#229d20"/>
    </div>
  );
}

export default LoginField;
