import React, { useState } from 'react';
import { motion } from 'motion/react';
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
  Check,
  Bell,
  CreditCard,
  DollarSign,
  LayoutDashboard,
  BarChart3,
  Share2,
  PhoneCall,
  MessageCircle,
  Download,
  FileCheck,
  Zap,
  Search,
  Users,
  Lock,
  Sliders,
  Star,
  ArrowLeftRight
} from 'lucide-react';

import calendarMockup from '../../assets/images/iphone17_calendar.webp';
import homeMockup from '../../assets/images/iphone17_home.webp';
import problemImg from '../../assets/images/problem.png';
import solutionImg from '../../assets/images/solution.png';
import whyPresenceImg from '../../assets/images/why_presence.webp';
import whyBookingImg from '../../assets/images/why_booking.webp';
import whyAnalyticsImg from '../../assets/images/why_analytics.webp';
import whyManageImg from '../../assets/images/why_manage.webp';
import growManImg from '../../assets/images/grow_man.png';
import appstoreImg from '../../assets/images/sports/appstore.png';
import playstoreImg from '../../assets/images/sports/palystore.png';
import { AppStoreModal } from '../Modals/AppStoreModal';

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

export const PlayspotsPartnerPage = () => {
  const [isAppStoreModalOpen, setIsAppStoreModalOpen] = useState(false);
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
    { value: 'cricket', label: '🏏 ক্রিকেট (Cricket / Box Turf)' },
    { value: 'badminton', label: '🏸 ব্যাডমিন্টন (Badminton)' },
    { value: 'volleyball', label: '🏐 ভলিবল (Volleyball)' },
    { value: 'basketball', label: '🏀 বাস্কেটবল (Basketball)' },
    { value: 'gym', label: '🏋️ জিম ও ফিটনেস (Gym / Fitness)' },
    { value: 'tennis', label: '🎾 টেনিস / প্যাডেল (Tennis / Padel)' },
    { value: 'game_centre', label: '🎮 গেম সেন্টার (Game Centre)' },
    { value: 'other', label: '✨ অন্যান্য খেলা (Other Venue)' }
  ];

  // SECTION 1: Realistic Stats (Adapted for 1-1.5 month old platform)
  const stats = [
    { number: '২,৫০০+', label: 'সক্রিয় খেলোয়াড়', sub: 'প্লেয়ার ট্রাফিক ও নিয়মিত ইউজার' },
    { number: '২৫+', label: 'রেজিস্টার্ড টার্ফ', sub: 'আমাদের নেটওয়ার্কে যুক্ত ভেন্যু' },
    { number: '১০+', label: 'শহর ও জোন', sub: 'কভারেজ ও দ্রুত সম্প্রসারণ' },
    { number: '৮+', label: 'খেলার ক্যাটাগরি', sub: 'বিভিন্ন ধরনের মাঠ ও খেলা' },
    { number: '২৪/৭', label: 'অন-গ্রাউন্ড সাপোর্ট', sub: '২৪ ঘণ্টা ওনার হেল্পলাইন' }
  ];

  // SECTION 2: WHY JOIN TURFPLAY? (4 Pillars with Mockup Image Design matching Playspots)
  const whyJoinCards = [
    {
      title: 'টার্ফের প্রচার ও নতুন খেলোয়াড়',
      titleBn: 'টার্ফের প্রচার ও নতুন খেলোয়াড়',
      desc: "Increase your venue's visibility and reach thousands of active players searching for sports facilities. Build trust and attract more bookings through the TurfPlay platform.",
      descBn: 'হাজারো সক্রিয় খেলোয়াড়দের কাছে আপনার মাঠের পরিচিতি বাড়বে। নিয়মিত নতুন নতুন দল ও কাস্টমার সরাসরি আপনার টার্ফ বুক করবে।',
      image: whyPresenceImg
    },
    {
      title: 'সহজ স্লট ও বুকিং ম্যানেজমেন্ট',
      titleBn: 'সহজ স্লট ও বুকিং ম্যানেজমেন্ট',
      desc: 'Manage bookings, schedules, and slot availability effortlessly from a single dashboard. Reduce manual work and keep your venue running smoothly every day.',
      descBn: 'একটি স্মার্ট অ্যাপ ড্যাশবোর্ড থেকেই সব স্লট আর শিডিউল কন্ট্রোল করুন। বারবার ফোন রিসিভের ঝামেলা ছাড়া মাঠের কাজ গুছিয়ে রাখুন।',
      image: whyBookingImg
    },
    {
      title: 'দৈনিক আয় ও বুকিংয়ের হিসাব',
      titleBn: 'দৈনিক আয় ও বুকিংয়ের হিসাব',
      desc: 'Track bookings, revenue, customer trends, and venue performance with real-time insights. Make informed decisions to improve operations and grow your business.',
      descBn: 'প্রতিদিনের মোট বুকিং, ক্যাশ ও অনলাইন কালেকশন এবং পিক-আওয়ার ট্রেন্ড দেখুন। নির্ভুল রিপোর্টের ভিত্তিতে আপনার ব্যবসা পরিচালনা করুন।',
      image: whyAnalyticsImg
    },
    {
      title: 'স্মার্টফোনেই পুরো টার্ফ কন্ট্রোল',
      titleBn: 'স্মার্টফোনেই পুরো টার্ফ কন্ট্রোল',
      desc: 'Stay connected to your venue anytime, anywhere using the TurfPlay mobile app. Monitor bookings, manage customers, and receive instant updates from your smartphone.',
      descBn: 'মাঠে না থাকলেও নিজের ফোন থেকে TurfPlay অ্যাপ দিয়ে লাইভ স্লট দেখুন, অফলাইন বুকিং যোগ করুন এবং তাৎক্ষণিক নোটিফিকেশন পান।',
      image: whyManageImg
    }
  ];

  // SECTION 3: THE PROBLEM vs OUR SOLUTION (Bengali Translation matching Bangladesh context)
  const problemItems = [
    'অফ-পিক বা দিনের ফাঁকা সময়ে মাঠ খালি পড়ে থাকা',
    'অনবরত ফোনে কথা বলে স্লটের হিসাব দেওয়ার ঝামেলা',
    'ভুলবশত একই স্লটে ডাবল বুকিং ও কাস্টমারের অসন্তোষ',
    'অনলাইনে টার্ফের খোঁজ না পেয়ে নতুন প্লেয়ার না আসা',
    'খাতা-কলমে বাকি বা খরচের হিসাব রাখতে গিয়ে গরমিল'
  ];

  const solutionItems = [
    'খেলোয়াড়দের সরাসরি অনলাইন বুকিং ও অগ্রিম পেমেন্ট',
    'বুকিং হওয়ামাত্রই ফোনে তাৎক্ষণিক নোটিফিকেশন ও এসএমএস',
    'লাইভ ক্যালেন্ডারে রিয়েল-টাইম স্লট লকিং—ডাবল বুকিং বন্ধ',
    'TurfPlay অ্যাপে মাঠের আকর্ষণীয় প্রোফাইল ও পরিচিতি',
    'প্রতিদিনের ক্যাশ ও অনলাইন আয়ের স্বয়ংক্রিয় ডিজিটাল রিপোর্ট'
  ];

  // SECTION 4: POWERFUL FEATURES (8 items with distinct highlights)
  const powerfulFeatures = [
    {
      icon: Calendar,
      title: 'সহজ স্লট ম্যানেজমেন্ট',
      subtitle: 'স্লট শিডিউলিং',
      desc: 'খুব সহজেই প্রতিটি স্লট, সময়সূচি এবং অফ-পিক বা পিক আওয়ারের রেট কাস্টমাইজ করুন।',
      highlight: '⚡ রিয়েল-টাইম ক্যালেন্ডার'
    },
    {
      icon: MessageSquare,
      title: 'এসএমএস ও হোয়াটসঅ্যাপ অ্যালার্ট',
      subtitle: 'স্বয়ংক্রিয় নোটিফিকেশন',
      desc: 'যেকোনো বুকিং হওয়া মাত্রই খেলোয়াড় ও আপনার ম্যানেজারের কাছে তাৎক্ষণিক কনফার্মেশন মেসেজ চলে যাবে।',
      highlight: '💬 ইনস্ট্যান্ট মেসেজিং'
    },
    {
      icon: CreditCard,
      title: 'বাল্ক বুকিং ও অগ্রিম পেমেন্ট',
      subtitle: 'নিরাপদ অনলাইন পেমেন্ট',
      desc: 'বিকাশ, নগদ বা কার্ডের মাধ্যমে বুকিংয়ের অগ্রিম পেমেন্ট নিরাপদে সংগ্রহ করুন এবং টুর্নামেন্ট বুকিং পরিচালনা করুন।',
      highlight: '💳 বিকাশ ও নগদ কালেকশন'
    },
    {
      icon: DollarSign,
      title: 'আয় ও ব্যয় ব্যবস্থাপনা',
      subtitle: 'অ্যাকাউন্টিং ও লাভ-ক্ষতি',
      desc: 'টার্ফের দৈনিক ক্যাশ আয়, মেইনটেন্যান্স খরচ ও মাস শেষে নেট প্রফিটের হিসাব এক ক্লিকে রাখুন।',
      highlight: '📊 ক্যাশ ও ব্যাংক অডিট'
    },
    {
      icon: LayoutDashboard,
      title: 'লাইভ ওনার ড্যাশবোর্ড',
      subtitle: 'টার্ফের পূর্ণাঙ্গ চিত্র',
      desc: 'এক নজরে আজকের সব বুকিং, বাকি টাকা এবং অকুপেন্সি রেটের রিয়েল-টাইম তথ্য দেখুন।',
      highlight: '🖥️ অল-ইন-ওয়ান ড্যাশবোর্ড'
    },
    {
      icon: BarChart3,
      title: 'বিজনেস অ্যানালাইসিস ও গ্রোথ',
      subtitle: 'পারফরম্যান্স রিপোর্ট',
      desc: 'মাসিক বুকিং প্রবৃদ্ধি, পিক-আওয়ার ট্রেন্ড এবং নিয়মিত কাস্টমারদের রিটেনশন রিপোর্ট যাচাই করুন।',
      highlight: '📈 গ্রোথ ও অ্যানালিটিক্স'
    },
    {
      icon: Bell,
      title: 'ইনস্ট্যান্ট পুশ নোটিফিকেশন',
      subtitle: 'তাৎক্ষণিক আপডেট',
      desc: 'নতুন বুকিং, ক্যান্সেলেশন বা যেকোনো আপডেটের সাথে সাথে ম্যানেজার অ্যাপে নোটিফিকেশন পান।',
      highlight: '🔔 লাইভ পুশ অ্যালার্ট'
    },
    {
      icon: Share2,
      title: 'স্পেশাল অফার ও ডিসকাউন্ট',
      subtitle: 'বুকিং বৃদ্ধির কৌশল',
      desc: 'অফ-পিক বা ফাঁকা স্লট দ্রুত বুকিংয়ের জন্য বিশেষ ছাড় বা প্রমোশনাল অফার প্রকাশ করুন।',
      highlight: '🎁 ডিসকাউন্ট ও প্রমোশন'
    }
  ];

  // SECTION 7: GET STARTED IN 3 EASY STEPS
  const steps = [
    {
      step: '০১',
      tag: 'ধাপ ০১',
      title: 'টার্ফের তথ্য দিয়ে আবেদন করুন',
      desc: 'আপনার নাম, মাঠের ঠিকানা ও যোগাযোগের মোবাইল নম্বর দিয়ে নিচের সহজ ফরমটি সাবমিট করুন।'
    },
    {
      step: '০২',
      tag: 'ধাপ ০২',
      title: 'টিমের যাচাই ও ওনার অ্যাক্সেস',
      desc: 'আমাদের সাপোর্ট টিম দ্রুত তথ্য ভেরিফাই করে আপনার জন্য ওনার ড্যাশবোর্ড প্রস্তুত করে দেবে।'
    },
    {
      step: '০৩',
      tag: 'ধাপ ০৩',
      title: 'সরাসরি অনলাইন বুকিং শুরু',
      desc: 'টার্ফ লাইভ হওয়ামাত্রই খেলোয়াড়রা সরাসরি আপনার মাঠ বুকিং করতে এবং অগ্রিম পে করতে পারবে।'
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
    if (!formData.ownerName.trim()) errs.ownerName = 'আপনার নাম প্রদান করুন';
    if (!formData.email.trim() || !formData.email.includes('@')) errs.email = 'সঠিক ইমেইল ঠিকানা দিন';
    if (!formData.venueName.trim()) errs.venueName = 'টার্ফ বা ভেন্যুর নাম লিখুন';
    if (!formData.sportType) errs.sportType = 'খেলার ধরন নির্বাচন করুন';
    if (!formData.contactNumber.trim() || formData.contactNumber.length < 11) errs.contactNumber = '১১ ডিজিটের সঠিক মোবাইল নম্বর দিন';
    if (!formData.location.trim()) errs.location = 'টার্ফের লোকেশন বা এলাকা উল্লেখ করুন';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <div className="w-full text-slate-900 selection:bg-[#00A859] selection:text-white">
      
      {/* ═════════════════════════════════════════════════════════════════
          1. STATS BANNER
      ═════════════════════════════════════════════════════════════════ */}
      <section className="py-10 sm:py-12 bg-white border-y border-slate-200/80">
        <div className="container-fluid">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 text-center max-w-6xl mx-auto items-start">
            {stats.map((s, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className={`px-1.5 sm:px-2 ${idx === 4 ? 'col-span-2 md:col-span-1' : ''}`}
              >
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight font-mono whitespace-nowrap">
                  {s.number}
                </div>
                <div className="text-xs sm:text-sm font-black text-[#00A859] tracking-wider mt-1">
                  {s.label}
                </div>
                <div className="text-[11px] text-slate-500 font-medium mt-0.5 hidden sm:block">
                  {s.sub}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════
          2. WHY TURFPLAY? (4 Core Pillars)
      ═════════════════════════════════════════════════════════════════ */}
      <section id="why-join" className="py-20 sm:py-28 bg-[#F8FAFC]">
        <div className="container-fluid">
          
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#00A859]/10 border border-[#00A859]/25 rounded-full mb-4 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#00A859]" />
              <span className="text-xs font-bold text-[#00A859]">
                কেন TURFPLAY?
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              টার্ফ পরিচালনা হোক সহজ, <br />
              <span className="text-[#00A859]">বুকিং বাড়ুক নিশ্চিন্তে</span>
            </h2>
            <p className="text-slate-600 font-medium text-sm sm:text-base mt-3 max-w-xl mx-auto">
              কাগজের খাতার ডাবল বুকিং আর অনবরত ফোন রিসিভের ঝামেলা ভুলে যান। TurfPlay-এর মাধ্যমে আপনার মাঠকে নিয়ে আসুন স্মার্ট ব্যবস্থাপনায়।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {whyJoinCards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-white border border-slate-200/90 hover:border-[#00A859]/60 rounded-[2rem] p-4 sm:p-5 shadow-xs hover:shadow-[0_18px_35px_rgba(0,168,89,0.09)] transition-all duration-300 flex flex-col group relative overflow-hidden"
              >
                {/* Top Mockup Image Container */}
                <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 mb-5 relative shadow-xs border border-slate-100/80">
                  <img 
                    src={card.image} 
                    alt={card.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>

                {/* Bottom Content */}
                <div className="px-1 flex flex-col flex-1">
                  <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-2.5 leading-snug tracking-tight group-hover:text-[#00A859] transition-colors">
                    {card.titleBn}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                    {card.descBn}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════
          GROW YOUR BUSINESS WITH TURFPLAY (Exact Playspots Reference)
      ═════════════════════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 bg-white border-t border-slate-200/70 overflow-hidden">
        <div className="container-fluid">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center max-w-7xl mx-auto">
            
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#00A859]/10 border border-[#00A859]/30 rounded-full shadow-xs">
                <TrendingUp size={14} className="text-[#00A859]" />
                <span className="text-xs font-black uppercase tracking-wider text-[#00A859]">
                  টার্ফপ্লে-এর সাথে ব্যবসা বৃদ্ধি
                </span>
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
                আপনার টার্ফ ব্যবসা বাড়ান <br />
                <span className="inline-flex items-baseline gap-1 sm:gap-1.5 mt-1">
                  <span className="font-serif tracking-tight text-slate-900">
                    Turf<span className="italic text-[#00A859]">Play</span>
                  </span>
                  <span className="text-[#00A859] font-sans font-black">-এর সাথে</span>
                </span>
              </h2>

              <p className="text-slate-600 font-medium text-sm sm:text-base leading-relaxed max-w-lg">
                বাংলাদেশের সবচেয়ে বড় স্পোর্টস ফ্যাসিলিটি নেটওয়ার্কে যুক্ত হয়ে আপনার টার্ফ ব্যবসাকে নিয়ে যান নতুন উচ্চতায়। প্রতিদিন হাজারো নতুন খেলোয়াড় খুঁজুন এবং খালি স্লটের সংখ্যা শূন্যে নামিয়ে আনুন।
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                  <a
                    href="#register"
                    className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#00A859] hover:bg-[#008f4c] text-white font-black text-xs uppercase tracking-wider rounded-full shadow-lg shadow-[#00A859]/25 hover:scale-105 active:scale-95 transition-all"
                  >
                    <span>টার্ফ রেজিস্টার করুন</span>
                    <ArrowRight size={15} />
                  </a>

                  <a
                    href="https://wa.me/8801611920991?text=Hello%20TurfPlay%2C%20ami%20turf%20business%20growth%20niye%20kotha%20bolte%20chai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-black text-xs uppercase tracking-wider rounded-full transition-all"
                  >
                    <MessageCircle size={15} />
                    <span>পরামর্শের জন্য হোয়াটসঅ্যাপ</span>
                  </a>
                </div>

                {/* Mobile App Download Links */}
                <div className="pt-2">
                  <div className="text-[11px] font-black uppercase tracking-wider text-slate-600 mb-2 flex items-center gap-1.5">
                    <Smartphone size={13} className="text-[#00A859]" />
                    <span>মোবাইল অ্যাপ ডাউনলোড করুন:</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.turfplay.app&hl=en"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 px-4 py-2 bg-white border border-slate-200 hover:border-[#00A859]/50 hover:bg-emerald-50/30 hover:scale-[1.02] active:scale-95 transition-all rounded-2xl shadow-xs group"
                    >
                      <img 
                        src={playstoreImg} 
                        alt="Google Play" 
                        className="w-5 h-5 object-contain" 
                      />
                      <div className="flex flex-col items-start leading-none pr-1">
                        <span className="text-[8px] text-slate-400 font-bold uppercase tracking-wider mb-0.5">ডাউনলোড করুন</span>
                        <span className="text-xs text-slate-900 font-black group-hover:text-[#00A859] transition-colors">Google Play</span>
                      </div>
                    </a>

                    <button
                      type="button"
                      onClick={() => setIsAppStoreModalOpen(true)}
                      className="flex items-center gap-2.5 px-4 py-2 bg-white border border-slate-200 hover:border-[#00A859]/50 hover:bg-emerald-50/30 hover:scale-[1.02] active:scale-95 transition-all rounded-2xl shadow-xs group cursor-pointer"
                    >
                      <img 
                        src={appstoreImg} 
                        alt="App Store" 
                        className="w-5 h-5 object-contain" 
                      />
                      <div className="flex flex-col items-start leading-none pr-1">
                        <span className="text-[8px] text-slate-400 font-bold uppercase tracking-wider mb-0.5">ডাউনলোড করুন</span>
                        <span className="text-xs text-slate-900 font-black group-hover:text-[#00A859] transition-colors">App Store</span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>

              {/* Stats highlights */}
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-100 max-w-md">
                <div className="p-3.5 rounded-2xl bg-slate-50/80 border border-slate-100 hover:border-[#00A859]/40 hover:bg-emerald-50/40 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl font-black text-slate-900 font-mono">৩৫%+</div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">গড় মাসিক বুকিং ও আয় প্রবৃদ্ধি</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-emerald-50/50 border border-emerald-100 hover:border-[#00A859]/50 hover:bg-emerald-50 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl font-black text-[#00A859] font-mono">১০০%</div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">ঝামেলামুক্ত ডিজিটাল অটোমেশন</div>
                </div>
              </div>
            </motion.div>

            {/* Right Illustration with grow_man.png */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, x: 30 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-6 flex items-center justify-center relative"
            >
              {/* Organic Soft Green Blob with subtle continuous rotation */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                className="absolute w-[340px] sm:w-[460px] lg:w-[500px] aspect-square rounded-[45%_55%_60%_40%/50%_60%_40%_50%] bg-gradient-to-tr from-[#00A859]/15 via-emerald-200/20 to-teal-100/10 blur-2xl pointer-events-none" 
              />

              {/* Dot pattern */}
              <div className="absolute left-4 top-1/4 w-32 h-32 bg-[radial-gradient(#00A859_1.5px,transparent_1.5px)] [background-size:14px_14px] opacity-35 pointer-events-none" />

              {/* Floating Player Illustration */}
              <motion.img 
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                src={growManImg} 
                alt="TurfPlay-এর সাথে টার্ফ ব্যবসা বৃদ্ধি" 
                className="relative z-10 w-full max-w-[480px] lg:max-w-[540px] h-auto object-contain drop-shadow-xl select-none pointer-events-none" 
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════
          3. THE PROBLEM VS OUR SOLUTION (Exact Reference Comparison in Bengali)
      ═════════════════════════════════════════════════════════════════ */}
      <section id="problem-solution" className="py-20 sm:py-28 bg-white border-t border-slate-200/70">
        <div className="container-fluid">
          
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#00A859]/10 border border-[#00A859]/30 rounded-full mb-4 shadow-xs">
              <CheckCircle2 size={14} className="text-[#00A859]" />
              <span className="text-xs font-black uppercase tracking-wider text-[#00A859]">
                তুলনামূলক পার্থক্য
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              সাধারণ সমস্যা <span className="text-slate-400 font-normal">VS</span> <span className="text-[#00A859]">আমাদের স্মার্ট সমাধান</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm font-medium mt-2">
              পুরোনো পদ্ধতিতে টার্ফ চালানোর ভোগান্তি VS আমাদের স্মার্ট{' '}
              <span className="font-serif tracking-tight text-slate-900 font-bold">
                Turf<span className="italic text-[#00A859]">Play</span>
              </span>
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch relative">
              
              {/* The Problem (Red Card) */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-[#FFF6F6] border border-[#FEE2E2] rounded-[2rem] p-6 sm:p-8 lg:p-9 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs relative"
              >
                {/* Left: Problem Character Illustration */}
                <div className="w-full sm:w-5/12 flex justify-center items-center shrink-0">
                  <img 
                    src={problemImg} 
                    alt="সাধারণ সমস্যাসমূহ" 
                    className="w-44 sm:w-52 md:w-56 h-auto object-contain select-none pointer-events-none drop-shadow-sm" 
                  />
                </div>

                {/* Right: Problem Bullets */}
                <div className="w-full sm:w-7/12 space-y-3.5">
                  <h3 className="text-xl sm:text-2xl font-black text-[#EF4444] uppercase tracking-wider mb-5 text-center sm:text-left">
                    সাধারণ সমস্যাসমূহ
                  </h3>

                  <ul className="space-y-3.5">
                    {problemItems.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-700">
                        <span className="w-5 h-5 rounded-full bg-[#EF4444] text-white flex items-center justify-center shrink-0 text-[11px] font-black shadow-xs">
                          ✕
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Our Solution (Green Card) - Enhanced with subtle hover lift and badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-[#F2FAF5] border-2 border-[#A7F3D0] hover:border-[#00A859] rounded-[2rem] p-6 sm:p-8 lg:p-9 flex flex-col-reverse sm:flex-row items-center justify-between gap-6 shadow-sm hover:shadow-[0_20px_45px_rgba(0,168,89,0.14)] transition-all duration-300 relative group overflow-hidden"
              >
                {/* Top-right subtle badge */}
                <div className="absolute top-4 right-5 hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00A859]/15 text-[#00A859] text-[10px] font-black uppercase tracking-wider border border-[#00A859]/30">
                  <Sparkles size={11} />
                  <span>স্মার্ট সমাধান</span>
                </div>

                {/* Left: Solution Bullets */}
                <div className="w-full sm:w-7/12 space-y-3.5">
                  <h3 className="text-xl sm:text-2xl font-black text-[#00A859] uppercase tracking-wider mb-5 text-center sm:text-left">
                    আমাদের আধুনিক সমাধান
                  </h3>

                  <ul className="space-y-3.5">
                    {solutionItems.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-xs sm:text-sm font-bold text-slate-800">
                        <span className="w-5 h-5 rounded-full bg-[#00A859] text-white flex items-center justify-center shrink-0 text-[11px] font-black shadow-xs">
                          ✓
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right: Solution Character Illustration */}
                <div className="w-full sm:w-5/12 flex justify-center items-center shrink-0">
                  <img 
                    src={solutionImg} 
                    alt="Our Solution" 
                    className="w-44 sm:w-52 md:w-56 h-auto object-contain select-none pointer-events-none drop-shadow-sm group-hover:scale-105 transition-transform duration-300" 
                  />
                </div>
              </motion.div>

            </div>

            {/* Desktop Center Floating VS Badge with Continuous Breathing Pulse */}
            <motion.div 
              animate={{ 
                scale: [1, 1.08, 1],
                boxShadow: [
                  '0 10px 25px -5px rgba(0, 168, 89, 0.2), 0 8px 10px -6px rgba(239, 68, 68, 0.2)',
                  '0 20px 35px -5px rgba(0, 168, 89, 0.35), 0 12px 16px -6px rgba(239, 68, 68, 0.35)',
                  '0 10px 25px -5px rgba(0, 168, 89, 0.2), 0 8px 10px -6px rgba(239, 68, 68, 0.2)'
                ]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white border-2 border-slate-200/90 items-center justify-center font-black text-sm z-20 select-none group"
            >
              <span className="font-extrabold tracking-wider bg-gradient-to-r from-red-600 via-slate-800 to-[#00A859] bg-clip-text text-transparent">
                VS
              </span>
            </motion.div>

            {/* Mobile Center Floating VS Badge */}
            <div className="lg:hidden flex items-center justify-center my-3">
              <motion.div 
                animate={{ scale: [1, 1.06, 1] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-12 h-12 rounded-full bg-white shadow-lg border border-slate-200 flex items-center justify-center font-black text-xs"
              >
                <span className="bg-gradient-to-r from-red-600 via-slate-800 to-[#00A859] bg-clip-text text-transparent">
                  VS
                </span>
              </motion.div>
            </div>

          </div>

        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════
          4. POWERFUL FEATURES ("Everything You Need To Manage Your Venue")
      ═════════════════════════════════════════════════════════════════ */}
      <section id="features" className="py-20 sm:py-28 bg-[#F8FAFC]">
        <div className="container-fluid">
          
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#00A859]/10 border border-[#00A859]/25 rounded-full mb-4 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#00A859]" />
              <span className="text-xs font-bold text-[#00A859]">
                প্রয়োজনীয় ফিচারসমূহ
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              টার্ফ পরিচালনার প্রতিটি কাজ <br />
              <span className="text-[#00A859]">এখন আরও সহজ</span>
            </h2>
            <p className="text-slate-600 font-medium text-sm sm:text-base mt-3 max-w-xl mx-auto">
              স্লট বুকিং, পেমেন্ট ট্র্যাকিং এবং দৈনিক আয়-ব্যয়ের হিসাব—সবকিছুই পাবেন একটি মাত্র অ্যাপে।
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {powerfulFeatures.map((feat, idx) => {
              const IconComp = feat.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.06 }}
                  className="bg-white border border-slate-200/90 hover:border-[#00A859]/50 rounded-3xl p-6 sm:p-7 shadow-xs hover:shadow-[0_20px_40px_rgba(0,168,89,0.1)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
                >
                  {/* Ambient hover glow inside card */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#00A859]/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                  <div>
                    {/* Top Row: Icon Badge + Numeric Index */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#00A859]/15 to-[#00A859]/5 text-[#00A859] border border-[#00A859]/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#00A859] group-hover:text-white group-hover:shadow-lg group-hover:shadow-[#00A859]/25 transition-all duration-300">
                        <IconComp size={22} />
                      </div>
                      <span className="font-mono text-xs font-black text-slate-300 group-hover:text-[#00A859]/40 transition-colors">
                        0{idx + 1}
                      </span>
                    </div>

                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-slate-100 text-slate-600 group-hover:bg-[#00A859]/10 group-hover:text-[#00A859] transition-colors mb-2.5">
                      {feat.subtitle}
                    </span>

                    <h3 className="text-base sm:text-lg font-black text-slate-900 mb-2 group-hover:text-[#00A859] transition-colors leading-snug tracking-tight">
                      {feat.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>

                  {/* Bottom Highlight */}
                  <div className="pt-4 mt-5 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-slate-700 group-hover:text-[#00A859] transition-colors">
                      {feat.highlight}
                    </span>
                    <ArrowRight size={13} className="text-slate-300 group-hover:text-[#00A859] group-hover:translate-x-1 transition-all" />
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════
          5. MOBILE APP & POWERFUL DASHBOARD
      ═════════════════════════════════════════════════════════════════ */}
      <section id="mobile-dashboard" className="py-20 sm:py-28 bg-white border-t border-slate-200/70 overflow-hidden">
        <div className="container-fluid">
          
          <div className="grid lg:grid-cols-12 gap-12 items-center max-w-7xl mx-auto">
            
            {/* Left Col: Features list */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-6 space-y-6"
            >
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#00A859]/10 border border-[#00A859]/25 rounded-full mb-3 shadow-xs">
                  <Smartphone size={14} className="text-[#00A859]" />
                  <span className="text-xs font-bold text-[#00A859]">
                    মোবাইল অ্যাপ ও ড্যাশবোর্ড
                  </span>
                </div>
                <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                  মোবাইল থেকেই <br />
                  <span className="text-[#00A859]">টার্ফের সব কাজ পরিচালনা করুন</span>
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 font-medium mt-3 leading-relaxed">
                  কম্পিউটার বা ভারী সফটওয়্যার লাগবে না। আপনার হাতে থাকা অ্যান্ড্রয়েড বা আইফোন থেকেই পুরো টার্ফের লাইভ বুকিং ক্যালেন্ডার দেখুন, নতুন স্লট যোগ করুন এবং দৈনিক আয়ের হিসাব রাখুন।
                </p>
              </div>

              {/* Core 4 app features matching reference */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200">
                  <div className="text-base sm:text-lg font-black text-slate-900">বুকিং ম্যানেজমেন্ট</div>
                  <div className="text-xs text-slate-500 font-medium mt-1">স্লট লক ও রিয়েল-টাইম শিডিউল</div>
                </div>

                <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200">
                  <div className="text-base sm:text-lg font-black text-slate-900">বিজনেস অ্যানালিটিক্স</div>
                  <div className="text-xs text-slate-500 font-medium mt-1">দৈনিক রেভিনিউ ও অডিট রিপোর্ট</div>
                </div>

                <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200">
                  <div className="text-base sm:text-lg font-black text-slate-900">সহজ পেমেন্ট কালেকশন</div>
                  <div className="text-xs text-slate-500 font-medium mt-1">বিকাশ, নগদ ও ক্যাশ হিসাব</div>
                </div>

                <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200">
                  <div className="text-base sm:text-lg font-black text-slate-900">তাৎক্ষণিক অ্যালার্ট</div>
                  <div className="text-xs text-slate-500 font-medium mt-1">ইনস্ট্যান্ট বুকিং পুশ নোটিফিকেশন</div>
                </div>
              </div>

              {/* Dashboard Tabs for Quick Simulation */}
              <div className="p-5 rounded-3xl bg-slate-900 text-white space-y-3 border border-slate-800 shadow-xl relative overflow-hidden">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono text-emerald-400 font-bold flex items-center gap-2">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                    </span>
                    লাইভ ক্লাউড ড্যাশবোর্ড
                  </span>
                  <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-300 font-mono border border-emerald-800/60">
                    ● লাইভ সিঙ্ক
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="p-3 rounded-xl bg-slate-800/90 border border-slate-700/50 text-center hover:border-emerald-500/40 transition-colors">
                    <div className="text-[11px] text-slate-400 font-medium">আজকের বুকিং</div>
                    <div className="text-base sm:text-lg font-black text-white mt-0.5">১৪টি স্লট</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-800/90 border border-slate-700/50 text-center hover:border-emerald-500/40 transition-colors">
                    <div className="text-[11px] text-slate-400 font-medium">মোট আয়</div>
                    <div className="text-base sm:text-lg font-black text-[#00FF88] mt-0.5">৳ ৪২,৫০০</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-800/90 border border-slate-700/50 text-center hover:border-emerald-500/40 transition-colors">
                    <div className="text-[11px] text-slate-400 font-medium">অকুপেন্সি</div>
                    <div className="text-base sm:text-lg font-black text-emerald-400 mt-0.5">৮৭.৫%</div>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href="#register"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#00A859] hover:bg-[#008f4c] text-white font-black text-xs uppercase tracking-wider rounded-full shadow-lg shadow-[#00A859]/25 hover:scale-105 active:scale-95 transition-all"
                >
                  <span>টার্ফ রেজিস্টার করুন</span>
                  <ArrowRight size={14} />
                </a>

                <a
                  href="https://play.google.com/store/apps/details?id=com.turfplay.app&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 px-3.5 py-2 bg-white border border-slate-200 hover:border-[#00A859]/50 hover:bg-emerald-50/30 hover:scale-[1.02] active:scale-95 transition-all rounded-2xl shadow-xs group"
                >
                  <img 
                    src={playstoreImg} 
                    alt="Google Play" 
                    className="w-4 h-4 sm:w-5 sm:h-5 object-contain" 
                  />
                  <div className="flex flex-col items-start leading-none pr-1">
                    <span className="text-[7px] text-slate-400 font-bold uppercase tracking-wider mb-0.5">ডাউনলোড করুন</span>
                    <span className="text-xs text-slate-900 font-black group-hover:text-[#00A859] transition-colors">Google Play</span>
                  </div>
                </a>

                <button
                  type="button"
                  onClick={() => setIsAppStoreModalOpen(true)}
                  className="flex items-center gap-2.5 px-3.5 py-2 bg-white border border-slate-200 hover:border-[#00A859]/50 hover:bg-emerald-50/30 hover:scale-[1.02] active:scale-95 transition-all rounded-2xl shadow-xs group cursor-pointer"
                >
                  <img 
                    src={appstoreImg} 
                    alt="App Store" 
                    className="w-4 h-4 sm:w-5 sm:h-5 object-contain" 
                  />
                  <div className="flex flex-col items-start leading-none pr-1">
                    <span className="text-[7px] text-slate-400 font-bold uppercase tracking-wider mb-0.5">ডাউনলোড করুন</span>
                    <span className="text-xs text-slate-900 font-black group-hover:text-[#00A859] transition-colors">App Store</span>
                  </div>
                </button>
              </div>
            </motion.div>

            {/* Right Col: Phone Mockups Visual */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-6 flex justify-center items-center relative"
            >
              <div className="relative w-full max-w-[420px] aspect-[9/16] flex items-center justify-center">
                <img 
                  src={homeMockup} 
                  alt="TurfPlay App Home" 
                  className="absolute w-[240px] -left-4 sm:-left-8 top-12 opacity-75 drop-shadow-2xl object-contain"
                />
                <img 
                  src={calendarMockup} 
                  alt="TurfPlay Manager App Calendar" 
                  className="relative z-10 w-[270px] sm:w-[290px] drop-shadow-[0_25px_50px_rgba(0,0,0,0.18)] object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════
          6. ONE APP, DUAL-ROLE ECOSYSTEM (Compact & Productive)
      ═════════════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 bg-[#F8FAFC] border-t border-slate-200/70 relative overflow-hidden">
        {/* Subtle ambient lighting */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-emerald-100/40 via-teal-100/25 to-blue-100/30 blur-[120px] pointer-events-none rounded-full" />

        <div className="container-fluid relative z-10">
          
          {/* Compact Section Header with Enhanced Typography */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00A859]/10 border border-[#00A859]/25 rounded-full mb-3.5 shadow-xs">
              <Smartphone size={16} className="text-[#00A859]" />
              <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-[#00A859]">
                একটি অ্যাপেই দুটি মোড
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              একই অ্যাপে <span className="text-blue-600">খেলোয়াড়</span> ও <span className="text-[#00A859]">ওনার</span> সুবিধা
            </h2>
            <p className="text-slate-600 font-medium text-sm sm:text-base mt-3 max-w-xl mx-auto leading-relaxed">
              আলাদা কোনো অ্যাপ খোঁজার ঝামেলা নেই। খেলোয়াড়রা সহজে স্লট বুকিং করতে পারেন, আর ভেরিফায়েড ওনাররা একই অ্যাপ থেকে সম্পূর্ণ মাঠ পরিচালনা করতে পারেন।
            </p>
          </div>

          {/* Compact Productive Dual-Role Cards with Larger, Clearer Typography */}
          <div className="grid md:grid-cols-2 gap-7 max-w-6xl mx-auto items-stretch">
            
            {/* Card 1: Player Mode (Blue Theme) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="bg-white border border-slate-200/90 hover:border-blue-300 rounded-[2rem] p-7 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-xl transition-all duration-300 relative group overflow-hidden"
            >
              {/* Top Accent Stripe */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 via-sky-400 to-indigo-500" />
              
              <div>
                {/* Header Row */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs sm:text-sm font-black uppercase tracking-wider border border-blue-200/70 flex items-center gap-2">
                    <User size={15} className="text-blue-600" />
                    ভূমিকা ০১ • খেলোয়াড় মোড
                  </span>
                  <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full border border-slate-200/60">
                    ডিফল্ট • ফ্রি
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-1.5 tracking-tight">
                  প্লেয়ার্স বুকিং ও কমিউনিটি
                </h3>
                <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed mb-6">
                  আশেপাশের টার্ফ খুঁজে সহজে স্লট বুক করুন এবং বন্ধুদের নিয়ে মাঠে নামুন।
                </p>

                {/* 4 Productive Feature Rows with Larger Text & Icons */}
                <div className="space-y-3.5 mb-7">
                  <div className="flex items-center gap-3.5 p-3 sm:p-3.5 rounded-2xl bg-slate-50/80 hover:bg-blue-50/50 border border-slate-100/90 transition-colors">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 shadow-2xs">
                      <Search size={18} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm sm:text-base font-black text-slate-900 leading-snug">কাছের টার্ফ ও লাইভ স্লট</div>
                      <div className="text-xs sm:text-sm text-slate-600 font-medium mt-0.5">ম্যাপে দূরত্ব ও রিয়েল-টাইম ফাঁকা সময় দেখা</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5 p-3 sm:p-3.5 rounded-2xl bg-slate-50/80 hover:bg-blue-50/50 border border-slate-100/90 transition-colors">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 shadow-2xs">
                      <Zap size={18} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm sm:text-base font-black text-slate-900 leading-snug">১০ সেকেন্ডে দ্রুত বুকিং</div>
                      <div className="text-xs sm:text-sm text-slate-600 font-medium mt-0.5">ইনস্ট্যান্ট স্লট কনফার্মেশন ও ডিজিটাল রসিদ</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5 p-3 sm:p-3.5 rounded-2xl bg-slate-50/80 hover:bg-blue-50/50 border border-slate-100/90 transition-colors">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 shadow-2xs">
                      <Users size={18} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm sm:text-base font-black text-slate-900 leading-snug">টিম ম্যাচ ও স্প্লিট বিল</div>
                      <div className="text-xs sm:text-sm text-slate-600 font-medium mt-0.5">বন্ধুদের সাথে খেলার স্কোয়াড গঠন ও খরচ ভাগ</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5 p-3 sm:p-3.5 rounded-2xl bg-slate-50/80 hover:bg-blue-50/50 border border-slate-100/90 transition-colors">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 shadow-2xs">
                      <Star size={18} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm sm:text-base font-black text-slate-900 leading-snug">রেটিং ও বিশেষ ডিসকাউন্ট</div>
                      <div className="text-xs sm:text-sm text-slate-600 font-medium mt-0.5">টার্ফ রিভিউ, ফটো ও নিয়মিত স্পেশাল ক্যাশব্যাক</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Info */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm">
                <span className="font-bold text-slate-600 flex items-center gap-2">
                  <Smartphone size={16} className="text-blue-500" />
                  সবার জন্য ওপেন এক্সেস
                </span>
                <span className="text-xs font-black text-blue-700 bg-blue-50 px-3.5 py-1 rounded-full border border-blue-100">
                  প্লেয়ার ফ্রেন্ডলি
                </span>
              </div>
            </motion.div>

            {/* Card 2: Owner & Manager Mode (Featured Emerald Theme) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              whileHover={{ y: -4 }}
              className="bg-gradient-to-b from-white via-emerald-50/20 to-white border-2 border-[#00A859] rounded-[2rem] p-7 sm:p-8 flex flex-col justify-between shadow-md hover:shadow-2xl hover:shadow-[#00A859]/15 transition-all duration-300 relative group overflow-hidden"
            >
              {/* Top Accent Stripe */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#00A859]" />
              
              <div>
                {/* Header Row */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3.5 py-1.5 rounded-full bg-[#00A859] text-white text-xs sm:text-sm font-black uppercase tracking-wider shadow-xs flex items-center gap-2">
                    <ShieldCheck size={15} />
                    ভূমিকা ০২ • ওনার মোড
                  </span>
                  <span className="text-xs font-bold text-[#00A859] bg-[#00A859]/10 border border-[#00A859]/30 px-3 py-1 rounded-full flex items-center gap-1">
                    ভেরিফাইড ওনার
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-1.5 tracking-tight">
                  টার্ফ ওনার ও সুপার ম্যানেজার
                </h3>
                <p className="text-sm sm:text-base text-[#00A859] font-bold leading-relaxed mb-6">
                  টার্ফ ভেরিফাই হতেই একই অ্যাপের ভেতরে পূর্ণাঙ্গ ওনার ড্যাশবোর্ড সক্রিয়।
                </p>

                {/* 4 Productive Feature Rows with Larger Text & Icons */}
                <div className="space-y-3.5 mb-7">
                  <div className="flex items-center gap-3.5 p-3 sm:p-3.5 rounded-2xl bg-white/90 hover:bg-emerald-50/60 border border-emerald-100/80 transition-colors shadow-2xs">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#00A859]/15 text-[#00A859] flex items-center justify-center shrink-0 shadow-2xs">
                      <Calendar size={18} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm sm:text-base font-black text-slate-900 leading-snug">স্মার্ট স্লট ম্যানেজমেন্ট</div>
                      <div className="text-xs sm:text-sm text-slate-600 font-medium mt-0.5">লাইভ ক্যালেন্ডার ও অফলাইন ফোন কল বুকিং লক</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5 p-3 sm:p-3.5 rounded-2xl bg-white/90 hover:bg-emerald-50/60 border border-emerald-100/80 transition-colors shadow-2xs">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#00A859]/15 text-[#00A859] flex items-center justify-center shrink-0 shadow-2xs">
                      <CreditCard size={18} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm sm:text-base font-black text-slate-900 leading-snug">সহজ পেমেন্ট ও ক্যাশ হিসাব</div>
                      <div className="text-xs sm:text-sm text-slate-600 font-medium mt-0.5">বিকাশ, নগদ ও কাউন্টার ক্যাশের দৈনিক অডিট</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5 p-3 sm:p-3.5 rounded-2xl bg-white/90 hover:bg-emerald-50/60 border border-emerald-100/80 transition-colors shadow-2xs">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#00A859]/15 text-[#00A859] flex items-center justify-center shrink-0 shadow-2xs">
                      <BarChart3 size={18} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm sm:text-base font-black text-slate-900 leading-snug">বিজনেস অ্যানালিটিক্স ও গ্রোথ</div>
                      <div className="text-xs sm:text-sm text-slate-600 font-medium mt-0.5">দৈনিক মোট আয়, পিক আওয়ার ও অকুপেন্সি রিপোর্ট</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5 p-3 sm:p-3.5 rounded-2xl bg-white/90 hover:bg-emerald-50/60 border border-emerald-100/80 transition-colors shadow-2xs">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#00A859]/15 text-[#00A859] flex items-center justify-center shrink-0 shadow-2xs">
                      <Bell size={18} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm sm:text-base font-black text-slate-900 leading-snug">তাৎক্ষণিক অ্যালার্ট ও মেসেজ</div>
                      <div className="text-xs sm:text-sm text-slate-600 font-medium mt-0.5">যেকোনো বুকিং হওয়া মাত্রই ইনস্ট্যান্ট নোটিফিকেশন</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Action */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm">
                <span className="font-black text-[#00A859] flex items-center gap-2">
                  <Building2 size={16} />
                  একই অ্যাপেই সব ম্যানেজমেন্ট
                </span>
                <a
                  href="#register"
                  className="inline-flex items-center gap-2 px-5 py-2 bg-[#00A859] hover:bg-[#008f4c] text-white font-black text-xs sm:text-sm rounded-full shadow-xs hover:scale-105 active:scale-95 transition-all"
                >
                  <span>টার্ফ যুক্ত করুন</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════
          7. GET STARTED IN 3 EASY STEPS
      ═════════════════════════════════════════════════════════════════ */}
      <section id="how-it-works" className="py-20 sm:py-28 bg-white border-t border-slate-200/70">
        <div className="container-fluid">
          
          <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#00A859]/10 border border-[#00A859]/25 rounded-full mb-4 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#00A859]" />
              <span className="text-xs font-bold text-[#00A859]">
                সহজ অনবোর্ডিং
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              মাত্র ৩টি পদক্ষেপে <br />
              <span className="text-[#00A859]">অনলাইন বুকিং শুরু করুন</span>
            </h2>
            <p className="text-slate-600 font-medium text-xs sm:text-sm mt-2">
              সহজ কয়েকটি ধাপে আপনার মাঠ যুক্ত করুন এবং খেলোয়াড়দের সরাসরি বুকিং নেওয়া শুরু করুন।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {steps.map((st, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white border border-slate-200/90 hover:border-[#00A859] rounded-3xl p-7 sm:p-8 shadow-xs hover:shadow-xl transition-all duration-300 relative group"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#00A859]/10 text-[#00A859] flex items-center justify-center font-mono font-black text-2xl mb-6 group-hover:bg-[#00A859] group-hover:text-white transition-colors">
                  {st.step}
                </div>
                <span className="text-[11px] font-black uppercase tracking-wider text-slate-400 block mb-1">
                  {st.tag}
                </span>
                <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-2 group-hover:text-[#00A859] transition-colors leading-snug">
                  {st.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                  {st.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════
          8. REGISTER YOUR TURF SECTION & FORM (After learning all about the platform)
      ═════════════════════════════════════════════════════════════════ */}
      <section id="register" className="relative py-20 sm:py-28 overflow-hidden bg-gradient-to-b from-[#F5FAF7] via-white to-[#F5FAF7] border-t border-slate-200/80">
        
        {/* Glow ambient background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-[#00A859]/10 blur-[150px] pointer-events-none rounded-full" />
        
        <div className="container-fluid relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Col: Hero Headline & Value Hook (5 cols) */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 space-y-5 sm:space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00A859]/10 border border-[#00A859]/25 text-[#00A859] text-xs font-bold shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#00A859]" />
                <span>টার্ফ রেজিস্ট্রেশন • ফ্রি ওনার অ্যাপ</span>
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
                আপনার টার্ফ যুক্ত করুন <br />
                <span className="inline-flex items-baseline gap-1 sm:gap-1.5 mt-1">
                  <span className="font-serif tracking-tight text-slate-900">
                    Turf<span className="italic text-[#00A859]">Play</span>
                  </span>
                  <span className="text-[#00A859] font-sans font-black">-তে</span>
                </span>
              </h2>

              <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
                কোনো মাসিক সাবস্ক্রিপশন চার্জ ছাড়াই আজই আপনার টার্ফ রেজিস্টার করুন। সরাসরি অ্যাপ থেকে মাঠের সব বুকিং কন্ট্রোল করুন এবং হাজারো খেলোয়াড়ের কাছে আপনার মাঠ পৌঁছে দিন।
              </p>

              {/* Quick Trust Highlights */}
              <div className="pt-2 space-y-2.5">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-800 font-bold">
                  <CheckCircle2 size={16} className="text-[#00A859] shrink-0" />
                  <span>১০০% ফ্রি রেজিস্ট্রেশন ও জিরো সেটআপ চার্জ</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-800 font-bold">
                  <CheckCircle2 size={16} className="text-[#00A859] shrink-0" />
                  <span>১২ ঘণ্টার মধ্যে ওনার অ্যাকাউন্ট অ্যাক্টিভেশন</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-800 font-bold">
                  <CheckCircle2 size={16} className="text-[#00A859] shrink-0" />
                  <span>২৪/৭ ডেডিকেটেড ম্যানেজার ও অন-গ্রাউন্ড সাপোর্ট</span>
                </div>
              </div>

              {/* Direct WhatsApp Reach */}
              <div className="pt-3">
                <a
                  href="https://wa.me/8801611920991?text=Hello%20TurfPlay%2C%20ami%20turf%20register%20korte%20chai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold text-[#00A859] hover:underline tracking-wide"
                >
                  <MessageCircle size={16} />
                  <span>ফরম পূরণ না করে সরাসরি হোয়াটসঅ্যাপে কথা বলুন</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </motion.div>

            {/* Right Col: The Live Registration Form (7 cols) */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-7"
            >
              <div className="bg-white border-2 border-[#00A859]/30 rounded-3xl p-6 sm:p-10 shadow-[0_20px_50px_rgba(0,168,89,0.12)] relative overflow-hidden backdrop-blur-2xl">
                
                {/* Accent top stripe */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-400 via-[#00A859] to-teal-400" />

                {!isSubmitted ? (
                  <>
                    <div className="mb-6 sm:mb-8">
                      <span className="text-[11px] font-bold text-[#00A859] bg-[#00A859]/10 px-3 py-1 rounded-full inline-block mb-2">
                        সহজ আবেদন
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                        টার্ফ রেজিস্ট্রেশন ফরম
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                        নিচের তথ্যগুলো পূরণ করে সাবমিট করুন। আমাদের টিম দ্রুত আপনার সাথে যোগাযোগ করে অ্যাকাউন্ট চালু করে দেবে।
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      
                      {/* Name & Email */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[11px] font-black text-slate-700 tracking-wider mb-1">
                            আপনার নাম <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <User size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                            <input
                              type="text"
                              required
                              placeholder="আপনার পুরো নাম লিখুন"
                              value={formData.ownerName}
                              onChange={e => handleInputChange('ownerName', e.target.value)}
                              className={`w-full bg-slate-50 border rounded-2xl py-3 pl-10 pr-3 text-xs sm:text-sm font-semibold text-slate-900 focus:outline-none focus:border-[#00A859] transition-all placeholder:text-slate-400 ${
                                errors.ownerName ? 'border-red-500' : 'border-slate-200'
                              }`}
                            />
                          </div>
                          {errors.ownerName && <p className="text-red-500 text-[10px] font-bold mt-1 pl-1">{errors.ownerName}</p>}
                        </div>

                        <div>
                          <label className="block text-[11px] font-black text-slate-700 tracking-wider mb-1">
                            ইমেইল অ্যাড্রেস <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <Mail size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                            <input
                              type="email"
                              required
                              placeholder="example@gmail.com"
                              value={formData.email}
                              onChange={e => handleInputChange('email', e.target.value)}
                              className={`w-full bg-slate-50 border rounded-2xl py-3 pl-10 pr-3 text-xs sm:text-sm font-semibold text-slate-900 focus:outline-none focus:border-[#00A859] transition-all placeholder:text-slate-400 ${
                                errors.email ? 'border-red-500' : 'border-slate-200'
                              }`}
                            />
                          </div>
                          {errors.email && <p className="text-red-500 text-[10px] font-bold mt-1 pl-1">{errors.email}</p>}
                        </div>
                      </div>

                      {/* Venue Name & Sport Type */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[11px] font-black text-slate-700 tracking-wider mb-1">
                            টার্ফ / ভেন্যুর নাম <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <Building2 size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                            <input
                              type="text"
                              required
                              placeholder="যেমন: ঢাকা এরিনা টার্ফ"
                              value={formData.venueName}
                              onChange={e => handleInputChange('venueName', e.target.value)}
                              className={`w-full bg-slate-50 border rounded-2xl py-3 pl-10 pr-3 text-xs sm:text-sm font-semibold text-slate-900 focus:outline-none focus:border-[#00A859] transition-all placeholder:text-slate-400 ${
                                errors.venueName ? 'border-red-500' : 'border-slate-200'
                              }`}
                            />
                          </div>
                          {errors.venueName && <p className="text-red-500 text-[10px] font-bold mt-1 pl-1">{errors.venueName}</p>}
                        </div>

                        <div>
                          <label className="block text-[11px] font-black text-slate-700 tracking-wider mb-1">
                            খেলার ধরন <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <Activity size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                            <select
                              required
                              value={formData.sportType}
                              onChange={e => handleInputChange('sportType', e.target.value)}
                              className={`w-full bg-slate-50 border rounded-2xl py-3 pl-10 pr-6 text-xs sm:text-sm font-semibold text-slate-900 focus:outline-none focus:border-[#00A859] transition-all cursor-pointer ${
                                errors.sportType ? 'border-red-500' : 'border-slate-200'
                              }`}
                            >
                              <option value="" disabled>খেলার ধরন নির্বাচন করুন</option>
                              {sportOptions.map(opt => (
                                <option key={opt.value} value={opt.value}>{opt.label}</option>
                              ))}
                            </select>
                          </div>
                          {errors.sportType && <p className="text-red-500 text-[10px] font-bold mt-1 pl-1">{errors.sportType}</p>}
                        </div>
                      </div>

                      {/* Contact Number & Location */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[11px] font-black text-slate-700 tracking-wider mb-1">
                            মোবাইল / হোয়াটসঅ্যাপ নম্বর <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <Phone size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                            <input
                              type="tel"
                              required
                              placeholder="০১XXXXXXXXX"
                              value={formData.contactNumber}
                              onChange={e => handleInputChange('contactNumber', e.target.value)}
                              className={`w-full bg-slate-50 border rounded-2xl py-3 pl-10 pr-3 text-xs sm:text-sm font-semibold text-slate-900 focus:outline-none focus:border-[#00A859] transition-all placeholder:text-slate-400 ${
                                errors.contactNumber ? 'border-red-500' : 'border-slate-200'
                              }`}
                            />
                          </div>
                          {errors.contactNumber && <p className="text-red-500 text-[10px] font-bold mt-1 pl-1">{errors.contactNumber}</p>}
                        </div>

                        <div>
                          <label className="block text-[11px] font-black text-slate-700 tracking-wider mb-1">
                            টার্ফের লোকেশন / এলাকা <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <MapPin size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                            <input
                              type="text"
                              required
                              placeholder="শহর, থানা বা পূর্ণ ঠিকানা"
                              value={formData.location}
                              onChange={e => handleInputChange('location', e.target.value)}
                              className={`w-full bg-slate-50 border rounded-2xl py-3 pl-10 pr-3 text-xs sm:text-sm font-semibold text-slate-900 focus:outline-none focus:border-[#00A859] transition-all placeholder:text-slate-400 ${
                                errors.location ? 'border-red-500' : 'border-slate-200'
                              }`}
                            />
                          </div>
                          {errors.location && <p className="text-red-500 text-[10px] font-bold mt-1 pl-1">{errors.location}</p>}
                        </div>
                      </div>

                      {/* Booking Number (Optional) */}
                      <div>
                        <label className="block text-[11px] font-black text-slate-700 tracking-wider mb-1">
                          বিকল্প বুকিং নম্বর (ঐচ্ছিক)
                        </label>
                        <div className="relative">
                          <PhoneCall size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                          <input
                            type="tel"
                            placeholder="টার্ফের বুকিং হটলাইন (যদি থাকে)"
                            value={formData.bookingNumber}
                            onChange={e => handleInputChange('bookingNumber', e.target.value)}
                            className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3 pl-10 pr-3 text-xs sm:text-sm font-semibold text-slate-900 focus:outline-none focus:border-[#00A859] transition-all placeholder:text-slate-400"
                          />
                        </div>
                      </div>

                      {/* Other Details */}
                      <div>
                        <label className="block text-[11px] font-black text-slate-700 tracking-wider mb-1">
                          টার্ফ সম্পর্কে অতিরিক্ত তথ্য (ঐচ্ছিক)
                        </label>
                        <div className="relative">
                          <MessageSquare size={15} className="absolute left-3.5 top-3.5 text-slate-400" />
                          <textarea
                            rows={3}
                            placeholder="টার্ফের সাইজ (যেমন: 6v6 বা 7v7), ইনডোর/আউটডোর বা বিশেষ কোনো তথ্য..."
                            value={formData.otherDetails}
                            onChange={e => handleInputChange('otherDetails', e.target.value)}
                            className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3 pl-10 pr-3 text-xs sm:text-sm font-semibold text-slate-900 focus:outline-none focus:border-[#00A859] transition-all placeholder:text-slate-400 resize-none"
                          />
                        </div>
                      </div>

                      {/* Submit CTA */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 bg-[#00A859] hover:bg-[#008f4c] text-white font-black text-sm uppercase tracking-wider rounded-2xl shadow-lg shadow-[#00A859]/25 hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer mt-1"
                      >
                        {isSubmitting ? (
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                          <>
                            <span>টার্ফ রেজিস্ট্রেশন সম্পন্ন করুন</span>
                            <ArrowRight size={17} />
                          </>
                        )}
                      </button>

                      <div className="pt-1 flex items-center justify-center gap-2 text-slate-500 text-[11px] font-medium">
                        <ShieldCheck size={14} className="text-[#00A859]" />
                        <span>১০০% নিরাপদ ও তথ্যের পূর্ণ গোপনীয়তা বজায় রাখা হয়</span>
                      </div>
                    </form>
                  </>
                ) : (
                  /* Success Screen */
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center"
                  >
                    <div className="w-18 h-18 bg-emerald-100 rounded-3xl flex items-center justify-center mx-auto mb-5 text-[#00A859] border border-emerald-300">
                      <CheckCircle2 size={42} className="stroke-[2.5]" />
                    </div>

                    <h3 className="text-2xl font-black text-slate-900 mb-2">
                      রেজিস্ট্রেশন সফলভাবে গৃহীত হয়েছে!
                    </h3>

                    <p className="text-slate-700 text-sm font-bold mb-3">
                      ধন্যবাদ <span className="text-[#00A859]">{formData.ownerName}</span>! আপনার টার্ফ <span className="text-slate-900">{formData.venueName}</span> এর রেজিস্ট্রেশন তথ্য আমাদের কাছে পৌঁছেছে।
                    </p>

                    <p className="text-slate-500 text-xs max-w-sm mx-auto mb-6">
                      আমাদের টিম শীঘ্রই <strong className="text-slate-800">{formData.contactNumber}</strong> নম্বরে কল অথবা হোয়াটসঅ্যাপে যোগাযোগ করে আপনার ওনার অ্যাকাউন্ট বুঝিয়ে দেবে।
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-3">
                      <a
                        href="https://wa.me/8801611920991?text=Hello%20TurfPlay%2C%20ami%20turf%20registration%20form%20submit%20korechi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#25D366] text-white font-black text-xs uppercase tracking-wider shadow-md hover:scale-105 transition-all"
                      >
                        <MessageCircle size={15} />
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
                        className="px-5 py-3 rounded-full bg-slate-100 text-slate-700 font-black text-xs uppercase tracking-wider hover:bg-slate-200 transition-all cursor-pointer"
                      >
                        অন্য আরেকটি টার্ফ রেজিস্টার করুন
                      </button>
                    </div>
                  </motion.div>
                )}

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════
          9. EXECUTIVE CONTACT & DIRECT OWNER SUPPORT HUB
      ═════════════════════════════════════════════════════════════════ */}
      <section id="contact" className="py-24 sm:py-32 bg-gradient-to-b from-[#0B0F19] via-[#0F172A] to-[#070A10] text-white relative overflow-hidden">
        
        {/* Multilayer Ambient Glow Effects */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#00A859]/15 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[450px] h-[450px] bg-teal-500/10 rounded-full blur-[150px] pointer-events-none" />
        
        {/* Subtle dot pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-60" />

        <div className="container-fluid relative z-10">
          <div className="max-w-4xl mx-auto">
            
            {/* Header */}
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/15 border border-emerald-400/30 rounded-full mb-4 shadow-sm backdrop-blur-md">
                <PhoneCall size={14} className="text-[#00FF88]" />
                <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-[#00FF88]">
                  ২৪/৭ সরাসরি ওনার সাপোর্ট হেল্পলাইন
                </span>
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white mb-4">
                টার্ফ নিয়ে কথা বলুন, <br />
                <span className="bg-gradient-to-r from-[#00FF88] via-emerald-400 to-teal-300 bg-clip-text text-transparent">
                  আমরা সার্বক্ষণিক প্রস্তুত
                </span>
              </h2>

              <p className="text-slate-300 text-sm sm:text-base font-medium max-w-xl mx-auto leading-relaxed">
                টার্ফ রেজিস্ট্রেশন, অনলাইন বুকিং ম্যানেজমেন্ট বা যেকোনো জিজ্ঞাসায় সরাসরি আমাদের এক্সপার্ট টিমের সাথে যোগাযোগ করুন।
              </p>
            </div>

            {/* 2 Luxury Interactive Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7 mb-10">
              
              {/* Card 1: Phone & WhatsApp Hub */}
              <div className="p-7 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-700/80 hover:border-[#00A859] shadow-xl hover:shadow-[0_20px_50px_rgba(0,168,89,0.18)] transition-all duration-300 relative group flex flex-col justify-between backdrop-blur-xl">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#00A859]/25 to-emerald-500/10 text-[#00FF88] border border-[#00A859]/30 flex items-center justify-center shadow-inner">
                      <PhoneCall size={22} />
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-black bg-emerald-950/80 text-emerald-300 border border-emerald-800/60 shadow-xs">
                      <span className="w-2 h-2 rounded-full bg-[#00FF88] animate-pulse" />
                      ২৪ ঘণ্টা খোলা
                    </span>
                  </div>

                  <div className="text-xs font-black text-emerald-400 uppercase tracking-wider">
                    হটলাইন ও হোয়াটসঅ্যাপ
                  </div>
                  <a 
                    href="tel:+8801611920991" 
                    className="text-2xl sm:text-3xl font-black text-white hover:text-[#00FF88] transition-colors block font-mono tracking-tight my-2"
                  >
                    +880 1611-920991
                  </a>
                  <p className="text-xs sm:text-sm text-slate-400 font-medium mb-6 leading-relaxed">
                    টার্ফ ওনার অনবোর্ডিং বা মাঠ সংক্রান্ত যেকোনো জরুরি প্রয়োজনে সরাসরি ফোন দিন।
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-800">
                  <a
                    href="tel:+8801611920991"
                    className="py-3 px-4 bg-slate-800 hover:bg-slate-700/90 text-white font-black text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 border border-slate-700/80 transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <Phone size={14} className="text-[#00FF88]" />
                    <span>কল করুন</span>
                  </a>

                  <a
                    href="https://wa.me/8801611920991?text=Hello%20TurfPlay%2C%20ami%20turf%20registration%20shomporke%20kotha%20bolte%20chai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-4 bg-[#25D366] hover:bg-[#1faa4f] text-white font-black text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all"
                  >
                    <MessageCircle size={15} />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Card 2: Official Email Support */}
              <div className="p-7 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-700/80 hover:border-cyan-500 shadow-xl hover:shadow-[0_20px_50px_rgba(6,182,212,0.15)] transition-all duration-300 relative group flex flex-col justify-between backdrop-blur-xl">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/10 text-cyan-400 border border-cyan-500/30 flex items-center justify-center shadow-inner">
                      <Mail size={22} />
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-black bg-cyan-950/80 text-cyan-300 border border-cyan-800/60 shadow-xs">
                      দ্রুত রেসপন্স
                    </span>
                  </div>

                  <div className="text-xs font-black text-cyan-400 uppercase tracking-wider">
                    অফিশিয়াল বিজনেস ইমেইল
                  </div>
                  <a 
                    href="mailto:turfplayofficial@gmail.com" 
                    className="text-xl sm:text-2xl font-black text-white hover:text-cyan-300 transition-colors block font-mono tracking-tight my-2.5 break-all"
                  >
                    turfplayofficial@gmail.com
                  </a>
                  <p className="text-xs sm:text-sm text-slate-400 font-medium mb-6 leading-relaxed">
                    পার্টনারশিপ প্রস্তাব, ফিচার অনুরোধ বা ব্যবসায়িক আলোচনার জন্য ইমেইল পাঠাতে পারেন।
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800">
                  <a
                    href="mailto:turfplayofficial@gmail.com"
                    className="w-full py-3 px-4 bg-slate-800 hover:bg-slate-700/90 text-white font-black text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 border border-slate-700/80 transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <Mail size={15} className="text-cyan-400" />
                    <span>ইমেইল পাঠান</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Bottom Registration Callout Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-950/70 via-slate-900 to-slate-900 border border-emerald-500/30 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left backdrop-blur-xl">
              <div>
                <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-bold text-[#00FF88] mb-1">
                  <span className="w-2 h-2 rounded-full bg-[#00FF88]" />
                  <span>বিনামূল্যে আজই শুরু করুন</span>
                </div>
                <h3 className="text-lg sm:text-2xl font-black text-white tracking-tight">
                  আপনার টার্ফ{' '}
                  <span className="font-serif tracking-tight text-white">
                    Turf<span className="italic text-[#00FF88]">Play</span>
                  </span>{' '}
                  নেটওয়ার্কে যুক্ত করুন
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 font-medium mt-1">
                  কোনো সেটআপ চার্জ নেই • সম্পূর্ণ ডিজিটাল কন্ট্রোল
                </p>
              </div>

              <a
                href="#register"
                className="px-8 py-3.5 bg-[#00A859] hover:bg-[#008f4c] text-white font-black text-xs sm:text-sm uppercase tracking-wider rounded-full shadow-lg shadow-[#00A859]/35 hover:scale-105 active:scale-95 transition-all flex items-center gap-2 shrink-0 cursor-pointer"
              >
                <span>রেজিস্ট্রেশন ফরম</span>
                <ArrowRight size={16} />
              </a>
            </div>

          </div>
        </div>
      </section>

      <AppStoreModal
        isOpen={isAppStoreModalOpen}
        onClose={() => setIsAppStoreModalOpen(false)}
      />

    </div>
  );
};

