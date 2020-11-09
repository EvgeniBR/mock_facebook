import React, { useState, useEffect, useRef } from "react";
import "./PostContainer.css";
import Post from "../post/Post";
import NewPost from "../new-post/NewPost";
import DataService from "../../db-connection/DataService";
import { useLocation } from "react-router-dom";

//TO-DO - after friend will added make a lits of path and add it to postToShowPathList
const PostContainer = ({profileAvatar , writePost, firstName, path }) => {
  const [posts, setPosts] = useState([]);
  const location = useLocation();
  const firstUpdate = useRef(true);

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    async function getData() {
      let postToShow;

      //const user = await DataService.get('users/me',token);
      const currentPath = location.pathname;
      if (currentPath === "/") {
        //on feed se we need to take the user path and from friend list
        postToShow = await DataService.get(`facebook-post/feed/${path}`);
      } else {
        //get profile user post
        postToShow = await DataService.get(`facebook-post/profile/${path}`);
      }
      console.log(postToShow.data);
      setPosts(postToShow.data);
    }
    getData();
  }, [path]);


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
          message= {post.myPost.message}
          comments={post.myPost.comments}
          time={post.myPost.createdAt}
          likes={post.myPost.likes}
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
