import React from 'react';
import { GalleryImage, PageView } from '../types';
import { GALLERY_IMAGES } from '../data/photographyData';
import { Eye, ArrowRight, Sparkles, Camera } from 'lucide-react';

interface FeaturedGridProps {
  onOpenLightbox: (image: GalleryImage) => void;
  onNavigate: (page: PageView) => void;
}

export const FeaturedGrid: React.FC<FeaturedGridProps> = ({
  onOpenLightbox,
  onNavigate,
}) => {
  // Select 8 curated images, prioritizing featured across categories
  const featuredImages = GALLERY_IMAGES.filter((img) => img.featured).slice(0, 8);
  const displayImages =
    featuredImages.length >= 8
      ? featuredImages
      : [...featuredImages, ...GALLERY_IMAGES.filter((img) => !img.featured)].slice(0, 8);

  return (
    <section id="featured-work-section" className="py-20 sm:py-28 bg-[#0c0d10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-[#c5a86d] text-xs uppercase tracking-[0.25em] font-sans font-medium mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Curated Selection</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-normal tracking-wide">
              Featured Work
            </h2>
          </div>
          <button
            id="featured-view-all-btn"
            onClick={() => onNavigate('gallery')}
            className="group inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.2em] text-[#c5a86d] hover:text-white transition-colors"
          >
            <span>View Full Portfolio</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 8-Image Grid with Smooth Hover Reveal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {displayImages.map((img, idx) => (
            <div
              key={img.id}
              id={`featured-card-${img.id}`}
              onClick={() => onOpenLightbox(img)}
              className="group relative cursor-pointer overflow-hidden rounded-sm bg-zinc-900 border border-zinc-800/80 hover:border-[#c5a86d]/50 transition-all duration-300 shadow-md"
            >
              {/* Aspect Ratio container: Portrait 4:5 */}
              <div className="aspect-[4/5] w-full overflow-hidden relative bg-[#121318]">
                {/* Background slot plate */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center z-0">
                  <div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-2 text-[#c5a86d]/60">
                    <Camera className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                    {img.slotFilename}
                  </span>
                </div>

                <img
                  src={img.imageUrl}
                  alt={img.placeholderAlt || img.title}
                  className="w-full h-full object-cover object-center relative z-1 transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />

                {/* Dark gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5" />

                {/* Category tag - top left */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-2.5 py-1 text-[10px] font-sans tracking-widest uppercase font-semibold bg-black/70 backdrop-blur-md text-[#c5a86d] border border-[#c5a86d]/30 rounded-xs">
                    {img.category}
                  </span>
                </div>

                {/* Hover Reveal Content - bottom */}
                <div className="absolute inset-x-0 bottom-0 p-5 transform translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-10">
                  <h3 className="font-serif text-lg text-white font-normal leading-snug mb-1">
                    {img.title}
                  </h3>
                  {img.clientOrLocation && (
                    <p className="text-xs text-zinc-400 font-sans tracking-wider mb-3">
                      {img.clientOrLocation}
                    </p>
                  )}
                  <div className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-widest text-[#c5a86d] font-semibold">
                    <Eye className="w-3.5 h-3.5" />
                    <span>Enlarge Image</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner to Portfolio */}
        <div className="mt-14 text-center">
          <p className="text-zinc-500 text-xs uppercase tracking-widest mb-4">
            Curated across 8 specialized disciplines in Lagos
          </p>
          <button
            id="featured-explore-all-btn"
            onClick={() => onNavigate('gallery')}
            className="px-6 py-3 border border-zinc-700 hover:border-[#c5a86d] text-zinc-300 hover:text-white text-xs font-sans uppercase tracking-[0.2em] rounded-sm transition-colors"
          >
            Explore All Gallery Categories
          </button>
        </div>
      </div>
    </section>
  );
};
