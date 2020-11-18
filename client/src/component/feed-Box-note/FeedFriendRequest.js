import React, { useState, useEffect } from "react";
import CircleIcon from "../circle-Img/CircleIcon";
import DataService from "../../db-connection/DataService";
import ButtonField from "../button-field/ButtonField";
import "./FeedBoxNote.css";

const FeedFriendRequest = ({ text, friendRequests, currentPath, theme }) => {
  const [userAvatar, setUserAvatar] = useState("");
  const [userName, setUserName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [userAskPath, setUserAskPath] = useState("");
  const [approve, setApprove] = useState(false);
  const [refuse, setRefuse] = useState(false);

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
        setUserAskPath(owner);
      }
      getData();
    }
  }, [friendRequests]);

  const handleConfirmRequest = async () => {
    //remove the request and push each profile to friend list
    try {
      await DataService.patch(
        `facebook-profile/send-request?request=true&friends=true`,
        {
          userPath: userAskPath,
          profilePath: currentPath,
        }
      );
      await DataService.patch(
        `facebook-profile/get-request?request=true&friends=true`,
        {
          userPath: userAskPath,
          profilePath: currentPath,
        }
      );
      setApprove(true);
    } catch {
      console.log("something wrong try again later");
    }
  };

  const handleReqectRequest = async () => {
    //remove the request
    try {
      await DataService.patch(`facebook-profile/send-request?request=true`, {
        userPath: currentPath,
        profilePath: userAskPath,
      });
      await DataService.patch(`facebook-profile/get-request?request=true`, {
        userPath: currentPath,
        profilePath: userAskPath,
      });
      setRefuse(true);
    } catch {
      console.log("something wrong try again later");
    }
  };

  if (!friendRequests.length) {
    return <div></div>;
  }
  return (
    <div className="FeedSponsored">
      <p className="FeedPage--title" style={{ color: theme.secondText }}>
        {text}
      </p>
      <div
        className="FeedPage__Main"
        onClick={(e) => {
          e.preventDefault();
          //TO-DO -> show all request
          console.log("maybe there is a lot of friends here :) ");
        }}
      >
        <CircleIcon srcIcon={userAvatar} />
        <div className="feedPage__Main__Text">
          <p style={{ color: theme.secondText }}>
            {userName} {userLastName}
          </p>
          {(!approve && !refuse)? (
            <div className="FeedPage__Main--btn">
              <ButtonField
                btnText="Confirm"
                btnColor={theme.btnBlueColor}
                handleClick={() => handleConfirmRequest()}
                btnWidth="48%"
              />
              <ButtonField
                btnText="Delete"
                btnColor={theme.postBackground}
                handleClick={() => handleReqectRequest()}
                btnWidth="48%"
              />
            </div> 
          ) : approve ? <div>You accept the friend request</div> : <div>You reject the friend request</div>}
        </div>
      </div>
    </div>
  );
};

export default FeedFriendRequest;
