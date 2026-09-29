import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  UserPlus, 
  UserCheck, 
  Handshake, 
  ClipboardCheck, 
  PartyPopper, 
  ArrowRight, 
  ChevronRight, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck,
  Building2,
  Check,
  MessageCircle,
  PhoneCall,
  Smartphone
} from 'lucide-react';

export const partnerSteps = [
  {
    step: "০১",
    title: "অ্যাপ নামিয়ে লগইন করুন",
    description: "প্লে স্টোর থেকে TurfPlay অ্যাপটি ডাউনলোড করে আপনার গুগল (Gmail) দিয়ে সহজেই সাইন-ইন করে নিন।"
  },
  {
    step: "০২",
    title: "রেজিস্ট্রেশন শুরু করুন",
    description: "অ্যাপের প্রোফাইল অপশনে গিয়ে 'Register Your Turf'-এ ট্যাপ করে ওনার আবেদন ফরমটি খুলুন।"
  },
  {
    step: "০৩",
    title: "মাঠের তথ্য ও ছবি দিন",
    description: "টার্ফের নাম, ঠিকানা, স্লটের রেট এবং মাঠের কিছু স্পষ্ট ছবি আপলোড করে সাবমিট করুন।"
  },
  {
    step: "০৪",
    title: "১২ ঘণ্টায় ওনার অ্যাক্টিভেশন",
    description: "আমাদের টিম তথ্য যাচাই করলেই একই অ্যাপে সরাসরি টার্ফ ওনার ড্যাশবোর্ড চালু হয়ে যাবে।"
  }
];

interface MilestoneItem {
  id: string;
  stepNumber: string;
  title: string;
  desc: string;
  points: string[];
  icon: React.ComponentType<{ size?: number; className?: string }>;
  tag: string;
  hint: string;
}

