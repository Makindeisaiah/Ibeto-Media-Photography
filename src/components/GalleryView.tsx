import React, { useState, useMemo } from 'react';
import { GalleryImage, ServiceCategory } from '../types';
import { GALLERY_IMAGES, SERVICE_CATEGORIES } from '../data/photographyData';
import { Eye, SlidersHorizontal, Sparkles, Camera } from 'lucide-react';

interface GalleryViewProps {
  initialCategory?: string | null;
  onOpenLightbox: (image: GalleryImage) => void;
}

export const GalleryView: React.FC<GalleryViewProps> = ({
  initialCategory,
  onOpenLightbox,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    initialCategory || 'All'
  );

  // Sync if initialCategory changes from outside props
  React.useEffect(() => {
    if (initialCategory) {
      setSelectedCategory(initialCategory);
    }
  }, [initialCategory]);

  const filteredImages = useMemo(() => {
    if (selectedCategory === 'All') {
      return GALLERY_IMAGES;
    }
    return GALLERY_IMAGES.filter((img) => img.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div id="gallery-portfolio-page" className="pt-28 pb-24 bg-[#0c0d10] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-sans tracking-[0.25em] uppercase text-[#c5a86d] font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated Portfolio Archive</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white font-normal tracking-wide uppercase mb-4">
            The Gallery
          </h1>
          <p className="text-zinc-400 font-sans font-light text-base sm:text-lg leading-relaxed">
            Explore our collection of contemporary portraiture, haute glamour, luxury corporate identities, and milestone celebrations across Lagos.
          </p>
        </div>

        {/* Category Filters Bar */}
        <div className="mb-10 pb-6 border-b border-zinc-800/80">
          <div className="flex items-center gap-2 mb-3 text-xs uppercase tracking-widest text-zinc-500 font-sans sm:hidden">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Filter By Genre:</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
            <button
              id="filter-all-btn"
              onClick={() => setSelectedCategory('All')}
              className={`px-4 py-2 text-xs sm:text-sm font-sans tracking-wider uppercase transition-all duration-200 rounded-sm border ${
                selectedCategory === 'All'
                  ? 'bg-[#c5a86d] text-black border-[#c5a86d] font-semibold shadow-md'
                  : 'bg-zinc-900/80 text-zinc-300 border-zinc-800 hover:border-zinc-700 hover:text-white'
              }`}
            >
              All Works ({GALLERY_IMAGES.length})
            </button>

            {SERVICE_CATEGORIES.map((category) => {
              const count = GALLERY_IMAGES.filter((img) => img.category === category).length;
              const isSelected = selectedCategory === category;
              return (
                <button
                  key={category}
                  id={`filter-${category.toLowerCase().replace(/[^a-z0-9]/g, '-')}-btn`}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3.5 py-2 text-xs sm:text-sm font-sans tracking-wider uppercase transition-all duration-200 rounded-sm border ${
                    isSelected
                      ? 'bg-[#c5a86d] text-black border-[#c5a86d] font-semibold shadow-md'
                      : 'bg-zinc-900/80 text-zinc-300 border-zinc-800 hover:border-zinc-700 hover:text-white'
                  }`}
                >
                  {category} <span className={`text-[10px] ml-1 ${isSelected ? 'text-black/70' : 'text-zinc-500'}`}>({count})</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Filter Status & Count */}
        <div className="flex items-center justify-between mb-8 text-xs font-sans tracking-widest uppercase text-zinc-400">
          <span>
            Showing <strong className="text-white">{filteredImages.length}</strong> {filteredImages.length === 1 ? 'Photograph' : 'Photographs'} in{' '}
            <span className="text-[#c5a86d] font-medium">{selectedCategory}</span>
          </span>
          <span className="hidden sm:inline text-zinc-500">
            Click any photo for cinematic lightbox
          </span>
        </div>

        {/* Masonry-Style Responsive Columns Layout */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {filteredImages.map((img) => {
            const aspectClasses =
              img.aspectRatio === 'portrait'
                ? 'aspect-[3/4]'
                : img.aspectRatio === 'square'
                ? 'aspect-square'
                : 'aspect-[3/2]';

            return (
              <div
                key={img.id}
                id={`gallery-item-${img.id}`}
                onClick={() => onOpenLightbox(img)}
                className="break-inside-avoid group relative cursor-pointer overflow-hidden rounded-sm bg-zinc-900 border border-zinc-800/90 hover:border-[#c5a86d]/60 transition-all duration-300 shadow-lg"
              >
                <div className={`relative w-full ${aspectClasses} overflow-hidden bg-[#121318]`}>
                  {/* Background slot guide */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center z-0">
                    <div className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-1.5 text-[#c5a86d]/60">
                      <Camera className="w-4 h-4" />
                    </div>
                    <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-wider">
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Category Pill Top Left */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="px-2 py-0.5 text-[9px] font-sans tracking-widest uppercase font-semibold bg-black/80 backdrop-blur-md text-[#c5a86d] border border-[#c5a86d]/30 rounded-xs">
                      {img.category}
                    </span>
                  </div>

                  {/* Caption & details revealed on hover */}
                  <div className="absolute inset-x-0 bottom-0 p-4 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-10">
                    <h3 className="font-serif text-lg text-white font-normal leading-snug mb-1">
                      {img.title}
                    </h3>
                    {img.clientOrLocation && (
                      <p className="text-[11px] text-zinc-400 font-sans tracking-wide mb-2">
                        {img.clientOrLocation}
                      </p>
                    )}
                    <div className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-[#c5a86d] font-semibold">
                      <Eye className="w-3 h-3" />
                      <span>View in Lightbox</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty state if ever filtered */}
        {filteredImages.length === 0 && (
          <div className="text-center py-20 border border-zinc-800 rounded-sm p-8 bg-zinc-900/30">
            <p className="text-zinc-400 font-serif text-xl mb-3">No images found in this category.</p>
            <button
              onClick={() => setSelectedCategory('All')}
              className="px-5 py-2.5 bg-[#c5a86d] text-black text-xs font-sans uppercase tracking-widest rounded-sm font-semibold"
            >
              Show All Works
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
