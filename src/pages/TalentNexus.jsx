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
  "Graphic designers (brand identity, product, motion, etc.)",
  "Web designers & developers (frontend/backend/full stack)",
  "Data analysts and data enthusiasts",
  "UI/UX designers & product thinkers",
  "Video editors, content creators, and animators",
  "Digital marketers, SEOs, and growth hackers",
  "Freelancers and remote professionals in tech and creative space",
  "Anyone passionate about the digital economy and its potential",
];

const offeringsData = [
  "Job & Gig Alerts: Regular drops of remote, freelance, and full-time roles",
  "Digital Hangouts: Virtual sessions and meetups for networking and bonding",
  "Workshops & Training: Hands-on sessions with experts in various digital fields",
  "Hackathons & Design Challenges: Build skills, gain recognition, win rewards",
  "Mentorship Circles: Learn from experienced pros across disciplines",
  "Community Collaborations: Partner on gigs, passion projects, and portfolios",
];

const ctaData = {
  intro:
    "If you’re a digital enthusiast, techie, or creative who believes in growth, value, and collaboration then ScreenPro is your home.",
  highlight: " Your Tribe is Here. Your Time is Now.",
  ctaText: "Let’s level up, get hired, and build impact — together.",
};

const items = [
  {
    icon: <FaLowVision />,
    title: "Our Vision",
    description:
      "To become Africa’s leading digital talent community where tech-savvy individuals, creatives, and problem-solvers connect, learn, and find meaningful opportunities across industries.",
  },
  {
    icon: <FaCompass />,
    title: "Our Mission",
    description:
      "To empower digital professionals by providing access to job opportunities, market-relevant trainings, mentorship, tools, and collaborative ecosystems that fuel personal and professional growth.",
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
      "Build a thriving digital talent network of over 100,000 members across Africa",
      "Empower members to earn and grow through remote jobs, freelance gigs, and project-based work",
      "Equip members with future-proof skills that keep them relevant and competitive",
      "Create a platform where talent meets opportunity every single day",
    ],
  },
  {
    icon: <FaLightbulb />,
    title: "Our Philosophy",
    description: `“In the digital age, your network is not just who you know it's who helps you grow.” We believe every talented person deserves a platform, a community, and a chance to shine. ScreenPro is that space — where your skills are celebrated, your value is recognized, and your career takes a leap forward.`,
  },
  {
    icon: <FaGem />,
    title: "Core Values",
    items: [
      "Community – We win together",
      "Innovation – We embrace technology and forward thinking",
      "Integrity – We promote authentic opportunities and transparent processes",
      "Empowerment – We equip our members with knowledge and tools to thrive",
      "Creativity – We celebrate originality and ideas that push boundaries",
      "Excellence – We pursue mastery and continuous improvement",
    ],
  },
];

const intro = [
  "ScreenPro is a vibrant, forward-thinking community for digital and technology enthusiasts — a space where creativity meets code, data meets design, and passion meets opportunity. We bring together a diverse ecosystem of digital professionals such as graphic designers, web developers, data analysts, UI/UX designers, video editors, marketers, content creators, and tech enthusiasts to learn, grow, and thrive together.",
  "At ScreenPro, we don’t just build portfolios — we build people. From sharing high-value job opportunities and facilitating expert-led trainings to hosting networking events and digital hangouts, our goal is to create a supportive environment where digital talent is discovered, sharpened, and elevated.",
];

const whatWeDo = [
  "Share verified and vetted job and freelance opportunities",
  "Provide access to upskilling and reskilling programs in design, tech, and data",
  "Host virtual and physical events, hangouts, and mastermind sessions",
  "Facilitate peer collaboration for portfolio building, co-projects, and referrals, international donors, government bodies, and other stakeholders.",
  "Offer career guidance, industry insights, and resource directories",
];

const TalentNexus = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <HeroProp
        image={aboutus_image}
        title="Talent Nexus Network"
        description="Where Digital Minds Connect. Where Skills Thrive. Where Opportunities Emerge."
      />

      <CommunityDesc intro={intro} title="What We Do" whatWeDo={whatWeDo} />
      <ObjGoalValues
        heading="Our Strategy & Values"
        subheading="Guiding principles, goals, and philosophy driving SocialForce’s impact."
        sections={sections}
      />
      <VisionMission
        heading="Vision & Mission"
        subheading="Driving meaningful impact across Africa’s nonprofit and social innovation sector."
        items={items}
      />

      <JoinNetwork
        title="Who Can Join?"
        description="SocialForce Network is open to a diverse range of mission-driven individuals and organizations."
        joinGroups={joinGroupsData}
        offerings={offeringsData}
        cta={ctaData}
      />
    </>
  );
};

export default TalentNexus;
