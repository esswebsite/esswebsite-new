import React, { useState } from 'react';
import { Phone, MessageSquare, Clock, X, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';

interface CustomerSupportBarProps {
  language: Language;
}

export const CustomerSupportBar: React.FC<CustomerSupportBarProps> = ({ language }) => {
  const [showCallbackModal, setShowCallbackModal] = useState(false);
  const [callbackPhone, setCallbackPhone] = useState('');
  const [callbackName, setCallbackName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (callbackPhone.trim()) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setShowCallbackModal(false);
        setCallbackPhone('');
        setCallbackName('');
      }, 2500);
    }
  };

  return (
    <>
      {/* Floating Bottom Quick Action Strip - Stacked Round Bubbles */}
      <aside aria-label="Customer Support Bar" className="fixed bottom-5 right-5 rtl:right-auto rtl:left-5 z-40 flex flex-col items-center gap-2.5">
        {/* WhatsApp Round Floating Action Bubble with Original Icon (Top) */}
        <a
          href="https://wa.me/97143426666?text=Hello%20Karama%20Business%20Center%20and%20Emirates%20Secretarial%20Services,%20I%20would%20like%20to%20inquire%20about%20government%20services"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={language === 'ar' ? 'تواصل عبر واتساب: +97143426666' : 'Chat on WhatsApp: +971 4 342 6666'}
          className="relative group w-12 h-12 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 ring-2 ring-white/90 cursor-pointer"
          title={language === 'ar' ? 'محادثة واتساب فورية: +971 4 342 6666' : 'WhatsApp Support: +971 4 342 6666'}
        >
          {/* Live Online Badge */}
          <span className="absolute -top-0.5 -right-0.5 rtl:-right-auto rtl:-left-0.5 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-200 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-300 border-2 border-white"></span>
          </span>

          {/* Original WhatsApp Vector Logo */}
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 text-white drop-shadow-xs"
            aria-hidden="true"
          >
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.63C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.9C17.18 3.03 14.69 2 12.04 2ZM12.05 20.15C10.57 20.15 9.12 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.68 12.05 3.68C14.25 3.68 16.31 4.54 17.87 6.1C19.42 7.66 20.28 9.72 20.28 11.92C20.28 16.46 16.59 20.15 12.05 20.15ZM16.57 14.44C16.32 14.31 15.11 13.72 14.88 13.64C14.66 13.55 14.49 13.51 14.33 13.76C14.16 14.01 13.67 14.58 13.52 14.75C13.37 14.92 13.22 14.94 12.97 14.81C12.72 14.69 11.91 14.42 10.95 13.57C10.2 12.9 9.69 12.08 9.54 11.83C9.39 11.58 9.53 11.44 9.65 11.32C9.76 11.21 9.9 11.03 10.02 10.89C10.15 10.74 10.19 10.64 10.27 10.47C10.35 10.3 10.31 10.16 10.25 10.03C10.19 9.91 9.69 8.68 9.48 8.18C9.28 7.69 9.07 7.76 8.92 7.75C8.77 7.74 8.61 7.74 8.44 7.74C8.28 7.74 8.01 7.8 7.78 8.05C7.55 8.3 6.9 8.91 6.9 10.15C6.9 11.39 7.8 12.59 7.93 12.75C8.05 12.92 9.72 15.49 12.28 16.6C12.89 16.86 13.36 17.02 13.73 17.14C14.34 17.33 14.9 17.31 15.34 17.24C15.83 17.17 16.85 16.62 17.06 16.03C17.27 15.44 17.27 14.94 17.21 14.83C17.15 14.72 16.98 14.66 16.57 14.44Z" />
          </svg>

          {/* Side Tooltip */}
          <span className="absolute right-full mr-2.5 rtl:mr-0 rtl:right-auto rtl:left-full rtl:ml-2.5 top-1/2 -translate-y-1/2 hidden group-hover:block whitespace-nowrap px-2.5 py-1 text-[11px] font-bold text-white bg-slate-900/90 rounded-md shadow-lg pointer-events-none transition-opacity">
            {language === 'ar' ? 'محادثة واتساب' : 'WhatsApp'}
          </span>
        </a>

        {/* Direct Call Round Floating Action Bubble (Under WA) */}
        <a
          href="tel:+97143426666"
          aria-label={language === 'ar' ? 'اتصال مباشر: +97143426666' : 'Direct Call: +971 4 342 6666'}
          className="relative group w-12 h-12 rounded-full bg-[#128B94] hover:bg-[#01403F] text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 ring-2 ring-white/90 cursor-pointer"
          title={language === 'ar' ? 'اتصال مباشر: 04-342-6666' : 'Call Now: +971 4 342 6666'}
        >
          <Phone className="w-5 h-5 text-white" />

          {/* Side Tooltip */}
          <span className="absolute right-full mr-2.5 rtl:mr-0 rtl:right-auto rtl:left-full rtl:ml-2.5 top-1/2 -translate-y-1/2 hidden group-hover:block whitespace-nowrap px-2.5 py-1 text-[11px] font-bold text-white bg-slate-900/90 rounded-md shadow-lg pointer-events-none transition-opacity">
            {language === 'ar' ? 'اتصال هاتفي' : 'Call Us'}
          </span>
        </a>
      </aside>

      {/* Callback Request Modal */}
      {showCallbackModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-sm w-full p-6 shadow-2xl border border-slate-200 relative">
            <button
              onClick={() => setShowCallbackModal(false)}
              className="absolute top-4 right-4 rtl:right-auto rtl:left-4 text-slate-400 hover:text-slate-700 cursor-pointer p-1"
            >
              <X className="w-4 h-4" />
            </button>

            {submitted ? (
              <div className="text-center py-6">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto mb-2" />
                <h3 className="font-bold text-slate-900 text-base">
                  {language === 'ar' ? 'تم استلام طلبكم بنجاح' : 'Callback Request Confirmed'}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  {language === 'ar'
                    ? 'سيتواصل معكم أحد مستشارينا المعتمدين خلال 15 دقيقة.'
                    : 'A certified relationship officer will contact you within 15 minutes.'}
                </p>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-[#128B94] uppercase mb-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{language === 'ar' ? 'استجابة سريعة' : '15-Min Priority Response'}</span>
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-1">
                  {language === 'ar' ? 'طلب معاودة اتصال من مستشار' : 'Request Corporate Callback'}
                </h3>
                <p className="text-xs text-slate-500 mb-4">
                  {language === 'ar'
                    ? 'أدخل رقم هاتفك وسيقوم مستشار حكومي بالتواصل معك فوراً.'
                    : 'Speak directly with our senior government transaction advisors.'}
                </p>

                <form onSubmit={handleSubmit} className="space-y-3">
                  <div>
                    <input
                      type="text"
                      value={callbackName}
                      onChange={(e) => setCallbackName(e.target.value)}
                      placeholder={language === 'ar' ? 'الاسم الكريم' : 'Your Full Name'}
                      className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-md text-slate-900 focus:outline-none focus:ring-1 focus:ring-[#128B94]"
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      required
                      value={callbackPhone}
                      onChange={(e) => setCallbackPhone(e.target.value)}
                      placeholder="+971 50 000 0000"
                      className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-md text-slate-900 focus:outline-none focus:ring-1 focus:ring-[#128B94]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 text-xs font-bold text-white bg-[#128B94] hover:bg-[#01403F] rounded-md transition-colors cursor-pointer shadow-xs"
                  >
                    {language === 'ar' ? 'إرسال الطلب الآن' : 'Call Me Back'}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
