const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  studentId: { type: String, required: true, unique: true },
  imageUrl: { type: String, default: "https://via.placeholder.com/150" } // Placeholder image
});

const Student = mongoose.model("Student", studentSchema);
module.exports = Student;
