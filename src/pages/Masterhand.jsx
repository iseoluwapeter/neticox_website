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
  "MasterHand Network is a powerful and transformative community built exclusively for artisans, vocational experts, and skilled professionals who are ready to turn their local crafts into globally fundable, recognized, and respected enterprises.",
  "From the mechanic in a small town to the fashion designer with global dreams, MasterHand Network brings together individuals who have mastered their skill and are now ready to master the business side of it. It is where hands-on talents meet business intelligence, creating a launchpad for thousands of passionate professionals to rise above obscurity and achieve global relevance.",
];

const whatWeDo = [
  "Train artisans in branding, digital visibility, pricing strategy, customer experience, and business development.",
  "Provide access to grants, micro-investments, and global funding opportunities.",
  "Connect members with business mentors, technology tools, and premium resources to scale operations.",
  "Host masterclasses, exhibitions, bootcamps, and skill showcases across multiple industries.",
  "Build a community of proud, forward-thinking artisans who are reshaping the narrative of what it means to be “skilled.”",
];

const items = [
  {
    icon: <FaLowVision />,
    title: "Our Vision",
    description:
      "To become the leading global force for transforming artisans and skilled professionals into high-impact, fundable business owners and respected industry leaders.",
  },
  {
    icon: <FaCompass />,
    title: "Our Mission",
    description:
      "To build a global network that equips and empowers artisans with the resources, exposure, and confidence needed to grow their brands, attract investment, and scale their businesses sustainably.",
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
      "Empower 100,000 artisans to become business leaders by 2030.",
      "Facilitate funding access to over 10,000 skilled businesses across Africa.",
      "Launch the MasterHand Global Trade Fair to showcase members internationally.",
      "Create a digital platform that houses skill directories, e-commerce, and business tools for artisans.",
    ],
  },
  {
    icon: <FaLightbulb />,
    title: "Our Philosophy",
    description: `“Every skilled hand is a seed of greatness all it needs is the right environment to grow.” We believe that being skilled is not a fallback plan it is a leadership path. At MasterHand, we honor the brilliance in your hands and provide the blueprint for building wealth, respect, and relevance from it.`,
  },
  {
    icon: <FaGem />,
    title: "Core Values",
    items: [
      "Dignity of Labor – Every skill deserves respect and value.",
      "Integrity – We promote ethical practices and transparency in everything we do.",
      "Excellence – We commit to raising the standard of every service rendered.",
      "Growth – We help members scale from hustle to enterprise.",
      "Innovation – We embrace new methods, technologies, and strategies.",
      "Community – We build together, we rise together.",
    ],
  },
];

const joinGroupsData = [
  "Fashion Designers",
  "Carpenters & Furniture Makers",
  "Mechanics & Auto Repair Professionals",
  "Plumbers & Electricians",
  "Hairstylists, Barbers & Beauticians",
  "Shoemakers, Welders, Bricklayers",
  "Bakers, Chefs, Decorators",
  "Painters, Artisans, Metal Workers",
  "And every hand that creates, fixes, builds, or transforms",
];

const offeringsData = [
  "Personal brand building tools",
  "Access to local and international markets",
  "Grant and funding opportunities",
  "Business registration and legal structuring support",
  "Community-driven promotions and collaborations",
  "Trade shows, exhibitions & media features",
];

const ctaData = {
  intro:
    "MasterHand Network is changing the story for artisans. We are rebuilding the perception of what it means to work with your hands. No longer should skilled professionals be hidden behind small shops with no online presence, no structure, and no plan. Now is the time to be seen, respected, and funded. We are not just building businesses; we are building generational brands.",
  highlight: "Join the MasterHand Movement Today.",
  ctaText: "Because your hands were made for more.",
};

const Masterhand = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <HeroProp
        image={aboutus_image}
        title="Masterhand Network"
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

export default Masterhand;
