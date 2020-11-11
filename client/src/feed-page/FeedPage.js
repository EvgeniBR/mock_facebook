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
  const [userPath , setUserPath] = useState('')
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
      setUserPath(user.data.path);
      setProfilePicture(user.data.avatar);
    }
    getData();
  },[]);

  const updateDBPost = async (value) => {
    const data = {
      owner:userPath,
      message:value
    }
    await DataService.create('facebook-post',data);
    setWritePostMode(false);
  }


  return (
    <div className="FeedPage">
      <div className="FeedPage_RightPage"></div>
      {writeModePost && <NewPostField profileAvatar={profilePicture} firstName={userName} lastName={userLastName} userPath={userPath}  uploadNewPost={(value) => updateDBPost(value)}/>}
        <PostContainer writePost={() => setWritePostMode(true)} profileAvatar={profilePicture} firstName={userName} lastName={userLastName} userPath={userPath}/>
        <div className="FeedPage_LeftPage"></div>
    </div>
  );
}

export default FeedPage;
