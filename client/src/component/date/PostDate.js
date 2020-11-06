import React from "react";
import costumDate from '../../Util/costumDate';

const PostDate = ({time}) => {
  const postTime = costumDate.getPostTime(time)

  return <div>{postTime.date}</div>;
};

export default PostDate;
