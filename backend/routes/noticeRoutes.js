const { Router } = require("express");

const noticeRouter = Router();

const {
  getAllNotice,
  addNotice,
  updateNotice,
  deleteNotice,
} = require("../controller/noticeController");

noticeRouter.get("/", getAllNotice);
noticeRouter.post("/add", addNotice);
noticeRouter.post("/update/:id", updateNotice);
noticeRouter.post("/delete/", deleteNotice);

module.exports = noticeRouter;
