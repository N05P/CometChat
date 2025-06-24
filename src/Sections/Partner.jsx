import React from "react";
import { advantages } from "../common/helper";

const Partner = () => {

   return (
    <section className="bg-[#0d0915] text-white px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <h4 className="text-orange-500 text-sm font-semibold mb-2">Be a partner</h4>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 leading-snug">
          CometChat partner <br className="hidden md:block" />
          advantages
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {advantages.map((item, index) => {
            const Icon = item.icon; // get the component
            return (
              <div key={index} className="flex gap-4 items-start">
                <div className="bg-orange-500/20 text-orange-400 p-3 rounded-full text-xl">
                  <Icon /> {/* use it here as JSX */}
                </div>
                <div>
                  <h3 className="text-white font-semibold">{item.title}</h3>
                  <p className="text-gray-400 text-sm mt-1">{item.desc}</p>
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
