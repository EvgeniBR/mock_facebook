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
      const user = await DataService.getAuth('users/me',token);
      setUserName(user.data.first_name);
      setUserLastName(user.data.last_name);
      setPath(user.data.path)
      setUserAvatar('https://pro2-bar-s3-cdn-cf3.myportfolio.com/8ee9e0df6a57e6cb08ce8298364354c5/e01d8c8ac8d02856d9ca18a0_rw_1920.jpg?h=cd2ded3063a9f9cc22079f881abdf8f9');
    }
    getData();
  },[]);

  const updateDBPost = async (value) => {
    const data = {
      owner:path,
      massege:value
    }
    await DataService.create('facebook-post',data);
    setWritePostMode(false);
  }


  return (
    <div className="FeedPage">
      {writeModePost && <NewPostField firstName={userName} lastName={userLastName} path={path} srcAvatar={userAvatar} uploadNewPost={(value) => updateDBPost(value)}/>}
        <PostContainer writePost={() => setWritePostMode(true)} firstName={userName} lastName={userLastName} path={path} srcAvatar={userAvatar}/>
    </div>
  );
}

export default FeedPage;
