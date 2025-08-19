import React from "react";
import Slider from "react-slick";

import { Slide_1, Slide_2, Slide_3 } from "../assets";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Slide data with richer content
const slides = [
  {
    title: "Empowering a Digital Nigeria",
    subtitle:
      "Driving transformation with technology, innovation, and human-centered solutions.",
    description:
      "From startups to enterprises, we provide the digital tools and expertise to help businesses thrive in a fast-changing world.",
    image: Slide_1,
    cta: { label: "Discover Our Solutions", link: "/solutions" },
  },
  {
    title: "Tech Meets Data Intelligence",
    subtitle: "Seamless integration of development, analytics, and automation.",
    description:
      "We combine cutting-edge software engineering with data-driven insights to solve real African challenges in finance, health, and education.",
    image: Slide_2,
    cta: { label: "Learn How We Work", link: "/aboutus" },
  },
  {
    title: "Innovation for Small Businesses",
    subtitle: "Affordable, scalable, and tailored solutions for SMEs.",
    description:
      "From websites and apps to business automation and AI, we help Nigerian SMEs compete globally while focusing on what matters most — growth.",
    image: Slide_3,
    cta: { label: "Get Started Today", link: "/contact" },
  },
];

// Custom arrow components
const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20 bg-white/70 hover:bg-white text-gray-800 p-2 rounded-full shadow"
  >
    <FaChevronLeft />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20 bg-white/70 hover:bg-white text-gray-800 p-2 rounded-full shadow"
  >
    <FaChevronRight />
  </button>
);

const Hero = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 700,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div
              key={index}
              className="relative h-[70vh] md:h-[90vh] bg-gray-900 text-white"
            >
              {/* Background image */}
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />

              {/* Overlay (gradient for better text contrast) */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>

              {/* Text content */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 z-10">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-2xl max-w-xl drop-shadow-md">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Hero;
