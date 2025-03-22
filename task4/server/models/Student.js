const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  studentId: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  major: { type: String, required: true },
  year: { type: Number, required: true },
  imageUrl: { type: String, default: "https://via.placeholder.com/150" } // Placeholder image
});

const Student = mongoose.model("Student", studentSchema);
module.exports = Student;
