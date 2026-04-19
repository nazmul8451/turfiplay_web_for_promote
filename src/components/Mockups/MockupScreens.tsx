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
          <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest mb-1">Dashboard</p>
          <div className="flex items-center gap-1">
            <LayoutDashboard size={12} className="text-brand-green" />
            <span className="text-sm font-bold">Arena 71 - Banani</span>
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
          <p className="text-[8px] text-white/40 font-bold uppercase mb-1">Today's Earnings</p>
          <p className="text-lg font-black text-brand-green">৳12,500</p>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
          <p className="text-[8px] text-white/40 font-bold uppercase mb-1">Active Slots</p>
          <p className="text-lg font-black text-brand-green">8/12</p>
        </div>
      </div>

      <h3 className="text-lg font-black mb-4 flex items-center justify-between">
        Daily Slot Dashboard
        <span className="text-[10px] text-brand-green font-bold uppercase tracking-widest">Today</span>
      </h3>

      <div className="space-y-3">
        {[
          { time: "04:00 PM", status: "Booked", name: "Rimon Ahmed" },
          { time: "05:00 PM", status: "Booked", name: "Sifat Ullah" },
          { time: "06:00 PM", status: "Available", name: "-" },
          { time: "07:00 PM", status: "Booked", name: "Tanvir Hossain" }
        ].map((slot, i) => (
          <div key={i} className={`p-4 rounded-2xl border transition-all ${slot.status === 'Booked' ? 'bg-white/5 border-white/10' : 'bg-brand-green/10 border-brand-green/30'}`}>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-xs font-bold">{slot.time}</p>
                <p className="text-[10px] text-white/40">{slot.name}</p>
              </div>
              <div className={`px-2 py-1 rounded-lg text-[8px] font-black uppercase ${slot.status === 'Booked' ? 'bg-white/10 text-white/60' : 'bg-brand-green text-black'}`}>
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
        <h3 className="text-xl font-black">Add Booking</h3>
      </div>

      <div className="space-y-6 mb-8">
        <div>
          <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest mb-2">Customer Name</p>
          <input
            disabled
            value="Rimon Ahmed"
            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-sm font-medium"
          />
        </div>
        <div>
          <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest mb-2">Mobile Number</p>
          <input
            disabled
            value="01712XXXXXX"
            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-sm font-medium"
          />
        </div>
        <div>
          <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest mb-2">Select Slot</p>
          <div className="p-4 rounded-2xl bg-brand-green/10 border border-brand-green/30 flex justify-between items-center">
            <span className="text-sm font-bold">06:00 PM - 07:00 PM</span>
            <CheckCircle2 size={16} className="text-brand-green" />
          </div>
        </div>
      </div>

      <button className="w-full py-4 bg-brand-green text-black font-black rounded-2xl shadow-xl shadow-brand-green/20">
        CONFIRM & LOCK SLOT
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
        <h3 className="text-2xl font-black">Earnings</h3>
        <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
          <Star size={18} className="text-brand-green" />
        </div>
      </div>

      <div className="bg-brand-green/10 border border-brand-green/20 rounded-3xl p-6 mb-8">
        <p className="text-[10px] text-brand-green font-bold uppercase tracking-widest mb-2">Total Monthly Revenue</p>
        <p className="text-4xl font-black text-white tracking-tighter">৳3,45,000</p>
        <div className="mt-4 flex items-center gap-2 text-brand-green">
          <Zap size={14} />
          <span className="text-[10px] font-bold">+12% from last month</span>
        </div>
      </div>

      <div className="mb-8">
        <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest mb-4">Revenue Chart</p>
        <div className="h-32 flex items-end gap-2">
          {[40, 60, 45, 80, 55, 90, 70].map((h, i) => (
            <div key={i} className="flex-1 bg-brand-green/20 rounded-t-lg relative group">
              <div style={{ height: `${h}%` }} className="bg-brand-green rounded-t-lg transition-all" />
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-2 text-[8px] text-white/20 font-bold uppercase">
          <span>Mon</span>
          <span>Sun</span>
        </div>
      </div>

      <div className="space-y-3">
        <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest mb-4">Recent Transactions</p>
        {[
          { name: "Sifat Ullah", amount: "৳1,500", date: "Today, 05:00 PM" },
          { name: "Tanvir Hossain", amount: "৳1,500", date: "Today, 07:00 PM" }
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
