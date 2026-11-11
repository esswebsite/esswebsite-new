/**
 * Comprehensive SEO, Canonical & Schema.org Structured Data Provider for
 * Emirates Secretarial Services (ESS) & Karama Business Center
 * 
 * Strict Google Requirements:
 * - Meta Title: 50 to 60 characters (~600px desktop width, 6 to 10 words)
 * - Meta Description: 120 to 160 characters (~920px desktop, ~680px mobile, 18 to 28 words)
 * - Separate canonical link per page: https://ess.ae{path}
 * - Schema.org JSON-LD architecture:
 *   - Homepage (/): WebSite (SearchAction), GovernmentBuilding (NAP, Hours, GMB, Socials, Geo)
 *   - Medical Fitness Clinic (/salem-medical-fitness-karama): MedicalClinic, DHA Accreditation, Services
 *   - Clinical Tests (Salem / OHC): MedicalTest, Offer, BreadcrumbList, FAQPage
 *   - Semi-Gov Services (Amer, Tasheel, DET, ICP, etc.): GovernmentService, Offer, BreadcrumbList
 *   - Blog & News (/knowledge-hub/:slug): BlogPosting, BreadcrumbList, Author, Publisher
 *   - Contact Us (/contact): ContactPage, GovernmentBuilding, ContactPoint
 */

import { matchDepartmentBySlug, matchServiceBySlug, getServiceUrlSlug, getDepartmentPath } from './urlRoutes';
import { SERVICES, DEPARTMENTS } from '../data/departmentsData';
import { BLOG_POSTS } from '../data/blogData';
import { ServiceItem } from '../types';

export interface RouteSeoData {
  title: string;
  description: string;
  keywords: string;
  canonicalUrl: string;
  schema: Record<string, unknown>;
}

export const CANONICAL_BASE = 'https://ess.ae';

// Base Organization Schema Node (Consistent @id across Knowledge Graph)
export const BASE_ORGANIZATION_SCHEMA = {
  '@type': 'GovernmentBuilding',
  '@id': 'https://ess.ae/#organization',
  name: 'Karama Business Center - ESS',
  alternateName: [
    'Emirates Secretarial Services Al Karama',
    'Karama Business Center',
    'ESS',
    'Amer Center Karama',
    'KMFC',
  ],
  url: 'https://ess.ae',
  telephone: '+971-4-342-6666',
  email: 'info@ess.ae',
  logo: 'https://ess.ae/ess-logo-transparent.png',
  image: 'https://ess.ae/assets/images/Main%20Banner,%20bg.webp',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Fajer Building - 9 19d Street - opposite Karama Post Office - Al Karama',
    addressLocality: 'Dubai',
    addressRegion: 'Dubai',
    postalCode: '00000',
    addressCountry: 'AE',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 25.2447,
    longitude: 55.3023,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '07:30',
      closes: '21:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday'],
      opens: '08:00',
      closes: '14:00',
    },
  ],
  sameAs: [
    'https://share.google/PfQfd6K27OYYur1ai',
    'https://www.facebook.com/karamabusiness.ae/',
    'https://www.instagram.com/karamacenter.ae/',
    'https://www.linkedin.com/company/karamacenter-ae/posts/?viewAsMember=true',
    'https://www.tiktok.com/@karamabusinesscenter',
  ],
};

// Official Jurisdictional Operators for Government Services
export const GOV_OPERATORS: Record<string, { name: string; url: string }> = {
  amer: {
    name: 'General Directorate of Residency and Foreigners Affairs (GDRFA)',
    url: 'https://gdrfad.gov.ae',
  },
  'golden-visa': {
    name: 'General Directorate of Residency and Foreigners Affairs (GDRFA)',
    url: 'https://gdrfad.gov.ae',
  },
  ded: {
    name: 'Department of Economy and Tourism (DET Dubai)',
    url: 'https://www.investindubai.gov.ae/',
  },
  tasheel: {
    name: 'Ministry of Human Resources and Emiratisation (MoHRE)',
    url: 'https://www.mohre.gov.ae',
  },
  icp: {
    name: 'Federal Authority for Identity, Citizenship, Customs and Port Security (ICP)',
    url: 'https://icp.gov.ae',
  },
  municipality: {
    name: 'Dubai Municipality & Dubai Land Department (DLD Ejari)',
    url: 'https://www.dm.gov.ae',
  },
  ohc: {
    name: 'Dubai Health Authority (DHA)',
    url: 'https://dha.gov.ae',
  },
  attestation: {
    name: 'Ministry of Foreign Affairs (MOFA UAE)',
    url: 'https://www.mofa.gov.ae',
  },
  notary: {
    name: 'Dubai Courts Notary Public',
    url: 'https://www.dc.gov.ae',
  },
  typing: {
    name: 'Ministry of Justice (MOJ UAE)',
    url: 'https://moj.gov.ae',
  },
  salem: {
    name: 'Dubai Health Authority (DHA Salem)',
    url: 'https://dha.gov.ae',
  },
  rta: {
    name: 'Roads and Transport Authority (RTA Dubai)',
    url: 'https://www.rta.ae',
  },
  tawjeeh: {
    name: 'Ministry of Human Resources and Emiratisation (MoHRE)',
    url: 'https://www.mohre.gov.ae',
  },
  tadbeer: {
    name: 'Ministry of Human Resources and Emiratisation (MoHRE)',
    url: 'https://www.mohre.gov.ae',
  },
  'vip-mobile': {
    name: 'Karama Business Center VIP Concierge',
    url: 'https://ess.ae',
  },
};

