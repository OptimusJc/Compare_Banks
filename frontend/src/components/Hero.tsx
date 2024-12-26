import React from "react";

function Hero() {
  return (
    <div className="bg-gradient-to-b from-white to-blue-200">
      <div className="container mx-auto flex justify-center items-center py-32">
        <div className="w-1/2 text-balance">
          <h1 className="font-bold text-5xl">
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
  );
}

export default Hero;
