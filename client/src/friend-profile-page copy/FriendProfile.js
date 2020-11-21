import React,{useEffect,useState }  from "react";
import FriendCover from "./FriendCover";
import FriendProfileHeader from "./FriendProfileHeader";
import PostContainer from "../component/post-container/PostContainer";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../theme";
import { GlobalStyles } from "../global";


const FriendProfile = (props) => {
  const [userName, setUserName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [userPath, setUserPath] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  // const [friendRequests, setFriendRequests] = useState("");
  const [theme , setTheme] = useState(darkTheme);

  console.log('f' , props);

  let friendRequest = false;
  if(props.data.data){
    const findRequest = props.data.data.friendsRequest.some(fRequest => {
      return fRequest.owner === props.userPath;
    })
    friendRequest = findRequest;
  }

  useEffect(() => {
      
      setUserName(props.data.data.first_name);
      setUserLastName(props.data.data.last_name);
      setUserPath(props.data.data.path);
      setProfilePicture(props.data.data.avatar);
      // setFriendRequests(user.data.friendsRequest);
  
    // false ? setTheme(lightTheme) : setTheme(darkTheme)
  // eslint-disable-next-line
  }, []);

  return (
    <ThemeProvider theme={theme}>
    <GlobalStyles />
      <FriendCover data = {props.data} />
      <br/>
     <FriendProfileHeader userPath={props.userPath} profilePath={props.data.data.path} request={friendRequest}/>
     <PostContainer
        // writePost={() => setWritePostMode(true)}
        profileAvatar={profilePicture}
        firstName={userName}
        lastName={userLastName}
        userPath={userPath}
        theme = {theme}
      />
     </ThemeProvider>
  );
};

export default FriendProfile;
