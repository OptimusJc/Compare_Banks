import React, { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='bg-blue-200'>
      <nav className='container mx-auto flex items-center justify-between p-4'>
        <p className='text-xl font-bold md:text-2xl'>
          <span className='text-blue-500'>Compare</span>Banks
        </p>
        <button
          className='text-3xl focus:outline-none md:hidden'
          onClick={toggleMenu}
        >
          {isMenuOpen ? '✖' : '☰'}
        </button>
        <ul
          className={`absolute left-0 top-16 w-full bg-blue-200 md:static md:flex md:w-auto md:space-x-6 md:bg-transparent ${isMenuOpen ? 'block' : 'hidden'}`}
        >
          <li className='text-center'>
            <a
              href='/'
              className='block px-4 py-2 hover:bg-gray-700 md:hover:bg-transparent'
            >
              Home
            </a>
          </li>
          <li className='text-center'>
            <a
              href='/compare'
              className='block px-4 py-2 hover:bg-gray-700 md:hover:bg-transparent'
            >
              Compare
            </a>
          </li>
          <li className='text-center'>
            <a
              href='/about'
              className='block px-4 py-2 hover:bg-gray-700 md:hover:bg-transparent'
            >
              About Us
            </a>
          </li>
          <li className='text-center'>
            <a
              href='/login'
              className='block bg-blue-600 px-4 py-2 text-white hover:bg-blue-500 md:hover:bg-transparent'
            >
              Login
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
