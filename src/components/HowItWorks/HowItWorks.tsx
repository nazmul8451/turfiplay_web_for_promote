import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Play, Smartphone, LayoutDashboard, Sparkles, ExternalLink,
  MapPin, Zap, Calendar, Users, CalendarCheck, CreditCard, BarChart3, Cloud, Clock 
} from 'lucide-react';

export const HowItWorks = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [thumbnailUrl, setThumbnailUrl] = useState('https://img.youtube.com/vi/GTT7HWXtGRg/maxresdefault.jpg');

  const YOUTUBE_SHORT_ID = 'GTT7HWXtGRg';
  const YOUTUBE_SHORT_URL = 'https://youtube.com/shorts/GTT7HWXtGRg?feature=share';
  const YOUTUBE_EMBED_URL = `https://www.youtube.com/embed/${YOUTUBE_SHORT_ID}?autoplay=1&rel=0&modestbranding=1&playsinline=1`;

  const userSteps = [
    { 
      title: "আশেপাশের টার্ফ খুঁজুন", 
      desc: "ম্যাপ, ফিল্টার ও রিয়েল-টাইম স্লট দেখে আপনার পছন্দের সেরা টার্ফটি খুঁজুন।",
      icon: MapPin 
    },
    { 
      title: "সহজ ও দ্রুত বুকিং", 
      desc: "কয়েক সেকেন্ডের মধ্যে আপনার পছন্দের স্লট বুক করুন ডিজিটাল পেমেন্টের মাধ্যমে।",
      icon: Zap 
    },
    { 
      title: "ম্যাচ ও টিকেট পরিচালনা", 
      desc: "আসন্ন ম্যাচ, বুকিং হিস্ট্রি ও ডিজিটাল টিকেট এক জায়গায় নিরাপদে রাখুন।",
      icon: Calendar 
    },
    { 
      title: "টিম তৈরি ও জয়েন করুন", 
      desc: "খেলার সঙ্গী খুঁজুন, ম্যাচে যুক্ত হন অথবা নিজের ফুটবল কমিউনিটি গড়ে তুলুন।",
      icon: Users 
    }
  ];

  const ownerSteps = [
    { 
      title: "স্মার্ট টার্ফ ড্যাশবোর্ড", 
      desc: "টার্ফের প্রোফাইল, মূল্য তালিকা, সুযোগ-সুবিধা ও ফাঁকা স্লট নিয়ন্ত্রণ করুন খুব সহজে।",
      icon: LayoutDashboard 
    },
    { 
      title: "বুকিং ম্যানেজমেন্ট", 
      desc: "বুকিং গ্রহণ করুন, ডাবল বুকিংয়ের ঝামেলা এড়ান এবং প্রতিটি স্লট রাখুন নিখুঁত।",
      icon: CalendarCheck 
    },
    { 
      title: "পেমেন্ট ও রাজস্ব হিসাব", 
      desc: "দৈনিক আয় ট্র্যাক করুন, নিরাপদে পেমেন্ট গ্রহণ করুন ও আর্থিক গতিবিধি পর্যবেক্ষণ করুন।",
      icon: CreditCard 
    },
    { 
      title: "ব্যবসা অ্যানালিটিক্স", 
      desc: "পিক আওয়ার, কাস্টমার ট্রেন্ড ও রাজস্ব প্রবৃদ্ধি বিশ্লেষণ করে ব্যবসা স্কেল করুন।",
      icon: BarChart3 
    }
  ];

  const coreLogics = [
    { 
      title: "নিরাপদ ডিজিটাল পেমেন্ট", 
      desc: "বিকাশ, নগদ ও ব্যাংক কার্ডের মাধ্যমে দ্রুত ও বিশ্বস্ত লেনদেন।", 
      icon: CreditCard 
    },
    { 
      title: "রিয়েল-টাইম ক্লাউড সিঙ্ক", 
      desc: "আপনার প্রতিটি বুকিং সকল ডিভাইসে সাথে সাথেই আপডেট থাকবে।", 
      icon: Cloud 
    },
    { 
      title: "২৪/৭ নির্ভরযোগ্যতা", 
      desc: "টার্ফ ব্যবসা নিরবচ্ছিন্নভাবে সচল রাখতে শক্তিশালী ক্লাউড প্রযুক্তি।", 
      icon: Clock 
    }
  ];

  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-[#FFFFFF] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#00A859]/5 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00A859]/10 border border-[#00A859]/20 text-[#00A859] font-extrabold text-xs uppercase tracking-wider mb-4"
          >
            <Sparkles size={14} />
            <span>অ্যাপ প্রিভিউ ও লাইভ ডেমো</span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight leading-tight">
            TurfPlay কীভাবে কাজ করে <span className="font-serif italic text-[#00A859] font-normal">দেখুন।</span>
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto text-xs sm:text-sm md:text-base font-bold leading-relaxed tracking-wider">
            খেলোয়াড় এবং টার্ফ মালিকদের মধ্যে সরাসরি সংযোগ
          </p>
        </div>

        {/* Demo Video Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative max-w-5xl mx-auto mb-20 group"
        >
          {/* Ambient Glow */}
          <div className="absolute -inset-2 bg-gradient-to-r from-[#00A859]/30 via-[#00A859]/10 to-[#00A859]/30 rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition duration-700 pointer-events-none" />

          {/* Video Container */}
          <div className="relative rounded-3xl overflow-hidden bg-slate-950 border border-slate-800/80 shadow-2xl aspect-video flex items-center justify-center">
            {isPlaying ? (
              <iframe
                className="w-full h-full border-0"
                src={YOUTUBE_EMBED_URL}
                title="TurfPlay Demo Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : (
              <>
                {/* Video Thumbnail */}
                <img
                  src={thumbnailUrl}
                  alt="TurfPlay Video Thumbnail"
                  onError={() => setThumbnailUrl('https://img.youtube.com/vi/GTT7HWXtGRg/hqdefault.jpg')}
                  className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                />

                {/* Dark & Brand Gradient Overlay */}
                <div 
                  onClick={() => setIsPlaying(true)}
                  className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-slate-950/60 backdrop-blur-[2px] flex flex-col items-center justify-center cursor-pointer transition-all duration-300 group-hover:backdrop-blur-0"
                >
                  {/* Glowing Animated Play Button */}
                  <div className="relative">
                    <div className="absolute -inset-4 rounded-full bg-[#00A859]/40 blur-xl animate-pulse" />
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-[#00A859] text-white flex items-center justify-center shadow-xl shadow-[#00A859]/40 hover:scale-110 hover:bg-[#008746] transition-all duration-300 group-hover:shadow-2xl">
                      <Play size={30} className="ml-1 fill-white" />
                    </div>
                  </div>

                  <div className="mt-4 sm:mt-5 flex flex-col items-center gap-1.5 sm:gap-2 text-center px-4">
                    <span className="text-xs sm:text-sm font-extrabold text-white tracking-wider bg-slate-900/90 backdrop-blur-md px-5 sm:px-6 py-2 sm:py-2.5 rounded-full border border-white/10 shadow-lg">
                      ক্লিক করে ডেমো ভিডিও দেখুন
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-semibold text-slate-300 tracking-wider">
                      YouTube Short Preview • TurfPlay Official
                    </span>
                  </div>
                </div>
              </>
            )}

            {/* Quick Action Link to YouTube Shorts */}
            <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-20 flex items-center gap-2">
              <a
                href={YOUTUBE_SHORT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-full bg-slate-900/80 hover:bg-[#00A859] text-white text-[11px] sm:text-xs font-bold backdrop-blur-md border border-white/10 shadow-md hover:scale-105 transition-all duration-200"
              >
                <span>YouTube Shorts</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Feature Grid: Players & Turf Owners */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 mb-16">
          {/* User Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-3 bg-[#00A859]/10 border border-[#00A859]/20 px-5 py-2 rounded-full">
              <Smartphone size={16} className="text-[#00A859]" />
              <span className="text-xs font-extrabold text-[#00A859] uppercase tracking-wider">খেলোয়াড়দের জন্য</span>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
              {userSteps.map((s, i) => {
                const IconComponent = s.icon;
                return (
                  <div 
                    key={i} 
                    className="relative glass-card !p-5 sm:!p-6 cursor-pointer group hover:border-[#00A859]/40 hover:shadow-lg hover:shadow-[#00A859]/10 transition-all duration-300 overflow-hidden bg-white flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-[#00A859]/10 flex items-center justify-center mb-4 border border-[#00A859]/20 group-hover:bg-[#00A859] transition-all duration-300">
                        <IconComponent className="w-5 h-5 text-[#00A859] group-hover:text-white transition-colors" />
                      </div>
                      <h4 className="text-base font-extrabold text-slate-900 mb-2 tracking-tight group-hover:text-[#00A859] transition-colors">{s.title}</h4>
                      <p className="text-xs text-slate-600 leading-relaxed font-medium">{s.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Owner Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-3 bg-[#00A859]/10 border border-[#00A859]/20 px-5 py-2 rounded-full">
              <LayoutDashboard className="text-[#00A859]" size={16} />
              <span className="text-xs font-extrabold text-[#00A859] uppercase tracking-wider">টার্ফ মালিকদের জন্য</span>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
              {ownerSteps.map((s, i) => {
                const IconComponent = s.icon;
                return (
                  <div 
                    key={i} 
                    className="relative glass-card !p-5 sm:!p-6 cursor-pointer group hover:border-[#00A859]/40 hover:shadow-lg hover:shadow-[#00A859]/10 transition-all duration-300 overflow-hidden bg-white flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-[#00A859]/10 flex items-center justify-center mb-4 border border-[#00A859]/20 group-hover:bg-[#00A859] transition-all duration-300">
                        <IconComponent className="w-5 h-5 text-[#00A859] group-hover:text-white transition-colors" />
                      </div>
                      <h4 className="text-base font-extrabold text-slate-900 mb-2 tracking-tight group-hover:text-[#00A859] transition-colors">{s.title}</h4>
                      <p className="text-xs text-slate-600 leading-relaxed font-medium">{s.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Core Intelligence Footer / Ecosystem Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card !p-6 sm:!p-8 border border-[#00A859]/20 shadow-sm bg-white"
        >
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {coreLogics.map((log, i) => {
              const IconComponent = log.icon;
              return (
                <div key={i} className="flex gap-4 items-start group">
                  <div className="p-3 bg-[#00A859]/10 rounded-xl border border-[#00A859]/20 flex-shrink-0 group-hover:bg-[#00A859] transition-all">
                    <IconComponent className="text-[#00A859] group-hover:text-white transition-colors" size={20} />
                  </div>
                  <div>
                    <h5 className="text-base font-extrabold text-slate-900 tracking-tight mb-1 group-hover:text-[#00A859] transition-colors">{log.title}</h5>
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


