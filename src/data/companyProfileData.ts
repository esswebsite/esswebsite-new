import haniEbrahimImg from '../assets/images/hani ebrahim.jpg';
import boardDirectorsImg from '../assets/images/board_directors_uae_1792409907621.jpg';
import eventsCelebrationImg from '../assets/images/company_events_celebration_1792409881284.jpg';
import ihabBashirImg from '../assets/images/IHAB.png';
import mohammedEissaImg from '../assets/images/EISSA.png';
import hussainSarmadImg from '../assets/images/HUSSAIN.png';
import abbaOumarImg from '../assets/images/ABBA.png';
import abdulazizFatehImg from '../assets/images/AZIZ.png';
import sameerAliImg from '../assets/images/SAMEER.png';
import aseelAbdoImg from '../assets/images/ASEEL.png';
import azzaAlaaImg from '../assets/images/AZZA.png';
import adeelZiaImg from '../assets/images/ADEEL.png';
import saeedAnwarImg from '../assets/images/SAEED.png';

export interface BoardDirector {
  id: string;
  nameEn: string;
  nameAr: string;
  roleEn: string;
  roleAr: string;
  bioEn: string;
  bioAr: string;
  image: string;
  badgeEn?: string;
  badgeAr?: string;
}

export interface TeamMember {
  id: string;
  nameEn: string;
  nameAr: string;
  designationEn: string;
  designationAr: string;
  departmentId: string;
  departmentNameEn: string;
  departmentNameAr: string;
  experienceYears: number;
  languages: string[];
  specialtyEn: string;
  specialtyAr: string;
  testimonialMention?: string;
  image?: string;
}

export interface ClientPartner {
  id: string;
  name: string;
  nameAr: string;
  sector: 'Hospitality' | 'Healthcare' | 'Banking & Finance' | 'Tech & E-Commerce' | 'Retail & Conglomerates' | 'Automotive & Government';
  sectorAr: string;
  taglineEn: string;
  taglineAr: string;
  featuredQuoteEn?: string;
  featuredQuoteAr?: string;
  servicesProvidedEn: string[];
  servicesProvidedAr: string[];
  logoText: string;
  brandColor: string;
  logoUrl?: string;
}

export interface AwardItem {
  id: string;
  titleEn: string;
  titleAr: string;
  authorityEn: string;
  authorityAr: string;
  year: string;
  categoryEn: string;
  categoryAr: string;
  descriptionEn: string;
  descriptionAr: string;
  scopeEn: string;
  scopeAr: string;
  verificationId: string;
  badgeText: string;
}

export interface CompanyEvent {
  id: string;
  titleEn: string;
  titleAr: string;
  category: 'National' | 'Corporate' | 'Cultural' | 'Community';
  categoryAr: string;
  date: string;
  locationEn: string;
  locationAr: string;
  descriptionEn: string;
  descriptionAr: string;
  highlightEn: string;
  highlightAr: string;
  attendees: string;
  image: string;
  galleryTags: string[];
}

// -------------------------------------------------------------
// 1. ROYAL & MANAGING DIRECTOR MESSAGES (Pages 4 & 5)
// -------------------------------------------------------------
export const ROYAL_MESSAGE = {
  quoteEn:
    'Do not underestimate your thoughts, because your energy, determination, success, and even health, are directly related to positive thoughts.',
  quoteAr:
    'لا تستصغر أفكارك، فطاقتك وعزيمتك ونجاحك وحتى صحتك مرتبطة ارتباطاً مباشراً بالأفكار الإيجابية.',
  authorEn: 'His Highness Sheikh Mohammed bin Rashid Al Maktoum',
  authorAr: 'صاحب السمو الشيخ محمد بن راشد آل مكتوم',
  titleEn: 'Vice President and Prime Minister of the UAE and Ruler of Dubai',
  titleAr: 'نائب رئيس الدولة رئيس مجلس الوزراء حاكم دبي',
};

export const MANAGING_DIRECTOR_INFO = {
  nameEn: 'Mr. Hani Ebrahim Hasan Mohammed',
  nameAr: 'السيد / هاني إبراهيم حسن محمد',
  roleEn: 'CEO & Managing Director',
  roleAr: 'الرئيس التنفيذي والمدير العام',
  companyEn: 'Emirates Secretarial Services & Karama Business Center',
  companyAr: 'الإمارات لخدمات رجال الأعمال ومركز الكرامة للأعمال',
  image: haniEbrahimImg,
  messageEn:
    'At Karama Business Center and Karama Medical Fitness Center (KMFC), we believe in delivering exceptional service and creating a hassle-free experience for our valued clients. Our vision is to be the preferred choice for all government and business-related transactions by offering unparalleled convenience, expertise, and efficiency.\n\nI am proud to lead a team of professionals who are passionate about serving our community and contributing to the growth and success of Dubai. We continuously strive to innovate and improve our services to meet the evolving needs of our clients.\n\nThank you for choosing Karama Business Center & KMFC. We look forward to serving you and being your trusted partner in achieving your goals.',
  messageAr:
    'في مركز الكرامة للياقة الطبية ومركز الكرامة للأعمال، نؤمن بتقديم أرقى مستويات الخدمة الاستثنائية وإيجاد تجربة مريحة وسلسة وخالية من العناء لمتعاملينا الكرام. تتمثل رؤيتنا في أن نكون الوجهة الأولى المفضلة لكافة المعاملات الحكومية وتأسيس الأعمال من خلال توفير راحة لا تضاهى، وخبرة عميقة، وسرعة قياسية.\n\nوإنني فخور بقيادة نخبة من الكفاءات المهنية الشغوفة بخدمة مجتمعنا والمساهمة الفاعلة في مسيرة النمو والازدهار لإمارة دبي. وسنواصل سعينا الدائم نحو الابتكار والتطوير المستمر لمواكبة تطلعات واحتياجات متعاملينا المتجددة.\n\nشكراً لثقتكم واختياركم مركز الكرامة. ونتطلع دوماً لنكون شريككم الموثوق في تحقيق طموحاتكم وأهدافكم.',
  bioEn:
    'Mr. Hani Ebrahim Hasan Mohammed is a visionary Emirati business leader with over two decades of executive experience in sovereign government transaction facilitation, healthcare operational excellence, and enterprise corporate structuring. Since founding the center in 2013, he has steered Karama Business Center and Emirates Secretarial Services to become one of Dubai’s benchmark One-Stop Government Hubs, recognized for integrating Amer, Tasheel, Salem Medical Fitness, Dubai Courts, and Dubai Economy & Tourism under a unified standard of 5-star customer happiness.',
  bioAr:
    'يعد السيد هاني إبراهيم حسن محمد من القيادات الإماراتية المتميزة التي تمتلك خبرة قيادية تمتد لأكثر من عقدين في تسهيل المعاملات الحكومية السيادية، والتميز التشغيلي الطبي، وتأسيس الشركات الاستثمارية. منذ تأسيس المركز في عام 2013، قاد مركز الكرامة للأعمال والإمارات لخدمات رجال الأعمال ليكون أحد أبرز المجمعات الحكومية الشاملة في دبي، المعتمد رسمياً لجمع خدمات آمر، وتسهيل، ولياقة سالم الطبية، ومحاكم دبي، واقتصادية دبي تحت منظومة موحدة بمعايير السعادة 5 نجوم.',
  keyPillars: [
    { titleEn: '2013 - 2026 Leadership', titleAr: 'قيادة رائدة منذ 2013', descEn: 'Over 13 years of institutional growth and ministerial partnerships', descAr: 'أكثر من 13 عاماً من التطور المؤسسي والشراكات الوزارية المعتمدة' },
    { titleEn: 'One-Stop Philosophy', titleAr: 'فلسفة المحطة الواحدة', descEn: 'Unifying 14 government departments under one single roof in Al Karama', descAr: 'توحيد 14 دائرة ووزارة حكومية تحت سقف واحد في الكرامة' },
    { titleEn: '5-Star Happiness Standard', titleAr: 'معيار السعادة 5 نجوم', descEn: 'Delivering zero-queue VIP Majlis and doorstep mobile government units', descAr: 'تقديم مجلس كبار الشخصيات الفاخر وحافلة المعاملات المتنقلة' },
  ]
};

