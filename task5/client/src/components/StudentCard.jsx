import React from "react";
import "./StudentCard.css";

const StudentCard = ({ student }) => {
  return (
    <div className="student-card card">
      <img className="card-img-top" src={student.imageUrl} alt={student.name} />
      <div className="card-body">
        <h3 className="card-title">{student.name}</h3>
        <p className="card-text"><strong>ID:</strong> {student.studentId}</p>
        <p className="card-text"><strong>Email:</strong> {student.email}</p>
        <p className="card-text"><strong>Major:</strong> {student.major}</p>
        <p className="card-text"><strong>Year:</strong> {student.year}</p>
      </div>
    </div>
  );
};

export default StudentCard;
