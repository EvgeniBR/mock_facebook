import React , { useState , useEffect } from "react";
import "./FeedPage.css";
import PostContainer from '../component/post-container/PostContainer';
import NewPostField from '../component/new-post-filed/NewPostField';
import Cookies from 'universal-cookie';
import DataService from '../db-connection/DataService';
import { useHistory } from "react-router-dom";


function FeedPage() {
  const [writeModePost , setWritePostMode] = useState(false);
  const [userName , setUserName] = useState('');
  const [userLastName , setUserLastName] = useState('');
  //TODO - change and get the avatar from the user axios
  const [userAvatar , setUserAvatar] = useState('');

  const cookies = new Cookies();
  let history = useHistory();

  useEffect(() => {
    const token = cookies.get('mockFacebookToken');
    if(!token){
      //the user not have token so automove to register page
      history.push('/register');
    }
    async function getData(){
      //hardcoded, need to get 

      const user = await DataService.getAuth('users/me',token);
      setUserName(user.data.first_name);
      setUserLastName(user.data.last_name);
      console.log(user);
    }
    getData();

  },[writeModePost]);

  return (
    <div className="FeedPage">
      {writeModePost && <NewPostField/>}
        <PostContainer writePost={() => setWritePostMode(true)}/>
    </div>
  );
}

export default FeedPage;
