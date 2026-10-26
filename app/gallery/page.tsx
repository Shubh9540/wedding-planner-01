import React from 'react';
import { WedBlissTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { GalleryGridSection } from '@/components/sections/GalleryGridSection';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function GalleryPage() {
  const templateData: WedBlissTemplateData = rawData;
  const sectionData = templateData?.categories?.WedBliss?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return <div className="text-black p-10">{templateData?.common?.globalUI?.loadingText}</div>;

  return (
    <main className="bg-white">
      <Header data={sectionData.Header?.variants?.WedBlissHeader1} />
      
      <Breadcrumb data={{
        title: 'Gallery',
        paths: [{ label: 'Home', url: '/' }, { label: 'Gallery' }]
      }} />
      
      <GalleryGridSection data={sectionData.Gallery?.variants?.WedBlissGalleryGrid1} />

      <Footer data={commonData.Footer} />
    </main>
  );
}
