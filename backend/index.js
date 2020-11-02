const express = require("express");
require("./db/server");
const userRouter = require("./routers/user");
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(userRouter);

const port = process.env.PORT || 7000;

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});