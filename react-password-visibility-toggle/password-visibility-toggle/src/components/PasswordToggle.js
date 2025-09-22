import React, { useState } from 'react';
import './PasswordToggle.css';

const PasswordToggle = () => {
  // State to manage whether the password is visible or not
  const [passwordVisible, setPasswordVisible] = useState(false);

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="password-toggle-container">
      <label htmlFor="password">Password:</label>
      <div className="password-input-wrapper">
        {/* Input type toggles between 'password' and 'text' */}
        <input
          type={passwordVisible ? 'text' : 'password'}
          id="password"
          className="password-input"
          placeholder="Enter your password"
        />
        {/* Icon to toggle password visibility */}
        <span className="password-toggle-icon" onClick={togglePasswordVisibility}>
          {passwordVisible ? (
            <i className="fas fa-eye-slash"></i> // Icon when password is visible
          ) : (
            <i className="fas fa-eye"></i> // Icon when password is hidden
          )}
        </span>
      </div>
    </div>
  );
};

export default PasswordToggle;
