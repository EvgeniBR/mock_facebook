import React from "react";
import Header from "../Header/Header";
import { BrowserRouter , Route } from "react-router-dom";
import ProfileRender from "../profile-render/ProfileRender";
import FeedPage from "../../feed-page/FeedPage";


const PageContainer = () => {
  return (
    <BrowserRouter>
      <Header />
     
        <Route exact path="/">
          
          <FeedPage />
        </Route>
        <Route path="/:username"><ProfileRender/></Route>
     
    </BrowserRouter>
  );
};

export default PageContainer;
