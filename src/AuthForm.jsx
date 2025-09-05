import './AuthForm.css';
import React, { useState } from 'react';
import axios from 'axios';

const AuthForm = ({ closeModal }) => {
  
  const [isSignup, setIsSignup] = useState(false);
  
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
    setSuccess('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8000/api/signup/', formData);
      alert('Signup successful');
    } catch (err) {
     
    }
  

    const { username, email, password } = formData;

    if (isSignup && (!username || username.length < 3)) {
      setError('Username must be at least 3 characters');
      return;
    }

    if (!validateEmail(email)) {
      setError('Enter a valid email');
      return;
    }

    if (!password || password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    
    // Simulated response:
    setTimeout(() => {
      setSuccess(isSignup ? 'Signup successful!' : 'Login successful!');
      setFormData({ username: '', email: '', password: '' });
    }, 500); 
  };

  return (
    <div >
      <h2 className="text-2xl font-semibold text-gray-700 text-center mb-4">
        {isSignup ? 'Sign Up' : 'Sign In'}
      </h2>

      <form onSubmit={handleSubmit}>
        {isSignup && (
          <input 
            type="text"
            name="username"
            placeholder="Username"
            className="w-full mb-3 px-4 py-2 border-2 border-green-600 rounded"
            onChange={handleChange}
            value={formData.username}
          />
        )}
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full mb-3 px-4 py-2 border-2 border-green-600 rounded"
          onChange={handleChange}
          value={formData.email}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full mb-3 px-4 py-2 border-2 border-green-600 rounded"
          onChange={handleChange}
          value={formData.password}
        />
        {error && <p className="text-red-500 mb-2">{error}</p>}
        {success && <p className="text-green-500 mb-2">{success}</p>}

        <button
          type="submit"
          className="w-full bg-gray-600 text-white py-2 rounded hover:bg-green-600"
        >
          {isSignup ? 'Sign Up' : 'Sign In'}
        </button>
      </form>

      <p
        onClick={() => setIsSignup(!isSignup)}
        className="text-sm text-center text-green-600 mt-4 cursor-pointer hover:underline"
      >
        {isSignup
          ? 'Already have an account? Sign In'
          : "Don't have an account? Sign Up"}
      </p>

      <button
        onClick={closeModal}
        className="mt-4 text-sm text-gray-700 hover:text-red-600 block mx-auto"
      >
        Close
      </button>
    </div>
  );
};

export default AuthForm;