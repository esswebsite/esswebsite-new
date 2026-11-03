import { ProcessStep, GalleryImage, FaqItem, ReviewItem } from '../types';
import {
  icpBiometricKioskImg as smartDeskImage,
  fastTrackConcourseImg as heroCenterImage,
  mainEntranceReceptionImg as vipMajlisImage,
  mobileDoorstepUnitImg as mobileVanImage,
} from './centerOriginalPhotos';
import { ServiceRichDetails } from './amerServicesExtendedData';

const ICP_DM_GALLERY: GalleryImage[] = [
  {
    url: smartDeskImage,
    titleEn: 'Authorized ICP Emirates ID & Biometric Typing Desk at Karama Business Center',
    titleAr: 'منصة الهوية الإماراتية والبصمة البيومترية في مركز الكرامة للأعمال',
    captionEn: 'Direct Federal Authority for Identity, Citizenship, Customs and Port Security (ICP) smart e-channel terminals co-located with Karama Medical Center.',
    captionAr: 'محطات معتمدة للهيئة الاتحادية للهوية والجنسية (ICP) مدمجة مع مركز الكرامة للياقة الطبية تحت سقف واحد.',
  },
  {
    url: heroCenterImage,
    titleEn: 'Dubai Municipality & Ejari Registration Hall',
    titleAr: 'صالة خدمات بلدية دبي وتوثيق عقود إيجاري',
    captionEn: 'Accredited service counters for Residential & Commercial Ejari, Montaji product registration, Foodwatch, and DM engineering permits.',
    captionAr: 'كاونترات معتمدة لتوثيق عقود إيجاري السكنية والتجارية، تسجيل المنتجات في منتجي، وتصاريح بلدية دبي.',
  },
  {
    url: vipMajlisImage,
    titleEn: 'VIP Fast-Track Biometrics & Golden Visa ID Lounge',
    titleAr: 'مجلس كبار الشخصيات للبصمة السريعة وهويات الإقامة الذهبية',
    captionEn: 'Priority lounge for 10-Year Golden Visa holders, investors, and corporate executives completing Emirates ID formalities.',
    captionAr: 'صالة أولوية لحاملي الإقامة الذهبية والمستثمرين والتنفيذيين لإنجاز معاملات الهوية الإماراتية في دقائق.',
  },
  {
    url: mobileVanImage,
    titleEn: 'Doorstep Mobile Biometrics & Ejari Service Unit',
    titleAr: 'حافلة الخدمات الحكومية المتنقلة للبصمة وإيجاري',
    captionEn: 'On-site mobile government team dispatched to homes and corporate offices across Dubai for VIP document processing.',
    captionAr: 'فريق حكومي متنقل يصل إلى منزلك أو مقر شركتك في دبي لإنجاز معاملات الهوية وإيجاري بخصوصية تامة.',
  },
];

