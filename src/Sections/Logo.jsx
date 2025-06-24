import React from "react";

const MovingLogos = () => {
  const logos = [
    "https://via.placeholder.com/100x50?text=Logo1",
    "https://via.placeholder.com/100x50?text=Logo2",
    "https://via.placeholder.com/100x50?text=Logo3",
    "https://via.placeholder.com/100x50?text=Logo4",
    "https://via.placeholder.com/100x50?text=Logo5",
    "https://via.placeholder.com/100x50?text=Logo6",
    "https://via.placeholder.com/100x50?text=Logo7",
    "https://via.placeholder.com/100x50?text=Logo8",
    "https://via.placeholder.com/100x50?text=Logo9",
    "https://via.placeholder.com/100x50?text=Logo10",
  ];

  return (
    <div className="relative overflow-hidden bg-black py-10">
      {/* Scrolling container */}
      <div className="flex w-max animate-scroll gap-10">
        {[...logos, ...logos].map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`logo-${index}`}
            className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition"
          />
        ))}
      </div>

      {/* Inline Tailwind animation styles */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .animate-scroll {
            animation: scroll 50s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default MovingLogos;
