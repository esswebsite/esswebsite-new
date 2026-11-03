import React from 'react';
import {
  Shield,
  Award,
  Users,
  CheckCircle2,
  Building2,
  PhoneCall,
  Calendar,
  Sparkles,
  ChevronRight,
  ChevronLeft,
  FileText,
  Lock,
  ArrowRight,
  Star,
  MapPin,
  Clock,
  Compass,
  Quote,
  HeartHandshake,
  Lightbulb,
  Target,
  Stethoscope,
  Scale,
  Briefcase,
  ExternalLink,
  Globe,
  FileBadge,
} from 'lucide-react';
import { Language } from '../types';
import { COMPANY_PROFILE } from '../data/translations';
import {
  fastTrackConcourseImg,
  mainEntranceReceptionImg,
  vipMajlisLoungeImg,
  goldenVisaOfficeImg,
  mobileDoorstepUnitImg,
  amerDepartmentImg,
  detDepartmentImg,
  salemMedicalImg,
  icpBiometricKioskImg,
  corporateDesksImg,
  businessHubImg,
  ALL_ORIGINAL_CENTER_PHOTOS,
} from '../data/centerOriginalPhotos';
import sheikhMohammedImg from '../assets/images/H.H. Sheikh Mohammed bin Rashid Al Maktoum.png';
import haniEbrahimImg from '../assets/images/hani ebrahim.jpg';
import { GoogleReviewsSection } from './GoogleReviewsSection';
import { TrustBadges } from './TrustBadges';

