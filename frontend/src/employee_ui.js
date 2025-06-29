import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

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
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Employee Manager</h1>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <Input name="id" placeholder="ID" value={formData.id} onChange={handleChange} />
        <Input name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
        <Input name="role" placeholder="Role" value={formData.role} onChange={handleChange} />
        <Button onClick={handleUpdate} className="col-span-3">Update Employee</Button>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {employees.map((emp) => (
          <Card key={emp.id}>
            <CardContent className="p-4">
              <p><strong>ID:</strong> {emp.id}</p>
              <p><strong>Name:</strong> {emp.name}</p>
              <p><strong>Role:</strong> {emp.role}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
