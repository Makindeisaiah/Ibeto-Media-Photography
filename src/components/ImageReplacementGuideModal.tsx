import React from 'react';
import { X, Copy, Check, FolderCheck, Image as ImageIcon } from 'lucide-react';
import { GALLERY_IMAGES } from '../data/photographyData';

interface ImageReplacementGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ImageReplacementGuideModal: React.FC<ImageReplacementGuideModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [copied, setCopied] = React.useState(false);

  if (!isOpen) return null;

  const exampleSnippet = `// In /src/data/photographyData.ts
export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 'corp-1',
    title: 'Executive Portrait',
    category: 'Corporate',
    // Option A: Local image in /public/images/
    imageUrl: '/images/my-corporate-portrait.jpg',
    // Option B: Hosted URL (Cloudinary, AWS S3, etc.)
    // imageUrl: 'https://my-domain.com/photos/portrait.jpg',
    aspectRatio: 'portrait', // 'portrait' | 'landscape' | 'square'
    featured: true,
  },
  ...
];`;

  const copyCode = () => {
    navigator.clipboard.writeText(exampleSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      id="image-guide-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        id="image-guide-modal-card"
        className="relative max-w-2xl w-full bg-[#101116] border border-zinc-700/80 rounded-sm p-6 sm:p-8 text-zinc-300 max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          id="image-guide-close-btn"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-white rounded-full bg-zinc-900 border border-zinc-800"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2.5 text-[#c5a86d] text-xs font-sans tracking-[0.2em] uppercase font-semibold mb-2">
          <FolderCheck className="w-4 h-4" />
          <span>Photographer Asset Guide</span>
        </div>

        <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal mb-3">
          How to Swap Placeholder Photos
        </h3>

        <p className="text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed mb-6 font-light">
          All images are organized in a clean TypeScript array in <code className="text-[#c5a86d] bg-zinc-900 px-1.5 py-0.5 rounded-xs">/src/data/photographyData.ts</code>. You can easily plug in your real photos either from local files or image links.
        </p>

        {/* Steps */}
        <div className="space-y-4 mb-6 text-xs sm:text-sm">
          <div className="p-3.5 rounded-sm bg-zinc-900/80 border border-zinc-800">
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <span className="w-4 h-4 rounded-full bg-[#c5a86d] text-black flex items-center justify-center text-[10px] font-bold">
                1
              </span>
              <span>Adding Local Image Files</span>
            </h4>
            <p className="text-zinc-400 text-xs font-light">
              Place your image files in the <code className="text-zinc-200">/public/images/</code> folder (e.g. <code className="text-zinc-200">/public/images/fashion-1.jpg</code>).
            </p>
          </div>

          <div className="p-3.5 rounded-sm bg-zinc-900/80 border border-zinc-800">
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <span className="w-4 h-4 rounded-full bg-[#c5a86d] text-black flex items-center justify-center text-[10px] font-bold">
                2
              </span>
              <span>Update Data File</span>
            </h4>
            <p className="text-zinc-400 text-xs font-light">
              Open <code className="text-zinc-200">/src/data/photographyData.ts</code> and update the <code className="text-zinc-200">imageUrl</code> field to <code className="text-[#c5a86d]">'/images/fashion-1.jpg'</code>.
            </p>
          </div>
        </div>

        {/* Code Snippet Box */}
        <div className="relative rounded-sm bg-black/80 border border-zinc-800 p-4 mb-6">
          <div className="flex items-center justify-between text-[11px] text-zinc-500 font-mono mb-2 pb-2 border-b border-zinc-850">
            <span>/src/data/photographyData.ts</span>
            <button
              onClick={copyCode}
              className="inline-flex items-center gap-1 text-[#c5a86d] hover:text-white transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
          <pre className="text-xs font-mono text-zinc-300 overflow-x-auto whitespace-pre leading-relaxed">
            {exampleSnippet}
          </pre>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-zinc-850">
          <span className="text-xs text-zinc-500 font-sans">
            Total {GALLERY_IMAGES.length} curated images mapped across all 8 disciplines.
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#c5a86d] text-black font-semibold text-xs tracking-widest uppercase rounded-sm hover:bg-[#d6b97d] transition-colors"
          >
            Got It
          </button>
        </div>
      </div>
    </div>
  );
};
