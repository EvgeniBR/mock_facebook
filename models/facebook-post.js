const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  owner: {
    type: String,
    required: true,
  },
  massege: {
    type: String,
    required: true,
  },
  createdDate:{
    type: String,
    required: true,
  },
  updateDate:{
    type: String,
    required: true,
  },
  date: {
    type: String,
  },
  likes: {
    like: {
      type: Array,
    },
    love: {
      type: Array,
    },
    care: {
      type: Array,
    },
    haha: {
      type: Array,
    },
    wow: {
      type: Array,
    },
    sad: {
      type: Array,
    },
    angry: {
      type: Array,
    },
  },
  comments: {
    type: Array,
  },
  // children: [ nestedCommentSchema ]
})

const postSchema = new mongoose.Schema({
  owner: {
    type: String,
    required: true,
  },
  massege: {
    type: String,
    required: true,
  },
  createdDate:{
    type: String,
    required: true,
  },
  updateDate:{
    type: String,
    required: true,
  },
  date: {
    type: String,
  },
  likes: {
    like: {
      type: Array,
    },
    love: {
      type: Array,
    },
    care: {
      type: Array,
    },
    haha: {
      type: Array,
    },
    wow: {
      type: Array,
    },
    sad: {
      type: Array,
    },
    angry: {
      type: Array,
    },
  },
  comments: [ commentSchema ]
});

const Post = mongoose.model("FacebookPost", postSchema);
const PostComment = mongoose.model("FacebookComment", commentSchema);

module.exports = {Post,PostComment};
