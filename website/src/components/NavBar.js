import React, { useState } from 'react';
import { Link } from 'react-scroll';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky bg-gray-800 text-gray-100 p-4 top-0">
      <div className="container mx-auto">
        <div className="flex justify-between items-center md:justify-center">
          {/* Logo or Brand Name */}

          {/* Hamburger Menu for small screens */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>

          {/* Navigation Links for larger screens - centered */}
          <div className="hidden md:flex space-x-6">
            <NavLink to="about">About</NavLink>
            <NavLink to="experience">Experience</NavLink>
            <NavLink to="education">Education</NavLink>
            <NavLink to="portfolio">Portfolio</NavLink>
          </div>

          {/* Contact Button for larger screens */}
          <div className="hidden md:block md:absolute md:right-4">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition-colors cursor-pointer"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <NavLink to="about" onClick={toggleMenu}>About</NavLink>
            <NavLink to="experience" onClick={toggleMenu}>Experience</NavLink>
            <NavLink to="education" onClick={toggleMenu}>Education</NavLink>
            <NavLink to="portfolio" onClick={toggleMenu}>Portfolio</NavLink>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="block mt-4 px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition-colors cursor-pointer text-center"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

function NavLink({ to, children, onClick }) {
  return (
    <Link
      to={to}
      smooth={false}
      duration={500}
      className="block py-2 hover:text-teal-400 transition-colors cursor-pointer"
      onClick={onClick}
    >
      {children}
    </Link>
  );
}