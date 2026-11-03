import React from 'react';
import { X, CheckCircle2, Clock, Shield, FileCheck, ArrowRight, Calendar, Calculator } from 'lucide-react';
import { ServiceItem, Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { DepartmentLogo } from './DepartmentLogo';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  language: Language;
  onClose: () => void;
  onBookService: (service: ServiceItem) => void;
  onCalculateFee: (service: ServiceItem) => void;
  onOpenServicePage?: (serviceId: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  language,
  onClose,
  onBookService,
  onCalculateFee,
  onOpenServicePage,
}) => {
  if (!service) return null;
  const t = TRANSLATIONS[language];

  const totalStandard = service.govFee + service.serviceFee;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6">
      <div className="relative w-full max-w-3xl bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden my-8">
        {/* Header with Deep Teal Gradient */}
        <div className="p-6 sm:p-8 bg-gradient-to-r from-[#01403F] via-[#095E63] to-[#128B94] text-white relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 rtl:right-auto rtl:left-5 text-teal-100 hover:text-white transition-colors p-1.5 rounded-md hover:bg-white/10 cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3.5 mb-3">
            <div className="w-13 h-13 rounded-xl bg-white p-1.5 shadow-md shrink-0 flex items-center justify-center">
              <DepartmentLogo deptId={service.departmentId} className="w-full h-full" />
            </div>
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-teal-200 uppercase tracking-wider">
                <Shield className="w-3.5 h-3.5" />
                <span>{language === 'ar' ? service.authorityAr : service.authorityEn}</span>
              </div>
              <span className="text-[11px] text-teal-100/80">Karama Business Center Official Service</span>
            </div>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold text-white pr-8 rtl:pr-0 rtl:pl-8 leading-snug">
            {language === 'ar' ? service.titleAr : service.titleEn}
          </h2>

          <p className="mt-3 text-sm text-teal-50 leading-relaxed">
            {language === 'ar' ? service.shortDescAr : service.shortDescEn}
          </p>

          {/* Quick Metrics Bar inside Modal Header */}
          <div className="mt-6 pt-5 border-t border-white/20 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs">
            <div>
              <span className="text-teal-200 block">{t.processingTimeLabel}</span>
              <span className="font-bold text-white text-sm flex items-center gap-1.5 mt-0.5">
                <Clock className="w-3.5 h-3.5 text-teal-200" />
                {language === 'ar' ? service.processingTimeAr : service.processingTimeEn}
              </span>
            </div>

            <div>
              <span className="text-teal-200 block">{t.govFeeLabel}</span>
              <span className="font-bold text-white text-sm tabular-nums mt-0.5">
                {service.govFee === 0 ? (language === 'ar' ? 'مجاني / حسب النشاط' : 'Included / Variable') : `${service.govFee.toLocaleString()} AED`}
              </span>
            </div>

            <div>
              <span className="text-teal-200 block">
                {language === 'ar' ? 'إجمالي الرسوم التقديرية' : 'Estimated Standard Total'}
              </span>
              <span className="font-bold text-white text-sm tabular-nums mt-0.5">
                {totalStandard.toLocaleString()} AED
              </span>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          {/* Required Documents Section */}
          <div>
            <div className="flex items-center gap-2 text-sm font-bold text-slate-900 mb-3">
              <FileCheck className="w-4 h-4 text-[#128B94]" />
              <span>{t.requiredDocsLabel}</span>
            </div>

            <ul className="space-y-2.5 bg-slate-50 p-4 rounded-lg border border-slate-200">
              {(language === 'ar' ? service.requiredDocumentsAr : service.requiredDocumentsEn).map(
                (doc, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#128B94] mt-2 shrink-0" />
                    <span>{doc}</span>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Key Advantages / Assurances */}
          <div>
            <div className="flex items-center gap-2 text-sm font-bold text-slate-900 mb-3">
              <CheckCircle2 className="w-4 h-4 text-[#128B94]" />
              <span>{t.keyBenefitsLabel}</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {(language === 'ar' ? service.keyBenefitsAr : service.keyBenefitsEn).map(
                (benefit, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-slate-50 rounded-md border border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed"
                  >
                    {benefit}
                  </div>
                )
              )}
            </div>
          </div>

          {/* Pricing Transparency Note */}
          <div className="p-4 rounded-lg bg-teal-50 border border-teal-200/80 text-xs text-teal-950 leading-relaxed">
            <span className="font-bold block mb-0.5">
              {language === 'ar' ? 'معايير تسعير حكومة دبي الرسمية 2026' : 'Official Dubai Government Fee Transparency'}
            </span>
            {language === 'ar'
              ? 'الرسوم الحكومية تُسدد مباشرة للأنظمة الرسمية (إقامة دبي، وزارة العمل، دائرة الاقتصاد). رسوم الطباعة وخدمة ESS خاضعة لضريبة القيمة المضافة بنسبة 5% فقط.'
              : 'Government tariffs are settled directly to official authorities (GDRFA, MoHRE, DET). ESS & KBC typing and liaison fee is subject to standard 5% UAE VAT.'}
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-5 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={() => {
                onClose();
                onCalculateFee(service);
              }}
              className="px-3.5 py-2 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 rounded-md border border-slate-300 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Calculator className="w-3.5 h-3.5 text-[#128B94]" />
              <span>{language === 'ar' ? 'حساب الرسوم' : 'Fee Tool'}</span>
            </button>

            {onOpenServicePage && (
              <button
                onClick={() => {
                  onClose();
                  onOpenServicePage(service.id);
                }}
                className="px-3.5 py-2 text-xs font-bold text-[#128B94] bg-teal-50 hover:bg-teal-100 rounded-md border border-teal-200 transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <span>{language === 'ar' ? 'صفحة الخدمة الكاملة' : 'Full Page'}</span>
                <ArrowRight className="w-3 h-3 rtl:rotate-180" />
              </button>
            )}
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={onClose}
              className="px-3.5 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
            >
              {t.closeBtn}
            </button>

            <button
              onClick={() => {
                onClose();
                onBookService(service);
              }}
              className="px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-bold text-white bg-[#128B94] hover:bg-[#01403F] rounded-md shadow-xs transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-white" />
              <span>{t.bookThisServiceBtn}</span>
              <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
