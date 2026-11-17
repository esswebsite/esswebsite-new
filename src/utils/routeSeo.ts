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
import { AMER_OFFICIAL_GBP, AMER_SAME_AS } from '../data/socialAndMapLinks';
import { AMER_SERVICES_RICH_MAP } from '../data/amerServicesExtendedData';

export interface RouteSeoData {
  title: string;
  description: string;
  keywords: string;
  canonicalUrl: string;
  schema: Record<string, unknown>;
}

export const CANONICAL_BASE = 'https://ess.ae';

/**
 * Dedicated Amer Center Karama Schema Node (Strictly isolated from other departments)
 * Identified as authorized service provider in Al Karama assisting with GDRFA transactions.
 */
export const AMER_CENTER_ENTITY_SCHEMA = {
  '@type': ['LocalBusiness', 'ProfessionalService'],
  '@id': 'https://ess.ae/amer-center-karama/#amer-center',
  name: 'Amer Center Karama Dubai',
  alternateName: [
    'Amer Center Al Karama',
    'Amer Centre Karama',
    'Amer Center Bur Dubai',
    'Amer Center Dubai',
    'Amer Center License 772',
  ],
  url: 'https://ess.ae/amer-center-karama/',
  telephone: '+971-4-342-6666',
  email: 'info@ess.ae',
  hasMap: AMER_OFFICIAL_GBP.shareUrl,
  sameAs: [...AMER_SAME_AS],
  parentOrganization: {
    '@id': 'https://ess.ae/#organization',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Ground Floor, Al Fajer Building, Opposite Central Karama Post Office, Al Karama',
    addressLocality: 'Dubai',
    addressRegion: 'Dubai',
    postalCode: '00000',
    addressCountry: 'AE',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 25.2453731,
    longitude: 55.309525,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '20:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday'],
      opens: '08:00',
      closes: '17:00',
    },
  ],
  priceRange: '$$',
};

// Base Organization Schema Node (Consistent @id across Knowledge Graph)
export const BASE_ORGANIZATION_SCHEMA = {
  '@type': 'GovernmentBuilding',
  '@id': 'https://ess.ae/#organization',
  name: 'Karama Medical and Fitness Center',
  alternateName: [
    'Karama Medical Center',
    'Karama Medical Fitness Express Service Center',
    'KMFC',
    'Karama Business Center',
    'Emirates Secretarial Services Al Karama',
    'ESS',
    'KBC',
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
    name: 'Karama Medical and Fitness Center VIP Concierge',
    url: 'https://ess.ae',
  },
};

// Specific metadata for core pages (55-60 chars title, 120-160 chars desc, ZERO Amer keywords)
export const CORE_PAGES_META: Record<string, { title: string; desc: string; keywords: string }> = {
  '/': {
    title: 'Karama Medical and Fitness Center | Dubai Visa & PRO Hub',
    desc: 'Official Karama Medical and Fitness Center in Dubai. Express DHA Salem visa medicals, UAE residency, Golden Visa, Tasheel & DET PRO services.',
    keywords: 'Karama Medical and Fitness Center, Karama Medical Center Dubai, dha salem medical, uae visa dubai, golden visa dubai, tasheel dubai, pro services dubai, emirates id renewal',
  },
  '/about': {
    title: 'About Karama Medical and Fitness Center | Dubai PRO Hub',
    desc: 'Over 20 years of authorized Dubai DHA medical fitness and government PRO services at Karama Medical and Fitness Center. Fast, certified processing.',
    keywords: 'About Karama Medical and Fitness Center, Karama Medical Center, Karama Business Center, Tasheel Dubai, Dubai PRO center, authorized government typing Dubai',
  },
  '/departments': {
    title: '14 Dubai Service Centers | Karama Medical & Fitness Hub',
    desc: 'Access 14 official departments under one roof at Karama Medical and Fitness Center: DHA Salem medical, GDRFA visa, Tasheel, DET, ICP & notary.',
    keywords: 'Government departments Dubai, Karama Medical and Fitness Center, DET licensing Dubai, Tasheel MOHRE Dubai, ICP Emirates ID typing, DHA Salem medical',
  },
  '/knowledge-hub': {
    title: 'UAE Visa & Medical Guides | Karama Medical & Fitness Hub',
    desc: 'Authoritative UAE visa guides, DHA Salem medical tips, Golden Visa rules, Emirates ID steps & DET business setup by Karama Medical and Fitness Center.',
    keywords: 'UAE visa guide, Dubai residence renewal guide, Golden Visa eligibility rules, Emirates ID renewal steps, Karama Medical and Fitness Center',
  },
  '/faq': {
    title: 'Dubai Visa & Medical FAQ | Karama Medical Fitness Center',
    desc: 'Find answers on DHA Salem medical fitness tests, UAE residence visas, Golden Visa eligibility, DET trade licenses & Tasheel at Karama Medical Center.',
    keywords: 'Dubai visa FAQ, Salem medical fitness test FAQ, Golden Visa questions Dubai, trade license renewal FAQ, Karama Medical and Fitness Center',
  },
  '/contact': {
    title: 'Contact Karama Medical and Fitness Center | Location Map',
    desc: 'Visit Karama Medical and Fitness Center next to Karama Post Office Dubai. Call +971 4 342 6666 for DHA Salem medicals & express VIP PRO support.',
    keywords: 'Contact Karama Medical and Fitness Center, Karama Medical Center location, DHA Salem Karama contact, Karama Business Center phone, government services Karama',
  },
  '/team': {
    title: 'Our PRO & Medical Team | Karama Medical & Fitness Center',
    desc: 'Meet our licensed PRO officers, DHA medical fitness staff, and legal specialists at Karama Medical and Fitness Center in Al Karama, Dubai.',
    keywords: 'Karama Medical and Fitness Center team, certified PRO Dubai, government liaison officers, DHA medical staff Karama, Karama Medical Center team',
  },
  '/ceo': {
    title: 'CEO Vision & Message | Karama Medical and Fitness Center',
    desc: 'Leadership message from Karama Medical and Fitness Center on delivering fast, transparent DHA medical fitness and Dubai government services.',
    keywords: 'CEO Karama Medical and Fitness Center, Karama Medical Center leadership, Dubai government services vision, corporate governance Dubai',
  },
  '/awards': {
    title: 'Awards & Honors | Karama Medical and Fitness Center UAE',
    desc: 'Recognized excellence: Official DHA Salem accreditations, GDRFA excellence honors & Dubai awards earned by Karama Medical and Fitness Center.',
    keywords: 'DHA approved center Dubai, GDRFA awards, Karama Medical and Fitness Center awards, government accreditation Dubai, KMFC certifications',
  },
  '/clients': {
    title: 'Corporate PRO Partners | Karama Medical & Fitness Center',
    desc: 'Trusted medical fitness and corporate PRO partner for multinational firms, hospitality groups, and enterprises at Karama Medical and Fitness Center.',
    keywords: 'Corporate PRO Dubai, enterprise immigration management, group visa medical Dubai, corporate secretarial UAE, Karama Medical and Fitness Center',
  },
  '/events': {
    title: 'Community Events & Visits | Karama Medical & Fitness Hub',
    desc: 'Explore community health drives, government delegation visits, and service milestones hosted at Karama Medical and Fitness Center in Dubai.',
    keywords: 'Karama Medical and Fitness Center events, government delegations Karama, community health initiatives Dubai, business center milestones',
  },
  '/gallery': {
    title: 'Facility Gallery & VIP Majlis | Karama Medical & Fitness',
    desc: 'View photos of our DHA Salem medical fitness clinic, 14-counter government hall, and private VIP Majlis lounge at Karama Medical and Fitness Center.',
    keywords: 'Karama Medical and Fitness Center gallery, Karama Medical Center photos, VIP Majlis lounge Dubai, DHA Salem clinic Al Karama',
  },
};

