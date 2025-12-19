const express = require("express");
const {
  createProject,
  getAllProjects
} = require("../controllers/projectcontrollers");

const router = express.Router();

// POST - add project (admin)
router.post("/", createProject);

// GET - fetch all projects (landing page)
router.get("/", getAllProjects);

module.exports = router;
