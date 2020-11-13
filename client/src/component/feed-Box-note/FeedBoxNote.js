import React from "react";
import "./FeedBoxNote.css";

const FeedBoxNote = (props) => {
 
  return (
    <div className="FeedBoxNote" >
        {props.children}
    </div>
  );
};

export default FeedBoxNote;
