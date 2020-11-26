const mongoose = require("mongoose");

//mongoose.connect("mongodb://127.0.0.1:27017/mock-facebook-api"
//mongodb atlas need to be at env.dev for security
//mongoose.connect("mongodb+srv://mockfacebookapp:@dorinzz122@cluster0.eltwc.mongodb.net/mock-facebook-api?retryWrites=true&w=majority", {
 mongoose.connect("mongodb://127.0.0.1:27017/mock-facebook-api",{
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology:true,
});
mongoose.set('useFindAndModify', false);