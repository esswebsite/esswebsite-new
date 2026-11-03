import React from 'react';
import { Instagram, Facebook, Linkedin, ExternalLink } from 'lucide-react';
import { OFFICIAL_SOCIAL_LINKS } from '../data/socialAndMapLinks';

export interface SocialLinksProps {
  className?: string;
  variant?: 'badges' | 'icons' | 'cards';
  showLabels?: boolean;
}

export const TikTokIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.12V9.42a6.33 6.33 0 0 0-.86-.06 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V9.05a8.27 8.27 0 0 0 4.77 1.48V7.08a4.86 4.86 0 0 1-1-.39z" />
  </svg>
);

export const SOCIAL_ITEMS = [
  {
    name: 'Instagram',
    handle: '@karamacenter.ae',
    url: OFFICIAL_SOCIAL_LINKS.instagram,
    color: 'hover:text-pink-500 hover:border-pink-500/40 hover:bg-pink-50/10',
    icon: Instagram,
  },
  {
    name: 'Facebook',
    handle: 'karamabusiness.ae',
    url: OFFICIAL_SOCIAL_LINKS.facebook,
    color: 'hover:text-blue-500 hover:border-blue-500/40 hover:bg-blue-50/10',
    icon: Facebook,
  },
  {
    name: 'LinkedIn',
    handle: 'karamacenter-ae',
    url: OFFICIAL_SOCIAL_LINKS.linkedin,
    color: 'hover:text-sky-500 hover:border-sky-500/40 hover:bg-sky-50/10',
    icon: Linkedin,
  },
  {
    name: 'TikTok',
    handle: '@karamabusinesscenter',
    url: OFFICIAL_SOCIAL_LINKS.tiktok,
    color: 'hover:text-neutral-100 hover:border-neutral-400 hover:bg-neutral-800/40',
    icon: TikTokIcon,
  },
];

export const SocialLinks: React.FC<SocialLinksProps> = ({
  className = '',
  variant = 'badges',
  showLabels = true,
}) => {
  if (variant === 'icons') {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        {SOCIAL_ITEMS.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Official ${item.name} Profile`}
              className="w-8 h-8 rounded-lg bg-slate-800/90 text-slate-300 hover:text-white hover:bg-[#128B94] border border-slate-700/80 flex items-center justify-center transition-all duration-200"
            >
              <Icon className="w-4 h-4" />
            </a>
          );
        })}
      </div>
    );
  }

  if (variant === 'cards') {
    return (
      <div className={`grid grid-cols-2 gap-2.5 ${className}`}>
        {SOCIAL_ITEMS.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 transition-all flex items-center justify-between group shadow-2xs"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-7 h-7 rounded-md bg-teal-50 text-[#128B94] group-hover:bg-[#128B94] group-hover:text-white flex items-center justify-center transition-colors shrink-0">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold text-slate-900 truncate">{item.name}</div>
                  <div className="text-[11px] text-slate-500 truncate" dir="ltr">{item.handle}</div>
                </div>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#128B94] shrink-0" />
            </a>
          );
        })}
      </div>
    );
  }

  // Default: badges
  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`}>
      {SOCIAL_ITEMS.map((item) => {
        const Icon = item.icon;
        return (
          <a
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-semibold text-slate-700 hover:text-[#128B94] hover:border-[#128B94]/40 bg-white hover:bg-teal-50/50 transition-all shadow-2xs"
          >
            <Icon className="w-3.5 h-3.5 text-[#128B94]" />
            {showLabels && <span>{item.name}</span>}
          </a>
        );
      })}
    </div>
  );
};
