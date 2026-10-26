'use client';
import React, { useRef } from 'react';
import { SponsorsData } from '@/types/templates.types';
import Link from 'next/link';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export const SponsorsSection = ({ data }: { data?: SponsorsData }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      // scroll by roughly one item + gap (200px + 24px)
      const scrollAmount = 224;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };
  if (!data) return null;

  return (
    <section className="w-full py-16 lg:py-12 bg-[#faf7f2] relative">
      <div className="max-w-[1250px] mx-auto px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-px bg-[#d4beb5]" />
            <h4 className="text-[#a78b80] font-bold text-xs tracking-[0.2em] uppercase">
              {data.subtitle}
            </h4>
            <div className="w-16 h-px bg-[#d4beb5]" />
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-[56px] font-serif font-bold leading-tight mb-6">
            <span className="text-[var(--color-primary)] mr-3">{data.title1}</span>
            <span className="text-[#a78b80]">{data.title2}</span>
          </h2>

          {/* Rings Divider */}
          <div className="flex items-center gap-2 mb-4">
            <div className="w-12 h-px bg-[#d4beb5]" />
            <div className="text-[#d4beb5] flex -space-x-2">
              <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg">
                <circle cx="9" cy="12" r="5"></circle>
                <circle cx="15" cy="12" r="5"></circle>
              </svg>
            </div>
            <div className="w-12 h-px bg-[#d4beb5]" />
          </div>
        </div>

        {/* Sponsors Slider Container */}
        <div className="flex items-center justify-between gap-4">

          {/* Prev Button */}
          <button 
            onClick={() => scroll('left')}
            className="flex w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#d4beb5] text-white items-center justify-center hover:bg-[#a78b80] transition-colors duration-300 shrink-0"
          >
            <FaArrowLeft className="text-sm" />
          </button>

          {/* Logos */}
          <div className="w-full overflow-hidden">
            <div 
              ref={scrollContainerRef}
              className="flex flex-nowrap justify-start items-center gap-4 lg:gap-6 w-full overflow-x-hidden scroll-smooth"
            >
              {data.sponsors.map((sponsor) => (
                <div
                  key={sponsor.id}
                  className="shrink-0 w-[140px] md:w-[180px] lg:w-[200px] h-[100px] md:h-[120px] bg-[#fcfbfa] border border-[#eee8e3] flex items-center justify-center p-4 hover:shadow-md transition-shadow duration-300"
                >
                  <img
                    src={sponsor.image}
                    alt={sponsor.alt}
                    className="max-w-full max-h-full object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Next Button */}
          <button 
            onClick={() => scroll('right')}
            className="flex w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#d4beb5] text-white items-center justify-center hover:bg-[#a78b80] transition-colors duration-300 shrink-0"
          >
            <FaArrowRight className="text-sm" />
          </button>

        </div>

      </div>
    </section>
  );
};
