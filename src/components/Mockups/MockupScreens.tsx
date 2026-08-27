import React from 'react';
import { LayoutDashboard, Smartphone, CheckCircle2, ChevronRight, Star, Zap } from 'lucide-react';

export const MockupScreen1 = () => (
  <div className="bg-[#0A0F0D] h-full text-white overflow-y-auto custom-scrollbar">
    {/* Status Bar */}
    <div className="px-6 pt-4 pb-2 flex justify-between items-center opacity-60">
      <span className="text-[10px] font-bold">9:41</span>
      <div className="flex gap-1">
        <div className="w-3 h-3 rounded-full border border-white/40" />
        <div className="w-3 h-3 rounded-full border border-white/40" />
      </div>
    </div>

    {/* Dashboard Header */}
    <div className="px-5 py-4">
      <div className="flex justify-between items-center mb-6">
        <div>
          <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest mb-1">ড্যাশবোর্ড</p>
          <div className="flex items-center gap-1">
            <LayoutDashboard size={12} className="text-brand-green" />
            <span className="text-sm font-bold">অ্যারেনা ৭১ - বনানী</span>
          </div>
        </div>
        <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
          <div className="relative">
            <Smartphone size={18} className="text-white/60" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-8">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
          <p className="text-[8px] text-white/40 font-bold uppercase mb-1">আজকের আয়</p>
          <p className="text-lg font-black text-brand-green">৳১২,৫০০</p>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
          <p className="text-[8px] text-white/40 font-bold uppercase mb-1">সক্রিয় স্লট</p>
          <p className="text-lg font-black text-brand-green">৮/১২</p>
        </div>
      </div>

      <h3 className="text-lg font-black mb-4 flex items-center justify-between">
        দৈনিক স্লট ড্যাশবোর্ড
        <span className="text-[10px] text-brand-green font-bold uppercase tracking-widest">আজ</span>
      </h3>

      <div className="space-y-3">
        {[
          { time: "বিকেল ০৪:০০", status: "বুকড", name: "রিমন আহমেদ" },
          { time: "বিকেল ০৫:০০", status: "বুকড", name: "সিফাত উল্লাহ" },
          { time: "সন্ধ্যা ০৬:০০", status: "খালি", name: "-" },
          { time: "রাত ০৭:০০", status: "বুকড", name: "তানভীর হোসেন" }
        ].map((slot, i) => (
          <div key={i} className={`p-4 rounded-2xl border transition-all ${slot.status === 'বুকড' ? 'bg-white/5 border-white/10' : 'bg-brand-green/10 border-brand-green/30'}`}>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-xs font-bold">{slot.time}</p>
                <p className="text-[10px] text-white/40">{slot.name}</p>
              </div>
              <div className={`px-2 py-1 rounded-lg text-[8px] font-black uppercase ${slot.status === 'বুকড' ? 'bg-white/10 text-white/60' : 'bg-brand-green text-black'}`}>
                {slot.status}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const MockupScreen2 = () => (
  <div className="bg-[#0A0F0D] h-full text-white overflow-y-auto custom-scrollbar">
    {/* Status Bar */}
    <div className="px-6 pt-4 pb-2 flex justify-between items-center opacity-60">
      <span className="text-[10px] font-bold">9:41</span>
      <div className="flex gap-1">
        <div className="w-3 h-3 rounded-full border border-white/40" />
        <div className="w-3 h-3 rounded-full border border-white/40" />
      </div>
    </div>

    <div className="p-6">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
          <ChevronRight className="rotate-180 text-white/60" size={20} />
        </div>
        <h3 className="text-xl font-black">বুকিং যোগ করুন</h3>
      </div>

      <div className="space-y-6 mb-8">
        <div>
          <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest mb-2">কাস্টমার নাম</p>
          <input
            disabled
            value="রিমন আহমেদ"
            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-sm font-medium"
          />
        </div>
        <div>
          <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest mb-2">মোবাইল নম্বর</p>
          <input
            disabled
            value="01712XXXXXX"
            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-sm font-medium"
          />
        </div>
        <div>
          <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest mb-2">স্লট নির্বাচন করুন</p>
          <div className="p-4 rounded-2xl bg-brand-green/10 border border-brand-green/30 flex justify-between items-center">
            <span className="text-sm font-bold">সন্ধ্যা ০৬:০০ - ০৭:০০</span>
            <CheckCircle2 size={16} className="text-brand-green" />
          </div>
        </div>
      </div>

      <button className="w-full py-4 bg-brand-green text-black font-black rounded-2xl shadow-xl shadow-brand-green/20">
        নিশ্চিত ও স্লট লক করুন
      </button>
    </div>
  </div>
);

export const MockupScreen3 = () => (
  <div className="bg-[#0A0F0D] h-full text-white overflow-y-auto custom-scrollbar">
    {/* Status Bar */}
    <div className="px-6 pt-4 pb-2 flex justify-between items-center opacity-60">
      <span className="text-[10px] font-bold">9:41</span>
      <div className="flex gap-1">
        <div className="w-3 h-3 rounded-full border border-white/40" />
        <div className="w-3 h-3 rounded-full border border-white/40" />
      </div>
    </div>

    <div className="px-6 py-4">
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-2xl font-black">রেভিনিউ</h3>
        <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
          <Star size={18} className="text-brand-green" />
        </div>
      </div>

      <div className="bg-brand-green/10 border border-brand-green/20 rounded-3xl p-6 mb-8">
        <p className="text-[10px] text-brand-green font-bold uppercase tracking-widest mb-2">মোট মাসিক আয়</p>
        <p className="text-4xl font-black text-white tracking-tighter">৳৩,৪৫,০০০</p>
        <div className="mt-4 flex items-center gap-2 text-brand-green">
          <Zap size={14} />
          <span className="text-[10px] font-bold">গত মাস থেকে +১২%</span>
        </div>
      </div>

      <div className="mb-8">
        <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest mb-4">রেভিনিউ চার্ট</p>
        <div className="h-32 flex items-end gap-2">
          {[40, 60, 45, 80, 55, 90, 70].map((h, i) => (
            <div key={i} className="flex-1 bg-brand-green/20 rounded-t-lg relative group">
              <div style={{ height: `${h}%` }} className="bg-brand-green rounded-t-lg transition-all" />
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-2 text-[8px] text-white/20 font-bold uppercase">
          <span>সোম</span>
          <span>রবি</span>
        </div>
      </div>

      <div className="space-y-3">
        <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest mb-4">সাম্প্রতিক লেনদেন</p>
        {[
          { name: "সিফাত উল্লাহ", amount: "৳১,৫০০", date: "আজ, বিকেল ০৫:০০" },
          { name: "তানভীর হোসেন", amount: "৳১,৫০০", date: "আজ, রাত ০৭:০০" }
        ].map((tx, i) => (
          <div key={i} className="flex justify-between items-center p-4 bg-white/5 rounded-2xl border border-white/5">
            <div>
              <p className="text-xs font-bold">{tx.name}</p>
              <p className="text-[8px] text-white/40">{tx.date}</p>
            </div>
            <p className="text-xs font-black text-brand-green">{tx.amount}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const PlayerMockupScreen1 = () => (
  <div className="bg-[#0A0F0D] h-full text-white overflow-y-auto custom-scrollbar p-5">
    <div className="flex justify-between items-center mb-4 pt-2">
      <div>
        <p className="text-[9px] text-brand-green font-extrabold uppercase">আপনার লোকেশন</p>
        <p className="text-xs font-black text-white">বনানী, ঢাকা</p>
      </div>
      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold">
        👤
      </div>
    </div>

    <div className="bg-white/5 border border-white/10 rounded-2xl p-3 mb-4 flex items-center gap-2">
      <span className="text-xs text-white/40">🔍</span>
      <span className="text-xs text-white/60 font-medium">কাছের টার্ফ বা গ্রাউন্ড খুঁজুন...</span>
    </div>

    <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest mb-2">জনপ্রিয় টার্ফসমূহ</p>

    <div className="space-y-3">
      {[
        { name: "অ্যারেনা ৭১ টার্ফ", location: "বনানী (০.৫ কিমি)", rating: "৪.৯ ★", slots: "৫টি খালি স্লট", price: "৳১,৫০০/ঘণ্টা" },
        { name: "কিকঅফ স্পোর্টস কমপ্লেক্স", location: "গুলশান (১.২ কিমি)", rating: "৪.৮ ★", slots: "৩টি খালি স্লট", price: "৳১,৮০০/ঘণ্টা" },
        { name: "গোললাইন ফিল্ড", location: "মহাখালী (২.০ কিমি)", rating: "৪.৭ ★", slots: "৮টি খালি স্লট", price: "৳১,২০০/ঘণ্টা" }
      ].map((turf, i) => (
        <div key={i} className="p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-green/40 transition-all">
          <div className="flex justify-between items-start mb-1.5">
            <div>
              <h4 className="text-xs font-black text-white">{turf.name}</h4>
              <p className="text-[9px] text-white/50 font-semibold">{turf.location}</p>
            </div>
            <span className="text-[9px] font-black text-yellow-400 bg-yellow-400/10 px-2 py-0.5 rounded-full">{turf.rating}</span>
          </div>
          <div className="flex justify-between items-center pt-2 border-t border-white/5">
            <span className="text-[9px] font-extrabold text-brand-green">{turf.slots}</span>
            <span className="text-xs font-black text-white">{turf.price}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export const PlayerMockupScreen2 = () => (
  <div className="bg-[#0A0F0D] h-full text-white overflow-y-auto custom-scrollbar p-5 flex flex-col justify-between">
    <div>
      <div className="text-center pt-2 mb-6">
        <span className="text-[9px] font-black text-brand-green uppercase tracking-widest bg-brand-green/10 px-3 py-1 rounded-full border border-brand-green/20">বুকিং নিশ্চিত হয়েছে</span>
        <h3 className="text-lg font-black text-white mt-3">ডিজিটাল ম্যাচ পাস</h3>
      </div>

      <div className="bg-gradient-to-b from-white/10 to-white/5 border border-white/15 rounded-3xl p-5 relative overflow-hidden mb-4">
        <div className="absolute top-0 right-0 w-20 h-20 bg-brand-green/20 blur-xl rounded-full" />
        
        <p className="text-[9px] text-white/40 font-bold uppercase tracking-widest mb-1">টিকিট কোড</p>
        <p className="text-xl font-black text-brand-green tracking-wider mb-4">#TP-99824</p>

        <div className="space-y-3 text-xs">
          <div>
            <p className="text-[8px] text-white/40 uppercase">টার্ফ লোকেশন</p>
            <p className="font-bold text-white">অ্যারেনা ৭১ - বনানী, ঢাকা</p>
          </div>
          <div>
            <p className="text-[8px] text-white/40 uppercase">তারিখ ও সময়</p>
            <p className="font-bold text-white">আজ রাত ০৮:০০ - ০৯:০০</p>
          </div>
          <div className="flex justify-between items-center pt-2 border-t border-white/10">
            <div>
              <p className="text-[8px] text-white/40 uppercase">পেমেন্ট স্ট্যাটাস</p>
              <p className="font-bold text-brand-green">পরিশোধিত (বিকাশ)</p>
            </div>
            <span className="text-[10px] font-black bg-brand-green text-black px-2.5 py-1 rounded-lg">ভেরিফাইড</span>
          </div>
        </div>
      </div>
    </div>

    <button className="w-full py-3 bg-brand-green text-black font-black text-xs rounded-xl shadow-lg shadow-brand-green/20">
      টিকিট শেয়ার বা ডাউনলোড করুন
    </button>
  </div>
);

export const PlayerMockupScreen3 = () => (
  <div className="bg-[#0A0F0D] h-full text-white overflow-y-auto custom-scrollbar p-5">
    <div className="pt-2 mb-5">
      <p className="text-[9px] text-brand-green font-extrabold uppercase mb-1">কমিউনিটি & স্কোয়াড</p>
      <h3 className="text-lg font-black text-white">টিম তৈরি ও ম্যাচ জয়েন</h3>
    </div>

    <div className="space-y-3">
      <div className="p-4 rounded-2xl bg-brand-green/10 border border-brand-green/30">
        <div className="flex justify-between items-center mb-2">
          <span className="text-[9px] font-black text-brand-green uppercase bg-brand-green/20 px-2 py-0.5 rounded">খেলোয়াড় প্রয়োজন</span>
          <span className="text-[9px] text-white/60 font-bold">আজ রাত ০৯:০০</span>
        </div>
        <h4 className="text-xs font-black text-white mb-1">এফসি রেন্জার্স (৭v৭ ম্যাচ)</h4>
        <p className="text-[9px] text-white/60 mb-3">আমাদের টিমে ২টি প্লেয়ার বাকি আছে। ফ্রেন্ডলি ফুটবল ম্যাচ।</p>
        <button className="w-full py-2 bg-brand-green text-black font-black text-[10px] rounded-lg">
          ম্যাচে যোগ দিন (৳১৫০/জন)
        </button>
      </div>

      <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
        <div className="flex justify-between items-center mb-2">
          <span className="text-[9px] font-black text-white/60 uppercase bg-white/10 px-2 py-0.5 rounded">টিম চ্যালেঞ্জ</span>
          <span className="text-[9px] text-white/60 font-bold">কাল বিকেল ০৫:০০</span>
        </div>
        <h4 className="text-xs font-black text-white mb-1">স্ট্রাইকার্স নাইট ম্যাচ</h4>
        <p className="text-[9px] text-white/60 mb-3">প্রতিপক্ষ টিম আহবান করা হচ্ছে। ফিল্ড খরচ ৫০/৫০ ভাগ।</p>
        <button className="w-full py-2 bg-white/10 hover:bg-brand-green hover:text-black transition-all text-white font-bold text-[10px] rounded-lg">
          চ্যালেঞ্জ গ্রহণ করুন
        </button>
      </div>
    </div>
  </div>
);
