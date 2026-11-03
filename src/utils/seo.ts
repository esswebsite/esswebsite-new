import { Language, PageView, ServiceItem, Department } from '../types';
import { CANONICAL_BASE, getAlternateUrls, buildPath } from './router';

import { OFFICIAL_MAPS, OFFICIAL_SAME_AS } from '../data/socialAndMapLinks';
import { getOpeningHoursForDept } from '../data/centerTimings';

export const VERIFIED_GOOGLE_PROFILE_URL = OFFICIAL_MAPS.shareUrl;

export interface SeoMetadata {
  title: string;
  description: string;
  canonicalUrl: string;
  enUrl: string;
  arUrl: string;
  ogType: string;
  ogImage?: string;
}

/**
 * Creates the canonical LocalBusiness organization structured data object
 */
export function getLocalBusinessSchema() {
  return {
    '@type': 'LocalBusiness',
    '@id': `${CANONICAL_BASE}/#organization`,
    name: 'Karama Business Center',
    alternateName: [
      'KBC',
      'Karama Business Center Dubai',
      'Emirates Secretarial Services',
      'ESS',
      'Karama Medical Fitness Express service Center - KMFC',
      'Karama Medical Center',
      'KMFC',
    ],
    url: CANONICAL_BASE,
    telephone: '+97143426666',
    priceRange: 'AED 50 - 15000',
    hasMap: OFFICIAL_MAPS.shareUrl,
    sameAs: [...OFFICIAL_SAME_AS],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Al Karama, Next to Karama Post Office',
      addressLocality: 'Dubai',
      addressRegion: 'Dubai',
      addressCountry: 'AE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: OFFICIAL_MAPS.coordinates.latitude,
      longitude: OFFICIAL_MAPS.coordinates.longitude,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '07:00',
        closes: '22:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Sunday'],
        opens: '07:00',
        closes: '21:30',
      },
    ],
  };
}

/**
 * Generates verified structured data for a Service page.
 * Uses Schema.org Service with accurate LocalBusiness provider linkage (no fabricated review stars).
 */
export function getServiceSchema(
  service: ServiceItem,
  dept: Department,
  canonicalUrl: string,
  faqs: { questionEn: string; questionAr: string; answerEn: string; answerAr: string }[] = [],
  isAr: boolean = false
) {
  const totalStandard = service.govFee + service.serviceFee;

  const serviceEntity = {
    '@type': 'Service',
    '@id': `${canonicalUrl}/#service`,
    name: isAr ? service.titleAr : service.titleEn,
    description: isAr ? service.shortDescAr : service.shortDescEn,
    serviceType: service.category,
    provider: {
      '@id': `${CANONICAL_BASE}/#organization`,
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Dubai, United Arab Emirates',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: isAr ? 'تفصيل الرسوم الحكومية والخدمية' : 'Itemized Fee Breakdown',
      itemListElement: [
        {
          '@type': 'Offer',
          name: isAr ? 'الرسوم الحكومية الرسمية المعتمدة' : 'Official Government Authority Tariff',
          price: service.govFee,
          priceCurrency: 'AED',
          eligibleRegion: 'AE-DU',
        },
        {
          '@type': 'Offer',
          name: isAr ? 'رسوم الطباعة والتدقيق بالمركز' : 'Authorized Center Service Fee',
          price: service.serviceFee,
          priceCurrency: 'AED',
          eligibleRegion: 'AE-DU',
        },
      ],
    },
    offers: {
      '@type': 'Offer',
      price: totalStandard,
      priceCurrency: 'AED',
      availability: 'https://schema.org/InStock',
      priceValidUntil: '2026-12-31',
    },
  };

  const breadcrumbEntity = {
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: isAr ? 'الرئيسية' : 'Home',
        item: isAr ? `${CANONICAL_BASE}/ar` : CANONICAL_BASE,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: isAr ? dept.nameAr : dept.nameEn,
        item: `${CANONICAL_BASE}${isAr ? '/ar' : ''}/departments/${dept.id}`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: isAr ? service.titleAr : service.titleEn,
        item: canonicalUrl,
      },
    ],
  };

  const graph: any[] = [getLocalBusinessSchema(), serviceEntity, breadcrumbEntity];

  if (faqs && faqs.length > 0) {
    graph.push({
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: isAr ? faq.questionAr : faq.questionEn,
        acceptedAnswer: {
          '@type': 'Answer',
          text: isAr ? faq.answerAr : faq.answerEn,
        },
      })),
    });
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  };
}

