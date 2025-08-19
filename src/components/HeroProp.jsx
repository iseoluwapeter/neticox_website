import React from "react";

const HeroProp = ({
  image,
  title,
  description,
  overlayColor = "bg-green-800",
  overlayOpacity = "opacity-60",
  height = "h-[500px]",
}) => {
  return (
    <div
      className={`relative ${height} bg-cover bg-center`}
      style={{ backgroundImage: `url(${image})` }}
    >
        
      {/* Green overlay only within hero section */}
      <div
        className={`absolute top-0 left-0 w-full h-full ${overlayColor} ${overlayOpacity} z-0`}
      ></div>

      {/* Centered content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center space-y-4 px-4">
        <h1 className="text-4xl font-bold text-white">{title}</h1>
        <p className=" text-white rounded-lg lg:max-w-5xl text-sm lg:text-xl">
          {description}
        </p>
      </div>
    </div>
  );
};

export default HeroProp;
