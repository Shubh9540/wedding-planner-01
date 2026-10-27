
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
    <div className="h-px bg-[var(--color-accent-light)] opacity-40 flex-1"></div>
    <div className="px-3 text-[var(--color-accent-light)] flex justify-center items-center relative">
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
    <div className="h-px bg-[var(--color-accent-light)] opacity-40 flex-1"></div>
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
    <footer className="w-full relative bg-[var(--color-primary)] overflow-hidden mt-0 text-white">
      
      {/* Decorative SVGs */}
      <div className="absolute bottom-0 left-0 w-64 h-64 opacity-10 pointer-events-none" style={{ background: 'radial-gradient(circle at bottom left, #c29d59 0%, transparent 60%)' }}></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 opacity-10 pointer-events-none" style={{ background: 'radial-gradient(circle at bottom right, #c29d59 0%, transparent 60%)' }}></div>

      {/* Main Content Area */}
      <div className="pt-16 pb-12 relative z-10">
        <div className="max-w-[1250px] mx-auto px-6 lg:px-8 flex flex-col items-center text-center">
          
          {/* Brand Logo & Tagline */}
          <div className="flex flex-col items-center mb-8">
            <img 
              src={data.logoImage} 
              alt={data.logoAlt || 'WedBliss Logo'} 
              className="h-16 md:h-20 object-contain mb-4" 
            />
            <p className="text-gray-300 text-sm md:text-base max-w-xl leading-relaxed mt-2 font-serif">
              {data.description}
            </p>
          </div>

          <RingsDivider className="w-full max-w-md mb-8" />

          {/* Quick Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mb-8">
            {data.quickLinks.map((link) => (
              <Link 
                key={link.id} 
                href={link.url} 
                className="text-sm md:text-base text-gray-200 hover:text-[var(--color-accent-light)] font-medium tracking-wide transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Contact Details Bar */}
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 mb-10 text-xs md:text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-[var(--color-accent-light)]" />
              <span>{data.contactInfo.address}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-[var(--color-accent-light)]" />
              <span>{data.contactInfo.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-[var(--color-accent-light)]" />
              <span>{data.contactInfo.email}</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 mb-10">
            {data.socialLinks.map((social) => (
              <Link 
                key={social.id} 
                href={social.url} 
                className="w-10 h-10 rounded-full bg-[var(--color-accent)] border border-[var(--color-accent-light)]/40 flex items-center justify-center text-white hover:bg-[var(--color-accent-light)] hover:text-[var(--color-primary)] transition-all duration-300 shadow-sm"
              >
                {renderSocialIcon(social.icon)}
              </Link>
            ))}
          </div>

          {/* Copyright */}
          <div className="w-full pt-8 border-t border-[var(--color-accent-light)]/20 text-xs text-gray-400">
            {data.copyrightText}
          </div>

        </div>
      </div>

      {/* Fixed Scroll To Top Button */}
      {showScrollTop && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-[var(--color-accent-muted)] text-white flex items-center justify-center shadow-lg hover:bg-[var(--color-accent-light)] hover:text-[var(--color-primary)] hover:-translate-y-1 transition-all duration-300 animate-fade-in"
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      )}

    </footer>
  );
};
