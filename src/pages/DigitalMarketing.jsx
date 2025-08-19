import React from "react";
import HeroProp from "../components/HeroProp";
import PagesProp from "../components/PagesProp";
import PagesCtaProp from "../components/PagesCtaProp";
import { aboutus_image } from "../assets";
import {
  FaBullhorn,
  FaEnvelopeOpenText,
  FaPenFancy,
  FaRocket,
} from "react-icons/fa";
import { MdOutlineCampaign } from "react-icons/md";
import { SiGoogleads, SiGoogleanalytics } from "react-icons/si";
import { BiSearchAlt2 } from "react-icons/bi";
import { useEffect } from "react";

const DigitalMarketing = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <HeroProp
        image={aboutus_image}
        title="Digital Marketing"
        description="Grow Your Brand, Reach More People, and Drive Results Online"
      />

      <PagesProp
        intro1="In today’s digital age, it’s not enough to exist online, you need to be visible, engaging, and result-driven. At NETICOX HUB LTD, we provide digital marketing strategies that move the needle — from brand awareness to customer acquisition."
        intro2="Whether you're a startup, nonprofit, or entrepreneur, our expert team helps you cut through the noise and connect with your ideal audience. We don’t just run campaigns — we grow your digital presence with purpose."
        services="Our Digital Marketing Services"
        // 1. Social Media Marketing
        icon={FaBullhorn}
        title="Social Media Marketing (SMM)"
        content="Grow and engage your audience on platforms like Facebook, Instagram, LinkedIn, Twitter, and TikTok with targeted content, ad campaigns, and community building."
        // 2. Search Engine Optimization
        icon_2={BiSearchAlt2}
        title_2="Search Engine Optimization (SEO)"
        content_2="Get found on Google. We help you rank higher, drive organic traffic, and increase visibility with on-page, off-page, local search and technical SEO."
        // 3. Pay-Per-Click Advertising
        icon_3={SiGoogleads}
        title_3="Pay-Per-Click Advertising (PPC)"
        content_3="Launch ROI-driven ads on Google, Facebook, Instagram, and LinkedIn to generate qualified leads and boost sales."
        // 4. Email Marketing & Automation
        icon_4={FaEnvelopeOpenText}
        title_4="Email Marketing & Automation"
        content_4="Craft compelling email campaigns, newsletters, and automated workflows that turn subscribers into loyal customers or donors."
        // 5. Content Marketing
        icon_5={FaPenFancy}
        title_5="Content Marketing"
        content_5="Strategic blog posts, articles, videos, and infographics that educate, engage, and drive consistent traffic."
        // 6. Brand Strategy & Online Positioning
        icon_6={FaRocket}
        title_6="Brand Strategy & Online Positioning"
        content_6="We help you develop a strong digital brand presence that stands out and stays memorable."
        // 7. Campaign Management
        icon_7={MdOutlineCampaign}
        title_7="Campaign Management"
        content_7="From political and fundraising campaigns to product launches and brand promotions, we handle everything from strategy to execution."
        // 8. Analytics & Conversion Optimization
        icon_8={SiGoogleanalytics}
        title_8="Analytics & Conversion Optimization"
        content_8="Track performance, understand user behavior, and fine-tune strategies to increase conversion rates."
      />

      <div className="flex flex-col md:flex-row justify-between bg-gray-50 gap-20 px-6 md:px-20  py-12">
        <PagesCtaProp
          header="Why Work With NETICOX HUB LTD?"
          title_1="Results-Focused"
          title_2="Cross-Sector Experience "
          title_3="Creative & Data-Driven "
          title_4="Transparent Reporting "
          title_5="Affordable Growth Packages"
          content_1=" Every campaign is built with KPIs that align with your business or impact goals."
          content_2="We’ve helped businesses, NGOs, and individuals get real results."
          content_3="We blend storytelling with analytics to create content that performs."
          content_4="Know what’s working with clear performance metrics and weekly reports."
          content_5="Scalable digital solutions tailored to your budget."
        />

        <div className="bg-white shadow-lg rounded-xl flex-1 p-8 space-y-6 border border-gray-100">
          <p className="text-xl font-semibold text-gray-800 leading-relaxed">
            Let’s Grow Your{" "}
            <span className="text-green-700">Digital Footprint</span>. Whether
            you're launching a new product, building a brand, or growing your
            cause, we’ll help you reach the right people online and turn them
            into loyal customers, supporters, or fans.
          </p>

          <button className="bg-gradient-to-r from-[#00ff9f] via-[#065f46] to-[#2e07f2] px-8 py-4 rounded-lg text-white font-medium shadow-md hover:shadow-lg hover:scale-[1.02] transition-transform">
            Schedule a free digital marketing strategy session with us today.
          </button>
        </div>
      </div>
    </div>
  );
};

export default DigitalMarketing;
