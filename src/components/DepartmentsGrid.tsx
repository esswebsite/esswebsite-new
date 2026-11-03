import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Shield } from 'lucide-react';
import { Department, Language } from '../types';
import { DEPARTMENTS } from '../data/departmentsData';
import { TRANSLATIONS } from '../data/translations';
import { DepartmentLogo } from './DepartmentLogo';

interface DepartmentsGridProps {
  language: Language;
  onSelectDepartment: (deptId: string) => void;
  onOpenDepartmentPage?: (deptId: string) => void;
  selectedDepartmentId?: string;
}

export const DepartmentsGrid: React.FC<DepartmentsGridProps> = ({
  language,
  onSelectDepartment,
  onOpenDepartmentPage,
  selectedDepartmentId,
}) => {
  const t = TRANSLATIONS[language];
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollStart, setScrollStart] = useState(0);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      const maxScroll = scrollWidth - clientWidth;
      const absLeft = Math.abs(scrollLeft);
      
      setCanScrollLeft(absLeft > 15);
      setCanScrollRight(absLeft < maxScroll - 15);

      const cardWidth = 330;
      const index = Math.round(absLeft / cardWidth);
      setActiveIndex(Math.max(0, Math.min(index, DEPARTMENTS.length - 1)));
    }
  };

  useEffect(() => {
    checkScroll();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScroll, { passive: true });
      window.addEventListener('resize', checkScroll);
      return () => {
        container.removeEventListener('scroll', checkScroll);
        window.removeEventListener('resize', checkScroll);
      };
    }
  }, [language]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const isRtl = language === 'ar';
      // In RTL, left arrow moves to next/prev appropriately
      const sign = direction === 'left' ? -1 : 1;
      const scrollAmount = 340 * (isRtl ? -sign : sign);
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollToSlide = (index: number) => {
    if (scrollContainerRef.current) {
      const isRtl = language === 'ar';
      const cardWidth = 330;
      const targetLeft = isRtl ? -(index * cardWidth) : (index * cardWidth);
      scrollContainerRef.current.scrollTo({ left: targetLeft, behavior: 'smooth' });
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollStart(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 1.4;
    scrollContainerRef.current.scrollLeft = scrollStart - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  return (
    <section id="departments" className="py-16 sm:py-20 bg-[#F4F9F9] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Slider Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="text-xs font-bold tracking-wider text-[#128B94] uppercase mb-2">
              {language === 'ar' ? 'الشبكة الحكومية المعتمدة' : 'Official Government Departments'}
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E2528] tracking-tight">
              {t.deptSectionTitle}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl">
              {t.deptSectionDesc}
            </p>
          </div>

          {/* Slider Prev / Next Controls */}
          <div className="flex items-center gap-3 shrink-0">
            <span className="text-xs font-semibold text-slate-500 tabular-nums hidden sm:inline">
              {activeIndex + 1} / {DEPARTMENTS.length}
            </span>

            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all cursor-pointer ${
                canScrollLeft
                  ? 'bg-white text-[#128B94] border-slate-300 hover:bg-[#128B94] hover:text-white shadow-xs'
                  : 'bg-slate-100 text-slate-300 border-slate-200 cursor-not-allowed'
              }`}
              aria-label="Previous departments"
            >
              <ChevronLeft className="w-5 h-5 rtl:rotate-180" />
            </button>

            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all cursor-pointer ${
                canScrollRight
                  ? 'bg-white text-[#128B94] border-slate-300 hover:bg-[#128B94] hover:text-white shadow-xs'
                  : 'bg-slate-100 text-slate-300 border-slate-200 cursor-not-allowed'
              }`}
              aria-label="Next departments"
            >
              <ChevronRight className="w-5 h-5 rtl:rotate-180" />
            </button>
          </div>
        </div>

        {/* Horizontal Slider Track */}
        <div
          ref={scrollContainerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          className={`flex gap-5 overflow-x-auto pb-6 pt-2 scroll-smooth scrollbar-none snap-x snap-mandatory ${
            isDragging ? 'cursor-grabbing select-none' : 'cursor-grab'
          }`}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {DEPARTMENTS.map((dept: Department) => {
            const isSelected = selectedDepartmentId === dept.id;

            return (
              <div
                key={dept.id}
                onClick={() => onSelectDepartment(dept.id)}
                className={`snap-start w-[290px] sm:w-[320px] shrink-0 p-6 rounded-xl transition-all duration-300 cursor-pointer flex flex-col justify-between h-[340px] relative border ${
                  isSelected
                    ? 'bg-[#128B94] text-white shadow-lg border-[#01403F] ring-2 ring-[#01403F]'
                    : 'bg-white text-slate-900 border-slate-200/90 hover:border-[#128B94] hover:shadow-md'
                }`}
              >
                <div>
                  {/* Card Header: Official Department Logo Badge & Code */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-white p-1.5 shadow-xs border border-slate-200/80 shrink-0 flex items-center justify-center">
                      <DepartmentLogo deptId={dept.id} className="w-full h-full" />
                    </div>

                    <div className="text-right rtl:text-left">
                      <span
                        className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded ${
                          isSelected
                            ? 'bg-white/20 text-white'
                            : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        {dept.code}
                      </span>
                      <div
                        className={`text-[10px] font-semibold mt-1 ${
                          isSelected ? 'text-teal-100' : 'text-slate-400'
                        }`}
                      >
                        {dept.serviceCount} {language === 'ar' ? 'خدمات معتمدة' : 'Official Services'}
                      </div>
                    </div>
                  </div>

                  {/* Name and Subtitle */}
                  <h3
                    className={`font-bold text-base leading-snug line-clamp-1 ${
                      isSelected ? 'text-white' : 'text-[#1E2528]'
                    }`}
                  >
                    {language === 'ar' ? dept.nameAr : dept.nameEn}
                  </h3>

                  <div
                    className={`text-xs font-semibold mt-1 mb-2.5 ${
                      isSelected ? 'text-teal-100' : 'text-[#128B94]'
                    }`}
                  >
                    {language === 'ar' ? dept.subTitleAr : dept.subTitleEn}
                  </div>

                  <p
                    className={`text-xs line-clamp-3 leading-relaxed ${
                      isSelected ? 'text-teal-50' : 'text-slate-500'
                    }`}
                  >
                    {language === 'ar' ? dept.descriptionAr : dept.descriptionEn}
                  </p>
                </div>

                {/* Footer of Card: Official Accreditation & Action */}
                <div
                  className={`mt-4 pt-3.5 border-t flex items-center justify-between text-xs ${
                    isSelected ? 'border-white/20 text-teal-100' : 'border-slate-100 text-slate-500'
                  }`}
                >
                  <span className="flex items-center gap-1 text-[11px] font-medium truncate max-w-[170px]">
                    <Shield className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">
                      {language === 'ar' ? dept.accreditationAr : dept.accreditationEn}
                    </span>
                  </span>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      if (onOpenDepartmentPage) {
                        onOpenDepartmentPage(dept.id);
                      } else {
                        onSelectDepartment(dept.id);
                      }
                    }}
                    className={`flex items-center gap-1 font-bold whitespace-nowrap shrink-0 transition-transform cursor-pointer py-1 px-2 rounded hover:underline ${
                      isSelected ? 'text-white bg-white/20' : 'text-[#128B94] hover:bg-teal-50'
                    }`}
                    title={language === 'ar' ? 'فتح صفحة الدائرة المستقلة' : 'Open Dedicated Department Page'}
                  >
                    <span>{language === 'ar' ? 'بوابة الدائرة' : 'View Portal'}</span>
                    <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel Dots Indicator */}
        <div className="flex items-center justify-center gap-1.5 mt-4">
          {DEPARTMENTS.map((dept, idx) => (
            <button
              key={dept.id}
              onClick={() => scrollToSlide(idx)}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                activeIndex === idx
                  ? 'w-6 bg-[#128B94]'
                  : 'w-2 bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Go to department ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
