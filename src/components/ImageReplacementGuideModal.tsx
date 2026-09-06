import React from 'react';
import { X, Copy, Check, FolderCheck, Image as ImageIcon, Folder } from 'lucide-react';
import { GALLERY_IMAGES, SERVICE_CATEGORIES } from '../data/photographyData';

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

  const folderStructureGuide = `src/assets/images/
├── wedding/
│   ├── wedding-1.jpg
│   ├── wedding-2.jpg
│   ├── wedding-3.jpg
│   └── wedding-4.jpg
├── birthday/
│   ├── birthday-1.jpg
│   ├── birthday-2.jpg
│   ├── birthday-3.jpg
│   └── birthday-4.jpg
├── corporate/
│   ├── corporate-1.jpg
│   ├── corporate-2.jpg
│   ├── corporate-3.jpg
│   └── corporate-4.jpg
├── maternity-newborn/
│   ├── maternity-newborn-1.jpg
│   ├── maternity-newborn-2.jpg
│   ├── maternity-newborn-3.jpg
│   └── maternity-newborn-4.jpg
├── modeling/
│   ├── modeling-1.jpg
│   ├── modeling-2.jpg
│   ├── modeling-3.jpg
│   └── modeling-4.jpg
├── headshots-portraits/
│   ├── headshots-portraits-1.jpg
│   ├── headshots-portraits-2.jpg
│   ├── headshots-portraits-3.jpg
│   └── headshots-portraits-4.jpg
├── hero/
│   └── hero-main.jpg
├── about/
│   └── photographer-bio.jpg
└── bts/
    ├── bts-studio.jpg
    ├── bts-tethering.jpg
    └── bts-location.jpg`;

  const copyStructure = () => {
    navigator.clipboard.writeText(folderStructureGuide);
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
        className="relative max-w-3xl w-full bg-[#101116] border border-zinc-700/80 rounded-sm p-6 sm:p-8 text-zinc-300 max-h-[90vh] overflow-y-auto shadow-2xl"
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
          <span>Photographer Photo Slot Directory</span>
        </div>

        <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal mb-3">
          Drag & Drop Photo Slots
        </h3>

        <p className="text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed mb-6 font-light">
          All image slots are created inside <code className="text-[#c5a86d] bg-zinc-900 px-1.5 py-0.5 rounded-xs">/src/assets/images/[category]/</code>. Simply drag and drop your photos (<code className="text-zinc-300">.jpg</code> or <code className="text-zinc-300">.png</code>) directly into these exact folders with matching filenames — no code modifications required.
        </p>

        {/* Directory Map */}
        <div className="relative rounded-sm bg-black/90 border border-zinc-800 p-4 mb-6">
          <div className="flex items-center justify-between text-[11px] text-zinc-400 font-mono mb-2 pb-2 border-b border-zinc-800">
            <span className="flex items-center gap-1.5 text-zinc-300">
              <Folder className="w-3.5 h-3.5 text-[#c5a86d]" /> Exact Folder Hierarchy
            </span>
            <button
              onClick={copyStructure}
              className="inline-flex items-center gap-1 text-[#c5a86d] hover:text-white transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Structure'}</span>
            </button>
          </div>
          <pre className="text-xs font-mono text-zinc-300 overflow-x-auto whitespace-pre leading-relaxed">
            {folderStructureGuide}
          </pre>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-zinc-800">
          <span className="text-xs text-zinc-500 font-sans">
            Ready to accept .jpg and .png photos directly.
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
