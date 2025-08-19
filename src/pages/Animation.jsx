import React from "react";
import HeroProp from "../components/HeroProp";
import { aboutus_image } from "../assets";
import PagesProp from "../components/PagesProp";
import PagesCtaProp from "../components/PagesCtaProp";
import { MdMovie, MdViewInAr } from "react-icons/md";
import {
  FaChalkboardTeacher,
  FaPhotoVideo,
  FaCalendarAlt,
} from "react-icons/fa";
import { GiFilmProjector, GiArchitectMask } from "react-icons/gi";
import {
  RiCharacterRecognitionLine,
  RiCustomerService2Fill,
} from "react-icons/ri";
import { useEffect } from "react";



const Animation = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <HeroProp
        image={aboutus_image}
        title="2D/3D Animation Services"
        description="Bringing Ideas to Life Through Motion, Story, and Visual Impact"
      />

      <PagesProp
        intro1="At NETICOX HUB LTD, we transform complex concepts into captivating animations that inspire, explain, and convert. Whether you’re promoting a product, simplifying an idea, or telling your brand’s story, our 2D and 3D animation services make your message unforgettable."
        intro2="From startups to NGOs and creatives, we work across industries to craft powerful visual experiences that move people and drive action."
        services="Our 2D & 3D Animation Services"
        icon={MdMovie}
        title="Explainer Videos (2D/3D)"
        content="Clear, concise, and engaging animations that explain your product, service, or idea in under 2 minutes."
        icon_2={GiFilmProjector}
        title_2="Brand Story Animations"
        content_2="Tell your brand’s journey or mission in a compelling animated format that connects emotionally with your audience."
        icon_3={MdViewInAr} // replaced Gi3DGlasses
        title_3="Product Animations"
        content_3="Highlight your product’s features, benefits, or functionality with stunning 3D product demos or animations."
        icon_4={FaChalkboardTeacher}
        title_4="Educational & Training Animations"
        content_4="Create interactive and engaging training materials for staff, students, or community education."
        icon_5={FaPhotoVideo}
        title_5="Social Media Animations"
        content_5="Motion graphics, animated reels, and short videos that boost engagement across your social platforms."
        icon_6={GiArchitectMask}
        title_6="Architectural Visualization (3D)"
        content_6="Bring your real estate or design project to life with photorealistic 3D renderings and walkthroughs."
        icon_7={FaCalendarAlt}
        title_7="Event & Campaign Animations"
        content_7="Animated countdowns, promo videos, or motion invites for conferences, product launches, and fundraising events."
        icon_8={RiCharacterRecognitionLine}
        title_8="Character Animation"
        content_8="Original character-based stories or branded mascots that entertain and educate your audience."
        icon_9={RiCustomerService2Fill}
        title_9="Logo Animations"
        content_9="Add motion to your logo for intros, outros, presentations, or online content."
      />

      <div className="flex flex-col md:flex-row justify-between bg-gray-50 gap-20 px-6 md:px-20  py-12">
        <PagesCtaProp
          header="Why Choose NETICOX for Animation"
          title_1="Creative Storytelling"
          title_2="Professional-Grade Tools"
          title_3="High Quality, Fast Turnaround"
          title_4="Custom for Every Client"
          title_5="Voiceover & Sound Design"
          content_1="We don't just animate; we communicate your message with purpose."
          content_2="Powered by industry-standard software like Blender, Adobe After Effects, Maya, etc."
          content_3="We meet deadlines without compromising visual excellence."
          content_4="Whether corporate, nonprofit, or individual — we tailor every animation to your goals."
          content_5="Optional professional voiceovers and sound effects to enhance storytelling."
        />

        <div className="bg-white shadow-lg rounded-xl flex-1 p-8 space-y-6 border border-gray-100">
          <p className="text-xl font-semibold text-gray-800 leading-relaxed">
            Ready to Animate Your Vision? From{" "}
            <span className="text-green-700">
              concept to storyboard to final animation.
            </span>{" "}
            NETICOX HUB LTD is your trusted partner for bringing ideas to life
            through the power of motion.
          </p>

          <button className="bg-gradient-to-r from-[#00ff9f] via-[#065f46] to-[#2e07f2] px-8 py-4 rounded-lg text-white font-medium shadow-md hover:shadow-lg hover:scale-[1.02] transition-transform">
            Let’s talk about your next animated project today.
          </button>
        </div>
      </div>
    </>
  );
};

export default Animation;
