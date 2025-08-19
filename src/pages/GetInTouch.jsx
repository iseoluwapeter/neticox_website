import React from "react";
import HeroProp from "../components/HeroProp";
import { contactus_image } from "../assets";
import { contactDetails, formInputs } from "../components/FormDetails";
import { FaXTwitter } from "react-icons/fa6";
import { FiLinkedin } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io5";
import { motion } from "framer-motion";
import { useEffect } from "react";

const GetInTouch = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <HeroProp
        image={contactus_image}
        title="Contact Us"
        description="Let’s build the future together. Whether you’re an SME, healthcare provider, or innovator, we’re here to create digital solutions that drive growth and impact. Reach out today and let’s make it happen."
      />

      {/* get in touch form  */}
      <div className="flex flex-col md:flex-row justify-between gap-10 px-10 md:px-25 my-15">
        {/* Form Section - slides in faster */}
        <motion.div
          className="flex-1 rounded-xl shadow-md p-7 md:p-10"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-green-700 text-2xl lg:text-3xl text-center font-semibold">
            Get in Touch
          </h1>

          {formInputs.map((inputs) => (
            <input
              key={inputs.id}
              type={inputs.type}
              placeholder={inputs.placeholder}
              className="p-4 rounded-lg bg-gray-100 flex flex-col mt-5 w-full"
            />
          ))}

          <textarea
            placeholder="Your Message"
            className="bg-gray-100 w-full mt-4 h-40 rounded-lg p-3"
          ></textarea>

          <button className="bg-gradient-to-r from-[#00ff9f] via-[#065f46] to-[#2e07f2] text-white rounded-lg px-8 py-4 mt-4">
            Send Message
          </button>
        </motion.div>

        {/* Contact Info Section - slides in slower */}
        <motion.div
          className="flex-1 rounded-lg shadow-md"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.6, ease: "easeOut" }}
        >
          <h1 className="text-center font-semibold text-2xl lg:text-3xl bg-gradient-to-r from-[#00ff9f] via-[#065f46] to-[#2e07f2] h-24 flex items-center justify-center rounded-t-xl text-white">
            Our Contact
          </h1>

          <div className="p-7 md:p-10 space-y-10 md:space-y-20">
            {contactDetails.map((detail) => (
              <div
                key={detail.id}
                className="flex flex-row flex-start items-center gap-15 md:gap-20"
              >
                <p className="text-gray-700">{detail.icon}</p>
                <div className="flex flex-col">
                  <p className="font-semibold text-lg lg:text-xl text-green-700">
                    {detail.title}
                  </p>
                  <p className="text-gray-700">{detail.subtitle}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center gap-5 md:gap-10 mt-5 sm:p-5 md:p-0">
            <FaXTwitter size={30} />
            <FiLinkedin size={30} />
            <FaInstagram size={30} />
            <IoLogoFacebook size={30} />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default GetInTouch;
