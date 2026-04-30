const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    title: String,
    status: {
        type: String,
        enum: ["Todo", "In Progress", "Done"],
        default: "Todo"
    },
    dueDate: Date,
    project: { type: mongoose.Schema.Types.ObjectId, ref: "Project" },
    assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
});

module.exports = mongoose.model("Task", taskSchema);