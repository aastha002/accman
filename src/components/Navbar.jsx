import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-md">
      <div className="flex items-center gap-3">
        <img
          src="../assets/Accman_logo.png"
          alt="Accman Logo"
          className="w-10 h-10"
        />
        <h1 className="text-3xl font-bold text-[#7b1314]">ACCMAN</h1>
      </div>
      <ul className="flex space-x-8 font-medium text-gray-700">
        <li className="hover:text-accmanRed cursor-pointer">Home</li>
        <li className="hover:text-accmanRed cursor-pointer">Our Schools</li>
        <li className="hover:text-accmanRed cursor-pointer">About Us</li>
        <li className="hover:text-accmanRed cursor-pointer">Testimonials</li>
        <li className="hover:text-accmanRed cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
