import React from "react";
import angry from "../../img/reaction/angry.png";
import care from "../../img/reaction/care.png";
import haha from "../../img/reaction/haha.png";
import like from "../../img/reaction/like.png";
import love from "../../img/reaction/love.png";
import sad from "../../img/reaction/sad.png";
import wow from "../../img/reaction/wow.png";
import ReactionPost from "../reaction/ReactionPost";
import "./ReactionPostConatiner.css";

const ReactionPostContainer = ({ changeReaction }) => {

  const updateNewReaction = (value) => {
    changeReaction(value);
  };

  return (
    <div className="ReactionPostContainer">
      <ReactionPost
        reaction={like}
        alt="like"
        reactionPick={(value) => {
          updateNewReaction(value);
        }}
      />
      <ReactionPost
        reaction={love}
        alt="love"
        reactionPick={(value) => {
          updateNewReaction(value);
        }}
      />
      <ReactionPost
        reaction={care}
        alt="care"
        reactionPick={(value) => {
          updateNewReaction(value);
        }}
      />
      <ReactionPost
        reaction={haha}
        alt="haha"
        reactionPick={(value) => {
          updateNewReaction(value);
        }}
      />
      <ReactionPost
        reaction={wow}
        alt="wow"
        reactionPick={(value) => {
          updateNewReaction(value);
        }}
      />
      <ReactionPost
        reaction={sad}
        alt="sad"
        reactionPick={(value) => {
          updateNewReaction(value);
        }}
      />
      <ReactionPost
        reaction={angry}
        alt="angry"
        reactionPick={(value) => {
          updateNewReaction(value);
        }}
      />
    </div>
  );
};

export default ReactionPostContainer;
