const router = require("express").Router();
const Task = require("../models/Task");
const auth = require("../middleware/auth");

// create task
router.post("/", auth, async (req, res) => {
    const task = await Task.create(req.body);
    res.json(task);
});

// update task
router.put("/:id", auth, async (req, res) => {
    const task = await Task.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.json(task);
});

// get all tasks (dashboard)
router.get("/", auth, async (req, res) => {
    const tasks = await Task.find()
        .populate("assignedTo")
        .populate("project");

    res.json(tasks);
});

module.exports = router;