import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Smartphone, 
  LayoutDashboard, 
  Sparkles, 
  MapPin, 
  Zap, 
  CreditCard, 
  ShieldCheck, 
  ArrowRight, 
  Bell, 
  BarChart3, 
  QrCode, 
  CalendarCheck, 
  ChevronRight,
  Maximize2,
  X
} from 'lucide-react';

import mockupMapImg from '../../assets/images/iphone17_map.webp';
import mockupHomeImg from '../../assets/images/iphone17_home.webp';
import mockupDetailImg from '../../assets/images/iphone17_detail.webp';
import mockupCalendarImg from '../../assets/images/iphone17_calendar.webp';

interface FeatureNode {
  id: string;
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  title: string;
  desc: string;
  badge: string;
  ctaText: string;
  stats: Array<{ value: string; label: string }>;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  associatedScreen: 'map' | 'home' | 'detail' | 'calendar';
}

interface FeatureCardProps {
  node: FeatureNode;
  delay?: number;
  xOffset?: number;
  isHovered?: boolean;
  onHover: () => void;
  onLeave?: () => void;
}

const FeatureCard = ({ node, delay = 0, xOffset = -20, isHovered = false, onHover, onLeave }: FeatureCardProps) => {
  const IconComp = node.icon;
  return (
    <motion.div
      initial={{ opacity: 0, x: xOffset }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className={`group relative bg-white rounded-2xl p-5 sm:p-5.5 transition-all duration-300 shadow-sm ${
        isHovered
          ? 'border-2 border-[#00A859] shadow-xl shadow-[#00A859]/15 -translate-y-1 bg-emerald-50/10'
          : 'border border-slate-200 hover:border-[#00A859]/60 hover:shadow-md'
      }`}
    >
      <div className="flex items-center justify-between mb-2.5">
        <div className="flex items-center gap-2">
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 ${
            isHovered ? 'bg-[#00A859] text-white shadow-md shadow-[#00A859]/30 scale-105' : 'bg-[#00A859]/10 text-[#00A859]'
          }`}>
            <IconComp size={17} />
          </div>
          <span className="text-xs font-black uppercase tracking-wider text-[#00A859]">
            {node.badge}
          </span>
        </div>
        {/* Active Pulse Pill */}
        {isHovered && (
          <span className="inline-flex items-center gap-1.5 text-[10px] font-black text-[#00A859] bg-[#00A859]/10 px-2.5 py-0.5 rounded-full border border-[#00A859]/25 animate-pulse">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00A859]" />
            সক্রিয়
          </span>
        )}
      </div>

      <h3 className="text-base sm:text-lg font-black text-slate-900 mb-1.5 tracking-tight leading-snug">
        {node.title}
      </h3>

      <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-3 font-normal">
        {node.desc}
      </p>

      {/* Pill CTA Button */}
      <button
        onClick={onHover}
        className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full font-bold text-xs transition-all duration-200 shadow-sm mb-3.5 cursor-pointer ${
          isHovered 
            ? 'bg-[#00A859] text-white shadow-md shadow-[#00A859]/30 scale-[1.02]' 
            : 'bg-[#00A859] hover:bg-[#008f4c] text-white shadow-[#00A859]/20 hover:scale-[1.02]'
        } active:scale-95`}
      >
        <span>{node.ctaText}</span>
        <ArrowRight size={13} />
      </button>

      {/* Percentage Metric Stats Grid */}
      <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-100">
        {node.stats.map((s, idx) => (
          <div key={idx}>
            <div className={`text-base sm:text-xl font-black tracking-tight leading-none mb-1 transition-colors duration-200 ${
              isHovered ? 'text-[#00A859]' : 'text-slate-900'
            }`}>
              {s.value}
            </div>
            <div className="text-xs text-slate-600 font-medium leading-snug">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export const HowItWorks = () => {
  const [activeRole, setActiveRole] = useState<'player' | 'owner'>('owner');
  const [activeScreen, setActiveScreen] = useState<'map' | 'home' | 'detail' | 'calendar'>('calendar');
  const [activeModalImg, setActiveModalImg] = useState<string | null>(null);
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);

  // Player role feature nodes
  const playerNodes: FeatureNode[] = [
    {
      id: 'p-1',
      position: 'top-left',
      title: 'লাইভ ম্যাপে টার্ফ ডিসকভারি',
      desc: 'আপনার নিকটস্থ সকল ফুটবল ও ক্রিকেট টার্ফ রিয়েল-টাইম জিপিএস ম্যাপে সরাসরি দূরত্ব, রেট ও পিচ সাইজ সহ এক নজরে খুঁজে নিন।',
      badge: 'Find My Turf',
      ctaText: 'ম্যাপ ট্র্যাকিং দেখুন',
      associatedScreen: 'map',
      icon: MapPin,
      stats: [
        { value: '৯৮%', label: '৫ মিনিটে পছন্দের মাঠ নির্বাচন' },
        { value: '১০০+', label: 'ভেরিফাইড টার্ফ লোকেশন' }
      ]
    },
    {
      id: 'p-2',
      position: 'top-right',
      title: 'জিরো ডাবল-বুকিং ও ইনস্ট্যান্ট লক',
      desc: 'স্লট নির্বাচন করামাত্রই তা ১০ সেকেন্ডে সেন্ট্রাল ক্লাউডে অটো-লক হয়ে যায়। ফলে কোনো কল কনফ্লিক্ট বা ডাবল বুকিংয়ের সুযোগ নেই।',
      badge: 'Instant Slot Lock',
      ctaText: 'স্লট লকিং প্রযুক্তি',
      associatedScreen: 'detail',
      icon: Zap,
      stats: [
        { value: '৯৯.৯%', label: 'রিয়েল-টাইম ক্লাউড সিঙ্ক' },
        { value: '০%', label: 'ডাবল-বুকিং এর ঝুঁকি' }
      ]
    },
    {
      id: 'p-3',
      position: 'bottom-left',
      title: 'ডিজিটাল পেমেন্ট ও ইনস্ট্যান্ট টিকেট',
      desc: 'বিকাশ বা নগদে সরাসরি পেমেন্ট করুন এবং পেমেন্ট সম্পন্ন হলেই আপনার ডিজিটাল টিকেট অটোমেটিকভাবে পেয়ে যান। টিকেটটি টার্ফে গিয়ে সহজেই দেখিয়ে প্রবেশ করুন।',
      badge: 'Seamless Payment',
      ctaText: 'পেমেন্ট সুবিধা জানুন',
      associatedScreen: 'home',
      icon: CreditCard,
      stats: [
        { value: '১০ সে.', label: 'গড় পেমেন্ট ও বুকিং কনফার্মেশন' },
        { value: '১০০%', label: 'সিকিউর পেমেন্ট গেটওয়ে' }
      ]
    },
    {
      id: 'p-4',
      position: 'bottom-right',
      title: 'ঝামেলামুক্ত টার্ফ বুকিং',
      desc: 'আপনার টার্ফ বুকিং ঝামেলামুক্ত করুন! আমাদের TurfPlay-এর মাধ্যমে আপনি সহজেই আপনার কাছাকাছি পছন্দের টার্ফ খুব সহজেই বুক করে ফেলতে পারেন।',
      badge: 'Hassle-free Booking',
      ctaText: 'সহজ বুকিং দেখুন',
      associatedScreen: 'detail',
      icon: QrCode,
      stats: [
        { value: '৪.৮★', label: 'ভেরিফাইড প্লেয়ার সন্তুষ্টি' },
        { value: '৫০k+', label: 'সফল খেলা সম্পন্ন' }
      ]
    }
  ];

  // Turf Owner role feature nodes
  const ownerNodes: FeatureNode[] = [
    {
      id: 'o-1',
      position: 'top-left',
      title: 'ফোন কল ও অফলাইন বুকিং ৫ সেকেন্ডে লক',
      desc: 'ফোন বা হোয়াটসঅ্যাপে আসা বুকিং মাত্র ৫ সেকেন্ডে অফলাইন/ক্যাশ স্লটে লক করুন — খাতার চেয়েও দ্রুত এবং জিরো ডাবল-বুকিং নিশ্চয়তা!',
      badge: 'Instant Offline Lock',
      ctaText: 'ক্যালেন্ডার ও অফলাইন লক',
      associatedScreen: 'calendar',
      icon: CalendarCheck,
      stats: [
        { value: '৫ সে.', label: 'খাতার চেয়ে দ্রুত ক্যাশ স্লট লক' },
        { value: '০%', label: 'ডাবল-বুকিং বা কল কনফ্লিক্ট' }
      ]
    },
    {
      id: 'o-2',
      position: 'top-right',
      title: 'কম্পিউটার লাগবে না—১০০% মোবাইলেই ওনার মোড',
      desc: 'কোনো কম্পিউটার বা ল্যাপটপের প্রয়োজন নেই! আপনার হাতের সাধারণ স্মার্টফোনের TurfPlay অ্যাপ থেকেই এক ক্লিকে ওনার মোডে সম্পূর্ণ টার্ফ পরিচালনা করুন।',
      badge: '100% Smartphone Friendly',
      ctaText: 'মোবাইল ওনার মোড',
      associatedScreen: 'detail',
      icon: Smartphone,
      stats: [
        { value: '১০০%', label: 'স্মার্টফোনে ওনার কন্ট্রোল' },
        { value: '০ টাকা', label: 'আলাদা কম্পিউটার খরচ' }
      ]
    },
    {
      id: 'o-3',
      position: 'bottom-left',
      title: 'সরাসরি নিজস্ব একাউন্টে টাকা ও স্বচ্ছ দৈনিক অডিট',
      desc: 'অনলাইন পেমেন্টের টাকা সরাসরি আপনার নিজস্ব বিকাশ, নগদ বা ব্যাংক একাউন্টে জমা হয়। দিনশেষে ক্যাশ ও অনলাইনের নিখুঁত হিসাব রাত ১২টায় ক্লিয়ার পান।',
      badge: 'Direct Settlement & Audit',
      ctaText: 'স্বচ্ছ পেমেন্ট ব্যবস্থা',
      associatedScreen: 'home',
      icon: BarChart3,
      stats: [
        { value: '১০০%', label: 'স্বচ্ছ হিসাব ও কোনো লুকানো চার্জ নেই' },
        { value: '১ ক্লিক', label: 'দৈনিক ক্যাশ ও অনলাইন অডিট' }
      ]
    },
    {
      id: 'o-4',
      position: 'bottom-right',
      title: 'অফ-পিক স্লট বুকিং বৃদ্ধি ও নতুন কাস্টমার',
      desc: 'দিনের ফাঁকা সময়ে মাঠ অলস পড়ে থাকে? TurfPlay ডিসকভারি ফিচারে হাজারো স্থানীয় প্লেয়ারের কাছে আপনার মাঠকে প্রোমোট করে নিয়মিত ম্যাচ বুকিং ও আয় বাড়ান।',
      badge: 'More Bookings & Reach',
      ctaText: 'টার্ফ প্রবৃদ্ধি দেখুন',
      associatedScreen: 'map',
      icon: ShieldCheck,
      stats: [
        { value: '৩x', label: 'অফ-পিক স্লট বুকিং বৃদ্ধি' },
        { value: '১০০+', label: 'বিশ্বস্ত টার্ফ পার্টনার' }
      ]
    }
  ];

  const currentNodes = activeRole === 'player' ? playerNodes : ownerNodes;

  // Active node determination based on hover or current active screen
  const activeNodePos = (hoveredCardId ? currentNodes.find(n => n.id === hoveredCardId)?.position : null) ||
    (currentNodes.find(n => n.associatedScreen === activeScreen)?.position) ||
    'top-left';

  const isTLActive = activeNodePos === 'top-left';
  const isTRActive = activeNodePos === 'top-right';
  const isBLActive = activeNodePos === 'bottom-left';
  const isBRActive = activeNodePos === 'bottom-right';

  // Selected phone image based on active screen
  const getScreenImage = () => {
    switch (activeScreen) {
      case 'calendar':
        return mockupCalendarImg;
      case 'map':
        return mockupMapImg;
      case 'detail':
        return mockupDetailImg;
      case 'home':
      default:
        return mockupHomeImg;
    }
  };

  return (
    <section 
      id="how-it-works" 
      className="relative py-14 lg:py-20 bg-[#F9FBFA] text-slate-900 overflow-hidden selection:bg-[#00A859] selection:text-white border-y border-slate-100"
    >
      {/* ── CLEAN SOFT BACKGROUND ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-emerald-500/5 blur-[160px] rounded-full" />
      </div>

      <div className="relative z-10 container-fluid">

        {/* ── SECTION HEADER ── */}
        <div className="text-center max-w-3xl mx-auto mb-8 lg:mb-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#00A859]/10 border border-[#00A859]/20 text-[#00A859] font-extrabold text-xs uppercase tracking-[0.2em] mb-3 shadow-sm"
          >
            <Sparkles size={13} className="animate-pulse" />
            <span>HOW TURFPLAY WORKS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-3 leading-tight"
          >
            <span className="text-[#00A859] font-serif italic lowercase font-normal">TurfPlay</span> কীভাবে কাজ করে?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-slate-700 text-sm sm:text-base font-medium leading-relaxed max-w-xl mx-auto"
          >
            সহজ বুকিং, রিয়েল-টাইম অটোমেশন এবং জিরো ডাবল-বুকিং নিশ্চয়তার আধুনিক স্পোর্টস প্ল্যাটফর্ম।
          </motion.p>

          {/* ── ROLE SWITCHER ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mt-5 inline-flex items-center p-1.5 rounded-full bg-white border border-slate-200 shadow-sm max-w-full overflow-x-auto gap-1"
          >
            <button
              onClick={() => {
                setActiveRole('owner');
                setActiveScreen('calendar');
              }}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-black text-xs sm:text-sm transition-all duration-200 cursor-pointer shrink-0 ${
                activeRole === 'owner'
                  ? 'bg-[#00A859] text-white shadow-md shadow-[#00A859]/30 scale-[1.02]'
                  : 'text-slate-700 hover:text-slate-950 font-bold'
              }`}
            >
              <LayoutDashboard size={15} className="shrink-0" />
              <span>Turf Owner</span>
            </button>

            <button
              onClick={() => {
                setActiveRole('player');
                setActiveScreen('map');
              }}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-black text-xs sm:text-sm transition-all duration-200 cursor-pointer shrink-0 ${
                activeRole === 'player'
                  ? 'bg-[#00A859] text-white shadow-md shadow-[#00A859]/30 scale-[1.02]'
                  : 'text-slate-700 hover:text-slate-950 font-bold'
              }`}
            >
              <Smartphone size={15} className="shrink-0" />
              <span>Player</span>
            </button>
          </motion.div>

          {/* ── REASSURANCE BANNER FOR TURF OWNERS (NO COMPUTER NEEDED) ── */}
          <AnimatePresence mode="wait">
            {activeRole === 'owner' && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="mt-5 max-w-2xl mx-auto p-4 sm:p-5 rounded-2xl bg-white border-2 border-[#00A859]/30 text-slate-800 shadow-md flex items-center gap-3.5 text-left"
              >
                <div className="w-12 h-12 rounded-xl bg-[#00A859] text-white flex items-center justify-center shrink-0 shadow-md shadow-[#00A859]/25 text-2xl">
                  📱
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <span className="text-sm sm:text-base font-black text-slate-900">
                      টার্ফ চালাতে কোনো কম্পিউটার বা ল্যাপটপের প্রয়োজন নেই!
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#00A859] text-white text-[10px] font-black uppercase tracking-wider shadow-xs">
                      ১০০% মোবাইলে মালিক মোড
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                    আপনার হাতের সাধারণ স্মার্টফোনের <strong>TurfPlay অ্যাপ</strong> থেকেই এক ক্লিকে <em>'মালিক মোড'</em>-এ সুইচ করে মাঠের স্লট, অফলাইন ক্যাশ বুকিং ও আয়-ব্যয় পরিচালনা করুন।
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ── MAIN SHOWCASE CONTAINER ── */}
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-center relative z-10">

            {/* ── LEFT COLUMN (COMPACT SPACING) ── */}
            <div className="lg:col-span-4 flex flex-col justify-center space-y-4 lg:space-y-5">
              
              {/* NODE 1: TOP LEFT */}
              {currentNodes[0] && (
                <FeatureCard
                  node={currentNodes[0]}
                  delay={0}
                  xOffset={-20}
                  isHovered={isTLActive}
                  onHover={() => {
                    setActiveScreen(currentNodes[0].associatedScreen);
                    setHoveredCardId(currentNodes[0].id);
                  }}
                  onLeave={() => setHoveredCardId(null)}
                />
              )}

              {/* NODE 3: BOTTOM LEFT */}
              {currentNodes[2] && (
                <FeatureCard
                  node={currentNodes[2]}
                  delay={0.15}
                  xOffset={-20}
                  isHovered={isBLActive}
                  onHover={() => {
                    setActiveScreen(currentNodes[2].associatedScreen);
                    setHoveredCardId(currentNodes[2].id);
                  }}
                  onLeave={() => setHoveredCardId(null)}
                />
              )}

            </div>

            {/* ── CENTER COLUMN: COMPACT PHONE FRAME (FOCAL POINT) ── */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center relative py-2">
              
              {/* Outer halo glow ring behind phone */}
              <div className="absolute w-[220px] sm:w-[250px] h-[480px] rounded-[44px] bg-gradient-to-b from-[#00A859]/15 via-[#00A859]/5 to-transparent blur-2xl pointer-events-none -z-0" />

              {/* Floating Animated Phone Wrapper */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative z-10 flex flex-col items-center"
              >
                {/* Compact Phone Frame */}
                <div className="relative group cursor-pointer" onClick={() => setActiveModalImg(getScreenImage())}>
                  <img
                    src={getScreenImage()}
                    alt="TurfPlay App Screen"
                    className="w-[210px] sm:w-[235px] lg:w-[250px] h-auto object-contain drop-shadow-[0_20px_45px_rgba(0,168,89,0.18)] drop-shadow-[0_10px_20px_rgba(0,0,0,0.1)] group-hover:scale-[1.02] transition-transform duration-300"
                  />

                  {/* Hover Zoom Prompt Badge */}
                  <div className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-md text-[#00A859] p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-sm">
                    <Maximize2 size={13} />
                  </div>
                </div>

                {/* ── TABS UNDER PHONE ── */}
                <div className="mt-4 flex items-center gap-1.5 bg-white p-1.5 rounded-full border border-slate-200 shadow-sm">
                  {activeRole === 'player' ? (
                    <>
                      <button
                        onClick={() => setActiveScreen('map')}
                        className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                          activeScreen === 'map'
                            ? 'bg-[#00A859] text-white shadow-sm shadow-[#00A859]/30'
                            : 'text-slate-700 hover:text-slate-900'
                        }`}
                      >
                        লাইভ ম্যাপ
                      </button>
                      <button
                        onClick={() => setActiveScreen('home')}
                        className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                          activeScreen === 'home'
                            ? 'bg-[#00A859] text-white shadow-sm shadow-[#00A859]/30'
                            : 'text-slate-700 hover:text-slate-900'
                        }`}
                      >
                        হোম স্ক্রিন
                      </button>
                      <button
                        onClick={() => setActiveScreen('detail')}
                        className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                          activeScreen === 'detail'
                            ? 'bg-[#00A859] text-white shadow-sm shadow-[#00A859]/30'
                            : 'text-slate-700 hover:text-slate-900'
                        }`}
                      >
                        টার্ফ ডিটেইলস
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => setActiveScreen('calendar')}
                        className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                          activeScreen === 'calendar'
                            ? 'bg-[#00A859] text-white shadow-sm shadow-[#00A859]/30'
                            : 'text-slate-700 hover:text-slate-900'
                        }`}
                      >
                        স্মার্ট ক্যালেন্ডার
                      </button>
                      <button
                        onClick={() => setActiveScreen('home')}
                        className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                          activeScreen === 'home'
                            ? 'bg-[#00A859] text-white shadow-sm shadow-[#00A859]/30'
                            : 'text-slate-700 hover:text-slate-900'
                        }`}
                      >
                        টার্ফ ড্যাশবোর্ড
                      </button>
                      <button
                        onClick={() => setActiveScreen('detail')}
                        className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                          activeScreen === 'detail'
                            ? 'bg-[#00A859] text-white shadow-sm shadow-[#00A859]/30'
                            : 'text-slate-700 hover:text-slate-900'
                        }`}
                      >
                        স্লট ডিটেইলস
                      </button>
                    </>
                  )}
                </div>
              </motion.div>
            </div>

            {/* ── RIGHT COLUMN (COMPACT SPACING) ── */}
            <div className="lg:col-span-4 flex flex-col justify-center space-y-4 lg:space-y-5">
              
              {/* NODE 2: TOP RIGHT */}
              {currentNodes[1] && (
                <FeatureCard
                  node={currentNodes[1]}
                  delay={0.1}
                  xOffset={20}
                  isHovered={isTRActive}
                  onHover={() => {
                    setActiveScreen(currentNodes[1].associatedScreen);
                    setHoveredCardId(currentNodes[1].id);
                  }}
                  onLeave={() => setHoveredCardId(null)}
                />
              )}

              {/* NODE 4: BOTTOM RIGHT */}
              {currentNodes[3] && (
                <FeatureCard
                  node={currentNodes[3]}
                  delay={0.25}
                  xOffset={20}
                  isHovered={isBRActive}
                  onHover={() => {
                    setActiveScreen(currentNodes[3].associatedScreen);
                    setHoveredCardId(currentNodes[3].id);
                  }}
                  onLeave={() => setHoveredCardId(null)}
                />
              )}

            </div>

          </div>

        </div>

        {/* ── VISUAL COMPARISON: KHATA-KOLOM VS TURFPLAY (TURF OWNER FOCUS) ── */}
        <AnimatePresence>
          {activeRole === 'owner' && (
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="mt-8 sm:mt-10 bg-white rounded-3xl p-5 sm:p-7 md:p-8 border border-slate-200 shadow-xl relative overflow-hidden"
            >
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-rose-500 via-amber-400 to-[#00A859]" />

              <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-[10px] font-extrabold uppercase tracking-widest border border-slate-200 mb-2">
                  বাস্তব তুলনা
                </span>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                  সনাতন খাতা-কলম পদ্ধতি <span className="text-slate-400 font-normal">VS</span> <span className="text-[#00A859] font-serif italic">TurfPlay স্মার্ট সিস্টেম</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1">
                  কেন আধুনিক টার্ফ মালিকরা খাতা ছেড়ে TurfPlay অ্যাপে সুইচ করছেন
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {/* ❌ Old Khata Method */}
                <div className="p-5 sm:p-6 rounded-2xl bg-rose-50/70 border border-rose-200 space-y-3.5">
                  <div className="flex items-center justify-between pb-3 border-b border-rose-200/80">
                    <div className="flex items-center gap-2.5">
                      <span className="w-8 h-8 rounded-xl bg-rose-500 text-white flex items-center justify-center font-black text-sm shadow-sm">
                        ✕
                      </span>
                      <div>
                        <h4 className="text-sm sm:text-base font-black text-rose-950">আগের খাতা-কলম পদ্ধতি</h4>
                        <p className="text-[11px] text-rose-700 font-semibold">ঝামেলা, ভুল ও ডাবল-বুকিংয়ের ভয়</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-black uppercase text-rose-700 bg-rose-200/80 px-2.5 py-0.5 rounded-full">
                      ঝুঁকিপূর্ণ
                    </span>
                  </div>

                  <ul className="space-y-3 text-xs sm:text-sm text-rose-950 font-medium">
                    <li className="flex items-start gap-2.5">
                      <span className="text-rose-500 mt-0.5 shrink-0 font-black">❌</span>
                      <span><strong>ফোন কল মিস হওয়া:</strong> খেলা চলাকালীন বা ব্যস্ততায় কল ধরতে না পারলে কাস্টমার অন্য টার্ফে চলে যায়।</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-rose-500 mt-0.5 shrink-0 font-black">❌</span>
                      <span><strong>ডাবল-বুকিংয়ের অপ্রীতিকর ঝগড়া:</strong> খাতায় লিখে রাখতে ভুলে গেলে একই সময়ে মাঠে ২ দল চলে আসার চরম বিড়ম্বনা।</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-rose-500 mt-0.5 shrink-0 font-black">❌</span>
                      <span><strong>ক্যাশ ও বাকির গরমিল:</strong> কে কত টাকা দিল বা কার বাকি আছে তা ছেঁড়া পাতায় গুলিয়ে ক্যাশ মেলানো অসম্ভব হয়ে ওঠে।</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-rose-500 mt-0.5 shrink-0 font-black">❌</span>
                      <span><strong>রাতে হিসাব মেলানোর ক্লান্তি:</strong> দিনশেষে খাতা আর ক্যালকুলেটর নিয়ে বসে ঘণ্টার পর ঘণ্টা হিসাব মেলানোর টেনশন।</span>
                    </li>
                  </ul>
                </div>

                {/* ✅ TurfPlay Smart Method */}
                <div className="p-5 sm:p-6 rounded-2xl bg-emerald-50/80 border-2 border-[#00A859] space-y-3.5 shadow-md shadow-[#00A859]/10 relative">
                  <div className="flex items-center justify-between pb-3 border-b border-emerald-200">
                    <div className="flex items-center gap-2.5">
                      <span className="w-8 h-8 rounded-xl bg-[#00A859] text-white flex items-center justify-center font-black text-sm shadow-sm shadow-[#00A859]/30">
                        ✓
                      </span>
                      <div>
                        <h4 className="text-sm sm:text-base font-black text-emerald-950">TurfPlay স্মার্ট ডিজিটাল পদ্ধতি</h4>
                        <p className="text-[11px] text-[#00A859] font-bold">১০০% অটোমেটেড ও টেনশনমুক্ত</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-black uppercase text-white bg-[#00A859] px-2.5 py-0.5 rounded-full shadow-xs">
                      ১০০% নির্ভরযোগ্য
                    </span>
                  </div>

                  <ul className="space-y-3 text-xs sm:text-sm text-emerald-950 font-medium">
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#00A859] mt-0.5 shrink-0 font-black">✅</span>
                      <span><strong>৫ সেকেন্ডে অফলাইন স্লট লক:</strong> ফোনে বা হোয়াটসঅ্যাপে আসা অফলাইন বুকিং খাতার চেয়ে দ্রুত ৫ সেকেন্ডে ক্যাশ স্লটে লক করুন।</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#00A859] mt-0.5 shrink-0 font-black">✅</span>
                      <span><strong>জিরো ডাবল-বুকিং গ্যারান্টি:</strong> স্লট সিলেক্ট করামাত্র সেন্ট্রাল ক্লাউডে অটো-লক, ফলে একই সময়ে দুজন বুক করার কোনো সুযোগ নেই।</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#00A859] mt-0.5 shrink-0 font-black">✅</span>
                      <span><strong>সরাসরি নিজস্ব একাউন্টে টাকা:</strong> অনলাইন পেমেন্টের টাকা সরাসরি আপনার নিজস্ব বিকাশ/নগদে জমা, সম্পূর্ণ স্বচ্ছ হিসাব।</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#00A859] mt-0.5 shrink-0 font-black">✅</span>
                      <span><strong>মোবাইলেই দৈনিক স্বয়ংক্রিয় অডিট:</strong> কোনো কম্পিউটার লাগবে না, স্মার্টফোনেই ১ ক্লিকে লাভ-লোকসান ও দৈনিক ক্যাশ রিপোর্ট।</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      {/* ── IMAGE ZOOM FULLSCREEN MODAL ── */}
      <AnimatePresence>
        {activeModalImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveModalImg(null)}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 cursor-pointer"
          >
            <button
              onClick={() => setActiveModalImg(null)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            >
              <X size={20} />
            </button>
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={activeModalImg}
              alt="Zoomed Screen"
              className="max-h-[85vh] max-w-[90vw] object-contain drop-shadow-[0_20px_50px_rgba(0,168,89,0.3)]"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
