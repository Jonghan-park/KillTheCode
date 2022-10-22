const mongoose = require("mongoose");
const scheduleSchema = new mongoose.Schema({
  fromYear: {
    type: Number,
    required: true,
  },
  fromMonth: {
    type: Number,
    required: true,
  },
  fromDate: {
    type: Number,
    required: true,
  },
  toYear: {
    type: Number,
    required: true,
  },
  toMonth: {
    type: Number,
    required: true,
  },
  toDate: {
    type: Number,
    required: true,
  },
  issue: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  project: {
    type: mongoose.Types.ObjectId,
    ref: "Project",
    required: true,
  },
});

const Schedule = mongoose.model("Schedule", scheduleSchema);

module.exports = Schedule;
