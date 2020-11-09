import React , {useState} from "react";
import "./NewPostField.css";
import CircleIcon from "../circle-Img/CircleIcon";
import FaceBookUserName from "../facebook-username/FaceBookUserName";


const NewPostField = ({firstName , lastName , srcAvatar , path , uploadNewPost}) => {
  const [postMassage , setPostMassege] = useState('');

  const placeholderMsg = `What's on your mind , ${firstName}?`;

  return (
    <div className="NewPostField">
      <div className="NewPostFieldBox">
        <div className="NewPostFieldBox__header">
          <h2>Create Post</h2>
        </div>
        <div>
          <div className="NewPostFieldBox__userData">
            <CircleIcon srcIcon={srcAvatar} />
            <FaceBookUserName
              firstName={firstName}
              lastName={lastName}
              path={path}
            />
          </div>
          <div className="NewPostFieldBox__main">
              <textarea placeholder={placeholderMsg} onChange={(e) => setPostMassege(e.target.value)}></textarea>
              <button onClick={() => uploadNewPost(postMassage)}>Post</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPostField;
