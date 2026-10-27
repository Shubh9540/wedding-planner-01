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
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/common/Footer';

export default function Home() {
  const templateData: WedBlissTemplateData = rawData;
  const sectionData = templateData?.categories?.WedBliss?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) {
    return <div className="text-black p-10">{templateData?.common?.globalUI?.loadingText}</div>;
  }

  return (
    <main className="bg-[var(--color-bg-main)] min-h-screen flex flex-col scroll-smooth w-full overflow-x-hidden">
      <Header data={sectionData.Header?.variants?.WedBlissHeader2} />
      <HeroSection data={sectionData.Hero?.variants?.WedBlissHero2} />
      <AboutUsSection data={sectionData.AboutUs?.variants?.WedBlissAboutUs2} />
      <ServicesSection data={sectionData.Services?.variants?.WedBlissServices2} />
      <WhatWeDoSection data={sectionData.WhatWeDo?.variants?.WedBlissWhatWeDo2} />
      <GallerySection data={sectionData.Gallery?.variants?.WedBlissGallery2} />
      <TestimonialSection data={sectionData.Testimonials?.variants?.WedBlissTestimonials2} />
      <FaqSection data={sectionData.Faq?.variants?.WedBlissFaq2} />
      <ContactSection data={sectionData.Contact?.variants?.WedBlissContact2} />
      <Footer data={commonData.Footer} />
    </main>
  );
}
