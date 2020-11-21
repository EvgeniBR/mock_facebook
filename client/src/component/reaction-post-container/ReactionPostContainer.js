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

const ReactionPostContainer =  React.forwardRef(({ changeReaction } , ref) => {
  const updateNewReaction = (value) => {
    changeReaction(value);
  };

  return (
    <div className="ReactionPostContainer" ref={ref}>
      <ReactionPost
        key="like"
        reaction={like}
        alt="like"
        reactionPick={(value) => {
          updateNewReaction(value);
        }}
      />
      <ReactionPost
        key="love"
        reaction={love}
        alt="love"
        reactionPick={(value) => {
          updateNewReaction(value);
        }}
      />
      <ReactionPost
        key="care"
        reaction={care}
        alt="care"
        reactionPick={(value) => {
          updateNewReaction(value);
        }}
      />
      <ReactionPost
        key="haha"
        reaction={haha}
        alt="haha"
        reactionPick={(value) => {
          updateNewReaction(value);
        }}
      />
      <ReactionPost
        key="wow"
        reaction={wow}
        alt="wow"
        reactionPick={(value) => {
          updateNewReaction(value);
        }}
      />
      <ReactionPost
        key="sad"
        reaction={sad}
        alt="sad"
        reactionPick={(value) => {
          updateNewReaction(value);
        }}
      />
      <ReactionPost
        key="angry"
        reaction={angry}
        alt="angry"
        reactionPick={(value) => {
          updateNewReaction(value);
        }}
      />
    </div>
  );
});

export default ReactionPostContainer;
