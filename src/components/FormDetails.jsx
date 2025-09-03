import { FaInstagram, FaLock, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import React from "react";

export const formInputs = [
  {
    id: 1,
    type: "text",
    placeholder: "Your Name",
    icon: <FaInstagram />,
  },
  {
    id: 2,
    type: "email",
    placeholder: "Email Address",
    icon: <MdEmail />,
  },
  {
    id: 3,
    type: "phone",
    placeholder: "Phone No",
    icon: <FaPhoneAlt />,
  },
  {
    id: 4,
    type: "text",
    placeholder: "Subject",
    icon: <FaInstagram />,
  },
];

export const contactDetails = [
  {
    id: 1,
    icon: <FaLocationDot size={30} />,
    title: "NETICOX HUB LTD",
    subtitle: "11, Aleshinloye Street, Ikeja, Lagos State, Nigeria",
  },
  {
    id: 2,
    icon: <FaPhoneAlt size={30} />,
    title: "Phone Number",
    subtitle: "+234 111 1111 1111",
  },
  {
    id: 3,
    icon: <MdEmail size={30} />,

    title: "Email Address",
    subtitle: "info@neticoxhub.com",
  },
  {
    id: 4,
    icon: <MdEmail size={30} />,

    title: "Working Hours",
    subtitle: "Monday – Friday | 9:00 AM – 6:00 PM (GMT+1)",
  },
];
