import { Language, PageView } from '../types';
import { SERVICES, DEPARTMENTS } from '../data/departmentsData';
import {
  CANONICAL_BASE,
  DEPARTMENT_CANONICAL_SLUGS,
  DEPARTMENT_ALIAS_TO_ID,
  LEGACY_SERVICE_MAP,
  getServiceUrlSlug,
  getDepartmentPath,
  getServicePath,
  matchDepartmentBySlug,
  matchServiceBySlug,
} from './urlRoutes';

export {
  CANONICAL_BASE,
  DEPARTMENT_CANONICAL_SLUGS,
  DEPARTMENT_ALIAS_TO_ID,
  LEGACY_SERVICE_MAP,
  getServiceUrlSlug,
  getDepartmentPath,
  getServicePath,
  matchDepartmentBySlug,
  matchServiceBySlug,
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
 * - Direct department routes: /amer-center-karama, /det-center-karama, /amer, /det
 * - Direct service routes: /amer-center-karama/residency-visa-new, /det-center-karama/instant-license
 * - Arabic counterparts: /ar/amer-center-karama, /ar/amer-center-karama/residency-visa-new
 * - Legacy compatibility: /department/:id, /service/:id, /services/:deptId/:id
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
      const rawId = cleanHash.replace('service/', '').trim();
      const mappedId = LEGACY_SERVICE_MAP[rawId] || rawId;
      const service = SERVICES.find((s) => s.id === mappedId || getServiceUrlSlug(s.id) === mappedId);
      if (service) {
        const canonical = getServicePath(service.id, service.departmentId, lang);
        return {
          pageView: { type: 'service', serviceId: service.id, deptId: service.departmentId },
          language: lang,
          canonicalPath: canonical,
          isLegacyRedirect: true,
        };
      }
    } else if (cleanHash.startsWith('department/')) {
      const deptId = cleanHash.replace('department/', '').trim();
      const dept = matchDepartmentBySlug(deptId);
      if (dept) {
        const canonical = getDepartmentPath(dept.id, lang);
        return {
          pageView: { type: 'department', deptId: dept.id },
          language: lang,
          canonicalPath: canonical,
          isLegacyRedirect: true,
        };
      }
    } else if (cleanHash === 'pricelist' || cleanHash === 'pricing' || cleanHash === 'calculator') {
      const canonical = `${lang === 'ar' ? '/ar' : ''}/departments`;
      return { pageView: { type: 'departments' }, language: lang, canonicalPath: canonical, isLegacyRedirect: true };
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

  // Standard static pages
  if (primary === 'about') {
    return { pageView: { type: 'about' }, language: lang, canonicalPath: `${lang === 'ar' ? '/ar' : ''}/about` };
  }
  if (primary === 'departments' && segments.length === 1) {
    return { pageView: { type: 'departments' }, language: lang, canonicalPath: `${lang === 'ar' ? '/ar' : ''}/departments` };
  }
  if (primary === 'pricelist' || primary === 'pricing' || primary === 'calculator') {
    return { pageView: { type: 'departments' }, language: lang, canonicalPath: `${lang === 'ar' ? '/ar' : ''}/departments` };
  }
  if (primary === 'contact') {
    return { pageView: { type: 'contact' }, language: lang, canonicalPath: `${lang === 'ar' ? '/ar' : ''}/contact` };
  }
  if (primary === 'team') {
    return { pageView: { type: 'team' }, language: lang, canonicalPath: `${lang === 'ar' ? '/ar' : ''}/team` };
  }
  if (primary === 'ceo') {
    return { pageView: { type: 'ceo' }, language: lang, canonicalPath: `${lang === 'ar' ? '/ar' : ''}/ceo` };
  }
  if (primary === 'awards' || primary === 'certificates') {
    return { pageView: { type: 'awards' }, language: lang, canonicalPath: `${lang === 'ar' ? '/ar' : ''}/awards` };
  }
  if (primary === 'clients' || primary === 'customers') {
    return { pageView: { type: 'clients' }, language: lang, canonicalPath: `${lang === 'ar' ? '/ar' : ''}/clients` };
  }
  if (primary === 'events') {
    return { pageView: { type: 'events' }, language: lang, canonicalPath: `${lang === 'ar' ? '/ar' : ''}/events` };
  }
  if (primary === 'gallery') {
    return { pageView: { type: 'gallery' }, language: lang, canonicalPath: `${lang === 'ar' ? '/ar' : ''}/gallery` };
  }
  if (primary === 'faq') {
    return { pageView: { type: 'faq' }, language: lang, canonicalPath: `${lang === 'ar' ? '/ar' : ''}/faq` };
  }
  if (primary === 'blog' || primary === 'knowledge-hub') {
    const slug = segments[1];
    return {
      pageView: { type: 'blog', postSlug: slug },
      language: lang,
      canonicalPath: `${lang === 'ar' ? '/ar' : ''}/knowledge-hub${slug ? `/${slug}` : ''}`,
    };
  }

  // Legacy department routes: /department/:id or /departments/:id
  if (primary === 'department' || primary === 'departments') {
    if (segments.length >= 2) {
      const targetDeptId = segments[1];
      const dept = matchDepartmentBySlug(targetDeptId);
      if (dept) {
        return {
          pageView: { type: 'department', deptId: dept.id },
          language: lang,
          canonicalPath: getDepartmentPath(dept.id, lang),
          isLegacyRedirect: true,
        };
      }
    }
  }

  // Legacy service routes: /service/:id or /services/:deptId/:id
  if (primary === 'service' || primary === 'services') {
    let rawServiceId = '';
    if (segments.length >= 3) {
      rawServiceId = segments[2];
    } else if (segments.length === 2) {
      rawServiceId = segments[1];
    }

    if (rawServiceId) {
      const mappedId = LEGACY_SERVICE_MAP[rawServiceId] || rawServiceId;
      const matched = SERVICES.find(
        (s) => s.id === mappedId || getServiceUrlSlug(s.id) === mappedId || s.id === rawServiceId
      );
      if (matched) {
        return {
          pageView: { type: 'service', serviceId: matched.id, deptId: matched.departmentId },
          language: lang,
          canonicalPath: getServicePath(matched.id, matched.departmentId, lang),
          isLegacyRedirect: true,
        };
      }
    }
  }

  // Direct Department and Service URLs (e.g. /amer-center-karama or /amer-center-karama/residency-visa-new)
  const matchedDept = matchDepartmentBySlug(primary);
  if (matchedDept) {
    if (segments.length === 1) {
      // It is a Department page
      return {
        pageView: { type: 'department', deptId: matchedDept.id },
        language: lang,
        canonicalPath: getDepartmentPath(matchedDept.id, lang),
      };
    }

    if (segments.length >= 2) {
      // It is a Service page under this department
      const serviceSlug = segments[1];
      const matchedService = matchServiceBySlug(matchedDept.id, serviceSlug);
      if (matchedService) {
        return {
          pageView: { type: 'service', serviceId: matchedService.id, deptId: matchedDept.id },
          language: lang,
          canonicalPath: getServicePath(matchedService.id, matchedDept.id, lang),
        };
      }

      // If service slug didn't match within this department, search globally
      const globalService = SERVICES.find((s) => s.id === serviceSlug || getServiceUrlSlug(s.id) === serviceSlug);
      if (globalService) {
        return {
          pageView: { type: 'service', serviceId: globalService.id, deptId: globalService.departmentId },
          language: lang,
          canonicalPath: getServicePath(globalService.id, globalService.departmentId, lang),
        };
      }

      // Fallback to the department page if service slug is not found
      return {
        pageView: { type: 'department', deptId: matchedDept.id },
        language: lang,
        canonicalPath: getDepartmentPath(matchedDept.id, lang),
      };
    }
  }

  // Check if primary is directly a service ID across all services
  const directService = SERVICES.find((s) => s.id === primary || getServiceUrlSlug(s.id) === primary);
  if (directService) {
    return {
      pageView: { type: 'service', serviceId: directService.id, deptId: directService.departmentId },
      language: lang,
      canonicalPath: getServicePath(directService.id, directService.departmentId, lang),
    };
  }

  // Fallback 404
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
      return getDepartmentPath(pageView.deptId, lang);
    case 'service':
      return getServicePath(pageView.serviceId, pageView.deptId, lang);
    case 'pricelist':
      return `${prefix}/departments`;
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
