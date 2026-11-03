export interface ImmigrationStepItem {
  id: string;
  nameEn: string;
  nameAr: string;
  cost: number;
  noteEn?: string;
  noteAr?: string;
}

export interface ImmigrationPackage {
  id: string;
  titleEn: string;
  titleAr: string;
  category: 'employee' | 'partner' | 'family';
  documentsEn: string[];
  documentsAr: string[];
  steps: ImmigrationStepItem[];
  totalCost: number;
}

export interface OhcCategoryPrice {
  sr: number;
  categoryEn: string;
  categoryAr: string;
  govtFee: number;
  typingFee: number;
  totalFee: number;
}

export interface AttestationCountryPrice {
  sr: number;
  countryEn: string;
  countryAr: string;
  documentTypeEn: string;
  documentTypeAr: string;
  chargesMofaAed: number;
  processingTimeDays: string;
}

export interface ConsulateFeeItem {
  countryEn: string;
  countryAr: string;
  type: 'Commercial' | 'Personal' | 'Both';
  feeAed: number;
  turnaroundDays?: string;
}

// -------------------------------------------------------------
// 1. IMMIGRATION SERVICES (Pages 1 - 6 of Official Price List)
// -------------------------------------------------------------
export const IMMIGRATION_PACKAGES: ImmigrationPackage[] = [
  {
    id: 'employee-residence',
    titleEn: 'Employee Residence (Inside UAE)',
    titleAr: 'إقامة الموظف (داخل الدولة)',
    category: 'employee',
    documentsEn: [
      'Original ID for Sponsor (هوية الكفيل الأصلية)',
      'Passport Copy (صورة جواز المكفول)',
      'Personal Photo (صور شخصية)',
      'MB Number from Tasheel or Labour Card (رقم MB من تسهيل العمل أو بطاقة العمل)'
    ],
    documentsAr: [
      'هوية الكفيل الأصلية',
      'صورة جواز المكفول',
      'صور شخصية بخلفية بيضاء',
      'رقم MB من تسهيل العمل أو بطاقة العمل'
    ],
    steps: [
      { id: 'visit-inside', nameEn: 'Visit Visa Inside UAE (Need Change Status)', nameAr: 'تأشيرة داخل الدولة (تحتاج تعديل وضع)', cost: 1125 },
      { id: 'change-status', nameEn: 'Change Status', nameAr: 'تعديل وضع', cost: 676 },
      { id: 'emirates-id', nameEn: 'Emirates ID (الهوية الإماراتية)', nameAr: 'الهوية الإماراتية', cost: 386 },
      { id: 'medical', nameEn: 'Medical Fitness (الفحص الطبي)', nameAr: 'الفحص الطبي', cost: 322 },
      { id: 'stamping', nameEn: 'Visa Stamping (تثبيت الإقامة)', nameAr: 'تثبيت الإقامة', cost: 547 },
    ],
    totalCost: 3056
  },
  {
    id: 'employee-residence-outside',
    titleEn: 'Employee Residence (Outside UAE)',
    titleAr: 'إقامة الموظف (خارج الدولة)',
    category: 'employee',
    documentsEn: [
      'Original ID for Sponsor (هوية الكفيل الأصلية)',
      'Passport Copy (صورة جواز المكفول)',
      'Personal Photo (صور شخصية)',
      'MB Number from Tasheel or Labour Card (رقم MB من تسهيل العمل أو بطاقة العمل)'
    ],
    documentsAr: [
      'هوية الكفيل الأصلية',
      'صورة جواز المكفول',
      'صور شخصية بخلفية بيضاء',
      'رقم MB من تسهيل العمل أو بطاقة العمل'
    ],
    steps: [
      { id: 'visit-outside', nameEn: 'Visit Visa Outside UAE', nameAr: 'تأشيرة خارج الدولة', cost: 476 },
      { id: 'emirates-id', nameEn: 'Emirates ID (الهوية الإماراتية)', nameAr: 'الهوية الإماراتية', cost: 386 },
      { id: 'medical', nameEn: 'Medical Fitness (الفحص الطبي)', nameAr: 'الفحص الطبي', cost: 322 },
      { id: 'stamping', nameEn: 'Visa Stamping (تثبيت الإقامة)', nameAr: 'تثبيت الإقامة', cost: 547 },
    ],
    totalCost: 1731
  },
  {
    id: 'partner-investor-residence',
    titleEn: 'Partner + Investor Residence (Inside UAE)',
    titleAr: 'إقامة المستثمر والشريك (داخل الدولة)',
    category: 'partner',
    documentsEn: [
      'Original ID for Sponsor (هوية الكفيل الأصلية)',
      'Passport Copy (صورة جواز المكفول)',
      'Personal Photo (صور شخصية)',
      'License Copy (الرخصة التجارية)',
      'Memorandum Copy (عقد التأسيس)'
    ],
    documentsAr: [
      'هوية الكفيل الأصلية',
      'صورة جواز المكفول',
      'صور شخصية بخلفية بيضاء',
      'نسخة الرخصة التجارية',
      'نسخة عقد التأسيس'
    ],
    steps: [
      { id: 'visit-inside', nameEn: 'Visit Visa Inside UAE (Need Change Status)', nameAr: 'تأشيرة داخل الدولة (تحتاج تعديل وضع)', cost: 1125 },
      { id: 'change-status', nameEn: 'Change Status', nameAr: 'تعديل وضع', cost: 676 },
      { id: 'emirates-id', nameEn: 'Emirates ID (الهوية الإماراتية)', nameAr: 'الهوية الإماراتية', cost: 386 },
      { id: 'medical', nameEn: 'Medical Fitness (الفحص الطبي)', nameAr: 'الفحص الطبي', cost: 322 },
      { id: 'stamping', nameEn: 'Visa Stamping (تثبيت الإقامة)', nameAr: 'تثبيت الإقامة', cost: 547 },
    ],
    totalCost: 3056
  },
  {
    id: 'partner-investor-residence-outside',
    titleEn: 'Partner + Investor Residence (Outside UAE)',
    titleAr: 'إقامة المستثمر والشريك (خارج الدولة)',
    category: 'partner',
    documentsEn: [
      'Original ID for Sponsor (هوية الكفيل الأصلية)',
      'Passport Copy (صورة جواز المكفول)',
      'Personal Photo (صور شخصية)',
      'License Copy (الرخصة التجارية)',
      'Memorandum Copy (عقد التأسيس)'
    ],
    documentsAr: [
      'هوية الكفيل الأصلية',
      'صورة جواز المكفول',
      'صور شخصية بخلفية بيضاء',
      'نسخة الرخصة التجارية',
      'نسخة عقد التأسيس'
    ],
    steps: [
      { id: 'visit-outside', nameEn: 'Visit Visa Outside UAE', nameAr: 'تأشيرة خارج الدولة', cost: 476 },
      { id: 'emirates-id', nameEn: 'Emirates ID (الهوية الإماراتية)', nameAr: 'الهوية الإماراتية', cost: 386 },
      { id: 'medical', nameEn: 'Medical Fitness (الفحص الطبي)', nameAr: 'الفحص الطبي', cost: 322 },
      { id: 'stamping', nameEn: 'Visa Stamping (تثبيت الإقامة)', nameAr: 'تثبيت الإقامة', cost: 547 },
    ],
    totalCost: 1731
  },
  {
    id: 'family-residence-employee',
    titleEn: 'Family Residence / Sponsor is an Employee',
    titleAr: 'إقامة العائلة / الكفيل موظف',
    category: 'family',
    documentsEn: [
      'Original ID for Sponsor (هوية الكفيل الأصلية)',
      'Passport Copy (صورة جواز المكفول)',
      'Personal Photo (صور شخصية)',
      'Attested Marriage Certificate (وثيقة الزواج موثقة)',
      'Attested Birth Certificate (شهادات الميلاد للمكفولين موثقة)',
      'Registered Ejari Contract (عقد إيجاري)',
      'Labour Contract: 4,000 AED (for spouse/children), 10,000 AED (for mom & dad)'
    ],
    documentsAr: [
      'هوية الكفيل الأصلية',
      'صورة جواز المكفول',
      'صور شخصية بخلفية بيضاء',
      'وثيقة الزواج موثقة ومصدقة',
      'شهادات الميلاد للمكفولين موثقة',
      'عقد إيجاري مسجل رسمياً',
      'عقد العمل للكفيل براتب 4,000 درهم للعائلة / 10,000 درهم للوالدين'
    ],
    steps: [
      { id: 'file-open', nameEn: 'File Open (فتح ملف كفالة)', nameAr: 'فتح ملف كفالة', cost: 280 },
      { id: 'visit-inside', nameEn: 'Visit Visa Inside UAE (Need Change Status)', nameAr: 'تأشيرة داخل الدولة (تحتاج تعديل وضع)', cost: 1090 },
      { id: 'change-status', nameEn: 'Change Status', nameAr: 'تعديل وضع', cost: 640 },
      { id: 'emirates-id', nameEn: 'Emirates ID (الهوية الإماراتية)', nameAr: 'الهوية الإماراتية', cost: 386 },
      { id: 'medical', nameEn: 'Medical Fitness (الفحص الطبي)', nameAr: 'الفحص الطبي', cost: 322 },
      { id: 'stamping', nameEn: 'Visa Stamping (تثبيت الإقامة)', nameAr: 'تثبيت الإقامة', cost: 510 },
    ],
    totalCost: 3228
  },
  {
    id: 'family-residence-partner',
    titleEn: 'Family Residence / Sponsor is a Partner or Investor',
    titleAr: 'إقامة العائلة / الكفيل مستثمر أو شريك',
    category: 'family',
    documentsEn: [
      'Original ID for Sponsor (هوية الكفيل الأصلية)',
      'Passport Copy (صورة جواز المكفول)',
      'Personal Photo (صور شخصية)',
      'Attested Marriage Certificate (وثيقة الزواج موثقة)',
      'Attested Birth Certificate (شهادات الميلاد للمكفولين موثقة)',
      'License Copy (الرخصة التجارية)',
      'Memorandum Copy (عقد التأسيس)',
      'Refundable Guarantee Deposit: 3,000 AED per person'
    ],
    documentsAr: [
      'هوية الكفيل الأصلية',
      'صورة جواز المكفول',
      'صور شخصية بخلفية بيضاء',
      'وثيقة الزواج موثقة ومصدقة',
      'شهادات الميلاد للمكفولين موثقة',
      'نسخة الرخصة التجارية وعقد التأسيس',
      'مبلغ الضمان المسترد: 3000 درهم عن كل شخص'
    ],
    steps: [
      { id: 'file-open', nameEn: 'File Open (فتح ملف كفالة)', nameAr: 'فتح ملف كفالة', cost: 280 },
      { id: 'visit-inside', nameEn: 'Visit Visa Inside UAE (Need Change Status)', nameAr: 'تأشيرة داخل الدولة (تحتاج تعديل وضع)', cost: 1090 },
      { id: 'change-status', nameEn: 'Change Status', nameAr: 'تعديل وضع', cost: 640 },
      { id: 'emirates-id', nameEn: 'Emirates ID (الهوية الإماراتية)', nameAr: 'الهوية الإماراتية', cost: 386 },
      { id: 'medical', nameEn: 'Medical Fitness (الفحص الطبي)', nameAr: 'الفحص الطبي', cost: 322 },
      { id: 'stamping', nameEn: 'Visa Stamping (تثبيت الإقامة)', nameAr: 'تثبيت الإقامة', cost: 510 },
      { id: 'guarantee', nameEn: 'Guarantee Deposit per Person (Refundable)', nameAr: 'ضمان عن كل شخص (مسترد)', cost: 3000 },
    ],
    totalCost: 6228
  }
];

