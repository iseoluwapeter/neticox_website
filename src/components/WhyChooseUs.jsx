import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const points = [
  "Proven Track Record",
  "Client-Centric Approach",
  "Innovative Thinking",
  "Reliable Support",
];

const WhyChooseUs = () => {
  return (
    <section className="px-6 md:px-20 py-16 bg-gradient-to-r from-[#f0fdf4] via-white to-[#ecfdf5]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* IMAGE SIDE */}
        <motion.div
          className="grid grid-cols-2 gap-4"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
        >
          {/* First Image */}
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800"
            alt="Team collaboration"
            className="rounded-xl shadow-lg object-cover w-full h-[350px]"
          />
          {/* Second Image */}
          <img
            src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800"
            alt="Creative workspace"
            className="rounded-xl shadow-lg object-cover w-full h-[350px] mt-8"
          />
        </motion.div>

        {/* TEXT + BULLETED LIST */}
        <div>
          <motion.div
            className="mb-8 text-center lg:text-left"
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why <span className="text-green-600">Choose Us</span>
            </h2>
            <p className="text-gray-600 max-w-xl">
              We don’t just provide services — we create experiences and results
              that transform your brand and fuel your growth.
            </p>
          </motion.div>

          <ul className="space-y-4">
            {points.map((point, index) => (
              <motion.li
                key={index}
                className="flex items-center text-lg text-gray-800"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: false, amount: 0.2 }}
              >
                <FaCheckCircle className="text-green-600 mr-3 flex-shrink-0" />
                {point}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
