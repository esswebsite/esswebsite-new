import React, { useMemo, useState } from 'react';
import {
  Search,
  Globe,
  ExternalLink,
  Copy,
  Check,
  Download,
  FileCode2,
  ShieldAlert,
  Layers,
  Tag,
  Link2,
  Share2,
  MapPin,
  Phone,
  BookOpen,
  Building2,
  Briefcase,
  ChevronDown,
  ChevronUp,
  LayoutGrid,
  Table as TableIcon,
  ArrowLeft,
  CheckCircle2,
  AlertCircle,
  Hash,
} from 'lucide-react';
import { Language, PageView, Department, ServiceItem } from '../types';
import { DEPARTMENTS, SERVICES } from '../data/departmentsData';
import { BLOG_POSTS } from '../data/blogData';
import {
  GOV_OPERATORS,
  CANONICAL_BASE,
  getSeoForRoute,
} from '../utils/routeSeo';
import { getDepartmentPath, getServicePath } from '../utils/urlRoutes';
import { getAlternateUrls } from '../utils/router';
import {
  OFFICIAL_SOCIAL_LINKS,
  OFFICIAL_MAPS,
  OFFICIAL_CONTACT,
  OFFICIAL_SAME_AS,
  AMER_OFFICIAL_SOCIAL_LINKS,
  AMER_OFFICIAL_GBP,
  AMER_SAME_AS,
} from '../data/socialAndMapLinks';

interface InternalAuditPageProps {
  language: Language;
  onNavigateToHome: () => void;
  onNavigatePage: (page: string) => void;
  onNavigateToDepartment: (deptId: string) => void;
  onNavigateToService: (serviceId: string) => void;
  onNavigateToArticle: (slug: string) => void;
}

type AuditPageCategory = 'core' | 'department' | 'service' | 'article';

interface AuditedPageRecord {
  id: string;
  category: AuditPageCategory;
  pageName: string;
  pageNameAr?: string;
  path: string;
  arPath: string;
  canonicalUrl: string;
  enUrl: string;
  arUrl: string;
  defaultUrl: string;
  departmentId: string;
  departmentName: string;
  departmentCode: string;
  departmentPath: string;
  operatorName: string;
  operatorUrl: string;
  serviceId: string;
  serviceName: string;
  serviceCategory: string;
  processingTime: string;
  metaTitle: string;
  metaTitleLen: number;
  metaTitleWords: number;
  metaDescription: string;
  metaDescLen: number;
  metaDescWords: number;
  keywordsString: string;
  keywordsList: string[];
  schemaTypes: string[];
  schemaIds: string[];
  schemaJson: Record<string, unknown>;
  isAmerIsolated: boolean;
  gbpName: string;
  gbpUrl: string;
  socialProfiles: { label: string; url: string }[];
  sameAsList: readonly string[];
  ogType: string;
  pageView: PageView;
}

function extractSchemaInfo(schema: Record<string, unknown>): { types: string[]; ids: string[] } {
  const types = new Set<string>();
  const ids = new Set<string>();

  const walk = (node: unknown) => {
    if (!node || typeof node !== 'object') return;
    if (Array.isArray(node)) {
      node.forEach(walk);
      return;
    }
    const obj = node as Record<string, unknown>;
    if (obj['@type']) {
      if (Array.isArray(obj['@type'])) {
        obj['@type'].forEach((t) => types.add(String(t)));
      } else {
        types.add(String(obj['@type']));
      }
    }
    if (obj['@id'] && typeof obj['@id'] === 'string') {
      ids.add(obj['@id']);
    }
    Object.values(obj).forEach(walk);
  };

  walk(schema);
  return { types: Array.from(types), ids: Array.from(ids) };
}

const CORE_PAGE_DEFINITIONS: { path: string; name: string; nameAr: string; pageView: PageView; ogType: string }[] = [
  { path: '/', name: 'Home Page', nameAr: 'الصفحة الرئيسية', pageView: { type: 'home' }, ogType: 'website' },
  { path: '/about', name: 'About ESS & KBC', nameAr: 'من نحن', pageView: { type: 'about' }, ogType: 'website' },
  { path: '/departments', name: 'All Departments & Services', nameAr: 'الدوائر والخدمات', pageView: { type: 'departments' }, ogType: 'website' },
  { path: '/knowledge-hub', name: 'Knowledge Hub (Blog Index)', nameAr: 'مركز المعرفة', pageView: { type: 'blog' }, ogType: 'website' },
  { path: '/faq', name: 'Frequently Asked Questions', nameAr: 'الأسئلة الشائعة', pageView: { type: 'faq' }, ogType: 'website' },
  { path: '/contact', name: 'Contact Us & Location Map', nameAr: 'اتصل بنا والموقع', pageView: { type: 'contact' }, ogType: 'website' },
  { path: '/team', name: 'Leadership & PRO Team', nameAr: 'فريق العمل', pageView: { type: 'team' }, ogType: 'website' },
  { path: '/ceo', name: 'CEO Message & Vision', nameAr: 'كلمة الرئيس التنفيذي', pageView: { type: 'ceo' }, ogType: 'website' },
  { path: '/awards', name: 'Government Awards & Accreditations', nameAr: 'الجوائز والاعتمادات', pageView: { type: 'awards' }, ogType: 'website' },
  { path: '/clients', name: 'Corporate Clients & Partners', nameAr: 'عملاؤنا من الشركات', pageView: { type: 'clients' }, ogType: 'website' },
  { path: '/events', name: 'Community Events & Delegations', nameAr: 'الفعاليات والوفود', pageView: { type: 'events' }, ogType: 'website' },
  { path: '/gallery', name: 'Center Photo Gallery', nameAr: 'معرض الصور', pageView: { type: 'gallery' }, ogType: 'website' },
];

