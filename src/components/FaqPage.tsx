import React, { useState, useMemo, useEffect } from 'react';
import {
  HelpCircle,
  Search,
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  PhoneCall,
  Sparkles,
  Shield,
  MessageCircle,
  SlidersHorizontal,
  ArrowRight,
  Building2,
  ExternalLink,
  X,
  Plus,
  Minus,
} from 'lucide-react';
import { Language } from '../types';
import { COMPREHENSIVE_FAQS, FAQ_CATEGORIES, FaqItemData } from '../data/faqData';

interface FaqPageProps {
  language: Language;
  onNavigateToHome: () => void;
  onNavigateToContact: () => void;
  onOpenBooking: () => void;
  onNavigateToDepartment?: (deptId: string) => void;
  onNavigateToService?: (serviceId: string) => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({
  language,
  onNavigateToHome,
  onNavigateToContact,
  onOpenBooking,
  onNavigateToDepartment,
  onNavigateToService,
}) => {
  const isAr = language === 'ar';
  const ArrowIcon = isAr ? ChevronLeft : ChevronRight;

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedId, setExpandedId] = useState<string | null>('faq-amer-1');

  // Filter FAQs based on category and live text search
  const filteredFaqs = useMemo(() => {
    return COMPREHENSIVE_FAQS.filter((item) => {
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const qEn = item.questionEn.toLowerCase();
        const aEn = item.answerEn.toLowerCase();
        const qAr = item.questionAr.toLowerCase();
        const aAr = item.answerAr.toLowerCase();
        const deptEn = item.departmentNameEn.toLowerCase();
        const deptAr = item.departmentNameAr.toLowerCase();
        const authEn = (item.officialAuthorityEn || '').toLowerCase();
        const authAr = (item.officialAuthorityAr || '').toLowerCase();

        return (
          qEn.includes(q) ||
          aEn.includes(q) ||
          qAr.includes(q) ||
          aAr.includes(q) ||
          deptEn.includes(q) ||
          deptAr.includes(q) ||
          authEn.includes(q) ||
          authAr.includes(q)
        );
      }
      return true;
    });
  }, [selectedCategory, searchQuery]);

  // Compute question counts for each category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: COMPREHENSIVE_FAQS.length };
    COMPREHENSIVE_FAQS.forEach((item) => {
      counts[item.category] = (counts[item.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Structured Data (JSON-LD) for Google Search SEO
  useEffect(() => {
    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: COMPREHENSIVE_FAQS.map((item) => ({
        '@type': 'Question',
        name: isAr ? item.questionAr : item.questionEn,
        acceptedAnswer: {
          '@type': 'Answer',
          text: isAr ? item.answerAr : item.answerEn,
        },
      })),
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'faq-structured-data';
    script.textContent = JSON.stringify(faqSchema);
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById('faq-structured-data');
      if (el) el.remove();
    };
  }, [isAr]);

  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
  };

  return (
    <div className={`min-h-screen bg-slate-50 pt-18 sm:pt-22 lg:pt-24 pb-20 ${isAr ? 'font-arabic' : ''}`}>
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-xs text-slate-500 font-medium">
            <button
              onClick={onNavigateToHome}
              className="hover:text-[#128B94] transition-colors cursor-pointer flex items-center gap-1"
            >
              <span>{isAr ? 'الرئيسية' : 'Home'}</span>
            </button>
            <ArrowIcon className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 font-semibold">
              {isAr ? 'الأسئلة الشائعة وقاعدة المعرفة' : 'Frequently Asked Questions'}
            </span>
          </nav>
        </div>
      </div>

      {/* Hero Header */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#01403F] via-[#085C5E] to-[#128B94] text-white py-14 lg:py-20">
        {/* Subtle Ambient Decorative Circles */}
        <div className="absolute top-0 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-teal-400/10 rounded-full blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-teal-200">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>
                {isAr
                  ? `دليل الاستفسارات الحكومية الرسمي الشامل (${COMPREHENSIVE_FAQS.length} سؤال وجواب)`
                  : `Comprehensive Official Government Service Guide (${COMPREHENSIVE_FAQS.length} FAQs)`}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {isAr ? 'الأسئلة الشائعة والإرشادات الحكومية' : 'Dubai Government Services FAQ & Regulatory Guide'}
            </h1>

            <p className="text-sm sm:text-base text-teal-50/90 leading-relaxed">
              {isAr
                ? 'إجابات رسمية دقيقة تغطي كافة الإجراءات الحكومية عبر 14 إدارة ومركزاً معتمداً: مركز آمر (GDRFA)، واقتصادية دبي (DET)، وتسهيل (MoHRE)، والهيئة الاتحادية (ICP)، وإيجاري أراضي دبي، وفحص سالم الطبي (KMFC)، والصحة المهنية، والتصديقات، والكاتب العدل، وهيئة الطرق، وتدبير، والخدمات الممتازة.'
                : 'Authoritative answers covering 14 accredited government departments: Amer GDRFA visas, DET company setup, MoHRE Tasheel labor rules, ICP Emirates ID biometrics, DLD Ejari leases, Salem medical fitness, OHC health cards, attestation, notary, and VIP concierge.'}
            </p>

            {/* Live Search */}
            <div className="pt-3 max-w-2xl">
              <div className="relative">
                <Search className="w-5 h-5 absolute left-4 rtl:left-auto rtl:right-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={
                    isAr
                      ? 'ابحث في الأسئلة (مثلاً: الإقامة الذهبية، الرخصة الفورية، الفحص الطبي، إيجاري، الرسوم)...'
                      : 'Search FAQs (e.g. Golden Visa, Instant License, medical test, Ejari, fines)...'
                  }
                  className="w-full bg-white text-slate-900 placeholder-slate-400 pl-12 rtl:pl-4 rtl:pr-12 pr-10 py-3.5 rounded-xl shadow-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 rtl:right-auto rtl:left-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs by Department */}
      <div className="sticky top-20 sm:top-22 lg:top-24 z-30 bg-white border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto py-3 no-scrollbar">
            {FAQ_CATEGORIES.map((cat) => {
              const count = categoryCounts[cat.id] || 0;
              const isSelected = selectedCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#128B94] text-white shadow-xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  <span>{isAr ? cat.labelAr : cat.labelEn}</span>
                  <span
                    className={`px-1.5 py-0.2 rounded-full text-[10px] font-extrabold ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-600'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Active Filter Bar & Results Count */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600 mb-6 pb-3 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-900">
              {isAr ? (
                <>
                  عرض <strong>{filteredFaqs.length}</strong> من إجمالي <strong>{COMPREHENSIVE_FAQS.length}</strong> سؤالاً معتمداً
                </>
              ) : (
                <>
                  Showing <strong>{filteredFaqs.length}</strong> of <strong>{COMPREHENSIVE_FAQS.length}</strong> verified questions
                </>
              )}
            </span>

            {(selectedCategory !== 'all' || searchQuery.trim()) && (
              <button
                onClick={handleClearFilters}
                className="text-xs text-[#128B94] hover:underline font-bold flex items-center gap-1 ml-2 rtl:ml-0 rtl:mr-2 cursor-pointer"
              >
                <span>{isAr ? 'إلغاء التصفية والبحث' : 'Reset filters'}</span>
              </button>
            )}
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[11px] text-slate-500">
              {isAr ? '14 إدارة حكومية متكاملة بمجمع الكرامة' : '14 Government Desks Co-located at KBC'}
            </span>
          </div>
        </div>
      </div>

      {/* Accordion Questions List */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        {filteredFaqs.length === 0 ? (
          <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center shadow-xs">
            <SlidersHorizontal className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-800">
              {isAr ? 'لم يتم العثور على سؤال مطابق' : 'No matching questions found'}
            </h3>
            <p className="text-xs text-slate-500 mt-1 max-w-md mx-auto">
              {isAr
                ? 'جرب البحث بكلمات أخرى أو اختر إدارة مختلفة للاطلاع على كافة الأسئلة، أو تواصل مباشرة مع فريق الاستشارات.'
                : 'Try adjusting your search query or department tab, or speak directly with our government consultants.'}
            </p>
            <button
              onClick={handleClearFilters}
              className="mt-4 px-5 py-2.5 rounded-xl bg-[#128B94] text-white text-xs font-bold cursor-pointer hover:bg-[#0f766e] transition-colors"
            >
              {isAr ? 'عرض كافة الأسئلة (56 سؤال)' : 'Show All Questions (56 FAQs)'}
            </button>
          </div>
        ) : (
          filteredFaqs.map((faq) => {
            const isOpen = expandedId === faq.id;

            return (
              <div
                key={faq.id}
                className={`bg-white rounded-2xl border transition-all duration-200 shadow-xs overflow-hidden ${
                  isOpen ? 'border-teal-300 ring-1 ring-teal-200/50' : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => setExpandedId(isOpen ? null : faq.id)}
                  className="w-full p-5 sm:p-6 text-left rtl:text-right flex items-start justify-between gap-4 cursor-pointer hover:bg-slate-50/60"
                  aria-expanded={isOpen}
                >
                  <div className="flex-1 space-y-1.5">
                    {/* Department Badge */}
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-teal-50 text-[#0F766E] border border-teal-200/70">
                        <Building2 className="w-3 h-3 text-[#128B94]" />
                        <span>{isAr ? faq.departmentNameAr : faq.departmentNameEn}</span>
                      </span>

                      {faq.officialAuthorityEn && (
                        <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-slate-100 text-slate-600">
                          <Shield className="w-2.5 h-2.5 text-slate-500" />
                          <span>{isAr ? faq.officialAuthorityAr : faq.officialAuthorityEn}</span>
                        </span>
                      )}
                    </div>

                    {/* Question Heading */}
                    <h2 className="text-sm sm:text-base font-bold text-slate-900 leading-snug pt-0.5">
                      {isAr ? faq.questionAr : faq.questionEn}
                    </h2>
                  </div>

                  {/* Toggle Indicator */}
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all ${
                      isOpen
                        ? 'bg-[#128B94] text-white rotate-180 shadow-xs'
                        : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-2 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 bg-teal-50/20">
                    <p className="leading-relaxed whitespace-pre-line text-slate-700">
                      {isAr ? faq.answerAr : faq.answerEn}
                    </p>

                    <div className="mt-5 pt-3 border-t border-teal-100/70 flex flex-wrap items-center justify-between gap-3 text-xs">
                      <div className="flex items-center gap-2 text-slate-500 text-[11px]">
                        <Shield className="w-3.5 h-3.5 text-[#128B94]" />
                        <span>
                          {isAr
                            ? `الجهة الحكومية المختصة: ${faq.officialAuthorityAr}`
                            : `Governing Sovereign Body: ${faq.officialAuthorityEn}`}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        {faq.departmentId && onNavigateToDepartment && (
                          <button
                            onClick={() => onNavigateToDepartment(faq.departmentId)}
                            className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-teal-300 text-slate-700 hover:text-[#128B94] font-semibold text-xs transition-colors cursor-pointer inline-flex items-center gap-1"
                          >
                            <span>{isAr ? 'عرض خدمات الإدارة' : 'View Department'}</span>
                            <ArrowRight className="w-3 h-3 rtl:rotate-180" />
                          </button>
                        )}

                        {faq.relatedServiceId && onNavigateToService && (
                          <button
                            onClick={() => onNavigateToService(faq.relatedServiceId!)}
                            className="px-3 py-1.5 rounded-lg bg-teal-50 border border-teal-200 text-[#0F766E] hover:bg-teal-100 font-bold text-xs transition-colors cursor-pointer inline-flex items-center gap-1"
                          >
                            <span>{isAr ? 'تفاصيل المعاملة' : 'Service Details'}</span>
                            <ArrowRight className="w-3 h-3 rtl:rotate-180" />
                          </button>
                        )}

                        <button
                          onClick={onOpenBooking}
                          className="px-3.5 py-1.5 rounded-lg bg-[#128B94] hover:bg-[#0d6e75] text-white font-bold text-xs transition-all shadow-xs cursor-pointer inline-flex items-center gap-1.5"
                        >
                          <span>{isAr ? 'حجز موعد' : 'Book Desk'}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}

        {/* Support Callout Banner */}
        <div className="mt-14 bg-gradient-to-r from-teal-950 via-[#01403F] to-[#085C5E] rounded-3xl p-8 sm:p-10 text-white shadow-xl">
          <div className="grid md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-teal-300 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{isAr ? 'استشارة مجانية فورية مع خبراء المعاملات' : 'Free Government Transaction Advisory'}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                {isAr ? 'هل لديك حالة تخصصية أو استفسار لم تجد إجابته هنا؟' : 'Have a complex file or question not listed in this guide?'}
              </h3>
              <p className="text-xs sm:text-sm text-teal-100 leading-relaxed">
                {isAr
                  ? 'مستشارونا القانونيون وخبراء العلاقات الحكومية (PRO) في مركز الكرامة للأعمال متواجدون للرد على كافة استفسارات الإقامات، تأسيس الشركات، عقود العمل، وتسوية الغرامات.'
                  : 'Speak directly with our senior government PROs and immigration consultants for an upfront evaluation of your file, statutory tariffs, and exact document prerequisites.'}
              </p>
            </div>

            <div className="md:col-span-4 flex flex-col gap-3">
              <a
                href="https://wa.me/97143426666"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all active:scale-[0.98]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{isAr ? 'محادثة واتساب فورية (+971 4 342 6666)' : 'WhatsApp Consultant (+971 4 342 6666)'}</span>
              </a>

              <button
                onClick={onNavigateToContact}
                className="w-full py-3 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/20 flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <PhoneCall className="w-4 h-4 text-teal-300" />
                <span>{isAr ? 'عرض الموقع ومواعيد العمل' : 'View Location & Working Hours'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
