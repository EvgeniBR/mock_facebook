import React, { useState } from "react";
import { Link } from "react-router-dom";
import './FaceBookUserName.css'

const FaceBookUserName = ({firstName , lastName , path}) => {
  return <Link className="PostUserName" to={path}>{firstName} {lastName}</Link>;
};

FaceBookUserName.defaultProps = {
  path: '/'
}

export default FaceBookUserName;
