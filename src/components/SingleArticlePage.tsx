import React, { useEffect, useState } from 'react';
import { Language, ServiceItem } from '../types';
import { BLOG_POSTS, BlogPost, TableOfContentItem } from '../data/blogData';
import { SERVICES, DEPARTMENTS } from '../data/departmentsData';
import { ArticleSidebar } from './ArticleSidebar';
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  Share2,
  Bookmark,
  Printer,
  AlertTriangle,
  Building2,
  FileText,
  User,
  Sparkles,
  ChevronRight,
  Info,
} from 'lucide-react';

interface SingleArticlePageProps {
  slug: string;
  language: Language;
  onNavigateToHome: () => void;
  onNavigateToKnowledgeHub: (category?: string, tag?: string) => void;
  onNavigateToArticle: (slug: string) => void;
  onNavigateToService: (serviceId: string) => void;
  onNavigateToDepartment: (deptId: string) => void;
  onOpenBooking: (service?: ServiceItem) => void;
}

export const SingleArticlePage: React.FC<SingleArticlePageProps> = ({
  slug,
  language,
  onNavigateToHome,
  onNavigateToKnowledgeHub,
  onNavigateToArticle,
  onNavigateToService,
  onNavigateToDepartment,
  onOpenBooking,
}) => {
  const isAr = language === 'ar';
  const [copiedLink, setCopiedLink] = useState(false);
  const [activeTocId, setActiveTocId] = useState<string>('');

  const post = BLOG_POSTS.find((p) => p.slug === slug);

  // Dynamic SEO Title & JSON-LD Injection
  useEffect(() => {
    if (!post) return;

    const originalTitle = document.title;
    const articleTitle = isAr ? post.titleAr : post.titleEn;
    document.title = `${articleTitle} | Karama Business Center Knowledge Hub`;

    // Inject JSON-LD Schema
    const scriptId = 'article-jsonld-schema';
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }

    const canonicalUrl = `https://ess.ae/knowledge-hub/${post.slug}`;

    const schemaData = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Article',
          '@id': `${canonicalUrl}#article`,
          isPartOf: {
            '@type': 'WebSite',
            '@id': 'https://ess.ae/#website',
            name: 'Emirates Secretarial Services & Karama Business Center',
            url: 'https://ess.ae',
          },
          headline: post.titleEn,
          description: post.excerptEn,
          inLanguage: isAr ? 'ar' : 'en',
          image: post.featuredImage,
          datePublished: post.publishedDate,
          dateModified: post.lastUpdatedDate,
          author: {
            '@type': 'Person',
            name: post.authorEn,
            jobTitle: post.authorRoleEn,
          },
          publisher: {
            '@type': 'Organization',
            name: 'Emirates Secretarial Services LLC & Karama Business Center',
            url: 'https://ess.ae',
            logo: {
              '@type': 'ImageObject',
              url: 'https://ess.ae/src/assets/images/ess-logo-transparent.png',
            },
          },
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': canonicalUrl,
          },
          keywords: post.tags.join(', '),
        },
        {
          '@type': 'BreadcrumbList',
          '@id': `${canonicalUrl}#breadcrumb`,
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: isAr ? 'الرئيسية' : 'Home',
              item: 'https://ess.ae/',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: isAr ? 'مركز المعرفة' : 'Knowledge Hub',
              item: 'https://ess.ae/knowledge-hub',
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: isAr ? post.categoryAr : post.category,
              item: `https://ess.ae/knowledge-hub?category=${encodeURIComponent(post.category)}`,
            },
            {
              '@type': 'ListItem',
              position: 4,
              name: articleTitle,
              item: canonicalUrl,
            },
          ],
        },
      ],
    };

    script.textContent = JSON.stringify(schemaData);

    return () => {
      document.title = originalTitle;
      const el = document.getElementById(scriptId);
      if (el) el.remove();
    };
  }, [post, isAr]);

  // Scroll to TOC Item
  const scrollToSection = (id: string) => {
    setActiveTocId(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90; // offset for sticky header
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Copy Article Link
  const handleCopyLink = () => {
    const url = `${window.location.origin}/knowledge-hub/${slug}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  // Share to WhatsApp
  const handleWhatsAppShare = () => {
    const url = `${window.location.origin}/knowledge-hub/${slug}`;
    const text = `${isAr ? post?.titleAr : post?.titleEn} - ${url}`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
  };

  // If article not found, show friendly fallback
  if (!post) {
    return (
      <div className="min-h-screen bg-slate-50 pt-28 pb-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="w-16 h-16 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertTriangle className="w-8 h-8" />
          </div>
          <h1 className="text-2xl font-bold text-slate-900 mb-2">
            {isAr ? 'المقال غير متوفر أو تم نقله' : 'Article Not Found'}
          </h1>
          <p className="text-slate-600 mb-6">
            {isAr
              ? 'لم نتمكن من العثور على المقال المطلوب. يرجى تصفح مركز المعرفة للاطلاع على أحدث الأدلة الرسمية.'
              : 'The requested government service guide could not be found. Please browse the Knowledge Hub for our complete index of verified articles.'}
          </p>
          <button
            onClick={() => onNavigateToKnowledgeHub()}
            className="px-6 py-3 rounded-xl bg-[#128B94] hover:bg-[#0d6e75] text-white font-semibold text-sm transition-colors cursor-pointer inline-flex items-center gap-2"
          >
            {isAr ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
            {isAr ? 'العودة لمركز المعرفة' : 'Back to Knowledge Hub'}
          </button>
        </div>
      </div>
    );
  }

  // Related Services
  const relatedService = SERVICES.find((s) => s.id === post.relatedServiceId);
  const additionalRelatedServices = post.relatedServiceIds
    ? SERVICES.filter((s) => post.relatedServiceIds?.includes(s.id))
    : [];

  // Related Articles
  const relatedArticles = post.relatedArticleSlugs
    ? BLOG_POSTS.filter((p) => post.relatedArticleSlugs?.includes(p.slug))
    : BLOG_POSTS.filter((p) => p.category === post.category && p.slug !== post.slug).slice(0, 3);

  // Content Renderer
  const rawContent = isAr ? post.contentAr : post.contentEn;

  // Render markdown-like blocks cleanly
  const renderFormattedContent = (content: string) => {
    const lines = content.split('\n');
    const elements: React.ReactNode[] = [];
    let listBuffer: { type: 'ul' | 'ol'; items: string[] } | null = null;

    const flushList = () => {
      if (!listBuffer) return;
      if (listBuffer.type === 'ul') {
        elements.push(
          <ul key={`ul-${elements.length}`} className="my-4 space-y-2.5 list-none pl-0">
            {listBuffer.items.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700 leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-[#128B94] mt-2 shrink-0" />
                <span dangerouslySetInnerHTML={{ __html: formatInline(item) }} />
              </li>
            ))}
          </ul>
        );
      } else {
        elements.push(
          <ol key={`ol-${elements.length}`} className="my-4 space-y-2.5 list-none pl-0">
            {listBuffer.items.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                <span className="w-5 h-5 rounded-full bg-teal-100 text-[#0F766E] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span dangerouslySetInnerHTML={{ __html: formatInline(item) }} />
              </li>
            ))}
          </ol>
        );
      }
      listBuffer = null;
    };

    const formatInline = (text: string) => {
      return text.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-slate-900">$1</strong>');
    };

    lines.forEach((line, index) => {
      const trimmed = line.trim();

      // Check for <h2 id="...">
      const h2Match = trimmed.match(/^<h2 id="([^"]+)">([^<]+)<\/h2>$/);
      if (h2Match) {
        flushList();
        elements.push(
          <div key={`h2-${index}`} id={h2Match[1]} className="scroll-mt-28 pt-6 pb-2">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-200 pb-3 flex items-center gap-3">
              <span className="w-2 h-6 bg-[#128B94] rounded-full inline-block" />
              <span>{h2Match[2]}</span>
            </h2>
          </div>
        );
        return;
      }

      // Check for ### H3
      if (trimmed.startsWith('### ')) {
        flushList();
        elements.push(
          <h3 key={`h3-${index}`} className="text-base sm:text-lg font-bold text-slate-800 mt-6 mb-2">
            {trimmed.replace('### ', '')}
          </h3>
        );
        return;
      }

      // Check for Bullet list (- item)
      if (trimmed.startsWith('- ')) {
        const itemText = trimmed.replace(/^- /, '');
        if (!listBuffer || listBuffer.type !== 'ul') {
          flushList();
          listBuffer = { type: 'ul', items: [itemText] };
        } else {
          listBuffer.items.push(itemText);
        }
        return;
      }

      // Check for Numbered list (1. item)
      const numMatch = trimmed.match(/^\d+\.\s+(.+)$/);
      if (numMatch) {
        const itemText = numMatch[1];
        if (!listBuffer || listBuffer.type !== 'ol') {
          flushList();
          listBuffer = { type: 'ol', items: [itemText] };
        } else {
          listBuffer.items.push(itemText);
        }
        return;
      }

      // Blank line
      if (!trimmed) {
        flushList();
        return;
      }

      // Normal paragraph
      flushList();
      elements.push(
        <p
          key={`p-${index}`}
          className="text-sm sm:text-base text-slate-700 leading-relaxed my-3"
          dangerouslySetInnerHTML={{ __html: formatInline(trimmed) }}
        />
      );
    });

    flushList();
    return elements;
  };

  return (
    <div className={`min-h-screen bg-slate-50 text-slate-800 pt-18 sm:pt-22 lg:pt-24 pb-20 ${isAr ? 'font-arabic' : ''}`}>
      {/* 1. Breadcrumbs Bar */}
      <nav aria-label="Breadcrumb" className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          <ol className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 overflow-x-auto whitespace-nowrap">
            <li>
              <button
                onClick={onNavigateToHome}
                className="hover:text-[#128B94] transition-colors cursor-pointer font-medium"
              >
                {isAr ? 'الرئيسية' : 'Home'}
              </button>
            </li>
            <li className="text-slate-300">/</li>
            <li>
              <button
                onClick={() => onNavigateToKnowledgeHub()}
                className="hover:text-[#128B94] transition-colors cursor-pointer font-medium"
              >
                {isAr ? 'مركز المعرفة' : 'Knowledge Hub'}
              </button>
            </li>
            <li className="text-slate-300">/</li>
            <li>
              <button
                onClick={() => onNavigateToKnowledgeHub(post.category)}
                className="hover:text-[#128B94] transition-colors cursor-pointer font-medium"
              >
                {isAr ? post.categoryAr : post.category}
              </button>
            </li>
            <li className="text-slate-300">/</li>
            <li className="text-slate-800 font-semibold truncate max-w-xs sm:max-w-md">
              {isAr ? post.titleAr : post.titleEn}
            </li>
          </ol>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Main Article Column (8 cols) */}
          <main className="lg:col-span-8 space-y-8">
            {/* 2. Article Header */}
            <header className="space-y-4">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-teal-50 text-[#0F766E] border border-teal-200">
                  {isAr ? post.categoryAr : post.category}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#128B94]" />
                  <span>{isAr ? post.officialAuthorityAr : post.officialAuthorityEn}</span>
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {isAr ? post.titleAr : post.titleEn}
              </h1>

              {/* Author & Publication Metadata */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-3 pb-4 border-y border-slate-200 text-xs text-slate-600">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#128B94]/10 border border-[#128B94]/20 flex items-center justify-center font-bold text-[#0F766E] text-sm">
                    {post.authorEn.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-sm">
                      {isAr ? post.authorAr : post.authorEn}
                    </div>
                    <div className="text-slate-500 text-xs">
                      {isAr ? post.authorRoleAr : post.authorRoleEn}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-slate-400" />
                    <span>{isAr ? 'تاريخ النشر:' : 'Published:'} {post.publishedDate}</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-slate-400" />
                    <span>{post.readTime}</span>
                  </span>
                  <span className="text-[11px] text-teal-700 bg-teal-50 px-2.5 py-1 rounded-md border border-teal-200 font-medium">
                    {isAr ? `تحديث قانوني: ${post.lastUpdatedDate}` : `Verified: ${post.lastUpdatedDate}`}
                  </span>
                </div>
              </div>

              {/* Share & Action Bar */}
              <div className="flex items-center justify-between gap-3 pt-1">
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyLink}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-[#128B94] hover:border-teal-300 text-xs font-semibold transition-colors cursor-pointer"
                    title="Copy Link"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                    <span>{copiedLink ? (isAr ? 'تم النسخ!' : 'Copied!') : (isAr ? 'نسخ الرابط' : 'Copy Link')}</span>
                  </button>

                  <button
                    onClick={handleWhatsAppShare}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 hover:bg-emerald-100 text-xs font-semibold transition-colors cursor-pointer"
                    title="Share via WhatsApp"
                  >
                    <span>{isAr ? 'واتساب' : 'WhatsApp'}</span>
                  </button>
                </div>

                <button
                  onClick={() => window.print()}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-slate-900 text-xs font-medium transition-colors cursor-pointer"
                  title="Print Guide"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">{isAr ? 'طباعة' : 'Print'}</span>
                </button>
              </div>
            </header>

            {/* 3. Featured Image */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-xs">
              <img
                src={post.featuredImage}
                alt={isAr ? post.featuredImageAltAr : post.featuredImageAltEn}
                className="w-full h-64 sm:h-80 md:h-96 object-cover"
              />
              <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-200 text-xs text-slate-500 flex justify-between items-center">
                <span>{isAr ? post.featuredImageAltAr : post.featuredImageAltEn}</span>
                <span className="font-semibold text-slate-700">Karama Business Center</span>
              </div>
            </div>

            {/* 4. Quick Answer Callout Box */}
            <div className="bg-gradient-to-r from-teal-50 via-teal-50/60 to-white rounded-2xl p-5 sm:p-6 border-l-4 rtl:border-l-0 rtl:border-r-4 border-[#128B94] shadow-xs">
              <div className="flex items-center gap-2 text-[#0F766E] font-bold text-sm mb-2">
                <Sparkles className="w-4 h-4 text-[#128B94]" />
                <span>{isAr ? 'الإجابة المباشرة والخلاصة التنفيذية' : 'Quick Answer / Key Executive Summary'}</span>
              </div>
              <p className="text-sm sm:text-base text-slate-800 font-medium leading-relaxed">
                {isAr ? post.quickAnswerAr : post.quickAnswerEn}
              </p>
            </div>

            {/* 5. Official Authority Citation Card */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center shrink-0 text-slate-700">
                  <ShieldCheck className="w-5 h-5 text-[#128B94]" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-semibold">
                    {isAr ? 'المرجع الحكومي الرسمي المعتمد:' : 'Verified Official Government Reference:'}
                  </div>
                  <div className="text-sm font-bold text-slate-900 mt-0.5">
                    {isAr ? post.officialSourceLabelAr : post.officialSourceLabelEn}
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    {isAr
                      ? `تم التحقق والتدقيق المباشر وفق أحدث القرارات الرسمية (تاريخ التدقيق: ${post.lastResearchedDate})`
                      : `Audited against official ministerial decrees (Audited: ${post.lastResearchedDate})`}
                  </div>
                </div>
              </div>

              <a
                href={post.officialSourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors cursor-pointer whitespace-nowrap shrink-0 border border-slate-300"
              >
                <span>{isAr ? 'زيارة البوابة الرسمية' : 'Visit Official Portal'}</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
              </a>
            </div>

            {/* 6. Table of Contents */}
            {post.tableOfContents && post.tableOfContents.length > 0 && (
              <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-xs">
                <h3 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#128B94]" />
                  {isAr ? 'فهرس المحتويات والأقسام' : 'Table of Contents'}
                </h3>
                <nav className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {post.tableOfContents.map((item, idx) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`text-left rtl:text-right px-3 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer flex items-center gap-2.5 ${
                        activeTocId === item.id
                          ? 'bg-teal-50 text-[#0F766E] font-bold border border-teal-200'
                          : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200/60'
                      }`}
                    >
                      <span className="w-5 h-5 rounded-full bg-white border border-slate-200 text-slate-600 text-[10px] font-bold flex items-center justify-center shrink-0">
                        {idx + 1}
                      </span>
                      <span className="truncate">{isAr ? item.titleAr : item.titleEn}</span>
                    </button>
                  ))}
                </nav>
              </div>
            )}

            {/* 7. Full Article Body Content */}
            <article className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs prose prose-slate max-w-none">
              {renderFormattedContent(rawContent)}
            </article>

            {/* 8. Official Statutory Disclaimer Card */}
            <div className="bg-amber-50/60 rounded-2xl p-5 sm:p-6 border border-amber-200 text-amber-950 space-y-3">
              <div className="flex items-center gap-2 font-bold text-sm text-amber-900">
                <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                <span>{isAr ? 'إخلاء مسؤولية تنظيمي وقانوني معتمد' : 'Official Regulatory & Statutory Fee Notice'}</span>
              </div>
              <p className="text-xs sm:text-sm text-amber-900/90 leading-relaxed">
                {isAr ? post.disclaimerAr : post.disclaimerEn}
              </p>
              <div className="pt-2 border-t border-amber-200/70 text-[11px] text-amber-800 leading-relaxed">
                <strong>{isAr ? 'تنويه الشفافية:' : 'Transparency Note:'}</strong>{' '}
                {isAr
                  ? 'مركز الكرامة للأعمال وإمارات سكرتاريال سيرفيسز ش.ذ.م.م مركز خاص مرخص لتقديم خدمات الطباعة وتخليص المعاملات الحكومية (آمر، تسهيل، اقتصادية دبي، الفحص الطبي سالم، إيجاري). الرسوم الحكومية الرسمية معفاة من ضريبة القيمة المضافة ومحددة بقرارات رسمية، في حين تخضع رسوم الطباعة لضريبة 5%. القرارات النهائية والاعتمادات السيادية تخضع حصرياً للسلطات الحكومية المختصة.'
                  : 'Karama Business Center and Emirates Secretarial Services LLC operate as an authorized private government transaction typing and administrative center (Amer Lic. #772, Tasheel #4108, DET #902, DHA Salem KMFC, DLD Ejari). Statutory government fees are VAT-exempt and determined by federal/emirate decree. Document processing typing fees are subject to 5% UAE VAT. Sovereign approvals and visa issuance remain the exclusive discretion of the respective UAE authorities.'}
              </div>
            </div>

            {/* 9. Contextual Service Action Card */}
            {relatedService && (
              <div className="bg-gradient-to-r from-teal-900 via-teal-950 to-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-md relative overflow-hidden">
                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="space-y-2 max-w-xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-teal-500/20 text-teal-300 border border-teal-500/30">
                      <Building2 className="w-3.5 h-3.5" />
                      <span>{isAr ? relatedService.authorityAr : relatedService.authorityEn}</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {isAr ? relatedService.titleAr : relatedService.titleEn}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {isAr ? relatedService.shortDescAr : relatedService.shortDescEn}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 pt-2">
                      <div>
                        <span className="text-slate-400">{isAr ? 'زمن المعالجة: ' : 'Processing: '}</span>
                        <span className="font-semibold text-teal-200">
                          {isAr ? relatedService.processingTimeAr : relatedService.processingTimeEn}
                        </span>
                      </div>
                      <div>
                        <span className="text-slate-400">{isAr ? 'الرسوم الحكومية: ' : 'Government Fee: '}</span>
                        <span className="font-semibold text-white">
                          {relatedService.govFee > 0 ? `AED ${relatedService.govFee}` : (isAr ? 'حسب الحالة' : 'Variable')}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0">
                    <button
                      onClick={() => onOpenBooking(relatedService)}
                      className="px-6 py-3 rounded-xl bg-teal-400 hover:bg-teal-300 text-slate-950 font-bold text-xs sm:text-sm transition-all cursor-pointer shadow-md text-center"
                    >
                      {isAr ? 'حجز موعد / تقديم الطلب' : 'Book Fast-Track Service'}
                    </button>
                    <button
                      onClick={() => onNavigateToService(relatedService.id)}
                      className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs transition-colors cursor-pointer border border-white/10 text-center"
                    >
                      {isAr ? 'تفاصيل الخدمة الكاملة' : 'View Full Service Page'}
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* 10. Related Articles Grid */}
            {relatedArticles.length > 0 && (
              <section className="space-y-4 pt-4">
                <h3 className="text-lg font-bold text-slate-900 flex items-center justify-between">
                  <span>{isAr ? 'مقالات وأدلة ذات صلة' : 'Related Government Guides'}</span>
                  <button
                    onClick={() => onNavigateToKnowledgeHub(post.category)}
                    className="text-xs font-bold text-[#128B94] hover:text-[#0c6b72] cursor-pointer"
                  >
                    {isAr ? 'عرض المزيد' : 'View all in category'}
                  </button>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {relatedArticles.map((rel) => (
                    <article
                      key={rel.slug}
                      onClick={() => onNavigateToArticle(rel.slug)}
                      className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-md transition-all cursor-pointer flex flex-col group"
                    >
                      <div className="h-36 overflow-hidden relative">
                        <img
                          src={rel.featuredImage}
                          alt={isAr ? rel.titleAr : rel.titleEn}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <span className="absolute top-2.5 left-2.5 rtl:left-auto rtl:right-2.5 px-2.5 py-1 rounded-full text-[10px] font-bold bg-white/95 text-slate-800 shadow-xs">
                          {isAr ? rel.categoryAr : rel.category}
                        </span>
                      </div>
                      <div className="p-4 flex-1 flex flex-col justify-between">
                        <div>
                          <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#128B94] transition-colors line-clamp-2 mb-1.5">
                            {isAr ? rel.titleAr : rel.titleEn}
                          </h4>
                          <p className="text-xs text-slate-500 line-clamp-2">
                            {isAr ? rel.excerptAr : rel.excerptEn}
                          </p>
                        </div>
                        <div className="flex items-center justify-between pt-3 mt-3 border-t border-slate-100 text-[11px] text-slate-400">
                          <span>{rel.readTime}</span>
                          <span className="text-[#128B94] font-semibold flex items-center gap-1 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform">
                            {isAr ? 'قراءة' : 'Read'}
                            {isAr ? <ArrowLeft className="w-3 h-3" /> : <ArrowRight className="w-3 h-3" />}
                          </span>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            )}
          </main>

          {/* Sticky Sidebar Column (4 cols) */}
          <div className="lg:col-span-4">
            <div className="sticky top-28">
              <ArticleSidebar
                language={language}
                currentPostSlug={post.slug}
                onNavigateToArticle={onNavigateToArticle}
                onNavigateToKnowledgeHub={onNavigateToKnowledgeHub}
                onNavigateToService={onNavigateToService}
                onNavigateToDepartment={onNavigateToDepartment}
                onOpenBooking={onOpenBooking}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
