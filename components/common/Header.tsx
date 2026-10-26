'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HeaderData } from '@/types/templates.types';
import { FaArrowRight, FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';

export const Header = ({ data }: { data?: HeaderData }) => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  if (!data) return null;

  return (
    <header className="relative z-40 w-full bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-[1250px] mx-auto w-full flex min-h-[70px] lg:min-h-[90px] items-center px-4 lg:px-8 gap-6 xl:gap-10">
        
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0 mr-auto">
          <img src={data.logo} alt={data.logoAlt || 'Logo'} className="h-10 md:h-12 lg:h-[60px] xl:h-[70px] object-contain" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-2 xl:gap-6">
          {data.navLinks?.map((link) => {
            const isActive = pathname === link.url;
            return (
              <Link 
                key={link.id} 
                href={link.url} 
                className={`relative flex items-center gap-1.5 whitespace-nowrap text-sm xl:text-base font-semibold px-4 xl:px-5 py-2.5 rounded-full transition-all duration-300 ${
                  isActive 
                    ? 'bg-[var(--color-accent-muted)] text-white' 
                    : 'text-[var(--color-primary)] hover:text-[var(--color-accent)]'
                }`}
              >
                {link.label}
                {link.hasDropdown && <FaChevronDown className="text-[10px]" />}
              </Link>
            );
          })}
        </nav>

        {/* Action Button & Mobile Menu */}
        <div className="flex items-center gap-4 shrink-0">
          {data.contactButton && (
            <Link 
              href={data.contactButton.url} 
              className="hidden lg:flex items-center justify-center gap-2 bg-[var(--color-accent-muted)] px-5 xl:px-6 py-2.5 xl:py-3 rounded-full text-sm xl:text-base font-semibold text-white transition-colors hover:bg-[var(--color-accent)]"
            >
              {data.contactButton.text.replace('->', '').trim()}
              {data.contactButton.text.includes('->') && <FaArrowRight className="text-sm" />}
            </Link>
          )}

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="flex h-10 w-10 items-center justify-center rounded-md text-xl text-[var(--color-primary)] lg:hidden"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="absolute left-0 top-full flex max-h-[calc(100vh-70px)] w-full flex-col overflow-y-auto border-t border-[#e8e1ee] bg-white p-4 shadow-lg lg:hidden">
          {data.navLinks?.map((link) => {
            const isActive = pathname === link.url;
            return (
              <Link 
                key={link.id} 
                href={link.url} 
                onClick={() => setMobileMenuOpen(false)} 
                className={`flex items-center justify-between border-b border-[#eee9f2] px-4 py-3 text-base font-semibold ${
                  isActive ? 'text-[var(--color-accent)]' : 'text-[var(--color-primary)]'
                }`}
              >
                {link.label}
                {link.hasDropdown && <FaChevronDown className="text-sm" />}
              </Link>
            );
          })}
          {data.contactButton && (
            <Link 
              href={data.contactButton.url} 
              onClick={() => setMobileMenuOpen(false)} 
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[var(--color-accent-muted)] px-6 py-3 text-base font-semibold text-white"
            >
              {data.contactButton.text.replace('->', '').trim()}
              {data.contactButton.text.includes('->') && <FaArrowRight className="text-sm" />}
            </Link>
          )}
        </div>
      )}
    </header>
  );
};
