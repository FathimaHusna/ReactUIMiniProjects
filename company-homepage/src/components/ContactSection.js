import React, { useState } from 'react';

const ContactSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [emailError, setEmailError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setEmailError('Please enter a valid email address.');
      return;
    } else {
      setEmailError('');
    }

    console.log({ name, email, message });
    setSubmitted(true);
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setMessage('');
  };

  const handleReset = () => {
    setSubmitted(false);
    resetForm();
  };

  return (
    <section id="contact" className="bg-light py-8 mt-12 relative z-10">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        {submitted ? (
          <div>
            <p className="text-green-500">Thank you for contacting us!</p>
            <button
              onClick={handleReset}
              className="bg-brown text-white px-4 py-2 rounded mt-4 hover:bg-brown focus:outline-none focus:ring-2 focus:ring-brown"
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <div className="w-full max-w-md mb-4">
              <label htmlFor="name" className="block mb-1 text-left">
                Your Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="p-3 rounded border w-full focus:outline-none focus:ring-2 focus:ring-brown"
                aria-required="true"
                aria-label="Your Name"
                required
              />
            </div>

            <div className="w-full max-w-md mb-4">
              <label htmlFor="email" className="block mb-1 text-left">
                Your Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-3 rounded border w-full focus:outline-none focus:ring-2 focus:ring-brown"
                aria-required="true"
                aria-label="Your Email"
                required
              />
              {emailError && (
                <p
                  className="text-red-500 text-sm mt-1"
                  aria-live="assertive"
                  role="alert"
                >
                  {emailError}
                </p>
              )}
            </div>

            <div className="w-full max-w-md mb-4">
              <label htmlFor="message" className="block mb-1 text-left">
                Your Message
              </label>
              <textarea
                id="message"
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="p-3 rounded border w-full h-32 focus:outline-none focus:ring-2 focus:ring-brown"
                aria-required="true"
                aria-label="Your Message"
                required
              />
            </div>

            <button
              type="submit"
              disabled={submitted}
              className={`bg-brown text-light px-4 py-2 rounded hover:bg-dark_brown focus:outline-none focus:ring-2 focus:ring-brown ${
                submitted ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              aria-disabled={submitted}
            >
              Send
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactSection;