export const IMMIGRATION_STANDALONE_PRICES = [
  // Cancellations (Page 5)
  { id: 'cancel-emp-inside', nameEn: 'Cancel Employee Residence (Inside UAE)', nameAr: 'إلغاء إقامة عامل داخل الدولة', cost: 225, category: 'Cancellation' },
  { id: 'cancel-emp-outside', nameEn: 'Cancel Employee Residence (Outside UAE)', nameAr: 'إلغاء إقامة عامل خارج الدولة', cost: 325, category: 'Cancellation' },
  { id: 'cancel-family-inside', nameEn: 'Cancel Family Residence (Inside UAE)', nameAr: 'إلغاء إقامة عائلة داخل الدولة', cost: 185, category: 'Cancellation' },
  { id: 'cancel-family-outside', nameEn: 'Cancel Family Residence (Outside UAE)', nameAr: 'إلغاء إقامة عائلة خارج الدولة', cost: 288, category: 'Cancellation' },

  // Establishment Card (Page 6)
  { id: 'est-card-new', nameEn: 'Immigration Establishment Card (New)', nameAr: 'كارت الهجرة للمنشأة (جديد)', cost: 476, category: 'Establishment Card' },
  { id: 'est-card-renew', nameEn: 'Immigration Establishment Card (Renew)', nameAr: 'كارت الهجرة للمنشأة (تجديد)', cost: 576, category: 'Establishment Card' },

  // Fine Reduction Application (Page 6)
  { id: 'fine-reduce-labor', nameEn: 'Fine Reduction Application (Labor / طلب استرحام عامل)', nameAr: 'طلب استرحام لتخفيض الغرامات (عامل)', cost: 325, category: 'Fine Reduction' },
  { id: 'fine-reduce-family', nameEn: 'Fine Reduction Application (Family / طلب استرحام عائلة)', nameAr: 'طلب استرحام لتخفيض الغرامات (عائلة)', cost: 285, category: 'Fine Reduction' },
];