// Specific metadata for core pages (50-60 chars title, 120-160 chars desc)
export const CORE_PAGES_META: Record<string, { title: string; desc: string; keywords: string }> = {
  '/': {
    title: 'Amer Center Karama Dubai | UAE Visa & Golden Visa ESS',
    desc: 'Authorized Amer Center Karama (#772) in Dubai. Fast UAE residency, Golden Visa, Tasheel work permits, Emirates ID & DHA Salem medical.',
    keywords: 'Amer Center Karama, amer center near me, uae visa, golden visa dubai, tasheel dubai, pro services dubai, emirates id renewal, dha salem medical',
  },
  '/about': {
    title: 'About ESS Karama | Authorized Dubai PRO & Amer Center',
    desc: 'Over 20 years of authorized Dubai government typing & PRO services at Karama Business Center. Amer Center #772, Tasheel & Salem medical.',
    keywords: 'About ESS Dubai, Karama Business Center, Amer Center Karama, Tasheel Dubai, Dubai PRO center, authorized government typing Dubai',
  },
  '/departments': {
    title: 'Government Centers Dubai | Amer, Tasheel & Salem ESS',
    desc: 'Access 14 official government departments under one roof at Karama Business Center: Amer GDRFA, Tasheel MOHRE, DET, ICP ID & DHA Salem.',
    keywords: 'Government departments Dubai, Amer Center Karama, DET licensing Dubai, Tasheel MOHRE Dubai, ICP Emirates ID typing, DHA Salem medical',
  },
  '/knowledge-hub': {
    title: 'Dubai Visa & Immigration Guides 2026 | ESS Amer Hub',
    desc: 'Authoritative UAE visa guides, Golden Visa rules, Emirates ID procedures, DET trade license renewal, and labor regulations by Dubai PROs.',
    keywords: 'UAE visa guide, Dubai residence renewal guide, Golden Visa eligibility rules, Emirates ID renewal steps, Dubai corporate tax guide',
  },
  '/faq': {
    title: 'Dubai Visa & Amer Center FAQ | Frequently Asked ESS',
    desc: 'Find answers to common questions about UAE residence visas, Golden Visa eligibility, DET trade licenses, Tasheel, and Salem medical tests.',
    keywords: 'Dubai visa FAQ, Amer center FAQ, Golden Visa questions Dubai, Salem medical fitness test FAQ, trade license renewal FAQ',
  },
  '/contact': {
    title: 'Contact Amer Center Karama | Dubai Location & Phone',
    desc: 'Visit Emirates Secretarial Services & Amer Center next to Karama Post Office Dubai. Call +971 4 342 6666 for express VIP PRO assistance.',
    keywords: 'Contact ESS Dubai, Karama Business Center location, Amer center phone number, DHA Salem Karama contact, government services Karama',
  },
  '/team': {
    title: 'Certified PRO Team & Immigration Officers | ESS Dubai',
    desc: 'Meet our team of licensed PROs, immigration consultants, and legal specialists at Emirates Secretarial Services Karama Business Center.',
    keywords: 'ESS team Dubai, certified PRO Dubai, government liaison officers, immigration consultants Karama, Karama Business Center team',
  },
  '/ceo': {
    title: 'CEO Message & Vision | Emirates Secretarial Services',
    desc: 'Leadership message from Emirates Secretarial Services & Karama Business Center on delivering premier, zero-delay government services in Dubai.',
    keywords: 'CEO Emirates Secretarial Services, Karama Business Center leadership, Dubai government services vision, ESS corporate governance',
  },
  '/awards': {
    title: 'Government Awards & Accreditations | Amer Center ESS',
    desc: 'Recognized excellence: Official GDRFA Amer ratings, DHA Salem accreditations, and Dubai government awards earned by Karama Business Center.',
    keywords: 'GDRFA awards, Amer center accreditation, DHA approved center Dubai, ESS certifications, Karama business center awards',
  },
  '/clients': {
    title: 'Corporate PRO Clients & Enterprise Partners | ESS KBC',
    desc: 'Trusted corporate PRO partner for multinational firms, hotel groups, and enterprise business setup across Dubai and the United Arab Emirates.',
    keywords: 'Corporate PRO Dubai, enterprise immigration management, group visa processing Dubai, corporate secretarial services UAE',
  },
  '/events': {
    title: 'Community Events & Delegations | Amer Center Karama',
    desc: 'Explore community outreach, government delegation visits, and customer appreciation milestones at Karama Business Center & Amer Center ESS.',
    keywords: 'ESS events Dubai, government delegations Karama, community initiatives Dubai, business center milestones',
  },
  '/gallery': {
    title: 'Center Gallery & VIP Majlis Lounge | Amer Karama ESS',
    desc: 'View photos of our 14-counter government hall, luxury VIP Majlis lounge, DHA Salem medical clinic, and doorstep mobile service van in Dubai.',
    keywords: 'Karama business center photo gallery, Amer center Karama photos, VIP Majlis lounge Dubai, mobile government van UAE',
  },
};

