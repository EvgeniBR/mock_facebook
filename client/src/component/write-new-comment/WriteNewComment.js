import React, { useState } from "react";
import "./WriteNewComment.css";
import CircleIcon from "../circle-Img/CircleIcon";

const WriteNewComment = ( {updateNewComment , userAvatar}) => {
  const [value, setValue] = useState("");
  return (
    <div className="WriteNewComment">
      <CircleIcon srcIcon={userAvatar} />
      <input
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
