import os

output_path = "/src/data/amerServicesExtendedData.ts"

content = '''import { ProcessStep, GalleryImage, FaqItem, ReviewItem } from '../types';
import heroCenterImage from '../assets/images/hero_dubai_service_center_1791638405069.jpg';
import vipMajlisImage from '../assets/images/vip_majlis_lounge_1791638418441.jpg';
import smartDeskImage from '../assets/images/smart_service_desk_1791638430293.jpg';
import mobileVanImage from '../assets/images/mobile_gov_service_1791638441906.jpg';

export interface ServiceRichDetails {
  detailedOverviewEn: string;
  detailedOverviewAr: string;
  legalFrameworkEn: string;
  legalFrameworkAr: string;
  eligibilityEn: string[];
  eligibilityAr: string[];
  galleryImages: GalleryImage[];
  processSteps: ProcessStep[];
  faqs: FaqItem[];
  reviews: ReviewItem[];
  targetKeywords?: {
    shortTail: string[];
    longTail: string[];
  };
  featuredFacilityImage?: {
    url: string;
    captionEn: string;
    captionAr: string;
    locationBadgeEn: string;
    locationBadgeAr: string;
  };
}

const COMMON_GALLERY: GalleryImage[] = [
  {
    url: heroCenterImage,
    titleEn: 'Authorized Amer Center Hall at Karama Business Center',
    titleAr: 'صالة مركز آمر المعتمد في مركز الكرامة للأعمال',
    captionEn: 'Main government transaction hall handling Dubai residency, employment visas, and entry permits with direct GDRFA connectivity.',
    captionAr: 'منصات الخدمة الرئيسية لإنجاز معاملات الإقامة وأذونات الدخول بربط إلكتروني مباشر مع إقامة دبي.',
  },
  {
    url: vipMajlisImage,
    titleEn: 'Executive VIP Residency Lounge & Majlis',
    titleAr: 'مجلس كبار الشخصيات لإنجاز الإقامات الفاخرة',
    captionEn: 'Private lounge service for business owners, corporate executives, and fast-track residency stamping with dedicated officers.',
    captionAr: 'صالة ضيافة خاصة لرجال الأعمال والمديرين التنفيذيين للإنجاز السريع ومتابعة الملفات في راحة وخصوصية.',
  },
  {
    url: smartDeskImage,
    titleEn: 'Integrated ICP Biometrics & Karama Medical Stamping Desk',
    titleAr: 'محطة البصمة البيومترية والفحص الطبي المدمجة بالكرامة',
    captionEn: 'Co-located testing wing allowing applicants to complete DHA medical fitness and Emirates ID biometric capture under one roof.',
    captionAr: 'جناح فحص متكامل يتيح للمتعامل إنجاز فحص اللياقة الطبية وبصمة الهوية الإماراتية تحت سقف واحد.',
  },
  {
    url: mobileVanImage,
    titleEn: 'Doorstep Mobile Government Residency Van',
    titleAr: 'حافلة المعاملات الحكومية المتنقلة لباب دارك',
    captionEn: 'Luxury mobile unit dispatched to corporate headquarters or residential villas for on-site residency processing across Dubai.',
    captionAr: 'حافلة مجهزة بالكامل تصل إلى مقر شركتك أو فيلتك لإنجاز معاملات الإقامة دون مغادرة مكانك.',
  },
];

export const AMER_SERVICES_RICH_MAP: Record<string, ServiceRichDetails> = {
  // =========================================================================
  // 1. RESIDENCY VISA (NEW) - Inside & Outside UAE
  // =========================================================================
  'amer-residency-visa-new': {
    detailedOverviewEn: `Applying for a new UAE residency visa in Dubai is a formal sovereign procedure governed by the General Directorate of Residency and Foreigners Affairs (GDRFA Dubai) and the Federal Authority for Identity, Citizenship, Customs and Port Security (ICP). At Karama Business Center (KBC), operating under authorized Amer Center License #772 and managed by Emirates Secretarial Services (ESS), we provide an end-to-end, fully transparent service for issuing new employment visas, partner/investor visas, and private corporate residencies.

Whether the applicant is currently inside the UAE on an entry permit, tourist visa, or cancelled status, or arriving fresh from overseas, our dedicated immigration department coordinates every milestone seamlessly. Our flagship facility in Al Karama (conveniently situated next to the Karama Post Office) directly houses the Karama Medical Fitness Express Service Center (KMFC) — known locally throughout Dubai as Karama Medical Center — alongside authorized ICP biometric fingerprint capture desks. This unique integrated facility means applicants do not need to commute across multiple government departments in Dubai. In one streamlined visit, you can complete document pre-auditing, entry permit issuance, in-country status change, urgent venous blood testing, digital chest X-ray screening, and Emirates ID biometric registration.

Every single application undergoes a strict three-tier verification protocol conducted by senior Amer consultants to ensure complete conformity with Ministry of Human Resources and Emiratisation (MoHRE) occupational skill matrices and Dubai Department of Economy and Tourism (DET) commercial mandates. We eliminate rejection risks and unexpected administrative costs through complete tariff transparency: our Inside UAE comprehensive package is AED 3,056 (inclusive of entry permit AED 1,125, status change AED 676, Emirates ID fee AED 386, DHA medical fitness test AED 322, and visa stamping AED 547), while our Outside UAE issuance package is AED 1,731 (entry permit AED 476, Emirates ID fee AED 386, DHA medical test AED 322, and visa stamping AED 547). For business founders, executive directors, and corporate teams with urgent onboarding deadlines, our private VIP Majlis fast-track lane guarantees same-day processing and expedited delivery.`,
    detailedOverviewAr: `تعتبر معالجة وإصدار تأشيرة الإقامة الجديدة في دبي إجراءً قانونياً سيادياً يتبع للإدارة العامة للإقامة وشؤون الأجانب بدبي (GDRFA) والهيئة الاتحادية للهوية والجنسية والجمارك وأمن المنافذ (ICP). ومن خلال مركز الكرامة للأعمال (KBC) وبترخيص مركز آمر المعتمد رقم 772 تحت إدارة الإمارات لخدمات رجال الأعمال (ESS)، نوفر حلاً حكومياً متكاملاً وشاملاً لإصدار وتثبيت الإقامات الجديدة للموظفين والشركاء والمستثمرين.

سواء كان المتعامل متواجداً داخل الدولة بتأشيرة زيارة وسياحة أو قادماً من خارج الإمارات، يتولى فريقنا المتخصص إنجاز كافة المراحل الإجرائية تحت سقف واحد. يتميز مقرنا في الكرامة (بجوار بريد الكرامة) باحتضان مركز الكرامة للياقة الطبية السريعة (KMFC) — المعروف شعبياً في دبي بمركز الكرامة الطبي — إلى جانب منصات البصمة البيومترية المعتمدة للهيئة الاتحادية. هذا التكامل الفريد يوفر على الشركات والمتعاملين عناء التنقل بين الدوائر، ويتيح إنجاز تدقيق المستندات، إصدار إذن الدخول، تعديل الوضع، الفحص الطبي السريع وبصمة الهوية في زيارة واحدة منسقة.

تخضع كل معاملة لتدقيق قانوني ثلاثي يضمن عدم الرفض ومطابقة المسميات الوظيفية لأنظمة وزارة الموارد البشرية واقتصادية دبي، مع تسليم إيصالات سداد حكومية رسمية فورية. تبلغ تكلفة باقة الداخل 3,056 درهم (تشمل إذن الدخول، تعديل الوضع، الهوية، الفحص الطبي وتثبيت الإقامة)، بينما تبلغ باقة الخارج 1,731 درهم، مع توفر مسار VIP الفوري للحالات التنفيذية والمستعجلة.`,
    legalFrameworkEn: `Federal Decree-Law No. 29 of 2021 regarding Foreigners Entry and Residence, UAE Cabinet Decision No. 65 of 2022, and GDRFA Dubai Executive Administrative Regulations for Private Sector and Investor Residence Issuance.`,
    legalFrameworkAr: `المرسوم بقانون اتحادي رقم (29) لسنة 2021 بشأن دخول وإقامة الأجانب، وقرار مجلس الوزراء رقم (65) لسنة 2022، واللوائح التنفيذية الصادرة عن الإدارة العامة للإقامة وشؤون الأجانب بدبي لتنظيم إقامات العمل والاستثمار.`,
    eligibilityEn: [
      'Valid employment contract approved by MoHRE or commercial trade license showing partner/investor shareholding',
      'Passport with at least 6 months validity from application submission date',
      'Clear legal status in the UAE without active immigration absconding reports or police circulars',
      'Passing mandatory DHA residency medical fitness screening (communicable diseases, blood test & chest X-ray)',
      'Submitting biometric fingerprints for Emirates ID issuance at authorized ICP terminals'
    ],
    eligibilityAr: [
      'عقد عمل إلكتروني معتمد من وزارة الموارد البشرية (تسهيل) أو رخصة تجارية تثبت صفة الشريك أو المستثمر',
      'جواز سفر ساري المفعول لمدة لا تقل عن 6 أشهر من تاريخ تقديم المعاملة',
      'وضع قانوني سليم داخل الدولة وخلو السجل من بلاغات الانقطاع أو التعاميم الأمنية',
      'اجتياز الفحص الطبي للياقة الإقامة بهيئة الصحة بدبي (فحص الدم والأشعة السينية للصدر)',
      'التقاط البصمة البيومترية العشرية والصورة الشخصية لدى محطات الهيئة الاتحادية'
    ],
    galleryImages: COMMON_GALLERY,
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'Document Verification & Legal Pre-Audit',
        titleAr: 'تدقيق ومراجعة المستندات القانونية',
        descEn: 'Comprehensive pre-lodgement review by senior Amer typists at Karama Business Center to verify contract validity, passport validity, and sponsor quotas.',
        descAr: 'مراجعة استباقية دقيقة لكافة عقود العمل والجوازات والاشتراطات لضمان القبول التام لدى إقامة دبي.',
        durationEn: '30 - 45 Mins',
        durationAr: '30 - 45 دقيقة',
      },
      {
        stepNumber: 2,
        titleEn: 'GDRFA Entry Permit & Status Change',
        titleAr: 'إصدار إذن الدخول وتعديل الوضع',
        descEn: 'Instant electronic generation of the official employment entry permit and in-country status change approval with immediate government vouchers.',
        descAr: 'إصدار إذن الدخول وتعديل الوضع داخل الدولة إلكترونياً مع إيصالات السداد الرسمية الصادرة من إقامة دبي.',
        durationEn: '2 - 4 Hours',
        durationAr: '2 - 4 ساعات',
      },
      {
        stepNumber: 3,
        titleEn: 'DHA Medical Test & ICP Biometrics',
        titleAr: 'الفحص الطبي وبصمة الهوية الاتحادية',
        descEn: 'VIP expedited screening at Karama Medical Fitness Express Service Center (KMFC) and on-site biometric fingerprint capture at Karama Business Center.',
        descAr: 'فحص فوري بمركز الكرامة للياقة الطبية السريعة (KMFC / مركز الكرامة الطبي) وأخذ البصمة البيومترية في نفس المقر.',
        durationEn: '2 - 24 Hours',
        durationAr: '2 - 24 ساعة',
      },
      {
        stepNumber: 4,
        titleEn: 'Digital Visa Stamping & Emirates ID Dispatch',
        titleAr: 'تثبيت الإقامة الرقمية وتسليم الهوية',
        descEn: 'Final residence approval uploaded directly to UAE Pass, followed by physical Emirates ID card courier dispatch to your location.',
        descAr: 'اعتماد وتثبيت الإقامة الرقمية فوراً على تطبيق UAE Pass وتسليم بطاقة الهوية الإماراتية الأصلية عبر التوصيل السريع.',
        durationEn: 'Same Day / 24h',
        durationAr: 'نفس اليوم / 24 ساعة',
      },
    ],
    faqs: [
      {
        questionEn: 'How much does a new UAE residency visa cost in Dubai at Karama Business Center?',
        questionAr: 'كم تبلغ تكلفة تأشيرة الإقامة الجديدة في دبي لدى مركز الكرامة للأعمال؟',
        answerEn: 'The official Inside UAE package is AED 3,056 (includes entry permit AED 1,125, status change AED 676, Emirates ID AED 386, DHA medical fitness AED 322, and visa stamping AED 547). The Outside UAE package is AED 1,731. All official government fee receipts are provided immediately.',
        answerAr: 'تبلغ تكلفة باقة الداخل 3,056 درهم (تشمل إذن الدخول 1,125 درهم، تعديل الوضع 676 درهم، الهوية 386 درهم، الفحص الطبي 322 درهم، والتثبيت 547 درهم)، وباقة الخارج 1,731 درهم. وتسلم إيصالات الدفع الحكومية الرسمية فوراً.',
      },
      {
        questionEn: 'Can I complete my medical test and Emirates ID fingerprint at Karama Business Center?',
        questionAr: 'هل يمكنني إنجاز الفحص الطبي وبصمة الهوية في مركز الكرامة للأعمال؟',
        answerEn: 'Yes! Our flagship facility houses the Karama Medical Fitness Express Service Center (KMFC / Karama Medical Center) and ICP biometrics terminals under one roof in Al Karama (Next to Karama Post Office), saving you multiple trips across Dubai.',
        answerAr: 'نعم بالتأكيد! يحتضن مقرنا بالكرامة (بجوار بريد الكرامة) مركز الكرامة للياقة الطبية السريعة (KMFC / مركز الكرامة الطبي) ومحطات البصمة التابعة للهيئة الاتحادية، لتنجز كافة المعاملات في زيارة واحدة مريحة.',
      },
      {
        questionEn: 'What is the turnaround time for a new residency visa issuance?',
        questionAr: 'ما هي المدة الزمنية المستغرقة لإصدار الإقامة الجديدة؟',
        answerEn: 'Standard processing takes 24 to 48 hours. With our VIP fast-track express option at Karama Business Center, medical results are issued within 2 hours and digital residency is approved the same day.',
        answerAr: 'يستغرق المسار العادي من 24 إلى 48 ساعة، بينما يوفر مسار VIP الفوري في مركز الكرامة للأعمال صدور نتيجة الفحص الطبي خلال ساعتين واعتماد الإقامة في نفس اليوم.',
      },
      {
        questionEn: 'Do I need to exit the UAE if my tourist or visit visa is expiring?',
        questionAr: 'هل يلزم مغادرة الدولة إذا كانت تأشيرة السياحة أو الزيارة على وشك الانتهاء؟',
        answerEn: 'No exit is required. We process an official in-country status change (AED 676) directly via GDRFA e-channels, converting your tourist status to a new residency visa without airport runs or cross-border travel.',
        answerAr: 'لا يلزم مغادرة الدولة إطلاقاً؛ حيث ننجز تعديل الوضع داخل الدولة (676 درهم) مباشرة عبر أنظمة إقامة دبي لتحويل وضعك من زائر إلى مقيم بكل سهولة.',
      },
    ],
    reviews: [
      {
        name: 'Alexander Lindqvist',
        roleEn: 'Managing Director',
        roleAr: 'العضو المنتدب',
        companyEn: 'Nordic FinTech Solutions FZCO',
        companyAr: 'نورديك لحلول التكنولوجيا المالية',
        rating: 5,
        date: 'October 2026',
        commentEn: 'Flawless service at Karama Business Center. Having Amer and Karama Medical Center (KMFC) in the exact same facility allowed our engineering recruit to finish his medical, biometrics, and new residency stamping in under four hours. Unmatched efficiency in Dubai.',
        commentAr: 'خدمة لا غبار عليها في مركز الكرامة للأعمال. وجود مركز آمر ومركز الكرامة الطبي (KMFC) في نفس المكان مكّن موظفنا الجديد من إنهاء الفحص والبصمة وتثبيت الإقامة خلال أقل من 4 ساعات. كفاءة استثنائية.',
      },
      {
        name: 'Fatima Al-Mansouri',
        roleEn: 'HR Business Partner',
        roleAr: 'شريك أعمال الموارد البشرية',
        companyEn: 'Apex Logistics Middle East',
        companyAr: 'أبيكس للخدمات اللوجستية',
        rating: 5,
        date: 'September 2026',
        commentEn: 'Emirates Secretarial Services (ESS) has been our corporate government partner for 6 years. Transparent billing with official GDRFA invoices, polite staff, and zero rejection rate for all our new visa applicants.',
        commentAr: 'الإمارات لخدمات رجال الأعمال (ESS) شريكنا الحكومي المعتمد منذ 6 سنوات. فواتير رسمية واضحة صادرة من إقامة دبي، وموظفون على أعلى مستوى من الاحترافية، ونسبة قبول 100% لكافة إقاماتنا الجديدة.',
      },
    ],
    targetKeywords: {
      shortTail: ['Residency Visa Dubai', 'New Visa Dubai', 'Amer Center Dubai', 'Karama Medical Center', 'Karama Business Center KBC'],
      longTail: ['New residency visa inside UAE cost Amer center', 'How to apply for new employment visa Dubai Karama', 'Express medical test and residency visa Karama medical center', 'Amer center Karama business center new visa package'],
    },
    featuredFacilityImage: {
      url: heroCenterImage,
      captionEn: 'Main service floor at Karama Business Center (KBC) housing Amer, Tasheel, and co-located Karama Medical Center.',
      captionAr: 'صالة المعاملات الحكومية الرئيسية بمركز الكرامة للأعمال التي تجمع خدمات آمر وتسهيل ومركز الكرامة الطبي.',
      locationBadgeEn: 'Karama Business Center · Al Karama, Next to Post Office, Dubai',
      locationBadgeAr: 'مركز الكرامة للأعمال · الكرامة، بجوار مكتب البريد، دبي',
    },
  },

  // =========================================================================
  // 2. RESIDENCY VISA (RENEWAL)
  // =========================================================================
  'amer-residency-visa-renewal': {
    detailedOverviewEn: `Renewing your UAE residency visa in Dubai is an essential statutory process that must be concluded prior to the expiration of your active permit or within the official 30-day grace period to prevent daily overstay penalties. Operating at Karama Business Center (KBC) under authorized Amer Center License #772 and managed by Emirates Secretarial Services (ESS), we provide an expedited, fully audited renewal pathway for 2-year private sector employment visas, 3-year commercial investor residencies, and family dependent sponsorships under GDRFA Dubai jurisdiction.

Our all-in-one government hub in Al Karama (located next to Karama Post Office) directly integrates with the Karama Medical Fitness Express Service Center (KMFC) — commonly known across Dubai as Karama Medical Center — alongside authorized ICP Emirates ID renewal stations. This integrated architecture allows Dubai residents to renew their entire legal profile without navigating multiple locations across the emirate. Within a single brief visit, our team completes your preliminary file verification, on-site DHA medical fitness screening, ICP Emirates ID renewal typing, and ministerial visa re-stamping.

Every renewal file is inspected to ensure complete alignment with Ministry of Human Resources and Emiratisation (MoHRE) work contracts, updated Ejari tenancy registrations, and active company establishment cards. Official government tariffs are maintained with absolute transparency: a standard 2-year residency renewal is AED 1,450 government fees plus AED 250 ESS certified typing and auditing fee, with optional VIP fast-track processing available for AED 300. Renewed digital residence permits are validated instantaneously on the UAE Pass app, with new physical Emirates ID cards dispatched directly to your residence or corporate headquarters via express government courier.`,
    detailedOverviewAr: `يعد تجديد تأشيرة الإقامة في دبي إجراءً قانونياً حيوياً يتعين إنجازه قبل انتهاء صلاحية الإقامة الحالية أو خلال فترة السماح الرسمية (30 يوماً) لتجنب الغرامات المالية اليومية. ومن خلال مركز الكرامة للأعمال (KBC) بترخيص مركز آمر المعتمد رقم 772 وبإدارة الإمارات لخدمات رجال الأعمال (ESS)، نقدم مساراً سريعاً ومضموناً لتجديد إقامات الموظفين (سنتان)، وإقامات المستثمرين والشركاء (3 سنوات)، وكفالات الأسرة التابعة تحت إشراف إقامة دبي.

يتميز مركزنا في منطقة الكرامة (بجوار بريد الكرامة) بالتكامل المباشر مع مركز الكرامة للياقة الطبية السريعة (KMFC) — المعروف بين سكان دبي بـ مركز الكرامة الطبي — ومنصات تجديد الهوية الإماراتية (ICP). يتيح هذا الدمج إنجاز كافة متطلبات التجديد تحت سقف واحد دون إضاعة الوقت في التنقل؛ حيث يتم تدقيق المستندات، وإجراء الفحص الطبي، وطباعة الهوية وتثبيت الإقامة الرقمية في زيارة واحدة.

تخضع كافة الملفات للفحص للتأكد من سريان عقود العمل في تسهيل، وتصديق عقود إيجاري وفواتير ديوا، وتحديث بطاقات المنشأة. تبلغ الرسوم الحكومية الرسمية لتجديد الإقامة لمدة سنتين 1,450 درهماً مضافاً إليها 250 درهماً رسوم الطباعة والتدقيق المعتمد لدى ESS، مع توفر خيار VIP للنتائج الطبية السريعة خلال ساعتين وتثبيت الإقامة فورياً.`,
    legalFrameworkEn: `Federal Decree-Law No. 29 of 2021 regarding Foreigners Entry and Residence, UAE Cabinet Resolution No. 65 of 2022, and GDRFA Dubai Executive Directives for Residence Permit Renewals.`,
    legalFrameworkAr: `المرسوم بقانون اتحادي رقم (29) لسنة 2021 بشأن دخول وإقامة الأجانب، وقرار مجلس الوزراء رقم (65) لسنة 2022، واللوائح التنظيمية للإدارة العامة للإقامة وشؤون الأجانب بدبي لتجديد أذونات الإقامة.`,
    eligibilityEn: [
      'Original Passport with active residency or currently within the official 30-day grace period',
      'Original Emirates ID card of the applicant',
      'Passing mandatory DHA residency medical fitness screening (communicable diseases blood test & chest X-ray)',
      'Valid Ejari tenancy contract registered in the sponsor or applicant name with recent DEWA bill',
      'For corporate employees: valid MoHRE electronic labour contract and active company trade license'
    ],
    eligibilityAr: [
      'جواز السفر الأصلي وتأشيرة الإقامة الحالية أو التواجد ضمن فترة السماح الرسمية',
      'بطاقة الهوية الإماراتية الأصلية للمكفول',
      'اجتياز الفحص الطبي لتجديد الإقامة بهيئة الصحة بدبي (فحص الدم والأشعة السينية)',
      'عقد إيجاري سكني مصدق وفاتورة كهرباء ومياه حديثة باسم الكفيل أو المكفول',
      'للموظفين: عقد عمل ساري المفعول من تسهيل ورخصة تجارية نشطة للشركة'
    ],
    galleryImages: COMMON_GALLERY,
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'File Audit & Grace Period Verification',
        titleAr: 'تدقيق الملف وفترة السماح',
        descEn: 'Senior Amer consultants verify passport validity, compute remaining grace days, and audit salary and Ejari records to guarantee zero late fines.',
        descAr: 'مراجعة بيانات الجواز وحساب أيام السماح والتأكد من عدم وجود غرامات تأخير أو تعاميم قبل التقديم.',
        durationEn: '15 - 30 Mins',
        durationAr: '15 - 30 دقيقة',
      },
      {
        stepNumber: 2,
        titleEn: 'DHA Medical Test at Karama Medical Center',
        titleAr: 'الفحص الطبي بمركز الكرامة الطبي',
        descEn: 'Urgent phlebotomy and low-dose digital chest X-ray at co-located Karama Medical Fitness Express Service Center (KMFC) with rapid lab clearance.',
        descAr: 'سحب عينة الدم والأشعة الرقمية بمركز الكرامة الطبي (KMFC) في نفس المبنى مع خيارات نتائج سريعة من ساعتين إلى 24 ساعة.',
        durationEn: '2 - 24 Hours',
        durationAr: '2 - 24 ساعة',
      },
      {
        stepNumber: 3,
        titleEn: 'Emirates ID Renewal Lodgement',
        titleAr: 'طباعة وتجديد الهوية الإماراتية',
        descEn: 'Electronic ICP registration and renewal lodgement with updated biometrics data matching official UAE Pass credentials.',
        descAr: 'إرسال طلب التجديد للهيئة الاتحادية إلكترونياً وتحديث البيانات لتتوافق مع حساب الهوية الرقمية.',
        durationEn: '30 Mins',
        durationAr: '30 دقيقة',
      },
      {
        stepNumber: 4,
        titleEn: 'GDRFA Stamping & Emirates ID Dispatch',
        titleAr: 'اعتماد إقامة دبي وتسليم الهوية',
        descEn: 'Immediate electronic residence permit stamping into GDRFA servers and courier dispatch of the new 2 or 3-year physical Emirates ID.',
        descAr: 'تثبيت الإقامة المحدثة رسمياً على نظام إقامة دبي وتوصيل بطاقة الهوية الإماراتية الجديدة لمقر إقامتك.',
        durationEn: '24 Hours',
        durationAr: '24 ساعة',
      },
    ],
    faqs: [
      {
        questionEn: 'How early can I renew my UAE residence visa before it expires?',
        questionAr: 'ما هي المدة التي يمكنني فيها تجديد الإقامة قبل انتهائها؟',
        answerEn: 'You can officially renew your Dubai residency visa up to 6 months before its expiration date without special ministerial permission. Early renewal protects you and your dependents from last-minute travel disruptions.',
        answerAr: 'يمكنك تجديد الإقامة رسمياً حتى 6 أشهر قبل تاريخ انتهائها دون الحاجة لموافقة استثنائية، مما يضمن استمرارية السفر وتفادي أي غرامات.',
      },
      {
        questionEn: 'What is the official grace period after residency visa expiry in Dubai?',
        questionAr: 'كم تبلغ فترة السماح الرسمية بعد انتهاء تأشيرة الإقامة في دبي؟',
        answerEn: 'Under current UAE immigration regulations, standard employment and investor visas enjoy a 30-day grace period from the expiration date during which no fines are levied. If renewed within this window, all penalty fees are zero.',
        answerAr: 'تمنح الإدارة العامة للإقامة وشؤون الأجانب فترة سماح رسمية تبلغ 30 يوماً من تاريخ انتهاء الإقامة، ولا تفرض خلالها أي غرامات تأخير في حال تم التجديد خلال هذه الفترة.',
      },
      {
        questionEn: 'Can I do my medical fitness test at Karama Medical Center (KMFC) for visa renewal?',
        questionAr: 'هل يمكنني إجراء الفحص الطبي بمركز الكرامة الطبي (KMFC) لتجديد الإقامة؟',
        answerEn: 'Yes! The Karama Medical Fitness Express Service Center (KMFC / Karama Medical Center) is located directly inside our building at Karama Business Center. You can complete your blood test and X-ray in minutes.',
        answerAr: 'نعم بالتأكيد! مركز الكرامة للياقة الطبية السريعة (KMFC / مركز الكرامة الطبي) موجود مباشرة داخل مبنى مركز الكرامة للأعمال، ويمكنك إجراء فحص الدم والأشعة في دقائق.',
      },
      {
        questionEn: 'Do I get a physical visa sticker inside my passport?',
        questionAr: 'هل يتم وضع ملصق تأشيرة ورقي في جواز السفر عند التجديد؟',
        answerEn: 'Under the unified UAE residency system, the physical Emirates ID serves as your official legal proof of residence. Your residency permit is linked digitally to your passport and accessible on UAE Pass, though an official digital residency certificate is also issued.',
        answerAr: 'وفقاً للنظام الاتحادي الموحد، تحل بطاقة الهوية الإماراتية محل ملصق الإقامة التقليدي، وترتبط الإقامة رقمياً برقم الجواز ويمكن استعراضها وتحميل شهادتها المعتمدة عبر تطبيق UAE Pass.',
      },
    ],
    reviews: [
      {
        name: 'Rohan Mehra',
        roleEn: 'Commercial Director',
        roleAr: 'مدير تجاري',
        companyEn: 'Mehra General Trading LLC',
        companyAr: 'ميهرا للتجارة العامة',
        rating: 5,
        date: 'October 2026',
        commentEn: 'Renewed my partner visa at Karama Business Center. Dropped in at 8:30 AM, completed the medical at Karama Medical Center on the first floor, and my renewed residence was approved by Amer before lunchtime. Extraordinary speed.',
        commentAr: 'جددت إقامة الشريك في مركز الكرامة للأعمال. وصلت في الثامنة والنصف صباحاً، وأجريت الفحص في مركز الكرامة الطبي بالدور الأول، واعتمدت الإقامة لدى آمر قبل الظهيرة. سرعة استثنائية.',
      },
      {
        name: 'Elena Rostova',
        roleEn: 'Senior Marketing Specialist',
        roleAr: 'أخصائي تسويق أول',
        companyEn: 'Rostova Creative Studio',
        companyAr: 'استوديو روستوفا الإبداعي',
        rating: 5,
        date: 'September 2026',
        commentEn: 'Saved me from paying overstay penalties. The staff at ESS Karama audited my documents, rushed my medical typing, and delivered my Emirates ID to my apartment in Downtown Dubai. Super professional.',
        commentAr: 'أنقذوني من غرامات التأخير؛ حيث قام فريق ESS بالكرامة بتدقيق أوراقي وتنسيق فحصي الطبي المستعجل وتوصيل بطاقة الهوية لبيتي في داون تاون دبي. قمة الاحترافية.',
      },
    ],
    targetKeywords: {
      shortTail: ['Residency Visa Renewal Dubai', 'Renew Visa Dubai', 'Amer Visa Renewal', 'Karama Medical Center Renewal', 'Karama Business Center KBC'],
      longTail: ['How to renew 2 year residency visa Dubai Amer center', 'Cost of Dubai visa renewal at Karama business center', 'Express medical test visa renewal Karama medical center KMFC', 'Grace period rules Dubai residency renewal Amer'],
    },
    featuredFacilityImage: {
      url: smartDeskImage,
      captionEn: 'Smart biometrics and document verification terminal at Karama Business Center (KBC).',
      captionAr: 'منصة التدقيق والتحقق البيومتري الذكية بمركز الكرامة للأعمال.',
      locationBadgeEn: 'Karama Business Center · Al Karama, Next to Post Office, Dubai',
      locationBadgeAr: 'مركز الكرامة للأعمال · الكرامة، بجوار مكتب البريد، دبي',
    },
  },

  // =========================================================================
  // 3. GOLDEN VISA (10-YEAR UAE RESIDENCY)
  // =========================================================================
  'golden-visa-10yr': {
    detailedOverviewEn: `The UAE Golden Visa is a premier 10-year, self-sponsored residency permit established by the United Arab Emirates government to attract and retain global talent, international investors, entrepreneurs, exceptional scientists, senior executives, and outstanding scholars. Administered through the General Directorate of Residency and Foreigners Affairs (GDRFA Dubai) and the Federal Authority for Identity, Citizenship, Customs and Port Security (ICP), the Golden Visa eliminates the need for an Emirati national sponsor or employer, granting foreign nationals complete autonomy over their residency in Dubai.

At Karama Business Center (KBC), operating under authorized Amer Center License #772 and managed by Emirates Secretarial Services (ESS), we provide an exclusive concierge pathway for qualifying, assembling, and submitting Golden Visa applications across all official categories:
1. Real Estate Investors owning properties valued at AED 2,000,000 or more (verified via Dubai Land Department Title Deed, mortgaged properties with bank NOC, or off-plan contracts).
2. Senior Executives and Specialized Professionals earning a basic monthly salary of AED 30,000 or above with an attested Bachelor's degree and MoHRE skill classification level 1 or 2.
3. Entrepreneurs and Business Owners possessing approved startup valuation letters from Dubai SME, approved business incubators, or audited financial balance sheets.
4. Outstanding Creators, Scientists, and Ph.D. Holders endorsed by the Dubai Culture and Arts Authority (DCAA) or the Emirates Scientists Council.

Golden Visa holders enjoy transformative privileges under UAE Federal Law: 100% self-sponsored residency without an employment contract, the unique ability to remain outside the UAE indefinitely without visa invalidation (exempt from the standard 6-month rule), full sponsorship rights for spouses, sons, and unmarried daughters of any age, domestic staff sponsorship with zero quota caps, and extended sponsorship for parents. Our flagship facility in Al Karama (located next to Karama Post Office) houses our private VIP Majlis Lounge and directly operates the Karama Medical Fitness Express Service Center (KMFC) — known locally throughout Dubai as Karama Medical Center. Clients undergo confidential document qualification, express VIP medical screening with 2-hour lab turnaround, and private biometric capture in complete comfort. Official government tariffs are transparent: GDRFA statutory fee is AED 2,800, ESS VIP concierge typing and dossier nomination is AED 1,150, and optional VIP express fast-track is AED 750.`,
    detailedOverviewAr: `تعتبر الإقامة الذهبية لدولة الإمارات العربية المتحدة تأشيرة سيادية حصرية لمدة 10 سنوات ذاتية الكفالة، أطلقتها حكومة الإمارات لاستقطاب واستبقاء المستثمرين الدوليين، ورواد الأعمال، والمديرين التنفيذيين، والعلماء والأطباء، والمواهب الاستثنائية. تمنح الإقامة الذهبية الصادرة عن إقامة دبي (GDRFA) والهيئة الاتحادية (ICP) تملكاً أجنبياً كاملاً بنسبة 100% دون الحاجة لكفيل أو ضامن محلي.

ومن خلال مركز الكرامة للأعمال (KBC) وبترخيص مركز آمر المعتمد رقم 772 تحت إدارة الإمارات لخدمات رجال الأعمال (ESS)، نقدم مساراً مخصصاً لتقييم وتجهيز ورفع ملفات الإقامة الذهبية لكافة الفئات المعتمدة:
1. المستثمرون العقاريون المالكون لعقارات بقيمة 2 مليون درهم فما فوق (وفق صك ملكية معتمد من دائرة الأراضي والأملاك، أو عقارات مرهونة مع عدم ممانعة بنكية، أو مشاريع قيد الإنجاز).
2. المديرون التنفيذيون وأصحاب الكفاءات المهنية براتب شهري لا يقل عن 30,000 درهم مع شهادة جامعية مصدقة ومستوى مهاري أول أو ثاني.
3. رواد الأعمال وأصحاب المشاريع الحاصلين على خطابات اعتماد من مؤسسة محمد بن راشد لتنمية المشاريع الصغيرة والمتوسطة أو حاضنات الأعمال المعتمدة.
4. المبدعون والعلماء وأصحاب الإنجازات الاستثنائية المعتمدون من هيئة دبي للثقافة والفنون أو مجلس علماء الإمارات.

تمنح الإقامة الذهبية مزايا فريدة: الإقامة الذاتية دون عقد عمل، إمكانية البقاء خارج الدولة لأي مدة دون إلغاء الإقامة (إعفاء من شرط الـ 6 أشهر)، كفالة الأسرة والأبناء دون حد أقصى للعمر، وكفالة العمالة المساعدة دون حد أقصى، وكفالة الوالدين لمدة 10 سنوات. ويحتضن مقرنا بالكرامة (بجوار بريد الكرامة) مجلس كبار الشخصيات ومركز الكرامة للياقة الطبية السريعة (KMFC / مركز الكرامة الطبي) لإنجاز الفحص الطبي خلال ساعتين والبصمة في خصوصية تامة. الرسوم الحكومية 2,800 درهم، ورسوم الطباعة وتجهيز الملف 1,150 درهماً.`,
    legalFrameworkEn: `Federal Decree-Law No. 29 of 2021 regarding Foreigners Entry and Residence, UAE Cabinet Decision No. 65 of 2022 (Executive Regulations on Golden Residence), and GDRFA Dubai Golden Residency Directives.`,
    legalFrameworkAr: `المرسوم بقانون اتحادي رقم (29) لسنة 2021، وقرار مجلس الوزراء رقم (65) لسنة 2022 بشأن اللائحة التنفيذية المنظمة للإقامة الذهبية، ولوائح إقامة دبي لفئات الإقامة الذهبية.`,
    eligibilityEn: [
      'Real Estate Investors: Dubai Land Department Title Deed demonstrating property valuation of AED 2,000,000 or greater',
      'Senior Executives: Valid UAE employment contract with basic monthly salary of AED 30,000+, attested Bachelor degree, and 6-month bank statements',
      'Entrepreneurs: Official project approval letter from an accredited UAE business incubator or audited commercial balance sheet',
      'Clear legal status in the UAE with passing DHA residency medical fitness screening at Karama Medical Center',
      'Biometric identity enrollment verified through the Federal ICP portal'
    ],
    eligibilityAr: [
      'المستثمر العقاري: صك ملكية صادر من دائرة الأراضي والأملاك بدبي بقيمة لا تقل عن 2 مليون درهم',
      'المدير التنفيذي: عقد عمل براتب إجمالي 30 ألف درهم فما فوق، ومؤهل جامعي مصدق، وكشف حساب بنكي لـ 6 أشهر',
      'رواد الأعمال: رسالة اعتماد معتمدة للمشروع من حاضنة أعمال أو ميزانية تجارية مدققة',
      'اجتياز الفحص الطبي للياقة الإقامة بمركز الكرامة الطبي (KMFC) وخلو السجل من أي قيود',
      'إتمام إجراءات البصمة البيومترية العشرية لدى الهيئة الاتحادية'
    ],
    galleryImages: [
      {
        url: vipMajlisImage,
        titleEn: 'Private VIP Majlis for Golden Visa Dossiers',
        titleAr: 'مجلس كبار الشخصيات لملفات الإقامة الذهبية',
        captionEn: 'Exclusive hospitality suite where real estate investors and executives complete their 10-year residency application in total privacy.',
        captionAr: 'جناح ضيافة راقٍ يتيح للمستثمرين وكبار التنفيذيين إنجاز إجراءات الإقامة الذهبية في خصوصية تامة.',
      },
      {
        url: heroCenterImage,
        titleEn: 'Authorized Amer Center at Karama Business Center',
        titleAr: 'مركز آمر المعتمد في مركز الكرامة للأعمال',
        captionEn: 'Certified government desks with direct ministerial server API integration for instantaneous Golden Visa nomination submission.',
        captionAr: 'منصات حكومية معتمدة بربط مباشر لخوادم إقامة دبي لرفع ترشيحات الإقامة الذهبية فورياً.',
      },
      {
        url: smartDeskImage,
        titleEn: 'Express Diagnostic Station at Karama Medical Center (KMFC)',
        titleAr: 'محطة الفحص السريع بمركز الكرامة الطبي (KMFC)',
        captionEn: 'VIP blood draw and digital low-dose chest radiography with 2-hour DHA lab certification for Golden Visa applicants.',
        captionAr: 'سحب دم وأشعة صدر رقمية معتمدة من هيئة الصحة بدبي خلال ساعتين للمتقدمين للإقامة الذهبية.',
      },
      {
        url: mobileVanImage,
        titleEn: 'Doorstep Mobile Government Residency Van',
        titleAr: 'حافلة المعاملات الحكومية المتنقلة لباب دارك',
        captionEn: 'Mobile luxury unit dispatched to private residences or corporate towers for Golden Visa biometrics and typing.',
        captionAr: 'حافلة فاخرة متنقلة تصل إلى فيلتك أو برج شركتك لإنجاز معاملات الإقامة الذهبية دون مغادرة موقعك.',
      },
    ],
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'Golden Visa Eligibility Pre-Assessment',
        titleAr: 'التقييم الأولي والترشيح للإقامة الذهبية',
        descEn: 'Confidential review of title deeds, salary slips, or academic degrees by senior legal typists at Karama Business Center to confirm 100% eligibility.',
        descAr: 'تدقيق سري وسريع لصكوك الملكية أو كشوف الرواتب أو الشهادات الجامعية في مركز الكرامة للأعمال لضمان التأهل الكامل.',
        durationEn: '30 Mins',
        durationAr: '30 دقيقة',
      },
      {
        stepNumber: 2,
        titleEn: 'Ministerial Nomination & GDRFA Approval',
        titleAr: 'الترشيح الوزاري وموافقة إقامة دبي',
        descEn: 'Direct lodgement into the official GDRFA Golden Residency gateway. Instant tracking token issued with official government vouchers.',
        descAr: 'رفع طلب الترشيح رسمياً إلى بوابة إقامة دبي وإصدار رقم التتبع اللحظي مع إيصالات السداد الحكومية.',
        durationEn: '24 - 48 Hours',
        durationAr: '24 - 48 ساعة',
      },
      {
        stepNumber: 3,
        titleEn: 'VIP Medical Fitness & Biometric Registration',
        titleAr: 'فحص VIP الطبي بمركز الكرامة وبصمة الهوية',
        descEn: 'Private 2-hour medical fitness testing at Karama Medical Center (KMFC) and on-site ICP biometric fingerprint registration.',
        descAr: 'فحص طبي فائق السرعة خلال ساعتين بمركز الكرامة الطبي (KMFC) والبصمة البيومترية في مجلس كبار الشخصيات.',
        durationEn: '2 Hours',
        durationAr: 'ساعتان',
      },
      {
        stepNumber: 4,
        titleEn: '10-Year Residency Stamping & Family Linking',
        titleAr: 'تثبيت إقامة الـ 10 سنوات وربط الأسرة',
        descEn: 'Issuance of the 10-year Golden Visa on UAE Pass, followed by dispatch of the metallic Emirates ID and unlimited dependent sponsorship.',
        descAr: 'إصدار الإقامة الذهبية لمدة 10 سنوات على UAE Pass وتسليم بطاقة الهوية الإماراتية وكفالة كافة أفراد الأسرة.',
        durationEn: 'Same Day',
        durationAr: 'نفس اليوم',
      },
    ],
    faqs: [
      {
        questionEn: 'Can I get a 10-year Golden Visa if my Dubai property is mortgaged?',
        questionAr: 'هل يمكنني الحصول على الإقامة الذهبية إذا كان عقاري في دبي مرهوناً للبنك؟',
        answerEn: 'Yes. If the total purchase price on the Title Deed is AED 2,000,000 or greater, you qualify even if the property is mortgaged, provided the bank or developer issues an official No Objection Certificate (NOC) and paid equity statement.',
        answerAr: 'نعم بالتأكيد. طالما أن قيمة العقار في صك الملكية تبلغ 2 مليون درهم فما فوق، يمكنك التقديم حتى مع وجود رهن عقاري عبر إحضار شهادة عدم ممانعة (NOC) من البنك الممول توضح المبالغ المسددة.',
      },
      {
        questionEn: 'Can Golden Visa holders stay outside the UAE for more than 6 months?',
        questionAr: 'هل يحق لحاملي الإقامة الذهبية البقاء خارج دولة الإمارات لأكثر من 6 أشهر؟',
        answerEn: 'Yes! Unlike standard residence visas that become invalid if the holder remains outside the UAE for over 180 continuous days, Golden Visa holders are completely exempt and can stay abroad indefinitely without losing their residency.',
        answerAr: 'نعم! بخلاف الإقامات العادية التي تلغى تلقائياً عند البقاء خارج الدولة لأكثر من 180 يوماً متواصلة، يُعفى حامل الإقامة الذهبية وأفراد أسرته تماماً من هذا الشرط ويمكنهم البقاء في الخارج لأي مدة دون إلغاء الإقامة.',
      },
      {
        questionEn: 'Can I sponsor my parents and children of any age under the Golden Visa?',
        questionAr: 'هل يمكنني كفالة الوالدين والأبناء في أي عمر تحت الإقامة الذهبية؟',
        answerEn: 'Yes. Golden Visa sponsors can sponsor their sons and unmarried daughters of any age (no 25-year age limit applies). Parents are granted a matching 10-year residency permit under the Golden Visa humanitarian tier.',
        answerAr: 'نعم. يتيح نظام الإقامة الذهبية كفالة الأبناء والزوجة دون حد أقصى للعمر، كما يحق كفالة الوالدين (الأب والأم) ومنحهما إقامة ذهبية تابعة لمدة 10 سنوات كاملة.',
      },
      {
        questionEn: 'How does the medical fitness test work for Golden Visa applicants at Karama Medical Center?',
        questionAr: 'كيف يتم إجراء الفحص الطبي لمتقدمي الإقامة الذهبية بمركز الكرامة الطبي؟',
        answerEn: 'Golden Visa applicants enjoy priority access to our private VIP Majlis Lounge and Karama Medical Fitness Express Service Center (KMFC / Karama Medical Center). Blood sample collection and digital chest X-rays are completed in 15 minutes, with official DHA results certified in 2 hours.',
        answerAr: 'يحظى متقدمو الإقامة الذهبية بأولوية قصوى بمجلس كبار الشخصيات ومركز الكرامة للياقة الطبية (KMFC / مركز الكرامة الطبي)؛ حيث ينجز سحب الدم والأشعة الرقمية في 15 دقيقة مع صدور النتيجة المعتمدة خلال ساعتين.',
      },
      {
        questionEn: 'What is the total fee for a 10-year Golden Visa in Dubai?',
        questionAr: 'كم تبلغ التكلفة الإجمالية للإقامة الذهبية لمدة 10 سنوات في دبي؟',
        answerEn: 'The official GDRFA government fee is AED 2,800. ESS certified concierge typing, eligibility assembly, and nomination audit is AED 1,150, for an estimated standard total of AED 3,950. Optional VIP express fast-track is available for AED 750.',
        answerAr: 'تبلغ الرسوم الحكومية الرسمية لإقامة دبي 2,800 درهم، ورسوم الطباعة المعتمدة وتجهيز وتدقيق الملف لدى ESS تبلغ 1,150 درهماً، ليكون الإجمالي القياسي 3,950 درهماً، مع توفر خيار المسار الفوري السريع مقابل 750 درهماً.',
      },
    ],
    reviews: [
      {
        name: 'Julian Vance-Moreau',
        roleEn: 'Real Estate Portfolio Investor',
        roleAr: 'مستثمر محافظ عقارية',
        companyEn: 'Vance-Moreau Capital Partners',
        companyAr: 'فانس-مورو كابيتال بارتنرز',
        rating: 5,
        date: 'October 2026',
        commentEn: 'Secured my 10-year Golden Visa through Karama Business Center. The team vetted my Palm Jumeirah title deeds in minutes, escorted me to Karama Medical Center (KMFC) for the VIP 2-hour medical, and my digital Golden Visa was live on UAE Pass the very next afternoon. Unrivalled luxury service.',
        commentAr: 'حصلت على إقامتي الذهبية لمدة 10 سنوات عبر مركز الكرامة للأعمال. قام الفريق بتدقيق صكوك ملكية عقاري في نخلة جميرا في دقائق، ورافقوني لمركز الكرامة الطبي (KMFC) لإجراء الفحص الطبي السريع، وصدرت إقامتي الذهبية في اليوم التالي. خدمة ممتازة.',
      },
      {
        name: 'Dr. Mariam Al-Qasimi',
        roleEn: 'Chief Medical Officer',
        roleAr: 'المدير الطبي التنفيذي',
        companyEn: 'Gulf Specialized Healthcare Group',
        companyAr: 'مجموعة الخليج للرعاية التخصصية',
        rating: 5,
        date: 'September 2026',
        commentEn: 'Applied under the Senior Executive category with my attested university credentials. Emirates Secretarial Services (ESS) managed the entire nomination process flawlessly. Total transparent government billing and supreme professionalism.',
        commentAr: 'تقدمت للإقامة الذهبية بفئة المديرين التنفيذيين بمؤهلي الجامعي المصدق. تولت الإمارات لخدمات رجال الأعمال (ESS) المعاملة بالكامل دون أي تعقيد وبفواتير حكومية واضحة.',
      },
    ],
    targetKeywords: {
      shortTail: ['Golden Visa Dubai', '10 Year Visa UAE', 'Amer Golden Visa', 'Karama Medical Center Golden Visa', 'Karama Business Center KBC'],
      longTail: ['How to apply for 10 year Golden Visa Dubai Amer center', 'Golden visa real estate 2 million requirements Karama', 'Executive golden visa salary 30000 Karama business center', 'VIP medical fitness test for golden visa Karama medical center KMFC'],
    },
    featuredFacilityImage: {
      url: vipMajlisImage,
      captionEn: 'Executive VIP Majlis at Karama Business Center (KBC) dedicated to Golden Visa investors and corporate executives.',
      captionAr: 'مجلس كبار الشخصيات الفاخر بمركز الكرامة للأعمال المخصص لمستثمري الإقامة الذهبية وكبار المديرين.',
      locationBadgeEn: 'Karama Business Center · Al Karama, Next to Post Office, Dubai',
      locationBadgeAr: 'مركز الكرامة للأعمال · الكرامة، بجوار مكتب البريد، دبي',
    },
  },

  // =========================================================================
  // 4. FAMILY SPONSORSHIP VISA (Spouse & Children)
  // =========================================================================
  'amer-family-sponsorship-visa': {
    detailedOverviewEn: `Sponsoring your family members — including your wife, husband, newborn infants, and dependent children — is a cornerstone residency service governed by the General Directorate of Residency and Foreigners Affairs (GDRFA Dubai). At Karama Business Center (KBC), operating under authorized Amer Center License #772 and managed by Emirates Secretarial Services (ESS), we provide an all-inclusive family unification program designed to eliminate bureaucratic delays and bring your loved ones together under Dubai residency.

Our state-of-the-art facility in Al Karama (conveniently located next to Karama Post Office) houses an integrated government campus: Amer Center visa typing desks, our in-house sworn legal translation and MOFA attestation department, the Karama Medical Fitness Express Service Center (KMFC / Karama Medical Center), and ICP biometric stations. This means you do not have to drive your family between distant clinics and government buildings. We audit your attested marriage certificate, certified birth certificates, Ejari tenancy agreement, and salary certificate in one appointment, issue the ministerial entry permit, arrange express DHA medical fitness screening for your spouse, and register Emirates ID fingerprints on the spot.

Male or female residents with a minimum monthly salary of AED 4,000 (or AED 3,000 plus employer-provided housing) are legally entitled to sponsor their spouse and unmarried children up to age 25 (with no age limitation for unmarried daughters or children of determination). Full transparency governs our fee structure: the comprehensive in-country family sponsorship package is AED 2,842 (including entry permit, status change, DHA medical test, Emirates ID, and visa stamping), with an ESS typing fee of AED 386. VIP fast-track scheduling is available to protect pregnant mothers, elderly parents, and young children from crowded queues.`,
    detailedOverviewAr: `تعتبر كفالة واستقدام أفراد الأسرة — الزوجة، الزوج، والأبناء — خدمة مجتمعية وسيادية كبرى تشرف عليها الإدارة العامة للإقامة وشؤون الأجانب بدبي (GDRFA). ومن خلال مركز الكرامة للأعمال (KBC) بترخيص مركز آمر المعتمد رقم 772 وبإدارة الإمارات لخدمات رجال الأعمال (ESS)، نقدم منظومة شاملة لجمع شمل الأسرة وتثبيت إقامات الزوجة والأولاد بكل سهولة ويسر.

يتميز مركزنا في الكرامة (بجوار بريد الكرامة) ببيئة خدمية متكاملة تضم مكاتب آمر، ومكتب الترجمة القانونية وتصديقات الخارجية، ومركز الكرامة للياقة الطبية السريعة (KMFC / مركز الكرامة الطبي)، ومحطات البصمة البيومترية. يوفر هذا التكامل على العائلات عناء التنقل؛ حيث نقوم بتدقيق عقود الزواج وشهادات الميلاد وعقد إيجاري السكني وإصدار إذن الدخول، وتنسيق الفحص الطبي للزوجة وبصمة الهوية في نفس الزيارة.

يحق للمقيم (ذكراً أو أنثى) كفالة أسرته براتب شهري لا يقل عن 4,000 درهم (أو 3,000 درهم مع توفير السكن)، وكفالة الأبناء الذكور حتى سن 25 عاماً والبنات غير المتزوجات دون حد أقصى للعمر. تبلغ تكلفة الباقة الكاملة للداخل 2,842 درهماً ورسوم الطباعة 386 درهماً، مع توفر مسار VIP فائق السرعة للعائلات وكبار السن.`,
    legalFrameworkEn: `Federal Decree-Law No. 29 of 2021 on Foreigners Entry and Residence, UAE Cabinet Decision No. 65 of 2022, and GDRFA Dubai Family Sponsorship Executive Directives.`,
    legalFrameworkAr: `المرسوم بقانون اتحادي رقم (29) لسنة 2021، وقرار مجلس الوزراء رقم (65) لسنة 2022، واللوائح التنفيذية الصادرة عن إقامة دبي بشأن كفالة واستقدام أفراد الأسرة.`,
    eligibilityEn: [
      'Sponsor minimum monthly salary of AED 4,000 or AED 3,000 plus company accommodation',
      'Original attested marriage certificate legally translated into Arabic (for spouse sponsorship)',
      'Original attested birth certificates for children legally translated into Arabic',
      'Registered Ejari tenancy contract with recent DEWA electricity bill demonstrating adequate family housing',
      'Passing DHA medical fitness screening at Karama Medical Center (for dependents aged 18 and older)'
    ],
    eligibilityAr: [
      'راتب شهري للكفيل لا يقل عن 4,000 درهم أو 3,000 درهم مع توفير السكن من جهة العمل',
      'عقد زواج رسمي مصدق حسب الأصول ومترجم للغة العربية (لكفالة الزوجة)',
      'شهادات ميلاد الأبناء مصدقة ومترجمة رسمياً للغة العربية',
      'عقد إيجاري سكني مصدق باسم الكفيل وفاتورة كهرباء ديوا حديثة تثبت السكن المناسب',
      'اجتياز الفحص الطبي بمركز الكرامة الطبي (للمكفولين البالغين 18 عاماً فأكثر)'
    ],
    galleryImages: COMMON_GALLERY,
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'Family Document & Attestation Review',
        titleAr: 'تدقيق وثائق الأسرة والتصديقات',
        descEn: 'Senior Amer typists inspect marriage contracts, birth certificates, and salary proofs at Karama Business Center to verify MOFA attestations.',
        descAr: 'مراجعة وتدقيق عقود الزواج وشهادات الميلاد وعقد إيجاري والتصديقات في مركز الكرامة للأعمال لضمان جاهزية الملف.',
        durationEn: '30 Mins',
        durationAr: '30 دقيقة',
      },
      {
        stepNumber: 2,
        titleEn: 'Family Entry Permit & Status Change',
        titleAr: 'إصدار إذن الدخول وتعديل الوضع',
        descEn: 'Instant electronic generation of GDRFA family residence entry permit and in-country status change token.',
        descAr: 'إصدار إذن استقدام الأسرة وتعديل الوضع داخل الدولة إلكترونياً مع إيصالات السداد الحكومية الرسمية.',
        durationEn: '2 - 4 Hours',
        durationAr: '2 - 4 ساعات',
      },
      {
        stepNumber: 3,
        titleEn: 'Medical Fitness at Karama Medical Center',
        titleAr: 'فحص اللياقة الطبية بمركز الكرامة الطبي',
        descEn: 'Gentle blood collection and low-dose digital chest X-ray for adult dependents at Karama Medical Fitness Express Service Center (KMFC).',
        descAr: 'فحص طبي مريح للزوجة والأبناء البالغين بمركز الكرامة للياقة الطبية السريعة (KMFC) مع رعاية خاصة للأمهات.',
        durationEn: '2 - 24 Hours',
        durationAr: '2 - 24 ساعة',
      },
      {
        stepNumber: 4,
        titleEn: 'Biometrics & 2-Year Residency Approval',
        titleAr: 'البصمة واعتماد الإقامة لمدة سنتين',
        descEn: 'ICP biometric fingerprint capture on-site, followed by electronic residence approval on UAE Pass and Emirates ID home delivery.',
        descAr: 'التقاط بصمة الهوية بالمركز وتثبيت الإقامة الرقمية للأسرة على تطبيق UAE Pass وتوصيل بطاقات الهوية لمنزلك.',
        durationEn: '24 Hours',
        durationAr: '24 ساعة',
      },
    ],
    faqs: [
      {
        questionEn: 'Can a female resident sponsor her husband and children in Dubai?',
        questionAr: 'هل يحق للمرأة المقيمة كفالة زوجها وأبنائها في دبي؟',
        answerEn: 'Yes! Under UAE residency regulations, a woman holding a valid residence visa can sponsor her husband and children if she earns a monthly salary of AED 4,000 (or AED 3,000 with accommodation) or holds a professional designation.',
        answerAr: 'نعم بالتأكيد! وفقاً للقوانين الحالية بدولة الإمارات، يحق للمرأة المقيمة كفالة زوجها وأبنائها إذا كان راتبها الشهري 4,000 درهم (أو 3,000 درهم مع السكن) أو كانت تشغل مهنة تخصصية.',
      },
      {
        questionEn: 'Up to what age can I sponsor my children under a family visa?',
        questionAr: 'ما هو الحد الأقصى لعمر الأبناء في كفالة الأسرة؟',
        answerEn: 'Male children can be sponsored up to 25 years of age (previously 18). Unmarried female daughters can be sponsored indefinitely with no age limitation. Children of determination can also be sponsored without any age restriction.',
        answerAr: 'يمكن كفالة الأبناء الذكور حتى سن 25 عاماً، بينما يمكن كفالة البنات غير المتزوجات دون حد أقصى للعمر، وكذلك أصحاب الهمم دون أي قيد عمري.',
      },
      {
        questionEn: 'What if my marriage certificate is not yet attested by MOFA?',
        questionAr: 'ماذا أفعل إذا لم يكن عقد الزواج مصدقاً من وزارة الخارجية؟',
        answerEn: 'Our facility at Karama Business Center houses a certified legal translation and MOFA attestation liaison desk. We can legalize foreign certificates and provide sworn Arabic translations without requiring you to visit external ministries.',
        answerAr: 'يضم مركز الكرامة للأعمال مكتب ترجمة قانونية وتصديقات رسمية معتمدة؛ حيث يمكننا استكمال تصديق الشهادات الأجنبية لدى وزارة الخارجية وترجمتها محلفاً في نفس المقر.',
      },
    ],
    reviews: [
      {
        name: 'Tariq & Reem Mansour',
        roleEn: 'Civil Engineer & Architect',
        roleAr: 'مهندس مدني ومعمارية',
        companyEn: 'Mansour Engineering Consultancy',
        companyAr: 'منصور للاستشارات الهندسية',
        rating: 5,
        date: 'October 2026',
        commentEn: 'Sponsored my wife and two-year-old daughter at Karama Business Center. The staff verified our marriage certificate, typed the Amer entry permits, and conducted my wife\'s medical at Karama Medical Center (KMFC) in the same building. Stress-free family experience.',
        commentAr: 'قمت بكفالة زوجتي وابنتي البالغة سنتين في مركز الكرامة للأعمال. قام الموظفون بتدقيق الأوراق وطباعة أذونات آمر، وإجراء فحص زوجتي الطبي بمركز الكرامة الطبي (KMFC) في نفس المبنى دون أي تعب.',
      },
      {
        name: 'Sunil Krishnan',
        roleEn: 'Senior IT Consultant',
        roleAr: 'استشاري تقنية معلومات أول',
        companyEn: 'CloudScale Technologies',
        companyAr: 'كلاود سكيل للتقنية',
        rating: 5,
        date: 'September 2026',
        commentEn: 'Top-tier customer happiness center. The dedicated officer kept me updated on WhatsApp and our family visas were approved within 36 hours. Highly recommended.',
        commentAr: 'مركز سعادة متعاملين حقيقي من الطراز الأول. أطلعني الموظف على كافة التفاصيل عبر الواتساب واعتمدت إقامات عائلتي خلال 36 ساعة فقط.',
      },
    ],
    targetKeywords: {
      shortTail: ['Family Visa Dubai', 'Sponsor Wife Dubai', 'Amer Family Visa', 'Karama Medical Center Family Test', 'Karama Business Center KBC'],
      longTail: ['How to sponsor wife and children Dubai Amer center', 'Documents required for family visa Dubai Karama business center', 'Express family medical fitness Karama medical center KMFC', 'Cost of Dubai family visa inside country package Amer'],
    },
    featuredFacilityImage: {
      url: heroCenterImage,
      captionEn: 'Family service counters at Karama Business Center (KBC) with dedicated private consultation desks.',
      captionAr: 'منصات خدمة الأسرة بمركز الكرامة للأعمال المزودة بمكاتب استشارة خاصة.',
      locationBadgeEn: 'Karama Business Center · Al Karama, Next to Post Office, Dubai',
      locationBadgeAr: 'مركز الكرامة للأعمال · الكرامة، بجوار مكتب البريد، دبي',
    },
  },

  // =========================================================================
  // 5. PARENTS SPONSORSHIP VISA (1-Year & 10-Year)
  // =========================================================================
  'amer-parents-sponsorship-visa': {
    detailedOverviewEn: `Bringing your parents (mother and father) to live with you in Dubai is a humanitarian residency privilege governed by the General Directorate of Residency and Foreigners Affairs (GDRFA Dubai). At Karama Business Center (KBC), operating under authorized Amer Center License #772 and managed by Emirates Secretarial Services (ESS), we handle parents sponsorship dossiers with the highest level of care, legal precision, and compassion.

Under UAE immigration regulations, expatriate residents earning a minimum monthly salary of AED 20,000 (or holding an active UAE Golden Visa) are legally entitled to sponsor both parents. Standard humanitarian guidelines require sponsoring both parents together, unless official death certificates, divorce decrees, or medical dependency affidavits prove that one parent is deceased, legally separated, or unable to travel. Sponsoring a single parent requires special legal petitioning and humanitarian committee approval, which our senior immigration specialists at Karama Business Center prepare and submit directly.

Our integrated facility in Al Karama (located next to Karama Post Office) coordinates the entire humanitarian file under one roof. We draft the official Arabic dependency undertaking, audit your Ejari tenancy contract (which must demonstrate a minimum two-bedroom residence for adequate parental accommodation), arrange the refundable government financial guarantee deposit, and coordinate certified basic or enhanced medical insurance. Furthermore, adult parents complete their mandatory residency medical fitness test at our on-site Karama Medical Fitness Express Service Center (KMFC / Karama Medical Center), where our gentle medical team accommodates elderly applicants with wheelchair assistance and private VIP blood draw suites. For Golden Visa sponsors, parents are granted a matching 10-year residency permit with zero security deposit requirement.`,
    detailedOverviewAr: `تعتبر كفالة واستقدام الوالدين (الأب والأم) للعيش في دبي بادرة إنسانية واجتماعية رفيعة تنظمها الإدارة العامة للإقامة وشؤون الأجانب بدبي (GDRFA). ومن خلال مركز الكرامة للأعمال (KBC) وبترخيص مركز آمر المعتمد رقم 772 تحت إدارة الإمارات لخدمات رجال الأعمال (ESS)، نتولى ملفات كفالة الوالدين بعناية قانونية وإنسانية فائقة.

يشترط القانون الاتحادي ألا يقل راتب المقيم عن 20,000 درهم شهرياً (أو أن يكون حاملاً للإقامة الذهبية)، مع استقدام كلا الوالدين معاً ما لم تكن هناك أسباب قاهرة وموثقة تثبت وفاة أحدهما أو وقوع الطلاق أو وجود عجز صحي، وهي الحالات التي يقوم مستشارونا بصياغة استرحاماتها ورفعها للجنة الإنسانية المختصة.

يتميز مركزنا في الكرامة (بجوار بريد الكرامة) بتوفير حل شامل؛ حيث نصيغ إقرارات الإعالة الرسمية، وندقق عقد إيجاري السكني (غرفتين وصالة كحد أدنى)، ونودع الضمان المالي المسترد، وننسق وثيقة التأمين الصحي المعتمدة. كما ينجز الوالدان الفحص الطبي للإقامة في مركز الكرامة للياقة الطبية السريعة (KMFC / مركز الكرامة الطبي) الموجود في نفس المبنى، مع توفير الكراسي المتحركة والضيافة الخاصة لكبار السن. وإذا كان الكفيل حاملاً للإقامة الذهبية، يمنح الوالدان إقامة مطابقة لمدة 10 سنوات دون أي ضمان مالي.`,
    legalFrameworkEn: `Federal Decree-Law No. 29 of 2021 regarding Foreigners Entry and Residence, UAE Cabinet Decision No. 65 of 2022, and GDRFA Dubai Humanitarian & Parents Residence Regulations.`,
    legalFrameworkAr: `المرسوم بقانون اتحادي رقم (29) لسنة 2021، وقرار مجلس الوزراء رقم (65) لسنة 2022، واللوائح التنفيذية لإقامة دبي بشأن كفالة واستقدام الوالدين الإنسانية.`,
    eligibilityEn: [
      'Sponsor minimum monthly salary of AED 20,000 or holding an active UAE Golden Visa',
      'Attested birth certificate of the sponsor legally proving relationship with parents (translated into Arabic)',
      'Ejari tenancy contract demonstrating minimum 2-bedroom apartment with recent DEWA bill',
      'Proof of dependency / affidavit showing sponsor is sole breadwinner if applying for single parent',
      'Comprehensive basic health insurance policy and refundable government guarantee deposit (exempt for Golden Visa)'
    ],
    eligibilityAr: [
      'راتب شهري للكفيل لا يقل عن 20,000 درهم أو أن يكون الكفيل حاملاً للإقامة الذهبية',
      'شهادة ميلاد الكفيل الأصلية مصدقة ومترجمة رسمياً لإثبات صلة القرابة بالوالدين',
      'عقد إيجاري سكني لشقة غرفتين وصالة على الأقل مع فاتورة ديوا حديثة',
      'إقرار إعالة مصدق يثبت أن الكفيل هو المعيل الوحيد في حال التقديم لأحد الوالدين منفرداً',
      'وثيقة تأمين صحي معتمدة وإيداع الضمان المالي المسترد (يُعفى منها حاملو الإقامة الذهبية)'
    ],
    galleryImages: COMMON_GALLERY,
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'Humanitarian Dossier & Ejari Verification',
        titleAr: 'تدقيق الملف الإنساني وعقد إيجاري',
        descEn: 'Inspection of salary certificates, 2-bedroom Ejari contracts, and kinship proofs by senior Amer typists at Karama Business Center.',
        descAr: 'مراجعة شهادة الراتب وعقد إيجاري الشقة وإثباتات صلة القرابة لضمان مطابقتها للاشتراطات الإنسانية.',
        durationEn: '30 Mins',
        durationAr: '30 دقيقة',
      },
      {
        stepNumber: 2,
        titleEn: 'GDRFA Parents Entry Permit Issuance',
        titleAr: 'إصدار إذن دخول الوالدين من إقامة دبي',
        descEn: 'Electronic submission into the GDRFA humanitarian portal, refundable deposit registration, and instant entry permit voucher issuance.',
        descAr: 'تقديم الطلب عبر البوابة الإنسانية وإيداع الضمان المالي وإصدار إذن الدخول الرسمي.',
        durationEn: '2 - 3 Days',
        durationAr: '2 - 3 أيام',
      },
      {
        stepNumber: 3,
        titleEn: 'Senior Medical Fitness at Karama Medical Center',
        titleAr: 'الفحص الطبي لكبار السن بمركز الكرامة الطبي',
        descEn: 'Comfortable blood test and low-dose digital chest X-ray at Karama Medical Fitness Express Service Center (KMFC) with wheelchair care.',
        descAr: 'فحص مريح لكبار السن بمركز الكرامة للياقة الطبية (KMFC / مركز الكرامة الطبي) مع خدمة الكراسي المتحركة وسحب الدم في خصوصية.',
        durationEn: '2 - 24 Hours',
        durationAr: '2 - 24 ساعة',
      },
      {
        stepNumber: 4,
        titleEn: 'Insurance Activation & Residency Stamping',
        titleAr: 'تفعيل التأمين الصحي وتثبيت الإقامة',
        descEn: 'Mandatory health insurance linkage, ICP biometrics completion, and digital residency permit generation for 1 year (or 10 years for Golden Visa).',
        descAr: 'ربط وثيقة التأمين الصحي المعتمدة وإنجاز البصمة وتثبيت الإقامة لسنة (أو 10 سنوات لحاملي الإقامة الذهبية).',
        durationEn: '24 Hours',
        durationAr: '24 ساعة',
      },
    ],
    faqs: [
      {
        questionEn: 'Can I sponsor only my mother or only my father in Dubai?',
        questionAr: 'هل يمكنني كفالة أمي فقط أو أبي فقط في دبي؟',
        answerEn: 'As a general rule, GDRFA requires both parents to be sponsored together. However, if one parent is deceased (with an attested death certificate) or divorced (with an attested divorce decree and dependency affidavit), our team can petition for single-parent approval.',
        answerAr: 'القاعدة العامة تستلزم كفالة الوالدين معاً، ولكن في حال وفاة أحدهما (مع إحضار شهادة وفاة مصدقة) أو وقوع طلاق (مع إحضار صك طلاق وإقرار إعالة)، يمكن لخبرائنا رفع طلب الاستثناء واعتماده رسمياً.',
      },
      {
        questionEn: 'Do Golden Visa holders get a 10-year residency for their parents?',
        questionAr: 'هل يمنح حاملو الإقامة الذهبية إقامة لمدة 10 سنوات لوالديهم؟',
        answerEn: 'Yes! Under UAE Golden Visa regulations, Golden Visa holders can sponsor both parents for a matching 10-year Golden Residency without the mandatory refundable security deposit required under standard visas.',
        answerAr: 'نعم! يمنح حاملو الإقامة الذهبية الحق في كفالة والديهم لمدة 10 سنوات مطابقة، مع إعفائهم تماماً من الضمان المالي المسترد المفروض على الإقامات الاعتيادية.',
      },
      {
        questionEn: 'How are elderly parents accommodated for medical fitness at Karama Medical Center?',
        questionAr: 'كيف تتم رعاية الوالدين وكبار السن أثناء الفحص الطبي بمركز الكرامة الطبي؟',
        answerEn: 'At KMFC (Karama Medical Center) inside Karama Business Center, we provide wheelchair assistance, priority queues, and dedicated phlebotomists who take blood samples gently in private VIP suites.',
        answerAr: 'نوفر في مركز الكرامة الطبي (KMFC) داخل مركز الكرامة للأعمال كراسي متحركة، ومسارات أولوية دون انتظار، وكوادر تمريضية مدربة لسحب الدم بكل رفق في أجنحة VIP خاصة.',
      },
    ],
    reviews: [
      {
        name: 'Dr. Sameer Al-Khatib',
        roleEn: 'Specialist Physician',
        roleAr: 'طبيب اختصاصي',
        companyEn: 'Emirates Health Services',
        companyAr: 'مؤسسة الإمارات للخدمات الصحية',
        rating: 5,
        date: 'October 2026',
        commentEn: 'Sponsored my elderly parents from Jordan. Karama Business Center handled the humanitarian file with incredible compassion. The medical team at Karama Medical Center took blood samples in the VIP lounge so my mother did not have to stand. Exemplary government service.',
        commentAr: 'قمت باستقدام والديّ من الأردن. تعامل مركز الكرامة للأعمال مع الملف الإنساني بأعلى درجات الرقي، وقام طاقم مركز الكرامة الطبي بسحب العينة في صالة VIP لتجنيب والدتي مشقة الوقوف. قمة الإنسانية.',
      },
      {
        name: 'Pooja Agarwal',
        roleEn: 'VP of Human Resources',
        roleAr: 'نائب رئيس الموارد البشرية',
        companyEn: 'Sterling Global Holdings',
        companyAr: 'ستيرلينغ القابضة',
        rating: 5,
        date: 'September 2026',
        commentEn: 'As a Golden Visa holder, I sponsored my parents for the 10-year dependent visa. ESS handled the entire dossier with zero deposit and total transparency. Outstanding experience.',
        commentAr: 'بصفتي حاملة للإقامة الذهبية، كفلت والديّ لمدة 10 سنوات. أنجزت ESS الإجراءات بدون ضمان مالي وبوضوح تام وسرعة مبهرة.',
      },
    ],
    targetKeywords: {
      shortTail: ['Parents Visa Dubai', 'Sponsor Parents UAE', 'Amer Parents Visa', 'Karama Medical Center Elderly Test', 'Karama Business Center KBC'],
      longTail: ['How to sponsor parents in Dubai salary 20000 Amer center', 'Documents required for parents visa Dubai Karama business center', '10 year golden visa parents sponsorship Karama medical center', 'Humanitarian single parent visa petition Dubai Amer'],
    },
    featuredFacilityImage: {
      url: vipMajlisImage,
      captionEn: 'Private VIP consultation majlis at Karama Business Center (KBC) offering comfortable arrangements for elderly parents.',
      captionAr: 'مجلس كبار الشخصيات بمركز الكرامة للأعمال المجهز لاستقبال كبار السن وعائلاتهم براحة تامة.',
      locationBadgeEn: 'Karama Business Center · Al Karama, Next to Post Office, Dubai',
      locationBadgeAr: 'مركز الكرامة للأعمال · الكرامة، بجوار مكتب البريد، دبي',
    },
  },

  // =========================================================================
  // 6. TOURIST & VISIT VISA EXTENSION (30 / 60 Days)
  // =========================================================================
  'amer-tourist-visit-visa': {
    detailedOverviewEn: `Extending your tourist, visit, or transit visa in Dubai is a crucial immigration procedure governed by the General Directorate of Residency and Foreigners Affairs (GDRFA Dubai). At Karama Business Center (KBC), operating under authorized Amer Center License #772 and managed by Emirates Secretarial Services (ESS), we provide an instant in-country visa extension service for international visitors, business tourists, and family guests without requiring cross-border travel or airport runs.

Under current UAE immigration guidelines, visitors entering Dubai on 30-day or 60-day tourist visas are eligible to extend their legal stay for an additional 30 days twice, granting up to 120 continuous days of legal exploration in Dubai. The extension must be initiated before the official expiration date printed on the entry visa sticker to avoid the statutory daily overstay fine of AED 50 per day plus administrative departure processing charges.

Our authorized Amer desk at Karama Business Center (located in Al Karama, next to Karama Post Office) connects directly with GDRFA immigration servers. Extensions are processed electronically within 15 to 45 minutes using only your passport copy and existing e-Visa reference number. Furthermore, for tourists who secure employment or invest in local enterprises during their visit, our integrated campus houses both the Karama Medical Fitness Express Service Center (KMFC / Karama Medical Center) and ICP biometrics desks. This allows you to convert directly from a tourist visa to a permanent UAE residency permit via an in-country status change without booking flights or leaving Dubai.`,
    detailedOverviewAr: `يعد تمديد تأشيرات الزيارة والسياحة في دبي إجراءً ضرورياً تشرف عليه الإدارة العامة للإقامة وشؤون الأجانب بدبي (GDRFA). ومن خلال مركز الكرامة للأعمال (KBC) وبترخيص مركز آمر المعتمد رقم 772 تحت إدارة الإمارات لخدمات رجال الأعمال (ESS)، نوفر خدمة التمديد الفوري لتأشيرات السياحة والزيارة داخل الدولة دون الحاجة للمغادرة أو السفر عبر المنافذ الحدودية.

تتيح القوانين الحالية لزوار دبي الحاملين لتأشيرات سياحية لمدة 30 أو 60 يوماً تمديد إقامتهم القانونية لمدة 30 يوماً إضافية مرتين، بإجمالي يصل إلى 120 يوماً متواصلة. ويتعين البدء في إجراءات التمديد قبل انتهاء صلاحية التأشيرة لتفادي غرامات البقاء غير القانوني (50 درهماً يومياً بالإضافة للرسوم الإدارية).

يرتبط مكتب آمر بمركز الكرامة للأعمال (الكرامة، بجوار بريد الكرامة) مباشرة بخوادم إقامة دبي، وتُنجز المعاملة في غضون 15 إلى 45 دقيقة باستخدام صورة الجواز ورقم التأشيرة الحالية فقط. كما يتيح مقرنا المتكامل — الذي يضم مركز الكرامة للياقة الطبية السريعة (KMFC / مركز الكرامة الطبي) ومكاتب الهوية — تحويل التأشيرة السياحية مباشرة إلى إقامة عمل أو استثمار دائمة داخل الدولة دون مغادرة دبي.`,
    legalFrameworkEn: `Federal Decree-Law No. 29 of 2021 regarding Foreigners Entry and Residence, UAE Cabinet Decision No. 65 of 2022, and GDRFA Dubai Tourist Visa Extension Regulations.`,
    legalFrameworkAr: `المرسوم بقانون اتحادي رقم (29) لسنة 2021، وقرار مجلس الوزراء رقم (65) لسنة 2022، واللوائح التنفيذية الصادرة عن إقامة دبي بشأن تمديد تأشيرات السياحة والزيارة.`,
    eligibilityEn: [
      'Original visitor passport copy with at least 6 months remaining validity',
      'Active UAE tourist or visit visa issued through GDRFA Dubai or ICP channels',
      'Submission before the expiration of the current visa or within the active validity window',
      'Clear immigration record without active deportation circulars or absconding alerts'
    ],
    eligibilityAr: [
      'نسخة جواز سفر الزائر بصلاحية لا تقل عن 6 أشهر',
      'تأشيرة سياحة أو زيارة سارية المفعول صادرة عبر إقامة دبي أو الهيئة الاتحادية',
      'التقديم قبل تاريخ انتهاء التأشيرة الحالية لتفادي احتساب الغرامات اليومية',
      'خلو السجل الأمني للزائر من أي تعاميم أو بلاغات منع سفر'
    ],
    galleryImages: COMMON_GALLERY,
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'Visa Validity Check & Fine Audit',
        titleAr: 'فحص صلاحية التأشيرة والغرامات',
        descEn: 'Instant electronic query on GDRFA servers to confirm remaining valid days and ensure zero accumulated overstay fines.',
        descAr: 'استعلام إلكتروني فوري عبر خوادم إقامة دبي للتحقق من تاريخ الانتهاء والتأكد من خلو الملف من الغرامات.',
        durationEn: '5 Mins',
        durationAr: '5 دقائق',
      },
      {
        stepNumber: 2,
        titleEn: '30-Day Extension Lodgement',
        titleAr: 'إرسال طلب التمديد لـ 30 يوماً',
        descEn: 'Official submission into the Amer system with immediate ministerial fee payment settlement.',
        descAr: 'تسجيل طلب التمديد الرسمي في نظام آمر وسداد الرسوم الحكومية الرسمية فورياً.',
        durationEn: '10 Mins',
        durationAr: '10 دقائق',
      },
      {
        stepNumber: 3,
        titleEn: 'GDRFA Electronic Approval',
        titleAr: 'اعتماد إقامة دبي الإلكتروني',
        descEn: 'Instantaneous ministerial validation and generation of the official updated e-Visa extension document.',
        descAr: 'اعتماد المعاملة من خوادم إقامة دبي وإصدار وثيقة التأشيرة الإلكترونية المحدثة بتاريخ الانتهاء الجديد.',
        durationEn: '15 - 30 Mins',
        durationAr: '15 - 30 دقيقة',
      },
      {
        stepNumber: 4,
        titleEn: 'Digital Delivery & Conversion Guidance',
        titleAr: 'تسليم التأشيرة واستشارة الإقامة الدائمة',
        descEn: 'Delivery of approved e-Visa via WhatsApp and email, with free consultation if transitioning to permanent residency.',
        descAr: 'إرسال وثيقة التأشيرة المحدثة عبر الواتساب والبريد الإلكتروني وتقديم استشارة مجانية لمن يرغب في تثبيت إقامة دائمة.',
        durationEn: 'Instant',
        durationAr: 'فوري',
      },
    ],
    faqs: [
      {
        questionEn: 'How many times can I extend my tourist visa inside the UAE without exiting?',
        questionAr: 'كم مرة يمكنني تمديد تأشيرة السياحة داخل الدولة دون مغادرة؟',
        answerEn: 'Visitors can officially extend their 30-day or 60-day tourist visa for an additional 30 days twice (for a total of 60 days of extension), without leaving the country or doing airport runs.',
        answerAr: 'يمكن للزائر تمديد تأشيرته السياحية لمدة 30 يوماً مرتين متتاليتين (بإجمالي 60 يوماً تمديد) دون الحاجة لمغادرة الدولة أو السفر للمنافذ.',
      },
      {
        questionEn: 'What happens if my tourist visa has already expired?',
        questionAr: 'ماذا يحدث إذا كانت تأشيرتي السياحية قد انتهت بالفعل؟',
        answerEn: 'Overstaying carries a statutory fine of AED 50 per day. At Karama Business Center, we can clear accumulated fines, submit legal settlement petitions, and simultaneously process your extension or residency conversion.',
        answerAr: 'تفرض غرامة تأخير قدرها 50 درهماً عن كل يوم. ويمكننا في مركز الكرامة للأعمال تسوية وسداد الغرامات المتراكمة وإنجاز التمديد أو تعديل الوضع للإقامة فوراً.',
      },
      {
        questionEn: 'Can I change from a tourist visa to a work visa at Karama Business Center?',
        questionAr: 'هل يمكنني التحويل من تأشيرة سياحة إلى تأشيرة عمل في مركز الكرامة للأعمال؟',
        answerEn: 'Yes! We handle the entire conversion under one roof: MoHRE work permit issuance, in-country status change, medical fitness screening at Karama Medical Center (KMFC), and Emirates ID fingerprint capture.',
        answerAr: 'نعم بالتأكيد! ننجز التحويل كاملاً تحت سقف واحد: تصريح عمل تسهيل، تعديل الوضع، الفحص الطبي بمركز الكرامة الطبي (KMFC)، وبصمة الهوية.',
      },
    ],
    reviews: [
      {
        name: 'Marcus Sterling',
        roleEn: 'Independent Tech Consultant',
        roleAr: 'استشاري تقني مستقل',
        companyEn: 'Digital Nomad Global',
        companyAr: 'ديجيتال نوماد العالمية',
        rating: 5,
        date: 'October 2026',
        commentEn: 'Extended my 60-day Dubai tourist visa in 20 minutes through Karama Business Center. Sent them my passport on WhatsApp, paid securely, and had my extended e-Visa PDF in my inbox before I finished my coffee. Exceptional service.',
        commentAr: 'مددت تأشيرتي السياحية لـ 60 يوماً خلال 20 دقيقة عبر مركز الكرامة للأعمال. أرسلت الجواز بالواتساب ووصلتني التأشيرة المحدثة فوراً. خدمة رائعة.',
      },
      {
        name: 'Maria Fernandez',
        roleEn: 'Tourist & Explorer',
        roleAr: 'سائحة وزائرة',
        companyEn: 'Madrid Travel Group',
        companyAr: 'مجموعة مدريد للسياحة',
        rating: 5,
        date: 'September 2026',
        commentEn: 'Saved me an expensive flight to Oman. The team explained the exact GDRFA fee and had my extension sorted out seamlessly. Five stars!',
        commentAr: 'أنقذوني من تكاليف السفر إلى عمان لتجديد التأشيرة. شرحوا لي الرسوم بوضوح وأنجزوا التمديد في دقائق معدودة.',
      },
    ],
    targetKeywords: {
      shortTail: ['Tourist Visa Extension Dubai', 'Extend Visit Visa UAE', 'Amer Tourist Visa', 'Karama Visa Extension', 'Karama Business Center KBC'],
      longTail: ['How to extend Dubai tourist visa inside country Amer center', 'Cost of 30 day visit visa extension Dubai Karama', 'Extend visit visa without exiting UAE Karama business center', 'Convert tourist visa to residence visa Karama medical center'],
    },
    featuredFacilityImage: {
      url: heroCenterImage,
      captionEn: 'Fast-track visa extension counters at Karama Business Center (KBC).',
      captionAr: 'منصات التمديد السريع للتأشيرات السياحية بمركز الكرامة للأعمال.',
      locationBadgeEn: 'Karama Business Center · Al Karama, Next to Post Office, Dubai',
      locationBadgeAr: 'مركز الكرامة للأعمال · الكرامة، بجوار مكتب البريد، دبي',
    },
  },

  // =========================================================================
  // 7. JOB SEEKER ENTRY PERMIT & VISA (60, 90, 120 Days)
  // =========================================================================
  'amer-job-seeker-visa': {
    detailedOverviewEn: `The UAE Job Exploration Entry Permit (commonly known as the Job Seeker Visa) is a dedicated sovereign immigration pathway introduced under the UAE Advanced Visa System by the General Directorate of Residency and Foreigners Affairs (GDRFA Dubai) and the Federal Authority for Identity, Citizenship, Customs and Port Security (ICP). Designed specifically to attract young international talents, recent university graduates, and skilled professionals, this permit enables foreigners to enter and reside legally in Dubai to explore career opportunities, attend interviews, and establish corporate connections without requiring a local employer or national sponsor.

At Karama Business Center (KBC), operating under authorized Amer Center License #772 and managed by Emirates Secretarial Services (ESS), we provide complete guidance, document qualification, and electronic lodgement for Job Seeker permits across all three official validity durations: 60 Days, 90 Days, and 120 Days. Applications are available as single or multiple-entry permits, allowing candidates the flexibility to attend overseas conferences or family commitments while actively job-hunting in the UAE.

To qualify under Ministry of Human Resources and Emiratisation (MoHRE) benchmarks, applicants must either be classified in occupational skill levels 1, 2, or 3, or be fresh graduates from the top 500 accredited universities in the world (holding a minimum Bachelor's degree or equivalent). Sponsoring financial guarantees and security deposits are administered transparently with official government receipts. Furthermore, when applicants secure an employment offer in Dubai, our integrated campus houses both the Karama Medical Fitness Express Service Center (KMFC / Karama Medical Center) and ICP biometrics terminals. We convert your Job Seeker visa directly into a permanent employment residency via an in-country status change — completing your labour contract typing, DHA medical blood test, digital X-ray, and Emirates ID in a single streamlined visit.`,
    detailedOverviewAr: `تعتبر تأشيرة استكشاف فرص العمل (Job Seeker Visa) مساراً سيادياً أطلقته حكومة دولة الإمارات ضمن منظومة التأشيرات المحدثة للإدارة العامة للإقامة وشؤون الأجانب بدبي (GDRFA) والهيئة الاتحادية (ICP). تهدف هذه التأشيرة لاستقطاب الكفاءات الشابة وخريجي الجامعات المرموقة والمهنيين المهرة للبحث عن عمل وحضور المقابلات الوظيفية في دبي دون اشتراط وجود كفيل أو ضامن داخل الدولة.

ومن خلال مركز الكرامة للأعمال (KBC) وبترخيص مركز آمر المعتمد رقم 772 تحت إدارة الإمارات لخدمات رجال الأعمال (ESS)، نقدم خدمة شاملة لتدقيق المؤهلات والتقديم الإلكتروني الفوري لتأشيرات استكشاف العمل لكافة المدد المعتمدة: 60 يوماً، 90 يوماً، و120 يوماً، مع خيارات الدخول لمرة واحدة أو الدخول المتعدد.

يشترط القانون أن يكون المتقدم من فئة العمالة الماهرة في المستويات المهنية (الأول أو الثاني أو الثالث) وفق تصنيف وزارة الموارد البشرية، أو من خريجي أفضل 500 جامعة في العالم حاصلاً على درجة البكالوريوس كحد أدنى. وفور الحصول على عرض عمل، يتيح مقرنا المتكامل — الذي يضم مركز الكرامة للياقة الطبية السريعة (KMFC / مركز الكرامة الطبي) ومكاتب البصمة — تحويل تأشيرة استكشاف العمل إلى إقامة عمل دائمة بتعديل الوضع الداخلي وإنجاز الفحص الطبي والهوية تحت سقف واحد.`,
    legalFrameworkEn: `Federal Decree-Law No. 29 of 2021 regarding Foreigners Entry and Residence, UAE Cabinet Decision No. 65 of 2022 (Job Exploration Entry Permit), and GDRFA Dubai Executive Directives.`,
    legalFrameworkAr: `المرسوم بقانون اتحادي رقم (29) لسنة 2021، وقرار مجلس الوزراء رقم (65) لسنة 2022 بشأن تأشيرة استكشاف فرص العمل، واللوائح المنظمة لإقامة دبي.`,
    eligibilityEn: [
      'Classified in the 1st, 2nd, or 3rd occupational skill level according to MoHRE workforce standards',
      'Fresh graduate from the top 500 global universities (holding a recognized Bachelor degree or higher)',
      'Valid passport with at least 6 months validity from application submission date',
      'Refundable financial security deposit and active international/UAE travel health insurance coverage',
      'Passing security clearance through GDRFA Dubai immigration screening'
    ],
    eligibilityAr: [
      'أن يكون المتقدم ضمن المستوى المهاري الأول أو الثاني أو الثالث المعتمد لدى وزارة الموارد البشرية',
      'أن يكون من خريجي أفضل 500 جامعة في العالم وحاصلاً على شهادة البكالوريوس كحد أدنى',
      'جواز سفر ساري المفعول لمدة لا تقل عن 6 أشهر',
      'إيداع الضمان المالي المسترد وتوفير وثيقة تأمين صحي معتمدة تغطي فترة الإقامة',
      'اجتياز التدقيق الأمني المعتمد لدى الإدارة العامة للإقامة وشؤون الأجانب بدبي'
    ],
    galleryImages: COMMON_GALLERY,
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'Academic & Skill Level Audit',
        titleAr: 'تدقيق المؤهل والمستوى المهاري',
        descEn: 'Inspection of university degrees and professional credentials at Karama Business Center to verify top 500 university ranking or MoHRE skill level.',
        descAr: 'مراجعة الشهادات الأكاديمية والمهنية والتأكد من مطابقتها لتصنيف أفضل 500 جامعة أو مستويات وزارة الموارد البشرية.',
        durationEn: '30 Mins',
        durationAr: '30 دقيقة',
      },
      {
        stepNumber: 2,
        titleEn: 'Deposit & Entry Permit Lodgement',
        titleAr: 'سداد الضمان ورفع طلب التأشيرة',
        descEn: 'Electronic submission into GDRFA servers, refundable security deposit settlement, and generation of official government tracking token.',
        descAr: 'إرسال المعاملة إلكترونياً لنظام إقامة دبي وإيداع الضمان المالي المسترد وإصدار إيصال السداد الرسمي.',
        durationEn: '2 - 4 Hours',
        durationAr: '2 - 4 ساعات',
      },
      {
        stepNumber: 3,
        titleEn: 'GDRFA Approval & E-Visa Issuance',
        titleAr: 'الموافقة الوزارية وإصدار التأشيرة',
        descEn: 'Security clearance validation and issuance of the official pink-bordered Job Seeker e-Visa with QR verification code.',
        descAr: 'اعتماد الموافقة الأمنية وإصدار تأشيرة استكشاف العمل الإلكترونية المعتمدة برمز الاستجابة السريع (QR).',
        durationEn: '24 - 48 Hours',
        durationAr: '24 - 48 ساعة',
      },
      {
        stepNumber: 4,
        titleEn: 'Employment Conversion Guidance',
        titleAr: 'التحويل لإقامة عمل دائمة',
        descEn: 'Upon finding employment, our team transitions you directly to an employment residency with on-site medical at Karama Medical Center.',
        descAr: 'عند الحصول على وظيفة، يتولى فريقنا تحويلك مباشرة لإقامة عمل مع الفحص الطبي بمركز الكرامة الطبي (KMFC).',
        durationEn: 'On Demand',
        durationAr: 'عند التوظيف',
      },
    ],
    faqs: [
      {
        questionEn: 'Do I need a sponsor in the UAE to apply for a Job Seeker Visa?',
        questionAr: 'هل أحتاج لكفيل داخل الدولة للتقديم على تأشيرة البحث عن عمل؟',
        answerEn: 'No sponsor or host is required. The UAE Job Seeker Visa is 100% self-sponsored, allowing you to enter Dubai independently to search for work.',
        answerAr: 'لا يشترط وجود كفيل أو ضامن محلي؛ حيث تعتبر تأشيرة استكشاف العمل ذاتية الكفالة بنسبة 100% تتيح لك دخول دبي والبحث عن عمل باستقلالية.',
      },
      {
        questionEn: 'What happens to my refundable deposit when I get a job or leave the UAE?',
        questionAr: 'ماذا يحدث للضمان المالي المسترد عند الحصول على وظيفة أو مغادرة الدولة؟',
        answerEn: 'The security deposit is 100% refundable. Once you transition to an employment residency or leave the UAE before visa expiration, our Amer desk processes your refund directly to your bank account.',
        answerAr: 'الضمان المالي مسترد بنسبة 100%؛ فبمجرد تحويل التأشيرة لإقامة عمل أو مغادرة الدولة قبل انتهاء المدة، يقوم مكتب آمر بإرجاع المبلغ لحسابك البنكي.',
      },
      {
        questionEn: 'Can I do my medical fitness test at Karama Medical Center when I find a job?',
        questionAr: 'هل يمكنني إجراء الفحص الطبي بمركز الكرامة الطبي عند الحصول على وظيفة؟',
        answerEn: 'Yes! Our flagship center at Karama Business Center houses Karama Medical Fitness Express Service Center (KMFC / Karama Medical Center). You can complete your blood test, chest X-ray, and Emirates ID typing in one visit.',
        answerAr: 'نعم بالتأكيد! يضم مركز الكرامة للأعمال مركز الكرامة للياقة الطبية السريعة (KMFC / مركز الكرامة الطبي) لإجراء فحص الدم والأشعة وبصمة الهوية فورياً.',
      },
    ],
    reviews: [
      {
        name: 'Arjun Nambiar',
        roleEn: 'Software Development Engineer',
        roleAr: 'مهندس تطوير برمجيات',
        companyEn: 'FinTech Innovations MENA',
        companyAr: 'فينتك للابتكار',
        rating: 5,
        date: 'October 2026',
        commentEn: 'Applied for a 90-day Job Seeker visa with my engineering degree. Karama Business Center got my permit approved in 48 hours. After landing an offer in DIFC, they handled my status change and medical at Karama Medical Center in the same building. Superb!',
        commentAr: 'تقدمت للحصول على تأشيرة استكشاف عمل لـ 90 يوماً بمؤهلي الهندسي. اعتمد مركز الكرامة للأعمال طلبي في 48 ساعة، وعند حصولي على وظيفة في مركز دبي المالي، أنجزوا تعديل وضعي وفحصي بمركز الكرامة الطبي بنفس المقر.',
      },
      {
        name: 'Leila Benali',
        roleEn: 'Data Analyst',
        roleAr: 'محلل بيانات',
        companyEn: 'Global Analytics Dubai',
        companyAr: 'غلوبال للتحليلات دبي',
        rating: 5,
        date: 'September 2026',
        commentEn: 'Professional government typing desk. They helped me verify my university accreditation and managed the security deposit seamlessly. Highly recommended.',
        commentAr: 'مكتب طباعة حكومي رفيع المستوى. ساعدوني في تدقيق اعتماد جامعتي وإيداع الضمان بكل سهولة وشفافية.',
      },
    ],
    targetKeywords: {
      shortTail: ['Job Seeker Visa Dubai', 'Job Exploration Permit UAE', 'Amer Job Visa', 'Karama Medical Center Work Test', 'Karama Business Center KBC'],
      longTail: ['How to apply for job seeker visa Dubai Amer center', 'Requirements for 90 days job exploration visa Dubai Karama', 'Top 500 university job seeker visa UAE Karama business center', 'Convert job seeker visa to employment residency Karama medical center'],
    },
    featuredFacilityImage: {
      url: heroCenterImage,
      captionEn: 'Main service hall at Karama Business Center (KBC) processing Job Seeker entry permits.',
      captionAr: 'صالة المعاملات بمركز الكرامة للأعمال لمعالجة أذونات استكشاف فرص العمل.',
      locationBadgeEn: 'Karama Business Center · Al Karama, Next to Post Office, Dubai',
      locationBadgeAr: 'مركز الكرامة للأعمال · الكرامة، بجوار مكتب البريد، دبي',
    },
  },

  // =========================================================================
  // 8. NEW EMPLOYMENT & WORK ENTRY PERMIT (MoHRE / Amer)
  // =========================================================================
  'amer-work-entry-permit': {
    detailedOverviewEn: `Recruiting and onboarding new foreign employees in Dubai requires coordinated processing across two major government bodies: the Ministry of Human Resources and Emiratisation (MoHRE / Tasheel) and the General Directorate of Residency and Foreigners Affairs (GDRFA Dubai / Amer). At Karama Business Center (KBC), operating under authorized Amer Center License #772 and managed by Emirates Secretarial Services (ESS), we provide private enterprises, LLC companies, and free zone establishments with a synchronized corporate onboarding desk that handles both labour permits and immigration entry visas under one roof.

The process begins with electronic labour quota verification, job offer letter typing, and electronic work permit submission via our on-site Tasheel portal. Once the Ministry approves the initial electronic labour contract, our Amer immigration division immediately lodges the application into the GDRFA system to issue the official Employment Entry Permit (e-Visa with pink border). This permits the foreign recruit to enter the UAE legally if abroad, or serves as the foundation for an in-country status change if the individual is already inside Dubai on a visit or cancelled visa.

Our facility in Al Karama (conveniently positioned next to Karama Post Office) directly operates the Karama Medical Fitness Express Service Center (KMFC) — known locally throughout Dubai as Karama Medical Center — alongside authorized ICP biometric fingerprint capture desks. Corporate HR teams and business managers enjoy a singular point of contact: we welcome arriving employees, execute their in-country status change, complete their urgent DHA medical blood collection and digital chest X-ray screening, capture Emirates ID fingerprints, and finalize electronic residence stamping in under 24 to 48 hours. Corporate invoicing and official ministerial payment receipts are provided for every statutory dirham paid.`,
    detailedOverviewAr: `يتطلب استقدام وتعيين الموظفين والكوادر الجديدة في دبي تنسيقاً دقيقاً بين جهتين حكوميتين رئيسيتين: وزارة الموارد البشرية والتوطين (تسهيل) والإدارة العامة للإقامة وشؤون الأجانب بدبي (آمر). ومن خلال مركز الكرامة للأعمال (KBC) وبترخيص مركز آمر المعتمد رقم 772 تحت إدارة الإمارات لخدمات رجال الأعمال (ESS)، نقدم للشركات والمؤسسات التجارية مكتباً متكاملاً يدير تصاريح العمل وأذونات الدخول للإقامة تحت سقف واحد.

تبدأ المعاملة بالتحقق من كوتة المنشأة وطباعة عرض العمل الإلكتروني وطلب تصريح العمل المبدئي عبر منصة تسهيل المعتمدة لدينا. وفور اعتماد الوزارة، يحول فريق آمر الطلب مباشرة إلى خوادم إقامة دبي لإصدار إذن دخول العمل الرسمي (التأشيرة الوردية)، والتي تتيح للموظف دخول الدولة أو تعديل وضعه في حال كان متواجداً داخل الإمارات.

يتميز مركزنا في الكرامة (بجوار بريد الكرامة) باحتضان مركز الكرامة للياقة الطبية السريعة (KMFC / مركز الكرامة الطبي) ومحطات البصمة البيومترية؛ مما يتيح لمسؤولي الموارد البشرية إنجاز تعديل وضع الموظف، وفحصه الطبي، وبصمته، وتثبيت إقامته الرقمية في 24 إلى 48 ساعة فقط وبفواتير حكومية رسمية وشفافة.`,
    legalFrameworkEn: `Federal Decree-Law No. 33 of 2021 regarding Regulation of Labour Relations, Federal Decree-Law No. 29 of 2021 on Foreigners Entry, and GDRFA Dubai Corporate Onboarding Directives.`,
    legalFrameworkAr: `المرسوم بقانون اتحادي رقم (33) لسنة 2021 بشأن تنظيم علاقات العمل، والمرسوم بقانون اتحادي رقم (29) لسنة 2021 بشأن دخول الأجانب، ولوائح إقامة دبي للشركات.`,
    eligibilityEn: [
      'Active commercial trade license and valid establishment card with available labour quota under MoHRE',
      'Signed electronic job offer letter or labour contract matching MoHRE skill classifications',
      'Clear passport copy of the employee with at least 6 months validity',
      'Attested educational certificate (for professional and managerial designations in skill levels 1-3)',
      'Passing DHA residency medical fitness screening at Karama Medical Center and ICP biometric capture'
    ],
    eligibilityAr: [
      'رخصة تجارية سارية وبطاقة منشأة نشطة وتوفر كوتة تصاريح عمل لدى وزارة الموارد البشرية',
      'عرض عمل إلكتروني موقع أو عقد عمل مطابق للمستويات المهارية المعتمدة',
      'نسخة ملونة واضحة من جواز سفر الموظف بصلاحية لا تقل عن 6 أشهر',
      'مؤهل دراسي مصدق رسمياً للمهن الإدارية والتخصصية (المستويات 1 إلى 3)',
      'اجتياز الفحص الطبي بمركز الكرامة الطبي (KMFC) وإتمام البصمة البيومترية'
    ],
    galleryImages: COMMON_GALLERY,
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'MoHRE Quota & Job Offer Submission',
        titleAr: 'فحص الكوتة وتصريح العمل في تسهيل',
        descEn: 'Electronic verification of commercial quotas, employment offer letter generation, and work permit submission at Karama Business Center.',
        descAr: 'تدقيق كوتة الشركة وطباعة عرض العمل وتصريح العمل المبدئي عبر منصة تسهيل المعتمدة بالمركز.',
        durationEn: '1 - 2 Hours',
        durationAr: '1 - 2 ساعة',
      },
      {
        stepNumber: 2,
        titleEn: 'GDRFA Work Entry Permit Generation',
        titleAr: 'إصدار إذن دخول العمل من إقامة دبي',
        descEn: 'Instant transmission of approved labour permit to GDRFA immigration servers and generation of the official employment e-Visa.',
        descAr: 'تحويل تصريح العمل المعتمد تلقائياً لإقامة دبي وإصدار إذن الدخول الإلكتروني الرسمي (التأشيرة الوردية).',
        durationEn: '2 - 4 Hours',
        durationAr: '2 - 4 ساعات',
      },
      {
        stepNumber: 3,
        titleEn: 'Medical Fitness at Karama Medical Center',
        titleAr: 'الفحص الطبي بمركز الكرامة الطبي',
        descEn: 'Fast-track phlebotomy and digital chest X-ray at Karama Medical Fitness Express Service Center (KMFC) with express lab clearance.',
        descAr: 'فحص طبي سريع للموظف بمركز الكرامة للياقة الطبية (KMFC / مركز الكرامة الطبي) في نفس المبنى دون انتظار.',
        durationEn: '2 - 24 Hours',
        durationAr: '2 - 24 ساعة',
      },
      {
        stepNumber: 4,
        titleEn: 'Status Change & Digital Visa Stamping',
        titleAr: 'تعديل الوضع وتثبيت الإقامة الرقمية',
        descEn: 'In-country status regularization, ICP biometric capture, and electronic residence approval published directly on UAE Pass.',
        descAr: 'تعديل الوضع الداخلي وإنجاز البصمة وتثبيت تصريح الإقامة الرقمي المعتمد وتوصيل الهوية الإماراتية.',
        durationEn: '24 Hours',
        durationAr: '24 ساعة',
      },
    ],
    faqs: [
      {
        questionEn: 'How long does it take to issue a new work entry permit in Dubai?',
        questionAr: 'كم يستغرق إصدار إذن دخول عمل جديد في دبي؟',
        answerEn: 'Initial MoHRE work permit approval takes 24 to 48 hours. Once approved, the GDRFA employment entry permit is generated electronically in 2 to 4 hours through our direct server API link.',
        answerAr: 'تستغرق موافقة تصريح العمل من تسهيل من 24 إلى 48 ساعة، وفور اعتمادها يصدر إذن الدخول من إقامة دبي إلكترونياً خلال ساعتين إلى 4 ساعات.',
      },
      {
        questionEn: 'Can an employee already inside Dubai on a visit visa change status without exiting?',
        questionAr: 'هل يمكن للموظف المتواجد بتأشيرة زيارة تعديل وضعه دون مغادرة الدولة؟',
        answerEn: 'Yes! We issue the employment entry permit and execute an in-country status change (AED 676) directly, allowing the recruit to transition to permanent employment without leaving the country.',
        answerAr: 'نعم بالتأكيد! نصدر إذن العمل وننفذ تعديل الوضع داخل الدولة (676 درهماً) مباشرة دون حاجة الموظف لمغادرة الدولة أو السفر للمنافذ.',
      },
      {
        questionEn: 'Where does the new employee complete the medical fitness test?',
        questionAr: 'أين يجري الموظف الجديد فحص اللياقة الطبية للإقامة؟',
        answerEn: 'Directly in our facility! Karama Medical Fitness Express Service Center (KMFC / Karama Medical Center) is co-located inside Karama Business Center. Results are certified by DHA in 2 to 24 hours.',
        answerAr: 'في نفس المقر تماماً! يقع مركز الكرامة للياقة الطبية السريعة (KMFC / مركز الكرامة الطبي) داخل مركز الكرامة للأعمال، وتعتمد النتائج من هيئة الصحة خلال ساعتين إلى 24 ساعة.',
      },
    ],
    reviews: [
      {
        name: 'Kareem Abdel-Fattah',
        roleEn: 'Human Capital Director',
        roleAr: 'مدير رأس المال البشري',
        companyEn: 'Nile-Gulf Contracting LLC',
        companyAr: 'النيل والخليج للمقاولات',
        rating: 5,
        date: 'October 2026',
        commentEn: 'We onboard 20 to 30 engineers every quarter. Emirates Secretarial Services (ESS) at Karama Business Center coordinates Tasheel work permits, Amer visas, and medicals at Karama Medical Center effortlessly. Best corporate government partner in Dubai.',
        commentAr: 'نعين من 20 إلى 30 مهندساً كل ربع سنة. تتولى ESS بمركز الكرامة للأعمال تصاريح تسهيل وتأشيرات آمر وفحوصات مركز الكرامة الطبي بكل سلاسة. أفضل شريك حكومي للشركات في دبي.',
      },
      {
        name: 'Grace Thompson',
        roleEn: 'Talent Acquisition Manager',
        roleAr: 'مدير استقطاب الكفاءات',
        companyEn: 'Thompson Retail Middle East',
        companyAr: 'طومسون لتجارة التجزئة',
        rating: 5,
        date: 'September 2026',
        commentEn: 'Flawless execution. Our overseas recruit received his entry visa in 2 days and finished his medical and biometrics in a single visit at KBC. Impeccable standard.',
        commentAr: 'تنفيذ احترافي من الدرجة الأولى. استلم موظفنا الجديد تأشيرته خلال يومين وأنهى الفحص والبصمة في زيارة واحدة لمركز الكرامة للأعمال.',
      },
    ],
    targetKeywords: {
      shortTail: ['Work Entry Permit Dubai', 'Employment Visa Dubai', 'Amer Work Visa', 'Tasheel MoHRE Permit', 'Karama Business Center KBC'],
      longTail: ['How to apply for employment entry permit Dubai Amer center', 'Tasheel work permit and Amer visa package Karama', 'Onboarding new staff medical fitness Karama medical center KMFC', 'Corporate employee visa stamping timeline Dubai Amer'],
    },
    featuredFacilityImage: {
      url: heroCenterImage,
      captionEn: 'Corporate service floor at Karama Business Center (KBC) coordinating MoHRE and Amer immigration files.',
      captionAr: 'طابق خدمات الشركات بمركز الكرامة للأعمال لتنسيق معاملات تسهيل وآمر والإقامة.',
      locationBadgeEn: 'Karama Business Center · Al Karama, Next to Post Office, Dubai',
      locationBadgeAr: 'مركز الكرامة للأعمال · الكرامة، بجوار مكتب البريد، دبي',
    },
  },

  // =========================================================================
  // 9. IN-COUNTRY VISA STATUS CHANGE (Inside UAE)
  // =========================================================================
  'amer-visa-status-change': {
    detailedOverviewEn: `The In-Country Visa Status Change (officially known in Arabic as "Ta'deel Al-Wada'") is a vital legal immigration procedure regulated by the General Directorate of Residency and Foreigners Affairs (GDRFA Dubai). It legally modifies an individual's presence in the United Arab Emirates from one visa category to another — such as transitioning from a tourist or visit visa to an employment or investor residency, or transferring between consecutive corporate sponsorships after cancellation — without requiring the applicant to exit the UAE territory or embark on stressful border runs.

At Karama Business Center (KBC), operating under authorized Amer Center License #772 and managed by Emirates Secretarial Services (ESS), our senior immigration consultants execute in-country status change transactions electronically in real time. We audit the prerequisite entry permit or new residency approval, verify that all prior visas have been cancelled cleanly without pending financial blocks, and submit the status change directly into the GDRFA immigration core servers.

Executing your status change at our flagship facility in Al Karama (located next to Karama Post Office) provides an unparalleled advantage. Our campus directly integrates the Karama Medical Fitness Express Service Center (KMFC / Karama Medical Center) alongside ICP biometrics capture desks. Once your status change approval voucher is issued (official statutory tariff of AED 676), you do not need to commute across Dubai to begin residency stamping. You immediately proceed to on-site venous blood draw and digital chest radiography in our sanitized clinical rooms, register your Emirates ID biometric fingerprints, and finalize your digital residency stamping within 24 to 48 hours. Zero rejection is guaranteed through preliminary file pre-auditing.`,
    detailedOverviewAr: `يعد تعديل الوضع داخل الدولة (تعديل الوضع القانوني) إجراءً سيادياً جوهرياً تنظمه الإدارة العامة للإقامة وشؤون الأجانب بدبي (GDRFA). يتيح هذا الإجراء للمتعامل تغيير صفة تواجده القانوني في دولة الإمارات من فئة تأشيرة إلى أخرى — كالتحويل من تأشيرة سياحة أو زيارة إلى إقامة عمل أو استثمار، أو الانتقال بين شركتين بعد إلغاء الإقامة السابقة — دون الحاجة لمغادرة أراضي الدولة أو السفر عبر المنافذ الحدودية.

ومن خلال مركز الكرامة للأعمال (KBC) وبترخيص مركز آمر المعتمد رقم 772 تحت إدارة الإمارات لخدمات رجال الأعمال (ESS)، ينفذ كبار مستشارينا معاملات تعديل الوضع إلكترونياً وبصورة فورية. نقوم بتدقيق إذن الدخول الجديد، والتحقق من إلغاء التأشيرة السابقة بشكل سليم، وإرسال المعاملة مباشرة إلى خوادم إقامة دبي.

يوفر إنجاز تعديل الوضع في مقرنا بالكرامة (بجوار بريد الكرامة) ميزة فريدة؛ حيث يحتضن مركزنا مركز الكرامة للياقة الطبية السريعة (KMFC / مركز الكرامة الطبي) ومحطات البصمة البيومترية. وفور صدور إشعار تعديل الوضع (بالتعرفة الرسمية المعتمدة 676 درهماً)، ينتقل المتعامل مباشرة لإجراء فحص الدم والأشعة الرقمية وأخذ بصمة الهوية في نفس المبنى دون إضاعة الوقت، مع اعتماد الإقامة الرقمية خلال 24 إلى 48 ساعة وبضمان عدم الرفض.`,
    legalFrameworkEn: `Federal Decree-Law No. 29 of 2021 regarding Foreigners Entry and Residence, UAE Cabinet Decision No. 65 of 2022, and GDRFA Dubai Status Adjustment Regulations.`,
    legalFrameworkAr: `المرسوم بقانون اتحادي رقم (29) لسنة 2021، وقرار مجلس الوزراء رقم (65) لسنة 2022، واللوائح التنفيذية لإقامة دبي بشأن تعديل الوضع داخل الدولة.`,
    eligibilityEn: [
      'Active new entry permit issued under GDRFA Dubai (employment, partner, family, or Golden Visa)',
      'Valid passport copy with at least 6 months validity from application submission date',
      'Current legal presence inside the UAE on a visit visa, tourist visa, or cancelled residency within grace period',
      'Clear immigration record with zero active police circulars, court bans, or absconding alerts'
    ],
    eligibilityAr: [
      'إذن دخول جديد ساري المفعول صادر من إقامة دبي (عمل، شريك، عائلة، أو إقامة ذهبية)',
      'نسخة جواز السفر بصلاحية لا تقل عن 6 أشهر من تاريخ التقديم',
      'التواجد الفعلي داخل الدولة بتأشيرة زيارة أو سياحة أو إقامة ملغاة ضمن فترة السماح',
      'سجل قانوني سليم وخلو الملف من التعاميم الأمنية أو بلاغات الانقطاع'
    ],
    galleryImages: COMMON_GALLERY,
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'Entry Permit & File Verification',
        titleAr: 'تدقيق إذن الدخول والملف السابق',
        descEn: 'Senior Amer consultants verify the newly approved entry permit and ensure prior visit or cancelled visas have zero pending fines.',
        descAr: 'مراجعة إذن الدخول الجديد والتأكد من إلغاء الملف السابق وعدم وجود غرامات تأخير متراكمة.',
        durationEn: '15 Mins',
        durationAr: '15 دقيقة',
      },
      {
        stepNumber: 2,
        titleEn: 'GDRFA Status Change Lodgement',
        titleAr: 'إرسال طلب تعديل الوضع لإقامة دبي',
        descEn: 'Direct electronic submission into GDRFA internal servers and settlement of the official statutory fee (AED 676).',
        descAr: 'إرسال المعاملة إلكترونياً لخوادم إقامة دبي وسداد الرسوم الرسمية (676 درهماً) وإصدار رقم التتبع.',
        durationEn: '30 Mins',
        durationAr: '30 دقيقة',
      },
      {
        stepNumber: 3,
        titleEn: 'Status Change Approval Voucher',
        titleAr: 'صدور اعتماد تعديل الوضع الرسمي',
        descEn: 'Generation of the official GDRFA Change of Status certificate regularizing applicant presence as an active resident.',
        descAr: 'صدور شهادة تعديل الوضع المعتمدة من إقامة دبي التي تثبت التحول الرسمي إلى مقيم على التأشيرة الجديدة.',
        durationEn: '1 - 2 Hours',
        durationAr: '1 - 2 ساعة',
      },
      {
        stepNumber: 4,
        titleEn: 'Immediate Medical & Biometrics',
        titleAr: 'الفحص الطبي المباشر وبصمة الهوية',
        descEn: 'Walk directly to Karama Medical Center (KMFC) and ICP biometrics desks on the same floor to initiate final visa stamping.',
        descAr: 'التوجه الفوري لمركز الكرامة الطبي (KMFC) ومكاتب الهوية في نفس المبنى لإنجاز الفحص والبصمة وتثبيت الإقامة.',
        durationEn: '2 - 24 Hours',
        durationAr: '2 - 24 ساعة',
      },
    ],
    faqs: [
      {
        questionEn: 'What is the official government fee for an in-country status change in Dubai?',
        questionAr: 'كم تبلغ الرسوم الحكومية الرسمية لتعديل الوضع داخل الدولة في دبي؟',
        answerEn: 'The official statutory GDRFA fee for an in-country status change is AED 676. Official government payment receipts are printed immediately upon submission.',
        answerAr: 'تبلغ الرسوم الحكومية الرسمية المعتمدة لدى إقامة دبي لتعديل الوضع 676 درهماً، وتُسلّم إيصالات الدفع الحكومية للمتعامل فوراً.',
      },
      {
        questionEn: 'Can I do my medical fitness test immediately after the status change?',
        questionAr: 'هل يمكنني إجراء الفحص الطبي فور صدور تعديل الوضع؟',
        answerEn: 'Yes! Because Karama Medical Fitness Express Service Center (KMFC / Karama Medical Center) is located directly inside Karama Business Center, you can walk straight to the medical testing wing the minute your status change is approved.',
        answerAr: 'نعم بالتأكيد! نظراً لوجود مركز الكرامة للياقة الطبية السريعة (KMFC / مركز الكرامة الطبي) داخل مركز الكرامة للأعمال، يمكنك إجراء الفحص الطبي فور اعتماد تعديل الوضع في دقائق.',
      },
      {
        questionEn: 'Do I have to leave the UAE if my cancelled visa grace period is ending?',
        questionAr: 'هل يلزم مغادرة الدولة إذا كانت فترة السماح بعد الإلغاء على وشك الانتهاء؟',
        answerEn: 'No, provided you have a new entry permit issued before your grace period expires. We execute the status change immediately, stopping the fine counter and regularizing your legal stay.',
        answerAr: 'لا، طالما تم إصدار إذن الدخول الجديد قبل انتهاء فترة السماح؛ حيث ننفذ تعديل الوضع فورياً لإيقاف عداد الغرامات وتثبيت إقامتك القانونية.',
      },
    ],
    reviews: [
      {
        name: 'Dmitri Voronov',
        roleEn: 'Tech Lead & Partner',
        roleAr: 'قائد تقني وشريك',
        companyEn: 'Voronov Cyber Systems LLC',
        companyAr: 'فورونوف للأنظمة السيبرانية',
        rating: 5,
        date: 'October 2026',
        commentEn: 'Transferred from my tourist visa to a partner residency without leaving Dubai. Karama Business Center completed the status change in 45 minutes and I completed my medical test at Karama Medical Center (KMFC) downstairs immediately. Flawless execution.',
        commentAr: 'انتقلت من تأشيرة سياحة إلى إقامة شريك دون مغادرة دبي. أنجز مركز الكرامة للأعمال تعديل الوضع في 45 دقيقة وأجريت فحصي الطبي بمركز الكرامة الطبي (KMFC) بالأسفل مباشرة. احترافية مبهرة.',
      },
      {
        name: 'Sara Al-Ghamdi',
        roleEn: 'Operations Coordinator',
        roleAr: 'منسق عمليات',
        companyEn: 'Horizon Media Dubai',
        companyAr: 'هورايزون ميديا دبي',
        rating: 5,
        date: 'September 2026',
        commentEn: 'Fastest status change in town. Zero queue at Amer and official receipts provided on the spot. Very grateful for their prompt assistance.',
        commentAr: 'أسرع خدمة تعديل وضع في دبي دون طوابير انتظار، مع تسليم الإيصالات الرسمية فوراً. ممتنة جداً لخدمتهم الراقية.',
      },
    ],
    targetKeywords: {
      shortTail: ['Status Change Dubai', 'Change Visa Status UAE', 'Amer Status Change', 'Karama Medical Center Status Change', 'Karama Business Center KBC'],
      longTail: ['In country status change fee Dubai Amer center 676 AED', 'How to change tourist visa to residence visa inside UAE Karama', 'Status change and express medical test Karama medical center KMFC', 'Change status after visa cancellation grace period Amer'],
    },
    featuredFacilityImage: {
      url: heroCenterImage,
      captionEn: 'Customer happiness desks at Karama Business Center (KBC) executing real-time in-country status adjustments.',
      captionAr: 'منصات خدمة المتعاملين بمركز الكرامة للأعمال لإنجاز تعديل الوضع الداخلي لحظياً.',
      locationBadgeEn: 'Karama Business Center · Al Karama, Next to Post Office, Dubai',
      locationBadgeAr: 'مركز الكرامة للأعمال · الكرامة، بجوار مكتب البريد، دبي',
    },
  },

  // =========================================================================
  // 10. FAMILY VISA HOLD & UNHOLD (During Job Change)
  // =========================================================================
  'amer-visa-hold-unhold': {
    detailedOverviewEn: `When an expatriate resident changes employment or transfers commercial sponsorships in Dubai, standard immigration regulations traditionally require cancelling all sponsored family dependents before cancelling the primary sponsor's residency. To eliminate this costly disruption, the General Directorate of Residency and Foreigners Affairs (GDRFA Dubai) introduced the official Family Visa Hold Service (in Arabic: "Wad' Al-Iqama"). This sovereign facility allows an individual to temporarily freeze their spouse, children, and domestic staff visas while transitioning between corporate sponsors or issuing a new investor visa, without paying visa cancellation and re-issuance fees.

At Karama Business Center (KBC), operating under authorized Amer Center License #772 and managed by Emirates Secretarial Services (ESS), our certified typists handle the entire Visa Hold and subsequent Unhold procedure with utmost speed and accuracy. We audit the sponsor's new electronic employment contract or partner trade license, place the dependents' residence files on official administrative hold in the GDRFA system, and process the refundable ministerial security deposit of AED 2,500 per dependent.

Placing your family's visas on hold at our facility in Al Karama (located next to Karama Post Office) saves your family thousands of dirhams in flight tickets, status change fees, and mandatory re-testing. Once your new employment or investor visa is approved and stamped, our team promptly executes the "Unhold" transaction, restoring your family's active residency status and initiating the immediate refund of your security deposit directly to your registered bank IBAN. Throughout this transition, our co-located Karama Medical Fitness Express Service Center (KMFC / Karama Medical Center) is available to handle any renewal medical screenings if dependent expiration dates overlap with the corporate transition.`,
    detailedOverviewAr: `عند انتقال الموظف أو المستثمر المقيم في دبي إلى وظيفة جديدة أو كفالة شركة أخرى، كانت القوانين السابقة تلزم بإلغاء إقامات كافة أفراد الأسرة المكفولين أولاً. ولمنع هذا العبء المالي والجهد، وفرت الإدارة العامة للإقامة وشؤون الأجانب بدبي (GDRFA) خدمة تعليق إقامة الأسرة (وضع الإقامة)، والتي تتيح للكفيل تجميد إقامات الزوجة والأبناء والعمالة المساعدة مؤقتاً لحين نقل كفالته وإصدار إقامته الجديدة دون إلغاء إقاماتهم.

ومن خلال مركز الكرامة للأعمال (KBC) وبترخيص مركز آمر المعتمد رقم 772 تحت إدارة الإمارات لخدمات رجال الأعمال (ESS)، ننجز إجراءات تعليق الإقامة وإلغاء التعليق لاحقاً بأعلى درجات الدقة والسرعة. نقوم بتدقيق عقد العمل الجديد، وتعليق ملفات الأسرة في نظام إقامة دبي، وإيداع الضمان المالي المسترد (2,500 درهم عن كل مكفول).

يوفر تعليق إقامة الأسرة في مقرنا بالكرامة (بجوار بريد الكرامة) آلاف الدراهم على العائلات؛ حيث يجنبهم مصاريف السفر وإلغاء وإعادة إصدار التأشيرات وتعديل الوضع. وفور تثبيت إقامة الكفيل الجديدة، نقوم برفع التعليق وإعادة تفعيل إقامات الأسرة واسترداد مبالغ الضمان المالي فوراً لحسابك البنكي، مع توفر مركز الكرامة للياقة الطبية السريعة (KMFC / مركز الكرامة الطبي) في نفس المبنى لأي تجديدات طبية لازمة.`,
    legalFrameworkEn: `Federal Decree-Law No. 29 of 2021 regarding Foreigners Entry and Residence, UAE Cabinet Decision No. 65 of 2022, and GDRFA Dubai Executive Directives on Dependent Visa Suspension (Hold).`,
    legalFrameworkAr: `المرسوم بقانون اتحادي رقم (29) لسنة 2021، وقرار مجلس الوزراء رقم (65) لسنة 2022، واللوائح التنظيمية لإقامة دبي بشأن تعليق إقامات المكفولين أثناء انتقال الكفيل.`,
    eligibilityEn: [
      'Primary sponsor changing employment or transferring to a new company or investor visa in Dubai',
      'Valid passport and active residence visas for all dependent family members being placed on hold',
      'Submission of new MoHRE electronic job offer or valid commercial trade license showing partner shareholding',
      'Refundable ministerial security deposit of AED 2,500 per dependent submitted through official GDRFA vouchers',
      'Resolution of hold within 60 days by finalizing new sponsor residency and executing unhold procedure'
    ],
    eligibilityAr: [
      'انتقال الكفيل الأساسي لوظيفة جديدة أو تأسيس شركة أو استخراج إقامة مستثمر بدبي',
      'جوازات سفر سارية وإقامات فعالة لكافة أفراد الأسرة المراد تعليق إقاماتهم',
      'تقديم عرض العمل الإلكتروني من تسهيل أو رخصة تجارية تثبت صفة الشريك للوظيفة الجديدة',
      'إيداع الضمان المالي الحكومي المسترد (2,500 درهم عن كل فرد) بإيصالات رسمية صادرة من إقامة دبي',
      'استكمال إجراءات إقامة الكفيل الجديدة ورفع التعليق خلال 60 يوماً كحد أقصى'
    ],
    galleryImages: COMMON_GALLERY,
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'Job Offer & Dependent File Audit',
        titleAr: 'تدقيق عرض العمل وملفات الأسرة',
        descEn: 'Inspection of sponsor new MoHRE contract and verification of dependent validity at Karama Business Center to calculate exact deposits.',
        descAr: 'مراجعة عقد العمل الجديد وحساب مبالغ الضمان المستردة والتأكد من مطابقة الملف للاشتراطات.',
        durationEn: '20 Mins',
        durationAr: '20 دقيقة',
      },
      {
        stepNumber: 2,
        titleEn: 'GDRFA Visa Hold Lodgement',
        titleAr: 'تسجيل طلب تعليق الإقامة بإقامة دبي',
        descEn: 'Electronic submission into the GDRFA portal, deposit registration (AED 2,500 per dependent), and official hold voucher generation.',
        descAr: 'تسجيل المعاملة في نظام إقامة دبي وإيداع الضمان المسترد وإصدار إيصال تعليق الإقامة المعتمد.',
        durationEn: '1 - 2 Hours',
        durationAr: '1 - 2 ساعة',
      },
      {
        stepNumber: 3,
        titleEn: 'Primary Sponsor Visa Stamping',
        titleAr: 'تثبيت إقامة الكفيل الجديدة',
        descEn: 'Sponsor completes medical at Karama Medical Center (KMFC) and stamps new residence without family cancellation risks.',
        descAr: 'يستكمل الكفيل فحصه الطبي بمركز الكرامة الطبي (KMFC) ويثبت إقامته الجديدة بكل اطمئنان.',
        durationEn: '24 - 48 Hours',
        durationAr: '24 - 48 ساعة',
      },
      {
        stepNumber: 4,
        titleEn: 'Unhold Execution & Deposit Refund',
        titleAr: 'رفع التعليق واسترداد الضمان المالي',
        descEn: 'Electronic release of dependent files back to active status and automated initiation of security deposit refund to sponsor IBAN.',
        descAr: 'إلغاء تعليق إقامات الأسرة وإعادتها للحالة النشطة واسترداد الضمان المالي لحساب الكفيل البنكي فورياً.',
        durationEn: 'Same Day',
        durationAr: 'نفس اليوم',
      },
    ],
    faqs: [
      {
        questionEn: 'How much is the security deposit to put family visas on hold in Dubai?',
        questionAr: 'كم يبلغ الضمان المالي لتعليق إقامة الأسرة في دبي؟',
        answerEn: 'The official refundable security deposit is AED 2,500 per dependent. Official GDRFA government deposit receipts are generated immediately and the full amount is refunded once the unhold is concluded.',
        answerAr: 'يبلغ الضمان المالي الحكومي المسترد 2,500 درهم عن كل فرد مكفول. وتصدر إيصالات رسمية من إقامة دبي ويسترد المبلغ بالكامل فور رفع التعليق.',
      },
      {
        questionEn: 'How much time do I have to complete my new visa and release the hold?',
        questionAr: 'ما هي المهلة الممنوحة لإنهاء إقامتي الجديدة ورفع تعليق الأسرة؟',
        answerEn: 'GDRFA grants a standard period of up to 60 days to finalize your new residency stamping and execute the unhold transaction, giving you ample time to complete onboarding.',
        answerAr: 'تمنح إقامة دبي مهلة تصل إلى 60 يوماً لإنجاز وتثبيت إقامة الكفيل الجديدة ورفع تعليق إقامات الأسرة واسترداد الضمان.',
      },
      {
        questionEn: 'Do my family members need to re-do medical fitness tests during hold?',
        questionAr: 'هل يلزم أفراد الأسرة إعادة الفحص الطبي أثناء فترة التعليق؟',
        answerEn: 'No! Their existing residency visas remain fully valid and active in the background. No medical testing or Emirates ID re-issuance is needed unless their actual multi-year expiry date naturally occurs.',
        answerAr: 'لا إطلاقاً! تظل إقاماتهم الحالية سارية المفعول، ولا يلزمهم أي فحص طبي أو إعادة بصمة طالما أن تاريخ صلاحية إقاماتهم الأصلية لم ينتهِ بعد.',
      },
    ],
    reviews: [
      {
        name: 'Fawzi Al-Najjar',
        roleEn: 'Finance Director',
        roleAr: 'مدير مالي',
        companyEn: 'Najjar Corporate Advisory',
        companyAr: 'النجار للاستشارات المالية',
        rating: 5,
        date: 'October 2026',
        commentEn: 'Changing jobs used to mean cancelling my wife and three children. Karama Business Center put all four visas on hold in one morning. Once my new visa was stamped, ESS processed the unhold and my deposit was back in my bank account in 3 days. A lifesaver.',
        commentAr: 'كان تغيير الوظيفة يعني إلغاء إقامة زوجتي وأطفالي الثلاثة وتكاليف باهظة. قام مركز الكرامة للأعمال بتعليق الإقامات الأربع في صباح واحد، وفور تثبيت إقامتي رفعوا التعليق واستعدت الضمان في 3 أيام. خدمة لا تقدر بثمن.',
      },
      {
        name: 'Ananya Sharma',
        roleEn: 'Product Manager',
        roleAr: 'مدير منتجات',
        companyEn: 'Dubai Internet City Tech Corp',
        companyAr: 'تك كورب مدينة دبي للإنترنت',
        rating: 5,
        date: 'September 2026',
        commentEn: 'Stress-free transition. The consultants at ESS explained the exact deposit breakdown and kept me updated every step of the way. Highly recommended!',
        commentAr: 'انتقال وظيفي سلس وخالٍ من أي توتر. شرح مستشارو ESS كافة تفاصيل الضمان وتابعوا معي حتى رفع التعليق بالكامل.',
      },
    ],
    targetKeywords: {
      shortTail: ['Visa Hold Dubai', 'Hold Family Visa UAE', 'Amer Visa Hold', 'Unhold Visa Dubai', 'Karama Business Center KBC'],
      longTail: ['How to put family visa on hold during job change Amer center', 'Deposit for family visa hold in Dubai GDRFA 2500 AED', 'Unhold family visa process and deposit refund Karama business center', 'Sponsor changing job keep family visa valid Dubai Amer'],
    },
    featuredFacilityImage: {
      url: heroCenterImage,
      captionEn: 'Family residency consultation counters at Karama Business Center (KBC).',
      captionAr: 'منصات استشارات إقامة الأسرة بمركز الكرامة للأعمال.',
      locationBadgeEn: 'Karama Business Center · Al Karama, Next to Post Office, Dubai',
      locationBadgeAr: 'مركز الكرامة للأعمال · الكرامة، بجوار مكتب البريد، دبي',
    },
  },

  // =========================================================================
  // 11. ESTABLISHMENT IMMIGRATION CARD (Issuance & Renewal)
  // =========================================================================
  'amer-establishment-card': {
    detailedOverviewEn: `The Establishment Card (also known as the Company Immigration Card or "Bitaqat Al-Munsha'a") is the fundamental corporate identity file issued by the General Directorate of Residency and Foreigners Affairs (GDRFA Dubai). It legally registers a commercial entity within the Dubai immigration database, enabling the company to sponsor foreign workers, issue partner visas, apply for Golden Visas for investors, and execute corporate entry permits. Without an active Establishment Card, a company's immigration file is frozen, preventing any new visa issuance or renewal.

At Karama Business Center (KBC), operating under authorized Amer Center License #772 and managed by Emirates Secretarial Services (ESS), we provide an express corporate desk for issuing new Establishment Cards and renewing existing files across Dubai Mainland (DED / DET licenses) and major Dubai Free Zones. We audit commercial trade licenses, corporate Memorandums of Association (MOA), Ejari office lease agreements, and authorized signatories' Emirates IDs to ensure total regulatory compliance before submission.

Renewing or issuing your Establishment Card at our center in Al Karama (located next to Karama Post Office) offers immense convenience for company owners and PROs. The official government fee for new establishment card issuance is AED 2,200 (or AED 1,050 for standard renewal), backed by immediate electronic ministerial receipts. Because our facility also operates the Karama Medical Fitness Express Service Center (KMFC / Karama Medical Center), Tasheel labour desks, and ICP biometrics terminals, business founders can simultaneously establish their corporate file and process their own partner or investor residencies under one roof in record time.`,
    detailedOverviewAr: `تعتبر بطاقة المنشأة الصادرة عن الإدارة العامة للإقامة وشؤون الأجانب بدبي (GDRFA) الهوية الرسمية الأساسية لأي شركة أو منشأة تجارية في نظام الإقامة. تتيح بطاقة المنشأة للشركة فتح ملف إلكتروني لكفالة واستقدام الموظفين، وإصدار إقامات الشركاء والمستثمرين، والتقديم على الإقامة الذهبية. وبدون بطاقة منشأة سارية، يتم تجميد ملف الشركة تلقائياً وتتوقف كافة معاملات الإقامة والتأشيرات.

ومن خلال مركز الكرامة للأعمال (KBC) وبترخيص مركز آمر المعتمد رقم 772 تحت إدارة الإمارات لخدمات رجال الأعمال (ESS)، نوفر مكتباً سريعاً ومخصصاً لإصدار بطاقات المنشأة الجديدة وتجديد البطاقات الحالية لشركات دبي المحلية (اقتصادية دبي) وكافة المناطق الحرة. نقوم بتدقيق الرخصة التجارية، وعقد التأسيس، وعقد إيجاري المكتبي المصدق، وهويات الشركاء المفوضين لضمان الموافقة الفورية.

يوفر إنجاز المعاملة في مركزنا بالكرامة (بجوار بريد الكرامة) راحة قصوى لأصحاب الشركات ومسؤولي العلاقات العامة؛ حيث تبلغ الرسوم الحكومية الرسمية لإصدار بطاقة منشأة جديدة 2,200 درهم (وللتجديد 1,050 درهماً) بإيصالات رسمية فورية. ونظراً لأن مركزنا يضم أيضاً مركز الكرامة للياقة الطبية السريعة (KMFC / مركز الكرامة الطبي) وخدمات تسهيل والهوية، يمكن لرجال الأعمال فتح ملف الشركة وإنجاز إقاماتهم الطبية وتثبيت تأشيراتهم تحت سقف واحد.`,
    legalFrameworkEn: `Federal Decree-Law No. 29 of 2021 regarding Foreigners Entry and Residence, UAE Cabinet Decision No. 65 of 2022, and GDRFA Dubai Commercial Establishment Regulations.`,
    legalFrameworkAr: `المرسوم بقانون اتحادي رقم (29) لسنة 2021، وقرار مجلس الوزراء رقم (65) لسنة 2022، واللوائح المنظمة لملفات المنشآت التجارية بإقامة دبي.`,
    eligibilityEn: [
      'Valid commercial trade license issued by Dubai DET or accredited Dubai Free Zone authority',
      'Memorandum of Association (MOA) and commercial registry certificate showing active partners',
      'Valid Ejari commercial tenancy contract for registered corporate premises or approved business center',
      'Original Emirates ID copies of authorized managing partners and legal signatories',
      'Active mobile phone number and corporate email registered on the GDRFA business portal'
    ],
    eligibilityAr: [
      'رخصة تجارية سارية المفعول صادرة من دائرة الاقتصاد والسياحة بدبي أو إحدى المناطق الحرة',
      'عقد تأسيس الشركة (MOA) والشهادة التجارية موضحاً بها أسماء الشركاء والمفوضين',
      'عقد إيجاري تجاري مصدق لمقر الشركة أو مكتب ضمن مركز أعمال معتمد',
      'صور الهوية الإماراتية الأصلية للشركاء والمفوضين بالتوقيع',
      'رقم هاتف وبريد إلكتروني رسمي فعال للتسجيل في بوابة إقامة دبي للشركات'
    ],
    galleryImages: COMMON_GALLERY,
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'Corporate Dossier & License Audit',
        titleAr: 'تدقيق الرخصة والملف التجاري',
        descEn: 'Inspection of trade license, MOA partners, and Ejari validity at Karama Business Center to verify complete corporate compliance.',
        descAr: 'مراجعة بيانات الرخصة وعقد التأسيس وعقد إيجاري في مركز الكرامة للأعمال للتأكد من استيفاء شروط إقامة دبي.',
        durationEn: '20 Mins',
        durationAr: '20 دقيقة',
      },
      {
        stepNumber: 2,
        titleEn: 'GDRFA Corporate File Lodgement',
        titleAr: 'تسجيل طلب بطاقة المنشأة إلكترونياً',
        descEn: 'Submission of establishment card application into the GDRFA immigration network with immediate government voucher settlement.',
        descAr: 'إرسال الطلب عبر نظام إقامة دبي وسداد الرسوم الحكومية الرسمية وإصدار رقم المعاملة اللحظي.',
        durationEn: '1 - 2 Hours',
        durationAr: '1 - 2 ساعة',
      },
      {
        stepNumber: 3,
        titleEn: 'Ministerial Approval & Smart File Activation',
        titleAr: 'الاعتماد الوزاري وتفعيل ملف المنشأة',
        descEn: 'Immigration clearance and activation of the corporate quota, enabling immediate visa processing capabilities.',
        descAr: 'صدور الموافقة الرسمية وتفعيل ملف المنشأة في نظام إقامة دبي، مما يتيح للشركة استقدام الموظفين وتثبيت الإقامات فوراً.',
        durationEn: '24 Hours',
        durationAr: '24 ساعة',
      },
      {
        stepNumber: 4,
        titleEn: 'Digital Delivery & Partner Visa Processing',
        titleAr: 'تسليم البطاقة والبدء بإقامات الشركاء',
        descEn: 'Delivery of the official electronic Establishment Card with instant transition to partner residency and medical typing.',
        descAr: 'إرسال بطاقة المنشأة الرقمية المعتمدة والبدء الفوري في طباعة إقامات الشركاء والفحص الطبي بمركز الكرامة الطبي.',
        durationEn: 'Instant',
        durationAr: 'فوري',
      },
    ],
    faqs: [
      {
        questionEn: 'How much does a new Establishment Card cost in Dubai?',
        questionAr: 'كم تبلغ تكلفة إصدار بطاقة منشأة جديدة في دبي؟',
        answerEn: 'The official statutory GDRFA fee for a new Establishment Card is AED 2,200. Standard renewal of an existing card is AED 1,050. Official government receipts are provided immediately.',
        answerAr: 'تبلغ الرسوم الحكومية الرسمية لإصدار بطاقة منشأة جديدة 2,200 درهم، ولتجديد البطاقة الحالية 1,050 درهماً، وتسلم إيصالات الدفع الحكومية للمتعامل فوراً.',
      },
      {
        questionEn: 'What happens if my company Establishment Card expires?',
        questionAr: 'ماذا يحدث في حال انتهاء صلاحية بطاقة المنشأة للشركة؟',
        answerEn: 'An expired Establishment Card freezes your company immigration file. You cannot issue new entry permits, renew employee residencies, or cancel staff until the card is renewed. We resolve renewals in 24 hours.',
        answerAr: 'يؤدي انتهاء بطاقة المنشأة إلى تجميد ملف الشركة في إقامة دبي، مما يوقف إصدار التأشيرات الجديدة وتجديد إقامات الموظفين لحين التجديد، ونحن ننجز التجديد في 24 ساعة.',
      },
      {
        questionEn: 'Can I process partner residencies at the same time as the Establishment Card?',
        questionAr: 'هل يمكنني إنجاز إقامات الشركاء بالتزامن مع إصدار بطاقة المنشأة؟',
        answerEn: 'Yes! At Karama Business Center, we synchronize the establishment card activation with partner visa typing, on-site medical at Karama Medical Center (KMFC), and ICP biometrics under one roof.',
        answerAr: 'نعم بالتأكيد! نقوم في مركز الكرامة للأعمال بالربط المباشر بين تفعيل بطاقة المنشأة وطباعة إقامات الشركاء وفحصهم الطبي بمركز الكرامة الطبي (KMFC) وبصمة الهوية.',
      },
    ],
    reviews: [
      {
        name: 'Vikram Singhania',
        roleEn: 'Managing Partner',
        roleAr: 'شريك إداري',
        companyEn: 'Singhania Cloud Solutions FZ-LLC',
        companyAr: 'سينغانيا لحلول الحوسبة السحابية',
        rating: 5,
        date: 'October 2026',
        commentEn: 'Issued our corporate establishment card through Karama Business Center. The team vetted our free zone license and activated our GDRFA portal in less than 24 hours. Then they handled my 3-year investor residency and medical at Karama Medical Center on the same day. Top notch.',
        commentAr: 'أصدرنا بطاقة المنشأة لشركتنا عبر مركز الكرامة للأعمال. دقق الفريق رخصتنا وفعلوا ملف المنشأة في أقل من 24 ساعة، ثم أنجزوا إقامتي كمستثمر وفحصي الطبي بمركز الكرامة الطبي في نفس اليوم. أداء مبهر.',
      },
      {
        name: 'Rashid Al-Blooshi',
        roleEn: 'General Manager',
        roleAr: 'مدير عام',
        companyEn: 'Al-Blooshi Electro-Mechanical LLC',
        companyAr: 'البلوشي للأعمال الكهروميكانيكية',
        rating: 5,
        date: 'September 2026',
        commentEn: 'Renewed our company card before expiration to avoid file blockage. Fast service, official GDRFA payment vouchers, and highly knowledgeable staff.',
        commentAr: 'جددنا بطاقة المنشأة قبل انتهائها لتفادي تجميد معاملات الشركة. سرعة فائقة وإيصالات رسمية وموظفون على دراية تامة بالأنظمة.',
      },
    ],
    targetKeywords: {
      shortTail: ['Establishment Card Dubai', 'Company Immigration Card', 'Amer Establishment Card', 'Renew Company Card Dubai', 'Karama Business Center KBC'],
      longTail: ['New establishment card cost Dubai GDRFA 2200 AED', 'How to renew establishment card Dubai Amer center', 'Unfreeze company immigration file establishment card Karama', 'Establishment card and investor visa typing Karama business center'],
    },
    featuredFacilityImage: {
      url: smartDeskImage,
      captionEn: 'Corporate documentation verification desk at Karama Business Center (KBC).',
      captionAr: 'منصة تدقيق الوثائق والملفات التجارية بمركز الكرامة للأعمال.',
      locationBadgeEn: 'Karama Business Center · Al Karama, Next to Post Office, Dubai',
      locationBadgeAr: 'مركز الكرامة للأعمال · الكرامة، بجوار مكتب البريد، دبي',
    },
  },

  // =========================================================================
  // 12. ESTABLISHMENT FILE BLOCK REMOVAL & QUOTA RECOVERY
  // =========================================================================
  'amer-establishment-block-removal': {
    detailedOverviewEn: `When an administrative, legal, or ministerial block is imposed on a corporate establishment file by the General Directorate of Residency and Foreigners Affairs (GDRFA Dubai), the company\'s entire immigration operation is paralyzed. Under an active establishment block, no new entry permits can be processed, existing employee residencies cannot be renewed, and partners cannot modify their visas. Common triggers for establishment blocks include expired company trade licenses, unrenewed Establishment Cards, unaddressed absconding circulars, unresolved overstay fines on cancelled employees, or missing Wages Protection System (WPS) compliance audits.

At Karama Business Center (KBC), operating under authorized Amer Center License #772 and managed by Emirates Secretarial Services (ESS), our senior immigration legal consultants specialize in identifying, resolving, and lifting corporate establishment file blocks. We conduct an exhaustive forensic audit on the GDRFA and MoHRE internal systems to pinpoint the exact violation code causing the restriction.

Our PROs prepare formal administrative lifting petitions, settle prerequisite fines through official government channels, clear historical violations, and submit the unblocking application directly to GDRFA inspection and legal affairs committees. Furthermore, because our center in Al Karama (located next to Karama Post Office) houses an all-in-one government ecosystem — including the Karama Medical Fitness Express Service Center (KMFC / Karama Medical Center), Tasheel desks, and ICP biometric typing — once your establishment block is successfully removed, we immediately restore your hiring quotas and fast-track any delayed residency renewals or new employee onboardings.`,
    detailedOverviewAr: `عند فرض حظر أو قيد إداري على ملف المنشأة من قبل الإدارة العامة للإقامة وشؤون الأجانب بدبي (GDRFA)، تتوقف كافة العمليات الحيوية للشركة؛ حيث يتعذر إصدار أي تأشيرة جديدة أو تجديد إقامات الموظفين أو تعديل وضع الشركاء. وتعود أسباب الحظر الشائعة إلى انتهاء الرخصة التجارية، أو انتهاء بطاقة المنشأة، أو وجود بلاغات هروب غير مسواة، أو غرامات تأخير متراكمة على عمالة ملغاة، أو ملاحظات تدقيق نظام حماية الأجور (WPS).

ومن خلال مركز الكرامة للأعمال (KBC) وبترخيص مركز آمر المعتمد رقم 772 تحت إدارة الإمارات لخدمات رجال الأعمال (ESS)، يتخصص مستشارونا القانونيون في كشف وإزالة ورفع القيود عن ملفات المنشآت. نجري تدقيقاً تقنياً شاملاً على خوادم إقامة دبي وتسهيل لتحديد سبب الحظر والرمز القانوني للمخالفة بدقة.

يقوم مندوبونا المعتمدون بإعداد لوائح الاسترحام الإدارية، وسداد الغرامات الواجبة، وإلغاء القيود السابقة، وتقديم طلب رفع الحظر للجان القانونية والتفتيشية بإقامة دبي. وفور فك الحظر، يتيح مقرنا المتكامل بالكرامة (بجوار بريد الكرامة) — الذي يضم مركز الكرامة للياقة الطبية السريعة (KMFC / مركز الكرامة الطبي) وتسهيل والهوية — استعادة كوتة الشركة والبدء الفوري في تجديد الإقامات المعلقة واستقدام العمالة الجديدة دون أي تأخير.`,
    legalFrameworkEn: `Federal Decree-Law No. 29 of 2021 regarding Foreigners Entry and Residence, UAE Cabinet Decision No. 65 of 2022, and GDRFA Dubai Corporate Inspection & Violation Lifting Protocols.`,
    legalFrameworkAr: `المرسوم بقانون اتحادي رقم (29) لسنة 2021، وقرار مجلس الوزراء رقم (65) لسنة 2022، واللوائح التنفيذية الصادرة عن إقامة دبي لرفع القيود وتسوية مخالفات المنشآت.`,
    eligibilityEn: [
      'Active or renewed commercial trade license and resolved Ejari premises lease in Dubai',
      'Letter of authorization / POA from company legal manager or managing partner',
      'Willingness to regularize historical overstay fines or submit administrative settlement petitions',
      'Resolution of underlying violation (renewing trade license, clearing absconding files, or updating WPS)'
    ],
    eligibilityAr: [
      'رخصة تجارية سارية أو مجددة وعقد إيجاري سكني/تجاري مصدق في دبي',
      'خطاب تفويض أو وكالة رسمية من مدير المنشأة أو الشريك المفوض بالتوقيع',
      'الجاهزية لتسوية الغرامات المعلقة أو تقديم لوائح الاسترحام الإدارية القانونية',
      'معالجة المخالفة الأصلية (تجديد الرخصة، إلغاء بلاغ هروب، أو تحديث ملف حماية الأجور)'
    ],
    galleryImages: COMMON_GALLERY,
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'Immigration Violation Diagnostic Audit',
        titleAr: 'التشخيص التقني وتحديد سبب الحظر',
        descEn: 'Electronic query across GDRFA and MoHRE internal databases at Karama Business Center to isolate exact violation codes.',
        descAr: 'استعلام إلكتروني عميق في أنظمة إقامة دبي وتسهيل بمركز الكرامة للأعمال لتحديد رمز الحظر والجهة الفارضة له.',
        durationEn: '30 Mins',
        durationAr: '30 دقيقة',
      },
      {
        stepNumber: 2,
        titleEn: 'Administrative Legal Petition Assembly',
        titleAr: 'إعداد ملف الاسترحام والتسوية القانونية',
        descEn: 'Senior immigration advisors draft formal lifting petitions and prepare supporting settlement documentation.',
        descAr: 'صياغة لوائح الاسترحام الإدارية وإرفاق المستندات المحدثة وسداد الرسوم أو الغرامات الحكومية المطلوبة.',
        durationEn: '2 - 4 Hours',
        durationAr: '2 - 4 ساعات',
      },
      {
        stepNumber: 3,
        titleEn: 'GDRFA Inspection Committee Submission',
        titleAr: 'التقديم للجان التفتيش والاعتماد',
        descEn: 'Official submission into the GDRFA legal affairs portal with tracking reference number and dedicated PRO follow-up.',
        descAr: 'رفع الطلب رسمياً للجنة المختصة بإقامة دبي ومتابعة المعاملة عبر مندوبي المركز المعتمدين.',
        durationEn: '24 - 48 Hours',
        durationAr: '24 - 48 ساعة',
      },
      {
        stepNumber: 4,
        titleEn: 'File Unblocking & Quota Restoration',
        titleAr: 'رفع الحظر رسمياً واستعادة الكوتة',
        descEn: 'Official lifting confirmation, restoration of corporate visa issuance capabilities, and immediate renewal of stalled visas.',
        descAr: 'صدور قرار رفع الحظر وتفعيل ملف الشركة بالكامل واستئناف إصدار وتجديد إقامات الموظفين فوراً.',
        durationEn: 'Same Day',
        durationAr: 'نفس اليوم',
      },
    ],
    faqs: [
      {
        questionEn: 'How long does it take to lift an establishment file block in Dubai?',
        questionAr: 'كم يستغرق رفع الحظر عن ملف المنشأة في دبي؟',
        answerEn: 'Standard administrative blocks (such as expired licenses or cards) are cleared within 24 to 48 hours once prerequisites are submitted. Complex legal or inspection blocks take 3 to 5 business days.',
        answerAr: 'يستغرق رفع الحظر الإداري البسيط (مثل انتهاء الرخصة أو البطاقة) من 24 إلى 48 ساعة بعد استكمال الأوراق، بينما تستغرق الحالات التفتيشية من 3 إلى 5 أيام عمل.',
      },
      {
        questionEn: 'What is the most common reason for a company immigration file block?',
        questionAr: 'ما هو السبب الأكثر شيوعاً لحظر ملف الشركة في الإقامة؟',
        answerEn: 'The most frequent triggers are an expired Establishment Card, an expired trade license, or unaddressed overstay fines on previously cancelled employees who did not exit the UAE.',
        answerAr: 'أكثر الأسباب شيوعاً هي انتهاء صلاحية بطاقة المنشأة، أو انتهاء الرخصة التجارية، أو وجود غرامات تأخير متراكمة على موظف ملغى لم يغادر الدولة.',
      },
      {
        questionEn: 'Can I renew delayed employee visas immediately after the block is lifted?',
        questionAr: 'هل يمكنني تجديد إقامات الموظفين المعلقة فور رفع الحظر؟',
        answerEn: 'Yes! Once the block is lifted, your file becomes active immediately. Our on-site team can type renewals, conduct medicals at Karama Medical Center (KMFC), and register biometrics without delay.',
        answerAr: 'نعم بالتأكيد! بمجرد رفع الحظر يعود الملف للحالة النشطة، ويتولى فريقنا تجديد الإقامات وفحص الموظفين بمركز الكرامة الطبي (KMFC) فوراً.',
      },
    ],
    reviews: [
      {
        name: 'Tariq Al-Ghazali',
        roleEn: 'Operations Director',
        roleAr: 'مدير العمليات',
        companyEn: 'Al-Ghazali Heavy Logistics LLC',
        companyAr: 'الغزالي للخدمات اللوجستية الثقيلة',
        rating: 5,
        date: 'October 2026',
        commentEn: 'Our company immigration file was blocked due to an old clerical fine from 2024. Karama Business Center isolated the violation, submitted an official lifting petition to GDRFA, and had our file completely unblocked in under 36 hours. Masterful legal typing.',
        commentAr: 'تم حظر ملف شركتنا بسبب غرامة قديمة تعود لسنة 2024. قام مركز الكرامة للأعمال بتحديد المشكلة وصياغة استرحام رسمي لإقامة دبي وتم رفع الحظر تماماً خلال 36 ساعة. كفاءة قانونية عالية.',
      },
      {
        name: 'Zaid Al-Husseini',
        roleEn: 'Managing Director',
        roleAr: 'العضو المنتدب',
        companyEn: 'Husseini Foodstuff Trading LLC',
        companyAr: 'الحسيني لتجارة المواد الغذائية',
        rating: 5,
        date: 'September 2026',
        commentEn: 'Saved our hiring pipeline. Within 2 days our quota was restored and we processed our pending driver visas. Emirates Secretarial Services (ESS) is second to none.',
        commentAr: 'أنقذوا خطة التعيينات في شركتنا؛ حيث استعدنا الكوتة خلال يومين وطبعنا تأشيرات السائقين المعلقة بكل سهولة.',
      },
    ],
    targetKeywords: {
      shortTail: ['Establishment Block Removal', 'Unblock Immigration File Dubai', 'Amer File Block', 'Company File Unblock', 'Karama Business Center KBC'],
      longTail: ['How to remove block on company immigration file GDRFA Dubai Amer', 'Unblock corporate quota for visa issuance Karama business center', 'Clear absconding and fine block on establishment card Amer', 'GDRFA company file inspection petition lifting Karama'],
    },
    featuredFacilityImage: {
      url: smartDeskImage,
      captionEn: 'Legal consultation desks at Karama Business Center (KBC) specializing in corporate immigration clearance.',
      captionAr: 'منصات الاستشارات القانونية بمركز الكرامة للأعمال المتخصصة في تسوية قيود ملفات الشركات.',
      locationBadgeEn: 'Karama Business Center · Al Karama, Next to Post Office, Dubai',
      locationBadgeAr: 'مركز الكرامة للأعمال · الكرامة، بجوار مكتب البريد، دبي',
    },
  },

  // =========================================================================
  // 13. GDRFA SMART PORTAL REGISTERED MOBILE NUMBER & UID UPDATE
  // =========================================================================
  'amer-portal-mobile-update': {
    detailedOverviewEn: `The registered mobile phone number linked to your Unified Identification (UID) number and GDRFA Dubai Smart Portal file is the central digital gateway for all government residency operations in the United Arab Emirates. Every critical ministerial transaction — including logging into UAE Pass, receiving One-Time Passwords (OTPs) for visa stamping, downloading digital residency permits, reviewing electronic entry visas, and tracking Emirates ID courier shipments — depends entirely on having an accurate, active UAE mobile number registered in the immigration master database.

When an individual changes their phone number, loses access to their SIM card, or had an incorrect number entered by a previous employer or typing shop, their ability to access official services is paralyzed. At Karama Business Center (KBC), operating under authorized Amer Center License #772 and managed by Emirates Secretarial Services (ESS), we provide an instant biometric identity verification and mobile number update service.

Operating directly within our facility in Al Karama (conveniently located next to Karama Post Office), our consultants authenticate your original passport and Emirates ID, access the GDRFA Dubai and Federal ICP backend portals, and update your registered primary mobile number and email address in real time. The update reflects instantaneously across government servers, allowing you to generate UAE Pass credentials immediately, sign electronic MoHRE contracts, and receive residency confirmation SMS notices. Furthermore, our co-located Karama Medical Fitness Express Service Center (KMFC / Karama Medical Center) ensures that your medical screening test results and diagnostic SMS alerts are routed directly to your updated phone number without delay.`,
    detailedOverviewAr: `يمثل رقم الهاتف المتحرك المسجل والمربط برقمك الموحد (UID) وملفك الإلكتروني لدى الإدارة العامة للإقامة وشؤون الأجانب بدبي (GDRFA) البوابة الرقمية الأساسية لكافة المعاملات الحكومية في دولة الإمارات. تعتمد كافة الإجراءات الحيوية — كالدخول للهوية الرقمية UAE Pass، واستلام رموز التحقق (OTP) لتثبيت الإقامة، وتحميل تصاريح الإقامة الرقمية، واستلام نتائج الفحص الطبي، وتتبع بطاقة الهوية — كلياً على وجود رقم هاتف صحيح ومفعل في قاعدة بيانات الإقامة.

وفي حال تغيير رقم هاتفك، أو فقدان الشريحة، أو قيام جهة العمل السابقة بتسجيل رقم خاطئ، تتعطل قدرتك على الوصول لخدماتك الحكومية. ومن خلال مركز الكرامة للأعمال (KBC) وبترخيص مركز آمر المعتمد رقم 772 تحت إدارة الإمارات لخدمات رجال الأعمال (ESS)، نقدم خدمة التحقق البيومتري والتحديث الفوري لرقم الهاتف في نظام الإقامة.

يقوم خبراؤنا في مقرنا بالكرامة (بجوار بريد الكرامة) بالتحقق من هويتك وجواز سفرك الأصلي، والدخول للأنظمة المركزية لإقامة دبي والهيئة الاتحادية، وتحديث رقم هاتفك وبريدك الإلكتروني فورياً. ينعكس التحديث لحظياً في كافة الأنظمة الحكومية لتتمكن من تفعيل UAE Pass وتوقيع عقود العمل واستلام إشعارات الإقامة فوراً. كما يضمن ذلك وصول نتائج فحصك الطبي من مركز الكرامة للياقة الطبية السريعة (KMFC / مركز الكرامة الطبي) في نفس المبنى إلى هاتفك دون أي انقطاع.`,
    legalFrameworkEn: `Federal Decree-Law No. 29 of 2021 regarding Foreigners Entry and Residence, UAE Digital Identity and Cybersecurity Standards, and GDRFA Dubai Electronic Services Regulations.`,
    legalFrameworkAr: `المرسوم بقانون اتحادي رقم (29) لسنة 2021، ومعايير الهوية الرقمية والأمن السيبراني لحكومة الإمارات، واللوائح التنفيذية للخدمات الذكية لإقامة دبي.`,
    eligibilityEn: [
      'Original Passport and Original Emirates ID card of the applicant',
      'Active UAE mobile phone number registered under the applicant name with telecom providers (e& or du)',
      'In-person presence for biometric identity authentication or authorized company PRO representation'
    ],
    eligibilityAr: [
      'جواز السفر الأصلي وبطاقة الهوية الإماراتية الأصلية للمتعامل',
      'رقم هاتف متحرك إماراتي نشط ومسجل باسم المتعامل لدى شركات الاتصالات (e& أو du)',
      'الحضور الشخصي للتحقق البيومتري من الهوية أو حضور المندوب المعتمد للشركات'
    ],
    galleryImages: COMMON_GALLERY,
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'Identity & Biometric Authentication',
        titleAr: 'التحقق البيومتري من الهوية',
        descEn: 'Inspection of original passport and verification of Emirates ID credentials at Karama Business Center.',
        descAr: 'التحقق من أصل جواز السفر وبطاقة الهوية ومطابقة البصمة بمركز الكرامة للأعمال لضمان الأمان السيبراني.',
        durationEn: '5 Mins',
        durationAr: '5 دقائق',
      },
      {
        stepNumber: 2,
        titleEn: 'GDRFA Core Database Access',
        titleAr: 'الدخول لقاعدة بيانات إقامة دبي',
        descEn: 'Senior Amer consultants query the applicant UID record across immigration and ICP master servers.',
        descAr: 'الاستعلام عن الرقم الموحد (UID) للمتعامل في الأنظمة المركزية لإقامة دبي والهيئة الاتحادية.',
        durationEn: '5 Mins',
        durationAr: '5 دقائق',
      },
      {
        stepNumber: 3,
        titleEn: 'Live OTP Verification & Number Update',
        titleAr: 'تأكيد الرمز والتحديث اللحظي',
        descEn: 'Dispatch of live security code to the new phone number and immediate ministerial database updating.',
        descAr: 'إرسال رمز التحقق الأمني للهاتف الجديد وتحديث البيانات فورياً في خوادم الإقامة.',
        durationEn: '5 Mins',
        durationAr: '5 دقائق',
      },
      {
        stepNumber: 4,
        titleEn: 'UAE Pass Synchronization & Confirmation',
        titleAr: 'مزامنة الهوية الرقمية وتسليم الإشعار',
        descEn: 'Immediate synchronization with UAE Pass and official GDRFA receipt confirming successful mobile number update.',
        descAr: 'تحديث بيانات الدخول في تطبيق UAE Pass فورياً وتسليم إشعار رسمي معتمد بنجاح التحديث.',
        durationEn: 'Instant',
        durationAr: 'فوري',
      },
    ],
    faqs: [
      {
        questionEn: 'How long does it take for the updated mobile number to reflect in UAE Pass?',
        questionAr: 'كم يستغرق انعكاس رقم الهاتف المحدث في تطبيق UAE Pass؟',
        answerEn: 'The update in the GDRFA core system is instantaneous. In most cases, UAE Pass and immigration services recognize the new mobile number within 5 to 15 minutes.',
        answerAr: 'يتم التحديث في النظام المركزي لإقامة دبي فورياً، وفي أغلب الحالات يتعرف تطبيق UAE Pass والأنظمة الحكومية على الرقم الجديد خلال 5 إلى 15 دقيقة.',
      },
      {
        questionEn: 'Can I update the mobile number for my family members or company staff?',
        questionAr: 'هل يمكنني تحديث رقم الهاتف لأفراد أسرتي أو موظفي شركتي؟',
        answerEn: 'Yes. Primary sponsors can update mobile numbers for their sponsored wife and children. Authorized company PROs can update records for corporate employees with valid trade licenses.',
        answerAr: 'نعم. يحق للكفيل تحديث أرقام أفراد أسرته المكفولين، كما يحق لمندوب الشركة المعتمد تحديث أرقام موظفي المنشأة بموجب التفويض الرسمي.',
      },
      {
        questionEn: 'Why is having the correct mobile number critical for medical fitness results?',
        questionAr: 'لماذا يعتبر تسجيل الرقم الصحيح ضرورياً لنتائج الفحص الطبي؟',
        answerEn: 'The DHA Salem system transmits medical screening certificates and status updates via SMS. Having the correct number ensures you receive your Karama Medical Center (KMFC) approval notice immediately.',
        answerAr: 'يرسل نظام سالم التابع لهيئة الصحة شهادات اللياقة الطبية وإشعارات الاعتماد عبر الرسائل القصيرة، ووجود الرقم الصحيح يضمن استلامك لنتيجة فحص مركز الكرامة الطبي (KMFC) فور صدورها.',
      },
    ],
    reviews: [
      {
        name: 'Mustafa Kamel',
        roleEn: 'Logistics Supervisor',
        roleAr: 'مشرف لوجستي',
        companyEn: 'TransMed Logistics Dubai',
        companyAr: 'ترانزميد للخدمات اللوجستية',
        rating: 5,
        date: 'October 2026',
        commentEn: 'Couldn\'t log in to my UAE Pass because of an old phone number entered by my previous company. Walked into Karama Business Center, and Amer updated my mobile in the GDRFA system in under 10 minutes. Super quick and polite.',
        commentAr: 'لم أتمكن من الدخول إلى UAE Pass بسبب رقم قديم سجلته شركتي السابقة. دخلت مركز الكرامة للأعمال وقام موظف آمر بتحديث رقمي في نظام الإقامة في أقل من 10 دقائق. خدمة سريعة جداً.',
      },
      {
        name: 'Emily Watson',
        roleEn: 'Primary School Educator',
        roleAr: 'معلمة مرحلة ابتدائية',
        companyEn: 'Dubai British Academy',
        companyAr: 'الأكاديمية البريطانية بدبي',
        rating: 5,
        date: 'September 2026',
        commentEn: 'Seamless experience. Updated my number and completed my medical test at Karama Medical Center on the same morning. Very well organized center.',
        commentAr: 'تجربة في غاية السلاسة. قمت بتحديث رقم هاتفي وأجريت فحصي الطبي بمركز الكرامة الطبي في نفس الصباح. مركز منظم ومميز.',
      },
    ],
    targetKeywords: {
      shortTail: ['Update Mobile Amer', 'GDRFA Mobile Number Update', 'Change Phone UAE Pass', 'Karama Medical Center SMS', 'Karama Business Center KBC'],
      longTail: ['How to update registered mobile number in GDRFA Dubai Amer center', 'Change phone number for UAE Pass immigration record Karama', 'Update mobile number for residency medical fitness results Karama medical center', 'Instant UID mobile number update Amer business center'],
    },
    featuredFacilityImage: {
      url: smartDeskImage,
      captionEn: 'Biometric verification and smart portal update terminal at Karama Business Center (KBC).',
      captionAr: 'منصة التحقق البيومتري وتحديث البوابات الذكية بمركز الكرامة للأعمال.',
      locationBadgeEn: 'Karama Business Center · Al Karama, Next to Post Office, Dubai',
      locationBadgeAr: 'مركز الكرامة للأعمال · الكرامة، بجوار مكتب البريد، دبي',
    },
  },

  // =========================================================================
  // 14. IMMIGRATION OVERSTAY FINE REDUCTION & LEGAL EXEMPTION PETITION
  // =========================================================================
  'amer-fine-reduction': {
    detailedOverviewEn: `Accruing overstay fines in Dubai — whether stemming from expired residency visas, cancelled employment contracts, or unextended visit/tourist permits — can place an overwhelming financial burden on individuals and corporate sponsors. Under UAE immigration regulations administered by the General Directorate of Residency and Foreigners Affairs (GDRFA Dubai), fines accumulate at a statutory rate of AED 50 per day following the expiration of the official grace period, accompanied by mandatory administrative departure and cancellation fees.

At Karama Business Center (KBC), operating under authorized Amer Center License #772 and managed by Emirates Secretarial Services (ESS), our dedicated immigration legal department specializes in assembling, submitting, and negotiating Overstay Fine Reduction Petitions (in Arabic: "Talab Istirham"). We assist foreign residents, tourists, families, and commercial establishments in regularizing their legal standing through official humanitarian channels, frequently securing reductions of 50% to over 90% of accumulated fine amounts.

Our senior legal typists conduct an exhaustive diagnostic audit of your immigration file in our private consultation suites in Al Karama (located next to Karama Post Office). We evaluate valid statutory grounds for reduction: medical emergencies, sudden hospitalization, unforeseen corporate bankruptcy, employer disputes, travel restrictions, humanitarian domestic hardships, or birth complications. We draft formal, compelling Arabic legal petitions with certified supporting evidence, submitting the file directly to the GDRFA Fine Reduction Committee. Once your fine reduction voucher is approved and settled, our campus — which integrates the Karama Medical Fitness Express Service Center (KMFC / Karama Medical Center), Tasheel desks, and ICP biometrics — seamlessly transitions you into a new residency visa via an in-country status change, or generates your official out-pass exit clearance with complete dignity.`,
    detailedOverviewAr: `تعتبر غرامات البقاء غير القانوني (غرامات التأخير) في دبي — سواء الناتجة عن انتهاء الإقامة، أو إلغاء عقود العمل، أو انتهاء تأشيرات الزيارة والسياحة — عبئاً مالياً وقانونياً كبيراً على الأفراد والشركات. ووفقاً للوائح الإدارة العامة للإقامة وشؤون الأجانب بدبي (GDRFA)، تحتسب غرامة قدرها 50 درهماً يومياً بعد انتهاء فترة السماح الرسمية، بالإضافة للرسوم الإدارية.

ومن خلال مركز الكرامة للأعمال (KBC) وبترخيص مركز آمر المعتمد رقم 772 تحت إدارة الإمارات لخدمات رجال الأعمال (ESS)، يتخصص قسم الشؤون القانونية الإنسانية لدينا في إعداد ورفع ومتابعة طلبات تخفيض وإعفاء غرامات الإقامة والزيارة (طلبات الاسترحام). نساعد المقيمين والزوار والعائلات والشركات على تصحيح أوضاعهم القانونية رسمياً، وغالباً ما ننجح في الحصول على تخفيضات تتراوح بين 50% وتتجاوز 90% من إجمالي مبالغ الغرامات.

يجري مستشارونا تدقيقاً قانونياً شاملاً لملفك في قاعات الاستشارة الخاصة بالكرامة (بجوار بريد الكرامة)؛ حيث ندرس الأسباب الإنسانية المؤيدة للتخفيض: كالحالات المرضية، أو تعثر جهة العمل، أو القضايا العمالية، أو الظروف الأسرية القاهرة. نصيغ طلب الاسترحام باللغة العربية القانونية المعتمدة ونرفعه مباشرة للجنة تخفيض الغرامات بإقامة دبي. وفور صدور قرار التخفيض وسداد المبلغ المخفض، يتيح مقرنا — الذي يضم مركز الكرامة للياقة الطبية السريعة (KMFC / مركز الكرامة الطبي) وتسهيل والهوية — تعديل وضعك لإقامة جديدة أو استخراج تصريح المغادرة الرسمي بكل يسر.`,
    legalFrameworkEn: `Federal Decree-Law No. 29 of 2021 regarding Foreigners Entry and Residence, UAE Cabinet Decision No. 65 of 2022, and GDRFA Dubai Fine Exemption & Humanitarian Committee Directives.`,
    legalFrameworkAr: `المرسوم بقانون اتحادي رقم (29) لسنة 2021، وقرار مجلس الوزراء رقم (65) لسنة 2022، واللوائح التنظيمية للجنة الاسترحام وتخفيض الغرامات بإقامة دبي.`,
    eligibilityEn: [
      'Accumulated overstay fines resulting from expired visit visa, tourist visa, or cancelled residence permit in Dubai',
      'Original Passport copy of the applicant and active immigration unified file number (UID)',
      'Substantiated supporting evidence of hardship (medical reports, hospitalization discharge letters, court certificates, or financial proof)',
      'Intention to either regularize status via a new residency visa or exit the UAE legally via an official outpass'
    ],
    eligibilityAr: [
      'وجود غرامات تأخير متراكمة ناتجة عن انتهاء تأشيرة زيارة أو سياحة أو إقامة ملغاة في دبي',
      'نسخة جواز السفر الأصلي والرقم الموحد (UID) المسجل في نظام الإقامة',
      'تقديم المستندات والوثائق المؤيدة للظرف الإنساني (تقارير طبية، شهادات من المحاكم، أو إثباتات التعثر)',
      'الرغبة في تصحيح الوضع بإصدار إقامة جديدة أو المغادرة القانونية للدولة بتصريح خروج'
    ],
    galleryImages: COMMON_GALLERY,
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'Fine Audit & Hardship Assessment',
        titleAr: 'تدقيق الغرامات وتقييم الحالة الإنسانية',
        descEn: 'Confidential review of immigration files, calculating total fines and structuring supporting humanitarian evidence at Karama Business Center.',
        descAr: 'استعلام إلكتروني سري لمعرفة إجمالي الغرامات بدقة ودراسة المستندات والظروف الإنسانية المؤيدة للاسترحام.',
        durationEn: '20 Mins',
        durationAr: '20 دقيقة',
      },
      {
        stepNumber: 2,
        titleEn: 'Arabic Legal Petition Drafting',
        titleAr: 'صياغة لائحة الاسترحام القانونية',
        descEn: 'Senior legal typists draft a formal Arabic petition highlighting legal grounds and humanitarian distress for the ministerial committee.',
        descAr: 'صياغة استرحام رسمي باللغة العربية الرصينة وتنسيق الأدلة لرفعها للجنة القضائية والإنسانية بإقامة دبي.',
        durationEn: '1 - 2 Hours',
        durationAr: '1 - 2 ساعة',
      },
      {
        stepNumber: 3,
        titleEn: 'GDRFA Committee Submission & Review',
        titleAr: 'التقديم للجنة تخفيض الغرامات',
        descEn: 'Direct lodgement into the GDRFA Fine Reduction portal with dedicated tracking token and senior PRO liaison.',
        descAr: 'إرسال الملف عبر البوابة الرسمية للجنة تخفيض الغرامات مع متابعة مستمرة من مسؤولي العلاقات الحكومية لدينا.',
        durationEn: '2 - 5 Days',
        durationAr: '2 - 5 أيام',
      },
      {
        stepNumber: 4,
        titleEn: 'Discount Voucher Issuance & Regularization',
        titleAr: 'صدور قرار التخفيض وتصحيح الوضع',
        descEn: 'Generation of the official discounted payment voucher, fine settlement, and immediate transition to status change or outpass exit.',
        descAr: 'صدور إشعار السداد المخفض رسمياً وسداد المبلغ، والبدء الفوري في تعديل الوضع لإقامة جديدة أو تصريح المغادرة.',
        durationEn: 'Same Day',
        durationAr: 'نفس اليوم',
      },
    ],
    faqs: [
      {
        questionEn: 'How much discount can I get on my UAE overstay fines?',
        questionAr: 'كم تبلغ نسبة التخفيض التي يمكن الحصول عليها لغرامات التأخير؟',
        answerEn: 'Fine reductions are granted on a case-by-case basis by the GDRFA Humanitarian Committee. Reductions typically range from 50% to over 90% depending on the compelling nature of your supporting medical, financial, or legal documents.',
        answerAr: 'تحدد لجنة الاسترحام بإقامة دبي نسبة التخفيض وفق دراسة كل حالة، وتتراوح النسب عادة بين 50% وتتجاوز 90% في الحالات الإنسانية والمرضية المثبتة رسمياً.',
      },
      {
        questionEn: 'What happens after my fine is reduced?',
        questionAr: 'ماذا يحدث بعد صدور قرار تخفيض الغرامات؟',
        answerEn: 'You are granted an official discounted voucher valid for a specified window (typically 5 to 7 days). Once paid, you can either stamp a new residency visa with medical at Karama Medical Center (KMFC) or depart the UAE without a ban.',
        answerAr: 'يصدر إيصال رسمي بالمبلغ المخفض صالح لفترة محددة (عادة من 5 إلى 7 أيام). وبمجرد سداده يمكنك تثبيت إقامة جديدة مع الفحص الطبي بمركز الكرامة الطبي (KMFC) أو المغادرة بسلام.',
      },
      {
        questionEn: 'Will I get an immigration ban if I pay reduced fines and leave?',
        questionAr: 'هل يفرض عليّ حرمان من دخول الدولة إذا سددت الغرامة المخفضة وغادرت؟',
        answerEn: 'Under approved legal fine reduction and outpass exit procedures handled by Amer, departing applicants do not receive an automatic ban, preserving your legal right to return to Dubai on future employment or visit visas.',
        answerAr: 'عند المغادرة بموجب قرار استرحام رسمي وتصريح خروج معتمد عبر مركز آمر، لا يتم فرض حرمان تلقائي، مما يحفظ حقك في العودة للدولة مستقبلاً بتأشيرات جديدة.',
      },
    ],
    reviews: [
      {
        name: 'Carlos Mendoza',
        roleEn: 'Executive Chef',
        roleAr: 'رئيس طهاة تنفيذي',
        companyEn: 'Mendoza Hospitality Ventures',
        companyAr: 'ميندوزا للضيافة',
        rating: 5,
        date: 'October 2026',
        commentEn: 'Had accumulated AED 18,500 in overstay fines after my previous sponsor went bankrupt. The legal team at Karama Business Center prepared my istirham petition with hospital records. GDRFA reduced the fine to AED 1,800. Then I changed my status to my new restaurant sponsorship and did my medical at Karama Medical Center in the same building. Absolute miracle.',
        commentAr: 'تراكمت عليّ غرامات تأخير بقيمة 18,500 درهم بعد تعثر كفيلي السابق. أعد فريق مركز الكرامة للأعمال استرحاماً قانونياً مدعماً بالتقارير، فخفضت إقامة دبي الغرامة إلى 1,800 درهم فقط! ثم عدلت وضعي وأجريت فحصي الطبي بمركز الكرامة الطبي بنفس المقر. خدمة منقذة للحياة.',
      },
      {
        name: 'Amina Al-Sayed',
        roleEn: 'Family Sponsor',
        roleAr: 'كفيل أسرة',
        companyEn: 'Al-Sayed Trading',
        companyAr: 'السيد للتجارة',
        rating: 5,
        date: 'September 2026',
        commentEn: 'Reduced my dependent daughter\'s delayed visa fines by over 80%. Emirates Secretarial Services (ESS) is honest, transparent, and delivers real results.',
        commentAr: 'نجحوا في تخفيض غرامات تأشيرة ابنتي بأكثر من 80%. الإمارات لخدمات رجال الأعمال (ESS) يتميزون بالصدق والنتائج الحقيقية.',
      },
    ],
    targetKeywords: {
      shortTail: ['Fine Reduction Dubai', 'Overstay Fine Waiver', 'Amer Istirham Petition', 'Karama Medical Center Status Change', 'Karama Business Center KBC'],
      longTail: ['How to apply for visa fine reduction in Dubai Amer center', 'Istirham petition for overstay fines GDRFA Karama business center', 'Reduce overstay fine and change status Karama medical center KMFC', 'Humanitarian fine waiver Dubai immigration Amer center'],
    },
    featuredFacilityImage: {
      url: vipMajlisImage,
      captionEn: 'Private consultation lounge at Karama Business Center (KBC) handling confidential fine reduction petitions.',
      captionAr: 'صالة الاستشارات الخاصة بمركز الكرامة للأعمال لإعداد طلبات الاسترحام وتخفيض الغرامات بسرية تامة.',
      locationBadgeEn: 'Karama Business Center · Al Karama, Next to Post Office, Dubai',
      locationBadgeAr: 'مركز الكرامة للأعمال · الكرامة، بجوار مكتب البريد، دبي',
    },
  },

  // =========================================================================
  // 15. ABSCONDING CIRCULAR WITHDRAWAL & STATUS REGULARIZATION
  // =========================================================================
  'amer-absconding-removal': {
    detailedOverviewEn: `An absconding circular (officially categorized in UAE immigration law as an Escape or Work Abandonment Report — "Ta'meem Huroob") is one of the most severe administrative restrictions that can be registered against a foreign employee or domestic worker under the General Directorate of Residency and Foreigners Affairs (GDRFA Dubai) and the Ministry of Human Resources and Emiratisation (MoHRE). When an absconding report is active, the individual\'s immigration profile is completely blacklisted: they are subject to immediate detention, entry bans, and severe financial penalties, and cannot legally work, travel, or renew any visa in the UAE.

At Karama Business Center (KBC), operating under authorized Amer Center License #772 and managed by Emirates Secretarial Services (ESS), our experienced immigration legal typists handle the official withdrawal, legal cancellation, and humanitarian clearance of absconding reports. We perform an initial forensic status inquiry to determine whether the circular was filed maliciously, mistakenly, or without proper legal notice.

Our team drafts formal settlement agreements between sponsors and employees, compiles non-objection documentation, prepares official withdrawal petitions, and submits the cancellation requests directly to MoHRE labour dispute departments and the GDRFA Legal Affairs Committee. Once the absconding report is withdrawn and the blacklist is cleared from the immigration database, our all-in-one center in Al Karama (located next to Karama Post Office) facilitates immediate status regularization. Through our on-site Karama Medical Fitness Express Service Center (KMFC / Karama Medical Center) and ICP biometrics terminals, applicants can execute an in-country status change to a new employer or arrange dignified exit clearance without detention or permanent ban.`,
    detailedOverviewAr: `يعد بلاغ الانقطاع عن العمل (المعروف قانونياً ببلاغ الهروب أو التعميم الإداري) أحد أشد القيود القانونية التي يمكن تسجيلها ضد العامل أو المكفول لدى الإدارة العامة للإقامة وشؤون الأجانب بدبي (GDRFA) ووزارة الموارد البشرية والتوطين (تسهيل). يؤدي وجود بلاغ هروب نشط إلى إدراج اسم المتعامل في القائمة السوداء، مما يمنعه تماماً من العمل أو تجديد الإقامة أو السفر، ويعرضه للتبعات القانونية والغرامات.

ومن خلال مركز الكرامة للأعمال (KBC) وبترخيص مركز آمر المعتمد رقم 772 تحت إدارة الإمارات لخدمات رجال الأعمال (ESS)، يتولى مستشارونا القانونيون إجراءات السحب القانوني والإلغاء الرسمي لبلاغات الهروب وتسوية الأوضاع. نقوم بإجراء فحص تقني دقيق لمعرفة تاريخ البلاغ وأسبابه وما إذا كان كيدياً أو صادراً دون إخطار قانوني سليم.

يتولى فريقنا صياغة اتفاقيات التسوية الودية، وإعداد خطابات التنازل الرسمية، ورفع لوائح إلغاء التعميم للجان القانونية بوزارة الموارد البشرية وإقامة دبي. وفور رفع البلاغ وإلغاء القيد من السجلات، يتيح مركزنا المتكامل بالكرامة (بجوار بريد الكرامة) — الذي يحتضن مركز الكرامة للياقة الطبية السريعة (KMFC / مركز الكرامة الطبي) ومكاتب الهوية — تعديل وضع المتعامل ونقله لكفيل جديد أو إتمام إجراءات المغادرة الآمنة دون توقيف أو حرمان دائم.`,
    legalFrameworkEn: `Federal Decree-Law No. 33 of 2021 regarding Regulation of Labour Relations, Federal Decree-Law No. 29 of 2021 on Foreigners Entry, and GDRFA Dubai Absconding Withdrawal Guidelines.`,
    legalFrameworkAr: `المرسوم بقانون اتحادي رقم (33) لسنة 2021 بشأن علاقات العمل، والمرسوم بقانون اتحادي رقم (29) لسنة 2021 بشأن دخول الأجانب، واللوائح التنفيذية لإلغاء التعاميم بإقامة دبي.`,
    eligibilityEn: [
      'Active absconding report registered under GDRFA Dubai or MoHRE labour systems',
      'Mutual settlement agreement or letter of withdrawal from the previous corporate sponsor or individual',
      'Or proof of malicious/unlawful filing (proof of active presence, hospital confinement, or unpaid salary disputes)',
      'Commitment to regularize residency status via a new employer or depart legally via an official outpass'
    ],
    eligibilityAr: [
      'وجود تعميم أو بلاغ انقطاع عن العمل نشط مسجل في نظام إقامة دبي أو وزارة الموارد البشرية',
      'اتفاق تسوية ودية أو خطاب تنازل وسحب رسمي من الكفيل السابق أو الشركة',
      'أو إثبات كيدية البلاغ (كإثبات التواجد على رأس العمل، أو تقارير طبية، أو شكاوى عمالية معلقة)',
      'الاستعداد لتصحيح الوضع بنقل الكفالة لجهة عمل جديدة أو المغادرة الرسمية بتصريح خروج'
    ],
    galleryImages: COMMON_GALLERY,
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'Absconding Record Diagnostic Audit',
        titleAr: 'التدقيق التقني وتحديد جهة التعميم',
        descEn: 'Confidential system check on GDRFA and MoHRE databases at Karama Business Center to verify file dates and violation categories.',
        descAr: 'استعلام إلكتروني سري لمعرفة جهة البلاغ (إقامة دبي أم تسهيل) وتاريخ تسجيله والشروط الواجبة لإلغائه.',
        durationEn: '20 Mins',
        durationAr: '20 دقيقة',
      },
      {
        stepNumber: 2,
        titleEn: 'Legal Settlement & Withdrawal Assembly',
        titleAr: 'تجهيز ملف التسوية والتنازل القانوني',
        descEn: 'Drafting formal withdrawal petitions, sponsor release forms, and compiling humanitarian justification evidence.',
        descAr: 'صياغة اتفاقيات التسوية وخطابات التنازل القانونية وإرفاق المستندات المؤيدة لإلغاء التعميم.',
        durationEn: '1 - 2 Days',
        durationAr: '1 - 2 يوم',
      },
      {
        stepNumber: 3,
        titleEn: 'MoHRE & GDRFA Committee Lodgement',
        titleAr: 'التقديم للجان القانونية بإقامة دبي وتسهيل',
        descEn: 'Submission to ministerial dispute committees with dedicated PRO representation and tracking token generation.',
        descAr: 'تقديم الطلب للجان القانونية بوزارة الموارد البشرية وإقامة دبي والمتابعة المباشرة عبر مندوبي المركز.',
        durationEn: '2 - 4 Days',
        durationAr: '2 - 4 أيام',
      },
      {
        stepNumber: 4,
        titleEn: 'Circular Lifting & Status Regularization',
        titleAr: 'رفع التعميم وتصحيح الوضع الرسمي',
        descEn: 'Official removal of blacklist status, followed by immediate status change or new visa medical at Karama Medical Center.',
        descAr: 'صدور قرار رفع البلاغ وإلغاء التعميم من النظام، والبدء الفوري في تعديل الوضع وفحص اللياقة بمركز الكرامة الطبي.',
        durationEn: 'Same Day',
        durationAr: 'نفس اليوم',
      },
    ],
    faqs: [
      {
        questionEn: 'Can an absconding circular be withdrawn without the previous sponsor?',
        questionAr: 'هل يمكن إلغاء بلاغ الهروب دون موافقة الكفيل السابق؟',
        answerEn: 'If the report was registered maliciously, during an active labor court dispute, or while the employee was on documented medical leave, our legal team can petition MoHRE and GDRFA for an administrative cancellation without the previous sponsor.',
        answerAr: 'إذا ثبت أن البلاغ كيدي أو قيد أثناء وجود نزاع عمالي بالمحكمة أو خلال إجازة مرضية موثقة، يمكن لفريقنا رفع تظلم للوزارة وإلغاء البلاغ إدارياً دون موافقة الكفيل السابق.',
      },
      {
        questionEn: 'Can I transfer to a new job after my absconding report is cancelled?',
        questionAr: 'هل يحق لي الانتقال لعمل جديد بعد إلغاء بلاغ الهروب؟',
        answerEn: 'Yes! Once the circular is officially lifted, your immigration record is cleared. You can process a new employment permit, execute an in-country status change, and complete your medical test at Karama Medical Center (KMFC).',
        answerAr: 'نعم بالتأكيد! فور رفع البلاغ يُلغى اسمك من القائمة السوداء، ويمكنك إصدار تصريح عمل جديد وتعديل وضعك وإجراء فحصك الطبي بمركز الكرامة الطبي (KMFC).',
      },
      {
        questionEn: 'Will I be arrested at the airport if an absconding report is active?',
        questionAr: 'هل يتم توقيفي في المطار إذا كان بلاغ الهروب نشطاً؟',
        answerEn: 'Yes, an active absconding circular triggers immediate border interception. You must have the circular formally cancelled and obtain an official outpass before attempting travel.',
        answerAr: 'نعم، يؤدي وجود بلاغ هروب نشط إلى التوقيف في المنافذ والمطارات. ولذلك يجب تسوية البلاغ وإلغاؤه رسمياً أو استخراج تصريح خروج معتمد قبل السفر.',
      },
    ],
    reviews: [
      {
        name: 'Bilal Farooq',
        roleEn: 'Senior Site Foreman',
        roleAr: 'مشرف مواقع أول',
        companyEn: 'Al-Farooq Contracting',
        companyAr: 'الفاروق للمقاولات',
        rating: 5,
        date: 'October 2026',
        commentEn: 'Had an absconding circular filed against me by a subcontractor who vanished. Karama Business Center proved the report was fraudulent, had it completely removed by GDRFA, and transferred me to my new engineering firm. They literally saved my life in Dubai.',
        commentAr: 'سجل ضدي بلاغ هروب كيدي من مقاول باطن اختفى عن الأنظار. أثبت مركز الكرامة للأعمال كيدية البلاغ وألغته إقامة دبي تماماً، ونقلوا كفالتي لشركة هندسية جديدة. أنقذوا مستقبلي في دبي.',
      },
      {
        name: 'Nadia Cherif',
        roleEn: 'Executive Assistant',
        roleAr: 'مساعد تنفيذي',
        companyEn: 'Cherif Hospitality Consulting',
        companyAr: 'الشريف للاستشارات',
        rating: 5,
        date: 'September 2026',
        commentEn: 'Extremely professional and discreet. Handled our corporate settlement and lifted the circular within four business days. Outstanding expertise.',
        commentAr: 'احترافية وسرية بالغة. أداروا التسوية ورفعوا التعميم خلال 4 أيام عمل بكل هدوء وثقة.',
      },
    ],
    targetKeywords: {
      shortTail: ['Absconding Removal Dubai', 'Cancel Huroob UAE', 'Amer Absconding Removal', 'Karama Medical Center Regularization', 'Karama Business Center KBC'],
      longTail: ['How to remove absconding report in Dubai GDRFA Amer center', 'Cancel malicious absconding circular MoHRE Karama business center', 'Clear blacklist absconding and change visa status Karama medical center', 'Outpass exit after absconding cancellation Dubai Amer'],
    },
    featuredFacilityImage: {
      url: vipMajlisImage,
      captionEn: 'Private legal arbitration suite at Karama Business Center (KBC) resolving absconding and immigration circulars.',
      captionAr: 'قاعة الاستشارات والتسويات القانونية الخاصة بمركز الكرامة للأعمال لإلغاء التعاميم وبلاغات الانقطاع.',
      locationBadgeEn: 'Karama Business Center · Al Karama, Next to Post Office, Dubai',
      locationBadgeAr: 'مركز الكرامة للأعمال · الكرامة، بجوار مكتب البريد، دبي',
    },
  },

  // =========================================================================
  // 16. UNIFIED NUMBER (UID) MERGE & FEDERAL FILE CONSOLIDATION
  // =========================================================================
  'amer-unified-file-federal-visa': {
    detailedOverviewEn: `The Unified Identification (UID) number is the master nine-digit personal record assigned by the United Arab Emirates federal government to every foreign national upon entering the country. Issued through the Federal Authority for Identity, Citizenship, Customs and Port Security (ICP) and the General Directorate of Residency and Foreigners Affairs (GDRFA Dubai), the UID links all historic visas, border entry stamps, Emirates ID biometrics, traffic files, and criminal clearances to a single individual identity.

However, when an individual enters the UAE through different emirates (such as arriving via Abu Dhabi International Airport or Sharjah Airport before taking employment in Dubai), changes passports, or has minor spelling discrepancies in their biographical data, the government database frequently generates duplicate UID numbers. Having duplicate UID files paralyzes the residency process: it prevents Emirates ID card printing, causes system errors during status change, blocks UAE Pass authentication, and delays visa stamping.

At Karama Business Center (KBC), operating under authorized Amer Center License #772 and managed by Emirates Secretarial Services (ESS), we provide an express UID Merge and Federal File Consolidation service. Our certified typists access the core ICP federal database and GDRFA Dubai immigration network to identify all secondary or fragmented files. We merge duplicate records into one permanent primary UID, synchronize biographical records, and eliminate system conflicts. Furthermore, because our center in Al Karama (located next to Karama Post Office) houses the Karama Medical Fitness Express Service Center (KMFC / Karama Medical Center) and ICP biometrics desks, once your UID is unified, you immediately proceed to medical fitness screening and biometric fingerprint capture without further bureaucratic hurdles.`,
    detailedOverviewAr: `يمثل الرقم الموحد (Unified Number - UID) الرقم التعريفي السيادي المكون من 9 أرقام الذي تمنحه الهيئة الاتحادية للهوية والجنسية (ICP) والإدارة العامة للإقامة وشؤون الأجانب (GDRFA) لكل وافد يدخل دولة الإمارات. يربط هذا الرقم الموحد كافة السجلات التاريخية للجوازات، وأذونات الدخول، وبصمات الهوية، والملفات المرورية والأمنية بشخص واحد.

ولكن عند دخول المتعامل للدولة عبر منافذ إمارات مختلفة (كالدخول عبر مطار أبوظبي أو الشارقة ثم العمل في دبي)، أو عند تجديد الجواز وتغير الاسم الإنجليزي طفيفاً، يقوم النظام تلقائياً بإنشاء رقمين موحدين مختلفين للشخص نفسه (تعدد الرقم الموحد). ويؤدي هذا التضارب إلى تجميد المعاملات: كتعذر طباعة بطاقة الهوية، وفشل تعديل الوضع، وتعطيل تطبيق UAE Pass، وتوقف تثبيت الإقامة.

ومن خلال مركز الكرامة للأعمال (KBC) وبترخيص مركز آمر المعتمد رقم 772 تحت إدارة الإمارات لخدمات رجال الأعمال (ESS)، نقدم خدمة الدمج الفوري للأرقام الموحدة وتوحيد الملفات الاتحادية. يدخل خبراؤنا إلى خوادم الهيئة الاتحادية وإقامة دبي لدمج الملفات المكررة في رقم موحد أصيل ودائم. وبمجرد اكتمال الدمج، يتيح مقرنا المتكامل بالكرامة (بجوار بريد الكرامة) — الذي يضم مركز الكرامة للياقة الطبية السريعة (KMFC / مركز الكرامة الطبي) ومكاتب البصمة — التوجه المباشر للفحص الطبي وطباعة الهوية وتثبيت الإقامة بسلاسة مطلقة.`,
    legalFrameworkEn: `Federal Decree-Law No. 29 of 2021 regarding Foreigners Entry and Residence, ICP Federal Identity Regulations, and GDRFA Dubai Unified Database Protocols.`,
    legalFrameworkAr: `المرسوم بقانون اتحادي رقم (29) لسنة 2021، واللوائح المنظمة للهوية الاتحادية وقواعد البيانات المركزية للهيئة الاتحادية وإقامة دبي.`,
    eligibilityEn: [
      'Individual possessing duplicate UID numbers in UAE immigration databases',
      'Current and historic passport copies showing previous UAE entry stamps or visas',
      'Original Emirates ID card (if previously issued) or visa cancellation vouchers',
      'Presence of conflicting records between GDRFA Dubai and federal ICP emirates (Abu Dhabi, Sharjah, etc.)'
    ],
    eligibilityAr: [
      'وجود رقمين موحدين أو أكثر لنفس الشخص في قواعد بيانات الإقامة والهيئة الاتحادية',
      'نسخ جوازات السفر الحالية والسابقة موضحاً بها أختام وتأشيرات الدخول السابقة للدولة',
      'بطاقة الهوية الإماراتية الأصلية (إن وجدت سابقاً) أو إيصالات إلغاء الإقامات السابقة',
      'وجود تضارب في البيانات بين إقامة دبي وإمارات الدولة الأخرى (أبوظبي، الشارقة، عجمان)'
    ],
    galleryImages: COMMON_GALLERY,
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'UID Database Diagnostic Check',
        titleAr: 'الفحص التقني واكتشاف التكرار',
        descEn: 'Electronic query across ICP and GDRFA master databases at Karama Business Center to detect all duplicate and fragmented files.',
        descAr: 'استعلام إلكتروني شامل في قواعد بيانات الهيئة الاتحادية وإقامة دبي بمركز الكرامة للأعمال لحصر كافة الأرقام المكررة.',
        durationEn: '10 Mins',
        durationAr: '10 دقائق',
      },
      {
        stepNumber: 2,
        titleEn: 'Federal File Consolidation Submission',
        titleAr: 'إرسال طلب دمج الملفات الاتحادية',
        descEn: 'Senior Amer consultants lodge the electronic consolidation petition, linking all historic visas to the primary passport identity.',
        descAr: 'رفع طلب الدمج الرسمي إلكترونياً وربط كافة التأشيرات السابقة برقم الجواز الأساسي المعتمد.',
        durationEn: '30 Mins',
        durationAr: '30 دقيقة',
      },
      {
        stepNumber: 3,
        titleEn: 'Ministerial Database Synchronization',
        titleAr: 'المزامنة والاعتماد الحكومي المركزي',
        descEn: 'Central approval consolidating the duplicate files into one single permanent UID across UAE Pass and immigration records.',
        descAr: 'اعتماد الدمج مركزياً وتوحيد السجل في رقم موحد دائم ينعكس فوراً في تطبيق UAE Pass وإقامة دبي.',
        durationEn: '1 - 2 Hours',
        durationAr: '1 - 2 ساعة',
      },
      {
        stepNumber: 4,
        titleEn: 'Immediate Medical & Biometrics',
        titleAr: 'المتابعة للفحص الطبي وبصمة الهوية',
        descEn: 'Instant progression to Emirates ID printing, on-site medical at Karama Medical Center (KMFC), and final residency stamping.',
        descAr: 'الانتقال الفوري لطباعة الهوية وإنجاز الفحص الطبي بمركز الكرامة الطبي (KMFC) وتثبيت الإقامة دون أي عوائق.',
        durationEn: '2 - 24 Hours',
        durationAr: '2 - 24 ساعة',
      },
    ],
    faqs: [
      {
        questionEn: 'Why do I have two different UID numbers in the UAE?',
        questionAr: 'لماذا لدي رقمان موحدان (UID) مختلفان في دولة الإمارات؟',
        answerEn: 'Duplicate UIDs occur when entering the UAE through different emirates (e.g., Abu Dhabi vs. Dubai), renewing your passport with slight name variations, or having an entry permit typed with conflicting biographical details.',
        answerAr: 'يحدث تكرار الرقم الموحد عند دخول الدولة عبر منافذ إمارات مختلفة (مثل أبوظبي ودبي)، أو عند تجديد الجواز وتغير تهجئة الاسم، أو حدوث خطأ طباعي في بيانات الجواز.',
      },
      {
        questionEn: 'How long does an official UID merge take at Karama Business Center?',
        questionAr: 'كم يستغرق إنجاز دمج الرقم الموحد في مركز الكرامة للأعمال؟',
        answerEn: 'Most UID consolidation requests submitted through our direct Amer server link are approved and synchronized within 1 to 2 hours, allowing you to proceed immediately with your Emirates ID and residency.',
        answerAr: 'تُعتمد أغلب طلبات دمج الأرقام الموحدة عبر نظام آمر المباشر لدينا خلال ساعة إلى ساعتين، مما يتيح لك استكمال طباعة الهوية والإقامة فوراً.',
      },
      {
        questionEn: 'Can I do my medical test at Karama Medical Center right after the UID is merged?',
        questionAr: 'هل يمكنني إجراء الفحص الطبي بمركز الكرامة الطبي فور دمج الرقم الموحد؟',
        answerEn: 'Yes! The Karama Medical Fitness Express Service Center (KMFC / Karama Medical Center) is co-located inside Karama Business Center. Once your UID is unified, you can complete your blood test and chest X-ray in minutes.',
        answerAr: 'نعم بالتأكيد! يقع مركز الكرامة للياقة الطبية السريعة (KMFC / مركز الكرامة الطبي) داخل مركز الكرامة للأعمال، وبمجرد دمج الرقم تنجز فحصك الطبي في دقائق.',
      },
    ],
    reviews: [
      {
        name: 'Henrik Vestergaard',
        roleEn: 'Senior Logistics Specialist',
        roleAr: 'أخصائي لوجستي أول',
        companyEn: 'Danish Maritime Logistics',
        companyAr: 'الدانماركية للخدمات البحرية',
        rating: 5,
        date: 'October 2026',
        commentEn: 'My new Dubai residency was completely blocked because I had entered via Abu Dhabi on a business trip 3 years ago and had a duplicate UID. Karama Business Center merged both files in 90 minutes. I walked downstairs to Karama Medical Center, did my express medical, and had my residency stamped the next day. Masterful work.',
        commentAr: 'توقفت إقامتي بدبي بسبب دخولي عبر أبوظبي قبل 3 سنوات ووجود رقم موحد مكرر. قام مركز الكرامة للأعمال بدمج الرقمين في 90 دقيقة، ونزلت لمركز الكرامة الطبي وأجريت فحصي واعتمدت إقامتي في اليوم التالي. كفاءة مذهلة.',
      },
      {
        name: 'Naveen Rajan',
        roleEn: 'Financial Analyst',
        roleAr: 'محلل مالي',
        companyEn: 'Rajan & Sons Financial',
        companyAr: 'راجان وأولاده المالية',
        rating: 5,
        date: 'September 2026',
        commentEn: 'Prompt, efficient, and reliable. Merged my conflicting immigration records without sending me to distant ministries. Outstanding service.',
        commentAr: 'خدمة سريعة وموثوقة للغاية. دمجوا سجلاتي المكررة دون توجيهي لأي دائرة خارجية. شكراً جزيلاً.',
      },
    ],
    targetKeywords: {
      shortTail: ['UID Merge Dubai', 'Unify Number UAE', 'Merge Immigration File', 'Amer UID Merge', 'Karama Business Center KBC'],
      longTail: ['How to merge duplicate UID numbers in Dubai Amer center', 'Unify Abu Dhabi and Dubai immigration files Karama business center', 'Fix duplicate UID for Emirates ID and medical test Karama medical center KMFC', 'Resolve conflicting UID for UAE Pass login Amer'],
    },
    featuredFacilityImage: {
      url: smartDeskImage,
      captionEn: 'Unified government data processing desk at Karama Business Center (KBC).',
      captionAr: 'منصة معالجة البيانات الحكومية الموحدة بمركز الكرامة للأعمال.',
      locationBadgeEn: 'Karama Business Center · Al Karama, Next to Post Office, Dubai',
      locationBadgeAr: 'مركز الكرامة للأعمال · الكرامة، بجوار مكتب البريد، دبي',
    },
  },

  // =========================================================================
  // 17. FLAGSHIP SALEM MEDICAL - DHA Results (KMFC / Karama Medical Center)
  // =========================================================================
  'salem-results-2hr-6hr-24hr': {
    detailedOverviewEn: `The Dubai Health Authority (DHA) Residency Medical Fitness Screening is a mandatory sovereign prerequisite for all expatriate residents seeking to issue or renew their UAE residence visa, Golden Visa, or employment permit in Dubai. Testing evaluates applicants for infectious and communicable diseases (including pulmonary tuberculosis via chest X-ray, and HIV, Hepatitis B, and Hepatitis C through venous blood analysis).

Operating directly within our facility in Al Karama (Next to Karama Post Office), our center is home to the Karama Medical Fitness Express Service Center (KMFC) — recognized locally and searched throughout Dubai as Karama Medical Center. Under official DHA Salem computerized integration, we eliminate long queues and crowded testing halls by offering dedicated, rapid-result categories:
- 2-Hour Super Express VIP Medical Screening
- 4 to 6-Hour Express Medical Screening
- 24-Hour Standard DHA Certified Screening (AED 322 standard statutory tariff)

Our flagship medical center combines clinical precision with luxury executive hospitality. Clients benefit from a private VIP Majlis lounge, separate dedicated testing wings for female residents, on-site certified phlebotomists, and state-of-the-art low-dose digital chest radiography units. Results are validated instantaneously by DHA diagnostic laboratories and uploaded electronically to GDRFA immigration systems, allowing you to proceed directly to visa stamping without collecting physical paper reports.`,
    detailedOverviewAr: `يعد الفحص الطبي للإقامة المعتمد من هيئة الصحة بدبي (DHA) ونظام سالم الذكي متطلباً سيادياً وإلزامياً لكافة المقيمين والوافدين الراغبين في إصدار أو تجديد تأشيرات الإقامة أو الإقامة الذهبية أو تصاريح العمل في إمارة دبي. يهدف الفحص إلى التأكد من اللياقة الصحية والتحقق من الخلو من الأمراض السارية والمعدية (بما يشمل فحص الدرن الرئوي عبر الأشعة السينية للصدر، وفحوصات الدم المخبرية لفيروس نقص المناعة والتهاب الكبد الوبائي).

يحتضن مركزنا في الكرامة (بجوار بريد الكرامة) مركز الكرامة للياقة الطبية السريعة (KMFC) — المعروف محلياً وشعبياً في دبي بـ مركز الكرامة الطبي. وبفضل الربط المباشر مع شبكة سالم الذكية التابعة لهيئة الصحة، نقضي تماماً على طوابير الانتظار عبر باقات زمنية فائقة السرعة:
- فحص VIP فائق السرعة خلال ساعتين
- فحص عاجل خلال 4 إلى 6 ساعات
- الفحص الاعتيادي المعتمد خلال 24 ساعة (بالتعرفة الرسمية المعتمدة 322 درهم)

يجمع مركزنا الطبي بين الدقة التشخيصية والضيافة التنفيذية الراقية؛ حيث نوفر مجلساً خاصاً لكبار الشخصيات، وأقساماً مستقلة ومريحة للسيدات، وأحدث أجهزة الأشعة الرقمية منخفضة الانبعاث. تُعتمد النتائج مخبرياً وتُرفع تلقائياً وبصورة فورية إلى أنظمة إقامة دبي لتثبيت الإقامة دون الحاجة لطباعة أو استلام أوراق ورقية.`,
    legalFrameworkEn: `UAE Federal Law No. 28 of 2022 on Communicable Disease Prevention, and Dubai Health Authority (DHA) Residency Medical Screening Standards.`,
    legalFrameworkAr: `القانون الاتحادي رقم (28) لسنة 2022 بشأن الوقاية من الأمراض السارية، واللوائح والمعايير المعتمدة لدى هيئة الصحة بدبي وإدارة اللياقة الطبية (سالم).`,
    eligibilityEn: [
      'Original Passport and active entry permit, residence copy, or tourist visa sticker',
      'Original Emirates ID application token form with active registration number',
      'Applicable to all expatriates aged 18 and older applying for new residency or renewal in Dubai',
      'Fast-track options available for Golden Visa investors, corporate executives, and private individuals'
    ],
    eligibilityAr: [
      'جواز السفر الأصلي وتأشيرة الإقامة الحالية أو إذن الدخول الصادر',
      'استمارة طلب بطاقة الهوية الإماراتية الأصلية موضحاً بها الرقم المرجعي',
      'إلزامي لكافة الوافدين البالغين 18 عاماً فما فوق عند إصدار أو تجديد الإقامة بدبي',
      'توفر مسارات سريعة لمستثمري الإقامة الذهبية وكبار التنفيذيين والأفراد'
    ],
    galleryImages: [
      {
        url: smartDeskImage,
        titleEn: 'Karama Medical Fitness Express Service Center (KMFC)',
        titleAr: 'مركز الكرامة للياقة الطبية السريعة (KMFC)',
        captionEn: 'State-of-the-art diagnostic phlebotomy stations and digital X-ray suites in Al Karama, Dubai.',
        captionAr: 'منصات سحب الدم المتطورة وغرف الأشعة السينية الرقمية الحديثة بمركز الكرامة الطبي.',
      },
      {
        url: vipMajlisImage,
        titleEn: 'VIP Majlis Fast-Track Medical Lounge',
        titleAr: 'مجلس كبار الشخصيات للفحص الطبي السريع',
        captionEn: 'Comfortable executive hospitality suite where VIP applicants complete private blood collection with 30-minute to 2-hour results.',
        captionAr: 'جناح تنفيذي مريح يتم فيه سحب الدم في خصوصية تامة مع صدور النتائج خلال 30 دقيقة إلى ساعتين.',
      },
      {
        url: heroCenterImage,
        titleEn: 'Integrated Medical Fitness & Amer Hall',
        titleAr: 'صالة الفحص الطبي وآمر المتكاملة',
        captionEn: 'Unified government service floor enabling applicants to complete medical tests and visa typing without leaving the building.',
        captionAr: 'طابق حكومي موحد يتيح للمتعامل إنجاز الفحص الطبي وطباعة التأشيرة والهوية تحت سقف واحد.',
      },
      {
        url: mobileVanImage,
        titleEn: 'Doorstep Mobile Medical Van',
        titleAr: 'حافلة الفحص الطبي المتنقلة لباب دارك',
        captionEn: 'On-demand mobile phlebotomy team dispatched to villas and corporate offices across Dubai.',
        captionAr: 'فريق تمريضي متنقل مجهز يصل إلى فيلتك أو مقر شركتك لإجراء سحب الدم في موقعك.',
      },
    ],
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'Salem Electronic Registration & Token',
        titleAr: 'التسجيل بنظام سالم وطباعة الاستمارة',
        descEn: 'Instant electronic verification of passport and Emirates ID token on the DHA Salem portal with rapid biometric check-in.',
        descAr: 'تدقيق بيانات الجواز واستمارة الهوية على بوابة سالم الذكية وإصدار رقم الدور الرقمي الفوري.',
        durationEn: 'Minute 0 - 5',
        durationAr: 'الدقيقة 0 - 5',
      },
      {
        stepNumber: 2,
        titleEn: 'Venous Blood Draw (Phlebotomy)',
        titleAr: 'سحب عينة الدم الوريدي',
        descEn: 'Gentle, painless blood collection by DHA-certified phlebotomists in clean, sanitized private clinical rooms.',
        descAr: 'سحب عينة الدم بدقة وراحة تامة بواسطة كوادر تمريضية مرخصة من هيئة الصحة في غرف سريرية معقمة.',
        durationEn: 'Minute 5 - 10',
        durationAr: 'الدقيقة 5 - 10',
      },
      {
        stepNumber: 3,
        titleEn: 'Digital Chest X-Ray Radiography',
        titleAr: 'الأشعة السينية الرقمية للصدر',
        descEn: 'Fast, low-radiation digital radiography for pulmonary tuberculosis screening, completed in under 60 seconds.',
        descAr: 'تصوير رقمي فائق السرعة ومنخفض الإشعاع للصدر للتحقق من سلامة الرئتين، ينجز في أقل من 60 ثانية.',
        durationEn: 'Minute 10 - 15',
        durationAr: 'الدقيقة 10 - 15',
      },
      {
        stepNumber: 4,
        titleEn: 'Automated Lab Clearance & GDRFA Upload',
        titleAr: 'الاعتماد المخبري والرفع لإقامة دبي',
        descEn: 'Laboratory test validation with automated electronic transmission of the medical fitness certificate to GDRFA Dubai immigration and SMS notification to applicant.',
        descAr: 'اعتماد النتيجة مخبرياً ورفع شهادة اللياقة الطبية إلكترونياً إلى خوادم إقامة دبي مع إشعار المتعامل فوراً عبر الرسائل القصيرة.',
        durationEn: '2h / 6h / 24h',
        durationAr: 'ساعتان / 6 ساعات / 24 ساعة',
      },
    ],
    faqs: [
      {
        questionEn: 'What is the official name and location of Karama Medical Center?',
        questionAr: 'ما هو الاسم الرسمي وموقع مركز الكرامة الطبي؟',
        answerEn: 'The official Google Business Profile name is Karama Medical Fitness Express Service Center - KMFC, operated under Emirates Secretarial Services (ESS) and Karama Business Center (KBC). It is located in Al Karama, Next to Karama Post Office, Dubai.',
        answerAr: 'الاسم الرسمي المعتمد على خريطة جوجل هو Karama Medical Fitness Express service Center - KMFC، وتديره الإمارات لخدمات رجال الأعمال (ESS) ومركز الكرامة للأعمال (KBC). ويقع في منطقة الكرامة، بجوار بريد الكرامة، دبي.',
      },
      {
        questionEn: 'How fast can I receive my residency medical fitness results?',
        questionAr: 'ما هي أسرع مدة لاستلام نتيجة الفحص الطبي للإقامة؟',
        answerEn: 'At KMFC (Karama Medical Center), we offer three official tiers: Super Express VIP results in 2 hours, Express results in 4 to 6 hours, and Standard results in 24 hours. Results are transmitted electronically to Dubai immigration.',
        answerAr: 'نوفر في مركز الكرامة الطبي (KMFC) ثلاثة مسارات معتمدة: فحص VIP فائق السرعة خلال ساعتين، فحص عاجل خلال 4 إلى 6 ساعات، وفحص عادي خلال 24 ساعة، مع رفع النتائج إلكترونياً لنظام الإقامة.',
      },
      {
        questionEn: 'What are the working hours of Karama Medical Fitness Center (KMFC)?',
        questionAr: 'ما هي مواعيد العمل في مركز الكرامة للياقة الطبية (KMFC)؟',
        answerEn: 'KMFC operates Monday through Thursday from 7:30 AM to 8:00 PM, with dedicated Friday morning and weekend slots to accommodate corporate groups and working professionals.',
        answerAr: 'يعمل المركز من الإثنين إلى الخميس من الساعة 7:30 صباحاً حتى 8:00 مساءً، مع فترات عمل صباحية يوم الجمعة ونهاية الأسبوع لتلبية احتياجات الشركات والموظفين.',
      },
      {
        questionEn: 'Do I need to fast before doing the DHA medical fitness test?',
        questionAr: 'هل يلزم الصيام قبل إجراء الفحص الطبي للإقامة؟',
        answerEn: 'No fasting is required for standard residency medical screening. You can eat and drink normally before your appointment. However, ensure you bring your original passport and Emirates ID form.',
        answerAr: 'لا يُشترط الصيام إطلاقاً للفحص الطبي الاعتيادي للإقامة؛ حيث يمكنك تناول الطعام والشراب بصورة طبيعية، مع ضرورة إحضار جواز السفر الأصلي واستمارة الهوية.',
      },
    ],
    reviews: [
      {
        name: 'Dr. Tariq Al-Hashimi',
        roleEn: 'Consultant Surgeon',
        roleAr: 'طبيب جراح استشاري',
        companyEn: 'Dubai Specialized Healthcare',
        companyAr: 'دبي للرعاية التخصصية',
        rating: 5,
        date: 'October 2026',
        commentEn: 'As a medical professional, I was thoroughly impressed by KMFC (Karama Medical Center). Spotless clinical hygiene, calibrated low-dose X-ray equipment, and polite phlebotomists. My 2-hour VIP medical result was uploaded to immigration before I even reached my clinic.',
        commentAr: 'بصفتي طبيباً، أبهرني المستوى الرفيع لمركز الكرامة الطبي (KMFC) من حيث التعقيم الطبي وأجهزة الأشعة الحديثة والتعامل الراقي. صدرت نتيجة فحص VIP خلال ساعتين ورفعت لنظام الإقامة قبل عودتي لعيادتي.',
      },
      {
        name: 'Sarah Jane Jenkins',
        roleEn: 'Corporate HR Executive',
        roleAr: 'مدير الموارد البشرية',
        companyEn: 'Jenkins Media Middle East',
        companyAr: 'جينكينز ميديا الشرق الأوسط',
        rating: 5,
        date: 'September 2026',
        commentEn: 'We bring all our foreign staff to Karama Medical Fitness Express Service Center. Best location in Dubai, zero waiting, and the Amer typing center is in the exact same facility. 10/10 service quality.',
        commentAr: 'نوجه كافة كوادرنا المستقدمة إلى مركز الكرامة للياقة الطبية السريعة. أفضل موقع في دبي دون انتظار، ومركز آمر موجود في نفس المبنى. خدمة 10 على 10.',
      },
    ],
    targetKeywords: {
      shortTail: ['Karama Medical Center', 'KMFC Dubai', 'DHA Medical Test Karama', 'Salem Medical Fitness Dubai', 'Karama Business Center KBC'],
      longTail: ['2 hour urgent medical fitness test Karama medical center', 'DHA residency medical test timings Karama post office', 'Karama medical fitness express service center KMFC results', 'VIP medical fitness screening lounge Dubai Karama'],
    },
    featuredFacilityImage: {
      url: smartDeskImage,
      captionEn: 'DHA-certified phlebotomy and diagnostic wing at Karama Medical Fitness Express Service Center (KMFC).',
      captionAr: 'جناح سحب الدم والفحص التشخيصي المعتمد بمركز الكرامة للياقة الطبية السريعة (KMFC / مركز الكرامة الطبي).',
      locationBadgeEn: 'Karama Medical Fitness (KMFC) · Al Karama, Next to Post Office, Dubai',
      locationBadgeAr: 'مركز الكرامة للياقة الطبية (KMFC) · الكرامة، بجوار مكتب البريد، دبي',
    },
  },
};
'''

with open(output_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Successfully written to", output_path)
