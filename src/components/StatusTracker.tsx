import React, { useState } from 'react';
import { Search, CheckCircle2, Clock, AlertCircle, FileText, Download, UserCheck, ShieldCheck } from 'lucide-react';
import { Language, TrackingRecord } from '../types';
import { SAMPLE_TRACKING_RECORDS } from '../data/departmentsData';
import { TRANSLATIONS } from '../data/translations';

interface StatusTrackerProps {
  language: Language;
  initialRef?: string;
}

export const StatusTracker: React.FC<StatusTrackerProps> = ({
  language,
  initialRef = 'ESS-2026-88412',
}) => {
  const t = TRANSLATIONS[language];
  const [refInput, setRefInput] = useState(initialRef);
  const [searchedRecord, setSearchedRecord] = useState<TrackingRecord | null>(
    SAMPLE_TRACKING_RECORDS[0]
  );
  const [hasSearched, setHasSearched] = useState(true);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = refInput.trim().toUpperCase();
    const match = SAMPLE_TRACKING_RECORDS.find(
      (r) => r.reference.toUpperCase() === clean
    );
    setSearchedRecord(match || null);
    setHasSearched(true);
  };

  const handleQuickSelect = (ref: string) => {
    setRefInput(ref);
    const match = SAMPLE_TRACKING_RECORDS.find((r) => r.reference === ref);
    setSearchedRecord(match || null);
    setHasSearched(true);
  };

  const handleDownload = () => {
    setDownloadSuccess(true);
    setTimeout(() => {
      setDownloadSuccess(false);
    }, 3000);
  };

  return (
    <section id="tracking" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="text-xs font-bold tracking-wider text-[#128B94] uppercase mb-2">
            {language === 'ar' ? 'البوابة الإلكترونية المباشرة' : 'Direct Government E-Channel'}
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E2528] tracking-tight text-balance">
            {t.trackSectionTitle}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            {t.trackSectionDesc}
          </p>
        </div>

        {/* Search Input Box */}
        <div className="max-w-2xl mb-8">
          <form onSubmit={handleSearch} className="flex gap-2">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 rtl:left-auto rtl:right-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={refInput}
                onChange={(e) => setRefInput(e.target.value)}
                placeholder={t.trackInputPlaceholder}
                className="w-full pl-10 pr-4 rtl:pl-4 rtl:pr-10 py-3 text-sm font-mono uppercase bg-slate-50 border border-slate-300 rounded-md text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#128B94]"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 text-sm font-bold text-white bg-[#128B94] hover:bg-[#01403F] rounded-md transition-colors cursor-pointer shrink-0 shadow-xs"
            >
              {t.trackBtn}
            </button>
          </form>

          {/* Quick sample buttons */}
          <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-slate-500">
            <span>{t.sampleQuickTrack}</span>
            {SAMPLE_TRACKING_RECORDS.map((rec) => (
              <button
                key={rec.reference}
                type="button"
                onClick={() => handleQuickSelect(rec.reference)}
                className={`font-mono transition-colors underline underline-offset-2 cursor-pointer ${
                  rec.reference === refInput ? 'font-bold text-[#128B94]' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {rec.reference}
              </button>
            ))}
          </div>
        </div>

        {/* Results View */}
        {hasSearched && searchedRecord && (
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden shadow-xs">
            {/* Top Bar of Record */}
            <div className="bg-gradient-to-r from-[#01403F] via-[#095E63] to-[#128B94] text-white p-6 sm:p-7 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-teal-200 uppercase tracking-wider mb-1">
                  <ShieldCheck className="w-4 h-4" />
                  <span>
                    {language === 'ar' ? searchedRecord.departmentAr : searchedRecord.departmentEn}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  {language === 'ar' ? searchedRecord.serviceNameAr : searchedRecord.serviceNameEn}
                </h3>
                <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-teal-100">
                  <span>
                    {language === 'ar' ? 'المتقدم:' : 'Applicant:'}{' '}
                    <strong className="text-white">{searchedRecord.applicantName}</strong>
                  </span>
                  {searchedRecord.companyName && (
                    <>
                      <span aria-hidden="true" className="text-teal-300">·</span>
                      <span>{searchedRecord.companyName}</span>
                    </>
                  )}
                  <span aria-hidden="true" className="text-teal-300">·</span>
                  <span className="font-mono bg-white/10 px-2 py-0.5 rounded text-white font-bold">
                    {searchedRecord.reference}
                  </span>
                </div>
              </div>

              {/* Status Badge & Officer */}
              <div className="text-left md:text-right">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/15 text-white border border-white/20 rounded-md text-xs font-bold">
                  <Clock className="w-3.5 h-3.5" />
                  <span>
                    {language === 'ar' ? 'المرحلة ' : 'Stage '}{searchedRecord.currentStage} / 4
                  </span>
                </div>
                <p className="mt-2 text-xs text-teal-100">
                  {language === 'ar' ? 'تاريخ التقديم:' : 'Submitted:'}{' '}
                  <span className="text-white font-medium">{searchedRecord.submissionDate}</span>
                </p>
              </div>
            </div>

            {/* Stages Progress Timeline */}
            <div className="p-6 sm:p-8 border-b border-slate-200 bg-white">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
                {searchedRecord.stages.map((stage, idx) => {
                  const isCompleted = stage.status === 'completed';
                  const isInProgress = stage.status === 'in_progress';

                  return (
                    <div key={idx} className="relative flex flex-col">
                      {/* Step Indicator */}
                      <div className="flex items-center gap-2 mb-2">
                        <div
                          className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                            isCompleted
                              ? 'bg-emerald-600 text-white'
                              : isInProgress
                              ? 'bg-[#128B94] text-white ring-2 ring-[#01403F]'
                              : 'bg-slate-200 text-slate-500'
                          }`}
                        >
                          {isCompleted ? <CheckCircle2 className="w-4 h-4" /> : idx + 1}
                        </div>

                        <span
                          className={`text-xs font-bold ${
                            isInProgress
                              ? 'text-[#128B94]'
                              : isCompleted
                              ? 'text-emerald-700'
                              : 'text-slate-400'
                          }`}
                        >
                          {isInProgress
                            ? (language === 'ar' ? 'قيد التنفيذ' : 'In Progress')
                            : isCompleted
                            ? (language === 'ar' ? 'مكتمل' : 'Completed')
                            : (language === 'ar' ? 'قيد الانتظار' : 'Pending')}
                        </span>
                      </div>

                      {/* Title */}
                      <h4
                        className={`text-sm font-bold ${
                          isInProgress || isCompleted ? 'text-slate-900' : 'text-slate-500'
                        }`}
                      >
                        {language === 'ar' ? stage.titleAr : stage.titleEn}
                      </h4>

                      {/* Date & Note */}
                      <p className="mt-1 text-xs text-slate-500 font-mono">
                        {stage.date}
                      </p>

                      {(stage.noteEn || stage.noteAr) && (
                        <p className="mt-2 text-xs text-slate-600 bg-slate-50 p-2.5 rounded border border-slate-200 leading-relaxed">
                          {language === 'ar' ? stage.noteAr : stage.noteEn}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Officer and Actions Footer */}
            <div className="p-6 sm:p-7 bg-slate-50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-teal-100/60 text-[#128B94] flex items-center justify-center">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 block">
                    {t.assignedOfficer}
                  </span>
                  <span className="text-sm font-bold text-slate-900">
                    {searchedRecord.officerName}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={handleDownload}
                  className="px-4 py-2.5 text-xs sm:text-sm font-bold text-slate-800 bg-white hover:bg-slate-100 rounded-md border border-slate-300 transition-colors flex items-center gap-2 cursor-pointer shadow-2xs"
                >
                  <Download className="w-4 h-4 text-[#128B94]" />
                  <span>
                    {downloadSuccess
                      ? (language === 'ar' ? 'تم تنزيل الإيصال بنجاح ✓' : 'Receipt Downloaded ✓')
                      : t.downloadSlip}
                  </span>
                </button>
              </div>
            </div>
          </div>
        )}

        {hasSearched && !searchedRecord && (
          <div className="p-8 text-center rounded-lg border border-dashed border-slate-300 bg-slate-50">
            <AlertCircle className="w-8 h-8 text-[#128B94] mx-auto mb-2" />
            <h4 className="text-base font-bold text-slate-900">
              {language === 'ar' ? 'لم يتم العثور على هذا الرقم المرجعي' : 'Reference Number Not Found'}
            </h4>
            <p className="mt-1 text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
              {language === 'ar'
                ? 'يرجى التأكد من كتابة الرقم كما هو في إيصال الخدمة (مثال: ESS-2026-88412) أو التواصل مع خدمة العملاء.'
                : 'Please verify the reference code as written on your official receipt, or contact our customer desk.'}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
