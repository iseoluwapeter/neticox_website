import React from "react";
import Hero from "../components/Hero";
import HomeInfo from "../components/HomeInfo";
import HomeAbout from "../components/HomeAbout";
import HomeServices from "../components/HomeServices";
import WhyChooseUs from "../components/WhyChooseUs";
import Reviews from "../components/Reviews";
import FAQ from "../components/FAQ";
import { useEffect, useState } from "react";
import TextSlide from "../components/TextSlide";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [selectedService, setSelectedService] = useState(null);

  return (
    <div>
      <Hero />
      <HomeInfo />
      {/* <HomeSteps/> */}
      <HomeAbout />
      <TextSlide
        clients={[
          "SOFTWARE SOLUTIONS",
          "GRAPHIC DESIGN",
          "BUSINESS AUTOMATION",
          "BUSINESS PROPOSAL",
          "2D/3D DESIGN",
        ]}
      />
      <HomeServices />
      <WhyChooseUs />
      <Reviews />
      <FAQ />
    </div>
  );
};

export default HomePage;
