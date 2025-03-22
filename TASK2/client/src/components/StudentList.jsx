import React from "react";
import StudentCard from "./StudentCard";

const StudentList = ({ students, onRemove }) => {
  return (
    <div className="student-list">
      {students.map((student) => (
        <StudentCard key={student._id} student={student} onRemove={onRemove} />
      ))}
    </div>
  );
};

export default StudentList;
