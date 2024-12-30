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
    <div className="container mx-auto py-12">
      <div className="text-center">
        <h1 className="font-bold text-6xl py-2">
          How Compare Banks Works
        </h1>
        <p className="py-4 text-xl text-black/50">
          Simplify your bank package comparisons effortlessly with Compare Banks
        </p>
      </div>
      <div className="flex text-center">
        <div className="rounded-3xl shadow-2xl mx-4 w-1/4">
          <div className="bg-blue-300 rounded-full m-6 text-5xl">1</div>
          <h1 className="font-semibold text-2xl px-16">
            Select Your Banks
          </h1>
          <p className="text-xl text-black/50 m-8">
            Choose multiple banks to compare their packages side-by-side with ease.
          </p>
        </div>
        <div className="rounded-3xl shadow-2xl mx-4 w-1/4">
          <div className="bg-blue-300 rounded-full m-6 text-5xl">2</div>
          <h1 className="font-semibold text-2xl px-16">
            Compare Features
          </h1>
          <p className="text-xl text-black/50 m-8">
            Evaluate monthly fees, interest rates, and additional charges with clear comparisons.
          </p>
        </div>
        <div className="rounded-3xl shadow-2xl mx-4 w-1/4">
          <div className="bg-blue-300 rounded-full m-6 text-5xl">3</div>
          <h1 className="font-semibold text-2xl px-16">
            Filter Your Options
          </h1>
          <p className="text-xl text-black/50 m-8">
            Utilize our filters to find banks based on location, rates, and more tailored criteria.
          </p>
        </div>
        <div className="rounded-3xl shadow-2xl mx-4 w-1/4">
          <div className="bg-blue-300 rounded-full m-6 text-5xl">4</div>
          <h1 className="font-semibold text-2xl px-16">
            Make Informed Decisions
          </h1>
          <p className="text-xl text-black/50 m-8">
            Empower yourself with essential information to choose the best bank package for your needs.
          </p>
        </div>
      </div>
    </div>
    <div className="flex p-12 m-12">
      <div className="bg-blue-100 w-1/2 border-4 border-black">
        <img src="" alt="Hero Image-2" />
      </div>
      <div className="w-1/2">
        <h1 className="font-bold text-5xl mx-12 pt-4">
          Simplify Your Bank Comparisons
        </h1>
        <h3 className="text-xl text-black/50 mx-12 py-4">
          Compare Banks empowers you to find the best banking options effortlessly
        </h3>
        <ul className="list-disc text-xl mx-12 pl-6">
          <li className="py-2">
          Select multiple banks and compare their packages side-by-side
          </li>
          <li className="py-2">
          Filter comparisons by location, interest rates, and other criteria
          </li>
          <li className="py-2">
          View clear comparisons of monthly fees and additional charges
          </li>
          <li className="py-2">
          Make informed decisions with our detailed insights and comparisons
          </li>
        </ul>
        <button className="bg-blue-600 rounded px-4 py-2 text-white text-xl my-8 mx-12">
          Start Your Free Comparison!
        </button>
      </div>
    </div>
    </div>
  );
}

export default Hero;
