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
  PhoneCall
} from 'lucide-react';

export const partnerSteps = [
  {
    step: "01",
    title: "অ্যাপ ডাউনলোড ও সাইন-আপ",
    description: "TurfPlay অ্যাপটি ডাউনলোড করে আপনার জিমেইল (Gmail) দিয়ে সহজেই অ্যাকাউন্ট খুলে নিন।"
  },
  {
    step: "02",
    title: "প্রোফাইল থেকে সিলেক্ট করুন",
    description: "অ্যাপের Profile অপশনে যান এবং 'Register Your Turf'-এ ট্যাপ করুন।"
  },
  {
    step: "03",
    title: "টার্ফের তথ্য সাবমিট করুন",
    description: "আপনার মাঠের সাধারণ কিছু তথ্য ও ছবি দিয়ে রিকোয়েস্ট Apply করুন।"
  },
  {
    step: "04",
    title: "12 ঘণ্টায় ওনার অ্যাক্সেস",
    description: "12 ঘণ্টার মধ্যে আমাদের ভেরিফিকেশন শেষ হলে একই অ্যাপে টার্ফ ওনার রোল চালু হয়ে যাবে!"
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
      stepNumber: '01',
      title: 'অ্যাপ ডাউনলোড ও সাইন-আপ',
      desc: 'TurfPlay অ্যাপটি ডাউনলোড করে আপনার জিমেইল (Gmail) দিয়ে সহজেই অ্যাকাউন্ট খুলে নিন।',
      points: [
        'গুগল প্লে স্টোর থেকে TurfPlay অ্যাপটি নামিয়ে নিন।',
        'আপনার Gmail দিয়ে 1 ক্লিকেই সাইন-আপ সম্পন্ন করুন।'
      ],
      icon: UserPlus,
      tag: 'ধাপ 01',
      hint: 'Google Account দিয়ে 1 ক্লিকে সাইন-আপ'
    },
    {
      id: 'step-2',
      stepNumber: '02',
      title: 'প্রোফাইল থেকে সিলেক্ট করুন',
      desc: "অ্যাপের Profile অপশনে যান এবং 'Register Your Turf'-এ ট্যাপ করুন।",
      points: [
        'অ্যাপের নিচে থাকা Profile সেকশনে যান।',
        "মেনু থেকে 'Register Your Turf' অপশনে ট্যাপ করুন।"
      ],
      icon: UserCheck,
      tag: 'ধাপ 02',
      hint: 'Profile ➜ Register Your Turf'
    },
    {
      id: 'step-3',
      stepNumber: '03',
      title: 'টার্ফের তথ্য সাবমিট করুন',
      desc: 'আপনার মাঠের সাধারণ কিছু তথ্য ও ছবি দিয়ে রিকোয়েস্ট Apply করুন।',
      points: [
        'মাঠের নাম, লোকেশন, ছবি ও স্লট বিবরণ দিন।',
        'তথ্যগুলো দিয়ে আবেদনটি Apply / Submit করে দিন।'
      ],
      icon: ClipboardCheck,
      tag: 'ধাপ 03',
      hint: 'ছবি, লোকেশন ও স্লট ভাড়া'
    },
    {
      id: 'step-4',
      stepNumber: '04',
      title: '12 ঘণ্টায় ওনার অ্যাক্সেস',
      desc: '12 ঘণ্টার মধ্যে আমাদের ভেরিফিকেশন শেষ হলে একই অ্যাপে টার্ফ ওনার রোল চালু হয়ে যাবে!',
      points: [
        '12 ঘণ্টার মধ্যে টিম দ্রুত ভেরিফিকেশন সম্পন্ন করবে।',
        'একই অ্যাপে সরাসরি Turf Owner Role চালু!'
      ],
      icon: Handshake,
      tag: 'ধাপ 04',
      hint: '12 ঘণ্টার মধ্যে ওনার মোড অ্যাক্টিভ'
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
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-[#00A859]/25 text-[#00A859] font-extrabold text-[11px] sm:text-xs uppercase tracking-[0.2em] mb-3 sm:mb-4 shadow-xs"
          >
            <Sparkles size={14} className="animate-pulse" />
            <span>সহজ ৪ ধাপের অনবোর্ডিং</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-3 leading-snug"
          >
            সহজ ৪ ধাপে আপনার টার্ফ যুক্ত করুন
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-lg md:text-xl text-slate-700 font-bold tracking-wide"
          >
            কোনো জটিলতা নেই — আপনার হাতের TurfPlay অ্যাপ থেকেই খুব সহজে টার্ফ ওনার হয়ে যান।
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

            {/* Top Icon Wrapper (Modern squircle, no circles) */}
            <motion.div 
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#00A859]/12 border border-[#00A859]/25 text-[#00A859] shadow-md shadow-[#00A859]/15 mb-4 sm:mb-5 relative group"
            >
              <PartyPopper size={28} className="relative z-10 text-[#00A859] transform group-hover:rotate-12 transition-transform duration-300 sm:w-[32px] sm:h-[32px]" />
            </motion.div>

            {/* Success Heading */}
            <h3 className="text-xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight uppercase mb-2">
              🎉 সরাসরি সেলফ-রেজিস্ট্রেশন সিস্টেম
            </h3>

            {/* Primary Review Text */}
            <p className="text-sm sm:text-lg font-bold text-[#00A859] tracking-wide mb-2 sm:mb-3">
              টার্ফ লিস্ট করতে TurfPlay-এর সাথে কথা বলতে হবে এমন কিছু না!
            </p>

            {/* Secondary Explanation Text */}
            <p className="text-xs sm:text-sm md:text-base text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed mb-6 sm:mb-8">
              কোনো কল বা অনুমোদনের অপেক্ষা নেই — তথ্য সাবমিট করামাত্রই আপনার টার্ফ বুকিংয়ের জন্য সম্পূর্ণ প্রস্তুত। তবে যেকোনো প্রশ্ন বা পরামর্শের জন্য সরাসরি TurfPlay টিমের সাথে কথা বলতে পারেন।
            </p>

            {/* Feature Highlights Glass Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-6 sm:mb-8">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-slate-200/80 text-[11px] sm:text-xs font-bold text-slate-700 shadow-xs">
                <CheckCircle2 size={13} className="text-[#00A859]" />
                <span>সরাসরি সেলফ-লিস্টিং</span>
              </div>
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-slate-200/80 text-[11px] sm:text-xs font-bold text-slate-700 shadow-xs">
                <CheckCircle2 size={13} className="text-[#00A859]" />
                <span>৫ সেকেন্ডে অফলাইন স্লট লক</span>
              </div>
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-slate-200/80 text-[11px] sm:text-xs font-bold text-slate-700 shadow-xs">
                <CheckCircle2 size={13} className="text-[#00A859]" />
                <span>মোবাইলেই ওনার কন্ট্রোল</span>
              </div>
            </div>

            {/* Action Buttons: Self-Register + Talk with TurfPlay (WhatsApp & Call) */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <a
                href="#waitlist"
                className="group relative inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3 bg-[#00A859] hover:bg-[#008f4c] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider rounded-full shadow-lg shadow-[#00A859]/25 hover:shadow-xl hover:shadow-[#00A859]/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                <span>অ্যাপে টার্ফ রেজিস্টার করুন →</span>
              </a>

              {/* Direct WhatsApp talk CTA */}
              <a
                href="https://wa.me/8801892979324?text=Hello%20TurfPlay%2C%20ami%20TurfPlay%20shomporke%20kotha%20bolte%20chai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#25D366] hover:bg-[#1faa4f] text-white font-extrabold text-xs uppercase tracking-wider transition-all duration-200 shadow-md shadow-[#25D366]/25 hover:scale-105 active:scale-95"
              >
                <MessageCircle size={16} />
                <span>TurfPlay-এর সাথে কথা বলুন (WhatsApp)</span>
              </a>

              {/* Direct Phone Call */}
              <a
                href="tel:+8801892979324"
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-3 rounded-full bg-white/90 backdrop-blur-md border-2 border-slate-200 hover:border-[#00A859] text-slate-900 hover:text-[#00A859] font-extrabold text-xs uppercase tracking-wider transition-all duration-200 shadow-xs hover:scale-105 active:scale-95"
              >
                <PhoneCall size={14} className="text-[#00A859]" />
                <span>কল: 01892-979324</span>
              </a>
            </div>

            {/* Trust Footer Note */}
            <div className="mt-6 sm:mt-7 pt-4 sm:pt-5 border-t border-slate-200/70 flex items-center justify-center gap-2 text-[11px] sm:text-xs text-slate-500 font-medium">
              <ShieldCheck size={14} className="text-[#00A859] shrink-0" />
              <span>যাচাইকৃত স্পোর্টস টার্ফ ইনফ্রাস্ট্রাকচার • ১০০% নিরাপদ ও নির্ভরযোগ্য</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
