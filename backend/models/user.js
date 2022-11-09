const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowercase: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  role: {
    type: Boolean,

    // true = user, false = admin
    default: false,
  },
  participate: {
    type: Boolean,

    default: false,
  },
  emoji: {
    type: String,
  },
  chattings: [
    { type: mongoose.Types.ObjectId, ref: "Chatting", required: true },
  ],
  notices: [{ type: mongoose.Types.ObjectId, ref: "Notice", required: true }],
  projects: [{ type: mongoose.Types.ObjectId, ref: "Project", required: true }],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
