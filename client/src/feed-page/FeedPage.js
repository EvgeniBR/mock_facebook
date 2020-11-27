import React, { useState, useEffect } from "react";
import "./FeedPage.css";
import PostContainer from "../component/post-container/PostContainer";
import NewPostField from "../component/new-post-filed/NewPostField";
import Cookies from "universal-cookie";
import DataService from "../db-connection/DataService";
import { useHistory } from "react-router-dom";
import FeedBoxNote from "../component/feed-Box-note/FeedBoxNote";
import FeedSponsored from "../component/feed-Box-note/FeedSponsored";
import FeedFriendRequest from "../component/feed-Box-note/FeedFriendRequest";
import FacebookShortcut from './FacebookShortcut';

const FeedPage = ({ currentUserPath, theme }) => {
  const [writeModePost, setWritePostMode] = useState(false);
  const [userName, setUserName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [userPath, setUserPath] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [friendRequests, setFriendRequests] = useState("");

  const cookies = new Cookies();
  let history = useHistory();

  useEffect(() => {
    const token = cookies.get("mockFacebookToken");
    if (!token) {
      //the user not have token so automove to register page
      history.push("/register");
    }
    async function getData() {
      const user = await DataService.getAuth("users/me", token);
      setUserName(user.data.first_name);
      setUserLastName(user.data.last_name);
      setUserPath(user.data.path);
      setProfilePicture(user.data.avatar);
      setFriendRequests(user.data.friendsRequest);
    }
    getData();
  }, []);

  const updateDBPost = async (value) => {
    const data = {
      owner: userPath,
      message: value,
    };
    await DataService.create("facebook-post", data);
    setWritePostMode(false);
  };

  return (
    <div className="FeedPage" style={{backgroundColor:theme.body}}>
        {writeModePost && (
          <NewPostField
            profileAvatar={profilePicture}
            firstName={userName}
            lastName={userLastName}
            userPath={userPath}
            uploadNewPost={(value) => updateDBPost(value)}
            theme={theme}
          />
        )}
      <div className="FeedPage_LeftPage">
        <FacebookShortcut color={theme.primaryText}/>
      </div>
      <div className="FeedPage_CenterPage">

        <PostContainer
          writePost={() => setWritePostMode(true)}
          profileAvatar={profilePicture}
          firstName={userName}
          lastName={userLastName}
          userPath={userPath}
          theme={theme}
          currentUserPath={currentUserPath}
        />
      </div>
      <div className="FeedPage_RightPage">
        <FeedBoxNote theme={theme}>
          <FeedSponsored
            text="Sponsored"
            imgSponsored="https://static.wixstatic.com/media/37decd_f811fb5ae1bb45ebbd3f5b9ac735639b~mv2.jpg/v1/crop/x_16,y_0,w_1569,h_1154/fill/w_560,h_412,al_c,q_80,usm_0.66_1.00_0.01/WOHL.webp"
            sponsoredText="Bootcamp 2021 | Appleseeds Academy"
            linkTo="www.appleseeds.org.il"
            theme={theme}
          />
        </FeedBoxNote>
        <FeedBoxNote>
          {/* show only if there is a freind request */}
          {!!friendRequests.length && (
            <FeedFriendRequest
              text="Friend Requests"
              friendRequests={friendRequests}
              currentPath={userPath}
              theme={theme}
            />
          )}
        </FeedBoxNote>
      </div>
    </div>
  );
};

export default FeedPage;
