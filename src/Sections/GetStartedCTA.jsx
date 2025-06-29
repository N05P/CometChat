import React from "react";

const GetStartedCTA = () => {
  return (
    <section
      className="relative text-white py-32 px-6 overflow-hidden bg-[#0c051c]"
      style={{
        backgroundImage: "url('/src/assets/getstarted.png')", // 👉 Replace with your image or leave bg color
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Left glow circle */}
      <div className="absolute left-[-100px] top-[-100px] w-[300px] h-[300px] rounded-full bg-gradient-to-br from-pink-400 via-purple-600 to-purple-900 opacity-50 blur-3xl"></div>

      {/* Right glow circle */}
      <div className="absolute right-[-50px] bottom-[-50px] w-[200px] h-[200px] rounded-full bg-gradient-to-br from-orange-400 via-pink-500 to-purple-700 opacity-50 blur-3xl"></div>

      {/* Main content */}
      <div className="relative z-10 max-w-lg mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Get started for free</h2>
        <p className="text-gray-300 text-lg mb-8">
          Build and test for as long as you need. <br className="hidden sm:block" />
          Pick a plan when you’re ready.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button className="bg-transparent border border-white/30 hover:border-white text-white px-6 py-3 rounded-lg transition-all">
            Start free trial
          </button>
          <button className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-pink-500 hover:to-purple-600 text-white px-6 py-3 rounded-lg transition-all">
            Schedule a demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetStartedCTA;
