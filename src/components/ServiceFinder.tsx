import React, { useState, useMemo } from 'react';
import { Search, Clock, ArrowRight, Sparkles, Filter, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';
import { ServiceItem, Language } from '../types';
import { SERVICES, DEPARTMENTS } from '../data/departmentsData';
import { TRANSLATIONS } from '../data/translations';
import { DepartmentLogo } from './DepartmentLogo';

interface ServiceFinderProps {
  language: Language;
  initialQuery?: string;
  selectedDepartmentId?: string;
  onClearDeptFilter?: () => void;
  onOpenDetails: (service: ServiceItem) => void;
  onOpenServicePage?: (serviceId: string) => void;
  onBookService: (service: ServiceItem) => void;
}

export const ServiceFinder: React.FC<ServiceFinderProps> = ({
  language,
  initialQuery = '',
  selectedDepartmentId,
  onClearDeptFilter,
  onOpenDetails,
  onOpenServicePage,
  onBookService,
}) => {
  const t = TRANSLATIONS[language];
  const [query, setQuery] = useState(initialQuery);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  // Sync if initialQuery changes from Hero search
  React.useEffect(() => {
    if (initialQuery) {
      setQuery(initialQuery);
    }
  }, [initialQuery]);

  const categories = [
    { id: 'all', labelEn: t.filterAll, labelAr: t.filterAll },
    { id: 'residency', labelEn: t.filterResidency, labelAr: t.filterResidency },
    { id: 'corporate', labelEn: t.filterCorporate, labelAr: t.filterCorporate },
    { id: 'labor', labelEn: t.filterLabor, labelAr: t.filterLabor },
    { id: 'legal', labelEn: t.filterLegal, labelAr: t.filterLegal },
    { id: 'medical', labelEn: t.filterMedical, labelAr: t.filterMedical },
    { id: 'vip', labelEn: t.filterVip, labelAr: t.filterVip },
  ];

  const filteredServices = useMemo(() => {
    return SERVICES.filter((service) => {
      // Dept filter
      if (selectedDepartmentId && service.departmentId !== selectedDepartmentId) {
        return false;
      }

      // Category filter
      if (activeCategory !== 'all' && service.category !== activeCategory) {
        return false;
      }

      // Query filter
      if (query.trim()) {
        const q = query.toLowerCase().trim();
        const matchEn =
          service.titleEn.toLowerCase().includes(q) ||
          service.shortDescEn.toLowerCase().includes(q) ||
          service.authorityEn.toLowerCase().includes(q);
        const matchAr =
          service.titleAr.includes(q) ||
          service.shortDescAr.includes(q) ||
          service.authorityAr.includes(q);
        return matchEn || matchAr;
      }

      return true;
    });
  }, [query, activeCategory, selectedDepartmentId]);

  // Display limit: 4 per row, 2 rows initially = 8 services
  const INITIAL_VISIBLE_COUNT = 8;
  const visibleServices = useMemo(() => {
    if (isExpanded || filteredServices.length <= INITIAL_VISIBLE_COUNT) {
      return filteredServices;
    }
    return filteredServices.slice(0, INITIAL_VISIBLE_COUNT);
  }, [filteredServices, isExpanded]);

  const hasMore = filteredServices.length > INITIAL_VISIBLE_COUNT;

  const selectedDeptObj = DEPARTMENTS.find((d) => d.id === selectedDepartmentId);

  return (
    <section id="services" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="text-xs font-bold tracking-wider text-[#128B94] uppercase mb-2">
              {language === 'ar' ? 'الدليل الشامل للخدمات' : 'Official Services Directory'}
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E2528] tracking-tight text-balance">
              {t.servicesSectionTitle}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl">
              {t.servicesSectionDesc}
            </p>
          </div>

          {/* Department Filter Active Indicator */}
          {selectedDepartmentId && selectedDeptObj && (
            <div className="flex items-center gap-3 bg-teal-50 border border-teal-200/80 p-2.5 px-4 rounded-md text-xs font-medium text-teal-950">
              <span>
                {language === 'ar' ? 'تصفية حسب: ' : 'Filtering: '}
                <strong>
                  {language === 'ar' ? selectedDeptObj.nameAr : selectedDeptObj.nameEn}
                </strong>
              </span>
              <button
                onClick={onClearDeptFilter}
                className="text-[#128B94] hover:text-[#01403F] underline font-bold cursor-pointer"
              >
                {language === 'ar' ? 'إلغاء التصفية' : 'Show All'}
              </button>
            </div>
          )}
        </div>

        {/* Search Bar & Filter Controls */}
        <div className="space-y-4 mb-10">
          <div className="relative max-w-xl">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 rtl:left-auto rtl:right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setIsExpanded(true); // expand when searching to see matches
              }}
              placeholder={t.heroSearchPlaceholder}
              className="w-full pl-10 pr-4 rtl:pl-4 rtl:pr-10 py-2.5 text-sm bg-slate-50 hover:bg-slate-100/70 focus:bg-white border border-slate-300 rounded-md text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#128B94] transition-all"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="absolute right-3 rtl:right-auto rtl:left-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-700 cursor-pointer"
              >
                {language === 'ar' ? 'مسح' : 'Clear'}
              </button>
            )}
          </div>

          {/* Interactive Filter Tabs (Functional segmented buttons per Constitution) */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setIsExpanded(false); // reset view to 2 rows
                  }}
                  className={`px-3.5 py-2 text-xs font-semibold rounded-md transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-[#128B94] text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                  }`}
                >
                  {language === 'ar' ? cat.labelAr : cat.labelEn}
                </button>
              );
            })}
          </div>
        </div>

        {/* Service Cards Grid: 4 Services Per Row (grid-cols-1 sm:grid-cols-2 lg:grid-cols-4) */}
        {filteredServices.length === 0 ? (
          <div className="p-12 text-center rounded-lg border border-dashed border-slate-300 bg-slate-50">
            <Filter className="w-8 h-8 text-slate-400 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-800">
              {language === 'ar' ? 'لا توجد نتائج مطابقة' : 'No matching government services found'}
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
              {language === 'ar'
                ? 'جرّب البحث بكلمات عامة مثل "إقامة" أو "رخصة" أو تواصل مباشرة مع فريق الدعم الفوري.'
                : 'Try broader keywords like "visa", "license", or "Amer", or connect directly with our advisory desk.'}
            </p>
            <button
              onClick={() => {
                setQuery('');
                setActiveCategory('all');
                if (onClearDeptFilter) onClearDeptFilter();
              }}
              className="mt-4 px-4 py-2 text-xs font-semibold text-slate-900 bg-white border border-slate-300 rounded-md hover:bg-slate-100 cursor-pointer"
            >
              {language === 'ar' ? 'إعادة ضبط البحث' : 'Reset Filters'}
            </button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {visibleServices.map((service) => {
                const totalEst = service.govFee + service.serviceFee;

                return (
                  <div
                    key={service.id}
                    className="bg-white rounded-xl border border-slate-200 hover:border-[#128B94] hover:shadow-md transition-all duration-200 p-5 flex flex-col justify-between group relative"
                  >
                    <div>
                      {/* Department Logo & Authority Lockup */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-lg bg-slate-50 p-1 border border-slate-200/80 shrink-0 flex items-center justify-center">
                            <DepartmentLogo deptId={service.departmentId} className="w-full h-full" />
                          </div>
                          <span className="text-xs font-bold text-[#128B94] truncate max-w-[130px]">
                            {language === 'ar' ? service.authorityAr : service.authorityEn}
                          </span>
                        </div>

                        {service.isPopular && (
                          <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 flex items-center gap-1">
                            <Sparkles className="w-2.5 h-2.5 text-emerald-600" />
                            {language === 'ar' ? 'شائع' : 'Popular'}
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <h3
                        onClick={() => (onOpenServicePage ? onOpenServicePage(service.id) : onOpenDetails(service))}
                        className="text-sm font-bold text-[#1E2528] group-hover:text-[#128B94] transition-colors leading-snug line-clamp-2 min-h-[40px] cursor-pointer"
                        title={language === 'ar' ? 'عرض تفاصيل وشروط الخدمة' : 'View Service Details'}
                      >
                        {language === 'ar' ? service.titleAr : service.titleEn}
                      </h3>

                      {/* Processing Time */}
                      <div className="mt-2 flex items-center gap-1 text-[11px] text-slate-500 font-medium">
                        <Clock className="w-3 h-3 text-slate-400 shrink-0" />
                        <span>{language === 'ar' ? service.processingTimeAr : service.processingTimeEn}</span>
                      </div>

                      {/* Short Description */}
                      <p className="mt-2 text-xs text-slate-600 leading-relaxed line-clamp-2">
                        {language === 'ar' ? service.shortDescAr : service.shortDescEn}
                      </p>
                    </div>

                    {/* Pricing and Action Strip */}
                    <div className="mt-5 pt-3.5 border-t border-slate-100">
                      <div className="flex items-baseline justify-between mb-3">
                        <div>
                          <span className="text-[10px] text-slate-400 block font-medium">
                            {language === 'ar' ? 'الرسوم التقديرية' : 'Estimated Tariff'}
                          </span>
                          <span className="text-base font-extrabold text-[#1E2528] tabular-nums">
                            {totalEst.toLocaleString()} <span className="text-[10px] font-bold text-slate-500">AED</span>
                          </span>
                        </div>

                        <button
                          onClick={() => (onOpenServicePage ? onOpenServicePage(service.id) : onOpenDetails(service))}
                          className="text-[11px] font-bold text-[#128B94] hover:text-[#01403F] transition-colors flex items-center gap-0.5 cursor-pointer"
                          title={language === 'ar' ? 'فتح صفحة الخدمة المستقلة' : 'Open Dedicated Service Page'}
                        >
                          <span>{language === 'ar' ? 'صفحة الخدمة' : 'Full Page'}</span>
                          <ChevronRight className="w-3 h-3 rtl:rotate-180" />
                        </button>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={() => onOpenDetails(service)}
                          className="w-full px-2 py-1.5 text-[11px] font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors text-center cursor-pointer"
                        >
                          {language === 'ar' ? 'الشروط' : 'Requirements'}
                        </button>

                        <button
                          onClick={() => onBookService(service)}
                          className="w-full px-2 py-1.5 text-[11px] font-bold text-white bg-[#128B94] hover:bg-[#01403F] rounded-md transition-colors text-center cursor-pointer flex items-center justify-center gap-1 active:scale-[0.98]"
                        >
                          <span>{language === 'ar' ? 'حجز' : 'Book'}</span>
                          <ArrowRight className="w-2.5 h-2.5 rtl:rotate-180" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Expand / Collapse "View All Services" Button if more than 8 services */}
            {hasMore && (
              <div className="mt-12 text-center">
                <button
                  type="button"
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-bold text-white bg-[#128B94] hover:bg-[#01403F] rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer active:scale-[0.98]"
                >
                  <span>
                    {isExpanded
                      ? (language === 'ar' ? 'عرض خدمات أقل' : 'Show Less')
                      : (language === 'ar'
                          ? `عرض كافة الخدمات الحكومية (${filteredServices.length} خدمة معتمدة)`
                          : `View All Services (${filteredServices.length} Total)`)}
                  </span>
                  {isExpanded ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>
                <p className="mt-2.5 text-xs text-slate-500 font-medium">
                  {isExpanded
                    ? (language === 'ar' ? 'يتم الآن عرض جميع الخدمات الحكومية المعتمدة' : 'Currently displaying all authorized government transactions')
                    : (language === 'ar' ? 'انقر لتوسيع القائمة واستعراض كافة الخدمات المعتمدة' : 'Click to expand all authorized government transactions')}
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};
