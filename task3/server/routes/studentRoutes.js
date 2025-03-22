const express = require("express");
const Student = require("../models/Student");

const router = express.Router();

// Middleware to set CORS headers (prevents fetch issues)
router.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// Create a new student
router.post("/students", async (req, res) => {
  try {
    const { name, studentId, imageUrl } = req.body;
    const newStudent = new Student({ name, studentId, imageUrl });
    await newStudent.save();
    res.status(201).json(newStudent);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all students
router.get("/students", async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
