
'use client';
import React, { useState } from 'react';
import { FaqData } from '@/types/templates.types';
import { FaChevronDown, FaChevronUp, FaPlus, FaMinus, FaStar } from 'react-icons/fa';

export const FaqSection = ({ data }: { data?: FaqData }) => {
  const [openId, setOpenId] = useState<string | null>(data?.faqs?.[0]?.id || null);

  if (!data || !data.faqs) return null;

  return (
    <section className="w-full bg-[#fdfaf6] py-20 lg:py-12 overflow-hidden">
      <div className="max-w-[1250px] mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

          {/* Left Column - Image */}
          <div className="w-full lg:w-[40%] relative">
            {/* The decorative border */}
            <div className="absolute -inset-4 border border-[#d6aeb9] rounded-tl-[150px] md:rounded-tl-[250px] rounded-br-md rounded-tr-md rounded-bl-md pointer-events-none hidden md:block">
              {/* Star icon on the right edge center */}
              <div className="absolute top-1/2 -right-3 -translate-y-1/2 text-[#d6aeb9] text-xl bg-[#fdfaf6] px-1">
                ✦
              </div>
            </div>

            <div className="relative w-full aspect-[3/4] rounded-tl-[150px] md:rounded-tl-[250px] rounded-br-md rounded-tr-md rounded-bl-md overflow-hidden shadow-lg">
              <img
                src={data.image}
                alt="FAQ"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column - FAQ Content */}
          <div className="w-full lg:w-[60%] pt-4 md:pt-8">
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center gap-4 text-[#a37953] text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-4">
                {data.subtitle}
                <span className="w-12 md:w-20 h-px bg-[#a37953]"></span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#592331] mb-4 font-serif leading-tight">
                {data.title1} <span className="text-[#d6aeb9] font-normal">{data.title2}</span>
              </h2>
              <p className="text-gray-500 text-sm md:text-xs max-w-2xl leading-relaxed">
                {data.description}
              </p>
            </div>

            {/* Accordion */}
            <div className="flex flex-col gap-2">
              {data.faqs.map((faq) => {
                const isOpen = openId === faq.id;

                return (
                  <div key={faq.id} className="w-full">
                    <button
                      onClick={() => setOpenId(isOpen ? null : faq.id)}
                      className={`w-full flex items-center justify-between p-3.5 px-5 text-left transition-colors duration-300 ${isOpen
                        ? 'bg-[#7f183c] text-white rounded-t-md'
                        : 'bg-[#f7ecef] text-[#3f292b] hover:bg-[#f0e0e4] rounded-md'
                        }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${isOpen ? 'bg-white text-[#7f183c]' : 'bg-[#e8cdd2] text-[#3f292b]'
                          }`}>
                          {isOpen ? <FaMinus className="text-[10px]" /> : <FaPlus className="text-[10px]" />}
                        </div>
                        <span className="font-semibold text-sm md:text-sm">{faq.question}</span>
                      </div>
                      <div className="shrink-0 ml-4">
                        {isOpen ? <FaChevronUp className="text-xs opacity-70" /> : <FaChevronDown className="text-xs opacity-50" />}
                      </div>
                    </button>

                    <div
                      className={`grid transition-all duration-300 ease-in-out bg-[#f4ebe9] rounded-b-md ${
                        isOpen ? 'grid-rows-[1fr] opacity-100 border-t border-[#8c2a4c]' : 'grid-rows-[0fr] opacity-0 border-t border-transparent'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="text-gray-600 text-xs md:text-[13px] leading-relaxed p-5">
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
