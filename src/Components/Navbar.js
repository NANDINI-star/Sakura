// Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-pink-200">
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center">
          <div className="text-white text-2xl font-bold">Sakura Science</div>
          <div className="space-x-4">
            <a href="#higher-studies">Higher Studies in Japan</a>
            <a href="#faq">FAQ Section</a>
            <a href="#ssc-overview">SSC Overview</a>
            <a href="#alumni-activities">Alumni Activities</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
