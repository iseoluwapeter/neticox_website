import React from "react";
import { motion } from "framer-motion";

const ObjGoalValues = ({ heading, subheading, sections = [] }) => {
  return (
    <section className="bg-gray-50 py-16 px-6">
      {/* Header */}
      <motion.div
        className="max-w-4xl mx-auto text-center mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {heading && (
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{heading}</h2>
        )}
        {subheading && (
          <p className="text-gray-700 leading-relaxed">{subheading}</p>
        )}
      </motion.div>

      {/* Sections */}
      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {sections.map((section, index) => (
          <motion.div
            key={index}
            className="bg-white p-8 rounded-3xl shadow-lg hover:scale-105 transition-transform duration-300 text-center"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            {/* Icon */}
            <div className="flex justify-center mb-4 text-4xl text-green-600">
              {section.icon}
            </div>

            {/* Title */}
            <h4 className="font-semibold text-xl mb-4 text-gray-900">
              {section.title}
            </h4>

            {/* Items list (if available) */}
            {section.items && (
              <ul className="text-gray-600 text-sm text-left list-disc list-inside">
                {section.items.map((item, i) => (
                  <li key={i} className="mb-2">
                    {item}
                  </li>
                ))}
              </ul>
            )}

            {/* Description (if available) */}
            {section.description && (
              <p className="text-gray-600 text-sm">{section.description}</p>
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ObjGoalValues;
