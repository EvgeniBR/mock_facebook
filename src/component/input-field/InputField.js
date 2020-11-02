import React, { useState } from "react";
import "./InputField.css";

const InputField = ({ Inputtype, textOfPlaceholder , handleChange}) => {
  const [inputValue, setInputValue] = useState("");
  return (
    <input
      className="InputField"
      type={Inputtype}
      placeholder={textOfPlaceholder}
      value={inputValue}
      onChange={(e) => {
        setInputValue(e.target.value);
        handleChange(e.target.value);
      }}
    />
  );
};

export default InputField;
