import { ProcessStep, GalleryImage, FaqItem, ReviewItem } from '../types';
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
} from './centerOriginalPhotos';

export {
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
};

// Aliases for backwards compatibility with any existing imports
export const heroCenterImage = fastTrackConcourseImg;
export const vipMajlisImage = vipMajlisLoungeImg;
export const smartDeskImage = icpBiometricKioskImg;
export const mobileVanImage = mobileDoorstepUnitImg;

export interface DepartmentRichDetails {
  aboutStoryEn: string;
  aboutStoryAr: string;
  mandateEn: string;
  mandateAr: string;
  heroImage: string;
  galleryImages: GalleryImage[];
  processSteps: ProcessStep[];
  whyChooseBulletPointsEn: string[];
  whyChooseBulletPointsAr: string[];
  faqs: FaqItem[];
  reviews: ReviewItem[];
  contactDeskEn: string;
  contactDeskAr: string;
}

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

export const COMMON_GALLERY: GalleryImage[] = [
  {
    url: fastTrackConcourseImg,
    titleEn: 'Main Concourse & Fast-Track Navigation Hall',
    titleAr: 'البهو الرئيسي ومسارات الإنجاز السريع الموجهة',
    captionEn: 'Fully integrated ministerial customer concourse in Al Karama, Next to Karama Post Office, Dubai with direct directional guidance to all departments.',
    captionAr: 'منصات خدمة متكاملة في الكرامة بجوار بريد الكرامة مع لوحات إرشادية علوية لكافة الأقسام ومسارات سريعة.',
  },
  {
    url: vipMajlisLoungeImg,
    titleEn: 'Private Executive VIP Majlis Suite',
    titleAr: 'جناح مجلس كبار الشخصيات الخاص',
    captionEn: 'Discreet hospitality lounge with illuminated ceiling cove and camel leather seating for high-net-worth investors and executives.',
    captionAr: 'صالة ضيافة خاصة لرجال الأعمال والمستثمرين بإشراف نخبة من كبار مديري العلاقات الحكومية.',
  },
  {
    url: icpBiometricKioskImg,
    titleEn: 'ICP Certified Biometric Verification Station',
    titleAr: 'منصة البصمة البيومترية المعتمدة من الهيئة الاتحادية',
    captionEn: 'Certified GDRFA and ICP smart biometric kiosk ensuring instant optical fingerprint and facial verification.',
    captionAr: 'محطات بيومترية معتمدة لضمان مسح وتدقيق الجوازات والبيانات الحيوية بدقة فورية.',
  },
  {
    url: salemMedicalImg,
    titleEn: 'Salem Medical Fitness Express Waiting Hall',
    titleAr: 'صالة انتظار مركز سالم للياقة الطبية السريعة',
    captionEn: 'Accredited Salem diagnostic center waiting hall with glowing neon branding, direct phlebotomy and digital X-ray suites.',
    captionAr: 'صالة فحص اللياقة الطبية المعتمدة بشعار سالم النيوني المضيء مع أجنحة سحب الدم والأشعة الرقمية المباشرة.',
  },
  {
    url: mobileDoorstepUnitImg,
    titleEn: 'Mobile Doorstep Government Service Unit',
    titleAr: 'حافلة المعاملات الحكومية والفحص الطبي المتنقلة',
    captionEn: 'Official mobile medical fitness and typing clinic truck operating across Dubai with on-site biometric and testing equipment.',
    captionAr: 'حافلة العيادة المتنقلة الحكومية الرسمية لخدمات الفحص الطبي وتثبيت الإقامات عند عتبة دارك أو برج شركتك في دبي.',
  },
];

/**
 * Guarantees that any service or department process step workflow has exactly 4 steps (01, 02, 03, 04).
 * Prevents lopsided 3-step grids or 5-step wrapping across all service and department pages.
 */
