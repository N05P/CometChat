import React from "react";
import Header from "./Header";

const Hero  = () => {
  return (

    <section className="relative bg-gradient-to-br from-[#0d061b] via-[#150a2d] to-[#12052c] text-white min-h-screen py-5 px-4 overflow-hidden">
      <Header/>
      {/* Left glowing planet */}
      <div className="absolute left-[-100px] top-[60%] w-[200px] h-[200px] bg-gradient-to-tl from-[#ffc46b] via-[#ff634a] to-[#a342ff] rounded-full shadow-[0_0_120px_60px_rgba(255,99,74,0.5)] blur-2xl opacity-80 z-0"></div>

      {/* Bottom glowing planet */}
      <div className="absolute bottom-[-100px] left-[250px] w-[220px] h-[220px] bg-gradient-to-br from-[#ff934a] via-[#ff5e3a] to-[#7a30ff] rounded-full shadow-[0_0_150px_80px_rgba(255,94,58,0.5)] z-0"></div>

      {/* Right glowing planet */}
      <div className="absolute right-[-100px] bottom-[-100px] w-[300px] h-[300px] bg-gradient-to-br from-[#ff934a] via-[#ff5e3a] to-[#7a30ff] rounded-full shadow-[0_0_150px_90px_rgba(255,94,58,0.6)] z-0"></div>

      {/* Dots */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute w-[4px] h-[4px] bg-white rounded-full opacity-30"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        ></div>
      ))}

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-16">
        {/* Text Section */}
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
            Join the CometChat <br /> partner universe
          </h1>
          <p className="text-lg text-gray-300">
            Create value for your clients, leveraging our world-class technology.
            Partner with us and grow your business!
          </p>
        </div>

        {/* Form Section */}
        <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">Become a partner</h2>
          <form className="space-y-5">
            <div>
              <label className="block text-sm mb-1">Full name</label>
              <input
                type="text"
                placeholder="Type your name here..."
                className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-white/50 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Email address</label>
              <input
                type="email"
                placeholder="Type your email..."
                className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-white/50 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Company name</label>
              <input
                type="text"
                placeholder="Type your company’s name"
                className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-white/50 outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#a856ff] hover:bg-[#8a42e9] text-white py-3 rounded-lg transition"
            >
              Submit application
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;
