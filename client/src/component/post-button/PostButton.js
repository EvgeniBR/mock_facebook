import React, { useState , useRef} from "react"
import "./PostButton.css"
import ReactionPostContainer from "../reaction-post-container/ReactionPostContainer"
import emojiOptions from "../../Util/emojiOptions"

const PostButton = ({
  icon,
  info,
  hoverOption,
  updateWithNewLike,
  emojiPicked,
}) => {
  const [hoverMode, setHoverMode] = useState(false);
  const refBtn = useRef(null);
  const refBtnContainer = useRef(null);


  let option
  if (hoverOption === "like") {
    option = (
      <ReactionPostContainer
        ref={refBtnContainer}
        onMouseOver={() => setHoverMode(true)}
        changeReaction={(userReact) => {
          updateWithNewLike(userReact);  
          setHoverMode(false);
        }}
      />
    )
  } else if (hoverOption === "commingsoon") {
    //show comming soon hover on the btn for unimplement feture
  }

  const update = (e) => {
    if(e && emojiPicked && emojiPicked !== "unlike"){
      if(!refBtnContainer.current.contains(e.target) || refBtnContainer === null){
        updateWithNewLike("unlike");
        setHoverMode(false);
      }
    }
  }

  let mystyle = {}
  if (emojiPicked && emojiPicked !== "unlike") {
    mystyle = {
      color: emojiOptions.getEmoji(emojiPicked).color,
    }
  }


  return (
    <div
      className="PostButton"
      ref={refBtn}
      style={mystyle}
      onMouseOver={() => setHoverMode(true)}
      onMouseLeave={() => setHoverMode(false)}
      onClick={(e) => update(e)}
    >
      {hoverMode && option}
      {emojiPicked ? (
        <img src={emojiOptions.getEmoji(emojiPicked).emoji} alt={emojiPicked} />
      ) : (
        <i className={icon}></i>
      )}
      {emojiPicked ? emojiPicked : info}
    </div>
  )
}

export default PostButton
