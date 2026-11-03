import { Language } from '../types';

export interface RelatedServiceItem {
  id: string; // real service ID or department ID
  type: 'service' | 'department';
  titleEn: string;
  titleAr: string;
  departmentId: string;
  badgeEn: string;
  badgeAr: string;
  descriptionEn?: string;
  descriptionAr?: string;
  category?: 'visa' | 'medical' | 'business' | 'legal' | 'labour' | 'identity';
}

export interface RelatedServicesConfig {
  eyebrowEn: string;
  eyebrowAr: string;
  headingEn: string;
  headingAr: string;
  descriptionEn: string;
  descriptionAr: string;
  items: RelatedServiceItem[];
}

/**
 * Curated Contextual Clusters of Genuine Services Offered at KBC & ESS
 * All IDs match real entries in SERVICES or DEPARTMENTS
 */

export const VISA_RESIDENCY_CLUSTER: RelatedServiceItem[] = [
  {
    id: 'amer-residency-visa-new',
    type: 'service',
    titleEn: 'New UAE Residency Visa',
    titleAr: 'تأشيرة إقامة جديدة (داخل وخارج الدولة)',
    departmentId: 'amer',
    badgeEn: 'Amer GDRFA',
    badgeAr: 'مركز آمر',
    descriptionEn: 'End-to-end processing under Dubai immigration authority',
    descriptionAr: 'معاملة شاملة معتمدة من إقامة دبي',
    category: 'visa',
  },
  {
    id: 'amer-residency-visa-renewal',
    type: 'service',
    titleEn: 'Residence Visa Renewal',
    titleAr: 'تجديد تأشيرة الإقامة',
    departmentId: 'amer',
    badgeEn: 'Amer GDRFA',
    badgeAr: 'مركز آمر',
    descriptionEn: 'Fast 2-year and 3-year residency renewals',
    descriptionAr: 'تجديد فوري للإقامة لسنتين أو ثلاث سنوات',
    category: 'visa',
  },
  {
    id: 'salem-vip-medical-fitness-2hr',
    type: 'service',
    titleEn: 'Salem Express Medical Fitness (2-Hour)',
    titleAr: 'فحص اللياقة الطبية السريع (ساعتان)',
    departmentId: 'salem',
    badgeEn: 'Salem DHA',
    badgeAr: 'فحص سالم الطبي',
    descriptionEn: 'Express blood test and digital chest X-ray on-site',
    descriptionAr: 'سحب دم وأشعة رقمية سريعة داخل المركز',
    category: 'medical',
  },
  {
    id: 'icp-emirates-id-new',
    type: 'service',
    titleEn: 'Emirates ID Services & Biometrics',
    titleAr: 'خدمات الهوية الإماراتية والبصمة البيومترية',
    departmentId: 'icp',
    badgeEn: 'ICP Federal',
    badgeAr: 'الهوية الاتحادية',
    descriptionEn: 'Biometric capture and smart chip issuance',
    descriptionAr: 'التقاط البصمة وإصدار الشريحة الذكية',
    category: 'identity',
  },
  {
    id: 'amer-visa-status-change',
    type: 'service',
    titleEn: 'Visa Status Change (In-Country)',
    titleAr: 'تعديل وضع التأشيرة داخل الدولة',
    departmentId: 'amer',
    badgeEn: 'Amer GDRFA',
    badgeAr: 'مركز آمر',
    descriptionEn: 'Instant status change without leaving the UAE',
    descriptionAr: 'تعديل وضع فوري دون الحاجة لمغادرة الدولة',
    category: 'visa',
  },
  {
    id: 'golden-visa-10yr',
    type: 'service',
    titleEn: '10-Year UAE Golden Visa Nomination',
    titleAr: 'الإقامة الذهبية 10 سنوات للمستثمرين',
    departmentId: 'amer',
    badgeEn: 'Amer VIP',
    badgeAr: 'آمر في آي بي',
    descriptionEn: 'Long-term executive residency petitions',
    descriptionAr: 'معاملات الترشيح والاعتماد للإقامة الذهبية',
    category: 'visa',
  },
  {
    id: 'amer-family-sponsorship-visa',
    type: 'service',
    titleEn: 'Family Residency Sponsorship',
    titleAr: 'كفالة وإقامة الأسرة والزوجة والأبناء',
    departmentId: 'amer',
    badgeEn: 'Amer GDRFA',
    badgeAr: 'مركز آمر',
    descriptionEn: 'Spouse and dependent residence applications',
    descriptionAr: 'إصدار إقامات الزوجة والأبناء والمكفولين',
    category: 'visa',
  },
  {
    id: 'amer-visa-hold-unhold',
    type: 'service',
    titleEn: 'Family Visa Hold & Unhold',
    titleAr: 'تعليق ورفع تعليق إقامة الأسرة (Hold)',
    departmentId: 'amer',
    badgeEn: 'Amer GDRFA',
    badgeAr: 'مركز آمر',
    descriptionEn: 'Preserve dependent visas during sponsor job transitions',
    descriptionAr: 'حفظ إقامات التابعين أثناء الانتقال لعمل جديد',
    category: 'visa',
  },
];

