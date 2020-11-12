import React , {useState} from "react";
import "./NewPostField.css";
import CircleIcon from "../circle-Img/CircleIcon";
import FaceBookUserName from "../facebook-username/FaceBookUserName";


const NewPostField = ({profileAvatar , firstName , lastName  , userPath , uploadNewPost ,theme }) => {
  const [postMassage , setPostMassege] = useState('');

  const placeholderMsg = `What's on your mind , ${firstName}?`;

  const conatinerStyle = {
    backgroundColor:`${theme.fieldBackGroundPost}`
  };


  return (
    <div className="NewPostField" style={conatinerStyle}>
      <div className="NewPostFieldBox" style={{backgroundColor: `${theme.postBackground}`}}>
        <div className="NewPostFieldBox__header">
          <h2 style={{color: `${theme.secondText}`}}>Create Post</h2>
        </div>
        <div>
          <div className="NewPostFieldBox__userData" style={{borderTop: `1px solid ${theme.secondText}` , marginLeft:`${theme.postMargin}`}}>
            <CircleIcon srcIcon={profileAvatar} />
            <FaceBookUserName
              firstName={firstName}
              lastName={lastName}
              path={userPath}
              fontColor={theme.primaryText}
            />
          </div>
          <div className="NewPostFieldBox__main">
              <textarea placeholder={placeholderMsg} style={{ color: `${theme.primaryText}`}} onChange={(e) => setPostMassege(e.target.value)}></textarea>
              <button onClick={() => uploadNewPost(postMassage)}>Post</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPostField;
