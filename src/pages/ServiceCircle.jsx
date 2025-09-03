import React from "react";
import HeroProp from "../components/HeroProp";
import { aboutus_image } from "../assets";
import { FaLowVision, FaCompass, FaLightbulb, FaGem } from "react-icons/fa";
import { BiLowVision, BiAddToQueue } from "react-icons/bi";
import CommunityDesc from "./CommunityDesc";
import VisionMission from "../components/VisionMission";
import ObjGoalValues from "../components/ObjGoalValues";
import JoinNetwork from "../components/JoinNetwork";
import { useEffect } from "react";

const intro = [
  "We exist for individuals who want to give more than just time — they want to give their talent, energy, creativity, and experience to causes that matter. From volunteering with NGOs and impact-driven startups to assisting in global missions and local outreaches, ServeCircle is a movement of action-takers, solution providers, and servant leaders rising to meet the needs of a hurting world. We believe true service is not just an act — it’s a lifestyle. And through this network, we’re rewriting the narrative of what volunteering looks like in the 21st century.",
];

const whatWeDo = [
  "Connect volunteers with credible NGOs, social enterprises, and community projects.",
  "Provide training on ethical volunteering, leadership, teamwork, and sustainable impact.",
  "Equip volunteers with opportunities to grow personally, spiritually, and professionally.",
  "Facilitate global and local volunteering campaigns in areas like education, health, environment, social justice, and humanitarian response.",
  "Recognize and celebrate volunteers through certificates, recommendations, ambassador roles, and awards.",
];

const items = [
  {
    icon: <FaLowVision />,
    title: "Our Vision",
    description:
      "To raise a global force of skillful, passionate, and purpose-driven volunteers who are committed to using their lives to serve others, solve problems, and shape communities.",
  },
  {
    icon: <FaCompass />,
    title: "Our Mission",
    description:
      "To provide a unified platform that connects volunteers to high-impact organizations, equips them with the mindset and skills for effective service, and honors their contribution through recognition, opportunities, and growth.",
  },
];

const sections = [
  {
    icon: <BiLowVision />,
    title: "Our Key Objectives",
    items: [
      // "Help artisans develop a strong digital identity and presence.",
      // "Connect skilled professionals with national and international opportunities.",
      // "Provide access to training, financial support, and partnerships.",
      // "Raise the standard of vocational services by promoting professionalism, consistency, and customer excellence.",
      // "Build a new generation of artisan CEOs and vocational brand leaders.",
    ],
  },
  {
    icon: <BiAddToQueue />,
    title: "Our Goals",
    items: [
      "Mobilize 1,000,000 active volunteers across Africa and the world by 2035.",
      "Become the leading platform for volunteer empowerment and placement across nonprofit ecosystems.",
      "Transform volunteering from random acts into strategic, purpose-filled service experiences.",
      "Bridge the gap between passion to serve and places to serve.",
    ],
  },
  {
    icon: <FaLightbulb />,
    title: "Our Philosophy",
    description: `“We don’t just give time — we give life, skills, and love.” We believe volunteering is a powerful tool for both social change and personal growth. It’s not just about helping others it’s about becoming who you were born to be through the act of serving.`,
  },
  {
    icon: <FaGem />,
    title: "Core Values",
    items: [
      "Compassion – We care deeply about people and causes that matter.",
      "Integrity – We serve with honesty, accountability, and transparency.",
      "Excellence – Every act of service is done with our best effort and attitude.",
      "Growth – Volunteering is a path to become more — not just to give more.",
      "Community – Together, we go further. We build, learn, and grow as one.",
      "Faith in Action – For those led by their spiritual convictions, we serve with purpose and prayer.",
    ],
  },
];

const joinGroupsData = [
  "University students and NYSC corps members",
  "Skilled professionals willing to offer time for social impact",
  "Retirees and elderly persons looking to mentor or assist",
  "Freelancers and remote workers who want to contribute",
  "Christians and other faith-based individuals who want to serve",
  "Anyone with a heart to help and hands to work",
];

const offeringsData = [
  "Access Opportunities: Connect to verified volunteering roles both online and offline",
  "Build Your Resume: Gain practical experience and leadership skills",
  "Find Purpose: Align your values, skills, and passion to real-world impact",
  "Be Recognized: Earn awards, endorsements, and digital badges",
  "Grow Spiritually & Professionally: Learn while you serve",
  "Create Global Impact: Be part of projects beyond your community",
];

const ctaData = {
  intro:
    "In a world filled with takers, ServeCircle exists to raise givers. We are the hands and feet of the mission — building bridges of hope, creating paths of transformation, and leaving fingerprints of love everywhere we serve.",
  ctaText: "ServeCircle is more than volunteering it’s your purpose in action.",
};

const ServiceCircle = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <HeroProp
        image={aboutus_image}
        title="Service Circle"
        description="ServeCircle is a vibrant community of compassion-driven volunteers, professionals, and changemakers who are committed to serving with skill, heart, and impact."
      />
      <CommunityDesc intro={intro} title="What We Do" whatWeDo={whatWeDo} />

      <VisionMission
        heading="Vision & Mission"
        subheading="Driving meaningful impact across Africa’s nonprofit and social innovation sector."
        items={items}
      />

      <ObjGoalValues
        heading="Our Strategy & Values"
        subheading="Guiding principles, goals, and philosophy driving SocialForce’s impact."
        sections={sections}
      />

      <JoinNetwork
        title="Who Can Join?"
        description="SocialForce Network is open to a diverse range of mission-driven individuals and organizations."
        joinGroups={joinGroupsData}
        offerings={offeringsData}
        cta={ctaData}
      />
    </div>
  );
};

export default ServiceCircle;
