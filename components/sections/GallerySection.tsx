import React from 'react';
import { GalleryData } from '@/types/templates.types';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

export const GallerySection = ({ data }: { data?: GalleryData }) => {
  if (!data || !data.images) return null;

  return (
    <section className="w-full bg-[#fdfaf6] py-16 lg:py-12">
      <div className="max-w-[1250px] mx-auto px-4 md:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-12">
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

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {data.images.map((item) => (
            <div
              key={item.id}
              className="relative group overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300 w-full aspect-[4/3]"
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

        {/* View More Button */}
        {data.button && (
          <div className="mt-12 flex justify-center">
            <Link
              href={data.button.url}
              className="inline-flex items-center gap-2 bg-[#7f183c] hover:opacity-90 text-white font-bold py-3 px-8 rounded transition-opacity"
            >
              {data.button.text}
              <FaArrowRight className="text-xs font-normal" />
            </Link>
          </div>
        )}

      </div>
    </section>
  );
};
