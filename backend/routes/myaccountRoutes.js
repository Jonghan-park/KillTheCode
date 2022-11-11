const express = require("express");
const myAccountRouter = express.Router();
const { updateMyInfo } = require("../controller/myaccountController");

//use protect middleware
const { protect } = require("../middleware/authMiddleware");

myAccountRouter.put("/updateinfo", protect, updateMyInfo);

module.exports = myAccountRouter;
