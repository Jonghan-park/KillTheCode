const { Router } = require("express");

const forgotRouter = Router();

const {
  forgotUserName,
  forgotPassword,
  resetPasswordEmail,
  resetPasswordLink,
} = require("../controller/forgotPWController");

forgotRouter.post("/forgot_username", forgotUserName);
forgotRouter.post("/forgot_password", forgotPassword);
forgotRouter.get("/reset-password/:id/:token", resetPasswordEmail);
forgotRouter.post("/reset-password/:id/:token", resetPasswordLink);
module.exports = forgotRouter;
