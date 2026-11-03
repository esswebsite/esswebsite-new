import React, { useState } from 'react';
import { Search, Home, ArrowLeft, ArrowRight, Layers, FileQuestion, HelpCircle, PhoneCall } from 'lucide-react';
import { Language, ServiceItem } from '../types';
import { SERVICES } from '../data/departmentsData';

interface NotFoundPageProps {
  language: Language;
  requestedPath?: string;
  onNavigateHome: () => void;
  onNavigateDepartments: () => void;
  onNavigateService: (serviceId: string) => void;
  onNavigateContact: () => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({
  language,
  requestedPath,
  onNavigateHome,
  onNavigateDepartments,
  onNavigateService,
  onNavigateContact,
}) => {
  const isAr = language === 'ar';
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;
  const [searchQuery, setSearchQuery] = useState('');

  const searchResults = searchQuery.trim()
    ? SERVICES.filter(
        (s) =>
          s.titleEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.titleAr.includes(searchQuery) ||
          s.shortDescEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.shortDescAr.includes(searchQuery)
      ).slice(0, 4)
    : [];

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20 flex flex-col justify-center">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-teal-50 border border-teal-200 text-[#128B94] shadow-xs">
          <FileQuestion className="w-10 h-10" />
        </div>

        <div className="space-y-3">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#128B94]">
            404 · {isAr ? 'صفحة غير موجودة' : 'Page Not Found'}
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {isAr ? 'عذراً، الخدمة أو الصفحة المطلوبة غير متاحة' : 'Service or Page Not Found'}
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
            {isAr
              ? `لم نتمكن من العثور على المسار المطلوبة ${requestedPath ? `(${requestedPath})` : ''}. قد يكون الرابط قد تم تحديثه إلى مسار الخدمة الفردية الجديد أو نقله.`
              : `We could not find the requested URL ${requestedPath ? `(${requestedPath})` : ''}. The service may have been updated to its dedicated single-service route or reclassified.`}
          </p>
        </div>

        {/* Search Widget */}
        <div className="max-w-md mx-auto">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 rtl:left-auto rtl:right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={isAr ? 'ابحث عن المعاملة بالاسم...' : 'Search for any government service...'}
              className="w-full pl-10 pr-4 rtl:pl-4 rtl:pr-10 py-3 text-sm bg-white border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#128B94] shadow-xs transition-all"
            />
          </div>

          {searchResults.length > 0 && (
            <div className="mt-2 bg-white rounded-xl border border-slate-200 shadow-md divide-y divide-slate-100 text-left rtl:text-right overflow-hidden">
              {searchResults.map((service) => (
                <div
                  key={service.id}
                  onClick={() => onNavigateService(service.id)}
                  className="p-3 hover:bg-teal-50/50 cursor-pointer flex items-center justify-between gap-3 group transition-colors"
                >
                  <div>
                    <div className="text-xs font-bold text-slate-900 group-hover:text-[#128B94]">
                      {isAr ? service.titleAr : service.titleEn}
                    </div>
                    <div className="text-[11px] text-slate-500 truncate max-w-xs">
                      {isAr ? service.shortDescAr : service.shortDescEn}
                    </div>
                  </div>
                  <ArrowIcon className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#128B94] shrink-0" />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
          <button
            onClick={onNavigateHome}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#128B94] hover:bg-[#01403F] text-white font-bold text-xs transition-all shadow-xs cursor-pointer"
          >
            <Home className="w-4 h-4" />
            <span>{isAr ? 'العودة للرئيسية' : 'Back to Home'}</span>
          </button>

          <button
            onClick={onNavigateDepartments}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs border border-slate-300 transition-all shadow-xs cursor-pointer"
          >
            <Layers className="w-4 h-4 text-[#128B94]" />
            <span>{isAr ? 'دليل الدوائر والخدمات' : 'Browse Services Directory'}</span>
          </button>

          <button
            onClick={onNavigateContact}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-50 hover:bg-teal-100 text-[#128B94] font-bold text-xs border border-teal-200/80 transition-all cursor-pointer"
          >
            <PhoneCall className="w-4 h-4" />
            <span>{isAr ? 'تواصل مع الدعم' : 'Contact Support'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
