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
import {
  formatContactWhatsAppMessage,
  getWhatsAppUrl,
  openWhatsApp,
  OFFICIAL_PHONE,
  OFFICIAL_PHONE_TEL,
} from '../utils/whatsapp';

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
  const [waContactText, setWaContactText] = useState<string>('');
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
    if (formData.name.trim() && formData.phone.trim()) {
      const waMsg = formatContactWhatsAppMessage({
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        serviceType: formData.serviceType,
        channel: formData.channel,
        message: formData.message,
      });
      setWaContactText(waMsg);
      openWhatsApp(waMsg);
      setFormSubmitted(true);
    }
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
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full uppercase tracking-wider inline-block mb-1">
                      {isAr ? 'تم إرسال الطلب عبر واتساب' : 'Inquiry Dispatched to WhatsApp'}
                    </span>
                    <h3 className="text-xl font-extrabold text-slate-900 mt-1">
                      {isAr ? 'تم استلام وتجهيز طلبكم بنجاح!' : 'Your Request Has Been Prepared & Sent!'}
                    </h3>
                    <p className="text-xs text-slate-600 mt-1.5">
                      {isAr
                        ? 'تم تحويل استفسارك إلى ضابط المعاملات المعتمد على واتساب (+971 4 342 6666).'
                        : 'Your details have been compiled and dispatched to our senior typing consultant on WhatsApp.'}
                    </p>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={getWhatsAppUrl(waContactText)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs sm:text-sm font-bold shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white" aria-hidden="true">
                        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.63C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.9C17.18 3.03 14.69 2 12.04 2ZM12.05 20.15C10.57 20.15 9.12 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.68 12.05 3.68C14.25 3.68 16.31 4.54 17.87 6.1C19.42 7.66 20.28 9.72 20.28 11.92C20.28 16.46 16.59 20.15 12.05 20.15ZM16.57 14.44C16.32 14.31 15.11 13.72 14.88 13.64C14.66 13.55 14.49 13.51 14.33 13.76C14.16 14.01 13.67 14.58 13.52 14.75C13.37 14.92 13.22 14.94 12.97 14.81C12.72 14.69 11.91 14.42 10.95 13.57C10.2 12.9 9.69 12.08 9.54 11.83C9.39 11.58 9.53 11.44 9.65 11.32C9.76 11.21 9.9 11.03 10.02 10.89C10.15 10.74 10.19 10.64 10.27 10.47C10.35 10.3 10.31 10.16 10.25 10.03C10.19 9.91 9.69 8.68 9.48 8.18C9.28 7.69 9.07 7.76 8.92 7.75C8.77 7.74 8.61 7.74 8.44 7.74C8.28 7.74 8.01 7.8 7.78 8.05C7.55 8.3 6.9 8.91 6.9 10.15C6.9 11.39 7.8 12.59 7.93 12.75C8.05 12.92 9.72 15.49 12.28 16.6C12.89 16.86 13.36 17.02 13.73 17.14C14.34 17.33 14.9 17.31 15.34 17.24C15.83 17.17 16.85 16.62 17.06 16.03C17.27 15.44 17.27 14.94 17.21 14.83C17.15 14.72 16.98 14.66 16.57 14.44Z" />
                      </svg>
                      <span>{isAr ? 'فتح المحادثة في واتساب' : 'Open in WhatsApp'}</span>
                    </a>

                    <a
                      href={OFFICIAL_PHONE_TEL}
                      className="w-full sm:w-auto px-5 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-800 text-xs sm:text-sm font-bold border border-slate-300 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <PhoneCall className="w-4 h-4 text-[#128B94]" />
                      <span>{isAr ? `اتصال هاتفي: ${OFFICIAL_PHONE}` : `Call: ${OFFICIAL_PHONE}`}</span>
                    </a>
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
                    className="text-xs font-semibold text-slate-500 hover:text-slate-800 underline transition-colors cursor-pointer pt-2 block mx-auto"
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
                        <option value="golden-visa">{isAr ? 'الإقامة الذهبية 10 سنوات' : '10-Year Golden Visa'}</option>
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
                    className="w-full py-3.5 px-6 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white" aria-hidden="true">
                      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.63C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.9C17.18 3.03 14.69 2 12.04 2ZM12.05 20.15C10.57 20.15 9.12 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.68 12.05 3.68C14.25 3.68 16.31 4.54 17.87 6.1C19.42 7.66 20.28 9.72 20.28 11.92C20.28 16.46 16.59 20.15 12.05 20.15ZM16.57 14.44C16.32 14.31 15.11 13.72 14.88 13.64C14.66 13.55 14.49 13.51 14.33 13.76C14.16 14.01 13.67 14.58 13.52 14.75C13.37 14.92 13.22 14.94 12.97 14.81C12.72 14.69 11.91 14.42 10.95 13.57C10.2 12.9 9.69 12.08 9.54 11.83C9.39 11.58 9.53 11.44 9.65 11.32C9.76 11.21 9.9 11.03 10.02 10.89C10.15 10.74 10.19 10.64 10.27 10.47C10.35 10.3 10.31 10.16 10.25 10.03C10.19 9.91 9.69 8.68 9.48 8.18C9.28 7.69 9.07 7.76 8.92 7.75C8.77 7.74 8.61 7.74 8.44 7.74C8.28 7.74 8.01 7.8 7.78 8.05C7.55 8.3 6.9 8.91 6.9 10.15C6.9 11.39 7.8 12.59 7.93 12.75C8.05 12.92 9.72 15.49 12.28 16.6C12.89 16.86 13.36 17.02 13.73 17.14C14.34 17.33 14.9 17.31 15.34 17.24C15.83 17.17 16.85 16.62 17.06 16.03C17.27 15.44 17.27 14.94 17.21 14.83C17.15 14.72 16.98 14.66 16.57 14.44Z" />
                    </svg>
                    <span>{isAr ? 'إرسال التفاصيل مباشرة عبر واتساب' : 'Submit & Send Details via WhatsApp'}</span>
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
