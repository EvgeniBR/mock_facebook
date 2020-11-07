import React from "react";
import "./NewPostField.css";
import CircleIcon from "../circle-Img/CircleIcon";
import FaceBookUserName from "../facebook-username/FaceBookUserName";

const NewPostField = () => {
  return (
    <div className="NewPostField">
      <div className="NewPostFieldBox">
        <div className="NewPostFieldBox__header">
          <h2>Create Post</h2>
        </div>
        <div>
          <div className="NewPostFieldBox__userData">
            <CircleIcon />
            <FaceBookUserName
              firstName="dorin"
              lastName="zrihen"
              path="/zrihen.1"
            />
          </div>
          <div className="NewPostFieldBox__main">
              <textarea placeholder="What's on your mind?"></textarea>
              <button>Post</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPostField;
