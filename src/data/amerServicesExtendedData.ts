import { ProcessStep, GalleryImage, FaqItem, ReviewItem } from '../types';
import {
  amerDepartmentImg as heroCenterImage,
  goldenVisaOfficeImg as vipMajlisImage,
  icpBiometricKioskImg as smartDeskImage,
  mobileDoorstepUnitImg as mobileVanImage,
} from './centerOriginalPhotos';

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

Every single application undergoes a strict three-tier verification protocol conducted by senior Amer consultants to ensure complete conformity with Ministry of Human Resources and Emiratisation (MoHRE) occupational skill matrices and Dubai Department of Economy and Tourism (DET) commercial mandates. We eliminate rejection risks and unexpected administrative costs through complete tariff transparency: our Inside UAE comprehensive package is AED 3,056 (inclusive of entry permit AED 1,125, status change AED 676, Emirates ID fee AED 386, DHA medical fitness test AED 322, and visa stamping AED 547), while our Outside UAE issuance package is AED 1,731 (entry permit AED 476, Emirates ID fee AED 386, DHA medical test AED 322, and visa stamping AED 547). For business founders, executive directors, and corporate teams with urgent onboarding deadlines, our private VIP Majlis fast-track lane provides expedited priority processing and streamlined delivery.`,
    detailedOverviewAr: `تعتبر معالجة وإصدار تأشيرة الإقامة الجديدة في دبي إجراءً قانونياً سيادياً يتبع للإدارة العامة للإقامة وشؤون الأجانب بدبي (GDRFA) والهيئة الاتحادية للهوية والجنسية والجمارك وأمن المنافذ (ICP). ومن خلال مركز الكرامة للأعمال (KBC) وبترخيص مركز آمر المعتمد رقم 772 تحت إدارة الإمارات لخدمات رجال الأعمال (ESS)، نوفر حلاً حكومياً متكاملاً وشاملاً لإصدار وتثبيت الإقامات الجديدة للموظفين والشركاء والمستثمرين.

سواء كان المتعامل متواجداً داخل الدولة بتأشيرة زيارة وسياحة أو قادماً من خارج الإمارات، يتولى فريقنا المتخصص إنجاز كافة المراحل الإجرائية تحت سقف واحد. يتميز مقرنا في الكرامة (بجوار بريد الكرامة) باحتضان مركز الكرامة للياقة الطبية السريعة (KMFC) — المعروف شعبياً في دبي بمركز الكرامة الطبي — إلى جانب منصات البصمة البيومترية المعتمدة للهيئة الاتحادية. هذا التكامل الفريد يوفر على الشركات والمتعاملين عناء التنقل بين الدوائر، ويتيح إنجاز تدقيق المستندات، إصدار إذن الدخول، تعديل الوضع، الفحص الطبي السريع وبصمة الهوية في زيارة واحدة منسقة.

تخضع كل معاملة لتدقيق قانوني ثلاثي للتحقق من استيفاء كافة الشروط المعتمدة ومطابقة المسميات الوظيفية لأنظمة وزارة الموارد البشرية واقتصادية دبي، مع تسليم إيصالات سداد حكومية رسمية فورية. تبلغ تكلفة باقة الداخل 3,056 درهم (تشمل إذن الدخول، تعديل الوضع، الهوية، الفحص الطبي وتثبيت الإقامة)، بينما تبلغ باقة الخارج 1,731 درهم، مع توفر مسار VIP الفوري للحالات التنفيذية والمستعجلة.`,
    legalFrameworkEn: `Federal Decree-Law No. 29 of 2021 regarding Foreigners Entry and Residence, UAE Cabinet Decision No. 65 of 2022, and GDRFA Dubai Executive Administrative Regulations for Private Sector and Investor Residence Issuance.`,
    legalFrameworkAr: `المرسوم بقانون اتحادي رقم (29) لسنة 2021 بشأن دخول وإقامة الأجانب، وقرار مجلس الوزراء رقم (65) لسنة 2022، واللوائح التنفيذية الصادرة عن الإدارة العامة للإقامة وشؤون الأجانب بدبي لتنظيم إقامات العمل والاستثمار.`,
    eligibilityEn: [
      'Valid employment contract approved by MoHRE or commercial trade license showing partner/investor shareholding',
      'Applicant holding valid passport with at least 6 months validity from application submission',
      'Passing mandatory DHA infectious disease screening (HIV, Hepatitis B, Pulmonary TB)',
      'Completion of ICP biometric registration for newly arrived or first-time residence applicants',
    ],
    eligibilityAr: [
      'عقد عمل إلكتروني معتمد من وزارة الموارد البشرية والتوطين أو رخصة تجارية تثبت صفة الشريك أو المستثمر',
      'جواز سفر ساري المفعول لمدة لا تقل عن 6 أشهر للمكفول من تاريخ تقديم المعاملة',
      'اجتياز الفحص الطبي الإلزامي للياقة الصحية وخلوه من الأمراض السارية (DHA)',
      'التقاط البصمة البيومترية لدى الهيئة الاتحادية للهوية (ICP) للمقيمين الجدد لأول مرة',
    ],
    galleryImages: COMMON_GALLERY,
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'Quota, Labour Approval & Entry Permit Issuance',
        titleAr: 'الموافقة المبدئية للعمل وإصدار إذن الدخول',
        descEn: 'Verification of company electronic quota, electronic work permit generation via MoHRE, and electronic issuance of the GDRFA Dubai entry permit.',
        descAr: 'التحقق من كوتة المنشأة وإصدار تصريح العمل الإلكتروني من وزارة الموارد البشرية واستخراج إذن الدخول الرسمي من إقامة دبي.',
        durationEn: '2 - 6 Hours',
        durationAr: '2 - 6 ساعات',
      },
      {
        stepNumber: 2,
        titleEn: 'In-Country Status Change (Inside UAE)',
        titleAr: 'تعديل الوضع الداخلي دون مغادرة الدولة',
        descEn: 'Formal legal amendment of residency status inside the UAE without exiting the country border, generating the official status change approval.',
        descAr: 'توفيق وتعديل الوضع القانوني للمقيم داخل الدولة دون الحاجة لمغادرة الحدود مع استخراج إشعار تعديل الوضع الرسمي.',
        durationEn: 'Instant - 2 Hours',
        durationAr: 'فوري - ساعتان',
      },
      {
        stepNumber: 3,
        titleEn: 'DHA Medical Fitness & Biometric Registration',
        titleAr: 'الفحص الطبي المعتمد والتقاط البصمة البيومترية',
        descEn: 'Direct transfer to co-located Karama Medical Center (KMFC) for blood screening and X-ray, followed by ICP biometric fingerprint capture.',
        descAr: 'التوجه إلى مركز الكرامة الطبي (KMFC) المدمج بالمركز للفحص والدم والأشعة، ثم محطة البصمة البيومترية للهوية.',
        durationEn: 'Same Day / 2h VIP',
        durationAr: 'نفس اليوم / ساعتان VIP',
      },
      {
        stepNumber: 4,
        titleEn: 'Digital Residence Stamping & UAE Pass Sync',
        titleAr: 'تثبيت الإقامة الرقمية والربط بتطبيق الهوية الرقمية',
        descEn: 'Final approval from GDRFA Dubai, electronic residence document generation, and automatic digital sync with the UAE Pass ecosystem.',
        descAr: 'الاعتماد النهائي من إقامة دبي وإصدار ملصق الإقامة الإلكتروني وتفعيله تلقائياً على منظومة الهوية الرقمية UAE Pass.',
        durationEn: '12 - 24 Hours',
        durationAr: '12 - 24 ساعة',
      },
    ],
    faqs: [
      {
        questionEn: 'What is the complete total cost for a new Dubai employment residency visa?',
        questionAr: 'كم تبلغ التكلفة الإجمالية الكاملة لإصدار إقامة عمل جديدة في دبي؟',
        answerEn: 'For applicants currently inside the UAE, the all-inclusive official cost is AED 3,056. This includes the entry permit (AED 1,125), in-country status change (AED 676), Emirates ID typing fee (AED 386), standard DHA medical fitness test (AED 322), and residency stamping (AED 547). For applicants outside the UAE, the cost is AED 1,731. All official ministerial receipts are issued immediately.',
        answerAr: 'للمتواجدين داخل الدولة، تبلغ التكلفة الإجمالية المعتمدة 3,056 درهماً شاملاً إذن الدخول (1,125 درهم)، تعديل الوضع (676 درهم)، الهوية (386 درهم)، الفحص الطبي (322 درهم)، وتثبيت الإقامة (547 درهم). للمتواجدين بالخارج تبلغ 1,731 درهماً، مع تسليم كافة الإيصالات الوزارية الرسمية فوراً.',
      },
      {
        questionEn: 'Do I need to visit separate centers for medical testing and fingerprinting?',
        questionAr: 'هل يلزم زيارة مراكز منفصلة لإجراء الفحص الطبي وبصمة الهوية؟',
        answerEn: 'No. At Karama Business Center (KBC), we integrate authorized Amer Center services with the on-site Karama Medical Fitness Express Service Center (KMFC / Karama Medical Center) and ICP biometrics. You can accomplish your medical examination, blood test, chest X-ray, and biometric fingerprinting at our single location next to Karama Post Office.',
        answerAr: 'لا، يتميز مركز الكرامة للأعمال (KBC) باحتضان خدمات مركز آمر الرسمية مع مركز الكرامة للياقة الطبية السريعة (KMFC / مركز الكرامة الطبي) ومحطات بصمة الهوية الاتحادية في نفس المبنى بجوار بريد الكرامة، مما يتيح لك إنجاز كافة المراحل في زيارة واحدة.',
      },
      {
        questionEn: 'How long does the new residence visa process take at Karama Business Center?',
        questionAr: 'كم يستغرق إنجاز تأشيرة الإقامة الجديدة في مركز الكرامة للأعمال؟',
        answerEn: 'Standard processing takes 24 to 48 working hours from initial entry permit lodgement to final electronic residence approval. If you choose our VIP Majlis express lane, medical results are expedited in 2 to 4 hours and your residency is stamped on the very same day.',
        answerAr: 'يستغرق المسار العادي من 24 إلى 48 ساعة عمل من تاريخ التقديم حتى اعتماد الإقامة الإلكترونية. وفي حال اختيار مسار VIP بمجلس كبار الشخصيات، تظهر نتيجة الفحص الطبي خلال ساعتين إلى 4 ساعات ويتم اعتماد الإقامة في نفس اليوم.',
      },
      {
        questionEn: 'Can I do an in-country status change without having to exit the UAE?',
        questionAr: 'هل يمكن تعديل وضعي القانوني دون مغادرة أراضي الدولة؟',
        answerEn: 'Yes. Through our Amer electronic link with GDRFA Dubai, we process the internal status change immediately upon issuance of your new entry permit, allowing you to transition legally without airport departure or border run.',
        answerAr: 'نعم، من خلال الربط الإلكتروني المباشر لمركز آمر مع إقامة دبي، ننجز معاملة تعديل الوضع الداخلي فور صدور إذن الدخول دون الحاجة لمغادرة الدولة أو السفر للحدود.',
      },
    ],
    reviews: [
      {
        name: 'Tariq Al-Mansoor',
        roleEn: 'Managing Director',
        roleAr: 'العضو المنتدب',
        companyEn: 'Al-Mansoor Logistics LLC',
        companyAr: 'المنصور للخدمات اللوجستية',
        rating: 5,
        date: 'October 2026',
        commentEn: 'Handled residency visas for 8 of our incoming European engineers. Having Amer services, DHA medical testing, and ICP biometrics right inside Karama Business Center saved our company days of transit time. Completely seamless execution.',
        commentAr: 'أنجزوا إقامات 8 مهندسين جدد لشركتنا. وجود مركز آمر وفحص الكرامة الطبي وبصمة الهوية في نفس مبنى مركز الكرامة للأعمال وفر علينا أياماً طويلة من التنقل. خدمة حكومية نموذجية.',
      },
      {
        name: 'Dr. Rebecca Vance',
        roleEn: 'Senior Healthcare Specialist',
        roleAr: 'أخصائية رعاية صحية أولى',
        companyEn: 'MedLife Healthcare Group',
        companyAr: 'ميد لايف للرعاية الصحية',
        rating: 5,
        date: 'September 2026',
        commentEn: 'The VIP Majlis service at Karama Business Center is outstanding. My blood test at Karama Medical Center was done in minutes, biometrics completed down the hall, and my residence approval arrived on my phone that evening.',
        commentAr: 'خدمة المجلس VIP في مركز الكرامة للأعمال راقية جداً. تم سحب الدم في مركز الكرامة الطبي خلال دقائق وبصمة الهوية بنفس الممر، ووصلت موافقة الإقامة إلى هاتفي في نفس المساء.',
      },
    ],
    targetKeywords: {
      shortTail: [
        'Karama Business Center KBC',
        'Karama Medical Center',
        'Karama Medical Fitness Express KMFC',
        'Amer Center Dubai',
        'New UAE Residence Visa',
        'ESS Emirates Secretarial Services',
        'GDRFA Dubai Visa Typing',
      ],
      longTail: [
        'how to apply for new residency visa at Karama Business Center',
        'cost of inside UAE residency visa Amer center Dubai',
        'Karama medical fitness test timings for employment visa',
        'best Amer center with on site medical fitness Karama',
        'fast track new residence visa processing Dubai Karama',
      ],
    },
    featuredFacilityImage: {
      url: heroCenterImage,
      captionEn: 'Karama Business Center Main Amer Processing Hall & Integrated Medical Wing',
      captionAr: 'الصالة الرئيسية لمركز آمر المعتمد وجناح الفحص الطبي في مركز الكرامة للأعمال',
      locationBadgeEn: 'Al Karama, Next to Karama Post Office, Dubai',
      locationBadgeAr: 'الكرامة، بجوار بريد الكرامة، دبي',
    },
  },

  // =========================================================================
  // 2. RESIDENCY VISA (RENEWAL) - 2-Year & 3-Year
  // =========================================================================
  'amer-residency-visa-renewal': {
    detailedOverviewEn: `Renewing your UAE residency visa in Dubai is a critical legal and regulatory compliance requirement that must be undertaken before your existing permit expires or within the statutory 30-day grace period granted by the General Directorate of Residency and Foreigners Affairs (GDRFA Dubai). At Karama Business Center (KBC), operating under authorized Amer Center License #772 and managed by Emirates Secretarial Services (ESS), we provide an effortless, high-speed residency renewal service for company employees, private investors, business partners, and sponsored family dependents.

Our comprehensive renewal protocol is specifically engineered to eliminate late submission fines, administrative rejections, and unnecessary trips across Dubai. Because our flagship government campus in Al Karama (situated right next to the Karama Post Office) directly accommodates the Karama Medical Fitness Express Service Center (KMFC) — widely searched and recognized across Dubai as Karama Medical Center — you can complete every mandatory statutory step in a single visit. Upon arrival, our authorized immigration typists conduct an immediate document pre-audit, lodge your Emirates ID renewal application through the ICP federal gateway, and escort you directly to the medical wing for urgent venous blood sampling and digital chest radiography.

Through our direct ministerial server connectivity with both GDRFA Dubai and the Dubai Health Authority (DHA Salem portal), renewal clearances that previously took days are processed within hours. Our transparent official pricing follows strict government tariffs: the standard renewal for a 2-year private sector or family residency is AED 1,450 in government fees, alongside our certified ESS typing and legal pre-audit fee of AED 250. Clients requiring expedited turnaround can leverage our VIP Majlis lounge, where medical fitness test results from Karama Medical Center are fast-tracked within 2 hours or 6 hours, enabling same-day residency renewal approval. From updated salary certificates and valid Ejari contracts to domestic staff clearances, our dedicated case officers oversee your file through to the instant digital residency issuance synced directly with your UAE Pass application. We ensure full compliance with the latest immigration directives, protecting you from unexpected overstay penalties and keeping your official status in Dubai completely secure and up to date.`,
    detailedOverviewAr: `يعد تجديد تأشيرة الإقامة في دبي خطوة قانونية بالغة الأهمية يتعين بدؤها قبل انتهاء الإقامة الحالية أو خلال فترة السماح الرسمية المحددة بثلاثين يوماً من إقامة دبي (GDRFA). ومن خلال مركز الكرامة للأعمال (KBC) الحاصل على ترخيص مركز آمر المعتمد رقم 772 بإدارة الإمارات لخدمات رجال الأعمال (ESS)، نقدم خدمة تجديد سريعة ومضمونة لإقامات العمل والاستثمار والأسرة.

تم تصميم منظومة التجديد لدينا لتفادي غرامات التأخير وتصفير البيروقراطية والتنقل بين الدوائر في دبي. يضم مجمعنا الحكومي المتكامل في الكرامة (بجوار بريد الكرامة) مركز الكرامة للياقة الطبية السريعة (KMFC) — المعروف شعبياً في دبي بمركز الكرامة الطبي — مما يمكنك من إنجاز تجديد الهوية الإماراتية عبر بوابة الهوية والجنسية، وطباعة الفحص الطبي، وإجراء فحص الدم والأشعة في نفس اللحظة تحت سقف واحد.

بفضل الربط المباشر مع خوادم إقامة دبي وهيئة الصحة (سالم)، تنجز المعاملات بدقة متناهية. تبلغ الرسوم الحكومية الرسمية للتجديد سنتين 1,450 درهماً، مع رسوم تدقيق وطباعة ESS المعتمدة بقيمة 250 درهماً. وللراغبين في الإنجاز فائق السرعة، يوفر مجلس كبار الشخصيات (VIP) استلام نتائج الفحص الطبي من مركز الكرامة الطبي خلال ساعتين أو 6 ساعات واعتماد الإقامة في نفس اليوم ومزامنتها فوراً مع تطبيق الهوية الرقمية UAE Pass.`,
    legalFrameworkEn: `Federal Decree-Law No. 29 of 2021 regarding Foreigners Entry and Residence, UAE Cabinet Decision No. 65 of 2022 on Residence Renewal, and GDRFA Dubai Grace Period Regulations.`,
    legalFrameworkAr: `المرسوم بقانون اتحادي رقم (29) لسنة 2021 بشأن دخول وإقامة الأجانب، وقرار مجلس الوزراء رقم (65) لسنة 2022 المنظم لتجديد الإقامات، واللوائح التنفيذية لفترات السماح بإقامة دبي.`,
    eligibilityEn: [
      'Applicant holding current valid UAE residence permit or currently within the statutory 30-day grace period',
      'Valid passport with at least 6 months validity from renewal date',
      'Passing mandatory medical fitness test at Karama Medical Center (DHA Salem)',
      'Active commercial trade license (for partner/investor visas) or valid labour card (for employment visas)',
    ],
    eligibilityAr: [
      'حمل إقامة سارية المفعول أو التواجد ضمن فترة السماح القانونية (30 يوماً)',
      'جواز سفر ساري المفعول لمدة لا تقل عن 6 أشهر من تاريخ التجديد',
      'اجتياز فحص اللياقة الطبية الإلزامي في مركز الكرامة الطبي (نظام سالم)',
      'رخصة تجارية سارية (للشركاء والمستثمرين) أو بطاقة عمل سارية (للموظفين)',
    ],
    galleryImages: COMMON_GALLERY,
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'Document Verification & Emirates ID Typing',
        titleAr: 'تدقيق المستندات وطباعة تجديد الهوية',
        descEn: 'Instant pre-audit of current passport, Ejari, and sponsor credentials, followed by ICP electronic Emirates ID renewal registration.',
        descAr: 'تدقيق فوري لجواز السفر وعقد إيجاري وبيانات الكفيل، ثم طباعة استمارة تجديد بطاقة الهوية الإماراتية (ICP).',
        durationEn: '30 - 45 Mins',
        durationAr: '30 - 45 دقيقة',
      },
      {
        stepNumber: 2,
        titleEn: 'DHA Medical Fitness Screening at KMFC',
        titleAr: 'فحص اللياقة الطبية في مركز الكرامة الطبي',
        descEn: 'Same-building medical test at Karama Medical Fitness Express Service Center (KMFC) with rapid venous blood collection and chest X-ray.',
        descAr: 'إجراء الفحص الطبي في مركز الكرامة للياقة الطبية السريعة (KMFC) في نفس المبنى مع خيارات النتائج العاجلة.',
        durationEn: '2h - 24h Options',
        durationAr: 'خيارات ساعتين - 24 ساعة',
      },
      {
        stepNumber: 3,
        titleEn: 'Electronic GDRFA Renewal Lodgement',
        titleAr: 'إرسال طلب التجديد لإقامة دبي إلكترونياً',
        descEn: 'Direct lodgement of renewal application into GDRFA Dubai immigration database upon automated sync of medically fit certificate.',
        descAr: 'إرسال معاملة التجديد مباشرة إلى نظام إقامة دبي فور صدور شهادة اللياقة الطبية ومطابقتها إلكترونياً.',
        durationEn: '2 - 6 Hours',
        durationAr: '2 - 6 ساعات',
      },
      {
        stepNumber: 4,
        titleEn: 'Residence Approval & Digital Card Sync',
        titleAr: 'اعتماد التجديد وتحديث الهوية الرقمية',
        descEn: 'Issuance of official residence renewal approval, updated digital residence permit, and automatic sync to UAE Pass & ICP app.',
        descAr: 'صدور موافقة التجديد الرسمية وإصدار تصريح الإقامة الرقمي المحدث ومزامنته فوراً في تطبيق UAE Pass.',
        durationEn: 'Instant / Same Day',
        durationAr: 'فوري / نفس اليوم',
      },
    ],
    faqs: [
      {
        questionEn: 'How early before expiration can I renew my Dubai residence visa?',
        questionAr: 'كم المدة المتاحة قبل انتهاء الإقامة لبدء إجراءات التجديد؟',
        answerEn: 'Under GDRFA Dubai regulations, you can renew your residency up to 6 months before its expiration date without any special permission. If your visa has already expired, you have a 30-day statutory grace period to renew without incurring fines.',
        answerAr: 'وفقاً لأنظمة إقامة دبي، يمكنك تجديد الإقامة حتى 6 أشهر قبل تاريخ انتهائها دون الحاجة لأي موافقة استثنائية. وفي حال انتهائها، تمنحك الحكومة فترة سماح لمدة 30 يوماً للتجديد دون غرامات.',
      },
      {
        questionEn: 'Can I complete medical test and ID renewal at Karama Business Center together?',
        questionAr: 'هل يمكن إنجاز الفحص الطبي وتجديد الهوية في مركز الكرامة للأعمال معاً؟',
        answerEn: 'Yes. Karama Business Center (KBC) directly houses the Karama Medical Fitness Express Service Center (KMFC / Karama Medical Center) alongside authorized ICP Emirates ID counters. You can complete both requirements in one visit.',
        answerAr: 'نعم بالتأكيد. يضم مركز الكرامة للأعمال (KBC) مركز الكرامة للياقة الطبية السريعة (KMFC / مركز الكرامة الطبي) مع منصات الهوية الاتحادية، مما يمكنك من إنجازهما في زيارة واحدة.',
      },
      {
        questionEn: 'What happens if my residency expired beyond the 30-day grace period?',
        questionAr: 'ماذا يحدث إذا تجاوزت فترة السماح البالغة 30 يوماً بعد انتهاء الإقامة؟',
        answerEn: 'Overstay fines accrue at AED 50 per day after the grace period ends. Our Amer Center desk at Karama Business Center can calculate your exact fines, submit an official fine waiver petition to GDRFA, and clear the file prior to renewal.',
        answerAr: 'تُحتسب غرامات تأخير بقيمة 50 درهماً عن كل يوم بعد انتهاء فترة السماح. ويمكن لمكتب آمر في مركز الكرامة للأعمال احتساب الغرامات وتقديم طلب استرحام وتخفيض رسمي لاعتماده قبل التجديد.',
      },
      {
        questionEn: 'How fast can I get medical test results for my residency renewal?',
        questionAr: 'ما هي أسرع مدة لاستلام نتيجة الفحص الطبي لتجديد الإقامة؟',
        answerEn: 'At Karama Medical Center (KMFC) within our center, we offer 2-hour VIP express results, 6-hour urgent results, and standard 24-hour results. Once results clear, renewal is approved on the same day.',
        answerAr: 'يوفر مركز الكرامة الطبي (KMFC) في مجمعنا باقة VIP خلال ساعتين، وباقة عاجلة خلال 6 ساعات، وباقة قياسية خلال 24 ساعة، ويتم اعتماد التجديد في نفس يوم صدور النتيجة.',
      },
    ],
    reviews: [
      {
        name: 'Suresh Narayanan',
        roleEn: 'General Manager',
        roleAr: 'مدير عام',
        companyEn: 'Al-Khaleej Trading Enterprise',
        companyAr: 'مؤسسة الخليج للتجارة',
        rating: 5,
        date: 'October 2026',
        commentEn: 'Renewed my partner visa and 4 employee visas at Karama Business Center. The speed was unbelievable — blood test at Karama Medical Center at 9:00 AM, VIP results by 11:30 AM, and all 5 renewals stamped by 3:00 PM. Highly professional team at ESS.',
        commentAr: 'جددت إقامتي كشريك وإقامات 4 موظفين في مركز الكرامة للأعمال. السرعة مذهلة — فحص الدم في مركز الكرامة الطبي الساعة 9 صباحاً، والنتيجة VIP الساعة 11:30، واعتمدت الإقامات الخمس الساعة 3 عصراً. فريق ممتاز في ESS.',
      },
      {
        name: 'Fatima Al-Zahra',
        roleEn: 'Private Investor',
        roleAr: 'مستثمرة خاصة',
        companyEn: 'Self-Employed',
        companyAr: 'مستثمر مستقل',
        rating: 5,
        date: 'September 2026',
        commentEn: 'No waiting lines and zero stress. The VIP lounge at Karama Business Center handled my Emirates ID typing and guided me right into Karama Medical Center. Renewal approved before I even got home.',
        commentAr: 'بدون أي طوابير انتظار أو إرهاق. استقبلوني في صالة VIP بمركز الكرامة للأعمال وطبعوا الهوية ورافقوني لمركز الكرامة الطبي. تم اعتماد التجديد قبل وصولي للمنزل.',
      },
    ],
    targetKeywords: {
      shortTail: [
        'Karama Business Center KBC',
        'Karama Medical Center Renewal',
        'Karama Medical Fitness Express KMFC',
        'Dubai Residence Visa Renewal',
        'Amer Center Karama Renewal',
        'ESS Emirates Secretarial Services',
        'Emirates ID Renewal Dubai',
      ],
      longTail: [
        'how to renew residence visa in Karama Business Center',
        'Karama medical fitness renewal test timing and cost',
        'fastest residency renewal Amer center Dubai 24 hours',
        'Dubai visa renewal cost breakdown inside UAE Amer',
        'same day residency renewal with medical test Karama',
      ],
    },
    featuredFacilityImage: {
      url: smartDeskImage,
      captionEn: 'Integrated Medical Fitness & Emirates ID Typing Desks at Karama Business Center',
      captionAr: 'منصات طباعة الفحص الطبي وبطاقة الهوية المدمجة في مركز الكرامة للأعمال',
      locationBadgeEn: 'Al Karama, Next to Karama Post Office, Dubai',
      locationBadgeAr: 'الكرامة، بجوار بريد الكرامة، دبي',
    },
  },

  // =========================================================================
  // 3. GOLDEN VISA (10-YEAR UAE RESIDENCY)
  // =========================================================================
  'golden-visa-10yr': {
    detailedOverviewEn: `The UAE Golden Visa is a premier 10-year self-sponsored residency program enacted by the UAE Federal Government to attract and retain global investors, entrepreneurs, exceptional talents, scientists, senior executives, and real estate owners. At Karama Business Center (KBC), operating under authorized Amer Center License #772 and managed by Emirates Secretarial Services (ESS), we operate a specialized executive concierge desk dedicated exclusively to Dubai Golden Visa nominations, background audits, and GDRFA/ICP issuance.

Unlike conventional visas requiring a local corporate employer or national sponsor, the Golden Visa grants you 100% self-sponsored residency, complete flexibility to reside outside the UAE for unlimited periods without visa invalidation, and comprehensive sponsorship privileges for your spouse, children of any age, and domestic staff. Our government facility in Al Karama (located next to Karama Post Office) directly houses the Karama Medical Fitness Express Service Center (KMFC) — known locally throughout Dubai as Karama Medical Center — alongside high-security ICP biometric terminals. This infrastructure allows our VIP clients to undergo comprehensive file evaluation, title deed verification with Dubai Land Department (DLD), specialized medical fitness screening, and biometric capture within a private, confidential executive environment.

