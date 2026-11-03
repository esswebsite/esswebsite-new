import React, { useState } from 'react';
import { Language } from '../types';
import {
  BOARD_OF_DIRECTORS,
  TEAM_MEMBERS,
  CORE_VALUES,
  MANAGING_DIRECTOR_INFO
} from '../data/companyProfileData';
import {
  Users,
  Award,
  Sparkles,
  PhoneCall,
  Calendar,
  ShieldCheck,
  HeartHandshake,
  CheckCircle2,
  ArrowRight,
  UserCheck,
  Languages,
  Clock,
  Briefcase
} from 'lucide-react';

interface OurTeamPageProps {
  language: Language;
  onNavigateToHome: () => void;
  onNavigateToCeo: () => void;
  onNavigateToContact: () => void;
  onOpenBooking: () => void;
}

export const OurTeamPage: React.FC<OurTeamPageProps> = ({
  language,
  onNavigateToHome,
  onNavigateToCeo,
  onNavigateToContact,
  onOpenBooking,
}) => {
  const isAr = language === 'ar';
  const [selectedDept, setSelectedDept] = useState<string>('all');

  const filteredMembers =
    selectedDept === 'all'
      ? TEAM_MEMBERS
      : TEAM_MEMBERS.filter((m) => m.departmentId === selectedDept);

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
              {isAr ? 'فريق العمل والقيادة' : 'Our Team & Leadership'}
            </span>
          </div>
        </div>
      </div>

      {/* Hero Header */}
      <div className="bg-gradient-to-br from-slate-900 via-[#0B3A3E] to-slate-950 text-white py-14 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b border-[#128B94]/20">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#128B94_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#128B94]/15 border border-[#128B94]/30 text-teal-200 text-xs font-semibold uppercase tracking-wider mb-4">
            <Users className="w-4 h-4 text-[#128B94]" />
            {isAr ? 'الكوادر المتخصصة والقيادة التنفيذية' : 'Dedicated Experts & Sovereign Liaisons'}
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-serif tracking-tight leading-tight mb-4">
            {isAr
              ? 'فريق العمل ونخبة مستشاري المعاملات الحكومية'
              : 'Our Team: The Minds Delivering 5-Star Sovereign Excellence'}
          </h1>
          <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            {isAr
              ? 'أكثر من 85 مستشاراً وضابط اتصال حكومي يجمعون بين المعرفة التشريعية العميقة والسرعة القياسية لخدمة الأفراد والشركات في دبي.'
              : 'Over 85 certified government PROs, legal translators, DHA clinical supervisors, and Golden Visa officers facilitating seamless transactions across 14 ministries.'}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* CEO Featured Card */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold text-[#128B94] uppercase tracking-widest">
              {isAr ? 'القيادة التنفيذية العليا' : 'Executive Directorship'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-serif mt-1">
              {isAr ? 'المدير العام والرئيس التنفيذي' : 'Managing Director & CEO'}
            </h2>
          </div>

          <div className="bg-gradient-to-r from-slate-900 to-[#0A2E31] rounded-3xl p-6 sm:p-10 text-white shadow-xl border border-[#128B94]/30 flex flex-col md:flex-row items-center gap-8">
            <div className="w-36 h-36 sm:w-48 sm:h-48 rounded-2xl overflow-hidden border-2 border-[#128B94]/50 shadow-2xl shrink-0">
              <img
                src={MANAGING_DIRECTOR_INFO.image}
                alt={isAr ? MANAGING_DIRECTOR_INFO.nameAr : MANAGING_DIRECTOR_INFO.nameEn}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <span className="inline-block px-3 py-1 rounded-md bg-[#128B94] text-white font-extrabold text-xs tracking-wider uppercase mb-2">
                {isAr ? 'القيادة منذ 2013' : 'Founder & Managing Director'}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white font-serif">
                {isAr ? MANAGING_DIRECTOR_INFO.nameAr : MANAGING_DIRECTOR_INFO.nameEn}
              </h3>
              <p className="text-teal-200 font-semibold text-sm mt-1">
                {isAr ? MANAGING_DIRECTOR_INFO.roleAr : MANAGING_DIRECTOR_INFO.roleEn} · {isAr ? MANAGING_DIRECTOR_INFO.companyAr : MANAGING_DIRECTOR_INFO.companyEn}
              </p>
              <p className="text-slate-300 text-xs sm:text-sm mt-3 leading-relaxed max-w-3xl">
                {isAr ? MANAGING_DIRECTOR_INFO.bioAr : MANAGING_DIRECTOR_INFO.bioEn}
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center md:justify-start gap-3">
                <button
                  onClick={onNavigateToCeo}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#128B94] hover:bg-[#01403F] text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-md shadow-[#128B94]/25"
                >
                  {isAr ? 'صفحة المدير العام ورسالته الكاملة' : 'View Full CEO Profile & Message'}
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={onOpenBooking}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs transition-all border border-white/20 cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  {isAr ? 'حجز موعد تنفيذي' : 'Schedule Executive Session'}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Board of Governance */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold text-[#128B94] uppercase tracking-widest">
              {isAr ? 'الحوكمة والمجلس الاستشاري' : 'Strategic Governance'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-serif mt-1">
              {isAr ? 'مجلس الإدارة المؤسسي' : 'Board of Directors'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BOARD_OF_DIRECTORS.map((director) => (
              <div
                key={director.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-md p-6 flex flex-col justify-between hover:shadow-xl transition-all"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center text-[#128B94] font-serif font-black text-xl mb-4">
                    {director.nameEn.charAt(0)}
                  </div>
                  <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-bold bg-teal-50 text-[#01403F] border border-teal-200 uppercase tracking-wide mb-2">
                    {isAr ? director.badgeAr : director.badgeEn}
                  </span>
                  <h3 className="text-lg font-black text-slate-900 font-serif leading-tight">
                    {isAr ? director.nameAr : director.nameEn}
                  </h3>
                  <p className="text-xs font-semibold text-[#0F766E] mt-0.5 mb-3">
                    {isAr ? director.roleAr : director.roleEn}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {isAr ? director.bioAr : director.bioEn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Values Section */}
        <div className="mb-16 bg-gradient-to-r from-teal-900 to-slate-900 rounded-3xl p-8 sm:p-12 text-white">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-teal-300 uppercase tracking-widest">
              {isAr ? 'قيمنا وثقافتنا المؤسسية' : 'Our Core Philosophy'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black font-serif mt-1">
              {isAr ? 'المبادئ الخمسة التي تحرك فريقنا يومياً' : 'The 5 Core Values Driving Our Service'}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {CORE_VALUES.map((val) => (
              <div
                key={val.id}
                className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#128B94]/40 transition-all text-center flex flex-col items-center"
              >
                <div className="w-10 h-10 rounded-xl bg-[#128B94]/15 border border-[#128B94]/30 flex items-center justify-center text-teal-300 mb-3">
                  <Sparkles className="w-5 h-5 text-teal-300" />
                </div>
                <h4 className="font-bold text-base text-white mb-1.5">
                  {isAr ? val.nameAr : val.nameEn}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {isAr ? val.descAr : val.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Senior Officers & Department Specialists */}
        <div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold text-[#128B94] uppercase tracking-widest">
                {isAr ? 'نخبة المستشارين والضباط المعتمدين' : 'Certified Liaison Officers'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-serif mt-1">
                {isAr ? 'مستشارو الأقسام والخدمات الحكومية' : 'Department Heads & Senior Specialists'}
              </h2>
            </div>

            {/* Department Filter Pills */}
            <div className="flex items-center gap-1.5 flex-wrap">
              {[
                { id: 'all', labelEn: 'All Leadership & Heads', labelAr: 'كافة القيادات ورؤساء الأقسام' },
                { id: 'management', labelEn: 'Management', labelAr: 'الإدارة' },
                { id: 'operations', labelEn: 'Operations', labelAr: 'العمليات' },
                { id: 'amer', labelEn: 'Amer (GDRFA)', labelAr: 'آمر (إقامة دبي)' },
                { id: 'salem', labelEn: 'DHA Health', labelAr: 'صحة دبي (DHA)' },
                { id: 'det-tasheel', labelEn: 'DET / Courts / Tasheel', labelAr: 'اقتصادية دبي ومحاكم وتسهيل' },
                { id: 'typing', labelEn: 'Typing Services', labelAr: 'الطباعة الحكومية' },
                { id: 'sales', labelEn: 'Sales & Marketing', labelAr: 'المبيعات والتسويق' },
                { id: 'corporate', labelEn: 'Finance, IT & HR', labelAr: 'المالية وتقنية الموارد' },
              ].map((pill) => (
                <button
                  key={pill.id}
                  onClick={() => setSelectedDept(pill.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-all ${
                    selectedDept === pill.id
                      ? 'bg-[#128B94] text-white shadow-xs'
                      : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {isAr ? pill.labelAr : pill.labelEn}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3.5">
                      {member.image ? (
                        <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl overflow-hidden border-2 border-teal-500/25 shadow-md shrink-0 bg-white ring-2 ring-slate-100 flex items-center justify-center">
                          <img
                            src={member.image}
                            alt={isAr ? member.nameAr : member.nameEn}
                            className="w-full h-full object-cover object-center"
                          />
                        </div>
                      ) : (
                        <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl bg-gradient-to-tr from-[#128B94] to-teal-700 text-white flex items-center justify-center font-bold text-base shadow-sm shrink-0">
                          {member.nameEn.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                        </div>
                      )}
                      <div>
                        <h3 className="font-bold text-slate-900 text-base leading-snug">
                          {isAr ? member.nameAr : member.nameEn}
                        </h3>
                        <p className="text-xs text-[#0F766E] font-semibold mt-0.5">
                          {isAr ? member.designationAr : member.designationEn}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/60 text-xs mb-3 space-y-1.5">
                    <div className="flex items-center justify-between text-slate-600">
                      <span className="font-medium flex items-center gap-1">
                        <Briefcase className="w-3.5 h-3.5 text-slate-400" />
                        {isAr ? 'القسم الوزاري:' : 'Department:'}
                      </span>
                      <span className="font-semibold text-slate-800">
                        {isAr ? member.departmentNameAr : member.departmentNameEn}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-slate-600">
                      <span className="font-medium flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        {isAr ? 'سنوات الخبرة:' : 'Experience:'}
                      </span>
                      <span className="font-semibold text-slate-800">
                        {member.experienceYears}+ {isAr ? 'سنوات' : 'Years'}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-slate-600">
                      <span className="font-medium flex items-center gap-1">
                        <Languages className="w-3.5 h-3.5 text-slate-400" />
                        {isAr ? 'اللغات:' : 'Languages:'}
                      </span>
                      <span className="font-semibold text-slate-800">
                        {member.languages.join(', ')}
                      </span>
                    </div>
                  </div>

                  <div className="text-xs text-slate-600 leading-relaxed mb-4">
                    <span className="font-bold text-slate-800 block mb-0.5">
                      {isAr ? 'التخصص الدقيق:' : 'Key Specialty:'}
                    </span>
                    {isAr ? member.specialtyAr : member.specialtyEn}
                  </div>

                  {member.testimonialMention && (
                    <div className="p-2.5 rounded-lg bg-teal-50 border border-teal-200 text-[#01403F] text-[11px] italic mb-4">
                      "{member.testimonialMention}"
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center gap-2">
                  <button
                    onClick={onOpenBooking}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-[#128B94] hover:bg-[#0c6b72] text-white text-xs font-bold transition-colors cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    {isAr ? 'طلب استشارة' : 'Book Consultation'}
                  </button>
                  <button
                    onClick={onNavigateToContact}
                    className="py-2 px-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors cursor-pointer"
                  >
                    {isAr ? 'تواصل' : 'Contact'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
