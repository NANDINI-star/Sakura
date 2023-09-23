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
    { label: 'How to Apply?' },
    { label: 'Alumni' },
    { label: 'Experiences' },
    { label: 'Login' },
  ];


  return (
    <header className='bg-white font-serif'>
      <nav className='flex items-center justify-between max-w-[1440px] gap-9 mx-auto mx-10'>
        <ul className='flex justify-between items-center gap-8 1xl:hidden py-4 '>
          <li className=''>
          <img src='assets/Sakura_Logo.png' />
          </li>
          <li>
            <img src='assets/Group.png'/>
          </li>
          <li >
            <img src='assets/logo_jst_en 2 (1).png' style={{maxHeight:'100%',maxWidth:'100%'}} className='h-[41px] w-[73px]'/>
          </li>
        </ul>
          <ul className='bg-white w-full py-4 mx-4 text-center flex justify-between gap-10 hidden 1xl:flex text-xl'>
            {navItems.map((item, index) => (
              <li key={index}>
                <button
                  className={`block py-2 cursor-pointer font-InriaSans text-[20px] leading-normal tracking-[0.42px] ${
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
