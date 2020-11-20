import React , {useRef} from "react";

const DropDownOptions = (props) => {
  const dropDownRef = useRef(null);

  const handleDropDownClick = (e) => {
    if(!dropDownRef.current.contains(e.target)){
      props.handleCloseDropDown(false)
    }
  }

  return <div className="dropDown" onClick={handleDropDownClick}>
    <div className="dropDownOptions" ref={dropDownRef} style={{backgroundColor:`${props.background}` , border:`1px solid ${props.border}`}}>
      {props.children}
    </div>
  </div>
   

};

export default DropDownOptions;
