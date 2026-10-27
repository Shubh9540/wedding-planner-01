'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { GalleryData } from '@/types/templates.types';
import { FaChevronLeft, FaChevronRight, FaTimes, FaSearchPlus } from 'react-icons/fa';

export const GallerySection = ({ data }: { data?: GalleryData }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const images = data?.images || [];

  const handlePrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : images.length - 1));
  }, [selectedIndex, images.length]);

  const handleNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev !== null && prev < images.length - 1 ? prev + 1 : 0));
  }, [selectedIndex, images.length]);

  const handleClose = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  // Keyboard navigation support
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, handleClose, handlePrev, handleNext]);

  if (!data || images.length === 0) return null;

  return (
    <section id="gallery" className="w-full bg-[#faf7f2] py-16 lg:py-12 scroll-mt-20">
      <div className="max-w-[1250px] mx-auto px-4 md:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-12">
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

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {images.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setSelectedIndex(index)}
              className="relative group overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 w-full aspect-[4/3] border border-[var(--color-border)] cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Subtle hover overlay with zoom icon */}
              <div className="absolute inset-0 bg-[var(--color-primary)]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/90 text-[var(--color-primary)] flex items-center justify-center shadow-lg transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                  <FaSearchPlus className="w-5 h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div 
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 select-none animate-fadeIn"
          onClick={handleClose}
        >
          {/* Close button */}
          <button
            onClick={handleClose}
            aria-label="Close lightbox"
            className="absolute top-5 right-5 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <FaTimes className="w-5 h-5" />
          </button>

          {/* Prev Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            aria-label="Previous image"
            className="absolute left-4 md:left-8 z-20 w-12 h-12 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-all cursor-pointer hover:scale-110"
          >
            <FaChevronLeft className="w-5 h-5 -translate-x-0.5" />
          </button>

          {/* Active Image Container */}
          <div 
            className="relative max-w-5xl max-h-[85vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[selectedIndex].image}
              alt={images[selectedIndex].alt}
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl border border-white/10"
            />
            {images[selectedIndex].alt && (
              <p className="mt-4 text-white/80 text-sm md:text-base font-medium text-center px-4">
                {images[selectedIndex].alt}
              </p>
            )}
            <div className="mt-2 text-white/50 text-xs tracking-wider">
              {selectedIndex + 1} / {images.length}
            </div>
          </div>

          {/* Next Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            aria-label="Next image"
            className="absolute right-4 md:right-8 z-20 w-12 h-12 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-all cursor-pointer hover:scale-110"
          >
            <FaChevronRight className="w-5 h-5 translate-x-0.5" />
          </button>
        </div>
      )}
    </section>
  );
};

