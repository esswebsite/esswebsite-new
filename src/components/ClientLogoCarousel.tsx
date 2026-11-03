import React, { useState } from 'react';
import { Language } from '../types';
import { CLIENT_LOGOS_DATA, ClientLogoItem } from '../data/clientsData';
import { Building2, ArrowRight, ShieldCheck, CheckCircle2, X, ExternalLink, Sparkles } from 'lucide-react';

interface ClientLogoCarouselProps {
  language: Language;
  onNavigateToClients?: () => void;
  onOpenBooking?: () => void;
}

// Subcomponent for each client logo card with resilient image fallback
const ClientLogoCard: React.FC<{
  client: ClientLogoItem;
  isAr: boolean;
  onClick: (client: ClientLogoItem) => void;
}> = ({ client, isAr, onClick }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div
      onClick={() => onClick(client)}
      className="group relative flex items-center gap-3.5 px-4 sm:px-5 py-3 mx-2 bg-white rounded-xl border border-slate-200/90 hover:border-[#128B94] shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer shrink-0 select-none min-w-[240px] max-w-[290px]"
      title={`${isAr ? client.nameAr : client.name} - ${isAr ? client.sectorAr : client.sector}`}
    >
      {/* Real Brand Logo Container */}
      <div className="w-14 h-12 rounded-lg bg-white flex items-center justify-center shrink-0 overflow-hidden border border-slate-200/90 group-hover:border-[#128B94]/60 p-1.5 transition-all duration-200 group-hover:scale-105 shadow-2xs">
        {!imageError && client.logoUrl ? (
          <img
            src={client.logoUrl}
            alt={`${client.name} logo`}
            onError={() => setImageError(true)}
            className="w-full h-full object-contain"
            loading="lazy"
          />
        ) : (
          <span
            className="w-full h-full rounded flex items-center justify-center font-extrabold uppercase text-center px-1 text-xs truncate max-w-full text-white"
            style={{ backgroundColor: client.brandColor }}
          >
            {client.logoText.slice(0, 4)}
          </span>
        )}
      </div>

      {/* Name and Sector */}
      <div className="min-w-0 flex-1">
        <h4 className="text-sm font-bold text-slate-800 truncate group-hover:text-[#128B94] transition-colors leading-snug">
          {isAr ? client.nameAr : client.name}
        </h4>
        <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-0.5 truncate">
          <span className="truncate">{isAr ? client.sectorAr : client.sector}</span>
        </div>
      </div>
    </div>
  );
};

