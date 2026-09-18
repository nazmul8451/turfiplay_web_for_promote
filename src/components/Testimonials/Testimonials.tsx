import React from 'react';
import { motion } from 'motion/react';
import { 
  Star, 
  ShieldCheck, 
  MapPin, 
  TrendingUp, 
  Zap, 
  Quote, 
  Sparkles, 
  CheckCircle2, 
  Users, 
  Building2 
} from 'lucide-react';

interface CaseStudy {
  id: string;
  title: string;
  speaker: string;
  role: string;
  location: string;
  category: string;
  metric: string;
  metricLabel: string;
  quoteSnippet: string;
  initials: string;
  badge: string;
  rating: number;
}

interface TurfPartner {
  id: string;
  turfName: string;
  ownerName: string;
  location: string;
  metric: string;
  rating: number;
  monthlyMatches: string;
  quote: string;
  initials: string;
}

interface PlayerStory {
  id: string;
  name: string;
  role: string;
  location: string;
  completedMatches: string;
  rating: number;
  badge: string;
  quote: string;
  initials: string;
}

export const Testimonials = () => {
  // ── 1. TOP FEATURED CASE STUDIES & IMPACT STORIES ──
  const caseStudies: CaseStudy[] = [
    {
      id: 'story-1',
      title: 'কীভাবে ডাবল-বুকিং সমস্যা ০% এ নামিয়ে আনল পিচ ৫৬?',
      speaker: 'রাফাত হাসান',
      role: 'টার্ফ ওনার, পিচ ৫৬ অ্যারেনা',
      location: 'ধানমন্ডি, ঢাকা',
      category: 'টার্ফ কেস স্টাডি',
      metric: '+৩৮%',
      metricLabel: 'রেভিনিউ বৃদ্ধি',
      quoteSnippet: 'কাগজের খাতার ডাবল বুকিং নিয়ে প্রতিদিন কাস্টমারদের সাথে কথা কাটাকাটি হতো। TurfPlay আসার পর শতভাগ অটোমেশন পেয়েছি।',
      initials: 'রা',
      badge: 'ভেরিফাইড পার্টনার',
      rating: 5
    },
    {
      id: 'story-2',
      title: 'রাত ১২টায় মাত্র ১০ সেকেন্ডে স্লট লক করার বাস্তব অভিজ্ঞতা',
      speaker: 'আবরার ফাইয়াজ',
      role: 'টিম ক্যাপ্টেন, ব্ল্যাক হকস',
      location: 'মিরপুর-১, ঢাকা',
      category: 'প্লেয়ার রিভিউ',
      metric: '১০ সে.',
      metricLabel: 'ইনস্ট্যান্ট স্লট লক',
      quoteSnippet: 'রাতে ফ্রেন্ডরা খেলতে চাইলে আগে কাউকে ফোনে পেতাম না। এখন ম্যাপে স্লট দেখে এক ক্লিকে বুকিং আর ডিজিটাল টিকেট পেয়ে যাই।',
      initials: 'আ',
      badge: 'ভেরিফাইড ক্যাপ্টেন',
      rating: 5
    },
    {
      id: 'story-3',
      title: 'কাগজের খাতার ঝামেলা শেষ: ১ ক্লিকে দিনশেষে দৈনিক অডিট',
      speaker: 'ইমতিয়াজ আহমেদ',
      role: 'ম্যানেজার, কিকঅফ অ্যারেনা',
      location: 'উত্তরা সেক্টর ৭',
      category: 'টার্ফ অপারেশনস',
      metric: '১ ক্লিক',
      metricLabel: 'দৈনিক সেলস অডিট',
      quoteSnippet: 'আজকে মোট কত আয় হলো, কত ক্যাশ আর কত অনলাইনে আসল—সবকিছু রাতারাতি ক্লিয়ার হয়ে যায়। এটি ম্যানেজমেন্টের সেরা সঙ্গী।',
      initials: 'ই',
      badge: 'ভেরিফাইড ম্যানেজার',
      rating: 5
    }
  ];

  // ── 2. TRACK 1: TURF PARTNERS & OWNERS ──
  const turfPartners: TurfPartner[] = [
    {
      id: 't-1',
      turfName: 'পিচ ৫৬ অ্যারেনা',
      ownerName: 'রাফাত হাসান',
      location: 'ধানমন্ডি, ঢাকা',
      metric: '+৩৫% আয় বৃদ্ধি',
      rating: 5,
      monthlyMatches: '১৮০+ বুকিং / মাস',
      quote: 'TurfPlay ব্যবহারের পর ডাবল-বুকিং এর কল কনফ্লিক্ট পুরোপুরি শূন্যে নেমে এসেছে। স্টাফদের ওপর ভরসা শতভাগ।',
      initials: 'রা'
    },
    {
      id: 't-2',
      turfName: 'কিকঅফ অ্যারেনা',
      ownerName: 'ইমতিয়াজ আহমেদ',
      location: 'উত্তরা সেক্টর ৭',
      metric: 'দৈনিক এক্সেল অডিট',
      rating: 5,
      monthlyMatches: '২৩০+ ম্যাচ / মাস',
      quote: 'রেভিনিউ রিপোর্টগুলো অসাধারণ। প্রতিদিনই ব্যবসার প্রবৃদ্ধি চোখের সামনে দেখতে পাই। স্টাফদের জন্যও অত্যন্ত সহজ।',
      initials: 'ই'
    },
    {
      id: 't-3',
      turfName: 'গোললাইন স্পোর্টস গ্রাউন্ড',
      ownerName: 'তানভীর হোসেন',
      location: 'বনশ্রী, ঢাকা',
      metric: '১০ সে. অটো স্লট লক',
      rating: 5,
      monthlyMatches: '১৫০+ বুকিং / মাস',
      quote: 'কাস্টমাররা এখন বুকিং প্রসেসটি অত্যন্ত প্রফেশনাল মনে করে। ফোন রিসিভ না করলেও স্লট স্বয়ংক্রিয়ভাবে লক থাকে।',
      initials: 'তা'
    },
    {
      id: 't-4',
      turfName: 'ভিক্টোরিয়া টার্ফ ক্লাব',
      ownerName: 'রেজাউল করিম',
      location: 'মিরপুর-১, ঢাকা',
      metric: '+৪০% অফ-পিক বুকিং',
      rating: 5,
      monthlyMatches: '১৯৫+ ম্যাচ / মাস',
      quote: 'অফ-পিক টাইমে মাঠ খালি পড়ে থাকতো। TurfPlay ডিসকভারি ফিচারের মাধ্যমে এখন দিনের বেলাতেও নিয়মিত ম্যাচ চলে।',
      initials: 'রে'
    },
    {
      id: 't-5',
      turfName: 'এলিট স্পোর্টস অ্যারেনা',
      ownerName: 'আসিফ ইকবাল',
      location: 'বসুন্ধরা R/A',
      metric: '১০০% পেমেন্ট গ্যারান্টি',
      rating: 5,
      monthlyMatches: '২২০+ বুকিং / মাস',
      quote: 'আগে অনেকে বুকিং দিয়ে মাঠে আসতো না। TurfPlay এর অনলাইন পেমেন্টে এখন নো-শো ঝুঁকি পুরোপুরি বন্ধ।',
      initials: 'আ'
    },
    {
      id: 't-6',
      turfName: 'ঢাকা ফুটবল গ্রাউন্ড',
      ownerName: 'মাহমুদুল হক',
      location: 'গুলশান ২',
      metric: '২৪/৭ ক্লাউড সিঙ্ক',
      rating: 5,
      monthlyMatches: '২০০+ ম্যাচ / মাস',
      quote: 'ম্যানেজার হিসেবে কাজের চাপ অর্ধেক হয়ে গেছে। সব কিছু সফটওয়্যার একাই হ্যান্ডেল করায় আমরা সন্তুষ্ট।',
      initials: 'মা'
    }
  ];

  // ── 3. TRACK 2: PLAYERS & TEAMS ──
  const playerStories: PlayerStory[] = [
    {
      id: 'p-1',
      name: 'তানভীর আহমেদ',
      role: 'টিম ক্যাপ্টেন, এফসি ঢাকা',
      location: 'ধানমন্ডি',
      completedMatches: '৪৫+ ম্যাচ সম্পন্ন',
      rating: 5,
      badge: 'ভেরিফাইড প্লেয়ার',
      quote: 'বন্ধুদের নিয়ে খেলার জন্য মাঠ খোঁজা এখন ২ মিনিটের কাজ। লাইভ ম্যাপ দেখে সরাসরি বুক করে সোজা মাঠে যাই।',
      initials: 'তা'
    },
    {
      id: 'p-2',
      name: 'সাকিব আল হাসান',
      role: 'ফুটবলার, উইকএন্ড স্ট্রাইকার্স',
      location: 'উত্তরা',
      completedMatches: '৬০+ ম্যাচ সম্পন্ন',
      rating: 5,
      badge: 'ভেরিফাইড প্লেয়ার',
      quote: 'আগে মাঠে গিয়ে শুনতাম স্লট অন্য কেউ নিয়ে নিয়েছে! TurfPlay আসার পর থেকে ডাবল বুকিংয়ের কোনো ভয় নেই।',
      initials: 'সা'
    },
    {
      id: 'p-3',
      name: 'আদনান সামি',
      role: 'ক্রিকেট অলরাউন্ডার',
      location: 'মোহাম্মদপুর',
      completedMatches: '৩০+ ম্যাচ সম্পন্ন',
      rating: 5,
      badge: 'ভেরিফাইড প্লেয়ার',
      quote: 'বিকাশে পেমেন্ট করলেই সাথে সাথে ডিজিটাল টিকেট চলে আসে। মাঠে জাস্ট টিকেট দেখিয়ে সোজা খেলা শুরু।',
      initials: 'আ'
    },
    {
      id: 'p-4',
      name: 'ফারহান কবির',
      role: 'ক্যাপ্টেন, নাইট রাইডার্স',
      location: 'মিরপুর',
      completedMatches: '৩৮+ ম্যাচ সম্পন্ন',
      rating: 5,
      badge: 'ভেরিফাইড প্লেয়ার',
      quote: 'রাত ১২টার স্লট বুকিং করতে আগে কাউকে ফোনে পাওয়া যেত না। এখন TurfPlay তে ইনস্ট্যান্ট স্লট লক হয়ে যায়।',
      initials: 'ফা'
    },
    {
      id: 'p-5',
      name: 'সায়িদ জামান',
      role: 'গোলকিপার, কিংস ইলেভেন',
      location: 'বনানী',
      completedMatches: '৫২+ ম্যাচ সম্পন্ন',
      rating: 5,
      badge: 'ভেরিফাইড প্লেয়ার',
      quote: 'টার্ফের বাস্তব ছবি, পিচ সাইজ এবং আগের প্লেয়ারদের রেটিং দেখে মাঠ সিলেক্ট করা যায়—এটা দারুণ সুবিধা।',
      initials: 'সা'
    },
    {
      id: 'p-6',
      name: 'নাভীদ হোসাইন',
      role: 'টুর্নামেন্ট অর্গানাইজার',
      location: 'বসুন্ধরা',
      completedMatches: '৮০+ ম্যাচ সম্পন্ন',
      rating: 5,
      badge: 'ভেরিফাইড অর্গানাইজার',
      quote: 'আমাদের ইন্টার-ইউনিভার্সিটি টুর্নামেন্টের সব ম্যাচ TurfPlay এর স্লটে বুক করেছি, কোনো কনফ্লিক্ট হয়নি।',
      initials: 'না'
    }
  ];

  // Duplicated arrays for infinite seamless loop
  const doubledTurfPartners = [...turfPartners, ...turfPartners];
  const doubledPlayerStories = [...playerStories, ...playerStories];

  return (
    <section id="testimonials" className="py-16 sm:py-20 lg:py-28 bg-[#F8FAFC] relative overflow-hidden">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00A859]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00A859]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-fluid relative z-10">

        {/* ── SECTION HEADER ── */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00A859]/10 border border-[#00A859]/20 text-[#00A859] font-extrabold text-[10px] sm:text-xs uppercase tracking-[0.2em] mb-3 shadow-sm"
          >
            <Sparkles size={13} className="text-[#00A859]" />
            <span>COMMUNITY & SUCCESS STORIES</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-3 uppercase leading-tight"
          >
            সবার আস্থায় <span className="font-serif italic text-[#00A859] lowercase font-normal">TurfPlay</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-slate-600 text-xs sm:text-sm md:text-base font-medium leading-relaxed max-w-xl mx-auto"
          >
            টার্ফ মালিকদের লাভজনক ব্যবসা পরিচালনা এবং খেলোয়াড়দের ঝামেলামুক্ত ম্যাচ বুকিংয়ের বাস্তব অভিজ্ঞতা।
          </motion.p>
        </div>

        {/* ── 1. TOP FEATURED CASE STUDIES & IMPACT SHOWCASE ── */}
        <div className="mb-14 sm:mb-18">
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[#00A859] animate-ping" />
              <h3 className="text-sm sm:text-base font-black text-slate-900 uppercase tracking-tight flex items-center gap-2">
                <span>বাস্তব কেস স্টাডি ও সাফল্যের গল্প</span>
                <span className="text-[10px] font-bold text-[#00A859] bg-[#00A859]/10 px-2.5 py-0.5 rounded-full border border-[#00A859]/20">
                  ভেরিফাইড ইমপ্যাক্ট
                </span>
              </h3>
            </div>
            <span className="text-[11px] text-slate-500 font-semibold hidden sm:inline">
              টার্ফ ওনার ও প্লেয়ারদের বাস্তব অভিজ্ঞতা
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {caseStudies.map((story, idx) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative bg-gradient-to-b from-slate-900 via-slate-900/98 to-slate-950 text-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 overflow-hidden border border-slate-800/90 hover:border-[#00A859]/60 shadow-xl shadow-slate-950/20 hover:shadow-2xl hover:shadow-[#00A859]/15 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Background Tech Mesh & Radial Accent Glow */}
                <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
                <div className="absolute -top-16 -right-16 w-40 h-40 bg-[#00A859]/15 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-500 pointer-events-none" />
                
                {/* Giant subtle watermark Quote mark */}
                <Quote size={80} className="absolute -bottom-4 -right-2 text-white/[0.03] group-hover:text-[#00A859]/[0.08] transition-colors pointer-events-none stroke-1" />

                <div className="relative z-10">
                  {/* Top Bar: Category + High-impact Metric Pill */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-white/5 text-[#00FF88] border border-white/10">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00FF88]" />
                      {story.category}
                    </span>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-[#00A859]/20 border border-[#00A859]/40 text-[#00FF88] text-xs font-black shadow-xs">
                      <TrendingUp size={13} className="text-[#00FF88]" />
                      <span>{story.metric}</span>
                      <span className="text-[10px] text-slate-300 font-medium">{story.metricLabel}</span>
                    </div>
                  </div>

                  {/* 5-Star Rating Row */}
                  <div className="flex items-center gap-1 text-amber-400 mb-3">
                    {[...Array(story.rating)].map((_, r) => (
                      <Star key={r} size={14} className="fill-amber-400 text-amber-400" />
                    ))}
                    <span className="text-[11px] font-bold text-slate-400 ml-1.5">৫.০ / ৫.০</span>
                  </div>

                  {/* Case Study Title */}
                  <h4 className="text-base sm:text-lg font-black text-white group-hover:text-[#00FF88] transition-colors duration-200 leading-snug mb-3">
                    {story.title}
                  </h4>

                  {/* Real Quote Block with Left Accent Border */}
                  <div className="relative pl-3.5 border-l-2 border-[#00A859]/50 py-1 mb-6">
                    <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed italic font-serif">
                      "{story.quoteSnippet}"
                    </p>
                  </div>
                </div>

                {/* Bottom Footer: Speaker Identity & Verified Badge */}
                <div className="relative z-10 pt-4 border-t border-slate-800/90 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-emerald-900/30 border border-emerald-500/30 text-[#00FF88] font-black text-sm flex items-center justify-center shrink-0 shadow-inner">
                      {story.initials}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs sm:text-sm font-black text-white truncate">{story.speaker}</span>
                        <CheckCircle2 size={13} className="text-[#00FF88] shrink-0" />
                      </div>
                      <div className="text-[11px] text-slate-400 font-medium truncate flex items-center gap-1 mt-0.5">
                        <MapPin size={11} className="text-[#00A859] shrink-0" />
                        <span>{story.location}</span>
                        <span className="text-slate-600">•</span>
                        <span className="text-slate-400 truncate">{story.role}</span>
                      </div>
                    </div>
                  </div>

                  {/* Verified Credential Badge */}
                  <div className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-300 bg-emerald-950/60 px-2.5 py-1 rounded-lg border border-emerald-700/40 shrink-0">
                    <ShieldCheck size={12} className="text-[#00FF88]" />
                    <span className="hidden sm:inline">{story.badge}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* ── 2. TRACK 1: "১০০+ ভেরিফাইড টার্ফ পার্টনার" (INFINITE MARQUEE LEFT) ── */}
      <div className="mb-12 sm:mb-16">
        <div className="container-fluid mb-5">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-2xl bg-[#00A859]/10 text-[#00A859] flex items-center justify-center shrink-0 border border-[#00A859]/20 shadow-sm">
              <Building2 size={20} />
            </div>
            <div>
              <h3 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-2">
                <span className="text-[#00A859]">১০০+</span> ভেরিফাইড টার্ফ পার্টনার
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-medium">
                ঢাকার শীর্ষ মাঠগুলোর সফল অটোমেশন ও রেভিনিউ প্রবৃদ্ধি
              </p>
            </div>
          </div>
        </div>

        {/* Marquee Track with Side Fade Masks */}
        <div 
          className="relative w-full overflow-hidden"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 4%, black 96%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 4%, black 96%, transparent)'
          }}
        >
          <div className="animate-marquee-left flex gap-5 sm:gap-6 py-3">
            {doubledTurfPartners.map((partner, i) => (
              <div
                key={`${partner.id}-${i}`}
                className="w-[340px] sm:w-[410px] bg-white border border-slate-200/90 hover:border-[#00A859] rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-md hover:shadow-2xl hover:shadow-[#00A859]/15 transition-all duration-300 flex flex-col justify-between shrink-0 select-none group relative overflow-hidden"
              >
                {/* Top Subtle Hover Accent Bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00A859] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Top Header: Avatar, Name & Verified Badge */}
                  <div className="flex items-start justify-between gap-3 mb-3.5">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100/80 border border-emerald-200/90 text-[#00A859] font-black text-base flex items-center justify-center shrink-0 shadow-sm">
                        {partner.initials}
                      </div>
                      <div>
                        <h4 className="text-base sm:text-lg font-black text-slate-900 group-hover:text-[#00A859] transition-colors leading-tight">
                          {partner.turfName}
                        </h4>
                        <div className="flex items-center gap-1.5 text-xs text-slate-600 font-semibold mt-0.5">
                          <MapPin size={12} className="text-[#00A859]" />
                          <span>{partner.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-extrabold text-[#00A859] bg-[#00A859]/10 px-3 py-1 rounded-full shrink-0 border border-[#00A859]/25 shadow-xs">
                      <CheckCircle2 size={12} />
                      ভেরিফাইড
                    </span>
                  </div>

                  {/* Highlight Metric Pill */}
                  <div className="mb-3.5 inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-gradient-to-r from-emerald-50 to-emerald-100/60 border border-emerald-200/80 text-[#00A859] text-xs font-black shadow-xs">
                    <TrendingUp size={13} />
                    <span>{partner.metric}</span>
                  </div>

                  {/* Real Quote */}
                  <div className="relative mb-4">
                    <p className="text-slate-800 text-[15px] sm:text-base italic font-serif leading-relaxed line-clamp-3">
                      "{partner.quote}"
                    </p>
                  </div>
                </div>

                {/* Bottom Footer: Owner name & Stars */}
                <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm">
                  <div className="text-slate-800 font-bold">
                    {partner.ownerName} <span className="text-slate-500 font-medium text-xs">({partner.monthlyMatches})</span>
                  </div>
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(partner.rating)].map((_, r) => (
                      <Star key={r} size={15} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── 3. TRACK 2: "৫০,০০০+ সক্রিয় খেলোয়াড় ও ম্যাচ সম্পন্ন" (INFINITE MARQUEE RIGHT / REVERSE) ── */}
      <div>
        <div className="container-fluid mb-5">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-2xl bg-[#00A859]/10 text-[#00A859] flex items-center justify-center shrink-0 border border-[#00A859]/20 shadow-sm">
              <Users size={20} />
            </div>
            <div>
              <h3 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-2">
                <span className="text-[#00A859]">৫০,০০০+</span> সক্রিয় খেলোয়াড় ও ম্যাচ সম্পন্ন
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-medium">
                সহজ বুকিং, ইনস্ট্যান্ট ডিজিটাল টিকেট এবং জিরো ডাবল-বুকিংয়ের আনন্দ
              </p>
            </div>
          </div>
        </div>

        {/* Marquee Track with Side Fade Masks */}
        <div 
          className="relative w-full overflow-hidden"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 4%, black 96%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 4%, black 96%, transparent)'
          }}
        >
          <div className="animate-marquee-right flex gap-5 sm:gap-6 py-3">
            {doubledPlayerStories.map((player, i) => (
              <div
                key={`${player.id}-${i}`}
                className="w-[340px] sm:w-[410px] bg-white border border-slate-200/90 hover:border-[#00A859] rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-md hover:shadow-2xl hover:shadow-[#00A859]/15 transition-all duration-300 flex flex-col justify-between shrink-0 select-none group relative overflow-hidden"
              >
                {/* Top Subtle Hover Accent Bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00A859] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Top Header: Player Avatar & Badge */}
                  <div className="flex items-start justify-between gap-3 mb-3.5">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-slate-100 border border-slate-200 text-slate-800 font-black text-base flex items-center justify-center shrink-0 shadow-sm">
                        {player.initials}
                      </div>
                      <div>
                        <h4 className="text-base sm:text-lg font-black text-slate-900 group-hover:text-[#00A859] transition-colors leading-tight">
                          {player.name}
                        </h4>
                        <div className="text-xs sm:text-sm text-[#00A859] font-bold mt-0.5">
                          {player.role}
                        </div>
                      </div>
                    </div>
                    
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-extrabold text-slate-700 bg-slate-100 px-3 py-1 rounded-full shrink-0 border border-slate-200 shadow-xs">
                      {player.completedMatches}
                    </span>
                  </div>

                  {/* Location & Ticket Feature Pill */}
                  <div className="mb-3.5 inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200/80 text-slate-700 text-xs font-bold shadow-xs">
                    <Zap size={12} className="text-[#00A859]" />
                    <span>১০ সেকেন্ডে ডিজিটাল টিকেট • {player.location}</span>
                  </div>

                  {/* Player Quote */}
                  <div className="relative mb-4">
                    <p className="text-slate-800 text-[15px] sm:text-base italic font-serif leading-relaxed line-clamp-3">
                      "{player.quote}"
                    </p>
                  </div>
                </div>

                {/* Bottom Footer: Verification & 5 Stars */}
                <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm">
                  <div className="flex items-center gap-1.5 text-[#00A859] font-extrabold">
                    <ShieldCheck size={15} />
                    <span>ভেরিফাইড বুকিং</span>
                  </div>
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(player.rating)].map((_, r) => (
                      <Star key={r} size={15} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── 4. BOTTOM TRUST BADGES SUMMARY STRIP ── */}
      <div className="container-fluid mt-12 sm:mt-16">
        <div className="p-4 sm:p-6 bg-white border border-slate-200 rounded-2xl shadow-sm grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">৪.৯ / ৫.০</div>
            <div className="text-[10px] sm:text-xs text-slate-500 font-semibold mt-0.5">গড় প্লেয়ার ও ওনার রেটিং</div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-black text-[#00A859] tracking-tight">০%</div>
            <div className="text-[10px] sm:text-xs text-slate-500 font-semibold mt-0.5">ডাবল-বুকিং এর ঝুঁকি</div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">১০ সেকেন্ড</div>
            <div className="text-[10px] sm:text-xs text-slate-500 font-semibold mt-0.5">গড় স্লট বুকিং ও লক টাইম</div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-black text-[#00A859] tracking-tight">২৪/৭</div>
            <div className="text-[10px] sm:text-xs text-slate-500 font-semibold mt-0.5">ডেডিকেটেড বাংলা সাপোর্ট</div>
          </div>
        </div>
      </div>
    </section>
  );
};
