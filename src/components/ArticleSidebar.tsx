import React, { useState } from 'react';
import { Language, ServiceItem } from '../types';
import { BLOG_POSTS, BlogPost } from '../data/blogData';
import { SERVICES, DEPARTMENTS } from '../data/departmentsData';
import {
  Search,
  Tag,
  Clock,
  ArrowRight,
  ArrowLeft,
  Building2,
  Phone,
  MessageCircle,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  ExternalLink,
} from 'lucide-react';

interface ArticleSidebarProps {
  language: Language;
  currentPostSlug?: string;
  onNavigateToArticle: (slug: string) => void;
  onNavigateToKnowledgeHub: (category?: string, tag?: string) => void;
  onNavigateToService: (serviceId: string) => void;
  onNavigateToDepartment: (deptId: string) => void;
  onOpenBooking: (service?: ServiceItem) => void;
}

export const ArticleSidebar: React.FC<ArticleSidebarProps> = ({
  language,
  currentPostSlug,
  onNavigateToArticle,
  onNavigateToKnowledgeHub,
  onNavigateToService,
  onNavigateToDepartment,
  onOpenBooking,
}) => {
  const isAr = language === 'ar';
  const [searchInput, setSearchInput] = useState('');

  const currentPost = currentPostSlug
    ? BLOG_POSTS.find((p) => p.slug === currentPostSlug)
    : undefined;

  // Section A: Search Submit
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      onNavigateToKnowledgeHub(undefined, searchInput.trim());
    }
  };

  // Section B: Top 8 Popular Tags extracted across all 20 articles
  const allTagsWithCount = BLOG_POSTS.reduce((acc, post) => {
    post.tags.forEach((tag) => {
      acc[tag] = (acc[tag] || 0) + 1;
    });
    return acc;
  }, {} as Record<string, number>);

  const topTags = Object.entries(allTagsWithCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8)
    .map(([tag]) => tag);

  // Section C: Latest 3 Posts (excluding current if viewing an article)
  const latestPosts = BLOG_POSTS.filter((p) => p.slug !== currentPostSlug).slice(0, 3);

  // Section D: Contextual Services & Departments
  const contextualService = currentPost?.relatedServiceId
    ? SERVICES.find((s) => s.id === currentPost.relatedServiceId)
    : SERVICES[0];

  const contextualDepartment = currentPost?.departmentId
    ? DEPARTMENTS.find((d) => d.id === currentPost.departmentId)
    : DEPARTMENTS[0];

  return (
    <aside className="space-y-6">
      {/* SECTION A: Search Knowledge Hub */}
      <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs">
        <h3 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
          <Search className="w-4 h-4 text-[#128B94]" />
          {isAr ? 'بحث في مركز المعرفة' : 'Search Knowledge Hub'}
        </h3>
        <form onSubmit={handleSearchSubmit} className="relative">
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder={
              isAr
                ? 'ابحث بالكلمات المفتاحية (مثل: إيجاري، فحص طبي)...'
                : 'Search regulations, fees, visas, ejari...'
            }
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#128B94]/20 focus:border-[#128B94] transition-all"
          />
          <button
            type="submit"
            className="absolute top-1/2 -translate-y-1/2 right-2 rtl:right-auto rtl:left-2 px-2.5 py-1.5 rounded-lg bg-[#128B94] text-white hover:bg-[#0d6e75] text-xs font-semibold transition-colors cursor-pointer flex items-center gap-1"
          >
            {isAr ? 'بحث' : 'Search'}
          </button>
        </form>
      </div>

      {/* SECTION B: Top 8 Popular Tags */}
      <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs">
        <h3 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
          <Tag className="w-4 h-4 text-[#128B94]" />
          {isAr ? 'الكلمات الأكثر بحثاً' : 'Popular Topics & Tags'}
        </h3>
        <div className="flex flex-wrap gap-2">
          {topTags.map((tag) => (
            <button
              key={tag}
              onClick={() => onNavigateToKnowledgeHub(undefined, tag)}
              className="px-2.5 py-1.5 rounded-lg bg-slate-50 hover:bg-teal-50 border border-slate-200 hover:border-teal-300 text-slate-700 hover:text-[#0F766E] text-xs font-medium transition-colors cursor-pointer"
            >
              #{tag}
            </button>
          ))}
        </div>
      </div>

      {/* SECTION C: Latest 3 Posts */}
      <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs">
        <h3 className="text-sm font-bold text-slate-900 mb-4 flex items-center gap-2">
          <Clock className="w-4 h-4 text-[#128B94]" />
          {isAr ? 'أحدث المقالات الحكومية' : 'Latest Government Guides'}
        </h3>
        <div className="space-y-4">
          {latestPosts.map((post) => (
            <article
              key={post.slug}
              onClick={() => onNavigateToArticle(post.slug)}
              className="group cursor-pointer flex gap-3 items-start pb-3.5 border-b border-slate-100 last:border-b-0 last:pb-0"
            >
              <img
                src={post.featuredImage}
                alt={isAr ? post.titleAr : post.titleEn}
                className="w-16 h-16 rounded-xl object-cover shrink-0 border border-slate-200 group-hover:opacity-90 transition-opacity"
              />
              <div className="flex-1 min-w-0">
                <span className="inline-block text-[10px] font-bold text-[#0F766E] uppercase tracking-wider mb-1 line-clamp-1">
                  {isAr ? post.categoryAr : post.category}
                </span>
                <h4 className="text-xs font-semibold text-slate-800 group-hover:text-[#128B94] transition-colors line-clamp-2 leading-snug">
                  {isAr ? post.titleAr : post.titleEn}
                </h4>
                <div className="flex items-center gap-2 mt-1.5 text-[11px] text-slate-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.publishedDate}
                  </span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* SECTION D: Relevant Services & Departments */}
      {contextualService && (
        <div className="bg-gradient-to-br from-teal-900 to-slate-900 text-white rounded-2xl p-5 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full blur-2xl pointer-events-none" />
          <div className="flex items-center gap-2 text-teal-300 text-xs font-bold uppercase tracking-wider mb-2">
            <Building2 className="w-4 h-4" />
            {isAr ? 'الخدمة الحكومية المرتبطة' : 'Direct Government Service'}
          </div>
          <h4 className="text-sm font-bold text-white mb-2 leading-snug">
            {isAr ? contextualService.titleAr : contextualService.titleEn}
          </h4>
          <p className="text-xs text-slate-300 mb-4 line-clamp-2 leading-relaxed">
            {isAr ? contextualService.shortDescAr : contextualService.shortDescEn}
          </p>

          <div className="bg-white/10 rounded-xl p-3 mb-4 backdrop-blur-xs text-xs space-y-1.5 border border-white/10">
            <div className="flex justify-between items-center text-slate-200">
              <span>{isAr ? 'الجهة الرسمية:' : 'Authority:'}</span>
              <span className="font-semibold text-white">
                {isAr ? contextualService.authorityAr : contextualService.authorityEn}
              </span>
            </div>
            <div className="flex justify-between items-center text-slate-200">
              <span>{isAr ? 'زمن المعالجة:' : 'Processing Time:'}</span>
              <span className="font-semibold text-teal-200">
                {isAr ? contextualService.processingTimeAr : contextualService.processingTimeEn}
              </span>
            </div>
            <div className="flex justify-between items-center text-slate-200">
              <span>{isAr ? 'الرسوم الحكومية:' : 'Statutory Fee:'}</span>
              <span className="font-semibold text-white">
                {contextualService.govFee > 0 ? `AED ${contextualService.govFee}` : (isAr ? 'تحدد حسب الطلب' : 'Variable')}
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <button
              onClick={() => onOpenBooking(contextualService)}
              className="w-full py-2.5 px-4 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs transition-colors cursor-pointer text-center shadow-xs"
            >
              {isAr ? 'بدء الإجراءات / حجز موعد' : 'Apply / Book Fast-Track Desk'}
            </button>
            <button
              onClick={() => onNavigateToService(contextualService.id)}
              className="w-full py-2 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-xs transition-colors cursor-pointer text-center border border-white/10 flex items-center justify-center gap-1.5"
            >
              {isAr ? 'عرض تفاصيل الخدمة والاشتراطات' : 'View Service Overview'}
              {isAr ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>
      )}

      {/* SECTION E: Verified Contact KBC / ESS Box */}
      <div className="bg-slate-50 rounded-2xl border border-slate-200 p-5 space-y-4">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl bg-teal-100/80 text-[#0F766E] flex items-center justify-center shrink-0">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-slate-900 leading-snug">
              {isAr ? 'مركز الكرامة للأعمال (KBC)' : 'Karama Business Center (KBC)'}
            </h4>
            <p className="text-[11px] text-slate-500 mt-0.5">
              {isAr
                ? 'إمارات سكرتاريال سيرفيسز ش.ذ.م.م'
                : 'Emirates Secretarial Services LLC'}
            </p>
          </div>
        </div>

        <div className="text-[11px] text-slate-600 space-y-1.5 bg-white p-3 rounded-xl border border-slate-200/80">
          <div className="flex items-center gap-1.5 font-semibold text-slate-800">
            <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
            <span>Amer #772 • Tasheel #4108 • DET #902</span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-600">
            <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
            <span>DHA Salem KMFC • DLD Ejari Certified</span>
          </div>
        </div>

        <div className="space-y-2 pt-1 text-xs">
          <a
            href="tel:+97143426666"
            className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white hover:bg-slate-100/80 border border-slate-200 text-slate-700 font-semibold transition-colors"
          >
            <Phone className="w-4 h-4 text-[#128B94]" />
            <span>04-342-6666</span>
          </a>

          <a
            href="https://wa.me/97143426666"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 p-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100/80 border border-emerald-200 text-emerald-800 font-semibold transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            <span>{isAr ? 'محادثة واتساب فورية' : 'Chat via WhatsApp'}</span>
          </a>
        </div>

        <div className="text-[10px] text-slate-500 leading-relaxed border-t border-slate-200 pt-3 space-y-1">
          <p className="font-semibold text-slate-700 mb-1">
            {isAr ? 'أوقات العمل الرسمية للمراكز:' : 'Official Center Working Hours:'}
          </p>
          <p><strong className="text-slate-700">{isAr ? 'مركز الفحص الطبي (KMFC):' : 'Medical Fitness (KMFC):'}</strong> {isAr ? 'يومياً 7:00 ص – 9:30 م (طوال الأسبوع)' : 'Daily 7:00 AM – 9:30 PM (7 Days)'}</p>
          <p><strong className="text-slate-700">{isAr ? 'آمر والإقامة الذهبية:' : 'Amer & Golden Visa:'}</strong> {isAr ? 'الإثنين–السبت 7:00 ص – 10:00 م (الأحد مغلق)' : 'Mon–Sat 7:00 AM – 10:00 PM (Sun Closed)'}</p>
          <p><strong className="text-slate-700">{isAr ? 'تسهيل واقتصادية دبي:' : 'Tasheel & DED:'}</strong> {isAr ? '8:00 ص – 10:00 م (الأحد DED مفتوح 8 ص–8 م)' : '8:00 AM – 10:00 PM (DED Sun 8AM–8PM)'}</p>
          <p><strong className="text-slate-700">{isAr ? 'أطلس للتصديقات:' : 'Atlas Attestation:'}</strong> {isAr ? 'الإثنين–الجمعة 9 ص – 10 م | السبت 9 ص – 4 م' : 'Mon–Fri 9 AM – 10 PM | Sat 9 AM – 4 PM'}</p>
        </div>
      </div>
    </aside>
  );
};
