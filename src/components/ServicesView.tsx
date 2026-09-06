import React from 'react';
import { SERVICES_LIST } from '../data/photographyData';
import { PageView, ServiceCategory } from '../types';
import { Check, ArrowRight, Sparkles, Clock, Layers } from 'lucide-react';

interface ServicesViewProps {
  onNavigateToGalleryWithCategory: (category: ServiceCategory) => void;
  onBookCategory: (category: ServiceCategory) => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({
  onNavigateToGalleryWithCategory,
  onBookCategory,
}) => {
  return (
    <div id="services-page" className="pt-28 pb-24 bg-[#0c0d10] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-sans tracking-[0.25em] uppercase text-[#c5a86d] font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Photography Packages & Disciplines</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white font-normal tracking-wide uppercase mb-4">
            Services & Commissions
          </h1>
          <p className="text-zinc-400 font-sans font-light text-base sm:text-lg leading-relaxed">
            Every commission at Ibeto Media is tailored to deliver timeless visual distinction. Browse our specialized disciplines to find the ideal match for your creative, milestone, or commercial vision.
          </p>
        </div>

        {/* 8 Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {SERVICES_LIST.map((service) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="group flex flex-col justify-between bg-zinc-950/80 border border-zinc-800/80 hover:border-[#c5a86d]/50 rounded-sm overflow-hidden transition-all duration-300 shadow-xl"
            >
              {/* Card Image Header */}
              <div className="relative h-56 sm:h-64 overflow-hidden bg-black">
                <img
                  src={service.coverImage}
                  alt={`${service.category} photography`}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out opacity-85"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />

                {/* Top Category Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 text-xs font-sans tracking-widest uppercase font-semibold bg-black/80 backdrop-blur-md text-[#c5a86d] border border-[#c5a86d]/40 rounded-xs">
                    {service.category}
                  </span>
                </div>

                {/* Card Title inside image bottom */}
                <div className="absolute bottom-4 left-6 right-6 z-10">
                  <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal">
                    {service.category}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <p className="text-zinc-300 font-sans text-sm sm:text-base leading-relaxed mb-6 font-light">
                    {service.shortDesc}
                  </p>

                  {/* What's Included */}
                  <div className="mb-6">
                    <h4 className="text-xs uppercase tracking-widest font-sans font-semibold text-[#c5a86d] mb-3 flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5" />
                      <span>What’s Included:</span>
                    </h4>
                    <ul className="space-y-2">
                      {service.whatsIncluded.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300 font-sans">
                          <Check className="w-4 h-4 text-[#c5a86d] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Who It's For */}
                  <div className="pt-4 border-t border-zinc-900">
                    <h4 className="text-xs uppercase tracking-widest font-sans font-semibold text-zinc-400 mb-1.5">
                      Who It’s For:
                    </h4>
                    <p className="text-xs sm:text-sm text-zinc-400 font-sans font-light leading-relaxed">
                      {service.whoItsFor}
                    </p>
                  </div>
                </div>

                {/* Logistics Bar & Action Links */}
                <div className="pt-5 border-t border-zinc-900 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-sans text-zinc-400">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#c5a86d]" />
                      <span>{service.estimatedDuration}</span>
                    </span>
                    <span className="text-zinc-500">{service.deliverables}</span>
                  </div>

                  {/* Actions: View Gallery & Book Session */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <button
                      id={`service-view-gallery-btn-${service.id}`}
                      onClick={() => onNavigateToGalleryWithCategory(service.category)}
                      className="w-full py-2.5 px-4 bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 hover:border-zinc-700 text-zinc-200 text-xs font-sans uppercase tracking-widest font-medium rounded-sm transition-colors flex items-center justify-center gap-1.5"
                    >
                      <span>View Gallery</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#c5a86d]" />
                    </button>

                    <button
                      id={`service-book-btn-${service.id}`}
                      onClick={() => onBookCategory(service.category)}
                      className="w-full py-2.5 px-4 bg-[#c5a86d] hover:bg-[#d6b97d] text-black text-xs font-sans uppercase tracking-widest font-semibold rounded-sm transition-colors flex items-center justify-center gap-1.5 shadow-md"
                    >
                      <span>Book Session</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
