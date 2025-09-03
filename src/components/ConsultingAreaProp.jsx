import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const ConsultingAreaProp = ({ title, points }) => {
  return (
    <section className="py-3 ">
      <h3 className="text-2xl font-bold text-white mb-5">{title}</h3>
      <ul className=" space-y-2  ">
        {points.map((point, index) => (
          <li key={index} className="flex items-start-safe gap-4">
            <FaCheckCircle className="text-white w-4 h-4" />
            <span className="text-white">{point}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ConsultingAreaProp;