// -------------------------------------------------------------
// 2. BOARD OF DIRECTORS (Page 11)
// -------------------------------------------------------------
export const BOARD_OF_DIRECTORS: BoardDirector[] = [
  {
    id: 'sheikh-obaid-al-maktoum',
    nameEn: 'Sheikh Obaid Bin Majid Bin Obaid Al Maktoum',
    nameAr: 'الشيخ عبيد بن ماجد بن عبيد آل مكتوم',
    roleEn: 'Honorary Chairman of the Board',
    roleAr: 'رئيس مجلس الإدارة الفخري',
    bioEn:
      'Distinguished patron and sovereign advisor providing strategic governance, national alignment, and sovereign vision to ensure Emirates Secretarial Services upholds the highest civic standards of Dubai leadership.',
    bioAr:
      'شخصية قيادية ملهمة ومستشار استراتيجي يشرف على الحوكمة المؤسسية وتوجيه الرؤية الوطنية لضمان مواكبة المركز لأعلى معايير القيادة الرشيدة في إمارة دبي.',
    image: boardDirectorsImg,
    badgeEn: 'Royal Patronage & Governance',
    badgeAr: 'رعاية وحوكمة استراتيجية',
  },
  {
    id: 'hani-ebrahim-hasan',
    nameEn: 'Mr. Hani Ebrahim Hasan Mohammed',
    nameAr: 'السيد / هاني إبراهيم حسن محمد',
    roleEn: 'Managing Director & Chief Executive Officer',
    roleAr: 'المدير العام والرئيس التنفيذي',
    bioEn:
      'Founding director overseeing daily ministerial relations, strategic service expansion, digital transformation, and the executive quality protocols of Al Karama Business Center.',
    bioAr:
      'المدير المؤسس الذي يقود العمليات اليومية، والعلاقات الحكومية الوزارية، والتوسع الرقمي، وضمان تطبيق أعلى بروتوكولات الجودة التنفيذية بمركز الكرامة.',
    image: haniEbrahimImg,
    badgeEn: 'Executive Leadership & Strategy',
    badgeAr: 'القيادة التنفيذية والاستراتيجية',
  },
  {
    id: 'abdulla-saeed-belhabb',
    nameEn: 'Mr. Abdulla Saeed Abdulla Belhabb',
    nameAr: 'السيد / عبد الله سعيد عبد الله بالهاب',
    roleEn: 'Executive Board Member & Corporate Affairs Partner',
    roleAr: 'عضو مجلس الإدارة وشريك الشؤون المؤسسية',
    bioEn:
      'Veteran corporate diplomat and stakeholder representative ensuring robust institutional alliances with federal ministries, Dubai economic bodies, and Fortune 500 corporate clients.',
    bioAr:
      'قيادي مؤسسي خبير يشرف على توطيد التحالفات مع الوزارات الاتحادية، والدوائر الاقتصادية بدبي، وكبرى المجموعات والشركات العالمية متعددة الجنسيات.',
    image: boardDirectorsImg,
    badgeEn: 'Institutional & Ministerial Alliances',
    badgeAr: 'التحالفات والشؤون المؤسسية',
  },
];

// -------------------------------------------------------------
// 3. CORE VALUES (Page 12)
// -------------------------------------------------------------
export const CORE_VALUES = [
  {
    id: 'teamwork',
    nameEn: 'Teamwork',
    nameAr: 'العمل الجماعي',
    descEn: 'We believe in the power of collaboration and value the contributions of our experienced team in achieving our goals.',
    descAr: 'نؤمن بقوة التعاون ونقدر مساهمات فريق عملنا المتمرس في تحقيق أهدافنا ورسالتنا المشتركة.',
    icon: 'Users',
  },
  {
    id: 'integrity',
    nameEn: 'Integrity',
    nameAr: 'النزاهة والشفافية',
    descEn: 'We uphold the highest standards of honesty, transparency, and ethical conduct in all our operations.',
    descAr: 'نلتزم بأعلى معايير الصدق والشفافية والنزاهة المهنية والأخلاقية في كافة تعاملاتنا وإجراءاتنا.',
    icon: 'ShieldCheck',
  },
  {
    id: 'customer-centricity',
    nameEn: 'Customer-Centricity',
    nameAr: 'التركيز على المتعاملين',
    descEn: 'We prioritize our clients’ needs and ensure their satisfaction through personalized and efficient service.',
    descAr: 'نضع راحة واحتياجات متعاملينا في مقدمة أولوياتنا، ونضمن رضاهم التام عبر خدمات مخصصة وفورية.',
    icon: 'HeartHandshake',
  },
  {
    id: 'excellence',
    nameEn: 'Excellence',
    nameAr: 'التميز والجودة',
    descEn: 'We are committed to delivering top-quality services with precision and professionalism.',
    descAr: 'ملتزمون بتقديم أرقى الخدمات الحكومية بأعلى مستويات الدقة والاحترافية والمعايير العالمية.',
    icon: 'Award',
  },
  {
    id: 'innovation',
    nameEn: 'Innovation',
    nameAr: 'الابتكار والتطوير',
    descEn: 'We continuously seek innovative solutions to enhance our services and improve the customer experience.',
    descAr: 'نبتكر باستمرار حلولاً ذكية وتقنيات متطورة لترقية خدماتنا وإثراء تجربة المتعامل في كل خطوة.',
    icon: 'Sparkles',
  },
];

