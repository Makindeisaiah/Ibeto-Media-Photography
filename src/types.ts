export type ServiceCategory =
  | 'Corporate'
  | 'Events & Parties'
  | 'Family & Group'
  | 'Headshots & Portraits'
  | 'Individual'
  | 'Maternity & Newborn'
  | 'Product'
  | 'Property';

export type AspectRatioType = 'portrait' | 'landscape' | 'square';

export interface GalleryImage {
  id: string;
  title: string;
  category: ServiceCategory;
  imageUrl: string;
  slotFilename: string;
  placeholderAlt: string;
  aspectRatio: AspectRatioType;
  featured?: boolean;
  year?: string;
  clientOrLocation?: string;
  caption?: string;
}

export interface ServiceItem {
  id: string;
  category: ServiceCategory;
  shortDesc: string;
  whatsIncluded: string[];
  whoItsFor: string;
  estimatedDuration: string;
  deliverables: string;
  accentNote?: string;
  coverImage: string;
  slotFilename: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  clientName: string;
  roleOrCompany: string;
  shootType: ServiceCategory;
  location: string;
  year: string;
}

export interface BehindTheScenesItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  slotFilename: string;
}

export type PageView = 'home' | 'gallery' | 'services' | 'about' | 'testimonials' | 'contact';

export interface BookingFormData {
  fullName: string;
  email: string;
  phone: string;
  shootType: ServiceCategory | '';
  preferredDate: string;
  message: string;
}
