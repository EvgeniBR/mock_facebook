import React from "react";
import Cover from "./Cover";
import PostContainer from "../component/post-container/PostContainer";

const Profile = ({ data, userPath, theme }) => {
  if(data.data && theme){
    return (
      <div style={{backgroundColor: theme.body , minHeight:"100vh" , width:"100%"}}>
        <Cover data={data} theme={theme}/>
        <br />
        <div className="profile-data">
          <div className="intro" style={{backgroundColor:theme.postBackground , color:theme.primaryText}}>
            <ul>
              <h3> Intro </h3>
              <li><i className="fas fa-graduation-cap"></i> Studied at:</li>
              <li><i className="fas fa-home"></i> Lives in:</li>
              <li><i className="fas fa-map-marker-alt"></i> From:</li>
              <li><i className="fas fa-history"></i> Joined at:</li>
              <li><i className="fas fa-satellite-dish"></i> Followed by:</li>
            </ul>
            <button style={{backgroundColor:theme.body, color:theme.primaryText}}>Edit Details</button><br/>
            <button style={{backgroundColor:theme.body, color:theme.primaryText}}>Add Hobbies</button>
          </div>
          <div className="seperator"></div>
        <PostContainer
          // writePost={() => setWritePostMode(true)}
          profileAvatar={data.data.avatar}
          firstName={data.data.first_name}
          lastName={data.data.last_name}
          userPath={userPath}
          theme={theme}
        />
        </div>
      </div>
    );
  }
  else{
    return <div></div>
  }
  
};

export default Profile;
