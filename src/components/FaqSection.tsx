import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { Language } from '../types';
import { FAQ_DATA, TRANSLATIONS } from '../data/translations';

interface FaqSectionProps {
  language: Language;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ language }) => {
  const t = TRANSLATIONS[language];
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx((curr) => (curr === idx ? null : idx));
  };

  return (
    <section className="py-16 sm:py-20 bg-white border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider text-[#128B94] uppercase mb-2">
            <HelpCircle className="w-4 h-4 text-[#128B94]" />
            <span>{language === 'ar' ? 'المعلومات والأسئلة الشائعة' : 'Official Help & Clarity'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E2528] tracking-tight text-balance">
            {t.faqTitle}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
            {t.faqDesc}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQ_DATA.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-lg border border-slate-200 overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-5 text-left rtl:text-right flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/70"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-sm sm:text-base text-[#1E2528]">
                    {language === 'ar' ? item.questionAr : item.questionEn}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#128B94]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/40">
                    {language === 'ar' ? item.answerAr : item.answerEn}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
