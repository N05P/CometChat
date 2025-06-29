import React from "react";
import { advantages } from "../common/helper";

const Partner = () => {
  return (
    <section className="min-h-screen bg-[#0A0914] text-white px-6 py-16">
      <div className="max-w-[1440px] mx-auto w-full">
        <h4 className="text-orange-500 text-[22px] font-semibold mb-2">
          Be a partner
        </h4>
        <h2 className="text-[40px] md:text-[48px] font-bold mb-16 leading-snug">
          CometChat partner <br className="hidden md:block" />
          advantages
        </h2>

        <div className="w-full h-[1px] bg-gray-600 mb-12"></div>
       

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
          {advantages.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex flex-col items-start gap-6">
                <div className="bg-orange-500/20 text-orange-400 p-3 rounded-full text-xl">
                  <Icon />
                </div>
                <div>
                  <h3 className="text-white text-[18px] font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-[18px] mt-1">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Partner;
