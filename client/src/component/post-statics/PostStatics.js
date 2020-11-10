import React from "react";
import emojiOptions from '../../Util/emojiOptions';
import './PostStatics.css'


const PostStatics = ({ comments, likes }) => {

    const reaction = likes.map(like => {
        return <img className="PostStaticsLikesEmoji" src={emojiOptions.getEmoji(like.reaction).emoji} alt="reaction"/>
    })

    console.log(likes);
  return (
    <div className="PostStatics">
      <div>
          {likes.length && <div className="PostStaticsLikes">{reaction} {likes.length} Likes</div>}
      </div>
      <div className="PostStaticsComments">
        {comments.length && <div> {comments.length} Comments</div>}
      </div>
    </div>
  );
};

export default PostStatics;
