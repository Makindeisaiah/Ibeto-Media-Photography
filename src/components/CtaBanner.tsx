import React from 'react';
import { PageView } from '../types';
import { Calendar, MessageSquare, ArrowRight } from 'lucide-react';
import { STUDIO_INFO } from '../data/photographyData';

interface CtaBannerProps {
  onNavigate: (page: PageView) => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onNavigate }) => {
  return (
    <section id="cta-banner-section" className="relative py-24 sm:py-32 bg-black overflow-hidden border-t border-zinc-800">
      {/* Subtle atmospheric background glow */}
      <div className="absolute inset-0 z-0 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1600&q=80"
          alt="Atmospheric photography background"
          className="w-full h-full object-cover filter blur-sm scale-105"
        />
        <div className="absolute inset-0 bg-[#0c0d10]/80" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block text-xs uppercase tracking-[0.3em] text-[#c5a86d] font-sans font-medium mb-4">
          Reserve Your Commission
        </span>

        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white font-normal leading-tight max-w-3xl mx-auto mb-6">
          Ready to Create Timeless Imagery in Lagos?
        </h2>

        <p className="max-w-2xl mx-auto text-base sm:text-lg text-zinc-400 font-sans font-light leading-relaxed mb-10">
          From corporate boardrooms and editorial glamour to high-society events and intimate family milestones, our calendar fills weeks in advance.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            id="cta-book-session-primary-btn"
            onClick={() => onNavigate('contact')}
            className="w-full sm:w-auto px-9 py-4 bg-[#c5a86d] hover:bg-[#d6b97d] text-black font-sans font-semibold text-xs tracking-[0.2em] uppercase rounded-sm transition-all duration-300 flex items-center justify-center gap-2.5 shadow-xl hover:shadow-[#c5a86d]/20"
          >
            <Calendar className="w-4 h-4" />
            <span>Book a Session</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1" />
          </button>

          <a
            id="cta-whatsapp-direct-btn"
            href={`https://wa.me/${STUDIO_INFO.whatsappNumber.replace(/[^0-9]/g, '')}?text=Hello%20Ibeto%20Media,%20I'd%20like%20to%20inquire%20about%20booking%20a%20photography%20session.`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700 hover:border-emerald-500/50 text-zinc-200 hover:text-white font-sans text-xs tracking-[0.2em] uppercase font-medium rounded-sm transition-all duration-300 flex items-center justify-center gap-2.5"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        <p className="mt-8 text-xs text-zinc-500 font-sans">
          Studio visits by appointment • Lekki Phase 1, Lagos, Nigeria
        </p>
      </div>
    </section>
  );
};
