import React , {useState , useRef} from "react";
import DropDownOptions from '../dropdown-options/DropDownOptions';
import DropDownAccount from '../dropdown-options/DropDownAccount';
import './Header.css';


const HeaderDropDown = ({handleClick , btnName , id , theme , userName , userAvatar , showDropDown}) => {
  const dropDownRef = useRef(null);

  const handleDropDownClick = (e) => {
    handleClick(true)
  }

  const checkForCloseDropDown = (e) => {
    if(!dropDownRef.current.contains(e.target)){
      handleClick(false)
    }
  }
 
  
  return (
    <div className="divButtonContainer">
        <button className="right-btn" onClick={handleDropDownClick} ><i id={id} className={btnName}></i></button>
        {showDropDown && <DropDownOptions onClick={checkForCloseDropDown} ref={dropDownRef} theme={theme}>
              <DropDownAccount userName={userName} userAvatar={userAvatar}/>
          </DropDownOptions>}
    </div>
  );
  
}

export default HeaderDropDown;