// -------------------------------------------------------------
// 4. TEAM MEMBERS & OFFICERS (Department Heads & Senior Specialists)
// -------------------------------------------------------------
export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'hani-ebrahim',
    nameEn: 'Hani Ebrahim',
    nameAr: 'السيد / هاني إبراهيم',
    designationEn: 'CEO / Managing Director',
    designationAr: 'الرئيس التنفيذي والمدير العام',
    departmentId: 'management',
    departmentNameEn: 'Executive Leadership & Directorship',
    departmentNameAr: 'القيادة التنفيذية والإدارة العليا',
    experienceYears: 20,
    languages: ['Arabic', 'English'],
    specialtyEn: 'Strategic Ministerial Directives, One-Stop Center Vision, 5-Star Sovereign Governance',
    specialtyAr: 'التوجيه الاستراتيجي الحكومي، رؤية المجمع الشامل، والحوكمة المؤسسية 5 نجوم',
    image: haniEbrahimImg,
  },
  {
    id: 'ihab-k-a-bashir',
    nameEn: 'Ihab K A Bashir',
    nameAr: 'إيهاب ك. أ. بشير',
    designationEn: 'Asst.General Manager',
    designationAr: 'مساعد المدير العام',
    departmentId: 'management',
    departmentNameEn: 'General Management & Executive Affairs',
    departmentNameAr: 'الإدارة العامة والشؤون التنفيذية',
    experienceYears: 14,
    languages: ['Arabic', 'English'],
    specialtyEn: 'Executive Center Oversight, 10-Year Golden Visa Portfolios, Strategic Client Relations',
    specialtyAr: 'الإشراف التنفيذي العام، ملفات الإقامة الذهبية 10 سنوات، وإدارة كبار العملاء',
    testimonialMention: 'Special Thanks to Mr @Ihab in the GOLDEN VISA Section who processed our Application very smoothly and Speedy.',
    image: ihabBashirImg,
  },
  {
    id: 'mohammed-eissa',
    nameEn: 'Mohammed Eissa',
    nameAr: 'محمد عيسى',
    designationEn: 'Operation Manager',
    designationAr: 'مدير العمليات',
    departmentId: 'operations',
    departmentNameEn: 'Center Operations & Quality Assurance',
    departmentNameAr: 'إدارة العمليات وضمان الجودة الميدانية',
    experienceYears: 12,
    languages: ['Arabic', 'English'],
    specialtyEn: 'Counter Flow Velocity, Daily SLA Governance, Service Delivery Standards & Queue Optimization',
    specialtyAr: 'سرعة تدفق المعاملات، حوكمة مؤشرات الأداء SLA، ومعايير الخدمة الذكية',
    image: mohammedEissaImg,
  },
  {
    id: 'hussain-sarmad',
    nameEn: 'Hussain Sarmad',
    nameAr: 'حسين سرمد',
    designationEn: 'Finance Manager',
    designationAr: 'المدير المالي',
    departmentId: 'corporate',
    departmentNameEn: 'Finance & Corporate Accounts',
    departmentNameAr: 'الإدارة المالية والحسابات الحكومية',
    experienceYears: 11,
    languages: ['English', 'Urdu', 'Hindi', 'Arabic'],
    specialtyEn: 'Government Escrow Management, Ministerial Fee Settlement, Corporate Invoicing & Audits',
    specialtyAr: 'إدارة حسابات الضمان الحكومية، التسويات الوزارية، والفوترة المؤسسية والتدقيق',
    image: hussainSarmadImg,
  },
  {
    id: 'abba-oumar',
    nameEn: 'Abba Oumar',
    nameAr: 'أبا عمر',
    designationEn: 'Manager of Sales, Marketing, and Customer Relations',
    designationAr: 'مدير المبيعات والتسويق وعلاقات المتعاملين',
    departmentId: 'sales',
    departmentNameEn: 'Sales, Marketing & Customer Relations',
    departmentNameAr: 'المبيعات والتسويق وسعادة المتعاملين',
    experienceYears: 10,
    languages: ['Arabic', 'English', 'French'],
    specialtyEn: 'Enterprise Corporate Client Accounts, Strategic B2B Partnerships, Client Retention & Happiness',
    specialtyAr: 'إدارة حسابات الشركات الكبرى، الشراكات المؤسسية، واستراتيجيات سعادة المتعاملين',
    image: abbaOumarImg,
  },
  {
    id: 'abdulaziz-fateh',
    nameEn: 'Abdulaziz Fateh Muhammad',
    nameAr: 'عبد العزيز فاتح محمد',
    designationEn: 'IT Manager',
    designationAr: 'مدير تقنية المعلومات',
    departmentId: 'corporate',
    departmentNameEn: 'Information Technology & Systems',
    departmentNameAr: 'تقنية المعلومات والأنظمة الرقمية',
    experienceYears: 10,
    languages: ['English', 'Urdu', 'Arabic'],
    specialtyEn: 'Sovereign API Gateways, Secure Cloud Infrastructure, Smart Queue Desks & Cyber Security',
    specialtyAr: 'بوابات الربط الحكومي الآمن، البنية السحابية، وأنظمة الطوابير الذكية والأمن السيبراني',
    image: abdulazizFatehImg,
  },
  {
    id: 'sameer-ali',
    nameEn: 'Sameer Ali',
    nameAr: 'سمير علي',
    designationEn: 'Head of DET, DUBAI COURT, TASHEEL',
    designationAr: 'رئيس قسم اقتصادية دبي ومحاكم دبي وتسهيل',
    departmentId: 'det-tasheel',
    departmentNameEn: 'DET, Dubai Courts & Tasheel Division',
    departmentNameAr: 'قسم دائرة الاقتصاد ومحاكم دبي وتسهيل',
    experienceYears: 13,
    languages: ['Arabic', 'English', 'Urdu'],
    specialtyEn: 'Mainland LLC Licenses, Commercial Amendments, MoHRE Labour Quotas & Judicial Attestation',
    specialtyAr: 'تراخيص الشركات التجارية، تعديل العقود، حصص كوتا العمل، والتوثيق القضائي',
    image: sameerAliImg,
  },
  {
    id: 'aseel-abdo',
    nameEn: 'Aseel Abdo',
    nameAr: 'أصيل عبده',
    designationEn: 'Head of DHA Department',
    designationAr: 'رئيس قسم هيئة الصحة بدبي (DHA)',
    departmentId: 'salem',
    departmentNameEn: 'Dubai Health (DHA) & Salem Medical Center',
    departmentNameAr: 'هيئة الصحة بدبي (DHA) ومركز سالم للياقة الطبية',
    experienceYears: 12,
    languages: ['Arabic', 'English'],
    specialtyEn: 'Salem Express Medical Screening, Occupational Health Cards (OHC), VIP Fast-Track DHA Testing',
    specialtyAr: 'فحوصات اللياقة الطبية السريعة، بطاقات الصحة المهنية، ومسار كبار الشخصيات السريع',
    image: aseelAbdoImg,
  },
  {
    id: 'azza-alaa',
    nameEn: 'Azza Alaa',
    nameAr: 'عزة علاء',
    designationEn: 'Amer Karama Branch Supervisor',
    designationAr: 'مشرفة فرع آمر الكرامة',
    departmentId: 'amer',
    departmentNameEn: 'Amer (GDRFA Dubai) Immigration Hub',
    departmentNameAr: 'مركز آمر (إقامة دبي) وشؤون الأجانب',
    experienceYears: 9,
    languages: ['Arabic', 'English'],
    specialtyEn: 'GDRFA Residence Visas, Family Sponsorships, Golden Visa Endorsement, Status Modifications',
    specialtyAr: 'إقامات إقامة دبي، كفالة الأسرة والمساعدين، تدقيق الإقامة الذهبية، وتعديل الوضع',
    image: azzaAlaaImg,
  },
  {
    id: 'adeel-zia',
    nameEn: 'Adeel Zia',
    nameAr: 'عديل ضياء',
    designationEn: 'Head of Typing Department',
    designationAr: 'رئيس قسم الطباعة الحكومية',
    departmentId: 'typing',
    departmentNameEn: 'Government Typing & Digital Submissions',
    departmentNameAr: 'قسم الطباعة الحكومية والمعاملات الرقمية',
    experienceYears: 11,
    languages: ['English', 'Urdu', 'Hindi', 'Arabic'],
    specialtyEn: 'All-Ministry Document Drafting, ICP Electronic Applications, Instant Form Clearance',
    specialtyAr: 'صياغة الاستمارات الحكومية لكافة الدوائر، طلبات الهيئة الاتحادية ICP، والتدقيق الفوري',
    testimonialMention: 'Customer service was outstanding, typing was handled accurately and submitted immediately without delays.',
    image: adeelZiaImg,
  },
  {
    id: 'saeed-anwar',
    nameEn: 'Saeed Anwar',
    nameAr: 'سعيد أنور',
    designationEn: 'Head of HR Department',
    designationAr: 'رئيس قسم الموارد البشرية',
    departmentId: 'corporate',
    departmentNameEn: 'Human Resources & Talent Development',
    departmentNameAr: 'الموارد البشرية وتطوير الكفاءات',
    experienceYears: 9,
    languages: ['English', 'Urdu', 'Hindi', 'Arabic'],
    specialtyEn: 'PRO Team Upskilling, UAE Labour Law Compliance, Emiratisation Initiatives & Staff Welfare',
    specialtyAr: 'تطوير كفاءات مندوبي العلاقات، الامتثال لقانون العمل الإماراتي، مبادرات التوطين ورعاية الفريق',
    image: saeedAnwarImg,
  },
];

