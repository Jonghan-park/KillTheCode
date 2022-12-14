const mongoose = require("mongoose");
const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: "Web application",
  },
  language: {
    type: String,
    required: true,
  },
  period: {
    type: String,
  },
  contributors: [
    {
      type: String,
      required: true,
    },
  ],
  github: {
    type: String,
    required: true,
  },
  link: {
    type: String,
  },
  schedule: {
    type: mongoose.Types.ObjectId,
    ref: "Schedule",
  },
  chatting: {
    type: mongoose.Types.ObjectId,
    ref: "Chatting",
  },
  meeting: {
    type: mongoose.Types.ObjectId,
    ref: "Meeting",
  },
  users: [
    {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
  ],
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
