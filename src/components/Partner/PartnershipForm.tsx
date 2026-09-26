import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building2, 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Activity, 
  MessageSquare, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  TrendingUp, 
  Calendar, 
  Smartphone, 
  Eye, 
  XCircle, 
  Zap, 
  MessageCircle, 
  PhoneCall
} from 'lucide-react';

interface FormData {
  ownerName: string;
  email: string;
  venueName: string;
  sportType: string;
  contactNumber: string;
  location: string;
  bookingNumber: string;
  otherDetails: string;
}

export const PartnershipForm = () => {
  const [formData, setFormData] = useState<FormData>({
    ownerName: '',
    email: '',
    venueName: '',
    sportType: '',
    contactNumber: '',
    location: '',
    bookingNumber: '',
    otherDetails: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const sportOptions = [
    { value: 'football', label: '⚽ ফুটবল (Football / Futsal)' },
    { value: 'cricket', label: '🏏 ক্রিকেট (Box Cricket / Turf)' },
    { value: 'badminton', label: '🏸 ব্যাডমিন্টন (Badminton)' },
    { value: 'volleyball', label: '🏐 ভলিবল (Volleyball)' },
    { value: 'basketball', label: '🏀 বাস্কেটবল (Basketball)' },
    { value: 'gym', label: '🏋️ জিম ও ফিটনেস (Gym / Fitness)' },
    { value: 'tennis', label: '🎾 টেনিস / প্যাডেল (Tennis / Padel)' },
    { value: 'multi_sports', label: '🎯 মাল্টি-স্পোর্টস অ্যারেনা (Multi-Sports)' },
    { value: 'other', label: '✨ অন্যান্য (Other Venue)' }
  ];

  const stats = [
    { number: '৫০,০০০+', label: 'একটিভ খেলোয়াড়', sub: 'প্রতি মাসে সার্চ ও বুকিং' },
    { number: '১২০+', label: 'পার্টনার ভেন্যু', sub: 'সারা দেশে যুক্ত টার্ফ' },
    { number: '১৫+', label: 'শহর ও জোন', sub: 'দ্রুত বর্ধনশীল নেটওয়ার্ক' },
    { number: '৮+', label: 'খেলার ক্যাটাগরি', sub: 'ফুটবল, ক্রিকেট ও অন্যান্য' },
    { number: '৯৯.৮%', label: 'স্লট সিকিউরিটি', sub: 'জিরো ডাবল-বুকিং গ্যারান্টি' }
  ];

  const whyJoinPoints = [
    {
      icon: Eye,
      title: 'অনলাইন উপস্থিতি ও ব্র্যান্ডিং',
      subtitle: 'Online Presence',
      desc: 'আপনার এলাকার হাজার হাজার অ্যাক্টিভ খেলোয়াড়ের কাছে আপনার টার্ফ তুলে ধরুন। ব্র্যান্ড ট্রাস্ট তৈরি করুন এবং প্রতিদিন নতুন নতুন প্লেয়ার বুকিং পান।'
    },
    {
      icon: Calendar,
      title: 'সহজ বুকিং ও স্লট ম্যানেজমেন্ট',
      subtitle: 'Easy Booking Management',
      desc: 'একটি স্মার্ট ড্যাশবোর্ড থেকে স্লট, শিডিউল ও বুকিং পরিচালনা করুন। ম্যানুয়াল ফোনের অপেক্ষা বন্ধ করে ডাবল-বুকিং পুরোপুরি শূন্যে নামিয়ে আনুন।'
    },
    {
      icon: TrendingUp,
      title: 'রিয়েল-টাইম বিজনেস অ্যানালিটিক্স',
      subtitle: 'Business Analytics',
      desc: 'বুকিং সংখ্যা, মোট রেভিনিউ, ক্যাশ ও অনলাইন পেমেন্ট এবং পিক-আওয়ার ট্রেন্ড ট্র্যাক করুন। নির্ভুল ডাটা দিয়ে টার্ফের প্রবৃদ্ধি নিশ্চিত করুন।'
    },
    {
      icon: Smartphone,
      title: 'মোবাইল থেকেই ফুল কন্ট্রোল',
      subtitle: 'Manage On The Go',
      desc: 'টার্ফে উপস্থিত না থেকেও আপনার স্মার্টফোন থেকে TurfPlay ম্যানেজার অ্যাপ দিয়ে বুকিং দেখুন, অফলাইন বুকিং অ্যাড করুন এবং নোটিফিকেশন পান।'
    }
  ];

  const problemVsSolution = {
    problems: [
      'ফাঁকা স্লট ও কম বুকিংয়ের কারণে সম্ভাব্য আয় হাতছাড়া হওয়া',
      'সারাদিন ফোনে কথা বলা ও বুকিং কনফার্ম করার বাড়তি ঝামেলা',
      'একই স্লটে ২টি দল চলে আসা (ডাবল বুকিং ও বিড়ম্বনা)',
      'অনলাইনে কোনো ডিজিটাল উপস্থিতি বা ভেরিফাইড প্রোফাইল না থাকা',
      'কাগজ-কলম বা এক্সেলে হিসাবের গরমিল ও ক্যাশ ট্র্যাকিং সমস্যা'
    ],
    solutions: [
      'অনলাইনে ২৪/৭ স্বয়ংক্রিয় বুকিংয়ের মাধ্যমে শতভাগ স্লট পূর্ণতা',
      'ইনস্ট্যান্ট SMS ও WhatsApp স্বয়ংক্রিয় বুকিং নোটিফিকেশন',
      '১০ সেকেন্ডে অফলাইন স্লট লক ও রিয়েল-টাইম ক্যালেন্ডার সিঙ্ক',
      'খেলোয়াড়দের অ্যাপে টার্ফের ছবি, সুবিধা ও রেটিং সহ আকর্ষণীয় প্রোফাইল',
      'স্বয়ংক্রিয় আয়-ব্যয় রিপোর্ট, ডিজিটাল রসিদ ও ১ ক্লিকে এক্সেল অডিট'
    ]
  };

  const steps = [
    {
      step: '০১',
      title: 'পার্টনারশিপ ফর্ম পূরণ করুন',
      desc: 'আপনার নাম, টার্ফের নাম ও যোগাযোগের তথ্য দিয়ে নিচের ফর্মটি সাবমিট করুন।'
    },
    {
      step: '০২',
      title: 'টিম ভেরিফিকেশন ও অ্যাপ অ্যাক্সেস',
      desc: 'আমাদের টিম আপনার তথ্য যাচাই করে ১২ ঘণ্টার মধ্যে ওনার অ্যাকাউন্ট ক্রেডেনশিয়াল প্রদান করবে।'
    },
    {
      step: '০৩',
      title: 'অনলাইন বুকিং শুরু ও আয় বৃদ্ধি',
      desc: 'টার্ফের স্লট ও মূল্য সেট করে সরাসরি অনলাইন বুকিং গ্রহণ শুরু করুন!'
    }
  ];

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const validate = () => {
    const errs: Partial<Record<keyof FormData, string>> = {};
    if (!formData.ownerName.trim()) errs.ownerName = 'আপনার নাম লিখুন';
    if (!formData.email.trim() || !formData.email.includes('@')) errs.email = 'সঠিক ইমেইল ঠিকানা দিন';
    if (!formData.venueName.trim()) errs.venueName = 'টার্ফ বা ভেন্যুর নাম লিখুন';
    if (!formData.sportType) errs.sportType = 'খেলার ধরন নির্বাচন করুন';
    if (!formData.contactNumber.trim() || formData.contactNumber.length < 11) errs.contactNumber = '১১ ডিজিটের সঠিক ফোন নম্বর দিন';
    if (!formData.location.trim()) errs.location = 'টার্ফের লোকেশন / এলাকা উল্লেখ করুন';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API registration
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <section id="partnership-form" className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-white via-slate-50 to-[#F5FAF7] relative overflow-hidden">
      
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-[#00A859]/10 via-emerald-400/5 to-transparent blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#00A859]/8 blur-[120px] pointer-events-none rounded-full" />

      <div className="container-fluid relative z-10">

        {/* ── TOP BADGE & SECTION TITLE ── */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00A859]/10 border border-[#00A859]/30 text-[#00A859] text-xs sm:text-sm font-extrabold uppercase tracking-wider mb-4 shadow-xs"
          >
            <Sparkles size={14} className="text-[#00A859] animate-pulse" />
            <span>BECOME A TURFPLAY PARTNER • টার্ফ পার্টনারশিপ রেজিস্ট্রেশন</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight mb-4 uppercase leading-tight"
          >
            আপনার স্পোর্টস টার্ফ <br className="hidden sm:inline" />
            <span className="text-[#00A859]">TurfPlay নেটওয়ার্কে যুক্ত করুন</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-base sm:text-xl text-slate-700 font-semibold max-w-2xl mx-auto leading-relaxed"
          >
            বেশি বুকিং পান • সহজে পরিচালনা করুন • আয় বৃদ্ধি করুন। <br />
            ম্যানুয়াল হিসাবের ঝামেলা ভুলে আজই বিনামূল্যে রেজিস্টার করুন।
          </motion.p>
        </div>

        {/* ── METRICS STRIP (PLAYSPOTS STYLE) ── */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 sm:gap-6 mb-16 sm:mb-24 max-w-6xl mx-auto">
          {stats.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className={`bg-white/90 backdrop-blur-xl border border-slate-200/90 rounded-2xl sm:rounded-3xl p-5 sm:p-6 text-center shadow-sm hover:shadow-md hover:border-[#00A859]/40 transition-all ${
                idx === 4 ? 'col-span-2 md:col-span-1' : ''
              }`}
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#00A859] tracking-tight">
                {item.number}
              </div>
              <div className="text-xs sm:text-sm font-black text-slate-900 mt-1 uppercase tracking-wide">
                {item.label}
              </div>
              <div className="text-[11px] text-slate-500 font-medium mt-0.5 hidden sm:block">
                {item.sub}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── MAIN TWO-COLUMN SECTION: HERO PITCH + PARTNERSHIP FORM ── */}
        <div className="grid lg:grid-cols-12 gap-10 sm:gap-14 lg:gap-16 items-start mb-20 sm:mb-28 max-w-7xl mx-auto">
          
          {/* Left Column: Value Prop & Pitch (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6 sm:space-y-8"
          >
            <div>
              <span className="text-xs font-black uppercase tracking-[0.2em] text-[#00A859] mb-2 block">
                কেন টার্ফপ্লে পার্টনার হবেন?
              </span>
              <h3 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-snug">
                More Bookings. <br />
                Less Hassle. <br />
                <span className="text-[#00A859]">More Revenue.</span>
              </h3>
              <p className="text-slate-600 font-medium text-sm sm:text-base mt-3 leading-relaxed">
                দেশের সবচেয়ে দ্রুত বর্ধনশীল স্পোর্টস প্ল্যাটফর্মে যুক্ত হয়ে আপনার টার্ফের বুকিং সংখ্যা দ্বিগুণ করুন এবং ঝামেলাহীন অটোমেশনের স্বাদ নিন।
              </p>
            </div>

            {/* Core Pillars List */}
            <div className="space-y-4 sm:space-y-5">
              {whyJoinPoints.map((point, pIdx) => {
                const IconC = point.icon;
                return (
                  <div 
                    key={pIdx}
                    className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-[#00A859]/50 shadow-xs hover:shadow-md transition-all flex items-start gap-4 group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-[#00A859]/10 text-[#00A859] flex items-center justify-center shrink-0 group-hover:bg-[#00A859] group-hover:text-white transition-colors">
                      <IconC size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-black text-slate-900 group-hover:text-[#00A859] transition-colors">
                        {point.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1 leading-relaxed">
                        {point.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick Contact Line */}
            <div className="p-5 rounded-2xl bg-emerald-50/80 border border-emerald-200/80 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-bold text-slate-600">সরাসরি কথা বলতে চান?</p>
                <p className="text-base sm:text-lg font-black text-slate-900">+880 1892-979324</p>
              </div>
              <a
                href="https://wa.me/8801892979324?text=Hello%20TurfPlay%2C%20ami%20TurfPlay%20shomporke%20kotha%20bolte%20chai"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#1faa4f] text-white text-xs font-black uppercase tracking-wider flex items-center gap-1.5 shadow-sm transition-all hover:scale-105 active:scale-95"
              >
                <MessageCircle size={15} />
                <span>WhatsApp</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Dedicated Partnership Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="bg-white border-2 border-[#00A859]/20 rounded-3xl p-6 sm:p-10 shadow-[0_20px_50px_rgba(0,168,89,0.08)] relative overflow-hidden backdrop-blur-xl">
              
              {/* Top Accent Strip */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-400 via-[#00A859] to-teal-400" />

              {!isSubmitted ? (
                <>
                  <div className="mb-6 sm:mb-8">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-black uppercase tracking-wider mb-2">
                      <Sparkles size={12} />
                      <span>১০০% ফ্রি লিস্টিং</span>
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                      পার্টনারশিপ আবেদন ফরম
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1">
                      নিচের তথ্যগুলো দিয়ে ফর্মটি পূরণ করুন। আমাদের পার্টনার অনবোর্ডিং টিম অতি দ্রুত যোগাযোগ করবে।
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                    
                    {/* Owner Name & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          আপনার নাম (Owner / Manager Name) <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                          <input
                            type="text"
                            required
                            placeholder="যেমন: রাফাত হাসান"
                            value={formData.ownerName}
                            onChange={e => handleInputChange('ownerName', e.target.value)}
                            className={`w-full bg-slate-50 border rounded-2xl py-3.5 pl-11 pr-4 text-xs sm:text-sm font-semibold text-slate-900 focus:outline-none focus:border-[#00A859] transition-all placeholder:text-slate-400 ${
                              errors.ownerName ? 'border-red-500' : 'border-slate-200'
                            }`}
                          />
                        </div>
                        {errors.ownerName && <p className="text-red-500 text-[11px] font-bold mt-1 pl-1">{errors.ownerName}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          ইমেইল আইডি (Email Id) <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                          <input
                            type="email"
                            required
                            placeholder="you@example.com"
                            value={formData.email}
                            onChange={e => handleInputChange('email', e.target.value)}
                            className={`w-full bg-slate-50 border rounded-2xl py-3.5 pl-11 pr-4 text-xs sm:text-sm font-semibold text-slate-900 focus:outline-none focus:border-[#00A859] transition-all placeholder:text-slate-400 ${
                              errors.email ? 'border-red-500' : 'border-slate-200'
                            }`}
                          />
                        </div>
                        {errors.email && <p className="text-red-500 text-[11px] font-bold mt-1 pl-1">{errors.email}</p>}
                      </div>
                    </div>

                    {/* Venue Name & Sport Type */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          টার্ফ / মাঠের নাম (Venue Name) <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Building2 size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                          <input
                            type="text"
                            required
                            placeholder="যেমন: কিকঅফ স্পোর্টস অ্যারেনা"
                            value={formData.venueName}
                            onChange={e => handleInputChange('venueName', e.target.value)}
                            className={`w-full bg-slate-50 border rounded-2xl py-3.5 pl-11 pr-4 text-xs sm:text-sm font-semibold text-slate-900 focus:outline-none focus:border-[#00A859] transition-all placeholder:text-slate-400 ${
                              errors.venueName ? 'border-red-500' : 'border-slate-200'
                            }`}
                          />
                        </div>
                        {errors.venueName && <p className="text-red-500 text-[11px] font-bold mt-1 pl-1">{errors.venueName}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          খেলার ধরন (Sport Type) <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Activity size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                          <select
                            required
                            value={formData.sportType}
                            onChange={e => handleInputChange('sportType', e.target.value)}
                            className={`w-full bg-slate-50 border rounded-2xl py-3.5 pl-11 pr-8 text-xs sm:text-sm font-semibold text-slate-900 focus:outline-none focus:border-[#00A859] transition-all cursor-pointer ${
                              errors.sportType ? 'border-red-500' : 'border-slate-200'
                            }`}
                          >
                            <option value="" disabled>স্পোর্টস টাইপ নির্বাচন করুন</option>
                            {sportOptions.map(opt => (
                              <option key={opt.value} value={opt.value}>{opt.label}</option>
                            ))}
                          </select>
                        </div>
                        {errors.sportType && <p className="text-red-500 text-[11px] font-bold mt-1 pl-1">{errors.sportType}</p>}
                      </div>
                    </div>

                    {/* Contact Number & Location */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          মোবাইল / হোয়াটসঅ্যাপ (Contact Number) <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Phone size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                          <input
                            type="tel"
                            required
                            placeholder="০১XXXXXXXXX"
                            value={formData.contactNumber}
                            onChange={e => handleInputChange('contactNumber', e.target.value)}
                            className={`w-full bg-slate-50 border rounded-2xl py-3.5 pl-11 pr-4 text-xs sm:text-sm font-semibold text-slate-900 focus:outline-none focus:border-[#00A859] transition-all placeholder:text-slate-400 ${
                              errors.contactNumber ? 'border-red-500' : 'border-slate-200'
                            }`}
                          />
                        </div>
                        {errors.contactNumber && <p className="text-red-500 text-[11px] font-bold mt-1 pl-1">{errors.contactNumber}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          লোকেশন ও ঠিকানা (Location) <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <MapPin size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                          <input
                            type="text"
                            required
                            placeholder="যেমন: ধানমন্ডি, ঢাকা"
                            value={formData.location}
                            onChange={e => handleInputChange('location', e.target.value)}
                            className={`w-full bg-slate-50 border rounded-2xl py-3.5 pl-11 pr-4 text-xs sm:text-sm font-semibold text-slate-900 focus:outline-none focus:border-[#00A859] transition-all placeholder:text-slate-400 ${
                              errors.location ? 'border-red-500' : 'border-slate-200'
                            }`}
                          />
                        </div>
                        {errors.location && <p className="text-red-500 text-[11px] font-bold mt-1 pl-1">{errors.location}</p>}
                      </div>
                    </div>

                    {/* Booking Number (Optional) */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        বিকল্প বা হেল্পলাইন নম্বর (Booking Number - ঐচ্ছিক)
                      </label>
                      <div className="relative">
                        <PhoneCall size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                          type="tel"
                          placeholder="টার্ফের সরাসরি বুকিং বা ম্যানেজারের ফোন নম্বর"
                          value={formData.bookingNumber}
                          onChange={e => handleInputChange('bookingNumber', e.target.value)}
                          className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3.5 pl-11 pr-4 text-xs sm:text-sm font-semibold text-slate-900 focus:outline-none focus:border-[#00A859] transition-all placeholder:text-slate-400"
                        />
                      </div>
                    </div>

                    {/* Other Details */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        টার্ফের বিবরণ ও অন্যান্য সুবিধা (Other Details / Facilities)
                      </label>
                      <div className="relative">
                        <MessageSquare size={16} className="absolute left-4 top-4 text-slate-400" />
                        <textarea
                          rows={3}
                          placeholder="যেমন: ৫-এ-সাইড বা ৭-এ-সাইড টার্ফ, ফ্লাডলাইট, পার্কিং সুবিধা, বা কোনো প্রশ্ন..."
                          value={formData.otherDetails}
                          onChange={e => handleInputChange('otherDetails', e.target.value)}
                          className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3.5 pl-11 pr-4 text-xs sm:text-sm font-semibold text-slate-900 focus:outline-none focus:border-[#00A859] transition-all placeholder:text-slate-400 resize-none"
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 sm:py-4.5 bg-[#00A859] hover:bg-[#008f4c] text-white font-black text-sm sm:text-base uppercase tracking-wider rounded-2xl shadow-lg shadow-[#00A859]/25 hover:shadow-xl hover:shadow-[#00A859]/40 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          <span>পার্টনার হিসেবে আবেদন সাবমিট করুন</span>
                          <ArrowRight size={18} />
                        </>
                      )}
                    </button>

                    <div className="pt-2 flex items-center justify-center gap-2 text-slate-500 text-[11px] sm:text-xs font-medium">
                      <ShieldCheck size={14} className="text-[#00A859]" />
                      <span>আপনার তথ্য সম্পূর্ণ সুরক্ষিত • কোনো হিডেন ফি নেই</span>
                    </div>

                  </form>
                </>
              ) : (
                /* Success State */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 sm:py-16 text-center"
                >
                  <div className="w-20 h-20 bg-emerald-100 rounded-3xl flex items-center justify-center mx-auto mb-6 text-[#00A859] border border-emerald-300">
                    <CheckCircle2 size={44} className="stroke-[2.5]" />
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 uppercase mb-2">
                    আবেদন সফলভাবে গৃহীত হয়েছে!
                  </h3>

                  <p className="text-slate-700 text-sm sm:text-base font-bold mb-4">
                    ধন্যবাদ, <span className="text-[#00A859]">{formData.ownerName || 'সম্মানিত ওনার'}</span>! আপনার টার্ফ <span className="text-slate-900 font-extrabold">{formData.venueName}</span> এর আবেদন আমরা পেয়েছি।
                  </p>

                  <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto leading-relaxed mb-8">
                    আমাদের অনবোর্ডিং স্পেশালিস্ট আগামী ১২ ঘণ্টার মধ্যে আপনার সাথে <strong className="text-slate-900">{formData.contactNumber}</strong> নম্বরে যোগাযোগ করে ড্যাশবোর্ড ও অ্যাপ অ্যাক্সেস বুঝিয়ে দেবেন।
                  </p>

                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <a
                      href="https://wa.me/8801892979324?text=Hello%20TurfPlay%2C%20ami%20partnership%20form%20submit%20korechi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#25D366] hover:bg-[#1faa4f] text-white font-extrabold text-xs uppercase tracking-wider transition-all shadow-md"
                    >
                      <MessageCircle size={16} />
                      <span>হোয়াটসঅ্যাপে দ্রুত নক দিন</span>
                    </a>

                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          ownerName: '',
                          email: '',
                          venueName: '',
                          sportType: '',
                          contactNumber: '',
                          location: '',
                          bookingNumber: '',
                          otherDetails: ''
                        });
                      }}
                      className="px-5 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-extrabold text-xs uppercase tracking-wider transition-all"
                    >
                      নতুন আরেকটি টার্ফ যুক্ত করুন
                    </button>
                  </div>
                </motion.div>
              )}

            </div>
          </motion.div>

        </div>

        {/* ── THE PROBLEM VS OUR SOLUTION (PLAYSPOTS STYLE COMPARISON) ── */}
        <div className="mb-20 sm:mb-28">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-[#00A859] mb-2 block">
              THE PROBLEM VS OUR SOLUTION
            </span>
            <h3 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              ম্যানুয়াল খাতার যন্ত্রণা বনাম TurfPlay-এর স্মার্ট সমাধান
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {/* The Problem Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-red-50/60 border-2 border-red-200/80 rounded-3xl p-6 sm:p-8 relative overflow-hidden"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center font-black">
                  <XCircle size={22} />
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-red-500">Traditional System</span>
                  <h4 className="text-lg sm:text-xl font-black text-slate-900">বর্তমান সমস্যাসমূহ (The Problem)</h4>
                </div>
              </div>

              <ul className="space-y-3.5">
                {problemVsSolution.problems.map((p, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                    <span className="text-red-500 font-black mt-0.5 shrink-0 text-base">✕</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Our Solution Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-emerald-50/70 border-2 border-[#00A859]/50 rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-lg shadow-[#00A859]/5"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#00A859] text-white flex items-center justify-center font-black shadow-sm">
                  <Zap size={22} />
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#00A859]">TurfPlay Smart Platform</span>
                  <h4 className="text-lg sm:text-xl font-black text-slate-900">আমাদের সমাধান (Our Solution)</h4>
                </div>
              </div>

              <ul className="space-y-3.5">
                {problemVsSolution.solutions.map((s, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-800 font-bold">
                    <span className="text-[#00A859] font-black mt-0.5 shrink-0 text-base">✓</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* ── 3 EASY STEPS TO GET STARTED (PLAYSPOTS STYLE) ── */}
        <div className="max-w-5xl mx-auto mb-16 sm:mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-[#00A859] mb-2 block">
              QUICK ONBOARDING
            </span>
            <h3 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              মাত্র ৩টি সহজ ধাপে শুরু করুন
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((st, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white border border-slate-200/90 hover:border-[#00A859] rounded-3xl p-6 sm:p-7 relative shadow-sm hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#00A859]/10 text-[#00A859] flex items-center justify-center font-mono font-black text-lg mb-4 group-hover:bg-[#00A859] group-hover:text-white transition-colors">
                  {st.step}
                </div>
                <h4 className="text-base sm:text-lg font-black text-slate-900 mb-2 group-hover:text-[#00A859] transition-colors">
                  {st.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                  {st.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── DIRECT TALK / CONTACT BAR ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#00A859]/20 rounded-full blur-3xl pointer-events-none" />
          
          <h3 className="text-2xl sm:text-4xl font-black mb-3 tracking-tight">
            যেকোনো প্রশ্ন বা সহযোগিতার জন্য সরাসরি কথা বলুন
          </h3>
          <p className="text-slate-300 text-sm sm:text-base font-medium max-w-xl mx-auto mb-6">
            আমাদের টিম সার্বক্ষণিক প্রস্তুত আপনাকে TurfPlay সেটআপ ও ডেমো প্রদর্শন করতে।
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:+8801892979324"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-slate-100 text-slate-900 font-black text-xs sm:text-sm uppercase tracking-wider transition-all shadow-md hover:scale-105 active:scale-95"
            >
              <PhoneCall size={16} className="text-[#00A859]" />
              <span>কল করুন: 01892-979324</span>
            </a>

            <a
              href="https://wa.me/8801892979324?text=Hello%20TurfPlay%2C%20ami%20partnership%20shomporke%20kotha%20bolte%20chai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#1faa4f] text-white font-black text-xs sm:text-sm uppercase tracking-wider transition-all shadow-md hover:scale-105 active:scale-95"
            >
              <MessageCircle size={16} />
              <span>WhatsApp চ্যাট করুন</span>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