// -------------------------------------------------------------
// 5. OUR REGULAR CUSTOMERS (Page 23 - All 28 Enterprise Clients)
// -------------------------------------------------------------
export const REGULAR_CUSTOMERS: ClientPartner[] = [
  {
    id: 'marriott',
    name: 'Marriott International',
    nameAr: 'ماريوت الدولية',
    sector: 'Hospitality',
    sectorAr: 'الضيافة والفنادق',
    taglineEn: 'Global luxury hotel & resort chain',
    taglineAr: 'سلسلة فنادق ومنتجعات عالمية فاخرة',
    servicesProvidedEn: ['Bulk Staff Medical Fitness', 'Occupational Health Cards (OHC)', 'Residency Stamping'],
    servicesProvidedAr: ['الفحص الطبي المجمّع للموظفين', 'بطاقات الصحة المهنية', 'تثبيت الإقامات'],
    logoText: 'MARRIOTT',
    brandColor: '#B81D24',
  },
  {
    id: 'sheraton',
    name: 'Sheraton Hotels & Resorts',
    nameAr: 'فنادق ومنتجعات شيراتون',
    sector: 'Hospitality',
    sectorAr: 'الضيافة والفنادق',
    taglineEn: 'Iconic world-class hospitality brand',
    taglineAr: 'علامة فندقية عالمية رائدة',
    servicesProvidedEn: ['Hospitality Food Handler OHCs', 'Employment Entry Permits', 'Legal Translation'],
    servicesProvidedAr: ['بطاقات متداولي الأغذية', 'أذونات الدخول للعمل', 'ترجمة قانونية'],
    logoText: 'SHERATON',
    brandColor: '#1A365D',
  },
  {
    id: 'emaar',
    name: 'Emaar Properties',
    nameAr: 'إعمار العقارية',
    sector: 'Retail & Conglomerates',
    sectorAr: 'العقارات والشركات القابضة',
    taglineEn: 'Dubai’s premier real estate developer & master builder',
    taglineAr: 'المطور العقاري الرائد في دبي والشرق الأوسط',
    servicesProvidedEn: ['Golden Visa Investor Packages', 'Corporate Trade Licenses', 'Ejari Registration'],
    servicesProvidedAr: ['باقات الإقامة الذهبية للمستثمرين', 'الرخص التجارية للمنشآت', 'توثيق عقود إيجاري'],
    logoText: 'EMAAR',
    brandColor: '#C49A45',
  },
  {
    id: 'apple',
    name: 'Apple UAE',
    nameAr: 'أبل الإمارات',
    sector: 'Tech & E-Commerce',
    sectorAr: 'التكنولوجيا والتجارة الإلكترونية',
    taglineEn: 'Global technology innovation leader',
    taglineAr: 'الشركة الرائدة عالمياً في الابتكار التكنولوجي',
    servicesProvidedEn: ['Executive VIP Majlis Visa Processing', 'Work Permit Liaison', 'Legal Notarization'],
    servicesProvidedAr: ['معاملات مجلس VIP للتنفيذيين', 'تصاريح العمل للموظفين', 'التوثيق العدلي'],
    logoText: 'APPLE',
    brandColor: '#000000',
  },
  {
    id: 'emirates-nbd',
    name: 'Emirates NBD',
    nameAr: 'بنك الإمارات دبي الوطني',
    sector: 'Banking & Finance',
    sectorAr: 'البنوك والخدمات المالية',
    taglineEn: 'Leading banking group in the MENAT region',
    taglineAr: 'المجموعة المصرفية الرائدة في منطقة الشرق الأوسط',
    servicesProvidedEn: ['Corporate Attestations', 'Commercial Registration Updates', 'Emirates ID Priority'],
    servicesProvidedAr: ['تصديقات الشركات المعتمدة', 'تحديث السجلات التجارية', 'إصدار الهوية ذات الأولوية'],
    logoText: 'EMIRATES NBD',
    brandColor: '#002E6E',
  },
  {
    id: 'adcb',
    name: 'Abu Dhabi Commercial Bank (ADCB)',
    nameAr: 'بنك أبوظبي التجاري (ADCB)',
    sector: 'Banking & Finance',
    sectorAr: 'البنوك والخدمات المالية',
    taglineEn: 'Major full-service commercial banking provider',
    taglineAr: 'أحد أكبر البنوك التجارية المتكاملة بالدولة',
    servicesProvidedEn: ['Signatory E-Sign Cards', 'Corporate Establishment Clearances', 'Legal Translations'],
    servicesProvidedAr: ['بطاقات التوقيع الإلكتروني', 'تحديثات ملفات المنشأة', 'الترجمة القانونية المعتمدة'],
    logoText: 'ADCB',
    brandColor: '#D32F2F',
  },
  {
    id: 'dubai-islamic-bank',
    name: 'Dubai Islamic Bank (DIB)',
    nameAr: 'بنك دبي الإسلامي (DIB)',
    sector: 'Banking & Finance',
    sectorAr: 'البنوك والخدمات المالية',
    taglineEn: 'Pioneer of Islamic banking worldwide',
    taglineAr: 'أول بنك إسلامي في العالم والرائد في الصيرفة الإسلامية',
    servicesProvidedEn: ['Sharia Legal Board Attestations', 'Staff Residency Renewals', 'Establishment Card Updates'],
    servicesProvidedAr: ['تصديق قرارات الهيئة الشرعية', 'تجديد إقامات الكوادر', 'بطاقات المنشأة'],
    logoText: 'DIB',
    brandColor: '#006837',
  },
  {
    id: 'adib',
    name: 'Abu Dhabi Islamic Bank (ADIB)',
    nameAr: 'مصرف أبوظبي الإسلامي (ADIB)',
    sector: 'Banking & Finance',
    sectorAr: 'البنوك والخدمات المالية',
    taglineEn: 'Premier Islamic financial services institution',
    taglineAr: 'مؤسسة رائدة في تقديم الحلول المصرفية الإسلامية',
    servicesProvidedEn: ['Legal Document Translation', 'Corporate Visas', 'ICP Biometrics Coordination'],
    servicesProvidedAr: ['ترجمة المستندات القانونية', 'تأشيرات الشركات', 'تنسيق البصمة البيومترية'],
    logoText: 'ADIB',
    brandColor: '#003366',
  },
  {
    id: 'majid-al-futtaim',
    name: 'Majid Al Futtaim Group',
    nameAr: 'مجموعة ماجد الفطيم',
    sector: 'Retail & Conglomerates',
    sectorAr: 'البيع بالتجزئة والمراكز التجارية',
    taglineEn: 'Leading shopping mall, communities, retail & leisure pioneer',
    taglineAr: 'الرائد في مراكز التسوق والتجزئة والترفيه في الشرق الأوسط',
    servicesProvidedEn: ['Mall Kiosk DED Permits', 'Large-Scale Staff Quota', 'Promotional Sale Permits'],
    servicesProvidedAr: ['تصاريح أكشاك المراكز التجارية', 'كوتا عمالية موسعة', 'تصاريح التنزيلات والعروض'],
    logoText: 'MAJID AL FUTTAIM',
    brandColor: '#C8102E',
  },
  {
    id: 'carrefour',
    name: 'Carrefour UAE',
    nameAr: 'كارفور الإمارات',
    sector: 'Retail & Conglomerates',
    sectorAr: 'البيع بالتجزئة والسوبرماركت',
    taglineEn: 'Leading hypermarket and supermarket chain',
    taglineAr: 'أكبر سلسلة هايبرماركت وسوبرماركت',
    servicesProvidedEn: ['Food Handlers Occupational Health Cards (OHC)', 'Municipality Label Approvals', 'Labor Card Renewals'],
    servicesProvidedAr: ['بطاقات الصحة المهنية لمتداولي الأغذية', 'اعتمادات ملصقات البلدية', 'تجديد بطاقات العمل'],
    logoText: 'CARREFOUR',
    brandColor: '#004A97',
  },
  {
    id: 'vox-cinemas',
    name: 'VOX Cinemas',
    nameAr: 'فوكس سينما',
    sector: 'Retail & Conglomerates',
    sectorAr: 'الترفيه والسينما',
    taglineEn: 'Middle East’s most innovative cinema entertainment chain',
    taglineAr: 'سلسلة دور العرض والترفيه السينمائي الأكثر ابتكاراً',
    servicesProvidedEn: ['F&B Staff OHC Certifications', 'DET Entertainment Permits', 'Work Visas'],
    servicesProvidedAr: ['شهادات الصحة لكوادر الأغذية', 'تصاريح الفعاليات الترفيهية', 'تأشيرات العمل'],
    logoText: 'VOX',
    brandColor: '#E30613',
  },
  {
    id: 'talabat',
    name: 'Talabat UAE',
    nameAr: 'طلبات الإمارات',
    sector: 'Tech & E-Commerce',
    sectorAr: 'التكنولوجيا وتطبيقات التوصيل',
    taglineEn: 'Leading on-demand food & grocery delivery platform',
    taglineAr: 'المنصة الرائدة في توصيل طلبات الطعام والبقالة',
    servicesProvidedEn: ['RTA Driver Screenings', 'Food Safety OHCs', 'Rider Visa Processing'],
    servicesProvidedAr: ['فحوصات سائقي هيئة الطرق', 'بطاقات الصحة المهنية', 'تأشيرات أسطول التوصيل'],
    logoText: 'TALABAT',
    brandColor: '#FF5A00',
  },
  {
    id: 'noon',
    name: 'Noon.com',
    nameAr: 'نون (noon)',
    sector: 'Tech & E-Commerce',
    sectorAr: 'التجارة الإلكترونية واللوجستيات',
    taglineEn: 'The Middle East’s leading digital e-commerce ecosystem',
    taglineAr: 'منظومة التسوق والتجارة الرقمية الرائدة محلياً',
    servicesProvidedEn: ['Fulfillment Hub Labor Quota', 'Driver Permits', 'Corporate Visa Stamping'],
    servicesProvidedAr: ['كوتا عمالة مراكز الفرز واللوجستيات', 'تصاريح السائقين', 'تثبيت إقامات الكوادر'],
    logoText: 'NOON',
    brandColor: '#FEEE00',
  },
  {
    id: 'spinneys',
    name: 'Spinneys Dubai',
    nameAr: 'سبينس دبي',
    sector: 'Retail & Conglomerates',
    sectorAr: 'التجزئة والأغذية الفاخرة',
    taglineEn: 'Premium supermarket brand dedicated to quality food',
    taglineAr: 'سلسلة متاجر التجزئة الفاخرة المخصصة للأغذية الطازجة',
    servicesProvidedEn: ['Full Store OHC Testing', 'Product Registration on Montaji', 'Butcher & Chef Health Clearances'],
    servicesProvidedAr: ['فحوصات الصحة المهنية الشاملة', 'تسجيل المنتجات عبر منتجي', 'الفحوصات الطبية التخصصية'],
    logoText: 'SPINNEYS',
    brandColor: '#005A36',
  },
  {
    id: 'nestle',
    name: 'Nestlé Middle East',
    nameAr: 'نستله الشرق الأوسط',
    sector: 'Retail & Conglomerates',
    sectorAr: 'الصناعات الغذائية العالمية',
    taglineEn: 'World’s largest food and beverage company',
    taglineAr: 'أكبر شركة أغذية ومشروبات في العالم',
    servicesProvidedEn: ['Factory Staff Health Screenings', 'Commercial Trademark Registrations', 'MOFA Attestation'],
    servicesProvidedAr: ['فحوصات كوادر المصانع والمستودعات', 'تسجيل العلامات التجارية', 'تصديقات وزارة الخارجية'],
    logoText: 'NESTLÉ',
    brandColor: '#0072CE',
  },
  {
    id: 'nandos',
    name: "Nando's UAE",
    nameAr: 'ناندوز الإمارات',
    sector: 'Retail & Conglomerates',
    sectorAr: 'المطاعم والضيافة السريعة',
    taglineEn: 'Internationally loved flame-grilled PERi-PERi dining chain',
    taglineAr: 'سلسلة المطاعم العالمية الشهيرة بوجبات الدجاج المشوي',
    servicesProvidedEn: ['Restaurant Crew Food Handler Cards', 'MoHRE Unified Contracts', 'Express Medicals'],
    servicesProvidedAr: ['بطاقات متداولي الأغذية لفريق العمل', 'عقود العمل الإلكترونية', 'فحوصات الإقامة المستعجلة'],
    logoText: "NANDO'S",
    brandColor: '#121212',
  },
  {
    id: 'aster-dm-healthcare',
    name: 'Aster DM Healthcare',
    nameAr: 'أستر دي إم للرعاية الصحية',
    sector: 'Healthcare',
    sectorAr: 'المستشفيات والرعاية الصحية',
    taglineEn: 'One of the largest integrated healthcare conglomerates in GCC',
    taglineAr: 'إحدى أكبر مجموعات الرعاية الصحية المتكاملة في الخليج',
    servicesProvidedEn: ['Physician DHA License Coordination', 'Hospital Staff Visas', 'Medical Attestations'],
    servicesProvidedAr: ['تنسيق تراخيص الأطباء بهيئة الصحة', 'تأشيرات كوادر التمريض والمشافي', 'التصديقات الطبية'],
    logoText: 'ASTER',
    brandColor: '#00875A',
  },
  {
    id: 'medcare-hospital',
    name: 'Medcare Hospitals & Medical Centres',
    nameAr: 'مستشفيات ومراكز ميدكير الطبية',
    sector: 'Healthcare',
    sectorAr: 'المستشفيات والرعاية الصحية',
    taglineEn: 'Premium private healthcare network delivering exceptional clinical care',
    taglineAr: 'شبكة المشافي والمراكز الطبية الفاخرة بالدولة',
    servicesProvidedEn: ['Healthcare Worker OHCs (Category 18)', 'Nurse Credential Attestation', 'Express Residency'],
    servicesProvidedAr: ['بطاقات الكوادر الصحية (الفئة 18)', 'تصديق شهادات التمريض والأطباء', 'إقامات العمل الفورية'],
    logoText: 'MEDCARE',
    brandColor: '#1D4ED8',
  },
  {
    id: 'thumbay-hospital',
    name: 'Thumbay Hospital Dubai',
    nameAr: 'مستشفى ثومبي دبي',
    sector: 'Healthcare',
    sectorAr: 'المستشفيات والرعاية الصحية',
    taglineEn: 'Leading academic and multi-specialty healthcare institution',
    taglineAr: 'صرح طبي تعليمي وتخصصي متكامل بإمارة دبي',
    servicesProvidedEn: ['Clinical Staff Visa Clearances', 'DHA Verification Protocols', 'Consular Degree Attestation'],
    servicesProvidedAr: ['إجراءات إقامات الكوادر الطبية', 'مطابقة تراخيص هيئة الصحة', 'تصديق المؤهلات بالسفارات'],
    logoText: 'THUMBAY',
    brandColor: '#B91C1C',
  },
  {
    id: 'saudi-german-hospital',
    name: 'Saudi German Hospital Dubai',
    nameAr: 'المستشفى السعودي الألماني دبي',
    sector: 'Healthcare',
    sectorAr: 'المستشفيات والرعاية الصحية',
    taglineEn: 'Pioneering healthcare excellence across the Middle East',
    taglineAr: 'مجموعة المشافي الرائدة في الخدمات الطبية المتقدمة',
    servicesProvidedEn: ['International Doctor Visa Processing', 'Ministry of Justice Translations', 'Rapid Medical Renewals'],
    servicesProvidedAr: ['تأشيرات الاستشاريين والأطباء الزائرين', 'الترجمة المعتمدة لوزارة العدل', 'تجديد الإقامات السريع'],
    logoText: 'SAUDI GERMAN',
    brandColor: '#047857',
  },
  {
    id: 'iranian-hospital',
    name: 'Iranian Hospital Dubai',
    nameAr: 'المستشفى الإيراني دبي',
    sector: 'Healthcare',
    sectorAr: 'المستشفيات والرعاية الصحية',
    taglineEn: 'Historic healthcare foundation serving Dubai community since 1972',
    taglineAr: 'أعرق المستشفيات الخاصة التي تخدم مجتمع دبي منذ عام 1972',
    servicesProvidedEn: ['Clinical Personnel Work Permits', 'OHC Renewals', 'Salem Medical Fitness Integration'],
    servicesProvidedAr: ['تصاريح عمل الكوادر السريرية', 'تجديد بطاقات الصحة المهنية', 'تنسيق الفحص الطبي مع سالم'],
    logoText: 'IRANIAN HOSPITAL',
    brandColor: '#C026D3',
  },
  {
    id: 'al-habtoor',
    name: 'Al Habtoor Group',
    nameAr: 'مجموعة الحبتور',
    sector: 'Retail & Conglomerates',
    sectorAr: 'الشركات العائلية والضيافة',
    taglineEn: 'Prestigious Emirati conglomerate operating across hotels, auto, and real estate',
    taglineAr: 'إحدى كبرى المجموعات الإماراتية الرائدة في الضيافة والسيارات والعقارات',
    servicesProvidedEn: ['VIP Doorstep Van Mobile Unit Services', 'Corporate DED Amendments', 'Foreign Worker Quotas'],
    servicesProvidedAr: ['خدمات الحافلة الحكومية المتنقلة للمقر', 'تعديلات رخص اقتصادية دبي', 'كوتا استقدام الكوادر'],
    logoText: 'AL HABTOOR',
    brandColor: '#1E3A8A',
  },
  {
    id: 'al-naboodah',
    name: 'Al Naboodah Group',
    nameAr: 'مجموعة النابودة',
    sector: 'Retail & Conglomerates',
    sectorAr: 'المقاولات والهندسة والسيارات',
    taglineEn: 'One of the UAE’s most respected commercial construction and automotive groups',
    taglineAr: 'أحد أعرق البيوت التجارية في قطاعات الإنشاءات والنقل والسيارات',
    servicesProvidedEn: ['Construction Worker OHC Screening (Category 5)', 'Tasheel Labor Insurance', 'Fine Reductions'],
    servicesProvidedAr: ['فحوصات الصحة لعمال الإنشاءات (الفئة 5)', 'التأمين العمالي بدبي', 'تسوية وتخفيض الغرامات'],
    logoText: 'AL NABOODAH',
    brandColor: '#991B1B',
  },
  {
    id: 'kanoo-group',
    name: 'The Kanoo Group',
    nameAr: 'مجموعة كانو',
    sector: 'Retail & Conglomerates',
    sectorAr: 'الشحن والصناعة والاستثمار',
    taglineEn: 'Historic commercial family enterprise in the Gulf region',
    taglineAr: 'إحدى أقدم المجموعات التجارية العائلية الرائدة في الخليج العربي',
    servicesProvidedEn: ['Shipping Crew Visa Sponsorships', 'Corporate Establishment Card Updates', 'Power of Attorney Notary'],
    servicesProvidedAr: ['إقامات وكفالات طواقم الملاحة والشحن', 'بطاقات منشأة الموانئ', 'توثيق الوكالات لدى الكاتب العدل'],
    logoText: 'THE KANOO GROUP',
    brandColor: '#0F766E',
  },
  {
    id: 'enoc',
    name: 'ENOC (Emirates National Oil Company)',
    nameAr: 'إينوك (شركة بترول الإمارات الوطنية)',
    sector: 'Retail & Conglomerates',
    sectorAr: 'الطاقة والبترول والتجزئة',
    taglineEn: 'Leading integrated global oil and gas player in Dubai',
    taglineAr: 'المجموعة الرائدة والمتكاملة في مجالات النفط والغاز والتجزئة',
    servicesProvidedEn: ['Service Station Staff Health Screenings', 'Oil & Chemical Industry OHCs (Category 15)', 'Work Permits'],
    servicesProvidedAr: ['فحوصات كوادر محطات الوقود', 'بطاقات الصحة لقطاع البتروكيماويات', 'تصاريح وزارة الموارد'],
    logoText: 'ENOC',
    brandColor: '#0284C7',
  },
  {
    id: 'al-ahli-driving-center',
    name: 'Al Ahli / Belhasa Driving Center',
    nameAr: 'مركز الأهلي / بالحصا لتعليم قيادة السيارات',
    sector: 'Automotive & Government',
    sectorAr: 'مدارس تعليم القيادة والنقل',
    taglineEn: 'Top-tier driver education and transport licensing institute',
    taglineAr: 'أعرق معاهد تدريب وتأهيل السائقين بدولة الإمارات',
    servicesProvidedEn: ['RTA Driver Health Screenings (Category 2)', 'Instructor Visa Processing', 'Vehicle Registration Liaison'],
    servicesProvidedAr: ['فحوصات سائقي هيئة الطرق (الفئة 2)', 'تأشيرات المدربين', 'تنسيق تسجيل الأسطول لدى RTA'],
    logoText: 'AL AHLI DRIVING',
    brandColor: '#128B94',
  },
  {
    id: 'creative-zone',
    name: 'Creative Zone',
    nameAr: 'كرييتف زون لتأسيس الأعمال',
    sector: 'Tech & E-Commerce',
    sectorAr: 'استشارات وتأسيس الشركات',
    taglineEn: 'Dubai’s largest business setup and entrepreneur advisory network',
    taglineAr: 'أكبر شبكة استشارية لتأسيس الشركات ورواد الأعمال في دبي',
    servicesProvidedEn: ['Mainland DED Instant Licenses', 'Partner Visa Stamping', 'MOFA Certificate Legalization'],
    servicesProvidedAr: ['الرخص الفورية باقتصادية دبي', 'تثبيت إقامات الشركاء والمستثمرين', 'تصديقات وزارة الخارجية'],
    logoText: 'CREATIVE ZONE',
    brandColor: '#7C3AED',
  },
  {
    id: 'riverland-dubai',
    name: 'Riverland Dubai (Dubai Parks & Resorts)',
    nameAr: 'ريفرلاند دبي (دبي باركس آند ريزورتس)',
    sector: 'Hospitality',
    sectorAr: 'الوجهات الترفيهية والسياحية',
    taglineEn: 'European-themed dining and retail destination in Dubai Parks',
    taglineAr: 'الوجهة الترفيهية والمطاعم ذات الطراز الأوروبي العالمي',
    servicesProvidedEn: ['Entertainment Staff Visas', 'Food Stall Municipal Permits', 'Urgent Medical Clearance'],
    servicesProvidedAr: ['تأشيرات فرق الترفيه والاستعراض', 'تصاريح أكشاك الطعام البلدية', 'الفحص الطبي المستعجل'],
    logoText: 'RIVERLAND',
    brandColor: '#0D9488',
  },
  {
    id: 'dewa',
    name: 'Dubai Electricity & Water Authority (DEWA)',
    nameAr: 'هيئة كهرباء ومياه دبي (ديوا)',
    sector: 'Automotive & Government',
    sectorAr: 'المؤسسات الحكومية والخدمية',
    taglineEn: 'Dubai’s exclusive provider of electricity and sustainable water services',
    taglineAr: 'المزود الحصري لخدمات الكهرباء والمياه المستدامة في إمارة دبي',
    servicesProvidedEn: ['Staff Occupational Health Screening', 'Government Visas & Amer Clearance', 'Corporate Attestations'],
    servicesProvidedAr: ['فحوصات الصحة المهنية للموظفين', 'تأشيرات وإقامات آمر الحكومية', 'التصديقات المؤسسية المعتمدة'],
    logoText: 'DEWA',
    brandColor: '#007A3D',
  },
];

