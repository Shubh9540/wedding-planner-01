'use client';
import React, { useState } from 'react';
import { FaqData } from '@/types/templates.types';
import { FaChevronRight, FaChevronUp, FaPlus, FaMinus } from 'react-icons/fa';

export const FaqPageSection = ({ data }: { data?: FaqData }) => {
  const [openId, setOpenId] = useState<string | null>(data?.faqs?.[0]?.id || null);

  if (!data || !data.faqs) return null;

  return (
    <section className="w-full bg-[#fdfaf6] py-20 lg:py-12 overflow-hidden">
      <div className="max-w-[1250px] mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

          {/* Left Column - Simple Rounded Image */}
          <div className="w-full lg:w-1/3 lg:sticky lg:top-8">
            <div className="w-full h-[400px] lg:h-[600px] xl:h-[700px] rounded-2xl overflow-hidden shadow-lg">
              <img
                src={data.image}
                alt="FAQ"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column - FAQ Content */}
          <div className="w-full lg:w-2/3 flex flex-col">
            
            {/* Header Centered */}
            <div className="mb-10 text-center flex flex-col items-center">
              <div className="text-[#ce3b5e] text-xs font-bold uppercase tracking-[0.2em] mb-4">
                {data.subtitle}
                <div className="w-16 h-[2px] bg-[#ce3b5e] mx-auto mt-3 opacity-50"></div>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-extrabold text-[#2a2a2a] mb-4">
                {data.title1} <span className="text-[#ce3b5e] font-normal">{data.title2}</span>
              </h2>
              <p className="text-gray-500 text-sm max-w-xl mx-auto leading-relaxed">
                {data.description}
              </p>
            </div>

            {/* Accordion */}
            <div className="flex flex-col gap-4">
              {data.faqs.map((faq) => {
                const isOpen = openId === faq.id;

                return (
                  <div 
                    key={faq.id} 
                    className={`w-full rounded-md border transition-colors duration-300 ${
                      isOpen ? 'bg-[#faeef2] border-[#f0d8e0]' : 'bg-white border-gray-100 hover:border-gray-200 shadow-sm'
                    }`}
                  >
                    <button
                      onClick={() => setOpenId(isOpen ? null : faq.id)}
                      className="w-full flex items-center justify-between p-4 md:p-5 text-left"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#ce3b5e] text-white flex items-center justify-center shrink-0">
                          {isOpen ? <FaMinus className="text-[10px] md:text-xs" /> : <FaPlus className="text-[10px] md:text-xs" />}
                        </div>
                        <span className={`font-bold text-sm md:text-[15px] ${isOpen ? 'text-[#2a2a2a]' : 'text-[#2a2a2a]'}`}>
                          {faq.question}
                        </span>
                      </div>
                      <div className="shrink-0 ml-4 text-[#ce3b5e]">
                        {isOpen ? <FaChevronUp className="text-xs md:text-sm" /> : <FaChevronRight className="text-xs md:text-sm" />}
                      </div>
                    </button>

                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-5 pb-5 md:pl-[68px] md:pr-10 md:pb-6 text-[#666666] text-xs md:text-sm leading-relaxed">
                          {faq.answer}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
