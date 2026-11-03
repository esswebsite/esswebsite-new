import React from 'react';
import { MapPin, Phone, Mail, Clock, ShieldCheck, ChevronRight, ChevronLeft, Award, Users, Building2, Sparkles, BookOpen, Star } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { BrandLogo } from './BrandLogo';
import { OFFICIAL_MAPS } from '../data/socialAndMapLinks';
import { SocialLinks } from './SocialLinks';

interface FooterProps {
  language: Language;
  onNavigatePage?: (page: string) => void;
  onNavClick: (sectionId: string) => void;
  onOpenBooking: () => void;
  onNavigateToDepartment?: (deptId: string) => void;
  onNavigateToService?: (serviceId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  language,
  onNavigatePage,
  onNavClick,
  onOpenBooking,
  onNavigateToDepartment,
  onNavigateToService,
}) => {
  const t = TRANSLATIONS[language];
  const isAr = language === 'ar';

  const handlePageClick = (page: string) => {
    if (onNavigatePage) {
      onNavigatePage(page);
    } else {
      onNavClick(page);
    }
  };

  return (
    <footer className="bg-[#11181C] text-slate-300 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8">
          {/* Brand & Authorization Summary (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <BrandLogo variant="compact" inverted={true} />

            <p className="text-slate-300 leading-relaxed text-xs pr-4 rtl:pr-0 rtl:pl-4 mt-3">
              {t.footerDisclaimer}
            </p>

            <div className="pt-2 text-slate-300 space-y-1.5 text-[11px] border-t border-slate-800">
              <p>
                <strong className="text-white">{isAr ? 'التأسيس والريادة:' : 'Established:'}</strong>{' '}
                {isAr ? 'تأسس في عام 2013 · دبي، الإمارات' : 'Founded in 2013 · Dubai, UAE'}
              </p>
              <p>
                <strong className="text-white">{isAr ? 'الاعتمادات الوزارية:' : 'Accreditations:'}</strong>{' '}
                GDRFA Amer #772 · MoHRE Tasheel · DET · Dubai Courts
              </p>
              <p>
                <strong className="text-white">{isAr ? 'الفحص الطبي المعتمد:' : 'Clinical JCI:'}</strong>{' '}
                Al Karama Medical Fitness Express Center (Salem)
              </p>
              <p>
                <strong className="text-white">{isAr ? 'البوابة الرسمية:' : 'Official Hub:'}</strong>{' '}
                <span className="text-[#14B8A6] font-bold">ess.ae</span> ·{' '}
                <span className="text-[#14B8A6] font-bold">info@ess.ae</span>
              </p>
            </div>

            {/* Official Social Media Channels */}
            <div className="pt-2">
              <span className="text-[11px] font-bold text-slate-400 block mb-2 uppercase tracking-wider">
                {isAr ? 'منصات التواصل الرسمية' : 'Official Social Channels'}
              </span>
              <SocialLinks variant="icons" />
            </div>
          </div>

          {/* Quick Pages Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {isAr ? 'صفحات الموقع' : 'Main Pages'}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => handlePageClick('home')}
                  className="hover:text-[#14B8A6] transition-colors cursor-pointer text-left rtl:text-right text-slate-300 block"
                >
                  {t.navHome || (isAr ? 'الرئيسية' : 'Home')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageClick('about')}
                  className="hover:text-[#14B8A6] transition-colors cursor-pointer text-left rtl:text-right text-slate-300 block"
                >
                  {t.navAbout || (isAr ? 'من نحن' : 'About Us')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageClick('departments')}
                  className="hover:text-[#14B8A6] transition-colors cursor-pointer text-left rtl:text-right text-slate-300 block"
                >
                  {t.navDepartmentsServices || (isAr ? 'الدوائر والخدمات' : 'Departments & Services')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageClick('pricelist')}
                  className="hover:text-teal-300 transition-colors cursor-pointer text-left rtl:text-right text-teal-400 font-bold block"
                >
                  {isAr ? 'جدول أسعار ورسوم الخدمات (2026)' : 'Services Price List & Calculator'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageClick('gallery')}
                  className="hover:text-[#14B8A6] transition-colors cursor-pointer text-left rtl:text-right text-slate-300 block"
                >
                  {t.navGallery || (isAr ? 'معرض المركز' : 'Center Gallery')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageClick('faq')}
                  className="hover:text-[#14B8A6] transition-colors cursor-pointer text-left rtl:text-right text-slate-300 block"
                >
                  {t.navFaq || (isAr ? 'الأسئلة الشائعة' : 'FAQ')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageClick('contact')}
                  className="hover:text-[#14B8A6] transition-colors cursor-pointer text-left rtl:text-right text-slate-300 block"
                >
                  {t.navContact || (isAr ? 'اتصل بنا وموقع المركز' : 'Contact Us')}
                </button>
              </li>
            </ul>
          </div>

          {/* Company & Profile Sections (2 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-[#128B94] uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              {isAr ? 'الملف المؤسسي والقيادة' : 'Company & Governance'}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => handlePageClick('ceo')}
                  className="hover:text-[#14B8A6] transition-colors cursor-pointer text-left rtl:text-right text-slate-300 block font-semibold"
                >
                  {isAr ? 'السيد هاني إبراهيم (الرئيس التنفيذي)' : 'Hani Ebrahim (CEO / MD)'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageClick('team')}
                  className="hover:text-[#14B8A6] transition-colors cursor-pointer text-left rtl:text-right text-slate-300 block"
                >
                  {isAr ? 'فريق العمل ونخبة المستشارين' : 'Our Team & Officers'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageClick('clients')}
                  className="hover:text-[#14B8A6] transition-colors cursor-pointer text-left rtl:text-right text-slate-300 block"
                >
                  {isAr ? 'شركاء النجاح وكبار المتعاملين (28)' : 'Our Regular Clients (28)'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageClick('awards')}
                  className="hover:text-[#14B8A6] transition-colors cursor-pointer text-left rtl:text-right text-slate-300 block"
                >
                  {isAr ? 'شهادات الجودة والأوسمة (JCI & ISO)' : 'Awards & Certifications'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageClick('events')}
                  className="hover:text-[#14B8A6] transition-colors cursor-pointer text-left rtl:text-right text-slate-300 block"
                >
                  {isAr ? 'الفعاليات والاحتفالات الوطنية' : 'Events & Celebrations'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageClick('blog')}
                  className="hover:text-[#14B8A6] transition-colors cursor-pointer text-left rtl:text-right text-slate-300 block"
                >
                  {isAr ? 'مركز المعرفة وأدلة المعاملات' : 'Knowledge Hub & Blog'}
                </button>
              </li>
            </ul>
          </div>

          {/* Location & Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {isAr ? 'المقر الرئيسي والتواصل' : 'Headquarters & Support'}
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#14B8A6] shrink-0 mt-0.5" />
                <span>{t.footerAddress}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#14B8A6] shrink-0" />
                <a
                  href="tel:043426666"
                  className="hover:text-white transition-colors font-mono tabular-nums text-slate-200"
                >
                  {t.footerPhone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#14B8A6] shrink-0" />
                <a
                  href="mailto:info@ess.ae"
                  className="hover:text-white transition-colors text-slate-200"
                >
                  {t.footerEmail}
                </a>
              </li>
              <li className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-[#14B8A6] shrink-0 mt-0.5" />
                <span>{t.footerHours}</span>
              </li>
              <li className="pt-2">
                <button
                  onClick={onOpenBooking}
                  className="w-full py-2.5 px-3 rounded-xl bg-[#128B94] hover:bg-[#0F766E] text-white font-bold text-xs transition-colors text-center cursor-pointer shadow-md"
                >
                  {t.bookAppointmentBtn}
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal Notice */}
        <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-[11px]">
          <p>{t.footerCopyright}</p>
          <div className="flex items-center gap-4 flex-wrap">
            <a
              href={OFFICIAL_MAPS.shareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-400 hover:text-teal-300 font-bold flex items-center gap-1"
            >
              <MapPin className="w-3 h-3" />
              <span>{isAr ? 'ملف جوجل الرسمي الموثق' : 'Verified Google Business Profile'}</span>
            </a>
            <span aria-hidden="true">·</span>
            <span>UAE Sovereign Standards</span>
            <span aria-hidden="true">·</span>
            <span>JCI Accredited DHA Center</span>
            <span aria-hidden="true">·</span>
            <span>ISO 9001:2015 Certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
