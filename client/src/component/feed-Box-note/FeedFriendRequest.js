import React, { useState, useEffect } from "react";
import CircleIcon from "../circle-Img/CircleIcon";
import DataService from "../../db-connection/DataService";
import ButtonField from '../button-field/ButtonField';

const FeedFriendRequest = ({ text, friendRequests }) => {
  const [userAvatar, setUserAvatar] = useState("");
  const [userName, setUserName] = useState("");
  const [userLastName, setUserLastName] = useState("");

  useEffect(() => {
    if (friendRequests.length) {
      async function getData() {
        // const owner = friendRequests[friendRequests.length - 1].owner;
        // TO-DO  - change to the last request
        const owner = friendRequests[0].owner;
        const userData = await DataService.get(
          `facebook-profile/get-profile-info/${owner}`
        );
        setUserAvatar(userData.data.avatar);
        setUserName(userData.data.first_name);
        setUserLastName(userData.data.last_name);
      }
      getData();
    }
  }, [friendRequests]);

  const handleConfirmRequest = () => {

  }



  return (
    <div>
      <div className="FeedSponsored">
        <p className="FeedPage--title">{text}</p>
        <div
          className="FeedPage--btn"
          onClick={(e) => {
            e.preventDefault();
            //TO-DO -> show all request
            console.log("maybe there is a lot of friends here :) ");
          }}
        >
          <CircleIcon srcIcon={userAvatar} />
          <div>
            <p>
              {userName} {userLastName}
              <div>
                <ButtonField btnText="Confirm"  btnColor="#504ddb"  handleClick={() => handleConfirmRequest()}/>
                <ButtonField/>
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedFriendRequest;
