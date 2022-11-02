const express = require("express");
const meetingRouter = express.Router();

const {addMeeting, getAllMeeting} = require('../controller/meetingController')

meetingRouter.get("/", getAllMeeting)
meetingRouter.post("/add", addMeeting)


module.exports = meetingRouter; 