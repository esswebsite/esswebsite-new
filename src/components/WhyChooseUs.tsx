import React, { useState } from 'react';
import { Language } from '../types';
import {
  ShieldCheck,
  CheckCircle2,
  Layers,
  HeartPulse,
  Scale,
  FileCheck,
  Sparkles,
  MapPin,
  Calendar,
  Building2
} from 'lucide-react';

interface WhyChooseUsProps {
  language: Language;
  onOpenBooking: () => void;
  onNavigateToDepartments?: () => void;
  onNavigateToAbout?: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({
  language,
  onOpenBooking,
  onNavigateToDepartments,
  onNavigateToAbout,
}) => {
  const isAr = language === 'ar';
  const [activeAudience, setActiveAudience] = useState<'individual' | 'corporate'>('individual');

  const reasons = [
    {
      id: 'unified-hub',
      icon: Layers,
      number: '01',
      titleEn: 'All-in-One Sovereign Hub',
      titleAr: 'مجمع حكومي شامل تحت سقف واحد',
      tagEn: '10+ Ministries in 1 Hub',
      tagAr: '10+ دوائر ووزارات حكومية',
      descriptionEn:
        'Complete Amer (GDRFA) visas, Tasheel labour permits, DET commercial licenses, Courts notary, and Salem Medical in a single visit.',
      descriptionAr:
        'أنجز تأشيرات آمر وتصاريح تسهيل ورخص اقتصادية دبي وتوثيق المحاكم وفحص سالم الطبي في زيارة واحدة دون تنقل.',
      benefitEn: 'Family residency, maid visa & Emirates ID issued together.',
      benefitAr: 'إقامات الأسرة، تأشيرة المساعدة المنزلية، وبصمة الهوية معاً.',
      corpBenefitEn: 'Company trade license renewal, staff quota & labour contracts.',
      corpBenefitAr: 'تجديد الرخصة التجارية، وتحديث كوتا المنشأة، وعقود العمل.',
      stat: '10+',
      statLabelEn: 'Ministries in 1 Hub',
      statLabelAr: 'جهات حكومية',
    },
    {
      id: 'express-medical',
      icon: HeartPulse,
      number: '02',
      titleEn: '2-Hour Express Salem Medicals',
      titleAr: 'فحص سالم الطبي للياقة في ساعتين',
      tagEn: '2-Hour Results · DHA Clinic',
      tagAr: 'نتيجة خلال ساعتين · عيادة معتمدة',
      descriptionEn:
        'Accredited on-site KMFC clinic with instant blood phlebotomy and low-dose digital X-rays synced directly with GDRFA Dubai.',
      descriptionAr:
        'عيادة سالم معتمدة داخل المركز لسحب الدم والتصوير الرقمي للأشعة السينية، وإصدار النتيجة خلال ساعتين بربط إلكتروني مباشر.',
      benefitEn: 'Express testing for urgent visa stamping and travel.',
      benefitAr: 'فحص فوري مستعجل لتجديد الإقامة والسفر دون أي تأخير.',
      corpBenefitEn: 'Bulk employee screening & doorstep mobile van service.',
      corpBenefitAr: 'فحوصات جماعية لكوادر الشركات مع خدمة الحافلة المتنقلة.',
      stat: '2 Hours',
      statLabelEn: 'Express Turnaround',
      statLabelAr: 'سرعة النتيجة',
    },
    {
      id: 'transparent-fees',
      icon: Scale,
      number: '03',
      titleEn: '100% Tariff Transparency',
      titleAr: 'شفافية مالية مطلقة بدون رسوم خفية',
      tagEn: 'Official UAE Tariffs · 0 AED Hidden',
      tagAr: 'رسوم حكومية رسمية · بدون زيادات',
      descriptionEn:
        'Line-by-line official UAE government tariff breakdowns down to the fils. No hidden markups or surprise agency surcharges.',
      descriptionAr:
        'التزام كامل بالرسوم الرسمية المعتمدة مع إيصال تفصيلي واضح لكل وزارة ورسوم الطباعة، دون أي تكاليف غير معلنة.',
      benefitEn: 'Clear upfront costs for Golden Visas and family renewals.',
      benefitAr: 'تكلفة واضحة ومسبقة للإقامة الذهبية وتأشيرات العائلة.',
      corpBenefitEn: 'Consolidated monthly corporate billing for simple accounting.',
      corpBenefitAr: 'فواتير ضريبية شهرية موحدة لكافة معاملات الموظفين.',
      stat: '0 AED',
      statLabelEn: 'Hidden Surcharges',
      statLabelAr: 'رسوم خفية',
    },
    {
      id: 'high-approval',
      icon: FileCheck,
      number: '04',
      titleEn: '99.8% First-Pass Approval Rate',
      titleAr: 'نسبة قبول واعتماد أولية 99.8%',
      tagEn: 'Zero-Rejection Quality Vetting',
      tagAr: 'تدقيق مسبق يمنع الرفض والغرامات',
      descriptionEn:
        'Pre-submission vetting by senior liaison officers eliminates document defects, portal delays, and costly GDRFA/MoHRE fines.',
      descriptionAr:
        'مراجعة وتدقيق المستندات عبر ضباط اتصال معتمدين قبل رفعها للنظام، لتفادي الرفض والغرامات المالية من إقامة دبي والوزارات.',
      benefitEn: 'Flawless document check before submission to prevent delays.',
      benefitAr: 'تدقيق دقيق قبل التقديم لضمان صدور المعاملة من أول محاولة.',
      corpBenefitEn: 'Dedicated corporate desk managing high-volume labor quotas.',
      corpBenefitAr: 'شباك مؤسسي مخصص لإدارة حصص العمالة والشركات الكبرى.',
      stat: '99.8%',
      statLabelEn: 'Approval Accuracy',
      statLabelAr: 'دقة الاعتماد',
    },
    {
      id: 'executive-comfort',
      icon: Sparkles,
      number: '05',
      titleEn: 'VIP Majlis & Mobile Doorstep Van',
      titleAr: 'مجلس كبار الشخصيات وحافلة متنقلة',
      tagEn: 'Private Lounge · Mobile Service',
      tagAr: 'صالة خاصة راقية · حافلة عند بابك',
      descriptionEn:
        'Relax in our dedicated VIP Majlis lounge with Arabic coffee while our staff handles your files, or request our mobile van to your office.',
      descriptionAr:
        'استمتع بضيافة القهوة العربية في مجلس كبار الشخصيات الخاص بينما ننجز معاملاتك، أو اطلب حافلتنا المتنقلة لمكتبك أو منزلك.',
      benefitEn: 'Private fast-track lounge for executives and families.',
      benefitAr: 'صالة خاصة لراحة العائلات ورجال الأعمال بسرعة فائقة.',
      corpBenefitEn: 'On-site mobile van biometrics & corporate executive care.',
      corpBenefitAr: 'بصمة بيومترية وفحوصات في مقر شركتك عبر الحافلة الذكية.',
      stat: 'VIP',
      statLabelEn: 'Majlis Lounge',
      statLabelAr: 'مجلس خاص',
    },
    {
      id: 'prime-location',
      icon: MapPin,
      number: '06',
      titleEn: 'Prime Central Dubai Location',
      titleAr: 'موقع استراتيجي وسهولة وصول فائقة',
      tagEn: 'Opposite Karama Post · Metro Near',
      tagAr: 'بجوار بريد الكرامة · قرب المترو',
      descriptionEn:
        'Centrally situated next to Karama Post Office with dedicated RTA parking, close to Burjuman metro, open Monday to Saturday.',
      descriptionAr:
        'موقع استراتيجي بجوار بريد الكرامة مع مواقف RTA متوفرة، وقريب من محطة مترو برجمان، في خدمتكم من الإثنين للسبت.',
      benefitEn: 'Stress-free access with easy parking right outside our door.',
      benefitAr: 'وصول ميسر وسريع مع مواقف متوفرة مباشرة أمام المركز.',
      corpBenefitEn: 'Strategic hub easily accessible from DIFC, Downtown & Deira.',
      corpBenefitAr: 'مركز وسطي قريب من مركز دبي المالي ووسط المدينة وديرة.',
      stat: '6 Days',
      statLabelEn: 'Weekly Operations',
      statLabelAr: 'أيام أسبوعياً',
    },
  ];

  return (
    <section className={`py-10 sm:py-14 bg-white text-slate-900 border-t border-slate-200 relative overflow-hidden ${isAr ? 'font-arabic' : ''}`}>
      {/* Background Subtle Accent */}
      <div className="absolute inset-0 opacity-[0.025] bg-[radial-gradient(#128B94_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Green Branding Highlight */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 sm:mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-[#128B94] text-xs font-bold uppercase tracking-wider mb-2">
              <ShieldCheck className="w-3.5 h-3.5 text-[#128B94]" />
              <span>{isAr ? 'التميز والاعتماد المؤسسي' : 'Sovereign Excellence & Governance'}</span>
            </div>

            {/* Heading with "Karama Business Center" highlighted in brand green */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
              {isAr ? (
                <>
                  ستة أسباب تجعل{' '}
                  <span className="text-[#128B94] font-black">مركز الكرامة للأعمال</span>{' '}
                  وجهتك الحكومية الأولى
                </>
              ) : (
                <>
                  Why Dubai Chooses{' '}
                  <span className="text-[#128B94] font-black">Karama Business Center</span>
                </>
              )}
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-slate-600 max-w-2xl">
              {isAr
                ? 'مركز شامل معتمد يجمع الهيئات الحكومية والعيادة الطبية لتقديم تجربة سريعة بدون تنقل وبشفافية تامة.'
                : 'Your unified government and medical hub uniting official ministerial desks, 2-hour Salem testing, and 100% tariff transparency.'}
            </p>
          </div>

          {/* Audience Switcher */}
          <div className="shrink-0 p-1 bg-slate-100 rounded-xl border border-slate-200 inline-flex items-center self-start md:self-end text-xs">
            <button
              onClick={() => setActiveAudience('individual')}
              className={`px-3 py-1.5 font-bold rounded-lg transition-all cursor-pointer ${
                activeAudience === 'individual'
                  ? 'bg-[#128B94] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {isAr ? 'للأفراد والعائلات' : 'For Individuals & Families'}
            </button>
            <button
              onClick={() => setActiveAudience('corporate')}
              className={`px-3 py-1.5 font-bold rounded-lg transition-all cursor-pointer ${
                activeAudience === 'corporate'
                  ? 'bg-[#128B94] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {isAr ? 'للشركات ومسؤولي الموارد' : 'For Corporate HR & B2B'}
            </button>
          </div>
        </div>

        {/* 6 Reasons Compact 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 mb-6">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            const currentBenefit =
              activeAudience === 'individual'
                ? isAr
                  ? reason.benefitAr
                  : reason.benefitEn
                : isAr
                ? reason.corpBenefitAr
                : reason.corpBenefitEn;

            return (
              <div
                key={reason.id}
                className="group p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 hover:border-[#128B94] shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between relative overflow-hidden"
              >
                {/* Top Subtle Hover Accent */}
                <div className="absolute top-0 inset-x-0 h-1 bg-[#128B94] opacity-0 group-hover:opacity-100 transition-opacity" />

                <div>
                  {/* Icon + Number + Stat Tag */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-xl bg-teal-50 text-[#128B94] flex items-center justify-center border border-teal-100 group-hover:bg-[#128B94] group-hover:text-white transition-colors shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[11px] font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200/60">
                        {isAr ? reason.tagAr : reason.tagEn}
                      </span>
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400">
                      {reason.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#128B94] transition-colors mb-1.5 leading-snug">
                    {isAr ? reason.titleAr : reason.titleEn}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-600 leading-relaxed mb-3 line-clamp-2 sm:line-clamp-none">
                    {isAr ? reason.descriptionAr : reason.descriptionEn}
                  </p>
                </div>

                {/* Tailored Audience Benefit */}
                <div className="pt-2.5 border-t border-slate-100 flex items-center gap-2 text-[11px] text-slate-700 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#128B94] shrink-0" />
                  <span className="truncate">{currentBenefit}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Compact Institutional Stats Ribbon (1-Screen Fit) */}
        <div className="bg-[#0B3A3E] text-white rounded-2xl px-5 py-4 sm:px-6 sm:py-4.5 border border-[#128B94]/30 shadow-md">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* 4 Quick Stat Counters */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 w-full md:w-auto text-center md:text-left rtl:md:text-right">
              <div>
                <div className="text-xl sm:text-2xl font-black font-mono text-teal-300">500,000+</div>
                <div className="text-[11px] text-slate-300 font-medium">
                  {isAr ? 'معاملة حكومية ناجحة' : 'Completed Files'}
                </div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black font-mono text-teal-300">2 {isAr ? 'ساعات' : 'Hours'}</div>
                <div className="text-[11px] text-slate-300 font-medium">
                  {isAr ? 'فحص سالم الطبي السريع' : 'Salem Express Results'}
                </div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black font-mono text-teal-300">99.8%</div>
                <div className="text-[11px] text-slate-300 font-medium">
                  {isAr ? 'نسبة القبول الأولية' : 'First-Pass Approval'}
                </div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black font-mono text-teal-300">500+</div>
                <div className="text-[11px] text-slate-300 font-medium">
                  {isAr ? 'شركة ومؤسسة معتمدة' : 'Corporate Clients'}
                </div>
              </div>
            </div>

            {/* Quick Action Button */}
            <div className="flex items-center gap-2.5 shrink-0 w-full md:w-auto">
              <button
                onClick={onOpenBooking}
                className="w-full md:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-teal-400 hover:bg-teal-300 text-slate-950 font-bold text-xs shadow-sm transition-all cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>{isAr ? 'حجز موعد بالمركز' : 'Book Center Visit'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
