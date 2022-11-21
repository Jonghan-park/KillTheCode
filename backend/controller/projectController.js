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

// POST project
exports.addProject = async (req, res) => {
  const { title, type, language, period, contributors, github, link } =
    req.body;
  // Save the project to DB
  try {
    const users = await Promise.all(
      contributors.map((contributor) => {
        return User.findOne({ email: contributor });
      })
    );

    const findUsername = await Promise.all(
      users.map((user) => {
        return user.username + " ";
      })
    );
    console.log(findUsername);

    let project = new Project({
      title: title,
      type: type,
      language: language,
      period: period,
      contributors: findUsername,
      github: github,
      link: link,
      users: users,
    });

    Promise.all(
      users.map(async (user) => {
        return await user.projects.push(project), await user.save();
      })
    );

    await project.save();
    // Return project if successful
    return res.status(201).json({ project });
  } catch (error) {
    return console.log(error);
  }
};

// DELETE a project by id
exports.deleteProject = async (req, res) => {
  const projectId = req.params.id;
  let usersInProject;
  try {
    usersInProject = await Project.findByIdAndDelete(projectId).populate(
      "users"
    );
    usersInProject.users.map(async (user) => {
      user.projects.pull(usersInProject);
      await user.save();
    });
  } catch (error) {
    return console.log(error);
  }
  if (!usersInProject) {
    return res.status(400).json({ message: "Unable To Delete Project" });
  }
  return res.status(202).json({ message: "Successfully delete" });
};

// PUT a project by id
exports.editProject = async (req, res) => {
  const { title, type, language, period, contributor, github, link } = req.body;

  const projectId = req.params.id;
  let project;
  try {
    console.log(req);
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
