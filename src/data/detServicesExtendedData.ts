import { ProcessStep, GalleryImage, FaqItem, ReviewItem } from '../types';
import {
  detDepartmentImg as heroCenterImage,
  vipMajlisLoungeImg as vipMajlisImage,
  businessHubImg as smartDeskImage,
  mobileDoorstepUnitImg as mobileVanImage,
} from './centerOriginalPhotos';
import { ServiceRichDetails } from './amerServicesExtendedData';

const DET_GALLERY: GalleryImage[] = [
  {
    url: heroCenterImage,
    titleEn: 'Authorized DET Commercial Licensing Hall at Karama Business Center',
    titleAr: 'صالة تراخيص اقتصادية دبي المعتمدة في مركز الكرامة للأعمال',
    captionEn: 'Direct Dubai Department of Economy & Tourism (DET / DED) service counters with instant trade name reservation and license voucher issuance.',
    captionAr: 'منصات خدمة مباشرة لدائرة الاقتصاد والسياحة بدبي لإصدار شهادات الأسماء التجارية وأذونات دفع التراخيص فوراً.',
  },
  {
    url: vipMajlisImage,
    titleEn: 'Executive Corporate Formation & Investor Majlis',
    titleAr: 'مجلس كبار المستثمرين وتأسيس الشركات',
    captionEn: 'Private executive lounge for business founders, corporate shareholders, and 100% foreign ownership LLC structuring.',
    captionAr: 'صالة ضيافة تنفيذية خاصة للمستثمرين والشركاء لهيكلة الشركات ذات المسؤولية المحدودة بتملك أجنبي 100%.',
  },
  {
    url: smartDeskImage,
    titleEn: 'Electronic MOA Signing & Invest in Dubai Terminal',
    titleAr: 'منصة توثيق عقود التأسيس الإلكترونية واستثمر في دبي',
    captionEn: 'Integrated digital notary and Invest in Dubai portal terminals for paperless Memorandum of Association authentication.',
    captionAr: 'محطات توثيق رقمية مربوطة بمنصة استثمر في دبي لتصديق عقود التأسيس والملاحق إلكترونياً بدون أوراق.',
  },
  {
    url: mobileVanImage,
    titleEn: 'Mobile Corporate Licensing & VIP Signatory Van',
    titleAr: 'حافلة تراخيص الشركات والتوقيع التنفيذي المتنقلة',
    captionEn: 'On-demand mobile government unit dispatched to executive offices and hotels across Dubai for doorstep corporate setup.',
    captionAr: 'وحدة حكومية متنقلة تصل إلى مقر شركتك أو فندقك في دبي لإتمام إجراءات تأسيس وترخيص الأعمال.',
  },
];

