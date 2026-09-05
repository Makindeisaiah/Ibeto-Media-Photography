import { GalleryImage, ServiceCategory, ServiceItem, Testimonial, BehindTheScenesItem } from '../types';

/**
 * Dynamic resolution of all user images in /src/assets/images/
 * Vite bundles or serves any .jpg, .jpeg, .png, or .webp placed in these folders.
 */
const assetImageModules = import.meta.glob<string>(
  '/src/assets/images/**/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG}',
  {
    eager: true,
    import: 'default',
  }
);

/**
 * Returns the resolved asset URL for any slot in /src/assets/images/
 * Supports automatic fallback to .png, .jpeg, or .webp if the user drops that format.
 */
export function getLocalSlotUrl(subpath: string): string {
  const cleanPath = subpath.replace(/^\//, '');
  const exactKey = `/src/assets/images/${cleanPath}`;

  if (assetImageModules[exactKey]) {
    return assetImageModules[exactKey];
  }

  // Try matching alternative extensions (.png, .jpeg, .webp, .JPG, .PNG)
  const withoutExt = exactKey.replace(/\.[^/.]+$/, '');
  const candidateExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.JPG', '.JPEG', '.PNG'];

  for (const ext of candidateExtensions) {
    const candidate = `${withoutExt}${ext}`;
    if (assetImageModules[candidate]) {
      return assetImageModules[candidate];
    }
  }

  // Return standard path if not yet indexed
  return exactKey;
}

export const HERO_IMAGE_SLOT = 'hero/hero-main.jpg';
export const ABOUT_IMAGE_SLOT = 'about/photographer-bio.jpg';

export const STUDIO_INFO = {
  name: 'Ibeto Media Photography',
  shortName: 'Ibeto Media',
  tagline: 'Refined Portraiture, Glamour, Fashion & Milestone Events in Lagos',
  subTagline: 'Capturing Nigeria’s elegance, soul, and vibrant stories through high-precision lighting and cinematic composition.',
  location: 'Studio 4B, Admiralty Way, Lekki Phase 1, Lagos, Nigeria',
  email: 'bookings@ibetomedia.com',
  phone: '+234 803 912 8400',
  whatsappNumber: '+2348039128400',
  instagramHandle: '@ibetomedia',
  instagramUrl: 'https://instagram.com/ibetomedia',
  hours: 'Monday – Saturday: 9:00 AM – 7:00 PM (Sunday by VIP appointment)',
  experienceYears: '8+ Years',
  photographerName: 'Ibeto Chukwuma',
  photographerTitle: 'Lead Photographer & Creative Director',
};

/**
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
 * Mapped to /src/assets/images/[category]/[filename].jpg
 * Drag and drop your real photos directly into these folders.
 */
export const GALLERY_IMAGES: GalleryImage[] = [
  // 1. Corporate
  {
    id: 'corp-1',
    title: 'Executive Boardroom Portrait',
    category: 'Corporate',
    slotFilename: 'corporate/corporate-1.jpg',
    imageUrl: getLocalSlotUrl('corporate/corporate-1.jpg'),
    placeholderAlt: 'Corporate executive portrait slot 1',
    aspectRatio: 'portrait',
    featured: true,
    year: '2025',
    clientOrLocation: 'Victoria Island, Lagos',
    caption: 'Executive leadership branding session in Victoria Island.',
  },
  {
    id: 'corp-2',
    title: 'Corporate Leadership & Vision',
    category: 'Corporate',
    slotFilename: 'corporate/corporate-2.jpg',
    imageUrl: getLocalSlotUrl('corporate/corporate-2.jpg'),
    placeholderAlt: 'Corporate leadership portrait slot 2',
    aspectRatio: 'landscape',
    featured: false,
    year: '2025',
    clientOrLocation: 'Ikoyi Business District',
    caption: 'Corporate narrative campaign highlighting African enterprise and executive poise.',
  },
  {
    id: 'corp-3',
    title: 'Contemporary Enterprise Profile',
    category: 'Corporate',
    slotFilename: 'corporate/corporate-3.jpg',
    imageUrl: getLocalSlotUrl('corporate/corporate-3.jpg'),
    placeholderAlt: 'Corporate enterprise portrait slot 3',
    aspectRatio: 'portrait',
    featured: false,
    year: '2025',
    clientOrLocation: 'Lekki Phase 1',
    caption: 'Clean, authoritative corporate branding for founders and partners.',
  },

  // 2. Events & Parties
  {
    id: 'event-1',
    title: 'High-Society Gala Soirée',
    category: 'Events & Parties',
    slotFilename: 'events/events-1.jpg',
    imageUrl: getLocalSlotUrl('events/events-1.jpg'),
    placeholderAlt: 'Evening luxury gala celebration slot 1',
    aspectRatio: 'landscape',
    featured: true,
    year: '2025',
    clientOrLocation: 'Eko Hotel, Victoria Island',
    caption: 'Unscripted elegance at an annual luxury fashion and milestone celebration.',
  },
  {
    id: 'event-2',
    title: 'Traditional Nuptial Grandeur',
    category: 'Events & Parties',
    slotFilename: 'events/events-2.jpg',
    imageUrl: getLocalSlotUrl('events/events-2.jpg'),
    placeholderAlt: 'Celebration ceremony moment slot 2',
    aspectRatio: 'portrait',
    featured: false,
    year: '2025',
    clientOrLocation: 'Ikoyi, Lagos',
    caption: 'Capturing the color, warmth, and jubilation of a grand wedding celebration.',
  },
  {
    id: 'event-3',
    title: 'Evening Milestone Reception',
    category: 'Events & Parties',
    slotFilename: 'events/events-3.jpg',
    imageUrl: getLocalSlotUrl('events/events-3.jpg'),
    placeholderAlt: 'Evening celebration with ambient light slot 3',
    aspectRatio: 'landscape',
    featured: false,
    year: '2025',
    clientOrLocation: 'Banana Island, Ikoyi',
    caption: 'Candid storytelling and dynamic low-light party documentary photography.',
  },

  // 3. Family & Group
  {
    id: 'fam-1',
    title: 'Generational Heirloom Portrait',
    category: 'Family & Group',
    slotFilename: 'family-group/family-group-1.jpg',
    imageUrl: getLocalSlotUrl('family-group/family-group-1.jpg'),
    placeholderAlt: 'Family generational portrait slot 1',
    aspectRatio: 'portrait',
    featured: true,
    year: '2025',
    clientOrLocation: 'Ibeto Studio, Lekki',
    caption: 'A timeless heirloom portrait commissioned for a multi-generational milestone.',
  },
  {
    id: 'fam-2',
    title: 'Heritage & Togetherness',
    category: 'Family & Group',
    slotFilename: 'family-group/family-group-2.jpg',
    imageUrl: getLocalSlotUrl('family-group/family-group-2.jpg'),
    placeholderAlt: 'Family group portrait slot 2',
    aspectRatio: 'square',
    featured: false,
    year: '2025',
    clientOrLocation: 'Lekki Studio',
    caption: 'Authentic connection crafted with studio lighting that feels completely natural.',
  },
  {
    id: 'fam-3',
    title: 'Kinship & Legacy Gathering',
    category: 'Family & Group',
    slotFilename: 'family-group/family-group-3.jpg',
    imageUrl: getLocalSlotUrl('family-group/family-group-3.jpg'),
    placeholderAlt: 'Family group gathering slot 3',
    aspectRatio: 'landscape',
    featured: false,
    year: '2025',
    clientOrLocation: 'Victoria Island Residence',
    caption: 'Honoring shared history, laughter, and family bonds.',
  },

  // 4. Headshots & Portraits
  {
    id: 'head-1',
    title: 'Editorial Studio Chiaroscuro',
    category: 'Headshots & Portraits',
    slotFilename: 'headshots-portraits/headshots-portraits-1.jpg',
    imageUrl: getLocalSlotUrl('headshots-portraits/headshots-portraits-1.jpg'),
    placeholderAlt: 'Studio chiaroscuro portrait slot 1',
    aspectRatio: 'portrait',
    featured: true,
    year: '2025',
    clientOrLocation: 'Ibeto Main Studio',
    caption: 'Dramatic rim lighting showcasing facial symmetry, depth, and character.',
  },
  {
    id: 'head-2',
    title: 'The Creative Visionary',
    category: 'Headshots & Portraits',
    slotFilename: 'headshots-portraits/headshots-portraits-2.jpg',
    imageUrl: getLocalSlotUrl('headshots-portraits/headshots-portraits-2.jpg'),
    placeholderAlt: 'Masculine creative headshot slot 2',
    aspectRatio: 'portrait',
    featured: true,
    year: '2025',
    clientOrLocation: 'Lagos Creative Hub',
    caption: 'Character-driven actor portfolio headshot for international film casting.',
  },
  {
    id: 'head-3',
    title: 'Sartorial Beauty Portrait',
    category: 'Headshots & Portraits',
    slotFilename: 'headshots-portraits/headshots-portraits-3.jpg',
    imageUrl: getLocalSlotUrl('headshots-portraits/headshots-portraits-3.jpg'),
    placeholderAlt: 'Sartorial beauty portrait slot 3',
    aspectRatio: 'square',
    featured: false,
    year: '2025',
    clientOrLocation: 'Ibeto Studio',
    caption: 'Precision beauty dish lighting bringing out skin tone richness and subtle nuance.',
  },

  // 5. Individual
  {
    id: 'ind-1',
    title: 'Haute Editorial Glamour',
    category: 'Individual',
    slotFilename: 'individual/individual-1.jpg',
    imageUrl: getLocalSlotUrl('individual/individual-1.jpg'),
    placeholderAlt: 'Haute editorial glamour slot 1',
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
    slotFilename: 'individual/individual-2.jpg',
    imageUrl: getLocalSlotUrl('individual/individual-2.jpg'),
    placeholderAlt: 'Fashion editorial pose slot 2',
    aspectRatio: 'portrait',
    featured: false,
    year: '2025',
    clientOrLocation: 'Ibeto Studio, Lekki',
    caption: 'Artistic direction emphasizing silhouette, texture, and bespoke tailoring.',
  },
  {
    id: 'ind-3',
    title: 'Contemporary Lagos Chic',
    category: 'Individual',
    slotFilename: 'individual/individual-3.jpg',
    imageUrl: getLocalSlotUrl('individual/individual-3.jpg'),
    placeholderAlt: 'Individual beauty portrait slot 3',
    aspectRatio: 'square',
    featured: false,
    year: '2025',
    clientOrLocation: 'Lekki Phase 1',
    caption: 'Celebratory birthday portrait session with creative wardrobe styling.',
  },

  // 6. Maternity & Newborn
  {
    id: 'mat-1',
    title: 'Grace & Sacred Anticipation',
    category: 'Maternity & Newborn',
    slotFilename: 'maternity-newborn/maternity-newborn-1.jpg',
    imageUrl: getLocalSlotUrl('maternity-newborn/maternity-newborn-1.jpg'),
    placeholderAlt: 'Maternity portrait slot 1',
    aspectRatio: 'portrait',
    featured: true,
    year: '2025',
    clientOrLocation: 'Private Studio Sanctuary',
    caption: 'A serene celebration of motherhood in flowing drapery and sculptural lighting.',
  },
  {
    id: 'mat-2',
    title: 'First Days & Gentle Whisper',
    category: 'Maternity & Newborn',
    slotFilename: 'maternity-newborn/maternity-newborn-2.jpg',
    imageUrl: getLocalSlotUrl('maternity-newborn/maternity-newborn-2.jpg'),
    placeholderAlt: 'Newborn session slot 2',
    aspectRatio: 'landscape',
    featured: false,
    year: '2025',
    clientOrLocation: 'Ikoyi Residence',
    caption: 'Delicate, safety-first newborn session preserving tender innocence.',
  },
  {
    id: 'mat-3',
    title: 'Tender Maternal Silhouette',
    category: 'Maternity & Newborn',
    slotFilename: 'maternity-newborn/maternity-newborn-3.jpg',
    imageUrl: getLocalSlotUrl('maternity-newborn/maternity-newborn-3.jpg'),
    placeholderAlt: 'Maternity silhouette slot 3',
    aspectRatio: 'portrait',
    featured: false,
    year: '2025',
    clientOrLocation: 'Lekki Studio',
    caption: 'Intimate fine art silhouette highlighting maternal beauty and poise.',
  },

  // 7. Product
  {
    id: 'prod-1',
    title: 'Luxury Fragrance & Obsidian Noir',
    category: 'Product',
    slotFilename: 'product/product-1.jpg',
    imageUrl: getLocalSlotUrl('product/product-1.jpg'),
    placeholderAlt: 'Product still life slot 1',
    aspectRatio: 'landscape',
    featured: true,
    year: '2025',
    clientOrLocation: 'Studio Light Table, Lekki',
    caption: 'Commercial advertising still life for bespoke luxury fragrance and skincare.',
  },
  {
    id: 'prod-2',
    title: 'African Leather & Horology Detail',
    category: 'Product',
    slotFilename: 'product/product-2.jpg',
    imageUrl: getLocalSlotUrl('product/product-2.jpg'),
    placeholderAlt: 'Luxury product macro slot 2',
    aspectRatio: 'square',
    featured: false,
    year: '2025',
    clientOrLocation: 'Lagos Atelier',
    caption: 'High-detail macro focus capturing tactile materials, stitching, and metal finishes.',
  },
  {
    id: 'prod-3',
    title: 'Artisanal Jewelry & Gemstones',
    category: 'Product',
    slotFilename: 'product/product-3.jpg',
    imageUrl: getLocalSlotUrl('product/product-3.jpg'),
    placeholderAlt: 'Jewelry campaign slot 3',
    aspectRatio: 'landscape',
    featured: false,
    year: '2025',
    clientOrLocation: 'Ibeto Studio Lightbox',
    caption: 'Micro-reflections and razor-sharp sparkle on gold and precious stones.',
  },

  // 8. Property
  {
    id: 'prop-1',
    title: 'Architectural Opulence in Ikoyi',
    category: 'Property',
    slotFilename: 'property/property-1.jpg',
    imageUrl: getLocalSlotUrl('property/property-1.jpg'),
    placeholderAlt: 'Property exterior architecture slot 1',
    aspectRatio: 'landscape',
    featured: true,
    year: '2025',
    clientOrLocation: 'Banana Island, Lagos',
    caption: 'Twilight architectural showcase capturing ambient exterior glow and interior harmony.',
  },
  {
    id: 'prop-2',
    title: 'Minimalist Penthouse Interior',
    category: 'Property',
    slotFilename: 'property/property-2.jpg',
    imageUrl: getLocalSlotUrl('property/property-2.jpg'),
    placeholderAlt: 'Property interior living space slot 2',
    aspectRatio: 'landscape',
    featured: false,
    year: '2025',
    clientOrLocation: 'Eko Atlantic City',
    caption: 'Interior editorial highlighting spatial flow, natural light balance, and curated finishes.',
  },
  {
    id: 'prop-3',
    title: 'Waterfront Villa Architecture',
    category: 'Property',
    slotFilename: 'property/property-3.jpg',
    imageUrl: getLocalSlotUrl('property/property-3.jpg'),
    placeholderAlt: 'Waterfront property showcase slot 3',
    aspectRatio: 'portrait',
    featured: false,
    year: '2025',
    clientOrLocation: 'Lekki Coastal Front',
    caption: 'Sun-drenched architectural lines and contemporary Nigerian coastal living.',
  },
];

/**
 * 8 SERVICE PACKAGES
 * Cover images correspond to each category's first slot in /src/assets/images/
 */
export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'service-corp',
    category: 'Corporate',
    slotFilename: 'corporate/corporate-1.jpg',
    coverImage: getLocalSlotUrl('corporate/corporate-1.jpg'),
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
  },
  {
    id: 'service-events',
    category: 'Events & Parties',
    slotFilename: 'events/events-1.jpg',
    coverImage: getLocalSlotUrl('events/events-1.jpg'),
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
  },
  {
    id: 'service-family',
    category: 'Family & Group',
    slotFilename: 'family-group/family-group-1.jpg',
    coverImage: getLocalSlotUrl('family-group/family-group-1.jpg'),
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
  },
  {
    id: 'service-headshots',
    category: 'Headshots & Portraits',
    slotFilename: 'headshots-portraits/headshots-portraits-1.jpg',
    coverImage: getLocalSlotUrl('headshots-portraits/headshots-portraits-1.jpg'),
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
  },
  {
    id: 'service-individual',
    category: 'Individual',
    slotFilename: 'individual/individual-1.jpg',
    coverImage: getLocalSlotUrl('individual/individual-1.jpg'),
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
  },
  {
    id: 'service-maternity',
    category: 'Maternity & Newborn',
    slotFilename: 'maternity-newborn/maternity-newborn-1.jpg',
    coverImage: getLocalSlotUrl('maternity-newborn/maternity-newborn-1.jpg'),
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
  },
  {
    id: 'service-product',
    category: 'Product',
    slotFilename: 'product/product-1.jpg',
    coverImage: getLocalSlotUrl('product/product-1.jpg'),
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
  },
  {
    id: 'service-property',
    category: 'Property',
    slotFilename: 'property/property-1.jpg',
    coverImage: getLocalSlotUrl('property/property-1.jpg'),
    shortDesc: 'Architectural and interior space photography engineered for developers, architects, and luxury realtors.',
    whatsIncluded: [
      'Wide-angle perspective-corrected architectural lenses',
      'HDR window pull and ambient-plus-flash balanced lighting',
      'Twilight / blue-hour exterior hero shots',
      'Detailed lifestyle vignettes of interior finishes',
    ],
    whoItsFor: 'Real estate developers in Lekki/Ikoyi/Eko Atlantic, luxury Airbnb hosts, interior designers, and architects.',
    estimatedDuration: '2 – 4 Hours on site',
    deliverables: '25 – 60 High-Resolution Marketing Images',
  },
];

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

export const BEHIND_THE_SCENES: BehindTheScenesItem[] = [
  {
    id: 'bts-1',
    title: 'The Lekki Sanctuary Studio',
    slotFilename: 'bts/bts-studio.jpg',
    imageUrl: getLocalSlotUrl('bts/bts-studio.jpg'),
    description: 'A climate-controlled acoustic space featuring custom textured backdrops, high-end modifiers, and client dressing suite.',
  },
  {
    id: 'bts-2',
    title: 'Precision Tethering & Color Grading',
    slotFilename: 'bts/bts-tethering.jpg',
    imageUrl: getLocalSlotUrl('bts/bts-tethering.jpg'),
    description: 'Shooting tethered to calibrated monitors ensures clients and stylists see true skin tones and contrast in real time.',
  },
  {
    id: 'bts-3',
    title: 'On-Location In Lagos & Beyond',
    slotFilename: 'bts/bts-location.jpg',
    imageUrl: getLocalSlotUrl('bts/bts-location.jpg'),
    description: 'Equipped with battery-powered high-speed generators to capture sunset glamour across Lagos beaches and private estates.',
  },
];
