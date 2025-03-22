const Student = require("../models/Student");

// Fetch all students
const getStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: "Error fetching students" });
  }
};

// Add a new student
const addStudent = async (req, res) => {
  const { name, studentId } = req.body;
  try {
    const newStudent = new Student({ name, studentId });
    await newStudent.save();
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(400).json({ message: "Error adding student" });
  }
};

module.exports = { getStudents, addStudent };
