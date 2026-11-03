import React, { useState } from 'react';
import {
  Star,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  CheckCircle2,
  MapPin,
  MessageSquare,
  ThumbsUp,
  Sparkles,
  X
} from 'lucide-react';
import { Language } from '../types';

export interface GoogleReview {
  id: string;
  authorName: string;
  authorNameAr: string;
  authorInitial: string;
  avatarBg: string;
  rating: number;
  timeAgoEn: string;
  timeAgoAr: string;
  departmentIds: string[];
  serviceCategoryEn: string;
  serviceCategoryAr: string;
  reviewTextEn: string;
  reviewTextAr: string;
  helpfulCount: number;
  verified: boolean;
}

const GOOGLE_MAPS_URL = 'https://share.google/fEhpJuPHlHoSHmlbp';

export const ALL_GOOGLE_REVIEWS: GoogleReview[] = [
  // 1. Salem Medical
  {
    id: 'rev-salem-1',
    authorName: 'Tariq Mansoor',
    authorNameAr: 'طارق منصور',
    authorInitial: 'T',
    avatarBg: 'bg-blue-600',
    rating: 5,
    timeAgoEn: '1 week ago',
    timeAgoAr: 'منذ أسبوع',
    departmentIds: ['salem', 'amer'],
    serviceCategoryEn: 'Salem Express Medical Fitness (2-Hour)',
    serviceCategoryAr: 'فحص اللياقة الطبية السريع لساعتين (سالم)',
    reviewTextEn:
      'Went to Karama Medical Fitness Center for express visa medical. In and out in 15 minutes! The blood test and chest X-ray were super organized, and my Salem fitness certificate was ready in under 2 hours. Best medical center in Dubai.',
    reviewTextAr:
      'زرت مركز الكرامة للياقة الطبية لإجراء الفحص الطبي المستعجل للإقامة. دخلت وخرجت في 15 دقيقة فقط! سحب الدم والأشعة في قمة التنظيم، وصدرت نتيجة سالم الطبية في أقل من ساعتين. أفضل وأسرع مركز في دبي بلا منازع.',
    helpfulCount: 28,
    verified: true,
  },
  // 2. Golden Visa & Amer
  {
    id: 'rev-amer-1',
    authorName: 'Sarah Al Ketbi',
    authorNameAr: 'سارة الكتبي',
    authorInitial: 'S',
    avatarBg: 'bg-emerald-600',
    rating: 5,
    timeAgoEn: '2 weeks ago',
    timeAgoAr: 'منذ أسبوعين',
    departmentIds: ['amer', 'vip'],
    serviceCategoryEn: '10-Year UAE Golden Visa Petition',
    serviceCategoryAr: 'الإقامة الذهبية 10 سنوات',
    reviewTextEn:
      'Special thanks to Mr. Ihab in the Golden Visa section. Our executive petitions were submitted and approved with zero hassle. Having Amer, Medical, and typing under one single roof saved days of work.',
    reviewTextAr:
      'شكر خاص للسيد إيهاب في قسم الإقامة الذهبية. تم رفع طلباتنا التنفيذية واعتمادها بسلاسة تامة. وجود مركز آمر والفحص الطبي والطباعة الحكومية تحت سقف واحد وفر علينا أياماً طويلة.',
    helpfulCount: 42,
    verified: true,
  },
  // 3. DET & Business Setup
  {
    id: 'rev-ded-1',
    authorName: 'Alexander Schmidt',
    authorNameAr: 'ألكسندر شميت',
    authorInitial: 'A',
    avatarBg: 'bg-purple-600',
    rating: 5,
    timeAgoEn: '3 weeks ago',
    timeAgoAr: 'منذ 3 أسابيع',
    departmentIds: ['ded', 'typing'],
    serviceCategoryEn: 'Mainland LLC License & DET Instant Permit',
    serviceCategoryAr: 'تأسيس شركة ورخصة اقتصادية دبي الفورية',
    reviewTextEn:
      'Established our consultancy firm through Karama Business Center. Sameer Ali and the team guided us from trade name reservation to final license printing and Ejari in 48 hours. Absolute 5-star service!',
    reviewTextAr:
      'أسسنا شركتنا الاستشارية عبر مركز الكرامة للأعمال. قام السيد سمير علي وفريق العمل بتوجيهنا من حجز الاسم التجاري وحتى طباعة الرخصة وعقد إيجاري خلال 48 ساعة فقط. خدمة 5 نجوم حقيقية!',
    helpfulCount: 19,
    verified: true,
  },
  // 4. Amer Family Sponsorship
  {
    id: 'rev-amer-2',
    authorName: 'Priya Sharma',
    authorNameAr: 'بريا شارما',
    authorInitial: 'P',
    avatarBg: 'bg-pink-600',
    rating: 5,
    timeAgoEn: '1 month ago',
    timeAgoAr: 'منذ شهر',
    departmentIds: ['amer', 'icp'],
    serviceCategoryEn: 'Amer Family Residence & Maid Visa',
    serviceCategoryAr: 'إقامة العائلة وتأشيرة المساعدة المنزلية',
    reviewTextEn:
      'Azza Alaa at Amer counter was exceptionally patient and helpful. She guided us through my parents’ dependent visa and domestic worker contract. No waiting lines, very courteous staff.',
    reviewTextAr:
      'الأستاذة عزة علاء في شباك آمر كانت متعاونة ولطيفة جداً. ساعدتنا في إنجاز إقامة الوالدين وعقد المساعدة المنزلية بسلاسة وسرعة. لا توجد طوابير انتظار وفريق العمل راقٍ ومحترم.',
    helpfulCount: 31,
    verified: true,
  },
  // 5. Occupational Health OHC
  {
    id: 'rev-ohc-1',
    authorName: 'Michael O’Connor',
    authorNameAr: 'مايكل أوكونور',
    authorInitial: 'M',
    avatarBg: 'bg-indigo-600',
    rating: 5,
    timeAgoEn: '1 month ago',
    timeAgoAr: 'منذ شهر',
    departmentIds: ['ohc', 'salem'],
    serviceCategoryEn: 'Occupational Health Cards (OHC) Bulk Staff',
    serviceCategoryAr: 'بطاقات الصحة المهنية (OHC) لمتداولي الأغذية',
    reviewTextEn:
      'We brought 25 hospitality staff for Dubai Health OHC and blood tests. The group coordination was flawless. Clean facilities, professional nurses, and express results. Highly recommended.',
    reviewTextAr:
      'أحضرنا 25 موظفاً من قطاع الضيافة لإجراء فحص بطاقة الصحة المهنية وسحب الدم. التنسيق الجماعي كان مثالياً وفائق السرعة، ومستوى النظافة والتعامل الطبي متميز جداً. نوصي بهم بشدة.',
    helpfulCount: 22,
    verified: true,
  },
  // 6. Tasheel MoHRE
  {
    id: 'rev-tasheel-1',
    authorName: 'Fatima Zahra El-Idrissi',
    authorNameAr: 'فاطمة الزهراء الإدريسي',
    authorInitial: 'F',
    avatarBg: 'bg-teal-600',
    rating: 5,
    timeAgoEn: '1 month ago',
    timeAgoAr: 'منذ شهر',
    departmentIds: ['tasheel', 'typing'],
    serviceCategoryEn: 'Tasheel MoHRE Work Permits & Quota Allocation',
    serviceCategoryAr: 'تصاريح العمل وتسهيل (الموارد البشرية)',
    reviewTextEn:
      'The quickest Tasheel transaction I’ve experienced in Dubai. Electronic work permit and quota update were processed on the spot. Great customer service by Adeel Zia at the typing desk.',
    reviewTextAr:
      'أسرع معاملة تسهيل أنجزتها في دبي! تم إصدار تصريح العمل الإلكتروني وتحديث كوتا المنشأة فوراً على الشباك. خدمة ممتازة من الأخ عديل ضياء في قسم الطباعة الحكومية.',
    helpfulCount: 17,
    verified: true,
  },
  // 7. VIP Majlis Experience
  {
    id: 'rev-vip-1',
    authorName: 'Vikram Malhotra',
    authorNameAr: 'فيكرام مالهوترا',
    authorInitial: 'V',
    avatarBg: 'bg-amber-600',
    rating: 5,
    timeAgoEn: '2 months ago',
    timeAgoAr: 'منذ شهرين',
    departmentIds: ['vip', 'amer', 'salem'],
    serviceCategoryEn: 'VIP Majlis Luxury Lounge Stamping',
    serviceCategoryAr: 'خدمة مجلس كبار الشخصيات VIP',
    reviewTextEn:
      'The VIP Majlis lounge is extraordinary. You relax with Arabic coffee while their concierge team processes your passport stamping, biometric, and medical fitness simultaneously. True Dubai luxury.',
    reviewTextAr:
      'مجلس كبار الشخصيات تجربة استثنائية فاخرة. تجلس مسترخياً مع القهوة العربية بينما يتولى الفريق إنجاز تثبيت الإقامة، والبصمة، والفحص الطبي في نفس اللحظة. رفاهية حقيقية.',
    helpfulCount: 38,
    verified: true,
  },
  // 8. Dubai Courts Notary
  {
    id: 'rev-notary-1',
    authorName: 'Nasser Al-Husseini',
    authorNameAr: 'ناصر الحسيني',
    authorInitial: 'N',
    avatarBg: 'bg-cyan-600',
    rating: 5,
    timeAgoEn: '2 months ago',
    timeAgoAr: 'منذ شهرين',
    departmentIds: ['notary', 'typing'],
    serviceCategoryEn: 'Dubai Courts Notary & MOJ Certified Translation',
    serviceCategoryAr: 'توثيق محاكم دبي والترجمة القانونية',
    reviewTextEn:
      'Needed an urgent Power of Attorney notarization and certified legal translation for a commercial contract. Handled with precision and legal expertise within 30 minutes. Transparent government fees.',
    reviewTextAr:
      'احتجت توثيق وكالة قانونية مستعجلة وترجمة معتمدة لعقد تجاري. تمت صياغتها واعتمادها من كاتب العدل بدقة قانونية خلال 30 دقيقة فقط وبشفافية تامة في الرسوم الحكومية.',
    helpfulCount: 15,
    verified: true,
  },
  // 9. Salem Medical Cleanliness & Speed
  {
    id: 'rev-salem-2',
    authorName: 'David Chen',
    authorNameAr: 'ديفيد تشن',
    authorInitial: 'D',
    avatarBg: 'bg-blue-700',
    rating: 5,
    timeAgoEn: '2 months ago',
    timeAgoAr: 'منذ شهرين',
    departmentIds: ['salem'],
    serviceCategoryEn: 'DHA Express Salem Blood Test & Digital X-Ray',
    serviceCategoryAr: 'الفحص الطبي السريع والأشعة السينية',
    reviewTextEn:
      'Super clean center next to Karama Post Office. The nurses taking blood samples are gentle and skilled. Parking was easy and the token queue system moved very rapidly. 10/10.',
    reviewTextAr:
      'مركز نظيف ومنظم جداً بجوار بريد الكرامة. الممرضون مهرة ولطفاء جداً في سحب الدم. المواقف متوفرة ونظام الطوابير الذكي سريع الإنجاز. تقييمي 10 من 10.',
    helpfulCount: 26,
    verified: true,
  },
  // 10. Amer Visa Hold
  {
    id: 'rev-amer-3',
    authorName: 'Amina Bukhash',
    authorNameAr: 'أمينة بوخش',
    authorInitial: 'A',
    avatarBg: 'bg-rose-600',
    rating: 5,
    timeAgoEn: '3 months ago',
    timeAgoAr: 'منذ 3 أشهر',
    departmentIds: ['amer'],
    serviceCategoryEn: 'GDRFA Residence Visa Hold & Status Modification',
    serviceCategoryAr: 'تعليق إقامة الأسرة (Hold) وتعديل الوضع',
    reviewTextEn:
      'I changed my company sponsor and needed to put my children’s visas on hold. The Amer team executed the GDRFA hold file immediately without cancelling my kids’ residency. Saved me thousands in fines!',
    reviewTextAr:
      'انتقلت إلى شركة جديدة واحتجت تعليق إقامات أطفالي مؤقتاً. فريق آمر أنجز ملف الـ Hold فوراً دون الحاجة لإلغاء إقاماتهم ودون دفع غرامات إضافية. أنقذوا الموقف باحترافية عالية!',
    helpfulCount: 45,
    verified: true,
  },
  // 11. Tasheel Corporate PRO Retainer
  {
    id: 'rev-tasheel-2',
    authorName: 'Rami Haddad',
    authorNameAr: 'رامي حداد',
    authorInitial: 'R',
    avatarBg: 'bg-emerald-700',
    rating: 5,
    timeAgoEn: '3 months ago',
    timeAgoAr: 'منذ 3 أشهر',
    departmentIds: ['tasheel', 'ded'],
    serviceCategoryEn: 'Corporate PRO Retainer & MoHRE Contracts',
    serviceCategoryAr: 'خدمات العلاقات الحكومية للشركات وعقود العمل',
    reviewTextEn:
      'We have been using Karama Business Center for our corporate PRO services since 2019. Mohammed Eissa and the operations team deliver top-tier SLA compliance. Always on time, zero errors.',
    reviewTextAr:
      'نتعامل مع مركز الكرامة للأعمال لإدارة معاملات شركاتنا منذ عام 2019. الأخ محمد عيسى وفريق العمل ملتزمون بأعلى معايير السرعة والدقة. مواعيدهم دقيقة دائماً وبلا أي أخطاء.',
    helpfulCount: 34,
    verified: true,
  },
  // 12. Amer & ICP Newcomer
  {
    id: 'rev-icp-1',
    authorName: 'Chloe Dubois',
    authorNameAr: 'كلوي دوبوا',
    authorInitial: 'C',
    avatarBg: 'bg-violet-600',
    rating: 5,
    timeAgoEn: '3 months ago',
    timeAgoAr: 'منذ 3 أشهر',
    departmentIds: ['icp', 'amer'],
    serviceCategoryEn: 'Emirates ID Biometrics & Visa Stamping',
    serviceCategoryAr: 'بصمة الهوية الاتحادية وإصدار أول إقامة',
    reviewTextEn:
      'As a newcomer to Dubai, government paperwork felt overwhelming until I walked into KBC. Their multilingual team guided me step-by-step through Emirates ID, DHA medical, and visa stamping. Truly exceptional!',
    reviewTextAr:
      'كمقيمة جديدة في دبي، شعرت بالقلق من كثرة المعاملات حتى زرت مركز الكرامة. أرشدني فريقهم المتحدث بلغات متعددة خطوة بخطوة من الهيئة الاتحادية حتى الفحص الطبي وتثبيت الإقامة. تجربة ممتازة!',
    helpfulCount: 29,
    verified: true,
  },
  // 13. Dubai Municipality DM
  {
    id: 'rev-dm-1',
    authorName: 'Chef Marcus Weber',
    authorNameAr: 'الشيف ماركوس فيبر',
    authorInitial: 'M',
    avatarBg: 'bg-orange-600',
    rating: 5,
    timeAgoEn: '3 weeks ago',
    timeAgoAr: 'منذ 3 أسابيع',
    departmentIds: ['dm', 'ohc'],
    serviceCategoryEn: 'Dubai Municipality Foodwatch & Health Permits',
    serviceCategoryAr: 'بلدية دبي واعتماد نظام فودووتش للأغذية',
    reviewTextEn:
      'Secured our restaurant food safety certifications, Foodwatch barcode registration, and Ejari approvals smoothly. Outstanding speed and thorough knowledge of Dubai Municipality regulations.',
    reviewTextAr:
      'حصلنا على اعتمادات سلامة الغذاء لمطعمنا وتسجيل نظام فودووتش وتوثيق إيجاري بكل سهولة. سرعة فائقة ودراية تامة بجميع لوائح واشتراطات بلدية دبي.',
    helpfulCount: 21,
    verified: true,
  },
  // 14. Atlas Attestation & MOFA
  {
    id: 'rev-atlas-1',
    authorName: 'Kenneth Moore',
    authorNameAr: 'كينيث مور',
    authorInitial: 'K',
    avatarBg: 'bg-sky-600',
    rating: 5,
    timeAgoEn: '1 month ago',
    timeAgoAr: 'منذ شهر',
    departmentIds: ['atlas', 'notary'],
    serviceCategoryEn: 'MOFA Degree Attestation & Embassy Legalization',
    serviceCategoryAr: 'تصديق الشهادات من وزارة الخارجية والسفارات',
    reviewTextEn:
      'Delivered my UK university degree and police clearance for MOFA attestation. They coordinated the embassy legalization and delivered the stamped document to my desk within 3 days. Superb reliability.',
    reviewTextAr:
      'سلمتهم شهادتي الجامعية من بريطانيا لتصديق وزارة الخارجية والسفارة. أنجزوا التصديقات وسلموا المستند المعتمد في مكتبي خلال 3 أيام فقط. مصداقية ودقة متناهية.',
    helpfulCount: 16,
    verified: true,
  },
  // 15. RTA Driving & Vehicle
  {
    id: 'rev-rta-1',
    authorName: 'Khalid Al-Ghamdi',
    authorNameAr: 'خالد الغامدي',
    authorInitial: 'K',
    avatarBg: 'bg-red-600',
    rating: 5,
    timeAgoEn: '2 weeks ago',
    timeAgoAr: 'منذ أسبوعين',
    departmentIds: ['rta'],
    serviceCategoryEn: 'RTA License Renewal & Mulkiya Ownership Transfer',
    serviceCategoryAr: 'تجديد رخصة القيادة ونقل ملكية المركبة (RTA)',
    reviewTextEn:
      'Completed my eye test and RTA driving license renewal on the spot while getting my car mulkiya registration updated. Incredibly convenient to have RTA services combined with business typing.',
    reviewTextAr:
      'أنجزت فحص النظر وتجديد رخصة القيادة ونقل ملكية المركبة فوراً في نفس الزيارة. راحة غير مسبوقة بوجود خدمات هيئة الطرق والمواصلات مع مركز الأعمال.',
    helpfulCount: 24,
    verified: true,
  },
  // 16. Doorstep Mobile Van VIP
  {
    id: 'rev-vip-2',
    authorName: 'Dr. Elena Rostova',
    authorNameAr: 'د. إيلينا روستوفا',
    authorInitial: 'E',
    avatarBg: 'bg-teal-700',
    rating: 5,
    timeAgoEn: '1 month ago',
    timeAgoAr: 'منذ شهر',
    departmentIds: ['vip', 'icp', 'ded'],
    serviceCategoryEn: 'Doorstep Mobile Government Van at DIFC',
    serviceCategoryAr: 'خدمة الحافلة الحكومية المتنقلة في مركز دبي المالي',
    reviewTextEn:
      'The mobile doorstep government van is pure innovation. They arrived at our DIFC office, captured biometrics inside the luxury van, and delivered our commercial license the same afternoon. Brilliant!',
    reviewTextAr:
      'خدمة الحافلة المتنقلة ابتكار رائع ومريح جداً. وصل الفريق إلى برجنا في مركز دبي المالي وأخذوا البصمة الحيوية داخل الحافلة الفاخرة وسلمونا الرخصة التجارية بعد الظهر. إنجاز باهر!',
    helpfulCount: 39,
    verified: true,
  },
  // 17. Dubai Chamber of Commerce
  {
    id: 'rev-chamber-1',
    authorName: 'Fatima Al Nuaimi',
    authorNameAr: 'فاطمة النعيمي',
    authorInitial: 'F',
    avatarBg: 'bg-emerald-800',
    rating: 5,
    timeAgoEn: '2 weeks ago',
    timeAgoAr: 'منذ أسبوعين',
    departmentIds: ['dubaichamber', 'ded'],
    serviceCategoryEn: 'Dubai Chamber Certificate of Origin & Attestation',
    serviceCategoryAr: 'شهادة المنشأ وتصديقات غرفة دبي',
    reviewTextEn:
      'We regularly process export Certificates of Origin and chamber membership renewals through Karama Business Center. Fast approvals, instant electronic stamps, and zero delays for our international shipping cargo.',
    reviewTextAr:
      'ننجز شهادات المنشأ التصديرية وتجديد عضوية غرفة تجارة دبي بانتظام عبر مركز الكرامة. اعتماد إلكتروني فوري ودون أي تأخير لشحناتنا التجارية الدولية.',
    helpfulCount: 18,
    verified: true,
  },
  // 18. Dubai Chamber ATA Carnet & Legalization
  {
    id: 'rev-chamber-2',
    authorName: 'Sanjay Kothari',
    authorNameAr: 'سانجاي كوثاري',
    authorInitial: 'S',
    avatarBg: 'bg-teal-800',
    rating: 5,
    timeAgoEn: '1 month ago',
    timeAgoAr: 'منذ شهر',
    departmentIds: ['dubaichamber', 'atlas'],
    serviceCategoryEn: 'Dubai Chamber Commercial Invoice & ATA Carnet',
    serviceCategoryAr: 'تصديق الفواتير التجارية ودفتر الإدخال المؤقت',
    reviewTextEn:
      'The corporate documentation desk expedited our exhibition ATA Carnet and commercial invoices through Dubai Chamber with stellar efficiency. Saved our team critical transit deadlines.',
    reviewTextAr:
      'مكتب المعاملات التجارية أنجز دفتر الإدخال المؤقت ATA Carnet وتصديق الفواتير عبر غرفة دبي بسرعة وكفاءة قياسية. وفروا على فريقنا وقتاً ثميناً قبل موعد المعرض الدولي.',
    helpfulCount: 14,
    verified: true,
  },
];

