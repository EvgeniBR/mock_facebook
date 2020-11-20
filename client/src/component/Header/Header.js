import React , {useState} from "react";
import { Link } from "react-router-dom";
import './Header.css'
import SearchBar from './SearchBar'
import HeaderDropDown from './HeaderDropDown'


const Header = ({userPath , userName , userAvatar , theme , changeDisplayMode}) => {
   const [accountDropDown , setAccountDropDown ] = useState(false) 


   const onCreateClick = () =>{
       console.log('create click');
   }
   const onMassangerClick = () =>{
       console.log('Massanger click');
   }
   const onNotificationsClick = () =>{
       console.log('Notifications click');
   }
   const onAccountClick = (value) =>{
       setAccountDropDown(value)
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
            <HeaderDropDown theme={theme} id="create" btnName="fas fa-plus" handleClick={onCreateClick}/>
            <HeaderDropDown theme={theme} id="messenger" btnName="fab fa-facebook-messenger " handleClick={onMassangerClick}/>
            <HeaderDropDown theme={theme} id="notefications" btnName="fas fa-bell" handleClick={onNotificationsClick}/>
            <HeaderDropDown theme={theme} id="account" btnName="fas fa-sort-down" userName={userName} userAvatar={userAvatar} userPath={userPath} handleClick={onAccountClick} showDropDown={accountDropDown} changeDisplayMode={changeDisplayMode}/>
        </div>
    </header>
  );
}

export default Header;
