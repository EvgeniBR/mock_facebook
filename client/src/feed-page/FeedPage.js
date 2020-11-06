import React , { useState } from "react";
import "./FeedPage.css";
import Post from '../component/post/Post';


function FeedPage() {

  return (
    <div className="FeedPage">
        <Post/>
    </div>
  );
}

export default FeedPage;
