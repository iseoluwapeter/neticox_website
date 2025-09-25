import React from "react";
import Slider from "react-slick";
import HeroProp from "../components/HeroProp";
import CTAProp from "../components/CTAProp";
import ConsultingAreaProp from "../components/ConsultingAreaProp";
import { aboutus_image } from "../assets";
import { useEffect } from "react";

const Consulting = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    adaptiveHeight: true,
  };

  return (
    <div>
      {/* Hero Section */}
      <HeroProp
        image={aboutus_image}
        title="Consulting Services"
        description="At Neticox Hub, we go beyond training we work side by side with you to design strategies, solve challenges, and unlock growth opportunities. Whether you’re running an NGO, managing a business, or building a personal brand, our consulting services are tailored to meet your unique needs."
      />

      {/* Consulting Areas Slider */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-5">
          Our Consulting Areas
        </h2>
        <Slider {...settings}>
          {[
            {
              title: "Business Consulting",
              points: [
                "Business strategy and growth planning",
                "Market research and feasibility studies",
                "Branding & digital presence improvement",
                "Operations and workflow optimization",
              ],
            },
            {
              title: "NGO Consulting",
              points: [
                "NGO registration & compliance guidance",
                "Grant and donor engagement strategies",
                "Project design, monitoring & evaluation",
                "Fundraising and sustainability models",
              ],
            },
            {
              title: "Digital Consulting",
              points: [
                "Social media audits & growth strategies",
                "Digital marketing campaigns",
                "Website and app strategy support",
                "Online reputation management",
              ],
            },
            {
              title: "Personal & Career Consulting",
              points: [
                "Career growth strategies",
                "Productivity & time management systems",
                "Public speaking & personal branding",
                "Virtual assistance setup",
              ],
            },
          ].map((area, index) => (
            <div key={index} className="px-4 py-6">
              <div
                className="
        bg-gradient-to-r from-blue-600 to-green-500
        text-white rounded-2xl 
        p-8 md:p-5 
        flex flex-col items-center justify-center
        text-center
       
        
      "
              >
                <ConsultingAreaProp title={area.title} points={area.points} />
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Why Choose Us Section */}
      <section className="bg-gray-50 rounded-xl p-8  mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl font-bold text-blue-800 flex items-center justify-center gap-3 mb-6">
          {/* Optional Icon */}
          {/* <FaLightbulb className="text-yellow-500 w-8 h-8" /> */}
          Why Choose Our Consulting?
        </h2>

        {/* Ordered List */}
        <ol className="list-decimal list-inside text-gray-700 text-lg space-y-3">
          <li>Customized solutions for your specific challenges</li>
          <li>Experienced consultants with proven expertise</li>
          <li>Global best practices adapted to local realities</li>
          <li>Confidential and results-driven approach</li>
        </ol>
      </section>

      {/* Call to Action */}
      <CTAProp
        title="Let’s work together to achieve your goals."
        description="Book a consultation with our team today and start transforming your ideas into impact."
        buttonText="Book a Consultation"
        onClick={() => console.log("CTA Clicked!")}
      />
    </div>
  );
};

export default Consulting;
