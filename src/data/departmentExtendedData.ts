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
import { AMER_SERVICES_RICH_MAP } from './amerServicesExtendedData';
import { DET_SERVICES_RICH_MAP } from './detServicesExtendedData';
import { TASHEEL_SERVICES_RICH_MAP } from './tasheelServicesExtendedData';
import { ICP_DM_SERVICES_RICH_MAP } from './icpDmServicesExtendedData';
import { LEGAL_DEPARTMENT_RICH_MAP, LEGAL_SERVICES_RICH_MAP } from './legalNotaryAttestationExtendedData';
import {
  SALEM_RTA_TAWJEEH_TADBEER_VIP_DEPARTMENT_RICH_MAP,
  SALEM_RTA_TAWJEEH_TADBEER_VIP_SERVICES_RICH_MAP,
} from './salemRtaTawjeehTadbeerVipExtendedData';

import {
  DepartmentRichDetails,
  ServiceRichDetails,
  COMMON_GALLERY,
  ensureFourSteps,
} from './extendedDataCommons';

export {
  type DepartmentRichDetails,
  type ServiceRichDetails,
  COMMON_GALLERY,
  ensureFourSteps,
};

export const DEPARTMENT_RICH_MAP: Record<string, DepartmentRichDetails> = {
  amer: {
    heroImage: amerDepartmentImg,
    aboutStoryEn:
      'Amer & GDRFA Dubai at Emirates Secretariat Services represents the benchmark for immigration, residency, and Golden Visa processing in the United Arab Emirates. Operating under authorized GDRFA Center License #772, our facility features direct API access into the General Directorate of Residency and Foreigners Affairs smart core. This enables real-time status changes, immediate entry permit generation, and priority residency approvals without unnecessary delays or bureaucratic obstacles.',
    aboutStoryAr:
      'يمثل مركز آمر وإقامة دبي لدى الإمارات لخدمات رجال الأعمال المعيار الرائد لإجراءات الهجرة والإقامة والتأشيرات الذهبية بدولة الإمارات. يعمل المركز بموجب الترخيص الحكومي رقم 772 المعتمد من الإدارة العامة للإقامة وشؤون الأجانب بدبي، ويمتلك ربطاً مباشراً بالأنظمة الذكية، مما يتيح إنجاز تعديل الوضع الفوري، إصدار أذونات الدخول وتثبيت الإقامات بدقة متناهية وسرعة قياسية.',
    mandateEn: 'Authorized processing of all Dubai residency permits, entry permits, investor visas, Golden Visas, family sponsorship, status adjustments, and fine reduction petitions under official GDRFA Dubai authority.',
    mandateAr: 'معالجة وتوثيق كافة معاملات الإقامة بدبي، أذونات الدخول، إقامات المستثمرين، التأشيرة الذهبية، كفالة الأسرة، تعديل الوضع، وطلبات الإعفاء من الغرامات المعتمدة من إقامة دبي.',
    galleryImages: [
      {
        url: amerDepartmentImg,
        titleEn: 'Authorized Amer Government Hall',
        titleAr: 'صالة مركز آمر المعتمد بدبي',
        captionEn: 'Direct government processing desks handling 1,500+ daily GDRFA transactions with zero queue wait times.',
        captionAr: 'منصات إنجاز حكومية مباشرة تخدم أكثر من 1,500 معاملة يومياً دون أي ازدحام.',
      },
      {
        url: goldenVisaOfficeImg,
        titleEn: 'Golden Visa & Investor Suite',
        titleAr: 'مجلس الإقامة الذهبية والمستثمرين',
        captionEn: 'Private executive suites for real estate investors and entrepreneurs completing 10-year residency processing.',
        captionAr: 'أجنحة خاصة لمستثمري العقارات ورواد الأعمال لإنجاز الإقامة الذهبية لمدة 10 سنوات.',
      },
      {
        url: icpBiometricKioskImg,
        titleEn: 'ICP Biometric & Smart Verification',
        titleAr: 'منظومة القناة الذكية والبصمة البيومترية',
        captionEn: 'Direct ministerial gateway ensuring error-free data validation and instantaneous official GDRFA receipt generation.',
        captionAr: 'بوابة إلكترونية وزارية مباشرة للتحقق الفوري من صحة البيانات وإصدار إيصالات الدفع الرسمية.',
      },
      {
        url: mobileDoorstepUnitImg,
        titleEn: 'Amer Doorstep Mobile Van',
        titleAr: 'حافلة آمر المتنقلة لخدمات الإقامة',
        captionEn: 'On-demand mobile immigration processing dispatched across Palm Jumeirah, Downtown Dubai, and Emirates Hills.',
        captionAr: 'خدمة معاملات الإقامة المتنقلة عند الطلب في نخلة جميرا، وسط مدينة دبي وتلال الإمارات.',
      },
    ],
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'Document Audit & Pre-Check',
        titleAr: 'تدقيق المستندات والمراجعة المسبقة',
        descEn: 'Our senior immigration typists review passport validity, title deeds, contracts, and UAE Pass credentials to ensure thorough preliminary compliance review.',
        descAr: 'يقوم كبار خبراء الإقامة بمراجعة صلاحية الجواز، صكوك الملكية، العقود والبيانات لضمان اكتمال كافة متطلبات الملف.',
        durationEn: '30 - 60 Mins',
        durationAr: '30 - 60 دقيقة',
      },
      {
        stepNumber: 2,
        titleEn: 'Ministerial E-Channel Lodgement',
        titleAr: 'التقديم بالقناة الإلكترونية الوزارية',
        descEn: 'Electronic lodgement directly into GDRFA Dubai internal servers with instantaneous government payment settlement and application tracking token.',
        descAr: 'إرسال مباشر إلى خوادم إقامة دبي مع سداد الرسوم الحكومية الرسمية وإصدار رقم التتبع الفوري.',
        durationEn: '1 - 2 Hours',
        durationAr: '1 - 2 ساعة',
      },
      {
        stepNumber: 3,
        titleEn: 'Security Approval & Biometrics',
        titleAr: 'الموافقة الأمنية وحجز البصمة',
        descEn: 'Fast-track tracking of security clearance followed by VIP express scheduling for DHA medical fitness and ICP biometrics.',
        descAr: 'متابعة عاجلة للموافقة الأمنية وحجز موعد VIP فوري للفحص الطبي وبصمة الهوية الاتحادية.',
        durationEn: '12 - 24 Hours',
        durationAr: '12 - 24 ساعة',
      },
      {
        stepNumber: 4,
        titleEn: 'Residency Issuance & Delivery',
        titleAr: 'إصدار الإقامة والتسليم المعتمد',
        descEn: 'Instant digital residency permit generation on UAE Pass with physical Emirates ID dispatch directly to your residence or corporate address.',
        descAr: 'إصدار تصريح الإقامة الرقمي المعتمد فوراً على تطبيق UAE Pass وتوصيل بطاقة الهوية الأصلية إلى بابك.',
        durationEn: 'Same Day / 24h',
        durationAr: 'نفس اليوم / 24 ساعة',
      },
    ],
    whyChooseBulletPointsEn: [
      'Official GDRFA Dubai Licensed Amer Center (#772) with direct server API access',
      'Preliminary Legal Review: Multi-point document pre-audit before government fee settlement',
      'Dedicated private relationship officer assigned to every personal and corporate file',
      'VIP Fast-Track Lanes: Same-day medical fitness and express biometric appointments',
      'Transparent government tariffs: Official Dubai government payment receipts provided immediately',
      'On-demand mobile luxury van service available across all Dubai residential and commercial districts',
    ],
    whyChooseBulletPointsAr: [
      'مركز آمر معتمد رسمياً من إقامة دبي (ترخيص #772) بربط تقني مباشر',
      'تدقيق قانوني مسبق: مراجعة شاملة للمستندات والشروط قبل سداد أي رسوم رسمية',
      'مدير علاقات مخصص لكل معاملة فردية أو ملف شركات للمتابعة خطوة بخطوة',
      'مسارات VIP سريعة للفحص الطبي وبصمة الهوية في نفس اليوم',
      'شفافية تامة: إيصالات الدفع الحكومية الرسمية الصادرة من إقامة دبي تسلم فوراً',
      'حافلة متنقلة فاخرة تصلك أينما كنت في دبي دون الحاجة لمغادرة منزلك أو مكتبك',
    ],
    faqs: [
      {
        questionEn: 'How long does a 10-Year Golden Visa take through your Amer Center?',
        questionAr: 'كم تستغرق معاملة الإقامة الذهبية 10 سنوات عبر مركزكم؟',
        answerEn: 'For qualifying real estate investors (AED 2M+ valuation) or eligible executives, initial approval is typically granted within 24 to 48 hours. Medical fitness and biometric issuance are completed in VIP priority queues, enabling final visa stamping within 2 to 3 business days.',
        answerAr: 'للمستثمرين العقاريين (بقيمة 2 مليون درهم فما فوق) أو التنفيذيين المؤهلين، تصدر الموافقة المبدئية خلال 24 إلى 48 ساعة. ويتم إنجاز الفحص الطبي والبصمة عبر مسار VIP لإتمام التثبيت النهائي خلال يومين إلى 3 أيام عمل.',
      },
      {
        questionEn: 'Can I renew my residency if my visa has already expired?',
        questionAr: 'هل يمكنني تجديد الإقامة إذا كانت التأشيرة منتهية الصلاحية بالفعل؟',
        answerEn: 'Yes. During the official 30-day or 60-day grace period, we can renew your residency without any penalty. If you have exceeded the grace period, our legal typists can submit a formal GDRFA fine exemption or reduction request to settle overstay fees.',
        answerAr: 'نعم. خلال فترة السماح القانونية (30 أو 60 يوماً)، نجدد الإقامة دون أي غرامة. وإذا تجاوزت فترة السماح، يقدم خبراؤنا طلباً رسمياً لإعفاء أو تخفيض غرامات التأخير لدى إقامة دبي لتسوية الوضع قانونياً.',
      },
      {
        questionEn: 'What is the salary requirement to sponsor family members in Dubai?',
        questionAr: 'ما هو الحد الأدنى للراتب المطلوب لكفالة الأسرة في دبي؟',
        answerEn: 'The standard minimum monthly salary required to sponsor a spouse and children is AED 4,000 (or AED 3,000 plus company-provided accommodation) backed by a registered Ejari tenancy contract. For sponsoring parents, the minimum salary is AED 20,000.',
        answerAr: 'الحد الأدنى للراتب الشهري لكفالة الزوجة والأبناء هو 4,000 درهم (أو 3,000 درهم مع سكن موفر من الشركة) مع عقد إيجاري مصدق. أما كفالة الوالدين فتتطلب راتباً لا يقل عن 20,000 درهم.',
      },
      {
        questionEn: 'Do you provide official government receipts for all Amer fees?',
        questionAr: 'هل تقدمون إيصالات حكومية رسمية لجميع رسوم آمر؟',
        answerEn: 'Yes, 100%. Every transaction generates an official GDRFA Dubai e-receipt detailing the exact government fee, bank settlement reference, and administrative fees. We maintain absolute billing transparency.',
        answerAr: 'نعم بنسبة 100%. كل معاملة تصدر لها إيصال إلكتروني رسمي من إقامة دبي يوضح الرسوم الحكومية ورقم المرجع المصرفي ورسوم الطباعة بدقة وشفافية كاملة.',
      },
    ],
    reviews: [
      {
        name: 'Mansoor Al-Nuaimi',
        roleEn: 'Real Estate Portfolio Investor',
        roleAr: 'مستثمر محافظ عقارية',
        companyEn: 'Palm Jumeirah Asset Management',
        companyAr: 'إدارة أصول نخلة جميرا',
        rating: 5,
        date: 'October 2026',
        commentEn: 'Exceptional service for my 10-Year Golden Visa. The entire process from title deed audit to digital visa stamping took under 48 hours. The private VIP Majlis experience was flawless.',
        commentAr: 'خدمة استثنائية لإنجاز إقامتي الذهبية لمدة 10 سنوات. تم التدقيق والاعتماد والتثبيت خلال أقل من 48 ساعة. تجربة مجلس كبار الشخصيات كانت راقية للغاية.',
      },
      {
        name: 'Elena Rostova',
        roleEn: 'Managing Director',
        roleAr: 'المدير التنفيذي',
        companyEn: 'Apex Horizon Technologies LLC',
        companyAr: 'أبكس هورايزون تكنولوجيز',
        rating: 5,
        date: 'September 2026',
        commentEn: 'We processed 14 employment residency visas for our tech staff in a single batch. Zero errors, zero rejections, and dedicated account management. Highly recommended Amer desk.',
        commentAr: 'أنجزنا 14 تأشيرة إقامة عمل لكوادرنا التقنية في دفعة واحدة بدون أي خطأ أو رفض ومع مدير حسابات مخصص. أفضل مركز آمر تعاملت معه في دبي.',
      },
    ],
    contactDeskEn: 'Amer Department Direct Hotline: +971 4 300 8810 · Dedicated Amer Desk: Floor 1, Karama Business Center',
    contactDeskAr: 'الخط المباشر لقسم آمر: 8810 300 4 971+ · مكتب آمر المخصص: الطابق الأول، مركز الكرامة للأعمال',
  },

  tasheel: {
    heroImage: corporateDesksImg,
    aboutStoryEn:
      'Tasheel (MoHRE) services at Emirates Secretariat Services provide enterprise-grade labor compliance, electronic work permit issuance, and corporate establishment management. As an accredited MoHRE partner (License #4108), our certified labor consultants handle complex quota applications, electronic job offer drafting, and Wages Protection System (WPS) compliance audits for over 4,500 active Dubai commercial entities.',
    aboutStoryAr:
      'تقدم خدمات تسهيل (وزارة الموارد البشرية والتوطين) لدى الإمارات لخدمات رجال الأعمال حلولاً متكاملة لإدارة تصاريح العمل والامتثال العمالي للشركات. بصفتنا شريكاً معتمداً من الوزارة (ترخيص #4108)، يتولى مستشارونا إدارة كوتا العمالة، صياغة عقود العمل الإلكترونية، وتدقيق نظام حماية الأجور (WPS) لأكثر من 4,500 شركة قائمة في دبي.',
    mandateEn: 'Comprehensive corporate labor affairs including new work permits, labor contract renewals, quota requests, MoHRE establishment cards, absconding withdrawals, and wage compliance auditing.',
    mandateAr: 'إدارة شاملة لشؤون العمالة والشركات تشمل تصاريح العمل، تجديد العقود العمالية، تعديل الكوتا، بطاقة المنشأة، وتسوية المخالفات العمالية المعتمدة من وزارة العمل.',
    galleryImages: [
      {
        url: corporateDesksImg,
        titleEn: 'Corporate MoHRE Submission Counters',
        titleAr: 'منصات إنجاز معاملات وزارة الموارد البشرية',
        captionEn: 'Dedicated corporate typing stations with high-speed MoHRE e-gateways for rapid quota and permit issuance.',
        captionAr: 'منصات متخصصة للشركات مزودة ببوابات إلكترونية فائقة السرعة لوزارة العمل لإصدار الكوتا والتصاريح.',
      },
      {
        url: fastTrackConcourseImg,
        titleEn: 'Main Concourse & Corporate Pathway',
        titleAr: 'البهو الرئيسي ومسار شؤون الشركات',
        captionEn: 'Certified labor auditors reviewing employment agreements for alignment with latest UAE Federal Labor Decrees.',
        captionAr: 'مدققون عماليون معتمدون لمراجعة عقود العمل وضمان مطابقتها للمرسوم بقانون الاتحادي للعمل.',
      },
      {
        url: businessHubImg,
        titleEn: 'Executive Business Hub Consultation Suite',
        titleAr: 'جناح استشارات الموارد البشرية التنفيذية',
        captionEn: 'Private meeting rooms for HR directors navigating bulk workforce recruitments and executive quotas.',
        captionAr: 'قاعات اجتماعات خاصة لمديري الموارد البشرية لتنسيق توظيف الكوادر الكبيرة وكوتا المنشآت.',
      },
      {
        url: mobileDoorstepUnitImg,
        titleEn: 'Corporate On-Site Mobile Unit',
        titleAr: 'حافلة المعاملات الميدانية للشركات',
        captionEn: 'Direct dispatch to your company headquarters for corporate contract signings and biometric verification.',
        captionAr: 'إرسال مباشر إلى مقر شركتك لتوقيع العقود العمالية والتحقق البيومتري دون مغادرة المكتب.',
      },
    ],
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'Establishment & Quota Audit',
        titleAr: 'تدقيق بطاقة المنشأة والكوتا',
        descEn: 'Inspection of company MoHRE tier, Emiratisation targets (Tawteen), and available quota balance before submission.',
        descAr: 'فحص تصنيف المنشأة، مستهدفات التوطين، ورصيد الكوتا الشاغر قبل البدء في التقديم.',
        durationEn: '1 - 2 Hours',
        durationAr: '1 - 2 ساعة',
      },
      {
        stepNumber: 2,
        titleEn: 'Electronic Job Offer Drafting',
        titleAr: 'صياغة وتوقيع عرض العمل الإلكتروني',
        descEn: 'Drafting unified MoHRE standard job offer letters and dispatching digital signature tokens to employee and employer.',
        descAr: 'إعداد عرض العمل الموحد لوزارة العمل وإرسال رابط التوقيع الرقمي للموظف وصاحب العمل.',
        durationEn: '2 - 4 Hours',
        durationAr: '2 - 4 ساعات',
      },
      {
        stepNumber: 3,
        titleEn: 'Work Permit Approval & Fee Settlement',
        titleAr: 'اعتماد تصريح العمل وسداد الرسوم',
        descEn: 'Instant MoHRE approval clearance and official ministry fee voucher settlement through direct corporate treasury accounts.',
        descAr: 'اعتماد التصريح من وزارة العمل وسداد إذن الدفع الحكومي عبر قنوات التحصيل الإلكتروني المباشرة.',
        durationEn: 'Same Day',
        durationAr: 'في نفس اليوم',
      },
      {
        stepNumber: 4,
        titleEn: 'Contract Attestation & File Activation',
        titleAr: 'تصديق العقد وتفعيل ملف العمل',
        descEn: 'Issuance of the certified MoHRE labor contract and automatic registration into the Wages Protection System (WPS).',
        descAr: 'إصدار عقد العمل المصدق رسمياً وتفعيله في نظام حماية الأجور (WPS) لضمان الامتثال التام.',
        durationEn: '24 Hours',
        durationAr: '24 ساعة',
      },
    ],
    whyChooseBulletPointsEn: [
      'Accredited MoHRE Tasheel Center (#4108) with dedicated enterprise accounts',
      'WPS Payroll & Compliance audit assistance to prevent establishment file blockages',
      'Tawteen Emiratisation quota advisory and compliance alignment',
      'Bulk labor quota allocation for construction, logistics, and hospitality businesses',
      'Fast-track resolution for labor fines, absconding petitions, and file suspensions',
      'Free monthly status reporting for corporate HR & PRO teams',
    ],
    whyChooseBulletPointsAr: [
      'مركز تسهيل معتمد رسمياً من وزارة الموارد البشرية (#4108) مع حسابات مخصصة للشركات',
      'تدقيق نظام حماية الأجور (WPS) لتفادي تجميد ملف المنشأة أو فرض أي غرامات عمالية',
      'استشارات متخصصة لمستهدفات التوطين والامتثال لقرارات مجلس الوزراء',
      'تخصيص كوتا العمالة الموسعة لشركات المقاولات، الخدمات اللوجستية والضيافة',
      'تسوية عاجلة لمخالفات العمل وبلاغات الانقطاع ورفع القيود عن ملفات المنشآت',
      'تقارير شهرية مجانية لإدارات الموارد البشرية ومسؤولي العلاقات العامة (PRO)',
    ],
    faqs: [
      {
        questionEn: 'How can our company avoid MoHRE WPS salary suspension?',
        questionAr: 'كيف تتفادى شركتنا إيقاف ملف المنشأة بسبب نظام حماية الأجور (WPS)؟',
        answerEn: 'Companies must transfer at least 80% of total employee salaries through approved UAE exchange houses or commercial banks via WPS within 10 days of due date. Our Tasheel audit team monitors and balances your payroll file to maintain a 100% green compliance score.',
        answerAr: 'يجب تحويل رواتب ما لا يقل عن 80% من الموظفين عبر البنوك أو شركات الصرافة المعتمدة في نظام حماية الأجور خلال 10 أيام من تاريخ الاستحقاق. ويقوم فريقنا بمراقبة وتدقيق ملفك للحفاظ على التصنيف الأخضر.',
      },
      {
        questionEn: 'What is the processing time for a new corporate work permit?',
        questionAr: 'ما هي المدة اللازمة لإصدار تصريح عمل جديد للشركات؟',
        answerEn: 'Once the electronic job offer is signed by the employee and uploaded, MoHRE approval and work permit issuance are typically finalized within 24 business hours.',
        answerAr: 'بمجرد توقيع عرض العمل الإلكتروني من الموظف وإرفاقه بالطلب، يتم اعتماد تصريح العمل وإصداره من الوزارة خلال 24 ساعة عمل.',
      },
    ],
    reviews: [
      {
        name: 'Tariq Al-Ghanem',
        roleEn: 'Group HR Director',
        roleAr: 'مدير الموارد البشرية للمجموعة',
        companyEn: 'Al-Ghanem Engineering & Logistics',
        companyAr: 'الغانم للهندسة واللوجستيات',
        rating: 5,
        date: 'October 2026',
        commentEn: 'ESS handles over 300 employee labor permits and contract renewals for our contracting firm. Their Tasheel officers are prompt, knowledgeable, and proactive with WPS updates.',
        commentAr: 'يدير مركز إي إس إس أكثر من 300 تصريح عمل وتجديد عقود لشركتنا. فريق تسهيل لديهم متمكن وسريع ويتابع ملف حماية الأجور بدقة متناهية.',
      },
    ],
    contactDeskEn: 'Tasheel Enterprise Desk: +971 4 300 8820 · Corporate Liaison: Suite 204, Karama Business Center',
    contactDeskAr: 'مكتب تسهيل للشركات: 8820 300 4 971+ · قسم الشركات: جناح 204، مركز الكرامة للأعمال',
  },

  ded: {
    heroImage: detDepartmentImg,
    aboutStoryEn:
      'Dubai Economy & Tourism (DET / DED) commercial services at Emirates Secretariat Services empower global entrepreneurs, SMEs, and multinational conglomerates to establish and expand their mainland operations. Authorized under DET Partner Code #902, we provide instant 100% foreign ownership trade licenses, commercial registration, Memorandum of Association (MOA) drafting, and Ejari commercial leasing in record time.',
    aboutStoryAr:
      'تمكّن خدمات اقتصادية وسياحة دبي (DED) لدى الإمارات لخدمات رجال الأعمال رواد الأعمال والشركات العالمية والمحلية من تأسيس وتوسيع أعمالها في السوق المحلي. بصفتنا مزود خدمات معتمداً برمز #902، نوفر رخصاً تجارية فورية بنسبة تملك أجنبي 100%، صياغة وتوثيق عقود التأسيس الإلكترونية، وتصديق عقود إيجاري بأعلى درجات السرعة والكفاءة.',
    mandateEn: 'Instant mainland business licenses, commercial registrations, shareholder amendments, MOA notarization, trade name reservations, and Land Department Ejari approvals.',
    mandateAr: 'إصدار الرخص التجارية الفورية، السجل التجاري، تعديل الشركاء، توثيق عقود التأسيس، حجز الأسماء التجارية، وتصديق عقود إيجاري المعتمدة من دائرة الأراضي والأملاك.',
    galleryImages: [
      {
        url: detDepartmentImg,
        titleEn: 'Department of Economy & Tourism (DET) Counters',
        titleAr: 'صالة دائرة الاقتصاد والسياحة بدبي',
        captionEn: 'Comprehensive corporate formation desks assisting investors with commercial, professional, and industrial licensing.',
        captionAr: 'منصات شاملة لتأسيس الشركات ومساعدة المستثمرين في التراخيص التجارية، المهنية والصناعية.',
      },
      {
        url: businessHubImg,
        titleEn: 'Executive Business Hub Consultation Suite',
        titleAr: 'مركز رجال الأعمال التنفيذي',
        captionEn: 'Executive consultation suites for structuring multi-shareholder corporate entities and holding structures.',
        captionAr: 'أجنحة استشارات تنفيذية لهيكلة الشركات القابضة وتوزيع حصص الشركاء والمساهمين.',
      },
      {
        url: vipMajlisLoungeImg,
        titleEn: 'Private Investor Advisory Majlis',
        titleAr: 'مجلس استشارات كبار المستثمرين',
        captionEn: 'Private lounge environment for corporate directors and shareholders finalizing high-value investments.',
        captionAr: 'صالة ضيافة خاصة لمدراء الشركات والمستثمرين لإتمام الصفقات وتأسيس الأعمال.',
      },
      {
        url: mainEntranceReceptionImg,
        titleEn: 'Main Entrance & Guidance Desk',
        titleAr: 'المدخل الرئيسي ومكتب التوجيه الحكومي',
        captionEn: 'Dedicated customer service showcase displaying official government licensing and fast-track guidance.',
        captionAr: 'مدخل المركز الرئيسي ومكتب التوجيه الحكومي المباشر لإجراءات التراخيص وتأسيس الشركات.',
      },
    ],
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'Trade Name & Activity Selection',
        titleAr: 'حجز الاسم التجاري وتحديد الأنشطة',
        descEn: 'Selection from 2,000+ approved commercial activities and instant DET trade name reservation certificate issuance.',
        descAr: 'اختيار الأنشطة من بين أكثر من 2,000 نشاط تجاري معتمد وإصدار شهادة حجز الاسم التجاري فوراً.',
        durationEn: '30 Mins',
        durationAr: '30 دقيقة',
      },
      {
        stepNumber: 2,
        titleEn: 'Initial Approval & MOA Drafting',
        titleAr: 'الموافقة المبدئية وصياغة عقد التأسيس',
        descEn: 'Issuance of DET initial approval followed by electronic drafting of the Memorandum of Association (MOA) for 100% foreign ownership.',
        descAr: 'إصدار الموافقة المبدئية وصياغة عقد التأسيس الإلكتروني المعتمد بنسبة تملك أجنبي 100%.',
        durationEn: '1 - 2 Hours',
        durationAr: '1 - 2 ساعة',
      },
      {
        stepNumber: 3,
        titleEn: 'Ejari Commercial Address Linkage',
        titleAr: 'ربط وتصديق عقد الإيجار إيجاري',
        descEn: 'Direct registration of your office space, business center desk, or virtual license tenancy contract in the Land Department system.',
        descAr: 'ربط وتصديق عقد إيجار المكتب أو المساحة المشتركة أو الرخصة الافتراضية بنظام دائرة الأراضي.',
        durationEn: '1 Hour',
        durationAr: 'ساعة واحدة',
      },
      {
        stepNumber: 4,
        titleEn: 'Voucher Payment & License Issuance',
        titleAr: 'سداد إذن الدفع واستلام الرخصة',
        descEn: 'Official DET voucher settlement and immediate generation of your commercial trade license, chamber membership, and establishment record.',
        descAr: 'سداد إذن الدفع الحكومي واستلام الرخصة التجارية الرسمية، شهادة عضوية الغرفة، والسجل التجاري فوراً.',
        durationEn: 'Instant',
        durationAr: 'فوري',
      },
    ],
    whyChooseBulletPointsEn: [
      'Official Dubai Economy & Tourism Partner (#902)',
      '100% Foreign Ownership on mainland LLCs with zero local sponsor requirement',
      'Instant license issuance in under 2 hours with complete digital signing',
      'Corporate bank account opening assistance with tier-1 UAE banks',
      'Assistance with Dubai Municipality & Civil Defense external activity approvals',
      'Transparent government fees with official DET electronic receipts',
    ],
    whyChooseBulletPointsAr: [
      'شريك معتمد رسمياً من دائرة الاقتصاد والسياحة بدبي (#902)',
      'تملك أجنبي بنسبة 100% للشركات ذات المسؤولية المحدودة دون الحاجة لكفيل محلي',
      'إصدار فوري للرخصة التجارية خلال أقل من ساعتين مع توقيع إلكتروني متكامل',
      'تسهيل فتح الحسابات المصرفية للشركات مع كبرى البنوك الإماراتية الرائدة',
      'تنسيق موافقات بلدية دبي والدفاع المدني والجهات الخارجية ذات الصلة',
      'شفافية مطلقة مع إيصالات دفع إلكترونية رسمية صادرة مباشرة من اقتصادية دبي',
    ],
    faqs: [
      {
        questionEn: 'Do I need a UAE national partner to set up a mainland company?',
        questionAr: 'هل أحتاج لشريك مواطن لتأسيس شركة في دبي؟',
        answerEn: 'Under current UAE Commercial Companies Law, 100% foreign ownership is permitted for more than 2,000 commercial, professional, and industrial activities. A local partner is no longer required for most business activities.',
        answerAr: 'وفقاً لقانون الشركات التجارية المعمول به في الإمارات، يُسمح بالتملك الأجنبي بنسبة 100% لأكثر من 2,000 نشاط تجاري ومهني وصناعي، ولا يُشترط وجود شريك محلي لمعظم الأنشطة.',
      },
    ],
    reviews: [
      {
        name: 'Julian Sterling',
        roleEn: 'Managing Partner',
        roleAr: 'الشريك الإداري',
        companyEn: 'Sterling Global Commodities LLC',
        companyAr: 'ستيرلينغ جلوبال كوموديتيز',
        rating: 5,
        date: 'October 2026',
        commentEn: 'Got our mainland Dubai LLC trade license issued in less than 3 hours. The team took care of trade name reservation, MOA signing, and Ejari without a single hitch.',
        commentAr: 'تم إصدار رخصة شركتنا التجارية ذات المسؤولية المحدودة في دبي خلال أقل من 3 ساعات. قام الفريق بحجز الاسم وتوقيع العقد وإيجاري دون أي تعقيد.',
      },
    ],
    contactDeskEn: 'DED Commercial Desk: +971 4 300 8830 · Corporate Formation Floor: Karama Business Center',
    contactDeskAr: 'مكتب تراخيص اقتصادية دبي: 8830 300 4 971+ · طابق تأسيس الشركات: مركز الكرامة للأعمال',
  },

  icp: {
    heroImage: icpBiometricKioskImg,
    aboutStoryEn:
      'Federal Authority for Identity, Citizenship, Customs and Port Security (ICP) services at Karama Business Center provide official Emirates ID issuance, renewal, lost/damaged card replacement, urgent biometric fingerprint scheduling, mobile number updates, and Zajel courier tracking. Co-located in the same building as the Karama Medical Fitness Center (KMFC) and right next door to the Karama Central Post Office ICP Biometric Hub, we offer the fastest integrated identity workflow in Dubai.',
    aboutStoryAr:
      'تقدم خدمات الهيئة الاتحادية للهوية والجنسية والجمارك وأمن المنافذ (ICP) في مركز الكرامة للأعمال إصدار وتجديد واستبدال بطاقة الهوية الإماراتية، حجز مواعيد البصمة البيومترية المستعجلة، تحديث رقم الهاتف وبيانات جواز السفر، وتتبع شحنات زاجل. وبفضل تواجدنا في نفس مبنى مركز الكرامة الطبي (KMFC) وبجوار مركز بصمة بريد الكرامة المركزي، نوفر أسرع مسار متكامل للهوية في دبي.',
    mandateEn: 'Authorized ICP Smart E-Channel typing for New Emirates ID, Renewal, Replacement, Urgent Biometric Appointments, Personal Data Updates, Travel Reports, and Zajel Delivery.',
    mandateAr: 'خدمات معتمدة للهيئة الاتحادية للهوية والجنسية تشمل إصدار وتجديد واستبدال الهوية الإماراتية، مواعيد البصمة المستعجلة، تحديث البيانات، تقارير الدخول والخروج، وتوصيل زاجل.',
    galleryImages: [
      {
        url: icpBiometricKioskImg,
        titleEn: 'ICP Certified Biometric Verification Station',
        titleAr: 'منصة البصمة البيومترية المعتمدة من الهيئة الاتحادية',
        captionEn: 'Certified GDRFA and ICP smart biometric kiosk ensuring instant optical fingerprint and facial verification.',
        captionAr: 'محطات بيومترية معتمدة لضمان مسح وتدقيق الجوازات والبيانات الحيوية بدقة فورية.',
      },
      {
        url: fastTrackConcourseImg,
        titleEn: 'Main Concourse & Directional Walkway',
        titleAr: 'البهو الرئيسي ومسار خدمة الهوية',
        captionEn: 'Direct fast-track walkway connecting Karama Medical Fitness results to Emirates ID typing.',
        captionAr: 'مسار سريع يربط الفحص الطبي بطباعة واستلام بطاقة الهوية.',
      },
      {
        url: salemMedicalImg,
        titleEn: 'Co-Located Salem Medical Fitness Wing',
        titleAr: 'جناح الفحص الطبي المدمج',
        captionEn: 'Immediate medical clearance for new and renewal residence Emirates ID cards.',
        captionAr: 'فحص طبي فوري لإصدار وتجديد بطاقات الهوية للمقيمين.',
      },
      {
        url: mainEntranceReceptionImg,
        titleEn: 'Main Customer Reception Desk',
        titleAr: 'مكتب الاستقبال والتوجيه الرئيسي',
        captionEn: 'Dedicated customer service desk welcoming residents for identity services.',
        captionAr: 'مكتب استقبال المتعاملين لتسهيل إجراءات الهوية وبطاقات الإقامة.',
      },
    ],
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'Medical & Emirates ID Typing at KBC',
        titleAr: 'طباعة استمارة الهوية والفحص الطبي في مركز الكرامة',
        descEn: 'Generating your barcoded ICP Emirates ID application alongside your DHA Medical Fitness test in one visit.',
        descAr: 'طباعة استمارة الهوية الإماراتية المزودة بالباركود بالتزامن مع استمارة الفحص الطبي في زيارة واحدة.',
        durationEn: '15 Mins',
        durationAr: '15 دقيقة',
      },
      {
        stepNumber: 2,
        titleEn: 'Biometric Scan / E-Channel Verification',
        titleAr: 'البصمة البيومترية أو التحقق الذكي',
        descEn: 'Completing 10-finger biometrics for first-time applicants or instant electronic renewal for existing residents.',
        descAr: 'إجراء البصمة العشرية للمتقدمين الجدد أو الاعتماد الإلكتروني الفوري لتجديد هويات المقيمين.',
        durationEn: '15 - 30 Mins',
        durationAr: '15 - 30 دقيقة',
      },
      {
        stepNumber: 3,
        titleEn: 'Federal Clearance & Smart Card Personalization',
        titleAr: 'التدقيق الاتحادي وتخصيص البطاقة الذكية',
        descEn: 'Ministerial security vetting, central registry synchronization, and high-security chip programming.',
        descAr: 'التدقيق الأمني الاتحادي ومطابقة السجل السكاني المركزي وبرمجة الشريحة الذكية المشفرة.',
        durationEn: '12 - 24 Hours',
        durationAr: '12 - 24 ساعة',
      },
      {
        stepNumber: 4,
        titleEn: 'Digital E-ID on UAE Pass & Zajel Card Delivery',
        titleAr: 'إصدار الهوية الرقمية وتوصيل البطاقة الذكية عبر زاجل',
        descEn: 'Instant activation of your digital Emirates ID on UAE Pass followed by physical smart card delivery via Zajel.',
        descAr: 'تفعيل النسخة الرقمية للهوية على تطبيق UAE Pass فوراً وتوصيل البطاقة البلاستيكية الذكية عبر زاجل.',
        durationEn: '24 - 48 Hours',
        durationAr: '24 - 48 ساعة',
      },
    ],
    whyChooseBulletPointsEn: [
      'Official ICP Smart E-Channel Partner co-located with Karama Medical Center (KMFC)',
      'Adjacent to Karama Central Post Office ICP Biometric Fingerprinting Center (1-minute walk)',
      'Priority biometric appointment rescheduling to eliminate 2–3 week delays',
      'Fawri 24-Hour urgent Emirates ID replacement and data update support',
      'Simultaneous mobile number update across both ICP and GDRFA Dubai databases',
      'Direct Zajel airway bill (AWB) tracking and delivery address rerouting',
    ],
    whyChooseBulletPointsAr: [
      'شريك معتمد للقناة الذكية للهيئة الاتحادية (ICP) في نفس مبنى مركز الكرامة الطبي (KMFC)',
      'ملاصق لمركز بصمة الهوية في بريد الكرامة المركزي (دقيقة واحدة سيراً على الأقدام)',
      'تقديم وتقريب مواعيد البصمة البيومترية لتفادي الانتظار الطويل',
      'دعم خدمة "فوري" لإصدار بدل فاقد أو تالف للهوية خلال 24 ساعة',
      'تحديث رقم الهاتف وبيانات الجواز في نظامي الهوية الاتحادية وإقامة دبي معاً',
      'متابعة مباشرة لبوليصة شحن زاجل وتعديل عناوين استلام البطاقات',
    ],
    faqs: [
      {
        questionEn: 'How much is the Emirates ID fee for a 2-year Dubai residency visa in 2026?',
        questionAr: 'كم تبلغ رسوم الهوية الإماراتية لإقامة مدتها سنتان في عام 2026؟',
        answerEn: 'The official ICP government fee for a 2-Year Emirates ID (New or Renewal) is AED 386 (inclusive of smart card issuance, e-channel fees, and Zajel courier delivery).',
        answerAr: 'تبلغ الرسوم الحكومية الرسمية لبطاقة الهوية الإماراتية لمدة سنتين (إصدار جديد أو تجديد) 386 درهماً شاملة رسوم البطاقة الذكية والتوصيل عبر زاجل.',
      },
      {
        questionEn: 'Do I need to give fingerprints again when renewing my Emirates ID?',
        questionAr: 'هل أحتاج لإعادة التبصيم عند تجديد بطاقة الهوية الإماراتية؟',
        answerEn: 'No. Existing residents whose biometrics are already stored in the ICP registry do not need to give fingerprints again during renewal (unless a child has just turned 15 years old).',
        answerAr: 'لا. المقيمون المسجلة بصماتهم مسبقاً في النظام الاتحادي لا يحتاجون لإعادة البصمة عند التجديد (إلا للأبناء الذين أتموا سن 15 عاماً حديثاً).',
      },
    ],
    reviews: [
      {
        name: 'Jonathan Mercer',
        roleEn: 'Regional Sales Director',
        roleAr: 'مدير المبيعات الإقليمي',
        companyEn: 'Mercer MedTech EMEA',
        companyAr: 'ميرسر للتقنيات الطبية',
        rating: 5,
        date: 'October 2026',
        commentEn: 'Completed my DHA medical test at Karama Medical Center and my new Emirates ID typing and biometrics right there at Karama Business Center.',
        commentAr: 'أنهيت الفحص الطبي في مركز الكرامة الطبي وطباعة الهوية الإماراتية الجديدة والبصمة في مركز الكرامة للأعمال بنفس الزيارة.',
      },
    ],
    contactDeskEn: 'ICP Emirates ID Desk: +971 4 342 6666 · Ground & First Floor, Karama Business Center (Next to Karama Post Office)',
    contactDeskAr: 'مكتب خدمات الهوية الإماراتية: 6666 342 4 971+ · مركز الكرامة للأعمال (بجوار بريد الكرامة)',
  },

  municipality: {
    heroImage: fastTrackConcourseImg,
    aboutStoryEn:
      'Dubai Municipality (DM) and Real Estate Ejari services at Karama Business Center deliver rapid regulatory clearances for both residential tenants and commercial enterprises. Our accredited desk processes 15-minute Residential & Commercial Ejari registrations, Ejari cancellations, Montaji consumer product & cosmetic registrations, Foodwatch & FIRS food label approvals, interior fit-out engineering permits, and outdoor commercial signage approvals.',
    aboutStoryAr:
      'توفر خدمات بلدية دبي وتوثيق عقود إيجاري في مركز الكرامة للأعمال حلولاً حكومية سريعة للأفراد والشركات؛ حيث نُنجز تسجيل وإلغاء عقود إيجاري السكنية والتجارية خلال 15 دقيقة، تسجيل المنتجات الاستهلاكية ومستحضرات التجميل في نظام منتجي، اعتماد الملصقات الغذائية ومنصة فود ووتش، تصاريح الديكور والمخططات الهندسية، وتصاريح اللوحات الإعلانية الخارجية.',
    mandateEn: 'Official Ejari tenancy registration & cancellation, Montaji product registration, Foodwatch & food label approvals, interior fit-out permits, and outdoor signage clearances.',
    mandateAr: 'تسجيل وإلغاء عقود إيجاري، تسجيل المنتجات في نظام منتجي، اعتماد البطاقات الغذائية وفود ووتش، تصاريح الديكور الداخلي، وتصاريح اللوحات التجارية.',
    galleryImages: COMMON_GALLERY,
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'Document, Title Deed & Technical Dossier Audit',
        titleAr: 'تدقيق المستندات وشهادات الملكية والملفات الفنية',
        descEn: 'Verifying property title deeds for Ejari or auditing product ingredients/CAD layouts for Dubai Municipality permits.',
        descAr: 'فحص شهادات الملكية لعقود إيجاري أو مراجعة المكونات والمخططات الهندسية لتصاريح بلدية دبي.',
        durationEn: '15 - 30 Mins',
        durationAr: '15 - 30 دقيقة',
      },
      {
        stepNumber: 2,
        titleEn: 'Official DM / DLD Ejari Portal Submission',
        titleAr: 'الإدراج الإلكتروني في بوابة بلدية دبي ونظام إيجاري',
        descEn: 'Direct electronic submission and government fee voucher settlement.',
        descAr: 'تقديم الطلب عبر الأنظمة الحكومية المعتمدة وسداد أذونات الدفع الرسمية.',
        durationEn: '15 Mins - 24h',
        durationAr: '15 دقيقة - 24 ساعة',
      },
      {
        stepNumber: 3,
        titleEn: 'Engineering, Health & Land Department Verification',
        titleAr: 'التدقيق الهندسي والصحي والاعتماد المالي',
        descEn: 'Technical compliance review by municipal inspectors and RERA tenancy registration verification.',
        descAr: 'المراجعة الفنية من مفتشي البلدية وتدقيق بيانات العقد الإيجاري لدى مؤسسة التنظيم العقاري.',
        durationEn: '1 - 4 Hours',
        durationAr: '1 - 4 ساعات',
      },
      {
        stepNumber: 4,
        titleEn: 'Certificate Issuance & DEWA / DET / Amer Sync',
        titleAr: 'إصدار الشهادة المعتمدة والربط الفوري مع الدوائر',
        descEn: 'Delivering your attested Ejari or DM permit and immediately syncing with DEWA, DET Licensing, or Amer Family Visas.',
        descAr: 'تسليم شهادة إيجاري أو تصريح البلدية مع التفعيل الفوري لـ ديوا أو تجديد الرخصة أو إقامة الأسرة.',
        durationEn: 'Same Day',
        durationAr: 'في نفس اليوم',
      },
    ],
    whyChooseBulletPointsEn: [
      '15-Minute Residential & Commercial Ejari registration with automatic DEWA account activation',
      'Instant cancellation of previous tenant Ejari blocks on the spot',
      'End-to-end Dubai Municipality Montaji registration for cosmetics, perfumes, and supplements',
      'Complete restaurant & food trade compliance: Foodwatch, FIRS labels, pest control, and on-site staff OHC medical cards',
      'Fast-track DM & Civil Defense interior fit-out and office partition permits',
      'Storefront 3D signboard and commercial vehicle branding permits',
    ],
    whyChooseBulletPointsAr: [
      'توثيق عقود إيجاري السكنية والتجارية خلال 15 دقيقة مع التفعيل التلقائي لحساب ديوا',
      'إلغاء فوري لعقود إيجاري السابقة العالقة على العقار في نفس الزيارة',
      'تسجيل شامل للمنتجات ومستحضرات التجميل والعطور والمكملات في نظام منتجي ببلدية دبي',
      'امتثال متكامل للمطاعم والأغذية: منصة فود ووتش، اعتماد البطاقات الغذائية، وإصدار بطاقات الصحة المهنية (OHC) في مركزنا',
      'استخراج تصاريح الديكور الداخلي والقواطع المكتبية من بلدية دبي والدفاع المدني',
      'إصدار تصاريح اللوحات التجارية الخارجية وشعارات المركبات',
    ],
    faqs: [
      {
        questionEn: 'How fast is Ejari registration at Karama Business Center?',
        questionAr: 'كم يستغرق تسجيل عقد إيجاري في مركز الكرامة للأعمال؟',
        answerEn: 'Both Residential and Commercial Ejari registrations are completed in 10 to 15 minutes at our counter, and your DEWA electricity/water activation link is sent automatically via SMS.',
        answerAr: 'يتم إنجاز تسجيل وتوثيق عقود إيجاري السكنية والتجارية خلال 10 إلى 15 دقيقة فقط، مع إرسال رابط تفعيل الكهرباء والمياه (ديوا) تلقائياً لهاتفك.',
      },
    ],
    reviews: [
      {
        name: 'Anand Krishnan',
        roleEn: 'Senior Software Engineer',
        roleAr: 'مهندس برمجيات أول',
        companyEn: 'FinTech Middle East',
        companyAr: 'فينتك الشرق الأوسط',
        rating: 5,
        date: 'October 2026',
        commentEn: 'Registered my apartment Ejari in 10 minutes at Karama Business Center and immediately used it at their Amer counter to apply for my family residency visa!',
        commentAr: 'وثقت عقد إيجاري لشقتي خلال 10 دقائق في مركز الكرامة للأعمال، واستخدمته فوراً لدى كاونتر آمر المجاور للتقديم على إقامة عائلتي!',
      },
    ],
    contactDeskEn: 'Dubai Municipality & Ejari Desk: +971 4 342 6666 · Karama Business Center (Next to Karama Post Office)',
    contactDeskAr: 'مكتب خدمات بلدية دبي وإيجاري: 6666 342 4 971+ · مركز الكرامة للأعمال (بجوار بريد الكرامة)',
  },
  ...LEGAL_DEPARTMENT_RICH_MAP,
  ...SALEM_RTA_TAWJEEH_TADBEER_VIP_DEPARTMENT_RICH_MAP,
};

