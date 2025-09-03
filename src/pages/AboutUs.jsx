import React from "react";
import { aboutus_image } from "../assets";
import { motion } from "framer-motion";
import HeroProp from "../components/HeroProp";
import OurTeam from "../components/OurTeam";
import { useEffect } from "react";

const AboutUs = () => {
useEffect(() => {
  window.scrollTo({ top: 0, behavior: "smooth" });
}, []);

  return (
    <div>
      <HeroProp
        image={aboutus_image}
        title="About Us"
        description="At Neticox Hub, we are more than just a service provider we are a creative powerhouse dedicated to helping businesses, NGOs, and individuals achieve their goals with innovation, strategy, and precision.  "
      />

      <div className="py-12 bg-white">
        {/* Vision & Mission Cards */}
        <div className="flex flex-col md:flex-row gap-10 justify-center w-[90%] max-w-6xl mx-auto">
          {/* Vision */}
          <motion.div
            className="text-center flex-1"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-green-600 mb-4">
              Our Vision
            </h3>
            <p className="bg-green-500 text-white p-6 rounded-xl h-52 flex items-center justify-center text-sm leading-relaxed transition-all ease-in-out hover:scale-110">
              Building digital solutions for a better future. Empowering SMEs,
              advancing healthcare, and driving tech innovation to transform
              lives and create lasting impact across Nigeria.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            className="text-center flex-1"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-green-600 mb-4">
              Our Mission
            </h3>
            <p className="bg-green-500 text-white p-6 rounded-xl h-52 flex items-center justify-center text-sm leading-relaxed transition-all ease-in-out hover:scale-110">
              To build innovative digital solutions that empower SMEs,
              strengthen healthcare, and drive tech innovation, creating
              sustainable growth and impact across Nigeria.
            </p>
          </motion.div>
        </div>
      </div>

      {/* our team  */}

      <div className="flex flex-col space-y-7 mt-14">
        <b className="text-center flex justify-center text-3xl text-green-700">
          Our Team
        </b>
        <OurTeam />
      </div>
    </div>
  );
};

export default AboutUs;
