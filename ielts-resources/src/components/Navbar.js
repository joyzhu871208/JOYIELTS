import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold text-primary">IELTS Resources</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/templates" className="text-gray-600 hover:text-primary">
              Templates
            </Link>
            <Link to="/courses" className="text-gray-600 hover:text-primary">
              Courses
            </Link>
            <Link to="/resources" className="text-gray-600 hover:text-primary">
              Resources
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-primary">
              About
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-primary">
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-primary focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/templates"
                className="block px-3 py-2 text-gray-600 hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Templates
              </Link>
              <Link
                to="/courses"
                className="block px-3 py-2 text-gray-600 hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Courses
              </Link>
              <Link
                to="/resources"
                className="block px-3 py-2 text-gray-600 hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Resources
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-gray-600 hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-gray-600 hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 