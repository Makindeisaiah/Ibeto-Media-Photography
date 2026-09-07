import React from 'react';
import { STUDIO_INFO, BEHIND_THE_SCENES, getLocalSlotUrl } from '../data/photographyData';
import { PageView } from '../types';
import { Camera, Sparkles, MapPin, CheckCircle, ArrowRight, HeartHandshake } from 'lucide-react';

interface AboutViewProps {
  onNavigate: (page: PageView) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate }) => {
  const bioImageSrc = getLocalSlotUrl('about/photographer-bio.jpg');
  return (
    <div id="about-page" className="pt-28 pb-24 bg-[#0c0d10] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-sans tracking-[0.25em] uppercase text-[#c5a86d] font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Behind The Lens</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white font-normal tracking-wide uppercase mb-4">
            The Studio & Story
          </h1>
          <p className="text-zinc-400 font-sans font-light text-base sm:text-lg leading-relaxed">
            Founded on the belief that portraiture is a fine art and milestone moments deserve cinematic permanence.
          </p>
        </div>

        {/* Lead Photographer Bio Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24 pb-20 border-b border-zinc-900">
          {/* Portrait Photo Placeholder */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-2 rounded-sm bg-gradient-to-tr from-[#c5a86d]/20 to-transparent blur-md -z-10" />
              <div className="aspect-[4/5] rounded-sm overflow-hidden bg-zinc-900 border border-zinc-800 shadow-2xl relative">
                <img
                  src={bioImageSrc}
                  alt="Ibeto Chukwuma - Lead Photographer"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-[#c5a86d] text-xs font-sans uppercase tracking-widest font-semibold block mb-0.5">
                    Lead Artist & Founder
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal">
                    {STUDIO_INFO.photographerName}
                  </h3>
                  <p className="text-xs text-zinc-400 font-sans mt-1 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#c5a86d]" /> Amuwo Odofin, Lagos, Nigeria
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bio & Philosophy Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal leading-snug">
              “Photography is not about mere documentation; it is the art of revealing soul, posture, and quiet majesty.”
            </h2>

            <p className="text-zinc-300 font-sans text-base sm:text-lg leading-relaxed font-light">
              Hello, I’m <span className="text-white font-medium">{STUDIO_INFO.photographerName}</span>. For over eight years, I have walked the vibrant streets, coastal shores, and modern skylines of Lagos, crafting signature portraits for celebrated brides and grooms, visionary corporate leaders, high-fashion models, and milestone celebrants.
            </p>

            <p className="text-zinc-400 font-sans text-sm sm:text-base leading-relaxed">
              My signature approach marries European chiaroscuro painting techniques with the unmistakable vitality and warmth of contemporary African lifestyle. We treat every client who steps into our Lekki sanctuary not as a subject, but as a collaborator in creating an enduring piece of heirloom art.
            </p>

            {/* Core Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
              <div className="p-4 rounded-sm bg-zinc-950 border border-zinc-850">
                <div className="flex items-center gap-2 text-white text-xs uppercase tracking-wider font-semibold mb-1.5">
                  <CheckCircle className="w-4 h-4 text-[#c5a86d]" />
                  <span>Skin Tone Authenticity</span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  We specialize in lighting and color grading that celebrates rich melanin undertones without washed-out or artificial plastic smoothing.
                </p>
              </div>

              <div className="p-4 rounded-sm bg-zinc-950 border border-zinc-850">
                <div className="flex items-center gap-2 text-white text-xs uppercase tracking-wider font-semibold mb-1.5">
                  <CheckCircle className="w-4 h-4 text-[#c5a86d]" />
                  <span>Unrushed Sanctuary</span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  From customized playlist selection to private dressing suites, sessions are paced for calm confidence and genuine expression.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <button
                id="about-book-consult-btn"
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#c5a86d] hover:bg-[#d6b97d] text-black font-semibold text-xs tracking-widest uppercase rounded-sm transition-colors shadow-lg"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Behind The Scenes Section */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <div className="flex items-center gap-2 text-[#c5a86d] text-xs uppercase tracking-[0.25em] font-sans font-medium mb-2">
                <Camera className="w-3.5 h-3.5" />
                <span>The Creative Process</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal">
                Behind the Scenes
              </h2>
            </div>
            <p className="text-zinc-500 text-xs sm:text-sm max-w-md font-sans">
              Inside our Lekki Phase 1 studio space, state-of-the-art light-shaping tools, and calibrated workflow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {BEHIND_THE_SCENES.map((bts) => (
              <div
                key={bts.id}
                id={`bts-card-${bts.id}`}
                className="group rounded-sm overflow-hidden bg-zinc-950 border border-zinc-850 hover:border-[#c5a86d]/40 transition-all duration-300 shadow-md"
              >
                <div className="aspect-[4/3] overflow-hidden bg-black relative">
                  <img
                    src={bts.imageUrl}
                    alt={bts.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                </div>
                <div className="p-5 sm:p-6 space-y-2">
                  <h3 className="font-serif text-xl text-white font-normal group-hover:text-[#c5a86d] transition-colors">
                    {bts.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed font-light">
                    {bts.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Studio Equipment & Standard Banner */}
        <div className="p-8 sm:p-10 rounded-sm bg-gradient-to-r from-zinc-950 via-zinc-900/60 to-zinc-950 border border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="font-serif text-2xl text-white font-normal">
              Visiting From Outside Lagos?
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 font-sans max-w-xl">
              We frequently accommodate visiting diaspora clients, destination celebrations, and corporate summit delegations traveling through Nigeria.
            </p>
          </div>

          <button
            id="about-inquire-special-btn"
            onClick={() => onNavigate('contact')}
            className="shrink-0 px-6 py-3 border border-[#c5a86d] text-[#c5a86d] hover:bg-[#c5a86d] hover:text-black font-sans text-xs tracking-widest uppercase font-semibold rounded-sm transition-all"
          >
            Inquire About Travel Dates
          </button>
        </div>
      </div>
    </div>
  );
};
