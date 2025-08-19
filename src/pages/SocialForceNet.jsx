import React from "react";
import HeroProp from "../components/HeroProp";
import { aboutus_image } from "../assets";
import { FaLowVision } from "react-icons/fa";
import { FaLightbulb, FaGem, FaCompass } from "react-icons/fa";

import CommunityDesc from "./CommunityDesc";
import { BiAddToQueue, BiLowVision } from "react-icons/bi";
import VisionMission from "../components/VisionMission";
import ObjGoalValues from "../components/ObjGoalValues";
import JoinNetwork from "../components/JoinNetwork";
import { useEffect } from "react";


const joinGroupsData = [
  "Non-Governmental Organizations (NGOs)",
  "Nonprofit Foundations & Associations",
  "Community-Based Organizations (CBOs)",
  "Faith-Based Organizations (FBOs)",
  "Social Enterprises & Entrepreneurs",
  "Donors, Philanthropists, and Impact Investors",
  "Corporate CSR Leaders & Professionals",
  "Researchers, M&E Experts & Development Consultants",
];

const offeringsData = [
  "Member spotlight & exposure campaigns",
  "Community grant challenges",
  "Monthly webinars with global experts",
  "Co-creation labs for joint projects",
  "Donor-readiness bootcamps",
  "Access to proposal templates, M&E tools, and impact frameworks",
  "Partnership and affiliate opportunities",
];

const ctaData = {
  intro:
    "Unlike traditional platforms, SocialForce is community-first and results-driven. Here, you're not just a member you’re part of a growing force for good.",
  highlight: "📣 Let’s Build a New Future Together",
  ctaText:
    "If you're passionate about purpose, driven by impact, and eager to scale your vision — SocialForce Network is your tribe. Join the Force. Be the Change.",
};

const items = [
  {
    icon: <FaLowVision />,
    title: "Our Vision",
    description:
      "To become the most trusted and impactful platform for empowering Africa’s nonprofit and social innovation sector — scaling solutions that change lives, uplift communities, and drive the SDGs.",
  },
  {
    icon: <FaCompass />,
    title: "Our Mission",
    description:
      "To fuel the capacity, sustainability, and influence of mission-driven individuals and organizations by providing access to relevant resources, strategic collaborations, and global opportunities for scale.",
  },
];

const sections = [
  {
    icon: <BiLowVision />,
    title: "Our Key Objectives",
    items: [
      "Support social innovators and nonprofit leaders in scaling impact through strategic training and development.",
      "Create seamless linkages between funders and credible grassroots organizations.",
      "Foster a culture of collaboration over competition within the development ecosystem.",
      "Equip members with cutting-edge tools and knowledge to attract funding, manage projects effectively, and report impact transparently.",
      "Advocate for ethical, inclusive, and community-driven development at every level.",
    ],
  },
  {
    icon: <BiAddToQueue />,
    title: "Our Goals",
    items: [
      "Empower 50,000+ organizations and social entrepreneurs by 2030.",
      "Facilitate access to over $100 million in grant and donor funding for African-based initiatives.",
      "Connect organizations across 50+ countries, fostering cross-border innovation and collective impact.",
      "Become Africa’s #1 go-to community for impact leaders seeking collaboration, funding, and global relevance.",
    ],
  },
  {
    icon: <FaLightbulb />,
    title: "Our Philosophy",
    description: `“Real change begins with connected, equipped, and supported changemakers.” We believe that no idea is too small to spark transformation — but it must be nurtured, funded, and exposed to thrive. We exist to provide that fertile ground.`,
  },
  {
    icon: <FaGem />,
    title: "Core Values",
    items: [
      "Impact – We are driven by results that improve lives and transform communities.",
      "Integrity – We promote ethical practices and transparency in everything we do.",
      "Collaboration – We believe in the power of working together for greater change.",
      "Equity – We uplift underrepresented voices and champion inclusive development.",
      "Innovation – We support modern, scalable solutions that address age-old problems.",
    ],
  },
];

const intro = [
  "SocialForce Network is a dynamic, purpose-driven community platform dedicated to supporting, empowering, and amplifying the efforts of nonprofits, NGOs, CBOs, and social entrepreneurs across Africa and beyond. Born out of the urgent need for a unified, action-oriented ecosystem, SocialForce Network is designed to transform passionate visionaries into impactful changemakers by equipping them with the tools, resources, visibility, and collaborations necessary to thrive in today’s competitive development space.",
  "At SocialForce, we understand that creating lasting social change is not a solo journey it takes a force of committed, well-equipped individuals and organizations aligned in purpose and strategy. We are more than a network; we are a movement of mission-driven actors rising together to tackle the most pressing social, economic, and environmental issues facing our communities.",
];

const whatWeDo = [
  "SocialForce Network is a multi-dimensional support system that offers:",
  "Capacity Building & Training tailored to the realities of grassroots and global impact organizations.",
  "Access to Funding & Grant Opportunities, including a curated and regularly updated funding database.",
  "Collaboration & Partnership Facilitation between local actors, international donors, government bodies, and other stakeholders.",
  "Visibility Tools that allow members to showcase their work and build credibility.",
  "Technology-Driven Solutions including access to digital tools for project tracking, donor reporting, volunteer management, and more.",
];

const SocialForceNet = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <HeroProp
        image={aboutus_image}
        title="Social Force Network"
        description="Empowering Changemakers. Fueling Global Impact."
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

export default SocialForceNet;