interface AboutPageProps {
  language: Language;
  onNavigateToHome: () => void;
  onNavigateToDepartments: () => void;
  onNavigateToContact: () => void;
  onOpenBooking: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  language,
  onNavigateToHome,
  onNavigateToDepartments,
  onNavigateToContact,
  onOpenBooking,
}) => {
  const isAr = language === 'ar';
  const ArrowIcon = isAr ? ChevronLeft : ChevronRight;
  const profile = COMPANY_PROFILE;

  const coreValues = [
    {
      id: 'teamwork',
      icon: Users,
      title: isAr ? 'العمل الجماعي (Teamwork)' : 'Teamwork',
      desc: isAr
        ? 'نؤمن بقوة التعاون ونقدر مساهمات فريق عملنا المتمرس في تحقيق أهدافنا المشتركة.'
        : 'We believe in the power of collaboration and value the contributions of our experienced team in achieving our goals.',
    },
    {
      id: 'integrity',
      icon: Shield,
      title: isAr ? 'النزاهة (Integrity)' : 'Integrity',
      desc: isAr
        ? 'نلتزم بأعلى معايير الصدق والشفافية والسلوك الأخلاقي والمهني في كافة تعاملاتنا.'
        : 'We uphold the highest standards of honesty, transparency, and ethical conduct in all our operations.',
    },
    {
      id: 'customer-centricity',
      icon: HeartHandshake,
      title: isAr ? 'التركيز على المتعاملين' : 'Customer-Centricity',
      desc: isAr
        ? 'نضع احتياجات عملائنا في صدارة أولوياتنا ونضمن رضاهم وسعادتهم عبر خدمة مخصصة وسريعة.'
        : "We prioritize our clients' needs and ensure their satisfaction through personalized and efficient service.",
    },
    {
      id: 'excellence',
      icon: Award,
      title: isAr ? 'التميز والجودة (Excellence)' : 'Excellence',
      desc: isAr
        ? 'ملتزمون بتقديم خدمات فائقة الجودة والدقة بأعلى درجات الاحترافية والمصداقية.'
        : 'We are committed to delivering top-quality services with precision and professionalism.',
    },
    {
      id: 'innovation',
      icon: Lightbulb,
      title: isAr ? 'الابتكار والتطوير (Innovation)' : 'Innovation',
      desc: isAr
        ? 'نسعى باستمرار نحو حلول مبتكرة للارتقاء بجودة الخدمات وتبسيط رحلة المتعامل.'
        : 'We continuously seek innovative solutions to enhance our services and improve the customer experience.',
    },
  ];

  const whatWeDoItems = [
    {
      number: '01',
      titleEn: 'AMER (GDRFA)',
      titleAr: 'مركز آمر (إقامة دبي)',
      descEn: 'Visa and immigration related services: Golden Visas, new born permits, entry permits, renewals, stamping, change status, cancellations & travel reports.',
      descAr: 'خدمات التأشيرات والإقامة: الإقامة الذهبية، تأشيرات المواليد، أذونات الدخول، التجديد والتثبيت، تعديل الوضع، الإلغاء وتقارير السفر.',
      icon: FileBadge,
      color: 'emerald',
    },
    {
      number: '02',
      titleEn: 'DUBAI ECONOMIC DEPARTMENT (DET)',
      titleAr: 'دائرة الاقتصاد والسياحة (DED)',
      descEn: 'Business licensing & registration: Trade name reservation/renewal, initial approval, license issuance, printing, amendments & "To Whom It May Concern".',
      descAr: 'تراخيص وتسجيل الشركات: حجز وتجديد الاسم التجاري، الموافقات المبدئية، إصدار وطباعة وتعديل الرخص، وشهادات لمن يهمه الأمر.',
      icon: Building2,
      color: 'teal',
    },
    {
      number: '03',
      titleEn: 'TAS-HEEL & TAW-JEEH SERVICES',
      titleAr: 'تسهيل وتوجيه (وزارة الموارد البشرية)',
      descEn: 'Labor contracts, quota applications, job offer letters, signature cards, establishment updates, and employer/worker rights guidance.',
      descAr: 'عقود العمل، طلبات الكوتا، عروض العمل الجديدة، بطاقات التوقيع الإلكتروني، تحديث المنشأة، وتوجيه وإرشاد العمال وأصحاب العمل.',
      icon: Briefcase,
      color: 'sky',
    },
    {
      number: '04',
      titleEn: 'BUSINESS SETUP IN DUBAI',
      titleAr: 'تأسيس الشركات في دبي',
      descEn: 'Assistance with company formation, mainland LLCs, freezones, local sponsorship, Ejari registration, and corporate bank account opening.',
      descAr: 'تأسيس الشركات في البر الرئيسي والمناطق الحرة، الوكيل والراعي المحلي، توثيق عقود إيجاري، وفتح الحسابات البنكية للشركات.',
      icon: Compass,
      color: 'indigo',
    },
    {
      number: '05',
      titleEn: 'DUBAI HEALTH & SALEM',
      titleAr: 'صحة دبي ونظام سالم الطبي',
      descEn: 'Al Karama Medical Fitness Center: Residency medical screening (2 hours super express, 6 hours urgent, 24 hours standard), OHC Male/Female & X-Ray.',
      descAr: 'مركز الكرامة للياقة الطبية: فحص الإقامة الطبي (ساعتين فائق السرعة، 6 ساعات عاجل، 24 ساعة)، بطاقة الصحة المهنية (ذكور/إناث) والأشعة.',
      icon: Stethoscope,
      color: 'rose',
    },
    {
      number: '06',
      titleEn: 'DUBAI COURT SERVICES',
      titleAr: 'خدمات محاكم دبي والكاتب العدل',
      descEn: 'Legal & documentation services: Attestation of Power of Attorney (POA), declarations, legal translations, notices & court formalities.',
      descAr: 'الخدمات القانونية والتوثيق: توثيق الوكالات الرسمية (POA)، الإقرارات العدلية، الترجمة القانونية المعتمدة، وتوجيه الإنذارات العدلية.',
      icon: Scale,
      color: 'purple',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-18 sm:pt-22 lg:pt-24 pb-20">
      {/* Breadcrumb Navigation */}
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
            <span className="text-slate-900 font-semibold">{isAr ? 'عن الشركة والمركز' : 'About Our Company'}</span>
          </nav>
        </div>
      </div>

      {/* Hero Banner with Official Identity */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#01403F] via-[#085C5E] to-[#128B94] text-white py-16 lg:py-22">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold tracking-wide">
                <Sparkles className="w-3.5 h-3.5 text-teal-300" />
                <span>
                  {isAr
                    ? 'تأسس عام 2013 · الكرامة، بجوار بريد الكرامة، دبي'
                    : 'Founded in 2013 · Al Karama Next to Karama Post Office, Dubai'}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                {isAr ? (
                  <>
                    الإمارات لخدمات رجال الأعمال <br />
                    <span className="text-teal-200">مركز الكرامة للأعمال (KBC)</span>
                  </>
                ) : (
                  <>
                    Emirates Secretarial Services & <br />
                    <span className="text-teal-200">Karama Business Center (KBC)</span>
                  </>
                )}
              </h1>

              <div className="text-sm font-semibold text-teal-200 uppercase tracking-widest">
                {isAr ? 'مركز الكرامة للياقة الطبية · وجهة واحدة لكافة المعاملات الحكومية' : 'Al Karama Medical Fitness Center · "One Stop Government Transaction"'}
              </div>

              <p className="text-base sm:text-lg text-teal-50/90 leading-relaxed max-w-2xl">
                {isAr
                  ? 'منذ انطلاقتنا في عام 2013، بنينا مكانتنا كوجهة موثوقة للأفراد والشركات لإنجاز جميع المعاملات الحكومية وتأسيس الأعمال تحت سقف واحد. نجمع بين الخبرة الدقيقة، والربط الحكومي المباشر، والسرعة الفائقة لتقديم تجربة سلسة خالية من المتاعب.'
                  : 'Welcome to Karama Business Center (Al Karama Medical Fitness Center / Emirates Secretarial Services), founded in 2013. Your trusted and reliable destination for seamless, hassle-free government and business transactions under one roof.'}
              </p>

              {/* Verified Badges Strip */}
              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/10 backdrop-blur-xs text-xs font-medium border border-white/15">
                  <Clock className="w-3.5 h-3.5 text-teal-300" />
                  <span>{isAr ? 'تأسس عام 2013 (أكثر من عقد من التميز)' : 'Founded 2013 (10+ Years)'}</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/10 backdrop-blur-xs text-xs font-medium border border-white/15">
                  <MapPin className="w-3.5 h-3.5 text-teal-300" />
                  <span>{isAr ? 'الكرامة - بجوار بريد الكرامة' : 'Next to Karama Post Office'}</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/10 backdrop-blur-xs text-xs font-medium border border-white/15">
                  <Shield className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{isAr ? 'وجهة حكومية شاملة ومعتمدة' : 'One Stop Gov Transaction'}</span>
                </div>
              </div>

              {/* Quick Contact & Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-3">
                <button
                  onClick={onOpenBooking}
                  className="px-6 py-3 rounded-lg bg-white text-[#01403F] hover:bg-teal-50 font-bold text-sm shadow-md transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-[#128B94]" />
                  <span>{isAr ? 'حجز موعد بالمركز' : 'Book Center Appointment'}</span>
                </button>
                <a
                  href="tel:043426666"
                  className="px-5 py-3 rounded-lg bg-teal-800/70 hover:bg-teal-800 text-white border border-teal-400/40 font-bold text-sm transition-all flex items-center gap-2"
                >
                  <PhoneCall className="w-4 h-4 text-teal-300" />
                  <span dir="ltr">04-342-6666</span>
                </a>
                <button
                  onClick={onNavigateToContact}
                  className="px-5 py-3 rounded-lg bg-teal-900/60 hover:bg-teal-900 text-white border border-white/20 font-bold text-sm transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>{isAr ? 'موقع المركز وساعات العمل' : 'Location & Hours'}</span>
                </button>
              </div>
            </div>

            {/* Visual Center Showcase */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-white/25 shadow-2xl group bg-slate-900">
                <img
                  src={fastTrackConcourseImg}
                  alt="Karama Business Center Authentic Concourse & Navigation Hall in Dubai"
                  className="w-full h-80 sm:h-96 object-cover object-[center_35%] transform group-hover:scale-105 transition-transform duration-700 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="inline-block px-2.5 py-1 rounded bg-[#128B94] text-xs font-extrabold uppercase tracking-wider mb-2">
                    {isAr ? 'مركز الكرامة للأعمال' : 'Karama Business Center'}
                  </div>
                  <div className="text-base font-bold">
                    {isAr
                      ? 'موقع حيوي في الكرامة بجوار بريد الكرامة · دبي، الإمارات'
                      : 'Al Karama Next to Karama Post Office · Dubai, UAE'}
                  </div>
                  <p className="text-xs text-slate-300 mt-1">
                    {isAr
                      ? 'صالة فحص طبي متكاملة (سالم)، ومكاتب آمر وتسهيل واقتصادية دبي ومحاكم دبي'
                      : 'Comprehensive DHA Salem medical screening, Amer, Tasheel, Tawjeeh, DED & Dubai Courts desks'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Royal Message from His Highness Sheikh Mohammed bin Rashid Al Maktoum */}
      <section className="py-14 sm:py-20 bg-gradient-to-b from-slate-900 via-[#02282B] to-slate-950 text-white relative overflow-hidden border-b-2 border-[#128B94]/30 shadow-2xl">
        {/* Subtle royal pattern & ambient glow */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#128B94_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-[#128B94]/20 to-transparent blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="relative rounded-3xl bg-gradient-to-br from-slate-900/90 via-[#032b2f]/95 to-slate-950/90 border border-teal-500/30 p-6 sm:p-10 lg:p-12 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] backdrop-blur-md">
            <Quote className="w-16 h-16 text-[#128B94]/20 absolute top-6 right-6 rtl:right-auto rtl:left-6 pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Royal Portrait Column */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative group w-full max-w-[280px] sm:max-w-[340px]">
                  {/* Subtle golden/teal halo behind the portrait */}
                  <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#D4AF37]/40 via-[#128B94]/50 to-[#D4AF37]/30 rounded-[28px] blur-sm opacity-80 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="relative rounded-3xl overflow-hidden border-2 border-amber-400/50 shadow-2xl bg-slate-950">
                    <img
                      src={sheikhMohammedImg}
                      alt={isAr ? profile.leadership.royalQuote.leaderAr : profile.leadership.royalQuote.leaderEn}
                      className="w-full h-80 sm:h-96 object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
                    
                    <div className="absolute bottom-3.5 inset-x-3.5 text-center">
                      <div className="inline-block px-3 py-1 rounded-md bg-black/60 backdrop-blur-md border border-amber-400/40 text-amber-300 text-[11px] font-bold tracking-wider uppercase">
                        {isAr ? 'قائد ملهم وصانع نهضة دبي' : 'Sovereign Dubai Leadership'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Royal Message Content Column */}
              <div className="lg:col-span-7 space-y-6 text-center lg:text-left rtl:lg:text-right">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
                  <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  <span>
                    {isAr
                      ? 'رسالة ملهمة من صاحب السمو الشيخ محمد بن راشد آل مكتوم'
                      : 'Words of Inspiration — H.H. Sheikh Mohammed bin Rashid Al Maktoum'}
                  </span>
                </div>

                <div className="relative">
                  <blockquote className="text-xl sm:text-2xl lg:text-3xl font-serif font-black italic text-teal-50/95 leading-relaxed sm:leading-relaxed">
                    "{isAr ? profile.leadership.royalQuote.quoteAr : profile.leadership.royalQuote.quoteEn}"
                  </blockquote>
                </div>

                <div className="pt-4 border-t border-teal-500/20">
                  <h3 className="font-extrabold text-lg sm:text-xl text-amber-300 font-serif">
                    {isAr ? profile.leadership.royalQuote.leaderAr : profile.leadership.royalQuote.leaderEn}
                  </h3>
                  <p className="text-xs sm:text-sm text-teal-200/80 font-medium mt-0.5">
                    {isAr ? profile.leadership.royalQuote.roleAr : profile.leadership.royalQuote.roleEn}
                  </p>
                </div>

                {/* Visionary Pillars */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-xs">
                    <span className="font-bold text-amber-200 block mb-0.5">
                      {isAr ? 'أجندة دبي الاقتصادية D33' : 'Dubai D33 Agenda'}
                    </span>
                    <span className="text-[11px] text-slate-300">
                      {isAr ? 'مضاعفة حجم اقتصاد دبي' : 'Doubling Dubai Economy'}
                    </span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-xs">
                    <span className="font-bold text-teal-200 block mb-0.5">
                      {isAr ? 'حكومة الـ 5 نجوم' : '5-Star Service Standard'}
                    </span>
                    <span className="text-[11px] text-slate-300">
                      {isAr ? 'سرعة وجودة المعاملات' : 'Zero-Queue Excellence'}
                    </span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-xs">
                    <span className="font-bold text-emerald-200 block mb-0.5">
                      {isAr ? 'سعادة المتعاملين أولاً' : 'Customer Happiness'}
                    </span>
                    <span className="text-[11px] text-slate-300">
                      {isAr ? 'خدمة بروح التميز' : 'People-First Service'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Managing Director Message & Board of Directors */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Managing Director Message */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-8 sm:p-12 shadow-sm">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-4 text-center lg:text-left rtl:lg:text-right space-y-3">
                <div className="w-28 h-28 mx-auto lg:mx-0 rounded-2xl overflow-hidden border-2 border-[#128B94]/40 shadow-lg ring-2 ring-teal-100 bg-slate-900">
                  <img
                    src={haniEbrahimImg}
                    alt={isAr ? profile.leadership.managingDirector.nameAr : profile.leadership.managingDirector.nameEn}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900">
                    {isAr ? profile.leadership.managingDirector.nameAr : profile.leadership.managingDirector.nameEn}
                  </h3>
                  <div className="text-xs font-bold text-[#128B94] uppercase tracking-wider mt-0.5">
                    {isAr ? profile.leadership.managingDirector.titleAr : profile.leadership.managingDirector.titleEn}
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    {isAr ? 'مركز الكرامة للأعمال ومركز الكرامة للياقة الطبية' : 'Al Karama Medical Fitness Center · Karama Business Center'}
                  </div>
                </div>
                <div className="pt-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-teal-50 border border-teal-200 text-[#01403F] text-xs font-semibold">
                    <Building2 className="w-3.5 h-3.5 text-[#128B94]" />
                    <span>{isAr ? 'تأسس المركز عام 2013' : 'Leading KBC Since 2013'}</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-8 border-t lg:border-t-0 lg:border-l rtl:lg:border-l-0 rtl:lg:border-r border-slate-200 pt-6 lg:pt-0 lg:pl-8 rtl:lg:pl-0 rtl:lg:pr-8 space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-teal-50 text-[#128B94] text-xs font-bold uppercase tracking-wider">
                  <Quote className="w-3.5 h-3.5" />
                  <span>{isAr ? 'كلمة المدير التنفيذي' : 'Managing Director’s Message'}</span>
                </div>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic">
                  "{isAr ? profile.leadership.managingDirector.messageAr : profile.leadership.managingDirector.messageEn}"
                </p>
                <div className="text-xs font-bold text-slate-900 pt-1">
                  — {isAr ? profile.leadership.managingDirector.nameAr : profile.leadership.managingDirector.nameEn}
                </div>
              </div>
            </div>
          </div>

          {/* Board of Directors Roster */}
          <div>
            <div className="text-center max-w-2xl mx-auto mb-8">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-teal-50 border border-teal-200 text-[#128B94] text-xs font-bold uppercase tracking-wider mb-2">
                <Users className="w-3.5 h-3.5" />
                <span>{isAr ? 'القيادة ومجلس الإدارة' : 'Ownership & Governance'}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                {isAr ? 'مجلس الإدارة (Board of Directors)' : 'Board of Directors'}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                {isAr
                  ? 'قيادة وطنية وخبرات متميزة تقود مسيرة التميز الحكومي وتسهيل الأعمال في دبي'
                  : 'Distinguished leadership and visionary governance driving seamless government facilitation in Dubai.'}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {profile.leadership.board.map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl border border-slate-200 p-6 text-center shadow-xs hover:shadow-md transition-shadow"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#01403F] to-[#128B94] text-white flex items-center justify-center font-bold text-xl mx-auto mb-4 shadow-xs">
                    {member.nameEn.split(' ').map((n) => n[0]).slice(0, 2).join('')}
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    {isAr ? member.nameAr : member.nameEn}
                  </h3>
                  <div className="text-xs font-semibold text-[#128B94] mt-1">
                    {isAr ? member.roleAr : member.roleEn}
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">
                    {isAr ? 'الإمارات لخدمات رجال الأعمال ومركز الكرامة' : 'Karama Business Center & ESS'}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Unique Selling Proposition (USP) & Who We Are */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-teal-50 border border-teal-200 text-[#128B94] text-xs font-bold uppercase tracking-wider">
                <Target className="w-3.5 h-3.5" />
                <span>{isAr ? 'الميزة التنافسية الفريدة (USP)' : 'Unique Selling Proposition (USP)'}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight">
                {isAr ? (
                  <>
                    وجهة واحدة لكافة المعاملات الحكومية <br />
                    <span className="text-[#128B94]">"One Stop Government Transactions"</span>
                  </>
                ) : (
                  <>
                    One Stop Government Transactions <br />
                    <span className="text-[#128B94]">Everything Under One Roof</span>
                  </>
                )}
              </h2>

              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                {isAr ? profile.usp.descAr : profile.usp.descEn}
              </p>

              <div className="bg-slate-50 border border-slate-200/90 rounded-xl p-5 space-y-3">
                <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  {isAr ? 'من نحن؟ (Who Are We?)' : 'Who Are We?'}
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {isAr
                    ? 'مركز الكرامة للأعمال (مركز الكرامة للياقة الطبية / الإمارات لخدمات رجال الأعمال)، تأسس عام 2013، وهو وجهة موثوقة للأفراد والشركات في دبي. يضم فريقنا نخبة من المتخصصين الملتزمين بأعلى معايير خدمة العملاء وضمان تلبية كافة الاحتياجات بكفاءة وسرعة فائقة.'
                    : 'Al Karama Medical Fitness Center (Karama Business Center), founded in 2013, is a trusted and reliable hub for individuals and businesses seeking streamlined government and business services. We are a dedicated team of professionals committed to providing exceptional customer service and ensuring that all your needs are met efficiently and effectively.'}
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 pt-1">
                <div className="flex items-start gap-3 p-3.5 rounded-lg bg-teal-50/70 border border-teal-100">
                  <CheckCircle2 className="w-5 h-5 text-[#128B94] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-bold text-slate-900">
                      {isAr ? 'توفير الوقت والجهد' : 'Saves Time & Resources'}
                    </div>
                    <div className="text-xs text-slate-600">
                      {isAr ? 'لا حاجة للتنقل بين مقار الوزارات والدوائر' : 'Zero need to commute between disparate departments'}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-lg bg-teal-50/70 border border-teal-100">
                  <CheckCircle2 className="w-5 h-5 text-[#128B94] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-bold text-slate-900">
                      {isAr ? 'دقة وسرعة متناهية' : 'Precision & Speed'}
                    </div>
                    <div className="text-xs text-slate-600">
                      {isAr ? 'فريق خبير يراجع المستندات لتفادي الرفض' : 'Expert audit preventing ministerial rejections'}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Facilities Collage */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm h-48 sm:h-56 bg-slate-900">
                  <img
                    src={salemMedicalImg}
                    alt="Salem Medical Fitness Center Karama"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 rounded-xl bg-[#01403F] text-white">
                  <div className="text-xs font-bold uppercase tracking-wider text-teal-300 mb-1">
                    {isAr ? 'فحص طبي فوري (سالم)' : 'Express DHA Screening'}
                  </div>
                  <p className="text-xs text-teal-100 leading-snug">
                    {isAr
                      ? 'نتائج فحص الإقامة الطبي خلال ساعتين أو 6 ساعات بنظام سالم المعتمد'
                      : 'Visa medical screening results in 2 hours or 6 hours via Salem system'}
                  </p>
                </div>
              </div>

              <div className="space-y-4 pt-6">
                <div className="p-4 rounded-xl bg-teal-50 border border-teal-200 text-slate-800">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#128B94] mb-1">
                    {isAr ? 'مجلس كبار الشخصيات VIP' : 'VIP Executive Majlis'}
                  </div>
                  <p className="text-xs text-slate-600 leading-snug">
                    {isAr
                      ? 'ضيافة إماراتية وخدمة صف السيارات ومتابعة ملفات المستثمرين'
                      : 'Emirati hospitality, complimentary valet & dedicated file officers'}
                  </p>
                </div>
                <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm h-48 sm:h-56 bg-slate-900">
                  <img
                    src={vipMajlisLoungeImg}
                    alt="VIP Executive Majlis Lounge Karama"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do - 6 Pillars from Company Profile */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-teal-50 border border-teal-200 text-[#128B94] text-xs font-bold uppercase tracking-wider mb-2">
              <Compass className="w-3.5 h-3.5" />
              <span>{isAr ? 'ماذا نقدم؟ (What We Do?)' : 'What We Do?'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              {isAr ? 'الخدمات الحكومية وحلول الأعمال المتكاملة' : 'Six Consolidated Government Service Departments'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              {isAr
                ? 'هدفنا تقديم تجربة سلسة وخالية من المتاعب من خلال تجميع كافة هذه المعاملات في موقع واحد مريح بالكرامة.'
                : 'Our goal is to provide a hassle-free experience by consolidating all these services in one convenient location.'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatWeDoItems.map((item, index) => {
              const IconComp = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-teal-50 text-[#128B94] flex items-center justify-center font-bold">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-black text-slate-200 group-hover:text-teal-200 transition-colors">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {isAr ? item.titleAr : item.titleEn}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {isAr ? item.descAr : item.descEn}
                  </p>

                  <button
                    onClick={onNavigateToDepartments}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#128B94] hover:text-[#01403F] transition-colors cursor-pointer"
                  >
                    <span>{isAr ? 'عرض تفاصيل الخدمات' : 'Explore Services'}</span>
                    <ArrowIcon className="w-3.5 h-3.5" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Values Section (Teamwork, Integrity, Customer-Centricity, Excellence, Innovation) */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-teal-50 border border-teal-200 text-[#128B94] text-xs font-bold uppercase tracking-wider mb-2">
              <Shield className="w-3.5 h-3.5" />
              <span>{isAr ? 'القيم الجوهرية (Core Values)' : 'Our Five Core Values'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              {isAr ? 'المبادئ التي تقود عملنا اليومي' : 'Principles Driving Our Daily Operations'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              {isAr
                ? 'نسترشد بهذه القيم في خدمة عملائنا وتعزيز مكانة دبي كمركز عالمي للأعمال'
                : 'Guiding how we serve our valued clients and contribute to Dubai’s global reputation.'}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {coreValues.map((val) => {
              const ValIcon = val.icon;
              return (
                <div
                  key={val.id}
                  className="bg-slate-50 rounded-xl border border-slate-200/90 p-5 hover:bg-white hover:border-[#128B94] transition-all shadow-xs"
                >
                  <div className="w-11 h-11 rounded-lg bg-teal-100 text-[#128B94] flex items-center justify-center mb-3">
                    <ValIcon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1.5">{val.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{val.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision Statements */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-xs relative overflow-hidden">
              <div className="w-12 h-12 rounded-xl bg-teal-50 text-[#128B94] flex items-center justify-center mb-4">
                <Target className="w-6 h-6" />
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#128B94] mb-1">
                {isAr ? 'رسالتنا (Mission Statement)' : 'Our Mission'}
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 mb-3">
                {isAr ? 'التميز في خدمة المتعاملين' : 'Comprehensive & Customer-Centric Service'}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {isAr ? profile.mission.ar : profile.mission.en}
              </p>
            </div>

            {/* Vision */}
            <div className="bg-gradient-to-br from-[#01403F] to-[#085C5E] text-white rounded-2xl p-8 shadow-md relative overflow-hidden">
              <div className="w-12 h-12 rounded-xl bg-white/10 text-teal-200 flex items-center justify-center mb-4">
                <Compass className="w-6 h-6" />
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-teal-300 mb-1">
                {isAr ? 'رؤيتنا (Vision Statement)' : 'Our Vision'}
              </div>
              <h3 className="text-xl font-extrabold text-white mb-3">
                {isAr ? 'الوجهة الرائدة الأولى في دبي' : 'Dubai’s Leading Integrated Service Hub'}
              </h3>
              <p className="text-sm text-teal-100/90 leading-relaxed">
                {isAr ? profile.vision.ar : profile.vision.en}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Achievements & Milestones */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-teal-50 border border-teal-200 text-[#128B94] text-xs font-bold uppercase tracking-wider">
                <Award className="w-3.5 h-3.5" />
                <span>{isAr ? 'الإنجازات والمحطات' : 'Achievements & Milestones'}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                {isAr ? 'أكثر من عقد من الموثوقية والشراكات الحكومية الراسخة' : 'Over a Decade of Trusted Government Partnerships'}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {isAr
                  ? 'منذ عام 2013، أثبت مركز الكرامة للأعمال والإمارات لخدمات رجال الأعمال ريادته في تقديم خدمات حكومية ميسرة وسريعة للأفراد والشركات في دبي.'
                  : 'Since our establishment in 2013, we have successfully assisted thousands of individuals, families, and corporations with fast, accurate government facilitation.'}
              </p>
            </div>

            <div className="lg:col-span-7 space-y-3">
              {profile.milestones.map((m, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200/90 shadow-2xs"
                >
                  <div className="w-6 h-6 rounded-full bg-[#128B94] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-slate-800 leading-relaxed">
                    {isAr ? m.ar : m.en}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Original Center Facilities Photographic Tour */}
      <section className="py-16 bg-gradient-to-b from-slate-50 to-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-teal-50 border border-teal-200 text-[#128B94] text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{isAr ? 'جولة مصورة حقيقية' : 'Authentic Center Tour'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              {isAr
                ? 'أروقة وقاعات مركز الكرامة للأعمال والإمارات لخدمات رجال الأعمال'
                : 'Inside Karama Business Center & Emirates Secretarial Services'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-2xl mx-auto">
              {isAr
                ? 'صور أصلية حية من داخل مجمعنا الحكومي المتكامل في منطقة الكرامة (بجوار بريد الكرامة)، دبي. صالات واسعة وتجهيزات سيادية تلبي معايير دبي 2026.'
                : 'Authentic high-resolution photographs directly from our state-of-the-art government services complex in Al Karama, Next to Karama Post Office, Dubai.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ALL_ORIGINAL_CENTER_PHOTOS.map((photo) => (
              <div
                key={photo.id}
                className="bg-white rounded-xl border border-slate-200 shadow-xs hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col group"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                  <img
                    src={photo.url}
                    alt={isAr ? photo.titleAr : photo.titleEn}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                  <div className="absolute top-3 left-3 rtl:left-auto rtl:right-3">
                    <span className="px-2.5 py-1 rounded-md bg-[#128B94]/90 backdrop-blur-xs text-white text-[11px] font-bold shadow-xs">
                      {isAr ? photo.locationBadgeAr : photo.locationBadgeEn}
                    </span>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#128B94] transition-colors leading-snug">
                      {isAr ? photo.titleAr : photo.titleEn}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      {isAr ? photo.captionAr : photo.captionEn}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Google Reviews Slider & Rating Section (Consistent Google branding & interactive slider) */}
      <GoogleReviewsSection language={language} />

      {/* Official Accreditations, ISO Certifications & Governance Standards */}
      <TrustBadges language={language} />

      {/* Official Government Partners Strip */}
      <section className="py-14 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-teal-50 border border-teal-200 text-[#128B94] text-xs font-bold uppercase tracking-wider mb-2">
              <Shield className="w-3.5 h-3.5" />
              <span>{isAr ? 'شركاؤنا الحكوميون' : 'Our Government Partners'}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              {isAr ? 'الربط المباشر مع الدوائر والوزارات الاتحادية والمحلية' : 'Direct Sovereign System Integrations'}
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 text-center">
            {[
              { nameEn: 'Amer (GDRFA)', nameAr: 'مركز آمر' },
              { nameEn: 'Tasheel (MoHRE)', nameAr: 'تسهيل' },
              { nameEn: 'Tawjeeh', nameAr: 'توجيه' },
              { nameEn: 'Tadbeer', nameAr: 'تدبير' },
              { nameEn: 'Dubai Health (Salem)', nameAr: 'صحة دبي (سالم)' },
              { nameEn: 'Dubai Courts', nameAr: 'محاكم دبي' },
              { nameEn: 'Economy & Tourism', nameAr: 'اقتصادية دبي' },
              { nameEn: 'ICP Federal Authority', nameAr: 'الهيئة الاتحادية' },
            ].map((p, i) => (
              <div
                key={i}
                className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex flex-col items-center justify-center hover:bg-teal-50/50 hover:border-teal-200 transition-colors"
              >
                <div className="text-xs font-bold text-slate-800">{isAr ? p.nameAr : p.nameEn}</div>
                <div className="text-[10px] text-slate-500 mt-0.5">{isAr ? 'معتمد رسمياً' : 'Authorized'}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get In Touch Banner */}
      <section className="py-14 bg-gradient-to-r from-[#01403F] to-[#128B94] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="text-xs uppercase font-extrabold tracking-widest text-teal-300">
                {isAr ? 'تواصل معنا وزيارة المركز' : 'Get in Touch'}
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                {isAr ? 'مستعدون لخدمتك في مركز الكرامة للأعمال' : 'Ready to Assist You at Karama Business Center'}
              </h2>
              <p className="text-sm text-teal-100 max-w-2xl leading-relaxed">
                {isAr
                  ? 'الكرامة، بجوار بريد الكرامة، دبي، الإمارات العربية المتحدة. فريقنا بانتظارك من الإثنين إلى السبت.'
                  : 'Al Karama Next to Karama Post Office, Dubai, UAE. Open Monday to Saturday with express medical and business counters.'}
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-white">
                <span className="font-bold">Tel & WhatsApp: +971 4 342 6666</span>
                <span>•</span>
                <span className="font-bold">Email: info@ess.ae</span>
                <span>•</span>
                <span className="font-bold">Web: ess.ae</span>
                <span>•</span>
                <span className="font-bold">Follow: @karama.center</span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <button
                onClick={onOpenBooking}
                className="w-full py-3.5 px-6 rounded-lg bg-white text-[#01403F] hover:bg-teal-50 font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#128B94]" />
                <span>{isAr ? 'حجز موعد بالمركز' : 'Book Center Appointment'}</span>
              </button>
              <button
                onClick={onNavigateToContact}
                className="w-full py-3.5 px-6 rounded-lg bg-teal-900/60 hover:bg-teal-900 text-white border border-teal-300/40 font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <MapPin className="w-4 h-4 text-teal-300" />
                <span>{isAr ? 'عرض خريطة الموقع وساعات العمل' : 'View Location Map & Hours'}</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
