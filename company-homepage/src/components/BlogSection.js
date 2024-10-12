import React, { useEffect, useState } from 'react';

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedBlog, setExpandedBlog] = useState(null); // State to track expanded blog for both desktop and mobile
  const [currentIndex, setCurrentIndex] = useState(0); // Track current blog index for mobile view

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('https://api.slingacademy.com/v1/sample-data/blog-posts?offset=5&limit=3');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setBlogs(data.blogs);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Function to move to next blog (for mobile carousel)
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % blogs.length);
  };

  // Function to move to previous blog (for mobile carousel)
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + blogs.length) % blogs.length);
  };

  // Function to toggle blog expansion
  const toggleExpand = (index) => {
    setExpandedBlog(expandedBlog === index ? null : index); // Toggle the blog's expanded state
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12"></div>
        <style jsx>{`
          .loader {
            border-top-color: #3498db;
            animation: spin 1s infinite linear;
          }
          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}</style>
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500 text-center">Error: {error}</div>;
  }

  return (
    <div id="blog" className="py-16 bg-white">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl font-bold mb-10">Latest Blogs</h2>

        {/* Full-screen blog modal for both mobile and desktop */}
        {expandedBlog !== null ? (
          <div className="fixed inset-0 bg-white z-50 p-8 overflow-y-auto">
            <button
              onClick={() => setExpandedBlog(null)}
              className="absolute top-4 right-4 text-lg bg-gray-100 rounded-full p-2 hover:bg-gray-200"
              aria-label="Close Blog"
            >
              Close
            </button>
            <div className="flex justify-center items-center">
              <div className="w-full max-w-4xl">
                <img
                  src={blogs[expandedBlog]?.photo_url}
                  alt={blogs[expandedBlog]?.title}
                  className="w-full h-96 object-cover rounded-md mb-4"
                />
                <h3 className="text-3xl font-bold mb-4">{blogs[expandedBlog]?.title}</h3>
                <p className="text-lg text-gray-700 text-justify">{blogs[expandedBlog]?.content_text}</p>
              </div>
            </div>
          </div>
        ) : (
          <>
            {/* Grid for larger screens */}
            <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
              {blogs.length > 0 ? (
                blogs.map((blog, index) => (
                  <div
                    key={index}
                    className="bg-gray-100 p-6 sm:p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition-transform duration-300 transform hover:scale-105 h-auto"
                  >
                    {blog.photo_url ? (
                      <img
                        src={blog.photo_url}
                        alt={blog.title}
                        className="h-48 w-full object-cover rounded-md mb-4"
                      />
                    ) : (
                      <div className="h-48 bg-gray-200 flex items-center justify-center mb-4">
                        <span>No Image Available</span>
                      </div>
                    )}
                    <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                    <p className="text-gray-600 text-justify">{blog.content_text.substring(0, 100)}...</p>
                    <button
                      onClick={() => toggleExpand(index)}
                      className="text-brown mt-2 inline-block"
                    >
                      Read More
                    </button>
                  </div>
                ))
              ) : (
                <div>No blogs available.</div>
              )}
            </div>

            {/* Carousel for mobile screens */}
            <div className="md:hidden">
              {blogs.length > 0 && (
                <div className="bg-gray-100 p-4 rounded-lg shadow-md h-auto transition-transform duration-300">
                  <img
                    src={blogs[currentIndex]?.photo_url}
                    alt={blogs[currentIndex]?.title}
                    className="h-48 w-full object-cover rounded-md mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2">{blogs[currentIndex]?.title}</h3>
                  <p className="text-gray-600 text-justify">{blogs[currentIndex]?.content_text.substring(0, 100)}...</p>

                  {/* Read More button to expand content for mobile */}
                  <button
                    onClick={() => toggleExpand(currentIndex)}
                    className="text-brown mt-2 inline-block"
                    aria-label="Read More"
                  >
                    Read More
                  </button>
                </div>
              )}

              {/* Navigation controls for mobile */}
              <div className="flex justify-between items-center mt-4 px-4">
                <button
                  onClick={handlePrev}
                  className="px-4 py-2 bg-gray-300 rounded-full hover:bg-gray-400 focus:outline-none"
                  aria-label="Previous Blog"
                >
                  Prev
                </button>
                <div className="flex space-x-2">
                  {blogs.map((_, index) => (
                    <span
                      key={index}
                      className={`h-3 w-3 rounded-full ${index === currentIndex ? 'bg-brown' : 'bg-gray-400'}`}
                      aria-label={`Go to blog ${index + 1}`}
                    ></span>
                  ))}
                </div>
                <button
                  onClick={handleNext}
                  className="px-4 py-2 bg-gray-300 rounded-full hover:bg-gray-400 focus:outline-none"
                  aria-label="Next Blog"
                >
                  Next
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default BlogSection;
