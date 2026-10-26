import React from 'react';
import Link from 'next/link';
import { WedBlissTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';

import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { FaArrowLeft } from 'react-icons/fa';

export default function NotFoundPage() {
  const templateData: WedBlissTemplateData = rawData;
  const sectionData = templateData?.categories?.WedBliss?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return <div className="text-black p-10">{templateData?.common?.globalUI?.loadingText}</div>;

  return (
    <main className="bg-white min-h-screen flex flex-col">

      <Header data={sectionData.Header?.variants?.WedBlissHeader1} />
      
      <section className="w-full flex-grow py-20 md:py-32 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-8xl md:text-9xl font-extrabold text-[var(--color-primary)] mb-4 drop-shadow-sm">404</h1>
        <h2 className="text-2xl md:text-4xl font-bold text-[#051024] mb-6">Oops! Page Not Found</h2>
        <p className="text-gray-500 mb-10 max-w-lg text-sm md:text-base leading-relaxed">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link 
          href="/"
          className="inline-flex items-center gap-2 bg-[var(--color-primary)] hover:bg-[var(--color-accent)] text-white font-bold py-4 px-8 rounded-xl transition-colors text-sm shadow-md"
        >
          <FaArrowLeft />
          Back to Home
        </Link>
      </section>

      <Footer data={commonData.Footer} />
    </main>
  );
}

