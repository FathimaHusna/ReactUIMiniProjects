import React, { useState, useCallback } from 'react';
import logo from '../Assets/logo-color.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle menu with useCallback to memoize the function
  const toggleMenu = useCallback(() => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }, []);

  // Close menu with useCallback to avoid re-creation of the function
  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <nav className="bg-light p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Company Name */}
        <div className="flex items-center">
          <img 
            src={logo} 
            alt="Company Logo" 
            className="h-10 w-10 rounded-full mr-2" 
          />
          <div className="text-green font-bold text-xl">DecoHome</div>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button 
            className="text-dark_green focus:outline-none" 
            onClick={toggleMenu} 
            aria-expanded={isOpen}  // Enhanced accessibility with aria-expanded
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`md:flex md:space-x-6 text-dark_green ${
            isOpen ? 'block flex-col space-y-4 transition-all duration-300' : 'hidden'
          } md:block`}
        >
          <li>
            <a 
              href="#home" 
              className="hover:text-brown focus:outline-none focus:ring-2 focus:ring-brown" 
              onClick={closeMenu}
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="#services" 
              className="hover:text-brown focus:outline-none focus:ring-2 focus:ring-brown" 
              onClick={closeMenu}
            >
              Services
            </a>
          </li>
          <li>
            <a 
              href="#blog" 
              className="hover:text-brown focus:outline-none focus:ring-2 focus:ring-brown" 
              onClick={closeMenu}
            >
              Blog
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className="hover:text-brown focus:outline-none focus:ring-2 focus:ring-brown" 
              onClick={closeMenu}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
