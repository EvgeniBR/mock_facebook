const mongoose = require("mongoose");

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
  comments: {
    type: Array,
  },
});

const Post = mongoose.model("FacebookPost", postSchema);

module.exports = Post;