export const DET_SERVICES_RICH_MAP: Record<string, ServiceRichDetails> = {
  // =========================================================================
  // 1. COMMERCIAL TRADE LICENSE (NEW LLC & SOLE ESTABLISHMENT)
  // =========================================================================
  'det-commercial-license-new': {
    detailedOverviewEn: `Obtaining a mainland Commercial Trade License in Dubai through the Dubai Department of Economy and Tourism (DET — formerly DED) is the foundational legal step for entrepreneurs, trading enterprises, retail chains, and global corporations seeking unrestricted access to the UAE local and international markets. At Karama Business Center (KBC), operating under Authorized DET Service Partner Code #902 and managed by Emirates Secretarial Services (ESS), we execute complete 100% foreign-owned Limited Liability Company (LLC) and Sole Establishment setups with zero bureaucratic delays.

Under UAE Federal Decree-Law No. 32 of 2021 on Commercial Companies, foreign investors are entitled to 100% ownership across more than 2,000 commercial and industrial activities without requiring an Emirati local sponsor. Our senior corporate formation consultants guide you through the official DET activity catalog (ISIC4 classification), ensuring that compatible trading lines—such as electronics, building materials, textiles, foodstuff trading, automotive parts, or e-commerce—are grouped under a single license to maximize operational scope while minimizing annual government renewal fees.

Because our Al Karama complex integrates DET licensing desks, Dubai Municipality (Ejari) tenancy registration, MoHRE (Tasheel) company establishment file opening, GDRFA (Amer) immigration card issuance, and the Karama Medical Fitness Center (KMFC) under a single roof, you can transition from trade name reservation to investor Golden/Partner residency visa stamping in one coordinated workflow. Every DET payment voucher is generated directly from the official Invest in Dubai portal with 100% tariff transparency.`,
    detailedOverviewAr: `يُعد استخراج الرخصة التجارية الرئيسية (Mainland Commercial License) من دائرة الاقتصاد والسياحة بدبي (DET / DED سابقاً) الخطوة القانونية الأساسية لرواد الأعمال، شركات التجارة العامة، سلاسل التجزئة، والشركات العالمية الراغبة في مزاولة أعمالها بحرية تامة داخل سوق دبي وفي جميع أنحاء دولة الإمارات وخارجها. ومن خلال مركز الكرامة للأعمال (KBC) المعتمد رسمياً برمز شريك رقم 902 تحت إدارة الإمارات لخدمات رجال الأعمال (ESS)، نُنجز تأسيس الشركات ذات المسؤولية المحدودة (LLC) والمؤسسات الفردية بنسبة تملك أجنبي 100% دون أي تعقيدات إدارية.

بموجب المرسوم بقانون اتحادي رقم (32) لسنة 2021 بشأن الشركات التجارية، يحق للمستثمرين الأجانب التملك الكامل بنسبة 100% لأكثر من 2,000 نشاط تجاري وصناعي دون الحاجة إلى شريك أو كفيل مواطن. يتولى مستشارو تأسيس الشركات لدينا مطابقة أنشطتكم التجارية بدقة وفق الدليل الرسمي للأنشطة الاقتصادية في دبي، مع دمج الأنشطة المتجانسة تحت رخصة واحدة لتوسيع نطاق أعمالكم وتقليل الرسوم السنوية.

وبفضل تكامل خدماتنا في مقر الكرامة — والذي يضم منصات اقتصادية دبي، توثيق عقود إيجاري، فتح ملف المنشأة في تسهيل، إصدار بطاقة المنشأة في آمر، ومركز الكرامة للياقة الطبية (KMFC) تحت سقف واحد — يمكنكم الانتقال من حجز الاسم التجاري إلى تثبيت إقامة المستثمر أو الشريك في مسار واحد سريع وموثوق.`,
    legalFrameworkEn: `UAE Federal Decree-Law No. 32 of 2021 on Commercial Companies, Dubai Law No. 13 of 2011 Regulating the Conduct of Economic Activities in the Emirate of Dubai, and DET Commercial Compliance Directives.`,
    legalFrameworkAr: `المرسوم بقانون اتحادي رقم (32) لسنة 2021 بشأن الشركات التجارية، والقانون رقم (13) لسنة 2011 بشأن تنظيم مزاولة الأنشطة الاقتصادية في إمارة دبي، ولوائح دائرة الاقتصاد والسياحة.`,
    eligibilityEn: [
      'Individual entrepreneurs, corporate entities, or multi-partner investors (aged 21+ years)',
      'Valid passport copies (and Emirates ID / UAE Visa if currently resident in the UAE)',
      'No Objection Certificate (NOC) only if a shareholder is currently employed on a mainland work visa without investor status',
      'Registered commercial office lease (Ejari) or approved sustainability/business center desk',
    ],
    eligibilityAr: [
      'رواد الأعمال الأفراد أو الشركات المحلية والأجنبية أو الشركاء المتعددون (بعمر 21 سنة فأكثر)',
      'صور جوازات سفر سارية المفعول (مع بطاقة الهوية والإقامة للمقيمين داخل الدولة)',
      'الاسم التجاري والأنشطة المختارة متوافقة مع معايير التصنيف التجاري لاقتصادية دبي',
      'عقد إيجار تجاري موثق (إيجاري) لمكتب أو محل تجاري أو مساحة عمل معتمدة',
    ],
    galleryImages: DET_GALLERY,
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'Activity Mapping & Trade Name Reservation',
        titleAr: 'تحديد الأنشطة وحجز الاسم التجاري',
        descEn: 'Selection of official ISIC4 commercial activities and instantaneous issuance of the DET Trade Name Reservation Certificate.',
        descAr: 'اختيار الأنشطة التجارية المعتمدة وإصدار شهادة حجز الاسم التجاري رسمياً من اقتصادية دبي.',
        durationEn: '30 - 60 Mins',
        durationAr: '30 - 60 دقيقة',
      },
      {
        stepNumber: 2,
        titleEn: 'DET Initial Approval & External Clearances',
        titleAr: 'الموافقة المبدئية والموافقات التنظيمية',
        descEn: 'Generation of DET Initial Approval certificate verifying shareholder security clearance and activity eligibility.',
        descAr: 'إصدار شهادة الموافقة المبدئية للتحقق من أهلية الشركاء وعدم وجود موانع تنظيمية لمزاولة النشاط.',
        durationEn: '1 - 2 Hours',
        durationAr: '1 - 2 ساعة',
      },
      {
        stepNumber: 3,
        titleEn: 'Electronic MOA Signing & Ejari Linkage',
        titleAr: 'توقيع عقد التأسيس الإلكتروني وربط إيجاري',
        descEn: 'Digital authentication of the LLC Memorandum of Association via UAE Pass and linking of the commercial Ejari lease contract.',
        descAr: 'التوقيع الإلكتروني الموثق لعقد التأسيس عبر الهوية الرقمية وربط عقد الإيجار التجاري (إيجاري) بالملف.',
        durationEn: '2 - 4 Hours',
        durationAr: '2 - 4 ساعات',
      },
      {
        stepNumber: 4,
        titleEn: 'Payment Voucher Settlement & License Issuance',
        titleAr: 'سداد إذن الدفع وإصدار الرخصة التجارية',
        descEn: 'Settlement of the official DET payment voucher and immediate issuance of the Commercial Trade License, Chamber Certificate, and Establishment Cards.',
        descAr: 'سداد إذن الدفع الحكومي واستلام الرخصة التجارية الرقمية، شهادة عضوية غرفة دبي، وبطاقات المنشأة فوراً.',
        durationEn: 'Same Day',
        durationAr: 'في نفس اليوم',
      },
    ],
    faqs: [
      {
        questionEn: 'Can expatriates own 100% of a mainland Commercial LLC in Dubai?',
        questionAr: 'هل يحق للأجانب تملك شركة تجارية ذات مسؤولية محدودة بنسبة 100% في دبي؟',
        answerEn: 'Yes. Under Federal Decree-Law No. 32 of 2021, foreign nationals can own 100% of the shares in a Dubai mainland Commercial LLC across over 2,000 trading and commercial activities without needing an Emirati partner or local sponsor.',
        answerAr: 'نعم. بموجب المرسوم بقانون اتحادي رقم 32 لسنة 2021، يحق للأجانب تملك الشركات ذات المسؤولية المحدودة في بر دبي الرئيسي بنسبة 100% في أكثر من 2,000 نشاط تجاري دون الحاجة لشريك مواطن.',
      },
      {
        questionEn: 'How much does a new DET Commercial Trade License cost in 2026?',
        questionAr: 'كم تبلغ تكلفة إصدار رخصة تجارية جديدة من اقتصادية دبي في عام 2026؟',
        answerEn: 'Standard DET government fees for a new commercial trade license start from approximately AED 8,500 to AED 12,500 depending on the specific commercial activity, trade name type (Arabic vs. foreign/numeric name), and market fees (2.5% of annual Ejari rent). At KBC, we provide an exact itemized DET voucher breakdown before you pay.',
        answerAr: 'تبدأ الرسوم الحكومية الأساسية لإصدار رخصة تجارية جديدة من حوالي 8,500 إلى 12,500 درهم حسب نوع النشاط التجاري وطبيعة الاسم التجاري ورسوم السوق (2.5% من قيمة عقد الإيجار). نوفر في مركز الكرامة للأعمال كشفاً تفصيلياً دقيقاً قبل سداد أي درهم.',
      },
      {
        questionEn: 'How many investor and employee visas can I get on a Commercial License?',
        questionAr: 'كم عدد تأشيرات المستثمرين والموظفين المسموح بها على الرخصة التجارية؟',
        answerEn: 'Each shareholder listed on the commercial license is eligible for a 2-year Investor/Partner Residency Visa (or a 10-Year Golden Visa if qualifying capital thresholds are met). Employee visa quota depends on the physical square footage of your Ejari office or warehouse (typically 1 visa per 80–90 sq. ft.).',
        answerAr: 'يحق لكل شريك مدرج في الرخصة التجارية الحصول على إقامة مستثمر/شريك لمدة سنتين. أما حصة تأشيرات الموظفين (الكوتا) فتعتمد على المساحة الإجمالية للمكتب أو المستودع الموثق في عقد إيجاري.',
      },
    ],
    reviews: [
      {
        name: 'Vikramjit Singh',
        roleEn: 'Founder & Managing Director',
        roleAr: 'المؤسس والمدير العام',
        companyEn: 'Crown Gulf Auto Spare Parts Trading LLC',
        companyAr: 'كراون جلف لتجارة قطع غيار السيارات ذ.م.م',
        rating: 5,
        date: 'October 2026',
        commentEn: 'Set up our 100% foreign-owned auto parts trading LLC at Karama Business Center. They handled DET trade name, MOA, Ejari, and MoHRE company file in 24 hours.',
        commentAr: 'أسسنا شركتنا لتجارة قطع غيار السيارات بتملك 100% عبر مركز الكرامة للأعمال. أنجزوا الاسم التجاري وعقد التأسيس وإيجاري وملف العمل خلال 24 ساعة فقط.',
      },
      {
        name: 'Noura Al-Shamsi',
        roleEn: 'Chief Operating Officer',
        roleAr: 'مدير العمليات التنفيذي',
        companyEn: 'Al-Shamsi Retail & Distribution',
        companyAr: 'الشامسي للتجزئة والتوزيع',
        rating: 5,
        date: 'September 2026',
        commentEn: 'Transparent government receipts, zero hidden markups, and a very knowledgeable DET licensing team right next to Karama Post Office.',
        commentAr: 'إيصالات حكومية شفافة وبدون أي رسوم مخفية، وفريق خبير جداً بقوانين اقتصادية دبي بجوار بريد الكرامة.',
      },
    ],
    targetKeywords: {
      shortTail: ['trade license dubai', 'commercial license dubai', 'det dubai license', 'ded trade license', 'dubai business setup'],
      longTail: ['trade license dubai with visa', '100% foreign ownership llc dubai cost', 'how to get commercial trade license in dubai mainland', 'det commercial license fees 2026'],
    },
  },

  // =========================================================================
  // 2. INSTANT LICENSE (5-MINUTE FAST-TRACK)
  // =========================================================================
  'det-instant-license': {
    detailedOverviewEn: `The DET Instant License (الرخصة الفورية) is Dubai's premier fast-track commercial formation program, engineered by the Dubai Department of Economy and Tourism to issue a fully operational mainland business license in under 15 minutes. Ideal for entrepreneurs, international startups, and digital commerce founders who want to launch operations immediately, the Instant License waives the requirement for a physical office lease (Ejari) and a notarized paper Memorandum of Association (MOA) during the entire first year of business.

At Karama Business Center (KBC), our authorized DET counter executes Instant License applications in a single sitting. When we submit your Instant License through the official Invest in Dubai gateway, the system simultaneously generates four official government registrations: (1) Your DET Mainland Trade License with an electronic MOA, (2) Dubai Chamber of Commerce Membership Certificate, (3) GDRFA Dubai Immigration Establishment Card, and (4) MoHRE (Tasheel) Labour Establishment File with pre-allocated employee work permit quota.

This means you can walk into Karama Business Center in the morning, receive your active Dubai company trade license before finishing your coffee, immediately apply for your 2-year Investor Residency Visa at our adjacent Amer Desk, and proceed directly to our on-site Karama Medical Fitness Center (KMFC) for your residency medical test—all without renting a physical office in Year 1.`,
    detailedOverviewAr: `تُعد الرخصة الفورية (DET Instant License) المبادرة الأسرع لتأسيس الأعمال في إمارة دبي، حيث صُممت من قِبل دائرة الاقتصاد والسياحة لإصدار رخصة تجارية أو مهنية فعالة خلال دقائق معدودة. وتعتبر الخيار الأمثل لرواد الأعمال والمستثمرين الراغبين في الانطلاق الفوري في السوق الإماراتي، حيث تُعفي المتعامل من شرط توفير عقد إيجار مكتب فعلي (إيجاري) وتصديق عقد التأسيس الورقي طوال السنة الأولى من عمر الشركة.

في مركز الكرامة للأعمال (KBC)، نُنجز إصدار الرخصة الفورية في جلسة واحدة عبر الربط المباشر مع بوابة "استثمر في دبي". وفور اعتماد الطلب، يصدر النظام تلقائياً 4 وثائق حكومية رسمية في آن واحد: (1) الرخصة التجارية مع عقد تأسيس إلكتروني، (2) شهادة عضوية غرفة تجارة دبي، (3) بطاقة المنشأة للإدارة العامة للإقامة وشؤون الأجانب (GDRFA)، و(4) ملف المنشأة لدى وزارة الموارد البشرية والتوطين (تسهيل) مع حصة تصاريح عمل فورية.

يتيح لك هذا التكامل استلام رخصة شركتك فوراً، والتوجه مباشرة إلى قسم "آمر" المجاور في نفس المبنى لإصدار إقامة مستثمر، وإجراء الفحص الطبي في مركز الكرامة الطبي (KMFC) تحت سقف واحد دون الحاجة لاستئجار مكتب في العام الأول.`,
    legalFrameworkEn: `DET Smart Instant Licensing Initiative under Dubai Economic Agenda (D33) and Invest in Dubai Unified Commercial Registry Regulations.`,
    legalFrameworkAr: `مبادرة الترخيص الفوري الذكي الصادرة عن دائرة الاقتصاد والسياحة بدبي ضمن أجندة دبي الاقتصادية (D33) ولوائح السجل التجاري الموحد.`,
    eligibilityEn: [
      'Activities not requiring external ministerial approvals (over 1,500 commercial and professional activities eligible)',
      'Legal structures supported: LLC, One-Person LLC, Sole Proprietorship, and Civil Company',
      'At least one shareholder holding an active UAE Pass digital identity or visiting our Karama desk in person',
      'Valid passport copies and UAE entry stamp / residency visa for all partners',
    ],
    eligibilityAr: [
      'الأنشطة التجارية والمهنية التي لا تتطلب موافقات خارجية مسبقة (أكثر من 1,500 نشاط مؤهل)',
      'الأشكال القانونية المشمولة: شركة ذات مسؤولية محدودة، شركة الشخص الواحد، مؤسسة فردية، وشركة أعمال مدنية',
      'توفر حساب الهوية الرقمية (UAE Pass) لأحد الشركاء أو الحضور الشخصي لمركزنا بالكرامة',
      'صور جوازات السفر وختم الدخول أو الإقامة السارية للشركاء',
    ],
    galleryImages: DET_GALLERY,
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'Instant Activity & Legal Form Selection',
        titleAr: 'اختيار النشاط الفوري والشكل القانوني',
        descEn: 'Verification that your chosen commercial or professional activity qualifies for instant issuance without external NOCs.',
        descAr: 'التحقق من شمول النشاط التجاري أو المهني ضمن قائمة الإصدار الفوري وتحديد الشكل القانوني للشركة.',
        durationEn: '10 Mins',
        durationAr: '10 دقائق',
      },
      {
        stepNumber: 2,
        titleEn: 'UAE Pass Authentication & Virtual Location Assignment',
        titleAr: 'التحقق عبر الهوية الرقمية وتخصيص الموقع الافتراضي',
        descEn: 'Digital confirmation by partners via UAE Pass and automatic allocation of a DET virtual site address for Year 1.',
        descAr: 'اعتماد الشركاء إلكترونياً عبر تطبيق UAE Pass وتخصيص موقع افتراضي معتمد من اقتصادية دبي للسنة الأولى.',
        durationEn: '15 Mins',
        durationAr: '15 دقيقة',
      },
      {
        stepNumber: 3,
        titleEn: 'DET Voucher Payment (AED 3,000 Base Bundle)',
        titleAr: 'سداد إذن الدفع الحكومي للرخصة الفورية',
        descEn: 'Direct settlement of the official DET Instant License voucher with immediate electronic receipt.',
        descAr: 'سداد رسوم إذن الدفع الحكومي الرسمي واستلام الإيصال المالي الموثق فوراً.',
        durationEn: '5 Mins',
        durationAr: '5 دقائق',
      },
      {
        stepNumber: 4,
        titleEn: 'Simultaneous License, Chamber, GDRFA & MoHRE Issuance',
        titleAr: 'إصدار الرخصة وعضوية الغرفة وملف الإقامة والعمل',
        descEn: 'Instant download of your Trade License, Electronic MOA, Dubai Chamber Certificate, and Establishment Cards.',
        descAr: 'استلام الرخصة التجارية وعقد التأسيس الإلكتروني وشهادة الغرفة وبطاقات المنشأة جاهزة لإصدار الإقامات.',
        durationEn: 'Instant',
        durationAr: 'فوري',
      },
    ],
    faqs: [
      {
        questionEn: 'Do I need an Ejari office contract to get a DET Instant License?',
        questionAr: 'هل أحتاج إلى عقد إيجاري لمكتب لاستخراج الرخصة الفورية؟',
        answerEn: 'No! The biggest advantage of the DET Instant License is that no physical office lease (Ejari) is required for the first year. DET assigns a virtual site code for Year 1, and you only provide an Ejari address upon your second-year renewal.',
        answerAr: 'لا! الميزة الكبرى للرخصة الفورية هي الإعفاء الكامل من شرط توفير عقد إيجار مكتب (إيجاري) خلال السنة الأولى، حيث تمنحك اقتصادية دبي موقعاً افتراضياً للسنة الأولى، ولا يُطلب عقد إيجاري إلا عند التجديد للسنة الثانية.',
      },
      {
        questionEn: 'Can I apply for my Investor Visa and open a corporate bank account with an Instant License?',
        questionAr: 'هل يمكنني إصدار إقامة مستثمر وفتح حساب بنكي للشركة بالرخصة الفورية؟',
        answerEn: 'Yes, 100%. The Instant License is a full mainland DET commercial license accompanied by an official Electronic MOA, Dubai Chamber membership, and GDRFA Establishment Card. You can immediately sponsor your Investor Residency Visa, family visas, and up to 3 employee visas, as well as open a UAE corporate bank account.',
        answerAr: 'نعم بنسبة 100%. الرخصة الفورية هي رخصة تجارية رسمية كاملة تصدر مع عقد تأسيس إلكتروني وبطاقة منشأة لإقامة دبي ووزارة العمل، وتخولك فوراً لإصدار إقامة مستثمر، كفالة الأسرة، توظيف حتى 3 موظفين، وفتح حساب بنكي للشركة.',
      },
      {
        questionEn: 'What are the official DET fees for an Instant License in 2026?',
        questionAr: 'ما هي الرسوم الحكومية الرسمية للرخصة الفورية في دبي لعام 2026؟',
        answerEn: 'The official DET Instant License government voucher starts from AED 3,000 (excluding foreign trade name surcharges if you select a non-Arabic brand name). Our typing and corporate setup advisory fee is AED 500.',
        answerAr: 'تبدأ الرسوم الحكومية الرسمية لإذن دفع الرخصة الفورية من 3,000 درهم (لا تشمل رسوم الاسم الأجنبي الإضافية في حال اختيار اسم غير عربي)، وتبلغ رسوم الطباعة والمتابعة في مركزنا 500 درهم.',
      },
    ],
    reviews: [
      {
        name: 'Marcus Vance',
        roleEn: 'Managing Partner',
        roleAr: 'الشريك الإداري',
        companyEn: 'Vance Digital Commerce LLC',
        companyAr: 'فانس للتجارة الرقمية ذ.م.م',
        rating: 5,
        date: 'October 2026',
        commentEn: 'Incredible speed. Walked into Karama Business Center at 9:30 AM and held my active Dubai LLC Instant License and GDRFA establishment card by 10:15 AM without needing an office lease.',
        commentAr: 'سرعة مذهلة! دخلت مركز الكرامة للأعمال الساعة 9:30 صباحاً واستلمت رخصتي الفورية وبطاقة المنشأة الساعة 10:15 صباحاً دون الحاجة لعقد إيجار مكتب.',
      },
    ],
    targetKeywords: {
      shortTail: ['instant license dubai', 'ded instant license', 'det instant license', 'dubai license without ejari', 'fast business setup dubai'],
      longTail: ['dubai instant license cost 2026', 'get trade license in 5 minutes dubai', 'dubai mainland license without office rent', 'instant license dubai with investor visa'],
    },
  },

  // =========================================================================
  // 3. DED E-TRADER LICENSE (HOME & SOCIAL MEDIA BUSINESS)
  // =========================================================================
  'det-etrader-license': {
    detailedOverviewEn: `The DED Trader License (commonly known as the DET E-Trader License / رخصة تاجر إلكتروني) is an official commercial and professional permit issued by the Dubai Department of Economy and Tourism specifically designed for home-based entrepreneurs, social media sellers, independent freelancers, and digital creators operating across Instagram, TikTok, Amazon UAE, Noon, and personal e-commerce websites.

Instead of operating informally and risking DET commercial compliance fines of up to AED 50,000 for unlicensed social media trading, the E-Trader License legalizes your online brand in Dubai for an ultra-low government fee of just AED 1,070 (plus AED 300 mandatory Dubai Chamber membership — total AED 1,370 per year). It requires zero physical office space and zero Ejari tenancy registration, linking directly to your residential Makani number in Dubai.

At Karama Business Center (KBC), our DET specialists verify your residential eligibility, register your social media handles and website domains under your official trade name, and issue your E-Trader License within 60 minutes. Your license grants you official intellectual property protection for your brand name, eligibility to apply for commercial payment gateways (Stripe, Tabby, Tamara, Network International), and legal authorization to participate in Dubai pop-up markets and exhibitions.`,
    detailedOverviewAr: `تُعد رخصة تاجر إلكتروني (DED E-Trader License) الصادرة عن دائرة الاقتصاد والسياحة بدبي الحل الحكومي الرسمي المخصص لرواد الأعمال المنزليين، تجار منصات التواصل الاجتماعي (إنستغرام، تيك توك، سناب شات)، المستقلين (Freelancers)، وأصحاب المتاجر الإلكترونية على منصات أمازون ونون والمواقع الخاصة.

بدلاً من العمل غير المرخص والتعرض لغرامات الرقابة التجارية التي قد تصل إلى 50,000 درهم، تمنحك رخصة تاجر إلكتروني غطاءً قانونياً رسمياً لعلامتك التجارية في دبي بتكلفة حكومية مخفضة للغاية تبلغ 1,070 درهماً فقط (بالإضافة إلى 300 درهم رسوم عضوية غرفة دبي — بإجمالي 1,370 درهماً سنوياً)، دون الحاجة لاستئجار مكتب أو تقديم عقد إيجاري، حيث تُربط الرخصة مباشرة برقم "مكاني" لمقر سكنك في دبي.

في مركز الكرامة للأعمال (KBC)، يقوم خبراؤنا بتدقيق الأهلية، تسجيل حسابات التواصل الاجتماعي والنطاقات الإلكترونية باسمك التجاري، وإصدار رخصة تاجر إلكتروني خلال 60 دقيقة، مما يتيح لك فتح حساب بنكي تجاري وتفعيل بوابات الدفع الإلكتروني (تبي، تمارا، سترايب) والمشاركة القانونية في المعارض والبازارات.`,
    legalFrameworkEn: `DET E-Trader Regulatory Program under the Consumer Protection and Commercial Compliance Sector of the Dubai Department of Economy and Tourism.`,
    legalFrameworkAr: `برنامج "تاجر" لتنظيم التجارة الإلكترونية والأعمال المنزلية التابع لقطاع الرقابة التجارية وحماية المستهلك بدائرة الاقتصاد والسياحة بدبي.`,
    eligibilityEn: [
      'UAE Nationals, GCC Nationals, and Foreign Expatriate Residents living in Dubai (aged 21+ years)',
      'Valid Emirates ID and active UAE residency visa',
      'Valid 10-digit Dubai Makani number for the applicant’s residential apartment or villa in Dubai',
      'UAE & GCC nationals qualify for both commercial trading (buying/selling goods) and professional activities; expat residents qualify for professional, service, lifestyle, IT, and handcrafted/design activities',
    ],
    eligibilityAr: [
      'مواطنو دولة الإمارات ودول مجلس التعاون والمقيمون في إمارة دبي (بعمر 21 عاماً فأكثر)',
      'بطاقة هوية إماراتية وإقامة سارية المفعول',
      'رقم "مكاني" صحيح (المكون من 10 أرقام) لمقر السكن الفعلي في إمارة دبي',
      'يُتاح للمواطنين ومواطني الخليج الأنشطة التجارية والمهنية، بينما يُتاح للمقيمين الأنشطة المهنية والخدمية والتقنية والتصميم',
    ],
    galleryImages: DET_GALLERY,
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'Nationality & Activity Eligibility Check',
        titleAr: 'التحقق من الأهلية وتحديد النشاط المسموح',
        descEn: 'Matching your nationality and online business model with the approved DET E-Trader activity catalog.',
        descAr: 'مطابقة الجنسية ونوع العمل الإلكتروني مع قائمة أنشطة "تاجر" المعتمدة من اقتصادية دبي.',
        durationEn: '15 Mins',
        durationAr: '15 دقيقة',
      },
      {
        stepNumber: 2,
        titleEn: 'Social Media & Makani Registration',
        titleAr: 'تسجيل حسابات التواصل ورقم مكاني',
        descEn: 'Linking your Instagram, TikTok, or website URLs and residential Dubai Makani number in the Invest in Dubai portal.',
        descAr: 'ربط روابط حسابات التواصل الاجتماعي أو الموقع الإلكتروني ورقم "مكاني" السكني في النظام.',
        durationEn: '20 Mins',
        durationAr: '20 دقيقة',
      },
      {
        stepNumber: 3,
        titleEn: 'Official Voucher Payment (AED 1,370)',
        titleAr: 'سداد رسوم الرخصة وعضوية الغرفة (1,370 درهم)',
        descEn: 'Settlement of AED 1,070 DET E-Trader fee plus AED 300 Dubai Chamber fee.',
        descAr: 'سداد إذن الدفع الحكومي البالغ 1,070 درهم لرخصة تاجر و300 درهم لغرفة تجارة دبي.',
        durationEn: '10 Mins',
        durationAr: '10 دقائق',
      },
      {
        stepNumber: 4,
        titleEn: 'E-Trader Certificate & Chamber Issuance',
        titleAr: 'إصدار رخصة تاجر إلكتروني وشهادة الغرفة',
        descEn: 'Immediate digital delivery of your official DET E-Trader License ready for payment gateway and courier onboarding.',
        descAr: 'استلام الرخصة الرسمية المعتمدة فوراً لتفعيل بوابات الدفع الإلكتروني وشركات الشحن.',
        durationEn: 'Instant',
        durationAr: 'فوري',
      },
    ],
    faqs: [
      {
        questionEn: 'Can expats in Dubai get a DET E-Trader License?',
        questionAr: 'هل يمكن للمقيمين (غير المواطنين) استخراج رخصة تاجر إلكتروني في دبي؟',
        answerEn: 'Yes! Expatriate residents holding a valid Emirates ID and living in Dubai can obtain a DET E-Trader License for professional, consultancy, IT, marketing, photography, coaching, lifestyle, and creative/tailoring services. Commercial buying and reselling of physical finished goods under E-Trader is reserved for UAE and GCC nationals (expats wishing to trade physical goods on Amazon/Noon can opt for the DET Instant License).',
        answerAr: 'نعم! يحق للمقيمين في دبي الحاصلين على هوية إماراتية سارية استخراج رخصة تاجر إلكتروني للأنشطة المهنية والخدمية والاستشارية والتقنية والتسويق والتصميم. أما أنشطة البيع والشراء التجاري المباشر للسلع الجاهزة ضمن برنامج "تاجر" فهي مخصصة لمواطني الإمارات ودول مجلس التعاون (ويمكن للمقيمين الراغبين بالتجارة العامة اختيار "الرخصة الفورية").',
      },
      {
        questionEn: 'Does the E-Trader License allow me to sponsor visas?',
        questionAr: 'هل تتيح رخصة تاجر إلكتروني إصدار تأشيرات إقامة أو كفالة موظفين؟',
        answerEn: 'No, the E-Trader License is a single-person home-based permit for existing UAE residents or nationals and does not grant visa quota. If you need an Investor Visa or employee work permits, our consultants will set up a DET Instant License or Professional License for you instead.',
        answerAr: 'لا، رخصة تاجر إلكتروني مخصصة للأفراد المقيمين بالفعل في الدولة للعمل من المنزل ولا تصدر عليها تأشيرات إقامة أو عمالة. إذا كنت بحاجة لإقامة مستثمر أو توظيف عمالة، نوصي باستخراج "الرخصة الفورية" أو الرخصة المهنية.',
      },
    ],
    reviews: [
      {
        name: 'Fatima Al-Marri',
        roleEn: 'Founder & Perfumer',
        roleAr: 'مؤسسة ومصممة عطور',
        companyEn: 'Dukhoon & Oud Atelier',
        companyAr: 'أتيليه دخون وعود',
        rating: 5,
        date: 'October 2026',
        commentEn: 'Got my DED E-Trader license in 40 minutes at Karama Business Center. Immediately activated Tabby and Stripe on my Instagram store!',
        commentAr: 'استخرجت رخصة تاجر إلكتروني خلال 40 دقيقة في مركز الكرامة للأعمال، وفعلت بوابات الدفع تبي وسترايب لمتجري على إنستغرام في نفس اليوم!',
      },
    ],
    targetKeywords: {
      shortTail: ['e-trader license dubai', 'ded trader license', 'det e-trader', 'social media license dubai', 'home business license dubai'],
      longTail: ['how to get e-trader license in dubai for expats', 'ded e-trader license cost 1070 aed', 'instagram business license dubai price', 'freelance e-trader permit dubai'],
    },
  },

  // =========================================================================
  // 4. PROFESSIONAL & CIVIL COMPANY LICENSE (100% FOREIGN OWNERSHIP)
  // =========================================================================
  'det-professional-license': {
    detailedOverviewEn: `A DET Professional License (رخصة مهنية) is the official Dubai mainland authorization for service-oriented businesses, consultancies, technical contractors, healthcare clinics, IT development firms, accounting practices, beauty salons, and artisan businesses. Unlike commercial trading licenses that focus on physical commodity distribution, a Professional License is granted based on the intellectual qualifications, professional expertise, and specialized skills of its owners.

At Karama Business Center (KBC), we structure 100% foreign-owned Sole Proprietorships (المؤسسة الفردية) and Civil Works Companies (شركة أعمال مدنية) under the Dubai Department of Economy and Tourism. Where required by DET regulations for specific regulated professions, we also provide a certified Emirati Local Service Agent (LSA / وكيل خدمات محلي) on a fixed, low annual fee with an ironclad legal agreement confirming that the LSA holds 0% equity, 0% profit share, and zero management interference in your company.

Our corporate advisory desk handles the entire workflow: verifying professional academic credentials, securing any external technical NOCs (such as DHA for medical clinics, KHDA for training institutes, RERA for real estate consultancy, or Dubai Municipality for salons and restaurants), drafting the Civil Company partnership contract or LSA agreement, and issuing your full mainland license with investor and employee visa eligibility.`,
    detailedOverviewAr: `تُعد الرخصة المهنية (DET Professional License) الصادرة عن دائرة الاقتصاد والسياحة بدبي الترخيص الرسمي المخصص للشركات الخدمية، مكاتب الاستشارات الإدارية والهندسية، شركات البرمجيات وتقنية المعلومات، الصالونات ومراكز التجميل، المطاعم، وشركات الصيانة الفنية. وتتميز الرخصة المهنية بأنها تمنح المستثمرين الأجانب حق التملك الكامل بنسبة 100% لحصص الشركة وأرباحها وإدارتها.

في مركز الكرامة للأعمال (KBC)، نقوم بتأسيس المؤسسات الفردية المهنية وشركات الأعمال المدنية (Civil Company) باحترافية عالية. وفي الأنشطة المهنية التي تتطلب تعيين "وكيل خدمات محلي" مواطن، نوفر وكيل خدمات إماراتي معتمد بموجب عقد قانوني موثق يضمن لك التملك الكامل بنسبة 100% للأصول والأرباح والإدارة، مع تقاضي وكيل الخدمات أتعاباً سنوية مقطوعة ومحددة مسبقاً دون أي تدخل في شؤون الشركة.

يتولى فريقنا تنسيق كافة الموافقات الفنية الخارجية عند الحاجة (مثل هيئة المعرفة والتنمية البشرية KHDA لمعاهد التدريب، هيئة الصحة بدبي DHA للعيادات، أو بلدية دبي للصالونات والمطاعم)، وصولاً إلى إصدار الرخصة المهنية وفتح ملف الإقامة والعمل.`,
    legalFrameworkEn: `Dubai Law No. 13 of 2011 and UAE Civil Transactions Law (Federal Law No. 5 of 1985) governing Civil Works Companies and Sole Professional Establishments.`,
    legalFrameworkAr: `القانون رقم (13) لسنة 2011 بإمارة دبي وقانون المعاملات المدنية الاتحادي رقم (5) لسنة 1985 المنظم لشركات الأعمال المدنية والمؤسسات المهنية الفردية.`,
    eligibilityEn: [
      'Consultants, engineers, IT specialists, artisans, service providers, and corporate investors',
      'Valid passport and Emirates ID copies of the professional owners',
      'Relevant educational degree or professional experience certificate (required only for specialized engineering, legal, or medical consultancies)',
      'Commercial office, retail shop, or approved business center Ejari lease',
    ],
    eligibilityAr: [
      'المستشارون، المهندسون، خبراء التقنية، مقدمو الخدمات المهنية والفنية، والمستثمرون',
      'صور جوازات السفر والهوية الإماراتية لأصحاب الرخصة',
      'المؤهل العلمي أو شهادة الخبرة للمهن التخصصية الدقيقة (كالهندسة والاستشارات القانونية والطبية)',
      'عقد إيجار تجاري موثق (إيجاري) لمكتب أو محل أو مركز أعمال معتمد',
    ],
    galleryImages: DET_GALLERY,
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'Professional Activity & Legal Structure Advisory',
        titleAr: 'تحديد النشاط المهني والشكل القانوني',
        descEn: 'Selecting between Sole Proprietorship, Civil Company, or One-Person LLC and reserving the DET trade name.',
        descAr: 'اختيار الهيكل القانوني الأنسب (مؤسسة فردية أو شركة أعمال مدنية) وحجز الاسم التجاري رسمياً.',
        durationEn: '30 Mins',
        durationAr: '30 دقيقة',
      },
      {
        stepNumber: 2,
        titleEn: 'Initial Approval & External Authority NOC',
        titleAr: 'الموافقة المبدئية وموافقات الجهات المختصة',
        descEn: 'Securing DET initial approval and coordinating KHDA, DHA, or Dubai Municipality clearances if applicable.',
        descAr: 'إصدار الموافقة المبدئية من اقتصادية دبي واستيفاء موافقات الجهات المنظمة للنشاط إن وجدت.',
        durationEn: '1 - 4 Hours',
        durationAr: '1 - 4 ساعات',
      },
      {
        stepNumber: 3,
        titleEn: 'Civil Contract / LSA Electronic Attestation',
        titleAr: 'توثيق عقد الشركة المدنية أو وكيل الخدمات',
        descEn: 'Electronic signing of the Civil Works Partnership Agreement or Local Service Agent appointment.',
        descAr: 'التوقيع الإلكتروني الموثق لعقد شراكة الأعمال المدنية أو اتفاقية وكيل الخدمات المحلي.',
        durationEn: '1 - 2 Hours',
        durationAr: '1 - 2 ساعة',
      },
      {
        stepNumber: 4,
        titleEn: 'Professional License Issuance',
        titleAr: 'سداد الرسوم وإصدار الرخصة المهنية',
        descEn: 'Payment of official DET professional license fees and immediate digital certificate delivery.',
        descAr: 'سداد إذن الدفع الرسمي واستلام الرخصة المهنية المعتمدة جاهزة لمزاولة العمل وإصدار الإقامات.',
        durationEn: 'Same Day',
        durationAr: 'في نفس اليوم',
      },
    ],
    faqs: [
      {
        questionEn: 'What is the difference between a DET Commercial License and a Professional License?',
        questionAr: 'ما الفرق بين الرخصة التجارية والرخصة المهنية في اقتصادية دبي؟',
        answerEn: 'A Commercial License is issued for buying, importing, exporting, and selling physical goods (usually structured as an LLC). A Professional License is issued for providing intellectual, consultancy, technical, or personal services (such as management consulting, IT software development, technical maintenance, salons, or restaurants) and generally has lower annual DET government fees.',
        answerAr: 'تُصدر الرخصة التجارية لأنشطة بيع وشراء واستيراد وتصدير البضائع والسلع المادية، بينما تُصدر الرخصة المهنية لتقديم الخدمات الفكرية والاستشارية والفنية والحرفية (مثل الاستشارات الإدارية، البرمجة، الصيانة، الصالونات، والمطاعم)، وتتميز الرخصة المهنية بانخفاض رسومها الحكومية السنوية مقارنة بالتجارية.',
      },
      {
        questionEn: 'Does a Local Service Agent (LSA) have any ownership in my Professional License?',
        questionAr: 'هل يمتلك وكيل الخدمات المحلي أي نسبة في شركتي المهنية؟',
        answerEn: 'Zero percent. Unlike an old commercial partner, a Local Service Agent holds 0% shares, has zero claim to your profits or assets, and bears no financial liability. Their role is strictly limited to administrative government liaison for an agreed annual fee.',
        answerAr: 'صفر بالمئة (0%). وكيل الخدمات المحلي لا يمتلك أي حصة في رأس المال أو الأرباح أو الأصول، ولا يتدخل في الإدارة أو الحسابات البنكية إطلاقاً، ويقتصر دوره على التمثيل الإداري أمام الدوائر الحكومية مقابل أتعاب سنوية ثابتة.',
      },
    ],
    reviews: [
      {
        name: 'Dr. Henrik Lindqvist',
        roleEn: 'Principal Consultant',
        roleAr: 'المستشار الرئيسي',
        companyEn: 'Nordic Strategy & Management Advisory',
        companyAr: 'نورديك للاستشارات الإدارية والاستراتيجية',
        rating: 5,
        date: 'October 2026',
        commentEn: 'KBC handled our DET Management Consultancy Professional License with 100% foreign ownership. Clear pricing, fast processing, and seamless Investor Visa stamping.',
        commentAr: 'أنجز مركز الكرامة للأعمال رخصتنا المهنية للاستشارات الإدارية بتملك أجنبي 100%. أسعار واضحة وإجراءات سريعة وتثبيت سلس لإقامة المستثمر.',
      },
    ],
    targetKeywords: {
      shortTail: ['professional license dubai', 'civil company dubai', 'consultancy license dubai', 'technical services license dubai', 'sole proprietorship dubai'],
      longTail: ['det professional license cost 2026', '100% foreign ownership professional license dubai', 'how to open technical services company in dubai', 'local service agent dubai fee'],
    },
  },

  // =========================================================================
  // 5. TRADE NAME RESERVATION & INITIAL APPROVAL
  // =========================================================================
  'det-trade-name-reservation': {
    detailedOverviewEn: `Reserving an official Trade Name (حجز الاسم التجاري) and obtaining Initial Approval (الموافقة المبدئية) from the Dubai Department of Economy and Tourism (DET) are the mandatory first legal steps when establishing any mainland company, branch, or commercial brand in Dubai. A DET Trade Name Certificate legally locks your company name for 6 months, preventing any competitor across the Emirate from registering an identical or confusingly similar title.

DET enforces strict statutory naming conventions: trade names must reflect the company's legal activity, must not violate public morals or religious sensibilities, must not contain geographic or governmental names without special cabinet decree, and must undergo bilingual phonetic matching in both Arabic and English. Furthermore, DET differentiates between standard Arabic trade names and Foreign/Non-Arabic/Numeric trade names (which carry an annual DET foreign name surcharge of AED 1,000 to AED 2,000).

At Karama Business Center (KBC), our licensed DET typists run an instant live availability check against the unified UAE Economic Registry database before submitting your application—saving you from rejected applications and forfeited search fees. Within 30 minutes, we issue both your official DET Trade Name Reservation Certificate and Initial Approval Certificate so you can immediately sign your office lease (Ejari) and draft your MOA.`,
    detailedOverviewAr: `يُعد حجز الاسم التجاري وإصدار شهادة الموافقة المبدئية من دائرة الاقتصاد والسياحة بدبي (DET) الخطوة القانونية الأولى والإلزامية لتأسيس أي شركة أو فرع أو علامة تجارية في دبي. وتكفل شهادة حجز الاسم التجاري حماية اسم شركتك قانونياً لمدة 6 أشهر، مما يمنع أي جهة أخرى من تسجيل اسم مطابق أو مشابه.

تُطبق اقتصادية دبي ضوابط دقيقة لاختيار الأسماء التجارية؛ إذ يجب أن يتوافق الاسم مع نوع النشاط الاقتصادي، وألا يخالف النظام العام أو يتضمن أسماء دول أو هيئات حكومية، مع ضرورة التطابق اللفظي (وليس الترجمة الحرفية) بين اللغتين العربية والإنجليزية. كما تختلف الرسوم الحكومية بين الأسماء العربية الأصيلة والأسماء الأجنبية أو الرقمية أو المعرّبة (التي تخضع لرسوم اسم أجنبي إضافية تتراوح بين 1,000 و2,000 درهم).

في مركز الكرامة للأعمال (KBC)، يجري خبراؤنا فحصاً استباقياً فورياً في قاعدة بيانات السجل التجاري الموحد للتأكد من توفر الاسم وقبوله قبل التقديم، ونُصدر شهادة حجز الاسم التجاري والموافقة المبدئية خلال 30 دقيقة فقط لتمكينك من توقيع عقد الإيجار وعقد التأسيس فوراً.`,
    legalFrameworkEn: `DET Commercial Trade Name Nomenclature Guidelines and UAE Ministry of Economy Unified Commercial Registry Rules.`,
    legalFrameworkAr: `ضوابط ومعايير الأسماء التجارية الصادرة عن دائرة الاقتصاد والسياحة بدبي ولوائح السجل التجاري الموحد بوزارة الاقتصاد.`,
    eligibilityEn: [
      'Proposed business founders, shareholders, or authorized legal representatives (POA)',
      'Passport copies and Emirates ID (if resident) of all proposed partners',
      '3 proposed trade name options in order of priority',
      'Specification of the primary business activity (Commercial, Professional, or Industrial)',
    ],
    eligibilityAr: [
      'المؤسسون أو الشركاء أو الوكيل القانوني بموجب وكالة رسمية مصدقة',
      'صور جوازات السفر والهوية الإماراتية لجميع الشركاء المقترحين',
      '3 مقترحات للاسم التجاري مرتبة حسب الأولوية',
      'تحديد النشاط الاقتصادي الرئيسي (تجاري، مهني، أو صناعي)',
    ],
    galleryImages: DET_GALLERY,
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'Pre-Submission Database Search & Linguistic Audit',
        titleAr: 'البحث المسبق والتدقيق اللغوي للاسم',
        descEn: 'Checking the DET registry for trademark conflicts and verifying Arabic/English phonetic compliance.',
        descAr: 'فحص قاعدة بيانات اقتصادية دبي للتأكد من عدم تشابه الاسم مع علامات مسجلة وضبط الصياغة العربية والإنجليزية.',
        durationEn: '10 Mins',
        durationAr: '10 دقائق',
      },
      {
        stepNumber: 2,
        titleEn: 'Trade Name Application & Voucher Payment',
        titleAr: 'تقديم طلب حجز الاسم وسداد الرسوم',
        descEn: 'Lodging the trade name reservation (AED 620 for Arabic name; AED 1,620–2,620 for Foreign/English name).',
        descAr: 'تقديم الطلب الإلكتروني وسداد إذن الدفع الرسمي (620 درهم للاسم العربي، وتضاف رسوم الاسم الأجنبي للأسماء غير العربية).',
        durationEn: '15 Mins',
        durationAr: '15 دقيقة',
      },
      {
        stepNumber: 3,
        titleEn: 'DET Initial Approval Issuance',
        titleAr: 'إصدار شهادة الموافقة المبدئية',
        descEn: 'Generating the official DET Initial Approval confirming no objection to establishing the company.',
        descAr: 'إصدار شهادة الموافقة المبدئية الرسمية التي تخول المتعامل استكمال إجراءات التأسيس وتوقيع عقد الإيجار.',
        durationEn: '15 Mins',
        durationAr: '15 دقيقة',
      },
    ],
    faqs: [
      {
        questionEn: 'Why is an English/Foreign trade name more expensive than an Arabic trade name in DET?',
        questionAr: 'لماذا تزيد رسوم الاسم التجاري الأجنبي عن الاسم العربي في اقتصادية دبي؟',
        answerEn: 'Under DET tariff regulations, reserving a pure Arabic meaning trade name costs AED 620. However, if the trade name uses non-Arabic words, Latin acronyms, numbers (e.g., "360", "7"), or global/regional terms (e.g., "Gulf", "Middle East", "International", "Europe"), DET levies an annual Foreign Trade Name fee ranging from AED 1,000 to AED 2,000. Our consultants advise you on how to structure your name to save on annual renewal costs.',
        answerAr: 'تبلغ رسوم حجز الاسم التجاري العربي الأصيل 620 درهماً فقط. أما إذا تضمن الاسم كلمات غير عربية (أجنبية معربة)، أو اختصارات بالحروف، أو أرقاماً، أو كلمات مثل (الدولية، العالمية، الشرق الأوسط، الخليج)، فتُطبق اقتصادية دبي رسوم "اسم أجنبي" سنوية تتراوح بين 1,000 و2,000 درهم. يقدم مستشارونا نصائح ذكية لاختيار اسم يوفر عليك هذه الرسوم سنوياً.',
      },
      {
        questionEn: 'How long is a DET Trade Name Reservation valid?',
        questionAr: 'ما هي مدة صلاحية شهادة حجز الاسم التجاري؟',
        answerEn: 'A DET Trade Name Reservation Certificate is valid for 6 months (180 days) from the date of payment and can be renewed before expiry if your licensing setup is still in progress.',
        answerAr: 'تسري صلاحية شهادة حجز الاسم التجاري لمدة 6 أشهر (180 يوماً) من تاريخ السداد، ويمكن تمديدها قبل انتهائها في حال عدم اكتمال إجراءات إصدار الرخصة.',
      },
    ],
    reviews: [
      {
        name: 'Sami Al-Khouri',
        roleEn: 'Restaurant Group Owner',
        roleAr: 'مالك مجموعة مطاعم',
        companyEn: 'Zaytoon & Zaatar Hospitality LLC',
        companyAr: 'زيتون وزعتر للضيافة ذ.م.م',
        rating: 5,
        date: 'October 2026',
        commentEn: 'Had three names rejected online before coming to KBC. Their DET officer adjusted the Arabic phrasing and got our trade name and initial approval approved in 20 minutes!',
        commentAr: 'تم رفض 3 أسماء لي عبر الإنترنت قبل زيارتي لمركز الكرامة للأعمال. قام الموظف المختص بتعديل الصياغة اللغوية وحصلنا على الموافقة وشهادة الاسم خلال 20 دقيقة!',
      },
    ],
    targetKeywords: {
      shortTail: ['trade name reservation dubai', 'ded trade name check', 'det initial approval', 'company name registration dubai', 'dubai trade name search'],
      longTail: ['how to check trade name availability in dubai ded', 'det trade name reservation fee 620 aed', 'foreign trade name fee dubai ded', 'initial approval certificate dubai economy'],
    },
  },

  // =========================================================================
  // 6. MOA & LSA DRAFTING & ELECTRONIC SIGNING
  // =========================================================================
  'det-moa-lsa-signing': {
    detailedOverviewEn: `The Memorandum of Association (MOA / عقد التأسيس) is the supreme constitutional charter of any Limited Liability Company (LLC) or Civil Company in Dubai. It legally defines shareholding percentages, capital contributions, profit and loss distribution ratios, and—most critically—the statutory powers of the appointed General Manager (including authority to open and operate corporate bank accounts, sign checks, obtain credit facilities, and represent the company before UAE courts and ministries).

At Karama Business Center (KBC), our bilingual corporate legal drafters prepare custom-tailored Memorandums of Association, Share Transfer Addendums (ملحق تعديل عقد تأسيس), and Local Service Agent (LSA) agreements in strict compliance with UAE Federal Decree-Law No. 32 of 2021. We also facilitate immediate Electronic MOA Signing (توقيع عقد التأسيس إلكترونياً) directly through the DET Invest in Dubai and Dubai Courts Digital Notary systems.

With electronic MOA authentication, shareholders do not need to queue at physical Notary Public halls; partners can review and digitally sign the bilingual contract from their smartphones using UAE Pass biometric verification—even if one or more partners are currently traveling outside the UAE.`,
    detailedOverviewAr: `يُعد عقد التأسيس (Memorandum of Association - MOA) الدستور القانوني الحاكم لأي شركة ذات مسؤولية محدودة (LLC) أو شركة أعمال مدنية في دبي، حيث يحدد بدقة حصص الشركاء في رأس المال، نسب توزيع الأرباح والخسائر، والأهم من ذلك: الصلاحيات الإدارية والمالية للمدير العام (بما يشمل صلاحيات فتح وإدارة الحسابات البنكية، التوقيع على الشيكات، الاقتراض، وتمثيل الشركة أمام المحاكم والوزارات).

في مركز الكرامة للأعمال (KBC)، يتولى مستشارونا القانونيون صياغة عقود التأسيس الجديدة، ملاحق تعديل العقود والتنازل عن الحصص، وعقود وكيل الخدمات المحلي باللغتين العربية والإنجليزية وفق أحدث أحكام قانون الشركات التجارية الاتحادي. كما نوفر خدمة التوثيق والتوقيع الإلكتروني لعقد التأسيس مباشرة عبر بوابة اقتصادية دبي والكاتب العدل الرقمي لمحاكم دبي.

بفضل التوقيع الإلكتروني عبر تطبيق الهوية الرقمية (UAE Pass)، يمكن لجميع الشركاء اعتماد وتوثيق عقد التأسيس عن بُعد من هواتفهم الذكية في دقائق معدودة دون الحاجة للحضور الشخصي أمام الكاتب العدل، حتى وإن كان أحد الشركاء خارج دولة الإمارات.`,
    legalFrameworkEn: `UAE Federal Decree-Law No. 32 of 2021 on Commercial Companies (Articles 71–104 governing LLC Memorandums of Association) and Dubai Courts Digital Notary Regulations.`,
    legalFrameworkAr: `المرسوم بقانون اتحادي رقم (32) لسنة 2021 بشأن الشركات التجارية (المواد 71 إلى 104 المنظمة لعقود تأسيس الشركات ذات المسؤولية المحدودة) ولوائح الكاتب العدل الرقمي بمحاكم دبي.`,
    eligibilityEn: [
      'Shareholders and appointed managers of a new or existing Dubai mainland company',
      'Valid DET Initial Approval and Trade Name Reservation Certificate (for new MOA)',
      'Existing Trade License and previous notarized MOA (for Share Transfer / MOA Addendum)',
      'Active UAE Pass verified account for digital signing (or original Emirates ID / Passport for in-person notary video session)',
    ],
    eligibilityAr: [
      'الشركاء والمديرون المعينون في الشركات الجديدة أو القائمة في إمارة دبي',
      'شهادة الموافقة المبدئية وحجز الاسم التجاري (لعقود التأسيس الجديدة)',
      'الرخصة التجارية الحالية والعقد الأصلي المصدق (لملاحق التعديل والتنازل عن الحصص)',
      'حساب موثق في تطبيق UAE Pass للتوقيع الرقمي (أو جواز السفر والهوية للتوثيق عبر الاتصال المرئي مع الكاتب العدل)',
    ],
    galleryImages: DET_GALLERY,
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'Bilingual Legal Drafting & Banking Clauses',
        titleAr: 'الصياغة القانونية المزدوجة وضبط صلاحيات البنوك',
        descEn: 'Drafting custom Arabic/English MOA clauses ensuring comprehensive banking powers for corporate account opening.',
        descAr: 'صياغة بنود العقد باللغتين العربية والإنجليزية مع تضمين كافة الصلاحيات المصرفية المطلوبة من بنوك الدولة.',
        durationEn: '45 Mins',
        durationAr: '45 دقيقة',
      },
      {
        stepNumber: 2,
        titleEn: 'System Upload & Partner UAE Pass Dispatch',
        titleAr: 'رفع العقد وإرسال روابط التوقيع عبر UAE Pass',
        descEn: 'Registering the MOA in the DET / Dubai Courts e-Notary portal and triggering SMS/UAE Pass signing links to all partners.',
        descAr: 'إدراج العقد في النظام الإلكتروني وإرسال إشعارات التوقيع الرقمي الفوري لهواتف جميع الشركاء.',
        durationEn: '15 Mins',
        durationAr: '15 دقيقة',
      },
      {
        stepNumber: 3,
        titleEn: 'Notary Public Fee Payment & Digital Seal',
        titleAr: 'سداد رسوم التوثيق وإصدار العقد المصدق',
        descEn: 'Settlement of official electronic MOA attestation fees and immediate issuance of the QR-verifiable notarized MOA PDF.',
        descAr: 'سداد رسوم التوثيق الحكومية واستلام نسخة عقد التأسيس الإلكتروني المختومة برمز التحقق الرقمي QR.',
        durationEn: '30 Mins',
        durationAr: '30 دقيقة',
      },
    ],
    faqs: [
      {
        questionEn: 'Why did my UAE bank reject our standard electronic MOA when opening a corporate account?',
        questionAr: 'لماذا ترفض بعض البنوك عقد التأسيس الإلكتروني القياسي عند فتح حساب للشركة؟',
        answerEn: 'Standard auto-generated electronic MOAs sometimes lack explicit banking power clauses (such as authority to open multi-currency accounts, request checkbooks, use online corporate banking, or sign indemnities). At KBC, our legal drafters specifically include bank-compliant management power clauses accepted by Emirates NBD, ADCB, FAB, Mashreq, and Wio Bank.',
        answerAr: 'تفتقر بعض العقود الآلية المختصرة إلى النص الصريح على صلاحيات المدير البنكية التفصيلية (مثل فتح الحسابات بالعملات الأجنبية، إصدار دفاتر الشيكات، وتفعيل الخدمات المصرفية الإلكترونية). في مركز الكرامة للأعمال، نصيغ بنود الإدارة بما يتوافق تماماً مع متطلبات الإدارات القانونية في بنك الإمارات دبي الوطني، أبوظبي التجاري، أبوظبي الأول، المشرق، وبنك ويو (Wio).',
      },
      {
        questionEn: 'Can a partner sign the DET MOA if they are outside the UAE?',
        questionAr: 'هل يمكن للشريك توقيع عقد التأسيس وهو خارج دولة الإمارات؟',
        answerEn: 'Yes! As long as the partner has an active verified UAE Pass app on their phone, they can sign the DET electronic MOA from anywhere in the world, or complete a 5-minute remote video attestation session with the Dubai Courts Notary.',
        answerAr: 'نعم! طالما يمتلك الشريك حساباً موثقاً في تطبيق UAE Pass على هاتفه، يمكنه التوقيع إلكترونياً من أي دولة في العالم، أو إجراء جلسة تحقق مرئي عن بُعد لمدة 5 دقائق مع الكاتب العدل.',
      },
    ],
    reviews: [
      {
        name: 'Tariq Al-Mansoori',
        roleEn: 'Corporate Legal Counsel',
        roleAr: 'مستشار قانوني للشركات',
        companyEn: 'Emirates Horizon Holdings',
        companyAr: 'آفاق الإمارات القابضة',
        rating: 5,
        date: 'October 2026',
        commentEn: 'Flawless MOA share transfer addendum drafted for 4 shareholders across 3 countries. Signed electronically in under 2 hours.',
        commentAr: 'صياغة احترافية لملحق تنازل عن حصص وتعديل عقد تأسيس بين 4 شركاء في 3 دول مختلفة، وتم التوقيع الإلكتروني خلال أقل من ساعتين.',
      },
    ],
    targetKeywords: {
      shortTail: ['moa signing dubai', 'memorandum of association dubai', 'electronic moa ded', 'llc moa amendment dubai', 'local service agent agreement'],
      longTail: ['electronic moa signing dubai ded cost', 'how to amend memorandum of association in dubai', 'share transfer addendum llc dubai', 'notary public moa attestation karama dubai'],
    },
  },

  // =========================================================================
  // 7. LICENSE AMENDMENT (PARTNER, MANAGER & ACTIVITY CHANGE)
  // =========================================================================
  'det-license-amendment-partner-activity': {
    detailedOverviewEn: `As your business evolves in Dubai, your official DET Trade License must accurately reflect your current corporate structure, management leadership, and commercial scope. Operating an additional activity not listed on your license, or failing to update a change in general manager or shareholding structure, exposes the company to steep DET inspection fines and frozen corporate bank accounts.

At Karama Business Center (KBC), our authorized DET corporate desk processes all categories of Mainland License Amendments (تعديل الرخصة التجارية):
1. **Adding or Removing Business Activities**: Expanding your existing license with new trading, e-commerce, or consultancy lines from the DET catalog.
2. **Partner Addition, Withdrawal & Share Transfer**: Converting a multi-partner LLC into a One-Person LLC, removing a legacy 51% local sponsor to achieve 100% foreign ownership, or onboarding new investors.
3. **General Manager Appointment or Change**: Updating the authorized signatory on the license and MOA so the new director can immediately manage bank accounts and sign MoHRE/GDRFA portals.
4. **Trade Name Change, Capital Amendment & Address Relocation**: Moving your company to a new Ejari office or rebranding your corporate trade name.`,
    detailedOverviewAr: `مع نمو وتوسع أعمال شركتك في دبي، يتعين تحديث بيانات الرخصة التجارية لدى دائرة الاقتصاد والسياحة (DET) لتعكس بدقة هيكل الملكية الحالي، الإدارة التنفيذية، والأنشطة الفعلية الممارسة. إن ممارسة نشاط إضافي غير مدرج في الرخصة أو عدم تحديث بيانات المدير العام قد يعرض المنشأة لمخالفات الرقابة التجارية أو تجميد الحساب البنكي للشركة.

في مركز الكرامة للأعمال (KBC)، نُنجز كافة معاملات تعديل الرخص التجارية والمهنية في دبي بسرعة فائقة:
1. **إضافة أو حذف الأنشطة التجارية**: توسيع نطاق رخصتك الحالية بإضافة أنشطة تجارية أو مهنية أو تجارة إلكترونية جديدة.
2. **إدخال أو إخراج شريك والتنازل عن الحصص**: تحويل الشركة إلى تملك أجنبي كامل بنسبة 100% عبر تنازل الشريك المحلي، أو ضم مستثمرين جدد وتعديل الحصص.
3. **تغيير المدير العام وتحديث الصلاحيات**: تعديل اسم المدير المسؤول في الرخصة وعقد التأسيس لاعتماد التوقيع البنكي وإدارة ملفات الإقامة والعمل.
4. **تغيير الاسم التجاري أو الموقع (إيجاري) أو رأس المال**: نقل مقر الشركة لمكتب جديد أو تحديث العلامة التجارية.`,
    legalFrameworkEn: `UAE Federal Decree-Law No. 32 of 2021 on Commercial Companies (Corporate Restructuring & Share Transfers) and DET Commercial Registry Amendment Procedures.`,
    legalFrameworkAr: `المرسوم بقانون اتحادي رقم (32) لسنة 2021 بشأن الشركات التجارية وإجراءات تعديل بيانات السجل التجاري بدائرة الاقتصاد والسياحة بدبي.`,
    eligibilityEn: [
      'Active or expired Dubai Mainland Trade License (amendments can be combined with annual license renewal)',
      'Original Emirates ID and Passport copies of existing and incoming shareholders/managers',
      'Board Resolution (for corporate shareholders) or unanimous partner consent via UAE Pass',
      'External regulatory NOC only if adding a specialized regulated activity (e.g., transport, healthcare, food)',
    ],
    eligibilityAr: [
      'رخصة تجارية أو مهنية صادرة من اقتصادية دبي (يمكن دمج التعديل مع التجديد السنوي لتوفير الرسوم)',
      'صور الهوية الإماراتية وجوازات السفر للشركاء الحاليين والجدد والمدير المعين',
      'موافقة جميع الشركاء عبر الهوية الرقمية UAE Pass أو قرار مجلس الإدارة للشركات المساهمة',
      'موافقة الجهة المنظمة في حال إضافة نشاط تخصصي يتطلب تصريحاً خارجياً',
    ],
    galleryImages: DET_GALLERY,
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'DET Initial Approval for License Modification',
        titleAr: 'إصدار الموافقة المبدئية على تعديل الرخصة',
        descEn: 'Submitting the amendment request in the DET system for partner change, manager update, or activity addition.',
        descAr: 'تقديم طلب التعديل في نظام اقتصادية دبي (تعديل الشركاء، تغيير المدير، أو إضافة الأنشطة) وإصدار الموافقة المبدئية.',
        durationEn: '30 Mins',
        durationAr: '30 دقيقة',
      },
      {
        stepNumber: 2,
        titleEn: 'MOA Addendum Drafting & Electronic Attestation',
        titleAr: 'صياغة وتوثيق ملحق تعديل عقد التأسيس',
        descEn: 'Preparing the legal Share Transfer or Management Amendment Addendum and authenticating signatures via UAE Pass.',
        descAr: 'إعداد ملحق تعديل عقد التأسيس (في حال تغيير الشركاء أو المدير) وتوثيقه إلكترونياً عبر الهوية الرقمية.',
        durationEn: '1 - 2 Hours',
        durationAr: '1 - 2 ساعة',
      },
      {
        stepNumber: 3,
        titleEn: 'DET Amendment Voucher Settlement & Updated License',
        titleAr: 'سداد رسوم التعديل وإصدار الرخصة المحدثة',
        descEn: 'Paying the official DET amendment voucher and downloading the updated Trade License and Commercial Register.',
        descAr: 'سداد إذن الدفع الحكومي واستلام الرخصة التجارية وشهادة السجل التجاري بالبيانات الجديدة فوراً.',
        durationEn: 'Same Day',
        durationAr: 'في نفس اليوم',
      },
      {
        stepNumber: 4,
        titleEn: 'Syncing Establishment Cards (GDRFA Amer & MoHRE Tasheel)',
        titleAr: 'تحديث بطاقة المنشأة في إقامة دبي ووزارة العمل',
        descEn: 'Updating your company immigration and labour files at our Karama desks to reflect the new partners or manager.',
        descAr: 'تحديث بيانات المنشأة تلقائياً لدى قسم آمر وقسم تسهيل في مركزنا لمطابقة أسماء الشركاء والمدير الجديد.',
        durationEn: '2 Hours',
        durationAr: 'ساعتان',
      },
    ],
    faqs: [
      {
        questionEn: 'How can I remove the 51% local sponsor and convert my old Dubai LLC to 100% foreign ownership?',
        questionAr: 'كيف يمكنني تحويل شركتي القديمة إلى تملك أجنبي 100% والتنازل عن حصة الشريك المواطن؟',
        answerEn: 'Our DET legal desk handles this daily. We obtain DET Initial Approval for partner share transfer, draft a bilingual Share Transfer Addendum where the Emirati partner transfers their 51% shares to you (converting the entity into a 100% foreign-owned One-Person LLC or multi-expat LLC), have both parties sign electronically via UAE Pass, and issue your updated 100% foreign-owned license on the same day.',
        answerAr: 'ينجز فريقنا القانوني هذه المعاملة يومياً وبكل سهولة؛ حيث نستخرج الموافقة المبدئية للتنازل عن الحصص، ونصيغ ملحق تعديل عقد التأسيس بنقل حصة الـ 51% إليك بالكامل (لتتحول الشركة إلى ذ.م.م للشخص الواحد أو بين شركاء أجانب بنسبة 100%)، ويتم التوقيع إلكترونياً عبر UAE Pass وإصدار الرخصة المعدلة في نفس اليوم.',
      },
      {
        questionEn: 'Is it cheaper to amend my trade license during annual renewal?',
        questionAr: 'هل من الأوفر إجراء تعديل الرخصة بالتزامن مع موعد التجديد السنوي؟',
        answerEn: 'Yes! Combining your license amendment (such as adding activities or changing address) with your annual DET license renewal saves you a separate AED 500–620 amendment administrative fee.',
        answerAr: 'نعم بالتأكيد! دمج طلب التعديل (مثل إضافة نشاط أو تغيير العنوان) مع معاملة التجديد السنوي للرخصة يوفر عليك رسوم طلب التعديل المنفصل.',
      },
    ],
    reviews: [
      {
        name: 'chen Wei',
        roleEn: 'Managing Director',
        roleAr: 'المدير العام',
        companyEn: 'Sinotech Building Materials LLC',
        companyAr: 'سينوتيك لمواد البناء ذ.م.م',
        rating: 5,
        date: 'October 2026',
        commentEn: 'Converted our 2018 LLC to 100% foreign ownership and added e-commerce activity at Karama Business Center. Everything was done digitally and our MoHRE/Amer cards were updated together.',
        commentAr: 'قمنا بتحويل شركتنا المؤسسة منذ 2018 إلى تملك أجنبي 100% مع إضافة نشاط التجارة الإلكترونية في مركز الكرامة للأعمال، وتم تحديث بطاقات المنشأة في آمر وتسهيل في نفس الزيارة.',
      },
    ],
    targetKeywords: {
      shortTail: ['trade license amendment dubai', 'add activity to trade license dubai', 'share transfer llc dubai', 'change manager in trade license dubai', 'convert llc to 100 foreign ownership'],
      longTail: ['cost to add activity in ded license dubai', 'remove local sponsor 51% dubai llc procedure', 'change company address ejari det license', 'partner withdrawal moa amendment dubai'],
    },
  },

  // =========================================================================
  // 8. TRADE LICENSE RENEWAL & EJARI ATTESTATION
  // =========================================================================
  'det-license-renewal-ejari': {
    detailedOverviewEn: `Timely annual renewal of your Dubai Mainland Trade License (تجديد الرخصة التجارية) is essential to keep your corporate bank accounts active, preserve your MoHRE employee visa quota, and avoid DET late renewal penalties (AED 200 per month) as well as GDRFA establishment card blocks.

At Karama Business Center (KBC), we offer a 30-minute express Trade License Renewal service. Because a valid commercial Ejari tenancy contract (with at least 1 to 3 months remaining validity) is the primary prerequisite for DET license renewal, our co-located Dubai Municipality / Real Estate Ejari desk audits and registers your commercial lease renewal on the spot before generating your official DET renewal payment voucher.

Furthermore, if your company is eligible for DET commercial fee reductions, installment plans through participating UAE banks, or fine waiver petitions for long-expired licenses, our senior DET liaison officers submit the formal reduction request to minimize your renewal outlay. Once the DET voucher is settled, we also renew your Dubai Chamber of Commerce membership and sync your new license expiry date with both MoHRE (Tasheel) and GDRFA (Amer) so your company's visa systems never experience a single hour of downtime.`,
    detailedOverviewAr: `يُعد التجديد السنوي للرخصة التجارية في موعدها خطوة حيوية لضمان استمرارية الحسابات المصرفية للشركة، والحفاظ على صلاحية ملف العمل (تسهيل) وبطاقة المنشأة (آمر)، وتجنب غرامات التأخير الشهرية لاقتصادية دبي.

في مركز الكرامة للأعمال (KBC)، نقدم خدمة التجديد السريع للرخص التجارية والمهنية خلال 30 دقيقة فقط. ونظراً لأن وجود عقد إيجار تجاري موثق وساري المفعول (إيجاري) هو الشرط الأساسي للتجديد، يتولى مكتب "إيجاري" المدمج في مركزنا توثيق وتجديد عقد إيجار مكتبك أو محلك التجاري فوراً، ثم إصدار إذن دفع تجديد الرخصة مباشرة.

كما نساعد أصحاب الرخص المنتهية منذ فترات طويلة في تقديم طلبات تخفيض الغرامات المتراكمة، أو الاستفادة من خطط تقسيط رسوم الرخصة عبر البنوك الإماراتية المعتمدة. وفور صدور الرخصة المجددة، نقوم بتجديد شهادة عضوية غرفة تجارة دبي وتحديث تاريخ انتهاء الرخصة تلقائياً في أنظمة وزارة الموارد البشرية وإقامة دبي لضمان عدم توقف معاملات موظفيك.`,
    legalFrameworkEn: `Dubai Law No. 13 of 2011 and DET Annual Commercial Licensing Renewal & Market Fee Regulations.`,
    legalFrameworkAr: `القانون رقم (13) لسنة 2011 بإمارة دبي ولوائح التجديد السنوي للرخص التجارية ورسوم الأسواق بدائرة الاقتصاد والسياحة.`,
    eligibilityEn: [
      'Copy of existing DET Trade License',
      'Valid commercial Ejari lease certificate matching the license address',
      'Passport and Emirates ID copies of partners/manager',
      'External authority renewal approval only for regulated activities (e.g., RTA for transport, DHA for clinics, Civil Defense for warehouses/industrial)',
    ],
    eligibilityAr: [
      'صورة الرخصة التجارية أو المهنية الحالية',
      'شهادة عقد إيجاري تجاري سارية المفعول ومطابقة لعنوان الرخصة',
      'صور جوازات السفر والهوية الإماراتية للشركاء والمدير',
      'موافقة التجديد من الجهة المنظمة للأنشطة الخاصة فقط (مثل هيئة الطرق للنقل، أو الدفاع المدني للمستودعات والمصانع)',
    ],
    galleryImages: DET_GALLERY,
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'Ejari Lease Verification & Inspection Check',
        titleAr: 'تدقيق عقد إيجاري وفحص سجل الرخصة',
        descEn: 'Confirming active Ejari registration and checking for any municipal, Civil Defense, or DET inspection holds.',
        descAr: 'التحقق من سريان عقد إيجاري والتأكد من خلو ملف الرخصة من أي ملاحظات تفتيشية أو قيود.',
        durationEn: '10 Mins',
        durationAr: '10 دقائق',
      },
      {
        stepNumber: 2,
        titleEn: 'DET Renewal Voucher Generation',
        titleAr: 'إصدار إذن الدفع الرسمي للتجديد',
        descEn: 'Issuing the official itemized DET payment voucher including license fee, Dubai Chamber renewal, and 2.5% market fee.',
        descAr: 'إصدار إذن الدفع الحكومي المفصل شاملاً رسوم الرخصة وتجديد عضوية غرفة دبي ورسوم السوق (2.5%).',
        durationEn: '10 Mins',
        durationAr: '10 دقائق',
      },
      {
        stepNumber: 3,
        titleEn: 'Instant License Issuance & MoHRE/GDRFA Sync',
        titleAr: 'إصدار الرخصة المجددة وتحديث ملفات العمل والإقامة',
        descEn: 'Immediate issuance of the renewed DET Trade License and updating establishment records in Tasheel and Amer.',
        descAr: 'استلام الرخصة التجارية المجددة فوراً وتحديث صلاحية ملف الشركة في أنظمة تسهيل وآمر.',
        durationEn: '10 Mins',
        durationAr: '10 دقائق',
      },
    ],
    faqs: [
      {
        questionEn: 'Can I renew my DET Trade License via SMS, and why should I use KBC?',
        questionAr: 'كيف يتم تجديد الرخصة التجارية، وما ميزة التجديد عبر مركز الكرامة للأعمال؟',
        answerEn: 'While simple licenses can trigger an auto-renewal voucher by texting the license number to 6969, many renewals fail due to unlinked Ejari contracts, expired Civil Defense certificates, unupdated Ultimate Beneficial Owner (UBO / المستفيد الحقيقي) declarations, or expired partner passports. At KBC, we resolve all system blocks, file your mandatory UBO registry update, renew your Ejari, and sync your renewed license with Tasheel and Amer in one step.',
        answerAr: 'رغم توفر التجديد الآلي، إلا أن العديد من الرخص تواجه إيقافاً بسبب عدم ربط عقد إيجاري الجديد، أو انتهاء شهادة الدفاع المدني، أو عدم تحديث سجل المستفيد الحقيقي (UBO)، أو انتهاء جوازات الشركاء. في مركز الكرامة للأعمال، نقوم برفع كافة القيود، تسجيل بيانات المستفيد الحقيقي، توثيق إيجاري، وتحديث الرخصة في أنظمة تسهيل وآمر في خطوة واحدة.',
      },
      {
        questionEn: 'How can I get a discount or fine reduction on an expired Dubai Trade License?',
        questionAr: 'هل يمكن تخفيض غرامات التأخير على الرخصة التجارية المنتهية في دبي؟',
        answerEn: 'Yes. If your license has been expired for several years and accumulated heavy late renewal or municipal fines, our DET compliance officers can submit an official fine settlement petition or advise on whether a historical cancellation and fresh setup is more cost-effective.',
        answerAr: 'نعم. إذا كانت رخصتك منتهية منذ سنوات وتراكمت عليها غرامات التأخير، يقوم خبراؤنا بتقديم طلب رسمي لتسوية وتخفيض الغرامات لدى اقتصادية دبي، وتقديم استشارة مالية دقيقة لاختيار الحل الأقل تكلفة.',
      },
    ],
    reviews: [
      {
        name: 'Hussain Al-Balooshi',
        roleEn: 'Operations Director',
        roleAr: 'مدير العمليات',
        companyEn: 'Al-Balooshi General Trading LLC',
        companyAr: 'البلوشي للتجارة العامة ذ.م.م',
        rating: 5,
        date: 'October 2026',
        commentEn: 'Renewed our commercial license, Ejari, and updated our Tasheel company file in 25 minutes. Saved us from a bank account freeze!',
        commentAr: 'جددنا الرخصة التجارية وعقد إيجاري وحدثنا ملف الشركة في تسهيل خلال 25 دقيقة فقط، مما جنبنا تجميد الحساب البنكي للشركة!',
      },
    ],
    targetKeywords: {
      shortTail: ['trade license renewal dubai', 'ded license renewal', 'det license renewal', 'renew business license dubai', 'ejari for trade license'],
      longTail: ['trade license renewal dubai discount', 'dubai trade license renewal fees 2026', 'expired trade license fine check dubai', 'renew ded license without ejari'],
    },
  },

  // =========================================================================
  // 9. COMMERCIAL PERMITS (MU'LIN ADS, PROMOTIONS, SALES & KIOSKS)
  // =========================================================================
  'det-commercial-permits-mulin': {
    detailedOverviewEn: `Running seasonal discount sales, promotional raffle draws, clearance campaigns, exhibition kiosks, or outdoor/digital commercial advertisements in Dubai requires an official Commercial Permit from the Dubai Department of Economy and Tourism through the unified **Mu'lin (مُعلن)** and DET Commercial Permits platform. Displaying "Sale / Discount" signs in a retail store or advertising promotional offers on social media without an active DET permit carries immediate commercial compliance fines starting from AED 5,000 to AED 10,000.

At Karama Business Center (KBC), our commercial permits desk secures rapid same-day approvals for all DET marketing and retail operations:
- **Promotional & Discount Sale Permits (تصاريح التنزيلات والعروض الترويجية)**: Authorizing 25% to 90% retail discounts, Buy-One-Get-One offers, and Dubai Shopping Festival (DSF) / Dubai Summer Surprises (DSS) campaigns.
- **Mu'lin Advertising & Signage Permits (تصاريح الإعلانات واللوحات التجارية)**: Approving indoor/outdoor store signboards, vehicle branding NOCs, promotional flyers, and digital billboard artwork.
- **Kiosk, Pop-Up Stand & Exhibition Permits**: Authorizing temporary retail stands inside Dubai malls, trade shows, and seasonal events.
- **Extended Operating Hours & 24/7 Permits**: Official DET authorization for restaurants, supermarkets, and pharmacies to operate past midnight or 24 hours.`,
    detailedOverviewAr: `يتطلب تنظيم حملات التنزيلات الموسمية، العروض الترويجية، السحوبات على الجوائز، منصات البيع المؤقتة (Kiosks)، أو اللوحات الإعلانية في إمارة دبي استخراج تصريح تجاري رسمي مسبق من دائرة الاقتصاد والسياحة عبر منصة **"مُعلن" (Mu'lin)** ونظام التصاريح التجارية. إن وضع ملصقات "تنزيلات" أو الإعلان عن عروض ترويجية دون تصريح ساري المفعول يعرض المنشأة لمخالفات فورية تبدأ من 5,000 إلى 10,000 درهم.

في مركز الكرامة للأعمال (KBC)، نُصدر كافة التصاريح التجارية والتسويقية في نفس اليوم:
- **تصاريح التنزيلات والتصفيات والعروض الترويجية**: اعتماد نسب الخصم (من 25% حتى 90%)، عروض الهدايا المجانية، والمشاركة في مهرجان دبي للتسوق ومفاجآت صيف دبي.
- **تصاريح الإعلانات واللوحات عبر منصة "مُعلن"**: ترخيص اللوحات التجارية للمحلات، إعلانات المركبات، المطبوعات الإعلانية، والحملات التسويقية.
- **تصاريح الأكشاك (Kiosks) والمعارض المؤقتة**: ترخيص منصات العرض والبيع داخل المراكز التجارية والفعاليات في دبي.
- **تصاريح العمل الإضافي والعمل على مدار 24 ساعة**: للمطاعم، المقاهي، السوبرماركت، والصيدليات.`,
    legalFrameworkEn: `DET Commercial Compliance and Consumer Protection Regulations and the Dubai Unified Advertising Permit System (Mu'lin).`,
    legalFrameworkAr: `لوائح قطاع الرقابة التجارية وحماية المستهلك بدائرة الاقتصاد والسياحة بدبي والنظام الموحد لتصاريح الإعلانات (مُعلن).`,
    eligibilityEn: [
      'Valid Dubai Mainland Trade License (or Free Zone license with DET retail permit)',
      'Artwork mockup (in Arabic & English, with Arabic occupying at least 50% of signage text)',
      'Itemized price list showing original prices vs. discounted prices (for Discount Sale permits)',
      'Mall management NOC and floor layout plan (for Kiosk / Pop-up Stand permits)',
    ],
    eligibilityAr: [
      'رخصة تجارية سارية المفعول صادرة من اقتصادية دبي',
      'تصميم الإعلان أو اللوحة باللغتين العربية والإنجليزية (بحيث لا تقل مساحة اللغة العربية عن 50%)',
      'قائمة أسعار السلع موضحاً بها السعر قبل وبعد الخصم (لتصاريح التنزيلات)',
      'شهادة عدم ممانعة من إدارة المركز التجاري ومخطط الموقع (لتصاريح الأكشاك والمنصات المؤقتة)',
    ],
    galleryImages: DET_GALLERY,
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'Artwork & Bilingual Compliance Audit',
        titleAr: 'التدقيق اللغوي والفني للتصميم وقوائم الأسعار',
        descEn: 'Verifying that promotional graphics meet DET Arabic language rules (50% Arabic ratio) and consumer protection standards.',
        descAr: 'فحص التصاميم الإعلانية للتأكد من استيفاء نسبة اللغة العربية (50%) ومطابقة قوائم الخصومات لمعايير حماية المستهلك.',
        durationEn: '30 Mins',
        durationAr: '30 دقيقة',
      },
      {
        stepNumber: 2,
        titleEn: 'Mu\'lin / DET Portal Submission',
        titleAr: 'إدراج الطلب عبر منصة مُعلن / اقتصادية دبي',
        descEn: 'Uploading campaign dates, branch locations, and promotional mechanics for instant DET review.',
        descAr: 'رفع بيانات الحملة وفترة العرض والفروع المشمولة لإصدار الموافقة الإلكترونية.',
        durationEn: '1 - 2 Hours',
        durationAr: '1 - 2 ساعة',
      },
      {
        stepNumber: 3,
        titleEn: 'Permit Fee Settlement & QR Code Issuance',
        titleAr: 'سداد الرسوم وإصدار التصريح المعتمد برمز QR',
        descEn: 'Paying the official DET permit voucher and receiving the printable QR-coded permit to display at your storefront.',
        descAr: 'سداد إذن الدفع الحكومي واستلام التصريح الرسمي المزود برمز الاستجابة السريعة (QR) لتعليقه في المحل.',
        durationEn: 'Same Day',
        durationAr: 'في نفس اليوم',
      },
    ],
    faqs: [
      {
        questionEn: 'Do I need a DET permit to post a "50% Off Sale" on my store’s Instagram page or shop window?',
        questionAr: 'هل أحتاج لتصريح من اقتصادية دبي للإعلان عن "خصم 50%" على واجهة المحل أو إنستغرام؟',
        answerEn: 'Yes, mandatory. Under DET Consumer Protection laws, any public announcement of price reductions, clearance sales, or promotional bundles in Dubai retail outlets or their official social media accounts requires a valid DET Promotional/Discount Permit displaying the official QR code.',
        answerAr: 'نعم، إلزامي تماماً. بموجب قوانين حماية المستهلك في دبي، يتطلب أي إعلان عن تخفيضات أو تصفيات أو عروض ترويجية على واجهات المحلات أو حساباتها الرسمية استخراج تصريح ترويجي مسبق من اقتصادية دبي وإبراز رمز QR الرسمي للتصريح.',
      },
    ],
    reviews: [
      {
        name: 'Rania Al-Khatib',
        roleEn: 'Retail Brand Manager',
        roleAr: 'مديرة العلامة التجارية للتجزئة',
        companyEn: 'Luxe Moda Apparel LLC',
        companyAr: 'لوكس مودا للأزياء ذ.م.م',
        rating: 5,
        date: 'October 2026',
        commentEn: 'KBC gets all our seasonal sale permits and mall kiosk approvals done within hours. Their team always checks our Arabic artwork so it never gets rejected.',
        commentAr: 'ينجز مركز الكرامة للأعمال كافة تصاريح التنزيلات الموسمية وتصاريح الأكشاك في المولات خلال ساعات، مع مراجعة دقيقة للتصاميم العربية لضمان القبول من المرة الأولى.',
      },
    ],
    targetKeywords: {
      shortTail: ['det permits dubai', 'mulin permit dubai', 'promotional permit ded', 'sale permit dubai', 'kiosk permit dubai'],
      longTail: ['how to get discount sale permit in dubai ded', 'mulin advertising permit dubai fees', 'signboard permit dubai economy and tourism', '24 hours operating permit dubai restaurant'],
    },
  },

  // =========================================================================
  // 10. LICENSE CANCELLATION, LIQUIDATION & FINE SETTLEMENT
  // =========================================================================
  'det-license-cancellation-liquidation': {
    detailedOverviewEn: `When winding down a business in Dubai, simply letting your trade license expire is a costly mistake: an uncancelled DET license continues to accrue annual license renewal fees, AED 200 monthly late penalties, Dubai Chamber dues, MoHRE establishment fines, and Federal Tax Authority (FTA) corporate tax filing penalties. To permanently extinguish all legal and financial liabilities of shareholders and managers, a formal **DET Trade License Cancellation (إلغاء الرخصة التجارية)** must be completed.

At Karama Business Center (KBC), we manage both tracks of official company deregistration:
1. **Single-Stage Cancellation (Sole Establishments & E-Trader)**: Immediate electronic cancellation after clearing visas, MoHRE company file, DEWA, and Ejari.
2. **Two-Stage Company Liquidation (LLCs & Civil Companies)**: Drafting the notarized Partners' Liquidation Resolution, appointing a licensed UAE Auditor/Liquidator, publishing the mandatory 45-day liquidation notice in two daily local newspapers (Arabic and English), obtaining clearances from MoHRE (Tasheel), GDRFA (Amer), Dubai Customs, DEWA, and FTA, and issuing the Final DET License Deregistration Certificate.

Because KBC houses Amer, Tasheel, Ejari, and Notary services in the same building, we cancel all employee and partner visas, close your MoHRE labor file, cancel your GDRFA establishment card, and finalize your DET license liquidation under one roof.`,
    detailedOverviewAr: `عند اتخاذ قرار إغلاق النشاط التجاري في دبي، فإن ترك الرخصة التجارية تنتهي دون إلغاء رسمي يُعد خطأً مكلفاً للغاية؛ إذ تستمر الرخصة غير الملغاة في مراكمة رسوم التجديد السنوية، غرامات التأخير الشهرية، رسوم الغرفة، وغرامات ملف العمل والضرائب. ولإبراء ذمة الملاك والشركاء والمديرين بشكل نهائي وقانوني، يجب إتمام إجراءات **إلغاء الرخصة التجارية وتصفية الشركة** رسمياً لدى دائرة الاقتصاد والسياحة.

في مركز الكرامة للأعمال (KBC)، نتولى إدارة مساري الإلغاء القانوني بالكامل:
1. **الإلغاء الفوري (للمؤسسات الفردية ورخص تاجر إلكتروني)**: إلغاء الرخصة في مرحلة واحدة فور إلغاء الإقامات وإغلاق ملف وزارة العمل وإيجاري.
2. **تصفية الشركات على مرحلتين (للشركات ذات المسؤولية المحدودة LLC والأعمال المدنية)**: صياغة وتوثيق قرار الشركاء بالتصفية وتعيين مصفٍ قانوني معتمد، نشر إعلان التصفية الإلزامي في صحيفتين محليتين باللغتين العربية والإنجليزية، استخراج براءات الذمة من وزارة الموارد البشرية (تسهيل)، إقامة دبي (آمر)، جمارك دبي، وهيئة كهرباء ومياه دبي، وصولاً إلى إصدار شهادة شطب وإلغاء الرخصة النهائية.

وبفضل تواجد أقسام آمر وتسهيل وإيجاري والكاتب العدل في مقرنا بالكرامة، نُنهي إلغاء جميع التأشيرات وبطاقات المنشأة والرخصة التجارية في مكان واحد دون عناء.`,
    legalFrameworkEn: `UAE Federal Decree-Law No. 32 of 2021 on Commercial Companies (Articles 306–331 on Company Dissolution and Liquidation) and DET Commercial Deregistration Directives.`,
    legalFrameworkAr: `المرسوم بقانون اتحادي رقم (32) لسنة 2021 بشأن الشركات التجارية (المواد 306 إلى 331 المنظمة لحل وتصفية الشركات) ولوائح شطب السجل التجاري باقتصادية دبي.`,
    eligibilityEn: [
      'Cancellation of all active employee work permits and residency visas under the company',
      'MoHRE (Tasheel) Ministry of Human Resources clearance certificate confirming zero active staff or labor disputes',
      'GDRFA (Amer) Immigration Establishment Card closure clearance',
      'Notarized Liquidation Resolution & Liquidator Acceptance Letter (required for LLC estructuras)',
    ],
    eligibilityAr: [
      'إلغاء كافة تصاريح العمل وإقامات الموظفين والشركاء المسجلين على الرخصة',
      'شهادة براءة ذمة وإغلاق ملف المنشأة من وزارة الموارد البشرية والتوطين (تسهيل)',
      'إلغاء بطاقة المنشأة لدى الإدارة العامة للإقامة وشؤون الأجانب بدبي (آمر)',
      'قرار الشركاء الموثق بالتصفية وخطاب قبول المصفي القانوني (للشركات ذات المسؤولية المحدودة)',
    ],
    galleryImages: DET_GALLERY,
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'Visa Cancellation & MoHRE / GDRFA File Closure',
        titleAr: 'إلغاء الإقامات وإغلاق ملف تسهيل وآمر',
        descEn: 'Cancelling all sponsored visas and obtaining official labor and immigration establishment clearances at our Karama desks.',
        descAr: 'إلغاء جميع التأشيرات واستخراج شهادة خلو المنشأة من العمالة وإلغاء بطاقة منشأة الإقامة في مركزنا.',
        durationEn: '1 - 2 Days',
        durationAr: '1 - 2 يوم',
      },
      {
        stepNumber: 2,
        titleEn: 'Stage 1 Liquidation & Newspaper Publication (For LLCs)',
        titleAr: 'المرحلة الأولى للتصفية والنشر في الصحف (لشركات LLC)',
        descEn: 'Notarizing the liquidation resolution via UAE Pass, registering the liquidator, and publishing the official Arabic/English newspaper notice.',
        descAr: 'توثيق قرار التصفية إلكترونياً وتعيين المصفي القانوني ونشر الإعلان الرسمي في الصحف المحلية.',
        durationEn: 'Same Day (Stage 1)',
        durationAr: 'نفس اليوم (المرحلة 1)',
      },
      {
        stepNumber: 3,
        titleEn: 'Final Audit Report & DET Deregistration Certificate',
        titleAr: 'تقرير التصفية النهائي وإصدار شهادة إلغاء الرخصة',
        descEn: 'Submitting final clearances and liquidator report, settling the DET cancellation voucher, and issuing the Final License Cancellation Certificate.',
        descAr: 'تقديم التقرير النهائي وبراءات الذمة وسداد رسوم الشطب واستلام شهادة إلغاء الرخصة التجارية الرسمية.',
        durationEn: 'Immediate upon clearance',
        durationAr: 'فوري بعد استيفاء المدة القانونية',
      },
    ],
    faqs: [
      {
        questionEn: 'What is the difference between cancelling a Sole Establishment vs. an LLC in Dubai?',
        questionAr: 'ما الفرق بين إلغاء مؤسسة فردية وإلغاء شركة ذات مسؤولية محدودة (LLC) في دبي؟',
        answerEn: 'A Sole Establishment or E-Trader license can be cancelled in a single stage within 24–48 hours once visas and labor files are cleared. An LLC has limited liability protection, so UAE Commercial Companies Law requires a formal two-stage liquidation process involving a licensed auditor/liquidator and a mandatory statutory notice period in local newspapers to notify any potential creditors.',
        answerAr: 'تُلغى المؤسسة الفردية أو رخصة تاجر إلكتروني في مرحلة واحدة خلال 24 إلى 48 ساعة فور إغلاق ملف العمل والإقامات. أما الشركة ذات المسؤولية المحدودة (LLC) فتتطلب قانوناً التصفية على مرحلتين عبر تعيين مدقق حسابات (مصفٍ قانوني) ونشر إعلان في الصحف المحلية لإخطار الدائنين المحتملين قبل الشطب النهائي.',
      },
      {
        questionEn: 'Can I freeze my DET Trade License instead of cancelling it?',
        questionAr: 'هل يمكنني تجميد الرخصة التجارية مؤقتاً بدلاً من إلغائها نهائياً؟',
        answerEn: 'Yes! DET allows companies to temporarily freeze (suspend) their trade license for up to 3 years by cancelling active visas and paying a modest annual freezing fee, protecting your trade name and corporate history without paying full annual renewal and Ejari fees.',
        answerAr: 'نعم! تتيح اقتصادية دبي خدمة "تجميد الرخصة التجارية" مؤقتاً لمدة تصل إلى 3 سنوات بعد إلغاء التأشيرات المسجلة عليها، مما يحفظ لك اسمك التجاري وتاريخ شركتك دون الحاجة لدفع رسوم التجديد السنوية الكاملة أو إيجار مكتب.',
      },
    ],
    reviews: [
      {
        name: 'David Thorne',
        roleEn: 'Former Managing Partner',
        roleAr: 'شريك إداري سابق',
        companyEn: 'Thorne & Associates Trading LLC',
        companyAr: 'ثورن وشركاه للتجارة ذ.م.م',
        rating: 5,
        date: 'September 2026',
        commentEn: 'Handled our complete LLC liquidation, auditor report, newspaper ads, Tasheel closure, and final DET cancellation certificate with total professionalism.',
        commentAr: 'أداروا عملية تصفية شركتنا بالكامل شاملاً تقرير المصفي القانوني وإعلانات الصحف وإغلاق ملف تسهيل وإصدار شهادة الإلغاء النهائية باحترافية تامة.',
      },
    ],
    targetKeywords: {
      shortTail: ['trade license cancellation dubai', 'company liquidation dubai', 'cancel ded license', 'freeze trade license dubai', 'det fine settlement'],
      longTail: ['how to cancel llc trade license in dubai cost', 'sole establishment license cancellation procedure dubai', 'company liquidation auditor report dubai ded', 'how to freeze trade license in dubai for 3 years'],
    },
  },
};
