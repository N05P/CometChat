import React from "react";

const GetStartedCTA = () => {
  return (
    <section className="relative bg-[#0c051c] text-white py-32 px-6 overflow-hidden">
      {/* 10 Random Star Dots */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="w-[2px] h-[2px] bg-white rounded-full absolute"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          ></div>
        ))}
      </div>

      {/* Left Glowing Planet with Light only - more visible */}
      <div className="absolute left-[-200px] top-[-200px] w-[500px] h-[500px] z-0">
        <div className="w-full h-full rounded-full bg-gradient-to-br from-[#ffb6e6] via-[#d35fd0] to-[#6f2bc2] shadow-[0_0_150px_40px_rgba(236,119,196,0.8)]"></div>
      </div>

      {/* Right Planet with Strong Glow - more left */}
      <div className="absolute right-[40px] bottom-[40px] w-[150px] h-[150px] z-0">
        <div className="w-full h-full rounded-full bg-gradient-to-br from-[#ff934a] via-[#ff5e3a] to-[#7a30ff] shadow-[0_0_120px_50px_rgba(255,94,58,0.6)]"></div>
      </div>

      {/* Orbit Arc (optional decoration) */}
      <div className="absolute top-[45%] left-0 right-0 z-0">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent blur-md"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Get started for free</h2>
        <p className="text-gray-300 text-lg mb-8">
          Build and test for as long as you need. <br />
          Pick a plan when you’re ready.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button className="bg-transparent border border-gray-400 hover:border-white text-white px-6 py-3 rounded-full transition-all">
            Start free trial
          </button>
          <button className="bg-[#a856ff] hover:bg-[#8a42e9] text-white px-6 py-3 rounded-full transition-all">
            Schedule a demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetStartedCTA;
