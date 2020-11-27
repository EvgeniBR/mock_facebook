const express = require("express");
const User = require("../models/user");
const router = new express.Router();

const castingTheValue = (value) => {
  return value === "true" && true;
};

const removeFriendRequest = async (profileToUpdate, friendRequestToRemove) => {
  const updateUser = await User.findOneAndUpdate(
    { path: profileToUpdate },
    { $pull: { friendsRequest: { "owner": friendRequestToRemove } } },
    { new: true }
  );
  return updateUser;
};

const addFriendRequest = async (profileToUpdate, friendRequestToAdd) => {
  const updateUser = await User.findOneAndUpdate(
    { path: profileToUpdate },
    { $push:{ friendsRequest: { "owner": friendRequestToAdd }} , $push:{"activity":friendRequestToAdd}},
    { new: true }
  );
  return updateUser;
};

const removeSendFriendRequest = async (
  profileToUpdate,
  friendRequestToRemove
) => {
  const updateUser = await User.findOneAndUpdate(
    { path: profileToUpdate },
    { $pull: { friendsRequestSend: { "owner": friendRequestToRemove } } },
    { new: true }
  );
  return updateUser;
};

const addGetFriendRequest = async (profileToUpdate, friendRequestToAdd) => {
  const updateUser = await User.findOneAndUpdate(
    { path: profileToUpdate },
    { $push: { friendsRequestSend: { "owner": friendRequestToAdd } } },
    { new: true }
  );
  return updateUser;
};

const addToFriendsList = async (profileToUpdate, anotherProfileToUpdate) => {
  const updateUser = await User.updateMany(
    { path: profileToUpdate },
    { $push: { friends: { "owner": anotherProfileToUpdate}}},
    { new: true }
  );
  return updateUser;
};

//remove frind from friend list in friend profile and in user profile.
const removeFromFriendList = async (profileToUpdate, anotherProfileToUpdate) => {
  const updateUser = await User.updateMany(
    { path: profileToUpdate},
    { $pull: { friends: { "owner": anotherProfileToUpdate }}},
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

  //update the profile with request from the user
  try {
    const updateUser = request
      ? await removeFriendRequest(profilePath, userPath)
      : await addFriendRequest(profilePath, userPath);
    if (!updateUser) {
      res.status(400).send(e);
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

  //update the user with path the user send request to
  console.log(profilePath , userPath ,request );
  try {
    const updateUser = request
      ? await removeSendFriendRequest(userPath, profilePath)
      : await addGetFriendRequest(userPath, profilePath);
    if (!updateUser) {
      res.status(400).send();
    }
    else{
      res.send(updateUser);
    }

  } catch (e) {
    res.status(400).send(e);
  }
});

router.patch("/facebook-profile/rejectFriendRequest", async (req, res) => {
  const profilePath = req.body.profilePath;
  const userPath = req.body.userPath;

  //remove from the user the friend request and remove from profile sendfriendrequest
  //add both to friendlist
  try {
    await removeFriendRequest(userPath,profilePath);
    await removeSendFriendRequest(profilePath,userPath);
    res.send("unfriend")
  } catch (e) {
    res.status(400).send(e);
  }
});


router.patch("/facebook-profile/getFriendRequest", async (req, res) => {
  const profilePath = req.body.profilePath;
  const userPath = req.body.userPath;

  //remove from the user the friend request and remove from profile sendfriendrequest
  //add both to friendlist
  try {
    await removeFriendRequest(userPath,profilePath);
    await removeSendFriendRequest(profilePath,userPath);
    await addToFriendsList(userPath,profilePath);
    await addToFriendsList(profilePath,userPath);
    res.send("friends")
  } catch (e) {
    res.status(400).send(e);
  }
});

router.patch("/facebook-profile/removeFriend", async (req, res) => {
  const profilePath = req.body.profilePath;
  const userPath = req.body.userPath;

  //update the user with path the user send request to
  try {
    await removeFromFriendList(userPath , profilePath);
    await removeFromFriendList(profilePath , userPath);
    res.send("unfriends");
  } catch (e) {
    res.status(400).send(e);
  }
});


module.exports = router;
