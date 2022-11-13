const Chatting = require("../models/chatting");
const Project = require("../models/project");
const User = require("../models/user");

// GET chatting messages of the current project
exports.getChatting = async (req, res) => {
  let chatting;

  // Find all chatting messages by project id
  try {
    chatting = await Chatting.find({project: req.params.projectId});
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }

  // Return chatting messages as an array to frontend
  return res.status(200).json(chatting);
};

// GET owner of the chatting message
exports.getChatOwner = async (req, res) => {
  let owner;

  try {
    owner = await User.findById(req.params.userId);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }

  // Return the owner
  return res.status(200).json(owner);
};

// Function to find the current local time
function getCurrentDate() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const today = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const milliseconds = date.getMilliseconds();

  return new Date(Date.UTC(year, month, today, hours, minutes, seconds, milliseconds));
};

// POST new chatting
exports.addChatting = async (req, res) => {
  const { content, userId, projectId } = req.body;
  let chatting;

  try {
    const user = await User.findById(userId);
    const project = await Project.findById(projectId);
    const date = getCurrentDate();

    // Create a new chatting object with data
    chatting = new Chatting({
      date: date,
      content: content,
      user: user,
      project: project,
    });

    // Save the chatting to DB
    await chatting.save();
  } catch (error) {
    return console.log(error);
  }

  // Return chatting if successful to frontend
  return res.status(201).json(chatting);
};
