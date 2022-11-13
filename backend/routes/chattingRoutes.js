const express = require("express");
const chattingRouter = express.Router();

const {
  getChatting,
  getChatOwner,
  addChatting,
} = require("../controller/chattingController");

chattingRouter.get("/:projectId", getChatting);
chattingRouter.get("/owner/:userId", getChatOwner);
chattingRouter.post("/add", addChatting);

module.exports = chattingRouter;
