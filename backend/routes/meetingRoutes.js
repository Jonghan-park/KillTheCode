const express = require("express");
const meetingRouter = express.Router();

const {
  addMeeting,
  getAllMeeting,
  updateMeeting,
  getById,
} = require("../controller/meetingController");

meetingRouter.get("/", getAllMeeting);
meetingRouter.post("/add", addMeeting);
meetingRouter.put("/update/:id", updateMeeting);
meetingRouter.get("/:id", getById);

module.exports = meetingRouter;
