import { ProcessStep, GalleryImage, FaqItem, ReviewItem } from '../types';
import {
  corporateDesksImg as smartDeskImage,
  fastTrackConcourseImg as heroCenterImage,
  businessHubImg as vipMajlisImage,
  mobileDoorstepUnitImg as mobileVanImage,
} from './centerOriginalPhotos';
import { ServiceRichDetails } from './amerServicesExtendedData';

const TASHEEL_GALLERY: GalleryImage[] = [
  {
    url: smartDeskImage,
    titleEn: 'Authorized Tasheel (MoHRE) Counter Hall at Karama Business Center',
    titleAr: 'صالة مركز تسهيل المعتمد (وزارة الموارد البشرية) في مركز الكرامة للأعمال',
    captionEn: 'Direct Ministry of Human Resources & Emiratisation (MoHRE License #4108) counters processing corporate quotas, work permits, and labour contracts.',
    captionAr: 'منصات خدمة معتمدة من وزارة الموارد البشرية والتوطين (ترخيص #4108) لإنجاز الكوتا وتصاريح وعقود العمل.',
  },
  {
    url: heroCenterImage,
    titleEn: 'Integrated Tasheel, Amer & Karama Medical Complex',
    titleAr: 'مجمع تسهيل وآمر ومركز الكرامة الطبي المتكامل',
    captionEn: 'Seamless transition from MoHRE work permit approval to GDRFA entry permit, DHA medical fitness test, and Emirates ID biometrics.',
    captionAr: 'ربط متكامل يتيح الانتقال من إصدار تصريح العمل في تسهيل إلى إذن الدخول والفحص الطبي والهوية تحت سقف واحد.',
  },
  {
    url: vipMajlisImage,
    titleEn: 'Executive HR & Corporate PRO Advisory Lounge',
    titleAr: 'مجلس استشارات الموارد البشرية ومديري العلاقات الحكومية',
    captionEn: 'Dedicated corporate suite for HR directors handling bulk workforce recruitment, WPS audits, and Tawteen Emiratisation compliance.',
    captionAr: 'جناح خاص لمديري الموارد البشرية ومسؤولي العلاقات العامة لإدارة التوظيف الجماعي وتدقيق نظام حماية الأجور والتوطين.',
  },
  {
    url: mobileVanImage,
    titleEn: 'Mobile Corporate Tasheel & E-Signature Unit',
    titleAr: 'حافلة تسهيل والتوقيع الإلكتروني المتنقلة للشركات',
    captionEn: 'On-site corporate dispatch across Dubai for executive E-Signature card activation and bulk labour contract attestations.',
    captionAr: 'وحدة متنقلة تصل إلى مقر شركتك في دبي لتفعيل بطاقات التوقيع الإلكتروني وتوثيق العقود العمالية.',
  },
];

