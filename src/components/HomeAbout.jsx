import React from "react";
import { motion } from "framer-motion";

const HomeAbout = () => {
  return (
    <motion.section
      className="px-6 md:px-20 py-16 bg-gradient-to-r from-[#f0fdf4] via-white to-[#ecfdf5] "
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="max-w-5xl mx-auto text-center md:text-left ">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          About <span className="text-green-600">Our Company</span>
        </h2>

        {/* Short Intro */}
        <p className="text-lg text-gray-700 mb-4 leading-relaxed">
          We are a dedicated tech hub passionate about transforming ideas into
          powerful digital solutions. Our team blends creativity, innovation,
          and technology to empower brands, drive growth, and create lasting
          impact.
        </p>

        {/* Expanded Story */}
        <p className="text-gray-600 mb-8 leading-relaxed">
          At our core, we believe every business has its unique DNA. That’s why
          we go beyond templates — we craft bespoke digital strategies that
          align with your goals, connect with your audience, and make your brand
          unforgettable. From web development to brand design, we combine
          technology and art to position — or re-position — your business for
          success.
        </p>

        {/* CTA */}
        <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300">
          Know More About Us &rarr;
        </button>
      </div>
    </motion.section>
  );
};

export default HomeAbout;
