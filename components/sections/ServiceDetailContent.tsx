'use client';

import React, { useState } from 'react';
import { ServiceDetailData } from '@/types/templates.types';
import Link from 'next/link';
import {
  FiHeart, FiMapPin, FiStar, FiCamera, FiCoffee, FiMusic, FiGift, FiClipboard,
  FiPhoneCall, FiMail, FiMap, FiPlus, FiMinus, FiChevronDown, FiArrowRight
} from 'react-icons/fi';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FiHeart': return <FiHeart />;
    case 'FiMapPin': return <FiMapPin />;
    case 'FiStar': return <FiStar />;
    case 'FiCamera': return <FiCamera />;
    case 'FiCoffee': return <FiCoffee />;
    case 'FiMusic': return <FiMusic />;
    case 'FiGift': return <FiGift />;
    case 'FiClipboard': return <FiClipboard />;
    default: return <FiHeart />;
  }
};

export const ServiceDetailContent = ({ data }: { data?: ServiceDetailData }) => {
  const [openProcess, setOpenProcess] = useState<string | null>(data?.processSteps?.[0]?.id || null);

  if (!data) return null;

  return (
    <section className="w-full py-16 md:py-12 bg-[#fdfaf6] relative">
      <div className="max-w-[1250px] mx-auto px-4 md:px-6 lg:px-8 flex flex-col lg:flex-row gap-8 lg:gap-10">

        {/* Left Side: Main Content */}
        <div className="w-full lg:w-[70%]">

          {/* Images Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="md:col-span-2 h-[300px] md:h-[420px] rounded-lg overflow-hidden">
              <img src={data.imageMain} alt={data.title1} className="w-full h-full object-cover" />
            </div>
            {data.imageSmall1 && data.imageSmall2 && (
              <div className="hidden md:flex flex-col gap-4 h-[420px]">
                <div className="flex-1 rounded-lg overflow-hidden">
                  <img src={data.imageSmall1} alt="Detail 1" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 rounded-lg overflow-hidden">
                  <img src={data.imageSmall2} alt="Detail 2" className="w-full h-full object-cover" />
                </div>
              </div>
            )}
          </div>

          {/* Title & Description */}
          <div className="mb-10">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[var(--color-primary)] mb-4">
              {data.title1} <span className="text-[#a78b80]">{data.title2}</span>
            </h2>
            <p className="text-[var(--color-text-light)] text-sm md:text-base leading-relaxed">
              {data.description}
            </p>
          </div>

          {/* Feature Grid */}
          <div className="bg-[#f3efea] p-6 md:p-8 rounded-lg mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
              {data.features.map(feat => (
                <div key={feat.id} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#a78b80] text-white flex items-center justify-center shrink-0">
                    {renderIcon(feat.icon)}
                  </div>
                  <span className="text-sm md:text-base text-[var(--color-primary)]">
                    {feat.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Our Approach */}
          <div className="mb-8">
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-[var(--color-primary)] mb-4">
              {data.processTitle} <span className="text-[#a78b80]">Approach</span>
            </h3>
            {data.processDescription && (
              <p className="text-[var(--color-text-light)] text-sm md:text-base leading-relaxed mb-8">
                {data.processDescription}
              </p>
            )}

            <div className="flex flex-col gap-4">
              {data.processSteps.map(step => {
                const isOpen = openProcess === step.id;
                return (
                  <div key={step.id} className="border border-[#e8ded8] rounded-md overflow-hidden bg-white shadow-sm">
                    <button
                      onClick={() => setOpenProcess(isOpen ? null : step.id)}
                      className="w-full flex items-center justify-between p-4 text-left font-semibold text-[var(--color-primary)] text-sm md:text-base transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-full bg-[#a78b80] text-white flex items-center justify-center text-sm shrink-0">
                          {isOpen ? <FiMinus /> : <FiPlus />}
                        </div>
                        {step.title}
                      </div>
                      <span className="text-[#a78b80] shrink-0 ml-4">
                        <FiChevronDown className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                      </span>
                    </button>
                    {isOpen && step.description && (
                      <div className="p-4 pt-0 pl-[60px] text-sm text-[var(--color-text-light)] leading-relaxed animate-in slide-in-from-top-2 fade-in duration-300">
                        {step.description}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Right Side: Sidebar */}
        <div className="w-full lg:w-[30%] flex flex-col gap-8 sticky top-6 h-fit pb-10">

          {/* Services List Card */}
          <div className="bg-[#fcfaf9] border border-[#d4beb5] rounded-md overflow-hidden">
            <div className="bg-[#a78b80] p-4">
              <h4 className="text-xl font-serif text-white">{data.sidebar.servicesList.title}</h4>
            </div>
            <div className="flex flex-col">
              {data.sidebar.servicesList.services.map((service) => {
                const isActive = service.id === data.id;
                return (
                  <Link
                    key={service.id}
                    href={service.url}
                    className={`flex items-center justify-between p-4 text-sm font-semibold transition-all border-b border-[#eee8e3] last:border-0 ${isActive
                        ? 'bg-white text-[#9e4646] border-l-4 border-l-[#9e4646]'
                        : 'text-[var(--color-text)] hover:text-[#9e4646] hover:bg-white border-l-4 border-l-transparent'
                      }`}
                  >
                    {service.label}
                    <FiChevronDown className={`-rotate-90 ${isActive ? 'text-[#9e4646]' : 'text-gray-400'}`} />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Contact Card */}
          {data.sidebar.contactCard && (
            <div className="relative rounded-md overflow-hidden p-8 text-center" style={{ backgroundImage: `url('${data.sidebar.contactCard.bgImage}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <div className="absolute inset-0 bg-gradient-to-r from-[#fdfaf6] via-[#fdfaf6]/90 to-transparent z-0"></div>
              <div className="relative z-10 text-left">
                <h4 className="text-2xl font-serif font-bold text-[#6d4141] mb-2">{data.sidebar.contactCard.title}</h4>
                <p className="text-sm text-[#8c6b6b] mb-6">{data.sidebar.contactCard.description}</p>

                <div className="flex flex-col gap-4 items-start text-sm text-[#4a3b43] mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#a78b80] text-white flex items-center justify-center shrink-0">
                      <FiPhoneCall />
                    </div>
                    <span>{data.sidebar.contactCard.phone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#a78b80] text-white flex items-center justify-center shrink-0">
                      <FiMail />
                    </div>
                    <span>{data.sidebar.contactCard.email}</span>
                  </div>
                  <div className="flex items-center gap-3 text-left">
                    <div className="w-8 h-8 rounded-full bg-[#a78b80] text-white flex items-center justify-center shrink-0">
                      <FiMap />
                    </div>
                    <span>{data.sidebar.contactCard.address}</span>
                  </div>
                </div>

                <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-[#a78b80] hover:bg-[#8e746a] text-white px-6 py-3 rounded-md text-sm transition-colors shadow-sm w-fit">
                  {data.sidebar.contactCard.buttonText.replace('->', '')}
                  <FiArrowRight />
                </Link>
              </div>
            </div>
          )}

          {/* Why Choose Us Card */}
          {data.sidebar.whyChooseUsCard && (
            <div className="relative rounded-md overflow-hidden p-8" style={{ backgroundImage: `url('${data.sidebar.whyChooseUsCard.bgImage}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <div className="absolute inset-0 bg-gradient-to-r from-[#fdfaf6] via-[#fdfaf6]/80 to-[#fdfaf6]/20 z-0"></div>
              <div className="relative z-10 text-left">
                <h4 className="text-2xl font-serif font-bold text-[#6d4141] mb-3">{data.sidebar.whyChooseUsCard.title}</h4>
                <p className="text-sm text-[#6d4141] mb-6 leading-relaxed">
                  {data.sidebar.whyChooseUsCard.description}
                </p>
                <Link href="/about" className="inline-flex items-center justify-center gap-2 bg-[#a78b80] hover:bg-[#8e746a] text-white px-6 py-2.5 rounded-md text-sm transition-colors shadow-sm w-fit">
                  {data.sidebar.whyChooseUsCard.buttonText.replace('->', '')}
                  <FiArrowRight />
                </Link>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
