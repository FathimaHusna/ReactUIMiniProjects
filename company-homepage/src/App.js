import React from 'react';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Services from './components/Services';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';
import ContactSection from './components/ContactSection';
const App = () => {
  return (
    <div>
      <Navbar />
      <Landing />
      <Services />
      <BlogSection />
      <ContactSection/>
      
      <Footer />
    </div>
  );
}

export default App;
