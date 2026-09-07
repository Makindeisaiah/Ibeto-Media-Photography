import React from 'react';
import { STUDIO_INFO, getLocalSlotUrl } from '../data/photographyData';
import { PageView } from '../types';
import { ArrowDown, Sparkles, Calendar, Compass } from 'lucide-react';

interface HeroProps {
  onNavigate: (page: PageView) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const heroImageSrc = getLocalSlotUrl('hero/hero-main.jpg');

  return (
    <section
      id="home-hero-section"
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Full-bleed background from local /src/assets/images/hero/hero-main.jpg slot */}
      <div className="absolute inset-0 z-0 bg-[#090a0d]">
        <img
          src={heroImageSrc}
          alt="Ibeto Media Photography Studio Hero"
          className="w-full h-full object-cover object-center opacity-40 scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Subtle radial and gradient overlays for dark gallery feel */}
        <div className="absolute inset-0 bg-radial from-transparent via-[#0c0d10]/70 to-[#0c0d10]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d10] via-transparent to-black/80" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16 flex flex-col items-center">
        {/* Studio Sub-label */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/80 border border-[#c5a86d]/30 text-[#c5a86d] text-xs font-sans tracking-[0.2em] uppercase mb-8 shadow-inner backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#c5a86d]" />
          <span>Lagos, Nigeria • Bespoke Visual Artistry</span>
        </div>

        {/* Studio Name Heading in Refined Serif */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-white tracking-wide uppercase leading-[1.05] mb-6">
          Ibeto Media <br />
          <span className="italic font-serif font-light text-[#c5a86d]">Photography</span>
        </h1>

        {/* Tagline */}
        <p className="max-w-2xl text-base sm:text-lg md:text-xl text-zinc-300 font-sans font-light leading-relaxed mb-10 tracking-wide">
          Capturing Nigeria’s elegance, soul, and vibrant milestones through refined portraiture, glamour, fashion, and event documentary.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            id="hero-book-session-btn"
            onClick={() => onNavigate('contact')}
            className="w-full sm:w-auto px-8 py-4 bg-[#c5a86d] hover:bg-[#d4b77c] text-black font-sans font-semibold text-xs tracking-[0.2em] uppercase rounded-sm transition-all duration-300 flex items-center justify-center gap-2.5 shadow-xl hover:shadow-[#c5a86d]/20"
          >
            <Calendar className="w-4 h-4" />
            <span>Book a Session</span>
          </button>

          <button
            id="hero-explore-portfolio-btn"
            onClick={() => onNavigate('gallery')}
            className="w-full sm:w-auto px-8 py-4 bg-zinc-900/70 hover:bg-zinc-800 border border-zinc-700 hover:border-[#c5a86d] text-zinc-200 hover:text-white font-sans font-medium text-xs tracking-[0.2em] uppercase rounded-sm transition-all duration-300 flex items-center justify-center gap-2.5 backdrop-blur-sm"
          >
            <Compass className="w-4 h-4 text-[#c5a86d]" />
            <span>Explore Portfolio</span>
          </button>
        </div>

        {/* Quick Highlights info row */}
        <div className="mt-16 pt-8 border-t border-zinc-800/60 grid grid-cols-2 md:grid-cols-4 gap-6 text-left w-full max-w-3xl">
          <div className="border-l border-zinc-800 pl-4">
            <span className="block text-xl font-serif text-[#c5a86d]">8+</span>
            <span className="text-[11px] text-zinc-400 font-sans uppercase tracking-wider">Years Experience</span>
          </div>
          <div className="border-l border-zinc-800 pl-4">
            <span className="block text-xl font-serif text-[#c5a86d]">500+</span>
            <span className="text-[11px] text-zinc-400 font-sans uppercase tracking-wider">Sessions Captured</span>
          </div>
          <div className="border-l border-zinc-800 pl-4">
            <span className="block text-xl font-serif text-[#c5a86d]">Amuwo</span>
            <span className="text-[11px] text-zinc-400 font-sans uppercase tracking-wider">Dedicated Studio</span>
          </div>
          <div className="border-l border-zinc-800 pl-4">
            <span className="block text-xl font-serif text-[#c5a86d]">48hr</span>
            <span className="text-[11px] text-zinc-400 font-sans uppercase tracking-wider">Express Previews</span>
          </div>
        </div>

        {/* Down indicator */}
        <div className="mt-10 animate-bounce text-zinc-600 hidden md:block">
          <ArrowDown className="w-4 h-4" />
        </div>
      </div>
    </section>
  );
};
