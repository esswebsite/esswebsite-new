import React, { useState, useMemo } from 'react';
import {
  Calculator,
  Search,
  FileText,
  Download,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Building2,
  Globe2,
  Calendar,
  Layers,
  ArrowRight,
  ChevronRight,
  ChevronDown,
  Sparkles,
  Info,
  Printer,
  Copy,
  Check,
  Filter,
  DollarSign,
  AlertCircle
} from 'lucide-react';
import { Language, ServiceItem } from '../types';
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
import { SERVICES } from '../data/departmentsData';

interface PriceListPageProps {
  language: Language;
  onNavigateToHome: () => void;
  onNavigateToContact: () => void;
  onOpenBooking: (service?: ServiceItem, channel?: 'flagship' | 'vip_majlis' | 'doorstep_van') => void;
}

type PriceTab = 'all' | 'calculator' | 'immigration' | 'ohc' | 'tasheel' | 'attestation' | 'consulates';

export const PriceListPage: React.FC<PriceListPageProps> = ({
  language,
  onNavigateToHome,
  onNavigateToContact,
  onOpenBooking,
}) => {
  const isAr = language === 'ar';
  const [activeTab, setActiveTab] = useState<PriceTab>('all');
  const [globalSearch, setGlobalSearch] = useState('');
  const [copiedQuote, setCopiedQuote] = useState(false);

  // -------------------------------------------------------------
  // Calculator State
  // -------------------------------------------------------------
  const [calcPackageId, setCalcPackageId] = useState<string>(IMMIGRATION_PACKAGES[0].id);
  const [selectedSteps, setSelectedSteps] = useState<Record<string, boolean>>({
    'visit-inside': true,
    'visit-outside': true,
    'change-status': true,
    'emirates-id': true,
    'medical': true,
    'stamping': true,
    'file-open': true,
    'guarantee': true,
  });
  const [numApplicants, setNumApplicants] = useState<number>(1);
  const [includeAttestation, setIncludeAttestation] = useState<boolean>(false);
  const [selectedAttestationCountryIndex, setSelectedAttestationCountryIndex] = useState<number>(31); // Default India

  const activePackage = useMemo(() => {
    return IMMIGRATION_PACKAGES.find((p) => p.id === calcPackageId) || IMMIGRATION_PACKAGES[0];
  }, [calcPackageId]);

  const selectedAttestation = useMemo(() => {
    return ATTESTATION_COUNTRIES_PRICELIST[selectedAttestationCountryIndex] || ATTESTATION_COUNTRIES_PRICELIST[0];
  }, [selectedAttestationCountryIndex]);

  // Toggle step in calculator
  const toggleStep = (stepId: string) => {
    setSelectedSteps((prev) => ({
      ...prev,
      [stepId]: prev[stepId] === false ? true : false,
    }));
  };

  // Compute calculated total
  const calculatedBreakdown = useMemo(() => {
    let perPersonGovt = 0;
    let refundableDeposit = 0;

    activePackage.steps.forEach((step) => {
      const isIncluded = selectedSteps[step.id] !== false;
      if (isIncluded) {
        if (step.id === 'guarantee') {
          refundableDeposit += step.cost;
        } else {
          perPersonGovt += step.cost;
        }
      }
    });

    const subtotalVisas = perPersonGovt * numApplicants;
    const totalDeposits = refundableDeposit * numApplicants;
    const attestationCost = includeAttestation ? selectedAttestation.chargesMofaAed : 0;
    const grandTotal = subtotalVisas + totalDeposits + attestationCost;

    return {
      perPersonGovt,
      refundableDeposit,
      subtotalVisas,
      totalDeposits,
      attestationCost,
      grandTotal,
    };
  }, [activePackage, selectedSteps, numApplicants, includeAttestation, selectedAttestation]);

  // Handle Copy / Print Quote
  const handleCopyQuote = () => {
    const quoteText = `Emirates Secretarial Services & Karama Business Center
Official Fee Quotation (تقدير الرسوم الرسمية):
Package: ${isAr ? activePackage.titleAr : activePackage.titleEn}
Number of Applicants: ${numApplicants}
Subtotal Fees: ${calculatedBreakdown.subtotalVisas} AED
${calculatedBreakdown.totalDeposits > 0 ? `Refundable Guarantee: ${calculatedBreakdown.totalDeposits} AED\n` : ''}${
      includeAttestation
        ? `MOFA Attestation (${isAr ? selectedAttestation.countryAr : selectedAttestation.countryEn}): ${selectedAttestation.chargesMofaAed} AED\n`
        : ''
    }Estimated Grand Total: ${calculatedBreakdown.grandTotal} AED
Location: Al Karama, Next to Karama Post Office, Dubai
Tel: +971 4 342 6666 | Web: ess.ae`;

    if (navigator.clipboard) {
      navigator.clipboard.writeText(quoteText);
      setCopiedQuote(true);
      setTimeout(() => setCopiedQuote(false), 2500);
    }
  };

  const handlePrintQuote = () => {
    window.print();
  };

  const handleBookEstimate = () => {
    const matchingService = SERVICES.find((s) => s.departmentId === 'amer') || SERVICES[0];
    onOpenBooking(matchingService, 'flagship');
  };

  // -------------------------------------------------------------
  // Filtered Lists based on Global Search
  // -------------------------------------------------------------
  const q = globalSearch.toLowerCase().trim();

  const filteredImmigrationPackages = useMemo(() => {
    if (!q) return IMMIGRATION_PACKAGES;
    return IMMIGRATION_PACKAGES.filter(
      (p) =>
        p.titleEn.toLowerCase().includes(q) ||
        p.titleAr.includes(q) ||
        p.steps.some((s) => s.nameEn.toLowerCase().includes(q) || s.nameAr.includes(q))
    );
  }, [q]);

  const filteredStandalone = useMemo(() => {
    if (!q) return IMMIGRATION_STANDALONE_PRICES;
    return IMMIGRATION_STANDALONE_PRICES.filter(
      (s) => s.nameEn.toLowerCase().includes(q) || s.nameAr.includes(q) || s.category.toLowerCase().includes(q)
    );
  }, [q]);

  const filteredOhc = useMemo(() => {
    if (!q) return OHC_CATEGORIES_PRICELIST;
    return OHC_CATEGORIES_PRICELIST.filter(
      (item) =>
        item.categoryEn.toLowerCase().includes(q) ||
        item.categoryAr.includes(q) ||
        item.sr.toString().includes(q)
    );
  }, [q]);

  const filteredTasheelContracts = useMemo(() => {
    if (!q) return TASHEEL_CONTRACTS_PRICES;
    return TASHEEL_CONTRACTS_PRICES.filter(
      (item) => item.nameEn.toLowerCase().includes(q) || item.nameAr.includes(q)
    );
  }, [q]);

  const filteredTasheelCancel = useMemo(() => {
    if (!q) return TASHEEL_CANCELLATION_PRICES;
    return TASHEEL_CANCELLATION_PRICES.filter(
      (item) => item.nameEn.toLowerCase().includes(q) || item.nameAr.includes(q)
    );
  }, [q]);

  const filteredAttestationCountries = useMemo(() => {
    if (!q) return ATTESTATION_COUNTRIES_PRICELIST;
    return ATTESTATION_COUNTRIES_PRICELIST.filter(
      (c) =>
        c.countryEn.toLowerCase().includes(q) ||
        c.countryAr.includes(q) ||
        c.documentTypeEn.toLowerCase().includes(q)
    );
  }, [q]);

  const filteredConsulates = useMemo(() => {
    if (!q) return CONSULATE_FEES_PRICELIST;
    return CONSULATE_FEES_PRICELIST.filter(
      (item) => item.countryEn.toLowerCase().includes(q) || item.countryAr.includes(q) || item.type.toLowerCase().includes(q)
    );
  }, [q]);

  return (
    <div className={`min-h-screen bg-slate-50 text-slate-800 pt-18 sm:pt-22 lg:pt-24 pb-20 ${isAr ? 'font-arabic' : ''}`}>
      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 flex-wrap">
            <button
              onClick={onNavigateToHome}
              className="hover:text-[#128B94] transition-colors cursor-pointer font-medium"
            >
              {isAr ? 'الرئيسية' : 'Home'}
            </button>
            <span className="text-slate-300">/</span>
            <span className="text-slate-800 font-semibold">
              {isAr ? 'جدول رسوم وأسعار الخدمات الحكومية 2026' : 'Official Services Price List & Fee Schedule'}
            </span>
          </div>
        </div>
      </div>

      {/* Hero Header Banner */}
      <div className="bg-gradient-to-br from-slate-900 via-[#01403F] to-[#0A2E31] text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b border-[#128B94]/20">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#128B94_1px,transparent_1px)] [background-size:24px_24px]" />
        
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#128B94]/20 border border-[#128B94]/40 text-teal-200 text-xs font-semibold uppercase tracking-wider mb-4">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              {isAr ? 'الأسعار الرسمية المعتمدة - بدون أي رسوم خفية' : 'Official Statutory Rates · Zero Hidden Surcharges'}
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black font-serif tracking-tight leading-tight mb-3">
              {isAr ? 'قائمة أسعار ورسوم الخدمات والمعاملات' : 'Services Price List & Fee Calculator'}
            </h1>

            <p className="text-sm sm:text-base text-teal-100/90 leading-relaxed max-w-2xl">
              {isAr
                ? 'استعرض جدول الرسوم الحكومية المعتمدة لإقامات آمر، الفحص الطبي وسالم، تصاريح تسهيل، وتصديق الشهادات من وزارة الخارجية والسفارات والقنصليات لأكثر من 117 دولة.'
                : 'Complete, transparent statutory fee schedule for Amer GDRFA residency visas, DHA occupational health cards, Tasheel labour cards, and UAE MOFA attestations across 117+ countries.'}
            </p>
          </div>

          {/* Quick Actions & Official PDF Download */}
          <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0">
            <a
              href="/assets/aistudio/fileservicespricecopy_b0ca32a5.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#128B94] hover:bg-[#01403F] text-white font-bold text-xs sm:text-sm transition-all shadow-md shadow-[#128B94]/25 cursor-pointer"
            >
              <Download className="w-4 h-4 text-white" />
              <span>{isAr ? 'تحميل جدول الأسعار الرسمي (PDF)' : 'Download Official Price PDF'}</span>
            </a>

            <button
              onClick={() => setActiveTab('calculator')}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm transition-all border border-white/20 cursor-pointer"
            >
              <Calculator className="w-4 h-4 text-teal-300" />
              <span>{isAr ? 'حاسبة الرسوم التفاعلية' : 'Interactive Fee Calculator'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        {/* Search & Navigation Bar */}
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-4 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Live Global Search Box */}
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 absolute left-3.5 rtl:left-auto rtl:right-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={globalSearch}
                onChange={(e) => setGlobalSearch(e.target.value)}
                placeholder={
                  isAr
                    ? 'ابحث في كافة الأسعار (تأشيرة، فحص طبي، دولة، تصديق)...'
                    : 'Search any fee, country, visa type, or service...'
                }
                className="w-full pl-10 rtl:pl-4 rtl:pr-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#128B94] focus:bg-white transition-all"
              />
              {globalSearch && (
                <button
                  onClick={() => setGlobalSearch('')}
                  className="absolute right-3 rtl:right-auto rtl:left-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs cursor-pointer"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Quick Stats Banner */}
            <div className="flex items-center gap-2 sm:gap-4 text-xs text-slate-500 font-medium overflow-x-auto w-full md:w-auto py-1">
              <span className="flex items-center gap-1 shrink-0">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                {isAr ? '100% رسوم حكومية معتمدة' : 'Official Ministerial Rates'}
              </span>
              <span className="hidden sm:inline text-slate-300">|</span>
              <span className="flex items-center gap-1 shrink-0">
                <Globe2 className="w-4 h-4 text-[#128B94]" />
                {isAr ? '117+ دولة للتصديقات' : '117+ Countries Supported'}
              </span>
            </div>
          </div>

          {/* Navigation Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pt-4 mt-3 border-t border-slate-100">
            {[
              { id: 'all', labelEn: 'All Services (Overview)', labelAr: 'كافة الخدمات (نظرة شاملة)', icon: Layers },
              { id: 'calculator', labelEn: 'Live Fee Calculator', labelAr: 'حاسبة الرسوم الذكية', icon: Calculator, highlight: true },
              { id: 'immigration', labelEn: 'Amer Visas & Residency', labelAr: 'إقامات وتأشيرات آمر', icon: Building2 },
              { id: 'ohc', labelEn: 'Occupational Health (20)', labelAr: 'الصحة المهنية OHC (20)', icon: CheckCircle2 },
              { id: 'tasheel', labelEn: 'Tasheel / Labour', labelAr: 'تسهيل وعقود العمل', icon: FileText },
              { id: 'attestation', labelEn: 'MOFA & 117+ Countries', labelAr: 'تصديقات الخارجية (117 دولة)', icon: Globe2 },
              { id: 'consulates', labelEn: 'Consulates in Dubai', labelAr: 'سفارات وقنصليات دبي', icon: ShieldCheck },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as PriceTab)}
                  className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer shrink-0 ${
                    isActive
                      ? 'bg-[#128B94] text-white shadow-sm'
                      : tab.highlight
                      ? 'bg-teal-50 text-[#01403F] border border-teal-300/80 hover:bg-teal-100'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{isAr ? tab.labelAr : tab.labelEn}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* TAB 1: LIVE INTERACTIVE CALCULATOR (If active or opened)       */}
        {/* ------------------------------------------------------------- */}
        {(activeTab === 'calculator' || activeTab === 'all') && (
          <div className="mb-12">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-serif flex items-center gap-2">
                  <Calculator className="w-6 h-6 text-[#128B94]" />
                  <span>{isAr ? 'حاسبة الرسوم الحكومية التفاعلية' : 'Interactive Real-Time Fee Calculator'}</span>
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  {isAr
                    ? 'حدد نوع التأشيرة، اختر المعاملات المطلوبة، واحصل على حساب دقيق وتفصيلي للرسوم الحكومية فوراً.'
                    : 'Select your visa category, customize steps, and calculate transparent costs instantly.'}
                </p>
              </div>

              {activeTab === 'all' && (
                <button
                  onClick={() => setActiveTab('calculator')}
                  className="text-xs font-bold text-[#128B94] hover:underline cursor-pointer"
                >
                  {isAr ? 'توسيع الحاسبة الكاملة ←' : 'Full Calculator View →'}
                </button>
              )}
            </div>

            <div className="bg-white rounded-3xl border border-teal-200/90 shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* Left 7 Columns: Selection & Controls */}
                <div className="lg:col-span-7 p-6 sm:p-8 border-b lg:border-b-0 lg:border-r rtl:lg:border-r-0 rtl:lg:border-l border-slate-200">
                  {/* 1. Select Package */}
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                    {isAr ? '1. اختر نوع المعاملة أو الإقامة' : '1. Choose Visa / Package Type'}
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                    {IMMIGRATION_PACKAGES.map((pkg) => (
                      <div
                        key={pkg.id}
                        onClick={() => setCalcPackageId(pkg.id)}
                        className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                          calcPackageId === pkg.id
                            ? 'bg-teal-50/80 border-[#128B94] shadow-xs'
                            : 'bg-slate-50/60 border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                            {isAr ? pkg.titleAr : pkg.titleEn}
                          </h4>
                          {calcPackageId === pkg.id && (
                            <CheckCircle2 className="w-4 h-4 text-[#128B94] shrink-0" />
                          )}
                        </div>
                        <div className="text-[11px] text-[#0F766E] font-semibold mt-1">
                          {isAr ? 'الرسوم الأساسية:' : 'Base Total:'} {pkg.totalCost.toLocaleString()} AED
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* 2. Number of Applicants */}
                  <div className="mb-6 bg-slate-50 p-4 rounded-2xl border border-slate-200/80 flex items-center justify-between flex-wrap gap-4">
                    <div>
                      <span className="text-xs font-bold text-slate-900 block">
                        {isAr ? 'عدد المتقدمين / أفراد العائلة:' : 'Number of Applicants / Beneficiaries:'}
                      </span>
                      <span className="text-[11px] text-slate-500">
                        {isAr ? 'يتم احتساب الرسوم الحكومية لكل فرد' : 'Government fees multiplied per applicant'}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setNumApplicants((prev) => Math.max(1, prev - 1))}
                        className="w-8 h-8 rounded-lg bg-white border border-slate-300 text-slate-700 font-bold hover:bg-slate-100 flex items-center justify-center cursor-pointer shadow-2xs"
                      >
                        -
                      </button>
                      <span className="w-10 text-center font-bold text-base text-slate-900 font-mono">
                        {numApplicants}
                      </span>
                      <button
                        onClick={() => setNumApplicants((prev) => Math.min(20, prev + 1))}
                        className="w-8 h-8 rounded-lg bg-white border border-slate-300 text-slate-700 font-bold hover:bg-slate-100 flex items-center justify-center cursor-pointer shadow-2xs"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* 3. Steps Checklist */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        {isAr ? '2. اختر المراحل والإجراءات المطلوبة' : '2. Customize Included Steps & Clearances'}
                      </label>
                      <span className="text-[11px] text-slate-400">
                        {isAr ? 'انقر لإلغاء أي خطوة مكتملة مسبقاً' : 'Uncheck any steps already completed'}
                      </span>
                    </div>

                    <div className="space-y-2">
                      {activePackage.steps.map((step) => {
                        const isChecked = selectedSteps[step.id] !== false;
                        return (
                          <div
                            key={step.id}
                            onClick={() => toggleStep(step.id)}
                            className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                              isChecked
                                ? 'bg-white border-teal-200 shadow-2xs'
                                : 'bg-slate-50/50 border-slate-200 text-slate-400 opacity-60'
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <input
                                type="checkbox"
                                checked={isChecked}
                                onChange={() => {}} // handled by parent div
                                className="w-4 h-4 text-[#128B94] rounded focus:ring-teal-400 cursor-pointer"
                              />
                              <span className={`text-xs sm:text-sm font-medium ${isChecked ? 'text-slate-800' : 'line-through text-slate-400'}`}>
                                {isAr ? step.nameAr : step.nameEn}
                              </span>
                            </div>
                            <span className="text-xs font-bold font-mono text-slate-800 shrink-0">
                              {step.cost.toLocaleString()} AED
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* 4. Optional Attestation Add-on */}
                  <div className="p-4 rounded-2xl bg-teal-50/40 border border-teal-200/70">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={includeAttestation}
                          onChange={(e) => setIncludeAttestation(e.target.checked)}
                          className="w-4 h-4 text-[#128B94] rounded focus:ring-[#128B94]"
                        />
                        <span className="text-xs sm:text-sm font-bold text-[#01403F]">
                          {isAr ? 'إضافة تصديق شهادة من وزارة الخارجية والسفارة' : 'Add Certificate Attestation (MOFA & Embassy)'}
                        </span>
                      </label>
                      {includeAttestation && (
                        <span className="text-xs font-bold text-[#128B94] font-mono">
                          +{selectedAttestation.chargesMofaAed} AED
                        </span>
                      )}
                    </div>

                    {includeAttestation && (
                      <div className="mt-2 pt-2 border-t border-teal-200/60">
                        <label className="text-[11px] text-[#01403F] font-medium block mb-1">
                          {isAr ? 'اختر دولة إصدار الشهادة:' : 'Select Country of Document Origin:'}
                        </label>
                        <select
                          value={selectedAttestationCountryIndex}
                          onChange={(e) => setSelectedAttestationCountryIndex(Number(e.target.value))}
                          className="w-full p-2 bg-white border border-teal-300 rounded-lg text-xs font-medium focus:ring-2 focus:ring-[#128B94]"
                        >
                          {ATTESTATION_COUNTRIES_PRICELIST.map((c, idx) => (
                            <option key={idx} value={idx}>
                              {isAr ? c.countryAr : c.countryEn} — {c.documentTypeEn} ({c.chargesMofaAed} AED, {c.processingTimeDays} days)
                            </option>
                          ))}
                        </select>
                      </div>
                    )}
                  </div>
                </div>

                {/* Right 5 Columns: Official Live Calculation Summary */}
                <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 to-[#0A2E31] text-white p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                      <div>
                        <span className="text-[10px] font-bold tracking-wider text-teal-300 uppercase block">
                          {isAr ? 'ملخص التقدير الرسمي' : 'Official Quotation Summary'}
                        </span>
                        <h3 className="text-base sm:text-lg font-bold text-white font-serif">
                          {isAr ? activePackage.titleAr : activePackage.titleEn}
                        </h3>
                      </div>
                      <span className="text-xs font-mono bg-white/10 px-2 py-0.5 rounded text-teal-300">
                        {numApplicants} {isAr ? 'أفراد' : 'Pax'}
                      </span>
                    </div>

                    {/* Breakdown Lines */}
                    <div className="space-y-3 text-xs sm:text-sm text-slate-300">
                      <div className="flex items-center justify-between">
                        <span>{isAr ? 'الرسوم الحكومية للشخص الواحد:' : 'Govt Fee Per Person:'}</span>
                        <span className="font-mono font-semibold text-white">
                          {calculatedBreakdown.perPersonGovt.toLocaleString()} AED
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span>
                          {isAr ? `إجمالي التأشيرات (${numApplicants} أشخاص):` : `Visa Total (${numApplicants} Pax):`}
                        </span>
                        <span className="font-mono font-bold text-white">
                          {calculatedBreakdown.subtotalVisas.toLocaleString()} AED
                        </span>
                      </div>

                      {calculatedBreakdown.totalDeposits > 0 && (
                        <div className="flex items-center justify-between text-teal-200">
                          <span>{isAr ? 'الضمان المسترد (3000 درهم/شخص):' : 'Refundable Guarantee Deposit:'}</span>
                          <span className="font-mono font-bold">
                            {calculatedBreakdown.totalDeposits.toLocaleString()} AED
                          </span>
                        </div>
                      )}

                      {includeAttestation && (
                        <div className="flex items-center justify-between text-teal-300">
                          <span>
                            {isAr ? `تصديق (${selectedAttestation.countryAr}):` : `Attestation (${selectedAttestation.countryEn}):`}
                          </span>
                          <span className="font-mono font-bold">
                            {calculatedBreakdown.attestationCost.toLocaleString()} AED
                          </span>
                        </div>
                      )}

                      <div className="pt-4 border-t border-white/10 flex items-baseline justify-between">
                        <div>
                          <span className="text-xs uppercase tracking-wider text-slate-400 block">
                            {isAr ? 'الإجمالي التقديري الشامل:' : 'Estimated Grand Total:'}
                          </span>
                          <span className="text-[10px] text-teal-300">
                            {isAr ? 'شامل الرسوم والتدقيق والربط الحكومي' : 'Inclusive of typing & statutory lodging'}
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="text-2xl sm:text-3xl font-black text-teal-300 font-mono">
                            {calculatedBreakdown.grandTotal.toLocaleString()}
                          </span>
                          <span className="text-xs text-teal-200 ml-1">AED</span>
                        </div>
                      </div>
                    </div>

                    {/* Document Checklist Preview */}
                    <div className="mt-6 pt-4 border-t border-white/10">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                        {isAr ? 'المستندات المطلوبة لهذه المعاملة:' : 'Required Documents for this Package:'}
                      </span>
                      <ul className="space-y-1.5 text-xs text-slate-300">
                        {(isAr ? activePackage.documentsAr : activePackage.documentsEn).map((doc, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                            <span className="leading-snug">{doc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-8 pt-4 border-t border-white/10 space-y-2.5">
                    <button
                      onClick={handleBookEstimate}
                      className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#128B94] to-[#01403F] hover:from-[#0f767e] hover:to-[#012f2e] text-white font-bold text-sm transition-all shadow-md shadow-[#128B94]/25 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>{isAr ? 'حجز موعد بهذا التقدير' : 'Book Appointment with this Estimate'}</span>
                    </button>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={handleCopyQuote}
                        className="flex-1 py-2 px-3 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 cursor-pointer border border-white/10"
                      >
                        {copiedQuote ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedQuote ? (isAr ? 'تم النسخ!' : 'Copied!') : (isAr ? 'نسخ عرض السعر' : 'Copy Quote')}</span>
                      </button>

                      <button
                        onClick={handlePrintQuote}
                        className="flex-1 py-2 px-3 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 cursor-pointer border border-white/10"
                      >
                        <Printer className="w-3.5 h-3.5" />
                        <span>{isAr ? 'طباعة العرض' : 'Print Quote'}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------- */}
        {/* TAB 2: IMMIGRATION & AMER RESIDENCY (Pages 1 - 6)              */}
        {/* ------------------------------------------------------------- */}
        {(activeTab === 'immigration' || activeTab === 'all') && (
          <div className="mb-12">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-serif flex items-center gap-2">
                  <Building2 className="w-6 h-6 text-[#128B94]" />
                  <span>{isAr ? 'خدمات وتأشيرات الإقامة والهجرة (آمر إقامة دبي)' : 'Immigration & Residency Visa Services (Amer)'}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  {isAr ? 'رسوم تأشيرات الموظفين، المستثمرين، العائلات، الإلغاءات وبطاقات المنشأة' : 'Official fee breakdown from Pages 1 - 6 of the certified price schedule'}
                </p>
              </div>
            </div>

            {/* Packages Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {filteredImmigrationPackages.map((pkg) => (
                <div key={pkg.id} className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between gap-3 border-b border-slate-100 pb-3 mb-4">
                    <div>
                      <span className="text-[10px] font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded border border-teal-200 uppercase">
                        {pkg.category}
                      </span>
                      <h4 className="text-base sm:text-lg font-bold text-slate-900 mt-1">
                        {isAr ? pkg.titleAr : pkg.titleEn}
                      </h4>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-slate-400 block">{isAr ? 'الإجمالي:' : 'Total:'}</span>
                      <span className="text-xl font-black text-[#128B94] font-mono">
                        {pkg.totalCost.toLocaleString()} AED
                      </span>
                    </div>
                  </div>

                  {/* Steps Table */}
                  <div className="space-y-2 mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                      {isAr ? 'خطوات ورسوم المعاملة:' : 'Included Steps & Costs:'}
                    </span>
                    <div className="divide-y divide-slate-100 bg-slate-50/70 rounded-xl p-2.5 border border-slate-200/60">
                      {pkg.steps.map((step) => (
                        <div key={step.id} className="py-1.5 flex items-center justify-between text-xs">
                          <span className="text-slate-700">{isAr ? step.nameAr : step.nameEn}</span>
                          <span className="font-mono font-bold text-slate-900">{step.cost.toLocaleString()} AED</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Documents Required */}
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      {isAr ? 'الأوراق المطلوبة:' : 'Required Documents:'}
                    </span>
                    <ul className="text-xs text-slate-600 space-y-1">
                      {(isAr ? pkg.documentsAr : pkg.documentsEn).map((d, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-[#128B94] font-bold">•</span>
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Standalone Cancellations, Establishment Cards, and Fine Reductions */}
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6">
              <h4 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#128B94]" />
                <span>{isAr ? 'رسوم إلغاء الإقامة، كروت المنشأة، وطلبات الاسترحام' : 'Cancellations, Establishment Cards & Fine Reduction Applications'}</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {filteredStandalone.map((item) => (
                  <div key={item.id} className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                        {item.category}
                      </span>
                      <h5 className="text-xs sm:text-sm font-bold text-slate-900 mt-1">
                        {isAr ? item.nameAr : item.nameEn}
                      </h5>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-200 flex items-baseline justify-between">
                      <span className="text-xs text-slate-500">{isAr ? 'الرسوم:' : 'Govt Fee:'}</span>
                      <span className="text-base font-black text-[#128B94] font-mono">
                        {item.cost} AED
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------- */}
        {/* TAB 3: OCCUPATIONAL HEALTH CARDS (OHC - Page 7)                */}
        {/* ------------------------------------------------------------- */}
        {(activeTab === 'ohc' || activeTab === 'all') && (
          <div className="mb-12">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-serif flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                  <span>{isAr ? 'فئات بطاقة الصحة المهنية (OHC - 20 فئة مهنية)' : 'Occupational Health Card Categories (OHC)'}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  {isAr
                    ? 'تفصيل الرسوم الحكومية ورسوم الطباعة المعتمدة لكافة المهن والأنشطة الخاضعة لرقابة بلدية دبي وهيئة الصحة'
                    : 'Statutory government fee and typing fee breakdown for all 20 professional OHC worker categories'}
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left rtl:text-right border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-100/80 text-slate-700 font-bold border-b border-slate-200">
                      <th className="py-3 px-4 w-12 text-center">#</th>
                      <th className="py-3 px-4">{isAr ? 'الفئة المهنية / النشاط' : 'Professional Category'}</th>
                      <th className="py-3 px-4 text-right rtl:text-left">{isAr ? 'الرسم الحكومي' : 'Government Fee'}</th>
                      <th className="py-3 px-4 text-right rtl:text-left">{isAr ? 'رسوم الطباعة' : 'Typing Fee'}</th>
                      <th className="py-3 px-4 text-right rtl:text-left font-black text-[#128B94]">
                        {isAr ? 'الإجمالي الشامل' : 'Total (Govt + Typing)'}
                      </th>
                      <th className="py-3 px-4 text-center">{isAr ? 'إجراء' : 'Action'}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {filteredOhc.map((item) => (
                      <tr key={item.sr} className="hover:bg-teal-50/40 transition-colors">
                        <td className="py-3 px-4 text-center font-mono text-slate-400">{item.sr}</td>
                        <td className="py-3 px-4">
                          <span className="font-bold text-slate-900 block">{isAr ? item.categoryAr : item.categoryEn}</span>
                          <span className="text-[11px] text-slate-500">{isAr ? item.categoryEn : item.categoryAr}</span>
                        </td>
                        <td className="py-3 px-4 text-right rtl:text-left font-mono text-slate-700">
                          {item.govtFee} AED
                        </td>
                        <td className="py-3 px-4 text-right rtl:text-left font-mono text-slate-500">
                          {item.typingFee} AED
                        </td>
                        <td className="py-3 px-4 text-right rtl:text-left font-mono font-black text-[#128B94]">
                          {item.totalFee.toFixed(2)} AED
                        </td>
                        <td className="py-3 px-4 text-center">
                          <button
                            onClick={() => {
                              const matching = SERVICES.find((s) => s.departmentId === 'dha') || SERVICES[0];
                              onOpenBooking(matching, 'flagship');
                            }}
                            className="px-2.5 py-1 rounded bg-teal-50 hover:bg-[#128B94] hover:text-white text-[#128B94] font-bold text-xs transition-colors cursor-pointer"
                          >
                            {isAr ? 'حجز الفحص' : 'Book'}
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

        {/* ------------------------------------------------------------- */}
        {/* TAB 4: TASHEEL & MOHRE LABOUR SERVICES (Page 8)                */}
        {/* ------------------------------------------------------------- */}
        {(activeTab === 'tasheel' || activeTab === 'all') && (
          <div className="mb-12">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-serif flex items-center gap-2">
                  <FileText className="w-6 h-6 text-sky-600" />
                  <span>{isAr ? 'خدمات تسهيل ووزارة الموارد البشرية (MoHRE)' : 'Tasheel & MoHRE Labour Services'}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  {isAr ? 'عروض العمل الإلكترونية، التأمين العمالي وإلغاءات بطاقات العمل' : 'Official contracts, insurance typing, and cancellation fees'}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* New Contracts */}
              <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6">
                <h4 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-sky-600" />
                  <span>{isAr ? 'عقود وتصاريح العمل الجديدة' : 'New Labour Contracts & Insurance'}</span>
                </h4>
                <div className="space-y-3">
                  {filteredTasheelContracts.map((item) => (
                    <div key={item.id} className="p-3.5 rounded-xl bg-slate-50 flex items-center justify-between">
                      <span className="text-xs sm:text-sm font-semibold text-slate-800">
                        {isAr ? item.nameAr : item.nameEn}
                      </span>
                      <span className="font-mono font-black text-slate-900 text-sm">
                        {item.cost} AED
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cancellations */}
              <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6">
                <h4 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-[#128B94]" />
                  <span>{isAr ? 'إلغاء بطاقات وتصاريح العمل' : 'Labour Card Cancellations'}</span>
                </h4>
                <div className="space-y-3">
                  {filteredTasheelCancel.map((item) => (
                    <div key={item.id} className="p-3.5 rounded-xl bg-slate-50 flex items-center justify-between">
                      <span className="text-xs sm:text-sm font-semibold text-slate-800">
                        {isAr ? item.nameAr : item.nameEn}
                      </span>
                      <span className="font-mono font-black text-slate-900 text-sm">
                        {item.cost} AED
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------- */}
        {/* TAB 5: MOFA & 117+ COUNTRIES ATTESTATION (Pages 9 - 15)        */}
        {/* ------------------------------------------------------------- */}
        {(activeTab === 'attestation' || activeTab === 'all') && (
          <div className="mb-12">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-serif flex items-center gap-2">
                  <Globe2 className="w-6 h-6 text-[#128B94]" />
                  <span>{isAr ? 'تصديق الشهادات والوثائق من وزارة الخارجية (117+ دولة)' : 'UAE MOFA & Global Certificate Attestation (117+ Countries)'}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  {isAr
                    ? 'الرسوم تشمل تصديق وزارة الخارجية الإماراتية (MOFA) والسفارات المعتمدة مع توضيح مدد الإنجاز بدقة'
                    : 'Charges inclusive of UAE MOFA and respective embassy stamps with transparent turnaround timelines'}
                </p>
              </div>
            </div>

            {/* MOFA Summary Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
              {ATTESTATION_SERVICES_SUMMARY.map((s) => (
                <div key={s.id} className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
                  <span className="text-xs text-slate-500 font-medium block truncate">
                    {isAr ? s.nameAr : s.nameEn}
                  </span>
                  <div className="mt-1 flex items-baseline justify-between">
                    <span className="text-lg font-black text-[#128B94] font-mono">{s.feeAed} AED</span>
                    <span className="text-[10px] text-slate-400 font-mono">{s.time}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Countries Table */}
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden">
              <div className="overflow-x-auto max-h-[500px]">
                <table className="w-full text-left rtl:text-right border-collapse text-xs sm:text-sm">
                  <thead className="sticky top-0 bg-slate-100 z-10 shadow-2xs">
                    <tr className="text-slate-700 font-bold border-b border-slate-200">
                      <th className="py-3 px-4 w-12 text-center">#</th>
                      <th className="py-3 px-4">{isAr ? 'الدولة' : 'Country'}</th>
                      <th className="py-3 px-4">{isAr ? 'نوع المستند' : 'Document Type'}</th>
                      <th className="py-3 px-4 text-right rtl:text-left">{isAr ? 'الرسوم شاملة الخارجية' : 'Charges (incl. UAE MOFA)'}</th>
                      <th className="py-3 px-4 text-right rtl:text-left">{isAr ? 'مدة الإنجاز' : 'Turnaround Time'}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {filteredAttestationCountries.map((c) => (
                      <tr key={c.sr} className="hover:bg-teal-50/40 transition-colors">
                        <td className="py-2.5 px-4 text-center font-mono text-slate-400">{c.sr}</td>
                        <td className="py-2.5 px-4 font-bold text-slate-900">
                          {isAr ? c.countryAr : c.countryEn}
                        </td>
                        <td className="py-2.5 px-4 text-slate-600">
                          {isAr ? c.documentTypeAr : c.documentTypeEn}
                        </td>
                        <td className="py-2.5 px-4 text-right rtl:text-left font-mono font-bold text-[#128B94]">
                          {c.chargesMofaAed.toLocaleString()} AED
                        </td>
                        <td className="py-2.5 px-4 text-right rtl:text-left text-slate-500 font-mono text-xs">
                          {c.processingTimeDays} {isAr ? 'يوم عمل' : 'days'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------- */}
        {/* TAB 6: CONSULATES & EMBASSIES IN DUBAI (Pages 16 - 17)        */}
        {/* ------------------------------------------------------------- */}
        {(activeTab === 'consulates' || activeTab === 'all') && (
          <div className="mb-12">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-serif flex items-center gap-2">
                  <ShieldCheck className="w-6 h-6 text-[#128B94]" />
                  <span>{isAr ? 'تصديقات السفارات والقنصليات بدبي' : 'Consulates & Embassies in Dubai (Pages 16 - 17)'}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  {isAr ? 'رسوم المعاملات التجارية والشخصية المعتمدة لدى القنصليات الدبلوماسية' : 'Official attestation tariffs at consular missions in Dubai'}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {filteredConsulates.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-sm transition-shadow flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-[#128B94] bg-teal-50 px-2 py-0.5 rounded border border-teal-200 uppercase">
                      {item.type}
                    </span>
                    <h5 className="text-xs sm:text-sm font-bold text-slate-900 mt-2">
                      {isAr ? item.countryAr : item.countryEn}
                    </h5>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-baseline justify-between">
                    <span className="text-xs text-slate-500">
                      {item.turnaroundDays ? `${item.turnaroundDays} ${isAr ? 'أيام' : 'days'}` : (isAr ? 'حسب القنصلية' : 'Regular')}
                    </span>
                    <span className="text-base font-black text-[#128B94] font-mono">
                      {item.feeAed} AED
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Regulatory Footer Disclaimer */}
        <div className="mt-12 p-6 rounded-2xl bg-teal-50/70 border border-teal-200/80 text-xs text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-[#128B94] shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              {isAr
                ? 'ملاحظة: تخضع الرسوم الحكومية للتحديث الدوري وفق التوجيهات الوزارية في دولة الإمارات العربية المتحدة. يتم تأكيد كافة الرسوم قبل الطباعة والتنفيذ عبر بوابات الهيئة الاتحادية للهوية والجنسية ووزارة الموارد البشرية وهيئة الصحة بدبي.'
                : 'Note: Government fees are subject to official ministerial updates by UAE federal and local authorities. All charges are pre-audited and confirmed prior to direct submission via GDRFA, MoHRE, and DHA gateways.'}
            </p>
          </div>

          <button
            onClick={() => onOpenBooking()}
            className="px-5 py-2.5 rounded-xl bg-[#128B94] hover:bg-[#01403F] text-white font-bold text-xs transition-colors shrink-0 cursor-pointer shadow-xs whitespace-nowrap"
          >
            {isAr ? 'حجز موعد لإنجاز معاملة' : 'Book Transaction Appointment'}
          </button>
        </div>
      </div>
    </div>
  );
};
