import React from "react";

const CTAProp = ({ title, description, buttonText, onClick }) => {
  return (
    <section className="text-center py-12 px-10">
      {/* Title */}
      <h3 className="text-2xl font-semibold text-gray-800">{title}</h3>

      {/* Description */}
      <p className="mt-3 text-lg text-gray-600">{description}</p>

      {/* Button */}
      <button
        onClick={onClick}
        className="mt-6 bg-gradient-to-r from-blue-600 to-green-500 text-white px-8 py-3 rounded-lg shadow-md hover:scale-105 transition"
      >
        {buttonText}
      </button>
    </section>
  );
};

export default CTAProp;
