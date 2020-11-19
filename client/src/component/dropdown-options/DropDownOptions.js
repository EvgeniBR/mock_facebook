import React from "react";

const DropDownOptions = (props , ref) => {


  return <div className="dropDownOptions" style={{backgroundColor:`${props.theme.postBackground}`}}>
      {props.children}
  </div>
   

};

export default DropDownOptions;
