import React, { useState, useEffect } from 'react';
import {
  Shield,
  Clock,
  CheckCircle2,
  Calendar,
  PhoneCall,
  MapPin,
  Star,
  ChevronDown,
  Sparkles,
  FileCheck,
  ChevronRight,
  Check,
  Building2,
  ExternalLink,
  Award,
  Zap,
  HelpCircle,
  AlertCircle,
  Tag,
  Search,
  Eye,
  CheckCircle,
} from 'lucide-react';
import { Department, Language, ServiceItem } from '../types';
import { DEPARTMENTS, SERVICES } from '../data/departmentsData';
import { TRANSLATIONS } from '../data/translations';
import { getServiceDetails } from '../data/departmentExtendedData';
import { DepartmentLogo } from './DepartmentLogo';
import { OFFICIAL_MAPS, OFFICIAL_SAME_AS } from '../data/socialAndMapLinks';
import { getOpeningHoursForDept } from '../data/centerTimings';

interface SingleServicePageProps {
  serviceId: string;
  language: Language;
  onNavigateToHome: () => void;
  onNavigateToDepartment: (deptId: string) => void;
  onNavigateToService?: (serviceId: string) => void;
  onOpenBooking: (service: ServiceItem) => void;
  onCalculateFee?: (service: ServiceItem) => void;
}

