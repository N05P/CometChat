import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { faqs } from "../common/helper";

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(0); 
  const toggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="bg-gradient-to-b from-white via-[#f8f4fb] to-[#f0eafd] py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h4 className="text-orange-500 font-semibold mb-2">FAQ’s</h4>
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          We want to help you <br /> with all your doubts
        </h2>

        <div className="space-y-4 text-left">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-200"
            >
              <button
                onClick={() => toggle(index)}
                className="flex justify-between w-full items-center px-5 py-4 text-left"
              >
                <span className="font-medium text-base text-gray-900">
                  {faq.question}
                </span>
                <FiChevronDown
                  className={`text-xl transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && faq.answer && (
                <div className="px-5 pb-4 text-sm text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
