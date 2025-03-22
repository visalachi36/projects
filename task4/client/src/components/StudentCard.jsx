import React from "react";
import "./StudentCard.css";

const StudentCard = ({ student }) => {
  return (
    <div className="student-card">
      <img src={student.imageUrl} alt={student.name} />
      <h3>{student.name}</h3>
      <p><strong>ID:</strong> {student.studentId}</p>
      <p><strong>Email:</strong> {student.email}</p>
      <p><strong>Major:</strong> {student.major}</p>
      <p><strong>Year:</strong> {student.year}</p>
    </div>
  );
};

export default StudentCard;
