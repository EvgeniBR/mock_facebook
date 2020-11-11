const express = require("express");
const User = require("../models/user");
const router = new express.Router();


const castingTheValue = (value) => {
  return value === 'true' && true
}

const removeFriendRequest = async (profileToUpdate , friendRequestToRemove ) => {
  const updateUser = await User.findOneAndUpdate(
    { path: profileToUpdate },
    { $pull : { friendsRequest : { "owner": friendRequestToRemove}}},
    { new: true }
  );
  return updateUser
}

const addFriendRequest = async (profileToUpdate , friendRequestToAdd) => {
  const updateUser = await User.findOneAndUpdate(
    { path: profileToUpdate },
    { $push : { friendsRequest : { "owner": friendRequestToAdd}}},
    { new: true }
  );
  return updateUser
}

const removeGetFriendRequest = async (profileToUpdate , friendRequestToRemove ) => {
  const updateUser = await User.findOneAndUpdate(
    { path: profileToUpdate },
    { $pull : { friendsRequestSend : { "owner": friendRequestToRemove}}},
    { new: true }
  );
  return updateUser
}

const addGetFriendRequest = async (profileToUpdate , friendRequestToRemove ) => {
  const updateUser = await User.findOneAndUpdate(
    { path: profileToUpdate },
    { $push : { friendsRequestSend : { "owner": friendRequestToRemove}}},
    { new: true }
  );
  return updateUser
}

//get friend request picture 
router.get("/facebook-profile/get-profile-info/:owner", async (req, res) => {
  const owner = castingTheValue(req.params.owner);

  try {
    const updateUser = await User.findOne(
      { path: owner },
      { first_name:1 , last_name:1 , avatar:1 },
    );
    res.send(updateUser);
  } catch (e) {
    res.status(400).send(e);
  }
});


//make new request
router.patch("/facebook-profile/send-request", async (req, res) => {
  const profilePath = req.body.profilePath;
  const userPath=req.body.userPath;
  const request = castingTheValue(req.query.request);

  console.log("pp" ,profilePath , "up" , userPath , "request" , typeof request  );

  //update the profile with request from the user 
  try {
    const updateUser = request ? await removeFriendRequest(profilePath , userPath) : await addFriendRequest(profilePath , userPath)
    if (!updateUser) {
      res.status(400).send(e);
    }
    console.log(updateUser);
    res.send(updateUser);
  } catch (e) {
    res.status(400).send(e);
  }
});
    {/* { $pull : { friendsRequestSend : { "owner": userPath}}}, */}
router.patch("/facebook-profile/get-request", async (req, res) => {
    const profilePath = req.body.profilePath;
    const userPath=req.body.userPath;
    const request = castingTheValue(req.query.request);

    console.log("pp" ,profilePath , "up" , userPath , "request" , request  );

    //update the user with path the user send request to 
    try {
      const updateUser = request ? await removeGetFriendRequest(userPath , profilePath) : await addGetFriendRequest(userPath , profilePath)
      if (!updateUser) {
        res.status(400).send();
      }
      console.log(updateUser);
      res.send(updateUser);
    } catch (e) {
      res.status(400).send(e);
    }
  });


module.exports = router