// Specific metadata for 14 authorized departments (55-60 chars title, 120-160 chars desc)
// NOTE: Amer keywords strictly used ONLY on 'amer' department.
export const DEPARTMENTS_META: Record<string, { title: string; desc: string; keywords: string }> = {
  amer: {
    title: 'Amer Center Karama Dubai | UAE Visa & Immigration Services',
    desc: 'Looking for an Amer Center in Karama, Dubai? Get help with UAE residence visas, renewals, cancellations, family visas, visit visas and immigration services.',
    keywords: 'Amer Center, Amer Center Karama, Amer Center Dubai, Amer Centre, Amer Services, Amer Center Near Me, Amer Visa Services, Amer Immigration Services, Amer Typing Center, Amer Center Bur Dubai',
  },
  'golden-visa': {
    title: 'Golden Visa Dubai UAE | Karama Medical & Fitness Center',
    desc: 'Apply for 10-year UAE Golden Visa in Dubai for investors & executives at Karama Medical and Fitness Center. Fast VIP approvals & Salem medical.',
    keywords: 'Golden Visa Dubai, golden visa uae, 10 year visa UAE, Golden Visa Karama, property investor Golden Visa, Karama Medical and Fitness Center',
  },
  ded: {
    title: 'DET Business Setup Dubai | Karama Medical & Fitness Hub',
    desc: 'Authorized DET center at Karama Medical and Fitness Center in Dubai. Commercial trade licenses, Instant license, e-Trader, renewals & Ejari.',
    keywords: 'DET Dubai, DED Dubai license renewal, instant license Dubai, e-trader license, trade name reservation, Karama Medical and Fitness Center',
  },
  tasheel: {
    title: 'Tasheel Work Permits Dubai | Karama Medical and Fitness',
    desc: 'Authorized Tasheel Center (#4108) at Karama Medical and Fitness Center. Electronic work permits, MOHRE labor contracts & quota verification.',
    keywords: 'Tasheel Karama, tasheel dubai, Tasheel center Dubai, MOHRE work permit, electronic work permit renewal, Karama Medical and Fitness Center',
  },
  icp: {
    title: 'ICP Emirates ID Typing | Karama Medical & Fitness Center',
    desc: 'Authorized ICP Emirates ID typing at Karama Medical and Fitness Center Dubai. Urgent biometric booking, new applications, renewal & replacement.',
    keywords: 'ICP Dubai, emirates id renewal, emirates id status, new Emirates ID, Emirates ID urgent biometrics, Karama Medical and Fitness Center',
  },
  municipality: {
    title: 'Dubai Municipality Ejari | Karama Medical & Fitness Hub',
    desc: 'Dubai Municipality & DLD Ejari desk at Karama Medical and Fitness Center. Official Ejari tenancy registration, cancellation & Montaji approvals.',
    keywords: 'Ejari registration Karama, ejari services, DLD Ejari cancellation, Dubai Municipality permits, Montaji registration, Karama Medical and Fitness Center',
  },
  ohc: {
    title: 'OHC Health Card Dubai | Karama Medical & Fitness Center',
    desc: 'Authorized Occupational Health Card (OHC) testing at Karama Medical and Fitness Center Dubai. Fast screening for food handlers, salons & drivers.',
    keywords: 'OHC card Dubai, occupational health card Karama, food handlers card Dubai, salon health card, Karama Medical and Fitness Center',
  },
  attestation: {
    title: 'MOFA Document Attestation | Karama Medical & Fitness Hub',
    desc: 'Official Atlas & MOFA attestation at Karama Medical and Fitness Center Dubai. Fast embassy legalization, degree equivalency & apostille services.',
    keywords: 'Atlas Attestation Dubai, MOFA attestation Dubai, certificate attestation Karama, embassy legalization Dubai, Karama Medical and Fitness Center',
  },
  notary: {
    title: 'Dubai Courts Notary & POA | Karama Medical & Fitness Hub',
    desc: 'Certified Dubai Courts & Private Notary at Karama Medical and Fitness Center. Power of Attorney (POA), corporate MOA signing & legal petitions.',
    keywords: 'Dubai notary public, private notary Karama, Power of Attorney Dubai, POA typing, MOA notary signing, Karama Medical and Fitness Center',
  },
  typing: {
    title: 'MOJ Legal Translation | Karama Medical & Fitness Center',
    desc: 'MOJ certified legal translation in 30+ languages, NOC petition drafting & corporate resolutions at Karama Medical and Fitness Center in Dubai.',
    keywords: 'Legal translation Dubai, MOJ certified translation Karama, Arabic translation Dubai, government NOC typing, Karama Medical and Fitness Center',
  },
  salem: {
    title: 'DHA Salem Medical Test | Karama Medical & Fitness Center',
    desc: 'Authorized DHA Salem clinic at Karama Medical and Fitness Center (KMFC). Express 2-hour VIP, urgent 6-hour & 24-hour UAE visa medical results.',
    keywords: 'Karama Medical and Fitness Center, DHA Salem Karama, medical for dubai visa, KMFC Dubai, visa medical test Karama, express medical fitness',
  },
  rta: {
    title: 'RTA Driving & Mulkiya Desk | Karama Medical and Fitness',
    desc: 'Official RTA services at Karama Medical and Fitness Center Dubai. Driving license renewal, vehicle Mulkiya registration & International Permits.',
    keywords: 'RTA Karama, driving license renewal Dubai, vehicle Mulkiya renewal, international driving permit IDP, Karama Medical and Fitness Center',
  },
  tawjeeh: {
    title: 'Tawjeeh Worker Awareness | Karama Medical & Fitness Hub',
    desc: 'Authorized Tawjeeh desk at Karama Medical and Fitness Center Dubai. Mandatory worker awareness classes in 16 languages & MOHRE contract handover.',
    keywords: 'tawjeeh center, Tawjeeh Karama, Tawjeeh center Dubai, worker awareness class MOHRE, Karama Medical and Fitness Center',
  },
  tadbeer: {
    title: 'Tadbeer Maid Visa Dubai | Karama Medical & Fitness Center',
    desc: 'Licensed Tadbeer desk at Karama Medical and Fitness Center Dubai. Full domestic worker sponsorship, housemaid visas, nanny permits & medicals.',
    keywords: 'Tadbeer Karama, housemaid visa Dubai, nanny visa sponsorship, domestic worker visa UAE, Karama Medical and Fitness Center',
  },
  'vip-mobile': {
    title: 'VIP Mobile Govt Concierge | Karama Medical & Fitness Hub',
    desc: 'Luxury VIP mobile government concierge from Karama Medical and Fitness Center Dubai. Doorstep residency PRO, biometrics & Salem blood tests.',
    keywords: 'VIP mobile government concierge Dubai, doorstep visa medical Dubai, VIP Majlis government service, Karama Medical and Fitness Center',
  },
};

