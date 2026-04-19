import React, { useState } from "react";
import axios from "axios";

function StudentForm({ fetchStudents }) {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/students", {
        name,
        course,
      });

      setName("");
      setCourse("");
      fetchStudents(); // refresh list
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Student</h2>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Course"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
        required
      />

      <button type="submit">Add</button>
    </form>
  );
}

export default StudentForm;