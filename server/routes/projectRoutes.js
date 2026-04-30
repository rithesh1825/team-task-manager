const express = require("express");
const router = express.Router();

const { createProject, getProjects } = require("../controllers/projectController");
const protect = require("../middleware/authMiddleware");
const authorizeRole = require("../middleware/roleMiddleware");


// 🔐 Only ADMIN can create project
router.post("/", protect, authorizeRole("Admin"), createProject);


// 🔐 Both Admin & Member can view projects
router.get("/", protect, getProjects);


module.exports = router;