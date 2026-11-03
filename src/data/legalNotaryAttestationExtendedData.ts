import { DepartmentRichDetails, ServiceRichDetails, COMMON_GALLERY } from './extendedDataCommons';
import {
  businessHubImg as heroCenterImage,
  vipMajlisLoungeImg as vipMajlisImage,
  fastTrackConcourseImg as smartDeskImage,
  mobileDoorstepUnitImg as mobileVanImage,
} from './centerOriginalPhotos';

export const LEGAL_DEPARTMENT_RICH_MAP: Record<string, DepartmentRichDetails> = {
  attestation: {
    heroImage: heroCenterImage,
    aboutStoryEn:
      'Atlas Attestation at Karama Business Center (KBC) is Dubai’s authoritative diplomatic legalization and Ministry of Foreign Affairs (MOFA) liaison desk. Operating in direct coordination with UAE MOFAIC, the UAE Ministry of Justice (MOJ), the Ministry of Education (MoE), and 119+ foreign embassies and consulates worldwide, we manage the entire end-to-end authentication chain for personal vital records, university degrees, and corporate commercial instruments. With transparent official tariffs—AED 200 for personal MOFA stamps, AED 1,200 for commercial MOFA ratifications, AED 110 for Ministry of Justice attestations, and AED 38 per page for sworn legal translation—plus complimentary insured doorstep collection and delivery across Dubai, Atlas Attestation ensures 100% legal acceptance across all UAE ministries, courts, and banks.',
    aboutStoryAr:
      'يمثل قسم "أطلس لتصديق المستندات" (Atlas Attestation) في مركز الكرامة للأعمال (KBC) الوجهة المعتمدة الأولى في دبي للتصديقات الدبلوماسية وتوثيقات وزارة الخارجية (MOFA). ومن خلال الربط المباشر مع وزارة الخارجية الإماراتية، ووزارة العدل، ووزارة التربية والتعليم، وأكثر من 119 سفارة وقنصلية حول العالم، نتولى سلسلة التصديق القانونية المتكاملة للوثائق الشخصية والشهادات الجامعية والمستندات التجارية. وبفضل شفافية الرسوم الرسمية المعتمدة (200 درهم لتصديق الخارجية الشخصي، 1,200 درهم للتجاري، 110 دراهم لوزارة العدل، و38 درهماً للصفحة للترجمة القانونية المحلفة) مع خدمة الاستلام والتوصيل المجاني المؤمن في كافة أنحاء دبي، نضمن قبول مستنداتكم بنسبة 100% لدى كافة الوزارات والمحاكم والبنوك.',
    mandateEn:
      'Authorized end-to-end coordination of UAE Ministry of Foreign Affairs (MOFA) attestations, Ministry of Justice ratifications, global Hague Apostille certifications, 119+ foreign embassy legalizations, Ministry of Education degree equivalencies, and Dubai Police clearance certificates.',
    mandateAr:
      'التنسيق الرسمي المتكامل لتصديقات وزارة الخارجية الإماراتية، واعتمادات وزارة العدل، وشهادات الأبوستيل الدولية، وتصديقات 119 سفارة وقنصلية، ومعادلة الشهادات الجامعية لدى وزارة التربية والتعليم، وشهادات بحث الحالة الجنائية.',
    galleryImages: COMMON_GALLERY,
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'Complimentary Doorstep Pickup & Seal Audit',
        titleAr: 'الاستلام المجاني وتدقيق تسلسل الأختام',
        descEn: 'Our insured diplomatic courier collects your original certificates from your home or office in Dubai and verifies all prerequisite origin-country stamps.',
        descAr: 'يقوم مندوبنا المؤمن باستلام أصول الشهادات من منزلك أو مكتبك بدبي مجاناً وفحص تسلسل أختام بلد المنشأ.',
        durationEn: 'Same Day Pickup',
        durationAr: 'استلام في نفس اليوم',
      },
      {
        stepNumber: 2,
        titleEn: 'Origin Country / Embassy & Apostille Clearance',
        titleAr: 'تصديق السفارات والأبوستيل الدولي',
        descEn: 'Direct diplomatic pouch dispatch to issuing country Foreign Ministries and UAE Embassies abroad or Consulate desks in Dubai.',
        descAr: 'إرسال عبر الحقيبة الدبلوماسية لوزارات خارجية بلد الإصدار وسفارات دولة الإمارات بالخارج أو القنصليات بدبي.',
        durationEn: '24h - 5 Days',
        durationAr: '24 ساعة - 5 أيام',
      },
      {
        stepNumber: 3,
        titleEn: 'UAE MOFA & Ministry of Justice Final Stamp',
        titleAr: 'التصديق النهائي من الخارجية ووزارة العدل',
        descEn: 'Affixing the official UAE Ministry of Foreign Affairs QR-verified digital seal and sworn Arabic legal translation if required.',
        descAr: 'وضع ختم وزارة الخارجية الإماراتية المزود برمز QR والترجمة القانونية المحلفة المعتمدة من وزارة العدل عند الحاجة.',
        durationEn: '24 Hours',
        durationAr: '24 ساعة',
      },
    ],
    whyChooseBulletPointsEn: [
      'Official UAE MOFA Tariffs: Personal Documents AED 200 | Commercial Documents AED 1,200 | MOJ AED 110',
      'Direct diplomatic legalization network covering 119+ countries (UK, USA, India, Canada, EU, Philippines, Pakistan, Egypt)',
      'In-house Ministry of Justice sworn legal translation at the official AED 38/page rate',
      'End-to-end UAE Ministry of Education (MoE) degree equivalency and DataFlow verification handling',
      '100% Free insured doorstep document collection and return delivery anywhere in Dubai',
      'Zero-loss tamper-evident diplomatic pouches with live SMS tracking tokens',
    ],
    whyChooseBulletPointsAr: [
      'الرسوم الرسمية لوزارة الخارجية: 200 درهم للمستند الشخصي | 1,200 درهم للمستند التجاري | 110 دراهم لوزارة العدل',
      'شبكة تصديق دبلوماسية مباشرة تغطي 119+ دولة (بريطانيا، أمريكا، الهند، كندا، أوروبا، الفلبين، باكستان، مصر)',
      'مكتب ترجمة قانونية محلفة معتمد من وزارة العدل داخل المركز بسعر 38 درهماً للصفحة',
      'إنجاز متكامل لمعادلة الشهادات الجامعية لدى وزارة التربية والتعليم وتوثيق داتا فلو (DataFlow)',
      'خدمة استلام وتوصيل مجانية ومؤمنة بنسبة 100% من وإلى باب منزلك أو مكتبك في دبي',
      'حقائب نقل أمنية محكمة الإغلاق مع رمز تتبع فوري عبر الرسائل النصية',
    ],
    faqs: [
      {
        questionEn: 'Why must foreign certificates be attested by both the UAE Embassy abroad and MOFA inside Dubai?',
        questionAr: 'لماذا يجب تصديق الشهادات الأجنبية من سفارة الإمارات بالخارج ثم وزارة الخارجية بدبي؟',
        answerEn: 'Under UAE federal protocol, MOFA in Dubai only authenticates the seal of its own diplomatic mission (UAE Embassy or Consulate) in the country where the document was issued. Atlas Attestation handles both stages seamlessly without you needing to travel.',
        answerAr: 'وفق البروتوكول الاتحادي، تصادق وزارة الخارجية داخل دبي فقط على ختم بعثتها الدبلوماسية (سفارة أو قنصلية الإمارات) في الدولة المصدرة للمستند. ويتولى مكتب أطلس إنجاز المرحلتين بالكامل دون حاجتك للسفر.',
      },
    ],
    reviews: [
      {
        name: 'Dr. Jonathan Miles',
        roleEn: 'Consultant Cardiologist',
        roleAr: 'استشاري أمراض القلب',
        companyEn: 'Dubai Healthcare City',
        companyAr: 'مدينة دبي الطبية',
        rating: 5,
        date: 'October 2026',
        commentEn: 'Atlas Attestation handled my UK medical degree FCDO apostille, UAE London Embassy stamp, MOFA attestation, and Ministry of Education equivalency in record time with free courier pickup.',
        commentAr: 'أنجز فريق أطلس تصديق شهادتي الطبية البريطانية من الخارجية والسفارة بلندن ووزارة الخارجية والتربية والتعليم بدبي في وقت قياسي مع استلام وتوصيل مجاني.',
      },
    ],
    contactDeskEn: 'Atlas Attestation & MOFA Desk: +971 4 342 6666 · Karama Business Center (Next to Karama Post Office)',
    contactDeskAr: 'مكتب أطلس لتصديق المستندات والخارجية: 6666 342 4 971+ · مركز الكرامة للأعمال (بجوار بريد الكرامة)',
  },

  notary: {
    heroImage: vipMajlisImage,
    aboutStoryEn:
      'The Notary Public & Dubai Courts Liaison Department at Karama Business Center (KBC) provides bilingual legal drafting, remote video-call e-notarization, judicial case registration, and Non-Muslim Family Will execution under the direct framework of Dubai Courts and the UAE Ministry of Justice. Whether you need an urgent General or Special Power of Attorney (POA) for property conveyancing, a corporate Memorandum of Association (MOA) or share transfer addendum, a statutory declaration, or representation for a Labour, Civil, or Rental Dispute claim, our licensed legal consultants draft watertight Arabic-English instruments that pass judicial scrutiny on the first submission.',
    aboutStoryAr:
      'يقدم قسم الكاتب العدل ومحاكم دبي في مركز الكرامة للأعمال (KBC) خدمات الصياغة القانونية ثنائية اللغة، والتوثيق العدلي الإلكتروني عن بُعد عبر الاتصال المرئي، وقيد الدعاوى القضائية، وتسجيل وصايا غير المسلمين وفق الأنظمة المعتمدة لمحاكم دبي ووزارة العدل. سواء كنت بحاجة إلى وكالة عامة أو خاصة عاجلة لبيع العقارات أو المركبات، أو توثيق عقد تأسيس شركة أو ملحق تنازل عن حصص، أو إقرار عدلي مشفوع باليمين، أو تسجيل دعوى عمالية أو مدنية أو إيجارية، يتولى مستشارونا القانونيون إعداد عقود ومذكرات محكمة باللغتين العربية والإنجليزية تُعتمد من أول تقديم.',
    mandateEn:
      'Authorized legal drafting and coordination for Dubai Courts E-Notary Powers of Attorney (POA), Corporate MOAs and Addendums, Legal Declarations, Labour/Civil/Commercial Court Case filings, and Non-Muslim Family Wills.',
    mandateAr:
      'الصياغة القانونية المعتمدة والتنسيق المباشر لوكالات الكاتب العدل الإلكتروني بمحاكم دبي، وعقود التأسيس وملاحقها، والإقرارات العدلية، وقيد الدعاوى العمالية والمدنية والتجارية، وتوثيق وصايا غير المسلمين.',
    galleryImages: COMMON_GALLERY,
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'Bilingual Legal Drafting & Clause Verification',
        titleAr: 'الصياغة القانونية ثنائية اللغة ومراجعة البنود',
        descEn: 'Our legal consultants draft your POA, MOA, Declaration, Will, or Court Memo in side-by-side legal Arabic and English.',
        descAr: 'يقوم مستشارونا القانونيون بصياغة الوكالة أو العقد أو الإقرار أو الوصية أو لائحة الدعوى بالعربية والإنجليزية بدقة قانونية تامة.',
        durationEn: '1 - 2 Hours',
        durationAr: '1 - 2 ساعة',
      },
      {
        stepNumber: 2,
        titleEn: 'Dubai Courts Portal Lodgement & UAE Pass Verification',
        titleAr: 'الرفع لبوابة محاكم دبي والتحقق عبر الهوية الرقمية',
        descEn: 'Uploading the instrument to the Dubai Courts Smart Notary or E-Litigation portal and verifying parties via UAE Pass.',
        descAr: 'رفع المعاملة عبر نظام الكاتب العدل الذكي أو نظام التقاضي الإلكتروني بمحاكم دبي وتوثيق الأطراف عبر UAE Pass.',
        durationEn: '1 - 3 Hours',
        durationAr: '1 - 3 ساعات',
      },
      {
        stepNumber: 3,
        titleEn: 'Video-Notary Attestation & QR Deed Issuance',
        titleAr: 'اعتماد الكاتب العدل المرئي وإصدار السند الموثق',
        descEn: 'Completing the brief video verification with the Notary Public officer and receiving your QR-stamped official PDF deed.',
        descAr: 'إتمام المقابلة المرئية السريعة مع الكاتب العدل واستلام السند الرسمي الموثق والمزود برمز الاستجابة السريعة QR.',
        durationEn: 'Same Day',
        durationAr: 'في نفس اليوم',
      },
    ],
    whyChooseBulletPointsEn: [
      'Same-day remote video e-notarization via Dubai Courts without standing in judicial queues',
      'Bilingual Arabic-English drafting accepted by Dubai Land Department (DLD), RTA, DET, and UAE banks',
      'Complete corporate notarization for LLC MOAs, share transfers, board resolutions, and liquidations',
      'Expert registration of Dubai Courts Labour, Civil, Commercial, and Rental Dispute Center (RDC) lawsuits',
      'Full asset protection through Dubai Courts Non-Muslim Wills and minor guardianship registration',
      'Integrated in-house Ministry of Justice sworn legal translation (AED 38/page)',
    ],
    whyChooseBulletPointsAr: [
      'توثيق إلكتروني فوري في نفس اليوم عبر الاتصال المرئي مع كاتب عدل محاكم دبي دون طوابير انتظار',
      'صياغة قانونية معتمدة بالعربية والإنجليزية مقبولة لدى دائرة الأراضي والأملاك، وهيئة الطرق، واقتصادية دبي، والبنوك',
      'توثيق شامل لعقود تأسيس الشركات، وملاحق بيع الحصص، وقرارات الشركاء، وتصفية الشركات',
      'قيد احترافي للدعاوى العمالية والمدنية والتجارية ومنازعات الإيجارات (RDC) بمحاكم دبي',
      'حماية كاملة للأصول والأسرة عبر تسجيل وصايا غير المسلمين وتعيين الأوصياء على القصر',
      'ترجمة قانونية محلفة ومعتمدة من وزارة العدل داخل المركز (38 درهماً للصفحة)',
    ],
    faqs: [
      {
        questionEn: 'Can I notarize a Power of Attorney at Karama Business Center if the principal is currently outside the UAE?',
        questionAr: 'هل يمكن توثيق وكالة قانونية إذا كان الموكل متواجداً خارج دولة الإمارات؟',
        answerEn: 'Yes! As long as the principal has an active verified UAE Pass account or valid passport for Dubai Courts remote video-conferencing, we can draft and notarize the POA 100% online from anywhere in the world.',
        answerAr: 'نعم بالتأكيد! طالما يمتلك الموكل حساب هوية رقمية (UAE Pass) مفعل أو جواز سفر ساري لإجراء المقابلة المرئية عن بُعد مع كاتب عدل محاكم دبي، يمكننا صياغة وتوثيق الوكالة إلكترونياً من أي مكان في العالم.',
      },
    ],
    reviews: [
      {
        name: 'Elena Rostova',
        roleEn: 'Real Estate Portfolio Investor',
        roleAr: 'مستثمرة عقارية',
        companyEn: 'Rostova Capital Properties',
        companyAr: 'روستوفا العقارية',
        rating: 5,
        date: 'October 2026',
        commentEn: 'Drafted and notarized my Special Property POA for Dubai Land Department conveyancing in under 3 hours at Karama Business Center. The bilingual text passed DLD Trustee review without a single edit.',
        commentAr: 'تمت صياغة وتوثيق وكالة بيع عقار خاصة لدائرة الأراضي والأملاك في أقل من 3 ساعات بمركز الكرامة للأعمال. قُبلت الوكالة لدى أمين التسجيل العقاري فوراً دون أي ملاحظة.',
      },
    ],
    contactDeskEn: 'Notary & Dubai Courts Desk: +971 4 342 6666 · Karama Business Center (Next to Karama Post Office)',
    contactDeskAr: 'مكتب الكاتب العدل ومحاكم دبي: 6666 342 4 971+ · مركز الكرامة للأعمال (بجوار بريد الكرامة)',
  },

  typing: {
    heroImage: smartDeskImage,
    aboutStoryEn:
      'The Certified Legal Translation & Professional Government Typing Department at Karama Business Center (KBC) is the backbone of ministerial documentation in Dubai. Staffed by translators licensed by the UAE Ministry of Justice (MOJ) across 30+ global languages and veteran Arabic/English legal typists, we produce court-ready translations (at the official AED 38 per page tariff), official Arabic petitions and humanitarian mercy appeals, corporate board resolutions, NOC letters, Golden Visa nomination dossiers, and embassy attestation dockets with 100% formatting compliance.',
    aboutStoryAr:
      'يُعد قسم الترجمة القانونية المعتمدة والطباعة الحكومية المتخصصة في مركز الكرامة للأعمال (KBC) الركيزة الأساسية لتجهيز الوثائق الرسمية في دبي. ويضم القسم نخبة من المترجمين القانونيين المحلفين المرخصين من وزارة العدل الإماراتية لأكثر من 30 لغة عالمية، إلى جانب خطاطين وكتّاب عرائض ذوي خبرة طويلة في صياغة المذكرات والالتماسات الحكومية باللغة العربية الفصحى، وقرارات مجالس الإدارة، وخطابات عدم الممانعة، وملفات ترشيح الإقامة الذهبية، واستمارات التصديق القنصلي بتعرفة رسمية تبدأ من 38 درهماً لصفحة الترجمة القانونية.',
    mandateEn:
      'Ministry of Justice (MOJ) sworn legal translation across 30+ languages, official Arabic/English government NOC and petition drafting, corporate PRO resolution typing, and embassy attestation docket preparation.',
    mandateAr:
      'الترجمة القانونية المحلفة المعتمدة من وزارة العدل لأكثر من 30 لغة، صياغة الخطابات الرسمية والتماسات الإعفاء بالعربية والإنجليزية، طباعة القرارات والعقود المؤسسية، وتجهيز ملفات التصديقات والسفارات.',
    galleryImages: COMMON_GALLERY,
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'Source Document Intake & Terminology Match',
        titleAr: 'استلام المستند ومطابقة المصطلحات والأسماء',
        descEn: 'Verifying exact passport name spellings, legal terminology, and target ministry formatting rules before drafting or translation.',
        descAr: 'مطابقة تهجئة الأسماء مع جوازات السفر وتحديد المصطلحات القانونية واشتراطات الجهة الحكومية المستقبلة.',
        durationEn: '15 Mins',
        durationAr: '15 دقيقة',
      },
      {
        stepNumber: 2,
        titleEn: 'Sworn Translation / Bilingual Legal Typing',
        titleAr: 'الترجمة المحلفة أو الصياغة والطباعة القانونية',
        descEn: 'Execution by a licensed MOJ legal translator or senior government typist with dual-stage proofreading.',
        descAr: 'إنجاز الترجمة بواسطة مترجم قانوني مرخص من وزارة العدل أو كاتب حكومي خبير مع تدقيق لغوي وقانوني مزدوج.',
        durationEn: '30 Mins - 4 Hours',
        durationAr: '30 دقيقة - 4 ساعات',
      },
      {
        stepNumber: 3,
        titleEn: 'Official MOJ Seal Stamping & Digital Delivery',
        titleAr: 'الختم الرسمي المعتمد والتسليم الورقي والرقمي',
        descEn: 'Affixing the official Ministry of Justice translator stamp and hologram or submitting directly into the ministerial e-portal.',
        descAr: 'وضع ختم المترجم القانوني المعتمد من وزارة العدل أو رفع الطلب إلكترونياً وتسليم النسخة الورقية والرقمية فوراً.',
        durationEn: 'Instant Handover',
        durationAr: 'تسليم فوري',
      },
    ],
    whyChooseBulletPointsEn: [
      'Official UAE Ministry of Justice (MOJ) Sworn Legal Translation at AED 38 per page',
      '30+ supported languages: Arabic, English, Russian, French, German, Chinese, Spanish, Italian, Hindi, Urdu, Farsi, Tagalog',
      'Instant 30-minute drafting of Arabic/English NOCs, humanitarian fine appeals, and ministerial petitions',
      '100% accepted by Dubai Courts, Notary Public, MOFA, GDRFA Amer, DET, DLD, and all foreign embassies',
      'Bespoke corporate resolution and contract drafting for bank account opening and Golden Visa nominations',
      'Digital PDF + physical stamped hardcopies delivered on the spot or via courier',
    ],
    whyChooseBulletPointsAr: [
      'ترجمة قانونية محلفة ومعتمدة من وزارة العدل بسعر رسمي موحد 38 درهماً للصفحة',
      'أكثر من 30 لغة معتمدة: العربية، الإنجليزية، الروسية، الفرنسية، الألمانية، الصينية، الإسبانية، الهندية، الأردية، الفارسية',
      'صياغة وطباعة فورية خلال 30 دقيقة لخطابات عدم الممانعة والتماسات الاسترحام وتخفيض الغرامات',
      'مقبولة بنسبة 100% لدى محاكم دبي، الكاتب العدل، وزارة الخارجية، إقامة دبي، اقتصادية دبي، وكافة السفارات',
      'إعداد احترافي لقرارات الشركاء والعقود المؤسسية لفتح الحسابات البنكية وملفات الإقامة الذهبية',
      'تسليم فوري للنسخ الأصلية المختومة مع نسخة PDF عالية الدقة عبر الواتساب والبريد الإلكتروني',
    ],
    faqs: [
      {
        questionEn: 'Why do Dubai Courts, Notary Public, and Ministries reject normal translation office stamps?',
        questionAr: 'لماذا ترفض محاكم دبي والكاتب العدل والوزارات الترجمات العادية غير المحلفة؟',
        answerEn: 'Under UAE Federal Law No. 6 of 2012 regulating the translation profession, all official bodies in the UAE only accept Arabic translations bearing the official seal and registration number of a Sworn Legal Translator licensed by the UAE Ministry of Justice (MOJ).',
        answerAr: 'بموجب القانون الاتحادي رقم 6 لسنة 2012 بشأن تنظيم مهنة الترجمة، لا تقبل المحاكم والكاتب العدل والوزارات في الإمارات إلا الترجمات الممهورة بختم ورقم قيد مترجم قانوني محلف ومرخص من وزارة العدل.',
      },
    ],
    reviews: [
      {
        name: 'Jean-Luc Moreau',
        roleEn: 'Managing Partner',
        roleAr: 'الشريك الإداري',
        companyEn: 'Moreau Aviation Consultancy',
        companyAr: 'مورو لاستشارات الطيران',
        rating: 5,
        date: 'September 2026',
        commentEn: 'Translated 28 pages of French corporate articles of incorporation into MOJ-certified legal Arabic in just 4 hours at AED 38 per page. Accepted immediately by the Notary Public.',
        commentAr: 'ترجموا 28 صفحة من النظام الأساسي لشركتنا بالفرنسية إلى العربية القانونية المعتمدة من وزارة العدل خلال 4 ساعات فقط بسعر 38 درهماً للصفحة، وقبلها الكاتب العدل فوراً.',
      },
    ],
    contactDeskEn: 'Legal Translation & Typing Desk: +971 4 342 6666 · Karama Business Center (Next to Karama Post Office)',
    contactDeskAr: 'مكتب الترجمة القانونية والطباعة الحكومية: 6666 342 4 971+ · مركز الكرامة للأعمال (بجوار بريد الكرامة)',
  },
};

