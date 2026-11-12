import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, MapPin, CheckCircle2, User, Phone, Mail, Building, ArrowRight, ShieldCheck, Truck, Crown, Search, Layers, ChevronDown, PhoneCall, MessageSquare } from 'lucide-react';
import { ServiceItem, Language, BookingSubmission } from '../types';
import { SERVICES, DEPARTMENTS } from '../data/departmentsData';
import { TRANSLATIONS } from '../data/translations';
import { DepartmentLogo } from './DepartmentLogo';
import {
  formatBookingWhatsAppMessage,
  getWhatsAppUrl,
  openWhatsApp,
  OFFICIAL_PHONE,
  OFFICIAL_PHONE_TEL,
} from '../utils/whatsapp';

interface BookingModalProps {
  isOpen: boolean;
  language: Language;
  onClose: () => void;
  preselectedService?: ServiceItem | null;
  initialChannel?: 'flagship' | 'vip_majlis' | 'doorstep_van';
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  language,
  onClose,
  preselectedService,
  initialChannel = 'flagship',
}) => {
  const t = TRANSLATIONS[language];
  const isAr = language === 'ar';

  const defaultService = preselectedService || SERVICES[0];

  const [step, setStep] = useState<number>(1);
  const [selectedDepartmentId, setSelectedDepartmentId] = useState<string>(
    preselectedService ? preselectedService.departmentId : defaultService.departmentId
  );
  const [selectedServiceId, setSelectedServiceId] = useState<string>(defaultService.id);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedChannel, setSelectedChannel] = useState<'flagship' | 'vip_majlis' | 'doorstep_van'>(
    initialChannel
  );
  const [selectedDate, setSelectedDate] = useState<string>('2026-10-12');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>('10:00 AM');

  // Client Details Form
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [address, setAddress] = useState('');
  const [notes, setNotes] = useState('');
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  // Confirmed State
  const [confirmedBooking, setConfirmedBooking] = useState<BookingSubmission | null>(null);
  const [waBookingText, setWaBookingText] = useState<string>('');

  useEffect(() => {
    if (preselectedService) {
      setSelectedDepartmentId(preselectedService.departmentId);
      setSelectedServiceId(preselectedService.id);
    }
  }, [preselectedService]);

  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setConfirmedBooking(null);
      setWaBookingText('');
      setFormErrors({});
      if (preselectedService) {
        setSelectedDepartmentId(preselectedService.departmentId);
        setSelectedServiceId(preselectedService.id);
      }
    }
  }, [isOpen, preselectedService]);

  const handleSelectDepartment = (deptId: string) => {
    setSelectedDepartmentId(deptId);
    setSearchQuery('');
    const deptServices = SERVICES.filter((s) => s.departmentId === deptId);
    if (deptServices.length > 0 && !deptServices.some((s) => s.id === selectedServiceId)) {
      setSelectedServiceId(deptServices[0].id);
    }
  };

  const activeService = SERVICES.find((s) => s.id === selectedServiceId) || defaultService;
  const activeDepartment =
    DEPARTMENTS.find((d) => d.id === selectedDepartmentId) || DEPARTMENTS[0];
  const departmentServices = SERVICES.filter((s) => s.departmentId === selectedDepartmentId);
  const displayedServices = searchQuery.trim()
    ? departmentServices.filter(
        (s) =>
          s.titleEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.titleAr.includes(searchQuery) ||
          s.shortDescEn.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : departmentServices;

  const timeSlots = [
    '08:30 AM',
    '09:30 AM',
    '10:30 AM',
    '11:30 AM',
    '01:00 PM',
    '02:30 PM',
    '04:00 PM',
    '05:30 PM',
    '07:00 PM',
  ];

  const validateStep3 = () => {
    const errors: Record<string, string> = {};
    if (!fullName.trim()) {
      errors.fullName = language === 'ar' ? 'الاسم مطلوب' : 'Full name is required';
    }
    if (!phone.trim() || phone.trim().length < 8) {
      errors.phone = language === 'ar' ? 'رقم الهاتف مطلوب' : 'Valid UAE phone is required';
    }
    if (!email.trim() || !email.includes('@')) {
      errors.email = language === 'ar' ? 'البريد الإلكتروني غير صحيح' : 'Valid email is required';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleNext = () => {
    if (step === 3) {
      if (validateStep3()) {
        const randRef = `ESS-2026-${Math.floor(10000 + Math.random() * 90000)}`;
        const booking: BookingSubmission = {
          serviceId: activeService.id,
          departmentId: activeService.departmentId,
          channel: selectedChannel,
          fullName,
          phone,
          email,
          companyName,
          date: selectedDate,
          timeSlot: selectedTimeSlot,
          address,
          notes,
          referenceNumber: randRef,
        };
        setConfirmedBooking(booking);

        // Format all filled details and dispatch to WhatsApp
        const waMsg = formatBookingWhatsAppMessage({
          referenceNumber: randRef,
          departmentName: isAr ? activeDepartment?.nameAr : activeDepartment?.nameEn,
          serviceTitle: isAr ? activeService.titleAr : activeService.titleEn,
          serviceId: activeService.id,
          channel: selectedChannel,
          date: selectedDate,
          timeSlot: selectedTimeSlot,
          fullName,
          phone,
          email,
          companyName,
          address,
          notes,
        });

        setWaBookingText(waMsg);
        openWhatsApp(waMsg);
        setStep(4);
      }
    } else {
      setStep((prev) => prev + 1);
    }
  };

  const handleDirectWhatsAppQuick = () => {
    const quickMsg = `Hello Karama Business Center & ESS, I would like to quickly book an appointment for: ${
      isAr ? activeService.titleAr : activeService.titleEn
    } (${activeService.id}). Please assist me directly on WhatsApp.`;
    openWhatsApp(quickMsg);
  };

  const handleResetAndClose = () => {
    setStep(1);
    setConfirmedBooking(null);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6">
      <div className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden my-8">
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-[#01403F] via-[#095E63] to-[#128B94] text-white flex items-center justify-between">
          <div>
            <span className="text-xs font-bold text-teal-200 uppercase tracking-wider block">
              {language === 'ar' ? 'نظام الحجز المعتمد' : 'Official Appointment System'}
            </span>
            <h2 className="text-lg sm:text-xl font-bold text-white mt-1">
              {t.bookingModalTitle}
            </h2>
          </div>

          <button
            onClick={handleResetAndClose}
            className="text-teal-100 hover:text-white p-1.5 rounded-md hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Indicator (3 Direct Steps) */}
        {step < 4 && (
          <div className="px-6 py-3 bg-slate-100 border-b border-slate-200 flex items-center justify-between text-xs text-slate-600 font-semibold">
            <span className={step >= 1 ? 'text-[#128B94] font-bold' : ''}>
              1. {isAr ? 'الخدمة والدائرة' : 'Service & Department'}
            </span>
            <span>→</span>
            <span className={step >= 2 ? 'text-[#128B94] font-bold' : ''}>
              2. {isAr ? 'الموعد والتوقيت' : 'Date & Time'}
            </span>
            <span>→</span>
            <span className={step >= 3 ? 'text-[#128B94] font-bold' : ''}>
              3. {isAr ? 'بيانات المتقدم' : 'Applicant Details'}
            </span>
          </div>
        )}

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[65vh] overflow-y-auto">
          {/* STEP 1: Department Selection First, then Department-Specific Services */}
          {step === 1 && (
            <div className="space-y-5">
                {/* 1. Choose Department */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-[#128B94]" />
                      <span>{isAr ? '١. اختر الدائرة أو الجهة الحكومية أولاً:' : '1. Choose Government Department First:'}</span>
                    </label>
                    <span className="text-[11px] font-semibold text-[#128B94] font-mono">
                      {DEPARTMENTS.length} {isAr ? 'دوائر معتمدة' : 'Departments'}
                    </span>
                  </div>

                  {/* Department Select Dropdown */}
                  <div className="relative mb-2.5">
                    <select
                      value={selectedDepartmentId}
                      onChange={(e) => handleSelectDepartment(e.target.value)}
                      className="w-full px-3.5 py-2.5 pr-8 rtl:pr-3.5 rtl:pl-8 bg-slate-50 border border-slate-300 rounded-lg text-xs font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#128B94] cursor-pointer appearance-none"
                    >
                      {DEPARTMENTS.map((dept) => {
                        const count = SERVICES.filter((s) => s.departmentId === dept.id).length;
                        return (
                          <option key={dept.id} value={dept.id}>
                            {isAr ? dept.nameAr : dept.nameEn} ({count} {isAr ? 'خدمات' : 'services'})
                          </option>
                        );
                      })}
                    </select>
                    <ChevronDown className="w-4 h-4 text-slate-500 absolute right-3 rtl:right-auto rtl:left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>

                  {/* Fast Clickable Department Tiles Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 max-h-36 overflow-y-auto p-1.5 bg-slate-50/80 rounded-xl border border-slate-200">
                    {DEPARTMENTS.map((dept) => {
                      const isSelected = selectedDepartmentId === dept.id;
                      const count = SERVICES.filter((s) => s.departmentId === dept.id).length;
                      return (
                        <button
                          key={dept.id}
                          type="button"
                          onClick={() => handleSelectDepartment(dept.id)}
                          className={`p-2 rounded-lg border text-left rtl:text-right transition-all flex items-center gap-2 cursor-pointer ${
                            isSelected
                              ? 'border-[#128B94] bg-white ring-2 ring-[#128B94] shadow-xs'
                              : 'border-slate-200 bg-white hover:bg-slate-100/90 text-slate-700'
                          }`}
                        >
                          <div className="w-6 h-6 rounded bg-slate-50 p-0.5 border border-slate-200 shrink-0 flex items-center justify-center">
                            <DepartmentLogo deptId={dept.id} className="w-full h-full" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="text-[11px] font-bold text-slate-900 truncate">
                              {isAr ? dept.nameAr : dept.nameEn}
                            </div>
                            <div className="text-[10px] text-slate-600 font-mono">
                              {count} {isAr ? 'خدمات' : 'services'}
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 2. Choose Service under that Department */}
                <div className="pt-3 border-t border-slate-200 space-y-2.5">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        <span>
                          {isAr
                            ? `٢. اختر المعاملة ضمن (${activeDepartment ? activeDepartment.nameAr : ''}):`
                            : `2. Select Service under (${activeDepartment?.nameEn}):`}
                        </span>
                      </h4>
                      <p className="text-[11px] text-slate-600">
                        {isAr
                          ? 'اختر الخدمة المطلوبة من القائمة المخصصة لهذه الدائرة'
                          : 'Filtered transactions exclusively under this department'}
                      </p>
                    </div>
                    <span className="text-[11px] font-bold px-2 py-0.5 bg-teal-100 text-[#01403F] rounded-md font-mono self-start sm:self-auto">
                      {departmentServices.length} {isAr ? 'معاملات' : 'services'}
                    </span>
                  </div>

                  {/* Search within this department if more than 4 services */}
                  {departmentServices.length > 4 && (
                    <div className="relative">
                      <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 rtl:left-auto rtl:right-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder={
                          isAr
                            ? `بحث ضمن خدمات ${activeDepartment ? activeDepartment.nameAr : ''}...`
                            : `Search in ${activeDepartment?.nameEn}...`
                        }
                        className="w-full pl-8 pr-3 rtl:pl-3 rtl:pr-8 py-1.5 text-xs bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-1 focus:ring-[#128B94]"
                      />
                    </div>
                  )}

                  {/* Filtered Services List */}
                  <div className="space-y-2 max-h-56 overflow-y-auto pr-0.5">
                    {displayedServices.length === 0 ? (
                      <div className="p-4 text-center text-xs text-slate-500 bg-slate-50 rounded-lg border border-dashed border-slate-200">
                        {isAr ? 'لا توجد خدمات مطابقة لبحثك في هذه الدائرة' : 'No matching services found in this department'}
                      </div>
                    ) : (
                      displayedServices.map((service) => {
                        const isSelected = selectedServiceId === service.id;
                        return (
                          <label
                            key={service.id}
                            className={`block p-3 rounded-lg border text-left rtl:text-right cursor-pointer transition-all ${
                              isSelected
                                ? 'border-[#128B94] bg-teal-50/70 text-slate-900 ring-2 ring-[#128B94] shadow-xs'
                                : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-900'
                            }`}
                          >
                            <input
                              type="radio"
                              name="bookingService"
                              value={service.id}
                              checked={isSelected}
                              onChange={() => setSelectedServiceId(service.id)}
                              className="sr-only"
                            />
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-lg bg-teal-50 text-[#128B94] p-1 border border-teal-100 shrink-0 flex items-center justify-center">
                                <DepartmentLogo deptId={service.departmentId} className="w-full h-full" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between gap-2">
                                  <span className="text-[11px] font-bold text-[#128B94] truncate">
                                    {isAr ? service.authorityAr : service.authorityEn}
                                  </span>
                                </div>
                                <div className="text-xs font-bold text-slate-900 mt-0.5">
                                  {isAr ? service.titleAr : service.titleEn}
                                </div>
                                <div className="flex items-center gap-3 text-[10px] text-slate-600 mt-0.5">
                                  <span className="flex items-center gap-1">
                                    <Clock className="w-3 h-3 text-slate-400" />
                                    <span>{isAr ? service.processingTimeAr : service.processingTimeEn}</span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </label>
                        );
                      })
                    )}
                  </div>
                </div>
              </div>
          )}

          {/* STEP 2: Date & Time Picker */}
          {step === 2 && (
            <div className="space-y-6">
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                  {language === 'ar' ? 'اختر تاريخ الموعد:' : 'Select Appointment Date:'}
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  min="2026-10-10"
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-md text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#128B94]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                  {language === 'ar' ? 'اختر الوقت المتاح:' : 'Select Available Time Slot:'}
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setSelectedTimeSlot(slot)}
                      className={`py-2 px-3 text-xs font-bold rounded-md transition-all cursor-pointer tabular-nums ${
                        selectedTimeSlot === slot
                          ? 'bg-[#128B94] text-white shadow-xs'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: Applicant Details */}
          {step === 3 && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                  {t.applicantNameLabel} *
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Tariq Mansoor / Sarah Jenkins"
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-md text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#128B94]"
                />
                {formErrors.fullName && (
                  <p className="text-xs text-rose-600 mt-1">{formErrors.fullName}</p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                    {t.applicantPhoneLabel} *
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+971 50 123 4567"
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-md text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#128B94]"
                  />
                  {formErrors.phone && (
                    <p className="text-xs text-rose-600 mt-1">{formErrors.phone}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                    {t.applicantEmailLabel} *
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-md text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#128B94]"
                  />
                  {formErrors.email && (
                    <p className="text-xs text-rose-600 mt-1">{formErrors.email}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                  {t.applicantCompanyLabel}
                </label>
                <input
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="e.g. Apex Global FZCO (if corporate transaction)"
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-md text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#128B94]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                  {t.applicantNotesLabel}
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder={language === 'ar' ? 'أي ملاحظات أو مستندات خاصة تود تجهيزها مسبقاً' : 'Any specific requirements or prior file details'}
                  className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-300 rounded-md text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#128B94]"
                />
              </div>
            </div>
          )}

          {/* STEP 4: Instant Confirmation & WhatsApp Submission */}
          {step === 4 && confirmedBooking && (
            <div className="text-center py-4 sm:py-6">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3 shadow-inner">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full uppercase tracking-wider inline-block">
                {isAr ? 'تم تجهيز وإرسال تفاصيل الموعد عبر واتساب' : 'Appointment Details Prepared for WhatsApp'}
              </span>

              <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mt-2">
                {language === 'ar' ? 'تم تجهيز ملف المعاملة وفتح محادثة واتساب الرسمية' : 'Your File is Ready & Dispatched to Official WhatsApp'}
              </h3>

              <p className="text-xs text-slate-600 mt-1 max-w-md mx-auto">
                {isAr
                  ? 'تم تجهيز كافة بياناتك وتوليد نص الاستفسار الرسمي. إذا لم تفتح نافذة واتساب تلقائياً، يرجى الضغط على الزر الأخضر أدناه لإرسالها فوراً.'
                  : 'Your booking has been compiled into an official request. If WhatsApp did not open automatically, tap the button below to send your details.'}
              </p>

              <div className="mt-5 p-4 sm:p-5 bg-slate-50 rounded-xl border border-slate-200 text-left rtl:text-right space-y-3">
                <div className="flex items-center justify-between border-b border-slate-200 pb-2.5">
                  <span className="text-xs text-slate-500 font-semibold">{t.appointmentReference}</span>
                  <span className="text-sm font-bold font-mono text-[#128B94]">
                    {confirmedBooking.referenceNumber}
                  </span>
                </div>

                <div className="text-xs space-y-1.5 text-slate-700">
                  <p>
                    <strong>{language === 'ar' ? 'الخدمة:' : 'Service:'}</strong>{' '}
                    {language === 'ar' ? activeService.titleAr : activeService.titleEn}
                  </p>
                  <p>
                    <strong>{language === 'ar' ? 'المقر:' : 'Location:'}</strong>{' '}
                    {language === 'ar' ? 'مركز الكرامة للأعمال (المقر الرئيسي بالكرامة)' : 'Karama Business Center (Main Branch, Al Karama)'}
                  </p>
                  <p>
                    <strong>{language === 'ar' ? 'الموعد:' : 'Date & Time:'}</strong>{' '}
                    {confirmedBooking.date} · {confirmedBooking.timeSlot}
                  </p>
                  <p>
                    <strong>{language === 'ar' ? 'المتقدم:' : 'Applicant:'}</strong>{' '}
                    {confirmedBooking.fullName} ({confirmedBooking.phone})
                  </p>
                  {confirmedBooking.notes && (
                    <p>
                      <strong>{language === 'ar' ? 'ملاحظات:' : 'Notes:'}</strong>{' '}
                      {confirmedBooking.notes}
                    </p>
                  )}
                </div>
              </div>

              {/* Action Buttons for Step 4 */}
              <div className="mt-5 space-y-2.5">
                <a
                  href={getWhatsAppUrl(waBookingText)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm rounded-xl flex items-center justify-center gap-2 shadow-md transition-all active:scale-[0.98] cursor-pointer"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white" aria-hidden="true">
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.63C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.9C17.18 3.03 14.69 2 12.04 2ZM12.05 20.15C10.57 20.15 9.12 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.68 12.05 3.68C14.25 3.68 16.31 4.54 17.87 6.1C19.42 7.66 20.28 9.72 20.28 11.92C20.28 16.46 16.59 20.15 12.05 20.15ZM16.57 14.44C16.32 14.31 15.11 13.72 14.88 13.64C14.66 13.55 14.49 13.51 14.33 13.76C14.16 14.01 13.67 14.58 13.52 14.75C13.37 14.92 13.22 14.94 12.97 14.81C12.72 14.69 11.91 14.42 10.95 13.57C10.2 12.9 9.69 12.08 9.54 11.83C9.39 11.58 9.53 11.44 9.65 11.32C9.76 11.21 9.9 11.03 10.02 10.89C10.15 10.74 10.19 10.64 10.27 10.47C10.35 10.3 10.31 10.16 10.25 10.03C10.19 9.91 9.69 8.68 9.48 8.18C9.28 7.69 9.07 7.76 8.92 7.75C8.77 7.74 8.61 7.74 8.44 7.74C8.28 7.74 8.01 7.8 7.78 8.05C7.55 8.3 6.9 8.91 6.9 10.15C6.9 11.39 7.8 12.59 7.93 12.75C8.05 12.92 9.72 15.49 12.28 16.6C12.89 16.86 13.36 17.02 13.73 17.14C14.34 17.33 14.9 17.31 15.34 17.24C15.83 17.17 16.85 16.62 17.06 16.03C17.27 15.44 17.27 14.94 17.21 14.83C17.15 14.72 16.98 14.66 16.57 14.44Z" />
                  </svg>
                  <span>{isAr ? 'فتح وإرسال التفاصيل في واتساب' : 'Open WhatsApp with Booking Details'}</span>
                </a>

                {/* Keep Call CTA */}
                <a
                  href={OFFICIAL_PHONE_TEL}
                  className="w-full py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-[#128B94]" />
                  <span>{isAr ? `أو اتصل بنا مباشرة: ${OFFICIAL_PHONE}` : `Or Call Desk Directly: ${OFFICIAL_PHONE}`}</span>
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Controls */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
          {step > 1 && step < 4 ? (
            <button
              onClick={() => setStep((p) => p - 1)}
              className="px-4 py-2 text-xs sm:text-sm font-bold text-slate-700 hover:text-slate-900 transition-colors cursor-pointer"
            >
              {t.prevStepBtn}
            </button>
          ) : (
            <div className="flex items-center gap-2">
              {step < 4 && (
                <button
                  type="button"
                  onClick={handleDirectWhatsAppQuick}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-[#25D366] hover:bg-emerald-50 transition-colors cursor-pointer border border-emerald-200"
                  title="Direct WhatsApp booking without filling fields"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5" aria-hidden="true">
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.63C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.9C17.18 3.03 14.69 2 12.04 2ZM12.05 20.15C10.57 20.15 9.12 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.68 12.05 3.68C14.25 3.68 16.31 4.54 17.87 6.1C19.42 7.66 20.28 9.72 20.28 11.92C20.28 16.46 16.59 20.15 12.05 20.15ZM16.57 14.44C16.32 14.31 15.11 13.72 14.88 13.64C14.66 13.55 14.49 13.51 14.33 13.76C14.16 14.01 13.67 14.58 13.52 14.75C13.37 14.92 13.22 14.94 12.97 14.81C12.72 14.69 11.91 14.42 10.95 13.57C10.2 12.9 9.69 12.08 9.54 11.83C9.39 11.58 9.53 11.44 9.65 11.32C9.76 11.21 9.9 11.03 10.02 10.89C10.15 10.74 10.19 10.64 10.27 10.47C10.35 10.3 10.31 10.16 10.25 10.03C10.19 9.91 9.69 8.68 9.48 8.18C9.28 7.69 9.07 7.76 8.92 7.75C8.77 7.74 8.61 7.74 8.44 7.74C8.28 7.74 8.01 7.8 7.78 8.05C7.55 8.3 6.9 8.91 6.9 10.15C6.9 11.39 7.8 12.59 7.93 12.75C8.05 12.92 9.72 15.49 12.28 16.6C12.89 16.86 13.36 17.02 13.73 17.14C14.34 17.33 14.9 17.31 15.34 17.24C15.83 17.17 16.85 16.62 17.06 16.03C17.27 15.44 17.27 14.94 17.21 14.83C17.15 14.72 16.98 14.66 16.57 14.44Z" />
                  </svg>
                  <span>{isAr ? 'حجز سريع عبر واتساب' : 'Quick WhatsApp Booking'}</span>
                </button>
              )}
            </div>
          )}

          {step < 4 ? (
            <button
              onClick={handleNext}
              className={`px-6 py-2.5 text-xs sm:text-sm font-bold text-white rounded-md transition-colors cursor-pointer flex items-center gap-2 shadow-xs ${
                step === 3 ? 'bg-[#25D366] hover:bg-[#20bd5a]' : 'bg-[#128B94] hover:bg-[#01403F]'
              }`}
            >
              {step === 3 ? (
                <>
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white" aria-hidden="true">
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.63C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.9C17.18 3.03 14.69 2 12.04 2ZM12.05 20.15C10.57 20.15 9.12 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.68 12.05 3.68C14.25 3.68 16.31 4.54 17.87 6.1C19.42 7.66 20.28 9.72 20.28 11.92C20.28 16.46 16.59 20.15 12.05 20.15ZM16.57 14.44C16.32 14.31 15.11 13.72 14.88 13.64C14.66 13.55 14.49 13.51 14.33 13.76C14.16 14.01 13.67 14.58 13.52 14.75C13.37 14.92 13.22 14.94 12.97 14.81C12.72 14.69 11.91 14.42 10.95 13.57C10.2 12.9 9.69 12.08 9.54 11.83C9.39 11.58 9.53 11.44 9.65 11.32C9.76 11.21 9.9 11.03 10.02 10.89C10.15 10.74 10.19 10.64 10.27 10.47C10.35 10.3 10.31 10.16 10.25 10.03C10.19 9.91 9.69 8.68 9.48 8.18C9.28 7.69 9.07 7.76 8.92 7.75C8.77 7.74 8.61 7.74 8.44 7.74C8.28 7.74 8.01 7.8 7.78 8.05C7.55 8.3 6.9 8.91 6.9 10.15C6.9 11.39 7.8 12.59 7.93 12.75C8.05 12.92 9.72 15.49 12.28 16.6C12.89 16.86 13.36 17.02 13.73 17.14C14.34 17.33 14.9 17.31 15.34 17.24C15.83 17.17 16.85 16.62 17.06 16.03C17.27 15.44 17.27 14.94 17.21 14.83C17.15 14.72 16.98 14.66 16.57 14.44Z" />
                  </svg>
                  <span>{isAr ? 'تأكيد وإرسال عبر واتساب' : 'Confirm & Send to WhatsApp'}</span>
                </>
              ) : (
                <>
                  <span>{t.nextStepBtn}</span>
                  <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                </>
              )}
            </button>
          ) : (
            <button
              onClick={handleResetAndClose}
              className="w-full py-2.5 text-xs sm:text-sm font-bold text-white bg-[#128B94] hover:bg-[#01403F] rounded-md transition-colors cursor-pointer"
            >
              {t.closeBtn}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
