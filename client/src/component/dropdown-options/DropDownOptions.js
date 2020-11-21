import React , {useRef} from "react";

const DropDownOptions = (props) => {
  const dropDownRef = useRef(null);

  const handleDropDownClick = (e) => {
    if(!dropDownRef.current.contains(e.target)){
      props.handleCloseDropDown(false)
    }
  }

  return <div className="dropDown" onClick={handleDropDownClick}>
    <div className="dropDownOptions" ref={dropDownRef} style={{backgroundColor:`${props.background}` , border:`1px solid ${props.border}` , top:`${props.top}` ,right:`${props.right}`}}>
      {props.children}
    </div>
  </div>
   

};

DropDownOptions.defaultProps  = {
  top:"55px",
  right:"0",
};

export default DropDownOptions;
