import React, { useState } from "react";
import "./WriteNewComment.css";
import CircleIcon from "../circle-Img/CircleIcon";

const WriteNewComment = ({srcAvatar , updateNewComment}) => {
  const [value, setValue] = useState("");
  return (
    <div className="WriteNewComment">
      <CircleIcon srcIcon={srcAvatar} />
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
