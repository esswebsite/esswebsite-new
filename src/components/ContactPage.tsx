import React, { useState } from 'react';
import {
  MapPin,
  PhoneCall,
  Mail,
  Clock,
  Calendar,
  Send,
  CheckCircle2,
  Car,
  Coffee,
  Wifi,
  Sparkles,
  ChevronRight,
  ChevronLeft,
  Navigation,
  MessageCircle,
  Building2,
  Shield,
} from 'lucide-react';
import { Language } from '../types';
import { OFFICIAL_MAPS, OFFICIAL_SOCIAL_LINKS, OFFICIAL_CONTACT } from '../data/socialAndMapLinks';
import { CENTER_TIMINGS } from '../data/centerTimings';
import { SocialLinks } from './SocialLinks';

interface ContactPageProps {
  language: Language;
  onNavigateToHome: () => void;
  onOpenBooking: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  language,
  onNavigateToHome,
  onOpenBooking,
}) => {
  const isAr = language === 'ar';
  const ArrowIcon = isAr ? ChevronLeft : ChevronRight;

  const [selectedCenterId, setSelectedCenterId] = useState<string>('kmfc');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceType: 'golden-visa',
    channel: 'flagship',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-18 sm:pt-22 lg:pt-24 pb-20">
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-xs text-slate-500 font-medium">
            <button
              onClick={onNavigateToHome}
              className="hover:text-[#128B94] transition-colors cursor-pointer flex items-center gap-1"
            >
              <span>{isAr ? 'الرئيسية' : 'Home'}</span>
            </button>
            <ArrowIcon className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 font-semibold">{isAr ? 'اتصل بنا وموقع المركز' : 'Contact Us & Location'}</span>
          </nav>
        </div>
      </div>

      {/* Hero Header */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#01403F] via-[#085C5E] to-[#128B94] text-white py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-teal-200">
              <MapPin className="w-3.5 h-3.5" />
              <span>{isAr ? 'المقر الرئيسي · دبي، الإمارات العربية المتحدة' : 'Flagship Center · Dubai, United Arab Emirates'}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {isAr ? 'تواصل معنا وزيارة مركز الكرامة للأعمال' : 'Contact Karama Business Center & ESS'}
            </h1>

            <p className="text-sm sm:text-base text-teal-50/90 leading-relaxed">
              {isAr
                ? 'فريقنا من المستشارين القانونيين وفريق الفحص الطبي (سالم) مستعد لاستقبالك في مقرنا بالكرامة بجوار بريد الكرامة، أو عبر مجلس كبار الشخصيات، أو الحافلة المتنقلة لباب مكتبك.'
                : 'Our certified government transaction consultants and Dubai Health medical team are ready to welcome you at our flagship hub in Al Karama, Next to Karama Post Office, Dubai.'}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="tel:+97143426666"
                className="px-5 py-2.5 rounded-lg bg-white text-[#01403F] hover:bg-teal-50 font-bold text-xs shadow-md transition-all flex items-center gap-2"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#128B94]" />
                <span dir="ltr">+971 4 342 6666</span>
              </a>
              <a
                href="https://wa.me/97143426666"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs transition-all flex items-center gap-2"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>{isAr ? 'واتساب مباشر' : 'Instant WhatsApp'}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left Column: Contact Cards & Operating Hours */}
          <div className="lg:col-span-5 space-y-6">
            {/* Center Location Card */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-teal-50 text-[#128B94] flex items-center justify-center shrink-0">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    {isAr ? 'المقر الرئيسي · دبي' : 'Flagship Center · Dubai'}
                  </h3>
                  <p className="text-xs text-slate-500">
                    {isAr ? 'مركز الكرامة للأعمال والإمارات لخدمات رجال الأعمال' : 'Karama Business Center & Emirates Secretarial Services'}
                  </p>
                </div>
              </div>

              <div className="text-xs sm:text-sm text-slate-600 space-y-1 pl-13 rtl:pl-0 rtl:pr-13">
                <p className="font-semibold text-slate-800">
                  {isAr
                    ? 'منطقة الكرامة، بجوار مكتب بريد الكرامة، دبي، الإمارات العربية المتحدة'
                    : 'Al Karama, Next to Karama Post Office, Dubai, UAE'}
                </p>
                <p className="text-slate-500 text-xs">
                  {isAr
                    ? 'مواقف هيئة الطرق والمواصلات متوفرة مباشرة مع مواقف خاصة لمتعاملي المركز.'
                    : 'RTA Parking and dedicated visitor parking spaces available directly adjacent to the center.'}
                </p>
              </div>

              <div className="pt-2 pl-13 rtl:pl-0 rtl:pr-13">
                <a
                  href={OFFICIAL_MAPS.shareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#128B94] hover:underline"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>{isAr ? 'فتح ملف جوجل الرسمي والخريطة' : 'Open Official Google Business Profile & Maps'}</span>
                </a>
              </div>
            </div>

            {/* Official Operating Hours Card for All 6 Centers */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-teal-50 text-[#128B94] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    {isAr ? 'مواعيد وساعات العمل الرسمية' : 'Official Operating Hours'}
                  </h3>
                  <p className="text-xs text-slate-500">
                    {isAr
                      ? 'مواعيد العمل الموثقة لجميع المراكز والدوائر الستة بالكرامة'
                      : 'Verified official Google Business hours for all 6 co-located centers'}
                  </p>
                </div>
              </div>

              {/* Center Selector Tabs */}
              <div className="pt-2">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 p-1 bg-slate-100 rounded-lg text-[11px] font-semibold">
                  {CENTER_TIMINGS.map((center) => (
                    <button
                      key={center.id}
                      onClick={() => setSelectedCenterId(center.id)}
                      className={`px-2.5 py-1.5 rounded-md transition-all text-center truncate cursor-pointer ${
                        selectedCenterId === center.id
                          ? 'bg-white text-[#01403F] font-bold shadow-xs border border-teal-600/20'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                      title={isAr ? center.nameAr : center.nameEn}
                    >
                      {center.shortName}
                    </button>
                  ))}
                </div>
              </div>

              {/* Active Selected Center Schedule Display */}
              {(() => {
                const activeCenter =
                  CENTER_TIMINGS.find((c) => c.id === selectedCenterId) || CENTER_TIMINGS[0];
                return (
                  <div className="bg-slate-50/80 rounded-xl p-4 border border-slate-200 space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 border-b border-slate-200 pb-2">
                      <div className="font-bold text-slate-900 text-xs sm:text-sm">
                        {isAr ? activeCenter.nameAr : activeCenter.nameEn}
                      </div>
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-extrabold bg-teal-100/80 text-[#01403F] w-fit">
                        {isAr ? activeCenter.summaryBadgeAr : activeCenter.summaryBadgeEn}
                      </span>
                    </div>

                    <p className="text-[11px] text-slate-500 italic">
                      {isAr ? activeCenter.highlightAr : activeCenter.highlightEn}
                    </p>

                    <div className="space-y-1.5 text-xs text-slate-700 pt-1">
                      {activeCenter.schedule.map((slot, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-between py-1 border-b border-slate-200/60 last:border-0 text-xs"
                        >
                          <span className="font-medium text-slate-600">
                            {isAr ? slot.dayAr : slot.dayEn}:
                          </span>
                          <div className="flex items-center gap-2">
                            <span
                              className={`font-mono font-bold text-xs ${
                                slot.isOpen ? 'text-slate-900' : 'text-rose-600'
                              }`}
                              dir="ltr"
                            >
                              {isAr ? slot.hoursAr : slot.hoursEn}
                            </span>
                            <span
                              className={`w-2 h-2 rounded-full ${
                                slot.isOpen ? 'bg-emerald-500' : 'bg-slate-300'
                              }`}
                              title={slot.isOpen ? 'Open' : 'Closed'}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })()}

              {/* Quick Summary of All 6 Centers */}
              <div className="pt-2 border-t border-slate-100">
                <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wider block mb-2">
                  {isAr ? 'نظرة سريعة على كافة المراكز:' : 'All 6 Centers Overview:'}
                </span>
                <div className="space-y-2 text-[11px]">
                  {CENTER_TIMINGS.map((center) => (
                    <div
                      key={center.id}
                      onClick={() => setSelectedCenterId(center.id)}
                      className="p-2 rounded-lg bg-slate-50 hover:bg-teal-50/60 border border-slate-100 hover:border-teal-200 transition-colors cursor-pointer flex items-center justify-between gap-2"
                    >
                      <span className="font-semibold text-slate-800 text-[11px]">
                        {center.shortName}
                      </span>
                      <span className="font-mono text-[10px] text-teal-800 font-bold text-right" dir="ltr">
                        {center.summaryBadgeEn}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Direct Lines */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-teal-50 text-[#128B94] flex items-center justify-center shrink-0">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    {isAr ? 'قنوات الاتصال المباشرة' : 'Direct Communication Channels'}
                  </h3>
                  <p className="text-xs text-slate-500">
                    {isAr ? 'رد فوري خلال أوقات العمل' : 'Immediate response during business hours'}
                  </p>
                </div>
              </div>

              <div className="space-y-3 text-xs pl-13 rtl:pl-0 rtl:pr-13">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">{isAr ? 'الخط المباشر والواتساب:' : 'Direct Phone & WhatsApp:'}</span>
                  <a href="tel:+97143426666" className="font-bold text-[#128B94] hover:underline" dir="ltr">
                    +971 4 342 6666
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">{isAr ? 'البريد الإلكتروني العام:' : 'Official Email:'}</span>
                  <a href="mailto:info@ess.ae" className="font-bold text-slate-800 hover:text-[#128B94]">
                    info@ess.ae
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">{isAr ? 'الموقع الإلكتروني:' : 'Official Website:'}</span>
                  <a href="https://ess.ae/" target="_blank" rel="noopener noreferrer" className="font-bold text-slate-800 hover:text-[#128B94]">
                    ess.ae
                  </a>
                </div>
              </div>
            </div>

            {/* Official Social Media Channels Card */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    {isAr ? 'منصات التواصل الاجتماعي الرسمية' : 'Official Social Channels'}
                  </h3>
                  <p className="text-xs text-slate-500">
                    {isAr ? 'تابع آخر التحديثات والإعلانات الحكومية' : 'Follow verified updates and official announcements'}
                  </p>
                </div>
              </div>
              <SocialLinks variant="cards" />
            </div>

            {/* Center Amenities Strip */}
            <div className="p-4 rounded-xl bg-teal-50/70 border border-teal-100 flex items-center justify-between text-xs text-slate-700">
              <div className="flex items-center gap-1.5 font-semibold">
                <Car className="w-4 h-4 text-[#128B94]" />
                <span>{isAr ? 'فاليه مجاني' : 'Free Valet'}</span>
              </div>
              <div className="flex items-center gap-1.5 font-semibold">
                <Coffee className="w-4 h-4 text-[#128B94]" />
                <span>{isAr ? 'ضيافة قهوة' : 'VIP Coffee'}</span>
              </div>
              <div className="flex items-center gap-1.5 font-semibold">
                <Wifi className="w-4 h-4 text-[#128B94]" />
                <span>{isAr ? 'واي فاي سريع' : 'Fast Wi-Fi'}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Message Form & Interactive Map Preview */}
          <div className="lg:col-span-7 space-y-6">
            {/* Inquiry Form */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
              <div className="mb-6">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-teal-50 border border-teal-200 text-[#128B94] text-xs font-bold uppercase tracking-wider mb-2">
                  <Send className="w-3.5 h-3.5" />
                  <span>{isAr ? 'استفسار أو حجز موعد مباشر' : 'Direct Inquiry & Appointment Request'}</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  {isAr ? 'أرسل تفاصيل معاملتك وسيتواصل معك مستشارنا' : 'Send Your File Details to a Government Consultant'}
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  {isAr
                    ? 'سيقوم ضابط المعاملات المعتمد بمراجعة طلبك والاتصال بك خلال 15 دقيقة.'
                    : 'An authorized typing consultant will review your request and contact you within 15 minutes.'}
                </p>
              </div>

              {formSubmitted ? (
                <div className="p-8 rounded-xl bg-teal-50 border border-teal-200 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-14 h-14 rounded-full bg-[#128B94] text-white flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      {isAr ? 'تم استلام طلبك بنجاح!' : 'Your Request Has Been Received!'}
                    </h3>
                    <p className="text-xs text-slate-600 mt-1">
                      {isAr
                        ? 'رقم التذكرة المرجعي الخاص بك: #ESS-REQ-2026-8842'
                        : 'Your official reference inquiry number: #ESS-REQ-2026-8842'}
                    </p>
                    <p className="text-xs text-slate-500 mt-2 max-w-md mx-auto">
                      {isAr
                        ? 'يقوم مستشارنا الحكومي بتدقيق المتطلبات وسيقوم بالاتصال بك على رقم هاتفك المسجل فوراً.'
                        : 'A senior typing consultant is currently checking ministerial requirements and will call your phone shortly.'}
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        serviceType: 'golden-visa',
                        channel: 'flagship',
                        message: '',
                      });
                    }}
                    className="px-5 py-2.5 rounded-lg bg-[#128B94] text-white text-xs font-bold hover:bg-[#01403F] transition-colors cursor-pointer"
                  >
                    {isAr ? 'إرسال استفسار آخر' : 'Send Another Inquiry'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        {isAr ? 'الاسم الكامل *' : 'Full Name *'}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={isAr ? 'سعادة / السيد...' : 'Your full name'}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs font-medium text-slate-900 focus:outline-none focus:ring-1 focus:ring-[#128B94] focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        {isAr ? 'رقم الهاتف / الواتساب *' : 'Phone / WhatsApp Number *'}
                      </label>
                      <input
                        type="tel"
                        required
                        dir="ltr"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+971 50 123 4567"
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs font-medium text-slate-900 focus:outline-none focus:ring-1 focus:ring-[#128B94] focus:bg-white text-left"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        {isAr ? 'البريد الإلكتروني' : 'Email Address'}
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs font-medium text-slate-900 focus:outline-none focus:ring-1 focus:ring-[#128B94] focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        {isAr ? 'الخدمة الحكومية المطلوبة *' : 'Service of Interest *'}
                      </label>
                      <select
                        value={formData.serviceType}
                        onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs font-bold text-slate-700 focus:outline-none focus:ring-1 focus:ring-[#128B94] focus:bg-white"
                      >
                        <option value="golden-visa">{isAr ? 'الإقامة الذهبية 10 سنوات (Amer)' : '10-Year Golden Visa (Amer)'}</option>
                        <option value="trade-license">{isAr ? 'تأسيس شركة ورخصة فورية (DED)' : 'DED Instant License / Setup'}</option>
                        <option value="tasheel-labor">{isAr ? 'معاملات العمل وتسهيل (MoHRE)' : 'MoHRE Tasheel Labor Services'}</option>
                        <option value="dha-medical">{isAr ? 'فحص طبي سريع 4 ساعات (DHA)' : '4-Hour Express Medical (DHA)'}</option>
                        <option value="emirates-id">{isAr ? 'الهوية الإماراتية والبصمة (ICP)' : 'Emirates ID & Biometrics (ICP)'}</option>
                        <option value="notary-attestation">{isAr ? 'الكاتب العدل والتصديقات (Notary)' : 'Notary Public & MOFA Attestation'}</option>
                        <option value="doorstep-van">{isAr ? 'حافلة الباب المتنقلة (Mobile Van)' : 'Doorstep Mobile Government Van'}</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {isAr ? 'قناة تقديم الخدمة المفضلة' : 'Preferred Service Channel'}
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, channel: 'flagship' })}
                        className={`p-2 rounded-lg text-xs font-bold border transition-all text-center cursor-pointer ${
                          formData.channel === 'flagship'
                            ? 'bg-[#128B94] text-white border-[#128B94]'
                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {isAr ? 'المركز الرئيسي' : 'Flagship Center'}
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, channel: 'vip_majlis' })}
                        className={`p-2 rounded-lg text-xs font-bold border transition-all text-center cursor-pointer ${
                          formData.channel === 'vip_majlis'
                            ? 'bg-[#128B94] text-white border-[#128B94]'
                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {isAr ? 'مجلس VIP' : 'VIP Majlis'}
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, channel: 'doorstep_van' })}
                        className={`p-2 rounded-lg text-xs font-bold border transition-all text-center cursor-pointer ${
                          formData.channel === 'doorstep_van'
                            ? 'bg-[#128B94] text-white border-[#128B94]'
                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {isAr ? 'الحافلة المتنقلة' : 'Mobile Van'}
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {isAr ? 'ملاحظات أو استفسار إضافي' : 'Notes or Additional Requirements'}
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={
                        isAr
                          ? 'اذكر أي تفاصيل إضافية مثل عدد أفراد الأسرة، أو نوع الرخصة التجارية...'
                          : 'Mention any details such as number of family dependents or trade license activity...'
                      }
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-xs font-medium text-slate-900 focus:outline-none focus:ring-1 focus:ring-[#128B94] focus:bg-white resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-lg bg-[#128B94] hover:bg-[#01403F] text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isAr ? 'إرسال الطلب للمستشار الآن' : 'Submit File to Government Consultant'}</span>
                  </button>
                </form>
              )}
            </div>

            {/* Interactive Map Preview Card */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    {isAr ? 'خريطة الوصول والموقع' : 'Location Map & Driving Directions'}
                  </h3>
                  <p className="text-xs text-slate-500">
                    {isAr ? 'موقع استراتيجي يربط أهم مناطق الأعمال في دبي' : 'Direct highway access with clear signage'}
                  </p>
                </div>
                <a
                  href={OFFICIAL_MAPS.shareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-teal-50 text-[#128B94] hover:bg-teal-100 text-xs font-bold transition-colors flex items-center gap-1 shrink-0"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>{isAr ? 'الاتجاهات وملف جوجل' : 'Google Profile & Directions'}</span>
                </a>
              </div>

              {/* Official Google Maps Live Embed */}
              <div className="rounded-xl overflow-hidden border border-slate-200 bg-slate-100 shadow-inner relative">
                <iframe
                  src={OFFICIAL_MAPS.embedIframeUrl}
                  width="100%"
                  height="420"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="Karama Medical Fitness Express service Center - KMFC Map"
                  className="w-full h-80 sm:h-96 md:h-[420px]"
                />
              </div>

              {/* Verified Location Bar */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div className="flex items-start gap-2.5 text-slate-700">
                  <MapPin className="w-4 h-4 text-[#128B94] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">{OFFICIAL_MAPS.placeName}</span>
                    <span className="text-slate-500 text-[11px] block mt-0.5">
                      {isAr ? OFFICIAL_MAPS.locationDetailsAr : OFFICIAL_MAPS.locationDetailsEn} · (Lat: 25.2453731, Lng: 55.309525)
                    </span>
                  </div>
                </div>
                <a
                  href={OFFICIAL_MAPS.shareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#128B94] hover:bg-[#01403F] text-white font-bold text-xs transition-colors shrink-0 shadow-2xs"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>{isAr ? 'فتح في خرائط Google' : 'Open in Google Maps'}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
