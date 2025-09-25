import React, { useEffect, useState } from "react";
import HeroProp from "../components/HeroProp";
import { contactus_image } from "../assets";
import { contactDetails, formInputs } from "../components/FormDetails";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import { FiLinkedin } from "react-icons/fi";
import { IoLogoFacebook } from "react-icons/io5";
import { motion } from "framer-motion";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hydrncixlahhlowdekkn.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh5ZHJuY2l4bGFoaGxvd2Rla2tuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc2MDI4MTIsImV4cCI6MjA3MzE3ODgxMn0.Z3zUy3-SX2uMeo0HoldzyAEgSFjPAKRtBJszPKeMNKw";
const supabase = createClient(supabaseUrl, supabaseKey);

const GetInTouch = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneno: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error } = await supabase.from("Contact").insert([formData]);

    if (error) {
      console.log("error inserting data", error.message);
    } else {
      alert("Message sent sucessfully");
      setFormData({
        name: "",
        email: "",
        phoneno: "",
        subject: "",
        message: "",
      });
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <HeroProp
        image={contactus_image}
        title="Contact Us"
        description="At Neticox Hub, we believe that great connections spark great possibilities. Whether you’re a startup with a bold idea, an established business looking to scale, or an organization seeking expert solutions we are here to listen, guide, and grow with you."
      />

      {/* Intro Paragraph */}
      <div className="px-10 md:px-20 text-center my-10">
        <p className="text-gray-700 text-lg max-w-5xl mx-auto">
          We’d love to hear from you. No matter where you are in the world, our
          doors and inboxes are always open. Reach out to us and let’s start
          building something impactful together.
        </p>
      </div>

      {/* Get in Touch Form & Contact Info */}
      <div className="flex flex-col md:flex-row justify-between gap-10 px-10 md:px-25 my-15">
        {/* Form Section */}
        <motion.div
          className="flex-1 rounded-xl shadow-md p-7 md:p-10 bg-white"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-green-700 text-2xl lg:text-3xl text-center font-semibold">
            Get in Touch
          </h1>
          <form onSubmit={handleSubmit}>
            {formInputs.map((input) => (
              <input
                key={input.id}
                type={input.type}
                name={input.name}
                value={formData[input.name]}
                onChange={handleChange}
                placeholder={input.placeholder}
                className="p-4 rounded-lg bg-gray-100 mt-5 w-full"
                required
              />
            ))}
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="bg-gray-100 w-full mt-4 h-40 rounded-lg p-3"
            />
            <button
              className="bg-gradient-to-r from-[#00ff9f] via-[#065f46] to-[#2e07f2] text-white rounded-lg px-8 py-4 mt-4 w-full"
              type="submit"
            >
              Send Message
            </button>
          </form>
        </motion.div>

        {/* Contact Info Section */}
        <motion.div
          className="flex-1 rounded-lg shadow-md bg-white"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <h1 className="text-center font-semibold text-2xl lg:text-3xl bg-gradient-to-r from-[#00ff9f] via-[#065f46] to-[#2e07f2] h-24 flex items-center justify-center rounded-t-xl text-white">
            Contact Information
          </h1>
          <div className="p-7 md:p-10 space-y-10 md:space-y-14">
            {contactDetails.map((detail) => (
              <div key={detail.id} className="flex items-center gap-6">
                <span className="text-green-700 text-2xl">{detail.icon}</span>
                <div>
                  <p className="font-semibold text-lg">{detail.title}</p>
                  <p className="text-gray-700">{detail.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Why Reach Out Section */}
      <div className="flex flex-col md:flex-row justify-center mb-5">
        <div className="px-6 md:px-20  text-center">
          <h2 className="text-3xl font-bold text-green-700 mb-6">
            Why Reach Out?
          </h2>
          <ul className="text-gray-700 space-y-4 max-w-2xl mx-auto text-center md:text-left list-none">
            <li>Personalized consulting tailored to your needs</li>
            <li>Global perspective with local expertise</li>
            <li>Dedicated support for startups, businesses & NGOs</li>
            <li>Quick response time</li>
          </ul>
        </div>

        <div>
          {/* Social Links */}
          <div className="px-6 md:px-20  flex flex-col items-center gap-4">
            <p className="font-semibold text-lg">Stay Connected</p>
            <div className="flex gap-6">
              <FaXTwitter
                size={32}
                className="text-green-600 hover:scale-110 transition-transform"
              />
              <FiLinkedin
                size={32}
                className="text-green-600 hover:scale-110 transition-transform"
              />
              <FaInstagram
                size={32}
                className="text-green-600 hover:scale-110 transition-transform"
              />
              <IoLogoFacebook
                size={32}
                className="text-green-600 hover:scale-110 transition-transform"
              />
            </div>
          </div>

          {/* CTA */}
          <div className="text-center my-16">
            <p className="text-xl font-medium text-gray-700">
              Don’t just think it. Let’s make it happen.
            </p>
            {/* <button className="mt-6 bg-gradient-to-r from-green-500 to-green-700 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition">
              Contact Neticox Hub Today
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
