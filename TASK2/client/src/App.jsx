import React, { useEffect, useState } from "react";
import StudentList from "./components/StudentList";
import "./styles.css"; // Global styles

const App = () => {
  const [students, setStudents] = useState([]); // State for students
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    // Fetch student data from backend
    const fetchStudents = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/students");
        if (!response.ok) {
          throw new Error("Failed to fetch students");
        }
        const data = await response.json();
        setStudents(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  // Function to remove a student
  const removeStudent = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/students/${id}`, { method: "DELETE" });
      setStudents(students.filter(student => student._id !== id)); // Update UI
    } catch (error) {
      console.error("Error removing student:", error);
    }
  };

  if (loading) return <p>Loading students...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="app-container">
      <h1>Student List</h1>
      <StudentList students={students} onRemove={removeStudent} />
    </div>
  );
};

export default App;
