import React from "react";
import HeroProp from "../components/HeroProp";
import { aboutus_image } from "../assets";
import PagesProp from "../components/PagesProp";
import {
  MdPalette,
  MdWeb,
  MdCampaign,
  MdSlideshow,
  MdPhoneIphone,
} from "react-icons/md";
import { FaChartPie, FaRegCalendarAlt, FaBoxOpen } from "react-icons/fa";
import { AiOutlineBook } from "react-icons/ai";
import PagesCtaProp from "../components/PagesCtaProp";
import { useEffect } from "react";

const GraphicsDesign = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <HeroProp
        image={aboutus_image}
        title="Graphics Design Services"
        description="Designs That Speak, Connect, and Convert"
      />

      <PagesProp
        intro1="At NETICOX HUB LTD, we don’t just design we tell your story visually. Whether you're a business looking to strengthen your brand identity, a nonprofit seeking to amplify your message, or an individual with a vision to bring to life we craft compelling designs that drive engagement and leave lasting impressions."
        intro2="Our creative team blends strategy, aesthetics, and innovation to deliver high-impact visuals across all platforms. From digital to print, we make sure your brand communicates with clarity, confidence, and class."
        services="Our Graphic Design Services"
        icon={MdPalette}
        title="Brand Identity Design"
        content="Logo design, brand color schemes, typography, and visual brand guidelines that reflect your uniqueness and professionalism."
        icon_2={MdWeb}
        title_2="Social Media Graphics"
        content_2="Eye-catching graphics for posts, stories, banners, and ads across platforms like Instagram, Facebook, Twitter, and LinkedIn."
        icon_3={MdCampaign}
        title_3="Marketing & Promotional Materials"
        content_3="Flyers, brochures, posters, business cards, roll-up banners, and other high-converting print or digital marketing assets."
        icon_4={MdSlideshow}
        title_4="Presentation Design"
        content_4="Stunning and persuasive PowerPoint/Google Slides pitch decks, proposals, or internal presentations."
        icon_5={MdPhoneIphone}
        title_5="Web & App UI Design"
        content_5="Beautiful, user-friendly interface designs for websites, mobile apps, and dashboards that enhance user experience and engagement."
        icon_6={FaChartPie}
        title_6="Infographic Design"
        content_6="Visually simplified data and complex information presented in engaging, easy-to-understand infographic formats."
        icon_7={FaRegCalendarAlt}
        title_7="Event & Campaign Designs"
        content_7="Custom designs for conferences, webinars, product launches, or fundraising campaigns — from invites to banners."
        icon_8={AiOutlineBook}
        title_8="E-book and Document Layouts"
        content_8="Professional layouts for reports, whitepapers, eBooks, and digital documents that are both readable and attractive."
        icon_9={FaBoxOpen}
        title_9="Packaging Design"
        content_9="Creative and functional packaging designs for physical products that stand out on shelves and reflect your brand values."
      />

      <div className="flex flex-col md:flex-row justify-between bg-gray-50 gap-20 px-6 md:px-20  py-12">
        <PagesCtaProp
          header="Why Choose NETICOX for Design?"
          title_1="Tailored Visuals"
          title_2="Multi-industry Experience"
          title_3="Fast Turnaround"
          title_4="Collaborative Process"
          title_5="Cutting-Edge Creativity"
          content_1="Every design is custom-made to match your brand personality and goal."
          content_2="We’ve worked with clients across sectors from nonprofits to tech startups."
          content_3="Quality design delivered on time, every time."
          content_4="Our vision + your goals = outstanding results."
          content_5="We leverage the latest trends and tools to create designs that remain fresh, impactful, and ahead of the curve."
        />

        <div className="bg-white shadow-lg rounded-xl flex-1 p-8 space-y-6 border border-gray-100">
          <p className="text-xl font-semibold text-gray-800 leading-relaxed">
            Let’s build the software that{" "}
            <span className="text-green-700">fuels your success</span>. From
            strategy and planning to deployment and long-term support, we’ll be
            your trusted technology partner every step of the way.
          </p>

          <button className="bg-gradient-to-r from-[#00ff9f] via-[#065f46] to-[#2e07f2] px-8 py-4 rounded-lg text-white font-medium shadow-md hover:shadow-lg hover:scale-[1.02] transition-transform">
            Book a Free Consultation & Bring Your Vision to Life
          </button>
        </div>
      </div>
    </>
  );
};

export default GraphicsDesign;
