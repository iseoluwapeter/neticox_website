import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import { RiMenu3Line } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "../assets";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/aboutus" },
  {
    label: "Solutions",
    dropdown: [
      {
        label: "Tech Solutions",
        subItems: [
          {
            label: "Software Development",
            path: "/solutions/softwaredevelopement",
          },
          { label: "Cybersecurity", path: "/solutions/cybersecurity" },
          { label: "Artificial Intelligence", path: "/solutions/ai" },
          {
            label: "Business Automation",
            path: "/solutions/businessautomation",
          },
          { label: "Data Analytics", path: "/solutions/dataanalytics" },
          { label: "IT Support", path: "/solutions/itsupport" },
        ],
      },
      {
        label: "Designs & Marketing",
        subItems: [
          { label: "Graphics", path: "/solutions/graphics" },
          { label: "Website Design", path: "/solutions/webdesign" },
          { label: "Digital Marketing", path: "/solutions/digitalmkt" },
          { label: "2D/3D Animation", path: "/solutions/animation" },
          { label: "Motion Graphics", path: "/solutions/motiongraphics" },
          { label: "Product Design", path: "/solutions/productdesign" },
          { label: "Video Editing", path: "/solutions/videoediting" },
        ],
      },
    ],
  },
  { label: "Training", path: "/training" },
  { label: "Consulting", path: "/consulting" },
  {
    label: "Writing",
    dropdown: [
      { label: "Business Plan", path: "/products/" },
      { label: "Company Profile", path: "/products/" },
      { label: "Biography", path: "/solutions/biography" },
      { label: "Copy Writing", path: "/solutions/copywriting" },
      { label: "Content Writing", path: "/solutions/contentwriting" },
      { label: "Pitch Deck", path: "/solutions/pitchdeck" },
      { label: "Business Proposal", path: "/solutions/businessproposal" },
      { label: "Grant Proposal Writing", path: "/solutions/grant" },
    ],
  },
  {
    label: "Resources",
    dropdown: [
      {
        label: "Community",
        subItems: [
          { label: "NETICOX Tribe", path: "/solutions/" },
          { label: "Masterhand Network", path: "/community/masterhand" },
          { label: "SocialForce Network", path: "/community/socialforce" },
          { label: "ElitePro Network", path: "/community/elitepro" },
          { label: "FounderSync", path: "/community/foundersync" },
          { label: "Talent Nexus", path: "/community/talentnexus" },
          { label: "Serve circle", path: "/community/servicecirlce" },
        ],
      },
      {
        label: "Company",
        subItems: [
          { label: "Portfolio", path: "/a" },
        ],
      },
      { label: "Events", path: "/a" },
      { label: "Blog/Article", path: "/a" },
      { label: "Products", path: "/a" },
      { label: "About", path: "/a" },
    ],
  },
  { label: "Startup Lab", path: "/startuplab" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMenu = () => setMobileOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className=" mx-auto px-10 sm:px-6 lg:px-20 flex justify-between h-16 items-center">
        <img src={Logo} alt="neticox_logo" style={{ width: "100px" }} />

        {/* Desktop nav */}
        <div className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) =>
            link.dropdown ? (
              <Dropdown
                key={link.label}
                label={link.label}
                items={link.dropdown}
              />
            ) : (
              <NavItem key={link.label} label={link.label} path={link.path} />
            )
          )}
        </div>

        {/* Mobile nav button */}
        <div className="md:hidden">
          <button onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? (
              <FaTimes className="h-6 w-6 text-gray-800" />
            ) : (
              <RiMenu3Line className="h-6 w-6 text-gray-900" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile nav menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="md:hidden bg-white px-4 pt-4 pb-6 space-y-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {navLinks.map((link, index) =>
              link.dropdown ? (
                <MobileDropdown
                  key={link.label}
                  label={link.label}
                  items={link.dropdown}
                  index={index}
                  closeMenu={closeMenu}
                />
              ) : (
                <MobileNavItem
                  key={link.label}
                  label={link.label}
                  path={link.path}
                  index={index}
                  closeMenu={closeMenu}
                />
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function NavItem({ label, path }) {
  return (
    <Link to={path} className="text-gray-700 hover:text-blue-600 font-medium">
      {label}
    </Link>
  );
}

function Dropdown({ label, items }) {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [subOpenLabel, setSubOpenLabel] = useState(null);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpenDropdown(true)}
      onMouseLeave={() => {
        setOpenDropdown(false);
        setSubOpenLabel(null);
      }}
    >
      <button className="flex items-center gap-1 font-medium text-gray-700 hover:text-blue-600">
        {label}
        <FaChevronDown className="h-3 w-3" />
      </button>

      <AnimatePresence>
        {openDropdown && (
          <motion.div
            className="absolute bg-white shadow-md mt-2 rounded-md min-w-[180px] z-50"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {items.map((item) =>
              item.subItems ? (
                <div
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => setSubOpenLabel(item.label)}
                  onMouseLeave={() => setSubOpenLabel(null)}
                >
                  <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 flex justify-between items-center">
                    {item.label}
                    <FaChevronDown className="inline h-3 w-3 ml-2" />
                  </button>

                  <AnimatePresence>
                    {subOpenLabel === item.label && (
                      <motion.div
                        className="absolute left-full top-0 bg-white shadow-lg rounded-md min-w-[150px] z-50"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.subItems.map((sub) => (
                          <Link
                            key={sub.label}
                            to={sub.path}
                            className="block px-4 py-2 text-sm hover:bg-gray-100"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.label}
                  to={item.path}
                  className="block px-4 py-2 text-sm hover:bg-gray-100"
                >
                  {item.label}
                </Link>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileNavItem({ label, path, index, closeMenu }) {
  return (
    <motion.div
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -50, opacity: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <Link
        to={path}
        onClick={closeMenu}
        className="block text-gray-700 font-medium px-2 py-1"
      >
        {label}
      </Link>
    </motion.div>
  );
}

function MobileDropdown({ label, items, index = 0, closeMenu }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -50, opacity: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <div className="pl-2">
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="flex items-center w-full text-left text-gray-700 font-medium"
        >
          {label}
          <FaChevronDown className="h-3 w-3 ml-1" />
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              className="pl-4 space-y-1 mt-1"
              initial="collapsed"
              animate="open"
              exit="collapsed"
              variants={{
                open: {
                  opacity: 1,
                  height: "auto",
                  transition: { when: "beforeChildren", staggerChildren: 0.08 },
                },
                collapsed: {
                  opacity: 0,
                  height: 0,
                  transition: { when: "afterChildren" },
                },
              }}
            >
              {items.map((item, idx) =>
                item.subItems ? (
                  <MobileDropdown
                    key={item.label}
                    label={item.label}
                    items={item.subItems}
                    index={idx}
                    closeMenu={closeMenu}
                  />
                ) : (
                  <motion.div
                    key={item.label}
                    variants={{
                      open: { x: 0, opacity: 1 },
                      collapsed: { x: -30, opacity: 0 },
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Link
                      to={item.path}
                      onClick={closeMenu}
                      className="block text-gray-700 font-medium px-2 py-1"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                )
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
