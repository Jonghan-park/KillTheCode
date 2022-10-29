const express = require("express");
const router = express.Router();

const {
  getAllProjects,
  getProject,
  addProject,
  deleteProject,
  editProject,
} = require("../controller/projectController");

router.get("/", getAllProjects);
router.get("/:id", getProject);
router.post("/add", addProject);
router.delete("/delete", deleteProject);
router.put("/edit", editProject);

module.exports = router;