Whether you qualify under the Real Estate Investor track (property ownership valued at AED 2,000,000 or above, including mortgaged properties with bank clearance letters), the Senior Executive track (holding an attested bachelor degree, valid Dubai employment contract, and verified monthly salary of AED 30,000+), or as an Entrepreneur, Inventor, or Medical Specialist, our senior legal advisors conduct a meticulous document pre-audit. Our transparent official pricing includes GDRFA Golden Visa nomination and approval fees (AED 2,800), comprehensive ESS VIP concierge typing, title audit, and legal documentation (AED 1,150), and optional VIP Majlis fast-track processing (AED 750) ensuring priority medical screening at Karama Medical Center and rapid 48-hour card dispatch. Our dedicated case managers coordinate every single touchpoint from initial file submission to final card delivery, ensuring total peace of mind for you and your family.`,
    detailedOverviewAr: `تعتبر الإقامة الذهبية لدولة الإمارات العربية المتحدة برنامج إقامة سيادية ذاتية لمدة 10 سنوات أقرته القيادة الرشيدة لجذب واستبقاء المستثمرين العالميين، ورواد الأعمال، والمديرين التنفيذيين، والأطباء، والعلماء، والمواهب الاستثنائية، وملاك العقار. ومن خلال مركز الكرامة للأعمال (KBC) وبترخيص مركز آمر المعتمد رقم 772 تحت إدارة الإمارات لخدمات رجال الأعمال (ESS)، نوفر قسماً تنفيذياً متخصصاً في تدقيق وترشيح وإصدار الإقامات الذهبية عبر إقامة دبي والهيئة الاتحادية.

تمنحك الإقامة الذهبية تملكاً وإقامة ذاتية بنسبة 100% دون الحاجة لكفيل أو ضامن محلي، مع حرية تامة في الإقامة خارج الدولة لأي مدة دون إلغاء الإقامة، وحق كفالة الأسرة والأبناء دون سقف للعمر، والعمالة المساعدة. ويتميز مركزنا في الكرامة (بجوار بريد الكرامة) باحتضان مركز الكرامة للياقة الطبية السريعة (KMFC / مركز الكرامة الطبي) ومنصات البصمة البيومترية ومجلس كبار الشخصيات الفاخر، مما يتيح إنجاز كافة الفحوصات والتحقق من صكوك دائرة الأراضي والأملاك في جلسة واحدة تتسم بأعلى درجات الخصوصية والراحة.

تبلغ الرسوم الحكومية الرسمية 2,800 درهم، ورسوم الطباعة والاستشارات التنفيذية لـ ESS مبلغ 1,150 درهماً، مع توفر خيار المسار الذهبي فائق السرعة VIP بمبلغ 750 درهماً لتنسيق إنجاز الفحص الطبي في مركز الكرامة الطبي واستلام بطاقة الإقامة خلال 48 إلى 72 ساعة.`,
    legalFrameworkEn: `UAE Cabinet Resolution No. 65 of 2022 regarding Golden Residence Categories, Federal Decree-Law No. 29 of 2021, and Dubai Land Department / GDRFA Executive Directives for 10-Year Golden Visas.`,
    legalFrameworkAr: `قرار مجلس الوزراء رقم (65) لسنة 2022 بشأن فئات الإقامة الذهبية، والمرسوم بقانون اتحادي رقم (29) لسنة 2021، واللوائح التنفيذية المشتركة بين دائرة الأراضي والأملاك وإقامة دبي.`,
    eligibilityEn: [
      'Real Estate Investors: Property owned in Dubai valued at AED 2,000,000 or more (single or multiple title deeds, or off-plan from approved developers)',
      'Senior Executives: Attested Bachelor degree, valid employment contract in managerial occupation, and bank statement showing monthly salary of AED 30,000+',
      'Entrepreneurs: Ownership of an innovative tech SME generating revenue of AED 500,000+ or officially endorsed by an accredited business incubator',
      'Scientists & Specialists: Ph.D. holders or exceptional medical doctors holding Dubai Health Authority consultant/specialist licensing',
    ],
    eligibilityAr: [
      'المستثمر العقاري: ملكية عقار في دبي بقيمة 2 مليون درهم فأكثر (صك ملكية فردي أو مجمع، أو عقار على الخارطة من مطور معتمد)',
      'المديرون التنفيذيون: مؤهل جامعي معتمد (بكالوريوس فأعلى)، عقد عمل بمسمى قيادي، وكشف حساب بنكي يثبت راتباً شهرياً لا يقل عن 30,000 درهم',
      'رواد الأعمال: ملكية مشروع ريادي أو تقني معتمد بإيرادات سنوية 500,000 درهم أو بموافقة حاضنة أعمال رسمية',
      'العلماء والأطباء: حملة الدكتوراه أو الأطباء المعتمدون بتراخيص استشاري وأخصائي لدى هيئة الصحة بدبي',
    ],
    galleryImages: COMMON_GALLERY,
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'Nomination & Pre-Audit Eligibility Review',
        titleAr: 'التدقيق الأولي والترشيح للإقامة الذهبية',
        descEn: 'Confidential review of property title deeds, salary bank statements, or degree attestations to confirm 100% compliance with GDRFA criteria.',
        descAr: 'مراجعة سرية دقيقة لصكوك الملكية، كشوف الحسابات، أو المؤهلات الأكاديمية لضمان المطابقة الكاملة لمعايير إقامة دبي.',
        durationEn: '2 - 4 Hours',
        durationAr: '2 - 4 ساعات',
      },
      {
        stepNumber: 2,
        titleEn: 'Official Ministerial Nomination Approval',
        titleAr: 'الحصول على الموافقة المبدئية للترشيح',
        descEn: 'Submission through GDRFA / ICP Golden Visa priority portal, securing the official nomination letter and initial residency clearance.',
        descAr: 'التقديم عبر المنصة الحكومية ذات الأولوية للإقامة الذهبية وإصدار رسالة الموافقة على الترشيح والتصريح المبدئي.',
        durationEn: '24 - 48 Hours',
        durationAr: '24 - 48 ساعة',
      },
      {
        stepNumber: 3,
        titleEn: 'VIP Medical Fitness & Biometrics at KBC',
        titleAr: 'الفحص الطبي والبصمة بمجلس VIP بالمركز',
        descEn: 'Fast-track medical fitness test at co-located Karama Medical Center (KMFC) with 2-hour result turnaround and VIP biometric capture.',
        descAr: 'فحص طبي عاجل في مركز الكرامة الطبي (KMFC) في نفس المبنى بنتائج خلال ساعتين والتقاط البصمة البيومترية لكبار الشخصيات.',
        durationEn: '2 Hours (VIP)',
        durationAr: 'ساعتان (مسار VIP)',
      },
      {
        stepNumber: 4,
        titleEn: '10-Year Golden Visa Issuance & Card Delivery',
        titleAr: 'إصدار الإقامة الذهبية لـ 10 سنوات وتوصيل البطاقة',
        descEn: 'Generation of official 10-year Golden Visa electronic permit, sync with UAE Pass, and priority courier delivery of the 10-year metallic Emirates ID card.',
        descAr: 'إصدار تصريح الإقامة الذهبية لـ 10 سنوات، التفعيل عبر الهوية الرقمية UAE Pass، وتوصيل بطاقة الهوية الذهبية الأصلية لباب دارك.',
        durationEn: 'Same Day / 24 Hours',
        durationAr: 'نفس اليوم / 24 ساعة',
      },
    ],
    faqs: [
      {
        questionEn: 'Can I get the 10-year Golden Visa if my property is mortgaged?',
        questionAr: 'هل يمكن الحصول على الإقامة الذهبية إذا كان العقار مرهوناً للبنك؟',
        answerEn: 'Yes. If your property is mortgaged, you are eligible as long as the paid equity value exceeds AED 2,000,000 or the total property value on the DLD Title Deed is at least AED 2M and your bank provides a standard No Objection Letter (NOC) stating the paid-up amount.',
        answerAr: 'نعم، يمكن الحصول عليها إذا كان العقار مرهوناً، بشرط أن تتجاوز القيمة المسددة فعلياً مليوني درهم، أو أن تبلغ القيمة الإجمالية بصك الملكية مليوني درهم مع إحضار رسالة عدم ممانعة (NOC) من البنك.',
      },
      {
        questionEn: 'Do Golden Visa holders need to visit the UAE every 6 months to keep it valid?',
        questionAr: 'هل يجب على حامل الإقامة الذهبية دخول الإمارات كل 6 أشهر للحفاظ على سريانها؟',
        answerEn: 'No. One of the greatest advantages of the 10-year UAE Golden Visa is the complete waiver of the 6-month stay rule. You can remain outside the UAE for any duration without your residency permit being revoked or cancelled.',
        answerAr: 'لا، إحدى أعظم مزايا الإقامة الذهبية لمدة 10 سنوات هي الإعفاء التام من شرط الدخول كل 6 أشهر؛ حيث يمكنك البقاء خارج الدولة لأي مدة دون إلغاء الإقامة.',
      },
      {
        questionEn: 'Can I sponsor my parents and family members under my Golden Visa?',
        questionAr: 'هل يمكنني كفالة والدي وأفراد أسرتي بموجب الإقامة الذهبية؟',
        answerEn: 'Yes. Golden Visa holders have unrestricted sponsorship privileges to sponsor their spouse, unmarried male children of any age, daughters of any age, parents, and domestic helpers for the full 10-year duration.',
        answerAr: 'نعم، يمتلك حامل الإقامة الذهبية امتيازات كفالة واسعة لكفالة الزوجة، الأبناء الذكور لأي عمر، البنات، الوالدين، والعمالة المساعدة لنفس مدة العشر سنوات.',
      },
      {
        questionEn: 'How long does the entire Golden Visa process take at Karama Business Center?',
        questionAr: 'كم يستغرق إنجاز ملف الإقامة الذهبية بالكامل في مركز الكرامة للأعمال؟',
        answerEn: 'From initial document submission to final approval, executive Golden Visa files typically take 48 to 72 hours. With our VIP Majlis express service, medical fitness at Karama Medical Center is expedited in 2 hours for immediate electronic stamping.',
        answerAr: 'يستغرق الملف من 48 إلى 72 ساعة من وقت تقديم المستندات حتى الاعتماد النهائي. وعبر مسار VIP بمجلس كبار الشخصيات، تصدر نتيجة الفحص من مركز الكرامة الطبي خلال ساعتين لتثبيت الإقامة فوراً.',
      },
    ],
    reviews: [
      {
        name: 'Alexander Petrov',
        roleEn: 'Real Estate Investor',
        roleAr: 'مستثمر عقاري',
        companyEn: 'Petrov Capital Holdings',
        companyAr: 'بيتروف كابيتال القابضة',
        rating: 5,
        date: 'October 2026',
        commentEn: 'Flawless 10-year Golden Visa execution. Karama Business Center verified my Dubai Land Department title deeds, took my medical screening at Karama Medical Center, and handled everything with white-glove executive care in their private Majlis. Delivered my card within 3 days.',
        commentAr: 'إنجاز لا تشوبه شائبة للإقامة الذهبية 10 سنوات. دقق مركز الكرامة للأعمال صكوك الملكية، وأجروا الفحص في مركز الكرامة الطبي، واعتنوا بكافة التفاصيل في مجلس VIP الفاخر. استلمت بطاقتي خلال 3 أيام.',
      },
      {
        name: 'Dr. Soraya Al-Hashemi',
        roleEn: 'Chief Technology Officer',
        roleAr: 'الرئيس التنفيذي للتكنولوجيا',
        companyEn: 'FinTech Nexus Dubai',
        companyAr: 'فينتك نيكسوس دبي',
        rating: 5,
        date: 'September 2026',
        commentEn: 'Applied under the executive track. ESS typists at Karama Business Center cross-checked my MoHRE salary records and degree equivalency before lodgement. Zero hassle and total transparency. Outstanding government center.',
        commentAr: 'قدمت عبر مسار المديرين التنفيذيين. دقق مستشارو ESS في مركز الكرامة للأعمال بيانات راتبي ومعادلة شهادتي قبل التقديم. دقة متناهية وبدون أي تعقيد. أفضل مركز حكومي في دبي.',
      },
    ],
    targetKeywords: {
      shortTail: [
        'Karama Business Center KBC',
        'Dubai Golden Visa 10 Years',
        'Karama Medical Center Golden Visa',
        'Amer Center Golden Visa',
        'KMFC Medical Fitness',
        'ESS Emirates Secretarial Services',
        'Real Estate Golden Visa Dubai',
      ],
      longTail: [
        'how to get 10 year golden visa at Karama Business Center',
        'property golden visa requirements Amer center Dubai',
        'fast track golden visa medical test Karama medical center',
        'executive salary 30k golden visa requirements Dubai',
        'cost of Dubai golden visa processing at Karama business center',
      ],
    },
    featuredFacilityImage: {
      url: vipMajlisImage,
      captionEn: 'Private Executive VIP Majlis for Golden Visa Clients at Karama Business Center',
      captionAr: 'مجلس كبار الشخصيات الفاخر لمعاملات الإقامة الذهبية في مركز الكرامة للأعمال',
      locationBadgeEn: 'Executive Wing, Karama Business Center, Dubai',
      locationBadgeAr: 'الجناح التنفيذي، مركز الكرامة للأعمال، دبي',
    },
  },

  // =========================================================================
  // 4. FAMILY SPONSORSHIP VISA (Spouse & Children)
  // =========================================================================
  'amer-family-sponsorship-visa': {
    detailedOverviewEn: `Sponsoring your family members in Dubai is one of the most rewarding milestones for UAE residents, and ensuring a smooth, welcoming transition for your loved ones requires rigorous adherence to the guidelines of the General Directorate of Residency and Foreigners Affairs (GDRFA Dubai). At Karama Business Center (KBC), operating under official Amer Center License #772 and managed by Emirates Secretarial Services (ESS), we provide complete, family-centered sponsorship assistance covering your spouse, newborn infants, and dependent children up to 25 years old.

The complete family sponsorship process encompasses several administrative and statutory phases: electronic file opening with immigration, family entry permit generation, in-country status regularization (if your dependents are already inside Dubai on visit or tourist visas), mandatory DHA medical fitness screening, and Emirates ID biometric processing followed by official 2-year residence visa stamping. What makes Karama Business Center the preferred destination for expatriate families across Dubai is our unified, co-located facility in Al Karama (conveniently positioned right next to the Karama Post Office). Our campus directly incorporates the Karama Medical Fitness Express Service Center (KMFC) — widely referred to by Dubai residents as Karama Medical Center — alongside authorized ICP biometric registration desks. This eliminates the hardship of traveling with young children across multiple testing clinics and typing shops in the city.

Our experienced family immigration officers review all essential prerequisites in advance, including sponsor salary criteria (minimum monthly salary of AED 4,000 or AED 3,000 with accommodation), certified Ejari tenancy contracts, and attested marriage and birth certificates legalized by the UAE Ministry of Foreign Affairs (MOFA). Official pricing is completely transparent: government authority fees total AED 2,250, while certified ESS documentation, file opening, and pre-audit typing fees are AED 350. Families desiring maximum comfort can access our executive VIP Majlis, where blood tests and digital X-rays at Karama Medical Center are completed in complete comfort and privacy with results expedited within 2 hours.`,
    detailedOverviewAr: `تعتبر كفالة الأسرة (الزوجة والأبناء) في دبي من أهم الخطوات التي يسعى المقيمون لإنجازها بيسر وسرعة، وتخضع لاشتراطات الإدارة العامة للإقامة وشؤون الأجانب بدبي (GDRFA). ومن خلال مركز الكرامة للأعمال (KBC) وبترخيص مركز آمر المعتمد رقم 772 بإدارة الإمارات لخدمات رجال الأعمال (ESS)، نقدم دعماً عائلياً شاملاً لكفالة الزوجة والمواليد والأبناء حتى عمر 25 سنة.

تشمل معاملة كفالة الأسرة فتح ملف الكفالة، إصدار إذن الدخول، تعديل الوضع الداخلي في حال التواجد داخل الدولة، إجراء الفحص الطبي، وطباعة الهوية وتثبيت الإقامة. يتميز مركزنا بالكرامة (بجوار بريد الكرامة) باحتضان مركز الكرامة للياقة الطبية السريعة (KMFC / مركز الكرامة الطبي) ومحطات البصمة البيومترية في نفس المكان، مما يوفر على العائلات عناء التنقل مع الأطفال بين المراكز المختلفة.

يقوم مستشارونا بالتدقيق المسبق لكافة المستندات مثل عقد إيجاري المصدق، شهادة الراتب (4,000 درهم أو 3,000 مع سكن)، وعقود الزواج وشهادات الميلاد المصدقة من وزارة الخارجية. تبلغ الرسوم الحكومية 2,250 درهماً، ورسوم طباعة ESS المعتمدة 350 درهماً، مع توفر مجلس كبار الشخصيات VIP لإنجاز الفحص الطبي بمركز الكرامة الطبي خلال ساعتين بأعلى مستويات الخصوصية والراحة.`,
    legalFrameworkEn: `Federal Decree-Law No. 29 of 2021 regarding Foreigners Entry and Residence, UAE Cabinet Decision No. 65 of 2022 on Family Sponsorship, and GDRFA Dubai Family Residency Criteria.`,
    legalFrameworkAr: `المرسوم بقانون اتحادي رقم (29) لسنة 2021 بشأن دخول وإقامة الأجانب، وقرار مجلس الوزراء رقم (65) لسنة 2022 المنظم لكفالة الأسرة، وضوابط إقامة دبي لاستقدام المعالين.`,
    eligibilityEn: [
      'Sponsor holding valid UAE residence visa with minimum monthly salary of AED 4,000 or AED 3,000 plus company accommodation',
      'Attested legal marriage certificate (translated into Arabic and certified by UAE MOFA)',
      'Attested birth certificates for children (translated into Arabic and certified by UAE MOFA)',
      'Valid Ejari tenancy registration contract matching sponsor residential criteria',
    ],
    eligibilityAr: [
      'حمل الكفيل لإقامة إماراتية سارية براتب شهري لا يقل عن 4,000 درهم أو 3,000 درهم مع سكن موثق',
      'عقد زواج قانوني مصدق حسب الأصول ومترجم للعربية ومعتمد من وزارة الخارجية الإماراتية',
      'شهادات ميلاد الأبناء مصدقة ومترجمة للعربية ومعتمدة من وزارة الخارجية الإماراتية',
      'عقد إيجاري سكني مصدق يطابق متطلبات السكن العائلي المعتمدة',
    ],
    galleryImages: COMMON_GALLERY,
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'Document Legal Audit & Sponsorship File Opening',
        titleAr: 'تدقيق الشهادات وفتح ملف الكفالة',
        descEn: 'Comprehensive pre-audit of marriage and birth attestations, Ejari contract, and official opening of the sponsor residency file in GDRFA.',
        descAr: 'تدقيق استباقي لعقود الزواج وشهادات الميلاد وعقد إيجاري، وفتح ملف الكفيل الإلكتروني لدى إقامة دبي.',
        durationEn: '1 - 2 Hours',
        durationAr: '1 - 2 ساعة',
      },
      {
        stepNumber: 2,
        titleEn: 'Family Entry Permit & Status Regularization',
        titleAr: 'إصدار إذن الدخول العائلي وتعديل الوضع',
        descEn: 'Instant electronic issuance of the family entry permit, followed by in-country status change if dependents are already in Dubai.',
        descAr: 'إصدار إذن دخول الأسرة الإلكتروني فوراً، ثم إنجاز تعديل الوضع الداخلي دون مغادرة الدولة للمتواجدين داخلها.',
        durationEn: '2 - 4 Hours',
        durationAr: '2 - 4 ساعات',
      },
      {
        stepNumber: 3,
        titleEn: 'DHA Medical Test at KMFC & ICP Biometrics',
        titleAr: 'الفحص الطبي في مركز الكرامة وبصمة الهوية',
        descEn: 'Escorted medical fitness screening for spouse at co-located Karama Medical Center (KMFC) and biometric fingerprinting for dependents aged 15+.',
        descAr: 'إجراء الفحص الطبي للزوجة في مركز الكرامة الطبي (KMFC) المدمج بالمركز والتقاط البصمة لمن هم فوق 15 عاماً.',
        durationEn: 'Same Day / 2h VIP',
        durationAr: 'نفس اليوم / ساعتان VIP',
      },
      {
        stepNumber: 4,
        titleEn: '2-Year Family Residence Stamping & Sync',
        titleAr: 'تثبيت إقامة الأسرة لسنتين والتفعيل الرقمي',
        descEn: 'Official approval of 2-year residence permits from GDRFA Dubai, electronic permit generation, and automatic activation on UAE Pass.',
        descAr: 'اعتماد إقامة الأسرة لمدة سنتين رسمياً من إقامة دبي، وإصدار الإقامات الرقمية وتفعيلها مباشرة على تطبيق UAE Pass.',
        durationEn: '12 - 24 Hours',
        durationAr: '12 - 24 ساعة',
      },
    ],
    faqs: [
      {
        questionEn: 'Can a female resident sponsor her husband and children in Dubai?',
        questionAr: 'هل يمكن للمقيمة (المرأة العاملة) كفالة زوجها وأبنائها في دبي؟',
        answerEn: 'Yes. Under updated UAE immigration directives, female residents holding professional, engineering, medical, or managerial occupations earning a monthly salary of AED 4,000 or above (or AED 3,000 + housing) can sponsor their husband and children through Amer at Karama Business Center.',
        answerAr: 'نعم، وفقاً للوائح المحدثة، يحق للمرأة العاملة في المهن التخصصية أو الإدارية براتب شهري 4,000 درهم فما فوق كفالة زوجها وأبنائها عبر مكتب آمر في مركز الكرامة للأعمال.',
      },
      {
        questionEn: 'Do young children require a medical fitness test in Dubai?',
        questionAr: 'هل يحتاج الأطفال الصغار لإجراء فحص اللياقة الطبية في دبي؟',
        answerEn: 'No. Children under the age of 18 are completely exempt from the mandatory DHA medical fitness screening. They only require passport photos, certified birth certificates, and Emirates ID typing, which we handle directly at our desks.',
        answerAr: 'لا، يُعفى الأطفال دون سن 18 عاماً تماماً من الفحص الطبي للياقة الصحية (DHA). ويتطلب ملفهم فقط الصور الشخصية والشهادات المصدقة وطباعة الهوية في مكاتبنا.',
      },
      {
        questionEn: 'How long can unmarried sons be sponsored by their parents in the UAE?',
        questionAr: 'ما هو الحد الأقصى لعمر الأبناء الذكور غير المتزوجين لكفالتهم؟',
        answerEn: 'Under the latest UAE residency laws, parents can sponsor unmarried sons up to the age of 25 without requiring student enrollment certificates, and unmarried daughters of any age without limit.',
        answerAr: 'وفقاً لأحدث القوانين، يمكن للوالدين كفالة الأبناء الذكور غير المتزوجين حتى سن 25 عاماً دون اشتراط إثبات الدراسة، والبنات غير المتزوجات دون أي حد أقصى للعمر.',
      },
      {
        questionEn: 'Why should I do my family visa at Karama Business Center?',
        questionAr: 'لماذا يفضل إنجاز تأشيرة الأسرة في مركز الكرامة للأعمال؟',
        answerEn: 'Because Karama Business Center incorporates Amer immigration services with Karama Medical Fitness Express Service Center (KMFC / Karama Medical Center) and ICP biometrics in one building, saving your family the stress of navigating between scattered offices.',
        answerAr: 'لأن مركز الكرامة للأعمال يجمع بين خدمات آمر وإجراءات مركز الكرامة للياقة الطبية السريعة (KMFC / مركز الكرامة الطبي) وبصمة الهوية في مبنى واحد، مما يجنب عائلتك مشقة التنقل.',
      },
    ],
    reviews: [
      {
        name: 'Dr. Sameer Al-Khatib',
        roleEn: 'Consultant Orthopedic Surgeon',
        roleAr: 'استشاري جراحة العظام',
        companyEn: 'Dubai Specialized Medical Hospital',
        companyAr: 'مستشفى دبي التخصصي',
        rating: 5,
        date: 'October 2026',
        commentEn: 'Sponsoring my wife and three children was completely seamless at Karama Business Center. The team audited our MOFA attested certificates, arranged my wife’s medical test at Karama Medical Center in 10 minutes, and delivered all visas in 24 hours. Incredible professionalism.',
        commentAr: 'كانت كفالة زوجتي وأطفالي الثلاثة في غاية السهولة في مركز الكرامة للأعمال. دقق الفريق شهاداتنا المصدقة، وأنجزوا فحص زوجتي في مركز الكرامة الطبي خلال 10 دقائق، وصدرت الإقامات في 24 ساعة. احترافية منقطعة النظير.',
      },
      {
        name: 'Elena Rostova',
        roleEn: 'Marketing Director',
        roleAr: 'مديرة تسويق',
        companyEn: 'Digital Edge Media',
        companyAr: 'ديجيتال إيدج ميديا',
        rating: 5,
        date: 'September 2026',
        commentEn: 'Very family-friendly environment. We used the VIP Majlis at Karama Business Center, and the staff made sure our toddler was comfortable while our papers were processed. Amer and Karama Medical Center under one roof is a lifesaver.',
        commentAr: 'بيئة مريحة جداً للعائلات. جلسنا في صالة VIP بمركز الكرامة للأعمال وكان الموظفون ودودين للغاية مع طفلي الصغير أثناء إنجاز المعاملة. جمع آمر ومركز الكرامة الطبي تحت سقف واحد ميزة استثنائية.',
      },
    ],
    targetKeywords: {
      shortTail: [
        'Karama Business Center KBC',
        'Dubai Family Visa Sponsoring',
        'Karama Medical Center Family Test',
        'Amer Center Family Visa',
        'KMFC Medical Fitness',
        'ESS Emirates Secretarial Services',
        'Wife and Children Visa Dubai',
      ],
      longTail: [
        'how to sponsor wife and child in Karama Business Center',
        'family visa cost breakdown Amer center Dubai 2026',
        'Karama medical fitness test for spouse visa timing',
        'documents needed for child residence visa Amer Karama',
        'fast track family residency visa processing Dubai',
      ],
    },
    featuredFacilityImage: {
      url: heroCenterImage,
      captionEn: 'Family Waiting Lounge and Document Advisory Desks at Karama Business Center',
      captionAr: 'صالة انتظار العائلات ومكاتب استشارات المستندات في مركز الكرامة للأعمال',
      locationBadgeEn: 'Al Karama, Next to Karama Post Office, Dubai',
      locationBadgeAr: 'الكرامة، بجوار بريد الكرامة، دبي',
    },
  },

  // =========================================================================
  // 5. PARENTS SPONSORSHIP VISA (Father & Mother)
  // =========================================================================
  'amer-parents-sponsorship-visa': {
    detailedOverviewEn: `Bringing your parents to live with you in Dubai under your personal sponsorship is a cherished aspiration for many UAE residents, and executing this humanitarian process requires specialized immigration coordination under the regulatory oversight of the General Directorate of Residency and Foreigners Affairs (GDRFA Dubai). At Karama Business Center (KBC), operating under authorized Amer Center License #772 and managed by Emirates Secretarial Services (ESS), we provide a compassionate, end-to-end parents sponsorship service designed to ensure immediate approval and absolute legal compliance.

Sponsoring parents in the UAE is governed by specific statutory conditions: sponsors must generally sponsor both parents together (unless legal documentation proves death, divorce, or medical dependency), hold a minimum verified monthly salary of AED 20,000 (or AED 19,000 plus two-bedroom accommodation verified by an official Ejari tenancy contract), and provide proof of dependency. Our dedicated Amer immigration desk conducts an exhaustive preliminary legal audit of all foreign civil documents, including MOFA-attested birth certificates, custody certificates, and consular declarations, preventing costly application rejections or file delays.

