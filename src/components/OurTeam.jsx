import React, { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { teamMembers } from "./TeamMembers";

const OurTeam = () => {
  const [openItemId, setOpenItemId] = useState(null);

  const toggleItem = (key) => {
    setOpenItemId((prevKey) => (prevKey === key ? null : key));
  };
  return (
    <div className="flex flex-wrap justify-center items-start gap-6 px-5 mb-10">
      {teamMembers.map((member) => {
        const isOpen = openItemId === member.id;

        return (
          <div
            key={member.id}
            className="bg-white shadow-md rounded-lg object-fit w-full sm:w-[300px] transition-all duration-300 ease-in-out overflow-hidden"
          >
            {/* ——— Fixed Height Image Wrapper ——— */}
            <div className="relative h-[400px] overflow-hidden">
              <img
                src={member.image}
                alt={member.alt}
                onClick={(e) => e.currentTarget.classList.toggle("grayscale-0")}
                className="w-full h-full object-cover grayscale transition-all duration-500 ease-in-out"
              />
              <a
                href={member.href}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-2 right-2 bg-white p-1 rounded-full shadow hover:scale-110 transition"
              >
                <FaLinkedin className="text-green-700 text-xl" />
              </a>
            </div>

            {/* Flippable Footer */}
            <div className="perspective group h-[80px] relative">
              <div className="flip-card-inner">
                {/* Front face */}
                <div className="flip-card-front bg-green-400 text-white font-medium text-center py-3">
                  <p>{member.name}</p>
                  <p>{member.position}</p>
                </div>

                {/* Back face */}
                <div className="flip-card-back bg-green-600 text-white text-center py-3">
                  <button
                    className="underline text-sm hover:text-gray-200 transition"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleItem(member.id);
                    }}
                  >
                    {isOpen ? "Hide profile" : "View profile"}
                  </button>
                </div>
              </div>
            </div>

            {isOpen && (
              <div
                className="bg-gray-100 text-gray-700 px-4 py-3 text-sm transition-all duration-300 ease-in-out cursor-pointer"
                onClick={() => setOpenItemId(null)}
              >
                <p className="font-semibold">{member.name}</p>
                <p>{member.profile || "No profile details yet."}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default OurTeam;
