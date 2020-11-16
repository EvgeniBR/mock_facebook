import React from "react";
import emojiOptions from '../../Util/emojiOptions';
import './PostStatics.css'


const PostStatics = ({ comments, likes }) => {

    let reactionToShow = [];
    let likeTypes = [];

    // //get list of like types 
    // if(likes){
    //   likeTypes = likes.map(like => like.key)
    // }
    

    for(const like of likes){
        if(!reactionToShow.includes(like.reaction)){
            const emoji = <img key={like.reaction} className="PostStaticsLikesEmoji" src={emojiOptions.getEmoji(like.reaction).emoji} alt="reaction"/>
            reactionToShow.push(emoji)
        }
    }

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