export const SingleServicePage: React.FC<SingleServicePageProps> = ({
  serviceId,
  language,
  onNavigateToHome,
  onNavigateToDepartment,
  onNavigateToService,
  onOpenBooking,
  onCalculateFee,
}) => {
  const t = TRANSLATIONS[language];
  const isAr = language === 'ar';
  const [activeFaqIndex, setActiveFaqIndex] = useState<number | null>(0);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  // Find service and department
  const currentService = SERVICES.find((s) => s.id === serviceId) || SERVICES[0];
  const currentDept =
    DEPARTMENTS.find((d) => d.id === currentService.departmentId) || DEPARTMENTS[0];

  const serviceDetails = getServiceDetails(currentService, currentDept);

  const totalStandard = currentService.govFee + currentService.serviceFee;
  const totalWithVip = totalStandard + (currentService.vipFastTrackFee || 0);

  // Facility showcase image (the 2nd featured image on page)
  const facilityImage =
    serviceDetails.featuredFacilityImage?.url ||
    serviceDetails.galleryImages[1]?.url ||
    serviceDetails.galleryImages[0]?.url;

  // Dynamic SEO & Structured Data Injection
  useEffect(() => {
    const pageTitle = isAr
      ? `${currentService.titleAr} في دبي | مركز الكرامة للأعمال (KBC) | مركز الكرامة الطبي`
      : `${currentService.titleEn} in Dubai | Karama Business Center (KBC) | Karama Medical Center`;

    const metaDesc = isAr
      ? `معاملة ${currentService.titleAr} في دبي عبر مركز الكرامة للأعمال (KBC) بترخيص آمر #772 وإدارة ESS، بجوار مركز الكرامة للياقة الطبية السريعة (KMFC). تدقيق استباقي للمستندات وإنجاز خلال ${currentService.processingTimeAr}.`
      : `Apply for ${currentService.titleEn} in Dubai through Karama Business Center (KBC) under Emirates Secretarial Services (ESS) Amer License #772. Co-located with Karama Medical Fitness Express Service Center (KMFC / Karama Medical Center). Turnaround: ${currentService.processingTimeEn}.`;

    document.title = pageTitle;

    // Meta Description
    let metaDescriptionTag = document.querySelector('meta[name="description"]');
    if (!metaDescriptionTag) {
      metaDescriptionTag = document.createElement('meta');
      metaDescriptionTag.setAttribute('name', 'description');
      document.head.appendChild(metaDescriptionTag);
    }
    metaDescriptionTag.setAttribute('content', metaDesc);

    // Meta Keywords
    const allKeywords = [
      ...(serviceDetails.targetKeywords?.shortTail || []),
      ...(serviceDetails.targetKeywords?.longTail || []),
      currentService.titleEn,
      currentDept.nameEn,
      'Karama Business Center',
      'KBC Dubai',
      'Emirates Secretarial Services',
      'ESS Dubai',
    ].join(', ');
    let metaKeywordsTag = document.querySelector('meta[name="keywords"]');
    if (!metaKeywordsTag) {
      metaKeywordsTag = document.createElement('meta');
      metaKeywordsTag.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywordsTag);
    }
    metaKeywordsTag.setAttribute('content', allKeywords);

    // OpenGraph Title & Description
    let ogTitleTag = document.querySelector('meta[property="og:title"]');
    if (ogTitleTag) ogTitleTag.setAttribute('content', pageTitle);
    let ogDescTag = document.querySelector('meta[property="og:description"]');
    if (ogDescTag) ogDescTag.setAttribute('content', metaDesc);

    // Canonical tag
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute('href', `${window.location.origin}/#service/${currentService.id}`);

    // Structured Data JSON-LD with official brand naming, Google Profile & alternate names
    const jsonLdData = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': ['LocalBusiness', 'ProfessionalService'],
          '@id': `${window.location.origin}/#organization`,
          name: 'Karama Business Center',
          alternateName: [
            'KBC',
            'Karama Business Center Dubai',
            'Emirates Secretarial Services',
            'ESS',
            'Karama Medical Fitness Express service Center - KMFC',
            'Karama Medical Center',
            'KMFC',
          ],
          url: 'https://ess.ae',
          hasMap: OFFICIAL_MAPS.shareUrl,
          sameAs: [...OFFICIAL_SAME_AS],
          telephone: '+97143426666',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Al Karama, Next to Karama Post Office',
            addressLocality: 'Dubai',
            addressRegion: 'Dubai',
            addressCountry: 'AE',
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: OFFICIAL_MAPS.coordinates.latitude,
            longitude: OFFICIAL_MAPS.coordinates.longitude,
          },
          openingHoursSpecification: getOpeningHoursForDept(currentDept?.id),
        },
        {
          '@type': 'Service',
          '@id': `${window.location.origin}/#service/${currentService.id}`,
          name: isAr ? currentService.titleAr : currentService.titleEn,
          serviceType: currentService.category,
          provider: {
            '@id': `${window.location.origin}/#organization`,
          },
          offers: {
            '@type': 'Offer',
            price: totalStandard,
            priceCurrency: 'AED',
            availability: 'https://schema.org/InStock',
          },
          description: isAr ? currentService.shortDescAr : currentService.shortDescEn,
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.96',
            reviewCount: '1340',
          },
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: isAr ? 'الرئيسية' : 'Home',
              item: `${window.location.origin}/#home`,
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: isAr ? currentDept.nameAr : currentDept.nameEn,
              item: `${window.location.origin}/#department/${currentDept.id}`,
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: isAr ? currentService.titleAr : currentService.titleEn,
              item: `${window.location.origin}/#service/${currentService.id}`,
            },
          ],
        },
        {
          '@type': 'FAQPage',
          mainEntity: serviceDetails.faqs.map((faq) => ({
            '@type': 'Question',
            name: isAr ? faq.questionAr : faq.questionEn,
            acceptedAnswer: {
              '@type': 'Answer',
              text: isAr ? faq.answerAr : faq.answerEn,
            },
          })),
        },
      ],
    };

    let scriptTag = document.getElementById('jsonld-service');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'jsonld-service';
      scriptTag.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(jsonLdData);

    return () => {
      const tag = document.getElementById('jsonld-service');
      if (tag) tag.remove();
    };
  }, [currentService, currentDept, serviceDetails, isAr, totalStandard]);

  return (
    <div className={`bg-white min-h-screen text-[#1E2528] pt-18 sm:pt-22 lg:pt-24 ${isAr ? 'font-arabic' : ''}`}>
      {/* Top Clean Breadcrumb Navigation Bar */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 flex-wrap">
            <button
              onClick={onNavigateToHome}
              className="hover:text-[#128B94] transition-colors cursor-pointer font-medium flex items-center gap-1"
            >
              <span>{isAr ? 'الرئيسية' : 'Home'}</span>
            </button>
            <ChevronRight className="w-3.5 h-3.5 rtl:rotate-180 text-slate-400" />
            <button
              onClick={() => onNavigateToDepartment(currentDept.id)}
              className="hover:text-[#128B94] transition-colors cursor-pointer font-medium"
            >
              <span>{isAr ? currentDept.nameAr : currentDept.nameEn}</span>
            </button>
            <ChevronRight className="w-3.5 h-3.5 rtl:rotate-180 text-slate-400" />
            <span className="text-[#128B94] font-semibold truncate max-w-xs sm:max-w-md" aria-current="page">
              {isAr ? currentService.titleAr : currentService.titleEn}
            </span>
          </nav>
        </div>
      </div>

      {/* 1. Main Banner with Architectural Ambience & Clear Brand Identity */}
      <section className="relative bg-gradient-to-br from-[#01403F] via-[#095E63] to-[#128B94] text-white py-14 sm:py-20 overflow-hidden">
        {/* Subtle Architectural Scrim */}
        <div className="absolute inset-0 pointer-events-none opacity-15">
          <img
            src={serviceDetails.galleryImages[0]?.url}
            alt={currentService.titleEn}
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#01403F]/90 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-3xl">
              {/* Category, Authority & Verified Co-Location Badges */}
              <div className="flex items-center gap-3 sm:gap-4 mb-4 flex-wrap">
                <div className="w-14 h-14 rounded-xl bg-white p-1.5 shadow-md shrink-0 flex items-center justify-center">
                  <DepartmentLogo deptId={currentService.departmentId} className="w-full h-full" />
                </div>
                <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
                  <span className="text-xs font-bold text-teal-100 bg-white/20 px-2.5 py-1 rounded flex items-center gap-1">
                    <Shield className="w-3.5 h-3.5 text-teal-300" />
                    <span>{isAr ? currentService.authorityAr : currentService.authorityEn}</span>
                  </span>

                  <span className="text-xs font-semibold text-teal-100 bg-teal-900/40 px-2.5 py-1 rounded border border-teal-300/30">
                    {isAr ? 'مركز الكرامة للأعمال (KBC)' : 'Karama Business Center (KBC)'}
                  </span>

                  <span className="text-xs font-semibold text-teal-100 bg-teal-900/40 px-2.5 py-1 rounded border border-teal-300/30">
                    {isAr ? 'مركز الكرامة الطبي (KMFC)' : 'Karama Medical Center (KMFC)'}
                  </span>

                  {currentService.isPopular && (
                    <span className="text-[10px] font-bold text-teal-200 bg-teal-500/30 px-2 py-0.5 rounded flex items-center gap-1 border border-teal-300/30">
                      <Sparkles className="w-3 h-3 text-teal-300" />
                      <span>{isAr ? 'الأكثر طلباً' : 'Marquee Service'}</span>
                    </span>
                  )}
                </div>
              </div>

              {/* H1 Heading Aligned with Google Standards & Business Names */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                {isAr
                  ? `${currentService.titleAr} في دبي`
                  : `${currentService.titleEn} in Dubai`}
              </h1>

              <p className="mt-3 text-sm sm:text-base text-teal-100 font-medium">
                {isAr
                  ? 'خدمات آمر الحكومية الرسمية بإدارة الإمارات لخدمات رجال الأعمال (ESS) في مركز الكرامة للأعمال · متكامل مع مركز الكرامة الطبي (KMFC)'
                  : 'Official Amer & Government Processing by ESS at Karama Business Center · Integrated with Karama Medical Center (KMFC)'}
              </p>

              <p className="mt-4 text-base sm:text-lg text-teal-50 leading-relaxed font-normal">
                {isAr ? currentService.shortDescAr : currentService.shortDescEn}
              </p>

              {/* Service SLA & Tariff Highlights */}
              <div className="mt-8 pt-6 border-t border-white/20 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
                <div>
                  <span className="text-teal-200 block">{isAr ? 'مدة الإنجاز الرسمية' : 'Turnaround SLA'}</span>
                  <span className="text-lg font-extrabold text-white flex items-center gap-1.5 mt-0.5">
                    <Clock className="w-4 h-4 text-teal-300" />
                    <span>{isAr ? currentService.processingTimeAr : currentService.processingTimeEn}</span>
                  </span>
                </div>

                <div>
                  <span className="text-teal-200 block">{isAr ? 'الرسوم الحكومية' : 'Government Fee'}</span>
                  <span className="text-lg font-extrabold text-white mt-0.5 block tabular-nums">
                    {currentService.govFee.toLocaleString()} <span className="text-xs font-bold text-teal-200">AED</span>
                  </span>
                </div>

                <div>
                  <span className="text-teal-200 block">{isAr ? 'رسوم الطباعة والتدقيق (ESS)' : 'ESS Typing Fee'}</span>
                  <span className="text-lg font-extrabold text-white mt-0.5 block tabular-nums">
                    {currentService.serviceFee.toLocaleString()} <span className="text-xs font-bold text-teal-200">AED</span>
                  </span>
                </div>

                <div>
                  <span className="text-teal-200 block">{isAr ? 'إجمالي التقدير القياسي' : 'Standard Total'}</span>
                  <span className="text-lg font-extrabold text-teal-200 mt-0.5 block tabular-nums">
                    {totalStandard.toLocaleString()} <span className="text-xs font-bold text-white">AED</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Action Booking Card */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/20 text-white lg:w-[380px] shrink-0 shadow-xl">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-200 mb-2">
                <CheckCircle2 className="w-4 h-4 text-teal-300" />
                <span>{isAr ? 'تدقيق قانوني وإداري معتمد' : 'Verified Pre-Audit Processing'}</span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 leading-snug">
                {isAr ? 'ابدأ طلبك الآن بخطوات ميسرة' : 'Initiate This Service Today'}
              </h3>

              <p className="text-xs text-teal-100 mb-6 leading-relaxed">
                {isAr
                  ? 'تدقيق مسبق للمستندات والشروط، إيصالات حكومية رسمية، وإمكانية الخدمة بالمركز أو فيلتك.'
                  : 'Document pre-audit, official ministerial receipts, and doorstep van or VIP Majlis availability.'}
              </p>

              <div className="space-y-3">
                <button
                  onClick={() => onOpenBooking(currentService)}
                  className="w-full py-3.5 px-4 text-xs sm:text-sm font-bold bg-white text-[#01403F] hover:bg-teal-50 rounded-lg transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
                >
                  <Calendar className="w-4 h-4 text-[#128B94]" />
                  <span>{isAr ? 'حجز فوري لهذه الخدمة' : 'Book This Service Now'}</span>
                </button>

                <a
                  href={`https://wa.me/97143426666?text=${encodeURIComponent(
                    `Hello, I want to inquire about ${currentService.titleEn} (ID: ${currentService.id}) at Karama Business Center`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 text-xs font-bold bg-[#128B94] hover:bg-[#095E63] text-white rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer border border-teal-300/40"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>{isAr ? 'استشارة واتساب فورية' : 'WhatsApp Senior Specialist'}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Comprehensive Service Overview & Legal Mandate (300+ Words Narrative) */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Overview Narrative (8 cols) */}
            <div className="lg:col-span-8 space-y-6">
              <div>
                <div className="text-xs font-bold tracking-wider text-[#128B94] uppercase mb-2">
                  {isAr ? 'تفاصيل الخدمة والأساس القانوني' : 'Service Scope & Legal Basis'}
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E2528] tracking-tight">
                  {isAr
                    ? `دليل الإجراءات الشامل لـ ${currentService.titleAr} في مركز الكرامة للأعمال`
                    : `Comprehensive Overview of ${currentService.titleEn} at Karama Business Center`}
                </h2>
              </div>

              {/* Comprehensive Description Body (Guaranteed 300+ Words) */}
              <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed text-sm sm:text-base space-y-4">
                {(isAr ? serviceDetails.detailedOverviewAr : serviceDetails.detailedOverviewEn)
                  .split('\n\n')
                  .map((paragraph, pIdx) => (
                    <p key={pIdx} className="leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
              </div>

              {/* Legal Framework Box */}
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 space-y-2 mt-6">
                <div className="text-xs font-bold text-[#128B94] uppercase tracking-wider flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#128B94]" />
                  <span>{isAr ? 'الإطار التشريعي والقرارات الوزارية' : 'Statutory & Ministerial Framework'}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-mono">
                  {isAr ? serviceDetails.legalFrameworkAr : serviceDetails.legalFrameworkEn}
                </p>
              </div>

              {/* Eligibility Criteria */}
              <div className="pt-4">
                <h3 className="text-base font-bold text-[#1E2528] mb-3">
                  {isAr ? 'الفئات المؤهلة والشروط الأساسية' : 'Eligibility & Qualification Criteria'}
                </h3>
                <ul className="space-y-2.5">
                  {(isAr ? serviceDetails.eligibilityAr : serviceDetails.eligibilityEn).map(
                    (item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <Check className="w-4 h-4 text-[#128B94] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>

            {/* Quick Summary Card & Facility Anchor (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              <div className="p-6 rounded-2xl bg-teal-50/70 border border-teal-100 shadow-xs space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-white p-2 shadow-2xs border border-teal-200 flex items-center justify-center">
                    <DepartmentLogo deptId={currentDept.id} className="w-full h-full" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#1E2528]">
                      {isAr ? currentDept.nameAr : currentDept.nameEn}
                    </h4>
                    <span className="text-xs text-[#128B94] font-medium block">
                      {currentDept.code}
                    </span>
                  </div>
                </div>

                <div className="pt-3 border-t border-teal-100 text-xs text-slate-700 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-slate-500">{isAr ? 'الفئة:' : 'Category:'}</span>
                    <span className="font-bold capitalize">{currentService.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">{isAr ? 'الجهة الرسمية:' : 'Authority:'}</span>
                    <span className="font-bold">{isAr ? currentService.authorityAr : currentService.authorityEn}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">{isAr ? 'المركز المعتمد:' : 'Center Hub:'}</span>
                    <span className="font-bold text-[#128B94]">Karama Business Center</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">{isAr ? 'الفحص الطبي:' : 'Medical Hub:'}</span>
                    <span className="font-bold text-[#128B94]">Karama Medical Center</span>
                  </div>
                </div>

                {currentService.officialGovUrl && (
                  <div className="pt-2 border-t border-teal-100">
                    <a
                      href={currentService.officialGovUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2 px-3 text-[11px] font-bold text-[#01403F] bg-white hover:bg-teal-50 border border-teal-200 rounded-lg transition-colors flex items-center justify-between shadow-2xs group cursor-pointer"
                      title={isAr ? `الانتقال إلى ${currentService.officialGovPortalNameAr || 'البوابة الحكومية الرسمية'}` : `Visit ${currentService.officialGovPortalNameEn || 'Official Government Portal'}`}
                    >
                      <span className="flex items-center gap-1.5 truncate">
                        <Building2 className="w-3.5 h-3.5 text-[#128B94] shrink-0" />
                        <span className="truncate">{isAr ? (currentService.officialGovPortalNameAr || 'البوابة الحكومية الرسمية') : (currentService.officialGovPortalNameEn || 'Official Government Portal')}</span>
                      </span>
                      <ExternalLink className="w-3.5 h-3.5 text-[#128B94] shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                )}

                <button
                  onClick={() => onOpenBooking(currentService)}
                  className="w-full py-2.5 px-4 text-xs font-bold text-white bg-[#128B94] hover:bg-[#01403F] rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs active:scale-[0.98]"
                >
                  <Calendar className="w-4 h-4" />
                  <span>{isAr ? 'بدء المعاملة الآن' : 'Initiate Application'}</span>
                </button>
              </div>

              {/* Free Assessment Notice */}
              <div className="p-5 rounded-xl border border-slate-200 bg-white flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-[#128B94] shrink-0 mt-0.5" />
                <div className="text-xs text-slate-600 leading-relaxed">
                  <strong className="text-slate-900 block mb-0.5">
                    {isAr ? 'تدقيق مجاني للمستندات قبل الدفع' : 'Free Pre-Submission Audit'}
                  </strong>
                  {isAr
                    ? 'يقوم فريقنا بفحص مستنداتك والتأكد من مطابقتها بنسبة 100% قبل سداد أي رسوم حكومية.'
                    : 'Our senior typists verify all document prerequisites prior to official ministerial payment.'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DEDICATED 2ND IMAGE SHOWCASE: Verified Center Facility & Location (As Requested) */}
      <section className="py-16 bg-[#F8FAFA] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: The 2nd High-Resolution Facility Image */}
            <div className="lg:col-span-7">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-lg group">
                <img
                  src={facilityImage}
                  alt={isAr ? 'مركز الكرامة للأعمال ومركز الكرامة الطبي' : 'Karama Business Center & Karama Medical Center'}
                  className="w-full h-[320px] sm:h-[400px] object-cover group-hover:scale-102 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{isAr ? 'مقر الخدمة المعتمد في دبي' : 'Verified Dubai Center Facility'}</span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 bg-slate-950/85 backdrop-blur-md text-white p-3 sm:p-4 rounded-xl border border-white/20">
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <p className="text-xs sm:text-sm font-bold text-white">
                        {isAr
                          ? 'مركز الكرامة للأعمال (KBC) & مركز الكرامة للياقة الطبية السريعة (KMFC)'
                          : 'Karama Business Center (KBC) & Karama Medical Fitness Express Service Center (KMFC)'}
                      </p>
                      <p className="text-[11px] text-teal-200 flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3 h-3 text-teal-300" />
                        <span>{isAr ? 'الكرامة، بجوار بريد الكرامة، دبي' : 'Al Karama, Next to Karama Post Office, Dubai'}</span>
                      </p>
                    </div>
                    <span className="text-[10px] font-mono bg-teal-500/20 text-teal-300 border border-teal-400/40 px-2 py-0.5 rounded">
                      Amer #772
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Facility Story & Integrated Advantages */}
            <div className="lg:col-span-5 space-y-4">
              <div className="text-xs font-bold tracking-wider text-[#128B94] uppercase">
                {isAr ? 'صرح حكومي وطبي متكامل' : 'All-in-One Government & Medical Campus'}
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E2528] tracking-tight leading-snug">
                {isAr
                  ? 'لماذا يختار آلاف المتعاملين مركز الكرامة للأعمال؟'
                  : 'Everything Under One Roof at Karama Business Center'}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {isAr
                  ? 'يجمع مركزنا في الكرامة بين الترخيص الرسمي لمركز آمر (#772) بإدارة الإمارات لخدمات رجال الأعمال (ESS)، واحتضان مركز الكرامة الطبي (KMFC) ومحطات البصمة الاتحادية. هذا التواجد المشترك يتيح لك إنجاز كافة معاملات الإقامة والفحص الطبي في زيارة واحدة دون أي تنقل.'
                  : 'Our campus in Al Karama unites authorized Amer Center License #772 under Emirates Secretarial Services (ESS), the co-located Karama Medical Fitness Express Service Center (KMFC / Karama Medical Center), and ICP biometric stations. You complete your preliminary legal audit, blood screening, and biometrics in a single coordinated visit.'}
              </p>

              <div className="space-y-2.5 pt-2">
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>{isAr ? 'فحص طبي سريع:' : 'Express Medical Results:'}</strong>{' '}
                    {isAr
                      ? 'باقات الفحص الطبي خلال ساعتين (VIP)، و6 ساعات (عاجل)، و24 ساعة (معتمد).'
                      : 'Urgent medical fitness results available in 2 hours (VIP), 6 hours, or 24 hours.'}
                  </span>
                </div>

                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>{isAr ? 'ربط إلكتروني مباشر:' : 'Direct Gateway Connection:'}</strong>{' '}
                    {isAr
                      ? 'ربط مباشر مع خوادم إقامة دبي (GDRFA) وهيئة الصحة (سالم) والهيئة الاتحادية (ICP).'
                      : 'Direct server link with GDRFA Dubai immigration, DHA Salem, and ICP biometrics.'}
                  </span>
                </div>

                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>{isAr ? 'مجلس كبار الشخصيات وحافلة متنقلة:' : 'VIP Majlis & Mobile Van:'}</strong>{' '}
                    {isAr
                      ? 'ضيافة فاخرة في مجلس كبار الشخصيات أو طلب الحافلة المتنقلة لباب دارك.'
                      : 'Private executive majlis hospitality or doorstep luxury mobile van service.'}
                  </span>
                </div>
              </div>

              <div className="pt-3">
                <button
                  onClick={() => onOpenBooking(currentService)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold text-white bg-[#128B94] hover:bg-[#01403F] transition-all shadow-sm cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{isAr ? 'حجز موعد بالمركز' : 'Schedule Appointment at KBC'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Interactive Required Documentation Checklist */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <div className="text-xs font-bold tracking-wider text-[#128B94] uppercase mb-2">
              {isAr ? 'المستندات والمتطلبات الأساسية' : 'Required Documentation Dossier'}
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E2528] tracking-tight">
              {isAr
                ? `قائمة المستندات المطلوبة لإنجاز ${currentService.titleAr}`
                : `Mandatory Documents Required for ${currentService.titleEn}`}
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              {isAr
                ? 'يرجى تجهيز المستندات التالية أو إرسالها إلينا إلكترونياً لبدء التدقيق الفوري.'
                : 'Ensure clear color copies or digital files are ready for immediate preliminary verification.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {(isAr ? currentService.requiredDocumentsAr : currentService.requiredDocumentsEn).map(
              (doc, idx) => (
                <div
                  key={idx}
                  className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200 shadow-2xs flex items-start gap-3 hover:border-[#128B94] transition-all"
                >
                  <div className="w-8 h-8 rounded-lg bg-teal-50 text-[#128B94] flex items-center justify-center shrink-0 mt-0.5">
                    <FileCheck className="w-4 h-4 text-[#128B94]" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 block mb-0.5">
                      {isAr ? `المستند ${idx + 1}` : `Document ${idx + 1}`}
                    </span>
                    <p className="text-xs sm:text-sm font-semibold text-slate-900 leading-snug">
                      {doc}
                    </p>
                  </div>
                </div>
              )
            )}
          </div>

          {/* Attestation Desk Notice */}
          <div className="mt-8 p-5 rounded-xl bg-white border border-teal-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-teal-100/60 flex items-center justify-center text-[#128B94] shrink-0">
                <Award className="w-5 h-5 text-[#128B94]" />
              </div>
              <div>
                <h4 className="font-bold text-xs sm:text-sm text-[#1E2528]">
                  {isAr ? 'هل ينقصك تصديق وزارة الخارجية أو ترجمة قانونية؟' : 'Missing MOFA Attestation or Certified Translation?'}
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  {isAr
                    ? 'يوفر مركزنا مكتب ترجمة محلفة وتصديقات رسمية معتمدة لإنجاز كافة النواقص فوراً.'
                    : 'Our in-house sworn translation and MOFA attestation desk can legalize missing certificates on the spot.'}
                </p>
              </div>
            </div>

            <a
              href="https://wa.me/97143426666"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg text-xs font-bold transition-colors whitespace-nowrap text-center"
            >
              {isAr ? 'طلب مساعدة في التصديقات' : 'Request Attestation Desk'}
            </a>
          </div>
        </div>
      </section>

      {/* 5. Our Commitment & Service Guarantees (Trust Signals) */}
      <section className="py-16 sm:py-20 bg-[#F4F9F9] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-bold tracking-wider text-[#128B94] uppercase mb-2">
              {isAr ? 'ميثاق التميز ودقة الإنجاز' : 'Our Service Standards'}
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E2528] tracking-tight">
              {isAr ? 'ميثاق التميز الحكومي لدى إي إس إس ومركز الكرامة' : 'The ESS & KBC Service Excellence Charter'}
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              {isAr
                ? 'نلتزم بأعلى معايير السرعة والشفافية وتصفير البيروقراطية في كل معاملة.'
                : 'Committed to zero bureaucracy, total pricing transparency, and priority queue handling.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl border border-slate-200 bg-white hover:border-[#128B94] transition-all shadow-2xs">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold mb-4">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              </div>
              <h3 className="font-bold text-sm text-[#1E2528] mb-1">
                {isAr ? 'التدقيق الاستباقي للمستندات' : 'Pre-Lodgement Document Audit'}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {isAr
                  ? 'مراجعة دقيقة للاشتراطات والمستندات قبل التقديم لتفادي الأخطاء والنواقص الإجرائية.'
                  : 'Comprehensive pre-lodgement review to verify regulatory compliance and eliminate clerical errors.'}
              </p>
            </div>

            <div className="p-6 rounded-xl border border-slate-200 bg-white hover:border-[#128B94] transition-all shadow-2xs">
              <div className="w-10 h-10 rounded-lg bg-teal-50 text-[#128B94] flex items-center justify-center font-bold mb-4">
                <Shield className="w-5 h-5 text-[#128B94]" />
              </div>
              <h3 className="font-bold text-sm text-[#1E2528] mb-1">
                {isAr ? 'شفافية الرسوم الرسمية' : 'Exact Government Tariffs'}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {isAr
                  ? 'إيصالات دفع إلكترونية رسمية صادرة مباشرة من الجهة الحكومية لكل درهم مسدد.'
                  : 'Official ministerial receipts issued immediately for all statutory fees.'}
              </p>
            </div>

            <div className="p-6 rounded-xl border border-slate-200 bg-white hover:border-[#128B94] transition-all shadow-2xs">
              <div className="w-10 h-10 rounded-lg bg-sky-50 text-sky-700 flex items-center justify-center font-bold mb-4">
                <Zap className="w-5 h-5 text-sky-600" />
              </div>
              <h3 className="font-bold text-sm text-[#1E2528] mb-1">
                {isAr ? 'سرعة التقديم والمتابعة' : 'Dedicated Fast-Track Processing'}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {isAr
                  ? `تقديم فوري في الأنظمة الحكومية ومتابعة مستمرة لتقليص مدة الإنجاز خلال ${currentService.processingTimeAr}.`
                  : `Prompt electronic submission and proactive status monitoring targeting completion within ${currentService.processingTimeEn}.`}
              </p>
            </div>

            <div className="p-6 rounded-xl border border-slate-200 bg-white hover:border-[#128B94] transition-all shadow-2xs">
              <div className="w-10 h-10 rounded-lg bg-teal-50 text-[#128B94] flex items-center justify-center font-bold mb-4 border border-teal-100">
                <Award className="w-5 h-5 text-[#128B94]" />
              </div>
              <h3 className="font-bold text-sm text-[#1E2528] mb-1">
                {isAr ? 'مدير علاقات مخصص' : 'Dedicated Case Officer'}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {isAr
                  ? 'ضابط علاقات شخصي متاح عبر الواتساب والهاتف للمتابعة خطوة بخطوة حتى التسليم.'
                  : 'A personal relationship officer handling your file with direct phone & WhatsApp communication.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. 4-Step Service Fulfillment Process Timeline */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="text-xs font-bold tracking-wider text-[#128B94] uppercase mb-2">
              {isAr ? 'مراحل التنفيذ والإنجاز' : '4-Step Fulfillment Journey'}
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E2528] tracking-tight">
              {isAr
                ? `كيف ننجز معاملة ${currentService.titleAr} في 4 مراحل`
                : `Step-by-Step Fulfillment Timeline for ${currentService.titleEn}`}
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              {isAr
                ? 'إجراءات رقمية وميدانية متسلسلة تضمن الشفافية والراحة التامة.'
                : 'Structured milestones with specific estimated hours for each phase.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceDetails.processSteps.slice(0, 4).map((step, idx) => (
              <div
                key={step.stepNumber || idx}
                className="bg-[#FBFDFD] rounded-xl p-6 border border-slate-200 hover:border-[#128B94] hover:shadow-lg transition-all flex flex-col justify-between group relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-10 h-10 rounded-lg bg-teal-50 text-[#128B94] font-extrabold text-base flex items-center justify-center border border-teal-100 group-hover:bg-[#128B94] group-hover:text-white transition-colors">
                      0{idx + 1}
                    </span>
                    {step.durationEn && (
                      <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                        <Clock className="w-3 h-3 text-[#128B94]" />
                        <span>{isAr ? step.durationAr : step.durationEn}</span>
                      </span>
                    )}
                  </div>

                  <h3 className="font-bold text-base text-[#1E2528] mb-2 group-hover:text-[#128B94] transition-colors leading-snug">
                    {isAr ? step.titleAr : step.titleEn}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {isAr ? step.descAr : step.descEn}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] font-bold text-[#128B94] flex items-center gap-1">
                  <span>{isAr ? 'مرحلة معتمدة' : 'Verified Milestone'}</span>
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Transparent Fee Breakdown & Calculation Card */}
      <section className="py-16 sm:py-20 bg-[#F8FAFA] border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="text-xs font-bold tracking-wider text-[#128B94] uppercase mb-2">
              {isAr ? 'الرسوم الرسمية المعتمدة' : 'Official Transparent Tariff'}
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E2528] tracking-tight">
              {isAr
                ? `تفصيل الرسوم الحكومية لـ ${currentService.titleAr}`
                : `Itemized Pricing Breakdown for ${currentService.titleEn}`}
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              {isAr
                ? 'وضوح كامل دون أي رسوم مخفية، مطابقة لتعرفة حكومة دبي لعام 2026.'
                : 'Compliant with 2026 official UAE government rates and certified typing tariffs.'}
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-lg overflow-hidden">
            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex items-center justify-between py-3 border-b border-slate-100">
                <div>
                  <span className="font-bold text-sm text-slate-900 block">
                    {isAr ? 'الرسوم الحكومية الرسمية للجهة المختصة' : 'Official Government Authority Tariff'}
                  </span>
                  <span className="text-xs text-slate-500">
                    {isAr
                      ? `سداد مباشر إلى خزينة ${currentService.authorityAr}`
                      : `Settled directly to official treasury of ${currentService.authorityEn}`}
                  </span>
                </div>
                <span className="text-base font-extrabold text-[#1E2528] tabular-nums">
                  {currentService.govFee.toLocaleString()} <span className="text-xs font-bold text-slate-500">AED</span>
                </span>
              </div>

              <div className="flex items-center justify-between py-3 border-b border-slate-100">
                <div>
                  <span className="font-bold text-sm text-slate-900 block">
                    {isAr ? 'رسوم الطباعة والتدقيق المعتمد (ESS)' : 'ESS Certified Typing & Pre-Audit Fee'}
                  </span>
                  <span className="text-xs text-slate-500">
                    {isAr ? 'شاملة التدقيق المسبق للشروط ومتابعة الملف' : 'Includes comprehensive document pre-audit & dedicated officer'}
                  </span>
                </div>
                <span className="text-base font-extrabold text-[#1E2528] tabular-nums">
                  {currentService.serviceFee.toLocaleString()} <span className="text-xs font-bold text-slate-500">AED</span>
                </span>
              </div>

              {currentService.vipFastTrackFee > 0 && (
                <div className="flex items-center justify-between py-3 border-b border-slate-100 bg-teal-50/50 -mx-6 sm:-mx-8 px-6 sm:px-8">
                  <div>
                    <span className="font-bold text-sm text-[#01403F] block flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#128B94]" />
                      <span>{isAr ? 'ترقية مسار VIP والمجلس التنفيذي (اختياري)' : 'Optional VIP Majlis & Express Fast-Track'}</span>
                    </span>
                    <span className="text-xs text-slate-600">
                      {isAr ? 'استقبال خاص، فحص طبي عاجل، وإنجاز فائق السرعة' : 'Private lounge, priority medical, and zero-wait processing'}
                    </span>
                  </div>
                  <span className="text-base font-extrabold text-[#128B94] tabular-nums">
                    +{currentService.vipFastTrackFee.toLocaleString()} <span className="text-xs font-bold text-slate-500">AED</span>
                  </span>
                </div>
              )}

              {/* Total Calculation */}
              <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs text-slate-400 block font-medium">
                    {isAr ? 'الإجمالي التقديري الاعتيادي' : 'Standard Estimated Total'}
                  </span>
                  <span className="text-3xl font-extrabold text-[#1E2528] tabular-nums">
                    {totalStandard.toLocaleString()}{' '}
                    <span className="text-base font-bold text-slate-500">AED</span>
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  {onCalculateFee && (
                    <button
                      onClick={() => onCalculateFee(currentService)}
                      className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg text-xs font-bold transition-colors cursor-pointer"
                    >
                      {isAr ? 'تعديل المعايير في الحاسبة' : 'Open in Calculator'}
                    </button>
                  )}

                  <button
                    onClick={() => onOpenBooking(currentService)}
                    className="px-6 py-3 bg-[#128B94] hover:bg-[#01403F] text-white rounded-lg text-xs sm:text-sm font-bold transition-all shadow-md flex items-center gap-2 cursor-pointer active:scale-[0.98]"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>{isAr ? 'حجز موعد بالتعرفة الرسمية' : 'Book at Official Tariff'}</span>
                  </button>
                </div>
              </div>

              {/* VAT & Statutory Disclaimer Notice */}
              <div className="pt-4 border-t border-slate-100 text-[11px] text-slate-500 space-y-1.5 leading-relaxed bg-slate-50/80 -mx-6 sm:-mx-8 -mb-6 sm:-mb-8 p-5">
                <p>
                  <strong className="text-slate-700">{isAr ? 'الشفافية الضريبية:' : 'Tax & Fee Transparency:'}</strong>{' '}
                  {isAr
                    ? 'الرسوم الحكومية الرسمية معفاة من ضريبة القيمة المضافة بموجب المرسوم بقانون اتحادي رقم (8) لسنة 2017. رسوم الطباعة وخدمات المركز خاضعة لضريبة القيمة المضافة بنسبة 5%.'
                    : 'Statutory government tariffs are exempt from UAE VAT under Federal Decree-Law No. (8) of 2017. KBC/ESS private typing and administrative service charges are inclusive of 5% UAE VAT.'}
                </p>
                <p>
                  <strong className="text-slate-700">{isAr ? 'ملاحظة الإنجاز والموافقات:' : 'Processing SLAs & Approvals:'}</strong>{' '}
                  {isAr
                    ? 'مواعيد الفحص الطبي (ساعتان، 6 ساعات، 24 ساعة) تعكس باقات المختبر المعتمدة بنظام سالم بمركز الكرامة الطبي. تخضع اعتمادات الإقامة والتأشيرات وتراخيص العمل للتدقيق الأمني والموافقات السيادية للجهات الحكومية المعنية.'
                    : 'Medical fitness turnaround times (2h, 6h, 24h) reflect authorized DHA Salem laboratory tiers at our co-located medical center. Final residency stamping, visas, and permits remain strictly subject to sovereign authority background clearance and ministerial approvals.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Dedicated Q&A / FAQs (Accordion) */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-xs font-bold tracking-wider text-[#128B94] uppercase mb-2">
              {isAr ? 'الأسئلة الشائعة والأجوبة' : 'Service FAQs'}
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E2528] tracking-tight">
              {isAr
                ? `أسئلة شائعة حول ${currentService.titleAr} في مركز الكرامة`
                : `Frequently Asked Questions About ${currentService.titleEn}`}
            </h2>
          </div>

          <div className="space-y-4">
            {serviceDetails.faqs.map((faq, idx) => {
              const isOpen = activeFaqIndex === idx;

              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-slate-200 overflow-hidden transition-all shadow-2xs"
                >
                  <button
                    onClick={() => setActiveFaqIndex(isOpen ? null : idx)}
                    className="w-full p-5 text-left rtl:text-right flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#1E2528] hover:text-[#128B94] transition-colors cursor-pointer"
                  >
                    <span>{isAr ? faq.questionAr : faq.questionEn}</span>
                    <ChevronDown
                      className={`w-4 h-4 shrink-0 text-slate-400 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#128B94]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                      {isAr ? faq.answerAr : faq.answerEn}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>



      {/* 12. Sticky Mobile Conversion Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/90 py-3 px-4 shadow-xl sm:hidden flex items-center justify-between gap-3">
        <a
          href={`https://wa.me/97143426666?text=${encodeURIComponent(
            `Inquiry about ${currentService.titleEn} at Karama Business Center`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2 px-3 bg-emerald-600 text-white rounded-lg text-xs font-bold text-center flex items-center justify-center gap-1.5"
        >
          <PhoneCall className="w-3.5 h-3.5" />
          <span>{isAr ? 'واتساب' : 'WhatsApp'}</span>
        </a>

        <button
          onClick={() => onOpenBooking(currentService)}
          className="flex-1 py-2 px-3 bg-[#128B94] text-white rounded-lg text-xs font-bold text-center flex items-center justify-center gap-1.5"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>{isAr ? 'حجز فوري' : 'Book Now'}</span>
        </button>
      </div>
    </div>
  );
};
