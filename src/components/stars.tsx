import React from "react";

const Stars: React.FC = () => {
  const stars = Array.from({ length: 60 });

  return (
    <div className="absolute inset-5 bottom-45 lg:bottom-30 z-0 pointer-events-none">
      {stars.map((_, i) => {
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = 5 + Math.random() * 4;

        return (
          <div
            key={i}
            className="absolute w-[2px] h-[2px] bg-white rounded-full opacity-70 star"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
            }}
          />
        );
      })}
    </div>
  );
};

export default Stars;