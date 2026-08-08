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
  Check
} from 'lucide-react';

interface MilestoneItem {
  id: string;
  stepNumber: string;
  title: string;
  desc: string;
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
      title: 'Create Account',
      desc: 'TurfPlay-এ আপনার একটি Account তৈরি করুন।',
      icon: UserPlus,
      tag: 'Step 01',
      hint: 'Quick sign-up with Mobile / Email'
    },
    {
      id: 'step-2',
      stepNumber: '02',
      title: 'Complete Profile',
      desc: 'আপনার প্রয়োজনীয় Profile Information সম্পূর্ণ করুন।',
      icon: UserCheck,
      tag: 'Step 02',
      hint: 'Personal & business contact details'
    },
    {
      id: 'step-3',
      stepNumber: '03',
      title: 'Partner with TurfPlay',
      desc: 'Profile থেকে “Partner with TurfPlay” অপশনে যান।',
      icon: Handshake,
      tag: 'Step 03',
      hint: 'Instant access to Partner Portal'
    },
    {
      id: 'step-4',
      stepNumber: '04',
      title: 'Submit Application',
      desc: 'আপনার Turf-এর প্রয়োজনীয় তথ্য দিয়ে Application Submit করুন।',
      icon: ClipboardCheck,
      tag: 'Step 04',
      hint: 'Turf photos, pricing & slot schedule'
    }
  ];

  const currentActive = hoveredStep !== null ? hoveredStep : activeStep;

  return (
    <section 
      id="partner" 
      className="relative py-28 lg:py-36 bg-[#070B11] text-white overflow-hidden selection:bg-[#00A859] selection:text-white"
    >
      {/* ── FOOTBALL FIELD & STADIUM AMBIENT BACKGROUND ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Stadium Floodlight Top-Center Glow */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[850px] h-[550px] bg-gradient-to-b from-[#00A859]/20 via-[#00A859]/8 to-transparent blur-[140px] rounded-full" />
        
        {/* Subtle Pitch Beam Left & Right */}
        <div className="absolute top-1/3 -left-40 w-[450px] h-[450px] bg-[#00A859]/10 blur-[130px] rounded-full" />
        <div className="absolute bottom-10 -right-40 w-[500px] h-[500px] bg-[#00A859]/12 blur-[150px] rounded-full" />

        {/* Tactical Pitch Grid & Line Patterns */}
        <svg 
          className="absolute inset-0 w-full h-full opacity-[0.035]" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="tactical-pitch-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#00A859" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#tactical-pitch-grid)" />
        </svg>

        {/* Subtle Football Stadium Field Markings (Center Circle & Arcs) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[450px] border border-[#00A859]/10 rounded-[100%] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] border border-[#00A859]/5 rounded-[100%] pointer-events-none" />
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00A859]/15 to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 sm:px-10 md:px-14 lg:px-20">
        
        {/* ── HEADER SECTION ── */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-[#00A859]/10 border border-[#00A859]/30 text-[#00A859] font-black text-xs uppercase tracking-[0.25em] mb-6 shadow-lg shadow-[#00A859]/10 backdrop-blur-md"
          >
            <Sparkles size={14} className="animate-pulse" />
            <span>টার্ফ মালিক অনবোর্ডিং</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase mb-5 leading-[1.1]"
          >
            🤝 হয়ে উঠুন একজন <span className="text-[#00A859] font-serif italic lowercase font-normal">TurfPlay</span> পার্টনার
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl text-slate-300 font-semibold tracking-wide"
          >
            মাত্র ৪টি সহজ ধাপে আপনার Turf যুক্ত করুন
          </motion.p>
        </div>

        {/* ── 4-STEP MILESTONE JOURNEY TIMELINE ── */}
        <div className="relative mb-24">
          
          {/* DESKTOP CONNECTING TRACK LINE (Visible on lg: screens) */}
          <div className="hidden lg:block absolute top-[86px] left-[6%] right-[6%] h-[3px] bg-slate-800/80 -z-0 rounded-full overflow-hidden">
            {/* Animated glowing gradient track */}
            <motion.div 
              className="h-full bg-gradient-to-r from-[#00A859] via-[#00FF87] to-[#00A859] rounded-full shadow-[0_0_15px_#00A859]"
              initial={{ width: '0%' }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>

          {/* DESKTOP DIRECTIONAL PULSE ARROWS */}
          <div className="hidden lg:flex justify-between absolute top-[76px] left-[22%] right-[22%] -z-0 pointer-events-none">
            {[1, 2, 3].map((arrowIdx) => (
              <div 
                key={arrowIdx}
                className="w-6 h-6 rounded-full bg-[#0A1118] border border-[#00A859]/50 flex items-center justify-center text-[#00A859] shadow-[0_0_12px_rgba(0,168,89,0.35)]"
              >
                <ChevronRight size={14} className="stroke-[3] animate-pulse" />
              </div>
            ))}
          </div>

          {/* MOBILE & TABLET VERTICAL CONNECTOR (Visible on < lg: screens) */}
          <div className="lg:hidden absolute top-8 bottom-8 left-[38px] w-[2px] bg-gradient-to-b from-[#00A859] via-[#00A859]/50 to-[#00A859]/20 -z-0" />

          {/* MILESTONE CARDS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6 relative z-10">
            {milestones.map((m, idx) => {
              const IconComp = m.icon;
              const isSelected = currentActive === idx;
              const isPassed = currentActive > idx;

              return (
                <motion.div
                  key={m.id}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  onMouseEnter={() => setHoveredStep(idx)}
                  onMouseLeave={() => setHoveredStep(null)}
                  onClick={() => setActiveStep(idx)}
                  className="cursor-pointer group relative flex flex-col"
                >
                  {/* Outer Glow Halo on Active/Hovered Card */}
                  <div 
                    className={`absolute -inset-1.5 rounded-3xl bg-gradient-to-b from-[#00A859]/40 via-[#00A859]/10 to-transparent blur-xl transition-opacity duration-500 pointer-events-none ${
                      isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-60'
                    }`} 
                  />

                  {/* Top Node Indicator Badge (Desktop Center / Mobile Left) */}
                  <div className="flex items-center gap-4 lg:flex-col lg:items-center mb-6">
                    {/* Glowing Milestone Circle Node */}
                    <div className="relative">
                      {/* Pulse Ring */}
                      {isSelected && (
                        <span className="absolute -inset-2 rounded-full bg-[#00A859]/40 animate-ping" />
                      )}

                      <div 
                        className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-xl relative z-10 ${
                          isSelected
                            ? 'bg-[#00A859] text-white scale-110 shadow-[0_0_30px_rgba(0,168,89,0.6)] border-2 border-white/40'
                            : 'bg-slate-900/90 text-[#00A859] border border-[#00A859]/30 group-hover:border-[#00A859] group-hover:bg-[#00A859]/20 group-hover:text-white group-hover:scale-105'
                        }`}
                      >
                        <IconComp size={24} className="stroke-[2.2]" />
                      </div>
                    </div>

                    {/* Step Pill Label on Tablet/Desktop */}
                    <span 
                      className={`text-[11px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full border transition-colors ${
                        isSelected 
                          ? 'bg-[#00A859]/20 text-[#00FF87] border-[#00A859]/40' 
                          : 'bg-slate-900/80 text-slate-400 border-slate-800 group-hover:text-slate-200'
                      }`}
                    >
                      {m.tag}
                    </span>
                  </div>

                  {/* Glassmorphic Milestone Card */}
                  <div 
                    className={`flex-1 rounded-3xl p-6 sm:p-7 transition-all duration-400 backdrop-blur-xl relative overflow-hidden flex flex-col justify-between border ${
                      isSelected
                        ? 'bg-slate-900/90 border-[#00A859]/60 shadow-[0_15px_40px_rgba(0,168,89,0.15)] -translate-y-1.5'
                        : 'bg-slate-900/50 border-slate-800/80 hover:bg-slate-900/80 hover:border-[#00A859]/40 hover:-translate-y-1 shadow-lg'
                    }`}
                  >
                    {/* Big Background Milestone Number */}
                    <div 
                      className={`absolute top-2 right-4 text-6xl font-black font-mono select-none pointer-events-none transition-all duration-500 leading-none ${
                        isSelected 
                          ? 'text-[#00A859]/20 scale-110' 
                          : 'text-slate-800/40 group-hover:text-[#00A859]/15'
                      }`}
                    >
                      {m.stepNumber}
                    </div>

                    {/* Top Content */}
                    <div className="relative z-10">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00A859]" />
                        <span className="text-[10px] font-bold text-[#00A859] uppercase tracking-widest">
                          মাইলস্টোন {m.stepNumber}
                        </span>
                      </div>

                      <h3 className="text-xl font-extrabold text-white tracking-tight uppercase mb-3 group-hover:text-[#00FF87] transition-colors">
                        {m.title}
                      </h3>

                      <p className="text-sm text-slate-300 font-medium leading-relaxed">
                        {m.desc}
                      </p>
                    </div>

                    {/* Bottom Status / Hint indicator */}
                    <div className="relative z-10 pt-6 mt-4 border-t border-slate-800/70 flex items-center justify-between">
                      <span className="text-[11px] font-semibold text-slate-400">
                        {m.hint}
                      </span>
                      <div 
                        className={`w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                          isSelected 
                            ? 'bg-[#00A859] text-white shadow-[0_0_10px_#00A859]' 
                            : 'bg-slate-800 text-slate-400 group-hover:bg-[#00A859]/20 group-hover:text-[#00A859]'
                        }`}
                      >
                        {isSelected ? <Check size={12} className="stroke-[3]" /> : <ChevronRight size={12} />}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ── SUCCESS / CONFIRMATION STATE CARD ── */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Ambient Glow Around Success Area */}
          <div className="absolute -inset-2 bg-gradient-to-r from-[#00A859]/30 via-[#00FF87]/20 to-[#00A859]/30 rounded-3xl blur-2xl opacity-70 pointer-events-none" />

          {/* Success Card Frame */}
          <div className="relative rounded-3xl bg-gradient-to-b from-[#0F172A]/95 to-[#09101A]/95 border border-[#00A859]/40 p-8 sm:p-12 md:p-14 shadow-2xl backdrop-blur-2xl overflow-hidden text-center">
            
            {/* Background Stadium Floodlight Sparkle FX */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-32 bg-[#00A859]/15 blur-3xl rounded-full pointer-events-none" />
            
            {/* Top Celebration Icon */}
            <motion.div 
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-[#00A859]/15 border border-[#00A859]/40 text-[#00FF87] shadow-xl shadow-[#00A859]/20 mb-6 relative group"
            >
              <div className="absolute -inset-2 rounded-3xl bg-[#00A859]/25 blur-lg animate-pulse" />
              <PartyPopper size={40} className="relative z-10 text-[#00FF87] transform group-hover:rotate-12 transition-transform duration-300" />
            </motion.div>

            {/* Success Heading */}
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase mb-4">
              🎉 সব প্রস্তুত!
            </h3>

            {/* Primary Review Text */}
            <p className="text-lg sm:text-xl font-bold text-[#00FF87] tracking-wide mb-4">
              আমাদের টিম আপনার আবেদন পর্যালোচনা করবে।
            </p>

            {/* Secondary Bengali Explanation Text */}
            <p className="text-sm sm:text-base text-slate-300 font-medium max-w-2xl mx-auto leading-relaxed mb-10">
              Approval পাওয়ার পর আপনি TurfPlay-এর Professional/Owner features ব্যবহার করে আপনার Turf Business পরিচালনা করতে পারবেন।
            </p>

            {/* Feature Highlights Pills */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/80 border border-slate-700/80 text-xs font-semibold text-slate-300">
                <CheckCircle2 size={14} className="text-[#00A859]" />
                <span>স্লট ম্যানেজমেন্ট</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/80 border border-slate-700/80 text-xs font-semibold text-slate-300">
                <CheckCircle2 size={14} className="text-[#00A859]" />
                <span>তাৎক্ষণিক ডিজিটাল পেমেন্ট</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/80 border border-slate-700/80 text-xs font-semibold text-slate-300">
                <CheckCircle2 size={14} className="text-[#00A859]" />
                <span>মালিকের ড্যাশবোর্ড অ্যানালিটিক্স</span>
              </div>
            </div>

            {/* Premium CTA Button */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#waitlist"
                className="group relative inline-flex items-center justify-center gap-3 px-10 py-4.5 bg-[#00A859] hover:bg-[#008746] text-white font-extrabold text-sm sm:text-base uppercase tracking-wider rounded-full shadow-xl shadow-[#00A859]/30 hover:shadow-2xl hover:shadow-[#00A859]/50 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300"
              >
                <span>TurfPlay পার্টনার হোন →</span>
              </a>
            </div>

            {/* Trust Footer Note */}
            <div className="mt-8 pt-6 border-t border-slate-800/60 flex items-center justify-center gap-2 text-xs text-slate-400 font-medium">
              <ShieldCheck size={14} className="text-[#00A859]" />
              <span>যাচাইকৃত স্পোর্টস টার্ফ ইনফ্রাস্ট্রাকচার • ১০০% নিরাপদ ও নির্ভরযোগ্য</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
