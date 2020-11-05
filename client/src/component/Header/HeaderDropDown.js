import React from "react";


const HeaderDropDown = ({handleClick , btnName}) => {

  
 
  
  return (
    <div>
        <button onClick={handleClick} >{btnName}</button>
    </div>
  );
  
}

export default HeaderDropDown;
