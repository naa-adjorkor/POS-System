import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import loaderGif from '../../assets/loader.gif';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailValid, setEmailValid] = useState(null);
  const [passwordValid, setPasswordValid] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate(); // Initialize useNavigate

  // Email validation function
  const validateEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  // Password validation function (6 characters minimum)
  const validatePassword = (value) => value.length >= 6;

  // Handle email input changes
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setEmailValid(validateEmail(value));
  };

  // Handle password input changes
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordValid(validatePassword(value));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);

    setEmailValid(isEmailValid);
    setPasswordValid(isPasswordValid);

    if (isEmailValid && isPasswordValid) {
      setLoading(true); // Show the loader
      setTimeout(() => {
        navigate('/home'); // Redirect after a delay
      }, 2000); // Simulate a delay for the loader
    } else {
      if (!isEmailValid) alert('Please enter a valid email.');
      if (!isPasswordValid) alert('Password must be at least 6 characters long.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 relative">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md mx-4 sm:mx-0 z-10">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">LOGIN</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email input */}
          <div>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              className={`w-full p-3 border rounded-md focus:outline-none focus:ring-1 ${
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
              name="password"
              value={password}
              onChange={handlePasswordChange}
              className={`w-full p-3 border rounded-md focus:outline-none focus:ring-1 ${
                passwordValid === null
                  ? 'border-gray-300 focus:ring-gray-300'
                  : passwordValid
                  ? 'border-emerald-500 focus:ring-emerald-400'
                  : 'border-red-500 focus:ring-red-400'
              }`}
            />
            {passwordValid === false && (
              <p className="text-red-500 text-sm mt-1">
                Password must be at least 6 characters long.
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            LOGIN
          </button>
          <p className="text-center mt-4">
            Don't have an account? <Link to="/signup" className="text-blue-600 underline">Sign up</Link>
          </p>
        </form>
        {loading && (
          <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50 z-20">
            <img src={loaderGif} alt="Loading..." className="w-16 h-16" />
          </div>
        )}
      </div>
      
      {/* Copyright outside the form */}
      <p className="absolute bottom-4 text-center w-full text-gray-500 text-sm">
        &copy; 2024 <a href="/">BNA<sup>3</sup>.  All rights reserved</a>
      </p>
    </div>
  );
};
