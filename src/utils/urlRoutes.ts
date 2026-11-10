import { Language, ServiceItem } from '../types';
import { SERVICES, DEPARTMENTS } from '../data/departmentsData';

export const CANONICAL_BASE = 'https://ess.ae';

/**
 * Canonical URL slugs for all 14 authorized government departments at Karama Business Center
 */
export const DEPARTMENT_CANONICAL_SLUGS: Record<string, string> = {
  amer: 'amer-center-karama',
  'golden-visa': 'golden-visa-center-karama',
  ded: 'det-center-karama',
  tasheel: 'tasheel-center-karama',
  icp: 'icp-center-karama',
  municipality: 'dubai-municipality-center-karama',
  ohc: 'ohc-center-karama',
  attestation: 'atlas-attestation-center-karama',
  notary: 'notary-courts-center-karama',
  salem: 'salem-medical-fitness-karama',
  rta: 'rta-center-karama',
  tawjeeh: 'tawjeeh-center-karama',
  tadbeer: 'tadbeer-center-karama',
  'vip-mobile': 'vip-mobile-center-karama',
};

/**
 * Reverse mapping from any recognized department alias/slug to the canonical department ID
 */
export const DEPARTMENT_ALIAS_TO_ID: Record<string, string> = {
  // Amer
  'amer-center-karama': 'amer',
  amer: 'amer',
  'amer-center': 'amer',
  gdrfa: 'amer',

  // Golden Visa
  'golden-visa-center-karama': 'golden-visa',
  'golden-visa': 'golden-visa',
  goldenvisa: 'golden-visa',
  'golden-visa-karama': 'golden-visa',

  // DET (Economy & Tourism)
  'det-center-karama': 'ded',
  'ded-center-karama': 'ded',
  det: 'ded',
  ded: 'ded',
  'det-center': 'ded',
  'ded-karama': 'ded',
  'invest-in-dubai': 'ded',

  // Tasheel (MoHRE)
  'tasheel-center-karama': 'tasheel',
  tasheel: 'tasheel',
  mohre: 'tasheel',
  'tasheel-center': 'tasheel',

  // ICP (Emirates ID)
  'icp-center-karama': 'icp',
  icp: 'icp',
  'emirates-id': 'icp',
  'icp-center': 'icp',

  // Dubai Municipality & Ejari
  'dubai-municipality-center-karama': 'municipality',
  'municipality-center-karama': 'municipality',
  municipality: 'municipality',
  dm: 'municipality',
  'dubai-municipality': 'municipality',
  'dld-ejari': 'municipality',
  ejari: 'municipality',

  // OHC (Occupational Health)
  'ohc-center-karama': 'ohc',
  ohc: 'ohc',
  'occupational-health': 'ohc',
  'ohc-center': 'ohc',

  // Atlas Attestation
  'atlas-attestation-center-karama': 'attestation',
  'atlas-attestation-karama': 'attestation',
  'atlas-attestation': 'attestation',
  atlas: 'attestation',
  attestation: 'attestation',
  typing: 'attestation',

  // Notary & Courts
  'notary-courts-center-karama': 'notary',
  'notary-center-karama': 'notary',
  notary: 'notary',
  courts: 'notary',
  'notary-courts': 'notary',
  'dubai-courts': 'notary',

  // Karama Medical Fitness (KMFC / Salem)
  'salem-medical-fitness-karama': 'salem',
  'salem-medical-center-karama': 'salem',
  'salem-center-karama': 'salem',
  salem: 'salem',
  kmfc: 'salem',
  'medical-fitness': 'salem',

  // RTA
  'rta-center-karama': 'rta',
  rta: 'rta',
  'rta-center': 'rta',

  // Tawjeeh & Zajel
  'tawjeeh-center-karama': 'tawjeeh',
  tawjeeh: 'tawjeeh',
  zajel: 'tawjeeh',
  'tawjeeh-zajel': 'tawjeeh',
  'zajel-tawjeeh': 'tawjeeh',

  // Tadbeer
  'tadbeer-center-karama': 'tadbeer',
  tadbeer: 'tadbeer',
  'tadbeer-center': 'tadbeer',

  // VIP Mobile
  'vip-mobile-center-karama': 'vip-mobile',
  'vip-mobile': 'vip-mobile',
  vip: 'vip-mobile',
  'vip-concierge': 'vip-mobile',
  'mobile-van': 'vip-mobile',
};

