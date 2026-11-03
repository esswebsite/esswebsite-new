import { Department, ServiceItem, TrackingRecord } from '../types';
import { DEPARTMENT_LOGOS } from '../components/DepartmentLogo';

export const DEPARTMENTS: Department[] = [
  {
    id: 'amer',
    code: 'AMER-GDRFA',
    nameEn: 'Amer (GDRFA)',
    nameAr: 'مركز آمر (الإقامة وشؤون الأجانب)',
    subTitleEn: 'Immigration & Residency Services',
    subTitleAr: 'خدمات الإقامة وأذونات الدخول والتأشيرات',
    accreditationEn: 'Authorized Amer Center (GDRFA Dubai #772)',
    accreditationAr: 'مركز آمر معتمد من إقامة دبي (#772)',
    iconName: 'Passport',
    serviceCount: 16,
    color: 'emerald',
    logoUrl: DEPARTMENT_LOGOS['amer']?.src,
    officialGovUrl: 'https://gdrfad.gov.ae/en/services',
    officialGovPortalNameEn: 'GDRFA Dubai Official Portal',
    officialGovPortalNameAr: 'منصة إقامة دبي الذكية',
    descriptionEn: 'Official processing of Dubai residency permits, Golden Visas, family sponsorships, entry permits, visa status change, hold/unhold, establishment card block removals, and fine reduction.',
    descriptionAr: 'معالجة وتثبيت تأشيرات الإقامة، الإقامة الذهبية، كفالة الأسرة، أذونات الدخول، تعليق ورفع تعليق الإقامة، رفع حظر بطاقة المنشأة، وتخفيض الغرامات المعتمدة من إقامة دبي.'
  },
  {
    id: 'ded',
    code: 'DET-DED',
    nameEn: 'DET (Economy & Tourism)',
    nameAr: 'اقتصادية وسياحة دبي (DET / DED)',
    subTitleEn: 'Business Licensing & Commercial Permits',
    subTitleAr: 'تراخيص الأعمال والتصاريح التجارية وتأسيس الشركات',
    accreditationEn: 'Authorized Service Provider (DET Dubai #902)',
    accreditationAr: 'مزود خدمات معتمد من دائرة الاقتصاد والسياحة (#902)',
    iconName: 'Building2',
    serviceCount: 10,
    color: 'teal',
    logoUrl: DEPARTMENT_LOGOS['ded']?.src,
    officialGovUrl: 'https://www.investindubai.gov.ae/',
    officialGovPortalNameEn: 'Invest in Dubai (DET Portal)',
    officialGovPortalNameAr: 'بوابة استثمر في دبي (اقتصادية دبي)',
    descriptionEn: '100% foreign-owned commercial LLCs, Instant Licenses, DED E-Trader, professional & consultancy licenses, trade name reservation, electronic MOA signing, license amendments, renewals, Mu\'lin permits, and company liquidation.',
    descriptionAr: 'تأسيس الشركات ذات المسؤولية المحدودة بتملك أجنبي 100%، الرخصة الفورية، رخصة تاجر إلكتروني، الرخص المهنية، حجز الأسماء التجارية، توثيق عقود التأسيس إلكترونياً، تعديل وتجديد وإلغاء الرخص، وتصاريح مُعلن.'
  },
  {
    id: 'tasheel',
    code: 'TASHEEL-MOHRE',
    nameEn: 'Tasheel (MoHRE)',
    nameAr: 'تسهيل - وزارة الموارد البشرية',
    subTitleEn: 'Labour & Corporate Work Permits',
    subTitleAr: 'تصاريح وعقود العمل والمنشآت العمالية',
    accreditationEn: 'Authorized Tasheel Hub (MoHRE #4108)',
    accreditationAr: 'مركز تسهيل معتمد من وزارة الموارد البشرية (#4108)',
    iconName: 'Briefcase',
    serviceCount: 10,
    color: 'sky',
    logoUrl: DEPARTMENT_LOGOS['tasheel']?.src,
    officialGovUrl: 'https://tasheel.mohre.gov.ae/',
    officialGovPortalNameEn: 'MoHRE Tasheel Portal',
    officialGovPortalNameAr: 'منصة تسهيل - وزارة الموارد البشرية',
    descriptionEn: 'New electronic work permits, 2-year labour card renewals, unified employment contracts, electronic quota increases, MoHRE company establishment files, E-Signature smart cards, mission & part-time permits, family NOC work permits, and labour cancellations.',
    descriptionAr: 'إصدار وتجديد تصاريح وبطاقات العمل، عروض وعقود العمل الموحدة، زيادة الكوتا الإلكترونية، فتح وتحديث ملف المنشأة، بطاقات التوقيع الإلكتروني، تصاريح المهمة والعمل الجزئي، تصاريح العمل على كفالة الأسرة، وإلغاء بطاقات العمل.'
  },
  {
    id: 'icp',
    code: 'ICP-FEDERAL',
    nameEn: 'ICP (Federal Authority)',
    nameAr: 'الهيئة الاتحادية للهوية والجنسية (ICP)',
    subTitleEn: 'Emirates ID & Biometric Identity',
    subTitleAr: 'بطاقة الهوية الإماراتية والبصمة البيومترية',
    accreditationEn: 'Official ICP Smart E-Channel Partner',
    accreditationAr: 'شريك معتمد للبوابة الذكية للهيئة الاتحادية',
    iconName: 'CreditCard',
    serviceCount: 6,
    color: 'indigo',
    logoUrl: DEPARTMENT_LOGOS['icp']?.src,
    officialGovUrl: 'https://smartservices.icp.gov.ae/',
    officialGovPortalNameEn: 'ICP Smart Services Portal',
    officialGovPortalNameAr: 'منصة الخدمات الذكية للهيئة الاتحادية',
    descriptionEn: 'New Emirates ID applications, 1/2/5/10-year ID renewals, lost/damaged Fawri 24h replacements, urgent biometric fingerprint appointments, ICP mobile number & passport updates, travel history reports, and Zajel courier tracking.',
    descriptionAr: 'إصدار بطاقة الهوية الإماراتية الجديدة، تجديد الهوية، استخراج بدل فاقد أو تالف بخدمة فوري (24 ساعة)، حجز وتقريب مواعيد البصمة البيومترية، تحديث رقم الهاتف وبيانات الجواز، تقارير الدخول والخروج، وتوصيل زاجل.'
  },
  {
    id: 'municipality',
    code: 'DM-DLD-SERVICES',
    nameEn: 'Dubai Municipality & DLD Ejari',
    nameAr: 'بلدية دبي وإيجاري أراضي دبي',
    subTitleEn: 'Municipal Permits & DLD Ejari Tenancy',
    subTitleAr: 'تصاريح بلدية دبي وتوثيق إيجاري (أراضي دبي)',
    accreditationEn: 'Authorized Service Desk for DM & DLD Ejari',
    accreditationAr: 'مكتب خدمات معتمد لمعاملات بلدية دبي وإيجاري أراضي دبي',
    iconName: 'ShieldCheck',
    serviceCount: 6,
    color: 'emerald',
    logoUrl: DEPARTMENT_LOGOS['municipality']?.src,
    officialGovUrl: 'https://www.dm.gov.ae/',
    officialGovPortalNameEn: 'Dubai Municipality Digital Portal',
    officialGovPortalNameAr: 'بوابة بلدية دبي الرقمية',
    descriptionEn: 'Official DLD / RERA Ejari registration and renewal, Montaji cosmetic & consumer product registration, Foodwatch safety certification, interior fit-out permits, and commercial outdoor signboard approvals.',
    descriptionAr: 'تسجيل وتوثيق عقود إيجاري المعتمدة من دائرة الأراضي والأملاك (DLD)، تسجيل المنتجات في نظام منتجي، منصة فود ووتش واعتماد البطاقات الغذائية، تصاريح الديكور الداخلي، وتصاريح اللوحات التجارية.'
  },
  {
    id: 'ohc',
    code: 'OHC-OCCUPATIONAL',
    nameEn: 'OHC (Occupational)',
    nameAr: 'بطاقات الصحة المهنية (OHC)',
    subTitleEn: 'Occupational Health Cards & Testing',
    subTitleAr: 'بطاقات الفحص المهني والتراخيص الطبية للمنشآت',
    accreditationEn: 'Authorized Occupational Health Center',
    accreditationAr: 'مركز معتمد لإصدار بطاقات الصحة المهنية بدبي',
    iconName: 'HeartPulse',
    serviceCount: 4,
    color: 'rose',
    logoUrl: DEPARTMENT_LOGOS['ohc']?.src,
    officialGovUrl: 'https://www.dm.gov.ae/',
    officialGovPortalNameEn: 'Dubai Municipality Public Health',
    officialGovPortalNameAr: 'إدارة الصحة والسلامة - بلدية دبي',
    descriptionEn: 'Issuance and renewal of Occupational Health Cards (OHC) for food handlers (AED 222.50), salons & spas (AED 592.50), construction (AED 252.50), RTA drivers (AED 222.50), healthcare (AED 622.50), and DHA doctor licenses (AED 822.50).',
    descriptionAr: 'إصدار وتجديد بطاقات الصحة المهنية لمتداولي الأغذية (222.50 درهم)، الصالونات والسبا (592.50 درهم)، الإنشاءات (252.50 درهم)، سائقي هيئة الطرق (222.50 درهم)، وتراخيص الأطباء (822.50 درهم).'
  },
  {
    id: 'attestation',
    code: 'ATLAS-ATTESTATION',
    nameEn: 'Atlas Attestation',
    nameAr: 'أطلس لتصديق المستندات (Atlas)',
    subTitleEn: 'Document Attestation & Legalization',
    subTitleAr: 'تصديق الشهادات والوثائق الدبلوماسية والقانونية',
    accreditationEn: 'Ministry of Foreign Affairs (MOFA) Liaison',
    accreditationAr: 'مكتب التنسيق الدبلوماسي لوزارة الخارجية والعدل',
    iconName: 'FileCheck',
    serviceCount: 6,
    color: 'teal',
    logoUrl: DEPARTMENT_LOGOS['attestation']?.src,
    officialGovUrl: 'https://www.mofa.gov.ae/en/Services/Attestation',
    officialGovPortalNameEn: 'UAE MoFA Attestation Portal',
    officialGovPortalNameAr: 'منظومة التصديقات - وزارة الخارجية',
    descriptionEn: 'MOFA attestation (Personal AED 200 | Commercial AED 1,200), Ministry of Justice (AED 110), 119+ foreign embassy legalizations, Hague Apostille, MoE degree equivalency, marriage & birth certificates, and police clearance.',
    descriptionAr: 'تصديق وزارة الخارجية (شخصي 200 درهم | تجاري 1,200 درهم)، وزارة العدل (110 دراهم)، تصديق سفارات 119 دولة، الأبوستيل، معادلة الشهادات الجامعية، عقود الزواج والميلاد، وبحث الحالة الجنائية.'
  },
  {
    id: 'notary',
    code: 'NOTARY-COURTS',
    nameEn: 'Notary & Courts',
    nameAr: 'الكاتب العدل ومحاكم دبي',
    subTitleEn: 'Legal Documentation & Judicial Suits',
    subTitleAr: 'التوثيق العدلي وقضايا المحاكم والوصايا',
    accreditationEn: 'Dubai Courts & Notary Liaison Desk',
    accreditationAr: 'مكتب تنسيق محاكم دبي والتوثيق العدلي',
    iconName: 'Scale',
    serviceCount: 5,
    color: 'violet',
    logoUrl: DEPARTMENT_LOGOS['notary']?.src,
    officialGovUrl: 'https://www.dc.gov.ae/PublicServices/Home.aspx?lang=en',
    officialGovPortalNameEn: 'Dubai Courts Public Services',
    officialGovPortalNameAr: 'الخدمات الإلكترونية لمحاكم دبي',
    descriptionEn: 'General & Special Power of Attorney (POA), corporate MOAs & share transfers, legal declarations & affidavits, Dubai Courts labour/civil/commercial lawsuit registration, and non-Muslim family wills.',
    descriptionAr: 'صياغة وتوثيق الوكالات العامة والخاصة، عقود التأسيس وملاحق بيع الحصص، الإقرارات العدلية، قيد الدعاوى العمالية والمدنية والتجارية بمحاكم دبي، وتوثيق وصايا غير المسلمين.'
  },
  {
    id: 'typing',
    code: 'TYPING-LEGAL',
    nameEn: 'Typing & Legal',
    nameAr: 'الطباعة والترجمة القانونية',
    subTitleEn: 'Translation & Professional Typing',
    subTitleAr: 'الطباعة الحكومية الشاملة والترجمة المعتمدة',
    accreditationEn: 'Certified Government Typing & Translation Desk',
    accreditationAr: 'مركز طباعة وترجمة قانونية معتمد بدبي',
    iconName: 'FileText',
    serviceCount: 4,
    color: 'cyan',
    logoUrl: DEPARTMENT_LOGOS['typing']?.src,
    officialGovUrl: 'https://www.moj.gov.ae/',
    officialGovPortalNameEn: 'UAE Ministry of Justice Portal',
    officialGovPortalNameAr: 'بوابة وزارة العدل الاتحادية',
    descriptionEn: 'Ministry of Justice (MOJ) sworn legal translation across 30+ languages (official AED 38/page tariff), official Arabic/English government NOCs & mercy appeals, corporate board resolutions, and embassy attestation dockets.',
    descriptionAr: 'الترجمة القانونية المحلفة المعتمدة من وزارة العدل لأكثر من 30 لغة (38 درهماً/صفحة)، صياغة خطابات عدم الممانعة والتماسات الاسترحام بالعربية، قرارات الشركاء، واستمارات تصديق السفارات.'
  },
  {
    id: 'salem',
    code: 'SALEM-MEDICAL',
    nameEn: 'Karama Medical Fitness (KMFC / Salem)',
    nameAr: 'مركز الكرامة للياقة الطبية (KMFC / سالم)',
    subTitleEn: 'DHA Medical Fitness Tests & Salem Rapid Blood Tests',
    subTitleAr: 'الفحص الطبي لإقامة دبي ونظام سالم وسحب الدم',
    accreditationEn: 'Karama Medical Fitness Express Service Center (KMFC) · Known as Karama Medical Center',
    accreditationAr: 'مركز الكرامة للياقة الطبية السريعة (KMFC) · المعروف بمركز الكرامة الطبي',
    iconName: 'Stethoscope',
    serviceCount: 7,
    color: 'red',
    logoUrl: DEPARTMENT_LOGOS['salem']?.src,
    officialGovUrl: 'https://services.dha.gov.ae/sheryan/',
    officialGovPortalNameEn: 'Dubai Health Sheryan / Salem Portal',
    officialGovPortalNameAr: 'منظومة شريان وسالم - صحة دبي',
    descriptionEn: 'Official UAE residency medical fitness results: Standard 24-Hour (AED 322 baseline tariff), Express 6-Hour, Super Express 2-Hour VIP Majlis, VIP drive-through car blood collection, domestic vaccinations, mobile squads, and blood type tests.',
    descriptionAr: 'نتائج الفحص الطبي المعتمدة لتثبيت الإقامة: عادي 24 ساعة (322 درهم الرسم المعتمد)، عاجل 6 ساعات، فائق السرعة ساعتان بمجلس VIP، سحب الدم من السيارة، تطعيمات العمالة المساعدة، والفحص المتنقل.'
  },
  {
    id: 'rta',
    code: 'RTA-SERVICES',
    nameEn: 'RTA Services',
    nameAr: 'خدمات هيئة الطرق والمواصلات (RTA)',
    subTitleEn: 'Driving Licenses & Vehicle Mulkiya Registration',
    subTitleAr: 'رخص القيادة وملكية المركبات والمخالفات المرورية',
    accreditationEn: 'Authorized RTA Licensing & Vehicle Partner',
    accreditationAr: 'شريك معتمد لخدمات الترخيص والمركبات لدى هيئة الطرق',
    iconName: 'Car',
    serviceCount: 5,
    color: 'blue',
    logoUrl: DEPARTMENT_LOGOS['rta']?.src,
    officialGovUrl: 'https://www.rta.ae/',
    officialGovPortalNameEn: 'RTA Dubai Official Portal',
    officialGovPortalNameAr: 'بوابة هيئة الطرق والمواصلات دبي',
    descriptionEn: 'Dubai driving license renewal & on-site eye testing, International Driving Permits (IDP in 150+ countries), annual vehicle Mulkiya renewal, vehicle ownership transfer & export certificates, and live traffic fine inquiry & settlement.',
    descriptionAr: 'تجديد رخصة القيادة وفحص النظر المعتمد، رخصة القيادة الدولية (IDP)، تجديد ملكية المركبات، نقل الملكية وعقود البيع الإلكترونية وشهادات التصدير، والاستعلام وسداد المخالفات المرورية فورياً.'
  },
  {
    id: 'tawjeeh',
    code: 'ZAJEL-TAWJEEH',
    nameEn: 'Zajel & Tawjeeh',
    nameAr: 'زاجل وتوجيه (MoHRE & Zajel)',
    subTitleEn: 'Document Delivery & Worker Awareness Classes',
    subTitleAr: 'التوصيل السريع للمعاملات وتوعية أصحاب العمل والعمال',
    accreditationEn: 'Accredited Tawjeeh Center & Zajel Hub',
    accreditationAr: 'مركز توجيه معتمد وشريك زاجل اللوجستي الرسمي',
    iconName: 'Users',
    serviceCount: 3,
    color: 'teal',
    logoUrl: DEPARTMENT_LOGOS['tawjeeh']?.src,
    officialGovUrl: 'https://www.mohre.gov.ae/',
    officialGovPortalNameEn: 'MoHRE Tawjeeh Services',
    officialGovPortalNameAr: 'خدمات توجيه - وزارة الموارد البشرية',
    descriptionEn: 'Mandatory MoHRE Tawjeeh worker awareness lectures & certification in 10+ languages, priority insured Zajel doorstep delivery for Emirates IDs & passports, and UAE Labour Law legal advisory.',
    descriptionAr: 'محاضرات توجيه العمالية الإلزامية وإصدار الشهادات بأكثر من 10 لغات، توصيل زاجل السريع والمؤمن لبطاقات الهوية والجوازات، والاستشارات وحساب مكافأة نهاية الخدمة بقانون العمل.'
  },
  {
    id: 'tadbeer',
    code: 'TADBEER',
    nameEn: 'Tadbeer Services',
    nameAr: 'خدمات تدبير للعمالة المساعدة',
    subTitleEn: 'Domestic & Household Workers',
    subTitleAr: 'تأشيرات وإجراءات العمالة المساعدة',
    accreditationEn: 'Accredited Tadbeer Center (MoHRE #DB-8849)',
    accreditationAr: 'مركز تدبير مرخص من وزارة الموارد البشرية (#DB-8849)',
    iconName: 'Shield',
    serviceCount: 4,
    color: 'indigo',
    logoUrl: DEPARTMENT_LOGOS['tadbeer']?.src,
    officialGovUrl: 'https://www.mohre.gov.ae/',
    officialGovPortalNameEn: 'MoHRE Domestic Workers Portal',
    officialGovPortalNameAr: 'بوابة العمالة المساعدة - وزارة الموارد البشرية',
    descriptionEn: 'Private family domestic worker sponsorship, Tadbeer center sponsorship packages, maid residency renewals & Salem medical, and statutory 2-year worker replacement warranty per Federal Law No. 9 of 2022.',
    descriptionAr: 'باقة الكفالة المباشرة للأسرة، باقة كفالة مركز تدبير، تجديد إقامة وفحص سالم للعمالة المساعدة، والضمان القانوني للاستبدال لمدة سنتين وفق المرسوم بقانون اتحادي رقم 9 لسنة 2022.'
  },
  {
    id: 'vip-mobile',
    code: 'ESS-VIP-VAN',
    nameEn: 'VIP & Mobile Doorstep Service',
    nameAr: 'الخدمة الممتازة والمتنقلة إلى باب منزلك',
    subTitleEn: 'Private Majlis & Mobile Government Van',
    subTitleAr: 'مجلس كبار الشخصيات وحافلة المعاملات المتنقلة',
    accreditationEn: 'ESS Executive 5-Star Standard',
    accreditationAr: 'معيار السعادة التنفيذي 5 نجوم من ESS',
    iconName: 'Crown',
    serviceCount: 3,
    color: 'teal',
    logoUrl: DEPARTMENT_LOGOS['vip-mobile']?.src,
    officialGovUrl: 'https://services.dha.gov.ae/sheryan/',
    officialGovPortalNameEn: 'Dubai Health Salem Mobile System',
    officialGovPortalNameAr: 'نظام سالم المتنقل - صحة دبي',
    descriptionEn: 'Luxury Mercedes Sprinter mobile doorstep government van dispatched anywhere in Dubai, private executive VIP Majlis suites at Karama Business Center, and corporate boardroom on-site delegations.',
    descriptionAr: 'حافلة مرسيدس الرئاسية المتنقلة لسعادة المتعاملين تصل لعتبة بابك بدبي، مجلس كبار الشخصيات الفاخر بمركز الكرامة، ووفد المعاملات الحكومية الميداني لقاعات مجالس إدارة الشركات.'
  }
];

