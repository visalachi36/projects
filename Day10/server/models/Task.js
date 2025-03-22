const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    status: { type: String, enum: ["Open", "In Progress", "Completed"], default: "Open" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Task", taskSchema);
