// const { Router } = require("express");

// const { getAllNotice, saveNotice } = require("../controller/noticeController");

// const noticeRouter = Router();

// noticeRouter.get("/notice", getAllNotice);

// noticeRouter.post("/saveNotice", saveNotice);

// module.exports = noticeRouter;

const express = require("express");
const noticeRouter = express.Router();

const {
  getAllNotice,
  saveNotice,
  updateNotice,
  deleteNotice,
} = require("../controller/noticeController");

noticeRouter.get("/", getAllNotice);
noticeRouter.post("/saveNotice", saveNotice);
noticeRouter.post("/update", updateNotice);
noticeRouter.post("/delete", deleteNotice);

module.exports = noticeRouter;
