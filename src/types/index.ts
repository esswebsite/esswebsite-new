export type Language = 'en' | 'ar';

export interface ProcessStep {
  stepNumber: number;
  titleEn: string;
  titleAr: string;
  descEn: string;
  descAr: string;
  durationEn?: string;
  durationAr?: string;
}

export interface GalleryImage {
  url: string;
  titleEn: string;
  titleAr: string;
  captionEn: string;
  captionAr: string;
}

export interface FaqItem {
  questionEn: string;
  questionAr: string;
  answerEn: string;
  answerAr: string;
}

export interface ReviewItem {
  name: string;
  roleEn: string;
  roleAr: string;
  companyEn?: string;
  companyAr?: string;
  rating: number;
  date: string;
  commentEn: string;
  commentAr: string;
}

export interface ServiceItem {
  id: string;
  departmentId: string;
  titleEn: string;
  titleAr: string;
  category: 'residency' | 'corporate' | 'labor' | 'legal' | 'medical' | 'vip';
  shortDescEn: string;
  shortDescAr: string;
  govFee: number;
  serviceFee: number;
  vipFastTrackFee: number;
  processingTimeEn: string;
  processingTimeAr: string;
  authorityEn: string;
  authorityAr: string;
  requiredDocumentsEn: string[];
  requiredDocumentsAr: string[];
  keyBenefitsEn: string[];
  keyBenefitsAr: string[];
  isPopular?: boolean;
  isVipEligible?: boolean;
  officialGovUrl?: string;
  officialGovPortalNameEn?: string;
  officialGovPortalNameAr?: string;
  // Extended fields for rich Single Service Page
  detailedOverviewEn?: string;
  detailedOverviewAr?: string;
  legalFrameworkEn?: string;
  legalFrameworkAr?: string;
  eligibilityEn?: string[];
  eligibilityAr?: string[];
  galleryImages?: GalleryImage[];
  processSteps?: ProcessStep[];
  faqs?: FaqItem[];
  reviews?: ReviewItem[];
}

export interface Department {
  id: string;
  code: string;
  nameEn: string;
  nameAr: string;
  subTitleEn: string;
  subTitleAr: string;
  accreditationEn: string;
  accreditationAr: string;
  iconName: string;
  serviceCount: number;
  color: string;
  descriptionEn: string;
  descriptionAr: string;
  logoUrl?: string;
  officialGovUrl?: string;
  officialGovPortalNameEn?: string;
  officialGovPortalNameAr?: string;
  // Extended fields for rich Department Page
  aboutStoryEn?: string;
  aboutStoryAr?: string;
  mandateEn?: string;
  mandateAr?: string;
  heroImage?: string;
  galleryImages?: GalleryImage[];
  processSteps?: ProcessStep[];
  whyChooseBulletPointsEn?: string[];
  whyChooseBulletPointsAr?: string[];
  faqs?: FaqItem[];
  reviews?: ReviewItem[];
}

export interface TrackingRecord {
  reference: string;
  applicantName: string;
  companyName?: string;
  serviceNameEn: string;
  serviceNameAr: string;
  departmentEn: string;
  departmentAr: string;
  submissionDate: string;
  currentStage: 1 | 2 | 3 | 4;
  stages: {
    titleEn: string;
    titleAr: string;
    date: string;
    status: 'completed' | 'in_progress' | 'pending';
    noteEn?: string;
    noteAr?: string;
  }[];
  officerName: string;
  estimatedCompletion: string;
  channel: 'flagship_center' | 'vip_majlis' | 'doorstep_van';
}

export interface BookingSubmission {
  serviceId: string;
  departmentId: string;
  channel: 'flagship' | 'vip_majlis' | 'doorstep_van';
  fullName: string;
  phone: string;
  email: string;
  companyName?: string;
  date: string;
  timeSlot: string;
  address?: string;
  notes?: string;
  referenceNumber: string;
}

export type PageView =
  | { type: 'home' }
  | { type: 'about' }
  | { type: 'departments' }
  | { type: 'gallery' }
  | { type: 'faq' }
  | { type: 'contact' }
  | { type: 'team' }
  | { type: 'ceo' }
  | { type: 'blog'; postSlug?: string }
  | { type: 'awards' }
  | { type: 'clients' }
  | { type: 'events' }
  | { type: 'department'; deptId: string }
  | { type: 'service'; serviceId: string; deptId?: string }
  | { type: 'pricelist' }
  | { type: 'not_found'; requestedPath?: string };

