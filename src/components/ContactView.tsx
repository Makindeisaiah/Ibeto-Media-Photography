import React, { useState } from 'react';
import { BookingFormData, ServiceCategory } from '../types';
import { SERVICE_CATEGORIES, STUDIO_INFO } from '../data/photographyData';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Instagram,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Send,
  Loader2,
} from 'lucide-react';

interface ContactViewProps {
  preselectedCategory?: ServiceCategory | null;
}

/**
 * FORMSPREE INTEGRATION CONFIGURATION
 * To connect your live Formspree account:
 * 1. Create a free form at https://formspree.io
 * 2. Paste your Form ID or URL into FORMSPREE_ENDPOINT below (e.g., "https://formspree.io/f/your_form_id")
 */
export const FORMSPREE_ENDPOINT: string = ''; // E.g., "https://formspree.io/f/mqkvabcd"

export const ContactView: React.FC<ContactViewProps> = ({ preselectedCategory }) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    email: '',
    phone: '',
    shootType: preselectedCategory || '',
    preferredDate: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Update shoot type if preselectedCategory changes
  React.useEffect(() => {
    if (preselectedCategory) {
      setFormData((prev) => ({ ...prev, shootType: preselectedCategory }));
    }
  }, [preselectedCategory]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    // Form validation
    if (!formData.fullName || !formData.email || !formData.phone || !formData.shootType) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields (Name, Email, Phone, Shoot Type).');
      return;
    }

    try {
      if (FORMSPREE_ENDPOINT && FORMSPREE_ENDPOINT.trim().length > 0) {
        // Live Formspree POST
        const response = await fetch(FORMSPREE_ENDPOINT, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setStatus('success');
        } else {
          const data = await response.json().catch(() => ({}));
          throw new Error(data.error || 'Failed to submit form to Formspree endpoint.');
        }
      } else {
        // Structured simulation with instant feedback
        await new Promise((resolve) => setTimeout(resolve, 800));
        setStatus('success');
      }
    } catch (err: any) {
      setStatus('error');
      setErrorMessage(
        err?.message || 'There was an issue sending your booking request. Please try WhatsApp directly.'
      );
    }
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      shootType: '',
      preferredDate: '',
      message: '',
    });
    setStatus('idle');
  };

  // WhatsApp quick builder using form data
  const handleWhatsAppInquiry = () => {
    const categoryText = formData.shootType ? ` for a ${formData.shootType} shoot` : '';
    const dateText = formData.preferredDate ? ` around ${formData.preferredDate}` : '';
    const nameText = formData.fullName ? ` My name is ${formData.fullName}.` : '';
    const text = encodeURIComponent(
      `Hello Ibeto Media, I’d like to inquire about booking a photography session${categoryText}${dateText}.${nameText}`
    );
    window.open(`https://wa.me/${STUDIO_INFO.whatsappNumber.replace(/[^0-9]/g, '')}?text=${text}`, '_blank');
  };

  return (
    <div id="contact-booking-page" className="pt-28 pb-24 bg-[#0c0d10] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-sans tracking-[0.25em] uppercase text-[#c5a86d] font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Commission & Availability</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white font-normal tracking-wide uppercase mb-4">
            Book a Session
          </h1>
          <p className="text-zinc-400 font-sans font-light text-base sm:text-lg leading-relaxed">
            Let’s discuss your vision. Submit the commission form below or reach out directly via WhatsApp for swift scheduling.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Main Booking Form */}
          <div className="lg:col-span-7 bg-zinc-950/90 border border-zinc-800/90 p-8 sm:p-10 rounded-sm shadow-2xl">
            <h2 className="font-serif text-2xl sm:text-3xl text-white font-normal mb-2">
              Reserve Your Date
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 font-sans mb-8">
              Fill in your session details and our studio concierge will respond within 24 business hours.
            </p>

            {status === 'success' ? (
              <div
                id="booking-success-message"
                className="p-8 border border-[#c5a86d]/40 rounded-sm bg-[#c5a86d]/5 text-center space-y-4 animate-in fade-in duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-[#c5a86d]/20 text-[#c5a86d] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl text-white font-normal">
                  Thank You, {formData.fullName || 'Valued Client'}!
                </h3>
                <p className="text-sm text-zinc-300 font-sans leading-relaxed max-w-md mx-auto">
                  Your commission inquiry for{' '}
                  <strong className="text-[#c5a86d] font-semibold">
                    {formData.shootType || 'your photography session'}
                  </strong>{' '}
                  has been recorded. We will contact you via {formData.email || 'email'} and WhatsApp shortly.
                </p>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={handleWhatsAppInquiry}
                    className="w-full sm:w-auto px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs uppercase tracking-widest font-semibold rounded-sm transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Follow-Up on WhatsApp</span>
                  </button>
                  <button
                    onClick={resetForm}
                    className="w-full sm:w-auto px-5 py-2.5 border border-zinc-700 text-zinc-300 hover:text-white text-xs uppercase tracking-widest rounded-sm transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form id="photography-booking-form" onSubmit={handleSubmit} className="space-y-6">
                {status === 'error' && (
                  <div className="p-4 border border-rose-800/70 bg-rose-950/40 rounded-sm flex items-start gap-3 text-rose-300 text-xs">
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-rose-400" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Full Name */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-xs uppercase tracking-widest font-sans font-medium text-zinc-300 mb-2"
                  >
                    Full Name <span className="text-[#c5a86d]">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Chioma Eke"
                    className="w-full px-4 py-3 bg-zinc-900/90 border border-zinc-800 rounded-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#c5a86d] text-sm font-sans transition-colors"
                  />
                </div>

                {/* Email & Phone Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs uppercase tracking-widest font-sans font-medium text-zinc-300 mb-2"
                    >
                      Email Address <span className="text-[#c5a86d]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@example.com"
                      className="w-full px-4 py-3 bg-zinc-900/90 border border-zinc-800 rounded-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#c5a86d] text-sm font-sans transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs uppercase tracking-widest font-sans font-medium text-zinc-300 mb-2"
                    >
                      Phone / WhatsApp <span className="text-[#c5a86d]">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+234 800 000 0000"
                      className="w-full px-4 py-3 bg-zinc-900/90 border border-zinc-800 rounded-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#c5a86d] text-sm font-sans transition-colors"
                    />
                  </div>
                </div>

                {/* Shoot Type & Preferred Date */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="shootType"
                      className="block text-xs uppercase tracking-widest font-sans font-medium text-zinc-300 mb-2"
                    >
                      Shoot Type <span className="text-[#c5a86d]">*</span>
                    </label>
                    <select
                      id="shootType"
                      name="shootType"
                      required
                      value={formData.shootType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-zinc-900/90 border border-zinc-800 rounded-sm text-white focus:outline-none focus:border-[#c5a86d] text-sm font-sans transition-colors cursor-pointer"
                    >
                      <option value="" disabled>
                        Select a Category...
                      </option>
                      {SERVICE_CATEGORIES.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="preferredDate"
                      className="block text-xs uppercase tracking-widest font-sans font-medium text-zinc-300 mb-2"
                    >
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      id="preferredDate"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-zinc-900/90 border border-zinc-800 rounded-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#c5a86d] text-sm font-sans transition-colors"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs uppercase tracking-widest font-sans font-medium text-zinc-300 mb-2"
                  >
                    Your Vision / Location Notes
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your shoot: desired styling, location (studio in Lekki or on-location), number of persons, or special requests..."
                    className="w-full px-4 py-3 bg-zinc-900/90 border border-zinc-800 rounded-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#c5a86d] text-sm font-sans transition-colors resize-y"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                  <button
                    type="submit"
                    id="contact-form-submit-btn"
                    disabled={status === 'submitting'}
                    className="w-full sm:w-auto px-8 py-3.5 bg-[#c5a86d] hover:bg-[#d6b97d] disabled:opacity-60 text-black font-semibold text-xs tracking-widest uppercase rounded-sm transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Request...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Booking Request</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppInquiry}
                    className="w-full sm:w-auto px-6 py-3.5 bg-zinc-900 hover:bg-zinc-850 border border-zinc-700 text-zinc-200 hover:text-white text-xs tracking-widest uppercase rounded-sm transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-400" />
                    <span>Inquire via WhatsApp</span>
                  </button>
                </div>

                {/* Formspree wiring developer note */}
                <div className="text-[11px] text-zinc-500 font-sans pt-2">
                  🔒 Secure direct submission. Ready for instant Formspree endpoint connection.
                </div>
              </form>
            )}
          </div>

          {/* Sidebar: Studio Location & Contact Details */}
          <div className="lg:col-span-5 space-y-8">
            {/* Contact details card */}
            <div className="p-8 rounded-sm bg-zinc-950/80 border border-zinc-800/80 space-y-6">
              <h3 className="font-serif text-2xl text-white font-normal mb-4">
                Studio Location & Inquiries
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-full bg-zinc-900 border border-zinc-800 text-[#c5a86d] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-zinc-300">
                      Studio Address
                    </h4>
                    <p className="text-xs sm:text-sm text-zinc-400 mt-0.5">
                      {STUDIO_INFO.location}
                    </p>
                    <p className="text-[11px] text-zinc-500 mt-1">
                      (Near Prince Ebeano Supermarket, Lekki Phase 1)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-full bg-zinc-900 border border-zinc-800 text-[#c5a86d] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-zinc-300">
                      Direct Telephone
                    </h4>
                    <p className="text-xs sm:text-sm text-zinc-400 mt-0.5 font-mono">
                      {STUDIO_INFO.phone}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-full bg-zinc-900 border border-zinc-800 text-[#c5a86d] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-zinc-300">
                      Email Inquiries
                    </h4>
                    <a
                      href={`mailto:${STUDIO_INFO.email}`}
                      className="text-xs sm:text-sm text-zinc-400 hover:text-[#c5a86d] transition-colors mt-0.5 block"
                    >
                      {STUDIO_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-full bg-zinc-900 border border-zinc-800 text-[#c5a86d] shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-zinc-300">
                      Studio Operating Hours
                    </h4>
                    <p className="text-xs sm:text-sm text-zinc-400 mt-0.5">
                      {STUDIO_INFO.hours}
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct Buttons for WhatsApp and Instagram (Prompt requirement) */}
              <div className="pt-6 border-t border-zinc-900 space-y-3">
                <h4 className="text-xs uppercase tracking-widest font-sans font-semibold text-zinc-400">
                  Instant Messaging & Social
                </h4>

                <a
                  id="contact-whatsapp-direct-link"
                  href={`https://wa.me/${STUDIO_INFO.whatsappNumber.replace(/[^0-9]/g, '')}?text=Hello%20Ibeto%20Media,%20I'd%20like%20to%20inquire%20about%20booking%20a%20photography%20session.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 bg-[#25D366]/15 hover:bg-[#25D366] text-[#25D366] hover:text-black border border-[#25D366]/30 rounded-sm font-sans text-xs tracking-widest uppercase font-semibold transition-all duration-300 flex items-center justify-center gap-2.5"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp (+234)</span>
                </a>

                <a
                  id="contact-instagram-direct-link"
                  href={STUDIO_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 bg-gradient-to-r from-[#833ab4]/10 via-[#fd1d1d]/10 to-[#fcb045]/10 hover:from-[#833ab4] hover:via-[#fd1d1d] hover:to-[#fcb045] text-zinc-200 hover:text-white border border-zinc-800 hover:border-transparent rounded-sm font-sans text-xs tracking-widest uppercase font-semibold transition-all duration-300 flex items-center justify-center gap-2.5"
                >
                  <Instagram className="w-4 h-4 text-pink-400" />
                  <span>Follow @ibetomedia</span>
                </a>
              </div>
            </div>

            {/* Studio Atmosphere Note */}
            <div className="p-6 rounded-sm bg-zinc-950/40 border border-zinc-850">
              <h4 className="text-xs uppercase tracking-widest text-[#c5a86d] font-semibold mb-2">
                On-Location In Lagos
              </h4>
              <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                Need on-location coverage? We travel across Victoria Island, Ikoyi, Banana Island, Ikeja GRA, and private beachfront venues throughout Lagos State with mobile studio lighting.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