What sets Karama Business Center apart is our co-located, fully integrated infrastructure in Al Karama (conveniently located next to the Karama Post Office). Because elderly parents often experience fatigue when traveling to multiple clinics across the city, our campus directly incorporates the Karama Medical Fitness Express Service Center (KMFC) — known widely throughout Dubai as Karama Medical Center — alongside high-comfort ICP biometric desks and our executive VIP Majlis. Your parents can complete their senior-friendly venous blood draw, digital radiography, and biometric fingerprinting in one peaceful, air-conditioned visit without enduring queues. Our dedicated case officers handle the entire file with deep respect and personal care, ensuring that senior medical insurance is bound and official residency permits are delivered seamlessly to your home. Official pricing is transparent: government authority and guarantee deposit fees total AED 3,100, while certified ESS preparation and priority liaison fees are AED 450.`,
    detailedOverviewAr: `تعتبر كفالة واستقدام الوالدين للإقامة في دبي خطوة إنسانية رفيعة تحرص عليها الأسر المقيمة، وتخضع لضوابط تنظيمية دقيقة بإشراف الإدارة العامة للإقامة وشؤون الأجانب بدبي (GDRFA). ومن خلال مركز الكرامة للأعمال (KBC) وبترخيص مركز آمر المعتمد رقم 772 بإدارة الإمارات لخدمات رجال الأعمال (ESS)، نوفر رعاية شاملة وتدقيقاً قانونياً مسبقاً لملفات كفالة الوالدين لضمان سرعة الاعتماد.

تشترط اللوائح كفالة الوالدين معاً (الأب والأم) إلا في حالات الوفاة أو الطلاق المثبتة رسمياً، براتب شهري لا يقل عن 20,000 درهم (أو 19,000 درهم مع سكن غرفتين وصالة موثق بعقد إيجاري مصدق). ويقوم كبار مستشارينا بفحص شهادات الميلاد العائلية المصدقة من وزارة الخارجية وإعداد ملف الإعالة القانوني بدقة بالغة.

ولأن راحة كبار السن أولوية قصوى، يتميز مركزنا بالكرامة (بجوار بريد الكرامة) باحتضان مركز الكرامة للياقة الطبية السريعة (KMFC / مركز الكرامة الطبي) ومجلس كبار الشخصيات الفاخر (VIP)، مما يتيح للوالدين إنجاز فحص الدم والأشعة والبصمة البيومترية في جلسة واحدة مريحة دون أي انتظار أو تنقل مجهد بين العيادات. تبلغ الرسوم الحكومية 3,100 درهم، ورسوم طباعة ESS المعتمدة 450 درهماً مع متابعة الملف خطوة بخطوة.`,
    legalFrameworkEn: `Federal Decree-Law No. 29 of 2021 regarding Foreigners Entry and Residence, UAE Cabinet Decision No. 65 of 2022, and GDRFA Dubai Humanitarian & Parents Sponsorship Directives.`,
    legalFrameworkAr: `المرسوم بقانون اتحادي رقم (29) لسنة 2021 بشأن دخول وإقامة الأجانب، وقرار مجلس الوزراء رقم (65) لسنة 2022، ولوائح إقامة دبي الإنسانية لكفالة الوالدين.`,
    eligibilityEn: [
      'Sponsor holding valid UAE residence visa with minimum verified monthly salary of AED 20,000 or AED 19,000 plus 2-bedroom accommodation',
      'Both parents must be sponsored jointly, unless certified death or divorce certificates are attested by UAE MOFA',
      'Attested birth certificate of the sponsor demonstrating legal parentage relationship',
      'Valid Ejari tenancy registration contract confirming suitable 2-bedroom minimum residential accommodation',
    ],
    eligibilityAr: [
      'حمل الكفيل لإقامة سارية براتب شهري معتمد لا يقل عن 20,000 درهم أو 19,000 درهم مع سكن غرفتين وصالة موثق',
      'كفالة الوالدين معاً إلا في حالات الوفاة أو الطلاق الموثقة بشهادات مصدقة من وزارة الخارجية الإماراتية',
      'شهادة ميلاد الكفيل الأصلية المصدقة التي تثبت صلة القرابة والنسب بالوالدين',
      'عقد إيجاري سكني مصدق يثبت توفر سكن ملائم (غرفتين نوم وصالة كحد أدنى)',
    ],
    galleryImages: COMMON_GALLERY,
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'Humanitarian Dossier Audit & File Clearance',
        titleAr: 'تدقيق الملف الإنساني واعتماد الإعالة',
        descEn: 'Senior Amer consultants verify parental relationship certificates, salary records, and Ejari tenancy before opening the GDRFA dossier.',
        descAr: 'فحص دقيق لشهادات النسب والإعالة وإثباتات الراتب وعقد إيجاري بواسطة كبار المستشارين قبل فتح الملف لدى إقامة دبي.',
        durationEn: '2 - 4 Hours',
        durationAr: '2 - 4 ساعات',
      },
      {
        stepNumber: 2,
        titleEn: 'Entry Permit Issuance & Humanitarian Approval',
        titleAr: 'إصدار إذن الدخول والموافقة الإنسانية',
        descEn: 'Submission to GDRFA Dubai humanitarian approval committee and generation of the electronic parents entry permits.',
        descAr: 'التقديم للجنة الموافقات الإنسانية بإقامة دبي وإصدار تصاريح وأذونات الدخول الإلكترونية للوالدين.',
        durationEn: '24 - 48 Hours',
        durationAr: '24 - 48 ساعة',
      },
      {
        stepNumber: 3,
        titleEn: 'Senior-Friendly Medical Fitness at KMFC',
        titleAr: 'الفحص الطبي المريح لكبار السن في مركز الكرامة',
        descEn: 'Gentle, priority medical examination at co-located Karama Medical Center (KMFC) with expedited blood draw and digital radiography.',
        descAr: 'فحص طبي هادئ وسريع بمراعاة خاصة لكبار السن في مركز الكرامة الطبي (KMFC) المدمج بالمركز مع بصمة الهوية.',
        durationEn: 'Same Day / 2h VIP',
        durationAr: 'نفس اليوم / ساعتان VIP',
      },
      {
        stepNumber: 4,
        titleEn: 'Annual Parents Residence Stamping & Sync',
        titleAr: 'تثبيت إقامة الوالدين السنوية والتفعيل الرقمي',
        descEn: 'Final GDRFA issuance of 1-year renewable parents residence permits and synchronization with sponsor UAE Pass mobile profile.',
        descAr: 'الاعتماد النهائي لإقامات الوالدين السنوية القابلة للتجديد من إقامة دبي ومزامنتها على الهوية الرقمية UAE Pass.',
        durationEn: '12 - 24 Hours',
        durationAr: '12 - 24 ساعة',
      },
    ],
    faqs: [
      {
        questionEn: 'Can I sponsor only my mother if my father has passed away?',
        questionAr: 'هل يمكنني كفالة والدتي بمفردها في حال وفاة والدي؟',
        answerEn: 'Yes. While the standard rule requires sponsoring both parents together, a single parent can be sponsored if an official death certificate, divorce deed, or legal dependency document is attested by the Ministry of Foreign Affairs (MOFA).',
        answerAr: 'نعم، في حال وفاة الوالد، يمكن كفالة الوالدة بمفردها بعد تقديم شهادة الوفاة الرسمية المصدقة من وزارة الخارجية الإماراتية وسفارة الدولة.',
      },
      {
        questionEn: 'What is the required salary to sponsor parents in Dubai?',
        questionAr: 'ما هو الراتب المطلوب لكفالة الوالدين في دبي؟',
        answerEn: 'The official salary requirement set by GDRFA Dubai is a minimum of AED 20,000 per month, or AED 19,000 plus a confirmed two-bedroom apartment backed by a valid Ejari tenancy contract.',
        answerAr: 'الراتب الرسمي المحدد من إقامة دبي هو 20,000 درهم شهرياً كحد أدنى، أو 19,000 درهم مع توفير شقة سكنية غرفتين وصالة بعقد إيجاري مصدق.',
      },
      {
        questionEn: 'Is health insurance mandatory for sponsored parents in Dubai?',
        questionAr: 'هل التأمين الصحي إلزامي للوالدين المكفولين في دبي؟',
        answerEn: 'Yes. Under Dubai Health Authority regulations, valid medical health insurance covering elderly dependents is required for final residency visa activation, which our center insurance desk can provide on the spot.',
        answerAr: 'نعم، تشترط لوائح هيئة الصحة بدبي وثيقة تأمين صحي معتمدة تغطي كبار السن لاعتماد الإقامة، ويوفر مكتب التأمين في مركزنا أفضل الباقات المعتمدة فوراً.',
      },
      {
        questionEn: 'Why choose Karama Business Center for parents visa processing?',
        questionAr: 'لماذا مركز الكرامة للأعمال هو الخيار الأفضل لإقامات الوالدين؟',
        answerEn: 'Because our integrated facility combines Amer services with Karama Medical Center (KMFC) and VIP Majlis seating, eliminating the exhaustion of taking elderly parents to separate blood testing centers across town.',
        answerAr: 'لأن مركزنا يدمج خدمات آمر مع مركز الكرامة الطبي (KMFC) وصالة VIP الفاخرة، مما يجنب الوالدين كبار السن مشقة الذهاب لمراكز فحص منفصلة ويوفر لهم أقصى درجات الراحة.',
      },
    ],
    reviews: [
      {
        name: 'Mohannad Barakat',
        roleEn: 'Senior Structural Engineer',
        roleAr: 'مهندس إنشائي أول',
        companyEn: 'Barakat Consulting Engineers',
        companyAr: 'بركات للاستشارات الهندسية',
        rating: 5,
        date: 'October 2026',
        commentEn: 'Processed sponsorship for my elderly parents. The VIP Majlis at Karama Business Center made the experience so comfortable for them. The nurse from Karama Medical Center took their blood samples right there, and visas were issued the next day. Beyond grateful.',
        commentAr: 'أنجزت كفالة والديّ المسنين. صالة VIP في مركز الكرامة للأعمال جعلت التجربة مريحة جداً لهما. تم سحب عينات الدم لفحص مركز الكرامة الطبي بهدوء تام، وصدرت التأشيرات في اليوم التالي. شكراً جزيلاً لفريق ESS.',
      },
      {
        name: 'Pooja Agarwal',
        roleEn: 'Finance Controller',
        roleAr: 'مديرة شؤون مالية',
        companyEn: 'Global Commodities FZCO',
        companyAr: 'جلوبال كوموديتيز',
        rating: 5,
        date: 'September 2026',
        commentEn: 'Exceptional service for parents visas. The typists at Karama Business Center caught a small discrepancy in my translated birth certificate before submission and corrected it on the spot. Highly recommended.',
        commentAr: 'خدمة استثنائية لإقامات الوالدين. اكتشف مستشارو مركز الكرامة للأعمال ملاحظة في ترجمة شهادة ميلادي وقاموا بتعديلها فوراً قبل الإرسال لتفادي أي رفض. مركز مميز جداً.',
      },
    ],
    targetKeywords: {
      shortTail: [
        'Karama Business Center KBC',
        'Dubai Parents Visa Sponsoring',
        'Karama Medical Center Parents Test',
        'Amer Center Parents Visa',
        'KMFC Medical Fitness',
        'ESS Emirates Secretarial Services',
        'Father and Mother Visa Dubai',
      ],
      longTail: [
        'how to sponsor parents in Dubai at Karama Business Center',
        'salary requirement to sponsor parents Amer center Dubai',
        'senior citizen medical fitness test Karama medical center',
        'documents required for parents residency visa Dubai 2026',
        'fastest parents residency processing Amer Karama',
      ],
    },
    featuredFacilityImage: {
      url: vipMajlisImage,
      captionEn: 'Executive VIP Hospitality Majlis for Senior Parents at Karama Business Center',
      captionAr: 'مجلس كبار الشخصيات المخصص لاستقبال وراحة الوالدين في مركز الكرامة للأعمال',
      locationBadgeEn: 'VIP Suite, Karama Business Center, Dubai',
      locationBadgeAr: 'جناح كبار الشخصيات، مركز الكرامة للأعمال، دبي',
    },
  },

  // =========================================================================
  // 6. TOURIST & VISIT VISA EXTENSION (30 Days & 60 Days)
  // =========================================================================
  'amer-tourist-visit-visa': {
    detailedOverviewEn: `Extending your tourist or visit visa inside Dubai without the burdensome necessity of leaving the country or performing airport visa runs is a highly convenient legal facility established by the General Directorate of Residency and Foreigners Affairs (GDRFA Dubai). At Karama Business Center (KBC), operating under authorized Amer Center License #772 and managed by Emirates Secretarial Services (ESS), we provide an instant, 100% digital in-country visa extension service for tourists, commercial visitors, and visiting relatives.

Under the latest UAE immigration framework, visitors on standard 30-day or 60-day tourist visas can extend their legal stay for an additional 30 consecutive days directly from within the UAE. This in-country extension process allows visitors to continue their holiday, conduct extended corporate negotiations, or finalize local employment and residency interviews without departing Dubai international airports or crossing overland border checkpoints. Our central location in Al Karama (conveniently positioned next to the Karama Post Office) provides immediate, direct access to the GDRFA immigration server, allowing our certified Amer typists to process your renewal application within 30 to 60 minutes.

Beyond standard tourist visa extensions, Karama Business Center is an integrated multi-departmental government hub. Because our building directly accommodates the Karama Medical Fitness Express Service Center (KMFC) — known locally throughout Dubai as Karama Medical Center — visitors who secure local employment contracts or decide to transition into residency or investor status can immediately complete their in-country status regularization, DHA medical screening, and Emirates ID biometric capture in the exact same facility. Our transparent pricing conforms to official GDRFA standards: the official ministerial extension fee is AED 850, alongside our certified ESS typing and submission fee of AED 150. For visitors whose visas have already expired, our specialists calculate overstay balances accurately and arrange immediate waivers and renewals to restore full legal compliance, allowing you to enjoy your stay in Dubai with total peace of mind.`,
    detailedOverviewAr: `يعد تمديد تأشيرة الزيارة والسياحة داخل دبي دون الحاجة لمغادرة أراضي الدولة أو السفر للحدود من أكثر الخدمات طلباً وراحة، وتخضع للوائح الإدارة العامة للإقامة وشؤون الأجانب بدبي (GDRFA). ومن خلال مركز الكرامة للأعمال (KBC) وبترخيص مركز آمر المعتمد رقم 772 بإدارة الإمارات لخدمات رجال الأعمال (ESS)، نقدم خدمة تمديد فورية وإلكترونية بنسبة 100% للسياح وزوار الأعمال وأقارب المقيمين.

تتيح التعديلات التنفيذية لحاملي تأشيرات السياحة (30 يوماً أو 60 يوماً) تمديد إقامتهم القانونية لمدة 30 يوماً إضافية من داخل الدولة دون مغادرة المطارات أو المنافذ البرية. ويتميز مركزنا في الكرامة (بجوار بريد الكرامة) بالربط الرقمي اللحظي مع خوادم إقامة دبي، مما يمكننا من إنجاز تمديد التأشيرة واستخراج التصريح الجديد خلال 30 إلى 60 دقيقة فقط.

كما يتميز مركز الكرامة للأعمال بكونه مجمعاً حكومياً متكاملاً؛ حيث يضم مركز الكرامة للياقة الطبية السريعة (KMFC / مركز الكرامة الطبي) ومحطات البصمة البيومترية، فإذا حصل الزائر على عرض عمل جديد أو رغب في تعديل وضعه إلى إقامة مستثمر، يمكنه إنجاز تعديل الوضع والفحص الطبي في نفس المبنى فوراً. تبلغ الرسوم الحكومية 850 درهماً، ورسوم طباعة ESS المعتمدة 150 درهماً، مع خدمة تسوية وتخفيض غرامات التأخير في حال انتهاء التأشيرة.`,
    legalFrameworkEn: `Federal Decree-Law No. 29 of 2021 regarding Foreigners Entry and Residence, UAE Cabinet Decision No. 65 of 2022, and GDRFA Dubai In-Country Tourist Visa Regulations.`,
    legalFrameworkAr: `المرسوم بقانون اتحادي رقم (29) لسنة 2021 بشأن دخول وإقامة الأجانب، وقرار مجلس الوزراء رقم (65) لسنة 2022، ولوائح إقامة دبي لتمديد تأشيرات الزيارة الداخلية.`,
    eligibilityEn: [
      'Visitor holding a valid Dubai or UAE tourist / visit visa or within official grace period',
      'Original passport copy with minimum 3 months remaining validity',
      'Clear digital passport-size photograph with white background',
      'Payment of official extension tariff before accrual of overstay fines',
    ],
    eligibilityAr: [
      'حمل تأشيرة سياحة أو زيارة صادرة من دبي أو الإمارات سارية أو ضمن فترة السماح',
      'نسخة واضحة من جواز السفر بصلاحية لا تقل عن 3 أشهر',
      'صورة شخصية رقمية ملونة حديثة بخلفية بيضاء',
      'سداد الرسوم المقررة قبل تراكم غرامات المخالفة وتجاوز المدة',
    ],
    galleryImages: COMMON_GALLERY,
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'Passport & Visa File Verification',
        titleAr: 'تدقيق بيانات الجواز والتأشيرة الحالية',
        descEn: 'Instant online check of your current visa validity date, unified number (UID), and system status on GDRFA servers.',
        descAr: 'استعلام فوري عن تاريخ انتهاء التأشيرة الحالية والرقم الموحد (UID) وحالة الملف على خوادم إقامة دبي.',
        durationEn: '10 - 15 Mins',
        durationAr: '10 - 15 دقيقة',
      },
      {
        stepNumber: 2,
        titleEn: 'Electronic Extension Application Lodgement',
        titleAr: 'التقديم الإلكتروني لتمديد التأشيرة',
        descEn: 'Typing and direct submission into the authorized Amer immigration system with official fee settlement.',
        descAr: 'طباعة وإرسال الطلب مباشرة عبر نظام آمر المعتمد لإقامة دبي وسداد الرسوم الحكومية.',
        durationEn: '15 - 30 Mins',
        durationAr: '15 - 30 دقيقة',
      },
      {
        stepNumber: 3,
        titleEn: 'GDRFA Clearance & System Approval',
        titleAr: 'الموافقة والاعتماد من إقامة دبي',
        descEn: 'Automated clearance verification through Dubai immigration database and extension authorization.',
        descAr: 'المطابقة والاعتماد الآلي الفوري عبر قاعدة بيانات الإدارة العامة للإقامة وشؤون الأجانب بدبي.',
        durationEn: '15 - 30 Mins',
        durationAr: '15 - 30 دقيقة',
      },
      {
        stepNumber: 4,
        titleEn: 'New eVisa Issuance & WhatsApp Delivery',
        titleAr: 'إصدار التأشيرة المحدثة والإرسال عبر الواتساب',
        descEn: 'Generation of your new extended 30-day electronic tourist visa document dispatched instantly to your email and WhatsApp.',
        descAr: 'إصدار مستند التأشيرة الإلكترونية الممددة لـ 30 يوماً إضافية وإرسالها فوراً إلى بريدك الإلكتروني والواتساب.',
        durationEn: 'Instant',
        durationAr: 'فوري',
      },
    ],
    faqs: [
      {
        questionEn: 'Can I extend my tourist visa without leaving Dubai?',
        questionAr: 'هل يمكن تمديد تأشيرة السياحة بدون مغادرة دبي؟',
        answerEn: 'Yes. Under GDRFA regulations, visitors can extend their tourist visa for 30 days while remaining inside Dubai without leaving the airport or travelling to the border, processed in 30 minutes at Karama Business Center.',
        answerAr: 'نعم، وفقاً لأنظمة إقامة دبي، يحق للزائر تمديد تأشيرة السياحة لمدة 30 يوماً وهو داخل دبي دون الحاجة لمغادرة المطار أو الذهاب للحدود، ويتم إنجازها خلال 30 دقيقة في مركز الكرامة للأعمال.',
      },
      {
        questionEn: 'How many times can a tourist visa be extended inside the UAE?',
        questionAr: 'كم مرة يمكن تمديد تأشيرة السياحة من داخل الدولة؟',
        answerEn: 'Standard tourist visas can be extended for an additional 30 days. If you require further stay, our center can transition your visa into an employment entry permit, investor residence, or arrange an in-country status change.',
        answerAr: 'يمكن تمديد تأشيرة السياحة لمدة 30 يوماً إضافية. وإذا رغبت في البقاء لفترة أطول، يمكن لمركزنا تحويل وضعك إلى تأشيرة عمل أو إقامة مستثمر أو تعديل الوضع داخلياً.',
      },
      {
        questionEn: 'What is the penalty for overstaying a tourist visa in Dubai?',
        questionAr: 'ما هي غرامة البقاء في دبي بعد انتهاء تأشيرة السياحة؟',
        answerEn: 'The official overstay fine is AED 50 per day following the expiration of your tourist visa or grace period. Our Amer Center desk can calculate your outstanding fines and submit a reduction petition if eligible.',
        answerAr: 'تبلغ غرامة التأخير 50 درهماً عن كل يوم بعد انتهاء صلاحية التأشيرة أو فترة السماح. ويمكن لمكتب آمر في مركزنا احتساب الغرامات وتقديم طلب تخفيض في الحالات المؤهلة.',
      },
      {
        questionEn: 'Can I switch from a tourist visa to a residency visa at Karama Business Center?',
        questionAr: 'هل يمكنني التحويل من تأشيرة سياحة إلى إقامة في مركز الكرامة للأعمال؟',
        answerEn: 'Yes. Because Karama Business Center houses Amer services and Karama Medical Center (KMFC) under one roof, you can complete your entry permit, internal status change, medical test, and biometrics in a single visit.',
        answerAr: 'نعم بالتأكيد، بفضل احتضان مركز الكرامة للأعمال لخدمات آمر ومركز الكرامة الطبي (KMFC) تحت سقف واحد، يمكنك استخراج إذن الدخول، تعديل الوضع، الفحص الطبي، وبصمة الهوية في زيارة واحدة.',
      },
    ],
    reviews: [
      {
        name: 'Lucas Van Der Meer',
        roleEn: 'Tourist & Travel Photographer',
        roleAr: 'سائح ومصور فوتوغرافي',
        companyEn: 'Amsterdam Visuals',
        companyAr: 'أمستردام فيجوالز',
        rating: 5,
        date: 'October 2026',
        commentEn: 'Extended my 60-day Dubai visa by another 30 days at Karama Business Center. Sent them my passport copy on WhatsApp, visited the center in Al Karama, and had my approved visa document in 25 minutes. Exceptionally fast and friendly.',
        commentAr: 'مددت تأشيرتي في دبي لـ 30 يوماً إضافية في مركز الكرامة للأعمال. أرسلت صورة الجواز عبر الواتساب ومررت بالمركز بالكرامة، واستلمت التأشيرة المعتمدة خلال 25 دقيقة. سرعة مذهلة ومعاملة ودودة.',
      },
      {
        name: 'Maria Santos',
        roleEn: 'Visiting Family Guest',
        roleAr: 'زائرة عائلية',
        companyEn: 'Independent Traveler',
        companyAr: 'مسافر مستقل',
        rating: 5,
        date: 'September 2026',
        commentEn: 'My tourist visa was 2 days from expiring. ESS at Karama Business Center sorted the extension immediately without any airport travel. Professional and transparent service with official receipts.',
        commentAr: 'كانت تأشيرتي ستنتهي خلال يومين. قام فريق ESS في مركز الكرامة للأعمال بتمديدها فوراً دون الحاجة للسفر أو الذهاب للمطار. خدمة احترافية وشفافة مع إيصالات رسمية.',
      },
    ],
    targetKeywords: {
      shortTail: [
        'Karama Business Center KBC',
        'Dubai Tourist Visa Extension',
        'In Country Visa Extension Dubai',
        'Amer Center Visa Renewal',
        'Karama Medical Center Visa Transfer',
        'ESS Emirates Secretarial Services',
        'Visit Visa Extension Karama',
      ],
      longTail: [
        'how to extend tourist visa inside Dubai Karama Business Center',
        'cost of 30 days tourist visa extension Amer Dubai',
        'extend visit visa without exiting UAE Amer center',
        'switch tourist visa to employment visa Karama medical center',
        'urgent visa extension in Al Karama next to post office',
      ],
    },
    featuredFacilityImage: {
      url: smartDeskImage,
      captionEn: 'Express Electronic Visa Typing and Extension Counter at Karama Business Center',
      captionAr: 'منصة طباعة وتمديد التأشيرات الإلكترونية السريعة في مركز الكرامة للأعمال',
      locationBadgeEn: 'Ground Floor, Karama Business Center, Dubai',
      locationBadgeAr: 'الطابق الأرضي، مركز الكرامة للأعمال، دبي',
    },
  },
  // =========================================================================
  // 7. JOB SEEKER VISA (60, 90 & 120 Days)
  // =========================================================================
  'amer-job-seeker-visa': {
    detailedOverviewEn: `The UAE Job Seeker Visa is an innovative sovereign entry permit created under updated federal immigration reforms to allow talented professionals, recent university graduates, and skilled workers to enter Dubai and explore employment opportunities without requiring an upfront local host or corporate sponsor. At Karama Business Center (KBC), operating under authorized Amer Center License #772 and managed by Emirates Secretarial Services (ESS), we provide complete guidance and instant application lodgement for 60-day, 90-day, and 120-day job seeker visas through GDRFA Dubai.

Unlike traditional tourist visas that prohibit legal employment interviews and recruitment onboarding, the Job Seeker Visa officially authorizes foreign professionals to attend corporate interviews, undergo assessment tests, and finalize labour contracts with prospective Dubai employers. To qualify, applicants must hold a recognized bachelor degree or higher (conforming to Ministry of Human Resources and Emiratisation Skill Levels 1, 2, or 3) from one of the top 500 universities globally or an accredited higher education institution, alongside a standard security financial deposit. Our experienced typists review your academic attestations, curriculum vitae, and passport validity to ensure complete conformity with GDRFA criteria.

A tremendous strategic advantage of choosing Karama Business Center is our centralized, multi-departmental campus in Al Karama (conveniently situated next to the Karama Post Office). Because our facility directly incorporates the Karama Medical Fitness Express Service Center (KMFC) — recognized locally as Karama Medical Center — alongside Tasheel labour counters and authorized ICP biometric fingerprint terminals, successful job applicants do not need to roam between distant departments once they secure an employment offer. Within our single campus, you can transition smoothly from your Job Seeker Visa into a full 2-year employment residency, completing your MoHRE electronic contract, in-country status adjustment, urgent medical blood test, and Emirates ID in a coordinated fashion. Official pricing is clear: government authority fee of AED 1,450 (including refundable security deposit) and certified ESS documentation and pre-audit fee of AED 300.`,
    detailedOverviewAr: `تعتبر تأشيرة استكشاف فرص العمل (Job Seeker Visa) في الإمارات إحدى أهم المبادرات الحكومية التي تتيح للكفاءات والخريجين والمهنيين دخول دبي للبحث عن عمل دون الحاجة لكفيل أو مستضيف محلي، وتخضع لضوابط إقامة دبي (GDRFA). ومن خلال مركز الكرامة للأعمال (KBC) وبترخيص مركز آمر المعتمد رقم 772 بإدارة الإمارات لخدمات رجال الأعمال (ESS)، نوفر تدقيقاً قانونياً وطباعة فورية لتأشيرات البحث عن عمل لمدد 60 و90 و120 يوماً.

تتميز هذه التأشيرة بالسماح القانوني الكامل للمهني بإجراء مقابلات العمل وتوقيع العقود مع كبرى الشركات. وتشترط اللوائح أن يكون المتقدم من خريجي أفضل 500 جامعة في العالم أو حاملاً لمؤهل جامعي مصدق ضمن المستويات المهارية المعتمدة (الأول أو الثاني أو الثالث).

