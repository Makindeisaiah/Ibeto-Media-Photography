import { GalleryImage, ServiceCategory, ServiceItem, Testimonial, BehindTheScenesItem } from '../types';

/**
 * Dynamic resolution of all user images in /src/assets/images/
 * Vite bundles or serves any .jpg, .jpeg, .png, or .webp placed in these folders.
 */
const assetImageModules = import.meta.glob<string>(
  [
    '/src/assets/images/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG}',
    '/src/assets/images/**/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG}',
  ],
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
 * The 6 designated categories:
 * Wedding, Birthday, Corporate, Maternity & Newborn, Modeling, Headshots & Portraits
 */
export const SERVICE_CATEGORIES: ServiceCategory[] = [
  'Wedding',
  'Birthday',
  'Corporate',
  'Maternity & Newborn',
  'Modeling',
  'Headshots & Portraits',
];

/**
 * GALLERY IMAGES
 * Mapped to /src/assets/images/[category]/[filename].jpg
 * Drag and drop your real photos directly into these folders.
 */
export const GALLERY_IMAGES: GalleryImage[] = [
  // 1. Wedding
  {
    id: 'wed-1',
    title: 'Traditional Nuptials & Grandeur',
    category: 'Wedding',
    slotFilename: 'wedding/wedding-1.jpg',
    imageUrl: getLocalSlotUrl('wedding/wedding-1.jpg'),
    placeholderAlt: 'Luxury traditional wedding ceremony moment',
    aspectRatio: 'portrait',
    featured: true,
    year: '2025',
    clientOrLocation: 'Ikoyi, Lagos',
    caption: 'Celebrating regal bridal heritage, bespoke beads, and timeless nuptial elegance in Lagos.',
  },
  {
    id: 'wed-2',
    title: 'The Golden Hour Couple Editorial',
    category: 'Wedding',
    slotFilename: 'wedding/wedding-2.jpg',
    imageUrl: getLocalSlotUrl('wedding/wedding-2.jpg'),
    placeholderAlt: 'Bride and groom sunset portrait',
    aspectRatio: 'landscape',
    featured: true,
    year: '2025',
    clientOrLocation: 'Banana Island, Lagos',
    caption: 'Intimate sunset romance and natural cinematic backlight against the Lagos lagoon.',
  },
  {
    id: 'wed-3',
    title: 'White Wedding Reception Glamour',
    category: 'Wedding',
    slotFilename: 'wedding/wedding-3.jpg',
    imageUrl: getLocalSlotUrl('wedding/wedding-3.jpg'),
    placeholderAlt: 'Reception entrance and ballroom celebration',
    aspectRatio: 'landscape',
    featured: false,
    year: '2025',
    clientOrLocation: 'Eko Hotel Ballroom, Victoria Island',
    caption: 'High-energy celebration, dazzling lights, and emotional first-dance storytelling.',
  },
  {
    id: 'wed-4',
    title: 'Bridal Radiance & Veil Silhouette',
    category: 'Wedding',
    slotFilename: 'wedding/wedding-4.jpg',
    imageUrl: getLocalSlotUrl('wedding/wedding-4.jpg'),
    placeholderAlt: 'Solo bridal portrait with dramatic veil',
    aspectRatio: 'portrait',
    featured: false,
    year: '2025',
    clientOrLocation: 'Lekki Studio Suite',
    caption: 'Sculptural lighting highlighting delicate bridal embroidery and quiet reflection.',
  },

  // 2. Birthday
  {
    id: 'bday-1',
    title: 'The Milestone Jubilee Portrait',
    category: 'Birthday',
    slotFilename: 'birthday/birthday-1.jpg',
    imageUrl: getLocalSlotUrl('birthday/birthday-1.jpg'),
    placeholderAlt: 'Celebratory milestone birthday portrait',
    aspectRatio: 'portrait',
    featured: true,
    year: '2025',
    clientOrLocation: 'Ibeto Main Studio, Lekki',
    caption: 'Bespoke celebratory glamour in textured velvet and gold accents for a landmark jubilee.',
  },
  {
    id: 'bday-2',
    title: 'Midnight Glamour Birthday Soirée',
    category: 'Birthday',
    slotFilename: 'birthday/birthday-2.jpg',
    imageUrl: getLocalSlotUrl('birthday/birthday-2.jpg'),
    placeholderAlt: 'Birthday evening party and champagne toast',
    aspectRatio: 'landscape',
    featured: true,
    year: '2025',
    clientOrLocation: 'Victoria Island Rooftop Lounge',
    caption: 'Unscripted laughter, champagne celebrations, and vibrant nightlife documentary coverage.',
  },
  {
    id: 'bday-3',
    title: 'Modern Couture Birthday Editorial',
    category: 'Birthday',
    slotFilename: 'birthday/birthday-3.jpg',
    imageUrl: getLocalSlotUrl('birthday/birthday-3.jpg'),
    placeholderAlt: 'Couture birthday studio styling',
    aspectRatio: 'portrait',
    featured: false,
    year: '2025',
    clientOrLocation: 'Lekki Phase 1',
    caption: 'Personal brand celebration session blending high fashion and magnetic confidence.',
  },
  {
    id: 'bday-4',
    title: 'Joyful Cake Cutting & Family Cheers',
    category: 'Birthday',
    slotFilename: 'birthday/birthday-4.jpg',
    imageUrl: getLocalSlotUrl('birthday/birthday-4.jpg'),
    placeholderAlt: 'Intimate birthday gathering with loved ones',
    aspectRatio: 'square',
    featured: false,
    year: '2025',
    clientOrLocation: 'Private Residence, Ikoyi',
    caption: 'Tender candid moments shared with family and close friends in an intimate setting.',
  },

  // 3. Corporate
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
    caption: 'Executive leadership branding session in Victoria Island business district.',
  },
  {
    id: 'corp-2',
    title: 'Corporate Leadership & Enterprise',
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
    caption: 'Clean, authoritative corporate branding for founders, managing directors, and partners.',
  },
  {
    id: 'corp-4',
    title: 'Summit & Corporate Governance',
    category: 'Corporate',
    slotFilename: 'corporate/corporate-4.jpg',
    imageUrl: getLocalSlotUrl('corporate/corporate-4.jpg'),
    placeholderAlt: 'Corporate conference key visual',
    aspectRatio: 'landscape',
    featured: false,
    year: '2025',
    clientOrLocation: 'Eko Convention Centre',
    caption: 'Conference keynotes, annual general meetings, and investor relations visual media.',
  },

  // 4. Maternity & Newborn
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
    caption: 'A serene celebration of motherhood in flowing drapery and sculptural chiaroscuro lighting.',
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
    caption: 'Delicate, safety-first newborn session preserving tender innocence and serene tranquility.',
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
    caption: 'Intimate fine art silhouette highlighting maternal beauty, balance, and quiet majesty.',
  },
  {
    id: 'mat-4',
    title: 'Loving Parental Bond',
    category: 'Maternity & Newborn',
    slotFilename: 'maternity-newborn/maternity-newborn-4.jpg',
    imageUrl: getLocalSlotUrl('maternity-newborn/maternity-newborn-4.jpg'),
    placeholderAlt: 'Parents cradling newborn child',
    aspectRatio: 'square',
    featured: false,
    year: '2025',
    clientOrLocation: 'Ibeto Studio Sanctuary',
    caption: 'Warm embrace and generational protection honoring newborn beginnings.',
  },

  // 5. Modeling
  {
    id: 'mod-1',
    title: 'High-Fashion Editorial Lookbook',
    category: 'Modeling',
    slotFilename: 'modeling/modeling-1.jpg',
    imageUrl: getLocalSlotUrl('modeling/modeling-1.jpg'),
    placeholderAlt: 'High-fashion editorial model lookbook',
    aspectRatio: 'portrait',
    featured: true,
    year: '2025',
    clientOrLocation: 'Lagos Fashion Week Showcase',
    caption: 'Striking avant-garde styling, dynamic angles, and high-contrast editorial photography.',
  },
  {
    id: 'mod-2',
    title: 'Sculpted Silhouette & Silk Drapery',
    category: 'Modeling',
    slotFilename: 'modeling/modeling-2.jpg',
    imageUrl: getLocalSlotUrl('modeling/modeling-2.jpg'),
    placeholderAlt: 'Commercial fashion model pose',
    aspectRatio: 'portrait',
    featured: true,
    year: '2025',
    clientOrLocation: 'Ibeto Studio, Lekki',
    caption: 'Artistic direction emphasizing posture, fluid garment motion, and athletic grace.',
  },
  {
    id: 'mod-3',
    title: 'Contemporary Urban Streetwear',
    category: 'Modeling',
    slotFilename: 'modeling/modeling-3.jpg',
    imageUrl: getLocalSlotUrl('modeling/modeling-3.jpg'),
    placeholderAlt: 'Urban fashion campaign on location',
    aspectRatio: 'landscape',
    featured: false,
    year: '2025',
    clientOrLocation: 'Marina, Lagos Island',
    caption: 'Contemporary African streetwear aesthetic framed against historic Lagos architecture.',
  },
  {
    id: 'mod-4',
    title: 'Model Agency Portfolio Card',
    category: 'Modeling',
    slotFilename: 'modeling/modeling-4.jpg',
    imageUrl: getLocalSlotUrl('modeling/modeling-4.jpg'),
    placeholderAlt: 'Clean beauty and agency composite card',
    aspectRatio: 'square',
    featured: false,
    year: '2025',
    clientOrLocation: 'Studio 4B, Lekki',
    caption: 'Clean, unretouched polaroids and high-definition commercial comp cards for modeling agencies.',
  },

  // 6. Headshots & Portraits
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
    featured: false,
    year: '2025',
    clientOrLocation: 'Lagos Creative Hub',
    caption: 'Character-driven actor portfolio headshot for international film casting and talent agents.',
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
    caption: 'Precision beauty dish lighting bringing out skin tone richness, tone gradations, and subtle nuance.',
  },
  {
    id: 'head-4',
    title: 'Keynote Speaker & Author Profile',
    category: 'Headshots & Portraits',
    slotFilename: 'headshots-portraits/headshots-portraits-4.jpg',
    imageUrl: getLocalSlotUrl('headshots-portraits/headshots-portraits-4.jpg'),
    placeholderAlt: 'Thought leader and speaker headshot',
    aspectRatio: 'portrait',
    featured: false,
    year: '2025',
    clientOrLocation: 'Victoria Island Studio',
    caption: 'Polished personal branding for published authors, public figures, and thought leaders.',
  },
];

