import React from "react";
import "./CircleIcon.css";

const CircleIcon = ({srcIcon}) => {
  return <div className="CircleIcon">
      <img src={`data:image/png;base64,${srcIcon}`} alt="profile picture"/>
  </div>;
};

export default CircleIcon;
