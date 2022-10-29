const express = require("express");
const router = express.Router();

const { getAllProjects } = require("../controller/projectController");

router.get("/", getAllProjects);

module.exports = router;