/**
 * The 6 SERVICE PACKAGES
 * Cover images correspond to each category's first slot in /src/assets/images/
 */
export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'service-wedding',
    category: 'Wedding',
    slotFilename: 'wedding/wedding-1.jpg',
    coverImage: getLocalSlotUrl('wedding/wedding-1.jpg'),
    shortDesc: 'Regal traditional engagements and luxury white wedding celebrations captured with cinematic reverence.',
    whatsIncluded: [
      'Pre-wedding creative consultation & timeline curation',
      'Full-day multi-camera documentation from bridal preparations to midnight party',
      'High-speed wireless backup and calibrated lighting systems',
      'Artisan leather heirloom wedding photo book design',
    ],
    whoItsFor: 'Couples planning luxury traditional or destination weddings in Lagos, Abuja, and international venues.',
    estimatedDuration: 'Full Day / Multi-Day Packages',
    deliverables: '300 – 600+ Master Color-Graded High-Res Deliverables + Highlight Reel',
  },
  {
    id: 'service-birthday',
    category: 'Birthday',
    slotFilename: 'birthday/birthday-1.jpg',
    coverImage: getLocalSlotUrl('birthday/birthday-1.jpg'),
    shortDesc: 'Glamour studio portraits and evening party documentation for landmark birthday celebrations.',
    whatsIncluded: [
      'Studio creative concept direction & multiple wardrobe changes',
      'Optional on-location evening soirée & dinner party coverage',
      'Flattering signature lighting emphasizing personal style and celebration',
      'Express photo previews within 48 hours for social announcements',
    ],
    whoItsFor: 'Individuals celebrating milestone birthdays (30th, 40th, 50th, 60th+ jubilee) and exclusive dinner parties.',
    estimatedDuration: '2 Hours (Studio) or 5 Hours (Event)',
    deliverables: '20 – 35 Master Retouched Portraits or 150+ Event Story Photos',
  },
  {
    id: 'service-corporate',
    category: 'Corporate',
    slotFilename: 'corporate/corporate-1.jpg',
    coverImage: getLocalSlotUrl('corporate/corporate-1.jpg'),
    shortDesc: 'Executive branding, annual reports, board members, and team commercial profiles.',
    whatsIncluded: [
      'On-location mobile studio or Lekki studio setup',
      'High-end skin frequency-separation retouching',
      'Individual executive portraits & group team compositions',
      'Full commercial web, annual report & print usage licensing',
    ],
    whoItsFor: 'Fintech companies, legal firms, C-suite executives, directors, and corporate communications teams.',
    estimatedDuration: '2 – 4 Hours',
    deliverables: '15 – 40 Retouched High-Res Images + Web-Optimized Assets',
  },
  {
    id: 'service-maternity',
    category: 'Maternity & Newborn',
    slotFilename: 'maternity-newborn/maternity-newborn-1.jpg',
    coverImage: getLocalSlotUrl('maternity-newborn/maternity-newborn-1.jpg'),
    shortDesc: 'Gentle, sculptural, and poetic sessions celebrating the sacred journey into motherhood and family life.',
    whatsIncluded: [
      'Access to studio maternity draping gowns and luxury wraps',
      'Partner and sibling inclusion in intimate family scenes',
      'Strict hygiene and climate-controlled studio comfort for newborn safety',
      'Safe, guided posing emphasizing softness and elegance',
    ],
    whoItsFor: 'Expecting mothers between 28–34 weeks and newborns within their first 14 days of arrival.',
    estimatedDuration: '2 – 3 Hours (unrushed for newborn comfort)',
    deliverables: '15 Hand-Finished Fine Art Digital Masterpieces',
  },
  {
    id: 'service-modeling',
    category: 'Modeling',
    slotFilename: 'modeling/modeling-1.jpg',
    coverImage: getLocalSlotUrl('modeling/modeling-1.jpg'),
    shortDesc: 'Editorial fashion campaigns, agency comp cards, lookbooks, and high-impact talent portfolios.',
    whatsIncluded: [
      'Creative moodboard direction, lighting design, and pose coaching',
      'Multiple fashion looks & backdrop variations (Obsidian, Charcoal, Warm Ochre)',
      'High-fashion color grading tailored to international editorial standards',
      'Agency-ready composite card formatting and digital lookbook files',
    ],
    whoItsFor: 'Professional models, fashion agencies, fashion designers, stylists, and emerging runway talent.',
    estimatedDuration: '2 – 3 Hours',
    deliverables: '15 – 25 Magazine-Grade Retouched Editorial Images',
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
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    clientName: 'Folake & Damilola Alabi',
    roleOrCompany: 'Wedding Nuptials at Banana Island',
    shootType: 'Wedding',
    location: 'Banana Island, Lagos',
    quote: 'The unscripted joy and glamour Ibeto captured during our wedding celebration was breathtaking. He blended into the background yet managed to catch every golden glance, laugh, and emotional toast. Highly recommend him without reservation.',
    year: '2025',
  },
  {
    id: 'test-2',
    clientName: 'Onyinyechi Adeleke',
    roleOrCompany: 'Fashion Model & Creative Director',
    shootType: 'Modeling',
    location: 'Victoria Island, Lagos',
    quote: 'Working with Ibeto was an otherworldly experience. His understanding of rich African skin tones, dramatic chiaroscuro lighting, and effortless posing resulted in the best editorial shoot of my modeling portfolio. He elevates fashion into fine art.',
    year: '2025',
  },
  {
    id: 'test-3',
    clientName: 'Tunde Babatunde',
    roleOrCompany: 'Partner & Co-Founder, Crestline Capital',
    shootType: 'Corporate',
    location: 'Ikoyi, Lagos',
    quote: 'Ibeto Media delivered executive headshots and corporate branding for our entire board of 14 partners. The studio setup in Lekki was seamless, fast, and remarkably professional. The photos commanded immediate respect across our investor decks.',
    year: '2025',
  },
  {
    id: 'test-4',
    clientName: 'Dr. Halima Bello',
    roleOrCompany: '40th Milestone Birthday Jubilee',
    shootType: 'Birthday',
    location: 'Lekki Phase 1',
    quote: 'For my 40th birthday, I wanted portraits that felt majestic and timeless. Ibeto captured my essence with such warmth and regal grace. My family and friends were blown away by the velvet print enlargements.',
    year: '2025',
  },
  {
    id: 'test-5',
    clientName: 'Bolanle & Femi Peters',
    roleOrCompany: 'Maternity & Newborn Session',
    shootType: 'Maternity & Newborn',
    location: 'Lekki Studio Sanctuary',
    quote: 'I felt like a goddess during my 32-week shoot. Ibeto made me feel comfortable, protected, and radiant. The newborn photos taken two weeks later are something our daughter will treasure for decades to come.',
    year: '2025',
  },
  {
    id: 'test-6',
    clientName: 'Emeka Nwosu',
    roleOrCompany: 'Author & Keynote Speaker',
    shootType: 'Headshots & Portraits',
    location: 'Lagos Creative Hub',
    quote: 'Ibeto knows how to bring out true presence and confidence. The headshots we created became the front cover of my new book and the keynote banner for international conferences.',
    year: '2024',
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
