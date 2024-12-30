import React from 'react';

export default function Footer() {
  return (
    <footer className='bg-blue-200 py-8'>
      <div className='container mx-auto px-4'>
        <div>
          <h3 className='mb-4 text-xl font-bold md:text-center md:text-2xl'>
            <span className='text-blue-600'>Compare</span>Banks
          </h3>
          <ul className='flex flex-col space-y-4 md:flex-row md:items-center md:justify-center md:space-x-9 md:space-y-0'>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='/compare'>Compare</a>
            </li>
            <li>
              <a href='/about'>About</a>
            </li>
            <li>
              <a href='/login'>Login</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
