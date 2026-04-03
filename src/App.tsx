/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, createContext, useContext } from 'react';
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
  Map,
  CreditCard,
  HelpCircle,
  Users,
  Award,
  MessageSquareQuote,
  Send,
  Sun,
  Moon
} from 'lucide-react';

// --- Theme Management ---

const ThemeContext = createContext<{ theme: string, toggleTheme: () => void }>({ theme: 'dark', toggleTheme: () => { } });

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-[var(--text-primary)] hover:bg-white/10 transition-all group"
      aria-label="Toggle Theme"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={theme}
          initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
          transition={{ duration: 0.3 }}
        >
          {theme === 'dark' ? <Sun size={18} className="text-brand-green" /> : <Moon size={18} className="text-brand-green" />}
        </motion.div>
      </AnimatePresence>
    </button>
  );
};

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-6 pt-6 md:pt-10">
      <nav className="max-w-[1880px] mx-auto glass-card px-8 py-4 flex justify-between items-center border border-white/10 shadow-2xl">
        <div
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="w-10 h-10 bg-brand-green rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(0,168,89,0.3)] group-hover:scale-110 transition-transform duration-500">
            <Zap className="text-black fill-black" size={20} />
          </div>
          <span className="text-2xl tracking-[-0.05em] text-[var(--text-primary)] select-none">
            <span className="font-extralight opacity-80">Turfi</span>
            <span className="font-black text-brand-green italic drop-shadow-[0_0_15px_rgba(0,168,89,0.4)]">Play</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-12">
          <a href="#about" className="text-[15px] font-black text-[var(--text-secondary)] hover:text-brand-green transition-colors uppercase tracking-[0.3em]">About</a>
          <a href="#features" className="text-[15px] font-black text-[var(--text-secondary)] hover:text-brand-green transition-colors uppercase tracking-[0.3em]">Features</a>
          <a href="#pricing" className="text-[15px] font-black text-[var(--text-secondary)] hover:text-brand-green transition-colors uppercase tracking-[0.3em]">Pricing</a>
          <a href="#testimonials" className="text-[15px] font-black text-[var(--text-secondary)] hover:text-brand-green transition-colors uppercase tracking-[0.3em]">Testimonials</a>
          <a href="#contact" className="text-[15px] font-black text-[var(--text-secondary)] hover:text-brand-green transition-colors uppercase tracking-[0.3em]">Contact</a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <a href="#waitlist" className="px-8 py-3.5 bg-brand-green text-black font-black rounded-full hover:scale-105 transition-all shadow-[0_0_30px_rgba(0, 168, 89, 0.2)] uppercase tracking-tighter text-xs inline-block">
            Join Waitlist
          </a>
        </div>

        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button onClick={() => setIsOpen(!isOpen)} className="text-[var(--text-primary)]">
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
              <a href="#about" onClick={() => setIsOpen(false)} className="block text-lg font-black text-[var(--text-primary)] uppercase">About</a>
              <a href="#features" onClick={() => setIsOpen(false)} className="block text-lg font-black text-[var(--text-primary)] uppercase">Features</a>
              <a href="#pricing" onClick={() => setIsOpen(false)} className="block text-lg font-black text-[var(--text-primary)] uppercase">Pricing</a>
              <a href="#testimonials" onClick={() => setIsOpen(false)} className="block text-lg font-black text-[var(--text-primary)] uppercase">Testimonials</a>
              <a href="#contact" onClick={() => setIsOpen(false)} className="block text-lg font-black text-[var(--text-primary)] uppercase">Contact</a>
              <a href="#waitlist" onClick={() => setIsOpen(false)} className="block w-full text-center py-4 bg-brand-green text-black font-black rounded-2xl uppercase tracking-tighter">
                Join Waitlist
              </a>
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
    <section className="relative min-h-screen flex items-center pt-40 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-brand-bg">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
           animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            rotate: [0, 10, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-brand-green/10 blur-[150px] rounded-full"
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

      <div className="max-w-[1880px] mx-auto px-10 md:px-[18%] lg:px-[10%]">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 lg:gap-40 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="hero-heading mb-12 leading-[1.05] text-6xl md:text-8xl lg:text-[110px] tracking-tighter">
              Run Your Turf <br />
              Without <br />
              <span className="text-brand-green neon-glow">Booking Stress.</span>
            </h1>

            <p className="max-w-2xl text-xl md:text-2xl text-[var(--text-secondary)] mb-12 leading-relaxed font-medium mx-auto lg:mx-0">
              Manage bookings, prevent double slots, track payments, and run your turf professionally — all from one simple app.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-10 mb-16">
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
    <section id="problem" className="py-24 lg:py-48 bg-brand-bg relative overflow-hidden">
      {/* Abstract background shapes */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-brand-green/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-[1880px] mx-auto px-10 md:px-[10%] lg:px-[12%]">
        <div className="grid lg:grid-cols-2 gap-24 lg:gap-32 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-black text-[var(--text-primary)] mb-8 leading-tight tracking-tighter">
              Still Using WhatsApp <br />
              <span className="text-[var(--text-secondary)] opacity-50">& Excel?</span>
            </h2>
            <p className="text-lg md:text-xl text-[var(--text-secondary)] mb-12 leading-relaxed max-w-xl font-medium">
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
                  <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-[var(--border-color)] flex items-center justify-center flex-shrink-0 group-hover:border-brand-green/30 transition-all duration-500 group-hover:scale-110">
                    <p.icon className="text-brand-green/60 group-hover:text-brand-green" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[var(--text-primary)] mb-2 tracking-tight group-hover:text-brand-green transition-colors">{p.title}</h4>
                    <p className="text-base text-[var(--text-secondary)] leading-relaxed font-medium group-hover:text-[var(--text-primary)] transition-colors">{p.desc}</p>
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

          <h3 className="text-4xl font-black text-[var(--text-primary)] mb-6 uppercase italic tracking-tighter">
            {title} <br />
            <span className="text-brand-green">Coming Soon</span>
          </h3>

          <p className="text-lg text-[var(--text-secondary)] font-medium leading-relaxed mb-12">
            We are currently in <span className="text-[var(--text-primary)]">Development Mode</span>. Our team is working hard to bring the ultimate TurfiPlay experience to Bangladesh.
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
    <section id="features" className="py-20 lg:py-32 bg-brand-bg relative overflow-hidden">
      <ComingSoonModal
        isOpen={modalData.isOpen}
        onClose={() => setModalData({ ...modalData, isOpen: false })}
        title={modalData.title}
      />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1000px] -z-10 opacity-20 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-green/10 blur-[200px] rounded-full" />
      </div>

      <div className="max-w-[1880px] mx-auto px-10 md:px-[10%] lg:px-[12%]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-black text-[var(--text-primary)] mb-6 tracking-tighter uppercase italic leading-none">Meet <span className="text-brand-green">TurfiPlay</span></h2>
          <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto font-medium leading-relaxed uppercase tracking-widest">Designed for Real Turf Booking Situations. <br />
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
              className={`glass-card p-8 group transition-all duration-500 relative overflow-hidden ${feature.isComingSoon ? 'cursor-pointer hover:border-brand-green/40 hover:bg-white/[0.03]' : ''}`}
            >
              {feature.isComingSoon && (
                <div className="absolute top-4 right-4 text-[10px] font-black text-brand-green uppercase tracking-[0.3em] bg-brand-green/10 px-3 py-1 rounded-full border border-brand-green/20 group-hover:bg-brand-green group-hover:text-black transition-all">
                  Click to View
                </div>
              )}

              <div className="w-12 h-12 bg-brand-green/10 rounded-2xl flex items-center justify-center border border-brand-green/20 group-hover:scale-110 transition-transform mb-6">
                <feature.icon className="text-brand-green" size={24} />
              </div>
              <h3 className="text-xl font-black text-[var(--text-primary)] mb-3 tracking-tight uppercase italic group-hover:text-brand-green transition-colors">{feature.title}</h3>
              <p className="text-[15px] text-[var(--text-secondary)] font-medium leading-relaxed mb-6">{feature.desc}</p>

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
    <section id="management" className="py-20 lg:py-32 bg-brand-navy relative">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-brand-green/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1880px] mx-auto px-10 md:px-[10%] lg:px-[12%]">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-black text-[var(--text-primary)] mb-5 tracking-tighter uppercase italic">Professional Management</h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto text-lg font-medium leading-relaxed uppercase tracking-[0.2em]">Everything you need to scale your turf business.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Booking Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 lg:p-12 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 group-hover:scale-110 transition-all duration-1000">
              <Smartphone size={160} />
            </div>
            <h3 className="text-3xl font-black text-[var(--text-primary)] mb-10 flex items-center gap-5">
              <div className="w-10 h-10 rounded-xl bg-brand-green/10 flex items-center justify-center">
                <Smartphone className="text-brand-green" size={20} />
              </div>
              Booking Workflow
            </h3>
            <div className="grid sm:grid-cols-2 gap-8">
              {ownerFeatures.map((f, i) => (
                <div key={i} className="group/item">
                  <f.icon className="text-brand-green/40 mb-6 group-hover/item:text-brand-green transition-colors" size={28} />
                  <h4 className="text-xl font-bold text-[var(--text-primary)] mb-3 tracking-tight">{f.title}</h4>
                  <p className="text-[var(--text-secondary)] text-base leading-relaxed font-medium group-hover/item:text-[var(--text-secondary)]/80 transition-colors">{f.desc}</p>
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
            <h3 className="text-4xl font-black text-[var(--text-primary)] mb-16 flex items-center gap-6">
              <div className="w-12 h-12 rounded-xl bg-brand-green/10 flex items-center justify-center">
                <LayoutDashboard className="text-brand-green" size={24} />
              </div>
              Revenue Tracking
            </h3>
            <div className="grid sm:grid-cols-2 gap-12">
              {reportFeatures.map((f, i) => (
                <div key={i} className="group/item">
                  <f.icon className="text-brand-green/40 mb-6 group-hover/item:text-brand-green transition-colors" size={28} />
                  <h4 className="text-xl font-bold text-[var(--text-primary)] mb-3 tracking-tight">{f.title}</h4>
                  <p className="text-[var(--text-secondary)] text-base leading-relaxed font-medium group-hover/item:text-[var(--text-secondary)]/80 transition-colors">{f.desc}</p>
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
    <section className="py-24 lg:py-40 bg-brand-surface border-y border-white/5 relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-10 md:px-[10%] lg:px-[12%]">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-6xl font-black text-[var(--text-primary)] mb-5 tracking-tighter uppercase italic">Excel vs <span className="text-brand-green">TurfiPlay</span></h2>
          <p className="text-xl text-[var(--text-secondary)] font-medium leading-relaxed uppercase tracking-[0.2em]">The era of digital turf is here.</p>
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
                <th className="py-8 px-10 text-left text-[10px] font-black text-[var(--text-secondary)] uppercase tracking-[0.4em]">Feature</th>
                <th className="py-8 px-10 text-center text-[10px] font-black text-brand-green uppercase tracking-[0.4em] bg-brand-green/5">TurfiPlay</th>
                <th className="py-8 px-10 text-center text-[10px] font-black text-[var(--text-secondary)] uppercase tracking-[0.4em]">Manual/Local App</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className="border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors group">
                  <td className="p-8 text-xl font-black text-[var(--text-primary)] tracking-tight group-hover:text-brand-green transition-colors">{row.feature}</td>
                  <td className="p-8 text-xl text-brand-green font-black tracking-tight text-center">{row.new}</td>
                  <td className="p-8 text-lg text-[var(--text-secondary)] font-medium text-center">{row.old}</td>
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
    <section id="how-it-works" className="py-20 lg:py-32 bg-brand-bg relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-green/5 blur-[200px] rounded-full pointer-events-none" />

      <div className="max-w-[1880px] mx-auto px-10 md:px-[10%] lg:px-[12%] relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-[var(--text-primary)] mb-4 tracking-tighter uppercase italic">OUR <span className="text-brand-green">Ecosystem.</span></h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto text-lg font-medium leading-relaxed uppercase tracking-[0.2em]">One bridge between Players and Turf Owners.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 mb-16">
          {/* User Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-4 bg-brand-green/10 border border-brand-green/20 px-6 py-2.5 rounded-xl">
              <Smartphone className="text-brand-green" size={18} />
              <span className="text-xs font-black text-brand-green uppercase tracking-[0.2em]">For Players</span>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {userSteps.map((s, i) => (
                <div key={i} className="glass-card !p-6 group hover:bg-white/[0.05] transition-all">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-5 border border-white/10 group-hover:scale-110 transition-transform">
                    <s.icon className="text-brand-green" size={20} />
                  </div>
                  <h4 className="text-base font-black text-[var(--text-primary)] mb-2 uppercase italic tracking-tight">{s.title}</h4>
                  <p className="text-[13px] text-[var(--text-secondary)] leading-relaxed font-medium">{s.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Owner Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-4 bg-brand-green/10 border border-brand-green/20 px-6 py-2.5 rounded-xl">
              <LayoutDashboard className="text-brand-green" size={18} />
              <span className="text-xs font-black text-brand-green uppercase tracking-[0.2em]">For Turf Owners</span>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {ownerSteps.map((s, i) => (
                <div key={i} className="glass-card !p-6 group hover:bg-white/[0.05] transition-all">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-5 border border-white/10 group-hover:scale-110 transition-transform">
                    <s.icon className="text-brand-green" size={20} />
                  </div>
                  <h4 className="text-base font-black text-[var(--text-primary)] mb-2 uppercase italic tracking-tight">{s.title}</h4>
                  <p className="text-[13px] text-[var(--text-secondary)] leading-relaxed font-medium">{s.desc}</p>
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
          className="glass-card !p-8 border border-brand-green/20 shadow-[0_0_50px_rgba(0,168,89,0.05)]"
        >
          <div className="grid md:grid-cols-3 gap-8">
            {coreLogics.map((log, i) => (
              <div key={i} className="flex gap-5 items-start">
                <div className="p-2.5 bg-brand-green/10 rounded-xl border border-brand-green/20 flex-shrink-0">
                  <log.icon className="text-brand-green" size={20} />
                </div>
                <div>
                  <h5 className="text-sm font-black text-[var(--text-primary)] uppercase italic tracking-tight mb-1.5">{log.title}</h5>
                  <p className="text-[12px] text-[var(--text-secondary)] font-medium leading-relaxed">{log.desc}</p>
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

      <div className="max-w-[1469px] mx-auto px-10 md:px-[10%] lg:px-[12%] relative z-10">
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

          <h2 className="text-6xl md:text-9xl font-black text-[var(--text-primary)] mb-20 italic leading-none tracking-tighter text-center uppercase">
            The WhatsApp <br /> <span className="text-brand-green">Nightmare.</span>
          </h2>

          <div className="space-y-24 text-2xl md:text-3xl text-[var(--text-secondary)] leading-relaxed font-medium max-w-5xl mx-auto text-center">
            <p className="hover:text-[var(--text-primary)] transition-colors duration-700">
              It’s Friday evening. Your phone is buzzing every 2 minutes. Five different people are asking for the 8 PM slot. You're scrolling through WhatsApp, trying to remember if you already promised it to someone else.
            </p>

            <motion.p
              whileInView={{ scale: [0.98, 1], opacity: [0, 1] }}
              className="text-[var(--text-primary)] text-3xl md:text-5xl font-black tracking-tighter leading-tight italic"
            >
              You write it down in a notebook, but then someone calls to cancel. You forget to cross it out. Another team calls, you tell them it's full. <br />
              <span className="text-[var(--text-secondary)]/20">Later, you realize the slot went empty.</span>
            </motion.p>

            <p className="hover:text-[var(--text-primary)] transition-colors duration-700">
              "Is the slot free?", "Can I get a discount?", "Where is the location?". The endless phone calls never stop. You're a turf owner, not a call center agent.
            </p>


            <p className="text-[var(--text-primary)]/80 font-black text-3xl md:text-4xl leading-tight">
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

      <div className="max-w-[1880px] mx-auto px-10 md:px-[10%] lg:px-[12%] text-center">
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

          <h2 className="text-5xl md:text-8xl font-black text-[var(--text-primary)] mb-8 italic uppercase tracking-tighter">
            Stay <span className="text-brand-green">Tuned.</span>
          </h2>

          <p className="text-xl text-[var(--text-secondary)] mb-24 max-w-3xl mx-auto font-medium leading-relaxed uppercase tracking-widest">
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
                  <p className="text-[10px] font-black text-[var(--text-secondary)] uppercase tracking-[0.3em] mb-2">{social.sub}</p>
                  <p className="text-3xl font-black text-[var(--text-primary)] tracking-tighter group-hover:text-brand-green transition-colors">{social.name}</p>
                </div>
                <ChevronRight className="ml-auto text-[var(--text-secondary)]/10 group-hover:text-brand-green group-hover:translate-x-2 transition-all" size={24} />
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
    <section id="waitlist" className="py-24 lg:py-50 relative overflow-hidden bg-brand-bg">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-brand-green/5 blur-[250px] rounded-full" />
      </div>

      <div className="max-w-[1880px] mx-auto px-10 md:px-[10%] lg:px-[12%]">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="glass-card !p-12 lg:!p-20 border-white/10 relative overflow-hidden text-center group max-w-5xl mx-auto"
        >
          <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-brand-green to-transparent shadow-[0_0_30px_rgba(0,168,89,0.5)]" />

          <h2 className="text-4xl md:text-8xl font-black text-[var(--text-primary)] mb-8 leading-tight tracking-tighter uppercase italic">
            Ready to Run <br />
            <span className="text-brand-green text-gradient">Your Turf?</span>
          </h2>

          <p className="text-xl text-[var(--text-secondary)] mb-20 max-w-2xl mx-auto font-medium leading-relaxed">
            The era of manual management is over. Be among the first to experience TurfiPlay in Bangladesh.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-2xl py-6 px-8 text-[var(--text-primary)] focus:outline-none focus:border-brand-green/50 transition-all placeholder:text-[var(--text-secondary)] font-bold"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-2xl py-6 px-8 text-[var(--text-primary)] focus:outline-none focus:border-brand-green/50 transition-all placeholder:text-[var(--text-secondary)] font-bold"
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
              <h3 className="text-4xl font-black text-[var(--text-primary)] mb-6 uppercase italic">You're on the list!</h3>
              <p className="text-xl text-[var(--text-secondary)] font-medium">We'll reach out to you as soon as we're ready for Liftoff.</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};


const About = () => {
  const values = [
    { title: "Turf First", desc: "We don't build generic booking apps. We build specifically for the unique needs of sports turf owners.", icon: Award },
    { title: "Zero Friction", desc: "Our interface is designed to be usable even in the middle of a busy match day, with one-tap actions.", icon: Zap },
    { title: "Growth Focused", desc: "We provide the data you need to understand your peak hours and maximize your revenue.", icon: BarChart3 }
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-brand-dark relative overflow-hidden">
      <div className="max-w-[1880px] mx-auto px-10 md:px-[10%] lg:px-[12%]">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-black text-[var(--text-primary)] mb-6 tracking-tighter uppercase italic leading-[1.1]">
              Built by Turf <br />
              <span className="text-brand-green">Enthusiasts.</span>
            </h2>
            <p className="text-lg text-[var(--text-secondary)] mb-10 font-medium leading-relaxed">
              We spent months talking to turf owners in Bangladesh to understand their daily struggles. The result? A management system that actually works the way you do.
            </p>
            <div className="space-y-6">
              {values.map((v, i) => (
                <div key={i} className="flex gap-6 items-start group">
                  <div className="w-12 h-12 rounded-xl bg-brand-green/10 flex items-center justify-center border border-brand-green/20 group-hover:bg-brand-green group-hover:text-black transition-all">
                    <v.icon size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-black text-[var(--text-primary)] mb-2 uppercase italic tracking-tight">{v.title}</h4>
                    <p className="text-[var(--text-secondary)] font-medium leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square glass-card !p-0 overflow-hidden relative group">
              <div className="absolute inset-0 bg-brand-green/10 opacity-50 mix-blend-overlay" />
              <div className="absolute inset-x-0 bottom-0 p-12 bg-gradient-to-t from-black to-transparent">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-brand-green/20 border border-brand-green/30 flex items-center justify-center">
                    <Users size={20} className="text-brand-green" />
                  </div>
                  <span className="text-brand-green font-black uppercase text-[10px] tracking-widest">Customer Story</span>
                </div>
                <p className="text-3xl font-black text-[var(--text-primary)] italic tracking-tighter mb-6 leading-none">"Finally, a system that understands my turf business."</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-green/40 border border-brand-green/50" />
                  <div>
                    <p className="text-[var(--text-primary)] font-bold uppercase text-xs tracking-widest">Sifat Ullah</p>
                    <p className="text-[var(--text-secondary)] text-[10px] font-bold uppercase tracking-[0.2em]">Owner, Arena 71</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    { name: "Rafat Hasan", role: "Owner, Pitch 56", quote: "Before TurfiPlay, I was losing sleep over double bookings. Now, everything stays locked and synced. It's a game changer." },
    { name: "Imtiaz Ahmed", role: "Manager, Kickoff Arena", quote: "The revenue reports are incredible. I can see my growth day-by-day. Very easy to use even for my staff." },
    { name: "Tanvir Hossain", role: "Owner, GoalLine Turf", quote: "The waitlist interface is so simple. My customers love how professional the booking process looks now." }
  ];

  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-brand-bg relative">
      <div className="max-w-[1880px] mx-auto px-10 md:px-[10%] lg:px-[12%]">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-[var(--text-primary)] mb-6 tracking-tighter uppercase italic leading-[1.1]">
            How TurfiPlay <br />
            <span className="text-brand-green">Revolutionizes</span> Your Turf.
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto font-medium leading-relaxed">
            From the first booking to final matching reporting, we've automated every single step of your business.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card flex flex-col justify-between"
            >
              <div>
                <MessageSquareQuote className="text-brand-green/20 mb-8" size={40} />
                <p className="text-lg text-[var(--text-primary)] italic leading-relaxed mb-8 font-medium">
                  "{t.quote}"
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-brand-green/20 border border-brand-green/30 flex items-center justify-center font-black text-brand-green italic">
                  {t.name[0]}
                </div>
                <div>
                  <h4 className="font-black text-[var(--text-primary)] uppercase italic leading-none mb-1">{t.name}</h4>
                  <p className="text-[10px] text-brand-green font-black uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "2,500",
      desc: "Perfect for single turf owners starting their digital journey.",
      features: ["Daily Slot Dashboard", "WhatsApp Integration", "Basic Revenue Tracking", "Mobile-First Access"],
      isPopular: false
    },
    {
      name: "Professional",
      price: "5,000",
      desc: "For growing facilities with high booking volumes.",
      features: ["Everything in Starter", "Automated SMS Alerts", "Customer Analytics", "Advanced Reports", "Digital Payment Integration"],
      isPopular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      desc: "Full-scale solution for multi-turf chains and sports complexes.",
      features: ["All Pro Features", "Multi-Location Support", "Dedicated Account Manager", "White-label Option", "Custom Integrations"],
      isPopular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 lg:py-32 bg-brand-navy relative overflow-hidden">
      <div className="max-w-[1880px] mx-auto px-10 md:px-[10%] lg:px-[12%] relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-[var(--text-primary)] mb-6 tracking-tighter uppercase italic leading-[1.1]">
            Why Modern Owners <br />
            <span className="text-brand-green">Choose TurfiPlay</span>
          </h2>
          <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto font-medium leading-relaxed">
            A side-by-side look at why hundreds of turf owners are leaving manual management behind.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-10 items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`glass-card relative flex flex-col ${plan.isPopular ? 'border-brand-green/40 shadow-[0_0_50px_rgba(0,168,89,0.1)]' : ''}`}
            >
              {plan.isPopular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-brand-green text-black px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest">
                  Most Recommended
                </div>
              )}
              <div className="mb-12">
                <h3 className="text-2xl font-black text-[var(--text-primary)] mb-2 uppercase italic tracking-tighter">{plan.name}</h3>
                <div className="flex items-baseline gap-2 mb-8">
                  <span className="text-[var(--text-secondary)] text-sm font-black uppercase">BDT</span>
                  <span className="text-5xl font-black text-[var(--text-primary)] tracking-tighter italic">{plan.price}</span>
                  <span className="text-[var(--text-secondary)] text-sm font-bold">/mo</span>
                </div>
                <div className="space-y-4 mb-10">
                  {plan.features.map((f, fi) => (
                    <div key={fi} className="flex items-center gap-4 group/item">
                      <div className="w-5 h-5 rounded-full bg-brand-green/10 flex items-center justify-center flex-shrink-0 group-hover/item:bg-brand-green/20 transition-colors">
                        <CheckCircle2 className="text-brand-green" size={12} />
                      </div>
                      <span className="text-sm font-medium text-[var(--text-secondary)] group-hover/item:text-[var(--text-primary)] transition-colors">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
              <button className={`w-full py-6 rounded-2xl font-black uppercase italic tracking-widest transition-all ${plan.isPopular ? 'bg-brand-green text-black hover:scale-[1.02] shadow-[0_0_30px_rgba(0,168,89,0.2)]' : 'bg-white/5 text-[var(--text-primary)] hover:bg-white/10'}`}>
                Get Started Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const faqs = [
    { q: "How long does it take to get started?", a: "Most turfs are up and running within 24 hours. Our team helps you set up your slots and pricing structure during onboarding." },
    { q: "Can I manage multiple turfs at once?", a: "Yes, our Enterprise plan is designed specifically for owners with multiple locations, giving you a centralized dashboard for all your properties." },
    { q: "Do you offer customer support?", a: "Absolutely. Professional and Enterprise clients get 24/7 dedicated support via WhatsApp and phone." },
    { q: "Is there a contract I have to sign?", a: "Our monthly plans are flexible, and you can cancel anytime. Year-long commitments come with significant discounts." }
  ];

  return (
    <section id="faq" className="py-20 lg:py-32 bg-brand-bg">
      <div className="max-w-[1100px] mx-auto px-10">
        <h2 className="text-3xl md:text-5xl font-black text-[var(--text-primary)] mb-12 tracking-tighter text-center uppercase italic">QUESTIONS <span className="text-brand-green">?</span></h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="glass-card !p-0 overflow-hidden border-white/5">
              <button
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                className="w-full py-8 px-10 flex items-center justify-between text-left group"
              >
                <span className="text-xl font-black text-[var(--text-primary)] uppercase italic tracking-tight group-hover:text-brand-green transition-colors">{faq.q}</span>
                <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-500 ${activeIndex === i ? 'border-brand-green bg-brand-green text-black rotate-90' : 'border-[var(--border-color)] text-[var(--text-secondary)]'}`}>
                  <ChevronRight size={18} />
                </div>
              </button>
              <AnimatePresence>
                {activeIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-10 pb-10">
                      <p className="text-lg text-[var(--text-secondary)] font-medium leading-relaxed border-l-4 border-brand-green/30 pl-6">
                        {faq.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormState({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-brand-bg relative overflow-hidden">
      <div className="max-w-[1880px] mx-auto px-10 md:px-[10%] lg:px-[12%]">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-7xl font-black text-[var(--text-primary)] mb-8 tracking-tighter uppercase italic leading-none">LET'S <span className="text-brand-green">TALK.</span></h2>
            <p className="text-lg text-[var(--text-secondary)] mb-10 font-medium leading-relaxed uppercase tracking-widest">Whether you have a question or are ready to transform your turf, our team is here to help.</p>

            <div className="space-y-8">
              <div className="flex gap-8 items-center group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-[var(--border-color)] flex items-center justify-center group-hover:border-brand-green/30 transition-all">
                  <Mail className="text-brand-green" size={22} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-[var(--text-secondary)] uppercase tracking-[0.4em] mb-1">Email Us</p>
                  <p className="text-xl font-black text-[var(--text-primary)] tracking-tight">rimon124567@gmail.com</p>
                </div>
              </div>
              <div className="flex gap-8 items-center group">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-[var(--border-color)] flex items-center justify-center group-hover:border-brand-green/30 transition-all">
                  <Phone className="text-brand-green" size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-[var(--text-secondary)] uppercase tracking-[0.4em] mb-2">Call Support</p>
                  <p className="text-2xl font-black text-[var(--text-primary)] tracking-tight">+880 1712-XXXXXX</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card relative"
          >
            {!isSuccess ? (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-6">
                  <div className="relative">
                    <input
                      required
                      type="text"
                      placeholder="Your Full Name"
                      className="w-full bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-2xl py-6 px-8 text-[var(--text-primary)] focus:outline-none focus:border-brand-green/50 placeholder:text-[var(--text-secondary)] font-bold transition-all"
                      value={formState.name}
                      onChange={e => setFormState({ ...formState, name: e.target.value })}
                    />
                  </div>
                  <div className="relative">
                    <input
                      required
                      type="email"
                      placeholder="Email Address"
                      className="w-full bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-2xl py-6 px-8 text-[var(--text-primary)] focus:outline-none focus:border-brand-green/50 placeholder:text-[var(--text-secondary)] font-bold transition-all"
                      value={formState.email}
                      onChange={e => setFormState({ ...formState, email: e.target.value })}
                    />
                  </div>
                  <div className="relative">
                    <textarea
                      required
                      rows={5}
                      placeholder="Your Message..."
                      className="w-full bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-2xl py-6 px-8 text-[var(--text-primary)] focus:outline-none focus:border-brand-green/50 placeholder:text-[var(--text-secondary)] font-bold transition-all resize-none"
                      value={formState.message}
                      onChange={e => setFormState({ ...formState, message: e.target.value })}
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-8 bg-brand-green text-black font-black rounded-2xl uppercase italic tracking-widest text-lg shadow-[0_0_40px_rgba(0,168,89,0.2)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-4"
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-4 border-black/20 border-t-black rounded-full animate-spin" />
                  ) : (
                    <>
                      Send Message
                      <Send size={20} />
                    </>
                  )}
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-20 text-center"
              >
                <div className="w-24 h-24 bg-brand-green/20 rounded-full flex items-center justify-center mx-auto mb-10 border border-brand-green/30">
                  <CheckCircle2 size={48} className="text-brand-green" />
                </div>
                <h3 className="text-4xl font-black text-[var(--text-primary)] mb-6 uppercase italic">Message Sent!</h3>
                <p className="text-xl text-[var(--text-secondary)] font-medium leading-relaxed">We've received your inquiry and will <br /> get back to you within 24 hours.</p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="mt-12 text-brand-green font-black uppercase italic tracking-widest text-sm hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="pt-24 lg:pt-40 pb-10 lg:pb-16 bg-brand-bg border-t border-white/5 relative overflow-hidden">
      <div className="max-w-[1880px] mx-auto px-10 md:px-[10%] lg:px-[12%]">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-24 mb-24">
          <div className="lg:col-span-2">
            <div
              className="flex items-center gap-3 mb-8 cursor-pointer group w-fit"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <div className="w-10 h-10 bg-brand-green rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(0,168,89,0.3)] group-hover:scale-110 transition-transform duration-500">
                <Zap className="text-black fill-black" size={20} />
              </div>
              <span className="text-2xl tracking-[-0.05em] text-[var(--text-primary)] select-none">
                <span className="font-extralight opacity-80">Turfi</span>
                <span className="font-black text-brand-green italic drop-shadow-[0_0_15px_rgba(0,168,89,0.4)]">Play</span>
              </span>
            </div>
            <p className="text-lg text-[var(--text-secondary)] max-w-md leading-relaxed font-medium mb-12">
              The professional management system for sports turf owners. Built for speed, accuracy, and growth.
            </p>
            <div className="flex gap-6">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-xl bg-white/5 border border-[var(--border-color)] flex items-center justify-center hover:bg-brand-green hover:text-black transition-all group">
                  <Icon size={20} className="text-[var(--text-secondary)] group-hover:text-black" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-black text-[var(--text-primary)] uppercase tracking-[0.4em] mb-10">Platform</h4>
            <ul className="space-y-6 text-[var(--text-secondary)] font-bold uppercase tracking-widest text-[13px]">
              <li><a href="#about" className="hover:text-brand-green transition-colors">About</a></li>
              <li><a href="#features" className="hover:text-brand-green transition-colors">Features</a></li>
              <li><a href="#pricing" className="hover:text-brand-green transition-colors">Pricing</a></li>
              <li><a href="#testimonials" className="hover:text-brand-green transition-colors">Testimonials</a></li>
              <li><a href="#faq" className="hover:text-brand-green transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black text-[var(--text-primary)] uppercase tracking-[0.4em] mb-10">Support</h4>
            <ul className="space-y-6 text-[var(--text-secondary)] font-bold uppercase tracking-widest text-[13px]">
              <li><a href="#contact" className="hover:text-brand-green transition-colors">Contact</a></li>
              <li><a href="#waitlist" className="hover:text-brand-green transition-colors">Waitlist</a></li>
              <li><a href="#" className="hover:text-brand-green transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-green transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black text-[var(--text-primary)] uppercase tracking-[0.4em] mb-10">Location</h4>
            <ul className="space-y-6 text-[var(--text-secondary)] font-bold text-[15px]">
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
        <div className="pt-12 border-t border-[var(--border-color)] flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[var(--text-secondary)] text-xs font-bold uppercase tracking-widest">
            © {new Date().getFullYear()} TurfiPlay. All Rights Reserved.
          </p>
          <p className="text-[var(--text-secondary)] text-xs font-bold uppercase tracking-widest flex items-center gap-2">
            Made with <Zap size={10} className="text-brand-green" /> by TurfiPlay Team
          </p>
        </div>
      </div>
    </footer>
  );
};


export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-brand-bg text-[var(--text-primary)] selection:bg-brand-green selection:text-black bg-grid">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Problem />
          <HowItWorks />
          <Features />
          <ManagementFeatures />
          <Comparison />
          <Testimonials />
          <Pricing />
          <Story />
          <FAQ />
          <StayTuned />
          <Contact />
          <Waitlist />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
