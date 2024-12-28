import React from "react";

function Hero() {
  return (
    <div>
    <div className="bg-gradient-to-b from-white to-blue-200">
      <div className="container mx-auto flex justify-center items-center py-32">
        <div className="w-1/2 text-balance">
          <h1 className="font-bold text-6xl">
            Compare Banks: Simplifying Bank Comparisons
          </h1>
          <p className="text-lg my-4">
            Easily compare bank packages side-by-side and make informed banking
            decisions with Compare Banks.
          </p>
          <button className="bg-blue-600 rounded px-4 py-2 text-white my-4">
            Get Started
          </button>
        </div>
        <div className="w-1/2 h-80 overflow-hidden">
          <img
            src="https://placehold.co/900x400"
            alt="hero image"
            className="object-cover"
          />
        </div>
      </div>
    </div>
    <div className="container mx-auto py-12 grid">
      <div className="text-center">
        <h1 className="font-bold text-6xl flex py-2 justify-center items-center">
          How Compare Banks Works</h1>
        <p className="py-4 text-xl text-black/50">
          Simplify your bank package comparisons effortlessly with Compare Banks</p>
      </div>
      <div className="flex text-center">
        <div className="rounded-xl shadow-2xl mx-4">
          <div className="bg-blue-600 rounded-full m-6 text-5xl">
            1</div>
          <h1 className="font-semibold text-2xl px-16">Select Your Banks</h1>
          <p className="text-xl text-black/50 m-8">Choose multiple banks to compare their packages side-by-side with ease.</p>
        </div>
        <div className="rounded-xl shadow-2xl mx-4">
          <div className="bg-blue-600 rounded-full m-6 text-5xl">2</div>
          <h1 className="font-semibold text-2xl px-16">Compare Features</h1>
          <p className="text-xl text-black/50 m-8">Evaluate monthly fees, interest rates, and additional charges with clear comparisons.</p>
        </div>
        <div className="rounded-xl shadow-2xl mx-4">
          <div className="bg-blue-600 rounded-full m-6 text-5xl">3</div>
          <h1 className="font-semibold text-2xl px-16">Filter Your Options</h1>
          <p className="text-xl text-black/50 m-8">Utilize our filters to find banks based on location, rates, and more tailored criteria.</p>
        </div>
        <div className="rounded-xl shadow-2xl mx-4">
          <div className="bg-blue-600 rounded-full m-6 text-5xl">4</div>
          <h1 className="font-semibold text-2xl px-16">Make Informed Decisions</h1>
          <p className="text-xl text-black/50 m-8">Empower yourself with essential information to choose the best bank package for your needs.</p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Hero;
