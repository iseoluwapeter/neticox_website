import React from "react";
import HeroProp from "../components/HeroProp";
import { aboutus_image } from "../assets";
import PagesProp from "../components/PagesProp";
import { MdSettingsSuggest, MdCampaign, MdGroups } from "react-icons/md";
import {
  FaHandshake,
  FaMoneyCheckAlt,
  FaShoppingCart,
  FaHandsHelping,
  FaBrain,
  FaProjectDiagram,
} from "react-icons/fa";
import { BiBarChartAlt2 } from "react-icons/bi";
import PagesCtaProp from "../components/PagesCtaProp";
import { useEffect } from "react";

const BusinessAuto = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <HeroProp
        image={aboutus_image}
        title="Business Automation"
        description="Work Smarter, Not Harder. Automate Your Operations and Scale with Ease"
      />

      <PagesProp
        intro1="Manual tasks are slowing businesses down. At NETICOX HUB LTD, we help you unlock new levels of productivity through smart, streamlined business automation."
        intro2="Whether you're running a growing company, managing a nonprofit, or leading a team of professionals our automation solutions eliminate repetitive work, reduce errors, reduce cost, human congestion and free up time so you can focus on what truly matters: growth, strategy, and impact."
        services="Our Business Automation Services"
        icon={MdSettingsSuggest}
        title="Workflow Automation"
        content="Design and implement systems that automate your day-to-day operations, from onboarding to approvals, task assignments, and more."
        icon_2={FaHandshake}
        title_2="CRM & Sales Automation"
        content_2="Automate customer engagement, lead tracking, follow-ups, and sales pipelines using tools like HubSpot, Zoho, or custom-built CRMs."
        icon_3={MdCampaign}
        title_3="Marketing Automation"
        content_3="Launch and manage email campaigns, social media posts, and customer journeys with minimal manual effort."
        icon_4={FaMoneyCheckAlt}
        title_4="Finance & Accounting Automation"
        content_4="Simplify invoicing, payroll, budgeting, and financial reporting with automated solutions that sync seamlessly with your operations."
        icon_5={MdGroups}
        title_5="HR & Employee Management Automation"
        content_5="Automate staff onboarding, timesheets, leave requests, and performance reviews to reduce administrative burden."
        icon_6={BiBarChartAlt2}
        title_6="Data Collection & Reporting Automation"
        content_6="Get real-time insights with automated dashboards, analytics, and reporting systems, no more manual data entry."
        icon_7={FaShoppingCart}
        title_7="E-commerce Automation"
        content_7="Streamline product listings, inventory tracking, order fulfillment, customer communication, and returns."
        icon_8={FaHandsHelping}
        title_8="Nonprofit Process Automation"
        content_8="Automate donor communications, project tracking, volunteer management, and impact reporting, all in one place."
        icon_9={FaBrain}
        title_9="AI-Powered Intelligent Automation"
        content_9="Use AI and machine learning to create smart workflows that can learn, adapt, and make decisions on your behalf."
        icon_10={FaProjectDiagram}
        title_10="Integration of Tools & Platforms"
        content_10="We connect your existing tools (like Google Workspace, Slack, WhatsApp, Excel, Trello, etc.) to work seamlessly together through custom automation."
      />

      <div className="flex flex-col md:flex-row justify-between bg-gray-50 gap-20 px-6 md:px-20  py-12">
        <PagesCtaProp
          header="Why NETICOX HUB LTD"
          title_1="Results-Oriented"
          title_2="Affordable & Scalable"
          title_3="Cross-Platform Expertise"
          title_4="User-Friendly Systems"
          title_5="Ongoing Support"
          content_1="We design automation around your actual business goals."
          content_2="Start small, grow fast, without breaking the bank."
          content_3="We work with cloud tools, APIs, no-code platforms, and custom scripts."
          content_4="Easy to manage and built to empower your team, not complicate things."
          content_5="We don’t disappear after deployment. We train, support, and optimize."
        />

        <div className="bg-white shadow-lg rounded-xl flex-1 p-8 space-y-6 border border-gray-100">
          <p className="text-xl font-semibold text-gray-800 leading-relaxed">
            Ready to Automate and Accelerate? It’s time to reduce manual work,
            cut costs, and scale faster, without increasing workload. Book a
            free automation audit today and let NETICOX HUB LTD simplify your
            business.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BusinessAuto;
