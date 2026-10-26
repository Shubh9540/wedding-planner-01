import React from 'react';
import { WhatWeDoData } from '@/types/templates.types';
import Link from 'next/link';
import { FaBirthdayCake, FaMapMarkedAlt, FaArrowRight } from 'react-icons/fa';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaBirthdayCake': return <FaBirthdayCake />;
    case 'FaMapMarkedAlt': return <FaMapMarkedAlt />;
    default: return <FaBirthdayCake />;
  }
};

export const WhatWeDoSection = ({ data }: { data?: WhatWeDoData }) => {
  if (!data) return null;

  return (
    <section className="w-full py-20 lg:py-12 bg-[#faf7f2] relative overflow-hidden">
      <div className="max-w-[1250px] mx-auto px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

        {/* Left Side: Image */}
        <div className="w-full lg:w-5/12 relative flex justify-center">
          {/* Main Image Container */}
          <div className="relative w-full max-w-[450px] aspect-[4/4.5] z-10">
            {/* Background Accent Box (left aligned, sticking out top and bottom) */}
            <div className="absolute -top-8 -bottom-8 -left-6 sm:-left-12 w-3/4 sm:w-2/3 bg-[var(--color-accent-muted)] z-0" />

            {/* Image */}
            <div className="relative w-full h-full z-10 bg-white">
              <img
                src={data.image}
                alt={data.title1}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="w-full lg:w-7/12 flex flex-col mt-12 lg:mt-0">

          {/* Subtitle */}
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-12 bg-[var(--color-accent-light)]" />
            <h4 className="text-[var(--color-accent-light)] font-bold text-xs tracking-[0.2em] uppercase">
              {data.subtitle}
            </h4>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl lg:text-[56px] font-serif font-bold leading-tight mb-6">
            <div className="text-[var(--color-primary)]">{data.title1}</div>
            <div>
              <span className="text-[var(--color-primary)] mr-3">{data.title2}</span>
              <span className="text-[var(--color-accent-muted)]">{data.title3}</span>
            </div>
          </h2>

          {/* Description */}
          <p className="text-[var(--color-text-light)] font-medium text-sm lg:text-base mb-10 leading-relaxed max-w-[550px]">
            {data.description}
          </p>

          {/* Horizontal Divider */}
          <div className="w-full h-px bg-[var(--color-accent-light)]/30 mb-10" />

          {/* Features / Services */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 relative">

            {/* Vertical Divider (visible on sm+) */}
            <div className="hidden sm:block absolute left-1/2 top-0 bottom-0 w-px bg-[var(--color-accent-light)]/30 -translate-x-1/2" />

            {(data.features || []).map((feature, idx) => (
              <div key={feature.id} className="flex flex-col relative z-10 pr-4">
                <div className="flex items-start gap-4">

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-full bg-[var(--color-accent-muted)]/10 text-[var(--color-accent-muted)] flex items-center justify-center text-2xl flex-shrink-0 mt-1">
                    {renderIcon(feature.icon)}
                  </div>

                  {/* Text Content */}
                  <div className="flex flex-col">
                    <h3 className="text-[22px] font-serif text-[var(--color-primary)] font-bold mb-2 leading-tight max-w-[150px]">
                      {feature.title}
                    </h3>
                    <p className="text-[var(--color-text-light)] text-[13px] leading-relaxed mb-4 max-w-[200px]">
                      {feature.description}
                    </p>


                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
