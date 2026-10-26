import React from 'react';
import { ServicesData } from '@/types/templates.types';
import Link from 'next/link';
import { FaRing, FaGlassCheers, FaUsers } from 'react-icons/fa';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaRing': return <FaRing />;
    case 'FaGlassCheers': return <FaGlassCheers />;
    case 'FaUsers': return <FaUsers />;
    default: return <FaRing />;
  }
};

export const ServicesSection = ({ data, hideButton }: { data?: ServicesData; hideButton?: boolean }) => {
  if (!data) return null;

  return (
    <section className="w-full py-20 lg:py-12 bg-[#faf7f2] relative">
      <div className="max-w-[1250px] mx-auto px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">

          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-px bg-[var(--color-accent-light)]" />
            <h4 className="text-[var(--color-accent-light)] font-bold text-xs tracking-[0.2em] uppercase">
              {data.subtitle}
            </h4>
            <div className="w-16 h-px bg-[var(--color-accent-light)]" />
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-[56px] font-serif font-bold leading-tight mb-6">
            <span className="text-[var(--color-primary)] mr-3">{data.title1}</span>
            <span className="text-[var(--color-accent-muted)]">{data.title2}</span>
          </h2>

          {/* Lotus Divider */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-[var(--color-accent-light)]/50" />
            <div className="text-[var(--color-accent-light)] text-xl">
              {/* Simple Lotus-like SVG */}
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M256 32c-35.34 0-64 71.63-64 160 0 10.55 1.11 20.84 3.19 30.81-42.58-15.01-83.33-14.86-116.3 3.63-38.3 21.49-43.25 61.64-44.53 79.5 24.16-9.15 62.48-11.23 99.4 16.53-29.23 37.38-23.77 75.35-15.69 99.72 23.36 12.03 62.06 18.06 100.82-12.75 8.1 4.54 17.65 8.5 28.32 11.66 2.87 25.13 5.48 48.06 8.79 58.9h0.01c3.2-10.84 5.81-33.77 8.79-58.9 10.66-3.16 20.22-7.11 28.31-11.66 38.76 30.81 77.46 24.78 100.82 12.75 8.08-24.37 13.54-62.34-15.69-99.72 36.92-27.76 75.24-25.68 99.4-16.53-1.28-17.86-6.23-58.01-44.53-79.5-32.97-18.49-73.72-18.64-116.3-3.63 2.08-9.97 3.19-20.26 3.19-30.81 0-88.37-28.66-160-64-160z"></path>
              </svg>
            </div>
            <div className="w-12 h-px bg-[var(--color-accent-light)]/50" />
          </div>

          <p className="text-[var(--color-text)] max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            {data.description}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {data.services.map((service) => (
            <Link
              href={service.url}
              key={service.id}
              className="flex flex-col relative rounded-[20px] overflow-hidden h-[420px] group shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Background Image */}
              <div className="absolute inset-0 w-full h-[320px]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Bottom White Overlay */}
              <div className="absolute bottom-0 left-0 w-full bg-[#fefbf6] rounded-t-[30px] flex flex-col items-center pt-9 pb-8 px-6 transition-transform duration-300">
                {/* Icon Badge */}
                <div className="absolute -top-7 w-14 h-14 bg-[var(--color-accent)] rounded-full border-4 border-[#fefbf6] flex items-center justify-center text-white text-xl shadow-md transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-lg">
                  {renderIcon(service.icon)}
                </div>

                <h3 className="text-2xl font-serif text-[var(--color-primary)] font-bold transition-colors group-hover:text-[var(--color-accent-muted)]">
                  {service.title}
                </h3>
                <div className="w-10 h-px bg-[var(--color-accent-light)] mt-4 transition-all duration-300 group-hover:w-16" />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};
