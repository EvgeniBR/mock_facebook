import React, { useState, useEffect, useRef } from "react";
import "./PostContainer.css";
import Post from "../post/Post";
import NewPost from "../new-post/NewPost";
import DataService from "../../db-connection/DataService";
import { useLocation } from "react-router-dom";

//TO-DO - after friend will added make a lits of path and add it to postToShowPathList
const PostContainer = ({ profileAvatar, writePost, firstName, userPath }) => {
  const [posts, setPosts] = useState([]);
  const [newLike, setNewLike] = useState("");

  const location = useLocation();
  const firstUpdate = useRef(true);

  async function getData() {
    let postToShow;

    //const user = await DataService.get('users/me',token);
    const currentPath = location.pathname;
    if (currentPath === "/") {
      //on feed se we need to take the user path and from friend list
      postToShow = await DataService.get(`facebook-post/feed/${userPath}`);
    } else {
      //TO-DO fix user per path
      //get profile user post
      postToShow = await DataService.get(`facebook-post/feed/${userPath}`);
      //postToShow = await DataService.get(`facebook-post/profile/${userPath}`);
    }
    setPosts([]);
    setPosts(postToShow.data);
  }

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    getData();
  }, [userPath]);


  //show all the post selected
  let showPosts;
  if (posts.length) {
    showPosts = posts.map((post) => {
      return (
        <Post
          path={post.myPost.owner}
          key={post.myPost._id}
          id={post.myPost._id}
          firstName={post.userDataPost.first_name}
          lastName={post.userDataPost.last_name}
          userAvatar={post.userDataPost.avatar}
          userPath={userPath}
        />
      );
    });
  }

  return (
    <div className="PostContainer">
      <NewPost
        srcAvatar={profileAvatar}
        username={firstName}
        WriteNewPost={() => writePost()}
      />
      {showPosts}
    </div>
  );
};

export default PostContainer;