/**
 * Injects meta tags, title, canonical, and alternate hreflang tags into <head>
 */
export function updateDocumentHead(meta: SeoMetadata, jsonLdObject?: object) {
  // Page Title
  document.title = meta.title;

  // Meta Description
  let descTag = document.querySelector('meta[name="description"]');
  if (!descTag) {
    descTag = document.createElement('meta');
    descTag.setAttribute('name', 'description');
    document.head.appendChild(descTag);
  }
  descTag.setAttribute('content', meta.description);

  // Canonical Tag
  let canonicalTag = document.querySelector('link[rel="canonical"]');
  if (!canonicalTag) {
    canonicalTag = document.createElement('link');
    canonicalTag.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalTag);
  }
  canonicalTag.setAttribute('href', meta.canonicalUrl);

  // Robots
  let robotsTag = document.querySelector('meta[name="robots"]');
  if (!robotsTag) {
    robotsTag = document.createElement('meta');
    robotsTag.setAttribute('name', 'robots');
    document.head.appendChild(robotsTag);
  }
  robotsTag.setAttribute('content', 'index, follow');

  // Hreflang EN
  let hreflangEn = document.querySelector('link[rel="alternate"][hreflang="en"]');
  if (!hreflangEn) {
    hreflangEn = document.createElement('link');
    hreflangEn.setAttribute('rel', 'alternate');
    hreflangEn.setAttribute('hreflang', 'en');
    document.head.appendChild(hreflangEn);
  }
  hreflangEn.setAttribute('href', meta.enUrl);

  // Hreflang AR
  let hreflangAr = document.querySelector('link[rel="alternate"][hreflang="ar"]');
  if (!hreflangAr) {
    hreflangAr = document.createElement('link');
    hreflangAr.setAttribute('rel', 'alternate');
    hreflangAr.setAttribute('hreflang', 'ar');
    document.head.appendChild(hreflangAr);
  }
  hreflangAr.setAttribute('href', meta.arUrl);

  // Hreflang x-default
  let hreflangDefault = document.querySelector('link[rel="alternate"][hreflang="x-default"]');
  if (!hreflangDefault) {
    hreflangDefault = document.createElement('link');
    hreflangDefault.setAttribute('rel', 'alternate');
    hreflangDefault.setAttribute('hreflang', 'x-default');
    document.head.appendChild(hreflangDefault);
  }
  hreflangDefault.setAttribute('href', meta.enUrl);

  // OpenGraph Tags
  setMetaProperty('og:title', meta.title);
  setMetaProperty('og:description', meta.description);
  setMetaProperty('og:url', meta.canonicalUrl);
  setMetaProperty('og:type', meta.ogType || 'website');
  setMetaProperty('og:site_name', 'Karama Business Center & Emirates Secretarial Services');

  // Twitter Tags
  setMetaName('twitter:title', meta.title);
  setMetaName('twitter:description', meta.description);
  setMetaName('twitter:card', 'summary_large_image');

  // JSON-LD Injection
  if (jsonLdObject) {
    let scriptTag = document.getElementById('seo-dynamic-jsonld');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'seo-dynamic-jsonld';
      scriptTag.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(jsonLdObject);
  }
}

function setMetaProperty(property: string, content: string) {
  let tag = document.querySelector(`meta[property="${property}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('property', property);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

function setMetaName(name: string, content: string) {
  let tag = document.querySelector(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('name', name);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}
