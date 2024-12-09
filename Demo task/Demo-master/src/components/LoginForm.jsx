import React, { useState } from "react";

function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = {};
    if (!formData.email) {
      validationErrors.email = "Email is required";
    }
    if (!formData.password) {
      validationErrors.password = "Password is required";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const employees = JSON.parse(localStorage.getItem("employees") || "[]");
    const isAuthenticated = employees.some(
      (employee) =>
        employee.email === formData.email &&
        employee.password === formData.password
    );

    if (isAuthenticated) {
      window.location.href = "/home";
      localStorage.setItem("demo", JSON.stringify(formData));
    } else {
      setErrors({ general: "Invalid email or password" });
    }
    
  };

  return (
    <div className="login-form">
      <h2>Employee Login</h2>
      <form onSubmit={handleSubmit}>
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
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && (
            <p className="error-message">{errors.password}</p>
          )}
        </div>
        <button type="submit">Login</button>
        <a href="/">Register</a>
        {errors.general && <p className="error-message">{errors.general}</p>}
      </form>
    </div>
  );
}

export default LoginForm;
