import React from 'react';
import { HeroData } from '@/types/templates.types';
import Link from 'next/link';

export const HeroSection = ({ data }: { data?: HeroData }) => {
  if (!data) return null;

  return (
    <section className="relative flex min-h-[480px] w-full items-center bg-[#faf7f2] overflow-hidden lg:min-h-[580px]">
      {/* Background Image Container */}
      <div className="absolute right-0 top-0 h-full w-full lg:w-[70%]">
        <img 
          src={data.image1} 
          alt="" 
          aria-hidden="true" 
          className="h-full w-full object-cover object-[70%_center]" 
        />
        {/* Gradient Overlay to blend with the solid color on the left */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#faf7f2] via-[#faf7f2]/90 sm:via-[#faf7f2]/60 to-transparent lg:via-[#faf7f2] lg:via-20%" />
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
          <p className="mb-10 text-sm leading-relaxed text-[var(--color-text)] sm:text-base lg:text-lg max-w-[500px]">
            {data.description}
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {data.button1 && (
              <Link 
                href={data.button1.url} 
                className="rounded-md bg-[var(--color-accent)] px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-primary)] flex items-center justify-center gap-2"
              >
                {data.button1.text.replace('>', '').trim()}
                {data.button1.text.includes('>') && <span className="font-bold text-lg leading-none">&gt;</span>}
              </Link>
            )}
            {data.button2 && (
              <Link 
                href={data.button2.url} 
                className="rounded-md border border-[var(--color-accent-light)] bg-transparent px-8 py-3.5 text-sm font-semibold text-[var(--color-primary)] transition-colors hover:bg-[var(--color-accent-light)] hover:text-white flex items-center justify-center gap-2"
              >
                {data.button2.text.replace('>', '').trim()}
                {data.button2.text.includes('>') && <span className="font-bold text-lg leading-none">&gt;</span>}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
