import React, { useState } from "react";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    city: "",
    country: "",
    state: "",
    mobileNumber: "",
    password: "",
    confirmPassword: "",
    birthdate: "",
    gender: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = {};

    const nameRegex = /^[A-Za-z']+$/;
      if (!formData.name) {
        validationErrors.name = "Name is required";
      } else if (!nameRegex.test(formData.email)) {
        validationErrors.name = "Please enter a valid name";
      }

    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      validationErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      validationErrors.email = "Please enter a valid email address";
    }

   
    if (!formData.city) {
      validationErrors.city = "City is required";
    }

   
    if (!formData.country) {
      validationErrors.country = "Country is required";
    }

    
    if (!formData.state) {
      validationErrors.state = "State is required";
    }

    
    const phoneRegex = /^[0-9]{10}$/;
    if (!formData.mobileNumber) {
      validationErrors.mobileNumber = "Mobile number is required";
    } else if (!phoneRegex.test(formData.mobileNumber)) {
      validationErrors.mobileNumber = "Please enter a valid 10-digit mobile number";
    }

  
    if (!formData.password) {
      validationErrors.password = "Password is required";
    }

   
    if (!formData.confirmPassword) {
      validationErrors.confirmPassword = "Confirm password is required";
    }

   
    if (!formData.birthdate) {
      validationErrors.birthdate = "Birthdate is required";
    }

   
    if (!formData.gender) {
      validationErrors.gender = "Gender is required";
    }

   
    if (formData.password !== formData.confirmPassword) {
      validationErrors.password = "Passwords do not match";
    }

    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

  
    const employees = JSON.parse(localStorage.getItem("employees") || "[]");
    const employeeId = `employee${employees.length + 1}`;

    localStorage.setItem(
      "employees",
      JSON.stringify([...employees, { id: employeeId, ...formData }])
    );

    window.location.href = "/login";
  };

  return (
    <div className="registration-form">
      <div>
        <h2>Employee Registration</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              maxLength={10}
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="error-message">{errors.name}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error-message">{errors.email}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="city">City:</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
            />
            {errors.city && <p className="error-message">{errors.city}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="birthdate">Birthdate:</label>
            <input
              type="date"
              id="birthdate"
              name="birthdate"
              value={formData.birthdate}
              onChange={handleChange}
            />
            {errors.birthdate && (
              <p className="error-message">{errors.birthdate}</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="gender">Gender:</label>
            <select
              value={formData.gender}
              id="gender"
              name="gender"
              onChange={handleChange}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            {errors.gender && <p className="error-message">{errors.gender}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="country">Country:</label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
            />
            {errors.country && (
              <p className="error-message">{errors.country}</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="state">State:</label>
            <input
              type="text"
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
            />
            {errors.state && <p className="error-message">{errors.state}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="mobileNumber">Mobile Number:</label>
            <input
              type="tel"
              id="mobileNumber"
              maxLength={10}
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
            />
            {errors.mobileNumber && (
              <p className="error-message">{errors.mobileNumber}</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              autoComplete="off"
              id="password"
              maxLength={8}
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && (
              <p className="error-message">{errors.password}</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              autoComplete="off"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && (
              <p className="error-message">{errors.confirmPassword}</p>
            )}
          </div>
          <button type="submit">Register</button>
          <a href="/login">Login</a>
        </form>
      </div>
    </div>
  );
}

export default RegistrationForm;
