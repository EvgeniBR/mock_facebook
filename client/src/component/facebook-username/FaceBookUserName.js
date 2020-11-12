import React, { useState } from "react";
import { Link } from "react-router-dom";
import './FaceBookUserName.css'

const FaceBookUserName = ({firstName , lastName , path , fontColor }) => {

  return <Link className="PostUserName" style={{color: `${fontColor}`}} to={path}>{firstName} {lastName}</Link>;
};

FaceBookUserName.defaultProps = {
  path: '/'
}

export default FaceBookUserName;
