import { Language, PageView, ServiceItem } from '../types';
import { SERVICES, DEPARTMENTS } from '../data/departmentsData';

export const CANONICAL_BASE = 'https://ess.ae';

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

export interface RouteResolution {
  pageView: PageView;
  language: Language;
  canonicalPath: string;
  isLegacyRedirect?: boolean;
}

/**
 * Resolves browser pathname & hash into a strongly typed PageView and canonical path.
 * Supports:
 * - English paths: /services/:deptId/:serviceId, /departments/:deptId, /pricelist, /about, /contact
 * - Arabic paths: /ar/services/:deptId/:serviceId, /ar/departments/:deptId, /ar/pricelist
 * - Legacy hash compatibility: /#service/:serviceId, /#department/:deptId
 */
export function resolveRoute(
  pathname: string = window.location.pathname,
  hash: string = window.location.hash
): RouteResolution {
  let lang: Language = 'en';
  let path = pathname.trim() || '/';

  // Check language prefix
  if (path.startsWith('/ar/') || path === '/ar') {
    lang = 'ar';
    path = path.replace(/^\/ar/, '') || '/';
  }

  // Remove trailing slash if not root
  if (path.length > 1 && path.endsWith('/')) {
    path = path.slice(0, -1);
  }

  // Check legacy hash migration first if on root path
  if ((path === '/' || path === '') && hash) {
    const cleanHash = hash.replace(/^#/, '').trim();
    if (cleanHash.startsWith('service/')) {
      let rawId = cleanHash.replace('service/', '').trim();
      const mappedId = LEGACY_SERVICE_MAP[rawId] || rawId;
      const service = SERVICES.find((s) => s.id === mappedId);
      if (service) {
        const canonical = `${lang === 'ar' ? '/ar' : ''}/services/${service.departmentId}/${service.id}`;
        return {
          pageView: { type: 'service', serviceId: service.id, deptId: service.departmentId },
          language: lang,
          canonicalPath: canonical,
          isLegacyRedirect: true,
        };
      }
    } else if (cleanHash.startsWith('department/')) {
      const deptId = cleanHash.replace('department/', '').trim();
      const dept = DEPARTMENTS.find((d) => d.id === deptId);
      if (dept) {
        const canonical = `${lang === 'ar' ? '/ar' : ''}/departments/${dept.id}`;
        return {
          pageView: { type: 'department', deptId: dept.id },
          language: lang,
          canonicalPath: canonical,
          isLegacyRedirect: true,
        };
      }
    } else if (cleanHash === 'pricelist' || cleanHash === 'pricing' || cleanHash === 'calculator') {
      const canonical = `${lang === 'ar' ? '/ar' : ''}/pricelist`;
      return { pageView: { type: 'pricelist' }, language: lang, canonicalPath: canonical, isLegacyRedirect: true };
    } else if (cleanHash === 'contact') {
      const canonical = `${lang === 'ar' ? '/ar' : ''}/contact`;
      return { pageView: { type: 'contact' }, language: lang, canonicalPath: canonical, isLegacyRedirect: true };
    } else if (cleanHash === 'about') {
      const canonical = `${lang === 'ar' ? '/ar' : ''}/about`;
      return { pageView: { type: 'about' }, language: lang, canonicalPath: canonical, isLegacyRedirect: true };
    } else if (cleanHash === 'departments' || cleanHash === 'services') {
      const canonical = `${lang === 'ar' ? '/ar' : ''}/departments`;
      return { pageView: { type: 'departments' }, language: lang, canonicalPath: canonical, isLegacyRedirect: true };
    }
  }

  // Parse path segments
  const segments = path.split('/').filter(Boolean);

  if (segments.length === 0) {
    return {
      pageView: { type: 'home' },
      language: lang,
      canonicalPath: lang === 'ar' ? '/ar' : '/',
    };
  }

  const primary = segments[0];

  // Service routes: /services/:deptId/:serviceId OR /service/:serviceId
  if (primary === 'services' || primary === 'service') {
    let serviceId = '';
    let deptId = '';

    if (segments.length >= 3) {
      deptId = segments[1];
      serviceId = segments[2];
    } else if (segments.length === 2) {
      serviceId = segments[1];
    }

    if (serviceId) {
      serviceId = LEGACY_SERVICE_MAP[serviceId] || serviceId;
      const matched = SERVICES.find((s) => s.id === serviceId);
      if (matched) {
        deptId = matched.departmentId;
        const canonical = `${lang === 'ar' ? '/ar' : ''}/services/${deptId}/${matched.id}`;
        return {
          pageView: { type: 'service', serviceId: matched.id, deptId },
          language: lang,
          canonicalPath: canonical,
        };
      }
    }

    // Invalid service ID
    return {
      pageView: { type: 'not_found', requestedPath: pathname },
      language: lang,
      canonicalPath: pathname,
    };
  }

  // Department routes: /departments/:deptId or /departments
  if (primary === 'departments' || primary === 'department') {
    if (segments.length >= 2) {
      const targetDeptId = segments[1];
      const dept = DEPARTMENTS.find((d) => d.id === targetDeptId);
      if (dept) {
        return {
          pageView: { type: 'department', deptId: dept.id },
          language: lang,
          canonicalPath: `${lang === 'ar' ? '/ar' : ''}/departments/${dept.id}`,
        };
      }
      return {
        pageView: { type: 'not_found', requestedPath: pathname },
        language: lang,
        canonicalPath: pathname,
      };
    }
    return {
      pageView: { type: 'departments' },
      language: lang,
      canonicalPath: `${lang === 'ar' ? '/ar' : ''}/departments`,
    };
  }

  // Standard pages
  if (primary === 'pricelist' || primary === 'pricing' || primary === 'calculator') {
    return {
      pageView: { type: 'pricelist' },
      language: lang,
      canonicalPath: `${lang === 'ar' ? '/ar' : ''}/pricelist`,
    };
  }

  if (primary === 'about') {
    return {
      pageView: { type: 'about' },
      language: lang,
      canonicalPath: `${lang === 'ar' ? '/ar' : ''}/about`,
    };
  }

  if (primary === 'contact') {
    return {
      pageView: { type: 'contact' },
      language: lang,
      canonicalPath: `${lang === 'ar' ? '/ar' : ''}/contact`,
    };
  }

  if (primary === 'team') {
    return {
      pageView: { type: 'team' },
      language: lang,
      canonicalPath: `${lang === 'ar' ? '/ar' : ''}/team`,
    };
  }

  if (primary === 'ceo') {
    return {
      pageView: { type: 'ceo' },
      language: lang,
      canonicalPath: `${lang === 'ar' ? '/ar' : ''}/ceo`,
    };
  }

  if (primary === 'awards' || primary === 'certificates') {
    return {
      pageView: { type: 'awards' },
      language: lang,
      canonicalPath: `${lang === 'ar' ? '/ar' : ''}/awards`,
    };
  }

  if (primary === 'clients' || primary === 'customers') {
    return {
      pageView: { type: 'clients' },
      language: lang,
      canonicalPath: `${lang === 'ar' ? '/ar' : ''}/clients`,
    };
  }

  if (primary === 'events') {
    return {
      pageView: { type: 'events' },
      language: lang,
      canonicalPath: `${lang === 'ar' ? '/ar' : ''}/events`,
    };
  }

  if (primary === 'gallery') {
    return {
      pageView: { type: 'gallery' },
      language: lang,
      canonicalPath: `${lang === 'ar' ? '/ar' : ''}/gallery`,
    };
  }

  if (primary === 'faq') {
    return {
      pageView: { type: 'faq' },
      language: lang,
      canonicalPath: `${lang === 'ar' ? '/ar' : ''}/faq`,
    };
  }

  if (primary === 'blog' || primary === 'knowledge-hub') {
    const slug = segments[1];
    return {
      pageView: { type: 'blog', postSlug: slug },
      language: lang,
      canonicalPath: `${lang === 'ar' ? '/ar' : ''}/knowledge-hub${slug ? `/${slug}` : ''}`,
    };
  }

  // Any unmatched path is 404
  return {
    pageView: { type: 'not_found', requestedPath: pathname },
    language: lang,
    canonicalPath: pathname,
  };
}

/**
 * Constructs the canonical path for any given PageView and language
 */
export function buildPath(pageView: PageView, lang: Language): string {
  const prefix = lang === 'ar' ? '/ar' : '';

  switch (pageView.type) {
    case 'home':
      return prefix || '/';
    case 'about':
      return `${prefix}/about`;
    case 'departments':
      return `${prefix}/departments`;
    case 'department':
      return `${prefix}/departments/${pageView.deptId}`;
    case 'service': {
      let deptId = pageView.deptId;
      if (!deptId) {
        const found = SERVICES.find((s) => s.id === pageView.serviceId);
        deptId = found?.departmentId || 'amer';
      }
      return `${prefix}/services/${deptId}/${pageView.serviceId}`;
    }
    case 'pricelist':
      return `${prefix}/pricelist`;
    case 'contact':
      return `${prefix}/contact`;
    case 'team':
      return `${prefix}/team`;
    case 'ceo':
      return `${prefix}/ceo`;
    case 'awards':
      return `${prefix}/awards`;
    case 'clients':
      return `${prefix}/clients`;
    case 'events':
      return `${prefix}/events`;
    case 'gallery':
      return `${prefix}/gallery`;
    case 'faq':
      return `${prefix}/faq`;
    case 'blog':
      return pageView.postSlug ? `${prefix}/knowledge-hub/${pageView.postSlug}` : `${prefix}/knowledge-hub`;
    case 'not_found':
      return pageView.requestedPath || (prefix || '/');
    default:
      return prefix || '/';
  }
}

/**
 * Generates reciprocal language URLs for a given canonical path.
 */
export function getAlternateUrls(pageView: PageView): {
  enUrl: string;
  arUrl: string;
  defaultUrl: string;
} {
  const enPath = buildPath(pageView, 'en');
  const arPath = buildPath(pageView, 'ar');

  return {
    enUrl: `${CANONICAL_BASE}${enPath}`,
    arUrl: `${CANONICAL_BASE}${arPath}`,
    defaultUrl: `${CANONICAL_BASE}${enPath}`,
  };
}
