import React from "react";
import { programs } from "../common/helper";

const PartnershipPrograms = () => {
  return (
    <section className="bg-[#ffffff] text-black px-6 py-20">
      <div className="max-w-7xl mx-auto text-left">
        {/* Heading */}
        <h4 className="text-purple-600 font-semibold mb-2">Our programs</h4>
        <h2 className="text-4xl md:text-5xl font-bold mb-16 leading-tight">
          Types of partnerships <br /> programs
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {programs.map((item, index) =>{
            const Icon = item.icon;
            return (
            <div key={index} className="flex flex-col gap-4">
              <div className="bg-purple-100 text-purple-600 p-3 rounded-full w-fit text-xl">
                {<Icon/>}
              </div>
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-gray-700 text-sm">{item.desc}</p>
            </div>
          )})}
        </div>
      </div>
    </section>
  );
};

export default PartnershipPrograms;
