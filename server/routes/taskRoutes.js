const express = require("express");
const router = express.Router();

const {
  createTask,
  getTasks,
  updateTask,
  getDashboard,
} = require("../controllers/taskController");

const protect = require("../middleware/authMiddleware");
const authorizeRole = require("../middleware/roleMiddleware");

// 🔐 Admin → create task
router.post("/", protect, authorizeRole("Admin"), createTask);

// 🔐 All logged users → get tasks
router.get("/", protect, getTasks);

// 🔐 Admin + Assigned user → update task
router.put("/:id", protect, updateTask);

// 🔐 Dashboard
router.get("/dashboard", protect, getDashboard);

module.exports = router;