import React, { useState, useEffect } from 'react';
import { PageView } from '../types';
import { STUDIO_INFO } from '../data/photographyData';
import { Camera, Menu, X, ArrowRight, Instagram, Phone } from 'lucide-react';

interface NavbarProps {
  currentPage: PageView;
  onNavigate: (page: PageView, categoryFilter?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; page: PageView }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Portfolio', page: 'gallery' },
    { label: 'Services', page: 'services' },
    { label: 'About', page: 'about' },
    { label: 'Testimonials', page: 'testimonials' },
    { label: 'Contact', page: 'contact' },
  ];

  const handleNavClick = (page: PageView) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0c0d10]/95 backdrop-blur-md border-b border-zinc-800/80 shadow-2xl py-3.5'
          : 'bg-gradient-to-b from-black/90 via-black/50 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo / Brand */}
        <button
          id="nav-logo-btn"
          onClick={() => handleNavClick('home')}
          className="group text-left focus:outline-none flex items-center gap-3"
        >
          <div className="w-10 h-10 rounded-full border border-[#c5a86d]/40 flex items-center justify-center bg-zinc-900/80 group-hover:border-[#c5a86d] transition-colors">
            <Camera className="w-5 h-5 text-[#c5a86d]" />
          </div>
          <div>
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-widest text-zinc-100 uppercase group-hover:text-[#c5a86d] transition-colors">
              Ibeto Media
            </span>
            <span className="block text-[9px] tracking-[0.25em] text-zinc-400 font-sans uppercase">
              Photography • Lagos
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav id="desktop-nav-links" className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navItems.map((item) => {
            const isActive = currentPage === item.page;
            return (
              <button
                key={item.page}
                id={`nav-link-${item.page}`}
                onClick={() => handleNavClick(item.page)}
                className={`relative px-3.5 py-2 text-sm tracking-wider uppercase font-medium transition-colors ${
                  isActive
                    ? 'text-[#c5a86d]'
                    : 'text-zinc-300 hover:text-white'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-3.5 right-3.5 h-[1.5px] bg-[#c5a86d] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Desktop CTA & Quick Social */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={STUDIO_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Profile"
            className="p-2 text-zinc-400 hover:text-[#c5a86d] transition-colors rounded-full hover:bg-zinc-800/50"
          >
            <Instagram className="w-4 h-4" />
          </a>
          <button
            id="nav-book-session-btn"
            onClick={() => handleNavClick('contact')}
            className="inline-flex items-center gap-2 px-4 py-2 border border-[#c5a86d]/70 hover:border-[#c5a86d] bg-[#c5a86d]/10 hover:bg-[#c5a86d] text-[#c5a86d] hover:text-black font-sans text-xs tracking-widest uppercase font-semibold rounded-sm transition-all duration-300 shadow-sm"
          >
            <span>Book a Session</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            id="mobile-book-icon-btn"
            onClick={() => handleNavClick('contact')}
            className="p-2 text-[#c5a86d] border border-[#c5a86d]/40 rounded-sm text-xs uppercase font-medium"
          >
            Book
          </button>
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-zinc-200 hover:text-white focus:outline-none"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-overlay"
          className="md:hidden bg-[#0c0d10] border-b border-zinc-800 px-6 py-8 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200 shadow-2xl"
        >
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <button
                key={item.page}
                id={`mobile-nav-${item.page}`}
                onClick={() => handleNavClick(item.page)}
                className={`text-left py-2 text-base tracking-widest uppercase font-serif transition-colors ${
                  currentPage === item.page
                    ? 'text-[#c5a86d] font-bold pl-2 border-l-2 border-[#c5a86d]'
                    : 'text-zinc-300 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-6 border-t border-zinc-800/80 flex flex-col gap-3">
            <button
              id="mobile-nav-cta-btn"
              onClick={() => handleNavClick('contact')}
              className="w-full py-3 bg-[#c5a86d] text-black font-semibold text-xs tracking-widest uppercase rounded-sm text-center flex items-center justify-center gap-2"
            >
              <span>Book a Photography Session</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <div className="flex items-center justify-between pt-2 text-xs text-zinc-400">
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#c5a86d]" /> {STUDIO_INFO.phone}
              </span>
              <span className="text-zinc-500">Lekki Phase 1, Lagos</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
