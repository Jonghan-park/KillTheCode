const Project = require("../models/project");

// GET all projects
exports.getAllProjects = async (req, res) => {
  let projects;
  try {
    projects = await Project.find();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }

  return res.status(200).json({ projects });
};

// GET specific project by id
exports.getProject = async (req, res) => {
  try {
  } catch (error) {}
};

// POST project
exports.addProject = async (req, res) => {
  const { title, type, language, period, contributor, github, link } = req.body;
  const project = new Project({
    title: title,
    type: type,
    language: language,
    period: period,
    contributor: contributor,
    github: github,
    link: link,
    users: [],
  });
  try {
    await project.save();
  } catch (error) {
    return console.log(error);
  }
  return res.status(201).json({ project });
};

// DELETE a project by id
exports.deleteProject = async (req, res) => {
  try {
  } catch (error) {}
};

// PUT a project by id
exports.editProject = async (req, res) => {
  try {
  } catch (error) {}
};