export const MEDICAL_FITNESS_CLUSTER: RelatedServiceItem[] = [
  {
    id: 'salem-vip-medical-fitness-2hr',
    type: 'service',
    titleEn: 'Salem Express Medical Fitness (2-Hour)',
    titleAr: 'فحص اللياقة الطبية السريع (ساعتان)',
    departmentId: 'salem',
    badgeEn: 'Salem DHA',
    badgeAr: 'فحص سالم الطبي',
    descriptionEn: 'Priority 120-minute certificate for urgent visas',
    descriptionAr: 'شهادة لياقة سريعة خلال 120 دقيقة للإقامات المستعجلة',
    category: 'medical',
  },
  {
    id: 'salem-standard-medical-fitness-24hr',
    type: 'service',
    titleEn: 'Standard 24-Hour Medical Fitness',
    titleAr: 'فحص اللياقة الطبية العادي (24 ساعة)',
    departmentId: 'salem',
    badgeEn: 'Salem DHA',
    badgeAr: 'فحص سالم الطبي',
    descriptionEn: 'Official DHA accredited visa screening',
    descriptionAr: 'فحص طبي معتمد من هيئة الصحة بدبي',
    category: 'medical',
  },
  {
    id: 'ohc-food-handlers-card',
    type: 'service',
    titleEn: 'Occupational Health Card (OHC)',
    titleAr: 'بطاقة الصحة المهنية لمتداولي الأغذية والخدمات',
    departmentId: 'ohc',
    badgeEn: 'OHC Dubai',
    badgeAr: 'الصحة المهنية',
    descriptionEn: 'Mandatory annual cards for hospitality and salon staff',
    descriptionAr: 'بطاقة سنوية إلزامية لكوادر المطاعم والضيافة والصالونات',
    category: 'medical',
  },
  {
    id: 'icp-emirates-id-new',
    type: 'service',
    titleEn: 'Emirates ID Biometrics Appointment',
    titleAr: 'حجز وتقريب موعد البصمة البيومترية',
    departmentId: 'icp',
    badgeEn: 'ICP Federal',
    badgeAr: 'الهوية الاتحادية',
    descriptionEn: 'Coordinated biometrics slot alongside medical test',
    descriptionAr: 'موعد بصمة منسق ومقرب مع وقت الفحص الطبي',
    category: 'identity',
  },
  {
    id: 'amer-residency-visa-new',
    type: 'service',
    titleEn: 'New UAE Residency Visa',
    titleAr: 'إصدار وتثبيت الإقامة الجديدة',
    departmentId: 'amer',
    badgeEn: 'Amer GDRFA',
    badgeAr: 'مركز آمر',
    descriptionEn: 'Residency stamping once medical results are cleared',
    descriptionAr: 'تثبيت الإقامة فور صدور نتيجة الفحص الطبي',
    category: 'visa',
  },
  {
    id: 'amer-residency-visa-renewal',
    type: 'service',
    titleEn: 'Residence Visa Renewal',
    titleAr: 'تجديد تأشيرة الإقامة',
    departmentId: 'amer',
    badgeEn: 'Amer GDRFA',
    badgeAr: 'مركز آمر',
    descriptionEn: 'Complete renewal packet with updated medical',
    descriptionAr: 'معاملة تجديد متكاملة بعد تجديد الفحص الطبي',
    category: 'visa',
  },
  {
    id: 'vip-mobile-government-van',
    type: 'service',
    titleEn: 'VIP Mobile Government Van (Doorstep)',
    titleAr: 'الحافلة الحكومية المتنقلة إلى باب منزلك',
    departmentId: 'vip-mobile',
    badgeEn: 'VIP Luxury',
    badgeAr: 'خدمة كبار الشخصيات',
    descriptionEn: 'On-site medical blood draw at your office or home',
    descriptionAr: 'سحب دم وفحص طبي في موقع شركتك أو منزلك',
    category: 'medical',
  },
];

