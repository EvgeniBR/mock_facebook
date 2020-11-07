import React , { useState } from "react";
import "./FeedPage.css";
import PostContainer from '../component/post-container/PostContainer';
import NewPostField from '../component/new-post-filed/NewPostField';


function FeedPage() {
  const [writeModePost , setWritePostMode] = useState(false);

  return (
    <div className="FeedPage">
      {writeModePost && <NewPostField/>}
        <PostContainer writePost={() => setWritePostMode(true)}/>
    </div>
  );
}

export default FeedPage;
