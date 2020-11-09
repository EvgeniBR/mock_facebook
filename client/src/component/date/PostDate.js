import React from "react";
import costumDate from '../../Util/costumDate';
import './PostDate.css'

const PostDate = ({time , comment = false}) => {
  //get comment format or post date format
  const postTime = comment?costumDate.getCommentTime(time):costumDate.getPostTime(time)

  return <p className="PostDate">{postTime.date}</p>;
};

export default PostDate;
