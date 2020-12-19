import React from "react";
import DropDownOptions from "../dropdown-options/DropDownOptions";
import DropDownAccount from "../dropdown-options/DropDownAccount";
import CircleDivWithIcon from '../circle-div/CircleDivWithIcon';
import * as StyleHeader from "./Header.style";
import "./Header.css";

const HeaderDropDown = ({handleClick,btnName,id,userName,userAvatar,showDropDown,userPath,changeDisplayMode ,themePick}) => {
  const handleDropDownClick = () => {
    handleClick(true);
  };

  const handleCloseDropDown = (value) => {
    handleClick(value);
  };

  return (
    <div>
      <StyleHeader.RigthBtn onClick={handleDropDownClick}>
        <CircleDivWithIcon icon={btnName} size="35px"/>
      </StyleHeader.RigthBtn>
      {showDropDown && (
        <DropDownOptions handleCloseDropDown={handleCloseDropDown}>
          <DropDownAccount
            userName={userName}
            userAvatar={userAvatar}
            userPath={userPath}
            handleCloseDropDown={handleCloseDropDown}
            changeDisplayMode={changeDisplayMode}
            themePick={themePick}
          />
        </DropDownOptions>
      )}
    </div>
  );
};

export default HeaderDropDown;