وتتمثل الميزة الاستثنائية لمركز الكرامة للأعمال (بجوار بريد الكرامة) في احتوائه على مركز الكرامة للياقة الطبية السريعة (KMFC / مركز الكرامة الطبي) ومكاتب تسهيل وبصمة الهوية، فبمجرد حصول الباحث عن عمل على عرض وظيفي، يمكنه الانتقال فوراً إلى إصدار تصريح العمل وتعديل الوضع والفحص الطبي وبصمة الهوية في نفس المركز دون الحاجة للتنقل بين الدوائر. تبلغ الرسوم الحكومية مع الضمان المالي المسترد 1,450 درهماً، ورسوم طباعة ESS المعتمدة 300 درهم.`,
    legalFrameworkEn: `UAE Cabinet Resolution No. 65 of 2022 regarding Executive Regulations of the Federal Decree-Law on Entry and Residence of Foreigners, and GDRFA Dubai Job Exploration Directives.`,
    legalFrameworkAr: `قرار مجلس الوزراء رقم (65) لسنة 2022 بشأن اللائحة التنفيذية لقانون دخول وإقامة الأجانب، وضوابط إقامة دبي لتأشيرات استكشاف فرص العمل.`,
    eligibilityEn: [
      'Applicant holding a recognized Bachelor degree or higher diploma attested by Ministry of Foreign Affairs',
      'Classified under Skill Level 1, 2, or 3 according to MoHRE occupational standards or graduate of top 500 world universities',
      'Passport with at least 6 months remaining validity from date of entry permit application',
      'Payment of official security deposit and statutory government fees through authorized Amer portal',
    ],
    eligibilityAr: [
      'حمل مؤهل جامعي (بكالوريوس فما فوق) مصدق من وزارة الخارجية وسفارة دولة الإمارات',
      'التصنيف ضمن المستوى المهاري الأول أو الثاني أو الثالث لوزارة الموارد البشرية أو خريج أفضل 500 جامعة عالمياً',
      'جواز سفر ساري المفعول لمدة لا تقل عن 6 أشهر من تاريخ التقديم',
      'سداد الضمان المالي المقرر والرسوم الحكومية عبر بوابة آمر المعتمدة',
    ],
    galleryImages: COMMON_GALLERY,
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'Academic & Qualification Pre-Audit',
        titleAr: 'تدقيق المؤهلات والشهادات الأكاديمية',
        descEn: 'Verification of university degree attestations, international accreditation ranking, and professional classification.',
        descAr: 'مراجعة وتدقيق تصديقات الشهادات الجامعية وترتيب الجامعة والتصنيف المهني المعتمد في أنظمة العمل.',
        durationEn: '1 - 2 Hours',
        durationAr: '1 - 2 ساعة',
      },
      {
        stepNumber: 2,
        titleEn: 'GDRFA Electronic Lodgement & Security Deposit',
        titleAr: 'التقديم الإلكتروني وسداد الضمان المالي',
        descEn: 'Submission into the official Amer portal, security screening clearance, and settlement of the refundable financial bond.',
        descAr: 'إرسال المعاملة عبر بوابة آمر الرسمية لإقامة دبي وسداد رسوم التأشيرة ومبلغ الضمان المالي المسترد.',
        durationEn: '2 - 4 Hours',
        durationAr: '2 - 4 ساعات',
      },
      {
        stepNumber: 3,
        titleEn: 'eVisa Approval & Issuance',
        titleAr: 'اعتماد التأشيرة الإلكترونية وإصدارها',
        descEn: 'Final approval from GDRFA Dubai and digital generation of the single or multiple entry Job Seeker Visa.',
        descAr: 'صدور موافقة إقامة دبي وإصدار التأشيرة الإلكترونية الرسمية لاستكشاف فرص العمل بالمدة المختارة.',
        durationEn: '24 - 48 Hours',
        durationAr: '24 - 48 ساعة',
      },
      {
        stepNumber: 4,
        titleEn: 'Employment Transition & On-Site Medical at KMFC',
        titleAr: 'التحويل لإقامة عمل والفحص الطبي بمركز الكرامة',
        descEn: 'Upon receiving a job offer, seamless in-house transfer to MoHRE contract typing, status change, and medical screening at Karama Medical Center.',
        descAr: 'عند الحصول على عرض العمل، يتم توقيع عقد العمل وتعديل الوضع وإجراء الفحص الطبي في مركز الكرامة الطبي في نفس المركز فوراً.',
        durationEn: 'Same Day Transition',
        durationAr: 'تحويل فوري في نفس اليوم',
      },
    ],
    faqs: [
      {
        questionEn: 'Do I need a company sponsor to get a Job Seeker Visa in Dubai?',
        questionAr: 'هل أحتاج لكفيل أو شركة للحصول على تأشيرة البحث عن عمل في دبي؟',
        answerEn: 'No. The Job Seeker Visa is completely self-sponsored and does not require an employer, national sponsor, or local host in the UAE. You apply based on your accredited university qualifications and financial deposit.',
        answerAr: 'لا، تأشيرة استكشاف فرص العمل هي تأشيرة ذاتية بالكامل ولا تتطلب أي صاحب عمل أو كفيل محلي، ويتم التقديم عليها استناداً لمؤهلك الجامعي المعتمد والضمان المالي.',
      },
      {
        questionEn: 'What happens to the security deposit once I find a job in Dubai?',
        questionAr: 'ماذا يحدث للضمان المالي بمجرد الحصول على عمل وتعديل الوضع؟',
        answerEn: 'Once your new employer issues your employment residence permit and status change at Karama Business Center, the financial security deposit is fully refunded back to your account through the GDRFA system.',
        answerAr: 'بمجرد أن تقوم الشركة الجديدة بإصدار إقامة العمل وتعديل الوضع في مركز الكرامة للأعمال، يتم استرداد مبلغ الضمان المالي بالكامل عبر نظام إقامة دبي.',
      },
      {
        questionEn: 'Can I do my medical fitness test at Karama Business Center when I get hired?',
        questionAr: 'هل يمكنني إجراء الفحص الطبي في مركز الكرامة للأعمال عند توظيفي؟',
        answerEn: 'Yes. Karama Business Center houses the Karama Medical Fitness Express Service Center (KMFC / Karama Medical Center) directly inside the building, so you can do your urgent 2-hour medical test right on the spot.',
        answerAr: 'نعم بالتأكيد، يضم مركز الكرامة للأعمال مركز الكرامة للياقة الطبية السريعة (KMFC / مركز الكرامة الطبي) داخل المبنى، مما يتيح لك إجراء الفحص الطبي السريع فور توظيفك.',
      },
      {
        questionEn: 'What are the available durations for the UAE Job Seeker Visa?',
        questionAr: 'ما هي المدد المتاحة لتأشيرة استكشاف العمل في الإمارات؟',
        answerEn: 'The visa is available for durations of 60 days, 90 days, or 120 days depending on your preference and career search timeline, processed quickly through our Amer desk.',
        answerAr: 'تتوفر التأشيرة لمدد 60 يوماً أو 90 يوماً أو 120 يوماً حسب رغبتك والجدول الزمني لبحثك عن وظيفة، ويتم إنجازها عبر مكتب آمر لدينا.',
      },
    ],
    reviews: [
      {
        name: 'Julian Richter',
        roleEn: 'Software Architect',
        roleAr: 'مهندس برمجيات',
        companyEn: 'Independent Applicant',
        companyAr: 'متقدم مستقل',
        rating: 5,
        date: 'October 2026',
        commentEn: 'Applied for a 90-day Job Seeker Visa at Karama Business Center. The team verified my German degree equivalency, processed the application, and within 48 hours I had my visa. Two months later I got hired and they handled my employment visa and medical test at Karama Medical Center all in one day. Brilliant hub.',
        commentAr: 'قدمت على تأشيرة استكشاف عمل 90 يوماً في مركز الكرامة للأعمال. دقق الفريق شهادتي الألمانية وصدرت التأشيرة خلال 48 ساعة. وبعد شهرين حصلت على وظيفة وأنجزوا لي إقامة العمل والفحص في مركز الكرامة الطبي في نفس اليوم. مجمع حكومي متكامل.',
      },
      {
        name: 'Amina Mansouri',
        roleEn: 'Financial Analyst',
        roleAr: 'محللة مالية',
        companyEn: 'Talent Network Dubai',
        companyAr: 'شبكة الكفاءات دبي',
        rating: 5,
        date: 'September 2026',
        commentEn: 'Very knowledgeable staff who explain the exact GDRFA requirements. The process was transparent with all official fee receipts provided. Highly recommend ESS at Karama Business Center.',
        commentAr: 'فريق عمل ذو خبرة عالية يشرح اشتراطات إقامة دبي بدقة. كانت الإجراءات شفافة للغاية واستلمت كافة الإيصالات الرسمية. أنصح بشدة بمركز الكرامة للأعمال.',
      },
    ],
    targetKeywords: {
      shortTail: [
        'Karama Business Center KBC',
        'Dubai Job Seeker Visa',
        'Job Exploration Visa UAE',
        'Amer Center Job Seeker',
        'Karama Medical Center Employment',
        'ESS Emirates Secretarial Services',
        'GDRFA Job Visa Dubai',
      ],
      longTail: [
        'how to apply for job seeker visa in Dubai Karama Business Center',
        'requirements for 90 days job seeker visa Amer Dubai',
        'convert job seeker visa to employment visa Karama medical center',
        'cost of job seeker visa in Dubai Amer center 2026',
        'fastest job exploration visa processing Al Karama',
      ],
    },
    featuredFacilityImage: {
      url: heroCenterImage,
      captionEn: 'Amer Center Professional Visa Processing Counter at Karama Business Center',
      captionAr: 'منصة معالجة تأشيرات المهنيين والعمل في مركز الكرامة للأعمال',
      locationBadgeEn: 'Al Karama, Next to Karama Post Office, Dubai',
      locationBadgeAr: 'الكرامة، بجوار بريد الكرامة، دبي',
    },
  },

  // =========================================================================
  // 8. WORK ENTRY PERMIT (Employment eVisa Issuance)
  // =========================================================================
  'amer-work-entry-permit': {
    detailedOverviewEn: `The Work Entry Permit (often called an Employment eVisa) is the foundational statutory authorization issued by the General Directorate of Residency and Foreigners Affairs (GDRFA Dubai) in collaboration with the Ministry of Human Resources and Emiratisation (MoHRE) that legally authorizes a prospective employee to enter or remain in Dubai for corporate onboarding. At Karama Business Center (KBC), operating under authorized Amer Center License #772 and managed by Emirates Secretarial Services (ESS), we provide an expedited, zero-error typing and lodgement service for private sector, free zone, and domestic employment permits.

Securing a Work Entry Permit requires precise administrative synchronization: our senior typists verify that the employer's MoHRE electronic quota is active, the electronic job offer (ST-number) is signed and accepted by the candidate, the initial work approval is granted, and the candidate’s foreign passport copy is completely legible and free of naming discrepancies. For candidates currently residing abroad, the Work Entry Permit allows legal travel to Dubai international airports. For candidates already inside the UAE on tourist, visit, or cancelled visas, our Amer department arranges the in-country status change immediately upon permit issuance, avoiding unnecessary airport exits or overland border runs.

The undeniable advantage of utilizing Karama Business Center is our fully co-located government campus in Al Karama (located immediately adjacent to the Karama Post Office). Because our campus hosts the Karama Medical Fitness Express Service Center (KMFC) — known locally throughout Dubai as Karama Medical Center — alongside authorized ICP biometric fingerprint capture terminals, newly arriving employees can complete their required DHA medical fitness test and Emirates ID capture on the very same day they arrive or regularize their status. Official pricing follows exact ministerial schedules: the government authority tariff is AED 750 (outside UAE) or AED 1,125 (inside UAE), with certified ESS pre-audit and immigration typing fees of AED 200.`,
    detailedOverviewAr: `يعتبر إذن دخول العمل (تصريح العمل المبدئي / فيزا العمل الإلكترونية) الترخيص القانوني السيادي الصادر عن إقامة دبي (GDRFA) بالتنسيق مع وزارة الموارد البشرية والتوطين (MoHRE) للسماح للموظف الجديد بالدخول إلى الدولة أو توفيق وضعه للبدء في إجراءات الإقامة. ومن خلال مركز الكرامة للأعمال (KBC) وبترخيص مركز آمر المعتمد رقم 772 بإدارة الإمارات لخدمات رجال الأعمال (ESS)، نقدم خدمة طباعة وتدقيق فائقة السرعة وخالية من الأخطاء لكافة تصاريح العمل في دبي.

يتطلب إصدار إذن دخول العمل تدقيقاً إلكترونياً دقيقاً لكوتة المنشأة، وعرض العمل الإلكتروني المعتمد، وجواز سفر الموظف. ويسمح التصريح للقادمين من الخارج بدخول الدولة قانونياً، بينما يتيح للمتواجدين داخل الدولة تعديل الوضع الداخلي فوراً دون مغادرة أراضي الإمارات أو السفر للحدود.

وتبرز القوة التشغيلية لمركز الكرامة للأعمال (بجوار بريد الكرامة) في احتضانه لـ مركز الكرامة للياقة الطبية السريعة (KMFC / مركز الكرامة الطبي) ومنصات البصمة البيومترية للهيئة الاتحادية، مما يمكن الموظف من إنجاز فحص الدم والأشعة وبصمة الهوية في نفس يوم إصدار إذن الدخول. تبلغ الرسوم الحكومية 750 درهماً (للقادمين من الخارج) أو 1,125 درهماً (للمتواجدين بالداخل)، مع رسوم طباعة ESS المعتمدة بقيمة 200 درهم.`,
    legalFrameworkEn: `Federal Decree-Law No. 33 of 2021 regarding Regulation of Labour Relations, Federal Decree-Law No. 29 of 2021, and GDRFA Dubai Employment Entry Permit Directives.`,
    legalFrameworkAr: `المرسوم بقانون اتحادي رقم (33) لسنة 2021 بشأن تنظيم علاقات العمل، والمرسوم بقانون اتحادي رقم (29) لسنة 2021، ولوائح إقامة دبي لأذونات دخول العمل.`,
    eligibilityEn: [
      'Corporate employer holding active Dubai Trade License and valid MoHRE Establishment Card',
      'Approved MoHRE electronic work permit quota and signed candidate electronic job offer',
      'Clear colored passport copy of employee with at least 6 months validity from application date',
      'Attested academic diploma or professional certificates for managerial and specialized technical roles',
    ],
    eligibilityAr: [
      'رخصة تجارية سارية للشركة في دبي مع بطاقة منشأة نشطة لدى وزارة الموارد البشرية وإقامة دبي',
      'موافقة مبدئية لتصريح العمل الإلكتروني وكوتة وظيفية متاحة وعرض عمل موقع من الطرفين',
      'نسخة ملونة واضحة من جواز سفر الموظف بصلاحية لا تقل عن 6 أشهر من تاريخ التقديم',
      'شهادات أكاديمية مصدقة حسب الأصول للمهن الإدارية والتخصصية والتقنية',
    ],
    galleryImages: COMMON_GALLERY,
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'Quota & Labour Approval Verification',
        titleAr: 'التحقق من الكوتة والموافقة العمالية',
        descEn: 'Cross-checking MoHRE electronic quota, company establishment card status, and signed electronic job offer contract.',
        descAr: 'تدقيق كوتة الشركة الإلكترونية لدى وزارة الموارد البشرية وبطاقة المنشأة وعرض العمل الإلكتروني المعتمد.',
        durationEn: '1 - 2 Hours',
        durationAr: '1 - 2 ساعة',
      },
      {
        stepNumber: 2,
        titleEn: 'GDRFA Electronic Entry Permit Submission',
        titleAr: 'إرسال طلب إذن الدخول لإقامة دبي',
        descEn: 'Electronic entry of candidate passport data, occupation code, and settlement of official government visa fees via Amer.',
        descAr: 'إدخال بيانات الموظف والرمز المهني المعتمد وسداد الرسوم الحكومية الرسمية عبر بوابة آمر.',
        durationEn: '2 - 4 Hours',
        durationAr: '2 - 4 ساعات',
      },
      {
        stepNumber: 3,
        titleEn: 'Approval & Digital eVisa Dispatch',
        titleAr: 'صدور الموافقة وإرسال إذن الدخول الرقمي',
        descEn: 'Direct approval from GDRFA Dubai and automated generation of the official Work Entry Permit eVisa document.',
        descAr: 'اعتماد المعاملة من إقامة دبي وإصدار إذن دخول العمل الرقمي المعتمد وإرساله للمنشأة والموظف.',
        durationEn: '12 - 24 Hours',
        durationAr: '12 - 24 ساعة',
      },
      {
        stepNumber: 4,
        titleEn: 'Medical Fitness & ID Fingerprinting at KMFC',
        titleAr: 'الفحص الطبي وبصمة الهوية في مركز الكرامة',
        descEn: 'Immediate transfer to co-located Karama Medical Center (KMFC) for blood screening and X-ray, followed by ICP biometrics.',
        descAr: 'التوجه الفوري إلى مركز الكرامة الطبي (KMFC) في نفس المبنى لإجراء الفحص الطبي وبصمة الهوية.',
        durationEn: 'Same Day / 2h VIP',
        durationAr: 'نفس اليوم / ساعتان VIP',
      },
    ],
    faqs: [
      {
        questionEn: 'How long is the Work Entry Permit valid for once issued in Dubai?',
        questionAr: 'ما هي مدة صلاحية إذن دخول العمل بعد صدوره في دبي؟',
        answerEn: 'Once issued by GDRFA Dubai, the Work Entry Permit is valid for 60 days from the date of issue. The employee must enter the UAE or perform an in-country status change within this period to proceed with medical testing and residency stamping.',
        answerAr: 'يسري إذن دخول العمل لمدة 60 يوماً من تاريخ صدوره عن إقامة دبي، ويتعين على الموظف الدخول إلى الدولة أو إنجاز تعديل الوضع الداخلي خلال هذه الفترة لاستكمال الفحص الطبي وتثبيت الإقامة.',
      },
      {
        questionEn: 'Can an employee already inside Dubai change status on a work entry permit?',
        questionAr: 'هل يمكن للموظف المتواجد داخل دبي تعديل وضعه على إذن دخول العمل؟',
        answerEn: 'Yes. Through our Amer electronic link at Karama Business Center, we process in-country status adjustments immediately upon work entry permit issuance without the applicant having to exit the UAE border.',
        answerAr: 'نعم بالتأكيد، من خلال الربط الإلكتروني لمركز آمر في مركز الكرامة للأعمال، ننجز تعديل الوضع الداخلي فور صدور إذن العمل دون حاجة الموظف لمغادرة الدولة.',
      },
      {
        questionEn: 'Do employees need to visit a hospital for medical test after getting entry permit?',
        questionAr: 'هل يحتاج الموظف للذهاب إلى مستشفى لإجراء الفحص الطبي بعد إذن الدخول؟',
        answerEn: 'No. Karama Business Center houses the Karama Medical Fitness Express Service Center (KMFC / Karama Medical Center) directly in our building, so employees complete their DHA medical test right here with results in 2 to 24 hours.',
        answerAr: 'لا، يضم مركز الكرامة للأعمال مركز الكرامة للياقة الطبية السريعة (KMFC / مركز الكرامة الطبي) في نفس المبنى، مما يتيح إنجاز فحص هيئة الصحة فوراً واستلام النتائج خلال ساعتين إلى 24 ساعة.',
      },
      {
        questionEn: 'How fast can a company get a work entry permit approved through Amer?',
        questionAr: 'ما هي سرعة اعتماد إذن دخول العمل للشركات عبر مركز آمر؟',
        answerEn: 'Standard approval takes 12 to 24 hours. For urgent corporate onboarding, our fast-track Amer queue processes emergency work entry permits within 2 to 6 hours.',
        answerAr: 'يستغرق الاعتماد العادي من 12 إلى 24 ساعة، ويتوفر مسار الطوارئ للشركات لإصدار أذونات العمل العاجلة خلال ساعتين إلى 6 ساعات.',
      },
    ],
    reviews: [
      {
        name: 'Hassan Al-Nuaimi',
        roleEn: 'HR Director',
        roleAr: 'مدير الموارد البشرية',
        companyEn: 'Al-Nuaimi Contracting Group',
        companyAr: 'مجموعة النعيمي للمقاولات',
        rating: 5,
        date: 'October 2026',
        commentEn: 'We onboarded 15 new civil engineers this month. ESS at Karama Business Center handled all work entry permits in record time and escorted the entire cohort through Karama Medical Center for rapid blood tests and biometrics in a single morning. Truly exceptional partner.',
        commentAr: 'وظفنا 15 مهندساً هذا الشهر. أنجز فريق ESS بمركز الكرامة للأعمال كافة أذونات دخول العمل في وقت قياسي ورافقوا الفريق في مركز الكرامة الطبي لإجراء الفحوصات والبصمة في صباح واحد. شريك حكومي استثنائي.',
      },
      {
        name: 'Cheryl Fernandez',
        roleEn: 'Office Operations Head',
        roleAr: 'رئيسة العمليات الإدارية',
        companyEn: 'Fernandez Global Consulting',
        companyAr: 'فرنانديز للاستشارات',
        rating: 5,
        date: 'September 2026',
        commentEn: 'Flawless work permit issuance. They rectified a job title mismatch with MoHRE records before lodging the application, preventing an expensive rejection. Always reliable.',
        commentAr: 'إصدار تصريح عمل بلا أخطاء. قاموا بتصحيح تعارض في المسمى الوظيفي مع سجلات وزارة العمل قبل التقديم وتفادوا رفض المعاملة. مركز موثوق دائماً.',
      },
    ],
    targetKeywords: {
      shortTail: [
        'Karama Business Center KBC',
        'Dubai Work Entry Permit',
        'Employment eVisa Dubai',
        'Amer Center Work Visa',
        'Karama Medical Center Onboarding',
        'ESS Emirates Secretarial Services',
        'GDRFA Work Permit Typing',
      ],
      longTail: [
        'how to issue work entry permit at Karama Business Center',
        'work entry permit cost breakdown Amer Dubai',
        'fast track employment visa with medical test Karama',
        'change tourist visa to work entry permit inside UAE',
        'corporate employment visa typing center Al Karama',
      ],
    },
    featuredFacilityImage: {
      url: smartDeskImage,
      captionEn: 'Corporate Immigration and Work Entry Permit Desk at Karama Business Center',
      captionAr: 'منصة معاملات الشركات وأذونات عمل الموظفين في مركز الكرامة للأعمال',
      locationBadgeEn: 'Al Karama, Next to Karama Post Office, Dubai',
      locationBadgeAr: 'الكرامة، بجوار بريد الكرامة، دبي',
    },
  },

  // =========================================================================
  // 9. IN-COUNTRY VISA STATUS CHANGE (Without Exiting UAE)
  // =========================================================================
  'amer-visa-status-change': {
    detailedOverviewEn: `The In-Country Visa Status Change (formally designated as Status Regularization or Amendment) is an indispensable legal process administered by the General Directorate of Residency and Foreigners Affairs (GDRFA Dubai) that enables foreign nationals to modify their residency category inside the UAE without the expense, disruption, or hazard of having to exit the country border or board an airport flight. At Karama Business Center (KBC), operating under authorized Amer Center License #772 and managed by Emirates Secretarial Services (ESS), we provide an instantaneous, 100% digital status adjustment service.

This critical procedure applies to a wide spectrum of scenarios: individuals transitioning from tourist or visit visas to employment or investor residencies, expatriates whose previous corporate contracts were cancelled and who are moving to a new employer, dependent family members regularizing their file under a spouse or parent, or investors activating a 10-year Golden Visa. Through our direct algorithmic integration with the GDRFA Dubai immigration mainframe, our certified Amer typists lodge the status change petition instantly upon generation of your new entry permit, activating legal status within 30 to 60 minutes and generating the official GDRFA status change confirmation certificate.

The preeminent advantage of executing your status change at Karama Business Center is our comprehensive one-stop campus located in Al Karama (right next to the Karama Post Office). Because status regularization is merely the gateway to medical testing and Emirates ID registration, our campus directly incorporates the Karama Medical Fitness Express Service Center (KMFC) — known locally throughout Dubai as Karama Medical Center — alongside authorized ICP biometric fingerprint capture desks. The moment your status change clears, you walk directly into our medical clinic for rapid venous blood testing and digital chest radiography. Official pricing adheres strictly to statutory government rates: the official GDRFA status amendment tariff is AED 676, with certified ESS pre-audit and immigration typing fees of AED 150.`,
    detailedOverviewAr: `يعد تعديل الوضع الداخلي (تغيير وتوفيق الوضع القانوني للتأشيرة) إجراءً سيادياً لا غنى عنه تنظمه الإدارة العامة للإقامة وشؤون الأجانب بدبي (GDRFA) لتمكين المقيمين والزوار من تحويل صفتهم القانونية داخل الدولة دون الحاجة لتحمل تكاليف ومخاطر السفر للحدود أو رحلات الطيران لتغيير التأشيرة. ومن خلال مركز الكرامة للأعمال (KBC) وبترخيص مركز آمر المعتمد رقم 772 بإدارة الإمارات لخدمات رجال الأعمال (ESS)، نقدم خدمة تعديل وضع إلكترونية فورية خلال دقائق.

تنطبق هذه الخدمة على التحويل من تأشيرة سياحة إلى إقامة عمل أو استثمار، وتغيير الكفيل بعد إلغاء الإقامة السابقة، وتوفيق أوضاع أفراد الأسرة، أو التفعيل الداخلي للإقامة الذهبية. وبفضل الربط المباشر مع خوادم إقامة دبي، يتم إنجاز المعاملة فور صدور إذن الدخول الجديد وإصدار إشعار تعديل الوضع الرسمي خلال 30 إلى 60 دقيقة.

