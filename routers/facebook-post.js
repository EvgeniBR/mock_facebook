const express = require("express");
const Post = require("../models/facebook-post");
const router = new express.Router();
const date = require("../util/date");

// CRUD POST
//need to add -> update post and delete post , update comment and delete comment
//neef to add -> nested comment to post comment.

//get user posts (all posts)
router.get("/facebook-post/:owner", async (req, res) => {
  try {
    const usersPost = await Post.find({ owner: req.params.owner });
    res.send(usersPost);
  } catch (e) {
    res.status(500).send();
  }
});

//post new user post obj needed -> owner(token/auth/id), message
router.post("/facebook-post", async (req, res) => {
  const myData = req.body;
  myData["createdDate"] = date.getFullDate();
  myData["updateDate"] = date.getFullDate();
  const post = new Post(myData);
  try {
    await post.save();
    res.status(201).send({ post });
  } catch (e) {
    res.status(400).send(e);
  }
});

//update post -> need to get massege
router.patch("/facebook-post/:id", async (req, res) => {
  //get the new massge and update exists post sould return the post
  const updateMsg = req.body.massege;
  try {
    await Post.findOneAndUpdate(
      { _id: req.params.id },
      { massege: updateMsg },
      { new: true }
    ).then((newUpdatedPost) => {
      if (!newUpdatedPost) {
        res.status(400).send();
      }
      res.send(newUpdatedPost);
    });
  } catch (e) {
    res.status(400).send(e);
  }
});

//delete post
/////////////////////  user activity - must delete from activity of user and comment users ///////////
router.delete("/facebook-post/:id", async (req, res) => {
  //get the new massge and update exists post sould return the post
  try {
    await Post.findOneAndDelete({ _id: req.params.id }).then(
      (newUpdatedPost) => {
        if (!newUpdatedPost) {
          res.status(400).json({ data: "not deleted" });
        }
        res.json({ data: "deleted" });
      }
    );
  } catch (e) {
    res.status(400).send(e);
  }
});

//update exists post with new comment -> need get owner(owner id) , message
router.patch("/facebook-comment/:id", async (req, res) => {
  const myData = req.body;
  myData["createdDate"] = date.getFullDate();
  myData["updateDate"] = date.getFullDate();
  const comment = new Post(myData);
  try {
    const updatePost = await Post.findOneAndUpdate(
      { _id: req.params.id },
      { $push: { comments: comment } },
      { new: true }
    );

    if (!updatePost) {
      res.status(400).send();
    }
    res.send(updatePost);
  } catch (e) {
    res.status(400).send(e);
  }
});

//update exists post and update friend comment -> need get owner(owner id) , message
router.patch("/facebook-comment/:id/:commentid", async (req, res) => {
  console.log(req.params.commentid);
  console.log(req.params.id);
  const myData = req.body.massege;
  try {
    const updatePost = await Post.findOneAndUpdate(
      {"_id": req.params.id, "comments._id": req.params.commentid},
      {$set: {"comments.$.massege": "P"}}
    );

    if (!updatePost) {
      res.status(400).send(e);
    }
    res.send(updatePost);
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
