const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json()); // Parse JSON request bodies
app.use(cors()); // Allow frontend requests

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/taskDB")
    .then(() => console.log("✅ MongoDB connected successfully"))
    .catch(err => console.error("❌ MongoDB connection error:", err));

// Task Schema & Model
const taskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    dueDate: String,
    status: { type: String, default: "Open" }
});

const Task = mongoose.model("Task", taskSchema);

// API Routes

// Get all tasks
app.get("/tasks", async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ error: "Error fetching tasks" });
    }
});

// Add a new task
app.post("/tasks", async (req, res) => {
    try {
        const { title, description, dueDate, status } = req.body;
        const newTask = new Task({ title, description, dueDate, status });
        await newTask.save();
        res.status(201).json(newTask);
    } catch (err) {
        res.status(500).json({ error: "Error adding task" });
    }
});

// Delete a task
app.delete("/tasks/:id", async (req, res) => {
    try {
        const { id } = req.params;
        await Task.findByIdAndDelete(id);
        res.json({ message: "Task deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: "Error deleting task" });
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
