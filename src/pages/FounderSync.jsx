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
  "FounderSync is more than a network — it’s a launchpad for dreamers, builders, and disruptors. It’s a community of ambitious co-founders, startup builders, and industry pioneers who are aligned by a single vision: to collaborate, co-create, and scale ventures that matter.",
  "In a world where many dreams die in isolation, FounderSync brings together the right people, with the right mindset, and the right skill sets to build world-class businesses from scratch. Whether you're a tech wizard, marketing guru, industry expert, or idea generator — this is the place where partnerships are formed, companies are built, and destinies are aligned.",
];

const whatWeDo = [
  "Curate and match co-founders with shared values and complementary skills",
  "Host startup bootcamps and ideation-to-launch accelerator programs",
  "Offer business structuring, funding readiness, and MVP development support",
  "Provide access to mentors, investors, technical experts, and legal advisors",
  "Facilitate access to grants, pitch events, and venture capital opportunities",
  "Build cross-sector synergy across Agriculture, Real Estate, Tech, FMCG, and more",
];

const items = [
  {
    icon: <FaLowVision />,
    title: "Our Vision",
    description:
      "To become Africa’s largest and most influential co-founder network, catalyzing the formation of scalable, sustainable, and socially-impactful businesses across key sectors.",
  },
  {
    icon: <FaCompass />,
    title: "Our Mission",
    description:
      "To connect passionate builders with complementary strengths, foster collaboration across industries, and provide the tools, networks, and resources required to birth and grow investor-ready enterprises.",
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
      "Build 10,000+ co-founder-led startups across Africa in the next 10 years",
      "Enable access to $500M+ in funding through strategic investor matchmaking",
      "Reduce startup failure by connecting visionary founders with execution-focused partners",
      "Promote ethical and value-based startup building culture across the continent",
      "Drive job creation, economic development, and tech-driven innovation at scale",
    ],
  },
  {
    icon: <FaLightbulb />,
    title: "Our Philosophy",
    description: ` “You don't need to do it alone. The right partner can 10x your vision and fast-track your mission.” We believe the best businesses are not built in isolation, but through synergistic partnerships that fuse purpose, talent, and resilience. FounderSync is committed to helping you find your tribe — so you can go farther, faster, and with focus.`,
  },
  {
    icon: <FaGem />,
    title: "Core Values",
    items: [
      "Collaboration Over Competition – Together, we win faster",
      "Trust & Transparency – Strong businesses are built on mutual respect",
      "Innovation with Purpose – We build solutions that matter to humanity",
      "Integrity – Our partnerships are value-driven, not ego-driven",
      "Excellence – We commit to world-class thinking, execution, and results",
      "Growth Mindset – Every failure is feedback; every win is shared",
    ],
  },
];

const joinGroupsData = [
  "Aspiring and existing co-founders",
  "Visionaries with high-potential ideas",
  "Tech developers, designers, and product engineers",
  "Business strategists, finance experts, and marketers",
  "Industry specialists (Agri, Real Estate, Health, FMCG, etc.)",
  "Founders looking for technical or business development co-founders",
  "Professionals looking to pivot into startups with partners",
];

const offeringsData = [
  "Matchmaking Platform: Intelligent founder pairing based on value, skill, and vision",
  "Co-Founder Labs: Structured programs to validate ideas and define roles",
  "Funding Access: Linkages to angel investors, accelerators, and grant programs",
  "Sector Hubs: Specialized support for Tech, Agri, Real Estate, FMCG, and more",
  "Founder Agreements: Legal templates, equity guides, and conflict prevention tools",
];

const ctaData = {
  intro:
    "If you're tired of dreaming alone...If you have a bold idea but need the right person to walk the journey...If you're looking for real partnerships that work FounderSync is for you.",
  highlight: "It’s Time to Build — Together",
  ctaText: "Let’s connect. Let’s build. Let’s grow together.",
};

const FounderSync = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <HeroProp
        image={aboutus_image}
        title="Founder Sync"
        description="Where Visionaries Meet. Where Startups are Born. Where Impact is Engineered."
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
        CTA_title=""
        title="Who Is FounderSync For?"
        description="FounderSync Network is open to a diverse range of mission-driven individuals and organizations. "
        joinGroups={joinGroupsData}
        offerings={offeringsData}
        cta={ctaData}
      />
    </>
  );
};

export default FounderSync;
