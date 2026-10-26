import React from 'react';
import { WedBlissTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';

import { Header } from '@/components/common/Header';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutUsSection } from '@/components/sections/AboutUsSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { WhatWeDoSection } from '@/components/sections/WhatWeDoSection';
import { GallerySection } from '@/components/sections/GallerySection';

import { TestimonialSection } from '@/components/sections/TestimonialSection';
import { FaqSection } from '@/components/sections/FaqSection';


import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function Home() {
  const templateData: WedBlissTemplateData = rawData;
  const sectionData = templateData?.categories?.WedBliss?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return <div className="text-black p-10">{templateData?.common?.globalUI?.loadingText}</div>;

  return (
    <main className="bg-[var(--color-bg-main)] min-h-screen flex flex-col">

      <Header data={sectionData.Header?.variants?.WedBlissHeader1} />
      <HeroSection data={sectionData.Hero?.variants?.WedBlissHero1} />
      <AboutUsSection data={sectionData.AboutUs?.variants?.WedBlissAboutUs1} />
      <ServicesSection data={sectionData.Services?.variants?.WedBlissServices1} />
      <WhatWeDoSection data={sectionData.WhatWeDo?.variants?.WedBlissWhatWeDo1} />
      <GallerySection data={sectionData.Gallery?.variants?.WedBlissGallery1} />
      <TestimonialSection data={sectionData.Testimonials?.variants?.WedBlissTestimonials1} />
      <FaqSection data={sectionData.Faq?.variants?.WedBlissFaq1} />


      <Footer data={commonData.Footer} />
    </main>
  );
}

