const asyncHandler = require("express-async-handler");
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//register controller
//route /api/user/register
const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: "Please write all fields" });
  }

  //check exist user
  const existUser = await User.findOne({ email: email });
  if (existUser) {
    res.status(400);
    throw new Error("This Email address is already registered");
  }

  //Hash Password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  //create user
  const user = await User.create({
    username,
    email,
    password: hashedPassword,
  });

  //return created user data
  if (user) {
    res.status(201).json({
      _id: user._id,
      username: user.username,
      email: user.email,
      token: generateToken(user._id),
      role: user.role,
      participate: user.participate,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

//login controller
//route /api/user/login
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });

  //check user and password
  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({
      _id: user._id,
      username: user.username,
      email: user.email,
      role: user.role,
      participate: user.participate,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid password or email");
  }
});

//get current user data
//route /api/user/me
const getMe = asyncHandler(async (req, res) => {
  const user = {
    id: req.user._id,
    email: req.user.email,
  };
  res.status(200).json(user);
});

//get all user data
//route /api/users
//use in admin page
const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});
  res.json(users);
});

//update my profile
//put request
//api/users/me
const updateMyInfo = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.username = req.body.username || user.username;
    user.email = req.body.email || user.email;
    if (req.body.password) {
      user.password = req.body.password;
    }
    const updateUser = await user.save();

    res.json({
      _id: updateUser._id,
      username: updateUser.username,
      email: updateUser.email,
      role: updateUser.role,
      participate: updateUser.participate,
      token: generateToken(updateUser._id),
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

//Generate token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

module.exports = {
  registerUser,
  loginUser,
  getMe,
  getAllUsers,
  updateMyInfo,
};
