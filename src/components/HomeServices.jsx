import React from "react";
import { motion } from "framer-motion";
import {
  FaChalkboardTeacher,
  FaHandshake,
  FaCalendarAlt,
  FaUsersCog,
} from "react-icons/fa";

const services = [
  {
    title: "Training",
    description:
      "Empowering individuals and teams with practical, hands-on training to master essential digital and business skills for long-term success.",
    icon: <FaChalkboardTeacher size={40} className="text-green-600" />,
  },
  {
    title: "Consulting",
    description:
      "Providing expert guidance to help you identify opportunities, solve problems, and implement solutions that drive measurable results.",
    icon: <FaHandshake size={40} className="text-green-600" />,
  },
  {
    title: "Events",
    description:
      "Organizing impactful events, workshops, and conferences that connect people, share knowledge, and inspire innovation.",
    icon: <FaCalendarAlt size={40} className="text-green-600" />,
  },
  {
    title: "Outsourcing",
    description:
      "Offering reliable outsourcing solutions so you can focus on your core business while we handle the technical work.",
    icon: <FaUsersCog size={40} className="text-green-600" />,
  },
];

const HomeServices = () => {
  return (
    <section className="px-6 md:px-20 py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Our <span className="text-green-600">Services</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We deliver solutions that help you learn, grow, and succeed whether
          you need skills, strategy, events, or technical support.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <div className="mb-4 flex justify-center">{service.icon}</div>
            <h3 className="font-semibold text-lg mb-2 text-gray-900">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HomeServices;