export const SERVICE_RICH_MAP: Record<string, ServiceRichDetails> = {
  ...AMER_SERVICES_RICH_MAP,
  ...DET_SERVICES_RICH_MAP,
  ...TASHEEL_SERVICES_RICH_MAP,
  ...ICP_DM_SERVICES_RICH_MAP,
  ...LEGAL_SERVICES_RICH_MAP,
  ...SALEM_RTA_TAWJEEH_TADBEER_VIP_SERVICES_RICH_MAP,
};

export function getDepartmentDetails(dept: {
  id: string;
  nameEn: string;
  nameAr: string;
  code: string;
  accreditationEn: string;
  accreditationAr: string;
  descriptionEn: string;
  descriptionAr: string;
}): DepartmentRichDetails {
  const deptData = DEPARTMENT_RICH_MAP[dept.id] || {
    heroImage: fastTrackConcourseImg,
    aboutStoryEn: `${dept.nameEn} operations at Emirates Secretarial Services represent an authorized private government processing bridge in Dubai. Operating under official code ${dept.code} and certified as ${dept.accreditationEn}, our dedicated desk facilitates procedural compliance by connecting directly with UAE ministerial databases. Every file is audited by senior legal and immigration typists to ensure thorough execution and efficient processing.`,
    aboutStoryAr: `تمثل عمليات ${dept.nameAr} لدى الإمارات لخدمات رجال الأعمال جسراً مهنياً معتمداً لمعاملات الدوائر الحكومية في دبي. يعمل المكتب بموجب الرمز الرسمي ${dept.code} واعتماد ${dept.accreditationAr}، ويسهل الإجراءات من خلال الربط المباشر مع الأنظمة الحكومية والوزارية، مع تدقيق قانوني شامل لضمان إنجاز المعاملات بأعلى درجات الكفاءة.`,
    mandateEn: `Official jurisdiction: ${dept.descriptionEn} Delivered with direct ministerial oversight, transparent government billing, and expedited VIP processing lanes.`,
    mandateAr: `النطاق والاختصاص الرسمي: ${dept.descriptionAr} منجز تحت إشراف وزاري مباشر وشفافية مالية تامة ومسارات سريعة لكبار الشخصيات.`,
    galleryImages: COMMON_GALLERY,
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'Document Audit & Verification',
        titleAr: 'تدقيق ومراجعة المستندات',
        descEn: 'Comprehensive pre-submission review of all legal contracts, IDs, and ministerial prerequisites to ensure complete regulatory alignment.',
        descAr: 'مراجعة استباقية دقيقة لكافة العقود والمستندات والهويات والاشتراطات لضمان اكتمال كافة الشروط.',
        durationEn: '30 - 60 Mins',
        durationAr: '30 - 60 دقيقة',
      },
      {
        stepNumber: 2,
        titleEn: 'Official Ministerial Lodgement',
        titleAr: 'التقديم بالقناة الحكومية الرسمية',
        descEn: 'Secure electronic submission into the direct government portal with instant payment voucher settlement and tracking reference generation.',
        descAr: 'إرسال إلكتروني آمن إلى البوابة الحكومية المباشرة وسداد الرسوم وإصدار رقم التتبع اللحظي.',
        durationEn: '1 - 2 Hours',
        durationAr: '1 - 2 ساعة',
      },
      {
        stepNumber: 3,
        titleEn: 'Clearance & Biometric Verification',
        titleAr: 'الموافقات والتحقق البيومتري',
        descEn: 'Priority follow-up through government approval channels with VIP expedited biometric and medical scheduling where required.',
        descAr: 'متابعة عاجلة عبر مسارات الاعتماد الحكومية مع جدولة سريعة للبصمة والفحص عند الحاجة.',
        durationEn: '12 - 24 Hours',
        durationAr: '12 - 24 ساعة',
      },
      {
        stepNumber: 4,
        titleEn: 'Attested Issuance & Handover',
        titleAr: 'الإصدار المعتمد والتسليم',
        descEn: 'Official digital certificate or residency issuance synced to UAE Pass, with physical original documents dispatched to your doorstep.',
        descAr: 'إصدار الشهادة الرسمية أو تصريح الإقامة الرقمي المربوط بالهوية الرقمية وتوصيل الوثائق الأصلية إلى بابك.',
        durationEn: 'Same Day / 24h',
        durationAr: 'نفس اليوم / 24 ساعة',
      },
    ],
    whyChooseBulletPointsEn: [
      `Official accreditation: ${dept.accreditationEn}`,
      'Direct ministerial API e-channels with real-time application milestone tracking',
      'Preliminary Legal Audit: Multi-stage document review prior to government fee settlement',
      'Dedicated relationship officer for every client and corporate account',
      'Official Dubai Government fee transparency with instantaneous official vouchers',
      'VIP private Majlis and doorstep mobile government van dispatch available',
    ],
    whyChooseBulletPointsAr: [
      `اعتماد رسمي موثق: ${dept.accreditationAr}`,
      'ربط إلكتروني مباشر بالبوابات الحكومية مع متابعة لحظية لكافة مراحل المعاملة',
      'تدقيق قانوني مسبق: مراجعة دقيقة للاشتراطات قبل سداد أي رسوم رسمية',
      'مدير علاقات مخصص لكل متعامل ولكل شركة للمتابعة خطوة بخطوة',
      'شفافية مالية تامة مع إيصالات سداد حكومية رسمية فورية',
      'توفر مجلس كبار الشخصيات الخاص وحافلة المعاملات المتنقلة لباب دارك',
    ],
    faqs: [
      {
        questionEn: `What documents are required to initiate a transaction with ${dept.nameEn}?`,
        questionAr: `ما هي المستندات الأساسية للبدء في معاملة لدى ${dept.nameAr}؟`,
        answerEn: 'Standard prerequisites include original passports, Emirates IDs, relevant trade licenses or contracts, and active UAE Pass authorization. Our officers conduct a free preliminary checklist audit before submission.',
        answerAr: 'المستندات الأساسية تشمل جوازات السفر الأصلية، بطاقات الهوية، الرخص أو العقود ذات الصلة وحساب UAE Pass الفعال. ويقوم خبراؤنا بتدقيق المستندات مجاناً قبل البدء.',
      },
      {
        questionEn: 'How fast will my application be approved?',
        questionAr: 'كم يستغرق اعتماد المعاملة رسمياً؟',
        answerEn: 'Most transactions under this department are processed between 24 and 48 hours, with express same-day fast-track filing options available. Final approval remains subject to the competent government department.',
        answerAr: 'تُنجز معظم المعاملات التابعة لهذه الدائرة خلال 24 إلى 48 ساعة، مع توفر خيار المسار فائق السرعة في نفس اليوم، مع خضوع الموافقة النهائية للجهة الحكومية المختصة.',
      },
      {
        questionEn: 'Can I track my application status online?',
        questionAr: 'هل يمكنني تتبع حالة المعاملة عبر الإنترنت؟',
        answerEn: 'Yes. Every transaction is assigned an official ESS tracking code that you can query 24/7 on our live status tracker, in addition to receiving SMS and WhatsApp updates.',
        answerAr: 'نعم. تمنح كل معاملة رقم مرجعي رسمي يمكنك الاستعلام عنه لحظياً عبر بوابة التتبع على مدار الساعة، بالإضافة لإشعارات الرسائل والواتساب.',
      },
    ],
    reviews: [
      {
        name: 'Rashid Al-Falasi',
        roleEn: 'Business Owner',
        roleAr: 'رجل أعمال',
        companyEn: 'Al-Falasi Enterprises',
        companyAr: 'مؤسسة الفلاسي التجارية',
        rating: 5,
        date: 'October 2026',
        commentEn: `Smooth and flawless transaction processing for our ${dept.nameEn} requirements. The level of transparency and speed is second to none in Dubai.`,
        commentAr: `إنجاز سلس ودقيق للغاية لمعاملاتنا لدى ${dept.nameAr}. مستوى الشفافية والسرعة هو الأفضل بلا منازع في دبي.`,
      },
      {
        name: 'Catherine Dubois',
        roleEn: 'Regional Operations Manager',
        roleAr: 'مدير العمليات الإقليمي',
        companyEn: 'Dubois Global Advisory',
        companyAr: 'دوبوا للاستشارات العالمية',
        rating: 5,
        date: 'September 2026',
        commentEn: 'Saved our team countless hours. The dedicated officer kept us informed at every single milestone. Outstanding government liaison desk.',
        commentAr: 'وفر علينا ساعات طويلة وجهداً كبيراً. أطلعنا مدير المعاملة على كل مرحلة أولاً بأول. خدمة حكومية بدرجة امتياز.',
      },
    ],
    contactDeskEn: `${dept.nameEn} Liaison Desk: 04-342-6666 · Karama Business Center (Next to Karama Post Office, Dubai)`,
    contactDeskAr: `مكتب التنسيق الحكومي لـ ${dept.nameAr}: 04-342-6666 · مركز الكرامة للأعمال (بجوار بريد الكرامة، دبي)`,
  };

  return {
    ...deptData,
    processSteps: ensureFourSteps(deptData.processSteps, {
      deptNameEn: dept.nameEn,
      deptNameAr: dept.nameAr,
    }),
  };
}

