import { GalleryImage, ServiceCategory, ServiceItem, Testimonial, BehindTheScenesItem } from '../types';

export const STUDIO_INFO = {
  name: 'Ibeto Media Photography',
  shortName: 'Ibeto Media',
  tagline: 'Refined Portraiture, Glamour, Fashion & Milestone Events in Lagos',
  subTagline: 'Capturing Nigeria’s elegance, soul, and vibrant stories through high-precision lighting and cinematic composition.',
  location: 'Studio 4B, Admiralty Way, Lekki Phase 1, Lagos, Nigeria',
  email: 'bookings@ibetomedia.com',
  phone: '+234 803 912 8400',
  whatsappNumber: '+2348039128400', // International format for wa.me links
  instagramHandle: '@ibetomedia',
  instagramUrl: 'https://instagram.com/ibetomedia',
  hours: 'Monday – Saturday: 9:00 AM – 7:00 PM (Sunday by VIP appointment)',
  experienceYears: '8+ Years',
  photographerName: 'Ibeto Chukwuma',
  photographerTitle: 'Lead Photographer & Creative Director',
};

/**
 * SERVICE CATEGORIES LIST
 * Exact 8 categories requested:
 * Corporate, Events & Parties, Family & Group, Headshots & Portraits,
 * Individual, Maternity & Newborn, Product, Property
 */
export const SERVICE_CATEGORIES: ServiceCategory[] = [
  'Corporate',
  'Events & Parties',
  'Family & Group',
  'Headshots & Portraits',
  'Individual',
  'Maternity & Newborn',
  'Product',
  'Property',
];

/**
 * GALLERY IMAGES
 * High-quality placeholder photographs formatted for dark gallery aesthetic.
 * SWAPPING INSTRUCTIONS:
 * To replace with your own photos:
 * 1. Place your image files in `/public/images/` (e.g. `/images/corporate-1.jpg`)
 * 2. Update the `imageUrl` property below to match your file path or your hosted URL.
 */
