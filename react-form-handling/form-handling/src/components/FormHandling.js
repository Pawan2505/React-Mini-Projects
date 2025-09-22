import "./FormHandling.css";
import React, { useState } from "react";

const FormHandling = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // State to store errors
  const [errors, setErrors] = useState({});

  // State for success message
  const [success, setSuccess] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validate form inputs
  const validate = () => {
    const newErrors = {};
    if (!formData.name) {
      newErrors.name = "Name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.message) {
      newErrors.message = "Message is required";
    }

    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    // ye pura code samjhna hai
    e.preventDefault();
    const validationErrors = validate(); // ye line samjhni h
    if (Object.keys(validationErrors).length === 0) {
      setSuccess(true);
      console.log("Form Submitted Successfully:", formData);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      setErrors({});
    } else {
      setSuccess(false);
      setErrors(validationErrors);
    }
  };

  return (
    <div className="form-container">
      <h2>Form Handling</h2>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? "input-error" : ""}
            placeholder="Enter your name"
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? "input-error" : ""}
            placeholder="Enter your email"
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            className={errors.message ? "input-error" : ""}
            placeholder="Enter your message"
          />
          {errors.message && <span className="error">{errors.message}</span>}
        </div>

        <button type="submit" className="btn">
          Submit
        </button>
      </form>

      {/* Success Message */}
      {success && (
        <p className="success-message">Form submitted successfully!</p>
      )}
    </div>
  );
};

export default FormHandling;
