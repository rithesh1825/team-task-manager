const Project = require("../models/Project");

// Create Project (Admin)
const createProject = async (req, res) => {
  try {
    const { name, description } = req.body;

    const project = new Project({
      name,
      description,
      createdBy: req.user._id,
    });

    await project.save();
    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Get Projects
const getProjects = async (req, res) => {
  try {
    const projects = await Project.find().populate("createdBy", "name email");
    res.json(projects);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = {
  createProject,
  getProjects,
};