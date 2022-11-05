const Project = require("../models/project");
const User = require("../models/user");

// GET all projects
exports.getAllProjects = async (req, res) => {
  let projects;

  // Find all projects from DB
  try {
    projects = await Project.find();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }

  // Return projects as an array to frontend
  return res.status(200).json({ projects });
};

// GET specific project by id
exports.getProject = async (req, res) => {
  let project;

  // Get project using id of parameter.
  try {
    project = await Project.findById(req.params.id);
  } catch (error) {
    console.log(error);
  }

  // Return the project if successful
  return res.status(200).json(project);
};

// Find contributors username
const findUsername = async (contributors) => {
  // Declare arrays
  let contributorsName = [];
  let users = [];
  // Loop contributors for storing user and username to users and contributorsName arrays respectively.
  await contributors.map(async (contributor) => {
    let user;
    try {
      user = await User.findOne({ email: contributor });
    } catch (error) {
      console.log(error);
      return res.status(400).json("Can't find a user");
    }

    users.push(user);
    contributorsName.push(user.username);
  });
  console.log(users);
  return { users, contributorsName };
};

// POST project
exports.addProject = async (req, res) => {
  const { title, type, language, period, contributors, github, link } =
    req.body;

  const { users, contributorsName } = findUsername(contributors);

  // Create a new project object with data from req.body
  const project = new Project({
    title: title,
    type: type,
    language: language,
    period: period,
    contributors: contributorsName,
    github: github,
    link: link,
    users: users,
  });

  // Save the project to DB
  try {
    await project.save();
  } catch (error) {
    return console.log(error);
  }

  // Return project if successful
  return res.status(201).json({ project });
};

// DELETE a project by id
exports.deleteProject = async (req, res) => {
  try {
  } catch (error) {}
};

// PUT a project by id
exports.editProject = async (req, res) => {
  const { title, type, language, period, contributor, github, link } = req.body;
  const projectId = req.params.id;
  let project;
  try {
    project = await Project.findByIdAndUpdate(projectId, {
      title,
      type,
      language,
      period,
      contributor,
      github,
      link,
    });
  } catch (error) {
    return console.log(error);
  }
  if (!project) {
    return res.status(500).json({ message: "Unable To Update The Project" });
  }
  return res.status(200).json({ project });
};