// Specific metadata for 14 authorized departments (50-60 chars title, 120-160 chars desc)
export const DEPARTMENTS_META: Record<string, { title: string; desc: string; keywords: string }> = {
  amer: {
    title: 'Amer Center Karama Dubai | UAE Residency & Visit Visa',
    desc: 'Authorized Amer Center (Lic. #772) in Karama Dubai. Fast UAE residency visa issuance, renewals, entry permits, and family sponsorship.',
    keywords: 'Amer Center Karama, amer center near me, Amer Dubai, Amer License 772, residence visa renewal, Dubai entry permit, family visa Dubai',
  },
  'golden-visa': {
    title: 'Golden Visa Dubai UAE | 10-Year Residency Center ESS',
    desc: 'Apply for 10-year UAE Golden Visa in Dubai for property investors & executives. Fast VIP approvals, nomination vetting & Salem medical.',
    keywords: 'Golden Visa Dubai, golden visa uae, 10 year visa UAE, Golden Visa Karama, property investor Golden Visa, executive Golden Visa Dubai',
  },
  ded: {
    title: 'DET Business Setup Dubai | Trade License Center KBC',
    desc: 'Authorized DET center in Karama Dubai. New commercial trade licenses, Instant license, e-Trader, renewals, and Ejari registration.',
    keywords: 'DET Dubai, DED Dubai license renewal, instant license Dubai, e-trader license, trade name reservation, business setup Karama',
  },
  tasheel: {
    title: 'Tasheel Center Karama Dubai | MOHRE Work Permits KBC',
    desc: 'Authorized Tasheel Center (#4108) in Karama. Electronic work permits, MOHRE labor contracts, quota verification & company establishment.',
    keywords: 'Tasheel Karama, tasheel dubai, Tasheel center Dubai, MOHRE work permit, electronic work permit renewal, labor contract Dubai',
  },
  icp: {
    title: 'ICP Emirates ID Center Karama | New & Renewal Typing',
    desc: 'Authorized ICP Emirates ID typing in Karama Dubai. Urgent biometric booking, new applications, replacement, and renewal processing.',
    keywords: 'ICP Dubai, emirates id renewal, emirates id status, new Emirates ID, Emirates ID urgent biometrics, ICP smart services',
  },
  municipality: {
    title: 'Dubai Municipality Ejari Services | Karama Center ESS',
    desc: 'Dubai Municipality & DLD Ejari center in Karama. Official Ejari tenancy registration, cancellation, Foodwatch & Montaji product approvals.',
    keywords: 'Ejari registration Karama, ejari services, DLD Ejari cancellation, Dubai Municipality permits, Montaji registration, Foodwatch Dubai',
  },
  ohc: {
    title: 'OHC Occupational Health Card Dubai | Food & Salon KBC',
    desc: 'Authorized Occupational Health Card (OHC) typing in Dubai. Mandatory medical screening for food handlers, salon staff, and drivers.',
    keywords: 'OHC card Dubai, occupational health card Karama, food handlers card Dubai, salon health card, DHA occupational health screening',
  },
  attestation: {
    title: 'Atlas Attestation Dubai | MOFA & Embassy Legalization',
    desc: 'Official Atlas Attestation in Karama. Fast UAE MOFA document attestation, embassy legalization, degree equivalency & apostille services.',
    keywords: 'Atlas Attestation Dubai, MOFA attestation Dubai, certificate attestation Karama, embassy legalization Dubai, apostille UAE',
  },
  notary: {
    title: 'Dubai Courts Notary Public | Power of Attorney Karama',
    desc: 'Certified Dubai Courts & Private Notary in Karama. General & Special Power of Attorney (POA), corporate MOA signing, and legal petitions.',
    keywords: 'Dubai notary public, private notary Karama, Power of Attorney Dubai, POA typing, MOA notary signing, Dubai courts civil suit',
  },
  typing: {
    title: 'Legal Translation Dubai | MOJ Certified Typing Center',
    desc: 'Ministry of Justice (MOJ) certified legal translation into 30+ languages, government NOC petition drafting, and corporate board resolutions.',
    keywords: 'Legal translation Dubai, MOJ certified translation Karama, Arabic translation Dubai, government NOC typing, embassy visa application',
  },
  salem: {
    title: 'Salem Medical Fitness Center Karama | 2Hr Visa Medical',
    desc: 'Authorized DHA Salem Medical Fitness Center (KMFC) in Karama. Express 2-hour VIP, urgent 6-hour & 24-hour UAE residency visa screening.',
    keywords: 'DHA Salem Karama, medical for dubai visa, Karama medical fitness center, KMFC Dubai, visa medical test Karama, express medical fitness',
  },
  rta: {
    title: 'RTA Driving License & Mulkiya Renewal | Karama Center',
    desc: 'Official RTA counter in Karama Dubai. UAE driving license renewal, vehicle Mulkiya registration, International Driving Permits & fines.',
    keywords: 'RTA Karama, driving license renewal Dubai, vehicle Mulkiya renewal, international driving permit IDP, traffic fine inquiry Dubai',
  },
  tawjeeh: {
    title: 'Tawjeeh Center Karama Dubai | MOHRE Worker Awareness',
    desc: 'Authorized Tawjeeh Center in Karama. Mandatory worker awareness classes in 16 languages, labor contracts orientation & ID handover.',
    keywords: 'tawjeeh center, Tawjeeh Karama, Tawjeeh center Dubai, worker awareness class MOHRE, UAE labor law orientation',
  },
  tadbeer: {
    title: 'Tadbeer Center Dubai | Housemaid & Maid Visa Karama',
    desc: 'Licensed Tadbeer center in Karama Dubai. Full domestic worker sponsorship, housemaid visa processing, nanny permits & maid contract renewal.',
    keywords: 'Tadbeer Karama, housemaid visa Dubai, nanny visa sponsorship, domestic worker visa UAE, Tadbeer maid contract renewal',
  },
  'vip-mobile': {
    title: 'VIP Mobile Government Van Dubai | Doorstep PRO Service',
    desc: 'Luxury doorstep mobile government van in Dubai. On-demand Amer, Tasheel, Emirates ID biometrics & Salem blood collection at your door.',
    keywords: 'VIP mobile government van Dubai, doorstep visa service Dubai, VIP Majlis government service, executive corporate PRO concierge',
  },
};

