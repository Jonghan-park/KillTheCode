const express = require("express");
const meetingRouter = express.Router();

const {
  addMeeting,
  getAllMeeting,
  updateMeeting,
} = require("../controller/meetingController");

meetingRouter.get("/", getAllMeeting);
meetingRouter.post("/add", addMeeting);
meetingRouter.put("/update/:id", updateMeeting);

module.exports = meetingRouter;