وتكمن الميزة الفريدة لمركز الكرامة للأعمال (بجوار بريد الكرامة) في جمع كافة الإجراءات اللاحقة في نفس المكان؛ حيث يحتضن المركز مركز الكرامة للياقة الطبية السريعة (KMFC / مركز الكرامة الطبي) ومحطات البصمة البيومترية، فبمجرد صدور تعديل الوضع، تنتقل مباشرة للفحص الطبي والبصمة دون أي تأخير. تبلغ الرسوم الحكومية الرسمية لتعديل الوضع 676 درهماً، ورسوم طباعة ESS المعتمدة 150 درهماً.`,
    legalFrameworkEn: `Federal Decree-Law No. 29 of 2021 regarding Foreigners Entry and Residence, UAE Cabinet Decision No. 65 of 2022, and GDRFA Dubai In-Country Status Regularization Directives.`,
    legalFrameworkAr: `المرسوم بقانون اتحادي رقم (29) لسنة 2021 بشأن دخول وإقامة الأجانب، وقرار مجلس الوزراء رقم (65) لسنة 2022، ولوائح إقامة دبي المنظمة لتعديل وتوفيق الأوضاع الداخلية.`,
    eligibilityEn: [
      'Applicant currently present inside UAE holding valid tourist visa, cancelled residence permit, or new entry permit',
      'Original passport copy with minimum 6 months remaining validity',
      'Approved newly issued entry permit (employment, investor, family, or golden visa)',
      'Absence of active judicial bans or criminal travel restrictions on GDRFA security database',
    ],
    eligibilityAr: [
      'تواجد المتقدم فعلياً داخل الدولة بتأشيرة زيارة سارية أو إقامة ملغاة أو إذن دخول جديد',
      'نسخة جواز السفر ساري المفعول لمدة لا تقل عن 6 أشهر',
      'صدور إذن الدخول الجديد المعتمد (عمل، استثمار، أسرة، أو إقامة ذهبية)',
      'خلو السجل الأمني للمتقدم من أي قيود قضائية أو تعميمات منع سفر لدى إقامة دبي',
    ],
    galleryImages: COMMON_GALLERY,
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'Entry Permit & File Verification',
        titleAr: 'تدقيق إذن الدخول وحالة الملف',
        descEn: 'Instant verification of candidate new entry permit approval and current in-country legal presence in GDRFA database.',
        descAr: 'التحقق الفوري من صدور إذن الدخول الجديد وسريان التواجد الداخلي للمتعامل في نظام إقامة دبي.',
        durationEn: '10 - 15 Mins',
        durationAr: '10 - 15 دقيقة',
      },
      {
        stepNumber: 2,
        titleEn: 'Electronic Status Regularization Lodgement',
        titleAr: 'إرسال طلب تعديل الوضع إلكترونياً',
        descEn: 'Direct submission into the authorized Amer immigration system with automated settlement of the statutory AED 676 government fee.',
        descAr: 'إرسال المعاملة فوراً عبر بوابة آمر الإلكترونية وسداد الرسم الحكومي الرسمي المقرر (676 درهماً).',
        durationEn: '15 - 30 Mins',
        durationAr: '15 - 30 دقيقة',
      },
      {
        stepNumber: 3,
        titleEn: 'GDRFA Approval & Status Certificate Issuance',
        titleAr: 'اعتماد المعاملة وإصدار إشعار تعديل الوضع',
        descEn: 'Instant ministerial clearance and digital generation of the official GDRFA Status Change Confirmation document.',
        descAr: 'صدور الاعتماد الحكومي اللحظي وطباعة إشعار تعديل الوضع الرسمي المعتمد من إقامة دبي.',
        durationEn: '15 - 30 Mins',
        durationAr: '15 - 30 دقيقة',
      },
      {
        stepNumber: 4,
        titleEn: 'Immediate On-Site Medical Testing at KMFC',
        titleAr: 'إجراء الفحص الطبي الفوري في مركز الكرامة',
        descEn: 'Direct transfer to co-located Karama Medical Center (KMFC) for rapid venous blood testing, chest radiography, and ICP biometrics.',
        descAr: 'الانتقال المباشر لمركز الكرامة الطبي (KMFC) بنفس المبنى للفحص الطبي السريع والتقاط البصمة البيومترية.',
        durationEn: 'Same Day / 2h VIP',
        durationAr: 'نفس اليوم / ساعتان VIP',
      },
    ],
    faqs: [
      {
        questionEn: 'Do I have to leave the UAE if I change my visa status at Karama Business Center?',
        questionAr: 'هل يتوجب عليّ مغادرة دولة الإمارات إذا قمت بتعديل وضعي في مركز الكرامة للأعمال؟',
        answerEn: 'No. The entire purpose of the In-Country Status Change is to regularize your legal residency without having to travel to the airport or border. It is completed 100% digitally inside our center in 30 minutes.',
        answerAr: 'لا على الإطلاق، الهدف الأساسي من خدمة تعديل الوضع الداخلي هو توفيق إقامتك قانونياً دون مغادرة الدولة أو السفر للمطار أو المنافذ، وتنجز إلكترونياً بالكامل في مركزنا خلال 30 دقيقة.',
      },
      {
        questionEn: 'What is the official government fee for in-country status change in Dubai?',
        questionAr: 'كم تبلغ الرسوم الحكومية الرسمية لتعديل الوضع الداخلي في دبي؟',
        answerEn: 'The official statutory GDRFA fee for in-country status change is AED 676. Our certified ESS typing and pre-audit submission fee is AED 150, accompanied by instant official receipts.',
        answerAr: 'تبلغ الرسوم الحكومية الرسمية لإقامة دبي 676 درهماً، ورسوم طباعة وتدقيق ESS المعتمدة 150 درهماً مع تسليم الإيصالات الرسمية فوراً.',
      },
      {
        questionEn: 'Can I do my medical fitness test immediately after status change?',
        questionAr: 'هل يمكنني إجراء الفحص الطبي فور صدور تعديل الوضع مباشرة؟',
        answerEn: 'Yes! That is the primary benefit of Karama Business Center. Our campus houses the Karama Medical Fitness Express Service Center (KMFC / Karama Medical Center), so you can walk straight to the medical wing the minute your status clears.',
        answerAr: 'نعم بالتأكيد! هذه هي الميزة الكبرى لمركز الكرامة للأعمال؛ حيث يضم مركز الكرامة للياقة الطبية السريعة (KMFC / مركز الكرامة الطبي)، فتنتقل مباشرة للفحص فور اعتماد تعديل الوضع.',
      },
      {
        questionEn: 'How long do I have to complete my residency stamping after status change?',
        questionAr: 'كم المدة المتاحة لاستكمال تثبيت الإقامة بعد تعديل الوضع؟',
        answerEn: 'Under GDRFA regulations, you have 60 days from the date of your status change approval to complete your medical fitness test, Emirates ID biometric capture, and final residence stamping.',
        answerAr: 'تمنحك لوائح إقامة دبي مهلة 60 يوماً من تاريخ اعتماد تعديل الوضع لإنجاز الفحص الطبي، وبصمة الهوية، وتثبيت الإقامة النهائية.',
      },
    ],
    reviews: [
      {
        name: 'Arjun Nambiar',
        roleEn: 'Digital Marketing Lead',
        roleAr: 'مسؤول تسويق رقمي',
        companyEn: 'VentureLab Dubai',
        companyAr: 'فينشر لاب دبي',
        rating: 5,
        date: 'October 2026',
        commentEn: 'Transferred from a visit visa to employment residency. ESS at Karama Business Center executed the status change in 20 minutes flat. Then walked 15 meters to Karama Medical Center for my blood test. Saved me an airport trip and days of headache.',
        commentAr: 'حولت من تأشيرة زيارة إلى إقامة عمل. أنجز فريق ESS بمركز الكرامة للأعمال تعديل الوضع في 20 دقيقة، ثم مشيت 15 متراً فقط لمركز الكرامة الطبي لإجراء فحص الدم. وفروا علي رحلة للمطار وأياماً من التعب.',
      },
      {
        name: 'Olga Shirokova',
        roleEn: 'Private Business Partner',
        roleAr: 'شريكة أعمال',
        companyEn: 'SilkWay Trade LLC',
        companyAr: 'سيلك واي للتجارة',
        rating: 5,
        date: 'September 2026',
        commentEn: 'Smooth, effortless status change. No long waiting lines and total clarity on fees. The typists at Karama Business Center are truly top tier.',
        commentAr: 'تعديل وضع سلس وبدون أي تعقيد. لا توجد طوابير انتظار ووضوح كامل في الرسوم. مستشارو مركز الكرامة للأعمال محترفون بدرجة امتياز.',
      },
    ],
    targetKeywords: {
      shortTail: [
        'Karama Business Center KBC',
        'In Country Status Change Dubai',
        'Visa Status Change Without Exiting',
        'Amer Center Status Change',
        'Karama Medical Center Status Test',
        'ESS Emirates Secretarial Services',
        'GDRFA Status Amendment Typing',
      ],
      longTail: [
        'how to change visa status inside Dubai Karama Business Center',
        'cost of in country status change Amer Dubai 2026',
        'change tourist visa to residence without leaving UAE Karama',
        'immediate medical test after status change Karama medical center',
        'Amer center status change timings next to Karama post office',
      ],
    },
    featuredFacilityImage: {
      url: smartDeskImage,
      captionEn: 'Real-Time GDRFA Status Amendment Terminal at Karama Business Center',
      captionAr: 'منصة التعديل اللحظي للوضع القانوني مع إقامة دبي في مركز الكرامة للأعمال',
      locationBadgeEn: 'Al Karama, Next to Karama Post Office, Dubai',
      locationBadgeAr: 'الكرامة، بجوار بريد الكرامة، دبي',
    },
  },

  // =========================================================================
  // 10. FAMILY VISA HOLD / UNHOLD (During Sponsor Job Change)
  // =========================================================================
  'amer-visa-hold-unhold': {
    detailedOverviewEn: `The Family Visa Hold and Unhold service (officially referred to as Dependent Residency Suspension during Sponsor Transfer) is a specialized immigration mechanism administered by the General Directorate of Residency and Foreigners Affairs (GDRFA Dubai). It empowers expatriate residents who are changing employment or transitioning between companies in Dubai to temporarily suspend (freeze) the active residence visas of their sponsored spouse, children, and domestic helpers instead of undergoing forced, expensive visa cancellations and re-issuance. At Karama Business Center (KBC), operating under authorized Amer Center License #772 and managed by Emirates Secretarial Services (ESS), we provide complete guidance and instant execution for family visa hold and release files.

When a sponsor changes jobs, standard immigration rules typically require cancelling all sponsored dependents before the sponsor's work permit can be cancelled and transferred. By applying for an official Family Visa Hold at our Amer Center desk, you place a temporary bank guarantee (refundable security deposit of AED 2,500) with GDRFA Dubai, which holds your family members' residencies in an active suspended state for up to 60 days while your new employment contract and residency are established. Once your new residency is successfully stamped, we file an instant Unhold Petition to release the hold and refund your security deposit in full directly to your bank account, saving your household thousands of dirhams in re-application fees, medical tests, and typing costs.

Karama Business Center in Al Karama (conveniently situated right next to the Karama Post Office) is widely regarded as Dubai’s premier facility for managing family visa holds because our campus is fully co-located. Our center houses the Karama Medical Fitness Express Service Center (KMFC) — known locally throughout Dubai as Karama Medical Center — alongside Tasheel corporate desks and ICP biometrics. You can process your sponsor cancellation, family visa hold, new medical test at Karama Medical Center, and family unhold without ever leaving our campus. Official pricing is transparent: government authority hold fee of AED 150, refundable security deposit of AED 2,500, and certified ESS typing fee of AED 200.`,
    detailedOverviewAr: `تعتبر خدمة تعليق وفك تعليق إقامات الأسرة (وضع إقامة المعالين قيد الانتظار أثناء تغيير عمل الكفيل) آلية قانونية سيادية توفرها إقامة دبي (GDRFA) لتمكين المقيمين من تجميد إقامات أسرهم (الزوجة، الأبناء، العمالة المساعدة) بشكل مؤقت عند انتقال الكفيل لشركة جديدة، وتجنب إلغائها وإعادة إصدارها بتكاليف باهظة. ومن خلال مركز الكرامة للأعمال (KBC) وبترخيص مركز آمر المعتمد رقم 772 بإدارة الإمارات لخدمات رجال الأعمال (ESS)، نوفر تنفيذاً فورياً لطلبات التعليق وفك التعليق واسترداد الضمان.

بدلاً من إلغاء إقامات الأسرة، يتيح وضع التعليق مهلة تصل إلى 60 يوماً للموظف لتعديل وضعه ونقل كفالته لشركته الجديدة عبر إيداع ضمان مالي مؤقت ومسترد بقيمة 2,500 درهم لدى إقامة دبي. وفور صدور إقامة الكفيل الجديدة، نقوم بفك التعليق واسترداد مبلغ الضمان المالي بالكامل إلى حساب الكفيل البنكي، مما يوفر آلاف الدراهم من رسوم الإلغاء والفحص الطبي الجديد ورسوم الهوية.

ويتميز مركز الكرامة للأعمال (بجوار بريد الكرامة) باحتضان مركز الكرامة للياقة الطبية السريعة (KMFC / مركز الكرامة الطبي) ومكاتب تسهيل وبصمة الهوية، مما يتيح للكفيل إنجاز فحص الإقامة الجديدة وفك تعليق الأسرة تحت سقف واحد. تبلغ الرسوم الحكومية لطلب التعليق 150 درهماً، مع الضمان المسترد 2,500 درهم، ورسوم طباعة ESS المعتمدة 200 درهم.`,
    legalFrameworkEn: `Federal Decree-Law No. 29 of 2021 regarding Foreigners Entry and Residence, UAE Cabinet Decision No. 65 of 2022, and GDRFA Dubai Dependent Residence Suspension Directives.`,
    legalFrameworkAr: `المرسوم بقانون اتحادي رقم (29) لسنة 2021 بشأن دخول وإقامة الأجانب، وقرار مجلس الوزراء رقم (65) لسنة 2022، وضوابط إقامة دبي لتعليق إقامات الأسرة والمعالين.`,
    eligibilityEn: [
      'Sponsor holding valid Dubai employment residency transitioning to a new registered employer in Dubai',
      'Valid passport copies and current active residence permits of all sponsored family dependents',
      'Electronic job offer or new approved work permit from MoHRE or new Free Zone authority',
      'Payment of official refundable security guarantee deposit of AED 2,500 via authorized Amer portal',
    ],
    eligibilityAr: [
      'حمل الكفيل لإقامة عمل سارية في دبي بصدد الانتقال لجهة عمل جديدة مرخصة في دبي',
      'جوازات سفر سارية وإقامات فعالة لجميع أفراد الأسرة المراد تعليق إقاماتهم',
      'عرض عمل إلكتروني جديد أو تصريح عمل معتمد من وزارة الموارد البشرية أو سلطة المنطقة الحرة',
      'سداد الضمان المالي الرسمي المسترد بقيمة 2,500 درهم عبر بوابة آمر المعتمدة',
    ],
    galleryImages: COMMON_GALLERY,
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'Dependent File Audit & Job Offer Review',
        titleAr: 'تدقيق ملفات الأسرة وعرض العمل الجديد',
        descEn: 'Senior Amer consultants verify sponsor new MoHRE job offer and cross-check family visa validity dates on GDRFA servers.',
        descAr: 'تدقيق عرض العمل الجديد للكفيل والتأكد من سريان إقامات الأسرة وعدم وجود غرامات تأخير على خوادم إقامة دبي.',
        durationEn: '15 - 30 Mins',
        durationAr: '15 - 30 دقيقة',
      },
      {
        stepNumber: 2,
        titleEn: 'Electronic Visa Hold Lodgement & Deposit',
        titleAr: 'إرسال طلب التعليق وإيداع الضمان المالي',
        descEn: 'Submission of the Family Visa Hold petition into GDRFA immigration system with official settlement of the AED 2,500 refundable bond.',
        descAr: 'إرسال طلب تعليق إقامات المعالين عبر نظام آمر وسداد الضمان المالي المسترد (2,500 درهم) ورسوم الخدمة.',
        durationEn: '30 - 60 Mins',
        durationAr: '30 - 60 دقيقة',
      },
      {
        stepNumber: 3,
        titleEn: 'Sponsor Visa Transfer & KMFC Medical Screening',
        titleAr: 'نقل إقامة الكفيل والفحص الطبي في مركز الكرامة',
        descEn: 'Sponsor completes cancellation, new work entry permit, and expedited medical fitness test at co-located Karama Medical Center (KMFC).',
        descAr: 'إنجاز إلغاء الكفيل وإصدار إقامته الجديدة وإجراء فحص اللياقة الطبية السريع في مركز الكرامة الطبي المدمج بالمركز.',
        durationEn: '24 - 48 Hours',
        durationAr: '24 - 48 ساعة',
      },
      {
        stepNumber: 4,
        titleEn: 'Family Visa Unhold & Security Bond Refund',
        titleAr: 'فك التعليق واسترداد الضمان المالي لحسابك',
        descEn: 'Filing of unhold petition with new sponsor residence copy, restoring full family validity and initiating automatic deposit refund to sponsor IBAN.',
        descAr: 'تقديم طلب فك التعليق فور صدور إقامة الكفيل الجديدة وإعادة سريان إقامات الأسرة واسترداد الضمان لحسابك البنكي.',
        durationEn: 'Instant / Same Day',
        durationAr: 'فوري / نفس اليوم',
      },
    ],
    faqs: [
      {
        questionEn: 'How much money do I need to deposit to put my family visa on hold in Dubai?',
        questionAr: 'كم مبلغ الضمان المالي المطلوب لتعليق إقامات الأسرة في دبي؟',
        answerEn: 'GDRFA Dubai requires a standard security deposit of AED 2,500 (plus a nominal AED 150 processing fee). This deposit covers all eligible dependents under your sponsorship and is 100% refundable once your new visa is stamped and the file unheld.',
        answerAr: 'تشترط إقامة دبي إيداع ضمان مالي رسمي بقيمة 2,500 درهم (بالإضافة لرسم المعالجة 150 درهماً)، ويغطي هذا المبلغ كافة المعالين المكفولين، ويُسترد بالكامل بنسبة 100% فور فك التعليق.',
      },
      {
        questionEn: 'How long can family visas remain on hold while I change jobs?',
        questionAr: 'كم المدة القصوى المسموح بها لبقاء إقامات الأسرة قيد التعليق؟',
        answerEn: 'Under current GDRFA immigration directives, a family visa hold is valid for up to 60 days, giving the sponsor ample time to finalize employment cancellation, new contract registration, medical testing, and residence stamping.',
        answerAr: 'تمنحك إقامة دبي مهلة تصل إلى 60 يوماً لبقاء إقامات الأسرة معلقة، وهي فترة كافية تماماً لإلغاء إقامتك السابقة وتوقيع العقد الجديد والفحص وتثبيت الإقامة الجديدة.',
      },
      {
        questionEn: 'Can my family members travel outside Dubai while on hold?',
        questionAr: 'هل يستطيع أفراد الأسرة السفر خارج دبي أثناء وجود إقاماتهم قيد التعليق؟',
        answerEn: 'No. While visas are suspended on hold, family members must remain inside the UAE. Travelling outside the country during this period can invalidate the hold status and forfeit the security deposit.',
        answerAr: 'لا، أثناء فترة تعليق الإقامة، يجب أن يبقى أفراد الأسرة داخل الدولة؛ حيث إن السفر للخارج خلال التعليق قد يؤدي لإلغاء الإقامة ومصادرة الضمان المالي.',
      },
      {
        questionEn: 'Why handle family visa hold and sponsor transfer at Karama Business Center?',
        questionAr: 'لماذا يفضل إنجاز تعليق إقامات الأسرة في مركز الكرامة للأعمال؟',
        answerEn: 'Because Karama Business Center houses Amer services and Karama Medical Center (KMFC) under one roof, allowing you to complete your sponsor medical fitness test, residency transfer, and family unhold in a single coordinated location.',
        answerAr: 'لأن مركز الكرامة للأعمال يدمج خدمات آمر مع مركز الكرامة الطبي (KMFC) ومكاتب تسهيل، مما يتيح لك إنجاز فحصك الطبي ونقل إقامتك وفك تعليق الأسرة في مكان واحد.',
      },
    ],
    reviews: [
      {
        name: 'Gareth Edwards',
        roleEn: 'Commercial Director',
        roleAr: 'مدير تجاري',
        companyEn: 'Apex Global Logistics',
        companyAr: 'أبيكس جلوبال',
        rating: 5,
        date: 'October 2026',
        commentEn: 'Changed companies last month and was dreading having to cancel and redo visas for my wife and two daughters. Karama Business Center handled the family hold in 30 minutes, processed my new medical at Karama Medical Center the next day, and released my deposit back to my bank account upon unholding. Saved me over AED 8,000.',
        commentAr: 'انتقلت لشركة جديدة الشهر الماضي وكنت قلقاً من تكلفة إلغاء وتجديد إقامات زوجتي وابنتيّ. أنجز مركز الكرامة للأعمال تعليق الإقامات في 30 دقيقة، وفحصي الجديد في مركز الكرامة الطبي في اليوم التالي، وتم فك التعليق واسترجاع الضمان لحسابي بالكامل. وفروا علي أكثر من 8,000 درهم.',
      },
      {
        name: 'Syed Zeeshan Ali',
        roleEn: 'Chief Accountant',
        roleAr: 'رئيس حسابات',
        companyEn: 'Ali & Sons Trading',
        companyAr: 'علي وأولاده للتجارة',
        rating: 5,
        date: 'September 2026',
        commentEn: 'Very smooth execution. ESS at Karama Business Center monitored my 60-day deadline, reminded me to bring the new residence approval, and completed the unhold file immediately. Flawless service.',
        commentAr: 'إنجاز سلس للغاية. تابع فريق ESS بمركز الكرامة للأعمال مهلة الـ 60 يوماً وذكروني بإحضار الإقامة الجديدة وفكوا التعليق فوراً. خدمة متقنة.',
      },
    ],
    targetKeywords: {
      shortTail: [
        'Karama Business Center KBC',
        'Family Visa Hold Dubai',
        'Dependent Visa Freeze Amer',
        'Visa Unhold Service Dubai',
        'Karama Medical Center Sponsor Transfer',
        'ESS Emirates Secretarial Services',
        'GDRFA Family Hold Typing',
      ],
      longTail: [
        'how to put family visa on hold in Dubai Karama Business Center',
        'cost and deposit of family visa hold Amer center Dubai',
        'how to get refund of family hold deposit 2500 AED',
        'sponsor transfer and medical test Karama medical center',
        'family visa hold processing time next to Karama post office',
      ],
    },
    featuredFacilityImage: {
      url: heroCenterImage,
      captionEn: 'Family Residency and Sponsor Advisory Counters at Karama Business Center',
      captionAr: 'منصات استشارات إقامات الأسرة والكفلاء في مركز الكرامة للأعمال',
      locationBadgeEn: 'Al Karama, Next to Karama Post Office, Dubai',
      locationBadgeAr: 'الكرامة، بجوار بريد الكرامة، دبي',
    },
  },

  // =========================================================================
  // 11. ESTABLISHMENT IMMIGRATION CARD (New & Renewal)
  // =========================================================================
  'amer-establishment-card': {
    detailedOverviewEn: `The Establishment Immigration Card (frequently referred to as the Company Immigration File or Establishment Card) is the mandatory primary legal credential issued by the General Directorate of Residency and Foreigners Affairs (GDRFA Dubai) that authorizes a commercial, professional, or industrial enterprise to sponsor international workforce, manage investor visas, and process corporate entry permits in Dubai. At Karama Business Center (KBC), operating under authorized Amer Center License #772 and managed by Emirates Secretarial Services (ESS), we provide complete, corporate-grade establishment card issuance, annual renewal, and company profile synchronization services.

Operating without a valid Establishment Card prevents an enterprise from executing any immigration transaction in Dubai: employee visas cannot be issued, expired residencies cannot be renewed, and tourist entry permits cannot be processed. Our corporate immigration division handles the complete file lifecycle: obtaining commercial trade license validations from the Dubai Department of Economy and Tourism (DET) or relevant Free Zone Authority, verifying corporate leasehold credentials (Ejari), auditing authorized signatories and national sponsor shareholding documents, and submitting the electronic dossier directly into the GDRFA immigration portal for instant card generation.

A unique strategic advantage for Dubai businesses partnering with Karama Business Center in Al Karama (conveniently positioned next to the Karama Post Office) is our comprehensive corporate service integration. In addition to our authorized Amer division, our multi-departmental campus hosts the Karama Medical Fitness Express Service Center (KMFC) — known locally throughout Dubai as Karama Medical Center — alongside Tasheel Ministry of Human Resources and Emiratisation counters and authorized ICP biometric fingerprint stations. When you establish or renew your corporate file with us, your newly sponsored executives and workforce can immediately undergo their mandatory DHA medical fitness tests and Emirates ID biometrics in the same building. Official pricing adheres strictly to government standards: the government authority tariff is AED 750 (renewal) or AED 1,250 (new issuance), with certified ESS corporate audit and typing fees of AED 250.`,
    detailedOverviewAr: `تعتبر بطاقة المنشأة الصادرة عن الإدارة العامة للإقامة وشؤون الأجانب بدبي (GDRFA) الوثيقة القانونية الأساسية الإلزامية التي تخول أي شركة أو مؤسسة تجارية أو صناعية أو مهنية كفالة واستقدام الموظفين وإصدار إقامات الشركاء والمستثمرين في دبي. ومن خلال مركز الكرامة للأعمال (KBC) وبترخيص مركز آمر المعتمد رقم 772 بإدارة الإمارات لخدمات رجال الأعمال (ESS)، نقدم خدمة إصدار وتجديد وتحديث بطاقات المنشأة للشركات بكفاءة وسرعة فائقة.

يترتب على انتهاء بطاقة المنشأة تعليق كافة المعاملات الحكومية للشركة؛ حيث يتعذر إصدار تأشيرات جديدة أو تجديد إقامات الموظفين الحالية. ويتولى قسم خدمات الشركات لدينا تدقيق الرخصة التجارية الصادرة عن اقتصادية دبي أو المناطق الحرة، والتحقق من عقد إيجاري التجاري، واعتماد المفوضين بالتوقيع، وإرسال المعاملة إلكترونياً لإصدار البطاقة فوراً.

وتتمثل القيمة المضافة الكبرى للشركات في مركز الكرامة للأعمال (بجوار بريد الكرامة) في التكامل الميداني التام؛ حيث يضم المركز مركز الكرامة للياقة الطبية السريعة (KMFC / مركز الكرامة الطبي) ومكاتب تسهيل لوزارة العمل ومحطات البصمة البيومترية، فبمجرد تفعيل بطاقة المنشأة، يمكن للشركة إرسال موظفيها لإجراء الفحص الطبي والبصمة في نفس المبنى. تبلغ الرسوم الحكومية الرسمية 750 درهماً للتجديد و1,250 درهماً للإصدار الجديد، ورسوم تدقيق وطباعة ESS المعتمدة 250 درهماً.`,
    legalFrameworkEn: `Federal Decree-Law No. 29 of 2021 regarding Foreigners Entry and Residence, UAE Cabinet Decision No. 65 of 2022, and GDRFA Dubai Corporate Establishment Regulations.`,
    legalFrameworkAr: `المرسوم بقانون اتحادي رقم (29) لسنة 2021 بشأن دخول وإقامة الأجانب، وقرار مجلس الوزراء رقم (65) لسنة 2022، واللوائح التنفيذية لملفات المنشآت بإقامة دبي.`,
    eligibilityEn: [
      'Active commercial, professional, or industrial Trade License issued by Dubai DET or accredited UAE Free Zone',
      'Valid commercial lease contract registered under official Dubai Ejari tenancy system',
      'Original Emirates ID copies of corporate partners, managers, and authorized local service agents',
      'Corporate Memorandum of Association (MOA) and recent Partners List certificate',
    ],
    eligibilityAr: [
      'رخصة تجارية أو مهنية أو صناعية سارية المفعول صادرة عن اقتصادية دبي أو إحدى المناطق الحرة',
      'عقد إيجار تجاري ساري ومصدق عبر نظام إيجاري المعتمد بدبي لمقر المنشأة',
      'صور الهوية الإماراتية لجميع الشركاء والمديرين والوكيل المحلي المفوضين بالتوقيع',
      'عقد تأسيس الشركة (MOA) والملحق وكشف الشركاء الحديث المعتمد',
    ],
    galleryImages: COMMON_GALLERY,
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'Corporate Trade License & Ejari Pre-Audit',
        titleAr: 'تدقيق الرخصة التجارية وعقد إيجاري',
        descEn: 'Senior Amer corporate typists verify DET trade license validity, Ejari commercial lease, and partner signatory authorizations.',
        descAr: 'فحص استباقي للرخصة التجارية واشتراطات إيجاري التجاري وصلاحيات المفوضين بالتوقيع لضمان قبول الملف.',
        durationEn: '15 - 30 Mins',
        durationAr: '15 - 30 دقيقة',
      },
      {
        stepNumber: 2,
        titleEn: 'GDRFA Electronic Establishment Submission',
        titleAr: 'التقديم الإلكتروني بنظام إقامة دبي',
        descEn: 'Direct lodgement into the GDRFA Dubai corporate immigration gateway with official fee settlement via authorized Amer link.',
        descAr: 'إرسال ملف المنشأة عبر بوابة إقامة دبي المعتمدة وسداد الرسوم الحكومية الرسمية عبر نظام آمر.',
        durationEn: '30 - 60 Mins',
        durationAr: '30 - 60 دقيقة',
      },
      {
        stepNumber: 3,
        titleEn: 'Immigration Approval & File Activation',
        titleAr: 'اعتماد المعاملة وتفعيل ملف المنشأة',
        descEn: 'Official approval from GDRFA Dubai corporate section and electronic activation of the company sponsorship quota.',
        descAr: 'صدور موافقة إقامة دبي الرسمية وتفعيل ملف المنشأة الإلكتروني وكوتة استقدام الموظفين فوراً.',
        durationEn: '2 - 4 Hours',
        durationAr: '2 - 4 ساعات',
      },
      {
        stepNumber: 4,
        titleEn: 'Digital Establishment Card Dispatch & Sync',
        titleAr: 'إصدار بطاقة المنشأة الرقمية والربط',
        descEn: 'Generation of updated electronic Establishment Card certificate dispatched instantly to corporate email and authorized dashboard.',
        descAr: 'إصدار بطاقة المنشأة الرقمية المعتمدة وتزويد الشركة بالنسخة الإلكترونية المربوطة بأنظمة الإقامة.',
        durationEn: 'Instant',
        durationAr: 'فوري',
      },
    ],
    faqs: [
      {
        questionEn: 'How often must a Dubai company renew its Establishment Immigration Card?',
        questionAr: 'كم تبلغ مدة صلاحية بطاقة المنشأة في دبي ومتى يجب تجديدها؟',
        answerEn: 'For Mainland Dubai companies registered with the Department of Economy and Tourism (DET), the Establishment Card is valid for 1 year and must be renewed annually alongside the commercial trade license.',
        answerAr: 'بالنسبة للشركات المسجلة في اقتصادية دبي (Mainland)، تسري بطاقة المنشأة لمدة سنة واحدة، ويتعين تجديدها سنوياً بالتزامن مع تجديد الرخصة التجارية.',
      },
      {
        questionEn: 'What documents are required to renew a company Establishment Card?',
        questionAr: 'ما هي المستندات المطلوبة لتجديد بطاقة المنشأة في دبي؟',
        answerEn: 'You need the renewed Trade License copy, current commercial Ejari tenancy certificate, copies of partners’ Emirates IDs, and the existing establishment card number, which our Amer desk processes in under an hour.',
        answerAr: 'تحتاج لنسخة الرخصة التجارية المجددة، شهادة إيجاري التجاري السارية، صور هويات الشركاء، ورقم بطاقة المنشأة الحالية، ويتم إنجازها في مكتبنا خلال أقل من ساعة.',
      },
      {
        questionEn: 'What happens if a company fails to renew its Establishment Card on time?',
        questionAr: 'ما هي التبعات والغرامات المترتبة على تأخير تجديد بطاقة المنشأة؟',
        answerEn: 'Late renewals incur official monthly fines from GDRFA Dubai, and the company portal is automatically blocked, preventing any visa issuance, renewals, or employee status amendments until cleared.',
        answerAr: 'يترتب على التأخير فرض غرامات شهرية رسمية من إقامة دبي، وإيقاف تلقائي لملف الشركة، مما يمنع إصدار أو تجديد أي إقامات أو تعديل أوضاع للموظفين حتى السداد والتجديد.',
      },
      {
        questionEn: 'Can Karama Business Center handle my company’s employee medical fitness tests too?',
        questionAr: 'هل يمكن لمركز الكرامة للأعمال إنجاز الفحوصات الطبية لموظفي شركتنا أيضاً؟',
        answerEn: 'Yes! That is our signature advantage. Karama Business Center houses Karama Medical Fitness Express Service Center (KMFC / Karama Medical Center), so your workforce can complete their DHA medical tests in the same building.',
        answerAr: 'نعم بالتأكيد! هذه هي ميزتنا الاستثنائية؛ حيث يضم مركز الكرامة للأعمال مركز الكرامة للياقة الطبية السريعة (KMFC / مركز الكرامة الطبي)، مما يتيح لكافة موظفيكم إنجاز الفحص الطبي في نفس المبنى.',
      },
    ],
    reviews: [
      {
        name: 'Rashid Al-Maktoum',
        roleEn: 'Managing Partner',
        roleAr: 'شريك إداري',
        companyEn: 'Apex Horizon Contracting LLC',
        companyAr: 'أبيكس هورايزون للمقاولات',
        rating: 5,
        date: 'October 2026',
        commentEn: 'Renewed our mainland establishment card and updated corporate signatories at Karama Business Center. The team audited our Ejari and commercial license in 15 minutes, and our immigration file was active that afternoon. Seamless corporate service.',
        commentAr: 'جددنا بطاقة المنشأة للشركة وحدثنا المفوضين بالتوقيع في مركز الكرامة للأعمال. دقق الفريق عقد إيجاري والرخصة في 15 دقيقة وتم تفعيل الملف بعد الظهر. خدمة شركات ممتازة.',
      },
      {
        name: 'Vikram Mehta',
        roleEn: 'Corporate PRO & Legal Affairs',
        roleAr: 'مسؤول العلاقات الحكومية والشؤون القانونية',
        companyEn: 'Mehta Industrial Enterprises',
        companyAr: 'مهتا للصناعات',
        rating: 5,
        date: 'September 2026',
        commentEn: 'ESS at Karama Business Center is our designated PRO partner. They handle over 50 employee visas every month, and having Karama Medical Center right down the hall makes employee onboarding 3x faster than any other center in Dubai.',
        commentAr: 'فريق ESS بمركز الكرامة للأعمال هو شريكنا المعتمد للمعاملات الحكومية. ينجزون أكثر من 50 إقامة شهرياً، ووجود مركز الكرامة الطبي في نفس المركز يسرع إنجاز الموظفين 3 أضعاف أي مركز آخر.',
      },
    ],
    targetKeywords: {
      shortTail: [
        'Karama Business Center KBC',
        'Dubai Establishment Card Renewal',
        'Company Immigration Card Amer',
        'Establishment File Opening Dubai',
        'Karama Medical Center Corporate Testing',
        'ESS Emirates Secretarial Services',
        'GDRFA Establishment Typing',
      ],
      longTail: [
        'how to renew establishment card in Dubai Karama Business Center',
        'documents required for company immigration card Amer Dubai',
        'establishment card cost breakdown new and renewal 2026',
        'corporate visa processing and medical test Karama medical center',
        'fastest establishment card typing center Al Karama post office',
      ],
    },
    featuredFacilityImage: {
      url: heroCenterImage,
      captionEn: 'Corporate Business Affairs & Establishment Card Counters at Karama Business Center',
      captionAr: 'منصات شؤون الشركات وبطاقات المنشأة في مركز الكرامة للأعمال',
      locationBadgeEn: 'Al Karama, Next to Karama Post Office, Dubai',
      locationBadgeAr: 'الكرامة، بجوار بريد الكرامة، دبي',
    },
  },

  // =========================================================================
  // 12. IMMIGRATION BLOCK REMOVAL & FILE COMPLIANCE
  // =========================================================================
  'amer-establishment-block-removal': {
    detailedOverviewEn: `Resolving an administrative, judicial, or regulatory block placed on a corporate immigration file by the General Directorate of Residency and Foreigners Affairs (GDRFA Dubai) is a time-critical legal procedure that demands senior expertise, ministerial coordination, and immediate root-cause remediation. At Karama Business Center (KBC), operating under authorized Amer Center License #772 and managed by Emirates Secretarial Services (ESS), we operate a specialized corporate immigration compliance desk focused exclusively on auditing, petitioning, and lifting establishment file blocks across Dubai.

