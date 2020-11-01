import React from "react";
import "./SignUp.css";
import InputField from "../input-field/InputField";
import Seperator from "../seperator/Seperator";
import MiniInfo from "../mini-info/MiniInfo";
import Selector from "../selector/Selector";
import ButtonField from "../button-field/ButtonField";

const SignUp = () => {
  return (
    <div className="SignUp-background">
      <div className="SignUp">
        <div className="SignUp-title">
          <h1>Sign Up</h1>
          <p>It's quick and easy</p>
        </div>
        <Seperator />
        <div className="SignUp-row">
          <InputField Inputtype="text" textOfPlaceholder="First name" />
          <InputField Inputtype="text" textOfPlaceholder="Last name" />
        </div>
        <div className="SignUp-columns">
          <InputField Inputtype="text" textOfPlaceholder="Email" />
          <InputField Inputtype="text" textOfPlaceholder="New password" />
        </div>
        <div className="SignUp-selector">
          <MiniInfo data="Birthday" />
          <div>
            <Selector id="months" />
            <Selector id="days" />
            <Selector id="years" />
          </div>
          <MiniInfo data="Gender" />
          <div>
            <input type="radio" id="male" name="gender" value="male" />
            <label for="male">Male</label>
            <input type="radio" id="female" name="gender" value="female" />
            <label for="female">Female</label>
            <input type="radio" id="other" name="gender" value="other" />
            <label for="other">Other</label>
          </div>
          <div className="term">
            <p>
              By clicking Sign Up, you agree to our Terms, Data Policy and
              Cookies Policy. You may receive SMS Notifications from us and can
              opt out any time.
            </p>
          </div>
        </div>
        <ButtonField btnText="Sing Up" btnWidth="60%" btnColor="#229d20"/>
      </div>
    </div>
  );
};

export default SignUp;
