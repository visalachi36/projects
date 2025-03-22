import React from "react";

const StudentCard = ({ student }) => {
  return (
    <div className="student-card">
      <div className="student-id-container">
        <strong>ID:</strong> {student.id}
      </div>
      <div className="student-name-container">
        <strong>Name:</strong> {student.name}
      </div>
    </div>
  );
};

export default StudentCard;
