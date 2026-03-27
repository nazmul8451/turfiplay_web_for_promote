/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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
  ChevronRight
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-6 pt-6 md:pt-8">
      <nav className="max-w-[1440px] mx-auto glass-card px-8 py-4 flex justify-between items-center border border-white/10 shadow-2xl">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-brand-green rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(0, 168, 89, 0.3)]">
            <Zap className="text-black fill-black" size={20} />
          </div>
          <span className="text-2xl font-black tracking-tighter text-white">
            TURFI<span className="text-brand-green">PLAY</span>
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-12">
          <a href="#problem" className="text-[10px] font-black text-white/60 hover:text-brand-green transition-colors uppercase tracking-[0.3em]">Problem</a>
          <a href="#features" className="text-[10px] font-black text-white/60 hover:text-brand-green transition-colors uppercase tracking-[0.3em]">Features</a>
          <a href="#how-it-works" className="text-[10px] font-black text-white/60 hover:text-brand-green transition-colors uppercase tracking-[0.3em]">Process</a>
          <a href="#story" className="text-[10px] font-black text-white/60 hover:text-brand-green transition-colors uppercase tracking-[0.3em]">Our Story</a>
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
    <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-40 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-20%] w-[80%] h-[80%] bg-brand-green/10 blur-[200px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-brand-green/5 blur-[180px] rounded-full" />
        <div className="absolute top-[20%] right-[-15%] w-[40%] h-[40%] bg-brand-green/5 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-24">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-32 lg:gap-80 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-4 mb-16 px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
              <span className="flex h-3 w-3 rounded-full bg-brand-green animate-ping" />
              <span className="text-[10px] font-black text-brand-green uppercase tracking-[0.4em]">Launching Soon in Bangladesh 🇧🇩</span>
            </div>
            
            <h1 className="hero-heading mb-12 leading-[1.1] text-4xl md:text-6xl lg:text-7xl tracking-tighter">
              Run Your Turf <br />
              Without <br />
              <span className="text-brand-green neon-glow">Booking Stress.</span>
            </h1>
            
            <p className="max-w-xl text-lg md:text-xl text-white/60 mb-16 leading-relaxed font-medium mx-auto lg:mx-0">
              Avoid Slot Confusion, Double Bookings & Payment Issues. Built for Sports Turf Owners who manage bookings daily, not just a basic free tool.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8 mb-32">
              <button className="btn-primary w-full sm:w-auto px-12 py-6 flex items-center justify-center gap-4 group text-xl">
                Get Started Now
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={24} />
              </button>
              <button className="btn-secondary w-full sm:w-auto px-12 py-6 flex items-center justify-center gap-4 text-xl">
                Watch Demo
              </button>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-12 justify-center lg:justify-start">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-brand-dark overflow-hidden bg-white/10 shadow-xl">
                    <img src={`https://i.pravatar.cc/150?u=${i}`} alt="user" className="w-full h-full object-cover" />
                  </div>
                ))}
                <div className="w-12 h-12 rounded-full border-4 border-brand-dark bg-brand-green flex items-center justify-center text-black font-black text-xs shadow-xl">
                  +200
                </div>
              </div>
              <div className="text-center sm:text-left">
                <p className="text-lg text-white font-black tracking-tight">200+ Players Waiting</p>
                <p className="text-white/40 font-bold text-sm">Join the elite circle today.</p>
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
                className="relative z-20 w-[280px] md:w-[380px] aspect-[9/19] bg-[#0F172A] rounded-[3.5rem] p-3 shadow-[0_0_100px_rgba(0, 168, 89, 0.1)] border border-white/10"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-[#0F172A] rounded-b-3xl z-50 flex justify-center items-start pt-1">
                  <div className="w-12 h-1 bg-black/40 rounded-full" />
                </div>
                <div className="w-full h-full rounded-[2.8rem] overflow-hidden bg-black">
                  <MockupScreen3 />
                </div>
              </motion.div>
              
              {/* Secondary Phone Left (Screen 1) */}
              <motion.div 
                initial={{ rotate: -15, x: 0 }}
                className="absolute top-10 -left-12 md:-left-16 w-[240px] md:w-[340px] aspect-[9/19] bg-[#0F172A] rounded-[3rem] p-2.5 shadow-xl opacity-40 -z-10 overflow-hidden border border-white/5"
              >
                <div className="w-full h-full rounded-[2.4rem] overflow-hidden bg-black">
                  <MockupScreen1 />
                </div>
              </motion.div>
 
              {/* Secondary Phone Right (Screen 2) */}
              <motion.div 
                initial={{ rotate: 15, x: 0 }}
                className="absolute top-10 -right-12 md:-right-16 w-[240px] md:w-[340px] aspect-[9/19] bg-[#0F172A] rounded-[3rem] p-2.5 shadow-xl opacity-40 -z-10 overflow-hidden border border-white/5"
              >
                <div className="w-full h-full rounded-[2.4rem] overflow-hidden bg-black">
                  <MockupScreen2 />
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
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-24">
        <div className="grid lg:grid-cols-2 gap-32 lg:gap-48 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight tracking-tighter">
              Still Using WhatsApp <br />
              <span className="text-white/40">& Excel?</span>
            </h2>
            <p className="text-lg md:text-xl text-white/60 mb-12 leading-relaxed max-w-2xl font-medium">
              WhatsApp and Excel are fine for starting out. But to run a professional turf business, you need a system that works as hard as you do.
            </p>
            <div className="space-y-12">
              {problems.map((p, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-10 group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-brand-green/50 transition-colors">
                    <p.icon className="text-brand-green" size={32} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-black text-white mb-3 tracking-tight">{p.title}</h4>
                    <p className="text-lg text-white/40 leading-relaxed font-medium">{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-[6rem] bg-gradient-to-br from-brand-green/20 to-transparent p-1.5">
              <div className="w-full h-full rounded-[5.8rem] bg-brand-surface overflow-hidden flex items-center justify-center p-20">
                <div className="text-center">
                  <div className="w-40 h-40 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-12">
                    <X className="text-red-500" size={80} />
                  </div>
                  <p className="text-4xl font-black text-white mb-8 italic tracking-tight">"Wait, let me check my Excel..."</p>
                  <p className="text-2xl text-white/40 font-medium">The sound of a business losing professional touch.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Solution = () => {
  return (
    <section className="py-40 lg:py-60 bg-brand-surface border-y border-white/5">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">Meet TurfiPlay</h2>
          <p className="text-xl md:text-2xl text-white/60 max-w-4xl mx-auto mb-20 leading-relaxed font-medium">
            Designed for Real Turf Booking Situations. <br />
            <span className="text-brand-green">Built for Sports Turf Owners, Not General Booking Apps.</span>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 lg:gap-20">
          {[
            { title: "Dashboard", desc: "Daily slot booking dashboard to see everything at a glance.", icon: LayoutDashboard },
            { title: "Slot Locking", desc: "Automatic slot locking prevents any double booking issues.", icon: Zap },
            { title: "Reports", desc: "Daily & monthly earnings reports to track your business growth.", icon: Star }
          ].map((item, i) => (
            <div key={i} className="glass-card p-16 border border-white/10 hover:border-brand-green/30 transition-all group">
              <div className="w-24 h-24 rounded-[2.5rem] bg-brand-green/10 flex items-center justify-center mx-auto mb-12 group-hover:scale-110 transition-transform">
                <item.icon className="text-brand-green" size={44} />
              </div>
              <h3 className="text-4xl font-black text-white mb-8 uppercase tracking-tighter">{item.title}</h3>
              <p className="text-xl text-white/40 leading-relaxed font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Features = () => {
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
    <section id="features" className="py-24 lg:py-40 bg-brand-dark">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-24">
        <div className="text-center mb-40">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">Professional Management</h2>
          <p className="text-white/40 max-w-2xl mx-auto text-xl font-medium leading-relaxed">Everything you need to run your turf business professionally.</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Booking Side */}
          <div className="glass-card p-16 lg:p-20 border border-white/10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity">
              <Smartphone size={200} />
            </div>
            <h3 className="text-5xl font-black text-white mb-20 flex items-center gap-8">
              <span className="w-16 h-16 rounded-2xl bg-brand-green/20 flex items-center justify-center">
                <Smartphone className="text-brand-green" size={32} />
              </span>
              Booking Workflow
            </h3>
            <div className="grid sm:grid-cols-2 gap-16">
              {ownerFeatures.map((f, i) => (
                <div key={i}>
                  <f.icon className="text-brand-green mb-8" size={32} />
                  <h4 className="text-2xl font-black text-white mb-4 tracking-tight">{f.title}</h4>
                  <p className="text-white/40 text-lg leading-relaxed font-medium">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Reports Side */}
          <div className="glass-card p-16 lg:p-20 border border-white/10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity">
              <LayoutDashboard size={200} />
            </div>
            <h3 className="text-5xl font-black text-white mb-20 flex items-center gap-8">
              <span className="w-16 h-16 rounded-2xl bg-brand-green/20 flex items-center justify-center">
                <LayoutDashboard className="text-brand-green" size={32} />
              </span>
              Revenue Tracking
            </h3>
            <div className="grid sm:grid-cols-2 gap-16">
              {reportFeatures.map((f, i) => (
                <div key={i}>
                  <f.icon className="text-brand-green mb-8" size={32} />
                  <h4 className="text-2xl font-black text-white mb-4 tracking-tight">{f.title}</h4>
                  <p className="text-white/40 text-lg leading-relaxed font-medium">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
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
    <section className="py-40 lg:py-60 bg-brand-surface border-y border-white/5">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-24">
        <div className="text-center mb-32">
          <h2 className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tighter">Excel vs <span className="text-brand-green">TurfiPlay</span></h2>
          <p className="text-2xl text-white/40 font-medium leading-relaxed">WhatsApp & Excel Are Fine. A Booking System Is Better.</p>
        </div>

        <div className="glass-card overflow-hidden border border-white/10 shadow-2xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-bottom border-white/10 bg-white/5">
                <th className="p-10 text-sm font-black uppercase tracking-[0.3em] text-white/40">Feature</th>
                <th className="p-10 text-sm font-black uppercase tracking-[0.3em] text-white/40">WhatsApp/Excel</th>
                <th className="p-10 text-sm font-black uppercase tracking-[0.3em] text-brand-green">TurfiPlay</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className="border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors">
                  <td className="p-10 text-2xl font-black text-white tracking-tight">{row.feature}</td>
                  <td className="p-10 text-xl text-white/40 font-medium">{row.old}</td>
                  <td className="p-10 text-2xl text-brand-green font-black tracking-tight">{row.new}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    { number: "01", title: "Login", desc: "Login with your mobile number. No complex setup required." },
    { number: "02", title: "Add Booking", desc: "Enter customer details and pick a slot in seconds." },
    { number: "03", title: "Track", desc: "Monitor your daily earnings and monthly revenue instantly." }
  ];

  return (
    <section id="how-it-works" className="py-24 lg:py-40 bg-brand-dark">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-24">
        <div className="text-center mb-40">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">How It Works</h2>
          <p className="text-xl text-white/40 max-w-2xl mx-auto font-medium leading-relaxed">Designed for Real Turf Booking Situations.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-20 lg:gap-32 relative">
          {steps.map((s, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="text-center group"
            >
              <div className="w-32 h-32 rounded-[3rem] bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-12 text-5xl font-black text-brand-green shadow-[0_0_40px_rgba(0, 168, 89, 0.15)] group-hover:scale-110 transition-transform">
                {s.number}
              </div>
              <h3 className="text-4xl font-black text-white mb-8 uppercase tracking-tighter">{s.title}</h3>
              <p className="text-xl text-white/40 leading-relaxed font-medium">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Story = () => {
  return (
    <section id="story" className="py-24 lg:py-40 bg-brand-surface relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      </div>
      
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-24 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-4 mb-16 px-6 py-3 rounded-full bg-brand-green/10 border border-brand-green/20">
            <Star className="text-brand-green" size={20} />
            <span className="text-sm font-black text-brand-green uppercase tracking-[0.4em]">A Common Turf Owner Story</span>
          </div>
          
          <h2 className="text-5xl md:text-8xl font-black text-white mb-12 italic leading-none tracking-tighter text-center">
            "The WhatsApp <br /> Nightmare"
          </h2>
          
          <div className="space-y-12 text-lg md:text-xl text-white/60 leading-relaxed font-medium max-w-4xl mx-auto text-center">
            <p>
              It’s Friday evening. Your phone is buzzing every 2 minutes. 
              Five different people are asking for the 8 PM slot. 
              You're scrolling through WhatsApp, trying to remember if you already promised it to someone else.
            </p>
            <p className="text-white text-xl md:text-2xl font-black tracking-tight">
              You write it down in a notebook, but then someone calls to cancel. 
              You forget to cross it out. Another team calls, you tell them it's full. 
              Later, you realize the slot went empty. That's ৳1,500 lost.
            </p>
            <p>
              TurfiPlay was built to end this chaos. No more scrolling through messages. 
              No more double booking stress. Just a clean dashboard that locks slots instantly 
              and tracks every Taka you earn.
            </p>
            <p className="text-brand-green font-black text-2xl md:text-5xl tracking-tighter">
              Run Your Turf Professionally.
            </p>
          </div>
        </motion.div>

        <div className="mt-24 pt-24 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-12">
          {[
            { label: "Turf Owners", val: "50+" },
            { label: "Slots Locked", val: "10k+" },
            { label: "Revenue Tracked", val: "৳5M+" },
            { label: "Stress Level", val: "0%" }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="text-5xl md:text-7xl font-black text-brand-green mb-4 tracking-tighter">{stat.val}</div>
              <div className="text-sm font-black text-white/40 uppercase tracking-[0.4em]">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const StayTuned = () => {
  return (
    <section className="py-24 lg:py-40 bg-brand-dark relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-4 mb-16 px-6 py-3 rounded-full bg-brand-green/10 border border-brand-green/20">
            <Zap className="text-brand-green" size={20} />
            <span className="text-sm font-black text-brand-green uppercase tracking-[0.4em]">Don't Miss Out</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 italic uppercase tracking-tighter">
            Stay <span className="text-brand-green neon-glow">Tuned</span>
          </h2>
          
          <p className="text-xl text-white/40 mb-20 max-w-3xl mx-auto font-medium leading-relaxed">
            We're building something massive. Follow our journey on social media to get exclusive behind-the-scenes, launch dates, and early-bird discounts.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-12 lg:gap-20">
            <a 
              href="#" 
              className="group relative px-16 py-12 bg-white/5 border border-white/10 rounded-[4rem] flex items-center gap-10 hover:border-brand-green/50 transition-all overflow-hidden hover:scale-[1.02]"
            >
              <div className="absolute inset-0 bg-brand-green/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-24 h-24 rounded-[2.5rem] bg-brand-green/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Facebook size={48} className="text-brand-green" />
              </div>
              <div className="text-left">
                <p className="text-sm font-black text-white/40 uppercase tracking-[0.3em] mb-3">Join the community</p>
                <p className="text-4xl font-black text-white tracking-tighter">Facebook</p>
              </div>
              <ChevronRight className="text-white/20 group-hover:text-brand-green group-hover:translate-x-3 transition-all" size={40} />
            </a>

            <a 
              href="#" 
              className="group relative px-16 py-12 bg-white/5 border border-white/10 rounded-[4rem] flex items-center gap-10 hover:border-brand-green/50 transition-all overflow-hidden hover:scale-[1.02]"
            >
              <div className="absolute inset-0 bg-brand-green/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-24 h-24 rounded-[2.5rem] bg-brand-green/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Instagram size={48} className="text-brand-green" />
              </div>
              <div className="text-left">
                <p className="text-sm font-black text-white/40 uppercase tracking-[0.3em] mb-3">See the action</p>
                <p className="text-4xl font-black text-white tracking-tighter">Instagram</p>
              </div>
              <ChevronRight className="text-white/20 group-hover:text-brand-green group-hover:translate-x-3 transition-all" size={40} />
            </a>
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
    <section className="py-24 lg:py-40 relative overflow-hidden bg-brand-dark">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-brand-green/5 blur-[200px] rounded-full" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-24 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card p-20 lg:p-40 border border-white/10 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-3 bg-brand-green shadow-[0_0_30px_rgba(0, 168, 89, 0.6)]" />
          
          <h2 className="text-5xl md:text-8xl font-black text-white mb-10 leading-none tracking-tighter">
            Ready to Run <br />
            <span className="text-brand-green">Your Turf?</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/60 mb-20 max-w-3xl mx-auto leading-relaxed font-medium">
            We're launching soon. Be the first to experience a professional booking system built for sports turf owners.
          </p>

          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form 
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-12 max-w-2xl mx-auto"
              >
                <div className="space-y-8">
                  <input 
                    type="email" 
                    placeholder="Email Address"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-12 py-8 bg-white/5 border border-white/10 rounded-[2.5rem] focus:outline-none focus:border-brand-green transition-all text-2xl text-white font-medium"
                  />
                  <input 
                    type="tel" 
                    placeholder="Phone Number (Optional)"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-12 py-8 bg-white/5 border border-white/10 rounded-[2.5rem] focus:outline-none focus:border-brand-green transition-all text-2xl text-white font-medium"
                  />
                </div>
                <button className="w-full py-6 bg-brand-green text-black font-black rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all text-2xl shadow-[0_0_50px_rgba(0, 168, 89, 0.3)] uppercase tracking-tighter">
                  Notify Me
                </button>
                <p className="text-white/20 text-base font-black uppercase tracking-[0.4em]">No spam. Only game updates.</p>
              </motion.form>
            ) : (
              <motion.div 
                key="success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-20 bg-brand-green/10 border border-brand-green/20 rounded-[4rem] text-brand-green text-center"
              >
                <div className="w-32 h-32 bg-brand-green rounded-full flex items-center justify-center mx-auto mb-12 shadow-[0_0_50px_rgba(0, 168, 89, 0.4)]">
                  <CheckCircle2 size={64} className="text-black" />
                </div>
                <h3 className="text-6xl font-black mb-6 tracking-tighter">You're In!</h3>
                <p className="text-3xl text-brand-green/60 font-black tracking-tight">We'll notify you the moment we go live.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-40 lg:py-60 bg-brand-dark border-t border-white/5">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-24">
        <div className="grid md:grid-cols-4 gap-24 lg:gap-40 mb-40">
          <div className="col-span-2">
            <div className="flex items-center gap-4 mb-12">
              <div className="w-14 h-14 bg-brand-green rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(0, 168, 89, 0.4)]">
                <Zap className="text-black fill-black" size={28} />
              </div>
              <span className="text-4xl font-black tracking-tighter text-white">
                TURFI<span className="text-brand-green">PLAY</span>
              </span>
            </div>
            <p className="text-white/40 max-w-lg mb-16 text-2xl leading-relaxed font-medium">
              A professional booking & revenue system built for sports turf owners who manage bookings daily.
            </p>
            <div className="flex gap-10">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-16 h-16 rounded-[1.5rem] bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-green hover:text-black transition-all group">
                  <Icon size={30} className="text-white/60 group-hover:text-black" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-black text-white uppercase tracking-[0.4em] mb-12">Platform</h4>
            <ul className="space-y-8 text-white/40 font-black text-base uppercase tracking-widest">
              <li><a href="#" className="hover:text-brand-green transition-colors">For Players</a></li>
              <li><a href="#" className="hover:text-brand-green transition-colors">For Turf Owners</a></li>
              <li><a href="#" className="hover:text-brand-green transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-brand-green transition-colors">Waitlist</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-black text-white uppercase tracking-[0.4em] mb-12">Contact</h4>
            <ul className="space-y-10 text-white/40 font-black text-base">
              <li className="flex items-center gap-8">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <Mail size={26} className="text-brand-green" />
                </div>
                hello@turfiplay.com
              </li>
              <li className="flex items-center gap-8">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <MapPin size={26} className="text-brand-green" />
                </div>
                Dhaka, Bangladesh
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10 text-white/20 text-xs font-black uppercase tracking-[0.5em]">
          <div>© {new Date().getFullYear()} TurfiPlay. All rights reserved.</div>
          <div className="flex items-center gap-4">
            MADE WITH <span className="text-red-500 animate-pulse">❤️</span> IN BANGLADESH
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
        <Solution />
        <Features />
        <Comparison />
        <HowItWorks />
        <Story />
        <StayTuned />
        <Waitlist />
      </main>
      <Footer />
    </div>
  );
}
