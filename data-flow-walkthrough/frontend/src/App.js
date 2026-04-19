import React, { useEffect, useState } from "react";
import axios from "axios";
import StudentForm from "./StudentForm";

function App() {
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    try {
      const res = await axios.get("http://localhost:5000/students");
      setStudents(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div>
      <h1>Student List</h1>

      <StudentForm fetchStudents={fetchStudents} />

      <ul>
        {students.map((student, index) => (
          <li key={index}>
            {student.name} - {student.course}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;