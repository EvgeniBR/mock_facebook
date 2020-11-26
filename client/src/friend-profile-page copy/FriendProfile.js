import React ,{useState , useEffect} from "react";
import FriendCover from "./FriendCover";
import PostContainer from "../component/post-container/PostContainer";


const FriendProfile = (props) => {
  const [profileName, setprofileName] = useState("");
  const [profileLastName, setprofileLastName] = useState("");
  const [profilePath, setprofilePath] = useState("");
  const [profilePicture, setProfilePicture] = useState("");


  useEffect(() => {
      setprofileName(props.data.data.first_name);
      setprofileLastName(props.data.data.last_name);
      setprofilePath(props.data.data.path);
      setProfilePicture(props.data.data.avatar);
  }, [props.data.data.path]);

  return (
    <div style={{backgroundColor: `${props.theme.body}` , minHeight:"100vh" , width:"100%"}}>
        <FriendCover data = {props.data} theme={props.theme} userPath={props.userPath}/>
        <br/>
        <div className="profile-data">
          <div className="intro">
            <ul>
              <h3> Intro </h3>
              <li><i className="fas fa-graduation-cap"></i> Studied at:</li>
              <li><i className="fas fa-home"></i> Lives in:</li>
              <li><i className="fas fa-map-marker-alt"></i> From:</li>
              <li><i className="fas fa-history"></i> Joined at:</li>
              <li><i className="fas fa-satellite-dish"></i> Followed by</li>
            </ul>
          </div>
          <div className="seperator"></div>
        
        <PostContainer
          // writePost={() => setWritePostMode(true)}
          profileAvatar={profilePicture}
          firstName={profileName}
          lastName={profileLastName}
          userPath={profilePath}
          theme = {props.theme}
        />
        </div>
    </div>
   );
 }

export default FriendProfile;
