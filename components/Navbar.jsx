import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo or Name */}
          <div className="text-2xl font-bold text-white">
            Portfolio
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex space-x-6">
            <a
              href="#home"
              className="relative text-white hover:text-blue-400 transition duration-300 group"
            >
              Home
              <span className="absolute left-0 bottom-0 h-0.5 bg-blue-400 w-0 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#about"
              className="relative text-white hover:text-blue-400 transition duration-300 group"
            >
              About
              <span className="absolute left-0 bottom-0 h-0.5 bg-blue-400 w-0 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#services"
              className="relative text-white hover:text-blue-400 transition duration-300 group"
            >
              Services
              <span className="absolute left-0 bottom-0 h-0.5 bg-blue-400 w-0 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#blog"
              className="relative text-white hover:text-blue-400 transition duration-300 group"
            >
              Blog
              <span className="absolute left-0 bottom-0 h-0.5 bg-blue-400 w-0 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#contact"
              className="relative text-white hover:text-blue-400 transition duration-300 group"
            >
              Contact
              <span className="absolute left-0 bottom-0 h-0.5 bg-blue-400 w-0 group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-white focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;