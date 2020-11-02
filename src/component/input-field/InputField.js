import React, { useState } from "react";
import "./InputField.css";

const InputField = ({ Inputtype, textOfPlaceholder }) => {
  const [inputValue, setInputValue] = useState("");
  return (
    <input
      className="InputField"
      type={Inputtype}
      placeholder={textOfPlaceholder}
      value={inputValue}
      onChange={(e) => {
        setInputValue(e.target.value);
        //לשרשר את הvalue
      }}
    />
  );
};

export default InputField;
