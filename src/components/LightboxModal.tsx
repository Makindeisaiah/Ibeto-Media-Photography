import React, { useEffect, useCallback } from 'react';
import { GalleryImage, ServiceCategory } from '../types';
import { X, ChevronLeft, ChevronRight, Calendar, MapPin, Sparkles } from 'lucide-react';

interface LightboxModalProps {
  image: GalleryImage | null;
  allImages: GalleryImage[];
  onClose: () => void;
  onSelectImage: (img: GalleryImage) => void;
  onBookShootCategory?: (category: ServiceCategory) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  image,
  allImages,
  onClose,
  onSelectImage,
  onBookShootCategory,
}) => {
  if (!image) return null;

  const currentIndex = allImages.findIndex((item) => item.id === image.id);

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      onSelectImage(allImages[currentIndex - 1]);
    } else {
      onSelectImage(allImages[allImages.length - 1]);
    }
  }, [currentIndex, allImages, onSelectImage]);

  const handleNext = useCallback(() => {
    if (currentIndex < allImages.length - 1) {
      onSelectImage(allImages[currentIndex + 1]);
    } else {
      onSelectImage(allImages[0]);
    }
  }, [currentIndex, allImages, onSelectImage]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, handlePrev, handleNext]);

  return (
    <div
      id="lightbox-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-6 md:p-8 select-none"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        id="lightbox-close-btn"
        onClick={onClose}
        aria-label="Close lightbox"
        className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 p-2.5 rounded-full bg-zinc-900/80 border border-zinc-700/60 text-zinc-300 hover:text-white hover:border-[#c5a86d] transition-colors"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Navigation - Prev */}
      <button
        id="lightbox-prev-btn"
        onClick={(e) => {
          e.stopPropagation();
          handlePrev();
        }}
        aria-label="Previous image"
        className="absolute left-2 sm:left-6 z-40 p-3 rounded-full bg-zinc-900/70 border border-zinc-800 text-zinc-300 hover:text-white hover:border-[#c5a86d] hover:bg-zinc-800 transition-colors"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Navigation - Next */}
      <button
        id="lightbox-next-btn"
        onClick={(e) => {
          e.stopPropagation();
          handleNext();
        }}
        aria-label="Next image"
        className="absolute right-2 sm:right-6 z-40 p-3 rounded-full bg-zinc-900/70 border border-zinc-800 text-zinc-300 hover:text-white hover:border-[#c5a86d] hover:bg-zinc-800 transition-colors"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Modal Content Box */}
      <div
        id="lightbox-content-card"
        className="relative max-w-5xl w-full max-h-[90vh] flex flex-col md:flex-row items-stretch bg-zinc-950/90 border border-zinc-800 rounded-lg overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Main Image Container */}
        <div className="relative flex-1 bg-black flex items-center justify-center min-h-[320px] sm:min-h-[440px] md:min-h-[560px] p-2 overflow-hidden">
          <img
            src={image.imageUrl}
            alt={image.placeholderAlt || image.title}
            className="max-h-[75vh] w-auto max-w-full object-contain rounded-sm transition-all duration-300 shadow-2xl"
            loading="eager"
          />
        </div>

        {/* Sidebar Info Panel */}
        <div className="w-full md:w-80 lg:w-96 p-6 sm:p-7 flex flex-col justify-between border-t md:border-t-0 md:border-l border-zinc-800/80 bg-[#0c0d10]">
          <div>
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="inline-block px-2.5 py-1 text-[11px] font-sans font-semibold tracking-wider uppercase bg-[#c5a86d]/15 text-[#c5a86d] border border-[#c5a86d]/30 rounded-xs">
                {image.category}
              </span>
              <span className="text-xs text-zinc-500 font-sans">
                {currentIndex + 1} of {allImages.length}
              </span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl text-zinc-100 font-normal leading-tight tracking-wide mb-3">
              {image.title}
            </h3>

            {image.caption && (
              <p className="text-sm text-zinc-300 font-sans leading-relaxed mb-6 font-light">
                {image.caption}
              </p>
            )}

            <div className="space-y-2.5 py-4 border-y border-zinc-800/80 text-xs font-sans text-zinc-400">
              {image.clientOrLocation && (
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#c5a86d]" />
                  <span>{image.clientOrLocation}</span>
                </div>
              )}
              {image.year && (
                <div className="flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-[#c5a86d]" />
                  <span>Portfolio Season • {image.year}</span>
                </div>
              )}
            </div>
          </div>

          <div className="pt-6 mt-4 border-t border-zinc-850">
            {onBookShootCategory && (
              <button
                id="lightbox-inquire-category-btn"
                onClick={() => {
                  onBookShootCategory(image.category);
                  onClose();
                }}
                className="w-full py-3 px-4 bg-[#c5a86d] hover:bg-[#d6b97d] text-black font-semibold text-xs tracking-widest uppercase rounded-sm transition-colors flex items-center justify-center gap-2 shadow-lg"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Book This Style ({image.category})</span>
              </button>
            )}

            <p className="mt-3 text-[11px] text-zinc-500 text-center font-sans">
              Press left / right arrows or ESC to close
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
