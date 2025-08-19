import React from "react";
import HeroProp from "../components/HeroProp";
import { aboutus_image } from "../assets";
import PagesProp from "../components/PagesProp";
import PagesCtaProp from "../components/PagesCtaProp";

import {
  FaSearch,
  FaLightbulb,
  FaDraftingCompass,
  FaPalette,
  FaCubes,
  FaIndustry,
  FaCog,
  FaBoxOpen,
} from "react-icons/fa";
import { useEffect } from "react";

const ProductDesign = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <HeroProp
        image={aboutus_image}
        title="Product Design"
        description="From Concept to Creation. Designing Products That Solve Real Problems"
      />

      <PagesProp
        intro1="At NETICOX HUB LTD, product design is more than aesthetics — it’s about creating meaningful solutions that users love and businesses succeed with. Whether you're launching a new physical product, digital platform, or service experience, our design process ensures your ideas are user-centered, innovative, and market-ready."
        intro2="We combine research, creativity, and technical expertise to build products that balance functionality, usability, and beauty."
        services="Our Product Design Services"
        // 1. User Research & Analysis
        icon={FaSearch}
        title="User Research & Analysis"
        content="Understand your target audience, market needs, and competitor landscape through deep research and user insights."
        // 2. Concept Development & Ideation
        icon_2={FaLightbulb}
        title_2="Concept Development & Ideation"
        content_2="Collaborate to generate and refine ideas into feasible, innovative product concepts."
        // 3. User Experience (UX) Design
        icon_3={FaDraftingCompass}
        title_3="User Experience (UX) Design"
        content_3="Design intuitive, seamless experiences that solve user pain points and enhance satisfaction."
        // 4. User Interface (UI) Design
        icon_4={FaPalette}
        title_4="User Interface (UI) Design"
        content_4="Create visually engaging and easy-to-use interfaces for digital products like apps and web platforms for industries like Web 3, Finance, Health/Medical, Agriculture and other traditional industries."
        // 5. Prototyping & Testing
        icon_5={FaCubes}
        title_5="Prototyping & Testing"
        content_5="Develop interactive prototypes for early feedback and iterative improvements."
        // 6. Industrial & Physical Product Design
        icon_6={FaIndustry}
        title_6="Industrial & Physical Product Design"
        content_6="Design ergonomic, functional, and appealing physical products — from sketches to CAD models."
        // 7. Design for Manufacturing & Production
        icon_7={FaCog}
        title_7="Design for Manufacturing & Production"
        content_7="Optimize your product designs for efficient, cost-effective manufacturing and quality control."
        // 8. Product Branding & Packaging Design
        icon_8={FaBoxOpen}
        title_8="Product Branding & Packaging Design"
        content_8="Create cohesive product identities and packaging that attract customers and reflect your brand values."
      />

      <div className="flex flex-col md:flex-row justify-between bg-gray-50 gap-20 px-6 md:px-20  py-12">
        <PagesCtaProp
          header="Why Choose NETICOX HUB LTD for Product Design?"
          title_1="User-Centered Approach"
          title_2="Cross-Industry Experience "
          title_3="Collaborative & Transparent"
          title_4="End-to-End Support"
          title_5="Innovative & Practical"
          content_1="Your customers are at the heart of everything we design."
          content_2="From tech startups to nonprofits, we design products that resonate."
          content_3=" Work closely with our team at every stage for the best results."
          content_4="From concept through production, we guide your product’s journey."
          content_5="We blend creativity with real-world feasibility and scalability."
        />

        <div className="bg-white shadow-lg rounded-xl flex-1 p-8 space-y-6 border border-gray-100">
          <p className="text-xl font-semibold text-gray-800 leading-relaxed">
            Ready to Design Products That Make a Difference in your Industry{" "}
            <span className="text-green-700">Bring your ideas to life</span>{" "}
            with NETICOX HUB LTD’s expert product design team.
          </p>

          <button className="bg-gradient-to-r from-[#00ff9f] via-[#065f46] to-[#2e07f2] px-8 py-4 rounded-lg text-white font-medium shadow-md hover:shadow-lg hover:scale-[1.02] transition-transform">
            Get in touch today to start your product design journey.
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductDesign;
