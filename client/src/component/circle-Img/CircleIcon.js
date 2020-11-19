import React from "react";
import "./CircleIcon.css";

const CircleIcon = ({srcIcon , size}) => {
  return <div className="CircleIcon" style={{width:size , height:size}}>
      <img src={`data:image/png;base64,${srcIcon}`} alt="profile picture"/>
  </div>;
};

CircleIcon.defaultProps = {
  size:"40px"
}

export default CircleIcon;
