import React from "react";
import HeroProp from "../components/HeroProp";
import { aboutus_image } from "../assets";
import PagesProp from "../components/PagesProp";
import {
  MdOutlineAutoFixHigh,
  MdBrush,
  MdOutlineSmartToy,
  MdOutlineModelTraining,
} from "react-icons/md";
import { FaRobot, FaBalanceScale } from "react-icons/fa";
import PagesCtaProp from "../components/PagesCtaProp";
import { useEffect } from "react";

const ArtificialInt = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <HeroProp
        image={aboutus_image}
        title="SArtificial Intelligence - (AI) Solutions"
        description="Empowering You with Smart, Scalable, and Future-Driven AI Technologies"
      />

      <PagesProp
        intro1="At NETICOX HUB LTD, we help organizations harness the full potential of Artificial Intelligence from automation to innovation. Whether you're a business looking to streamline operations, a nonprofit needing intelligent data tools, or a creator wanting to build with cutting-edge AI, we deliver intelligent solutions that transform ideas into impact."
        intro2="We don’t just build or design AI solutions — we create human-centered, responsible, and game-changing intelligence systems tailored to your needs."
        services="Our AI Services Include"
        icon={MdOutlineAutoFixHigh}
        title="AI Strategy & Consulting"
        content="Discover where AI fits in your business or organization and build a roadmap aligned with your vision."
        icon_2={MdBrush}
        title_2="Generative AI Solutions"
        content_2="Leverage AI models like GPT, DALL·E, and similar technologies to generate high-quality text, images, audio, or video. Perfect for content creation, marketing, automation, and innovation."
        icon_3={MdOutlineSmartToy}
        title_3="Agentic AI Systems"
        content_3="We design AI agents that go beyond simple tasks — they can reason, plan, adapt, and act autonomously to complete complex, multi-step goals. Ideal for workflow automation, customer service, operations, and enterprise tasks."
        icon_4={MdOutlineModelTraining}
        title_4="Custom AI Model Development"
        content_4="Train and deploy machine learning and deep learning models tailored to your specific business or social impact goals."
        icon_5={FaRobot}
        title_5="Chatbots & Virtual Assistants"
        content_5="Automate interactions using intelligent chatbots powered by NLP and agentic AI, available 24/7 to assist, guide, and serve users."
        icon_6={FaBalanceScale}
        title_6="Ethical AI & Data Governance"
        content_6="We help you build responsible AI systems with built-in fairness, bias detection, and data privacy compliance."
      />

      <div className="flex flex-col md:flex-row justify-between bg-gray-50 gap-20 px-6 md:px-20  py-12">
        <PagesCtaProp
          header="Why Choose NETICOX HUB LTD for AI?"
          title_1="Human-Centered AI"
          title_2="Advanced Technologies"
          title_3="Cross-Sector Intelligence"
          title_4="Security & Scalability"
          title_5="Practical, Ethical & Impactful "
          content_1=" Solutions that empower people, not replace them."
          content_2="We stay ahead with the latest in Generative AI and Agentic AI."
          content_3="We apply AI in business, health, education, nonprofit, agriculture, and more."
          content_4="Enterprise-grade security with scalable infrastructure."
          content_5="We deliver real-world results with ethical guardrails."
        />

        <div className="bg-white shadow-lg rounded-xl flex-1 p-8 space-y-6 border border-gray-100">
          <p className="text-xl font-semibold text-gray-800 leading-relaxed">
            Ready to Innovate with AI?Whether you want to boost productivity,
            launch intelligent platforms, or explore next-gen AI capabilities
            like autonomous agents and content generators. NETICOX HUB LTD is
            your trusted partner.Schedule a free strategy session today and
            let's design the AI solution that fits your future.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArtificialInt;
