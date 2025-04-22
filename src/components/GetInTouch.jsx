import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const GetInTouch = () => {
  return (
    <section className="bg-[#f9fafb] py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <span className="uppercase tracking-wide text-[#d33] font-semibold bg-[#edf1f5] px-3 py-1 rounded-full text-sm">
          Contact Us
        </span>
        <h2 className="text-4xl font-bold text-gray-800 mt-4">Get In Touch</h2>
        <div className="w-16 h-1 bg-[#ef4444] mx-auto mt-3 mb-6 rounded"></div>
        <p className="text-gray-500 text-lg max-w-3xl mx-auto">
          Have questions about our educational programs? Want to learn more
          about admission?
          <br />
          We're here to help you navigate your educational journey.
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-md text-left">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-[#ecfdf5] p-3 rounded-full">
                <Phone className="text-[#ef4444]" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
            </div>
            <p className="text-gray-600">0120–2323800</p>
            <p className="text-gray-600">+91–9873076521/22</p>
            <p className="text-gray-500 text-sm mt-1">
              Mon–Fri, 9:00 AM – 5:00 PM
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md text-left">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-[#ecfdf5] p-3 rounded-full">
                <Mail className="text-[#ef4444]" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Email</h3>
            </div>
            <p className="text-gray-600">info@accman.in</p>
            <p className="text-gray-600">admission@accman.in</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md text-left">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-[#ecfdf5] p-3 rounded-full">
                <MapPin className="text-[#ef4444]" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Address</h3>
            </div>
            <p className="text-gray-600">46 A/2 Knowledge Park III</p>
            <p className="text-gray-600">Greater Noida – 201308</p>
            <p className="text-gray-600">Uttar Pradesh, India</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
