const express = require("express");
const User = require("../models/user");
const router = new express.Router();

const castingTheValue = (value) => {
  return value === "true" && true;
};

const removeFriendRequest = async (profileToUpdate, friendRequestToRemove) => {
  const updateUser = await User.findOneAndUpdate(
    { path: profileToUpdate },
    { $pull: { friendsRequest: { owner: friendRequestToRemove } } },
    { new: true }
  );
  return updateUser;
};

const addFriendRequest = async (profileToUpdate, friendRequestToAdd) => {
  const updateUser = await User.findOneAndUpdate(
    { path: profileToUpdate },
    { $push: { friendsRequest: { owner: friendRequestToAdd } } },
    { new: true }
  );
  return updateUser;
};

const removeGetFriendRequest = async (
  profileToUpdate,
  friendRequestToRemove
) => {
  const updateUser = await User.findOneAndUpdate(
    { path: profileToUpdate },
    { $pull: { friendsRequestSend: { owner: friendRequestToRemove } } },
    { new: true }
  );
  return updateUser;
};

const addGetFriendRequest = async (profileToUpdate, friendRequestToRemove) => {
  const updateUser = await User.findOneAndUpdate(
    { path: profileToUpdate },
    { $push: { friendsRequestSend: { owner: friendRequestToRemove } } },
    { new: true }
  );
  return updateUser;
};

const addToFriendsList = async (profileToUpdate, friendToAdded) => {
  const updateUser = await User.findOneAndUpdate(
    { path: profileToUpdate },
    { $push
      : { friends: { owner: friendToAdded } } },
    { new: true }
  );
  return updateUser;
};

//get friend request picture
router.get("/facebook-profile/get-profile-info/:owner", async (req, res) => {
  const owner = req.params.owner;

  try {
    const updateUser = await User.findOne(
      { path: owner },
      { first_name: 1, last_name: 1, avatar: 1 }
    );
    res.send(updateUser);
  } catch (e) {
    res.status(400).send(e);
  }
});

//make new request - need to get profilePath -> the path user you need to update
// userpath -> the userPath -> this data will pull or push to the array
router.patch("/facebook-profile/send-request", async (req, res) => {
  const profilePath = req.body.profilePath;
  const userPath = req.body.userPath;
  const request = castingTheValue(req.query.request);
  const friends = castingTheValue(req.query.friends);

  //update the profile with request from the user
  try {
    const updateUser = request
      ? await removeFriendRequest(profilePath, userPath)
      : await addFriendRequest(profilePath, userPath);
    if (!updateUser) {
      res.status(400).send(e);
    }

    if (friends) {
      const addFriend = await addToFriendsList(profilePath, userPath);
      res.send(addFriend);
    }
    else{
      res.send(updateUser);
    }
    
  } catch (e) {
    res.status(400).send(e);
  }
});

router.patch("/facebook-profile/get-request", async (req, res) => {
  const profilePath = req.body.profilePath;
  const userPath = req.body.userPath;
  const request = castingTheValue(req.query.request);
  const friends = castingTheValue(req.query.friends);


  //update the user with path the user send request to
  try {
    const updateUser = request
      ? await removeGetFriendRequest(userPath, profilePath)
      : await addGetFriendRequest(userPath, profilePath);
    if (!updateUser) {
      res.status(400).send();
    }

    if (friends) {
      const addFriend = await addToFriendsList(userPath , profilePath);
      res.send(addFriend);
    }
    else{
      res.send(updateUser);
    }

  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;