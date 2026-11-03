import React, { useState, useMemo } from 'react';
import {
  Calculator,
  ArrowRight,
  ShieldCheck,
  Clock,
  CheckCircle2,
  FileText,
  Globe2,
  HeartPulse,
  Building2,
  Search,
  X,
  FileCheck,
  Sparkles,
  Layers,
  ChevronRight,
  ExternalLink,
  PhoneCall,
  DollarSign,
  Briefcase
} from 'lucide-react';
import { Language, ServiceItem } from '../types';
import { DEPARTMENTS, SERVICES } from '../data/departmentsData';
import { TRANSLATIONS } from '../data/translations';
import { DepartmentLogo } from './DepartmentLogo';
import {
  IMMIGRATION_PACKAGES,
  IMMIGRATION_STANDALONE_PRICES,
  OHC_CATEGORIES_PRICELIST,
  TASHEEL_CONTRACTS_PRICES,
  TASHEEL_CANCELLATION_PRICES,
  ATTESTATION_SERVICES_SUMMARY,
  ATTESTATION_COUNTRIES_PRICELIST,
  CONSULATE_FEES_PRICELIST,
  ImmigrationPackage
} from '../data/officialPriceListData';

interface FeeCalculatorProps {
  language: Language;
  onBookWithEstimate: (service: ServiceItem, tier: 'flagship' | 'vip_majlis' | 'doorstep_van') => void;
  preselectedServiceId?: string;
}

