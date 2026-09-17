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
      className="relative py-20 lg:py-28 bg-white text-slate-900 overflow-hidden selection:bg-[#00A859] selection:text-white bg-grid"
    >
      {/* ── AMBIENT BACKGROUND ACCENTS ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft emerald glow top-center */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[850px] h-[550px] bg-gradient-to-b from-[#00A859]/10 via-[#00A859]/4 to-transparent blur-[140px] rounded-full" />
        
        {/* Pitch light beam accents */}
        <div className="absolute top-1/3 -left-40 w-[450px] h-[450px] bg-[#00A859]/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-10 -right-40 w-[500px] h-[500px] bg-[#00A859]/6 blur-[130px] rounded-full" />

        {/* Subtle Pitch Circular Markings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[450px] border border-[#00A859]/8 rounded-[100%] pointer-events-none" />
      </div>

      <div className="relative z-10 container-fluid">
        
        {/* ── HEADER SECTION ── */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#00A859]/10 border border-[#00A859]/25 text-[#00A859] font-extrabold text-[11px] sm:text-xs uppercase tracking-[0.18em] sm:tracking-[0.2em] mb-3 sm:mb-4 shadow-sm"
          >
            <Sparkles size={14} className="animate-pulse" />
            <span>টার্ফ মালিক অনবোর্ডিং</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight uppercase mb-3 leading-snug"
          >
            🤝 হয়ে উঠুন একজন <span className="text-[#00A859] font-serif italic lowercase font-normal">TurfPlay</span> পার্টনার
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-lg md:text-xl text-slate-600 font-bold tracking-wide"
          >
            মাত্র ৪টি সহজ ধাপে আপনার Turf যুক্ত করুন
          </motion.p>
        </div>

        {/* ── 4-STEP MILESTONE JOURNEY TIMELINE ── */}
        <div className="relative mb-14 sm:mb-20">
          
          {/* DESKTOP CONNECTING TRACK LINE */}
          <div className="hidden lg:block absolute top-[82px] left-[8%] right-[8%] h-[3px] bg-slate-200 -z-0 rounded-full overflow-hidden">
            {/* Animated glowing gradient track */}
            <motion.div 
              className="h-full bg-gradient-to-r from-[#00A859] via-[#00C853] to-[#00A859] rounded-full shadow-[0_0_12px_#00A859]"
              initial={{ width: '0%' }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>

          {/* DESKTOP DIRECTIONAL PULSE ARROWS */}
          <div className="hidden lg:flex justify-between absolute top-[72px] left-[23%] right-[23%] -z-0 pointer-events-none">
            {[1, 2, 3].map((arrowIdx) => (
              <div 
                key={arrowIdx}
                className="w-6 h-6 rounded-full bg-white border border-[#00A859]/40 flex items-center justify-center text-[#00A859] shadow-sm shadow-[#00A859]/15"
              >
                <ChevronRight size={13} className="stroke-[3] animate-pulse" />
              </div>
            ))}
          </div>

          {/* MILESTONE CARDS GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative z-10">
            {milestones.map((m, idx) => {
              const IconComp = m.icon;
              const isSelected = currentActive === idx;

              return (
                <motion.div
                  key={m.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.12 }}
                  onMouseEnter={() => setHoveredStep(idx)}
                  onMouseLeave={() => setHoveredStep(null)}
                  onClick={() => setActiveStep(idx)}
                  className="cursor-pointer group relative flex flex-col"
                >
                  {/* Outer Glow Halo on Active/Hovered Card */}
                  <div 
                    className={`absolute -inset-1 rounded-3xl bg-gradient-to-b from-[#00A859]/20 via-[#00A859]/5 to-transparent blur-lg transition-opacity duration-300 pointer-events-none ${
                      isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-60'
                    }`} 
                  />

                  {/* Top Node Indicator Badge */}
                  <div className="flex items-center gap-3 sm:gap-4 lg:flex-col lg:items-center mb-4 sm:mb-5">
                    {/* Glowing Milestone Circle Node */}
                    <div className="relative shrink-0">
                      {/* Pulse Ring */}
                      {isSelected && (
                        <span className="absolute -inset-2 rounded-full bg-[#00A859]/30 animate-ping" />
                      )}

                      <div 
                        className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center transition-all duration-300 relative z-10 ${
                          isSelected
                            ? 'bg-[#00A859] text-white scale-105 sm:scale-110 shadow-lg shadow-[#00A859]/40 border-2 border-white'
                            : 'bg-white text-[#00A859] border-2 border-slate-200 group-hover:border-[#00A859] group-hover:bg-[#00A859]/10 group-hover:scale-105 shadow-sm'
                        }`}
                      >
                        <IconComp size={20} className="stroke-[2.3]" />
                      </div>
                    </div>

                    {/* Step Pill Label */}
                    <span 
                      className={`text-[10px] sm:text-[11px] font-black uppercase tracking-[0.18em] sm:tracking-[0.2em] px-3 py-1 rounded-full border transition-colors ${
                        isSelected 
                          ? 'bg-[#00A859]/15 text-[#00A859] border-[#00A859]/35 font-extrabold' 
                          : 'bg-slate-100 text-slate-500 border-slate-200 group-hover:text-[#00A859] group-hover:border-[#00A859]/30'
                      }`}
                    >
                      {m.tag}
                    </span>
                  </div>

                  {/* Clean White & Green Milestone Card */}
                  <div 
                    className={`flex-1 rounded-2xl p-4 sm:p-6 transition-all duration-300 relative overflow-hidden flex flex-col justify-between border ${
                      isSelected
                        ? 'bg-white border-2 border-[#00A859] shadow-xl shadow-[#00A859]/15 -translate-y-1'
                        : 'bg-white/95 border-slate-200 hover:border-[#00A859]/60 hover:bg-slate-50/90 shadow-md shadow-slate-200/50 hover:shadow-lg hover:-translate-y-0.5'
                    }`}
                  >
                    {/* Big Background Milestone Number */}
                    <div 
                      className={`absolute top-2 right-3 text-4xl sm:text-5xl font-black font-mono select-none pointer-events-none transition-all duration-300 leading-none ${
                        isSelected 
                          ? 'text-[#00A859]/15 scale-105' 
                          : 'text-slate-100 group-hover:text-[#00A859]/10'
                      }`}
                    >
                      {m.stepNumber}
                    </div>

                    {/* Card Content */}
                    <div className="relative z-10">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#00A859]" />
                        <span className="text-[9px] sm:text-[10px] font-bold text-[#00A859] uppercase tracking-widest">
                          মাইলস্টোন {m.stepNumber}
                        </span>
                      </div>

                      <h3 className="text-base sm:text-lg font-black text-slate-900 tracking-tight uppercase mb-1.5 group-hover:text-[#00A859] transition-colors">
                        {m.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                        {m.desc}
                      </p>
                    </div>

                    {/* Bottom Status / Hint indicator */}
                    <div className="relative z-10 pt-3 sm:pt-4 mt-3 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-[10px] sm:text-[11px] font-semibold text-slate-500 truncate mr-2">
                        {m.hint}
                      </span>
                      <div 
                        className={`w-5 h-5 sm:w-6 sm:h-6 shrink-0 rounded-full flex items-center justify-center transition-all ${
                          isSelected 
                            ? 'bg-[#00A859] text-white shadow-sm' 
                            : 'bg-slate-100 text-slate-400 group-hover:bg-[#00A859]/10 group-hover:text-[#00A859]'
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
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Ambient Soft Glow */}
          <div className="absolute -inset-2 bg-gradient-to-r from-[#00A859]/20 via-[#00A859]/10 to-[#00A859]/20 rounded-3xl blur-xl opacity-60 pointer-events-none" />

          {/* Clean White Card Frame */}
          <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#00A859]/8 via-[#00A859]/3 to-white border border-[#00A859]/30 p-6 sm:p-10 md:p-12 shadow-xl shadow-[#00A859]/8 overflow-hidden text-center">
            
            {/* Top Celebration Icon */}
            <motion.div 
              initial={{ scale: 0.85 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="inline-flex items-center justify-center w-14 h-14 sm:w-20 sm:h-20 rounded-2xl bg-[#00A859]/15 border border-[#00A859]/30 text-[#00A859] shadow-md shadow-[#00A859]/15 mb-4 sm:mb-5 relative group"
            >
              <PartyPopper size={28} className="relative z-10 text-[#00A859] transform group-hover:rotate-12 transition-transform duration-300 sm:w-[34px] sm:h-[34px]" />
            </motion.div>

            {/* Success Heading */}
            <h3 className="text-xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight uppercase mb-2">
              🎉 সব প্রস্তুত!
            </h3>

            {/* Primary Review Text */}
            <p className="text-sm sm:text-lg font-bold text-[#00A859] tracking-wide mb-2 sm:mb-3">
              আমাদের টিম আপনার আবেদন পর্যালোচনা করবে।
            </p>

            {/* Secondary Explanation Text */}
            <p className="text-xs sm:text-sm md:text-base text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed mb-6 sm:mb-8">
              Approval পাওয়ার পর আপনি TurfPlay-এর Professional/Owner features ব্যবহার করে আপনার Turf Business পরিচালনা করতে পারবেন।
            </p>

            {/* Feature Highlights Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-6 sm:mb-8">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-[11px] sm:text-xs font-bold text-slate-700 shadow-sm">
                <CheckCircle2 size={13} className="text-[#00A859]" />
                <span>স্লট ম্যানেজমেন্ট</span>
              </div>
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-[11px] sm:text-xs font-bold text-slate-700 shadow-sm">
                <CheckCircle2 size={13} className="text-[#00A859]" />
                <span>তাৎক্ষণিক ডিজিটাল পেমেন্ট</span>
              </div>
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-[11px] sm:text-xs font-bold text-slate-700 shadow-sm">
                <CheckCircle2 size={13} className="text-[#00A859]" />
                <span>মালিকের ড্যাশবোর্ড অ্যানালিটিক্স</span>
              </div>
            </div>

            {/* Premium CTA Button */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#waitlist"
                className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 bg-[#00A859] hover:bg-[#008f4c] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider rounded-full shadow-lg shadow-[#00A859]/25 hover:shadow-xl hover:shadow-[#00A859]/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                <span>TurfPlay পার্টনার হোন →</span>
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
