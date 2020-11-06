import React from "react";
import Date from '../../Util/costumDate';

const PostDate = ({time}) => {
  return <div>{Date.getPostTime(time)}</div>;
};

export default PostDate;
