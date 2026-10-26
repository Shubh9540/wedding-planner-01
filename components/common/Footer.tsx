
'use client';
import React, { useEffect, useState } from 'react';
import { FooterData } from '@/types/templates.types';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaChevronRight, FaArrowUp, FaTwitter, FaYoutube } from 'react-icons/fa';

const renderSocialIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaFacebookF': return <FaFacebookF size={14} />;
    case 'FaInstagram': return <FaInstagram size={14} />;
    case 'FaLinkedinIn': return <FaLinkedinIn size={14} />;
    case 'FaTwitter': return <FaTwitter size={14} />;
    case 'FaYoutube': return <FaYoutube size={14} />; // mapping youtube to twitter since JSON might have youtube
    default: return <FaFacebookF size={14} />;
  }
};

const RingsDivider = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center justify-center ${className}`}>
    <div className="h-px bg-[#c49250] flex-1"></div>
    <div className="px-3 text-[#c49250] flex justify-center items-center relative">
      {/* Heart on top of rings */}
      <svg viewBox="0 0 24 24" width="10" height="10" className="absolute -top-[6px]" fill="currentColor">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
      {/* Two interlocking rings */}
      <svg viewBox="0 0 32 16" width="32" height="16">
        <circle cx="10" cy="8" r="7" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="22" cy="8" r="7" fill="none" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    </div>
    <div className="h-px bg-[#c49250] flex-1"></div>
  </div>
);

export const Footer = ({ data }: { data?: FooterData }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!data) return null;

  return (
    <footer className="w-full relative bg-[#2a1315] overflow-hidden mt-0">
      
      {/* Decorative Floral SVGs (approximated with CSS gradients/opacity for now, or actual SVGs if provided) */}
      <div className="absolute bottom-0 left-0 w-64 h-64 opacity-20 pointer-events-none" style={{ background: 'radial-gradient(circle at bottom left, #c49250 0%, transparent 60%)' }}></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 opacity-20 pointer-events-none" style={{ background: 'radial-gradient(circle at bottom right, #c49250 0%, transparent 60%)' }}></div>

      {/* Main Content Area */}
      <div className="pt-16 pb-8 relative z-10">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 lg:divide-x lg:divide-[#c49250]/30">
            
            {/* Column 1: Brand & Contact */}
            <div className="pr-0 lg:pr-6">
              <img src={data.logoImage} alt={data.logoAlt || 'WedBliss Logo'} className="h-14 object-contain mb-5" />
              
              <RingsDivider className="mb-6 w-[70%]" />
              
              <p className="text-gray-200 text-[15px] leading-relaxed mb-8 pr-4">
                {data.description}
              </p>
              

            </div>

            {/* Column 2: Our Services */}
            <div className="pl-0 lg:pl-8">
              <h3 className="text-[22px] font-serif text-white mb-4">Our Services</h3>
              <div className="w-8 h-[2px] bg-[#c49250] mb-8"></div>
              <ul className="flex flex-col gap-5">
                {data.servicesLinks.map((link) => (
                  <li key={link.id}>
                    <Link href={link.url} className="text-gray-200 text-[15px] hover:text-[#c49250] transition-colors flex items-center gap-4">
                      <FaChevronRight className="text-[#c49250] text-[12px]" /> {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Useful Links */}
            <div className="pl-0 lg:pl-8">
              <h3 className="text-[22px] font-serif text-white mb-4">Useful Links</h3>
              <div className="w-8 h-[2px] bg-[#c49250] mb-8"></div>
              <ul className="flex flex-col gap-5">
                {data.quickLinks.map((link) => (
                  <li key={link.id}>
                    <Link href={link.url} className="text-gray-200 text-[15px] hover:text-[#c49250] transition-colors flex items-center gap-4">
                      <FaChevronRight className="text-[#c49250] text-[12px]" /> {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact Us */}
            <div className="pl-0 lg:pl-8">
              <h3 className="text-[22px] font-serif text-white mb-4">Contact Us</h3>
              <div className="w-8 h-[2px] bg-[#c49250] mb-8"></div>
              <ul className="flex flex-col gap-6">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#4a262a] flex items-center justify-center text-[#c49250] shrink-0 mt-1">
                    <FaMapMarkerAlt size={16} />
                  </div>
                  <div>
                    <p className="text-gray-200 text-[15px] leading-snug pt-1">
                      {data.contactInfo.address}
                    </p>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#4a262a] flex items-center justify-center text-[#c49250] shrink-0">
                    <FaEnvelope size={16} />
                  </div>
                  <div>
                    <p className="text-gray-200 text-[15px] pt-1">{data.contactInfo.email}</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#4a262a] flex items-center justify-center text-[#d9a8b1] shrink-0 mt-1">
                    <FaPhoneAlt size={16} />
                  </div>
                  <div>
                    <p className="text-gray-200 text-[15px] leading-snug pt-1">
                      {data.contactInfo.phone}<br/>Support: {data.contactInfo.phone}
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            
          </div>
          
          {/* Bottom Divider */}
          <div className="mt-16 mb-8">
            <RingsDivider />
          </div>

          {/* Copyright Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-200 text-[14px] text-center md:text-left flex-1 md:text-center ml-0 md:ml-12">
              {data.copyrightText}
            </p>
            <div className="flex items-center gap-3">
              {data.socialLinks.map(social => (
                <Link 
                  key={social.id} 
                  href={social.url} 
                  className="w-10 h-10 rounded-full bg-[#4a262a] flex items-center justify-center text-white hover:bg-[#c49250] transition-colors shadow-sm"
                >
                  {renderSocialIcon(social.icon)}
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Fixed Scroll To Top Button */}
      {showScrollTop && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-[#4a262a] text-white flex items-center justify-center shadow-lg hover:opacity-90 hover:-translate-y-1 transition-all duration-300 animate-fade-in"
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      )}

    </footer>
  );
};
