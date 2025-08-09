import React from "react";

const logos = [
  "/images/logo1.svg",
  "/images/logo2.svg",
  "/images/logo3.svg",
  "/images/logo4.svg",
  "/images/logo5.svg",
  "/images/logo6.svg",
  "/images/logo6.svg",
];

const LogoCarousel: React.FC = () => {
  return (
    <div className="relative overflow-hidden py-4">
      {/* فید محو چپ و راست */}
      <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-[rgb(3,0,20)] to-transparent z-10" />
      <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-[rgb(3,0,20)] to-transparent z-10" />

      {/* ریل اسلایدر */}
      <div className="flex gap-16 animate-[scroll_20s_linear_infinite] whitespace-nowrap">
        {[...logos, ...logos].map((logo, i) => (
          <img
            key={i}
            src={logo}
            alt={`logo-${i}`}
            className="w-auto inline-block"
          />
        ))}
      </div>
    </div>
  );
};

export default LogoCarousel;