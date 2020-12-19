import React, { useState } from "react";
import "./DropDownOptions.css";
import CircleIcon from "../circle-Img/CircleIcon";
import CircleDivWithIcon from "../circle-div/CircleDivWithIcon";
import { useHistory } from "react-router-dom";
import Cookies from "universal-cookie";
import * as DropDown from "./DropDownOptions.style";

const DropDownAccount = ({
  userPath,
  userAvatar,
  userName,
  handleCloseDropDown,
  changeDisplayMode,
  themePick
}) => {
  const [showChangeOptions, setShowChangeOptions] = useState(false);
  let history = useHistory();
  const cookies = new Cookies();

  const handleMoveToProfile = () => {
    handleCloseDropDown(false);
    history.push(`/${userPath}`);
  };

  const updateShowChangeOptions = () => {
    setShowChangeOptions(true);
  };

  const changeDispalyMode = (value) => {
    changeDisplayMode(value);
    handleCloseDropDown(false);
  };

  const logOutFromAcoount = async () => {
    cookies.remove('mockFacebookToken');
    cookies.remove('userName');
    cookies.remove('userLastName');
    cookies.remove('userPath');
    localStorage.removeItem('userAvatar')
    // await DataService.postAuth('users/logout',token);
    history.push('/register');
  }

  const displayPreference = () => {
    return (
      <div className="displayPreference">
        <div className="dropDownAccount__mainOption">
          <CircleDivWithIcon
            icon="fas fa-moon"
          />
          <p className="dropDownAccount__pTtile">Dark Mode</p>
        </div>
        <form >
          <label>
            <p>Off</p>
            <input type="radio" name="display" onChange={() => changeDispalyMode(false)} checked={!themePick} />
          </label>
          <label>
            <p>On</p>
            <input type="radio" name="display" onChange={() => changeDispalyMode(true)} checked={themePick}/>
          </label>
        </form>
      </div>
    );
  };

  return (
    <DropDown.Container>
      <div
        className="dropDownAccount__header"
        onClick={handleMoveToProfile}
      >
        <CircleIcon srcIcon={userAvatar} size="60px" />
        <div className="DropDownAccount__title">
          <p className="dropDownAccount__pTtile">{userName}</p>
          <p>See your Profile</p>
        </div>
      </div>
      <div
        className="dropDownAccount__mainOption"
        onClick={updateShowChangeOptions}
      >
        <CircleDivWithIcon
          icon="fas fa-moon"
        />
        <p className="dropDownAccount__pTtile">Display Preferences</p>
      </div>
      {showChangeOptions && displayPreference()}
      <div className="dropDownAccount__mainOption">
        <CircleDivWithIcon
          icon="fas fa-sign-out-alt"
        />
        <p className="dropDownAccount__pTtile" onClick={logOutFromAcoount}>Log Out</p>
      </div>
      <p className="facebookPolicy">
        Privacy · Terms · Advertising · Ad Choices · Cookies · Facebook © 2020
      </p>
    </DropDown.Container>
  );
};

export default DropDownAccount;
