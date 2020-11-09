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
},{
  timestamps: true,
})

const commentSchema = new mongoose.Schema({
  owner: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  date: {
    type: String,
  },
  likes: [likeSchema],
},{
  timestamps: true,
})

const postSchema = new mongoose.Schema({
  owner: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  date: {
    type: String,
  },
  likes: [likeSchema],
  comments: [ commentSchema ],
},{
  timestamps: true,
});

const Post = mongoose.model("FacebookPost", postSchema);
const PostComment = mongoose.model("commentPost",commentSchema);
const PostLike = mongoose.model("postLikes",likeSchema);

module.exports = {Post,PostComment,PostLike};
