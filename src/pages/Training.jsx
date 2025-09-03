import React from "react";
import Slider from "react-slick";
import HeroProp from "../components/HeroProp";
import IncubationProp from "../components/IncubationProp";
import CTAProp from "../components/CTAProp";
import ConsultingAreaProp from "../components/ConsultingAreaProp";
import { aboutus_image } from "../assets";
import { FaLightbulb } from "react-icons/fa";

const Training = () => {
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
        title="Training & Capacity Building"
        description="At Neticox Hub, we believe that knowledge is the foundation of growth. That’s why we offer practical, result-driven training programs designed to empower individuals, NGOs, and businesses with the skills they need to succeed in today’s competitive world."
      />

      {/* Consulting Areas Slider */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-5">
          Our Training Programs
        </h2>
        <Slider {...settings}>
          {[
            {
              title: "Business Development Training",
              points: [
                "Entrepreneurship and startup guidance",
                "Business proposal & grant writing",
                "Strategic planning & growth models",
                "Financial literacy and management",
              ],
            },
            {
              title: "Digital Skills Training",
              points: [
                "Social media management",
                "Digital marketing & branding",
                "Content creation and storytelling",
                "Web and app development basics",
              ],
            },
            {
              title: "Professional Development Training",
              points: [
                "Leadership & management skills",
                "Virtual assistance & remote work skills",
                "Communication & public speaking",
                "Time management & productivity",
              ],
            },
            {
              title: "NGO & Community Training",
              points: [
                "NGO setup and management",
                "Fundraising strategies",
                "Project monitoring & evaluation",
                "Community impact programs",
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
          Why Train With Us?
        </h2>

        {/* Ordered List */}
        <ol className="list-none list-inside text-gray-700 text-lg space-y-3">
          <li>✔ Expert trainers with real-world experience</li>
          <li>✔ Flexible online and offline training options</li>
          <li>✔ Training tailored to your goals and industry</li>
          <li>✔ Certification upon completion</li>
          <li>✔ Hands-on, practical learning</li>
        </ol>
      </section>

      {/* Call to Action */}
      <CTAProp
        title="Ready to upgrade your skills?"
        description="Join our upcoming training sessions and take the next step toward success."
        buttonText="Register for Training"
        onClick={() => console.log("CTA Clicked!")}
      />
    </div>
  );
};

export default Training;
