import React from "react";
import { Link } from "react-router-dom";
import './Header.css'
import SearchBar from './SearchBar'
import HeaderDropDown from './HeaderDropDown'


const Header = ({userPath}) => {

   const onCreateClick = () =>{
       console.log('create click');
   }
   const onMassangerClick = () =>{
       console.log('Massanger click');
   }
   const onNotificationsClick = () =>{
       console.log('Notifications click');
   }
   const onAccountClick = () =>{
       console.log('Account click');
   }

  return (
   <header className="header">
       <div className="leftSideBtns">
       <Link className="facebookLogoBtn" to="/"><img className="mainLogo" src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512" alt="logo"></img> </Link>
       <SearchBar/>
       </div>
       <div className="middleBtns">
       <Link className="facebookHomeBtn headerBtn" to="/"><i className="fas fa-home fa-2x"></i></Link> 
       <Link className="facebookWatchBtn headerBtn" to="/watch"><i className="fab fa-youtube fa-2x"></i></Link> 
       <Link className="facebookMarketPlaceBtn headerBtn" to="/marketPlace"><i className="fas fa-store fa-2x"></i></Link> 
       <Link className="facebookGroupsBtn headerBtn" to="/groups"><i className="fas fa-users fa-2x"></i></Link> 
       <Link className="facebookGamingBtn headerBtn" to="/gaming"><i className="fas fa-gamepad fa-2x"></i></Link> 
       </div>
       <div className="rightSideBtns">
       <Link className="facebookProfileBtn" to={userPath}>Me</Link> 
       <HeaderDropDown btnName="fas fa-plus" handleClick={onCreateClick}/>
       <HeaderDropDown btnName="fab fa-facebook-messenger " handleClick={onMassangerClick}/>
       <HeaderDropDown btnName="fas fa-bell" handleClick={onNotificationsClick}/>
       <HeaderDropDown btnName="fas fa-sort-down" handleClick={onAccountClick}/>
       </div>
   </header>
  );
}

export default Header;
