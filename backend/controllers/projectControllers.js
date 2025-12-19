const Project = require("../models/Project");

// @desc    Add new project (Admin)
// @route   POST /api/projects
exports.createProject = async (req, res) => {
  try {
    const { name, description, image } = req.body;

    if (!name || !description || !image) {
      return res.status(400).json({
        success: false,
        message: "All fields are required"
      });
    }

    const project = await Project.create({
      name,
      description,
      image
    });

    res.status(201).json({
      success: true,
      message: "Project created successfully",
      project
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Get all projects (Landing Page)
// @route   GET /api/projects
exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: projects.length,
      projects
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
