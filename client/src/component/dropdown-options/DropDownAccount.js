import React from "react";
import './DropDownOptions.css'
import CircleIcon from '../circle-Img/CircleIcon';
import CircleDivWithIcon from '../circle-div/CircleDivWithIcon';

const DropDownAccount = ({userAvatar , userName}) => {


  return <div>
    <div className="dropDownAccount__header">
        <CircleIcon srcIcon={userAvatar} size="60px"/>
        <div>
            <p>{userName}</p>
            <p>See your Profile</p>
        </div>
    </div>
    <div>
        <CircleDivWithIcon icon="fas fa-moon"/>
        <p>Display Preferences</p>
    </div>
    <div>
        <CircleDivWithIcon icon="fas fa-sign-out-alt"/>
        <p>Log Out</p>
    </div>
    <p className="facebookPolicy">Privacy  · Terms  · Advertising  · Ad Choices   · Cookies  · Facebook © 2020</p>
  </div>
   

};

export default DropDownAccount;
