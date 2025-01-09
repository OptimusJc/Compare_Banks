import React from 'react';
import { assets } from "../assets/assets";

function Hero() {
  return (
    <div>
      <div className='bg-gradient-to-b from-white to-blue-200'>
        <div className='container mx-auto flex flex-col space-y-4 py-8 md:flex-row md:items-center md:justify-center md:px-2 lg:py-32'>
          <div className='w-full text-balance p-2 md:w-1/2'>
            <h1 className='text-4xl font-bold lg:text-6xl'>
              Compare Banks: Simplifying Bank Comparisons
            </h1>
            <p className='my-4 md:text-base lg:text-lg'>
              Easily compare bank packages side-by-side and make informed
              banking decisions with Compare Banks.
            </p>
            <a
              href='/compare'
              className='my-4 inline-block rounded bg-blue-600 px-4 py-2 text-sm text-white lg:px-5 lg:py-4 lg:text-base'
            >
              Get Started
            </a>
          </div>
          <div className='flex h-full w-full items-center justify-center rounded-r-xl overflow-hidden md:h-60 md:w-1/2 lg:h-96 xl:w-[600px]'>
            <img
              src={ assets.heroImage1 }
              alt='hero image'
              className='w-full object-cover'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
