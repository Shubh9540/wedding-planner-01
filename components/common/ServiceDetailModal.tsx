'use client';
import React, { useEffect, useState } from 'react';
import { FaTimes, FaCheck, FaPhoneAlt, FaEnvelope, FaCalendarAlt } from 'react-icons/fa';

export interface ServiceDetailModalData {
  id: string;
  title: string;
  description: string;
  image: string;
  features?: string[];
}

interface ServiceDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: ServiceDetailModalData | null;
}

export const ServiceDetailModal = ({ isOpen, onClose, service }: ServiceDetailModalProps) => {
  const [booked, setBooked] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
      setBooked(false);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-[var(--color-border)] flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header / Hero Image */}
        <div className="relative h-60 w-full overflow-hidden shrink-0">
          <img 
            src={service.image} 
            alt={service.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)] via-[var(--color-primary)]/40 to-transparent" />
          
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-[var(--color-accent)] transition-colors"
            aria-label="Close Modal"
          >
            <FaTimes />
          </button>

          <div className="absolute bottom-4 left-6 right-6">
            <span className="text-xs uppercase tracking-widest text-[var(--color-accent-light)] font-bold">Service Details</span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mt-1">
              {service.title}
            </h2>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          <p className="text-[var(--color-text)] text-sm md:text-base leading-relaxed">
            {service.description}
          </p>

          {/* Features / Highlights */}
          {service.features && service.features.length > 0 && (
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--color-accent-muted)] mb-3">
                What's Included
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-sm text-[var(--color-text)]">
                    <span className="w-5 h-5 rounded-full bg-[var(--color-accent-muted)]/15 text-[var(--color-accent-muted)] flex items-center justify-center text-xs shrink-0">
                      <FaCheck size={10} />
                    </span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Quick Booking CTA Box */}
          <div className="p-4 rounded-xl bg-[var(--color-bg-alt)] border border-[var(--color-border)] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-semibold text-sm text-[var(--color-primary)]">Ready to design your moment?</h4>
              <p className="text-xs text-[var(--color-text-light)]">Speak with our lead event specialist today.</p>
            </div>
            
            {booked ? (
              <span className="px-5 py-2.5 rounded-full bg-emerald-600 text-white text-xs font-semibold flex items-center gap-2">
                <FaCheck /> Request Sent!
              </span>
            ) : (
              <button
                onClick={() => setBooked(true)}
                className="px-6 py-2.5 rounded-full bg-[var(--color-accent)] hover:bg-[var(--color-primary)] text-white text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-sm"
              >
                Book Consultation
              </button>
            )}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 bg-gray-50 border-t border-gray-100 flex items-center justify-between text-xs text-[var(--color-text-light)]">
          <span className="flex items-center gap-1.5"><FaPhoneAlt size={10} /> +1 00000 00000</span>
          <span className="flex items-center gap-1.5"><FaEnvelope size={10} /> info@xyz.com</span>
        </div>
      </div>
    </div>
  );
};
