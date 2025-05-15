import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, User } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError('Please fill in all fields.');
    } else if (username !== 'admin' || password !== 'password') {
      setError('Incorrect username or password.');
    } else {
      setError('');
      alert('Login successful!');
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
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        
        {error && <div className="text-red-500 mb-4 text-center">{error}</div>}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-gray-700">Username</label>
            <div className="flex items-center border-b-2 border-gray-300 focus-within:border-indigo-500">
              <User className="text-gray-500 mx-2" />
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
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

          <button type="submit" className="w-full bg-indigo-500 text-white rounded-lg py-2">
            Login
          </button>
        </form>

        <div className="text-center mt-4">
          <Link to="/signup" className="text-indigo-500 hover:underline">
            Don't have an account? Sign Up
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