export const GALLERY_IMAGES: GalleryImage[] = [
  // 1. Corporate
  {
    id: 'corp-1',
    title: 'The Modern Executive',
    category: 'Corporate',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80',
    placeholderAlt: 'Corporate executive portrait in modern Lagos office',
    aspectRatio: 'portrait',
    featured: true,
    year: '2025',
    clientOrLocation: 'Victoria Island, Lagos',
    caption: 'Executive branding session for fintech leadership board in Victoria Island.',
  },
  {
    id: 'corp-2',
    title: 'Boardroom Summit & Vision',
    category: 'Corporate',
    imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80',
    placeholderAlt: 'Corporate business leader portrait with subtle rim lighting',
    aspectRatio: 'landscape',
    featured: false,
    year: '2024',
    clientOrLocation: 'Ikoyi Business District',
    caption: 'Corporate narrative campaign highlighting African enterprise and thought leadership.',
  },
  {
    id: 'corp-3',
    title: 'Leadership in Tech',
    category: 'Corporate',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80',
    placeholderAlt: 'Contemporary corporate portrait with soft fill light',
    aspectRatio: 'portrait',
    featured: false,
    year: '2025',
    clientOrLocation: 'Lekki Phase 1',
    caption: 'Clean, approachable corporate branding for startup founder.',
  },

  // 2. Events & Parties
  {
    id: 'event-1',
    title: 'Royal Lagos Gala Soirée',
    category: 'Events & Parties',
    imageUrl: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80',
    placeholderAlt: 'Evening luxury gala celebration with warm ambient illumination',
    aspectRatio: 'landscape',
    featured: true,
    year: '2025',
    clientOrLocation: 'Eko Hotel & Suites, Victoria Island',
    caption: 'Unscripted elegance at an annual luxury fashion and charity gala.',
  },
  {
    id: 'event-2',
    title: 'Traditional Nuptial Grandeur',
    category: 'Events & Parties',
    imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
    placeholderAlt: 'Glamorous event celebration moment with rich ceremonial fabrics',
    aspectRatio: 'portrait',
    featured: false,
    year: '2024',
    clientOrLocation: 'Ikoyi Lagos',
    caption: 'Capturing the color, warmth, and vibrant jubilation of a grand wedding celebration.',
  },
  {
    id: 'event-3',
    title: 'High-Society Evening Reception',
    category: 'Events & Parties',
    imageUrl: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80',
    placeholderAlt: 'Atmospheric evening celebration with golden bokeh lights',
    aspectRatio: 'landscape',
    featured: false,
    year: '2025',
    clientOrLocation: 'Banana Island, Ikoyi',
    caption: 'Candid storytelling and dynamic low-light party documentary photography.',
  },

  // 3. Family & Group
  {
    id: 'fam-1',
    title: 'Generational Warmth',
    category: 'Family & Group',
    imageUrl: 'https://images.unsplash.com/photo-1609234656388-0ff363383899?auto=format&fit=crop&w=1200&q=80',
    placeholderAlt: 'Warm family portrait celebrating heritage and togetherness',
    aspectRatio: 'portrait',
    featured: true,
    year: '2025',
    clientOrLocation: 'Ibeto Studio, Lekki',
    caption: 'A timeless heirloom portrait commissioned for a 70th matriarch birthday milestone.',
  },
  {
    id: 'fam-2',
    title: 'Joy of Heritage',
    category: 'Family & Group',
    imageUrl: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1200&q=80',
    placeholderAlt: 'Siblings and family group smiling in natural warm light',
    aspectRatio: 'square',
    featured: false,
    year: '2024',
    clientOrLocation: 'Lekki Studio',
    caption: 'Relaxed, authentic smiles crafted with studio lighting that feels completely natural.',
  },

  // 4. Headshots & Portraits
  {
    id: 'head-1',
    title: 'Editorial Studio Chiaroscuro',
    category: 'Headshots & Portraits',
    imageUrl: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=1200&q=80',
    placeholderAlt: 'Dramatic chiaroscuro studio portrait of a woman',
    aspectRatio: 'portrait',
    featured: true,
    year: '2025',
    clientOrLocation: 'Ibeto Main Studio',
    caption: 'Dramatic rim lighting showcasing facial symmetry, confidence, and intense depth.',
  },
  {
    id: 'head-2',
    title: 'The Nollywood Visionary',
    category: 'Headshots & Portraits',
    imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1200&q=80',
    placeholderAlt: 'Expressive masculine headshot with dark background',
    aspectRatio: 'portrait',
    featured: true,
    year: '2025',
    clientOrLocation: 'Lagos Creative Hub',
    caption: 'Character-driven actor portfolio headshot for international film casting.',
  },
  {
    id: 'head-3',
    title: 'Sartorial Expression',
    category: 'Headshots & Portraits',
    imageUrl: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=1200&q=80',
    placeholderAlt: 'Crisp studio headshot with gentle rim contrast',
    aspectRatio: 'square',
    featured: false,
    year: '2024',
    clientOrLocation: 'Ibeto Studio',
    caption: 'Precision beauty dish lighting bringing out micro-texture and skin tone richness.',
  },

  // 5. Individual
  {
    id: 'ind-1',
    title: 'Golden Hour Haute Glamour',
    category: 'Individual',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80',
    placeholderAlt: 'High-fashion glamour portrait with warm amber rim light',
    aspectRatio: 'portrait',
    featured: true,
    year: '2025',
    clientOrLocation: 'Victoria Island Beachfront',
    caption: 'Bespoke glamour session honoring individual milestone and elevated personal style.',
  },
  {
    id: 'ind-2',
    title: 'Sculpted in Charcoal & Silk',
    category: 'Individual',
    imageUrl: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=80',
    placeholderAlt: 'Fashion editorial pose against textured studio backdrop',
    aspectRatio: 'portrait',
    featured: false,
    year: '2024',
    clientOrLocation: 'Ibeto Studio, Lekki',
    caption: 'Artistic direction emphasizing silhouette, texture, and tailored silhouettes.',
  },
  {
    id: 'ind-3',
    title: 'Urban Vogue Lagos',
    category: 'Individual',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1200&q=80',
    placeholderAlt: 'Radiant individual beauty portrait with radiant glow',
    aspectRatio: 'square',
    featured: false,
    year: '2025',
    clientOrLocation: 'Lekki Phase 1',
    caption: 'Celebratory birthday portrait session with creative wardrobe styling.',
  },

  // 6. Maternity & Newborn
  {
    id: 'mat-1',
    title: 'Grace & Anticipation',
    category: 'Maternity & Newborn',
    imageUrl: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1200&q=80',
    placeholderAlt: 'Ethereal maternity portrait with flowing drapery and soft backlighting',
    aspectRatio: 'portrait',
    featured: true,
    year: '2025',
    clientOrLocation: 'Private Studio Sanctuary',
    caption: 'A serene celebration of motherhood in flowing chiffon and sculptural lighting.',
  },
  {
    id: 'mat-2',
    title: 'First Miracle & Whisper',
    category: 'Maternity & Newborn',
    imageUrl: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=1200&q=80',
    placeholderAlt: 'Peaceful sleeping newborn cradled in gentle studio nest',
    aspectRatio: 'landscape',
    featured: false,
    year: '2024',
    clientOrLocation: 'Ikoyi Residence',
    caption: 'Delicate, safety-first newborn session preserving the tender innocence of day twelve.',
  },

  // 7. Product
  {
    id: 'prod-1',
    title: 'Artisanal Fragrance & Amber Noir',
    category: 'Product',
    imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80',
    placeholderAlt: 'Luxury minimalist product photography with obsidian reflective surface',
    aspectRatio: 'landscape',
    featured: true,
    year: '2025',
    clientOrLocation: 'Studio Light Table, Lekki',
    caption: 'Commercial advertising still life for bespoke luxury fragrance brand.',
  },
  {
    id: 'prod-2',
    title: 'Handcrafted African Leather & Horology',
    category: 'Product',
    imageUrl: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1200&q=80',
    placeholderAlt: 'Luxury watch and crafted accessories product shot with macro detail',
    aspectRatio: 'square',
    featured: false,
    year: '2024',
    clientOrLocation: 'Lagos Atelier',
    caption: 'High-detail macro focus capturing tactile materials, stitching, and metal finishes.',
  },

  // 8. Property
  {
    id: 'prop-1',
    title: 'Architectural Opulence in Ikoyi',
    category: 'Property',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    placeholderAlt: 'Contemporary luxury waterfront villa exterior at twilight',
    aspectRatio: 'landscape',
    featured: true,
    year: '2025',
    clientOrLocation: 'Banana Island, Lagos',
    caption: 'Twilight architectural showcase capturing ambient exterior glow and interior harmony.',
  },
  {
    id: 'prop-2',
    title: 'Minimalist Penthouse Living',
    category: 'Property',
    imageUrl: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1200&q=80',
    placeholderAlt: 'Interior design photography of spacious modern Lagos living room',
    aspectRatio: 'landscape',
    featured: false,
    year: '2024',
    clientOrLocation: 'Eko Atlantic City',
    caption: 'Interior editorial highlighting spatial flow, natural light balance, and curated finishes.',
  },
];

