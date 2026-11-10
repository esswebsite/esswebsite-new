import React, { useState, useEffect, useRef } from 'react';
import {
  Globe,
  Calendar,
  Menu,
  X,
  ArrowRight,
  ChevronRight,
  ChevronDown,
  Building2,
  HelpCircle,
  Camera,
  MapPin,
  Sparkles,
  Info,
  Layers,
  FileCheck,
  CheckCircle2,
  Shield,
  Clock,
  ExternalLink,
  Award,
  Zap,
  BookOpen,
  Users,
  Calculator,
} from 'lucide-react';
import { Language, ServiceItem } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { BrandLogo } from './BrandLogo';
import { DEPARTMENTS, SERVICES } from '../data/departmentsData';
import { SocialLinks } from './SocialLinks';
import { getDepartmentPath, getServicePath } from '../utils/router';

interface HeaderProps {
  language: Language;
  onLanguageToggle: () => void;
  onOpenBooking: () => void;
  currentPage: string;
  onNavigate: (page: string) => void;
  onNavigateToDepartment?: (deptId: string) => void;
  onNavigateToService?: (serviceId: string) => void;
  isSubpage?: boolean;
  onBackToHome?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  language,
  onLanguageToggle,
  onOpenBooking,
  currentPage,
  onNavigate,
  onNavigateToDepartment,
  onNavigateToService,
  isSubpage,
  onBackToHome,
}) => {
  const t = TRANSLATIONS[language];
  const isAr = language === 'ar';
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Mega Menu state
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [activeMegaDeptId, setActiveMegaDeptId] = useState<string>(DEPARTMENTS[0]?.id || 'amer');
  const megaMenuRef = useRef<HTMLDivElement>(null);
  const megaTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Company Dropdown state
  const [isCompanyMenuOpen, setIsCompanyMenuOpen] = useState(false);
  const companyMenuRef = useRef<HTMLDivElement>(null);

  // Mobile accordion state
  const [mobileExpandedDeptId, setMobileExpandedDeptId] = useState<string | null>(null);
  const [mobileDeptsExpanded, setMobileDeptsExpanded] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  // Close mega menu and company menu on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (megaMenuRef.current && !megaMenuRef.current.contains(e.target as Node)) {
        setIsMegaMenuOpen(false);
      }
      if (companyMenuRef.current && !companyMenuRef.current.contains(e.target as Node)) {
        setIsCompanyMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMouseEnterMega = () => {
    if (megaTimeoutRef.current) {
      clearTimeout(megaTimeoutRef.current);
      megaTimeoutRef.current = null;
    }
    setIsMegaMenuOpen(true);
  };

  const handleMouseLeaveMega = () => {
    megaTimeoutRef.current = setTimeout(() => {
      setIsMegaMenuOpen(false);
    }, 180);
  };

  const handlePageClick = (page: string) => {
    setIsMobileMenuOpen(false);
    setIsMegaMenuOpen(false);
    onNavigate(page);
  };

  const handleDeptSelect = (deptId: string) => {
    setIsMobileMenuOpen(false);
    setIsMegaMenuOpen(false);
    if (onNavigateToDepartment) {
      onNavigateToDepartment(deptId);
    } else {
      onNavigate(getDepartmentPath(deptId, language).replace(/^\//, ''));
    }
  };

  const handleServiceSelect = (serviceId: string) => {
    setIsMobileMenuOpen(false);
    setIsMegaMenuOpen(false);
    if (onNavigateToService) {
      onNavigateToService(serviceId);
    } else {
      onNavigate(getServicePath(serviceId, undefined, language).replace(/^\//, ''));
    }
  };

  const isCurrent = (page: string) => {
    if (page === 'home' && (currentPage === 'home' || !currentPage)) return true;
    if (page === 'departments' && (currentPage === 'departments' || currentPage === 'department' || currentPage === 'service')) return true;
    return currentPage === page;
  };

  const activeDepartment = DEPARTMENTS.find((d) => d.id === activeMegaDeptId) || DEPARTMENTS[0];
  const activeDeptServices = SERVICES.filter((s) => s.departmentId === activeDepartment.id);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ease-in-out ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-teal-100/90 shadow-sm'
          : isMobileMenuOpen
          ? 'bg-white border-b border-slate-200 shadow-sm'
          : 'bg-transparent border-b border-transparent shadow-none'
      }`}
    >
      {/* Main Header Container with decreased refined height */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 sm:h-18 lg:h-20 flex items-center justify-between gap-2 sm:gap-4 lg:gap-6">
        {/* Zone 1: Brand Logo */}
        <div className="flex items-center min-w-0 shrink">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              handlePageClick('home');
            }}
            className="shrink-0 hover:opacity-95 transition-opacity py-0.5 flex items-center min-w-0"
            title="Emirates Secretarial Services & Karama Business Center"
          >
            <div className="hidden md:block">
              <BrandLogo variant="full" />
            </div>
            <div className="md:hidden">
              <BrandLogo variant="compact" />
            </div>
          </a>
        </div>

        {/* Zone 2: True Multi-Page Navigation Menu with MEGA MENU (Desktop) */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-semibold text-slate-700">
          {/* Home */}
          <button
            onClick={() => handlePageClick('home')}
            className={`px-3 py-2 rounded-lg transition-all cursor-pointer whitespace-nowrap ${
              isCurrent('home')
                ? 'text-[#128B94] font-bold bg-teal-50/80'
                : 'hover:text-[#128B94] hover:bg-slate-100/60'
            }`}
          >
            {t.navHome || (isAr ? 'الرئيسية' : 'Home')}
          </button>

          {/* About Us Dropdown (Including Leadership, Team, Clients, Awards, Events, Gallery) */}
          <div
            className="relative"
            ref={companyMenuRef}
            onMouseEnter={() => setIsCompanyMenuOpen(true)}
            onMouseLeave={() => setIsCompanyMenuOpen(false)}
          >
            <button
              onClick={() => setIsCompanyMenuOpen(!isCompanyMenuOpen)}
              className={`px-3 py-2 rounded-lg transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                ['about', 'team', 'ceo', 'clients', 'awards', 'events', 'gallery'].includes(currentPage) || isCompanyMenuOpen
                  ? 'text-[#128B94] font-bold bg-teal-50/80'
                  : 'hover:text-[#128B94] hover:bg-slate-100/60'
              }`}
            >
              <span>{t.navAbout || (isAr ? 'من نحن' : 'About Us')}</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  isCompanyMenuOpen ? 'rotate-180 text-[#128B94]' : 'text-slate-400'
                }`}
              />
            </button>

            {isCompanyMenuOpen && (
              <div className="absolute top-full left-0 rtl:left-auto rtl:right-0 w-84 bg-white rounded-2xl shadow-2xl border border-slate-200/95 py-2.5 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                {/* About Center Profile */}
                <button
                  onClick={() => handlePageClick('about')}
                  className="w-full px-4 py-2.5 text-left rtl:text-right hover:bg-teal-50/80 flex items-center gap-3 cursor-pointer group transition-colors"
                >
                  <div className="w-8 h-8 rounded-xl bg-teal-50 text-[#128B94] flex items-center justify-center text-xs font-bold shrink-0 border border-teal-200/60">
                    <Info className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900 group-hover:text-[#128B94]">
                      {isAr ? 'عن مركز الكرامة (من نحن)' : 'About Karama Business Center'}
                    </div>
                    <div className="text-[10px] text-slate-400">
                      {isAr ? 'تاريخ التأسيس والرسالة منذ 2013' : 'Our story, mission & foundation since 2013'}
                    </div>
                  </div>
                </button>

                {/* CEO Hani Ebrahim */}
                <button
                  onClick={() => handlePageClick('ceo')}
                  className="w-full px-4 py-2.5 text-left rtl:text-right hover:bg-teal-50/80 flex items-center gap-3 cursor-pointer group transition-colors"
                >
                  <div className="w-8 h-8 rounded-xl bg-[#128B94] text-white flex items-center justify-center text-xs font-black shrink-0 shadow-xs">
                    MD
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900 group-hover:text-[#128B94]">
                      {isAr ? 'هاني إبراهيم (الرئيس التنفيذي)' : 'Hani Ebrahim (CEO / MD)'}
                    </div>
                    <div className="text-[10px] text-slate-400">
                      {isAr ? 'رسالة القيادة والرؤية والتأسيس' : 'Executive vision & founder statement'}
                    </div>
                  </div>
                </button>

                {/* Our Team & Officers */}
                <button
                  onClick={() => handlePageClick('team')}
                  className="w-full px-4 py-2.5 text-left rtl:text-right hover:bg-teal-50/80 flex items-center gap-3 cursor-pointer group transition-colors"
                >
                  <div className="w-8 h-8 rounded-xl bg-teal-50 text-[#128B94] flex items-center justify-center text-xs font-bold shrink-0 border border-teal-200/60">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900 group-hover:text-[#128B94]">
                      {isAr ? 'فريق العمل ونخبة المستشارين' : 'Our Team & Officers'}
                    </div>
                    <div className="text-[10px] text-slate-400">
                      {isAr ? 'مجلس الإدارة وكبار ضباط الاتصال' : 'Board of Directors & Senior Officers'}
                    </div>
                  </div>
                </button>

                {/* Our Regular Clients */}
                <button
                  onClick={() => handlePageClick('clients')}
                  className="w-full px-4 py-2.5 text-left rtl:text-right hover:bg-teal-50/80 flex items-center gap-3 cursor-pointer group transition-colors"
                >
                  <div className="w-8 h-8 rounded-xl bg-teal-50 text-[#128B94] flex items-center justify-center text-xs font-bold shrink-0 border border-teal-200/60">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900 group-hover:text-[#128B94]">
                      {isAr ? 'شركاء النجاح وكبار المتعاملين' : 'Our Regular Clients (28)'}
                    </div>
                    <div className="text-[10px] text-slate-400">
                      {isAr ? 'ماريوت، أبل، إعمار، بنك الإمارات' : 'Marriott, Apple, Emaar & Banks'}
                    </div>
                  </div>
                </button>

                {/* Awards & Certifications */}
                <button
                  onClick={() => handlePageClick('awards')}
                  className="w-full px-4 py-2.5 text-left rtl:text-right hover:bg-teal-50/80 flex items-center gap-3 cursor-pointer group transition-colors"
                >
                  <div className="w-8 h-8 rounded-xl bg-teal-50 text-[#128B94] flex items-center justify-center text-xs font-bold shrink-0 border border-teal-200/60">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900 group-hover:text-[#128B94]">
                      {isAr ? 'الجوائز والشهادات والاعتمادات' : 'Awards & Certifications'}
                    </div>
                    <div className="text-[10px] text-slate-400">
                      {isAr ? 'اعتمادات JCI وISO والدفاع المدني' : 'JCI Gold Seal, ISO 9001, FANR'}
                    </div>
                  </div>
                </button>

                {/* Company Events */}
                <button
                  onClick={() => handlePageClick('events')}
                  className="w-full px-4 py-2.5 text-left rtl:text-right hover:bg-teal-50/80 flex items-center gap-3 cursor-pointer group transition-colors"
                >
                  <div className="w-8 h-8 rounded-xl bg-teal-50 text-emerald-700 flex items-center justify-center text-xs font-bold shrink-0 border border-teal-200/60">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900 group-hover:text-[#128B94]">
                      {isAr ? 'الفعاليات والاحتفالات المؤسسية' : 'Events & Celebrations'}
                    </div>
                    <div className="text-[10px] text-slate-400">
                      {isAr ? 'اليوم الوطني، إفطار هايد، يوم العلم' : 'National Day, Ramadan Gala, Flag Day'}
                    </div>
                  </div>
                </button>

                {/* Center Gallery */}
                <button
                  onClick={() => handlePageClick('gallery')}
                  className="w-full px-4 py-2.5 text-left rtl:text-right hover:bg-teal-50/80 flex items-center gap-3 cursor-pointer group transition-colors border-t border-slate-100 mt-1 pt-2.5"
                >
                  <div className="w-8 h-8 rounded-xl bg-teal-50 text-[#128B94] flex items-center justify-center text-xs font-bold shrink-0 border border-teal-200/60">
                    <Camera className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900 group-hover:text-[#128B94]">
                      {isAr ? 'معرض المركز ومجلس VIP' : 'Center Gallery & Facilities'}
                    </div>
                    <div className="text-[10px] text-slate-400">
                      {isAr ? 'جولة مصورة بمرافق المركز والصالات ومجلس VIP' : 'Photo tour of VIP Majlis & Smart Desks'}
                    </div>
                  </div>
                </button>
              </div>
            )}
          </div>

          {/* Departments & Services with Comprehensive MEGA MENU */}
          <div
            className="relative"
            ref={megaMenuRef}
            onMouseEnter={handleMouseEnterMega}
            onMouseLeave={handleMouseLeaveMega}
          >
            <div className="flex items-center">
              <button
                onClick={() => {
                  setIsMegaMenuOpen(!isMegaMenuOpen);
                }}
                className={`px-3.5 py-2 rounded-lg transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                  isCurrent('departments') || isMegaMenuOpen
                    ? 'text-[#128B94] font-bold bg-teal-50/90'
                    : 'hover:text-[#128B94] hover:bg-slate-100/60'
                }`}
                aria-expanded={isMegaMenuOpen}
                aria-haspopup="true"
              >
                <span>{t.navDepartmentsServices || (isAr ? 'الدوائر والخدمات' : 'Departments & Services')}</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isMegaMenuOpen ? 'rotate-180 text-[#128B94]' : 'text-slate-400'
                  }`}
                />
              </button>
            </div>

            {/* Desktop MEGA MENU Panel */}
            {isMegaMenuOpen && (
              <div
                className="fixed lg:absolute top-[80px] lg:top-full left-1/2 -translate-x-1/2 w-[95vw] max-w-6xl mt-1.5 bg-white rounded-2xl shadow-2xl border border-slate-200/90 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                style={{ maxHeight: 'calc(100vh - 120px)' }}
              >
                {/* Top Teal Gradient Accent Bar */}
                <div className="h-1 w-full bg-gradient-to-r from-[#128B94] via-[#01403F] to-[#128B94]" />

                <div className="flex flex-col lg:flex-row h-[520px]">
                  {/* Left Side: Departments Directory (List of all 10 departments) */}
                  <div className="w-full lg:w-[360px] xl:w-[400px] bg-slate-50/90 border-r rtl:border-r-0 rtl:border-l border-slate-200/80 p-3.5 flex flex-col justify-between shrink-0">
                    <div>
                      {/* Left Header */}
                      <div className="px-3 pb-2.5 pt-1 border-b border-slate-200/80 flex items-center justify-between">
                        <div>
                          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                            {isAr ? 'الدوائر الحكومية المعتمدة' : 'Official Departments'}
                          </span>
                          <span className="ml-2 rtl:ml-0 rtl:mr-2 text-[11px] font-bold text-[#128B94] bg-teal-50 px-2 py-0.5 rounded-full border border-teal-200/60">
                            {DEPARTMENTS.length} {isAr ? 'دوائر' : 'Depts'}
                          </span>
                        </div>
                        <button
                          onClick={() => handlePageClick('departments')}
                          className="text-xs font-bold text-[#128B94] hover:text-[#01403F] hover:underline cursor-pointer"
                        >
                          {isAr ? 'الدليل الشامل' : 'Full Index'}
                        </button>
                      </div>

                      {/* Scrollable Departments Tab List */}
                      <div className="py-2 space-y-1 overflow-y-auto max-h-[390px] pr-1 no-scrollbar">
                        {DEPARTMENTS.map((dept) => {
                          const isSelected = dept.id === activeDepartment.id;
                          const count = SERVICES.filter((s) => s.departmentId === dept.id).length;
                          return (
                            <div
                              key={dept.id}
                              onMouseEnter={() => setActiveMegaDeptId(dept.id)}
                              onClick={() => setActiveMegaDeptId(dept.id)}
                              className={`group px-3 py-2.5 rounded-xl transition-all cursor-pointer flex items-center justify-between text-left rtl:text-right ${
                                isSelected
                                  ? 'bg-white text-[#01403F] font-bold shadow-xs border border-teal-200/90 border-l-4 rtl:border-l-0 rtl:border-r-4 border-l-[#128B94] rtl:border-r-[#128B94]'
                                  : 'text-slate-700 hover:bg-white/80 hover:text-[#128B94]'
                              }`}
                            >
                              <div className="flex items-center gap-2.5 min-w-0 pr-2 rtl:pr-0 rtl:pl-2">
                                <div
                                  className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                                    isSelected
                                      ? 'bg-teal-50 text-[#128B94]'
                                      : 'bg-slate-200/60 text-slate-500 group-hover:bg-teal-50 group-hover:text-[#128B94]'
                                  }`}
                                >
                                  <Building2 className="w-3.5 h-3.5" />
                                </div>
                                <div className="truncate">
                                  <div className="text-xs font-bold truncate leading-snug">
                                    {isAr ? dept.nameAr : dept.nameEn}
                                  </div>
                                  <div className="text-[10px] text-slate-400 group-hover:text-slate-500 font-mono tracking-tight uppercase truncate">
                                    {dept.code}
                                  </div>
                                </div>
                              </div>

                              <div className="flex items-center gap-1.5 shrink-0">
                                <span className="text-[10px] font-semibold text-slate-400 group-hover:text-[#128B94] bg-slate-100 group-hover:bg-teal-50 px-1.5 py-0.5 rounded">
                                  {count} {isAr ? 'خدمات' : 'services'}
                                </span>
                                <ChevronRight
                                  className={`w-3.5 h-3.5 rtl:rotate-180 transition-transform ${
                                    isSelected ? 'text-[#128B94] translate-x-0.5 rtl:-translate-x-0.5' : 'text-slate-300'
                                  }`}
                                />
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Left Bottom Footer Action */}
                    <div className="pt-2 border-t border-slate-200/80 space-y-1.5">
                      <button
                        onClick={() => handlePageClick('pricelist')}
                        className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#128B94] to-[#01403F] hover:from-[#0f767e] hover:to-[#012f2e] text-white text-xs font-bold text-center transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                      >
                        <Calculator className="w-4 h-4 text-white shrink-0" />
                        <span>{isAr ? 'جدول أسعار ورسوم الخدمات (حاسبة)' : 'Official Services Price List & Calculator'}</span>
                      </button>

                      <button
                        onClick={() => handlePageClick('departments')}
                        className="w-full py-2 px-3 rounded-xl bg-teal-50 hover:bg-teal-100 text-[#128B94] hover:text-[#01403F] text-xs font-bold text-center transition-colors flex items-center justify-center gap-1.5 cursor-pointer border border-teal-200/60"
                      >
                        <Layers className="w-3.5 h-3.5 shrink-0" />
                        <span>{isAr ? 'تصفح جميع الدوائر والخدمات' : 'View Full Services Directory'}</span>
                      </button>
                    </div>
                  </div>

                  {/* Right Side: Services that come under each department */}
                  <div className="flex-1 p-5 xl:p-6 flex flex-col justify-between bg-white overflow-hidden">
                    {/* Active Department Header Banner */}
                    <div className="pb-3.5 border-b border-slate-100 flex items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-base xl:text-lg font-bold text-slate-900">
                            {isAr ? activeDepartment.nameAr : activeDepartment.nameEn}
                          </h3>
                          <span className="text-[10px] font-mono uppercase font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded border border-teal-200/60">
                            {activeDepartment.code}
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 mt-0.5">
                          {isAr ? activeDepartment.subTitleAr : activeDepartment.subTitleEn} ·{' '}
                          <span className="text-emerald-700 font-medium">
                            {isAr ? activeDepartment.accreditationAr : activeDepartment.accreditationEn}
                          </span>
                        </p>
                      </div>

                      {/* Direct Link to Single Department Page */}
                      <button
                        onClick={() => handleDeptSelect(activeDepartment.id)}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold text-[#128B94] bg-teal-50 hover:bg-[#128B94] hover:text-white border border-teal-200 transition-all shrink-0 cursor-pointer shadow-2xs"
                      >
                        <span>{isAr ? 'بوابة الدائرة الكاملة' : 'View Department Portal'}</span>
                        <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
                      </button>
                    </div>

                    {/* Services Grid under Active Department */}
                    <div className="py-3 flex-1 overflow-y-auto no-scrollbar pr-1">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center justify-between">
                        <span>
                          {isAr
                            ? `الخدمات المعتمدة تحت هذه الدائرة (${activeDeptServices.length})`
                            : `Authorized Services Under This Department (${activeDeptServices.length})`}
                        </span>
                        <span className="text-[10px] text-slate-400 normal-case">
                          {isAr ? 'اضغط لفتح صفحة المعاملة' : 'Click to open service page'}
                        </span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                        {activeDeptServices.map((service) => (
                          <div
                            key={service.id}
                            onClick={() => handleServiceSelect(service.id)}
                            className="p-3 rounded-xl border border-slate-200/80 hover:border-teal-300 hover:bg-teal-50/40 transition-all cursor-pointer group flex flex-col justify-between gap-2 shadow-2xs"
                          >
                            <div className="flex items-start justify-between gap-2">
                              <h4 className="text-xs font-bold text-slate-900 group-hover:text-[#128B94] transition-colors leading-snug line-clamp-2">
                                {isAr ? service.titleAr : service.titleEn}
                              </h4>
                              <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-[#128B94] group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5 rtl:rotate-180 transition-all shrink-0 mt-0.5" />
                            </div>

                            <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed">
                              {isAr ? service.shortDescAr : service.shortDescEn}
                            </p>

                            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] font-medium text-slate-600">
                              <span className="flex items-center gap-1 text-slate-500">
                                <Clock className="w-3 h-3 text-[#128B94]" />
                                <span>{isAr ? service.processingTimeAr : service.processingTimeEn}</span>
                              </span>

                              <div className="flex items-center gap-1.5">
                                <span className="font-bold text-slate-800">
                                  {service.departmentId === 'ded' || service.departmentId === 'det' || service.isPriceUponConsultation
                                    ? (isAr ? 'حسب النشاط' : 'Upon Consultation')
                                    : `${isAr ? 'الرسم الحكومي:' : 'Gov:'} ${service.govFee.toLocaleString()} ${isAr ? 'درهم' : 'AED'}`}
                                </span>
                                {service.isPopular && (
                                  <span className="text-[9px] font-bold text-[#128B94] bg-teal-50 px-1.5 py-0.2 rounded border border-teal-200/60 uppercase">
                                    {isAr ? 'شائع' : 'Popular'}
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Helper Bar of Right Side */}
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3 text-xs bg-slate-50/60 -mx-5 xl:-mx-6 -mb-5 xl:-mb-6 p-4">
                      <div className="flex items-center gap-2 text-slate-600 text-[11px]">
                        <Shield className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>
                          {isAr
                            ? 'ربط مباشر بالبوابات الحكومية الرسمية مع تدقيق المستندات المسبق والتحقق من استيفاء المتطلبات.'
                            : 'Direct ministerial gateway lodgement with comprehensive pre-audit and strict regulatory alignment.'}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          onClick={() => handlePageClick('pricelist')}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#128B94] hover:bg-[#01403F] text-white font-bold text-xs transition-colors cursor-pointer shadow-xs"
                        >
                          <Calculator className="w-3.5 h-3.5 text-white" />
                          <span>{isAr ? 'جدول الأسعار والحاسبة' : 'Price List & Calculator'}</span>
                        </button>

                        <button
                          onClick={() => {
                            setIsMegaMenuOpen(false);
                            onOpenBooking();
                          }}
                          className="px-3.5 py-1.5 rounded-lg bg-[#128B94] hover:bg-[#01403F] text-white font-bold text-xs transition-colors shrink-0 cursor-pointer shadow-xs"
                        >
                          {isAr ? 'حجز موعد لهذه الدائرة' : 'Book Appointment for Dept'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Knowledge Hub & Blog */}
          <button
            onClick={() => handlePageClick('blog')}
            className={`px-3 py-2 rounded-lg transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
              isCurrent('blog')
                ? 'text-[#128B94] font-bold bg-teal-50/80'
                : 'hover:text-[#128B94] hover:bg-slate-100/60'
            }`}
          >
            <BookOpen className="w-4 h-4 text-[#128B94]" />
            <span>{isAr ? 'المدونة وأدلة المعاملات' : 'Knowledge Hub'}</span>
          </button>


          {/* FAQ */}
          <button
            onClick={() => handlePageClick('faq')}
            className={`px-3 py-2 rounded-lg transition-all cursor-pointer whitespace-nowrap ${
              isCurrent('faq')
                ? 'text-[#128B94] font-bold bg-teal-50/80'
                : 'hover:text-[#128B94] hover:bg-slate-100/60'
            }`}
          >
            {t.navFaq || (isAr ? 'الأسئلة الشائعة' : 'FAQ')}
          </button>

          {/* Contact */}
          <button
            onClick={() => handlePageClick('contact')}
            className={`px-3 py-2 rounded-lg transition-all cursor-pointer whitespace-nowrap ${
              isCurrent('contact')
                ? 'text-[#128B94] font-bold bg-teal-50/80'
                : 'hover:text-[#128B94] hover:bg-slate-100/60'
            }`}
          >
            {t.navContact || (isAr ? 'اتصل بنا' : 'Contact Us')}
          </button>
        </nav>

        {/* Zone 3: Actions + Language Toggle + Mobile Toggle (Clean, Mobile-friendly, No Overlap) */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 lg:gap-3 shrink-0">
          {/* Language Switcher */}
          <button
            onClick={onLanguageToggle}
            className={`inline-flex items-center gap-1 sm:gap-1.5 px-2 py-1.5 sm:px-3 sm:py-2 text-[11px] sm:text-xs font-bold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer border ${
              isScrolled
                ? 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200/80'
                : 'bg-white/85 hover:bg-white text-slate-800 border-slate-200/70 shadow-2xs backdrop-blur-xs'
            }`}
            aria-label="Toggle language"
            title="Switch Language (English / العربية)"
          >
            <Globe className="w-3.5 h-3.5 text-[#128B94] shrink-0" />
            <span className="sm:hidden">{language === 'en' ? 'عربي' : 'EN'}</span>
            <span className="hidden sm:inline">{language === 'en' ? 'العربية' : 'English'}</span>
          </button>

          {/* Book Appointment CTA */}
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-1 sm:gap-2 px-2.5 py-1.5 sm:px-3.5 sm:py-2 text-xs sm:text-sm font-bold text-white bg-[#128B94] hover:bg-[#01403F] rounded-lg shadow-xs transition-all whitespace-nowrap shrink-0 cursor-pointer active:scale-[0.98]"
          >
            <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white shrink-0" />
            <span className="hidden sm:inline">{t.bookAppointmentBtn}</span>
            <span className="sm:hidden">{language === 'ar' ? 'حجز' : 'Book'}</span>
          </button>

          {/* Mobile Menu Hamburger Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-1.5 sm:p-2 rounded-lg text-slate-700 hover:text-[#128B94] hover:bg-slate-100 border border-slate-200/80 cursor-pointer ${
              isScrolled ? 'bg-slate-100' : 'bg-white/85 backdrop-blur-xs shadow-2xs'
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu (Complete Multi-Page + Hierarchical Departments & Services, NO Phone Number) */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-lg border-b border-teal-100 shadow-xl px-4 py-6 transition-all animate-in slide-in-from-top-4 duration-200 max-h-[85vh] overflow-y-auto no-scrollbar">
          <div className="px-2 pb-2 text-[11px] font-bold uppercase tracking-wider text-slate-400">
            {isAr ? 'الصفحات الرئيسية' : 'Main Website Pages'}
          </div>
          <nav className="flex flex-col gap-1.5 text-sm font-semibold text-slate-800">
            {/* Home */}
            <button
              onClick={() => handlePageClick('home')}
              className={`flex items-center justify-between p-3 rounded-lg text-left rtl:text-right transition-colors cursor-pointer ${
                isCurrent('home')
                  ? 'bg-teal-50 text-[#128B94] font-bold'
                  : 'hover:bg-slate-50 text-slate-800'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Building2 className="w-4 h-4 text-[#128B94]" />
                <span>{t.navHome || (isAr ? 'الرئيسية' : 'Home')}</span>
              </div>
              <ArrowRight className="w-4 h-4 rtl:rotate-180 text-slate-400" />
            </button>



            {/* Departments & Services Accordion */}
            <div className="rounded-lg border border-slate-200/80 overflow-hidden bg-slate-50/50">
              <button
                onClick={() => setMobileDeptsExpanded(!mobileDeptsExpanded)}
                className={`w-full flex items-center justify-between p-3 text-left rtl:text-right transition-colors cursor-pointer ${
                  mobileDeptsExpanded || isCurrent('departments')
                    ? 'bg-teal-50/80 text-[#128B94] font-bold'
                    : 'hover:bg-slate-100/60 text-slate-800'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Layers className="w-4 h-4 text-[#128B94]" />
                  <span>{t.navDepartmentsServices || (isAr ? 'الدوائر والخدمات' : 'Departments & Services')}</span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 transition-transform ${
                    mobileDeptsExpanded ? 'rotate-180 text-[#128B94]' : ''
                  }`}
                />
              </button>

              {/* Sub-departments & sub-services on mobile */}
              {mobileDeptsExpanded && (
                <div className="p-2 space-y-1.5 bg-white border-t border-slate-200/80">
                  <button
                    onClick={() => handlePageClick('pricelist')}
                    className="w-full p-2.5 rounded-lg bg-gradient-to-r from-[#128B94] to-[#01403F] text-white font-bold text-xs flex items-center justify-between cursor-pointer shadow-xs"
                  >
                    <div className="flex items-center gap-2">
                      <Calculator className="w-4 h-4 text-white shrink-0" />
                      <span>{isAr ? 'جدول أسعار ورسوم الخدمات (حاسبة)' : 'Official Services Price List & Calculator'}</span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180 shrink-0" />
                  </button>

                  <button
                    onClick={() => handlePageClick('departments')}
                    className="w-full p-2.5 rounded-lg bg-teal-50 hover:bg-teal-100 text-[#128B94] font-bold text-xs flex items-center justify-between cursor-pointer"
                  >
                    <span>{isAr ? 'تصفح الدليل الشامل لجميع الدوائر والخدمات' : 'Browse Full Departments Directory'}</span>
                    <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
                  </button>

                  <div className="space-y-1 pt-1 max-h-72 overflow-y-auto pr-1 no-scrollbar">
                    {DEPARTMENTS.map((dept) => {
                      const isDeptOpen = mobileExpandedDeptId === dept.id;
                      const deptServices = SERVICES.filter((s) => s.departmentId === dept.id);
                      return (
                        <div key={dept.id} className="rounded-lg border border-slate-100 overflow-hidden">
                          <div
                            onClick={() => setMobileExpandedDeptId(isDeptOpen ? null : dept.id)}
                            className="p-2.5 bg-slate-50 hover:bg-teal-50/60 flex items-center justify-between cursor-pointer"
                          >
                            <div className="min-w-0 pr-2 rtl:pr-0 rtl:pl-2">
                              <div className="text-xs font-bold text-slate-800 truncate">
                                {isAr ? dept.nameAr : dept.nameEn}
                              </div>
                              <div className="text-[10px] text-slate-400 font-mono uppercase">{dept.code}</div>
                            </div>
                            <div className="flex items-center gap-1 shrink-0">
                              <span className="text-[10px] text-slate-400">{deptServices.length}</span>
                              <ChevronDown
                                className={`w-3.5 h-3.5 text-slate-400 transition-transform ${
                                  isDeptOpen ? 'rotate-180 text-[#128B94]' : ''
                                }`}
                              />
                            </div>
                          </div>

                          {isDeptOpen && (
                            <div className="p-2 bg-white space-y-1 border-t border-slate-100">
                              <button
                                onClick={() => handleDeptSelect(dept.id)}
                                className="w-full text-left rtl:text-right px-2 py-1.5 rounded text-[11px] font-bold text-[#128B94] hover:bg-teal-50 flex items-center justify-between cursor-pointer"
                              >
                                <span>{isAr ? 'فتح صفحة الدائرة' : 'Open Department Portal'}</span>
                                <ArrowRight className="w-3 h-3 rtl:rotate-180" />
                              </button>

                              {deptServices.map((service) => (
                                <button
                                  key={service.id}
                                  onClick={() => handleServiceSelect(service.id)}
                                  className="w-full text-left rtl:text-right px-2 py-1.5 rounded text-[11px] text-slate-700 hover:text-[#128B94] hover:bg-slate-50 flex items-center justify-between cursor-pointer"
                                >
                                  <span className="truncate pr-2 rtl:pr-0 rtl:pl-2">
                                    {isAr ? service.titleAr : service.titleEn}
                                  </span>
                                  <span className="text-[10px] text-slate-400 shrink-0 font-mono">
                                    {service.departmentId === 'ded' || service.departmentId === 'det' || service.isPriceUponConsultation
                                      ? (isAr ? 'حسب النشاط' : 'Consultation')
                                      : `${service.govFee} AED`}
                                  </span>
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* About Us & Leadership Section (Mobile) */}
            <div className="pt-2 pb-1 px-2 text-[11px] font-bold uppercase tracking-wider text-[#128B94] flex items-center gap-1.5">
              <Sparkles className="w-3 h-3" />
              <span>{t.navAbout || (isAr ? 'من نحن' : 'About Us')}</span>
            </div>

            {/* About Center */}
            <button
              onClick={() => handlePageClick('about')}
              className={`flex items-center justify-between p-3 rounded-lg text-left rtl:text-right transition-colors cursor-pointer ${
                isCurrent('about')
                  ? 'bg-teal-50 text-[#128B94] font-bold'
                  : 'hover:bg-slate-50 text-slate-800'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Info className="w-4 h-4 text-[#128B94]" />
                <span>{isAr ? 'عن مركز الكرامة للأعمال (من نحن)' : 'About Karama Business Center'}</span>
              </div>
              <ArrowRight className="w-4 h-4 rtl:rotate-180 text-slate-400" />
            </button>

            {/* CEO Hani Ebrahim */}
            <button
              onClick={() => handlePageClick('ceo')}
              className={`flex items-center justify-between p-3 rounded-lg text-left rtl:text-right transition-colors cursor-pointer ${
                isCurrent('ceo')
                  ? 'bg-teal-50 text-[#128B94] font-bold border border-teal-200'
                  : 'hover:bg-slate-50 text-slate-800'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <span className="w-6 h-6 rounded-md bg-[#128B94] text-white font-black text-[10px] flex items-center justify-center">MD</span>
                <span>{isAr ? 'هاني إبراهيم (الرئيس التنفيذي)' : 'Hani Ebrahim (CEO / MD)'}</span>
              </div>
              <ArrowRight className="w-4 h-4 rtl:rotate-180 text-slate-400" />
            </button>

            {/* Our Team */}
            <button
              onClick={() => handlePageClick('team')}
              className={`flex items-center justify-between p-3 rounded-lg text-left rtl:text-right transition-colors cursor-pointer ${
                isCurrent('team')
                  ? 'bg-teal-50 text-[#128B94] font-bold'
                  : 'hover:bg-slate-50 text-slate-800'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Users className="w-4 h-4 text-[#128B94]" />
                <span>{isAr ? 'فريق العمل ونخبة المستشارين' : 'Our Team & Officers'}</span>
              </div>
              <ArrowRight className="w-4 h-4 rtl:rotate-180 text-slate-400" />
            </button>

            {/* Regular Clients */}
            <button
              onClick={() => handlePageClick('clients')}
              className={`flex items-center justify-between p-3 rounded-lg text-left rtl:text-right transition-colors cursor-pointer ${
                isCurrent('clients')
                  ? 'bg-teal-50 text-[#128B94] font-bold'
                  : 'hover:bg-slate-50 text-slate-800'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Building2 className="w-4 h-4 text-[#128B94]" />
                <span>{isAr ? 'شركاء النجاح وكبار المتعاملين (28)' : 'Our Regular Clients (28)'}</span>
              </div>
              <ArrowRight className="w-4 h-4 rtl:rotate-180 text-slate-400" />
            </button>

            {/* Awards & Certifications */}
            <button
              onClick={() => handlePageClick('awards')}
              className={`flex items-center justify-between p-3 rounded-lg text-left rtl:text-right transition-colors cursor-pointer ${
                isCurrent('awards')
                  ? 'bg-teal-50 text-[#128B94] font-bold'
                  : 'hover:bg-slate-50 text-slate-800'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Award className="w-4 h-4 text-[#128B94]" />
                <span>{isAr ? 'الجوائز والشهادات (JCI & ISO)' : 'Awards & Certifications'}</span>
              </div>
              <ArrowRight className="w-4 h-4 rtl:rotate-180 text-slate-400" />
            </button>

            {/* Company Events */}
            <button
              onClick={() => handlePageClick('events')}
              className={`flex items-center justify-between p-3 rounded-lg text-left rtl:text-right transition-colors cursor-pointer ${
                isCurrent('events')
                  ? 'bg-teal-50 text-[#128B94] font-bold'
                  : 'hover:bg-slate-50 text-slate-800'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                <span>{isAr ? 'الفعاليات والاحتفالات' : 'Events & Celebrations'}</span>
              </div>
              <ArrowRight className="w-4 h-4 rtl:rotate-180 text-slate-400" />
            </button>

            {/* Gallery (Under About Us) */}
            <button
              onClick={() => handlePageClick('gallery')}
              className={`flex items-center justify-between p-3 rounded-lg text-left rtl:text-right transition-colors cursor-pointer ${
                isCurrent('gallery')
                  ? 'bg-teal-50 text-[#128B94] font-bold'
                  : 'hover:bg-slate-50 text-slate-800'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Camera className="w-4 h-4 text-[#128B94]" />
                <span>{t.navGallery || (isAr ? 'معرض المركز ومجلس VIP' : 'Center Gallery & Facilities')}</span>
              </div>
              <ArrowRight className="w-4 h-4 rtl:rotate-180 text-slate-400" />
            </button>

            {/* Knowledge Hub & Blog */}
            <button
              onClick={() => handlePageClick('blog')}
              className={`flex items-center justify-between p-3 rounded-lg text-left rtl:text-right transition-colors cursor-pointer ${
                isCurrent('blog')
                  ? 'bg-teal-50 text-[#128B94] font-bold'
                  : 'hover:bg-slate-50 text-slate-800'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <BookOpen className="w-4 h-4 text-[#128B94]" />
                <span>{isAr ? 'المدونة وأدلة المعاملات' : 'Knowledge Hub & Blog'}</span>
              </div>
              <ArrowRight className="w-4 h-4 rtl:rotate-180 text-slate-400" />
            </button>

            {/* FAQ */}
            <button
              onClick={() => handlePageClick('faq')}
              className={`flex items-center justify-between p-3 rounded-lg text-left rtl:text-right transition-colors cursor-pointer ${
                isCurrent('faq')
                  ? 'bg-teal-50 text-[#128B94] font-bold'
                  : 'hover:bg-slate-50 text-slate-800'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <HelpCircle className="w-4 h-4 text-[#128B94]" />
                <span>{t.navFaq || (isAr ? 'الأسئلة الشائعة' : 'FAQ')}</span>
              </div>
              <ArrowRight className="w-4 h-4 rtl:rotate-180 text-slate-400" />
            </button>

            {/* Contact */}
            <button
              onClick={() => handlePageClick('contact')}
              className={`flex items-center justify-between p-3 rounded-lg text-left rtl:text-right transition-colors cursor-pointer ${
                isCurrent('contact')
                  ? 'bg-teal-50 text-[#128B94] font-bold'
                  : 'hover:bg-slate-50 text-slate-800'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#128B94]" />
                <span>{t.navContact || (isAr ? 'اتصل بنا وموقع المركز' : 'Contact Us & Location')}</span>
              </div>
              <ArrowRight className="w-4 h-4 rtl:rotate-180 text-slate-400" />
            </button>
          </nav>

          {/* Quick Tools & Language Switcher in Mobile Drawer */}
          <div className="mt-4 pt-4 border-t border-slate-200">
            <div className="flex items-center justify-between px-2 pb-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                {isAr ? 'أدوات مساعدة واللغة' : 'Tools & Language'}
              </span>
              <button
                onClick={onLanguageToggle}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-bold text-[#128B94] bg-teal-50 hover:bg-teal-100 rounded-md border border-teal-200/70 transition-colors cursor-pointer"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>{language === 'en' ? 'التحويل إلى العربية' : 'Switch to English'}</span>
              </button>
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <button
                onClick={() => handlePageClick('calculator')}
                className="p-2.5 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-700 font-semibold text-center border border-slate-200/80 cursor-pointer"
              >
                {t.navCalculator}
              </button>
              <button
                onClick={() => handlePageClick('vip-mobile')}
                className="p-2.5 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-700 font-semibold text-center border border-slate-200/80 cursor-pointer"
              >
                {isAr ? 'خدمة VIP والمتحركة' : 'VIP & Mobile Van'}
              </button>
            </div>
          </div>

          {/* Social Channels in Mobile Drawer */}
          <div className="mt-4 pt-3 border-t border-slate-200/80 flex items-center justify-between px-1">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
              {isAr ? 'تابعنا' : 'Connect'}
            </span>
            <SocialLinks variant="icons" />
          </div>

          {/* Booking CTA Button (Strictly NO Phone Number) */}
          <div className="mt-3 pt-2 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 px-4 text-sm font-bold text-white bg-[#128B94] hover:bg-[#01403F] rounded-lg shadow-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>{t.bookAppointmentBtn}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
