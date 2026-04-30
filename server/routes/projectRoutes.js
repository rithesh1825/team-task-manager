const express = require("express");
const router = express.Router();

const Project = require("../models/Project");
const auth = require("../middleware/auth");

router.post("/", auth, async (req, res) => {
  try {
    if (req.user.role !== "Admin") {
      return res.status(403).json({ msg: "Access denied" });
    }

    const { name, description } = req.body;

    const project = new Project({
      name,
      description,
      createdBy: req.user.id
    });

    await project.save();

    res.json(project);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

module.exports = router;