import React from "react";
import './ButtonField.css'


const ButtonField = ({btnText , btnWidth , btnColor}) => {
    const btnStyle = {
        width:btnWidth,
        backgroundColor:btnColor
    }
  return (
    <button className="BtnField" style={btnStyle} >{btnText}</button>
  );
}

export default ButtonField;
