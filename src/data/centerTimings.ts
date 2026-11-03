/**
 * Official verified operating hours and schedules for the 6 primary government
 * and medical centers located at Karama Business Center / Emirates Secretarial Services (ESS).
 */

export interface DaySchedule {
  dayEn: string;
  dayAr: string;
  hoursEn: string;
  hoursAr: string;
  isOpen: boolean;
  opens?: string; // 24h format e.g. "07:00"
  closes?: string; // 24h format e.g. "21:30"
}

export interface CenterTiming {
  id: string;
  nameEn: string;
  nameAr: string;
  shortName: string;
  summaryBadgeEn: string;
  summaryBadgeAr: string;
  highlightEn: string;
  highlightAr: string;
  category: 'medical' | 'visa' | 'commercial' | 'legal' | 'labor';
  schedule: DaySchedule[];
  schemaOpeningHours: {
    dayOfWeek: string[];
    opens: string;
    closes: string;
  }[];
}

export const CENTER_TIMINGS: CenterTiming[] = [
  {
    id: 'kmfc',
    nameEn: 'Karama Medical Fitness Express service Center - KMFC',
    nameAr: 'مركز الكرامة للياقة الطبية السريعة - KMFC',
    shortName: 'KMFC Medical Fitness',
    summaryBadgeEn: '7:00 AM – 9:30 PM (Open 7 Days)',
    summaryBadgeAr: '7:00 ص – 9:30 م (مفتوح طوال الأسبوع)',
    highlightEn: 'Open every day including Sunday with VIP 2-Hour & Urgent 6-Hour DHA Salem screening.',
    highlightAr: 'مفتوح يومياً بما في ذلك الأحد مع خدمة فحص سالم الطبي السريع (VIP ساعتان و 6 ساعات).',
    category: 'medical',
    schedule: [
      { dayEn: 'Monday', dayAr: 'الإثنين', hoursEn: '7:00 AM – 9:30 PM', hoursAr: '7:00 ص – 9:30 م', isOpen: true, opens: '07:00', closes: '21:30' },
      { dayEn: 'Tuesday', dayAr: 'الثلاثاء', hoursEn: '7:00 AM – 9:30 PM', hoursAr: '7:00 ص – 9:30 م', isOpen: true, opens: '07:00', closes: '21:30' },
      { dayEn: 'Wednesday', dayAr: 'الأربعاء', hoursEn: '7:00 AM – 9:30 PM', hoursAr: '7:00 ص – 9:30 م', isOpen: true, opens: '07:00', closes: '21:30' },
      { dayEn: 'Thursday', dayAr: 'الخميس', hoursEn: '7:00 AM – 9:30 PM', hoursAr: '7:00 ص – 9:30 م', isOpen: true, opens: '07:00', closes: '21:30' },
      { dayEn: 'Friday', dayAr: 'الجمعة', hoursEn: '7:00 AM – 9:30 PM', hoursAr: '7:00 ص – 9:30 م', isOpen: true, opens: '07:00', closes: '21:30' },
      { dayEn: 'Saturday', dayAr: 'السبت', hoursEn: '7:00 AM – 9:30 PM', hoursAr: '7:00 ص – 9:30 م', isOpen: true, opens: '07:00', closes: '21:30' },
      { dayEn: 'Sunday', dayAr: 'الأحد', hoursEn: '7:00 AM – 9:30 PM', hoursAr: '7:00 ص – 9:30 م', isOpen: true, opens: '07:00', closes: '21:30' },
    ],
    schemaOpeningHours: [
      {
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '07:00',
        closes: '21:30',
      },
    ],
  },
  {
    id: 'amer',
    nameEn: 'Amer Karama Center',
    nameAr: 'مركز آمر الكرامة',
    shortName: 'Amer Karama',
    summaryBadgeEn: 'Mon–Sat: 7:00 AM – 10:00 PM | Sun: Closed',
    summaryBadgeAr: 'الإثنين–السبت: 7:00 ص – 10:00 م | الأحد: مغلق',
    highlightEn: 'Official GDRFA License #772 for UAE residency visas, renewals, family visas & entry permits.',
    highlightAr: 'ترخيص إقامة دبي الرسمي رقم 772 لتأشيرات الإقامة، التجديد، كفالة الأسرة وتصاريح الدخول.',
    category: 'visa',
    schedule: [
      { dayEn: 'Monday', dayAr: 'الإثنين', hoursEn: '7:00 AM – 10:00 PM', hoursAr: '7:00 ص – 10:00 م', isOpen: true, opens: '07:00', closes: '22:00' },
      { dayEn: 'Tuesday', dayAr: 'الثلاثاء', hoursEn: '7:00 AM – 10:00 PM', hoursAr: '7:00 ص – 10:00 م', isOpen: true, opens: '07:00', closes: '22:00' },
      { dayEn: 'Wednesday', dayAr: 'الأربعاء', hoursEn: '7:00 AM – 10:00 PM', hoursAr: '7:00 ص – 10:00 م', isOpen: true, opens: '07:00', closes: '22:00' },
      { dayEn: 'Thursday', dayAr: 'الخميس', hoursEn: '7:00 AM – 10:00 PM', hoursAr: '7:00 ص – 10:00 م', isOpen: true, opens: '07:00', closes: '22:00' },
      { dayEn: 'Friday', dayAr: 'الجمعة', hoursEn: '7:00 AM – 10:00 PM', hoursAr: '7:00 ص – 10:00 م', isOpen: true, opens: '07:00', closes: '22:00' },
      { dayEn: 'Saturday', dayAr: 'السبت', hoursEn: '7:00 AM – 10:00 PM', hoursAr: '7:00 ص – 10:00 م', isOpen: true, opens: '07:00', closes: '22:00' },
      { dayEn: 'Sunday', dayAr: 'الأحد', hoursEn: 'Closed', hoursAr: 'مغلق', isOpen: false },
    ],
    schemaOpeningHours: [
      {
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '07:00',
        closes: '22:00',
      },
    ],
  },
  {
    id: 'atlas',
    nameEn: 'Atlas Attestation Services',
    nameAr: 'أطلس لخدمات التصديق والترجمة القانونية',
    shortName: 'Atlas Attestation',
    summaryBadgeEn: 'Mon–Fri: 9:00 AM – 10:00 PM | Sat: 9:00 AM – 4:00 PM | Sun: Closed',
    summaryBadgeAr: 'الإثنين–الجمعة: 9:00 ص – 10:00 م | السبت: 9:00 ص – 4:00 م | الأحد: مغلق',
    highlightEn: 'MOFA, Embassy legalization, Apostille & Ministry of Justice certified translations.',
    highlightAr: 'تصديقات وزارة الخارجية والسفارات والأبوستيل والترجمة القانونية المعتمدة لوزارة العدل.',
    category: 'legal',
    schedule: [
      { dayEn: 'Monday', dayAr: 'الإثنين', hoursEn: '9:00 AM – 10:00 PM', hoursAr: '9:00 ص – 10:00 م', isOpen: true, opens: '09:00', closes: '22:00' },
      { dayEn: 'Tuesday', dayAr: 'الثلاثاء', hoursEn: '9:00 AM – 10:00 PM', hoursAr: '9:00 ص – 10:00 م', isOpen: true, opens: '09:00', closes: '22:00' },
      { dayEn: 'Wednesday', dayAr: 'الأربعاء', hoursEn: '9:00 AM – 10:00 PM', hoursAr: '9:00 ص – 10:00 م', isOpen: true, opens: '09:00', closes: '22:00' },
      { dayEn: 'Thursday', dayAr: 'الخميس', hoursEn: '9:00 AM – 10:00 PM', hoursAr: '9:00 ص – 10:00 م', isOpen: true, opens: '09:00', closes: '22:00' },
      { dayEn: 'Friday', dayAr: 'الجمعة', hoursEn: '9:00 AM – 10:00 PM', hoursAr: '9:00 ص – 10:00 م', isOpen: true, opens: '09:00', closes: '22:00' },
      { dayEn: 'Saturday', dayAr: 'السبت', hoursEn: '9:00 AM – 4:00 PM', hoursAr: '9:00 ص – 4:00 م', isOpen: true, opens: '09:00', closes: '16:00' },
      { dayEn: 'Sunday', dayAr: 'الأحد', hoursEn: 'Closed', hoursAr: 'مغلق', isOpen: false },
    ],
    schemaOpeningHours: [
      {
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '22:00',
      },
      {
        dayOfWeek: ['Saturday'],
        opens: '09:00',
        closes: '16:00',
      },
    ],
  },
  {
    id: 'ded',
    nameEn: 'DED | DUBAI ECONOMY | KARAMA CENTER | أقتصادية دبي',
    nameAr: 'اقتصادية دبي | مركز الكرامة للأعمال (DET)',
    shortName: 'DED Karama Center',
    summaryBadgeEn: 'Mon–Sat: 8:00 AM – 10:00 PM | Sun: 8:00 AM – 8:00 PM',
    summaryBadgeAr: 'الإثنين–السبت: 8:00 ص – 10:00 م | الأحد: 8:00 ص – 8:00 م',
    highlightEn: 'Instant business licenses, commercial permits, MOA notarization & trade license renewals.',
    highlightAr: 'الرخص الفورية، تصاريح الأنشطة التجارية، توثيق عقود التأسيس وتجديد الرخص الاقتصادية.',
    category: 'commercial',
    schedule: [
      { dayEn: 'Monday', dayAr: 'الإثنين', hoursEn: '8:00 AM – 10:00 PM', hoursAr: '8:00 ص – 10:00 م', isOpen: true, opens: '08:00', closes: '22:00' },
      { dayEn: 'Tuesday', dayAr: 'الثلاثاء', hoursEn: '8:00 AM – 10:00 PM', hoursAr: '8:00 ص – 10:00 م', isOpen: true, opens: '08:00', closes: '22:00' },
      { dayEn: 'Wednesday', dayAr: 'الأربعاء', hoursEn: '8:00 AM – 10:00 PM', hoursAr: '8:00 ص – 10:00 م', isOpen: true, opens: '08:00', closes: '22:00' },
      { dayEn: 'Thursday', dayAr: 'الخميس', hoursEn: '8:00 AM – 10:00 PM', hoursAr: '8:00 ص – 10:00 م', isOpen: true, opens: '08:00', closes: '22:00' },
      { dayEn: 'Friday', dayAr: 'الجمعة', hoursEn: '8:00 AM – 10:00 PM', hoursAr: '8:00 ص – 10:00 م', isOpen: true, opens: '08:00', closes: '22:00' },
      { dayEn: 'Saturday', dayAr: 'السبت', hoursEn: '8:00 AM – 10:00 PM', hoursAr: '8:00 ص – 10:00 م', isOpen: true, opens: '08:00', closes: '22:00' },
      { dayEn: 'Sunday', dayAr: 'الأحد', hoursEn: '8:00 AM – 8:00 PM', hoursAr: '8:00 ص – 8:00 م', isOpen: true, opens: '08:00', closes: '20:00' },
    ],
    schemaOpeningHours: [
      {
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '08:00',
        closes: '22:00',
      },
      {
        dayOfWeek: ['Sunday'],
        opens: '08:00',
        closes: '20:00',
      },
    ],
  },
  {
    id: 'golden-visa',
    nameEn: 'Golden Visa UAE - Karama',
    nameAr: 'مركز الإقامة الذهبية بالإمارات - الكرامة',
    shortName: 'Golden Visa UAE Karama',
    summaryBadgeEn: 'Mon–Fri: 7:00 AM – 10:00 PM | Sat: 8:00 AM – 8:00 PM | Sun: Closed',
    summaryBadgeAr: 'الإثنين–الجمعة: 7:00 ص – 10:00 م | السبت: 8:00 ص – 8:00 م | الأحد: مغلق',
    highlightEn: '10-Year UAE Golden Visa nominations for investors, real estate owners, and specialized talents.',
    highlightAr: 'ترشيحات الإقامة الذهبية لمدة 10 سنوات للمستثمرين، ملاك العقارات، وأصحاب المواهب التخصصية.',
    category: 'visa',
    schedule: [
      { dayEn: 'Monday', dayAr: 'الإثنين', hoursEn: '7:00 AM – 10:00 PM', hoursAr: '7:00 ص – 10:00 م', isOpen: true, opens: '07:00', closes: '22:00' },
      { dayEn: 'Tuesday', dayAr: 'الثلاثاء', hoursEn: '7:00 AM – 10:00 PM', hoursAr: '7:00 ص – 10:00 م', isOpen: true, opens: '07:00', closes: '22:00' },
      { dayEn: 'Wednesday', dayAr: 'الأربعاء', hoursEn: '7:00 AM – 10:00 PM', hoursAr: '7:00 ص – 10:00 م', isOpen: true, opens: '07:00', closes: '22:00' },
      { dayEn: 'Thursday', dayAr: 'الخميس', hoursEn: '7:00 AM – 10:00 PM', hoursAr: '7:00 ص – 10:00 م', isOpen: true, opens: '07:00', closes: '22:00' },
      { dayEn: 'Friday', dayAr: 'الجمعة', hoursEn: '7:00 AM – 10:00 PM', hoursAr: '7:00 ص – 10:00 م', isOpen: true, opens: '07:00', closes: '22:00' },
      { dayEn: 'Saturday', dayAr: 'السبت', hoursEn: '8:00 AM – 8:00 PM', hoursAr: '8:00 ص – 8:00 م', isOpen: true, opens: '08:00', closes: '20:00' },
      { dayEn: 'Sunday', dayAr: 'الأحد', hoursEn: 'Closed', hoursAr: 'مغلق', isOpen: false },
    ],
    schemaOpeningHours: [
      {
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '07:00',
        closes: '22:00',
      },
      {
        dayOfWeek: ['Saturday'],
        opens: '08:00',
        closes: '20:00',
      },
    ],
  },
  {
    id: 'tasheel',
    nameEn: 'SELF TASHEEL BUSINESSMEN CENTER',
    nameAr: 'مركز تسهيل لخدمات رجال الأعمال (سيلف تسهيل)',
    shortName: 'Self Tasheel Center',
    summaryBadgeEn: 'Mon–Sat: 8:00 AM – 10:00 PM | Sun: Closed',
    summaryBadgeAr: 'الإثنين–السبت: 8:00 ص – 10:00 م | الأحد: مغلق',
    highlightEn: 'Official MoHRE work permits, electronic labor contracts, quota filings & establishment cards.',
    highlightAr: 'تصاريح العمل الإلكترونية من وزارة الموارد البشرية، عقود العمل، الكوتا، وبطاقات المنشأة.',
    category: 'labor',
    schedule: [
      { dayEn: 'Monday', dayAr: 'الإثنين', hoursEn: '8:00 AM – 10:00 PM', hoursAr: '8:00 ص – 10:00 م', isOpen: true, opens: '08:00', closes: '22:00' },
      { dayEn: 'Tuesday', dayAr: 'الثلاثاء', hoursEn: '8:00 AM – 10:00 PM', hoursAr: '8:00 ص – 10:00 م', isOpen: true, opens: '08:00', closes: '22:00' },
      { dayEn: 'Wednesday', dayAr: 'الأربعاء', hoursEn: '8:00 AM – 10:00 PM', hoursAr: '8:00 ص – 10:00 م', isOpen: true, opens: '08:00', closes: '22:00' },
      { dayEn: 'Thursday', dayAr: 'الخميس', hoursEn: '8:00 AM – 10:00 PM', hoursAr: '8:00 ص – 10:00 م', isOpen: true, opens: '08:00', closes: '22:00' },
      { dayEn: 'Friday', dayAr: 'الجمعة', hoursEn: '8:00 AM – 10:00 PM', hoursAr: '8:00 ص – 10:00 م', isOpen: true, opens: '08:00', closes: '22:00' },
      { dayEn: 'Saturday', dayAr: 'السبت', hoursEn: '8:00 AM – 10:00 PM', hoursAr: '8:00 ص – 10:00 م', isOpen: true, opens: '08:00', closes: '22:00' },
      { dayEn: 'Sunday', dayAr: 'الأحد', hoursEn: 'Closed', hoursAr: 'مغلق', isOpen: false },
    ],
    schemaOpeningHours: [
      {
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '08:00',
        closes: '22:00',
      },
    ],
  },
];

/**
 * Helper to retrieve schema openingHoursSpecification for a given department or service ID
 */
export function getOpeningHoursForDept(deptId?: string) {
  if (deptId === 'salem' || deptId === 'ohc') {
    return [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '07:00',
        closes: '21:30',
      },
    ];
  }
  if (deptId === 'amer' || deptId === 'icp') {
    return [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '07:00',
        closes: '22:00',
      },
    ];
  }
  if (deptId === 'ded' || deptId === 'municipality') {
    return [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '08:00',
        closes: '22:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Sunday'],
        opens: '08:00',
        closes: '20:00',
      },
    ];
  }
  if (deptId === 'tasheel' || deptId === 'tawjeeh' || deptId === 'tadbeer') {
    return [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '08:00',
        closes: '22:00',
      },
    ];
  }
  if (deptId === 'attestation' || deptId === 'notary' || deptId === 'typing') {
    return [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '22:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '09:00',
        closes: '16:00',
      },
    ];
  }
  // Default general center complex hours
  return [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '07:00',
      closes: '22:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Sunday'],
      opens: '07:00',
      closes: '21:30',
    },
  ];
}