export const LEGACY_SERVICE_MAP: Record<string, string> = {
  // Amer legacy routes
  'amer-residency-new-renewal-golden': 'amer-residency-visa-new',
  'amer-sponsorship-parents-dependents-family': 'amer-family-sponsorship-visa',
  'amer-entry-permits-tourist-job-work': 'amer-tourist-visit-visa',
  'amer-status-visa-hold-unhold': 'amer-visa-status-change',
  'amer-establishment-card-block-removal': 'amer-establishment-card',
  'amer-portal-mobile-number-update': 'amer-portal-mobile-update',
  'amer-staff-absconding-fine-reduction': 'amer-fine-reduction',
  // DET legacy combined routes
  'det-licensing-new-instant-etrader': 'det-commercial-license-new',
  'det-activity-partner-manager-amendments': 'det-license-amendment-partner-activity',
  'det-trade-name-moa-lsa-signing': 'det-trade-name-reservation',
  'det-permits-mulin-ads-sales-kiosks': 'det-commercial-permits-mulin',
  'det-compliance-fines-cancellations': 'det-license-cancellation-liquidation',
  // Tasheel legacy combined routes
  'tasheel-work-permits-quota-new-mission': 'tasheel-electronic-work-permit-new',
  'tasheel-offer-letters-labour-contracts': 'tasheel-job-offer-unified-contract',
  'tasheel-company-file-esign-card': 'tasheel-company-establishment-card',
  'tasheel-noc-family-issuance': 'tasheel-family-sponsorship-work-permit',
  'tasheel-labour-claims-absconding': 'tasheel-labour-cancellation-absconding',
};

/**
 * Strips department prefix from service ID to produce clean canonical service slug
 * e.g. 'amer-residency-visa-new' -> 'residency-visa-new'
 */
export function getServiceUrlSlug(serviceId: string): string {
  if (!serviceId) return '';
  return serviceId.replace(
    /^(amer|det|ded|tasheel|icp|dm|ohc|atlas|typing|notary|courts|salem|rta|tawjeeh|tadbeer|vip-mobile|vip|golden-visa)-/,
    ''
  );
}

/**
 * Returns canonical department path (e.g. '/amer-center-karama' or '/ar/amer-center-karama')
 */
export function getDepartmentPath(deptId: string, lang: Language = 'en'): string {
  const normalizedDeptId = deptId === 'typing' || deptId === 'atlas' ? 'attestation' : deptId;
  const slug = DEPARTMENT_CANONICAL_SLUGS[normalizedDeptId] || normalizedDeptId;
  const prefix = lang === 'ar' ? '/ar' : '';
  return `${prefix}/${slug}`;
}

/**
 * Returns canonical service path (e.g. '/amer-center-karama/residency-visa-new')
 */
export function getServicePath(serviceId: string, deptId?: string, lang: Language = 'en'): string {
  let matchedDeptId = deptId;
  if (!matchedDeptId) {
    const service = SERVICES.find((s) => s.id === serviceId);
    matchedDeptId = service?.departmentId || 'amer';
  }
  const cleanServiceSlug = getServiceUrlSlug(serviceId);
  const deptPath = getDepartmentPath(matchedDeptId, lang);
  return `${deptPath}/${cleanServiceSlug}`;
}

/**
 * Matches a department slug or alias back to a Department object
 */
export function matchDepartmentBySlug(slug: string) {
  if (!slug) return undefined;
  const clean = slug.toLowerCase().trim().replace(/^\/?(department|departments)\//, '').replace(/^\//, '');
  const deptId = DEPARTMENT_ALIAS_TO_ID[clean] || clean;
  return DEPARTMENTS.find((d) => d.id === deptId);
}

/**
 * Matches a service by its slug, full id, or legacy name within a department
 */
export function matchServiceBySlug(deptId: string, serviceSlug: string): ServiceItem | undefined {
  if (!serviceSlug) return undefined;
  const clean = serviceSlug.toLowerCase().trim().replace(/^service\//, '');

  // 1. Direct match by service ID
  const direct = SERVICES.find((s) => s.id === clean && s.departmentId === deptId);
  if (direct) return direct;

  // 2. Legacy service map
  const legacyTarget = LEGACY_SERVICE_MAP[clean];
  if (legacyTarget) {
    const legacyMatched = SERVICES.find((s) => s.id === legacyTarget);
    if (legacyMatched) return legacyMatched;
  }

  // 3. Match by clean URL slug within the department
  const matched = SERVICES.find((s) => {
    if (s.departmentId !== deptId) return false;
    return getServiceUrlSlug(s.id) === clean || s.id === clean;
  });
  if (matched) return matched;

  // 4. Fallback search across all services regardless of department
  return SERVICES.find((s) => s.id === clean || getServiceUrlSlug(s.id) === clean);
}
