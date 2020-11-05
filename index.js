const express = require("express");
require("./db/server");
const userRouter = require("./routers/user");
const postRouter = require("./routers/facebook-post");
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(userRouter);
app.use(postRouter);

const port = process.env.PORT || 7000;

if (process.env.NODE_ENV === 'production') {
  // Exprees will serve up production assets
  app.use(express.static('client/build'));

  // Express serve up index.html file if it doesn't recognize route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});