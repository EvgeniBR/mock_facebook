import React from "react";
import Cover from "./Cover";
import PostContainer from "../component/post-container/PostContainer";

const Profile = ({ data, userPath, theme }) => {
  if(data.data && theme){
    return (
      <div style={{backgroundColor: theme.body , minHeight:"100vh" , width:"100%"}}>
        <Cover data={data} theme={theme}/>
        <br />
        <PostContainer
          // writePost={() => setWritePostMode(true)}
          profileAvatar={data.data.avatar}
          firstName={data.data.first_name}
          lastName={data.data.last_name}
          userPath={userPath}
          theme={theme}
        />
      </div>
    );
  }
  else{
    return <div></div>
  }
  
};

export default Profile;
