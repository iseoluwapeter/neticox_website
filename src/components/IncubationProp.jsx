import React from "react";
import { FaLightbulb } from "react-icons/fa";

const IncubationProp = ({ title, description, points }) => {
  return (
    <section className="bg-gray-50 rounded-xl p-8">
      {/* Title */}
      <h2 className="text-3xl font-bold text-blue-800 flex items-center gap-3">
        <FaLightbulb className="text-yellow-500 w-7 h-7" />
        {title}
      </h2>

      {/* Description */}
      <p className="mt-4 text-gray-700">{description}</p>

      {/* Ordered List of Points */}
      <ol className="list-decimal pl-6 mt-6 space-y-2">
        {points.map((point, index) => (
          <li key={index} className="text-gray-700">
            {point}
          </li>
        ))}
      </ol>
    </section>
  );
};

export default IncubationProp;