// -------------------------------------------------------------
// 2. OCCUPATIONAL HEALTH CARD (OHC) CATEGORIES (Page 7)
// -------------------------------------------------------------
export const OHC_CATEGORIES_PRICELIST: OhcCategoryPrice[] = [
  { sr: 1, categoryEn: 'Food Handlers', categoryAr: 'متداولو الأغذية والمطاعم', govtFee: 170, typingFee: 52.5, totalFee: 222.5 },
  { sr: 2, categoryEn: 'RTA Drivers Screening', categoryAr: 'فحص سائقي هيئة الطرق والمواصلات', govtFee: 170, typingFee: 52.5, totalFee: 222.5 },
  { sr: 3, categoryEn: 'Agriculture Industries', categoryAr: 'الأنشطة والمهن الزراعية', govtFee: 200, typingFee: 52.5, totalFee: 252.5 },
  { sr: 4, categoryEn: 'Cement, Ceramic, Concrete, Tissue & Textile', categoryAr: 'صناعات الأسمنت والسيراميك والمنسوجات', govtFee: 200, typingFee: 52.5, totalFee: 252.5 },
  { sr: 5, categoryEn: 'Construction Industries', categoryAr: 'قطاع الإنشاءات والمقاولات', govtFee: 200, typingFee: 52.5, totalFee: 252.5 },
  { sr: 6, categoryEn: 'Electric Services', categoryAr: 'الخدمات والتركيبات الكهربائية', govtFee: 200, typingFee: 52.5, totalFee: 252.5 },
  { sr: 7, categoryEn: 'Glass Industries', categoryAr: 'صناعات وتركيبات الزجاج', govtFee: 200, typingFee: 52.5, totalFee: 252.5 },
  { sr: 8, categoryEn: 'Ionizing Radiation', categoryAr: 'العمل في مجالات الإشعاع المؤين', govtFee: 200, typingFee: 52.5, totalFee: 252.5 },
  { sr: 9, categoryEn: 'Waste Management & Hygiene Service Industries', categoryAr: 'إدارة النفايات وخدمات النظافة العامة', govtFee: 200, typingFee: 52.5, totalFee: 252.5 },
  { sr: 10, categoryEn: 'Education Establishment', categoryAr: 'المنشآت التعليمية والمدارس', govtFee: 200, typingFee: 52.5, totalFee: 252.5 },
  { sr: 11, categoryEn: 'Carpenter & Noise Producing Industries', categoryAr: 'النجارة والأنشطة المنتجة للضجيج', govtFee: 220, typingFee: 52.5, totalFee: 272.5 },
  { sr: 12, categoryEn: 'Leather Industries', categoryAr: 'صناعات وتجارة الجلود', govtFee: 270, typingFee: 52.5, totalFee: 322.5 },
  { sr: 13, categoryEn: 'Veterinary Service', categoryAr: 'الخدمات والعيادات البيطرية', govtFee: 270, typingFee: 52.5, totalFee: 322.5 },
  { sr: 14, categoryEn: 'Pre Employment Local', categoryAr: 'الفحص الطبي المسبق للتوظيف المحلي', govtFee: 270, typingFee: 52.5, totalFee: 322.5 },
  { sr: 15, categoryEn: 'Oil Refining, Plastic & Chemical Industries', categoryAr: 'تكرير النفط والصناعات البلاستيكية والكيماوية', govtFee: 300, typingFee: 52.5, totalFee: 352.5 },
  { sr: 16, categoryEn: 'Car Workshops & Service Center', categoryAr: 'ورش وصيانة وتصليح السيارات', govtFee: 340, typingFee: 52.5, totalFee: 392.5 },
  { sr: 17, categoryEn: 'Beauticians & Related Services / Spa Workers', categoryAr: 'صالونات التجميل والعناية ومراكز السبا', govtFee: 540, typingFee: 52.5, totalFee: 592.5 },
  { sr: 18, categoryEn: 'Health Care Workers', categoryAr: 'العاملون في الرعاية الصحية والمستشفيات', govtFee: 570, typingFee: 52.5, totalFee: 622.5 },
  { sr: 19, categoryEn: 'DHA License Services', categoryAr: 'خدمات وتراخيص هيئة الصحة بدبي', govtFee: 770, typingFee: 52.5, totalFee: 822.5 },
  { sr: 20, categoryEn: 'Diwan Staff', categoryAr: 'موظفو وممثلو الديوان', govtFee: 770, typingFee: 52.5, totalFee: 822.5 },
];

// -------------------------------------------------------------
// 3. TASHEEL / MOHRE SERVICES & CANCELLATIONS (Page 8)
// -------------------------------------------------------------
export const TASHEEL_CONTRACTS_PRICES = [
  { id: 'offer-letter-typing', nameEn: 'Offer Letter Typing', nameAr: 'طباعة عرض العمل الإلكتروني', cost: 279.77 },
  { id: 'labor-insurance-standard', nameEn: 'Labor Dubai Insurance (Standard)', nameAr: 'التأمين العمالي بدبي (أساسي)', cost: 224 },
  { id: 'labor-insurance-extended', nameEn: 'Labor Dubai Insurance (Extended)', nameAr: 'التأمين العمالي بدبي (موسع)', cost: 269 },
];

export const TASHEEL_CANCELLATION_PRICES = [
  { id: 'cancel-labor-inside', nameEn: 'Cancel labor card inside UAE', nameAr: 'إلغاء بطاقة العمل داخل الدولة', cost: 77 },
  { id: 'cancel-labor-outside', nameEn: 'Cancel labor card outside UAE', nameAr: 'إلغاء بطاقة العمل خارج الدولة', cost: 77 },
  { id: 'cancel-submission', nameEn: 'Submission cancellation', nameAr: 'طلب وتأكيد إلغاء تصريح العمل', cost: 77 },
  { id: 'cancel-died-worker', nameEn: 'Cancel labor card - died worker', nameAr: 'إلغاء بطاقة العمل بسبب الوفاة', cost: 77 },
  { id: 'cancel-labor-case', nameEn: 'Cancel labor card - labor case', nameAr: 'إلغاء بطاقة العمل أثناء قضية عمالية', cost: 77 },
];

