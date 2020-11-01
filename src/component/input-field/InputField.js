import React from "react";
import "./InputField.css";

const InputField = ({Inputtype , textOfPlaceholder}) => {
  return (
    <input
      className="InputField"
      type={Inputtype}
      placeholder={textOfPlaceholder}
    />
  );
};

export default InputField;
