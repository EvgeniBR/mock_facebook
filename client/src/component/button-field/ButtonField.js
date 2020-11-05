import React from "react";
import './ButtonField.css'


const ButtonField = ({btnText , btnWidth , btnColor , handleClick}) => {
    const btnStyle = {
        width:btnWidth,
        backgroundColor:btnColor
    }
  return (
    <button className="BtnField" style={btnStyle} onClick={() => handleClick()} >{btnText}</button>
  );
}

export default ButtonField;
