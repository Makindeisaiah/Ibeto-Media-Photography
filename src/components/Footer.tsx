import React from 'react';
import { PageView, ServiceCategory } from '../types';
import { STUDIO_INFO, SERVICE_CATEGORIES } from '../data/photographyData';
import { Instagram, MessageSquare, Phone, Mail, MapPin, ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageView, categoryFilter?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#07080a] border-t border-zinc-800/80 text-zinc-400 font-sans">
      {/* Upper Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Studio Brand & Tagline */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex flex-col">
              <span className="font-serif text-2xl text-white font-bold tracking-[0.14em] uppercase">
                Ibeto Media
              </span>
              <span className="text-[9.5px] tracking-[0.28em] text-[#c5a86d] font-sans uppercase font-medium mt-1">
                Photography
              </span>
            </div>

            <p className="text-sm text-zinc-400 font-light leading-relaxed max-w-sm">
              {STUDIO_INFO.tagline}. Dedicated to capturing timeless elegance, raw emotion, and high-fashion distinction.
            </p>

            {/* Social handles */}
            <div className="flex items-center gap-3 pt-2">
              <a
                id="footer-instagram-btn"
                href={STUDIO_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-sm bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-[#c5a86d] transition-colors"
                aria-label="Instagram Link"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                id="footer-whatsapp-btn"
                href={`https://wa.me/${STUDIO_INFO.whatsappNumber.replace(/[^0-9]/g, '')}?text=Hello%20Ibeto%20Media,%20I'd%20like%20to%20inquire%20about%20booking%20a%20photography%20session.`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-sm bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-emerald-400 hover:border-emerald-500/50 transition-colors"
                aria-label="WhatsApp Link"
              >
                <MessageSquare className="w-4 h-4" />
              </a>

              <span className="text-xs text-zinc-500 pl-2">
                Follow <strong className="text-zinc-300">{STUDIO_INFO.instagramHandle}</strong>
              </span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs uppercase tracking-wider">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-[#c5a86d] transition-colors text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('gallery')}
                  className="hover:text-[#c5a86d] transition-colors text-left"
                >
                  Portfolio Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-[#c5a86d] transition-colors text-left"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#c5a86d] transition-colors text-left"
                >
                  About Studio
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('testimonials')}
                  className="hover:text-[#c5a86d] transition-colors text-left"
                >
                  Testimonials
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-[#c5a86d] transition-colors text-left text-[#c5a86d]"
                >
                  Book Session
                </button>
              </li>
            </ul>
          </div>

          {/* Disciplines / Categories */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-white">
              Disciplines
            </h4>
            <ul className="grid grid-cols-1 gap-1.5 text-xs text-zinc-400">
              {SERVICE_CATEGORIES.map((cat) => (
                <li key={cat}>
                  <button
                    onClick={() => onNavigate('gallery', cat)}
                    className="hover:text-[#c5a86d] transition-colors text-left truncate block w-full"
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information & Location */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-white">
              Studio Lagos
            </h4>
            <div className="space-y-2.5 text-xs text-zinc-400 font-light">
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#c5a86d] shrink-0 mt-0.5" />
                <span>{STUDIO_INFO.location}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#c5a86d] shrink-0" />
                <span>{STUDIO_INFO.phone}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#c5a86d] shrink-0" />
                <a href={`mailto:${STUDIO_INFO.email}`} className="hover:text-[#c5a86d]">
                  {STUDIO_INFO.email}
                </a>
              </p>
              <p className="text-[11px] text-zinc-500 pt-1">
                {STUDIO_INFO.hours}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright, Back to Top, Image Swapping Helper */}
      <div className="border-t border-zinc-900 bg-black/60 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            © {new Date().getFullYear()} {STUDIO_INFO.name}. All rights reserved. Lagos, Nigeria.
          </div>

          <div className="flex items-center gap-4">
            <button
              id="footer-back-to-top-btn"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
