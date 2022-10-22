const mongoose = require("mongoose");
const meetingSchema = new mongoose.Schema({
  meetingYear: {
    type: Number,
    required: true,
  },
  meetingMonth: {
    type: Number,
    required: true,
  },
  meetingDate: {
    type: Number,
    required: true,
  },
  attendees: {
    type: String,
    required: true,
  },
  meetingMonth: {
    type: Number,
    required: true,
  },
  project: {
    type: mongoose.Types.ObjectId,
    ref: "Project",
    required: true,
  },
});

const Meeting = mongoose.model("Meeting", meetingSchema);

module.exports = Meeting;
