import React from "react";
import './PostButton.css'

const PostButton = ({icon , info}) => {
return <button className="PastButton">
    <i className={icon}></i>
    {info}
    </button>;
};

export default PostButton;