const RAW_SERVICES: ServiceItem[] = [
  // ==========================================
  // 1. AMER (GDRFA) - Immigration & Residency
  // ==========================================
  // 1. Residency Visa (New)
  {
    id: 'amer-residency-visa-new',
    departmentId: 'amer',
    titleEn: 'Residency Visa (New)',
    titleAr: 'تأشيرة إقامة جديدة (داخل وخارج الدولة)',
    category: 'residency',
    shortDescEn: 'Comprehensive end-to-end issuance and stamping of new UAE residency visas for company employees, business partners, and investors under GDRFA authority. Complete breakdown: Inside UAE (AED 3,056) or Outside UAE (AED 1,731).',
    shortDescAr: 'إصدار وتثبيت تأشيرة الإقامة الجديدة للموظفين والشركاء والمستثمرين بإشراف إقامة دبي. باقة متكاملة: داخل الدولة (3,056 درهم) تشمل إذن الدخول، تعديل الوضع، الفحص الطبي، الهوية، والتثبيت | خارج الدولة (1,731 درهم).',
    govFee: 2670,
    serviceFee: 386,
    vipFastTrackFee: 400,
    processingTimeEn: '24 - 48 Hours',
    processingTimeAr: '24 - 48 ساعة',
    authorityEn: 'Amer Center / GDRFA Dubai',
    authorityAr: 'مركز آمر / إقامة دبي',
    requiredDocumentsEn: [
      'Original Sponsor Emirates ID & Passport',
      'Applicant clear colored passport copy (min 6 months validity)',
      'Digital personal passport photo with white background',
      'Tasheel approved electronic job offer or Labour Contract & MB number',
      'Valid Trade License copy & MOA (for company partners & investors)'
    ],
    requiredDocumentsAr: [
      'الهوية الإماراتية الأصلية وجواز سفر الكفيل',
      'نسخة ملونة واضحة من جواز سفر المكفول (صلاحية 6 أشهر على الأقل)',
      'صورة شخصية رقمية حديثة بخلفية بيضاء',
      'عرض العمل الإلكتروني المعتمد من تسهيل أو عقد العمل ورقم MB',
      'نسخة الرخصة التجارية وعقد التأسيس (للشركاء والمستثمرين)'
    ],
    keyBenefitsEn: [
      'Direct server link with GDRFA Dubai immigration database',
      'Pre-audit document inspection to prevent clerical errors and omissions',
      'Integrated medical fitness and Emirates ID biometric coordination'
    ],
    keyBenefitsAr: [
      'ربط إلكتروني مباشر ومعتمد مع خوادم إقامة دبي',
      'تدقيق مسبق للمستندات لتفادي الأخطاء والنواقص الإجرائية',
      'تنسيق متكامل للفحص الطبي وحجز بصمة الهوية الإماراتية'
    ],
    isPopular: true,
    isVipEligible: true
  },

  // 2. Residency Visa (Renewal)
  {
    id: 'amer-residency-visa-renewal',
    departmentId: 'amer',
    titleEn: 'Residency Visa (Renewal)',
    titleAr: 'تجديد تأشيرة الإقامة (سنتان و3 سنوات)',
    category: 'residency',
    shortDescEn: 'Fast-track renewal of 2-year and 3-year UAE residence visas for employees, investors, and family dependents. Includes on-site DHA medical fitness test typing, Emirates ID renewal, and official GDRFA approval.',
    shortDescAr: 'تجديد سريع لإقامات الموظفين والشركاء والأسرة لمدة سنتين أو 3 سنوات. يشمل طباعة الفحص الطبي المعتمد، تجديد بطاقة الهوية الإماراتية، والاعتماد الفوري من إقامة دبي.',
    govFee: 1450,
    serviceFee: 250,
    vipFastTrackFee: 300,
    processingTimeEn: '24 - 48 Hours',
    processingTimeAr: '24 - 48 ساعة',
    authorityEn: 'Amer Center / GDRFA Dubai',
    authorityAr: 'مركز آمر / إقامة دبي',
    requiredDocumentsEn: [
      'Original Applicant Passport with current valid/grace visa',
      'Original Emirates ID card of applicant',
      'Valid Trade License copy & Establishment Card (for corporate staff)',
      'Ejari tenancy contract & recent DEWA electricity bill',
      'Updated Salary Certificate / Labour Card copy'
    ],
    requiredDocumentsAr: [
      'جواز سفر المكفول الأصلي مع تأشيرة الإقامة الحالية',
      'بطاقة الهوية الإماراتية الأصلية للمكفول',
      'نسخة الرخصة التجارية وبطاقة المنشأة (لإقامات الموظفين والشركات)',
      'عقد إيجاري سكني مصدق وفاتورة كهرباء ديوا حديثة',
      'شهادة راتب حديثة أو نسخة بطاقة العمل المحدثة'
    ],
    keyBenefitsEn: [
      'Zero late fine penalty guarantee during grace period',
      'Expedited DHA medical fitness typing & VIP Majlis results',
      'Instant digital residence permit uploaded directly to UAE Pass'
    ],
    keyBenefitsAr: [
      'ضمان التجديد بدون أي غرامات تأخير خلال فترة السماح',
      'طباعة فورية للفحص الطبي ونتائج سريعة عبر مجلس كبار الشخصيات',
      'إصدار الإقامة الرقمية المحدثة وتفعيلها فوراً على تطبيق UAE Pass'
    ],
    isPopular: true,
    isVipEligible: true
  },

  // 3. Golden Visa (10-Year UAE Residency)
  {
    id: 'golden-visa-10yr',
    departmentId: 'amer',
    titleEn: 'Golden Visa (10-Year UAE Residency)',
    titleAr: 'الإقامة الذهبية لدولة الإمارات (10 سنوات)',
    category: 'residency',
    shortDescEn: 'Official 10-year self-sponsored Dubai Golden Residency for real estate investors (AED 2M+), executives (salary AED 30,000+), entrepreneurs, doctors, scientists, and creatives. 100% foreign ownership with VIP Majlis processing.',
    shortDescAr: 'الإقامة الذهبية الذاتية لمدة 10 سنوات لمستثمري العقار (2 مليون درهم فما فوق)، المديرين التنفيذيين (راتب 30 ألف درهم)، رواد الأعمال، والأطباء والمبدعين. تملك أجنبي كامل وإنجاز فاخر عبر مجلس كبار الشخصيات.',
    govFee: 2800,
    serviceFee: 1150,
    vipFastTrackFee: 750,
    processingTimeEn: '48 - 72 Hours',
    processingTimeAr: '48 - 72 ساعة',
    authorityEn: 'GDRFA Dubai / ICP Golden Visa',
    authorityAr: 'إقامة دبي / الهيئة الاتحادية - الإقامة الذهبية',
    requiredDocumentsEn: [
      'Valid Passport copy (minimum 6 months validity)',
      'For Real Estate: DLD Title Deed valued at AED 2,000,000+ (or bank statement with developer proof)',
      'For Executives: Attested Bachelor degree certificate, 6-month bank statement & salary certificate (AED 30k+)',
      'For Entrepreneurs: Project validation letter from approved Dubai incubator or auditor evaluation',
      'Current UAE residence copy or visit visa sticker'
    ],
    requiredDocumentsAr: [
      'نسخة جواز السفر (صلاحية لا تقل عن 6 أشهر)',
      'للمستثمر العقاري: صك ملكية معتمد من دائرة الأراضي والأملاك بقيمة 2 مليون درهم فما فوق',
      'للمديرين التنفيذيين: مؤهل جامعي مصدق، كشف حساب بنكي لـ 6 أشهر وشهادة راتب (30 ألف درهم فما فوق)',
      'لرواد الأعمال: رسالة اعتماد للمشروع من حاضنة أعمال معتمدة أو تقرير مدقق حسابات',
      'نسخة الإقامة الحالية أو تأشيرة الزيارة السارية'
    ],
    keyBenefitsEn: [
      'Self-sponsored 100% foreign residency without local national sponsor',
      'Stay outside the UAE indefinitely without visa cancellation',
      'Sponsor spouse, children of any age, parents, and domestic workers'
    ],
    keyBenefitsAr: [
      'إقامة ذاتية بنسبة 100% دون الحاجة لكفيل أو ضامن محلي',
      'إمكانية البقاء خارج الدولة لأي مدة دون إلغاء الإقامة الذهبية',
      'كفالة الزوجة والأبناء دون حد أقصى للعمر، وكفالة الوالدين والعمالة'
    ],
    isPopular: true,
    isVipEligible: true
  },

  // 4. Family Sponsorship Visa (Spouse & Children)
  {
    id: 'amer-family-sponsorship-visa',
    departmentId: 'amer',
    titleEn: 'Family Sponsorship Visa (Spouse & Children)',
    titleAr: 'كفالة الأسرة (الزوجة والأبناء)',
    category: 'residency',
    shortDescEn: 'Complete family residency sponsorship for wife, husband, newborn babies, and unmarried children up to age 25. Package includes file opening, entry permit, in-country status change, DHA medical test, Emirates ID, and 2-year visa stamping.',
    shortDescAr: 'إجراءات كفالة واستقدام العائلة المتكاملة للزوجة والأبناء حتى عمر 25 سنة، شاملة فتح الملف، إذن الدخول، تعديل الوضع، الفحص الطبي، وبطاقة الهوية الإماراتية وتثبيت الإقامة.',
    govFee: 2842,
    serviceFee: 386,
    vipFastTrackFee: 300,
    processingTimeEn: '24 - 72 Hours',
    processingTimeAr: '24 - 72 ساعة',
    authorityEn: 'Amer Center / GDRFA Dubai',
    authorityAr: 'مركز آمر / إقامة دبي',
    requiredDocumentsEn: [
      'Sponsor original passport, visa copy, and Emirates ID card',
      'Attested legal marriage certificate (translated into Arabic)',
      'Attested birth certificates for children',
      'Registered Ejari tenancy contract & recent DEWA electricity bill',
      'Sponsor monthly salary certificate (minimum AED 4,000 or AED 3,000 + accommodation)'
    ],
    requiredDocumentsAr: [
      'جواز سفر الكفيل الأصلي ونسخة الإقامة وبطاقة الهوية الإماراتية',
      'عقد زواج قانوني مصدق حسب الأصول ومترجم للغة العربية',
      'شهادات ميلاد مصدقة رسمياً للأبناء',
      'عقد إيجاري سكني مسجل وفاتورة ديوا حديثة',
      'شهادة راتب الكفيل (الحد الأدنى 4,000 درهم أو 3,000 درهم مع السكن)'
    ],
    keyBenefitsEn: [
      'Fast-track family reuniting in Dubai under unified residency rules',
      'Full assistance with MOFA and embassy certified translations',
      'Priority scheduling at Karama Medical Center and ICP biometric desks'
    ],
    keyBenefitsAr: [
      'استقدام وجمع شمل الأسرة بدبي بكل سهولة وفق القوانين الرسمية',
      'مساعدة كاملة في التصديقات الدبلوماسية والترجمة القانونية المعتمدة',
      'أولوية حجز الفحص الطبي بمركز الكرامة وبصمة الهوية الاتحادية'
    ],
    isPopular: true,
    isVipEligible: true
  },

  // 5. Parents Sponsorship Visa (1-Year & 10-Year)
  {
    id: 'amer-parents-sponsorship-visa',
    departmentId: 'amer',
    titleEn: 'Parents Sponsorship Visa (1-Year & 10-Year)',
    titleAr: 'كفالة الوالدين (سنة و10 سنوات)',
    category: 'residency',
    shortDescEn: 'Official humanitarian sponsorship for parents (mother and father) or 10-year dependent Golden Visa. Includes dependency proof submission, refundable security deposit guarantee, medical insurance typing, and fast-track clearance.',
    shortDescAr: 'كفالة واستقدام الوالدين الإنسانية (الأب والأم) أو الإقامة الذهبية التابعة لمدة 10 سنوات. تشمل إثبات الإعالة، إيداع الضمان المسترد، التأمين الصحي المعتمد وتثبيت الإقامة.',
    govFee: 3500,
    serviceFee: 450,
    vipFastTrackFee: 350,
    processingTimeEn: '2 - 4 Days',
    processingTimeAr: '2 - 4 أيام',
    authorityEn: 'Amer Center / GDRFA Dubai',
    authorityAr: 'مركز آمر / إقامة دبي',
    requiredDocumentsEn: [
      'Sponsor original passport, visa, and Emirates ID (salary AED 20,000+ or Golden Visa)',
      'Attested birth certificate of sponsor proving relationship with parents',
      'Affidavit / dependency certificate proving sponsor is the sole breadwinner',
      'Ejari contract for minimum 2-bedroom apartment & DEWA bill',
      'Comprehensive basic health insurance policy for parents'
    ],
    requiredDocumentsAr: [
      'جواز سفر الكفيل وهوية الإمارات (راتب 20 ألف درهم فما فوق أو إقامة ذهبية)',
      'شهادة ميلاد الكفيل مصدقة رسمياً لإثبات صلة القرابة بالأبوين',
      'إقرار إعالة مصدق يثبت أن الكفيل هو المعيل الوحيد للوالدين',
      'عقد إيجاري لشقة غرفتين وصالة على الأقل وفاتورة ديوا',
      'وثيقة تأمين صحي شاملة للوالدين'
    ],
    keyBenefitsEn: [
      'Official humanitarian residency approval under GDRFA guidelines',
      'Refundable security deposit managed with official government vouchers',
      '10-Year matching residency if sponsor holds a UAE Golden Visa'
    ],
    keyBenefitsAr: [
      'اعتماد إنساني رسمي للإقامة تحت إشراف الإدارة العامة للإقامة',
      'إيداع الضمان المالي المسترد بإيصالات حكومية رسمية فورية',
      'إقامة متطابقة لمدة 10 سنوات في حال كان الكفيل حاملاً للإقامة الذهبية'
    ],
    isPopular: false,
    isVipEligible: true
  },

  // 6. Tourist & Visit Visa (30 & 60 Days)
  {
    id: 'amer-tourist-visit-visa',
    departmentId: 'amer',
    titleEn: 'Tourist & Visit Visa (30 & 60 Days)',
    titleAr: 'تأشيرة السياحة والزيارة (30 و60 يوماً)',
    category: 'residency',
    shortDescEn: 'Official UAE tourist visas and single/multiple entry permits issued within 4 to 24 hours. Extendable inside the country for an additional 30 or 60 days without leaving Dubai or doing airport runs.',
    shortDescAr: 'إصدار تأشيرات السياحة والزيارة لدخول دبي ودولة الإمارات خلال 4 إلى 24 ساعة، مع إمكانية التمديد الداخلي لمدة 30 أو 60 يوماً إضافية دون مغادرة الدولة.',
    govFee: 476,
    serviceFee: 150,
    vipFastTrackFee: 150,
    processingTimeEn: '4 - 24 Hours',
    processingTimeAr: '4 - 24 ساعة',
    authorityEn: 'Amer Center / GDRFA Dubai',
    authorityAr: 'مركز آمر / إقامة دبي',
    requiredDocumentsEn: [
      'Clear color passport copy (valid for at least 6 months)',
      'Recent passport-size colored photograph',
      'Confirmed return flight itinerary and hotel booking or host residence details'
    ],
    requiredDocumentsAr: [
      'نسخة ملونة واضحة من جواز السفر (صلاحية 6 أشهر على الأقل)',
      'صورة شخصية حديثة بخلفية بيضاء',
      'تذكرة عودة مؤكدة وتفاصيل الحجز الفندقي أو بيانات الكفيل المستضيف'
    ],
    keyBenefitsEn: [
      'Express digital approval transmitted directly to your email & WhatsApp',
      'In-country extension without airport-to-airport visa runs',
      'Valid for entry across all UAE international airports'
    ],
    keyBenefitsAr: [
      'إصدار رقمي فوري يرسل مباشرة إلى بريدك الإلكتروني والواتساب',
      'إمكانية التمديد من داخل الدولة دون الحاجة لمغادرة المطار',
      'صالحة للدخول عبر كافة مطارات ومنافذ دولة الإمارات'
    ],
    isPopular: true
  },

  // 7. Job Seeker & Exploration Entry Permit
  {
    id: 'amer-job-seeker-visa',
    departmentId: 'amer',
    titleEn: 'Job Seeker & Exploration Entry Permit',
    titleAr: 'تأشيرة استكشاف فرصة عمل (بدون كفيل)',
    category: 'residency',
    shortDescEn: 'Sponsor-free UAE job exploration visas (60, 90, and 120 days) for university graduates from top 500 global universities and skilled professionals classified in MoHRE Tier 1, 2, or 3.',
    shortDescAr: 'تأشيرة استكشاف فرص العمل والمهن الحرة (60، 90، و120 يوماً) بدون كفيل لخريجي أفضل 500 جامعة عالمية والمهنيين والكوادر المهارية المصنفة لدى وزارة الموارد البشرية.',
    govFee: 550,
    serviceFee: 180,
    vipFastTrackFee: 150,
    processingTimeEn: '24 - 48 Hours',
    processingTimeAr: '24 - 48 ساعة',
    authorityEn: 'Amer Center / GDRFA Dubai',
    authorityAr: 'مركز آمر / إقامة دبي',
    requiredDocumentsEn: [
      'Valid passport copy (minimum 6 months validity)',
      'Attested Bachelor degree certificate or higher',
      'Proof of graduation from a recognized top-500 university or professional accreditation',
      'Financial solvency proof or refundable security guarantee'
    ],
    requiredDocumentsAr: [
      'نسخة جواز السفر (صلاحية 6 أشهر على الأقل)',
      'شهادة المؤهل الجامعي (البكالوريوس فما فوق) مصدقة رسمياً',
      'إثبات التخرج من إحدى أفضل 500 جامعة عالمية أو الاعتماد المهني',
      'إثبات القدرة المالية أو الضمان المالي المسترد المعتمد'
    ],
    keyBenefitsEn: [
      'Attend job interviews and meetings legally without local company sponsorship',
      'Easily convertible into full employment residency upon receiving job offer',
      'Single or multiple entry options available'
    ],
    keyBenefitsAr: [
      'حضور المقابلات الوظيفية وتوقيع العقود بصورة قانونية دون كفيل',
      'إمكانية التحويل الفوري إلى إقامة عمل عند استلام عرض العمل',
      'خيارات الدخول الفردي أو المتعدد حسب رغبة المتعامل'
    ]
  },

  // 8. Employment Entry Permit (Pink Visa)
  {
    id: 'amer-work-entry-permit',
    departmentId: 'amer',
    titleEn: 'Employment Entry Permit (Pink Visa)',
    titleAr: 'إذن دخول للعمل (التأشيرة الوردية)',
    category: 'residency',
    shortDescEn: 'Issuance of official electronic employment entry permits (outside UAE: AED 476 | inside UAE: AED 1,125) following MoHRE electronic work permit quota approval. Valid for 60 days to complete visa stamping.',
    shortDescAr: 'إصدار أذونات الدخول الرسمية للعمل (خارج الدولة: 476 درهم | داخل الدولة: 1,125 درهم) بعد موافقة وزارة الموارد البشرية، صالحة لمدة 60 يوماً لإتمام الفحص وتثبيت الإقامة.',
    govFee: 476,
    serviceFee: 150,
    vipFastTrackFee: 150,
    processingTimeEn: '24 Hours',
    processingTimeAr: '24 ساعة',
    authorityEn: 'Amer Center / GDRFA Dubai',
    authorityAr: 'مركز آمر / إقامة دبي',
    requiredDocumentsEn: [
      'Approved MoHRE Electronic Work Permit / Job Offer approval',
      'Clear passport copy of the employee (minimum 6 months validity)',
      'Company Trade License and Establishment Card details',
      'Personal colored digital photo'
    ],
    requiredDocumentsAr: [
      'موافقة تصريح العمل الإلكتروني الصادرة من وزارة الموارد البشرية',
      'نسخة ملونة واضحة من جواز سفر الموظف (صلاحية 6 أشهر على الأقل)',
      'بيانات الرخصة التجارية وبطاقة المنشأة للشركة المستقدمة',
      'صورة شخصية ملونة حديثة'
    ],
    keyBenefitsEn: [
      'Official authorization to travel to Dubai and enter for employment',
      'Instant electronic PDF transmission for airline boarding check-in',
      'Seamless transition to change status or proceed to medical fitness'
    ],
    keyBenefitsAr: [
      'الموافقة الرسمية للسفر والدخول إلى دبي للالتحاق بالعمل',
      'إصدار رقمي فوري بصيغة PDF لتقديمه لشركات الطيران عند السفر',
      'انتقال مباشر لتعديل الوضع وإجراء الفحص الطبي وبصمة الهوية'
    ]
  },

  // 9. Visa Status Change (Inside UAE)
  {
    id: 'amer-visa-status-change',
    departmentId: 'amer',
    titleEn: 'Visa Status Change (Inside UAE)',
    titleAr: 'تعديل وضع التأشيرة (داخل الدولة بدون مغادرة)',
    category: 'residency',
    shortDescEn: 'Legally convert any visit visa, tourist visa, or cancelled residence visa to a new employment or partner visa inside the UAE without exiting the country. Official fee: AED 676 for employee, AED 640 for family.',
    shortDescAr: 'تعديل الوضع القانوني للتأشيرة (676 درهم للموظف / 640 درهم للعائلة) من زيارة أو إقامة ملغاة إلى إقامة جديدة داخل الدولة دون الحاجة للسفر أو مغادرة المطار.',
    govFee: 676,
    serviceFee: 150,
    vipFastTrackFee: 150,
    processingTimeEn: 'Same Day / 2 - 4 Hours',
    processingTimeAr: 'نفس اليوم / 2 - 4 ساعات',
    authorityEn: 'Amer Center / GDRFA Dubai',
    authorityAr: 'مركز آمر / إقامة دبي',
    requiredDocumentsEn: [
      'Applicant original passport and current tourist/visit visa or cancellation paper',
      'New approved employment or partner entry permit',
      'Unified Number (UID) verification on GDRFA database'
    ],
    requiredDocumentsAr: [
      'جواز سفر المكفول وتأشيرة الزيارة الحالية أو ورقة إلغاء الإقامة السابقة',
      'إذن الدخول الجديد المعتمد للعمل أو الإقامة الاستثمارية',
      'الرقم الموحد (UID) للتحقق والمطابقة على قاعدة بيانات إقامة دبي'
    ],
    keyBenefitsEn: [
      '100% legal compliance without leaving the country or doing visa runs',
      'Immediate reset of the 60-day window to complete medical and Emirates ID',
      'Protects applicant against daily overstay immigration fines'
    ],
    keyBenefitsAr: [
      'تعديل قانوني فوري 100% دون مغادرة أراضي الدولة أو السفر للمطار',
      'بدء فترة 60 يوماً جديدة لإتمام الفحص الطبي وإصدار بطاقة الهوية',
      'حماية كاملة من تراكم غرامات الإقامة والتأخير'
    ],
    isPopular: true
  },

  // 10. Visa Hold & Unhold (Dependent Retention)
  {
    id: 'amer-visa-hold-unhold',
    departmentId: 'amer',
    titleEn: 'Visa Hold & Unhold (Dependent Retention)',
    titleAr: 'تعليق ورفع تعليق الإقامة (تجميد إقامات الأسرة)',
    category: 'residency',
    shortDescEn: 'Temporary hold and retention of family dependent visas while switching employment or transferring corporate sponsorship, preventing dependent cancellation fines and automated re-entry expenses.',
    shortDescAr: 'تجميد وتعليق إقامات الأسرة مؤقتاً أثناء نقل كفالة الكفيل أو تغيير جهة العمل لتفادي إلغاء إقامات الأبناء والزوجة وتوفير تكاليف الاستقدام والغرامات.',
    govFee: 500,
    serviceFee: 150,
    vipFastTrackFee: 200,
    processingTimeEn: 'Same Day / 24 Hours',
    processingTimeAr: 'نفس اليوم / 24 ساعة',
    authorityEn: 'Amer Center / GDRFA Dubai',
    authorityAr: 'مركز آمر / إقامة دبي',
    requiredDocumentsEn: [
      'Sponsor Emirates ID and passport copy',
      'Dependent original passport and Emirates ID for each family member on hold',
      'Job offer letter from new employer or new trade license / company formation paper',
      'Refundable security guarantee deposit (AED 5,000 per family or as mandated)'
    ],
    requiredDocumentsAr: [
      'الهوية الإماراتية وجواز سفر الكفيل',
      'جواز السفر الأصلي وبطاقة الهوية لكل فرد من أفراد الأسرة المطلوب تعليق إقامتهم',
      'عرض العمل من جهة العمل الجديدة أو الرخصة التجارية وعقد التأسيس',
      'مبلغ الضمان المالي المسترد المعتمد لدى إقامة دبي'
    ],
    keyBenefitsEn: [
      'Family members remain legally in the UAE with uninterrupted school/residence status',
      'Saves thousands of dirhams in visa cancellation, visit visas, and re-entry fees',
      'Automatic unhold release as soon as the sponsor new visa is stamped'
    ],
    keyBenefitsAr: [
      'بقاء أفراد الأسرة داخل الدولة بصورة قانونية دون انقطاع دراسي أو إسكاني',
      'توفير آلاف الدراهم في تكاليف الإلغاء وتأشيرات الزيارة وإعادة الاستقدام',
      'رفع التعليق التلقائي واسترداد الضمان المالي فور تثبيت تأشيرة الكفيل'
    ]
  },

  // 11. Establishment Card (Issuance & Renewal)
  {
    id: 'amer-establishment-card',
    departmentId: 'amer',
    titleEn: 'Establishment Card (Issuance & Renewal)',
    titleAr: 'بطاقة المنشأة (إصدار وتجديد للمؤسسات والشركات)',
    category: 'corporate',
    shortDescEn: 'Corporate immigration file registration and establishment card issuance (New: AED 476 | Renewal: AED 576). Required for every mainland and freezone company to issue employee and investor visas.',
    shortDescAr: 'فتح ملف المنشأة وإصدار وتجديد بطاقة المنشأة للهجرة (جديد: 476 درهم | تجديد: 576 درهم) لشركات دبي لتمكينها من إصدار تأشيرات الموظفين والشركاء.',
    govFee: 476,
    serviceFee: 100,
    vipFastTrackFee: 200,
    processingTimeEn: '24 - 48 Hours',
    processingTimeAr: '24 - 48 ساعة',
    authorityEn: 'Amer Center / GDRFA Dubai',
    authorityAr: 'مركز آمر / إقامة دبي',
    requiredDocumentsEn: [
      'Valid Trade License copy and Commercial Register from DED / Freezone',
      'Memorandum of Association (MOA) and Local Service Agent contract',
      'Authorized signatory passport, Emirates ID, and active signature card',
      'Certified Ejari commercial tenancy contract for company premises'
    ],
    requiredDocumentsAr: [
      'نسخة الرخصة التجارية والسجل التجاري من اقتصادية دبي أو المنطقة الحرة',
      'عقد تأسيس الشركة (MOA) وعقد وكيل الخدمات المحلي',
      'جواز سفر وهوية المفوض بالتوقيع وبطاقة التوقيع الإلكترونية',
      'عقد إيجاري تجاري مصدق لمقر الشركة وفاتورة ديوا'
    ],
    keyBenefitsEn: [
      'Activates the company immigration file for all international hiring',
      'Instant electronic portal linking on GDRFA smart business dashboard',
      'Annual renewal reminder service to avoid corporate operational blocks'
    ],
    keyBenefitsAr: [
      'تفعيل ملف المنشأة لدى إدارة الإقامة لاستقدام وتعيين الكوادر',
      'ربط إلكتروني فوري بلوحة تحكم الشركات الذكية لدى إقامة دبي',
      'خدمة التذكير السنوي قبل الانتهاء لتفادي تعليق معاملات الشركة'
    ]
  },

  // 12. Establishment Card Block Removal
  {
    id: 'amer-establishment-block-removal',
    departmentId: 'amer',
    titleEn: 'Establishment Card Block Removal',
    titleAr: 'رفع الحظر والتعاميم عن بطاقة المنشأة',
    category: 'corporate',
    shortDescEn: 'Fast legal resolution and lifting of GDRFA immigration blocks, circulars, and quota suspensions caused by expired trade licenses, expired Ejari, or pending inspections.',
    shortDescAr: 'إزالة التعاميم ورفع الحظر الإداري والقيود المفروضة على بطاقة المنشأة بسبب انتهاء الرخصة التجارية أو عقد الإيجار واستعادة صلاحية إصدار التأشيرات فوراً.',
    govFee: 350,
    serviceFee: 150,
    vipFastTrackFee: 300,
    processingTimeEn: '24 - 48 Hours',
    processingTimeAr: '24 - 48 ساعة',
    authorityEn: 'Amer Center / GDRFA Dubai',
    authorityAr: 'مركز آمر / إقامة دبي',
    requiredDocumentsEn: [
      'Updated valid Trade License and commercial register',
      'Proof of resolved violation (e.g. renewed Ejari or rectified partner file)',
      'Authorized signatory passport and Emirates ID copy',
      'Official GDRFA violation notice printout'
    ],
    requiredDocumentsAr: [
      'الرخصة التجارية المجددة والسجل التجاري المحدث',
      'إثبات إزالة سبب المخالفة (تجديد عقد الإيجار أو تعديل ملف الشريك)',
      'جواز سفر وهوية المفوض بالتوقيع المعتمد',
      'إشعار المخالفة أو التعميم الصادر من إقامة دبي'
    ],
    keyBenefitsEn: [
      'Immediate restoration of employee visa processing and renewals',
      'Direct liaison officer representation at GDRFA headquarters',
      'Reconciliation of outstanding administrative dues with waiver petitions'
    ],
    keyBenefitsAr: [
      'استعادة صلاحية إصدار وتجديد إقامات الموظفين والشركاء فوراً',
      'تمثيل ومتابعة حثيثة عبر ضابط علاقات حكومية لدى الإدارة العامة للإقامة',
      'تسوية المبالغ الإدارية المتأخرة وتقديم طلبات الإعفاء المتاحة'
    ]
  },

  // 13. GDRFA Portal Mobile & UID Update
  {
    id: 'amer-portal-mobile-update',
    departmentId: 'amer',
    titleEn: 'GDRFA Portal Mobile & UID Update',
    titleAr: 'تحديث رقم الهاتف والرقم الموحد على بوابة إقامة دبي',
    category: 'residency',
    shortDescEn: 'Official update and verification of the registered mobile number and email on GDRFA immigration portal. Essential for receiving 2FA security OTP codes and UAE Pass identity synchronization.',
    shortDescAr: 'تعديل وتحديث رقم الهاتف المتحرك والبريد الإلكتروني المعتمد على خوادم إقامة دبي لاستلام رموز التحقق (OTP) والإشعارات وتفعيل الربط مع الهوية الرقمية.',
    govFee: 150,
    serviceFee: 100,
    vipFastTrackFee: 80,
    processingTimeEn: 'Instant / 1 Hour',
    processingTimeAr: 'فوري / ساعة واحدة',
    authorityEn: 'Amer Center / GDRFA Dubai',
    authorityAr: 'مركز آمر / إقامة دبي',
    requiredDocumentsEn: [
      'Applicant Emirates ID card (front and back)',
      'Unified Number (UID) on visa sticker or residency file',
      'New registered mobile SIM registered under applicant name in UAE'
    ],
    requiredDocumentsAr: [
      'بطاقة الهوية الإماراتية للمتعامل (الوجهان)',
      'الرقم الموحد (UID) المدون على الإقامة أو تأشيرة الدخول',
      'شريحة الهاتف الجديدة المسجلة رسمياً باسم المتعامل في دولة الإمارات'
    ],
    keyBenefitsEn: [
      'Immediate receipt of ministerial SMS and one-time password (OTP) codes',
      'Uninterrupted access to UAE Pass and GDRFA Dubai mobile applications',
      'Processed in minutes at our Karama Business Center customer happiness desks'
    ],
    keyBenefitsAr: [
      'استلام فوري لرسائل الوزارة ورموز التحقق الثنائية (OTP)',
      'دخول سلس ومباشر لتطبيق الهوية الرقمية وتطبيقات إقامة دبي',
      'إنجاز سريع خلال دقائق في منصات سعادة المتعاملين بمركز الكرامة'
    ]
  },

  // 14. Overstay Fine Reduction Petition
  {
    id: 'amer-fine-reduction',
    departmentId: 'amer',
    titleEn: 'Overstay Fine Reduction Petition',
    titleAr: 'طلب استرحام لتخفيض غرامات الإقامة المتراكمة',
    category: 'residency',
    shortDescEn: 'Legal drafting and official submission of humanitarian fine reduction petitions (Labor petition: AED 325 | Family petition: AED 285) to discount overstay penalties accrued under GDRFA Dubai authority.',
    shortDescAr: 'صياغة قانونية وتقديم طلب استرحام معتمد لتخفيض غرامات التأخير ومخالفات الإقامة (طلب استرحام عامل: 325 درهم | استرحام عائلة: 285 درهم) وإعفاء الحالات الإنسانية.',
    govFee: 250,
    serviceFee: 100,
    vipFastTrackFee: 250,
    processingTimeEn: '2 - 4 Days',
    processingTimeAr: '2 - 4 أيام',
    authorityEn: 'Amer Center / GDRFA Dubai',
    authorityAr: 'مركز آمر / إقامة دبي',
    requiredDocumentsEn: [
      'Violator clear passport copy and Unified Number (UID)',
      'Immigration overstay fine statement voucher',
      'Detailed humanitarian justification letter explaining delay circumstances',
      'Supporting medical reports, court documents, or employer non-renewal evidence'
    ],
    requiredDocumentsAr: [
      'نسخة جواز سفر المخالف ورقمه الموحد (UID)',
      'كشف بيان الغرامات المتراكمة الصادر من إقامة دبي',
      'رسالة التماس واسترحام مفصلة توضح أسباب ومبررات التأخير',
      'المستندات المؤيدة (تقارير طبية، أحكام قضائية، أو إثبات تعثر جهة العمل)'
    ],
    keyBenefitsEn: [
      'Substantial reduction of daily accumulated overstay immigration fines',
      'Permits legal status adjustment or departure without blacklisting',
      'Official case tracking with GDRFA humanitarian committee'
    ],
    keyBenefitsAr: [
      'تخفيضات كبرى على غرامات التأخير المتراكمة وفق القرارات الرسمية',
      'إمكانية تعديل الوضع القانوني أو المغادرة دون حرمان أو إبعاد',
      'متابعة رسمية ومباشرة مع اللجنة الإنسانية بإدارة الإقامة'
    ]
  },

  // 15. Staff Absconding & Outpass Regularization
  {
    id: 'amer-absconding-removal',
    departmentId: 'amer',
    titleEn: 'Staff Absconding & Outpass Regularization',
    titleAr: 'تسوية بلاغات الانقطاع والهروب وإصدار تصاريح المغادرة',
    category: 'residency',
    shortDescEn: 'Formal representation to cancel or regularize unauthorized absence (absconding) reports, dispute settlement between employer and employee, and outpass exit clearance without ban.',
    shortDescAr: 'إلغاء وتسوية بلاغات الانقطاع عن العمل والهروب، والصلح والتسوية بين الكفيل والمكفول وإصدار تصاريح المغادرة القانونية دون تعميم.',
    govFee: 450,
    serviceFee: 250,
    vipFastTrackFee: 350,
    processingTimeEn: '3 - 5 Days',
    processingTimeAr: '3 - 5 أيام',
    authorityEn: 'Amer Center / GDRFA Dubai',
    authorityAr: 'مركز آمر / إقامة دبي',
    requiredDocumentsEn: [
      'Worker passport copy and Unified Number',
      'Company Trade License and Establishment Card details',
      'NOC / Mutual reconciliation agreement between employer and employee',
      'Copy of original absconding registration circular'
    ],
    requiredDocumentsAr: [
      'نسخة جواز سفر العامل ورقمه الموحد',
      'بيانات الرخصة التجارية وبطاقة المنشأة للشركة',
      'اتفاقية الصلح والتسوية أو كتاب التنازل المعتمد من الكفيل',
      'نسخة من بلاغ الانقطاع أو التعميم الصادر سابقاً'
    ],
    keyBenefitsEn: [
      'Complete cancellation of circular and removal from immigration blacklist',
      'Enables legal transfer to a new sponsor or dignified repatriation',
      'Confidential and professional mediation under official government guidelines'
    ],
    keyBenefitsAr: [
      'إلغاء التعميم نهائياً ورفع الاسم من القائمة السوداء للهجرة',
      'إتاحة الانتقال القانوني إلى كفيل جديد أو السفر دون قيود',
      'وساطة احترافية وسرية تامة متوافقة مع اشتراطات إقامة دبي'
    ]
  },

  // 16. Unified File (UID) Merge & Federal Visa
  {
    id: 'amer-unified-file-federal-visa',
    departmentId: 'amer',
    titleEn: 'Unified File (UID) Merge & Federal Visa',
    titleAr: 'دمج وتوحيد الأرقام الموحدة (UID) والتأشيرة الاتحادية',
    category: 'residency',
    shortDescEn: 'Consolidation of duplicate Unified Identity Numbers (UID) and cross-emirate residence transfers. Eliminates system conflicts between Dubai GDRFA and Federal ICP immigration registries.',
    shortDescAr: 'دمج وتوحيد الأرقام الموحدة المتعددة (UID) وتصحيح التضاربات في ملفات الهجرة الاتحادية بين إمارة دبي وباقي الإمارات لإصدار الإقامات وتجديد الهوية دون عوائق.',
    govFee: 450,
    serviceFee: 200,
    vipFastTrackFee: 150,
    processingTimeEn: '24 Hours',
    processingTimeAr: '24 ساعة',
    authorityEn: 'Amer Center / GDRFA Dubai / ICP',
    authorityAr: 'إقامة دبي / الهيئة الاتحادية',
    requiredDocumentsEn: [
      'Original passport showing previous and current visas',
      'Emirates ID copy and all duplicate UID numbers to be merged',
      'Proof of current employment or company sponsorship in Dubai'
    ],
    requiredDocumentsAr: [
      'جواز السفر الأصلي موضحاً به التأشيرات السابقة والحالية',
      'صورة الهوية الإماراتية والأرقام الموحدة المطلوب دمجها',
      'إثبات العمل الحالي أو كفالة الشركة في إمارة دبي'
    ],
    keyBenefitsEn: [
      'Resolves data discrepancies across UAE immigration databases',
      'Enables error-free issuance of future visas and Emirates IDs',
      'Unified single identity across all UAE sovereign portals'
    ],
    keyBenefitsAr: [
      'حل كافة التعارضات وتكرار الأرقام في قواعد البيانات الاتحادية',
      'ضمان سهولة إصدار التأشيرات وبطاقات الهوية دون تعليق مستقبلي',
      'سجل موحد وشامل على مستوى كافة الدوائر الحكومية بالدولة'
    ]
  },

  // ==========================================
  // 2. DET (Economy & Tourism) - 10 Dedicated Services
  // ==========================================
  {
    id: 'det-commercial-license-new',
    departmentId: 'ded',
    titleEn: 'Commercial Trade License (100% Foreign LLC)',
    titleAr: 'إصدار رخصة تجارية جديدة (تملك أجنبي 100% ذ.م.م)',
    category: 'corporate',
    shortDescEn: 'Full mainland Dubai LLC & Sole Establishment commercial trade license setup with 100% foreign ownership, Dubai Chamber membership, and investor visa eligibility.',
    shortDescAr: 'تأسيس وإصدار الرخص التجارية في بر دبي الرئيسي (شركة ذات مسؤولية محدودة أو مؤسسة فردية) بتملك أجنبي 100% مع شهادة غرفة دبي وأهلية إقامة المستثمر.',
    govFee: 8500,
    serviceFee: 1200,
    vipFastTrackFee: 600,
    processingTimeEn: 'Same Day / 24 Hours',
    processingTimeAr: 'نفس اليوم / 24 ساعة',
    authorityEn: 'Dubai Economy & Tourism (DET)',
    authorityAr: 'دائرة الاقتصاد والسياحة بدبي (DET)',
    requiredDocumentsEn: [
      'Passport and Emirates ID copies of shareholders and appointed manager',
      '3 proposed company trade names in order of preference',
      'Selected ISIC4 commercial trading activities from the official DET catalog',
      'Registered commercial Ejari office lease (or sustainability desk)'
    ],
    requiredDocumentsAr: [
      'صور جوازات السفر والهوية الإماراتية للشركاء والمدير العام المعين',
      '3 مقترحات للاسم التجاري للشركة مرتبة حسب الأولوية',
      'الأنشطة التجارية المختارة من الدليل الرسمي لاقتصادية دبي',
      'عقد إيجار تجاري موثق (إيجاري) لمكتب أو محل تجاري'
    ],
    keyBenefitsEn: [
      '100% foreign shareholder ownership with zero local partner required',
      'Simultaneous Dubai Chamber, GDRFA (Amer), and MoHRE (Tasheel) file setup',
      'Immediate eligibility for 2-Year Investor Visas and corporate bank account'
    ],
    keyBenefitsAr: [
      'تملك أجنبي كامل بنسبة 100% دون الحاجة لشريك أو كفيل مواطن',
      'تسجيل فوري في غرفة تجارة دبي وفتح ملف المنشأة في آمر وتسهيل',
      'أهلية فورية لإصدار إقامات المستثمرين وفتح الحساب البنكي للشركة'
    ],
    isPopular: true,
    isVipEligible: true
  },
  {
    id: 'det-instant-license',
    departmentId: 'ded',
    titleEn: 'DET Instant License (No Ejari Year 1)',
    titleAr: 'الرخصة الفورية الذكية (بدون عقد إيجاري للسنة الأولى)',
    category: 'corporate',
    shortDescEn: 'Fast-track 15-minute Dubai mainland business license issued with a virtual site address and electronic MOA—waiving physical office Ejari for the entire first year.',
    shortDescAr: 'إصدار فوري لرخصة الأعمال في دبي خلال 15 دقيقة مع موقع افتراضي وعقد تأسيس إلكتروني، وإعفاء كامل من شرط عقد إيجار المكتب (إيجاري) طوال السنة الأولى.',
    govFee: 3000,
    serviceFee: 500,
    vipFastTrackFee: 350,
    processingTimeEn: '15 - 60 Minutes',
    processingTimeAr: '15 - 60 دقيقة',
    authorityEn: 'Dubai Economy & Tourism (DET)',
    authorityAr: 'دائرة الاقتصاد والسياحة بدبي (DET)',
    requiredDocumentsEn: [
      'Passport and UAE Visa / Entry Stamp copies of all partners',
      'Active UAE Pass digital identity account for at least one partner',
      'Choice of commercial or professional activity eligible for instant licensing'
    ],
    requiredDocumentsAr: [
      'صور جوازات السفر والإقامة أو ختم الدخول لجميع الشركاء',
      'حساب مفعل في تطبيق الهوية الرقمية (UAE Pass) لأحد الشركاء على الأقل',
      'اختيار نشاط تجاري أو مهني مشمول ضمن قائمة الترخيص الفوري'
    ],
    keyBenefitsEn: [
      'Zero office rent and zero Ejari required during Year 1',
      'Bundled issuance of Trade License, Chamber Certificate, GDRFA & MoHRE Establishment Cards',
      'Immediate Investor Residency Visa and up to 3 employee work permits'
    ],
    keyBenefitsAr: [
      'إعفاء تام من إيجار المكتب وعقد إيجاري خلال السنة الأولى',
      'إصدار موحد وفوري للرخصة وشهادة الغرفة وبطاقات المنشأة في آمر وتسهيل',
      'إمكانية إصدار إقامة مستثمر فوراً وتوظيف حتى 3 عمال'
    ],
    isPopular: true,
    isVipEligible: true
  },
  {
    id: 'det-etrader-license',
    departmentId: 'ded',
    titleEn: 'DED E-Trader License (Home & Social Media)',
    titleAr: 'رخصة تاجر إلكتروني (للأعمال المنزلية والتجارة الرقمية)',
    category: 'corporate',
    shortDescEn: 'Official home-based commercial and professional permit (AED 1,070 DET fee + AED 300 Chamber) for Instagram, TikTok, Amazon, Noon, and freelance e-commerce sellers.',
    shortDescAr: 'الترخيص الرسمي لمزاولة التجارة الإلكترونية والأعمال الحرة من المنزل وعبر منصات التواصل الاجتماعي (إنستغرام، تيك توك، أمازون، نون) برسوم حكومية 1,370 درهم شاملة الغرفة.',
    govFee: 1370,
    serviceFee: 300,
    vipFastTrackFee: 200,
    processingTimeEn: 'Same Day / 1 Hour',
    processingTimeAr: 'نفس اليوم / ساعة واحدة',
    authorityEn: 'Dubai Economy & Tourism (DET)',
    authorityAr: 'دائرة الاقتصاد والسياحة بدبي (DET)',
    requiredDocumentsEn: [
      'Valid UAE Emirates ID and active Dubai Residency Visa (or UAE/GCC National ID)',
      '10-digit Dubai Makani number for your residential apartment or villa',
      'Social media account handles (Instagram, TikTok) or website domain name'
    ],
    requiredDocumentsAr: [
      'بطاقة هوية إماراتية وإقامة سارية المفعول في دبي (أو هوية مواطني الإمارات والخليج)',
      'رقم "مكاني" المكون من 10 أرقام لمقر السكن الفعلي في إمارة دبي',
      'أسماء وروابط حسابات البيع على منصات التواصل الاجتماعي أو الموقع الإلكتروني'
    ],
    keyBenefitsEn: [
      'Legalizes social media and e-commerce selling with zero office rent',
      'Enables merchant payment gateways (Stripe, Tabby, Tamara) and corporate bank accounts',
      'Protects your brand trade name and authorizes participation in Dubai exhibitions'
    ],
    keyBenefitsAr: [
      'غطاء قانوني رسمي للبيع عبر الإنترنت والتواصل الاجتماعي بدون إيجار مكتب',
      'يتيح تفعيل بوابات الدفع الإلكتروني (تبي، تمارا، سترايب) والحسابات البنكية التجارية',
      'حماية رسمية للاسم التجاري وأحقية المشاركة في المعارض والبازارات بدبي'
    ],
    isPopular: true
  },
  {
    id: 'det-professional-license',
    departmentId: 'ded',
    titleEn: 'Professional & Consultancy License (Civil / Sole)',
    titleAr: 'الرخصة المهنية والاستشارية (مؤسسة فردية / شركة مدنية)',
    category: 'corporate',
    shortDescEn: '100% foreign-owned professional licensing for management consultancies, IT services, technical contracting, beauty salons, restaurants, and specialized professions.',
    shortDescAr: 'إصدار الرخص المهنية بتملك أجنبي 100% لمكاتب الاستشارات الإدارية والهندسية، تقنية المعلومات، الصيانة الفنية، الصالونات، والمطاعم.',
    govFee: 5800,
    serviceFee: 950,
    vipFastTrackFee: 450,
    processingTimeEn: 'Same Day / 24 Hours',
    processingTimeAr: 'نفس اليوم / 24 ساعة',
    authorityEn: 'Dubai Economy & Tourism (DET)',
    authorityAr: 'دائرة الاقتصاد والسياحة بدبي (DET)',
    requiredDocumentsEn: [
      'Passport and Emirates ID copies of the professional owners/partners',
      'Academic degree or professional qualification (for regulated consultancy activities)',
      'Commercial Ejari lease contract or virtual desk agreement'
    ],
    requiredDocumentsAr: [
      'صور جوازات السفر والهوية الإماراتية لأصحاب الرخصة المهنية',
      'المؤهل العلمي أو الشهادة المهنية (للأنشطة الاستشارية والهندسية المنظمة)',
      'عقد إيجار تجاري موثق (إيجاري) أو اتفاقية مكتب معتمد'
    ],
    keyBenefitsEn: [
      '100% foreign equity ownership and full profit repatriation',
      'Lower annual DET government license renewal tariffs than commercial LLCs',
      'Certified Emirati Local Service Agent (LSA) available on fixed low annual fee where required'
    ],
    keyBenefitsAr: [
      'ملكية أجنبية كاملة بنسبة 100% للأرباح والأصول والإدارة',
      'رسوم حكومية سنوية مخفضة مقارنة بالرخص التجارية العامة',
      'توفر وكيل خدمات محلي مواطن بعقد قانوني موثق وأتعاب سنوية رمزية ثابتة عند الحاجة'
    ]
  },
  {
    id: 'det-trade-name-reservation',
    departmentId: 'ded',
    titleEn: 'Trade Name Reservation & Initial Approval',
    titleAr: 'حجز الاسم التجاري وإصدار الموافقة المبدئية',
    category: 'corporate',
    shortDescEn: 'Official DET commercial trade name search, reservation certificate (AED 620 Arabic name), and Initial Approval issuance to lock your brand and sign Ejari.',
    shortDescAr: 'البحث الفوري وحجز الاسم التجاري (620 درهم للاسم العربي) وإصدار شهادة الموافقة المبدئية من اقتصادية دبي لحماية العلامة التجارية وتوقيع عقد إيجاري.',
    govFee: 740,
    serviceFee: 200,
    vipFastTrackFee: 150,
    processingTimeEn: '30 Minutes',
    processingTimeAr: '30 دقيقة',
    authorityEn: 'Dubai Economy & Tourism (DET)',
    authorityAr: 'دائرة الاقتصاد والسياحة بدبي (DET)',
    requiredDocumentsEn: [
      'Passport and Emirates ID copies of all proposed shareholders',
      '3 proposed company trade names in Arabic and English',
      'Specification of primary business activity category'
    ],
    requiredDocumentsAr: [
      'صور جوازات السفر والهوية الإماراتية لجميع الشركاء المقترحين',
      '3 مقترحات للاسم التجاري باللغتين العربية والإنجليزية',
      'تحديد النشاط الاقتصادي الرئيسي للشركة'
    ],
    keyBenefitsEn: [
      'Pre-submission trademark & phonetic audit to avoid rejected search fees',
      'Advisory on avoiding unnecessary AED 2,000 annual foreign name surcharges',
      'Locks your brand name across Dubai for 6 months'
    ],
    keyBenefitsAr: [
      'فحص استباقي في السجل التجاري الموحد لضمان قبول الاسم من المرة الأولى',
      'استشارة متخصصة لتفادي رسوم الاسم الأجنبي الإضافية (2,000 درهم سنوياً)',
      'حماية وحجز حصري لاسم شركتك في إمارة دبي لمدة 6 أشهر'
    ]
  },
  {
    id: 'det-moa-lsa-signing',
    departmentId: 'ded',
    titleEn: 'MOA & LSA Drafting & Electronic Signing',
    titleAr: 'صياغة وتوثيق عقود التأسيس وملاحق التعديل إلكترونياً',
    category: 'legal',
    shortDescEn: 'Bilingual legal drafting and UAE Pass electronic notary authentication for LLC Memorandums of Association (MOA), Share Transfer Addendums, and LSA contracts.',
    shortDescAr: 'الصياغة القانونية باللغتين العربية والإنجليزية والتوثيق الإلكتروني عبر الهوية الرقمية لعقود تأسيس الشركات (MOA)، ملاحق التنازل عن الحصص، وعقود وكيل الخدمات.',
    govFee: 550,
    serviceFee: 350,
    vipFastTrackFee: 250,
    processingTimeEn: '1 - 2 Hours',
    processingTimeAr: '1 - 2 ساعة',
    authorityEn: 'DET / Dubai Courts Digital Notary',
    authorityAr: 'اقتصادية دبي / الكاتب العدل الرقمي بمحاكم دبي',
    requiredDocumentsEn: [
      'DET Initial Approval & Trade Name Certificate (for new MOA) or existing Trade License (for Addendum)',
      'Passports and Emirates IDs of all signing partners and appointed General Manager',
      'Active verified UAE Pass app on each signatory’s smartphone'
    ],
    requiredDocumentsAr: [
      'شهادة الموافقة المبدئية والاسم التجاري (للعقد الجديد) أو الرخصة الحالية (لملحق التعديل)',
      'جوازات السفر والهوية الإماراتية لجميع الشركاء والمدير العام',
      'تطبيق الهوية الرقمية (UAE Pass) مفعل وموثق على هواتف الموقعين'
    ],
    keyBenefitsEn: [
      'Includes comprehensive banking power clauses required by UAE corporate banks',
      '100% paperless remote signing via UAE Pass (even if partners are abroad)',
      'Instant QR-coded notarized MOA synced directly with DET registry'
    ],
    keyBenefitsAr: [
      'تضمين كافة بنود الصلاحيات البنكية والمالية المطلوبة لفتح الحسابات المصرفية للشركات',
      'توقيع رقمي عن بُعد عبر UAE Pass دون الحاجة للحضور الشخصي (حتى للشركاء خارج الدولة)',
      'صدور فوري للعقد المصدق برمز QR والربط التلقائي مع نظام اقتصادية دبي'
    ]
  },
  {
    id: 'det-license-amendment-partner-activity',
    departmentId: 'ded',
    titleEn: 'License Amendment (Partner, Manager & Activity)',
    titleAr: 'تعديل الرخصة التجارية (الشركاء، المدير، والأنشطة)',
    category: 'corporate',
    shortDescEn: 'Official DET license modifications: removing 51% local sponsor for 100% expat ownership, share transfers, changing General Manager, adding activities, or address change.',
    shortDescAr: 'إجراء كافة التعديلات القانونية على الرخصة: التحويل إلى تملك أجنبي 100%، إدخال أو إخراج شريك، تغيير المدير العام، إضافة الأنشطة، أو نقل الموقع.',
    govFee: 1250,
    serviceFee: 550,
    vipFastTrackFee: 350,
    processingTimeEn: 'Same Day / 24 Hours',
    processingTimeAr: 'نفس اليوم / 24 ساعة',
    authorityEn: 'Dubai Economy & Tourism (DET)',
    authorityAr: 'دائرة الاقتصاد والسياحة بدبي (DET)',
    requiredDocumentsEn: [
      'Current DET Trade License and previous notarized MOA',
      'Passports and Emirates IDs of existing and incoming partners/manager',
      'New Ejari certificate (if amending company address) or external NOC (if adding regulated activity)'
    ],
    requiredDocumentsAr: [
      'الرخصة التجارية الحالية وعقد التأسيس الأصلي المصدق',
      'جوازات السفر والهويات للشركاء والمديرين الحاليين والجدد',
      'شهادة إيجاري الجديدة (في حال تغيير العنوان) أو موافقة الجهة المنظمة (عند إضافة نشاط منظم)'
    ],
    keyBenefitsEn: [
      'Convert legacy 51/49 LLCs to 100% foreign ownership in a single day',
      'End-to-end MOA addendum drafting and digital partner signing',
      'Simultaneous update of MoHRE (Tasheel) and GDRFA (Amer) establishment files'
    ],
    keyBenefitsAr: [
      'تحويل الشركات القديمة إلى ملكية أجنبية كاملة بنسبة 100% في يوم واحد',
      'صياغة وتوثيق ملحق تعديل عقد التأسيس إلكترونياً بالكامل',
      'تحديث متزامن لبطاقات المنشأة لدى وزارة العمل (تسهيل) وإقامة دبي (آمر)'
    ]
  },
  {
    id: 'det-license-renewal-ejari',
    departmentId: 'ded',
    titleEn: 'Trade License Renewal & UBO Filing',
    titleAr: 'تجديد الرخصة التجارية وتحديث المستفيد الحقيقي',
    category: 'corporate',
    shortDescEn: '30-minute express annual DET Trade License renewal, commercial Ejari lease linkage, Dubai Chamber renewal, UBO declaration filing, and late fine reduction petitions.',
    shortDescAr: 'تجديد سنوي سريع للرخص التجارية والمهنية خلال 30 دقيقة، ربط عقد إيجاري التجاري، تجديد عضوية الغرفة، تسجيل المستفيد الحقيقي (UBO)، وطلبات تخفيض الغرامات.',
    govFee: 6800,
    serviceFee: 400,
    vipFastTrackFee: 250,
    processingTimeEn: '30 Minutes',
    processingTimeAr: '30 دقيقة',
    authorityEn: 'Dubai Economy & Tourism (DET)',
    authorityAr: 'دائرة الاقتصاد والسياحة بدبي (DET)',
    requiredDocumentsEn: [
      'Copy of current or expired DET Trade License',
      'Valid Commercial Ejari Certificate (can be registered on the spot at our Karama Ejari desk)',
      'Passport and Emirates ID copies of shareholders for UBO verification'
    ],
    requiredDocumentsAr: [
      'صورة الرخصة التجارية الحالية أو المنتهية',
      'شهادة عقد إيجاري تجاري سارية (يمكن توثيقها فوراً لدى مكتب إيجاري في مركزنا)',
      'صور جوازات وهويات الشركاء لتحديث سجل المستفيد الحقيقي (UBO)'
    ],
    keyBenefitsEn: [
      'Prevents corporate bank account freezes and MoHRE/Amer portal suspensions',
      'Includes mandatory Ultimate Beneficial Owner (UBO) registry compliance',
      'Automatic expiry date update across Tasheel and Amer company files'
    ],
    keyBenefitsAr: [
      'حماية الحسابات البنكية للشركة من التجميد ومنع إيقاف ملفات تسهيل وآمر',
      'تحديث بيانات المستفيد الحقيقي (UBO) الإلزامي لتفادي الغرامات الاتحادية',
      'ربط وتحديث تاريخ انتهاء الرخصة الجديد في أنظمة وزارة العمل وإقامة دبي فوراً'
    ],
    isPopular: true
  },
  {
    id: 'det-commercial-permits-mulin',
    departmentId: 'ded',
    titleEn: 'Commercial Permits: Mu\'lin Ads, Sales & Kiosks',
    titleAr: 'التصاريح التجارية: إعلانات مُعلن، التنزيلات، والأكشاك',
    category: 'corporate',
    shortDescEn: 'Official DET commercial marketing permits: Discount & Promotional Sale permits, Mu\'lin advertising approvals, mall kiosk/pop-up stand permits, and 24/7 operating permits.',
    shortDescAr: 'إصدار التصاريح التجارية والتسويقية من اقتصادية دبي: تصاريح التنزيلات والعروض الترويجية، إعلانات منصة مُعلن، تصاريح الأكشاك بالمولات، وتصاريح العمل 24 ساعة.',
    govFee: 1050,
    serviceFee: 350,
    vipFastTrackFee: 250,
    processingTimeEn: 'Same Day / 24 Hours',
    processingTimeAr: 'نفس اليوم / 24 ساعة',
    authorityEn: 'DET (Mu\'lin & Commercial Compliance)',
    authorityAr: 'اقتصادية دبي (منصة مُعلن والرقابة التجارية)',
    requiredDocumentsEn: [
      'Valid DET Trade License copy',
      'Bilingual promotional artwork mockup (minimum 50% Arabic text ratio)',
      'Discounted product list with original vs. sale prices (for Promotional Sale permits)',
      'Mall management NOC and floor plan (for Kiosk / Stand permits)'
    ],
    requiredDocumentsAr: [
      'نسخة الرخصة التجارية سارية المفعول',
      'تصميم الإعلان أو العرض باللغتين العربية والإنجليزية (نسبة العربية 50% كحد أدنى)',
      'قائمة أسعار المنتجات قبل وبعد الخصم (لتصاريح التنزيلات والعروض)',
      'خطاب عدم ممانعة من إدارة المول ومخطط الموقع (لتصاريح الأكشاك والمنصات)'
    ],
    keyBenefitsEn: [
      'Eliminates AED 5,000–10,000 DET commercial inspection fines for unpermitted sales',
      'Pre-submission Arabic linguistic review of your promotional artwork',
      'Instant printable QR-coded permit for storefront and Instagram display'
    ],
    keyBenefitsAr: [
      'تفادي مخالفات الرقابة التجارية الفورية (5,000 إلى 10,000 درهم) للعروض غير المرخصة',
      'مراجعة لغوية وفنية مسبقة للتصاميم لضمان القبول الفوري',
      'استلام تصريح رسمي مزود برمز QR جاهز للعرض في المحل وحسابات التواصل'
    ]
  },
  {
    id: 'det-license-cancellation-liquidation',
    departmentId: 'ded',
    titleEn: 'License Cancellation & Company Liquidation',
    titleAr: 'إلغاء الرخصة التجارية وتصفية الشركات رسمياً',
    category: 'corporate',
    shortDescEn: 'Complete legal deregistration of Sole Establishments and two-stage LLC company liquidation—including liquidator report, newspaper notices, and Tasheel/Amer closures.',
    shortDescAr: 'الشطب والإلغاء القانوني النهائي للمؤسسات الفردية وتصفية الشركات ذات المسؤولية المحدودة (LLC) شاملاً تقرير المصفي القانوني، إعلانات الصحف، وإغلاق ملفات العمل والإقامة.',
    govFee: 2020,
    serviceFee: 850,
    vipFastTrackFee: 500,
    processingTimeEn: '24 Hours (Sole / Stage 1 LLC)',
    processingTimeAr: '24 ساعة (للمؤسسة الفردية / المرحلة الأولى للتصفية)',
    authorityEn: 'Dubai Economy & Tourism (DET)',
    authorityAr: 'دائرة الاقتصاد والسياحة بدبي (DET)',
    requiredDocumentsEn: [
      'Original Trade License and Partner Passports / Emirates IDs',
      'MoHRE (Tasheel) zero-employee clearance and GDRFA (Amer) establishment closure',
      'Notarized Partners Liquidation Resolution & Auditor Acceptance Letter (for LLCs)',
      'DEWA and Ejari cancellation clearances'
    ],
    requiredDocumentsAr: [
      'الرخصة التجارية وجوازات السفر والهويات لجميع الشركاء',
      'شهادة خلو المنشأة من العمالة وإغلاق ملف تسهيل وبطاقة منشأة آمر',
      'قرار الشركاء الموثق بالتصفية وخطاب قبول المصفي القانوني (لشركات LLC)',
      'مخالصة هيئة كهرباء ومياه دبي وإلغاء عقد إيجاري'
    ],
    keyBenefitsEn: [
      'Stops recurring annual license fees, Chamber dues, and FTA tax penalties permanently',
      'All clearances (Amer, Tasheel, Ejari, Notary, Newspaper Ads) handled under one roof at KBC',
      'Official DET Final Deregistration Certificate protecting shareholders from future liability'
    ],
    keyBenefitsAr: [
      'إيقاف نهائي لتراكم رسوم التجديد السنوية وغرامات التأخير والضرائب',
      'إنجاز كافة براءات الذمة (آمر، تسهيل، إيجاري، الكاتب العدل، والصحف) تحت سقف واحد في مركزنا',
      'استلام شهادة إلغاء وشطب السجل التجاري الرسمية لإبراء ذمة الشركاء والمديرين تماماً'
    ]
  },

  // ==========================================
  // 3. TASHEEL (MOHRE) - 10 Dedicated Services
  // ==========================================
  {
    id: 'tasheel-electronic-work-permit-new',
    departmentId: 'tasheel',
    titleEn: 'New Electronic Work Permit (Recruitment)',
    titleAr: 'إصدار تصريح عمل إلكتروني جديد (داخل وخارج الدولة)',
    category: 'labor',
    shortDescEn: 'Complete 3-stage MoHRE electronic work permit issuance for skilled and unskilled employees: Job Offer, Work Permit Initial Approval, WPP Insurance, and 2-Year Labour Card.',
    shortDescAr: 'إصدار تصريح العمل الإلكتروني الجديد للموظفين (عمالة ماهرة أو محدودة المهارة) شاملاً عرض العمل، الموافقة المبدئية، التأمين العمالي، وبطاقة العمل لمدة سنتين.',
    govFee: 1450,
    serviceFee: 240,
    vipFastTrackFee: 200,
    processingTimeEn: '24 - 48 Hours',
    processingTimeAr: '24 - 48 ساعة',
    authorityEn: 'Ministry of Human Resources & Emiratisation (MoHRE)',
    authorityAr: 'وزارة الموارد البشرية والتوطين (تسهيل)',
    requiredDocumentsEn: [
      'Valid DET Trade License, MoHRE Establishment Card, and available electronic quota',
      'Candidate passport copy (6+ months validity) and digital photo (white background)',
      'MOFA-attested university degree/diploma (required for Skilled Professions Levels 1–5)',
      'Employer E-Signature Smart Card authorization'
    ],
    requiredDocumentsAr: [
      'رخصة تجارية سارية وبطاقة منشأة فعالة مع توفر رصيد كوتا إلكترونية شاغر',
      'صورة جواز سفر المرشح (صلاحية 6 أشهر فأكثر) وصورة شخصية بخلفية بيضاء',
      'شهادة علمية مصدقة من وزارة الخارجية (للمهن التخصصية والعمالة الماهرة المستويات 1-5)',
      'بطاقة التوقيع الإلكتروني لصاحب العمل أو المدير المخول'
    ],
    keyBenefitsEn: [
      'Low-cost Workers Protection Insurance (AED 130–250) replacing AED 3,000 bank guarantee',
      'Direct handover to our adjacent Amer desk for Pink Entry Permit & on-site KMFC Medical Test',
      'Accurate occupational skill code mapping to minimize Category 2 permit fees'
    ],
    keyBenefitsAr: [
      'إصدار وثيقة التأمين العمالي الميسرة كبديل عن الضمان المصرفي البالغ 3,000 درهم',
      'ربط مباشر مع قسم آمر المجاور لإصدار إذن الدخول وإجراء الفحص الطبي في مركز الكرامة الطبي بنفس المبنى',
      'مطابقة دقيقة للمهنة لتقليل الرسوم الحكومية لتصريح العمل وفق تصنيف المنشأة'
    ],
    isPopular: true
  },
  {
    id: 'tasheel-work-permit-renewal',
    departmentId: 'tasheel',
    titleEn: 'Work Permit & Labour Card Renewal (2 Years)',
    titleAr: 'تجديد تصريح وبطاقة العمل الإلكترونية (لمدة سنتين)',
    category: 'labor',
    shortDescEn: 'Biennial MoHRE work permit and Unified Employment Contract renewal integrated with on-site DHA Medical Fitness screening (KMFC) and GDRFA residency visa stamping.',
    shortDescAr: 'تجديد تصريح وعقد العمل الموحد لمدة سنتين لدى وزارة الموارد البشرية بالتكامل مع الفحص الطبي في مركز الكرامة الطبي (KMFC) وتجديد الإقامة في آمر تحت سقف واحد.',
    govFee: 1250,
    serviceFee: 163,
    vipFastTrackFee: 150,
    processingTimeEn: 'Same Day / 24 Hours',
    processingTimeAr: 'نفس اليوم / 24 ساعة',
    authorityEn: 'Ministry of Human Resources & Emiratisation (MoHRE)',
    authorityAr: 'وزارة الموارد البشرية والتوطين (تسهيل)',
    requiredDocumentsEn: [
      'Employee passport valid for at least 6 months and current Emirates ID',
      'Passed DHA Medical Fitness Certificate (completed on-site at Karama Medical Center)',
      'Signed renewed 2-year Unified Labour Contract and employer E-Signature Card'
    ],
    requiredDocumentsAr: [
      'جواز سفر الموظف ساري المفعول وبطاقة الهوية الحالية',
      'شهادة اللياقة الطبية (تُنجز فوراً في مركز الكرامة الطبي بنفس المبنى)',
      'توقيع عقد العمل الموحد المجدد لمدة سنتين وبطاقة التوقيع الإلكتروني لصاحب العمل'
    ],
    keyBenefitsEn: [
      'Complete Medical + Tasheel Contract Renewal + Amer Visa Renewal in a single building',
      'Option to update employee salary or job title during renewal at zero extra amendment fee',
      'Prevents AED 200/month MoHRE late renewal penalties'
    ],
    keyBenefitsAr: [
      'إنجاز الفحص الطبي وتجديد عقد تسهيل وإقامة آمر في مبنى واحد وفي زيارة واحدة',
      'إمكانية تعديل الراتب أو المسمى الوظيفي أثناء التجديد دون رسوم تعديل إضافية',
      'حماية المنشأة من غرامات تأخير تجديد بطاقات العمل (200 درهم شهرياً)'
    ],
    isPopular: true
  },
  {
    id: 'tasheel-job-offer-unified-contract',
    departmentId: 'tasheel',
    titleEn: 'Job Offer Letter & Unified Labour Contract',
    titleAr: 'طباعة عروض العمل وتوثيق وتعديل عقود العمل الموحدة',
    category: 'labor',
    shortDescEn: 'Typing and electronic authentication of barcoded MoHRE Job Offer Letters, Fixed-Term Unified Employment Contracts, and Salary/Title Contract Amendments.',
    shortDescAr: 'إعداد وطباعة عروض العمل الموحدة بالباركود، توثيق عقود العمل الإلكترونية محددة المدة، وإجراء تعديلات الراتب والمسمى الوظيفي في نظام الوزارة.',
    govFee: 224,
    serviceFee: 83,
    vipFastTrackFee: 100,
    processingTimeEn: '30 - 60 Minutes',
    processingTimeAr: '30 - 60 دقيقة',
    authorityEn: 'Ministry of Human Resources & Emiratisation (MoHRE)',
    authorityAr: 'وزارة الموارد البشرية والتوطين (تسهيل)',
    requiredDocumentsEn: [
      'Company establishment card code and active employer E-Signature Card',
      'Employee passport copy, Emirates ID (for existing staff), and salary breakdown',
      'Attested educational degree (if upgrading title to a Skilled Profession)'
    ],
    requiredDocumentsAr: [
      'رقم بطاقة المنشأة وبطاقة التوقيع الإلكتروني السارية لصاحب العمل',
      'صورة جواز سفر الموظف والهوية وتفاصيل الراتب الأساسي والبدلات',
      'الشهادة العلمية المصدقة (في حال تعديل المهنة إلى مسمى تخصصي أو إداري)'
    ],
    keyBenefitsEn: [
      '100% compliant with UAE Federal Decree-Law No. 33 of 2021 fixed-term standards',
      'Fast salary amendment attestation required to sponsor family visas at Amer (AED 4,000+ threshold)',
      'Instant synchronization with Wage Protection System (WPS) payroll records'
    ],
    keyBenefitsAr: [
      'توافق كامل مع أحكام العقود محددة المدة في قانون العمل الإماراتي رقم 33 لسنة 2021',
      'تعديل وتصديق فوري للراتب لتمكين الموظف من كفالة أسرته لدى قسم آمر (شرط راتب 4,000 درهم)',
      'تحديث آلي ومباشر لبيانات الراتب في نظام حماية الأجور (WPS)'
    ]
  },
  {
    id: 'tasheel-quota-application-amendment',
    departmentId: 'tasheel',
    titleEn: 'Electronic Quota Application & Increase',
    titleAr: 'طلب إصدار وزيادة الكوتا الإلكترونية للمنشآت',
    category: 'labor',
    shortDescEn: 'Corporate workforce quota allocation and expansion requests based on Ejari office/warehouse capacity, active contracting projects, and Tawteen compliance.',
    shortDescAr: 'تقديم طلبات إصدار وزيادة حصص تصاريح العمل الإلكترونية (الكوتا) للشركات بناءً على مساحة المقر في إيجاري وحجم المشاريع والامتثال لمستهدفات التوطين.',
    govFee: 250,
    serviceFee: 150,
    vipFastTrackFee: 150,
    processingTimeEn: '24 - 48 Hours',
    processingTimeAr: '24 - 48 ساعة',
    authorityEn: 'Ministry of Human Resources & Emiratisation (MoHRE)',
    authorityAr: 'وزارة الموارد البشرية والتوطين (تسهيل)',
    requiredDocumentsEn: [
      'Valid DET Trade License and MoHRE Company Establishment Card',
      'Commercial Ejari tenancy contract and latest DEWA electricity/water bill',
      'Active project contracts / LPOs (when requesting high-volume contracting or service quotas)'
    ],
    requiredDocumentsAr: [
      'رخصة تجارية سارية وبطاقة منشأة فعالة لدى وزارة الموارد البشرية',
      'عقد إيجاري التجاري الساري وآخر فاتورة كهرباء ومياه (ديوا) للمقر',
      'عقود المشاريع السارية (عند طلب كوتا موسعة لشركات المقاولات والصيانة والخدمات)'
    ],
    keyBenefitsEn: [
      'Pre-submission office sq. ft. capacity audit to guarantee maximum quota approval',
      'Strategic diversity & Tawteen advisory to protect Category 2 Tier A low fee status',
      'Rapid electronic quota activation ready for immediate job offer issuance'
    ],
    keyBenefitsAr: [
      'حساب استباقي للطاقة الاستيعابية للمكتب لضمان قبول الحد الأقصى من الكوتا',
      'استشارات التنوع الثقافي والتوطين للحفاظ على رسوم الفئة الثانية المخفضة للشركة',
      'تفعيل سريع لرصيد الكوتا في حساب المنشأة للبدء الفوري في التوظيف'
    ]
  },
  {
    id: 'tasheel-company-establishment-card',
    departmentId: 'tasheel',
    titleEn: 'MoHRE Company Establishment File (Open & Update)',
    titleAr: 'فتح وتحديث ملف وبطاقة المنشأة بوزارة الموارد البشرية',
    category: 'labor',
    shortDescEn: 'Opening new corporate labour files to obtain your MoHRE Company Code, updating renewed trade licenses/partners, and lifting establishment file suspensions.',
    shortDescAr: 'فتح ملف المنشأة الجديد وإصدار رقم الشركة بوزارة العمل، تحديث بيانات الرخصة التجارية المجددة أو الشركاء، ورفع الإيقاف عن ملفات المنشآت.',
    govFee: 200,
    serviceFee: 163,
    vipFastTrackFee: 150,
    processingTimeEn: '30 - 60 Minutes',
    processingTimeAr: '30 - 60 دقيقة',
    authorityEn: 'Ministry of Human Resources & Emiratisation (MoHRE)',
    authorityAr: 'وزارة الموارد البشرية والتوطين (تسهيل)',
    requiredDocumentsEn: [
      'Valid DET Trade License and Memorandum of Association (MOA)',
      'Commercial Ejari lease contract (exempt in Year 1 for DET Instant Licenses)',
      'Original Emirates ID and Passport copies of all partners and authorized manager'
    ],
    requiredDocumentsAr: [
      'الرخصة التجارية السارية وعقد التأسيس المصدق',
      'عقد إيجاري التجاري للمقر (تُعفى منه الرخصة الفورية خلال السنة الأولى)',
      'الهوية الإماراتية الأصلية وصور جوازات السفر للشركاء والمدير العام'
    ],
    keyBenefitsEn: [
      'Simultaneous setup of both MoHRE (Tasheel) and GDRFA (Amer) Establishment Cards in one hall',
      'Instant synchronization of renewed DET Trade License expiry dates to unblock visa portals',
      'Includes Unified Personal Number (ertibat) registration for all shareholders'
    ],
    keyBenefitsAr: [
      'فتح ملف المنشأة في تسهيل وبطاقة المنشأة في آمر معاً في نفس القاعة وبزيارة واحدة',
      'تحديث فوري لتاريخ انتهاء الرخصة التجارية المجددة لإعادة تفعيل خدمات التصاريح',
      'تسجيل وإصدار الرقم الشخصي الموحد لكافة الملاك والشركاء في قاعدة بيانات الوزارة'
    ]
  },
  {
    id: 'tasheel-esignature-card-issuance',
    departmentId: 'tasheel',
    titleEn: 'E-Signature Smart Card & PRO Card Issuance',
    titleAr: 'إصدار وتفعيل بطاقة التوقيع الإلكتروني وبطاقة المندوب',
    category: 'labor',
    shortDescEn: '20-minute biometric activation of the MoHRE E-Signature Smart Card for company owners/managers, linking multiple licenses to one card, and PRO card issuance.',
    shortDescAr: 'إصدار وتفعيل بطاقة التوقيع الإلكتروني الذكية لأصحاب الشركات والمديرين بالبصمة خلال 20 دقيقة، ربط عدة شركات ببطاقة واحدة، وإصدار بطاقة المندوب المعتمد.',
    govFee: 250,
    serviceFee: 83,
    vipFastTrackFee: 100,
    processingTimeEn: '20 Minutes',
    processingTimeAr: '20 دقيقة',
    authorityEn: 'Ministry of Human Resources & Emiratisation (MoHRE)',
    authorityAr: 'وزارة الموارد البشرية والتوطين (تسهيل)',
    requiredDocumentsEn: [
      'Original valid UAE Emirates ID card of the owner, partner, or appointed manager',
      'Trade License copy and MOA (or notarized Power of Attorney for authorized signatories)',
      'In-person attendance of the signatory for the 2-minute live thumbprint verification'
    ],
    requiredDocumentsAr: [
      'بطاقة الهوية الإماراتية الأصلية السارية للمالك أو الشريك أو المدير المسؤول',
      'نسخة الرخصة التجارية وعقد التأسيس (أو وكالة عدلية مصدقة للمفوض بالتوقيع)',
      'الحضور الشخصي للمخول بالتوقيع لمدة دقيقتين لمطابقة البصمة الحية وتفعيل البطاقة'
    ],
    keyBenefitsEn: [
      'Link all of your UAE mainland companies onto a single E-Signature Smart Card',
      'Immediate on-the-spot physical smart card encoding and PIN activation',
      'Enables 100% digital execution of all job offers, labour contracts, and cancellations'
    ],
    keyBenefitsAr: [
      'ربط كافة الرخص التجارية المملوكة لك في بطاقة توقيع إلكتروني ذكية واحدة',
      'برمجة وتسليم وتفعيل الرقم السري للبطاقة فوراً في نفس الجلسة',
      'اعتماد إلكتروني آمن لعروض وعقود العمل والإلغاء دون الحاجة للحضور المتكرر'
    ]
  },
  {
    id: 'tasheel-mission-work-permit',
    departmentId: 'tasheel',
    titleEn: 'Mission & Temporary Work Permit (90–180 Days)',
    titleAr: 'إصدار تصريح عمل مهمة وتصريح العمل المؤقت (90 - 180 يوماً)',
    category: 'labor',
    shortDescEn: 'Short-term MoHRE work authorizations for 3 to 6 months: overseas Mission Work Permits for project specialists and in-country Temporary Work Permits.',
    shortDescAr: 'تصاريح العمل قصيرة الأمد (من 3 إلى 6 أشهر): تصريح عمل مهمة لاستقدام الخبراء والفنيين من الخارج، وتصريح العمل المؤقت للمتواجدين داخل الدولة.',
    govFee: 500,
    serviceFee: 163,
    vipFastTrackFee: 150,
    processingTimeEn: '24 Hours',
    processingTimeAr: '24 ساعة',
    authorityEn: 'Ministry of Human Resources & Emiratisation (MoHRE)',
    authorityAr: 'وزارة الموارد البشرية والتوطين (تسهيل)',
    requiredDocumentsEn: [
      'Valid DET Trade License and active MoHRE Establishment Card with Mission Quota',
      'Candidate passport copy (6+ months validity) and digital photo',
      'Short-term project contract or current sponsor NOC (for in-country temporary permits)'
    ],
    requiredDocumentsAr: [
      'رخصة تجارية سارية وبطاقة منشأة فعالة مع توفر كوتا مهمة',
      'صورة جواز سفر المرشح وصورة شخصية واضحة',
      'عقد العمل المؤقت أو عدم ممانعة الكفيل الحالي (للتصاريح المؤقتة داخل الدولة)'
    ],
    keyBenefitsEn: [
      '100% legal alternative to risking AED 50,000 tourist visa employment fines',
      '90-day Mission Visa renewable once for up to 180 days without full 2-year residency cost',
      'Fast clearance for oil & gas, industrial, and construction site security passes'
    ],
    keyBenefitsAr: [
      'بديل قانوني آمن يحمي الشركة من غرامة تشغيل حاملي تأشيرات السياحة (50,000 درهم)',
      'صلاحية 90 يوماً قابلة للتجديد لـ 180 يوماً بتكلفة أقل من الإقامة الكاملة',
      'يمنح الفنيين والمهندسين تصاريح الدخول النظامية للمواقع الصناعية والإنشائية'
    ]
  },
  {
    id: 'tasheel-part-time-work-permit',
    departmentId: 'tasheel',
    titleEn: 'Part-Time & Golden Visa Holder Work Permit',
    titleAr: 'تصريح العمل الجزئي وتصريح عمل حاملي الإقامة الذهبية',
    category: 'labor',
    shortDescEn: '1-Year MoHRE Part-Time Work Permits (AED 600 gov fee), Golden Visa Holder Work Permits, and Student/Juvenile Training Permits—with zero company quota deduction.',
    shortDescAr: 'إصدار تصريح العمل الجزئي لمدة سنة (رسوم حكومية 600 درهم)، تصريح عمل حاملي الإقامة الذهبية، وتصاريح تدريب الطلاب — بدون خصم من رصيد كوتا الشركة.',
    govFee: 600,
    serviceFee: 163,
    vipFastTrackFee: 120,
    processingTimeEn: 'Same Day / 24 Hours',
    processingTimeAr: 'نفس اليوم / 24 ساعة',
    authorityEn: 'Ministry of Human Resources & Emiratisation (MoHRE)',
    authorityAr: 'وزارة الموارد البشرية والتوطين (تسهيل)',
    requiredDocumentsEn: [
      'Valid DET Trade License and MoHRE Establishment Card of the hiring company',
      'Employee valid Passport, UAE Residency Visa / Golden Visa, and Emirates ID',
      'Signed MoHRE Part-Time or Golden Visa Employment Contract'
    ],
    requiredDocumentsAr: [
      'الرخصة التجارية السارية وبطاقة المنشأة للشركة صاحبة العمل',
      'جواز السفر والإقامة السارية (أو الإقامة الذهبية) وبطاقة الهوية الإماراتية للموظف',
      'عقد العمل الجزئي أو عقد عمل حامل الإقامة الذهبية موقعاً من الطرفين'
    ],
    keyBenefitsEn: [
      'Does NOT deduct from your company’s main MoHRE electronic visa quota',
      'Allows skilled professionals to work legally for a second employer in Dubai',
      'Mandatory legal registration for Golden Visa holders employed in mainland companies'
    ],
    keyBenefitsAr: [
      'لا يخصم إطلاقاً من رصيد الكوتا الإلكترونية الرئيسية للشركة',
      'يتيح للكفاءات والمهنيين العمل بشكل قانوني لدى شركة ثانية لساعات جزئية',
      'يوثق عقود ورواتب حاملي الإقامة الذهبية العاملين في الشركات الخاصة بنظام حماية الأجور'
    ]
  },
  {
    id: 'tasheel-family-sponsorship-work-permit',
    departmentId: 'tasheel',
    titleEn: 'Work Permit on Family Sponsorship (Spouse / Parent NOC)',
    titleAr: 'تصريح عمل لمن هم على إقامة ذويهم (كفالة الزوج أو الأب)',
    category: 'labor',
    shortDescEn: 'Low-cost 2-Year MoHRE Work Permit and Labour Card for wives, husbands, and children sponsored by their family—allowing full-time work without cancelling family residency.',
    shortDescAr: 'إصدار تصريح وبطاقة عمل لمدة سنتين للزوجة أو الزوج أو الأبناء المقيمين على كفالة أسرهم للعمل القانوني في القطاع الخاص مع الاحتفاظ بإقامتهم العائلية.',
    govFee: 450,
    serviceFee: 163,
    vipFastTrackFee: 120,
    processingTimeEn: 'Same Day / 24 Hours',
    processingTimeAr: 'نفس اليوم / 24 ساعة',
    authorityEn: 'Ministry of Human Resources & Emiratisation (MoHRE)',
    authorityAr: 'وزارة الموارد البشرية والتوطين (تسهيل)',
    requiredDocumentsEn: [
      'Applicant valid Passport, Family-Sponsored UAE Residency Visa, and Emirates ID',
      'Family Sponsor (Husband/Father) valid Passport, Residency Visa, and Emirates ID',
      'Signed Arabic No Objection Certificate (NOC) from family sponsor (drafted at our desk)',
      'Attested academic degree (if applying for a Skilled Profession title Levels 1–5)'
    ],
    requiredDocumentsAr: [
      'جواز السفر والإقامة العائلية السارية وبطاقة الهوية الإماراتية للمتقدم',
      'جواز السفر والإقامة والهوية السارية للكفيل (الزوج أو الأب أو الأم)',
      'شهادة عدم ممانعة (NOC) باللغة العربية موقعة من الكفيل (تُطبع في مكتبنا)',
      'الشهادة العلمية المصدقة (للمسميات الوظيفية الماهرة والتخصصية المستويات 1-5)'
    ],
    keyBenefitsEn: [
      'Keep your family residency visa intact—zero medical test or new Emirates ID cost required',
      'Lowest 2-year work permit fee in the UAE and zero company quota consumption',
      'Full UAE Labour Law protection, WPS salary transfers, and end-of-service gratuity rights'
    ],
    keyBenefitsAr: [
      'الاحتفاظ الكامل بالإقامة العائلية وتوفير رسوم إذن الدخول والفحص الطبي والهوية',
      'أقل رسوم حكومية لتصريح عمل لمدة سنتين دون استهلاك كوتا المنشأة',
      'تمتع كامل بحقوق قانون العمل الإماراتي وتحويل الرواتب عبر WPS ومكافأة نهاية الخدمة'
    ],
    isPopular: true
  },
  {
    id: 'tasheel-labour-cancellation-absconding',
    departmentId: 'tasheel',
    titleEn: 'Work Permit Cancellation, Out-of-Country & Absconding',
    titleAr: 'إلغاء تصريح وبطاقة العمل، الإلغاء خارج الدولة، وبلاغات الانقطاع',
    category: 'labor',
    shortDescEn: 'Instant MoHRE Labour Card cancellation (AED 0 ministry fee + typing), cancellation for staff outside UAE 6+ months, absconding withdrawal, and direct Amer visa cancellation.',
    shortDescAr: 'الإلغاء الفوري لتصريح وبطاقة العمل (معفى من الرسوم الوزارية)، إلغاء العمالة المتواجدة خارج الدولة لأكثر من 6 أشهر، تسوية بلاغات الانقطاع، وإلغاء الإقامة في آمر.',
    govFee: 0,
    serviceFee: 83,
    vipFastTrackFee: 100,
    processingTimeEn: '15 - 30 Minutes',
    processingTimeAr: '15 - 30 دقيقة',
    authorityEn: 'Ministry of Human Resources & Emiratisation (MoHRE)',
    authorityAr: 'وزارة الموارد البشرية والتوطين (تسهيل)',
    requiredDocumentsEn: [
      'Employer E-Signature Smart Card and establishment details',
      'Employee Passport and Emirates ID copy',
      'Signed End-of-Service Final Settlement & Cancellation Form (exempt if employee is outside UAE 6+ months)'
    ],
    requiredDocumentsAr: [
      'بطاقة التوقيع الإلكتروني لصاحب العمل وبيانات المنشأة',
      'صورة جواز السفر والهوية الإماراتية للموظف',
      'توقيع العامل على إقرار استلام المستحقات ونموذج الإلغاء (يُعفى منه من هم خارج الدولة لأكثر من 6 أشهر)'
    ],
    keyBenefitsEn: [
      'Zero (AED 0) MoHRE ministry fee for standard work permit cancellation—pay only typing fee',
      'Complete both Tasheel Labour Card Cancellation and Amer Residency Visa Cancellation in 30 mins',
      'Removes departing employee from WPS payroll roster immediately to prevent company blocks'
    ],
    keyBenefitsAr: [
      'إعفاء كامل (0 درهم رسوم وزارة) لمعاملة إلغاء بطاقة العمل العادية — تُدفع رسوم الطباعة فقط',
      'إتمام إلغاء بطاقة العمل في تسهيل وإلغاء الإقامة في آمر معاً خلال 30 دقيقة في نفس الصالة',
      'إخراج الموظف فوراً من كشف رواتب نظام حماية الأجور (WPS) لحماية ملف الشركة من الإيقاف'
    ]
  },

  // ==========================================
  // 4. ICP (Federal Authority) - 6 Dedicated Services
  // ==========================================
  {
    id: 'icp-emirates-id-new',
    departmentId: 'icp',
    titleEn: 'New Emirates ID Application & Biometrics',
    titleAr: 'إصدار بطاقة الهوية الإماراتية الجديدة والبصمة',
    category: 'residency',
    shortDescEn: 'Official ICP New Emirates ID typing (AED 386 for 2-Year Visa | AED 1,186 for 10-Year Golden Visa) co-located with Karama Medical Center (KMFC) and biometric stations.',
    shortDescAr: 'طباعة ومعالجة طلب الهوية الإماراتية الجديدة (386 درهم لإقامة سنتين | 1,186 درهم للإقامة الذهبية 10 سنوات) بالتكامل مع مركز الكرامة الطبي (KMFC) ومحطات البصمة.',
    govFee: 386,
    serviceFee: 50,
    vipFastTrackFee: 150,
    processingTimeEn: 'Same Day Typing + Biometrics',
    processingTimeAr: 'طباعة وبصمة في نفس اليوم',
    authorityEn: 'Federal Authority for Identity & Citizenship (ICP)',
    authorityAr: 'الهيئة الاتحادية للهوية والجنسية (ICP)',
    requiredDocumentsEn: [
      'Original valid Passport (minimum 6 months validity)',
      'Active UAE Entry Permit (with Airport Entry Stamp or In-Country Status Change) or Birth Certificate for newborns',
      'ICAO-compliant digital studio photograph with pure white background'
    ],
    requiredDocumentsAr: [
      'جواز السفر الأصلي ساري المفعول (بصلاحية لا تقل عن 6 أشهر)',
      'إذن دخول ساري المفعول (مع ختم الدخول أو تعديل الوضع) أو شهادة الميلاد للمواليد الجدد',
      'صورة شخصية حديثة بخلفية بيضاء مطابقة لمعايير الهيئة الاتحادية'
    ],
    keyBenefitsEn: [
      'Complete DHA Medical Test (KMFC), Emirates ID Typing, and Biometrics at Karama Business Center',
      'Instant Digital Emirates ID activated on UAE Pass as soon as residency visa stamps',
      'Children under 15 years old are 100% exempt from biometric fingerprinting'
    ],
    keyBenefitsAr: [
      'إنجاز الفحص الطبي (KMFC) وطباعة الهوية والبصمة في مجمع مركز الكرامة للأعمال',
      'تفعيل فوري للنسخة الرقمية من الهوية على تطبيق UAE Pass بمجرد تثبيت الإقامة',
      'إعفاء كامل للأطفال دون سن 15 عاماً من الحضور لإجراء البصمة البيومترية'
    ],
    isPopular: true
  },
  {
    id: 'icp-emirates-id-renewal',
    departmentId: 'icp',
    titleEn: 'Emirates ID Renewal (1, 2, 5 & 10 Years)',
    titleAr: 'تجديد بطاقة الهوية الإماراتية (سنة، سنتان، 5 و10 سنوات)',
    category: 'residency',
    shortDescEn: 'Fast-track ICP Emirates ID renewal synchronized with on-site DHA Medical Fitness screening (KMFC) and GDRFA residency visa renewal— plus late fine exemption petitions.',
    shortDescAr: 'تجديد سريع لبطاقة الهوية الإماراتية بالتزامن مع فحص اللياقة الطبية في مركز الكرامة الطبي (KMFC) وتجديد الإقامة في آمر — مع خدمة طلبات الإعفاء من غرامات التأخير.',
    govFee: 386,
    serviceFee: 50,
    vipFastTrackFee: 120,
    processingTimeEn: '15 Minutes Typing',
    processingTimeAr: '15 دقيقة للطباعة والاعتماد',
    authorityEn: 'Federal Authority for Identity & Citizenship (ICP)',
    authorityAr: 'الهيئة الاتحادية للهوية والجنسية (ICP)',
    requiredDocumentsEn: [
      'Original expiring/expired Emirates ID card and valid Passport',
      'Passed DHA Medical Fitness Certificate (completed on-site at Karama Medical Center)',
      'Recent studio photograph with white background (no biometric repeat needed for adults)'
    ],
    requiredDocumentsAr: [
      'بطاقة الهوية الإماراتية الحالية وجواز السفر الأصلي الساري',
      'شهادة اللياقة الطبية (تُنجز فوراً في مركز الكرامة الطبي بنفس المبنى)',
      'صورة شخصية حديثة بخلفية بيضاء (لا يُطلب إعادة التبصيم للمقيمين المسجلين مسبقاً)'
    ],
    keyBenefitsEn: [
      'Zero repeat fingerprinting required for existing adult residents during renewal',
      'Avoids AED 20/day ICP federal late renewal fines (or submits formal fine exemption petition)',
      'Updates your photo, mobile number, and Zajel courier delivery address simultaneously'
    ],
    keyBenefitsAr: [
      'بدون الحاجة لإعادة البصمة العشرية للمقيمين المسجلة بصماتهم مسبقاً',
      'تفادي غرامة التأخير اليومية (20 درهماً يومياً) مع إمكانية تقديم طلب إعفاء رسمي للحالات المستحقة',
      'تحديث الصورة الشخصية ورقم الهاتف وعنوان توصيل زاجل في خطوة واحدة'
    ],
    isPopular: true
  },
  {
    id: 'icp-emirates-id-replacement',
    departmentId: 'icp',
    titleEn: 'Emirates ID Replacement (Lost, Damaged & Fawri 24h)',
    titleAr: 'إصدار بدل فاقد أو تالف للهوية الإماراتية (وخدمة فوري 24 ساعة)',
    category: 'residency',
    shortDescEn: 'Official replacement for lost, stolen, or damaged Emirates ID smart cards, printed card data updates (name/title change), and Fawri 24-hour express printing.',
    shortDescAr: 'استخراج بطاقة هوية إماراتية بدل فاقد أو تالف، تحديث البيانات المطبوعة على البطاقة (تغيير الاسم أو المهنة)، وخدمة "فوري" للطباعة المستعجلة خلال 24 ساعة.',
    govFee: 386,
    serviceFee: 60,
    vipFastTrackFee: 150,
    processingTimeEn: '24 Hours (Fawri) / 48h Standard',
    processingTimeAr: '24 ساعة (فوري) / 48 ساعة عادي',
    authorityEn: 'Federal Authority for Identity & Citizenship (ICP)',
    authorityAr: 'الهيئة الاتحادية للهوية والجنسية (ICP)',
    requiredDocumentsEn: [
      'Original valid Passport and active UAE Residency Visa (or Family Book for UAE nationals)',
      'Emirates ID number or copy of the lost card (or physical damaged card for damaged replacement)',
      'Recent studio photograph with white background'
    ],
    requiredDocumentsAr: [
      'جواز السفر الأصلي الساري والإقامة الفعالة (أو خلاصة القيد للمواطنين)',
      'رقم الهوية أو صورة البطاقة المفقودة (أو تسليم البطاقة التالفة في حال طلب بدل تالف)',
      'صورة شخصية حديثة بخلفية بيضاء'
    ],
    keyBenefitsEn: [
      'Immediately deactivates lost card chip serial number to protect against identity fraud',
      'Optional Fawri Urgent Service delivers your new physical smart card within 24 hours',
      'No police station visit required for standard lost card replacement when verified via UAE Pass'
    ],
    keyBenefitsAr: [
      'إيقاف فوري للشريحة الإلكترونية للبطاقة المفقودة لحمايتك من أي استخدام غير قانوني',
      'توفر مسار خدمة "فوري" لاستلام البطاقة البلاستيكية الجديدة خلال 24 ساعة فقط',
      'إنجاز مباشر عبر التحقق بالهوية الرقمية وجواز السفر الأصلي'
    ]
  },
  {
    id: 'icp-urgent-biometric-appointment',
    departmentId: 'icp',
    titleEn: 'Urgent Biometric Fingerprint Appointment & Rescheduling',
    titleAr: 'حجز وتقريب مواعيد البصمة البيومترية العاجلة للهوية',
    category: 'residency',
    shortDescEn: 'Priority booking and early slot rescheduling for mandatory 10-finger ICP biometric scans at Karama Central Post Office (adjacent to KBC), Al Ghazal, and Al Barsha.',
    shortDescAr: 'حجز وتقديم مواعيد البصمة العشرية وبصمة العين في مراكز الهوية الاتحادية (بريد الكرامة المركزي الملاصق لمركزنا، الغزال، والبرشاء) لتفادي تأخير الإقامة.',
    govFee: 0,
    serviceFee: 100,
    vipFastTrackFee: 150,
    processingTimeEn: 'Same Day / 24-48h Slot',
    processingTimeAr: 'فوري / موعد خلال 24-48 ساعة',
    authorityEn: 'Federal Authority for Identity & Citizenship (ICP)',
    authorityAr: 'الهيئة الاتحادية للهوية والجنسية (ICP)',
    requiredDocumentsEn: [
      'Typed ICP Emirates ID Application Form with active barcode (PRAN)',
      'Original valid Passport and Entry Permit / Status Change Certificate'
    ],
    requiredDocumentsAr: [
      'استمارة طلب الهوية الإماراتية المطبوعة والمزودة برمز الباركود (PRAN)',
      'جواز السفر الأصلي وإذن الدخول أو شهادة تعديل الوضع'
    ],
    keyBenefitsEn: [
      'Reschedules distant 3-week biometric dates to the earliest 24–48 hour slot',
      'Located 1 minute away from Karama Central Post Office ICP Biometric Center',
      'Coordinates your KMFC Medical Test and ICP Biometrics on the same morning'
    ],
    keyBenefitsAr: [
      'تقديم مواعيد البصمة البعيدة إلى أقرب موعد متاح خلال 24 إلى 48 ساعة',
      'موقعنا ملاصق تماماً لمركز بصمة الهوية في بريد الكرامة المركزي (دقيقة واحدة سيراً)',
      'تنسيق متزامن لإجراء الفحص الطبي في مركزنا الطبي (KMFC) والبصمة في نفس الصباح'
    ],
    isPopular: true
  },
  {
    id: 'icp-smart-services-data-update',
    departmentId: 'icp',
    titleEn: 'ICP Smart Services: Mobile Update, Passport Link & Travel Report',
    titleAr: 'خدمات الهيئة الذكية: تحديث رقم الهاتف، نقل الجواز، وتقرير السفر',
    category: 'residency',
    shortDescEn: 'Update your registered mobile number in ICP (for UAE Pass OTPs), link a newly renewed passport to your Emirates ID, or issue an official Entry/Exit Travel History Report.',
    shortDescAr: 'تحديث رقم الهاتف المتحرك في نظام الهوية الاتحادية (لاستلام رموز UAE Pass)، ربط بيانات جواز السفر المجدد، وإصدار شهادة حركة الدخول والخروج الرسمية.',
    govFee: 150,
    serviceFee: 60,
    vipFastTrackFee: 100,
    processingTimeEn: '15 - 30 Minutes',
    processingTimeAr: '15 - 30 دقيقة',
    authorityEn: 'Federal Authority for Identity & Citizenship (ICP)',
    authorityAr: 'الهيئة الاتحادية للهوية والجنسية (ICP)',
    requiredDocumentsEn: [
      'Original valid Passport (and old passport copy if linking a newly renewed passport)',
      'Emirates ID number or Unified Identity Number (UID)',
      'Active UAE mobile number registered in the applicant’s name'
    ],
    requiredDocumentsAr: [
      'جواز السفر الأصلي الساري (وصورة الجواز القديم عند تحديث بيانات الجواز المجدد)',
      'رقم الهوية الإماراتية أو الرقم الموحد (UID)',
      'رقم هاتف إماراتي فعال مسجل باسم المتعامل'
    ],
    keyBenefitsEn: [
      'Simultaneously updates your mobile number across both Federal ICP and Dubai GDRFA systems',
      'Restores instant OTP access for UAE Pass, bank KYC updates, and digital government portals',
      'Issues official QR-stamped ICP Entry & Exit Movement Certificates for Golden Visa & tax residency'
    ],
    keyBenefitsAr: [
      'تحديث رقم الهاتف في كل من الهيئة الاتحادية (ICP) وإقامة دبي (GDRFA) في زيارة واحدة',
      'استعادة استلام رموز التحقق (OTP) لتطبيق UAE Pass وتحديثات البنوك فوراً',
      'إصدار كشف حركة الدخول والخروج الرسمي المعتمد لمعاملات الإقامة الذهبية والمحاكم والضرائب'
    ]
  },
  {
    id: 'icp-zajel-courier-delivery',
    departmentId: 'icp',
    titleEn: 'Zajel Emirates ID Tracking & Express Delivery',
    titleAr: 'تتبع وتنسيق التوصيل السريع لبطاقات الهوية عبر زاجل',
    category: 'residency',
    shortDescEn: 'Live ICP printing & Zajel Airway Bill (AWB) tracking, delivery address rerouting, mobile contact correction, and VIP doorstep courier dispatch for Emirates IDs.',
    shortDescAr: 'متابعة حالة طباعة الهوية ورقم بوليصة شحن زاجل (AWB)، تعديل عنوان التوصيل أو رقم الهاتف، وتنسيق التسليم السريع للبطاقات حتى باب المنزل أو المكتب.',
    govFee: 40,
    serviceFee: 40,
    vipFastTrackFee: 70,
    processingTimeEn: '24 Hours Delivery Window',
    processingTimeAr: 'توصيل خلال 24 ساعة من الشحن',
    authorityEn: 'ICP / Zajel Courier Services',
    authorityAr: 'الهيئة الاتحادية / شركة زاجل للتوصيل',
    requiredDocumentsEn: [
      '21-digit ICP Application Number (PRAN starting with 800...) or Zajel AWB number',
      'Updated Dubai delivery address (Building, street, office/apartment number, Makani)',
      'Original Passport or old Emirates ID to present upon courier handover'
    ],
    requiredDocumentsAr: [
      'رقم طلب الهوية المكون من 21 رقماً (يبدأ بـ 800...) أو رقم بوليصة زاجل',
      'عنوان التوصيل الدقيق في دبي (اسم المبنى، الشارع، رقم الشقة أو المكتب، ورقم مكاني)',
      'إبراز جواز السفر الأصلي أو الهوية السابقة لمندوب زاجل عند الاستلام'
    ],
    keyBenefitsEn: [
      'Rescues undelivered or returned Emirates IDs caused by old mobile numbers or wrong addresses',
      'Reroutes corporate staff Emirates IDs directly to your HR office or our Karama desk',
      'Confirmed morning or evening delivery slot coordination'
    ],
    keyBenefitsAr: [
      'حل مشكلة تأخر البطاقات أو إرجاعها بسبب أرقام الهواتف القديمة أو العناوين غير الواضحة',
      'تحويل مسار تسليم بطاقات موظفي الشركات مباشرة إلى مقر شركتك أو مكتبنا بالكرامة',
      'تأكيد موعد التوصيل الصباحي أو المسائي الملائم للمتعامل'
    ]
  },

  // ==========================================
  // 5. DUBAI MUNICIPALITY - 6 Dedicated Services
  // ==========================================
  {
    id: 'dm-ejari-registration',
    departmentId: 'municipality',
    titleEn: 'Ejari Tenancy Registration & Renewal (Residential & Commercial)',
    titleAr: 'تسجيل وتوثيق وتجديد عقود إيجاري (السكنية والتجارية)',
    category: 'corporate',
    shortDescEn: '15-minute official Dubai Land Department (DLD) / RERA Ejari tenancy registration for apartments, villas, offices, and shops—with automatic DEWA electricity & water activation.',
    shortDescAr: 'توثيق وتسجيل وتجديد عقود الإيجار السكنية والتجارية (إيجاري) المعتمدة من دائرة الأراضي والأملاك (DLD / RERA) خلال 15 دقيقة مع التفعيل التلقائي لحساب ديوا.',
    govFee: 175,
    serviceFee: 40,
    vipFastTrackFee: 100,
    processingTimeEn: '10 - 15 Minutes',
    processingTimeAr: '10 - 15 دقيقة',
    authorityEn: 'Dubai Land Department (DLD) / RERA (Ejari)',
    authorityAr: 'دائرة الأراضي والأملاك في دبي / ريرا (إيجاري)',
    requiredDocumentsEn: [
      'Original Unified Tenancy Contract signed by Landlord and Tenant',
      'Clear copy of the Property Title Deed (صك الملكية) and 9-digit DEWA Premise Number',
      'Tenant Passport, Visa & Emirates ID (plus DET Trade License / Initial Approval for Commercial Ejari)',
      'Landlord Passport / Emirates ID copy (and valid POA if signed by representative)'
    ],
    requiredDocumentsAr: [
      'عقد الإيجار الموحد موقعاً من المالك والمستأجر',
      'صورة شهادة ملكية العقار (Title Deed) ورقم حساب العقار في ديوا (9 أرقام)',
      'جواز وإقامة وهوية المستأجر (مع الرخصة التجارية أو الموافقة المبدئية لعقود إيجاري التجارية)',
      'صورة جواز أو هوية المالك (أو الوكالة القانونية المصدقة في حال توقيع وكيل)'
    ],
    keyBenefitsEn: [
      'Instant official watermarked Ejari Certificate accepted immediately at our Amer & DET desks',
      'Triggers automatic DEWA Welcome Pack SMS to activate electricity & water without visiting DEWA',
      'On-the-spot resolution of previous tenant Ejari blocks'
    ],
    keyBenefitsAr: [
      'إصدار فوري لشهادة إيجاري المعتمدة لاستخدامها مباشرة في قسم آمر (كفالة الأسرة) أو اقتصادية دبي (تجديد الرخصة)',
      'تفعيل آلي لحساب الكهرباء والمياه (ديوا) عبر رسالة نصية فورية دون الحاجة لزيارة ديوا',
      'معالجة وإلغاء أي عقد إيجاري سابق عالق على الوحدة العقارية في نفس اللحظة'
    ],
    isPopular: true
  },
  {
    id: 'dm-ejari-cancellation',
    departmentId: 'municipality',
    titleEn: 'Ejari Contract Cancellation & Premise Clearance',
    titleAr: 'إلغاء عقد إيجاري السكني والتجاري وتحرير العقار',
    category: 'corporate',
    shortDescEn: '10-minute formal cancellation of expired or terminated Ejari leases in the DLD registry to unblock the property for new tenants or close a commercial license address.',
    shortDescAr: 'إلغاء وشطب عقود إيجاري المنتهية أو المفسوخة من النظام العقاري خلال 10 دقائق لتحرير الوحدة العقارية للمستأجر الجديد أو إغلاق مقر الرخصة التجارية.',
    govFee: 40,
    serviceFee: 40,
    vipFastTrackFee: 75,
    processingTimeEn: '10 Minutes',
    processingTimeAr: '10 دقائق',
    authorityEn: 'Dubai Land Department / Dubai Municipality (Ejari)',
    authorityAr: 'دائرة الأراضي والأملاك / بلدية دبي (إيجاري)',
    requiredDocumentsEn: [
      'Copy of existing Ejari Certificate or Property Title Deed',
      'Emirates ID / Passport copy of Landlord (or authorized Property Manager) or Tenant',
      'Final DEWA bill or mutual termination NOC (if cancelling early before contract end date)'
    ],
    requiredDocumentsAr: [
      'نسخة شهادة عقد إيجاري المراد إلغاؤه أو صورة شهادة ملكية العقار',
      'صورة الهوية أو جواز السفر للمالك (أو الوكيل المفوض) أو المستأجر',
      'فاتورة المخالصة النهائية من ديوا أو عدم ممانعة الطرفين (في حال الفسخ المبكر قبل انتهاء المدة)'
    ],
    keyBenefitsEn: [
      'Immediately removes "Property Already Leased" system block so a new Ejari can be registered',
      'Essential prerequisite when relocating your company office or cancelling a DET Trade License',
      'Can be completed alongside your new Ejari registration in a single counter transaction'
    ],
    keyBenefitsAr: [
      'إزالة قيد "العقار مؤجر حالياً" فوراً لإتاحة تسجيل عقد المستأجر الجديد في نفس الزيارة',
      'إجراء أساسي عند نقل مقر الشركة لمكتب جديد أو شطب وإلغاء الرخصة التجارية',
      'إنجاز فوري خلال دقائق مع إصدار إشعار الإلغاء الرسمي الموثق'
    ]
  },
  {
    id: 'dm-product-registration-montaji',
    departmentId: 'municipality',
    titleEn: 'Montaji Product, Cosmetic & Supplement Registration',
    titleAr: 'تسجيل المنتجات الاستهلاكية ومستحضرات التجميل (نظام منتجي)',
    category: 'corporate',
    shortDescEn: 'Mandatory 5-year Dubai Municipality Montaji registration and Free Sale Certificates for cosmetics, perfumes, skincare, health supplements, and detergents.',
    shortDescAr: 'التسجيل الإلزامي للمنتجات الاستهلاكية في نظام "منتجي" ببلدية دبي (بصلاحية 5 سنوات) لمستحضرات التجميل، العطور، العناية بالبشرة، المكملات الصحية، والمنظفات.',
    govFee: 270,
    serviceFee: 350,
    vipFastTrackFee: 250,
    processingTimeEn: '2 - 5 Business Days',
    processingTimeAr: '2 - 5 أيام عمل',
    authorityEn: 'Dubai Municipality (Montaji — Health & Safety Dept)',
    authorityAr: 'بلدية دبي (نظام منتجي - إدارة الصحة والسلامة)',
    requiredDocumentsEn: [
      'Valid Dubai Trade License with Cosmetics, Perfumes, Supplements, or General Trading activity',
      'Certificate of Free Sale (CFS) and Good Manufacturing Practice (GMP / ISO 22716) certificate',
      'Laboratory Certificate of Analysis (COA) / Ingredients list with exact percentages',
      'High-resolution product packaging artwork with international barcode (GS1)'
    ],
    requiredDocumentsAr: [
      'رخصة تجارية سارية في دبي تتضمن نشاط تجارة التجميل أو العطور أو المكملات أو التجارة العامة',
      'شهادة البيع الحر (Free Sale) وشهادة ممارسات التصنيع الجيد (GMP) من بلد المنشأ',
      'تقرير التحليل المخبري للمكونات ونسب المواد الفعالة',
      'تصميم العبوة الخارجي والملصق التعريفي بدقة عالية مع الباركود الدولي'
    ],
    keyBenefitsEn: [
      'Guarantees smooth Dubai Customs port clearance with zero shipment detention',
      'Required by Dubai malls, pharmacies, Amazon UAE, and Noon for legal retail listing',
      'Pre-submission GSO 1943 ingredient and Arabic/English label audit by our DM specialists'
    ],
    keyBenefitsAr: [
      'ضمان الإفراج الجمركي الفوري عن الشحنات في منافذ وموانئ دبي دون احتجاز',
      'شرط إلزامي لعرض وبيع المنتجات في الصيدليات والمولات ومنصات أمازون ونون',
      'فحص فني مسبق للمكونات والملصقات وفق المواصفة الخليجية GSO 1943 لضمان القبول'
    ]
  },
  {
    id: 'dm-foodwatch-label-pest-control',
    departmentId: 'municipality',
    titleEn: 'Foodwatch Registration, FIRS Food Labels & Pest Control',
    titleAr: 'التسجيل في منصة فود ووتش، اعتماد البطاقة الغذائية، ومكافحة الآفات',
    category: 'corporate',
    shortDescEn: 'Dubai Municipality Food Safety compliance: Foodwatch digital onboarding for restaurants/cafés, FIRS imported food label approvals, and pest control & OHC linking.',
    shortDescAr: 'امتثال سلامة الغذاء ببلدية دبي: تفعيل منصة "فود ووتش" للمطاعم والمقاهي، اعتماد البطاقات الغذائية للأغذية المستوردة (FIRS)، وربط عقود المكافحة والبطاقات الصحية.',
    govFee: 320,
    serviceFee: 250,
    vipFastTrackFee: 200,
    processingTimeEn: '24 - 72 Hours',
    processingTimeAr: '24 - 72 ساعة',
    authorityEn: 'Dubai Municipality (Food Safety Department)',
    authorityAr: 'بلدية دبي (إدارة سلامة الغذاء)',
    requiredDocumentsEn: [
      'Valid DET Trade License (Restaurant, Café, Catering, or Foodstuff Trading) and Ejari',
      'Arabic/English food packaging artwork showing ingredients, nutrition facts & shelf-life (for FIRS)',
      'Approved DM Pest Control contract and staff Occupational Health Cards (OHC — issued on-site at KBC!)'
    ],
    requiredDocumentsAr: [
      'رخصة تجارية سارية (مطعم، مقهى، تموين، أو تجارة مواد غذائية) وعقد إيجاري',
      'تصميم الملصق الغذائي بالعربية والإنجليزية موضحاً به المكونات والجدول الغذائي (لنظام FIRS)',
      'عقد مكافحة حشرات معتمد وبطاقات الصحة المهنية للموظفين (تصدر فوراً في مركزنا الطبي!)'
    ],
    keyBenefitsEn: [
      'Complete Foodwatch setup + staff Food Handler OHC Medical Cards (AED 222.50) in one building',
      'Fast FIRS barcode & Arabic food label approval for port customs release',
      'Protects restaurants and food traders from municipal health inspection penalties'
    ],
    keyBenefitsAr: [
      'تفعيل منصة فود ووتش مع إصدار بطاقات الصحة المهنية لمتداولي الأغذية (222.50 درهم) في نفس المبنى',
      'اعتماد سريع للبطاقات الغذائية وتسجيل الباركود في نظام FIRS لتخليص الشحنات الغذائية',
      'حماية المطاعم والمقاهي من مخالفات التفتيش الصحي وضمان التصنيف الأخضر'
    ]
  },
  {
    id: 'dm-fitout-permits-site-plans',
    departmentId: 'municipality',
    titleEn: 'DM Interior Fit-Out Permits, Engineering & Site Plans',
    titleAr: 'تصاريح الديكور الداخلي، القواطع المكتبية، والخرائط المساحية',
    category: 'corporate',
    shortDescEn: 'Dubai Municipality BPS & Civil Defense permits for office partitions, shop/restaurant interior fit-out, clinic/salon layout approvals, and official Affection/Site Plans.',
    shortDescAr: 'استخراج تصاريح الديكور والتقسيمات المكتبية (Partitions) من بلدية دبي والدفاع المدني، اعتماد مخططات المطاعم والعيادات والصالونات، وإصدار الخرائط المساحية (كروكي).',
    govFee: 1100,
    serviceFee: 550,
    vipFastTrackFee: 350,
    processingTimeEn: '2 - 5 Business Days',
    processingTimeAr: '2 - 5 أيام عمل',
    authorityEn: 'Dubai Municipality (Building Permits Dept) & DCD',
    authorityAr: 'بلدية دبي (إدارة تراخيص البناء) والدفاع المدني',
    requiredDocumentsEn: [
      'Valid DET Trade License (or Initial Approval) and Commercial Ejari Certificate',
      'Existing vs. Proposed CAD layout drawings (Architectural + MEP / Fire Safety)',
      'Landlord / Building Management NOC and registered Fit-Out Contractor license'
    ],
    requiredDocumentsAr: [
      'الرخصة التجارية (أو الموافقة المبدئية) وشهادة إيجاري للعين المؤجرة',
      'المخططات الهندسية السابقة والمقترحة (المعمارية + التكييف والسلامة)',
      'شهادة عدم ممانعة من إدارة المبنى ورخصة شركة المقاولات أو الديكور المنفذة'
    ],
    keyBenefitsEn: [
      'Prevents AED 25,000 municipal stop-work fines during office or shop renovation',
      'Coordinates both Dubai Municipality Building Dept and Civil Defense fire safety clearances',
      'Fast issuance of updated DM Affection Plans / Site Plans (Krooki)'
    ],
    keyBenefitsAr: [
      'تفادي قرارات إيقاف العمل والغرامات البلدية (حتى 25,000 درهم) أثناء تجهيز المكاتب والمحلات',
      'تنسيق شامل لموافقات إدارة المباني ببلدية دبي وإدارة الدفاع المدني',
      'إصدار وتجديد سريع للخارطة المساحية ومخطط الموقع الرسمي (كروكي)'
    ]
  },
  {
    id: 'dm-signage-advertising-permits',
    departmentId: 'municipality',
    titleEn: 'Outdoor Signage, 3D Shop Signboards & Vehicle Branding',
    titleAr: 'تصاريح اللوحات التجارية الخارجية وشعارات المركبات الإعلانية',
    category: 'corporate',
    shortDescEn: 'Official Dubai Municipality, DET Mu\'lin, and RTA permits for exterior 3D storefront signboards, building facade signs, delivery van wrapping, and promotional banners.',
    shortDescAr: 'إصدار التصاريح الرسمية من بلدية دبي واقتصادية دبي وهيئة الطرق لتركيب اللوحات الخارجية للمحلات والشركات، وضع الشعارات على مركبات التوصيل، واللافتات الإعلانية.',
    govFee: 850,
    serviceFee: 300,
    vipFastTrackFee: 200,
    processingTimeEn: '24 - 48 Hours',
    processingTimeAr: '24 - 48 ساعة',
    authorityEn: 'Dubai Municipality / DET Mu\'lin / RTA',
    authorityAr: 'بلدية دبي / منصة مُعلن / هيئة الطرق والمواصلات',
    requiredDocumentsEn: [
      'Valid DET Trade License and Commercial Ejari Contract',
      'Dimensional signboard mockup on building facade (with minimum 50% Arabic trade name ratio)',
      'Vehicle Mulkiya registration card and 4-side livery design (for Vehicle Branding NOCs)'
    ],
    requiredDocumentsAr: [
      'الرخصة التجارية السارية وعقد إيجار المحل أو المكتب (إيجاري)',
      'تصميم اللوحة بأبعادها الدقيقة على واجهة المبنى (مع تخصيص 50% على الأقل للاسم العربي)',
      'ملكية المركبة وتصميم الملصق من الجهات الأربع (لتصاريح إعلانات المركبات التجارية)'
    ],
    keyBenefitsEn: [
      'Pre-audits your signboard design for strict 50% Arabic / right-side placement compliance',
      'Covers both storefront building signboards and RTA/DET delivery fleet vehicle wrapping',
      'Prevents municipal signboard removal orders and traffic inspection fines'
    ],
    keyBenefitsAr: [
      'تدقيق مسبق لتصميم اللوحة لضمان استيفاء شرط نسبة الـ 50% للغة العربية وموقعها الصحيح',
      'إنجاز تصاريح لوحات المحلات وتصاريح ملصقات أساطيل مركبات التوصيل والشركات',
      'حماية المنشأة من قرارات إزالة اللوحات ومخالفات التفتيش البلدي والمروري'
    ]
  },

  // ==========================================
  // 6. OHC (Occupational) - Occupational Health Cards
  // ==========================================
  {
    id: 'ohc-food-handlers-card',
    departmentId: 'ohc',
    titleEn: 'Food Handlers & Hospitality Occupational Health Card',
    titleAr: 'بطاقة الصحة المهنية لمتداولي الأغذية والمطاعم',
    category: 'medical',
    shortDescEn: 'Mandatory Dubai Municipality Occupational Health Card for chefs, waiters, kitchen stewards, bakers, and food delivery staff. Official tariff: AED 170 Govt + AED 52.50 Typing = AED 222.50 total.',
    shortDescAr: 'بطاقة الصحة المهنية الإلزامية من بلدية دبي للطهاة ومقدمي الأغذية وعمال المطابخ وسائقي التوصيل. التعرفة الرسمية: 170 درهماً حكومياً + 52.50 درهم طباعة = 222.50 درهماً.',
    govFee: 170,
    serviceFee: 52.5,
    vipFastTrackFee: 100,
    processingTimeEn: '24 - 48 Hours',
    processingTimeAr: '24 - 48 ساعة',
    authorityEn: 'Dubai Municipality (Food Safety Dept) & Dubai Health',
    authorityAr: 'بلدية دبي (إدارة سلامة الغذاء) وصحة دبي',
    requiredDocumentsEn: [
      'Original passport copy and valid Dubai residence visa',
      'Valid Emirates ID card copy',
      'Personal digital photograph with white background',
      'DED foodstuff trade license copy and Foodwatch account linking'
    ],
    requiredDocumentsAr: [
      'نسخة جواز السفر وتأشيرة الإقامة سارية المفعول بدبي',
      'نسخة بطاقة الهوية الإماراتية للموظف',
      'صورة شخصية رقمية حديثة بخلفية بيضاء',
      'نسخة الرخصة التجارية لنشاط الأغذية والربط بحساب فود ووتش'
    ],
    keyBenefitsEn: [
      'Official statutory tariff: AED 222.50 with direct zero-markup transparent billing',
      'Avoids strict AED 5,000+ individual municipal health inspector penalties',
      'Direct computerized synchronization into Dubai Municipality Foodwatch database'
    ],
    keyBenefitsAr: [
      'التعرفة الرسمية المعتمدة: 222.50 درهم بشفافية تامة دون أي زيادات خفية',
      'تفادي غرامات التفتيش البلدي الفورية الصارمة التي تبدأ من 5,000 درهم',
      'ربط إلكتروني فوري ومباشر مع نظام ومنصة "فود ووتش" لسلامة الغذاء'
    ],
    isPopular: true
  },
  {
    id: 'ohc-salon-beauty-spa-card',
    departmentId: 'ohc',
    titleEn: 'Barbers, Beauticians, Salons & Spa Staff Health Card',
    titleAr: 'بطاقة الصحة المهنية لصالونات الحلاقة والتجميل ومراكز السبا',
    category: 'medical',
    shortDescEn: 'Statutory municipal medical clearance and serological viral screening for gents barbers, beauticians, nail technicians, and massage therapists. Official tariff: AED 540 Govt + AED 52.50 Typing = AED 592.50.',
    shortDescAr: 'الفحص الطبي البلدي الإلزامي والتحاليل الفيروسية لصالونات الحلاقة الرجالية، خبيرات التجميل، أخصائيات الأظافر، والتدليك. التعرفة الرسمية: 540 درهماً حكومياً + 52.50 درهم طباعة = 592.50 درهماً.',
    govFee: 540,
    serviceFee: 52.5,
    vipFastTrackFee: 120,
    processingTimeEn: '24 - 48 Hours',
    processingTimeAr: '24 - 48 ساعة',
    authorityEn: 'Dubai Municipality (Public Health) & Dubai Health',
    authorityAr: 'بلدية دبي (الصحة العامة) وصحة دبي',
    requiredDocumentsEn: [
      'Employee original passport copy, visa, and Emirates ID',
      'Personal photograph with white background',
      'Salon or Spa DED trade license copy with relevant designation'
    ],
    requiredDocumentsAr: [
      'نسخة جواز السفر والتأشيرة والهوية الإماراتية للموظف',
      'صورة شخصية حديثة بخلفية بيضاء',
      'نسخة الرخصة التجارية للصالون أو السبا مع مطابقة المسمى المهني'
    ],
    keyBenefitsEn: [
      'Comprehensive viral serology panel (Hepatitis B, Hepatitis C, HIV)',
      'Clinical dermatologist physical checkup ensuring customer safety',
      'Official statutory tariff: AED 592.50 inclusive of official government vouchers'
    ],
    keyBenefitsAr: [
      'فحص مناعي فيروسي شامل يشمل التهاب الكبد B وC ونقص المناعة',
      'كشف سريري جلدي من قبل طبيب مرخص لضمان سلامة المتعاملين',
      'التعرفة الرسمية المعتمدة: 592.50 درهم شاملة إيصال السداد الحكومي'
    ]
  },
  {
    id: 'ohc-construction-rta-drivers-card',
    departmentId: 'ohc',
    titleEn: 'Construction Workers & RTA Professional Drivers Health Card',
    titleAr: 'بطاقة الصحة المهنية لعمال الإنشاءات وسائقي هيئة الطرق',
    category: 'medical',
    shortDescEn: 'Occupational health certification for industrial construction workers (AED 200 Govt + AED 52.50 Typing = AED 252.50) and RTA public/commercial chauffeurs (AED 170 Govt + AED 52.50 Typing = AED 222.50).',
    shortDescAr: 'الفحص وإصدار بطاقات الصحة المهنية لعمال قطاع الإنشاءات والمقاولات (252.50 درهم) وسائقي النقل التجاري وهيئة الطرق (222.50 درهم) للتحقق من اللياقة المهنية.',
    govFee: 200,
    serviceFee: 52.5,
    vipFastTrackFee: 100,
    processingTimeEn: '24 - 48 Hours',
    processingTimeAr: '24 - 48 ساعة',
    authorityEn: 'Dubai Municipality & RTA Licensing Agency',
    authorityAr: 'بلدية دبي ومؤسسة الترخيص بهيئة الطرق',
    requiredDocumentsEn: [
      'Employee passport, valid Dubai residence visa, and Emirates ID',
      'Corporate construction or transport DED commercial trade license',
      'Clinical examination report from accredited Karama testing center'
    ],
    requiredDocumentsAr: [
      'جواز السفر وتأشيرة الإقامة سارية المفعول والهوية الإماراتية للموظف',
      'الرخصة التجارية لشركة المقاولات أو النقل الصادرة من اقتصادية دبي',
      'تقرير الفحص السريري المعتمد من عيادات مركز الكرامة'
    ],
    keyBenefitsEn: [
      'Exact statutory pricing: Construction AED 252.50 | RTA Chauffeurs AED 222.50',
      'Occupational cardiopulmonary and vision safety assessment',
      'Bulk processing rates and on-site testing for construction contractors'
    ],
    keyBenefitsAr: [
      'تسعير رسمي معتمد: قطاع المقاولات 252.50 درهم | سائقو هيئة الطرق 222.50 درهم',
      'تقييم سريري شامل للياقة البدنية وصحة القلب والجهاز التنفسي والنظر',
      'باقات خصم وفحوصات موقعية لشركات المقاولات الكبرى'
    ]
  },
  {
    id: 'ohc-healthcare-dha-doctor-license-card',
    departmentId: 'ohc',
    titleEn: 'Healthcare Staff & DHA / Diwan Doctor License Health Card',
    titleAr: 'بطاقة الصحة المهنية للكوادر الصحية وتراخيص أطباء هيئة الصحة والديوان',
    category: 'medical',
    shortDescEn: 'Highest statutory tier medical clearance for hospital personnel (AED 570 Govt + AED 52.50 Typing = AED 622.50) and licensed DHA/Diwan doctors & consultants (AED 770 Govt + AED 52.50 Typing = AED 822.50).',
    shortDescAr: 'الفحص الطبي والترخيص المهني المعتمد لكوادر المستشفيات والتمريض (622.50 درهم) وتراخيص أطباء هيئة الصحة وموظفي الديوان (822.50 درهم).',
    govFee: 770,
    serviceFee: 52.5,
    vipFastTrackFee: 150,
    processingTimeEn: '24 - 48 Hours',
    processingTimeAr: '24 - 48 ساعة',
    authorityEn: 'Dubai Health Authority (DHA) & Dubai Municipality',
    authorityAr: 'هيئة الصحة بدبي وبلدية دبي',
    requiredDocumentsEn: [
      'Original passport, visa copy, and Emirates ID card',
      'DHA Professional License copy or medical facility appointment letter',
      'Vaccination records and antibody serology test panels'
    ],
    requiredDocumentsAr: [
      'جواز السفر وتأشيرة الإقامة وبطاقة الهوية الإماراتية الأصلية',
      'نسخة الترخيص المهني لهيئة الصحة بدبي أو خطاب تعيين المنشأة الطبية',
      'سجل التطعيمات وفحوصات الأجسام المضادة للأمراض السارية'
    ],
    keyBenefitsEn: [
      'Official statutory tariffs: Healthcare AED 622.50 | DHA Doctor License AED 822.50',
      'Immediate synchronization into Dubai Health Authority licensure system',
      'High-complexity laboratory immunological screening conducted in-house'
    ],
    keyBenefitsAr: [
      'التعرفة الرسمية المعتمدة: الرعاية الصحية 622.50 درهم | تراخيص الأطباء 822.50 درهم',
      'ربط فوري ومباشر مع نظام التراخيص المهنية لهيئة الصحة بدبي',
      'فحوصات مناعية مخبرية عالية الدقة تجرى في مختبرات مركز الكرامة'
    ]
  },

  // ==========================================
  // 7. ATLAS ATTESTATION - Document Legalization
  // ==========================================
  {
    id: 'atlas-mofa-attestation',
    departmentId: 'attestation',
    titleEn: 'UAE Ministry of Foreign Affairs (MOFA) & MOJ Attestation',
    titleAr: 'تصديق وزارة الخارجية الإماراتية (MOFA) ووزارة العدل',
    category: 'legal',
    shortDescEn: 'Official government certification stamps by UAE MOFA: Personal Documents AED 200 | Commercial Documents AED 1,200 | Ministry of Justice AED 110, with free insured doorstep courier.',
    shortDescAr: 'التصديق الرسمي المعتمد من وزارة الخارجية: المستندات الشخصية 200 درهم | المستندات التجارية 1,200 درهم | وزارة العدل 110 دراهم، مع خدمة التوصيل المجاني.',
    govFee: 200,
    serviceFee: 110,
    vipFastTrackFee: 150,
    processingTimeEn: '24 - 48 Hours',
    processingTimeAr: '24 - 48 ساعة',
    authorityEn: 'UAE Ministry of Foreign Affairs (MOFA) & Ministry of Justice',
    authorityAr: 'وزارة الخارجية والتعاون الدولي ووزارة العدل',
    requiredDocumentsEn: [
      'Original document requiring attestation (degree, birth, marriage, or commercial deed)',
      'Document holder passport copy or Emirates ID copy',
      'Certified MOJ legal translation if the certificate is in a foreign language'
    ],
    requiredDocumentsAr: [
      'الوثيقة الأصلية المراد تصديقها (شهادة دراسية، ميلاد، زواج، أو وكالة تجارية)',
      'صورة جواز السفر أو بطاقة الهوية الإماراتية لصاحب المستند',
      'ترجمة قانونية معتمدة من وزارة العدل في حال كان المستند بلغة أجنبية'
    ],
    keyBenefitsEn: [
      'Official government tariffs: Personal AED 200 | Commercial AED 1,200 with official MOFA QR stamp',
      '100% legal validity across all UAE ministries, courts, GDRFA Amer, and banks',
      'Complimentary insured doorstep collection and return delivery anywhere in Dubai'
    ],
    keyBenefitsAr: [
      'الرسوم الحكومية الرسمية: 200 درهم للشخصي | 1,200 درهم للتجاري بختم QR الرسمي',
      'حجية قانونية كاملة بنسبة 100% لدى كافة الوزارات والمحاكم وإقامة دبي والبنوك',
      'خدمة استلام وتوصيل مجانية ومؤمنة من وإلى باب منزلك أو مكتبك في دبي'
    ],
    isPopular: true
  },
  {
    id: 'atlas-embassy-consulate-legalization',
    departmentId: 'attestation',
    titleEn: 'Global Embassy & Consulate Legalization (119+ Countries)',
    titleAr: 'تصديق سفارات وقنصليات الإمارات حول العالم (119+ دولة)',
    category: 'legal',
    shortDescEn: 'End-to-end diplomatic authentication across 119+ foreign countries (UK, USA, India, Canada, EU, Philippines, Pakistan, Egypt) through origin Foreign Ministries, UAE Embassies, and MOFA.',
    shortDescAr: 'سلسلة تصديقات دبلوماسية متكاملة تغطي أكثر من 119 دولة (بريطانيا، أمريكا، الهند، كندا، أوروبا، الفلبين، مصر) عبر وزارات خارجية بلد المنشأ وسفارة الإمارات والخارجية.',
    govFee: 750,
    serviceFee: 350,
    vipFastTrackFee: 250,
    processingTimeEn: '4 - 8 Days',
    processingTimeAr: '4 - 8 أيام',
    authorityEn: 'UAE Embassies & Consulates Worldwide / MOFA',
    authorityAr: 'سفارات وقنصليات دولة الإمارات حول العالم ووزارة الخارجية',
    requiredDocumentsEn: [
      'Original educational, birth, marriage, or corporate certificate',
      'Passport copy of document owner',
      'Notary public and local department verification from issuing country'
    ],
    requiredDocumentsAr: [
      'المستند الأصلي (شهادة دراسية، ميلاد، زواج، أو مستند تجاري)',
      'صورة جواز سفر صاحب الوثيقة',
      'توثيق الكاتب العدل والجهات المحلية في الدولة المصدرة'
    ],
    keyBenefitsEn: [
      'Global network of diplomatic courier liaison offices in major world capitals',
      'Complete authentication from issuing origin country to UAE MOFA in Dubai without traveling',
      'Tamper-proof insured transit with international real-time tracking'
    ],
    keyBenefitsAr: [
      'شبكة مكاتب تنسيق دبلوماسية معتمدة في أهم العواصم العالمية',
      'إنجاز سلسلة التصديق كاملة من بلد المنشأ حتى خارجية دبي دون حاجتك للسفر',
      'شحن دولي مؤمن في حقائب أمنية محكمة مع تتبع لحظي للشحنة'
    ]
  },
  {
    id: 'atlas-apostille-global-certification',
    departmentId: 'attestation',
    titleEn: 'Hague Convention Apostille Global Certification',
    titleAr: 'شهادة الأبوستيل الدولية (اتفاقية لاهاي للتصديقات)',
    category: 'legal',
    shortDescEn: 'Official Hague Apostille certifications for personal and corporate instruments for use across 125+ member countries (UK, USA, EU, Australia, India, Saudi Arabia) and UAE legalization.',
    shortDescAr: 'استخراج شهادات الأبوستيل الدولية المعتمدة وفق اتفاقية لاهاي لتوثيق الشهادات والوثائق لاستخدامها في أكثر من 125 دولة، مع استكمال تصديق سفارة وخارجية الإمارات.',
    govFee: 650,
    serviceFee: 300,
    vipFastTrackFee: 200,
    processingTimeEn: '3 - 6 Days',
    processingTimeAr: '3 - 6 أيام',
    authorityEn: 'Hague Convention Competent Authorities & UAE MOFA',
    authorityAr: 'السلطات المختصة باتفاقية لاهاي ووزارة الخارجية الإماراتية',
    requiredDocumentsEn: [
      'Original public record, university diploma, vital certificate, or corporate charter',
      'Clear passport copy of the applicant',
      'Prior solicitor or state notary certification if required by origin jurisdiction'
    ],
    requiredDocumentsAr: [
      'الوثيقة الرسمية الأصلية (شهادة جامعية، عقد زواج، سجل تجاري، أو وكالة)',
      'صورة واضحة من جواز سفر مقدم الطلب',
      'تصديق المحامي أو كاتب العدل المحلي إذا تطلبت دولة الإصدار ذلك'
    ],
    keyBenefitsEn: [
      'Legally valid across all 125+ Hague Apostille Convention signatory nations',
      'Seamless multi-stage linkage: Apostille + UAE Embassy + UAE MOFA under one roof',
      'Fast-track options for urgent international corporate transactions and migrations'
    ],
    keyBenefitsAr: [
      'حجية قانونية معتمدة في كافة الدول الموقعة على اتفاقية لاهاي (125+ دولة)',
      'ربط متكامل: شهادة الأبوستيل + ختم سفارة الإمارات + ختم الخارجية بدبي في معاملة واحدة',
      'مسارات سريعة لخدمة الصفقات التجارية الدولية العاجلة وملفات الهجرة'
    ]
  },
  {
    id: 'atlas-degree-education-equivalency',
    departmentId: 'attestation',
    titleEn: 'University Degree Attestation & MoE Equivalency',
    titleAr: 'تصديق الشهادات الجامعية ومعادلتها بوزارة التربية والتعليم',
    category: 'legal',
    shortDescEn: 'Diplomatic attestation and official UAE Ministry of Education (MoE) Certificate of Equivalency issuance for Bachelor’s, Master’s, and PhD degrees required for 10-Year Golden Visas and MoHRE work permits.',
    shortDescAr: 'التصديق الدبلوماسي الكامل وإصدار شهادة المعادلة الرسمية من وزارة التربية والتعليم الإماراتية لشهادات البكالوريوس والماجستير والدكتوراه للإقامة الذهبية وتصاريح العمل.',
    govFee: 450,
    serviceFee: 250,
    vipFastTrackFee: 180,
    processingTimeEn: '2 - 5 Days',
    processingTimeAr: '2 - 5 أيام',
    authorityEn: 'UAE Ministry of Foreign Affairs (MOFA) & Ministry of Education (MoE)',
    authorityAr: 'وزارة الخارجية والتعاون الدولي ووزارة التربية والتعليم',
    requiredDocumentsEn: [
      'Original university degree certificate and official academic transcripts',
      'Passport copy and valid UAE residence visa or entry permit',
      'DataFlow / primary source verification report (coordinated in-house)'
    ],
    requiredDocumentsAr: [
      'الشهادة الجامعية الأصلية مع كشف الدرجات الأكاديمي الرسمي',
      'صورة جواز السفر وتأشيرة الإقامة أو إذن الدخول بالدولة',
      'تقرير التحقق من المصدر (DataFlow) المنسق مباشرة داخل مركزنا'
    ],
    keyBenefitsEn: [
      'Mandatory prerequisite for the 10-Year UAE Skilled Professional Golden Visa',
      'Required for MoHRE Skill Level 1–3 executive work permits and teacher licensing',
      'Direct coordination between our Atlas desk and our in-house Amer Golden Visa counters'
    ],
    keyBenefitsAr: [
      'متطلب إلزامي ورئيسي للحصول على الإقامة الذهبية للمهنيين لمدة 10 سنوات',
      'إلزامي لتصاريح العمل المهارية (المستويات 1-3) وتراخيص هيئة المعرفة والأطباء',
      'تنسيق مباشر وسلس بين مكتب أطلس للتصديق وكاونتر آمر للإقامة الذهبية بنفس المركز'
    ]
  },
  {
    id: 'atlas-marriage-birth-personal-attestation',
    departmentId: 'attestation',
    titleEn: 'Marriage & Birth Certificate Legalization (Family Visa)',
    titleAr: 'تصديق عقود الزواج وشهادات الميلاد (تأشيرة إقامة الأسرة)',
    category: 'legal',
    shortDescEn: 'Official legalization of foreign and UAE-issued marriage contracts, birth certificates, and divorce decrees for family residency visa sponsorship at GDRFA Amer Centers.',
    shortDescAr: 'التصديق القانوني الرسمي لعقود الزواج وشهادات الميلاد الأجنبية والمحلية وشهادات الطلاق لكفالة إقامة الزوجة والأبناء في مراكز آمر (إقامة دبي).',
    govFee: 200,
    serviceFee: 150,
    vipFastTrackFee: 100,
    processingTimeEn: '24 - 48 Hours',
    processingTimeAr: '24 - 48 ساعة',
    authorityEn: 'UAE Ministry of Foreign Affairs (MOFA) & GDRFA Amer',
    authorityAr: 'وزارة الخارجية والتعاون الدولي وإدارة الإقامة (آمر)',
    requiredDocumentsEn: [
      'Original marriage or birth certificate with issuing country seals',
      'Sponsor and family member passport copies and Emirates IDs',
      'Certified Arabic legal translation (AED 38/page completed on-site)'
    ],
    requiredDocumentsAr: [
      'أصل عقد الزواج أو شهادة الميلاد ممهورة بأختام بلد الإصدار',
      'صور جوازات السفر والهويات الإماراتية للكفيل وأفراد الأسرة',
      'ترجمة قانونية محلفة إلى العربية (38 درهماً/صفحة تنجز بالمركز)'
    ],
    keyBenefitsEn: [
      'Essential legal foundation for wife, husband, newborn, and child residency sponsorship',
      'Official MOFA AED 200 personal tariff with certified QR verification code',
      'Step-by-step handover to our adjacent Amer desk for same-day family visa issuance'
    ],
    keyBenefitsAr: [
      'الأساس القانوني الإلزامي لمعاملات كفالة وإقامة الزوجة والزوج والمواليد والأبناء',
      'الرسم الحكومي الرسمي للخارجية 200 درهم مع رمز الاستجابة السريعة QR',
      'تسليم مباشر لكاونتر آمر المجاور بمركزنا لإصدار تأشيرة الأسرة في نفس اليوم'
    ]
  },
  {
    id: 'atlas-police-clearance-good-conduct',
    departmentId: 'attestation',
    titleEn: 'Dubai Police Clearance Certificate & Certified True Copy',
    titleAr: 'شهادة بحث الحالة الجنائية (شرطة دبي) وصورة طبق الأصل',
    category: 'legal',
    shortDescEn: 'Issuance of official Dubai Police and MOI Good Conduct Certificates for international immigration (Canada, Australia, UK, USA) and lawyer-certified True Copy document seals.',
    shortDescAr: 'إصدار شهادات بحث الحالة الجنائية (حسن السيرة والسلوك) من شرطة دبي ووزارة الداخلية لبرامج الهجرة الدولية، واعتماد "صورة طبق الأصل" الموثقة قانونياً.',
    govFee: 250,
    serviceFee: 150,
    vipFastTrackFee: 100,
    processingTimeEn: 'Same Day / 24 Hours',
    processingTimeAr: 'نفس اليوم / 24 ساعة',
    authorityEn: 'Dubai Police GHQ & UAE Ministry of Interior (MOI)',
    authorityAr: 'القيادة العامة لشرطة دبي ووزارة الداخلية',
    requiredDocumentsEn: [
      'Valid Emirates ID card or historical UAE residence visa details with UID',
      'Passport copy of applicant with clear biometric profile',
      'Attested fingerprint card (for former residents currently residing abroad)'
    ],
    requiredDocumentsAr: [
      'بطاقة الهوية الإماراتية السارية أو بيانات الإقامة السابقة والرقم الموحد (UID)',
      'صورة جواز السفر لمقدم الطلب موضحاً بها البيانات الشخصية',
      'صحيفة بصمات عشرية مصدقة (للمقيمين السابقين المتواجدين خارج الدولة)'
    ],
    keyBenefitsEn: [
      'Mandatory document for Canada PR, Australia PR, UK, US, and European immigration',
      'Issued bilingually in Arabic and English with verifiable digital security barcode',
      'Includes optional lawyer-certified True Copy stamping for passports and utility bills'
    ],
    keyBenefitsAr: [
      'وثيقة إلزامية لمعاملات الهجرة والإقامة الدائمة لكندا وأستراليا وبريطانيا وأمريكا وأوروبا',
      'إصدار فوري ثنائي اللغة (عربي وإنجليزي) مزود بباركود أمني للتحقق الفوري',
      'إمكانية توثيق صورة طبق الأصل المعتمدة لجوازات السفر والوثائق في نفس الزيارة'
    ]
  },

  // ==========================================
  // 8. NOTARY & COURTS - Legal Documentation
  // ==========================================
  {
    id: 'notary-power-of-attorney-poa',
    departmentId: 'notary',
    titleEn: 'Power of Attorney (POA) Drafting & Dubai Courts E-Notarization',
    titleAr: 'صياغة وتوثيق الوكالات العامة والخاصة (الكاتب العدل بمحاكم دبي)',
    category: 'legal',
    shortDescEn: 'Bilingual legal drafting and same-day video-call e-notarization of General and Special Powers of Attorney for property conveyancing (DLD), vehicle sales (RTA), corporate management, and court litigation.',
    shortDescAr: 'الصياغة القانونية المعتمدة والتوثيق الإلكتروني الفوري لوكالات بيع وإدارة العقارات (الأراضي والأملاك)، بيع المركبات (هيئة الطرق)، إدارة الشركات، والتقاضي.',
    govFee: 550,
    serviceFee: 300,
    vipFastTrackFee: 200,
    processingTimeEn: 'Same Day / 2 Hours',
    processingTimeAr: 'نفس اليوم / ساعتان',
    authorityEn: 'Dubai Courts & Notary Public',
    authorityAr: 'محاكم دبي والكاتب العدل',
    requiredDocumentsEn: [
      'Principal and attorney Emirates ID cards and passport copies',
      'Title Deed (for real estate POAs) or Mulkiya (for vehicle sales POAs)',
      'Active UAE Pass digital identity for remote video-call notarization'
    ],
    requiredDocumentsAr: [
      'الهويات الإماراتية وجوازات السفر للموكل والوكيل',
      'سند ملكية العقار (للوكالات العقارية) أو ملكية المركبة (لوكالات السيارات)',
      'حساب الهوية الرقمية (UAE Pass) للتوثيق عن بعد عبر الاتصال المرئي'
    ],
    keyBenefitsEn: [
      'Same-day remote video-notary session scheduled directly from our center',
      'Clause-verified bilingual Arabic-English text accepted by DLD, RTA, and banks',
      'Official QR-verified digital Notary Public Deed delivered instantly to your phone'
    ],
    keyBenefitsAr: [
      'جلسة توثيق مرئي معتمدة مع كاتب عدل محاكم دبي في نفس اليوم من داخل مركزنا',
      'صياغة ثنائية اللغة مستوفية لكافة الشروط ومقبولة لدى أراضي دبي وهيئة الطرق والبنوك',
      'سند توثيق رسمي رقمي مزود برمز QR معتمد يصل فوراً لهاتفك الذكي'
    ],
    isPopular: true
  },
  {
    id: 'notary-corporate-moa-addendum',
    departmentId: 'notary',
    titleEn: 'Corporate MOA, Share Transfer & Board Resolution Notarization',
    titleAr: 'توثيق عقود تأسيس الشركات، ملاحق بيع الحصص، وقرارات الشركاء',
    category: 'legal',
    shortDescEn: 'Legal drafting and official notarization of LLC Memorandums of Association (MOA), Share Sale & Transfer Addendums, Manager Appointment Resolutions, and 100% Foreign Ownership LSA cancellations.',
    shortDescAr: 'صياغة وتوثيق عقود تأسيس الشركات (MOA)، ملاحق بيع والتنازل عن الحصص، قرارات تعيين وعزل المديرين، وملاحق إلغاء وكيل الخدمات للتحول للتملك الأجنبي 100%.',
    govFee: 600,
    serviceFee: 400,
    vipFastTrackFee: 250,
    processingTimeEn: 'Same Day / 3 Hours',
    processingTimeAr: 'نفس اليوم / 3 ساعات',
    authorityEn: 'Dubai Courts Notary Public & DET Dubai',
    authorityAr: 'الكاتب العدل بمحاكم دبي واقتصادية دبي',
    requiredDocumentsEn: [
      'Existing DET Trade License, Commercial Register, and original MOA',
      'Buyer and seller passport copies, Emirates IDs, or corporate powers of attorney',
      'Draft of proposed share transfer or board resolution for notarization'
    ],
    requiredDocumentsAr: [
      'الرخصة التجارية لاقتصادية دبي والسجل التجاري وعقد التأسيس القائم',
      'جوازات السفر والهويات الإماراتية للشركاء البائعين والمشترين أو وكالاتهم',
      'مسودة ملحق التعديل أو قرار الشركاء المراد توثيقه'
    ],
    keyBenefitsEn: [
      '100% compliant with UAE Federal Decree-Law No. 32 of 2021 on Commercial Companies',
      'Immediate seamless update of your DET Trade License at our adjacent DET desk',
      'Bilingual Arabic-English corporate contract drafting by licensed legal consultants'
    ],
    keyBenefitsAr: [
      'امتثال كامل للمرسوم بقانون اتحادي رقم 32 لسنة 2021 بشأن الشركات التجارية',
      'تحديث فوري ومباشر للرخصة التجارية والسجل التجاري لدى كاونتر اقتصادية دبي بمركزنا',
      'صياغة عقود تجارية ومؤسسية احترافية ثنائية اللغة من مستشارين قانونيين مرخصين'
    ]
  },
  {
    id: 'notary-legal-declarations-affidavits',
    departmentId: 'notary',
    titleEn: 'Statutory Declarations, Sworn Affidavits & Legal Notices',
    titleAr: 'الإقرارات العدلية، التعهدات القانونية، والإنذارات العدلية',
    category: 'legal',
    shortDescEn: 'Bilingual drafting and notarization of Sponsor Dependency Undertakings (for Amer parent visas), Child Travel NOCs, Financial Support Affidavits, and formal Court Bailiff Legal Notices (Inzar Adli).',
    shortDescAr: 'صياغة وتوثيق تعهدات وإقرارات الإعالة (لكفالة الوالدين لدى آمر)، عدم ممانعة سفر الأبناء، إقرارات الملاءة المالية، وتوجيه الإنذارات العدلية الرسمية عبر المحكمة.',
    govFee: 450,
    serviceFee: 250,
    vipFastTrackFee: 150,
    processingTimeEn: 'Same Day / 2 Hours',
    processingTimeAr: 'نفس اليوم / ساعتان',
    authorityEn: 'Dubai Courts Notary Public',
    authorityAr: 'الكاتب العدل بمحاكم دبي',
    requiredDocumentsEn: [
      'Declarant Emirates ID and passport copy',
      'Proof of relationship, tenancy contract, or title deed matching the declaration',
      'Supporting evidence for formal Legal Notices (contracts, unpaid invoices)'
    ],
    requiredDocumentsAr: [
      'بطاقة الهوية الإماراتية وجواز سفر المقر أو الموجه للإنذار',
      'إثبات صلة القرابة، عقد الإيجار، أو سند الملكية المطابق لموضوع الإقرار',
      'المستندات المؤيدة للإنذار العدلي (العقود، الشيكات، أو الفواتير غير المسددة)'
    ],
    keyBenefitsEn: [
      'Directly accepted by GDRFA Amer for parent, stepchild, and family sponsorship files',
      'Formal legal notice served through official Dubai Courts process servers to preserve claims',
      'Executed remotely via UAE Pass or through our on-site video-notary terminal'
    ],
    keyBenefitsAr: [
      'مقبولة فوراً لدى مراكز آمر لإجراءات كفالة الوالدين وأبناء الزوجة والحالات الإنسانية',
      'إعلان رسمي للإنذارات العدلية عبر محضرين ومُعلني محاكم دبي لإثبات الحقوق',
      'توثيق إلكتروني فوري عبر الهوية الرقمية أو منصة الاتصال المرئي بمركزنا'
    ]
  },
  {
    id: 'courts-labour-civil-commercial-suits',
    departmentId: 'notary',
    titleEn: 'Dubai Courts Labour, Civil, Commercial & Rental Lawsuits',
    titleAr: 'قيد الدعاوى العمالية والمدنية والتجارية ومنازعات الإيجار بمحاكم دبي',
    category: 'legal',
    shortDescEn: 'Case statement of claim drafting, sworn MOJ translation of exhibits, and electronic registration of MoHRE-referred labour claims, commercial debt recovery, and Rental Dispute Center (RDC) eviction suits.',
    shortDescAr: 'صياغة لوائح الدعاوى، الترجمة القانونية للمستندات، والقيد الإلكتروني للدعاوى العمالية المحالة من وزارة العمل، والمطالبات التجارية، ومنازعات الإيجار (RDC).',
    govFee: 1200,
    serviceFee: 650,
    vipFastTrackFee: 350,
    processingTimeEn: '2 - 4 Days',
    processingTimeAr: '2 - 4 أيام',
    authorityEn: 'Dubai Courts & Rental Dispute Center (RDC)',
    authorityAr: 'محاكم دبي ومركز فض المنازعات الإيجارية',
    requiredDocumentsEn: [
      'Official dispute referral letter from MoHRE or relevant regulatory committee',
      'Contracts, employment records, invoices, bank transfers, and email exhibits',
      'Emirates ID and Power of Attorney (if filing through an authorized legal agent)'
    ],
    requiredDocumentsAr: [
      'كتاب إحالة النزاع الرسمي من وزارة الموارد البشرية أو اللجان المختصة',
      'العقود، كشوف الحسابات البنكية، الفواتير، ومراسلات الواتساب والبريد المؤيدة للدعوى',
      'بطاقة الهوية والوكالة القانونية (في حال التقديم عبر وكيل قانوني)'
    ],
    keyBenefitsEn: [
      'Statutory court fee exemption assistance for labour claims under AED 100,000',
      'Integrated in-house Ministry of Justice sworn legal translation (AED 38/page)',
      'Instant electronic summons generation and remote court hearing link delivery'
    ],
    keyBenefitsAr: [
      'تطبيق الإعفاء القانوني من الرسوم القضائية للدعاوى العمالية دون 100,000 درهم',
      'ترجمة قانونية محلفة لحوافظ المستندات معتمدة من وزارة العدل داخل المركز (38 درهماً)',
      'إصدار الإعلانات القضائية الرقمية فوراً وتسليم روابط حضور الجلسات عن بُعد'
    ]
  },
  {
    id: 'notary-non-muslim-wills-probate',
    departmentId: 'notary',
    titleEn: 'Non-Muslim Family Wills, Guardianship & Probate Registration',
    titleAr: 'تسجيل وصايا غير المسلمين، الوصاية على القصر، وتنفيذ التركات بمحاكم دبي',
    category: 'legal',
    shortDescEn: 'Bilingual legal drafting and official registration of Non-Muslim Single and Mirror Wills with Dubai Courts Notary Public, protecting real estate, bank accounts, and minor child guardianship across the UAE.',
    shortDescAr: 'الصياغة والتوثيق الرسمي لوصايا غير المسلمين الفردية والمتبادلة لدى كاتب عدل محاكم دبي لحماية العقارات، الحسابات البنكية، وتعيين الأوصياء على الأطفال القصر.',
    govFee: 1500,
    serviceFee: 850,
    vipFastTrackFee: 450,
    processingTimeEn: '2 - 4 Days',
    processingTimeAr: '2 - 4 أيام',
    authorityEn: 'Dubai Courts Non-Muslim Wills Registry',
    authorityAr: 'محاكم دبي - سجل وصايا غير المسلمين',
    requiredDocumentsEn: [
      'Testator and beneficiary passport copies and Emirates IDs',
      'Schedule of UAE assets (Title Deeds, bank account details, corporate share certificates)',
      'Nominated permanent and interim legal guardians for minor children under 21'
    ],
    requiredDocumentsAr: [
      'جوازات السفر وبطاقات الهوية للموصي والمستفيدين والورثة',
      'جدول تفصيلي بأصول وممتلكات الموصي بالإمارات (العقارات، الحسابات، حصص الشركات)',
      'بيانات الأوصياء الدائمين والمؤقتين المعينين لرعاية الأطفال القصر دون 21 عاماً'
    ],
    keyBenefitsEn: [
      'Full legal protection under UAE Federal Decree-Law No. 41 of 2022 on Civil Personal Status',
      'Prevents freezing of local bank accounts and corporate assets upon death',
      'Full territorial validity covering assets across all seven Emirates of the UAE'
    ],
    keyBenefitsAr: [
      'حماية قانونية كاملة بموجب المرسوم بقانون اتحادي رقم 41 لسنة 2022 للأحوال المدنية',
      'تفادي تجميد الحسابات المصرفية المحلية وأصول الشركات وتسهيل توزيع التركة للورثة',
      'نفاذ قانوني معتمد يغطي الممتلكات والأصول في كافة إمارات الدولة السبع'
    ]
  },

  // ==========================================
  // 9. TYPING & LEGAL - Translation & Typing
  // ==========================================
  {
    id: 'typing-moj-certified-legal-translation',
    departmentId: 'typing',
    titleEn: 'Ministry of Justice (MOJ) Certified Legal Translation',
    titleAr: 'الترجمة القانونية المحلفة المعتمدة من وزارة العدل (30+ لغة)',
    category: 'legal',
    shortDescEn: 'Official sworn legal translation across 30+ languages certified by the UAE Ministry of Justice for Dubai Courts, Notary Public, MOFA, and embassies. Transparent statutory tariff: AED 38 per page.',
    shortDescAr: 'ترجمة قانونية محلفة ومعتمدة من وزارة العدل لأكثر من 30 لغة ومقبولة لدى محاكم دبي، الكاتب العدل، الخارجية، والسفارات. التعرفة الرسمية المعتمدة: 38 درهماً للصفحة.',
    govFee: 38,
    serviceFee: 38,
    vipFastTrackFee: 50,
    processingTimeEn: '2 - 6 Hours',
    processingTimeAr: '2 - 6 ساعات',
    authorityEn: 'UAE Ministry of Justice (MOJ)',
    authorityAr: 'وزارة العدل بدولة الإمارات',
    requiredDocumentsEn: [
      'Clear original document copy (certificates, contracts, court judgments, audit reports)',
      'Passport copies of named parties to ensure 100% exact transliteration'
    ],
    requiredDocumentsAr: [
      'نسخة واضحة من الوثيقة (شهادات، عقود، أحكام قضائية، تقارير مالية)',
      'صور جوازات السفر للأسماء الواردة لضبط تهجئة الأسماء الحرفية بدقة'
    ],
    keyBenefitsEn: [
      'Official statutory rate: AED 38 per page inclusive of MOJ sworn translator stamp',
      '100% legal acceptance by Dubai Courts, Notary Public, MOFA, GDRFA, and foreign embassies',
      'Same-day rush translation service available in under 2 hours'
    ],
    keyBenefitsAr: [
      'التعرفة الرسمية المعتمدة: 38 درهماً للصفحة شاملة ختم وتوقيع المترجم المحلف',
      'قبول قانوني بنسبة 100% لدى محاكم دبي، الكاتب العدل، الخارجية، إقامة دبي، والسفارات',
      'خدمة ترجمة فورية عاجلة للحالات الطارئة تسلم خلال أقل من ساعتين'
    ],
    isPopular: true
  },
  {
    id: 'typing-government-noc-letters-petitions',
    departmentId: 'typing',
    titleEn: 'Official Arabic/English NOC Letters & Fine Mercy Appeals',
    titleAr: 'صياغة خطابات عدم الممانعة والتماسات الاسترحام وتخفيض الغرامات',
    category: 'legal',
    shortDescEn: 'Professional drafting of formal Arabic petitions, GDRFA/ICP overstay fine reduction appeals, humanitarian exemption letters, and official sponsor No-Objection Certificates (NOC).',
    shortDescAr: 'صياغة وطباعة العرائض الحكومية باللغة العربية الفصحى، التماسات تخفيض غرامات الإقامة والهوية، طلبات الاستثناء الإنساني، وخطابات عدم الممانعة المعتمدة.',
    govFee: 100,
    serviceFee: 80,
    vipFastTrackFee: 50,
    processingTimeEn: 'Instant / 30 Minutes',
    processingTimeAr: 'فوري / 30 دقيقة',
    authorityEn: 'GDRFA Dubai / ICP / Ministerial Committees',
    authorityAr: 'إقامة دبي / الهيئة الاتحادية / اللجان الوزارية',
    requiredDocumentsEn: [
      'Relevant government application reference number or fine statement',
      'Supporting medical, financial, or humanitarian proof documents'
    ],
    requiredDocumentsAr: [
      'الرقم المرجعي الحكومي للمعاملة أو كشف الغرامات الصادر',
      'المستندات المؤيدة للطلب (تقارير طبية، كشوف حساب، أو وثائق إنسانية)'
    ],
    keyBenefitsEn: [
      'Eloquent classical Arabic phrasing tailored for ministerial review committees',
      'Proven track record for overstay fine waivers and humanitarian parent sponsorships',
      'Drafted, printed, and uploaded into your active government portal in 30 minutes'
    ],
    keyBenefitsAr: [
      'صياغة عربية قانونية رصينة ومؤثرة موجهة للجان القضائية والاسترحام',
      'نسبة نجاح عالية في تخفيض غرامات الإقامة وطلبات الاستثناء الإنساني لكفالة الوالدين',
      'صياغة وطباعة ورفع إلكتروني مباشر ضمن معاملتك الحكومية خلال 30 دقيقة'
    ]
  },
  {
    id: 'typing-corporate-pro-resolutions-contracts',
    departmentId: 'typing',
    titleEn: 'Corporate Board Resolutions, Commercial Contracts & Golden Visa Typing',
    titleAr: 'طباعة قرارات مجالس الإدارة، العقود التجارية، وملفات الإقامة الذهبية',
    category: 'legal',
    shortDescEn: 'Bilingual drafting of Board of Directors resolutions for corporate bank account opening, commercial partnership agreements, and complete 10-Year UAE Golden Visa nomination portfolios.',
    shortDescAr: 'الصياغة والطباعة ثنائية اللغة لقرارات الشركاء ومجالس الإدارة لفتح الحسابات البنكية، عقود الشراكة والتوريد، وتجهيز ملفات الترشح للإقامة الذهبية (10 سنوات).',
    govFee: 150,
    serviceFee: 120,
    vipFastTrackFee: 60,
    processingTimeEn: 'Instant / 45 Minutes',
    processingTimeAr: 'فوري / 45 دقيقة',
    authorityEn: 'Karama Business Center Corporate Typing Desk',
    authorityAr: 'مركز الكرامة للأعمال - قسم الطباعة المؤسسية',
    requiredDocumentsEn: [
      'DED or Free Zone Trade License and Memorandum of Association (MOA)',
      'Signatory Emirates ID / passport details and bank compliance checklist',
      'Educational and financial documents for Golden Visa applicant portfolios'
    ],
    requiredDocumentsAr: [
      'الرخصة التجارية وعقد التأسيس للشركة (بر رئيسي أو منطقة حرة)',
      'بيانات الهوية والجواز للمخول بالتوقيع ومتطلبات الامتثال البنكي',
      'الوثائق والمؤهلات الأكاديمية والمالية لملفات الإقامة الذهبية'
    ],
    keyBenefitsEn: [
      'Pre-audited templates matching Emirates NBD, FAB, ADCB, Mashreq bank compliance',
      'Executive Golden Visa dossier compilation ensuring rapid nomination approval',
      'Bilingual dual-column Arabic-English format ready for immediate corporate seal'
    ],
    keyBenefitsAr: [
      'نماذج قانونية مدققة ومطابقة لاشتراطات بنوك الإمارات دبي الوطني وأبوظبي الأول والمشرق',
      'تجهيز احترافي لملفات الإقامة الذهبية لضمان سرعة صدور الموافقة المبدئية',
      'تنسيق ثنائي اللغة بجدول مزدوج (عربي وإنجليزي) جاهز للختم والاعتماد فوراً'
    ]
  },
  {
    id: 'typing-embassy-consulate-visa-dockets',
    departmentId: 'typing',
    titleEn: 'Embassy Attestation Dockets, MOJ E-Forms & Vital Record Typing',
    titleAr: 'تجهيز وطباعة ملفات واستمارات تصديق السفارات والقنصليات ووزارة العدل',
    category: 'legal',
    shortDescEn: 'Pre-registration electronic application typing and docket preparation for degrees, marriage certificates, and vital records prior to MOFA, Ministry of Justice, and consular lodgement.',
    shortDescAr: 'طباعة وتجهيز الاستمارات الإلكترونية المسبقة وفهرسة ملفات تصديق الشهادات الجامعية وعقود الزواج قبل تقديمها لوزارة الخارجية والعدل والقنصليات.',
    govFee: 120,
    serviceFee: 100,
    vipFastTrackFee: 50,
    processingTimeEn: 'Instant / 30 Minutes',
    processingTimeAr: 'فوري / 30 دقيقة',
    authorityEn: 'MOFA / Ministry of Justice / Diplomatic Missions',
    authorityAr: 'وزارة الخارجية / وزارة العدل / البعثات الدبلوماسية',
    requiredDocumentsEn: [
      'Original certificate and legal translation copy',
      'Document holder passport and Emirates ID details'
    ],
    requiredDocumentsAr: [
      'الشهادة أو الوثيقة الأصلية ونسخة الترجمة القانونية',
      'بيانات جواز السفر وبطاقة الهوية لصاحب العلاقة'
    ],
    keyBenefitsEn: [
      'Indexes document seals and registration serial numbers accurately on government portals',
      'Eliminates application rejections by MOFA and consular digital gatekeepers',
      'Instant direct handover to our in-house Atlas Attestation diplomatic courier desk'
    ],
    keyBenefitsAr: [
      'فهرسة وتدقيق تسلسل الأختام والأرقام المتسلسلة بدقة في البوابات الحكومية',
      'ضمان عدم رفض الطلب من بوابات التدقيق الإلكتروني بالوزارات والقنصليات',
      'تسليم فوري ومباشر لقسم أطلس للتصديقات الدبلوماسية داخل المركز'
    ]
  },

  // ==========================================
  // 10. SALEM MEDICAL - Medical & Screening
  // ==========================================
  {
    id: 'salem-standard-medical-fitness-24hr',
    departmentId: 'salem',
    titleEn: 'Standard 24-Hour DHA Residency Medical Fitness Test',
    titleAr: 'الفحص الطبي العادي للياقة الإقامة خلال 24 ساعة (صحة دبي / سالم)',
    category: 'medical',
    shortDescEn: 'Official Dubai Health & Salem residency visa medical fitness screening at the baseline statutory government tariff: AED 322 with digital chest X-ray and venipuncture blood testing in 24 hours.',
    shortDescAr: 'الفحص الطبي الرسمي المعتمد من صحة دبي ونظام سالم لتثبيت وتجديد الإقامة بالتعرفة الحكومية الأساسية: 322 درهماً شاملة سحب الدم وأشعة الصدر ورفع النتيجة خلال 24 ساعة.',
    govFee: 322,
    serviceFee: 50,
    vipFastTrackFee: 100,
    processingTimeEn: '24 Hours',
    processingTimeAr: '24 ساعة',
    authorityEn: 'Dubai Health (Al Karama Medical Fitness Express Service Center - Salem)',
    authorityAr: 'صحة دبي (مركز الكرامة للياقة الطبية السريعة - سالم)',
    requiredDocumentsEn: [
      'Original Passport and valid entry permit or current residency visa copy',
      'Emirates ID application form (with registration number)',
      'Digital passport-size photo with white background'
    ],
    requiredDocumentsAr: [
      'جواز السفر الأصلي وتأشيرة الإقامة الحالية أو إذن الدخول الإلكتروني',
      'استمارة الهوية الإماراتية الصادرة موضحاً بها الرقم المرجعي',
      'صورة شخصية رقمية حديثة بخلفية بيضاء'
    ],
    keyBenefitsEn: [
      'Official baseline government tariff: exactly AED 322 with transparent pricing',
      'Processed at our accredited on-site Al Karama Medical Fitness Center (Next to Karama Post Office)',
      'Direct computerized integration with GDRFA Amer for immediate residency visa stamping'
    ],
    keyBenefitsAr: [
      'التعرفة الحكومية الأساسية المعتمدة: 322 درهماً بشفافية تامة دون أي زيادات خفية',
      'إجراء الفحص داخل مركز الكرامة الطبي المعتمد بجوار بريد الكرامة',
      'ربط إلكتروني فوري ومباشر مع نظام إقامة دبي (آمر) لتثبيت التأشيرة فوراً'
    ],
    isPopular: true
  },
  {
    id: 'salem-urgent-medical-fitness-6hr',
    departmentId: 'salem',
    titleEn: 'Express 6-Hour Same-Day DHA Medical Fitness Test',
    titleAr: 'الفحص الطبي العاجل للياقة الإقامة خلال 6 ساعات في نفس اليوم',
    category: 'medical',
    shortDescEn: 'Fast-track same-day Dubai Health medical fitness results in under 6 hours for morning applicants, preventing visa grace-period expiry fines with immediate Amer immigration upload.',
    shortDescAr: 'نتائج الفحص الطبي العاجل لإقامة دبي في أقل من 6 ساعات في نفس اليوم للمتقدمين صباحاً، لتفادي غرامات انتهاء مهلة الإقامة وتثبيت التأشيرة فوراً.',
    govFee: 322,
    serviceFee: 150,
    vipFastTrackFee: 200,
    processingTimeEn: 'Express 6 Hours (Same Day)',
    processingTimeAr: 'عاجل خلال 6 ساعات (في نفس اليوم)',
    authorityEn: 'Dubai Health (Al Karama Medical Fitness Center - Salem)',
    authorityAr: 'صحة دبي (مركز الكرامة للياقة الطبية - سالم)',
    requiredDocumentsEn: [
      'Original passport, visa copy, and Emirates ID application form',
      'Digital passport photograph with white background'
    ],
    requiredDocumentsAr: [
      'جواز السفر الأصلي وتأشيرة الإقامة واستمارة الهوية الإماراتية',
      'صورة شخصية رقمية حديثة بخلفية بيضاء'
    ],
    keyBenefitsEn: [
      'Official 6-hour Dubai Health Salem laboratory results turnaround tier',
      'Accelerated lab clearance for same-day residence visa processing',
      'Priority laboratory queue routing with dedicated fast-track phlebotomy counters'
    ],
    keyBenefitsAr: [
      'إصدار رسمي لنتيجة فحص صحة دبي ونظام سالم خلال 6 ساعات (باقة الفحص العاجل)',
      'تسريع الفحص المخبري لإتاحة متابعة تثبيت الإقامة في أقرب وقت',
      'مسار مخبري عاجل وأولوية قصوى لسحب الدم دون أي طوابير انتظار'
    ]
  },
  {
    id: 'salem-vip-medical-fitness-2hr',
    departmentId: 'salem',
    titleEn: 'Super Express 2-Hour VIP Majlis DHA Medical Fitness Test',
    titleAr: 'الفحص الطبي فائق السرعة خلال ساعتين بمجلس كبار الشخصيات (VIP)',
    category: 'medical',
    shortDescEn: 'Luxury executive medical screening with results in under 120 minutes. Blood drawn in our private VIP Majlis Lounge with zero-wait private X-ray escort, synchronized directly with Amer Golden Visa desks.',
    shortDescAr: 'الفحص الطبي الرئاسي فائق السرعة مع صدور النتيجة خلال أقل من ساعتين. سحب الدم داخل مجلس كبار الشخصيات مع مرافقة خاصة للأشعة والربط الفوري مع الإقامة الذهبية.',
    govFee: 322,
    serviceFee: 350,
    vipFastTrackFee: 350,
    processingTimeEn: 'Super Express (Under 2 Hours)',
    processingTimeAr: 'فائق السرعة (أقل من ساعتين)',
    authorityEn: 'Dubai Health VIP Service (KMFC Karama - Salem)',
    authorityAr: 'خدمات كبار الشخصيات - صحة دبي (مركز الكرامة - سالم)',
    requiredDocumentsEn: [
      'Original Passport and visa/entry permit copy',
      'Emirates ID application token',
      'VIP Majlis appointment reservation'
    ],
    requiredDocumentsAr: [
      'جواز السفر الأصلي وصورة التأشيرة أو إذن الدخول',
      'استمارة الهوية الإماراتية الصادرة',
      'تأكيد حجز جناح مجلس كبار الشخصيات'
    ],
    keyBenefitsEn: [
      'Fastest certified residency medical clearance in Dubai: verified in under 120 minutes',
      'Blood collected in your luxury Majlis armchair with complimentary barista hospitality',
      'Immediate handover to our adjacent Amer desk for same-day Golden Visa stamping'
    ],
    keyBenefitsAr: [
      'أسرع فحص طبي معتمد للإقامة في دبي: صدور النتيجة في أقل من 120 دقيقة',
      'سحب الدم في مقعدك الخاص بالمجلس الفاخر مع كرم الضيافة والقهوة العربية',
      'تحويل فوري لكاونتر آمر المجاور لتثبيت الإقامة الذهبية فوراً في نفس الصباح'
    ],
    isPopular: true,
    isVipEligible: true
  },
  {
    id: 'salem-car-blood-collection-service',
    departmentId: 'salem',
    titleEn: 'VIP Drive-Through Car Blood Collection Service',
    titleAr: 'خدمة سحب الدم من السيارة لكبار الشخصيات (درايف ثرو)',
    category: 'medical',
    shortDescEn: 'Comfortable roadside screening: remain comfortably seated in your vehicle while a licensed Dubai Health phlebotomist draws your venous blood sample in our shaded VIP drive-through bay in Al Karama.',
    shortDescAr: 'خدمة الفحص المريحة من مقعد السيارة: ابقَ مرتاحاً في سيارتك بينما يسحب ممرض معتمد من صحة دبي عينة الدم عبر النافذة في مسارنا المظلل بمركز الكرامة.',
    govFee: 350,
    serviceFee: 200,
    vipFastTrackFee: 150,
    processingTimeEn: 'Express 4 - 6 Hours',
    processingTimeAr: 'عاجل خلال 4 - 6 ساعات',
    authorityEn: 'Dubai Health Salem Drive-Through Bay (Al Karama)',
    authorityAr: 'صحة دبي - مسار فحص السيارات بالكرامة (سالم)',
    requiredDocumentsEn: [
      'Original Passport, visa copy, and Emirates ID form',
      'Vehicle arrival at Karama Business Center drive-through bay'
    ],
    requiredDocumentsAr: [
      'جواز السفر الأصلي وتأشيرة الإقامة واستمارة الهوية',
      'الوصول بالمركبة للمسار المخصص بمركز الكرامة للأعمال'
    ],
    keyBenefitsEn: [
      'Zero waiting room visits: perfect for executives, pregnant mothers, and elderly family members',
      'Surgical hygiene and certified Dubai Health phlebotomy equipment',
      'Express results pushed directly to your smartphone via SMS and email'
    ],
    keyBenefitsAr: [
      'الاستغناء تماماً عن غرف الانتظار: راحة مطلقة لكبار الشخصيات والحوامل وكبار السن',
      'أعلى معايير التعقيم الطبي وأحدث أدوات سحب الدم المعتمدة من صحة دبي',
      'إرسال النتائج العاجلة مباشرة لهاتفك الذكي عبر الرسائل القصيرة والبريد'
    ],
    isVipEligible: true
  },
  {
    id: 'salem-domestic-vaccination-services',
    departmentId: 'salem',
    titleEn: 'Domestic Worker & Housemaid Screening & Mandatory Vaccinations',
    titleAr: 'فحص العمالة المساعدة ومدبرات المنازل والتطعيمات الإلزامية',
    category: 'medical',
    shortDescEn: 'Statutory communicable disease screening, clinical pregnancy testing, and mandatory 3-dose Hepatitis B vaccination series for housemaids, nannies, cooks, and domestic helpers.',
    shortDescAr: 'الفحص الطبي الإلزامي للأمراض السارية واختبار الحمل وجرعات لقاح التهاب الكبد الوبائي (B) الإلزامية لمدبرات المنازل والمربيات والطهاة وسائقي المنازل.',
    govFee: 200,
    serviceFee: 100,
    vipFastTrackFee: 80,
    processingTimeEn: 'Same Day / 1 Hour',
    processingTimeAr: 'نفس اليوم / ساعة واحدة',
    authorityEn: 'Dubai Health Preventive Medicine & Salem',
    authorityAr: 'صحة دبي - إدارة الطب الوقائي ونظام سالم',
    requiredDocumentsEn: [
      'Domestic worker original passport, entry permit/visa, and Emirates ID form',
      'Sponsor Emirates ID copy and contact details'
    ],
    requiredDocumentsAr: [
      'جواز السفر الأصلي وتصريح أو إذن الدخول واستمارة الهوية للمساعد المنزلي',
      'صورة بطاقة الهوية الإماراتية وبيانات التواصل للكفيل'
    ],
    keyBenefitsEn: [
      'First dose of mandatory Hepatitis B vaccine administered on-site during initial test',
      'Official digital immunization card uploaded to Dubai Health residency file',
      'Protects household family members and children against communicable risks'
    ],
    keyBenefitsAr: [
      'إعطاء الجرعة الأولى الإلزامية للقاح الكبد الوبائي فوراً أثناء الفحص الأول بالمركز',
      'توثيق بطاقة التطعيم الرقمية الرسمية في ملف صحة دبي لإنجاز الإقامة',
      'حماية صحية ووقائية شاملة لأفراد الأسرة والأطفال داخل المنزل'
    ]
  },
  {
    id: 'salem-home-office-screening',
    departmentId: 'salem',
    titleEn: 'Mobile Home & Corporate Office Medical Fitness Screening',
    titleAr: 'الفحص الطبي المتنقل في المنازل ومقار الشركات (صحة دبي / سالم)',
    category: 'medical',
    shortDescEn: 'Licensed Dubai Health medical squad dispatched to luxury villas or corporate offices across Dubai for on-site blood draws and biometric checks for executive teams and employee batches.',
    shortDescAr: 'فريق طبي متنقل ومعتمد من صحة دبي يصل إلى الفلل الفاخرة أو مقار الشركات لإجراء سحب عينات الدم والتحقق البيومتري للمديرين ودفعات الموظفين دون مغادرة مقرهم.',
    govFee: 450,
    serviceFee: 350,
    vipFastTrackFee: 300,
    processingTimeEn: 'Express (Under 12 Hours)',
    processingTimeAr: 'عاجل (أقل من 12 ساعة)',
    authorityEn: 'Dubai Health Mobile Medical Squad (KMFC Karama)',
    authorityAr: 'الفريق الطبي المتنقل - صحة دبي (مركز الكرامة)',
    requiredDocumentsEn: [
      'Passport and visa copies of all applicants',
      'Emirates ID application tokens and physical site address in Dubai'
    ],
    requiredDocumentsAr: [
      'صور جوازات السفر والتأشيرات لكافة المفحوصين',
      'استمارات الهوية الإماراتية والعنوان الميداني للزيارة في دبي'
    ],
    keyBenefitsEn: [
      'Eliminates lost work hours transporting staff across Dubai traffic',
      'Temperature-controlled mobile phlebotomy kits and mobile biometric pods',
      'Express STAT laboratory testing with certificates delivered in under 12 hours'
    ],
    keyBenefitsAr: [
      'تفادي إهدار ساعات العمل في نقل الموظفين وزحام الطرقات عبر دبي',
      'حقائب سحب دم معقمة ومبردة ومنصات بيومترية متنقلة معتمدة بالكامل',
      'تحليل مخبري فائق السرعة مع رفع الشهادات المعتمدة في أقل من 12 ساعة'
    ],
    isVipEligible: true
  },
  {
    id: 'salem-blood-type-pregnancy-tests',
    departmentId: 'salem',
    titleEn: 'ABO Blood Grouping Card & Clinical Pregnancy Testing',
    titleAr: 'إصدار بطاقة فصيلة الدم الرسمية واختبارات الحمل الطبية',
    category: 'medical',
    shortDescEn: 'Accredited laboratory determination of ABO/Rh blood groups with official laminated Blood Group Card issuance (for RTA driving licenses), and certified clinical pregnancy clearances.',
    shortDescAr: 'الفحص المخبري الدقيق لتحديد فصيلة الدم مع إصدار بطاقة فصيلة الدم البلاستيكية المعتمدة (لرخص قيادة هيئة الطرق)، واختبارات الحمل السريرية المعتمدة.',
    govFee: 150,
    serviceFee: 80,
    vipFastTrackFee: 50,
    processingTimeEn: 'Same Day / 30 Minutes',
    processingTimeAr: 'نفس اليوم / 30 دقيقة',
    authorityEn: 'Dubai Health Accredited Laboratories',
    authorityAr: 'مختبرات صحة دبي المعتمدة',
    requiredDocumentsEn: [
      'Original Emirates ID or Passport copy',
      'Test voucher request form'
    ],
    requiredDocumentsAr: [
      'بطاقة الهوية الإماراتية الأصلية أو صورة جواز السفر',
      'استمارة طلب الفحص المخبري'
    ],
    keyBenefitsEn: [
      'Official laminated Blood Group Card printed on the spot in 15 minutes',
      'Directly accepted by RTA for driving license files and medical emergency profiles',
      'Certified pregnancy laboratory clearances uploaded directly to GDRFA Amer'
    ],
    keyBenefitsAr: [
      'طباعة وتسليم بطاقة فصيلة الدم البلاستيكية المعتمدة فوراً في 15 دقيقة',
      'مقبولة رسمياً لدى هيئة الطرق (RTA) لرخص القيادة وملفات الطوارئ الطبية',
      'رفع نتائج فحص الحمل المخبرية المعتمدة مباشرة إلى نظام إقامة دبي'
    ]
  },

  // ==========================================
  // 11. RTA SERVICES - Driving & Vehicles
  // ==========================================
  {
    id: 'rta-driving-license-renewal',
    departmentId: 'rta',
    titleEn: 'Dubai Driving License Renewal & On-Site Eye Test',
    titleAr: 'تجديد رخصة القيادة بدبي وتنسيق فحص النظر المعتمد',
    category: 'corporate',
    shortDescEn: 'Instant renewal of Dubai driver licenses with RTA-approved optical eye testing conducted on-site in Al Karama, instant fine clearance, and digital wallet license delivery.',
    shortDescAr: 'تجديد فوري لرخص القيادة الصادرة من دبي مع فحص النظر المعتمد داخل مركزنا بالكرامة، سداد المخالفات، وإضافة الرخصة المجددة لمحفظة الهاتف الذكي.',
    govFee: 320,
    serviceFee: 100,
    vipFastTrackFee: 80,
    processingTimeEn: 'Instant / 15 Minutes',
    processingTimeAr: 'فوري / 15 دقيقة',
    authorityEn: 'Roads & Transport Authority (RTA Dubai)',
    authorityAr: 'هيئة الطرق والمواصلات بدبي',
    requiredDocumentsEn: [
      'Original Emirates ID card and current driver license',
      'RTA-approved optical eye test result (conducted on-site at our center)'
    ],
    requiredDocumentsAr: [
      'بطاقة الهوية الإماراتية الأصلية ورخصة القيادة الحالية',
      'نتيجة فحص النظر المعتمدة لدى هيئة الطرق (تجرى في مركزنا مباشرة)'
    ],
    keyBenefitsEn: [
      '15-minute complete turnaround with accredited optical eye test on-site',
      'Instant digital license update on Apple Wallet / Google Wallet with optional card print',
      'Simultaneous clearance of pending traffic fines and black point transfers'
    ],
    keyBenefitsAr: [
      'إنجاز متكامل خلال 15 دقيقة مع توفير فحص النظر المعتمد داخل المركز',
      'إضافة فورية للرخصة المجددة بمحفظة آبل وجوجل بالهاتف مع طباعة البطاقة الذكية',
      'تسوية وسداد فوري للمخالفات المرورية العالقة وإدارة النقاط السوداء'
    ],
    isPopular: true
  },
  {
    id: 'rta-international-driving-permit-idp',
    departmentId: 'rta',
    titleEn: 'International Driving Permit (IDP - 150+ Countries)',
    titleAr: 'إصدار رخصة القيادة الدولية (IDP - معتمدة في 150+ دولة)',
    category: 'corporate',
    shortDescEn: 'Official multi-lingual International Driving Permit booklet issued in 10 minutes under RTA / ATCUAE authority, legally valid for driving and renting automobiles in over 150 countries worldwide.',
    shortDescAr: 'إصدار كتيب رخصة القيادة الدولية الرسمي متعدد اللغات خلال 10 دقائق والمعتمد قانونياً للقيادة واستئجار السيارات في أكثر من 150 دولة حول العالم.',
    govFee: 170,
    serviceFee: 50,
    vipFastTrackFee: 40,
    processingTimeEn: 'Instant / 10 Minutes',
    processingTimeAr: 'فوري / 10 دقائق',
    authorityEn: 'RTA Dubai & Automobile & Touring Club (ATCUAE)',
    authorityAr: 'هيئة الطرق والمواصلات ونادي الإمارات للسيارات (ATCUAE)',
    requiredDocumentsEn: [
      'Valid UAE Driving License and Emirates ID card',
      'Valid passport copy and 1 digital passport-size photograph'
    ],
    requiredDocumentsAr: [
      'رخصة القيادة الإماراتية سارية المفعول وبطاقة الهوية',
      'صورة جواز السفر ساري المفعول وصورة شخصية رقمية'
    ],
    keyBenefitsEn: [
      'Printed and stamped on the spot in under 10 minutes',
      'Legally recognized across 150+ countries (Europe, USA, UK, GCC, Asia)',
      'Essential legal protection and insurance compliance for overseas automobile rentals'
    ],
    keyBenefitsAr: [
      'طباعة وختم كتيب الرخصة الدولية المعتمد فوراً في أقل من 10 دقائق',
      'معترف بها قانونياً في أكثر من 150 دولة (أوروبا، أمريكا، بريطانيا، الخليج، آسيا)',
      'حماية قانونية وتأمينية أساسية لاستئجار وقيادة السيارات أثناء السفر بالخارج'
    ]
  },
  {
    id: 'rta-vehicle-mulkiya-renewal',
    departmentId: 'rta',
    titleEn: 'Annual Vehicle Registration (Mulkiya) Renewal',
    titleAr: 'التجديد السنوي لملكية المركبات (الملكية والتأمين والفحص)',
    category: 'corporate',
    shortDescEn: 'Annual motor vehicle registration renewal (Mulkiya), technical passing test verification, 13-month insurance linkage, and fine clearance avoiding late expiry penalties and vehicle impound risks.',
    shortDescAr: 'التجديد السنوي لملكية المركبات، تدقيق شهادة الفحص الفني، ربط وثيقة التأمين (13 شهراً)، وسداد المخالفات لتفادي غرامات انتهاء الملكية وحجز المركبة.',
    govFee: 380,
    serviceFee: 120,
    vipFastTrackFee: 80,
    processingTimeEn: 'Instant / 15 Minutes',
    processingTimeAr: 'فوري / 15 دقيقة',
    authorityEn: 'Roads & Transport Authority (RTA Dubai)',
    authorityAr: 'هيئة الطرق والمواصلات بدبي',
    requiredDocumentsEn: [
      'Vehicle passing technical inspection certificate (Tasjeel / Shamil / Wasel)',
      'Valid 13-month comprehensive or third-party motor insurance policy',
      'Traffic file number (T.C. No.) and owner Emirates ID'
    ],
    requiredDocumentsAr: [
      'شهادة الفحص الفني للمركبة سارية المفعول (تسجيل / شامل / واصل)',
      'وثيقة تأمين المركبة الشامل أو ضد الغير سارية المفعول (13 شهراً)',
      'الرمز المروري (T.C. No) وبطاقة الهوية الإماراتية للمالك'
    ],
    keyBenefitsEn: [
      'Avoids statutory AED 500 late renewal fine and vehicle impoundment',
      'Instant digital Mulkiya pushed to Apple/Google Wallet and police servers',
      'Commercial fleet renewal coordination for delivery vans and corporate vehicles'
    ],
    keyBenefitsAr: [
      'تفادي الغرامة المرورية لانتهاء الملكية (500 درهم) ومخاطر حجز المركبة',
      'إصدار فوري للملكية الرقمية في محفظة الهاتف وتحديث سجلات الشرطة والمرور',
      'إنجاز تجديد أساطيل المركبات للشركات ومركبات التوصيل التجاري'
    ]
  },
  {
    id: 'rta-vehicle-ownership-transfer',
    departmentId: 'rta',
    titleEn: 'Vehicle Ownership Transfer, Export & Commercial Registration',
    titleAr: 'نقل ملكية المركبات، شهادات التصدير، وتسجيل أساطيل الشركات',
    category: 'corporate',
    shortDescEn: 'Official certified transfer of motor vehicle titles between buyers and sellers, electronic sales contracts, bank mortgage release clearance (Fakk Al-Rahn), and international export plates.',
    shortDescAr: 'نقل ملكية المركبات بصورة قانونية معتمدة بين البائع والمشتري، توثيق عقود المبايعة الإلكترونية، فك الرهن البنكي، وإصدار شهادات ولوحات التصدير الدولية.',
    govFee: 420,
    serviceFee: 180,
    vipFastTrackFee: 100,
    processingTimeEn: 'Same Day / 30 Minutes',
    processingTimeAr: 'نفس اليوم / 30 دقيقة',
    authorityEn: 'Roads & Transport Authority (RTA Dubai)',
    authorityAr: 'هيئة الطرق والمواصلات بدبي',
    requiredDocumentsEn: [
      'Vehicle passing inspection certificate for transfer (Tasjeel / Shamil)',
      'Buyer and seller original Emirates IDs (or commercial trade licenses and MOA)',
      'Bank mortgage release electronic clearance (if vehicle was financed)'
    ],
    requiredDocumentsAr: [
      'شهادة الفحص الفني للمركبة لغايات النقل (تسجيل / شامل)',
      'الهويات الإماراتية الأصلية للبائع والمشتري (أو الرخصة وعقد التأسيس للشركات)',
      'موافقة فك الرهن البنكي الإلكترونية (في حال كانت المركبة ممولة بنكياً)'
    ],
    keyBenefitsEn: [
      'Legally binding electronic contract signing protecting buyer and seller',
      'Instant transfer of ownership and new Mulkiya issued to buyer on the spot',
      'Export plate and certificate issuance for vehicles shipping to GCC or overseas'
    ],
    keyBenefitsAr: [
      'توقيع وتوثيق عقد مبايعة إلكتروني معتمد يحمي حقوق البائع والمشتري',
      'نقل ملكية فوري وإصدار الملكية الجديدة باسم المشتري في نفس الزيارة',
      'استخراج شهادات ولوحات التصدير الزرقاء لتسفير المركبات للخليج أو الخارج'
    ]
  },
  {
    id: 'rta-traffic-fine-inquiry-payment',
    departmentId: 'rta',
    titleEn: 'Traffic Fine Inquiry, Discount Settlement & Black Points',
    titleAr: 'الاستعلام الموحد عن المخالفات المرورية وسدادها وإدارة النقاط السوداء',
    category: 'corporate',
    shortDescEn: 'Live unified inquiry and official settlement of traffic penalties across Dubai Police, RTA, Abu Dhabi, and Federal MOI databases, with black point transfers and impoundment fee payments.',
    shortDescAr: 'استعلام موحد ولحظي وسداد رسمي للمخالفات المرورية المسجلة لدى شرطة دبي وهيئة الطرق وباقي إمارات الدولة، مع تحويل النقاط السوداء وسداد بدل الحجز.',
    govFee: 100,
    serviceFee: 50,
    vipFastTrackFee: 50,
    processingTimeEn: 'Instant / Real-Time',
    processingTimeAr: 'فوري / في نفس اللحظة',
    authorityEn: 'Dubai Police GHQ / RTA / Federal Traffic MOI',
    authorityAr: 'القيادة العامة لشرطة دبي / هيئة الطرق / المرور الاتحادي',
    requiredDocumentsEn: [
      'Traffic file number (T.C. No.), vehicle plate details, or driving license number',
      'Emirates ID of the driver accepting black points'
    ],
    requiredDocumentsAr: [
      'رقم الملف المروري (T.C. No) أو بيانات اللوحة أو رقم رخصة القيادة',
      'بطاقة الهوية الإماراتية للسائق المطلوب تحويل النقاط السوداء إليه'
    ],
    keyBenefitsEn: [
      'Comprehensive 7-Emirates unified inquiry lifting license and vehicle registration holds',
      'Processing of smart vehicle impoundment fees (Badal Al-Hajz) to keep car in possession',
      'Official printed government settlement receipts for individual and corporate accounting'
    ],
    keyBenefitsAr: [
      'استعلام موحد يشمل إمارات الدولة السبع لفك الحجز الإداري عن المركبات والرخص',
      'سداد بدل الحجز المالي الذكي (بدل الحجز) لتفادي سحب واحتجاز المركبة الفعلي',
      'إيصالات سداد حكومية رسمية ومطبوعة لتبرئة الذمة للأفراد والشركات'
    ]
  },

  // ==========================================
  // 12. ZAJEL & TAWJEEH - Delivery & Awareness
  // ==========================================
  {
    id: 'tawjeeh-worker-awareness-classes',
    departmentId: 'tawjeeh',
    titleEn: 'Mandatory MoHRE Tawjeeh Worker Awareness Lecture & Certification',
    titleAr: 'محاضرات وجلسات توعية العمال الإلزامية وإصدار شهادة توجيه (MoHRE)',
    category: 'labor',
    shortDescEn: 'Mandatory 45-minute orientation sessions on UAE Labour Law (Decree-Law No. 33), worker rights, workplace safety, and grievance procedures in 10+ languages with immediate Tawjeeh Certificate upload.',
    shortDescAr: 'محاضرات توجيه الإلزامية (45 دقيقة) للتوعية بقانون العمل وحقوق العمال والسلامة المهنية بأكثر من 10 لغات مع إصدار فوري لشهادة توجيه لتثبيت الإقامة.',
    govFee: 200,
    serviceFee: 100,
    vipFastTrackFee: 50,
    processingTimeEn: 'Same Day Session / 45 Minutes',
    processingTimeAr: 'جلسة نفس اليوم / 45 دقيقة',
    authorityEn: 'MoHRE / Tawjeeh Guidance Center Dubai',
    authorityAr: 'وزارة الموارد البشرية والتوطين / مركز توجيه دبي',
    requiredDocumentsEn: [
      'Worker original passport and entry permit / work permit number',
      'Signed electronic job offer contract copy and company establishment card number'
    ],
    requiredDocumentsAr: [
      'جواز السفر الأصلي ورقم تصريح العمل أو إذن الدخول',
      'نسخة عقد عرض العمل الإلكتروني الموقع ورقم بطاقة المنشأة'
    ],
    keyBenefitsEn: [
      'Interactive lectures delivered in 10+ languages (Urdu, Hindi, Tagalog, Bengali, etc.)',
      'Instant electronic Tawjeeh Certificate upload required for residence visa stamping',
      'Comfortable state-of-the-art training auditoriums at Karama Business Center'
    ],
    keyBenefitsAr: [
      'محاضرات تفاعلية متعددة اللغات (الأردية، الهندية، التاغالوغ، البنغالية، وغيرها)',
      'إصدار فوري لشهادة توجيه الرقمية الإلزامية لاستكمال تثبيت تأشيرة الإقامة',
      'قاعات تدريب وتوعية حديثة ومجهزة بالكامل بمركز الكرامة للأعمال'
    ],
    isPopular: true
  },
  {
    id: 'tawjeeh-eid-passport-delivery',
    departmentId: 'tawjeeh',
    titleEn: 'Zajel Priority Doorstep Courier for Emirates IDs & Passports',
    titleAr: 'الشحن والتوصيل البريدي السريع والمؤمن لبطاقات الهوية والجوازات (زاجل)',
    category: 'labor',
    shortDescEn: 'Diplomatic-grade insured courier logistics via Zajel for newly stamped passports, newly printed Emirates ID cards, attested diplomas, and official government certificates across all 7 Emirates.',
    shortDescAr: 'خدمات التوصيل البريدي الدبلوماسي المؤمن والسريع عبر بريد زاجل لجوازات السفر، بطاقات الهوية الإماراتية، والشهادات المصدقة حتى باب دارك في كافة إمارات الدولة.',
    govFee: 60,
    serviceFee: 50,
    vipFastTrackFee: 40,
    processingTimeEn: 'Same Day / 24 Hours',
    processingTimeAr: 'نفس اليوم / 24 ساعة',
    authorityEn: 'Zajel Courier / Karama Business Center',
    authorityAr: 'بريد زاجل / مركز الكرامة للأعمال',
    requiredDocumentsEn: [
      'Government application transaction tracking token or airway bill (AWB)',
      'Valid recipient phone number and delivery physical address in UAE'
    ],
    requiredDocumentsAr: [
      'رقم التتبع الحكومي للمعاملة أو بوليصة الشحن (AWB)',
      'رقم هاتف فعال والعنوان التفصيلي للتسليم داخل الدولة'
    ],
    keyBenefitsEn: [
      'Insured diplomatic-grade transit in serial-numbered tamper-proof security bags',
      'Automated SMS delivery milestone notifications and scheduled delivery window',
      'Digital signature proof of delivery ensuring sensitive identity documents never get lost'
    ],
    keyBenefitsAr: [
      'نقل دبلوماسي مؤمن في حقائب أمنية مرقمة ومحكمة الإغلاق',
      'رسائل نصية دورية بمراحل النقل وتحديد موعد التسليم المناسب لك',
      'إثبات استلام وتوقيع إلكتروني لضمان تسليم الوثائق الثبوتية الحساسة بأمان تام'
    ]
  },
  {
    id: 'tawjeeh-labour-law-legal-advice',
    departmentId: 'tawjeeh',
    titleEn: 'UAE Labour Law Legal Advisory & Gratuity Calculation',
    titleAr: 'الاستشارات والتوجيه القانوني لقانون العمل وحساب مكافأة نهاية الخدمة',
    category: 'labor',
    shortDescEn: 'Independent legal advisory sessions on UAE Federal Labour Law (Decree-Law No. 33) covering end-of-service gratuity calculations, probation terms, notice periods, and dispute resolution.',
    shortDescAr: 'جلسات استشارية متخصصة ومحايدة في قانون العمل الاتحادي (مرسوم بقانون 33): حساب مكافأة نهاية الخدمة بدقة، شروط فترة التجربة، فترات الإنذار، والنزاعات العمالية.',
    govFee: 250,
    serviceFee: 150,
    vipFastTrackFee: 100,
    processingTimeEn: 'Same Day / 1 Hour',
    processingTimeAr: 'نفس اليوم / ساعة واحدة',
    authorityEn: 'MoHRE / Tawjeeh Legal Advisory Desk',
    authorityAr: 'وزارة الموارد البشرية / الاستشارات القانونية لتوجيه',
    requiredDocumentsEn: [
      'Copy of current MoHRE electronic labour contract and basic salary breakdown',
      'Employment correspondence, notice letter, or settlement draft'
    ],
    requiredDocumentsAr: [
      'نسخة من عقد العمل الإلكتروني المعتمد وتفاصيل الراتب الأساسي والبدلات',
      'المراسلات العمالية، خطاب الإنهاء، أو مسودة التسوية المراد تدقيقها'
    ],
    keyBenefitsEn: [
      'Statutory mathematical calculations of severance pay under Articles 51–53 of Labour Law',
      'Clarification of exact rights before formal MoHRE labor dispute registration',
      'Independent impartial guidance by authorized Tawjeeh labor counselors'
    ],
    keyBenefitsAr: [
      'حساب مالي وقانوني دقيق لمكافأة نهاية الخدمة طبقاً للمادتين 51 و53 من قانون العمل',
      'توضيح الحقوق والالتزامات بدقة لتفادي النزاعات أو التجهيز للشكوى الرسمية',
      'إرشاد مهني محايد ومعتمد من قبل مستشاري مركز توجيه المرخصين'
    ]
  },

  // ==========================================
  // 13. TADBEER - Domestic Worker Services
  // ==========================================
  {
    id: 'tadbeer-domestic-worker-sponsorship',
    departmentId: 'tadbeer',
    titleEn: 'Tadbeer Private Sponsor Domestic Worker & Housemaid Visa Package',
    titleAr: 'باقة الكفالة المباشرة للأسرة لاستقدام وتأشيرة العمالة المساعدة (تدبير)',
    category: 'residency',
    shortDescEn: 'Full legal recruitment and sponsorship of housemaids, nannies, cooks, and domestic helpers under the family’s sponsorship with unified MoHRE contracts and 2-year Tadbeer replacement warranties.',
    shortDescAr: 'استقدام وتأشيرات المساعدين المنزليين والمربيات والطهاة وسائقي المنازل تحت كفالة رب الأسرة المباشرة مع عقود وزارة العمل الموحدة وضمان تدبير للاستبدال لسنتين.',
    govFee: 1950,
    serviceFee: 850,
    vipFastTrackFee: 400,
    processingTimeEn: '3 - 5 Days',
    processingTimeAr: '3 - 5 أيام',
    authorityEn: 'Tadbeer / MoHRE',
    authorityAr: 'تدبير / وزارة الموارد البشرية والتوطين',
    requiredDocumentsEn: [
      'Sponsor passport, valid UAE residence visa, and Emirates ID card',
      'Attested salary certificate (minimum AED 25,000/month or equivalent bank audit)',
      'Ejari tenancy contract showing adequate domestic staff accommodation',
      'Marriage certificate and family book / dependent documents'
    ],
    requiredDocumentsAr: [
      'جواز سفر الكفيل وتأشيرة إقامته سارية المفعول والهوية الإماراتية',
      'شهادة راتب معتمدة (حد أدنى 25,000 درهم شهرياً أو كشف حساب بنكي)',
      'عقد إيجاري سكني يثبت توفر غرفة ملائمة للعمالة المساعدة',
      'عقد الزواج والوثائق العائلية للكفيل'
    ],
    keyBenefitsEn: [
      'Mandatory 2-year Tadbeer replacement warranty in case of refusal to work or medical unfitness',
      'Comprehensive worker insurance and pre-departure medical screening',
      'Full legal compliance and standardized MoHRE contractual rights'
    ],
    keyBenefitsAr: [
      'ضمان استبدال رسمي معتمد لمدة سنتين في حال رفض العمل أو عدم اللياقة الطبية',
      'تأمين شامل وفحص طبي معتمد قبل السفر والوصول للدولة',
      'حماية قانونية كاملة وعقود موحدة معتمدة من وزارة الموارد البشرية'
    ],
    isPopular: true
  },
  {
    id: 'tadbeer-center-sponsorship-package',
    departmentId: 'tadbeer',
    titleEn: 'Tadbeer Center Sponsorship & Flexible Monthly Domestic Packages',
    titleAr: 'باقة كفالة مركز تدبير والباقات الشهرية المرنة للعمالة المساعدة',
    category: 'residency',
    shortDescEn: 'Zero-liability domestic worker package where Tadbeer remains the official visa sponsor. No AED 25,000 salary certificate required, with flexible monthly billing and instant candidate replacement.',
    shortDescAr: 'باقة العمالة المساعدة بدون أي مسؤولية قانونية حيث تظل الكفالة على مركز تدبير. لا يشترط راتب 25,000 درهم، مع دفعات شهرية مرنة وإمكانية استبدال العاملة فوراً.',
    govFee: 1200,
    serviceFee: 600,
    vipFastTrackFee: 300,
    processingTimeEn: 'Immediate / 24 Hours',
    processingTimeAr: 'فوري / خلال 24 ساعة',
    authorityEn: 'Tadbeer Center (MoHRE License #DB-8849)',
    authorityAr: 'مركز تدبير (ترخيص وزارة الموارد البشرية #DB-8849)',
    requiredDocumentsEn: [
      'Client passport and Emirates ID copy',
      'Residential address details in Dubai',
      'Signed Tadbeer Center Service Package agreement'
    ],
    requiredDocumentsAr: [
      'صورة جواز السفر وبطاقة الهوية الإماراتية للمتعامل',
      'بيانات عنوان السكن داخل إمارة دبي',
      'توقيع اتفاقية باقة تقديم خدمات مركز تدبير'
    ],
    keyBenefitsEn: [
      'Zero salary certificate requirement and zero employer liability for absconding or medical issues',
      'All-inclusive monthly pricing covering visa, salary, insurance, and flight tickets',
      'Instant replacement at any time if candidate is not suitable for your household'
    ],
    keyBenefitsAr: [
      'لا يشترط أي حد أدنى للراتب مع انعدام أي مسؤولية قانونية عن الانقطاع أو العلاج',
      'باقة شهرية شاملة تغطي التأشيرة والراتب والتأمين الطبي وتذاكر السفر بالكامل',
      'إمكانية استبدال العاملة فوراً في أي وقت إذا لم تكن مناسبة لمتطلبات أسرتك'
    ]
  },
  {
    id: 'tadbeer-maid-visa-renewal-medical',
    departmentId: 'tadbeer',
    titleEn: 'Housemaid Residency Visa Renewal, Salem Medical & Contract Extension',
    titleAr: 'تجديد إقامة العمالة المساعدة، فحص سالم الطبي، وتمديد عقود تدبير',
    category: 'residency',
    shortDescEn: 'Synchronized 2-year renewal cycle for domestic workers: on-site Salem medical fitness screening (AED 322), Hepatitis B booster, Emirates ID renewal, and Amer 2-year residency stamping.',
    shortDescAr: 'دورة تجديد متكاملة لإقامة العمالة المساعدة لسنتين: فحص سالم الطبي بالمركز (322 درهماً)، جرعة لقاح الكبد التنشيطية، تجديد الهوية، وتثبيت الإقامة لدى آمر في زيارة واحدة.',
    govFee: 1450,
    serviceFee: 450,
    vipFastTrackFee: 200,
    processingTimeEn: '24 - 48 Hours',
    processingTimeAr: '24 - 48 ساعة',
    authorityEn: 'Tadbeer / Dubai Health Salem / GDRFA Amer',
    authorityAr: 'تدبير / صحة دبي (سالم) / إقامة دبي (آمر)',
    requiredDocumentsEn: [
      'Domestic worker original passport, current visa, and Emirates ID',
      'Sponsor original Emirates ID and Ejari tenancy contract',
      'Salem medical fitness result and vaccination booster voucher'
    ],
    requiredDocumentsAr: [
      'جواز السفر الأصلي وتأشيرة الإقامة الحالية والهوية للعامل المنزلي',
      'الهوية الإماراتية الأصلية وعقد إيجاري للكفيل',
      'نتيجة فحص سالم الطبي وجرعة التطعيم التنشيطية'
    ],
    keyBenefitsEn: [
      'Complete renewal cycle (Medical + Contract + Emirates ID + Visa) under one roof in 45 minutes',
      'Avoids late renewal fines and ensures continuous health insurance coverage',
      'Zajel priority doorstep delivery of newly printed 2-year Emirates ID cards'
    ],
    keyBenefitsAr: [
      'دورة تجديد متكاملة (فحص طبي + عقد + هوية + تأشيرة) تحت سقف واحد في 45 دقيقة',
      'تفادي غرامات انتهاء الإقامة وضمان استمرارية التغطية التأمينية الصحية',
      'توصيل بطاقات الهوية المجددة لسنتين حتى باب منزلك عبر بريد زاجل'
    ]
  },
  {
    id: 'tadbeer-maid-replacement-insurance',
    departmentId: 'tadbeer',
    titleEn: 'Tadbeer Replacement Warranty, Worker Insurance & Absconding Resolution',
    titleAr: 'ضمان استبدال العمالة المساعدة، التأمين الشامل، وإلغاء بلاغات الانقطاع',
    category: 'residency',
    shortDescEn: 'Activation of official Tadbeer domestic worker replacement warranties, mediation, insurance claims, and formal MoHRE circular notifications (absconding reports) and contract cancellations.',
    shortDescAr: 'تفعيل وثيقة ضمان استبدال العمالة المساعدة المعتمدة، الوساطة وحل الخلافات، مطالبات التأمين، وقيد بلاغات الانقطاع الرسمية (الهروب) وإلغاء العقود وتبرئة الذمة.',
    govFee: 500,
    serviceFee: 300,
    vipFastTrackFee: 150,
    processingTimeEn: '24 - 48 Hours',
    processingTimeAr: '24 - 48 ساعة',
    authorityEn: 'Tadbeer Center & MoHRE Dispute Dept',
    authorityAr: 'مركز تدبير وإدارة علاقات العمل بوزارة الموارد البشرية',
    requiredDocumentsEn: [
      'Original Tadbeer recruitment package agreement',
      'Worker passport and current domestic labor contract',
      'Medical report, refusal statement, or incident documentation'
    ],
    requiredDocumentsAr: [
      'اتفاقية باقة استقدام تدبير الأصلية',
      'جواز سفر العامل وعقد العمل المنزلي القائم',
      'التقرير الطبي، إقرار رفض العمل، أو المستندات المؤيدة للإجراء'
    ],
    keyBenefitsEn: [
      'Financial protection against domestic worker absconding or early termination',
      'Immediate candidate replacement matching original skill and language criteria',
      'Handled directly by accredited Tadbeer customer care and dispute counselors'
    ],
    keyBenefitsAr: [
      'حماية مالية ضد انقطاع العامل أو رفض العمل غير المبرر خلال فترة العقد',
      'ترشيح بديل سريع مطابق لنفس معايير الخبرة واللغة المطلوبة لأسرتك',
      'إشراف ومتابعة مباشرة من مسؤولي رعاية المتعاملين ومستشاري تدبير'
    ]
  },

  // ==========================================
  // 14. VIP & MOBILE DOORSTEP SERVICE
  // ==========================================
  {
    id: 'vip-mobile-government-van',
    departmentId: 'vip-mobile',
    titleEn: 'Luxury Mercedes Mobile Doorstep Government Van (Concierge Dispatch)',
    titleAr: 'حافلة المعاملات الحكومية المتنقلة الفاخرة (مرسيدس-بنز) إلى باب دارك',
    category: 'vip',
    shortDescEn: 'Presidential custom Mercedes Sprinter mobile unit dispatched anywhere in Dubai with satellite-linked terminals, optical GDRFA/ICP biometric pods, and mobile Salem blood testing on board.',
    shortDescAr: 'حافلة مرسيدس الرئاسية المتنقلة لسعادة المتعاملين تصل إلى عتبة بابك بدبي مجهزة بربط فضائي مشفر، ومنصات البصمة البيومترية المعتمدة، وفحص الدم الطبي المتنقل.',
    govFee: 950,
    serviceFee: 950,
    vipFastTrackFee: 0,
    processingTimeEn: 'On-Demand / Scheduled Slot',
    processingTimeAr: 'حسب الطلب / موعد محدد مسبقاً',
    authorityEn: 'ESS VIP Mobile Service Fleet (Dubai Wide)',
    authorityAr: 'أسطول الخدمة المتنقلة الفاخرة - ESS (كافة مناطق دبي)',
    requiredDocumentsEn: [
      'Scheduled appointment and physical location in Dubai (villa, hotel, or office)',
      'Applicant identity documents for the intended government transactions'
    ],
    requiredDocumentsAr: [
      'تأكيد الموعد والموقع الجغرافي داخل إمارة دبي (فيلا، فندق، أو مقر شركة)',
      'وثائق ومستندات أصحاب المعاملات المطلوب إنجازها'
    ],
    keyBenefitsEn: [
      'Zero commute or center queues: the complete Dubai Government center arrives at your door',
      'All family or corporate team transactions completed simultaneously in a single visit',
      'On-board official GDRFA and ICP biometric stations and mobile Salem medical blood collection'
    ],
    keyBenefitsAr: [
      'بدون عناء التنقل أو طوابير الانتظار: المركز الحكومي المتكامل يصل لعتبة دارك',
      'إنجاز معاملات الأسرة أو فريق عمل الشركة بالكامل في زيارة واحدة',
      'أحدث التجهيزات البيومترية والمخبرية المعتمدة على متن الحافلة الفاخرة'
    ],
    isPopular: true,
    isVipEligible: true
  },
  {
    id: 'vip-majlis-executive-lounge',
    departmentId: 'vip-mobile',
    titleEn: 'Private Executive VIP Majlis Concierge Suite',
    titleAr: 'مجلس كبار الشخصيات والاستقبال التنفيذي الخاص (مركز الكرامة للأعمال)',
    category: 'vip',
    shortDescEn: 'Ultra-exclusive private hospitality majlis suite at Karama Business Center with reserved valet parking, personal senior case manager, and expedited executive processing for Golden Visas and corporate deeds.',
    shortDescAr: 'جناح الضيافة والمجلس الفاخر الخاص لكبار الشخصيات بمركز الكرامة للأعمال مع مواقف خاصة، خدمة صف السيارات، ومستشار حكومي مخصص لإنجاز المعاملات بأعلى درجات الرفاهية.',
    govFee: 500,
    serviceFee: 500,
    vipFastTrackFee: 0,
    processingTimeEn: 'Express Concierge Processing',
    processingTimeAr: 'إنجاز فوري استثنائي',
    authorityEn: 'Karama Business Center VIP Desk',
    authorityAr: 'مكتب كبار الشخصيات - مركز الكرامة للأعمال',
    requiredDocumentsEn: [
      'Valid identity documents for the intended government transactions',
      'VIP booking reservation reference'
    ],
    requiredDocumentsAr: [
      'مستندات الهوية للمعاملات الحكومية المراد إنجازها',
      'الرقم المرجعي لحجز مجلس كبار الشخصيات'
    ],
    keyBenefitsEn: [
      'Private discreet suite away from standard center waiting counters',
      'Complimentary premium Arabic coffee, dates, refreshments, and valet parking',
      'Dedicated case officer handles all ministerial submissions from A to Z'
    ],
    keyBenefitsAr: [
      'جناح خاص مستقل يمنحك أعلى درجات الخصوصية والراحة بعيداً عن القاعات العامة',
      'ضيافة عربية أصيلة تشمل القهوة والتمور والمشروبات مع خدمة صف السيارات',
      'مدير معاملة مخصص يتولى رفع واعتماد الملفات لدى الوزارات من الألف إلى الياء'
    ],
    isVipEligible: true
  },
  {
    id: 'vip-corporate-boardroom-concierge',
    departmentId: 'vip-mobile',
    titleEn: 'Corporate Boardroom On-Site Biometric, Medical & PRO Delegation',
    titleAr: 'وفد المعاملات الحكومية، البصمة البيومترية، والفحص الطبي في قاعة مجالس الإدارة',
    category: 'vip',
    shortDescEn: 'Accredited pop-up ministerial delegation unit deployed inside corporate enterprise boardrooms for bulk employee onboarding, executive Golden Visas, on-site blood draws, and biometrics with zero downtime.',
    shortDescAr: 'وفد حكومي وطبي معتمد يقيم منصة وزارية متكاملة داخل قاعة مجلس إدارة شركتك لإنجاز إقامات الموظفين، الإقامة الذهبية للمديرين، وفحوصات الدم دون أي انقطاع عن العمل.',
    govFee: 1200,
    serviceFee: 850,
    vipFastTrackFee: 0,
    processingTimeEn: 'Scheduled Corporate Window',
    processingTimeAr: 'موعد مؤسسي محدد',
    authorityEn: 'ESS Corporate Delegation Concierge (Dubai Wide)',
    authorityAr: 'وفد المعاملات المؤسسية - ESS (كافة مناطق دبي)',
    requiredDocumentsEn: [
      'Corporate trade license and employee batch manifest list',
      'Designated boardroom or conference space for pop-up setup'
    ],
    requiredDocumentsAr: [
      'الرخصة التجارية للشركة وكشف بأسماء الموظفين المستهدفين',
      'تخصيص قاعة اجتماعات أو مساحة ملائمة لتجهيز المنصة الميدانية'
    ],
    keyBenefitsEn: [
      'Zero employee travel time or lost billable corporate work hours',
      'Complete handling: new visas, Golden Visa nominations, biometrics, and medicals in one session',
      'Bulk delivery of stamped passports and Emirates IDs directly to corporate HR'
    ],
    keyBenefitsAr: [
      'انعدام وقت التنقل أو إهدار ساعات العمل الإنتاجية للموظفين بالشركات',
      'إنجاز شامل: تأشيرات جديدة، إقامة ذهبية، بصمات، وفحص طبي في جلسة واحدة',
      'تسليم جماعي للجوازات المثبتة وبطاقات الهوية لإدارة الموارد البشرية بالشركة'
    ],
    isVipEligible: true
  }
];

