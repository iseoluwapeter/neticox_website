import React from "react";
import HeroProp from "../components/HeroProp";
import { aboutus_image } from "../assets";
import PagesProp from "../components/PagesProp";
import {

  MdRouter,
  MdDevices,
  MdPolicy,
  MdCloud,
  MdRestore,
} from "react-icons/md";
import { FaLock, FaUserShield, FaShieldAlt } from "react-icons/fa";
import { BiShieldQuarter } from "react-icons/bi";
import {  RiSecurePaymentLine } from "react-icons/ri";
import PagesCtaProp from "../components/PagesCtaProp";
import { useEffect } from "react";

const Cybersecurity = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <HeroProp
        image={aboutus_image}
        title="Cybersecurity Services"
        description="Protect What Matters: Your Data, Systems, and Reputation"
      />

      <PagesProp
        intro1="Imagine you wake up and realize your business has been attacked by cyber criminals - you lose your funds, data, resources, and business or personal information to hackers.

        In an era of rising cyber threats, one data breach can cost you everything — from customer trust to business continuity. At NETICOX HUB LTD, we provide comprehensive cybersecurity solutions designed to safeguard your organization against digital attacks, internal threats, and system vulnerabilities."
        intro2="Whether you're a growing business, a nonprofit handling sensitive information, or an individual managing critical data, we help you stay safe, compliant, and prepared."
        services="Our Cybersecurity Services"
        icon={BiShieldQuarter}
        title="Vulnerability Assessment & Penetration Testing (VAPT)"
        content="Identify weaknesses in your systems, networks, and applications before hackers do. We simulate real-world attacks to find and fix vulnerabilities."
        icon_2={MdRouter}
        title_2="Network Security Management"
        content_2="Secure your entire network infrastructure with firewalls, intrusion detection systems (IDS), and secure access protocols."
        icon_3={MdDevices}
        title_3="Endpoint Protection & Antivirus Solutions"
        content_3="Protect all devices (laptops, servers, mobile phones) with enterprise-grade antivirus, anti-malware, and monitoring solutions."
        icon_4={MdPolicy}
        title_4="Cybersecurity Audit & Compliance"
        content_4="Get a full assessment of your current cybersecurity posture and align with standards like ISO 27001, GDPR, or industry-specific policies."
        icon_5={FaLock}
        title_5="Data Encryption & Secure Communication"
        content_5="Ensure that your sensitive data stays private — in transit and at rest — using advanced encryption protocols."
        icon_6={RiSecurePaymentLine}
        title_6="Cybersecurity Awareness Training"
        content_6="Train your staff or team to identify phishing scams, social engineering tactics, and bad digital habits with tailored awareness programs."
        icon_7={MdCloud}
        title_7="Cloud Security Services"
        content_7="Secure your cloud-hosted apps, data, and infrastructure on platforms like AWS, Azure, and Google Cloud."
        icon_8={MdRestore}
        title_8="Incident Response & Recovery"
        content_8="In case of a cyber attack, we act fast. Our experts contain the threat, restore your systems, and minimize damage."
        icon_9={FaUserShield}
        title_9="Identity & Access Management (IAM)"
        content_9="Control who accesses what in your system with multi-factor authentication (MFA), role-based access, and session monitoring."
        icon_10={FaShieldAlt}
        title_10="Website Security & Monitoring"
        content_10="Protect your site from attacks like DDoS, SQL injection, malware, and data theft — plus 24/7 uptime and vulnerability monitoring."
      />

      <div className="flex flex-col md:flex-row justify-between bg-gray-50 gap-20 px-6 md:px-20  py-12">
        <PagesCtaProp
          header="Why NETICOX HUB LTD?"
          title_1="Proactive Protection"
          title_2=" Enterprise-Grade Tools"
          title_3="Cross-Industry Expertise"
          title_4="Affordable & Scalable"
          title_5="Complete Confidentiality"
          content_1="Every feature is designed to align with your strategic business goals."
          content_2="We use the same tools trusted by top global security teams."
          content_3="We secure systems across corporate, nonprofit, and individual use cases."
          content_4="Our solutions grow with your organization."
          content_5="Your data is your business, we help keep it that way."
        />

        <div className="bg-white shadow-lg rounded-xl flex-1 p-8 space-y-6 border border-gray-100">
          <p className="text-xl font-semibold text-gray-800 leading-relaxed">
            Don’t Wait for a Cyber Attack - Be Ready One click can cost a
            company multi millions. Get expert cybersecurity protection from a
            team you can trust.
          </p>

          <button className="bg-gradient-to-r from-[#00ff9f] via-[#065f46] to-[#2e07f2] px-8 py-4 rounded-lg text-white font-medium shadow-md hover:shadow-lg hover:scale-[1.02] transition-transform">
            Book a Free Consultation & Bring Your Vision to Life
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cybersecurity;
