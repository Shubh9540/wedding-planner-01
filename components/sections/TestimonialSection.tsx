
'use client';
import React, { useCallback, useEffect, useState } from 'react';
import { TestimonialsData } from '@/types/templates.types';
import useEmblaCarousel from 'embla-carousel-react';
import { FaArrowLeft, FaArrowRight, FaQuoteRight, FaStar } from 'react-icons/fa';

export const TestimonialSection = ({ data }: { data?: TestimonialsData }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: 'start', 
    skipSnaps: false,
    slidesToScroll: 1
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  if (!data || !data.testimonials || data.testimonials.length === 0) return null;

  const testimonials = data.testimonials;

  return (
    <section className="bg-[var(--color-bg-alt)] pt-4 lg:pt-6 pb-16 lg:pb-12 relative overflow-hidden">
      <div className="max-w-[1250px] mx-auto px-4 md:px-8 relative">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-4 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-accent-light)] mb-4">
            <span className="w-10 md:w-16 h-[1px] bg-[var(--color-accent-light)]"></span>
            {data.subtitle}
            <span className="w-10 md:w-16 h-[1px] bg-[var(--color-accent-light)]"></span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--color-primary)] mb-4 font-serif">
            {data.title1} <span className="text-[var(--color-accent-muted)]">{data.title2}</span>
          </h2>
          <p className="text-[var(--color-text-light)] max-w-2xl mx-auto text-sm md:text-base">
            {data.description}
          </p>
        </div>

        {/* Carousel Outer Wrapper with Gutters for Arrows */}
        <div className="relative px-6 sm:px-12 md:px-14">
          
          {/* Left Arrow Button (outside the cards in the gutter) */}
          <button
            type="button"
            onClick={scrollPrev}
            aria-label="Previous Testimonial"
            className="absolute left-0 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[var(--color-accent-muted)] text-white flex items-center justify-center hover:bg-[var(--color-primary)] active:scale-95 transition-all shadow-md z-20 cursor-pointer"
          >
            <FaArrowLeft className="text-sm" />
          </button>

          {/* Right Arrow Button (outside the cards in the gutter) */}
          <button
            type="button"
            onClick={scrollNext}
            aria-label="Next Testimonial"
            className="absolute right-0 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[var(--color-accent-muted)] text-white flex items-center justify-center hover:bg-[var(--color-primary)] active:scale-95 transition-all shadow-md z-20 cursor-pointer"
          >
            <FaArrowRight className="text-sm" />
          </button>

          {/* Embla Viewport */}
          <div className="overflow-hidden py-4" ref={emblaRef}>
            <div className="flex touch-pan-y -ml-6">
              {testimonials.map((testi, index) => {
                // On 3-column view, the active/center card is offset by +1
                const activeIndex = (selectedIndex + 1) % testimonials.length;
                const isActive = index === activeIndex;
                return (
                  <div
                    key={testi.id}
                    className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-6"
                  >
                    <div
                      className={`bg-white rounded-2xl p-7 lg:p-8 h-full flex flex-col justify-between transition-all duration-300 border-2 ${
                        isActive 
                          ? 'border-[var(--color-accent-muted)] shadow-xl scale-[1.02] ring-1 ring-[var(--color-accent-muted)]/20' 
                          : 'border-[var(--color-border)] shadow-sm hover:border-[var(--color-accent-light)]'
                      }`}
                    >
                      {/* Top Row: Avatar & Quote Icon */}
                      <div>
                        <div className="flex justify-between items-start mb-6">
                          <img 
                            src={testi.avatar} 
                            alt={testi.name} 
                            className="w-16 h-16 rounded-full object-cover shadow-sm border-2 border-[var(--color-accent-light)]" 
                          />
                          <FaQuoteRight className="text-3xl text-[var(--color-accent-light)] opacity-40" />
                        </div>

                        {/* Quote Text */}
                        <p className="text-[var(--color-text)] text-sm md:text-[15px] leading-relaxed mb-6 font-serif italic">
                          "{testi.quote}"
                        </p>
                      </div>

                      {/* Footer Info */}
                      <div>
                        <hr className="border-[var(--color-border)] mb-4" />
                        <h4 className="font-bold text-[var(--color-primary)] text-base md:text-lg leading-tight font-serif">
                          {testi.name}
                        </h4>
                        <p className="text-xs text-[var(--color-text-light)] mt-1">
                          {testi.location}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Pagination Dots (Clickable & Active) */}
        {scrollSnaps.length > 1 && (
          <div className="flex justify-center items-center gap-2.5 mt-10">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  index === selectedIndex 
                    ? 'bg-[var(--color-accent-muted)] w-8 h-2.5 shadow-sm' 
                    : 'bg-[var(--color-border)] hover:bg-[var(--color-accent-light)] w-2.5 h-2.5'
                }`}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
