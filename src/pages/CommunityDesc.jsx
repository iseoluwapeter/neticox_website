import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { useEffect } from "react";

const CommunityDesc = ({ intro = [], title, whatWeDo = [] }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="bg-gray-50 py-16 px-6">
      {/* Intro */}
      <motion.div
        className="max-w-4xl mx-auto text-center mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {intro.map((paragraph, index) => (
          <p key={index} className="text-gray-700 leading-relaxed mb-4">
            {paragraph}
          </p>
        ))}
      </motion.div>

      {/* What We Do */}
      <motion.div
        className="max-w-5xl mx-auto bg-white shadow-lg rounded-3xl p-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {title && (
          <h3 className="text-2xl font-bold text-green-600 mb-6 text-center flex items-center justify-center gap-2">
            {title}
          </h3>
        )}
        <ul className="space-y-4 text-gray-700 text-lg">
          {whatWeDo.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <FaCheckCircle className="text-green-600 mt-1" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
};

export default CommunityDesc;
