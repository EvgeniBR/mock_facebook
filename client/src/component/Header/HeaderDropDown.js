import React from "react";
import DropDownOptions from "../dropdown-options/DropDownOptions";
import DropDownAccount from "../dropdown-options/DropDownAccount";
import CircleDivWithIcon from '../circle-div/CircleDivWithIcon';
import "./Header.css";

const HeaderDropDown = ({handleClick,btnName,id,theme,userName,userAvatar,showDropDown,userPath,changeDisplayMode ,themePick}) => {
  const handleDropDownClick = () => {
    handleClick(true);
  };

  const handleCloseDropDown = (value) => {
    handleClick(value);
  };

  return (
    <div className="divButtonContainer">
      <button className="right-btn" onClick={handleDropDownClick}>
        <CircleDivWithIcon icon={btnName} backgroundColor={theme.postCommentBackground} color={theme.primaryText} size="35px"/>
      </button>
      {showDropDown && (
        <DropDownOptions
          background={theme.postBackground}
          border={theme.dropDownBorder}
          handleCloseDropDown={handleCloseDropDown}
        >
          <DropDownAccount
            userName={userName}
            userAvatar={userAvatar}
            theme={theme}
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
