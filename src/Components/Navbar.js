import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [selectedNavItem, setSelectedNavItem] = useState(null); // Initialize with no item selected

  const iconName = toggle ? faTimes : faBars;

  const handleNavItemSelect = (index) => {
    setSelectedNavItem(index);
    // setToggle(false); // Close the mobile menu when an item is selected
  };

  // Define your navigation items as an array of objects with labels
  const navItems = [
    { label: 'About the Program' },
    { label: 'Events' },
    { label: 'SSC Overview' },
    { label: 'Experiences' },
  ];

  return (
    <header className='bg-white font-serif'>
      <nav className='flex justify-between items-center w-[92%] mx-auto py-2'>
        <div>
          <img src='/assets/Group.png' className='h-full min-w-[201px]' alt="Logo" />
        </div>
        <div>
          <ul className='bg-white w-full py-4 px-2 text-center flex gap-10 hidden 1xl:flex text-xl'>
            {navItems.map((item, index) => (
              <li key={index}>
                <button
                  className={`block py-2 cursor-pointer ${
                    selectedNavItem === index ? 'text-[#BC005A]' : 'hover:text-gray-500'
                  }`}
                  style = {{ fontFamily: 'InriaSans' }}
                  onClick={() => handleNavItemSelect(index)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <FontAwesomeIcon
          onClick={() => setToggle(!toggle)}
          icon={iconName}
          className='text-3xl cursor-pointer 1xl:hidden'
          style={{ color: '#000205' }}
        />
      </nav>
      {/* Nav Items */}
      <div className={`1xl:hidden ${toggle ? 'block' : 'hidden'}`}>
        <ul className='bg-white w-full py-4 px-2 text-center'>
          {/* Mobile navigation items */}
          {navItems.map((item, index) => (
            <li className='hover:bg-gray-200' key={index} >
              <h2
                className={`block py-2 cursor-pointer ${
                  selectedNavItem === index ? 'text-[#BC005A]' : 'hover:text-gray-500'
                }`}
                onClick={() => handleNavItemSelect(index)}
              >
                {item.label}
              </h2>
            </li>
          ))}
          {/* Additional mobile navigation items */}
          {/* ... */}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
