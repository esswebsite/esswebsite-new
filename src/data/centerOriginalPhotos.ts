// Authentic, original photographs of Karama Business Center & Emirates Secretarial Services (ESS)
// All 11 original center photos uploaded by the client

import mainBannerBgImg from '../assets/images/Main Banner, bg.png';
import fastTrackConcourseImg from '../assets/images/Fast Track.png';
import mainEntranceReceptionImg from '../assets/images/Random entrace photo.png';
import vipMajlisLoungeImg from '../assets/images/VIP Lounge.png';
import goldenVisaOfficeImg from '../assets/images/Goledn Visa office.png';
import mobileDoorstepUnitImg from '../assets/images/ESS Mobile Doorstep Unit.jpg';
import amerDepartmentImg from '../assets/images/Amer Center dep.png';
import detDepartmentImg from '../assets/images/DET Dep.png';
import salemMedicalImg from '../assets/images/Salem - Medical.png';
import icpBiometricKioskImg from '../assets/images/ICP Certified Biometric Verification.png';
import corporateDesksImg from '../assets/images/Def dep desks.png';
import businessHubImg from '../assets/images/KBC Business Hub.png';

export {
  mainBannerBgImg,
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

export interface CenterOriginalPhotoItem {
  id: string;
  url: string;
  titleEn: string;
  titleAr: string;
  captionEn: string;
  captionAr: string;
  category: 'concourse' | 'government' | 'vip' | 'medical' | 'mobile' | 'business';
  locationBadgeEn: string;
  locationBadgeAr: string;
}

export const ALL_ORIGINAL_CENTER_PHOTOS: CenterOriginalPhotoItem[] = [
  {
    id: 'main-banner-reception',
    url: mainBannerBgImg,
    titleEn: 'Grand Reception & Central Service Concourse',
    titleAr: 'الاستقبال الرئيسي ومركز خدمات رجال الأعمال والطباعة',
    captionEn: 'The flagship reception hall of Karama Business Center & Emirates Secretarial Services LLC, featuring illuminated departmental signage (Reception / الاستقبال, Typing & Documents Services, Salem International Services, Dubai Health), geometric faceted desk, and warm architectural cove lighting.',
    captionAr: 'البهو والاستقبال الرئيسي لمركز الكرامة للأعمال وخدمات الإمارات للسكرتارية ذ.م.م، بلوحاته الإرشادية المضيئة (الاستقبال، خدمات الطباعة والوثائق، سالم للخدمات الدولية، دبي للصحة)، والكونتوار الهندسي المودرن والإضاءة المعمارية الدافئة.',
    category: 'concourse',
    locationBadgeEn: 'Main Reception & Concourse',
    locationBadgeAr: 'الاستقبال والبهو الرئيسي',
  },
  {
    id: 'fast-track-concourse',
    url: fastTrackConcourseImg,
    titleEn: 'Central Concourse & Fast-Track Navigation Hall',
    titleAr: 'البهو الرئيسي ومسارات الإنجاز السريع الموجهة',
    captionEn: 'Main central concourse featuring high-visibility overhead directional signage (Cashier, Amer, Tawjeeh & Tasheel, Salem Medical Fitness, Zajel ICP, VIP Lounge), portrait of HH Sheikh Mohammed bin Rashid Al Maktoum, and fast-track navigation flooring.',
    captionAr: 'البهو الرئيسي للمركز بلوحاته الإرشادية العلوية الواضحة (الصندوق، آمر، توجيه وتسهيل، فحص سالم الطبي، زاجل والهيئة الاتحادية، مجلس كبار الشخصيات)، وصورة صاحب السمو الشيخ محمد بن راشد آل مكتوم، ومسارات السير السريعة.',
    category: 'concourse',
    locationBadgeEn: 'Ground Floor Concourse',
    locationBadgeAr: 'البهو الرئيسي - الطابق الأرضي',
  },
  {
    id: 'main-entrance-reception',
    url: mainEntranceReceptionImg,
    titleEn: 'Grand Entrance & Welcome Reception',
    titleAr: 'المدخل الرئيسي ومكتب استقبال وسعادة المتعاملين',
    captionEn: 'Dignified entrance with brass stanchions, red velvet ropes, integrated government service showcase displays (Golden Visa, Dubai Visa, Ejari, DET Licensing, Notary), and customer guidance desk.',
    captionAr: 'المدخل الفخم بحواجز الترحيب المذهبة، ولوحات الخدمات الحكومية المتكاملة (الإقامة الذهبية، تأشيرات دبي، إيجاري، اقتصادية دبي، الكاتب العدل)، ومكتب إرشاد المتعاملين.',
    category: 'concourse',
    locationBadgeEn: 'Main Entrance & Reception',
    locationBadgeAr: 'المدخل الرئيسي والاستقبال',
  },
  {
    id: 'vip-majlis-lounge',
    url: vipMajlisLoungeImg,
    titleEn: 'Ultra-Luxury VIP Majlis Lounge',
    titleAr: 'مجلس كبار الشخصيات الفاخر (VIP Majlis)',
    captionEn: 'Executive VIP Majlis with geometric illuminated ceiling cove, gold honeycomb mirror wall, official UAE leadership portraits, and hand-stitched camel-tan leather hospitality seating for discreet transaction handling.',
    captionAr: 'مجلس كبار الشخصيات التنفيذي بتصميمه الهندسي المضيء، وجدار المرايا المذهب، وصور القيادة الرشيدة لدولة الإمارات، والمقاعد الجلدية الفاخرة لإنجاز المعاملات بخصوصية وسرية تامة.',
    category: 'vip',
    locationBadgeEn: 'VIP Executive Wing',
    locationBadgeAr: 'جناح كبار الشخصيات',
  },
  {
    id: 'golden-visa-office',
    url: goldenVisaOfficeImg,
    titleEn: 'Golden Visa Executive Consultation Suite',
    titleAr: 'جناح استشارات الإقامة الذهبية للمستثمرين',
    captionEn: 'Dedicated Golden Visa office featuring the embossed gold-leaf "GOLDEN VISA HOLDER" wall, Dubai skyline wall graphic, and deep-buttoned black leather Chesterfield armchairs.',
    captionAr: 'مكتب الإقامة الذهبية المتخصص بجدار الذهب البارز "GOLDEN VISA HOLDER"، ورسم أفق دبي المعماري، وأرائك تشيسترفيلد الجلدية الفاخرة لاستقبال المستثمرين وأصحاب الكفاءات.',
    category: 'vip',
    locationBadgeEn: 'Golden Visa Suite',
    locationBadgeAr: 'جناح الإقامة الذهبية',
  },
  {
    id: 'mobile-doorstep-unit',
    url: mobileDoorstepUnitImg,
    titleEn: 'Mobile Doorstep Government Service Unit',
    titleAr: 'حافلة المعاملات الحكومية والفحص الطبي المتنقلة',
    captionEn: 'Real mobile government clinic truck ("Karama Medical Fitness Center - Mobile Medical Fitness Service - Tanfeed / Salem Dubai Health") on Dubai highway with Burj Khalifa backdrop, fully outfitted for mobile visa screening and typing.',
    captionAr: 'حافلة العيادة الحكومية المتنقلة الرسمية التابعة لمركز الكرامة للياقة الطبية وخدمات سالم وتنفيد على شوارع دبي وأمام برج خليفة، مجهزة بالكامل للفحص الطبي والطباعة المتنقلة.',
    category: 'mobile',
    locationBadgeEn: 'On-Demand Dubai-Wide',
    locationBadgeAr: 'خدمة متنقلة لكافة مناطق دبي',
  },
  {
    id: 'amer-department',
    url: amerDepartmentImg,
    titleEn: 'Authorized Amer Center (GDRFA Dubai) Counters',
    titleAr: 'منصات مركز آمر المعتمد (إقامة دبي)',
    captionEn: 'Dedicated Amer immigration service hall with official green and red Amer branding, service counters 1, 2, 3, ergonomic customer seating, and automated electronic queuing screens.',
    captionAr: 'صالة خدمات آمر المعتمدة من إقامة دبي بالهوية الرسمية الحمراء والخضراء، ومنصات الخدمة 1 و2 و3، ومقاعد المتعاملين المريحة، وشاشات النداء الآلي.',
    category: 'government',
    locationBadgeEn: 'Amer Service Hall',
    locationBadgeAr: 'قاعة خدمات آمر',
  },
  {
    id: 'det-department',
    url: detDepartmentImg,
    titleEn: 'Department of Economy & Tourism (DET) Wing',
    titleAr: 'قسم دائرة الاقتصاد والسياحة (DED)',
    captionEn: 'Premium DET commercial licensing wing featuring dimensional gold wall typography, official UAE royal portraits, halo ceiling lighting, and customer transaction counters 1 to 5.',
    captionAr: 'جناح دائرة الاقتصاد والسياحة الفاخر بالحروف الذهبية البارزة على الجدار، وصور القيادة الرشيدة، والإضاءة الدافئة، ومنصات خدمة الشركات من 1 إلى 5.',
    category: 'government',
    locationBadgeEn: 'DET Commercial Wing',
    locationBadgeAr: 'جناح التراخيص والشركات',
  },
  {
    id: 'salem-medical-center',
    url: salemMedicalImg,
    titleEn: 'Salem Medical Fitness Express Center',
    titleAr: 'مركز الكرامة للياقة الطبية وفحص الإقامة (سالم)',
    captionEn: 'Dedicated Salem Medical Fitness waiting hall featuring the glowing blue neon "سالم Salem" logo sign, multi-tier waiting rows, digital ticket calling displays, and direct clinic pathways.',
    captionAr: 'صالة انتظار مركز سالم للياقة الطبية للصدر وسحب الدم بشعار "سالم Salem" الأزرق النيوني المضيء، ومقاعد الانتظار المريحة، وشاشات متابعة الدور، ومسارات الفحص المباشرة.',
    category: 'medical',
    locationBadgeEn: 'Medical Fitness Express Wing',
    locationBadgeAr: 'جناح الفحص الطبي السريع',
  },
  {
    id: 'icp-biometrics-kiosk',
    url: icpBiometricKioskImg,
    titleEn: 'ICP Certified Biometric Verification & Smart Kiosk',
    titleAr: 'محطة البصمة البيومترية الذكية المعتمدة من الهيئة الاتحادية',
    captionEn: 'Smart self-service biometric terminal with certified optical fingerprint scanner, high-resolution iris and facial camera, integrated card payment, and UAE Pass synchronization.',
    captionAr: 'منصة البصمة الذكية المعتمدة مع قارئ البصمات الضوئي المعتمد، وكاميرا مسح الوجه، وجهاز الدفع المدمج، والربط المباشر مع تطبيق الهوية وUAE Pass.',
    category: 'government',
    locationBadgeEn: 'ICP Biometrics Deck',
    locationBadgeAr: 'منصة البصمة البيومترية',
  },
  {
    id: 'corporate-tasheel-desks',
    url: corporateDesksImg,
    titleEn: 'Tasheel MoHRE & Highbiz Corporate Services Counters',
    titleAr: 'منصات تسهيل (وزارة العمل) واستشارات الشركات Highbiz',
    captionEn: 'Corporate desks with dedicated specialists assisting corporate PROs with MoHRE work permits, company formation, 27+ years compliance standards, and tax/audit governance.',
    captionAr: 'منصات خدمات الشركات وتسهيل ومستشاري هاي بز لتأسيس الشركات، وإدارة تصاريح العمل وعقود العمل والامتثال الضريبي والمالي بخبرة تتجاوز 27 عاماً.',
    category: 'business',
    locationBadgeEn: 'Tasheel & Corporate Hub',
    locationBadgeAr: 'قاعة تسهيل وشؤون الشركات',
  },
  {
    id: 'kbc-business-hub',
    url: businessHubImg,
    titleEn: 'Executive Business Hub & Legal Consultation Suite',
    titleAr: 'مركز رجال الأعمال التنفيذي (Business Hub) والاستشارات',
    captionEn: 'Executive business consultation suite featuring fluted architectural timber wall paneling, halo illuminated Business Hub insignia, and modern lounge seating for corporate structuring.',
    captionAr: 'جناح استشارات الأعمال التنفيذي بالكسوات الخشبية الفاخرة، وشعار Business Hub المضيء، والمقاعد المودرن المريحة لتأسيس الشركات وتوثيق العقود.',
    category: 'business',
    locationBadgeEn: 'Executive Business Hub',
    locationBadgeAr: 'مركز رجال الأعمال التنفيذي',
  },
];
