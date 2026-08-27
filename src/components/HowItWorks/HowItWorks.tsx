import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Smartphone, LayoutDashboard, Sparkles, CheckCircle2,
  MapPin, Zap, Calendar, Users, CalendarCheck, CreditCard, BarChart3, Cloud, Clock, ShieldCheck, X, ZoomIn, Info
} from 'lucide-react';
import { 
  MockupScreen1, MockupScreen2, MockupScreen3, 
  PlayerMockupScreen1, PlayerMockupScreen2, PlayerMockupScreen3,
  PlayerMockupScreen4, PlayerMockupScreen5, PlayerMockupScreen6
} from '../Mockups/MockupScreens';

import playerHome1Img from '../../assets/images/homepage1.png';
import playerHome2Img from '../../assets/images/homepage2.png';
import playerMapImg from '../../assets/images/mapscreen.png';
import playerMock1Img from '../../assets/images/mockup1.jpg';
import playerMock2Img from '../../assets/images/mockup2.jpg';
import playerMock3Img from '../../assets/images/mockup3.jpg';

export const HowItWorks = () => {
  // Role switcher state: 'player' or 'owner'
  const [activeRole, setActiveRole] = useState<'player' | 'owner'>('player');
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [activeZoomImage, setActiveZoomImage] = useState<{ src: string; title: string } | null>(null);

  // Player Steps Data (Real App Screenshots & Explicit Clear Details)
  const playerFeatures = [
    {
      num: "০১",
      title: "হোমপেজ ও স্পোর্টস ব্রাউজিং",
      desc: "ফুটবল, ক্রিকেট, ব্যাডমিন্টন ও বাস্কেটবল—আপনার পছন্দের খেলার সেরা টার্ফ সহজেই খুঁজুন।",
      badge: "হোমপেজ ইউআই",
      icon: Smartphone,
      screenImage: playerHome1Img,
      screen: <PlayerMockupScreen1 onZoom={() => setActiveZoomImage({ src: playerHome1Img, title: "হোমপেজ ও স্পোর্টস ব্রাউজিং" })} />,
      details: [
        { label: "প্রবেশ অবস্থান", val: "মহাখালী, ঢাকা" },
        { label: "খেলার ধরন", val: "ফুটবল, ক্রিকেট, ব্যাডমিন্টন, বাস্কেটবল" },
        { label: "লাইভ ম্যাচ কার্ড", val: "Dhaka Turf Express (০৬:০০ PM - ১২:০০ AM)" }
      ]
    },
    {
      num: "০২",
      title: "লাইভ ম্যাপে টার্ফ খুঁজুন",
      desc: "ঢাকা সহ আশেপাশের সমস্ত টার্ফ গুগল ম্যাপে পিন পয়েন্ট করে সরাসরি রেট ও লোকেশন দেখুন।",
      badge: "লাইভ ম্যাপ",
      icon: MapPin,
      screenImage: playerMapImg,
      screen: <PlayerMockupScreen2 onZoom={() => setActiveZoomImage({ src: playerMapImg, title: "লাইভ ম্যাপে টার্ফ খুঁজুন" })} />,
      details: [
        { label: "টার্ফ এলাকা", val: "ঢাকা গুলশান ২" },
        { label: "প্রতি ঘণ্টার রেট", val: "৳৫০০ / ঘণ্টা" },
        { label: "ইউজার রেটিং", val: "৪.৭ ★ (ভেরিফাইড)" }
      ]
    },
    {
      num: "০৩",
      title: "কাছের টার্ফ ও ট্রেন্ডিং গ্রাউন্ড",
      desc: "আপনার লোকেশন থেকে দূরত্ব, ফিল্ড কন্ডিশন ও পারকিং সুবিধাসহ সকল টার্ফের তালিকা।",
      badge: "নিয়্যারবাই ফিল্টার",
      icon: Zap,
      screenImage: playerHome2Img,
      screen: <PlayerMockupScreen3 onZoom={() => setActiveZoomImage({ src: playerHome2Img, title: "কাছের টার্ফ ও ট্রেন্ডিং গ্রাউন্ড" })} />,
      details: [
        { label: "নিকটস্থ গ্রাউন্ড", val: "ধানমন্ডি টার্ফ অ্যারেনা (৩.৬ কিমি)" },
        { label: "বিশেষ সুবিধা", val: "পারকিং, ফ্রি ওয়াইফাই, স্পেকটেটর জোন" },
        { label: "বুকিং স্টার্ট", val: "৳৫০০ - ৳১২০০ / ঘণ্টা" }
      ]
    },
    {
      num: "০৪",
      title: "ফিল্ড অপশন ও ইনস্ট্যান্ট বুকিং",
      desc: "টার্ফের ছবি, মেইন ফুটবল ফিল্ড, ফ্লাডলাইট ও প্রতি ঘণ্টার রেট দেখে সরাসরি বুক করুন।",
      badge: "ইনস্ট্যান্ট বুকিং",
      icon: Calendar,
      screenImage: playerMock1Img,
      screen: <PlayerMockupScreen4 onZoom={() => setActiveZoomImage({ src: playerMock1Img, title: "ফিল্ড অপশন ও ইনস্ট্যান্ট বুকিং" })} />,
      details: [
        { label: "টার্ফ নাম", val: "অ্যারেনা ৭১ (বনানী)" },
        { label: "মাঠের সাইজ", val: "৬০x৪০ মিটার (১০v১০ ফুটবল)" },
        { label: "সুবিধা ও রেট", val: "ফ্লাডলাইট, HD সারফেস, ৳১৫০০/ঘণ্টা" }
      ]
    },
    {
      num: "০৫",
      title: "খেলোয়াড় প্রোফাইল ও বুকিং হিস্ট্রি",
      desc: "আপনার পূর্বের খেলা, গড় রেটিং ও অ্যাক্টিভ বুকিং ট্র্যাক করুন খুব সহজে।",
      badge: "প্লেয়ার প্রোফাইল",
      icon: Users,
      screenImage: playerMock2Img,
      screen: <PlayerMockupScreen5 onZoom={() => setActiveZoomImage({ src: playerMock2Img, title: "খেলোয়াড় প্রোফাইল ও বুকিং হিস্ট্রি" })} />,
      details: [
        { label: "প্লেয়ার প্রোফাইল", val: "রিমন আহমেদ (বনানী, ঢাকা)" },
        { label: "বুকিং স্ট্যাটস", val: "৬টি কাছের টার্ফ, ১২টি সাকসেস বুকিং" },
        { label: "প্লেয়ার রেটিং", val: "৪.৮ / ৫.০ স্টার" }
      ]
    },
    {
      num: "০৬",
      title: "টার্ফ রিভিউ ও ভেরিফাইড রেটিং",
      desc: "অন্যান্য খেলোয়াড়দের রিভিউ এবং রেটিং দেখে সঠিক টার্ফ বেছে নিন নিশ্চিন্তে।",
      badge: "স্টার রেটিং",
      icon: ShieldCheck,
      screenImage: playerMock3Img,
      screen: <PlayerMockupScreen6 onZoom={() => setActiveZoomImage({ src: playerMock3Img, title: "টার্ফ রিভিউ ও ভেরিফাইড রেটিং" })} />,
      details: [
        { label: "মোট রিভিউ", val: "১২৮টি ভেরিফাইড প্লেয়ার রিভিউ" },
        { label: "গড় স্কোর", val: "৪.৮ ★ ★ ★ ★ ★" },
        { label: "প্লেয়ার কমেন্ট", val: "রফিক, তানভীর ও সাকিবের ইতিবাচক মতামত" }
      ]
    }
  ];

  // Owner Steps Data
  const ownerFeatures = [
    {
      num: "০১",
      title: "স্মার্ট টার্ফ ড্যাশবোর্ড",
      desc: "আপনার টার্ফ প্রোফাইল, স্লটের সময়সূচী, সুযোগ-সুবিধা ও রেটিং সহজে নিয়ন্ত্রণ করার সেন্ট্রাল ড্যাশবোর্ড।",
      badge: "সেন্ট্রাল কন্ট্রোল",
      icon: LayoutDashboard,
      screen: <MockupScreen1 />
    },
    {
      num: "০২",
      title: "১০ সেকেন্ডে স্লট লক ও জিরো ডাবল-বুকিং",
      desc: "হোয়াটসঅ্যাপ বা ফোনে বুকিং আসলে নাম ও নম্বর দিয়ে ১০ সেকেন্ডে স্লট অটো-লক করে ফেলুন।",
      badge: "অটো-লকিং প্রযুক্তি",
      icon: CalendarCheck,
      screen: <MockupScreen2 />
    },
    {
      num: "০৩",
      title: "দৈনিক ও মাসের মোট আয় ট্র্যাকিং",
      desc: "আজকে কত আয় হলো এবং মাসিক লক্ষ্যমাত্রার প্রবৃদ্ধি ড্যাশবোর্ডে স্পষ্ট গ্রাফের মাধ্যমে দেখতে পাবেন।",
      badge: "আয় অ্যানালিটিক্স",
      icon: CreditCard,
      screen: <MockupScreen3 />
    },
    {
      num: "০৪",
      title: "বিজনেস রিপোর্ট ও গ্রাহক ডাটাবেস",
      desc: "আপনার টার্ফের নিয়মিত গ্রাহকদের তালিকা ও ফোন নম্বর গুছিয়ে রাখুন যা ভবিষ্যতের প্রচারণায় কাজে লাগবে।",
      badge: "গ্রাহক বৃদ্ধি",
      icon: BarChart3,
      screen: <MockupScreen3 />
    }
  ];

  const currentFeatures = activeRole === 'player' ? playerFeatures : ownerFeatures;

  // Handle role change safely
  const handleRoleChange = (role: 'player' | 'owner') => {
    setActiveRole(role);
    setActiveStepIndex(0);
  };

  const handleOpenZoom = () => {
    if (activeRole === 'player' && 'screenImage' in currentFeatures[activeStepIndex]) {
      setActiveZoomImage({
        src: (currentFeatures[activeStepIndex] as any).screenImage,
        title: currentFeatures[activeStepIndex].title
      });
    }
  };

  const coreLogics = [
    { 
      title: "নিরাপদ পেমেন্ট", 
      desc: "বিকাশ, নগদ ও কার্ডের মাধ্যমে দ্রুত ও সুরক্ষিত লেনদেন।", 
      icon: CreditCard 
    },
    { 
      title: "ক্লাউড সিঙ্ক", 
      desc: "মোবাইল ও কম্পিউটারে বুকিং সাথে সাথে আপডেট হয়।", 
      icon: Cloud 
    },
    { 
      title: "২৪/৭ নির্ভরযোগ্যতা", 
      desc: "নিরবচ্ছিন্নভাবে আপনার টার্ফ পরিচালনা সহজ করে।", 
      icon: Clock 
    }
  ];

  return (
    <section id="how-it-works" className="py-20 lg:py-32 bg-[#FFFFFF] relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#00A859]/6 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00A859]/10 border border-[#00A859]/20 text-[#00A859] font-extrabold text-xs uppercase tracking-widest mb-4"
          >
            <Sparkles size={14} />
            <span>দ্বিমুখী ইকোসিস্টেম</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-4 tracking-tight uppercase">
            <span className="font-serif italic text-[#00A859] lowercase font-normal">TurfPlay</span> কীভাবে কাজ করে?
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto text-sm md:text-base font-bold leading-relaxed uppercase tracking-[0.2em]">
            খেলোয়াড় এবং টার্ফ মালিক দুজনের জন্যই সেরা অভিজ্ঞতা
          </p>
        </div>

        {/* ── ROLE SWITCHER SEGMENTED TOGGLE BUTTONS ── */}
        <div className="flex justify-center mb-16">
          <div className="bg-slate-100 p-1.5 rounded-full border border-slate-200 shadow-inner flex items-center gap-2 relative">
            <button
              onClick={() => handleRoleChange('player')}
              className={`relative z-10 flex items-center gap-2.5 px-6 md:px-8 py-3.5 rounded-full font-black text-xs md:text-sm uppercase tracking-wider transition-all duration-300 ${
                activeRole === 'player'
                  ? 'bg-[#00A859] text-white shadow-lg shadow-[#00A859]/30 scale-[1.02]'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Smartphone size={16} />
              <span>খেলোয়াড়দের অভিজ্ঞতা</span>
            </button>

            <button
              onClick={() => handleRoleChange('owner')}
              className={`relative z-10 flex items-center gap-2.5 px-6 md:px-8 py-3.5 rounded-full font-black text-xs md:text-sm uppercase tracking-wider transition-all duration-300 ${
                activeRole === 'owner'
                  ? 'bg-[#00A859] text-white shadow-lg shadow-[#00A859]/30 scale-[1.02]'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <LayoutDashboard size={16} />
              <span>টার্ফ মালিকদের ড্যাশবোর্ড</span>
            </button>
          </div>
        </div>

        {/* ── DYNAMIC ROLE SHOWCASE CONTAINER ── */}
        <div className="glass-card !p-8 md:!p-12 bg-white border border-[#00A859]/20 shadow-xl mb-16">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            
            {/* LEFT: STEP SELECTOR CARDS */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-3 h-3 rounded-full bg-[#00A859] animate-pulse" />
                <h3 className="text-xl md:text-2xl font-black text-slate-900 uppercase tracking-tight">
                  {activeRole === 'player' ? 'খেলোয়াড়দের ব্যবহার নির্দেশিকা' : 'টার্ফ পরিচালনা ফিচারসমূহ'}
                </h3>
              </div>

              <div className="space-y-3">
                {currentFeatures.map((feat, idx) => {
                  const isSelected = activeStepIndex === idx;

                  return (
                    <motion.div
                      key={`${activeRole}-${idx}`}
                      onClick={() => setActiveStepIndex(idx)}
                      onMouseEnter={() => setActiveStepIndex(idx)}
                      whileHover={{ scale: 1.008 }}
                      className={`p-4 md:p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex gap-4 items-start ${
                        isSelected
                          ? 'bg-gradient-to-r from-[#00A859]/12 via-[#00A859]/6 to-transparent border-[#00A859] shadow-md shadow-[#00A859]/10'
                          : 'bg-[#F8FAFC] border-slate-200 hover:border-[#00A859]/40'
                      }`}
                    >
                      {/* Step Number Badge */}
                      <div className={`w-10 h-10 md:w-11 md:h-11 rounded-xl flex items-center justify-center font-black text-sm flex-shrink-0 transition-colors ${
                        isSelected
                          ? 'bg-[#00A859] text-white shadow-md'
                          : 'bg-white border border-slate-200 text-slate-700'
                      }`}>
                        {feat.num}
                      </div>

                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <h4 className={`font-black text-sm md:text-base uppercase tracking-tight ${
                            isSelected ? 'text-[#00A859]' : 'text-slate-900'
                          }`}>
                            {feat.title}
                          </h4>
                          <span className={`text-[9px] font-extrabold uppercase px-2.5 py-0.5 rounded-full border ${
                            isSelected
                              ? 'bg-[#00A859]/15 border-[#00A859]/30 text-[#00A859]'
                              : 'bg-slate-200/60 border-slate-300/60 text-slate-600'
                          }`}>
                            {feat.badge}
                          </span>
                        </div>
                        <p className="text-xs md:text-sm text-slate-600 font-medium leading-relaxed">
                          {feat.desc}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* RIGHT: DYNAMICALLY UPDATING IPHONE DEVICE MOCKUP PREVIEW */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              
              {/* iPhone 16 Pro Max Device Frame Container */}
              <div className="relative w-full max-w-[310px] sm:max-w-[330px] lg:max-w-[350px] aspect-[9/19] bg-slate-950 rounded-[48px] p-3 border-[5px] border-slate-700 shadow-[0_25px_60px_rgba(0,0,0,0.5),0_0_30px_rgba(0,168,89,0.18)] overflow-hidden flex flex-col justify-between group transition-transform duration-500 hover:scale-[1.015]">
                
                {/* Side Button Simulators */}
                <div className="absolute top-24 -left-[6px] w-[3px] h-7 bg-slate-600 rounded-l-md" />
                <div className="absolute top-36 -left-[6px] w-[3px] h-10 bg-slate-600 rounded-l-md" />
                <div className="absolute top-48 -left-[6px] w-[3px] h-10 bg-slate-600 rounded-l-md" />
                <div className="absolute top-32 -right-[6px] w-[3px] h-14 bg-slate-600 rounded-r-md" />

                {/* Top Dynamic Island Pill Notch Cutout */}
                <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-24 h-5.5 bg-black rounded-full border border-white/10 z-30 flex items-center justify-between px-2.5 shadow-inner">
                  <div className="w-3 h-3 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center">
                    <div className="w-1 h-1 rounded-full bg-blue-900/60" />
                  </div>
                  <div className="w-2 h-2 rounded-full bg-slate-900 border border-slate-800" />
                </div>

                {/* Dynamic Screen Content Container (Swaps immediately when clicking steps) */}
                <div 
                  className="w-full h-full rounded-[38px] overflow-hidden bg-[#0A0F0D] relative z-10 cursor-pointer"
                  onClick={handleOpenZoom}
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`${activeRole}-${activeStepIndex}`}
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.25 }}
                      className="w-full h-full relative"
                    >
                      {currentFeatures[activeStepIndex].screen}
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Floating HD Zoom Button Outside Phone top-right */}
                <button
                  type="button"
                  onClick={handleOpenZoom}
                  className="absolute -top-3 -right-3 z-40 bg-slate-900/95 hover:bg-[#00A859] text-white p-2 rounded-full border border-white/20 shadow-xl transition-all transform hover:scale-110 flex items-center gap-1.5 text-[10px] font-black uppercase px-3.5 cursor-pointer"
                  title="ফুল এইচডি জুম করুন"
                >
                  <ZoomIn size={14} />
                  <span>HD জুম</span>
                </button>
              </div>

              {/* EXPLICIT CLEAR TEXT DETAILS CARD BELOW PHONE */}
              {activeRole === 'player' && 'details' in currentFeatures[activeStepIndex] && (
                <motion.div
                  key={`details-${activeStepIndex}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-5 w-full max-w-[350px] bg-slate-900 text-white p-4 rounded-2xl border border-[#00A859]/30 shadow-lg text-left"
                >
                  <div className="flex items-center gap-2 mb-2 pb-2 border-b border-white/10">
                    <Info size={14} className="text-[#00A859]" />
                    <span className="text-[11px] font-black uppercase text-[#00A859] tracking-wider">
                      পর্দায় কী তথ্য রয়েছে (স্পস্ট বিবরণ):
                    </span>
                  </div>
                  <div className="space-y-1.5">
                    {(currentFeatures[activeStepIndex] as any).details.map((d: { label: string; val: string }, i: number) => (
                      <div key={i} className="flex justify-between items-center text-xs">
                        <span className="text-slate-400 font-bold text-[11px]">{d.label}:</span>
                        <span className="text-white font-extrabold text-[11px] text-right ml-2">{d.val}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

            </div>

          </div>
        </div>

        {/* ── CORE ECOSYSTEM HIGHLIGHTS ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card !p-8 border border-[#00A859]/20 shadow-sm bg-white"
        >
          <div className="grid md:grid-cols-3 gap-8">
            {coreLogics.map((log, i) => {
              const IconComponent = log.icon;
              return (
                <div key={i} className="flex gap-4 items-start group">
                  <div className="p-3 bg-[#00A859]/10 rounded-xl border border-[#00A859]/20 flex-shrink-0 group-hover:bg-[#00A859] transition-all">
                    <IconComponent className="text-[#00A859] group-hover:text-white transition-colors" size={20} />
                  </div>
                  <div>
                    <h5 className="text-base font-extrabold text-slate-900 uppercase tracking-tight mb-1 group-hover:text-[#00A859] transition-colors">{log.title}</h5>
                    <p className="text-xs text-slate-600 font-medium leading-relaxed">{log.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

      </div>

      {/* FULL HD LIGHTBOX ZOOM MODAL */}
      <AnimatePresence>
        {activeZoomImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveZoomImage(null)}
            className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full bg-slate-900 rounded-3xl p-6 border border-white/20 shadow-2xl flex flex-col items-center max-h-[92vh] overflow-y-auto"
            >
              {/* Header Bar */}
              <div className="w-full flex justify-between items-center mb-4 pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#00A859]" />
                  <h3 className="text-lg font-black text-white uppercase tracking-tight">
                    {activeZoomImage.title} - (ফুল এইচডি ক্লিয়ার ভিউ)
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveZoomImage(null)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Clear Screen Preview */}
              <div className="relative w-full max-w-[340px] rounded-[36px] border-4 border-slate-800 overflow-hidden shadow-2xl bg-black my-2">
                <img
                  src={activeZoomImage.src}
                  alt={activeZoomImage.title}
                  className="w-full h-auto object-contain [image-rendering:-webkit-optimize-contrast] contrast-[1.05]"
                />
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setActiveZoomImage(null)}
                className="mt-4 px-8 py-2.5 bg-[#00A859] text-white font-black text-xs rounded-full shadow-lg hover:bg-[#008746] transition-colors uppercase tracking-wider"
              >
                বন্ধ করুন
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
