
'use client';
import React, { useCallback, useEffect, useState } from 'react';
import { TestimonialsData } from '@/types/templates.types';
import useEmblaCarousel from 'embla-carousel-react';
import { FaArrowLeft, FaArrowRight, FaQuoteRight, FaStar } from 'react-icons/fa';

export const TestimonialSection = ({ data }: { data?: TestimonialsData }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center', skipSnaps: false });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, setScrollSnaps, onSelect]);

  if (!data || !data.testimonials) return null;

  // Add dummy testimonials if there are fewer than 3 to make the slider look good
  const testimonials = data.testimonials.length < 3
    ? [...data.testimonials, ...Array(3 - data.testimonials.length).fill(data.testimonials[0]).map((t, i) => ({ ...t, id: 'dummy-' + i }))]
    : data.testimonials;

  return (
    <section className="bg-[#fcfaf9] pt-4 lg:pt-6 pb-16 lg:pb-12 relative overflow-hidden">
      <div className="max-w-[1250px] mx-auto px-4 md:px-12 lg:px-16 relative">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-4 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-[#d6aeb9] mb-4">
            <span className="w-10 md:w-16 h-[1px] bg-[#d6aeb9]"></span>
            {data.subtitle}
            <span className="w-10 md:w-16 h-[1px] bg-[#d6aeb9]"></span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#3f292b] mb-4 font-serif">
            {data.title1} <span className="text-[#7f183c]">{data.title2}</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">
            {data.description}
          </p>
        </div>

        {/* Embla Carousel */}
        <div className="relative">
          <div className="overflow-hidden py-4" ref={emblaRef}>
            <div className="flex touch-pan-y -ml-6">
              {testimonials.map((testi, index) => {
                const isActive = index === selectedIndex;
                return (
                  <div
                    key={testi.id}
                    className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-6"
                  >
                    <div
                      className={`bg-white rounded-xl p-8 h-full flex flex-col transition-all duration-300 border-2 ${isActive ? 'border-[#9a3a54] bg-[#fffafb] shadow-md' : 'border-[#f2e6e8] shadow-sm'}`}
                    >
                      {/* Top Row: Avatar + Stars + Quote Icon */}
                      <div className="flex justify-between items-start mb-6">
                        <div className="flex items-center gap-4">
                          <img src={testi.avatar} alt={testi.name} className="w-20 h-20 rounded-full object-cover shadow-sm" />

                        </div>
                        <FaQuoteRight className="text-4xl text-[#ebd9dc] opacity-60" />
                      </div>

                      {/* Quote Text */}
                      <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-grow">
                        {testi.quote}
                      </p>

                      {/* Divider */}
                      <hr className="border-[#f2e6e8] mb-4" />

                      {/* Footer Info */}
                      <div>
                        <h4 className="font-bold text-[#7f183c] text-lg leading-tight">{testi.name}</h4>
                        <p className="text-xs text-gray-400 mt-1">{testi.location}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={scrollPrev}
            className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 w-10 h-10 rounded-full bg-[#7f183c] text-white flex items-center justify-center hover:bg-[#5a1029] transition-colors shadow-md z-10"
          >
            <FaArrowLeft className="text-sm" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 w-10 h-10 rounded-full bg-[#7f183c] text-white flex items-center justify-center hover:bg-[#5a1029] transition-colors shadow-md z-10"
          >
            <FaArrowRight className="text-sm" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-2 mt-10">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === selectedIndex ? 'bg-[#7f183c] w-3 h-3' : 'bg-[#e8cdd2]'}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
