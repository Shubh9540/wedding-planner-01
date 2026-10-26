import React from 'react';
import { WedBlissTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';

import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { EnquirySection } from '@/components/sections/EnquirySection';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function QuotePage() {
  const templateData: WedBlissTemplateData = rawData;
  const sectionData = templateData?.categories?.WedBliss?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return <div className="text-black p-10">{templateData?.common?.globalUI?.loadingText}</div>;

  return (
    <main className="bg-white">

      <Header data={sectionData.Header?.variants?.WedBlissHeader1} />
      <Breadcrumb data={{
        title: 'Get a Quote',
        paths: [{ label: 'Home', url: '/' }, { label: 'Get a Quote' }]
      }} />
      
      {/* Enquiry Section */}
      <div className="pb-16">
        <EnquirySection data={sectionData.enquiry?.variants?.WedBlissEnquiry1} />
      </div>

      <Footer data={commonData.Footer} />
    </main>
  );
}

