const express = require("express");
const userRouter = express.Router();

userRouter.post("/", (req, res) => {
  res.send("Register Route");
});
module.exports = userRouter;
