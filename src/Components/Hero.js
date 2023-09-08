// Hero.js
import React from 'react';

const Hero = () => {
  return (
    <section className="bg-pink-100 py-16 relative">
      <div className="container mx-auto text-center relative z-10">
        <h1 className="text-4xl font-bold mb-4">Welcome to Sakura Science Club India</h1>
        <p className="text-xl mb-8">
          Promoting Education Worldwide and Inspiring Study in Japan
        </p>
      </div>
      <div className="absolute top-1/2 left-1/2 ">
        <div className="w-96 h-48 bg-pink-400 rounded-xl absolute -left-12"></div>
        <div className="w-96 h-48 bg-pink-300 rounded-xl absolute -right-12 -top-6"></div>
      </div>
    </section>
  );
};

export default Hero;
