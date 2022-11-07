const express = require("express");
const projectRouter = express.Router();

const {
  getAllProjects,
  getProject,
  addProject,
  deleteProject,
  editProject,
} = require("../controller/projectController");

projectRouter.get("/", getAllProjects);
projectRouter.get("/:id", getProject);
projectRouter.post("/add", addProject);
projectRouter.delete("/delete/:id", deleteProject);
projectRouter.put("/edit/:id", editProject);

module.exports = projectRouter;
