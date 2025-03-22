import React, { useEffect, useState } from "react";
import axios from "axios";
import StudentCard from "./StudentCard";
import "./StudentList.css";

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true); // Added loading state
  const [error, setError] = useState(null); // Added error state

  useEffect(() => {
    axios.get("http://localhost:5000/api/students")
      .then(response => {
        setStudents(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching students:", error);
        setError("Failed to load students.");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading students...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="student-list">
      {students.length > 0 ? (
        students.map(student => (
          <StudentCard key={student.studentId} student={student} />
        ))
      ) : (
        <p>No students found.</p>
      )}
    </div>
  );
};

export default StudentList;
