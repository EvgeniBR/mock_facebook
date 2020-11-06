import React from "react";


const HeaderDropDown = ({handleClick , btnName}) => {

  
 
  
  return (
    <div>
        <button onClick={handleClick} ><i className={btnName}></i></button>
    </div>
  );
  
}

export default HeaderDropDown;
