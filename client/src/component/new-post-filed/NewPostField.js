import React , {useState , useEffect} from "react";
import "./NewPostField.css";
import CircleIcon from "../circle-Img/CircleIcon";
import FaceBookUserName from "../facebook-username/FaceBookUserName";


const NewPostField = ({profileAvatar , firstName , lastName  , userPath , uploadNewPost ,theme , btnText ,title ,postData}) => {
  const [postMassage , setPostMassege] = useState('');

  useEffect(() => {
    if(postData){
      setPostMassege(postData)
    }
  },[])

  const placeholderMsg = `What's on your mind , ${firstName}?`;

  const conatinerStyle = {
    backgroundColor:`${theme.fieldBackGroundPost}`
  };


  return (
    <div className="NewPostField" style={conatinerStyle}>
      <div className="NewPostFieldBox" style={{backgroundColor: `${theme.postBackground}`}}>
        <div className="NewPostFieldBox__header">
          <h2 style={{color: `${theme.secondText}`}}>{title}</h2>
        </div>
        <div>
          <div className="NewPostFieldBox__userData" style={{borderTop: `1px solid ${theme.secondText}`, marginLeft:`${theme.postMargin}`}}>
            <CircleIcon srcIcon={profileAvatar} />
            <FaceBookUserName
              firstName={firstName}
              lastName={lastName}
              path={userPath}
              fontColor={theme.primaryText}
            />
          </div>
          <div className="NewPostFieldBox__main">
              <textarea value={postMassage} placeholder={placeholderMsg} style={{ color: `${theme.primaryText}`}} onChange={(e) => setPostMassege(e.target.value)}></textarea>
              <button onClick={() => uploadNewPost(postMassage)}>{btnText}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

NewPostField.defaultProps = {
  title: "Create Post",
  btnText:"Post",
  postData:""
}

export default NewPostField;