// -------------------------------------------------------------
// 4. ATLAS ATTESTATION (Pages 9 - 17: 117+ Countries & Consulates)
// -------------------------------------------------------------
export const ATTESTATION_SERVICES_SUMMARY = [
  { id: 'mofa-personal', nameEn: 'Ministry of Foreign Affairs (MOFA UAE) - Personal', nameAr: 'تصديق وزارة الخارجية (شخصي)', feeAed: 200, time: '2-3 Working days' },
  { id: 'mofa-commercial', nameEn: 'Ministry of Foreign Affairs (MOFA UAE) - Commercial', nameAr: 'تصديق وزارة الخارجية (تجاري)', feeAed: 1200, time: '2-3 Working days' },
  { id: 'moj-attestation', nameEn: 'Ministry of Justice (MOJ) Attestation', nameAr: 'تصديق وزارة العدل', feeAed: 110, time: '1-2 Working days' },
  { id: 'legal-translation-page', nameEn: 'Certified Legal Translation (per page)', nameAr: 'ترجمة قانونية معتمدة (لكل صفحة)', feeAed: 38, time: '1 Working day' },
];

export const ATTESTATION_COUNTRIES_PRICELIST: AttestationCountryPrice[] = [
  { sr: 1, countryEn: 'Armenia', countryAr: 'أرمينيا', documentTypeEn: 'Education / Personal', documentTypeAr: 'تعليمي / شخصي', chargesMofaAed: 1500, processingTimeDays: '18-20' },
  { sr: 2, countryEn: 'Australia (Urgent)', countryAr: 'أستراليا (عاجل)', documentTypeEn: 'Education / Personal', documentTypeAr: 'تعليمي / شخصي', chargesMofaAed: 1650, processingTimeDays: '8-12' },
  { sr: 3, countryEn: 'Australia', countryAr: 'أستراليا', documentTypeEn: 'Education / Personal', documentTypeAr: 'تعليمي / شخصي', chargesMofaAed: 1550, processingTimeDays: '18-22' },
  { sr: 4, countryEn: 'Austria', countryAr: 'النمسا', documentTypeEn: 'Education / Personal', documentTypeAr: 'تعليمي / شخصي', chargesMofaAed: 1500, processingTimeDays: '15-18' },
  { sr: 5, countryEn: 'Azerbaijan', countryAr: 'أذربيجان', documentTypeEn: 'Education / Personal', documentTypeAr: 'تعليمي / شخصي', chargesMofaAed: 1650, processingTimeDays: '25-30' },
  { sr: 6, countryEn: 'Bahrain', countryAr: 'البحرين', documentTypeEn: 'Personal', documentTypeAr: 'شخصي', chargesMofaAed: 850, processingTimeDays: '8-10' },
  { sr: 7, countryEn: 'Bangladesh', countryAr: 'بنغلاديش', documentTypeEn: 'Educational', documentTypeAr: 'تعليمي', chargesMofaAed: 700, processingTimeDays: '15-20' },
  { sr: 8, countryEn: 'Bangladesh', countryAr: 'بنغلاديش', documentTypeEn: 'Personal', documentTypeAr: 'شخصي', chargesMofaAed: 700, processingTimeDays: '15-20' },
  { sr: 9, countryEn: 'Belarus', countryAr: 'بيلاروسيا', documentTypeEn: 'Education / Personal', documentTypeAr: 'تعليمي / شخصي', chargesMofaAed: 1650, processingTimeDays: '35-40' },
  { sr: 10, countryEn: 'Belgium', countryAr: 'بلجيكا', documentTypeEn: 'Education / Personal', documentTypeAr: 'تعليمي / شخصي', chargesMofaAed: 1450, processingTimeDays: '15' },
  { sr: 11, countryEn: 'Bosnia and Herzegovina', countryAr: 'البوسنة والهرسك', documentTypeEn: 'Education / Personal', documentTypeAr: 'تعليمي / شخصي', chargesMofaAed: 1750, processingTimeDays: '15-20' },
  { sr: 12, countryEn: 'Brazil', countryAr: 'البرازيل', documentTypeEn: 'Education / Personal', documentTypeAr: 'تعليمي / شخصي', chargesMofaAed: 2300, processingTimeDays: '35' },
  { sr: 13, countryEn: 'Canada', countryAr: 'كندا', documentTypeEn: 'Education / Personal', documentTypeAr: 'تعليمي / شخصي', chargesMofaAed: 1400, processingTimeDays: '35-40' },
  { sr: 14, countryEn: 'China', countryAr: 'الصين', documentTypeEn: 'Education', documentTypeAr: 'تعليمي', chargesMofaAed: 2200, processingTimeDays: '20-25' },
  { sr: 15, countryEn: 'Colombia', countryAr: 'كولومبيا', documentTypeEn: 'Education / Personal', documentTypeAr: 'تعليمي / شخصي', chargesMofaAed: 1850, processingTimeDays: '25-30' },
  { sr: 16, countryEn: 'Cyprus', countryAr: 'قبرص', documentTypeEn: 'Education / Personal', documentTypeAr: 'تعليمي / شخصي', chargesMofaAed: 1650, processingTimeDays: '15-18' },
  { sr: 17, countryEn: 'Czech Republic', countryAr: 'التشيك', documentTypeEn: 'Education / Personal', documentTypeAr: 'تعليمي / شخصي', chargesMofaAed: 1550, processingTimeDays: '15-20' },
  { sr: 18, countryEn: 'Denmark', countryAr: 'الدنمارك', documentTypeEn: 'Education / Personal', documentTypeAr: 'تعليمي / شخصي', chargesMofaAed: 1550, processingTimeDays: '15-18' },
  { sr: 19, countryEn: 'Egypt', countryAr: 'مصر', documentTypeEn: 'Personal', documentTypeAr: 'شخصي', chargesMofaAed: 900, processingTimeDays: '8-12' },
  { sr: 20, countryEn: 'Egypt (Case Specific)', countryAr: 'مصر (حسب الحالة)', documentTypeEn: 'Education', documentTypeAr: 'تعليمي', chargesMofaAed: 1450, processingTimeDays: '10-12' },
  { sr: 21, countryEn: 'France (Public University)', countryAr: 'فرنسا (جامعة حكومية)', documentTypeEn: 'Educational', documentTypeAr: 'تعليمي', chargesMofaAed: 1225, processingTimeDays: '15' },
  { sr: 22, countryEn: 'France (Private)', countryAr: 'فرنسا (خاصة)', documentTypeEn: 'Educational', documentTypeAr: 'تعليمي', chargesMofaAed: 1550, processingTimeDays: '15-18' },
  { sr: 23, countryEn: 'France', countryAr: 'فرنسا', documentTypeEn: 'Personal', documentTypeAr: 'شخصي', chargesMofaAed: 1200, processingTimeDays: '15' },
  { sr: 24, countryEn: 'Georgia', countryAr: 'جورجيا', documentTypeEn: 'Education / Personal', documentTypeAr: 'تعليمي / شخصي', chargesMofaAed: 1650, processingTimeDays: 'Case Specific' },
  { sr: 25, countryEn: 'Germany', countryAr: 'ألمانيا', documentTypeEn: 'Education', documentTypeAr: 'تعليمي', chargesMofaAed: 1450, processingTimeDays: '45-60' },
  { sr: 26, countryEn: 'Germany', countryAr: 'ألمانيا', documentTypeEn: 'Marriage / Birth', documentTypeAr: 'زواج / ميلاد', chargesMofaAed: 1400, processingTimeDays: '50-65' },
  { sr: 27, countryEn: 'Gibraltar', countryAr: 'جبل طارق', documentTypeEn: 'Education / Personal', documentTypeAr: 'تعليمي / شخصي', chargesMofaAed: 1900, processingTimeDays: '15-22' },
  { sr: 28, countryEn: 'Greece', countryAr: 'اليونان', documentTypeEn: 'Education / Personal', documentTypeAr: 'تعليمي / شخصي', chargesMofaAed: 1750, processingTimeDays: '15-20' },
  { sr: 29, countryEn: 'Hong Kong', countryAr: 'هونغ كونغ', documentTypeEn: 'Education', documentTypeAr: 'تعليمي', chargesMofaAed: 2750, processingTimeDays: '18-20' },
  { sr: 30, countryEn: 'Hong Kong', countryAr: 'هونغ كونغ', documentTypeEn: 'Personal', documentTypeAr: 'شخصي', chargesMofaAed: 1850, processingTimeDays: '15-18' },
  { sr: 31, countryEn: 'Hungary', countryAr: 'المجر', documentTypeEn: 'Education / Personal', documentTypeAr: 'تعليمي / شخصي', chargesMofaAed: 1750, processingTimeDays: '20-22' },
  { sr: 32, countryEn: 'India', countryAr: 'الهند', documentTypeEn: 'Educational', documentTypeAr: 'تعليمي', chargesMofaAed: 430, processingTimeDays: '7-10' },
  { sr: 33, countryEn: 'India', countryAr: 'الهند', documentTypeEn: 'Personal', documentTypeAr: 'شخصي', chargesMofaAed: 330, processingTimeDays: '7-10' },
  { sr: 34, countryEn: 'India (Through CGI Dubai)', countryAr: 'الهند (عبر قنصلية دبي)', documentTypeEn: 'Personal', documentTypeAr: 'شخصي', chargesMofaAed: 330, processingTimeDays: '8' },
  { sr: 35, countryEn: 'Indonesia', countryAr: 'إندونيسيا', documentTypeEn: 'Education', documentTypeAr: 'تعليمي', chargesMofaAed: 1550, processingTimeDays: '18-22' },
  { sr: 36, countryEn: 'Indonesia', countryAr: 'إندونيسيا', documentTypeEn: 'Personal', documentTypeAr: 'شخصي', chargesMofaAed: 1350, processingTimeDays: '15-18' },
  { sr: 37, countryEn: 'Ireland', countryAr: 'أيرلندا', documentTypeEn: 'Education / Personal', documentTypeAr: 'تعليمي / شخصي', chargesMofaAed: 1550, processingTimeDays: '20-25' },
  { sr: 38, countryEn: 'Italy', countryAr: 'إيطاليا', documentTypeEn: 'Education / Personal (Bilingual)', documentTypeAr: 'تعليمي / شخصي (ثنائي اللغة)', chargesMofaAed: 1650, processingTimeDays: '18-22' },
  { sr: 39, countryEn: 'Japan', countryAr: 'اليابان', documentTypeEn: 'Education / Personal', documentTypeAr: 'تعليمي / شخصي', chargesMofaAed: 1750, processingTimeDays: '15-18' },
  { sr: 40, countryEn: 'Jordan', countryAr: 'الأردن', documentTypeEn: 'Personal', documentTypeAr: 'شخصي', chargesMofaAed: 850, processingTimeDays: '8-12' },
  { sr: 41, countryEn: 'Jordan', countryAr: 'الأردن', documentTypeEn: 'Education (Case Specific)', documentTypeAr: 'تعليمي (حسب الحالة)', chargesMofaAed: 900, processingTimeDays: '8-12' },
  { sr: 42, countryEn: 'Kenya', countryAr: 'كينيا', documentTypeEn: 'Personal', documentTypeAr: 'شخصي', chargesMofaAed: 1400, processingTimeDays: '15-18' },
  { sr: 43, countryEn: 'Kenya', countryAr: 'كينيا', documentTypeEn: 'Educational', documentTypeAr: 'تعليمي', chargesMofaAed: 1550, processingTimeDays: '15-18' },
  { sr: 44, countryEn: 'Kuwait (MOE Completed)', countryAr: 'الكويت (معادلة التربية)', documentTypeEn: 'Education / Personal', documentTypeAr: 'تعليمي / شخصي', chargesMofaAed: 1250, processingTimeDays: '12-15' },
  { sr: 45, countryEn: 'Kyrgyzstan', countryAr: 'قيرغيزستان', documentTypeEn: 'Education / Personal', documentTypeAr: 'تعليمي / شخصي', chargesMofaAed: 2300, processingTimeDays: '25-30' },
  { sr: 46, countryEn: 'Lebanon', countryAr: 'لبنان', documentTypeEn: 'Personal', documentTypeAr: 'شخصي', chargesMofaAed: 800, processingTimeDays: '10-12' },
  { sr: 47, countryEn: 'Lebanon', countryAr: 'لبنان', documentTypeEn: 'Education', documentTypeAr: 'تعليمي', chargesMofaAed: 950, processingTimeDays: '12-15' },
  { sr: 48, countryEn: 'Luxembourg', countryAr: 'لوكسمبورغ', documentTypeEn: 'Education / Personal', documentTypeAr: 'تعليمي / شخصي', chargesMofaAed: 1800, processingTimeDays: '15-20' },
  { sr: 49, countryEn: 'Malaysia', countryAr: 'ماليزيا', documentTypeEn: 'Educational', documentTypeAr: 'تعليمي', chargesMofaAed: 1350, processingTimeDays: '15-18' },
  { sr: 50, countryEn: 'Malaysia', countryAr: 'ماليزيا', documentTypeEn: 'Personal', documentTypeAr: 'شخصي', chargesMofaAed: 1300, processingTimeDays: '15' },
  { sr: 51, countryEn: 'Mauritius', countryAr: 'موريشيوس', documentTypeEn: 'Education', documentTypeAr: 'تعليمي', chargesMofaAed: 1450, processingTimeDays: '15-18' },
  { sr: 52, countryEn: 'Mauritius', countryAr: 'موريشيوس', documentTypeEn: 'Personal', documentTypeAr: 'شخصي', chargesMofaAed: 1350, processingTimeDays: '15-16' },
  { sr: 53, countryEn: 'Morocco', countryAr: 'المغرب', documentTypeEn: 'Education / Personal', documentTypeAr: 'تعليمي / شخصي', chargesMofaAed: 1550, processingTimeDays: '15-18' },
  { sr: 54, countryEn: 'Netherlands', countryAr: 'هولندا', documentTypeEn: 'Educational', documentTypeAr: 'تعليمي', chargesMofaAed: 1650, processingTimeDays: '18-22' },
  { sr: 55, countryEn: 'Netherlands', countryAr: 'هولندا', documentTypeEn: 'Personal', documentTypeAr: 'شخصي', chargesMofaAed: 1350, processingTimeDays: '15-18' },
  { sr: 56, countryEn: 'New Zealand', countryAr: 'نيوزيلندا', documentTypeEn: 'Education / Personal', documentTypeAr: 'تعليمي / شخصي', chargesMofaAed: 1900, processingTimeDays: '30-40' },
  { sr: 57, countryEn: 'Nigeria', countryAr: 'نيجيريا', documentTypeEn: 'Education', documentTypeAr: 'تعليمي', chargesMofaAed: 1350, processingTimeDays: '15-20' },
  { sr: 58, countryEn: 'Nigeria (Through Consulate)', countryAr: 'نيجيريا (عبر القنصلية)', documentTypeEn: 'Education', documentTypeAr: 'تعليمي', chargesMofaAed: 1150, processingTimeDays: '15-20' },
  { sr: 59, countryEn: 'Nigeria', countryAr: 'نيجيريا', documentTypeEn: 'Personal', documentTypeAr: 'شخصي', chargesMofaAed: 1000, processingTimeDays: '15' },
  { sr: 60, countryEn: 'Norway', countryAr: 'النرويج', documentTypeEn: 'Education / Personal', documentTypeAr: 'تعليمي / شخصي', chargesMofaAed: 1900, processingTimeDays: '20-25' },
  { sr: 61, countryEn: 'Oman', countryAr: 'سلطنة عمان', documentTypeEn: 'Education / Personal', documentTypeAr: 'تعليمي / شخصي', chargesMofaAed: 1275, processingTimeDays: '10-12' },
  { sr: 62, countryEn: 'Pakistan', countryAr: 'باكستان', documentTypeEn: 'Personal', documentTypeAr: 'شخصي', chargesMofaAed: 700, processingTimeDays: '15-20' },
  { sr: 63, countryEn: 'Pakistan (Degree with HEC)', countryAr: 'باكستان (شهادة معتمدة من HEC)', documentTypeEn: 'Education', documentTypeAr: 'تعليمي', chargesMofaAed: 900, processingTimeDays: '25-30' },
  { sr: 64, countryEn: 'Philippines', countryAr: 'الفلبين', documentTypeEn: 'Education', documentTypeAr: 'تعليمي', chargesMofaAed: 1350, processingTimeDays: 'Case Specific' },
  { sr: 65, countryEn: 'Philippines', countryAr: 'الفلبين', documentTypeEn: 'Personal', documentTypeAr: 'شخصي', chargesMofaAed: 1350, processingTimeDays: '40 WD from DFA' },
  { sr: 66, countryEn: 'Poland', countryAr: 'بولندا', documentTypeEn: 'Education / Personal', documentTypeAr: 'تعليمي / شخصي', chargesMofaAed: 1550, processingTimeDays: '25-30' },
  { sr: 67, countryEn: 'Portugal', countryAr: 'البرتغال', documentTypeEn: 'Education / Personal', documentTypeAr: 'تعليمي / شخصي', chargesMofaAed: 1450, processingTimeDays: '18-20' },
  { sr: 68, countryEn: 'Qatar', countryAr: 'قطر', documentTypeEn: 'Education / Personal', documentTypeAr: 'تعليمي / شخصي', chargesMofaAed: 1850, processingTimeDays: '18-20' },
  { sr: 69, countryEn: 'Romania', countryAr: 'رومانيا', documentTypeEn: 'Education / Personal', documentTypeAr: 'تعليمي / شخصي', chargesMofaAed: 1350, processingTimeDays: '15-20' },
  { sr: 70, countryEn: 'Russia', countryAr: 'روسيا', documentTypeEn: 'Educational', documentTypeAr: 'تعليمي', chargesMofaAed: 1550, processingTimeDays: '45-50' },
  { sr: 71, countryEn: 'Russia', countryAr: 'روسيا', documentTypeEn: 'Personal', documentTypeAr: 'شخصي', chargesMofaAed: 1450, processingTimeDays: '45-50' },
  { sr: 72, countryEn: 'Russia (Through Consulate)', countryAr: 'روسيا (عبر القنصلية)', documentTypeEn: 'Education / Personal', documentTypeAr: 'تعليمي / شخصي', chargesMofaAed: 900, processingTimeDays: '6-8' },
  { sr: 73, countryEn: 'Saudi Arabia', countryAr: 'المملكة العربية السعودية', documentTypeEn: 'Personal', documentTypeAr: 'شخصي', chargesMofaAed: 1250, processingTimeDays: '15-18' },
  { sr: 74, countryEn: 'Saudi Arabia', countryAr: 'المملكة العربية السعودية', documentTypeEn: 'Education', documentTypeAr: 'تعليمي', chargesMofaAed: 1450, processingTimeDays: '15-18' },
  { sr: 75, countryEn: 'Seychelles', countryAr: 'سيشل', documentTypeEn: 'Education / Personal', documentTypeAr: 'تعليمي / شخصي', chargesMofaAed: 1450, processingTimeDays: '15-20' },
  { sr: 76, countryEn: 'Singapore', countryAr: 'سنغافورة', documentTypeEn: 'Education / Personal', documentTypeAr: 'تعليمي / شخصي', chargesMofaAed: 1650, processingTimeDays: '15-18' },
  { sr: 77, countryEn: 'Slovakia', countryAr: 'سلوفاكيا', documentTypeEn: 'Education / Personal', documentTypeAr: 'تعليمي / شخصي', chargesMofaAed: 1650, processingTimeDays: '20-22' },
  { sr: 78, countryEn: 'South Africa', countryAr: 'جنوب أفريقيا', documentTypeEn: 'Education (With SAQA)', documentTypeAr: 'تعليمي (مع SAQA)', chargesMofaAed: 1550, processingTimeDays: '60-70' },
  { sr: 79, countryEn: 'South Africa (SAQA Completed)', countryAr: 'جنوب أفريقيا (تم إنجاز SAQA)', documentTypeEn: 'Education', documentTypeAr: 'تعليمي', chargesMofaAed: 1250, processingTimeDays: '35-50' },
  { sr: 80, countryEn: 'South Africa', countryAr: 'جنوب أفريقيا', documentTypeEn: 'Personal', documentTypeAr: 'شخصي', chargesMofaAed: 1250, processingTimeDays: '35-50' },
  { sr: 81, countryEn: 'South Korea', countryAr: 'كوريا الجنوبية', documentTypeEn: 'Education / Personal', documentTypeAr: 'تعليمي / شخصي', chargesMofaAed: 1750, processingTimeDays: '15-18' },
  { sr: 82, countryEn: 'Spain (Public University)', countryAr: 'إسبانيا (جامعة حكومية)', documentTypeEn: 'Education', documentTypeAr: 'تعليمي', chargesMofaAed: 1550, processingTimeDays: '15-18' },
  { sr: 83, countryEn: 'Spain (Private University)', countryAr: 'إسبانيا (جامعة خاصة)', documentTypeEn: 'Education', documentTypeAr: 'تعليمي', chargesMofaAed: 1650, processingTimeDays: '18-20' },
  { sr: 84, countryEn: 'Spain', countryAr: 'إسبانيا', documentTypeEn: 'Personal', documentTypeAr: 'شخصي', chargesMofaAed: 1450, processingTimeDays: '15-18' },
  { sr: 85, countryEn: 'Sri Lanka', countryAr: 'سريلانكا', documentTypeEn: 'Personal', documentTypeAr: 'شخصي', chargesMofaAed: 1400, processingTimeDays: 'Subject to Govt' },
  { sr: 86, countryEn: 'Sweden', countryAr: 'السويد', documentTypeEn: 'Education / Personal', documentTypeAr: 'تعليمي / شخصي', chargesMofaAed: 2200, processingTimeDays: '15-18' },
  { sr: 87, countryEn: 'Switzerland', countryAr: 'سويسرا', documentTypeEn: 'Education / Personal', documentTypeAr: 'تعليمي / شخصي', chargesMofaAed: 1350, processingTimeDays: '16-18' },
  { sr: 88, countryEn: 'Switzerland (Urgent)', countryAr: 'سويسرا (عاجل)', documentTypeEn: 'Education / Personal', documentTypeAr: 'تعليمي / شخصي', chargesMofaAed: 1650, processingTimeDays: '12-14' },
  { sr: 89, countryEn: 'Tunisia', countryAr: 'تونس', documentTypeEn: 'Personal', documentTypeAr: 'شخصي', chargesMofaAed: 1700, processingTimeDays: '15-20' },
  { sr: 90, countryEn: 'Tunisia', countryAr: 'تونس', documentTypeEn: 'Education', documentTypeAr: 'تعليمي', chargesMofaAed: 1750, processingTimeDays: '15-20' },
  { sr: 91, countryEn: 'Turkey', countryAr: 'تركيا', documentTypeEn: 'Education', documentTypeAr: 'تعليمي', chargesMofaAed: 1350, processingTimeDays: '15-18' },
  { sr: 92, countryEn: 'Turkey', countryAr: 'تركيا', documentTypeEn: 'Personal', documentTypeAr: 'شخصي', chargesMofaAed: 1250, processingTimeDays: '15-18' },
  { sr: 93, countryEn: 'Ukraine', countryAr: 'أوكرانيا', documentTypeEn: 'Education / Personal', documentTypeAr: 'تعليمي / شخصي', chargesMofaAed: 1350, processingTimeDays: 'Subject to Govt' },
  { sr: 94, countryEn: 'United Kingdom (on copy)', countryAr: 'المملكة المتحدة (على صورة المستند)', documentTypeEn: 'Educational / Personal', documentTypeAr: 'تعليمي / شخصي', chargesMofaAed: 800, processingTimeDays: '15-18' },
  { sr: 95, countryEn: 'United Kingdom (on original)', countryAr: 'المملكة المتحدة (على الأصل)', documentTypeEn: 'Educational / Personal', documentTypeAr: 'تعليمي / شخصي', chargesMofaAed: 800, processingTimeDays: '16-19' },
  { sr: 96, countryEn: 'United Kingdom (Urgent copy)', countryAr: 'المملكة المتحدة (عاجل صورة)', documentTypeEn: 'Educational / Personal', documentTypeAr: 'تعليمي / شخصي', chargesMofaAed: 950, processingTimeDays: '12-15' },
  { sr: 97, countryEn: 'United Kingdom (Urgent original)', countryAr: 'المملكة المتحدة (عاجل أصل)', documentTypeEn: 'Educational / Personal', documentTypeAr: 'تعليمي / شخصي', chargesMofaAed: 1050, processingTimeDays: '12-15' },
  { sr: 98, countryEn: 'United Kingdom (Fast Track)', countryAr: 'المملكة المتحدة (مسار سريع)', documentTypeEn: 'Educational / Personal', documentTypeAr: 'تعليمي / شخصي', chargesMofaAed: 1500, processingTimeDays: '10-12' },
  { sr: 99, countryEn: 'United Kingdom (Solicitor + Apostille)', countryAr: 'المملكة المتحدة (توثيق محام + أبوستيل)', documentTypeEn: 'Educational / Personal', documentTypeAr: 'تعليمي / شخصي', chargesMofaAed: 400, processingTimeDays: '8-10' },
  { sr: 100, countryEn: 'USA', countryAr: 'الولايات المتحدة الأمريكية', documentTypeEn: 'Education / Personal', documentTypeAr: 'تعليمي / شخصي', chargesMofaAed: 670, processingTimeDays: '4-6 weeks' },
  { sr: 101, countryEn: 'USA (any other country from US)', countryAr: 'الولايات المتحدة (أي دولة أخرى عبر أمريكا)', documentTypeEn: 'Personal', documentTypeAr: 'شخصي', chargesMofaAed: 670, processingTimeDays: '4-6 weeks' },
  { sr: 102, countryEn: 'Uzbekistan', countryAr: 'أوزبكستان', documentTypeEn: 'Education / Personal', documentTypeAr: 'تعليمي / شخصي', chargesMofaAed: 1650, processingTimeDays: '20-21' },
  { sr: 103, countryEn: 'Venezuela (Caracas + Havana)', countryAr: 'فنزويلا (كاراكاس + هافانا)', documentTypeEn: 'Education / Personal', documentTypeAr: 'تعليمي / شخصي', chargesMofaAed: 2100, processingTimeDays: '35-45' },
  { sr: 104, countryEn: 'Vietnam', countryAr: 'فيتنام', documentTypeEn: 'Education / Personal', documentTypeAr: 'تعليمي / شخصي', chargesMofaAed: 1350, processingTimeDays: '15-17' },
  { sr: 105, countryEn: 'Zimbabwe', countryAr: 'زيمبابوي', documentTypeEn: 'Education / Personal', documentTypeAr: 'تعليمي / شخصي', chargesMofaAed: 1450, processingTimeDays: '15-20' },
  { sr: 106, countryEn: 'Kazakhstan', countryAr: 'كازاخستان', documentTypeEn: 'Education / Personal', documentTypeAr: 'تعليمي / شخصي', chargesMofaAed: 2200, processingTimeDays: '20-30' },
  { sr: 107, countryEn: 'Iran', countryAr: 'إيران', documentTypeEn: 'Education / Personal', documentTypeAr: 'تعليمي / شخصي', chargesMofaAed: 950, processingTimeDays: '15-20' },
  { sr: 108, countryEn: 'Finland', countryAr: 'فنلندا', documentTypeEn: 'Education / Personal', documentTypeAr: 'تعليمي / شخصي', chargesMofaAed: 1650, processingTimeDays: '15-17' },
  { sr: 109, countryEn: 'Argentina', countryAr: 'الأرجنتين', documentTypeEn: 'Education / Personal', documentTypeAr: 'تعليمي / شخصي', chargesMofaAed: 1950, processingTimeDays: '45-60' },
  { sr: 110, countryEn: 'Latvia', countryAr: 'لاتفيا', documentTypeEn: 'Education / Personal', documentTypeAr: 'تعليمي / شخصي', chargesMofaAed: 1750, processingTimeDays: '25' },
  { sr: 111, countryEn: 'Lithuania', countryAr: 'ليتوانيا', documentTypeEn: 'Education / Personal', documentTypeAr: 'تعليمي / شخصي', chargesMofaAed: 1750, processingTimeDays: '45-60' },
  { sr: 112, countryEn: 'Uganda', countryAr: 'أوغندا', documentTypeEn: 'Education / Personal', documentTypeAr: 'تعليمي / شخصي', chargesMofaAed: 1350, processingTimeDays: '15-20' },
  { sr: 113, countryEn: 'Syria', countryAr: 'سوريا', documentTypeEn: 'Personal', documentTypeAr: 'شخصي', chargesMofaAed: 1550, processingTimeDays: '20' },
  { sr: 114, countryEn: 'Malta', countryAr: 'مالطا', documentTypeEn: 'Education / Personal', documentTypeAr: 'تعليمي / شخصي', chargesMofaAed: 1750, processingTimeDays: '18-20' },
  { sr: 115, countryEn: 'Moldova', countryAr: 'مولدوفا', documentTypeEn: 'Education / Personal', documentTypeAr: 'تعليمي / شخصي', chargesMofaAed: 1750, processingTimeDays: '30-40' },
  { sr: 116, countryEn: 'Estonia', countryAr: 'إستونيا', documentTypeEn: 'Education / Personal', documentTypeAr: 'تعليمي / شخصي', chargesMofaAed: 1950, processingTimeDays: '20-22' },
  { sr: 117, countryEn: 'Monaco', countryAr: 'موناكو', documentTypeEn: 'Education / Personal', documentTypeAr: 'تعليمي / شخصي', chargesMofaAed: 2450, processingTimeDays: '18-20' },
  { sr: 118, countryEn: 'Tanzania', countryAr: 'تنزانيا', documentTypeEn: 'Education / Personal', documentTypeAr: 'تعليمي / شخصي', chargesMofaAed: 2500, processingTimeDays: '15-20' },
  { sr: 119, countryEn: 'Tajikistan', countryAr: 'طاجيكستان', documentTypeEn: 'Education / Personal', documentTypeAr: 'تعليمي / شخصي', chargesMofaAed: 2100, processingTimeDays: '25-30' },
];

