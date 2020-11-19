import React from "react";
import emojiOptions from '../../Util/emojiOptions';
import './PostStatics.css'


const PostStatics = ({ comments, likes }) => {

    let likeTypes = [];

    //get list of like types 
    if(likes){
      const likeList = likes.map(like => like.reaction);
      for(const like of likeList){
        if(!likeTypes.includes(like)){
          likeTypes.push(like);
        }
      }
    }

    const reactionToShow = likeTypes.map(like => {
      return <img key={like} className="PostStaticsLikesEmoji" src={emojiOptions.getEmoji(like).emoji} alt="reaction"/>
    })
    

  return (
    <div className="PostStatics">
      <div>
        {likes.length ? <div className="PostStaticsLikes">{reactionToShow} {likes.length} Likes</div>:<div></div>}
      </div>
      <div className="PostStaticsComments">
        {comments.length ? <div> {comments.length} Comments</div> : <div></div>}
      </div>
    </div>
  );
};

export default PostStatics;
