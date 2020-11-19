import React from "react";
import "./CircleDivWithIcon.css";

const CircleDivWithIcon = ({icon , size}) => {
  return <div className="circleDivWithIcon" style={{width:size , height:size}}>
      <i className={icon}></i>
  </div>;
};

CircleDivWithIcon.defaultProps = {
  size:"40px"
}

export default CircleDivWithIcon;
