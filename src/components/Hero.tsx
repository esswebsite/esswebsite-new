import React, { useState } from 'react';
import { Search, ArrowRight, PhoneCall, Sparkles, FileCheck2, Building2, Award, Zap } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { mainBannerBgImg } from '../data/centerOriginalPhotos';

interface HeroProps {
  language: Language;
  onSearchSubmit: (query: string) => void;
  onOpenBooking: () => void;
  onOpenMobileBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  language,
  onSearchSubmit,
  onOpenBooking,
  onOpenMobileBooking,
}) => {
  const t = TRANSLATIONS[language];
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearchSubmit(searchQuery.trim());
    }
  };

  const quickPicks = [
    { labelEn: 'Golden Visa', labelAr: 'الإقامة الذهبية', query: 'Golden Visa' },
    { labelEn: 'Trade License Renewal', labelAr: 'تجديد الرخصة التجارية', query: 'Trade License' },
    { labelEn: 'Tasheel Work Permit', labelAr: 'تصريح عمل تسهيل', query: 'Work Permit' },
    { labelEn: 'VIP Medical Fitness', labelAr: 'فحص طبي VIP', query: 'Medical' },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-between bg-gradient-to-b from-[#EDF6F7] via-[#F8FBFC] to-white text-[#1E2528] overflow-hidden border-b border-slate-200/80 pt-20 sm:pt-24 lg:pt-28 xl:pt-30 pb-8 sm:pb-12"
    >
      {/* Fullscreen Architectural Background Image & Pattern Overlay */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        <img
          src={mainBannerBgImg}
          alt="Karama Business Center & Emirates Secretarial Services Authentic Grand Reception & Service Hall in Dubai"
          className="w-full h-full object-cover object-[center_35%]"
          loading="eager"
        />
        {/* Luminous & High-Contrast Scrim Overlays - Strengthened White Luminance */}
        {/* Solid white brightening wash */}
        <div className="absolute inset-0 bg-white/60" />
        {/* Soft horizontal gradient prioritizing text legibility with strong white coverage */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/98 via-white/92 to-white/80 rtl:from-white/80 rtl:via-white/92 rtl:to-white/98" />
        {/* Vertical white gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/70 to-white/98" />
        {/* Subtle Brand Mint Ambience */}
        <div className="absolute inset-0 bg-[#128B94]/[0.015]" />

        {/* Sophisticated UAE Geometric & Architectural Pattern */}
        {/* Layer 1: Seamless Islamic Geometric & Faceted Tessellation */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.065]"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
        >
          <defs>
            <pattern id="uae-geometric-grid" width="80" height="80" patternUnits="userSpaceOnUse">
              {/* 8-point geometric star and faceted polygon lattice */}
              <polygon
                points="40,8 48,24 64,24 51,34 56,50 40,40 24,50 29,34 16,24 32,24"
                fill="none"
                stroke="#128B94"
                strokeWidth="1"
              />
              <circle cx="40" cy="40" r="28" fill="none" stroke="#01403F" strokeWidth="0.75" strokeDasharray="3 3" />
              {/* Interlocking faceted diamonds */}
              <path d="M40 0 L80 40 L40 80 L0 40 Z" fill="none" stroke="#959E9C" strokeWidth="0.75" />
              <path d="M40 12 L68 40 L40 68 L12 40 Z" fill="none" stroke="#128B94" strokeWidth="0.5" />
              {/* Corner cross-connectors */}
              <line x1="0" y1="0" x2="80" y2="80" stroke="#959E9C" strokeWidth="0.5" strokeOpacity="0.4" />
              <line x1="80" y1="0" x2="0" y2="80" stroke="#959E9C" strokeWidth="0.5" strokeOpacity="0.4" />
              <circle cx="0" cy="0" r="4" fill="#128B94" fillOpacity="0.3" />
              <circle cx="80" cy="0" r="4" fill="#128B94" fillOpacity="0.3" />
              <circle cx="0" cy="80" r="4" fill="#128B94" fillOpacity="0.3" />
              <circle cx="80" cy="80" r="4" fill="#128B94" fillOpacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#uae-geometric-grid)" />
        </svg>

        {/* Layer 2: Subtle Architectural Wireframe / Dubai Horizon Motif */}
        <div className="absolute right-0 bottom-0 w-full lg:w-3/5 h-80 opacity-[0.06] pointer-events-none">
          <svg viewBox="0 0 1000 400" className="w-full h-full object-cover" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 380 L1000 380" stroke="#01403F" strokeWidth="1.5" />
            <path d="M680 380 L680 120 L700 80 L720 120 L720 380" stroke="#128B94" strokeWidth="1" />
            <path d="M700 80 L700 40 L701 40 L701 80" stroke="#128B94" strokeWidth="1.5" />
            <path d="M600 380 L600 180 L640 220 L640 380" stroke="#959E9C" strokeWidth="1" />
            <path d="M760 380 L760 200 L800 160 L840 200 L840 380" stroke="#01403F" strokeWidth="1" />
            <path d="M880 380 L880 240 L930 200 L930 380" stroke="#128B94" strokeWidth="1" />
            <path d="M520 380 L520 230 L560 210 L560 380" stroke="#959E9C" strokeWidth="1" />
            <path d="M200 380 C 400 300, 600 340, 1000 280" stroke="#128B94" strokeWidth="0.75" strokeDasharray="4 4" />
            <path d="M300 380 C 500 320, 700 360, 1000 310" stroke="#959E9C" strokeWidth="0.75" />
          </svg>
        </div>

        {/* Diagonal architectural hairline accents in brand colors */}
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-[#128B94]/20 via-[#128B94]/5 to-transparent" />
        <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-[#959E9C]/20 via-[#959E9C]/5 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-between">
        {/* Main Banner Grid: Left Side Copy + Right Side Pure Looping Video */}
        <div className="pt-2 sm:pt-3 lg:pt-4 my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-10 items-start">
          {/* Left Side: Copy, Search & CTAs */}
          <div className="lg:col-span-6 xl:col-span-6">
            {/* Subtle Eyebrow Kicker */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#128B94]/10 text-[#128B94] text-xs font-bold tracking-wide uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#128B94] animate-pulse" />
              <span>{t.heroBadge}</span>
              <span aria-hidden="true" className="text-teal-300">·</span>
              <span className="text-slate-600 font-semibold">{language === 'ar' ? 'دبي، الإمارات' : 'Dubai, UAE'}</span>
            </div>

            {/* Crisp, Bold Headline with Exact Line Breaks */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] xl:text-[3.35rem] font-extrabold tracking-tight text-[#1E2528] leading-[1.12] font-sans">
              {/* Line 1: Government Services */}
              <span className="block whitespace-nowrap">{t.heroTitlePart1}</span>
              {/* Line 2: & Business Solutions, */}
              <span className="block whitespace-nowrap">{t.heroTitlePart2}</span>
              {/* Line 3: All in One Place. */}
              <span className="text-[#128B94] block mt-1.5 whitespace-nowrap">
                {t.heroTitlePart3}
              </span>
            </h1>

            {/* Concise, Elegant Value Proposition */}
            <p className="mt-4 sm:mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl font-normal text-pretty">
              {t.heroDescription}
            </p>

            {/* Sleek, Floating Government Service Search Bar */}
            <form onSubmit={handleSearch} className="mt-6 sm:mt-7 max-w-xl">
              <div className="relative flex items-stretch rounded-2xl bg-white/95 backdrop-blur-md p-1.5 shadow-sm border border-slate-200/90 focus-within:border-[#128B94] focus-within:ring-2 focus-within:ring-[#128B94]/20 transition-all">
                <div className="relative flex-1 flex items-center pl-3.5 pr-2">
                  <Search className="w-5 h-5 text-slate-400 shrink-0" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={t.heroSearchPlaceholder}
                    className="w-full px-3 py-2 text-sm sm:text-base text-slate-900 placeholder-slate-400 focus:outline-none bg-transparent"
                  />
                </div>
                <button
                  type="submit"
                  className="px-5 sm:px-6 py-2.5 sm:py-3 text-sm font-bold text-white bg-[#128B94] hover:bg-[#01403F] rounded-xl transition-colors shrink-0 cursor-pointer flex items-center gap-2 shadow-xs active:scale-[0.99]"
                >
                  <span>{t.heroSearchBtn}</span>
                  <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                </button>
              </div>

              {/* Clean inline search tags */}
              <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500">
                <span className="font-semibold text-slate-700">
                  {language === 'ar' ? 'الأكثر طلباً:' : 'Popular:'}
                </span>
                {quickPicks.map((pick, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => onSearchSubmit(pick.query)}
                    className="text-slate-600 hover:text-[#128B94] transition-colors cursor-pointer underline underline-offset-4 decoration-slate-200 hover:decoration-[#128B94]"
                  >
                    {language === 'ar' ? pick.labelAr : pick.labelEn}
                  </button>
                ))}
              </div>
            </form>

            {/* Balanced, Clean CTAs (Inspired by egsh.ae) */}
            <div className="mt-7 sm:mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3.5 text-sm font-bold text-white bg-[#128B94] hover:bg-[#01403F] rounded-xl transition-all shadow-sm hover:shadow-md cursor-pointer flex items-center gap-2 active:scale-[0.98]"
              >
                <Sparkles className="w-4 h-4 text-white" />
                <span>{t.heroCtaBook}</span>
              </button>

              <button
                onClick={onOpenMobileBooking}
                className="px-5 py-3.5 text-sm font-semibold text-slate-800 bg-white/90 hover:bg-white rounded-xl border border-slate-200/90 transition-all cursor-pointer flex items-center gap-2 active:scale-[0.98] shadow-2xs hover:shadow-sm"
              >
                <span>{t.heroCtaDoorstep}</span>
              </button>

              <a
                href="https://wa.me/97143426666?text=Hello%20Karama%20Business%20Center%20and%20Emirates%20Secretarial%20Services,%20I%20would%20like%20information%20on%20Dubai%20government%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3.5 text-sm font-semibold text-slate-700 hover:text-[#128B94] transition-colors flex items-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-[#128B94]" />
                <span>{t.heroCtaWhatsApp}</span>
              </a>
            </div>
          </div>

          {/* Right Side: Seamless Looping YouTube Video (Proportionately Sized to 6 Columns) */}
          <div className="lg:col-span-6 xl:col-span-6 w-full flex justify-center lg:justify-end pt-4 sm:pt-6 lg:pt-9 xl:pt-10">
            <div className="relative w-full max-w-2xl lg:max-w-none">
              {/* Luminous Ambient Brand Halo (Sharp corners) */}
              <div className="absolute -inset-2.5 bg-gradient-to-tr from-[#128B94]/30 via-[#01403F]/20 to-[#128B94]/35 rounded-none blur-2xl opacity-90 pointer-events-none" />

              {/* Architectural Video Container (Sharp corners, 16:9 uncropped aspect ratio) */}
              <div className="relative rounded-none overflow-hidden shadow-2xl bg-black border-2 border-white ring-1 ring-slate-900/10 aspect-video w-full">
                {/* Full-size uncropped YouTube embed in 1080p high definition */}
                <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none">
                  <iframe
                    src="https://www.youtube-nocookie.com/embed/HI-stCCfY6s?autoplay=1&mute=1&loop=1&playlist=HI-stCCfY6s&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&disablekb=1&fs=0&playsinline=1&vq=hd1080&hd=1"
                    title="Karama Business Center & Emirates Secretarial Services Walkthrough"
                    className="w-full h-full inset-0 absolute pointer-events-none border-0"
                    allow="autoplay; encrypted-media"
                    loading="eager"
                  />
                </div>

                {/* Protective Glass Overlay ensuring complete shielding of any links/text */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-slate-950/15 via-transparent to-slate-950/10" />
              </div>
            </div>
          </div>
        </div>

        {/* 4 Box Cards at bottom of main banner (Clean borderless frosted glass, elevated like egsh.ae core pillars) */}
        <div className="mt-10 lg:mt-14 pb-2 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
          {/* Card 1: Transactions */}
          <div className="bg-white/90 backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-200 border-0 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-2">
              <span className="p-2 rounded-lg bg-[#128B94]/10 text-[#128B94]">
                <FileCheck2 className="w-4 h-4" />
              </span>
              <span className="text-[11px] font-semibold text-[#128B94] uppercase tracking-wider">
                {language === 'ar' ? 'سجل موثق' : 'Official'}
              </span>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#1E2528] tracking-tight tabular-nums">
                {t.statTransactions}
              </div>
              <p className="mt-1 text-xs sm:text-sm text-slate-800 font-bold">
                {t.statTransactionsLabel}
              </p>
              <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5 font-normal">
                {t.statTransactionsSub}
              </p>
            </div>
          </div>

          {/* Card 2: Government Entities */}
          <div className="bg-white/90 backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-200 border-0 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-2">
              <span className="p-2 rounded-lg bg-[#128B94]/10 text-[#128B94]">
                <Building2 className="w-4 h-4" />
              </span>
              <span className="text-[11px] font-semibold text-[#128B94] uppercase tracking-wider">
                {language === 'ar' ? 'شامل' : 'Integrated'}
              </span>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#128B94] tracking-tight tabular-nums">
                {t.statDepartments}
              </div>
              <p className="mt-1 text-xs sm:text-sm text-slate-800 font-bold">
                {t.statDepartmentsLabel}
              </p>
              <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5 font-normal">
                {t.statDepartmentsSub}
              </p>
            </div>
          </div>

          {/* Card 3: Satisfaction */}
          <div className="bg-white/90 backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-200 border-0 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-2">
              <span className="p-2 rounded-lg bg-[#128B94]/10 text-[#128B94]">
                <Award className="w-4 h-4" />
              </span>
              <span className="text-[11px] font-semibold text-[#128B94] uppercase tracking-wider">
                {language === 'ar' ? 'سعادة' : 'Excellence'}
              </span>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#1E2528] tracking-tight tabular-nums">
                {t.statSatisfaction}
              </div>
              <p className="mt-1 text-xs sm:text-sm text-slate-800 font-bold">
                {t.statSatisfactionLabel}
              </p>
              <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5 font-normal">
                {t.statSatisfactionSub}
              </p>
            </div>
          </div>

          {/* Card 4: Speed Record */}
          <div className="bg-white/90 backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-200 border-0 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-2">
              <span className="p-2 rounded-lg bg-[#128B94]/10 text-[#128B94]">
                <Zap className="w-4 h-4" />
              </span>
              <span className="text-[11px] font-semibold text-[#128B94] uppercase tracking-wider">
                {language === 'ar' ? 'فوري' : 'Fast-Track'}
              </span>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#128B94] tracking-tight tabular-nums">
                {t.statSpeed}
              </div>
              <p className="mt-1 text-xs sm:text-sm text-slate-800 font-bold">
                {t.statSpeedLabel}
              </p>
              <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5 font-normal">
                {t.statSpeedSub}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
