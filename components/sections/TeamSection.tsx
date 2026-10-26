import React from 'react';
import { TeamData } from '@/types/templates.types';

export const TeamSection = ({ data }: { data?: TeamData }) => {
  if (!data) return null;

  return (
    <section className="py-20 lg:py-12 bg-[#fdfbf9] relative">
      <div className="max-w-[1250px] mx-auto px-4 md:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="w-12 h-px bg-[#a95d63] opacity-60"></span>
            <span className="text-[13px] tracking-[0.2em] uppercase text-[#a95d63] font-semibold">
              {data.subtitle}
            </span>
            <span className="w-12 h-px bg-[#a95d63] opacity-60"></span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-[54px] font-serif text-[#2a1315]">
            {data.title1} <span className="text-[#a95d63]">{data.title2}</span>
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 lg:gap-y-0 pt-6">
          {data.members.map((member) => (
            <div key={member.id} className="relative group px-4 pb-12 lg:pb-0">

              {/* Decorative Frames behind image */}
              <div className="absolute top-[-10px] left-[5px] w-[calc(100%-40px)] h-[calc(100%-30px)] border-[2px] border-[#c49250] opacity-70 z-0"></div>
              <div className="absolute top-[-20px] left-[-15px] w-[60%] h-[70%] bg-[#dca4a6] opacity-40 z-0"></div>

              {/* Image Container */}
              <div className="relative z-10 w-full aspect-[4/4.5] overflow-hidden bg-gray-100">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Text Box (overlapping bottom) */}
              <div className="relative z-20 -mt-10 mx-6 bg-[#fdfbf9] border border-[#f0e3d5] shadow-sm text-center py-6 px-4">
                <h3 className="text-[20px] lg:text-[22px] font-serif text-[#3b1c1c] font-bold mb-1">
                  {member.name}
                </h3>
                <p className="text-[14px] text-gray-500 mb-3">{member.role}</p>
                <div className="w-6 h-[2px] bg-[#c49250] mx-auto opacity-70"></div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