// Curated 20 Knowledge Hub guides (50-60 chars title, 120-160 chars desc)
export const ARTICLES_META: Record<string, { title: string; desc: string; keywords: string }> = {
  'emirates-id-renewal-guide': {
    title: 'Emirates ID Renewal Guide 2026 | ICP Karama Dubai ESS',
    desc: 'Official guide on Emirates ID renewal in Dubai. Step-by-step biometric booking, required documents, ICP government fees, and fast delivery.',
    keywords: 'emirates id renewal, emirates id status, ICP smart services, Emirates ID biometrics Dubai, renew emirates id online',
  },
  'uae-residence-visa-renewal': {
    title: 'UAE Residence Visa Renewal Guide | Amer Center Dubai',
    desc: 'Complete guide on UAE residency visa renewal in Dubai. GDRFA document requirements, 2-year costs, medical fitness test, and Emirates ID steps.',
    keywords: 'uae residence visa renewal, dubai residency renewal, amer center near me, residence visa renewal documents, GDRFA renewal',
  },
  'uae-visa-status-change': {
    title: 'UAE Visa Status Change Guide | In-Country Amer Dubai',
    desc: 'Learn how to change your UAE visa status inside the country without exit. Official Amer Center Karama process, fees, and GDRFA approval tips.',
    keywords: 'uae visa status change, inside country status change, amer center dubai, status change without exit, visa transfer dubai',
  },
  'uae-overstay-fines-guide': {
    title: 'UAE Overstay Fines Guide 2026 | Fine Reduction Dubai',
    desc: 'Check and reduce UAE overstay visa fines in Dubai. Step-by-step GDRFA waiver application, daily penalty calculation, and outpass clearance.',
    keywords: 'overstay fine in uae, reduce visa fine dubai, check overstay fines, outpass uae, gdrfa fine reduction',
  },
  'uae-golden-visa-eligibility': {
    title: 'UAE Golden Visa Eligibility Guide 2026 | Dubai ESS',
    desc: 'Complete 10-year UAE Golden Visa eligibility guide for real estate investors, executives, and doctors. Requirements, costs, and VIP processing.',
    keywords: 'golden visa dubai, golden visa uae, 10 year visa uae, property investor golden visa, executive golden visa dubai',
  },
  'dubai-trade-licence-guide': {
    title: 'Dubai Trade License Guide 2026 | DET Business Setup',
    desc: 'How to choose the right Dubai trade license: commercial, professional, and industrial. 100% foreign ownership rules and DET Karama fees.',
    keywords: 'dubai trade license, trade license dubai with visa, DET business setup, mainland commercial license, LLC formation dubai',
  },
  'dubai-instant-licence': {
    title: 'Dubai Instant License Guide | 5-Minute Setup DET ESS',
    desc: 'Issue your Dubai trade license instantly without lease agreement for year one. DET eligibility criteria, activity list, and cost breakdown.',
    keywords: 'dubai instant licence, instant trade license dubai, DET instant license, start business dubai, trade license without office',
  },
  'dubai-trade-licence-renewal': {
    title: 'Dubai Trade License Renewal Guide | Ejari & DET KBC',
    desc: 'Step-by-step trade license renewal in Dubai. Required Ejari certificate, partner passport copies, DET penalty avoidance, and fees.',
    keywords: 'dubai trade license renewal, renew trade license dubai, ejari trade license renewal, DET license renewal fee, avoid trade license penalties',
  },
  'uae-work-permit-guide': {
    title: 'UAE Work Permit Guide 2026 | MOHRE Tasheel Dubai ESS',
    desc: 'Comprehensive guide to UAE electronic work permits. Quota applications, MOHRE offer letters, labor contracts, and Tasheel Karama fees.',
    keywords: 'tasheel dubai, uae work permit, electronic work permit mohre, labor contract dubai, tasheel center dubai',
  },
  'uae-employment-contract-changes': {
    title: 'UAE Labor Contract Changes & Cancellation | Tasheel',
    desc: 'How to modify job titles, amend salary in MOHRE contracts, and process work permit cancellations smoothly at Tasheel Karama in Dubai.',
    keywords: 'uae employment contract changes, mohre contract amendment, work permit cancellation dubai, tasheel contract typing',
  },
  'uae-wage-protection-system': {
    title: 'UAE WPS Wage Protection System Guide | Employer PRO',
    desc: 'Complete guide on UAE Wage Protection System (WPS) compliance for companies. Avoid MOHRE blockages, salary transfer rules, and bank setup.',
    keywords: 'wps uae, wage protection system compliance, mohre wps salary transfer, avoid company ban wps, corporate pro services dubai',
  },
  'dubai-ejari-registration-guide': {
    title: 'Dubai Ejari Registration Guide 2026 | DLD Center ESS',
    desc: 'Official guide for tenancy contract Ejari registration in Dubai. Required documents for tenants and landlords, DLD fees, and fast approvals.',
    keywords: 'ejari services, ejari registration dubai, tenancy contract registration, dld ejari karama, renew ejari online',
  },
  'ejari-digital-services': {
    title: 'Digital Ejari & Tenancy Verification Guide | Dubai',
    desc: 'Explore digital Ejari renewal, cancellation, and title deed verification online and at Karama Business Center. Fast-track DLD compliance.',
    keywords: 'digital ejari, ejari cancellation dubai, title deed verification, dld cube, ejari services near me',
  },
  'uae-residency-medical-fitness': {
    title: 'UAE Visa Medical Fitness Guide | DHA Salem Karama ESS',
    desc: 'Everything you need to know about DHA Salem medical fitness tests for Dubai residency. Blood tests, chest X-rays, VIP 2-hour packages & fees.',
    keywords: 'medical for dubai visa, dha salem, visa medical test karama, kmfc dubai, 2 hour express medical test',
  },
  'dubai-occupational-health-card': {
    title: 'Dubai Occupational Health Card Guide | OHC DHA ESS',
    desc: 'Mandatory Occupational Health Card (OHC) requirements in Dubai for food handlers, restaurant staff, salons, and commercial drivers.',
    keywords: 'ohc card dubai, occupational health card karama, food handlers medical test, salon staff health card, dha ohc test',
  },
  'uae-document-attestation-guide': {
    title: 'UAE Document Attestation Guide | MOFA & Embassy ESS',
    desc: 'Complete step-by-step guide to attesting birth, marriage, and educational degrees for UAE residency. MOFA authentication & embassy legalization.',
    keywords: 'mofa attestation dubai, atlas attestation, degree attestation uae, marriage certificate attestation, embassy legalization',
  },
  'mofa-digital-attestation': {
    title: 'MOFA Digital Attestation vs Courier Guide | Dubai ESS',
    desc: 'Understand digital MOFA e-attestation versus physical courier-based legalization in Dubai. Fees, turnaround times, and apostille details.',
    keywords: 'digital attestation mofa, mofa online verification, apostille dubai, atlas attestation karama, certificate verification',
  },
  'uae-legal-translation-guide': {
    title: 'UAE MOJ Legal Translation Guide | Sworn Typing Dubai',
    desc: 'When is Ministry of Justice (MOJ) certified translation required in Dubai? Court submissions, embassies, immigration, and 30+ languages.',
    keywords: 'legal translation dubai, sworn translator dubai, moj certified translation, arabic translation karama, court document translation',
  },
  'uae-corporate-tax-compliance': {
    title: 'UAE Corporate Tax Compliance Guide | Small Business',
    desc: 'Essential UAE Corporate Tax checks for SMEs and freezone companies. FTA registration, 9% threshold rules, bookkeeping, and penalty avoidance.',
    keywords: 'uae corporate tax guide, fta tax registration, corporate tax compliance, small business tax dubai, corporate pro services',
  },
  'dubai-sme-business-support': {
    title: 'Dubai SME Business Setup Support Guide | DET Karama',
    desc: 'Learn about Dubai SME incentives, licensing fee exemptions, government procurement preferences, and startup support at Karama Business Center.',
    keywords: 'dubai sme business support, DET startup incentives, entrepreneur business setup, trade license exemption, business center dubai',
  },
};

