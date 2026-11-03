import React, { useState, useEffect } from 'react';
import { Language, ServiceItem } from '../types';
import { BLOG_POSTS, BlogPost, KNOWLEDGE_HUB_CATEGORIES } from '../data/blogData';
import { SERVICES } from '../data/departmentsData';
import {
  BookOpen,
  Calendar,
  Clock,
  ArrowRight,
  ArrowLeft,
  Search,
  Tag,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ExternalLink,
  Building2,
  Filter,
  X,
  FileCheck,
} from 'lucide-react';

interface BlogPageProps {
  language: Language;
  onNavigateToHome: () => void;
  onNavigateToService: (serviceId: string) => void;
  onNavigateToArticle: (slug: string) => void;
  onOpenBooking: (service?: ServiceItem) => void;
  initialCategory?: string;
  initialTag?: string;
}

export const BlogPage: React.FC<BlogPageProps> = ({
  language,
  onNavigateToHome,
  onNavigateToService,
  onNavigateToArticle,
  onOpenBooking,
  initialCategory,
  initialTag,
}) => {
  const isAr = language === 'ar';
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory || 'all');
  const [activeTag, setActiveTag] = useState<string | null>(initialTag || null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [visibleCount, setVisibleCount] = useState<number>(9);

  // Sync if initial props change
  useEffect(() => {
    if (initialCategory) setSelectedCategory(initialCategory);
    if (initialTag) setActiveTag(initialTag);
  }, [initialCategory, initialTag]);

  // Filter posts
  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory =
      selectedCategory === 'all' || post.category === selectedCategory;

    const matchesTag =
      !activeTag || post.tags.some((t) => t.toLowerCase() === activeTag.toLowerCase());

    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !q ||
      post.titleEn.toLowerCase().includes(q) ||
      post.titleAr.toLowerCase().includes(q) ||
      post.excerptEn.toLowerCase().includes(q) ||
      post.excerptAr.toLowerCase().includes(q) ||
      post.quickAnswerEn.toLowerCase().includes(q) ||
      post.quickAnswerAr.toLowerCase().includes(q) ||
      post.officialAuthorityEn.toLowerCase().includes(q) ||
      post.tags.some((t) => t.toLowerCase().includes(q));

    return matchesCategory && matchesTag && matchesSearch;
  });

  const displayedPosts = filteredPosts.slice(0, visibleCount);

  // Calculate category counts
  const categoryCounts = BLOG_POSTS.reduce((acc, post) => {
    acc[post.category] = (acc[post.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const handleCategorySelect = (catId: string) => {
    setSelectedCategory(catId);
    setVisibleCount(9);
  };

  const handleClearFilters = () => {
    setSelectedCategory('all');
    setActiveTag(null);
    setSearchQuery('');
    setVisibleCount(9);
  };

  return (
    <div className={`min-h-screen bg-slate-50 text-slate-800 pt-18 sm:pt-22 lg:pt-24 pb-20 ${isAr ? 'font-arabic' : ''}`}>
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          <ol className="flex items-center gap-2 text-xs sm:text-sm text-slate-500">
            <li>
              <button
                onClick={onNavigateToHome}
                className="hover:text-[#128B94] transition-colors cursor-pointer font-medium"
              >
                {isAr ? 'الرئيسية' : 'Home'}
              </button>
            </li>
            <li className="text-slate-300">/</li>
            <li className="text-slate-800 font-semibold">
              {isAr ? 'مركز المعرفة والأدلة الحكومية' : 'Government Knowledge Hub'}
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-white to-slate-50 border-b border-slate-200 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-teal-50 text-[#0F766E] border border-teal-200 mb-4 shadow-2xs">
            <ShieldCheck className="w-4 h-4 text-[#128B94]" />
            <span>
              {isAr
                ? '20 دليلاً رسمياً مدققاً ومطابقاً للقرارات الحكومية في الإمارات'
                : '20 Verified UAE Government Service & Compliance Guides'}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight max-w-4xl mx-auto mb-4">
            {isAr
              ? 'مركز المعرفة الحكومية واللوائح التنظيمية'
              : 'UAE Government Knowledge Hub & Official Guides'}
          </h1>

          <p className="text-sm sm:text-base text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
            {isAr
              ? 'أدلة إجرائية شاملة مدققة وفق أحدث معايير الهيئة الاتحادية للهوية (ICP)، الإدارة العامة للإقامة (آمر)، وزارة الموارد البشرية (تسهيل)، دائرة الأراضي والأملاك (إيجاري)، اقتصادية دبي وهيئة الصحة (سالم KMFC).'
              : 'Official procedural guides, statutory fee schedules, document checklists, and compliance requirements verified against official ministerial portals (ICP, GDRFA Amer, MoHRE Tasheel, DLD Ejari, DET Dubai, DHA Salem KMFC).'}
          </p>

          {/* Search Box */}
          <div className="max-w-2xl mx-auto relative">
            <div className="relative flex items-center">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 rtl:left-auto rtl:right-4 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setVisibleCount(9);
                }}
                placeholder={
                  isAr
                    ? 'ابحث في كافة الأدلة (مثال: تجديد الإقامة، عقود إيجاري، ترخيص تجاري، فحص طبي)...'
                    : 'Search 20 guides by keyword (e.g. golden visa, ejari, trade license, ohc card)...'
                }
                className="w-full bg-white border border-slate-300 rounded-2xl pl-12 pr-12 rtl:pl-12 rtl:pr-12 py-3.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-3 focus:ring-[#128B94]/20 focus:border-[#128B94] shadow-sm transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 rtl:right-auto rtl:left-4 p-1 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-thin">
          {KNOWLEDGE_HUB_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            const count = cat.id === 'all' ? BLOG_POSTS.length : categoryCounts[cat.id] || 0;
            return (
              <button
                key={cat.id}
                onClick={() => handleCategorySelect(cat.id)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 shrink-0 ${
                  isSelected
                    ? 'bg-[#128B94] text-white shadow-sm'
                    : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
                }`}
              >
                <span>{isAr ? cat.labelAr : cat.labelEn}</span>
                <span
                  className={`px-1.5 py-0.5 rounded-full text-[10px] font-extrabold ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Filters Bar */}
        {(selectedCategory !== 'all' || activeTag || searchQuery) && (
          <div className="bg-teal-50/70 border border-teal-200 rounded-xl p-3 mb-6 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-semibold text-teal-900 flex items-center gap-1.5">
                <Filter className="w-3.5 h-3.5 text-[#128B94]" />
                {isAr ? 'التصفيات الحالية:' : 'Active Filters:'}
              </span>

              {selectedCategory !== 'all' && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white border border-teal-200 text-[#0F766E] font-medium">
                  {selectedCategory}
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className="hover:text-red-500"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}

              {activeTag && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white border border-teal-200 text-[#0F766E] font-medium">
                  #{activeTag}
                  <button onClick={() => setActiveTag(null)} className="hover:text-red-500">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}

              {searchQuery && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white border border-teal-200 text-[#0F766E] font-medium">
                  "{searchQuery}"
                  <button onClick={() => setSearchQuery('')} className="hover:text-red-500">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
            </div>

            <button
              onClick={handleClearFilters}
              className="text-xs font-bold text-red-600 hover:text-red-800 underline cursor-pointer"
            >
              {isAr ? 'إلغاء كافة التصفيات' : 'Clear All Filters'}
            </button>
          </div>
        )}

        {/* Result Count */}
        <div className="flex items-center justify-between mb-6 text-xs text-slate-500">
          <div>
            {isAr ? (
              <span>
                عرض <strong>{displayedPosts.length}</strong> من إجمالي <strong>{filteredPosts.length}</strong> دليلاً حكومياً
              </span>
            ) : (
              <span>
                Showing <strong>{displayedPosts.length}</strong> of <strong>{filteredPosts.length}</strong> official guides
              </span>
            )}
          </div>
        </div>

        {/* Articles Grid */}
        {displayedPosts.length === 0 ? (
          <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center">
            <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-800 mb-1">
              {isAr ? 'لم يتم العثور على مقالات مطابقة' : 'No matching guides found'}
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              {isAr
                ? 'جرب البحث بكلمات أخرى أو اختر فئة مختلفة للاطلاع على كافة الأدلة.'
                : 'Try adjusting your search terms or category selection to view available guides.'}
            </p>
            <button
              onClick={handleClearFilters}
              className="px-4 py-2 rounded-xl bg-[#128B94] text-white text-xs font-semibold hover:bg-[#0d6e75] transition-colors"
            >
              {isAr ? 'عرض كافة الموضوعات' : 'View All Topics'}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {displayedPosts.map((post) => {
              const related = SERVICES.find((s) => s.id === post.relatedServiceId);

              return (
                <article
                  key={post.slug}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col group"
                >
                  {/* Article Thumbnail */}
                  <div
                    onClick={() => onNavigateToArticle(post.slug)}
                    className="h-48 overflow-hidden relative cursor-pointer"
                  >
                    <img
                      src={post.featuredImage}
                      alt={isAr ? post.featuredImageAltAr : post.featuredImageAltEn}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 rtl:left-auto rtl:right-3 flex flex-wrap gap-1.5">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-white/95 backdrop-blur-xs text-slate-900 shadow-xs">
                        {isAr ? post.categoryAr : post.category}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 rtl:left-auto rtl:right-3">
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-slate-900/80 backdrop-blur-xs text-teal-300">
                        <ShieldCheck className="w-3 h-3" />
                        <span>{isAr ? post.officialAuthorityAr : post.officialAuthorityEn}</span>
                      </span>
                    </div>
                  </div>

                  {/* Article Body */}
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Meta stats */}
                      <div className="flex items-center gap-3 text-[11px] text-slate-400 mb-2">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {post.publishedDate}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>

                      {/* Title */}
                      <h2
                        onClick={() => onNavigateToArticle(post.slug)}
                        className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#128B94] transition-colors leading-snug mb-2 cursor-pointer"
                      >
                        {isAr ? post.titleAr : post.titleEn}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 line-clamp-3">
                        {isAr ? post.excerptAr : post.excerptEn}
                      </p>

                      {/* Quick Answer Snippet */}
                      <div className="bg-teal-50/60 rounded-xl p-3 border border-teal-100 text-[11px] text-teal-950 mb-4 line-clamp-2">
                        <strong className="text-[#0F766E] font-bold">
                          {isAr ? 'الخلاصة: ' : 'Quick Take: '}
                        </strong>
                        {isAr ? post.quickAnswerAr : post.quickAnswerEn}
                      </div>
                    </div>

                    {/* Author & Actions */}
                    <div>
                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 mb-4">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center font-bold text-slate-700 text-[10px]">
                            {post.authorEn.charAt(0)}
                          </div>
                          <span className="font-semibold text-slate-700 text-xs">
                            {isAr ? post.authorAr : post.authorEn}
                          </span>
                        </div>
                        <span className="text-[10px] text-slate-400">
                          {isAr ? `تدقيق: ${post.lastResearchedDate}` : `Verified: ${post.lastResearchedDate}`}
                        </span>
                      </div>

                      <div className="flex items-center justify-between gap-2 pt-1">
                        <button
                          onClick={() => onNavigateToArticle(post.slug)}
                          className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-teal-50 hover:bg-[#128B94] text-[#0F766E] hover:text-white text-xs font-bold transition-all cursor-pointer"
                        >
                          <span>{isAr ? 'قراءة الدليل كاملاً' : 'Read Full Guide'}</span>
                          {isAr ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
                        </button>

                        {related && (
                          <button
                            onClick={() => onNavigateToService(related.id)}
                            className="px-2.5 py-2 rounded-xl bg-white border border-slate-200 hover:border-teal-300 text-[11px] font-semibold text-slate-700 transition-colors cursor-pointer"
                          >
                            {isAr ? 'الخدمة' : 'Service'}
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}

        {/* Load More Button */}
        {visibleCount < filteredPosts.length && (
          <div className="text-center pt-10">
            <button
              onClick={() => setVisibleCount((prev) => prev + 6)}
              className="px-8 py-3.5 rounded-xl bg-white hover:bg-slate-100 border border-slate-300 text-slate-800 font-bold text-xs sm:text-sm shadow-xs transition-colors cursor-pointer inline-flex items-center gap-2"
            >
              <span>{isAr ? 'تحميل المزيد من الأدلة' : 'Load More Guides'}</span>
              <span className="text-xs text-slate-500 font-normal">
                ({filteredPosts.length - visibleCount} {isAr ? 'متبقية' : 'remaining'})
              </span>
            </button>
          </div>
        )}

        {/* Official Transparency & Compliance Strip */}
        <div className="mt-16 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-teal-50 text-[#0F766E] flex items-center justify-center shrink-0 border border-teal-200">
                <FileCheck className="w-6 h-6 text-[#128B94]" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1">
                  {isAr
                    ? 'مركز الكرامة للأعمال (KBC) وإمارات سكرتاريال سيرفيسز ش.ذ.م.م'
                    : 'Karama Business Center (KBC) & Emirates Secretarial Services LLC'}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed max-w-2xl">
                  {isAr
                    ? 'مركز خاص مرخص لتقديم خدمات الطباعة وتخليص المعاملات الحكومية (آمر #772، تسهيل #4108، اقتصادية دبي #902، الفحص الطبي سالم KMFC، عقود إيجاري). الرسوم الحكومية الرسمية معفاة من ضريبة القيمة المضافة، في حين تخضع رسوم الطباعة لضريبة 5%. القرارات السيادية تخضع حصرياً للجهات الرسمية.'
                    : 'Authorized private government transaction and document clearance center (Amer #772, Tasheel #4108, DET #902, KMFC Salem Medical, DLD Ejari). Statutory government fees are VAT-exempt; typing charges are subject to 5% VAT. All final sovereign approvals remain with official UAE authorities.'}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full md:w-auto">
              <button
                onClick={() => onOpenBooking()}
                className="px-5 py-2.5 rounded-xl bg-[#128B94] hover:bg-[#0d6e75] text-white text-xs font-bold transition-colors cursor-pointer text-center"
              >
                {isAr ? 'حجز موعد إنجاز معاملة' : 'Book Fast-Track Desk'}
              </button>
              <a
                href="https://wa.me/97143426666"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs font-bold transition-colors cursor-pointer text-center"
              >
                {isAr ? 'استفسار عبر واتساب' : 'WhatsApp Support'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