// -------------------------------------------------------------
// 5. CONSULATES & EMBASSIES IN DUBAI (Pages 16 - 17)
// -------------------------------------------------------------
export const CONSULATE_FEES_PRICELIST: ConsulateFeeItem[] = [
  { countryEn: 'Iraq Consulate in Dubai (Commercial)', countryAr: 'قنصلية العراق بدبي (تجاري)', type: 'Commercial', feeAed: 700, turnaroundDays: '2' },
  { countryEn: 'Iraq Consulate in Dubai (Personal)', countryAr: 'قنصلية العراق بدبي (شخصي)', type: 'Personal', feeAed: 200, turnaroundDays: '2' },
  { countryEn: 'Oman Consulate (Commercial)', countryAr: 'قنصلية سلطنة عمان (تجاري)', type: 'Commercial', feeAed: 700 },
  { countryEn: 'Oman Consulate (Personal)', countryAr: 'قنصلية سلطنة عمان (شخصي)', type: 'Personal', feeAed: 300 },
  { countryEn: 'Kuwait (Commercial / Personal)', countryAr: 'قنصلية الكويت (تجاري / شخصي)', type: 'Both', feeAed: 200 },
  { countryEn: 'Egypt (Commercial)', countryAr: 'قنصلية مصر (تجاري)', type: 'Commercial', feeAed: 580 },
  { countryEn: 'Egypt (Personal)', countryAr: 'قنصلية مصر (شخصي)', type: 'Personal', feeAed: 280 },
  { countryEn: 'China (Commercial)', countryAr: 'قنصلية الصين (تجاري)', type: 'Commercial', feeAed: 600 },
  { countryEn: 'China (Personal)', countryAr: 'قنصلية الصين (شخصي)', type: 'Personal', feeAed: 350 },
  { countryEn: 'Croatia', countryAr: 'كرواتيا', type: 'Both', feeAed: 250, turnaroundDays: '4-6' },
  { countryEn: 'Saudi Arabia', countryAr: 'المملكة العربية السعودية', type: 'Both', feeAed: 150, turnaroundDays: '2' },
  { countryEn: 'Bulgaria', countryAr: 'بلغاريا', type: 'Both', feeAed: 200, turnaroundDays: '4-6' },
  { countryEn: 'Qatar', countryAr: 'قطر', type: 'Both', feeAed: 250 },
  { countryEn: 'Germany', countryAr: 'ألمانيا', type: 'Both', feeAed: 350, turnaroundDays: '4-6' },
  { countryEn: 'Yemen', countryAr: 'اليمن', type: 'Both', feeAed: 300 },
  { countryEn: 'Bahrain (Commercial)', countryAr: 'البحرين (تجاري)', type: 'Commercial', feeAed: 450 },
  { countryEn: 'Bahrain (Personal)', countryAr: 'البحرين (شخصي)', type: 'Personal', feeAed: 250 },
  { countryEn: 'Jordan (Commercial)', countryAr: 'الأردن (تجاري)', type: 'Commercial', feeAed: 350 },
  { countryEn: 'Jordan (Personal)', countryAr: 'الأردن (شخصي)', type: 'Personal', feeAed: 250 },
  { countryEn: 'Italy', countryAr: 'إيطاليا', type: 'Both', feeAed: 350 },
  { countryEn: 'Turkey', countryAr: 'تركيا', type: 'Both', feeAed: 175 },
  { countryEn: 'Canada', countryAr: 'كندا', type: 'Both', feeAed: 200 },
  { countryEn: 'Denmark', countryAr: 'الدنمارك', type: 'Both', feeAed: 450 },
  { countryEn: 'Philippines', countryAr: 'الفلبين', type: 'Both', feeAed: 300 },
  { countryEn: 'Bangladesh', countryAr: 'بنغلاديش', type: 'Both', feeAed: 300 },
];
