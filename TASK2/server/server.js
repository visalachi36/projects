// Import required modules
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json()); // Parse JSON request bodies
app.use(cors()); // Enable CORS

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
})
.then(() => console.log("✅ MongoDB connected successfully!"))
.catch((error) => console.error("❌ MongoDB connection failed:", error));

// Define Student Schema & Model
const studentSchema = new mongoose.Schema({
    name: String,
    studentId: String
});

const Student = mongoose.model("Student", studentSchema);

// Routes
app.get("/", (req, res) => {
    res.send("Welcome to the Student API!");
});

app.get("/api/students", async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
});


// ✅ POST a new student
app.post("/api/students", async (req, res) => {
    try {
        const { name, studentId } = req.body;
        const newStudent = new Student({ name, studentId });
        await newStudent.save();
        res.status(201).json(newStudent);
    } catch (error) {
        res.status(500).json({ message: "Error saving student data" });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
