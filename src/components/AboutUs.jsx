import React from "react";
import { FaAward, FaLightbulb, FaUsers, FaGlobe } from "react-icons/fa";

const coreValues = [
  {
    icon: <FaAward className="text-[#d33] text-2xl" />,
    title: "Excellence",
    desc: "Committed to the highest standards of educational quality and student outcomes.",
  },
  {
    icon: <FaLightbulb className="text-[#d33] text-2xl" />,
    title: "Innovation",
    desc: "Pioneering new approaches to learning that prepare students for real-world challenges.",
  },
  {
    icon: <FaUsers className="text-[#d33] text-2xl" />,
    title: "Community",
    desc: "Building strong networks of students, alumni, and industry partners.",
  },
  {
    icon: <FaGlobe className="text-[#d33] text-2xl" />,
    title: "Global Perspective",
    desc: "Providing education with an international outlook to prepare global citizens.",
  },
];

export default function AboutUs() {
  return (
    <section className="bg-[#f9fbfd] py-16 px-6 md:px-20">
      <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* Left Content */}
        <div>
          <span className="uppercase tracking-wide text-[#d33] font-semibold bg-[#edf1f5] px-3 py-1 rounded-full text-sm">
            About Us
          </span>
          <h2 className="text-4xl font-semibold mt-4 mb-6">ACCMAN Group</h2>
          <p className="text-[#1f2937] font-medium text-lg leading-relaxed mb-4">
            Accman Group is dedicated to providing exceptional educational
            experiences through our specialized schools. With a commitment to
            excellence, innovation, and student success, we're shaping the
            future of education across business and management domains.
          </p>
          <p className="text-[#4b5563] text-base leading-relaxed">
            Our integrated approach combines academic rigor with practical
            experience, connecting students to industry partners and real-world
            challenges. We believe in nurturing not just knowledge, but also
            creativity, critical thinking, and leadership skills essential for
            success in today's complex global landscape.
          </p>
        </div>

        {/* Core Values */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 flex items-center">
            <span className="border-l-4 border-[#d33] mr-2 pl-2">
              Our Core Values
            </span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {coreValues.map((val, idx) => (
              <div
                key={idx}
                className="bg-white shadow-md rounded-xl p-5 hover:shadow-lg transition"
              >
                <div className="bg-[#edf6f9] w-10 h-10 flex items-center justify-center rounded-md mb-3">
                  {val.icon}
                </div>
                <h4 className="font-semibold text-[#1f2937] mb-1">
                  {val.title}
                </h4>
                <p className="text-sm text-[#4b5563]">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
