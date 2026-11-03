import { DepartmentRichDetails, ServiceRichDetails, COMMON_GALLERY } from './extendedDataCommons';
import {
  salemMedicalImg,
  vipMajlisLoungeImg,
  mobileDoorstepUnitImg,
  icpBiometricKioskImg,
  fastTrackConcourseImg,
  goldenVisaOfficeImg,
  businessHubImg,
} from './centerOriginalPhotos';

export const SALEM_RTA_TAWJEEH_TADBEER_VIP_DEPARTMENT_RICH_MAP: Record<string, DepartmentRichDetails> = {
  ohc: {
    heroImage: salemMedicalImg,
    aboutStoryEn:
      'The Occupational Health Card (OHC) Department at Karama Business Center operates under the regulatory auspices of Dubai Municipality (Food Safety & Public Health Department) and Dubai Health Authority. It is the mandatory medical licensing gatekeeper for all personnel working in sectors directly affecting public health, food safety, consumer personal care, and community hygiene across the Emirate of Dubai. According to official Dubai municipal inspection mandates, working in food venues, salons, spas, fitness centers, childcare, or healthcare without an active OHC subjects both the individual employee and the corporate licensee to heavy penalties starting at AED 5,000 per violation. At our accredited facility, we provide on-site clinical physician physical examinations, certified communicable disease blood screening, and laboratory stool tests across all 20 statutory categories—from Food Handlers (AED 222.50) to Barbers & Beauticians (AED 592.50) and DHA Doctor Licenses (AED 822.50)—with automated digital sync into Dubai Municipality and Foodwatch inspection databases within 24 to 48 hours.',
    aboutStoryAr:
      'يُعد قسم بطاقات الصحة المهنية (OHC) في مركز الكرامة للأعمال الذراع الطبية والتنظيمية المعتمدة بالتنسيق مع إدارة سلامة الغذاء والصحة العامة ببلدية دبي وهيئة الصحة بدبي. وهو الجهة المسؤولة عن الترخيص والفحص الطبي الإلزامي لكافة العاملين في القطاعات التي تمس صحة المجتمع وسلامة الأغذية والعناية الشخصية في إمارة دبي. ووفقاً للوائح التفتيش البلدي، فإن مزاولة العمل في المطاعم أو الصالونات أو مراكز اللياقة أو المنشآت الصحية دون بطاقة صحة مهنية سارية يُعرض العامل والمنشأة لغرامات فورية تبدأ من 5,000 درهم وتصل لإغلاق المنشأة. ويوفر مركزنا الفحص السريري لطبيب معتمد، وسحب الدم وفحوصات المختبر لـ 20 فئة معتمدة—بدءاً من متداولي الأغذية (222.50 درهم) وصالونات التجميل (592.50 درهم) وتراخيص الأطباء (822.50 درهم)—مع ربط إلكتروني فوري بأنظمة البلدية ومنصة "فود ووتش" خلال 24 - 48 ساعة.',
    mandateEn:
      'Accredited on-site clinical examination, laboratory screening, and digital issuance/renewal of Occupational Health Cards (OHC) across 20 statutory Dubai Municipality and Dubai Health categories.',
    mandateAr:
      'الفحص السريري والمخبري المعتمد وإصدار وتجديد بطاقات الصحة المهنية (OHC) لـ 20 فئة إلزامية معتمدة من بلدية دبي وهيئة الصحة.',
    galleryImages: COMMON_GALLERY,
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'Category Classification & Digital Token Typing',
        titleAr: 'تحديد الفئة المهنية وطباعة استمارة الفحص المعتمدة',
        descEn: 'Verifying trade license activity and visa designation to map to the exact statutory category (Food Handler AED 222.50, Salon AED 592.50, etc.).',
        descAr: 'تدقيق نشاط الرخصة التجارية والمسمى الوظيفي على التأشيرة لتحديد الفئة المعتمدة بدقة.',
        durationEn: '10 Mins',
        durationAr: '10 دقائق',
      },
      {
        stepNumber: 2,
        titleEn: 'On-Site Clinical Physical & Laboratory Tests',
        titleAr: 'الفحص السريري وسحب العينات المخبرية بالمركز',
        descEn: 'Physician physical exam, blood draw for infectious markers, and laboratory stool culture conducted in our sterile clinic.',
        descAr: 'الفحص السريري من قبل طبيب مرخص وسحب عينات الدم ومزرعة البراز المخبرية في مختبراتنا المعقمة.',
        durationEn: '20 - 30 Mins',
        durationAr: '20 - 30 دقيقة',
      },
      {
        stepNumber: 3,
        titleEn: 'Municipal Sync & Digital OHC Card Handover',
        titleAr: 'الربط البلدي وإصدار بطاقة الصحة المهنية الرقمية',
        descEn: 'Uploading laboratory clearances to Dubai Municipality systems, updating Foodwatch profiles, and issuing the digital OHC.',
        descAr: 'رفع النتائج المخبرية لنظام بلدية دبي وتحديث ملف منصة فود ووتش وإصدار بطاقة الصحة المهنية المعتمدة.',
        durationEn: '24 - 48 Hours',
        durationAr: '24 - 48 ساعة',
      },
    ],
    whyChooseBulletPointsEn: [
      'Official statutory tariffs: Food Handlers AED 222.50 | Construction AED 252.50 | Salons/Spas AED 592.50 | Healthcare AED 622.50 | DHA AED 822.50',
      'All 20 statutory Dubai Municipality categories tested and issued in one location',
      'Accredited clinical examination rooms and sterile sample testing laboratories on-site',
      'Direct integration with Dubai Municipality Foodwatch compliance database',
      'Protects business owners from mandatory AED 5,000+ per-staff municipal inspection penalties',
      'Bulk processing corporate rates and priority appointment blocks for restaurant chains and hotel groups',
    ],
    whyChooseBulletPointsAr: [
      'الرسوم الرسمية المعتمدة: متداولو الأغذية 222.50 درهم | المقاولات 252.50 درهم | الصالونات 592.50 درهم | الرعاية الصحية 622.50 درهم | تراخيص الأطباء 822.50 درهم',
      'تغطية كاملة لكافة الفئات العشرين الإلزامية لبلدية وصحة دبي تحت سقف واحد',
      'عيادات فحص سريري معتمدة ومختبرات طبية متطورة ومطابقة لأعلى معايير التعقيم',
      'ربط إلكتروني فوري ومباشر مع نظام ومنصة "فود ووتش" لسلامة الغذاء',
      'حماية كاملة لأصحاب العمل من مخالفات التفتيش البلدي الفورية (تبدأ من 5,000 درهم)',
      'باقات خصم ومواعيد مجمعة مخصصة لسلاسل المطاعم والفنادق ومجموعات الصالونات',
    ],
    faqs: [
      {
        questionEn: 'Is an Occupational Health Card (OHC) the same as the residence visa Medical Fitness test?',
        questionAr: 'هل بطاقة الصحة المهنية (OHC) هي نفسها فحص اللياقة الطبية للإقامة؟',
        answerEn: 'No! The visa medical fitness test (Salem) only screens for residency eligibility (HIV, Hepatitis B/C, Tuberculosis). The Occupational Health Card (OHC) is an additional mandatory municipal work permit for food, beauty, childcare, and healthcare staff that includes physical doctor examinations and laboratory stool cultures to prevent contamination of the public.',
        answerAr: 'لا، فحص الإقامة الطبي (سالم) يقتصر على خلو المقيم من الأمراض السارية لتثبيت الإقامة، أما بطاقة الصحة المهنية (OHC) فهي تصريح عمل بلدي إضافي إلزامي لقطاعات الأغذية والتجميل والصحة يشمل كشفاً سريرياً وفحوصات مخبرية دقيقة لمنع انتقال العدوى للجمهور.',
      },
    ],
    reviews: [
      {
        name: 'Chef Alessandro Rossi',
        roleEn: 'Executive Chef & Operations Partner',
        roleAr: 'رئيس الطهاة والشريك التشغيلي',
        companyEn: 'Trattoria Bella Dubai',
        companyAr: 'تراتوريا بيلا دبي',
        rating: 5,
        date: 'October 2026',
        commentEn: 'Processed Occupational Health Cards for our entire kitchen and waitstaff (24 employees) at Karama Business Center. Fast clinical exams, exact AED 222.50 tariff, and synced into Foodwatch in 24 hours!',
        commentAr: 'أنجزنا بطاقات الصحة المهنية لكافة طاقم المطبخ والخدمة (24 موظفاً) في مركز الكرامة للأعمال. فحص سريع، رسوم معتمدة 222.50 درهم، وربط فوري في منصة فود ووتش خلال 24 ساعة!',
      },
    ],
    contactDeskEn: 'Occupational Health (OHC) Desk: +971 4 342 6666 · Karama Business Center (Next to Karama Post Office)',
    contactDeskAr: 'مكتب بطاقات الصحة المهنية: 6666 342 4 971+ · مركز الكرامة للأعمال (بجوار بريد الكرامة)',
  },

  salem: {
    heroImage: salemMedicalImg,
    aboutStoryEn:
      'Karama Medical Fitness Express Service Center (KMFC)—internationally accredited by Joint Commission International (JCI) and popularly known across the United Arab Emirates as Karama Medical Center—is Dubai’s premier government-authorized residency screening hub under Dubai Health and the Salem smart portal. Operating in Al Karama, Next to Karama Post Office, our advanced multi-story diagnostic facility processes thousands of residency medical fitness screenings daily. Equipped with high-frequency digital chest X-ray suites, automated immunological analyzer laboratories, and specialized VIP Phlebotomy suites, we offer the fastest turnaround times in the emirate: Super Express 2-Hour VIP Majlis, 6-Hour Same-Day Express, and Standard 24-Hour (at the official baseline tariff of AED 322). We also pioneer specialized accessibility solutions including VIP Car Blood Collection (Drive-Through), on-demand mobile home and corporate office medical screening squads, and mandatory domestic helper vaccination schedules.',
    aboutStoryAr:
      'يُمثل مركز الكرامة للياقة الطبية السريعة (KMFC)—الحاصل على الاعتماد الدولي المشترك (JCI) والمعروف في كافة أرجاء دولة الإمارات باسم "مركز الكرامة الطبي"—الصرح الحكومي الرائد لفحوصات اللياقة الطبية للإقامة بإشراف "صحة دبي" والمنظومة الذكية "سالم". يقع المركز في منطقة الكرامة بجوار بريد الكرامة، ويقدم خدمات الفحص الطبي لآلاف المقيمين يومياً بأعلى المعايير العالمية. وبفضل احتوائه على أحدث أجهزة الأشعة السينية الرقمية للصدر، ومختبرات التحليل المناعي الآلية، وأجنحة سحب الدم لكبار الشخصيات، نوفر أسرع نتائج في دبي: فائق السرعة خلال ساعتين (مجلس VIP)، وعاجل خلال 6 ساعات في نفس اليوم، والفحص العادي خلال 24 ساعة (بالتعرفة الحكومية الرسمية 322 درهماً). كما نتميز بخدمات نوعية تشمل سحب الدم من مقعد السيارة (درايف ثرو)، وفرق الفحص الطبي المتنقلة للمنازل والشركات، وتطعيمات العمالة المساعدة.',
    mandateEn:
      'Authorized residency visa medical fitness testing (2-Hour Super Express, 6-Hour Express, 24-Hour Standard), VIP Drive-Through blood collection, mobile screening squads, domestic vaccinations, and blood typing under Dubai Health and Salem.',
    mandateAr:
      'الفحص الطبي المعتمد للياقة الإقامة (ساعتان فائق السرعة، 6 ساعات عاجل، 24 ساعة عادي)، وسحب الدم من السيارة لكبار الشخصيات، وفرق الفحص المتنقلة للمنازل والمكاتب، وتطعيمات العمالة المساعدة بإشراف صحة دبي ونظام سالم.',
    galleryImages: [
      {
        url: salemMedicalImg,
        titleEn: 'Salem Medical Fitness Waiting Hall',
        titleAr: 'صالة انتظار مركز سالم للياقة الطبية',
        captionEn: 'Main diagnostic waiting area with glowing blue neon Salem branding and express token calling.',
        captionAr: 'صالة الانتظار الرئيسية بشعار سالم النيوني المضيء ونظام النداء الآلي.',
      },
      {
        url: vipMajlisLoungeImg,
        titleEn: 'VIP 2-Hour Express Medical Phlebotomy Suite',
        titleAr: 'جناح سحب الدم وفحص الساعتين لكبار الشخصيات',
        captionEn: 'Private phlebotomy and expedited medical screening within the luxury VIP Majlis lounge.',
        captionAr: 'أجنحة خاصة لسحب الدم والفحص السريع لكبار الشخصيات في راحة تامة.',
      },
      {
        url: mobileDoorstepUnitImg,
        titleEn: 'Mobile Doorstep Medical Screening Squad',
        titleAr: 'حافلة الفحص الطبي المتنقلة للمنازل والشركات',
        captionEn: 'Official Tanfeed & Salem mobile medical fitness testing truck dispatched across Dubai.',
        captionAr: 'حافلة الفحص الطبي والعيادة المتنقلة المعتمدة من سالم وصحة دبي.',
      },
      {
        url: fastTrackConcourseImg,
        titleEn: 'Express Walkway to Amer Stamping',
        titleAr: 'المسار السريع بين الفحص الطبي وإقامة دبي',
        captionEn: 'Direct indoor concourse connecting Salem Medical results directly to Amer residency visa counters.',
        captionAr: 'ممر داخلي مباشر يربط نتائج فحص سالم بكاونترات آمر لتثبيت الإقامة فوراً.',
      },
    ],
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'Registration & Smart Salem Token Issuance',
        titleAr: 'التسجيل الذكي وإصدار رمز فحص سالم',
        descEn: 'Passport and visa verification with instant token generation linking your Emirates ID registration to Dubai Health Salem.',
        descAr: 'مطابقة الجواز والتأشيرة وإصدار رقم التتبع الذكي المربوط مباشرة بنظام الهوية الاتحادية وصحة دبي.',
        durationEn: '5 Mins',
        durationAr: '5 دقائق',
      },
      {
        stepNumber: 2,
        titleEn: 'Digital Chest X-Ray & VIP Blood Phlebotomy',
        titleAr: 'الأشعة السينية الرقمية للصدر وسحب عينة الدم',
        descEn: 'Low-radiation pulmonary radiography and quick blood draw conducted by licensed Dubai Health medical professionals.',
        descAr: 'إجراء أشعة الصدر الرقمية منخفضة الإشعاع وسحب عينة الدم في دقائق معدودة بإشراف كادر طبي وتمريضي معتمد.',
        durationEn: '10 - 15 Mins',
        durationAr: '10 - 15 دقيقة',
      },
      {
        stepNumber: 3,
        titleEn: 'Automated Lab Analysis & GDRFA Immigration Sync',
        titleAr: 'التحليل المخبري الآلي والربط الفوري مع إقامة دبي',
        descEn: 'Immunoassay screening for infectious markers with instant electronic certificate upload to GDRFA Amer for visa stamping.',
        descAr: 'فحص العينات مخبرياً ورفع شهادة اللياقة الطبية الرقمية فوراً لنظام إقامة دبي (آمر) لتثبيت الإقامة دون تأخير.',
        durationEn: '2h / 6h / 24h',
        durationAr: 'ساعتان / 6 ساعات / 24 ساعة',
      },
    ],
    whyChooseBulletPointsEn: [
      'Official baseline government tariff: AED 322 Standard 24-Hour test with zero hidden markups',
      'Fastest certified residency turnaround in Dubai: Super Express 2-Hour VIP Majlis & 6-Hour Same-Day results',
      'Pioneering VIP Drive-Through Car Blood Collection: remain comfortably seated in your vehicle',
      'Certified Mobile Screening Squads dispatched to luxury villas and corporate boardrooms across Dubai',
      'Complete female domestic worker screening, pregnancy testing, and mandatory Hepatitis B vaccinations',
      'Seamless on-site coordination: complete Medical, Amer visa stamping, and Emirates ID under one roof',
    ],
    whyChooseBulletPointsAr: [
      'التعرفة الحكومية الرسمية المعتمدة: 322 درهماً للفحص العادي (24 ساعة) بشفافية تامة',
      'أسرع نتائج طبية للإقامة في دبي: فائق السرعة خلال ساعتين بمجلس كبار الشخصيات وعاجل خلال 6 ساعات',
      'خدمة سحب الدم الرائدة من مقعد السيارة (Drive-Through) دون مغادرة مركبتك',
      'فرق طبية متنقلة معتمدة تصل إلى الفلل الفاخرة ومقار الشركات في كافة مناطق دبي',
      'فحص شامل للعمالة المساعدة للإناث، واختبارات الحمل، والتطعيمات الإلزامية لالتهاب الكبد الوبائي (B)',
      'تكامل فريد للخدمات: الفحص الطبي، وتثبيت الإقامة لدى آمر، وبصمة الهوية تحت سقف واحد بمركز الكرامة',
    ],
    faqs: [
      {
        questionEn: 'How does the 2-Hour Super Express Medical Fitness test work at Karama Medical Center?',
        questionAr: 'كيف تعمل خدمة الفحص الطبي فائق السرعة خلال ساعتين في مركز الكرامة الطبي؟',
        answerEn: 'Applicants are welcomed into our private VIP Majlis Lounge where dedicated phlebotomists collect their blood sample and escort them through our priority X-ray suite. The sample is prioritized in our on-site automated lab, and the official Dubai Health certificate is issued and uploaded to GDRFA in under 120 minutes.',
        answerAr: 'يستقبل المتعامل في مجلس كبار الشخصيات الخاص (VIP Majlis) حيث يتولى كادر تمريضي متخصص سحب الدم ومرافقته لجهاز الأشعة المباشر دون أي انتظار، وتُعطى العينات أولوية قصوى بالمختبر لتصدر النتيجة وتُرفع لإقامة دبي خلال أقل من 120 دقيقة.',
      },
    ],
    reviews: [
      {
        name: 'Lord Arthur Wellesley',
        roleEn: 'Private Equity Investor',
        roleAr: 'مستثمر في الملكية الخاصة',
        companyEn: 'Wellesley Capital Partners',
        companyAr: 'وليزلي كابيتال بارتنرز',
        rating: 5,
        date: 'October 2026',
        commentEn: 'Received my certified Salem medical fitness certificate in exactly 1 hour and 45 minutes in their VIP Majlis, and walked 20 steps to their Amer counter to finalize my 10-Year Golden Visa stamping. Unmatched elegance and speed.',
        commentAr: 'استلمت شهادة الفحص الطبي المعتمدة من نظام سالم في غضون ساعة و45 دقيقة فقط في مجلس كبار الشخصيات، ثم توجهت لكاونتر آمر المجاور لتثبيت الإقامة الذهبية (10 سنوات). سرعة ورقي لا مثيل لهما.',
      },
    ],
    contactDeskEn: 'Karama Medical Fitness Center (KMFC / Salem): +971 4 342 6666 · Al Karama (Next to Karama Post Office)',
    contactDeskAr: 'مركز الكرامة للياقة الطبية (سالم): 6666 342 4 971+ · الكرامة (بجوار بريد الكرامة)',
  },

  rta: {
    heroImage: fastTrackConcourseImg,
    aboutStoryEn:
      'The Roads & Transport Authority (RTA Dubai) Department at Karama Business Center is an authorized government service hub connecting motorists, commercial fleet owners, and expatriate residents with official transport and vehicle licensing systems. With direct electronic linkage to RTA licensing servers and the Federal Traffic System (Federal Police), our liaison desk handles instant Dubai Driving License renewals (coordinating certified on-site eye testing), official International Driving Permit (IDP) booklet issuances (valid across 150+ countries), annual vehicle registration (Mulkiya) renewals, vehicle ownership transfers with electronic sales contracts, and live unified traffic fine inquiries and black point settlements.',
    aboutStoryAr:
      'يقدم قسم خدمات هيئة الطرق والمواصلات بدبي (RTA) في مركز الكرامة للأعمال بوابة حكومية معتمدة لربط السائقين وأصحاب الشركات وأساطيل المركبات بالمنظومة المرورية الذكية للهيئة. ومن خلال الربط الإلكتروني المباشر مع خوادم التراخيص بهيئة الطرق والنظام المروري الاتحادي، ينجز مكتبنا التجديد الفوري لرخص القيادة بدبي (مع توفير فحص النظر المعتمد بالمركز)، وإصدار كتيب رخصة القيادة الدولية (IDP) المعتمدة في أكثر من 150 دولة، والتجديد السنوي لملكية المركبات (الملكية)، ونقل ملكية المركبات مع توقيع عقود البيع الإلكترونية، والاستعلام الفوري عن المخالفات وسدادها وإدارة النقاط السوداء.',
    mandateEn:
      'Authorized processing of Dubai Driving License renewals, International Driving Permits (IDP), annual vehicle Mulkiya renewals, vehicle ownership transfers, and traffic fine inquiries and settlements under RTA Dubai authority.',
    mandateAr:
      'التجديد الفوري لرخص القيادة بدبي، إصدار رخص القيادة الدولية (IDP)، تجديد ملكيات المركبات السنوية، نقل الملكية، والاستعلام وسداد المخالفات المرورية تحت مظلة هيئة الطرق والمواصلات بدبي.',
    galleryImages: COMMON_GALLERY,
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'Traffic File Inquiry & Prerequisite Check',
        titleAr: 'الاستعلام عن الملف المروري وفحص المتطلبات',
        descEn: 'Checking your Traffic Code (T.C. No.), vehicle testing inspection status (Tasjeel/Shamil), insurance validity, and pending fines.',
        descAr: 'الاستعلام عن الرمز المروري وحالة الفحص الفني للمركبة (تسجيل/شامل) ووثيقة التأمين والمخالفات العالقة.',
        durationEn: '5 Mins',
        durationAr: '5 دقائق',
      },
      {
        stepNumber: 2,
        titleEn: 'On-Site Eye Test / Electronic Contract Execution',
        titleAr: 'إجراء فحص النظر أو توقيع عقد نقل الملكية',
        descEn: 'Completing the accredited RTA eye test or executing the electronic vehicle purchase and sale agreement between buyer and seller.',
        descAr: 'إجراء فحص النظر المعتمد لدى الهيئة بالمركز أو توثيق وتوقيع عقد بيع وشراء المركبة إلكترونياً بين الطرفين.',
        durationEn: '10 - 15 Mins',
        durationAr: '10 - 15 دقيقة',
      },
      {
        stepNumber: 3,
        titleEn: 'Instant RTA License / Digital Mulkiya Issuance',
        titleAr: 'إصدار رخصة القيادة أو الملكية الرقمية فوراً',
        descEn: 'Printing the physical card or instantly adding the new digital license/Mulkiya to your Apple/Google Wallet.',
        descAr: 'طباعة البطاقة الذكية أو إضافتها فوراً لمحفظة آبل وجوجل بالهاتف وتحديث سجلات الشرطة والمرور.',
        durationEn: 'Instant Handover',
        durationAr: 'تسليم فوري',
      },
    ],
    whyChooseBulletPointsEn: [
      'Instant Dubai Driving License renewal with accredited optical eye testing coordinated in the same building',
      'Official International Driving Permit (IDP) issued on the spot—valid across 150+ countries worldwide',
      'Annual vehicle Mulkiya renewal avoiding AED 500 late expiry penalties and police impound risks',
      'Secure buyer-to-seller vehicle ownership transfers with certified electronic contract signing',
      'Live unified traffic fine inquiry across Dubai Police, RTA, and Federal police with instant payment receipts',
      'Commercial fleet renewal and livery permit coordination for corporate delivery vans and trucks',
    ],
    whyChooseBulletPointsAr: [
      'تجديد فوري لرخصة قيادة دبي مع توفير فحص النظر المعتمد لدى هيئة الطرق في نفس المبنى',
      'إصدار فوري لكتيب رخصة القيادة الدولية (IDP) المعتمدة قانونياً في أكثر من 150 دولة حول العالم',
      'تجديد ملكية المركبة (الملكية) وتفادي غرامات انتهاء الملكية (500 درهم) ومخاطر حجز المركبة',
      'نقل ملكية المركبات بصورة آمنة وموثقة بين البائع والمشتري مع توقيع العقود الإلكترونية فوراً',
      'استعلام وسداد فوري للمخالفات المرورية المسجلة لدى شرطة دبي وهيئة الطرق وباقي إمارات الدولة',
      'إنجاز معاملات تجديد أساطيل مركبات الشركات وتصاريح الإعلانات لمركبات التوصيل والشاحنات',
    ],
    faqs: [
      {
        questionEn: 'How long does it take to renew an expired Dubai Driving License at Karama Business Center?',
        questionAr: 'كم يستغرق تجديد رخصة قيادة دبي المنتهية في مركز الكرامة للأعمال؟',
        answerEn: 'The entire process takes approximately 10 to 15 minutes! You can take your approved optical eye test on-site, settle the official RTA government renewal fees, and have your renewed digital driving license added directly to your Apple/Google Wallet with an optional printed plastic card.',
        answerAr: 'تستغرق العملية بالكامل من 10 إلى 15 دقيقة فقط! يمكنك إجراء فحص النظر المعتمد في المركز وسداد الرسوم الرسمية لهيئة الطرق، لتضاف رخصتك المجددة فوراً لمحفظة الهاتف الذكي مع خيار طباعة البطاقة البلاستيكية.',
      },
    ],
    reviews: [
      {
        name: 'Tariq Al-Mansoor',
        roleEn: 'Fleet Logistics Manager',
        roleAr: 'مدير أسطول الخدمات اللوجستية',
        companyEn: 'Velocity Courier Services LLC',
        companyAr: 'فيلوسيتي لخدمات التوصيل',
        rating: 5,
        date: 'October 2026',
        commentEn: 'Renewed our 18 commercial delivery van Mulkiyas and settled traffic fines in one morning at Karama Business Center. Fast, professional, and zero waiting time.',
        commentAr: 'جددنا ملكيات 18 مركبة توصيل تجارية وسددنا المخالفات في صباح يوم واحد بمركز الكرامة للأعمال. سرعة واحترافية وبدون أي طوابير.',
      },
    ],
    contactDeskEn: 'RTA Licensing & Traffic Desk: +971 4 342 6666 · Karama Business Center (Next to Karama Post Office)',
    contactDeskAr: 'مكتب تراخيص ومرور هيئة الطرق: 6666 342 4 971+ · مركز الكرامة للأعمال (بجوار بريد الكرامة)',
  },

  tawjeeh: {
    heroImage: fastTrackConcourseImg,
    aboutStoryEn:
      'Zajel Courier & Tawjeeh Services at Karama Business Center represent the vital logistical and legal bridges mandated by the Ministry of Human Resources & Emiratisation (MoHRE) and the UAE Federal Government. Our licensed Tawjeeh Center hosts interactive labor awareness auditoriums where newly recruited private sector workers participate in mandatory orientation lectures (covering UAE Federal Labour Law Decree-Law No. 33 of 2021, occupational safety, contractual rights, and official dispute filing channels) to receive their mandatory Tawjeeh Certificate required for visa stamping. Complementing this, our authorized Zajel Diplomatic Courier desk provides insured, tamper-proof doorstep delivery across all 7 Emirates for newly issued Emirates ID cards, passports, attested certificates, and judicial deeds.',
    aboutStoryAr:
      'يمثل قسم "زاجل وتوجيه" في مركز الكرامة للأعمال حلقة الوصل اللوجستية والقانونية الحيوية المعتمدة من وزارة الموارد البشرية والتوطين (MoHRE) والحكومة الاتحادية. يضم مركز توجيه المرخص قاعات تدريب وتوعية عمالية حديثة وتفاعلية يتلقى فيها العمال المستقدمون حديثاً بالقطاع الخاص المحاضرات التوجيهية الإلزامية (حول أحكام المرسوم بقانون اتحادي رقم 33 لسنة 2021 بشأن علاقات العمل، والسلامة المهنية، والحقوق التعاقدية، وقنوات الشكاوى الرسمية) لإصدار "شهادة توجيه" الإلزامية لتثبيت الإقامة. وبالتوازي مع ذلك، يتولى مكتب بريد زاجل المعتمد تقديم خدمات الشحن البريدي الدبلوماسي المؤمن والسريع حتى باب المنزل أو المكتب لكافة بطاقات الهوية الصادرة، والجوازات، والشهادات المصدقة.',
    mandateEn:
      'Accredited Tawjeeh worker awareness lectures and certification, MoHRE labour law legal advisory, and secure priority Zajel doorstep document transit across the UAE.',
    mandateAr:
      'عقد محاضرات التوعية العمالية وإصدار شهادات توجيه الإلزامية، وتقديم الاستشارات القانونية لقانون العمل، وخدمات النقل البريدي السريع والمؤمن عبر زاجل في الإمارات.',
    galleryImages: COMMON_GALLERY,
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'Worker Onboarding & Multi-Lingual Class Booking',
        titleAr: 'تسجيل العامل وحجز جلسة التوعية باللغة المناسبة',
        descEn: 'Registering the worker with their MoHRE Work Permit token in our modern auditorium (lectures available in 10+ languages).',
        descAr: 'تسجيل العامل برقم تصريح العمل وحجز مقعده في قاعات التوعية الحديثة (تتوفر المحاضرات بأكثر من 10 لغات).',
        durationEn: '10 Mins',
        durationAr: '10 دقائق',
      },
      {
        stepNumber: 2,
        titleEn: 'Interactive Lecture & Immediate Tawjeeh Certificate',
        titleAr: 'حضور المحاضرة التفاعلية وإصدار شهادة توجيه فوراً',
        descEn: 'Completing the 45-minute orientation on UAE labour rights and workplace safety with instant electronic certificate upload to MoHRE.',
        descAr: 'إتمام المحاضرة الإلزامية (45 دقيقة) وإصدار شهادة توجيه الرقمية ورفعها مباشرة لنظام وزارة الموارد البشرية.',
        durationEn: '45 - 60 Mins',
        durationAr: '45 - 60 دقيقة',
      },
      {
        stepNumber: 3,
        titleEn: 'Zajel Courier Dispatch & Doorstep Handover',
        titleAr: 'التوصيل السريع عبر زاجل والتسليم عند الباب',
        descEn: 'Coordinating insured transit for the worker’s passport and new Emirates ID card straight to their company or residence.',
        descAr: 'تنسيق الشحن المؤمن لجواز السفر وبطاقة الهوية الإماراتية الجديدة حتى باب المنشأة أو مسكن العامل.',
        durationEn: '24 Hours',
        durationAr: '24 ساعة',
      },
    ],
    whyChooseBulletPointsEn: [
      'Accredited MoHRE Tawjeeh training facility with multimedia auditoriums in Al Karama',
      'Multi-lingual awareness lectures delivered in Arabic, English, Urdu, Hindi, Tagalog, Bengali, and Malayalam',
      'Instant generation and upload of the mandatory Tawjeeh Certificate required for residence visa stamping',
      'Dedicated MoHRE legal counselors providing exact end-of-service gratuity and contractual dispute guidance',
      'Zajel priority diplomatic courier delivery ensuring your sensitive identity documents never get lost',
      'Scheduled courier time windows with SMS tracking and digital signature proof of delivery',
    ],
    whyChooseBulletPointsAr: [
      'مركز توجيه معتمد ومجهز بأحدث القاعات التفاعلية وشاشات العرض المتطورة في الكرامة',
      'محاضرات توعوية متعددة اللغات: العربية، الإنجليزية، الأردية، الهندية، التاغالوغ، البنغالية، والمالايالامية',
      'إصدار فوري لشهادة توجيه الإلزامية ورفعها مباشرة لخوادم الوزارة لإنهاء إجراءات تثبيت الإقامة',
      'مستشارون قانونيون معتمدون لحساب مكافأة نهاية الخدمة بدقة وتوضيح بنود العقود وتفادي المنازعات',
      'خدمة بريد زاجل الدبلوماسي المؤمن لضمان تسليم بطاقات الهوية والجوازات دون أي احتمال للفقدان',
      'مواعيد تسليم مجدولة مع إشعارات تتبع نصية وإثبات استلام رقمي موقع عند التسليم',
    ],
    faqs: [
      {
        questionEn: 'Which category of workers is legally required to attend Tawjeeh awareness lectures in Dubai?',
        questionAr: 'ما هي فئات العمال الملزمة قانونياً بحضور محاضرات توجيه في دبي؟',
        answerEn: 'Under MoHRE directives, newly recruited non-exempt skilled and operational workers in Skill Levels 3, 4, and 5 holding private sector work permits must attend a certified Tawjeeh awareness session before their residence visa can be stamped in their passport.',
        answerAr: 'بموجب قرارات وزارة الموارد البشرية والتوطين، يُلزم العمال المستقدمون حديثاً في المستويات المهارية الثالث والرابع والخامس بحضور جلسة توجيه التوعوية قبل استكمال تثبيت تأشيرة الإقامة في جواز السفر.',
      },
    ],
    reviews: [
      {
        name: 'Sunil Varghese',
        roleEn: 'HR Operations Supervisor',
        roleAr: 'مشرف عمليات الموارد البشرية',
        companyEn: 'Gulf Horizon Contracting LLC',
        companyAr: 'أفق الخليج للمقاولات',
        rating: 5,
        date: 'October 2026',
        commentEn: 'We sent our batch of 35 technicians to Karama Business Center for their mandatory Tawjeeh classes. Excellent multi-lingual presentations in Hindi and Tagalog, certificates generated instantly, and Zajel delivered their IDs the next day.',
        commentAr: 'أرسلنا دفعة من 35 فنياً لمركز الكرامة للأعمال لحضور محاضرات توجيه الإلزامية. تنظيم ممتاز ومحاضرات بالهندية والتاغالوغ، وصدرت الشهادات فوراً وسلم زاجل بطاقات الهوية في اليوم التالي.',
      },
    ],
    contactDeskEn: 'Tawjeeh & Zajel Logistics Desk: +971 4 342 6666 · Karama Business Center (Next to Karama Post Office)',
    contactDeskAr: 'مكتب توجيه وبريد زاجل: 6666 342 4 971+ · مركز الكرامة للأعمال (بجوار بريد الكرامة)',
  },

  tadbeer: {
    heroImage: businessHubImg,
    aboutStoryEn:
      'Tadbeer Services at Karama Business Center operates under the official licensing and regulatory supervision of the Ministry of Human Resources & Emiratisation (MoHRE License #DB-8849) governing domestic and household workers across the United Arab Emirates. We manage the complete, transparent, and ethically governed lifecycle for housemaids, nannies, private cooks, drivers, elderly caregivers, and domestic helpers. Whether you choose our Direct Private Sponsorship Package (where the worker is sponsored under the head of the family with unified MoHRE domestic contracts) or our Tadbeer Center Sponsorship Package (where Tadbeer remains the official visa sponsor with zero employer liability and flexible monthly billing), our center handles end-to-end processing: entry permits, Salem medical fitness, biometric Emirates IDs, health insurance policies, and statutory replacement guarantees.',
    aboutStoryAr:
      'يعمل قسم "خدمات تدبير للعمالة المساعدة" في مركز الكرامة للأعمال بموجب الترخيص الرسمي والرقابة المباشرة لوزارة الموارد البشرية والتوطين (رخصة تدبير رقم DB-8849) المنظمة لشؤون واستقدام العمالة المساعدة في دولة الإمارات. ونتولى إدارة الدورة المتكاملة لاستقدام وتأشيرات المساعدين المنزليين والمربيات والطهاة والسائقين الخاصين وجليسي كبار السن وفق أعلى معايير الشفافية والمسؤولية الأخلاقية. وسواء اخترت "باقة الكفالة المباشرة للأسرة" (عبر كفالة رب الأسرة مع العقود الموحدة) أو "باقة كفالة مركز تدبير" (حيث تظل كفالة التأشيرة على تدبير دون أي مسؤولية قانونية على الأسرة مع دفعات شهرية مرنة)، ينجز مركزنا كافة الإجراءات: أذونات الدخول، الفحص الطبي (سالم)، بصمة الهوية، التأمين الصحي، وضمانات الاستبدال القانونية.',
    mandateEn:
      'Official licensing, recruitment, and visa processing for domestic workers (housemaids, nannies, cooks, drivers) under MoHRE Tadbeer regulations with replacement insurance guarantees.',
    mandateAr:
      'الاستقدام والترخيص والتأشيرات الرسمية للعمالة المساعدة (مساعدات المنازل، المربيات، الطهاة، السائقون) وفق أنظمة تدبير وضمانات الاستبدال والتأمين المعتمدة.',
    galleryImages: COMMON_GALLERY,
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'Candidate Selection & Unified Domestic Contract',
        titleAr: 'اختيار السيرة الذاتية وتوقيع عقد العمل الموحد لتدبير',
        descEn: 'Choosing verified candidates from accredited source countries and executing the standardized MoHRE domestic employment contract.',
        descAr: 'اختيار المرشحين المدربين والمفحوصين وتوقيع عقد العمل الموحد المعتمد من وزارة الموارد البشرية.',
        durationEn: 'Day 1',
        durationAr: 'اليوم 1',
      },
      {
        stepNumber: 2,
        titleEn: 'Entry Permit & Medical Fitness / Emirates ID',
        titleAr: 'إصدار إذن الدخول والفحص الطبي وبصمة الهوية',
        descEn: 'Generating the official Tadbeer entry permit and conducting on-site Salem medical screening and biometric capture upon arrival.',
        descAr: 'إصدار إذن الدخول الإلكتروني وإنجاز الفحص الطبي بمركز الكرامة وسحب البصمة البيومترية فور وصول العاملة.',
        durationEn: '24 - 48 Hours',
        durationAr: '24 - 48 ساعة',
      },
      {
        stepNumber: 3,
        titleEn: 'Residency Visa Stamping & Insurance Activation',
        titleAr: 'تثبيت الإقامة وتفعيل وثيقة التأمين والضمان',
        descEn: 'Stamping the 2-year domestic residency permit and activating the comprehensive Tadbeer worker replacement warranty.',
        descAr: 'تثبيت تأشيرة الإقامة لمدة سنتين وتفعيل وثيقة التأمين وضمان استبدال العمالة المعتمدة لدى تدبير.',
        durationEn: 'Same Day',
        durationAr: 'في نفس اليوم',
      },
    ],
    whyChooseBulletPointsEn: [
      'Official MoHRE Tadbeer Center accreditation guaranteeing 100% legal compliance and fee transparency',
      'Choice between Direct Family Sponsorship or Zero-Liability Tadbeer Center Sponsorship packages',
      'Mandatory 2-year contractual replacement warranty in cases of medical unfitness, refusal of work, or absconding',
      'Full health insurance activation, emergency medical coverage, and worker orientation on arrival',
      'Integrated on-site processing: Tadbeer visa, Karama Salem medical, and Emirates ID biometric counters under one roof',
      'Pre-vetted, thoroughly screened, and skilled domestic candidates from the Philippines, Indonesia, Ethiopia, Sri Lanka, Kenya',
    ],
    whyChooseBulletPointsAr: [
      'ترخيص رسمي معتمد من وزارة الموارد البشرية والتوطين يضمن الامتثال القانوني التام والشفافية المالية',
      'حرية الاختيار بين باقة الكفالة المباشرة للأسرة أو باقة كفالة مركز تدبير مع انعدام المسؤولية القانونية',
      'ضمان استبدال رسمي معتمد طوال فترة العقد (سنتان) في حالات عدم اللياقة الطبية أو رفض العمل أو الانقطاع',
      'تفعيل فوري للتأمين الصحي وتغطية الطوارئ وتوعية العاملة بواجباتها وحقوقها فور وصولها',
      'خدمات متكاملة في نفس المبنى: تأشيرة تدبير، فحص سالم الطبي بالكرامة، وبصمة الهوية في محطة واحدة',
      'مرشحون مدربون ومفحوصون طبياً وأمنياً من الفلبين، إندونيسيا، إثيوبيا، سريلانكا، وكينيا',
    ],
    faqs: [
      {
        questionEn: 'What is the salary requirement for an expat sponsor to hire a domestic worker through Tadbeer?',
        questionAr: 'ما هو شرط الراتب لكفالة عامل مساعد أو مدبرة منزل في دبي عبر تدبير؟',
        answerEn: 'Under MoHRE guidelines for direct family sponsorship, the sponsor must have a minimum certified monthly salary of AED 25,000 (supported by salary certificate and bank statements) and an Ejari showing adequate accommodation. If your salary is below this threshold, our Tadbeer Center Sponsorship Package is available with zero salary threshold requirements!',
        answerAr: 'وفق لوائح الوزارة للكفالة الشخصية المباشرة، يشترط أن يكون راتب الكفيل 25,000 درهم شهرياً على الأقل مع عقد إيجاري ملائم. وفي حال كان الراتب أقل من ذلك، توفر "باقة كفالة مركز تدبير" حلاً قانونياً معتمداً بدون اشتراط حد أدنى للراتب!',
      },
    ],
    reviews: [
      {
        name: 'Fatima & Dr. Tariq Al-Nuaimi',
        roleEn: 'Working Parents',
        roleAr: 'أولياء أمور',
        companyEn: 'Jumeirah Golf Estates',
        companyAr: 'جميرا جولف إستيتس',
        rating: 5,
        date: 'October 2026',
        commentEn: 'Processed our Filipino nanny’s Tadbeer visa, Salem medical fitness, and Emirates ID in 48 hours at Karama Business Center. Clear contract terms, full insurance, and complete peace of mind.',
        commentAr: 'أنجزنا تأشيرة المربية الفلبينية وفحص سالم الطبي وبصمة الهوية في 48 ساعة بمركز الكرامة للأعمال. عقود واضحة وضمان استبدال رسمي وراحة بال تامة.',
      },
    ],
    contactDeskEn: 'Tadbeer Domestic Worker Desk: +971 4 342 6666 · Karama Business Center (Next to Karama Post Office)',
    contactDeskAr: 'مكتب تدبير للعمالة المساعدة: 6666 342 4 971+ · مركز الكرامة للأعمال (بجوار بريد الكرامة)',
  },

  'vip-mobile': {
    heroImage: mobileDoorstepUnitImg,
    aboutStoryEn:
      'The VIP & Mobile Doorstep Government Service at Emirates Secretariat Services (ESS) is Dubai’s gold standard in executive concierge government processing. Designed for ultra-high-net-worth individuals, C-suite executives, royal dignitaries, prominent corporate entities, and privacy-conscious families, our luxury fleet of bespoke Mercedes-Benz Sprinter Mobile Happiness Units brings the full government center directly to your doorstep anywhere in Dubai—from Palm Jumeirah, Emirates Hills, and Downtown Dubai to Jumeirah Bay Island and DIFC. Outfitted with satellite-linked ministerial terminals, optical GDRFA/ICP biometric capture pods, digital camera studios, and mobile phlebotomy kits, our Senior Government Liaison Officers complete your entire transaction portfolio—Amer Residency Stamping, Golden Visas, DET Business Licensing, Salem Medical Blood Draws, and Notary Public drafting—in private luxury without you ever stepping foot into a public hall. Alternatively, guests visiting our Karama Business Center headquarters enjoy exclusive access to our Private VIP Majlis Hospitality Suites with dedicated valet parking and private case managers.',
    aboutStoryAr:
      'تُمثل "الخدمة الممتازة وحافلة المعاملات المتنقلة إلى بابك" لدى الإمارات لخدمات رجال الأعمال (ESS) المعيار الرئاسي الأرقى لإنجاز المعاملات الحكومية في إمارة دبي. صُممت هذه الخدمة الاستثنائية لصفوة المستثمرين، كبار التنفيذيين، الشخصيات البارزة، والشركات الكبرى والعائلات الباحثة عن أقصى درجات الخصوصية والرفاهية. يتحرك أسطولنا الفاخر من حافلات مرسيدس-بنز سبرينتر التنفيذية المتنقلة ليصل إلى موقعك في أي مكان بدبي—من نخلة جميرا وتلال الإمارات ووسط مدينة دبي إلى خليج جميرا ومركز دبي المالي العالمي. تحتوي الحافلة على ربط فضائي مشفر بالخوادم الحكومية، وأجهزة التقاط البصمة البيومترية المعتمدة لإقامة دبي والهيئة الاتحادية، واستوديو تصوير رقمي، ومحطة سحب دم طبية متنقلة، لينجز كبار المستشارين معاملاتك بالكامل—تأشيرات الإقامة، الإقامة الذهبية، رخص الأعمال، الفحص الطبي، والتوثيق العدلي—في راحة تامة. كما نرحب بالمتعاملين في أجنحة مجلس كبار الشخصيات الخاص بمركزنا مع خدمة صف السيارات والضيافة العربية الأصيلة.',
    mandateEn:
      'Exclusive on-demand dispatch of luxury Mercedes-Benz mobile government units and executive VIP Majlis suites for discreet, high-priority ministerial transactions across Dubai.',
    mandateAr:
      'إيفاد حافلات مرسيدس الحكومية التنفيذية المتنقلة الفاخرة إلى بابك، واستضافة كبار الشخصيات في أجنحة المجلس الخاص لإنجاز كافة المعاملات الحكومية في خصوصية وسرعة مطلقة.',
    galleryImages: [
      {
        url: vipMajlisLoungeImg,
        titleEn: 'Ultra-Luxury VIP Majlis Hospitality Suite',
        titleAr: 'مجلس كبار الشخصيات الفاخر',
        captionEn: 'Executive VIP hospitality lounge with geometric lighting, camel leather armchairs, and private case managers.',
        captionAr: 'مجلس كبار الشخصيات التنفيذي بالضيافة الإماراتية والمقاعد الجلدية ومديري المعاملات المخصصين.',
      },
      {
        url: mobileDoorstepUnitImg,
        titleEn: 'Official Mobile Government Clinic Truck',
        titleAr: 'حافلة المعاملات الحكومية والطبية المتنقلة',
        captionEn: 'Equipped with satellite link, certified biometrics, and medical phlebotomy dispatched anywhere in Dubai.',
        captionAr: 'مجهزة بالربط الفضائي والبصمة المعتمدة وسحب الدم الطبي تصل لباب دارك أو شركتك في دبي.',
      },
      {
        url: goldenVisaOfficeImg,
        titleEn: 'Exclusive Golden Visa Consultation Office',
        titleAr: 'مكتب استشارات الإقامة الذهبية',
        captionEn: 'Dedicated consultation room for 10-year investor residency applicants.',
        captionAr: 'مكتب استشارات خاص بالمستثمرين ورواد الأعمال لإنجاز الإقامة الذهبية.',
      },
      {
        url: fastTrackConcourseImg,
        titleEn: 'Fast-Track Ground Floor Concourse',
        titleAr: 'البهو الرئيسي ومسارات الخدمة السريعة',
        captionEn: 'Central guidance concourse leading directly to VIP suites and sovereign desks.',
        captionAr: 'البهو الرئيسي الموجه مباشرة لأجنحة كبار الشخصيات والمنصات الحكومية.',
      },
    ],
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'Executive Concierge Booking & Dossier Pre-Audit',
        titleAr: 'حجز الموعد التنفيذي والتدقيق المسبق للملفات',
        descEn: 'Your dedicated Senior Case Director pre-audits all corporate or family paperwork and coordinates your preferred dispatch slot.',
        descAr: 'يتولى مدير العلاقات الحكومية المخصص تدقيق كافة ملفاتك ومستنداتك والتنسيق لتحديد موعد الزيارة المناسب لك.',
        durationEn: 'Scheduled Window',
        durationAr: 'موعد محدد مسبقاً',
      },
      {
        stepNumber: 2,
        titleEn: 'Mobile Van Arrival / VIP Majlis Reception',
        titleAr: 'وصول الحافلة الفاخرة أو الاستقبال في مجلس VIP',
        descEn: 'Our luxury Mercedes Sprinter arrives at your villa or office, or we welcome you to our private Majlis suite with Arabic hospitality.',
        descAr: 'تصل حافلة مرسيدس الفاخرة لعتبة قصرك أو برج شركتك، أو نرحب بك في جناح المجلس الخاص مع كرم الضيافة العربية.',
        durationEn: 'On Your Schedule',
        durationAr: 'حسب جدولك الخاص',
      },
      {
        stepNumber: 3,
        titleEn: 'All-in-One Biometric, Medical & Visa Clearance',
        titleAr: 'إنجاز البصمة والفحص الطبي والتأشيرات دفعة واحدة',
        descEn: 'Biometric fingerprint capture, mobile Salem blood collection, document notarization, and visa stamping finalized on board.',
        descAr: 'إتمام البصمة البيومترية، وسحب الدم الطبي، وتوثيق العقود، وتثبيت التأشيرات على متن الحافلة في زيارة واحدة.',
        durationEn: '15 - 30 Mins',
        durationAr: '15 - 30 دقيقة',
      },
    ],
    whyChooseBulletPointsEn: [
      'Zero commute or center waiting: the complete Dubai Government center arrives at your doorstep',
      'Luxury Mercedes-Benz Sprinter mobile unit equipped with encrypted satellite government terminals',
      'On-board official GDRFA and ICP biometric stations and mobile Salem medical blood collection',
      'Dedicated Senior Case Director assigned exclusively to manage your family or corporate portfolio',
      'Private Executive VIP Majlis suites at Karama Business Center with reserved valet parking and barista hospitality',
      'All transactions (Amer, DET, Tasheel, Notary, Salem, ICP) executed simultaneously in a single session',
    ],
    whyChooseBulletPointsAr: [
      'بدون عناء التنقل أو طوابير الانتظار: المركز الحكومي المتكامل يصل حتى عتبة بابك أينما كنت بدبي',
      'حافلة مرسيدس سبرينتر تنفيذية فاخرة مجهزة بربط فضائي مشفر بأحدث خوادم الوزارات والدوائر',
      'منصات بصمة بيومترية معتمدة لإقامة دبي والهيئة الاتحادية ومحطة سحب دم طبية متنقلة على متن الحافلة',
      'مدير علاقات حكومية أول مخصص لمتابعة وإدارة ملفات عائلتك أو شركتك بشكل حصري',
      'أجنحة مجلس كبار الشخصيات الفاخرة بمركز الكرامة مع مواقف خاصة وخدمة صف السيارات وضيافة استثنائية',
      'إنجاز كافة المعاملات (آمر، اقتصادية دبي، تسهيل، الكاتب العدل، الفحص الطبي، الهوية) في جلسة واحدة',
    ],
    faqs: [
      {
        questionEn: 'Can the VIP Mobile Van process both residency visa biometrics and Salem medical fitness blood tests for my entire family at our villa?',
        questionAr: 'هل يمكن للحافلة المتنقلة إنجاز بصمة الهوية وفحص الدم الطبي للإقامة لكافة أفراد العائلة داخل الفيلا؟',
        answerEn: 'Yes! That is our signature flagship service. Our mobile unit is staffed by a licensed medical phlebotomist and certified biometric officers who capture biometrics and draw blood samples for all family members or corporate executives right inside the mobile van or inside your home in complete privacy.',
        answerAr: 'نعم بالتأكيد! هذه هي خدمتنا الحصرية الرائدة؛ حيث تضم الحافلة ممرضاً مرخصاً وضباط بصمة معتمدين يلتقطون البصمات البيومترية ويسحبون عينات الدم الطبية لكافة أفراد الأسرة أو مسؤولي الشركة داخل الحافلة أو في فيلتك بخصوصية تامة.',
      },
    ],
    reviews: [
      {
        name: 'Sheikh Mansoor Al-Qasimi',
        roleEn: 'Family Office Principal',
        roleAr: 'رئيس المكتب العائلي للاستثمار',
        companyEn: 'Al-Qasimi Holdings',
        companyAr: 'القاسمي القابضة',
        rating: 5,
        date: 'October 2026',
        commentEn: 'Dispatched the ESS Luxury Mobile Van to our Palm Jumeirah villa. Our entire family of six completed our Golden Visa renewals, biometric fingerprinting, and medical blood draws in 45 minutes on our driveway. The absolute pinnacle of government service.',
        commentAr: 'طلبنا حافلة المعاملات المتنقلة الفاخرة من ESS إلى فيلتنا بنخلة جميرا. أنجزت عائلتي المكونة من ستة أفراد تجديد الإقامة الذهبية والبصمة البيومترية وفحص الدم في 45 دقيقة فقط أمام المنزل. قمة الرفاهية الحكومية.',
      },
    ],
    contactDeskEn: 'ESS VIP & Mobile Concierge Desk: +971 4 342 6666 · Mobile Van Dispatch Hub (Dubai Wide)',
    contactDeskAr: 'مكتب الخدمة الممتازة والمتنقلة: 6666 342 4 971+ · مركز انطلاق الحافلات المتنقلة (كافة مناطق دبي)',
  },
};

