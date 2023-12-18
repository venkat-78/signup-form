import { useState, useEffect } from "react";
import "./App.css";
const SignUpForm = () => {
  // State for form inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // State for validation status
  const [emailValid, setEmailValid] = useState(true); // Initial state assumes valid
  const [passwordValid, setPasswordValid] = useState(true);
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(true);

  // Function to validate email format
  const validateEmail = (input) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);
  };

  // Function to validate password length
  const validatePassword = (input) => {
    return input.length >= 8;
  };

  // Function to handle email input change
  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setEmailValid(validateEmail(newEmail));
  };

  // Function to handle password input change
  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setPasswordValid(validatePassword(newPassword));
  };

  // Function to handle confirm password input change
  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);
    setConfirmPasswordValid(newConfirmPassword === password);
  };

  // Function to handle form submission
  const handleSubmit = () => {
    // Check if all inputs are valid
    if (emailValid && passwordValid && confirmPasswordValid) {
      alert('Form submitted successfully!');
    } else {
      // Show specific error messages based on validation status
      if (!emailValid) {
        alert('Error: Please enter a valid email address.');
      } else if (!passwordValid) {
        alert('Error: Password must be at least 8 characters long.');
      } else if (!confirmPasswordValid) {
        alert('Error: Passwords do not match.');
      } else {
        alert('Unknown error. Please check your inputs.');
      }
    }
  };
  return (
    <div className="signup-form">
      <label>Email:</label>
      <input
        type="text"
        value={email}
        onChange={handleEmailChange}
        className={emailValid ? 'valid' : 'invalid'}
      />
      {!emailValid && <p className="error">Error: Please enter a valid email address.</p>}

      <label>Password:</label>
      <input
        type="password"
        value={password}
        onChange={handlePasswordChange}
        className={passwordValid ? 'valid' : 'invalid'}
      />
      {!passwordValid && (
        <p className="error">Error: Password must be at least 8 characters long.</p>
      )}

      <label>Confirm Password:</label>
      <input
        type="password"
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
        className={confirmPasswordValid ? 'valid' : 'invalid'}
      />
      {!confirmPasswordValid && (
        <p className="error">Error: Passwords do not match.</p>
      )}

      <button onClick={handleSubmit}>Sign Up</button>
    </div>
  );
};



export default SignUpForm;