Immigration blocks can paralyze an entire corporate organization: when an establishment file is blocked, no new entry permits can be processed, existing employee residencies cannot be renewed, and foreign business partners are unable to enter the UAE. Common underlying causes include expired commercial trade licenses, unrenewed commercial Ejari lease contracts, pending labour disputes registered with MoHRE, unregularized absconding reports, or judicial execution orders. Our senior legal consultants conduct an exhaustive, real-time diagnostic audit directly on the GDRFA database to pinpoint the exact nature, originating authority, and statutory requirements needed to clear the restriction.

Partnering with Karama Business Center in Al Karama (located immediately adjacent to the Karama Post Office) provides businesses with an authoritative, unified government interface. Because our campus hosts authorized Amer counters, Tasheel labour reconciliation desks, and the Karama Medical Fitness Express Service Center (KMFC) — known locally throughout Dubai as Karama Medical Center — we can resolve cross-departmental compliance issues in a single location. Whether clearing pending staff medicals, settling statutory fines, or lodging ministerial appeals, our case managers oversee your file until full unrestricted portal access is formally restored. We maintain constant communication with company directors and HR leadership, ensuring that corporate transactions resume smoothly without future compliance risks. Official pricing is transparent: government clearance and petition tariffs start at AED 500, with certified ESS legal audit and liaison fees of AED 350.`,
    detailedOverviewAr: `يعد فك ورفع الحظر الإداري أو القضائي المفروض على ملف المنشأة لدى الإدارة العامة للإقامة وشؤون الأجانب بدبي (GDRFA) إجراءً قانونياً عاجلاً يتطلب خبرة عميقة وتنسيقاً حكومياً رفيع المستوى لإزالة أسباب الحظر وإعادة سريان معاملات الشركة. ومن خلال مركز الكرامة للأعمال (KBC) وبترخيص مركز آمر المعتمد رقم 772 بإدارة الإمارات لخدمات رجال الأعمال (ESS)، نوفر قسماً متخصصاً لتدقيق وحل مشاكل الحظر على ملفات المنشآت والشركات في دبي.

يؤدي الحظر المفروض على ملف المنشأة إلى شلل تام في حركة الموظفين والشركاء؛ حيث يمنع إصدار أي تأشيرات جديدة أو تجديد الإقامات الحالية أو سفر المسؤولين. وتتعدد أسباب الحظر بين انتهاء الرخصة التجارية أو عقد إيجاري، أو وجود منازعات عمالية معلقة في وزارة العمل، أو بلاغات هروب غير مسواة، أو قرارات تنفيذ قضائية. ويقوم مستشارونا بإجراء فحص تشخيصي لحظي لنظام إقامة دبي لتحديد سبب الحظر والجهة المصدرة بدقة وإعداد مذكرة رفع الحظر الرسمية.

ويتميز مركز الكرامة للأعمال (بجوار بريد الكرامة) بجمعه بين خدمات آمر ومكاتب تسهيل ومركز الكرامة للياقة الطبية السريعة (KMFC / مركز الكرامة الطبي)، مما يتيح معالجة المشكلات المتشابكة وتسوية الغرامات في مقر واحد حتى رفع الحظر واستعادة الصلاحية التشغيلية الكاملة للشركة. تبدأ الرسوم الحكومية الرسمية من 500 درهم، ورسوم الاستشارات والطباعة المعتمدة لـ ESS بقيمة 350 درهماً.`,
    legalFrameworkEn: `Federal Decree-Law No. 29 of 2021 regarding Foreigners Entry and Residence, UAE Cabinet Decision No. 65 of 2022, and GDRFA Dubai Judicial Execution and Establishment Block Directives.`,
    legalFrameworkAr: `المرسوم بقانون اتحادي رقم (29) لسنة 2021 بشأن دخول وإقامة الأجانب، وقرار مجلس الوزراء رقم (65) لسنة 2022، ولوائح إقامة دبي المنظمة للحظر والتعميمات الإدارية والقضائية.`,
    eligibilityEn: [
      'Company partner, manager, or authorized PRO holding valid Emirates ID and corporate power of attorney',
      'Resolution of underlying originating cause (renewed trade license, updated commercial Ejari, or court clearance certificate)',
      'Official Trade License copy, MOA, and GDRFA corporate establishment card details',
      'Payment of any outstanding administrative penalties or ministerial settlement vouchers',
    ],
    eligibilityAr: [
      'حضور الشريك أو المدير أو المندوب المفوض بموجب بطاقة الهوية الإماراتية والوكالة الرسمية',
      'معالجة وتصحيح السبب الأساسي للحظر (تجديد الرخصة، تحديث إيجاري، أو إحضار كف بحث قضائي)',
      'نسخة الرخصة التجارية وعقد التأسيس وبيانات بطاقة المنشأة لدى إقامة دبي',
      'سداد أي غرامات إدارية متراكمة أو تسوية إيصالات الدفع الحكومية المستحقة',
    ],
    galleryImages: COMMON_GALLERY,
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'GDRFA System Diagnostic & Root Cause Audit',
        titleAr: 'الفحص التشخيصي وتحديد سبب الحظر',
        descEn: 'Instant inquiry on GDRFA immigration servers to identify block classification code, originating government body, and clearance criteria.',
        descAr: 'استعلام لحظي على خوادم إقامة دبي لتحديد رمز الحظر والجهة الحكومية المصدرة له والمستندات المطلوبة لإزالته.',
        durationEn: '15 - 30 Mins',
        durationAr: '15 - 30 دقيقة',
      },
      {
        stepNumber: 2,
        titleEn: 'Remediation & Legal Document Preparation',
        titleAr: 'استيفاء الشروط وإعداد المذكرة القانونية',
        descEn: 'Compiling rectified trade licenses, commercial lease renewals, court clearances, and drafting formal ministerial lift petitions.',
        descAr: 'تجهيز المستندات المصححة كعقود إيجاري المحدثة أو أحكام كف البحث، وصياغة طلب رفع الحظر الموجه للإدارة العامة.',
        durationEn: '1 - 2 Hours',
        durationAr: '1 - 2 ساعة',
      },
      {
        stepNumber: 3,
        titleEn: 'Official Ministerial Petition Lodgement',
        titleAr: 'إرسال طلب رفع الحظر للجنة المختصة',
        descEn: 'Submission into the specialized Amer clearance queue and direct liaison with GDRFA establishment control officers.',
        descAr: 'إرسال المعاملة عبر مسار التدقيق الخاص بمركز آمر والتنسيق المباشر مع ضباط الرقابة على المنشآت بإقامة دبي.',
        durationEn: '2 - 6 Hours',
        durationAr: '2 - 6 ساعات',
      },
      {
        stepNumber: 4,
        titleEn: 'Block Removal Confirmation & Portal Reactivation',
        titleAr: 'اعتماد رفع الحظر وتفعيل النظام بالكامل',
        descEn: 'Issuance of official Block Lifting Certificate and instant reactivation of all corporate visa issuance and renewal operations.',
        descAr: 'صدور شهادة رفع الحظر الرسمية وتفعيل صلاحيات إصدار وتجديد الإقامات على بوابة المنشأة بالكامل فوراً.',
        durationEn: '12 - 24 Hours',
        durationAr: '12 - 24 ساعة',
      },
    ],
    faqs: [
      {
        questionEn: 'How can a business find out why its establishment file was blocked?',
        questionAr: 'كيف يمكن للشركة معرفة سبب الحظر المفروض على ملفها بإقامة دبي؟',
        answerEn: 'Our senior Amer consultants at Karama Business Center perform an immediate system diagnostic check on the GDRFA network, revealing the exact block code, originating department, and resolution requirements within 15 minutes.',
        answerAr: 'يقوم كبار مستشاري آمر في مركز الكرامة للأعمال بفحص تشخيصي فوري على خوادم إقامة دبي، مما يوضح سبب الحظر والجهة المصدرة والاشتراطات المطلوبة لإزالته خلال 15 دقيقة.',
      },
      {
        questionEn: 'How long does it take to lift an immigration block on a company?',
        questionAr: 'كم يستغرق رفع الحظر وإعادة تفعيل ملف المنشأة رسمياً؟',
        answerEn: 'Once the underlying documentation (such as an updated trade license or court clearance) is submitted, standard administrative blocks are reviewed and lifted by GDRFA within 12 to 24 hours through our priority queue.',
        answerAr: 'بمجرد استيفاء المستندات المطلوبة (مثل تجديد الرخصة أو كف البحث القضائي)، يتم رفع الحظر الإداري واعتماده رسمياً من إقامة دبي خلال 12 إلى 24 ساعة عبر مسارنا ذي الأولوية.',
      },
      {
        questionEn: 'Can employees renew their visas while the company establishment file is blocked?',
        questionAr: 'هل يستطيع الموظفون تجديد إقاماتهم أثناء وجود حظر على ملف الشركة؟',
        answerEn: 'No. While a block is active, all visa issuance, renewals, and status modifications for the entire company are completely suspended. The block must be formally lifted before any staff transaction can proceed.',
        answerAr: 'لا، طالما كان الحظر سارياً، يتم تجميد كافة معاملات الإصدار والتجديد وتعديل الوضع لجميع موظفي الشركة، ويتعين رفع الحظر أولاً لاستئناف أي معاملة.',
      },
      {
        questionEn: 'Why choose Karama Business Center for complex company compliance issues?',
        questionAr: 'لماذا مركز الكرامة للأعمال هو الخيار الأمثل لحل مشاكل حظر الشركات؟',
        answerEn: 'Because Karama Business Center houses Amer services, Tasheel labour desks, and Karama Medical Center (KMFC) in one complex, enabling us to resolve inter-departmental issues and clear backlogged staff medicals rapidly.',
        answerAr: 'لأن مركز الكرامة للأعمال يجمع بين خدمات آمر ومكاتب تسهيل ومركز الكرامة الطبي (KMFC) في مجمع واحد، مما يمكننا من حل المشكلات المشتركة بين الدوائر وإنجاز الفحوصات المعلقة بسرعة فائقة.',
      },
    ],
    reviews: [
      {
        name: 'Mansoor Al-Zaabi',
        roleEn: 'Executive Chairman',
        roleAr: 'رئيس مجلس الإدارة التنفيذي',
        companyEn: 'Al-Zaabi Engineering & Contracting',
        companyAr: 'الزعابي للمقاولات الهندسية',
        rating: 5,
        date: 'October 2026',
        commentEn: 'Our establishment file was blocked unexpectedly due to a commercial lease renewal gap, stalling 20 pending worker visas. The corporate team at Karama Business Center identified the exact issue, compiled the rectifying documents, and had the block lifted by GDRFA the very next morning. Saved our construction deadline.',
        commentAr: 'تم حظر ملف شركتنا فجأة بسبب تأخر توثيق إيجاري التجاري، وتوقفت إقامات 20 عاملاً. قام فريق الشركات بمركز الكرامة للأعمال بتحديد السبب بدقة وتجهيز المستندات ورُفع الحظر من إقامة دبي صباح اليوم التالي. أنقذوا جدول مشروعنا.',
      },
      {
        name: 'Dharmesh Patel',
        roleEn: 'General Manager',
        roleAr: 'مدير عام',
        companyEn: 'Patel Electronics Middle East',
        companyAr: 'باتيل للإلكترونيات الشرق الأوسط',
        rating: 5,
        date: 'September 2026',
        commentEn: 'Outstanding legal knowledge. ESS typists drafted our explanation letter, submitted the petition, and kept us updated on WhatsApp every few hours until the system cleared. Highly competent center.',
        commentAr: 'معرفة قانونية وإجرائية ممتازة. صاغ فريق ESS مذكرة التوضيح وقدموا الطلب وأطلعونا على المستجدات عبر الواتساب حتى رُفع الحظر بالكامل. مركز كفء ومحترف جداً.',
      },
    ],
    targetKeywords: {
      shortTail: [
        'Karama Business Center KBC',
        'Dubai Immigration Block Removal',
        'Lift Establishment Block Amer',
        'Company File Unblock Dubai',
        'Karama Medical Center Corporate Clearance',
        'ESS Emirates Secretarial Services',
        'GDRFA Block Removal Typing',
      ],
      longTail: [
        'how to lift company immigration block in Dubai Karama Business Center',
        'reasons for establishment block GDRFA Dubai Amer',
        'cost of removing company immigration ban Amer Dubai',
        'resolve company file suspension next to Karama post office',
        'fast track establishment block clearance Amer Karama',
      ],
    },
    featuredFacilityImage: {
      url: heroCenterImage,
      captionEn: 'Corporate Legal Compliance & File Audit Counters at Karama Business Center',
      captionAr: 'منصات الامتثال القانوني وتدقيق ملفات الشركات في مركز الكرامة للأعمال',
      locationBadgeEn: 'Al Karama, Next to Karama Post Office, Dubai',
      locationBadgeAr: 'الكرامة، بجوار بريد الكرامة، دبي',
    },
  },
  // =========================================================================
  // 13. GDRFA PORTAL MOBILE NUMBER & PROFILE UPDATE
  // =========================================================================
  'amer-portal-mobile-update': {
    detailedOverviewEn: `Updating and authenticating your registered mobile telephone number, email address, and digital identity credentials in the General Directorate of Residency and Foreigners Affairs (GDRFA Dubai) and Federal Authority for Identity, Citizenship, Customs and Port Security (ICP) databases is an essential administrative requirement for every UAE resident and investor. At Karama Business Center (KBC), operating under authorized Amer Center License #772 and managed by Emirates Secretarial Services (ESS), we provide an instant in-person digital profile update service that synchronizes your official records across all UAE government portals.

In the modern UAE digital governance framework, having an outdated or incorrect mobile number linked to your Unified Identification Number (UID) or residency file creates immediate disruptions. All official one-time passwords (OTP), visa approval notifications, entry permit download links, residency renewal reminders, and UAE Pass biometric verifications are dispatched exclusively to the registered mobile number on record. If your number has changed, been disconnected, or was registered under an old company PRO's contact, you become unable to access your digital residency records or authorize essential government procedures.

Karama Business Center in Al Karama (conveniently positioned right next to the Karama Post Office) provides an immediate, foolproof resolution. Because our campus operates high-security biometric authentication terminals linked directly to both GDRFA and ICP mainframes, our authorized typists verify your physical Emirates ID and passport, update your registered contact information in real-time, and execute the automated verification OTP on the spot. Furthermore, because our building houses the Karama Medical Fitness Express Service Center (KMFC) — recognized locally throughout Dubai as Karama Medical Center — updating your contact records here ensures that your future DHA medical test result SMS notifications and electronic fitness certificates will reach your personal phone without delay. Official pricing is simple and transparent: the government authority update fee is AED 120, alongside our certified ESS typing and biometric verification fee of AED 50.`,
    detailedOverviewAr: `يعد تحديث وتوثيق رقم الهاتف المتحرك والبيانات الشخصية المسجلة لدى الإدارة العامة للإقامة وشؤون الأجانب بدبي (GDRFA) والهيئة الاتحادية للهوية والجنسية (ICP) متطلباً أساسياً بالغ الأهمية لكافة المقيمين والشركاء والمستثمرين في دولة الإمارات. ومن خلال مركز الكرامة للأعمال (KBC) وبترخيص مركز آمر المعتمد رقم 772 بإدارة الإمارات لخدمات رجال الأعمال (ESS)، نقدم خدمة تحديث لحظية للبيانات الرقمية تضمن مطابقة سجلك في كافة البوابات الحكومية.

يترتب على تسجيل رقم هاتف قديم أو غير مفعل في نظام الإقامة مشاكل عديدة؛ حيث تُرسل رموز التحقق السري (OTP)، وإشعارات صدور التأشيرات، وتنبيهات تجديد الإقامة، وتفعيلات الهوية الرقمية (UAE Pass) حصرياً إلى الرقم المسجل. وإذا فُقد الرقم أو سُجل برقم مندوب سابق، يتعذر على المقيم متابعة معاملاته.

ويوفر مركز الكرامة للأعمال (بجوار بريد الكرامة) حلاً فورياً؛ حيث نعتمد على محطات التحقق البيومتري المباشر لمطابقة الهوية وتحديث الرقم المعتمد فوراً. كما أن مجمعنا يضم مركز الكرامة للياقة الطبية السريعة (KMFC / مركز الكرامة الطبي)، مما يضمن وصول رسائل نتائج الفحص الطبي والشهادات الإلكترونية الصادرة عن هيئة الصحة مباشرة إلى هاتفك دون أي انقطاع. تبلغ الرسوم الحكومية 120 درهماً، ورسوم طباعة ESS المعتمدة 50 درهماً مع تفعيل فوري.`,
    legalFrameworkEn: `Federal Decree-Law No. 29 of 2021 regarding Foreigners Entry and Residence, UAE Cabinet Decision No. 65 of 2022, and GDRFA Dubai Electronic Services and Digital Identity Directives.`,
    legalFrameworkAr: `المرسوم بقانون اتحادي رقم (29) لسنة 2021 بشأن دخول وإقامة الأجانب، وقرار مجلس الوزراء رقم (65) لسنة 2022، ولوائح إقامة دبي للخدمات الرقمية والهوية المعتمدة.`,
    eligibilityEn: [
      'Original Emirates ID card of applicant or clear digital copy with active UAE Pass access',
      'Valid passport copy and current or previous residency visa page showing UID number',
      'Active UAE mobile telephone number registered under applicant’s Emirates ID with telecom operator',
      'Physical presence of the applicant or authorized legal power of attorney for corporate representatives',
    ],
    eligibilityAr: [
      'بطاقة الهوية الإماراتية الأصلية للمتعامل أو نسخة رقمية مع حساب مفعّل في الهوية الرقمية UAE Pass',
      'نسخة جواز السفر ساري المفعول وصفحة الإقامة الحالية أو السابقة موضحاً بها الرقم الموحد (UID)',
      'رقم هاتف متحرك إماراتي نشط مسجل باسم المتعامل لدى مزود الاتصالات (اتصالات أو دو)',
      'حضور صاحب المعاملة شخصياً أو وجود وكالة قانونية رسمية لمندوبي وممثلي الشركات',
    ],
    galleryImages: COMMON_GALLERY,
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'Identity & UID System Verification',
        titleAr: 'التحقق من الهوية والرقم الموحد',
        descEn: 'Instant verification of applicant Emirates ID, Unified Identification Number (UID), and active GDRFA file profile.',
        descAr: 'استعلام لحظي عن بطاقة الهوية والرقم الموحد (UID) وحالة ملف الإقامة في نظام إقامة دبي.',
        durationEn: '5 - 10 Mins',
        durationAr: '5 - 10 دقائق',
      },
      {
        stepNumber: 2,
        titleEn: 'Electronic Contact Update Lodgement',
        titleAr: 'إدخال وتحديث بيانات الاتصال إلكترونياً',
        descEn: 'Authorized Amer typist enters verified new mobile number and personal email into the official immigration database.',
        descAr: 'إدخال رقم الهاتف الجديد والبريد الإلكتروني المعتمد في قاعدة بيانات الإقامة عبر منصة آمر الرسمية.',
        durationEn: '5 - 10 Mins',
        durationAr: '5 - 10 دقائق',
      },
      {
        stepNumber: 3,
        titleEn: 'Live OTP Authentication & Clearance',
        titleAr: 'تأكيد رمز التحقق اللحظي والاعتماد',
        descEn: 'Generation of live verification OTP sent directly to applicant new mobile and validated in the system.',
        descAr: 'إرسال رمز التحقق (OTP) اللحظي إلى هاتف المتعامل الجديد وتأكيده واعتماده فوراً في النظام.',
        durationEn: 'Instant',
        durationAr: 'فوري',
      },
      {
        stepNumber: 4,
        titleEn: 'Full System Sync & Confirmation Receipt',
        titleAr: 'المزامنة الشاملة وطباعة إشعار التحديث',
        descEn: 'Automated synchronization with UAE Pass and GDRFA app, with official government confirmation slip provided.',
        descAr: 'المزامنة الفورية مع تطبيق UAE Pass وبوابات إقامة دبي وتسليم إشعار التحديث الحكومي المعتمد.',
        durationEn: 'Instant',
        durationAr: 'فوري',
      },
    ],
    faqs: [
      {
        questionEn: 'Why is it critical to update my mobile number in GDRFA records?',
        questionAr: 'لماذا يعد تحديث رقم الهاتف في نظام إقامة دبي أمراً بالغ الأهمية؟',
        answerEn: 'Because all official verification codes (OTP), visa approvals, entry permit downloads, residency renewal notices, and UAE Pass logins are linked directly to this number. An outdated number blocks your access to government services.',
        answerAr: 'لأن كافة رموز التحقق (OTP)، وموافقات التأشيرات، وأذونات الدخول، وإشعارات التجديد، ودخول الهوية الرقمية تعتمد على هذا الرقم؛ مما يجعل تحديثه شرطاً أساسياً لإنجاز أي معاملة.',
      },
      {
        questionEn: 'How long does it take to update my number at Karama Business Center?',
        questionAr: 'كم يستغرق تحديث رقم الهاتف في مركز الكرامة للأعمال؟',
        answerEn: 'The entire procedure takes only 10 to 15 minutes at our counter. Once the live OTP is entered, your profile updates across all GDRFA systems immediately.',
        answerAr: 'تستغرق المعاملة بالكامل من 10 إلى 15 دقيقة فقط في مكاتبنا، وبمجرد إدخال رمز التحقق، يتم تحديث سجلك في كافة أنظمة إقامة دبي فوراً.',
      },
      {
        questionEn: 'Does updating my mobile number also update my DHA medical test contact?',
        questionAr: 'هل يضمن تحديث الرقم وصول نتائج الفحص الطبي من هيئة الصحة؟',
        answerEn: 'Yes! Because our campus hosts Karama Medical Fitness Express Service Center (KMFC / Karama Medical Center), updating your master GDRFA file ensures your DHA Salem medical result SMS is delivered straight to your verified phone.',
        answerAr: 'نعم بالتأكيد! بما أن مجمعنا يضم مركز الكرامة للياقة الطبية السريعة (KMFC / مركز الكرامة الطبي)، فإن تحديث ملفك يضمن وصول رسائل نتائج فحص اللياقة الطبية مباشرة لهاتفك المعتمد.',
      },
      {
        questionEn: 'Can I update the mobile number for my sponsored family members?',
        questionAr: 'هل يمكنني تحديث أرقام هواتف أفراد أسرتي المكفولين؟',
        answerEn: 'Yes. As the sponsor, you can update contact records for your spouse, children, or sponsored staff by presenting their original Emirates IDs at our desk.',
        answerAr: 'نعم، يحق لك ككفيل تحديث بيانات الاتصال الخاصة بالزوجة أو الأبناء أو العمالة المساعدة بتقديم بطاقات الهوية الأصلية في مكتبنا.',
      },
    ],
    reviews: [
      {
        name: 'Nadim El-Khoury',
        roleEn: 'Architectural Consultant',
        roleAr: 'استشاري معماري',
        companyEn: 'Khoury Design Studio',
        companyAr: 'خوري ديزاين ستوديو',
        rating: 5,
        date: 'October 2026',
        commentEn: 'Lost my old UAE SIM card and could not access my UAE Pass or download my new visa. Walked into Karama Business Center, updated my mobile number in 10 minutes, and all my GDRFA approvals synced to my phone on the spot. Lifesaver service.',
        commentAr: 'فقدت شريحتي القديمة وتعذر علي الدخول لتطبيق الهوية الرقمية أو تحميل تأشيرتي. زرت مركز الكرامة للأعمال، وحدّثوا رقمي في 10 دقائق، ومُوزنت كافة موافقات إقامة دبي على هاتفي فوراً. خدمة إنقاذ سريعة.',
      },
      {
        name: 'Jessica Taylor',
        roleEn: 'Executive Assistant',
        roleAr: 'مساعدة تنفيذية',
        companyEn: 'Apex Global Partners',
        companyAr: 'أبيكس جلوبال',
        rating: 5,
        date: 'September 2026',
        commentEn: 'Updated contact numbers for our 3 company directors at once. ESS typists at Karama Business Center were very polite, quick, and verified every OTP smoothly. Great center.',
        commentAr: 'حدثت أرقام 3 من مديري شركتنا دفعة واحدة. كان موظفو ESS بمركز الكرامة للأعمال في قمة اللباقة والسرعة وأنجزوا التحقق بكل سلاسة. مركز رائع.',
      },
    ],
    targetKeywords: {
      shortTail: [
        'Karama Business Center KBC',
        'Update Mobile Number GDRFA',
        'Amer Portal Mobile Update',
        'ICP Phone Number Change',
        'Karama Medical Center Contact Sync',
        'ESS Emirates Secretarial Services',
        'Dubai Visa Phone Number Change',
      ],
      longTail: [
        'how to update registered mobile number in GDRFA Karama Business Center',
        'cost of updating phone number on Dubai visa Amer center',
        'change mobile number for UAE Pass and residency Karama',
        'Amer center phone update timings next to Karama post office',
        'instant mobile number update for medical test results Karama',
      ],
    },
    featuredFacilityImage: {
      url: smartDeskImage,
      captionEn: 'Digital Profile & Biometric Contact Update Terminal at Karama Business Center',
      captionAr: 'منصة تحديث الملف الرقمي وبيانات الاتصال المعتمدة في مركز الكرامة للأعمال',
      locationBadgeEn: 'Al Karama, Next to Karama Post Office, Dubai',
      locationBadgeAr: 'الكرامة، بجوار بريد الكرامة، دبي',
    },
  },

  // =========================================================================
  // 14. OVERSTAY FINE REDUCTION & WAIVER PETITION
  // =========================================================================
  'amer-fine-reduction': {
    detailedOverviewEn: `Navigating overstay fines and lodging an official petition for financial reduction or humanitarian waiver is a delicate legal procedure administered through the General Directorate of Residency and Foreigners Affairs (GDRFA Dubai). Expatriate residents, visitors, and corporate employees who have overstayed their legal visa validity or statutory grace period in Dubai face standardized statutory penalties of AED 50 per day. When extenuating circumstances exist — such as hospitalization, employer absconding disputes, travel flight disruptions, or humanitarian family emergencies — the law permits filing an official Fine Reduction Petition. At Karama Business Center (KBC), operating under authorized Amer Center License #772 and managed by Emirates Secretarial Services (ESS), we provide an experienced legal drafting and petition submission service that consistently achieves significant fine reductions or full waivers for eligible applicants.