const DEPT_SUFFIXES: Record<string, string[]> = {
  amer: [
    ' | Amer Center Karama Dubai ESS',
    ' | Amer Center Karama Dubai',
    ' | Amer Center Karama ESS',
    ' | Amer Center Dubai ESS',
    ' | Amer Center Dubai',
    ' | Amer Karama ESS',
    ' | Amer Dubai ESS',
  ],
  'golden-visa': [
    ' | Golden Visa Center Karama Dubai',
    ' | Golden Visa Dubai Center ESS',
    ' | Golden Visa Dubai Karama',
    ' | Golden Visa Dubai ESS',
    ' | Golden Visa Dubai',
    ' | Golden Visa ESS',
  ],
  ded: [
    ' | DET Business Center Karama Dubai',
    ' | DET Center Karama Dubai ESS',
    ' | DET Center Karama Dubai',
    ' | DET Center Dubai ESS',
    ' | DET Dubai Center',
    ' | DET Dubai ESS',
  ],
  tasheel: [
    ' | Tasheel Center Karama Dubai ESS',
    ' | Tasheel Center Karama Dubai',
    ' | Tasheel Center Karama ESS',
    ' | Tasheel Center Dubai ESS',
    ' | Tasheel Dubai Center',
    ' | Tasheel Dubai ESS',
  ],
  icp: [
    ' | ICP Center Karama Dubai ESS',
    ' | ICP Emirates ID Karama Dubai',
    ' | ICP Emirates ID Karama ESS',
    ' | ICP Emirates ID Dubai ESS',
    ' | ICP Emirates ID Dubai',
    ' | ICP Dubai ESS',
  ],
  municipality: [
    ' | Dubai Municipality Karama ESS',
    ' | Dubai Municipality Center ESS',
    ' | DM Ejari Center Karama Dubai',
    ' | DM Ejari Karama Dubai',
    ' | DM Ejari Dubai ESS',
    ' | DM Karama ESS',
  ],
  ohc: [
    ' | OHC Health Center Karama Dubai',
    ' | OHC Center Karama Dubai ESS',
    ' | OHC Center Karama Dubai',
    ' | OHC Center Dubai ESS',
    ' | OHC Dubai ESS',
  ],
  attestation: [
    ' | Atlas Attestation Karama Dubai',
    ' | Atlas Attestation Dubai ESS',
    ' | Atlas Attestation Karama',
    ' | Atlas Attestation Dubai',
    ' | Atlas Attest ESS',
  ],
  notary: [
    ' | Notary Public Karama Dubai ESS',
    ' | Notary Public Karama Dubai',
    ' | Notary Public Dubai ESS',
    ' | Notary Public Dubai',
    ' | Notary Dubai ESS',
  ],
  typing: [
    ' | Legal Translation Karama Dubai',
    ' | Legal Translation Dubai ESS',
    ' | Legal Translation Karama',
    ' | Legal Translation Dubai',
    ' | Translation Dubai ESS',
  ],
  salem: [
    ' | DHA Salem Medical Karama Dubai',
    ' | DHA Salem Medical Karama ESS',
    ' | DHA Salem Karama Dubai ESS',
    ' | DHA Salem Karama Dubai',
    ' | DHA Salem Dubai ESS',
    ' | DHA Salem Dubai',
  ],
  rta: [
    ' | RTA Services Karama Dubai ESS',
    ' | RTA Center Karama Dubai ESS',
    ' | RTA Center Karama Dubai',
    ' | RTA Center Dubai ESS',
    ' | RTA Dubai ESS',
  ],
  tawjeeh: [
    ' | Tawjeeh Center Karama Dubai ESS',
    ' | Tawjeeh Center Karama Dubai',
    ' | Tawjeeh Center Karama ESS',
    ' | Tawjeeh Center Dubai ESS',
    ' | Tawjeeh Dubai ESS',
  ],
  tadbeer: [
    ' | Tadbeer Center Karama Dubai ESS',
    ' | Tadbeer Center Karama Dubai',
    ' | Tadbeer Center Karama ESS',
    ' | Tadbeer Center Dubai ESS',
    ' | Tadbeer Dubai ESS',
  ],
  'vip-mobile': [
    ' | VIP Mobile Service Dubai ESS',
    ' | VIP Mobile Service Karama',
    ' | VIP Mobile Dubai ESS',
    ' | VIP Dubai ESS',
  ],
};

export function buildServiceTitle(service: ServiceItem): string {
  const title = service.titleEn;
  const dept = service.departmentId;
  const suffixes = DEPT_SUFFIXES[dept] || [
    ' | Karama Business Center Dubai',
    ' | Karama Business Center ESS',
    ' | ESS Karama Dubai',
    ' | ESS Dubai Center',
    ' | ESS Dubai',
  ];

  for (const suf of suffixes) {
    const cand = `${title}${suf}`.trim();
    if (cand.length >= 50 && cand.length <= 60) {
      return cand;
    }
  }

  const words = title.split(' ');
  while (words.length > 1) {
    words.pop();
    const shortTitle = words.join(' ');
    for (const suf of suffixes) {
      const cand = `${shortTitle}${suf}`.trim();
      if (cand.length >= 50 && cand.length <= 60) {
        return cand;
      }
    }
  }

  for (const suf of suffixes) {
    const cand = `${title} Dubai${suf}`.trim();
    if (cand.length >= 50 && cand.length <= 60) {
      return cand;
    }
  }

  return `${title} | Dubai Government ESS`.slice(0, 60);
}

export function buildServiceDesc(service: ServiceItem): string {
  let desc = (service.shortDescEn || '').replace(/\s+/g, ' ').trim();
  const dept = service.departmentId;
  const title = service.titleEn;

  if (desc.length < 120) {
    if (dept === 'amer') {
      desc = `Official Amer Center Karama processing for ${title}. Fast UAE residency visa, entry permits, and family sponsorship at authorized desk.`;
    } else if (dept === 'golden-visa') {
      desc = `Official 10-year UAE Golden Visa application for ${title} in Dubai. Fast-track pre-approval, nomination vetting & VIP Majlis support.`;
    } else if (dept === 'tasheel') {
      desc = `Authorized Tasheel Center Karama processing for ${title}. Electronic work permits, MOHRE labor contracts, and quota verification in Dubai.`;
    } else if (dept === 'salem') {
      desc = `DHA Salem medical fitness testing for ${title} at Karama Medical Center (KMFC). VIP 2-hour, urgent 6-hour & 24-hour visa medical results.`;
    } else {
      desc = `Authorized Karama Business Center processing for ${title} in Dubai. Fast-track government typing, document verification, and VIP support.`;
    }
  }

  if (desc.length >= 120 && desc.length <= 160) {
    return desc;
  }

  if (desc.length > 160) {
    const cut = desc.slice(0, 159).replace(/\s+\S*$/, '');
    const cleanCut = cut.endsWith('.') ? cut : `${cut}.`;
    if (cleanCut.length >= 120 && cleanCut.length <= 160) {
      return cleanCut;
    }
    return `${cleanCut.slice(0, 157)}...`;
  } else {
    const pads = [
      ' Fast official processing at Karama Center.',
      ' Fast authorized processing in Dubai.',
      ' Official service at Karama Center Dubai.',
      ' Fast-track processing in Dubai UAE.',
    ];
    for (const p of pads) {
      const cand = desc.replace(/\.+$/, '') + p;
      if (cand.length >= 120 && cand.length <= 160) {
        return cand;
      }
    }
    return `${desc} Fast official processing in Dubai.`.slice(0, 160);
  }
}

