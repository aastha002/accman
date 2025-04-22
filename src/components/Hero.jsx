import React from "react";
import backgroundImage from "../assets/accmanBg.jpeg";

const Hero = () => {
  return (
    <section
      className="h-screen bg-cover bg-center relative text-white"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Welcome to Accman
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mb-8">
          Discover our prestigious business and management institutions,
          designed to prepare you for success in a rapidly evolving world.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mb-12">
          <button className="bg-white text-black px-6 py-3 rounded font-semibold shadow hover:bg-gray-200 transition">
            Explore Our Schools →
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded font-semibold transition">
            Get in Touch
          </button>
        </div>

        {/* Badges */}
        <div className="flex gap-6 mt-12 absolute bottom-12 right-12">
          <div className="flex items-center gap-2 bg-white bg-opacity-10 backdrop-blur-md px-5 py-3 rounded-full border border-white text-white shadow-lg">
            <span className="bg-red-600 text-white rounded-full p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </span>
            <span className="text-sm font-semibold">Innovation Focused</span>
          </div>

          <div className="flex items-center gap-2 bg-white bg-opacity-10 backdrop-blur-md px-5 py-3 rounded-full border border-white text-white shadow-lg">
            <span className="bg-red-600 text-white rounded-full p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 17l-5-5m0 0l5-5m-5 5h12"
                />
              </svg>
            </span>
            <span className="text-sm font-semibold">Industry Leaders</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
