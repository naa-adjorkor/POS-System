import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import loaderGif from '../../assets/loader.gif'; 

export const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [nameValid, setNameValid] = useState(null);
  const [emailValid, setEmailValid] = useState(null);
  const [passwordValid, setPasswordValid] = useState(null);
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const validateEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  const validatePassword = (value) => value.length >= 6;
  const validateName = (value) => value.trim().length > 2;
  const validateConfirmPassword = (value) => value === password;

  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
    setNameValid(validateName(value));
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setEmailValid(validateEmail(value));
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordValid(validatePassword(value));
    setConfirmPasswordValid(validateConfirmPassword(confirmPassword));
  };

  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
    setConfirmPasswordValid(validateConfirmPassword(value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isNameValid = validateName(name);
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);
    const isConfirmPasswordValid = validateConfirmPassword(confirmPassword);

    setNameValid(isNameValid);
    setEmailValid(isEmailValid);
    setPasswordValid(isPasswordValid);
    setConfirmPasswordValid(isConfirmPasswordValid);

    if (isNameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid) {
      setLoading(true); // Show the loader
      setTimeout(() => {
        navigate('/home');
      }, 2000); // Simulate a delay for the loader
    } else {
      if (!isNameValid) alert('Name must be longer than 2 characters.');
      if (!isEmailValid) alert('Please enter a valid email.');
      if (!isPasswordValid) alert('Password must be at least 6 characters long.');
      if (!isConfirmPasswordValid) alert('Passwords do not match.');
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-4 sm:p-0">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md mx-4 sm:mx-0">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">SIGNUP</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name input */}
          <div>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={handleNameChange}
              className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 ${
                nameValid === null
                  ? 'border-gray-300 focus:ring-gray-300'
                  : nameValid
                  ? 'border-emerald-500 focus:ring-emerald-400'
                  : 'border-red-500 focus:ring-red-400'
              }`}
            />
            {nameValid === false && (
              <p className="text-red-500 text-sm mt-1">Name must be longer than 2 characters.</p>
            )}
          </div>

          {/* Email input */}
          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
              className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 ${
                emailValid === null
                  ? 'border-gray-300 focus:ring-gray-300'
                  : emailValid
                  ? 'border-emerald-500 focus:ring-emerald-400'
                  : 'border-red-500 focus:ring-red-400'
              }`}
            />
            {emailValid === false && (
              <p className="text-red-500 text-sm mt-1">Please enter a valid email.</p>
            )}
          </div>

          {/* Password input */}
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 ${
                passwordValid === null
                  ? 'border-gray-300 focus:ring-gray-300'
                  : passwordValid
                  ? 'border-emerald-500 focus:ring-emerald-400'
                  : 'border-red-500 focus:ring-red-400'
              }`}
            />
            {passwordValid === false && (
              <p className="text-red-500 text-sm mt-1">Password must be at least 6 characters long.</p>
            )}
          </div>

          {/* Confirm Password input */}
          <div>
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 ${
                confirmPasswordValid === null
                  ? 'border-gray-300 focus:ring-gray-300'
                  : confirmPasswordValid
                  ? 'border-emerald-500 focus:ring-emerald-400'
                  : 'border-red-500 focus:ring-red-400'
              }`}
            />
            {confirmPasswordValid === false && (
              <p className="text-red-500 text-sm mt-1">Passwords do not match.</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            SIGNUP
          </button>
          <p className="text-center mt-4">
            Already have an account? <Link to="/" className="text-blue-600 underline">Login</Link>
          </p>
        </form>
        {loading && (
          <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50 z-20">
            <img src={loaderGif} alt="Loading..." className="w-16 h-16" />
          </div>
        )}
      </div>

      {/* Copyright section */}
      <p className="absolute bottom-4 text-center w-full text-gray-500 text-sm">
        &copy; 2024 <a href="/">BNA<sup>3</sup>.  All rights reserved</a>
      </p>
    </div>
  );
};
