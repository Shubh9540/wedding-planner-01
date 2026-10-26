'use client';

import React, { useState } from 'react';
import { GalleryData } from '@/types/templates.types';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { FaSearch } from 'react-icons/fa';

export const GalleryGridSection = ({ data }: { data?: GalleryData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const itemsPerPage = 9;

  if (!data || !data.images) return null;

  const totalPages = Math.ceil(data.images.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentImages = data.images.slice(startIndex, startIndex + itemsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const showNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % data.images.length);
    }
  };

  const showPrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex === 0 ? data.images.length - 1 : lightboxIndex - 1);
    }
  };

  return (
    <section className="w-full bg-[#fdfaf6] py-16 lg:py-12">
      <div className="max-w-[1250px] mx-auto px-4 md:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center gap-4 text-xs font-bold uppercase tracking-[0.2em] text-[#a78b80] mb-4">
            <span className="w-8 md:w-12 h-[1px] bg-[#a78b80]"></span>
            {data.subtitle}
            <span className="w-8 md:w-12 h-[1px] bg-[#a78b80]"></span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#3f292b] mb-4 font-serif">
            {data.title1} <span className="text-[#a78b80] font-normal">{data.title2}</span>
          </h2>
          {data.description && (
            <p className="text-[#6b7280] max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              {data.description}
            </p>
          )}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {currentImages.map((item, idx) => (
            <div
              key={item.id}
              className="relative group overflow-hidden rounded-md bg-white shadow-sm w-full aspect-[3/2] cursor-pointer"
              onClick={() => openLightbox(startIndex + idx)}
            >
              <img
                src={item.image}
                alt={item.alt || "Gallery Image"}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <FaSearch className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-3xl" />
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-14 flex items-center justify-center gap-2">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className={`w-10 h-10 flex items-center justify-center rounded transition-colors ${currentPage === 1
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-[#eadecc] text-[#6d4141] hover:bg-[#d4b9a1]'
                }`}
            >
              <FiArrowLeft />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
              <button
                key={pageNum}
                onClick={() => handlePageClick(pageNum)}
                className={`w-10 h-10 flex items-center justify-center rounded font-semibold transition-colors ${currentPage === pageNum
                    ? 'bg-[#a78b80] text-white'
                    : 'bg-[#eadecc] text-[#6d4141] hover:bg-[#d4b9a1]'
                  }`}
              >
                {pageNum}
              </button>
            ))}

            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`w-10 h-10 flex items-center justify-center rounded transition-colors ${currentPage === totalPages
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-[#eadecc] text-[#6d4141] hover:bg-[#d4b9a1]'
                }`}
            >
              <FiArrowRight />
            </button>
          </div>
        )}

        {/* Lightbox Modal */}
        {lightboxIndex !== null && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-8"
            onClick={closeLightbox}
          >
            <button 
              className="absolute top-6 right-6 text-white text-3xl hover:text-[#a78b80] transition-colors"
              onClick={closeLightbox}
            >
              &times;
            </button>

            <button
              className="absolute left-4 md:left-10 text-white text-3xl md:text-5xl hover:text-[#a78b80] transition-colors"
              onClick={showPrevImage}
            >
              <FiArrowLeft />
            </button>

            <img 
              src={data.images[lightboxIndex].image} 
              alt={data.images[lightboxIndex].alt || "Gallery Image"} 
              className="max-w-full max-h-[85vh] object-contain rounded-md shadow-2xl"
              onClick={(e) => e.stopPropagation()} 
            />

            <button
              className="absolute right-4 md:right-10 text-white text-3xl md:text-5xl hover:text-[#a78b80] transition-colors"
              onClick={showNextImage}
            >
              <FiArrowRight />
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