// Curated 20 Knowledge Hub guides (55-60 chars title, 120-160 chars desc, ZERO Amer keywords)
export const ARTICLES_META: Record<string, { title: string; desc: string; keywords: string }> = {
  'emirates-id-renewal-guide': {
    title: 'Emirates ID Renewal Guide 2026 | Karama Medical Fitness',
    desc: 'Official guide on Emirates ID renewal at Karama Medical and Fitness Center. Step-by-step biometric booking, required documents & fast ICP filing.',
    keywords: 'emirates id renewal, emirates id status, ICP smart services, Emirates ID biometrics Dubai, Karama Medical and Fitness Center',
  },
  'uae-residence-visa-renewal': {
    title: 'UAE Residence Visa Renewal Guide | Karama Medical Center',
    desc: 'Complete guide on UAE residency visa renewal in Dubai. GDRFA document requirements, 2-year steps, Salem medical fitness & Emirates ID renewal.',
    keywords: 'uae residence visa renewal, dubai residency renewal, Karama Medical and Fitness Center, residence visa renewal documents, GDRFA renewal',
  },
  'uae-visa-status-change': {
    title: 'UAE Visa Status Change Guide | Karama Medical & Fitness',
    desc: 'Learn how to change your UAE visa status inside the country without exit at Karama Medical and Fitness Center. Official GDRFA status change tips.',
    keywords: 'uae visa status change, inside country status change, Karama Medical and Fitness Center, status change without exit, visa transfer dubai',
  },
  'uae-overstay-fines-guide': {
    title: 'UAE Overstay Fines Guide 2026 | Karama Medical & Fitness',
    desc: 'Check and reduce UAE overstay visa fines at Karama Medical and Fitness Center. Step-by-step GDRFA fine waiver petitions & outpass clearance.',
    keywords: 'overstay fine in uae, reduce visa fine dubai, check overstay fines, outpass uae, Karama Medical and Fitness Center',
  },
  'uae-golden-visa-eligibility': {
    title: 'UAE Golden Visa Guide 2026 | Karama Medical and Fitness',
    desc: 'Complete 10-year UAE Golden Visa eligibility guide for real estate investors, executives & doctors at Karama Medical and Fitness Center Dubai.',
    keywords: 'golden visa dubai, golden visa uae, 10 year visa uae, property investor golden visa, Karama Medical and Fitness Center',
  },
  'dubai-trade-licence-guide': {
    title: 'Dubai Trade License Guide 2026 | Karama Medical Fitness',
    desc: 'How to choose the right Dubai trade license: commercial, professional & industrial. 100% foreign ownership rules via Karama Medical and Fitness Center.',
    keywords: 'dubai trade license, trade license dubai with visa, DET business setup, mainland commercial license, Karama Medical and Fitness Center',
  },
  'dubai-instant-licence': {
    title: 'Dubai Instant License Guide | Karama Medical and Fitness',
    desc: 'Issue your Dubai trade license instantly without a lease agreement for year one at Karama Medical and Fitness Center. Eligibility & DET steps.',
    keywords: 'dubai instant licence, instant trade license dubai, DET instant license, start business dubai, Karama Medical and Fitness Center',
  },
  'dubai-trade-licence-renewal': {
    title: 'Dubai License Renewal & Ejari | Karama Medical & Fitness',
    desc: 'Step-by-step trade license renewal at Karama Medical and Fitness Center Dubai. Required Ejari certificate, partner passports & penalty prevention.',
    keywords: 'dubai trade license renewal, renew trade license dubai, ejari trade license renewal, DET license renewal, Karama Medical and Fitness Center',
  },
  'uae-work-permit-guide': {
    title: 'UAE Work Permit Guide 2026 | Karama Medical and Fitness',
    desc: 'Comprehensive guide to UAE electronic work permits at Karama Medical and Fitness Center. Quota approvals, MOHRE offer letters & Tasheel contracts.',
    keywords: 'tasheel dubai, uae work permit, electronic work permit mohre, labor contract dubai, Karama Medical and Fitness Center',
  },
  'uae-employment-contract-changes': {
    title: 'UAE Labor Contract Changes | Karama Medical and Fitness',
    desc: 'How to modify job titles, amend salary in MOHRE contracts, and process work permit cancellations smoothly at Karama Medical and Fitness Center.',
    keywords: 'uae employment contract changes, mohre contract amendment, work permit cancellation dubai, Karama Medical and Fitness Center',
  },
  'uae-wage-protection-system': {
    title: 'UAE WPS Payroll Compliance | Karama Medical and Fitness',
    desc: 'Complete guide on UAE Wage Protection System (WPS) compliance for companies at Karama Medical and Fitness Center. Avoid MOHRE blocks & delays.',
    keywords: 'wps uae, wage protection system compliance, mohre wps salary transfer, corporate pro services dubai, Karama Medical and Fitness Center',
  },
  'dubai-ejari-registration-guide': {
    title: 'Dubai Ejari Registration 2026 | Karama Medical & Fitness',
    desc: 'Official guide for tenancy contract Ejari registration at Karama Medical and Fitness Center Dubai. Required tenant & landlord documents explained.',
    keywords: 'ejari services, ejari registration dubai, tenancy contract registration, dld ejari karama, Karama Medical and Fitness Center',
  },
  'ejari-digital-services': {
    title: 'Digital Ejari & Tenancy Guide | Karama Medical & Fitness',
    desc: 'Explore digital Ejari renewal, cancellation, and title deed verification online and at Karama Medical and Fitness Center for fast DLD compliance.',
    keywords: 'digital ejari, ejari cancellation dubai, title deed verification, dld cube, Karama Medical and Fitness Center',
  },
  'uae-residency-medical-fitness': {
    title: 'UAE Visa Medical Fitness Guide | Karama Medical Fitness',
    desc: 'Everything about DHA Salem medical fitness tests at Karama Medical and Fitness Center (KMFC). Blood tests, chest X-rays & VIP 2-hour results.',
    keywords: 'Karama Medical and Fitness Center, medical for dubai visa, dha salem, visa medical test karama, 2 hour express medical test',
  },
  'dubai-occupational-health-card': {
    title: 'Dubai OHC Health Card Guide | Karama Medical and Fitness',
    desc: 'Mandatory Occupational Health Card (OHC) requirements at Karama Medical and Fitness Center Dubai for food handlers, restaurant staff & drivers.',
    keywords: 'ohc card dubai, occupational health card karama, food handlers medical test, salon staff health card, Karama Medical and Fitness Center',
  },
  'uae-document-attestation-guide': {
    title: 'UAE Document Attestation Guide | Karama Medical Fitness',
    desc: 'Complete step-by-step guide to attesting birth, marriage & degree certificates at Karama Medical and Fitness Center. MOFA & embassy legalization.',
    keywords: 'mofa attestation dubai, atlas attestation, degree attestation uae, marriage certificate attestation, Karama Medical and Fitness Center',
  },
  'mofa-digital-attestation': {
    title: 'MOFA Digital Attestation Guide | Karama Medical Fitness',
    desc: 'Understand digital MOFA e-attestation versus courier legalization at Karama Medical and Fitness Center Dubai. Turnaround & apostille details.',
    keywords: 'digital attestation mofa, mofa online verification, apostille dubai, atlas attestation karama, Karama Medical and Fitness Center',
  },
  'uae-legal-translation-guide': {
    title: 'UAE MOJ Legal Translation Guide | Karama Medical Center',
    desc: 'When is Ministry of Justice (MOJ) certified translation required in Dubai? Court filings, embassies & 30+ languages at Karama Medical Center.',
    keywords: 'legal translation dubai, sworn translator dubai, moj certified translation, arabic translation karama, Karama Medical and Fitness Center',
  },
  'uae-corporate-tax-compliance': {
    title: 'UAE Corporate Tax Guide 2026 | Karama Medical & Fitness',
    desc: 'Essential UAE Corporate Tax checks for SMEs and freezone firms at Karama Medical and Fitness Center. FTA registration & 9% threshold compliance.',
    keywords: 'uae corporate tax guide, fta tax registration, corporate tax compliance, small business tax dubai, Karama Medical and Fitness Center',
  },
  'dubai-sme-business-support': {
    title: 'Dubai SME Business Support | Karama Medical and Fitness',
    desc: 'Learn about Dubai SME incentives, licensing exemptions, government procurement benefits & startup support at Karama Medical and Fitness Center.',
    keywords: 'dubai sme business support, DET startup incentives, entrepreneur business setup, trade license support, Karama Medical and Fitness Center',
  },
};

