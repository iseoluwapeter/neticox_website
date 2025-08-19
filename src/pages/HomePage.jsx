import React from "react";
import Hero from "../components/Hero";
import HomeInfo from "../components/HomeInfo";
import HomeAbout from "../components/HomeAbout";
import HomeServices from "../components/HomeServices";
import WhyChooseUs from "../components/WhyChooseUs";
import Reviews from "../components/Reviews";
import FAQ from "../components/FAQ";
import { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);


  return (
    <div>
      <Hero />
      <HomeInfo />
      {/* <HomeSteps/> */}
      <HomeAbout />
      <HomeServices />
      <WhyChooseUs />
      <Reviews />
      <FAQ />
    </div>
  );
};

export default HomePage;