export const BUSINESS_SETUP_CLUSTER: RelatedServiceItem[] = [
  {
    id: 'det-instant-license',
    type: 'service',
    titleEn: 'Instant Trade License (DET)',
    titleAr: 'الرخصة الفورية - اقتصادية دبي (DET)',
    departmentId: 'ded',
    badgeEn: 'DET Dubai',
    badgeAr: 'اقتصادية دبي',
    descriptionEn: 'Issued in a single visit without initial tenancy contract',
    descriptionAr: 'إصدار فوري في زيارة واحدة دون الحاجة لعقد إيجاري مبدئي',
    category: 'business',
  },
  {
    id: 'det-commercial-license-new',
    type: 'service',
    titleEn: 'Commercial LLC License Setup (100% Foreign Ownership)',
    titleAr: 'تأسيس شركة ذات مسؤولية محدودة (تملك أجنبي 100%)',
    departmentId: 'ded',
    badgeEn: 'DET Dubai',
    badgeAr: 'اقتصادية دبي',
    descriptionEn: 'Mainland corporate formation with full foreign ownership',
    descriptionAr: 'تأسيس شركات البر الرئيسي بتملك أجنبي كامل',
    category: 'business',
  },
  {
    id: 'det-trade-name-reservation',
    type: 'service',
    titleEn: 'Trade Name Reservation',
    titleAr: 'حجز الاسم التجاري المعتمد',
    departmentId: 'ded',
    badgeEn: 'DET Dubai',
    badgeAr: 'اقتصادية دبي',
    descriptionEn: 'Official commercial registry name clearance',
    descriptionAr: 'حجز واعتماد الاسم التجاري لدى دائرة الاقتصاد',
    category: 'business',
  },
  {
    id: 'dm-ejari-registration',
    type: 'service',
    titleEn: 'Ejari Tenancy Registration (Commercial & Residential)',
    titleAr: 'توثيق عقود إيجاري (سكني وتجاري)',
    departmentId: 'municipality',
    badgeEn: 'Dubai Municipality',
    badgeAr: 'بلدية دبي',
    descriptionEn: 'Certified tenancy contract in 15 minutes',
    descriptionAr: 'توثيق رسمي لعقد الإيجار خلال 15 دقيقة',
    category: 'business',
  },
  {
    id: 'det-moa-lsa-signing',
    type: 'service',
    titleEn: 'Electronic MOA & Legal Court Signing',
    titleAr: 'توثيق وتوقيع عقود التأسيس الإلكترونية',
    departmentId: 'ded',
    badgeEn: 'DET / Courts',
    badgeAr: 'اقتصادية دبي / المحاكم',
    descriptionEn: 'Digital notary execution for company charters',
    descriptionAr: 'اعتماد رقمي فوري لميثاق وعقد تأسيس الشركة',
    category: 'business',
  },
  {
    id: 'tasheel-company-establishment-card',
    type: 'service',
    titleEn: 'Tasheel Company Establishment Card',
    titleAr: 'فتح وتحديث بطاقة المنشأة لدى وزارة الموارد البشرية',
    departmentId: 'tasheel',
    badgeEn: 'Tasheel MoHRE',
    badgeAr: 'تسهيل الموارد البشرية',
    descriptionEn: 'Enable hiring and corporate work permit quota',
    descriptionAr: 'تفعيل ملف المنشأة وإتاحة إصدار تصاريح العمل',
    category: 'labour',
  },
  {
    id: 'det-license-renewal-ejari',
    type: 'service',
    titleEn: 'Trade License Renewal & Ejari Linking',
    titleAr: 'تجديد الرخصة التجارية وربط عقد إيجاري',
    departmentId: 'ded',
    badgeEn: 'DET Dubai',
    badgeAr: 'اقتصادية دبي',
    descriptionEn: 'Annual commercial registry compliance renewal',
    descriptionAr: 'تجديد السجل التجاري السنوي وربط النظام الفوري',
    category: 'business',
  },
];

