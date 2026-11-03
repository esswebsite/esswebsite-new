import React from 'react';
import { ShieldCheck, Lock, Award, CheckCircle2, Star, Building2, ExternalLink } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface TrustBadgesProps {
  language: Language;
}

export const TrustBadges: React.FC<TrustBadgesProps> = ({ language }) => {
  const t = TRANSLATIONS[language];

  const credentials = [
    {
      titleEn: 'Amer Center GDRFA Dubai',
      titleAr: 'مركز آمر المعتمد - إقامة دبي',
      ref: 'License #772 · Dubai',
      descEn: 'Authorized by General Directorate of Residency and Foreigners Affairs for all visa & residency typing.',
      descAr: 'مرخص رسمياً من الإدارة العامة للإقامة وشؤون الأجانب بدبي لكافة معاملات الإقامة والتأشيرات.',
    },
    {
      titleEn: 'Tasheel MoHRE Hub',
      titleAr: 'مركز تسهيل - وزارة الموارد البشرية',
      ref: 'Approval #4108 · UAE',
      descEn: 'Official Ministry of Human Resources & Emiratisation gateway for corporate work permits & labor contracts.',
      descAr: 'بوابة معتمدة من وزارة الموارد البشرية والتوطين لإصدار تصاريح العمل وعقود الشركات العمالية.',
    },
    {
      titleEn: 'Dubai Economy & Tourism (DET)',
      titleAr: 'اقتصادية وسياحة دبي (DET)',
      ref: 'Provider #902 · Dubai',
      descEn: 'Approved commercial registry provider for instant mainland trade licenses, MOA and Ejari leasing.',
      descAr: 'مزود معتمد للرخص التجارية الفورية وعقود التأسيس الإلكترونية وتصديق عقود إيجاري.',
    },
    {
      titleEn: 'ISO 27001 & ISO 9001',
      titleAr: 'شهادات الآيزو 27001 و9001',
      ref: 'Certified Audit 2026',
      descEn: 'Bank-grade 256-bit data encryption compliant with UAE Personal Data Protection Law (Decree-Law No. 45).',
      descAr: 'تشفير وحماية البيانات وفق قانون حماية البيانات الشخصية الإماراتي وأعلى معايير أمن المعلومات.',
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#F8FAFA] text-[#1E2528] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-[#128B94] uppercase mb-2">
            <ShieldCheck className="w-4 h-4 text-[#128B94]" />
            <span>{language === 'ar' ? 'معايير الاعتماد والأمان' : 'Accreditation & Governance'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#1E2528]">
            {t.trustTitle}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            {t.trustDesc}
          </p>
        </div>

        {/* 4 Official Government Accreditations (Clean Unboxed Grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {credentials.map((cred, idx) => (
            <div
              key={idx}
              className="p-6 rounded-lg bg-white border border-slate-200 shadow-2xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-9 h-9 rounded-md bg-teal-50 text-[#128B94] flex items-center justify-center">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-500 font-medium">
                    {cred.ref}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#1E2528] mb-2">
                  {language === 'ar' ? cred.titleAr : cred.titleEn}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {language === 'ar' ? cred.descAr : cred.descEn}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs text-[#128B94] font-bold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{language === 'ar' ? 'معتمد رسمياً' : 'Verified Entity'}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Quantified Customer Proof & Reviews */}
        <div className="pt-12 border-t border-slate-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-1.5 text-[#FBBC05] mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#FBBC05] text-[#FBBC05]" />
                ))}
                <span className="text-sm font-extrabold text-[#1E2528] ml-2 tabular-nums">4.8 / 5.0</span>
              </div>
              <p className="text-xs text-slate-500">
                {language === 'ar'
                  ? 'بناءً على أكثر من 5,200 تقييم موثق على خرائط Google ومؤشر سعادة المتعاملين'
                  : 'Based on 5,200+ verified reviews on Google Maps & Dubai Customer Happiness Index'}
              </p>
            </div>

            <div className="text-xs text-slate-600 flex items-center gap-4 font-medium">
              <span className="flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-[#128B94]" />
                <span>AES-256 Bit Encryption</span>
              </span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>UAE Pass Integrated</span>
            </div>
          </div>

          <div className="bg-white rounded-xl p-5 border border-slate-200/90 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 shadow-2xs flex items-center justify-center p-2 shrink-0">
                <svg className="w-full h-full" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                </svg>
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#1E2528]">
                  {language === 'ar' ? 'جميع تقييمات المتعاملين موثقة عبر خرائط Google' : 'All Customer Reviews Are Verified on Google Maps'}
                </h4>
                <p className="text-xs text-slate-500">
                  {language === 'ar'
                    ? 'مركز الكرامة للخدمات السريعة واللياقة الطبية - Karama Medical Fitness & Business Center (4.8 ★ من أكثر من 5,200 مراجع)'
                    : 'Karama Medical Fitness Express Service Center & Business Hub (4.8 ★ from 5,200+ authentic Google reviewers)'}
                </p>
              </div>
            </div>

            <a
              href="https://share.google/fEhpJuPHlHoSHmlbp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-teal-50 hover:bg-teal-100 text-[#128B94] text-xs font-bold transition-colors shrink-0"
            >
              <span>{language === 'ar' ? 'عرض التقييمات على خرائط Google' : 'View on Google Maps'}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
