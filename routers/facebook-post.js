const express = require("express");
const { Post, PostComment, PostLike } = require("../models/facebook-post");
const Uesr = require("../models/user");
const router = new express.Router();


// CRUD POST
//need to add -> nested comment to post comment.

const getUserData = async (owner) => {
  const user = await Uesr.findOne(
    { path: owner },
    { first_name: 1, last_name: 1 , avatar:1}
  );
  return user;
};

const getUserProfile = async (owner_list, res) => {
  try{
    const getUserInfo = owner_list.comments.map(async (post) => {
      return {
        myPost: post,
        userDataPost: await getUserData(post.owner),
      };
    });
    Promise.all(getUserInfo).then((arr) => res.send(arr));
  }
  catch (e) {
    res.status(500).send("inside function");
  }
};

//get user posts (all posts) -> set Owner list.
router.get("/facebook-post/profile/:owner", async (req, res) => {
  const owner = req.params.owner;

  try {
    const usersPost = await Post.find({ owner: owner });

    res.send(usersPost);
  } catch (e) {
    res.status(500).send();
  }
});

//get post by id .
router.get("/facebook-post/get-post/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const post = await Post.findById(id);
    res.send(post);
  } catch (e) {
    res.status(500).send();
  }
});

//get comments of post by id
router.get("/facebook-post/post/:id", async (req, res) => {
  const id = req.params.id;

  let postComments = [];
  try {
    postComments = await Post.findOne({ _id: id }, { comments: 1 });
    await getUserProfile(postComments , res);
  } catch (e) {
    res.status(500).send();
  }
});

//get user posts (all posts) -> set Owner list.
router.get("/facebook-post/feed/:owner", async (req, res) => {
  const owner = req.params.owner;
  //get owner friedlist
  let userFriend = [];
  try {
    userFriend = await Uesr.findOne({ path: owner }, { friends: 1 });
  } catch (e) {
    res.status(500).send();
  }
  let selecteMessage = userFriend.friends;
  selecteMessage.push(owner);

  try {
    const usersPost = await Post.find({ owner: { $in: [...selecteMessage] } });
    const getUserInfo = usersPost.map(async (post) => {
      return {
        myPost: post,
        userDataPost: await getUserData(post.owner),
      };
    });
    Promise.all(getUserInfo).then((arr) => res.send(arr));
  } catch (e) {
    res.status(500).send();
  }
});

//post new user post obj needed -> owner(token/auth/id), message
router.post("/facebook-post", async (req, res) => {
  const myData = req.body;
  const post = new Post(myData);
  try {
    await post.save();
    res.status(201).send({ post });
  } catch (e) {
    res.status(400).send(e);
  }
});

//update post -> need to get message
router.patch("/facebook-post/:id", async (req, res) => {
  //get the new massge and update exists post sould return the post
  const updateMsg = req.body.message;
  try {
    await Post.findOneAndUpdate(
      { _id: req.params.id },
      { message: updateMsg },
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

//update exists post and update friend comment -> need get props -> owner(owner id) , friendid , req -> message
router.patch("/facebook-comment/:id/:commentid", async (req, res) => {
  const myData = req.body.message;
  try {
    const updatePost = await Post.findOneAndUpdate(
      { _id: req.params.id, "comments._id": req.params.commentid },
      { $set: { "comments.$.message": myData } },
      { new: true }
    );
    if (!updatePost) {
      res.status(400).send(e);
    }
    res.send(updatePost);
  } catch (e) {
    res.status(400).send(e);
  }
});

//TO-DO - not work
//update exists post and delete friend comment -> need get props -> owner(owner id) , friendid
router.patch("/facebook-comment/:id/delete/:commentid", async (req, res) => {
  try {
    const updatePost = await Post.findByIdAndDelete({
      _id: req.params.id,
      "comments._id": req.params.commentid,
    });
    if (!updatePost) {
      res.status(400).send(e);
    }
    res.send(updatePost);
  } catch (e) {
    res.status(400).send(e);
  }
});

//TO-DO - remove like not work
//add to spesific post -> need to get owner(path)
router.patch("/facebook-post/:id/:reaction", async (req, res) => {
  //if owner exist (already make like to the post -> remove the like)
  const like = new PostLike(req.body);
  like.reaction = req.params.reaction;
  try {
    const post = await Post.find({
      _id: req.params.id,
      "likes.owner": req.body.owner,
    });
    //check if exist or not
    if (post.length) {
      const idToDelete = post[0]._id;
      //for unlike
      if (req.params.reaction === "unlike") {
        const unlike = await Post.findOneAndUpdate(
          { _id: req.params.id },
          { $pull: { likes: { owner: req.body.owner } } },
          { new: true }
        );
        res.send(unlike);
      } else {
        //update reaction options
        await Post.findOneAndUpdate(
          { _id: req.params.id, "likes.owner": req.body.owner },
          { $set: { "likes.$.reaction": req.params.reaction } },
          { new: true }
        ).then((updateLike) => res.send(updateLike));
      }
    } else {
      //push to the array new like
      await Post.findOneAndUpdate(
        { _id: req.params.id },
        { $push: { likes: like } },
        { new: true }
      ).then((updateLike) => res.send(updateLike));
    }
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
