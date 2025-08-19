import React from "react";
import { motion } from "framer-motion";
import { Md10Mp } from "react-icons/md";

const VisionMission = ({ heading, subheading, items = [] }) => {
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

      {/* Items */}
      <motion.div
        className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white p-8 rounded-3xl shadow-lg hover:scale-105 transition-transform duration-300 text-center"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            {/* <div >{item.icon}</div> */}
            <div className="flex justify-center mb-4 text-3xl text-green-700">
              {item.icon}
            </div>
            <h4 className="font-semibold text-xl mb-2 ">{item.title}</h4>
            <p className="text-gray-600 text-sm">{item.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default VisionMission;
