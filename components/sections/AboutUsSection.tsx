'use client';
import React, { useEffect, useState, useRef } from 'react';
import { AboutUsData } from '@/types/templates.types';
import { FaUsers, FaRegCalendarAlt, FaRegCheckCircle } from 'react-icons/fa';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaUsers': return <FaUsers />;
    case 'FaRegCalendarAlt': return <FaRegCalendarAlt />;
    case 'FaRegCheckCircle': return <FaRegCheckCircle />;
    default: return <FaUsers />;
  }
};

const AnimatedCounter = ({ end, duration = 2000 }: { end: number, duration?: number }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });

    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);

      // easeOutQuart
      const ease = 1 - Math.pow(1 - percentage, 4);
      const currentCount = Math.floor(ease * end);

      if (currentCount !== countRef.current) {
        countRef.current = currentCount;
        setCount(currentCount);
      }

      if (percentage < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, isVisible]);

  return <span ref={elementRef}>{count}</span>;
};

export const AboutUsSection = ({ data, hideButton }: { data?: AboutUsData; hideButton?: boolean }) => {
  if (!data) return null;

  return (
    <section className="w-full py-20 lg:py-12 bg-[#faf7f2] relative overflow-hidden">
      <div className="max-w-[1250px] mx-auto px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

        {/* Left Side: Images */}
        <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-start pt-8 pl-8 sm:pt-12 sm:pl-12">

          {/* Main Image Container */}
          <div className="relative w-full max-w-[450px] aspect-[4/5] z-10">
            {/* Top-Left Offset Background Box */}
            <div className="absolute -top-6 -left-6 sm:-top-10 sm:-left-10 w-4/5 h-4/5 bg-[var(--color-accent-muted)] z-0" />

            {/* Main Image */}
            <div className="relative w-full h-full border-8 border-white shadow-lg overflow-hidden z-10 bg-white">
              <img
                src={data.imageMain}
                alt={data.title1}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Small Image Container */}
          <div className="absolute -bottom-10 -right-4 sm:-bottom-16 sm:-right-8 w-56 sm:w-72 aspect-square z-20">
            {/* Bottom-Right Offset Background Box */}
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-3/4 h-3/4 bg-[var(--color-accent-muted)] z-0" />

            {/* Small Image */}
            <div className="relative w-full h-full border-8 border-white shadow-xl overflow-hidden z-10 bg-white">
              <img
                src={data.imageSmall}
                alt="Details"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="w-full lg:w-1/2 flex flex-col mt-20 lg:mt-0">

          {/* Subtitle */}
          <div className="flex items-center gap-4 mb-4">
            <h4 className="text-[var(--color-accent-light)] font-bold text-sm tracking-[0.2em] uppercase">
              {data.subtitle}
            </h4>
            <div className="h-px w-24 bg-[var(--color-accent-light)]" />
          </div>

          {/* Title */}
          <h2 className="text-5xl lg:text-6xl font-serif font-bold leading-tight mb-8">
            <span className="text-[var(--color-primary)] mr-3">{data.title1}</span>
            <span className="text-[var(--color-accent-muted)]">{data.title2}</span>
          </h2>

          {/* Descriptions */}
          <p className="text-[var(--color-text)] font-medium text-base lg:text-lg mb-6 leading-relaxed">
            {data.description1}
          </p>
          <p className="text-[var(--color-text-light)] text-sm lg:text-base leading-relaxed mb-10">
            {data.description2}
          </p>

          {/* Divider with Rings */}
          <div className="flex items-center gap-4 mb-10">
            <div className="flex-1 h-px bg-[var(--color-accent-light)]/50" />
            <div className="relative flex items-center justify-center w-12 h-8 text-[var(--color-accent-light)]">
              {/* Simple interlocking rings SVG */}
              <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="w-8 h-8">
                <circle cx="22" cy="32" r="16" />
                <circle cx="42" cy="32" r="16" />
              </svg>
            </div>
            <div className="flex-1 h-px bg-[var(--color-accent-light)]/50" />
          </div>

          {/* Stats / Counters */}
          <div className="flex items-start justify-between w-full max-w-[450px]">
            {data.stats?.map((stat, idx) => (
              <React.Fragment key={stat.id}>
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-accent-muted)]/10 text-[var(--color-primary)] flex items-center justify-center text-xl mb-4">
                    {renderIcon(stat.icon)}
                  </div>
                  <div className="font-serif font-bold text-4xl text-[var(--color-primary)] mb-1 flex items-baseline">
                    <AnimatedCounter end={parseInt(stat.number)} />
                    <span className="text-xl ml-1 text-[var(--color-accent-muted)] font-sans">{stat.suffix}</span>
                  </div>
                  <span className="text-sm font-semibold text-[var(--color-text)]">
                    {stat.text}
                  </span>
                </div>
                {/* Vertical Divider Line except for last item */}
                {idx < data.stats.length - 1 && (
                  <div className="w-px h-24 bg-[var(--color-accent-light)]/30 mt-4" />
                )}
              </React.Fragment>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
