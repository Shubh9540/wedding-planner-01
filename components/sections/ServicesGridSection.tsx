'use client';
import React, { useState } from 'react';
import { ServicesGridData } from '@/types/templates.types';
import Link from 'next/link';
import { FaRing, FaBirthdayCake, FaUsers, FaGlassCheers, FaHeart, FaFan, FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaRing': return <FaRing />;
    case 'FaBirthdayCake': return <FaBirthdayCake />;
    case 'FaUsers': return <FaUsers />;
    case 'FaGlassCheers': return <FaGlassCheers />;
    case 'FaHeart': return <FaHeart />;
    case 'FaFan': return <FaFan />;
    default: return <FaRing />;
  }
};

export const ServicesGridSection = ({ data }: { data?: ServicesGridData }) => {
  const [currentPage, setCurrentPage] = useState(1);

  if (!data) return null;

  const itemsPerPage = 6;
  const totalPages = Math.ceil(data.services.length / itemsPerPage);
  
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const currentServices = data.services.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <section className="w-full py-20 lg:py-12 bg-[#faf7f2] relative">
      <div className="max-w-[1250px] mx-auto px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-px bg-[#d4beb5]" />
            <h4 className="text-[#a78b80] font-bold text-xs tracking-[0.2em] uppercase">
              {data.subtitle}
            </h4>
            <div className="w-16 h-px bg-[#d4beb5]" />
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-[56px] font-serif font-bold leading-tight mb-6">
            <span className="text-[var(--color-primary)] mr-3">{data.title1}</span>
            <span className="text-[#a78b80]">{data.title2}</span>
          </h2>

          {/* Rings Divider */}
          <div className="flex items-center gap-2 mb-6">
            <div className="w-12 h-px bg-[#d4beb5]" />
            <div className="text-[#d4beb5] flex -space-x-2">
              {/* Simple rings SVG */}
              <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg">
                <circle cx="9" cy="12" r="5"></circle>
                <circle cx="15" cy="12" r="5"></circle>
              </svg>
            </div>
            <div className="w-12 h-px bg-[#d4beb5]" />
          </div>

          <p className="text-[var(--color-text-light)] max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            {data.description}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {currentServices.map((service) => (
            <Link
              href={service.url}
              key={service.id}
              className="group block relative w-full h-[300px] overflow-hidden"
            >
              {/* Background Image */}
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Bottom Bar */}
              <div className="absolute bottom-0 left-0 w-full bg-[#4a3b43]/90 backdrop-blur-sm p-4 flex items-center justify-between text-white transition-all duration-300">
                {/* Left Icon */}
                <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-sm">
                  {renderIcon(service.icon)}
                </div>

                {/* Title */}
                <h3 className="text-lg font-serif tracking-wide text-center flex-1">
                  {service.title}
                </h3>

                {/* Right Arrow */}
                <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-sm group-hover:bg-white group-hover:text-[#4a3b43] transition-colors duration-300">
                  <FaArrowRight />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2">
            <button 
              onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className={`w-10 h-10 flex items-center justify-center transition-colors duration-300 ${currentPage === 1 ? 'bg-[#f0e8e5]/50 text-[#a78b80]/50 cursor-not-allowed' : 'bg-[#f0e8e5] text-[#a78b80] hover:bg-[#a78b80] hover:text-white'}`}
            >
              <FaArrowLeft className="text-xs" />
            </button>
            
            {Array.from({ length: totalPages }).map((_, idx) => {
              const pageNumber = idx + 1;
              return (
                <button 
                  key={`page-${pageNumber}`}
                  onClick={() => handlePageChange(pageNumber)}
                  className={`w-10 h-10 flex items-center justify-center transition-colors duration-300 ${currentPage === pageNumber ? 'bg-[#a78b80] text-white' : 'bg-[#f0e8e5] text-[#a78b80] hover:bg-[#a78b80] hover:text-white'}`}
                >
                  {pageNumber}
                </button>
              );
            })}

            <button 
              onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className={`w-10 h-10 flex items-center justify-center transition-colors duration-300 ${currentPage === totalPages ? 'bg-[#f0e8e5]/50 text-[#a78b80]/50 cursor-not-allowed' : 'bg-[#f0e8e5] text-[#a78b80] hover:bg-[#a78b80] hover:text-white'}`}
            >
              <FaArrowRight className="text-xs" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
