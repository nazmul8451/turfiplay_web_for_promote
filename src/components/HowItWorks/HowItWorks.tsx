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
      className={`group relative bg-white rounded-2xl p-4 sm:p-4.5 transition-all duration-300 shadow-md ${
        isHovered
          ? 'border-2 border-[#00A859] shadow-xl shadow-[#00A859]/20 -translate-y-1 bg-gradient-to-br from-white via-white to-[#00A859]/5 ring-4 ring-[#00A859]/10'
          : 'border border-slate-200 hover:border-[#00A859]/60 shadow-slate-200/40 hover:shadow-lg'
      }`}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 ${
            isHovered ? 'bg-[#00A859] text-white shadow-md shadow-[#00A859]/30 scale-105' : 'bg-[#00A859]/10 text-[#00A859]'
          }`}>
            <IconComp size={15} />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#00A859]">
            {node.badge}
          </span>
        </div>
        {/* Active Pulse Pill */}
        {isHovered && (
          <span className="inline-flex items-center gap-1 text-[9px] font-extrabold text-[#00A859] bg-[#00A859]/10 px-2 py-0.5 rounded-full border border-[#00A859]/20 animate-pulse">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00A859]" />
            LIVE LINK
          </span>
        )}
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
        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-bold text-[10px] sm:text-[11px] transition-all duration-200 shadow-sm mb-2.5 cursor-pointer ${
          isHovered 
            ? 'bg-[#00A859] text-white shadow-md shadow-[#00A859]/30 scale-[1.02]' 
            : 'bg-[#00A859] hover:bg-[#008f4c] text-white shadow-[#00A859]/20 hover:scale-[1.02]'
        } active:scale-95`}
      >
        <span>{node.ctaText}</span>
        <ArrowRight size={12} />
      </button>

      {/* Compact Percentage Metric Stats Grid */}
      <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100">
        {node.stats.map((s, idx) => (
          <div key={idx}>
            <div className={`text-base sm:text-lg font-black tracking-tight leading-none mb-0.5 transition-colors duration-200 ${
              isHovered ? 'text-[#00A859]' : 'text-slate-900'
            }`}>
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
      className="relative py-12 lg:py-16 bg-white text-slate-900 overflow-hidden selection:bg-[#00A859] selection:text-white bg-grid"
    >
      {/* ── BACKGROUND AMBIENT GLOWS ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Center ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00A859]/5 blur-[140px] rounded-full" />
      </div>

      <div className="relative z-10 container-fluid">

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
            className="mt-4 inline-flex items-center p-1 rounded-full bg-slate-100 border border-slate-200 shadow-inner max-w-full overflow-x-auto"
          >
            <button
              onClick={() => {
                setActiveRole('player');
                setActiveScreen('map');
              }}
              className={`flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-1.5 rounded-full font-bold text-[11px] sm:text-xs transition-all duration-200 cursor-pointer shrink-0 ${
                activeRole === 'player'
                  ? 'bg-[#00A859] text-white shadow-md shadow-[#00A859]/30 scale-[1.02]'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Smartphone size={13} className="shrink-0" />
              <span>খেলোয়াড়দের জার্নি</span>
            </button>

            <button
              onClick={() => {
                setActiveRole('owner');
                setActiveScreen('calendar');
              }}
              className={`flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-1.5 rounded-full font-bold text-[11px] sm:text-xs transition-all duration-200 cursor-pointer shrink-0 ${
                activeRole === 'owner'
                  ? 'bg-[#00A859] text-white shadow-md shadow-[#00A859]/30 scale-[1.02]'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <LayoutDashboard size={13} className="shrink-0" />
              <span>টার্ফ ওনারদের জার্নি</span>
            </button>
          </motion.div>
        </div>

        {/* ── MAIN SHOWCASE CONTAINER (COMPACT HEIGHT TO FIT SCREEN) ── */}
        <div className="relative">

          {/* ── ADVANCED INTERACTIVE CYBER-CIRCUIT & POLYLINE NETWORK ── */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none -z-0">
            <svg 
              className="w-full h-full overflow-visible" 
              viewBox="0 0 1360 680" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* High-intensity Ambient Glow Filter */}
                <filter id="circuit-neon-glow" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="4" result="blur1" />
                  <feGaussianBlur stdDeviation="12" result="blur2" />
                  <feMerge>
                    <feMergeNode in="blur2" />
                    <feMergeNode in="blur1" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>

                {/* Active Beam High-Energy Glow Filter */}
                <filter id="active-beam-glow" x="-40%" y="-40%" width="180%" height="180%">
                  <feGaussianBlur stdDeviation="5" result="blur1" />
                  <feGaussianBlur stdDeviation="14" result="blur2" />
                  <feMerge>
                    <feMergeNode in="blur2" />
                    <feMergeNode in="blur1" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>

                {/* Data Packet Core Glow Filter */}
                <filter id="packet-glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="3.5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>

                {/* Futuristic Emerald Laser Gradient */}
                <linearGradient id="cyber-green-stream" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00A859" stopOpacity="0.25" />
                  <stop offset="25%" stopColor="#00A859" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#00FF88" stopOpacity="1" />
                  <stop offset="75%" stopColor="#00C853" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#00A859" stopOpacity="0.3" />
                </linearGradient>

                {/* Supercharged Active Laser Gradient */}
                <linearGradient id="active-laser-stream" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#00A859" stopOpacity="0.4" />
                  <stop offset="30%" stopColor="#00FF88" stopOpacity="1" />
                  <stop offset="50%" stopColor="#FFFFFF" stopOpacity="1" />
                  <stop offset="70%" stopColor="#00FF88" stopOpacity="1" />
                  <stop offset="100%" stopColor="#00A859" stopOpacity="0.4" />
                </linearGradient>

                <linearGradient id="stream-pulse" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#00A859" stopOpacity="0.1" />
                  <stop offset="40%" stopColor="#00FF88" stopOpacity="0.9" />
                  <stop offset="60%" stopColor="#FFFFFF" stopOpacity="1" />
                  <stop offset="80%" stopColor="#00FF88" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#00A859" stopOpacity="0.1" />
                </linearGradient>
              </defs>

              {/* ── BACKGROUND TECH TELEMETRY LABELS ── */}
              <text x="680" y="45" textAnchor="middle" fill="#00A859" fillOpacity="0.35" fontSize="8.5" fontFamily="monospace" fontWeight="bold" letterSpacing="0.25em">
                [ TURFPLAY HYPER-SYNC ENGINE v2.4 // REAL-TIME MESH ]
              </text>
              <text x="680" y="635" textAnchor="middle" fill="#00A859" fillOpacity="0.3" fontSize="8" fontFamily="monospace" fontWeight="bold" letterSpacing="0.18em">
                LATENCY: &lt;10MS • 256-BIT ENCRYPTION • 0% CONFLICT GUARANTEE
              </text>

              {/* ── 1. MAIN BACKGROUND AMBIENT GLOW HIGHWAY ── */}
              <path
                d="M 100 650 C 140 520, 320 490, 500 470 C 600 460, 680 410, 700 320 C 720 220, 660 170, 640 120 C 620 50, 760 70, 890 100 C 1000 130, 1090 230, 1050 340 C 1010 440, 910 490, 790 520 C 690 550, 780 630, 900 660"
                stroke="#00A859"
                strokeWidth="16"
                strokeOpacity="0.08"
                strokeLinecap="round"
                filter="url(#circuit-neon-glow)"
              />

              {/* ── 2. PARALLEL CYBER MICRO-TRACE TRACK ── */}
              <path
                d="M 100 650 C 140 520, 320 490, 500 470 C 600 460, 680 410, 700 320 C 720 220, 660 170, 640 120 C 620 50, 760 70, 890 100 C 1000 130, 1090 230, 1050 340 C 1010 440, 910 490, 790 520 C 690 550, 780 630, 900 660"
                stroke="#00A859"
                strokeWidth="1"
                strokeOpacity="0.25"
                strokeDasharray="4 6"
              />

              {/* ── 3. BASELINE HIGHWAY GUIDE RAIL ── */}
              <path
                d="M 100 650 C 140 520, 320 490, 500 470 C 600 460, 680 410, 700 320 C 720 220, 660 170, 640 120 C 620 50, 760 70, 890 100 C 1000 130, 1090 230, 1050 340 C 1010 440, 910 490, 790 520 C 690 550, 780 630, 900 660"
                stroke="#00A859"
                strokeWidth="2.5"
                strokeOpacity="0.3"
                strokeLinecap="round"
              />

              {/* ── 4. PRIMARY CONTINUOUS PULSING LASER STREAM ── */}
              <motion.path
                d="M 100 650 C 140 520, 320 490, 500 470 C 600 460, 680 410, 700 320 C 720 220, 660 170, 640 120 C 620 50, 760 70, 890 100 C 1000 130, 1090 230, 1050 340 C 1010 440, 910 490, 790 520 C 690 550, 780 630, 900 660"
                stroke="url(#cyber-green-stream)"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeDasharray="45 220"
                animate={{ strokeDashoffset: [0, -530] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "linear" }}
                filter="url(#circuit-neon-glow)"
              />

              {/* ── 5. SECONDARY HIGH-SPEED PACKET STREAM ── */}
              <motion.path
                d="M 100 650 C 140 520, 320 490, 500 470 C 600 460, 680 410, 700 320 C 720 220, 660 170, 640 120 C 620 50, 760 70, 890 100 C 1000 130, 1090 230, 1050 340 C 1010 440, 910 490, 790 520 C 690 550, 780 630, 900 660"
                stroke="url(#active-laser-stream)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="16 180"
                animate={{ strokeDashoffset: [0, -392] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: "linear", delay: 1 }}
                filter="url(#packet-glow)"
              />

              {/* ── 6. DYNAMIC REACTIVE CARD-TO-PHONE INTERCONNECT TRACES ── */}
              
              {/* TOP-LEFT BRANCH (Map / Calendar Node) */}
              <g className="transition-all duration-300">
                {/* Base guide rail */}
                <path
                  d="M 445 160 C 510 160, 535 230, 565 230"
                  stroke="#00A859"
                  strokeWidth={isTLActive ? 2 : 1.2}
                  strokeOpacity={isTLActive ? 0.6 : 0.25}
                  strokeDasharray="3 4"
                />
                {/* High-speed Laser Stream */}
                <motion.path
                  d="M 445 160 C 510 160, 535 230, 565 230"
                  stroke={isTLActive ? "url(#active-laser-stream)" : "url(#cyber-green-stream)"}
                  strokeWidth={isTLActive ? 3.5 : 2}
                  strokeLinecap="round"
                  strokeDasharray={isTLActive ? "24 70" : "16 120"}
                  animate={{ strokeDashoffset: [0, isTLActive ? -94 : -136] }}
                  transition={{ duration: isTLActive ? 0.9 : 2.4, repeat: Infinity, ease: "linear" }}
                  filter={isTLActive ? "url(#active-beam-glow)" : "url(#packet-glow)"}
                />
                {/* Terminal Reticle Anchor at Card */}
                <line x1="439" y1="160" x2="451" y2="160" stroke="#00A859" strokeWidth="1" />
                <line x1="445" y1="154" x2="445" y2="166" stroke="#00A859" strokeWidth="1" />
                <circle cx="445" cy="160" r={isTLActive ? 5 : 3.5} fill="#00FF88" />
                <circle cx="445" cy="160" r={isTLActive ? 14 : 9} fill="none" stroke="#00A859" strokeOpacity={isTLActive ? 0.8 : 0.4} className="animate-ping" />
                
                {/* HUD Mini Tag */}
                <g className={`transition-opacity duration-300 ${isTLActive ? 'opacity-100' : 'opacity-40'}`}>
                  <rect x="454" y="145" width="66" height="14" rx="3" fill="#00A859" fillOpacity={isTLActive ? 0.2 : 0.08} stroke="#00A859" strokeWidth="0.8" />
                  <text x="458" y="155" fill="#00A859" fontSize="7.5" fontFamily="monospace" fontWeight="bold">GPS MESH // 10ms</text>
                </g>

                {/* Docking Receptor on Phone Bezel */}
                <circle cx="565" cy="230" r={isTLActive ? 4.5 : 3} fill="#00FF88" filter="url(#packet-glow)" />
              </g>

              {/* BOTTOM-LEFT BRANCH (Payment / Revenue Node) */}
              <g className="transition-all duration-300">
                <path
                  d="M 445 475 C 510 475, 535 410, 565 410"
                  stroke="#00A859"
                  strokeWidth={isBLActive ? 2 : 1.2}
                  strokeOpacity={isBLActive ? 0.6 : 0.25}
                  strokeDasharray="3 4"
                />
                <motion.path
                  d="M 445 475 C 510 475, 535 410, 565 410"
                  stroke={isBLActive ? "url(#active-laser-stream)" : "url(#cyber-green-stream)"}
                  strokeWidth={isBLActive ? 3.5 : 2}
                  strokeLinecap="round"
                  strokeDasharray={isBLActive ? "24 70" : "16 120"}
                  animate={{ strokeDashoffset: [0, isBLActive ? -94 : -136] }}
                  transition={{ duration: isBLActive ? 0.9 : 2.5, repeat: Infinity, ease: "linear", delay: 0.3 }}
                  filter={isBLActive ? "url(#active-beam-glow)" : "url(#packet-glow)"}
                />
                <line x1="439" y1="475" x2="451" y2="475" stroke="#00A859" strokeWidth="1" />
                <line x1="445" y1="469" x2="445" y2="481" stroke="#00A859" strokeWidth="1" />
                <circle cx="445" cy="475" r={isBLActive ? 5 : 3.5} fill="#00FF88" />
                <circle cx="445" cy="475" r={isBLActive ? 14 : 9} fill="none" stroke="#00A859" strokeOpacity={isBLActive ? 0.8 : 0.4} className="animate-ping" />
                
                {/* HUD Mini Tag */}
                <g className={`transition-opacity duration-300 ${isBLActive ? 'opacity-100' : 'opacity-40'}`}>
                  <rect x="454" y="460" width="66" height="14" rx="3" fill="#00A859" fillOpacity={isBLActive ? 0.2 : 0.08} stroke="#00A859" strokeWidth="0.8" />
                  <text x="458" y="470" fill="#00A859" fontSize="7.5" fontFamily="monospace" fontWeight="bold">PAY // 100% OK</text>
                </g>

                <circle cx="565" cy="410" r={isBLActive ? 4.5 : 3} fill="#00FF88" filter="url(#packet-glow)" />
              </g>

              {/* TOP-RIGHT BRANCH (Lock / Alert Node) */}
              <g className="transition-all duration-300">
                <path
                  d="M 915 160 C 850 160, 825 230, 795 230"
                  stroke="#00A859"
                  strokeWidth={isTRActive ? 2 : 1.2}
                  strokeOpacity={isTRActive ? 0.6 : 0.25}
                  strokeDasharray="3 4"
                />
                <motion.path
                  d="M 915 160 C 850 160, 825 230, 795 230"
                  stroke={isTRActive ? "url(#active-laser-stream)" : "url(#cyber-green-stream)"}
                  strokeWidth={isTRActive ? 3.5 : 2}
                  strokeLinecap="round"
                  strokeDasharray={isTRActive ? "24 70" : "16 120"}
                  animate={{ strokeDashoffset: [0, isTRActive ? -94 : -136] }}
                  transition={{ duration: isTRActive ? 0.9 : 2.3, repeat: Infinity, ease: "linear", delay: 0.2 }}
                  filter={isTRActive ? "url(#active-beam-glow)" : "url(#packet-glow)"}
                />
                <line x1="909" y1="160" x2="921" y2="160" stroke="#00A859" strokeWidth="1" />
                <line x1="915" y1="154" x2="915" y2="166" stroke="#00A859" strokeWidth="1" />
                <circle cx="915" cy="160" r={isTRActive ? 5 : 3.5} fill="#00FF88" />
                <circle cx="915" cy="160" r={isTRActive ? 14 : 9} fill="none" stroke="#00A859" strokeOpacity={isTRActive ? 0.8 : 0.4} className="animate-ping" />
                
                {/* HUD Mini Tag */}
                <g className={`transition-opacity duration-300 ${isTRActive ? 'opacity-100' : 'opacity-40'}`}>
                  <rect x="835" y="145" width="72" height="14" rx="3" fill="#00A859" fillOpacity={isTRActive ? 0.2 : 0.08} stroke="#00A859" strokeWidth="0.8" />
                  <text x="839" y="155" fill="#00A859" fontSize="7.5" fontFamily="monospace" fontWeight="bold">CLOUD // ZERO LOCK</text>
                </g>

                <circle cx="795" cy="230" r={isTRActive ? 4.5 : 3} fill="#00FF88" filter="url(#packet-glow)" />
              </g>

              {/* BOTTOM-RIGHT BRANCH (Booking / Growth Node) */}
              <g className="transition-all duration-300">
                <path
                  d="M 915 475 C 850 475, 825 410, 795 410"
                  stroke="#00A859"
                  strokeWidth={isBRActive ? 2 : 1.2}
                  strokeOpacity={isBRActive ? 0.6 : 0.25}
                  strokeDasharray="3 4"
                />
                <motion.path
                  d="M 915 475 C 850 475, 825 410, 795 410"
                  stroke={isBRActive ? "url(#active-laser-stream)" : "url(#cyber-green-stream)"}
                  strokeWidth={isBRActive ? 3.5 : 2}
                  strokeLinecap="round"
                  strokeDasharray={isBRActive ? "24 70" : "16 120"}
                  animate={{ strokeDashoffset: [0, isBRActive ? -94 : -136] }}
                  transition={{ duration: isBRActive ? 0.9 : 2.6, repeat: Infinity, ease: "linear", delay: 0.5 }}
                  filter={isBRActive ? "url(#active-beam-glow)" : "url(#packet-glow)"}
                />
                <line x1="909" y1="475" x2="921" y2="475" stroke="#00A859" strokeWidth="1" />
                <line x1="915" y1="469" x2="915" y2="481" stroke="#00A859" strokeWidth="1" />
                <circle cx="915" cy="475" r={isBRActive ? 5 : 3.5} fill="#00FF88" />
                <circle cx="915" cy="475" r={isBRActive ? 14 : 9} fill="none" stroke="#00A859" strokeOpacity={isBRActive ? 0.8 : 0.4} className="animate-ping" />
                
                {/* HUD Mini Tag */}
                <g className={`transition-opacity duration-300 ${isBRActive ? 'opacity-100' : 'opacity-40'}`}>
                  <rect x="835" y="460" width="72" height="14" rx="3" fill="#00A859" fillOpacity={isBRActive ? 0.2 : 0.08} stroke="#00A859" strokeWidth="0.8" />
                  <text x="839" y="470" fill="#00A859" fontSize="7.5" fontFamily="monospace" fontWeight="bold">VERIFIED // 50K+</text>
                </g>

                <circle cx="795" cy="410" r={isBRActive ? 4.5 : 3} fill="#00FF88" filter="url(#packet-glow)" />
              </g>

              {/* ── 7. CENTRAL FUTURISTIC HOLOGRAPHIC ORBITS AROUND PHONE ── */}
              <g transform="translate(680, 320)">
                {/* Outer Radar Orbit Ring */}
                <motion.ellipse
                  rx="162"
                  ry="265"
                  fill="none"
                  stroke="#00A859"
                  strokeWidth="1.2"
                  strokeOpacity="0.28"
                  strokeDasharray="8 12"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
                />
                {/* Inner Counter-Rotating Orbit Ring */}
                <motion.ellipse
                  rx="148"
                  ry="245"
                  fill="none"
                  stroke="#00FF88"
                  strokeWidth="1"
                  strokeOpacity="0.2"
                  strokeDasharray="40 20 4 20"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
                />
                {/* Cardinal Target Crosshairs */}
                <line x1="-165" y1="0" x2="-155" y2="0" stroke="#00A859" strokeWidth="2" strokeOpacity="0.5" />
                <line x1="155" y1="0" x2="165" y2="0" stroke="#00A859" strokeWidth="2" strokeOpacity="0.5" />
                <line x1="0" y1="-268" x2="0" y2="-258" stroke="#00A859" strokeWidth="2" strokeOpacity="0.5" />
                <line x1="0" y1="258" x2="0" y2="268" stroke="#00A859" strokeWidth="2" strokeOpacity="0.5" />
                {/* Polar Pulse Nodes */}
                <circle cx="0" cy="-263" r="3" fill="#00FF88" filter="url(#packet-glow)" />
                <circle cx="0" cy="263" r="3" fill="#00FF88" filter="url(#packet-glow)" />
              </g>
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