export const InternalAuditPage: React.FC<InternalAuditPageProps> = ({
  onNavigateToHome,
  onNavigatePage,
  onNavigateToDepartment,
  onNavigateToService,
  onNavigateToArticle,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<'all' | AuditPageCategory>('all');
  const [deptFilter, setDeptFilter] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards');
  const [showSitemapTree, setShowSitemapTree] = useState(true);
  const [expandedSchemas, setExpandedSchemas] = useState<Record<string, boolean>>({});
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const deptById = useMemo(() => {
    const map: Record<string, Department> = {};
    DEPARTMENTS.forEach((d) => {
      map[d.id] = d;
    });
    return map;
  }, []);

  const serviceById = useMemo(() => {
    const map: Record<string, ServiceItem> = {};
    SERVICES.forEach((s) => {
      map[s.id] = s;
    });
    return map;
  }, []);

  // Build complete unified audit inventory of EVERY page on ess.ae
  const allPages = useMemo<AuditedPageRecord[]>(() => {
    const records: AuditedPageRecord[] = [];

    const buildSocialContext = (isAmer: boolean) => {
      if (isAmer) {
        return {
          isAmerIsolated: true,
          gbpName: AMER_OFFICIAL_GBP.titleEn,
          gbpUrl: AMER_OFFICIAL_GBP.shareUrl,
          socialProfiles: [
            { label: 'YouTube (Amer)', url: AMER_OFFICIAL_SOCIAL_LINKS.youtube },
            { label: 'Facebook (Amer)', url: AMER_OFFICIAL_SOCIAL_LINKS.facebook },
            { label: 'Instagram (Amer)', url: AMER_OFFICIAL_SOCIAL_LINKS.instagram },
            { label: 'LinkedIn (Amer)', url: AMER_OFFICIAL_SOCIAL_LINKS.linkedin },
          ],
          sameAsList: AMER_SAME_AS,
        };
      }
      return {
        isAmerIsolated: false,
        gbpName: OFFICIAL_MAPS.placeName,
        gbpUrl: OFFICIAL_MAPS.shareUrl,
        socialProfiles: [
          { label: 'Instagram (ESS/KBC)', url: OFFICIAL_SOCIAL_LINKS.instagram },
          { label: 'Facebook (ESS/KBC)', url: OFFICIAL_SOCIAL_LINKS.facebook },
          { label: 'LinkedIn (ESS/KBC)', url: OFFICIAL_SOCIAL_LINKS.linkedin },
          { label: 'TikTok (ESS/KBC)', url: OFFICIAL_SOCIAL_LINKS.tiktok },
        ],
        sameAsList: OFFICIAL_SAME_AS,
      };
    };

    // 1. Core Static Pages
    CORE_PAGE_DEFINITIONS.forEach((core) => {
      const seo = getSeoForRoute(core.path);
      const alts = getAlternateUrls(core.pageView);
      const { types, ids } = extractSchemaInfo(seo.schema);
      const socialCtx = buildSocialContext(false);
      const kwList = seo.keywords.split(',').map((k) => k.trim()).filter(Boolean);

      records.push({
        id: `core:${core.path}`,
        category: 'core',
        pageName: core.name,
        pageNameAr: core.nameAr,
        path: core.path,
        arPath: core.path === '/' ? '/ar' : `/ar${core.path}`,
        canonicalUrl: seo.canonicalUrl,
        enUrl: alts.enUrl,
        arUrl: alts.arUrl,
        defaultUrl: alts.defaultUrl,
        departmentId: 'parent-ess',
        departmentName: 'Parent: Karama Medical and Fitness Center',
        departmentCode: 'KMFC-KBC',
        departmentPath: '/departments',
        operatorName: 'Karama Medical and Fitness Center (KMFC / KBC / ESS)',
        operatorUrl: CANONICAL_BASE,
        serviceId: 'N/A (Core Hub Page)',
        serviceName: core.name,
        serviceCategory: 'Core Website',
        processingTime: 'Immediate / Multi-Counter',
        metaTitle: seo.title,
        metaTitleLen: seo.title.length,
        metaTitleWords: seo.title.trim().split(/\s+/).length,
        metaDescription: seo.description,
        metaDescLen: seo.description.length,
        metaDescWords: seo.description.trim().split(/\s+/).length,
        keywordsString: seo.keywords,
        keywordsList: kwList,
        schemaTypes: types,
        schemaIds: ids,
        schemaJson: seo.schema,
        ...socialCtx,
        ogType: core.ogType,
        pageView: core.pageView,
      });
    });

    // 2. Department Landing Pages
    DEPARTMENTS.forEach((dept) => {
      const path = getDepartmentPath(dept.id, 'en');
      const arPath = getDepartmentPath(dept.id, 'ar');
      const seo = getSeoForRoute(path);
      const pageView: PageView = { type: 'department', deptId: dept.id };
      const alts = getAlternateUrls(pageView);
      const { types, ids } = extractSchemaInfo(seo.schema);
      const op = GOV_OPERATORS[dept.id] || {
        name: dept.officialGovPortalNameEn || 'Government of Dubai',
        url: dept.officialGovUrl || CANONICAL_BASE,
      };
      const isAmer = dept.id === 'amer';
      const socialCtx = buildSocialContext(isAmer);
      const kwList = seo.keywords.split(',').map((k) => k.trim()).filter(Boolean);
      const deptServicesCount = SERVICES.filter((s) => s.departmentId === dept.id).length;

      records.push({
        id: `dept:${dept.id}`,
        category: 'department',
        pageName: `${dept.nameEn} (Department Hub)`,
        pageNameAr: dept.nameAr,
        path,
        arPath,
        canonicalUrl: seo.canonicalUrl,
        enUrl: alts.enUrl,
        arUrl: alts.arUrl,
        defaultUrl: alts.defaultUrl,
        departmentId: dept.id,
        departmentName: dept.nameEn,
        departmentCode: dept.code,
        departmentPath: path,
        operatorName: op.name,
        operatorUrl: op.url,
        serviceId: `ALL (${deptServicesCount} services)`,
        serviceName: `${dept.subTitleEn} (${deptServicesCount} Services)`,
        serviceCategory: 'Department Hub',
        processingTime: 'Varies by service',
        metaTitle: seo.title,
        metaTitleLen: seo.title.length,
        metaTitleWords: seo.title.trim().split(/\s+/).length,
        metaDescription: seo.description,
        metaDescLen: seo.description.length,
        metaDescWords: seo.description.trim().split(/\s+/).length,
        keywordsString: seo.keywords,
        keywordsList: kwList,
        schemaTypes: types,
        schemaIds: ids,
        schemaJson: seo.schema,
        ...socialCtx,
        ogType: 'website',
        pageView,
      });
    });

    // 3. Individual Service Pages
    SERVICES.forEach((service) => {
      const dept = deptById[service.departmentId];
      const path = getServicePath(service.id, service.departmentId, 'en');
      const arPath = getServicePath(service.id, service.departmentId, 'ar');
      const deptPath = getDepartmentPath(service.departmentId, 'en');
      const seo = getSeoForRoute(path);
      const pageView: PageView = { type: 'service', serviceId: service.id, deptId: service.departmentId };
      const alts = getAlternateUrls(pageView);
      const { types, ids } = extractSchemaInfo(seo.schema);
      const op = GOV_OPERATORS[service.departmentId] || {
        name: service.authorityEn || 'Government of Dubai',
        url: service.officialGovUrl || dept?.officialGovUrl || CANONICAL_BASE,
      };
      const isAmer = service.departmentId === 'amer';
      const socialCtx = buildSocialContext(isAmer);
      const kwList = seo.keywords.split(',').map((k) => k.trim()).filter(Boolean);

      records.push({
        id: `service:${service.id}`,
        category: 'service',
        pageName: service.titleEn,
        pageNameAr: service.titleAr,
        path,
        arPath,
        canonicalUrl: seo.canonicalUrl,
        enUrl: alts.enUrl,
        arUrl: alts.arUrl,
        defaultUrl: alts.defaultUrl,
        departmentId: service.departmentId,
        departmentName: dept?.nameEn || service.departmentId.toUpperCase(),
        departmentCode: dept?.code || service.departmentId.toUpperCase(),
        departmentPath: deptPath,
        operatorName: op.name,
        operatorUrl: service.officialGovUrl || op.url,
        serviceId: service.id,
        serviceName: service.titleEn,
        serviceCategory: service.category,
        processingTime: service.processingTimeEn,
        metaTitle: seo.title,
        metaTitleLen: seo.title.length,
        metaTitleWords: seo.title.trim().split(/\s+/).length,
        metaDescription: seo.description,
        metaDescLen: seo.description.length,
        metaDescWords: seo.description.trim().split(/\s+/).length,
        keywordsString: seo.keywords,
        keywordsList: kwList,
        schemaTypes: types,
        schemaIds: ids,
        schemaJson: seo.schema,
        ...socialCtx,
        ogType: 'website',
        pageView,
      });
    });

    // 4. Knowledge Hub Articles
    BLOG_POSTS.forEach((post) => {
      const path = `/knowledge-hub/${post.slug}`;
      const arPath = `/ar/knowledge-hub/${post.slug}`;
      const seo = getSeoForRoute(path);
      const pageView: PageView = { type: 'blog', postSlug: post.slug };
      const alts = getAlternateUrls(pageView);
      const { types, ids } = extractSchemaInfo(seo.schema);
      const dept = deptById[post.departmentId];
      const linkedService = serviceById[post.relatedServiceId];
      const isAmer = post.departmentId === 'amer';
      const socialCtx = buildSocialContext(isAmer);
      const kwList = seo.keywords.split(',').map((k) => k.trim()).filter(Boolean);

      records.push({
        id: `article:${post.slug}`,
        category: 'article',
        pageName: post.titleEn,
        pageNameAr: post.titleAr,
        path,
        arPath,
        canonicalUrl: seo.canonicalUrl,
        enUrl: alts.enUrl,
        arUrl: alts.arUrl,
        defaultUrl: alts.defaultUrl,
        departmentId: post.departmentId,
        departmentName: dept?.nameEn || post.officialAuthorityEn,
        departmentCode: dept?.code || 'GUIDE',
        departmentPath: getDepartmentPath(post.departmentId, 'en'),
        operatorName: post.officialAuthorityEn,
        operatorUrl: post.officialSourceUrl,
        serviceId: post.relatedServiceId,
        serviceName: linkedService?.titleEn || post.relatedServiceId,
        serviceCategory: post.category,
        processingTime: post.readTime,
        metaTitle: seo.title,
        metaTitleLen: seo.title.length,
        metaTitleWords: seo.title.trim().split(/\s+/).length,
        metaDescription: seo.description,
        metaDescLen: seo.description.length,
        metaDescWords: seo.description.trim().split(/\s+/).length,
        keywordsString: seo.keywords,
        keywordsList: kwList,
        schemaTypes: types,
        schemaIds: ids,
        schemaJson: seo.schema,
        ...socialCtx,
        ogType: 'article',
        pageView,
      });
    });

    return records;
  }, [deptById, serviceById]);

  const filteredPages = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return allPages.filter((item) => {
      if (categoryFilter !== 'all' && item.category !== categoryFilter) return false;
      if (deptFilter !== 'all' && item.departmentId !== deptFilter) return false;
      if (!q) return true;
      return (
        item.pageName.toLowerCase().includes(q) ||
        (item.pageNameAr && item.pageNameAr.toLowerCase().includes(q)) ||
        item.path.toLowerCase().includes(q) ||
        item.canonicalUrl.toLowerCase().includes(q) ||
        item.departmentName.toLowerCase().includes(q) ||
        item.departmentId.toLowerCase().includes(q) ||
        item.serviceName.toLowerCase().includes(q) ||
        item.serviceId.toLowerCase().includes(q) ||
        item.metaTitle.toLowerCase().includes(q) ||
        item.metaDescription.toLowerCase().includes(q) ||
        item.keywordsString.toLowerCase().includes(q) ||
        item.schemaTypes.some((t) => t.toLowerCase().includes(q))
      );
    });
  }, [allPages, searchQuery, categoryFilter, deptFilter]);

  const counts = useMemo(() => {
    const core = allPages.filter((p) => p.category === 'core').length;
    const dept = allPages.filter((p) => p.category === 'department').length;
    const service = allPages.filter((p) => p.category === 'service').length;
    const article = allPages.filter((p) => p.category === 'article').length;
    const titleOk = allPages.filter((p) => p.metaTitleLen >= 45 && p.metaTitleLen <= 60).length;
    const descOk = allPages.filter((p) => p.metaDescLen >= 120 && p.metaDescLen <= 160).length;
    return {
      total: allPages.length,
      core,
      dept,
      service,
      article,
      titleOk,
      descOk,
    };
  }, [allPages]);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1800);
  };

  const handleNavigateRecord = (record: AuditedPageRecord) => {
    if (record.category === 'department') {
      onNavigateToDepartment(record.departmentId);
    } else if (record.category === 'service') {
      onNavigateToService(record.serviceId);
    } else if (record.category === 'article' && record.pageView.type === 'blog' && record.pageView.postSlug) {
      onNavigateToArticle(record.pageView.postSlug);
    } else {
      const pageMap: Record<string, string> = {
        '/': 'home',
        '/about': 'about',
        '/departments': 'departments',
        '/knowledge-hub': 'blog',
        '/faq': 'faq',
        '/contact': 'contact',
        '/team': 'team',
        '/ceo': 'ceo',
        '/awards': 'awards',
        '/clients': 'clients',
        '/events': 'events',
        '/gallery': 'gallery',
      };
      onNavigatePage(pageMap[record.path] || 'home');
    }
  };

  const handleExportCsv = () => {
    const headers = [
      'Category',
      'Page Name',
      'URL Path',
      'Canonical URL',
      'Alternate AR URL',
      'Department ID',
      'Department Name',
      'Service ID',
      'Service Name',
      'Authority / Operator',
      'Meta Title',
      'Title Chars',
      'Meta Description',
      'Desc Chars',
      'Keywords',
      'Schema Types',
      'Schema @id List',
      'Google Business Profile',
      'Social Profiles',
    ];

    const escapeCsv = (val: string | number) => `"${String(val).replace(/"/g, '""')}"`;

    const rows = filteredPages.map((p) => [
      p.category,
      p.pageName,
      p.path,
      p.canonicalUrl,
      p.arUrl,
      p.departmentId,
      p.departmentName,
      p.serviceId,
      p.serviceName,
      p.operatorName,
      p.metaTitle,
      p.metaTitleLen,
      p.metaDescription,
      p.metaDescLen,
      p.keywordsString,
      p.schemaTypes.join(', '),
      p.schemaIds.join(' | '),
      `${p.gbpName} (${p.gbpUrl})`,
      p.socialProfiles.map((s) => `${s.label}: ${s.url}`).join(' | '),
    ]);

    const csv = [headers.map(escapeCsv).join(','), ...rows.map((r) => r.map(escapeCsv).join(','))].join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ess-ae-internal-seo-sitemap-audit-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleCopyAllUrls = () => {
    const urls = allPages.map((p) => p.canonicalUrl).join('\n');
    handleCopy('all-urls', urls);
  };

  const handleCopyXmlSitemap = () => {
    const today = new Date().toISOString().slice(0, 10);
    const urlEntries = allPages
      .map((p) => {
        const priority =
          p.path === '/' ? '1.0' : p.category === 'department' ? '0.9' : p.category === 'service' ? '0.85' : '0.8';
        const freq = p.path === '/' ? 'daily' : p.category === 'article' ? 'monthly' : 'weekly';
        return `  <url>\n    <loc>${p.canonicalUrl}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${freq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
      })
      .join('\n');
    const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlEntries}\n</urlset>`;
    handleCopy('xml-sitemap', xml);
  };

  const toggleSchemaExpand = (id: string) => {
    setExpandedSchemas((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      {/* Top Internal Audit Header */}
      <div className="bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-5">
            <button
              onClick={onNavigateToHome}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Public Website</span>
            </button>

            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-bold">
                <ShieldAlert className="w-3.5 h-3.5" />
                <span>HIDDEN PAGE: /internal (noindex, nofollow · Excluded from Sitemap & Nav)</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-teal-500/20 border border-teal-400/40 text-teal-300 text-xs font-mono">
                GTM-NBDJ2P99 Active
              </span>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                ess.ae — Complete Internal Sitemap, SEO & Schema Audit Directory
              </h1>
              <p className="mt-2 text-sm text-slate-300 max-w-3xl leading-relaxed">
                Live inventory of every route, department, service, and Knowledge Hub article on{' '}
                <span className="text-teal-300 font-semibold">https://ess.ae</span> including Meta Headings, Meta
                Descriptions, Target Keywords, Canonical &amp; Hreflang links, JSON-LD Schemas, Google Business
                Profiles, and isolated Social Channels.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 shrink-0">
              <button
                onClick={handleCopyAllUrls}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-bold text-slate-200 cursor-pointer transition-colors"
              >
                {copiedId === 'all-urls' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedId === 'all-urls' ? 'Copied URLs!' : `Copy All ${counts.total} URLs`}</span>
              </button>

              <button
                onClick={handleCopyXmlSitemap}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-bold text-slate-200 cursor-pointer transition-colors"
              >
                {copiedId === 'xml-sitemap' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <FileCode2 className="w-3.5 h-3.5" />}
                <span>{copiedId === 'xml-sitemap' ? 'Copied XML!' : 'Copy sitemap.xml'}</span>
              </button>

              <button
                onClick={handleExportCsv}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#128B94] hover:bg-[#0F766E] text-xs font-bold text-white shadow-sm cursor-pointer transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Export CSV ({filteredPages.length})</span>
              </button>
            </div>
          </div>

          {/* Summary KPI Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mt-7">
            <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-3.5">
              <div className="text-[11px] text-slate-400 font-semibold uppercase">Total URLs</div>
              <div className="text-2xl font-extrabold text-white mt-0.5 tabular-nums">{counts.total}</div>
            </div>
            <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-3.5">
              <div className="text-[11px] text-slate-400 font-semibold uppercase">Core Pages</div>
              <div className="text-2xl font-extrabold text-teal-300 mt-0.5 tabular-nums">{counts.core}</div>
            </div>
            <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-3.5">
              <div className="text-[11px] text-slate-400 font-semibold uppercase">Departments</div>
              <div className="text-2xl font-extrabold text-emerald-300 mt-0.5 tabular-nums">{counts.dept}</div>
            </div>
            <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-3.5">
              <div className="text-[11px] text-slate-400 font-semibold uppercase">Service Pages</div>
              <div className="text-2xl font-extrabold text-sky-300 mt-0.5 tabular-nums">{counts.service}</div>
            </div>
            <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-3.5">
              <div className="text-[11px] text-slate-400 font-semibold uppercase">Articles</div>
              <div className="text-2xl font-extrabold text-amber-300 mt-0.5 tabular-nums">{counts.article}</div>
            </div>
            <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-3.5">
              <div className="text-[11px] text-slate-400 font-semibold uppercase">Meta Compliance</div>
              <div className="text-sm font-bold text-emerald-300 mt-1.5 tabular-nums">
                Title: {counts.titleOk}/{counts.total} · Desc: {counts.descOk}/{counts.total}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-8">
        {/* Global Identity & Social / GBP Separation Reference */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* Parent ESS / KBC / KMFC Identity */}
          <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs">
            <div className="flex items-center justify-between gap-2 mb-3">
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-[#128B94]" />
                <h2 className="text-base font-extrabold text-slate-900">
                  Parent Identity: Karama Medical and Fitness Center (KMFC / KBC)
                </h2>
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-teal-50 text-teal-800 border border-teal-200">
                @id: https://ess.ae/#organization
              </span>
            </div>
            <p className="text-xs text-slate-600 mb-3">
              Applied to Homepage, Core Pages, and all non-Amer Departments (DET, Tasheel, ICP, Salem Medical, OHC, Atlas Attestation, Notary, RTA, Tawjeeh, Tadbeer, DM/Ejari, Golden Visa, VIP).
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs bg-slate-50 p-3.5 rounded-lg border border-slate-200/80">
              <div>
                <div className="font-bold text-slate-700 mb-1 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#128B94]" /> Google Business Profile &amp; NAP
                </div>
                <div className="text-slate-600 space-y-1">
                  <div><strong>Name:</strong> {OFFICIAL_MAPS.placeName}</div>
                  <div><strong>Address:</strong> {OFFICIAL_MAPS.locationDetailsEn}</div>
                  <div><strong>Phone / WA:</strong> {OFFICIAL_CONTACT.phonePrimary} ({OFFICIAL_CONTACT.phonePrimaryIntl})</div>
                  <div>
                    <strong>GBP Link:</strong>{' '}
                    <a href={OFFICIAL_MAPS.shareUrl} target="_blank" rel="noopener noreferrer" className="text-[#128B94] underline break-all">
                      {OFFICIAL_MAPS.shareUrl}
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <div className="font-bold text-slate-700 mb-1 flex items-center gap-1">
                  <Share2 className="w-3.5 h-3.5 text-[#128B94]" /> Social Channels (sameAs)
                </div>
                <ul className="space-y-1 text-slate-600">
                  {Object.entries(OFFICIAL_SOCIAL_LINKS).map(([platform, url]) => (
                    <li key={platform} className="truncate">
                      <span className="capitalize font-semibold">{platform}:</span>{' '}
                      <a href={url} target="_blank" rel="noopener noreferrer" className="text-[#128B94] hover:underline">
                        {url}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Isolated Amer Center Karama Identity */}
          <div className="bg-white rounded-xl border border-emerald-200 p-5 shadow-xs">
            <div className="flex items-center justify-between gap-2 mb-3">
              <div className="flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-emerald-700" />
                <h2 className="text-base font-extrabold text-slate-900">
                  Isolated Department Identity: Amer Center Karama Dubai
                </h2>
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200">
                @id: .../amer-center-karama/#amer-center
              </span>
            </div>
            <p className="text-xs text-slate-600 mb-3">
              Strictly isolated for <span className="font-semibold">/amer-center-karama</span> and its 16 Amer services. Uses Amer&apos;s dedicated GBP and dedicated social accounts while preserving parentOrganization linkage.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs bg-emerald-50/40 p-3.5 rounded-lg border border-emerald-200/80">
              <div>
                <div className="font-bold text-slate-700 mb-1 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-emerald-700" /> Amer GBP &amp; NAP
                </div>
                <div className="text-slate-600 space-y-1">
                  <div><strong>Name:</strong> {AMER_OFFICIAL_GBP.titleEn}</div>
                  <div><strong>Address:</strong> {AMER_OFFICIAL_GBP.addressEn}</div>
                  <div><strong>Phone:</strong> {AMER_OFFICIAL_GBP.phonePrimary} ({AMER_OFFICIAL_GBP.phonePrimaryIntl})</div>
                  <div>
                    <strong>Amer GBP Link:</strong>{' '}
                    <a href={AMER_OFFICIAL_GBP.shareUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline break-all">
                      {AMER_OFFICIAL_GBP.shareUrl}
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <div className="font-bold text-slate-700 mb-1 flex items-center gap-1">
                  <Share2 className="w-3.5 h-3.5 text-emerald-700" /> Amer Social Channels (sameAs)
                </div>
                <ul className="space-y-1 text-slate-600">
                  {Object.entries(AMER_OFFICIAL_SOCIAL_LINKS).map(([platform, url]) => (
                    <li key={platform} className="truncate">
                      <span className="capitalize font-semibold">{platform}:</span>{' '}
                      <a href={url} target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:underline">
                        {url}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Whole Website Visual Sitemap Tree */}
        <section className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
          <div
            onClick={() => setShowSitemapTree(!showSitemapTree)}
            className="px-5 py-4 bg-slate-100/80 border-b border-slate-200 flex items-center justify-between cursor-pointer hover:bg-slate-100 transition-colors"
          >
            <div className="flex items-center gap-2.5">
              <Layers className="w-5 h-5 text-[#128B94]" />
              <div>
                <h2 className="text-base font-extrabold text-slate-900">
                  Whole Website Sitemap Architecture ({counts.total} Canonical URLs)
                </h2>
                <p className="text-xs text-slate-500">
                  Complete hierarchical map of Core Pages, 14 Authorized Departments, {counts.service} Services, and {counts.article} Knowledge Hub Articles (Arabic counterparts available under /ar/*)
                </p>
              </div>
            </div>
            <button
              type="button"
              className="inline-flex items-center gap-1 text-xs font-bold text-[#128B94] px-3 py-1.5 rounded-lg bg-white border border-slate-200"
            >
              <span>{showSitemapTree ? 'Collapse Sitemap' : 'Expand Sitemap'}</span>
              {showSitemapTree ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>

          {showSitemapTree && (
            <div className="p-5 space-y-6">
              {/* Branch 1: Core Pages */}
              <div>
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-2">
                  <Globe className="w-3.5 h-3.5 text-[#128B94]" />
                  <span>1. Core Website Pages ({counts.core})</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5">
                  {allPages
                    .filter((p) => p.category === 'core')
                    .map((p) => (
                      <div
                        key={p.id}
                        className="p-2.5 rounded-lg border border-slate-200 bg-slate-50/70 hover:border-[#128B94] transition-colors flex flex-col justify-between gap-1"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-xs font-bold text-slate-800 truncate">{p.pageName}</span>
                          <button
                            onClick={() => handleNavigateRecord(p)}
                            className="text-[11px] font-bold text-[#128B94] hover:underline shrink-0 cursor-pointer flex items-center gap-0.5"
                          >
                            <span>Open</span>
                            <ExternalLink className="w-2.5 h-2.5" />
                          </button>
                        </div>
                        <div className="text-[11px] font-mono text-slate-600 truncate">{p.canonicalUrl}</div>
                      </div>
                    ))}
                </div>
              </div>

              {/* Branch 2: Departments & All Nested Services */}
              <div>
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-2">
                  <Building2 className="w-3.5 h-3.5 text-[#128B94]" />
                  <span>2. Authorized Departments ({counts.dept}) &amp; Nested Services ({counts.service})</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {DEPARTMENTS.map((dept) => {
                    const deptPath = getDepartmentPath(dept.id, 'en');
                    const deptServices = SERVICES.filter((s) => s.departmentId === dept.id);
                    return (
                      <div
                        key={dept.id}
                        className="rounded-xl border border-slate-200 bg-slate-50/50 p-4 space-y-2.5"
                      >
                        <div className="flex items-start justify-between gap-2 pb-2 border-b border-slate-200">
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-extrabold text-slate-900">{dept.nameEn}</span>
                              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-teal-100 text-teal-800">
                                {deptServices.length} Services
                              </span>
                            </div>
                            <div className="text-xs font-mono text-[#128B94] mt-0.5">
                              {CANONICAL_BASE}{deptPath}
                            </div>
                          </div>
                          <button
                            onClick={() => onNavigateToDepartment(dept.id)}
                            className="text-[11px] font-bold px-2.5 py-1 rounded bg-white border border-slate-300 hover:border-[#128B94] text-slate-700 hover:text-[#128B94] cursor-pointer shrink-0"
                          >
                            Visit Dept
                          </button>
                        </div>
                        <ul className="space-y-1 max-h-56 overflow-y-auto pr-1">
                          {deptServices.map((srv) => {
                            const srvPath = getServicePath(srv.id, srv.departmentId, 'en');
                            return (
                              <li
                                key={srv.id}
                                className="flex items-center justify-between gap-2 text-xs py-1 px-2 rounded hover:bg-white transition-colors"
                              >
                                <div className="min-w-0">
                                  <span className="font-semibold text-slate-800 block truncate">{srv.titleEn}</span>
                                  <span className="text-[11px] font-mono text-slate-500 block truncate">
                                    {srvPath}
                                  </span>
                                </div>
                                <button
                                  onClick={() => onNavigateToService(srv.id)}
                                  className="text-[11px] font-semibold text-[#128B94] hover:underline shrink-0 cursor-pointer"
                                >
                                  View
                                </button>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Branch 3: Knowledge Hub Articles */}
              <div>
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-2">
                  <BookOpen className="w-3.5 h-3.5 text-[#128B94]" />
                  <span>3. Knowledge Hub Articles ({counts.article})</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                  {BLOG_POSTS.map((post) => (
                    <div
                      key={post.slug}
                      className="p-2.5 rounded-lg border border-slate-200 bg-slate-50/70 hover:border-[#128B94] transition-colors flex flex-col justify-between gap-1"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <span className="text-xs font-bold text-slate-800 line-clamp-1">{post.titleEn}</span>
                        <button
                          onClick={() => onNavigateToArticle(post.slug)}
                          className="text-[11px] font-bold text-[#128B94] hover:underline shrink-0 cursor-pointer"
                        >
                          Read
                        </button>
                      </div>
                      <div className="text-[11px] font-mono text-slate-500 truncate">
                        {CANONICAL_BASE}/knowledge-hub/{post.slug}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Filter & Search Toolbar for Detailed Page-by-Page Breakdown */}
        <section className="bg-white rounded-xl border border-slate-200 p-4 sm:p-5 shadow-xs space-y-4 sticky top-16 z-20">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search any page, URL, service, department, meta title, description, keyword, or schema type (e.g. MedicalTest, amer, golden visa)..."
                className="w-full pl-10 pr-4 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#128B94]/30 focus:border-[#128B94]"
              />
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <select
                value={deptFilter}
                onChange={(e) => setDeptFilter(e.target.value)}
                className="px-3 py-2 text-xs font-semibold bg-slate-50 border border-slate-300 rounded-lg text-slate-800 cursor-pointer"
              >
                <option value="all">All Departments &amp; Parent</option>
                <option value="parent-ess">Parent ESS / Core Pages</option>
                {DEPARTMENTS.map((d) => (
                  <option key={d.id} value={d.id}>
                    {d.nameEn} ({d.id})
                  </option>
                ))}
              </select>

              <div className="inline-flex rounded-lg border border-slate-300 bg-slate-100 p-0.5">
                <button
                  onClick={() => setViewMode('cards')}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-bold cursor-pointer transition-colors ${
                    viewMode === 'cards' ? 'bg-white text-[#128B94] shadow-2xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <LayoutGrid className="w-3.5 h-3.5" />
                  <span>Full Page Cards</span>
                </button>
                <button
                  onClick={() => setViewMode('table')}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-bold cursor-pointer transition-colors ${
                    viewMode === 'table' ? 'bg-white text-[#128B94] shadow-2xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <TableIcon className="w-3.5 h-3.5" />
                  <span>Audit Table</span>
                </button>
              </div>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-1.5">
              {[
                { id: 'all', label: `All Pages (${counts.total})` },
                { id: 'core', label: `Core Pages (${counts.core})` },
                { id: 'department', label: `Departments (${counts.dept})` },
                { id: 'service', label: `Services (${counts.service})` },
                { id: 'article', label: `Knowledge Hub (${counts.article})` },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setCategoryFilter(tab.id as 'all' | AuditPageCategory)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold cursor-pointer transition-colors ${
                    categoryFilter === tab.id
                      ? 'bg-[#128B94] text-white shadow-2xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="text-xs font-semibold text-slate-500">
              Showing <span className="text-slate-900 font-bold">{filteredPages.length}</span> of {counts.total} pages
            </div>
          </div>
        </section>

        {/* Detailed Page-by-Page Records */}
        {viewMode === 'cards' ? (
          <section className="space-y-4">
            {filteredPages.map((p, idx) => {
              const titleValid = p.metaTitleLen >= 50 && p.metaTitleLen <= 60;
              const descValid = p.metaDescLen >= 120 && p.metaDescLen <= 160;
              const isSchemaExpanded = !!expandedSchemas[p.id];

              return (
                <article
                  key={p.id}
                  className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden hover:border-teal-300 transition-colors"
                >
                  {/* Card Top Bar: Page, URL, Department, Service */}
                  <div className="px-5 py-3.5 bg-slate-50/90 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap items-center gap-2.5 min-w-0">
                      <span className="text-xs font-mono font-bold text-slate-400">#{idx + 1}</span>
                      <span
                        className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded border ${
                          p.category === 'core'
                            ? 'bg-teal-50 text-teal-800 border-teal-200'
                            : p.category === 'department'
                            ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                            : p.category === 'service'
                            ? 'bg-sky-50 text-sky-800 border-sky-200'
                            : 'bg-amber-50 text-amber-800 border-amber-200'
                        }`}
                      >
                        {p.category}
                      </span>
                      <h3 className="text-sm sm:text-base font-extrabold text-slate-900">{p.pageName}</h3>
                      {p.pageNameAr && (
                        <span className="text-xs text-slate-500 font-arabic" dir="rtl">
                          ({p.pageNameAr})
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        onClick={() => handleCopy(`url-${p.id}`, p.canonicalUrl)}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-white border border-slate-300 text-[11px] font-bold text-slate-700 hover:bg-slate-100 cursor-pointer"
                      >
                        {copiedId === `url-${p.id}` ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                        <span>{copiedId === `url-${p.id}` ? 'Copied' : 'Copy URL'}</span>
                      </button>
                      <button
                        onClick={() => handleNavigateRecord(p)}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#128B94] hover:bg-[#0F766E] text-[11px] font-bold text-white cursor-pointer"
                      >
                        <span>Visit Live Page</span>
                        <ExternalLink className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  {/* Card Body Grid */}
                  <div className="p-5 grid grid-cols-1 lg:grid-cols-12 gap-5">
                    {/* Col 1: Page / Dep / Ser / Canonical & Hreflang (5 cols) */}
                    <div className="lg:col-span-5 space-y-3.5 text-xs">
                      {/* Dep & Ser Info */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200/80">
                        <div>
                          <div className="text-[10px] font-extrabold uppercase text-slate-400 flex items-center gap-1">
                            <Building2 className="w-3 h-3 text-[#128B94]" /> Department (Dep)
                          </div>
                          <div className="font-bold text-slate-800 mt-0.5">{p.departmentName}</div>
                          <div className="text-[11px] font-mono text-slate-500">
                            ID: {p.departmentId} · Code: {p.departmentCode}
                          </div>
                        </div>
                        <div>
                          <div className="text-[10px] font-extrabold uppercase text-slate-400 flex items-center gap-1">
                            <Briefcase className="w-3 h-3 text-[#128B94]" /> Service (Ser)
                          </div>
                          <div className="font-bold text-slate-800 mt-0.5 line-clamp-2">{p.serviceName}</div>
                          <div className="text-[11px] font-mono text-slate-500 truncate">
                            ID: {p.serviceId}
                          </div>
                        </div>
                        <div className="sm:col-span-2 pt-2 border-t border-slate-200/80">
                          <span className="text-slate-500 font-semibold">Jurisdiction / Operator:</span>{' '}
                          <a
                            href={p.operatorUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#128B94] font-semibold hover:underline"
                          >
                            {p.operatorName}
                          </a>
                          {p.processingTime && (
                            <span className="text-slate-500"> · Turnaround: {p.processingTime}</span>
                          )}
                        </div>
                      </div>

                      {/* Canonical Links & Hreflang */}
                      <div className="p-3 rounded-lg bg-teal-50/50 border border-teal-200/70 space-y-1.5">
                        <div className="text-[10px] font-extrabold uppercase text-teal-800 flex items-center gap-1">
                          <Link2 className="w-3.5 h-3.5" /> Canonical Links &amp; Hreflang Tags
                        </div>
                        <div className="font-mono text-[11px] space-y-1 break-all">
                          <div>
                            <span className="font-bold text-slate-700">rel="canonical":</span>{' '}
                            <span className="text-[#01403F] font-semibold">{p.canonicalUrl}</span>
                          </div>
                          <div>
                            <span className="font-bold text-slate-600">hreflang="en":</span>{' '}
                            <span className="text-slate-700">{p.enUrl}</span>
                          </div>
                          <div>
                            <span className="font-bold text-slate-600">hreflang="ar":</span>{' '}
                            <span className="text-slate-700">{p.arUrl}</span>
                          </div>
                          <div>
                            <span className="font-bold text-slate-600">hreflang="x-default":</span>{' '}
                            <span className="text-slate-700">{p.defaultUrl}</span>
                          </div>
                        </div>
                      </div>

                      {/* Social, GBP, OG & Tracking */}
                      <div
                        className={`p-3 rounded-lg border space-y-1.5 ${
                          p.isAmerIsolated
                            ? 'bg-emerald-50/50 border-emerald-200/80'
                            : 'bg-slate-50 border-slate-200/80'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2">
                          <div className="text-[10px] font-extrabold uppercase text-slate-600 flex items-center gap-1">
                            <Share2 className="w-3.5 h-3.5 text-[#128B94]" /> Social, GBP &amp; OpenGraph
                          </div>
                          {p.isAmerIsolated && (
                            <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800">
                              Amer Isolated Profile
                            </span>
                          )}
                        </div>
                        <div className="text-[11px] text-slate-700 space-y-1">
                          <div className="truncate">
                            <strong>Google Profile:</strong>{' '}
                            <a href={p.gbpUrl} target="_blank" rel="noopener noreferrer" className="text-[#128B94] underline">
                              {p.gbpName}
                            </a>
                          </div>
                          <div>
                            <strong>og:type:</strong> {p.ogType} · <strong>twitter:card:</strong> summary_large_image
                          </div>
                          <div>
                            <strong>Contact:</strong> <Phone className="w-3 h-3 inline text-[#128B94]" />{' '}
                            {OFFICIAL_CONTACT.phonePrimaryIntl} · WA {OFFICIAL_CONTACT.whatsappUrl}
                          </div>
                          <div className="flex flex-wrap gap-1 pt-1">
                            {p.socialProfiles.map((sp) => (
                              <a
                                key={sp.label}
                                href={sp.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-2 py-0.5 rounded bg-white border border-slate-200 text-[10px] font-semibold text-slate-700 hover:border-[#128B94] hover:text-[#128B94]"
                              >
                                {sp.label}
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Col 2: Meta Title, Meta Description, Keywords & Schema (7 cols) */}
                    <div className="lg:col-span-7 space-y-3.5 text-xs">
                      {/* Meta Heading */}
                      <div className="p-3 rounded-lg bg-white border border-slate-200">
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                          <span className="text-[10px] font-extrabold uppercase text-slate-500">
                            Meta Heading (&lt;title&gt; / og:title / twitter:title)
                          </span>
                          <div className="flex items-center gap-1.5">
                            <span
                              className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold ${
                                titleValid
                                  ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                                  : 'bg-amber-50 text-amber-800 border border-amber-200'
                              }`}
                            >
                              {titleValid ? <CheckCircle2 className="w-3 h-3" /> : <AlertCircle className="w-3 h-3" />}
                              {p.metaTitleLen} chars · {p.metaTitleWords} words (Target: 50–60)
                            </span>
                            <button
                              onClick={() => handleCopy(`title-${p.id}`, p.metaTitle)}
                              className="text-[10px] font-bold text-slate-500 hover:text-[#128B94] cursor-pointer"
                            >
                              {copiedId === `title-${p.id}` ? 'Copied' : 'Copy'}
                            </button>
                          </div>
                        </div>
                        <div className="text-sm font-bold text-[#1a0dab]">{p.metaTitle}</div>
                      </div>

                      {/* Meta Description */}
                      <div className="p-3 rounded-lg bg-white border border-slate-200">
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                          <span className="text-[10px] font-extrabold uppercase text-slate-500">
                            Meta Description (&lt;meta name=&quot;description&quot;&gt; / og:description)
                          </span>
                          <div className="flex items-center gap-1.5">
                            <span
                              className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold ${
                                descValid
                                  ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                                  : 'bg-amber-50 text-amber-800 border border-amber-200'
                              }`}
                            >
                              {descValid ? <CheckCircle2 className="w-3 h-3" /> : <AlertCircle className="w-3 h-3" />}
                              {p.metaDescLen} chars · {p.metaDescWords} words (Target: 120–160)
                            </span>
                            <button
                              onClick={() => handleCopy(`desc-${p.id}`, p.metaDescription)}
                              className="text-[10px] font-bold text-slate-500 hover:text-[#128B94] cursor-pointer"
                            >
                              {copiedId === `desc-${p.id}` ? 'Copied' : 'Copy'}
                            </button>
                          </div>
                        </div>
                        <p className="text-xs text-slate-700 leading-relaxed">{p.metaDescription}</p>
                      </div>

                      {/* Keywords */}
                      <div className="p-3 rounded-lg bg-white border border-slate-200">
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className="text-[10px] font-extrabold uppercase text-slate-500 flex items-center gap-1">
                            <Tag className="w-3 h-3 text-[#128B94]" /> Keywords Used in This Page ({p.keywordsList.length})
                          </span>
                          <button
                            onClick={() => handleCopy(`kw-${p.id}`, p.keywordsString)}
                            className="text-[10px] font-bold text-slate-500 hover:text-[#128B94] cursor-pointer"
                          >
                            {copiedId === `kw-${p.id}` ? 'Copied!' : 'Copy Keywords'}
                          </button>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {p.keywordsList.map((kw, kIdx) => (
                            <span
                              key={`${kw}-${kIdx}`}
                              className="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-[11px] font-medium text-slate-700"
                            >
                              {kw}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Schema.org Structured Data */}
                      <div className="p-3 rounded-lg bg-slate-900 text-slate-100 border border-slate-800">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <div className="flex flex-wrap items-center gap-1.5">
                            <span className="text-[10px] font-extrabold uppercase text-teal-300 flex items-center gap-1 mr-1">
                              <FileCode2 className="w-3.5 h-3.5" /> Schema (@graph):
                            </span>
                            {p.schemaTypes.map((st) => (
                              <span
                                key={st}
                                className="px-2 py-0.5 rounded bg-teal-500/20 border border-teal-400/30 text-[11px] font-mono font-bold text-teal-200"
                              >
                                {st}
                              </span>
                            ))}
                          </div>

                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => handleCopy(`schema-${p.id}`, JSON.stringify(p.schemaJson, null, 2))}
                              className="inline-flex items-center gap-1 px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-[10px] font-bold text-slate-200 cursor-pointer"
                            >
                              {copiedId === `schema-${p.id}` ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                              <span>{copiedId === `schema-${p.id}` ? 'Copied JSON-LD' : 'Copy JSON-LD'}</span>
                            </button>
                            <button
                              onClick={() => toggleSchemaExpand(p.id)}
                              className="inline-flex items-center gap-1 px-2 py-1 rounded bg-teal-600 hover:bg-teal-500 text-[10px] font-bold text-white cursor-pointer"
                            >
                              <span>{isSchemaExpanded ? 'Hide JSON-LD' : 'Inspect JSON-LD'}</span>
                              {isSchemaExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                            </button>
                          </div>
                        </div>

                        <div className="mt-2 text-[10px] font-mono text-slate-400 flex flex-wrap items-center gap-x-3 gap-y-1">
                          <span className="flex items-center gap-1 text-slate-300">
                            <Hash className="w-3 h-3 text-teal-400" /> Entity @id:
                          </span>
                          {p.schemaIds.map((sid) => (
                            <span key={sid} className="text-slate-300 break-all">
                              {sid}
                            </span>
                          ))}
                        </div>

                        {isSchemaExpanded && (
                          <pre className="mt-3 p-3 rounded bg-slate-950 border border-slate-800 text-[11px] font-mono text-emerald-300 overflow-x-auto max-h-80">
                            {JSON.stringify(p.schemaJson, null, 2)}
                          </pre>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </section>
        ) : (
          /* Compact Audit Table View */
          <section className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-slate-900 text-white text-[11px] uppercase tracking-wider">
                    <th className="p-3">#</th>
                    <th className="p-3">Page / Type</th>
                    <th className="p-3">Dep / Ser</th>
                    <th className="p-3 min-w-[220px]">Meta Heading (Title)</th>
                    <th className="p-3 min-w-[260px]">Meta Description</th>
                    <th className="p-3 min-w-[200px]">Keywords</th>
                    <th className="p-3 min-w-[200px]">Canonical &amp; Hreflang</th>
                    <th className="p-3 min-w-[160px]">Schema &amp; Social/GBP</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {filteredPages.map((p, idx) => (
                    <tr key={p.id} className="hover:bg-slate-50 align-top">
                      <td className="p-3 font-mono text-slate-400">{idx + 1}</td>
                      <td className="p-3 space-y-1">
                        <span className="inline-block text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                          {p.category}
                        </span>
                        <div className="font-bold text-slate-900">{p.pageName}</div>
                        <button
                          onClick={() => handleNavigateRecord(p)}
                          className="text-[11px] font-mono text-[#128B94] hover:underline cursor-pointer flex items-center gap-1 text-left"
                        >
                          <span>{p.path}</span>
                          <ExternalLink className="w-2.5 h-2.5 shrink-0" />
                        </button>
                      </td>
                      <td className="p-3 space-y-1">
                        <div className="font-bold text-slate-800">{p.departmentName}</div>
                        <div className="text-[11px] text-slate-600">{p.serviceName}</div>
                        <div className="text-[10px] font-mono text-slate-400">{p.operatorName}</div>
                      </td>
                      <td className="p-3 space-y-1">
                        <div className="font-bold text-[#1a0dab]">{p.metaTitle}</div>
                        <div className="text-[10px] font-mono text-slate-500">
                          {p.metaTitleLen} chars · {p.metaTitleWords} words
                        </div>
                      </td>
                      <td className="p-3 space-y-1">
                        <div className="text-slate-700 leading-relaxed">{p.metaDescription}</div>
                        <div className="text-[10px] font-mono text-slate-500">
                          {p.metaDescLen} chars · {p.metaDescWords} words
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="flex flex-wrap gap-1">
                          {p.keywordsList.map((kw, kIdx) => (
                            <span
                              key={`${kw}-${kIdx}`}
                              className="px-1.5 py-0.5 rounded bg-slate-100 text-[10px] text-slate-700"
                            >
                              {kw}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="p-3 font-mono text-[10px] space-y-1 break-all">
                        <div className="text-[#01403F] font-semibold">EN: {p.canonicalUrl}</div>
                        <div className="text-slate-500">AR: {p.arUrl}</div>
                      </td>
                      <td className="p-3 space-y-1.5">
                        <div className="flex flex-wrap gap-1">
                          {p.schemaTypes.map((st) => (
                            <span
                              key={st}
                              className="px-1.5 py-0.5 rounded bg-teal-50 text-teal-800 border border-teal-200 text-[10px] font-mono font-bold"
                            >
                              {st}
                            </span>
                          ))}
                        </div>
                        <div className="text-[10px] text-slate-600">
                          GBP: <span className="font-semibold">{p.gbpName}</span>
                        </div>
                        <div className="text-[10px] text-slate-500">
                          {p.socialProfiles.map((s) => s.label).join(', ')}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {filteredPages.length === 0 && (
          <div className="bg-white rounded-xl border border-dashed border-slate-300 p-12 text-center">
            <Search className="w-8 h-8 text-slate-400 mx-auto mb-2" />
            <div className="text-base font-bold text-slate-800">No matching pages found</div>
            <p className="text-xs text-slate-500 mt-1">Try clearing your search query or department filter.</p>
          </div>
        )}
      </div>
    </div>
  );
};
