import React , { useState , useEffect } from "react";
import "./FeedPage.css";
import PostContainer from '../component/post-container/PostContainer';
import NewPostField from '../component/new-post-filed/NewPostField';
import Cookies from 'universal-cookie';
import DataService from '../db-connection/DataService';
import { useHistory } from "react-router-dom";


const FeedPage = () => {
  const [writeModePost , setWritePostMode] = useState(false);
  const [userName , setUserName] = useState('');
  const [userLastName , setUserLastName] = useState('');
  const [path , setPath] = useState('')
  const [profilePicture , setProfilePicture] = useState('')
  //TODO - change and get the avatar from the user axios

  const cookies = new Cookies();
  let history = useHistory();

  useEffect(() => {
    const token = cookies.get('mockFacebookToken');
    if(!token){
      //the user not have token so automove to register page
      history.push('/register');
    }
    async function getData(){
      const user = await DataService.getAuth('users/me',token);
      setUserName(user.data.first_name);
      setUserLastName(user.data.last_name);
      setPath(user.data.path);
      setProfilePicture(user.data.avatar);
    }
    getData();
  },[]);

  const updateDBPost = async (value) => {
    const data = {
      owner:path,
      message:value
    }
    await DataService.create('facebook-post',data);
    setWritePostMode(false);
  }


  return (
    <div className="FeedPage">
      {writeModePost && <NewPostField profileAvatar={profilePicture} firstName={userName} lastName={userLastName} path={path}  uploadNewPost={(value) => updateDBPost(value)}/>}
        <PostContainer writePost={() => setWritePostMode(true)} profileAvatar={profilePicture} firstName={userName} lastName={userLastName} path={path} />
    </div>
  );
}

export default FeedPage;
