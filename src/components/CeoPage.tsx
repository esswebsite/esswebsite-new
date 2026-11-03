import React from 'react';
import { Language } from '../types';
import { MANAGING_DIRECTOR_INFO, ROYAL_MESSAGE, BOARD_OF_DIRECTORS } from '../data/companyProfileData';
import {
  ShieldCheck,
  Award,
  Calendar,
  Sparkles,
  PhoneCall,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Quote,
  Building2,
  Globe2,
  FileCheck2,
  Users
} from 'lucide-react';

import sheikhMohammedImg from '../assets/images/H.H. Sheikh Mohammed bin Rashid Al Maktoum.png';

interface CeoPageProps {
  language: Language;
  onNavigateToHome: () => void;
  onNavigateToTeam: () => void;
  onNavigateToContact: () => void;
  onOpenBooking: () => void;
}

export const CeoPage: React.FC<CeoPageProps> = ({
  language,
  onNavigateToHome,
  onNavigateToTeam,
  onNavigateToContact,
  onOpenBooking,
}) => {
  const isAr = language === 'ar';
  const md = MANAGING_DIRECTOR_INFO;

  return (
    <div className={`min-h-screen bg-slate-50 text-slate-800 pt-18 sm:pt-22 lg:pt-24 pb-20 ${isAr ? 'font-arabic' : ''}`}>
      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 flex-wrap">
            <button
              onClick={onNavigateToHome}
              className="hover:text-[#128B94] transition-colors cursor-pointer flex items-center gap-1 font-medium"
            >
              {isAr ? 'الرئيسية' : 'Home'}
            </button>
            <span className="text-slate-300">/</span>
            <button
              onClick={onNavigateToTeam}
              className="hover:text-[#128B94] transition-colors cursor-pointer font-medium"
            >
              {isAr ? 'فريق العمل والقيادة' : 'Leadership & Team'}
            </button>
            <span className="text-slate-300">/</span>
            <span className="text-slate-800 font-semibold truncate">
              {isAr ? md.nameAr : md.nameEn}
            </span>
          </div>
        </div>
      </div>

      {/* Royal Inspiration Header Banner */}
      <div className="bg-gradient-to-r from-slate-950 via-[#0B3B3F] to-slate-950 text-white py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b border-[#128B94]/30">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#128B94_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
            <div className="shrink-0">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-amber-400/60 shadow-xl ring-4 ring-teal-500/20 bg-slate-900">
                <img
                  src={sheikhMohammedImg}
                  alt={isAr ? ROYAL_MESSAGE.authorAr : ROYAL_MESSAGE.authorEn}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left rtl:md:text-right">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                {isAr ? 'الرؤية والقيادة الملهمة بدبي' : 'Sovereign Dubai Leadership Vision'}
              </div>

              <blockquote className="text-base sm:text-lg md:text-xl font-serif italic text-teal-50/95 leading-relaxed">
                "{isAr ? ROYAL_MESSAGE.quoteAr : ROYAL_MESSAGE.quoteEn}"
              </blockquote>

              <div className="mt-3 text-xs sm:text-sm font-medium text-slate-300">
                <span className="font-bold text-amber-300">
                  {isAr ? ROYAL_MESSAGE.authorAr : ROYAL_MESSAGE.authorEn}
                </span>
                <span className="mx-2 text-[#128B94]">·</span>
                <span className="text-teal-200/80">
                  {isAr ? ROYAL_MESSAGE.titleAr : ROYAL_MESSAGE.titleEn}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CEO Executive Profile Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left/Right Photo & Highlights Column */}
            <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 to-[#0A2E31] p-6 sm:p-10 text-white flex flex-col justify-between relative">
              <div>
                <div className="relative rounded-2xl overflow-hidden border-2 border-[#128B94]/40 shadow-2xl mb-8 group">
                  <img
                    src={md.image}
                    alt={isAr ? md.nameAr : md.nameEn}
                    className="w-full h-80 sm:h-96 object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block px-3 py-1 rounded-md bg-[#128B94] text-white font-extrabold text-xs tracking-wider uppercase mb-1 shadow-md">
                      {isAr ? 'القيادة التنفيذية' : 'Executive Leadership'}
                    </span>
                    <h2 className="text-xl sm:text-2xl font-black text-white font-serif leading-tight">
                      {isAr ? md.nameAr : md.nameEn}
                    </h2>
                    <p className="text-teal-200 text-sm font-semibold mt-0.5">
                      {isAr ? md.roleAr : md.roleEn}
                    </p>
                  </div>
                </div>

                {/* Key Executive Pillars */}
                <div className="space-y-4">
                  <div className="text-xs font-bold text-slate-300 uppercase tracking-widest border-b border-white/10 pb-2">
                    {isAr ? 'ركائز الإدارة والتميز' : 'Leadership Pillars'}
                  </div>
                  {md.keyPillars.map((pillar, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#128B94]/40 transition-colors"
                    >
                      <h4 className="font-bold text-sm text-teal-200 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        {isAr ? pillar.titleAr : pillar.titleEn}
                      </h4>
                      <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                        {isAr ? pillar.descAr : pillar.descEn}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct Action */}
              <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={onOpenBooking}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#128B94] to-[#01403F] hover:from-[#0f767e] hover:to-[#012f2e] text-white font-bold text-sm transition-all shadow-lg shadow-[#128B94]/20 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  {isAr ? 'حجز موعد مجلس VIP' : 'Book VIP Majlis Session'}
                </button>
                <button
                  onClick={onNavigateToContact}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-all border border-white/20 cursor-pointer"
                >
                  <PhoneCall className="w-4 h-4" />
                  {isAr ? 'التواصل المباشر' : 'Contact Office'}
                </button>
              </div>
            </div>

            {/* Right/Left Detailed Message & Bio Column */}
            <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-[#0F766E] text-xs font-bold uppercase tracking-wider mb-4">
                  <Building2 className="w-3.5 h-3.5" />
                  {isAr ? 'رسالة الرئيس التنفيذي والمدير العام' : "Managing Director's Statement"}
                </div>

                <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 font-serif leading-tight mb-4">
                  {isAr
                    ? 'ريادة راسخة في تسهيل الخدمات الحكومية وسعادة المتعاملين'
                    : 'Pioneering Sovereign Government Transactions & Customer Happiness'}
                </h1>

                <p className="text-sm font-semibold text-[#128B94] mb-6">
                  {isAr ? md.companyAr : md.companyEn} · {isAr ? 'مرخص رسمياً برقم 772' : 'Official License #772'}
                </p>

                {/* Formal Message Text */}
                <div className="prose prose-slate max-w-none text-slate-700 space-y-4 text-sm sm:text-base leading-relaxed bg-slate-50/80 p-6 rounded-2xl border border-slate-200/60 mb-8">
                  {(isAr ? md.messageAr : md.messageEn).split('\n\n').map((paragraph, index) => (
                    <p key={index} className="leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Executive Biography */}
                <div className="border-t border-slate-200 pt-6">
                  <h3 className="text-lg font-black text-slate-900 mb-3 flex items-center gap-2">
                    <Award className="w-5 h-5 text-[#128B94]" />
                    {isAr ? 'نبذة عن المسيرة القيادية' : 'Executive Profile & Background'}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {isAr ? md.bioAr : md.bioEn}
                  </p>
                </div>

                {/* Key Credentials Badges */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-6">
                  <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-xs text-center">
                    <span className="block text-2xl font-black text-[#128B94]">13+</span>
                    <span className="text-xs text-slate-600 font-medium">
                      {isAr ? 'سنوات من الريادة المؤسسية' : 'Years of Leadership'}
                    </span>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-xs text-center">
                    <span className="block text-2xl font-black text-[#128B94]">14</span>
                    <span className="text-xs text-slate-600 font-medium">
                      {isAr ? 'دوائر ووزارات مدمجة' : 'Government Depts'}
                    </span>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-xs text-center col-span-2 sm:col-span-1">
                    <span className="block text-2xl font-black text-emerald-600">5-Star</span>
                    <span className="text-xs text-slate-600 font-medium">
                      {isAr ? 'معيار سعادة المتعاملين' : 'Happiness Standard'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Navigation Footer */}
              <div className="mt-10 pt-6 border-t border-slate-200 flex items-center justify-between flex-wrap gap-4">
                <button
                  onClick={onNavigateToTeam}
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#128B94] hover:text-[#0c6b72] transition-colors cursor-pointer"
                >
                  {isAr ? (
                    <>
                      <ArrowRight className="w-4 h-4" />
                      عرض أعضاء مجلس الإدارة وفريق العمل
                    </>
                  ) : (
                    <>
                      <Users className="w-4 h-4" />
                      Meet Board of Directors & Officers
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Board of Directors Overview */}
        <div className="mt-16">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="inline-block px-3 py-1 rounded-full bg-teal-50 text-[#01403F] border border-teal-200 text-xs font-bold uppercase tracking-wider mb-2">
              {isAr ? 'مجلس الإدارة المؤسسي' : 'Executive Board of Governance'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-serif">
              {isAr ? 'القيادة الاستراتيجية والحوكمة المؤسسية' : 'Strategic Governance & Patronage'}
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              {isAr
                ? 'نخبة من القيادات التي تشرف على توجيه مسيرة المركز لضمان أعلى معايير الجودة والالتزام السيادي'
                : 'Guiding Emirates Secretarial Services with distinguished sovereign governance and enterprise excellence'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BOARD_OF_DIRECTORS.map((director) => (
              <div
                key={director.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-md p-6 flex flex-col justify-between hover:shadow-xl transition-all"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center text-[#128B94] font-serif font-black text-lg">
                      {director.nameEn.charAt(0)}
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-[#128B94] uppercase tracking-wider block">
                        {isAr ? director.badgeAr : director.badgeEn}
                      </span>
                      <h3 className="font-bold text-slate-900 text-base leading-tight">
                        {isAr ? director.nameAr : director.nameEn}
                      </h3>
                      <p className="text-xs text-[#0F766E] font-medium mt-0.5">
                        {isAr ? director.roleAr : director.roleEn}
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {isAr ? director.bioAr : director.bioEn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
