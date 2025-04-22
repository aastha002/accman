import React, { useEffect, useState } from "react";
import Card, { testimonials } from "./Card";

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleDotClick = (i) => {
    setIndex(i);
  };

  return (
    <div className="bg-[#ffecec] py-16 px-4 flex flex-col items-center">
      <span className="uppercase tracking-wide text-[#d33] font-semibold bg-[#edf1f5] px-3 py-1 rounded-full text-sm">
        Testimonials
      </span>
      <h1 className="text-4xl font-bold text-gray-800 mb-6">
        What Our Alumni Say
      </h1>
      <div className="h-1 w-16 bg-[#f87171] rounded mb-8"></div>

      <div className="w-[90vw] md:w-[700px] bg-white rounded-lg shadow-lg p-8 transition-all duration-700">
        <Card index={index} />
      </div>

      <div className="flex mt-8 gap-3">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => handleDotClick(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === i ? "bg-[#f87171]" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
