import React, { useState } from 'react';
import { Language } from '../types';
import { AWARDS_RECOGNITIONS, AwardItem } from '../data/companyProfileData';
import {
  Award,
  ShieldCheck,
  CheckCircle2,
  FileCheck2,
  Calendar,
  Building2,
  BadgeCheck,
  Sparkles,
  ArrowRight,
  ExternalLink,
  Lock,
  Download
} from 'lucide-react';

interface AwardsPageProps {
  language: Language;
  onNavigateToHome: () => void;
  onNavigateToContact: () => void;
  onOpenBooking: () => void;
}

export const AwardsPage: React.FC<AwardsPageProps> = ({
  language,
  onNavigateToHome,
  onNavigateToContact,
  onOpenBooking,
}) => {
  const isAr = language === 'ar';
  const [selectedAward, setSelectedAward] = useState<AwardItem | null>(null);

  const federalAccreditations = [
    {
      titleEn: 'GDRFA Amer Center Official Accreditation',
      titleAr: 'الاعتماد الرسمي لمركز آمر - إقامة دبي',
      number: 'License #772',
      authorityEn: 'General Directorate of Residency and Foreigners Affairs (GDRFA)',
      authorityAr: 'الإدارة العامة للإقامة وشؤون الأجانب بدبي',
    },
    {
      titleEn: 'MoHRE Tasheel Authorized Government Hub',
      titleAr: 'الترخيص الوزاري لمركز تسهيل - وزارة الموارد البشرية',
      number: 'MoHRE Hub #KBC-2013',
      authorityEn: 'Ministry of Human Resources and Emiratisation (MoHRE)',
      authorityAr: 'وزارة الموارد البشرية والتوطين',
    },
    {
      titleEn: 'Dubai Health Authority (DHA) Salem Medical Clinic',
      titleAr: 'اعتماد هيئة الصحة بدبي - عيادة سالم للياقة الطبية',
      number: 'DHA-MED-7740',
      authorityEn: 'Dubai Health Authority (DHA)',
      authorityAr: 'هيئة الصحة بدبي',
    },
    {
      titleEn: 'Dubai Economy & Tourism (DET) Corporate Desk',
      titleAr: 'اعتماد دائرة الاقتصاد والسياحة بدبي',
      number: 'DET-REG-2013-ESS',
      authorityEn: 'Dubai Department of Economy & Tourism',
      authorityAr: 'دائرة الاقتصاد والسياحة بدبي',
    },
  ];

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
              {isAr ? 'الجوائز والشهادات والاعتمادات' : 'Awards, Certifications & Accreditations'}
            </span>
          </div>
        </div>
      </div>

      {/* Hero Header */}
      <div className="bg-gradient-to-br from-slate-900 via-[#0B3A3E] to-slate-950 text-white py-14 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b border-[#128B94]/20">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#128B94_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#128B94]/15 border border-[#128B94]/30 text-teal-200 text-xs font-semibold uppercase tracking-wider mb-4">
            <Award className="w-4 h-4 text-[#128B94]" />
            {isAr ? 'معايير الجودة والاعتمادات السيادية الموثقة' : 'Verified Sovereign Accreditations'}
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-serif tracking-tight leading-tight mb-4">
            {isAr
              ? 'شهادات الجودة الدولية والأوسمة الحكومية'
              : 'Institutional Certifications, JCI Quality & Sovereign Recognition'}
          </h1>
          <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            {isAr
              ? 'ملتزمون بأعلى معايير الحوكمة وإدارة الجودة العالمية والسلامة الإشعاعية والسرعة القياسية المعتمدة من كبرى المنظمات والوزارات.'
              : 'Our operational, diagnostic, and government transaction procedures are audited and certified by leading global bodies including Joint Commission International (JCI) and ISO 9001:2015.'}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Core Institutional Awards Cards */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-[#128B94] uppercase tracking-widest">
              {isAr ? 'الشهادات والاعتمادات الرئيسية' : 'Official Accreditations'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-serif mt-1">
              {isAr ? 'أوسمة التميز ومعايير الجودة العالمية' : 'Certified Global & Sovereign Standards'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {AWARDS_RECOGNITIONS.map((award) => (
              <div
                key={award.id}
                className="bg-white rounded-3xl border border-slate-200/90 shadow-md hover:shadow-2xl transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group"
              >
                {/* Decorative Top Accent */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#128B94] via-teal-500 to-[#01403F]" />

                <div>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-teal-50 text-[#01403F] border border-teal-200 shadow-2xs">
                      <Sparkles className="w-3.5 h-3.5 text-[#128B94]" />
                      {award.badgeText}
                    </span>
                    <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {award.year}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-serif leading-tight mb-2 group-hover:text-[#128B94] transition-colors">
                    {isAr ? award.titleAr : award.titleEn}
                  </h3>

                  <div className="text-xs font-bold text-[#0F766E] mb-4 flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 shrink-0" />
                    <span>{isAr ? award.authorityAr : award.authorityEn}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 bg-slate-50 p-4 rounded-xl border border-slate-200/60">
                    {isAr ? award.descriptionAr : award.descriptionEn}
                  </p>

                  <div className="space-y-2 text-xs border-t border-slate-100 pt-4">
                    <div className="flex items-center justify-between text-slate-600">
                      <span className="font-semibold text-slate-700">
                        {isAr ? 'نطاق الاعتماد:' : 'Certified Scope:'}
                      </span>
                      <span className="text-slate-800 font-medium text-right max-w-[240px] truncate">
                        {isAr ? award.scopeAr : award.scopeEn}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-slate-600">
                      <span className="font-semibold text-slate-700">
                        {isAr ? 'رمز التحقق المؤسسي:' : 'Verification ID:'}
                      </span>
                      <span className="font-mono text-xs font-bold text-[#128B94] bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
                        {award.verificationId}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600">
                    <BadgeCheck className="w-4 h-4" />
                    {isAr ? 'معتمد وساري المفعول' : 'Active & Verified'}
                  </span>
                  <button
                    onClick={() => onOpenBooking()}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#128B94] hover:text-[#0c6b72] cursor-pointer"
                  >
                    {isAr ? 'حجز المعاملة المعتمدة' : 'Book Certified Service'}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Federal Ministry Authorizations */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-lg p-6 sm:p-10 mb-16">
          <div className="max-w-2xl mx-auto text-center mb-8">
            <span className="text-xs font-bold text-[#128B94] uppercase tracking-widest">
              {isAr ? 'التراخيص الوزارية السيادية' : 'Sovereign Ministerial Licenses'}
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-serif mt-1">
              {isAr ? 'الاعتمادات الحكومية المتكاملة تحت سقف واحد' : 'Comprehensive Ministerial Hub Authorizations'}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {federalAccreditations.map((acc, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-teal-100/80 text-[#0F766E] flex items-center justify-center mb-3 font-bold text-xs">
                    0{idx + 1}
                  </div>
                  <h4 className="font-bold text-sm text-slate-900 leading-snug mb-1">
                    {isAr ? acc.titleAr : acc.titleEn}
                  </h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed mb-3">
                    {isAr ? acc.authorityAr : acc.authorityEn}
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between text-[11px]">
                  <span className="font-mono font-bold text-[#128B94]">{acc.number}</span>
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quality Commitment Callout */}
        <div className="bg-gradient-to-r from-teal-900 via-[#0B3B3F] to-slate-900 rounded-3xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#128B94]/25 text-teal-200 text-xs font-bold mb-3 border border-teal-400/30">
              <Sparkles className="w-3.5 h-3.5 text-teal-300" />
              {isAr ? 'معيار الجودة المؤسسي المعتمد' : 'Institutional Quality Standards'}
            </div>
            <h3 className="text-2xl sm:text-3xl font-black font-serif">
              {isAr
                ? 'تدقيق دقيق وإنجاز مهني خالٍ من النواقص'
                : 'Meticulous Compliance & Rigorous First-Pass Filing'}
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed">
              {isAr
                ? 'تخضع كافة المعاملات للتدقيق المزدوج من مسؤولي الجودة المعتمدين قبل تقديمها إلكترونياً إلى الوزارات المعنية.'
                : 'Every document undergoes dual verification against official ministerial benchmarks to prevent delays, eliminate clerical errors, and ensure total peace of mind.'}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <button
              onClick={onOpenBooking}
              className="px-6 py-3.5 rounded-xl bg-[#128B94] hover:bg-[#01403F] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-[#128B94]/25 cursor-pointer"
            >
              {isAr ? 'بدء معاملة جديدة' : 'Start Verified Application'}
            </button>
            <button
              onClick={onNavigateToContact}
              className="px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/20 transition-all cursor-pointer"
            >
              {isAr ? 'التواصل مع قسم الجودة' : 'Contact Quality Desk'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
