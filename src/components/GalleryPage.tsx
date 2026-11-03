import React, { useState } from 'react';
import {
  ChevronRight,
  ChevronLeft,
  Sparkles,
  Camera,
  X,
  Calendar,
  PhoneCall,
  MapPin,
  Building2,
  Maximize2,
  CheckCircle2,
  ShieldCheck,
} from 'lucide-react';
import { Language } from '../types';
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
} from '../data/centerOriginalPhotos';
import { GoogleReviewsSection } from './GoogleReviewsSection';
import { CenterVideoShowcase } from './CenterVideoShowcase';

interface GalleryPageProps {
  language: Language;
  onNavigateToHome: () => void;
  onNavigateToContact: () => void;
  onOpenBooking: () => void;
}

interface GalleryItem {
  id: string;
  category: 'facilities' | 'vip' | 'medical-tech' | 'mobile';
  imageUrl: string;
  titleEn: string;
  titleAr: string;
  descEn: string;
  descAr: string;
  locationEn: string;
  locationAr: string;
  badgeEn: string;
  badgeAr: string;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({
  language,
  onNavigateToHome,
  onNavigateToContact,
  onOpenBooking,
}) => {
  const isAr = language === 'ar';
  const ArrowIcon = isAr ? ChevronLeft : ChevronRight;

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 'fast-track-concourse',
      category: 'facilities',
      imageUrl: fastTrackConcourseImg,
      titleEn: 'Central Concourse & Fast-Track Navigation Hall',
      titleAr: 'البهو الرئيسي ومسارات الإنجاز السريع الموجهة',
      descEn: 'Expansive central concourse featuring high-visibility overhead directional signage (Cashier, Amer, Tawjeeh & Tasheel, Salem Medical Fitness, Zajel ICP, VIP Lounge), portrait of HH Sheikh Mohammed bin Rashid Al Maktoum, and fast-track navigation flooring.',
      descAr: 'البهو الرئيسي للمركز بلوحاته الإرشادية العلوية الواضحة (الصندوق، آمر، توجيه وتسهيل، فحص سالم الطبي، زاجل والهيئة الاتحادية، مجلس كبار الشخصيات)، وصورة صاحب السمو الشيخ محمد بن راشد آل مكتوم، ومسارات السير السريعة.',
      locationEn: 'Ground Floor Central Concourse · Karama Business Center',
      locationAr: 'البهو المركزي - الطابق الأرضي · مركز الكرامة للأعمال',
      badgeEn: 'Main Concourse',
      badgeAr: 'البهو الرئيسي',
    },
    {
      id: 'main-entrance-reception',
      category: 'facilities',
      imageUrl: mainEntranceReceptionImg,
      titleEn: 'Grand Reception & Government Service Showcase',
      titleAr: 'المدخل الرئيسي ومكتب استقبال وسعادة المتعاملين',
      descEn: 'Dignified entrance with brass stanchions, red velvet ropes, integrated government service showcase displays (Golden Visa, Dubai Visa, Ejari, DET Licensing, Notary), and customer guidance desk.',
      descAr: 'المدخل الفخم بحواجز الترحيب المذهبة، ولوحات الخدمات الحكومية المتكاملة (الإقامة الذهبية، تأشيرات دبي، إيجاري، اقتصادية دبي، الكاتب العدل)، ومكتب إرشاد المتعاملين.',
      locationEn: 'Main Entrance & Guidance Desk · Karama Business Center',
      locationAr: 'المدخل الرئيسي ومكتب الاستقبال · مركز الكرامة للأعمال',
      badgeEn: 'Entrance & Reception',
      badgeAr: 'المدخل والاستقبال',
    },
    {
      id: 'vip-majlis-suite',
      category: 'vip',
      imageUrl: vipMajlisLoungeImg,
      titleEn: 'Executive VIP Majlis Suite',
      titleAr: 'جناح مجلس كبار الشخصيات الفاخر (VIP Majlis)',
      descEn: 'Ultra-luxurious VIP Majlis with geometric illuminated ceiling cove, gold honeycomb mirror wall, official UAE leadership portraits, and hand-stitched camel-tan leather hospitality seating.',
      descAr: 'مجلس كبار الشخصيات التنفيذي بتصميمه الهندسي المضيء، وجدار المرايا المذهب، وصور القيادة الرشيدة لدولة الإمارات، والمقاعد الجلدية الفاخرة لإنجاز المعاملات بخصوصية وسرية تامة.',
      locationEn: 'Private VIP Hospitality Wing · Karama Business Center',
      locationAr: 'جناح الضيافة VIP الخاص · مركز الكرامة للأعمال',
      badgeEn: 'VIP Majlis Lounge',
      badgeAr: 'مجلس VIP الخاص',
    },
    {
      id: 'golden-visa-suite',
      category: 'vip',
      imageUrl: goldenVisaOfficeImg,
      titleEn: 'Golden Visa Executive Consultation Suite',
      titleAr: 'جناح استشارات الإقامة الذهبية للمستثمرين',
      descEn: 'Dedicated Golden Visa office featuring the embossed gold-leaf "GOLDEN VISA HOLDER" wall, Dubai skyline wall graphic, and deep-buttoned black leather Chesterfield armchairs.',
      descAr: 'مكتب الإقامة الذهبية المتخصص بجدار الذهب البارز "GOLDEN VISA HOLDER"، ورسم أفق دبي المعماري، وأرائك تشيسترفيلد الجلدية الفاخرة لاستقبال المستثمرين وأصحاب الكفاءات.',
      locationEn: 'Golden Visa Investor Suite · Karama Business Center',
      locationAr: 'جناح الإقامة الذهبية · مركز الكرامة للأعمال',
      badgeEn: 'Golden Visa Office',
      badgeAr: 'مكتب الإقامة الذهبية',
    },
    {
      id: 'salem-medical-hall',
      category: 'medical-tech',
      imageUrl: salemMedicalImg,
      titleEn: 'Salem Medical Fitness Express Waiting Hall',
      titleAr: 'مركز الكرامة للياقة الطبية وفحص الإقامة (سالم)',
      descEn: 'Dedicated Salem Medical Fitness waiting hall featuring the glowing blue neon "سالم Salem" logo sign, multi-tier waiting rows, digital ticket calling displays, and direct clinic pathways.',
      descAr: 'صالة انتظار مركز سالم للياقة الطبية للصدر وسحب الدم بشعار "سالم Salem" الأزرق النيوني المضيء، ومقاعد الانتظار المريحة، وشاشات متابعة الدور، ومسارات الفحص المباشرة.',
      locationEn: 'Medical Fitness Express Wing · Karama Medical Center',
      locationAr: 'جناح الفحص الطبي السريع · مركز الكرامة للياقة الطبية',
      badgeEn: 'Salem Medical Express',
      badgeAr: 'فحص سالم الطبي',
    },
    {
      id: 'amer-department-hall',
      category: 'facilities',
      imageUrl: amerDepartmentImg,
      titleEn: 'Authorized Amer Center (GDRFA Dubai) Service Counters',
      titleAr: 'منصات مركز آمر المعتمد (إقامة دبي)',
      descEn: 'Dedicated Amer immigration service hall with official green and red Amer branding, service counters 1, 2, 3, ergonomic customer seating, and automated electronic queuing screens.',
      descAr: 'صالة خدمات آمر المعتمدة من إقامة دبي بالهوية الرسمية الحمراء والخضراء، ومنصات الخدمة 1 و2 و3، ومقاعد المتعاملين المريحة، وشاشات النداء الآلي.',
      locationEn: 'Amer Department Hall · Karama Business Center',
      locationAr: 'صالة خدمات آمر · مركز الكرامة للأعمال',
      badgeEn: 'Amer GDRFA Center',
      badgeAr: 'مركز آمر إقامة دبي',
    },
    {
      id: 'det-department-wing',
      category: 'facilities',
      imageUrl: detDepartmentImg,
      titleEn: 'Department of Economy & Tourism (DET) Commercial Wing',
      titleAr: 'قسم دائرة الاقتصاد والسياحة (DED)',
      descEn: 'Premium DET commercial licensing wing featuring dimensional gold wall typography, official UAE royal portraits, halo ceiling lighting, and customer transaction counters 1 to 5.',
      descAr: 'جناح دائرة الاقتصاد والسياحة الفاخر بالحروف الذهبية البارزة على الجدار، وصور القيادة الرشيدة، والإضاءة الدافئة، ومنصات خدمة الشركات من 1 إلى 5.',
      locationEn: 'DET Licensing Hall · Karama Business Center',
      locationAr: 'صالة تراخيص الشركات · مركز الكرامة للأعمال',
      badgeEn: 'DET / DED Licensing',
      badgeAr: 'اقتصادية وسياحة دبي',
    },
    {
      id: 'icp-smart-kiosk',
      category: 'medical-tech',
      imageUrl: icpBiometricKioskImg,
      titleEn: 'ICP Certified Biometric Verification & Smart Kiosk',
      titleAr: 'محطة البصمة البيومترية الذكية المعتمدة من الهيئة الاتحادية',
      descEn: 'Smart self-service biometric terminal with certified optical fingerprint scanner, high-resolution iris and facial camera, integrated card payment, and UAE Pass synchronization.',
      descAr: 'منصة البصمة الذكية المعتمدة مع قارئ البصمات الضوئي المعتمد، وكاميرا مسح الوجه، وجهاز الدفع المدمج، والربط المباشر مع تطبيق الهوية وUAE Pass.',
      locationEn: 'ICP Biometric Deck · Karama Business Center',
      locationAr: 'منصة البصمة البيومترية · مركز الكرامة للأعمال',
      badgeEn: 'ICP Biometrics',
      badgeAr: 'البصمة البيومترية',
    },
    {
      id: 'tasheel-corporate-desks',
      category: 'facilities',
      imageUrl: corporateDesksImg,
      titleEn: 'Tasheel MoHRE & Corporate Services Counters',
      titleAr: 'منصات تسهيل (وزارة العمل) واستشارات الشركات',
      descEn: 'Corporate desks with dedicated specialists assisting corporate PROs with MoHRE work permits, company formation, 27+ years compliance standards, and tax/audit governance.',
      descAr: 'منصات خدمات الشركات وتسهيل ومستشاري هاي بز لتأسيس الشركات، وإدارة تصاريح العمل وعقود العمل والامتثال الضريبي والمالي بخبرة تتجاوز 27 عاماً.',
      locationEn: 'Tasheel & Corporate Desk · Karama Business Center',
      locationAr: 'قاعة تسهيل وشؤون الشركات · مركز الكرامة للأعمال',
      badgeEn: 'Tasheel MoHRE',
      badgeAr: 'تسهيل ووزارة العمل',
    },
    {
      id: 'kbc-business-hub',
      category: 'vip',
      imageUrl: businessHubImg,
      titleEn: 'Executive Business Hub & Consultation Suite',
      titleAr: 'مركز رجال الأعمال التنفيذي (Business Hub)',
      descEn: 'Executive business consultation suite featuring fluted architectural timber wall paneling, halo illuminated Business Hub insignia, and modern lounge seating for corporate structuring.',
      descAr: 'جناح استشارات الأعمال التنفيذي بالكسوات الخشبية الفاخرة، وشعار Business Hub المضيء، والمقاعد المودرن المريحة لتأسيس الشركات وتوثيق العقود.',
      locationEn: 'Executive Business Hub · Karama Business Center',
      locationAr: 'جناح رجال الأعمال · مركز الكرامة للأعمال',
      badgeEn: 'Executive Business Hub',
      badgeAr: 'مركز رجال الأعمال',
    },
    {
      id: 'mobile-doorstep-unit',
      category: 'mobile',
      imageUrl: mobileDoorstepUnitImg,
      titleEn: 'Mobile Doorstep Government Service Unit',
      titleAr: 'حافلة المعاملات الحكومية والفحص الطبي المتنقلة',
      descEn: 'Real mobile government clinic truck ("Karama Medical Fitness Center - Mobile Medical Fitness Service - Tanfeed / Salem Dubai Health") on Dubai highway with Burj Khalifa backdrop, fully outfitted for mobile visa screening and typing.',
      descAr: 'حافلة العيادة الحكومية المتنقلة الرسمية التابعة لمركز الكرامة للياقة الطبية وخدمات سالم وتنفيد على شوارع دبي وأمام برج خليفة، مجهزة بالكامل للفحص الطبي والطباعة المتنقلة.',
      locationEn: 'Mobile Dispatch Across All Dubai & UAE',
      locationAr: 'خدمة متنقلة لكافة مناطق دبي والإمارات',
      badgeEn: 'Mobile Doorstep Van',
      badgeAr: 'الحافلة المتنقلة',
    },
  ];

  const categories = [
    { id: 'all', labelEn: 'All Photos (11)', labelAr: 'كافة الصور (11)' },
    { id: 'video-tour', labelEn: 'Video Walkthrough', labelAr: 'فيديو الجولة' },
    { id: 'facilities', labelEn: 'Center Concourse & Counters', labelAr: 'البهو ومنصات الخدمة' },
    { id: 'vip', labelEn: 'VIP Majlis & Executive Suites', labelAr: 'مجلس VIP وأجنحة المستثمرين' },
    { id: 'medical-tech', labelEn: 'Salem Medical & Biometrics', labelAr: 'فحص سالم والبصمة الذكية' },
    { id: 'mobile', labelEn: 'Mobile Doorstep Unit', labelAr: 'الحافلة المتنقلة' },
  ];

  const filteredItems = galleryItems.filter(
    (item) => activeCategory === 'all' || item.category === activeCategory
  );

  return (
    <div className="min-h-screen bg-slate-50 pt-18 sm:pt-22 lg:pt-24 pb-20">
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-xs text-slate-500 font-medium">
            <button
              onClick={onNavigateToHome}
              className="hover:text-[#128B94] transition-colors cursor-pointer flex items-center gap-1"
            >
              <span>{isAr ? 'الرئيسية' : 'Home'}</span>
            </button>
            <ArrowIcon className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 font-semibold">{isAr ? 'معرض صور المركز الحقيقي' : 'Authentic Center Gallery'}</span>
          </nav>
        </div>
      </div>

      {/* Hero Header */}
      <section className="bg-white border-b border-slate-200 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-[#128B94] text-xs font-bold uppercase tracking-wider mb-4">
              <Camera className="w-3.5 h-3.5" />
              <span>{isAr ? 'معرض الصور الفوتوغرافية الحقيقية' : 'Authentic Center Photo Gallery'}</span>
              <span aria-hidden="true" className="text-teal-300">·</span>
              <span className="text-slate-600 font-semibold">{isAr ? 'الكرامة، دبي' : 'Al Karama, Dubai'}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {isAr ? 'جولة مصورة حقيقية في مركز الكرامة للأعمال' : 'Inside Karama Business Center & ESS'}
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              {isAr
                ? 'استكشف صوراً أصلية وحصرية لمرافقنا الحكومية والطبية المتكاملة في منطقة الكرامة، بجوار بريد الكرامة بدبي. من البهو الرئيسي وقاعات آمر وتسهيل واقتصادية دبي، إلى جناح فحص اللياقة الطبية (سالم)، ومجلس كبار الشخصيات الفاخر، وحافلة العيادة المتنقلة.'
                : 'Explore authentic, unedited photographs of our consolidated government service complex next to Karama Post Office, Dubai. View our wide central concourse, Amer, DET and Tasheel counters, Salem Medical Fitness waiting hall, VIP Majlis, and mobile doorstep unit.'}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-600">
              <span className="flex items-center gap-1.5 text-[#128B94]">
                <CheckCircle2 className="w-4 h-4" />
                <span>{isAr ? 'صور أصلية موثقة من أرض الواقع' : '100% Genuine Facility Photos'}</span>
              </span>
              <span className="flex items-center gap-1.5 text-slate-700">
                <Building2 className="w-4 h-4 text-[#128B94]" />
                <span>{isAr ? 'مجمع متكامل تحت سقف واحد' : 'All Departments Under One Roof'}</span>
              </span>
              <span className="flex items-center gap-1.5 text-slate-700">
                <ShieldCheck className="w-4 h-4 text-[#128B94]" />
                <span>{isAr ? 'تجهيزات معتمدة وفق معايير دبي 2026' : 'Dubai 2026 Government Standards'}</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Filter Tabs */}
      <div className="sticky top-16 sm:top-20 z-20 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#128B94] text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200/80'
                }`}
              >
                {isAr ? cat.labelAr : cat.labelEn}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* When Video Walkthrough tab is selected */}
      {activeCategory === 'video-tour' && (
        <CenterVideoShowcase
          language={language}
          onOpenBooking={onOpenBooking}
          videoSrc="/assets/videos/center-tour.mp4"
        />
      )}

      {/* Gallery Grid (shown for photo categories) */}
      {activeCategory !== 'video-tour' && (
        <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 group cursor-pointer flex flex-col"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                  <img
                    src={item.imageUrl}
                    alt={isAr ? item.titleAr : item.titleEn}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  {/* Badge */}
                  <div className="absolute top-3 left-3 rtl:left-auto rtl:right-3 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-md bg-[#128B94] text-white text-xs font-bold shadow-xs">
                      {isAr ? item.badgeAr : item.badgeEn}
                    </span>
                  </div>

                  {/* Quick Expand Button */}
                  <div className="absolute bottom-3 right-3 rtl:right-auto rtl:left-3 w-9 h-9 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center text-slate-800 shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4 text-[#128B94]" />
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[#128B94] mb-2">
                      <MapPin className="w-3.5 h-3.5 shrink-0" />
                      <span>{isAr ? item.locationAr : item.locationEn}</span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#128B94] transition-colors leading-snug mb-2">
                      {isAr ? item.titleAr : item.titleEn}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                      {isAr ? item.descAr : item.descEn}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#128B94]">
                    <span>{isAr ? 'عرض الصورة بالحجم الكامل' : 'View Full Resolution'}</span>
                    <ArrowIcon className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded bg-[#128B94] text-white text-xs font-bold">
                  {isAr ? selectedImage.badgeAr : selectedImage.badgeEn}
                </span>
                <span className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#128B94]" />
                  <span>{isAr ? selectedImage.locationAr : selectedImage.locationEn}</span>
                </span>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="w-8 h-8 rounded-full bg-slate-200 hover:bg-slate-300 flex items-center justify-center text-slate-700 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Image */}
            <div className="relative overflow-hidden bg-slate-900 flex items-center justify-center max-h-[55vh]">
              <img
                src={selectedImage.imageUrl}
                alt={isAr ? selectedImage.titleAr : selectedImage.titleEn}
                className="w-full h-auto max-h-[55vh] object-contain"
              />
            </div>

            {/* Modal Body */}
            <div className="p-6 bg-white overflow-y-auto">
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-2">
                {isAr ? selectedImage.titleAr : selectedImage.titleEn}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {isAr ? selectedImage.descAr : selectedImage.descEn}
              </p>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-100">
                <div className="text-xs text-slate-500">
                  {isAr
                    ? 'مركز الكرامة للأعمال · الكرامة (بجوار بريد الكرامة)، دبي'
                    : 'Karama Business Center · Al Karama (Next to Karama Post Office), Dubai'}
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => {
                      setSelectedImage(null);
                      onOpenBooking();
                    }}
                    className="px-4 py-2 rounded-lg bg-[#128B94] text-white hover:bg-[#01403F] text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{isAr ? 'حجز موعد بالمركز' : 'Book Center Visit'}</span>
                  </button>
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="px-4 py-2 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 text-xs font-bold transition-colors cursor-pointer"
                  >
                    {isAr ? 'إغلاق' : 'Close'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Google Reviews Section */}
      <GoogleReviewsSection language={language} />

      {/* Bottom Visit Banner */}
      <section className="bg-gradient-to-r from-[#01403F] to-[#128B94] text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="text-xs uppercase font-extrabold tracking-widest text-teal-300">
                {isAr ? 'تفضل بزيارة مركزنا في الكرامة' : 'Visit Our Center in Karama'}
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                {isAr
                  ? 'أهلاً بكم في مجمع الخدمات الحكومية وسعادة المتعاملين'
                  : 'Experience World-Class Government Hospitality in Person'}
              </h2>
              <p className="text-sm text-teal-100 max-w-2xl leading-relaxed">
                {isAr
                  ? 'يقع المركز في قلب دبي بالكرامة، بجوار بريد الكرامة. نوفر مواقف سيارات مريحة، خدمة صف السيارات VIP، وأسرع إنجاز لكافة المعاملات.'
                  : 'Located centrally in Al Karama, Next to Karama Post Office, Dubai. Convenient parking, VIP valet service, and fast-track processing across all government counters.'}
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <button
                onClick={onOpenBooking}
                className="w-full py-3.5 px-6 rounded-lg bg-white text-[#01403F] hover:bg-teal-50 font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#128B94]" />
                <span>{isAr ? 'حجز موعد زيارة' : 'Book Appointment'}</span>
              </button>
              <button
                onClick={onNavigateToContact}
                className="w-full py-3.5 px-6 rounded-lg bg-teal-900/60 hover:bg-teal-900 text-white border border-teal-300/40 font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <MapPin className="w-4 h-4 text-teal-300" />
                <span>{isAr ? 'خريطة الموقع وساعات العمل' : 'Location Map & Hours'}</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
