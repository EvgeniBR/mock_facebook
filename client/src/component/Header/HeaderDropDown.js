import React from "react";
import DropDownOptions from "../dropdown-options/DropDownOptions";
import DropDownAccount from "../dropdown-options/DropDownAccount";
import "./Header.css";

const HeaderDropDown = ({handleClick,btnName,id,theme,userName,userAvatar,showDropDown,userPath,changeDisplayMode}) => {
  const handleDropDownClick = (e) => {
    handleClick(true);
  };

  const handleCloseDropDown = (value) => {
    handleClick(value);
  };

  return (
    <div className="divButtonContainer">
      <button className="right-btn" onClick={handleDropDownClick}>
        <i id={id} className={btnName}></i>
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
          />
        </DropDownOptions>
      )}
    </div>
  );
};

export default HeaderDropDown;
