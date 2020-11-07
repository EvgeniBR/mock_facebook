import React from "react";
import angry from "../../img/reaction/angry.png";
import care from "../../img/reaction/care.png";
import haha from "../../img/reaction/haha.png";
import like from "../../img/reaction/like.png";
import love from "../../img/reaction/love.png";
import sad from "../../img/reaction/sad.png";
import wow from "../../img/reaction/wow.png";
import ReactionPost from '../reaction/ReactionPost';
import './ReactionPostConatiner.css'

const ReactionPostContainer = () => {
  return <div className="ReactionPostContainer">
    <ReactionPost reaction={like} alt="like"/>
    <ReactionPost reaction={love} alt="love"/>
    <ReactionPost reaction={care} alt="care"/>
    <ReactionPost reaction={haha} alt="haha"/>
    <ReactionPost reaction={wow} alt="wow"/>
    <ReactionPost reaction={sad} alt="sad"/>
    <ReactionPost reaction={angry} alt="angry"/>
  </div>;
};

export default ReactionPostContainer;
