import React from 'react';
import { WedBlissTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';

import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { AboutPageSection } from '@/components/sections/AboutPageSection';

import { WhatWeDoSection } from '@/components/sections/WhatWeDoSection';
import { CounterSection } from '@/components/sections/CounterSection';
import { TeamSection } from '@/components/sections/TeamSection';
import { TestimonialSection } from '@/components/sections/TestimonialSection';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function Page() {
  const templateData: WedBlissTemplateData = rawData;
  const sectionData = templateData?.categories?.WedBliss?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return <div className="text-black p-10">{templateData?.common?.globalUI?.loadingText}</div>;

  return (
    <main className="bg-[var(--color-bg-main)] min-h-screen flex flex-col">

      <Header data={sectionData.Header?.variants?.WedBlissHeader1} />
      <Breadcrumb data={commonData.aboutBreadcrumb} />
      
      {/* About Us Section */}
      <AboutPageSection data={sectionData.AboutUs?.variants?.WedBlissAboutUs1} />

      {/* What We Do Section */}
      <WhatWeDoSection data={sectionData.WhatWeDo?.variants?.WedBlissWhatWeDo1} />

      {/* Counter Section */}
      <CounterSection data={sectionData.Counter?.variants?.WedBlissCounter1} />

      {/* Team Section */}
      <TeamSection data={sectionData.Team?.variants?.WedBlissTeam1} />

      {/* Testimonials Section */}
      <TestimonialSection data={sectionData.Testimonials?.variants?.WedBlissTestimonials1} />

      <Footer data={commonData.Footer} />
    </main>
  );
}

