import React, { useState } from "react";
import "./DropDownOptions.css";
import CircleIcon from "../circle-Img/CircleIcon";
import CircleDivWithIcon from "../circle-div/CircleDivWithIcon";
import { useHistory } from "react-router-dom";

const DropDownAccount = ({
  userPath,
  userAvatar,
  userName,
  theme,
  handleCloseDropDown,
  changeDisplayMode,
  themePick
}) => {
  const [showChangeOptions, setShowChangeOptions] = useState(false);
  let history = useHistory();

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

  const option = {
    color: theme.primaryText,
    padding: "10px",
  };

  const displayPreference = () => {
    return (
      <div className="displayPreference">
        <div className="dropDownAccount__mainOption">
          <CircleDivWithIcon
            icon="fas fa-moon"
            backgroundColor={theme.postCommentBackground}
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
    <div style={option}>
      <div
        className="dropDownAccount__header"
        style={{ borderBottom: `1px solid ${theme.dropDownBorder}` }}
        onClick={handleMoveToProfile}
      >
        <CircleIcon srcIcon={userAvatar} size="60px" />
        <div style={{ marginLeft: theme.postMargin }}>
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
          backgroundColor={theme.postCommentBackground}
        />
        <p className="dropDownAccount__pTtile">Display Preferences</p>
      </div>
      {showChangeOptions && displayPreference()}
      <div className="dropDownAccount__mainOption">
        <CircleDivWithIcon
          icon="fas fa-sign-out-alt"
          backgroundColor={theme.postCommentBackground}
        />
        <p className="dropDownAccount__pTtile">Log Out</p>
      </div>
      <p className="facebookPolicy">
        Privacy · Terms · Advertising · Ad Choices · Cookies · Facebook © 2020
      </p>
    </div>
  );
};

export default DropDownAccount;
