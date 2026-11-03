import React, { useState, useRef, useEffect } from 'react';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  RotateCcw,
  Sparkles,
  CheckCircle2,
  Building2,
  ShieldCheck,
  Video,
  Upload,
  Clock,
  Compass
} from 'lucide-react';
import { Language } from '../types';
import { mainBannerBgImg } from '../data/centerOriginalPhotos';

interface CenterVideoShowcaseProps {
  language: Language;
  onOpenBooking?: () => void;
  videoSrc?: string;
}

export const CenterVideoShowcase: React.FC<CenterVideoShowcaseProps> = ({
  language,
  onOpenBooking,
  videoSrc = '/assets/videos/center-tour.mp4',
}) => {
  const isAr = language === 'ar';
  const videoRef = useRef<HTMLVideoElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(15);
  const [currentVideoSrc, setCurrentVideoSrc] = useState(videoSrc);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Chapters / highlights in the walkthrough
  const chapters = [
    {
      time: 0,
      titleEn: 'Grand Reception',
      titleAr: 'الاستقبال الرئيسي',
      descEn: 'Smart queue & concierge',
      descAr: 'نظام إدارة الدور الذكي',
    },
    {
      time: 2.5,
      titleEn: 'Amer Department',
      titleAr: 'قسم آمر للجوازات',
      descEn: 'Residency & Golden Visa',
      descAr: 'الإقامة الذهبية والتأشيرات',
    },
    {
      time: 5.0,
      titleEn: 'Executive Hub',
      titleAr: 'مركز رجال الأعمال',
      descEn: 'DET & commercial licenses',
      descAr: 'تأسيس وتجديد رخص الشركات',
    },
    {
      time: 7.5,
      titleEn: 'VIP Majlis Lounge',
      titleAr: 'مجلس كبار الشخصيات VIP',
      descEn: 'Private bespoke processing',
      descAr: 'معاملات حصرية في خصوصية تامة',
    },
    {
      time: 10.0,
      titleEn: 'Medical Fitness (Salem)',
      titleAr: 'الفحص الطبي (سالم)',
      descEn: 'Co-located 2-hr express tests',
      descAr: 'فحص الإقامة الطبي خلال ساعتين',
    },
    {
      time: 12.5,
      titleEn: 'Fast Track Counters',
      titleAr: 'المسار السريع الفوري',
      descEn: 'Tasheel & notary typing',
      descAr: 'تسهيل والعدل والترجمة القانونية',
    },
  ];

  // Sync video time updates
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const cur = videoRef.current.currentTime;
      const dur = videoRef.current.duration || 15;
      setCurrentTime(cur);
      setProgress((cur / dur) * 100);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration || 15);
    }
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    setHasInteracted(true);
    if (videoRef.current.paused) {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const handleRestart = () => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = 0;
    videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
  };

  const handleSeek = (time: number) => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = time;
    if (videoRef.current.paused) {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const handleFullScreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  const handleLocalVideoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setCurrentVideoSrc(objectUrl);
      setShowUploadModal(false);
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.currentTime = 0;
          videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
        }
      }, 150);
    }
  };

  const formatSeconds = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <section className="relative py-16 sm:py-24 bg-gradient-to-b from-white via-[#F4F9FA] to-white border-t border-b border-slate-200/80 overflow-hidden">
      {/* Decorative ambient background accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#128B94]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#01403F]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#128B94]/10 border border-[#128B94]/20 text-[#128B94] text-xs sm:text-sm font-semibold mb-4">
            <Video className="w-4 h-4 text-[#128B94]" />
            <span>{isAr ? 'جولة مرئية تفاعلية' : 'Official Center Video Tour'}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#128B94] animate-ping" />
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1E2528] tracking-tight">
            {isAr ? (
              <>
                شاهد <span className="text-[#128B94]">مركز الكرامة للأعمال</span> وخدمات الإمارات في دبي
              </>
            ) : (
              <>
                Experience <span className="text-[#128B94]">Karama Business Center</span> & ESS in Action
              </>
            )}
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            {isAr
              ? 'تجوّل عبر مكاتبنا الرسمية المعتمدة: أقسام آمر، تسهيل، دائرة الاقتصاد والسياحة، الفحص الطبي السريع (سالم)، ومجلس كبار الشخصيات VIP في قلب دبي.'
              : 'Take a virtual walkthrough of our premier semi-government hub: Amer Center, Tasheel, DET Licensing, DHA Salem Medical Fitness, and luxury VIP Majlis.'}
          </p>
        </div>

        {/* Video Player Card */}
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-slate-900 border border-slate-700/60 group">
          {/* Main Video Element */}
          <div className="relative aspect-video w-full bg-black overflow-hidden flex items-center justify-center">
            <video
              ref={videoRef}
              src={currentVideoSrc}
              poster={mainBannerBgImg}
              playsInline
              muted={isMuted}
              loop
              autoPlay
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              onClick={togglePlay}
              className="w-full h-full object-cover cursor-pointer"
            />

            {/* Ambient vignette on video */}
            <div
              className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none transition-opacity duration-300 ${
                isPlaying ? 'opacity-30 group-hover:opacity-70' : 'opacity-80'
              }`}
            />

            {/* Center Big Play Button (shows when paused) */}
            {!isPlaying && (
              <button
                type="button"
                onClick={togglePlay}
                aria-label={isAr ? 'تشغيل الفيديو' : 'Play Video'}
                className="absolute z-20 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#128B94]/90 hover:bg-[#128B94] text-white flex items-center justify-center shadow-xl shadow-[#128B94]/40 hover:scale-105 transition-all duration-200 cursor-pointer border border-white/20"
              >
                <Play className="w-8 h-8 sm:w-10 sm:h-10 ml-1 rtl:ml-0 rtl:mr-1 fill-current" />
              </button>
            )}

            {/* Top Badges */}
            <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  1080p Full HD
                </span>
                <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#128B94]/80 backdrop-blur-md text-white text-xs font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  {isAr ? 'مركز معتمد رسمياً' : 'Gov-Authorized Facility'}
                </span>
              </div>

              {/* Upload / Switch Video Button */}
              <button
                type="button"
                onClick={() => setShowUploadModal(true)}
                className="pointer-events-auto inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/20 text-white text-xs font-medium transition cursor-pointer"
                title={isAr ? 'معاينة فيديو آخر' : 'Preview / Change Video'}
              >
                <Upload className="w-3.5 h-3.5" />
                <span>{isAr ? 'تغيير الفيديو' : 'Upload / Switch Video'}</span>
              </button>
            </div>

            {/* Bottom Controls Bar */}
            <div className="absolute bottom-0 inset-x-0 z-20 p-4 sm:p-6 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
              {/* Progress Slider */}
              <div className="relative mb-3">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={progress}
                  onChange={(e) => {
                    const targetPercent = parseFloat(e.target.value);
                    const targetSec = (targetPercent / 100) * duration;
                    handleSeek(targetSec);
                  }}
                  aria-label="Video timeline"
                  className="w-full h-1.5 bg-white/25 rounded-lg appearance-none cursor-pointer accent-[#128B94] focus:outline-none"
                />
              </div>

              {/* Control buttons & time */}
              <div className="flex items-center justify-between text-white text-xs sm:text-sm">
                <div className="flex items-center gap-3 sm:gap-4">
                  {/* Play/Pause */}
                  <button
                    type="button"
                    onClick={togglePlay}
                    aria-label={isPlaying ? 'Pause' : 'Play'}
                    className="p-1.5 sm:p-2 rounded-lg bg-white/10 hover:bg-white/20 transition cursor-pointer text-white"
                  >
                    {isPlaying ? <Pause className="w-4 h-4 sm:w-5 sm:h-5" /> : <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />}
                  </button>

                  {/* Restart */}
                  <button
                    type="button"
                    onClick={handleRestart}
                    aria-label="Restart"
                    className="p-1.5 sm:p-2 rounded-lg bg-white/10 hover:bg-white/20 transition cursor-pointer text-white hidden sm:inline-flex"
                  >
                    <RotateCcw className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>

                  {/* Mute/Unmute */}
                  <button
                    type="button"
                    onClick={toggleMute}
                    aria-label={isMuted ? 'Unmute' : 'Mute'}
                    className="p-1.5 sm:p-2 rounded-lg bg-white/10 hover:bg-white/20 transition cursor-pointer text-white flex items-center gap-1.5"
                  >
                    {isMuted ? <VolumeX className="w-4 h-4 sm:w-5 sm:h-5 text-amber-300" /> : <Volume2 className="w-4 h-4 sm:w-5 sm:h-5" />}
                    <span className="text-[11px] font-medium hidden md:inline">
                      {isMuted ? (isAr ? 'صامت' : 'Muted') : (isAr ? 'الصوت مفعّل' : 'Sound On')}
                    </span>
                  </button>

                  {/* Timestamp */}
                  <div className="text-white/80 tabular-nums text-xs">
                    <span>{formatSeconds(currentTime)}</span>
                    <span className="mx-1 text-white/40">/</span>
                    <span>{formatSeconds(duration)}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 sm:gap-3">
                  {onOpenBooking && (
                    <button
                      type="button"
                      onClick={onOpenBooking}
                      className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#128B94] hover:bg-[#0e6f77] text-white text-xs font-semibold shadow-md transition cursor-pointer"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{isAr ? 'احجز موعداً الآن' : 'Book an Appointment'}</span>
                    </button>
                  )}

                  {/* Fullscreen */}
                  <button
                    type="button"
                    onClick={handleFullScreen}
                    aria-label="Fullscreen"
                    className="p-1.5 sm:p-2 rounded-lg bg-white/10 hover:bg-white/20 transition cursor-pointer text-white"
                  >
                    <Maximize2 className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Chapters / Timeline Scrubber Bar below video */}
          <div className="bg-slate-950/95 border-t border-slate-800 p-3 sm:p-4">
            <div className="flex items-center gap-2 mb-2 text-xs font-semibold text-slate-400">
              <Compass className="w-3.5 h-3.5 text-[#128B94]" />
              <span>{isAr ? 'محطات الجولة السريعة (انقر للانتقال):' : 'Key Departments Tour (Click to jump):'}</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
              {chapters.map((ch, idx) => {
                const isActive = currentTime >= ch.time && (idx === chapters.length - 1 || currentTime < chapters[idx + 1].time);
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSeek(ch.time)}
                    className={`text-left rtl:text-right p-2.5 rounded-xl border text-xs transition cursor-pointer ${
                      isActive
                        ? 'bg-[#128B94]/20 border-[#128B94] text-white'
                        : 'bg-slate-900/60 border-slate-800/80 hover:bg-slate-800/80 text-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-[11px] truncate">{isAr ? ch.titleAr : ch.titleEn}</span>
                      <span className="text-[10px] text-slate-400 tabular-nums">{formatSeconds(ch.time)}</span>
                    </div>
                    <div className="text-[10px] text-slate-400 truncate">{isAr ? ch.descAr : ch.descEn}</div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Video Upload Helper Modal */}
        {showUploadModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
            <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl p-6 border border-slate-200">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-lg bg-[#128B94]/10 text-[#128B94] flex items-center justify-center">
                    <Video className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">
                      {isAr ? 'رفع واختيار فيديو جديد' : 'Upload or Preview Video'}
                    </h3>
                    <p className="text-xs text-slate-500">
                      {isAr ? 'مجلد /public/assets/videos/' : 'Folder: /public/assets/videos/'}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setShowUploadModal(false)}
                  className="text-slate-400 hover:text-slate-600 text-sm font-bold p-1 cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-600">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <p className="font-semibold text-slate-800 mb-1">
                    {isAr ? 'كيفية رفع الفيديو الدائم إلى الموقع:' : 'Permanent Video Upload:'}
                  </p>
                  <ol className="list-decimal list-inside space-y-1 text-slate-600 text-xs">
                    <li>
                      {isAr
                        ? 'ضع ملف الفيديو الخاص بك داخل مجلد public/assets/videos/'
                        : 'Save your MP4 video file inside public/assets/videos/'}
                    </li>
                    <li>
                      {isAr
                        ? 'سمّ الملف center-tour.mp4 ليظهر تلقائياً كفيديو رئيسي'
                        : 'Name it "center-tour.mp4" to appear as the primary showcase video'}
                    </li>
                  </ol>
                </div>

                {/* Instant Local Preview Upload */}
                <div className="border-2 border-dashed border-slate-300 hover:border-[#128B94] rounded-xl p-4 text-center cursor-pointer transition bg-slate-50/50">
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="video/mp4,video/webm,video/quicktime"
                    onChange={handleLocalVideoUpload}
                    className="hidden"
                    id="local-video-input"
                  />
                  <label htmlFor="local-video-input" className="cursor-pointer block">
                    <Upload className="w-8 h-8 text-[#128B94] mx-auto mb-2" />
                    <span className="block font-semibold text-slate-800">
                      {isAr ? 'اختر ملف فيديو لتجربته فوراً' : 'Select a local video file to preview live'}
                    </span>
                    <span className="text-[11px] text-slate-500 block mt-0.5">
                      MP4, WebM or MOV (H.264 recommended)
                    </span>
                  </label>
                </div>

                {/* Reset to default */}
                <div className="flex items-center justify-between pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setCurrentVideoSrc('/assets/videos/center-tour.mp4');
                      setShowUploadModal(false);
                    }}
                    className="text-xs text-[#128B94] hover:underline font-semibold cursor-pointer"
                  >
                    {isAr ? 'استعادة الفيديو الافتراضي' : 'Reset to default center tour'}
                  </button>

                  <button
                    type="button"
                    onClick={() => setShowUploadModal(false)}
                    className="px-4 py-2 rounded-lg bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition cursor-pointer"
                  >
                    {isAr ? 'إغلاق' : 'Close'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
