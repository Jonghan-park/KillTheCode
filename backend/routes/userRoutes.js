const express = require("express");
const userRouter = express.Router();
const {
  registerUser,
  loginUser,
  getMe,
} = require("../controller/userController");

//use protect middleware
const { protect } = require("../middleware/authMiddleware");

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/me", protect, getMe);

module.exports = userRouter;