export const LEGAL_ATTESTATION_CLUSTER: RelatedServiceItem[] = [
  {
    id: 'atlas-mofa-attestation',
    type: 'service',
    titleEn: 'MOFA Degree & Certificate Attestation',
    titleAr: 'تصديق الشهادات والمستندات من وزارة الخارجية (MOFA)',
    departmentId: 'attestation',
    badgeEn: 'Atlas / MOFA',
    badgeAr: 'أطلس / الخارجية',
    descriptionEn: 'Sovereign digital and physical document legalization',
    descriptionAr: 'تصديق رسمي للشهادات والوثائق الصادرة من داخل وخارج الدولة',
    category: 'legal',
  },
  {
    id: 'notary-power-of-attorney-poa',
    type: 'service',
    titleEn: 'Dubai Courts Notary & Power of Attorney (POA)',
    titleAr: 'صياغة وتوثيق الوكالات العامة والخاصة (الكاتب العدل)',
    departmentId: 'notary',
    badgeEn: 'Dubai Courts',
    badgeAr: 'محاكم دبي',
    descriptionEn: 'Official notarization for general and special authorizations',
    descriptionAr: 'توثيق رسمي للوكالات العامة والخاصة والتجارية',
    category: 'legal',
  },
  {
    id: 'typing-moj-certified-legal-translation',
    type: 'service',
    titleEn: 'Certified Legal Translation (Ministry of Justice)',
    titleAr: 'الترجمة القانونية المعتمدة من وزارة العدل',
    departmentId: 'typing',
    badgeEn: 'MOJ Certified',
    badgeAr: 'معتمد من وزارة العدل',
    descriptionEn: 'Official certified translations in 15+ languages',
    descriptionAr: 'ترجمة معتمدة رسمياً أمام المحاكم والوزارات في أكثر من 15 لغة',
    category: 'legal',
  },
  {
    id: 'atlas-embassy-consulate-legalization',
    type: 'service',
    titleEn: 'Foreign Embassy & Diplomatic Legalization',
    titleAr: 'تصديق السفارات والقنصليات الدبلوماسية',
    departmentId: 'attestation',
    badgeEn: 'Diplomatic Mission',
    badgeAr: 'البعثات الدبلوماسية',
    descriptionEn: 'Accreditation across 119+ international embassies',
    descriptionAr: 'إنجاز التصديقات الدبلوماسية لسفارات أكثر من 119 دولة',
    category: 'legal',
  },
  {
    id: 'notary-corporate-moa-addendum',
    type: 'service',
    titleEn: 'Corporate MOA & Share Transfer Addendum',
    titleAr: 'توثيق ملاحق بيع الحصص وتعديل عقود التأسيس',
    departmentId: 'notary',
    badgeEn: 'Notary Public',
    badgeAr: 'الكاتب العدل',
    descriptionEn: 'Notarized commercial resolutions and partner updates',
    descriptionAr: 'توثيق عدلي لقرارات الشركاء والتنازل عن الحصص',
    category: 'legal',
  },
  {
    id: 'atlas-apostille-global-certification',
    type: 'service',
    titleEn: 'Hague Apostille International Certification',
    titleAr: 'شهادة الأبوستيل الدولية (Apostille)',
    departmentId: 'attestation',
    badgeEn: 'Hague Treaty',
    badgeAr: 'اتفاقية لاهاي',
    descriptionEn: 'Global recognition for cross-border documents',
    descriptionAr: 'اعتماد المستندات للاستخدام في الدول الأعضاء باتفاقية لاهاي',
    category: 'legal',
  },
];