const OFFICIAL_AUTHORITY_MAPPING: Record<string, { url: string; portalEn: string; portalAr: string }> = {
  amer: {
    url: 'https://gdrfad.gov.ae/en/services',
    portalEn: 'GDRFA Dubai Official Portal',
    portalAr: 'بوابة إقامة دبي الذكية',
  },
  ded: {
    url: 'https://www.investindubai.gov.ae/',
    portalEn: 'Invest in Dubai (DET Portal)',
    portalAr: 'بوابة استثمر في دبي (اقتصادية دبي)',
  },
  tasheel: {
    url: 'https://tasheel.mohre.gov.ae/',
    portalEn: 'MoHRE Tasheel Portal',
    portalAr: 'منصة تسهيل - وزارة الموارد البشرية',
  },
  icp: {
    url: 'https://smartservices.icp.gov.ae/',
    portalEn: 'ICP Smart Services Portal',
    portalAr: 'منصة الخدمات الذكية للهيئة الاتحادية',
  },
  municipality: {
    url: 'https://www.dm.gov.ae/',
    portalEn: 'Dubai Municipality Portal',
    portalAr: 'بوابة بلدية دبي الرسمية',
  },
  ohc: {
    url: 'https://www.dm.gov.ae/',
    portalEn: 'Dubai Municipality Public Health',
    portalAr: 'الصحة والسلامة - بلدية دبي',
  },
  attestation: {
    url: 'https://www.mofa.gov.ae/en/Services/Attestation',
    portalEn: 'UAE MoFA Attestation Portal',
    portalAr: 'بوابة تصديقات وزارة الخارجية',
  },
  notary: {
    url: 'https://www.dc.gov.ae/PublicServices/Home.aspx?lang=en',
    portalEn: 'Dubai Courts Public Services',
    portalAr: 'بوابة محاكم دبي الإلكترونية',
  },
  typing: {
    url: 'https://www.moj.gov.ae/',
    portalEn: 'UAE Ministry of Justice Portal',
    portalAr: 'بوابة وزارة العدل الاتحادية',
  },
  salem: {
    url: 'https://services.dha.gov.ae/sheryan/',
    portalEn: 'Dubai Health Salem System',
    portalAr: 'نظام سالم للياقة الطبية - صحة دبي',
  },
  rta: {
    url: 'https://www.rta.ae/',
    portalEn: 'RTA Dubai Official Portal',
    portalAr: 'بوابة هيئة الطرق والمواصلات',
  },
  tawjeeh: {
    url: 'https://www.mohre.gov.ae/',
    portalEn: 'MoHRE Tawjeeh Services',
    portalAr: 'خدمات توجيه - وزارة الموارد البشرية',
  },
  tadbeer: {
    url: 'https://www.mohre.gov.ae/',
    portalEn: 'MoHRE Domestic Workers Portal',
    portalAr: 'بوابة العمالة المساعدة - وزارة الموارد البشرية',
  },
  'vip-mobile': {
    url: 'https://services.dha.gov.ae/sheryan/',
    portalEn: 'Dubai Health Salem Mobile System',
    portalAr: 'نظام سالم المتنقل - صحة دبي',
  },
};

