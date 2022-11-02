const asyncHandler = require("express-async-handler");
const User = require("../models/user");
//register controller
//route /api/user/register
const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: "Please write all fields" });
  }
  res.send("Register Router");
});

//login controller
//route /api/user/login
const loginUser = asyncHandler(async (req, res) => {
  res.send("Login User");
});

module.exports = {
  registerUser,
  loginUser,
};
