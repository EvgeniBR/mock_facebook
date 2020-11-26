import React ,{useState , useEffect} from "react";
import FriendCover from "./FriendCover";
import FriendProfileHeader from "./FriendProfileHeader";
import PostContainer from "../component/post-container/PostContainer";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../global";

const FriendProfile = (props) => {
  const [userName, setUserName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [userPath, setUserPath] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [friendRequests, setFriendRequests] = useState("");


  useEffect(() => {
      
      setUserName(props.data.data.first_name);
      setUserLastName(props.data.data.last_name);
      setUserPath(props.data.data.path);
      setProfilePicture(props.data.data.avatar);
      setFriendRequests(props.data.data.friendsRequest);
  
    // false ? setTheme(lightTheme) : setTheme(darkTheme)
  // eslint-disable-next-line
  }, []);

  return (
    <div>
        <FriendCover data = {props.data} theme={props.theme}/>
        <br/>
        
        <PostContainer
          // writePost={() => setWritePostMode(true)}
          profileAvatar={profilePicture}
          firstName={userName}
          lastName={userLastName}
          userPath={userPath}
          theme = {props.theme}
        />
    </div>
   );
 }

export default FriendProfile;