export const SERVICES: ServiceItem[] = RAW_SERVICES.map((service) => {
  if (service.id === 'dm-ejari-registration') {
    return {
      ...service,
      authorityEn: 'Dubai Land Department (DLD) / RERA (Ejari)',
      authorityAr: 'دائرة الأراضي والأملاك في دبي / ريرا (إيجاري)',
      officialGovUrl: 'https://ejari.dubailand.gov.ae/PublicPages/ejari.htm',
      officialGovPortalNameEn: 'Official DLD Ejari Portal',
      officialGovPortalNameAr: 'البوابة الرسمية لإيجاري - أراضي دبي',
    };
  }
  const auth = OFFICIAL_AUTHORITY_MAPPING[service.departmentId];
  return {
    ...service,
    officialGovUrl: service.officialGovUrl || auth?.url || 'https://u.ae/',
    officialGovPortalNameEn: service.officialGovPortalNameEn || auth?.portalEn || 'Official UAE Government Portal',
    officialGovPortalNameAr: service.officialGovPortalNameAr || auth?.portalAr || 'البوابة الرسمية لحكومة الإمارات',
  };
});

export const SAMPLE_TRACKING_RECORDS: TrackingRecord[] = [
  {
    reference: 'ESS-2026-88412',
    applicantName: 'Alexander Vance',
    companyName: 'Vance Global Enterprises LLC',
    serviceNameEn: 'UAE 10-Year Golden Visa (Investors & Professionals)',
    serviceNameAr: 'الإقامة الذهبية لدولة الإمارات لمدة 10 سنوات',
    departmentEn: 'Amer (GDRFA)',
    departmentAr: 'مركز آمر (الإقامة وشؤون الأجانب)',
    submissionDate: 'Oct 14, 2026 · 10:30 AM',
    currentStage: 3,
    stages: [
      {
        titleEn: 'Document Verification & Pre-Audit',
        titleAr: 'تدقيق ومراجعة المستندات الأولية',
        date: 'Oct 14, 2026 · 10:30 AM',
        status: 'completed'
      },
      {
        titleEn: 'Nomination & Ministry Lodgement',
        titleAr: 'الترشيح والرفع المباشر للوزارة',
        date: 'Oct 14, 2026 · 11:45 AM',
        status: 'completed'
      },
      {
        titleEn: 'Federal Immigration Security Clearance',
        titleAr: 'التدقيق الأمني والموافقة المبدئية من الهيئة',
        date: 'Oct 14, 2026 · 02:15 PM',
        status: 'in_progress',
        noteEn: 'Preliminary approval granted by GDRFA Dubai. Electronic entry permit issued.',
        noteAr: 'تمت الموافقة المبدئية من إقامة دبي، وصدر إذن الدخول الإلكتروني.'
      },
      {
        titleEn: 'Medical Fitness & Biometric Emirates ID',
        titleAr: 'الفحص الطبي والبصمة البيومترية',
        date: 'Estimated Oct 15, 2026 · 10:00 AM',
        status: 'pending'
      },
      {
        titleEn: '10-Year Residency Permit Stamped',
        titleAr: 'تثبيت الإقامة الذهبية لمدة 10 سنوات',
        date: 'Estimated Oct 15, 2026 · 02:00 PM',
        status: 'pending'
      }
    ],
    officerName: 'Tariq Al-Mansoor (Senior Golden Visa Consultant)',
    estimatedCompletion: 'Oct 15, 2026 (Under 24 Hours)',
    channel: 'vip_majlis'
  },
  {
    reference: 'ESS-DET-3329',
    applicantName: 'Marcus Aurelius Sterling',
    companyName: 'Sterling Global Commodities LLC',
    serviceNameEn: 'Licensing: New, Instant, E-Trader',
    serviceNameAr: 'التراخيص: جديدة، فورية، وتاجر إلكتروني',
    departmentEn: 'DET (Economy & Tourism)',
    departmentAr: 'اقتصادية وسياحة دبي (DET / DED)',
    submissionDate: 'Oct 10, 2026 · 08:00 AM',
    currentStage: 4,
    stages: [
      {
        titleEn: 'Trade Name Reservation & Initial Approval',
        titleAr: 'حجز الاسم التجاري والموافقة المبدئية',
        date: 'Oct 10, 2026 · 08:20 AM',
        status: 'completed'
      },
      {
        titleEn: 'Electronic Memorandum of Association (MOA) Signing',
        titleAr: 'توقيع عقد التأسيس الإلكتروني',
        date: 'Oct 10, 2026 · 09:10 AM',
        status: 'completed'
      },
      {
        titleEn: 'DED Payment Voucher Clearance',
        titleAr: 'سداد رسوم اقتصادية دبي وإذن الدفع',
        date: 'Oct 10, 2026 · 09:35 AM',
        status: 'completed'
      },
      {
        titleEn: 'Official Commercial License Issued',
        titleAr: 'إصدار الرخصة التجارية والسجل التجاري رسمياً',
        date: 'Oct 10, 2026 · 09:50 AM',
        status: 'completed',
        noteEn: 'Trade license #1189423 issued with 100% foreign ownership.',
        noteAr: 'تم إصدار الرخصة رقم #1189423 بنسبة تملك أجنبي 100%.'
      }
    ],
    officerName: 'Hamad Al-Maktoum (Commercial Licensing Director)',
    estimatedCompletion: 'Completed',
    channel: 'doorstep_van'
  }
];
