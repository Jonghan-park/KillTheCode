const express = require("express");
const userRouter = express.Router();
const {
  registerUser,
  loginUser,
  getMe,
  getAllUsers,
  updateMyInfo,
} = require("../controller/userController");
// const { updateMyInfo } = require("../controller/myaccountController");
//use protect middleware
const { protect, admin } = require("../middleware/authMiddleware");

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/me", protect, getMe);
userRouter.get("/", getAllUsers);
userRouter.put("/me/updateinfo", protect, updateMyInfo);

module.exports = userRouter;
