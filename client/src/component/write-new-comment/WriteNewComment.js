import React, { useState } from "react";
import "./WriteNewComment.css";
import CircleIcon from "../circle-Img/CircleIcon";

const WriteNewComment = ( {updateNewComment , userAvatar , theme}) => {
  const [value, setValue] = useState("");

  const writeCommentStyle = {
    padding: theme.postPadding,
    color: theme.secondText,
  }

  const writeCommentinputStyle={
    padding: theme.postPadding,
    color: theme.secondText,
    backgroundColor: theme.postCommentBackground,
    borderRadius: theme.postBorderRadius,
    marginLeft: theme.postMargin,
  }

  return (
    <div className="WriteNewComment" style={writeCommentStyle}>
      <CircleIcon srcIcon={userAvatar} />
      <input style={writeCommentinputStyle}
        placeholder="Write a comment..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.keyCode === 13) {
            updateNewComment(value);
            setValue('');
          }
        }}
      />
    </div>
  );
};

export default WriteNewComment;
