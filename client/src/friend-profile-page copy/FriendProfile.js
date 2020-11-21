<<<<<<< HEAD
import React,{useEffect,useState }  from "react";
=======
import React from "react";
>>>>>>> d62e05c78a29afe8779a6f0435484fddd11d0f64
import FriendCover from "./FriendCover";
import FriendProfileHeader from "./FriendProfileHeader";
import PostContainer from "../component/post-container/PostContainer";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../theme";
import { GlobalStyles } from "../global";

const FriendProfile = (props) => {
<<<<<<< HEAD
  const [userName, setUserName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [userPath, setUserPath] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  // const [friendRequests, setFriendRequests] = useState("");
  const [theme , setTheme] = useState(darkTheme);

  console.log('f' , props);
=======
>>>>>>> d62e05c78a29afe8779a6f0435484fddd11d0f64

  // const checkIfExist = () => {
  //   if (!props.data.data) {
  //     return false;
  //   }
  //   return true;
  // };

  // //check if the user send to the friend profile friend request.
  // const checkIfSendFriendRequest = () => {
  //   if (checkIfExist()) {
  //     const findSendRequest = props.data.data.friendsRequest.some(
  //       (fRequest) => {
  //         return fRequest.owner === props.userPath;
  //       }
  //     );
  //     if (findSendRequest) {
  //       return <i id="friendRequestSend" className="fas fa-user-times"></i>;
  //     }
  //   }
  //   return false;
  // };

  // //check if the user already get friend request from the profile
  // const checkIfGetFriendRequest = () => {
  //   if (checkIfExist()) {
  //     const findGetRequest = props.data.data.friendsRequestSend.some(
  //       (fRequest) => {
  //         return fRequest.owner === props.userPath;
  //       }
  //     );
  //     if (findGetRequest) {
  //       return (
  //         <i
  //           style={{
  //             color: "#0085ff",
  //             width: "100%",
  //             height: "100%",
  //             backgroundColor: "rgba(0, 108, 255, 0.2)",
  //             padding: "10px 0",
  //           }}
  //           id="friendRequestGet"
  //           className="fas fa-user-check"
  //         ></i>
  //       );
  //     }
  //   }
  //   return false;
  // };

<<<<<<< HEAD
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
=======
  // //check if user and profile alreadt friends
  // const checkIfAlreadyFriends = () => {
  //   if (checkIfExist()) {
  //     const alreadyFriend = props.data.data.friends.some((fRequest) => {
  //       return fRequest.owner === props.userPath;
  //     });
  //     if (alreadyFriend) {
  //       return <i id="friends" className="fas fa-user-friends"></i>;
  //     }
  //   }
  //   return false;
  // };

  return (
    <div style={{backgroundColor: props.theme.body , minHeight:"100vh" , width:"100%"}}>
      <FriendCover data={props.data} theme={props.theme} userPath={props.userPath}/>
    </div>
>>>>>>> d62e05c78a29afe8779a6f0435484fddd11d0f64
  );
};

export default FriendProfile;
