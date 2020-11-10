const express = require("express");
const Uesr = require("../models/user");
const router = new express.Router();

//make new request
router.patch("/facebook-profile/send-request", async (req, res) => {
  const profilePath = req.body.profilePath;
  const userPath=req.body.userPath;
  console.log(profilePath,userPath);
  //update the profile with request from the user 
  try {
    const updateUser = await Post.findOneAndUpdate(
      { path: profilePath },
      { $push: { friendsRequest : { "userPath": userPath} } },
      { new: true }
    );
    if (!updateUser) {
      res.status(400).send(updateUser);
    }
    res.send(updateUser);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.patch("/facebook-profile/get-request", async (req, res) => {
    const profilePath = req.body.profilePath;
    const userPath=req.body.userPath;
    
    //update the user with path the user send request to 
    try {
      const updateUser = await Post.findOneAndUpdate(
        { path: userPath },
        { $push: { friendsRequestSend : { "profilePath": profilePath}}},
        { new: true }
      );
      if (!updateUser) {
        res.status(400).send();
      }
      res.send(updateUser);
    } catch (e) {
      res.status(400).send(e);
    }
  });


module.exports = router