import React, { useState, useEffect, useRef } from "react";
import Post from "../post/Post";
import NewPost from "../new-post/NewPost";
import { useLocation } from "react-router-dom";
import { getUserFeedProfile , getUserProfile} from '../../Util/serverConnect';

//TO-DO - after friend will added make a lits of path and add it to postToShowPathList
const PostContainer = ({ profileAvatar, writePost, firstName, userPath , theme,currentUserPath}) => {
  const [posts, setPosts] = useState([]);

  const location = useLocation();
  const firstUpdate = useRef(true);

  async function getData() {
    let postToShow;
    location.pathname === '/' ? postToShow = await getUserFeedProfile(userPath) :  postToShow = await getUserProfile(userPath) 
    setPosts(postToShow.data);
  }

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    getData();
  }, [location.pathname, userPath]);


  //show all the post selected
  let showPosts;
  if (posts.length) {
    showPosts = posts.map((post) => {
      return (
        <Post
          postOwnerPath={post.myPost.owner}
          key={post.myPost._id}
          id={post.myPost._id}
          firstName={post.userDataPost.first_name}
          lastName={post.userDataPost.last_name}
          userAvatar={post.userDataPost.avatar}
          userProfileAvatar ={profileAvatar}
          theme = {theme}
          currentUserPath={currentUserPath}
        />
      );
    });
  }

  return (
    <div className="PostContainer">
      <NewPost
        srcAvatar={profileAvatar}
        username={firstName}
        WriteNewPost={writePost}
        theme={theme}
      />
      {showPosts}
    </div>
  );
};

export default PostContainer;