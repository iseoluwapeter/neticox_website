import React from "react";
import { FaGlobe, FaCheckCircle } from "react-icons/fa";

const PrespectiveProp = ({ title, desc, point_1, point_2, point_3 }) => {
  return (
    <section className="py-10">
      {/* Title */}
      <h2 className="text-3xl font-bold text-blue-800 flex items-center gap-3">
        {/* <FaGlobe className="text-blue-600 w-10 h-10" /> */}
        {title}
      </h2>

      {/* Description */}
      <p className="mt-4 text-lg leading-relaxed text-gray-700">{desc}</p>

      {/* Bullet Points */}
      <div className="grid md:grid-cols-2 gap-4 mt-6">
        {[point_1, point_2, point_3].map((point, index) => (
          <p key={index} className="flex items-start gap-3">
            <FaCheckCircle className="text-green-500 mt-1 w-5 h-5 flex-shrink-0" />
            <span className="text-gray-700">{point}</span>
          </p>
        ))}
      </div>
    </section>
  );
};

export default PrespectiveProp;
