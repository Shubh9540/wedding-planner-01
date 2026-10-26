'use client';

import React from 'react';
import { CounterData } from '@/types/templates.types';
import CountUp from 'react-countup';
import { FaHeart, FaCalendarAlt, FaCrown, FaUsers } from 'react-icons/fa';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaHeart': return <FaHeart size={36} />;
    case 'FaCalendarAlt': return <FaCalendarAlt size={36} />;
    case 'FaCrown': return <FaCrown size={36} />;
    case 'FaUsers': return <FaUsers size={36} />;
    default: return <FaHeart size={36} />;
  }
};

const RingsDividerWhite = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center justify-center ${className}`}>
    <div className="h-px bg-white flex-1 opacity-50"></div>
    <div className="px-3 text-white flex justify-center items-center relative opacity-80">
      <svg viewBox="0 0 32 16" width="28" height="14">
        <circle cx="10" cy="8" r="7" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="22" cy="8" r="7" fill="none" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    </div>
    <div className="h-px bg-white flex-1 opacity-50"></div>
  </div>
);

export const CounterSection = ({ data }: { data?: CounterData }) => {
  if (!data) return null;

  return (
    <section 
      className="relative py-16 lg:py-24 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: data.bgImage ? `url(${data.bgImage})` : 'none' }}
    >
      <div className="absolute inset-0 bg-[#b27d78]/85 mix-blend-multiply"></div>
      
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0 lg:divide-x lg:divide-white/30">
          {data.items.map((item) => (
            <div key={item.id} className="flex flex-col items-center text-center px-4">
              
              <div className="w-[90px] h-[90px] rounded-full bg-[#fdfaf6] flex items-center justify-center text-[#b27d78] mb-6 shadow-md">
                {renderIcon(item.icon)}
              </div>
              
              <div className="text-5xl lg:text-7xl text-white font-serif mb-4 flex items-center justify-center">
                <CountUp 
                  end={item.number} 
                  duration={2.5} 
                  enableScrollSpy={true} 
                  scrollSpyOnce={true} 
                />
                {item.suffix && <span>{item.suffix}</span>}
              </div>

              <RingsDividerWhite className="w-[120px] mb-4" />

              <h4 className="text-[13px] tracking-[0.2em] uppercase text-white font-medium">
                {item.label}
              </h4>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
