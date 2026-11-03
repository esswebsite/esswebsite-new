import React from 'react';
import { ArrowRight, Compass, CheckCircle2, ChevronRight } from 'lucide-react';
import { Language } from '../types';
import {
  getContextualRelatedServices,
  RelatedServiceItem,
} from '../data/relatedServicesData';

export interface RelatedServicesSectionProps {
  language: Language;
  currentServiceId?: string;
  departmentId?: string;
  category?: string;
  customHeading?: string;
  customEyebrow?: string;
  customDescription?: string;
  onNavigateToService?: (serviceId: string) => void;
  onNavigateToDepartment?: (deptId: string) => void;
  className?: string;
}

export const RelatedServicesSection: React.FC<RelatedServicesSectionProps> = ({
  language,
  currentServiceId,
  departmentId,
  category,
  customHeading,
  customEyebrow,
  customDescription,
  onNavigateToService,
  onNavigateToDepartment,
  className = '',
}) => {
  const isAr = language === 'ar';

  const config = getContextualRelatedServices({
    currentServiceId,
    departmentId,
    category,
    language,
  });

  // Omit component entirely if no related services are available (as instructed)
  if (!config.items || config.items.length === 0) {
    return null;
  }

  const eyebrow = customEyebrow || (isAr ? config.eyebrowAr : config.eyebrowEn);
  const heading = customHeading || (isAr ? config.headingAr : config.headingEn);
  const description =
    customDescription || (isAr ? config.descriptionAr : config.descriptionEn);

  const handleClick = (item: RelatedServiceItem) => {
    if (item.type === 'service') {
      if (onNavigateToService) {
        onNavigateToService(item.id);
      } else {
        window.history.pushState(null, '', `/service/${item.id}`);
        window.dispatchEvent(new PopStateEvent('popstate'));
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      if (onNavigateToDepartment) {
        onNavigateToDepartment(item.departmentId);
      } else {
        window.history.pushState(null, '', `/department/${item.departmentId}`);
        window.dispatchEvent(new PopStateEvent('popstate'));
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <section
      className={`py-12 bg-white border-b border-slate-200/80 ${isAr ? 'font-arabic' : ''} ${className}`}
      aria-label={heading}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 rounded-2xl bg-[#F8FAFA] border border-slate-200/90 shadow-2xs">
          {/* Header Block: Eyebrow + Single Primary Heading + Customer-Oriented Description */}
          <div className="mb-6">
            {eyebrow && (
              <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#128B94] uppercase tracking-wider mb-2">
                <Compass className="w-3.5 h-3.5 text-[#128B94]" aria-hidden="true" />
                <span>{eyebrow}</span>
              </div>
            )}
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#1E2528] tracking-tight">
              {heading}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-3xl leading-relaxed">
              {description}
            </p>
          </div>

          {/* Interactive, Useful Service Links (Clean Cards, No SEO Pills or Hashtags) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 pt-2">
            {config.items.map((item) => {
              const itemTitle = isAr ? item.titleAr : item.titleEn;
              const itemBadge = isAr ? item.badgeAr : item.badgeEn;
              const itemDesc = isAr ? item.descriptionAr : item.descriptionEn;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleClick(item)}
                  className="group p-4 rounded-xl bg-white border border-slate-200/90 hover:border-[#128B94] hover:bg-teal-50/40 text-left rtl:text-right transition-all duration-150 flex flex-col justify-between gap-3 shadow-2xs cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#128B94] active:scale-[0.99]"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#128B94] bg-teal-50 px-2 py-0.5 rounded border border-teal-100">
                        {itemBadge}
                      </span>
                      <CheckCircle2 className="w-3 h-3 text-teal-600/70 shrink-0" aria-hidden="true" />
                    </div>

                    <h3 className="text-xs sm:text-sm font-bold text-[#1E2528] group-hover:text-[#128B94] transition-colors leading-snug line-clamp-2">
                      {itemTitle}
                    </h3>

                    {itemDesc && (
                      <p className="text-[11px] text-slate-500 mt-1.5 leading-relaxed line-clamp-2">
                        {itemDesc}
                      </p>
                    )}
                  </div>

                  <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-[#128B94]">
                    <span>{isAr ? 'عرض تفاصيل الخدمة' : 'View Service'}</span>
                    <ArrowRight
                      className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#128B94] group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-all shrink-0 rtl:rotate-180"
                      aria-hidden="true"
                    />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
