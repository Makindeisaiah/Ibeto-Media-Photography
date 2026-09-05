import React from 'react';
import { STUDIO_INFO } from '../data/photographyData';
import { PageView } from '../types';
import { ArrowRight, Award, Camera, ShieldCheck } from 'lucide-react';

interface AboutTeaserProps {
  onNavigate: (page: PageView) => void;
}

export const AboutTeaser: React.FC<AboutTeaserProps> = ({ onNavigate }) => {
  return (
    <section id="home-about-teaser" className="py-20 sm:py-28 bg-[#090a0d] border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Photographer portrait / Studio aesthetic */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative gold corner frame */}
              <div className="absolute -top-3 -left-3 w-20 h-20 border-t-2 border-l-2 border-[#c5a86d]/40 pointer-events-none" />
              <div className="absolute -bottom-3 -right-3 w-20 h-20 border-b-2 border-r-2 border-[#c5a86d]/40 pointer-events-none" />

              <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-zinc-900 border border-zinc-800 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1000&q=80"
                  alt="Ibeto Chukwuma - Lead Photographer & Creative Director"
                  className="w-full h-full object-cover object-center filter grayscale contrast-105 hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-[#c5a86d] text-xs font-sans uppercase tracking-widest font-semibold block mb-1">
                    Creative Director
                  </span>
                  <p className="text-white font-serif text-2xl">
                    {STUDIO_INFO.photographerName}
                  </p>
                  <p className="text-xs text-zinc-400 font-sans mt-0.5">
                    Lekki Phase 1, Lagos
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Text narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-sans tracking-[0.25em] uppercase text-[#c5a86d] font-semibold">
              <Camera className="w-3.5 h-3.5" />
              <span>About The Studio</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-normal leading-tight">
              Crafting Heirloom Imagery with African Soul & Modern Editorial Precision
            </h2>

            <p className="text-base sm:text-lg text-zinc-300 font-sans font-light leading-relaxed">
              Based in the creative heartbeat of Lagos, <strong className="text-white font-normal">Ibeto Media Photography</strong> is an atelier devoted to the high-fashion art of portraiture, glamour, family legacies, and milestone celebrations.
            </p>

            <p className="text-sm sm:text-base text-zinc-400 font-sans leading-relaxed">
              We reject formulaic posing in favor of cinematic lighting, sculpted shadows, and emotional authenticity. Whether working with corporate chairpersons in Ikoyi or capturing intimate maternity glow in our Lekki studio sanctuary, each frame is crafted as a lasting piece of fine art.
            </p>

            {/* Credibility highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-sm bg-zinc-900/60 border border-zinc-800/80">
                <Award className="w-5 h-5 text-[#c5a86d] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-zinc-200">
                    High-End Retouching
                  </h4>
                  <p className="text-xs text-zinc-400 mt-1">
                    Skin tone fidelity honoring natural melanin textures without synthetic plastic smoothing.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-sm bg-zinc-900/60 border border-zinc-800/80">
                <ShieldCheck className="w-5 h-5 text-[#c5a86d] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-zinc-200">
                    White-Glove Service
                  </h4>
                  <p className="text-xs text-zinc-400 mt-1">
                    Tethered live proofing, styling support, and express 48-hour preview delivery.
                  </p>
                </div>
              </div>
            </div>

            {/* Learn More link */}
            <div className="pt-4">
              <button
                id="about-teaser-learn-more-btn"
                onClick={() => onNavigate('about')}
                className="group inline-flex items-center gap-3 px-6 py-3.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 hover:border-[#c5a86d] text-white text-xs font-sans uppercase tracking-[0.2em] font-semibold rounded-sm transition-all duration-300"
              >
                <span>Learn More About Ibeto</span>
                <ArrowRight className="w-4 h-4 text-[#c5a86d] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
