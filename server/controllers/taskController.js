const Task = require("../models/Task");

// 🔹 Create Task (Admin only)
const createTask = async (req, res) => {
  try {
    const { title, description, project, assignedTo, dueDate } = req.body;

    const task = new Task({
      title,
      description,
      project,
      assignedTo,
      dueDate,
    });

    await task.save();

    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// 🔹 Get Tasks
const getTasks = async (req, res) => {
  try {
    let tasks;

    // Admin → see all
    if (req.user.role === "Admin") {
      tasks = await Task.find()
        .populate("project", "name")
        .populate("assignedTo", "name email");
    } else {
      // Member → only assigned tasks
      tasks = await Task.find({ assignedTo: req.user._id })
        .populate("project", "name")
        .populate("assignedTo", "name email");
    }

    res.json(tasks);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// 🔹 Update Task (Admin or assigned user)
const updateTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) return res.status(404).json({ msg: "Task not found" });

    // Check permission
    if (
      task.assignedTo.toString() !== req.user._id.toString() &&
      req.user.role !== "Admin"
    ) {
      return res.status(403).json({ msg: "Not allowed" });
    }

    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updatedTask);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// 🔹 Dashboard API
const getDashboard = async (req, res) => {
  try {
    let filter = {};

    // Member → only their tasks
    if (req.user.role !== "Admin") {
      filter.assignedTo = req.user._id;
    }

    const total = await Task.countDocuments(filter);

    const completed = await Task.countDocuments({
      ...filter,
      status: "Done",
    });

    const pending = await Task.countDocuments({
      ...filter,
      status: { $ne: "Done" },
    });

    const overdue = await Task.countDocuments({
      ...filter,
      dueDate: { $lt: new Date() },
      status: { $ne: "Done" },
    });

    res.json({
      total,
      completed,
      pending,
      overdue,
    });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = {
  createTask,
  getTasks,
  updateTask,
  getDashboard,
};