export const SALEM_RTA_TAWJEEH_TADBEER_VIP_SERVICES_RICH_MAP: Record<string, ServiceRichDetails> = {
  // ============================================================================
  // OHC OCCUPATIONAL HEALTH (4 Dedicated Individual Services)
  // ============================================================================
  'ohc-food-handlers-card': {
    detailedOverviewEn:
      'The Occupational Health Card (OHC) for Food Handlers & Hospitality Personnel is legally mandatory under Dubai Municipality Food Safety regulations for all individuals involved in preparing, serving, handling, packaging, or transporting food and beverages in Dubai restaurants, cafés, cloud kitchens, hotel dining rooms, bakeries, supermarkets, and catering companies. Operating in direct alignment with page 7 of our official price schedule, the government tariff is AED 170 plus the standardized typing fee of AED 52.50, totaling AED 222.50. At our accredited clinic inside Karama Business Center, food handlers undergo comprehensive communicable disease screening, clinical physical examinations, and certified laboratory stool culture tests. Results are synchronized directly with the Dubai Municipality inspection portal and Foodwatch, safeguarding food businesses against strict municipal penalties starting at AED 5,000 per uncertified staff member.',
    detailedOverviewAr:
      'تُعد بطاقة الصحة المهنية (OHC) لمتداولي الأغذية والعاملين في قطاع الضيافة متطلباً قانونياً إلزامياً بموجب لوائح سلامة الغذاء ببلدية دبي لكل من يتصل عمله بإعداد أو طهي أو تقديم أو تعبئة أو نقل الأغذية والمشروبات في مطاعم ومقاهي ومطابخ دبي السحابية وفنادقها والمخابز وشركات التموين. وتماشياً مع الصفحة 7 من قائمة أسعارنا الرسمية المعتمدة، تبلغ الرسوم الحكومية 170 درهماً ورسم الطباعة الموحد 52.50 درهماً، بإجمالي 222.50 درهماً فقط. وفي عياداتنا المعتمدة بمركز الكرامة للأعمال، يخضع متداول الأغذية لفحص سريري وطبي شامل ومزرعة براز مخبرية معتمدة لخلوه من النزلات المعوية والبكتيريا المعدية، مع ربط النتائج آلياً بنظام التفتيش البلدي ومنصة "فود ووتش" لحماية المنشأة من غرامات التفتيش التي تبدأ من 5,000 درهم.',
    legalFrameworkEn:
      'Mandated by Dubai Municipality Food Safety Department Directives, Public Health Local Order No. 11 of 2003, and Foodwatch Inspection Standards (2026 Tariff: AED 222.50).',
    legalFrameworkAr:
      'إلزامية بموجب قرارات إدارة سلامة الغذاء ببلدية دبي، والأمر المحلي رقم 11 لسنة 2003 بشأن الصحة العامة، ومعايير منصة فود ووتش (تعرفة 2026: 222.50 درهم).',
    eligibilityEn: [
      'Chefs, cooks, kitchen stewards, bakers, butchers, and food preparation assistants',
      'Waiters, waitresses, baristas, bartenders, and food/beverage service staff',
      'Supermarket fresh food handlers (deli, fishmonger, produce, bakery)',
      'Food delivery riders, catering drivers, and food warehouse packers in Dubai',
    ],
    eligibilityAr: [
      'الطهاة ومساعدو الطبخ وعمال غسيل الأواني والخبازون والقصابون ومعدو الأطعمة',
      'النوادل ومقدمو الأطعمة والمشروبات والباريستا في المطاعم والمقاهي والفنادق',
      'متداولو الأغذية الطازجة في السوبرماركت (الأجبان، اللحوم، الأسماك، والمخبوزات)',
      'سائقو توصيل الطلبات الغذائية وعمال مخازن الأغذية ومركبات التموين بدبي',
    ],
    galleryImages: COMMON_GALLERY,
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'Application Typing & Foodwatch Verification',
        titleAr: 'طباعة الطلب والربط مع منصة فود ووتش',
        descEn: 'Verifying trade license matching and issuing the official AED 222.50 food handler testing token.',
        descAr: 'مطابقة النشاط التجاري للمطعم وإصدار استمارة الفحص المعتمدة بتعرفة 222.50 درهم.',
        durationEn: '10 Mins',
        durationAr: '10 دقائق',
      },
      {
        stepNumber: 2,
        titleEn: 'Physician Physical & Stool Culture Sample',
        titleAr: 'الكشف السريري لدى الطبيب وتسليم عينة المختبر',
        descEn: 'Clinical examination for skin lesions/respiratory symptoms and submission of certified stool culture sample in our laboratory.',
        descAr: 'الفحص السريري للجلد والجهاز التنفسي وتسليم عينة المختبر المعتمدة للكشف عن البكتيريا المعوية.',
        durationEn: '15 Mins',
        durationAr: '15 دقيقة',
      },
      {
        stepNumber: 3,
        titleEn: 'Lab Clearance & Digital OHC Card Handover',
        titleAr: 'الاعتماد المخبري وإصدار بطاقة الصحة المهنية',
        descEn: 'Microbiological clearance verified on Dubai Municipality systems and active OHC card issued digitally.',
        descAr: 'اعتماد النتيجة المخبرية في نظام بلدية دبي وتحديث فود ووتش وإصدار بطاقة الصحة المهنية فوراً.',
        durationEn: '24 - 48 Hours',
        durationAr: '24 - 48 ساعة',
      },
    ],
    faqs: [
      {
        questionEn: 'What is the exact official total cost for a Food Handler Occupational Health Card in Dubai?',
        questionAr: 'كم تبلغ التكلفة الإجمالية الرسمية لبطاقة الصحة المهنية لمتداولي الأغذية في دبي؟',
        answerEn: 'As verified on page 7 of our official price list: the Dubai Municipality government fee is AED 170.00 and the authorized typing fee is AED 52.50, totaling exactly AED 222.50 with no hidden charges.',
        answerAr: 'وفق الصفحة 7 من قائمة أسعارنا الرسمية: الرسوم الحكومية لبلدية دبي هي 170 درهماً، ورسم الطباعة المعتمد هو 52.50 درهماً، بإجمالي 222.50 درهماً دون أي رسوم إضافية خفية.',
      },
    ],
    reviews: [
      {
        name: 'Chef Tariq Mansour',
        roleEn: 'Head of Culinary',
        roleAr: 'رئيس قسم الطهي',
        companyEn: 'Al Safadi Gourmet Group',
        companyAr: 'مجموعة الصفدي للضيافة',
        rating: 5,
        date: 'October 2026',
        commentEn: 'Processed 15 new kitchen staff OHC cards at Karama Business Center. Clean clinic, courteous doctors, exact AED 222.50 pricing, and immediate Foodwatch reflection.',
        commentAr: 'أنجزنا بطاقات الصحة المهنية لـ 15 طاهياً جديداً بمركز الكرامة للأعمال. عيادات نظيفة وأطباء متميزون ورسوم دقيقة 222.50 درهم مع التحديث الفوري في منصة فود ووتش.',
      },
    ],
    targetKeywords: {
      shortTail: [
        'food handlers card dubai',
        'occupational health card food dubai',
        'ohc card 222 aed dubai',
        'foodwatch ohc test karama',
        'restaurant staff medical card dubai',
      ],
      longTail: [
        'official food handlers occupational health card fee 222.50 aed dubai',
        'dubai municipality foodwatch occupational health card test karama',
        'restaurant chef and waiter medical health card renewal dubai',
        'fast track stool test and ohc card issuance al karama',
      ],
    },
  },

  'ohc-salon-beauty-spa-card': {
    detailedOverviewEn:
      'The Occupational Health Card (OHC) for Barbers, Beauticians, Salons, and Spa Professionals is mandatory for all personal care and aesthetic service providers in Dubai. Because beauticians, hair stylists, massage therapists, nail technicians, and tattoo/piercing specialists come into close physical contact with clients and use sharp grooming implements, Dubai Municipality enforces strict blood-borne disease screening protocols. Reflecting page 7 of our official price schedule, the statutory government fee is AED 540 plus the AED 52.50 typing fee, totaling AED 592.50. At Karama Business Center, salon professionals undergo targeted serological blood testing (for Hepatitis B, Hepatitis C, and HIV) and clinical evaluations, receiving their official digital OHC card in 24 to 48 hours to guarantee full salon inspection compliance.',
    detailedOverviewAr:
      'تُعد بطاقة الصحة المهنية (OHC) لصالونات الحلاقة والتجميل ومراكز السبا متطلباً صحياً وقانونياً إلزامياً لكافة ممارسي مهن العناية الشخصية والتجميل في دبي. ونظراً لطبيعة عمل مصففي الشعر، وخبراء التجميل، وأخصائيي التدليك، وفنيي العناية بالأظافر التي تقتضي الملامسة المباشرة واستخدام أدوات الحلاقة والقص، تفرض بلدية دبي بروتوكول فحص مناعي دقيق لمنع انتقال الفيروسات المنقولة بالدم. وتماشياً مع الصفحة 7 من جدول أسعارنا المعتمد، تبلغ الرسوم الحكومية 540 درهماً ورسم الطباعة 52.50 درهماً، بإجمالي 592.50 درهماً. وفي مركز الكرامة للأعمال، يخضع ممارسو التجميل لفحوصات الدم المعتمدة (لالتهاب الكبد الوبائي B وC وفيروس نقص المناعة) والكشف السريري لإصدار البطاقة الرقمية خلال 24 - 48 ساعة.',
    legalFrameworkEn:
      'Regulated by Dubai Municipality Public Health Local Order No. 11 of 2003, Personal Care & Salon Health Regulations, and Dubai Health Authority directives (Official Tariff: AED 592.50).',
    legalFrameworkAr:
      'خاضعة للأمر المحلي رقم 11 لسنة 2003 لبلدية دبي بشأن الصحة العامة ولوائح صحة صالونات التجميل والعناية الشخصية (التعرفة الرسمية: 592.50 درهم).',
    eligibilityEn: [
      'Gents barbers, hairstylists, and grooming specialists',
      'Ladies salon hairdressers, makeup artists, and aesthetic technicians',
      'Manicurists, pedicurists, and nail bar specialists',
      'Massage therapists, spa attendants, and wellness practitioners',
    ],
    eligibilityAr: [
      'حلاقو ومصففو الشعر الرجالي وأخصائيو العناية الشخصية',
      'مصففات الشعر وخبيرات التجميل والمكياج في الصالونات النسائية',
      'أخصائيو وأخصائيات العناية بالأظافر (مانيكير وباديكير)',
      'أخصائيو التدليك والسبا والعلاج الطبيعي بمراكز الاستجمام',
    ],
    galleryImages: COMMON_GALLERY,
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'Salon Visa Mapping & Application Typing',
        titleAr: 'تدقيق مهنة الصالون وطباعة استمارة الفحص',
        descEn: 'Verifying salon trade license and issuing the AED 592.50 aesthetic category OHC token.',
        descAr: 'مطابقة رخصة الصالون والمسمى المهني وإصدار استمارة فحص فئة التجميل بقيمة 592.50 درهم.',
        durationEn: '10 Mins',
        durationAr: '10 دقائق',
      },
      {
        stepNumber: 2,
        titleEn: 'Serological Blood Draw & Physical Examination',
        titleAr: 'سحب عينة الدم للفحص المناعي والكشف السريري',
        descEn: 'Venous blood collection for Hepatitis B/C and HIV testing, and clinical dermatologist check for skin infections.',
        descAr: 'سحب عينة دم وريدية لفحص التهاب الكبد B وC، وفحص سريري جلدي للتأكد من خلو ممارس المهنة من أي أمراض معدية.',
        durationEn: '15 Mins',
        durationAr: '15 دقيقة',
      },
      {
        stepNumber: 3,
        titleEn: 'Municipal Clearance & Official OHC Issuance',
        titleAr: 'اعتماد بلدية دبي وإصدار بطاقة الصحة المهنية للصالون',
        descEn: 'Direct laboratory result synchronization with Dubai Municipality and instant digital OHC card delivery.',
        descAr: 'ربط النتائج المخبرية إلكترونياً مع نظام بلدية دبي وإصدار بطاقة الصحة المهنية المعتمدة للصالون.',
        durationEn: '24 - 48 Hours',
        durationAr: '24 - 48 ساعة',
      },
    ],
    faqs: [
      {
        questionEn: 'Why is the Occupational Health Card fee higher for salons and barbers (AED 592.50) than for food handlers (AED 222.50)?',
        questionAr: 'لماذا تبلغ رسوم بطاقة الصحة المهنية للصالونات والحلاقين 592.50 درهم مقارنة بـ 222.50 درهم لمتداولي الأغذية؟',
        answerEn: 'Because personal care and salon workers work closely with customer skin and sharp metal tools, Dubai Municipality requires specialized viral serology blood panels (including Hepatitis B surface antigen/antibodies and Hepatitis C), which carry an official government laboratory fee of AED 540 + AED 52.50 typing = AED 592.50.',
        answerAr: 'نظراً لأن العاملين في الصالونات يتعاملون مع أدوات حلاقة وقص قد تسبب جروحاً دقيقة، تشترط بلدية دبي فحوصات مخبرية مناعية متقدمة للدم تشمل التهاب الكبد الوبائي بفصائله، وحددت لها رسماً حكومياً رسمياً قدره 540 درهماً + 52.50 درهم طباعة = 592.50 درهماً.',
      },
    ],
    reviews: [
      {
        name: 'Monique Laurent',
        roleEn: 'Spa Operations Director',
        roleAr: 'مديرة عمليات السبا',
        companyEn: 'L’Etoile Luxury Salons & Spa',
        companyAr: 'صالونات وسبا ليتوال الفاخرة',
        rating: 5,
        date: 'October 2026',
        commentEn: 'Sent our whole team of 12 therapists and beauticians to Karama Business Center for their OHC cards. Clean private clinic, respectful treatment, exact AED 592.50 price, and cards issued in 24 hours.',
        commentAr: 'أرسلنا فريقنا المكون من 12 أخصائية تجميل وتدليك لمركز الكرامة للأعمال لإصدار بطاقات الصحة المهنية. عيادات راقية وفحص احترافي وسعر معتمد 592.50 درهم وصدور البطاقات خلال 24 ساعة.',
      },
    ],
    targetKeywords: {
      shortTail: [
        'salon ohc card dubai',
        'barber occupational health card',
        'beautician health card dubai',
        'spa therapist ohc test dubai',
        'ohc card 592 aed dubai',
      ],
      longTail: [
        'official salon and beautician occupational health card fee 592.50 aed dubai',
        'dubai municipality health card for barbers and beauty therapists karama',
        'hepatitis b and blood screening for salon occupational health card dubai',
        'fast beauty salon staff ohc card issuance and renewal dubai',
      ],
    },
  },

  'ohc-construction-rta-drivers-card': {
    detailedOverviewEn:
      'Occupational Health Cards (OHC) for Construction Workers & RTA Professional Chauffeurs/Drivers are specialized occupational medical certifications mandated by Dubai Municipality and the Roads & Transport Authority to verify fitness for heavy physical labor, industrial occupational safety, and public commercial driving. According to page 7 of our official price schedule: RTA Drivers carry a government fee of AED 170 plus AED 52.50 typing, totaling AED 222.50; Construction & Building Workers carry a government fee of AED 200 plus AED 52.50 typing, totaling AED 252.50. At Karama Business Center, candidates undergo comprehensive clinical occupational health assessments, cardiovascular and pulmonary evaluations, and visual/communicable disease checks, ensuring full regulatory compliance and eliminating stop-work contractor penalties.',
    detailedOverviewAr:
      'تُعد بطاقات الصحة المهنية (OHC) لعمال قطاع الإنشاءات والمقاولات وسائقي هيئة الطرق والمواصلات (RTA) شهادات فحص مهني متخصصة ملزمة من بلدية دبي وهيئة الطرق للتحقق من اللياقة البدنية والمهنية للعمل في المواقع الإنشائية والقيادة التجارية العامة بأمان. وتماشياً مع الصفحة 7 من قائمة أسعارنا الرسمية: يبلغ رسم سائقي هيئة الطرق 170 درهماً حكومياً + 52.50 درهم طباعة = 222.50 درهماً؛ بينما يبلغ رسم عمال الإنشاءات والمقاولات 200 درهم حكومي + 52.50 درهم طباعة = 252.50 درهماً. وفي مركز الكرامة للأعمال، يخضع المرشحون لتقييم مهني وسريري شامل للقلب والجهاز التنفسي والنظر لحماية المقاولين والشركات من إيقاف العمل وغرامات التفتيش.',
    legalFrameworkEn:
      'Mandated under Dubai Municipality Public Health Local Order No. 11 of 2003, Industrial Safety Directives, and RTA Commercial Driver Licensing Standards (Official Tariffs: AED 222.50 / AED 252.50).',
    legalFrameworkAr:
      'إلزامية بموجب الأمر المحلي رقم 11 لسنة 2003 بشأن الصحة العامة ببلدية دبي، ومعايير السلامة الإنشائية، ولوائح ترخيص السائقين التجاريين بهيئة الطرق (التعرفة: 222.50 درهم / 252.50 درهم).',
    eligibilityEn: [
      'Construction site workers, carpenters, masons, steel fixers, and scaffolding operators (AED 252.50)',
      'RTA taxi drivers, luxury limousine chauffeurs, public bus drivers, and delivery truck operators (AED 222.50)',
      'Heavy equipment operators and industrial manufacturing plant workers',
    ],
    eligibilityAr: [
      'عمال المواقع الإنشائية، والنجارون، والبناؤون، وحدادو المسلح، وعمال السقالات (252.50 درهم)',
      'سائقو مركبات الأجرة (تاكسي دبي)، وسائقو الليموزين، وسائقو الحافلات العامة، والشاحنات (222.50 درهم)',
      'مشغلو المعدات والآليات الثقيلة وعمال المصانع والمنشآت الصناعية بدبي',
    ],
    galleryImages: COMMON_GALLERY,
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'Trade License & Visa Category Audit',
        titleAr: 'تدقيق رخصة المقاولات أو النقل وتحديد الفئة',
        descEn: 'Verifying construction vs. driving designation and issuing the AED 252.50 or AED 222.50 official token.',
        descAr: 'التحقق من المسمى الإنشائي أو المروري وإصدار استمارة الفحص المعتمدة بتعرفة 252.50 درهم أو 222.50 درهم.',
        durationEn: '10 Mins',
        durationAr: '10 دقائق',
      },
      {
        stepNumber: 2,
        titleEn: 'Clinical Physical & Occupational Screening',
        titleAr: 'الفحص السريري وتقييم اللياقة المهنية',
        descEn: 'Cardiovascular check, lung examination, vision evaluation, and screening for acute communicable risks.',
        descAr: 'كشف سريري على كفاءة القلب والرئتين وفحص النظر والتأكد من الخلو من الأمراض التنفسية المعدية.',
        durationEn: '15 Mins',
        durationAr: '15 دقيقة',
      },
      {
        stepNumber: 3,
        titleEn: 'Municipal / RTA Portal Approval & Card Handover',
        titleAr: 'اعتماد البلدية وهيئة الطرق وإصدار البطاقة الرقمية',
        descEn: 'Approving results on government databases and delivering the digital Occupational Health Card.',
        descAr: 'اعتماد نتيجة الفحص في المنظومة الحكومية وتسليم بطاقة الصحة المهنية المعتمدة للمنشأة.',
        durationEn: '24 - 48 Hours',
        durationAr: '24 - 48 ساعة',
      },
    ],
    faqs: [
      {
        questionEn: 'Can construction companies book bulk on-site medical checkups for 50+ workers at once?',
        questionAr: 'هل يمكن لشركات المقاولات حجز فحوصات مجمعة في الموقع لأكثر من 50 عاملاً في وقت واحد؟',
        answerEn: 'Yes! Through our VIP Mobile Health Squads, accredited clinical doctors and phlebotomists can be dispatched directly to your construction site or workers’ village in Dubai to conduct all examinations on-site.',
        answerAr: 'نعم بالتأكيد! من خلال فرقنا الطبية المتنقلة المعتمدة، نرسل الأطباء وكادر التمريض مباشرة إلى موقع المشروع الإنشائي أو سكن العمال لإجراء كافة الفحوصات في موقعكم.',
      },
    ],
    reviews: [
      {
        name: 'Eng. Khaled Al-Mutawa',
        roleEn: 'HSE Project Director',
        roleAr: 'مدير الصحة والسلامة والبيئة',
        companyEn: 'Al-Mutawa General Contracting',
        companyAr: 'المطوع للمقاولات العامة',
        rating: 5,
        date: 'October 2026',
        commentEn: 'Handled OHC certifications for our batch of 40 construction workers and 8 heavy truck drivers at Karama Business Center. Flawless service, exact tariffs, and zero site-inspection fines.',
        commentAr: 'أنجزنا بطاقات الصحة المهنية لـ 40 عاملاً إنشائياً و8 سائقي شاحنات بمركز الكرامة للأعمال. خدمة ممتازة ورسوم مطابقة لجدول الأسعار وحماية تامة من مخالفات التفتيش.',
      },
    ],
    targetKeywords: {
      shortTail: [
        'construction ohc card dubai',
        'rta driver health card dubai',
        'occupational health card 252 aed',
        'contractor medical card dubai',
        'heavy driver health check karama',
      ],
      longTail: [
        'official construction worker occupational health card fee 252.50 aed dubai',
        'rta driver occupational health card fee 222.50 aed karama dubai',
        'bulk construction site occupational health card testing dubai',
        'dubai municipality occupational safety health card for laborers',
      ],
    },
  },

  'ohc-healthcare-dha-doctor-license-card': {
    detailedOverviewEn:
      'The Occupational Health Card (OHC) for Healthcare Personnel & DHA / Diwan Doctor Licensees is the highest tier of municipal medical clearance in Dubai, required for doctors, surgeons, dentists, nurses, pharmacists, lab technicians, and hospital allied health staff. Reflecting page 7 of our official price schedule: Healthcare Personnel carry a government fee of AED 570 plus AED 52.50 typing, totaling AED 622.50; DHA License & Diwan Personnel carry a government fee of AED 770 plus AED 52.50 typing, totaling AED 822.50. At Karama Business Center, clinical professionals undergo rigorous serological screening (Hepatitis B, Hepatitis C, HIV, and Rubella/MMR antibody titers) and physician clinical sign-offs, synchronized directly with Dubai Health Authority (DHA) and Dubai Municipality registries.',
    detailedOverviewAr:
      'تُعد بطاقة الصحة المهنية (OHC) للكوادر الطبية والتمريضية وتراخيص أطباء هيئة الصحة والديوان (DHA / Diwan) أعلى فئات الفحص المهني المعتمدة في إمارة دبي، وهي إلزامية للأطباء، والجراحين، وأطباء الأسنان، والممرضين، والصيادلة، وفنيي المختبرات وكوادر المستشفيات والعيادات. وتماشياً مع الصفحة 7 من قائمة أسعارنا الرسمية المعتمدة: تبلغ رسوم كوادر الرعاية الصحية والمستشفيات 570 درهماً حكومياً + 52.50 درهم طباعة = 622.50 درهماً؛ بينما تبلغ رسوم تراخيص أطباء هيئة الصحة وموظفي الديوان 770 درهماً حكومياً + 52.50 درهم طباعة = 822.50 درهماً. وفي مركز الكرامة للأعمال، يخضع الكادر الطبي لفحص مناعي دقيق للأجسام المضادة والفيروسات وكشف سريري معتمد للربط المباشر مع سجلات هيئة الصحة وبلدية دبي.',
    legalFrameworkEn:
      'Regulated under Dubai Health Authority (DHA) Health Professional Licensure Standards and Dubai Municipality Public Health Local Order No. 11 of 2003 (Official Tariffs: AED 622.50 / AED 822.50).',
    legalFrameworkAr:
      'خاضعة لمعايير ترخيص المهنيين الصحيين بهيئة الصحة بدبي والأمر المحلي رقم 11 لسنة 2003 بشأن الصحة العامة (التعرفة: 622.50 درهم / 822.50 درهم).',
    eligibilityEn: [
      'Doctors, surgeons, and specialists applying for or renewing their DHA professional license (AED 822.50)',
      'Registered nurses, midwives, and healthcare clinic assistants (AED 622.50)',
      'Clinical pharmacists, dental assistants, and hospital laboratory technologists (AED 622.50)',
      'Healthcare and medical tourism facility staff requiring municipal OHC compliance',
    ],
    eligibilityAr: [
      'الأطباء والجراحون والاستشاريون الحاصلون على ترخيص هيئة الصحة بدبي أو الديوان (822.50 درهم)',
      'الممرضون والممرضات القانونيون والقابلات ومساعدو التمريض في العيادات والمستشفيات (622.50 درهم)',
      'الصيادلة وفنيو الأسنان وتقنيو المختبرات الطبية بالمراكز الصحية (622.50 درهم)',
      'كوادر وموظفو منشآت الرعاية الصحية والسياحة العلاجية بدبي',
    ],
    galleryImages: COMMON_GALLERY,
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'DHA License Verification & Application Typing',
        titleAr: 'تدقيق الترخيص الطبي وطباعة استمارة الفحص',
        descEn: 'Verifying healthcare facility license and issuing the AED 622.50 or AED 822.50 official token.',
        descAr: 'تدقيق ترخيص المنشأة الصحية وإصدار استمارة الفحص الرسمية بقيمة 622.50 درهم أو 822.50 درهم.',
        durationEn: '10 Mins',
        durationAr: '10 دقائق',
      },
      {
        stepNumber: 2,
        titleEn: 'Comprehensive Serological Panels & Clinical Audit',
        titleAr: 'الفحوصات المناعية الدقيقة والفحص السريري',
        descEn: 'Full viral antibody titers (Hepatitis B surface antibodies, HCV, HIV) and medical officer physical examination.',
        descAr: 'تحليل الأجسام المضادة لفيروسات الكبد B وC ونقص المناعة وفحص سريري معتمد للأطباء والتمريض.',
        durationEn: '20 Mins',
        durationAr: '20 دقيقة',
      },
      {
        stepNumber: 3,
        titleEn: 'DHA / Municipal Approval & Digital Card Handover',
        titleAr: 'اعتماد هيئة الصحة والبلدية وإصدار البطاقة الرقمية',
        descEn: 'Instant upload to DHA licensure systems and issuance of the certified digital Occupational Health Card.',
        descAr: 'ربط النتائج مباشرة مع نظام تراخيص هيئة الصحة وإصدار بطاقة الصحة المهنية المعتمدة للكوادر الصحية.',
        durationEn: '24 - 48 Hours',
        durationAr: '24 - 48 ساعة',
      },
    ],
    faqs: [
      {
        questionEn: 'What is the exact official tariff for a DHA Doctor License Occupational Health Card at Karama Business Center?',
        questionAr: 'كم تبلغ التعرفة الرسمية لبطاقة الصحة المهنية لترخيص أطباء هيئة الصحة في مركز الكرامة؟',
        answerEn: 'As verified on page 7 of our official price list: the government fee is AED 770.00 and the authorized typing fee is AED 52.50, totaling exactly AED 822.50.',
        answerAr: 'وفق الصفحة 7 من قائمة أسعارنا الرسمية: الرسوم الحكومية هي 770 درهماً ورسم الطباعة المعتمد هو 52.50 درهماً، بإجمالي 822.50 درهماً بالضبط.',
      },
    ],
    reviews: [
      {
        name: 'Dr. Farhan Qureshi',
        roleEn: 'Medical Director',
        roleAr: 'المدير الطبي',
        companyEn: 'Prime Care Specialty Clinics',
        companyAr: 'عيادات برايم كير التخصصية',
        rating: 5,
        date: 'October 2026',
        commentEn: 'Completed our clinic’s 8 doctors and 14 nurses OHC renewals at Karama Business Center. Dedicated clinical counters, exact official tariffs (AED 822.50 / AED 622.50), and rapid DHA licensing sync.',
        commentAr: 'جددنا بطاقات الصحة المهنية لـ 8 أطباء و14 ممرضاً في مركز الكرامة للأعمال. كاونترات فحص متخصصة، رسوم رسمية دقيقة (822.50 / 622.50 درهم)، وربط سريع بنظام تراخيص هيئة الصحة.',
      },
    ],
    targetKeywords: {
      shortTail: [
        'dha doctor health card dubai',
        'healthcare ohc card dubai',
        'nurse occupational health card',
        'ohc card 822 aed dubai',
        'hospital staff health card karama',
      ],
      longTail: [
        'official dha doctor license occupational health card fee 822.50 aed dubai',
        'healthcare worker occupational health card fee 622.50 aed karama dubai',
        'serological blood panel for healthcare worker ohc card dubai',
        'fast track doctor and nurse occupational medical clearance dubai',
      ],
    },
  },

  // ============================================================================
  // SALEM MEDICAL FITNESS (7 Dedicated Individual Services)
  // ============================================================================
  'salem-standard-medical-fitness-24hr': {
    detailedOverviewEn:
      'The Standard 24-Hour DHA Residency Medical Fitness Test at Karama Medical Fitness Express Service Center (KMFC / Salem) is Dubai’s official baseline government medical screening for all new and renewing UAE residence visa applicants, investor visas, employment work permits, and family sponsorships. Operating under the Dubai Health Authority and Salem digital core, our certified Al Karama diagnostic center conducts low-dose digital pulmonary chest X-rays and venipuncture blood testing (screening for HIV, Hepatitis B for high-risk categories, and active pulmonary tuberculosis) at the official baseline government tariff of AED 322. Results and verified medical certificates are issued within 24 hours and uploaded directly into GDRFA Amer immigration servers, enabling immediate visa stamping.',
    detailedOverviewAr:
      'يُعد الفحص الطبي العادي للياقة الإقامة خلال 24 ساعة في مركز الكرامة للياقة الطبية السريعة (KMFC / سالم) الفحص الحكومي الرسمي المعتمد من هيئة الصحة بدبي لكافة المتقدمين لإصدار أو تجديد تأشيرات الإقامة بدولة الإمارات، وإقامات المستثمرين، وتصاريح العمل، وكفالة الأسرة. ويجري المركز في منطقة الكرامة أشعة الصدر الرقمية منخفضة الإشعاع وسحب عينة الدم الوريدية (للكشف عن فيروس نقص المناعة، والتهاب الكبد الوبائي B، والدرن الرئوي) بالتعرفة الحكومية الرسمية المعتمدة البالغة 322 درهماً. وتصدر النتائج والشهادة الطبية المعتمدة خلال 24 ساعة مع رفعها تلقائياً لنظام إقامة دبي (آمر) لإنهاء تثبيت التأشيرة فوراً.',
    legalFrameworkEn:
      'Governed by UAE Federal Cabinet Resolution No. 5 of 2008 and Cabinet Resolution No. 7 of 2016 Concerning Medical Fitness Examination for Residency, administered by Dubai Health (Official Baseline Tariff: AED 322).',
    legalFrameworkAr:
      'خاضعة لقرار مجلس الوزراء الاتحادي رقم 5 لسنة 2008 وقرار مجلس الوزراء رقم 7 لسنة 2016 بشأن الفحص الطبي للوافدين للإقامة، وتنفذها صحة دبي (التعرفة الأساسية: 322 درهم).',
    eligibilityEn: [
      'New private sector and free-zone employees applying for first-time UAE residence visas',
      'Existing residents renewing their 2-year or 3-year employment, partner, or investor visas',
      'Expatriate family members (spouses, adult dependents over 18) applying for family sponsorship visas',
      'Applicants seeking the official AED 322 government baseline tariff with 24-hour turnaround',
    ],
    eligibilityAr: [
      'الموظفون الجدد في القطاع الخاص والمناطق الحرة المتقدمون لإصدار تأشيرة الإقامة الأولى',
      'المقيمون الراغبون في تجديد إقامات العمل أو الشريك أو المستثمر (سنتان أو 3 سنوات)',
      'أفراد الأسرة البالغون (الزوجة، الأبناء فوق 18 عاماً) المتقدمون لتأشيرة كفالة العائلة',
      'المتعاملون الراغبون في الفحص بالتعرفة الحكومية الرسمية (322 درهماً) خلال 24 ساعة',
    ],
    galleryImages: COMMON_GALLERY,
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'Identity Intake & Smart Salem Token (AED 322)',
        titleAr: 'التسجيل وإصدار رمز فحص سالم الرسمي (322 درهم)',
        descEn: 'Matching passport, visa, and Emirates ID application to generate the official AED 322 Salem token.',
        descAr: 'مطابقة الجواز والتأشيرة واستمارة الهوية وإصدار استمارة سالم الرسمية بقيمة 322 درهماً.',
        durationEn: '5 Mins',
        durationAr: '5 دقائق',
      },
      {
        stepNumber: 2,
        titleEn: 'Digital Chest Radiography & Blood Sample Draw',
        titleAr: 'الأشعة السينية الرقمية للصدر وسحب عينة الدم',
        descEn: 'Conducted in our sterile Karama Medical Center facility by licensed Dubai Health phlebotomists and radiographers.',
        descAr: 'إجراء أشعة الصدر وسحب عينة الدم في مرافقنا المعقمة بإشراف كادر تمريضي وفني معتمد.',
        durationEn: '10 - 15 Mins',
        durationAr: '10 - 15 دقيقة',
      },
      {
        stepNumber: 3,
        titleEn: '24-Hour Certificate Upload & Amer Visa Stamping',
        titleAr: 'رفع النتيجة خلال 24 ساعة وتثبيت التأشيرة لدى آمر',
        descEn: 'Official digital clearance certificate uploaded to GDRFA Amer servers within 24 hours, ready for instant stamping.',
        descAr: 'رفع شهادة اللياقة الطبية المعتمدة لنظام إقامة دبي خلال 24 ساعة لتثبيت التأشيرة فوراً.',
        durationEn: '24 Hours',
        durationAr: '24 ساعة',
      },
    ],
    faqs: [
      {
        questionEn: 'What is the official baseline government fee for standard residency medical fitness in Dubai?',
        questionAr: 'ما هي الرسوم الحكومية الرسمية لفحص الإقامة الطبي العادي في دبي؟',
        answerEn: 'The official baseline government tariff set by Dubai Health / Salem is exactly AED 322 for standard 24-hour turnaround, which includes the physical check, blood test, chest X-ray, and direct electronic upload to GDRFA immigration.',
        answerAr: 'الرسوم الحكومية الرسمية المعتمدة من صحة دبي ونظام سالم هي 322 درهماً بالضبط للفحص العادي (24 ساعة)، وتشمل سحب الدم وأشعة الصدر ورفع النتيجة إلكترونياً لإقامة دبي.',
      },
    ],
    reviews: [
      {
        name: 'Sunita Sharma',
        roleEn: 'Senior Financial Analyst',
        roleAr: 'محللة مالية أولى',
        companyEn: 'Deloitte Middle East',
        companyAr: 'ديلويت الشرق الأوسط',
        rating: 5,
        date: 'October 2026',
        commentEn: 'Completed my standard medical test at Karama Medical Center for AED 322. The center is spotless, well-organized, and my Salem result was uploaded to Amer in exactly 22 hours.',
        commentAr: 'أجريت الفحص الطبي العادي بمركز الكرامة الطبي برسم 322 درهماً. مركز نظيف ومنظم للغاية ورفعت نتيجتي بنظام سالم لإقامة دبي خلال 22 ساعة.',
      },
    ],
    targetKeywords: {
      shortTail: [
        'medical fitness test 322 aed dubai',
        'salem medical center karama',
        'karama medical center residency test',
        '24 hour medical fitness dubai',
        'dha medical test al karama',
      ],
      longTail: [
        'official standard residency medical fitness test fee 322 aed dubai',
        'karama medical fitness express service center kmfc salem 24hr',
        'dha medical fitness blood test and chest xray karama next to post office',
        'how to get 24 hour salem medical test for residency visa stamping',
      ],
    },
  },

  'salem-urgent-medical-fitness-6hr': {
    detailedOverviewEn:
      'The Express 6-Hour Same-Day DHA Medical Fitness Test at Karama Medical Fitness Express Service Center (KMFC / Salem) is the ideal fast-track solution for busy professionals, corporate transferees, and applicants facing imminent visa expiry grace period cutoffs. When an applicant attends morning screening at our Al Karama facility, their blood samples and digital chest X-rays are channeled into an accelerated diagnostic pipeline. Within 6 hours, our fully automated immunological analyzers complete communicable disease screening, clinical physicians sign off the file, and the certified medical clearance is transmitted directly into the GDRFA Amer immigration system—allowing same-day residence visa stamping before close of business.',
    detailedOverviewAr:
      'تُعد خدمة الفحص الطبي العاجل خلال 6 ساعات في نفس اليوم بمركز الكرامة للياقة الطبية السريعة (KMFC / سالم) الحل الأمثل للمهنيين ورجال الأعمال والمقيمين الذين يواجهون انتهاء مهلة السماح لتأشيراتهم أو يرغبون في إنهاء الإقامة دون انتظار. فعند الحضور للفحص الصباحي في مركزنا بالكرامة، تُحول عينات الدم والأشعة الرقمية لمسار تشخيصي سريع فائق الأولوية، وخلال 6 ساعات تكتمل التحاليل المخبرية الآلية ويعتمد الطبيب المختص الملف لتُرفع شهادة اللياقة الطبية فوراً إلى نظام إقامة دبي (آمر) لإنجاز تثبيت التأشيرة في نفس اليوم قبل انتهاء ساعات العمل.',
    legalFrameworkEn:
      'Administered under Dubai Health Express Medical Fitness Guidelines and Salem Rapid Diagnostic Protocols (6-Hour Same-Day SLA).',
    legalFrameworkAr:
      'تُنفذ بموجب معايير الفحص الطبي السريع لصحة دبي وبروتوكولات التشخيص العاجل لنظام سالم (إنجاز رسمي خلال 6 ساعات في نفس اليوم).',
    eligibilityEn: [
      'Professionals and executives requiring same-day visa clearance for urgent international travel',
      'Residents with expiring 30-day grace periods seeking to avoid overstay fines',
      'Corporate HR teams onboarding new management staff on tight deadlines',
    ],
    eligibilityAr: [
      'المهنيون والمديرون الراغبون في استلام النتيجة في نفس اليوم لارتباطات السفر الدولي',
      'المقيمون الذين أوشكت فترة السماح (30 يوماً) على الانتهاء لتفادي غرامات التأخير',
      'إدارات الموارد البشرية بالشركات لتثبيت إقامات الموظفين الجدد بصورة مستعجلة',
    ],
    galleryImages: COMMON_GALLERY,
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'Express Token & Fast-Track Triage',
        titleAr: 'إصدار رمز الفحص العاجل والمسار السريع',
        descEn: 'Priority intake registering your Salem profile for 6-hour laboratory escalation.',
        descAr: 'تسجيل فوري وتحويل المعاملة للمسار السريع بالمختبر ذي أولوية الـ 6 ساعات.',
        durationEn: '5 Mins',
        durationAr: '5 دقائق',
      },
      {
        stepNumber: 2,
        titleEn: 'Priority X-Ray & Accelerated Phlebotomy',
        titleAr: 'أشعة الصدر وسحب الدم في المسار العاجل',
        descEn: 'Immediate X-ray and blood collection with dedicated medical staff.',
        descAr: 'إجراء الأشعة وسحب عينة الدم فوراً دون أي انتظار مع كادر تمريضي مخصص.',
        durationEn: '10 Mins',
        durationAr: '10 دقائق',
      },
      {
        stepNumber: 3,
        titleEn: '6-Hour Salem Clearance & Same-Day Stamping',
        titleAr: 'صدور النتيجة خلال 6 ساعات وتثبيت التأشيرة',
        descEn: 'Certificate approved on Salem in under 6 hours and immediately submitted to our Amer counter.',
        descAr: 'اعتماد الشهادة على نظام سالم في أقل من 6 ساعات وتقديمها فوراً لكاونتر آمر لتثبيت الإقامة.',
        durationEn: 'Under 6 Hours',
        durationAr: 'أقل من 6 ساعات',
      },
    ],
    faqs: [
      {
        questionEn: 'If I take my medical test at 9:00 AM, will my Salem result be ready by 3:00 PM?',
        questionAr: 'إذا أجريت الفحص في الساعة 9:00 صباحاً، هل تصدر النتيجة بحلول 3:00 عصراً؟',
        answerEn: 'Yes! That is our 6-hour SLA. Morning applicants receive their official Salem digital certificate by mid-afternoon, allowing our on-site Amer desk to finalize visa stamping before the end of the working day.',
        answerAr: 'نعم بالتأكيد! هذا هو التزامنا الرسمي؛ فالمتقدمون في الفترة الصباحية تصدر نتائجهم المعتمدة في فترة بعد الظهر مباشرة ليقوم كاونتر آمر بتثبيت الإقامة في نفس اليوم.',
      },
    ],
    reviews: [
      {
        name: 'James Harrington',
        roleEn: 'Managing Director',
        roleAr: 'العضو المنتدب',
        companyEn: 'Harrington Global Shipping',
        companyAr: 'هارينغتون للشحن الدولي',
        rating: 5,
        date: 'October 2026',
        commentEn: 'Did my medical at 10 AM, had the Salem certificate at 3:30 PM, and Amer stamped my residency visa by 4:30 PM. True same-day turnaround at Karama Medical Center!',
        commentAr: 'أجريت الفحص في العاشرة صباحاً، وصدرت نتيجة سالم في الثالثة والنصف عصراً، وثبتت إقامتي لدى كاونتر آمر بحلول الرابعة والنصف. سرعة حقيقية في نفس اليوم بمركز الكرامة الطبي!',
      },
    ],
    targetKeywords: {
      shortTail: [
        'urgent medical test 6 hours dubai',
        'same day medical fitness dubai',
        'express salem test karama',
        'fast track residency medical dubai',
        'same day visa medical test',
      ],
      longTail: [
        'express 6 hour same day dha medical fitness test karama dubai',
        'same day salem medical certificate for urgent visa stamping dubai',
        'fast track blood test and chest xray within 6 hours karama medical center',
        'urgent medical fitness test near karama post office dubai',
      ],
    },
  },

  'salem-vip-medical-fitness-2hr': {
    detailedOverviewEn:
      'The Super Express 2-Hour VIP Majlis DHA Medical Fitness Test at Karama Medical Fitness Express Service Center (KMFC / Salem) is the most prestigious and rapid medical screening experience in the United Arab Emirates. Designed for C-level executives, international investors, celebrities, and VIP dignitaries, clients are ushered into our private Executive VIP Majlis Suite with reserved parking and luxury hospitality. A dedicated phlebotomist draws your blood sample in the lounge while you enjoy fresh espresso, dates, and refreshments, followed by immediate zero-wait escort through our private digital X-ray suite. Your sample is routed directly into our automated STAT immunological analyzer lines, producing an official Dubai Health Salem clearance certificate in under 120 minutes—synchronized immediately with our VIP Amer desk for instant Golden Visa or residency stamping.',
    detailedOverviewAr:
      'تُمثل خدمة الفحص الطبي فائق السرعة خلال ساعتين بمجلس كبار الشخصيات (VIP Majlis) في مركز الكرامة للياقة الطبية السريعة (KMFC / سالم) التجربة الطبية الحكومية الأكثر فخامة وسرعة في دولة الإمارات. صُممت هذه الخدمة لكبار المستثمرين، والرؤساء التنفيذيين، والشخصيات البارزة، حيث يُستقبل المتعامل في جناح مجلس كبار الشخصيات الفاخر مع مواقف خاصة وضيافة عربية راقية. يقوم ممرض خاص بسحب عينة الدم داخل الجناح في راحة تامة مع تقديم القهوة والتمور، ثم الانتقال الفوري دون أي انتظار لجهاز الأشعة الرقمي الخاص. وتُعطى العينات أولوية مطلقة بالمختبرات الآلية لتصدر شهادة اللياقة المعتمدة من صحة دبي ونظام سالم في أقل من 120 دقيقة، مع تحويلها فوراً لكاونتر آمر الخاص بالمركز لتثبيت الإقامة أو الإقامة الذهبية فوراً.',
    legalFrameworkEn:
      'Certified under Dubai Health VIP Fast-Track Screening Regulations and Salem STAT Emergency Priority Directives (Guaranteed 2-Hour SLA).',
    legalFrameworkAr:
      'معتمدة بموجب لوائح صحة دبي للمسار السريع لكبار الشخصيات وبروتوكولات سالم فائقة الأولوية (إنجاز رسمي مضمون خلال ساعتين).',
    eligibilityEn: [
      'High-net-worth investors, property owners, and Golden Visa applicants',
      'C-suite corporate executives, board directors, and diplomatic personnel',
      'Families and VIP clients seeking total privacy, luxury hospitality, and zero waiting time',
    ],
    eligibilityAr: [
      'كبار المستثمرين وملاك العقارات والمتقدمون للإقامة الذهبية',
      'الرؤساء التنفيذيون وأعضاء مجالس الإدارة والشخصيات الدبلوماسية',
      'العائلات وكبار الشخصيات الراغبون في أعلى درجات الخصوصية والرفاهية ودون أي انتظار',
    ],
    galleryImages: COMMON_GALLERY,
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'VIP Majlis Reception & Dedicated Concierge',
        titleAr: 'الاستقبال في مجلس كبار الشخصيات ومستشار خاص',
        descEn: 'Welcomed into our private hospitality suite with valet parking and passport verification.',
        descAr: 'الاستقبال في جناح الضيافة الفاخر مع خدمة صف السيارات وتدقيق المستندات.',
        durationEn: 'Instant',
        durationAr: 'فوري',
      },
      {
        stepNumber: 2,
        titleEn: 'In-Lounge Blood Draw & Private X-Ray Suite',
        titleAr: 'سحب الدم داخل الجناح والأشعة الخاصة',
        descEn: 'Blood drawn comfortably in your lounge armchair; zero-wait escort to digital X-ray.',
        descAr: 'سحب عينة الدم في مقعدك الخاص بالمجلس ومرافقة خاصة دون أي انتظار للأشعة الرقمية.',
        durationEn: '10 Mins',
        durationAr: '10 دقائق',
      },
      {
        stepNumber: 3,
        titleEn: 'STAT Lab Run & 2-Hour Salem Approval',
        titleAr: 'التحليل المخبري الفوري واعتماد سالم خلال ساعتين',
        descEn: 'Official Dubai Health Salem certificate generated and uploaded to Amer in under 120 minutes.',
        descAr: 'إصدار شهادة الفحص الطبي المعتمدة من نظام سالم ورفعها لإقامة دبي في أقل من 120 دقيقة.',
        durationEn: 'Under 2 Hours',
        durationAr: 'أقل من ساعتين',
      },
    ],
    faqs: [
      {
        questionEn: 'Can I complete my 10-Year Golden Visa medical and visa stamping in a single morning at Karama Business Center?',
        questionAr: 'هل يمكنني إنجاز الفحص الطبي وتثبيت الإقامة الذهبية (10 سنوات) في صباح يوم واحد بمركز الكرامة؟',
        answerEn: 'Yes! That is our signature VIP service. Clients complete their 2-Hour Super Express medical test in our VIP Majlis, and our adjacent Amer desk stamps their 10-Year Golden Visa residency permit on the spot before noon.',
        answerAr: 'نعم بالتأكيد! هذه هي خدمتنا الحصرية الرائدة؛ حيث ينجز المتعامل الفحص الطبي فائق السرعة خلال ساعتين بمجلس VIP، ويتولى كاونتر آمر المجاور تثبيت الإقامة الذهبية (10 سنوات) فوراً في نفس الصباح.',
      },
    ],
    reviews: [
      {
        name: 'Alexander Romanov',
        roleEn: 'Venture Capital Partner',
        roleAr: 'شريك استثمار رأس المال الجريء',
        companyEn: 'Vostok Tech Capital',
        companyAr: 'فوستوك كابيتال',
        rating: 5,
        date: 'October 2026',
        commentEn: 'Unbelievable efficiency. Blood drawn in the VIP lounge, X-ray in 2 minutes, and the Salem medical result was on my phone in 1 hour and 50 minutes. Amer completed my Golden Visa right after.',
        commentAr: 'كفاءة استثنائية لا تصدق! تم سحب الدم في المجلس الخاص والأشعة خلال دقيقتين، ووصلتني نتيجة سالم على الهاتف في ساعة و50 دقيقة، ثم أنجز آمر الإقامة الذهبية فوراً.',
      },
    ],
    targetKeywords: {
      shortTail: [
        '2 hour medical fitness test dubai',
        'vip medical test karama',
        'super express salem medical dubai',
        'golden visa medical test 2 hours',
        'vip majlis medical fitness dubai',
      ],
      longTail: [
        'super express 2 hour vip majlis dha medical fitness test karama dubai',
        'fastest medical fitness test in dubai under 2 hours with vip majlis',
        'golden visa 2 hour express medical test and same day stamping dubai',
        'luxury vip medical fitness screening suite near karama post office',
      ],
    },
  },

  'salem-car-blood-collection-service': {
    detailedOverviewEn:
      'VIP Drive-Through Car Blood Collection at Karama Medical Fitness Express Service Center (KMFC / Salem) is Dubai’s pioneering luxury roadside screening solution. Tailored for executives on the move, elderly family members, pregnant mothers, people of determination, and clients seeking absolute privacy, you never need to step out of your automobile. Upon pulling into our designated shaded VIP drive-through bay at our Al Karama facility, a certified Dubai Health phlebotomist verifies your Emirates ID token and draws the required venous blood sample right through your car window with surgical precision. Chest X-rays are completed in an adjacent direct-access priority bay, with express results delivered straight to your mobile device via SMS and email.',
    detailedOverviewAr:
      'تُعد خدمة سحب الدم من مقعد السيارة (Drive-Through) في مركز الكرامة للياقة الطبية السريعة (KMFC / سالم) الخدمة الرائدة والأكثر راحة في دبي. صُممت خصيصاً لرجال الأعمال المشغولين، وكبار السن، والأمهات الحوامل، وأصحاب الهمم، والمتعاملين الراغبين في أعلى درجات الخصوصية؛ حيث لا تحتاج لمغادرة مقعد سيارتك إطلاقاً. فعند وصولك للمسار المظلل المخصص لكبار الشخصيات بمركزنا في الكرامة، يقوم كادر تمريضي معتمد من صحة دبي بتدقيق استمارة الفحص وسحب عينة الدم الوريدية عبر نافذة سيارتك بأعلى معايير التعقيم والدقة، مع مرافقة سريعة للأشعة بمسار خاص وإرسال النتائج فوراً لهاتفك.',
    legalFrameworkEn:
      'Approved under Dubai Health Mobile Phlebotomy Guidelines and Salem Ambulatory Diagnostic Directives.',
    legalFrameworkAr:
      'معتمدة بموجب معايير سحب الدم المتنقل التابعة لصحة دبي واللوائح التشخيصية لخدمات الفحص بالسيارة بنظام سالم.',
    eligibilityEn: [
      'Busy executives and corporate professionals wishing to complete screening without entering a facility',
      'Elderly family members, pregnant women, and People of Determination requiring maximum physical comfort',
      'Families desiring quick, private roadside blood draw procedures in Al Karama',
    ],
    eligibilityAr: [
      'رجال الأعمال والتنفيذيون الراغبون في إنهاء الفحص السريع دون الدخول للقاعات أو النزول من السيارة',
      'كبار السن، الأمهات الحوامل، وأصحاب الهمم لتوفير أقصى درجات الراحة وتفادي المشي والانتظار',
      'العائلات الراغبة في فحص سريع وخاص في موقعنا المجهز بمنطقة الكرامة',
    ],
    galleryImages: COMMON_GALLERY,
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'Arrival at Shaded VIP Drive-Through Bay',
        titleAr: 'الوصول للمسار المظلل لفحص السيارات بالكرامة',
        descEn: 'Pull into our designated drive-through bay at Karama Business Center where our concierge greets you.',
        descAr: 'الوصول للمسار المخصص بمركز الكرامة للأعمال حيث يستقبلك موظف الاستقبال التنفيذي.',
        durationEn: '2 Mins',
        durationAr: 'دقيقتان',
      },
      {
        stepNumber: 2,
        titleEn: 'In-Vehicle Sterile Blood Draw & Quick X-Ray',
        titleAr: 'سحب الدم من نافذة السيارة والأشعة السريعة',
        descEn: 'Licensed phlebotomist collects your blood sample through your vehicle window, followed by a 2-minute step into our adjacent X-ray bay.',
        descAr: 'يقوم ممرض معتمد بسحب عينة الدم عبر نافذة المركبة مع إجراء أشعة الصدر بالمدخل الملاصق في دقيقتين.',
        durationEn: '5 - 8 Mins',
        durationAr: '5 - 8 دقائق',
      },
      {
        stepNumber: 3,
        titleEn: 'Depart & Digital Certificate Delivery',
        titleAr: 'المغادرة واستلام النتيجة المعتمدة على هاتفك',
        descEn: 'Drive away immediately; your official Salem result is sent via SMS and uploaded to GDRFA Amer.',
        descAr: 'الانطلاق فوراً بسيارتك لتصلك نتيجة سالم المعتمدة عبر رسالة نصية وتُرفع مباشرة لإقامة دبي.',
        durationEn: 'Express Delivery',
        durationAr: 'تسليم سريع',
      },
    ],
    faqs: [
      {
        questionEn: 'Do I still need to get out of my vehicle for the chest X-ray when using the Car Blood Collection service?',
        questionAr: 'هل أحتاج للنزول من السيارة لإجراء أشعة الصدر عند استخدام خدمة سحب الدم من السيارة؟',
        answerEn: 'Blood collection is 100% completed inside your vehicle. For the chest X-ray, our dedicated private ground-floor X-ray suite is situated immediately adjacent to the drive-through bay, requiring a brief 90-second step inside with zero waiting or queues.',
        answerAr: 'يتم سحب الدم بالكامل بنسبة 100% وأنت جالس داخل سيارتك، وبالنسبة لأشعة الصدر، يقع جهاز الأشعة في الطابق الأرضي ملاصقاً لمسار السيارات تماماً دون أي انتظار لمدة 90 ثانية فقط.',
      },
    ],
    reviews: [
      {
        name: 'Hessa Al-Marzouqi',
        roleEn: 'Businesswoman',
        roleAr: 'سيدة أعمال',
        companyEn: 'Al-Marzouqi Luxury Real Estate',
        companyAr: 'المرزوقي للعقارات الفاخرة',
        rating: 5,
        date: 'October 2026',
        commentEn: 'Brought my 78-year-old mother for her residency renewal medical test using the Drive-Through car service at Karama Medical Center. Seamless, compassionate, and finished in under 10 minutes without my mother having to walk. Exceptional service.',
        commentAr: 'رافقت والدتي البالغة من العمر 78 عاماً لتجديد إقامتها عبر خدمة فحص السيارات بمركز الكرامة الطبي. تعامل راقٍ وإنساني في قمة الروعة دون أن تضطر والدتي للمشي، وانتهى كل شيء في أقل من 10 دقائق.',
      },
    ],
    targetKeywords: {
      shortTail: [
        'drive through medical test dubai',
        'car blood collection salem dubai',
        'medical test from car karama',
        'drive thru residency test dubai',
        'vip drive through medical fitness',
      ],
      longTail: [
        'vip drive through car blood collection medical fitness test karama dubai',
        'residency visa medical test without leaving car al karama',
        'drive through blood draw for elderly and pregnant residency renewal dubai',
        'karama medical center car drive thru salem testing service',
      ],
    },
  },

  'salem-domestic-vaccination-services': {
    detailedOverviewEn:
      'Domestic Worker & Housemaid Screening & Mandatory Vaccinations at Karama Medical Fitness Express Service Center (KMFC / Salem) provides complete statutory healthcare compliance for household staff, housemaids, private nannies, family cooks, house drivers, and private nurses. Under UAE residency laws, all newly recruited domestic staff undergo mandatory screening for Hepatitis B, HIV, Tuberculosis, and Syphilis, alongside clinical pregnancy testing for female workers. Furthermore, UAE law mandates the complete 3-dose Hepatitis B vaccination schedule for domestic categories. At Karama Medical Center, we administer the initial vaccination dose on-site immediately following the blood draw, document the official digital immunization card on the Dubai Health portal, and schedule subsequent booster doses seamlessly.',
    detailedOverviewAr:
      'يوفر قسم الفحص الطبي وتطعيمات العمالة المساعدة في مركز الكرامة للياقة الطبية السريعة (KMFC / سالم) امتثالاً صحياً ووقائياً متكاملاً للمساعدين المنزليين، ومدبرات المنازل، والمربيات، والطهاة، والسائقين الخاصين، وممرضي الرعاية المنزلية. وبموجب قوانين الإقامة في دولة الإمارات، يخضع كافة العمال المساعدين المستقدمين حديثاً لفحوصات إلزامية تشمل التهاب الكبد الوبائي (B)، وفيروس نقص المناعة، والدرن، والزهري، إلى جانب اختبار الحمل للإناث. كما يفرض القانون جرعات تطعيم التهاب الكبد الوبائي (B) الثلاث الإلزامية؛ حيث يقوم مركزنا بإعطاء الجرعة الأولى فور سحب الدم وتوثيق كرت التطعيم الرقمي الرسمي بنظام صحة دبي مع جدولة الجرعات اللاحقة بسلاسة.',
    legalFrameworkEn:
      'Mandated under UAE Federal Cabinet Resolution No. 5 of 2008 on Expatriate Medical Examinations and Dubai Health Authority Preventive Medicine Directives on Domestic Worker Vaccinations.',
    legalFrameworkAr:
      'إلزامية بموجب قرار مجلس الوزراء رقم 5 لسنة 2008 بشأن الفحص الطبي للوافدين وتعليمات إدارة الطب الوقائي بصحة دبي بشأن تطعيمات العمالة المساعدة.',
    eligibilityEn: [
      'Newly arrived housemaids, nannies, cooks, and domestic helpers on Tadbeer or private sponsorship',
      'Domestic workers renewing their 2-year residency permits requiring mandatory booster vaccination',
      'Families seeking comprehensive communicable disease screening to protect children and elderly household members',
    ],
    eligibilityAr: [
      'مدبرات المنازل والمربيات والطهاة والمساعدون المنزليون المستقدمون حديثاً على كفالة تدبير أو الكفالة الشخصية',
      'العمالة المساعدة المجددة لإقامتها (سنتان) والمطالبة باستكمال جرعات التطعيم التنشيطية الإلزامية',
      'الأسر الراغبة في فحص وقائي شامل لحماية أطفالها وكبار السن في المنزل من أي أمراض معدية',
    ],
    galleryImages: COMMON_GALLERY,
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'Domestic Token & Panel Registration',
        titleAr: 'تسجيل استمارة فحص العمالة المساعدة واللقاحات',
        descEn: 'Registering the domestic worker with their sponsor Emirates ID and generating the official Salem vaccination voucher.',
        descAr: 'تسجيل العامل المساعد برقم هوية الكفيل وإصدار استمارة فحص سالم الشاملة للتطعيمات.',
        durationEn: '5 Mins',
        durationAr: '5 دقائق',
      },
      {
        stepNumber: 2,
        titleEn: 'Blood Screening & 1st Hepatitis B Vaccination',
        titleAr: 'سحب الدم وإعطاء الجرعة الأولى للقاح التهاب الكبد',
        descEn: 'Blood draw for mandatory viral markers followed by professional administration of the initial Hepatitis B vaccine dose.',
        descAr: 'سحب عينة الدم للفحوصات الفيروسية ثم إعطاء الجرعة الأولى من لقاح التهاب الكبد الوبائي (B) بمعرفة ممرض معتمد.',
        durationEn: '15 Mins',
        durationAr: '15 دقيقة',
      },
      {
        stepNumber: 3,
        titleEn: 'Digital Immunization Card & Visa Stamping',
        titleAr: 'إصدار كرت التطعيم الرقمي والربط مع إقامة دبي',
        descEn: 'Clearance and vaccination record uploaded to Dubai Health and GDRFA Amer for instant domestic visa stamping.',
        descAr: 'رفع شهادة اللياقة وسجل التطعيم الرقمي لنظام صحة دبي وإقامة دبي لتثبيت الإقامة فوراً.',
        durationEn: 'Same Day / 24h',
        durationAr: 'نفس اليوم / 24 ساعة',
      },
    ],
    faqs: [
      {
        questionEn: 'Are Hepatitis B vaccinations legally mandatory for housemaids and domestic helpers in Dubai?',
        questionAr: 'هل تطعيمات التهاب الكبد الوبائي (B) إلزامية قانوناً لمدبرات المنازل والعمالة المساعدة بدبي؟',
        answerEn: 'Yes! Under UAE Cabinet Resolution regulations, domestic workers (housemaids, nannies, private cooks, drivers) must receive the 3-dose Hepatitis B vaccination series. The first dose is administered on-site during their initial medical test, and the digital record is required for visa approval.',
        answerAr: 'نعم بالتأكيد! يفرض قرار مجلس الوزراء الاتحادي تلقي العمالة المساعدة سلسلة لقاحات التهاب الكبد الوبائي (B) الثلاث، وتُعطى الجرعة الأولى في المركز أثناء الفحص الأول لتوثيقها بنظام الإقامة.',
      },
    ],
    reviews: [
      {
        name: 'Mariam Al-Kaabi',
        roleEn: 'Mother & Homeowner',
        roleAr: 'ربة منزل',
        companyEn: 'Al Barsha South',
        companyAr: 'البرشاء جنوب',
        rating: 5,
        date: 'October 2026',
        commentEn: 'Brought our new nanny to Karama Medical Center. They did the Salem medical test, pregnancy test, and her first Hepatitis vaccine in 20 minutes. Kind nurses, zero queues, and digital card on our phone.',
        commentAr: 'أحضرت مربيتنا الجديدة لمركز الكرامة الطبي. أجروا فحص سالم الطبي واختبار الحمل والجرعة الأولى للقاح الكبد في 20 دقيقة. ممرضات متعاونات وبدون أي انتظار ووصل كرت التطعيم لهاتفنا فوراً.',
      },
    ],
    targetKeywords: {
      shortTail: [
        'domestic worker medical test dubai',
        'housemaid vaccination salem dubai',
        'hepatitis b vaccine housemaid karama',
        'tadbeer medical fitness test',
        'nanny medical screening dubai',
      ],
      longTail: [
        'mandatory housemaid vaccination and salem medical test karama dubai',
        'domestic helper hepatitis b vaccination series and pregnancy test dubai',
        'tadbeer domestic worker medical fitness and vaccination certificate al karama',
        'fast medical screening for new maid visa stamping dubai',
      ],
    },
  },

  'salem-home-office-screening': {
    detailedOverviewEn:
      'Mobile Home & Corporate Office Medical Fitness Screening at Karama Medical Fitness Express Service Center (KMFC / Salem) delivers Dubai Health-certified diagnostic capabilities directly to your doorstep. Tailored for corporate groups, multinational enterprise executive teams, VIP villa compounds, and royal households across the Emirate of Dubai, our licensed Mobile Medical Squad arrives at your location with mobile phlebotomy kits, biometric verification stations, and encrypted diagnostic terminals. Employees and executives complete their blood draws and identity verifications in their own boardroom or private living room without losing productive work hours traveling across Dubai traffic. Mobile chest X-ray units or fast-track priority slots are coordinated simultaneously.',
    detailedOverviewAr:
      'تصل خدمة الفحص الطبي المتنقل في المنازل ومقار الشركات التابعة لمركز الكرامة للياقة الطبية السريعة (KMFC / سالم) بالإمكانات التشخيصية المعتمدة من صحة دبي إلى عتبة دارك أو مقر عملك. صُممت هذه الخدمة المتميزة للشركات الكبرى، وفرق الإدارة العليا بالبنوك والمؤسسات، والفلل الفاخرة والقصور في إمارة دبي؛ حيث يصل فريقنا الطبي المتنقل والمرخص بمعدات سحب الدم المعقمة، ومحطات التحقق البيومتري، والأجهزة المتصلة مباشرة بالأنظمة الحكومية. ينجز الموظفون والمديرون سحب عينات الدم والتحقق من الهوية داخل قاعات اجتماعات الشركة أو غرف المعيشة دون إضاعة ساعات العمل في زحام الطرقات، مع تنسيق فحوصات الأشعة بأعلى درجات المرونة.',
    legalFrameworkEn:
      'Authorized under Dubai Health Authority On-Site Occupational Health Screening Directives and Salem Mobile Medical Licensing Regulations.',
    legalFrameworkAr:
      'مرخصة بموجب معايير الفحص الطبي المهني الميداني لهيئة الصحة بدبي ولوائح خدمات الفحص الطبي المتنقل بنظام سالم.',
    eligibilityEn: [
      'Corporations, banks, and tech enterprises onboarding batches of 10 to 500+ employees simultaneously',
      'C-level executives, directors, and VIPs requiring medical screening in their corporate office or luxury villa',
      'Families desiring full household and domestic staff screening at home without visiting a clinic',
    ],
    eligibilityAr: [
      'الشركات والبنوك والمؤسسات الكبرى التي تستقدم أو تجدد إقامات مجموعات من 10 إلى 500+ موظف',
      'الرؤساء التنفيذيون وأعضاء مجالس الإدارة الراغبون في الفحص داخل مكاتبهم أو منازلهم الخاصة',
      'الأسر والعائلات الراغبة في فحص أفراد الأسرة والعمالة المساعدة بالكامل داخل الفيلا في خصوصية تامة',
    ],
    galleryImages: COMMON_GALLERY,
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'Schedule Mobile Booking & Batch Manifest Audit',
        titleAr: 'جدولة موعد الزيارة وتدقيق بيانات كشف الأسماء',
        descEn: 'Coordinating location, date, and applicant passport copies with our Mobile Health Director.',
        descAr: 'تنسيق الموقع والموعد المناسب وتدقيق جوازات وتأشيرات الموظفين مع مدير الفريق الطبي المتنقل.',
        durationEn: 'Scheduled Slot',
        durationAr: 'موعد مجدول',
      },
      {
        stepNumber: 2,
        titleEn: 'Mobile Squad Arrival & On-Site Phlebotomy',
        titleAr: 'وصول الفريق الطبي وسحب عينات الدم في الموقع',
        descEn: 'Licensed Dubai Health medical squad arrives at your office/villa and completes sterile blood draws and biometric checks.',
        descAr: 'وصول الكادر الطبي المعتمد لمقر شركتك أو فيلتك وسحب عينات الدم والتحقق من الهوية باحترافية تامة.',
        durationEn: '15 - 30 Mins',
        durationAr: '15 - 30 دقيقة',
      },
      {
        stepNumber: 3,
        titleEn: 'STAT Lab Processing & Digital Certificate Push',
        titleAr: 'التحليل المخبري السريع وإصدار الشهادات الرقمية',
        descEn: 'Samples transported in temperature-controlled coolers directly to our Karama central lab with express results uploaded to Salem.',
        descAr: 'نقل العينات في حافظات مبردة معتمدة لمختبرات مركز الكرامة المركزية ورفع النتائج مباشرة لنظام سالم وإقامة دبي.',
        durationEn: 'Under 12 Hours',
        durationAr: 'أقل من 12 ساعة',
      },
    ],
    faqs: [
      {
        questionEn: 'How many employees do we need to book the on-site Mobile Medical team to our corporate office in Dubai?',
        questionAr: 'ما هو الحد الأدنى لعدد الموظفين لحجز الفريق الطبي المتنقل لزيارة مقر شركتنا بدبي؟',
        answerEn: 'We dispatch our mobile team for corporate groups starting from 10 employees up to hundreds, as well as providing private VIP villa visits for individual high-net-worth executives and their families.',
        answerAr: 'نوفد فريقنا الطبي المتنقل للمجموعات والشركات ابتداءً من 10 موظفين وحتى مئات الموظفين، كما نوفر زيارات خاصة للفلل الفاخرة لكبار الشخصيات وعائلاتهم عند الطلب.',
      },
    ],
    reviews: [
      {
        name: 'Nathalie Dupont',
        roleEn: 'Chief People Officer',
        roleAr: 'رئيس قطاع الموارد البشرية',
        companyEn: 'Omnicom Media Middle East',
        companyAr: 'أومنيكوم ميديا الشرق الأوسط',
        rating: 5,
        date: 'October 2026',
        commentEn: 'Booked the Karama Medical mobile squad to our Dubai Media City headquarters for 65 staff visa renewals. They completed all blood draws in 2 hours in our boardroom. Zero downtime, flawless coordination!',
        commentAr: 'حجزنا الفريق الطبي المتنقل لمركز الكرامة لمقر شركتنا في مدينة دبي للإعلام لتجديد إقامات 65 موظفاً. أنجزوا سحب الدم بالكامل خلال ساعتين في قاعة الاجتماعات دون إضاعة دقيقة واحدة من العمل!',
      },
    ],
    targetKeywords: {
      shortTail: [
        'mobile medical fitness dubai',
        'home medical test salem dubai',
        'corporate on-site medical screening',
        'office blood test residency dubai',
        'mobile salem health squad karama',
      ],
      longTail: [
        'corporate mobile medical fitness screening team for offices dubai',
        'on-site home medical test for residency visa al karama',
        'bulk company employee medical fitness blood test in corporate office dubai',
        'vip villa doorstep salem medical screening service dubai',
      ],
    },
  },

  'salem-blood-type-pregnancy-tests': {
    detailedOverviewEn:
      'ABO Blood Grouping & Clinical Pregnancy Testing at Karama Medical Fitness Express Service Center (KMFC / Salem) provides rapid, verified laboratory diagnostic certifications essential for UAE official procedures. An authenticated ABO & Rhesus (Rh) Blood Group Card is a mandatory requirement for issuing a Dubai Driving License at RTA, updating emergency medical profiles on Emirates ID, and corporate occupational records. Simultaneously, certified clinical serum or urine pregnancy testing is legally mandatory for all female domestic helpers, housemaids, and operational workers prior to residence visa stamping under UAE immigration rules. Our state-of-the-art diagnostic laboratory at Al Karama issues official laminated Blood Group Cards and certified pregnancy laboratory clearances in under 60 minutes.',
    detailedOverviewAr:
      'يوفر قسم "فحص فصيلة الدم واختبارات الحمل الطبية المعتمدة" في مركز الكرامة للياقة الطبية السريعة (KMFC / سالم) شهادات مخبرية سريعة وموثقة تعد متطلباً جوهرياً للعديد من الإجراءات الحكومية بدولة الإمارات. فبطاقة فصيلة الدم المعتمدة (ABO & Rh) متطلب إلزامي لاستخراج رخصة القيادة في دبي لدى هيئة الطرق (RTA)، وتحديث السجلات الطبية الطارئة على بطاقة الهوية الإماراتية. وفي الوقت ذاته، يُعد الفحص المخبري المعتمد للحمل متطلباً قانونياً إلزامياً لكافة العاملات المنزليات ومساعدات المنازل قبل تثبيت الإقامة بموجب قوانين الهجرة والإقامة. وتُصدر مختبراتنا المتطورة في الكرامة بطاقات فصيلة الدم البلاستيكية المعتمدة ونتائج فحص الحمل الرسمية في أقل من 60 دقيقة.',
    legalFrameworkEn:
      'Regulated by Dubai Health Laboratory Standards, RTA Driver Licensing Medical Directives, and GDRFA Residency Visa Rules for Female Domestic Workers.',
    legalFrameworkAr:
      'خاضعة لمعايير مختبرات صحة دبي، وتعليمات الترخيص الطبي لرخص القيادة بهيئة الطرق، ولوائح إقامة دبي للعمالة المساعدة من الإناث.',
    eligibilityEn: [
      'Individuals applying for a new Dubai Driving License at RTA requiring an accredited Blood Group Card',
      'Residents and employees updating their biometric health emergency profile on their Emirates ID card',
      'Female domestic workers, housemaids, nannies, and private helpers requiring mandatory pregnancy testing for visa approval',
    ],
    eligibilityAr: [
      'المتقدمون للحصول على رخصة قيادة جديدة بدبي لدى هيئة الطرق والملزمون بتقديم بطاقة فصيلة دم معتمدة',
      'المقيمون والموظفون الراغبون في تحديث بيانات فصيلة الدم للطوارئ على بطاقة الهوية الإماراتية',
      'العاملات المنزليات ومساعدات المنازل والمربيات الملزمات قانونياً بإجراء فحص الحمل لإصدار أو تجديد الإقامة',
    ],
    galleryImages: COMMON_GALLERY,
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'Walk-In Intake & Test Registration',
        titleAr: 'التسجيل الفوري وإصدار استمارة الفحص المخبري',
        descEn: 'Registering with your Emirates ID or passport copy with zero advance appointment necessary.',
        descAr: 'التسجيل ببطاقة الهوية أو الجواز دون الحاجة لأي موعد مسبق.',
        durationEn: '5 Mins',
        durationAr: '5 دقائق',
      },
      {
        stepNumber: 2,
        titleEn: 'Rapid Blood Draw / Sample Submission',
        titleAr: 'سحب العينة السريع أو تسليم عينة الفحص',
        descEn: 'Quick finger-prick or minor blood draw for ABO/Rh agglutination typing and certified pregnancy test.',
        descAr: 'وخز إصبع سريع أو سحب عينة دم طفيفة لتحديد فصيلة الدم وإجراء اختبار الحمل المعتمد.',
        durationEn: '5 Mins',
        durationAr: '5 دقائق',
      },
      {
        stepNumber: 3,
        titleEn: 'Official Card Printing & Portal Synchronization',
        titleAr: 'طباعة بطاقة فصيلة الدم الرسمية ورفع النتيجة',
        descEn: 'Issuing the laminated Blood Group Card on the spot and uploading pregnancy clearances directly to GDRFA Amer.',
        descAr: 'تسليم بطاقة فصيلة الدم البلاستيكية المعتمدة فوراً ورفع نتيجة فحص الحمل آلياً لنظام إقامة دبي.',
        durationEn: 'Under 30 - 60 Mins',
        durationAr: 'أقل من 30 - 60 دقيقة',
      },
    ],
    faqs: [
      {
        questionEn: 'Is a blood group card from a clinic outside the UAE accepted by RTA Dubai for driver license issuance?',
        questionAr: 'هل تقبل هيئة الطرق والمواصلات بدبي بطاقة فصيلة دم صادرة من عيادة خارج الدولة؟',
        answerEn: 'No. RTA Dubai strictly requires a Blood Group Card issued by an accredited laboratory licensed by Dubai Health or the UAE Ministry of Health. At Karama Medical Center, we test and print your official laminated RTA-compliant blood group card in 15 minutes.',
        answerAr: 'لا، تشترط هيئة الطرق بدبي بطاقة فصيلة دم رسمية صادرة من مختبر معتمد ومرخص من صحة دبي أو وزارة الصحة الإماراتية. وفي مركز الكرامة الطبي، نحدد فصيلة دمك ونطبع بطاقتك المعتمدة خلال 15 دقيقة فقط.',
      },
    ],
    reviews: [
      {
        name: 'George Kouris',
        roleEn: 'Commercial Pilot',
        roleAr: 'طيار تجاري',
        companyEn: 'Emirates Airline Flight Operations',
        companyAr: 'عمليات طيران الإمارات',
        rating: 5,
        date: 'October 2026',
        commentEn: 'Needed an official Blood Group Card for my RTA Dubai driving license file. Walked in at Karama Medical Center, had my finger pricked, and held the official laminated card in 12 minutes flat. Superb!',
        commentAr: 'احتجت لبطاقة فصيلة دم رسمية لمعاملة رخصة قيادة دبي لدى هيئة الطرق. دخلت مركز الكرامة الطبي وأجريت الفحص السريع واستلمت البطاقة البلاستيكية الرسمية في 12 دقيقة فقط. سرعة رائعة!',
      },
    ],
    targetKeywords: {
      shortTail: [
        'blood group card dubai rta',
        'blood type test karama',
        'pregnancy test for maid visa dubai',
        'abo blood group test dubai',
        'rta driver blood type card',
      ],
      longTail: [
        'official laminated blood group card for rta driving license karama dubai',
        'fast 15 minute blood type test near karama post office',
        'certified clinical pregnancy test for domestic worker visa dubai',
        'dubai health approved blood grouping and pregnancy screening center',
      ],
    },
  },

  // ============================================================================
  // RTA SERVICES (5 Dedicated Individual Services)
  // ============================================================================
  'rta-driving-license-renewal': {
    detailedOverviewEn:
      'Dubai Driving License Renewal & On-Site Eye Test Coordination at Karama Business Center (KBC) offers motorists in Dubai an instantaneous, frictionless one-stop service to renew their expired or expiring UAE driver licenses. Under Roads & Transport Authority (RTA) regulations, UAE citizens and residents must undergo an approved optical eye examination every 2 to 5 years (depending on license category and age) before their license can be renewed. At Karama Business Center, motorists take their RTA-accredited optical eye test right inside our facility, have the results electronically transmitted to RTA systems in real time, clear any outstanding traffic fines, and receive their renewed digital driving license added directly to their Apple/Google Wallet on their smartphone, with an optional official plastic smart card printed on the spot.',
    detailedOverviewAr:
      'توفر خدمة "تجديد رخصة القيادة في دبي وتنسيق فحص النظر المعتمد" في مركز الكرامة للأعمال (KBC) للسائقين في إمارة دبي حلاً فورياً متكاملاً لتجديد رخص القيادة المنتهية أو القريبة من الانتهاء دون أي عناء. وبموجب لوائح هيئة الطرق والمواصلات (RTA)، يلزم مواطنو ومقيمو الدولة بإجراء فحص نظر معتمد دورياً قبل إتمام تجديد الرخصة. وفي مركز الكرامة للأعمال، يجري السائق فحص النظر المعتمد من هيئة الطرق داخل المركز مباشرة، لتُرسل النتيجة فورياً لنظام الهيئة، مع إمكانية سداد أي مخالفات مرورية عالقة، وإضافة رخصة القيادة المجددة مباشرة إلى محفظة آبل أو جوجل بالهاتف، وطباعة البطاقة البلاستيكية الذكية فوراً لمن يرغب.',
    legalFrameworkEn:
      'Regulated by UAE Federal Traffic Law and Roads & Transport Authority (RTA Dubai) Licensing Agency Directives.',
    legalFrameworkAr:
      'خاضعة لقانون السير والمرور الاتحادي ولوائح مؤسسة الترخيص بهيئة الطرق والمواصلات بدبي.',
    eligibilityEn: [
      'UAE citizens and residents holding a Dubai-issued driving license due for renewal (available 6 months before expiry)',
      'Drivers with expired licenses requiring renewal and clearance of accumulated RTA/Police traffic fines',
      'Drivers aged 21+ renewing for standard validity (typically 2 years for expats, 5 years for GCC, 10 years for citizens)',
    ],
    eligibilityAr: [
      'مواطنو دولة الإمارات والمقيمون الحاملون لرخص قيادة صادرة من دبي ومستحقة التجديد (متاحة قبل 6 أشهر من الانتهاء)',
      'السائقون الذين انتهت رخصهم ويرغبون في التجديد وتسوية المخالفات المرورية المتراكمة لدى الهيئة والشرطة',
      'السائقون من عمر 21 عاماً فأكثر لتجديد الرخصة للمدد القانونية المعتمدة (سنتان للمقيمين، 5 للخليجيين، 10 للمواطنين)',
    ],
    galleryImages: COMMON_GALLERY,
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'Traffic Code Lookup & Accredited Eye Test',
        titleAr: 'الاستعلام بالرمز المروري وإجراء فحص النظر المعتمد',
        descEn: 'Verifying your Traffic File (T.C. No.) and conducting the RTA-approved optical eye test in our facility.',
        descAr: 'الاستعلام بالرقم المروري وإجراء فحص النظر المعتمد لدى هيئة الطرق في المركز مباشرة.',
        durationEn: '5 - 10 Mins',
        durationAr: '5 - 10 دقائق',
      },
      {
        stepNumber: 2,
        titleEn: 'Fine Settlement & Government Fee Payment',
        titleAr: 'سداد المخالفات والرسوم الحكومية الرسمية',
        descEn: 'Settling any outstanding traffic fines and processing the official RTA renewal tariff.',
        descAr: 'سداد المخالفات المرورية المسجلة وسداد رسوم التجديد الرسمية لهيئة الطرق فوراً.',
        durationEn: '5 Mins',
        durationAr: '5 دقائق',
      },
      {
        stepNumber: 3,
        titleEn: 'Instant Wallet Push & Smart Card Handover',
        titleAr: 'إضافة الرخصة للمحفظة الرقمية وطباعة البطاقة',
        descEn: 'Renewed driving license updated instantly on Apple/Google Wallet and optional physical card printed.',
        descAr: 'تحديث الرخصة فوراً بمحفظة الهاتف الذكي وطباعة البطاقة البلاستيكية وتسليمها فوراً.',
        durationEn: 'Instant Handover',
        durationAr: 'تسليم فوري',
      },
    ],
    faqs: [
      {
        questionEn: 'Can I renew my Dubai driving license if I have accumulated traffic fines on my file?',
        questionAr: 'هل يمكنني تجديد رخصة قيادة دبي إذا كانت هناك مخالفات مرورية مسجلة على ملفي؟',
        answerEn: 'Under RTA rules, all traffic fines registered on your driving license traffic file must be settled before renewal can be finalized. At Karama Business Center, you can query, review, and settle all traffic fines right at our counter simultaneously.',
        answerAr: 'وفق لوائح هيئة الطرق، يجب سداد المخالفات المرورية المسجلة على الملف المروري قبل إتمام التجديد. وفي مركز الكرامة للأعمال، يمكنك الاستعلام عن كافة المخالفات وتدقيقها وسدادها في نفس اللحظة لدى كاونترنا.',
      },
    ],
    reviews: [
      {
        name: 'Carlos Mendez',
        roleEn: 'Commercial Pilot',
        roleAr: 'طيار تجاري',
        companyEn: 'Emirates Flight Operations',
        companyAr: 'عمليات طيران الإمارات',
        rating: 5,
        date: 'October 2026',
        commentEn: 'Renewed my expired Dubai driving license at Karama Business Center in 12 minutes. Eye test done on-site, fines paid, and new license added to my Apple Wallet before I even left the counter!',
        commentAr: 'جددت رخصة قيادة دبي المنتهية في مركز الكرامة للأعمال خلال 12 دقيقة فقط. فحص النظر في نفس المكان، سداد المخالفات، وإضافة الرخصة المجددة لمحفظة آبل قبل مغادرة الكاونتر!',
      },
    ],
    targetKeywords: {
      shortTail: [
        'dubai driving license renewal',
        'rta license renewal karama',
        'eye test for driving license dubai',
        'instant driving license renewal rta',
        'renew uae driving license',
      ],
      longTail: [
        'instant dubai driving license renewal with on-site eye test karama',
        'how to renew expired rta driving license and pay traffic fines dubai',
        'accredited rta optical eye test center near karama post office',
        'same day driving license smart card printing and digital wallet update',
      ],
    },
  },

  'rta-international-driving-permit-idp': {
    detailedOverviewEn:
      'The official International Driving Permit (IDP) booklet issued under Roads & Transport Authority (RTA) and Automobile & Touring Club of the UAE (ATCUAE) authority allows Dubai residents and UAE citizens to legally drive private automobiles in over 150 foreign countries worldwide without taking additional local driving exams. Whether you are traveling on business, vacationing abroad, renting an automobile across Europe, the USA, the UK, Canada, Australia, Japan, or Saudi Arabia, international car rental agencies strictly require a valid IDP alongside your national UAE driver license. At Karama Business Center, we verify your original UAE driving license, capture your photograph, and print the official multi-lingual IDP booklet on the spot in under 10 minutes.',
    detailedOverviewAr:
      'يُمكّن كتيب "رخصة القيادة الدولية (IDP)" الرسمي الصادر بإشراف هيئة الطرق والمواصلات (RTA) ونادي الإمارات للسيارات والسياحة (ATCUAE) المقيمين في دبي ومواطني الدولة من قيادة المركبات الخاصة بصورة قانونية معتمدة في أكثر من 150 دولة حول العالم دون الحاجة لخوض اختبارات قيادة محلية إضافية. وسواء كنت مسافراً لرحلة عمل، أو سياحة عائلية، أو استئجار سيارة في أوروبا، والولايات المتحدة، وبريطانيا، وكندا، وأستراليا، واليابان، والمملكة العربية السعودية، فإن شركات تأجير السيارات الدولية تشترط تقديم رخصة القيادة الدولية إلى جانب رخصتك الإماراتية. وفي مركز الكرامة للأعمال، ندقق رخصتك الإماراتية ونلتقط صورتك ونطبع كتيب الرخصة الدولية المعتمد متعدد اللغات فوراً خلال أقل من 10 دقائق.',
    legalFrameworkEn:
      'Issued in compliance with the 1949 Geneva Convention and 1968 Vienna Convention on Road Traffic, under the authority of RTA Dubai and ATCUAE.',
    legalFrameworkAr:
      'تصدر بموجب اتفاقية جنيف لعام 1949 واتفاقية فيينا لعام 1968 بشأن السير على الطرق، بإشراف هيئة الطرق والمواصلات بدبي ونادي الإمارات للسيارات.',
    eligibilityEn: [
      'UAE citizens and residents holding a valid, active UAE driving license',
      'Travelers visiting foreign destinations (Schengen Europe, USA, UK, Canada, Australia, GCC, Asia) intending to drive or rent a car',
      'Expatriates traveling on vacation wanting international roadside and legal driving protection',
    ],
    eligibilityAr: [
      'مواطنو دولة الإمارات والمقيمون الحاملون لرخصة قيادة إماراتية سارية المفعول',
      'المسافرون إلى وجهات دولية (أوروبا شنغن، أمريكا، بريطانيا، كندا، أستراليا، الخليج، آسيا) والراغبون في القيادة أو الاستئجار',
      'المقيمون المسافرون في إجازات سنوية والراغبون في حماية تأمينية وقانونية كاملة أثناء القيادة بالخارج',
    ],
    galleryImages: COMMON_GALLERY,
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'UAE Driving License & Passport Verification',
        titleAr: 'تدقيق رخصة القيادة الإماراتية وجواز السفر',
        descEn: 'Verifying that your UAE driving license has active validity and matching passport details.',
        descAr: 'التحقق من سريان رخصة القيادة الإماراتية ومطابقة البيانات مع جواز السفر والهوية.',
        durationEn: '2 Mins',
        durationAr: 'دقيقتان',
      },
      {
        stepNumber: 2,
        titleEn: 'Digital Photo Capture & System Registration',
        titleAr: 'التقاط الصورة الشخصية والتسجيل بنظام الرخص الدولية',
        descEn: 'Capturing your passport-size photo and registering the 1-year international driving credential.',
        descAr: 'التقاط الصورة الشخصية الرقمية وتسجيل بيانات الرخصة الدولية الصالحة لمدة عام كامل.',
        durationEn: '3 Mins',
        durationAr: '3 دقائق',
      },
      {
        stepNumber: 3,
        titleEn: 'Multi-Lingual IDP Booklet Issuance',
        titleAr: 'طباعة وتسليم كتيب رخصة القيادة الدولية المعتمد',
        descEn: 'Printing and stamping the official multi-lingual International Driving Permit booklet on the spot.',
        descAr: 'طباعة وختم كتيب رخصة القيادة الدولية متعدد اللغات وتسليمه لك فوراً في نفس اللحظة.',
        durationEn: '5 Mins',
        durationAr: '5 دقائق',
      },
    ],
    faqs: [
      {
        questionEn: 'How long is the International Driving Permit (IDP) valid for, and which countries accept it?',
        questionAr: 'كم تبلغ مدة صلاحية رخصة القيادة الدولية، وما هي الدول التي تقبلها؟',
        answerEn: 'The International Driving Permit is valid for 1 year from the date of issuance and is legally accepted across more than 150 countries worldwide, including all European Union nations, the United States, the United Kingdom, Canada, Australia, New Zealand, Japan, and most African and Asian states.',
        answerAr: 'رخصة القيادة الدولية صالحة لمدة عام واحد من تاريخ إصدارها، وهي معترف بها قانونياً في أكثر من 150 دولة حول العالم تشمل كافة دول الاتحاد الأوروبي، والولايات المتحدة، وبريطانيا، وكندا، وأستراليا، واليابان، ومعظم دول العالم.',
      },
    ],
    reviews: [
      {
        name: 'Oliver Vance',
        roleEn: 'Management Consultant',
        roleAr: 'مستشار إدارة',
        companyEn: 'Bain & Company Middle East',
        companyAr: 'بين آند كومباني',
        rating: 5,
        date: 'October 2026',
        commentEn: 'Needed an International Driving Permit for a self-drive business trip across Germany and Switzerland. Issued at Karama Business Center in 8 minutes with zero hassle. Accepted by Sixt without question.',
        commentAr: 'احتجت لرخصة قيادة دولية لرحلة عمل وقيادة سيارة في ألمانيا وسويسرا. استخرجتها في مركز الكرامة للأعمال خلال 8 دقائق فقط، وقبلتها شركة تأجير السيارات فوراً.',
      },
    ],
    targetKeywords: {
      shortTail: [
        'international driving permit dubai',
        'idp booklet dubai rta',
        'international driver license karama',
        'drive abroad license uae',
        'same day idp dubai',
      ],
      longTail: [
        'how to get international driving permit idp in 10 minutes dubai',
        'official international driving permit for europe and usa travel karama',
        'rta approved international driver license booklet near karama post office',
        'international driving license requirements and fees dubai 2026',
      ],
    },
  },

  'rta-vehicle-mulkiya-renewal': {
    detailedOverviewEn:
      'Annual Vehicle Registration (Mulkiya) Renewal & Technical Passing Coordination at Karama Business Center (KBC) protects motorists and corporate fleet managers against expired registration penalties (AED 500 fine + 4 traffic black points + potential vehicle impoundment). Under RTA and Federal Traffic Law, all motor vehicles must maintain valid 13-month comprehensive or third-party insurance and undergo technical passing inspection (Tasjeel, Shamil, Wasel) once they reach 3 years of age. At our dedicated RTA liaison desk, we verify technical inspection clearances, link electronic motor insurance policies, clear traffic fines, and renew the official electronic Mulkiya registration in minutes, delivering digital vehicle cards synced directly to RTA and Dubai Police systems.',
    detailedOverviewAr:
      'تحمي خدمة "التجديد السنوي لملكية المركبات (الملكية) وتنسيق الفحص الفني" في مركز الكرامة للأعمال (KBC) السائقين ومديري أساطيل الشركات من غرامات انتهاء الملكية (500 درهم + 4 نقاط مرورية سوداء واحتمال حجز المركبة). فبموجب قانون السير وهيئة الطرق، يجب أن تكون المركبة مؤمنة بوثيقة تأمين سارية المفعول (13 شهراً) واجتياز الفحص الفني للسلامة (تسجيل، شامل، واصل) للمركبات التي تجاوز عمرها 3 سنوات. وفي مركزنا، ندقق شهادة الفحص الفني، ونربط وثيقة التأمين إلكترونياً، ونسدد المخالفات، ونجدد ملكية المركبة الإلكترونية خلال دقائق لتُحدث فوراً بنظام هيئة الطرق وشرطة دبي.',
    legalFrameworkEn:
      'Governed by UAE Federal Law No. 21 of 1995 Concerning Traffic, its executive regulations, and RTA Dubai Vehicle Licensing directives.',
    legalFrameworkAr:
      'تخضع للقانون الاتحادي رقم 21 لسنة 1995 بشأن السير والمرور ولائحته التنفيذية وقرارات مؤسسة الترخيص بهيئة الطرق بدبي.',
    eligibilityEn: [
      'Private vehicle owners renewing their annual 1-year registration (Mulkiya)',
      'Commercial fleet operators renewing delivery vans, trucks, and luxury corporate fleets',
      'Vehicle owners renewing within the 30-day grace period or with expired registrations',
    ],
    eligibilityAr: [
      'ملاك المركبات الخاصة الراغبون في تجديد ملكية المركبة السنوية (الملكية)',
      'أصحاب ومديرو أساطيل الشركات لتجديد مركبات التوصيل والشاحنات والسيارات الفارهة',
      'ملاك المركبات الراغبون في التجديد خلال مهلة الـ 30 يوماً أو بعد انتهائها لتفادي الحجز',
    ],
    galleryImages: COMMON_GALLERY,
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'Traffic Code & Inspection Clearance Audit',
        titleAr: 'تدقيق الملف المروري وشهادة الفحص الفني',
        descEn: 'Verifying your valid vehicle passing test (Tasjeel/Shamil) and 13-month electronic insurance policy.',
        descAr: 'التحقق من اجتياز الفحص الفني للمركبة (تسجيل/شامل) وربط وثيقة التأمين سارية المفعول (13 شهراً).',
        durationEn: '5 Mins',
        durationAr: '5 دقائق',
      },
      {
        stepNumber: 2,
        titleEn: 'Traffic Fine Clearance & Fee Settlement',
        titleAr: 'سداد المخالفات المرورية ورسوم تجديد الملكية',
        descEn: 'Clearing any outstanding RTA or Police traffic fines and processing the official registration fee.',
        descAr: 'تسوية أي مخالفات مرورية مسجلة وسداد الرسوم الرسمية لتجديد ملكية المركبة.',
        durationEn: '5 Mins',
        durationAr: '5 دقائق',
      },
      {
        stepNumber: 3,
        titleEn: 'Digital Mulkiya Issuance & MOI Sync',
        titleAr: 'إصدار الملكية الرقمية وتحديث سجلات المرور والشرطة',
        descEn: 'Official digital Mulkiya pushed to Apple/Google Wallet and registered on federal police databases.',
        descAr: 'إصدار الملكية الإلكترونية المعتمدة وإضافتها للمحفظة الرقمية وتحديث السجلات المرورية فوراً.',
        durationEn: 'Instant',
        durationAr: 'فوري',
      },
    ],
    faqs: [
      {
        questionEn: 'How long is the grace period after my vehicle Mulkiya expires before fines begin?',
        questionAr: 'كم تبلغ فترة السماح بعد انتهاء ملكية المركبة قبل احتساب الغرامات وحجز المركبة؟',
        answerEn: 'Under UAE traffic rules, your motor insurance policy is issued for 13 months, giving you a 30-day grace period past the 12-month registration expiration date. Once that 30-day window passes, an immediate late renewal fine of AED 500 applies and the vehicle risks police impoundment. Renew today at our desk to avoid penalties!',
        answerAr: 'بموجب القوانين المرورية، تصدر وثيقة التأمين لمدة 13 شهراً لتمنحك مهلة سماح مدتها 30 يوماً بعد انتهاء رخصة السير (12 شهراً)، وبعد انقضاء الـ 30 يوماً تُفرض غرامة 500 درهم وتكون المركبة عرضة للحجز، ويمكنك تجديدها فوراً بمركزنا لتفادي ذلك.',
      },
    ],
    reviews: [
      {
        name: 'Mustafa Al-Banna',
        roleEn: 'Operations Manager',
        roleAr: 'مدير العمليات',
        companyEn: 'Al-Banna Engineering Services',
        companyAr: 'البنا للخدمات الهندسية',
        rating: 5,
        date: 'October 2026',
        commentEn: 'Renewed our company fleet of 14 pickup trucks and commercial vans at Karama Business Center in under an hour. Outstanding liaison desk with direct RTA integration.',
        commentAr: 'جددنا أسطول الشركة المكون من 14 مركبة وشاحنة تجارية في مركز الكرامة للأعمال في أقل من ساعة. مكتب تنسيق مروري متميز بربط مباشر مع هيئة الطرق.',
      },
    ],
    targetKeywords: {
      shortTail: [
        'mulkiya renewal dubai',
        'car registration renewal rta',
        'vehicle mulkiya renewal karama',
        'expired car registration dubai',
        'online mulkiya renewal rta',
      ],
      longTail: [
        'fast annual vehicle mulkiya registration renewal karama dubai',
        'how to renew expired car mulkiya and pay traffic fines rta dubai',
        'commercial fleet vehicle registration renewal service dubai',
        'electronic vehicle mulkiya update on apple wallet rta dubai',
      ],
    },
  },

  'rta-vehicle-ownership-transfer': {
    detailedOverviewEn:
      'Vehicle Ownership Transfer, Export Certificates & Commercial Fleet Registration at Karama Business Center (KBC) handles the legally certified transfer of motor vehicle titles between buyers and sellers under official Roads & Transport Authority (RTA) protocols. Whether you are buying or selling a pre-owned private automobile, transferring corporate fleet assets following a company merger or restructuring, clearing bank mortgage hypothecations, or procuring an official Tourism or Export Certificate to ship a vehicle to Saudi Arabia, the GCC, or overseas, our certified liaison desk manages the entire bilateral transaction: technical passing audit, electronic sales contract signing, traffic fine settlements, mortgage clearance, and issuance of the new Mulkiya to the buyer in under 30 minutes.',
    detailedOverviewAr:
      'تتولى خدمة "نقل ملكية المركبات، وشهادات التصدير والسياحة، وتسجيل أساطيل الشركات" في مركز الكرامة للأعمال (KBC) الإجراءات القانونية المعتمدة لنقل ملكية وتسجيل المركبات بين البائع والمشتري وفق الأنظمة الرسمية لهيئة الطرق والمواصلات (RTA). وسواء كنت تبيع أو تشتري سيارة خاصة مستعملة، أو تنقل ملكية أسطول مركبات تجارية بعد اندماج شركات، أو تفك الرهن البنكي عن المركبة، أو تستخرج شهادة تصدير أو سياحة لتسفير المركبة للمملكة العربية السعودية ودول الخليج أو الخارج، يدير مكتبنا المعاملة الثنائية بالكامل: فحص السلامة، توقيع عقد المبايعة الإلكتروني، سداد المخالفات، فك الرهن، وإصدار الملكية الجديدة باسم المشتري في أقل من 30 دقيقة.',
    legalFrameworkEn:
      'Executed under RTA Licensing Agency Regulations on Vehicle Title Transfers, Electronic Sales Contract Protocols, and Federal Export Standards.',
    legalFrameworkAr:
      'تُنفذ بموجب لوائح مؤسسة الترخيص بهيئة الطرق لنقل ملكيات المركبات، وضوابط عقود البيع والشراء الإلكترونية، ومعايير شهادات التصدير الاتحادية.',
    eligibilityEn: [
      'Private vehicle buyers and sellers completing a title transfer in Dubai',
      'Corporations transferring company vehicle assets or buying/selling commercial fleet vehicles',
      'Vehicle owners procuring an Export Certificate, Transfer to Another Emirate Certificate, or Tourism Certificate for overseas travel',
      'Borrowers settling auto loans requiring Bank Mortgage Release (Fakk Al-Rahn) clearance',
    ],
    eligibilityAr: [
      'البائع والمشتري من الأفراد لإتمام نقل ملكية المركبة بصورة قانونية معتمدة في دبي',
      'الشركات الراغبة في نقل ملكية أصول المركبات أو بيع وشراء أساطيل المركبات التجارية',
      'ملاك المركبات الراغبون في استخراج شهادة تصدير أو تحويل لإمارة أخرى أو شهادة سياحة دولية',
      'المقترضون الذين سددوا قروض مركباتهم ويرغبون في فك الرهن البنكي رسمياً وتحديث الملكية',
    ],
    galleryImages: COMMON_GALLERY,
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'Passing Test & Mortgage Release Verification',
        titleAr: 'تدقيق الفحص الفني وفك الرهن البنكي',
        descEn: 'Verifying valid vehicle technical test for transfer and confirming bank mortgage release on RTA systems.',
        descAr: 'التحقق من شهادة الفحص الفني لغايات النقل والتأكد من فك الرهن البنكي إلكترونياً على نظام الهيئة.',
        durationEn: '5 Mins',
        durationAr: '5 دقائق',
      },
      {
        stepNumber: 2,
        titleEn: 'Electronic Bilateral Sales Contract Signing',
        titleAr: 'توقيع عقد المبايعة الإلكتروني بين الطرفين',
        descEn: 'Executing the binding electronic sale agreement between buyer and seller with Emirates ID verification.',
        descAr: 'توثيق وتوقيع عقد المبايعة الإلكتروني المعتمد بين البائع والمشتري ببطاقات الهوية الإماراتية.',
        durationEn: '10 Mins',
        durationAr: '10 دقائق',
      },
      {
        stepNumber: 3,
        titleEn: 'New Mulkiya Issuance / Export Plates',
        titleAr: 'إصدار الملكية الجديدة أو لوحات وشهادة التصدير',
        descEn: 'Issuing the new Mulkiya in the buyer’s name or providing the official Export Certificate and export blue plates.',
        descAr: 'طباعة الملكية الجديدة باسم المشتري أو تسليم شهادة التصدير الرسمية ولوحات التصدير الزرقاء فوراً.',
        durationEn: '10 - 15 Mins',
        durationAr: '10 - 15 دقيقة',
      },
    ],
    faqs: [
      {
        questionEn: 'Do both the buyer and seller need to be physically present for vehicle ownership transfer?',
        questionAr: 'هل يجب حضور البائع والمشتري معاً شخصياً لإتمام معاملة نقل ملكية المركبة؟',
        answerEn: 'Both parties must be authenticated either in person at our center using their original Emirates IDs, or represented by an authorized agent holding a notarized Power of Attorney (POA) for vehicle sale, which can also be drafted and verified at our in-house Notary desk.',
        answerAr: 'يجب حضور الطرفين شخصياً ببطاقة الهوية الإماراتية الأصلية، أو تمثيل أحدهما بوكالة قانونية موثقة لبيع وشراء المركبات، والتي يمكن صياغتها وتوثيقها فوراً لدى مكتب الكاتب العدل بمركزنا.',
      },
    ],
    reviews: [
      {
        name: 'Faisal Al-Tamimi',
        roleEn: 'Car Dealership Director',
        roleAr: 'مدير معرض سيارات',
        companyEn: 'Al-Tamimi Prestige Motors',
        companyAr: 'التميمي للسيارات الفاخرة',
        rating: 5,
        date: 'October 2026',
        commentEn: 'We execute all our luxury vehicle sales and ownership transfers through Karama Business Center. Bank mortgage release, contract signing, and new Mulkiya issuance in under 25 minutes every time.',
        commentAr: 'ننجز كافة معاملات بيع ونقل ملكية المركبات الفارهة لعملائنا في مركز الكرامة للأعمال. فك الرهن البنكي وتوقيع العقد وإصدار الملكية الجديدة في أقل من 25 دقيقة دائماً.',
      },
    ],
    targetKeywords: {
      shortTail: [
        'vehicle ownership transfer dubai',
        'car transfer rta dubai',
        'vehicle export certificate dubai',
        'car sale contract rta karama',
        'bank mortgage release car dubai',
      ],
      longTail: [
        'how to transfer car ownership between buyer and seller rta dubai',
        'vehicle export certificate and blue plate issuance karama dubai',
        'bank car loan mortgage release fakk al rahn and title transfer dubai',
        'commercial fleet vehicle title transfer service center dubai',
      ],
    },
  },

  'rta-traffic-fine-inquiry-payment': {
    detailedOverviewEn:
      'Traffic Fine Inquiry, Discount Settlement & Black Points Management at Karama Business Center provides motorists, corporate PROs, and fleet managers with instantaneous, live lookup and official resolution across all UAE traffic databases—including Dubai Police, the Roads & Transport Authority (RTA), Abu Dhabi Police, and the Federal Ministry of Interior (MOI). Outstanding traffic violations, radar speeding tickets, Salik toll violations, municipal parking fines, and traffic black points can prevent driving license renewal, block vehicle Mulkiya issuance, or result in vehicle impound orders. Our live portal desk conducts unified file inquiries, verifies discount schemes or installment options where applicable, processes secure payments, and handles official Black Point transfers or driver liability acceptance with instant printed clearance certificates.',
    detailedOverviewAr:
      'توفر خدمة "الاستعلام الموحد عن المخالفات المرورية، وتسويتها بالخصم، وإدارة النقاط السوداء" في مركز الكرامة للأعمال للسائقين ومندوبي الشركات ومديري الأساطيل استعلاماً شاملاً ولحظياً وسداداً رسمياً فورياً عبر كافة قواعد البيانات المرورية بالدولة—بما فيها شرطة دبي، وهيئة الطرق والمواصلات، وشرطة أبوظبي، ووزارة الداخلية الاتحادية. فالغرامات المرورية المتراكمة، ومخالفات الرادار، وسالك، ومواقف، والنقاط المرورية السوداء قد تعطل تجديد رخصة القيادة، أو تمنع تجديد ملكية المركبة، أو تؤدي لأوامر حجز. ويقوم مكتبنا بفحص الملفات الموحدة، وتطبيق الخصومات الرسمية أو خطط التقسيط المتاحة، وسداد المبالغ، وتحويل النقاط السوداء وإسقاطها مع إصدار شهادات كف البحث وإيصالات براءة الذمة فوراً.',
    legalFrameworkEn:
      'Regulated by UAE Federal Traffic Law No. 21 of 1995, its executive amendments, and Dubai Police / RTA Traffic Violations and Black Points Decrees.',
    legalFrameworkAr:
      'خاضعة لأحكام قانون السير والمرور الاتحادي رقم 21 لسنة 1995 وتعديلاته وقرارات شرطة دبي وهيئة الطرق بشأن المخالفات وحجز المركبات والنقاط السوداء.',
    eligibilityEn: [
      'Motorists with traffic violations registered under their Traffic File (T.C. No.), Plate Number, or Driving License',
      'Drivers facing license suspension due to accumulated Traffic Black Points (up to the 24-point threshold)',
      'Vehicle owners requiring Impoundment Fee Payment (Badal Al-Hajz) to avoid physical vehicle confiscation',
      'Corporate fleet managers reconciling monthly parking, Salik, and traffic fines across commercial fleets',
    ],
    eligibilityAr: [
      'السائقون المسجل بحقهم مخالفات مرورية بموجب الرمز المروري (T.C. No)، أو رقم اللوحة، أو رخصة القيادة',
      'السائقون المعرضون لسحب رخصة القيادة بسبب تراكم النقاط المرورية السوداء (الوصول لحد 24 نقطة)',
      'ملاك المركبات الراغبون في سداد بدل الحجز المالي لتفادي حجز المركبة الفعلي في شباك الحجز',
      'مديرو أساطيل الشركات لمطابقة وسداد مخالفات سالك والمواقف والمخالفات الرادارية الشهرية',
    ],
    galleryImages: COMMON_GALLERY,
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'Unified 7-Emirates Traffic File Lookup',
        titleAr: 'الاستعلام الموحد عن المخالفات في إمارات الدولة السبع',
        descEn: 'Live lookup across Dubai Police, RTA, and MOI systems using plate number, license, or traffic file.',
        descAr: 'استعلام لحظي شامل عبر أنظمة شرطة دبي وهيئة الطرق ووزارة الداخلية برقم اللوحة أو الملف.',
        durationEn: '2 Mins',
        durationAr: 'دقيقتان',
      },
      {
        stepNumber: 2,
        titleEn: 'Black Point Allocation & Discount Review',
        titleAr: 'تحويل النقاط السوداء ومراجعة الخصومات المتاحة',
        descEn: 'Assigning black points to the verified driver and applying any active official government settlement discounts.',
        descAr: 'تحويل النقاط السوداء للسائق الفعلي المخالف وتطبيق أي خصومات حكومية معتمدة سارية.',
        durationEn: '5 Mins',
        durationAr: '5 دقائق',
      },
      {
        stepNumber: 3,
        titleEn: 'Official Settlement Receipt & File Unblocking',
        titleAr: 'إصدار إيصال السداد الرسمي وفك الحظر عن الملف',
        descEn: 'Settling fines with instantaneous electronic clearance lifting vehicle and license holds on police servers.',
        descAr: 'سداد المخالفات وإصدار إيصال براءة الذمة وفك الحظر الإداري عن المركبة ورخصة القيادة فوراً.',
        durationEn: 'Instant',
        durationAr: 'فوري',
      },
    ],
    faqs: [
      {
        questionEn: 'Can I pay a vehicle impound fee (Badal Al-Hajz) at Karama Business Center instead of having my car confiscated?',
        questionAr: 'هل يمكنني سداد بدل الحجز المالي في مركز الكرامة للأعمال بدلاً من حجز السيارة الفعلي؟',
        answerEn: 'Yes! For eligible traffic violations where vehicle impoundment is prescribed, Dubai Police allows motorists to pay an official statutory smart impoundment fee (Badal Al-Hajz) per impound day so the vehicle remains in your possession. Our desk processes this clearance on the spot.',
        answerAr: 'نعم بالتأكيد! في المخالفات التي تقرر حجز المركبة، تتيح شرطة دبي سداد بدل حجز مالي رسمي عن كل يوم حجز لتبقى المركبة في حوزتك واستخدامك دون سحبها لشباك الحجز، وينجز مكتبنا ذلك فوراً.',
      },
    ],
    reviews: [
      {
        name: 'Hassan Al-Zubaidi',
        roleEn: 'Real Estate Developer',
        roleAr: 'مطور عقاري',
        companyEn: 'Zubaidi Luxury Properties',
        companyAr: 'الزبيدي للعقارات الفاخرة',
        rating: 5,
        date: 'October 2026',
        commentEn: 'Cleared accumulated traffic fines across Dubai and Abu Dhabi and sorted 12 black points in 10 minutes at Karama Business Center. Fast, professional, and gave me official printed settlement vouchers.',
        commentAr: 'سددت المخالفات المرورية المتراكمة في دبي وأبوظبي وحولت 12 نقطة سوداء خلال 10 دقائق بمركز الكرامة للأعمال. تعامل سريع وإيصالات سداد حكومية رسمية فورية.',
      },
    ],
    targetKeywords: {
      shortTail: [
        'traffic fine payment dubai',
        'rta fine inquiry karama',
        'dubai police fine payment',
        'black points transfer dubai',
        'vehicle impound fee payment dubai',
      ],
      longTail: [
        'unified traffic fine inquiry and payment dubai police rta moi',
        'how to transfer traffic black points to driving license dubai',
        'pay badal al hajz vehicle smart impoundment fee karama dubai',
        'clear traffic fines for driving license and mulkiya renewal dubai',
      ],
    },
  },

  // ============================================================================
  // ZAJEL & TAWJEEH (3 Dedicated Individual Services)
  // ============================================================================
  'tawjeeh-worker-awareness-classes': {
    detailedOverviewEn:
      'Mandatory MoHRE Tawjeeh Worker Awareness Lectures & Certificate Issuance at Karama Business Center (KBC) fulfills the statutory orientation requirements under the UAE Ministry of Human Resources & Emiratisation (MoHRE) for newly recruited private sector workers. Designed to protect both employees and employers, our licensed Tawjeeh Center hosts interactive, multi-lingual audio-visual awareness sessions in state-of-the-art auditoriums in Al Karama. Qualified Tawjeeh legal lecturers educate workers on the provisions of Federal Decree-Law No. 33 of 2021 (UAE Labour Law), contractual duties, wage protection (WPS), occupational health and safety rules, accommodation standards, and formal MoHRE labor complaint procedures. Upon completion of the 45-minute lecture, the mandatory official Tawjeeh Certificate is generated and uploaded directly to MoHRE servers, unblocking the worker’s file for residency visa stamping.',
    detailedOverviewAr:
      'تُعد خدمة "عقد محاضرات التوعية العمالية الإلزامية وإصدار شهادة توجيه" في مركز الكرامة للأعمال (KBC) استيفاءً للاشتراطات القانونية المعتمدة لدى وزارة الموارد البشرية والتوطين (MoHRE) للعمال المستقدمين حديثاً في منشآت القطاع الخاص بدولة الإمارات. ويهدف هذا البرنامج إلى حماية حقوق أطراف الإنتاج؛ حيث يستضيف مركز توجيه المرخص جلسات توعية تفاعلية متعددة اللغات داخل قاعات حديثة ومجهزة بالكامل في الكرامة. ويقوم محاضرون قانونيون بتوعية العمال بأحكام المرسوم بقانون اتحادي رقم 33 لسنة 2021 (قانون العمل)، والواجبات التعاقدية، ونظام حماية الأجور (WPS)، والسلامة المهنية، وقنوات الشكاوى الرسمية. وفور انتهاء المحاضرة (45 دقيقة)، تصدر "شهادة توجيه" الرسمية وتُرفع آلياً لخوادم الوزارة لفتح مسار تثبيت الإقامة فوراً.',
    legalFrameworkEn:
      'Mandated under UAE Federal Decree-Law No. 33 of 2021 Regulating Labour Relations and MoHRE Ministerial Resolutions on Tawjeeh Guidance Centers.',
    legalFrameworkAr:
      'إلزامية بموجب المرسوم بقانون اتحادي رقم 33 لسنة 2021 بشأن تنظيم علاقات العمل والقرارات الوزارية المنظمة لعمل مراكز توجيه المعتمدة.',
    eligibilityEn: [
      'Newly recruited private sector employees holding new MoHRE electronic work permits in Skill Levels 3, 4, and 5',
      'Corporate HR departments onboarding worker batches requiring certified Tawjeeh lecture completion',
      'Workers transitioning between employers requiring labor awareness clearance before visa stamping',
    ],
    eligibilityAr: [
      'العمال المستقدمون حديثاً في منشآت القطاع الخاص الحاصلون على تصاريح عمل بالمستويات المهارية 3 و4 و5',
      'إدارات الموارد البشرية بالشركات لاستكمال إجراءات تدريب وتوعية العمال الجدد لإصدار إقاماتهم',
      'العمال المنتقلون بين المنشآت والملزمون باستيفاء شهادة التوعية العمالية قبل تثبيت الإقامة',
    ],
    galleryImages: COMMON_GALLERY,
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'Work Permit Intake & Language Assignment',
        titleAr: 'تسجيل تصريح العمل وتحديد لغة المحاضرة',
        descEn: 'Registering the worker with their MoHRE transaction number and assigning their native language lecture hall.',
        descAr: 'تسجيل بيانات العامل برقم معاملة الوزارة وتوجيهه للقاعة المخصصة للغته الأم.',
        durationEn: '10 Mins',
        durationAr: '10 دقائق',
      },
      {
        stepNumber: 2,
        titleEn: '45-Minute Interactive Legal & Safety Lecture',
        titleAr: 'حضور المحاضرة التفاعلية لقانون العمل والسلامة',
        descEn: 'Attending the comprehensive orientation on UAE labour rights, occupational hygiene, and dispute resolution.',
        descAr: 'حضور جلسة التوعية التفاعلية (45 دقيقة) حول الحقوق والواجبات العمالية والسلامة المهنية.',
        durationEn: '45 Mins',
        durationAr: '45 دقيقة',
      },
      {
        stepNumber: 3,
        titleEn: 'Instant Tawjeeh Certificate Issuance & MoHRE Sync',
        titleAr: 'إصدار شهادة توجيه الرقمية والربط مع نظام الوزارة',
        descEn: 'Official certificate uploaded immediately to MoHRE servers, enabling instant visa stamping at our adjacent Amer desk.',
        descAr: 'رفع شهادة توجيه فوراً لخوادم وزارة الموارد البشرية وتثبيت الإقامة لدى كاونتر آمر المجاور.',
        durationEn: 'Instant',
        durationAr: 'فوري',
      },
    ],
    faqs: [
      {
        questionEn: 'In which languages are Tawjeeh worker awareness lectures conducted at Karama Business Center?',
        questionAr: 'ما هي اللغات المتوفرة لمحاضرات توجيه التوعوية بمركز الكرامة للأعمال؟',
        answerEn: 'Our modern multimedia auditoriums deliver certified lectures in more than 10 languages: Arabic, English, Urdu, Hindi, Tagalog, Bengali, Malayalam, Tamil, Pashto, and Sinhala, ensuring complete comprehension by all workers.',
        answerAr: 'تقدم قاعاتنا التفاعلية المحاضرات بأكثر من 10 لغات معتمدة: العربية، الإنجليزية، الأردية، الهندية، التاغالوغ (الفلبينية)، البنغالية، المالايالامية، التاميلية، البشتو، والسنهالية، لضمان استيعاب العامل لكافة حقوقه.',
      },
    ],
    reviews: [
      {
        name: 'Ramesh Patel',
        roleEn: 'HR Generalist',
        roleAr: 'أخصائي موارد بشرية',
        companyEn: 'Al Futtaim Engineering Services',
        companyAr: 'الفطيم للخدمات الهندسية',
        rating: 5,
        date: 'October 2026',
        commentEn: 'We sent our new batch of 20 technicians to Tawjeeh at Karama Business Center. Spacious air-conditioned auditoriums, Hindi presentation, and their Tawjeeh certificates were approved in the MoHRE system within 10 minutes of lecture end.',
        commentAr: 'أرسلنا دفعة من 20 فنياً جديداً لمركز توجيه بالكرامة. قاعات مكيفة ومجهزة، ومحاضرة باللغة الهندية، واعتمدت شهادات توجيه في نظام الوزارة خلال 10 دقائق من انتهاء المحاضرة.',
      },
    ],
    targetKeywords: {
      shortTail: [
        'tawjeeh classes dubai',
        'worker awareness lecture karama',
        'mohre tawjeeh certificate',
        'tawjeeh center al karama',
        'labour awareness session dubai',
      ],
      longTail: [
        'mandatory mohre tawjeeh worker awareness lecture and certificate karama dubai',
        'multi-lingual tawjeeh awareness classes in hindi urdu tagalog dubai',
        'tawjeeh certificate for employment residence visa stamping dubai',
        'accredited tawjeeh training center near karama post office',
      ],
    },
  },

  'tawjeeh-eid-passport-delivery': {
    detailedOverviewEn:
      'Zajel Express Courier Logistics for Emirates IDs, Passports & Attested Documents at Karama Business Center provides diplomatic-grade, insured, tamper-proof courier transit across Dubai and all seven Emirates of the UAE. Handled in direct integration with Zajel Courier (the official logistical partner for Dubai Government, ICP, and GDRFA), our desk ensures that newly stamped passports, newly printed Emirates ID cards, attested university degrees, and judicial deeds are transported with complete security and confidentiality. Customers receive real-time SMS status updates, flexible delivery scheduling, and verified digital signature capture upon doorstep delivery to their residential villa, apartment, or corporate office.',
    detailedOverviewAr:
      'توفر خدمة "الشحن البريدي السريع والمؤمن لبطاقات الهوية والجوازات والشهادات المصدقة عبر زاجل" في مركز الكرامة للأعمال نقلاً بريدياً دبلوماسياً مؤمناً ومحكم الإغلاق يغطي إمارة دبي وكافة إمارات الدولة السبع. وتُدار الخدمة بالربط المباشر مع بريد "زاجل" (الشريك اللوجستي الرسمي لحكومة دبي، والهيئة الاتحادية للهوية والجنسية، وإقامة دبي)؛ مما يضمن نقل جوازات السفر المثبتة، وبطاقات الهوية المطبوعة، والشهادات المصدقة، والوكالات العدلية بأعلى درجات السرية والأمان. ويستفيد المتعامل من إشعارات نصية دورية لمتابعة الشحنة، وجدولة موعد التسليم المناسب، والتوقيع الرقمي عند استلام الوثائق عند باب منزله أو مكتبه.',
    legalFrameworkEn:
      'Operated under UAE Federal Logistics & Postal Regulatory Directives and official Dubai Government Zajel Partnership Standards.',
    legalFrameworkAr:
      'تُنفذ وفق معايير تنظيم الخدمات البريدية واللوجستية الاتحادية واتفاقيات الشراكة المعتمدة لبريد زاجل مع حكومة دبي.',
    eligibilityEn: [
      'Applicants completing residence visa stamping or Emirates ID applications wishing doorstep delivery',
      'Clients utilizing our Atlas Attestation desk requiring insured delivery of original diplomas and birth certificates',
      'Law firms, PROs, and corporations requiring secure daily courier dispatch of attested deeds and government dockets',
    ],
    eligibilityAr: [
      'المتعاملون المنجزون لمعاملات تثبيت الإقامة أو بطاقات الهوية والراغبون في التوصيل لباب المنزل أو المكتب',
      'عملاء قسم أطلس للتصديقات الراغبون في استلام شهاداتهم الأصلية المصدقة في حقائب مؤمنة',
      'مكاتب المحاماة ومندوبو الشركات لتوصيل الوكالات العدلية والمعاملات الحكومية الرسمية بأمان',
    ],
    galleryImages: COMMON_GALLERY,
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'Document Packaging in Tamper-Proof Pouch',
        titleAr: 'تغليف المستند في حقيبة أمنية محكمة الإغلاق',
        descEn: 'Sealing your original passport, Emirates ID, or attested degree into a serial-numbered diplomatic security envelope.',
        descAr: 'إيداع جواز السفر الأصلي أو بطاقة الهوية أو الشهادة في حقيبة شحن أمنية مرقمة وغير قابلة للفتح دون أثر.',
        durationEn: 'Instant',
        durationAr: 'فوري',
      },
      {
        stepNumber: 2,
        titleEn: 'Zajel Barcode Tracking & Airway Bill Issuance',
        titleAr: 'إصدار بوليصة الشحن ورمز التتبع اللحظي',
        descEn: 'Generating the official Zajel tracking number with instant automated SMS notification to your mobile phone.',
        descAr: 'إصدار رقم التتبع الرسمي لبريد زاجل وإرسال رسالة نصية فورية لهاتفك بموعد الشحن.',
        durationEn: '5 Mins',
        durationAr: '5 دقائق',
      },
      {
        stepNumber: 3,
        titleEn: 'Doorstep Courier Handover & Verified E-Sign',
        titleAr: 'التوصيل حتى بابك والتوقيع الإلكتروني على الاستلام',
        descEn: 'Priority courier delivery to your home or office address with digital identity verification and signature receipt.',
        descAr: 'توصيل المستند لباب منزلك أو برج شركتك والتحقق من هوية المستلم وتوقيعه رقمياً على الاستلام.',
        durationEn: '24 Hours',
        durationAr: '24 ساعة',
      },
    ],
    faqs: [
      {
        questionEn: 'How can I track the delivery status of my passport or Emirates ID sent via Zajel at your center?',
        questionAr: 'كيف يمكنني تتبع حالة شحنة جواز السفر أو بطاقة الهوية المرسلة عبر زاجل بمركزكم؟',
        answerEn: 'Upon parcel registration, you receive an official Zajel 12-digit Airway Bill (AWB) number via SMS. You can track its live transit milestones 24/7 on our website tracker or via the Zajel portal, with delivery scheduled directly to your door within 24 hours.',
        answerAr: 'فور قيد الشحنة، تصلك رسالة نصية (SMS) برقم بوليصة الشحن (AWB) المكون من 12 رقماً، ويمكنك تتبع مراحل النقل لحظياً على مدار الساعة عبر بوابتنا أو بوابة زاجل، مع التسليم خلال 24 ساعة.',
      },
    ],
    reviews: [
      {
        name: 'Leila Benali',
        roleEn: 'Executive Personal Assistant',
        roleAr: 'مساعد تنفيذي خاص',
        companyEn: 'Al-Noor Family Office',
        companyAr: 'مكتب النور العائلي',
        rating: 5,
        date: 'October 2026',
        commentEn: 'Zajel courier at Karama Business Center handled the delivery of four newly stamped family passports and five attested school certificates. Delivered right to our Emirates Hills villa in a sealed tamper-proof bag the next morning.',
        commentAr: 'تولى بريد زاجل بمركز الكرامة للأعمال توصيل أربعة جوازات سفر مثبتة وخمس شهادات دراسية مصدقة لعائلتنا. سُلمت في فيلتنا بتلال الإمارات في حقيبة أمنية مغلقة صباح اليوم التالي.',
      },
    ],
    targetKeywords: {
      shortTail: [
        'zajel courier dubai',
        'emirates id delivery zajel',
        'passport courier delivery uae',
        'document delivery karama',
        'zajel tracking dubai',
      ],
      longTail: [
        'zajel priority diplomatic document and passport delivery karama dubai',
        'secure doorstep emirates id and residency passport delivery uae',
        'insured tamper-proof courier service for attested certificates dubai',
        'official zajel parcel dropoff and tracking desk al karama',
      ],
    },
  },

  'tawjeeh-labour-law-legal-advice': {
    detailedOverviewEn:
      'UAE Labour Law Legal Advisory & Gratuity Calculation at Karama Business Center (KBC) provides authoritative, impartial legal guidance for private sector employers, HR managers, and employees navigating UAE Federal Decree-Law No. 33 of 2021 Regulating Labour Relations. Whether you need exact statutory end-of-service gratuity calculations under indefinite vs. limited contracts, legal clarification on probation period terminations, arbitrary dismissal claims, annual leave compensation audits, non-compete clause validity, or guidance prior to filing a formal MoHRE labor grievance, our accredited Tawjeeh labor consultants conduct private, regulation-backed advisory sessions to resolve contractual ambiguities before disputes escalate.',
    detailedOverviewAr:
      'توفر خدمة "الاستشارات والتوجيه القانوني لقانون العمل الإماراتي وحساب مكافأة نهاية الخدمة" في مركز الكرامة للأعمال (KBC) إرشاداً قانونياً محايداً ومعتمداً لأصحاب العمل، ومديري الموارد البشرية، والموظفين في القطاع الخاص في ضوء أحكام المرسوم بقانون اتحادي رقم 33 لسنة 2021 بشأن تنظيم علاقات العمل. وسواء كنت بحاجة إلى حساب رياضي وقانوني دقيق لمكافأة نهاية الخدمة، أو توضيح شروط إنهاء الخدمة خلال فترة التجربة، أو دعاوى الفصل التعسفي والتعويض، أو تدقيق مستحقات الإجازات السنوية، أو مدى مشروعية شرط عدم المنافسة، أو التوجيه القانوني قبل قيد شكوى عمالية رسمية لدى الوزارة، يقدم مستشارو توجيه جلسات استشارية متخصصة لحل الخلافات التعاقدية ودياً وقانونياً.',
    legalFrameworkEn:
      'Grounded strictly in UAE Federal Decree-Law No. 33 of 2021 Regulating Labour Relations and Cabinet Resolution No. 1 of 2022 on its Executive Regulations.',
    legalFrameworkAr:
      'مستندة حصرياً للمرسوم بقانون اتحادي رقم 33 لسنة 2021 بشأن تنظيم علاقات العمل، وقرار مجلس الوزراء رقم 1 لسنة 2022 بإصدار لائحته التنفيذية.',
    eligibilityEn: [
      'Employers and HR Managers auditing workforce settlements, contract terminations, or non-compete clauses',
      'Employees seeking verified mathematical calculations of their end-of-service gratuity, leave pay, and notice period dues',
      'Parties preparing for amicable settlement mediation at MoHRE or referral to Dubai Labour Court',
    ],
    eligibilityAr: [
      'أصحاب العمل ومديرو الموارد البشرية لتدقيق تسويات نهاية الخدمة أو شروط إنهاء العقود وعدم المنافسة',
      'الموظفون والعمال الراغبون في حساب قانوني ومالي دقيق لمكافأة نهاية الخدمة وبدل الإجازات وفترة الإنذار',
      'أطراف علاقة العمل الراغبون في التسوية الودية لدى الوزارة أو التجهيز لإحالة النزاع للمحكمة العمالية',
    ],
    galleryImages: COMMON_GALLERY,
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'Contract & Wage History Intake',
        titleAr: 'مراجعة عقد العمل وسجل الرواتب (WPS)',
        descEn: 'Reviewing your approved electronic MoHRE employment contract, basic salary, allowances, and hire/termination dates.',
        descAr: 'فحص عقد العمل الإلكتروني المعتمد لدى الوزارة، وتحديد الراتب الأساسي والبدلات وتواريخ بدء وانتهاء الخدمة.',
        durationEn: '15 Mins',
        durationAr: '15 دقيقة',
      },
      {
        stepNumber: 2,
        titleEn: 'Statutory Entitlement & Gratuity Calculation',
        titleAr: 'الحساب القانوني لمكافأة نهاية الخدمة والمستحقات',
        descEn: 'Applying statutory formulas under Articles 51–53 of the Labour Law to calculate exact severance pay and unpaid dues.',
        descAr: 'تطبيق المعادلات القانونية للمادتين 51 و53 من قانون العمل لحساب مكافأة نهاية الخدمة وبدل الإجازات بدقة.',
        durationEn: '15 - 20 Mins',
        durationAr: '15 - 20 دقيقة',
      },
      {
        stepNumber: 3,
        titleEn: 'Official Advisory Statement & Roadmap',
        titleAr: 'تسليم التقرير الاستشاري وخارطة الطريق القانونية',
        descEn: 'Delivering a stamped calculation breakdown and actionable guidance for amicable settlement or formal filing.',
        descAr: 'تسليم كشف حساب تفصيلي معتمد ومختوم وتوضيح الخيارات القانونية للتسوية الودية أو الشكوى الرسمية.',
        durationEn: 'Same Day',
        durationAr: 'في نفس اليوم',
      },
    ],
    faqs: [
      {
        questionEn: 'How is end-of-service gratuity calculated under the current UAE Labour Law (Decree-Law No. 33 of 2021)?',
        questionAr: 'كيف تُحتسب مكافأة نهاية الخدمة بموجب قانون العمل الإماراتي الحالي (مرسوم بقانون 33 لسنة 2021)؟',
        answerEn: 'Under Article 51 of the UAE Labour Law, a full-time employee who completes at least one year of continuous service is entitled to: 21 days’ basic wage for each year of the first five years of service, and 30 days’ basic wage for each additional year thereafter, calculated strictly on the last basic salary. Unused annual leave and notice period days are calculated separately.',
        answerAr: 'بموجب المادة 51 من قانون العمل الإماراتي، يستحق الموظف بدوام كامل الذي أكمل سنة على الأقل: أجر 21 يوماً من الراتب الأساسي عن كل سنة من السنوات الخمس الأولى، وأجر 30 يوماً عن كل سنة تالية، محسوبة على آخر راتب أساسي، وتضاف مستحقات الإجازات والإنذار بشكل مستقل.',
      },
    ],
    reviews: [
      {
        name: 'Siddharth Menon',
        roleEn: 'General Manager',
        roleAr: 'مدير عام',
        companyEn: 'Menon Engineering Consultancy',
        companyAr: 'مينون للاستشارات الهندسية',
        rating: 5,
        date: 'October 2026',
        commentEn: 'Booked a consultation session with their senior Tawjeeh legal advisor to structure end-of-service packages for five departing managers. Clear mathematical breakdowns, exact statutory citations, and total clarity.',
        commentAr: 'حجزت جلسة استشارية مع المستشار القانوني بتوجيه لحساب تسويات نهاية الخدمة لخمسة مديرين متقاعدين. حسابات دقيقة بالأرقام واستناد صريح لبنود القانون ووضوح تام.',
      },
    ],
    targetKeywords: {
      shortTail: [
        'uae labour law legal advice',
        'gratuity calculation dubai',
        'end of service calculation uae',
        'tawjeeh legal counselor karama',
        'mohre labour dispute advice',
      ],
      longTail: [
        'uae labour law decree 33 gratuity and end of service calculation service karama',
        'confidential labour dispute legal consultation and settlement advisory dubai',
        'how to calculate end of service gratuity for limited contracts uae',
        'employer and employee labour law legal rights guidance al karama',
      ],
    },
  },

  // ============================================================================
  // TADBEER DOMESTIC WORKERS (4 Dedicated Individual Services)
  // ============================================================================
  'tadbeer-domestic-worker-sponsorship': {
    detailedOverviewEn:
      'Tadbeer Private Sponsor Domestic Worker & Housemaid Visa Packages at Karama Business Center (KBC) provides expatriate and Emirati families in Dubai with authorized recruitment and residency sponsorship for housemaids, nannies, private cooks, drivers, and caregivers under the official framework of the Ministry of Human Resources & Emiratisation (MoHRE License #DB-8849). Under this package, the domestic helper is recruited from accredited source countries (including the Philippines, Indonesia, Ethiopia, Sri Lanka, and Kenya) or hired locally from inside the UAE, and sponsored directly under the family’s name. Our center handles all statutory prerequisites: MoHRE domestic entry permits, airport reception, Salem medical fitness examinations, biometric Emirates ID capture, comprehensive health insurance coverage, and the mandatory 2-year Tadbeer replacement warranty in case of medical unfitness or refusal of work.',
    detailedOverviewAr:
      'توفر "باقة الكفالة المباشرة للأسرة لاستقدام وتأشيرة العمالة المساعدة ومدبرات المنازل (تدبير)" في مركز الكرامة للأعمال (KBC) للأسر المواطنة والمقيمة في دبي إجراءات استقدام وتأشيرة معتمدة للمساعدين المنزليين، والمربيات، والطهاة، والسائقين الخاصين، وجليسي كبار السن تحت إشراف وزارة الموارد البشرية والتوطين (رخصة تدبير رقم DB-8849). ومن خلال هذه الباقة، يتم استقدام العامل من البلدان المعتمدة (الفلبين، إندونيسيا، إثيوبيا، سريلانكا، وكينيا) أو التعاقد مع عمالة متواجدة داخل الدولة وتثبيت التأشيرة تحت كفالة رب الأسرة مباشرة. ويتولى مركزنا كافة الإجراءات: إذن الدخول، الاستقبال، فحص سالم الطبي بالكرامة، بصمة الهوية، التأمين الصحي الشامل، مع ضمان تدبير الرسمي للاستبدال لمدة سنتين.',
    legalFrameworkEn:
      'Governed by UAE Federal Decree-Law No. 9 of 2022 Concerning Domestic Workers and MoHRE Ministerial Resolutions Regulating Tadbeer Center Recruitment Packages.',
    legalFrameworkAr:
      'تخضع للمرسوم بقانون اتحادي رقم 9 لسنة 2022 بشأن عمال الخدمة المساعدة وقرارات وزارة الموارد البشرية المنظمة لباقات مراكز تدبير المعتمدة.',
    eligibilityEn: [
      'Emirati heads of family sponsoring domestic staff under standard family quota',
      'Expatriate sponsors meeting the minimum monthly salary threshold of AED 25,000 with a valid Ejari tenancy contract',
      'Families seeking a direct 2-year family sponsorship model with full Tadbeer contractual replacement guarantees',
    ],
    eligibilityAr: [
      'أرباب الأسر من مواطني الدولة لكفالة العمالة المساعدة وفق الكوتا الأسرية المعتمدة',
      'المقيمون المستوفون لشرط الحد الأدنى للراتب الشهري (25,000 درهم بموجب شهادة راتب معتمدة) وعقد إيجاري سكني ملائم',
      'العائلات الراغبة في كفالة العامل مباشرة على ملف الأسرة لمدة سنتين مع ضمانات تدبير المعتمدة للاستبدال والتأمين',
    ],
    galleryImages: COMMON_GALLERY,
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'Candidate Selection & Unified Tadbeer Contract',
        titleAr: 'اختيار السيرة الذاتية وتوقيع عقد تدبير الموحد',
        descEn: 'Selecting verified, pre-screened domestic helpers and executing the standardized MoHRE domestic employment contract.',
        descAr: 'اختيار المرشحة المناسبة بعد المقابلة وتوقيع عقد استقدام العمالة المساعدة الموحد المعتمد من الوزارة.',
        durationEn: 'Day 1',
        durationAr: 'اليوم 1',
      },
      {
        stepNumber: 2,
        titleEn: 'MoHRE Entry Permit & Arrival Coordination',
        titleAr: 'إصدار إذن الدخول واستقبال العاملة',
        descEn: 'Issuing the electronic domestic entry permit and coordinating airport pickup and transit to our center.',
        descAr: 'إصدار إذن الدخول الإلكتروني وتنسيق استقبال العاملة بالمطار ونقلها مباشرة للمركز.',
        durationEn: '2 - 4 Days',
        durationAr: '2 - 4 أيام',
      },
      {
        stepNumber: 3,
        titleEn: 'Salem Medical, Biometrics & 2-Year Visa Stamping',
        titleAr: 'فحص سالم الطبي والبصمة وتثبيت الإقامة لسنتين',
        descEn: 'Completing on-site Salem medical screening, Hepatitis B vaccine, Emirates ID capture, and stamping the 2-year domestic residency.',
        descAr: 'إنجاز فحص سالم الطبي بالمركز وتطعيم الكبد وبصمة الهوية وتثبيت تأشيرة الإقامة لمدة سنتين مع تسليم وثيقة التأمين.',
        durationEn: '24 - 48 Hours',
        durationAr: '24 - 48 ساعة',
      },
    ],
    faqs: [
      {
        questionEn: 'What replacement guarantees does Tadbeer provide if a housemaid refuses to work or is medically unfit?',
        questionAr: 'ما هي ضمانات الاستبدال التي يوفرها مركز تدبير في حال رفض العاملة للعمل أو عدم لياقتها الطبية؟',
        answerEn: 'Under MoHRE Tadbeer regulations, the domestic worker is covered by a mandatory 2-year warranty. During the initial probation period (6 months), if the worker refuses to work, absconds, or fails medical fitness screening, Tadbeer provides a 100% free candidate replacement or full refund of recruitment costs; during the remainder of the 2-year contract, pro-rata replacement guarantees apply.',
        answerAr: 'بموجب لوائح تدبير المعتمدة، يتمتع الكفيل بضمان رسمي لمدة سنتين؛ فخلال فترة التجربة الأولى (6 أشهر) في حال رفض العمل أو الانقطاع أو عدم اللياقة الطبية، يلتزم تدبير باستبدال العاملة مجاناً أو رد كامل التكاليف، مع تطبيق ضمان الاستبدال النسبي خلال باقي مدة العقد.',
      },
    ],
    reviews: [
      {
        name: 'Rashid & Noora Al-Falasi',
        roleEn: 'Emirati Family',
        roleAr: 'أسرة مواطنة',
        companyEn: 'Nad Al Sheba Dubai',
        companyAr: 'ند الشبا دبي',
        rating: 5,
        date: 'October 2026',
        commentEn: 'Hired our family cook and housemaid through Tadbeer at Karama Business Center. Clear recruitment pricing, professional airport reception, and their medical and visa were done in the same building.',
        commentAr: 'استقدمنا طاهية ومدبرة منزل عبر تدبير بمركز الكرامة للأعمال. أسعار استقدام واضحة، استقبال احترافي بالمطار، وأنجز الفحص الطبي والإقامة في نفس المبنى.',
      },
    ],
    targetKeywords: {
      shortTail: [
        'tadbeer maid visa dubai',
        'domestic worker sponsorship dubai',
        'tadbeer center karama',
        'hire housemaid dubai tadbeer',
        'mohre domestic worker contract',
      ],
      longTail: [
        'tadbeer private sponsor domestic worker and housemaid visa package dubai',
        'how to sponsor a housemaid legally under mohre tadbeer regulations',
        'tadbeer maid recruitment with 2 year replacement warranty karama',
        'philippine and indonesian domestic worker visa processing dubai',
      ],
    },
  },

  'tadbeer-center-sponsorship-package': {
    detailedOverviewEn:
      'The Tadbeer Center Sponsorship & Flexible Monthly Domestic Packages at Karama Business Center (KBC) is the premier zero-liability solution for expatriate families, corporate executives, and working parents in Dubai who do not meet the AED 25,000 monthly salary sponsorship requirement or prefer not to take on the legal and financial liabilities of direct personal sponsorship. Under this package, Tadbeer remains the official legal and visa sponsor of the domestic helper, housemaid, or nanny throughout the entire contract. Families enjoy flexible engagement terms (long-term 2-year contracts or flexible monthly packages), comprehensive all-inclusive coverage (salary, medical insurance, visa fees, annual leave, end-of-service gratuity, and flight tickets handled directly by Tadbeer), and instant replacement at any time if the candidate is not a suitable fit for your household.',
    detailedOverviewAr:
      'تُعد "باقة كفالة مركز تدبير والباقات الشهرية المرنة للعمالة المساعدة" في مركز الكرامة للأعمال (KBC) الحل القانوني الأمثل والأكثر مرونة للأسر المقيمة والمديرين التنفيذيين في دبي الذين لا يستوفون شرط الراتب الشهري (25,000 درهم) أو يفضلون عدم تحمل المسؤوليات القانونية والمالية للكفالة الشخصية المباشرة. ومن خلال هذه الباقة، يظل مركز تدبير هو الكفيل القانوني الرسمي للمساعدة المنزلية أو المربية طوال فترة التعاقد، وتستفيد الأسرة من باقات تعاقد مرنة (عقود سنتين أو باقات شهرية)، وتغطية شاملة لكل التكاليف (الراتب الشهري، التأمين الصحي، رسوم التأشيرة، الإجازات، مكافأة نهاية الخدمة، وتذاكر السفر يتكفل بها تدبير بالكامل)، مع إمكانية استبدال العاملة فوراً في أي وقت.',
    legalFrameworkEn:
      'Authorized under MoHRE Domestic Worker Licensing Framework (Tadbeer Center Sponsorship Model - Package 2 & 3).',
    legalFrameworkAr:
      'مرخصة بموجب أطر وزارة الموارد البشرية للعمالة المساعدة (نموذج كفالة مركز تدبير - الباقتان الثانية والثالثة).',
    eligibilityEn: [
      'Expatriate residents whose monthly salary is below the AED 25,000 threshold required for personal sponsorship',
      'Families desiring zero employer liability regarding worker absconding, medical emergencies, or severance payments',
      'Executives and working parents seeking flexible monthly domestic staff arrangements with immediate replacement options',
    ],
    eligibilityAr: [
      'المقيمون الذين يقل راتبهم الشهري عن 25,000 درهم ولا تنطبق عليهم شروط الكفالة الشخصية المباشرة',
      'الأسر الراغبة في انعدام أي مسؤولية قانونية أو مالية في حال الانقطاع أو الطوارئ الطبية أو مكافأة نهاية الخدمة',
      'المديرون وأولياء الأمور الباحثون عن مرونة التعاقد الشهري مع إمكانية استبدال العاملة فوراً دون أي رسوم جديدة',
    ],
    galleryImages: COMMON_GALLERY,
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'Requirement Assessment & Candidate Interview',
        titleAr: 'تحديد المتطلبات ومقابلة المرشحات المتاحة',
        descEn: 'Reviewing household requirements (nanny, cook, maid) and interviewing pre-screened domestic helpers available under Tadbeer sponsorship.',
        descAr: 'تحديد مهام العمل (تربية أطفال، طبخ، نظافة) ومقابلة المرشحات الجاهزات المتواجدات على كفالة تدبير.',
        durationEn: 'Day 1',
        durationAr: 'اليوم 1',
      },
      {
        stepNumber: 2,
        titleEn: 'Flexible Service Agreement Execution',
        titleAr: 'توقيع اتفاقية باقة تدبير المعتمدة',
        descEn: 'Executing the standardized Tadbeer Center Service Agreement outlining monthly billing and replacement terms.',
        descAr: 'توقيع اتفاقية تقديم خدمات تدبير الموحدة التي تحدد الدفعات الشهرية وضمانات الاستبدال الفوري.',
        durationEn: 'Same Day',
        durationAr: 'في نفس اليوم',
      },
      {
        stepNumber: 3,
        titleEn: 'Immediate Deployment & Ongoing Management',
        titleAr: 'بدء العمل الفوري وإدارة كافة المستحقات من تدبير',
        descEn: 'Worker deploys to your home immediately; Tadbeer handles payroll, medical insurance, and visa obligations.',
        descAr: 'تباشر العاملة عملها في منزلك فوراً، ويتولى مركز تدبير سداد الأجور والتأمين الطبي والإشراف القانوني الكامل.',
        durationEn: 'Immediate / 24 Hours',
        durationAr: 'فوري / خلال 24 ساعة',
      },
    ],
    faqs: [
      {
        questionEn: 'Do I need a minimum salary certificate of AED 25,000 to hire a domestic worker under the Tadbeer Center Sponsorship package?',
        questionAr: 'هل أحتاج لشهادة راتب 25,000 درهم لتشغيل عاملة مساعدة عبر باقة كفالة مركز تدبير؟',
        answerEn: 'No! Under the Tadbeer Center Sponsorship model, Tadbeer is the official legal sponsor of the worker. There is zero minimum salary requirement for your family, and zero bank guarantee required—making it accessible to any resident.',
        answerAr: 'لا على الإطلاق! ففي باقة كفالة مركز تدبير، يكون المركز هو الكفيل القانوني الرسمي للعاملة، ولا يشترط أي حد أدنى لراتب الأسرة أو ضمان بنكي؛ مما يجعلها متاحة لكافة المقيمين بسهولة.',
      },
    ],
    reviews: [
      {
        name: 'Dr. Celine & Marc Vasseur',
        roleEn: 'Expat Professionals',
        roleAr: 'مهنيان مقيمان',
        companyEn: 'Dubai Hills Estate',
        companyAr: 'دبي هيلز استيت',
        rating: 5,
        date: 'October 2026',
        commentEn: 'Opted for the Tadbeer Center Sponsorship package for our nanny at Karama Business Center. No salary certificate stress, no visa paperwork hassle, and Tadbeer handles her monthly payroll and health insurance directly. Perfect peace of mind.',
        commentAr: 'اخترنا باقة كفالة مركز تدبير لمربيتنا في مركز الكرامة للأعمال. لا قلق بشأن شهادة الراتب، ولا تعقيدات أوراق التأشيرات، وتدبير يتولى الراتب الشهري والتأمين الطبي مباشرة. راحة بال مطلقة.',
      },
    ],
    targetKeywords: {
      shortTail: [
        'tadbeer center sponsorship package',
        'monthly maid service tadbeer dubai',
        'maid visa without salary limit dubai',
        'tadbeer package 2 dubai',
        'hire nanny under tadbeer sponsorship',
      ],
      longTail: [
        'tadbeer center sponsorship package zero employer liability dubai',
        'hire housemaid without 25000 aed salary certificate tadbeer karama',
        'flexible monthly domestic worker package with replacement warranty dubai',
        'tadbeer all-inclusive nanny sponsorship with medical and visa covered',
      ],
    },
  },

  'tadbeer-maid-visa-renewal-medical': {
    detailedOverviewEn:
      'Housemaid & Nanny Residency Visa Renewal, Salem Medical & Tadbeer Contract Renewal at Karama Business Center (KBC) delivers an effortless, synchronized renewal cycle for domestic personnel. Under UAE immigration rules, domestic worker residence visas are valid for 2 years and must be renewed prior to expiry to avoid overstay fines. At Karama Business Center, we coordinate the entire renewal chain in one single visit: on-site Salem residency medical fitness screening (AED 322 standard or 2-hour express), mandatory Hepatitis B booster vaccination, ICP biometric Emirates ID renewal, MoHRE Tadbeer contract renewal and fee voucher settlement, and GDRFA Amer 2-year residency stamping.',
    detailedOverviewAr:
      'توفر خدمة "تجديد إقامة العمالة المساعدة والمربيات، وفحص سالم الطبي، وتجديد عقود تدبير" في مركز الكرامة للأعمال (KBC) دورة تجديد متكاملة ومترابطة للمساعدين المنزليين في زيارة واحدة. فبموجب لوائح الإقامة، تمتد صلاحية إقامة العامل المنزلي لسنتين ويجب تجديدها قبل الانتهاء لتفادي الغرامات. وفي مركز الكرامة للأعمال، ننسق سلسلة التجديد بأكملها تحت سقف واحد: الفحص الطبي للياقة الإقامة بمركز سالم (322 درهماً أو السريع خلال ساعتين)، وجرعة لقاح الكبد الوبائي التنشيطية، وتجديد بطاقة الهوية الإماراتية (ICP)، وتجديد عقد عمل تدبير لدى الوزارة، وتثبيت الإقامة لسنتين لدى كاونتر آمر.',
    legalFrameworkEn:
      'Governed by UAE Federal Decree-Law No. 9 of 2022 Concerning Domestic Workers and GDRFA Dubai Domestic Visa Renewal Directives.',
    legalFrameworkAr:
      'تخضع للمرسوم بقانون اتحادي رقم 9 لسنة 2022 بشأن عمال الخدمة المساعدة وضوابط تجديد إقامات العمالة المساعدة بإقامة دبي.',
    eligibilityEn: [
      'Families and sponsors renewing their domestic worker’s expiring 2-year residence visa in Dubai',
      'Domestic staff requiring mandatory Salem medical fitness clearance and vaccination booster updates',
      'Sponsors needing MoHRE Tadbeer contract extension and new 2-year Emirates ID cards',
    ],
    eligibilityAr: [
      'العائلات والكفلاء الراغبون في تجديد تأشيرة الإقامة المنتهية (سنتان) للعمالة المساعدة بدبي',
      'العمالة المساعدة الملزمة باجتياز فحص اللياقة الطبية (سالم) وتحديث جرعات التطعيم الإلزامية',
      'الكفلاء الراغبون في تمديد عقد تدبير المعتمد وإصدار بطاقة الهوية الإماراتية الجديدة لسنتين',
    ],
    galleryImages: COMMON_GALLERY,
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'On-Site Salem Medical & Vaccine Booster',
        titleAr: 'إجراء فحص سالم الطبي بالمركز وجرعة التطعيم',
        descEn: 'Completing blood screening, chest X-ray, and Hepatitis B booster at our on-site Karama Medical Center.',
        descAr: 'إجراء فحص الدم وأشعة الصدر وجرعة اللقاح التنشيطية في مركز الكرامة الطبي المعتمد بنفس المبنى.',
        durationEn: '20 Mins',
        durationAr: '20 دقيقة',
      },
      {
        stepNumber: 2,
        titleEn: 'Tadbeer Contract Extension & Emirates ID Renewal',
        titleAr: 'تجديد عقد تدبير وتجديد بطاقة الهوية الإماراتية',
        descEn: 'Renewing the electronic domestic contract on MoHRE systems and lodging the 2-year Emirates ID application.',
        descAr: 'تجديد عقد العمل المنزلي الإلكتروني على نظام الوزارة وتقديم طلب تجديد بطاقة الهوية لسنتين.',
        durationEn: '15 Mins',
        durationAr: '15 دقيقة',
      },
      {
        stepNumber: 3,
        titleEn: 'Amer 2-Year Residency Visa Stamping',
        titleAr: 'تثبيت تأشيرة الإقامة لمدة سنتين لدى كاونتر آمر',
        descEn: 'Stamping the 2-year residency permit via GDRFA Amer servers and dispatching the new Emirates ID via Zajel.',
        descAr: 'تثبيت الإقامة لسنتين عبر نظام إقامة دبي (آمر) وتوصيل بطاقة الهوية الجديدة عبر زاجل لباب منزلك.',
        durationEn: '24 Hours',
        durationAr: '24 ساعة',
      },
    ],
    faqs: [
      {
        questionEn: 'How early before expiration can I renew my housemaid’s residency visa and Tadbeer contract?',
        questionAr: 'ما هو الوقت المتاح لتجديد إقامة الخادمة وعقد تدبير قبل تاريخ الانتهاء؟',
        answerEn: 'You can initiate the residency renewal process up to 30 days prior to visa expiration. Completing the renewal early avoids last-minute rush and ensures continuous health insurance and uninterrupted legal status.',
        answerAr: 'يمكنك البدء في إجراءات التجديد قبل 30 يوماً من تاريخ انتهاء الإقامة؛ مما يضمن إنجاز الفحص الطبي والتجديد دون أي ارتباك وتفادي انقطاع التأمين الصحي أو الغرامات.',
      },
    ],
    reviews: [
      {
        name: 'Amna Al-Suwaidi',
        roleEn: 'School Principal',
        roleAr: 'مديرة مدرسة',
        companyEn: 'Mirdif Dubai',
        companyAr: 'مردف دبي',
        rating: 5,
        date: 'October 2026',
        commentEn: 'Renewed our housemaid’s visa at Karama Business Center. Medical test, vaccine booster, Tadbeer contract, and Amer visa stamping completed under one roof in 45 minutes.',
        commentAr: 'جددت إقامة خادمتنا في مركز الكرامة للأعمال. الفحص الطبي واللقاح وعقد تدبير وتثبيت الإقامة لدى آمر تم إنجازها بالكامل تحت سقف واحد في 45 دقيقة.',
      },
    ],
    targetKeywords: {
      shortTail: [
        'maid visa renewal dubai',
        'tadbeer contract renewal',
        'domestic worker medical renewal karama',
        'housemaid emirates id renewal',
        'renew maid visa 2 years dubai',
      ],
    longTail: [
      'housemaid and nanny residency visa renewal salem medical karama dubai',
      'tadbeer domestic worker contract extension and 2 year visa stamping',
      'all in one maid visa renewal medical test and emirates id al karama',
      'how to renew domestic helper residency visa before expiry dubai',
    ],
  },
},

  'tadbeer-maid-replacement-insurance': {
    detailedOverviewEn:
      'Tadbeer Replacement Warranty, Worker Insurance & Absconding / Cancellation Services at Karama Business Center (KBC) protects household employers from the financial risks, disruptions, and administrative burdens associated with domestic employment. Under MoHRE Tadbeer regulations, when a domestic worker refuses to work without legitimate cause, fails medical fitness screening, becomes pregnant, or absconds from the household, sponsors are entitled to statutory replacement or financial reimbursement under our 2-year warranty program. Our center handles the complete dispute mediation, formal MoHRE absconding report lodgement (Circular Escape Notification), domestic contract cancellation, and priority candidate substitution from our pre-screened talent roster.',
    detailedOverviewAr:
      'يوفر قسم "ضمان استبدال العمالة المساعدة، والتأمين الشامل، وإجراءات البلاغات والإلغاء (تدبير)" في مركز الكرامة للأعمال (KBC) حماية مالية وقانونية شاملة للأسر وأصحاب العمل ضد المخاطر المالية والتعاقدية الناتجة عن تعثر علاقة العمل المنزلي. فبموجب لوائح وزارة الموارد البشرية وتدبير، في حال رفض العاملة للعمل دون مبرر قانوني، أو عدم لياقتها الطبية، أو حملها، أو انقطاعها عن العمل (الهروب)، يحق للكفيل الاستبدال الرسمي أو الاسترداد المالي بموجب وثيقة الضمان الممتدة لسنتين. ويتولى مركزنا الوساطة الودية، وقيد بلاغات الانقطاع الرسمية (الهروب)، وإلغاء تصريح وإقامة العاملة، وترشيح بديلة كفؤة فوراً من قوائمنا المدربة.',
    legalFrameworkEn:
      'Mandated under UAE Federal Decree-Law No. 9 of 2022 Concerning Domestic Workers, MoHRE Dispute Resolution Rules, and Tadbeer Mandatory Insurance Directives.',
    legalFrameworkAr:
      'إلزامية بموجب المرسوم بقانون اتحادي رقم 9 لسنة 2022 بشأن عمال الخدمة المساعدة وضوابط تسوية المنازعات والتأمين الإلزامي لتدبير.',
    eligibilityEn: [
      'Sponsors holding an active Tadbeer recruitment contract requiring candidate replacement under warranty',
      'Families whose domestic helper has refused work, failed medical screening, or engaged in contract breach',
      'Sponsors requiring formal MoHRE Absconding (Circular Notification) lodgement and residency cancellation',
    ],
    eligibilityAr: [
      'الكفلاء المرتبطون بعقد استقدام سارٍ من تدبير والراغبون في تفعيل ضمان استبدال العاملة',
      'الأسر التي ترفض عاملتها المنزلية أداء العمل أو غير اللائقة طبياً أو المخلة ببنود العقد',
      'أصحاب العمل الراغبون في قيد بلاغ انقطاع رسمي عن العمل لدى الوزارة وإلغاء الإقامة وتبرئة الذمة',
    ],
    galleryImages: COMMON_GALLERY,
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'Case Intake & Warranty Validation',
        titleAr: 'دراسة الحالة والتحقق من سريان وثيقة الضمان',
        descEn: 'Auditing your Tadbeer agreement, worker file, and validating grounds for warranty activation or cancellation.',
        descAr: 'مراجعة عقد تدبير وملف العاملة وتدقيق الأسباب لتفعيل ضمان الاستبدال أو الإلغاء القانوني.',
        durationEn: '15 Mins',
        durationAr: '15 دقيقة',
      },
      {
        stepNumber: 2,
        titleEn: 'MoHRE Notification / Amicable Settlement',
        titleAr: 'قيد البلاغ أو التسوية الودية لدى الوزارة',
        descEn: 'Filing the formal notification on MoHRE Tadbeer systems and initiating settlement or passport repatriation.',
        descAr: 'تسجيل الإجراء الرسمي بنظام الوزارة وتنسيق التسوية الودية أو إجراءات الإلغاء وتأمين سفر العاملة.',
        durationEn: '24 Hours',
        durationAr: '24 ساعة',
      },
      {
        stepNumber: 3,
        titleEn: 'Priority Replacement Candidate Deployment',
        titleAr: 'ترشيح وبدء عمل المساعدة البديلة فوراً',
        descEn: 'Presenting qualified replacement profiles matching your original criteria and deploying the chosen helper.',
        descAr: 'عرض مرشحات بديلات مطابقات لمعاييرك وتعيين المساعدة البديلة لمنزلك فوراً دون تأخير.',
        durationEn: '24 - 48 Hours',
        durationAr: '24 - 48 ساعة',
      },
    ],
    faqs: [
      {
        questionEn: 'How does the Tadbeer domestic worker replacement process work if my helper refuses to work?',
        questionAr: 'كيف تتم إجراءات استبدال العاملة المنزلية عبر تدبير إذا رفضت العمل؟',
        answerEn: 'Bring the worker and your original Tadbeer agreement to Karama Business Center. Our customer care officers conduct a formal interview; if the worker confirms refusal to work, our warranty is activated immediately, providing you with qualified alternative candidates to interview on the spot with zero additional recruitment agency fees.',
        answerAr: 'ما عليك سوى زيارة مركز الكرامة للأعمال برفقة العاملة وعقد تدبير؛ حيث يجري مسؤولو رعاية المتعاملين مقابلة رسمية، وعند تأكيد رفض العمل يُفعل ضمان الاستبدال فوراً وترشح لك بديلات كفؤات للمقابلة والاختيار في نفس اليوم دون رسوم استقدام جديدة.',
      },
    ],
    reviews: [
      {
        name: 'Sarah Jenkins-Al Otaiba',
        roleEn: 'Private Client',
        roleAr: 'عميلة خاصة',
        companyEn: 'Al Safa Dubai',
        companyAr: 'الصفا دبي',
        rating: 5,
        date: 'October 2026',
        commentEn: 'When our recruited helper decided she was homesick within the first month, Tadbeer at Karama Business Center acted immediately under the warranty. They interviewed a replacement candidate the same afternoon and processed her visa without delay. First-class customer care.',
        commentAr: 'عندما أبدت مساعدتنا رغبتها في العودة لبلدها في الشهر الأول، تعامل قسم تدبير بمركز الكرامة للأعمال باحترافية مطلقة بموجب الضمان، ورشحوا لنا بديلة في نفس اليوم وأنجزوا تأشيرتها دون أي تأخير.',
      },
    ],
    targetKeywords: {
      shortTail: [
        'tadbeer maid replacement',
        'domestic worker insurance dubai',
        'maid absconding report mohre',
        'cancel domestic worker visa dubai',
        'tadbeer warranty claim karama',
      ],
      longTail: [
        'tadbeer domestic worker replacement warranty and insurance claim dubai',
        'how to file mohre domestic worker absconding escape notification dubai',
        'cancel maid visa and domestic contract refund tadbeer karama',
        'free housemaid replacement during probation period tadbeer dubai',
      ],
    },
  },

  // ============================================================================
  // VIP & MOBILE DOORSTEP (3 Dedicated Individual Services)
  // ============================================================================
  'vip-mobile-government-van': {
    detailedOverviewEn:
      'The Luxury Mercedes-Benz Sprinter Mobile Doorstep Government Van (Concierge Dispatch) at Emirates Secretariat Services (ESS) is Dubai’s premier on-demand government transaction unit. Dispatched anywhere across the Emirate of Dubai—including Palm Jumeirah, Downtown Dubai, Emirates Hills, Jumeirah Bay Island, Dubai Hills Estate, and DIFC—our presidential custom-fitted Mercedes Sprinter brings the complete government hub directly to your villa driveway, luxury hotel, or corporate tower. Equipped with encrypted satellite links to ministerial databases, certified optical GDRFA and ICP biometric fingerprint capture pods, digital camera equipment, and mobile Salem phlebotomy stations, our Senior Government Liaison Officers execute your entire transaction portfolio in absolute privacy. In a single visit, family members or executive teams complete Golden Visa nominations, residency stamping, commercial DET licensing, Salem medical blood testing, and Notary Public drafting without ever stepping into a public government building.',
    detailedOverviewAr:
      'تُمثل "حافلة المعاملات الحكومية المتنقلة الفاخرة (مرسيدس-بنز سبرينتر) إلى باب دارك" لدى الإمارات لخدمات رجال الأعمال (ESS) الوحدة المتنقلة الرائدة والأكثر تميزاً في إمارة دبي. تنطلق الحافلة الرئاسية المجهزة بالكامل لتصل إلى موقعك في أي مكان بدبي—بما في ذلك نخلة جميرا، ووسط مدينة دبي، وتلال الإمارات، وجزيرة خليج جميرا، ودبي هيلز، ومركز دبي المالي العالمي. وتضم الحافلة ربطاً فضائياً مشفراً بخوادم الوزارات، وأجهزة التقاط البصمة البيومترية المعتمدة لإقامة دبي والهيئة الاتحادية، واستوديو تصوير معتمد، ومحطة سحب دم طبية متنقلة لنظام سالم. وينجز كبار مستشارينا باقة معاملاتك بالكامل في خصوصية مطلقة: الإقامة الذهبية، تثبيت الإقامات، رخص اقتصادية دبي، الفحص الطبي، والتوثيق العدلي دون الحاجة لمغادرة منزلك أو النزول في أي مبنى حكومي.',
    legalFrameworkEn:
      'Authorized under Dubai Government Mobile Happiness Initiatives and ESS Executive VIP Concierge Standards.',
    legalFrameworkAr:
      'مرخصة بموجب مبادرات خدمات السعادة المتنقلة لحكومة دبي ومعايير الخدمات التنفيذية الراقية لـ ESS.',
    eligibilityEn: [
      'High-Net-Worth Individuals, VIP dignitaries, and royal households requiring complete transaction privacy',
      'C-level executives and corporate boards requiring on-site biometric, medical, and licensing clearances',
      'Families desiring to complete Golden Visas, Emirates ID biometrics, and Salem medical tests together at home',
    ],
    eligibilityAr: [
      'كبار الشخصيات، وصفوة المستثمرين، والأسر الباحثة عن الخصوصية التامة والراحة الفائقة في إنجاز المعاملات',
      'الرؤساء التنفيذيون وأعضاء مجالس الإدارة بالشركات لإنجاز البصمات والفحص الطبي والتراخيص في مقر عملهم',
      'العائلات الراغبة في إنجاز الإقامة الذهبية وبصمة الهوية وفحص سالم الطبي لكافة أفراد الأسرة في الفيلا',
    ],
    galleryImages: COMMON_GALLERY,
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'Concierge Booking & Dossier Pre-Audit',
        titleAr: 'حجز الموعد الفاخر والتدقيق القانوني المسبق',
        descEn: 'Your personal Senior Case Director audits all files and confirms the dispatch time window at your location.',
        descAr: 'يتولى مستشارك الحكومي الخاص تدقيق كافة المستندات وتأكيد موعد وصول الحافلة لموقعك في دبي.',
        durationEn: 'Scheduled Window',
        durationAr: 'موعد محدد',
      },
      {
        stepNumber: 2,
        titleEn: 'Van Arrival & In-Vehicle Transaction Session',
        titleAr: 'وصول الحافلة الفاخرة وإنجاز المعاملات على متنها',
        descEn: 'Our luxury Mercedes Sprinter arrives at your driveway; biometrics, blood draws, and digital signatures are completed on board.',
        descAr: 'تصل حافلة مرسيدس لعتبة بابك، ويتم التقاط البصمات وسحب الدم الطبي وتوقيع المعاملات على متن الحافلة.',
        durationEn: '20 - 30 Mins',
        durationAr: '20 - 30 دقيقة',
      },
      {
        stepNumber: 3,
        titleEn: 'Live Ministerial Clearance & Completed Delivery',
        titleAr: 'الاعتماد الوزاري الفوري وتسليم المستندات المكتملة',
        descEn: 'Transactions approved through live satellite links; official passports and ID cards returned to your hands.',
        descAr: 'اعتماد المعاملات لحظياً عبر الأقمار الصناعية وتسليم الجوازات والإقامات المعتمدة فوراً.',
        durationEn: 'Instant Handover',
        durationAr: 'تسليم فوري',
      },
    ],
    faqs: [
      {
        questionEn: 'Which areas of Dubai does the Luxury Mercedes Mobile Government Van service cover?',
        questionAr: 'ما هي المناطق التي تغطيها حافلة المعاملات الحكومية المتنقلة الفاخرة في دبي؟',
        answerEn: 'Our mobile units cover 100% of the Emirate of Dubai, including Palm Jumeirah, Emirates Hills, Downtown Dubai, Dubai Marina, DIFC, Jumeirah Bay Island, Dubai Hills Estate, Arabian Ranches, Al Barari, and corporate hubs across the city.',
        answerAr: 'تغطي وحداتنا المتنقلة كافة مناطق إمارة دبي بنسبة 100%، بما في ذلك نخلة جميرا، تلال الإمارات، وسط مدينة دبي، دبي مارينا، مركز دبي المالي، جزيرة خليج جميرا، دبي هيلز، المرابع العربية، والبراري وكافة مقار الشركات.',
      },
    ],
    reviews: [
      {
        name: 'Lord Sebastian Sterling',
        roleEn: 'Family Office Chairman',
        roleAr: 'رئيس مجلس إدارة مكتب عائلي',
        companyEn: 'Sterling Global Investments',
        companyAr: 'ستيرلينغ العالمية للاستثمار',
        rating: 5,
        date: 'October 2026',
        commentEn: 'Dispatched the ESS Mercedes mobile van to our villa on Jumeirah Bay Island. In 35 minutes, our family of five completed our 10-Year Golden Visa renewals, biometric fingerprint scans, and blood draws without stepping out of our driveway. Absolute perfection.',
        commentAr: 'طلبنا حافلة مرسيدس المتنقلة من ESS لفيلتنا في جزيرة خليج جميرا. وخلال 35 دقيقة فقط، أنجزت عائلتي المكونة من خمسة أفراد تجديد الإقامة الذهبية وبصمة الهوية وفحص الدم دون مغادرة مدخل المنزل. خدمة استثنائية تفوق الخيال.',
      },
    ],
    targetKeywords: {
      shortTail: [
        'mobile government van dubai',
        'doorstep government services dubai',
        'mercedes mobile service ess',
        'vip mobile biometric van dubai',
        'concierge government services dubai',
      ],
      longTail: [
        'luxury mercedes sprinter mobile doorstep government van dispatch dubai',
        'on demand mobile biometric and salem medical blood collection van dubai',
        'golden visa and residency stamping mobile van palm jumeirah dubai hills',
        'vip doorstep government transaction concierge for private estates dubai',
      ],
    },
  },

  'vip-majlis-executive-lounge': {
    detailedOverviewEn:
      'The Private Executive VIP Majlis Concierge Suite at Karama Business Center (KBC) offers an ultra-exclusive, dignified private hospitality lounge environment designed for distinguished investors, diplomats, company founders, and senior executives. Set apart from public customer service halls, our VIP Majlis features reserved private parking, dedicated valet attendants, personalized barista service serving authentic Arabic coffee, dates, and refreshments, and a personal Senior Case Director assigned exclusively to handle your transactions. Whether you are finalizing a 10-Year UAE Golden Visa nomination, executing corporate LLC MOA notarization with Dubai Courts, undergoing Super Express 2-Hour Salem Medical Fitness testing in your private armchair, or coordinating DET business licensing, every ministerial step is executed seamlessly while you relax in executive luxury.',
    detailedOverviewAr:
      'يُمثل "مجلس كبار الشخصيات والاستقبال التنفيذي الخاص" في مركز الكرامة للأعمال (KBC) بيئة ضيافة حصرية وراقية صُممت خصيصاً لاستقبال صفوة المستثمرين، والدبلوماسيين، ومؤسسي الشركات، وكبار الشخصيات التنفيذية بعيداً عن صالات الانتظار العامة. ويتميز المجلس بمدخل خاص ومواقف سيارات محجوزة مع خدمة صف السيارات، وضيافة فندقية تشمل القهوة العربية والتمور والمشروبات الفاخرة، مع تخصيص مدير علاقات حكومية أول يتولى إدارة معاملاتك بالكامل. وسواء كنت تستكمل إجراءات الإقامة الذهبية لمدة 10 سنوات، أو توثق عقد تأسيس شركة لدى كاتب عدل محاكم دبي، أو تجري الفحص الطبي للياقة الإقامة (سالم) فائق السرعة خلال ساعتين وأنت جالس في مقعدك، تُنجز كافة الخطوات الحكومية بسلاسة تامة بينما تنعم بالراحة والرفاهية.',
    legalFrameworkEn:
      'Compliant with Dubai 5-Star Government Service Standards and ESS Executive Hospitality Charters.',
    legalFrameworkAr:
      'متوافقة مع معايير خدمات النجوم الخمس لحكومة دبي وميثاق الضيافة التنفيذية الفاخرة لـ ESS.',
    eligibilityEn: [
      'Golden Visa investors, property owners, and high-net-worth individuals visiting Karama Business Center',
      'Corporate executives and legal counsels executing complex Notary Public and DET corporate transactions',
      'VIP families seeking total privacy and fast-track processing in an exclusive hospitality suite',
    ],
    eligibilityAr: [
      'مستثمرو الإقامة الذهبية وملاك العقارات ورجال الأعمال الزائرون لمركز الكرامة للأعمال',
      'المديرون التنفيذيون والمستشارون القانونيون المنجزون لمعاملات الكاتب العدل والشركات المعقدة',
      'العائلات وكبار الشخصيات الراغبون في الخصوصية التامة والمسار السريع في جناح ضيافة مخصص',
    ],
    galleryImages: COMMON_GALLERY,
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'Valet Arrival & Private Majlis Escort',
        titleAr: 'خدمة صف السيارات والاستقبال في المجلس الخاص',
        descEn: 'Arrive at Karama Business Center with reserved valet parking and direct private escort to our VIP Majlis suite.',
        descAr: 'الوصول للمركز واستخدام خدمة صف السيارات والمرافقة المباشرة لجناح مجلس كبار الشخصيات.',
        durationEn: 'Instant',
        durationAr: 'فوري',
      },
      {
        stepNumber: 2,
        titleEn: 'Hospitality & Executive Document Sign-Off',
        titleAr: 'كرم الضيافة وتوقيع المعاملات في راحة تامة',
        descEn: 'Enjoy premium refreshments while your Senior Case Director manages all system lodgements and biometrics.',
        descAr: 'التمتع بالضيافة الراقية بينما يتولى مستشارك الخاص رفع المعاملات وأخذ البصمات وتوثيق العقود.',
        durationEn: '15 - 20 Mins',
        durationAr: '15 - 20 دقيقة',
      },
      {
        stepNumber: 3,
        titleEn: 'Completed Dossier Delivery & Departure',
        titleAr: 'تسليم المعاملات المنجزة والمغادرة في رفاهية',
        descEn: 'Receive all completed official certificates, stamped residency permits, and corporate deeds.',
        descAr: 'استلام كافة الشهادات الرسمية والإقامات المثبتة والعقود الموثقة والمغادرة بكل راحة.',
        durationEn: 'Same Day Handover',
        durationAr: 'تسليم في نفس اليوم',
      },
    ],
    faqs: [
      {
        questionEn: 'Do I need to book the Private VIP Majlis in advance before visiting Karama Business Center?',
        questionAr: 'هل يلزم حجز مجلس كبار الشخصيات مسبقاً قبل زيارة مركز الكرامة للأعمال؟',
        answerEn: 'While walk-in VIP clients are always warmly accommodated by our team, reserving your suite in advance ensures a dedicated Senior Case Director is assigned specifically to your file and private parking is prepared for your arrival.',
        answerAr: 'على الرغم من ترحيبنا الدائم بكبار الشخصيات دون موعد، إلا أن الحجز المسبق يضمن تجهيز موقف السيارات الخاص وتكليف مستشار حكومي أول مخصص لملفك فور وصولك.',
      },
    ],
    reviews: [
      {
        name: 'Dr. Tariq Al-Ghazali',
        roleEn: 'Managing Partner',
        roleAr: 'الشريك الإداري',
        companyEn: 'Al-Ghazali Healthcare Investment Fund',
        companyAr: 'صندوق الغزالي للاستثمار الصحي',
        rating: 5,
        date: 'October 2026',
        commentEn: 'The VIP Majlis at Karama Business Center is second to none in Dubai. Completed my Golden Visa, my medical fitness test, and my commercial company license amendment while drinking premium Arabic coffee. Flawless hospitality.',
        commentAr: 'مجلس كبار الشخصيات في مركز الكرامة للأعمال لا مثيل له في دبي. أنجزت الإقامة الذهبية والفحص الطبي وتعديل رخصة الشركة التجارية بينما أستمتع بالقهوة العربية الفاخرة. ضيافة راقية وكفاءة مبهرة.',
      },
    ],
    targetKeywords: {
      shortTail: [
        'vip majlis lounge dubai',
        'executive government concierge karama',
        'private vip government lounge dubai',
        'golden visa vip majlis',
        'karama business center vip suite',
      ],
      longTail: [
        'private executive vip majlis concierge lounge at karama business center',
        'exclusive hospitality suite for golden visa and corporate notarization dubai',
        'vip fast track government processing lounge with valet parking karama',
        'luxury investor government liaison suite near karama post office',
      ],
    },
  },

  'vip-corporate-boardroom-concierge': {
    detailedOverviewEn:
      'The Corporate Boardroom On-Site Biometric, Medical & PRO Delegation Service at Emirates Secretariat Services (ESS) is tailored for multinational corporations, enterprise regional headquarters, private equity firms, and commercial conglomerates in Dubai. Instead of transporting dozens or hundreds of executives and staff across town for immigration, biometric, and medical fitness processing, our accredited Corporate Delegation Unit sets up an official, secure pop-up ministerial hub inside your corporate headquarters or boardroom. Staffed by licensed phlebotomists, certified GDRFA/ICP biometric technicians, and senior corporate PROs, we complete new employee onboarding batches, Golden Visa executive nominations, Emirates ID biometric enrollments, and medical blood draws in-house with zero downtime for your workforce.',
    detailedOverviewAr:
      'صُممت خدمة "وفد المعاملات الحكومية للشركات، والبصمة البيومترية، والفحص الطبي في قاعة مجالس الإدارة" لدى الإمارات لخدمات رجال الأعمال (ESS) خصيصاً للشركات متعددة الجنسيات، والمقار الإقليمية للمؤسسات العالمية، وصناديق الاستثمار والمجموعات التجارية الكبرى في دبي. فبدلاً من إهدار ساعات عمل الموظفين والمديرين في التنقل بين المراكز الحكومية لإجراءات الإقامة والبصمة والفحص الطبي، يُوفد مركزنا فريقاً حكومياً وطبياً معتمداً ومجهزاً بالكامل ليقيم منصة حكومية مؤمنة داخل مقر شركتك أو قاعة مجلس الإدارة. وبإشراف كادر تمريضي مرخص، وفنيي بصمة بيومترية معتمدين من إقامة دبي والهيئة الاتحادية، وكبار مندوبي العلاقات الحكومية، ننجز تثبيت إقامات الموظفين الجدد، وترشيحات الإقامة الذهبية للمديرين، وبصمات الهوية، وفحوصات الدم دون أي انقطاع عن العمل.',
    legalFrameworkEn:
      'Governed by Dubai Government Institutional Partnership Protocols and MoHRE / GDRFA Corporate On-Site Processing Standards.',
    legalFrameworkAr:
      'تخضع لبروتوكولات الشراكة المؤسسية لحكومة دبي ومعايير إنجاز المعاملات الميدانية للشركات المعتمدة من الوزارات وإقامة دبي.',
    eligibilityEn: [
      'Multinational enterprises, banks, technology hubs, and regional headquarters in DIFC, Business Bay, Downtown, and Internet City',
      'Corporate HR departments onboarding large batches of 15 to 500+ employees simultaneously',
      'Law firms and investment funds compiling executive Golden Visa portfolios for C-suite personnel',
    ],
    eligibilityAr: [
      'الشركات العالمية، والبنوك، ومقار التكنولوجيا، والشركات الكبرى في مركز دبي المالي والخليج التجاري ومدينة الإنترنت',
      'إدارات الموارد البشرية بالشركات المستقدمة أو المجددة لدفعات كبيرة من 15 إلى 500+ موظف في وقت واحد',
      'مكاتب المحاماة وصناديق الاستثمار الراغبة في ترشيح وتثبيت الإقامة الذهبية لكبار المديرين التنفيذيين في مكاتبهم',
    ],
    galleryImages: COMMON_GALLERY,
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'Corporate Roster Manifest & Regulatory Audit',
        titleAr: 'تدقيق كشف الموظفين والاعتمادات الوزارية المسبقة',
        descEn: 'Reviewing employee visa batches, contracts, and scheduling on-site pop-up stations with your HR director.',
        descAr: 'مراجعة بيانات دفعات الموظفين وتصاريح العمل وتنسيق جدول المنصات الميدانية مع مدير الموارد البشرية.',
        durationEn: 'Scheduled Date',
        durationAr: 'موعد متفق عليه',
      },
      {
        stepNumber: 2,
        titleEn: 'On-Site Boardroom Setup & Multi-Desk Processing',
        titleAr: 'تجهيز المنصة الحكومية في قاعة الاجتماعات وإنجاز الفحوصات',
        descEn: 'Deploying biometric pods and mobile blood collection stations in your boardroom; employees processed in 5-minute slots.',
        descAr: 'تجهيز منصات البصمة وسحب الدم في قاعة الاجتماعات وإنجاز الموظفين في فترات مخصصة (5 دقائق للموظف).',
        durationEn: '2 - 4 Hours',
        durationAr: '2 - 4 ساعات',
      },
      {
        stepNumber: 3,
        titleEn: 'Bulk Immigration Sync & Doorstep ID Delivery',
        titleAr: 'الربط الإلكتروني الجماعي وتسليم بطاقات الهوية المطبوعة',
        descEn: 'Instant upload to GDRFA, MoHRE, and ICP databases, followed by bulk delivery of stamped passports and Emirates IDs.',
        descAr: 'رفع البيانات آلياً لخوادم الإقامة والهيئة الاتحادية وتسليم الجوازات المثبتة وبطاقات الهوية دفعة واحدة للشركة.',
        durationEn: '24 - 48 Hours',
        durationAr: '24 - 48 ساعة',
      },
    ],
    faqs: [
      {
        questionEn: 'Can the Corporate Boardroom team process both new visas and Golden Visa nominations for our C-level executives in the same session?',
        questionAr: 'هل يمكن للفريق الحكومي إنجاز تأشيرات الموظفين الجدد والإقامة الذهبية للمديرين التنفيذيين في نفس الزيارة؟',
        answerEn: 'Yes! Our multi-disciplinary team includes senior Golden Visa consultants, corporate PROs, and certified medical staff who simultaneously process executive 10-Year Golden Visas and standard workforce residency permits in parallel.',
        answerAr: 'نعم بالتأكيد! يضم وفدنا استشاريين متخصصين في الإقامة الذهبية ومندوبي علاقات حكومية وكادراً طبياً ينجزون الإقامة الذهبية للمديرين وتأشيرات الموظفين العادية بالتوازي في نفس الجلسة.',
      },
    ],
    reviews: [
      {
        name: 'Julian Henderson',
        roleEn: 'Chief Operations Officer',
        roleAr: 'رئيس العمليات التشغيلية',
        companyEn: 'Standard Chartered Capital DIFC',
        companyAr: 'ستاندرد تشارترد كابيتال - مركز دبي المالي',
        rating: 5,
        date: 'October 2026',
        commentEn: 'ESS sent their Corporate Boardroom team to our DIFC office for 42 senior managers and analysts. Biometrics, medical blood draws, and Golden Visa documentation were finished by lunchtime without a single employee leaving the building. Incredible efficiency.',
        commentAr: 'أرسل مركز ESS وفده التنفيذي لمكتبنا في مركز دبي المالي العالمي لإنجاز معاملات 42 مديراً ومحللاً. تمت البصمة البيومترية وفحص الدم الطبي وتوثيق الإقامة الذهبية قبل وقت الغداء دون أن يغادر موظف واحد المبنى. كفاءة مذهلة.',
      },
    ],
    targetKeywords: {
      shortTail: [
        'corporate pro services dubai',
        'on-site biometric corporate dubai',
        'boardroom government delegation ess',
        'bulk employee visa processing dubai',
        'corporate golden visa concierge',
      ],
      longTail: [
        'corporate boardroom on-site biometric medical and pro delegation service dubai',
        'bulk company employee residency onboarding and medical blood draw at office',
        'enterprise golden visa and emirates id mobile processing difc downtown',
        'corporate government relations pro concierge for multinational firms dubai',
      ],
    },
  },
};
