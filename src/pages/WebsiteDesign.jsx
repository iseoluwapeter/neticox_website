import React from "react";
import {
  MdBusinessCenter,
  MdPublic,
  MdShoppingCart,
  MdWeb,
} from "react-icons/md";
import { FaAddressCard, FaBloggerB, FaSyncAlt } from "react-icons/fa";
import { AiOutlineAppstore } from "react-icons/ai";
import { RiCustomerService2Fill } from "react-icons/ri";
import HeroProp from "../components/HeroProp";
import { aboutus_image } from "../assets";
import PagesProp from "../components/PagesProp";
import PagesCtaProp from "../components/PagesCtaProp";
import { useEffect } from "react";

const WebsiteDesign = () => {
   useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

  return (
    <div>
      <HeroProp
        image={aboutus_image}
        title="Website Design Services"
        description="We Build Websites That Do More Than Look Good - But Magical! Need a dynamic website that don't just look good but classy and swift? Look no further."
      />

      <PagesProp
        intro1="In today’s digital world, your website is your first impression, your storefront, and your sales team, all in one. Our experienced team, design websites that don’t just exist, they perform and convert based on your conversion objectives."
        intro2="Whether you're a business, nonprofit, or individual, our websites are tailored to your story, capture your audience, and drive results. From sleek landing pages to robust platforms, we build with strategy, speed, and style."
        services="Our Website Design Services"
        icon={MdBusinessCenter}
        title="Business Website Design"
        content="Professional, responsive websites tailored for corporate brands, startups, and SMEs. Clean, fast, and functional."
        icon_2={MdPublic}
        title_2="Nonprofit & NGO Websites"
        content_2="Mission-driven designs that help you gain visibility, attract donors, and showcase your impact."
        icon_3={MdShoppingCart}
        title_3="E-commerce Website Design"
        content_3="Sell smarter with fully functional online stores integrated with secure payment gateways, shipping, and inventory systems."
        icon_4={MdWeb}
        title_4="Landing Page Design"
        content_4="High-converting landing pages for product launches, lead generation, or campaign promotions."
        icon_5={FaAddressCard}
        title_5="Personal/Portfolio Websites"
        content_5="Let your personal brand shine through with a customized online portfolio or CV-style website."
        icon_6={FaBloggerB}
        title_6="Blog & Media Websites"
        content_6="Designed for content creators, authors, and media-focused platforms with SEO, mobile-friendliness, and beautiful layouts."
        icon_7={FaSyncAlt}
        title_7="Web Redesign & Optimization"
        content_7="Already have a website? We help you revamp, restructure, and optimize for better user experience and higher performance."
        icon_8={AiOutlineAppstore}
        title_8="UI/UX Design for Web Apps"
        content_8="Custom user interface and experience design for startups, platforms, and digital products — tailored for user engagement."
        icon_9={RiCustomerService2Fill}
        title_9="Website Maintenance & Support"
        content_9="We don’t just build and disappear. Get ongoing support, updates, backups, security and performance monitoring."
      />

      <div className="flex flex-col md:flex-row justify-between bg-gray-50 gap-20 px-6 md:px-20  py-12">
        <PagesCtaProp
          header="Why Clients Choose NETICOX HUB LTD"
          title_1="Mobile-First & Responsive"
          title_2="SEO & Speed Optimized"
          title_3="Custom Designs"
          title_4="Conversion Focused"
          title_5="Secure & Scalable"
          content_1="Looks perfect on phones, tablets, and desktops."
          content_2="Built to rank, load fast, and keep visitors engaged."
          content_3="No templates. Every design reflects your brand identity."
          content_4="We build with your goals in mind - leads, sales, signups."
          content_5="From SSL to backups, we ensure your site is safe and ready to grow."
        />

        <div className="bg-white shadow-lg rounded-xl flex-1 p-8 space-y-6 border border-gray-100">
          <p className="text-xl font-semibold text-gray-800 leading-relaxed">
            Ready to Build Your{" "}
            <span className="text-green-700">Digital Presence With Us?</span>{" "}
            Whether you're starting from scratch or need a redesign, we’re here
            to help you succeed online.
          </p>

          <button className="bg-gradient-to-r from-[#00ff9f] via-[#065f46] to-[#2e07f2] px-8 py-4 rounded-lg text-white font-medium shadow-md hover:shadow-lg hover:scale-[1.02] transition-transform">
            Contact us today to schedule a free website consultation.
          </button>
        </div>
      </div>
    </div>
  );
};

export default WebsiteDesign;