export const FeeCalculator: React.FC<FeeCalculatorProps> = ({
  language,
  onBookWithEstimate,
  preselectedServiceId,
}) => {
  const t = TRANSLATIONS[language];
  const isAr = language === 'ar';

  // Calculator Modes
  type CalcMode = 'packages' | 'ohc' | 'attestation' | 'general';
  const [activeMode, setActiveMode] = useState<CalcMode>('packages');

  // Modal for Full Price Sheet
  const [showFullSheetModal, setShowFullSheetModal] = useState(false);

  // 1. Package Mode State
  const [selectedPackageId, setSelectedPackageId] = useState<string>(
    IMMIGRATION_PACKAGES[0]?.id || 'employee-residence'
  );
  const activePackage: ImmigrationPackage = useMemo(() => {
    return (
      IMMIGRATION_PACKAGES.find((p) => p.id === selectedPackageId) ||
      IMMIGRATION_PACKAGES[0]
    );
  }, [selectedPackageId]);

  // 2. OHC Mode State
  const [ohcSearch, setOhcSearch] = useState('');
  const [selectedOhcIndex, setSelectedOhcIndex] = useState<number>(0);
  const filteredOhcList = useMemo(() => {
    if (!ohcSearch.trim()) return OHC_CATEGORIES_PRICELIST;
    const q = ohcSearch.toLowerCase();
    return OHC_CATEGORIES_PRICELIST.filter(
      (item) =>
        item.categoryEn.toLowerCase().includes(q) ||
        item.categoryAr.includes(q) ||
        item.sr.toString().includes(q)
    );
  }, [ohcSearch]);
  const activeOhcItem = filteredOhcList[selectedOhcIndex] || filteredOhcList[0] || OHC_CATEGORIES_PRICELIST[0];

  // 3. Attestation Mode State
  const [attestationSubTab, setAttestationSubTab] = useState<'countries' | 'consulates'>('countries');
  const [countrySearch, setCountrySearch] = useState('');
  const filteredCountries = useMemo(() => {
    if (!countrySearch.trim()) return ATTESTATION_COUNTRIES_PRICELIST;
    const q = countrySearch.toLowerCase();
    return ATTESTATION_COUNTRIES_PRICELIST.filter(
      (c) =>
        c.countryEn.toLowerCase().includes(q) ||
        c.countryAr.includes(q) ||
        c.documentTypeEn.toLowerCase().includes(q)
    );
  }, [countrySearch]);

  const [consulateSearch, setConsulateSearch] = useState('');
  const filteredConsulates = useMemo(() => {
    if (!consulateSearch.trim()) return CONSULATE_FEES_PRICELIST;
    const q = consulateSearch.toLowerCase();
    return CONSULATE_FEES_PRICELIST.filter(
      (c) =>
        c.countryEn.toLowerCase().includes(q) ||
        c.countryAr.includes(q) ||
        c.type.toLowerCase().includes(q)
    );
  }, [consulateSearch]);

  // 4. General Department Calculator State
  const defaultService =
    SERVICES.find((s) => s.id === preselectedServiceId) || SERVICES[0];
  const [selectedDeptId, setSelectedDeptId] = useState<string>(defaultService.departmentId);
  const [selectedServiceId, setSelectedServiceId] = useState<string>(defaultService.id);
  const [selectedTier, setSelectedTier] = useState<'standard' | 'vip' | 'doorstep'>('standard');
  const [applicantsCount, setApplicantsCount] = useState<number>(1);

  const deptServices = useMemo(() => {
    return SERVICES.filter((s) => s.departmentId === selectedDeptId);
  }, [selectedDeptId]);

  const currentService = useMemo(() => {
    const found = SERVICES.find((s) => s.id === selectedServiceId);
    if (found && found.departmentId === selectedDeptId) return found;
    return deptServices[0] || SERVICES[0];
  }, [selectedServiceId, selectedDeptId, deptServices]);

  const currentDept = useMemo(() => {
    return DEPARTMENTS.find((d) => d.id === selectedDeptId) || DEPARTMENTS[0];
  }, [selectedDeptId]);

  const generalCalculations = useMemo(() => {
    const govBase = currentService.govFee * applicantsCount;
    let serviceBase = currentService.serviceFee * applicantsCount;
    let tierAddon = 0;

    if (selectedTier === 'vip') {
      tierAddon = (currentService.vipFastTrackFee || 350) * applicantsCount;
    } else if (selectedTier === 'doorstep') {
      tierAddon = 950;
    }

    const typingSubtotal = serviceBase + tierAddon;
    const vat = Math.round(typingSubtotal * 0.05);
    const total = govBase + typingSubtotal + vat;

    let timeEn = currentService.processingTimeEn;
    let timeAr = currentService.processingTimeAr;
    if (selectedTier === 'vip') {
      timeEn = 'Express (Under 24 Hours)';
      timeAr = 'إنجاز عاجل (أقل من 24 ساعة)';
    } else if (selectedTier === 'doorstep') {
      timeEn = 'Same Day Doorstep Completion';
      timeAr = 'إنجاز فوري عند عتبة بابك';
    }

    return {
      govBase,
      serviceBase,
      tierAddon,
      typingSubtotal,
      vat,
      total,
      timeEn,
      timeAr,
    };
  }, [currentService, selectedTier, applicantsCount]);

  const handleDeptChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newDeptId = e.target.value;
    setSelectedDeptId(newDeptId);
    const firstInDept = SERVICES.find((s) => s.departmentId === newDeptId);
    if (firstInDept) {
      setSelectedServiceId(firstInDept.id);
    }
  };

  // Booking handlers for each mode
  const handleBookPackage = (pkg: ImmigrationPackage) => {
    const matchingService =
      SERVICES.find((s) =>
        pkg.category === 'family'
          ? s.id === 'amer-family-sponsorship-visa'
          : s.id === 'amer-residency-visa-new'
      ) || SERVICES[0];
    onBookWithEstimate(matchingService, 'flagship');
  };

  const handleBookOhc = () => {
    const ohcService =
      SERVICES.find((s) => s.id === 'ohc-card-new-renewal-doctor-license') ||
      SERVICES[0];
    onBookWithEstimate(ohcService, 'flagship');
  };

  const handleBookAttestation = () => {
    const attestationService =
      SERVICES.find((s) => s.id === 'atlas-mofa-justice-attestation') ||
      SERVICES[0];
    onBookWithEstimate(attestationService, 'flagship');
  };

  const handleProceedGeneral = () => {
    const channelMap: Record<string, 'flagship' | 'vip_majlis' | 'doorstep_van'> = {
      standard: 'flagship',
      vip: 'vip_majlis',
      doorstep: 'doorstep_van',
    };
    onBookWithEstimate(currentService, channelMap[selectedTier]);
  };

  return (
    <section id="calculator" className="py-16 sm:py-20 bg-[#F8FAFA] border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-xs font-bold text-[#128B94] uppercase tracking-wider mb-3">
              <ShieldCheck className="w-3.5 h-3.5 text-[#128B94]" />
              <span>{isAr ? 'قائمة الأسعار والرسوم الرسمية المعتمدة' : 'Official Government Tariff & Pricing Integrity'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1E2528] tracking-tight">
              {isAr ? 'حاسبة الرسوم الحكومية الشفافة وقائمة الأسعار الرسمية' : 'Transparent Government Fee Estimator & Official Price List'}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
              {isAr
                ? 'استعرض الرسوم الحكومية المعتمدة لكافة المعاملات بدقة تامة: باقات الإقامة والهجرة، بطاقات الصحة المهنية (20 فئة)، تصديقات أطلس لكافة دول العالم، وتسهيل.'
                : 'Review 100% verified official government tariffs and typing fees. Calculate complete residency packages step-by-step, 20 Occupational Health Card categories, and 119+ global attestation destinations.'}
            </p>
          </div>

          {/* Quick Action: Open Full Price Sheet Modal */}
          <div className="shrink-0 flex items-center gap-3">
            <button
              onClick={() => setShowFullSheetModal(true)}
              className="px-4 py-2.5 rounded-lg bg-white border border-[#128B94] text-[#128B94] hover:bg-teal-50 text-xs sm:text-sm font-bold flex items-center gap-2 transition-all shadow-xs cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>{isAr ? 'عرض جدول الأسعار الشامل (PDF/عرض)' : 'View Complete Official Tariff Sheet'}</span>
            </button>
          </div>
        </div>

        {/* Mode Selector Tabs */}
        <div className="bg-white p-1.5 rounded-xl border border-slate-200 shadow-xs mb-8 flex flex-wrap gap-1.5">
          <button
            onClick={() => setActiveMode('packages')}
            className={`flex-1 min-w-[180px] py-2.5 px-3.5 rounded-lg text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
              activeMode === 'packages'
                ? 'bg-[#128B94] text-white shadow-xs'
                : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
            }`}
          >
            <Briefcase className="w-4 h-4" />
            <span>{isAr ? '1. باقات الإقامة والهجرة (خطوة بخطوة)' : '1. Residency & Visa Packages'}</span>
          </button>

          <button
            onClick={() => setActiveMode('ohc')}
            className={`flex-1 min-w-[180px] py-2.5 px-3.5 rounded-lg text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
              activeMode === 'ohc'
                ? 'bg-[#128B94] text-white shadow-xs'
                : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
            }`}
          >
            <HeartPulse className="w-4 h-4" />
            <span>{isAr ? '2. بطاقات الصحة المهنية OHC (20 فئة)' : '2. Occupational Health Cards (OHC)'}</span>
          </button>

          <button
            onClick={() => setActiveMode('attestation')}
            className={`flex-1 min-w-[180px] py-2.5 px-3.5 rounded-lg text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
              activeMode === 'attestation'
                ? 'bg-[#128B94] text-white shadow-xs'
                : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
            }`}
          >
            <Globe2 className="w-4 h-4" />
            <span>{isAr ? '3. تصديقات أطلس وسفارات دبي (119+ دولة)' : '3. Atlas Global Attestation & Consulates'}</span>
          </button>

          <button
            onClick={() => setActiveMode('general')}
            className={`flex-1 min-w-[180px] py-2.5 px-3.5 rounded-lg text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
              activeMode === 'general'
                ? 'bg-[#128B94] text-white shadow-xs'
                : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
            }`}
          >
            <Calculator className="w-4 h-4" />
            <span>{isAr ? '4. حاسبة كافة الدوائر الحكومية' : '4. All Departments Tariff Calculator'}</span>
          </button>
        </div>

        {/* ======================================================== */}
        {/* MODE 1: OFFICIAL IMMIGRATION PACKAGES & STEP BREAKDOWN   */}
        {/* ======================================================== */}
        {activeMode === 'packages' && (
          <div className="space-y-8 animate-in fade-in duration-200">
            {/* Top Package Selector Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {IMMIGRATION_PACKAGES.map((pkg) => {
                const isSelected = pkg.id === selectedPackageId;
                return (
                  <button
                    key={pkg.id}
                    onClick={() => setSelectedPackageId(pkg.id)}
                    className={`p-4 rounded-xl border text-left rtl:text-right transition-all cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? 'border-[#128B94] bg-teal-50/70 ring-2 ring-[#128B94] shadow-xs'
                        : 'border-slate-200 bg-white hover:border-teal-200 hover:bg-slate-50'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                          {pkg.category === 'employee'
                            ? isAr ? 'موظف' : 'Employee'
                            : pkg.category === 'partner'
                            ? isAr ? 'شريك / مستثمر' : 'Partner / Investor'
                            : isAr ? 'عائلة' : 'Family'}
                        </span>
                        <span className="text-sm font-extrabold text-[#128B94] tabular-nums">
                          {pkg.totalCost.toLocaleString()} AED
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-slate-900 leading-snug">
                        {isAr ? pkg.titleAr : pkg.titleEn}
                      </h4>
                    </div>
                    <div className="mt-3 pt-2.5 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-500">
                      <span>{pkg.steps.length} {isAr ? 'خطوات حكومية' : 'Government Steps'}</span>
                      <span className="text-[#128B94] font-semibold flex items-center gap-1">
                        {isSelected ? (isAr ? 'محدد حالياً' : 'Active') : (isAr ? 'اختيار' : 'Select')}
                        <ChevronRight className="w-3.5 h-3.5 rtl:rotate-180" />
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Detailed Itemized Receipt and Requirements */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Official Government Steps Breakdown */}
              <div className="lg:col-span-7 bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
                <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-6">
                  <div>
                    <span className="text-xs font-bold text-[#128B94] uppercase tracking-wider block">
                      {isAr ? 'التفصيل المالي المعتمد للخطوات' : 'Official Itemized Cost Breakdown'}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 mt-0.5">
                      {isAr ? activePackage.titleAr : activePackage.titleEn}
                    </h3>
                  </div>
                  <div className="text-right rtl:text-left">
                    <span className="text-xs text-slate-500 block">{isAr ? 'الإجمالي الحكومي' : 'Package Total'}</span>
                    <span className="text-2xl font-black text-[#128B94] tabular-nums">
                      {activePackage.totalCost.toLocaleString()} <span className="text-xs font-bold text-slate-600">AED</span>
                    </span>
                  </div>
                </div>

                {/* Steps List */}
                <div className="space-y-3">
                  {activePackage.steps.map((step, idx) => (
                    <div
                      key={step.id}
                      className="p-3.5 rounded-lg bg-slate-50 border border-slate-200/80 flex items-center justify-between gap-4"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full bg-teal-100 text-[#01403F] text-xs font-bold flex items-center justify-center shrink-0">
                          {idx + 1}
                        </span>
                        <div>
                          <span className="text-xs sm:text-sm font-bold text-slate-900 block">
                            {isAr ? step.nameAr : step.nameEn}
                          </span>
                          <span className="text-[11px] text-slate-500">
                            {isAr ? 'رسوم معتمدة وموثقة بإيصال رسمي' : 'Official certified ministerial tariff'}
                          </span>
                        </div>
                      </div>
                      <span className="text-sm font-bold text-slate-900 tabular-nums shrink-0">
                        {step.cost.toLocaleString()} AED
                      </span>
                    </div>
                  ))}
                </div>

                {/* Total Summary Footer Bar */}
                <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-sm">
                  <span className="font-bold text-slate-700">
                    {isAr ? 'مجموع الرسوم المعتمدة' : 'Total Official Government Charges'}:
                  </span>
                  <span className="text-xl font-extrabold text-[#128B94] tabular-nums">
                    {activePackage.totalCost.toLocaleString()} AED
                  </span>
                </div>
              </div>

              {/* Right Column: Required Documents Checklist & Action */}
              <div className="lg:col-span-5 bg-gradient-to-br from-[#01403F] via-[#085C5E] to-[#128B94] text-white rounded-xl p-6 sm:p-8 shadow-xl space-y-6">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-teal-200 mb-1">
                    {isAr ? 'المستندات الرسمية المطلوبة' : 'Required Documents Checklist'}
                  </div>
                  <h4 className="text-lg font-bold text-white">
                    {isAr ? 'الشروط والمستندات اللازمة للمعاملة' : 'Eligibility & Mandatory Paperwork'}
                  </h4>
                </div>

                <div className="space-y-2.5">
                  {(isAr ? activePackage.documentsAr : activePackage.documentsEn).map((doc, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-teal-50">
                      <CheckCircle2 className="w-4 h-4 text-teal-300 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{doc}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-white/20 space-y-3">
                  <div className="flex items-center justify-between text-xs text-teal-100">
                    <span>{isAr ? 'المدة التقديرية للإنجاز' : 'Turnaround SLA'}:</span>
                    <strong className="text-white">{isAr ? '24 - 48 ساعة عمل' : '24 - 48 Business Hours'}</strong>
                  </div>

                  <button
                    onClick={() => handleBookPackage(activePackage)}
                    className="w-full py-3 px-4 bg-white text-[#01403F] hover:bg-teal-50 rounded-lg text-xs sm:text-sm font-bold shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
                  >
                    <span>{isAr ? 'حجز هذه الباقة الحكومية' : 'Book This Official Package'}</span>
                    <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                  </button>

                  <a
                    href="https://wa.me/97143426666"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 bg-[#128B94]/80 hover:bg-[#128B94] text-white border border-teal-300/40 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer text-center"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>{isAr ? 'استفسار عبر واتساب مع ضابط المعاملات' : 'WhatsApp Senior PRO Officer'}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Standalone Pricing Quick Reference Cards (Cancellations, Est Card, Fine Reduction) */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8">
              <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                <div>
                  <h4 className="text-base font-bold text-slate-900">
                    {isAr ? 'رسوم الإلغاء، بطاقات المنشأة، وطلبات الاسترحام' : 'Cancellations, Establishment Cards & Fine Reduction Petitions'}
                  </h4>
                  <p className="text-xs text-slate-500">
                    {isAr ? 'الصفحات 5 و 6 من قائمة الأسعار الرسمية المعتمدة' : 'Official Price List Pages 5 & 6 — Direct Ministry Pricing'}
                  </p>
                </div>
                <span className="text-xs font-bold text-[#128B94] bg-teal-50 px-2.5 py-1 rounded border border-teal-200">
                  {isAr ? 'إجراءات فورية' : 'Instant Processing'}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
                {IMMIGRATION_STANDALONE_PRICES.map((item) => (
                  <div
                    key={item.id}
                    className="p-3.5 rounded-lg bg-slate-50 border border-slate-200/90 flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                        {item.category}
                      </span>
                      <h5 className="text-xs font-bold text-slate-900 leading-snug">
                        {isAr ? item.nameAr : item.nameEn}
                      </h5>
                    </div>
                    <div className="mt-3 pt-2 border-t border-slate-200 flex items-center justify-between">
                      <span className="text-[11px] text-slate-500">{isAr ? 'الرسم' : 'Tariff'}:</span>
                      <span className="text-sm font-extrabold text-[#128B94] tabular-nums">
                        {item.cost} AED
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* MODE 2: OCCUPATIONAL HEALTH CARD (OHC) - 20 CATEGORIES   */}
        {/* ======================================================== */}
        {activeMode === 'ohc' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            {/* OHC Introduction & Search */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#128B94] block">
                  {isAr ? 'الصفحة 7 من قائمة الأسعار الرسمية' : 'Official Price List Page 7'}
                </span>
                <h3 className="text-lg font-bold text-slate-900">
                  {isAr ? 'جدول رسوم بطاقات الصحة المهنية لكافة الأنشطة (20 فئة معتمدة)' : 'Occupational Health Card (OHC) Complete 20-Category Tariff Schedule'}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  {isAr
                    ? 'جميع الفئات تشمل الرسوم الحكومية الرسمية + رسم الطباعة الموحد 52.50 درهم.'
                    : 'All categories include official Government Fee + unified Typing Fee of 52.50 AED.'}
                </p>
              </div>

              {/* Search input */}
              <div className="relative min-w-[260px] sm:min-w-[320px]">
                <Search className="w-4 h-4 absolute left-3 rtl:left-auto rtl:right-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={ohcSearch}
                  onChange={(e) => {
                    setOhcSearch(e.target.value);
                    setSelectedOhcIndex(0);
                  }}
                  placeholder={
                    isAr
                      ? 'ابحث في فئات الصحة المهنية (مطاعم، سائقين، صالونات)...'
                      : 'Search OHC categories (Food, Driver, Salon, Construction)...'
                  }
                  className="w-full pl-9 rtl:pl-3 rtl:pr-9 pr-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#128B94]"
                />
              </div>
            </div>

            {/* OHC Table / Grid */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left rtl:text-right text-xs">
                  <thead className="bg-slate-100 text-slate-700 font-bold uppercase tracking-wider border-b border-slate-200">
                    <tr>
                      <th className="py-3 px-4 w-12 text-center">#</th>
                      <th className="py-3 px-4">{isAr ? 'الفئة والنشاط المهني' : 'Category & Industry Description'}</th>
                      <th className="py-3 px-4 text-right rtl:text-left">{isAr ? 'الرسم الحكومي' : 'Govt Fee'}</th>
                      <th className="py-3 px-4 text-right rtl:text-left">{isAr ? 'رسم الطباعة' : 'Typing Fee'}</th>
                      <th className="py-3 px-4 text-right rtl:text-left text-[#128B94] font-extrabold">{isAr ? 'الإجمالي الرسمي' : 'Total Fee'}</th>
                      <th className="py-3 px-4 text-center">{isAr ? 'الإجراء' : 'Action'}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-800">
                    {filteredOhcList.map((item, idx) => (
                      <tr
                        key={item.sr}
                        className={`hover:bg-teal-50/50 transition-colors ${
                          activeOhcItem.sr === item.sr ? 'bg-teal-50/70 font-semibold' : ''
                        }`}
                      >
                        <td className="py-3 px-4 text-center text-slate-400 font-mono">{item.sr}</td>
                        <td className="py-3 px-4">
                          <span className="font-bold text-slate-900 block">{isAr ? item.categoryAr : item.categoryEn}</span>
                          <span className="text-[11px] text-slate-500">{isAr ? item.categoryEn : item.categoryAr}</span>
                        </td>
                        <td className="py-3 px-4 text-right rtl:text-left tabular-nums text-slate-600">
                          {item.govtFee} AED
                        </td>
                        <td className="py-3 px-4 text-right rtl:text-left tabular-nums text-slate-600">
                          {item.typingFee} AED
                        </td>
                        <td className="py-3 px-4 text-right rtl:text-left tabular-nums text-sm font-extrabold text-[#128B94]">
                          {item.totalFee} AED
                        </td>
                        <td className="py-3 px-4 text-center">
                          <button
                            onClick={handleBookOhc}
                            className="px-3 py-1.5 rounded bg-[#128B94] hover:bg-[#01403F] text-white font-bold text-[11px] transition-colors cursor-pointer"
                          >
                            {isAr ? 'حجز الفحص' : 'Book OHC'}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* MODE 3: ATLAS GLOBAL ATTESTATION & EMBASSIES DIRECTORY  */}
        {/* ======================================================== */}
        {activeMode === 'attestation' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            {/* Top MOFA & Ministry of Justice Baseline Summary Card */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {ATTESTATION_SERVICES_SUMMARY.map((srv) => (
                <div
                  key={srv.id}
                  className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs"
                >
                  <span className="text-[10px] font-bold text-[#128B94] uppercase tracking-wider block">
                    {srv.time}
                  </span>
                  <h4 className="text-xs font-bold text-slate-900 mt-1 line-clamp-2 min-h-[32px]">
                    {isAr ? srv.nameAr : srv.nameEn}
                  </h4>
                  <div className="mt-2 pt-2 border-t border-slate-100 flex items-baseline justify-between">
                    <span className="text-[10px] text-slate-400">{isAr ? 'الرسوم' : 'Fee'}:</span>
                    <span className="text-sm font-extrabold text-[#128B94] tabular-nums">
                      {srv.feeAed} AED
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Sub Tabs: 119+ Countries MOFA vs Consulates in Dubai */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 mb-6">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setAttestationSubTab('countries')}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      attestationSubTab === 'countries'
                        ? 'bg-[#128B94] text-white shadow-xs'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {isAr ? 'تصديق كافة دول العالم (119 دولة)' : '119+ Global Countries MOFA Attestation'}
                  </button>
                  <button
                    onClick={() => setAttestationSubTab('consulates')}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      attestationSubTab === 'consulates'
                        ? 'bg-[#128B94] text-white shadow-xs'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {isAr ? 'رسوم القنصليات والسفارات بدبي (26 قنصلية)' : 'Consulate & Embassy Fees in Dubai'}
                  </button>
                </div>

                {/* Country search input */}
                {attestationSubTab === 'countries' && (
                  <div className="relative min-w-[240px] sm:min-w-[300px]">
                    <Search className="w-4 h-4 absolute left-3 rtl:left-auto rtl:right-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      value={countrySearch}
                      onChange={(e) => setCountrySearch(e.target.value)}
                      placeholder={
                        isAr
                          ? 'ابحث عن دولة (الهند، بريطانيا، أمريكا، مصر)...'
                          : 'Search country (India, UK, USA, Egypt, Philippines)...'
                      }
                      className="w-full pl-9 rtl:pl-3 rtl:pr-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#128B94]"
                    />
                  </div>
                )}

                {attestationSubTab === 'consulates' && (
                  <div className="relative min-w-[240px] sm:min-w-[300px]">
                    <Search className="w-4 h-4 absolute left-3 rtl:left-auto rtl:right-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      value={consulateSearch}
                      onChange={(e) => setConsulateSearch(e.target.value)}
                      placeholder={isAr ? 'ابحث في القنصليات بدبي...' : 'Search Dubai consulates...'}
                      className="w-full pl-9 rtl:pl-3 rtl:pr-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#128B94]"
                    />
                  </div>
                )}
              </div>

              {/* Table rendering */}
              {attestationSubTab === 'countries' && (
                <div className="overflow-x-auto max-h-[500px]">
                  <table className="w-full text-left rtl:text-right text-xs">
                    <thead className="bg-slate-100 text-slate-700 font-bold uppercase tracking-wider sticky top-0 z-10 border-b border-slate-200">
                      <tr>
                        <th className="py-2.5 px-3 w-10 text-center">#</th>
                        <th className="py-2.5 px-3">{isAr ? 'الدولة' : 'Country'}</th>
                        <th className="py-2.5 px-3">{isAr ? 'نوع المستند' : 'Document Type'}</th>
                        <th className="py-2.5 px-3 text-right rtl:text-left text-[#128B94] font-extrabold">{isAr ? 'رسوم التصديق والخارجية' : 'MOFA Charges (AED)'}</th>
                        <th className="py-2.5 px-3 text-center">{isAr ? 'المدة التقديرية (أيام)' : 'Processing Time (Days)'}</th>
                        <th className="py-2.5 px-3 text-center">{isAr ? 'طلب' : 'Action'}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-800">
                      {filteredCountries.map((c) => (
                        <tr key={c.sr} className="hover:bg-slate-50 transition-colors">
                          <td className="py-2 px-3 text-center text-slate-400 font-mono">{c.sr}</td>
                          <td className="py-2 px-3">
                            <span className="font-bold text-slate-900 block">{isAr ? c.countryAr : c.countryEn}</span>
                            <span className="text-[10px] text-slate-400">{isAr ? c.countryEn : c.countryAr}</span>
                          </td>
                          <td className="py-2 px-3 text-slate-600">{isAr ? c.documentTypeAr : c.documentTypeEn}</td>
                          <td className="py-2 px-3 text-right rtl:text-left font-extrabold text-[#128B94] tabular-nums">
                            {c.chargesMofaAed.toLocaleString()} AED
                          </td>
                          <td className="py-2 px-3 text-center text-slate-600">
                            {c.processingTimeDays} {isAr ? 'يوم عمل' : 'WD'}
                          </td>
                          <td className="py-2 px-3 text-center">
                            <button
                              onClick={handleBookAttestation}
                              className="px-2.5 py-1 rounded bg-[#128B94] hover:bg-[#01403F] text-white font-bold text-[10px] transition-colors cursor-pointer"
                            >
                              {isAr ? 'حجز تصديق' : 'Attest'}
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {attestationSubTab === 'consulates' && (
                <div className="overflow-x-auto max-h-[500px]">
                  <table className="w-full text-left rtl:text-right text-xs">
                    <thead className="bg-slate-100 text-slate-700 font-bold uppercase tracking-wider sticky top-0 z-10 border-b border-slate-200">
                      <tr>
                        <th className="py-2.5 px-3">{isAr ? 'القنصلية / السفارة بدبي' : 'Consulate / Embassy in Dubai'}</th>
                        <th className="py-2.5 px-3 text-center">{isAr ? 'النوع' : 'Category'}</th>
                        <th className="py-2.5 px-3 text-right rtl:text-left text-[#128B94] font-extrabold">{isAr ? 'الرسوم المعتمدة' : 'Consulate Fee (AED)'}</th>
                        <th className="py-2.5 px-3 text-center">{isAr ? 'المدة' : 'Turnaround'}</th>
                        <th className="py-2.5 px-3 text-center">{isAr ? 'طلب' : 'Action'}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-800">
                      {filteredConsulates.map((con, idx) => (
                        <tr key={idx} className="hover:bg-slate-50 transition-colors">
                          <td className="py-2 px-3 font-bold text-slate-900">
                            {isAr ? con.countryAr : con.countryEn}
                          </td>
                          <td className="py-2 px-3 text-center">
                            <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                              con.type === 'Commercial'
                                ? 'bg-teal-50 text-[#01403F] border border-teal-200'
                                : con.type === 'Personal'
                                ? 'bg-blue-50 text-blue-800 border border-blue-200'
                                : 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                            }`}>
                              {con.type}
                            </span>
                          </td>
                          <td className="py-2 px-3 text-right rtl:text-left font-extrabold text-[#128B94] tabular-nums">
                            {con.feeAed.toLocaleString()} AED
                          </td>
                          <td className="py-2 px-3 text-center text-slate-500">
                            {con.turnaroundDays ? `${con.turnaroundDays} ${isAr ? 'أيام' : 'Days'}` : (isAr ? 'حسب القنصلية' : 'Standard')}
                          </td>
                          <td className="py-2 px-3 text-center">
                            <button
                              onClick={handleBookAttestation}
                              className="px-2.5 py-1 rounded bg-[#128B94] hover:bg-[#01403F] text-white font-bold text-[10px] transition-colors cursor-pointer"
                            >
                              {isAr ? 'بدء المعاملة' : 'Process'}
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* MODE 4: FULL 14-DEPARTMENT STANDARD CALCULATOR           */}
        {/* ======================================================== */}
        {activeMode === 'general' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-in fade-in duration-200">
            {/* Inputs Column (7 cols) */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-xs space-y-6">
              {/* Step 1: Department */}
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                  1. {t.selectDeptLabel}
                </label>
                <select
                  value={selectedDeptId}
                  onChange={handleDeptChange}
                  className="w-full px-3.5 py-2.5 text-sm font-medium bg-slate-50 border border-slate-300 rounded-md text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#128B94] transition-all cursor-pointer"
                >
                  {DEPARTMENTS.map((dept) => (
                    <option key={dept.id} value={dept.id}>
                      {dept.code} — {isAr ? dept.nameAr : dept.nameEn}
                    </option>
                  ))}
                </select>
              </div>

              {/* Step 2: Specific Service */}
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                  2. {t.selectServiceLabel}
                </label>
                <select
                  value={currentService.id}
                  onChange={(e) => setSelectedServiceId(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm font-medium bg-slate-50 border border-slate-300 rounded-md text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#128B94] transition-all cursor-pointer"
                >
                  {deptServices.map((service) => (
                    <option key={service.id} value={service.id}>
                      {isAr ? service.titleAr : service.titleEn}
                    </option>
                  ))}
                </select>
              </div>

              {/* Step 3: Service Channel / Experience Tier */}
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                  3. {t.selectTierLabel}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedTier('standard')}
                    className={`p-3 text-left rtl:text-right rounded-md border text-xs font-medium transition-all cursor-pointer ${
                      selectedTier === 'standard'
                        ? 'border-[#128B94] bg-teal-50 text-teal-950 ring-2 ring-[#128B94]'
                        : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <span className="font-bold block text-sm">
                      {isAr ? 'المركز الرئيسي' : 'Flagship Center'}
                    </span>
                    <span className="text-[11px] text-slate-500 mt-1 block">
                      {isAr ? 'إنجاز اعتيادي' : 'Standard Turnaround'}
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedTier('vip')}
                    className={`p-3 text-left rtl:text-right rounded-md border text-xs font-medium transition-all cursor-pointer ${
                      selectedTier === 'vip'
                        ? 'border-[#128B94] bg-teal-50 text-teal-950 ring-2 ring-[#128B94]'
                        : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <span className="font-bold block text-sm text-[#128B94]">
                      {isAr ? 'مجلس VIP السريع' : 'VIP Majlis Express'}
                    </span>
                    <span className="text-[11px] text-slate-500 mt-1 block">
                      {isAr ? 'أولوية وضيافة تنفيذية' : 'Priority Queue & Officer'}
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedTier('doorstep')}
                    className={`p-3 text-left rtl:text-right rounded-md border text-xs font-medium transition-all cursor-pointer ${
                      selectedTier === 'doorstep'
                        ? 'border-[#128B94] bg-teal-50 text-teal-950 ring-2 ring-[#128B94]'
                        : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <span className="font-bold block text-sm">
                      {isAr ? 'الحافلة المتنقلة' : 'Doorstep Van'}
                    </span>
                    <span className="text-[11px] text-slate-500 mt-1 block">
                      {isAr ? 'نصل إلى موقعك' : 'Dispatched to You'}
                    </span>
                  </button>
                </div>
              </div>

              {/* Step 4: Number of Applicants */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                    4. {t.applicantsCountLabel}
                  </label>
                  <span className="text-xs font-bold text-[#128B94] tabular-nums">
                    {applicantsCount} {applicantsCount === 1 ? 'Applicant' : 'Applicants'}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 5, 10].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setApplicantsCount(num)}
                      className={`w-10 h-9 rounded-md text-xs font-bold transition-colors cursor-pointer tabular-nums ${
                        applicantsCount === num
                          ? 'bg-[#128B94] text-white'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Breakdown / Official Calculation Card (5 cols) */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#01403F] via-[#095E63] to-[#128B94] text-white p-6 sm:p-8 rounded-xl shadow-xl">
              <div className="flex items-center justify-between pb-4 border-b border-white/20">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-white p-1 shadow-xs shrink-0 flex items-center justify-center">
                    <DepartmentLogo deptId={selectedDeptId} className="w-full h-full" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-teal-200 uppercase tracking-wider block">
                      {isAr ? 'ملخص التقدير المالي المعتمد' : 'Estimated Tariff Breakdown'}
                    </span>
                    <span className="text-[11px] text-teal-100/90 font-medium">
                      {isAr ? currentDept.nameAr : currentDept.nameEn}
                    </span>
                  </div>
                </div>
                <span className="text-[10px] text-teal-200 font-mono">
                  {currentService.id.toUpperCase()}
                </span>
              </div>

              <div className="py-5 space-y-3.5 text-xs sm:text-sm border-b border-white/20">
                {/* Government Tariff */}
                <div className="flex items-center justify-between">
                  <span className="text-teal-100">{t.estimatedGovFee}</span>
                  <span className="font-semibold text-white tabular-nums">
                    {generalCalculations.govBase === 0
                      ? isAr ? 'معفى / حسب النشاط' : 'Varies / Exempt'
                      : `${generalCalculations.govBase.toLocaleString()} AED`}
                  </span>
                </div>

                {/* ESS Certified Typing */}
                <div className="flex items-center justify-between">
                  <span className="text-teal-100">{t.estimatedEssFee}</span>
                  <span className="font-semibold text-white tabular-nums">
                    {generalCalculations.serviceBase.toLocaleString()} AED
                  </span>
                </div>

                {/* Priority / Van Add-on */}
                {generalCalculations.tierAddon > 0 && (
                  <div className="flex items-center justify-between">
                    <span className="text-teal-200">
                      {selectedTier === 'vip'
                        ? isAr ? 'رسوم مجلس كبار الشخصيات VIP' : 'VIP Majlis Express Liaison'
                        : isAr ? 'إرسال الحافلة المتنقلة لموقعك' : 'Mobile Van Dispatch Fee'}
                    </span>
                    <span className="font-bold text-white tabular-nums">
                      +{generalCalculations.tierAddon.toLocaleString()} AED
                    </span>
                  </div>
                )}

                {/* UAE VAT (5%) */}
                <div className="flex items-center justify-between text-teal-200 text-xs">
                  <span>{t.estimatedVat}</span>
                  <span className="tabular-nums">+{generalCalculations.vat.toLocaleString()} AED</span>
                </div>
              </div>

              {/* Total and Turnaround Time */}
              <div className="py-5">
                <div className="flex items-baseline justify-between mb-3">
                  <span className="text-xs font-bold text-teal-100 uppercase tracking-wider">
                    {t.estimatedTotal}
                  </span>
                  <span className="text-3xl font-extrabold text-white tabular-nums">
                    {generalCalculations.total.toLocaleString()} <span className="text-sm font-semibold text-teal-200">AED</span>
                  </span>
                </div>

                <div className="flex items-center gap-2 text-xs text-white bg-white/10 p-3 rounded-md border border-white/20">
                  <Clock className="w-4 h-4 text-teal-200 shrink-0" />
                  <span>
                    {isAr ? 'الوقت التقديري:' : 'Turnaround:'}{' '}
                    <strong className="text-white">
                      {isAr ? generalCalculations.timeAr : generalCalculations.timeEn}
                    </strong>
                  </span>
                </div>
              </div>

              {/* CTA */}
              <button
                onClick={handleProceedGeneral}
                className="w-full mt-2 py-3 px-4 text-xs sm:text-sm font-bold text-[#01403F] bg-white hover:bg-slate-50 rounded-md transition-all shadow-md cursor-pointer flex items-center justify-center gap-2 active:scale-[0.98]"
              >
                <span>{t.bookWithEstimateBtn}</span>
                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </button>

              <p className="mt-3 text-[11px] text-teal-100 text-center leading-relaxed">
                {isAr
                  ? 'تخضع الرسوم للتدقيق النهائي حسب تفاصيل المستندات وفق لوائح الجهات المعنية.'
                  : 'Tariffs subject to final verification based on applicant profile and authority criteria.'}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* ======================================================== */}
      {/* MODAL: COMPLETE OFFICIAL TARIFF SHEET (ALL 5 SECTIONS)   */}
      {/* ======================================================== */}
      {showFullSheetModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-150">
            {/* Modal Header */}
            <div className="p-5 sm:p-6 bg-gradient-to-r from-[#01403F] via-[#085C5E] to-[#128B94] text-white flex items-center justify-between shrink-0">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-teal-200 mb-1">
                  {isAr ? 'وثيقة الأسعار الرسمية المعتمدة' : 'Official Documented Tariff Sheet'}
                </div>
                <h3 className="text-xl font-extrabold text-white">
                  {isAr ? 'جدول أسعار الإمارات لخدمات رجال الأعمال ومركز الكرامة للأعمال' : 'Emirates Secretarial Services & Karama Business Center Pricelist'}
                </h3>
              </div>
              <button
                onClick={() => setShowFullSheetModal(false)}
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-8 text-xs sm:text-sm">
              {/* Section 1: Immigration */}
              <div>
                <h4 className="text-base font-extrabold text-[#01403F] pb-2 border-b border-slate-200 mb-3 flex items-center justify-between">
                  <span>{isAr ? '1. باقات تأشيرات الإقامة (الصفحات 1 - 6)' : '1. Immigration Residency Packages (Pages 1 - 6)'}</span>
                  <span className="text-xs font-normal text-slate-500">{isAr ? 'إقامة دبي / الهيئة الاتحادية' : 'GDRFA Dubai / ICP'}</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {IMMIGRATION_PACKAGES.map((pkg) => (
                    <div key={pkg.id} className="p-3.5 rounded-lg border border-slate-200 bg-slate-50">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-slate-900">{isAr ? pkg.titleAr : pkg.titleEn}</span>
                        <span className="font-extrabold text-[#128B94] tabular-nums">{pkg.totalCost.toLocaleString()} AED</span>
                      </div>
                      <div className="text-[11px] text-slate-500 mt-2 space-y-1">
                        {pkg.steps.map((st) => (
                          <div key={st.id} className="flex justify-between">
                            <span>• {isAr ? st.nameAr : st.nameEn}</span>
                            <span className="font-mono text-slate-700">{st.cost} AED</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 2: OHC Summary */}
              <div>
                <h4 className="text-base font-extrabold text-[#01403F] pb-2 border-b border-slate-200 mb-3 flex items-center justify-between">
                  <span>{isAr ? '2. بطاقات الصحة المهنية OHC (الصفحة 7)' : '2. Occupational Health Cards (Page 7)'}</span>
                  <span className="text-xs font-normal text-slate-500">20 {isAr ? 'فئة معتمدة' : 'Official Categories'}</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 text-xs">
                  {OHC_CATEGORIES_PRICELIST.slice(0, 12).map((item) => (
                    <div key={item.sr} className="p-2.5 rounded border border-slate-200 flex justify-between items-center">
                      <span className="truncate pr-2">{isAr ? item.categoryAr : item.categoryEn}</span>
                      <strong className="text-[#128B94] tabular-nums shrink-0">{item.totalFee} AED</strong>
                    </div>
                  ))}
                </div>
                <p className="text-[11px] text-slate-500 mt-2 text-center">
                  {isAr ? 'يتم عرض جميع الفئات العشرين بالكامل داخل تبويب بطاقات الصحة المهنية أعلاه.' : 'All 20 categories fully searchable in Tab 2 above.'}
                </p>
              </div>

              {/* Section 3: Tasheel / MoHRE */}
              <div>
                <h4 className="text-base font-extrabold text-[#01403F] pb-2 border-b border-slate-200 mb-3 flex items-center justify-between">
                  <span>{isAr ? '3. تسهيل وعقود العمل (الصفحة 8)' : '3. Tasheel & Labour Contracts (Page 8)'}</span>
                  <span className="text-xs font-normal text-slate-500">MoHRE Authorized</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {TASHEEL_CONTRACTS_PRICES.map((item) => (
                    <div key={item.id} className="p-3 rounded-lg border border-slate-200 bg-slate-50 flex justify-between">
                      <span className="font-semibold text-slate-800">{isAr ? item.nameAr : item.nameEn}</span>
                      <strong className="text-[#128B94] tabular-nums">{item.cost} AED</strong>
                    </div>
                  ))}
                  <div className="p-3 rounded-lg border border-slate-200 bg-slate-50 flex justify-between">
                    <span className="font-semibold text-slate-800">{isAr ? 'إلغاء بطاقة العمل (كافة الأنواع)' : 'Labor Card Cancellations'}</span>
                    <strong className="text-[#128B94] tabular-nums">77 AED</strong>
                  </div>
                </div>
              </div>

              {/* Section 4: Atlas Attestation Summary */}
              <div>
                <h4 className="text-base font-extrabold text-[#01403F] pb-2 border-b border-slate-200 mb-3 flex items-center justify-between">
                  <span>{isAr ? '4. تصديقات أطلس والقنصليات (الصفحات 9 - 17)' : '4. Atlas Attestation & Consulates (Pages 9 - 17)'}</span>
                  <span className="text-xs font-normal text-slate-500">119+ Countries</span>
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <div className="p-2.5 rounded bg-teal-50 border border-teal-200 text-center">
                    <span className="block text-[11px] text-slate-600">{isAr ? 'وزارة الخارجية (شخصي)' : 'MOFA (Personal)'}</span>
                    <strong className="text-sm text-[#128B94]">200 AED</strong>
                  </div>
                  <div className="p-2.5 rounded bg-teal-50 border border-teal-200 text-center">
                    <span className="block text-[11px] text-slate-600">{isAr ? 'وزارة الخارجية (تجاري)' : 'MOFA (Commercial)'}</span>
                    <strong className="text-sm text-[#128B94]">1,200 AED</strong>
                  </div>
                  <div className="p-2.5 rounded bg-teal-50 border border-teal-200 text-center">
                    <span className="block text-[11px] text-slate-600">{isAr ? 'وزارة العدل' : 'Ministry of Justice'}</span>
                    <strong className="text-sm text-[#128B94]">110 AED</strong>
                  </div>
                  <div className="p-2.5 rounded bg-teal-50 border border-teal-200 text-center">
                    <span className="block text-[11px] text-slate-600">{isAr ? 'ترجمة قانونية (لكل صفحة)' : 'Legal Translation (/pg)'}</span>
                    <strong className="text-sm text-[#128B94]">38 AED</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between shrink-0">
              <span className="text-xs text-slate-500">
                {isAr ? 'تحديث الأسعار معتمد لشهر أكتوبر 2026' : 'Official Tariffs Updated & Verified — October 2026'}
              </span>
              <button
                onClick={() => setShowFullSheetModal(false)}
                className="px-5 py-2 bg-[#01403F] text-white rounded-lg text-xs font-bold hover:bg-[#128B94] transition-colors cursor-pointer"
              >
                {isAr ? 'إغلاق الجدول' : 'Close Sheet'}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
