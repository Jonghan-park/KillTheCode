const express = require("express");
const chattingRouter = express.Router();

const {
  getChatting,
  addChatting,
} = require("../controller/chattingController");

chattingRouter.get("/:projectId", getChatting);
chattingRouter.post("/add", addChatting);

module.exports = chattingRouter;