// -------------------------------------------------------------
// 6. AWARDS & RECOGNITIONS (Pages 24 - 25)
// -------------------------------------------------------------
export const AWARDS_RECOGNITIONS: AwardItem[] = [
  {
    id: 'jci-quality-approval',
    titleEn: 'Joint Commission International (JCI) Quality Approval',
    titleAr: 'شهادة الاعتماد الدولي للجودة (JCI) - اللجنة الدولية المشتركة',
    authorityEn: 'Joint Commission International (USA / Global)',
    authorityAr: 'اللجنة الدولية المشتركة لاعتماد المنشآت الصحية (JCI)',
    year: '2018 - Present',
    categoryEn: 'Healthcare & Clinical Excellence',
    categoryAr: 'التميز الطبي السريري والصحي',
    descriptionEn:
      'Official international healthcare accreditation awarded to DHA Medical Fitness Services - Al Karama Medical Fitness Express Service Center for adhering to world-class safety, infection control, and diagnostic screening protocols.',
    descriptionAr:
      'الاعتماد الدولي المرموق الممنوح لخدمات اللياقة الطبية التابعة لهيئة الصحة بدبي - مركز الكرامة للياقة الطبية السريع، تقديراً لتطبيق أعلى معايير السلامة العالمية، ومكافحة العدوى، ودقة الفحوصات التشخيصية للإقامة.',
    scopeEn: 'Clinical Diagnostic Excellence & Rapid Visa Screening Protocol',
    scopeAr: 'التميز في الفحوصات التشخيصية السريرية وبروتوكولات الفحص السريع للإقامة',
    verificationId: 'JCI-DHA-KARAMA-2018-049',
    badgeText: 'GOLD SEAL OF APPROVAL',
  },
  {
    id: 'iso-9001-qms',
    titleEn: 'ISO 9001:2008 / ISO 9001:2015 Quality Management System',
    titleAr: 'شهادة نظام إدارة الجودة العالمية آيزو (ISO 9001)',
    authorityEn: 'Global Group UK / International Accreditation Forum (IAF)',
    authorityAr: 'مجموعة جلوبال العالمية / المنتدى الدولي للاعتماد (IAF)',
    year: 'Certified Institutional Standard',
    categoryEn: 'Quality Management & Operations',
    categoryAr: 'إدارة الجودة الشاملة والحوكمة المؤسسية',
    descriptionEn:
      'Comprehensive institutional quality management registration certificate awarded to Emirates Secretarial Services covering Business Management Services, Typing & Document Clearing, Feasibility Studies, and Legal Translations.',
    descriptionAr:
      'شهادة التسجيل لنظام إدارة الجودة المؤسسية الممنوحة لشركة الإمارات لخدمات رجال الأعمال لتغطيتها خدمات إدارة الأعمال، والطباعة، وتخليص المعاملات الحكومية، ودراسات الجدوى، والترجمة القانونية المعتمدة.',
    scopeEn: 'Business Management, Government Typing, Document Clearing & Legal Translation',
    scopeAr: 'إدارة الأعمال، الطباعة الحكومية، تخليص المعاملات، والترجمة القانونية',
    verificationId: 'ISO-9001-GLB-77402',
    badgeText: 'CERTIFIED ISO 9001',
  },
  {
    id: 'civil-defence-appreciation',
    titleEn: 'Dubai Civil Defence Certificate of Appreciation (2018)',
    titleAr: 'شهادة شكر وتقدير من القيادة العامة للدفاع المدني بدبي (2018)',
    authorityEn: 'General Directorate of Civil Defence Dubai - Ministry of Interior',
    authorityAr: 'الإدارة العامة للدفاع المدني بدبي - وزارة الداخلية',
    year: '2018',
    categoryEn: 'Public Safety & Emergency Preparedness',
    categoryAr: 'السلامة العامة والجاهزية والاستجابة للطوارئ',
    descriptionEn:
      'Awarded by Major General Rashid Thani Rashid Al Matrooshi, Director General of Civil Defence Dubai, to Karama Business Center in recognition of exemplary cooperation, safety compliance, and flawless execution of full evacuation drills.',
    descriptionAr:
      'شهادة شكر وتقدير مقدمة من اللواء خبير راشد ثاني راشد المطروشي، مدير عام الدفاع المدني بدبي، لمركز الكرامة تقديراً لمساهمتهم المتميزة وتعاونهم الفعال في النجاح التام لعمليات الإخلاء التدريبية وتطبيق أعلى اشتراطات السلامة.',
    scopeEn: 'Exemplary Evacuation Drill Execution & Life Safety Preparedness',
    scopeAr: 'التنفيذ النموذجي لتمارين الإخلاء والجاهزية التامة لمعايير السلامة وحماية الأرواح',
    verificationId: 'DCD-APPR-2018-994',
    badgeText: 'MINISTRY APPRECIATION',
  },
  {
    id: 'fanr-nuclear-radiation-license',
    titleEn: 'FANR Radiation Safety & Medical X-Ray License',
    titleAr: 'ترخيص السلامة الإشعاعية للأجهزة الطبية من هيئة الرقابة النووية (FANR)',
    authorityEn: 'Federal Authority for Nuclear Regulation (FANR) UAE',
    authorityAr: 'الهيئة الاتحادية للرقابة النووية بدولة الإمارات',
    year: 'Regulated Medical License',
    categoryEn: 'Diagnostic Radiology Safety & Compliance',
    categoryAr: 'السلامة الإشعاعية والرقابة على الأجهزة الطبية التشخيصية',
    descriptionEn:
      'Official federal regulatory license authorizing Karama Business Center & KMFC to conduct regulated activities utilizing medical chest radiography and digital X-ray equipment under strict federal radiation protection standards.',
    descriptionAr:
      'الترخيص الاتحادي الرسمي المعتمد لممارسة نشاط ينطوي على استخدام مواد وأجهزة خاضعة للرقابة للمعدات الطبية وأجهزة الأشعة السينية التشخيصية للياقة الإقامة طبقاً لأعلى اشتراطات الوقاية الإشعاعية بالدولة.',
    scopeEn: 'Regulated Medical Diagnostic Radiology for Residency Medical Fitness',
    scopeAr: 'تشغيل أجهزة الأشعة التشخيصية لفحوصات الإقامة الطبية وفق الضوابط الاتحادية',
    verificationId: 'FANR-RAD-MED-2018-8821',
    badgeText: 'FEDERAL ACCREDITED',
  },
];

