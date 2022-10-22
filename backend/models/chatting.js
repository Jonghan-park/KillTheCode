const mongoose = require("mongoose");
const chattingSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
  project: {
    type: mongoose.Types.ObjectId,
    ref: "Project",
    required: true,
  },
});

const Chatting = mongoose.model("Chatting", chattingSchema);

module.exports = Chatting;
