import React from "react";
import { MdComputer } from "react-icons/md";
import { BiBarChartAlt2 } from "react-icons/bi";
import { FaCode, FaCloudUploadAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { HeroDescImg } from "../assets";

const HomeInfo = () => {
  const services = [
    {
      title: "Innovative Tech Solutions",
      description:
        "Harness advanced technologies to solve complex problems, improve efficiency, and create innovative products that keep your business ahead in an ever-changing digital landscape.",
      icon: (
        <MdComputer
          size={40}
          className="bg-green-500 p-2 rounded-lg text-white"
        />
      ),
    },
    {
      title: "Data-Driven Insights",
      description:
        "Turn raw, scattered data into valuable business insights, enabling informed decision-making, spotting growth opportunities, and staying competitive in today’s fast-paced market.",
      icon: (
        <BiBarChartAlt2
          size={40}
          className="bg-green-500 p-2 rounded-lg text-white"
        />
      ),
    },
    {
      title: "Custom Software Development",
      description:
        "Design and build tailored software solutions that meet your unique business needs, scale effortlessly, and integrate seamlessly with existing workflows and tools.",
      icon: (
        <FaCode size={40} className="bg-green-500 p-2 rounded-lg text-white" />
      ),
    },
    {
      title: "Scalable Cloud Solutions",
      description:
        "Provide secure, flexible, and cost-efficient cloud infrastructure, ensuring your business applications and data remain accessible, reliable, and ready to grow with your needs.",
      icon: (
        <FaCloudUploadAlt
          size={40}
          className="bg-green-500 p-2 rounded-lg text-white"
        />
      ),
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Top Section with text + illustration */}
      <div className="px-10 md:px-20 flex flex-col lg:flex-row items-center justify-between gap-10 py-12">
        <div className="lg:w-1/2">
          <h2 className="text-2xl md:text-4xl font-bold leading-snug mb-6">
            We don’t just work with you — we craft solutions that create{" "}
            <span className="text-green-600">lasting wealth</span> for our
            clients.
          </h2>
          <button className="bg-green-600 hover:bg-green-700 text-white rounded-xl px-8 py-4 font-medium transition-all duration-300 shadow-lg hover:shadow-xl">
            Get Started
          </button>
        </div>

        {/* Illustration Image */}
        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src={HeroDescImg}
            alt="Team working on technology"
            className="w-full max-w-md mx-auto lg:max-w-lg rounded-lg"
          />
        </motion.div>
      </div>

      {/* Services Section */}
      <div className="relative px-5 md:px-10 py-12">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#00ff9f] via-[#065f46] to-[#2e07f2]"></div>

        {/* Frosted Glass Overlay */}
        <motion.div
          className="relative bg-white/10 backdrop-blur-2xl border border-white/30 rounded-2xl p-5 md:p-10 shadow-xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl hover:scale-[1.03] transition-all duration-300 border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: false, amount: 0.2 }}
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HomeInfo;