export const ClientLogoCarousel: React.FC<ClientLogoCarouselProps> = ({
  language,
  onNavigateToClients,
  onOpenBooking,
}) => {
  const isAr = language === 'ar';
  const [activeClient, setActiveClient] = useState<ClientLogoItem | null>(null);

  // Split client roster into two rows for dual flowing marquee
  const half = Math.ceil(CLIENT_LOGOS_DATA.length / 2);
  const row1 = CLIENT_LOGOS_DATA.slice(0, half);
  const row2 = CLIENT_LOGOS_DATA.slice(half);

  // Duplicate for seamless 100% infinite CSS marquee loop
  const row1Doubled = [...row1, ...row1];
  const row2Doubled = [...row2, ...row2];

  const handleCardClick = (client: ClientLogoItem) => {
    setActiveClient(client);
  };

  const handleViewAll = () => {
    if (onNavigateToClients) {
      onNavigateToClients();
    } else {
      window.history.pushState(null, '', '/clients');
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  return (
    <section className="py-12 sm:py-16 bg-[#F8FAFA] border-y border-slate-200/80 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          {/* Header Title */}
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#128B94] uppercase tracking-wider mb-2">
              <Building2 className="w-4 h-4 text-[#128B94]" />
              <span>
                {isAr
                  ? 'شركاء النجاح وكبرى المؤسسات المعتمدة'
                  : 'Enterprise Trust & Corporate Partners'}
              </span>
              <span className="text-slate-300">·</span>
              <span className="text-slate-500 font-normal">
                {isAr ? '29 جهة كبرى' : '29+ Major Brands'}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {isAr
                ? 'نخبة الشركات والمجموعات التي تثق بمركز الكرامة للأعمال'
                : 'Leading Enterprises That Rely on Karama Business Center'}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
              {isAr
                ? 'من الفنادق الفاخرة والمشافي العالمية إلى البنوك وشركات التكنولوجيا، نوفر حلول الإقامات المجمعة، وفحص سالم الطبي خلال ساعتين، وتراخيص الأعمال.'
                : 'From luxury hospitality and hospitals to banking giants and tech innovators, Dubai’s foremost enterprises rely on our unified government hub for express staff residency, 2-hour medicals, and corporate DED licensing.'}
            </p>
          </div>

          {/* View All Button */}
          <div className="shrink-0 flex items-center gap-3">
            <button
              onClick={handleViewAll}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-[#128B94] hover:text-[#01403F] bg-white hover:bg-slate-50 border border-slate-300 hover:border-[#128B94] rounded-lg transition-all duration-150 shadow-2xs whitespace-nowrap cursor-pointer"
            >
              <span>{isAr ? 'عرض كافة الشركاء (29 شركة)' : 'View All Corporate Partners (29 Brands)'}</span>
              <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isAr ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Infinite Marquee Sliders with Gradient Edge Masks */}
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)] py-2">
        {/* Row 1 - Leftward Slide */}
        <div className="flex w-max animate-marquee-infinite mb-3">
          {row1Doubled.map((client, idx) => (
            <ClientLogoCard
              key={`row1-${client.id}-${idx}`}
              client={client}
              isAr={isAr}
              onClick={handleCardClick}
            />
          ))}
        </div>

        {/* Row 2 - Reverse Slide */}
        <div className="flex w-max animate-marquee-infinite-reverse">
          {row2Doubled.map((client, idx) => (
            <ClientLogoCard
              key={`row2-${client.id}-${idx}`}
              client={client}
              isAr={isAr}
              onClick={handleCardClick}
            />
          ))}
        </div>
      </div>

      {/* Subtext info bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500 pt-4 border-t border-slate-200/60">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#128B94]" />
            <span>
              {isAr
                ? 'إدارة حسابات الشركات مع مدير حساب شخصي مخصص وتسهيل إجراءات الفحص الطبي المجمّع'
                : 'Dedicated Key Account Managers & On-site Corporate Health Screening across Dubai'}
            </span>
          </div>
          <span className="text-slate-400 font-mono text-[11px]">
            {isAr ? 'حرك المؤشر للتوقف المؤقت والاطلاع' : 'Hover over any logo to pause & inspect'}
          </span>
        </div>
      </div>

      {/* Quick Details Modal when a client logo is clicked */}
      {activeClient && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150"
          onClick={() => setActiveClient(null)}
        >
          <div
            className="bg-white rounded-xl max-w-lg w-full p-6 sm:p-7 shadow-2xl border border-slate-200 relative text-left"
            dir={isAr ? 'rtl' : 'ltr'}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setActiveClient(null)}
              className="absolute top-4 right-4 rtl:right-auto rtl:left-4 p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header info */}
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-14 rounded-xl bg-white border border-slate-200 p-2 flex items-center justify-center shadow-xs shrink-0 overflow-hidden">
                {activeClient.logoUrl ? (
                  <img
                    src={activeClient.logoUrl}
                    alt={activeClient.name}
                    className="max-h-full max-w-full object-contain"
                  />
                ) : (
                  <div
                    className="w-full h-full rounded flex items-center justify-center font-extrabold uppercase text-white text-xs"
                    style={{ backgroundColor: activeClient.brandColor }}
                  >
                    {activeClient.logoText.slice(0, 4)}
                  </div>
                )}
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  {isAr ? activeClient.nameAr : activeClient.name}
                </h3>
                <p className="text-xs font-medium text-[#128B94]">
                  {isAr ? activeClient.sectorAr : activeClient.sector}
                </p>
              </div>
            </div>

            {/* Tagline */}
            <p className="text-sm text-slate-600 mb-5 leading-relaxed bg-slate-50 p-3 rounded-lg border border-slate-100">
              {isAr ? activeClient.taglineAr : activeClient.taglineEn}
            </p>

            {/* Government & Typing Services Provided */}
            <div className="mb-6">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2.5">
                {isAr ? 'الخدمات الحكومية والطبية المقدمة للمجموعة:' : 'Services Facilitated for this Client:'}
              </h4>
              <ul className="space-y-2">
                {(isAr ? activeClient.servicesProvidedAr : activeClient.servicesProvidedEn).map(
                  (service, sIdx) => (
                    <li key={sIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#128B94] shrink-0 mt-0.5" />
                      <span>{service}</span>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-slate-200">
              <button
                onClick={() => {
                  setActiveClient(null);
                  if (onOpenBooking) onOpenBooking();
                }}
                className="w-full sm:flex-1 py-2.5 px-4 bg-[#128B94] hover:bg-[#01403F] text-white text-xs sm:text-sm font-semibold rounded-lg transition-colors cursor-pointer text-center"
              >
                {isAr ? 'طلب حساب شركات مخصص' : 'Inquire Corporate PRO Account'}
              </button>
              <button
                onClick={() => {
                  setActiveClient(null);
                  handleViewAll();
                }}
                className="w-full sm:w-auto py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs sm:text-sm font-medium rounded-lg transition-colors cursor-pointer text-center"
              >
                {isAr ? 'عرض ملف الشركاء' : 'View Full Profile'}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
