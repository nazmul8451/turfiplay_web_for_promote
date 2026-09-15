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
  onHover: () => void;
}

const FeatureCard = ({ node, delay = 0, xOffset = -20, onHover }: FeatureCardProps) => {
  const IconComp = node.icon;
  return (
    <motion.div
      initial={{ opacity: 0, x: xOffset }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      onMouseEnter={onHover}
      className="group relative bg-white hover:bg-slate-50/90 border border-slate-200 hover:border-[#00A859] rounded-2xl p-4 sm:p-4.5 transition-all duration-300 shadow-md shadow-slate-200/40 hover:shadow-xl hover:shadow-[#00A859]/10"
    >
      <div className="flex items-center gap-2 mb-2">
        <div className="w-7 h-7 rounded-lg bg-[#00A859]/10 text-[#00A859] flex items-center justify-center shrink-0">
          <IconComp size={15} />
        </div>
        <span className="text-[10px] font-bold uppercase tracking-wider text-[#00A859]">
          {node.badge}
        </span>
      </div>

      <h3 className="text-sm sm:text-base font-black text-slate-900 mb-1 tracking-tight">
        {node.title}
      </h3>

      <p className="text-slate-600 text-[11px] sm:text-xs leading-relaxed mb-2.5 font-medium line-clamp-3">
        {node.desc}
      </p>

      {/* Compact Pill CTA Button */}
      <button
        onClick={onHover}
        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00A859] hover:bg-[#008f4c] text-white font-bold text-[10px] sm:text-[11px] transition-all duration-200 shadow-sm shadow-[#00A859]/20 hover:scale-[1.02] active:scale-95 mb-2.5 cursor-pointer"
      >
        <span>{node.ctaText}</span>
        <ArrowRight size={12} />
      </button>

      {/* Compact Percentage Metric Stats Grid */}
      <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100">
        {node.stats.map((s, idx) => (
          <div key={idx}>
            <div className="text-base sm:text-lg font-black text-slate-900 tracking-tight leading-none mb-0.5">
              {s.value}
            </div>
            <div className="text-[9px] sm:text-[10px] text-slate-500 font-semibold leading-tight">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export const HowItWorks = () => {
  const [activeRole, setActiveRole] = useState<'player' | 'owner'>('player');
  const [activeScreen, setActiveScreen] = useState<'map' | 'home' | 'detail' | 'calendar'>('map');
  const [activeModalImg, setActiveModalImg] = useState<string | null>(null);

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
      title: 'স্মার্ট টার্ফ ক্যালেন্ডার ও স্লট কন্ট্রোল',
      desc: 'সব পিচ ও টাইমিং এক সেন্ট্রাল স্ক্রিনে নিয়ন্ত্রণ করুন। ফোন বা হোয়াটসঅ্যাপে আসা বুকিং ১০ সেকেন্ডে স্লট লক করে ফেলুন।',
      badge: 'Central Calendar',
      ctaText: 'ক্যালেন্ডার ড্যাশবোর্ড',
      associatedScreen: 'calendar',
      icon: CalendarCheck,
      stats: [
        { value: '১০ সে.', label: 'অফলাইন বুকিং অ্যাড টাইম' },
        { value: '২৪/৭', label: 'অটো স্লট মনিটরিং' }
      ]
    },
    {
      id: 'o-2',
      position: 'top-right',
      title: 'তাত্ক্ষণিক নোটিফিকেশন ও সতর্কতা',
      desc: 'প্লেয়ার কোনো স্লট বুক বা পেমেন্ট করামাত্রই ম্যানেজারের ফোনে রিয়েল-টাইম এসএমএস ও পুশ অ্যালার্ট পৌঁছে যায়।',
      badge: 'Real-time Alerts',
      ctaText: 'অ্যালার্ট সিস্টেম দেখুন',
      associatedScreen: 'detail',
      icon: Bell,
      stats: [
        { value: '১০০%', label: 'ইনস্ট্যান্ট বুকিং নোটিফিকেশন' },
        { value: '০ লেটেন্সি', label: 'সরাসরি অ্যাডমিনে সিঙ্ক' }
      ]
    },
    {
      id: 'o-3',
      position: 'bottom-left',
      title: 'দৈনিক আয় ও রেভিনিউ অ্যানালিটিক্স',
      desc: 'আজকের মোট আয়, ক্যাশ ও অনলাইন পেমেন্টের আলাদা নিখুঁত হিসাব এবং মাসিক প্রবৃদ্ধি স্পষ্ট ইন্টারেক্টিভ গ্রাফে দেখতে পাবেন।',
      badge: 'Revenue Tracker',
      ctaText: 'অ্যানালিটিক্স রিপোর্ট',
      associatedScreen: 'home',
      icon: BarChart3,
      stats: [
        { value: '৩৫%', label: 'গড় রাজস্ব বৃদ্ধি' },
        { value: '১ ক্লিক', label: 'দৈনিক এক্সেল রিপোর্ট' }
      ]
    },
    {
      id: 'o-4',
      position: 'bottom-right',
      title: 'ভেরিফাইড টার্ফ প্রোফাইল ও প্রচার',
      desc: 'হাজারো স্থানীয় খেলোয়াড়ের কাছে আপনার মাঠকে প্রোমোট করুন। ভেরিফাইড রিভিউয়ের মাধ্যমে নিয়মিত ম্যাচ বুকিং নিশ্চিত করুন।',
      badge: 'Growth & Reach',
      ctaText: 'পার্টনার সুবিধা',
      associatedScreen: 'map',
      icon: ShieldCheck,
      stats: [
        { value: '৩x', label: 'অফ-পিক স্লট বুকিং বৃদ্ধি' },
        { value: '১০০+', label: 'বিশ্বস্ত টার্ফ পার্টনার' }
      ]
    }
  ];

  const currentNodes = activeRole === 'player' ? playerNodes : ownerNodes;

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
      className="relative py-12 lg:py-16 bg-white text-slate-900 overflow-hidden selection:bg-[#00A859] selection:text-white bg-grid"
    >
      {/* ── BACKGROUND AMBIENT GLOWS ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Center ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00A859]/5 blur-[140px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12">

        {/* ── COMPACT SECTION HEADER ── */}
        <div className="text-center max-w-2xl mx-auto mb-6 lg:mb-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00A859]/10 border border-[#00A859]/20 text-[#00A859] font-extrabold text-[10px] sm:text-xs uppercase tracking-[0.2em] mb-2 shadow-sm"
          >
            <Sparkles size={12} className="animate-pulse" />
            <span>HOW TURFPLAY WORKS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-2 leading-tight"
          >
            <span className="text-[#00A859] font-serif italic lowercase font-normal">TurfPlay</span> কীভাবে কাজ করে?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed max-w-lg mx-auto line-clamp-2"
          >
            সহজ বুকিং, রিয়েল-টাইম অটোমেশন এবং জিরো ডাবল-বুকিং নিশ্চয়তার আধুনিক স্পোর্টস প্ল্যাটফর্ম।
          </motion.p>

          {/* ── COMPACT ROLE SWITCHER ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mt-4 inline-flex items-center p-1 rounded-full bg-slate-100 border border-slate-200 shadow-inner"
          >
            <button
              onClick={() => {
                setActiveRole('player');
                setActiveScreen('map');
              }}
              className={`flex items-center gap-2 px-5 py-1.5 rounded-full font-bold text-xs transition-all duration-200 cursor-pointer ${
                activeRole === 'player'
                  ? 'bg-[#00A859] text-white shadow-md shadow-[#00A859]/30 scale-[1.02]'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Smartphone size={14} />
              <span>খেলোয়াড়দের জার্নি</span>
            </button>

            <button
              onClick={() => {
                setActiveRole('owner');
                setActiveScreen('calendar');
              }}
              className={`flex items-center gap-2 px-5 py-1.5 rounded-full font-bold text-xs transition-all duration-200 cursor-pointer ${
                activeRole === 'owner'
                  ? 'bg-[#00A859] text-white shadow-md shadow-[#00A859]/30 scale-[1.02]'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <LayoutDashboard size={14} />
              <span>টার্ফ ওনারদের জার্নি</span>
            </button>
          </motion.div>
        </div>

        {/* ── MAIN SHOWCASE CONTAINER (COMPACT HEIGHT TO FIT SCREEN) ── */}
        <div className="relative">

          {/* ── SVG GLOWING CURVED PATH (SCALED FOR COMPACT HEIGHT) ── */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none -z-0">
            <svg 
              className="w-full h-full overflow-visible" 
              viewBox="0 0 1360 680" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <filter id="green-path-glow-compact" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="6" result="blur1" />
                  <feGaussianBlur stdDeviation="12" result="blur2" />
                  <feMerge>
                    <feMergeNode in="blur2" />
                    <feMergeNode in="blur1" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>

                <linearGradient id="brand-green-gradient-compact" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00A859" stopOpacity="0.35" />
                  <stop offset="30%" stopColor="#00A859" stopOpacity="1" />
                  <stop offset="50%" stopColor="#00C853" stopOpacity="0.9" />
                  <stop offset="70%" stopColor="#00A859" stopOpacity="1" />
                  <stop offset="100%" stopColor="#00A859" stopOpacity="0.4" />
                </linearGradient>
              </defs>

              {/* Background ambient blur track */}
              <path
                d="M 120 640 C 140 520, 320 490, 520 480 C 600 470, 680 430, 700 330 C 720 230, 670 190, 650 130 C 630 60, 760 80, 890 110 C 980 130, 1080 230, 1040 330 C 1000 430, 920 480, 800 520 C 700 560, 800 640, 900 660"
                stroke="#00A859"
                strokeWidth="10"
                strokeOpacity="0.12"
                strokeLinecap="round"
                filter="url(#green-path-glow-compact)"
              />

              {/* Main crisp glowing curved path */}
              <motion.path
                d="M 120 640 C 140 520, 320 490, 520 480 C 600 470, 680 430, 700 330 C 720 230, 670 190, 650 130 C 630 60, 760 80, 890 110 C 980 130, 1080 230, 1040 330 C 1000 430, 920 480, 800 520 C 700 560, 800 640, 900 660"
                stroke="url(#brand-green-gradient-compact)"
                strokeWidth="3.5"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
              />
            </svg>
          </div>

          {/* ── 3-COLUMN COMPACT GRID ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-center relative z-10">

            {/* ── LEFT COLUMN (COMPACT SPACING) ── */}
            <div className="lg:col-span-4 flex flex-col justify-center space-y-4 lg:space-y-5">
              
              {/* NODE 1: TOP LEFT */}
              {currentNodes[0] && (
                <FeatureCard
                  node={currentNodes[0]}
                  delay={0}
                  xOffset={-20}
                  onHover={() => setActiveScreen(currentNodes[0].associatedScreen)}
                />
              )}

              {/* NODE 3: BOTTOM LEFT */}
              {currentNodes[2] && (
                <FeatureCard
                  node={currentNodes[2]}
                  delay={0.15}
                  xOffset={-20}
                  onHover={() => setActiveScreen(currentNodes[2].associatedScreen)}
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

                {/* ── COMPACT TABS UNDER PHONE ── */}
                <div className="mt-3 flex items-center gap-1 bg-slate-100 p-1 rounded-full border border-slate-200 shadow-inner">
                  {activeRole === 'player' ? (
                    <>
                      <button
                        onClick={() => setActiveScreen('map')}
                        className={`px-3 py-1 rounded-full text-[10px] font-bold transition-all duration-200 cursor-pointer ${
                          activeScreen === 'map'
                            ? 'bg-[#00A859] text-white shadow-sm shadow-[#00A859]/30'
                            : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        লাইভ ম্যাপ
                      </button>
                      <button
                        onClick={() => setActiveScreen('home')}
                        className={`px-3 py-1 rounded-full text-[10px] font-bold transition-all duration-200 cursor-pointer ${
                          activeScreen === 'home'
                            ? 'bg-[#00A859] text-white shadow-sm shadow-[#00A859]/30'
                            : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        হোম স্ক্রিন
                      </button>
                      <button
                        onClick={() => setActiveScreen('detail')}
                        className={`px-3 py-1 rounded-full text-[10px] font-bold transition-all duration-200 cursor-pointer ${
                          activeScreen === 'detail'
                            ? 'bg-[#00A859] text-white shadow-sm shadow-[#00A859]/30'
                            : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        টার্ফ ডিটেইলস
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => setActiveScreen('calendar')}
                        className={`px-3 py-1 rounded-full text-[10px] font-bold transition-all duration-200 cursor-pointer ${
                          activeScreen === 'calendar'
                            ? 'bg-[#00A859] text-white shadow-sm shadow-[#00A859]/30'
                            : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        স্মার্ট ক্যালেন্ডার
                      </button>
                      <button
                        onClick={() => setActiveScreen('home')}
                        className={`px-3 py-1 rounded-full text-[10px] font-bold transition-all duration-200 cursor-pointer ${
                          activeScreen === 'home'
                            ? 'bg-[#00A859] text-white shadow-sm shadow-[#00A859]/30'
                            : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        টার্ফ ড্যাশবোর্ড
                      </button>
                      <button
                        onClick={() => setActiveScreen('detail')}
                        className={`px-3 py-1 rounded-full text-[10px] font-bold transition-all duration-200 cursor-pointer ${
                          activeScreen === 'detail'
                            ? 'bg-[#00A859] text-white shadow-sm shadow-[#00A859]/30'
                            : 'text-slate-600 hover:text-slate-900'
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
                  onHover={() => setActiveScreen(currentNodes[1].associatedScreen)}
                />
              )}

              {/* NODE 4: BOTTOM RIGHT */}
              {currentNodes[3] && (
                <FeatureCard
                  node={currentNodes[3]}
                  delay={0.25}
                  xOffset={20}
                  onHover={() => setActiveScreen(currentNodes[3].associatedScreen)}
                />
              )}

            </div>

          </div>

        </div>

        {/* ── COMPACT BOTTOM BANNER ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 lg:mt-12 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-[#00A859]/10 via-[#00A859]/5 to-white border border-[#00A859]/25 shadow-md flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div>
            <span className="text-[#00A859] font-mono text-[10px] font-bold uppercase tracking-widest block mb-0.5">
              TURFPLAY PARTNERSHIP
            </span>
            <h4 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
              আপনার কি নিজস্ব টার্ফ বা স্পোর্টস গ্রাউন্ড আছে?
            </h4>
            <p className="text-slate-600 text-xs mt-0.5 font-medium">
              মাত্র ৪টি ধাপে আপনার টার্ফ রেজিস্টার করুন এবং জিরো ডাবল-বুকিং নিশ্চয়তাসহ আয় বৃদ্ধি করুন।
            </p>
          </div>

          <a
            href="#partner"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#00A859] hover:bg-[#008f4c] text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md shadow-[#00A859]/20 hover:scale-105 active:scale-95"
          >
            <span>টার্ফ পার্টনার হন</span>
            <ChevronRight size={15} className="stroke-[3]" />
          </a>
        </motion.div>

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