/**
 * 8 SERVICE PACKAGES
 * Detailed cards matching all 8 categories
 */
export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'service-corp',
    category: 'Corporate',
    shortDesc: 'Executive branding, annual reports, board members, and team commercial profiles.',
    whatsIncluded: [
      'On-location mobile studio or Lekki studio setup',
      'High-end skin frequency-separation retouching',
      'Individual executive portraits & group team compositions',
      'Full commercial web & print usage licensing',
    ],
    whoItsFor: 'Fintech companies, legal firms, C-suite executives, directors, and corporate communications teams.',
    estimatedDuration: '2 – 4 Hours',
    deliverables: '15 – 40 Retouched High-Res Images + Web Optimized Versions',
    coverImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'service-events',
    category: 'Events & Parties',
    shortDesc: 'Discreet, high-impact documentary coverage for high-profile galas, birthdays, and celebrations.',
    whatsIncluded: [
      'Comprehensive candid & staged guest documentation',
      'Dual-shooter coverage for large venues upon request',
      'Atmospheric low-light photography without harsh intrusive flashes',
      'Express highlight reel delivered within 48 hours',
    ],
    whoItsFor: 'Society weddings, luxury milestone birthdays, corporate galas, fashion launches, and private soirees.',
    estimatedDuration: 'Half Day (5 hrs) or Full Day (9 hrs)',
    deliverables: '150 – 400+ Curated Color-Graded High-Res Deliverables',
    coverImage: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'service-family',
    category: 'Family & Group',
    shortDesc: 'Heirloom studio and on-location portraiture that captures genuine generational connection.',
    whatsIncluded: [
      'Wardrobe and color palette consultation before the shoot',
      'Generational breakdown (full family, grandparents, siblings, individual children)',
      'Comfortable, patient environment with refreshment hospitality',
      'Fine art wall enlargement print recommendations',
    ],
    whoItsFor: 'Families honoring anniversaries, holiday milestones, graduations, and multi-generational legacies.',
    estimatedDuration: '1.5 – 2 Hours',
    deliverables: '20 Master-Retouched High-Res Portraits + Web Gallery',
    coverImage: 'https://images.unsplash.com/photo-1609234656388-0ff363383899?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'service-headshots',
    category: 'Headshots & Portraits',
    shortDesc: 'Signature lighting setups crafted to communicate authority, approachability, and character.',
    whatsIncluded: [
      'Multiple backdrops (Obsidian Black, Charcoal Textured, Warm Ochre, Crisp Ivory)',
      'Real-time tethered iPad review during the shoot',
      'Up to 3 outfit changes with styling guidance',
      'LinkedIn, press kit, and casting-ready crops',
    ],
    whoItsFor: 'Actors, creative directors, thought leaders, authors, keynote speakers, and professionals.',
    estimatedDuration: '1 – 1.5 Hours',
    deliverables: '6 – 10 Magazine-Quality Master Headshots',
    coverImage: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'service-individual',
    category: 'Individual',
    shortDesc: 'Bespoke glamour, editorial fashion, and creative self-celebration sessions.',
    whatsIncluded: [
      'Creative moodboard direction and lighting design',
      'Optional in-studio professional makeup artist partnership',
      'Dramatic lighting styling with gels, softboxes, or cinematic continuous lights',
      'Private online gallery with download PIN',
    ],
    whoItsFor: 'Influencers, creatives, individuals celebrating milestone birthdays, and personal brand transformations.',
    estimatedDuration: '2 Hours',
    deliverables: '12 – 18 Editorial Retouched Images',
    coverImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'service-maternity',
    category: 'Maternity & Newborn',
    shortDesc: 'Gentle, sculptural, and poetic sessions celebrating the sacred journey into motherhood.',
    whatsIncluded: [
      'Access to studio maternity draping gowns and wraps',
      'Partner and toddler inclusion in maternal scenes',
      'Strict hygiene and climate-controlled studio comfort for newborns',
      'Safe, guided posing emphasizing softness and elegance',
    ],
    whoItsFor: 'Expecting mothers between 28–34 weeks and newborns within their first 14 days of arrival.',
    estimatedDuration: '2 – 3 Hours (unrushed for newborn comfort)',
    deliverables: '15 Hand-Finished Fine Art Digital Masterpieces',
    coverImage: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'service-product',
    category: 'Product',
    shortDesc: 'Crisp commercial catalog, macro e-commerce, and high-impact hero campaign advertising imagery.',
    whatsIncluded: [
      'Precision product staging, dust removal, and reflective control',
      'Pure seamless white, charcoal, or styled textured environment backdrops',
      'Focus stacking for razor-sharp edge-to-edge clarity',
      'Amazon, Shopify, and social ad formats included',
    ],
    whoItsFor: 'Cosmetics brands, luxury jewelry makers, beverage distillers, fashion labels, and e-commerce founders.',
    estimatedDuration: 'Custom Project Based',
    deliverables: 'Batch High-Resolution Retouched Commercial Assets',
    coverImage: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'service-property',
    category: 'Property',
    shortDesc: 'Architectural and interior space photography engineered for developers, architects, and luxury realtors.',
    whatsIncluded: [
      'Wide-angle perspective-corrected architectural lenses',
      'HDR window pull and ambient-plus-flash balanced lighting',
      'Twilight / blue-hour exterior exterior hero shots',
      'Detailed lifestyle vignettes of interior finishes',
    ],
    whoItsFor: 'Real estate developers in Lekki/Ikoyi/Eko Atlantic, luxury Airbnb hosts, interior designers, and architects.',
    estimatedDuration: '2 – 4 Hours on site',
    deliverables: '25 – 60 High-Resolution Marketing Images',
    coverImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
  },
];

