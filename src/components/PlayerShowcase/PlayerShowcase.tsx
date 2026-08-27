import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Smartphone, MapPin, Zap, Star, ShieldCheck, Calendar, 
  Maximize2, X, ChevronRight, CheckCircle2, Eye, Sparkles 
} from 'lucide-react';

import playerHome1Img from '../../assets/images/homepage1.png';
import playerHome2Img from '../../assets/images/homepage2.png';
import playerMapImg from '../../assets/images/mapscreen.png';
import playerMock1Img from '../../assets/images/mockup1.jpg';
import playerMock2Img from '../../assets/images/mockup2.jpg';
import playerMock3Img from '../../assets/images/mockup3.jpg';

interface ScreenItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  image: string;
  icon: React.ElementType;
  description: string;
  highlights: string[];
}

export const PlayerShowcase: React.FC = () => {
  const [selectedScreen, setSelectedScreen] = useState<ScreenItem | null>(null);

  const screens: ScreenItem[] = [
    {
      id: 'home1',
      title: 'হোম ও স্পোর্টস ব্রাউজার',
      subtitle: 'পছন্দের খেলা ও কাছের টার্ফ সার্চ',
      category: 'হোম স্ক্রিন',
      image: playerHome1Img,
      icon: Smartphone,
      description: 'খেলোয়াড়দের জন্য ডিজাইন করা ফ্রন্ট হোম স্ক্রিন। ফুটবল, ক্রিকেট, ব্যাডমিন্টন বা বাস্কেটবল—যেকোনো খেলার টার্ফ এক ট্যাপে খুঁজুন।',
      highlights: ['সার্চ ও স্পোর্টস ফিল্টারিং', 'আপকামিং ম্যাচ টাইমকার্ড', 'বিজ্ঞপ্তি ও অ্যালার্ট সেন্টার']
    },
    {
      id: 'map',
      title: 'লাইভ জিও-ম্যাপ এক্সপ্লোরার',
      subtitle: 'ম্যাপে টার্ফ লোকেশন ও ভাড়া',
      category: 'ম্যাপ ইউআই',
      image: playerMapImg,
      icon: MapPin,
      description: 'গুগল ম্যাপ ইন্টিগ্রেশনের মাধ্যমে ঢাকা ও আশেপাশের সকল টার্ফের অবস্থান, ম্যাপ ডিরেকশন ও প্রতি ঘণ্টার ভাড়া সরাসরি ম্যাপ থেকেই দেখা যায়।',
      highlights: ['গুগল ম্যাপে লাইভ পিন', 'স্পোর্টস ভিত্তিক ফিল্টার', 'এক ক্লিকে গেট ডিরেকশন']
    },
    {
      id: 'home2',
      title: 'নিয়্যারবাই ও ট্রেন্ডিং টার্ফ',
      subtitle: 'দূরত্ব ও পারকিং সুবিধাসহ তালিকা',
      category: 'টার্ফ ফিড',
      image: playerHome2Img,
      icon: Zap,
      description: 'আপনার বর্তমান লোকেশন থেকে কত দূরে টার্ফ অবস্থিত, পারকিং, ওয়াশরুম সুবিধা এবং লাইভ এভেলেবল বুকিং স্লট পরিষ্কারভাবে প্রদর্শিত হয়।',
      highlights: ['জিআইএস দূরত্ব ট্র্যাকিং', 'সুযোগ-সুবিধা ট্যাগসমূহ', 'ট্রেন্ডিং অ্যান্ড মোস্ট বুকড']
    },
    {
      id: 'mock1',
      title: 'ফিল্ড ডিটেইলস ও স্লট লক',
      subtitle: 'মেইন ফুটবল ফিল্ড ও ফ্লাডলাইট',
      category: 'স্লট বুকিং',
      image: playerMock1Img,
      icon: Calendar,
      description: 'টার্ফের বিস্তারিত কভারেজ, মাঠের সাইজ (যেমন: ৬০x৪০ মি.), কৃত্রিম ঘাসের কোয়ালিটি ও ফ্লাডলাইট লাইটিং সুবিধা দেখে মুহূর্তেই Book Now ক্লিক করুন।',
      highlights: ['ফিল্ড স্পেসিফিকেশন', 'ইনস্ট্যান্ট স্লট সিলেক্টর', 'লাইভ বিডিটি প্রাইসিং']
    },
    {
      id: 'mock2',
      title: 'প্লেয়ার প্রোফাইল ড্যাশবোর্ড',
      subtitle: 'অ্যাক্টিভ বুকিং ও স্ট্যাটস',
      category: 'ড্যাশবোর্ড',
      image: playerMock2Img,
      icon: Star,
      description: 'খেলোয়ারদের পারসোনাল ড্যাশবোর্ড—এখানে মোট বুকিং সংখ্যা, গড় প্লেয়ার রেটিং এবং পছন্দনীয় টার্ফ তালিকা সংরক্ষণের সুবিধা রয়েছে।',
      highlights: ['খেলোয়াড় বুকিং স্ট্যাটস', 'সেভ করা পছন্দের টার্ফ', 'ডার্ক মোড প্রিমিয়াম থিম']
    },
    {
      id: 'mock3',
      title: 'ভেরিফাইড টার্ফ রিভিউ',
      subtitle: 'খেলোয়াড়দের লাইভ রেটিং ও মন্তব্য',
      category: 'রিভিউ সিস্টেম',
      image: playerMock3Img,
      icon: ShieldCheck,
      description: 'অন্যান্য সহখেলোয়াড়দের দেওয়া ৪.৮/৫ স্টার রেটিং ও সচিত্র রিভিউ পড়ে যেকোনো টার্ফের কোয়ালিটি সম্পর্কে ১০০% নিশ্চিত হোন।',
      highlights: ['ভেরিফাইড বুকিং রিভিউ', '৫-স্টার রেটিং ব্রেকডাউন', 'প্লেয়ার ফিডব্যাক ও হেল্পফুল ভোট']
    }
  ];

  return (
    <section id="player-screens" className="py-20 lg:py-32 bg-[#F6FBF8] relative overflow-hidden">
      {/* Background Ambient Spheres */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-[#00A859]/5 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#00A859]/8 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00A859]/10 border border-[#00A859]/20 text-[#00A859] font-extrabold text-xs uppercase tracking-widest mb-4"
          >
            <Sparkles size={14} />
            <span>খেলোয়াড় অ্যাপ ইন্টারফেস</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-4 tracking-tight uppercase">
            <span className="font-serif italic text-[#00A859] lowercase font-normal">TurfPlay</span> প্লেয়ার অ্যাপ স্ক্রিনসমূহ
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm md:text-base font-bold leading-relaxed uppercase tracking-[0.18em]">
            বাংলাদেশের সেরা ক্রীড়াপ্রেমীদের জন্য ডিজাইন করা সবচেয়ে আধুনিক মোবাইল ইউআই
          </p>
        </div>

        {/* Screens Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {screens.map((screen, idx) => {
            const IconComp = screen.icon;
            return (
              <motion.div
                key={screen.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group glass-card bg-white border border-[#00A859]/15 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:border-[#00A859]/40 transition-all duration-500 flex flex-col justify-between"
              >
                {/* Phone Preview Container */}
                <div className="p-6 bg-gradient-to-b from-slate-100 to-slate-50 relative flex items-center justify-center overflow-hidden h-[340px]">
                  
                  {/* Category Tag */}
                  <div className="absolute top-4 left-4 z-20 bg-slate-900/80 backdrop-blur-md border border-white/10 text-white text-[10px] font-black uppercase px-3 py-1 rounded-full flex items-center gap-1.5">
                    <IconComp size={12} className="text-[#00A859]" />
                    <span>{screen.category}</span>
                  </div>

                  {/* Quick Expand Button */}
                  <button
                    onClick={() => setSelectedScreen(screen)}
                    className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white/90 shadow-md text-slate-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center hover:bg-[#00A859] hover:text-white"
                    title="ফুল স্ক্রিন দেখুন"
                  >
                    <Maximize2 size={14} />
                  </button>

                  {/* Phone Mockup Frame */}
                  <div 
                    onClick={() => setSelectedScreen(screen)}
                    className="relative w-[180px] sm:w-[200px] h-[360px] translate-y-6 group-hover:translate-y-2 transition-transform duration-500 cursor-pointer shadow-2xl rounded-[32px] border-4 border-slate-900 overflow-hidden bg-slate-950"
                  >
                    {/* Camera Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-4 bg-slate-950 rounded-b-lg z-30 flex items-center justify-center">
                      <div className="w-8 h-1 bg-slate-800 rounded-full" />
                    </div>

                    <img 
                      src={screen.image} 
                      alt={screen.title}
                      className="w-full h-full object-cover object-top"
                      loading="lazy"
                    />

                    {/* Subtle Hover Overlay */}
                    <div className="absolute inset-0 bg-[#00A859]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-slate-900/80 text-white flex items-center justify-center shadow-lg border border-white/20">
                        <Eye size={18} className="text-[#00A859]" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Info */}
                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="text-xl font-black text-slate-900 mb-1 tracking-tight uppercase group-hover:text-[#00A859] transition-colors">
                      {screen.title}
                    </h3>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-3">
                      {screen.subtitle}
                    </p>
                    <p className="text-xs text-slate-600 font-medium leading-relaxed mb-4 line-clamp-2">
                      {screen.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-[11px] font-extrabold text-[#00A859]">
                      <CheckCircle2 size={13} />
                      <span>{screen.highlights[0]}</span>
                    </div>
                    <button
                      onClick={() => setSelectedScreen(screen)}
                      className="text-xs font-black text-slate-700 hover:text-[#00A859] flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                    >
                      <span>বিস্তারিত</span>
                      <ChevronRight size={14} />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {selectedScreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedScreen(null)}
            className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl border border-white/20 grid lg:grid-cols-12 max-h-[90vh]"
            >
              {/* Left Phone Preview */}
              <div className="lg:col-span-6 bg-slate-950 p-6 flex items-center justify-center overflow-y-auto max-h-[500px] lg:max-h-[650px] relative">
                <div className="relative w-[240px] sm:w-[270px] min-h-[480px] rounded-[40px] border-4 border-slate-800 overflow-hidden shadow-2xl bg-black">
                  {/* Top Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-slate-950 rounded-b-xl z-30 flex items-center justify-center">
                    <div className="w-10 h-1.5 bg-slate-800 rounded-full" />
                  </div>
                  <img
                    src={selectedScreen.image}
                    alt={selectedScreen.title}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>

              {/* Right Content Details */}
              <div className="lg:col-span-6 p-8 flex flex-col justify-between overflow-y-auto max-h-[500px] lg:max-h-[650px]">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[10px] font-black uppercase bg-[#00A859]/10 text-[#00A859] px-3 py-1 rounded-full border border-[#00A859]/20">
                      {selectedScreen.category}
                    </span>
                    <button
                      onClick={() => setSelectedScreen(null)}
                      className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors"
                    >
                      <X size={18} />
                    </button>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-2 uppercase tracking-tight">
                    {selectedScreen.title}
                  </h3>
                  <p className="text-xs font-bold text-[#00A859] uppercase tracking-wider mb-6">
                    {selectedScreen.subtitle}
                  </p>

                  <p className="text-slate-600 text-sm font-medium leading-relaxed mb-6">
                    {selectedScreen.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    <h4 className="text-xs font-black text-slate-900 uppercase tracking-widest">প্রধান সুবিধাসমূহ:</h4>
                    {selectedScreen.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 bg-slate-50 border border-slate-200/80 rounded-xl">
                        <CheckCircle2 size={16} className="text-[#00A859]" />
                        <span className="text-xs font-bold text-slate-800">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-500 uppercase">TurfPlay Mobile App</span>
                  <button
                    onClick={() => setSelectedScreen(null)}
                    className="px-6 py-2.5 bg-[#00A859] text-white text-xs font-black rounded-full shadow-md hover:bg-[#008746] transition-colors uppercase tracking-wider"
                  >
                    বন্ধ করুন
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
