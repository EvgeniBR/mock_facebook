import React from "react";
import { Link } from "react-router-dom";
import './Header.css'
import SearchBar from './SearchBar'
import HeaderDropDown from './HeaderDropDown'


const Header = () => {

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
       <Link className="facebookHomeBtn headerBtn" to="/">Home</Link> 
       <Link className="facebookWatchBtn headerBtn" to="/watch">Watch</Link> 
       <Link className="facebookMarketPlaceBtn headerBtn" to="/marketPlace">MarketPlace</Link> 
       <Link className="facebookGroupsBtn headerBtn" to="/groups">Groups</Link> 
       <Link className="facebookGamingBtn headerBtn" to="/gaming">Gaming</Link> 
       </div>
       <div className="rightSideBtns">
       <Link className="facebookProfileBtn" to="/:path">Me</Link> 
       <HeaderDropDown btnName="+" handleClick={onCreateClick}/>
       <HeaderDropDown btnName="Massanger " handleClick={onMassangerClick}/>
       <HeaderDropDown btnName="Notifications" handleClick={onNotificationsClick}/>
       <HeaderDropDown btnName="Account" handleClick={onAccountClick}/>
       </div>
   </header>
  );
}

export default Header;
