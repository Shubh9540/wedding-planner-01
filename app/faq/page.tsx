import React from 'react';
import { WedBlissTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { FaqPageSection } from '@/components/sections/FaqPageSection';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function FaqPage() {
  const templateData: WedBlissTemplateData = rawData;
  const sectionData = templateData?.categories?.WedBliss?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return <div className="text-black p-10">{templateData?.common?.globalUI?.loadingText}</div>;

  return (
    <main className="bg-white">
      <Header data={sectionData.Header?.variants?.WedBlissHeader1} />

      <Breadcrumb data={{
        title: 'FAQ',
        paths: [{ label: 'Home', url: '/' }, { label: 'FAQ' }]
      }} />

      <div className="bg-[#fdfaf6]">
        <FaqPageSection data={sectionData.Faq?.variants?.WedBlissFaq1} />
      </div>

      <Footer data={commonData.Footer} />
    </main>
  );
}
