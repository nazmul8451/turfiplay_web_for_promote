import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Smartphone, LayoutDashboard, Sparkles, CheckCircle2,
  MapPin, Zap, Calendar, Users, CalendarCheck, CreditCard, BarChart3, Cloud, Clock, ShieldCheck 
} from 'lucide-react';
import { 
  MockupScreen1, MockupScreen2, MockupScreen3, 
  PlayerMockupScreen1, PlayerMockupScreen2, PlayerMockupScreen3 
} from '../Mockups/MockupScreens';

export const HowItWorks = () => {
  // Role switcher state: 'player' or 'owner'
  const [activeRole, setActiveRole] = useState<'player' | 'owner'>('player');
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  // Player Steps Data
  const playerFeatures = [
    {
      num: "০১",
      title: "কাছের টার্ফ ও লাইভ স্লট খুঁজুন",
      desc: "ম্যাপ এবং লাইভ ফিল্টারের মাধ্যমে আপনার কাছের সেরা ফুটবল ও ক্রিকেট টার্ফের খালি স্লট এক ক্লিকে খুঁজুন।",
      badge: "ম্যাপ ও ফিল্টার",
      icon: MapPin,
      screen: <PlayerMockupScreen1 />
    },
    {
      num: "০২",
      title: "ঝটপট অনলাইন স্লট বুকিং",
      desc: "বিকাশ, নগদ বা কার্ড দিয়ে পেমেন্ট করে সেকেন্ডের মধ্যে নিশ্চিত করুন আপনার পছন্দের সময়।",
      badge: "ইনস্ট্যান্ট কনফার্মেশন",
      icon: Zap,
      screen: <PlayerMockupScreen2 />
    },
    {
      num: "০৩",
      title: "ডিজিটাল ম্যাচ পাস ও টিকেট",
      desc: "বুকিং নিশ্চিত হওয়ার পর কিউআর কোড যুক্ত ডিজিটাল ম্যাচ টিকিট পান যা সরাসরি টার্ফে স্ক্যান করা যায়।",
      badge: "QR ডিজিটাল পাস",
      icon: Calendar,
      screen: <PlayerMockupScreen2 />
    },
    {
      num: "০৪",
      title: "টিম তৈরি ও প্লেয়ার স্কোয়াড",
      desc: "সহখেলোয়াড় খুঁজুন, ফ্রেন্ডলি ম্যাচের জন্য প্রতিপক্ষ টিম চ্যালেঞ্জ করুন অথবা নতুন কমিউনিটিতে যুক্ত হোন।",
      badge: "প্লেয়ার কমিউনিটি",
      icon: Users,
      screen: <PlayerMockupScreen3 />
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
            
            {/* LEFT: STEP SELECTOR CARDS (4 STEPS) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-3 h-3 rounded-full bg-[#00A859] animate-pulse" />
                <h3 className="text-xl md:text-2xl font-black text-slate-900 uppercase tracking-tight">
                  {activeRole === 'player' ? 'খেলোয়াড়দের ব্যবহার নির্দেশিকা' : 'টার্ফ পরিচালনা ফিচারসমূহ'}
                </h3>
              </div>

              <div className="space-y-3.5">
                {currentFeatures.map((feat, idx) => {
                  const IconComp = feat.icon;
                  const isSelected = activeStepIndex === idx;

                  return (
                    <motion.div
                      key={`${activeRole}-${idx}`}
                      onClick={() => setActiveStepIndex(idx)}
                      onMouseEnter={() => setActiveStepIndex(idx)}
                      whileHover={{ scale: 1.01 }}
                      className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex gap-4 items-start ${
                        isSelected
                          ? 'bg-gradient-to-r from-[#00A859]/10 via-[#00A859]/5 to-transparent border-[#00A859] shadow-md shadow-[#00A859]/10'
                          : 'bg-[#F8FAFC] border-slate-200 hover:border-[#00A859]/40'
                      }`}
                    >
                      {/* Step Number Badge */}
                      <div className={`w-11 h-11 rounded-xl flex items-center justify-center font-black text-sm flex-shrink-0 transition-colors ${
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

            {/* RIGHT: INTERACTIVE PHONE MOCKUP PREVIEW */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="relative w-full max-w-[280px] sm:max-w-[300px] h-[540px] bg-slate-950 rounded-[44px] p-3 border-4 border-slate-800 shadow-2xl overflow-hidden flex flex-col justify-between">
                
                {/* Top Notch Cutout */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-5 bg-slate-950 rounded-b-xl z-30 flex items-center justify-center">
                  <div className="w-10 h-1.5 bg-slate-800 rounded-full" />
                </div>

                {/* Animated Screen Content */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${activeRole}-${activeStepIndex}`}
                    initial={{ opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.94 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full rounded-[32px] overflow-hidden bg-[#0A0F0D]"
                  >
                    {currentFeatures[activeStepIndex].screen}
                  </motion.div>
                </AnimatePresence>

                {/* Screen Caption Badge */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 bg-slate-900/90 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full text-center shadow-lg">
                  <span className="text-[10px] font-black text-brand-green uppercase tracking-wider">
                    {activeRole === 'player' ? 'খেলোয়াড় অ্যাপ ডেমো' : 'মালিক ড্যাশবোর্ড ডেমো'} • {currentFeatures[activeStepIndex].num}
                  </span>
                </div>
              </div>
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
    </section>
  );
};



