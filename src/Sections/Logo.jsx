import React from "react";

const MovingLogos = () => {
  const logos = [
    "https://ik.imagekit.io/priyanshu08/assets/startups.png?updatedAt=1750823186507",
    "https://ik.imagekit.io/priyanshu08/assets/logo1.png?updatedAt=1750777502011",
    "https://ik.imagekit.io/priyanshu08/assets/aws.png?updatedAt=1750777960406",
    "https://ik.imagekit.io/priyanshu08/assets/genomics.png?updatedAt=1750778244794",
    "https://ik.imagekit.io/priyanshu08/assets/microsoft.png?updatedAt=1750823623563",
    "https://ik.imagekit.io/priyanshu08/assets/nasscom.png",
    "https://ik.imagekit.io/priyanshu08/assets/techstarts.png?updatedAt=1750778867178",
    "https://ik.imagekit.io/priyanshu08/assets/teknopoint.png?updatedAt=1750778992857",
    "https://ik.imagekit.io/priyanshu08/assets/cisco.png?updatedAt=1750779138484",
    "https://ik.imagekit.io/priyanshu08/assets/trinax.png?updatedAt=1750823892662",
  ];

  return (
    <div className="relative overflow-hidden bg-[#0A0914] py-10">
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
