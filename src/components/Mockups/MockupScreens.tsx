import React from 'react';
import { LayoutDashboard, Smartphone, CheckCircle2, ChevronRight, Star, Zap } from 'lucide-react';
import playerHome1Img from '../../assets/images/homepage1.png';
import playerHome2Img from '../../assets/images/homepage2.png';
import playerMapImg from '../../assets/images/mapscreen.png';
import playerMock1Img from '../../assets/images/mockup1.jpg';
import playerMock2Img from '../../assets/images/mockup2.jpg';
import playerMock3Img from '../../assets/images/mockup3.jpg';

/* ── OWNER MOCKUP SCREENS ── */
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

/* ── REAL PLAYER SCREEN IMAGE MOCKUPS ── */
export const PlayerImageScreen = ({ 
  src, 
  alt, 
  onZoom 
}: { 
  src: string; 
  alt: string; 
  onZoom?: () => void;
}) => (
  <div 
    onClick={onZoom}
    className="relative w-full h-full bg-[#0A0F0D] overflow-hidden flex flex-col justify-start items-center cursor-pointer group"
  >
    <div className="w-full h-full overflow-y-auto custom-scrollbar flex items-start justify-center">
      <img
        src={src}
        alt={alt}
        className="w-full h-auto min-h-full object-cover object-top [image-rendering:-webkit-optimize-contrast] contrast-[1.03] brightness-[1.02]"
        loading="eager"
      />
    </div>

    {/* Hover Zoom Hint Overlay */}
    <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex flex-col items-center justify-center gap-2 p-4 text-center z-30">
      <div className="w-12 h-12 rounded-full bg-[#00A859] text-white flex items-center justify-center shadow-xl border border-white/20 transform group-hover:scale-110 transition-transform">
        <span className="text-lg">🔍</span>
      </div>
      <span className="bg-slate-900/90 text-white text-[11px] font-black uppercase px-3 py-1 rounded-full border border-white/20 shadow-lg tracking-wider">
        ফুল এইচডি ক্লিয়ার ভিউ দেখুন
      </span>
    </div>
  </div>
);

export const PlayerMockupScreen1 = ({ onZoom }: { onZoom?: () => void }) => (
  <PlayerImageScreen src={playerHome1Img} alt="TurfPlay Player Home Screen" onZoom={onZoom} />
);

export const PlayerMockupScreen2 = ({ onZoom }: { onZoom?: () => void }) => (
  <PlayerImageScreen src={playerMapImg} alt="TurfPlay Player Map Location Screen" onZoom={onZoom} />
);

export const PlayerMockupScreen3 = ({ onZoom }: { onZoom?: () => void }) => (
  <PlayerImageScreen src={playerHome2Img} alt="TurfPlay Player Nearby Turfs Screen" onZoom={onZoom} />
);

export const PlayerMockupScreen4 = ({ onZoom }: { onZoom?: () => void }) => (
  <PlayerImageScreen src={playerMock1Img} alt="TurfPlay Field Booking Screen" onZoom={onZoom} />
);

export const PlayerMockupScreen5 = ({ onZoom }: { onZoom?: () => void }) => (
  <PlayerImageScreen src={playerMock2Img} alt="TurfPlay Player Dashboard Screen" onZoom={onZoom} />
);

export const PlayerMockupScreen6 = ({ onZoom }: { onZoom?: () => void }) => (
  <PlayerImageScreen src={playerMock3Img} alt="TurfPlay Turf Ratings & Reviews Screen" onZoom={onZoom} />
);