// Amer suffixes strictly isolated to 'amer' department. All others brand Karama Medical and Fitness Center.
const KARAMA_MEDICAL_SUFFIXES = [
  ' | Karama Medical and Fitness Center',
  ' | Karama Medical & Fitness Center',
  ' | Karama Medical Fitness Center',
  ' | Karama Medical & Fitness Hub',
  ' | Karama Medical Fitness Dubai',
  ' | Karama Medical & Fitness',
  ' | Karama Medical Fitness',
  ' | Karama Medical Center',
  ' | Karama Medical Hub',
  ' | Karama Fitness',
  ' | KMFC Dubai',
];

const DEPT_SUFFIXES: Record<string, string[]> = {
  amer: [
    ' | Amer Center Karama Dubai UAE',
    ' | Amer Center Karama Dubai',
    ' | Amer Center Al Karama',
    ' | Amer Center Dubai UAE',
    ' | Amer Center Dubai',
    ' | Amer Karama Dubai',
    ' | Amer Dubai UAE',
  ],
  'golden-visa': KARAMA_MEDICAL_SUFFIXES,
  ded: KARAMA_MEDICAL_SUFFIXES,
  tasheel: KARAMA_MEDICAL_SUFFIXES,
  icp: KARAMA_MEDICAL_SUFFIXES,
  municipality: KARAMA_MEDICAL_SUFFIXES,
  ohc: KARAMA_MEDICAL_SUFFIXES,
  attestation: KARAMA_MEDICAL_SUFFIXES,
  notary: KARAMA_MEDICAL_SUFFIXES,
  typing: KARAMA_MEDICAL_SUFFIXES,
  salem: KARAMA_MEDICAL_SUFFIXES,
  rta: KARAMA_MEDICAL_SUFFIXES,
  tawjeeh: KARAMA_MEDICAL_SUFFIXES,
  tadbeer: KARAMA_MEDICAL_SUFFIXES,
  'vip-mobile': KARAMA_MEDICAL_SUFFIXES,
};

