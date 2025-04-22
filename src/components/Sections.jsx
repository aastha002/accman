import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Sections() {
  try {
    return (
      <div className="bg-white text-[#1C1C1C] font-sans">
        {/* Testimonial Section */}
        <section className="py-20 px-6 lg:px-24 bg-[#F9FAFB]">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Testimonials</h2>
            <p className="text-gray-600 mb-12 text-lg">
              Here’s what our clients say about us.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white shadow-lg rounded-2xl p-6 text-left"
                >
                  <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer posuere erat a ante.”
                  </p>
                  <div className="font-semibold text-[#1C1C1C]">Jane Smith</div>
                  <div className="text-sm text-gray-500">
                    Marketing Director
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* Get In Touch Section */}
        <section className="py-20 px-6 lg:px-24 bg-[#1C1C1C] text-white">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <h2 className="text-3xl font-bold mb-6">Get in touch</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="text-yellow-400" size={20} />
                  <span>123 Main Street, City, Country</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-yellow-400" size={20} />
                  <span>+1 234 567 890</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="text-yellow-400" size={20} />
                  <span>hello@example.com</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex-1 w-full"
            >
              <div className="bg-white p-8 rounded-2xl shadow-md text-black space-y-4">
                <textarea
                  placeholder="Message"
                  className="w-full h-32 border border-gray-300 rounded-lg px-4 py-2 resize-none"
                ></textarea>
                <button className="bg-yellow-400 hover:bg-yellow-300 transition px-6 py-2 rounded-lg font-medium">
                  Send
                </button>
              </div>
            </motion.div>
          </div>
        </section>
        {/* Footer Section */}
        <footer className="bg-black text-gray-400 py-10 px-6 lg:px-24">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
            <div>&copy; 2025 Your Company</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition">
                Contact
              </a>
            </div>
          </div>
        </footer>
      </div>
    );
  } catch (error) {
    console.error("Error in Sections component: ", error);
    return <div>Error: Something went wrong in Sections</div>;
  }
}
