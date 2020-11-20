import React from "react";
import "./CircleDivWithIcon.css";

const CircleDivWithIcon = ({ icon, size, backgroundColor , color }) => {
  return (
    <div
      className="circleDivWithIcon"
      style={{ width: size, height: size, backgroundColor: backgroundColor , color:color }}
    >
      <i className={icon}></i>
    </div>
  );
};

CircleDivWithIcon.defaultProps = {
  size: "30px",
};

export default CircleDivWithIcon;
