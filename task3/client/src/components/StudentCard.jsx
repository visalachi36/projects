import React from "react";
import "./StudentCard.css";

const StudentCard = ({ student }) => {
  return (
    <div className="student-card">
      <img src={student.imageUrl} alt={student.name} />
      <h3>{student.name}</h3>
      <p>ID: {student.studentId}</p>
    </div>
  );
};

export default StudentCard;
