import React from "react";
import {
  FaChalkboardTeacher,
  FaUserTie,
  FaCalendarAlt,
  FaProjectDiagram,
} from "react-icons/fa";

const HomeSteps = () => {
  const steps = [
    {
      icon: <FaChalkboardTeacher className="text-white text-2xl" />,
      title: "Training",
      description: "Empower your team with hands-on tech skills.",
    },
    {
      icon: <FaUserTie className="text-white text-2xl" />,
      title: "Consulting",
      description: "Get expert guidance to scale and innovate.",
    },
    {
      icon: <FaCalendarAlt className="text-white text-2xl" />,
      title: "Events",
      description: "Engaging tech events that inspire and connect.",
    },
    {
      icon: <FaProjectDiagram className="text-white text-2xl" />,
      title: "Outsourcing",
      description: "Reliable solutions to boost your business efficiency.",
    },
  ];

  return (
    <div className="px-6 md:px-20 py-12 bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex items-start gap-4 bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="bg-blue-900 p-3 rounded-lg flex items-center justify-center">
              {step.icon}
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1 flex items-center gap-1">
                {step.title} <span className="text-blue-600">→</span>
              </h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeSteps;