const DANGLING_END_WORDS = new Set([
  '&',
  '-',
  '–',
  '/',
  ',',
  '(',
  'and',
  'or',
  'for',
  'of',
  'in',
  'with',
  'on',
  'to',
  'the',
  'a',
]);

function cleanTrimWords(raw: string): string {
  const parts = raw.trim().split(/\s+/);
  while (parts.length > 1) {
    const rawLast = parts[parts.length - 1];
    const cleanLast = rawLast.toLowerCase().replace(/[,:;.\-]+$/, '');
    if (
      DANGLING_END_WORDS.has(cleanLast) ||
      rawLast.endsWith('(') ||
      rawLast.endsWith('&') ||
      rawLast.endsWith(',') ||
      rawLast.endsWith('/') ||
      rawLast.endsWith('-')
    ) {
      parts.pop();
      continue;
    }
    break;
  }
  let res = parts.join(' ').replace(/[,:;\-\/&(\s]+$/, '').trim();
  const openIdx = res.lastIndexOf('(');
  const closeIdx = res.lastIndexOf(')');
  if (openIdx > closeIdx) {
    res = res.slice(0, openIdx).replace(/[,:;\-\/&(\s]+$/, '').trim();
  }
  return res;
}

function generateTitleVariants(title: string): string[] {
  const variants: string[] = [];
  const seen = new Set<string>();
  const add = (v: string) => {
    const cleaned = v.replace(/\s+/g, ' ').trim();
    if (cleaned && !seen.has(cleaned)) {
      seen.add(cleaned);
      variants.push(cleaned);
    }
  };

  add(title);
  const noParens = title.replace(/\s*\([^)]*\)/g, '').replace(/\s+/g, ' ').trim();
  add(noParens);

  if (title.includes(':')) {
    add(title.split(':')[0].trim());
  }
  if (noParens.includes(',')) {
    add(noParens.split(',')[0].trim());
  }

  // Word trims on noParens first (cleaner), then full title
  for (const base of [noParens, title]) {
    const words = base.split(' ');
    for (let len = words.length - 1; len >= 2; len--) {
      add(cleanTrimWords(words.slice(0, len).join(' ')));
    }
  }

  // Padded variants for short service titles so we always reach 55-60 chars
  add(`${title} Dubai`);
  add(`${title} in Dubai`);
  add(`${noParens} Dubai`);
  add(`${noParens} in Dubai`);
  add(`Dubai ${noParens}`);

  return variants;
}

const SERVICE_TITLE_OVERRIDES: Record<string, string> = {
  'golden-visa-entrepreneur': 'Golden Visa for Entrepreneurs | Karama Medical & Fitness',
  'golden-visa-family': 'Golden Visa for Family | Karama Medical and Fitness Center',
  'det-commercial-license-new': 'Commercial Trade License LLC | Karama Medical & Fitness',
  'det-etrader-license': 'DED E-Trader License | Karama Medical and Fitness Center',
  'det-trade-name-reservation': 'Trade Name Reservation Dubai | Karama Medical & Fitness',
  'det-license-amendment-partner-activity': 'DET License Amendment | Karama Medical and Fitness Center',
  'det-commercial-permits-mulin': "DET Commercial Permits Mu'lin | Karama Medical & Fitness",
  'det-license-cancellation-liquidation': 'Company License Cancellation | Karama Medical & Fitness',
  'tasheel-electronic-work-permit-new': 'Electronic Work Permit | Karama Medical and Fitness Center',
  'tasheel-work-permit-renewal': 'Work Permit Renewal (2 Years) | Karama Medical & Fitness',
  'tasheel-job-offer-unified-contract': 'MoHRE Labor Contract | Karama Medical and Fitness Center',
  'tasheel-esignature-card-issuance': 'MoHRE E-Signature Smart Card | Karama Medical & Fitness',
  'tasheel-mission-work-permit': 'Mission Work Permit | Karama Medical and Fitness Center',
  'tasheel-part-time-work-permit': 'Part-Time Work Permit | Karama Medical and Fitness Center',
  'icp-emirates-id-new': 'New Emirates ID Typing | Karama Medical and Fitness Center',
  'icp-emirates-id-renewal': 'Emirates ID Renewal | Karama Medical and Fitness Center',
  'icp-urgent-biometric-appointment': 'Urgent Biometric Appointment | Karama Medical & Fitness',
  'icp-zajel-courier-delivery': 'Emirates ID Courier | Karama Medical and Fitness Center',
  'dm-ejari-cancellation': 'Ejari Cancellation Hub | Karama Medical and Fitness Center',
  'dm-product-registration-montaji': 'Montaji Product Registration | Karama Medical & Fitness',
  'dm-signage-advertising-permits': 'DM Signage Permits Hub | Karama Medical and Fitness Center',
  'ohc-food-handlers-card': 'Food Handlers OHC Card | Karama Medical and Fitness Center',
  'ohc-salon-beauty-spa-card': 'Salon & Spa OHC Card | Karama Medical and Fitness Center',
  'ohc-construction-rta-drivers-card': 'Drivers & Workers OHC | Karama Medical and Fitness Center',
  'ohc-healthcare-dha-doctor-license-card': 'Medical Staff OHC Card | Karama Medical and Fitness Center',
  'atlas-mofa-attestation': 'UAE MOFA Attestation | Karama Medical and Fitness Center',
  'atlas-embassy-consulate-legalization': 'Embassy Legalization | Karama Medical and Fitness Center',
  'atlas-apostille-global-certification': 'Hague Apostille Hub | Karama Medical and Fitness Center',
  'atlas-degree-education-equivalency': 'Degree Attestation Hub | Karama Medical and Fitness Center',
  'atlas-marriage-birth-personal-attestation': 'Marriage & Birth Attestation | Karama Medical & Fitness',
  'atlas-police-clearance-good-conduct': 'Dubai Police Clearance | Karama Medical and Fitness Center',
  'notary-power-of-attorney-poa': 'Power of Attorney POA | Karama Medical and Fitness Center',
  'notary-corporate-moa-addendum': 'Corporate MOA Notary | Karama Medical and Fitness Center',
  'typing-moj-certified-legal-translation': 'MOJ Legal Translation | Karama Medical and Fitness Center',
  'typing-government-noc-letters-petitions': 'NOC & Mercy Appeals | Karama Medical and Fitness Center',
  'salem-standard-medical-fitness-24hr': '24-Hour Visa Medical | Karama Medical and Fitness Center',
  'salem-urgent-medical-fitness-6hr': '6-Hour Urgent Visa Medical | Karama Medical and Fitness',
  'salem-vip-medical-fitness-2hr': '2-Hour VIP Visa Medical | Karama Medical and Fitness Center',
  'salem-car-blood-collection-service': 'Drive-Through Medical | Karama Medical and Fitness Center',
  'salem-home-office-screening': 'Mobile Home & Office Medical | Karama Medical & Fitness',
  'salem-blood-type-pregnancy-tests': 'Blood Group & Pregnancy Test | Karama Medical & Fitness',
  'rta-driving-license-renewal': 'Driving License Renewal | Karama Medical and Fitness Center',
  'rta-vehicle-mulkiya-renewal': 'Vehicle Mulkiya Renewal | Karama Medical and Fitness Center',
  'tawjeeh-worker-awareness-classes': 'MoHRE Tawjeeh Classes | Karama Medical and Fitness Center',
  'tawjeeh-eid-passport-delivery': 'Zajel Priority Courier | Karama Medical and Fitness Center',
  'tawjeeh-labour-law-legal-advice': 'UAE Labour Law Advisory | Karama Medical and Fitness Center',
  'tadbeer-center-sponsorship-package': 'Tadbeer Center Package | Karama Medical and Fitness Center',
  'vip-mobile-government-van': 'Mobile VIP Concierge | Karama Medical and Fitness Center',
  'vip-majlis-executive-lounge': 'VIP Majlis Lounge Hub | Karama Medical and Fitness Center',
  'vip-corporate-boardroom-concierge': 'Corporate VIP Service | Karama Medical and Fitness Center',
};

export function buildServiceTitle(service: ServiceItem): string {
  if (SERVICE_TITLE_OVERRIDES[service.id]) {
    return SERVICE_TITLE_OVERRIDES[service.id];
  }
  const title = service.titleEn;
  const dept = service.departmentId;
  const suffixes = DEPT_SUFFIXES[dept] || KARAMA_MEDICAL_SUFFIXES;
  const variants = generateTitleVariants(title);

  // Target bands: prioritize 55-60 chars first, then 54-60, then 52-60, then 50-60
  const bands: [number, number][] = [
    [55, 60],
    [54, 60],
    [52, 60],
    [50, 60],
  ];

  // For each band, try full/clean variants first (indices 0..3) before word-trimmed variants
  for (const [minLen, maxLen] of bands) {
    for (const v of variants) {
      for (const suf of suffixes) {
        const cand = `${v}${suf}`.trim();
        if (cand.length >= minLen && cand.length <= maxLen) {
          return cand;
        }
      }
    }
  }

  return `${variants[1] || title} | Karama Medical Fitness`.slice(0, 60).trim();
}

export function buildServiceDesc(service: ServiceItem): string {
  let desc = (service.shortDescEn || '').replace(/\s+/g, ' ').trim();
  const dept = service.departmentId;
  const title = service.titleEn;

  // Strictly prevent Amer keywords from leaking into any non-Amer service description
  if (dept !== 'amer') {
    desc = desc
      .replace(/\bAmer Center\b/gi, 'Karama Medical Center')
      .replace(/\bAmer\b/gi, 'GDRFA');
  }

  if (desc.length < 120) {
    if (dept === 'amer') {
      desc = `Official Amer Center Karama processing for ${title}. Fast UAE residency visa, entry permits, and family sponsorship at authorized desk.`;
    } else if (dept === 'golden-visa') {
      desc = `Official 10-year UAE Golden Visa service for ${title} at Karama Medical and Fitness Center. Fast VIP pre-approval & Salem medical.`;
    } else if (dept === 'tasheel') {
      desc = `Authorized Tasheel (#4108) processing for ${title} at Karama Medical and Fitness Center Dubai. Electronic work permits & MOHRE contracts.`;
    } else if (dept === 'salem') {
      desc = `DHA Salem medical fitness testing for ${title} at Karama Medical and Fitness Center (KMFC). VIP 2-hour, urgent 6-hour & 24-hour results.`;
    } else {
      desc = `Authorized processing for ${title} at Karama Medical and Fitness Center in Dubai. Fast-track typing, document audit & VIP support.`;
    }
  }

  if (desc.length >= 120 && desc.length <= 160) {
    return desc;
  }

  if (desc.length > 160) {
    const cut = desc.slice(0, 158).replace(/\s+\S*$/, '').replace(/[,:;\-\/&(\s]+$/, '');
    const cleanCut = cut.endsWith('.') ? cut : `${cut}.`;
    if (cleanCut.length >= 120 && cleanCut.length <= 160) {
      return cleanCut;
    }
    const baseShort = cleanCut.slice(0, 118).replace(/\s+\S*$/, '');
    const fallbackTail =
      dept === 'amer'
        ? ' Fast official Amer Center processing in Karama Dubai.'
        : ' Fast service at Karama Medical and Fitness Center.';
    const combined = `${baseShort.replace(/\.+$/, '')}.${fallbackTail}`;
    return combined.length <= 160 ? combined : combined.slice(0, 159).replace(/\s+\S*$/, '') + '.';
  } else {
    const pads =
      dept === 'amer'
        ? [
            ' Fast official processing at Amer Center Karama.',
            ' Authorized GDRFA service in Karama Dubai.',
            ' Fast processing in Karama Dubai.',
          ]
        : [
            ' Fast service at Karama Medical and Fitness Center.',
            ' Processed at Karama Medical and Fitness Center.',
            ' Fast official processing at Karama Medical.',
            ' Fast authorized processing in Karama Dubai.',
          ];
    for (const p of pads) {
      const cand = desc.replace(/\.+$/, '') + p;
      if (cand.length >= 120 && cand.length <= 160) {
        return cand;
      }
    }
    return `${desc.replace(/\.+$/, '')}. Fast processing at Karama Medical and Fitness Center.`.slice(0, 160);
  }
}

export function buildServiceKeywords(service: ServiceItem): string {
  const dept = service.departmentId;
  const title = service.titleEn;
  const baseKws: Record<string, string> = {
    amer: 'Amer Center, Amer Center Karama, Amer Center Dubai, Amer Center Near Me, Amer Visa Services, Amer Immigration Services, Amer Typing Center, uae visa, residency visa dubai, GDRFA dubai',
    'golden-visa': 'Karama Medical and Fitness Center, golden visa dubai, golden visa uae, 10 year visa uae, property investor golden visa, executive golden visa dubai',
    ded: 'Karama Medical and Fitness Center, pro services dubai, DET dubai, trade license renewal dubai, business setup dubai, commercial license dubai',
    tasheel: 'Karama Medical and Fitness Center, tasheel dubai, uae work permit, mohre labor contract, tasheel center dubai, electronic work permit',
    icp: 'Karama Medical and Fitness Center, emirates id renewal, emirates id status, ICP smart services, emirates id biometric dubai, renew emirates id',
    municipality: 'Karama Medical and Fitness Center, ejari services, ejari registration dubai, tenancy contract registration, dubai municipality permits, DLD ejari',
    ohc: 'Karama Medical and Fitness Center, ohc card dubai, occupational health card karama, food handlers medical, salon health card, dha occupational health',
    attestation: 'Karama Medical and Fitness Center, mofa attestation dubai, atlas attestation, degree attestation dubai, embassy legalization, apostille uae',
    notary: 'Karama Medical and Fitness Center, dubai notary public, power of attorney dubai, private notary karama, POA typing, MOA notary signing',
    typing: 'Karama Medical and Fitness Center, legal translation dubai, sworn translator dubai, MOJ certified translation, arabic translation dubai',
    salem: 'Karama Medical and Fitness Center, dha salem, medical for dubai visa, visa medical test karama, kmfc dubai, 2 hour express medical test',
    rta: 'Karama Medical and Fitness Center, driving license renewal dubai, vehicle mulkiya renewal, international driving permit, rta karama',
    tawjeeh: 'Karama Medical and Fitness Center, tawjeeh center, worker awareness class mohre, uae labor law orientation, tawjeeh karama',
    tadbeer: 'Karama Medical and Fitness Center, tadbeer karama, housemaid visa dubai, nanny visa sponsorship, domestic worker visa uae',
    'vip-mobile': 'Karama Medical and Fitness Center, vip mobile government concierge dubai, doorstep visa medical dubai, VIP majlis service',
  };

  const specificKws = baseKws[dept] || 'Karama Medical and Fitness Center, government services dubai, Karama Medical Center';
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
          name: 'Karama Medical and Fitness Center',
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
    const isAmer = s.departmentId === 'amer';
    const dept = DEPARTMENTS.find((d) => d.id === s.departmentId);
    const op = GOV_OPERATORS[s.departmentId] || {
      name: 'Government of Dubai',
      url: 'https://dubai.ae',
    };
    const deptSlug = getDepartmentPath(s.departmentId).replace(/^\//, '');

    const graphElements: Record<string, unknown>[] = [
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
            name: isAmer ? 'Amer Center Karama' : (dept?.nameEn || s.departmentId.toUpperCase()),
            item: isAmer ? 'https://ess.ae/amer-center-karama/' : `https://ess.ae/${deptSlug}`,
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
          '@id': isAmer ? 'https://ess.ae/amer-center-karama/#amer-center' : 'https://ess.ae/#organization',
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
    ];

    // If Amer service, also attach rich FAQPage schema if available
    if (isAmer && AMER_SERVICES_RICH_MAP[s.id]?.faqs?.length) {
      const richFaqs = AMER_SERVICES_RICH_MAP[s.id].faqs;
      graphElements.push({
        '@type': 'FAQPage',
        '@id': `${canonicalUrl}#faq`,
        mainEntity: richFaqs.map((faq) => ({
          '@type': 'Question',
          name: faq.questionEn,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answerEn,
          },
        })),
      });
    }

    return {
      '@context': 'https://schema.org',
      '@graph': graphElements,
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
            name: 'Karama Medical and Fitness Center',
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
    if (options.deptId === 'amer') {
      return {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'BreadcrumbList',
            '@id': 'https://ess.ae/amer-center-karama/#breadcrumb',
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
                name: 'Amer Center Karama',
                item: 'https://ess.ae/amer-center-karama/',
              },
            ],
          },
          AMER_CENTER_ENTITY_SCHEMA,
          {
            '@type': 'GovernmentService',
            '@id': 'https://ess.ae/amer-center-karama/#service',
            name: 'Amer Center Immigration & Visa Services Karama',
            serviceType: 'Immigration & Residency Services',
            provider: {
              '@id': 'https://ess.ae/amer-center-karama/#amer-center',
            },
            serviceOperator: {
              '@type': 'GovernmentOrganization',
              name: 'General Directorate of Residency and Foreigners Affairs (GDRFA)',
              url: 'https://gdrfad.gov.ae',
            },
            areaServed: {
              '@type': 'AdministrativeArea',
              name: 'Dubai, United Arab Emirates',
            },
          },
          {
            '@type': 'FAQPage',
            '@id': 'https://ess.ae/amer-center-karama/#faq',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'Where is Amer Center located in Karama, Dubai?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Amer Center Karama is situated on the Ground Floor of Al Fajer Building, directly opposite the Central Karama Post Office in Al Karama, Dubai.',
                },
              },
              {
                '@type': 'Question',
                name: 'What services does Amer Center Karama provide?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Amer Center Karama provides comprehensive processing for UAE residence visas (new, renewal, cancellation), family sponsorship, visit visas, status change, overstay fine reduction, and absconding clearance under official GDRFA authority.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can I complete DHA medical fitness and Emirates ID biometrics at Amer Center Karama?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. Our integrated facility directly co-locates the Karama Medical Fitness Express Service Center (KMFC / Salem) and ICP biometrics terminals under one roof for complete one-stop processing.',
                },
              },
              {
                '@type': 'Question',
                name: 'What are the working hours of Amer Center Karama?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Amer Center Karama is open Monday to Friday from 8:00 AM to 8:00 PM, and Saturday from 8:00 AM to 5:00 PM. We are closed on Sundays.',
                },
              },
            ],
          },
        ],
      };
    }

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

  // 0. Internal hidden audit page (/internal)
  if (cleanRoute === '/internal') {
    const schema = getSchemaForRoute(cleanRoute, canonicalUrl);
    return {
      title: 'Internal Sitemap & SEO Audit | Karama Medical & Fitness',
      description: 'Internal hidden technical SEO, sitemap, meta tags, keywords, canonical URLs, JSON-LD schema, and social link audit for ess.ae.',
      keywords: 'internal audit, sitemap, meta title, meta description, schema, canonical links',
      canonicalUrl,
      schema,
    };
  }

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

  // General Fallback (ZERO Amer keywords; main brand: Karama Medical and Fitness Center)
  const fallbackSchema = getSchemaForRoute(cleanRoute, canonicalUrl);
  return {
    title: 'Karama Medical and Fitness Center | Dubai Visa & PRO Hub',
    description: 'Authorized Karama Medical and Fitness Center in Dubai for DHA Salem medical fitness, UAE residency, Tasheel (#4108) & DET services.',
    keywords: 'Karama Medical and Fitness Center, Karama Medical Center, dha salem, uae visa, golden visa dubai, tasheel dubai, pro services dubai',
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

  // Update Robots (strictly noindex, nofollow for hidden /internal page)
  const cleanPath = route.split('?')[0].split('#')[0].replace(/\/+$/, '') || '/';
  const isHiddenInternal = cleanPath === '/internal' || cleanPath === '/ar/internal';
  setMetaTag('meta[name="robots"]', 'name', 'robots', isHiddenInternal ? 'noindex, nofollow' : 'index, follow');

  // Update OpenGraph
  setMetaTag('meta[property="og:title"]', 'property', 'og:title', seo.title);
  setMetaTag('meta[property="og:description"]', 'property', 'og:description', seo.description);
  setMetaTag('meta[property="og:site_name"]', 'property', 'og:site_name', 'Karama Medical and Fitness Center');
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
