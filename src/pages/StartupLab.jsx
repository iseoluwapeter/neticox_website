import React from "react";
import { useEffect } from "react";
import HeroProp from "../components/HeroProp";
import { aboutus_image } from "../assets";
import { FaGlobe, FaCheckCircle, FaLightbulb } from "react-icons/fa";
import PrespectiveProp from "../components/PrespectiveProp";
import IncubationProp from "../components/IncubationProp";
import CTAProp from "../components/CTAProp";

const StartupLab = () => {
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <HeroProp
        image={aboutus_image}
        title="Startup Lab – Where Ideas Take Flight"
        description="The Neticox Hub Startup Lab is more than an incubator; it’s a global launchpad for innovators, entrepreneurs, and change-makers."
      />

      {/* Content Sections */}
      <div className="max-w-6xl mx-auto px-6  space-y-7">
        {/* Global Perspective */}
        <PrespectiveProp
          title="Global Perspective, Local Impact"
          desc="We believe every idea has the power to make a difference. Our Startup Lab helps founders design ventures that are globally competitive while staying rooted in solving real-world community challenges."
          point_1=" Learn to think beyond borders."
          point_2=" Understand cultural and economic dynamics of global markets."
          point_3="Build businesses that create jobs, solutions, and opportunities where they matter most."
        />

        {/* Idea Incubation */}
        <IncubationProp
          title="Idea Incubation"
          description="Many ideas fail, not because they’re bad, but because they lack structure and support. That’s where we step in:"
          points={[
            "Idea Validation: Test your concept against market needs.",
            "Business Model Design: Transform thoughts into clear, scalable models.",
            "Prototyping & Feedback: Create small versions, test, and refine.",
            "Execution Plan: Step-by-step guidance to move from 'dream' to 'doing.'",
          ]}
        />

        {/* Call to Action */}
        <CTAProp
          title="Your startup journey doesn’t have to be lonely."
          description="With the Neticox Hub Startup Lab, you gain a partner committed to your success."
          buttonText="Apply Now"
          onClick={() => console.log("CTA Clicked!")} // Replace with navigation or modal logic
        />
      </div>
    </div>
  );
};

export default StartupLab;
