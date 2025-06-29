import React from "react";
import Header from './Header'
import { Mail } from "lucide-react";

const Hero = () => {
  return (

    <div
      className="h-[80vh] flex flex-col gap-2 bg-cover bg-center bg-no-repeat overflow-x-hidden"
      style={{ backgroundImage: "url('bg.png')" }}>
      <Header />
      <div className="h-full w-screen flex gap-2">
        <div className="w-1/2 h-full flex-col relative text-white flex justify-center font-bold">
          <h1 className="text-5xl absolute top-30 left-48 leading-tight ">Join the ComeChat <br />partner universe</h1>
          <p className="text-xl text-[#fafaffab] absolute top-60 left-48 w-[54vh]">Create value for your clients, leveraging our world-class technology. Partner with us and grow your business!</p>
        </div>
        <div className="w-1/2  relative ">
        <div className="h-[45vh] mt-19 flex flex-col bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-10 max-w-md text-white shadow-xl">
                  <h2 className="text-2xl font-semibold mb-6">Become a partner</h2>
          <form className="space-y-5">
            {/* Full Name */}
            <input
              type="text"
              placeholder="Type your name here..."
              className="w-full bg-white/20 p-3 rounded-lg focus:outline-none placeholder-gray-300"
            />

            {/* Email Field with Icon */}
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300 w-5 h-5" />
              <input
                type="email"
                placeholder="Type your email something..."
                className="w-full bg-white/20 p-3 pl-10 rounded-lg focus:outline-none placeholder-gray-300"
              />
            </div>

            {/* Company Name */}
            <input
              type="text"
              placeholder="Type your company's name"
              className="w-full bg-white/20 p-3 rounded-lg focus:outline-none placeholder-gray-300"
            />

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-pink-500 hover:to-purple-600 text-white py-3 rounded-lg font-semibold transition-all duration-300"
            >
              Submit application
            </button>
          </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
