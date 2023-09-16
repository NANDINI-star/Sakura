// Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-[#FFFFFF] p-2">
      <div className="container mx-auto p-4 h-[100px] ">
        <div className="flex justify-between items-center ">
          <div className="text-white text-2xl font-bold">
            <img src='/assets/Group.png'>
            </img>
          </div>
          <div className="space-x-10">
            <a href="#higher-studies">About the Program</a>
            <a href="#faq">Events</a>
            <a href="#ssc-overview">SSC Overview</a>
            <a href="#alumni-activities">Experiences</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