export const LEGAL_SERVICES_RICH_MAP: Record<string, ServiceRichDetails> = {
  // ============================================================================
  // ATLAS ATTESTATION (6 Dedicated Individual Services)
  // ============================================================================
  'atlas-mofa-attestation': {
    detailedOverviewEn:
      'UAE Ministry of Foreign Affairs (MOFA) Attestation—accompanied where required by UAE Ministry of Justice (MOJ) ratification—is the mandatory final legal authentication step for any document to be recognized by UAE government departments, courts, banks, or employers. Whether you are presenting a foreign university degree for a skilled work permit or Golden Visa, a marriage or birth certificate for family residency sponsorship, or a commercial Power of Attorney and Certificate of Incorporation for DET licensing or corporate bank account opening, MOFA verifies the authenticity of the preceding UAE Embassy or local authority seal and affixes a cryptographic QR-coded digital certification stamp. At Atlas Attestation inside Karama Business Center (KBC), we process MOFA attestations at the exact official government schedule: AED 200 for Personal Certificates (degrees, birth, marriage, police clearance, medical reports), AED 1,200 for Commercial Documents (MOAs, corporate POAs, board resolutions, trade licenses, invoices), and AED 110 for Ministry of Justice translator/notary signature ratifications, with complimentary insured doorstep pickup and return across Dubai.',
    detailedOverviewAr:
      'يُعد تصديق وزارة الخارجية الإماراتية (MOFA)—مقترناً عند الاقتضاء بتصديق وزارة العدل (MOJ)—الخطوة النهائية الإلزامية لمنح أي مستند الحجية القانونية الكاملة أمام الدوائر الحكومية والمحاكم والبنوك وجهات العمل في دولة الإمارات. سواء كنت تقدم شهادة جامعية أجنبية لاستخراج تصريح عمل مهاري أو إقامة ذهبية، أو عقد زواج وشهادة ميلاد لكفالة الأسرة، أو وكالة تجارية وشهادة تأسيس شركة لفتح حساب بنكي أو رخصة في اقتصادية دبي، فإن وزارة الخارجية تتحقق من صحة ختم سفارة الإمارات أو الجهة المحلية السابقة وتضع الختم الرقمي الرسمي المزود برمز الاستجابة السريعة (QR). وفي مكتب "أطلس لتصديق المستندات" بمركز الكرامة للأعمال (KBC)، ننجز تصديقات الخارجية بالتعرفة الحكومية الرسمية الدقيقة: 200 درهم للمستندات الشخصية، و1,200 درهم للمستندات والعقود التجارية، و110 دراهم لتصديق وزارة العدل، مع خدمة استلام وتوصيل مجانية ومؤمنة لباب منزلك أو مكتبك في دبي.',
    legalFrameworkEn:
      'Regulated under UAE Federal Cabinet Resolutions governing Ministry of Foreign Affairs (MOFAIC) consular legalization tariffs and UAE Ministry of Justice authentication protocols (2026 Schedule).',
    legalFrameworkAr:
      'خاضعة لقرارات مجلس الوزراء الاتحادي المنظمة لرسوم وضوابط التصديقات القنصلية بوزارة الخارجية والتعاون الدولي وبروتوكولات التوثيق بوزارة العدل (جدول 2026).',
    eligibilityEn: [
      'Holders of foreign-issued personal or educational certificates already bearing the UAE Embassy/Consulate stamp from the country of origin',
      'Holders of UAE-issued personal, judicial, or medical documents requiring MOFA attestation for use abroad',
      'Corporations authenticating commercial powers of attorney, articles of association, board resolutions, or commercial invoices',
      'Documents requiring UAE Ministry of Justice (MOJ) ratification of a Notary Public or Sworn Translator seal prior to MOFA stamping',
    ],
    eligibilityAr: [
      'حاملو الشهادات الشخصية أو الدراسية الصادرة من الخارج والممهورة بختم سفارة أو قنصلية دولة الإمارات في بلد الإصدار',
      'حاملو المستندات الشخصية أو القضائية أو الطبية الصادرة من داخل الإمارات والمراد تصديقها من الخارجية لاستخدامها دولياً',
      'الشركات الراغبة في تصديق الوكالات التجارية، عقود التأسيس، قرارات مجالس الإدارة، أو الفواتير التجارية',
      'المستندات التي تتطلب تصديق وزارة العدل (110 دراهم) على ختم الكاتب العدل أو المترجم المحلف قبل ختم الخارجية',
    ],
    galleryImages: COMMON_GALLERY,
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'Free Courier Pickup & Prerequisite Seal Check',
        titleAr: 'الاستلام المجاني وفحص الأختام السابقة',
        descEn: 'Our courier collects your original document anywhere in Dubai and our MOFA specialists verify the preceding UAE Embassy or local ministry stamp.',
        descAr: 'يستلم مندوبنا المستند الأصلي من موقعك بدبي مجاناً، ويدقق خبراؤنا صحة ختم سفارة الإمارات أو الوزارة المحلية السابقة.',
        durationEn: '1 - 2 Hours',
        durationAr: '1 - 2 ساعة',
      },
      {
        stepNumber: 2,
        titleEn: 'MOJ Ratification & Sworn Translation (If Required)',
        titleAr: 'تصديق وزارة العدل والترجمة القانونية (عند الحاجة)',
        descEn: 'If your document requires Ministry of Justice seal authentication (AED 110) or sworn Arabic translation (AED 38/page), we complete it in-house.',
        descAr: 'في حال تطلب المستند تصديق وزارة العدل (110 دراهم) أو ترجمة قانونية محلفة (38 درهماً/صفحة)، يتم إنجازها فوراً داخل المركز.',
        durationEn: '2 - 4 Hours',
        durationAr: '2 - 4 ساعات',
      },
      {
        stepNumber: 3,
        titleEn: 'Official UAE MOFA Digital QR Stamp & Return',
        titleAr: 'وضع ختم وزارة الخارجية الرقمي والتوصيل',
        descEn: 'Submitting to the UAE Ministry of Foreign Affairs for official QR-coded attestation and delivering the original back to your doorstep.',
        descAr: 'إتمام التصديق الرسمي لدى وزارة الخارجية بختم QR الرقمي وإعادة تسليم الوثيقة الأصلية لباب منزلك أو مكتبك.',
        durationEn: '24 - 48 Hours',
        durationAr: '24 - 48 ساعة',
      },
    ],
    faqs: [
      {
        questionEn: 'What is the exact official UAE MOFA fee for personal vs. commercial documents in 2026?',
        questionAr: 'كم تبلغ الرسوم الحكومية الرسمية لتصديق وزارة الخارجية للمستندات الشخصية والتجارية في 2026؟',
        answerEn: 'The official UAE Ministry of Foreign Affairs (MOFA) government fee is AED 200 per document for personal/individual certificates (degrees, marriage, birth, PCC) and AED 1,200 per document for commercial/company records (MOA, corporate POA, board resolutions). Ministry of Justice attestation is AED 110.',
        answerAr: 'الرسم الحكومي الرسمي لوزارة الخارجية الإماراتية هو 200 درهم لكل مستند شخصي (شهادات دراسية، زواج، ميلاد، حسن سيرة)، و1,200 درهم لكل مستند تجاري للشركات (عقد تأسيس، وكالة تجارية، قرار مجلس إدارة)، بينما يبلغ رسم تصديق وزارة العدل 110 دراهم.',
      },
      {
        questionEn: 'Can MOFA in Dubai attest my foreign degree if it does not yet have the UAE Embassy stamp from my home country?',
        questionAr: 'هل تصادق وزارة الخارجية بدبي على شهادتي الأجنبية إذا لم تكن مختومة من سفارة الإمارات في بلدي؟',
        answerEn: 'No—MOFA requires the UAE Embassy stamp from the issuing country first. However, you do not need to travel! Our Global Embassy Legalization service at Atlas Attestation dispatches your degree to the country of origin, completes the Foreign Ministry and UAE Embassy stamps, and then finishes the UAE MOFA attestation in Dubai.',
        answerAr: 'لا، تشترط وزارة الخارجية وجود ختم سفارة الإمارات في بلد الإصدار أولاً. ولكن لا داعي لسفرك! فخدمة تصديق السفارات الدولية لدى "أطلس" تتولى إرسال شهادتك لبلد المنشأ لإتمام أختام الخارجية وسفارة الإمارات هناك ثم تصديقها من خارجية دبي.',
      },
    ],
    reviews: [
      {
        name: 'Vikramaditya Rao',
        roleEn: 'VP of Engineering',
        roleAr: 'نائب رئيس قسم الهندسة',
        companyEn: 'CloudScale Technologies',
        companyAr: 'كلاود سكيل للتكنولوجيا',
        rating: 5,
        date: 'October 2026',
        commentEn: 'Got my B.Tech degree and marriage certificate stamped by UAE MOFA and translated into legal Arabic in 24 hours at Karama Business Center. Official AED 200 MOFA receipts provided!',
        commentAr: 'صدقت شهادة البكالوريوس وعقد الزواج من وزارة الخارجية مع الترجمة القانونية خلال 24 ساعة في مركز الكرامة للأعمال، مع استلام إيصالات الخارجية الرسمية بقيمة 200 درهم.',
      },
    ],
    targetKeywords: {
      shortTail: [
        'mofa attestation dubai',
        'uae ministry of foreign affairs attestation',
        'ministry of justice attestation dubai',
        'mofa attestation karama',
        'commercial document attestation dubai',
      ],
      longTail: [
        'official mofa attestation fee 200 aed personal 1200 aed commercial dubai',
        'same day mofa and ministry of justice document attestation karama',
        'mofa attestation with free pickup and delivery in dubai',
        'how to attest certificate from mofa dubai for family visa and work permit',
      ],
    },
  },

  'atlas-embassy-consulate-legalization': {
    detailedOverviewEn:
      'Global Embassy & Consulate Legalization at Atlas Attestation (Karama Business Center) eliminates the need for expatriates and corporate directors to travel back to their home country when their original certificates lack home-country Ministry of Foreign Affairs or UAE Embassy stamps. Operating an insured diplomatic courier network across 119+ countries—including the United Kingdom, United States, India, Canada, Australia, Germany, France, Italy, Spain, Russia, China, Pakistan, the Philippines, Egypt, Jordan, Lebanon, and South Africa—we manage the entire international authentication chain. We also coordinate direct in-country consular attestations at foreign Consulates General located in Dubai and Embassies in Abu Dhabi, followed immediately by UAE MOFA ratification.',
    detailedOverviewAr:
      'تُغني خدمة "تصديق السفارات والقنصليات الدولية حول العالم" لدى مكتب أطلس لتصديق المستندات في مركز الكرامة للأعمال (KBC) المقيمين وأصحاب الشركات عن عناء السفر إلى بلدانهم الأصلية عند عدم وجود أختام خارجية بلد المنشأ أو سفارة دولة الإمارات على شهاداتهم الأصلية. ومن خلال شبكة شحن دبلوماسية مؤمنة تغطي أكثر من 119 دولة حول العالم—بما في ذلك بريطانيا، الولايات المتحدة، الهند، كندا، أستراليا، ألمانيا، فرنسا، إيطاليا، إسبانيا، روسيا، الصين، باكستان، الفلبين، مصر، الأردن، ولبنان—نتولى سلسلة التصديق الدولية كاملة من بلد الإصدار وحتى ختم وزارة الخارجية الإماراتية في دبي، بالإضافة إلى إنجاز التصديقات القنصلية لدى القنصليات العامة بدبي والسفارات في أبوظبي.',
    legalFrameworkEn:
      'Executed under Vienna Convention on Consular Relations protocols and bilateral diplomatic legalization treaties between the UAE and 119+ sovereign nations.',
    legalFrameworkAr:
      'تُنفذ وفق بروتوكولات اتفاقية فيينا للعلاقات القنصلية واتفاقيات التصديق الدبلوماسي الثنائية بين دولة الإمارات وأكثر من 119 دولة حول العالم.',
    eligibilityEn: [
      'Expatriate residents in Dubai holding un-attested original degrees, birth certificates, or marriage contracts issued abroad',
      'Multinational companies legalizing foreign parent-company certificates of incorporation, board resolutions, and powers of attorney',
      'UAE residents requiring Dubai Consulate or Abu Dhabi Embassy endorsement on documents destined for foreign jurisdictions',
    ],
    eligibilityAr: [
      'المقيمون في دبي الحاملون لشهادات جامعية أو شهادات ميلاد أو عقود زواج أصلية صادرة من الخارج وغير مصدقة بعد',
      'الشركات العالمية الراغبة في تصديق وثائق التأسيس وقرارات مجالس الإدارة والوكالات الصادرة من الشركة الأم بالخارج',
      'المتعاملون الراغبون في تصديق مستنداتهم من القنصليات الأجنبية المعتمدة في دبي أو السفارات في أبوظبي',
    ],
    galleryImages: COMMON_GALLERY,
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'Document Audit & Country-Specific Protocol Mapping',
        titleAr: 'تدقيق المستند وتحديد مسار التصديق الدولي',
        descEn: 'Verifying your original certificate against the exact notarization and Foreign Ministry rules of the issuing country (119+ countries supported).',
        descAr: 'فحص الشهادة الأصلية وتحديد متطلبات الكاتب العدل ووزارة الخارجية وسفارة الإمارات في بلد الإصدار.',
        durationEn: 'Day 1',
        durationAr: 'اليوم 1',
      },
      {
        stepNumber: 2,
        titleEn: 'Origin Foreign Ministry & UAE Embassy Legalization',
        titleAr: 'تصديق خارجية بلد المنشأ وسفارة الإمارات بالخارج',
        descEn: 'Dispatching via insured DHL/FedEx diplomatic priority pouch to our liaison office in the capital of origin for Foreign Ministry & UAE Embassy stamping.',
        descAr: 'إرسال المستند بالحقيبة المؤمنة لمكتبنا التمثيلي في عاصمة بلد المنشأ لإتمام أختام وزارة الخارجية وسفارة دولة الإمارات.',
        durationEn: 'Day 2 - 7',
        durationAr: 'اليوم 2 - 7',
      },
      {
        stepNumber: 3,
        titleEn: 'Return to Dubai & Final UAE MOFA Stamp',
        titleAr: 'العودة إلى دبي وختم وزارة الخارجية الإماراتية',
        descEn: 'Completing the final UAE MOFA attestation (AED 200 personal / AED 1,200 commercial) in Dubai and delivering to your door.',
        descAr: 'إتمام التصديق النهائي لدى وزارة الخارجية في دبي وتسليم الوثيقة الأصلية المصدقة بالكامل إلى عنوانك.',
        durationEn: 'Day 7 - 9',
        durationAr: 'اليوم 7 - 9',
      },
    ],
    faqs: [
      {
        questionEn: 'How long does it take to attest a UK, US, or Indian certificate from start to finish while I am in Dubai?',
        questionAr: 'كم يستغرق تصديق شهادة بريطانية أو أمريكية أو هندية بالكامل وأنا متواجد داخل دبي؟',
        answerEn: 'UK and Indian certificates typically take 5 to 8 working days end-to-end (including UK FCDO / Indian MEA, UAE Embassy in London/New Delhi, and UAE MOFA in Dubai). US certificates take 7 to 12 working days depending on the issuing state Secretary of State.',
        answerAr: 'تستغرق الشهادات البريطانية والهندية عادةً من 5 إلى 8 أيام عمل شاملة كافة الأختام في بلد المنشأ وسفارة الإمارات هناك ووزارة الخارجية بدبي، بينما تستغرق الشهادات الأمريكية من 7 إلى 12 يوم عمل حسب الولاية المصدرة.',
      },
    ],
    reviews: [
      {
        name: 'Hannah Jenkins',
        roleEn: 'HR Director',
        roleAr: 'مديرة الموارد البشرية',
        companyEn: 'Albion Education Group Dubai',
        companyAr: 'مجموعة ألبيون التعليمية دبي',
        rating: 5,
        date: 'October 2026',
        commentEn: 'We use Atlas Attestation at Karama Business Center for all our newly hired British, American, and South African teachers. Door-to-door global embassy and MOFA legalization without a single lost document.',
        commentAr: 'نعتمد على مكتب أطلس بمركز الكرامة للأعمال لتصديق شهادات جميع المعلمين الجدد من بريطانيا وأمريكا وجنوب أفريقيا. خدمة شاملة من الباب للباب بأمان تام.',
      },
    ],
    targetKeywords: {
      shortTail: [
        'uae embassy attestation dubai',
        'consulate attestation services dubai',
        'uk degree attestation dubai',
        'india certificate attestation dubai',
        'usa document attestation dubai',
      ],
      longTail: [
        'attest foreign degree from uae embassy without leaving dubai',
        '119 countries embassy and mofa attestation service karama dubai',
        'commercial document legalization from uae embassy and mofa',
        'consulate general attestation and mofa stamping service dubai',
      ],
    },
  },

  'atlas-apostille-global-certification': {
    detailedOverviewEn:
      'Hague Convention Apostille Certification is the international standard for authenticating public documents (university diplomas, birth and marriage records, police clearance certificates, powers of attorney, and corporate registries) for use across the 125+ member nations of the 1961 Hague Apostille Convention—including the United Kingdom, United States, European Union member states, Australia, New Zealand, India, Canada, Russia, China, and Saudi Arabia. Furthermore, when a Hague-apostilled document is brought into the United Arab Emirates (which requires bilateral consular legalization in addition to the Apostille), Atlas Attestation at Karama Business Center coordinates both the origin-country Apostille certificate and the subsequent UAE Embassy & UAE MOFA stamps so your document is valid both globally and inside Dubai.',
    detailedOverviewAr:
      'تُعد شهادة "الأبوستيل" (Apostille) بموجب اتفاقية لاهاي لعام 1961 المعيار الدولي الموحد لتوثيق المحررات العامة (الشهادات الجامعية، عقود الزواج والميلاد، شهادات حسن السيرة، الوكالات، والسجلات التجارية) لاستخدامها عبر أكثر من 125 دولة عضو في الاتفاقية—بما في ذلك بريطانيا، الولايات المتحدة، دول الاتحاد الأوروبي، أستراليا، الهند، كندا، روسيا، الصين، والمملكة العربية السعودية. وعند تقديم مستند حاصل على الأبوستيل لاستخدامه داخل دولة الإمارات، يتولى مكتب "أطلس لتصديق المستندات" بمركز الكرامة للأعمال استخراج ختم الأبوستيل من بلد المنشأ واستكمال تصديق سفارة الإمارات ووزارة الخارجية الإماراتية (MOFA) ليصبح المستند معتمداً دولياً وداخلياً في آن واحد.',
    legalFrameworkEn:
      'Processed in accordance with the Hague Convention of 5 October 1961 Abolishing the Requirement of Legalisation for Foreign Public Documents and UAE MOFAIC consular directives.',
    legalFrameworkAr:
      'تُنجز وفق أحكام اتفاقية لاهاي المؤرخة 5 أكتوبر 1961 بشأن إلغاء شرط التصديق على الوثائق العامة الأجنبية وضوابط وزارة الخارجية الإماراتية.',
    eligibilityEn: [
      'UAE residents migrating, studying, or opening branches in Hague Convention countries (EU, UK, USA, Canada, Australia, India, KSA)',
      'Holders of UK FCDO, US Secretary of State, Indian MEA, or European Apostille documents requiring UAE Embassy + MOFA completion for Dubai use',
      'Corporate entities requiring apostilled Certificates of Good Standing, Articles of Incorporation, and Board Resolutions',
    ],
    eligibilityAr: [
      'المقيمون في الإمارات الراغبون في الهجرة أو الدراسة أو تأسيس فروع شركات في دول اتفاقية لاهاي (أوروبا، بريطانيا، أمريكا، كندا، أستراليا، الهند، السعودية)',
      'حاملو شهادات الأبوستيل الصادرة من الخارج والراغبون في استكمال تصديق سفارة الإمارات ووزارة الخارجية لاستخدامها في دبي',
      'الشركات التي تحتاج لتوثيق شهادات التأسيس وحسن السيرة التجارية وقرارات الشركاء بختم الأبوستيل الدولي',
    ],
    galleryImages: COMMON_GALLERY,
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'Document Notarization & Eligibility Check',
        titleAr: 'فحص الوثيقة وتدقيق التوثيق الأولي',
        descEn: 'Checking whether your document can be apostilled directly as a public record or first requires solicitor/notary certification.',
        descAr: 'التحقق مما إذا كانت الوثيقة تقبل الأبوستيل مباشرة كمحرر رسمي أو تتطلب توثيق محامٍ/كاتب عدل أولاً.',
        durationEn: 'Day 1',
        durationAr: 'اليوم 1',
      },
      {
        stepNumber: 2,
        titleEn: 'Competent Authority Apostille Certificate Issuance',
        titleAr: 'إصدار شهادة الأبوستيل من السلطة المختصة',
        descEn: 'Obtaining the numbered Hague Apostille sticker/certificate (e.g., UK FCDO, US State Dept, Indian MEA, EU Ministry of Justice).',
        descAr: 'استخراج ملصق وشهادة الأبوستيل الرسمية المرّقمة من وزارة خارجية أو عدل الدولة المصدرة.',
        durationEn: 'Day 2 - 5',
        durationAr: 'اليوم 2 - 5',
      },
      {
        stepNumber: 3,
        titleEn: 'Optional UAE Embassy + MOFA Endorsement & Delivery',
        titleAr: 'تصديق سفارة وخارجية الإمارات (اختياري) والتسليم',
        descEn: 'If the document is for use inside the UAE, we complete the UAE Embassy and MOFA stamps and deliver to your Dubai address.',
        descAr: 'في حال كان المستند للاستخدام داخل الإمارات، نستكمل ختم سفارة الإمارات ووزارة الخارجية بدبي ونسلمه لعنوانك.',
        durationEn: 'Day 5 - 8',
        durationAr: 'اليوم 5 - 8',
      },
    ],
    faqs: [
      {
        questionEn: 'Is an Apostille stamp alone enough for use inside Dubai government departments?',
        questionAr: 'هل يكفي ختم الأبوستيل وحده لاستخدام المستند لدى الدوائر الحكومية في دبي؟',
        answerEn: 'No. Because the UAE is not a signatory to the Hague Apostille Convention, an Apostille stamp is the first step in the origin country (replacing their local Foreign Ministry stamp), after which it must still be stamped by the UAE Embassy in that country and UAE MOFA in Dubai. We handle all three steps.',
        answerAr: 'لا؛ نظراً لأن دولة الإمارات ليست عضواً في اتفاقية لاهاي للأبوستيل، يُعتمد ختم الأبوستيل كبديل لختم خارجية بلد المنشأ، ويجب بعده وضع ختم سفارة الإمارات في تلك الدولة ثم ختم وزارة الخارجية في دبي، ونتولى نحن إنجاز الخطوات الثلاث.',
      },
    ],
    reviews: [
      {
        name: 'Marco Bellini',
        roleEn: 'International Legal Counsel',
        roleAr: 'مستشار قانوني دولي',
        companyEn: 'Bellini & Partners Milano-Dubai',
        companyAr: 'بيليني وشركاه للمحاماة',
        rating: 5,
        date: 'September 2026',
        commentEn: 'Atlas Attestation knows international treaty law inside out. They apostilled our Italian and Delaware corporate documents and completed UAE Embassy and MOFA legalization seamlessly.',
        commentAr: 'يمتلك فريق أطلس دراية عميقة بقوانين التوثيق الدولي. أنجزوا أبوستيل وثائق شركاتنا في إيطاليا وأمريكا مع تصديق سفارة وخارجية الإمارات بسلاسة تامة.',
      },
    ],
    targetKeywords: {
      shortTail: [
        'apostille services dubai',
        'hague apostille certification uae',
        'uk fcdo apostille dubai',
        'us apostille service dubai',
        'india mea apostille dubai',
      ],
      longTail: [
        'apostille and uae embassy attestation service in karama dubai',
        'how to get hague apostille stamp on documents from dubai',
        'apostille certification for european and uk migration from uae',
        'corporate document apostille and mofa legalization dubai',
      ],
    },
  },

  'atlas-degree-education-equivalency': {
    detailedOverviewEn:
      'University Degree Attestation & UAE Ministry of Education (MoE) Equivalency is mandatory for professionals applying for the 10-Year UAE Golden Visa (Skilled Professionals category), MoHRE Level 1–3 skilled employment work permits, teacher and professor licensing (KHDA / ADEK), medical/engineering licensing, and postgraduate university admissions inside the UAE. At Atlas Attestation in Karama Business Center, we handle both phases of academic recognition: (1) full diplomatic attestation of your Bachelor’s, Master’s, PhD, or Diploma certificate through the issuing country’s Education/Foreign Ministry, UAE Embassy, and UAE MOFA (AED 200) + MOJ Arabic translation (AED 38/page); and (2) Primary Source Verification (DataFlow / Qualification Check) and formal Certificate of Equivalency issuance through the UAE Ministry of Education portal.',
    detailedOverviewAr:
      'تُعد خدمة "تصديق الشهادات الجامعية ومعادلتها لدى وزارة التربية والتعليم الإماراتية (MoE)" متطلباً إلزامياً للمهنيين المتقدمين للحصول على الإقامة الذهبية لمدة 10 سنوات (فئة الاختصاصيين والمهنيين)، وتصاريح العمل المهارية (المستويات 1 إلى 3) لدى وزارة الموارد البشرية، وتراخيص المعلمين والأكاديميين (هيئة المعرفة KHDA)، وتراخيص الأطباء والمهندسين، والقبول في الدراسات العليا داخل الدولة. وفي مكتب أطلس بمركز الكرامة للأعمال، ننجز المرحلتين بالكامل: (1) التصديق الدبلوماسي الكامل لشهادات البكالوريوس والماجستير والدكتوراه والدبلوم من بلد المنشأ وسفارة الإمارات ووزارة الخارجية (200 درهم) والترجمة القانونية (38 درهماً/صفحة)، و(2) التحقق من صحة المصدر الأصلي (DataFlow) وإصدار شهادة المعادلة الرسمية من وزارة التربية والتعليم.',
    legalFrameworkEn:
      'Governed by UAE Ministry of Education (MoE) Higher Education Qualification Recognition Standards, ICP Golden Visa Resolution rules, and MoHRE Skilled Worker Classification directives.',
    legalFrameworkAr:
      'خاضعة لمعايير الاعتراف بالمؤهلات الجامعية الصادرة عن وزارة التربية والتعليم الإماراتية، وضوابط الهيئة الاتحادية للهوية والجنسية للإقامة الذهبية، وتصنيفات العمالة المهارية بوزارة الموارد البشرية.',
    eligibilityEn: [
      'Graduates of accredited foreign or UAE universities holding a Bachelor’s, Master’s, or Doctoral degree',
      'Professionals applying for the 10-Year UAE Golden Visa requiring an MoE Equivalency Certificate',
      'Managers, Engineers, Doctors, Accountants, and IT Specialists applying for MoHRE Skilled Work Permits',
      'School and university educators requiring KHDA / MoE academic credential clearance',
    ],
    eligibilityAr: [
      'خريجو الجامعات الأجنبية أو المحلية المعتمدة الحاصلون على درجات البكالوريوس أو الماجستير أو الدكتوراه',
      'المهنيون المتقدمون للحصول على الإقامة الذهبية لمدة 10 سنوات والملزمون بتقديم شهادة معادلة المؤهل الجامعي',
      'المديرون والمهندسون والأطباء والمحاسبون وخبراء التقنية المتقدمون لتصاريح العمل المهارية',
      'المعلمون وأعضاء الهيئات التدريسية للحصول على اعتمادات وزارة التربية وهيئة المعرفة (KHDA)',
    ],
    galleryImages: COMMON_GALLERY,
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'Degree & Transcript Attestation + MOJ Translation',
        titleAr: 'تصديق الشهادة وكشف الدرجات والترجمة القانونية',
        descEn: 'Completing UAE Embassy + UAE MOFA attestation (AED 200) and sworn Arabic translation (AED 38/page) of your degree and academic transcripts.',
        descAr: 'إتمام تصديق سفارة الإمارات ووزارة الخارجية (200 درهم) والترجمة القانونية المحلفة (38 درهماً/صفحة) للشهادة وكشف الدرجات.',
        durationEn: '1 - 5 Days',
        durationAr: '1 - 5 أيام',
      },
      {
        stepNumber: 2,
        titleEn: 'Primary Source Verification (DataFlow / QCheck)',
        titleAr: 'التحقق من صحة المصدر الأصلي (DataFlow)',
        descEn: 'Lodging your degree, transcripts, and embassy/university confirmation letters with the MoE verification agency.',
        descAr: 'تقديم الشهادة وكشف الدرجات عبر وكالة التحقق المعتمدة لدى وزارة التربية والتعليم لمخاطبة الجامعة المصدرة.',
        durationEn: '7 - 15 Days',
        durationAr: '7 - 15 يوماً',
      },
      {
        stepNumber: 3,
        titleEn: 'MoE Equivalency Certificate & Golden Visa Link',
        titleAr: 'إصدار شهادة المعادلة والربط مع الإقامة الذهبية',
        descEn: 'Receiving the digital UAE Ministry of Education Equivalency Certificate and immediately linking it to your Amer Golden Visa or Tasheel file.',
        descAr: 'إصدار شهادة المعادلة الرقمية من وزارة التربية والتعليم وربطها فوراً بملف الإقامة الذهبية لدى آمر أو تصريح العمل لدى تسهيل.',
        durationEn: '2 - 3 Days',
        durationAr: '2 - 3 أيام',
      },
    ],
    faqs: [
      {
        questionEn: 'What is the difference between MOFA Degree Attestation and Ministry of Education (MoE) Equivalency?',
        questionAr: 'ما الفرق بين تصديق الشهادة من وزارة الخارجية ومعادلة الشهادة من وزارة التربية والتعليم؟',
        answerEn: 'MOFA Attestation (completed in 24–48 hours for AED 200 once embassy-stamped) verifies the seals on your degree and is sufficient for standard work visas. MoE Equivalency goes a step further by verifying your university’s accreditation and credit hours through DataFlow, which is mandatory for the 10-Year Skilled Professional Golden Visa.',
        answerAr: 'تصديق وزارة الخارجية (ينجز خلال 24-48 ساعة برسم 200 درهم) يصادق على صحة الأختام ويكفي لمعظم تصاريح العمل العادية، أما معادلة وزارة التربية والتعليم فتتحقق من الاعتماد الأكاديمي للجامعة وكشف الدرجات عبر DataFlow وهي إلزامية للإقامة الذهبية للمهنيين.',
      },
    ],
    reviews: [
      {
        name: 'Eng. Tarek El-Masri',
        roleEn: 'Principal Structural Engineer',
        roleAr: 'مهندس إنشائي رئيسي',
        companyEn: 'AECOM Middle East',
        companyAr: 'إيكوم الشرق الأوسط',
        rating: 5,
        date: 'October 2026',
        commentEn: 'Atlas Attestation handled my Cairo University Engineering degree MOFA stamp, MOJ translation, DataFlow verification, and MoE Equivalency, and then their Amer desk issued my 10-Year Golden Visa in the same building!',
        commentAr: 'أنجز مكتب أطلس تصديق شهادة الهندسة من الخارجية وترجمتها ومعادلتها لدى وزارة التربية والتعليم، ثم أصدر لي قسم آمر في نفس المبنى الإقامة الذهبية لمدة 10 سنوات!',
      },
    ],
    targetKeywords: {
      shortTail: [
        'degree attestation dubai',
        'ministry of education equivalency uae',
        'moe certificate equivalency dubai',
        'golden visa degree equivalency dubai',
        'diploma attestation karama',
      ],
      longTail: [
        'how to get ministry of education equivalency for golden visa dubai',
        'university degree mofa attestation and legal translation dubai',
        'dataflow verification and moe equivalency service karama dubai',
        'attest bachelor and master degree for mohre skilled work permit',
      ],
    },
  },

  'atlas-marriage-birth-personal-attestation': {
    detailedOverviewEn:
      'Marriage & Birth Certificate Legalization is the foundational requirement for sponsoring your spouse, newborn babies, children, or parents under a Dubai family residency visa at GDRFA Amer Centers, as well as for registering newborn passports, claiming maternity insurance benefits, and processing family inheritance or court matters. At Atlas Attestation in Karama Business Center (KBC), we provide a complete one-stop family document legalization package: origin-country Foreign Ministry and UAE Embassy legalization (if not yet stamped), UAE Ministry of Foreign Affairs (MOFA) attestation at the official AED 200 personal rate, and UAE Ministry of Justice (MOJ) sworn Arabic translation at AED 38 per page—connected directly to our adjacent Amer Family Visa counter.',
    detailedOverviewAr:
      'يُعد تصديق عقود الزواج وشهادات الميلاد والوثائق الشخصية المتطلب الأساسي لكفالة الزوجة والأطفال والمواليد الجدد والوالدين على إقامة الأسرة في مراكز آمر (إقامة دبي)، فضلاً عن استخراج جوازات سفر المواليد، ومطالبات التأمين الصحي، وإجراءات الأحوال الشخصية والميراث. وفي مكتب "أطلس لتصديق المستندات" بمركز الكرامة للأعمال (KBC)، نقدم باقة متكاملة لتصديق وثائق الأسرة تحت سقف واحد: تصديق خارجية بلد المنشأ وسفارة الإمارات (إن لم تكن مختومة مسبقاً)، وتصديق وزارة الخارجية الإماراتية (MOFA) بالرسم الشخصي الرسمي (200 درهم)، والترجمة القانونية المحلفة المعتمدة من وزارة العدل إلى اللغة العربية (38 درهماً للصفحة)، مع التحويل الفوري لكاونتر آمر المجاور لإصدار تأشيرة العائلة.',
    legalFrameworkEn:
      'Mandated under GDRFA Dubai Family Sponsorship Regulations, ICP Federal Civil Status Directives, and UAE Ministry of Foreign Affairs Personal Document Attestation rules.',
    legalFrameworkAr:
      'إلزامية بموجب لوائح كفالة الأسرة في الإدارة العامة للإقامة وشؤون الأجانب بدبي (GDRFA)، وضوابط الهيئة الاتحادية للهوية والجنسية، وتعليمات وزارة الخارجية لتصديق المحررات الشخصية.',
    eligibilityEn: [
      'UAE residents sponsoring their wife/husband requiring an attested and Arabic-translated Marriage Certificate',
      'Parents sponsoring children or daughters/sons requiring attested Birth Certificates',
      'Parents of babies born in Dubai requiring DHA Birth Certificate attestation from MoHAP and UAE MOFA + Foreign Consulate',
      'Families requiring attestation of divorce decrees, death certificates, or family relationship affidavits',
    ],
    eligibilityAr: [
      'المقيمون الراغبون في كفالة الزوجة أو الزوج والملزمون بتقديم عقد زواج مصدق ومترجم قانونياً للعربية',
      'الآباء والأمهات الراغبون في كفالة الأبناء والبنات والملزمون بتقديم شهادات ميلاد مصدقة',
      'ذوو المواليد الجدد في دبي الراغبون في تصديق شهادة الميلاد من وزارة الصحة ووزارة الخارجية وسفارة بلدهم',
      'العائلات التي تحتاج لتصديق شهادات الطلاق أو الوفاة أو إقرارات القرابة والإعالة',
    ],
    galleryImages: COMMON_GALLERY,
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'Vital Record Verification & Embassy Check',
        titleAr: 'فحص وثيقة الزواج أو الميلاد وتدقيق الأختام',
        descEn: 'Checking your original marriage or birth certificate for home-country UAE Embassy stamps or DHA/MoHAP seals (for UAE-born babies).',
        descAr: 'مراجعة أصل عقد الزواج أو شهادة الميلاد للتأكد من وجود ختم سفارة الإمارات أو ختم وزارة الصحة (للمواليد داخل الدولة).',
        durationEn: '30 Mins',
        durationAr: '30 دقيقة',
      },
      {
        stepNumber: 2,
        titleEn: 'UAE MOFA Stamping (AED 200) & MOJ Arabic Translation',
        titleAr: 'تصديق الخارجية (200 درهم) والترجمة القانونية (38 درهماً)',
        descEn: 'Affixing the official UAE MOFA QR stamp and completing sworn Arabic translation if the certificate is in a foreign language.',
        descAr: 'وضع ختم وزارة الخارجية الرسمي وإنجاز الترجمة القانونية المحلفة إلى العربية إذا كانت الوثيقة بلغة أجنبية.',
        durationEn: '24 Hours',
        durationAr: '24 ساعة',
      },
      {
        stepNumber: 3,
        titleEn: 'Direct Handover or Amer Family Visa Lodgement',
        titleAr: 'التسليم أو التقديم الفوري لإقامة الأسرة لدى آمر',
        descEn: 'Delivering your attested certificates to your doorstep or passing them directly to our in-house Amer desk to issue your family entry permits.',
        descAr: 'توصيل الشهادات المصدقة لباب منزلك أو تسليمها مباشرة لكاونتر آمر داخل مركزنا لإصدار أذونات دخول الأسرة فوراً.',
        durationEn: 'Same Day',
        durationAr: 'في نفس اليوم',
      },
    ],
    faqs: [
      {
        questionEn: 'Does GDRFA Dubai require my English marriage or birth certificate to be translated into Arabic after MOFA attestation?',
        questionAr: 'هل تشترط إقامة دبي ترجمة عقد الزواج أو شهادة الميلاد الصادرة بالإنجليزية إلى العربية بعد تصديق الخارجية؟',
        answerEn: 'Whenever a foreign marriage or birth certificate is in a language other than Arabic or English, sworn MOJ Arabic translation is strictly mandatory. Even for English certificates, certain family court or parent sponsorship files require MOJ Arabic translation (AED 38/page), which we complete on the spot.',
        answerAr: 'إذا كانت شهادة الزواج أو الميلاد بأي لغة غير العربية أو الإنجليزية، فإن الترجمة القانونية المحلفة للعربية إلزامية تماماً، كما تطلب في بعض معاملات المحاكم وكفالة الوالدين حتى للوثائق الإنجليزية، وننجزها فوراً بسعر 38 درهماً للصفحة.',
      },
    ],
    reviews: [
      {
        name: 'Aisha & Omar Siddiqui',
        roleEn: 'Dubai Residents',
        roleAr: 'مقيمان في دبي',
        companyEn: 'Downtown Dubai',
        companyAr: 'وسط مدينة دبي',
        rating: 5,
        date: 'October 2026',
        commentEn: 'Completed our newborn baby’s birth certificate MoHAP and MOFA attestation plus our marriage certificate attestation at Karama Business Center, then walked 10 steps to their Amer counter to stamp the baby’s residency visa!',
        commentAr: 'أنجزنا تصديق شهادة ميلاد مولودنا الجديد من وزارة الصحة والخارجية وتصديق عقد الزواج في مركز الكرامة للأعمال، ثم انتقلنا لكاونتر آمر المجاور لتثبيت إقامة المولود في نفس الزيارة!',
      },
    ],
    targetKeywords: {
      shortTail: [
        'marriage certificate attestation dubai',
        'birth certificate attestation dubai',
        'newborn birth certificate mofa attestation',
        'family visa document attestation dubai',
        'personal document attestation karama',
      ],
      longTail: [
        'attest marriage and birth certificate for family residency visa dubai',
        'newborn baby birth certificate mohap and mofa attestation dubai',
        'marriage certificate mofa attestation 200 aed and legal translation dubai',
        'fast birth certificate legalization with free courier pickup dubai',
      ],
    },
  },

  'atlas-police-clearance-good-conduct': {
    detailedOverviewEn:
      'The UAE Police Clearance Certificate (officially titled the Good Conduct Certificate) issued by Dubai Police General Headquarters or the UAE Ministry of Interior (MOI) is an official government certification confirming that an individual has no criminal record during their residency in the United Arab Emirates. It is mandatory for international immigration and permanent residency applications (Canada Express Entry, Australia PR, UK, New Zealand, USA, Europe), golden visa categories, sensitive banking/government employment, and DET/Central Bank corporate licensing. At Atlas Attestation in Karama Business Center, we process both active UAE residents (using Emirates ID) and former UAE residents living abroad (including fingerprint card verification), followed by UAE MOFA attestation, Embassy legalization, and lawyer-certified True Copy authentication.',
    detailedOverviewAr:
      'تُعد شهادة بحث الحالة الجنائية في دولة الإمارات (المعروفة رسمياً بـ "شهادة حسن السيرة والسلوك") الصادرة عن القيادة العامة لشرطة دبي أو وزارة الداخلية (MOI) وثيقة رسمية تثبت خلو السجل الجنائي للفرد طوال فترة إقامته في الدولة. وتُطلب هذه الشهادة بشكل إلزامي لمعاملات الهجرة الدولية والإقامة الدائمة (كندا، أستراليا، بريطانيا، أمريكا، نيوزيلندا، وأوروبا)، والتوظيف في البنوك والجهات الحكومية الحساسة، وبعض التراخيص المهنية والتجارية. وفي مكتب أطلس بمركز الكرامة للأعمال، نستخرج الشهادة للمقيمين الحاليين (ببطاقة الهوية) وللمقيمين السابقين المتواجدين خارج الدولة (شاملة توثيق صحيفة البصمات)، مع استكمال تصديق وزارة الخارجية والسفارات وإصدار نسخ "صورة طبق الأصل" المعتمدة قانونياً.',
    legalFrameworkEn:
      'Issued under Federal Decree-Law No. 36 of 2022 Concerning the Rehabilitation of Offenders and Criminal Record Certificates, administered by Dubai Police and the UAE Ministry of Interior.',
    legalFrameworkAr:
      'تصدر بموجب المرسوم بقانون اتحادي رقم 36 لسنة 2022 بشأن رد الاعتبار وشهادات السجل الجنائي، بإشراف القيادة العامة لشرطة دبي ووزارة الداخلية.',
    eligibilityEn: [
      'Current UAE residents holding a valid Emirates ID card',
      'Former UAE residents now residing abroad (via Emirates ID history or attested ten-print fingerprint card from their local police/UAE Embassy)',
      'Individuals requiring Lawyer/Notary-certified Passport & ID True Copies for international banking, citizenship by investment, or offshore company setup',
    ],
    eligibilityAr: [
      'المقيمون الحاليون في دولة الإمارات الحاملون لبطاقة هوية إماراتية سارية',
      'المقيمون السابقون المتواجدون حالياً خارج الدولة (عبر بيانات الهوية السابقة أو صحيفة البصمات العشرية المصدقة)',
      'الأفراد والشركات الراغبون في استخراج شهادة "صورة طبق الأصل" (True Copy) لجوازات السفر والوثائق للبنوك الدولية وبرامج الجنسية',
    ],
    galleryImages: COMMON_GALLERY,
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'Identity / Biometric Record Verification',
        titleAr: 'التحقق من الهوية أو سجل البصمات الجنائية',
        descEn: 'Verifying your Emirates ID or Unified Number (UID) and criminal biometric record with Dubai Police / MOI.',
        descAr: 'التحقق من رقم الهوية الإماراتية أو الرقم الموحد (UID) ومطابقة سجل البصمة لدى شرطة دبي أو وزارة الداخلية.',
        durationEn: '30 Mins',
        durationAr: '30 دقيقة',
      },
      {
        stepNumber: 2,
        titleEn: 'Dubai Police / MOI Good Conduct Issuance',
        titleAr: 'إصدار شهادة بحث الحالة الجنائية (عربي / إنجليزي)',
        descEn: 'Lodging the official request specifying the destination country and purpose to generate the QR-verified Police Clearance Certificate.',
        descAr: 'تقديم الطلب الرسمي مع تحديد الدولة والجهة الموجه إليها لإصدار الشهادة الإلكترونية المزودة بباركود التحقق.',
        durationEn: 'Same Day / 24 Hours',
        durationAr: 'نفس اليوم / 24 ساعة',
      },
      {
        stepNumber: 3,
        titleEn: 'MOFA / Embassy Attestation & True Copy Stamping',
        titleAr: 'تصديق الخارجية والسفارة واعتماد صورة طبق الأصل',
        descEn: 'Adding UAE MOFA (AED 200) and destination embassy attestation if required for migration, plus certified True Copy seals.',
        descAr: 'إضافة ختم وزارة الخارجية (200 درهم) وتصديق سفارة دولة الوجهة عند الحاجة، مع ختم صورة طبق الأصل المعتمد.',
        durationEn: '24 - 48 Hours',
        durationAr: '24 - 48 ساعة',
      },
    ],
    faqs: [
      {
        questionEn: 'Can I obtain a Dubai Police Clearance Certificate if I already left the UAE and cancelled my residence visa?',
        questionAr: 'هل يمكنني استخراج شهادة حسن السيرة والسلوك من شرطة دبي إذا كنت قد غادرت الدولة وألغيت إقامتي؟',
        answerEn: 'Yes! If your biometric fingerprints are already stored in the UAE system from your previous Emirates ID, we can issue your Police Clearance Certificate within 24 hours using your old Emirates ID number and passport copy. If not, we guide you through the fingerprint card attestation process.',
        answerAr: 'نعم بالتأكيد! إذا كانت بصماتك البيومترية مسجلة مسبقاً في النظام عبر هويتك الإماراتية السابقة، يمكننا استخراج شهادة بحث الحالة الجنائية خلال 24 ساعة بصورة جوازك ورقم الهوية السابق فقط.',
      },
    ],
    reviews: [
      {
        name: 'David & Chloe Thornton',
        roleEn: 'Corporate Consultants',
        roleAr: 'مستشارو أعمال',
        companyEn: 'Dubai Marina',
        companyAr: 'دبي مارينا',
        rating: 5,
        date: 'October 2026',
        commentEn: 'Issued both our Dubai Police Good Conduct Certificates with MOFA attestation and certified passport True Copies in 24 hours at Karama Business Center. Saved our international relocation timeline!',
        commentAr: 'استخرجنا شهادات حسن السيرة والسلوك من شرطة دبي مع تصديق الخارجية ونسخ جوازات السفر المعتمدة طبق الأصل خلال 24 ساعة في مركز الكرامة للأعمال.',
      },
    ],
    targetKeywords: {
      shortTail: [
        'police clearance certificate dubai',
        'good conduct certificate uae',
        'dubai police pcc attestation',
        'certified true copy dubai',
        'moi police clearance uae',
      ],
      longTail: [
        'how to get dubai police clearance certificate for canada and australia pr',
        'uae good conduct certificate for former residents living abroad',
        'police clearance certificate with mofa attestation karama dubai',
        'lawyer certified true copy of passport and utility bill dubai',
      ],
    },
  },

  // ============================================================================
  // NOTARY & COURTS (5 Dedicated Individual Services)
  // ============================================================================
  'notary-power-of-attorney-poa': {
    detailedOverviewEn:
      'Power of Attorney (POA) Drafting & Dubai Courts E-Notarization empowers you to legally appoint a trusted representative (agent/attorney) to act on your behalf across real estate transactions, corporate management, banking, vehicle sales, litigation, or personal affairs in the United Arab Emirates. Under Dubai Land Department (DLD), RTA, and DET regulations, generic or poorly translated POAs are summarily rejected. At Karama Business Center (KBC), our legal consultants draft bespoke, clause-verified bilingual (Arabic/English) General and Special Powers of Attorney—and coordinate same-day digital video-call notarization with the Dubai Courts Notary Public—so you receive an official, QR-verifiable digital Notary Deed via UAE Pass without waiting in courthouse lines.',
    detailedOverviewAr:
      'تتيح لك خدمة "صياغة وتوثيق الوكالات القانونية العامة والخاصة لدى الكاتب العدل بمحاكم دبي" تفويض وكيل قانوني موثوق لتمثيلك رسمياً في معاملات بيع وإدارة العقارات، أو إدارة الشركات وتوقيع العقود، أو المعاملات المصرفية، أو بيع المركبات، أو التمثيل القضائي ومتابعة الدوائر الحكومية في دولة الإمارات. ونظراً لأن دائرة الأراضي والأملاك (DLD) وهيئة الطرق (RTA) واقتصادية دبي ترفض الصيغ العامة غير الدقيقة، يتولى المستشارون القانونيون في مركز الكرامة للأعمال (KBC) صياغة وكالات ثنائية اللغة (عربي/إنجليزي) مستوفية لكافة البنود الإلزامية، مع تنسيق جلسة التوثيق الرقمي الفوري عبر الاتصال المرئي مع كاتب عدل محاكم دبي في نفس اليوم لإصدار سند الوكالة الرسمي المزود برمز QR.',
    legalFrameworkEn:
      'Governed by Dubai Law No. 4 of 2013 Regulating the Notary Public Profession in the Emirate of Dubai and Dubai Land Department (DLD) Circulars on Property Sale POAs (2-year validity cap for sales; 5-year cap for management).',
    legalFrameworkAr:
      'تخضع للقانون رقم 4 لسنة 2013 بشأن تنظيم مهنة الكاتب العدل في إمارة دبي وتعاميم دائرة الأراضي والأملاك بشأن مدد صلاحية وكالات البيع (سنتان كحد أقصى للبيع و5 سنوات للإدارة).',
    eligibilityEn: [
      'Property owners issuing a Special Real Estate POA for selling, gifting, mortgaging, or managing apartments/villas at DLD',
      'Company shareholders and Managing Directors issuing a Corporate Management or Bank Account POA',
      'Vehicle owners issuing an RTA Vehicle Sale or Export Power of Attorney',
      'Individuals issuing a General POA, Inheritance POA, Marriage Guardian POA, or Litigation POA to a licensed UAE advocate',
    ],
    eligibilityAr: [
      'ملاك العقارات الراغبون في إصدار وكالة خاصة لبيع أو هبة أو رهن أو إدارة العقارات لدى دائرة الأراضي والأملاك',
      'الشركاء والمديرون التنفيذيون الراغبون في إصدار وكالة إدارة شركة أو تشغيل الحسابات البنكية',
      'ملاك المركبات الراغبون في إصدار وكالة بيع أو تصدير مركبة معتمدة لدى هيئة الطرق والمواصلات (RTA)',
      'الأفراد الراغبون في إصدار وكالة عامة، أو وكالة حصر إرث، أو وكالة تقاضٍ لمحامٍ مرخص بالدولة',
    ],
    galleryImages: COMMON_GALLERY,
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'Bespoke Bilingual POA Drafting (Arabic & English)',
        titleAr: 'الصياغة القانونية المخصصة للوكالة (عربي / إنجليزي)',
        descEn: 'Drafting precise legal clauses matching DLD, RTA, DET, or bank compliance rules and verifying Title Deeds / Trade Licenses.',
        descAr: 'صياغة بنود الوكالة بدقة تامة وفق اشتراطات أراضي دبي أو هيئة الطرق أو اقتصادية دبي أو البنوك.',
        durationEn: '1 Hour',
        durationAr: 'ساعة واحدة',
      },
      {
        stepNumber: 2,
        titleEn: 'Dubai Courts Smart Notary Portal Submission',
        titleAr: 'رفع الوكالة عبر بوابة الكاتب العدل الذكي بمحاكم دبي',
        descEn: 'Uploading the bilingual POA and supporting ownership proofs and authenticating the Principal via UAE Pass.',
        descAr: 'رفع مسودة الوكالة ومستندات الملكية وتأكيد هوية الموكل إلكترونياً عبر تطبيق UAE Pass.',
        durationEn: '1 - 2 Hours',
        durationAr: '1 - 2 ساعة',
      },
      {
        stepNumber: 3,
        titleEn: 'Video-Call E-Notarization & QR Deed Delivery',
        titleAr: 'المقابلة المرئية وإصدار سند الوكالة الموثق',
        descEn: 'Completing a 3-minute video verification with the Dubai Courts Notary Public and receiving your official stamped PDF POA.',
        descAr: 'إجراء اتصال مرئي لمدة 3 دقائق مع الكاتب العدل واستلام سند الوكالة الإلكتروني المختوم برمز QR فوراً.',
        durationEn: 'Same Day',
        durationAr: 'في نفس اليوم',
      },
    ],
    faqs: [
      {
        questionEn: 'Does the agent (attorney) need to attend the Notary Public session when issuing a Power of Attorney?',
        questionAr: 'هل يشترط حضور الوكيل أثناء توثيق الوكالة لدى الكاتب العدل؟',
        answerEn: 'No! Under UAE law, a Power of Attorney is a unilateral authorization by the Principal (Grantor). Only the Principal needs to sign/approve via UAE Pass or video call; only a clean copy of the Agent’s Emirates ID or passport is required.',
        answerAr: 'لا؛ فالوكالة القانونية تصرف بالإرادة المنفردة للموكل فقط. يكتفى بموافقة وتوقيع الموكل عبر الهوية الرقمية أو الاتصال المرئي، مع إرفاق صورة واضحة من هوية أو جواز سفر الوكيل دون حاجة لحضوره.',
      },
      {
        questionEn: 'Can I revoke or cancel an existing Power of Attorney at Karama Business Center?',
        questionAr: 'هل يمكنني إلغاء وكالة قانونية سابقة في مركز الكرامة للأعمال؟',
        answerEn: 'Yes. We draft and notarize official Revocation of Power of Attorney (Dismissal of Agent) notices with Dubai Courts and serve the formal legal notification to the former agent on the same day.',
        answerAr: 'نعم، نقوم بصياغة وتوثيق "إقرار إلغاء وكالة وعزل وكيل" لدى كاتب عدل محاكم دبي وإرسال الإخطار العدلي الرسمي للوكيل السابق في نفس اليوم.',
      },
    ],
    reviews: [
      {
        name: 'Saeed Al-Ghurair',
        roleEn: 'Chairman',
        roleAr: 'رئيس مجلس الإدارة',
        companyEn: 'Al-Ghurair Ventures',
        companyAr: 'الغرير للمشاريع',
        rating: 5,
        date: 'October 2026',
        commentEn: 'Exceptional legal drafting at Karama Business Center. They prepared three Special Real Estate POAs and a Corporate Management POA and completed the Dubai Courts video notarization in one afternoon.',
        commentAr: 'صياغة قانونية رفيعة المستوى في مركز الكرامة للأعمال. أعدوا لنا ثلاث وكالات عقارية خاصة ووكالة إدارة شركة وأتموا التوثيق المرئي مع محاكم دبي في ظهيرة يوم واحد.',
      },
    ],
    targetKeywords: {
      shortTail: [
        'power of attorney dubai',
        'poa notary public dubai',
        'special poa for property sale dubai',
        'vehicle poa rta dubai',
        'online e-notary dubai courts',
      ],
      longTail: [
        'same day power of attorney drafting and e-notarization dubai courts',
        'bilingual real estate poa for dubai land department conveyancing',
        'general and special power of attorney typing center karama dubai',
        'how to cancel or revoke power of attorney in dubai courts',
      ],
    },
  },

  'notary-corporate-moa-addendum': {
    detailedOverviewEn:
      'Corporate Memorandum of Association (MOA), Share Transfer Agreements, and Board Resolution Notarization is essential whenever a Dubai mainland or free-zone company is incorporated, restructures its shareholding equity, appoints or removes a General Manager, increases or decreases share capital, or opens subsidiaries. Under UAE Federal Decree-Law No. 32 of 2021 on Commercial Companies, any transfer of LLC shares or amendment to a company’s constitutional Articles of Association is legally void unless notarized before the Notary Public and registered with DET. At Karama Business Center (KBC), our corporate legal consultants draft bilingual MOAs, Share Sale & Purchase Addendums, and Local Service Agent (LSA) revocation agreements, coordinating both Dubai Courts Notary authentication and DET license updates under one roof.',
    detailedOverviewAr:
      'تُعد خدمة "صياغة وتوثيق عقود تأسيس الشركات (MOA)، وملاحق التنازل عن الحصص، وقرارات الشركاء لدى الكاتب العدل" خطوة قانونية جوهرية عند تأسيس شركة جديدة في دبي، أو تعديل حصص الشركاء بالبيع والتنازل، أو تعيين وعزل المدير العام، أو زيادة وتخفيض رأس المال، أو فتح الفروع. فبموجب المرسوم بقانون اتحادي رقم 32 لسنة 2021 بشأن الشركات التجارية، يبطل أي تنازل عن حصص في شركة ذات مسؤولية محدودة أو تعديل لعقد تأسيسها ما لم يُوثق رسمياً أمام الكاتب العدل ويُقيد لدى اقتصادية دبي (DET). وفي مركز الكرامة للأعمال (KBC)، يصوغ مستشارونا العقود والملاحق باللغتين العربية والإنجليزية وينسقون توثيقها لدى كاتب عدل محاكم دبي وتحديث الرخصة التجارية فوراً.',
    legalFrameworkEn:
      'Governed by UAE Federal Decree-Law No. 32 of 2021 on Commercial Companies and Dubai Courts Commercial Notary Public authentication directives.',
    legalFrameworkAr:
      'تخضع للمرسوم بقانون اتحادي رقم 32 لسنة 2021 بشأن الشركات التجارية وضوابط توثيق العقود التجارية لدى الكاتب العدل بمحاكم دبي.',
    eligibilityEn: [
      'New LLC, Civil Company, or One-Person LLC founders executing their initial Memorandum of Association (MOA)',
      'Existing companies executing a Share Sale & Transfer Addendum (Adding or Removing Partners)',
      'Foreign parent corporations notarizing Board Resolutions to open a branch or bank account in Dubai',
      'Expatriate business owners notarizing an LSA Termination Agreement to convert to 100% foreign ownership',
    ],
    eligibilityAr: [
      'مؤسسو الشركات ذات المسؤولية المحدودة أو الشركات المدنية أو شركات الشخص الواحد لتوثيق عقد التأسيس الأول',
      'الشركات القائمة الراغبة في توثيق ملحق بيع وتنازل عن الحصص (دخول أو خروج شركاء) وتعديل عقد التأسيس',
      'الشركات الأجنبية والمحلية الراغبة في توثيق قرارات مجلس الإدارة لفتح الفروع أو الحسابات البنكية في دبي',
      'أصحاب الرخص المهنية الراغبون في توثيق ملحق إلغاء وكيل الخدمات المحلي والتحول إلى التملك الأجنبي 100%',
    ],
    galleryImages: COMMON_GALLERY,
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'Corporate Structure & Cap-Table Legal Drafting',
        titleAr: 'صياغة عقد التأسيس أو ملحق تعديل الحصص والصلاحيات',
        descEn: 'Drafting bilingual Arabic-English Articles, profit/loss distribution, manager banking powers, and share transfer clauses.',
        descAr: 'صياغة بنود عقد التأسيس أو ملحق بيع الحصص وصلاحيات المدير العام البنكية والإدارية بالعربية والإنجليزية.',
        durationEn: '1 - 2 Hours',
        durationAr: '1 - 2 ساعة',
      },
      {
        stepNumber: 2,
        titleEn: 'Notary Public E-Signing by All Buyers & Sellers',
        titleAr: 'التوقيع والتوثيق لدى الكاتب العدل لجميع الأطراف',
        descEn: 'Verifying all existing and incoming partners (or their POA holders) before the Dubai Courts Notary Public via video or UAE Pass.',
        descAr: 'توثيق توقيعات كافة الشركاء البائعين والمشترين (أو وكلائهم القانونيين) أمام الكاتب العدل بمحاكم دبي.',
        durationEn: '2 - 4 Hours',
        durationAr: '2 - 4 ساعات',
      },
      {
        stepNumber: 3,
        titleEn: 'Notarized Deed Issuance & DET Registry Sync',
        titleAr: 'إصدار العقد الموثق وتحديث السجل التجاري باقتصادية دبي',
        descEn: 'Delivering the QR-stamped Notarized MOA Addendum and immediately updating your DET Trade License at our adjacent DET counter.',
        descAr: 'تسليم العقد الموثق برمز QR وتحديث الرخصة التجارية والسجل التجاري فوراً لدى كاونتر اقتصادية دبي بمركزنا.',
        durationEn: 'Same Day',
        durationAr: 'في نفس اليوم',
      },
    ],
    faqs: [
      {
        questionEn: 'How are Dubai Courts Notary fees calculated for a corporate MOA or Share Transfer Addendum?',
        questionAr: 'كيف تُحتسب رسوم الكاتب العدل بمحاكم دبي لتوثيق عقد التأسيس أو ملحق بيع الحصص؟',
        answerEn: 'For MOAs and share transfers with a stated capital/consideration up to AED 100,000, the base notary fee starts around AED 300–550 per party signature. For higher share capital values, a statutory percentage tariff applies (capped by Dubai Courts). Our desk calculates the exact government voucher before submission.',
        answerAr: 'بالنسبة لعقود التأسيس والتنازل عن الحصص التي لا يتجاوز رأس مالها 100,000 درهم، تبدأ رسوم التوثيق الأساس من حوالي 300 إلى 550 درهماً للتوقيع، وتُطبق نسبة قانونية محددة لرؤوس الأموال الأعلى بسقف محدد من محاكم دبي، ونقوم بحساب الإيصال الرسمي بدقة قبل التقديم.',
      },
    ],
    reviews: [
      {
        name: 'Karan Malhotra',
        roleEn: 'Managing Director',
        roleAr: 'المدير العام',
        companyEn: 'Malhotra Steel & Metals LLC',
        companyAr: 'ملهوترا للصلب والمعادن ش.ذ.م.م',
        rating: 5,
        date: 'October 2026',
        commentEn: 'Notarized our LLC Share Transfer Addendum and Manager Change resolution at Karama Business Center and updated our DET trade license on the very same day.',
        commentAr: 'وثقنا ملحق بيع الحصص وتغيير المدير العام في مركز الكرامة للأعمال وقمنا بتحديث الرخصة التجارية لدى اقتصادية دبي في نفس اليوم.',
      },
    ],
    targetKeywords: {
      shortTail: [
        'moa notarization dubai',
        'share transfer agreement notary dubai',
        'llc addendum notarization dubai',
        'board resolution notary dubai',
        'lsa termination agreement notary',
      ],
      longTail: [
        'memorandum of association drafting and dubai courts notarization',
        'llc share sale and purchase addendum notary public karama dubai',
        'notarize board resolution and power of attorney for corporate bank account',
        'convert professional license to 100 percent foreign ownership lsa notary dubai',
      ],
    },
  },

  'notary-legal-declarations-affidavits': {
    detailedOverviewEn:
      'Statutory Legal Declarations, Sworn Affidavits, Undertakings, Gift Deeds, and Official Legal Notices notarized before the Dubai Courts Notary Public carry binding evidentiary weight across all UAE judicial, immigration, banking, and real estate authorities. Whether you need a Notarized No-Objection Undertaking (Sponsor Declaration) to sponsor your parents or stepchildren at GDRFA Amer, a Financial Support Affidavit for international student/Schengen visas, a Sworn Signature Specimen Verification for foreign banks, a Family Property Gift Deed (Hibah) declaration, or a formal Legal Warning Notice (Inzar Adli) served through the court bailiff upon a defaulting debtor or contractor, our legal desk at Karama Business Center drafts and notarizes your declaration within hours.',
    detailedOverviewAr:
      'تتمتع "الإقرارات العدلية المشفوعة باليمين، والتعهدات القانونية، وإشهادات الهبة، والإنذارات العدلية" الموثقة أمام الكاتب العدل بمحاكم دبي بحجية قانونية رسمية ملزمة أمام كافة المحاكم وسلطات الإقامة والبنوك ودائرة الأراضي والأملاك في دولة الإمارات. سواء كنت بحاجة إلى "إقرار كفالة وإعالة" موثق لكفالة الوالدين أو أبناء الزوجة لدى مراكز آمر، أو إقرار تكفل مالي لتأشيرات الدراسة وشنغن، أو تصديق نموذج توقيع بنكي، أو إقرار هبة عائلية، أو توجيه "إنذار عدلي رسمي" عبر مُعلن المحكمة لمطالبة مدين أو فسخ عقد، يتولى قسمنا القانوني في مركز الكرامة للأعمال صياغة وتوثيق الإقرار في غضون ساعات.',
    legalFrameworkEn:
      'Authenticated under UAE Federal Decree-Law No. 35 of 2022 Promulgating the Law of Evidence in Civil and Commercial Transactions and Dubai Courts Notary Public regulations.',
    legalFrameworkAr:
      'تُوثق بموجب المرسوم بقانون اتحادي رقم 35 لسنة 2022 بإصدار قانون الإثبات في المعاملات المدنية والتجارية ولوائح الكاتب العدل بمحاكم دبي.',
    eligibilityEn: [
      'Sponsors requiring a Notarized Maintenance & Dependency Undertaking for parent or stepchild residency visas at GDRFA',
      'Fathers/Guardians notarizing a Child Travel Consent or Step-Parent Sponsorship No-Objection Declaration',
      'Creditors, landlords, or companies serving a formal Notarized Legal Notice (Inzar Adli) prior to filing a lawsuit',
      'Individuals executing Sworn Affidavits of Same Name, Source of Funds, Marital Status, or Gift Declarations',
    ],
    eligibilityAr: [
      'الكفلاء الملزمون بتقديم تعهد وإقرار إعالة عدلي لكفالة الوالدين أو أبناء الزوج/الزوجة لدى إقامة دبي',
      'الآباء والأولياء الراغبون في توثيق إقرار عدم ممانعة من سفر المحضون أو كفالة الأبناء',
      'الدائنون والملاك والشركات الراغبون في توجيه إنذار عدلي رسمي لإثبات الحالة القانونية قبل رفع الدعوى',
      'الأفراد الراغبون في توثيق إقرارات وحدة الاسم، أو مصدر الأموال، أو الحالة الاجتماعية، أو إشهادات الهبة',
    ],
    galleryImages: COMMON_GALLERY,
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'Legal Declaration / Notice Drafting',
        titleAr: 'الصياغة القانونية للإقرار أو الإنذار العدلي',
        descEn: 'Structuring the exact statutory wording in Arabic and English required by GDRFA, DLD, embassies, or Dubai Courts.',
        descAr: 'صياغة نص الإقرار أو التعهد أو الإنذار العدلي بالصيغة القانونية المعتمدة لدى إقامة دبي أو المحاكم أو السفارات.',
        durationEn: '30 - 60 Mins',
        durationAr: '30 - 60 دقيقة',
      },
      {
        stepNumber: 2,
        titleEn: 'Notary Public E-Verification & Oath',
        titleAr: 'التوثيق الإلكتروني أمام الكاتب العدل',
        descEn: 'Uploading to the Dubai Courts portal and completing instant digital verification via UAE Pass or video call.',
        descAr: 'رفع الإقرار عبر بوابة محاكم دبي وإتمام التوثيق الإلكتروني عبر الهوية الرقمية أو الاتصال المرئي.',
        durationEn: '1 - 2 Hours',
        durationAr: '1 - 2 ساعة',
      },
      {
        stepNumber: 3,
        titleEn: 'QR-Stamped Certificate / Bailiff Notification',
        titleAr: 'إصدار السند الموثق أو التبليغ القضائي',
        descEn: 'Receiving your QR-stamped Notarized Declaration immediately (or dispatching the Legal Notice via Dubai Courts process server).',
        descAr: 'استلام شهادة الإقرار الموثقة برمز QR فوراً (أو إعلان الإنذار العدلي للخصم عبر معلن محاكم دبي).',
        durationEn: 'Same Day',
        durationAr: 'في نفس اليوم',
      },
    ],
    faqs: [
      {
        questionEn: 'Can I notarize a Sponsor Undertaking for my parents’ residency visa and submit the Amer visa application in the same visit?',
        questionAr: 'هل يمكنني توثيق تعهد كفالة الوالدين لدى الكاتب العدل وتقديم طلب إقامة الوالدين لدى آمر في نفس الزيارة؟',
        answerEn: 'Yes! That is one of Karama Business Center’s biggest advantages. Our Notary desk drafts and notarizes your Parent Maintenance Undertaking or Child NOC in 1–2 hours, and our adjacent Amer counter immediately lodges the family residency application.',
        answerAr: 'نعم بالتأكيد! هذه إحدى أهم مزايا مركز الكرامة للأعمال؛ حيث يقوم قسم الكاتب العدل بصياغة وتوثيق تعهد إعالة الوالدين أو عدم الممانعة خلال ساعة إلى ساعتين، ثم يتولى كاونتر آمر المجاور تقديم طلب الإقامة فوراً.',
      },
    ],
    reviews: [
      {
        name: 'Nabil Al-Khoury',
        roleEn: 'Regional Finance Director',
        roleAr: 'المدير المالي الإقليمي',
        companyEn: 'Levant Logistics Group',
        companyAr: 'مجموعة ليفانت اللوجستية',
        rating: 5,
        date: 'September 2026',
        commentEn: 'Needed a notarized No-Objection & Maintenance Declaration to sponsor my mother and stepdaughter in Dubai. Drafted, notarized with Dubai Courts, and submitted to Amer in 2 hours!',
        commentAr: 'احتجت لإقرار إعالة وعدم ممانعة موثق من الكاتب العدل لكفالة والدتي وابنة زوجتي في دبي. تمت الصياغة والتوثيق والتقديم لدى آمر خلال ساعتين فقط!',
      },
    ],
    targetKeywords: {
      shortTail: [
        'legal declaration notary dubai',
        'sworn affidavit dubai courts',
        'notarized noc for child visa dubai',
        'legal notice inzar adli dubai',
        'parent sponsorship undertaking notary',
      ],
      longTail: [
        'notarized undertaking for parents residency visa amer dubai',
        'father noc declaration for stepchild sponsorship dubai courts',
        'how to send official notarized legal notice through dubai courts',
        'sworn affidavit of financial support and same name notary dubai',
      ],
    },
  },

  'courts-labour-civil-commercial-suits': {
    detailedOverviewEn:
      'Dubai Courts Labour, Civil, Commercial & Rental Dispute Case Registration at Karama Business Center (KBC) provides comprehensive electronic litigation dossier preparation, statement of claim (Sahifat Da’wa) drafting, sworn legal translation of evidentiary exhibits, and formal case registration on the Dubai Courts E-Litigation portal and Rental Dispute Center (RDC) system. Whether you are an employee or employer filing a labour claim referred by MoHRE (for unpaid salaries, end-of-service gratuity, or arbitrary dismissal), a business filing a commercial debt recovery or bounced-cheque execution suit, or a landlord/tenant registering an eviction or rent valuation claim at the RDC, our judicial typing and legal liaison specialists ensure 100% procedural accuracy.',
    detailedOverviewAr:
      'تقدم خدمة "قيد ومتابعة الدعاوى العمالية والمدنية والتجارية والمنازعات الإيجارية بمحاكم دبي" في مركز الكرامة للأعمال (KBC) إعداداً متكاملاً لملفات التقاضي الإلكتروني، وصياغة لوائح الدعاوى والمذكرات الجوابية، والترجمة القانونية المحلفة لحوافظ المستندات، والقيد الرسمي على بوابة محاكم دبي الإلكترونية ومركز فض المنازعات الإيجارية (RDC). سواء كنت موظفاً أو صاحب عمل تقيد دعوى عمالية محالة من وزارة الموارد البشرية (للمطالبة بالأجور المتأخرة ومكافأة نهاية الخدمة والفصل التعسفي)، أو شركة تقيد دعوى تجارية لمطالبة مالية أو تنفيذ شيكات مرتجعة، أو مؤجراً/مستأجراً يقيد دعوى إخلاء أو تحديد أجرة، يضمن خبراؤنا الدقة الإجرائية التامة.',
    legalFrameworkEn:
      'Executed under UAE Federal Decree-Law No. 42 of 2022 Promulgating the Civil Procedure Code, Federal Decree-Law No. 33 of 2021 (UAE Labour Law Article 54), and Dubai Decree No. 26 of 2013 on the Rental Disputes Center (RDC).',
    legalFrameworkAr:
      'تُنفذ بموجب المرسوم بقانون اتحادي رقم 42 لسنة 2022 بإصدار قانون الإجراءات المدنية، والمادة 54 من قانون العمل الإماراتي رقم 33 لسنة 2021، والمرسوم رقم 26 لسنة 2013 بشأن مركز فض المنازعات الإيجارية بدبي.',
    eligibilityEn: [
      'Employees or Employers holding an official MoHRE Labour Dispute Referral Letter to Dubai Labour Court',
      'Creditors and corporations filing Civil or Commercial Debt Recovery, Contract Breach, or Cheque Execution claims',
      'Landlords and Tenants filing Eviction, Rent Arrears, or Security Deposit claims at the Dubai Rental Dispute Center (RDC)',
      'Litigants submitting Precautionary Attachment orders, Travel Ban petitions, or Judgment Execution filings',
    ],
    eligibilityAr: [
      'العمال وأصحاب العمل الحاصلون على كتاب إحالة النزاع العمالي من وزارة الموارد البشرية إلى المحكمة العمالية بدبي',
      'الدائنون والشركات الراغبون في قيد دعاوى المطالبات المالية المدنية والتجارية، فسخ العقود، أو تنفيذ الشيكات المرتجعة',
      'المؤجرون والمستأجرون الراغبون في قيد دعاوى الإخلاء أو المطالبة بالإيجارات أو استرداد التأمين لدى مركز فض المنازعات الإيجارية',
      'المتقاضون الراغبون في تقديم طلبات الحجز التحفظي، المنع من السفر، أو فتح ملفات تنفيذ الأحكام القضائية',
    ],
    galleryImages: COMMON_GALLERY,
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'Evidentiary Exhibit Indexing & Sworn Translation',
        titleAr: 'فهرسة حافظة المستندات والترجمة القانونية المحلفة',
        descEn: 'Translating all contracts, invoices, WhatsApp/email proofs, and bank statements into MOJ-certified legal Arabic (AED 38/page).',
        descAr: 'ترجمة كافة العقود والفواتير والمراسلات وكشوف الحساب إلى العربية القانونية المعتمدة من وزارة العدل (38 درهماً/صفحة).',
        durationEn: 'Day 1',
        durationAr: 'اليوم 1',
      },
      {
        stepNumber: 2,
        titleEn: 'Statement of Claim Drafting & E-Portal Registration',
        titleAr: 'صياغة لائحة الدعوى والقيد الإلكتروني بالمحكمة',
        descEn: 'Drafting the legal Statement of Claim specifying principal amounts, statutory interest, and court remedies, and registering on Dubai Courts.',
        descAr: 'صياغة صحيفة الدعوى وتحديد الطلبات الأصلية والاحتياطية والفوائد القانونية وقيدها على نظام محاكم دبي.',
        durationEn: 'Day 1 - 2',
        durationAr: 'اليوم 1 - 2',
      },
      {
        stepNumber: 3,
        titleEn: 'Judicial Summons Issuance & Hearing Schedule',
        titleAr: 'إصدار صحيفة التبليغ القضائي وتحديد الجلسة',
        descEn: 'Generating the official Case Number, electronic summons notification to the defendant, and remote hearing link.',
        descAr: 'إصدار رقم الدعوى الرسمي وإعلان المدعى عليه إلكترونياً وتسليم رابط حضور جلسة المحاكمة عن بُعد.',
        durationEn: 'Day 2 - 3',
        durationAr: 'اليوم 2 - 3',
      },
    ],
    faqs: [
      {
        questionEn: 'Are employees exempt from Dubai Courts government filing fees in labour cases?',
        questionAr: 'هل يُعفى العامل من الرسوم الحكومية لقيد الدعوى العمالية أمام محاكم دبي؟',
        answerEn: 'Under Article 55 of the UAE Labour Law (Federal Decree-Law No. 33 of 2021), employees (or their heirs) filing labour claims whose total claim value does not exceed AED 100,000 are exempt from judicial court registration fees at all stages of litigation and execution.',
        answerAr: 'بموجب المادة 55 من قانون العمل الإماراتي (المرسوم بقانون رقم 33 لسنة 2021)، تُعفى الدعاوى العمالية المرفوعة من العمال أو ورثتهم والتي لا تتجاوز قيمتها 100,000 درهم من الرسوم القضائية في جميع مراحل التقاضي والتنفيذ.',
      },
    ],
    reviews: [
      {
        name: 'Tariq Al-Hashimi',
        roleEn: 'Commercial Director',
        roleAr: 'المدير التجاري',
        companyEn: 'Al-Hashimi Building Materials LLC',
        companyAr: 'الهاشمي لمواد البناء ش.ذ.م.م',
        rating: 5,
        date: 'October 2026',
        commentEn: 'Prepared our commercial debt recovery lawsuit, translated 40 pages of LPOs and delivery notes into MOJ legal Arabic, and registered the case on Dubai Courts E-Litigation in 48 hours.',
        commentAr: 'أعدوا ملف دعوى المطالبة التجارية لشركتنا، وترجموا 40 صفحة من أوامر الشراء وسندات التسليم ترجمة قانونية محلفة، وقيدوا الدعوى بمحاكم دبي خلال 48 ساعة.',
      },
    ],
    targetKeywords: {
      shortTail: [
        'dubai courts case registration',
        'labour court case typing dubai',
        'rental dispute center rdc typing dubai',
        'civil lawsuit registration dubai',
        'cheque execution filing dubai courts',
      ],
      longTail: [
        'how to register mohre labour case in dubai courts after referral',
        'dubai courts e-litigation statement of claim typing karama',
        'rental dispute center rdc eviction and rent claim typing dubai',
        'commercial debt recovery and bounced cheque execution dubai courts',
      ],
    },
  },

  'notary-non-muslim-wills-probate': {
    detailedOverviewEn:
      'Non-Muslim Family Wills, Guardianship & Asset Protection Registration at Dubai Courts (and DIFC Wills Service) provides expatriate residents and international real estate investors in the UAE with absolute legal certainty over the distribution of their estate and the guardianship of their minor children. Without a registered UAE Will, local bank accounts (including joint accounts), Dubai real estate properties, end-of-service benefits, and LLC company shares can be frozen upon death, and custody of minor children may be subject to statutory court discretion. Under UAE Federal Decree-Law No. 41 of 2022 on Civil Personal Status for Non-Muslims and Dubai Law No. 15 of 2017, non-Muslim expatriates have the unconditional right to register a bilingual Will at Dubai Courts Notary Public electing 100% bespoke asset distribution and permanent/interim guardians for their children.',
    detailedOverviewAr:
      'تمنح خدمة "صياغة وتسجيل وصايا غير المسلمين، وتعيين الأوصياء على القصر، وحماية الأصول العقارية والمصرفية لدى محاكم دبي" المقيمين الأجانب والمستثمرين العقاريين في دولة الإمارات أماناً قانونياً كاملاً لتوزيع تركاتهم وتحديد الوصاية على أطفالهم القصر. فبدون وصية مسجلة رسمياً في الدولة، قد تتعرض الحسابات البنكية (بما فيها الحسابات المشتركة)، والعقارات المسجلة في دبي، وحصص الشركات للتجميد فور الوفاة لحين الفصل القضائي. وبموجب المرسوم بقانون اتحادي رقم 41 لسنة 2022 في شأن الأحوال الشخصية المدنية لغير المسلمين والقانون رقم 15 لسنة 2017 في دبي، يحق لغير المسلمين تسجيل وصية ثنائية اللغة لدى كاتب عدل محاكم دبي لتوزيع أصولهم بنسبة 100% وفق إرادتهم وتعيين أوصياء دائمين ومؤقتين لأبنائهم.',
    legalFrameworkEn:
      'Governed by UAE Federal Decree-Law No. 41 of 2022 on Civil Personal Status for Non-Muslims and Dubai Law No. 15 of 2017 Concerning Administration of Estates and Implementation of Wills of Non-Muslims in the Emirate of Dubai.',
    legalFrameworkAr:
      'تخضع للمرسوم بقانون اتحادي رقم 41 لسنة 2022 في شأن الأحوال الشخصية المدنية لغير المسلمين، والقانون رقم 15 لسنة 2017 بشأن إدارة التركات وتنفيذ الوصايا لغير المسلمين في إمارة دبي.',
    eligibilityEn: [
      'Non-Muslim expatriate residents or international investors aged 21+ owning real estate, bank accounts, or company shares in Dubai/UAE',
      'Married couples (Mirror Wills) or single parents appointing interim and permanent legal guardians for minor children under 21',
      'Executors and beneficiaries applying for Probate / Estate Distribution Orders at Dubai Courts',
    ],
    eligibilityAr: [
      'المقيمون والمستثمرون الأجانب من غير المسلمين (21 عاماً فأكثر) الذين يمتلكون عقارات أو حسابات بنكية أو حصص شركات في دبي والإمارات',
      'الأزواج (الوصايا المتبادلة Mirror Wills) أو الآباء والأمهات الراغبون في تعيين أوصياء قانونيين مؤقتين ودائمين على أطفالهم القصر',
      'المنفذون والورثة المتقدمون لإجراءات إثبات الوصية وتنفيذ توزيع التركة (Probate) أمام محاكم دبي',
    ],
    galleryImages: COMMON_GALLERY,
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'Estate Inventory & Guardianship Legal Structuring',
        titleAr: 'حصر الأصول وهيكلة بنود الوصية والوصاية على القصر',
        descEn: 'Drafting your Single or Mirror Will in bilingual legal Arabic & English covering all UAE movable/immovable assets, executors, and child guardians.',
        descAr: 'صياغة الوصية الفردية أو المتبادلة بالعربية والإنجليزية لتشمل كافة العقارات والحسابات والحصص وتعيين منفذ الوصية والأوصياء على الأطفال.',
        durationEn: 'Day 1',
        durationAr: 'اليوم 1',
      },
      {
        stepNumber: 2,
        titleEn: 'MOJ Sworn Certification & Dubai Courts Portal Lodgement',
        titleAr: 'اعتماد المترجم المحلف والرفع لبوابة محاكم دبي',
        descEn: 'Affixing our in-house Ministry of Justice legal translator seal and lodging the Will with the Dubai Courts Non-Muslim Wills Registry.',
        descAr: 'ختم الوصية من المترجم القانوني المحلف بمركزنا ورفعها إلى سجل وصايا غير المسلمين بمحاكم دبي.',
        durationEn: 'Day 2',
        durationAr: 'اليوم 2',
      },
      {
        stepNumber: 3,
        titleEn: 'Notary Public Registration & Official Will Deed',
        titleAr: 'التوثيق الرسمي وإصدار سند الوصية المسجل',
        descEn: 'Completing the testator verification with Dubai Courts Notary Public and receiving your officially registered, QR-coded UAE Will.',
        descAr: 'إتمام التحقق مع كاتب عدل محاكم دبي واستلام سند الوصية الرسمي الموثق والمزود برمز QR.',
        durationEn: 'Day 2 - 4',
        durationAr: 'اليوم 2 - 4',
      },
    ],
    faqs: [
      {
        questionEn: 'Does a Dubai Courts Non-Muslim Will cover assets across all 7 Emirates of the UAE?',
        questionAr: 'هل تغطي وصية غير المسلمين الموثقة لدى محاكم دبي الأصول والممتلكات في كافة إمارات الدولة السبع؟',
        answerEn: 'Yes! A Non-Muslim Will notarized and registered with Dubai Courts is recognized across all 7 Emirates of the UAE (Dubai, Abu Dhabi, Sharjah, Ajman, RAK, Fujairah, UAQ) for real estate properties, bank accounts, vehicles, and corporate shares, at a fraction of the cost of offshore registries.',
        answerAr: 'نعم بالتأكيد! الوصية الموثقة والمسجلة لدى كاتب عدل محاكم دبي معترف بها قانونياً في كافة إمارات الدولة السبع للعقارات والحسابات البنكية والمركبات وحصص الشركات، وبتكلفة أقل بكثير من السجلات الخاصة الأخرى.',
      },
    ],
    reviews: [
      {
        name: 'Richard & Emma Sterling',
        roleEn: 'Real Estate Investors & Parents',
        roleAr: 'مستثمران عقاريان',
        companyEn: 'Arabian Ranches Dubai',
        companyAr: 'المرابع العربية دبي',
        rating: 5,
        date: 'October 2026',
        commentEn: 'Registered our Mirror Wills and child guardianship clauses with Dubai Courts through Karama Business Center. Everything including MOJ legal translation was handled in-house transparently.',
        commentAr: 'سجلنا وصيتينا المتبادلتين وبنود الوصاية على أطفالنا لدى محاكم دبي عبر مركز الكرامة للأعمال. تم إنجاز الصياغة والترجمة القانونية والتوثيق بشفافية واحترافية عالية.',
      },
    ],
    targetKeywords: {
      shortTail: [
        'non muslim wills dubai courts',
        'expat will registration uae',
        'child guardianship will dubai',
        'mirror wills dubai',
        'dubai property will registration',
      ],
      longTail: [
        'how to register non muslim family will in dubai courts notary public',
        'mirror will and minor child guardianship registration cost dubai',
        'protect dubai real estate and bank accounts with registered uae will',
        'bilingual legal translation and registration of expat wills karama dubai',
      ],
    },
  },

  // ============================================================================
  // TYPING & LEGAL (4 Dedicated Individual Services)
  // ============================================================================
  'typing-moj-certified-legal-translation': {
    detailedOverviewEn:
      'Ministry of Justice (MOJ) Sworn Legal Translation at Karama Business Center (KBC) provides officially stamped and certified translations recognized by 100% of UAE courts, Notary Public offices, the UAE Ministry of Foreign Affairs (MOFA), GDRFA Amer, DET, Dubai Land Department, Ministry of Education, and all foreign embassies and consulates. Under UAE Federal Law No. 6 of 2012 Regulating the Translation Profession, no foreign-language document may be admitted before a UAE judicial or ministerial authority unless translated into Arabic by a Sworn Legal Translator licensed by the UAE Ministry of Justice. Our in-house translation desk operates across 30+ language pairs (Arabic, English, Russian, French, German, Spanish, Italian, Chinese, Hindi, Urdu, Farsi, Tagalog, Portuguese, Dutch, Turkish, and more) at the transparent official rate of AED 38 per page.',
    detailedOverviewAr:
      'توفر خدمة "الترجمة القانونية المحلفة والمعتمدة من وزارة العدل الإماراتية (MOJ)" في مركز الكرامة للأعمال (KBC) ترجمات رسمية ممهورة بختم وتوقيع المترجم القانوني المرخص ومقبولة بنسبة 100% لدى محاكم دبي والكاتب العدل ووزارة الخارجية (MOFA) وإقامة دبي واقتصادية دبي ودائرة الأراضي والأملاك ووزارة التربية والتعليم وكافة السفارات والقنصليات. فبموجب القانون الاتحادي رقم 6 لسنة 2012 بشأن تنظيم مهنة الترجمة، لا يُعتد بأي مستند محرر بلغة أجنبية أمام القضاء أو الوزارات إلا إذا كان مترجماً إلى اللغة العربية من قِبل مترجم قانوني محلف مقيد بجدول وزارة العدل. ويغطي مكتبنا أكثر من 30 لغة عالمية بالتعرفة الرسمية الشفافة البالغة 38 درهماً للصفحة.',
    legalFrameworkEn:
      'Executed strictly under UAE Federal Law No. 6 of 2012 Regulating the Translation Profession and UAE Ministry of Justice Sworn Legal Translator licensing directives.',
    legalFrameworkAr:
      'تُنفذ وفق أحكام القانون الاتحادي رقم 6 لسنة 2012 في شأن تنظيم مهنة الترجمة وضوابط قيد المترجمين القانونيين بوزارة العدل الإماراتية.',
    eligibilityEn: [
      'Individuals translating Marriage Certificates, Birth Certificates, University Degrees, Police Clearances, and Medical Reports for MOFA / Amer',
      'Litigants translating Contracts, Commercial Invoices, WhatsApp/Email Evidence, Audit Reports, and Foreign Court Judgments for Dubai Courts',
      'Corporations translating Articles of Incorporation, Board Resolutions, and Powers of Attorney for Notary Public and UAE Banks',
    ],
    eligibilityAr: [
      'الأفراد الراغبون في ترجمة عقود الزواج، شهادات الميلاد، الشهادات الجامعية، بحث الحالة الجنائية، والتقارير الطبية للخارجية وآمر',
      'المتقاضون الراغبون في ترجمة العقود، الفواتير، المراسلات، تقارير التدقيق، والأحكام القضائية الأجنبية لتقديمها لمحاكم دبي',
      'الشركات الراغبة في ترجمة عقود التأسيس، قرارات مجالس الإدارة، والوكالات القانونية للكاتب العدل والبنوك',
    ],
    galleryImages: COMMON_GALLERY,
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'Document Review & Exact Name Transliteration',
        titleAr: 'فحص الوثيقة ومطابقة تهجئة الأسماء مع الجواز والهوية',
        descEn: 'Matching all personal and corporate names against existing UAE residence visas, Emirates IDs, or Trade Licenses to prevent clerical mismatch.',
        descAr: 'مطابقة كافة الأسماء الشخصية والتجارية مع الإقامات والهويات الإماراتية والرخص التجارية لضمان التطابق الحرفي التام.',
        durationEn: '15 Mins',
        durationAr: '15 دقيقة',
      },
      {
        stepNumber: 2,
        titleEn: 'Sworn Legal Translation & Dual Proofreading',
        titleAr: 'الترجمة القانونية المحلفة والتدقيق اللغوي المزدوج',
        descEn: 'Translating the text using statutory UAE legal terminology and verifying every date, seal description, and serial number.',
        descAr: 'ترجمة النص بالمصطلحات القانونية الإماراتية المعتمدة وتدقيق كافة التواريخ والأرقام ووصف الأختام الرسمية.',
        durationEn: '1 - 4 Hours',
        durationAr: '1 - 4 ساعات',
      },
      {
        stepNumber: 3,
        titleEn: 'Official MOJ Translator Stamp, Binding & Delivery',
        titleAr: 'وضع ختم وزارة العدل الرسمي والتسليم الورقي والرقمي',
        descEn: 'Affixing the official Ministry of Justice Sworn Translator stamp across the original copy and translation, plus delivering a high-res PDF.',
        descAr: 'وضع ختم وتوقيع المترجم القانوني المرخص من وزارة العدل مع ربط الأصل بالترجمة وتسليم نسخة ورقية ورقمية فوراً.',
        durationEn: 'Instant Handover',
        durationAr: 'تسليم فوري',
      },
    ],
    faqs: [
      {
        questionEn: 'What is the official price per page for Ministry of Justice certified legal translation at Karama Business Center?',
        questionAr: 'كم يبلغ السعر الرسمي للصفحة الواحدة للترجمة القانونية المعتمدة من وزارة العدل في مركز الكرامة للأعمال؟',
        answerEn: 'According to our official price schedule, standard Arabic-English certified legal translation is AED 38 per page (250 words), inclusive of the official Ministry of Justice licensed translator stamp and signature.',
        answerAr: 'وفق قائمة الأسعار الرسمية المعتمدة بمركزنا، تبلغ تكلفة الترجمة القانونية المحلفة (عربي/إنجليزي) 38 درهماً للصفحة الواحدة، شاملة ختم وتوقيع المترجم القانوني المرخص من وزارة العدل.',
      },
    ],
    reviews: [
      {
        name: 'Advocate Rashed Al-Mulla',
        roleEn: 'Senior Trial Counsel',
        roleAr: 'محامٍ ومستشار قانوني',
        companyEn: 'Al-Mulla Advocates & Legal Consultants',
        companyAr: 'الملا للمحاماة والاستشارات القانونية',
        rating: 5,
        date: 'October 2026',
        commentEn: 'Our law firm relies on Karama Business Center for urgent MOJ sworn translations for Dubai Courts filings. Accurate legal Arabic terminology, zero typos, and unbeatable AED 38/page rate.',
        commentAr: 'يعتمد مكتبنا للمحاماة على مركز الكرامة للأعمال في الترجمات القانونية المحلفة العاجلة لمحاكم دبي. دقة متناهية في المصطلحات القانونية وسعر رسمي تنافسي 38 درهماً للصفحة.',
      },
    ],
    targetKeywords: {
      shortTail: [
        'certified legal translation dubai',
        'ministry of justice translation dubai',
        'sworn legal translator karama',
        'arabic legal translation 38 aed',
        'court approved translation dubai',
      ],
      longTail: [
        'ministry of justice certified legal translation 38 aed per page dubai',
        'same day sworn arabic translation for dubai courts and notary public',
        'legal translation for marriage birth and degree certificates karama',
        'russian french german chinese to arabic legal translation dubai',
      ],
    },
  },

  'typing-government-noc-letters-petitions': {
    detailedOverviewEn:
      'Official Arabic/English NOC Letters, Humanitarian Mercy Appeals & Ministerial Petitions Typing at Karama Business Center (KBC) provides authoritative, eloquent Arabic and bilingual correspondence tailored for UAE ministries, judicial committees, immigration boards, and police departments. Many government applications—such as GDRFA/ICP overstay fine reduction petitions, humanitarian residency exemptions (for elderly parents, widows, or divorced mothers), sponsor No-Objection Certificates (NOCs) for work permits or business activities, Dubai Police traffic/criminal petition letters, and municipal penalty appeals—succeed or fail based on the precision and formal Arabic legal phrasing of the explanatory petition letter. Our veteran Arabic legal scribes draft persuasive, regulation-backed letters in 30 minutes.',
    detailedOverviewAr:
      'تقدم خدمة "صياغة وطباعة خطابات عدم الممانعة (NOC)، والتماسات الاسترحام وتخفيض الغرامات، والعرائض الحكومية الرسمية" في مركز الكرامة للأعمال (KBC) صياغة قانونية وإدارية رصينة باللغة العربية الفصحى والإنجليزية موجهة إلى كافة الوزارات واللجان القضائية والإنسانية وإدارات الإقامة والشرطة في دولة الإمارات. فالكثير من المعاملات الحكومية الاستثنائية—مثل طلبات الإعفاء وتخفيض غرامات الإقامة لدى إقامة دبي والهيئة الاتحادية، وطلبات الاستثناء الإنساني لكفالة الوالدين أو المطلقات والأرامل، وخطابات عدم الممانعة للعمل أو لتعديل الرخص، والتماسات النيابة العامة والشرطة والبلدية—تعتمد في قبولها بشكل رئيسي على قوة الصياغة القانونية للخطاب المرفق واستناده إلى القرارات الوزارية الصحيحة، وهو ما ينجزه كتابنا المختصون خلال 30 دقيقة.',
    legalFrameworkEn:
      'Drafted in compliance with UAE Federal and Dubai Government official administrative correspondence protocols and Ministerial Grievance Committee submission standards.',
    legalFrameworkAr:
      'تُصاغ وفق الأصول القانونية والإدارية المعتمدة للمخاطبات الحكومية ولجان التظلمات والاسترحام الوزارية والقضائية في دبي والإمارات.',
    eligibilityEn: [
      'Applicants submitting an Overstay Fine Reduction / Mercy Appeal to the GDRFA or ICP Fine Committee',
      'Sponsors requiring an Official Arabic/English NOC for Spouse Work Permits, Freelance Permits, or Driving Licenses',
      'Parents/Families submitting a Humanitarian Exception Petition for Parent Sponsorship, Golden Visa, or Dependent Age Extension',
      'Businesses submitting Formal Explanatory Letters or Penalty Waiver Appeals to DET, MoHRE, Dubai Municipality, or Federal Tax Authority',
    ],
    eligibilityAr: [
      'المتقدمون بطلبات استرحام وإعفاء أو تخفيض غرامات الإقامة والهوية للجنة الغرامات بإقامة دبي والهيئة الاتحادية',
      'الكفلاء والشركات الراغبون في إصدار شهادة عدم ممانعة (NOC) رسمية بالعربية والإنجليزية لتصاريح العمل أو رخص القيادة',
      'العائلات المتقدمة بطلب استثناء إنساني لكفالة الوالدين أو تمديد إقامة الأبناء أو الحالات الإنسانية',
      'الشركات المتقدمة بخطابات التظلم الإداري أو طلبات الإعفاء من المخالفات لاقتصادية دبي أو الموارد البشرية أو البلدية',
    ],
    galleryImages: COMMON_GALLERY,
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'Case Facts & Supporting Evidence Review',
        titleAr: 'دراسة وقائع الطلب والمستندات المؤيدة',
        descEn: 'Reviewing your medical, financial, travel, or corporate circumstances to highlight the strongest legal and humanitarian grounds.',
        descAr: 'مراجعة الأسباب والمستندات الطبية أو المالية أو الإدارية لإبراز أقوى المبررات القانونية والإنسانية في الخطاب.',
        durationEn: '10 Mins',
        durationAr: '10 دقائق',
      },
      {
        stepNumber: 2,
        titleEn: 'Formal Classical Arabic / Bilingual Drafting',
        titleAr: 'الصياغة الرسمية باللغة العربية القانونية / ثنائية اللغة',
        descEn: 'Drafting the official letter or petition addressed with proper ministerial titles and statutory references.',
        descAr: 'كتابة الخطاب أو الالتماس بالألقاب الرسمية الصحيحة والأسانيد القانونية المعتمدة لدى الجهة الموجه إليها.',
        durationEn: '15 - 20 Mins',
        durationAr: '15 - 20 دقيقة',
      },
      {
        stepNumber: 3,
        titleEn: 'Printout, Signature Formatting & Portal Upload',
        titleAr: 'الطباعة الفورية والرفع الإلكتروني للمعاملة',
        descEn: 'Printing on clean letterhead/format for signature and uploading directly with your Amer, Tasheel, DET, or Court application.',
        descAr: 'طباعة الخطاب للتوقيع أو الختم ورفعه إلكترونياً فوراً ضمن معاملتك لدى آمر أو تسهيل أو اقتصادية دبي.',
        durationEn: 'Instant',
        durationAr: 'فوري',
      },
    ],
    faqs: [
      {
        questionEn: 'Why must fine reduction and humanitarian appeal letters to GDRFA Dubai be written in formal Arabic?',
        questionAr: 'لماذا يُشترط كتابة رسائل الاسترحام وتخفيض الغرامات الموجهة لإقامة دبي باللغة العربية الفصحى؟',
        answerEn: 'Arabic is the official statutory language of all UAE ministerial and judicial committees. A well-structured classical Arabic mercy petition that clearly references your timeline and attached evidence is reviewed directly by the committee judges without ambiguity.',
        answerAr: 'اللغة العربية هي اللغة الرسمية لكافة اللجان الوزارية والقضائية في دولة الإمارات؛ ولذلك فإن صياغة خطاب الاسترحام بلغة عربية قانونية رصينة ومرتبة تسهل على أعضاء اللجنة دراسة الحالة والموافقة عليها بسرعة.',
      },
    ],
    reviews: [
      {
        name: 'Samira Al-Bakri',
        roleEn: 'HR & Admin Officer',
        roleAr: 'مسؤولة الموارد البشرية والشؤون الإدارية',
        companyEn: 'Al-Bakri Medical Supplies',
        companyAr: 'البكري للمستلزمات الطبية',
        rating: 5,
        date: 'October 2026',
        commentEn: 'Their senior Arabic typist drafted a humanitarian petition for my father’s residency exemption and an overstay fine appeal. Approved on the first review by GDRFA!',
        commentAr: 'قام كاتب العرائض المختص لديهم بصياغة خطاب استثناء إنساني لإقامة والدي والتماس تخفيض غرامات بلغة عربية بليغة جداً، وتمت الموافقة عليه من أول تقديم في إقامة دبي!',
      },
    ],
    targetKeywords: {
      shortTail: [
        'noc letter typing dubai',
        'arabic petition typing dubai',
        'mercy appeal letter gdrfa dubai',
        'official arabic letter typing karama',
        'sponsor noc typing dubai',
      ],
      longTail: [
        'arabic mercy letter typing for overstay fine reduction gdrfa dubai',
        'humanitarian appeal letter typing for parent visa sponsorship dubai',
        'official arabic and english noc letter typing center karama',
        'government grievance and ministerial petition letter drafting dubai',
      ],
    },
  },

  'typing-corporate-pro-resolutions-contracts': {
    detailedOverviewEn:
      'Corporate Board Resolutions, Legal Contracts & Golden Visa Dossier Typing at Karama Business Center (KBC) serves company founders, CEOs, PROs, and high-net-worth investors requiring executive-grade corporate documentation. Whether you are preparing a Board of Directors Resolution to open a corporate bank account (Emirates NBD, FAB, ADCB, Mashreq, Wio), drafting a bilateral Commercial Agency, Consultancy, or Joint Venture Agreement, compiling a complete 10-Year UAE Golden Visa nomination dossier (for investors, real estate owners, doctors, engineers, or executives), or preparing specimen signature cards and UBO (Ultimate Beneficial Owner) declarations, our corporate typing desk delivers flawless bilingual documents in under 60 minutes.',
    detailedOverviewAr:
      'تخدم خدمة "صياغة وطباعة قرارات مجالس الإدارة، العقود التجارية، وملفات ترشيح الإقامة الذهبية" في مركز الكرامة للأعمال (KBC) أصحاب الشركات، الرؤساء التنفيذيين، مندوبي العلاقات الحكومية (PRO)، والمستثمرين الباحثين عن وثائق مؤسسية عالية الاحترافية. سواء كنت تجهز قرار شركاء أو مجلس إدارة لفتح حساب بنكي للشركة، أو تصوغ عقد شراكة أو استشارات أو توريد تجاري ثنائي اللغة، أو تعد ملفاً متكاملاً لترشيح الإقامة الذهبية لمدة 10 سنوات (للمستثمرين وملاك العقارات والأطباء والمهندسين والمديرين التنفيذيين)، أو تجهز إقرارات المستفيد الحقيقي (UBO)، ينجز مكتبنا المستندات بدقة قانونية تامة خلال أقل من 60 دقيقة.',
    legalFrameworkEn:
      'Aligned with UAE Federal Decree-Law No. 32 of 2021 on Commercial Companies, Central Bank of the UAE Corporate KYC/UBO rules, and ICP Golden Visa nomination standards.',
    legalFrameworkAr:
      'متوافقة مع المرسوم بقانون اتحادي رقم 32 لسنة 2021 بشأن الشركات التجارية، وضوابط المصرف المركزي لفتح الحسابات البنكية والمستفيد الحقيقي (UBO)، ومعايير الهيئة الاتحادية للإقامة الذهبية.',
    eligibilityEn: [
      'LLC and Free Zone companies preparing Board Resolutions for Corporate Bank Account opening or signatory changes',
      'Investors, Doctors, Engineers, and Executives compiling 10-Year UAE Golden Visa nomination portfolios',
      'Businesses drafting Bilingual Commercial Contracts, Non-Disclosure Agreements (NDAs), Service Agreements, and Employment Addendums',
      'Companies filing Ultimate Beneficial Owner (UBO) and Economic Substance Regulation (ESR) registers',
    ],
    eligibilityAr: [
      'شركات البر الرئيسي والمناطق الحرة الراغبة في إعداد قرارات مجلس الإدارة لفتح الحسابات البنكية أو تعديل المخولين بالتوقيع',
      'المستثمرون والأطباء والمهندسون والمديرون التنفيذيون الراغبون في تجهيز ملفات الترشح للإقامة الذهبية (10 سنوات)',
      'الشركات الراغبة في صياغة العقود التجارية ثنائية اللغة، اتفاقيات عدم الإفصاح (NDA)، وعقود تقديم الخدمات',
      'المنشآت الملزمة بتجهيز سجلات وإقرارات المستفيد الحقيقي (UBO) والامتثال المؤسسي',
    ],
    galleryImages: COMMON_GALLERY,
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'Corporate Trade License & Bank / Ministry Audit',
        titleAr: 'مراجعة الرخصة التجارية ومتطلبات البنك أو الوزارة',
        descEn: 'Verifying your MOA powers, shareholder structure, or Golden Visa category criteria.',
        descAr: 'تدقيق صلاحيات عقد التأسيس وهيكل الشركاء أو شروط فئة الإقامة الذهبية المستهدفة.',
        durationEn: '15 Mins',
        durationAr: '15 دقيقة',
      },
      {
        stepNumber: 2,
        titleEn: 'Bilingual Corporate Resolution / Contract Drafting',
        titleAr: 'صياغة القرار المؤسسي أو العقد التجاري ثنائي اللغة',
        descEn: 'Formatting side-by-side Arabic and English corporate instruments ready for company seal or Notary Public attestation.',
        descAr: 'إعداد القرار أو العقد بجدول مزدوج بالعربية والإنجليزية جاهز للختم المؤسسي أو توثيق الكاتب العدل.',
        durationEn: '30 - 45 Mins',
        durationAr: '30 - 45 دقيقة',
      },
      {
        stepNumber: 3,
        titleEn: 'Dossier Compilation & Direct Submission',
        titleAr: 'تجميع الملف النهائي والتقديم الإلكتروني',
        descEn: 'Delivering editable Word + PDF + printed copies or lodging directly with our Notary, DET, or Amer Golden Visa counters.',
        descAr: 'تسليم نسخ مطبوعة ورقمية أو تحويل الملف مباشرة لكاونتر الكاتب العدل أو اقتصادية دبي أو آمر للإقامة الذهبية.',
        durationEn: 'Instant',
        durationAr: 'فوري',
      },
    ],
    faqs: [
      {
        questionEn: 'Can you draft a Board Resolution that meets the exact compliance checklist of UAE corporate banks?',
        questionAr: 'هل تقومون بصياغة قرارات الشركاء ومجلس الإدارة وفق الصيغ المعتمدة لدى البنوك الإماراتية؟',
        answerEn: 'Yes! We maintain the latest 2026 corporate compliance templates required by Emirates NBD, FAB, ADCB, Mashreq, Dubai Islamic Bank, and Wio Bank—explicitly specifying authorized signatories, single/joint limits, online banking powers, and UBO declarations.',
        answerAr: 'نعم بالتأكيد! نمتلك أحدث النماذج القانونية المعتمدة لعام 2026 لدى بنك الإمارات دبي الوطني، أبوظبي الأول، أبوظبي التجاري، المشرق، دبي الإسلامي، وWio، شاملة صلاحيات التوقيع والخدمات المصرفية الإلكترونية وإقرارات المستفيد الحقيقي.',
      },
    ],
    reviews: [
      {
        name: 'Viktor Novak',
        roleEn: 'Founder & CEO',
        roleAr: 'المؤسس والرئيس التنفيذي',
        companyEn: 'Novak Fintech FZCO',
        companyAr: 'نوفاك للتكنولوجيا المالية',
        rating: 5,
        date: 'September 2026',
        commentEn: 'Prepared our bilingual Board Resolution for Emirates NBD corporate account opening and compiled my Executive Golden Visa nomination file in one hour at Karama Business Center.',
        commentAr: 'جهزوا لنا قرار مجلس الإدارة ثنائي اللغة لفتح حساب الشركة في بنك الإمارات دبي الوطني، وأعدوا ملف ترشيحي للإقامة الذهبية لفئة المديرين التنفيذيين خلال ساعة واحدة.',
      },
    ],
    targetKeywords: {
      shortTail: [
        'board resolution typing dubai',
        'corporate contract drafting dubai',
        'golden visa nomination typing dubai',
        'ubo declaration typing dubai',
        'pro document typing karama',
      ],
      longTail: [
        'bilingual board resolution typing for corporate bank account opening dubai',
        'golden visa dossier preparation and nomination typing center karama',
        'commercial agreement and nda bilingual arabic english drafting dubai',
        'company partner resolution and poa typing service dubai',
      ],
    },
  },

  'typing-embassy-consulate-visa-dockets': {
    detailedOverviewEn:
      'Embassy Attestation Dockets, MOJ E-Forms & Vital Record Typing at Karama Business Center (KBC) bridges the gap between raw personal/academic certificates and strict diplomatic portal gatekeepers. Before submitting degrees, marriage certificates, birth records, or commercial agencies to the UAE Ministry of Foreign Affairs (MOFA), the UAE Ministry of Justice (MOJ), or foreign embassies and consulates in Dubai (including the Indian Consulate IVS Global / BLS forms, UK, USA, Philippine, Pakistan, Egyptian, and Schengen consular portals), every seal, serial number, and party name must be indexed onto electronic pre-registration forms. Our specialists prepare error-free digital dockets, schedule consular appointments, and attach sworn translations in one visit.',
    detailedOverviewAr:
      'تعمل خدمة "تجهيز وطباعة ملفات واستمارات تصديق السفارات والقنصليات ووزارة العدل والخارجية" في مركز الكرامة للأعمال (KBC) كحلقة وصل دقيقة بين وثائقكم الأصلية وبوابات التدقيق الإلكتروني الدبلوماسية. فقبل تقديم الشهادات الجامعية أو عقود الزواج أو شهادات الميلاد أو الوكالات التجارية إلى وزارة الخارجية الإماراتية (MOFA) أو وزارة العدل (MOJ) أو القنصليات والسفارات الأجنبية في دبي (مثل استمارات القنصلية الهندية BLS/IVS، والفلبينية، والمصرية، والبريطانية، والأمريكية، وملفات تأشيرات شنغن)، يجب فهرسة كافة الأختام والأرقام المتسلسلة والأسماء في الاستمارات الإلكترونية المسبقة. ويتولى فريقنا تجهيز الملف الكامل وحجز المواعيد القنصلية وإرفاق الترجمة المعتمدة في زيارة واحدة.',
    legalFrameworkEn:
      'Compliant with UAE Ministry of Foreign Affairs (MOFAIC) Smart Attestation portal rules, UAE Ministry of Justice E-Services standards, and Foreign Consular Mission docket specifications.',
    legalFrameworkAr:
      'متوافقة مع ضوابط البوابة الذكية للتصديقات بوزارة الخارجية الإماراتية، ومعايير الخدمات الإلكترونية لوزارة العدل، واشتراطات البعثات القنصلية الأجنبية بدبي.',
    eligibilityEn: [
      'Applicants preparing MOFA or Ministry of Justice electronic attestation applications and courier airway bills',
      'Expatriates requiring Consulate Docket Typing (Passport renewal forms, birth registration, affidavit forms, PCC applications)',
      'Students and professionals preparing UAE Ministry of Education (MoE) Equivalency & DataFlow online portfolios',
      'Executives and families requiring International Visa / Schengen / US / UK / Canada application dossier typing',
    ],
    eligibilityAr: [
      'المتقدمون لتجهيز استمارات التصديق الإلكتروني لوزارة الخارجية ووزارة العدل وبوالص الشحن الدبلوماسي',
      'المقيمون الراغبون في طباعة استمارات القنصليات (تجديد الجوازات، تسجيل المواليد، الإقرارات القنصلية، وطلبات التصديق)',
      'الطلاب والمهنيون الراغبون في تجهيز ملفات معادلة الشهادات الجامعية عبر بوابة وزارة التربية والتعليم وDataFlow',
      'رجال الأعمال والعائلات الراغبون في طباعة وتجهيز ملفات التأشيرات الدولية (شنغن، أمريكا، بريطانيا، كندا)',
    ],
    galleryImages: COMMON_GALLERY,
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'Certificate & Stamp Chain Inspection',
        titleAr: 'فحص الشهادة وتسلسل الأختام الدبلوماسية',
        descEn: 'Verifying every notary, education board, foreign ministry, and embassy seal on your original certificate.',
        descAr: 'تدقيق كافة أختام الكاتب العدل ووزارة التعليم والخارجية والسفارة الموجودة على المستند الأصلي.',
        durationEn: '15 Mins',
        durationAr: '15 دقيقة',
      },
      {
        stepNumber: 2,
        titleEn: 'Electronic Portal Indexing & Form Typing',
        titleAr: 'الفهرسة الإلكترونية وطباعة الاستمارات الرسمية',
        descEn: 'Entering all document metadata into the MOFA, MOJ, MoE, or Consulate portal and generating barcode vouchers.',
        descAr: 'إدخال بيانات المستند بدقة في بوابة الخارجية أو العدل أو التربية أو القنصلية وإصدار إيصالات الباركود.',
        durationEn: '15 - 30 Mins',
        durationAr: '15 - 30 دقيقة',
      },
      {
        stepNumber: 3,
        titleEn: 'Atlas Attestation Handover or Appointment Booking',
        titleAr: 'التسليم لمكتب أطلس للتصديق أو حجز الموعد القنصلي',
        descEn: 'Handing the docket directly to our in-house Atlas Attestation courier desk or booking your priority consulate slot.',
        descAr: 'تسليم الملف مباشرة لقسم أطلس للتصديقات داخل مركزنا أو تأكيد موعدك القنصلي وتسليمك الحافظة الكاملة.',
        durationEn: 'Instant',
        durationAr: 'فوري',
      },
    ],
    faqs: [
      {
        questionEn: 'Why do online MOFA or Ministry of Education applications get rejected when self-typed?',
        questionAr: 'لماذا تُرفض طلبات تصديق الخارجية أو معادلة الشهادات عند تعبئتها بشكل غير متخصص؟',
        answerEn: 'Most rejections happen because applicants upload the wrong document side (missing the reverse-side embassy seal), select the wrong tariff category (Personal vs. Commercial), or attach an un-stamped translation. Our typing desk eliminates all three causes of rejection.',
        answerAr: 'تحدث معظم حالات الرفض بسبب عدم مسح ظهر الوثيقة الذي يحمل أختام السفارة بدقة، أو اختيار فئة رسوم خاطئة، أو إرفاق ترجمة غير ممهورة بختم وزارة العدل؛ ويضمن مكتبنا تفادي هذه الأخطاء تماماً.',
      },
    ],
    reviews: [
      {
        name: 'Priya Nair',
        roleEn: 'Clinical Pharmacist',
        roleAr: 'صيدلانية إكلينيكية',
        companyEn: 'Aster Healthcare Group',
        companyAr: 'مجموعة أستر للرعاية الصحية',
        rating: 5,
        date: 'October 2026',
        commentEn: 'Prepared my entire MoE Equivalency, DataFlow, and Consulate attestation docket at Karama Business Center in 30 minutes. Every single form was accepted on the first try.',
        commentAr: 'جهزت ملف معادلة الشهادة وداتا فلو واستمارات تصديق القنصلية بالكامل في مركز الكرامة للأعمال خلال 30 دقيقة، وتم قبول جميع النماذج من أول مرة.',
      },
    ],
    targetKeywords: {
      shortTail: [
        'attestation typing center dubai',
        'mofa online application typing',
        'consulate form typing karama',
        'moe equivalency application typing',
        'moj e-form typing dubai',
      ],
      longTail: [
        'degree and marriage certificate attestation docket typing karama dubai',
        'ministry of education equivalency and dataflow typing service dubai',
        'consulate passport renewal and affidavit form typing center dubai',
        'mofa and ministry of justice online attestation registration dubai',
      ],
    },
  },
};
