import React from "react";
import Header from "../Header/Header";
import { BrowserRouter , Route } from "react-router-dom";
import ProfileRender from "../profile-render/ProfileRender";
const PageContainer = () => {
  return (
    <BrowserRouter>
      <Header />
     
        <Route
          exact
          path="/:profilename"
          render={(props) => <ProfileRender {...props} />}
        />
     
    </BrowserRouter>
  );
};

export default PageContainer;
