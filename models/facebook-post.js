const mongoose = require("mongoose");


const likeSchema = new mongoose.Schema({
  owner:{
    type:String,
    required: true,
  },
  reaction:{
    type:String,
    required: true,
  }
})

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
  likes: [likeSchema],
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
  likes: [likeSchema],
  comments: [ commentSchema ]
});

const Post = mongoose.model("FacebookPost", postSchema);
const PostComment = mongoose.model("commentPost",commentSchema);
const PostLike = mongoose.model("postLikes",likeSchema);

module.exports = {Post,PostComment,PostLike};
