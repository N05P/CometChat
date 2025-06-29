import React from "react";
import Header from "./Header";
import { Mail } from "lucide-react";

const HeroWithLogos = () => {
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
    <div className="w-full overflow-hidden bg-[#0A0914]">
      {/* HERO SECTION */}
      <div
        className="min-h-[80vh] w-full bg-cover bg-center bg-no-repeat flex flex-col"
        style={{ backgroundImage: "url('/src/assets/bg.png')" }}
      >
        <Header />

        <div className="flex flex-col md:flex-row w-full h-full md:gap-4 lg:gap-2">
          {/* ADDED md:gap-4 lg:gap-8 to bring left and right closer on larger screens */}

          {/* LEFT: TEXT */}
          <div className="w-full md:w-1/2 flex flex-col justify-center p-6 md:p-12 lg:p-18 text-white">
            {/* Reduced padding slightly from md:p-16 -> md:p-12 to make space for bigger form */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Join the CometChat <br /> partner universe
            </h1>
            <p className="text-base md:text-xl text-[#fafaffab] mt-4 max-w-md">
              Create value for your clients, leveraging our world-class
              technology. Partner with us and grow your business!
            </p>
          </div>

          {/* RIGHT: FORM */}
          <div className="w-full md:w-1/2 flex justify-center items-center p-6">
            <div 
              className="w-full max-w-lg bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-10 text-white shadow-xl"
              /* ↑↑↑ 
                CHANGED max-w-md -> max-w-lg 
                This makes the form wider on larger screens.
                If you want it EVEN bigger, try max-w-xl 
              */
            >
              <h2 className="text-2xl font-semibold mb-6">Become a partner</h2>
              <form className="space-y-5">
                <input
                  type="text"
                  placeholder="Type your name here..."
                  className="w-full bg-white/20 p-3 rounded-lg focus:outline-none placeholder-gray-300"
                />
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300 w-5 h-5" />
                  <input
                    type="email"
                    placeholder="Type your email something..."
                    className="w-full bg-white/20 p-3 pl-10 rounded-lg focus:outline-none placeholder-gray-300"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Type your company’s name"
                  className="w-full bg-white/20 p-3 rounded-lg focus:outline-none placeholder-gray-300"
                />
                <button
  type="submit"
  className="w-full sm:w-auto min-w-[140px] px-6 text-white text-sm sm:text-base py-3 rounded-full font-semibold transition-all duration-300 
             bg-gradient-to-r from-purple-600 via-purple-500 to-purple-700 
             hover:from-purple-700 hover:via-purple-600 hover:to-purple-800 
             shadow-lg shadow-purple-500/30"
>
  Submit application
</button>


              </form>
            </div>
          </div>
        </div>
      </div>

      {/* LOGOS SECTION */}
      <div className="py-10 bg-[#0A0914] relative overflow-hidden">
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
    </div>
  );
};

export default HeroWithLogos;
