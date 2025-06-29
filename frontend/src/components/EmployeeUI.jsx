import React, { useEffect, useState } from "react";
import axios from "axios";

export default function EmployeeUI() {
  const [employees, setEmployees] = useState([]);
  const [formData, setFormData] = useState({ id: "", name: "", role: "" });

  const api = "http://localhost:8080/employees";

  const fetchEmployees = async () => {
    const res = await axios.get(api);
    setEmployees(res.data);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    await axios.put(`${api}/${formData.id}`, formData);
    setFormData({ id: "", name: "", role: "" });
    fetchEmployees();
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div style={{ padding: '20px', maxWidth: '700px', margin: 'auto' }}>
      <h1 style={{ fontSize: '24px', marginBottom: '20px' }}>Employee Manager</h1>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '30px' }}>
        <input
          name="id"
          placeholder="ID"
          value={formData.id}
          onChange={handleChange}
        />
        <input
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          name="role"
          placeholder="Role"
          value={formData.role}
          onChange={handleChange}
        />
        <button onClick={handleUpdate}>Update Employee</button>
      </div>

      <div>
        {employees.map((emp) => (
          <div key={emp.id} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
            <p><strong>ID:</strong> {emp.id}</p>
            <p><strong>Name:</strong> {emp.name}</p>
            <p><strong>Role:</strong> {emp.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
