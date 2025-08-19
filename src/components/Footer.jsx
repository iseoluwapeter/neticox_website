import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
import { Logo } from "../assets";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 px-6 py-10 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Section 1: Company Info */}
        <div>
          <img src={Logo} style={{ width: "100px" }} alt="" />
          <p className="text-sm pt-5">
            Building digital solutions for a better future. Empowering SMEs,
            healthcare, and tech innovation across Nigeria.
          </p>
        </div>

        {/* Section 2: Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/aboutus" className="hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/solutions" className="hover:text-white">
                Solutions
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-white">
                Products
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Section 3: Contact / Social */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">Connect</h3>
          <p className="text-sm mb-3">Email: support@neticoxhub.ng</p>
          <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:text-white">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-white">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-white">
              <FaInstagram />
            </a>
            <a href="mailto:support@uppercore.ng" className="hover:text-white">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm mt-10 text-gray-400">
        &copy; {new Date().getFullYear()} Neticox Hub Ltd. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
