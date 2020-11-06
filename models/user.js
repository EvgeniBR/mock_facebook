const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
    trim: true,
  },
  last_name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid");
      }
    },
  },
  password: {
    type: String,
    required: true,
    minlength: 7,
    trim: true,
    validate(value) {
      if (value.toLowerCase().includes("password")) {
        throw new Error('password cannot contain "password"');
      }
    },
  },
  gender: {
    type: String,
    required: true,
  },
  birthday: 
    {
      day: {
        type: Number,
        required: true,
      },
      month: {
        type: String,
        required: true,
      },
      year:{
        type: Number,
        required: true,  
      }
    },
  
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
  avatar:{
    type : Buffer,
  },
  cover:{
    type : Buffer,
  },
  friends:[{
    type: String,
  }],
  friendsRequest:[{
    type: String,
  }],
  activity:[{
    type: String,
  }],
  seen:[{
    type: Boolean,
  }],
  path:{
    type:String,
  }
 }, {
    timestamps: true,
  });

  // function that prevents sendind tue password and tokents back to the user side
userSchema.methods.toJSON = function () {
    const user = this
    const userObject = user.toObject()

    delete userObject.password
    delete userObject.tokens
    delete userObject.avatar

    return userObject
}


// costume function to generate token for user  
userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign({ _id: user._id.toString() }, 'facebookmock');

  user.tokens = user.tokens.concat({ token });
  await user.save();

  return token;
};
// costume function to validate user be email and password
userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("Unable to login");
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error("Unable to login");
  }

  return user;
};


// hash the password before saving
userSchema.pre("save", async function (next) {
  const user = this;

  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }

  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
