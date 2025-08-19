import React from "react";
import { motion } from "framer-motion";
import {
  FaUsers,
  FaSearch,
  FaHandshake,
  FaBullhorn,
  FaLaptopCode,
} from "react-icons/fa";

const CommunityDescProp = () => {
  const services = [
    {
      icon: (
        <FaUsers className="text-white text-3xl p-4 bg-indigo-600 rounded-full" />
      ),
      title: "Capacity Building & Training",
      description:
        "Tailored to the realities of grassroots and global impact organizations.",
    },
    {
      icon: (
        <FaSearch className="text-white text-3xl p-4 bg-indigo-600 rounded-full" />
      ),
      title: "Access to Funding & Grant Opportunities",
      description:
        "Including a curated and regularly updated funding database.",
    },
    {
      icon: (
        <FaHandshake className="text-white text-3xl p-4 bg-indigo-600 rounded-full" />
      ),
      title: "Collaboration & Partnership Facilitation",
      description:
        "Between local actors, international donors, government bodies, and other stakeholders.",
    },
    {
      icon: (
        <FaBullhorn className="text-white text-3xl p-4 bg-indigo-600 rounded-full" />
      ),
      title: "Visibility Tools",
      description:
        "Allowing members to showcase their work and build credibility.",
    },
    {
      icon: (
        <FaLaptopCode className="text-white text-3xl p-4 bg-indigo-600 rounded-full" />
      ),
      title: "Technology-Driven Solutions",
      description:
        "Including access to digital tools for project tracking, donor reporting, volunteer management, and more.",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-6">
      <motion.div
        className="max-w-4xl mx-auto text-center mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          SocialForce Network
        </h2>
        <p className="text-gray-700 leading-relaxed">
          SocialForce Network is a dynamic, purpose-driven community platform
          dedicated to supporting, empowering, and amplifying the efforts of
          nonprofits, NGOs, CBOs, and social entrepreneurs across Africa and
          beyond. Born out of the urgent need for a unified, action-oriented
          ecosystem, SocialForce Network is designed to transform passionate
          visionaries into impactful changemakers by equipping them with the
          tools, resources, visibility, and collaborations necessary to thrive
          in today’s competitive development space.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          At SocialForce, we understand that creating lasting social change is
          not a solo journey — it takes a force of committed, well-equipped
          individuals and organizations aligned in purpose and strategy. We are
          more than a network; we are a movement of mission-driven actors rising
          together to tackle the most pressing social, economic, and
          environmental issues facing our communities.
        </p>
      </motion.div>

      <motion.h3
        className="text-2xl font-semibold text-gray-900 mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        🔍 What We Do
      </motion.h3>

      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white p-8 rounded-3xl shadow-lg hover:scale-105 transition-transform duration-300 text-center"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="flex justify-center mb-4">{service.icon}</div>
            <h4 className="font-semibold text-xl mb-2 text-gray-900">
              {service.title}
            </h4>
            <p className="text-gray-600 text-sm">{service.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default CommunityDescProp;
