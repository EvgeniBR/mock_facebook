import React, { useState } from "react";
import { Link ,useHistory } from "react-router-dom";
import SearchBar from "./SearchBar";
import HeaderDropDown from "./HeaderDropDown";
import CircleIcon from "../circle-Img/CircleIcon";
import * as StyleHeader from "./Header.style";

const Header = ({userPath,userName,userLastName,userAvatar,changeDisplayMode,themePick}) => {
  const [accountDropDown, setAccountDropDown] = useState(false);
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

  return (
    <StyleHeader.Container>
      <div className="leftSideBtns">
        <Link to="/">
          <img
            className="mainLogo"
            src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512"
            alt="logo"
          ></img>
        </Link>
        <SearchBar/>
      </div>
      <div className="middleBtns">
        <Link className="headerBtn" to="/">
          <i className="fas fa-home fa"></i>
        </Link>
        <Link className="headerBtn" to="/watch">
          <i className="fab fa-youtube fa"></i>
        </Link>
        <Link className="headerBtn" to="/marketPlace">
          <i className="fas fa-store fa"></i>
        </Link>
        <Link className="headerBtn" to="/groups">
          <i className="fas fa-users fa"></i>
        </Link>
        <Link className="headerBtn" to="/gaming">
          <i className="fas fa-gamepad fa"></i>
        </Link>
      </div>
      <div className="rightSideBtns" >
        <StyleHeader.FacebookProfileBtn onClick={goToUserProfile}>
          <CircleIcon srcIcon={userAvatar} size="35px" />
          <p>{userName}</p>
        </StyleHeader.FacebookProfileBtn>
        <HeaderDropDown
          id="create"
          btnName="fas fa-plus"
          handleClick={onCreateClick}
        />
        <HeaderDropDown
          id="messenger"
          btnName="fab fa-facebook-messenger "
          handleClick={onMassangerClick}
        />
        <HeaderDropDown
          id="notefications"
          btnName="fas fa-bell"
          handleClick={onNotificationsClick}
        />
        <HeaderDropDown
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
    </StyleHeader.Container>
  );
};

export default Header;
