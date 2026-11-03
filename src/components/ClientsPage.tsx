import React, { useState } from 'react';
import { Language } from '../types';
import { REGULAR_CUSTOMERS, ClientPartner } from '../data/companyProfileData';
import { CLIENT_LOGO_MAP } from '../data/clientsData';
import {
  Building2,
  CheckCircle2,
  Search,
  Sparkles,
  Briefcase,
  PhoneCall,
  Calendar,
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  Truck,
  HeartPulse,
  Hotel,
  Landmark,
  Cpu,
  ShoppingBag
} from 'lucide-react';

interface ClientsPageProps {
  language: Language;
  onNavigateToHome: () => void;
  onNavigateToContact: () => void;
  onOpenBooking: () => void;
}

export const ClientsPage: React.FC<ClientsPageProps> = ({
  language,
  onNavigateToHome,
  onNavigateToContact,
  onOpenBooking,
}) => {
  const isAr = language === 'ar';
  const [selectedSector, setSelectedSector] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const sectors = [
    { id: 'all', labelEn: 'All Sectors (29)', labelAr: 'كافة القطاعات (29)' },
    { id: 'Hospitality', labelEn: 'Hospitality & Hotels', labelAr: 'الضيافة والفنادق' },
    { id: 'Healthcare', labelEn: 'Healthcare & Hospitals', labelAr: 'المستشفيات والرعاية' },
    { id: 'Banking & Finance', labelEn: 'Banking & Finance', labelAr: 'البنوك والمالية' },
    { id: 'Tech & E-Commerce', labelEn: 'Tech & E-Commerce', labelAr: 'التكنولوجيا والتجارة' },
    { id: 'Retail & Conglomerates', labelEn: 'Retail & Conglomerates', labelAr: 'التجزئة والمجموعات' },
    { id: 'Automotive & Government', labelEn: 'Automotive & Government', labelAr: 'السيارات والجهات الحكومية' },
  ];

  const filteredClients = REGULAR_CUSTOMERS.filter((client) => {
    const matchesSector =
      selectedSector === 'all' || client.sector === selectedSector;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !q ||
      client.name.toLowerCase().includes(q) ||
      client.nameAr.toLowerCase().includes(q) ||
      client.taglineEn.toLowerCase().includes(q) ||
      client.taglineAr.toLowerCase().includes(q) ||
      client.servicesProvidedEn.some((s) => s.toLowerCase().includes(q));
    return matchesSector && matchesSearch;
  });

  return (
    <div className={`min-h-screen bg-slate-50 text-slate-800 pt-18 sm:pt-22 lg:pt-24 pb-20 ${isAr ? 'font-arabic' : ''}`}>
      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500">
            <button
              onClick={onNavigateToHome}
              className="hover:text-[#128B94] transition-colors cursor-pointer font-medium"
            >
              {isAr ? 'الرئيسية' : 'Home'}
            </button>
            <span className="text-slate-300">/</span>
            <span className="text-slate-800 font-semibold">
              {isAr ? 'شركاء النجاح وكبار المتعاملين' : 'Our Regular Clients & Enterprise Partners'}
            </span>
          </div>
        </div>
      </div>

      {/* Hero Header */}
      <div className="bg-gradient-to-br from-slate-900 via-[#0B3A3E] to-slate-950 text-white py-14 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b border-[#128B94]/20">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#128B94_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#128B94]/15 border border-[#128B94]/30 text-teal-200 text-xs font-semibold uppercase tracking-wider mb-4">
            <Building2 className="w-4 h-4 text-[#128B94]" />
            {isAr ? 'كبار شركاء الأعمال من كبرى الشركات العالمية والمحلية' : 'Trusted by UAE & Global Market Leaders'}
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-serif tracking-tight leading-tight mb-4">
            {isAr
              ? 'شركاؤنا الدائمون وكبرى الشركات في دولة الإمارات'
              : 'Our Regular Clients: Driving Enterprise Success Across 29+ Leading Conglomerates'}
          </h1>
          <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            {isAr
              ? 'تعتمد علينا نخبة من كبرى المجموعات الفندقية والمستشفيات والبنوك وشركات التكنولوجيا لإدارة معاملات آلاف الموظفين سنوياً.'
              : 'From Marriott and Apple to Emirates NBD and Aster Healthcare, Dubai’s foremost enterprises rely on Karama Business Center for high-volume corporate visas, staff medicals, and DED licensing.'}
          </p>

          {/* Search Box */}
          <div className="mt-8 max-w-lg mx-auto relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={
                isAr
                  ? 'ابحث باسم الشركة أو القطاع أو الخدمة (مثل: ماريوت، بنك، إعمار)...'
                  : 'Search by client name, industry, or service (e.g. Marriott, Emaar, Apple)...'
              }
              className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-slate-400 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#128B94] focus:bg-slate-900/90 transition-all shadow-lg"
            />
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          </div>
        </div>
      </div>

      {/* Enterprise Statistics Bar */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl sm:text-3xl font-black text-[#128B94]">29+</div>
              <div className="text-xs text-slate-500 font-semibold mt-1">
                {isAr ? 'كبرى الشركات والمجموعات الدائمة' : 'Enterprise Corporate Clients'}
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-[#128B94]">150K+</div>
              <div className="text-xs text-slate-500 font-semibold mt-1">
                {isAr ? 'معاملة مؤسسية منجزة سنوياً' : 'Corporate Visas & OHCs Yearly'}
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-emerald-600">99.8%</div>
              <div className="text-xs text-slate-500 font-semibold mt-1">
                {isAr ? 'نسبة الالتزام بالوقت القياسي' : 'First-Pass Approval & SLA Rate'}
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-slate-900">Dedicated</div>
              <div className="text-xs text-slate-500 font-semibold mt-1">
                {isAr ? 'حسابات مؤسسية ومندوب مخصص' : 'Key Account Manager & Van Liaison'}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Sector Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {sectors.map((sec) => (
            <button
              key={sec.id}
              onClick={() => setSelectedSector(sec.id)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap cursor-pointer transition-all ${
                selectedSector === sec.id
                  ? 'bg-[#128B94] text-white shadow-md'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {isAr ? sec.labelAr : sec.labelEn}
            </button>
          ))}
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredClients.map((client) => (
            <div
              key={client.id}
              className="bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between group"
            >
              <div>
                {/* Header with Brand Logo Badge */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="w-16 h-14 rounded-2xl bg-white border border-slate-200/90 p-2 flex items-center justify-center shadow-xs overflow-hidden group-hover:border-[#128B94]/60 group-hover:scale-105 transition-all duration-200 shrink-0">
                    {CLIENT_LOGO_MAP[client.id] ? (
                      <img
                        src={CLIENT_LOGO_MAP[client.id]}
                        alt={client.name}
                        className="max-h-full max-w-full object-contain"
                        loading="lazy"
                      />
                    ) : (
                      <div
                        className="w-full h-full rounded-xl flex items-center justify-center font-black text-xs text-white"
                        style={{ backgroundColor: client.brandColor || '#128B94' }}
                      >
                        {client.logoText.slice(0, 4)}
                      </div>
                    )}
                  </div>
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-slate-100 text-slate-700 border border-slate-200">
                    {isAr ? client.sectorAr : client.sector}
                  </span>
                </div>

                <h3 className="text-xl font-black text-slate-900 font-serif leading-tight mb-1 group-hover:text-[#128B94] transition-colors">
                  {isAr ? client.nameAr : client.name}
                </h3>
                <p className="text-xs text-slate-500 font-medium mb-4">
                  {isAr ? client.taglineAr : client.taglineEn}
                </p>

                {/* Services Rendered Badges */}
                <div className="space-y-1.5 pt-3 border-t border-slate-100 mb-4">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                    {isAr ? 'الخدمات الحكومية المقدمة للمنشأة:' : 'Services Facilitated:'}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {(isAr ? client.servicesProvidedAr : client.servicesProvidedEn).map(
                      (service, sIdx) => (
                        <span
                          key={sIdx}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-teal-50/80 text-[#0F766E] border border-teal-200/60 text-[11px] font-semibold"
                        >
                          <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                          {service}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-medium flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
                  {isAr ? 'عقد مؤسسي نشط' : 'Active Retainer Client'}
                </span>
                <button
                  onClick={onOpenBooking}
                  className="font-bold text-[#128B94] hover:text-[#0c6b72] cursor-pointer"
                >
                  {isAr ? 'طلب حساب شركات' : 'Enterprise SLA'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Corporate VIP Onboarding Callout */}
        <div className="mt-16 bg-gradient-to-r from-slate-900 via-[#0B3A3E] to-teal-950 rounded-3xl p-8 sm:p-12 text-white shadow-2xl border border-[#128B94]/30 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 rounded-full bg-teal-50 text-[#01403F] border border-teal-200 font-bold text-xs uppercase tracking-wider mb-3">
              {isAr ? 'باقات وحسابات الشركات والمجموعات' : 'Enterprise Corporate Retainer'}
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black font-serif">
              {isAr
                ? 'هل ترغب في فتح حساب مؤسسي لشركتك مع خدمة الحافلة المتنقلة؟'
                : 'Need Bulk Visa Processing or Onsite Mobile Van for Your Enterprise?'}
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm mt-3 leading-relaxed">
              {isAr
                ? 'نوفر لك مديراً مخصصاً لحساب شركتك، وخصومات على الحجم، وفواتير شهرية، وحافلة متنقلة تصل لمقر شركتك لأخذ البصمات والفحص الطبي دون مغادرة الموظفين لمكاتبهم.'
                : 'Enjoy an executive account director, monthly corporate invoicing, priority queue bypass, and our fully-equipped doorstep van arriving at your company headquarters for biometric & medical testing.'}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <button
              onClick={onOpenBooking}
              className="px-6 py-3.5 rounded-xl bg-[#128B94] hover:bg-[#01403F] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-[#128B94]/25 cursor-pointer"
            >
              {isAr ? 'طلب اجتماع حساب شركات' : 'Request Corporate Account'}
            </button>
            <button
              onClick={onNavigateToContact}
              className="px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/20 transition-all cursor-pointer"
            >
              {isAr ? 'تواصل مع فريق الشركات' : 'Contact Corporate Desk'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