export function getServiceDetails(
  service: {
    id: string;
    titleEn: string;
    titleAr: string;
    shortDescEn: string;
    shortDescAr: string;
    authorityEn: string;
    authorityAr: string;
    requiredDocumentsEn: string[];
    requiredDocumentsAr: string[];
    keyBenefitsEn: string[];
    keyBenefitsAr: string[];
    processingTimeEn: string;
    processingTimeAr: string;
    govFee: number;
    serviceFee: number;
    vipFastTrackFee: number;
  },
  dept: {
    nameEn: string;
    nameAr: string;
    code: string;
  }
): ServiceRichDetails {
  const serviceData = SERVICE_RICH_MAP[service.id] || {
    detailedOverviewEn: `${service.titleEn} is facilitated at Karama Business Center (KBC) under Emirates Secretarial Services (ESS), an authorized private processing center coordinating with ${service.authorityEn} in Dubai and the UAE. ${service.shortDescEn} Applicants benefit from direct ministerial server API lodgement, comprehensive document pre-auditing, and dedicated case manager supervision to eliminate administrative delays. Note: Final approvals and statutory clearances remain strictly subject to official governing authority vetting. Our facility in Al Karama (next to Karama Post Office) also operates the Karama Medical Fitness Express Service Center (KMFC / Karama Medical Center) and on-site ICP biometric typing stations.`,
    detailedOverviewAr: `تعتبر خدمة ${service.titleAr} معاملة حكومية رسمية معتمدة من ${service.authorityAr} في دبي ودولة الإمارات، وتُنجز عبر مركز الكرامة للأعمال (KBC) تحت إدارة الإمارات لخدمات رجال الأعمال (ESS) كمركز خاص مرخص. ${service.shortDescAr} ويستفيد المتعاملون من التدقيق القانوني المسبق للمستندات والربط المباشر مع الأنظمة لتفادي أي نواقص، مع خضوع الموافقات النهائية لتقدير الجهات الحكومية المختصة. كما يحتضن مقرنا بالكرامة (بجوار بريد الكرامة) مركز الكرامة للياقة الطبية السريعة (KMFC / مركز الكرامة الطبي) ومحطات البصمة البيومترية المعتمدة للهيئة الاتحادية.`,
    legalFrameworkEn: `Regulated under relevant UAE Federal and Dubai Government administrative directives governing ${dept.nameEn} procedures and authorized typing standards.`,
    legalFrameworkAr: `خاضعة للقرارات واللوائح الإدارية والتنفيذية المعمول بها في حكومة دبي ودولة الإمارات والمنظمة لإجراءات ${dept.nameAr}.`,
    eligibilityEn: [
      'Valid UAE resident or international investor / visitor possessing an eligible passport (minimum 6 months validity)',
      'Clear official document dossier conforming to ministerial guidelines',
      'Active UAE Pass digital identity or verified in-person biometric registration',
    ],
    eligibilityAr: [
      'المقيمون في دولة الإمارات أو المستثمرون والزوار الدوليون الحاملون لجواز سفر ساري المفعول (صلاحية 6 أشهر على الأقل)',
      'ملف مستندات مكتمل ومطابق للاشتراطات الوزارية المعتمدة',
      'حساب مفعّل في الهوية الرقمية UAE Pass أو التحقق البيومتري المباشر في المركز',
    ],
    galleryImages: COMMON_GALLERY,
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'Document Upload & Preliminary Legal Audit',
        titleAr: 'رفع وتدقيق المستندات القانوني المسبق',
        descEn: 'Our senior consultants examine your documents for validity, attestations, and compliance before any government fee is charged.',
        descAr: 'يقوم كبار المستشارين بفحص المستندات والتحقق من التصديقات والصلاحيات قبل سداد أي رسوم حكومية.',
        durationEn: 'Hour 0 - 2',
        durationAr: 'الساعة 0 - 2',
      },
      {
        stepNumber: 2,
        titleEn: 'Official Ministerial E-Channel Lodgement',
        titleAr: 'التقديم بالقناة الوزارية الإلكترونية المباشرة',
        descEn: `Direct electronic lodgement into the official ${service.authorityEn} gateway. Instant generation of official tracking token.`,
        descAr: `إرسال إلكتروني مباشر إلى بوابة ${service.authorityAr} وإصدار رقم التتبع الحكومي المعتمد فوراً.`,
        durationEn: 'Hour 2 - 6',
        durationAr: 'الساعة 2 - 6',
      },
      {
        stepNumber: 3,
        titleEn: 'Clearance & Verification Processing',
        titleAr: 'المعالجة والمطابقة الحكومية',
        descEn: 'Tracking of ministerial reviews, security approvals, and biometric matching through VIP fast-track queues.',
        descAr: 'متابعة الاعتمادات والتدقيق الأمني والربط البيومتري عبر مسارات الأولوية السريعة.',
        durationEn: 'Day 1 - 2',
        durationAr: 'اليوم 1 - 2',
      },
      {
        stepNumber: 4,
        titleEn: 'Official Issuance & Doorstep Handover',
        titleAr: 'الإصدار الرسمي والتسليم',
        descEn: 'Instant electronic certificate generation on UAE Pass with original attested documents dispatched directly to your location.',
        descAr: 'إصدار المستند الرقمي المعتمد على تطبيق UAE Pass وتوصيل الأوراق الأصلية إلى موقعك.',
        durationEn: 'Day 2 - 3',
        durationAr: 'اليوم 2 - 3',
      },
    ],
    faqs: [
      {
        questionEn: `What is the total official fee for ${service.titleEn}?`,
        questionAr: `ما هو إجمالي الرسوم الرسمية لـ ${service.titleAr}؟`,
        answerEn: `The government authority fee is AED ${service.govFee.toLocaleString()} and the ESS certified typing and liaison fee is AED ${service.serviceFee.toLocaleString()}. Official receipts from ${service.authorityEn} are issued immediately.`,
        answerAr: `الرسوم الحكومية الرسمية هي ${service.govFee.toLocaleString()} درهم، ورسوم الطباعة والتنسيق المعتمدة هي ${service.serviceFee.toLocaleString()} درهم، مع تسليم إيصال حكومي رسمي فوري من ${service.authorityAr}.`,
      },
      {
        questionEn: `What is the estimated turnaround time for this service?`,
        questionAr: `ما هي مدة الإنجاز المتوقعة لهذه الخدمة؟`,
        answerEn: `Standard processing is completed in ${service.processingTimeEn}. For urgent requests, our VIP fast-track lane expedites the approval timeline.`,
        answerAr: `يتم الإنجاز الاعتيادي خلال ${service.processingTimeAr}. وتتوفر مسارات VIP العاجلة لتسريع الإنجاز في الحالات المستعجلة.`,
      },
      {
        questionEn: 'What happens if one of my required documents is missing or un-attested?',
        questionAr: 'ماذا يحدث إذا كان أحد المستندات ناقصاً أو غير مصدق؟',
        answerEn: 'Our in-house certified legal translation and Ministry of Foreign Affairs (MOFA) attestation desk can assist with document drafting, sworn translations, and ministerial attestations right at our center.',
        answerAr: 'يوفر مركزنا مكتباً معتمداً للترجمة القانونية وتصديقات وزارة الخارجية يمكنه إنجاز الترجمة المحلفة والتصديقات المطلوبة فوراً داخل المركز.',
      },
    ],
    reviews: [
      {
        name: 'Mohammed Al-Zahiri',
        roleEn: 'Managing Director',
        roleAr: 'المدير التنفيذي',
        companyEn: 'Al-Zahiri Commercial Holdings',
        companyAr: 'الظاهري القابضة',
        rating: 5,
        date: 'October 2026',
        commentEn: `Remarkable efficiency for ${service.titleEn}. The team took full ownership of the process and delivered well ahead of the official SLA.`,
        commentAr: `كفاءة وسرعة استثنائية في إنجاز ${service.titleAr}. تولى الفريق المعاملة بالكامل وتم التسليم قبل الوقت المتوقع.`,
      },
      {
        name: 'Svetlana Ivanova',
        roleEn: 'Investor & Entrepreneur',
        roleAr: 'مستثمرة ورائدة أعمال',
        companyEn: 'Ivanova Design Studio',
        companyAr: 'استوديو إيفانوفا للتصميم',
        rating: 5,
        date: 'September 2026',
        commentEn: 'Clear instructions, exact fees with zero unexpected charges, and polite executive officers. Highly recommend!',
        commentAr: 'إرشادات واضحة جداً ورسوم شفافة دون أي تكاليف مفاجئة وتعامل راقٍ للغاية من موظفي المركز. أنصح بالتعامل معهم بشدة!',
      },
    ],
  };

  return {
    ...serviceData,
    processSteps: ensureFourSteps(serviceData.processSteps, {
      serviceTitleEn: service.titleEn,
      serviceTitleAr: service.titleAr,
      deptNameEn: dept.nameEn,
      deptNameAr: dept.nameAr,
      authorityEn: service.authorityEn,
      authorityAr: service.authorityAr,
    }),
  };
}
