import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'; // Import only required icons

const Footer = () => {
  return (
    <footer className="bg-dark_green py-8">
      <div className="container mx-auto text-center text-light">
        <p>&copy; 2024 DecoHome. All rights reserved.</p>
        <div className="flex justify-center space-x-6 mt-4">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light hover:text-brown transition-colors duration-300"
            aria-label="Visit DecoHome's Facebook page"
          >
            <FaFacebookF aria-hidden="true" /> {/* Facebook icon */}
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light hover:text-brown transition-colors duration-300"
            aria-label="Visit DecoHome's Twitter page"
          >
            <FaTwitter aria-hidden="true" /> {/* Twitter icon */}
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light hover:text-brown transition-colors duration-300"
            aria-label="Visit DecoHome's LinkedIn page"
          >
            <FaLinkedinIn aria-hidden="true" /> {/* LinkedIn icon */}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
