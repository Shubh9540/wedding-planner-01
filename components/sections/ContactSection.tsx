import React from 'react';
import { ContactData } from '@/types/templates.types';
import { FiPhone, FiMapPin, FiMail } from 'react-icons/fi';
import { FaUser, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaCommentAlt, FaArrowRight } from 'react-icons/fa';

export const ContactSection = ({ data }: { data?: ContactData }) => {
  if (!data) return null;

  return (
    <section className="w-full bg-[#fdfaf6]">
      <div className="max-w-[1250px] mx-auto px-4 md:px-6 lg:px-8 py-16 lg:py-20">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-[#e04562] mb-3">
            {data.subtitle}
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#3f292b] mb-4 font-serif">
            {data.title1} <span className="text-[#e04562] font-normal">{data.title2}</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            {data.description}
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Phone */}
          <div className="bg-[#f8f1f3] rounded-md p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#c75e72] flex items-center justify-center text-white text-xl shrink-0">
              <FiPhone />
            </div>
            <div>
              <h4 className="font-bold text-[#3f292b] text-sm mb-1">{data.contactInfo.phoneTitle}</h4>
              <p className="text-xs text-gray-500 leading-relaxed whitespace-pre-line">{data.contactInfo.phone}</p>
            </div>
          </div>
          {/* Address */}
          <div className="bg-[#f8f1f3] rounded-md p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#c75e72] flex items-center justify-center text-white text-xl shrink-0">
              <FiMapPin />
            </div>
            <div>
              <h4 className="font-bold text-[#3f292b] text-sm mb-1">{data.contactInfo.addressTitle}</h4>
              <p className="text-xs text-gray-500 leading-relaxed whitespace-pre-line">{data.contactInfo.address}</p>
            </div>
          </div>
          {/* Email */}
          <div className="bg-[#f8f1f3] rounded-md p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#c75e72] flex items-center justify-center text-white text-xl shrink-0">
              <FiMail />
            </div>
            <div>
              <h4 className="font-bold text-[#3f292b] text-sm mb-1">{data.contactInfo.emailTitle}</h4>
              <p className="text-xs text-gray-500 leading-relaxed whitespace-pre-line">{data.contactInfo.email}</p>
            </div>
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-md border border-[#eee8e3] overflow-hidden flex flex-col lg:flex-row shadow-sm">
          {/* Left Image */}
          <div className="w-full lg:w-[45%]">
            <img src={data.image || '/banner/ban1.jpg'} alt="Contact" className="w-full h-full object-cover min-h-[300px]" />
          </div>
          
          {/* Right Form */}
          <div className="w-full lg:w-[55%] p-8 lg:p-12">
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-[#3f292b] mb-3">
              {data.form?.title.split(' ').slice(0, 2).join(' ')} <span className="text-[#e04562] font-normal">{data.form?.title.split(' ').slice(2).join(' ')}</span>
            </h3>
            <p className="text-sm text-gray-500 mb-8 leading-relaxed">
              {data.form?.description}
            </p>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <FaUser className="absolute left-4 top-[14px] text-gray-400 text-sm" />
                  <input type="text" placeholder="Your Name*" className="w-full pl-10 pr-4 py-3 bg-white border border-[#eee8e3] rounded text-sm focus:outline-none focus:border-[#e04562] transition-colors" required />
                </div>
                <div className="relative">
                  <FaEnvelope className="absolute left-4 top-[14px] text-gray-400 text-sm" />
                  <input type="email" placeholder="Your Email ID*" className="w-full pl-10 pr-4 py-3 bg-white border border-[#eee8e3] rounded text-sm focus:outline-none focus:border-[#e04562] transition-colors" required />
                </div>
                <div className="relative">
                  <FaMapMarkerAlt className="absolute left-4 top-[14px] text-gray-400 text-sm" />
                  <input type="text" placeholder="Event Venue" className="w-full pl-10 pr-4 py-3 bg-white border border-[#eee8e3] rounded text-sm focus:outline-none focus:border-[#e04562] transition-colors" />
                </div>
                <div className="relative">
                  <FaPhoneAlt className="absolute left-4 top-[14px] text-gray-400 text-sm" />
                  <input type="tel" placeholder="Your Number*" className="w-full pl-10 pr-4 py-3 bg-white border border-[#eee8e3] rounded text-sm focus:outline-none focus:border-[#e04562] transition-colors" required />
                </div>
              </div>
              <div className="relative">
                <FaCommentAlt className="absolute left-4 top-[14px] text-gray-400 text-sm" />
                <textarea placeholder="Your Message*" rows={4} className="w-full pl-10 pr-4 py-3 bg-white border border-[#eee8e3] rounded text-sm focus:outline-none focus:border-[#e04562] transition-colors resize-none" required></textarea>
              </div>
              <button type="submit" className="w-full inline-flex items-center justify-center gap-2 bg-[#e04562] hover:bg-[#c23a53] text-white font-bold py-3.5 rounded transition-colors text-sm">
                {data.form?.buttonText || 'Make A Reservation'} <FaArrowRight className="text-xs" />
              </button>
            </form>
          </div>
        </div>

      </div>

      {/* Full Width Map */}
      <div className="w-full h-[400px] md:h-[500px]">
        <iframe 
          src={data.mapUrl} 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={false} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};
