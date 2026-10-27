import React from 'react';
import { HeroData } from '@/types/templates.types';
import Link from 'next/link';

export const HeroSection = ({ data }: { data?: HeroData }) => {
  if (!data) return null;

  return (
    <section id="home" className="relative flex min-h-[480px] w-full items-center bg-[var(--color-bg-alt)] overflow-hidden lg:min-h-[580px] scroll-mt-20">
      {/* Background Image Container */}
      <div className="absolute right-0 top-0 h-full w-full lg:w-[65%]">
        <img 
          src={data.image1} 
          alt="" 
          aria-hidden="true" 
          className="h-full w-full object-cover object-[65%_center]" 
        />
        {/* Soft, minimal gradient only where text meets image on left */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-bg-alt)] via-[var(--color-bg-alt)]/50 to-transparent lg:w-[45%]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-alt)]/40 via-transparent to-transparent lg:hidden" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1250px] px-6 py-12 lg:py-16 lg:px-8">
        <div className="w-full max-w-xl xl:max-w-2xl flex flex-col items-center text-center mx-auto lg:mx-0">
          {/* Subtitle */}
          <div className="mb-6 flex flex-col items-center gap-3">
            <h2 className="text-[11px] font-bold tracking-[0.25em] text-[var(--color-primary)] uppercase sm:text-xs">
              {data.subtitle}
            </h2>
            <div className="h-px w-64 sm:w-72 bg-[var(--color-accent-light)]" />
          </div>

          {/* Title */}
          <h1 className="mb-6 text-5xl sm:text-6xl lg:text-[85px] leading-[1.05] font-serif font-bold">
            <span className="block text-[var(--color-primary)]">{data.title1}</span>
            <span className="block text-[var(--color-accent)]">{data.title2}</span>
          </h1>

          {/* Description */}
          <p className="mb-4 text-sm leading-relaxed text-[var(--color-text)] sm:text-base lg:text-lg max-w-[500px]">
            {data.description}
          </p>
        </div>
      </div>
    </section>
  );
};