// -------------------------------------------------------------
// 7. COMPANY EVENTS & CELEBRATIONS (Pages 29 - 31)
// -------------------------------------------------------------
export const COMPANY_EVENTS: CompanyEvent[] = [
  {
    id: 'uae-national-day',
    titleEn: 'UAE National Day Celebration',
    titleAr: 'احتفال اليوم الوطني لدولة الإمارات (عيد الاتحاد)',
    category: 'National',
    categoryAr: 'مناسبات وطنية',
    date: 'December 2, Annual',
    locationEn: 'Al Karama Business Center Main Hall',
    locationAr: 'الصالة الرئيسية بمركز الكرامة للأعمال',
    descriptionEn:
      'A grand sovereign celebration where leadership, staff, and VIP guests gathered to cut the ceremonial UAE flag cake, decorate the center in national colors, and reaffirm allegiance to the visionary rulers of the Emirates.',
    descriptionAr:
      'احتفالية وطنية كبرى تجمع القيادة التنفيذية وفريق العمل والمتعاملين لتقطيع كعكة علم الإمارات التذكارية وتزيين المركز بالألوان الوطنية وتجديد الولاء لقيادة دولة الإمارات الرشيدة.',
    highlightEn: 'Ceremonial cake cutting, traditional Emirati hospitality, and staff national scarves ceremony.',
    highlightAr: 'مراسم تقطيع الكعكة الاحتفالية، الضيافة الإماراتية التراثية، وارتداء الأوشحة الوطنية الرسمية.',
    attendees: '250+ Staff, PROs & Government Officials',
    image: eventsCelebrationImg,
    galleryTags: ['National Day', 'Leadership', 'Center Hall', 'UAE Flag'],
  },
  {
    id: 'ramadan-iftar-hyde-hotel',
    titleEn: 'Annual Ramadan Grand Iftar Gala at Hyde Hotel Dubai',
    titleAr: 'حفل الإفطار الرمضاني السنوي في فندق هايد دبي (Business Bay)',
    category: 'Corporate',
    categoryAr: 'فعاليات مؤسسية',
    date: 'Holy Month of Ramadan',
    locationEn: 'Hyde Hotel Dubai, Business Bay',
    locationAr: 'فندق هايد دبي، الخليج التجاري',
    descriptionEn:
      'An executive corporate evening gathering the entire Emirates Secretarial Services and Karama Business Center team, management, and strategic ministerial partners for a luxury Iftar banquet overlooking the Dubai Canal.',
    descriptionAr:
      'أمسية مؤسسية فاخرة تجمع كوادر الإمارات لخدمات رجال الأعمال ومركز الكرامة وإدارتها العليا وشركاء النجاح في مأدبة إفطار رمضانية راقية تطل على قناة دبي المائية.',
    highlightEn: 'Leadership address by MD Hani Ebrahim, employee long-service awards, and team camaraderie.',
    highlightAr: 'كلمة المدير العام هاني إبراهيم، تكريم الموظفين المتميزين، وتعزيز الروابط الأخوية.',
    attendees: '180+ Employees & Strategic Guests',
    image: eventsCelebrationImg,
    galleryTags: ['Ramadan', 'Gala Dinner', 'Hyde Hotel', 'Team Awards'],
  },
  {
    id: 'uae-flag-day',
    titleEn: 'UAE Flag Day Ceremony (يوم العلم)',
    titleAr: 'مراسم يوم العلم الإماراتي',
    category: 'National',
    categoryAr: 'مناسبات وطنية',
    date: 'November 3, Annual',
    locationEn: 'Karama Business Center Plaza & Customer Hall',
    locationAr: 'بهو وساحة مركز الكرامة للأعمال',
    descriptionEn:
      'Simultaneous national flag-raising ceremony held in the presence of center customers and staff, accompanied by national anthem recitals and public service announcements honoring the nation’s founding fathers.',
    descriptionAr:
      'مراسم رفع علم الدولة في تمام الساعة 11:00 صباحاً بمشاركة المتعاملين والموظفين، وعزف السلام الوطني الإماراتي احتفاءً براية الاتحاد ورموز السيادة الوطنية.',
    highlightEn: 'Customer participation, patriotic speech by operations director, and gift distribution.',
    highlightAr: 'مشاركة واسعة من المتعاملين، كلمة وطنية لمدير العمليات، وتوزيع الهدايا التذكارية.',
    attendees: '300+ Staff & Visiting Clients',
    image: eventsCelebrationImg,
    galleryTags: ['Flag Day', 'Patriotism', 'Customer Hall'],
  },
  {
    id: 'christmas-celebration',
    titleEn: 'Christmas & Year-End Multicultural Celebration',
    titleAr: 'احتفال رأس السنة وعيد الميلاد متعدد الثقافات',
    category: 'Cultural',
    categoryAr: 'ثقافة مؤسسية',
    date: 'Late December, Annual',
    locationEn: 'Executive VIP Majlis & Employee Break Suite',
    locationAr: 'صالة مجلس كبار الشخصيات وجناح الموظفين',
    descriptionEn:
      'Celebrating the rich cultural diversity of our international workforce representing 25+ nationalities with seasonal festive cakes, team building games, and annual performance recognitions.',
    descriptionAr:
      'احتفال يعكس التنوع الثقافي والتسامح الإنساني الذي تحتضنه دبي ويضم أكثر من 25 جنسية من كوادر المركز، مع تقطيع كعكة الاحتفال وتبادل التهاني السنوية.',
    highlightEn: 'Festive treats in the executive lounge, holiday gift exchanges, and leadership appreciation.',
    highlightAr: 'ضيافة خاصة بصالة كبار الشخصيات، تبادل الهدايا الرمزية، وشكر الإدارة العليا لجهود العام.',
    attendees: '120+ Team Members',
    image: eventsCelebrationImg,
    galleryTags: ['Christmas', 'Diversity', 'Team Bonding'],
  },
  {
    id: 'eid-al-eithad',
    titleEn: 'Eid Al Etihad Cultural & Heritage Festivities',
    titleAr: 'احتفاليات عيد الاتحاد التراثية والثقافية',
    category: 'Cultural',
    categoryAr: 'تراث وثقافة',
    date: 'National Celebration Week',
    locationEn: 'Karama Business Center Main Hall & Traditional Majlis',
    locationAr: 'الصالة الكبرى والمجلس التراثي بمركز الكرامة',
    descriptionEn:
      'Traditional heritage showcases, musical chair competitions, traditional Emirati food buffets, and customer appreciation tokens distributed to every applicant completing transactions on the day.',
    descriptionAr:
      'فعاليات تراثية وشعبية مميزة، مسابقات ترفيهية للموظفين، مأكولات شعبية إماراتية، وتوزيع هدايا تذكارية على جميع المتعاملين المنجزين لمعاملاتهم في اليوم.',
    highlightEn: 'Traditional tent, live games, Arabic coffee & dates hospitality, and joyful staff spirit.',
    highlightAr: 'المجلس التراثي، القهوة العربية والتمور، والمسابقات الترفيهية الحماسية بين المكاتب.',
    attendees: '400+ Staff & Citizens/Residents',
    image: eventsCelebrationImg,
    galleryTags: ['Eid Al Etihad', 'Heritage', 'Customer Gifts'],
  },
  {
    id: 'community-iftar-party',
    titleEn: 'Community & Staff Communal Iftar Gathering',
    titleAr: 'مأدبة الإفطار الجماعي لأسرة المركز والمجتمع',
    category: 'Community',
    categoryAr: 'مبادرات مجتمعية',
    date: 'Ramadan Mid-Month',
    locationEn: 'Karama Business Center Dining Hall',
    locationAr: 'قاعة الضيافة بمركز الكرامة',
    descriptionEn:
      'An inspiring communal tradition where frontline officers, typists, medical nurses, and security guards sit together as one family to break fast, reflecting the authentic charitable values of the Holy Month.',
    descriptionAr:
      'تقليد رمضاني نبيل يجمع موظفي المنصات والمترجمين والتمريض ورجال الأمن على مائدة واحدة كأسرة متماسكة، تجسيداً لقيم التراحم والعطاء في الشهر الفضيل.',
    highlightEn: 'Shared meals, mutual respect, zero hierarchy, and blessings for our collective success.',
    highlightAr: 'تناول وجبة الإفطار بتآخٍ تام وبدون حواجز إدارية، تعزيزاً لروح الفريق الواحد.',
    attendees: '150+ Daily Shift Staff',
    image: eventsCelebrationImg,
    galleryTags: ['Community', 'Iftar', 'Staff Family'],
  },
];
