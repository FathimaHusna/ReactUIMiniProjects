import React, { useState } from 'react';
import Carousel from './Carousal'; // Ensure correct file path

const Landing = () => {
  const [showAbout, setShowAbout] = useState(false); // State to manage visibility of About section

  // Toggle About section visibility
  const toggleAboutSection = () => {
    setShowAbout((prev) => !prev);
  };

  return (
    <div id="home" className="relative w-full h-screen overflow-hidden">
      {/* Carousel for the landing section */}
      <Carousel />
      
      {/* Welcome message with toggle for About Us */}
      <div className="absolute inset-0 flex justify-center items-center bg-dark_green bg-opacity-50">
        <div className="text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-light text-3xl md:text-5xl font-bold mb-4">Welcome to Our Company</h1>
          <p className="text-light_green text-lg md:text-xl mb-6">We deliver exceptional services.</p>
          
          {/* Sticky About Us button */}
          <button
            onClick={toggleAboutSection}
            className={`bg-brown text-light px-6 py-3 rounded-lg hover:bg-green transition duration-300 transform hover:scale-105 mb-8 focus:outline-none focus:ring-2 focus:ring-light focus:ring-opacity-50 ${
              showAbout ? 'fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50' : ''
            }`}
            aria-expanded={showAbout}
            aria-controls="about-section"
            aria-label={showAbout ? 'Hide About Us' : 'Show About Us'}
          >
            {showAbout ? 'Hide About Us' : 'About Us'}
          </button>
        </div>
      </div>

      {/* About Us Section */}
      <section
        id="about-section"
        className={`absolute inset-x-0 bottom-0 bg-light py-8 transition-all duration-700 ease-in-out transform ${
          showAbout ? 'opacity-100 translate-y-0 scale-100 max-h-screen' : 'opacity-0 translate-y-4 scale-95 max-h-0 overflow-hidden'
        }`}
        aria-hidden={!showAbout}
      >
        <div className="container mx-auto text-center px-4">
          <h2 className="text-2xl font-bold mb-4">About Us</h2>
          <p className="text-lg mb-6">
            Welcome to our company! We specialize in delivering exceptional services tailored to meet our customers' needs. Our team is dedicated to providing top-notch quality and outstanding customer service.
          </p>
          <p className="text-lg mb-6">
            With years of experience in the industry, we pride ourselves on our expertise and commitment to excellence. We believe in building lasting relationships with our clients and strive to exceed their expectations.
          </p>
          <p className="text-lg mb-6">
            Thank you for choosing us as your trusted partner. We look forward to working with you!
          </p>
        </div>
      </section>
    </div>
  );
};

export default Landing;
