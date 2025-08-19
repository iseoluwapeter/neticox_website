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
  "ElitePro Network is an exclusive, high-impact community built for coaches, consultants, legal professionals, personal brand experts, accountants, strategists, and professional service providers who are ready to evolve from practitioners to recognized authorities in their fields.",
  "In today’s economy, trust and visibility are currency. ElitePro Network empowers ambitious professionals with the tools, training, and strategic relationships they need to build world-class brands, scale high-ticket services, and position themselves as industry thought leaders.",
];

const whatWeDo = [
  "Train members on personal brand building, content strategy, pricing, packaging, and positioning.",
  "Provide tools and templates to scale your services into products, memberships, and digital assets.",
  "Connect professionals with global clients, collaboration partners, and speaking platforms.",
  "Facilitate media visibility, PR support, and podcast/TV features to help you rise as an industry voice.",
  "Host networking mixers, expert panels, workshops, and premium masterminds.",
];

const items = [
  {
    icon: <FaLowVision />,
    title: "Our Vision",
    description:
      "To become the leading global network for elite professionals building impactful brands, credible voices, and scalable business empires across every sector of professional service.",
  },
  {
    icon: <FaCompass />,
    title: "Our Mission",
    description:
      "To equip and connect top-tier professionals with the knowledge, visibility, community, and systems they need to become highly paid, globally respected, and purpose-driven experts in their industries.",
  },
];

const sections = [
  {
    icon: <BiLowVision />,
    title: "Our Key Objectives",
    items: [
      "Help artisans develop a strong digital identity and presence.",
      "Connect skilled professionals with national and international opportunities.",
      "Provide access to training, financial support, and partnerships.",
      "Raise the standard of vocational services by promoting professionalism, consistency, and customer excellence.",
      "Build a new generation of artisan CEOs and vocational brand leaders.",
    ],
  },
  {
    icon: <BiAddToQueue />,
    title: "Our Goals",
    items: [
      "Develop 10,000 globally visible service professionals by 2030.",
      "Help members increase client acquisition, credibility, and cash flow through smart business systems.",
      "Position professionals to attract premium clients, not chase them.",
      "Build a recognized global marketplace for professional services rooted in trust, integrity, and excellence.",
    ],
  },
  {
    icon: <FaLightbulb />,
    title: "Our Philosophy",
    description: `“Your expertise is your gift. Let the world pay attention and pay well.” We believe every coach, consultant, and professional is not just a service provider but a solution carrier. ElitePro Network helps you package your brilliance and monetize it with integrity, strategy, and influence.`,
  },
  {
    icon: <FaGem />,
    title: "Core Values",
    items: [
      "Professionalism – We uphold the highest standards of ethics and service delivery.",
      "Excellence – We don’t settle for good enough. We deliver extraordinary.",
      "Visibility – Expertise must be seen to make impact. We amplify your voice and brand.",
      "Growth – We are committed to continuous personal, professional, and spiritual development.",
      "Impact – Our members aim to transform lives, industries, and economies.",
    ],
  },
];

const joinGroupsData = [
  "Life & Business Coaches",
  "Legal Professionals & Lawyers",
  "Consultants (Business, HR, Tech, Strategy, etc.)",
  "Financial Advisors & Accountants",
  "Branding Experts, Content Creators & Copywriters",
  "PR Experts, Public Speakers & Thought Leaders",
  "Authors, Course Creators & Trainers",
  "HR Professionals, Wellness Consultants & Therapists",
];

const offeringsData = [
  "Premium networking with like-minded high-value professionals",
  "Monthly strategy calls with experts",
  "Visibility opportunities on podcasts, blogs, and media",
  "Tools to automate and scale your services",
  "Personal brand audits and growth tracking",
  "Access to a global referral community",
];

const ctaData = {
  intro:
    "If you're a professional with a message, a method, or a model that the world needs to experience ElitePro Network is your tribe. We're here to ensure you no longer play small, blend in, or struggle in silence. Whether you're a coach trying to attract better clients, a lawyer aiming to expand your brand, or a consultant with a model ready to go global this is where you belong.",
  highlight: "Join the League of Leaders.",
  ctaText: "Become an ElitePro.",
};

const ElitePro = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <HeroProp
        image={aboutus_image}
        title="ElitePro Network"
        description="Empowering Experts. Elevating Influence. Expanding Impact.."
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

export default ElitePro;
