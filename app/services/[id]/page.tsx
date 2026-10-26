import React from 'react';
import { WedBlissTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { ServiceDetailContent } from '@/components/sections/ServiceDetailContent';
import { Footer } from '@/components/common/Footer';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default async function ServiceDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const id = resolvedParams.id;
  
  const templateData: WedBlissTemplateData = rawData;
  const sectionData = templateData?.categories?.WedBliss?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return <div className="text-black p-10">{templateData?.common?.globalUI?.loadingText}</div>;

  const allServicesList = sectionData.ServicesGrid?.variants?.WedBlissServicesGrid1?.services || [];
  
  // Try to find full detail data first
  let serviceDetailData: any = sectionData.ServiceDetail?.variants?.[id];
  const baseTemplate: any = sectionData.ServiceDetail?.variants?.wedding || {};

  // If no full detail data exists for this ID, we create a fallback from the list data
  // so the page doesn't crash and we display dummy data using the base template
  if (!serviceDetailData) {
    const listData = allServicesList.find(s => s.url.endsWith(`/${id}`));
    if (!listData) notFound();

    const words = listData.title.split(' ');
    const title1 = words[0] || "";
    const title2 = words.slice(1).join(' ') || "";

    serviceDetailData = {
      ...baseTemplate,
      id: id,
      title1: title1,
      title2: title2,
      description: `Your ${listData.title.toLowerCase()} is more than just an event — it's a beautiful journey. We create magical experiences with flawless planning, creative themes, and personalized details that reflect your unique story.`,
      imageMain: listData.image,
      imageSmall1: baseTemplate.imageSmall1 || "/service/private party.webp",
      imageSmall2: baseTemplate.imageSmall2 || "/service/corporate party.webp",
    };
  }

  // ALWAYS override the sidebar services list with the actual ServicesGrid items
  // so the links are always correct and cover all services
  serviceDetailData = {
    ...serviceDetailData,
    sidebar: {
      ...(serviceDetailData.sidebar || baseTemplate.sidebar || {}),
      servicesList: {
        title: "Our Services",
        services: allServicesList.map(s => ({ 
          id: s.url.split('/').pop() || s.id, 
          label: s.title, 
          url: s.url 
        }))
      }
    }
  };

  // Create breadcrumb data for the specific service
  const breadcrumbData = {
    title: `${serviceDetailData.title1} ${serviceDetailData.title2}`.trim(),
    paths: [
      { label: 'Home', url: '/' },
      { label: 'Services', url: '/services' },
      { label: `${serviceDetailData.title1} ${serviceDetailData.title2}`.trim() }
    ]
  };

  return (
    <main className="bg-white">      
      <Header data={sectionData.Header?.variants?.WedBlissHeader1} />
      
      <Breadcrumb data={breadcrumbData} />
      
      {/* Service Detail Component */}
      <ServiceDetailContent data={serviceDetailData} />

      <Footer data={commonData.Footer} />
    </main>
  );
}
