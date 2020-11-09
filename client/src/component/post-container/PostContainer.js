import React ,{ useState , useEffect, useRef} from "react";
import "./PostContainer.css";
import Post from '../post/Post';
import NewPost from "../new-post/NewPost";
import DataService from '../../db-connection/DataService';
import { useLocation } from 'react-router-dom';

//TO-DO - after friend will added make a lits of path and add it to postToShowPathList
const PostContainer = ({writePost , firstName , lastName , path , srcAvatar, friendsList}) => {
  const location = useLocation();
  const firstUpdate = useRef(true);
  
  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    async function getData(){
      let postToShow;

      //const user = await DataService.get('users/me',token);
      const currentPath = location.pathname;
      if(currentPath === '/'){
        //on feed se we need to take the user path and from friend list
        postToShow = await DataService.get(`facebook-post/feed/${path}`);
        
      }
      else{
        //get profile user post
        postToShow = await DataService.get(`facebook-post/profile/${path}`);
        
      }
      console.log(postToShow);

      //const postToShow = await DataService.get(`facebook-post`,{params:postToShowPathList});
      
      
    }
    getData();
  },[path]);

  return <div>
      <NewPost srcAvatar={srcAvatar} username={firstName} WriteNewPost={() => writePost()}/>
      <Post path={path} />
  </div>;
};

export default PostContainer;
