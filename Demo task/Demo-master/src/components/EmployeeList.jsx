import React from "react";

function EmployeeList({ employees, onEdit }) {
  return (
    <div className="table">
      <table className="employee-list">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
            <th>Birthdate</th>
            <th>Gender</th> 
            <th>Country</th>
            <th>State</th>
            <th>Mobile Number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.city}</td>
              <td>{employee.birthdate}</td>
              <td>{employee.gender}</td> 
              <td>{employee.country}</td>
              <td>{employee.state}</td>
              <td>{employee.mobileNumber}</td>
              <td>
                <button onClick={() => onEdit(employee)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeList;
