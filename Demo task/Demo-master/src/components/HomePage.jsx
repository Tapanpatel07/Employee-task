import React, { useState, useEffect } from "react";
import EmployeeList from "./EmployeeList";
import EditEmployee from "./EditEmployee";

function HomePage() {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  useEffect(() => {
    const storedEmployees = JSON.parse(
      localStorage.getItem("employees") || "[]"
    );
    setEmployees(storedEmployees);
  }, []);

  useEffect(() => {
    if (localStorage.getItem("demo")) {
    } else {
      window.location.href = "/login";
    }
  },[]);

  const handleEdit = (employee) => {
    setSelectedEmployee(employee);
  };

  const handleSave = (editedEmployee) => {
    const updatedEmployees = employees.map((emp) =>
      emp.id === editedEmployee.id ? editedEmployee : emp
    );

    localStorage.setItem("employees", JSON.stringify(updatedEmployees));
    setEmployees(updatedEmployees);
    setSelectedEmployee(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("demo");
    window.location.href = "/login";
  };

  return (
    <div className="home-page">
      <h1>Welcome to home page</h1>
      <h2>Employee Dashboard</h2>
      <EmployeeList employees={employees} onEdit={handleEdit} />

      {selectedEmployee && (
        <EditEmployee employee={selectedEmployee} onSave={handleSave} />
      )}

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default HomePage;