export const ICP_DM_SERVICES_RICH_MAP: Record<string, ServiceRichDetails> = {
  // =========================================================================
  // ICP 1. NEW EMIRATES ID APPLICATION & BIOMETRIC REGISTRATION
  // =========================================================================
  'icp-emirates-id-new': {
    detailedOverviewEn: `The **UAE Emirates ID Card (بطاقة الهوية الإماراتية)** issued by the Federal Authority for Identity, Citizenship, Customs and Port Security (ICP) is the mandatory national identity credential for all UAE citizens, GCC nationals, and expatriate residents. Equipped with an encrypted smart chip storing 10-finger biometric data, digital iris parameters, and UAE Pass cryptographic keys, no resident in Dubai can open a bank account, register a mobile SIM card, sign an Ejari tenancy lease, or pass through Dubai Airport Smart Gates without an active Emirates ID.

At Karama Business Center (KBC), our ICP Smart E-Channel desk is co-located directly inside the same building as the **Karama Medical Fitness Express Service Center (KMFC — known across Dubai as Karama Medical Center)** and our Authorized Amer (GDRFA) Center. This means a newly arrived employee, investor, or family dependent can complete their DHA Medical Fitness blood test and X-ray, type their New Emirates ID application, and book or complete their biometric fingerprinting in one seamless visit next to Karama Post Office.

For 2026, official ICP government fees for a New Emirates ID are transparent and aligned with your visa validity: **AED 286 for a 1-Year Visa**, **AED 386 for a 2-Year Employment/Family Visa**, and **AED 1,186 for a 10-Year Golden Visa** (inclusive of smart card issuance, e-channel fees, and Zajel courier delivery).`,
    detailedOverviewAr: `تُعد **بطاقة الهوية الإماراتية** الصادرة عن الهيئة الاتحادية للهوية والجنسية والجمارك وأمن المنافذ (ICP) الوثيقة الرسمية الإلزامية لإثبات الهوية لكافة المواطنين والمقيمين في دولة الإمارات. وتحتوي البطاقة على شريحة ذكية مشفرة تضم البصمات العشرية وبصمة العين والتوقيع الرقمي المعتمد، ولا يمكن لأي مقيم في دبي فتح حساب بنكي، توثيق عقد إيجاري، تفعيل شريحة هاتف، أو استخدام البوابات الذكية في مطارات دبي بدونها.

يمتاز مركز الكرامة للأعمال (KBC) بضم مكتب خدمات الهوية الاتحادية (ICP)، و**مركز الكرامة للياقة الطبية السريعة (KMFC - المعروف بمركز الكرامة الطبي)**، ومركز "آمر" لإقامة دبي في مبنى واحد بجوار بريد الكرامة. يتيح هذا التكامل للمقيم الجديد إجراء الفحص الطبي للدم والأشعة، وطباعة استمارة الهوية الإماراتية الجديدة، وتنسيق البصمة البيومترية في زيارة واحدة منسقة دون عناء التنقل.

تُطبق الرسوم الحكومية الرسمية المقررة لعام 2026 بشفافية تامة حسب مدة الإقامة: **286 درهماً لإقامة سنة واحدة**، **386 درهماً لإقامة سنتين (عمل أو أسرة)**، و**1,186 درهماً للإقامة الذهبية لمدة 10 سنوات** شاملة رسوم الإصدار والتوصيل.`,
    legalFrameworkEn: `UAE Federal Law No. 9 of 2006 on the Population Register and Identity Card System and ICP Executive Smart Services Regulations.`,
    legalFrameworkAr: `القانون الاتحادي رقم (9) لسنة 2006 في شأن نظام السجل السكاني وبطاقة الهوية واللوائح التنفيذية للهيئة الاتحادية للهوية والجنسية.`,
    eligibilityEn: [
      'Original valid passport (minimum 6 months validity)',
      'Active UAE Entry Permit (with In-Country Status Change completed or Airport Entry Stamp) or New Born Birth Certificate',
      'Recent studio portrait photo with pure white background conforming to ICAO/ICP biometric standards (no glasses, neutral expression)',
      'Mandatory in-person biometric fingerprint & iris scan for all first-time applicants aged 15 years and above',
    ],
    eligibilityAr: [
      'جواز السفر الأصلي ساري المفعول (بصلاحية لا تقل عن 6 أشهر)',
      'إذن دخول ساري المفعول (مع ختم الدخول بالمطار أو شهادة تعديل الوضع داخل الدولة) أو شهادة الميلاد للمواليد الجدد',
      'صورة شخصية حديثة بخلفية بيضاء مطابقة لمعايير منظمة الطيران المدني والهيئة الاتحادية',
      'الحضور الشخصي لالتقاط البصمة العشرية وبصمة العين للمتقدمين لأول مرة ممن أتموا 15 عاماً فما فوق',
    ],
    galleryImages: ICP_DM_GALLERY,
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'Combined Medical & Emirates ID Typing at KBC',
        titleAr: 'طباعة استمارة الهوية والفحص الطبي في مركز الكرامة',
        descEn: 'Generating your official ICP Emirates ID Registration Form with barcode alongside your DHA Medical Fitness application.',
        descAr: 'طباعة استمارة طلب الهوية الإماراتية المزودة بالباركود بالتزامن مع استمارة الفحص الطبي في مركزنا.',
        durationEn: '15 Mins',
        durationAr: '15 دقيقة',
      },
      {
        stepNumber: 2,
        titleEn: 'Biometric Fingerprint & Iris Capture',
        titleAr: 'التقاط البصمات العشرية وبصمة العين',
        descEn: 'Completing the 10-finger biometric scan and live portrait capture at the authorized ICP biometric station.',
        descAr: 'إجراء البصمة البيومترية للأصابع العشر والتقاط الصورة الحية في محطة البصمة المعتمدة.',
        durationEn: '20 Mins',
        durationAr: '20 دقيقة',
      },
      {
        stepNumber: 3,
        titleEn: 'Residency Stamping Sync & Digital E-ID on UAE Pass',
        titleAr: 'الربط مع تثبيت الإقامة وصدور الهوية الرقمية فوراً',
        descEn: 'Once GDRFA stamps your residency visa, your digital Emirates ID activates instantly on the ICP App and UAE Pass.',
        descAr: 'فور تثبيت تأشيرة الإقامة من إقامة دبي، تصدر النسخة الرقمية لبطاقة الهوية فوراً على تطبيق ICP وتطبيق UAE Pass.',
        durationEn: '24 Hours',
        durationAr: '24 ساعة',
      },
      {
        stepNumber: 4,
        titleEn: 'Physical Smart Card Printing & Zajel Delivery',
        titleAr: 'طباعة البطاقة البلاستيكية الذكية والتوصيل عبر زاجل',
        descEn: 'ICP prints your physical polycarbonate smart card and dispatches it via Zajel courier to your home or Karama pick-up point.',
        descAr: 'طباعة بطاقة الهوية الذكية وتوصيلها مباشرة عبر شركة زاجل إلى عنوانك أو مركز التسليم المعتمد.',
        durationEn: '2 - 4 Days',
        durationAr: '2 - 4 أيام عمل',
      },
    ],
    faqs: [
      {
        questionEn: 'At what age do children need to give biometric fingerprints for a UAE Emirates ID?',
        questionAr: 'في أي عمر يُطلب من الأبناء إجراء البصمة البيومترية لبطاقة الهوية الإماراتية؟',
        answerEn: 'Children under 15 years of age do NOT need to give biometric fingerprints; we process their New Emirates ID using only their original passport, birth certificate, studio photo, and parents’ Emirates IDs. Once a child turns 15, biometric fingerprinting becomes mandatory upon their next renewal.',
        answerAr: 'الأطفال دون سن 15 عاماً معفون تماماً من البصمة البيومترية؛ حيث نصدر هوياتهم الإماراتية باستخدام جواز السفر، شهادة الميلاد، صورة شخصية، وهويات الوالدين فقط. وعند إتمام الابن أو الابنة سن 15 عاماً، تصبح البصمة إلزامية عند التجديد التالي.',
      },
      {
        questionEn: 'Can I use my digital Emirates ID on the ICP / UAE Pass app before the physical plastic card arrives?',
        questionAr: 'هل يمكنني استخدام النسخة الرقمية للهوية الإماراتية قبل استلام البطاقة البلاستيكية؟',
        answerEn: 'Yes! The Digital Emirates ID generated inside the official UAEICP and UAE Pass apps carries 100% legal validity across all UAE government departments, hospitals, telecom providers, and banks even while your physical card is in transit with Zajel.',
        answerAr: 'نعم بالتأكيد! تتمتع النسخة الرقمية لبطاقة الهوية الإماراتية الصادرة عبر تطبيقي UAEICP وUAE Pass بالحجية القانونية الكاملة بنسبة 100% لدى كافة الدوائر الحكومية والبنوك والمستشفيات وشركات الاتصالات في الدولة.',
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
        commentEn: 'Completed my DHA medical test at Karama Medical Center and my new Emirates ID typing and biometrics right there at Karama Business Center. Everything was smooth and well-organized.',
        commentAr: 'أنهيت الفحص الطبي في مركز الكرامة الطبي وطباعة الهوية الإماراتية الجديدة والبصمة في مركز الكرامة للأعمال بنفس الزيارة. تنظيم رائع وسرعة فائقة.',
      },
    ],
    targetKeywords: {
      shortTail: ['emirates id', 'emirates id application', 'icp smart services', 'biometrics dubai', 'new emirates id dubai'],
      longTail: ['new emirates id fees for 2 years visa 386 aed', 'emirates id typing and medical test karama dubai', 'icp emirates id status check online', 'documents required for newborn emirates id in dubai'],
    },
  },

  // =========================================================================
  // ICP 2. EMIRATES ID RENEWAL (1, 2, 5 & 10 YEARS)
  // =========================================================================
  'icp-emirates-id-renewal': {
    detailedOverviewEn: `Every UAE resident must renew their **Emirates ID Card (تجديد بطاقة الهوية الإماراتية)** simultaneously with their residency visa renewal (or every 5/10 years for UAE & GCC Nationals and Golden Visa holders). Under Federal Authority for Identity, Citizenship, Customs and Port Security (ICP) regulations, delaying Emirates ID renewal beyond 30 days from the card's expiry date triggers an automatic federal late fine of **AED 20 per day** (up to a maximum of AED 1,000).

At Karama Business Center (KBC), we make Emirates ID Renewal effortless by combining your **DHA Medical Fitness Test (at our on-site Karama Medical Center — KMFC)**, **ICP Emirates ID Renewal Typing**, and **GDRFA (Amer) Residency Visa Renewal** in one unified counter visit. Because existing residents (aged 15+) already have their biometrics stored in the ICP population registry, you do NOT need to repeat fingerprinting during renewal (unless you turned 15 since your last card was issued).

Our ICP typing officers also capture a fresh high-resolution ICAO-compliant studio photograph and update your registered UAE mobile number and postal delivery details so your new smart card is dispatched without delay.`,
    detailedOverviewAr: `يتوجب على كل مقيم في دولة الإمارات **تجديد بطاقة الهوية الإماراتية** بالتزامن مع تجديد تأشيرة الإقامة (أو كل 5 إلى 10 سنوات للمواطنين ومواطني دول مجلس التعاون وحاملي الإقامة الذهبية). وبموجب لوائح الهيئة الاتحادية للهوية والجنسية (ICP)، فإن التأخر في تجديد بطاقة الهوية لأكثر من 30 يوماً من تاريخ انتهائها يرتب غرامة تأخير اتحادية قدرها **20 درهماً عن كل يوم تأخير** (بحد أقصى 1,000 درهم).

في مركز الكرامة للأعمال (KBC)، نُنجز دورة التجديد الكاملة في زيارة واحدة سريعة؛ حيث تجري فحص اللياقة الطبية في **مركز الكرامة الطبي (KMFC)** بنفس المبنى، مع طباعة استمارة تجديد الهوية الإماراتية وتجديد الإقامة لدى قسم "آمر" المجاور فوراً. وبما أن بصمات المقيمين المسجلين مسبقاً محفوظة في النظام الاتحادي، فلا يُطلب إعادة التبصيم عند التجديد (إلا لمن بلغ سن 15 عاماً حديثاً).

كما يقوم موظفونا بتحديث صورتك الشخصية ورقم هاتفك المسجل وعنوان التوصيل لضمان استلام بطاقتك الجديدة عبر "زاجل" في أسرع وقت.`,
    legalFrameworkEn: `UAE Cabinet Resolution No. 25 of 2014 and ICP Federal Tariff & Late Renewal Exemption Directives.`,
    legalFrameworkAr: `قرارات مجلس الوزراء ولوائح الهيئة الاتحادية للهوية والجنسية والجمارك وأمن المنافذ المنظمة لتجديد بطاقة الهوية والمهل القانونية.`,
    eligibilityEn: [
      'Original expiring or expired Emirates ID card and valid Passport (minimum 6 months validity)',
      'Passed DHA Medical Fitness Test result (completed on-site at Karama Medical Center KMFC)',
      'Renewed MoHRE Labour Contract (for private sector employees) or valid Sponsor Residency / Trade License',
      'Recent studio photograph with white background (biometric fingerprinting required ONLY if the resident just turned 15)',
    ],
    eligibilityAr: [
      'بطاقة الهوية الإماراتية الحالية وجواز السفر الأصلي (ساري المفعول لمدة 6 أشهر على الأقل)',
      'نتيجة فحص اللياقة الطبية (تُنجز فوراً في مركز الكرامة الطبي KMFC بنفس المبنى)',
      'عقد العمل المجدد (لموظفي القطاع الخاص) أو سريان إقامة الكفيل / الرخصة التجارية',
      'صورة شخصية حديثة بخلفية بيضاء (ولا يُطلب التبصيم إلا لمن أتم سن 15 عاماً بعد إصدار البطاقة السابقة)',
    ],
    galleryImages: ICP_DM_GALLERY,
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'DHA Medical Fitness Screening at KMFC',
        titleAr: 'إجراء الفحص الطبي في مركز الكرامة الطبي (KMFC)',
        descEn: 'Completing the mandatory residency medical blood test and chest X-ray at our co-located Karama Medical Center.',
        descAr: 'إتمام فحص الدم والأشعة لتجديد الإقامة في مركزنا الطبي المعتمد بنفس المبنى.',
        durationEn: '15 - 30 Mins',
        durationAr: '15 - 30 دقيقة',
      },
      {
        stepNumber: 2,
        titleEn: 'ICP Emirates ID Renewal Typing & Fee Settlement',
        titleAr: 'طباعة استمارة تجديد الهوية وسداد الرسوم الاتحادية',
        descEn: 'Submitting the electronic renewal application to ICP with updated photo and mobile number (AED 386 for 2 years).',
        descAr: 'تقديم طلب تجديد الهوية إلكترونياً للهيئة الاتحادية مع تحديث الصورة ورقم الهاتف وسداد الرسوم الرسمية.',
        durationEn: '10 Mins',
        durationAr: '10 دقائق',
      },
      {
        stepNumber: 3,
        titleEn: 'GDRFA Residency Renewal & Instant Card Printing Order',
        titleAr: 'تثبيت تجديد الإقامة وإصدار أمر طباعة الهوية',
        descEn: 'Approving the residency visa renewal at our Amer desk, which immediately triggers ICP smart card printing and Zajel dispatch.',
        descAr: 'اعتماد تجديد الإقامة في قسم آمر المجاور، مما يرسل أمر الطباعة الفوري لبطاقة الهوية الجديدة وتوصيلها عبر زاجل.',
        durationEn: '24 Hours',
        durationAr: '24 ساعة',
      },
    ],
    faqs: [
      {
        questionEn: 'How early before expiry can I renew my UAE Emirates ID?',
        questionAr: 'قبل كم شهر من تاريخ الانتهاء يمكنني تجديد بطاقة الهوية الإماراتية؟',
        answerEn: 'For UAE Citizens, Emirates ID can be renewed between 1 and 6 months prior to expiry. For Expatriate Residents in Dubai, Emirates ID renewal is tied to your residency visa renewal (typically within 30 to 60 days before visa expiry, or earlier if obtaining special GDRFA early renewal permission for travel).',
        answerAr: 'لمواطني دولة الإمارات، يمكن تجديد الهوية قبل انتهائها بمدة تتراوح بين شهر و6 أشهر. أما للمقيمين في دبي، فيرتبط تجديد الهوية بتجديد تأشيرة الإقامة (عادةً خلال 30 إلى 60 يوماً قبل الانتهاء، أو قبل ذلك بعد استخراج إذن تجديد مبكر لدواعي السفر).',
      },
      {
        questionEn: 'Can I apply for an exemption from the AED 20/day Emirates ID late renewal fine?',
        questionAr: 'هل يمكن تقديم طلب إعفاء من غرامات تأخير تجديد الهوية الإماراتية (20 درهماً يومياً)؟',
        answerEn: 'Yes! ICP allows formal Fine Exemption Requests (طلب إعفاء من غرامات التأخير) for specific documented humanitarian and legal cases: if you were outside the UAE for more than 3 months when your ID expired, if you were hospitalized, if your passport was held in court/embassy renewal, or due to administrative delays. Our ICP desk submits the official exemption petition with supporting proofs.',
        answerAr: 'نعم! تتيح الهيئة الاتحادية تقديم "طلب إعفاء من غرامات التأخير" للحالات الموثقة قانونياً؛ مثل التواجد خارج الدولة لأكثر من 3 أشهر وقت انتهاء البطاقة، أو تلقي العلاج في المستشفى، أو حجز جواز السفر لدى المحكمة أو السفارة للتجديد. يقوم مكتبنا برفع طلب الإعفاء الرسمي مرفقاً بالمستندات المؤيدة.',
      },
    ],
    reviews: [
      {
        name: 'Leila Al-Maktoum',
        roleEn: 'Operations Executive',
        roleAr: 'مديرة تنفيذية للعمليات',
        companyEn: 'Emirates Retail Group',
        companyAr: 'مجموعة الإمارات للتجزئة',
        rating: 5,
        date: 'October 2026',
        commentEn: 'Renewed my Emirates ID and residency visa at Karama Business Center right after my medical test at KMFC. Everything was done in 25 minutes and my new card arrived via Zajel 2 days later.',
        commentAr: 'جددت بطاقة الهوية الإماراتية والإقامة في مركز الكرامة للأعمال فور انتهاء الفحص الطبي في KMFC خلال 25 دقيقة، ووصلت البطاقة الجديدة عبر زاجل بعد يومين فقط.',
      },
    ],
    targetKeywords: {
      shortTail: ['emirates id renewal', 'renew emirates id dubai', 'emirates id status', 'emirates id fine check', 'icp id renewal'],
      longTail: ['emirates id renewal fees for 2 years 2026', 'emirates id late renewal fine exemption request uae', 'renew emirates id and medical test karama dubai', 'how to track emirates id printing status online'],
    },
  },

  // =========================================================================
  // ICP 3. EMIRATES ID REPLACEMENT (LOST, DAMAGED OR DATA UPDATE)
  // =========================================================================
  'icp-emirates-id-replacement': {
    detailedOverviewEn: `If your physical UAE Emirates ID card has been lost, stolen, or physically damaged (such as a cracked card body or an unreadable electronic chip), or if you have legally changed your name, nationality, or job title/employer and need the printed face of your smart card updated before its normal expiry date, you must apply for an official **ICP Emirates ID Replacement / Data Update (إصدار بدل فاقد أو تالف أو تحديث بيانات الهوية)** through the Federal Authority for Identity, Citizenship, Customs and Port Security.

At Karama Business Center (KBC), our authorized ICP typing counter immediately deactivates the lost or stolen card’s old serial number in the federal registry (preventing any unauthorized identity misuse) and submits your replacement card printing order on the spot.

For urgent travelers, banking signatories, or property buyers who cannot wait 3–4 business days for standard printing, we also process **Fawri Urgent 24-Hour Emirates ID Replacement (خدمة فوري المستعجلة خلال 24 ساعة)**. Standard ICP replacement government fee is **AED 386** (AED 300 replacement fee + AED 70 service fee + Zajel delivery), with an optional AED 150 Fawri urgent printing surcharge.`,
    detailedOverviewAr: `في حال فقدان بطاقة الهوية الإماراتية أو سرقتها أو تعرضها للتلف (مثل كسر البطاقة أو تعطل الشريحة الذكية)، أو عند الحاجة لتحديث البيانات المطبوعة على البطاقة (مثل تغيير الاسم أو الجنسية أو المسمى الوظيفي)، يتوجب التقديم فوراً على معاملة **إصدار بدل فاقد أو تالف لبطاقة الهوية الإماراتية** لدى الهيئة الاتحادية للهوية والجنسية (ICP).

في مركز الكرامة للأعمال (KBC)، يقوم موظفو الهوية المعتمدون بإيقاف الرقم التسلسلي للبطاقة المفقودة فوراً في النظام الاتحادي (لحمايتك من أي استغلال غير قانوني للهوية)، ورفع طلب طباعة البطاقة البديلة بنفس مدة الصلاحية المتبقية في إقامتك.

كما نوفر للمتعاملين المستعجلين خيار **خدمة "فوري" (Fawri)** لاستلام البطاقة البديلة المطبوعة خلال 24 ساعة فقط. تبلغ الرسوم الحكومية الأساسية لإصدار بدل فاقد أو تالف **386 درهماً** (مع إمكانية إضافة 150 درهماً لخدمة الطباعة الفورية المستعجلة).`,
    legalFrameworkEn: `UAE Federal Law No. 9 of 2006 and ICP Smart Identity Card Replacement & Data Modification Directives.`,
    legalFrameworkAr: `القانون الاتحادي رقم (9) لسنة 2006 ولوائح الهيئة الاتحادية للهوية والجنسية بشأن استبدال البطاقات المفقودة والتالفة وتحديث البيانات.`,
    eligibilityEn: [
      'Original valid Passport (with active UAE Residency Visa for expats, or Family Book Khulasat Al Qaid for UAE citizens)',
      'Old damaged physical Emirates ID card (if applying for Damaged Card Replacement)',
      'Digital copy or ID number of the lost Emirates ID (if applying for Lost Card Replacement)',
      'Recent high-resolution studio photo with white background',
    ],
    eligibilityAr: [
      'جواز السفر الأصلي ساري المفعول مع إقامة فعالة للمقيمين (أو خلاصة القيد للمواطنين)',
      'بطاقة الهوية التالفة الأصلية (في حال طلب بدل تالف)',
      'رقم الهوية أو صورة عنها (في حال طلب بدل فاقد)',
      'صورة شخصية حديثة بخلفية بيضاء',
    ],
    galleryImages: ICP_DM_GALLERY,
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'Identity Verification & Old Card Deactivation',
        titleAr: 'التحقق من الهوية وإيقاف البطاقة المفقودة أو التالفة',
        descEn: 'Verifying your Unified Identity Number (UID) and Emirates ID number via passport/UAE Pass and flagging the old card.',
        descAr: 'التحقق من رقم الهوية والرقم الموحد عبر جواز السفر أو الهوية الرقمية وإلغاء شريحة البطاقة القديمة.',
        durationEn: '10 Mins',
        durationAr: '10 دقائق',
      },
      {
        stepNumber: 2,
        titleEn: 'ICP Replacement Application & Fee Payment (AED 386)',
        titleAr: 'تقديم طلب بدل فاقد/تالف وسداد الرسوم (386 درهم)',
        descEn: 'Lodging the replacement order in the ICP e-channel (with optional AED 150 Fawri 24-hour urgent printing).',
        descAr: 'رفع طلب الاستبدال عبر النظام الذكي للهيئة وسداد الرسوم المقررة (مع خيار خدمة فوري المستعجلة).',
        durationEn: '10 Mins',
        durationAr: '10 دقائق',
      },
      {
        stepNumber: 3,
        titleEn: 'Smart Card Re-Printing & Zajel Delivery',
        titleAr: 'إعادة طباعة البطاقة الذكية والتسليم عبر زاجل',
        descEn: 'Printing the new polycarbonate Emirates ID card and delivering it via Zajel courier (or 24h Fawri center collection).',
        descAr: 'طباعة البطاقة الجديدة وتوصيلها عبر شركة زاجل (أو استلامها خلال 24 ساعة عبر مسار خدمة فوري).',
        durationEn: '24h (Fawri) / 48-72h (Standard)',
        durationAr: '24 ساعة (فوري) / 48-72 ساعة (عادي)',
      },
    ],
    faqs: [
      {
        questionEn: 'Do I need a Dubai Police Lost Item Report to replace a lost Emirates ID?',
        questionAr: 'هل أحتاج إلى بلاغ فقدان من شرطة دبي لاستخراج بدل فاقد للهوية الإماراتية؟',
        answerEn: 'For standard lost Emirates ID replacements processed through ICP Smart Services at our Karama desk, when we verify your identity via your original Passport and active UAE Pass, the ICP replacement application itself automatically deactivates the lost card without requiring a physical police station visit (unless the card was stolen alongside other valuables requiring a criminal report).',
        answerAr: 'في حالات الفقدان العادية، وبمجرد التحقق من هويتك عبر جواز السفر الأصلي وتطبيق UAE Pass في مكتبنا بالكرامة، يقوم طلب "بدل فاقد" في نظام الهيئة الاتحادية بإيقاف البطاقة القديمة تلقائياً دون الحاجة لمراجعة مركز الشرطة (إلا في حال السرقة الجنائية التي تستدعي فتح بلاغ رسمي).',
      },
    ],
    reviews: [
      {
        name: 'Omar Al-Ghurair',
        roleEn: 'Investment Associate',
        roleAr: 'مسؤول استثمار',
        companyEn: 'Ghurair Capital Partners',
        companyAr: 'الغرير كابيتال بارتنرز',
        rating: 5,
        date: 'October 2026',
        commentEn: 'Lost my wallet before a business trip. KBC submitted my Fawri urgent Emirates ID replacement in 10 minutes and I had my new physical ID card the next afternoon.',
        commentAr: 'فقدت محفظتي قبل رحلة عمل عاجلة. قدم لي مركز الكرامة للأعمال طلب بدل فاقد بخدمة "فوري" خلال 10 دقائق واستلمت البطاقة الجديدة عصر اليوم التالي.',
      },
    ],
    targetKeywords: {
      shortTail: ['lost emirates id replacement', 'damaged emirates id', 'fawri emirates id 24 hours', 'replace emirates id dubai', 'update emirates id details'],
      longTail: ['lost emirates id replacement fee 386 aed dubai', 'how to get urgent emirates id in 24 hours fawri', 'change name or job title on emirates id card', 'damaged emirates id chip replacement karama'],
    },
  },

  // =========================================================================
  // ICP 4. URGENT BIOMETRIC FINGERPRINT APPOINTMENTS & VIP RESCHEDULING
  // =========================================================================
  'icp-urgent-biometric-appointment': {
    detailedOverviewEn: `During peak residency seasons in Dubai, standard ICP Customer Happiness Center biometric fingerprint appointment slots (at Al Barsha, Al Rashidiya, Al Karama, Al Ghazal, or Al Nahda) can sometimes show wait times of 1 to 3 weeks. Because GDRFA residency visa stamping cannot be finalized until the applicant's 10-finger biometric scan is transmitted by ICP into the federal database, a delayed biometric appointment stalls your entire residency visa, Emirates ID, bank account, and travel schedule.

At Karama Business Center (KBC), our ICP Biometric Scheduling & VIP Coordination Desk resolves appointment bottlenecks immediately:
1. **Priority Biometric Slot Booking & Rescheduling**: Monitoring live ICP center capacity across all Dubai stations to lock in the earliest available appointment slot (often within 24–48 hours at Karama Central Post Office / Al Ghazal / Al Barsha ICP centers).
2. **Simultaneous KMFC Medical & ICP Biometric Coordination**: Scheduling your DHA Medical Fitness Test at our on-site Karama Medical Center (KMFC) alongside your ICP biometric scan so both prerequisites clear in parallel.
3. **Mobile Biometric & VIP Fast-Track Assistance**: Arranging priority lanes for Golden Visa investors, senior citizens, People of Determination, and corporate executives.`,
    detailedOverviewAr: `خلال فترات الذروة في دبي، قد تمتد مواعيد البصمة البيومترية العادية في مراكز سعادة المتعاملين التابعة للهيئة الاتحادية للهوية والجنسية (في البرشاء، الراشدية، الكرامة، الغزال، أو النهدة) لعدة أسابيع. ونظراً لعدم إمكانية تثبيت تأشيرة الإقامة النهائية قبل إتمام البصمة العشرية للمتقدمين الجدد، فإن تأخر موعد البصمة يعطل إصدار الإقامة والهوية والحساب البنكي وخطط السفر.

في مركز الكرامة للأعمال (KBC)، يوفر مكتب تنسيق مواعيد البصمة والمسار السريع حلولاً فورية:
1. **حجز وتقديم مواعيد البصمة المستعجلة**: رصد المواعيد المتاحة لحظياً في كافة مراكز الهوية بدبي (بما فيها مركز بريد الكرامة المركزي المجاور لنا، الغزال، والبرشاء) لتأمين أقرب موعد متاح خلال 24 إلى 48 ساعة.
2. **التنسيق المتزامن للفحص الطبي (KMFC) والبصمة**: إجراء الفحص الطبي السريع في مركز الكرامة الطبي بمقرنا بالتوازي مع موعد البصمة لاختصار الوقت إلى الحد الأدنى.
3. **مسارات الأولوية لكبار الشخصيات وحاملي الإقامة الذهبية وكبار السن**: تنسيق إجراءات البصمة السريعة دون انتظار.`,
    legalFrameworkEn: `ICP Biometric Enrollment Protocols for Population Register Enrollment (10-Finger Optical Print, Iris Recognition, and Facial Biometrics).`,
    legalFrameworkAr: `بروتوكولات التسجيل البيومتري السكاني الصادرة عن الهيئة الاتحادية للهوية والجنسية والجمارك وأمن المنافذ.`,
    eligibilityEn: [
      'First-time UAE Residency Visa applicants aged 15 years and above',
      'Typed ICP Emirates ID Application Form bearing an active Application Number (PRAN) and barcode',
      'Original valid Passport and Entry Permit / Status Change Certificate',
      'Clean fingertips free of henna, cuts, or bandages for accurate optical scanning',
    ],
    eligibilityAr: [
      'المتقدمون لإصدار الإقامة والهوية الإماراتية لأول مرة ممن أتموا سن 15 عاماً فما فوق',
      'استمارة طلب الهوية الإماراتية مطبوعة وتحمل رقم الطلب الرسمي (PRAN) والباركود',
      'جواز السفر الأصلي وإذن الدخول أو شهادة تعديل الوضع',
      'خلو أطراف الأصابع من الحناء أو الجروح لضمان قراءة البصمة الضوئية بدقة',
    ],
    galleryImages: ICP_DM_GALLERY,
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'Emirates ID Form Generation / Appointment Audit',
        titleAr: 'طباعة استمارة الهوية أو مراجعة رقم الطلب الحالي',
        descEn: 'Verifying your ICP application barcode (PRAN) and checking live slot availability across Dubai biometric centers.',
        descAr: 'التحقق من رقم استمارة الهوية وفحص المواعيد الشاغرة لحظياً في مراكز البصمة بدبي.',
        durationEn: '10 Mins',
        durationAr: '10 دقائق',
      },
      {
        stepNumber: 2,
        titleEn: 'Priority Slot Confirmation & Location Selection',
        titleAr: 'تأكيد حجز الموعد المبكر وإصدار تذكرة الموعد',
        descEn: 'Locking in the earliest biometric slot at Karama Post Office ICP Center (right next to KBC) or your preferred branch.',
        descAr: 'تثبيت أقرب موعد متاح في مركز هوية بريد الكرامة (المجاور لمركزنا مباشرة) أو المركز الأقرب إليك وطباعة إشعار الموعد.',
        durationEn: '10 Mins',
        durationAr: '10 دقائق',
      },
      {
        stepNumber: 3,
        titleEn: 'Biometric Scan & Automatic GDRFA Visa Sync',
        titleAr: 'إتمام البصمة والربط الفوري مع إقامة دبي لتثبيت التأشيرة',
        descEn: 'Once your fingerprints are captured, our Amer desk immediately submits your final Residency Visa stamping.',
        descAr: 'فور التقاط البصمة وظهورها في النظام، يقوم قسم آمر لدينا برفع طلب تثبيت الإقامة النهائية فوراً.',
        durationEn: 'Same Day post-scan',
        durationAr: 'في نفس يوم البصمة',
      },
    ],
    faqs: [
      {
        questionEn: 'Where is the closest ICP biometric fingerprinting center to Karama Business Center?',
        questionAr: 'أين يقع أقرب مركز بصمة تابع للهيئة الاتحادية من مركز الكرامة للأعمال؟',
        answerEn: 'The ICP Karama Biometric Center inside the **Karama Central Post Office** is located literally right next door to Karama Business Center! You can complete your DHA Medical Fitness Test at our Karama Medical Center (KMFC), have our desk book your biometric slot, and walk next door to complete your fingerprinting.',
        answerAr: 'يقع مركز بصمة الهوية التابع للهيئة الاتحادية داخل مبنى **بريد الكرامة المركزي** الملاصق تماماً لمركز الكرامة للأعمال! يمكنك إجراء الفحص الطبي في مركز الكرامة الطبي (KMFC) لدينا، وحجز موعد البصمة عبر مكتبنا، والانتقال سيراً على الأقدام خلال دقيقة واحدة لإتمام البصمة.',
      },
      {
        questionEn: 'What if I already typed my Emirates ID somewhere else and got a biometric appointment 3 weeks away?',
        questionAr: 'ماذا لو طبعت استمارة الهوية في مكتب آخر وحصلت على موعد بصمة بعد 3 أسابيع؟',
        answerEn: 'Bring your Emirates ID application form to our Karama ICP desk. Our officers can access the ICP appointment rescheduling portal and move your biometric date to a much earlier slot so your residency visa isn’t delayed.',
        answerAr: 'تفضل بإحضار استمارة الهوية إلى مكتبنا في الكرامة؛ حيث يقوم موظفونا بالدخول إلى نظام جدولة المواعيد وتعديل وتقريب موعد البصمة إلى أقرب تاريخ متاح لتفادي تعطيل إقامتك.',
      },
    ],
    reviews: [
      {
        name: 'Priya Nair',
        roleEn: 'HR Coordinator',
        roleAr: 'منسقة موارد بشرية',
        companyEn: 'Vertex Digital Solutions LLC',
        companyAr: 'فيرتكس للحلول الرقمية ذ.م.م',
        rating: 5,
        date: 'October 2026',
        commentEn: 'Our new software developer had a biometric appointment 18 days out. KBC rescheduled his slot to the next morning at Karama Post Office right next door and stamped his visa the same afternoon!',
        commentAr: 'كان موعد بصمة الموظف الجديد بعد 18 يوماً. قام مركز الكرامة للأعمال بتقديم الموعد لصباح اليوم التالي في بريد الكرامة المجاور لهم وتم تثبيت إقامته عصر نفس اليوم!',
      },
    ],
    targetKeywords: {
      shortTail: ['biometrics dubai', 'emirates id biometric appointment', 'icp karama post office', 'reschedule biometric appointment uae', 'urgent biometrics dubai'],
      longTail: ['how to get early biometric appointment for emirates id in dubai', 'icp customer happiness center karama post office timings', 'reschedule emirates id fingerprint appointment online', 'medical and biometric in one place karama dubai'],
    },
  },

  // =========================================================================
  // ICP 5. ICP SMART SERVICES: MOBILE UPDATE, PASSPORT CHANGE & TRAVEL REPORT
  // =========================================================================
  'icp-smart-services-data-update': {
    detailedOverviewEn: `Your Federal Authority for Identity, Citizenship, Customs and Port Security (ICP) profile is the master identity record that powers **UAE Pass**, bank KYC verification, telecom registration, and digital government access across all seven Emirates. Whenever your personal details change—such as getting a new UAE mobile number, renewing your passport at your embassy, updating your residency address, or needing an official **Entry & Exit Travel History Report (كشف حركة الدخول والخروج)**—your ICP Smart Services record must be updated immediately.

At Karama Business Center (KBC), our authorized ICP Smart Services desk resolves all federal identity data modifications within 15 to 30 minutes:
1. **ICP Mobile Number & Email Update (تحديث رقم الهاتف والبريد الإلكتروني في الهيئة الاتحادية)**: Mandatory when you lose access to your old SIM card and cannot receive OTP verification codes for UAE Pass, bank apps, or Emirates ID tracking.
2. **Passport Information Update in ICP System (تحديث بيانات جواز السفر الجديد)**: Linking your newly renewed passport number and expiry date to your active Emirates ID and Golden/Residency Visa so airline check-in systems and e-Gates recognize your new passport.
3. **Official ICP Entry & Exit Travel Movement Certificate (شهادة خلاصة حركة الدخول والخروج)**: Issuing stamped federal travel history reports required for Golden Visa physical presence proof, tax residency certificates, court proceedings, or foreign citizenship/embassy renewals.`,
    detailedOverviewAr: `يُعد ملفك الشخصي لدى الهيئة الاتحادية للهوية والجنسية والجمارك وأمن المنافذ (ICP) السجل السيادي الرئيسي الذي تعتمد عليه الهوية الرقمية (UAE Pass)، البنوك، شركات الاتصالات، وكافة البوابات الحكومية في الدولة. وعند حدوث أي تغيير في بياناتك — مثل تغيير رقم الهاتف المتحرك، تجديد جواز السفر لدى سفارتك، أو الحاجة لاستخراج **شهادة حركة الدخول والخروج الرسمية** — يجب تحديث ملفك في النظام الذكي للهيئة فوراً.

في مركز الكرامة للأعمال (KBC)، نُنجز كافة خدمات التحديث والشهادات الاتحادية خلال 15 إلى 30 دقيقة:
1. **تحديث رقم الهاتف المتحرك في نظام الهوية (ICP)**: ضروري لاستعادة القدرة على استلام رموز التحقق (OTP) لتفعيل تطبيق UAE Pass ومتابعة الهوية والمعاملات البنكية.
2. **تحديث ونقل بيانات جواز السفر الجديد**: ربط رقم وتاريخ صلاحية جواز سفرك المجدد بملف الهوية والإقامة السارية لتفادي أي تأخير في المطارات والبوابات الذكية.
3. **إصدار تقرير/شهادة حركة الدخول والخروج (Travel History Report)**: استخراج الكشف الرسمي المعتمد لحركات السفر عبر منافذ الدولة (المطلوب لمعاملات الإقامة الذهبية، شهادات الموطن الضريبي، السفارات، والمحاكم).`,
    legalFrameworkEn: `ICP Smart Services Federal Data Accuracy & Population Registry Directives.`,
    legalFrameworkAr: `اللوائح التنظيمية للخدمات الذكية وتحديث بيانات السجل السكاني بالهيئة الاتحادية للهوية والجنسية.`,
    eligibilityEn: [
      'Original valid Passport (and previous passport copy if updating renewed passport details)',
      'Emirates ID number or Unified Identity Number (UID)',
      'Active UAE mobile number registered under the applicant’s name',
      'Live facial biometric verification or in-person verification at our Karama ICP desk',
    ],
    eligibilityAr: [
      'جواز السفر الأصلي الساري (وصورة الجواز القديم في حال تحديث بيانات الجواز المجدد)',
      'رقم الهوية الإماراتية أو الرقم الموحد (UID)',
      'رقم هاتف إماراتي فعال مسجل باسم المتعامل',
      'التحقق من الهوية عبر بصمة الوجه الذكية أو الحضور لمكتبنا في الكرامة',
    ],
    galleryImages: ICP_DM_GALLERY,
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'ICP Profile Audit & Identity Verification',
        titleAr: 'فحص السجل السكاني والتحقق من بيانات المتعامل',
        descEn: 'Locating your federal record using UID, Emirates ID, and passport credentials.',
        descAr: 'الدخول إلى ملف المتعامل في النظام الذكي للهيئة الاتحادية والتحقق من البيانات الحالية.',
        durationEn: '5 Mins',
        durationAr: '5 دقائق',
      },
      {
        stepNumber: 2,
        titleEn: 'Data Modification / Travel Report Request Submission',
        titleAr: 'تقديم طلب التحديث أو استخراج شهادة الدخول والخروج',
        descEn: 'Submitting the mobile update, passport link, or travel report request and paying the official ICP fee (AED 150–200).',
        descAr: 'إدراج طلب تحديث الهاتف أو الجواز أو إصدار كشف السفر وسداد الرسوم الحكومية المقررة.',
        durationEn: '10 Mins',
        durationAr: '10 دقائق',
      },
      {
        stepNumber: 3,
        titleEn: 'Instant System Sync & Official Certificate Delivery',
        titleAr: 'التفعيل الفوري في النظام واستلام الشهادة الرسمية',
        descEn: 'Receiving confirmation SMS of your updated mobile/passport or downloading the QR-stamped Travel Movement Certificate.',
        descAr: 'استلام إشعار التحديث الفوري عبر الرسائل النصية أو طباعة شهادة حركة الدخول والخروج المختومة برمز QR.',
        durationEn: '15 - 60 Mins',
        durationAr: '15 - 60 دقيقة',
      },
    ],
    faqs: [
      {
        questionEn: 'What is the difference between updating my mobile number in Amer (GDRFA) vs. ICP?',
        questionAr: 'ما الفرق بين تحديث رقم الهاتف في "آمر" (إقامة دبي) وتحديثه في "الهيئة الاتحادية" (ICP)؟',
        answerEn: 'If your residency visa is issued in Dubai, you have two records: (1) Your **GDRFA Dubai file** (used for Dubai visa OTPs and sponsoring family), and (2) Your **Federal ICP Emirates ID file** (used for Emirates ID delivery, UAE Pass activation, and federal services). At Karama Business Center, our officers can update your mobile number across BOTH GDRFA and ICP systems in one visit!',
        answerAr: 'لحاملي إقامات دبي، يوجد سجلان: (1) **سجل إقامة دبي GDRFA** (الخاص بمعاملات التأشيرات وكفالة الأسرة)، و(2) **سجل الهيئة الاتحادية ICP** (الخاص ببطاقة الهوية الإماراتية وتفعيل تطبيق UAE Pass). في مركز الكرامة للأعمال، نقوم بتحديث رقم هاتفك في النظامين معاً في زيارة واحدة!',
      },
    ],
    reviews: [
      {
        name: 'Tariq Al-Zahrani',
        roleEn: 'Senior Architect',
        roleAr: 'مهندس معماري أول',
        companyEn: 'Dar Al-Omran Consultants',
        companyAr: 'دار العمران للاستشارات الهندسية',
        rating: 5,
        date: 'October 2026',
        commentEn: 'Changed my mobile number and got locked out of UAE Pass and my bank KYC. KBC updated my phone number in both ICP and GDRFA in 20 minutes.',
        commentAr: 'غيرت رقم هاتفي وتوقف تطبيق الهوية الرقمية وتحديث البنك. قام مركز الكرامة للأعمال بتحديث رقمي الجديد في كل من الهيئة الاتحادية وإقامة دبي خلال 20 دقيقة فقط.',
      },
    ],
    targetKeywords: {
      shortTail: ['icp mobile number update', 'update passport in emirates id', 'entry exit report uae', 'travel history certificate icp', 'uae smart services'],
      longTail: ['how to change mobile number in icp smart services uae', 'update new passport number in uae residency and emirates id', 'icp entry and exit movement report dubai fee', 'unlock uae pass mobile number change karama'],
    },
  },

  // =========================================================================
  // ICP 6. ZAJEL EXPRESS EMIRATES ID COURIER & DOCUMENT DELIVERY
  // =========================================================================
  'icp-zajel-courier-delivery': {
    detailedOverviewEn: `Once your UAE Emirates ID smart card is printed by the Federal Authority for Identity, Citizenship, Customs and Port Security (ICP), or when original government certificates, Occupational Health Cards (OHC), and attested legal documents need secure hand-delivery across Dubai and the UAE, **Zajel Courier Services (زاجل لخدمات التوصيل السريع)** serves as the official authorized government logistics partner.

At Karama Business Center (KBC), we operate an integrated **Zajel & Emirates ID Tracking / Delivery Coordination Desk**. If your printed Emirates ID is delayed in transit, returned due to an unreachable phone number, or needs to be rerouted from an old residential address to your corporate office or to our Karama branch for secure pick-up, our officers track the live ICP-Zajel airway bill (AWB) and schedule priority delivery.

We also arrange VIP same-day and next-day Zajel courier collection and delivery for corporate PRO batches—picking up original passports, E-Signature cards, and legal contracts from your office and delivering completed Emirates IDs and stamped documents back to your desk.`,
    detailedOverviewAr: `فور انتهاء طباعة بطاقة الهوية الإماراتية الذكية من قِبل الهيئة الاتحادية للهوية والجنسية (ICP)، أو عند الحاجة لنقل وتوصيل الوثائق الحكومية الأصلية، بطاقات الصحة المهنية، والعقود المصدقة بأمان تام في دبي وكافة إمارات الدولة، تتولى شركة **زاجل لخدمات التوصيل (Zajel Courier)** مهمة النقل الرسمي المعتمد.

في مركز الكرامة للأعمال (KBC)، نوفر مكتب **تنسيق وتتبع شحنات زاجل وبطاقات الهوية الإماراتية**. إذا تأخر استلام بطاقة هويتك المطبوعة، أو تعذر التواصل معك من قِبل المندوب، أو رغبت في تعديل عنوان التسليم من عنوانك القديم إلى مقر عملك أو استلامها عبر مركزنا في الكرامة، يقوم موظفونا بتتبع رقم بوليصة الشحن (AWB) وتحديث بيانات التوصيل الفوري.

كما نوفر للشركات ورجال الأعمال خدمة المندوب السريع لاستلام وتسليم جوازات السفر وبطاقات الهوية المنجزة من وإلى مقر الشركة بأعلى معايير الأمان والسرعة.`,
    legalFrameworkEn: `ICP & GDRFA Authorized Government Document Logistics and Zajel Identity Verification Handover Protocols.`,
    legalFrameworkAr: `لوائح التوصيل الحكومي المعتمد وبروتوكولات تسليم وثائق الهوية الرسمية عبر شركة زاجل.`,
    eligibilityEn: [
      'ICP Emirates ID Application Number (PRAN — starting with 800...) or Zajel Airway Bill (AWB) tracking number',
      'Original Passport or previous Emirates ID required upon physical card handover by courier',
      'Active UAE mobile number to receive courier delivery OTP',
      'Updated Makani / building / office address in Dubai or the UAE',
    ],
    eligibilityAr: [
      'رقم طلب الهوية الإماراتية (الذي يبدأ بـ 800...) أو رقم بوليصة شحن زاجل (AWB)',
      'إبراز جواز السفر الأصلي أو الهوية السابقة عند استلام البطاقة الجديدة من مندوب التوصيل',
      'رقم هاتف إماراتي فعال لاستلام رمز التحقق وتنسيق الموعد مع المندوب',
      'عنوان واضح (رقم المبنى، الشارع، أو رقم مكاني) للتوصيل المباشر',
    ],
    galleryImages: ICP_DM_GALLERY,
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'ICP Card Printing & Zajel AWB Status Audit',
        titleAr: 'فحص حالة طباعة البطاقة ورقم بوليصة زاجل',
        descEn: 'Checking whether your Emirates ID has been handed over from the ICP printing press to Zajel sorting hub.',
        descAr: 'التحقق من صدور البطاقة من مطبعة الهيئة الاتحادية واستلامها في مركز فرز شحنات زاجل.',
        durationEn: '5 Mins',
        durationAr: '5 دقائق',
      },
      {
        stepNumber: 2,
        titleEn: 'Address Rerouting & Mobile Contact Update',
        titleAr: 'تحديث عنوان التوصيل ورقم التواصل',
        descEn: 'Updating your delivery coordinates and scheduling a confirmed morning or evening delivery window.',
        descAr: 'تعديل موقع التسليم وتحديد الفترة الصباحية أو المسائية المناسبة لاستلام البطاقة.',
        durationEn: '10 Mins',
        durationAr: '10 دقائق',
      },
      {
        stepNumber: 3,
        titleEn: 'Verified Doorstep Handover',
        titleAr: 'التسليم الموثق للبطاقة في الموعد المحدد',
        descEn: 'Direct courier delivery to your doorstep with identity verification.',
        descAr: 'توصيل البطاقة الأصلية إلى عنوانك وتسليمها بعد التحقق من إثبات الهوية.',
        durationEn: '24 - 48 Hours',
        durationAr: '24 - 48 ساعة',
      },
    ],
    faqs: [
      {
        questionEn: 'How can I track my Emirates ID delivery with Zajel after my visa is stamped?',
        questionAr: 'كيف يمكنني تتبع موعد توصيل بطاقة الهوية الإماراتية عبر زاجل بعد تثبيت الإقامة؟',
        answerEn: 'Once your residency visa is stamped, ICP prints your physical card within 24–48 hours and assigns a Zajel Airway Bill (AWB) linked to your 21-digit ICP Application Number (starting with 800...). Our KBC desk tracks both the ICP printing stage and the live Zajel courier dispatch for you.',
        answerAr: 'بعد تثبيت الإقامة، تتم طباعة البطاقة خلال 24 إلى 48 ساعة وتصدر لها بوليصة شحن لدى زاجل مرتبطة برقم طلب الهوية المكون من 21 رقماً (والذي يبدأ بـ 800). يقوم مكتبنا في الكرامة بمتابعة حالة الطباعة والشحن وتنسيق التسليم السريع لك.',
      },
    ],
    reviews: [
      {
        name: 'Khalid Al-Mazrouei',
        roleEn: 'PRO Manager',
        roleAr: 'مدير العلاقات الحكومية',
        companyEn: 'Mazrouei Hospitality Group',
        companyAr: 'مجموعة المزروعي للضيافة',
        rating: 5,
        date: 'October 2026',
        commentEn: 'Having all our staff Emirates IDs routed and tracked through Karama Business Center prevents lost cards and missed courier calls.',
        commentAr: 'متابعة وتنسيق استلام بطاقات الهوية لموظفينا عبر مركز الكرامة للأعمال وفر علينا مشكلة ضياع الشحنات أو عدم الرد على المندوب.',
      },
    ],
    targetKeywords: {
      shortTail: ['zajel emirates id tracking', 'emirates id delivery status', 'zajel courier dubai', 'track emirates id card', 'icp card delivery'],
      longTail: ['how to track emirates id in zajel with application number', 'change emirates id delivery address zajel dubai', 'urgent emirates id courier delivery karama', 'emirates id printed but not delivered zajel contact'],
    },
  },

  // =========================================================================
  // DM 1. EJARI TENANCY CONTRACT REGISTRATION & RENEWAL (RESIDENTIAL & COMMERCIAL)
  // =========================================================================
  'dm-ejari-registration': {
    detailedOverviewEn: `**Ejari (إيجاري — meaning "My Rent")** is the mandatory official tenancy contract registration system administered by the Dubai Land Department (DLD / RERA) in integration with Dubai Municipality and DEWA. Under Dubai Law No. 26 of 2007 Regulating the Relationship Between Landlords and Tenants, every residential apartment/villa lease and every commercial office, shop, or warehouse lease in Dubai must be registered in the Ejari system to acquire legal validity.

Without an active **Ejari Certificate**:
- **Residents** cannot sponsor their spouse, children, or parents at GDRFA (Amer), cannot activate DEWA electricity and water connections, and cannot file rental protection cases.
- **Businesses** cannot issue or renew their DET (DED) Trade License, cannot apply for or increase their MoHRE (Tasheel) employee visa quota, and cannot open corporate bank accounts.

At Karama Business Center (KBC), our authorized Ejari Trustee Desk registers and renews both **Residential Ejari** and **Commercial / Industrial Ejari** contracts in under 15 minutes. For new tenants, the moment we issue your official Ejari Certificate, the system automatically triggers your **DEWA Welcome Pack & Account Activation link** via SMS and email—saving you a separate visit to DEWA!`,
    detailedOverviewAr: `يُعد نظام **إيجاري (Ejari)** المنظومة الإلكترونية الإلزامية المعتمدة في إمارة دبي لتسجيل وتوثيق كافة عقود الإيجار السكنية والتجارية والصناعية بالتكامل بين دائرة الأراضي والأملاك (ريرا)، بلدية دبي، وهيئة كهرباء ومياه دبي (ديوا). وبموجب القانون رقم (26) لسنة 2007 بشأن تنظيم العلاقة بين مؤجري ومستأجري العقارات في إمارة دبي، لا يُعتد بأي عقد إيجار أمام الجهات الحكومية ما لم يكن مسجلاً وموثقاً في نظام "إيجاري".

تُعد شهادة "إيجاري" شرطاً أساسياً لا غنى عنه في المعاملات التالية:
- **للأفراد والعائلات**: كفالة الزوجة والأبناء والوالدين وتجديد إقاماتهم لدى إقامة دبي (آمر)، وتفعيل حساب الكهرباء والمياه (ديوا) فوراً.
- **للشركات والمؤسسات**: إصدار وتجديد الرخص التجارية والمهنية لدى اقتصادية دبي (DET)، وطلب أو زيادة كوتا العمالة لدى وزارة الموارد البشرية (تسهيل).

في مركز الكرامة للأعمال (KBC)، نُنجز تسجيل وتجديد عقود إيجاري السكنية والتجارية خلال 15 دقيقة فقط، وفور صدور شهادة إيجاري يتم تفعيل حساب "ديوا" تلقائياً وإرسال رابط سداد التأمين لهاتفك دون الحاجة لمراجعة هيئة الكهرباء والمياه!`,
    legalFrameworkEn: `Dubai Law No. 26 of 2007 (as amended by Law No. 33 of 2008) Regulating the Relationship Between Landlords and Tenants in the Emirate of Dubai.`,
    legalFrameworkAr: `القانون رقم (26) لسنة 2007 وتعديلاته بالقانون رقم (33) لسنة 2008 بشأن تنظيم العلاقة بين مؤجري ومستأجري العقارات في إمارة دبي.`,
    eligibilityEn: [
      'Unified Tenancy Contract signed by both Landlord (or Property Management POA) and Tenant',
      'Clear copy of the Property Title Deed (صك الملكية) or Affection Plan issued by Dubai Land Department',
      '9-digit DEWA Premise Number (رقم العقار في ديوا) or recent DEWA bill',
      'Tenant’s Passport, Visa, and Emirates ID (plus DET Trade License / Initial Approval for Commercial Ejari)',
      'Landlord’s Passport / Emirates ID copy (and valid notarized Power of Attorney if signed by an agent)',
    ],
    eligibilityAr: [
      'عقد الإيجار الموحد موقعاً من المالك (أو شركة إدارة العقار المفوضة) والمستأجر',
      'صورة واضحة من شهادة ملكية العقار (Title Deed) الصادرة عن دائرة الأراضي والأملاك',
      'رقم حساب العقار المكون من 9 أرقام لدى هيئة كهرباء ومياه دبي (DEWA Premise Number)',
      'هوية وجواز وإقامة المستأجر (بالإضافة إلى الرخصة التجارية أو الموافقة المبدئية لعقود إيجاري التجارية)',
      'صورة جواز أو هوية المالك (مع الوكالة العدلية المصدقة سارية المفعول في حال توقيع وكيل عن المالك)',
    ],
    galleryImages: ICP_DM_GALLERY,
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'Title Deed, Premise Number & Previous Ejari Audit',
        titleAr: 'تدقيق شهادة الملكية ورقم العقار والتأكد من خلو العين',
        descEn: 'Verifying property ownership in the DLD system and confirming that no previous tenant’s active Ejari is blocking the unit.',
        descAr: 'التحقق من بيانات الملكية في النظام العقاري والتأكد من إلغاء أي عقد إيجاري سابق مسجل على نفس الوحدة.',
        durationEn: '5 Mins',
        durationAr: '5 دقائق',
      },
      {
        stepNumber: 2,
        titleEn: 'Ejari System Registration & Fee Settlement',
        titleAr: 'إدراج بيانات العقد في نظام إيجاري وسداد الرسوم',
        descEn: 'Entering contract dates, annual rent, and party details and paying the official Ejari registration fee (AED 215 total at trustee desk).',
        descAr: 'تسجيل مدة العقد والقيمة الإيجارية وبيانات الأطراف وسداد الرسوم الرسمية المقررة.',
        durationEn: '5 Mins',
        durationAr: '5 دقائق',
      },
      {
        stepNumber: 3,
        titleEn: 'DLD / RERA Electronic Validation & Digital Stamping',
        titleAr: 'التدقيق العقاري والاعتماد الإلكتروني من ريرا',
        descEn: 'Instant automated validation by Dubai Land Department and generation of official barcoded Ejari verification tokens.',
        descAr: 'المطابقة اللحظية مع قواعد بيانات دائرة الأراضي والأملاك وتوليد باركود التوثيق العقاري المعتمد.',
        durationEn: '2 - 5 Mins',
        durationAr: '2 - 5 دقائق',
      },
      {
        stepNumber: 4,
        titleEn: 'Instant Ejari Certificate & Automatic DEWA Activation',
        titleAr: 'إصدار شهادة إيجاري الرسمية وتفعيل ديوا تلقائياً',
        descEn: 'Delivering your attested Ejari Certificate ready for Amer Family Visa or DET Trade License renewal, plus automatic DEWA SMS link.',
        descAr: 'تسليم شهادة إيجاري الموثقة جاهزة لمعاملات إقامة الأسرة أو تجديد الرخصة التجارية مع تفعيل حساب ديوا فوراً.',
        durationEn: 'Instant',
        durationAr: 'فوري',
      },
    ],
    faqs: [
      {
        questionEn: 'What if the previous tenant did not cancel their Ejari and the system says "Property Already Leased"?',
        questionAr: 'ماذا أفعل إذا ظهر في النظام أن العقار لا يزال مسجلاً باسم المستأجر السابق؟',
        answerEn: 'This is very common when a previous tenant vacates without cancelling their old Ejari. At Karama Business Center, our Ejari counter can process an immediate **Previous Ejari Cancellation** on the spot alongside your new registration so your new Ejari certificate is issued without delay.',
        answerAr: 'تحدث هذه الحالة كثيراً عند مغادرة المستأجر السابق دون إلغاء عقده. في مركز الكرامة للأعمال، يقوم مكتب إيجاري لدينا بإجراء **"إلغاء عقد إيجاري السابق"** فوراً في نفس اللحظة وتسجيل عقدك الجديد دون أي تأخير.',
      },
      {
        questionEn: 'Can I register my Ejari, renew my DET Trade License, and apply for my Family Visa in the same visit at KBC?',
        questionAr: 'هل يمكنني توثيق إيجاري وتجديد الرخصة التجارية أو تقديم طلب إقامة الأسرة في نفس الزيارة؟',
        answerEn: 'Yes! That is the exact advantage of Karama Business Center. Once our Ejari desk prints your certificate in 15 minutes, you simply step over to our DET desk (for commercial license renewal) or our Amer desk (for spouse/children residency sponsorship) in the same hall.',
        answerAr: 'نعم بالتأكيد! هذه هي الميزة الفريدة لمركز الكرامة للأعمال؛ فبمجرد طباعة شهادة إيجاري خلال 15 دقيقة، تنتقل في نفس القاعة إلى كاونتر اقتصادية دبي لتجديد رخصتك التجارية، أو إلى كاونتر "آمر" لتقديم معاملة كفالة الأسرة.',
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
        commentEn: 'Registered my apartment Ejari in 10 minutes at Karama Business Center and immediately used it at their Amer counter to apply for my wife and daughter’s residency visas!',
        commentAr: 'وثقت عقد إيجاري لشقتي خلال 10 دقائق في مركز الكرامة للأعمال، واستخدمته فوراً لدى كاونتر آمر المجاور للتقديم على تأشيرة إقامة زوجتي وابنتي!',
      },
    ],
    targetKeywords: {
      shortTail: ['ejari services near me', 'ejari registration dubai', 'commercial ejari dubai', 'ejari renewal karama', 'ejari typing center'],
      longTail: ['ejari registration fees in dubai 2026', 'documents required for ejari registration residential and commercial', 'ejari center karama next to post office', 'ejari for family visa dubai amer'],
    },
  },

  // =========================================================================
  // DM 2. EJARI CONTRACT CANCELLATION & PREMISE CLEARANCE
  // =========================================================================
  'dm-ejari-cancellation': {
    detailedOverviewEn: `Whenever a residential tenant vacates an apartment or villa in Dubai, or a commercial company relocates to a new office or cancels its trade license, executing a formal **Ejari Contract Cancellation (إلغاء عقد إيجاري)** is essential. In the Dubai Land Department (DLD) and Dubai Municipality property registry, only one active Ejari contract can exist on a specific DEWA Premise Number at any given time—even if the printed expiry date on the old tenancy contract has already passed!

Leaving an old Ejari uncancelled blocks the incoming tenant from registering their lease and activating DEWA, and for commercial companies, keeps municipal market fees and premise records tied to your trade license.

At Karama Business Center (KBC), our authorized Ejari desk processes instant **Ejari Terminations & Historical Cancellations** in less than 10 minutes—clearing the property record immediately so a new residential or commercial lease can be registered on the spot.`,
    detailedOverviewAr: `عند إخلاء المستأجر للشقة أو الفيلا السكنية في دبي، أو عند انتقال الشركة إلى مكتب جديد أو إلغاء رخصتها التجارية، يُعد **إلغاء عقد إيجاري (Ejari Cancellation)** إجراءً ضرورياً؛ إذ لا يسمح النظام العقاري في دبي بتسجيل أكثر من عقد إيجاري واحد على نفس رقم العقار (DEWA Premise Number)، حتى وإن كان تاريخ العقد السابق قد انتهى بالفعل!

إن عدم إلغاء عقد إيجاري السابق يمنع المستأجر الجديد من توثيق عقده وتفعيل الكهرباء والمياه، كما يبقي الوحدة العقارية مرتبطة بملف الرخصة التجارية القديمة.

في مركز الكرامة للأعمال (KBC)، نُنجز معاملة إلغاء عقد إيجاري (سواء لانتهاء المدة أو الفسخ المبكر باتفاق الطرفين) خلال أقل من 10 دقائق، لتحرير سجل العقار فوراً وإتاحة تسجيل العقد الجديد في نفس الزيارة.`,
    legalFrameworkEn: `Dubai Land Department (DLD / RERA) Ejari Registry Clearance & Early Termination Regulations.`,
    legalFrameworkAr: `لوائح دائرة الأراضي والأملاك ومؤسسة التنظيم العقاري (ريرا) بشأن إلغاء وشطب عقود الإيجار من السجل العقاري.`,
    eligibilityEn: [
      'Existing Ejari Certificate or Property Title Deed copy',
      'Emirates ID and Passport copy of Landlord (or authorized Property Manager) or Tenant with NOC',
      'Final DEWA Clearance Bill (فاتورة المخالصة النهائية من ديوا) or mutual NOC signed by Landlord and Tenant (for early cancellation before contract expiry)',
    ],
    eligibilityAr: [
      'شهادة عقد إيجاري المراد إلغاؤه أو صورة شهادة ملكية العقار (Title Deed)',
      'صورة الهوية الإماراتية وجواز السفر للمالك (أو الوكيل المفوض) أو المستأجر',
      'خطاب عدم ممانعة موقع من المالك والمستأجر أو فاتورة المخالصة النهائية للكهرباء والمياه (في حال الإلغاء المبكر قبل انتهاء مدة العقد)',
    ],
    galleryImages: ICP_DM_GALLERY,
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'Premise Record Lookup & Document Check',
        titleAr: 'البحث عن سجل العقار وتدقيق مستندات الإخلاء',
        descEn: 'Locating the active Ejari contract using the Ejari Contract Number, Title Deed, or 9-digit DEWA Premise Number.',
        descAr: 'استخراج بيانات العقد المسجل عبر رقم عقد إيجاري أو رقم شهادة الملكية أو رقم حساب ديوا.',
        durationEn: '3 Mins',
        durationAr: '3 دقائق',
      },
      {
        stepNumber: 2,
        titleEn: 'DLD Cancellation Lodgement & Fee Settlement',
        titleAr: 'تقديم طلب الإلغاء في نظام أراضي دبي وسداد الرسوم',
        descEn: 'Filing the formal cancellation request in the Dubai Land Department portal and processing the administrative fee.',
        descAr: 'إدراج طلب الإلغاء الرسمي عبر بوابة دائرة الأراضي والأملاك وسداد الرسوم الإدارية المقررة.',
        durationEn: '3 Mins',
        durationAr: '3 دقائق',
      },
      {
        stepNumber: 3,
        titleEn: 'DEWA Clearance & Property Lien Removal',
        titleAr: 'التحقق من براءة ذمة ديوا وإلغاء القيد العقاري',
        descEn: 'Verifying final utility settlements and clearing the tenancy block from municipal and land registers.',
        descAr: 'التأكد من براءة ذمة الكهرباء والمياه وإلغاء القيود الإيجارية من السجلات البلدية والعقارية.',
        durationEn: '2 Mins',
        durationAr: '2 دقيقة',
      },
      {
        stepNumber: 4,
        titleEn: 'System Cancellation & Official Clearance Receipt',
        titleAr: 'إلغاء العقد في النظام وإصدار إشعار الإلغاء الرسمي',
        descEn: 'Executing the Ejari cancellation in the DLD portal and unblocking the unit for immediate re-registration.',
        descAr: 'شطب العقد السابق من النظام العقاري وتحرير الوحدة العقارية لتصبح جاهزة لتوثيق أي عقد جديد فوراً.',
        durationEn: 'Instant',
        durationAr: 'فوري',
      },
    ],
    faqs: [
      {
        questionEn: 'Does an Ejari contract automatically cancel itself when the 1-year lease date expires?',
        questionAr: 'هل يُلغى عقد إيجاري تلقائياً في النظام بمجرد انتهاء تاريخ السنة المكتوب في العقد؟',
        answerEn: 'No! Even after the 1-year end date passes, the old Ejari remains locked on the property unit in the system until a formal Ejari Cancellation (or renewal by the same tenant) is processed at an authorized trustee center like KBC.',
        answerAr: 'لا! حتى بعد مرور تاريخ الانتهاء المدون في العقد، يبقى عقد إيجاري القديم مقيداً على الوحدة العقارية في النظام ويمنع تسجيل أي مستأجر جديد لحين إجراء معاملة "إلغاء إيجاري" رسمية.',
      },
    ],
    reviews: [
      {
        name: 'Rashid Al-Ketbi',
        roleEn: 'Property Portfolio Manager',
        roleAr: 'مدير محافظ عقارية',
        companyEn: 'Ketbi Real Estate Management',
        companyAr: 'الكتبي لإدارة العقارات',
        rating: 5,
        date: 'October 2026',
        commentEn: 'We manage 80+ apartments in Karama and Bur Dubai. KBC handles all our outgoing tenant Ejari cancellations and incoming tenant Ejari registrations in minutes.',
        commentAr: 'ندير أكثر من 80 شقة في الكرامة وبر دبي. ينجز مركز الكرامة للأعمال كافة معاملات إلغاء إيجاري للمستأجرين المغادرين وتوثيق العقود الجديدة في دقائق.',
      },
    ],
    targetKeywords: {
      shortTail: ['ejari cancellation dubai', 'cancel old ejari', 'terminate ejari contract', 'ejari clearance dubai', 'remove previous tenant ejari'],
      longTail: ['how to cancel ejari in dubai documents and fees', 'cancel previous tenant ejari without landlord presence', 'early termination of commercial ejari contract dubai', 'ejari cancellation center karama dubai'],
    },
  },

  // =========================================================================
  // DM 3. MONTAJI CONSUMER PRODUCT, COSMETIC & SUPPLEMENT REGISTRATION
  // =========================================================================
  'dm-product-registration-montaji': {
    detailedOverviewEn: `Under Dubai Municipality Health and Safety Department regulations, no company may import, manufacture, distribute, or sell any **Cosmetics, Perfumes, Personal Care Products, Health Supplements, Detergents, Disinfectants, or Food-Contact Materials** in Dubai without first registering each individual SKU and barcode in the official **Dubai Municipality Montaji System (نظام منتجي لتسجيل المنتجات الاستهلاكية)**.

Attempting to clear an un-registered shipment through Dubai Customs or displaying unregistered cosmetics, skincare, oud/perfumes, or supplements in retail stores or e-commerce platforms (Amazon, Noon, Instagram) results in immediate shipment detention at the port and municipal confiscation fines.

At Karama Business Center (KBC), our Dubai Municipality Regulatory Specialists manage your complete **Montaji Product Registration & Certificate of Free Sale** workflow:
1. **Company Linking & Montaji Account Setup**: Linking your DET General Trading, Cosmetics Trading, or Perfumes Trading license with the Dubai Municipality portal.
2. **Ingredient / Formulation & Artwork Compliance Audit**: Reviewing your Certificate of Analysis (COA), Free Sale Certificate, GMP certificate, and bilingual packaging label artwork against UAE/GSO technical standards.
3. **Montaji Registration Certificate Issuance**: Securing the 5-year valid Dubai Municipality Montaji Product Registration Certificate for smooth customs clearance and retail distribution.`,
    detailedOverviewAr: `بموجب لوائح إدارة الصحة والسلامة في بلدية دبي، يُحظر استيراد أو تصنيع أو توزيع أو بيع أي من **منتجات التجميل، العطور والدخون، منتجات العناية الشخصية والبشرة، المكملات الصحية، المنظفات، والمطهرات** في أسواق إمارة دبي أو المتاجر الإلكترونية دون تسجيل كل منتج والباركود الخاص به مسبقاً في **نظام "منتجي" (Montaji)** التابع لبلدية دبي.

إن شحن منتجات غير مسجلة في نظام "منتجي" يؤدي إلى احتجاز الشحنة فوراً في جمارك دبي وفرض غرامات بلدية ومصادرة البضائع غير المعتمدة من منافذ البيع.

في مركز الكرامة للأعمال (KBC)، يتولى خبراء التراخيص البلدية إدارة ملف **تسجيل المنتجات في نظام منتجي وإصدار شهادات البيع الحر** بالكامل:
1. **فتح وتفعيل حساب الشركة في بوابة بلدية دبي**: ربط رخصة التجارة العامة أو تجارة العطور ومستحضرات التجميل بنظام منتجي.
2. **التدقيق الفني للمكونات والملصق التعريفي (Label)**: فحص قائمة المكونات المخبرية، شهادة التصنيع الجيد (GMP)، ومطابقة الملصق الخارجي للمواصفات القياسية الإماراتية والخليجية.
3. **إصدار شهادة تسجيل المنتج في "منتجي" (صالحة لمدة 5 سنوات)**: لفسح الشحنات جمركياً وتوزيع المنتجات قانونياً في المولات والصيدليات ومنصات التجارة الإلكترونية.`,
    legalFrameworkEn: `Dubai Municipality Local Order No. 11 of 2003 on Public Health and Community Safety and UAE/GSO Technical Regulation GSO 1943 for Cosmetic and Personal Care Products.`,
    legalFrameworkAr: `الأمر المحلي رقم (11) لسنة 2003 بشأن الصحة العامة وسلامة المجتمع في إمارة دبي واللائحة الفنية الخليجية والإماراتية GSO 1943 لمستحضرات التجميل والعناية الشخصية.`,
    eligibilityEn: [
      'Valid Dubai Mainland or Free Zone Trade License containing the relevant trading/manufacturing activity (e.g., Cosmetics & Personal Care Trading, Perfumes Trading, Supplements Trading)',
      'Product Barcode (GS1 / EAN), high-resolution packaging artwork showing ingredients, country of origin, batch/expiry format, and manufacturer details',
      'Certificate of Free Sale (CFS) and Good Manufacturing Practice (GMP / ISO 22716) certificate from country of origin (for imported brands)',
      'Laboratory Certificate of Analysis (COA) / Ingredients Safety Data Sheet showing exact percentages of restricted substances',
    ],
    eligibilityAr: [
      'رخصة تجارية سارية في دبي تتضمن النشاط المطابق لنوع المنتج (مثل تجارة مستحضرات التجميل، تجارة العطور، تجارة المكملات الصحية، أو التجارة العامة)',
      'الباركود الدولي للمنتج وتصميم العبوة الخارجي موضحاً به المكونات وبلد المنشأ وبيانات المصنع',
      'شهادة البيع الحر (Free Sale Certificate) وشهادة ممارسات التصنيع الجيد (GMP) للمنتجات المستوردة',
      'شهادة التحليل المخبري للمكونات (Ingredients Report / COA) للتأكد من خلو المنتج من المواد المحظورة',
    ],
    galleryImages: ICP_DM_GALLERY,
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'DM Portal Company Registration & Formula Pre-Audit',
        titleAr: 'ربط الرخصة ببلدية دبي والتدقيق الفني للمكونات والملصق',
        descEn: 'Verifying your trade license activity and auditing product ingredients and label warnings against DM GSO standards.',
        descAr: 'تفعيل حساب الشركة في بلدية دبي ومراجعة تركيبة المنتج والملصق التعريفي لضمان عدم رفض الطلب.',
        durationEn: '1 - 2 Hours',
        durationAr: '1 - 2 ساعة',
      },
      {
        stepNumber: 2,
        titleEn: 'Montaji SKU Submission & Technical Evaluation',
        titleAr: 'إدراج المنتج في نظام منتجي وسداد رسوم التقييم',
        descEn: 'Uploading product dossier, barcode, and artwork into Montaji and settling official Dubai Municipality evaluation fees.',
        descAr: 'رفع ملف المنتج الفني والباركود وصور العبوة عبر نظام منتجي وسداد رسوم الدراسة البلدية.',
        durationEn: '1 - 3 Days',
        durationAr: '1 - 3 أيام عمل',
      },
      {
        stepNumber: 3,
        titleEn: '5-Year Montaji Registration Certificate Issuance',
        titleAr: 'إصدار شهادة تسجيل منتج استهلاكي (صالحة لـ 5 سنوات)',
        descEn: 'Receiving the official Dubai Municipality Montaji Registration Certificate for customs clearance and retail sale.',
        descAr: 'استلام شهادة تسجيل المنتج المعتمدة من بلدية دبي للإفراج الجمركي والتداول القانوني في الأسواق.',
        durationEn: 'Upon DM Approval',
        durationAr: 'فور اعتماد البلدية',
      },
    ],
    faqs: [
      {
        questionEn: 'How long is a Dubai Municipality Montaji Product Registration Certificate valid?',
        questionAr: 'ما هي مدة صلاحية شهادة تسجيل المنتج في نظام "منتجي" ببلدية دبي؟',
        answerEn: 'Once approved by Dubai Municipality, a Montaji Consumer Product Registration Certificate is valid for **5 full years**, allowing unlimited shipments of that registered product SKU through Dubai ports and airports during that period.',
        answerAr: 'تسري صلاحية شهادة تسجيل المنتج الاستهلاكي في نظام "منتجي" لمدة **5 سنوات كاملة** من تاريخ الإصدار، وتتيح للشركة استيراد وتداول المنتج بحرية عبر كافة منافذ دبي طوال هذه المدة.',
      },
    ],
    reviews: [
      {
        name: 'Camille Laurent',
        roleEn: 'Import & Regulatory Director',
        roleAr: 'مديرة الاستيراد والشؤون التنظيمية',
        companyEn: 'Maison De Beauté Trading LLC',
        companyAr: 'ميزون دي بوتي لتجارة التجميل ذ.م.م',
        rating: 5,
        date: 'October 2026',
        commentEn: 'Registered 45 French skincare and perfume SKUs on Dubai Municipality Montaji through Karama Business Center. Their team caught two label formatting issues beforehand so every single product passed on the first submission.',
        commentAr: 'سجلنا 45 منتج عناية بالبشرة وعطور فرنسية في نظام منتجي عبر مركز الكرامة للأعمال. دقة فريقهم في مراجعة الملصقات مسبقاً ضمنت قبول جميع المنتجات من المرة الأولى.',
      },
    ],
    targetKeywords: {
      shortTail: ['montaji product registration', 'dubai municipality product registration', 'cosmetic registration dubai', 'supplement registration dm', 'perfume registration dubai'],
      longTail: ['how to register cosmetic products in dubai municipality montaji', 'montaji registration fees and documents required 2026', 'health supplement registration dubai municipality', 'free sale certificate dubai municipality'],
    },
  },

  // =========================================================================
  // DM 4. FOODWATCH REGISTRATION, FOOD LABELS & PEST CONTROL PERMITS
  // =========================================================================
  'dm-foodwatch-label-pest-control': {
    detailedOverviewEn: `Operating a restaurant, café, cloud kitchen, bakery, supermarket, or foodstuff trading company in Dubai requires strict compliance with the **Dubai Municipality Food Safety Department (إدارة سلامة الغذاء ببلدية دبي)**. At the core of Dubai's smart food safety ecosystem are two mandatory municipal systems: **Foodwatch (منصة فود ووتش الذكية)** and **FIRS (Food Import & Re-Export System — نظام استيراد وإعادة تصدير الأغذية)**.

At Karama Business Center (KBC), our Dubai Municipality compliance desk handles all mandatory food and public health registrations:
1. **Dubai Municipality Foodwatch Establishment Registration**: Mandatory digital onboarding for all Dubai restaurants, cafés, catering firms, and food establishments—linking your trade license, Person In Charge (PIC) food safety certificates, temperature monitoring, and approved supplier contracts.
2. **FIRS Food Item & Arabic Food Label Assessment (اعتماد البطاقة الغذائية وتسجيل الأغذية)**: Registering imported food barcodes and obtaining official DM Food Label Approval verifying Arabic nutritional facts, production/expiry dates, Halal declarations, and allergen warnings before shipment arrival.
3. **Public Health Pest Control & Hygiene Contract Registration**: Linking your mandatory Dubai Municipality-approved pest control contract and employee **Occupational Health Cards (OHC — processed right inside our Karama Medical Center!)** into your Foodwatch profile.`,
    detailedOverviewAr: `يتطلب تشغيل المطاعم، المقاهي، المطابخ السحابية، المخابز، السوبرماركت، أو شركات تجارة المواد الغذائية في إمارة دبي الامتثال الكامل لاشتراطات **إدارة سلامة الغذاء في بلدية دبي**. وتعتمد المنظومة الرقابية الذكية للبلدية على منصتين رئيسيتين: **منصة "فود ووتش" (Foodwatch)** للمنشآت الغذائية، و**نظام استيراد وإعادة تصدير الأغذية (FIRS)** لتسجيل المنتجات والبطاقات الغذائية.

في مركز الكرامة للأعمال (KBC)، نُنجز كافة اعتمادات سلامة الغذاء والصحة العامة للمنشآت تحت سقف واحد:
1. **التسجيل والتفعيل في منصة "فود ووتش" (Foodwatch)**: تسجيل المطاعم والمقاهي والمنشآت الغذائية، وربط شهادات المشرف الصحي (PIC) وعقود الموردين المعتمدين.
2. **تسجيل المواد الغذائية واعتماد البطاقة الغذائية (Food Label Approval)**: تسجيل أصناف الأغذية المستوردة وفحص الملصق الغذائي بالعربية (المكونات، القيم الغذائية، صلاحية الإنتاج والانتهاء، وشهادات الحلال) لضمان الفسح السريع في منافذ جمارك دبي.
3. **توثيق عقود مكافحة الحشرات وربط بطاقات الصحة المهنية (OHC)**: ربط عقود مكافحة الآفات المعتمدة من البلدية، مع إصدار **بطاقات الصحة المهنية لمتداولي الأغذية (222.50 درهم)** مباشرة في مركزنا الطبي بنفس المبنى!`,
    legalFrameworkEn: `Dubai Municipality Food Code and Local Order No. 11 of 2003 (Public Health, Food Safety, and Pest Control Compliance).`,
    legalFrameworkAr: `مدونة كود دبي لسلامة الغذاء والأمر المحلي رقم (11) لسنة 2003 بشأن الصحة العامة وسلامة الأغذية ومكافحة آفات الصحة العامة.`,
    eligibilityEn: [
      'Valid DET Trade License with Foodstuff Trading, Restaurant, Café, or Catering activity',
      'Commercial Ejari tenancy contract and Dubai Municipality Food Establishment layout approval',
      'High-resolution food packaging artwork / label showing Arabic & English ingredients and nutritional table (for FIRS Food Label Approval)',
      'Occupational Health Cards (OHC) and PIC Food Safety Certification for food handlers',
    ],
    eligibilityAr: [
      'رخصة تجارية سارية من اقتصادية دبي تتضمن نشاط المطاعم أو المقاهي أو تجارة المواد الغذائية',
      'عقد إيجاري موثق واعتماد مخطط المنشأة الغذائية من بلدية دبي',
      'تصميم البطاقة الغذائية (Label) باللغتين العربية والإنجليزية موضحاً به المكونات والجدول الغذائي (لاعتماد الملصقات الغذائية)',
      'بطاقات الصحة المهنية (OHC) وشهادة المشرف الصحي (PIC) للعاملين في المنشأة',
    ],
    galleryImages: ICP_DM_GALLERY,
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'DM Foodwatch / FIRS Portal Onboarding',
        titleAr: 'تفعيل حساب المنشأة في نظام فود ووتش و FIRS',
        descEn: 'Registering your food establishment or trading company in the Dubai Municipality smart portal.',
        descAr: 'تسجيل بيانات الرخصة التجارية والموقع في البوابة الرقمية لإدارة سلامة الغذاء ببلدية دبي.',
        durationEn: '1 Hour',
        durationAr: 'ساعة واحدة',
      },
      {
        stepNumber: 2,
        titleEn: 'Food Label Audit / Pest Control & OHC Linking',
        titleAr: 'تدقيق الملصق الغذائي أو ربط عقود المكافحة والبطاقات الصحية',
        descEn: 'Submitting food labels for UAE GSO 9 compliance or uploading approved pest control and staff OHC records.',
        descAr: 'رفع البطاقات الغذائية للفحص الفني أو ربط عقود مكافحة الحشرات وبطاقات الصحة المهنية للموظفين.',
        durationEn: '24 - 48 Hours',
        durationAr: '24 - 48 ساعة',
      },
      {
        stepNumber: 3,
        titleEn: 'Official DM Food Safety Clearance Issuance',
        titleAr: 'إصدار شهادة الاعتماد البلدي وتفعيل التصنيف الأخضر',
        descEn: 'Receiving your approved Food Label Assessment Certificate or green-status Foodwatch compliance profile.',
        descAr: 'استلام شهادة اعتماد البطاقة الغذائية للفسح الجمركي أو إتمام تفعيل ملف فود ووتش بنجاح.',
        durationEn: 'Upon Approval',
        durationAr: 'فور الاعتماد',
      },
    ],
    faqs: [
      {
        questionEn: 'Can my restaurant staff get their Dubai Municipality / DHA Occupational Health Cards (OHC) at Karama Business Center?',
        questionAr: 'هل يمكن لموظفي المطعم استخراج بطاقات الصحة المهنية (OHC) في مركز الكرامة للأعمال؟',
        answerEn: 'Yes! Our building houses both the Dubai Municipality typing desk and the accredited medical examination facility. We issue Food Handler Occupational Health Cards (OHC) for **AED 222.50 total** and link your staff records with Foodwatch.',
        answerAr: 'نعم بالتأكيد! يضم مبنى مركز الكرامة للأعمال كلاً من مكتب خدمات بلدية دبي ومركز الفحص الطبي المعتمد، حيث نصدر بطاقة الصحة المهنية لمتداولي الأغذية بتكلفة إجمالية **222.50 درهم فقط** مع ربطها بملف المنشأة.',
      },
    ],
    reviews: [
      {
        name: 'Chef Marco Rossi',
        roleEn: 'Managing Partner',
        roleAr: 'الشريك الإداري',
        companyEn: 'Osteria Napoli Restaurant LLC',
        companyAr: 'مطعم أوستيريا نابولي ذ.م.م',
        rating: 5,
        date: 'October 2026',
        commentEn: 'KBC set up our Dubai Municipality Foodwatch account, linked our pest control permit, and processed all 14 kitchen staff Occupational Health Cards in one place!',
        commentAr: 'قام مركز الكرامة للأعمال بتفعيل حساب مطعمنا في منصة فود ووتش ببلدية دبي، وتوثيق عقد مكافحة الحشرات، وإصدار بطاقات الصحة المهنية لـ 14 موظفاً في مكان واحد!',
      },
    ],
    targetKeywords: {
      shortTail: ['foodwatch dubai municipality', 'firs food registration dubai', 'food label approval dm', 'pest control permit dubai', 'restaurant permit dubai municipality'],
      longTail: ['how to register restaurant in dubai municipality foodwatch', 'dubai municipality food label assessment and barcode registration', 'firs food import system dubai customs clearance', 'occupational health card and foodwatch compliance karama'],
    },
  },

  // =========================================================================
  // DM 5. INTERIOR FIT-OUT PERMITS, ENGINEERING APPROVALS & SITE PLANS
  // =========================================================================
  'dm-fitout-permits-site-plans': {
    detailedOverviewEn: `Before commencing any interior decoration, partitioning, MEP modification, commercial kitchen installation, or salon/clinic layout build inside a Dubai mainland office, shop, or warehouse, obtaining an official **Dubai Municipality Interior Fit-Out & Modification Permit (تصريح الديكور والتعديلات الداخلية)** through the **Dubai Building Permit System (BPS)** is mandatory by law. Starting interior contractor work without an active DM Fit-Out Permit and Dubai Civil Defense (DCD) clearance results in immediate site closure and municipal fines up to AED 25,000.

At Karama Business Center (KBC), our Dubai Municipality & Engineering Liaison Desk coordinates fast-track approvals for commercial tenants, landlords, and fit-out contractors:
1. **Interior Fit-Out & Partitioning Permits**: Architectural & MEP drawing submission via the Dubai BPS portal for office glass/gypsum partitions, retail shopfront modifications, and restaurant/clinic layouts.
2. **Official DM Affection Plan / Site Plan Issuance (إصدار الخارطة المساحية ومخطط الموقع)**: Requesting updated Dubai Municipality / DLD Site Plans required for licensing, warehouse capacity verification, and industrial plots.
3. **Completion Certificate & Final Inspection Booking**: Scheduling the final Dubai Municipality and Civil Defense inspection to issue the **Building Completion Certificate** and release contractor security deposits.`,
    detailedOverviewAr: `قبل البدء في أي أعمال ديكور داخلي، تقسيمات مكتبية (Partitions)، تعديلات كهروميكانيكية، أو تجهيز مطاعم وعيادات وصالونات داخل المكاتب أو المحلات التجارية في إمارة دبي، يلزم قانوناً استخراج **تصريح أعمال الديكور والتعديلات الداخلية** من بلدية دبي عبر نظام تراخيص البناء (Dubai BPS). إن مباشرة أعمال المقاولات الداخلية دون تصريح مسبق يعرض المكتب أو المحل للإغلاق الفوري وغرامات بلدية قد تصل إلى 25,000 درهم.

في مركز الكرامة للأعمال (KBC)، يتولى مكتب التنسيق الهندسي والبلدي إنجاز كافة التصاريح والمخططات بسرعة فائقة:
1. **تصاريح الديكور والتقسيمات الداخلية (Interior Fit-Out Permits)**: تقديم المخططات المعمارية والكهروميكانيكية لاعتماد القواطع المكتبية وتجهيزات المحلات والمطاعم والعيادات بالتنسيق مع الدفاع المدني.
2. **إصدار وتجديد الخارطة المساحية ومخطط الموقع (Affection Plan / Site Plan)**: استخراج المخططات الهندسية المعتمدة من بلدية دبي ودائرة الأراضي للمباني والأراضي والمستودعات.
3. **شهادة إنجاز الأعمال والتفتيش النهائي**: حجز موعد التفتيش الهندسي النهائي لإصدار شهادة الإنجاز واسترداد تأمين الأعمال.`,
    legalFrameworkEn: `Dubai Building Code (DBC) and Dubai Municipality Building Regulation & Permits Department Directives.`,
    legalFrameworkAr: `كود دبي للبناء واللوائح التنظيمية لإدارة تراخيص البناء في بلدية دبي والدفاع المدني.`,
    eligibilityEn: [
      'Valid DET Trade License (or Initial Approval) and active Commercial Ejari Contract for the unit',
      'Landlord / Building Management No Objection Certificate (NOC) stamping the proposed layout drawings',
      'Existing approved layout vs. Proposed CAD layout drawings (Architectural + MEP / Fire Safety)',
      'Trade license of the appointed Dubai Municipality-registered Fit-Out Contractor',
    ],
    eligibilityAr: [
      'رخصة تجارية سارية (أو موافقة مبدئية) وعقد إيجار تجاري موثق (إيجاري) للعين المؤجرة',
      'شهادة عدم ممانعة (NOC) من مالك المبنى أو إدارة العقار مع ختم المخططات المقترحة',
      'المخطط الهندسي السابق والمخطط المقترح للتعديلات (المعماري + التكييف والسلامة)',
      'الرخصة التجارية لشركة المقاولات أو الديكور المعتمدة لدى بلدية دبي لتنفيذ الأعمال',
    ],
    galleryImages: ICP_DM_GALLERY,
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'Drawing Audit & Landlord NOC Verification',
        titleAr: 'مراجعة المخططات الهندسية وموافقة مالك العقار',
        descEn: 'Checking CAD drawings against Dubai Building Code and activity-specific rules (e.g., Food Safety for kitchens, Public Health for salons).',
        descAr: 'فحص المخططات للتأكد من مطابقتها لكود دبي للبناء واشتراطات النشاط (كالمطاعم والصالونات والمكاتب).',
        durationEn: '2 - 4 Hours',
        durationAr: '2 - 4 ساعات',
      },
      {
        stepNumber: 2,
        titleEn: 'Dubai BPS & Civil Defense Portal Lodgement',
        titleAr: 'رفع الطلب عبر نظام تراخيص البناء والدفاع المدني',
        descEn: 'Submitting the engineering package to Dubai Municipality and DCD for technical review and fee voucher generation.',
        descAr: 'إدراج المخططات في نظام بلدية دبي والدفاع المدني وسداد رسوم التصريح الهندسي.',
        durationEn: '1 - 3 Days',
        durationAr: '1 - 3 أيام عمل',
      },
      {
        stepNumber: 3,
        titleEn: 'Fit-Out Permit Issuance & Completion Clearance',
        titleAr: 'إصدار تصريح الديكور وشهادة الإنجاز النهائية',
        descEn: 'Delivering the official DM Fit-Out Permit for site display and coordinating final completion sign-off.',
        descAr: 'تسليم تصريح العمل الرسمي لتعليقه في الموقع، يليه تنسيق التفتيش النهائي وإصدار شهادة الإنجاز.',
        durationEn: 'Same Day upon approval',
        durationAr: 'فور صدور الاعتماد',
      },
    ],
    faqs: [
      {
        questionEn: 'Do I need a Dubai Municipality permit just to add glass partitions inside my rented office?',
        questionAr: 'هل أحتاج لتصريح من بلدية دبي والدفاع المدني لتركيب قواطع زجاجية (Partitions) داخل مكتبي؟',
        answerEn: 'Yes! Because adding ceiling-height glass or gypsum partitions alters air-conditioning flow and fire sprinkler/smoke detector coverage, both Dubai Municipality (DM) and Dubai Civil Defense (DCD) require an approved Interior Minor Modification / Fit-Out Permit before installation.',
        answerAr: 'نعم! نظراً لأن إضافة القواطع الزجاجية أو الجبسية يؤثر على توزيع التكييف وتغطية رشاشات الحريق وأجهزة كشف الدخان، تشترط بلدية دبي والإدارة العامة للدفاع المدني استخراج تصريح تعديل داخلي معتمد قبل التركيب.',
      },
    ],
    reviews: [
      {
        name: 'Eng. Walid Al-Sabbagh',
        roleEn: 'Managing Director',
        roleAr: 'المدير العام',
        companyEn: 'Linea Arch Interior Design & Fit-Out',
        companyAr: 'لينيا آرك للتصميم الداخلي والديكور',
        rating: 5,
        date: 'October 2026',
        commentEn: 'KBC assists our clients with all DM affection plans, salon health layout approvals, and commercial fit-out permits. Saves weeks of back-and-forth comments.',
        commentAr: 'يساعدنا مركز الكرامة للأعمال في استخراج الخرائط المساحية وموافقات مخططات الصالونات والمطاعم وتصاريح الديكور من بلدية دبي بسرعة فائقة.',
      },
    ],
    targetKeywords: {
      shortTail: ['fit out permit dubai municipality', 'dm modification permit', 'affection plan dubai', 'office partition permit dubai', 'salon layout approval dm'],
      longTail: ['how to get interior fit out permit from dubai municipality', 'office glass partition approval dubai municipality and civil defense', 'restaurant kitchen layout approval dubai municipality', 'site plan affection plan issuance dubai'],
    },
  },

  // =========================================================================
  // DM 6. OUTDOOR SIGNAGE, VEHICLE BRANDING & ADVERTISING PERMITS
  // =========================================================================
  'dm-signage-advertising-permits': {
    detailedOverviewEn: `Installing a storefront signboard on a commercial building facade, erecting a directional totem or rooftop sign, wrapping delivery vans and corporate cars with company branding, or distributing promotional flyers in Dubai requires coordinated municipal and regulatory authorization across **Dubai Municipality (بلدية دبي)**, **DET (Mu'lin)**, and the **Roads and Transport Authority (RTA)**.

Installing an unpermitted outdoor shop signboard or driving a commercial vehicle with unapproved company logos exposes the business to immediate municipal removal orders and traffic/commercial fines starting from AED 5,000.

At Karama Business Center (KBC), our Signage & Advertising Permits Desk manages your complete visual branding compliance:
1. **3D Storefront & Outdoor Building Signage Permits**: Securing Dubai Municipality structural safety, lighting, and urban planning approval alongside DET Mu'lin linguistic clearance (verifying that the Arabic trade name occupies at least 50% of the signboard area and matches the exact DET license name).
2. **Commercial Vehicle Branding & Wrapping NOCs**: Coordinating DET, RTA, and Dubai Police color/logo approvals for delivery vans, food trucks, and corporate fleets.
3. **Banner, Hoarding & Promotional Flyer Distribution Permits**: Obtaining official municipal stamps for construction site hoardings, street banners, and printed marketing brochures.`,
    detailedOverviewAr: `يتطلب تركيب اللوحات التجارية الخارجية على واجهات المحلات والمباني، أو وضع الشعارات والملصقات الإعلانية على مركبات وحافلات الشركة، أو توزيع المطبوعات التسويقية في إمارة دبي استخراج تصاريح رسمية مسبقة بالتنسيق بين **بلدية دبي (DM)**، **دائرة الاقتصاد والسياحة (منصة مُعلن)**، و**هيئة الطرق والمواصلات (RTA)**.

إن تركيب لوحة محل خارجية أو قيادة مركبة تجارية تحمل شعارات إعلانية دون تصريح ساري المفعول يعرض المنشأة لقرارات الإزالة الفورية وغرامات تبدأ من 5,000 درهم.

في مركز الكرامة للأعمال (KBC)، نُنجز كافة تصاريح اللوحات والإعلانات التجارية بدقة وسرعة:
1. **تصاريح اللوحات التجارية الخارجية والواجهات المضيئة (3D Signboards)**: استخراج موافقة بلدية دبي الهندسية والتخطيطية وموافقة اقتصادية دبي اللغوية (التحقق من مطابقة الاسم التجاري وتخصيص 50% على الأقل للغة العربية).
2. **تصاريح الإعلان والشعارات على المركبات التجارية (Vehicle Branding Permits)**: إصدار موافقات اقتصادية دبي وهيئة الطرق والشرطة لوضع شعارات الشركة على سيارات التوصيل والشاحنات.
3. **تصاريح سياجات المشاريع (Hoardings) والمطبوعات الإعلانية**: ترخيص اللوحات المؤقتة للمشاريع وتوزيع البروشورات الترويجية.`,
    legalFrameworkEn: `Dubai Executive Council Resolution No. 6 of 2021 Regulating Advertisements in the Emirate of Dubai (Unified Signage & Advertising Manual).`,
    legalFrameworkAr: `قرار المجلس التنفيذي رقم (6) لسنة 2021 بشأن تنظيم الإعلانات في إمارة دبي والدليل الإرشادي الموحد للوحات الإعلانية.`,
    eligibilityEn: [
      'Valid DET Trade License and Commercial Ejari Contract for the shop or building',
      '2D/3D engineering drawing of the proposed signboard showing exact dimensions (height x width), materials, lighting, and building facade mock-up',
      'Landlord / Building Owner NOC on the signboard design',
      'Vehicle Mulkiya (registration card) and 4-side vehicle mock-up artwork (for Vehicle Branding Permits)',
    ],
    eligibilityAr: [
      'رخصة تجارية سارية المفعول وعقد إيجار تجاري موثق (إيجاري) للمحل أو المقر',
      'تصميم هندسي للوحة يوضح الأبعاد الدقيقة بالمتر، نوع الإضاءة، وصورة مركبة (Mock-up) على واجهة المحل الفعلية',
      'شهادة عدم ممانعة من مالك العقار أو إدارة المبنى على تركيب اللوحة',
      'ملكية المركبة وتصميم الإعلان من الجهات الأربع (في حال طلب تصريح ملصقات المركبات التجارية)',
    ],
    galleryImages: ICP_DM_GALLERY,
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'Signboard Artwork & 50% Arabic Ratio Audit',
        titleAr: 'التدقيق الفني واللغوي لتصميم اللوحة وأبعاد الواجهة',
        descEn: 'Verifying that the Arabic trade name is positioned correctly (top or right side, minimum 50% scale) and dimensions match Dubai Signage Manual.',
        descAr: 'مراجعة التصميم للتأكد من صحة الاسم التجاري بالعربية (في الأعلى أو جهة اليمين بنسبة لا تقل عن 50%) ومطابقة المقاسات للدليل الموحد.',
        durationEn: '30 Mins',
        durationAr: '30 دقيقة',
      },
      {
        stepNumber: 2,
        titleEn: 'Unified Portal Submission (DM / DET Mu\'lin / RTA)',
        titleAr: 'رفع الطلب الإلكتروني وإصدار أذونات الدفع الرسمية',
        descEn: 'Submitting the signage or vehicle branding dossier to the relevant authority and settling the annual permit tariff.',
        descAr: 'إدراج المخططات والصور في النظام الموحد لتصاريح الإعلانات وسداد الرسوم الحكومية المقررة حسب المساحة.',
        durationEn: '24 - 48 Hours',
        durationAr: '24 - 48 ساعة',
      },
      {
        stepNumber: 3,
        titleEn: 'Official Signage / Vehicle Branding Permit Issuance',
        titleAr: 'إصدار تصريح اللوحة أو ملصقات المركبة المعتمد',
        descEn: 'Delivering your official QR-verifiable Signage or Vehicle Advertising Permit authorizing immediate installation.',
        descAr: 'تسليم التصريح الرسمي المعتمد للبدء الفوري في تركيب اللوحة أو تغليف المركبة دون أي مخالفات.',
        durationEn: 'Immediate upon approval',
        durationAr: 'فور صدور الموافقة',
      },
    ],
    faqs: [
      {
        questionEn: 'What are the mandatory rules for Arabic vs. English text on a shop signboard in Dubai?',
        questionAr: 'ما هي الشروط الإلزامية لكتابة الاسم بالعربية والإنجليزية على لوحة المحل في دبي؟',
        answerEn: 'Under the Dubai Unified Advertising Manual: (1) The trade name on the signboard must match the exact trade name printed on your DET Trade License; (2) Arabic text is mandatory and must occupy **at least 50%** of the total text area; and (3) Arabic must be placed either on the **right side** or **above** the English text.',
        answerAr: 'وفقاً للدليل الموحد للإعلانات في دبي: (1) يجب أن يطابق الاسم المكتوب على اللوحة الاسم التجاري المدون في الرخصة حرفياً؛ (2) يجب ألا تقل مساحة النص العربي عن **50%** من إجمالي مساحة الكتابة؛ و(3) يجب وضع الاسم العربي في **الجهة اليمنى** أو **أعلى** الاسم الإنجليزي.',
      },
    ],
    reviews: [
      {
        name: 'Saeed Al-Muhairi',
        roleEn: 'Founder',
        roleAr: 'المؤسس',
        companyEn: 'Specialty Roasters Café LLC',
        companyAr: 'سبيشالتي روسترز كافيه ذ.م.م',
        rating: 5,
        date: 'October 2026',
        commentEn: 'Got both our 3D outdoor café signboard permit and our 2 delivery van branding permits approved through Karama Business Center in 48 hours.',
        commentAr: 'حصلنا على تصريح اللوحة الخارجية للمقهى وتصاريح الشعارات الإعلانية لسيارات التوصيل عبر مركز الكرامة للأعمال خلال 48 ساعة فقط.',
      },
    ],
    targetKeywords: {
      shortTail: ['signage permit dubai', 'signboard approval dubai municipality', 'vehicle branding permit dubai', 'outdoor advertising permit dubai', 'flyer distribution permit dubai'],
      longTail: ['how to get shop signboard permit in dubai municipality and ded', 'vehicle branding rta and det permit cost dubai 2026', 'dubai signage manual 50% arabic text rule', 'outdoor banner and hoarding permit dubai municipality'],
    },
  },
};
