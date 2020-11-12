import React, { useState, useEffect, useLayoutEffect } from "react";
import CircleIcon from "../circle-Img/CircleIcon";
import DataService from '../../db-connection/DataService';

const FeedFriendRequest = ({ text, friendRequests }) => {
  const [userAvatar, setUserAvatar] = useState("");
  const [userName , setUserName] = useState("");
  const [userLastName , setUserLastName] = useState("");

  useEffect(() => {
    if (friendRequests.lenght) {
      const getData = async () => {
        const owner = friendRequests[0].owner
          console.log(owner);
        const userData = await DataService.get(`facebook-profile/get-profile-info/${owner}`);
        console.log(userData);
      };
      getData();
    }
  }, [friendRequests]);

  console.log(friendRequests);

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
        </div>
      </div>
    </div>
  );
};

export default FeedFriendRequest;
