const { Router } = require("express");

const noticeRouter = Router();

const {
  getAllNotice,
  saveNotice,
  updateNotice,
  deleteNotice,
} = require("../controller/noticeController");

noticeRouter.get("/", getAllNotice);
noticeRouter.post("/save", saveNotice);
noticeRouter.post("/update", updateNotice);
noticeRouter.post("/delete", deleteNotice);

module.exports = noticeRouter;
