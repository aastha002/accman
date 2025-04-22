import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaAngleRight,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#eef3f8] text-[#2e2e2e]">
      <div className="max-w-screen-xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
        <div className="max-w-xs">
          <div className="flex items-center mb-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/5/56/AICTE_Logo.png"
              alt="Logo"
              className="h-14 mr-3"
            />
            <h2 className="text-3xl text-[#7a1c27] font-semibold">ACCMAN</h2>
          </div>
          <p className="text-sm text-[#555] leading-relaxed">
            Transforming education through excellence, innovation, and a global
            perspective. Our institutions prepare students for meaningful
            careers and leadership roles.
          </p>
          <div className="flex mt-6 space-x-4">
            {[FaLinkedinIn, FaTwitter, FaFacebookF, FaInstagram].map(
              (Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="group bg-white text-[#d33] rounded-full w-10 h-10 flex items-center justify-center shadow transition-all duration-300 hover:scale-110"
                >
                  <div
                    className={`w-full h-full rounded-full flex items-center justify-center transition-all duration-300 ${
                      Icon === FaInstagram
                        ? "bg-white group-hover:bg-gradient-to-r group-hover:from-[#c13584] group-hover:to-[#405de6] text-[#d33] group-hover:text-white"
                        : "group-hover:bg-gradient-to-r group-hover:from-[#c13584] group-hover:to-[#405de6] group-hover:text-white"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                </a>
              )
            )}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
          <div className="w-8 h-1 bg-[#d33] mb-4"></div>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center">
              <FaAngleRight className="text-[#d33] mr-2" />
              Home
            </li>
            <li className="flex items-center">
              <FaAngleRight className="text-[#d33] mr-2" />
              Our Schools
            </li>
            <li className="flex items-center">
              <FaAngleRight className="text-[#d33] mr-2" />
              About Us
            </li>
            <li className="flex items-center">
              <FaAngleRight className="text-[#d33] mr-2" />
              Testimonials
            </li>
            <li className="flex items-center">
              <FaAngleRight className="text-[#d33] mr-2" />
              Contact
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Our Schools</h3>
          <div className="w-8 h-1 bg-[#d33] mb-4"></div>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center">
              <FaAngleRight className="text-[#d33] mr-2" />
              Business School
            </li>
            <li className="flex items-center">
              <FaAngleRight className="text-[#d33] mr-2" />
              Institute of Management
            </li>
            <li className="flex items-center">
              <FaAngleRight className="text-[#d33] mr-2" />
              Admissions
            </li>
            <li className="flex items-center">
              <FaAngleRight className="text-[#d33] mr-2" />
              Campus Tours
            </li>
            <li className="flex items-center">
              <FaAngleRight className="text-[#d33] mr-2" />
              Student Resources
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Contact Info</h3>
          <div className="w-8 h-1 bg-[#d33] mb-4"></div>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center">
              <FaPhone className="text-[#d33] mr-2" />
              0120-2323800
            </li>
            <li className="flex items-center">
              <FaEnvelope className="text-[#d33] mr-2" />
              info@accman.in
            </li>
            <li className="flex items-start">
              <FaMapMarkerAlt className="text-[#d33] mr-2 mt-1" />
              46 A/2 Knowledge Park III
              <br />
              Greater Noida - 201308
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-[#c9ced5] text-center text-sm py-4 text-[#444]">
        © 2025 Accman Group. All rights reserved. &nbsp;
        <a href="#" className="mx-2 hover:underline">
          Privacy Policy
        </a>{" "}
        |
        <a href="#" className="mx-2 hover:underline">
          Terms of Service
        </a>{" "}
        |
        <a href="#" className="mx-2 hover:underline">
          Cookie Policy
        </a>
      </div>
    </footer>
  );
}