/**
 * TESTIMONIALS DATA
 * Authentic Lagos client voices across fashion, corporate, bridal, and creative industries
 */
export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    clientName: 'Onyinyechi Adeleke',
    roleOrCompany: 'Creative Director, Atelier Noir Lagos',
    shootType: 'Individual',
    location: 'Victoria Island, Lagos',
    quote: 'Working with Ibeto was an otherworldly experience. His understanding of rich African skin tones, dramatic chiaroscuro lighting, and effortless posing resulted in the best editorial shoot of my life. He elevates photography into fine art.',
    year: '2025',
  },
  {
    id: 'test-2',
    clientName: 'Tunde Babatunde',
    roleOrCompany: 'Partner & Co-Founder, Crestline Capital',
    shootType: 'Corporate',
    location: 'Ikoyi, Lagos',
    quote: 'Ibeto Media delivered executive headshots for our entire board of 14 partners. The studio setup in Lekki was seamless, fast, and remarkably professional. The photos commanded immediate respect across our investor decks and press features.',
    year: '2025',
  },
  {
    id: 'test-3',
    clientName: 'Dr. Ifeoma & Chuka Okafor',
    roleOrCompany: 'Family Milestone Anniversary',
    shootType: 'Family & Group',
    location: 'Lekki Phase 1',
    quote: 'Capturing three generations with four energetic toddlers usually feels impossible, but Ibeto was extraordinarily patient and warm. Our grandmother was moved to tears when she saw the framed heirloom prints.',
    year: '2024',
  },
  {
    id: 'test-4',
    clientName: 'Folake Alabi',
    roleOrCompany: 'Bridal Celebration & Reception',
    shootType: 'Events & Parties',
    location: 'Banana Island, Lagos',
    quote: 'The unscripted joy and glamour Ibeto captured during our evening gala reception was breathtaking. He blended into the background yet managed to catch every golden glance, laugh, and toast. Highly recommend him without reservation.',
    year: '2025',
  },
  {
    id: 'test-5',
    clientName: 'Zainab Mohammed',
    roleOrCompany: 'Founder, Zai Botanicals',
    shootType: 'Product',
    location: 'Lagos, Nigeria',
    quote: 'Our skincare brand saw a 40% uptick in conversion after switching to Ibeto’s luxury still-life campaign photos. The reflections, the water drops, and the dark velvet background were pure international luxury standard.',
    year: '2024',
  },
  {
    id: 'test-6',
    clientName: 'Bolanle & Femi Peters',
    roleOrCompany: 'Maternity Session',
    shootType: 'Maternity & Newborn',
    location: 'Lekki Studio',
    quote: 'I felt like a goddess during my 32-week shoot. Ibeto made me feel comfortable, protected, and radiant. The images are something my daughter will treasure for decades to come.',
    year: '2025',
  },
];

/**
 * BEHIND THE SCENES
 */
export const BEHIND_THE_SCENES: BehindTheScenesItem[] = [
  {
    id: 'bts-1',
    title: 'The Lekki Sanctuary Studio',
    description: 'A 1,400 sq ft climate-controlled acoustic space featuring custom backdrops, Profoto lighting modifiers, and dedicated client dressing suite.',
    imageUrl: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'bts-2',
    title: 'Precision Tethering & Color Grading',
    description: 'Shooting tethered to calibrated EIZO monitors ensures clients and stylists see accurate skin tones and contrast in real time.',
    imageUrl: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'bts-3',
    title: 'On-Location In Lagos & Beyond',
    description: 'Equipped with battery-powered high-speed sync generators to capture dramatic sunset glamour across Lagos beaches and estates.',
    imageUrl: 'https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?auto=format&fit=crop&w=800&q=80',
  },
];
