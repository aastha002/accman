import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

import "./App.css";
import "tailwindcss/tailwind.css";
import Institutions from "./components/Institutions";
import AboutUs from "./components/AboutUs";
import Testimonials from "./components/Testimonials";
import GetInTouch from "./components/GetInTouch";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-[#f9fbfd] text-[#1f2937] font-sans">
      <Navbar />
      <Hero />
      <Institutions />
      <AboutUs />
      <Testimonials />
      <GetInTouch />
      <Footer />
    </div>
  );
}

export default App;
