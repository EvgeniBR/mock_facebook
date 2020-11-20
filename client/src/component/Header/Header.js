import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import SearchBar from "./SearchBar";
import HeaderDropDown from "./HeaderDropDown";
import CircleIcon from "../circle-Img/CircleIcon";
import { useHistory } from "react-router-dom";

const Header = ({userPath,userName,userLastName,userAvatar,theme,changeDisplayMode,themePick}) => {
  const [accountDropDown, setAccountDropDown] = useState(false);
  const [userBtnHoverColor, setUserBtnHoverColor] = useState("rgba(0,0,0,0)");
  let history = useHistory();

  const goToUserProfile = () => {
      history.push(`/${userPath}`)
  }

  const onCreateClick = () => {
    console.log("create click");
  };
  const onMassangerClick = () => {
    console.log("Massanger click");
  };
  const onNotificationsClick = () => {
    console.log("Notifications click");
  };
  const onAccountClick = (value) => {
    setAccountDropDown(value);
  };

  const btnTheme = {
    color: theme.primaryText,
  };

  const userBtnStyle = {
    backgroundColor: userBtnHoverColor,
  };

  return (
    <header
      className="header"
      style={{ backgroundColor: theme.postBackground }}
    >
      <div className="leftSideBtns">
        <Link className="facebookLogoBtn" to="/">
          <img
            className="mainLogo"
            src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512"
            alt="logo"
          ></img>{" "}
        </Link>
        <SearchBar
          backgroundInput={theme.postCommentBackground}
          color={theme.primaryText}
        />
      </div>
      <div className="middleBtns">
        <Link className="headerBtn" style={btnTheme} to="/">
          <i className="fas fa-home fa"></i>
        </Link>
        <Link className="headerBtn" style={btnTheme} to="/watch">
          <i className="fab fa-youtube fa"></i>
        </Link>
        <Link className="headerBtn" style={btnTheme} to="/marketPlace">
          <i className="fas fa-store fa"></i>
        </Link>
        <Link className="headerBtn" style={btnTheme} to="/groups">
          <i className="fas fa-users fa"></i>
        </Link>
        <Link className="headerBtn" style={btnTheme} to="/gaming">
          <i className="fas fa-gamepad fa"></i>
        </Link>
      </div>
      <div className="rightSideBtns" >
        <div className="facebookProfileBtn" style={userBtnStyle}
        onMouseEnter={() => {setUserBtnHoverColor(theme.postCommentBackground)}}
        onMouseLeave={() => {setUserBtnHoverColor("rgba(0,0,0,0)")}}
        onClick={goToUserProfile}
        >
          <CircleIcon srcIcon={userAvatar} size="35px" />
          <p>{userName}</p>
        </div>
        {/* <Link className="facebookProfileBtn" to={userPath}>Me</Link>  */}
        <HeaderDropDown
          theme={theme}
          id="create"
          btnName="fas fa-plus"
          handleClick={onCreateClick}
        />
        <HeaderDropDown
          theme={theme}
          id="messenger"
          btnName="fab fa-facebook-messenger "
          handleClick={onMassangerClick}
        />
        <HeaderDropDown
          theme={theme}
          id="notefications"
          btnName="fas fa-bell"
          handleClick={onNotificationsClick}
        />
        <HeaderDropDown
          theme={theme}
          id="account"
          btnName="fas fa-sort-down"
          userName={`${userName} ${userLastName}`}
          userAvatar={userAvatar}
          userPath={userPath}
          handleClick={onAccountClick}
          showDropDown={accountDropDown}
          changeDisplayMode={changeDisplayMode}
          themePick={themePick}
        />
      </div>
    </header>
  );
};

export default Header;
