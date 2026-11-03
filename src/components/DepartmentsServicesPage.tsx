import React, { useState, useMemo } from 'react';
import {
  Shield,
  Search,
  ArrowRight,
  Clock,
  CheckCircle2,
  Calendar,
  Sparkles,
  ChevronRight,
  ChevronLeft,
  Building2,
  FileCheck,
  PhoneCall,
  SlidersHorizontal,
  ChevronDown,
  ExternalLink,
  Layers,
} from 'lucide-react';
import { Language, ServiceItem, Department } from '../types';
import { DEPARTMENTS, SERVICES } from '../data/departmentsData';
import { DepartmentLogo } from './DepartmentLogo';
import { RelatedServicesSection } from './RelatedServicesSection';

interface DepartmentsServicesPageProps {
  language: Language;
  onNavigateToHome: () => void;
  onNavigateToDepartment: (deptId: string) => void;
  onNavigateToService: (serviceId: string) => void;
  onOpenBooking: (service?: ServiceItem) => void;
}

export const DepartmentsServicesPage: React.FC<DepartmentsServicesPageProps> = ({
  language,
  onNavigateToHome,
  onNavigateToDepartment,
  onNavigateToService,
  onOpenBooking,
}) => {
  const isAr = language === 'ar';
  const ArrowIcon = isAr ? ChevronLeft : ChevronRight;

  const [activeTab, setActiveTab] = useState<'all' | 'departments' | 'services'>('all');
  const [selectedDeptFilter, setSelectedDeptFilter] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Categories config
  const categories = [
    { id: 'all', labelEn: 'All Services', labelAr: 'كافة الخدمات' },
    { id: 'residency', labelEn: 'Residency & Visas', labelAr: 'الإقامات والتأشيرات' },
    { id: 'corporate', labelEn: 'Corporate & DED', labelAr: 'الشركات والرخص' },
    { id: 'labor', labelEn: 'Labor & Tasheel', labelAr: 'تسهيل والعمل' },
    { id: 'medical', labelEn: 'DHA Medical & ID', labelAr: 'الفحص الطبي والهوية' },
    { id: 'legal', labelEn: 'Legal & Notary', labelAr: 'الكاتب العدل والقانون' },
    { id: 'vip', labelEn: 'VIP & Mobile Van', labelAr: 'خدمات كبار الشخصيات' },
  ];

  // Filtered services
  const filteredServices = useMemo(() => {
    return SERVICES.filter((service) => {
      // Dept filter
      if (selectedDeptFilter !== 'all' && service.departmentId !== selectedDeptFilter) {
        return false;
      }
      // Category filter
      if (selectedCategory !== 'all' && service.category !== selectedCategory) {
        return false;
      }
      // Query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const titleMatch =
          service.titleEn.toLowerCase().includes(q) ||
          service.titleAr.toLowerCase().includes(q);
        const descMatch =
          service.shortDescEn.toLowerCase().includes(q) ||
          service.shortDescAr.toLowerCase().includes(q);
        return titleMatch || descMatch;
      }
      return true;
    });
  }, [selectedDeptFilter, selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-slate-50 pt-18 sm:pt-22 lg:pt-24 pb-20">
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
              {isAr ? 'دليل الدوائر والخدمات الحكومية' : 'Government Departments & Services'}
            </span>
          </nav>
        </div>
      </div>

      {/* Hero Header */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#01403F] via-[#085C5E] to-[#128B94] text-white py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-teal-200">
              <Building2 className="w-3.5 h-3.5" />
              <span>
                {isAr
                  ? '10 دوائر حكومية معتمدة · أكثر من 40 خدمة رسمية متكاملة'
                  : '10 Authorized Government Departments · 40+ Official Services'}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {isAr ? 'دليل الدوائر والخدمات الحكومية في دبي' : 'Dubai Government Departments & Services Directory'}
            </h1>

            <p className="text-sm sm:text-base text-teal-50/90 leading-relaxed">
              {isAr
                ? 'استعرض جميع الدوائر الحكومية والوزارات المعتمدة تحت سقف واحد في مركز الكرامة للأعمال والإمارات لخدمات رجال الأعمال. شفافية كاملة في الرسوم وإنجاز فوري موثق.'
                : 'Browse accredited government entities and official service categories under one roof. Instant requirement audits, transparent fee breakdowns, and verified government turnaround times.'}
            </p>

            {/* Quick Live Search Bar */}
            <div className="pt-4 max-w-2xl">
              <div className="relative">
                <Search className="w-5 h-5 absolute left-4 rtl:left-auto rtl:right-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={
                    isAr
                      ? 'ابحث عن خدمة (مثل: إقامة ذهبية، رخصة تجارية، فحص طبي، عقد عمل)...'
                      : 'Search any service (e.g. Golden Visa, Trade License, Medical Fitness, Work Permit)...'
                  }
                  className="w-full bg-white text-slate-900 placeholder-slate-400 pl-12 rtl:pl-4 rtl:pr-12 pr-4 py-3.5 rounded-xl shadow-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 rtl:right-auto rtl:left-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 bg-slate-100 px-2 py-1 rounded"
                  >
                    {isAr ? 'مسح' : 'Clear'}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Filter Tabs */}
      <div className="sticky top-20 sm:top-22 lg:top-24 z-30 bg-white border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between overflow-x-auto py-3 gap-4 no-scrollbar">
            {/* View switcher */}
            <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-lg shrink-0">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all ${
                  activeTab === 'all'
                    ? 'bg-white text-[#01403F] shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {isAr ? 'عرض الكل' : 'All Sections'}
              </button>
              <button
                onClick={() => setActiveTab('departments')}
                className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all ${
                  activeTab === 'departments'
                    ? 'bg-white text-[#01403F] shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {isAr ? 'الدوائر الحكومية (10)' : 'Departments (10)'}
              </button>
              <button
                onClick={() => setActiveTab('services')}
                className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all ${
                  activeTab === 'services'
                    ? 'bg-white text-[#01403F] shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {isAr ? `دليل الخدمات (${SERVICES.length})` : `All Services (${SERVICES.length})`}
              </button>
            </div>

            {/* Department quick filter pills */}
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-xs text-slate-500 font-medium hidden sm:inline">
                {isAr ? 'تصفية حسب الدائرة:' : 'Filter by Department:'}
              </span>
              <select
                value={selectedDeptFilter}
                onChange={(e) => setSelectedDeptFilter(e.target.value)}
                className="bg-slate-50 border border-slate-200 text-xs font-bold text-slate-700 rounded-md px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-[#128B94]"
              >
                <option value="all">{isAr ? 'جميع الدوائر (10)' : 'All Departments (10)'}</option>
                {DEPARTMENTS.map((dept) => (
                  <option key={dept.id} value={dept.id}>
                    {isAr ? dept.nameAr : dept.nameEn}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
        {/* Section 1: Government Departments Grid */}
        {(activeTab === 'all' || activeTab === 'departments') && (
          <section id="departments-list">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-teal-50 border border-teal-200 text-[#128B94] text-xs font-bold uppercase tracking-wider mb-2">
                  <Shield className="w-3.5 h-3.5" />
                  <span>{isAr ? 'الهيئات والوزارات المعتمدة' : 'Accredited Ministerial Entities'}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  {isAr ? 'الدوائر الحكومية المرخصة' : 'Authorized Government Departments'}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  {isAr
                    ? 'انقر على أي دائرة للاطلاع على كافة خدماتها وإجراءاتها التفصيلية'
                    : 'Select any department to access its dedicated portal, mandate, and service offerings.'}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6">
              {DEPARTMENTS.map((dept) => (
                <div
                  key={dept.id}
                  onClick={() => onNavigateToDepartment(dept.id)}
                  className="bg-white rounded-xl border border-slate-200 p-5 hover:border-[#128B94] hover:shadow-lg transition-all duration-300 flex flex-col justify-between group cursor-pointer relative overflow-hidden"
                >
                  <div className="space-y-3">
                    {/* Header with emblem */}
                    <div className="flex items-center justify-between">
                      <div className="w-14 h-14 rounded-xl bg-white border border-slate-200/90 shadow-2xs p-1.5 flex items-center justify-center group-hover:scale-105 transition-transform">
                        <DepartmentLogo deptId={dept.id} className="w-full h-full" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200/80">
                        {dept.code}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-[#128B94] transition-colors leading-tight">
                        {isAr ? dept.nameAr : dept.nameEn}
                      </h3>
                      <p className="text-xs text-slate-500 mt-0.5 leading-snug">
                        {isAr ? dept.subTitleAr : dept.subTitleEn}
                      </p>
                    </div>

                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {isAr ? dept.descriptionAr : dept.descriptionEn}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-700">
                      {dept.serviceCount} {isAr ? 'خدمة معتمدة' : 'services'}
                    </span>
                    <span className="font-bold text-[#128B94] inline-flex items-center gap-1 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5 transition-transform">
                      <span>{isAr ? 'عرض الدائرة' : 'View Portal'}</span>
                      <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Section 2: Comprehensive Services Catalog */}
        {(activeTab === 'all' || activeTab === 'services') && (
          <section id="services-list" className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-teal-50 border border-teal-200 text-[#128B94] text-xs font-bold uppercase tracking-wider mb-2">
                  <FileCheck className="w-3.5 h-3.5" />
                  <span>{isAr ? 'دليل المعاملات الشامل' : 'Comprehensive Service Catalog'}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  {isAr ? 'كافة الخدمات الحكومية المتاحة' : 'All Official Government Services'}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  {isAr
                    ? `عرض ${filteredServices.length} من أصل ${SERVICES.length} خدمة معتمدة مع تفاصيل المتطلبات والرسوم`
                    : `Showing ${filteredServices.length} of ${SERVICES.length} authorized services with itemized government fees.`}
                </p>
              </div>
            </div>

            {/* Category Filter Chips */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                    selectedCategory === cat.id
                      ? 'bg-[#128B94] text-white shadow-xs'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {isAr ? cat.labelAr : cat.labelEn}
                </button>
              ))}
            </div>

            {/* Service Cards Grid */}
            {filteredServices.length === 0 ? (
              <div className="bg-white rounded-xl border border-slate-200 p-12 text-center">
                <SlidersHorizontal className="w-10 h-10 text-slate-300 mx-auto mb-3" />
                <h3 className="text-base font-bold text-slate-800">
                  {isAr ? 'لم يتم العثور على خدمات مطابقة' : 'No matching services found'}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  {isAr
                    ? 'جرب البحث بكلمات أخرى أو اختر دائرة مختلفة من القائمة.'
                    : 'Try modifying your search query or reset the category filters.'}
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                    setSelectedDeptFilter('all');
                  }}
                  className="mt-4 px-4 py-2 rounded-lg bg-[#128B94] text-white text-xs font-bold"
                >
                  {isAr ? 'إعادة ضبط الفلاتر' : 'Reset All Filters'}
                </button>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredServices.map((service) => {
                  const parentDept = DEPARTMENTS.find((d) => d.id === service.departmentId);
                  return (
                    <div
                      key={service.id}
                      className="bg-white rounded-xl border border-slate-200 hover:border-[#128B94] hover:shadow-lg transition-all duration-300 p-6 flex flex-col justify-between group"
                    >
                      <div className="space-y-3">
                        {/* Top Meta */}
                        <div className="flex items-center justify-between text-xs">
                          <button
                            onClick={() => onNavigateToDepartment(service.departmentId)}
                            className="font-bold text-[#128B94] hover:underline flex items-center gap-1.5"
                          >
                            <span className="w-5 h-5 rounded-md bg-white border border-slate-200/90 p-0.5 shrink-0 inline-flex items-center justify-center shadow-2xs">
                              <DepartmentLogo deptId={service.departmentId} className="w-full h-full" />
                            </span>
                            <span>{parentDept ? (isAr ? parentDept.nameAr : parentDept.nameEn) : service.departmentId}</span>
                          </button>
                          <span className="flex items-center gap-1 text-slate-500 font-medium">
                            <Clock className="w-3.5 h-3.5 text-slate-400" />
                            <span>{isAr ? service.processingTimeAr : service.processingTimeEn}</span>
                          </span>
                        </div>

                        {/* Title */}
                        <h3
                          onClick={() => onNavigateToService(service.id)}
                          className="text-base font-bold text-slate-900 group-hover:text-[#128B94] transition-colors cursor-pointer leading-snug line-clamp-2"
                        >
                          {isAr ? service.titleAr : service.titleEn}
                        </h3>

                        {/* Description */}
                        <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                          {isAr ? service.shortDescAr : service.shortDescEn}
                        </p>

                        {/* Fee Strip */}
                        <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-between text-xs">
                          <div>
                            <span className="text-slate-400 text-[10px] block uppercase">
                              {isAr ? 'رسوم الحكومة' : 'Gov Fee'}
                            </span>
                            <span className="font-bold text-slate-800">
                              {service.govFee.toLocaleString()} {isAr ? 'درهم' : 'AED'}
                            </span>
                          </div>
                          <div className="text-right rtl:text-left">
                            <span className="text-slate-400 text-[10px] block uppercase">
                              {isAr ? 'أتعاب الطباعة' : 'ESS Typing'}
                            </span>
                            <span className="font-bold text-[#128B94]">
                              {service.serviceFee.toLocaleString()} {isAr ? 'درهم' : 'AED'}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="mt-5 pt-4 border-t border-slate-100 grid grid-cols-2 gap-2">
                        <button
                          onClick={() => onNavigateToService(service.id)}
                          className="px-3 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors text-center cursor-pointer flex items-center justify-center gap-1"
                        >
                          <span>{isAr ? 'صفحة الخدمة' : 'Full Page'}</span>
                          <ExternalLink className="w-3 h-3 text-slate-500" />
                        </button>
                        <button
                          onClick={() => onOpenBooking(service)}
                          className="px-3 py-2 rounded-lg bg-[#128B94] hover:bg-[#01403F] text-white text-xs font-bold transition-colors text-center cursor-pointer flex items-center justify-center gap-1 shadow-xs"
                        >
                          <Calendar className="w-3 h-3" />
                          <span>{isAr ? 'حجز فوري' : 'Book Service'}</span>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </section>
        )}

        {/* Related & High-Demand Services Navigation */}
        <RelatedServicesSection
          language={language}
          onNavigateToService={onNavigateToService}
          onNavigateToDepartment={onNavigateToDepartment}
          customHeading={isAr ? 'الخدمات الحكومية ذات الصلة' : 'Related Government Services'}
          customEyebrow={isAr ? 'استكشف خدماتنا' : 'EXPLORE OUR SERVICES'}
          customDescription={
            isAr
              ? 'تصفح باقة المعاملات الحكومية الأكثر ارتباطاً وتكاملاً والمتوفرة في مركز الكرامة للأعمال'
              : 'Browse closely connected government transactions and ministerial services coordinated at Karama Business Center.'
          }
          className="border-0 bg-transparent px-0 py-4 mb-4"
        />

        {/* Section 3: 4-Step Universal Government Process */}
        <section className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 shadow-xs">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-teal-50 border border-teal-200 text-[#128B94] text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{isAr ? 'مسار الإنجاز الرسمي' : 'Universal 4-Step Fulfillment'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              {isAr ? 'كيف ننجز معاملتك الحكومية في 4 خطوات ميسرة؟' : 'How We Process Your Transaction in 4 Seamless Steps'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              {isAr
                ? 'إجراءات قانونية موحدة تطبق على كافة الخدمات لضمان قبول المعاملة من المرة الأولى بنسبة 100%'
                : 'Standardized compliance workflow ensuring first-time approval across all ministries.'}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
              <div className="w-8 h-8 rounded-full bg-[#128B94] text-white font-bold text-sm flex items-center justify-center">
                1
              </div>
              <h3 className="text-sm font-bold text-slate-900">
                {isAr ? 'تدقيق الوثائق والأهلية' : 'Document Audit & Verification'}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {isAr
                  ? 'يقوم المستشار القانوني بفحص وتدقيق جوازات السفر والشهادات للتأكد من مطابقتها لاشتراطات الوزارة.'
                  : 'Certified consultants audit your passports, trade licenses, and attestation certificates against ministerial rules.'}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
              <div className="w-8 h-8 rounded-full bg-[#128B94] text-white font-bold text-sm flex items-center justify-center">
                2
              </div>
              <h3 className="text-sm font-bold text-slate-900">
                {isAr ? 'الطباعة والربط الحكومي المباشر' : 'Official Portal Entry & Payment'}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {isAr
                  ? 'إدخال البيانات عبر الأنظمة الرسمية المباشرة ودفع رسوم الخزينة وتوليد رقم المعاملة المرجعي الموحد.'
                  : 'Electronic entry into direct ministerial portals with instant government treasury payment receipts.'}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
              <div className="w-8 h-8 rounded-full bg-[#128B94] text-white font-bold text-sm flex items-center justify-center">
                3
              </div>
              <h3 className="text-sm font-bold text-slate-900">
                {isAr ? 'تسهيل البصمات والفحص الطبي' : 'Priority Biometrics & Medical'}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {isAr
                  ? 'حجز مواعيد البصمة الفورية ومرافقة المتعامل في مسار VIP السريع دون أي تأخير أو انتظار.'
                  : 'Fast-track scheduling for ICP biometrics and express DHA medical fitness testing with same-day results.'}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
              <div className="w-8 h-8 rounded-full bg-[#128B94] text-white font-bold text-sm flex items-center justify-center">
                4
              </div>
              <h3 className="text-sm font-bold text-slate-900">
                {isAr ? 'الاعتماد النهائي والتسليم' : 'Final Issuance & Delivery'}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {isAr
                  ? 'إصدار التأشيرة الإلكترونية أو الرخصة وبطاقة الهوية، وتسليم النسخ الأصلية لمكتبك أو منزلك.'
                  : 'Receiving approved digital permits and doorstep courier delivery of physical Emirates IDs and licenses.'}
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
