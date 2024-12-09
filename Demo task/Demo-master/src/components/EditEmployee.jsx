import React, { useState } from "react";

function EditEmployee({ employee, onSave }) {
  const [editedEmployee, setEditedEmployee] = useState({ ...employee });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditedEmployee({ ...editedEmployee, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    onSave(editedEmployee);
    
  };

  return (
    <div className="edit-employee">
      <h2>Edit Employee</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={editedEmployee.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={editedEmployee.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="city">City:</label>
        <input
          type="text"
          id="city"
          name="city"
          value={editedEmployee.city}
          onChange={handleChange}
        />

        <label htmlFor="birthdate">Birthdate:</label>
        <input
          type="date"
          id="birthdate"
          name="birthdate"
          value={editedEmployee.birthdate}
          onChange={handleChange}
        />

        <label htmlFor="gender">gender:</label>
        <select
          id="gender"
          name="gender"
          value={editedEmployee.gender}
          onChange={handleChange}
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <label htmlFor="country">Country:</label>
        <input
          type="text"
          id="country"
          name="country"
          value={editedEmployee.country}
          onChange={handleChange}
        />

        <label htmlFor="state">State:</label>
        <input
          type="text"
          id="state"
          name="state"
          value={editedEmployee.state}
          onChange={handleChange}
        />

        <label htmlFor="mobileNumber">Mobile Number:</label>
        <input
          type="tel"
          id="mobileNumber"
          name="mobileNumber"
          value={editedEmployee.mobileNumber}
          onChange={handleChange}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={editedEmployee.password}
          onChange={handleChange}
          required
        />

        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={editedEmployee.confirmPassword}
          onChange={handleChange}
          required
        />

        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default EditEmployee;