The reduction process requires comprehensive substantiation: our senior Amer consultants audit your exact immigration ledger, calculate the statutory fine breakdown, compile verifiable supporting evidence (such as DHA-attested medical reports, legal dispute certificates from MoHRE, or airline cancellation notices), and prepare an authoritative Arabic legal brief addressed to the GDRFA Special Committee for Humanitarian Approvals. Once submitted, our case officers monitor the committee review daily, ensuring prompt consideration and rapid resolution.

What makes Karama Business Center in Al Karama (located immediately adjacent to the Karama Post Office) the premier venue for fine settlement is our integrated cross-departmental campus. Once the GDRFA committee grants your fine reduction approval and the discounted voucher is settled, our campus directly facilitates your immediate legal regularization. Because our facility incorporates the Karama Medical Fitness Express Service Center (KMFC) — known locally throughout Dubai as Karama Medical Center — alongside authorized ICP biometric stations, you can immediately proceed to your new residency medical test and Emirates ID typing in the same building, restoring full legal residency status without delay. Official pricing is transparent: government humanitarian committee review fee of AED 150, alongside certified ESS legal drafting and case follow-up fee of AED 350.`,
    detailedOverviewAr: `تعتبر تسوية غرامات التأخير وتقديم طلبات الاسترحام والتخفيض أو الإعفاء المالي إجراءً قانونياً وإنسانياً مهماً تنظمه الإدارة العامة للإقامة وشؤون الأجانب بدبي (GDRFA). يتعرض المقيمون والزوار الذين تجاوزوا فترات البقاء المسموحة أو فترات السماح الرسمية لغرامات قانونية تبلغ 50 درهماً يومياً. ولكن عند وجود أسباب قاهرة كالعلاج بالمستشفيات، أو المنازعات العمالية، أو الظروف الإنسانية، يتيح القانون تقديم طلب استرحام رسمي لتخفيض الغرامات المتراكمة. ومن خلال مركز الكرامة للأعمال (KBC) وبترخيص مركز آمر المعتمد رقم 772 بإدارة الإمارات لخدمات رجال الأعمال (ESS)، نقدم صياغة قانونية محترفة ومتابعة حثيثة لطلبات الاسترحام لتحقيق أعلى نسب التخفيض والإعفاء المعتمدة.

يتطلب تقديم الطلب دراسة دقيقة للملف وإرفاق الإثباتات الرسمية كالتقارير الطبية المصدقة من هيئة الصحة، أو كتب وزارة الموارد البشرية، أو مستندات المحاكم، وصياغة مذكرة استرحام موجهة للجنة الإنسانية بإقامة دبي باللغة العربية القانونية.

ويتميز مركز الكرامة للأعمال (بجوار بريد الكرامة) بتمكين المتعامل من تعديل وضعه فور صدور الموافقة وسداد الغرامة المخفضة؛ حيث يحتضن المركز مركز الكرامة للياقة الطبية السريعة (KMFC / مركز الكرامة الطبي) ومحطات البصمة البيومترية، فيمكنك الانتقال فوراً للفحص الطبي واستخراج الإقامة الجديدة في نفس اليوم وتفادي تراكم أي غرامات جديدة. تبلغ رسوم اللجنة الحكومية 150 درهماً، ورسوم الصياغة القانونية والمتابعة لـ ESS مبلغ 350 درهماً.`,
    legalFrameworkEn: `Federal Decree-Law No. 29 of 2021 regarding Foreigners Entry and Residence, UAE Cabinet Decision No. 65 of 2022, and GDRFA Dubai Humanitarian Committee Fine Waiver Directives.`,
    legalFrameworkAr: `المرسوم بقانون اتحادي رقم (29) لسنة 2021 بشأن دخول وإقامة الأجانب، وقرار مجلس الوزراء رقم (65) لسنة 2022، وقرارات لجنة الاسترحام والمساعدات الإنسانية بإقامة دبي.`,
    eligibilityEn: [
      'Applicant having accrued overstay fines on Dubai tourist, visit, employment, or cancelled residence permit',
      'Original passport copy and clear evidence of current in-country status and unified number (UID)',
      'Documented extenuating evidence (attested medical hospitalization records, MoHRE dispute reference, or court judgment)',
      'Commitment to immediately regularize residency status or exit the UAE upon approval of fine reduction',
    ],
    eligibilityAr: [
      'وجود غرامات تأخير متراكمة على تأشيرة سياحة أو زيارة أو إقامة عمل ملغاة في دبي',
      'نسخة جواز السفر وإثبات الوضع القانوني الحالي والرقم الموحد (UID)',
      'تقديم إثباتات رسمية للأسباب القاهرة (تقارير طبية مصدقة، أرقام شكاوى وزارة العمل، أو أحكام قضائية)',
      'الالتزام الفوري بتعديل الوضع واستخراج الإقامة الجديدة أو مغادرة الدولة فور صدور التخفيض',
    ],
    galleryImages: COMMON_GALLERY,
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'Fine Audit & Extenuating Dossier Review',
        titleAr: 'تدقيق الغرامات وفحص المستندات الداعمة',
        descEn: 'Senior Amer legal advisors audit your GDRFA ledger, calculate the exact daily fine total, and review your humanitarian evidence.',
        descAr: 'فحص وتدقيق دقيق لسجل الغرامات واحتساب إجمالي الأيام بدقة ودراسة المستندات والتقارير الطبية المؤيدة للاسترحام.',
        durationEn: '15 - 30 Mins',
        durationAr: '15 - 30 دقيقة',
      },
      {
        stepNumber: 2,
        titleEn: 'Arabic Legal Brief Drafting & Committee Submission',
        titleAr: 'صياغة المذكرة القانونية ورفع طلب الاسترحام',
        descEn: 'Drafting of formal Arabic humanitarian appeal brief and electronic lodgement into the GDRFA Special Committee portal.',
        descAr: 'صياغة المذكرة القانونية باللغة العربية الرسمية وإرسال ملف الاسترحام إلكترونياً للجنة الإنسانية بإقامة دبي.',
        durationEn: '1 - 2 Hours',
        durationAr: '1 - 2 ساعة',
      },
      {
        stepNumber: 3,
        titleEn: 'Committee Adjudication & Discount Voucher',
        titleAr: 'موافقة اللجنة وإصدار إيصال السداد المخفض',
        descEn: 'GDRFA committee reviews the merits of the case, approves the reduction percentage, and issues the official settlement voucher.',
        descAr: 'دراسة الطلب من لجنة الاسترحام واعتماد نسبة التخفيض وإصدار قسيمة سداد الغرامة المخفضة المعتمدة.',
        durationEn: '24 - 48 Hours',
        durationAr: '24 - 48 ساعة',
      },
      {
        stepNumber: 4,
        titleEn: 'Settlement Clearance & On-Site Regularization',
        titleAr: 'سداد الغرامة وتعديل الوضع بمركز الكرامة',
        descEn: 'Settlement of discounted voucher, clearing system blocks, and immediate transfer to Karama Medical Center (KMFC) for new residency testing.',
        descAr: 'سداد المبلغ المخفض، رفع التعميم فوراً، والتوجه لمركز الكرامة الطبي (KMFC) بالفندق/المركز للفحص واستكمال الإقامة.',
        durationEn: 'Same Day / 2h VIP',
        durationAr: 'نفس اليوم / ساعتان VIP',
      },
    ],
    faqs: [
      {
        questionEn: 'How much are overstay fines reduced by the GDRFA committee in Dubai?',
        questionAr: 'كم تبلغ نسبة التخفيض التي توافق عليها لجنة الاسترحام بإقامة دبي؟',
        answerEn: 'Fine reduction percentages depend entirely on the merits of the humanitarian evidence provided. Reductions commonly range from 50% to 80%, and in severe hospitalization cases, complete 100% fine waivers have been granted by the committee.',
        answerAr: 'تعتمد نسبة التخفيض على قوة المستندات والأسباب الإنسانية المقدمة، وغالباً ما تتراوح نسب التخفيض بين 50% إلى 80%، وفي بعض الحالات المرضية الشديدة يتم الإعفاء التام بنسبة 100%.',
      },
      {
        questionEn: 'How long does a fine reduction petition take to be approved in Dubai?',
        questionAr: 'كم يستغرق البت في طلب الاسترحام وتخفيض الغرامات لدى إقامة دبي؟',
        answerEn: 'Standard committee decisions are issued within 24 to 48 working hours. Our Amer case officers monitor the file continuously and notify you via WhatsApp the moment the reduced payment voucher is generated.',
        answerAr: 'يصدر قرار اللجنة عادة خلال 24 إلى 48 ساعة عمل، ويقوم مسؤول المعاملة لدينا بمتابعة الملف لحظياً وإبلاغك عبر الواتساب فور صدور قسيمة التخفيض.',
      },
      {
        questionEn: 'What happens after my overstay fines are reduced and paid?',
        questionAr: 'ما هي الخطوة التالية فور سداد الغرامة المخفضة المعتمدة؟',
        answerEn: 'Once settled, you are granted a grace clearance period (typically 7 to 14 days) to either exit the UAE without an immigration ban or complete your new residency medical test and status change at Karama Business Center.',
        answerAr: 'فور السداد، تمنحك إقامة دبي مهلة رسمية (عادة من 7 إلى 14 يوماً) إما لمغادرة الدولة بدون حرمان أو لتعديل وضعك وإجراء الفحص الطبي وتثبيت إقامتك بمركزنا.',
      },
      {
        questionEn: 'Why lodge your fine reduction at Karama Business Center?',
        questionAr: 'لماذا مركز الكرامة للأعمال هو الأنسب لمعاملات تخفيض الغرامات؟',
        answerEn: 'Because our integrated facility combines Amer legal typists with on-site Karama Medical Center (KMFC) and ICP biometrics, enabling you to settle your fines and complete your new visa medical test in one location before new fines accumulate.',
        answerAr: 'لأن مركزنا يدمج بين خبراء الصياغة القانونية بمركز آمر ومركز الكرامة الطبي (KMFC) وبصمة الهوية، مما يتيح لك تسوية الغرامة وإنجاز الفحص الطبي الجديد في نفس اليوم.',
      },
    ],
    reviews: [
      {
        name: 'Carlos Mendoza',
        roleEn: 'Executive Chef',
        roleAr: 'رئيس طهاة تنفيذي',
        companyEn: 'Independent Applicant',
        companyAr: 'متقدم مستقل',
        rating: 5,
        date: 'October 2026',
        commentEn: 'Accumulated over AED 14,000 in overstay fines after my previous employer shut down during my contract transition. ESS at Karama Business Center compiled my case, drafted an exceptional legal petition to GDRFA, and got my fines reduced to AED 1,800. Then they took my medical test at Karama Medical Center and stamped my new visa. Miraculous help.',
        commentAr: 'تراكمت علي غرامات تجاوزت 14,000 درهم بسبب إغلاق شركتي السابقة أثناء نقل الكفالة. أعد فريق ESS بمركز الكرامة للأعمال مذكرة استرحام استثنائية لإقامة دبي وتم تخفيض الغرامة إلى 1,800 درهم فقط، ثم أجروا لي الفحص بمركز الكرامة الطبي وثبتوا إقامتي الجديدة. خدمة مخلصة وأنقذتني.',
      },
      {
        name: 'Amina Nour',
        roleEn: 'Private Nurse',
        roleAr: 'ممرضة رعاية خاصة',
        companyEn: 'Healthcare Professional',
        companyAr: 'ممارس رعاية صحية',
        rating: 5,
        date: 'September 2026',
        commentEn: 'Very compassionate and professional legal team. They explained everything clearly, did not make false promises, and delivered a 75% reduction on my family’s accumulated visa fines. Highly recommended Amer center.',
        commentAr: 'فريق قانوني إنساني ومحترف للغاية. شرحوا لي كافة الإجراءات بصدق وبدون وعود وهمية وحققوا تخفيضاً بنسبة 75% على غرامات أسرتي. أفضل مركز آمر في دبي.',
      },
    ],
    targetKeywords: {
      shortTail: [
        'Karama Business Center KBC',
        'Overstay Fine Reduction Dubai',
        'Amer Fine Waiver Petition',
        'GDRFA Fine Discount Dubai',
        'Karama Medical Center Fine Clearance',
        'ESS Emirates Secretarial Services',
        'Visa Fine Reduction Karama',
      ],
      longTail: [
        'how to reduce overstay fines in Dubai Karama Business Center',
        'humanitarian fine reduction petition Amer GDRFA',
        'reduce residency fines after grace period Dubai 2026',
        'settle visa fines and do medical test Karama medical center',
        'fastest fine reduction approval Amer center next to Karama post office',
      ],
    },
    featuredFacilityImage: {
      url: heroCenterImage,
      captionEn: 'Legal Petition and Fine Regularization Consultation Desk at Karama Business Center',
      captionAr: 'منصة الاستشارات القانونية وطلبات تخفيض وتسوية الغرامات في مركز الكرامة للأعمال',
      locationBadgeEn: 'Al Karama, Next to Karama Post Office, Dubai',
      locationBadgeAr: 'الكرامة، بجوار بريد الكرامة، دبي',
    },
  },

  // =========================================================================
  // 15. ABSCONDING REPORT REMOVAL & STATUS RECONCILIATION
  // =========================================================================
  'amer-absconding-removal': {
    detailedOverviewEn: `Resolving and officially removing an Absconding Report (formally registered under UAE labour and immigration law as an Unexplained Work Absence circular or Escape Report) is an urgent sovereign legal procedure administered jointly by the General Directorate of Residency and Foreigners Affairs (GDRFA Dubai) and the Ministry of Human Resources and Emiratisation (MoHRE). When an employer files an absconding report against a foreign employee, the employee's legal status is automatically blacklisted across all UAE border security systems, blocking visa renewals, preventing employment transfers, and exposing the individual to detention or administrative deportation orders. At Karama Business Center (KBC), operating under authorized Amer Center License #772 and managed by Emirates Secretarial Services (ESS), we provide an authoritative legal reconciliation and absconding removal service.

Our senior immigration and labour legal advisors conduct a thorough forensic audit of the filed absconding circular to determine its legal validity. Reports filed maliciously (such as when the employee was on approved leave, hospitalized, or had pending unpaid salary complaints registered with MoHRE) can be formally challenged and vacated through statutory withdrawal petitions or judicial labour court clearance certificates. For consensual reconciliation cases, our center facilitates an amicable mutual settlement between the employer and employee, preparing official settlement agreements, processing fine waivers, and withdrawing the circular from both MoHRE and GDRFA databases simultaneously.

Choosing Karama Business Center in Al Karama (conveniently located next to the Karama Post Office) offers a unique institutional advantage. Because our campus houses authorized Amer counters, Tasheel labour reconciliation desks, and the Karama Medical Fitness Express Service Center (KMFC) — known locally throughout Dubai as Karama Medical Center — we can resolve the complete cross-departmental dispute under one roof. The moment your absconding circular is formally withdrawn and your system record cleared, you can immediately undergo an in-country status adjustment and take your DHA medical fitness test in our clinic to regularize your legal residence without leaving Dubai. Official pricing is transparent: government clearance and withdrawal fee of AED 1,050, with certified ESS legal consultation and petition filing fee of AED 450.`,
    detailedOverviewAr: `يعد إلغاء وسحب بلاغ الهروب (المسجل رسمياً في أنظمة العمل والإقامة كتعميم انقطاع عن العمل) إجراءً قانونياً سيادياً عاجلاً يختص به كل من وزارة الموارد البشرية والتوطين (MoHRE) والإدارة العامة للإقامة وشؤون الأجانب بدبي (GDRFA). يترتب على بلاغ الهروب إدراج اسم الموظف على القائمة السوداء، وتجميد إقامته، ومنعه من الانتقال لعمل آخر مع تعرضه لغرامات وإجراءات الحرمان. ومن خلال مركز الكرامة للأعمال (KBC) وبترخيص مركز آمر المعتمد رقم 772 بإدارة الإمارات لخدمات رجال الأعمال (ESS)، نقدم خدمة تسوية قانونية وسحب لبلاغات الهروب الكيدية والتوافقية باحترافية عالية.

يقوم مستشارونا القانونيون بدراسة حيثيات البلاغ؛ ففي حال ثبوت كيدية البلاغ (كوجود شكوى عمالية سابقة للأجور أو إجازة موثقة أو ظرف مرضي بالمستشفى)، يتم تقديم تظلم قانوني رسمي لإلغاء البلاغ بقوة القانون. وفي حالات التسوية الودية، ننسق الاتفاق بين الكفيل والمكفول وإتمام إجراءات التنازل وسحب التعميم من نظامي وزارة العمل وإقامة دبي بالتوازي.

وتكمن الميزة الكبرى لمركز الكرامة للأعمال (بجوار بريد الكرامة) في وجود مكاتب آمر وتسهيل ومركز الكرامة للياقة الطبية السريعة (KMFC / مركز الكرامة الطبي) في نفس المقر، فبمجرد رفع التعميم، يمكنك تعديل وضعك وإجراء فحص الإقامة الجديدة فوراً دون مغادرة المركز. تبلغ الرسوم الحكومية لسحب التعميم 1,050 درهماً، ورسوم الاستشارة والمتابعة لـ ESS مبلغ 450 درهماً.`,
    legalFrameworkEn: `Federal Decree-Law No. 33 of 2021 regarding Regulation of Labour Relations, Federal Decree-Law No. 29 of 2021, and GDRFA / MoHRE Joint Directives on Work Absence Circular Withdrawal.`,
    legalFrameworkAr: `المرسوم بقانون اتحادي رقم (33) لسنة 2021 بشأن تنظيم علاقات العمل، والمرسوم بقانون اتحادي رقم (29) لسنة 2021، والقرارات الوزارية المشتركة لتنظيم وسحب بلاغات الانقطاع عن العمل.`,
    eligibilityEn: [
      'Applicant having an active absconding / unexplained absence report registered under Dubai GDRFA or MoHRE',
      'Original passport copy and Unified Identification Number (UID) verification records',
      'For malicious reports: documentary evidence of pending labour complaint, approved leave, or hospital stay',
      'For amicable withdrawal: mutual consent statement and corporate letter signed by authorized employer signatory',
    ],
    eligibilityAr: [
      'وجود تعميم انقطاع عن العمل أو بلاغ هروب نشط مسجل في إقامة دبي أو وزارة الموارد البشرية والتوطين',
      'نسخة جواز السفر الأصلية وبيانات الرقم الموحد (UID) للاستعلام الأمني',
      'في البلاغات الكيدية: تقديم ما يثبت عدم صحة البلاغ (شكوى أجور مسجلة، إجازة معتمدة، أو تقرير طبي)',
      'في التسوية الودية: كتاب موافقة وتنازل رسمي موقع من المفوض بالتوقيع لدى المنشأة الكفيلة',
    ],
    galleryImages: COMMON_GALLERY,
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'Absconding Diagnostic & Legal Merit Review',
        titleAr: 'الفحص التشخيصي وتدقيق أسباب البلاغ',
        descEn: 'Instant system check on MoHRE and GDRFA databases to determine report filing date, circulating department, and dispute classification.',
        descAr: 'استعلام لحظي في أنظمة وزارة العمل وإقامة دبي لتحديد تاريخ تسجيل البلاغ ومبرراته والمستندات المطلوبة لإلغائه.',
        durationEn: '15 - 30 Mins',
        durationAr: '15 - 30 دقيقة',
      },
      {
        stepNumber: 2,
        titleEn: 'Withdrawal Petition & Settlement Preparation',
        titleAr: 'إعداد ملف التسوية وصياغة طلب السحب',
        descEn: 'Drafting formal legal withdrawal memo, coordinating employer reconciliation, or compiling proof of malicious filing.',
        descAr: 'صياغة المذكرة القانونية لسحب البلاغ أو إعداد اتفاقية التسوية الودية وتوثيقها وفق الأصول القانونية.',
        durationEn: '1 - 2 Hours',
        durationAr: '1 - 2 ساعة',
      },
      {
        stepNumber: 3,
        titleEn: 'MoHRE & GDRFA Simultaneous Clearance',
        titleAr: 'اعتماد سحب البلاغ من العمل والإقامة',
        descEn: 'Filing through authorized Amer and Tasheel joint ministerial channels, securing formal cancellation of the absence circular.',
        descAr: 'تقديم الطلب عبر المسار الحكومي المشترك لآمر وتسهيل وإصدار قرار إلغاء وسحب التعميم نهائياً من النظامين.',
        durationEn: '24 - 48 Hours',
        durationAr: '24 - 48 ساعة',
      },
      {
        stepNumber: 4,
        titleEn: 'System Blacklist Removal & On-Site Medical at KMFC',
        titleAr: 'رفع الحرمان وإجراء الفحص بمركز الكرامة',
        descEn: 'Removal of immigration security restriction, status regularization, and immediate transfer to Karama Medical Center (KMFC) for new visa medical.',
        descAr: 'شطب التعميم من القائمة الأمنية، وتعديل الوضع، والتوجه فوراً لمركز الكرامة الطبي (KMFC) بنفس المبنى للفحص وتثبيت الإقامة.',
        durationEn: 'Same Day Transition',
        durationAr: 'تحويل فوري في نفس اليوم',
      },
    ],
    faqs: [
      {
        questionEn: 'Can an absconding report be removed if it was filed unfairly by my employer?',
        questionAr: 'هل يمكن إلغاء بلاغ الهروب إذا تم تسجيله بشكل كيدي أو غير عادل؟',
        answerEn: 'Yes. If you can demonstrate that a labour dispute was active at MoHRE before the report was submitted, or that you were on approved leave or hospitalized, our legal team can petition MoHRE and GDRFA to declare the report malicious and strike it from your record.',
        answerAr: 'نعم بالتأكيد، إذا أثبتت وجود شكوى عمالية مسجلة قبل تاريخ البلاغ، أو أنك كنت في إجازة معتمدة أو تتلقى العلاج، يقدم فريقنا تظلماً لإثبات كيدية البلاغ وشطبه نهائياً من سجلك.',
      },
      {
        questionEn: 'How long does it take to clear an absconding report in Dubai?',
        questionAr: 'كم يستغرق رفع وسحب بلاغ الهروب رسمياً في دبي؟',
        answerEn: 'Consensual withdrawals with employer consent typically clear within 24 to 48 hours. Contested or malicious reports undergo ministerial committee review and usually take 3 to 5 business days for final clearance.',
        answerAr: 'تستغرق التسوية الودية بموافقة الكفيل من 24 إلى 48 ساعة، بينما تستغرق التظلمات في البلاغات الكيدية من 3 إلى 5 أيام عمل لدراستها واعتماد إلغائها من اللجنة المختصة.',
      },
      {
        questionEn: 'Can I get a new employment visa after my absconding report is lifted?',
        questionAr: 'هل يمكنني الحصول على إقامة عمل جديدة فور رفع بلاغ الهروب؟',
        answerEn: 'Yes. Once the circular is officially withdrawn and the system clears, your legal status is fully restored without an immigration ban, allowing you to join a new company and process your medical test immediately.',
        answerAr: 'نعم، فور شطب التعميم واعتماده رسمياً، يستعيد المتعامل وضعه القانوني الكامل دون أي حرمان، ويمكنه إصدار تأشيرة عمل جديدة وإجراء الفحص الطبي فوراً.',
      },
      {
        questionEn: 'Why resolve absconding matters at Karama Business Center?',
        questionAr: 'لماذا مركز الكرامة للأعمال هو الأنسب لحل قضايا بلاغات الهروب؟',
        answerEn: 'Because our campus unites Amer immigration counters, Tasheel labour desks, and Karama Medical Center (KMFC) in one location, allowing us to withdraw the labour report, clear immigration, and complete your new medical test seamlessly.',
        answerAr: 'لأن مركزنا يجمع بين خدمات آمر ومكاتب تسهيل ومركز الكرامة الطبي (KMFC) في مجمع واحد، مما يمكننا من سحب البلاغ من العمل والإقامة وإنجاز فحص إقامتك الجديدة بسلاسة تامة.',
      },
    ],
    reviews: [
      {
        name: 'Imran Bashir',
        roleEn: 'Project Supervisor',
        roleAr: 'مشرف مشاريع',
        companyEn: 'Independent Professional',
        companyAr: 'مهني مستقل',
        rating: 5,
        date: 'October 2026',
        commentEn: 'Had an unjust absconding circular lodged against me after a company wage dispute. The legal specialists at Karama Business Center cross-examined my MoHRE complaint records, drafted an irrefutable petition, and had the report vacated by GDRFA in 4 days. Then processed my new medical at Karama Medical Center. They literally saved my life and career.',
        commentAr: 'سُجل ضدي بلاغ هروب كيدي بسبب نزاع على الرواتب. قام المستشارون بمركز الكرامة للأعمال بمطابقة سجلات شكواي العمالية وصاغوا مذكرة محكمة ورُفع البلاغ من إقامة دبي خلال 4 أيام، ثم أجروا فحصي بمركز الكرامة الطبي. أنقذوا مستقبلي المهني في دبي.',
      },
      {
        name: 'Samuel Osei',
        roleEn: 'Logistics Coordinator',
        roleAr: 'منسق لوجستي',
        companyEn: 'FreightWave Logistics',
        companyAr: 'فرايت ويف',
        rating: 5,
        date: 'September 2026',
        commentEn: 'Very efficient reconciliation. ESS managed the mutual settlement with my previous sponsor, got the absconding report withdrawn, and processed my new visa with zero fines. Top-level professionalism.',
        commentAr: 'تسوية سريعة وفعالة للغاية. تولى فريق ESS التنسيق مع كفيلي السابق وسحبوا البلاغ وأصدروا تأشيرتي الجديدة بدون أي غرامات. احترافية رفيعة المستوى.',
      },
    ],
    targetKeywords: {
      shortTail: [
        'Karama Business Center KBC',
        'Absconding Removal Dubai',
        'Lift Escape Report Amer',
        'MoHRE Absconding Clearance',
        'Karama Medical Center Visa Regularization',
        'ESS Emirates Secretarial Services',
        'Cancel Absconding Circular Karama',
      ],
      longTail: [
        'how to remove absconding report in Dubai Karama Business Center',
        'cost to lift absconding circular Amer MoHRE Dubai',
        'malicious absconding report cancellation procedure 2026',
        'regularize visa status and medical test Karama medical center',
        'fast track absconding removal Amer center next to post office',
      ],
    },
    featuredFacilityImage: {
      url: heroCenterImage,
      captionEn: 'Labour Dispute Reconciliation & Legal Petition Counters at Karama Business Center',
      captionAr: 'منصات تسوية المنازعات العمالية والعرائض القانونية في مركز الكرامة للأعمال',
      locationBadgeEn: 'Al Karama, Next to Karama Post Office, Dubai',
      locationBadgeAr: 'الكرامة، بجوار بريد الكرامة، دبي',
    },
  },

  // =========================================================================
  // 16. UNIFIED FILE & FEDERAL VISA MERGE (UID Merge)
  // =========================================================================
  'amer-unified-file-federal-visa': {
    detailedOverviewEn: `Merging duplicate Unified Identification Numbers (UID numbers) and unifying federal visa files across the General Directorate of Residency and Foreigners Affairs (GDRFA Dubai) and Federal Authority for Identity, Citizenship, Customs and Port Security (ICP) is an indispensable technical procedure required to eliminate identity conflicts and enable seamless residency transactions. In the UAE immigration system, every foreign national is assigned a unique 6 to 9 digit Unified Number (UID). When an individual has entered the country on multiple tourist visas issued by different emirates (such as Abu Dhabi, Sharjah, or Dubai) or previously held older residency permits under different passport numbers, duplicate UID files are frequently generated. At Karama Business Center (KBC), operating under authorized Amer Center License #772 and managed by Emirates Secretarial Services (ESS), we provide an instant federal UID merge and file unification service.