export const LABOUR_MOHRE_CLUSTER: RelatedServiceItem[] = [
  {
    id: 'tasheel-electronic-work-permit-new',
    type: 'service',
    titleEn: 'New Electronic Work Permit (MoHRE)',
    titleAr: 'إصدار تصريح عمل إلكتروني جديد (وزارة الموارد البشرية)',
    departmentId: 'tasheel',
    badgeEn: 'Tasheel MoHRE',
    badgeAr: 'تسهيل الموارد البشرية',
    descriptionEn: 'Official ministry authorization for mainland recruitment',
    descriptionAr: 'موافقة رسمية من وزارة الموارد البشرية لتوظيف العمالة',
    category: 'labour',
  },
  {
    id: 'tasheel-work-permit-renewal',
    type: 'service',
    titleEn: '2-Year Labour Card & Work Permit Renewal',
    titleAr: 'تجديد تصريح وبطاقة العمل لسنتين',
    departmentId: 'tasheel',
    badgeEn: 'Tasheel MoHRE',
    badgeAr: 'تسهيل الموارد البشرية',
    descriptionEn: 'Contract update and labor permit renewal',
    descriptionAr: 'تحديث العقد وتجديد بطاقة العمل للشركات',
    category: 'labour',
  },
  {
    id: 'tasheel-job-offer-unified-contract',
    type: 'service',
    titleEn: 'Unified Employment Offer & Contract',
    titleAr: 'عروض وعقود العمل الموحدة',
    departmentId: 'tasheel',
    badgeEn: 'Tasheel MoHRE',
    badgeAr: 'تسهيل الموارد البشرية',
    descriptionEn: 'Standardized worker agreement typing and submission',
    descriptionAr: 'طباعة واعتماد نماذج عروض العمل والعقود المعتمدة',
    category: 'labour',
  },
  {
    id: 'tasheel-quota-application-amendment',
    type: 'service',
    titleEn: 'Electronic Work Permit Quota Increase',
    titleAr: 'طلب زيادة كوتا تصاريح العمل الإلكترونية',
    departmentId: 'tasheel',
    badgeEn: 'Tasheel MoHRE',
    badgeAr: 'تسهيل الموارد البشرية',
    descriptionEn: 'Expand company hiring capacity with MoHRE approvals',
    descriptionAr: 'رفع الطاقة الاستيعابية لتوظيف العمالة للشركات',
    category: 'labour',
  },
  {
    id: 'tawjeeh-worker-awareness-classes',
    type: 'service',
    titleEn: 'Tawjeeh Mandatory Worker Awareness',
    titleAr: 'محاضرات توجيه العمالية وإصدار الشهادات',
    departmentId: 'tawjeeh',
    badgeEn: 'Tawjeeh MoHRE',
    badgeAr: 'توجيه الموارد البشرية',
    descriptionEn: 'Mandatory worker orientation in 10+ languages',
    descriptionAr: 'توعية قانونية إلزامية للعمال بأكثر من 10 لغات معتمدة',
    category: 'labour',
  },
  {
    id: 'tadbeer-domestic-worker-sponsorship',
    type: 'service',
    titleEn: 'Tadbeer Domestic Worker Sponsorship',
    titleAr: 'استقدام وتأشيرات العمالة المساعدة (تدبير)',
    departmentId: 'tadbeer',
    badgeEn: 'Tadbeer MoHRE',
    badgeAr: 'تدبير الموارد البشرية',
    descriptionEn: 'Private family domestic assistance packages',
    descriptionAr: 'إجراءات كفالة وتأشيرات المساعدين المنزليين للأسر',
    category: 'labour',
  },
];

/**
 * Returns contextual configuration and service items for the Related Services section.
 */