export const PartnerJourney = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const milestones: MilestoneItem[] = [
    {
      id: 'step-1',
      stepNumber: '০১',
      title: 'অ্যাপ নামিয়ে লগইন করুন',
      desc: 'প্লে স্টোর থেকে TurfPlay অ্যাপ ডাউনলোড করে জিমেইল দিয়ে এক ক্লিকে সাইন-ইন করে নিন।',
      points: [
        'গুগল প্লে স্টোর থেকে TurfPlay অ্যাপটি নামান',
        'জিমেইল অ্যাকাউন্ট দিয়ে সরাসরি লগইন করুন'
      ],
      icon: Smartphone,
      tag: 'ধাপ ০১',
      hint: 'সহজ গুগল সাইন-ইন'
    },
    {
      id: 'step-2',
      stepNumber: '০২',
      title: 'রেজিস্ট্রেশন শুরু করুন',
      desc: "অ্যাপের প্রোফাইল সেকশন থেকে 'Register Your Turf' অপশনে ট্যাপ করুন।",
      points: [
        'প্রোফাইল মেনুতে প্রবেশ করুন',
        "'Register Your Turf' অপশনটি বেছে নিন"
      ],
      icon: Building2,
      tag: 'ধাপ ০২',
      hint: 'প্রোফাইল ➜ Register Your Turf'
    },
    {
      id: 'step-3',
      stepNumber: '০৩',
      title: 'মাঠের তথ্য ও ছবি দিন',
      desc: 'টার্ফের নাম, লোকেশন, স্লটের রেট এবং মাঠের কিছু সুন্দর ছবি আপলোড করে সাবমিট করুন।',
      points: [
        'মাঠের নাম, লোকেশন ও স্লটের ভাড়া উল্লেখ করুন',
        'কয়েকটি ক্লিয়ার ছবি আপলোড করে সাবমিট করুন'
      ],
      icon: ClipboardCheck,
      tag: 'ধাপ ০৩',
      hint: 'লোকেশন, স্লট ও ছবি'
    },
    {
      id: 'step-4',
      stepNumber: '০৪',
      title: '১২ ঘণ্টায় ওনার অ্যাক্টিভেশন',
      desc: 'আমাদের টিম তথ্য যাচাই সম্পন্ন করলেই একই অ্যাপে আপনার ওনার মোড চালু হয়ে যাবে।',
      points: [
        '১২ ঘণ্টার মধ্যে তথ্য যাচাই সম্পন্ন হবে',
        'অ্যাপ থেকেই সরাসরি বুকিং ও স্লট ম্যানেজ শুরু করুন'
      ],
      icon: CheckCircle2,
      tag: 'ধাপ ০৪',
      hint: '১২ ঘণ্টায় ফুল ওনার অ্যাক্সেস'
    }
  ];

  const currentActive = hoveredStep !== null ? hoveredStep : activeStep;

  return (
    <section 
      id="partner" 
      className="relative py-20 lg:py-28 bg-gradient-to-b from-[#F5FAF7] via-white to-[#F5FAF7] text-slate-900 overflow-hidden selection:bg-[#00A859] selection:text-white"
    >
      {/* ── AMBIENT GLASSMORPHISM GLOW ORBS ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top-center emerald aura */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] sm:w-[900px] h-[450px] bg-gradient-to-b from-[#00A859]/15 via-emerald-400/8 to-transparent blur-[140px] rounded-full" />
        
        {/* Soft floating side orbs for glass reflections */}
        <div className="absolute top-1/3 -left-32 w-[400px] h-[400px] bg-emerald-500/10 blur-[130px] rounded-full" />
        <div className="absolute bottom-20 -right-32 w-[450px] h-[450px] bg-teal-500/10 blur-[140px] rounded-full" />
      </div>

      <div className="relative z-10 container-fluid">
        
        {/* ── HEADER SECTION ── */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-[#00A859]/30 text-[#00A859] font-bold text-xs mb-3 sm:mb-4 shadow-xs"
          >
            <span className="w-2 h-2 rounded-full bg-[#00A859]" />
            <span>সহজ ৪ ধাপে পার্টনার অনবোর্ডিং</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-normal mb-3 leading-snug"
          >
            মাত্র ৪টি ধাপে টার্ফ পার্টনার হয়ে উঠুন
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed"
          >
            অফিসে আসার বা দীর্ঘ সময় অপেক্ষার প্রয়োজন নেই—স্মার্টফোন থেকেই টার্ফ যুক্ত করুন এবং সরাসরি অনলাইন বুকিং নেওয়া শুরু করুন।
          </motion.p>
        </div>

        {/* ── 4-STEP GLASS MILESTONES GRID (NO CIRCLE CARDS) ── */}
        <div className="relative mb-14 sm:mb-18">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 relative z-10">
            {milestones.map((m, idx) => {
              const IconComp = m.icon;
              const isSelected = currentActive === idx;

              return (
                <motion.div
                  key={m.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.1 }}
                  onMouseEnter={() => setHoveredStep(idx)}
                  onMouseLeave={() => setHoveredStep(null)}
                  onClick={() => setActiveStep(idx)}
                  className="cursor-pointer group relative flex flex-col"
                >
                  {/* Frosted Glass Card Frame */}
                  <div 
                    className={`flex-1 rounded-3xl p-6 sm:p-7 transition-all duration-300 relative overflow-hidden flex flex-col justify-between backdrop-blur-xl ${
                      isSelected
                        ? 'bg-white/95 border-2 border-[#00A859] shadow-[0_16px_40px_rgba(0,168,89,0.18)] -translate-y-1.5'
                        : 'bg-white/75 hover:bg-white/90 border border-white/90 hover:border-[#00A859]/50 shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_45px_rgba(0,168,89,0.12)] hover:-translate-y-1.5'
                    }`}
                  >
                    {/* Top glass reflection gradient shimmer */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/80 to-transparent pointer-events-none" />

                    {/* Big Stylized Background Step Watermark */}
                    <div 
                      className={`absolute top-2 right-4 text-5xl sm:text-6xl font-black font-mono select-none pointer-events-none transition-all duration-300 leading-none ${
                        isSelected 
                          ? 'text-[#00A859]/15 scale-105' 
                          : 'text-slate-200/50 group-hover:text-[#00A859]/10'
                      }`}
                    >
                      {m.stepNumber}
                    </div>

                    {/* Card Header: Icon + Step Badge */}
                    <div className="relative z-10 flex items-center justify-between gap-3 mb-4">
                      {/* Squircle Icon Wrapper (No circles) */}
                      <div 
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                          isSelected
                            ? 'bg-[#00A859] text-white shadow-md shadow-[#00A859]/35 scale-105'
                            : 'bg-white/90 text-[#00A859] border border-slate-200/80 group-hover:bg-[#00A859] group-hover:text-white group-hover:scale-105 shadow-xs'
                        }`}
                      >
                        <IconComp size={22} className="stroke-[2.2]" />
                      </div>

                      {/* Glass Step Badge */}
                      <span 
                        className={`text-[10px] sm:text-[11px] font-black uppercase tracking-[0.18em] px-3 py-1 rounded-full border transition-all ${
                          isSelected 
                            ? 'bg-[#00A859]/15 text-[#00A859] border-[#00A859]/35 font-extrabold shadow-xs' 
                            : 'bg-slate-100/80 text-slate-600 border-slate-200/60 group-hover:text-[#00A859] group-hover:border-[#00A859]/30'
                        }`}
                      >
                        {m.tag}
                      </span>
                    </div>

                    {/* Card Body Content */}
                    <div className="relative z-10 mb-4">
                      <h3 className="text-base sm:text-lg font-black text-slate-900 tracking-tight mb-2 group-hover:text-[#00A859] transition-colors leading-snug">
                        {m.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed mb-3">
                        {m.desc}
                      </p>

                      {/* Sub Bullet Points */}
                      <ul className="space-y-1.5 pt-2 border-t border-slate-100">
                        {m.points.map((pt, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-1.5 text-[11px] sm:text-xs text-slate-600 font-medium leading-relaxed">
                            <span className="text-[#00A859] mt-0.5 font-black shrink-0">✓</span>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Bottom Status / Hint Bar */}
                    <div className="relative z-10 pt-3.5 border-t border-slate-100/90 flex items-center justify-between">
                      <span className="text-[10px] sm:text-[11px] font-semibold text-slate-500 truncate mr-2">
                        {m.hint}
                      </span>
                      <div 
                        className={`w-6 h-6 shrink-0 rounded-xl flex items-center justify-center transition-all ${
                          isSelected 
                            ? 'bg-[#00A859] text-white shadow-xs' 
                            : 'bg-slate-100/80 text-slate-400 group-hover:bg-[#00A859]/15 group-hover:text-[#00A859]'
                        }`}
                      >
                        {isSelected ? <Check size={13} className="stroke-[3]" /> : <ChevronRight size={13} />}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ── SUCCESS / CONFIRMATION STATE CARD (FROSTED GLASS EFFECT) ── */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Ambient Glow behind glass card */}
          <div className="absolute -inset-2 bg-gradient-to-r from-[#00A859]/20 via-emerald-400/10 to-[#00A859]/20 rounded-3xl blur-2xl opacity-70 pointer-events-none" />

          {/* Frosted Glass Frame */}
          <div className="relative rounded-3xl backdrop-blur-2xl bg-white/80 border border-white/90 p-6 sm:p-10 md:p-12 shadow-[0_20px_50px_rgba(0,168,89,0.1)] overflow-hidden text-center">
            
            {/* Top Accent Strip */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 via-[#00A859] to-teal-400" />

            {/* Top Icon Wrapper */}
            <motion.div 
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#00A859]/12 border border-[#00A859]/25 text-[#00A859] shadow-md shadow-[#00A859]/15 mb-4 sm:mb-5 relative group"
            >
              <Building2 size={28} className="relative z-10 text-[#00A859] sm:w-[32px] sm:h-[32px]" />
            </motion.div>

            {/* Heading */}
            <h3 className="text-xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-normal mb-2">
              অ্যাপ থেকেই সরাসরি টার্ফ লিস্ট করুন
            </h3>

            {/* Primary Review Text */}
            <p className="text-sm sm:text-base font-bold text-[#00A859] mb-2 sm:mb-3">
              কোনো জটিল ফর্মালিটি নেই—তথ্য সাবমিট করলেই দ্রুত লাইভ
            </p>

            {/* Secondary Explanation Text */}
            <p className="text-xs sm:text-sm md:text-base text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed mb-6 sm:mb-8">
              টার্ফ ওনারদের সুবিধার কথা মাথায় রেখে পুরো অনবোর্ডিং রাখা হয়েছে একদম সহজ। তথ্য সাবমিট করলেই আমাদের টিম যাচাই করে আপনার ওনার অ্যাকাউন্ট সক্রিয় করে দেবে।
            </p>

            {/* Feature Highlights Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-6 sm:mb-8">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-slate-200/80 text-[11px] sm:text-xs font-bold text-slate-700 shadow-xs">
                <CheckCircle2 size={13} className="text-[#00A859]" />
                <span>সহজ সেলফ-লিস্টিং</span>
              </div>
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-slate-200/80 text-[11px] sm:text-xs font-bold text-slate-700 shadow-xs">
                <CheckCircle2 size={13} className="text-[#00A859]" />
                <span>তাত্ক্ষণিক অফলাইন স্লট লক</span>
              </div>
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-slate-200/80 text-[11px] sm:text-xs font-bold text-slate-700 shadow-xs">
                <CheckCircle2 size={13} className="text-[#00A859]" />
                <span>ফোনেই রিয়েল-টাইম কন্ট্রোল</span>
              </div>
            </div>

            {/* Action Buttons: Self-Register + Talk with TurfPlay (WhatsApp & Call) */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <a
                href="#register"
                className="group relative inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3 bg-[#00A859] hover:bg-[#008f4c] text-white font-extrabold text-xs sm:text-sm rounded-full shadow-lg shadow-[#00A859]/25 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                <span>টার্ফ রেজিস্ট্রেশন ফরম →</span>
              </a>

              {/* Direct WhatsApp talk CTA */}
              <a
                href="https://wa.me/8801611920991?text=Hello%20TurfPlay%2C%20ami%20TurfPlay%20shomporke%20kotha%20bolte%20chai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#25D366] hover:bg-[#1faa4f] text-white font-extrabold text-xs transition-all duration-200 shadow-md shadow-[#25D366]/25 hover:scale-105 active:scale-95"
              >
                <MessageCircle size={16} />
                <span>হোয়াটসঅ্যাপে কথা বলুন</span>
              </a>

              {/* Direct Phone Call */}
              <a
                href="tel:+8801611920991"
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-3 rounded-full bg-white/90 border border-slate-200 hover:border-[#00A859] text-slate-900 hover:text-[#00A859] font-extrabold text-xs transition-all duration-200 shadow-xs hover:scale-105 active:scale-95"
              >
                <PhoneCall size={14} className="text-[#00A859]" />
                <span>কল: 01611-920991</span>
              </a>
            </div>

            {/* Trust Footer Note */}
            <div className="mt-6 sm:mt-7 pt-4 sm:pt-5 border-t border-slate-200/70 flex items-center justify-center gap-2 text-[11px] sm:text-xs text-slate-500 font-medium">
              <ShieldCheck size={14} className="text-[#00A859] shrink-0" />
              <span>বাংলাদেশের নির্ভরযোগ্য ডিজিটাল টার্ফ ম্যানেজমেন্ট নেটওয়ার্ক</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
