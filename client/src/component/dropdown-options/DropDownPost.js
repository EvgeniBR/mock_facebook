import React from "react";
import "./DropDownOptions.css";
import CircleDivWithIcon from "../circle-div/CircleDivWithIcon";
import DataService from '../../db-connection/DataService';

const DropDownPost = ({ theme  , id , removePostVisavility}) => {
  const option = {
    color: theme.primaryText,
    padding: "10px",
  };

  const deletePost = async () => {
    await DataService.remove(`/facebook-post/${id}`);
    removePostVisavility(false);
  }

  return (
    <div style={option}>
      <div className="dropDownAccount__mainOption">
        <CircleDivWithIcon
          icon="fas fa-pencil-alt"
          backgroundColor={theme.postCommentBackground}
        />
        <p className="dropDownAccount__pTtile">
          Edit post
        </p>
      </div>
      <div className="dropDownAccount__mainOption">
        <CircleDivWithIcon
          icon="fas fa-trash-alt"
          backgroundColor={theme.postCommentBackground}
        />
        <p className="dropDownAccount__pTtile" onClick={deletePost}>
          Delete post
        </p>
      </div>
    </div>
  );
};

export default DropDownPost;