export function getContextualRelatedServices(options: {
  currentServiceId?: string;
  departmentId?: string;
  category?: string;
  language?: Language;
}): RelatedServicesConfig {
  const { currentServiceId, departmentId, category, language = 'en' } = options;
  const isAr = language === 'ar';

  let items: RelatedServiceItem[] = [];
  let headingEn = 'Related Services';
  let headingAr = 'الخدمات ذات الصلة';
  let eyebrowEn = 'EXPLORE OUR SERVICES';
  let eyebrowAr = 'استكشف خدماتنا';
  let descriptionEn =
    'Explore related government services and application support available through Karama Business Center and Emirates Secretarial Services.';
  let descriptionAr =
    'استكشف الخدمات الحكومية المرتبطة والدعم الإجرائي المتوفر عبر مركز الكرامة للأعمال وخدمات مركز الإمارات.';

  // 1. Determine Contextual Cluster by Service or Department
  if (
    departmentId === 'amer' ||
    category === 'residency' ||
    category === 'visa' ||
    currentServiceId?.startsWith('amer-') ||
    currentServiceId?.includes('visa')
  ) {
    headingEn = 'Related Visa & Residency Services';
    headingAr = 'خدمات الإقامة والتأشيرات المرتبطة';
    descriptionEn =
      'Explore complementary visa processing, medical fitness testing, and Emirates ID biometric services coordinated under one roof.';
    descriptionAr =
      'استكشف معاملات الإقامة المكملة، وفحص اللياقة الطبية، وحجز البصمة البيومترية للهوية المنسقة تحت سقف واحد.';
    items = [...VISA_RESIDENCY_CLUSTER];
  } else if (
    departmentId === 'salem' ||
    departmentId === 'ohc' ||
    category === 'medical' ||
    currentServiceId?.startsWith('salem-') ||
    currentServiceId?.startsWith('ohc-')
  ) {
    headingEn = 'Related Medical & Fitness Services';
    headingAr = 'خدمات الفحص الطبي واللياقة المرتبطة';
    descriptionEn =
      'Explore essential residency visa stamping, occupational health cards, and Emirates ID services paired with your medical test.';
    descriptionAr =
      'استكشف تثبيت الإقامة، وبطاقات الصحة المهنية، وخدمات الهوية الإماراتية المرتبطة بفحص اللياقة الطبية.';
    items = [...MEDICAL_FITNESS_CLUSTER];
  } else if (
    departmentId === 'ded' ||
    departmentId === 'municipality' ||
    category === 'business' ||
    currentServiceId?.startsWith('det-') ||
    currentServiceId?.startsWith('dm-')
  ) {
    headingEn = 'Related Business & Licensing Services';
    headingAr = 'خدمات تأسيس الأعمال والتراخيص المرتبطة';
    descriptionEn =
      'Explore commercial licensing, tenancy registration (Ejari), and corporate labour files integrated at Karama Business Center.';
    descriptionAr =
      'استكشف التراخيص التجارية، وتوثيق عقود إيجاري، وملفات المنشآت العمالية المعتمدة في مركز الكرامة للأعمال.';
    items = [...BUSINESS_SETUP_CLUSTER];
  } else if (
    departmentId === 'attestation' ||
    departmentId === 'notary' ||
    departmentId === 'typing' ||
    category === 'legal' ||
    currentServiceId?.startsWith('atlas-') ||
    currentServiceId?.startsWith('notary-') ||
    currentServiceId?.startsWith('typing-')
  ) {
    headingEn = 'Related Legal & Attestation Services';
    headingAr = 'خدمات التصديق والتوثيق القانوني المرتبطة';
    descriptionEn =
      'Explore certified diplomatic attestation, Dubai Courts notary authorizations, and official legal translations.';
    descriptionAr =
      'استكشف التصديقات الدبلوماسية المعتمدة، وتوثيق الكاتب العدل بمحاكم دبي، والترجمة القانونية المعتمدة.';
    items = [...LEGAL_ATTESTATION_CLUSTER];
  } else if (
    departmentId === 'tasheel' ||
    departmentId === 'tawjeeh' ||
    departmentId === 'tadbeer' ||
    category === 'labour' ||
    currentServiceId?.startsWith('tasheel-') ||
    currentServiceId?.startsWith('tawjeeh-') ||
    currentServiceId?.startsWith('tadbeer-')
  ) {
    headingEn = 'Related Corporate & Labour Services';
    headingAr = 'خدمات العمل والمنشآت المرتبطة';
    descriptionEn =
      'Explore electronic work permits, labour contract renewals, and MoHRE compliance coordinated for corporate employers.';
    descriptionAr =
      'استكشف تصاريح العمل الإلكترونية، وتجديد العقود العمالية، وحوكمة وزارة الموارد البشرية لأصحاب المنشآت.';
    items = [...LABOUR_MOHRE_CLUSTER];
  } else {
    // General overview fallback (Home or unlisted department)
    headingEn = 'Related Government Services';
    headingAr = 'الخدمات الحكومية ذات الصلة';
    descriptionEn =
      'Explore comprehensive government transactions, commercial permits, and executive identity services available at our center.';
    descriptionAr =
      'استكشف المعاملات الحكومية الشاملة، والتصاريح التجارية، والخدمات التنفيذية المتوفرة في مركزنا.';
    items = [
      VISA_RESIDENCY_CLUSTER[0],
      VISA_RESIDENCY_CLUSTER[2],
      BUSINESS_SETUP_CLUSTER[0],
      LEGAL_ATTESTATION_CLUSTER[0],
      LABOUR_MOHRE_CLUSTER[0],
      VISA_RESIDENCY_CLUSTER[3],
      BUSINESS_SETUP_CLUSTER[3],
      LEGAL_ATTESTATION_CLUSTER[1],
    ];
  }

  // Filter out the current active service so a page NEVER links to itself!
  const filteredItems = items.filter((item) => item.id !== currentServiceId);

  // Guarantee maximum 6 to 8 items to avoid overwhelming the visitor
  const finalItems = filteredItems.slice(0, 8);

  return {
    eyebrowEn,
    eyebrowAr,
    headingEn,
    headingAr,
    descriptionEn,
    descriptionAr,
    items: finalItems,
  };
}
