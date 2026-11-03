import React from 'react';
import { Crown, Truck, Building, Sparkles, Check, ArrowRight, ShieldCheck, MapPin } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

import {
  vipMajlisLoungeImg,
  mobileDoorstepUnitImg,
  icpBiometricKioskImg,
  goldenVisaOfficeImg,
} from '../data/centerOriginalPhotos';

interface VipExperienceProps {
  language: Language;
  onBookMajlis: () => void;
  onBookMobileVan: () => void;
}

export const VipExperience: React.FC<VipExperienceProps> = ({
  language,
  onBookMajlis,
  onBookMobileVan,
}) => {
  const t = TRANSLATIONS[language];

  return (
    <section id="vip-mobile" className="py-16 sm:py-24 bg-[#F2F8F8] text-[#1E2528] overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-[#128B94] uppercase mb-3">
            <Crown className="w-4 h-4 text-[#128B94]" />
            <span>{language === 'ar' ? 'الضيافة الحكومية والتنفيذية' : 'Executive Businessmen Hospitality'}</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span className="text-slate-500">{language === 'ar' ? 'معايير 2026' : 'Dubai 2026 Standards'}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#1E2528] leading-tight text-balance">
            {t.vipSectionTitle}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            {t.vipSectionDesc}
          </p>
        </div>

        {/* 2 Marquee Flagship Feature Bento Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Card 1: Private VIP Majlis Executive Lounge */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-md overflow-hidden flex flex-col justify-between group">
            <div className="relative h-64 sm:h-72 overflow-hidden bg-slate-100">
              <img
                src={vipMajlisLoungeImg}
                alt="Karama Business Center & ESS Authentic Private VIP Majlis Lounge in Dubai"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
              <div className="absolute top-4 left-4 rtl:left-auto rtl:right-4 bg-[#128B94] px-3 py-1.5 rounded text-xs font-bold text-white shadow-sm">
                {language === 'ar' ? 'مجلس كبار الشخصيات الأصلي' : 'Executive VIP Majlis'}
              </div>
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#1E2528] mb-2">
                  {t.majlisTitle}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {t.majlisDesc}
                </p>

                <ul className="mt-5 space-y-2.5 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#128B94] shrink-0" />
                    <span>
                      {language === 'ar'
                        ? 'أجنحة خاصة معزولة للمستثمرين ورؤساء مجالس الإدارة'
                        : 'Private confidential consultation suites for UHNW & Corporate Boards'}
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#128B94] shrink-0" />
                    <span>
                      {language === 'ar'
                        ? 'ضيافة إماراتية وقهوة عربية مع خدمة صف السيارات المجانية (Valet)'
                        : 'Authentic Emirati hospitality & complimentary VIP valet service'}
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#128B94] shrink-0" />
                    <span>
                      {language === 'ar'
                        ? 'إنجاز الإقامة الذهبية والفحص الطبي في أقل من ساعة'
                        : 'Simultaneous Golden Visa, DHA medical results & Emirates ID in < 60 mins'}
                    </span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-medium">
                  {language === 'ar' ? 'متاح بالموعد المسبق' : 'By Advance Reservation'}
                </span>
                <button
                  onClick={onBookMajlis}
                  className="px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-[#128B94] hover:bg-[#01403F] rounded-md transition-colors cursor-pointer flex items-center gap-2 shadow-xs"
                >
                  <span>{t.exploreMajlisBtn}</span>
                  <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
                </button>
              </div>
            </div>
          </div>

          {/* Card 2: Doorstep Mobile Government Van */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-md overflow-hidden flex flex-col justify-between group">
            <div className="relative h-64 sm:h-72 overflow-hidden bg-slate-100">
              <img
                src={mobileDoorstepUnitImg}
                alt="Karama Medical Fitness Center - Mobile Medical Fitness Service - Tanfeed / Salem Dubai Health"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
              <div className="absolute top-4 left-4 rtl:left-auto rtl:right-4 bg-slate-800 text-white px-3 py-1.5 rounded text-xs font-bold shadow-sm flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5 text-teal-300" />
                <span>{language === 'ar' ? 'حافلة المعاملات والفحص المتنقلة' : 'Official Mobile Medical & Gov Unit'}</span>
              </div>
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#1E2528] mb-2">
                  {t.mobileVanTitle}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {t.mobileVanDesc}
                </p>

                <ul className="mt-5 space-y-2.5 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#128B94] shrink-0" />
                    <span>
                      {language === 'ar'
                        ? 'تصل الحافلة إلى فيلتك في نخلة جميرا، تلال الإمارات أو برجك في DIFC'
                        : 'Dispatched directly to your Palm Jumeirah villa, Emirates Hills or DIFC tower'}
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#128B94] shrink-0" />
                    <span>
                      {language === 'ar'
                        ? 'مجهزة بالكامل بأجهزة فحص اللياقة الطبية لسالم والبصمة المعتمدة'
                        : 'Equipped with official Salem medical fitness screening & certified ICP biometrics'}
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#128B94] shrink-0" />
                    <span>
                      {language === 'ar'
                        ? 'مثالية لمعاملات العائلات، كبار السن، والرؤساء التنفيذيين المشغولين'
                        : 'Ideal for busy founders, families, senior citizens, and corporate executives'}
                    </span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#128B94]" />
                  <span>{language === 'ar' ? 'تغطية لكافة مناطق دبي' : 'All Dubai Emirates Coverage'}</span>
                </span>
                <button
                  onClick={onBookMobileVan}
                  className="px-5 py-2.5 text-xs sm:text-sm font-bold text-slate-800 bg-white hover:bg-slate-50 rounded-md border border-slate-300 transition-colors cursor-pointer flex items-center gap-2 shadow-2xs"
                >
                  <span>{t.requestMobileVanBtn}</span>
                  <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Dual Spotlight: Smart Kiosks & Golden Visa Lounge */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Spotlight 1: Smart Kiosks & Instant Digital Biometrics */}
          <div className="p-6 sm:p-7 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center gap-5 sm:gap-6">
            <div className="w-full sm:w-2/5 rounded-lg overflow-hidden border border-slate-200 shrink-0">
              <img
                src={icpBiometricKioskImg}
                alt="ICP Certified Smart Biometric Kiosk Terminal"
                className="w-full h-44 object-cover object-center"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </div>

            <div className="w-full sm:w-3/5">
              <div className="flex items-center gap-2 text-xs font-bold text-[#128B94] uppercase tracking-wider mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{language === 'ar' ? 'التقنيات البيومترية الذكية' : 'Smart Biometric Infrastructure'}</span>
              </div>
              <h4 className="text-base sm:text-lg font-bold text-[#1E2528] mb-1.5">
                {language === 'ar'
                  ? 'محطات الهوية الذكية المعتمدة من الهيئة الاتحادية ICP'
                  : 'ICP Certified Biometric Verification & Smart Kiosk'}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {language === 'ar'
                  ? 'تجهيزات متطورة مطابقة لأحدث معايير هيئة الهوية والجنسية وإقامة دبي. التقاط فوري للبصمات ومسح الجوازات وتحديث UAE Pass دون أي طوابير.'
                  : 'Equipped with the latest Federal Authority for Identity (ICP) compliant biometric pods. Instant fingerprint capture, iris validation, and UAE Pass synchronization.'}
              </p>
            </div>
          </div>

          {/* Spotlight 2: Golden Visa Executive Suite */}
          <div className="p-6 sm:p-7 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center gap-5 sm:gap-6">
            <div className="w-full sm:w-2/5 rounded-lg overflow-hidden border border-slate-200 shrink-0">
              <img
                src={goldenVisaOfficeImg}
                alt="Karama Business Center Golden Visa Holder Executive Suite"
                className="w-full h-44 object-cover object-center"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </div>

            <div className="w-full sm:w-3/5">
              <div className="flex items-center gap-2 text-xs font-bold text-[#128B94] uppercase tracking-wider mb-1">
                <Crown className="w-3.5 h-3.5" />
                <span>{language === 'ar' ? 'جناح المستثمرين الذهبي' : 'Investor Golden Visa Suite'}</span>
              </div>
              <h4 className="text-base sm:text-lg font-bold text-[#1E2528] mb-1.5">
                {language === 'ar'
                  ? 'صالة حاملي الإقامة الذهبية (10 سنوات)'
                  : 'Exclusive 10-Year Golden Visa Suite'}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {language === 'ar'
                  ? 'جناح استشارات خاص للمستثمرين العقاريين ورواد الأعمال وأصحاب المواهب التخصصية، لإنهاء إجراءات الإقامة الذهبية الشاملة في أجواء من الفخامة والخصوصية.'
                  : 'Private consultation suite designed for real estate investors, business founders, and specialized talents processing 10-year residency with complete privacy and expedited turnaround.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
