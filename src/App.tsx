import React, { useState, useEffect } from 'react';
import { PageView, ServiceCategory, GalleryImage } from './types';
import { GALLERY_IMAGES } from './data/photographyData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CategoryStrip } from './components/CategoryStrip';
import { FeaturedGrid } from './components/FeaturedGrid';
import { AboutTeaser } from './components/AboutTeaser';
import { CtaBanner } from './components/CtaBanner';
import { GalleryView } from './components/GalleryView';
import { ServicesView } from './components/ServicesView';
import { AboutView } from './components/AboutView';
import { TestimonialsView } from './components/TestimonialsView';
import { ContactView } from './components/ContactView';
import { Footer } from './components/Footer';
import { LightboxModal } from './components/LightboxModal';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageView>('home');
  const [selectedGalleryCategory, setSelectedGalleryCategory] = useState<string>('All');
  const [preselectedBookingCategory, setPreselectedBookingCategory] = useState<ServiceCategory | null>(null);
  const [activeLightboxImage, setActiveLightboxImage] = useState<GalleryImage | null>(null);

  // Parse hash on initial mount and browser back/forward buttons
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '');
      const [path, queryString] = hash.split('?');
      const params = new URLSearchParams(queryString || '');

      if (['home', 'gallery', 'services', 'about', 'testimonials', 'contact'].includes(path)) {
        setCurrentPage(path as PageView);
      } else if (!path) {
        setCurrentPage('home');
      }

      if (params.get('category')) {
        const cat = params.get('category');
        setSelectedGalleryCategory(cat || 'All');
        setPreselectedBookingCategory((cat as ServiceCategory) || null);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: PageView, categoryFilter?: string) => {
    setCurrentPage(page);
    if (categoryFilter) {
      setSelectedGalleryCategory(categoryFilter);
      window.location.hash = `#/${page}?category=${encodeURIComponent(categoryFilter)}`;
    } else {
      window.location.hash = `#/${page}`;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCategoryFromStrip = (category: ServiceCategory) => {
    setSelectedGalleryCategory(category);
    setCurrentPage('gallery');
    window.location.hash = `#/gallery?category=${encodeURIComponent(category)}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBookCategory = (category: ServiceCategory) => {
    setPreselectedBookingCategory(category);
    setCurrentPage('contact');
    window.location.hash = `#/contact?category=${encodeURIComponent(category)}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id="ibeto-media-app" className="min-h-screen bg-[#0c0d10] text-zinc-200 flex flex-col selection:bg-[#c5a86d] selection:text-black">
      {/* Navigation Header */}
      <Navbar currentPage={currentPage} onNavigate={navigateTo} />

      {/* Main Page Content */}
      <main id="main-content-region" className="flex-1">
        {currentPage === 'home' && (
          <div id="home-view" className="space-y-0 animate-in fade-in duration-300">
            {/* 1. Full-Bleed Hero */}
            <Hero onNavigate={navigateTo} />

            {/* 2. Horizontal Strip of Service Categories */}
            <CategoryStrip onSelectCategory={handleSelectCategoryFromStrip} />

            {/* 3. Featured Work Grid (8 curated images) */}
            <FeaturedGrid
              onOpenLightbox={(img) => setActiveLightboxImage(img)}
              onNavigate={navigateTo}
            />

            {/* 4. Short About Teaser with Learn More link */}
            <AboutTeaser onNavigate={navigateTo} />

            {/* 5. Call-to-action Banner */}
            <CtaBanner onNavigate={navigateTo} />
          </div>
        )}

        {currentPage === 'gallery' && (
          <div id="gallery-view-container" className="animate-in fade-in duration-300">
            <GalleryView
              initialCategory={selectedGalleryCategory}
              onOpenLightbox={(img) => setActiveLightboxImage(img)}
            />
          </div>
        )}

        {currentPage === 'services' && (
          <div id="services-view-container" className="animate-in fade-in duration-300">
            <ServicesView
              onNavigateToGalleryWithCategory={handleSelectCategoryFromStrip}
              onBookCategory={handleBookCategory}
            />
          </div>
        )}

        {currentPage === 'about' && (
          <div id="about-view-container" className="animate-in fade-in duration-300">
            <AboutView onNavigate={navigateTo} />
          </div>
        )}

        {currentPage === 'testimonials' && (
          <div id="testimonials-view-container" className="animate-in fade-in duration-300">
            <TestimonialsView onNavigate={navigateTo} />
          </div>
        )}

        {currentPage === 'contact' && (
          <div id="contact-view-container" className="animate-in fade-in duration-300">
            <ContactView preselectedCategory={preselectedBookingCategory} />
          </div>
        )}
      </main>

      {/* Lightbox Modal */}
      <LightboxModal
        image={activeLightboxImage}
        allImages={GALLERY_IMAGES}
        onClose={() => setActiveLightboxImage(null)}
        onSelectImage={(img) => setActiveLightboxImage(img)}
        onBookShootCategory={handleBookCategory}
      />

      {/* Global Footer */}
      <Footer onNavigate={navigateTo} />
    </div>
  );
}
