// import { HTMLIcon, CSSIcon, ECMAIcon, GitHubIcon, GitIcon } from "../../assets";
import React from "react";
import Slider from "react-slick";

const TextSlide = ({ clients }) => {
  const settings = {
    className: "slider variable-width",
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    variableWidth: true,
    arrows: false,
  };

  return (
    <div className="boxsizing-border-box overflow-hidden mt-[-60px]">
      <div className="my-12 lg:my-16 bg-green-600 w-[130%] ml-[-50px] border-[#fff] border-dashed border-t-4 border-b-4 py-4 rotate-[-4deg]">
        <Slider {...settings}>
          {clients.map((client, index) => (
            <div className="" key={index}>
              <h1 className="h-8 px-6 text-[1.8rem] lg:px-24  font-bold text-[#fff]">
                {client}
              </h1>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TextSlide;
