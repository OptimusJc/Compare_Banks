import React from 'react';

function Hero2() {
  return (
    <div>
      <div className="flex m-12">
        <div className="bg-blue-100 w-1/2 border-4 border-black">
          <img src="" alt="Hero Image-2" />
        </div>
        <div className="px-8 w-1/2">
          <h1 className="font-bold text-5xl mx-8 pt-4">
            Simplify Your Bank Comparisons
          </h1>
          <h3 className="text-xl text-black/50 mx-8 py-4">
            Compare Banks empowers you to find the best banking options effortlessly
          </h3>
          <ul className="list-disc text-xl mx-8 pl-6">
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
      <div className= "flex m-12">
        <div className="w-1/2">
          <h1 className="font-bold text-5xl pt-4 mr-28">
            Simplify Your Banking Experience with Compare Banks
          </h1>
          <h3 className="text-xl text-black/50 py-4 me-28">
            Easily compare bank packages based on interest rates, monthly fees, and additional charges, empowering you to make informed decisions effortlessly.
          </h3>
          <ul className="list-disc text-xl pl-6">
            <li className="py-2">
              Select multiple banks and compare packages side-by-side
            </li>
            <li className="py-2">
              Filter comparisons by location and interest rates
            </li>
            <li className="py-2">
              Get clear visuals of monthly fees and charges
            </li>
            <li className="py-2">
              Make smarter banking choices with comprehensive insights
            </li>
          </ul>
          <button className="bg-blue-600 rounded px-4 py-2 text-white text-xl my-8">
            Start Comparing Packages!
          </button>
        </div>
        <div className="bg-blue-100 w-1/2 border-4 border-black">
          <img src="" alt="Hero Image-3" />
        </div>
      </div>
    
    </div>
  );
}

export default Hero2;