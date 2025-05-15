import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-green-600 text-white shadow-lg fixed w-full z-50 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Left side - Brand */}
          <div className="flex-shrink-0 text-xl font-bold tracking-wide select-none">
            Palkin Sirohi
          </div>

          {/* Hamburger menu button for small screens */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Navigation links */}
          <div className={`flex-1 justify-center items-center md:flex ${isOpen ? 'block' : 'hidden'} md:block`}>
            <ul className="flex flex-col md:flex-row md:space-x-8 md:items-center">
              <li>
                <a
                  href="#profile"
                  className="block px-3 py-2 rounded-md text-base font-medium text-white transition-colors"
                >
                  Profile
                </a>
              </li>
              <li>
                <a
                  href="#task"
                  className="block px-3 py-2 rounded-md text-base font-medium text-white transition-colors"
                >
                  Task
                </a>
              </li>
              <li>
                <a
                  href="#statistics"
                  className="block px-3 py-2 rounded-md text-base font-medium text-white transition-colors"
                >
                  Statistics
                </a>
              </li>
              <li>
                <a
                  href="#login"
                  className="block px-3 py-2 rounded-md text-base font-medium text-white  transition-colors"
                >
                  Login
                </a>
              </li>
              <li>
                <a
                  href="#signup"
                  className="block px-3 py-2 rounded-md text-base font-medium text-white  transition-colors"
                >
                  Signup
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