interface GoogleReviewsSectionProps {
  language: Language;
  departmentId?: string;
  title?: string;
  subtitle?: string;
  className?: string;
}

export const GoogleReviewsSection: React.FC<GoogleReviewsSectionProps> = ({
  language,
  departmentId,
  title,
  subtitle,
  className = '',
}) => {
  const isAr = language === 'ar';
  const [activeSlide, setActiveSlide] = useState(0);
  const [selectedReview, setSelectedReview] = useState<GoogleReview | null>(null);

  // Filter reviews by department if departmentId provided
  const filteredReviews = departmentId
    ? ALL_GOOGLE_REVIEWS.filter((r) => r.departmentIds.includes(departmentId))
    : ALL_GOOGLE_REVIEWS;

  // Fallback to top reviews if this specific department has fewer than 4 reviews
  const reviewsToDisplay =
    filteredReviews.length >= 4
      ? filteredReviews
      : [
          ...filteredReviews,
          ...ALL_GOOGLE_REVIEWS.filter((r) => !filteredReviews.includes(r)),
        ].slice(0, 8);

  const itemsPerSlide = 4;
  const totalSlides = Math.max(1, Math.ceil(reviewsToDisplay.length / itemsPerSlide));

  const safeSlide = activeSlide >= totalSlides ? 0 : activeSlide;

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const currentReviews = reviewsToDisplay.slice(
    safeSlide * itemsPerSlide,
    (safeSlide + 1) * itemsPerSlide
  );

  return (
    <section className={`py-14 sm:py-18 bg-slate-50 border-t border-slate-200/80 relative overflow-hidden ${isAr ? 'font-arabic' : ''} ${className}`}>
      {/* Background Subtle Google Brand Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Google Branding Header Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-md mb-10">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            {/* Left: Google Logo + Rating + Stars */}
            <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
              {/* Official Google G Logo Badge */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center p-3 shrink-0">
                <svg className="w-full h-full" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-extrabold uppercase tracking-widest text-[#4285F4]">
                    Google Reviews
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-bold border border-emerald-200">
                    {isAr ? 'تقييم ممتاز' : 'EXCELLENT'}
                  </span>
                </div>
                
                <div className="flex items-center gap-2.5 mt-1">
                  <span className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-serif">
                    4.8
                  </span>
                  <div>
                    <div className="flex items-center gap-1 text-[#FBBC05]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-[#FBBC05] text-[#FBBC05]" />
                      ))}
                    </div>
                    <p className="text-xs text-slate-600 font-semibold mt-0.5">
                      {isAr
                        ? 'استناداً إلى أكثر من 5,200 تقييم موثق على خرائط Google'
                        : 'Based on 5,200+ verified reviews on Google Maps'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: CTA to Google Maps */}
            <div className="flex items-center gap-3 w-full lg:w-auto">
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 lg:flex-none inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white border border-slate-300 hover:border-[#4285F4] text-slate-700 hover:text-[#4285F4] text-xs sm:text-sm font-bold shadow-xs hover:shadow-md transition-all cursor-pointer"
              >
                <MapPin className="w-4 h-4 text-[#EA4335]" />
                <span>{isAr ? 'عرض الموقع على خرائط Google' : 'View on Google Maps'}</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-60" />
              </a>

              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 lg:flex-none inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#4285F4] hover:bg-[#3367D6] text-white text-xs sm:text-sm font-bold shadow-md shadow-blue-500/20 transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{isAr ? 'اكتب تقييماً على Google' : 'Write a Review'}</span>
              </a>
            </div>
          </div>

          {/* Quick Highlight Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 mt-6 border-t border-slate-100 text-xs">
            <div className="flex items-center gap-2 text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{isAr ? 'فحص طبي فوري بساعتين' : '2-Hour Express Medical'}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
              <span>{isAr ? 'إجراءات الإقامة الذهبية' : 'Golden Visa Processing'}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
              <span>{isAr ? 'تأسيس شركات وتراخيص DET' : 'DET Trade License Setup'}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
              <span>{isAr ? 'خدمات VIP ومواقف متوفرة' : 'VIP Majlis & Easy Parking'}</span>
            </div>
          </div>
        </div>

        {/* Section Title & Slide Controls Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#128B94] uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{isAr ? 'آراء وتجارب المتعاملين الموثقة' : 'Verified Google Testimonials'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-serif">
              {title || (isAr ? 'تجارب حقيقية من مراجعي مركز الكرامة' : 'Real Google Reviews & Ratings')}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              {subtitle ||
                (isAr
                  ? `عرض 4 تقييمات لكل شريحة · الشريحة ${safeSlide + 1} من ${totalSlides} (${reviewsToDisplay.length} تقييم مختار)`
                  : `Showing 4 reviews per slide · Page ${safeSlide + 1} of ${totalSlides} (${reviewsToDisplay.length} featured reviews)`)}
            </p>
          </div>

          {/* Slide Arrow Navigation Buttons */}
          {totalSlides > 1 && (
            <div className="flex items-center gap-2 self-end sm:self-auto">
              <span className="text-xs font-bold text-slate-500 mr-2">
                {isAr ? 'اضغط للتمرير وقراءة المزيد' : 'Slide for more reviews'}
              </span>
              <button
                onClick={prevSlide}
                aria-label="Previous Reviews"
                className="w-10 h-10 rounded-xl bg-white border border-slate-300 hover:border-[#128B94] hover:bg-teal-50/50 text-slate-700 hover:text-[#128B94] flex items-center justify-center transition-all cursor-pointer shadow-xs active:scale-95"
              >
                <ChevronLeft className="w-5 h-5 rtl:rotate-180" />
              </button>

              {/* Pagination dots */}
              <div className="flex items-center gap-1.5 px-2">
                {[...Array(totalSlides)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveSlide(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`h-2.5 rounded-full transition-all cursor-pointer ${
                      safeSlide === i ? 'w-6 bg-[#128B94]' : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                aria-label="Next Reviews"
                className="w-10 h-10 rounded-xl bg-white border border-slate-300 hover:border-[#128B94] hover:bg-teal-50/50 text-slate-700 hover:text-[#128B94] flex items-center justify-center transition-all cursor-pointer shadow-xs active:scale-95"
              >
                <ChevronRight className="w-5 h-5 rtl:rotate-180" />
              </button>
            </div>
          )}
        </div>

        {/* 4 Reviews Per Row Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 p-5 sm:p-6 flex flex-col justify-between group hover:-translate-y-1 relative"
            >
              <div>
                {/* Author Info + Google G Icon */}
                <div className="flex items-start justify-between gap-3 mb-3.5">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-11 h-11 rounded-full ${rev.avatarBg} text-white flex items-center justify-center font-bold text-sm shadow-xs shrink-0`}
                    >
                      {rev.authorInitial}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm leading-snug">
                        {isAr ? rev.authorNameAr : rev.authorName}
                      </h4>
                      <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
                        <span>{isAr ? rev.timeAgoAr : rev.timeAgoEn}</span>
                        <span>·</span>
                        <span className="text-emerald-600 font-semibold flex items-center gap-0.5">
                          <CheckCircle2 className="w-3 h-3 inline" />
                          {isAr ? 'تقييم موثق' : 'Verified'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Google G Icon */}
                  <div className="w-5 h-5 shrink-0 opacity-80 group-hover:opacity-100 transition-opacity">
                    <svg viewBox="0 0 24 24" className="w-full h-full">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                      />
                    </svg>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex items-center gap-1 mb-2.5">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#FBBC05] text-[#FBBC05]" />
                  ))}
                  <span className="text-[11px] font-bold text-slate-500 ml-1">5.0</span>
                </div>

                {/* Service Tag */}
                <div className="inline-block px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[10px] font-semibold mb-3 border border-slate-200/60 truncate max-w-full">
                  {isAr ? rev.serviceCategoryAr : rev.serviceCategoryEn}
                </div>

                {/* Review Text */}
                <p className="text-slate-700 text-xs sm:text-[13px] leading-relaxed line-clamp-4">
                  "{isAr ? rev.reviewTextAr : rev.reviewTextEn}"
                </p>
              </div>

              {/* Card Footer: Read More & Helpful count */}
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <button
                  onClick={() => setSelectedReview(rev)}
                  className="text-[#128B94] hover:text-[#0C6B72] font-bold cursor-pointer transition-colors"
                >
                  {isAr ? 'قراءة التقييم كاملاً' : 'Read more'}
                </button>

                <div className="flex items-center gap-1 text-[11px] text-slate-400">
                  <ThumbsUp className="w-3 h-3" />
                  <span>{rev.helpfulCount}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Slide Action Button */}
        {totalSlides > 1 && (
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={nextSlide}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-white border border-slate-300 hover:border-[#128B94] text-slate-800 hover:text-[#128B94] font-bold text-xs uppercase tracking-wider shadow-sm transition-all cursor-pointer"
            >
              <span>
                {isAr
                  ? `الانتقال للشريحة التالية (${(safeSlide + 1) % totalSlides + 1}/${totalSlides})`
                  : `Slide to Next 4 Reviews (${(safeSlide + 1) % totalSlides + 1}/${totalSlides})`}
              </span>
              <ChevronRight className="w-4 h-4 rtl:rotate-180" />
            </button>
          </div>
        )}
      </div>

      {/* Review Full Text Modal */}
      {selectedReview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-slate-200 animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setSelectedReview(null)}
              className="absolute top-5 right-5 rtl:right-auto rtl:left-5 text-slate-400 hover:text-slate-700 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center cursor-pointer transition-colors"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3.5 mb-4">
              <div
                className={`w-12 h-12 rounded-full ${selectedReview.avatarBg} text-white flex items-center justify-center font-bold text-base shadow-sm shrink-0`}
              >
                {selectedReview.authorInitial}
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-base">
                  {isAr ? selectedReview.authorNameAr : selectedReview.authorName}
                </h3>
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span>{isAr ? selectedReview.timeAgoAr : selectedReview.timeAgoEn}</span>
                  <span>·</span>
                  <span className="text-emerald-600 font-semibold flex items-center gap-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 inline" />
                    {isAr ? 'تقييم موثق على Google Maps' : 'Verified Google Maps Review'}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1 mb-3">
              {[...Array(selectedReview.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#FBBC05] text-[#FBBC05]" />
              ))}
              <span className="text-xs font-bold text-slate-600 ml-1.5">5.0 Star Experience</span>
            </div>

            <div className="inline-block px-3 py-1 rounded-lg bg-teal-50 text-[#01403F] text-xs font-bold mb-4 border border-teal-200/60">
              {isAr ? selectedReview.serviceCategoryAr : selectedReview.serviceCategoryEn}
            </div>

            <blockquote className="text-slate-800 text-sm sm:text-base leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-200/80 mb-6 italic">
              "{isAr ? selectedReview.reviewTextAr : selectedReview.reviewTextEn}"
            </blockquote>

            <div className="flex items-center justify-between pt-2">
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#4285F4] hover:underline font-bold"
              >
                <MapPin className="w-3.5 h-3.5 text-[#EA4335]" />
                <span>{isAr ? 'عرض المركز على خرائط Google' : 'Open in Google Maps'}</span>
                <ExternalLink className="w-3 h-3" />
              </a>

              <button
                onClick={() => setSelectedReview(null)}
                className="px-5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold cursor-pointer transition-colors"
              >
                {isAr ? 'إغلاق' : 'Close'}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
