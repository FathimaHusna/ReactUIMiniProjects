import React from 'react';
import sofaIcon from '../Assets/Img/sofa.png'; // Example icon for Service One
import tableIcon from '../Assets/Img/table.png'; // Example icon for Service Two
import chairIcon from '../Assets/Img/chair.png'; // Example icon for Service Three

const Services = () => {
  const services = [
    { title: 'Furniture Design', description: 'Custom furniture design tailored to your needs.', icon: sofaIcon },
    { title: 'Interior Decoration', description: 'Complete interior decoration solutions for your spaces.', icon: tableIcon },
    { title: 'Custom Carpentry', description: 'High-quality custom carpentry services for homes and offices.', icon: chairIcon }
  ];

  return (
    <section id="services" className="py-16 bg-light_green sm:py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10 text-dark_green sm:text-2xl">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-light p-6 rounded-lg shadow-md hover:shadow-lg transition-transform duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dark_green"
              tabIndex="0" // Focusable for keyboard navigation
              aria-label={`Service: ${service.title}`} // Accessibility improvement
            >
              <img 
                src={service.icon} 
                alt={`${service.title} icon`} 
                className="mx-auto mb-4 h-16 w-16" 
                aria-hidden="true" // Icon as decorative element, use aria-hidden
              />
              <h3 className="text-xl font-semibold mb-4 text-brown sm:text-lg">{service.title}</h3>
              <p className="text-dark_green sm:text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
