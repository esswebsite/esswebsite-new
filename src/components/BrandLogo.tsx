import React from 'react';
import essLogoTransparent from '../assets/images/ess-logo-transparent.png';

interface BrandLogoProps {
  className?: string;
  variant?: 'full' | 'compact' | 'symbol-only' | 'ess-only';
  inverted?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  variant = 'full',
  inverted = false,
  size = 'lg',
}) => {
  // If inverted (used on dark backgrounds like footer), display within a clean white badge so transparent logo is 100% crisp & readable
  if (inverted) {
    return (
      <div
        className={`inline-flex items-center bg-white p-2 sm:px-3.5 sm:py-2.5 rounded-xl shadow-md border border-slate-200/60 hover:opacity-95 transition-all ${className}`}
      >
        <img
          src={essLogoTransparent}
          alt="Emirates Secretarial Services & Karama Business Center"
          className="h-9 sm:h-11 md:h-12 w-auto object-contain block max-w-full"
          loading="eager"
        />
      </div>
    );
  }

  // Symbol only variant
  if (variant === 'symbol-only') {
    return (
      <div className={`inline-flex items-center ${className}`}>
        <div className="w-11 h-11 sm:w-12 sm:h-12 overflow-hidden relative rounded-xl flex items-center justify-center bg-white shadow-xs border border-slate-200/60 p-1">
          <img
            src={essLogoTransparent}
            alt="ESS & KBC Emblem"
            className="h-10 w-auto object-contain"
            loading="eager"
          />
        </div>
      </div>
    );
  }

  // Compact variant (used on smaller screens or mobile headers to prevent overlap)
  if (variant === 'compact') {
    return (
      <div className={`inline-flex items-center ${className}`}>
        <img
          src={essLogoTransparent}
          alt="Emirates Secretarial Services & Karama Business Center"
          className="h-8 xs:h-9 sm:h-10 md:h-11 w-auto max-w-[135px] xs:max-w-[155px] sm:max-w-[190px] md:max-w-[230px] object-contain block transition-transform duration-200 hover:scale-[1.02]"
          loading="eager"
        />
      </div>
    );
  }

  // Full Brand Logo (Preserved official ess-logo-transparent as requested)
  return (
    <div className={`inline-flex items-center ${className}`}>
      <img
        src={essLogoTransparent}
        alt="Emirates Secretarial Services · Karama Business Center"
        className="h-10 sm:h-12 md:h-13 lg:h-14 w-auto max-h-16 object-contain block transition-transform duration-200 hover:scale-[1.02]"
        loading="eager"
      />
    </div>
  );
};
