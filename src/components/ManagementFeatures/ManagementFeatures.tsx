import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Smartphone, 
  Zap, 
  CheckCircle2, 
  LayoutDashboard, 
  Calendar, 
  TrendingUp, 
  ShieldCheck, 
  FileSpreadsheet, 
  Users, 
  Clock, 
  Sparkles, 
  Lock, 
  BellRing,
  ArrowRight,
  ChevronRight
} from 'lucide-react';

export const ManagementFeatures = () => {
  const [activeTab, setActiveTab] = useState<'calendar' | 'revenue' | 'crm'>('calendar');

  return (
    <section id="management" className="py-16 sm:py-24 lg:py-32 bg-white relative overflow-hidden">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#00A859]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#00A859]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container-fluid relative z-10">

        {/* ── SECTION HEADER ── */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-[#00A859] text-xs sm:text-sm font-extrabold tracking-wider uppercase mb-3.5 shadow-xs"
          >
            <Sparkles size={15} className="text-[#00A859]" />
            <span>TURFPLAY ENTERPRISE OS • মাঠ মালিক ও ম্যানেজারদের জন্য</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight mb-4 uppercase leading-tight"
          >
            প্রফেশনাল <span className="font-serif italic text-[#00A859] lowercase font-normal">ম্যানেজমেন্ট।</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-slate-600 max-w-2xl mx-auto text-base sm:text-lg md:text-xl font-semibold leading-relaxed"
          >
            একটি সেন্ট্রাল স্মার্ট ড্যাশবোর্ডে স্লট নিয়ন্ত্রণ, ক্যাশ ও অনলাইন হিসাব এবং স্বয়ংক্রিয় বিজনেস গ্রোথ।
          </motion.p>
        </div>

        {/* ── INTERACTIVE TAB SELECTOR ── */}
        <div className="flex justify-center mb-10 sm:mb-14">
          <div className="inline-flex items-center p-2 sm:p-2.5 rounded-2xl bg-slate-100 border border-slate-200 shadow-inner max-w-full overflow-x-auto gap-2">
            <button
              onClick={() => setActiveTab('calendar')}
              className={`flex items-center gap-2.5 px-6 sm:px-8 py-3.5 rounded-xl font-black text-sm sm:text-base md:text-lg transition-all duration-200 cursor-pointer shrink-0 ${
                activeTab === 'calendar'
                  ? 'bg-white text-slate-900 shadow-md shadow-slate-200/70 border border-slate-200/90'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Calendar size={20} className={activeTab === 'calendar' ? 'text-[#00A859]' : 'text-slate-400'} />
              <span>স্মার্ট স্লট ক্যালেন্ডার</span>
            </button>

            <button
              onClick={() => setActiveTab('revenue')}
              className={`flex items-center gap-2.5 px-6 sm:px-8 py-3.5 rounded-xl font-black text-sm sm:text-base md:text-lg transition-all duration-200 cursor-pointer shrink-0 ${
                activeTab === 'revenue'
                  ? 'bg-white text-slate-900 shadow-md shadow-slate-200/70 border border-slate-200/90'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <TrendingUp size={20} className={activeTab === 'revenue' ? 'text-[#00A859]' : 'text-slate-400'} />
              <span>দৈনিক রেভিনিউ ও ক্যাশ অডিট</span>
            </button>

            <button
              onClick={() => setActiveTab('crm')}
              className={`flex items-center gap-2.5 px-6 sm:px-8 py-3.5 rounded-xl font-black text-sm sm:text-base md:text-lg transition-all duration-200 cursor-pointer shrink-0 ${
                activeTab === 'crm'
                  ? 'bg-white text-slate-900 shadow-md shadow-slate-200/70 border border-slate-200/90'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Users size={20} className={activeTab === 'crm' ? 'text-[#00A859]' : 'text-slate-400'} />
              <span>কাস্টমার ডেটাবেজ ও এসএমএস</span>
            </button>
          </div>
        </div>

        {/* ── INTERACTIVE LIVE DASHBOARD CANVAS SHOWCASE ── */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 sm:mb-20 rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 p-4 sm:p-6 lg:p-8 border border-slate-800 shadow-2xl shadow-slate-950/40 relative overflow-hidden"
        >
          {/* Subtle Glow behind Dashboard */}
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#00A859]/15 rounded-full blur-3xl pointer-events-none" />

          {/* Top Window Bar (Mac/Enterprise Style) */}
          <div className="flex items-center justify-between pb-4 sm:pb-5 mb-5 border-b border-slate-800/90 text-sm sm:text-base">
            <div className="flex items-center gap-2.5">
              <span className="w-3.5 h-3.5 rounded-full bg-red-500/80" />
              <span className="w-3.5 h-3.5 rounded-full bg-amber-500/80" />
              <span className="w-3.5 h-3.5 rounded-full bg-emerald-500/80" />
              <span className="ml-2 font-mono text-xs sm:text-sm md:text-base text-slate-200 font-bold hidden sm:inline">
                TurfPlay Enterprise OS • Manager Dashboard v3.2
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-black">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                লাইভ ক্লাউড সিঙ্ক চালু
              </span>
            </div>
          </div>

          {/* Dynamic Interactive Content Area */}
          <AnimatePresence mode="wait">
            {activeTab === 'calendar' && (
              <motion.div
                key="tab-calendar"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-5"
              >
                {/* Dashboard KPI Top Ribbon */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-slate-800/80 border border-slate-700/70 rounded-2xl p-4 sm:p-5">
                    <div className="text-xs sm:text-base text-slate-300 font-bold mb-1">আজকের মোট স্লট</div>
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-white">১৪ / ১৬টি বুকড</div>
                    <div className="text-xs sm:text-sm text-emerald-400 font-bold mt-1.5">৮৭.৫% মাঠ অকুপেন্সি</div>
                  </div>

                  <div className="bg-slate-800/80 border border-slate-700/70 rounded-2xl p-4 sm:p-5">
                    <div className="text-xs sm:text-base text-slate-300 font-bold mb-1">আজকের মোট আয়</div>
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#00FF88]">৳ ৪২,৫০০</div>
                    <div className="text-xs sm:text-sm text-emerald-400 font-bold mt-1.5">+১৮.৪% গত সপ্তাহের তুলনায়</div>
                  </div>

                  <div className="bg-slate-800/80 border border-slate-700/70 rounded-2xl p-4 sm:p-5">
                    <div className="text-xs sm:text-base text-slate-300 font-bold mb-1">অনলাইন পেমেন্ট</div>
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-white">৳ ২৮,৫০০</div>
                    <div className="text-xs sm:text-sm text-slate-400 font-semibold mt-1.5">বিকাশ ও নগদ অটোমেটেড</div>
                  </div>

                  <div className="bg-slate-800/80 border border-slate-700/70 rounded-2xl p-4 sm:p-5">
                    <div className="text-xs sm:text-base text-slate-300 font-bold mb-1">ক্যাশ ড্রয়ার হিসাব</div>
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-white">৳ ১৪,০০০</div>
                    <div className="text-xs sm:text-sm text-slate-400 font-semibold mt-1.5">কাউন্টার ক্যাশ ভেরিফাইড</div>
                  </div>
                </div>

                {/* Simulated Live Slot Timeline Grid */}
                <div className="bg-slate-950/90 border border-slate-800 rounded-2xl p-5 sm:p-6 overflow-hidden">
                  <div className="flex items-center justify-between mb-4 text-sm sm:text-base">
                    <span className="font-black text-slate-200 text-base sm:text-lg">পিচ ১ • প্রাইম ফুটবল শিডিউল (আজকের স্লটসমূহ)</span>
                    <span className="text-emerald-400 font-mono text-xs sm:text-sm font-bold">তারিখ: ১৭ সেপ্টেম্বর, ২০২৬</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
                    <div className="bg-slate-900 border-l-4 border-emerald-500 p-4 sm:p-5 rounded-xl">
                      <div className="flex items-center justify-between text-xs sm:text-sm mb-2">
                        <span className="font-mono text-emerald-400 font-bold">০৫:০০ PM - ০৬:০০ PM</span>
                        <span className="text-xs font-black bg-emerald-500/20 text-emerald-300 px-2.5 py-0.5 rounded">পেইড</span>
                      </div>
                      <div className="font-black text-base sm:text-lg text-white">উইকএন্ড স্ট্রাইকার্স</div>
                      <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1.5">বিকাশ • ৳ ৩,০০০</div>
                    </div>

                    <div className="bg-slate-900 border-l-4 border-emerald-500 p-4 sm:p-5 rounded-xl">
                      <div className="flex items-center justify-between text-xs sm:text-sm mb-2">
                        <span className="font-mono text-emerald-400 font-bold">০৬:০০ PM - ০৭:০০ PM</span>
                        <span className="text-xs font-black bg-emerald-500/20 text-emerald-300 px-2.5 py-0.5 rounded">পেইড</span>
                      </div>
                      <div className="font-black text-base sm:text-lg text-white">ধানমন্ডি এফসি</div>
                      <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1.5">নগদ • ৳ ৩,০০০</div>
                    </div>

                    <div className="bg-slate-900 border-l-4 border-emerald-500 p-4 sm:p-5 rounded-xl">
                      <div className="flex items-center justify-between text-xs sm:text-sm mb-2">
                        <span className="font-mono text-emerald-400 font-bold">০৭:০০ PM - ০৮:০০ PM</span>
                        <span className="text-xs font-black bg-emerald-500/20 text-emerald-300 px-2.5 py-0.5 rounded">পেইড</span>
                      </div>
                      <div className="font-black text-base sm:text-lg text-white">সিটি ওয়ারিয়র্স</div>
                      <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1.5">বিকাশ • ৳ ৩,৫০০</div>
                    </div>

                    <div className="bg-slate-900/70 border border-dashed border-emerald-500/60 p-4 sm:p-5 rounded-xl flex flex-col justify-between hover:bg-slate-900 transition-colors">
                      <div className="flex items-center justify-between text-xs sm:text-sm mb-2">
                        <span className="font-mono text-slate-300 font-bold">০৮:০০ PM - ০৯:০০ PM</span>
                        <span className="text-xs bg-emerald-500 text-slate-950 px-2.5 py-0.5 rounded font-black">ফাঁকা স্লট</span>
                      </div>
                      <div className="font-bold text-base sm:text-lg text-emerald-400 flex items-center gap-1.5">
                        <Zap size={16} />
                        <span>১০ সেকেন্ডে স্লট লক করুন</span>
                      </div>
                      <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1.5">রেট: ৳ ৩,৫০০ / ঘণ্টা</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'revenue' && (
              <motion.div
                key="tab-revenue"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
                  <div className="bg-slate-800/80 border border-slate-700/70 rounded-2xl p-5 sm:p-6">
                    <h4 className="text-xs sm:text-sm font-bold text-slate-300 uppercase tracking-wider mb-2">এই মাসের মোট রেভিনিউ</h4>
                    <div className="text-3xl sm:text-5xl font-black text-[#00FF88]">৳ ৮,৪৫,০০০</div>
                    <p className="text-xs sm:text-sm text-emerald-400 mt-2 font-bold">+২৪.২% গত মাসের তুলনায় প্রবৃদ্ধি</p>
                    <div className="mt-6 pt-4 border-t border-slate-700 text-xs sm:text-sm text-slate-200 flex justify-between font-semibold">
                      <span>মোট বুকিং: ২৯৮টি</span>
                      <span>গড় রেট: ৳ ২,৮৩৫</span>
                    </div>
                  </div>

                  <div className="bg-slate-800/80 border border-slate-700/70 rounded-2xl p-5 sm:p-6">
                    <h4 className="text-xs sm:text-sm font-bold text-slate-300 uppercase tracking-wider mb-3">পেমেন্ট মেথড ব্রেকডাউন</h4>
                    <div className="space-y-3 text-xs sm:text-sm">
                      <div className="flex justify-between text-slate-200 font-semibold">
                        <span>বিকাশ সরাসরি পেমেন্ট</span>
                        <span className="font-black text-white">৳ ৫,২০,০০০ (৬১%)</span>
                      </div>
                      <div className="w-full h-2.5 rounded-full bg-slate-700 overflow-hidden">
                        <div className="w-[61%] h-full bg-[#00FF88]" />
                      </div>

                      <div className="flex justify-between text-slate-200 pt-2 font-semibold">
                        <span>নগদ ও কাউন্টার ক্যাশ</span>
                        <span className="font-black text-white">৳ ৩,২৫,০০০ (৩৯%)</span>
                      </div>
                      <div className="w-full h-2.5 rounded-full bg-slate-700 overflow-hidden">
                        <div className="w-[39%] h-full bg-amber-400" />
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-800/80 border border-slate-700/70 rounded-2xl p-5 sm:p-6 flex flex-col justify-between">
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-300 uppercase tracking-wider mb-2">অডিট ও এক্সেল এক্সপোর্ট</h4>
                      <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                        এক ক্লিকেই দৈনিক বা মাসিক আয়-ব্যয়ের লেজার এক্সেল বা পিডিএফ ফরম্যাটে ডাউনলোড করুন।
                      </p>
                    </div>
                    <div className="mt-6 inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl bg-[#00A859] hover:bg-[#008f4c] text-white font-bold text-sm sm:text-base cursor-pointer transition-colors shadow-md">
                      <FileSpreadsheet size={18} />
                      <span>মাসিক এক্সেল রিপোর্ট ডাউনলোড</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'crm' && (
              <motion.div
                key="tab-crm"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-4"
              >
                <div className="bg-slate-800/80 border border-slate-700/70 rounded-2xl p-5 sm:p-6">
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-black text-white text-base sm:text-xl">গ্রাহক ডেটাবেজ ও অটোমেটেড নোটিফিকেশন</span>
                    <span className="text-xs sm:text-sm text-emerald-400 bg-emerald-500/20 px-3.5 py-1 rounded-full font-bold">
                      ১,৪৫০+ নিয়মিত কাস্টমার প্রোফাইল
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm">
                    <div className="bg-slate-900 p-5 rounded-xl border border-slate-800">
                      <div className="flex items-center gap-2 text-emerald-400 font-bold mb-2 text-base sm:text-lg">
                        <BellRing size={18} />
                        <span>ইনস্ট্যান্ট এসএমএস রিমাইন্ডার</span>
                      </div>
                      <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                        খেলার ২ ঘণ্টা আগে দলের ক্যাপ্টেনকে স্বয়ংক্রিয়ভাবে স্লট টাইমিংয়ের এসএমএস চলে যায়।
                      </p>
                    </div>

                    <div className="bg-slate-900 p-5 rounded-xl border border-slate-800">
                      <div className="flex items-center gap-2 text-emerald-400 font-bold mb-2 text-base sm:text-lg">
                        <Users size={18} />
                        <span>টপ রেগুলার প্লেয়ার ট্র্যাকিং</span>
                      </div>
                      <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                        কোন দল প্রতি সপ্তাহে নিয়মিত খেলে তাদের নাম ও বকেয়া স্ট্যাটাস এক ক্লিকেই দৃশ্যমান।
                      </p>
                    </div>

                    <div className="bg-slate-900 p-5 rounded-xl border border-slate-800">
                      <div className="flex items-center gap-2 text-emerald-400 font-bold mb-2 text-base sm:text-lg">
                        <Zap size={18} />
                        <span>অফ-পিক প্রমোশনাল ক্যাম্পেইন</span>
                      </div>
                      <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                        ফাঁকা স্লটগুলো পূরণ করতে এক ক্লিকে টার্ফের সকল পুরোনো কাস্টমারদের কাছে অফার পাঠান।
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* ── 4 CORE ENTERPRISE OPERATIONAL PILLARS ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 mb-14 sm:mb-20">
          
          {/* Pillar 1 */}
          <div className="bg-white border border-slate-200/90 hover:border-[#00A859] rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-xl hover:shadow-[#00A859]/10 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-[#00A859] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-xs">
                <Zap size={28} />
              </div>
              <div className="text-xs sm:text-sm font-black uppercase tracking-wider text-[#00A859] mb-2">
                জিরো লেটেন্সি
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-3 tracking-tight leading-snug">
                ১০ সেকেন্ডে স্লট লক
              </h3>
              <p className="text-slate-700 text-base sm:text-[17px] leading-relaxed font-medium">
                ফোন বা হোয়াটসঅ্যাপে আসা বুকিং মাত্র ৩টি ট্যাপে ক্যালেন্ডারে লক করে ফেলুন। সেন্ট্রাল ক্লাউডে সাথে সাথে অটো সিঙ্ক।
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-700">
              <CheckCircle2 size={16} className="text-[#00A859]" />
              <span>কল কনফ্লিক্ট পুরোপুরি বন্ধ</span>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="bg-white border border-slate-200/90 hover:border-[#00A859] rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-xl hover:shadow-[#00A859]/10 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-[#00A859] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-xs">
                <FileSpreadsheet size={28} />
              </div>
              <div className="text-xs sm:text-sm font-black uppercase tracking-wider text-[#00A859] mb-2">
                ফিন্যান্সিয়াল অডিট
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-3 tracking-tight leading-snug">
                দৈনিক ক্যাশ ও অনলাইন হিসাব
              </h3>
              <p className="text-slate-700 text-base sm:text-[17px] leading-relaxed font-medium">
                ক্যাশ ড্রয়ার এবং বিকাশ/নগদের আলাদা স্বয়ংক্রিয় হিসাব। দিনশেষে ১ ক্লিকেই প্রফেশনাল এক্সেল বা পিডিএফ অডিট রিপোর্ট।
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-700">
              <CheckCircle2 size={16} className="text-[#00A859]" />
              <span>১০০% নির্ভুল হিসাব</span>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="bg-white border border-slate-200/90 hover:border-[#00A859] rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-xl hover:shadow-[#00A859]/10 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-[#00A859] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-xs">
                <Lock size={28} />
              </div>
              <div className="text-xs sm:text-sm font-black uppercase tracking-wider text-[#00A859] mb-2">
                মাল্টি-ইউজার
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-3 tracking-tight leading-snug">
                স্টাফ রোল ও সিকিউরিটি
              </h3>
              <p className="text-slate-700 text-base sm:text-[17px] leading-relaxed font-medium">
                ম্যানেজার ও গ্রাউন্ড স্টাফদের জন্য আলাদা পারমিশন। সংবেদনশীল রেভিনিউ তথ্য শুধু টার্ফ মালিকের পাসওয়ার্ডেই সুরক্ষিত।
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-700">
              <ShieldCheck size={16} className="text-[#00A859]" />
              <span>রোল বেসড অ্যাক্সেস কন্ট্রোল</span>
            </div>
          </div>

          {/* Pillar 4 */}
          <div className="bg-white border border-slate-200/90 hover:border-[#00A859] rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-xl hover:shadow-[#00A859]/10 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-[#00A859] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-xs">
                <TrendingUp size={28} />
              </div>
              <div className="text-xs sm:text-sm font-black uppercase tracking-wider text-[#00A859] mb-2">
                রেভিনিউ বুস্ট
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-3 tracking-tight leading-snug">
                অফ-পিক ডাইনামিক প্রাইসিং
              </h3>
              <p className="text-slate-700 text-base sm:text-[17px] leading-relaxed font-medium">
                দুপুরের বা ফাঁকা স্লটগুলোতে অটোমেটিক ডিসকাউন্ট দিয়ে বেশি ম্যাচ বুকিং আনুন এবং মাঠের সার্বিক আয় ৩৫% পর্যন্ত বাড়ান।
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-700">
              <CheckCircle2 size={16} className="text-[#00A859]" />
              <span>+৩৫% মাঠ ইউটিলাইজেশন</span>
            </div>
          </div>

        </div>

        {/* ── BOTTOM QUANTIFIABLE STATS STRIP ── */}
        <div className="p-7 sm:p-10 bg-slate-50 border border-slate-200/80 rounded-3xl grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight">০ মিনিট</div>
            <div className="text-sm sm:text-lg text-slate-800 font-bold mt-2">দিনশেষের অডিট সময় (১০০% অটো)</div>
          </div>

          <div>
            <div className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#00A859] tracking-tight">০%</div>
            <div className="text-sm sm:text-lg text-slate-800 font-bold mt-2">ডাবল-বুকিং বা মিস-কমিউনিকেশন</div>
          </div>

          <div>
            <div className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight">+৩৫%</div>
            <div className="text-sm sm:text-lg text-slate-800 font-bold mt-2">গড় অফ-পিক স্লট বুকিং বৃদ্ধি</div>
          </div>

          <div>
            <div className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#00A859] tracking-tight">১০ সেকেন্ড</div>
            <div className="text-sm sm:text-lg text-slate-800 font-bold mt-2">নতুন বুকিং এন্ট্রি ও লক স্পিড</div>
          </div>
        </div>

      </div>
    </section>
  );
};

