import React from 'react';
import { TESTIMONIALS } from '../data/photographyData';
import { PageView } from '../types';
import { Quote, Star, Sparkles, ArrowRight } from 'lucide-react';

interface TestimonialsViewProps {
  onNavigate: (page: PageView) => void;
}

export const TestimonialsView: React.FC<TestimonialsViewProps> = ({ onNavigate }) => {
  return (
    <div id="testimonials-page" className="pt-28 pb-24 bg-[#0c0d10] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-sans tracking-[0.25em] uppercase text-[#c5a86d] font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Client Experiences</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white font-normal tracking-wide uppercase mb-4">
            Words From Our Patrons
          </h1>
          <p className="text-zinc-400 font-sans font-light text-base sm:text-lg leading-relaxed">
            Reflections from corporate leaders, fashion creatives, brides, and families across Lagos who trusted us with their defining moments.
          </p>
        </div>

        {/* Simple Two-Column Testimonial Layout (as explicitly requested) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mb-20">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              id={`testimonial-card-${t.id}`}
              className="relative flex flex-col justify-between p-8 sm:p-10 rounded-sm bg-zinc-950/90 border border-zinc-800/80 hover:border-[#c5a86d]/40 transition-all duration-300 shadow-xl"
            >
              {/* Top Quote Icon & 5 Stars */}
              <div className="flex items-center justify-between mb-6">
                <Quote className="w-8 h-8 text-[#c5a86d]/50" />
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#c5a86d] text-[#c5a86d]" />
                  ))}
                </div>
              </div>

              {/* Quote Text */}
              <blockquote className="text-zinc-200 font-serif text-lg sm:text-xl font-light italic leading-relaxed mb-8">
                “{t.quote}”
              </blockquote>

              {/* Client Info & Category Tag */}
              <div className="pt-6 border-t border-zinc-900 flex items-end justify-between gap-4">
                <div>
                  <h4 className="font-sans font-semibold text-white text-base tracking-wide">
                    {t.clientName}
                  </h4>
                  <p className="text-xs text-zinc-400 font-sans mt-0.5">
                    {t.roleOrCompany}
                  </p>
                  <p className="text-[11px] text-zinc-500 font-sans mt-0.5">
                    {t.location}
                  </p>
                </div>

                <div className="text-right shrink-0">
                  <span className="inline-block px-2.5 py-1 text-[10px] font-sans font-medium uppercase tracking-wider bg-zinc-900 text-[#c5a86d] border border-zinc-800 rounded-xs">
                    {t.shootType}
                  </span>
                  <span className="block text-[10px] text-zinc-500 mt-1 font-sans">
                    {t.year} Session
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Booking Invitation */}
        <div className="text-center max-w-xl mx-auto p-8 border border-zinc-850 rounded-sm bg-zinc-950/60">
          <h3 className="font-serif text-2xl text-white font-normal mb-2">
            Experience the Ibeto Difference
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400 font-sans mb-6">
            We take pride in making every client look and feel exceptionally confident.
          </p>
          <button
            id="testimonials-book-btn"
            onClick={() => onNavigate('contact')}
            className="px-6 py-3 bg-[#c5a86d] hover:bg-[#d6b97d] text-black font-semibold text-xs font-sans tracking-widest uppercase rounded-sm transition-colors inline-flex items-center gap-2"
          >
            <span>Reserve Your Date</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
