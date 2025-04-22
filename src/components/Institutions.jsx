import React from "react";
import InstitutionCard from "./InstitutionCard";

const Institutions = () => {
  return (
    <section className="bg-[#f0f7fd] py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <span className="uppercase tracking-wide text-[#d33] font-semibold bg-[#edf1f5] px-3 py-1 rounded-full text-sm">
          Our Institutions
        </span>
        <h2 className="text-4xl font-bold mb-4">
          World-Class Educational Experiences
        </h2>
        <p className="text-gray-700 mb-10 max-w-2xl mx-auto">
          Explore our specialized schools offering premier education in business
          and management fields, each designed to prepare students for
          exceptional career opportunities.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          <InstitutionCard
            title="ACCMAN Business School"
            description="Premier business education preparing tomorrow's leaders"
            courses="Courses: MBA, BBA, BCA"
            moreText="Cutting-edge curriculum, industry connections, and hands-on experience in global business practices."
            image="/path-to-business-logo.png"
            link="https://accmanbusiness.ac.in"
          />

          <InstitutionCard
            title="ACCMAN Institute of Management"
            description="Advanced management education focused on practical skills"
            courses="Courses: PGDM Program"
            moreText="Focus on experiential learning, innovation, and collaboration with industry leaders."
            image="/path-to-management-logo.png"
            link="https://accmaninstitute.ac.in"
          />
        </div>
      </div>
    </section>
  );
};

export default Institutions;
