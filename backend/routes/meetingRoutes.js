const express = require("express");
const meetingRouter = express.Router();

const {
  addMeeting,
  getAllMeeting,
  updateMeeting,
  getById,
  deleteMeeting,
} = require("../controller/meetingController");

meetingRouter.get("/", getAllMeeting);
meetingRouter.post("/add", addMeeting);
meetingRouter.put("/update/:id", updateMeeting);
meetingRouter.get("/:id", getById);
meetingRouter.delete("/:id", deleteMeeting);

module.exports = meetingRouter;
