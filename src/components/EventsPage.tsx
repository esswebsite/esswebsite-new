import React, { useState } from 'react';
import { Language } from '../types';
import { COMPANY_EVENTS, CompanyEvent } from '../data/companyProfileData';
import {
  Calendar,
  MapPin,
  Users,
  Sparkles,
  Tag,
  ArrowRight,
  X,
  Share2,
  CheckCircle2,
  Camera,
  Heart
} from 'lucide-react';

interface EventsPageProps {
  language: Language;
  onNavigateToHome: () => void;
  onNavigateToContact: () => void;
  onOpenBooking: () => void;
}

export const EventsPage: React.FC<EventsPageProps> = ({
  language,
  onNavigateToHome,
  onNavigateToContact,
  onOpenBooking,
}) => {
  const isAr = language === 'ar';
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeEvent, setActiveEvent] = useState<CompanyEvent | null>(null);

  const categories = [
    { id: 'all', labelEn: 'All Celebrations', labelAr: 'كافة الفعاليات والاحتفالات' },
    { id: 'National', labelEn: 'National UAE Days', labelAr: 'المناسبات والأعياد الوطنية' },
    { id: 'Corporate', labelEn: 'Corporate Galas & Awards', labelAr: 'الاحتفالات المؤسسية' },
    { id: 'Cultural', labelEn: 'Cultural & Heritage', labelAr: 'التراث والتبادل الثقافي' },
    { id: 'Community', labelEn: 'Community & Charity', labelAr: 'المبادرات المجتمعية' },
  ];

  const filteredEvents = COMPANY_EVENTS.filter((event) => {
    return selectedCategory === 'all' || event.category === selectedCategory;
  });

  return (
    <div className={`min-h-screen bg-slate-50 text-slate-800 pt-18 sm:pt-22 lg:pt-24 pb-20 ${isAr ? 'font-arabic' : ''}`}>
      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500">
            <button
              onClick={onNavigateToHome}
              className="hover:text-[#128B94] transition-colors cursor-pointer font-medium"
            >
              {isAr ? 'الرئيسية' : 'Home'}
            </button>
            <span className="text-slate-300">/</span>
            <span className="text-slate-800 font-semibold">
              {isAr ? 'الفعاليات والاحتفالات المؤسسية' : 'Company Events & Celebrations'}
            </span>
          </div>
        </div>
      </div>

      {/* Hero Header */}
      <div className="bg-gradient-to-br from-slate-900 via-[#0B3A3E] to-slate-950 text-white py-14 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b border-[#128B94]/20">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#128B94_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#128B94]/15 border border-[#128B94]/30 text-teal-200 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-4 h-4 text-teal-300" />
            {isAr ? 'توثيق اللحظات والمناسبات الوطنية والمؤسسية' : 'Community, Heritage & Team Life'}
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-serif tracking-tight leading-tight mb-4">
            {isAr
              ? 'فعاليات واحتفالات مركز الكرامة والإمارات لخدمات رجال الأعمال'
              : 'Our Company Celebrations, National Pride & Corporate Culture'}
          </h1>
          <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            {isAr
              ? 'نحتفي بروح الاتحاد والتنوع الثقافي والتلاحم الأسري بين فريق عملنا وشركاء النجاح في كل مناسبة وطنية ومؤسسية.'
              : 'From honoring UAE National Day and Flag Day to annual Ramadan galas at Hyde Hotel Business Bay, explore how our corporate culture honors Dubai heritage and team unity.'}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap cursor-pointer transition-all ${
                selectedCategory === cat.id
                  ? 'bg-[#128B94] text-white shadow-md'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {isAr ? cat.labelAr : cat.labelEn}
            </button>
          ))}
        </div>

        {/* Events Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((evt) => (
            <div
              key={evt.id}
              className="bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Event Image */}
                <div className="relative h-56 sm:h-64 overflow-hidden bg-slate-900">
                  <img
                    src={evt.image}
                    alt={isAr ? evt.titleAr : evt.titleEn}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                  
                  {/* Category Pill */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/90 text-slate-900 shadow-md backdrop-blur-xs">
                      {isAr ? evt.categoryAr : evt.category}
                    </span>
                  </div>

                  {/* Date Badge */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                    <span className="flex items-center gap-1.5 font-semibold text-teal-200">
                      <Calendar className="w-3.5 h-3.5 text-teal-300" />
                      {evt.date}
                    </span>
                    <span className="flex items-center gap-1 text-slate-300">
                      <Users className="w-3.5 h-3.5" />
                      {evt.attendees}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-black text-slate-900 font-serif leading-tight mb-2 group-hover:text-[#128B94] transition-colors">
                    {isAr ? evt.titleAr : evt.titleEn}
                  </h3>

                  <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-4">
                    <MapPin className="w-3.5 h-3.5 text-[#128B94] shrink-0" />
                    <span>{isAr ? evt.locationAr : evt.locationEn}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {isAr ? evt.descriptionAr : evt.descriptionEn}
                  </p>

                  <div className="p-3 rounded-xl bg-teal-50/70 border border-teal-200/60 text-xs text-[#01403F] leading-relaxed mb-4">
                    <span className="font-bold block mb-0.5">
                      {isAr ? 'أبرز الملامح الاحتفالية:' : 'Event Highlight:'}
                    </span>
                    {isAr ? evt.highlightAr : evt.highlightEn}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {evt.galleryTags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 text-[10px] font-medium"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-4 sm:px-6 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => setActiveEvent(evt)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#128B94] hover:text-[#0c6b72] transition-colors cursor-pointer"
                >
                  <Camera className="w-3.5 h-3.5" />
                  {isAr ? 'عرض التفاصيل والصورة' : 'View Full Details'}
                </button>
                <button
                  onClick={onOpenBooking}
                  className="text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
                >
                  {isAr ? 'زيارة المركز' : 'Visit Center'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      {activeEvent && (
        <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-slate-200 relative my-auto">
            {/* Modal Image */}
            <div className="relative h-64 sm:h-80 bg-slate-900">
              <img
                src={activeEvent.image}
                alt={isAr ? activeEvent.titleAr : activeEvent.titleEn}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setActiveEvent(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/70 text-white hover:bg-slate-900 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-teal-50 text-[#0F766E] border border-teal-200 mb-2">
                {isAr ? activeEvent.categoryAr : activeEvent.category}
              </span>

              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-serif leading-tight mb-2">
                {isAr ? activeEvent.titleAr : activeEvent.titleEn}
              </h2>

              <div className="flex items-center gap-4 text-xs text-slate-500 mb-6 flex-wrap">
                <span className="flex items-center gap-1 text-[#128B94] font-semibold">
                  <Calendar className="w-4 h-4" />
                  {activeEvent.date}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {isAr ? activeEvent.locationAr : activeEvent.locationEn}
                </span>
                <span className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  {activeEvent.attendees}
                </span>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed mb-6">
                {isAr ? activeEvent.descriptionAr : activeEvent.descriptionEn}
              </p>

              <div className="p-4 rounded-2xl bg-teal-50 border border-teal-200 text-xs sm:text-sm text-[#01403F] mb-6 leading-relaxed">
                <span className="font-bold block mb-1">
                  {isAr ? 'أهم الفعاليات المصاحبة:' : 'Notable Activities & Highlights:'}
                </span>
                {isAr ? activeEvent.highlightAr : activeEvent.highlightEn}
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-200">
                <button
                  onClick={() => setActiveEvent(null)}
                  className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold cursor-pointer"
                >
                  {isAr ? 'إغلاق' : 'Close'}
                </button>
                <button
                  onClick={() => {
                    setActiveEvent(null);
                    onOpenBooking();
                  }}
                  className="px-5 py-2.5 rounded-xl bg-[#128B94] hover:bg-[#0c6b72] text-white text-xs font-bold cursor-pointer shadow-md"
                >
                  {isAr ? 'زيارة المركز وحجز موعد' : 'Visit Center / Book'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
