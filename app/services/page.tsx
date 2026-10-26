import React from 'react';
import { WedBlissTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';

import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { ServicesGridSection } from '@/components/sections/ServicesGridSection';
import { SponsorsSection } from '@/components/sections/SponsorsSection';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function ServicesPage() {
  const templateData: WedBlissTemplateData = rawData;
  const sectionData = templateData?.categories?.WedBliss?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return <div className="text-black p-10">{templateData?.common?.globalUI?.loadingText}</div>;

  return (
    <main className="bg-[var(--color-bg-main)] min-h-screen flex flex-col">

      <Header data={sectionData.Header?.variants?.WedBlissHeader1} />
      <Breadcrumb data={commonData.servicesBreadcrumb} />
      
      {/* Services Grid Section */}
      <ServicesGridSection data={sectionData.ServicesGrid?.variants?.WedBlissServicesGrid1} />

      {/* Sponsors Section */}
      <SponsorsSection data={sectionData.Sponsors?.variants?.WedBlissSponsors1} />

      <Footer data={commonData.Footer} />
    </main>
  );
}