export const TASHEEL_SERVICES_RICH_MAP: Record<string, ServiceRichDetails> = {
  // =========================================================================
  // 1. NEW ELECTRONIC WORK PERMIT (INITIAL APPROVAL & RECRUITMENT)
  // =========================================================================
  'tasheel-electronic-work-permit-new': {
    detailedOverviewEn: `Issuing a New Electronic Work Permit (إصدار تصريح عمل جديد) from the Ministry of Human Resources and Emiratisation (MoHRE) is the mandatory statutory authorization required for any UAE mainland private-sector company to recruit and employ a foreign or resident worker. At Karama Business Center (KBC), operating under Authorized Tasheel Center License #4108 and managed by Emirates Secretarial Services (ESS), we execute complete 3-stage MoHRE work permit applications for both overseas recruitment and in-country transfer of sponsorship.

Under UAE Federal Decree-Law No. 33 of 2021 and the MoHRE 3-Category Establishment Classification System, government work permit fees are determined by your company's cultural diversity and Tawteen compliance tier (Category 1, Category 2 Tiers A/B/C/D, or Category 3) as well as whether the employee holds an attested university/diploma qualification (Skilled Worker Levels 1–5) or non-degree classification (Levels 6–9).

Our senior Tasheel officers pre-audit your candidate’s academic attestation, verify your company's active electronic quota and WPS status, submit the Work Permit Initial Approval, process the mandatory Workers Protection Programme (WPP) employee insurance (replacing the legacy AED 3,000 bank guarantee with a low-cost insurance policy starting from AED 120–250), and synchronize the approved work permit directly with our adjacent Amer (GDRFA) desk to issue the employee's Employment Entry Permit (Pink Visa) and schedule their DHA Medical Fitness Test at our on-site Karama Medical Center (KMFC).`,
    detailedOverviewAr: `يُعد إصدار تصريح العمل الإلكتروني الجديد من وزارة الموارد البشرية والتوطين (MoHRE) الموافقة القانونية الإلزامية لأي منشأة في القطاع الخاص لتوظيف واستقدام عامل من داخل أو خارج دولة الإمارات. ومن خلال مركز الكرامة للأعمال (KBC) المعتمد رسمياً كمركز "تسهيل" بترخيص رقم 4108 تحت إدارة الإمارات لخدمات رجال الأعمال (ESS)، نُنجز كافة مراحل إصدار تصاريح العمل الجديدة بسرعة ودقة تضمن عدم الرفض.

بموجب المرسوم بقانون اتحادي رقم (33) لسنة 2021 ونظام تصنيف المنشآت (الفئات 1 و2 و3)، تُحتسب الرسوم الحكومية لتصريح العمل لمدة سنتين بناءً على فئة الشركة ومدى التزامها بتنوع الثقافات ومستهدفات التوطين، وكذلك المستوى المهني للعامل (عمالة ماهرة للمؤهلات الجامعية والدبلوم المصدق في المستويات 1 إلى 5، أو عمالة محدودة المهارة في المستويات 6 إلى 9).

يقوم خبراؤنا في قسم تسهيل بتدقيق الشهادات العلمية المصدقة، التحقق من توفر الكوتا الإلكترونية وسلامة نظام حماية الأجور (WPS)، تقديم طلب الموافقة المبدئية لتصريح العمل، إصدار وثيقة التأمين العمالي المعتمدة (كبديل اقتصادي عن الضمان المصرفي البالغ 3,000 درهم)، ثم تحويل الملف مباشرة إلى قسم "آمر" المجاور في نفس المبنى لإصدار إذن دخول العمل وإجراء الفحص الطبي في مركز الكرامة الطبي (KMFC) تحت سقف واحد.`,
    legalFrameworkEn: `UAE Federal Decree-Law No. 33 of 2021 on the Regulation of Labour Relations, Cabinet Resolution No. 1 of 2022, and MoHRE Establishment Classification & Work Permit Tariff Directives (Cabinet Resolution No. 18 of 2022).`,
    legalFrameworkAr: `المرسوم بقانون اتحادي رقم (33) لسنة 2021 بشأن تنظيم علاقات العمل، وقرار مجلس الوزراء رقم (1) لسنة 2022، وقرار مجلس الوزراء رقم (18) لسنة 2022 بشأن تصنيف المنشآت ورسوم تصاريح العمل.`,
    eligibilityEn: [
      'Active Dubai Mainland Trade License and valid MoHRE Company Establishment Card with available electronic quota',
      'Company must have zero active MoHRE blocks, zero unpaid WPS salary delays, and satisfied Tawteen Emiratisation targets (if 20+ or 50+ employees)',
      'Candidate passport valid for at least 6 months with clear digital studio photograph (white background)',
      'MOFA-attested educational degree/diploma required for Skilled Professional designations (Managers, Engineers, Accountants, Supervisors — Levels 1 to 5)',
    ],
    eligibilityAr: [
      'رخصة تجارية سارية وبطاقة منشأة فعالة لدى وزارة الموارد البشرية مع توفر رصيد كوتا إلكترونية شاغرة',
      'خلو ملف المنشأة من قيود إيقاف نظام حماية الأجور (WPS) أو مخالفات مستهدفات التوطين',
      'جواز سفر ساري المفعول للموظف لمدة لا تقل عن 6 أشهر مع صورة شخصية بخلفية بيضاء مطابقة لمعايير الهوية',
      'شهادة علمية مصدقة من وزارة الخارجية للمهن التخصصية والعمالة الماهرة (المديرين، المهندسين، المحاسبين، المشرفين - المستويات 1 إلى 5)',
    ],
    galleryImages: TASHEEL_GALLERY,
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'Electronic Job Offer Generation & Signature',
        titleAr: 'إصدار وتوقيع عرض العمل الإلكتروني',
        descEn: 'Drafting the bilingual MoHRE Job Offer matching the employee’s skill level and capturing employer E-Signature and employee thumbprint/signature.',
        descAr: 'إعداد عرض العمل الموحد باللغتين العربية والإنجليزية واعتماده ببطاقة التوقيع الإلكتروني لصاحب العمل وتوقيع أو بصمة العامل.',
        durationEn: '30 - 60 Mins',
        durationAr: '30 - 60 دقيقة',
      },
      {
        stepNumber: 2,
        titleEn: 'MoHRE Work Permit Initial Approval',
        titleAr: 'الموافقة المبدئية لتصريح العمل بوزارة الموارد البشرية',
        descEn: 'Uploading the signed offer letter, passport, and attested degree into Tasheel e-channels for ministerial clearance.',
        descAr: 'رفع عرض العمل الموقع ومستندات الموظف والشهادة العلمية المصدقة عبر نظام تسهيل لإصدار الموافقة الوزارية.',
        durationEn: '4 - 24 Hours',
        durationAr: '4 - 24 ساعة',
      },
      {
        stepNumber: 3,
        titleEn: 'Labour Insurance & 2-Year Permit Fee Settlement',
        titleAr: 'إصدار التأمين العمالي وسداد رسوم تصريح العمل (سنتان)',
        descEn: 'Issuing the WPP Workers Insurance policy and paying the official 2-year MoHRE Work Permit government voucher.',
        descAr: 'إصدار وثيقة التأمين العمالي وسداد الرسوم الحكومية لتصريح العمل لمدة سنتين وفق فئة المنشأة.',
        durationEn: '30 Mins',
        durationAr: '30 دقيقة',
      },
      {
        stepNumber: 4,
        titleEn: 'Direct Amer Handover for Entry Permit & KMFC Medical',
        titleAr: 'إصدار إذن الدخول من آمر والفحص الطبي بالكرامة',
        descEn: 'Automatic transmission to GDRFA Dubai to issue the Pink Work Entry Permit, followed by medical screening at our on-site Karama Medical Center.',
        descAr: 'الربط التلقائي مع إقامة دبي لإصدار إذن دخول العمل، يليه إجراء الفحص الطبي السريع في مركز الكرامة الطبي بنفس المبنى.',
        durationEn: 'Same Day',
        durationAr: 'في نفس اليوم',
      },
    ],
    faqs: [
      {
        questionEn: 'How much are the official MoHRE 2-Year Work Permit fees in 2026?',
        questionAr: 'كم تبلغ الرسوم الحكومية الرسمية لإصدار تصريح عمل لمدة سنتين في عام 2026؟',
        answerEn: 'MoHRE work permit fees depend on your company’s classification tier: Category 1 starts from AED 250; Category 2 (where most SMEs start in Tier A/B) ranges from AED 1,200 to AED 3,450 for a 2-year permit (Skilled workers cost significantly less than Unskilled workers); and Category 3 is AED 5,000. In addition, the initial work permit request fee is AED 200 and employee protection insurance starts from approx. AED 130–250.',
        answerAr: 'تعتمد رسوم تصريح العمل لمدة سنتين على فئة تصنيف المنشأة لدى الوزارة؛ حيث تبدأ في الفئة الأولى من 250 درهماً، وفي الفئة الثانية (التي تضم معظم الشركات في المستويات أ/ب/ج/د) تتراوح بين 1,200 و3,450 درهماً لمدة سنتين (وتكون رسوم العمالة الماهرة أقل بكثير من العمالة غير الماهرة)، بينما تبلغ في الفئة الثالثة 5,000 درهم، يضاف إليها رسوم تقديم الطلب (200 درهم) ووثيقة التأمين العمالي.',
      },
      {
        questionEn: 'Do we still need to pay a AED 3,000 Bank Guarantee per employee?',
        questionAr: 'هل لا يزال دفع الضمان المصرفي البالغ 3,000 درهم لكل عامل إلزامياً؟',
        answerEn: 'No! MoHRE replaced the mandatory AED 3,000 cash bank guarantee with the low-cost Workers Protection Programme (WPP) insurance policy, which costs only around AED 130 to AED 250 for 2 years depending on worker skill category.',
        answerAr: 'لا! استبدلت وزارة الموارد البشرية والتوطين الضمان المصرفي النقدي البالغ 3,000 درهم بنظام "التأمين العمالي" منخفض التكلفة، والذي يتراوح بين 130 و250 درهماً فقط لمدة سنتين.',
      },
    ],
    reviews: [
      {
        name: 'Eng. Bassam Al-Rawi',
        roleEn: 'HR & Administration Manager',
        roleAr: 'مدير الموارد البشرية والشؤون الإدارية',
        companyEn: 'Al-Rawi Electromechanical Contracting LLC',
        companyAr: 'الراوي للمقاولات الكهروميكانيكية ذ.م.م',
        rating: 5,
        date: 'October 2026',
        commentEn: 'Processed 22 new engineering and technician work permits through Karama Business Center Tasheel desk. Having Tasheel, Amer, and Karama Medical Center in one building saves our PROs days of travel.',
        commentAr: 'أنجزنا 22 تصريح عمل جديد للمهندسين والفنيين عبر قسم تسهيل في مركز الكرامة للأعمال. وجود تسهيل وآمر ومركز الكرامة الطبي في مبنى واحد يوفر على مناديبنا أياماً من التنقل.',
      },
    ],
    targetKeywords: {
      shortTail: ['dubai work permit', 'tasheel dubai', 'dubai work visa', 'mohre work permit', 'tasheel center dubai'],
      longTail: ['dubai work permit visa fees 2026', 'electronic work permit mohre tasheel dubai', '2 years work visa price in dubai mainland', 'new employee work permit procedure dubai'],
    },
  },

  // =========================================================================
  // 2. WORK PERMIT & LABOUR CARD RENEWAL (2 YEARS)
  // =========================================================================
  'tasheel-work-permit-renewal': {
    detailedOverviewEn: `Renewing an employee's Electronic Work Permit and Labour Card (تجديد تصريح وعقد العمل) with the Ministry of Human Resources and Emiratisation (MoHRE) is a mandatory biennial procedure that must be completed before or within the statutory grace period of the employee's residency visa expiry. Under UAE Labour Law, a mainland residency visa cannot be renewed at GDRFA (Amer) until the underlying MoHRE work permit and unified employment contract have been renewed and electronically attested.

At Karama Business Center (KBC), our integrated Tasheel, Karama Medical Fitness Center (KMFC), ICP Biometrics, and Amer Residency desks allow your employees to complete their entire 2-year renewal cycle in a single visit:
1. **Step 1 (KMFC Medical)**: The employee completes their DHA Medical Fitness Test on-site at Karama Medical Center.
2. **Step 2 (Tasheel Desk)**: Our Tasheel officers generate the renewed 2-year Unified Labour Contract, capture the employer's E-Signature, renew the Workers Protection Insurance, and settle the MoHRE 2-year work permit renewal fee.
3. **Step 3 (Amer & ICP Desk)**: Immediately upon MoHRE contract activation, our adjacent Amer desk submits the 2-year Emirates ID renewal and GDRFA Residency Visa stamping—delivering a seamless, zero-friction corporate renewal experience.`,
    detailedOverviewAr: `يُعد تجديد تصريح وعقد العمل الإلكتروني لدى وزارة الموارد البشرية والتوطين (MoHRE) إجراءً قانونياً إلزامياً كل سنتين للحفاظ على شرعية عمل الموظف في القطاع الخاص؛ إذ لا يمكن تجديد تأشيرة الإقامة لدى إقامة دبي (آمر) إلا بعد إتمام تجديد تصريح العمل وتوثيق عقد العمل المجدد في نظام "تسهيل".

ينفرد مركز الكرامة للأعمال (KBC) بتوفير دورة التجديد الكاملة للموظف في زيارة واحدة وتحت سقف واحد بفضل تكامل أقسامه الأربعة:
1. **الخطوة الأولى (مركز الكرامة الطبي KMFC)**: يجري الموظف فحص اللياقة الطبية لتجديد الإقامة في مركزنا الطبي المعتمد بنفس المبنى.
2. **الخطوة الثانية (قسم تسهيل)**: يقوم موظفو تسهيل بطباعة عقد العمل الموحد المجدد لمدة سنتين، اعتماده ببطاقة التوقيع الإلكتروني، تجديد التأمين العمالي، وسداد رسوم تجديد تصريح العمل الوزارية.
3. **الخطوة الثالثة (قسم آمر والهوية)**: فور تفعيل تصريح العمل في النظام، يقوم قسم "آمر" المجاور بتجديد بطاقة الهوية الإماراتية وتثبيت الإقامة الجديدة لمدة سنتين في دقائق معدودة.`,
    legalFrameworkEn: `UAE Federal Decree-Law No. 33 of 2021 (Fixed-Term Employment Contract Renewal Provisions) and MoHRE Work Permit Renewal & Late Penalty Directives.`,
    legalFrameworkAr: `المرسوم بقانون اتحادي رقم (33) لسنة 2021 بشأن تنظيم علاقات العمل (أحكام تجديد العقود محددة المدة) ولوائح تجديد تصاريح العمل بوزارة الموارد البشرية والتوطين.`,
    eligibilityEn: [
      'Valid Dubai Mainland Trade License and active MoHRE Establishment Card',
      'Employee passport valid for at least 6 months',
      'Passed DHA Medical Fitness Certificate (completed on-site at Karama Medical Center KMFC)',
      'Signed renewed Unified Employment Contract and active employer E-Signature Card',
    ],
    eligibilityAr: [
      'رخصة تجارية سارية المفعول وبطاقة منشأة فعالة لدى وزارة الموارد البشرية',
      'جواز سفر ساري المفعول للموظف لمدة لا تقل عن 6 أشهر',
      'شهادة لياقة طبية (لائق صحياً) صادرة من هيئة الصحة بدبي (تُنجز فوراً في مركز الكرامة الطبي بمقرنا)',
      'توقيع عقد العمل الموحد المجدد وتوفر بطاقة التوقيع الإلكتروني لصاحب العمل',
    ],
    galleryImages: TASHEEL_GALLERY,
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'On-Site DHA Medical Fitness Screening (KMFC)',
        titleAr: 'إجراء الفحص الطبي في مركز الكرامة الطبي (KMFC)',
        descEn: 'Completing the employee’s residency medical fitness test at our co-located DHA medical center.',
        descAr: 'إتمام فحص اللياقة الطبية للموظف في مركز الكرامة للياقة الطبية السريعة بنفس المبنى.',
        durationEn: '3 - 24 Hours',
        durationAr: '3 - 24 ساعة',
      },
      {
        stepNumber: 2,
        titleEn: 'Unified Contract Renewal & Employer E-Signature',
        titleAr: 'طباعة عقد العمل المجدد واعتماد التوقيع الإلكتروني',
        descEn: 'Typing the renewed 2-year MoHRE contract (with any salary or title updates) and authenticating via E-Signature card.',
        descAr: 'طباعة عقد العمل الموحد لمدة سنتين (مع إمكانية تعديل الراتب أو المسمى) واعتماده ببطاقة التوقيع الإلكتروني.',
        durationEn: '20 Mins',
        durationAr: '20 دقيقة',
      },
      {
        stepNumber: 3,
        titleEn: 'MoHRE Renewal Voucher & Insurance Settlement',
        titleAr: 'سداد رسوم تجديد تصريح العمل والتأمين العمالي',
        descEn: 'Paying the official 2-year MoHRE work permit renewal fee and WPP insurance policy.',
        descAr: 'سداد الرسوم الحكومية لتجديد تصريح العمل ووثيقة التأمين العمالي واستلام الإيصال الرسمي.',
        durationEn: '15 Mins',
        durationAr: '15 دقيقة',
      },
      {
        stepNumber: 4,
        titleEn: 'Automatic Sync with Amer for Residency Stamping',
        titleAr: 'الربط الفوري مع قسم آمر لتثبيت الإقامة المجددة',
        descEn: 'Instant electronic transmission of the renewed labour card to GDRFA Dubai to finalize the 2-year residency renewal.',
        descAr: 'إرسال إشعار التجديد إلكترونياً وبشكل فوري إلى نظام إقامة دبي لإصدار الإقامة المجددة.',
        durationEn: 'Instant',
        durationAr: 'فوري',
      },
    ],
    faqs: [
      {
        questionEn: 'What is the penalty for late renewal of a MoHRE Work Permit / Labour Card?',
        questionAr: 'ما هي غرامة تأخير تجديد تصريح وبطاقة العمل لدى وزارة الموارد البشرية؟',
        answerEn: 'If a work permit is not renewed or cancelled within the statutory grace period after expiry, MoHRE imposes a late renewal fine of AED 200 per month (or part of a month). Completing the renewal on time at KBC prevents both MoHRE fines and GDRFA overstay fines.',
        answerAr: 'في حال عدم تجديد أو إلغاء تصريح العمل بعد انتهاء فترة السماح القانونية، تفرض وزارة الموارد البشرية والتوطين غرامة تأخير قدرها 200 درهم عن كل شهر تأخير (أو جزء من الشهر). التجديد المبكر في مركزنا يجنبك غرامات العمل وغرامات الإقامة معاً.',
      },
      {
        questionEn: 'Can we increase the employee’s salary in the WPS contract during work permit renewal?',
        questionAr: 'هل يمكن تعديل وزيادة راتب الموظف في عقد العمل أثناء التجديد؟',
        answerEn: 'Yes! Work permit renewal is the ideal time to update the employee’s basic salary, allowances, or total remuneration package in the Unified Labour Contract without paying a separate contract amendment fee.',
        answerAr: 'نعم بالتأكيد! يُعد وقت تجديد تصريح العمل الفرصة الأنسب لتحديث الراتب الأساسي والبدلات وإجمالي الراتب في عقد العمل الموحد ونظام حماية الأجور دون دفع رسوم تعديل عقد منفصلة.',
      },
    ],
    reviews: [
      {
        name: 'Sujatha Menon',
        roleEn: 'HR Operations Specialist',
        roleAr: 'أخصائية عمليات الموارد البشرية',
        companyEn: 'Prime Logistics & Freight LLC',
        companyAr: 'برايم للخدمات اللوجستية والشحن ذ.م.م',
        rating: 5,
        date: 'October 2026',
        commentEn: 'Our staff do their medical test at Karama Medical Center downstairs and renew their Tasheel labour contract and Amer visa upstairs in one go. Unbeatable convenience.',
        commentAr: 'يجري موظفونا الفحص الطبي في مركز الكرامة الطبي ويجددون عقد تسهيل وإقامة آمر في نفس المبنى وفي زيارة واحدة. راحة وسرعة لا مثيل لها.',
      },
    ],
    targetKeywords: {
      shortTail: ['work permit renewal dubai', 'labour card renewal uae', 'tasheel contract renewal', 'mohre visa renewal', '2 years visa renewal dubai'],
      longTail: ['mohre work permit renewal fees 2026', 'labour card expiry fine check uae', 'renew work permit and residency visa karama dubai', 'tasheel labour contract renewal online'],
    },
  },

  // =========================================================================
  // 3. JOB OFFER LETTER & UNIFIED LABOUR CONTRACT DRAFTING
  // =========================================================================
  'tasheel-job-offer-unified-contract': {
    detailedOverviewEn: `Under UAE Federal Decree-Law No. 33 of 2021, every private-sector employment relationship in Dubai mainland is governed by a mandatory two-document legal chain administered through Tasheel (MoHRE): the **Standard Electronic Job Offer Letter (عرض العمل الموحد)** and the **Unified Fixed-Term Employment Contract (عقد العمل الموحد محدد المدة)**.

The MoHRE Job Offer Letter is not a casual company memo—it is a legally binding bilingual government instrument bearing a unique MoHRE barcode. The terms stipulated in the Job Offer (basic salary, housing/transport allowances, annual leave, probation period, notice period, and occupational code) are locked into the Ministry’s database and automatically populate the final Unified Employment Contract; no clause can later be altered to the employee's detriment.

At Karama Business Center (KBC), our certified Tasheel legal typists prepare error-free Job Offer Letters, Fixed-Term Unified Labour Contracts (up to 3 years / standard 2-year visa alignment), and Contract Amendment Annexes (تعديل بيانات عقد العمل) for salary adjustments or job title promotions, ensuring 100% compliance with UAE Labour Law and the Wage Protection System (WPS).`,
    detailedOverviewAr: `وفقاً للمرسوم بقانون اتحادي رقم (33) لسنة 2021 بشأن تنظيم علاقات العمل، تخضع كافة علاقات التوظيف في القطاع الخاص بدبي لسلسلة تعاقدية إلكترونية إلزامية عبر نظام "تسهيل" تشمل وثيقتين رسميتين: **عرض العمل الإلكتروني الموحد** و**عقد العمل الموحد محدد المدة**.

إن عرض العمل الصادر عبر وزارة الموارد البشرية والتوطين ليس مجرد خطاب داخلي، بل هو وثيقة حكومية ملزمة ثنائية اللغة تحمل رمزاً شريطياً (Barcode) رسمياً؛ حيث تُحفظ كافة الشروط الواردة فيه (الراتب الأساسي، البدلات، الإجازات السنوية، فترة التجربة، فترة الإنذار، والرمز المهني) في قاعدة بيانات الوزارة وتنتقل تلقائياً إلى عقد العمل النهائي دون جواز انتقاص أي حق من حقوق العامل لاحقاً.

في مركز الكرامة للأعمال (KBC)، يقوم خبراء تسهيل المعتمدون بإعداد وصياغة عروض العمل، توثيق عقود العمل الموحدة الجديدة، وإجراء معاملات **تعديل عقد العمل** (عند ترقية الموظف لتغيير المسمى الوظيفي أو زيادة الراتب لأغراض كفالة الأسرة)، مع ضمان التوافق التام مع قانون العمل الإماراتي ونظام حماية الأجور (WPS).`,
    legalFrameworkEn: `UAE Federal Decree-Law No. 33 of 2021 (Article 8 on Fixed-Term Employment Contracts) and Federal Decree-Law No. 14 of 2022.`,
    legalFrameworkAr: `المرسوم بقانون اتحادي رقم (33) لسنة 2021 (المادة 8 بشأن عقود العمل محددة المدة) والمرسوم بقانون اتحادي رقم (14) لسنة 2022.`,
    eligibilityEn: [
      'Active company establishment file at MoHRE and valid employer E-Signature Card',
      'Passport copy and personal photo of the employee',
      'Agreed salary breakdown (Basic Salary + Allowances) and designated MoHRE profession code',
      'Signed employee signature (for skilled levels 1–5) or thumbprint verification (for levels 6–9)',
    ],
    eligibilityAr: [
      'ملف منشأة فعال لدى وزارة الموارد البشرية وبطاقة توقيع إلكتروني سارية لصاحب العمل',
      'صورة جواز سفر الموظف وصورة شخصية حديثة',
      'تفاصيل الراتب المتفق عليه (الراتب الأساسي + البدلات) والمسمى الوظيفي المعتمد',
      'توقيع الموظف (للمستويات الماهرة 1-5) أو البصمة المعتمدة (للمستويات 6-9)',
    ],
    galleryImages: TASHEEL_GALLERY,
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'Electronic Job Offer Typing & Barcode Issuance',
        titleAr: 'طباعة عرض العمل الموحد وإصدار الباركود',
        descEn: 'Generating the official bilingual MoHRE Job Offer Letter with accurate salary structure and labour law clauses.',
        descAr: 'إعداد عرض العمل الرسمي باللغتين العربية والإنجليزية متضمناً هيكل الراتب والبنود القانونية المعتمدة.',
        durationEn: '15 Mins',
        durationAr: '15 دقيقة',
      },
      {
        stepNumber: 2,
        titleEn: 'Employee & Employer Digital Authentication',
        titleAr: 'اعتماد توقيع الموظف وصاحب العمل إلكترونياً',
        descEn: 'Validating employee consent (signature/OTP) and authenticating via the employer’s MoHRE E-Signature card.',
        descAr: 'توثيق موافقة وتوقيع الموظف واعتماد الطلب ببطاقة التوقيع الإلكتروني للمخول بالتوقيع.',
        durationEn: '15 Mins',
        durationAr: '15 دقيقة',
      },
      {
        stepNumber: 3,
        titleEn: 'Unified Labour Contract Submission & Attestation',
        titleAr: 'تقديم وتوثيق عقد العمل الموحد النهائي',
        descEn: 'Submitting the final Unified Labour Contract post-medical/entry and issuing the attested MoHRE Employment Contract.',
        descAr: 'رفع عقد العمل الموحد وسداد الرسوم الحكومية وإصدار العقد المصدق رسمياً من وزارة الموارد البشرية.',
        durationEn: '30 Mins',
        durationAr: '30 دقيقة',
      },
    ],
    faqs: [
      {
        questionEn: 'How can an employee amend their MoHRE Labour Contract to sponsor their family in Dubai?',
        questionAr: 'كيف يمكن تعديل الراتب أو المسمى في عقد العمل الموحد لتتمكن من كفالة الأسرة؟',
        answerEn: 'To sponsor a spouse and children at GDRFA (Amer), the employee’s attested MoHRE Unified Labour Contract must show a minimum monthly salary of AED 4,000. If the employee received a raise or promotion, our Tasheel desk processes an official "Modify Work Contract" transaction (endorsed by employer E-Signature) that updates the salary in both MoHRE and GDRFA systems within 24 hours.',
        answerAr: 'لكفالة الزوجة والأبناء لدى إقامة دبي (آمر)، يجب أن يظهر في عقد العمل المصدق راتب شهري لا يقل عن 4,000 درهم. إذا حصل الموظف على زيادة في الراتب أو ترقية، ينجز قسم تسهيل لدينا معاملة "تعديل بيانات عقد العمل" بموافقة صاحب العمل، ليتم تحديث الراتب إلكترونياً في نظامي وزارة العمل وإقامة دبي خلال 24 ساعة.',
      },
      {
        questionEn: 'Are unlimited-term labour contracts still valid in the UAE?',
        questionAr: 'هل لا تزال عقود العمل غير محددة المدة سارية في دولة الإمارات؟',
        answerEn: 'No. Under Federal Decree-Law No. 33 of 2021, all private-sector employment contracts in the UAE must be Fixed-Term Contracts (عقود محددة المدة), renewable by mutual agreement.',
        answerAr: 'لا. بموجب المرسوم بقانون اتحادي رقم 33 لسنة 2021، تم تحويل جميع عقود العمل في القطاع الخاص بدولة الإمارات إلى "عقود عمل محددة المدة" قابلة للتجديد باتفاق الطرفين.',
      },
    ],
    reviews: [
      {
        name: 'Kareem Abdel-Aziz',
        roleEn: 'Senior Financial Analyst',
        roleAr: 'محلل مالي أول',
        companyEn: 'Gulf Capital Advisory LLC',
        companyAr: 'الخليج للاستشارات المالية ذ.م.م',
        rating: 5,
        date: 'October 2026',
        commentEn: 'Needed to amend my salary on my MoHRE labour contract from AED 3,500 to AED 6,500 after my promotion so I could sponsor my wife. KBC Tasheel and Amer desks completed both my contract update and my wife’s entry permit on the same day.',
        commentAr: 'احتجت لتعديل راتبي في عقد العمل بعد ترقيتي لأتمكن من كفالة زوجتي. أنجز قسم تسهيل وقسم آمر في مركز الكرامة للأعمال تعديل العقد وإصدار إذن دخول زوجتي في نفس اليوم.',
      },
    ],
    targetKeywords: {
      shortTail: ['mohre labour contract', 'tasheel offer letter', 'unified employment contract uae', 'modify labour contract dubai', 'salary amendment tasheel'],
      longTail: ['how to check mohre labour contract online', 'amend salary in labour contract for family visa dubai', 'tasheel job offer letter typing fee dubai', 'fixed term employment contract uae labour law'],
    },
  },

  // =========================================================================
  // 4. COMPANY ELECTRONIC QUOTA APPLICATION & INCREASE
  // =========================================================================
  'tasheel-quota-application-amendment': {
    detailedOverviewEn: `Before a Dubai mainland company can apply for any new employee work permit, it must hold an available, approved **Electronic Work Permit Quota (رصيد الكوتا الإلكترونية)** in its Ministry of Human Resources and Emiratisation (MoHRE) establishment file. Whenever a business expands its operations, wins new contracting projects, or rents larger office/warehouse premises, it must submit a formal **Quota Application / Quota Increase Request (طلب إصدار أو زيادة كوتا العمالة)** through Tasheel.

MoHRE evaluates corporate quota applications based on specific statutory criteria: the nature of the licensed DET economic activity (trading, contracting, restaurant, cleaning, consultancy), the square footage and capacity of the company’s registered Ejari premises, current workforce cultural diversity (to maintain Category 2 Tier A/B incentives), compliance with the Wage Protection System (WPS), and fulfillment of mandatory Emiratisation (Tawteen) targets for companies with 20+ or 50+ skilled employees.

At Karama Business Center (KBC), our senior Tasheel corporate specialists audit your company’s space-to-quota ratio, prepare the required project contracts, DEWA bills, and Ejari documentation, and submit your electronic quota request via our priority MoHRE enterprise gateway—securing rapid approvals without unnecessary ministry inspection rejections.`,
    detailedOverviewAr: `قبل أن تتمكن أي شركة في دبي من التقديم على تصريح عمل لموظف جديد، يجب أن يتوفر في ملف المنشأة لديها **رصيد كوتا إلكترونية شاغر ومعتمد** من وزارة الموارد البشرية والتوطين (MoHRE). وعند توسع أعمال الشركة، أو الفوز بعقود ومشاريع جديدة، أو استئجار مكاتب ومستودعات أكبر، يتعين تقديم **طلب إصدار أو زيادة كوتا العمالة** عبر مركز تسهيل.

تعتمد وزارة الموارد البشرية في تقييم ومنح الكوتا على معايير دقيقة تشمل: طبيعة النشاط الاقتصادي المرخص من اقتصادية دبي (تجارة، مقاولات، مطاعم، استشارات)، المساحة الإجمالية للمقر الموثق في عقد "إيجاري"، مدى الالتزام بالتنوع الثقافي للعمالة، انتظام تحويل الرواتب في نظام حماية الأجور (WPS)، واستيفاء نسب التوطين المقررة للشركات المشمولة.

في مركز الكرامة للأعمال (KBC)، يقوم مستشارو الشركات في قسم تسهيل بدراسة ملف منشأتك وحساب الطاقة الاستيعابية للمكتب قبل التقديم، وتجهيز كافة المرفقات الداعمة (عقد إيجاري، فاتورة ديوا، عقود المشاريع للمقاولات) لرفع طلب الكوتا إلكترونياً والحصول على الموافقة السريعة.`,
    legalFrameworkEn: `MoHRE Ministerial Resolutions on Establishment Workforce Quota Allocation, Office Capacity Ratios, and Tawteen Emiratisation Compliance.`,
    legalFrameworkAr: `القرارات الوزارية الصادرة عن وزارة الموارد البشرية والتوطين بشأن ضوابط منح وتعديل الحصص الإلكترونية لتصاريح العمل (الكوتا) ومعايير الطاقة الاستيعابية.`,
    eligibilityEn: [
      'Valid DET Trade License and active MoHRE Establishment Card',
      'Registered commercial Ejari lease contract and latest DEWA electricity/water bill matching the premises',
      'Active Wage Protection System (WPS) compliance of at least 80%+ for existing staff',
      'Valid project contracts or client LPOs (required when requesting high-volume labour quotas for contracting, maintenance, or cleaning companies)',
    ],
    eligibilityAr: [
      'رخصة تجارية سارية وبطاقة منشأة فعالة لدى وزارة الموارد البشرية والتوطين',
      'عقد إيجار تجاري موثق (إيجاري) وآخر فاتورة كهرباء ومياه (ديوا) لمقر الشركة',
      'الالتزام بنظام حماية الأجور (WPS) للعمالة الحالية بنسبة لا تقل عن الحد القانوني',
      'عقود المشاريع السارية أو أوامر الشراء (في حال طلب كوتا كبيرة لشركات المقاولات والصيانة والخدمات)',
    ],
    galleryImages: TASHEEL_GALLERY,
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'Establishment Capacity & Tawteen Pre-Audit',
        titleAr: 'تدقيق الطاقة الاستيعابية وملف التوطين للمنشأة',
        descEn: 'Analyzing your Ejari square footage, existing visa utilization, and Emiratisation thresholds to calculate the maximum approvable quota.',
        descAr: 'مراجعة مساحة المكتب في إيجاري وعدد العمالة الحالية ومستهدفات التوطين لتحديد العدد الأقصى المضمون قبوله.',
        durationEn: '30 Mins',
        durationAr: '30 دقيقة',
      },
      {
        stepNumber: 2,
        titleEn: 'Tasheel Electronic Quota Lodgement',
        titleAr: 'تقديم طلب الكوتا الإلكترونية عبر بوابة تسهيل',
        descEn: 'Submitting the electronic quota request with designated job titles, gender specifications, and supporting facility documents.',
        descAr: 'إدراج طلب الكوتا مع تحديد المسميات الوظيفية المطلوبة وإرفاق المستندات الداعمة وسداد رسوم الطلب.',
        durationEn: '30 Mins',
        durationAr: '30 دقيقة',
      },
      {
        stepNumber: 3,
        titleEn: 'Ministry Review & Quota Activation',
        titleAr: 'الاعتماد الوزاري وتفعيل رصيد الكوتا في النظام',
        descEn: 'Automated or committee approval by MoHRE, making the new quota immediately available for Job Offer generation.',
        descAr: 'صدور موافقة الوزارة ونزول رصيد الكوتا فوراً في حساب الشركة للبدء في إصدار عروض العمل.',
        durationEn: '24 - 48 Hours',
        durationAr: '24 - 48 ساعة',
      },
    ],
    faqs: [
      {
        questionEn: 'How many employee visas can my company get based on office size in Dubai?',
        questionAr: 'كم عدد تأشيرات الموظفين (الكوتا) المسموح بها حسب مساحة المكتب في دبي؟',
        answerEn: 'For standard commercial and professional offices in Dubai, the general benchmark is 1 employee quota per 80 to 90 sq. ft. (approx. 8–9 sq. m.) of physical Ejari office space. However, retail shops, restaurants, warehouses, and contracting companies with active project contracts can qualify for significantly higher operational quotas.',
        answerAr: 'بالنسبة للمكاتب التجارية والمهنية القياسية، يُخصص في المتوسط تصريح عمل واحد لكل 80 إلى 90 قدماً مربعاً (حوالي 8-9 أمتار مربعة) من مساحة المكتب الموثقة في إيجاري. أما المحلات التجارية، المطاعم، المستودعات، وشركات المقاولات التي تمتلك عقود مشاريع قائمة، فيمكنها الحصول على حصص كوتا أعلى بكثير حسب حجم العمل.',
      },
      {
        questionEn: 'Why was my company’s electronic quota request rejected by MoHRE?',
        questionAr: 'ما هي أبرز أسباب رفض طلب زيادة الكوتا لدى وزارة الموارد البشرية؟',
        answerEn: 'Common reasons include: requesting a quota exceeding your Ejari office area, having unused existing quota still sitting in your file, delayed WPS salary transfers, or an unfulfilled Tawteen Emiratisation requirement (for companies with 20–49 employees in targeted sectors or 50+ skilled employees). Our KBC Tasheel consultants diagnose and resolve the exact cause before re-applying.',
        answerAr: 'تشمل الأسباب الشائعة: طلب عدد يفوق مساحة المكتب في إيجاري، وجود رصيد كوتا سابق غير مستخدم في الملف، تأخر تحويل الرواتب في نظام حماية الأجور، أو عدم استيفاء نسبة التوطين المطلوبة. يقوم خبراؤنا بفحص الملف ومعالجة السبب بدقة قبل تقديم الطلب.',
      },
    ],
    reviews: [
      {
        name: 'Adel Al-Hashemi',
        roleEn: 'Operations Director',
        roleAr: 'مدير العمليات',
        companyEn: 'Al-Hashemi Interior Fit-Out LLC',
        companyAr: 'الهاشمي للتجهيزات الداخلية والديكور ذ.م.م',
        rating: 5,
        date: 'October 2026',
        commentEn: 'We needed 35 additional technician quotas for a new hotel fit-out project. KBC Tasheel team structured our project contract submission and got the full quota approved in 48 hours.',
        commentAr: 'كنا بحاجة لـ 35 كوتا إضافية للفنيين لتنفيذ مشروع فندقي جديد. قام فريق تسهيل في مركز الكرامة للأعمال بتجهيز ملف عقود المشاريع وحصلنا على الموافقة الكاملة خلال 48 ساعة.',
      },
    ],
    targetKeywords: {
      shortTail: ['mohre quota application', 'tasheel quota increase', 'company visa quota dubai', 'labour quota uae', 'electronic quota mohre'],
      longTail: ['how to apply for quota in mohre tasheel dubai', 'how many visas per sq ft office dubai', 'mohre electronic quota approval time and fees', 'increase employee visa quota dubai mainland'],
    },
  },

  // =========================================================================
  // 5. MOHRE COMPANY ESTABLISHMENT CARD (OPENING & UPDATE)
  // =========================================================================
  'tasheel-company-establishment-card': {
    detailedOverviewEn: `Opening a **MoHRE Company Establishment File / Labour Establishment Card (فتح ملف منشأة بوزارة الموارد البشرية والتوطين)** is the mandatory bridge between obtaining your DET Trade License and hiring your first employee in Dubai. Every mainland business—whether an LLC, Sole Establishment, or Civil Company—must be registered in the Ministry of Human Resources and Emiratisation database and assigned a unique **MoHRE Company Code (رقم المنشأة بوزارة العمل)** before it can request electronic quotas, issue E-Signature cards, or enroll in the Wage Protection System (WPS).

At Karama Business Center (KBC), our authorized Tasheel desk opens new MoHRE Company Establishment Files on the spot as soon as your DET Trade License is issued. We also handle **Company Establishment File Updates (تحديث بيانات المنشأة)** whenever you renew your trade license, add or remove partners, change the General Manager, relocate to a new Ejari office, or reactivate a suspended establishment file.

Because our Karama center integrates DET Licensing, Tasheel (MoHRE), and Amer (GDRFA) in one hall, we open both your MoHRE Labour Establishment File and your GDRFA Immigration Establishment Card simultaneously in a single 45-minute visit.`,
    detailedOverviewAr: `يُعد **فتح ملف المنشأة وإصدار بطاقة المنشأة لدى وزارة الموارد البشرية والتوطين (MoHRE)** الخطوة الإلزامية المباشرة بعد استخراج الرخصة التجارية لتتمكن الشركة من توظيف العمالة وإصدار تصاريح العمل في دبي. إذ يتوجب تسجيل كل شركة في قاعدة بيانات الوزارة والحصول على **رمز المنشأة الموحد (Labour Company Code)** لتفعيل خدمات الكوتا الإلكترونية، وإصدار بطاقة التوقيع الإلكتروني، والتسجيل في نظام حماية الأجور (WPS).

في مركز الكرامة للأعمال (KBC)، نقوم بفتح ملف المنشأة الجديد لدى "تسهيل" فوراً بمجرد صدور الرخصة التجارية. كما نُنجز معاملات **تحديث بيانات المنشأة** عند تجديد الرخصة التجارية سنوياً، أو تعديل الشركاء والمدير العام، أو تغيير عنوان المكتب (إيجاري)، أو إعادة تفعيل ملف المنشأة الموقوف.

وبفضل تواجد أقسام اقتصادية دبي وتسهيل وآمر في قاعة واحدة بمركزنا في الكرامة، نفتح لك ملف المنشأة في وزارة العمل وبطاقة المنشأة في إقامة دبي في آن واحد وخلال 45 دقيقة فقط.`,
    legalFrameworkEn: `UAE Federal Decree-Law No. 33 of 2021 and MoHRE Establishment Registration & Classification Directives.`,
    legalFrameworkAr: `المرسوم بقانون اتحادي رقم (33) لسنة 2021 واللوائح المنظمة لتسجيل وتصنيف المنشآت بوزارة الموارد البشرية والتوطين.`,
    eligibilityEn: [
      'Valid Dubai Mainland Trade License issued by DET (or relevant licensing authority)',
      'Memorandum of Association (MOA) or Local Service Agent Agreement showing partners and authorized manager',
      'Valid commercial Ejari tenancy contract (exempt in Year 1 if holding a DET Instant License)',
      'Original Emirates ID and Passport copies of all partners and the authorized signatory',
    ],
    eligibilityAr: [
      'رخصة تجارية أو مهنية سارية المفعول صادرة من اقتصادية دبي',
      'عقد التأسيس أو اتفاقية وكيل الخدمات الموضح بها أسماء الشركاء والمدير المخول',
      'عقد إيجار تجاري موثق (إيجاري) (تُعفى منه الرخصة الفورية خلال السنة الأولى)',
      'الهوية الإماراتية الأصلية وصور جوازات السفر للشركاء والمدير المسؤول',
    ],
    galleryImages: TASHEEL_GALLERY,
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'Unified Personal Number (ertibat) Registration for Owners',
        titleAr: 'فتح الملف الشخصي الموحد لأصحاب الرخصة والشركاء',
        descEn: 'Registering all company owners and the authorized manager in the MoHRE personal database using their original Emirates ID.',
        descAr: 'تسجيل بيانات الملاك والشركاء والمدير العام في قاعدة بيانات الوزارة باستخدام بطاقة الهوية الإماراتية الأصلية.',
        durationEn: '15 Mins',
        durationAr: '15 دقيقة',
      },
      {
        stepNumber: 2,
        titleEn: 'Establishment File Creation & DET Sync',
        titleAr: 'إنشاء ملف المنشأة والربط مع اقتصادية دبي',
        descEn: 'Pulling live license and partner data from the DET registry into the Tasheel system and assigning the MoHRE Company Code.',
        descAr: 'استيراد بيانات الرخصة والشركاء إلكترونياً من نظام اقتصادية دبي وإصدار رقم بطاقة المنشأة بوزارة العمل.',
        durationEn: '20 Mins',
        durationAr: '20 دقيقة',
      },
      {
        stepNumber: 3,
        titleEn: 'E-Signature Card Issuance & WPS Readiness',
        titleAr: 'إصدار بطاقة التوقيع الإلكتروني وتفعيل الخدمات الذكية',
        descEn: 'Activating the company’s electronic signature authority so the business can immediately apply for employee quotas and work permits.',
        descAr: 'تفعيل صلاحية التوقيع الإلكتروني للشركة للبدء الفوري في طلب الكوتا وإصدار عروض وتصاريح العمل.',
        durationEn: '15 Mins',
        durationAr: '15 دقيقة',
      },
    ],
    faqs: [
      {
        questionEn: 'What is the difference between the Amer Establishment Card and the Tasheel Establishment Card?',
        questionAr: 'ما الفرق بين بطاقة المنشأة في "آمر" وبطاقة المنشأة في "تسهيل"؟',
        answerEn: 'Every Dubai mainland company employing staff needs BOTH: (1) The **Tasheel (MoHRE) Establishment Card** registers your company with the Ministry of Human Resources and Emiratisation to issue work permits and labour contracts; (2) The **Amer (GDRFA) Establishment Card** registers your company with Dubai Immigration to issue entry permits and residency visas. At KBC, we issue and update both cards together.',
        answerAr: 'تحتاج كل شركة توظف عمالة في دبي إلى البطاقتين معاً: (1) **بطاقة منشأة تسهيل (وزارة الموارد البشرية)** وهي مخصصة لإصدار الكوتا وعروض وتصاريح وعقود العمل؛ و(2) **بطاقة منشأة آمر (إقامة دبي)** وهي مخصصة لإصدار أذونات الدخول وتثبيت تأشيرات الإقامة. في مركز الكرامة للأعمال، نصدر ونحدث البطاقتين معاً في نفس الزيارة.',
      },
      {
        questionEn: 'Do I need to update my Tasheel Establishment file every time I renew my DET Trade License?',
        questionAr: 'هل يجب تحديث ملف المنشأة في تسهيل بعد كل تجديد سنوي للرخصة التجارية؟',
        answerEn: 'Yes! Whenever you renew your DET Trade License, you must run a quick "Establishment File Update" at Tasheel so MoHRE registers your new license expiry date; otherwise, the MoHRE portal will block new work permit or renewal applications thinking your trade license is expired.',
        answerAr: 'نعم! بعد كل تجديد سنوي للرخصة التجارية، يجب إجراء معاملة "تحديث بيانات المنشأة" لدى تسهيل لإدراج تاريخ انتهاء الرخصة الجديد في نظام الوزارة، وإلا سيتوقف النظام تلقائياً عن قبول معاملات تصاريح العمل.',
      },
    ],
    reviews: [
      {
        name: 'Faisal Al-Qasimi',
        roleEn: 'Founder',
        roleAr: 'المؤسس',
        companyEn: 'Qasimi Tech Solutions LLC',
        companyAr: 'القاسمي للحلول التقنية ذ.م.م',
        rating: 5,
        date: 'October 2026',
        commentEn: 'Opened both our MoHRE Tasheel company file and GDRFA Amer establishment card right after receiving our trade license. Fast, accurate, and zero hassle.',
        commentAr: 'فتحنا ملف الشركة في تسهيل وبطاقة المنشأة في آمر فور استلام الرخصة التجارية في نفس الصالة. سرعة ودقة عالية.',
      },
    ],
    targetKeywords: {
      shortTail: ['mohre establishment card', 'open company file tasheel', 'labour establishment card dubai', 'update trade license in mohre', 'tasheel company registration'],
      longTail: ['how to open company file in mohre tasheel dubai', 'mohre establishment card renewal and update fees', 'difference between immigration card and labour establishment card', 'activate suspended company file mohre'],
    },
  },

  // =========================================================================
  // 6. E-SIGNATURE SMART CARD (AUTHORIZED SIGNATORY & PRO CARD)
  // =========================================================================
  'tasheel-esignature-card-issuance': {
    detailedOverviewEn: `The **MoHRE Electronic Signature Card (بطاقة التوقيع الإلكتروني - E-Signature Smart Card)** is the official biometric cryptographic credential issued by the Ministry of Human Resources and Emiratisation for company owners, partners, managing directors, and authorized signatories. Equipped with an encrypted microchip storing the signatory's verified Emirates ID biometrics and specimen signature, the E-Signature Card is mandatory to digitally authorize Job Offer Letters, Unified Employment Contracts, Work Permit Applications, and Cancellation documents across all Tasheel and MoHRE platforms.

At Karama Business Center (KBC), we issue new E-Signature Cards, process lost/damaged replacements, add additional company licenses onto a single owner's existing E-Signature Card, and register **Authorized Company PRO Cards (بطاقة مندوب العلاقات العامة)** in less than 20 minutes.

Because the Ministry verifies the applicant’s live fingerprint against the Federal Authority for Identity and Citizenship (ICP) database during activation, the company owner or authorized manager simply presents their original Emirates ID at our Karama Tasheel counter for a 2-minute biometric thumbprint scan—activating the card immediately.`,
    detailedOverviewAr: `تُعد **بطاقة التوقيع الإلكتروني (MoHRE E-Signature Smart Card)** الهوية الرقمية المشفرة المعتمدة من وزارة الموارد البشرية والتوطين لأصحاب الشركات، الشركاء، المديرين العامين، والمخولين بالتوقيع. تحتوي هذه البطاقة الذكية على شريحة إلكترونية تحفظ البصمة البيومترية ونموذج التوقيع المعتمد لصاحب العمل، وهي أداة إلزامية لا غنى عنها لاعتماد عروض العمل، توثيق عقود العمل الموحدة، التقديم على الكوتا وتصاريح العمل، وإلغاء بطاقات العمل.

في مركز الكرامة للأعمال (KBC)، نُنجز إصدار بطاقة التوقيع الإلكتروني الجديدة، استبدال البطاقات التالفة أو المفقودة، ربط عدة شركات ورخص تجارية على بطاقة توقيع إلكتروني واحدة للمالك، بالإضافة إلى إصدار وتجديد **بطاقة المندوب المعتمد (PRO Card)** خلال أقل من 20 دقيقة.

تتطلب عملية التفعيل حضور المالك أو المدير المخول لمرة واحدة فقط حاملاً بطاقة الهوية الإماراتية الأصلية لمطابقة البصمة الحية على جهاز القارئ البيومتري في مركزنا، لتعمل البطاقة فوراً.`,
    legalFrameworkEn: `MoHRE Smart Services Digital Identity & Electronic Signature Authentication Directives.`,
    legalFrameworkAr: `ضوابط الهوية الرقمية واعتماد التوقيع الإلكتروني للمنشآت الصادرة عن وزارة الموارد البشرية والتوطين.`,
    eligibilityEn: [
      'Company Owner, Shareholder, General Manager listed on the Trade License/MOA, or holder of a notarized Power of Attorney (POA)',
      'Original valid UAE Emirates ID card (mandatory for live chip & fingerprint verification at the Tasheel desk)',
      'Active MoHRE Personal Number and Company Establishment File',
      'In-person attendance of the signatory for the 2-minute biometric fingerprint activation',
    ],
    eligibilityAr: [
      'مالك الرخصة، الشريك، المدير العام المدرج في الرخصة/عقد التأسيس، أو الوكيل المفوض بموجب وكالة عدلية مصدقة',
      'بطاقة الهوية الإماراتية الأصلية السارية (إلزامية لإجراء مطابقة البصمة والشريحة الذكية في المركز)',
      'توفر رقم شخصي وملف منشأة فعال لدى وزارة الموارد البشرية والتوطين',
      'الحضور الشخصي للمخول بالتوقيع لإتمام البصمة البيومترية وتفعيل البطاقة',
    ],
    galleryImages: TASHEEL_GALLERY,
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'Emirates ID Chip Reading & Personal File Verification',
        titleAr: 'قراءة شريحة الهوية والتحقق من الملف الشخصي',
        descEn: 'Inserting the original Emirates ID into the Tasheel reader to validate signatory authority and MoHRE personal code.',
        descAr: 'إدخال بطاقة الهوية الأصلية في القارئ الذكي للتحقق من الصلاحية القانونية ورقم الملف الشخصي بالوزارة.',
        durationEn: '5 Mins',
        durationAr: '5 دقائق',
      },
      {
        stepNumber: 2,
        titleEn: 'Live Biometric Fingerprint & Specimen Signature Capture',
        titleAr: 'التقاط البصمة البيومترية ونموذج التوقيع الإلكتروني',
        descEn: 'Matching the signatory’s live fingerprint with ICP records and recording the digital signature on the optical pad.',
        descAr: 'مطابقة بصمة الإصبع الحية مع بيانات الهوية الاتحادية وتسجيل التوقيع الإلكتروني على اللوحة الضوئية.',
        durationEn: '5 Mins',
        durationAr: '5 دقائق',
      },
      {
        stepNumber: 3,
        titleEn: 'Smart Card Encoding, Fee Payment & Instant Handover',
        titleAr: 'برمجة البطاقة الذكية والتسليم الفوري',
        descEn: 'Paying the official MoHRE E-Signature fee (AED 250 gov fee) and activating the physical smart card on the spot.',
        descAr: 'سداد الرسوم الحكومية الرسمية وبرمجة البطاقة الذكية وتسليمها للمتعامل مفعلة وجاهزة للاستخدام فوراً.',
        durationEn: '10 Mins',
        durationAr: '10 دقائق',
      },
    ],
    faqs: [
      {
        questionEn: 'If I own 3 different companies in Dubai, do I need 3 separate E-Signature Cards?',
        questionAr: 'إذا كنت أمتلك 3 شركات مختلفة في دبي، هل أحتاج إلى 3 بطاقات توقيع إلكتروني؟',
        answerEn: 'No! Because the MoHRE E-Signature Card is linked to your unique Personal Number (الرقم الشخصي) at the Ministry, our Tasheel officers can link all of your Dubai and UAE mainland companies onto a single E-Signature Card.',
        answerAr: 'لا! نظراً لأن بطاقة التوقيع الإلكتروني مرتبطة بـ "الرقم الشخصي الموحد" للمالك لدى الوزارة، يمكن لموظفي تسهيل لدينا ربط جميع شركاتك ورخصك التجارية في بطاقة توقيع إلكتروني واحدة فقط.',
      },
      {
        questionEn: 'Can an investor on a tourist visa get an E-Signature Card before their Emirates ID is issued?',
        questionAr: 'هل يمكن للمستثمر الجديد استخراج بطاقة التوقيع الإلكتروني قبل صدور هويته الإماراتية؟',
        answerEn: 'An original Emirates ID is required to issue a permanent E-Signature Card. However, if a new foreign investor has just issued their DET Trade License and needs to process their own visa or urgent company transactions before receiving their physical Emirates ID, our KBC Amer & Tasheel desks assist with temporary PRO/signatory delegation or Investor Visa issuance through GDRFA first.',
        answerAr: 'يتطلب إصدار بطاقة التوقيع الإلكتروني الدائمة وجود بطاقة الهوية الإماراتية الأصلية. ولكن للمستثمر الجديد الذي استخرج رخصته للتو، يقوم قسم آمر وتسهيل لدينا بإصدار إقامة المستثمر والهوية الإماراتية أولاً أو تفعيل التفويض القانوني اللازم لتسيير أعمال الشركة.',
      },
    ],
    reviews: [
      {
        name: 'Youssef Al-Zarooni',
        roleEn: 'Chairman',
        roleAr: 'رئيس مجلس الإدارة',
        companyEn: 'Al-Zarooni Group of Companies',
        companyAr: 'مجموعة شركات الزرعوني',
        rating: 5,
        date: 'October 2026',
        commentEn: 'Linked all 5 of my commercial licenses onto one MoHRE E-Signature card in 15 minutes at Karama Business Center. Zero queue in the VIP lounge.',
        commentAr: 'تم ربط 5 رخص تجارية تابعة لمجموعتنا في بطاقة توقيع إلكتروني واحدة خلال 15 دقيقة في مركز الكرامة للأعمال عبر صالة كبار الشخصيات.',
      },
    ],
    targetKeywords: {
      shortTail: ['e-signature card mohre', 'tasheel e signature card', 'pro card mohre', 'electronic signature card dubai', 'mohre smart card'],
      longTail: ['how to get e-signature card in tasheel dubai', 'mohre e-signature card fee 250 aed', 'activate e-signature card without emirates id', 'link multiple companies to one e-signature card'],
    },
  },

  // =========================================================================
  // 7. MISSION & TEMPORARY WORK PERMIT (90 - 180 DAYS)
  // =========================================================================
  'tasheel-mission-work-permit': {
    detailedOverviewEn: `When your Dubai company needs to bring an overseas specialist, project engineer, technical auditor, or seasonal consultant to the UAE for a short-term assignment (3 to 6 months), or hire a resident worker temporarily for an urgent project without committing to a full 2-year residency visa, the **MoHRE Mission Work Permit (تصريح عمل مهمة)** and **Temporary Work Permit (تصريح عمل مؤقت)** provide the exact legal solution.

- **Mission Work Permit (تصريح عمل مهمة — Overseas Recruitment)**: Issued to recruit a worker from outside the UAE for a 90-day mission (renewable once for an additional 90 days — up to 180 days total) to execute a specific technical, engineering, or consulting project.
- **Temporary Work Permit (تصريح عمل مؤقت — Inside UAE)**: Authorizes an employer to hire a UAE resident (or someone whose previous visa is in grace period / pending court claim) for a short-term assignment of up to 6 months without transferring their permanent residency sponsorship.

At Karama Business Center (KBC), our Tasheel desk processes Mission Quota allocations, Mission Entry Permits, and Temporary Work Permits within 24 hours—keeping your short-term project teams 100% legal during MoHRE site inspections.`,
    detailedOverviewAr: `عندما تحتاج شركتك في دبي إلى استقدام خبير فني، مهندس مشاريع، مدقق، أو فني متخصص من خارج الدولة لتنفيذ مهمة محددة لمدة قصيرة (من 3 إلى 6 أشهر)، أو تشغيل مقيم داخل الدولة لفترة مؤقتة دون الالتزام بإصدار إقامة كاملة لمدة سنتين، فإن **تصريح عمل مهمة (Mission Work Permit)** و**تصريح العمل المؤقت (Temporary Work Permit)** الصادرين عبر "تسهيل" يوفران الغطاء القانوني المثالي:

- **تصريح عمل مهمة (استقدام من خارج الدولة)**: يُصدر لاستقدام عامل من الخارج لمدة 90 يوماً (قابلة للتجديد لمرة واحدة لمدة 90 يوماً إضافية — بإجمالي 180 يوماً) لإنجاز مشروع فني أو عقد محدد.
- **تصريح العمل المؤقت (للمتواجدين داخل الدولة)**: يتيح للشركة تشغيل مقيم داخل الدولة لمدة تصل إلى 6 أشهر لإنجاز عمل تقتضي طبيعته فترة محددة دون الحاجة لنقل كفالة إقامته الدائمة.

في مركز الكرامة للأعمال (KBC)، ينجز فريق تسهيل طلبات كوتا المهمة وتصاريح العمل المؤقتة خلال 24 ساعة لضمان قانونية تواجد فرق المشاريع في مواقع العمل وتفادي غرامات التفتيش العمالي.`,
    legalFrameworkEn: `UAE Federal Decree-Law No. 33 of 2021 and Cabinet Resolution No. 1 of 2022 (Article 6 Defining Temporary and Mission Work Permits).`,
    legalFrameworkAr: `المرسوم بقانون اتحادي رقم (33) لسنة 2021 وقرار مجلس الوزراء رقم (1) لسنة 2022 (المادة 6 المنظمة لتصاريح العمل المؤقتة وتصاريح المهمة).`,
    eligibilityEn: [
      'Valid Dubai Mainland Trade License and active MoHRE Establishment Card',
      'Approved Mission Quota (for overseas Mission Work Permits)',
      'Candidate passport valid for at least 6 months with clear digital photograph',
      'Current sponsor NOC or valid residency/court status (for in-country Temporary Work Permits)',
    ],
    eligibilityAr: [
      'رخصة تجارية سارية وبطاقة منشأة فعالة لدى وزارة الموارد البشرية والتوطين',
      'توفر رصيد "كوتا مهمة" معتمد (في حال استقدام خبير أو فني من خارج الدولة)',
      'جواز سفر ساري المفعول لمدة 6 أشهر على الأقل مع صورة شخصية واضحة',
      'موافقة الكفيل الحالي أو الإقامة السارية (لتصاريح العمل المؤقتة داخل الدولة)',
    ],
    galleryImages: TASHEEL_GALLERY,
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'Mission Quota / Eligibility Verification',
        titleAr: 'تخصيص كوتا المهمة أو التحقق من أهلية التصريح المؤقت',
        descEn: 'Securing electronic mission quota from MoHRE or verifying the resident candidate’s current visa status.',
        descAr: 'استخراج كوتا المهمة الإلكترونية من الوزارة أو فحص صلاحية إقامة المتعامل المتواجد داخل الدولة.',
        durationEn: '2 - 4 Hours',
        durationAr: '2 - 4 ساعات',
      },
      {
        stepNumber: 2,
        titleEn: 'Mission Contract Typing & E-Signature',
        titleAr: 'طباعة عقد المهمة أو العمل المؤقت والتوقيع الإلكتروني',
        descEn: 'Preparing the short-term MoHRE employment contract and authenticating with the employer’s E-Signature card.',
        descAr: 'إعداد عقد العمل المؤقت أو عقد المهمة واعتماده ببطاقة التوقيع الإلكتروني لصاحب العمل.',
        durationEn: '30 Mins',
        durationAr: '30 دقيقة',
      },
      {
        stepNumber: 3,
        titleEn: 'MoHRE & GDRFA Mission Permit Issuance',
        titleAr: 'سداد الرسوم وإصدار تصريح المهمة وإذن الدخول',
        descEn: 'Settling the MoHRE mission permit fee (AED 300–600) and issuing the 90-day GDRFA Mission Entry Visa.',
        descAr: 'سداد الرسوم الحكومية المقررة وإصدار تصريح العمل المؤقت أو إذن دخول المهمة لمدة 90 يوماً.',
        durationEn: '24 Hours',
        durationAr: '24 ساعة',
      },
    ],
    faqs: [
      {
        questionEn: 'Can a worker on a Tourist Visa legally work in a Dubai office or project site?',
        questionAr: 'هل يجوز قانوناً تشغيل شخص يحمل تأشيرة سياحة أو زيارة في مكتب أو موقع عمل بدبي؟',
        answerEn: 'Strictly NO! Employing an individual on a Tourist or Visit Visa without an active MoHRE Work Permit exposes the company to a massive AED 50,000 fine per worker plus establishment file suspension. Instead, use a MoHRE Mission Work Permit or Temporary/Probationary Work Permit through our Tasheel desk.',
        answerAr: 'يُمنع منعاً باتاً! تشغيل أي شخص بتأشيرة سياحة أو زيارة دون تصريح عمل رسمي صادر من وزارة الموارد البشرية يعرض صاحب العمل لغرامة قدرها 50,000 درهم عن كل عامل مع إيقاف ملف المنشأة. الحل القانوني السريع هو إصدار تصريح عمل مهمة أو تصريح عمل مؤقت عبر مركزنا.',
      },
    ],
    reviews: [
      {
        name: 'Stefan Lindner',
        roleEn: 'Project Director',
        roleAr: 'مدير المشاريع',
        companyEn: 'Bavaria Industrial Automation Middle East',
        companyAr: 'بافاريا للأتمتة الصناعية الشرق الأوسط',
        rating: 5,
        date: 'September 2026',
        commentEn: 'Brought 6 German commissioning engineers to Dubai on 90-day Mission Work Permits arranged by KBC Tasheel. 100% compliant for factory site security clearance.',
        commentAr: 'استقدمنا 6 مهندسين ألمان إلى دبي بموجب تصاريح عمل مهمة لمدة 90 يوماً عبر قسم تسهيل في مركز الكرامة للأعمال، مما منحنا موافقات دخول المواقع الصناعية فوراً وبشكل قانوني تام.',
      },
    ],
    targetKeywords: {
      shortTail: ['mission work permit uae', 'temporary work permit dubai', '90 days work visa dubai', 'short term work permit mohre', 'project visa dubai'],
      longTail: ['mohre mission visa 90 days cost and procedure', 'how to get temporary work permit in dubai for 6 months', 'hire employee on mission permit uae labour law', 'tasheel temporary labour card dubai'],
    },
  },

  // =========================================================================
  // 8. PART-TIME, JUVENILE & FLEXIBLE WORK PERMIT
  // =========================================================================
  'tasheel-part-time-work-permit': {
    detailedOverviewEn: `Modern businesses in Dubai frequently require specialized talent—such as chartered accountants, IT engineers, graphic designers, digital marketers, legal advisors, or university students—for a specific number of hours per week without needing to sponsor their full-time residency visa. Under UAE Federal Decree-Law No. 33 of 2021, the Ministry of Human Resources and Emiratisation (MoHRE) offers official **Part-Time Work Permits (تصريح العمل الجزئي)**, **Juvenile Work Permits (for ages 15–18)**, and **Student Training Permits**.

A **MoHRE Part-Time Work Permit** allows a skilled employee (who is already employed full-time with another UAE mainland or free zone company, or holding a Golden Visa / Freelance Visa) to work legally for a second employer for less than normal full-time working hours. Crucially, under updated MoHRE regulations for Skilled Workers (Levels 1–5), obtaining a Part-Time Work Permit is streamlined, valid for 1 year, and requires a government fee of only AED 100 initial application + AED 500 issuance fee—with zero visa quota deduction from your company's main MoHRE establishment file!

At Karama Business Center (KBC), our Tasheel specialists issue Part-Time Work Permits within 24 hours, protecting both the secondary employer and the professional fromAED 50,000 illegal employment penalties.`,
    detailedOverviewAr: `تحتاج الكثير من الشركات في دبي إلى الاستعانة بخبرات وكفاءات متخصصة — كالمحاسبين القانونيين، مهندسي التقنية، المصممين، مسؤولي التسويق الرقمي، أو طلاب الجامعات — للعمل لساعات محددة أسبوعياً دون الحاجة لنقل كفالتهم أو إصدار إقامة كاملة لهم. وبموجب قانون العمل الإماراتي، توفر وزارة الموارد البشرية والتوطين (تسهيل) **تصريح العمل الجزئي (Part-Time Work Permit)**، وتصريح عمل الأحداث (15-18 سنة)، وتصريح تدريب الطلاب.

يتيح **تصريح العمل الجزئي** للموظف المقيم (سواء كان يعمل لدى شركة أخرى في الدولة، أو يحمل الإقامة الذهبية، أو الإقامة الخضراء) العمل بشكل قانوني تماماً لدى صاحب عمل ثانٍ لساعات عمل جزئية. وتبلغ الرسوم الحكومية لتصريح العمل الجزئي لمدة سنة واحدة 600 درهم فقط (100 درهم تقديم طلب + 500 درهم إصدار)، والأهم من ذلك أنه **لا يستهلك من رصيد الكوتا الرئيسية** للشركة!

في مركز الكرامة للأعمال (KBC)، نصدر تصاريح العمل الجزئي خلال 24 ساعة، مما يحمي الشركة والموظف من غرامات العمل لدى الغير دون تصريح (50,000 درهم).`,
    legalFrameworkEn: `UAE Federal Decree-Law No. 33 of 2021 (Article 7 Defining Part-Time and Flexible Work Models) and Cabinet Resolution No. 1 of 2022.`,
    legalFrameworkAr: `المرسوم بقانون اتحادي رقم (33) لسنة 2021 (المادة 7 بشأن أنماط العمل الجزئي والمرن) وقرار مجلس الوزراء رقم (1) لسنة 2022.`,
    eligibilityEn: [
      'Valid Dubai Mainland Trade License and active MoHRE Establishment Card for the secondary employer',
      'Applicant must hold a valid UAE Residency Visa (at least 6 months validity) and Emirates ID',
      'Part-Time Work Contract signed by both the secondary employer and the employee',
      'No Objection Certificate (NOC) from current sponsor (where required for non-skilled tiers or specific sponsor categories)',
    ],
    eligibilityAr: [
      'رخصة تجارية سارية وبطاقة منشأة فعالة للشركة الراغبة في إصدار التصريح الجزئي',
      'أن يحمل الموظف إقامة سارية المفعول في دولة الإمارات وبطاقة هوية إماراتية',
      'توقيع عقد عمل جزئي يحدد ساعات العمل والأجر المتفق عليه بين الطرفين',
      'شهادة عدم ممانعة من الكفيل الأصلي (للفئات التي يتطلب النظام موافقة كفيلها)',
    ],
    galleryImages: TASHEEL_GALLERY,
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'Part-Time Contract Drafting & E-Signature',
        titleAr: 'صياغة عقد العمل الجزئي واعتماد التوقيع الإلكتروني',
        descEn: 'Typing the MoHRE Part-Time Employment Contract specifying weekly hours and remuneration.',
        descAr: 'طباعة عقد العمل الجزئي الموحد وتوقيعه من الموظف واعتماده ببطاقة التوقيع الإلكتروني للشركة.',
        durationEn: '20 Mins',
        durationAr: '20 دقيقة',
      },
      {
        stepNumber: 2,
        titleEn: 'MoHRE Fee Payment (AED 600 Total Gov Fee)',
        titleAr: 'سداد الرسوم الحكومية لتصريح العمل الجزئي (600 درهم)',
        descEn: 'Settling AED 100 application fee + AED 500 1-year Part-Time Work Permit issuance fee.',
        descAr: 'سداد إذن الدفع الحكومي البالغ 100 درهم طلب + 500 درهم إصدار تصريح عمل جزئي لمدة سنة.',
        durationEn: '10 Mins',
        durationAr: '10 دقائق',
      },
      {
        stepNumber: 3,
        titleEn: 'Digital Part-Time Labour Card Issuance',
        titleAr: 'إصدار بطاقة العمل الجزئي الرقمية على تطبيق الوزارة',
        descEn: 'Immediate activation of the 1-year Part-Time Labour Card verifiable on the MoHRE Smart App.',
        descAr: 'صدور تصريح وبطاقة العمل الجزئي فوراً وظهورها في التطبيق الذكي لوزارة الموارد البشرية.',
        durationEn: 'Same Day / 24h',
        durationAr: 'نفس اليوم / 24 ساعة',
      },
    ],
    faqs: [
      {
        questionEn: 'Does issuing a Part-Time Work Permit deduct from my company’s MoHRE visa quota?',
        questionAr: 'هل يخصم تصريح العمل الجزئي من رصيد الكوتا الإلكترونية لشركتي؟',
        answerEn: 'No! Part-Time Work Permits do NOT consume your company’s main electronic work permit quota because the employee already holds a valid UAE residency visa.',
        answerAr: 'لا! لا يخصم تصريح العمل الجزئي من رصيد الكوتا الرئيسية للمنشأة لأن الموظف يمتلك إقامة سارية بالفعل داخل الدولة.',
      },
      {
        questionEn: 'Can Golden Visa holders work for a Dubai mainland company on a Work Permit?',
        questionAr: 'هل يحتاج حامل الإقامة الذهبية إلى تصريح عمل للعمل في شركة خاصة بدبي؟',
        answerEn: 'Yes! While Golden Visa holders sponsor their own residency for 10 years, any UAE company employing a Golden Visa holder (full-time or part-time) must issue them an official **MoHRE Golden Visa Holder Work Permit** through Tasheel so their employment contract and WPS salary transfers are legally registered.',
        answerAr: 'نعم! رغم أن حامل الإقامة الذهبية يكفل نفسه لمدة 10 سنوات، إلا أن أي شركة توظفه (بدوام كامل أو جزئي) ملزمة قانوناً باستخراج **"تصريح عمل لحاملي الإقامة الذهبية"** له عبر تسهيل لتوثيق عقده وتسجيل راتبه في نظام حماية الأجور.',
      },
    ],
    reviews: [
      {
        name: 'Nadia Al-Suwaidi',
        roleEn: 'Founder',
        roleAr: 'المؤسسة',
        companyEn: 'Aura Creative Studio LLC',
        companyAr: 'أورا ستوديو للإبداع ذ.م.م',
        rating: 5,
        date: 'October 2026',
        commentEn: 'Issued Part-Time Work Permits for our accountant and social media photographer at KBC Tasheel for just AED 600 gov fee each. Now our team is 100% legal without needing extra office quota!',
        commentAr: 'أصدرنا تصاريح عمل جزئي للمحاسب والمصور لدينا عبر قسم تسهيل في مركز الكرامة للأعمال برسوم حكومية 600 درهم فقط، وأصبح عملهم قانونياً 100% دون استهلاك كوتا المكتب!',
      },
    ],
    targetKeywords: {
      shortTail: ['part time work permit uae', 'part time labour card dubai', 'golden visa work permit mohre', 'student work permit dubai', 'flexible work permit tasheel'],
      longTail: ['how to get part time work permit in dubai cost 600 aed', 'can i work for two companies in uae legally', 'mohre work permit for golden visa holders fee', 'juvenile and student training work permit dubai'],
    },
  },

  // =========================================================================
  // 9. WORK PERMIT ON FAMILY SPONSORSHIP (SPOUSE / PARENTS NOC)
  // =========================================================================
  'tasheel-family-sponsorship-work-permit': {
    detailedOverviewEn: `One of the most cost-effective and popular ways for Dubai mainland companies to hire talented residents is the **MoHRE Work Permit for Residents on Family Sponsorship (تصريح عمل لمن هم على إقامة ذويهم)**. This permit allows wives, husbands, sons, and daughters who hold a valid UAE Residency Visa sponsored by their family member to work full-time in the private sector while keeping their cherished family residency visa intact—meaning the employer does not need to pay for a GDRFA entry permit, status change, DHA medical test, or Emirates ID!

Even better: under MoHRE Establishment Classification incentives, issuing a Family Sponsorship Work Permit (especially for female dependents sponsored by their husband or father) enjoys the lowest government fee structure in the UAE—starting from just AED 300 to AED 500 for a full 2-year Labour Card—and **does NOT deduct from your company's electronic visa quota**!

At Karama Business Center (KBC), our Tasheel desk drafts the bilingual **Family Sponsor No Objection Certificate (NOC / شهادة عدم ممانعة من الكفيل)**, generates the Unified Employment Contract, and issues the 2-year Family Sponsorship Labour Card within 24 hours.`,
    detailedOverviewAr: `يُعد **تصريح العمل لمن هم على إقامة ذويهم (Family Sponsorship Work Permit)** الصادر عن وزارة الموارد البشرية والتوطين (تسهيل) الخيار الأذكى والأقل تكلفة للشركات في دبي لتوظيف الكفاءات المقيمة داخل الدولة؛ حيث يتيح للزوجة أو الزوج أو الأبناء والبنات المكفولين على إقامة أسرهم العمل بشكل قانوني كامل في القطاع الخاص مع الاحتفاظ بإقامتهم العائلية كما هي — مما يوفر على صاحب العمل رسوم إذن الدخول، تعديل الوضع، الفحص الطبي، والهوية الإماراتية!

والأفضل من ذلك أن تصريح العمل على كفالة الأسرة يتميز برسوم حكومية رمزية للغاية (تبدأ من 300 درهم فقط لمدة سنتين للإناث على كفالة ذويهن)، كما أنه **لا يستهلك من رصيد الكوتا الإلكترونية للمنشأة** في معظم الأنشطة!

في مركز الكرامة للأعمال (KBC)، يقوم قسم تسهيل بصياغة **شهادة عدم الممانعة من الكفيل (NOC)**، وإعداد عرض وعقد العمل الموحد، وإصدار بطاقة العمل لمدة سنتين خلال 24 ساعة فقط.`,
    legalFrameworkEn: `UAE Federal Decree-Law No. 33 of 2021 and Cabinet Resolution No. 1 of 2022 (Work Permits for Residents Sponsored by Their Families).`,
    legalFrameworkAr: `المرسوم بقانون اتحادي رقم (33) لسنة 2021 وقرار مجلس الوزراء رقم (1) لسنة 2022 بشأن تصاريح العمل للمقيمين على كفالة ذويهم.`,
    eligibilityEn: [
      'Employee holds a valid UAE Residency Visa under Family Sponsorship (Spouse or Parent) with at least 6 months validity',
      'Sponsor (Husband/Wife/Father/Mother) also holds a valid UAE Residency Visa and Emirates ID',
      'Signed No Objection Certificate (NOC) in Arabic from the family sponsor authorizing the dependent to work',
      'Attested academic degree if the job title is a Skilled Profession (Levels 1–5)',
    ],
    eligibilityAr: [
      'أن يحمل الموظف أو الموظفة إقامة سارية المفعول على كفالة الأسرة (الزوج أو الأب أو الأم) بصلاحية لا تقل عن 6 أشهر',
      'سريان إقامة وهوية الكفيل (رب الأسرة)',
      'خطاب عدم ممانعة (NOC) باللغة العربية موقع من الكفيل يفيد بالموافقة على العمل',
      'شهادة علمية مصدقة في حال كان المسمى الوظيفي ضمن المهن التخصصية أو الماهرة (المستويات 1 إلى 5)',
    ],
    galleryImages: TASHEEL_GALLERY,
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'Family Sponsor NOC & Job Offer Typing',
        titleAr: 'صياغة عدم ممانعة الكفيل وطباعة عرض العمل',
        descEn: 'Preparing the Arabic Family NOC letter and generating the MoHRE Electronic Job Offer.',
        descAr: 'طباعة خطاب عدم الممانعة من الكفيل وإعداد عرض العمل الإلكتروني الموحد.',
        durationEn: '20 Mins',
        durationAr: '20 دقيقة',
      },
      {
        stepNumber: 2,
        titleEn: 'MoHRE Approval & Low-Cost Fee Settlement',
        titleAr: 'اعتماد التصريح وسداد الرسوم الحكومية المخفضة',
        descEn: 'Submitting the application with sponsor/dependent visas and paying the 2-year MoHRE permit fee + WPP insurance.',
        descAr: 'تقديم الطلب وسداد الرسوم الحكومية الميسرة لتصريح العمل لمدة سنتين ووثيقة التأمين العمالي.',
        durationEn: '4 - 24 Hours',
        durationAr: '4 - 24 ساعة',
      },
      {
        stepNumber: 3,
        titleEn: 'Unified Contract Attestation & WPS Registration',
        titleAr: 'توثيق عقد العمل الموحد وتفعيل بطاقة العمل',
        descEn: 'Issuing the final 2-year Labour Card and registering the employee in the company’s WPS payroll.',
        descAr: 'إصدار بطاقة وعقد العمل المصدق لمدة سنتين وإدراج الموظف في نظام حماية الأجور (WPS) للشركة.',
        durationEn: 'Same Day',
        durationAr: 'في نفس اليوم',
      },
    ],
    faqs: [
      {
        questionEn: 'If I get a MoHRE Work Permit while on my husband’s visa, will my husband’s family visa be cancelled?',
        questionAr: 'إذا استخرجت تصريح عمل من تسهيل وأنا على كفالة زوجي، هل تُلغى إقامتي العائلية؟',
        answerEn: 'No! Your family residency visa sponsored by your husband remains 100% untouched. MoHRE simply issues a 2-year Labour Card and Unified Employment Contract linked to your existing Emirates ID, allowing you to work legally and receive WPS salary transfers.',
        answerAr: 'لا إطلاقاً! تبقى إقامتك العائلية على كفالة زوجك سارية كما هي تماماً دون أي تغيير، وتقوم وزارة الموارد البشرية فقط بإصدار "بطاقة وعقد عمل" لمدة سنتين مرتبطين بهويتك الحالية ليكون عملك قانونياً 100%.',
      },
      {
        questionEn: 'Can a male dependent (husband or son) also get a Family Sponsorship Work Permit?',
        questionAr: 'هل يمكن للذكور المكفولين على ذويهم (الزوج على كفالة زوجته أو الابن على كفالة والده) استخراج تصريح عمل؟',
        answerEn: 'Yes! Under UAE Labour Law, both male and female family-sponsored residents (husbands sponsored by their wives, wives sponsored by their husbands, and sons/daughters on family sponsorship) are eligible for a MoHRE Family Sponsorship Work Permit.',
        answerAr: 'نعم! بموجب قانون العمل الإماراتي، يحق للذكور والإناث المقيمين على كفالة ذويهم (سواء الزوجة على كفالة زوجها، أو الزوج على كفالة زوجته، أو الأبناء على كفالة ذويهم) استخراج تصريح عمل رسمي من وزارة الموارد البشرية.',
      },
    ],
    reviews: [
      {
        name: 'Mariam Al-Hammadi',
        roleEn: 'HR Manager',
        roleAr: 'مديرة الموارد البشرية',
        companyEn: 'Bright Minds Early Learning Center',
        companyAr: 'مركز العقول المشرقة للتعليم المبكر',
        rating: 5,
        date: 'October 2026',
        commentEn: 'We hire many teachers who are on their husbands’ sponsorship. KBC Tasheel processes their 2-year MoHRE work permits in 24 hours for a fraction of the cost of a full visa.',
        commentAr: 'نوظف العديد من المعلمات المقيمات على كفالة أزواجهن. ينجز قسم تسهيل في مركز الكرامة للأعمال تصاريح عملهن لمدة سنتين خلال 24 ساعة وبتكلفة حكومية رمزية جداً.',
      },
    ],
    targetKeywords: {
      shortTail: ['work permit on husband visa', 'family sponsorship work permit uae', 'noc for wife to work in dubai', 'labour card on father visa', 'tasheel family noc'],
      longTail: ['mohre work permit fees for wife on husband visa 2026', 'how to get labour card on spouse visa in dubai', 'noc letter format from husband to work in uae arabic', 'can i work in dubai on family residence visa'],
    },
  },

  // =========================================================================
  // 10. WORK PERMIT CANCELLATION, LABOUR CLAIMS & ABSCONDING
  // =========================================================================
  'tasheel-labour-cancellation-absconding': {
    detailedOverviewEn: `Properly terminating an employment contract and executing an official **MoHRE Work Permit & Labour Card Cancellation (إلغاء تصريح وبطاقة العمل)** is mandatory whenever an employee resigns, completes their contract, or transfers to a new UAE employer. Until the MoHRE Labour Card is cancelled, the employee continues to appear on the company's Wage Protection System (WPS) payroll roster—triggering automatic company file blocks if salaries are not transferred—and the employee cannot have their GDRFA Residency Visa cancelled or transferred.

At Karama Business Center (KBC), our integrated Tasheel and Amer desks execute the complete end-of-service workflow in a single 30-minute session:
1. **Tasheel Labour Card Cancellation**: Typing the bilingual End-of-Service Entitlement & Final Settlement Receipt, capturing the employee's signature confirming receipt of all gratuity and leave dues, authenticating via the employer's E-Signature card, and cancelling the MoHRE Work Permit immediately.
2. **Amer Residency Visa Cancellation**: Walking 10 steps to our Amer desk to cancel the GDRFA Residency Visa and generate the 30-to-60-day grace period paper for job transfer or departure.
3. **Unilateral Cancellation, Absconding & Labour Dispute Petitions**: Assisting employers when an employee is outside the UAE for more than 6 months, has absconded (انقطاع عن العمل), or refuses to sign cancellation papers, as well as helping employees register legitimate unpaid wage/cancellation complaints with MoHRE.`,
    detailedOverviewAr: `يُعد **إلغاء تصريح وبطاقة العمل لدى وزارة الموارد البشرية والتوطين (تسهيل)** إجراءً قانونياً إلزامياً عند انتهاء علاقة العمل بالاستقالة أو انتهاء العقد أو انتقال الموظف إلى شركة جديدة؛ إذ يبقى الموظف مدرجاً في كشف رواتب نظام حماية الأجور (WPS) للشركة لحين إلغاء بطاقة عمله رسمياً، كما لا يمكن إلغاء تأشيرة إقامته لدى إقامة دبي (آمر) إلا بعد إتمام إلغاء بطاقة العمل في "تسهيل".

ينفرد مركز الكرامة للأعمال (KBC) بإنجاز معاملة الإلغاء الكاملة (عمل + إقامة) في زيارة واحدة خلال 30 دقيقة بفضل تجاور قسمي تسهيل وآمر:
1. **إلغاء تصريح العمل في تسهيل**: طباعة نموذج مخالصة مستحقات نهاية الخدمة والإلغاء، توقيع العامل باستلام كافة مستحقاته، واعتماد الطلب ببطاقة التوقيع الإلكتروني لصاحب العمل لإلغاء بطاقة العمل فوراً.
2. **إلغاء الإقامة في آمر**: الانتقال مباشرة إلى كاونتر "آمر" المجاور لإلغاء تأشيرة الإقامة وإصدار ورقة الإلغاء بفترة السماح القانونية لنقل الكفالة أو المغادرة.
3. **إلغاء تصاريح العمل لمن هم خارج الدولة وبلاغات الانقطاع والشكاوى**: إنجاز إلغاء بطاقات العمل للموظفين المتواجدين خارج الدولة لأكثر من 6 أشهر، وتسوية بلاغات الانقطاع عن العمل، وتقديم الطلبات العمالية الرسمية.`,
    legalFrameworkEn: `UAE Federal Decree-Law No. 33 of 2021 (Articles 42–54 on Contract Termination, Notice Periods, End-of-Service Gratuity, and Absconding) and MoHRE Cancellation Directives.`,
    legalFrameworkAr: `المرسوم بقانون اتحادي رقم (33) لسنة 2021 بشأن تنظيم علاقات العمل (المواد 42 إلى 54 المنظمة لإنهاء العقد ومكافأة نهاية الخدمة والانقطاع عن العمل) ولوائح إلغاء تصاريح العمل.`,
    eligibilityEn: [
      'Original Emirates ID of the employer/authorized signatory (E-Signature Card)',
      'Passport and Emirates ID copy of the employee',
      'Signed End-of-Service Final Settlement & Cancellation Form (signed by the employee if inside the UAE)',
      'No signature required from employee if cancelling an expired visa where the employee has remained outside the UAE for 6+ months',
    ],
    eligibilityAr: [
      'بطاقة التوقيع الإلكتروني والهوية الأصلية لصاحب العمل أو المخول بالتوقيع',
      'صورة جواز السفر والهوية الإماراتية للموظف',
      'توقيع الموظف على إقرار استلام المستحقات وطلب إلغاء تصريح العمل (في حال تواجده داخل الدولة)',
      'لا يُشترط توقيع الموظف في حال الإلغاء لمن هم خارج الدولة لأكثر من 6 أشهر أو انتهاء الإقامة بالخارج',
    ],
    galleryImages: TASHEEL_GALLERY,
    processSteps: [
      {
        stepNumber: 1,
        titleEn: 'End-of-Service Settlement & Cancellation Typing',
        titleAr: 'طباعة طلب إلغاء تصريح العمل وإقرار المستحقات',
        descEn: 'Preparing the official MoHRE cancellation form and capturing employee signature / thumbprint and employer E-Signature.',
        descAr: 'طباعة نموذج إلغاء تصريح العمل وتوقيع العامل باستلام مستحقاته واعتماد بطاقة التوقيع الإلكتروني لصاحب العمل.',
        durationEn: '15 Mins',
        durationAr: '15 دقيقة',
      },
      {
        stepNumber: 2,
        titleEn: 'Instant MoHRE Labour Card Cancellation & Quota Release',
        titleAr: 'الإلغاء الفوري لبطاقة العمل وتحرير الكوتا',
        descEn: 'Submitting the cancellation to MoHRE (Zero government fee for standard cancellation) and removing the staff member from WPS.',
        descAr: 'اعتماد الإلغاء إلكترونياً في نظام الوزارة (مجاناً بدون رسوم حكومية للإلغاء العادي) وإخراج الموظف من كشف حماية الأجور.',
        durationEn: '10 Mins',
        durationAr: '10 دقائق',
      },
      {
        stepNumber: 3,
        titleEn: 'Direct Amer Residency Cancellation & Grace Period Issuance',
        titleAr: 'إلغاء تأشيرة الإقامة فوراً لدى قسم آمر المجاور',
        descEn: 'Completing the GDRFA residency visa cancellation at our Karama Amer desk and issuing the official cancellation certificate.',
        descAr: 'إتمام إلغاء الإقامة في قسم آمر بنفس الصالة وتسليم شهادة الإلغاء الرسمية موضحاً بها فترة السماح.',
        durationEn: '15 Mins',
        durationAr: '15 دقيقة',
      },
    ],
    faqs: [
      {
        questionEn: 'How much is the government fee for cancelling a MoHRE Work Permit / Labour Card?',
        questionAr: 'كم تبلغ الرسوم الحكومية لإلغاء تصريح وبطاقة العمل في تسهيل؟',
        answerEn: 'Standard MoHRE Work Permit / Labour Card cancellation has ZERO (AED 0) ministry government fee! You only pay the authorized Tasheel typing center service fee (AED 83–100) plus the GDRFA Amer residency visa cancellation fee.',
        answerAr: 'الإلغاء العادي لتصريح وبطاقة العمل معفى تماماً من الرسوم الحكومية الوزارية (0 درهم رسوم وزارة)! ويتم فقط سداد رسوم خدمة الطباعة في مركز تسهيل، تليها رسوم إلغاء الإقامة في قسم آمر.',
      },
      {
        questionEn: 'How can a company cancel the Labour Card of an employee who left the UAE and never returned?',
        questionAr: 'كيف يمكن للشركة إلغاء بطاقة عمل موظف سافر خارج الإمارات ولم يعد؟',
        answerEn: 'If the employee has been outside the UAE for more than 6 consecutive months (or their residency visa expired while abroad), our Tasheel and Amer desks process an "Outside Country Cancellation" using only the employer’s E-Signature Card—no employee signature is required.',
        answerAr: 'إذا مكث الموظف خارج دولة الإمارات لأكثر من 6 أشهر متواصلة (أو انتهت إقامته وهو بالخارج)، يقوم قسم تسهيل وآمر لدينا بإنجاز معاملة "إلغاء خارج الدولة" باستخدام بطاقة التوقيع الإلكتروني لصاحب العمل فقط دون الحاجة لتوقيع الموظف.',
      },
    ],
    reviews: [
      {
        name: 'Rami Al-Khoury',
        roleEn: 'PRO & Government Relations Officer',
        roleAr: 'مسؤول العلاقات الحكومية',
        companyEn: 'Delta Construction & Engineering LLC',
        companyAr: 'دلتا للإنشاءات والهندسة ذ.م.م',
        rating: 5,
        date: 'October 2026',
        commentEn: 'Cancelled 4 resigning staff members’ Tasheel labour cards and Amer residency visas in 35 minutes flat at Karama Business Center.',
        commentAr: 'أنهينا إلغاء بطاقات عمل تسهيل وإقامات آمر لـ 4 موظفين مستقيلين خلال 35 دقيقة فقط في مركز الكرامة للأعمال.',
      },
    ],
    targetKeywords: {
      shortTail: ['work permit cancellation uae', 'labour card cancellation dubai', 'tasheel visa cancellation', 'absconding removal mohre', 'cancel employee outside uae'],
      longTail: ['how to cancel mohre labour card online dubai', 'cancel work permit when employee is outside uae for 6 months', 'mohre labour complaint and absconding withdrawal tasheel', 'end of service gratuity cancellation paper uae'],
    },
  },
};
