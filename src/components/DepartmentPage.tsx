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
  Award,
  ChevronRight,
  Building2,
  Users,
  Search,
  ExternalLink
} from 'lucide-react';
import { Department, Language, ServiceItem } from '../types';
import { DEPARTMENTS, SERVICES } from '../data/departmentsData';
import { TRANSLATIONS } from '../data/translations';
import { getDepartmentDetails } from '../data/departmentExtendedData';
import { DepartmentLogo } from './DepartmentLogo';
import { OFFICIAL_MAPS, OFFICIAL_SAME_AS } from '../data/socialAndMapLinks';
import { GoogleReviewsSection } from './GoogleReviewsSection';

interface DepartmentPageProps {
  deptId: string;
  language: Language;
  onNavigateToHome: () => void;
  onNavigateToService: (serviceId: string) => void;
  onNavigateToDepartment?: (deptId: string) => void;
  onOpenBooking: (service?: ServiceItem) => void;
}

export const DepartmentPage: React.FC<DepartmentPageProps> = ({
  deptId,
  language,
  onNavigateToHome,
  onNavigateToService,
  onNavigateToDepartment,
  onOpenBooking,
}) => {
  const t = TRANSLATIONS[language];
  const [activeFaqIndex, setActiveFaqIndex] = useState<number | null>(0);
  const [searchFilter, setSearchFilter] = useState('');

  // Find department
  const currentDept = DEPARTMENTS.find((d) => d.id === deptId) || DEPARTMENTS[0];
  const deptDetails = getDepartmentDetails(currentDept);

  // Filter services belonging to this department
  const departmentServices = SERVICES.filter((s) => s.departmentId === currentDept.id);
  const filteredServices = departmentServices.filter((s) => {
    if (!searchFilter.trim()) return true;
    const q = searchFilter.toLowerCase();
    return (
      s.titleEn.toLowerCase().includes(q) ||
      s.titleAr.toLowerCase().includes(q) ||
      s.shortDescEn.toLowerCase().includes(q) ||
      s.shortDescAr.toLowerCase().includes(q)
    );
  });

  // Dynamic SEO & Structured Data Injection
  useEffect(() => {
    const pageTitle =
      language === 'ar'
        ? `${currentDept.nameAr} - الخدمات الحكومية المعتمدة | الإمارات لخدمات رجال الأعمال (ESS)`
        : `${currentDept.nameEn} Services Dubai | Authorized Government Center | ESS`;
    const metaDesc =
      language === 'ar'
        ? `دليل خدمات ${currentDept.nameAr} في دبي. إنجاز فوري للإقامات، الرخص، العقود والمعاملات الحكومية الرسمية مع كفالة تامة وتتبع مباشر.`
        : `Official ${currentDept.nameEn} government processing in Dubai. Fast-track residency, corporate setup, and labor clearances with certified typing and zero rejection audit.`;

    document.title = pageTitle;

    // Meta Description
    let metaDescriptionTag = document.querySelector('meta[name="description"]');
    if (!metaDescriptionTag) {
      metaDescriptionTag = document.createElement('meta');
      metaDescriptionTag.setAttribute('name', 'description');
      document.head.appendChild(metaDescriptionTag);
    }
    metaDescriptionTag.setAttribute('content', metaDesc);

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
    canonicalTag.setAttribute('href', `${window.location.origin}/#department/${currentDept.id}`);

    // Structured Data JSON-LD
    const jsonLdData = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'GovernmentService',
          '@id': `${window.location.origin}/#department/${currentDept.id}`,
          name: language === 'ar' ? currentDept.nameAr : currentDept.nameEn,
          serviceType: 'Public Administration & Businessmen Services',
          provider: {
            '@type': 'LocalBusiness',
            name: 'Emirates Secretarial Services & Karama Business Center',
            telephone: '+97143426666',
            hasMap: OFFICIAL_MAPS.shareUrl,
            sameAs: [...OFFICIAL_SAME_AS],
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Al Karama, Next to Karama Post Office',
              addressLocality: 'Dubai',
              addressCountry: 'AE',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: OFFICIAL_MAPS.coordinates.latitude,
              longitude: OFFICIAL_MAPS.coordinates.longitude,
            },
            url: window.location.origin,
          },
          areaServed: {
            '@type': 'AdministrativeArea',
            name: 'Dubai, United Arab Emirates',
          },
          description: language === 'ar' ? currentDept.descriptionAr : currentDept.descriptionEn,
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: language === 'ar' ? 'الرئيسية' : 'Home',
              item: `${window.location.origin}/#home`,
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: language === 'ar' ? 'الدوائر الحكومية' : 'Departments',
              item: `${window.location.origin}/#departments`,
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: language === 'ar' ? currentDept.nameAr : currentDept.nameEn,
              item: `${window.location.origin}/#department/${currentDept.id}`,
            },
          ],
        },
        {
          '@type': 'FAQPage',
          mainEntity: deptDetails.faqs.map((faq) => ({
            '@type': 'Question',
            name: language === 'ar' ? faq.questionAr : faq.questionEn,
            acceptedAnswer: {
              '@type': 'Answer',
              text: language === 'ar' ? faq.answerAr : faq.answerEn,
            },
          })),
        },
      ],
    };

    let scriptTag = document.getElementById('jsonld-department');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'jsonld-department';
      scriptTag.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(jsonLdData);

    return () => {
      const tag = document.getElementById('jsonld-department');
      if (tag) tag.remove();
    };
  }, [currentDept, deptDetails, language]);

  return (
    <div className="bg-white min-h-screen text-[#1E2528] pt-18 sm:pt-22 lg:pt-24">
      {/* 1. Main Hero Banner with Architectural Depth */}
      <section className="relative bg-gradient-to-br from-[#01403F] via-[#095E63] to-[#128B94] text-white py-14 sm:py-20 overflow-hidden">
        {/* Architectural Subtle Overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-15">
          <img
            src={deptDetails.heroImage}
            alt={currentDept.nameEn}
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#01403F]/90 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-teal-200 mb-6 flex-wrap">
            <button
              onClick={onNavigateToHome}
              className="hover:text-white transition-colors cursor-pointer flex items-center gap-1"
            >
              <span>{language === 'ar' ? 'الرئيسية' : 'Home'}</span>
            </button>
            <ChevronRight className="w-3.5 h-3.5 rtl:rotate-180 text-teal-300" />
            <button
              onClick={onNavigateToHome}
              className="hover:text-white transition-colors cursor-pointer"
            >
              <span>{language === 'ar' ? 'الدوائر الحكومية' : 'Departments'}</span>
            </button>
            <ChevronRight className="w-3.5 h-3.5 rtl:rotate-180 text-teal-300" />
            <span className="text-white font-semibold" aria-current="page">
              {language === 'ar' ? currentDept.nameAr : currentDept.nameEn}
            </span>
          </nav>

          {/* Department Main Lockup */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-3xl">
              {/* Badge & Code */}
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <div className="w-16 h-16 rounded-xl bg-white p-2 shadow-md flex items-center justify-center shrink-0">
                  <DepartmentLogo deptId={currentDept.id} className="w-full h-full" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold tracking-wider px-2.5 py-1 bg-white/20 text-white rounded">
                      {currentDept.code}
                    </span>
                    <span className="text-xs font-semibold text-teal-100 flex items-center gap-1">
                      <Shield className="w-3.5 h-3.5 text-teal-300" />
                      <span>{language === 'ar' ? currentDept.accreditationAr : currentDept.accreditationEn}</span>
                    </span>
                    {currentDept.officialGovUrl && (
                      <a
                        href={currentDept.officialGovUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all cursor-pointer backdrop-blur-sm"
                        title={language === 'ar' ? `زيارة ${currentDept.officialGovPortalNameAr || 'البوابة الحكومية الرسمية'}` : `Visit ${currentDept.officialGovPortalNameEn || 'Official Government Portal'}`}
                      >
                        <Building2 className="w-3 h-3 text-teal-300" />
                        <span>{language === 'ar' ? (currentDept.officialGovPortalNameAr || 'البوابة الحكومية الرسمية') : (currentDept.officialGovPortalNameEn || 'Official Government Portal')}</span>
                        <ExternalLink className="w-3 h-3 text-teal-200" />
                      </a>
                    )}
                  </div>
                  <div className="text-xs text-teal-200 mt-1">
                    {language === 'ar' ? currentDept.subTitleAr : currentDept.subTitleEn}
                  </div>
                </div>
              </div>

              {/* Title & Subheadline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                {language === 'ar' ? currentDept.nameAr : currentDept.nameEn}
              </h1>

              <p className="mt-4 text-base sm:text-lg text-teal-50 leading-relaxed font-normal">
                {language === 'ar' ? currentDept.descriptionAr : currentDept.descriptionEn}
              </p>

              {/* Quick Trust Highlights */}
              <div className="mt-8 pt-6 border-t border-white/20 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
                <div>
                  <span className="text-teal-200 block">{language === 'ar' ? 'الخدمات المعتمدة' : 'Authorized Services'}</span>
                  <span className="text-lg font-extrabold text-white">
                    {departmentServices.length || currentDept.serviceCount}+ {language === 'ar' ? 'خدمة' : 'Services'}
                  </span>
                </div>
                <div>
                  <span className="text-teal-200 block">{language === 'ar' ? 'معدل الإنجاز' : 'Turnaround SLA'}</span>
                  <span className="text-lg font-extrabold text-white">24 - 48 {language === 'ar' ? 'ساعة' : 'Hours'}</span>
                </div>
                <div>
                  <span className="text-teal-200 block">{language === 'ar' ? 'مؤشر الاعتماد' : 'First-Pass Rate'}</span>
                  <span className="text-lg font-extrabold text-white">99.8% {language === 'ar' ? 'قبول' : 'Approval'}</span>
                </div>
                <div>
                  <span className="text-teal-200 block">{language === 'ar' ? 'الشفافية المالية' : 'Gov Tariff'}</span>
                  <span className="text-lg font-extrabold text-white">100% {language === 'ar' ? 'رسمي' : 'Official'}</span>
                </div>
              </div>
            </div>

            {/* CTA Box (Google Ads High Conversion) */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/20 text-white lg:w-[380px] shrink-0 shadow-xl">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-200 mb-2">
                <Sparkles className="w-4 h-4 text-teal-300" />
                <span>{language === 'ar' ? 'حجز فوري ومباشر' : 'Direct Booking Desk'}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 leading-snug">
                {language === 'ar' ? 'أنجز معاملتك اليوم بأولوية خاصة' : 'Fast-Track Your Application Today'}
              </h3>
              <p className="text-xs text-teal-100 mb-6 leading-relaxed">
                {language === 'ar'
                  ? 'اختر بين زيارة مركزنا على شارع الشيخ زايد، جناح مجلس VIP، أو حافلة المعاملات المتنقلة لباب دارك.'
                  : 'Choose between our flagship center, private VIP Majlis, or luxury mobile van at your doorstep.'}
              </p>

              <div className="space-y-3">
                <button
                  onClick={() => onOpenBooking(departmentServices[0])}
                  className="w-full py-3 px-4 text-xs sm:text-sm font-bold bg-white text-[#01403F] hover:bg-teal-50 rounded-lg transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
                >
                  <Calendar className="w-4 h-4 text-[#128B94]" />
                  <span>{language === 'ar' ? 'حجز موعد / حافلة متنقلة' : 'Book Appointment / Van'}</span>
                </button>

                <a
                  href="https://wa.me/97143426666"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 text-xs font-bold bg-[#128B94] hover:bg-[#095E63] text-white rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer border border-teal-300/40"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>{language === 'ar' ? 'محادثة فورية مع الضابط المختص' : 'WhatsApp Senior Officer'}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. In-Depth About Department Story & Legal Mandate */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Story Content (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="text-xs font-bold tracking-wider text-[#128B94] uppercase mb-2">
                  {language === 'ar' ? 'عن الدائرة واختصاصاتها' : 'Department Profile & Jurisdiction'}
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E2528] tracking-tight">
                  {language === 'ar'
                    ? `دور ${currentDept.nameAr} في المنظومة الحكومية بدبي`
                    : `About ${currentDept.nameEn} Operations at ESS`}
                </h2>
              </div>

              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                {deptDetails.aboutStoryEn && (language === 'ar' ? deptDetails.aboutStoryAr : deptDetails.aboutStoryEn)}
              </p>

              <div className="p-5 rounded-xl bg-teal-50/60 border border-teal-100 text-slate-800 space-y-2">
                <div className="text-xs font-bold text-[#128B94] uppercase tracking-wider flex items-center gap-2">
                  <Shield className="w-4 h-4 text-[#128B94]" />
                  <span>{language === 'ar' ? 'النطاق والاختصاص الوزاري' : 'Official Mandate & Oversight'}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {deptDetails.mandateEn && (language === 'ar' ? deptDetails.mandateAr : deptDetails.mandateEn)}
                </p>
              </div>

              {/* Core Strengths Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {deptDetails.whyChooseBulletPointsEn.slice(0, 4).map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#128B94] shrink-0 mt-0.5" />
                    <span>
                      {language === 'ar' ? deptDetails.whyChooseBulletPointsAr[idx] || bullet : bullet}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Highlight Card (5 cols) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl group">
                <img
                  src={deptDetails.galleryImages[0]?.url || deptDetails.heroImage}
                  alt={deptDetails.galleryImages[0]?.titleEn || currentDept.nameEn}
                  className="w-full h-[360px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent flex flex-col justify-end p-6 text-white">
                  <div className="text-xs font-bold text-teal-300 uppercase tracking-wider mb-1">
                    {language === 'ar' ? 'مرفق حكومي تنفيذي' : 'Executive Facility'}
                  </div>
                  <h4 className="text-lg font-bold text-white">
                    {language === 'ar'
                      ? deptDetails.galleryImages[0]?.titleAr || currentDept.nameAr
                      : deptDetails.galleryImages[0]?.titleEn || currentDept.nameEn}
                  </h4>
                  <p className="text-xs text-slate-200 mt-1 line-clamp-2">
                    {language === 'ar'
                      ? deptDetails.galleryImages[0]?.captionAr
                      : deptDetails.galleryImages[0]?.captionEn}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 4-Step Department Fulfillment Process */}
      <section className="py-16 sm:py-20 bg-[#F4F9F9] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="text-xs font-bold tracking-wider text-[#128B94] uppercase mb-2">
              {language === 'ar' ? 'آلية العمل الحكومية المعتمدة' : 'Official 4-Step Workflow'}
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E2528] tracking-tight">
              {language === 'ar'
                ? `كيف تتم معالجة معاملات ${currentDept.nameAr} في 4 خطوات`
                : `How We Process ${currentDept.nameEn} in 4 Streamlined Steps`}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              {language === 'ar'
                ? 'من التدقيق الأولي وحتى استلام المستندات المصدقة رقمياً وميدانياً، دون أي تعقيد أو طوابير انتظار.'
                : 'From pre-submission legal audit to verified digital stamping and doorstep delivery.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deptDetails.processSteps.slice(0, 4).map((step, idx) => (
              <div
                key={step.stepNumber || idx}
                className="bg-white rounded-xl p-6 border border-slate-200 hover:border-[#128B94] hover:shadow-lg transition-all flex flex-col justify-between relative group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-10 h-10 rounded-lg bg-teal-50 text-[#128B94] font-extrabold text-base flex items-center justify-center border border-teal-100 group-hover:bg-[#128B94] group-hover:text-white transition-colors">
                      0{idx + 1}
                    </span>
                    {step.durationEn && (
                      <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                        <Clock className="w-3 h-3 text-[#128B94]" />
                        <span>{language === 'ar' ? step.durationAr : step.durationEn}</span>
                      </span>
                    )}
                  </div>

                  <h3 className="font-bold text-base text-[#1E2528] mb-2 group-hover:text-[#128B94] transition-colors leading-snug">
                    {language === 'ar' ? step.titleAr : step.titleEn}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {language === 'ar' ? step.descAr : step.descEn}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] font-bold text-[#128B94] flex items-center gap-1">
                  <span>{language === 'ar' ? 'تدقيق المتطلبات' : 'Compliance Pre-Audit'}</span>
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Visual Gallery (3 to 4 High-Resolution Curated Images) */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <div className="text-xs font-bold tracking-wider text-[#128B94] uppercase mb-2">
                {language === 'ar' ? 'معرض المرافق التنفيذية' : 'Executive Facilities Gallery'}
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E2528] tracking-tight">
                {language === 'ar' ? 'بيئة إنجاز المعاملات بمعايير 5 نجوم' : '5-Star Government Hospitality Environment'}
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md">
              {language === 'ar'
                ? 'مرافق مجهزة بأحدث التقنيات وأعلى معايير الخصوصية لخدمة رجال الأعمال والمستثمرين.'
                : 'State-of-the-art facilities designed for maximum privacy, efficiency, and speed.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {deptDetails.galleryImages.map((img, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-md transition-all group flex flex-col justify-between"
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={img.url}
                    alt={img.titleEn}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-slate-900/70 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded">
                    Facility {idx + 1}
                  </div>
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-sm text-[#1E2528] leading-snug group-hover:text-[#128B94] transition-colors">
                      {language === 'ar' ? img.titleAr : img.titleEn}
                    </h3>
                    <p className="mt-1 text-xs text-slate-500 leading-relaxed line-clamp-2">
                      {language === 'ar' ? img.captionAr : img.captionEn}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. All Services of this Department with Direct Links to Each Service Page */}
      <section id="services-list" className="py-16 sm:py-20 bg-[#F8FAFA] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div>
              <div className="text-xs font-bold tracking-wider text-[#128B94] uppercase mb-2">
                {language === 'ar' ? 'الدليل الرسمي للخدمات' : 'Department Services Catalog'}
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E2528] tracking-tight">
                {language === 'ar'
                  ? `جميع خدمات ${currentDept.nameAr} (${departmentServices.length})`
                  : `All Services Under ${currentDept.nameEn} (${departmentServices.length})`}
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                {language === 'ar'
                  ? 'انقر على أي خدمة لمعرفة المتطلبات الكاملة، الرسوم الحكومية، والبدء في الإجراءات فوراً.'
                  : 'Click on any service to view required documents, legal basis, transparent fees, and initiate booking.'}
              </p>
            </div>

            {/* Quick Search inside Department Services */}
            <div className="w-full md:w-72 relative">
              <input
                type="text"
                value={searchFilter}
                onChange={(e) => setSearchFilter(e.target.value)}
                placeholder={language === 'ar' ? 'بحث في خدمات هذه الدائرة...' : 'Search within department...'}
                className="w-full pl-9 pr-4 py-2.5 text-xs bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#128B94] focus:border-transparent"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3 rtl:left-auto rtl:right-3" />
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => {
              const totalEst = service.govFee + service.serviceFee;

              return (
                <div
                  key={service.id}
                  className="bg-white rounded-xl border border-slate-200 hover:border-[#128B94] hover:shadow-lg transition-all p-6 flex flex-col justify-between group"
                >
                  <div>
                    {/* Header: Authority & Popular Badge */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-xs font-bold text-[#128B94]">
                        {language === 'ar' ? service.authorityAr : service.authorityEn}
                      </span>
                      {service.isPopular && (
                        <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 flex items-center gap-1">
                          <Sparkles className="w-2.5 h-2.5 text-emerald-600" />
                          {language === 'ar' ? 'الأكثر طلباً' : 'Popular'}
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-base font-bold text-[#1E2528] group-hover:text-[#128B94] transition-colors leading-snug mb-2">
                      {language === 'ar' ? service.titleAr : service.titleEn}
                    </h3>

                    {/* Processing Time */}
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-3">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{language === 'ar' ? service.processingTimeAr : service.processingTimeEn}</span>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-3">
                      {language === 'ar' ? service.shortDescAr : service.shortDescEn}
                    </p>

                    {/* Key Benefits Preview */}
                    <ul className="space-y-1.5 text-[11px] text-slate-700 mb-4 pt-3 border-t border-slate-100">
                      {service.keyBenefitsEn.slice(0, 2).map((benefit, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#128B94] shrink-0 mt-0.5" />
                          <span className="line-clamp-1">
                            {language === 'ar' ? service.keyBenefitsAr[bIdx] || benefit : benefit}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pricing Strip & Action Buttons */}
                  <div className="pt-4 border-t border-slate-100">
                    <div className="flex items-baseline justify-between mb-4">
                      <div>
                        <span className="text-[10px] text-slate-400 block font-medium">
                          {language === 'ar' ? 'الرسوم التقديرية' : 'Estimated Tariff'}
                        </span>
                        <span className="text-lg font-extrabold text-[#1E2528] tabular-nums">
                          {totalEst.toLocaleString()} <span className="text-xs font-bold text-slate-500">AED</span>
                        </span>
                      </div>
                      <span className="text-[10px] text-slate-500">
                        {language === 'ar' ? 'شامل الرسوم والطباعة' : 'Gov + Typing fee'}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      {/* Direct Link to Single Service Page */}
                      <button
                        onClick={() => onNavigateToService(service.id)}
                        className="w-full py-2 px-3 text-xs font-bold text-[#128B94] bg-teal-50 hover:bg-teal-100 rounded-lg transition-colors flex items-center justify-center gap-1 cursor-pointer"
                        title="View Full Documentation & Legal Details"
                      >
                        <span>{language === 'ar' ? 'صفحة الخدمة' : 'View Page'}</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>

                      {/* Direct Book Button */}
                      <button
                        onClick={() => onOpenBooking(service)}
                        className="w-full py-2 px-3 text-xs font-bold text-white bg-[#128B94] hover:bg-[#01403F] rounded-lg transition-colors flex items-center justify-center gap-1 cursor-pointer active:scale-[0.98]"
                      >
                        <Calendar className="w-3 h-3" />
                        <span>{language === 'ar' ? 'حجز فوري' : 'Book Now'}</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Why Choose ESS for this Department (Bullet Points & Service Standards) */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-bold tracking-wider text-[#128B94] uppercase mb-2">
              {language === 'ar' ? 'معايير الجودة والالتزام' : 'Our Commitment & Service Standards'}
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E2528] tracking-tight">
              {language === 'ar'
                ? `لماذا تختار الإمارات لخدمات رجال الأعمال لمعاملات ${currentDept.nameAr}؟`
                : `Why Choose Emirates Secretariat Services for ${currentDept.nameEn}?`}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deptDetails.whyChooseBulletPointsEn.map((point, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl border border-slate-200/90 bg-[#FBFDFD] hover:border-[#128B94] transition-all flex items-start gap-3"
              >
                <div className="w-8 h-8 rounded-lg bg-teal-100/60 text-[#128B94] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-[#128B94]" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#1E2528] mb-1">
                    {language === 'ar' ? `الميزة ${idx + 1}` : `Core Standard ${idx + 1}`}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {language === 'ar' ? deptDetails.whyChooseBulletPointsAr[idx] || point : point}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Department Q&A / FAQs (Accordions) */}
      <section className="py-16 sm:py-20 bg-[#F4F9F9] border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-xs font-bold tracking-wider text-[#128B94] uppercase mb-2">
              {language === 'ar' ? 'الأسئلة الشائعة والمعلومات' : 'Frequently Asked Questions'}
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E2528] tracking-tight">
              {language === 'ar'
                ? `أهم الأسئلة الشائعة حول ${currentDept.nameAr}`
                : `Frequently Asked Questions About ${currentDept.nameEn}`}
            </h2>
          </div>

          <div className="space-y-4">
            {deptDetails.faqs.map((faq, idx) => {
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
                    <span>{language === 'ar' ? faq.questionAr : faq.questionEn}</span>
                    <ChevronDown
                      className={`w-4 h-4 shrink-0 text-slate-400 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#128B94]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                      {language === 'ar' ? faq.answerAr : faq.answerEn}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. Verified Reviews & Ratings (Unified Google Reviews Layout) */}
      <GoogleReviewsSection
        language={language}
        departmentId={deptId}
        title={
          language === 'ar'
            ? `تقييمات Google الموثقة لـ ${currentDept.nameAr}`
            : `Verified Google Reviews for ${currentDept.nameEn}`
        }
        subtitle={
          language === 'ar'
            ? `تجارب حقيقية موثقة من مراجعي قسم ${currentDept.nameAr} على خرائط Google`
            : `Real verified client experiences for ${currentDept.nameEn} on Google Maps`
        }
      />

      {/* 9. Center Location & Contact Bar */}
      <section className="py-12 bg-[#1E2528] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#128B94] shrink-0 mt-1" />
              <div>
                <h4 className="text-sm font-bold text-white">
                  {language === 'ar' ? 'مقر المركز وساعات العمل الرسمية' : 'Official Processing Center Location'}
                </h4>
                <p className="text-xs text-slate-300 mt-0.5">
                  {language === 'ar'
                    ? 'مركز الكرامة للأعمال، الكرامة، بجوار بريد الكرامة، دبي · مواقف متاحة لمتعاملي المركز'
                    : 'Karama Business Center, Al Karama, Next to Karama Post Office, Dubai · Easy Visitor Parking'}
                </p>
                <p className="text-[11px] text-teal-300 mt-1">
                  {language === 'ar' ? deptDetails.contactDeskAr : deptDetails.contactDeskEn}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 flex-wrap">
              <a
                href={OFFICIAL_MAPS.shareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-teal-200 text-xs font-bold transition-colors flex items-center gap-2 border border-teal-400/30"
              >
                <MapPin className="w-3.5 h-3.5 text-teal-300" />
                <span>{language === 'ar' ? 'ملف جوجل الرسمي والخريطة' : 'Official Google Profile & Map'}</span>
              </a>

              <a
                href="tel:043426666"
                className="px-4 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-colors flex items-center gap-2 border border-white/20"
              >
                <PhoneCall className="w-3.5 h-3.5 text-teal-300" />
                <span dir="ltr">04-342-6666</span>
              </a>

              <button
                onClick={() => onOpenBooking(departmentServices[0])}
                className="px-5 py-2.5 rounded-lg bg-[#128B94] hover:bg-[#01403F] text-white text-xs font-bold transition-all shadow-md flex items-center gap-2 cursor-pointer active:scale-[0.98]"
              >
                <Calendar className="w-4 h-4" />
                <span>{language === 'ar' ? 'حجز موعد فوري' : 'Book Appointment'}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Sticky Mobile / Bottom Conversion Bar for Google Ads */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/90 py-3 px-4 shadow-xl sm:hidden flex items-center justify-between gap-3">
        <a
          href="https://wa.me/97143426666"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2 px-3 bg-emerald-600 text-white rounded-lg text-xs font-bold text-center flex items-center justify-center gap-1.5"
        >
          <PhoneCall className="w-3.5 h-3.5" />
          <span>{language === 'ar' ? 'واتساب' : 'WhatsApp'}</span>
        </a>

        <button
          onClick={() => onOpenBooking(departmentServices[0])}
          className="flex-1 py-2 px-3 bg-[#128B94] text-white rounded-lg text-xs font-bold text-center flex items-center justify-center gap-1.5"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>{language === 'ar' ? 'حجز موعد' : 'Book Now'}</span>
        </button>
      </div>
    </div>
  );
};
