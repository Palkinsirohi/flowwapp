import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, User, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    if (!name || !email || !password || !confirmPassword) {
      setError('Please fill in all fields.');
    } else if (password !== confirmPassword) {
      setError('Passwords do not match.');
    } else {
      setError('');
      alert('Signup successful!');
    }
  };

  return (
    <motion.div
      className="min-h-screen flex flex-col justify-center items-center bg-gray-100"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl">
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
        
        {error && <div className="text-red-500 mb-4 text-center">{error}</div>}

        <form onSubmit={handleSignup} className="space-y-4">
          <div>
            <label className="block text-gray-700">Name</label>
            <div className="flex items-center border-b-2 border-gray-300 focus-within:border-indigo-500">
              <User className="text-gray-500 mx-2" />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full p-2 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700">Email</label>
            <div className="flex items-center border-b-2 border-gray-300 focus-within:border-indigo-500">
              <Mail className="text-gray-500 mx-2" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full p-2 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700">Password</label>
            <div className="flex items-center border-b-2 border-gray-300 focus-within:border-indigo-500">
              <Lock className="text-gray-500 mx-2" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full p-2 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700">Confirm Password</label>
            <div className="flex items-center border-b-2 border-gray-300 focus-within:border-indigo-500">
              <Lock className="text-gray-500 mx-2" />
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm your password"
                className="w-full p-2 focus:outline-none"
              />
            </div>
          </div>

          <button type="submit" className="w-full bg-indigo-500 text-white rounded-lg py-2">
            Sign Up
          </button>
        </form>

        <div className="text-center mt-4">
          <Link to="/login" className="text-indigo-500 hover:underline">
            Already have an account? Login
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