export function ensureFourSteps(
  steps?: ProcessStep[],
  context?: {
    serviceTitleEn?: string;
    serviceTitleAr?: string;
    deptNameEn?: string;
    deptNameAr?: string;
    authorityEn?: string;
    authorityAr?: string;
  }
): ProcessStep[] {
  const authEn = context?.authorityEn || context?.deptNameEn || 'Official Authority';
  const authAr = context?.authorityAr || context?.deptNameAr || 'الجهة الحكومية الرسمية';

  if (!steps || steps.length === 0) {
    return [
      {
        stepNumber: 1,
        titleEn: 'Document Upload & Preliminary Legal Audit',
        titleAr: 'رفع وتدقيق المستندات القانوني المسبق',
        descEn: 'Comprehensive pre-lodgement review of all required documentation to ensure strict regulatory alignment.',
        descAr: 'فحص استباقي شامل لكافة المستندات والبيانات للتحقق من استيفاء المتطلبات الرسمية قبل التقديم.',
        durationEn: '15 - 30 Mins',
        durationAr: '15 - 30 دقيقة',
      },
      {
        stepNumber: 2,
        titleEn: 'Official Ministerial Gateway Lodgement',
        titleAr: 'التقديم بالقناة الحكومية الرسمية المعتمدة',
        descEn: `Direct electronic submission into the official ${authEn} gateway with instant fee voucher generation.`,
        descAr: `تقديم إلكتروني مباشر عبر بوابة ${authAr} وسداد الرسوم وإصدار رقم التتبع الفوري.`,
        durationEn: '1 - 2 Hours',
        durationAr: '1 - 2 ساعة',
      },
      {
        stepNumber: 3,
        titleEn: 'Clearance & Verification Processing',
        titleAr: 'المتابعة والاعتماد والمطابقة الرسمية',
        descEn: `Proactive status tracking through ${authEn} administrative review queues, security approvals, and biometrics.`,
        descAr: `متابعة حثيثة لمسار المعاملة عبر لجان التدقيق الحكومي والأمني والربط البيومتري لـ ${authAr}.`,
        durationEn: '2 - 24 Hours',
        durationAr: '2 - 24 ساعة',
      },
      {
        stepNumber: 4,
        titleEn: 'Official Issuance & Doorstep Handover',
        titleAr: 'الإصدار الرسمي والتسليم المعتمد',
        descEn: 'Official digital certificate generation synchronized with UAE Pass, and delivery of original documentation.',
        descAr: 'إصدار الوثيقة الرقمية المعتمدة والربط مع تطبيق UAE Pass وتوصيل الأوراق الأصلية إلى موقعك.',
        durationEn: 'Same Day - 24h',
        durationAr: 'نفس اليوم - 24 ساعة',
      },
    ];
  }

  // Case 1: Exactly 4 steps
  if (steps.length === 4) {
    return steps.map((s, idx) => ({ ...s, stepNumber: idx + 1 }));
  }

  // Case 2: 3 steps -> Intelligently insert the missing clearance/review step before final issuance
  if (steps.length === 3) {
    const s1 = { ...steps[0], stepNumber: 1 };
    const s2 = { ...steps[1], stepNumber: 2 };
    const oldS3 = steps[2];

    const s3: ProcessStep = {
      stepNumber: 3,
      titleEn: 'Clearance, Approvals & System Synchronization',
      titleAr: 'الموافقات والتدقيق والربط الحكومي',
      descEn: `Regulatory review and priority processing through ${authEn} approval channels and biometric registries.`,
      descAr: `متابعة الاعتمادات والتدقيق التنظيمي عبر مسارات ${authAr} والربط مع قواعد البيانات الرسمية.`,
      durationEn: s2.durationEn ? `Post-${s2.durationEn}` : '2 - 12 Hours',
      durationAr: s2.durationAr ? `بعد ${s2.durationAr}` : '2 - 12 ساعة',
    };

    const s4: ProcessStep = {
      ...oldS3,
      stepNumber: 4,
    };

    return [s1, s2, s3, s4];
  }

  // Case 3: 2 steps -> Synthesize step 3 & 4
  if (steps.length === 2) {
    const s1 = { ...steps[0], stepNumber: 1 };
    const s2 = { ...steps[1], stepNumber: 2 };

    const s3: ProcessStep = {
      stepNumber: 3,
      titleEn: 'Clearance & Ministerial Vetting',
      titleAr: 'التدقيق والاعتماد الحكومي',
      descEn: `Comprehensive review and administrative verification by ${authEn} officers.`,
      descAr: `التدقيق الأمني والإداري والاعتماد من قبل مسؤولي ${authAr}.`,
      durationEn: '12 - 24 Hours',
      durationAr: '12 - 24 ساعة',
    };

    const s4: ProcessStep = {
      stepNumber: 4,
      titleEn: 'Attested Issuance & Delivery',
      titleAr: 'الإصدار الرسمي والتسليم',
      descEn: 'Official certificate delivery and electronic registration on official portals.',
      descAr: 'تسليم الوثائق الرسمية والتحديث الإلكتروني في البوابات الحكومية.',
      durationEn: 'Same Day',
      durationAr: 'نفس اليوم',
    };

    return [s1, s2, s3, s4];
  }

  // Case 4: More than 4 steps -> strictly cap to 4 to preserve standard 4-card grid
  return steps.slice(0, 4).map((s, idx) => ({ ...s, stepNumber: idx + 1 }));
}

