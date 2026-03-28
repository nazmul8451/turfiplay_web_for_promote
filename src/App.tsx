/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import mockup1 from './assets/images/mockup1.jpg';
import mockup2 from './assets/images/mockup2.jpg';
import mockup3 from './assets/images/mockup3.jpg';
import footballIcon from './assets/images/sports/football.png';
import cricketIcon from './assets/images/sports/cricket.png';
import badmintonIcon from './assets/images/sports/badminton.png';
// Using football as placeholder for basketball due to quota
import basketballIcon from './assets/images/sports/football.png';
import {
  MapPin,
  Calendar,
  Zap,
  LayoutDashboard,
  Star,
  CheckCircle2,
  Search,
  MousePointerClick,
  Smartphone,
  ArrowRight,
  Instagram,
  Facebook,
  Twitter,
  Mail,
  Phone,
  X,
  Menu,
  ChevronRight,
  Clock,
  MessageSquare,
  BarChart3,
  ShieldCheck,
  Bell,
  Globe,
  Map
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-6 pt-10 md:pt-14">
      <nav className="max-w-[1440px] mx-auto glass-card px-8 py-4 flex justify-between items-center border border-white/10 shadow-2xl">
        <div
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="w-10 h-10 bg-brand-green rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(0,168,89,0.3)] group-hover:scale-110 transition-transform duration-500">
            <Zap className="text-black fill-black" size={20} />
          </div>
          <span className="text-2xl tracking-[-0.05em] text-white select-none">
            <span className="font-extralight opacity-80">Turfi</span>
            <span className="font-black text-brand-green italic drop-shadow-[0_0_15px_rgba(0,168,89,0.4)]">Play</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-12">
          <a href="#problem" className="text-[15px] font-black text-white/60 hover:text-brand-green transition-colors uppercase tracking-[0.3em]">Problem</a>
          <a href="#features" className="text-[15px] font-black text-white/60 hover:text-brand-green transition-colors uppercase tracking-[0.3em]">Features</a>
          <a href="#how-it-works" className="text-[15px] font-black text-white/60 hover:text-brand-green transition-colors uppercase tracking-[0.3em]">Process</a>
          <a href="#story" className="text-[15px] font-black text-white/60 hover:text-brand-green transition-colors uppercase tracking-[0.3em]">Our Story</a>
        </div>

        <div className="hidden md:flex items-center">
          <button className="px-8 py-3.5 bg-brand-green text-black font-black rounded-full hover:scale-105 transition-all shadow-[0_0_30px_rgba(0, 168, 89, 0.2)] uppercase tracking-tighter text-xs">
            Join Waitlist
          </button>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 glass-card border border-white/10 overflow-hidden"
          >
            <div className="px-6 py-8 space-y-6">
              <a href="#problem" onClick={() => setIsOpen(false)} className="block text-lg font-black text-white uppercase">Problem</a>
              <a href="#features" onClick={() => setIsOpen(false)} className="block text-lg font-black text-white uppercase">Features</a>
              <a href="#how-it-works" onClick={() => setIsOpen(false)} className="block text-lg font-black text-white uppercase">Process</a>
              <a href="#story" onClick={() => setIsOpen(false)} className="block text-lg font-black text-white uppercase">Our Story</a>
              <button className="w-full py-4 bg-brand-green text-black font-black rounded-2xl uppercase tracking-tighter">
                Join Waitlist
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const MockupScreen1 = () => (
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

const MockupScreen2 = () => (
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

const MockupScreen3 = () => (
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

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-mesh">
      {/* Dynamic Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            rotate: [0, 10, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-brand-green/5 blur-[120px] rounded-full"
        />
        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-green/10 blur-[150px] rounded-full"
        />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-24">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-24 lg:gap-64 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="hero-heading mb-14 leading-[1.1] text-5xl md:text-7xl lg:text-8xl tracking-tighter">
              Run Your Turf <br />
              Without <br />
              <span className="text-brand-green neon-glow">Booking Stress.</span>
            </h1>

            <p className="max-w-2xl text-xl md:text-2xl text-white/40 mb-20 leading-relaxed font-medium mx-auto lg:mx-0">
              Manage bookings, prevent double slots, track payments, and run your turf professionally — all from one simple app.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-10 mb-32">
              <div className="w-full sm:w-auto px-10 py-6 bg-brand-green/10 border border-brand-green/20 backdrop-blur-xl rounded-3xl flex items-center justify-center gap-5 shadow-[0_0_50px_rgba(0,168,89,0.1)]">
                <span className="flex h-3 w-3 rounded-full bg-brand-green animate-pulse" />
                <span className="text-sm font-black text-brand-green uppercase tracking-[0.4em]">Launching Soon in Bangladesh 🇧🇩</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            {/* App Mockups Container */}
            <div className="relative z-10 flex items-center justify-center py-12">
              {/* Main Phone (Screen 3) */}
              <motion.div
                initial={{ y: 0 }}
                className="relative z-20 w-[260px] md:w-[320px] aspect-[9/19] bg-[#0F172A] rounded-[3.5rem] p-3 shadow-[0_0_100px_rgba(0, 168, 89, 0.1)] border border-white/10"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-[#0F172A] rounded-b-3xl z-50 flex justify-center items-start pt-1">
                  <div className="w-12 h-1 bg-black/40 rounded-full" />
                </div>
                <div className="w-full h-full rounded-[2.8rem] overflow-hidden bg-black">
                  <img src={mockup2} alt="Mockup 2 Dashboard" className="w-full h-full object-cover" />
                </div>
              </motion.div>

              {/* Secondary Phone Left (Screen 1) */}
              <motion.div
                initial={{ rotate: -15, x: 0 }}
                className="absolute top-10 -left-16 md:-left-32 w-[220px] md:w-[280px] aspect-[9/19] bg-[#0F172A] rounded-[3rem] p-2.5 shadow-xl opacity-40 -z-10 overflow-hidden border border-white/5"
              >
                <div className="w-full h-full rounded-[2.4rem] overflow-hidden bg-black">
                  <img src={mockup1} alt="Mockup 1" className="w-full h-full object-cover" />
                </div>
              </motion.div>

              {/* Secondary Phone Right (Screen 2) */}
              <motion.div
                initial={{ rotate: 15, x: 0 }}
                className="absolute top-10 -right-16 md:-right-32 w-[220px] md:w-[280px] aspect-[9/19] bg-[#0F172A] rounded-[3rem] p-2.5 shadow-xl opacity-40 -z-10 overflow-hidden border border-white/5"
              >
                <div className="w-full h-full rounded-[2.4rem] overflow-hidden bg-black">
                  <img src={mockup3} alt="Mockup 3" className="w-full h-full object-cover" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Problem = () => {
  const problems = [
    {
      title: "The WhatsApp Chaos",
      desc: "Scrolling through 100 messages just to find who booked the 8 PM slot.",
      icon: Phone
    },
    {
      title: "The Double Booking Nightmare",
      desc: "Two teams show up for the same slot because you forgot to write it down.",
      icon: X
    },
    {
      title: "Missing Payment Records",
      desc: "Not knowing who paid the advance and who still owes you money.",
      icon: LayoutDashboard
    }
  ];

  return (
    <section id="problem" className="py-24 lg:py-40 bg-brand-dark relative overflow-hidden">
      {/* Abstract background shapes */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-brand-green/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-24">
        <div className="grid lg:grid-cols-2 gap-24 lg:gap-32 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight tracking-tighter">
              Still Using WhatsApp <br />
              <span className="text-white/20">& Excel?</span>
            </h2>
            <p className="text-lg md:text-xl text-white/40 mb-12 leading-relaxed max-w-xl font-medium">
              WhatsApp and Excel are great for messaging, but they weren't built to run a professional sports facility. Stop wasting time on manual entry.
            </p>
            <div className="space-y-8">
              {problems.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-8 group items-start"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center flex-shrink-0 group-hover:border-brand-green/30 transition-all duration-500 group-hover:scale-110">
                    <p.icon className="text-brand-green/60 group-hover:text-brand-green" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2 tracking-tight group-hover:text-brand-green transition-colors">{p.title}</h4>
                    <p className="text-base text-white/30 leading-relaxed font-medium group-hover:text-white/50 transition-colors">{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-[4rem] bg-gradient-to-br from-white/10 to-transparent p-[1px]">
              <div className="w-full h-full rounded-[3.9rem] bg-brand-surface/50 backdrop-blur-3xl overflow-hidden flex items-center justify-center p-12 relative group">
                <div className="absolute inset-0 bg-brand-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                <div className="text-center relative z-10">
                  <div className="w-32 h-32 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-10 border border-red-500/20 shadow-[0_0_40px_rgba(239,68,68,0.1)]">
                    <X className="text-red-500" size={50} />
                  </div>
                  <p className="text-3xl font-black text-white mb-6 italic tracking-tight leading-tight">"Wait, let me check my Excel..."</p>
                  <p className="text-lg text-white/30 font-medium">The sound of a business losing its professional edge.</p>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};






const ComingSoonModal = ({ isOpen, onClose, title }: { isOpen: boolean, onClose: () => void, title: string }) => {
  if (!isOpen) return null;
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-xl"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, y: 20, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.9, y: 20, opacity: 0 }}
          className="glass-card max-w-lg w-full !p-12 text-center relative overflow-hidden border-brand-green/20 shadow-[0_0_100px_rgba(0,168,89,0.1)]"
          onClick={e => e.stopPropagation()}
        >
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-brand-green to-transparent" />

          <div className="w-20 h-20 rounded-2xl bg-brand-green/10 flex items-center justify-center mx-auto mb-10 border border-brand-green/20">
            <Zap className="text-brand-green animate-pulse" size={32} />
          </div>

          <h3 className="text-4xl font-black text-white mb-6 uppercase italic tracking-tighter">
            {title} <br />
            <span className="text-brand-green">Coming Soon</span>
          </h3>

          <p className="text-lg text-white/40 font-medium leading-relaxed mb-12">
            We are currently in <span className="text-white">Development Mode</span>. Our team is working hard to bring the ultimate TurfiPlay experience to Bangladesh.
          </p>

          <button
            onClick={onClose}
            className="w-full py-6 bg-brand-green text-black font-black rounded-xl hover:scale-[1.02] transition-all uppercase italic tracking-[0.2em] text-sm shadow-[0_0_40px_rgba(0,168,89,0.3)]"
          >
            Stay With Us
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const Features = () => {
  const [modalData, setModalData] = useState<{ isOpen: boolean, title: string }>({ isOpen: false, title: '' });

  const features = [
    {
      title: "Dashboard",
      desc: "Daily slot booking dashboard to see everything at a glance.",
      icon: LayoutDashboard,
      isComingSoon: true
    },
    {
      title: "Mobile App",
      desc: "Full-featured booking companion for both Players and Owners.",
      icon: Smartphone,
      isComingSoon: true
    }
  ];

  return (
    <section id="features" className="py-24 lg:py-48 bg-brand-bg relative overflow-hidden">
      <ComingSoonModal
        isOpen={modalData.isOpen}
        onClose={() => setModalData({ ...modalData, isOpen: false })}
        title={modalData.title}
      />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1000px] -z-10 opacity-20 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-green/10 blur-[200px] rounded-full" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-32"
        >
          <h2 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase italic leading-none">Meet <span className="text-brand-green">TurfiPlay</span></h2>
          <p className="text-xl md:text-2xl text-white/30 max-w-2xl mx-auto font-medium leading-relaxed uppercase tracking-widest">Designed for Real Turf Booking Situations. <br />
            <span className="text-brand-green">Built for Sports Turf Owners, Not General Booking Apps.</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => feature.isComingSoon && setModalData({ isOpen: true, title: feature.title })}
              className={`glass-card p-10 group transition-all duration-500 relative overflow-hidden ${feature.isComingSoon ? 'cursor-pointer hover:border-brand-green/40 hover:bg-white/[0.03]' : ''}`}
            >
              {feature.isComingSoon && (
                <div className="absolute top-4 right-4 text-[10px] font-black text-brand-green uppercase tracking-[0.3em] bg-brand-green/10 px-3 py-1 rounded-full border border-brand-green/20 group-hover:bg-brand-green group-hover:text-black transition-all">
                  Click to View
                </div>
              )}

              <div className="w-16 h-16 rounded-2xl bg-brand-green/10 flex items-center justify-center mb-8 border border-brand-green/20 group-hover:scale-110 transition-transform duration-500">
                <feature.icon className="text-brand-green" size={28} />
              </div>
              <h3 className="text-2xl font-black text-white mb-6 uppercase italic tracking-tighter group-hover:text-brand-green transition-colors">{feature.title}</h3>
              <p className="text-lg text-white/40 font-medium leading-relaxed mb-6">{feature.desc}</p>

              {feature.isComingSoon && (
                <div className="flex items-center gap-3 text-brand-green/60 group-hover:text-brand-green transition-colors">
                  <span className="text-xs font-black uppercase tracking-[0.2em]">Preview Dashboard</span>
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};




const ManagementFeatures = () => {
  const ownerFeatures = [
    { icon: Smartphone, title: "Mobile Login", desc: "Login with your mobile number. No complex passwords." },
    { icon: Zap, title: "Add Booking in 10s", desc: "Add a new booking in seconds. It's that fast." },
    { icon: CheckCircle2, title: "Auto Slot Locking", desc: "Slot locks automatically once a booking is added." },
    { icon: Star, title: "Customer Tracking", desc: "Track customer name and mobile for every booking." }
  ];

  const reportFeatures = [
    { icon: LayoutDashboard, title: "Daily Reports", desc: "See exactly how much you earned today." },
    { icon: Zap, title: "Monthly Reports", desc: "Track your monthly revenue and growth trends." },
    { icon: Smartphone, title: "Payment Status", desc: "Mark bookings as paid or pending with one tap." },
    { icon: CheckCircle2, title: "Slot Analytics", desc: "Know which slots are your most popular ones." }
  ];

  return (
    <section id="features" className="py-24 lg:py-40 bg-brand-navy relative">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-brand-green/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-32"
        >
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter uppercase italic">Professional Management</h2>
          <p className="text-white/30 max-w-2xl mx-auto text-xl font-medium leading-relaxed uppercase tracking-[0.2em]">Everything you need to scale your turf business.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Booking Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-12 lg:p-16 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 group-hover:scale-110 transition-all duration-1000">
              <Smartphone size={200} />
            </div>
            <h3 className="text-4xl font-black text-white mb-16 flex items-center gap-6">
              <div className="w-12 h-12 rounded-xl bg-brand-green/10 flex items-center justify-center">
                <Smartphone className="text-brand-green" size={24} />
              </div>
              Booking Workflow
            </h3>
            <div className="grid sm:grid-cols-2 gap-12">
              {ownerFeatures.map((f, i) => (
                <div key={i} className="group/item">
                  <f.icon className="text-brand-green/40 mb-6 group-hover/item:text-brand-green transition-colors" size={28} />
                  <h4 className="text-xl font-bold text-white mb-3 tracking-tight">{f.title}</h4>
                  <p className="text-white/30 text-base leading-relaxed font-medium group-hover/item:text-white/50 transition-colors">{f.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Reports Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-12 lg:p-16 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 group-hover:scale-110 transition-all duration-1000">
              <LayoutDashboard size={200} />
            </div>
            <h3 className="text-4xl font-black text-white mb-16 flex items-center gap-6">
              <div className="w-12 h-12 rounded-xl bg-brand-green/10 flex items-center justify-center">
                <LayoutDashboard className="text-brand-green" size={24} />
              </div>
              Revenue Tracking
            </h3>
            <div className="grid sm:grid-cols-2 gap-12">
              {reportFeatures.map((f, i) => (
                <div key={i} className="group/item">
                  <f.icon className="text-brand-green/40 mb-6 group-hover/item:text-brand-green transition-colors" size={28} />
                  <h4 className="text-xl font-bold text-white mb-3 tracking-tight">{f.title}</h4>
                  <p className="text-white/30 text-base leading-relaxed font-medium group-hover/item:text-white/50 transition-colors">{f.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};


const Comparison = () => {
  const rows = [
    { feature: "Booking Speed", old: "Slow (WhatsApp/Calls)", new: "Instant (10 Seconds)" },
    { feature: "Slot Accuracy", old: "Risky (Double Bookings)", new: "100% (Auto-Locking)" },
    { feature: "Revenue Tracking", old: "Messy (Manual Excel)", new: "Clear (Auto-Reports)" },
    { feature: "Customer Data", old: "Scattered Messages", new: "Organized Database" },
    { feature: "Management", old: "Stressful & Manual", new: "Professional & Digital" }
  ];

  return (
    <section className="py-40 lg:py-60 bg-brand-surface border-y border-white/5 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mb-32"
        >
          <h2 className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tighter uppercase italic">Excel vs <span className="text-brand-green">TurfiPlay</span></h2>
          <p className="text-2xl text-white/30 font-medium leading-relaxed uppercase tracking-[0.2em]">The era of digital turf is here.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card overflow-hidden !p-0 border border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.5)]"
        >
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 bg-white/[0.03]">
                <th className="p-8 text-xs font-black uppercase tracking-[0.4em] text-white/30">Feature</th>
                <th className="p-8 text-xs font-black uppercase tracking-[0.4em] text-white/30">WhatsApp/Excel</th>
                <th className="p-8 text-xs font-black uppercase tracking-[0.4em] text-brand-green">TurfiPlay</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className="border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors group">
                  <td className="p-8 text-xl font-black text-white tracking-tight group-hover:text-brand-green transition-colors">{row.feature}</td>
                  <td className="p-8 text-lg text-white/30 font-medium">{row.old}</td>
                  <td className="p-8 text-xl text-brand-green font-black tracking-tight">{row.new}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
};


const HowItWorks = () => {
  const userSteps = [
    { title: "Map Discovery", desc: "Find nearby turfs directly on Google Maps integration.", icon: Map },
    { title: "Select Slot", desc: "View real-time availability and pick your preferred time.", icon: Calendar },
    { title: "Instant Booking", desc: "Secure your slot with integrated digital payments (Bkash/Nagad).", icon: Zap },
    { title: "Booking History", desc: "Manage upcoming games and view all past transactions.", icon: LayoutDashboard }
  ];

  const ownerSteps = [
    { title: "Turf Profile", desc: "Set up your turf with images, facilities, and dynamic pricing.", icon: MapPin },
    { title: "Dynamic Slots", desc: "Manage pricing and availability for every single hour.", icon: Clock },
    { title: "Handle Requests", desc: "Receive and confirm booking requests instantly via dashboard.", icon: MessageSquare },
    { title: "Revenue Stats", desc: "Complete statistics of daily and monthly business growth.", icon: BarChart3 }
  ];

  const coreLogics = [
    { title: "Real-time Sync", desc: "Instant 'Unavailable' status to prevent any double-bookings.", icon: ShieldCheck },
    { title: "Automated Alerts", desc: "Confirmations and reminders for both User and Owner.", icon: Bell },
    { title: "Central Control", desc: "Secure data handling and transaction protection.", icon: Globe }
  ];

  return (
    <section id="how-it-works" className="py-24 lg:py-40 bg-brand-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-green/5 blur-[200px] rounded-full pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-24 relative">
        <div className="text-center mb-32">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter uppercase italic">OUR <span className="text-brand-green">Ecosystem.</span></h2>
          <p className="text-white/30 max-w-2xl mx-auto text-xl font-medium leading-relaxed uppercase tracking-[0.2em]">One bridge between Players and Turf Owners.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 mb-32">
          {/* User Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="inline-flex items-center gap-4 bg-brand-green/10 border border-brand-green/20 px-6 py-3 rounded-2xl">
              <Smartphone className="text-brand-green" size={20} />
              <span className="text-sm font-black text-brand-green uppercase tracking-[0.2em]">For Players</span>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              {userSteps.map((s, i) => (
                <div key={i} className="glass-card !p-8 group hover:bg-white/[0.05] transition-all">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform">
                    <s.icon className="text-brand-green" size={24} />
                  </div>
                  <h4 className="text-lg font-black text-white mb-3 uppercase italic tracking-tight">{s.title}</h4>
                  <p className="text-sm text-white/40 leading-relaxed font-medium">{s.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Owner Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="inline-flex items-center gap-4 bg-brand-green/10 border border-brand-green/20 px-6 py-3 rounded-2xl">
              <LayoutDashboard className="text-brand-green" size={20} />
              <span className="text-sm font-black text-brand-green uppercase tracking-[0.2em]">For Turf Owners</span>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              {ownerSteps.map((s, i) => (
                <div key={i} className="glass-card !p-8 group hover:bg-white/[0.05] transition-all">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform">
                    <s.icon className="text-brand-green" size={24} />
                  </div>
                  <h4 className="text-lg font-black text-white mb-3 uppercase italic tracking-tight">{s.title}</h4>
                  <p className="text-sm text-white/40 leading-relaxed font-medium">{s.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Core Intelligence Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card !p-12 border border-brand-green/20 shadow-[0_0_50px_rgba(0,168,89,0.05)]"
        >
          <div className="grid md:grid-cols-3 gap-12">
            {coreLogics.map((log, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="p-3 bg-brand-green/10 rounded-xl border border-brand-green/20">
                  <log.icon className="text-brand-green" size={24} />
                </div>
                <div>
                  <h5 className="text-white font-black uppercase italic tracking-tight mb-2">{log.title}</h5>
                  <p className="text-sm text-white/30 font-medium leading-relaxed">{log.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};


const Story = () => {
  return (
    <section id="story" className="py-24 lg:py-48 bg-brand-bg relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-grid" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-4 mb-16 px-6 py-3 rounded-full bg-brand-green/10 border border-brand-green/20">
            <Star className="text-brand-green animate-pulse" size={16} />
            <span className="text-xs font-black text-brand-green uppercase tracking-[0.4em]">Real Stories, Real Challenges</span>
          </div>

          <h2 className="text-6xl md:text-9xl font-black text-white mb-20 italic leading-none tracking-tighter text-center uppercase">
            The WhatsApp <br /> <span className="text-brand-green">Nightmare.</span>
          </h2>

          <div className="space-y-24 text-2xl md:text-3xl text-white/40 leading-relaxed font-medium max-w-5xl mx-auto text-center">
            <p className="hover:text-white/60 transition-colors duration-700">
              It’s Friday evening. Your phone is buzzing every 2 minutes. Five different people are asking for the 8 PM slot. You're scrolling through WhatsApp, trying to remember if you already promised it to someone else.
            </p>

            <motion.p
              whileInView={{ scale: [0.98, 1], opacity: [0, 1] }}
              className="text-white text-3xl md:text-5xl font-black tracking-tighter leading-tight italic"
            >
              You write it down in a notebook, but then someone calls to cancel. You forget to cross it out. Another team calls, you tell them it's full. <br />
              <span className="text-white/20">Later, you realize the slot went empty.</span>
            </motion.p>

            <p className="hover:text-white/60 transition-colors duration-700">
              "Is the slot free?", "Can I get a discount?", "Where is the location?". The endless phone calls never stop. You're a turf owner, not a call center agent.
            </p>


            <p className="text-white/80 font-black text-3xl md:text-4xl leading-tight">
              TurfiPlay was built to end this chaos. No more scrolling through messages. No more endless, distracting calls. Just one dashboard to rule them all.
            </p>

            <p className="text-brand-green font-black text-3xl md:text-6xl tracking-tighter pt-12 animate-pulse-slow">
              RUN YOUR TURF LIKE A PRO.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};


const StayTuned = () => {
  return (
    <section className="py-24 lg:py-48 bg-brand-navy relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-brand-green/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-24 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-4 mb-12 px-6 py-3 rounded-full bg-brand-green/10 border border-brand-green/20">
            <Zap className="text-brand-green animate-pulse" size={16} />
            <span className="text-xs font-black text-brand-green uppercase tracking-[0.4em]">Follow the Journey</span>
          </div>

          <h2 className="text-5xl md:text-8xl font-black text-white mb-8 italic uppercase tracking-tighter">
            Stay <span className="text-brand-green">Tuned.</span>
          </h2>

          <p className="text-xl text-white/30 mb-24 max-w-3xl mx-auto font-medium leading-relaxed uppercase tracking-widest">
            We're building the future of sports management. Join the inner circle for exclusive updates.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-8 lg:gap-12">
            {[
              { name: "Facebook", icon: Facebook, sub: "Join the community" },
              { name: "Instagram", icon: Instagram, sub: "See the action" }
            ].map((social, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ y: -10 }}
                className="glass-card flex items-center gap-10 !p-10 group min-w-[320px]"
              >
                <div className="w-20 h-20 rounded-2xl bg-brand-green/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-brand-green/20 transition-all duration-500">
                  <social.icon size={36} className="text-brand-green" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em] mb-2">{social.sub}</p>
                  <p className="text-3xl font-black text-white tracking-tighter group-hover:text-brand-green transition-colors">{social.name}</p>
                </div>
                <ChevronRight className="ml-auto text-white/10 group-hover:text-brand-green group-hover:translate-x-2 transition-all" size={24} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};


const Waitlist = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email || phone) {
      setSubmitted(true);
      setEmail('');
      setPhone('');
    }
  };

  return (
    <section className="py-24 lg:py-50 relative overflow-hidden bg-brand-bg">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-brand-green/5 blur-[250px] rounded-full" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="glass-card !p-12 lg:!p-20 border-white/10 relative overflow-hidden text-center group max-w-5xl mx-auto"
        >
          <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-brand-green to-transparent shadow-[0_0_30px_rgba(0,168,89,0.5)]" />

          <h2 className="text-4xl md:text-8xl font-black text-white mb-8 leading-tight tracking-tighter uppercase italic">
            Ready to Run <br />
            <span className="text-brand-green text-gradient">Your Turf?</span>
          </h2>

          <p className="text-xl text-white/30 mb-20 max-w-2xl mx-auto font-medium leading-relaxed">
            The era of manual management is over. Be among the first to experience TurfiPlay in Bangladesh.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-6 px-8 text-white focus:outline-none focus:border-brand-green/50 focus:bg-white/[0.05] transition-all placeholder:text-white/20 font-bold"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-6 px-8 text-white focus:outline-none focus:border-brand-green/50 focus:bg-white/[0.05] transition-all placeholder:text-white/20 font-bold"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full btn-primary !py-8 !text-2xl uppercase tracking-widest italic"
              >
                Claim Early Access
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-20"
            >
              <div className="w-24 h-24 bg-brand-green/20 rounded-full flex items-center justify-center mx-auto mb-10 border border-brand-green/30">
                <CheckCircle2 size={48} className="text-brand-green" />
              </div>
              <h3 className="text-4xl font-black text-white mb-6 uppercase italic">You're on the list!</h3>
              <p className="text-xl text-white/40 font-medium">We'll reach out to you as soon as we're ready for Liftoff.</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="pt-48 lg:pt-[420px] pb-10 lg:pb-16 bg-brand-bg border-t border-white/5 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-24 mb-24">
          <div className="lg:col-span-2">
            <div
              className="flex items-center gap-3 mb-8 cursor-pointer group w-fit"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <div className="w-10 h-10 bg-brand-green rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(0,168,89,0.3)] group-hover:scale-110 transition-transform duration-500">
                <Zap className="text-black fill-black" size={20} />
              </div>
              <span className="text-2xl tracking-[-0.05em] text-white select-none">
                <span className="font-extralight opacity-80">Turfi</span>
                <span className="font-black text-brand-green italic drop-shadow-[0_0_15px_rgba(0,168,89,0.4)]">Play</span>
              </span>
            </div>
            <p className="text-lg text-white/30 max-w-md leading-relaxed font-medium mb-12">
              The professional management system for sports turf owners. Built for speed, accuracy, and growth.
            </p>
            <div className="flex gap-6">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-green hover:text-black transition-all group">
                  <Icon size={20} className="text-white/40 group-hover:text-black" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-black text-white uppercase tracking-[0.4em] mb-10">Platform</h4>
            <ul className="space-y-6 text-white/30 font-bold uppercase tracking-widest text-[13px]">
              <li><a href="#" className="hover:text-brand-green transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-brand-green transition-colors">How It Works</a></li>
              <li><a href="#" className="hover:text-brand-green transition-colors">Waitlist</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black text-white uppercase tracking-[0.4em] mb-10">Contact</h4>
            <ul className="space-y-6 text-white/30 font-bold text-[15px]">
              <li className="flex items-center gap-4">
                <Mail size={16} className="text-brand-green" />
                rimon124567@gmail.com
              </li>
              <li className="flex items-center gap-4">
                <MapPin size={16} className="text-brand-green" />
                DHAKA, BANGLADESH
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};


// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen bg-brand-dark selection:bg-brand-green selection:text-black bg-grid">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <Features />
        <ManagementFeatures />
        <Comparison />
        <Story />
        <StayTuned />
        <Waitlist />
      </main>
      <Footer />
    </div>
  );
}
