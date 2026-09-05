import React from 'react';
import { SERVICE_CATEGORIES } from '../data/photographyData';
import { ServiceCategory } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface CategoryStripProps {
  onSelectCategory: (category: ServiceCategory) => void;
}

export const CategoryStrip: React.FC<CategoryStripProps> = ({ onSelectCategory }) => {
  return (
    <section id="service-categories-strip" className="border-y border-zinc-800/80 bg-[#0f1015]/90 py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-3 text-xs tracking-widest uppercase font-sans text-zinc-400">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#c5a86d]" />
            Specialized Disciplines
          </span>
          <span className="hidden sm:inline text-zinc-500">
            Click any genre to explore curated gallery works
          </span>
        </div>

        {/* Horizontal scrollable category row */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-2 scrollbar-none scroll-smooth">
          {SERVICE_CATEGORIES.map((category) => (
            <button
              key={category}
              id={`cat-strip-btn-${category.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              onClick={() => onSelectCategory(category)}
              className="group whitespace-nowrap inline-flex items-center gap-2 px-4 py-2.5 rounded-sm bg-zinc-900/90 hover:bg-zinc-800/90 border border-zinc-800 hover:border-[#c5a86d]/60 text-zinc-300 hover:text-white transition-all duration-200 text-xs sm:text-sm font-sans tracking-wider"
            >
              <span>{category}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-[#c5a86d] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
