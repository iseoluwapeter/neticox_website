import React from "react";
import { motion } from "framer-motion";

const JoinNetwork = ({ title, description, joinGroups, offerings, cta, CTA_title }) => {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <motion.div
        className="max-w-4xl mx-auto text-center mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-gray-900 mb-4">{title}</h2>
        <p className="text-gray-700 leading-relaxed mb-6">{description}</p>
      </motion.div>

      <motion.div
        className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } },
        }}
      >
        {joinGroups.map((group, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-2xl shadow text-gray-700 hover:shadow-lg transition duration-300"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            {group}
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="max-w-4xl mx-auto text-center mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h3 className="text-3xl font-semibold text-gray-900 mb-4">
           {CTA_title}
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">{cta.intro}</p>
        <ul className="text-gray-600 text-left list-disc list-inside mb-6">
          {offerings.map((item, index) => (
            <li key={index} className="mb-2">
              {item}
            </li>
          ))}
        </ul>
        <p className="text-gray-700 leading-relaxed font-semibold">
          {cta.highlight}
        </p>
        <p className="text-gray-700 leading-relaxed">{cta.ctaText}</p>
      </motion.div>
    </section>
  );
};

export default JoinNetwork;
