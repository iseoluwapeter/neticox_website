import React from "react";
import { aboutus_image } from "../assets";
import HeroProp from "../components/HeroProp";
import PagesProp from "../components/PagesProp";
import {
  MdBuild,
  MdWeb,
  MdPhoneIphone,
  MdBusiness,
  MdCloud,
  MdUpdate,
  MdSupportAgent,
} from "react-icons/md";
import { FaCubes, FaConnectdevelop } from "react-icons/fa";
import { BiRocket } from "react-icons/bi";
import PagesCtaProp from "../components/PagesCtaProp";
import { useEffect } from "react";

const SoftwareDev = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <HeroProp
        image={aboutus_image}
        title="Software Development"
        description="Software development is not longer a luxury but a real life problem solver. Building Smart, Scalable, and Purpose-Driven Software Solutions. We specialize in helping non-tech founders bring their software ideas to life."
      />

      <PagesProp
        intro1="Whether you're looking to build a medical, real estate, agriculture,
        education, or fashion app - even with zero coding or technical knowledge
        - we've got you covered. All you need is a passion for solving problems
        in any industry, and we’ll work with you to turn your idea into a fully
        functional application."
        intro2="At NETICOX HUB LTD, we turn ideas into intelligent software that solves
        real-world problems. Whether you're a business streamlining operations,
        a nonprofit amplifying impact, or an individual launching a tech idea we
        build custom software tailored to your goals. From web platforms to
        enterprise applications and everything in between, our team is equipped
        to design, develop, and deploy software that is secure, scalable, and
        user-friendly. We don’t just code, we collaborate, innovate, and
        deliver."
        services="Our Software Development Services"
        icon={MdBuild}
        title="Custom Software Development"
        content="Tailored solutions built from scratch to meet your organization’s unique needs, workflows, and goals."
        icon_2={MdWeb}
        title_2="Web Application Development"
        content_2="Robust, interactive, and scalable web platforms for businesses, NGOs, and startups across any industry."
        icon_3={MdPhoneIphone}
        title_3="Mobile App Development"
        content_3="Android and iOS applications designed with seamless performance, modern UI, and optimal user experience."
        icon_4={MdBusiness}
        title_4="Enterprise Software Solutions"
        content_4="Advanced systems for internal operations like inventory, HR, finance, CRM, or supply chain management."
        icon_5={FaCubes}
        title_5="SaaS Product Development"
        content_5="We help you build and launch your own Software-as-a-Service platforms — from concept to code."
        icon_6={BiRocket}
        title_6="MVP & Prototype Development"
        content_6="For startups or innovators who need a Minimum Viable Product to test and validate their ideas quickly."
        icon_7={FaConnectdevelop}
        title_7="API Development & Integration"
        content_7="Custom APIs and third-party integrations to connect your systems and expand functionality."
        icon_8={MdCloud}
        title_8="Cloud-Based Software Solutions"
        content_8="Modern, scalable, and secure applications hosted on cloud platforms like AWS, Azure, or GCP."
        icon_9={MdUpdate}
        title_9="Legacy Software Modernization"
        content_9="We help upgrade, refactor, or rebuild outdated software systems for improved performance and security."
        icon_10={MdSupportAgent}
        title_10="Software Maintenance & Support"
        content_10="Ongoing bug fixes, upgrades, monitoring, and technical support to ensure your software remains effective and secure."
      />

      <div className="flex flex-col md:flex-row justify-between bg-gray-50 gap-20 px-6 md:px-20  py-12">
        <PagesCtaProp
          header="Why Partner with NETICOX HUB for Software Development?"
          title_1="Business-Driven Development"
          title_2="Cross-Industry Expertise"
          title_3="Agile, Transparent Process"
          title_4="Security & Compliance"
          title_5="Future-Ready Solutions"
          content_1="Every feature is designed to align with your strategic business goals."
          content_2="From fintech to nonprofits, we craft solutions that create measurable impact."
          content_3="An open, iterative process keeps you informed and in control at every stage."
          content_4="We follow industry-leading practices in data security, encryption, and compliance."
          content_5="Our tech stack evolves with your needs, ensuring your solution stays relevant."
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
    </div>
  );
};

export default SoftwareDev;