Having duplicate UID files in the federal immigration database creates severe administrative obstacles: new employment entry permits will be automatically rejected due to 'duplicate person identity', Emirates ID biometric appointments cannot be scheduled, and DHA medical test results fail to link with the residency stamping portal. Our certified Amer typists perform an exhaustive cross-emirate system diagnostic to identify all active and archived UID files associated with your biometric identity, submit a formal unification dossier to the GDRFA technical audit division, and merge all records into a single, permanent primary UID number.

The strategic benefit of conducting your UID merge at Karama Business Center in Al Karama (located immediately adjacent to the Karama Post Office) is our direct system link with both Dubai GDRFA and the federal ICP network. Furthermore, because our facility directly houses the Karama Medical Fitness Express Service Center (KMFC) — known locally throughout Dubai as Karama Medical Center — alongside authorized ICP biometric stations, the moment your UID records are unified, you can immediately undergo your DHA medical fitness examination and Emirates ID biometric capture without bureaucratic delays. Official pricing is transparent: government authority unification fee of AED 150, alongside our certified ESS technical pre-audit and typing fee of AED 100.`,
    detailedOverviewAr: `يعد دمج الرقم الموحد (UID Merge) وتوحيد الملفات الاتحادية بين الإدارة العامة للإقامة وشؤون الأجانب بدبي (GDRFA) والهيئة الاتحادية للهوية والجنسية (ICP) إجراءً تقنياً وإجرائياً بالغ الأهمية لتصحيح تعارض البيانات وإزالة ازدواجية القيود في السجل السكاني الاتحادي. يُمنح كل أجنبي يدخل الدولة رقماً موحداً (UID)، ولكن عند الدخول بتأشيرات سياحية متعددة صادرة من إمارات مختلفة (مثل أبوظبي أو الشارقة أو دبي) أو تجديد جواز السفر، تتولد في كثير من الأحيان أرقام موحدة مكررة للشخص نفسه. ومن خلال مركز الكرامة للأعمال (KBC) وبترخيص مركز آمر المعتمد رقم 772 بإدارة الإمارات لخدمات رجال الأعمال (ESS)، نوفر خدمة دمج فوري للملفات الاتحادية وتوحيدها تحت رقم موحد دائم.

يترتب على وجود أكثر من رقم موحد رفض إصدار تصاريح العمل وتأشيرات الإقامة تلقائياً بسبب "ازدواجية القيد"، وتعذر حجز مواعيد البصمة، وفشل ربط نتائج الفحص الطبي بملف الإقامة. ويقوم كبار مستشارينا بالاستعلام عن كافة الأرقام الموحدة المرتبطة ببصمتك، وتقديم طلب الدمج الفني لتوحيد السجلات تحت رقم أساسي واحد معتمد.

وتبرز ميزة مركز الكرامة للأعمال (بجوار بريد الكرامة) في التواجد المشترك لـ مركز الكرامة للياقة الطبية السريعة (KMFC / مركز الكرامة الطبي) ومحطات البصمة البيومترية، فبمجرد إتمام دمج الرقم الموحد، يمكنك التقاط البصمة وإجراء الفحص الطبي فوراً دون أي تعطل. تبلغ الرسوم الحكومية الرسمية 150 درهماً، ورسوم التدقيق والطباعة لـ ESS مبلغ 100 درهم مع اعتماد فوري.`,
    legalFrameworkEn: `Federal Decree-Law No. 29 of 2021 regarding Foreigners Entry and Residence, UAE Cabinet Decision No. 65 of 2022, and Federal ICP / GDRFA Joint System Integration Directives.`,
    legalFrameworkAr: `المرسوم بقانون اتحادي رقم (29) لسنة 2021 بشأن دخول وإقامة الأجانب، وقرار مجلس الوزراء رقم (65) لسنة 2022، وضوابط الربط الإلكتروني الموحد بين الهيئة الاتحادية وإقامة دبي.`,
    eligibilityEn: [
      'Individual holding multiple active or archived Unified Identification Numbers (UID) on federal immigration system',
      'Current original passport and previous passport copies under which past visas were stamped',
      'Copies of previous entry permits or residence visas issued by Dubai, Abu Dhabi, Sharjah, or other emirates',
      'Active Emirates ID card or digital UAE Pass verification profile',
    ],
    eligibilityAr: [
      'وجود أكثر من رقم موحد (UID) مسجل في النظام الاتحادي للهوية والجنسية لنفس الشخص',
      'جواز السفر الحالي الأصلي وصور جوازات السفر السابقة المسجل بموجبها تأشيرات قديمة',
      'صور التأشيرات أو أذونات الدخول السابقة الصادرة من دبي أو أبوظبي أو الشارقة أو الإمارات الأخرى',
      'بطاقة الهوية الإماراتية أو حساب موثق في تطبيق الهوية الرقمية UAE Pass',
    ],
    galleryImages: COMMON_GALLERY,
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'Federal UID Multi-System Diagnostic',
        titleAr: 'الفحص التشخيصي الشامل للأرقام الموحدة',
        descEn: 'Cross-emirate electronic audit of candidate biographical data to locate all duplicate UID numbers and historical visa files.',
        descAr: 'استعلام اتحادي شامل على مستوى الدولة للبحث عن كافة الأرقام الموحدة المكررة وسجلات التأشيرات القديمة.',
        durationEn: '10 - 15 Mins',
        durationAr: '10 - 15 دقيقة',
      },
      {
        stepNumber: 2,
        titleEn: 'Technical Merge Dossier Lodgement',
        titleAr: 'تقديم طلب الدمج الفني للإدارة المختصة',
        descEn: 'Submission into the GDRFA / ICP federal merge queue with certified passport records and designated primary UID selection.',
        descAr: 'إرسال معاملة الدمج عبر مسار التدقيق الفني المشترك وإرفاق صور الجوازات وتحديد الرقم الموحد الأساسي المعتمد.',
        durationEn: '15 - 30 Mins',
        durationAr: '15 - 30 دقيقة',
      },
      {
        stepNumber: 3,
        titleEn: 'Federal Approval & Unified Record Generation',
        titleAr: 'صدور الاعتماد الاتحادي وتوحيد السجل',
        descEn: 'Official approval from immigration technical division, merging all historical records into a single permanent primary UID.',
        descAr: 'اعتماد الدمج رسمياً من قسم التدقيق الفني وتوحيد كافة السجلات السابقة تحت رقم موحد واحد دائم.',
        durationEn: '2 - 6 Hours',
        durationAr: '2 - 6 ساعات',
      },
      {
        stepNumber: 4,
        titleEn: 'Immediate On-Site Medical & Biometrics at KMFC',
        titleAr: 'إجراء الفحص الطبي وبصمة الهوية بمركز الكرامة',
        descEn: 'Direct transfer to co-located Karama Medical Center (KMFC) for blood screening and ICP biometric capture under newly unified UID.',
        descAr: 'الانتقال المباشر لمركز الكرامة الطبي (KMFC) بالفندق/المركز لإجراء الفحص الطبي وبصمة الهوية بالرقم الموحد المحدث فوراً.',
        durationEn: 'Same Day / 2h VIP',
        durationAr: 'نفس اليوم / ساعتان VIP',
      },
    ],
    faqs: [
      {
        questionEn: 'Why do I have two different Unified Numbers (UID) in the UAE?',
        questionAr: 'لماذا توجد لديّ أرقام موحدة (UID) مختلفة في دولة الإمارات؟',
        answerEn: 'Duplicate UID numbers occur when an individual enters the UAE through different emirates (e.g. flying into Abu Dhabi on a tourist visa and later entering Dubai), or when renewed passports have slight variations in name spelling. Our center merges them into one permanent number.',
        answerAr: 'تحدث ازدواجية الأرقام الموحدة عند الدخول عبر إمارات مختلفة (مثل الدخول بتأشيرة أبوظبي ثم دبي لاحقاً) أو عند تجديد الجواز باختلاف طفيف في تهجئة الاسم، ويقوم مركزنا بدمجها في رقم دائم واحد.',
      },
      {
        questionEn: 'How long does a UID merge take to complete at Karama Business Center?',
        questionAr: 'كم يستغرق دمج الرقم الموحد في مركز الكرامة للأعمال؟',
        answerEn: 'Our authorized Amer desk submits the technical merge request directly into the GDRFA priority queue, which is typically audited and approved within 2 to 6 hours on the same working day.',
        answerAr: 'يرسل مكتب آمر المعاملة مباشرة للمسار ذي الأولوية للتدقيق الفني بإقامة دبي، ويتم اعتماده وتوحيد الملف عادة خلال ساعتين إلى 6 ساعات في نفس يوم العمل.',
      },
      {
        questionEn: 'Can I do my medical fitness test after merging my UID at Karama Business Center?',
        questionAr: 'هل يمكنني إجراء الفحص الطبي فور إتمام دمج الرقم الموحد بمركز الكرامة؟',
        answerEn: 'Yes! That is our signature convenience. Karama Business Center directly accommodates the Karama Medical Fitness Express Service Center (KMFC / Karama Medical Center), so you can complete your blood test and chest X-ray under your unified UID on the spot.',
        answerAr: 'نعم بالتأكيد! هذه هي ميزتنا الكبرى؛ حيث يضم مركز الكرامة للأعمال مركز الكرامة للياقة الطبية السريعة (KMFC / مركز الكرامة الطبي)، فتنتقل للفحص الطبي وبصمة الهوية بالرقم الموحد المعتمد فوراً.',
      },
      {
        questionEn: 'What documents should I bring to merge my duplicate files?',
        questionAr: 'ما هي المستندات المطلوبة لدمج الأرقام الموحدة المكررة؟',
        answerEn: 'Bring your current original passport, copies of any previous passports showing old entry visas, and any visa copy showing the conflicting UID numbers.',
        answerAr: 'أحضر جواز سفرك الحالي الأصلي، صور الجوازات السابقة التي تحتوي على تأشيرات قديمة، وأي نسخ تأشيرات توضح الأرقام الموحدة المراد دمجها.',
      },
    ],
    reviews: [
      {
        name: 'Dmitry Voronov',
        roleEn: 'Senior IT Consultant',
        roleAr: 'استشاري تقنية معلومات أول',
        companyEn: 'TechPulse Solutions',
        companyAr: 'تك بالس سوليوشنز',
        rating: 5,
        date: 'October 2026',
        commentEn: 'My new Dubai employment visa was blocked due to a duplicate UID generated from an old tourist visa in Sharjah. ESS at Karama Business Center merged my federal files in 3 hours. Then walked down the corridor to Karama Medical Center for my blood test and did my biometrics. Saved my employment start date.',
        commentAr: 'تم تعليق تأشيرة عملي الجديدة بسبب ازدواجية الرقم الموحد الناتج عن تأشيرة سياحة قديمة بالشارقة. دمج فريق ESS بمركز الكرامة للأعمال ملفاتي الاتحادية في 3 ساعات، ثم انتقلت لمركز الكرامة الطبي لفحص الدم والبصمة. أنقذوا موعد بدء وظيفتي.',
      },
      {
        name: 'Sarah Jenkins',
        roleEn: 'Human Resources Executive',
        roleAr: 'مسؤولة موارد بشرية',
        companyEn: 'Jenkins Global HR',
        companyAr: 'جينكينز جلوبال',
        rating: 5,
        date: 'September 2026',
        commentEn: 'Resolved duplicate UID records for 4 of our corporate transfers. Fast, friendly, and 100% accurate. Karama Business Center is our go-to government hub in Dubai.',
        commentAr: 'حلوا مشكلة ازدواجية الرقم الموحد لـ 4 من موظفينا الجدد. سرعة ودقة متناهية ومعاملة راقية. مركز الكرامة للأعمال هو وجهتنا الأولى لكافة المعاملات الحكومية.',
      },
    ],
    targetKeywords: {
      shortTail: [
        'Karama Business Center KBC',
        'UID Merge Dubai',
        'Unified Number Merge Amer',
        'Federal Visa File Merge',
        'Karama Medical Center UID Link',
        'ESS Emirates Secretarial Services',
        'GDRFA UID Unification Karama',
      ],
      longTail: [
        'how to merge duplicate UID numbers in Dubai Karama Business Center',
        'cost to merge unified numbers Amer center Dubai 2026',
        'resolve duplicate person identity on UAE visa Amer Karama',
        'merge UID and do medical fitness test Karama medical center',
        'fastest UID merge center in Al Karama next to post office',
      ],
    },
    featuredFacilityImage: {
      url: smartDeskImage,
      captionEn: 'Federal Immigration Integration and UID Merge Terminal at Karama Business Center',
      captionAr: 'منصة الربط الاتحادي ودمج الأرقام الموحدة في مركز الكرامة للأعمال',
      locationBadgeEn: 'Al Karama, Next to Karama Post Office, Dubai',
      locationBadgeAr: 'الكرامة، بجوار بريد الكرامة، دبي',
    },
  },

  // =========================================================================
  // 17. FLAGSHIP SALEM MEDICAL FITNESS RESULTS (2-Hour VIP, 6-Hour, 24-Hour)
  // =========================================================================
  'salem-results-2hr-6hr-24hr': {
    detailedOverviewEn: `Undergoing the mandatory medical fitness test for residency visa issuance and renewal is a sovereign health clearance procedure administered by the Dubai Health Authority (DHA) through its Salem digital network. At Karama Business Center (KBC), managed by Emirates Secretarial Services (ESS), our flagship on-site facility is the Karama Medical Fitness Express Service Center (KMFC) — widely searched and celebrated across Dubai under the household name Karama Medical Center. Our state-of-the-art clinical wing delivers express infectious disease screening with the fastest certified turnaround times in the emirate: 2-Hour Super VIP results, 6-Hour Urgent Fast-Track results, and standard 24-Hour certified clearance.

Every foreign national applying for a new UAE residency or renewing an existing visa must test negative for mandatory communicable conditions, specifically Pulmonary Tuberculosis (via high-resolution digital chest radiography) and Human Immunodeficiency Virus (HIV) and Hepatitis B (via automated venous blood screening). At Karama Medical Center, our clinical operations are equipped with advanced rapid-analyzer laboratories and low-dose digital radiology units approved by the Dubai Health Authority. Rather than waiting days for results, our 2-hour VIP tier processes your blood panels and digital X-rays immediately upon sample collection, transmitting the certified electronic fitness certificate directly to GDRFA Dubai immigration servers and syncing with your UAE Pass application.

The unparalleled strategic advantage of testing at Karama Medical Center within Karama Business Center (conveniently located next to the Karama Post Office in Al Karama) is total campus co-location. You do not need to commute between private typing shops, standalone medical centers, and government departments. In one seamless visit, our authorized Amer Center License #772 desk conducts your document pre-audit and visa typing, guides you straight into our luxurious VIP Majlis for gentle venous blood collection, conducts your chest X-ray, and transfers you down the hall for ICP biometric fingerprint capture. Official pricing is transparent: standard 24-hour test AED 322 (gov fee AED 250 + typing AED 72), 6-hour urgent test AED 700 (gov fee AED 550 + typing AED 150), and 2-hour Super VIP test AED 1,020 (gov fee AED 750 + VIP Majlis typing AED 270).`,
    detailedOverviewAr: `يعد فحص اللياقة الطبية للإقامة خطوة إلزامية سيادية تشرف عليها هيئة الصحة بدبي (DHA) عبر نظام "سالم" الذكي لضمان خلو المقيمين الجدد والمجددين من الأمراض السارية. ومن خلال مركز الكرامة للأعمال (KBC) وبترخيص مركز آمر المعتمد رقم 772 بإدارة الإمارات لخدمات رجال الأعمال (ESS)، يحتضن مجمعنا مركز الكرامة للياقة الطبية السريعة (KMFC) — المعروف شعبياً في دبي بمركز الكرامة الطبي — والذي يقدم أسرع باقات فحص طبي معتمدة في دبي: باقة VIP فائقة السرعة خلال ساعتين، والباقة العاجلة خلال 6 ساعات، والباقة القياسية المعتمدة خلال 24 ساعة.

يشمل الفحص الفحص المخبري لعينات الدم (لفيروسي نقص المناعة المكتسبة HIV والتهاب الكبد الوبائي B) والتصوير الرقمي للأشعة السينية للصدر (للدرن الرئوي). ويتميز مركز الكرامة الطبي بمختبرات تحليل متطورة وأجهزة أشعة رقمية منخفضة الإشعاع ومعتمدة من هيئة الصحة بدبي، مع الربط الآلي الفوري للشهادة الطبية بخوادم إقامة دبي وتطبيق الهوية الرقمية UAE Pass.

وتكمن الميزة الفريدة لـ مركز الكرامة الطبي في وجوده داخل مركز الكرامة للأعمال (بجوار بريد الكرامة)، مما يتيح للمتعامل إنجاز طباعة استمارة الفحص، وسحب الدم في مجلس كبار الشخصيات الفاخر (VIP Majlis)، وإجراء الأشعة، والتقاط البصمة البيومترية للهوية في زيارة واحدة دون أي تنقل مجهد. تبلغ الرسوم للباقة العادية 322 درهماً، والباقة العاجلة 6 ساعات 700 درهم، وباقة VIP ساعتين 1,020 درهماً مع خدمة ضيافة 5 نجوم.`,
    legalFrameworkEn: `UAE Federal Law No. 28 of 2006 regarding Medical Screening for Expatriates, Dubai Health Authority (DHA) Salem Medical Directives, and Cabinet Resolution No. 65 of 2022.`,
    legalFrameworkAr: `القانون الاتحادي رقم (28) لسنة 2006 بشأن الفحص الطبي للوافدين، ولوائح هيئة الصحة بدبي لنظام سالم الذكي، وقرار مجلس الوزراء رقم (65) لسنة 2022.`,
    eligibilityEn: [
      'All expatriate individuals applying for a new Dubai residence visa or renewing an existing residence permit',
      'Original valid passport and clear passport-sized digital photograph with white background',
      'Current UAE residence visa copy or newly issued electronic entry permit (employment, investor, family, or golden visa)',
      'Valid Emirates ID card (for residency renewal applicants)',
    ],
    eligibilityAr: [
      'كافة المقيمين والوافدين المتقدمين لإصدار إقامة جديدة أو تجديد إقامة حالية في دبي',
      'جواز السفر الأصلي ساري المفعول وصورة شخصية رقمية حديثة بخلفية بيضاء',
      'نسخة الإقامة الحالية للتجديد أو إذن الدخول الجديد المعتمد (عمل، استثمار، أسرة، أو إقامة ذهبية)',
      'بطاقة الهوية الإماراتية الأصلية (لمعاملي تجديد الإقامة)',
    ],
    galleryImages: COMMON_GALLERY,
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'DHA Salem Electronic Registration & Fast-Track Typing',
        titleAr: 'التسجيل الإلكتروني بنظام سالم وهيئة الصحة',
        descEn: 'Instant entry of applicant passport details into DHA Salem portal, generating the official barcode appointment token.',
        descAr: 'إدخال بيانات المتعامل في بوابة سالم التابعة لهيئة الصحة وإصدار استمارة الفحص المعتمدة بالباركود الذكي.',
        durationEn: '5 - 10 Mins',
        durationAr: '5 - 10 دقائق',
      },
      {
        stepNumber: 2,
        titleEn: 'Priority Venous Blood Collection at KMFC',
        titleAr: 'سحب عينة الدم المخبرية في مركز الكرامة الطبي',
        descEn: 'Gentle, sterile venous blood draw by senior DHA-licensed phlebotomists in private testing booths or executive VIP Majlis.',
        descAr: 'سحب عينة الدم بدقة وراحة بواسطة طاقم تمريضي مرخص من هيئة الصحة في أجنحة خاصة أو في مجلس VIP.',
        durationEn: '5 - 10 Mins',
        durationAr: '5 - 10 دقائق',
      },
      {
        stepNumber: 3,
        titleEn: 'Low-Dose Digital Chest Radiography',
        titleAr: 'التصوير الرقمي للأشعة السينية للصدر',
        descEn: 'Rapid digital chest X-ray screening utilizing cutting-edge low-radiation imaging equipment, interpreted instantly by consultant radiologists.',
        descAr: 'تصوير رقمي سريع للصدر بأحدث أجهزة الأشعة منخفضة الإشعاع واعتماد التقرير فوراً من استشاريي الأشعة.',
        durationEn: '5 - 10 Mins',
        durationAr: '5 - 10 دقائق',
      },
      {
        stepNumber: 4,
        titleEn: 'Automated DHA Clearance & Direct GDRFA Sync',
        titleAr: 'صدور شهادة اللياقة الطبية والمزامنة الفورية',
        descEn: 'Automated electronic laboratory verification, generation of the official Fit Certificate, and real-time synchronization to GDRFA & UAE Pass.',
        descAr: 'اعتماد نتائج التحاليل إلكترونياً وإصدار شهادة اللياقة الطبية الرسمية وإرسالها تلقائياً لإقامة دبي وتطبيق UAE Pass.',
        durationEn: '2h (VIP) / 6h / 24h',
        durationAr: 'ساعتان (VIP) / 6 ساعات / 24 ساعة',
      },
    ],
    faqs: [
      {
        questionEn: 'How quickly can I receive my medical fitness test results at Karama Medical Center?',
        questionAr: 'ما هي أسرع مدة لاستلام نتيجة فحص اللياقة الطبية في مركز الكرامة الطبي؟',
        answerEn: 'At Karama Medical Fitness Express Service Center (KMFC / Karama Medical Center), our Super VIP track delivers certified DHA medical results in just 2 hours. We also offer a 6-hour urgent tier and a standard 24-hour certified tier.',
        answerAr: 'في مركز الكرامة للياقة الطبية السريعة (KMFC / مركز الكرامة الطبي)، توفر باقة Super VIP النتائج المعتمدة خلال ساعتين فقط، بالإضافة لباقة 6 ساعات وباقة 24 ساعة المعتمدة.',
      },
      {
        questionEn: 'Do I need to fast before taking the medical fitness blood test?',
        questionAr: 'هل يلزم الصيام قبل إجراء فحص الدم للياقة الطبية للإقامة؟',
        answerEn: 'No. The DHA medical fitness screening does not require fasting. You may eat and drink normally prior to your blood test and chest X-ray examination.',
        answerAr: 'لا، فحص اللياقة الطبية للإقامة لا يتطلب الصيام على الإطلاق؛ حيث يمكنك تناول الطعام والشراب بشكل طبيعي تماماً قبل فحص الدم والأشعة.',
      },
      {
        questionEn: 'Can I do my Emirates ID biometrics in the same building as my medical test?',
        questionAr: 'هل يمكنني التقاط بصمة الهوية الإماراتية في نفس مبنى الفحص الطبي؟',
        answerEn: 'Yes! That is why Karama Business Center is famous across Dubai. We house Karama Medical Center alongside authorized ICP biometric fingerprint capture desks, allowing you to complete both in one visit.',
        answerAr: 'نعم بالتأكيد! هذه هي الميزة التي يشتهر بها مركز الكرامة للأعمال في دبي؛ حيث يضم مركز الكرامة الطبي مع منصات بصمة الهوية الاتحادية في نفس المبنى لإنجازهما معاً.',
      },
      {
        questionEn: 'What tests are conducted during the medical fitness screening for residency?',
        questionAr: 'ما هي الفحوصات الطبية المعتمدة التي تجرى للإقامة؟',
        answerEn: 'The mandatory screening consists of a venous blood test for HIV and Hepatitis B, and a digital chest X-ray for Pulmonary Tuberculosis. Certain domestic categories also undergo pregnancy and syphilis screening.',
        answerAr: 'يشمل الفحص الإلزامي تحليل الدم لفيروسي نقص المناعة المكتسبة (HIV) والتهاب الكبد الوبائي (B)، وأشعة الصدر للدرن الرئوي، بالإضافة لبعض الفحوصات الإضافية لفئات العمالة المساعدة.',
      },
    ],
    reviews: [
      {
        name: 'Dr. Tariq Al-Hashimi',
        roleEn: 'Managing Director',
        roleAr: 'العضو المنتدب',
        companyEn: 'Al-Hashimi Investments LLC',
        companyAr: 'الهاشمي للاستثمارات',
        rating: 5,
        date: 'October 2026',
        commentEn: 'Used the 2-Hour Super VIP medical fitness service at Karama Medical Center inside Karama Business Center. The phlebotomist drew my blood in the private VIP Majlis, the X-ray took 3 minutes, and my official DHA Fit certificate arrived on my phone exactly 1 hour and 45 minutes later. World-class medical facility.',
        commentAr: 'استخدمت باقة Super VIP خلال ساعتين في مركز الكرامة الطبي داخل مركز الكرامة للأعمال. تم سحب الدم في صالة VIP الفاخرة، واستغرقت الأشعة 3 دقائق، ووصلت شهادة اللياقة الطبية المعتمدة إلى هاتفي خلال ساعة و45 دقيقة بالضبط. خدمة طبية بمستوى عالمي.',
      },
      {
        name: 'Ananya Sharma',
        roleEn: 'Senior Vice President',
        roleAr: 'نائب أول للرئيس',
        companyEn: 'Global FinTech Capital',
        companyAr: 'جلوبال فينتك كابيتال',
        rating: 5,
        date: 'September 2026',
        commentEn: 'The cleanest and fastest medical testing center in Dubai. No lines, extremely courteous medical staff, and having Amer right there to submit the residence stamping immediately after medical clearance is unmatched. Highly recommended.',
        commentAr: 'أنظف وأسرع مركز فحص طبي في دبي. لا توجد طوابير انتظار، وطاقم التمريض ودود ومحترف للغاية، ووجود مكتب آمر في نفس المكان لتثبيت الإقامة فور صدور النتيجة ميزة لا مثيل لها. أنصح به بشدة.',
      },
    ],
    targetKeywords: {
      shortTail: [
        'Karama Medical Center',
        'Karama Medical Fitness Express KMFC',
        'Karama Business Center KBC',
        'DHA Medical Fitness Dubai',
        'Salem Medical Test Karama',
        '2 Hour VIP Medical Test Dubai',
        'ESS Emirates Secretarial Services',
      ],
      longTail: [
        'Karama medical center timings for visa medical test',
        'cost of 2 hour VIP medical fitness test Karama medical center',
        'DHA medical test inside Karama Business Center next to post office',
        'urgent 6 hours medical fitness test result Dubai Amer',
        'fastest medical fitness test for residency renewal Karama KMFC',
      ],
    },
    featuredFacilityImage: {
      url: smartDeskImage,
      captionEn: 'DHA Salem Express Laboratory and Clinical Diagnostic Wing at Karama Medical Center (KMFC)',
      captionAr: 'المختبر السريع وجناح التشخيص الطبي لنظام سالم في مركز الكرامة الطبي (KMFC)',
      locationBadgeEn: 'Medical Wing, Karama Business Center, Al Karama, Dubai',
      locationBadgeAr: 'الجناح الطبي، مركز الكرامة للأعمال، الكرامة، دبي',
    },
  },
};
