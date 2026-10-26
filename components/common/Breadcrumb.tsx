import React from 'react';
import Link from 'next/link';
import { FaHome } from 'react-icons/fa';

export const Breadcrumb = ({ data }: { data?: any }) => {
  if (!data) return null;

  return (
    <section 
      className="w-full relative min-h-[350px] md:min-h-[450px] flex flex-col items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url('${data.bgImage || '/main logo/breadcrumb.webp'}')` }}
    >
      {/* Dark Overlay matching image (purple/black tone) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1c0c1b]/60 via-[#100713]/80 to-[#0e0711]/95 z-0"></div>

      <div className="relative z-10 text-center w-full px-4 pt-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-3 uppercase tracking-wide">
          {data.title}
        </h1>
        {data.subtitle && (
          <p className="text-sm md:text-[15px] text-gray-200 font-medium tracking-wide">
            {data.subtitle}
          </p>
        )}
      </div>

      {/* Bottom Bar for breadcrumb links */}
      <div className="absolute bottom-0 left-0 w-full bg-[#110512] border-r-[3px] border-[#e91e63]">
        <div className="max-w-[1250px] mx-auto px-4 py-4 flex items-center justify-center">
          <div className="flex items-center gap-2 text-[14px] font-medium">
            {data.paths?.map((path: any, index: number) => (
              <React.Fragment key={index}>
                {index === 0 && <FaHome className="text-gray-300 text-sm mr-1 pb-[1px]" />}
                {path.url ? (
                  <Link href={path.url} className="text-gray-300 hover:text-white transition-colors">
                    {path.label}
                  </Link>
                ) : (
                  <span className="text-white font-semibold">{path.label}</span>
                )}
                
                {index < data.paths.length - 1 && (
                  <span className="text-gray-500 mx-1">/</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