export function buildServiceKeywords(service: ServiceItem): string {
  const dept = service.departmentId;
  const title = service.titleEn;
  const baseKws: Record<string, string> = {
    amer: 'amer center, amer center near me, uae visa, residency visa dubai, family visa dubai, GDRFA dubai, amer license 772',
    'golden-visa': 'golden visa dubai, golden visa uae, 10 year visa uae, property investor golden visa, executive golden visa dubai',
    ded: 'pro services dubai, DET dubai, trade license renewal dubai, business setup dubai, commercial license dubai',
    tasheel: 'tasheel dubai, uae work permit, mohre labor contract, tasheel center dubai, electronic work permit',
    icp: 'emirates id renewal, emirates id status, ICP smart services, emirates id biometric dubai, renew emirates id',
    municipality: 'ejari services, ejari registration dubai, tenancy contract registration, dubai municipality permits, DLD ejari',
    ohc: 'ohc card dubai, occupational health card karama, food handlers medical, salon health card, dha occupational health',
    attestation: 'mofa attestation dubai, atlas attestation, degree attestation dubai, embassy legalization, apostille uae',
    notary: 'dubai notary public, power of attorney dubai, private notary karama, POA typing, MOA notary signing',
    typing: 'legal translation dubai, sworn translator dubai, MOJ certified translation, arabic translation dubai',
    salem: 'dha salem, medical for dubai visa, visa medical test karama, kmfc dubai, 2 hour express medical test',
    rta: 'driving license renewal dubai, vehicle mulkiya renewal, international driving permit, rta karama',
    tawjeeh: 'tawjeeh center, worker awareness class mohre, uae labor law orientation, tawjeeh karama',
    tadbeer: 'tadbeer karama, housemaid visa dubai, nanny visa sponsorship, domestic worker visa uae',
    'vip-mobile': 'vip mobile government van dubai, doorstep visa service dubai, VIP majlis government service',
  };

  const specificKws = baseKws[dept] || 'government services dubai, karama business center, ESS dubai';
  return `${title}, ${title} Dubai, ${specificKws}`;
}

/**
 * Builds Schema.org JSON-LD Structured Data conforming strictly to Google Rich Results manual
 */
