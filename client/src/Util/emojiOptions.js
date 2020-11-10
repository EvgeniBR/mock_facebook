import angry from "../img/reaction/angry.png";
import care from "../img/reaction/care.png";
import haha from "../img/reaction/haha.png";
import like from "../img/reaction/like.png";
import love from "../img/reaction/love.png";
import sad from "../img/reaction/sad.png";
import wow from "../img/reaction/wow.png";

function getEmoji(emojiSelected){
    const emoji = {
        care:{
          color:'#FFC433',
          emoji:care
        },
        haha:{
          color:'#FFC433',
          emoji:haha
        },
        sad:{
          color:'#FFC433',
          emoji:sad
        },
        wow:{
          color:'#FFC433',
          emoji:wow
        },
        love:{
          color:'#FF3333',
          emoji:love
        },
        like:{
          color:'#007CFF',
          emoji:like
        },
        angry:{
          color:'#FF8033',
          emoji:angry
        },
      }
    return emoji[emojiSelected];
  }
  

export default {
    getEmoji,
  };

