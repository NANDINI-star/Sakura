// FAQ.js
import React from 'react';

const FAQ = () => {
  return (
    <section id="faq" className="bg-pink-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">FAQ Section</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border rounded shadow bg-white">
            <h3 className="text-xl font-semibold mb-4">Question 1</h3>
            <p>Answer to the first frequently asked question goes here.</p>
          </div>
          <div className="p-4 border rounded shadow bg-white">
            <h3 className="text-xl font-semibold mb-4">Question 2</h3>
            <p>Answer to the second frequently asked question goes here.</p>
          </div>
          {/* <!-- Add more FAQ items as needed --> */}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
