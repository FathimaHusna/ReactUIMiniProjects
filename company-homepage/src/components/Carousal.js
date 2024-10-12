import React, { useState, useEffect } from 'react';
import fur1 from '../Assets/Img/comfortable_sofa.jpg';
import fur2 from '../Assets/Img/modern_chair.jpg';
import fur3 from '../Assets/Img/stylishTable.jpg';
import fur4 from '../Assets/Img/elegant_cabinet.jpg';
import fur5 from '../Assets/Img/cozy_bed.jpg';

const Carousel = () => {
  const slides = [
    { img: fur1, content: 'Cozy Bed - $699' },
    { img: fur2, content: 'Modern Chair - $299' },
    { img: fur3, content: 'Stylish Table - $199' },
    { img: fur4, content: 'Elegant Cabinet - $899' },
    { img: fur5, content: 'Comfortable Sofa - $499' },
  ];
  
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const autoSlide = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(autoSlide); // Cleanup interval on unmount
  }, [slides.length]);

  // Handling touch events for mobile
  const handleTouchStart = (e) => {
    const touchStartX = e.touches[0].clientX;
    const handleTouchMove = (event) => {
      const touchEndX = event.touches[0].clientX;
      if (touchStartX - touchEndX > 50) {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      } else if (touchEndX - touchStartX > 50) {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
      }
      document.removeEventListener("touchmove", handleTouchMove);
    };
    document.addEventListener("touchmove", handleTouchMove);
  };

  return (
    <div
      className="relative w-full h-screen overflow-hidden"
      onTouchStart={handleTouchStart}
    >
      {/* Carousel wrapper */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 duration-700 ease-in-out transition-all transform ${
            index === currentSlide ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          }`}
        >
          <img
            src={slide.img}
            className="w-full h-full object-cover"
            alt={`Slide ${index + 1}`}
            loading="lazy"  // Lazy loading for better performance
          />
          <div className="absolute bottom-0 left-0 w-full p-4 bg-black bg-opacity-50 text-white text-lg">
            {slide.content}
          </div>
        </div>
      ))}
      
      {/* Dot Indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 mx-2 rounded-full cursor-pointer ${index === currentSlide ? 'bg-white' : 'bg-gray-500'}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}  // Accessibility for dots
          ></div>
        ))}
      </div>
      
      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-1/2 left-4 z-30 flex items-center justify-center h-10 w-10 rounded-full bg-white/30 group-hover:bg-white/50"
        onClick={() => setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length)}
        aria-label="Previous Slide"  // Accessibility for prev button
      >
        <svg className="w-4 h-4 text-black" aria-hidden="true" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
        </svg>
      </button>
      <button
        type="button"
        className="absolute top-1/2 right-4 z-30 flex items-center justify-center h-10 w-10 rounded-full bg-white/30 group-hover:bg-white/50"
        onClick={() => setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)}
        aria-label="Next Slide"  // Accessibility for next button
      >
        <svg className="w-4 h-4 text-black" aria-hidden="true" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
        </svg>
      </button>
    </div>
  );
};

export default Carousel
