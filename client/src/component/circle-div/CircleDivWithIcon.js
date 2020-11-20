import React from "react";
import "./CircleDivWithIcon.css";

const CircleDivWithIcon = ({ icon, size, backgroundColor }) => {
  return (
    <div
      className="circleDivWithIcon"
      style={{ width: size, height: size, backgroundColor: backgroundColor }}
    >
      <i className={icon}></i>
    </div>
  );
};

CircleDivWithIcon.defaultProps = {
  size: "30px",
};

export default CircleDivWithIcon;