export function getSchemaForRoute(
  route: string,
  canonicalUrl: string,
  options?: {
    deptId?: string;
    service?: ServiceItem;
    articleSlug?: string;
  }
): Record<string, unknown> {
  const cleanRoute = route.split('?')[0].split('#')[0].replace(/\/+$/, '') || '/';

  // 1. Homepage (/)
  if (cleanRoute === '/') {
    return {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebSite',
          '@id': 'https://ess.ae/#website',
          url: 'https://ess.ae',
          name: 'Karama Business Center - Emirates Secretarial Services',
          publisher: {
            '@id': 'https://ess.ae/#organization',
          },
          potentialAction: {
            '@type': 'SearchAction',
            target: 'https://ess.ae/search?q={search_term_string}',
            'query-input': 'required name=search_term_string',
          },
        },
        BASE_ORGANIZATION_SCHEMA,
      ],
    };
  }

  // 2. Medical Fitness Clinic Landing Page (/salem-medical-fitness-karama, /salem-medical-center-karama, /medical-fitness)
  if (
    cleanRoute.includes('salem-medical-fitness') ||
    cleanRoute.includes('salem-medical-center') ||
    cleanRoute === '/medical-fitness'
  ) {
    return {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'BreadcrumbList',
          '@id': `${canonicalUrl}#breadcrumb`,
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://ess.ae',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Medical Fitness Center (KMFC)',
              item: canonicalUrl,
            },
          ],
        },
        {
          '@type': 'MedicalClinic',
          '@id': 'https://ess.ae/#kmfc-clinic',
          name: 'Karama Medical Fitness Express Service Center (KMFC)',
          url: canonicalUrl,
          telephone: '+971-4-342-6666',
          parentOrganization: {
            '@id': 'https://ess.ae/#organization',
          },
          medicalSpecialty: [
            'https://schema.org/PublicHealth',
            'https://schema.org/OccupationalMedicine',
          ],
          accreditation: {
            '@type': 'GovernmentOrganization',
            name: 'Dubai Health Authority (DHA)',
            url: 'https://dha.gov.ae',
          },
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Ground Floor, Karama Business Center, Fajer Building, Al Karama',
            addressLocality: 'Dubai',
            addressRegion: 'Dubai',
            addressCountry: 'AE',
          },
          availableService: [
            {
              '@type': 'MedicalTest',
              name: 'Salem DHA Residency Visa Medical Test',
            },
            {
              '@type': 'MedicalTest',
              name: 'Dubai Municipality Occupational Health Card (OHC) Screening',
            },
            {
              '@type': 'MedicalTest',
              name: 'VIP Express 2-Hour Medical Fitness Examination',
            },
            {
              '@type': 'MedicalTest',
              name: 'Urgent 6-Hour Medical Fitness Examination',
            },
          ],
        },
      ],
    };
  }

  // 3. Clinical Medical Tests (e.g. Salem or OHC service subpages)
  if (options?.service && (options.service.departmentId === 'salem' || options.service.departmentId === 'ohc')) {
    const s = options.service;
    const isOhc = s.departmentId === 'ohc';
    const deptPath = isOhc ? 'ohc-center-karama' : 'salem-medical-fitness-karama';
    const deptName = isOhc ? 'Occupational Health Card (OHC)' : 'Medical Fitness (KMFC)';

    return {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'BreadcrumbList',
          '@id': `${canonicalUrl}#breadcrumb`,
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://ess.ae',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: deptName,
              item: `https://ess.ae/${deptPath}`,
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: s.titleEn,
              item: canonicalUrl,
            },
          ],
        },
        {
          '@type': 'MedicalTest',
          '@id': `${canonicalUrl}#test`,
          name: s.titleEn,
          description: s.shortDescEn || 'Mandatory medical examination for UAE residency visa issuance via DHA Salem system.',
          code: {
            '@type': 'MedicalCode',
            code: isOhc ? 'DHA-DM-OHC-CARD' : 'DHA-SALEM-RESIDENCY',
            codingSystem: 'Dubai Health Authority',
          },
          relevantSpecialty: {
            '@type': 'MedicalSpecialty',
            name: isOhc ? 'OccupationalMedicine' : 'PublicHealth',
          },
          bodyLocation: 'Blood, Lungs (Chest X-Ray)',
        },
        {
          '@type': 'FAQPage',
          '@id': `${canonicalUrl}#faq`,
          mainEntity: [
            {
              '@type': 'Question',
              name: 'What documents are required for the Salem Medical Fitness Test at Karama?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'You require your Original Passport, Original Emirates ID (for renewals), valid UAE Entry Permit copy, and 2 recent passport-size photos with a white background.',
              },
            },
            {
              '@type': 'Question',
              name: 'Is fasting required before taking the residency medical test?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'No, fasting is not required prior to standard UAE residency medical blood tests or chest X-rays.',
              },
            },
            {
              '@type': 'Question',
              name: 'How fast are medical test certificates certified by DHA?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'VIP Express results are delivered within 2 hours, Urgent within 6 hours, and Standard within 24 to 48 hours directly synced with GDRFA and ICP systems.',
              },
            },
          ],
        },
      ],
    };
  }

  // 4. Semi-Government Services (Amer, Golden Visa, DET, Tasheel, ICP, Notary, etc.)
  if (options?.service) {
    const s = options.service;
    const dept = DEPARTMENTS.find((d) => d.id === s.departmentId);
    const op = GOV_OPERATORS[s.departmentId] || {
      name: 'Government of Dubai',
      url: 'https://dubai.ae',
    };
    const deptSlug = getDepartmentPath(s.departmentId).replace(/^\//, '');

    return {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'BreadcrumbList',
          '@id': `${canonicalUrl}#breadcrumb`,
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://ess.ae',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: dept?.nameEn || s.departmentId.toUpperCase(),
              item: `https://ess.ae/${deptSlug}`,
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: s.titleEn,
              item: canonicalUrl,
            },
          ],
        },
        {
          '@type': 'GovernmentService',
          '@id': `${canonicalUrl}#service`,
          name: s.titleEn,
          serviceType: dept?.subTitleEn || 'Government Document Clearing',
          provider: {
            '@id': 'https://ess.ae/#organization',
          },
          serviceOperator: {
            '@type': 'GovernmentOrganization',
            name: op.name,
            url: op.url,
          },
          areaServed: {
            '@type': 'AdministrativeArea',
            name: 'Dubai, United Arab Emirates',
          },
          serviceAudience: {
            '@type': 'Audience',
            audienceType: 'UAE Residents, Expatriates, and Investors',
          },
        },
      ],
    };
  }

  // 5. Blog / Knowledge Hub Articles (/knowledge-hub/:slug)
  if (cleanRoute.startsWith('/knowledge-hub/')) {
    const slug = options?.articleSlug || cleanRoute.replace('/knowledge-hub/', '').trim();
    const blog = BLOG_POSTS.find((b) => b.slug === slug);
    const meta = ARTICLES_META[slug];
    const headline = meta?.title || blog?.titleEn || 'UAE Government Services Guide';
    const description = meta?.desc || blog?.excerptEn || 'Comprehensive guide on UAE government regulations and procedures.';
    const imagePath = blog?.featuredImage || '/assets/images/Main%20Banner,%20bg.webp';
    const imageUrl = imagePath.startsWith('http') ? imagePath : `https://ess.ae${imagePath}`;

    return {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'BreadcrumbList',
          '@id': `${canonicalUrl}#breadcrumb`,
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://ess.ae',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Knowledge Hub',
              item: 'https://ess.ae/knowledge-hub',
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: headline,
              item: canonicalUrl,
            },
          ],
        },
        {
          '@type': 'BlogPosting',
          '@id': `${canonicalUrl}#article`,
          headline,
          description,
          image: imageUrl,
          datePublished: blog?.publishedDate ? `${blog.publishedDate}T09:00:00+04:00` : '2026-02-15T09:00:00+04:00',
          dateModified: blog?.lastUpdatedDate ? `${blog.lastUpdatedDate}T11:30:00+04:00` : '2026-03-01T11:30:00+04:00',
          mainEntityOfPage: canonicalUrl,
          author: {
            '@type': 'Person',
            name: 'Compliance & Medical Review Desk',
            jobTitle: 'Head of Government Transactions',
            worksFor: {
              '@id': 'https://ess.ae/#organization',
            },
          },
          publisher: {
            '@id': 'https://ess.ae/#organization',
          },
        },
      ],
    };
  }

  // 6. Contact Us Page (/contact)
  if (cleanRoute === '/contact') {
    return {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'BreadcrumbList',
          '@id': 'https://ess.ae/contact#breadcrumb',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://ess.ae',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Contact Us',
              item: 'https://ess.ae/contact',
            },
          ],
        },
        {
          '@type': 'ContactPage',
          '@id': 'https://ess.ae/contact#webpage',
          url: 'https://ess.ae/contact',
          mainEntity: {
            '@type': 'GovernmentBuilding',
            '@id': 'https://ess.ae/#organization',
            name: 'Karama Business Center - Emirates Secretarial Services (ESS)',
            contactPoint: [
              {
                '@type': 'ContactPoint',
                telephone: '+971-4-342-6666',
                contactType: 'customer service',
                areaServed: 'AE',
                availableLanguage: ['Arabic', 'English', 'Hindi', 'Urdu'],
              },
              {
                '@type': 'ContactPoint',
                telephone: '+971-4-342-6667',
                contactType: 'technical support',
                name: 'KMFC Medical Fitness Inquiry Desk',
                areaServed: 'AE',
                availableLanguage: ['English', 'Arabic'],
              },
            ],
          },
        },
      ],
    };
  }

  // 7. Department Pages (e.g. /amer-center-karama, /det-center-karama, etc.)
  if (options?.deptId) {
    const dept = DEPARTMENTS.find((d) => d.id === options.deptId);
    const op = GOV_OPERATORS[options.deptId] || {
      name: 'Government of Dubai',
      url: 'https://dubai.ae',
    };

    return {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'BreadcrumbList',
          '@id': `${canonicalUrl}#breadcrumb`,
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://ess.ae',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: dept?.nameEn || 'Government Department',
              item: canonicalUrl,
            },
          ],
        },
        {
          '@type': 'GovernmentService',
          '@id': `${canonicalUrl}#department`,
          name: dept?.nameEn || 'Government Services Desk',
          serviceType: dept?.subTitleEn || 'Authorized Government Services',
          provider: {
            '@id': 'https://ess.ae/#organization',
          },
          serviceOperator: {
            '@type': 'GovernmentOrganization',
            name: op.name,
            url: op.url,
          },
          areaServed: {
            '@type': 'AdministrativeArea',
            name: 'Dubai, United Arab Emirates',
          },
        },
      ],
    };
  }

  // 8. General Core Pages (/about, /departments, /pricelist, /faq, etc.)
  const pageName = cleanRoute.replace(/^\//, '').replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        '@id': `${canonicalUrl}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://ess.ae',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: pageName,
            item: canonicalUrl,
          },
        ],
      },
      {
        '@type': 'WebPage',
        '@id': `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: pageName,
        publisher: {
          '@id': 'https://ess.ae/#organization',
        },
      },
    ],
  };
}

/**
 * Resolves full SEO data and page-specific Schema.org JSON-LD for any route
 */
export function getSeoForRoute(route: string): RouteSeoData {
  let cleanRoute = route.split('?')[0].split('#')[0].replace(/\/+$/, '') || '/';
  if (cleanRoute.startsWith('/ar/')) {
    cleanRoute = cleanRoute.replace(/^\/ar/, '') || '/';
  } else if (cleanRoute === '/ar') {
    cleanRoute = '/';
  }

  const canonicalUrl = cleanRoute === '/' ? `${CANONICAL_BASE}/` : `${CANONICAL_BASE}${cleanRoute}`;

  // 1. Core pages match
  if (CORE_PAGES_META[cleanRoute]) {
    const meta = CORE_PAGES_META[cleanRoute];
    const schema = getSchemaForRoute(cleanRoute, canonicalUrl);
    return {
      title: meta.title,
      description: meta.desc,
      keywords: meta.keywords,
      canonicalUrl,
      schema,
    };
  }

  // 2. Department pages (/department/:id)
  if (cleanRoute.startsWith('/department/')) {
    const deptId = cleanRoute.replace('/department/', '').trim();
    if (DEPARTMENTS_META[deptId]) {
      const meta = DEPARTMENTS_META[deptId];
      const schema = getSchemaForRoute(cleanRoute, canonicalUrl, { deptId });
      return {
        title: meta.title,
        description: meta.desc,
        keywords: meta.keywords,
        canonicalUrl,
        schema,
      };
    }
  }

  // 3. Knowledge hub articles (/knowledge-hub/:slug)
  if (cleanRoute.startsWith('/knowledge-hub/')) {
    const slug = cleanRoute.replace('/knowledge-hub/', '').trim();
    if (ARTICLES_META[slug]) {
      const meta = ARTICLES_META[slug];
      const schema = getSchemaForRoute(cleanRoute, canonicalUrl, { articleSlug: slug });
      return {
        title: meta.title,
        description: meta.desc,
        keywords: meta.keywords,
        canonicalUrl,
        schema,
      };
    }
  }

  // 4. Direct Department and Service routes (/amer-center-karama or /amer-center-karama/residency-visa-new)
  const parts = cleanRoute.split('/').filter(Boolean);
  if (parts.length > 0) {
    const dept = matchDepartmentBySlug(parts[0]);
    if (dept) {
      if (parts.length === 1) {
        if (DEPARTMENTS_META[dept.id]) {
          const meta = DEPARTMENTS_META[dept.id];
          const schema = getSchemaForRoute(cleanRoute, canonicalUrl, { deptId: dept.id });
          return {
            title: meta.title,
            description: meta.desc,
            keywords: meta.keywords,
            canonicalUrl,
            schema,
          };
        }
      } else if (parts.length >= 2) {
        const service = matchServiceBySlug(dept.id, parts[1]);
        if (service) {
          const schema = getSchemaForRoute(cleanRoute, canonicalUrl, { service });
          return {
            title: buildServiceTitle(service),
            description: buildServiceDesc(service),
            keywords: buildServiceKeywords(service),
            canonicalUrl,
            schema,
          };
        }
      }
    }
  }

  // 5. Fallback for /service/:id
  if (cleanRoute.startsWith('/service/')) {
    const rawServiceId = cleanRoute.replace('/service/', '').trim();
    const service = SERVICES.find(
      (s) => s.id === rawServiceId || getServiceUrlSlug(s.id) === rawServiceId
    );
    if (service) {
      const schema = getSchemaForRoute(cleanRoute, canonicalUrl, { service });
      return {
        title: buildServiceTitle(service),
        description: buildServiceDesc(service),
        keywords: buildServiceKeywords(service),
        canonicalUrl,
        schema,
      };
    }
  }

  // General Fallback
  const fallbackSchema = getSchemaForRoute(cleanRoute, canonicalUrl);
  return {
    title: 'Amer Center Karama Dubai | Government Services ESS KBC',
    description: 'Authorized private center for Amer (#772), Tasheel (#4108), DET, and DHA Salem medical fitness under one roof in Karama Dubai.',
    keywords: 'Amer Center Karama, amer center near me, uae visa, golden visa dubai, tasheel dubai, pro services dubai',
    canonicalUrl,
    schema: fallbackSchema,
  };
}

/**
 * Dynamically updates document.head tags & JSON-LD in the browser on client-side route changes
 */
export function applyRouteSeo(route: string): RouteSeoData {
  const seo = getSeoForRoute(route);

  // Update Page Title
  document.title = seo.title;

  // Update Meta Description
  let descTag = document.querySelector('meta[name="description"]');
  if (!descTag) {
    descTag = document.createElement('meta');
    descTag.setAttribute('name', 'description');
    document.head.appendChild(descTag);
  }
  descTag.setAttribute('content', seo.description);

  // Update Meta Keywords
  let kwTag = document.querySelector('meta[name="keywords"]');
  if (!kwTag) {
    kwTag = document.createElement('meta');
    kwTag.setAttribute('name', 'keywords');
    document.head.appendChild(kwTag);
  }
  kwTag.setAttribute('content', seo.keywords);

  // Update Canonical
  let canonTag = document.querySelector('link[rel="canonical"]');
  if (!canonTag) {
    canonTag = document.createElement('link');
    canonTag.setAttribute('rel', 'canonical');
    document.head.appendChild(canonTag);
  }
  canonTag.setAttribute('href', seo.canonicalUrl);

  // Update OpenGraph
  setMetaTag('meta[property="og:title"]', 'property', 'og:title', seo.title);
  setMetaTag('meta[property="og:description"]', 'property', 'og:description', seo.description);
  setMetaTag('meta[property="og:url"]', 'property', 'og:url', seo.canonicalUrl);

  // Update Twitter Cards
  setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', seo.title);
  setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', seo.description);

  // Update Dynamic JSON-LD Structured Data
  let scriptTag = document.getElementById('route-schema-jsonld') as HTMLScriptElement | null;
  if (!scriptTag) {
    scriptTag = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement | null;
    if (scriptTag) {
      scriptTag.id = 'route-schema-jsonld';
    }
  }
  if (!scriptTag) {
    scriptTag = document.createElement('script');
    scriptTag.id = 'route-schema-jsonld';
    scriptTag.type = 'application/ld+json';
    document.head.appendChild(scriptTag);
  }
  scriptTag.textContent = JSON.stringify(seo.schema, null, 2);

  return seo;
}

function setMetaTag(selector: string, attrName: string, attrValue: string, content: string) {
  let tag = document.querySelector(selector);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attrName, attrValue);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}
