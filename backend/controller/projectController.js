const Project = require("../models/project");

exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find({});
    res.json(projects);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
exports.getProject = async (req, rex) => {
  try {
  } catch (error) {}
};

exports.addProject = async (req, rex) => {
  try {
  } catch (error) {}
};

exports.deleteProject = async (req, rex) => {
  try {
  } catch (error) {}
};

exports.editProject = async (req, rex) => {
  try {
  } catch (error) {}
};
