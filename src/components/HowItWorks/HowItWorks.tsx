import React from 'react';
import { motion } from 'motion/react';
import { Map, Calendar, Zap, LayoutDashboard, MapPin, Clock, MessageSquare, BarChart3, ShieldCheck, Bell, Globe } from 'lucide-react';

export const HowItWorks = () => {
  const userSteps = [
    { 
      title: "Map Discovery", 
      desc: "Find nearby turfs directly on Google Maps integration.", 
      icon: () => (
        <svg className="w-7 h-7 text-brand-green group-hover:text-black transition-colors duration-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 6L9 3L15 6L21 3V18L15 21L9 18L3 21V6Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-40" />
          <path d="M9 3V18" stroke="currentColor" strokeWidth="1.5" className="opacity-40" />
          <path d="M15 6V21" stroke="currentColor" strokeWidth="1.5" className="opacity-40" />
          <path d="M12 14C14.2091 14 16 12.2091 16 10C16 7.79086 14.2091 6 12 6C9.79086 6 8 7.79086 8 10C8 12.2091 9.79086 14 12 14Z" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="2" />
          <path d="M12 10V10.01" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="12" cy="10" r="6" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" className="opacity-50 group-hover:animate-[spin_8s_linear_infinite]" style={{ transformOrigin: '12px 10px' }} />
        </svg>
      )
    },
    { 
      title: "Select Slot", 
      desc: "View real-time availability and pick your preferred time.", 
      icon: () => (
        <svg className="w-7 h-7 text-brand-green group-hover:text-black transition-colors duration-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="4" width="18" height="16" rx="3" stroke="currentColor" strokeWidth="1.5" className="opacity-40" />
          <path d="M3 10H21" stroke="currentColor" strokeWidth="1.5" className="opacity-40" />
          <path d="M8 2V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="opacity-40" />
          <path d="M16 2V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="opacity-40" />
          <rect x="6" y="13" width="4" height="4" rx="1" fill="currentColor" fillOpacity="0.2" />
          <circle cx="15.5" cy="14.5" r="4.5" fill="#0A0A0A" stroke="currentColor" strokeWidth="1.5" />
          <path d="M15.5 12.5V14.5L17 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="group-hover:rotate-[360deg] transition-all duration-1000 ease-in-out" style={{ transformOrigin: '15.5px 14.5px' }} />
        </svg>
      )
    },
    { 
      title: "Instant Booking", 
      desc: "Secure your slot with integrated digital payments (Bkash/Nagad).", 
      icon: () => (
        <svg className="w-7 h-7 text-brand-green group-hover:text-black transition-colors duration-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" className="opacity-40" />
          <path d="M3 10H21" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" className="opacity-40" />
          <path d="M13 2L6 12H12L11 20L18 10H12L13 2Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" className="group-hover:scale-110 transition-all duration-500" style={{ transformOrigin: '12px 11px' }} />
        </svg>
      )
    },
    { 
      title: "Booking History", 
      desc: "Manage upcoming games and view all past transactions.", 
      icon: () => (
        <svg className="w-7 h-7 text-brand-green group-hover:text-black transition-colors duration-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 3H17C18.1046 3 19 3.89543 19 5V17" stroke="currentColor" strokeWidth="1.5" className="opacity-30" />
          <rect x="4" y="6" width="12" height="15" rx="2" stroke="currentColor" strokeWidth="1.5" className="opacity-50" />
          <path d="M7 10H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="opacity-40" />
          <path d="M7 13H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="opacity-40" />
          <circle cx="16" cy="15" r="5" fill="currentColor" fillOpacity="0.2" />
          <path d="M14 15L15.5 16.5L18 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-[1px] transition-all duration-500" />
        </svg>
      )
    }
  ];

  const ownerSteps = [
    { 
      title: "Turf Profile", 
      desc: "Set up your turf with images, facilities, and dynamic pricing.", 
      icon: () => (
        <svg className="w-7 h-7 text-brand-green group-hover:text-black transition-colors duration-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" className="opacity-40" />
          <path d="M12 4V20" stroke="currentColor" strokeWidth="1.5" className="opacity-40" />
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" className="opacity-40" />
          <path d="M3 8H6V16H3" stroke="currentColor" strokeWidth="1.5" className="opacity-40" />
          <path d="M21 8H18V16H21" stroke="currentColor" strokeWidth="1.5" className="opacity-40" />
          <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2" className="group-hover:translate-y-[-1px] transition-all duration-500" style={{ transformOrigin: '12px 12px' }} />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        </svg>
      )
    },
    { 
      title: "Dynamic Slots", 
      desc: "Manage pricing and availability for every single hour.", 
      icon: () => (
        <svg className="w-7 h-7 text-brand-green group-hover:text-black transition-colors duration-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" className="opacity-40" />
          <path d="M12 3V5" stroke="currentColor" strokeWidth="1.5" className="opacity-40" />
          <path d="M12 19V21" stroke="currentColor" strokeWidth="1.5" className="opacity-40" />
          <path d="M3 12H5" stroke="currentColor" strokeWidth="1.5" className="opacity-40" />
          <path d="M19 12H21" stroke="currentColor" strokeWidth="1.5" className="opacity-40" />
          <path d="M12 8V16M9.5 10H14.5M9.5 14H14.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M12 12L15.5 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="group-hover:rotate-[180deg] transition-all duration-700" style={{ transformOrigin: '12px 12px' }} />
        </svg>
      )
    },
    { 
      title: "Handle Requests", 
      desc: "Receive and confirm booking requests instantly via dashboard.", 
      icon: () => (
        <svg className="w-7 h-7 text-brand-green group-hover:text-black transition-colors duration-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 11.5C21 15.6421 16.9706 19 12 19C10.4578 19 9.0145 18.6603 7.7471 18.0622L3 19.5L4.5422 15.1118C3.5709 14.108 3 12.8687 3 11.5C3 7.35786 7.02944 4 12 4C16.9706 4 21 7.35786 21 11.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-40" />
          <path d="M8 12L10.5 14.5L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-[1px] transition-all duration-500" />
        </svg>
      )
    },
    { 
      title: "Revenue Stats", 
      desc: "Complete statistics of daily and monthly business growth.", 
      icon: () => (
        <svg className="w-7 h-7 text-brand-green group-hover:text-black transition-colors duration-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 20H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="opacity-40" />
          <path d="M3 4V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="opacity-40" />
          <rect x="6" y="13" width="3" height="7" rx="0.75" fill="currentColor" fillOpacity="0.2" />
          <rect x="11" y="9" width="3" height="11" rx="0.75" fill="currentColor" fillOpacity="0.2" />
          <rect x="16" y="6" width="3" height="14" rx="0.75" fill="currentColor" fillOpacity="0.2" />
          <path d="M6 15L11 11L16 7L20 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-[1.5px] group-hover:translate-y-[-1.5px] transition-all duration-500" />
        </svg>
      )
    }
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
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto text-base md:text-lg font-bold leading-relaxed uppercase tracking-[0.25em]">
            Connecting <span className="text-brand-green italic">Players</span> and <span className="text-white">Turf Owners</span>
          </p>
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
              <Smartphone size={18} className="text-brand-green" />
              <span className="text-xs font-black text-brand-green uppercase tracking-[0.2em]">For Players</span>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {userSteps.map((s, i) => {
                const IconComponent = s.icon;
                return (
                  <div 
                    key={i} 
                    className="relative glass-card !p-8 cursor-pointer group hover:scale-[1.03] hover:-translate-y-2.5 hover:border-brand-green/35 hover:bg-gradient-to-br hover:from-white/[0.08] hover:to-brand-green/[0.04] hover:shadow-[0_30px_60px_rgba(0,168,89,0.08)] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] overflow-hidden"
                  >
                    {/* Glass shine sweep */}
                    <div className="shine-effect" />
                    
                    {/* Subtle hover gradient background */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,168,89,0.04),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    
                    {/* Icon Container */}
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:border-brand-green/30 group-hover:bg-brand-green group-hover:shadow-[0_0_20px_rgba(0,168,89,0.4)] transition-all duration-500">
                      <IconComponent />
                    </div>
                    
                    {/* Content */}
                    <h4 className="text-lg font-black text-[var(--text-primary)] mb-2.5 uppercase italic tracking-tight group-hover:text-brand-green transition-colors duration-300">{s.title}</h4>
                    <p className="text-[13px] text-[var(--text-secondary)] leading-relaxed font-medium group-hover:text-[var(--text-primary)]/80 transition-colors duration-300">{s.desc}</p>
                  </div>
                );
              })}
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
              {ownerSteps.map((s, i) => {
                const IconComponent = s.icon;
                return (
                  <div 
                    key={i} 
                    className="relative glass-card !p-8 cursor-pointer group hover:scale-[1.03] hover:-translate-y-2.5 hover:border-brand-green/35 hover:bg-gradient-to-br hover:from-white/[0.08] hover:to-brand-green/[0.04] hover:shadow-[0_30px_60px_rgba(0,168,89,0.08)] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] overflow-hidden"
                  >
                    {/* Glass shine sweep */}
                    <div className="shine-effect" />
                    
                    {/* Subtle hover gradient background */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,168,89,0.04),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    
                    {/* Icon Container */}
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:border-brand-green/30 group-hover:bg-brand-green group-hover:shadow-[0_0_20px_rgba(0,168,89,0.4)] transition-all duration-500">
                      <IconComponent />
                    </div>
                    
                    {/* Content */}
                    <h4 className="text-lg font-black text-[var(--text-primary)] mb-2.5 uppercase italic tracking-tight group-hover:text-brand-green transition-colors duration-300">{s.title}</h4>
                    <p className="text-[13px] text-[var(--text-secondary)] leading-relaxed font-medium group-hover:text-[var(--text-primary)]/80 transition-colors duration-300">{s.desc}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Core Intelligence Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card !p-8 border border-brand-green/20 shadow-[0_0_50px_rgba(0,168,89,0.05)] hover:border-brand-green/40 hover:shadow-[0_0_60px_rgba(0,168,89,0.08)] transition-all duration-500 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,168,89,0.02),transparent_70%)] pointer-events-none" />
          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {coreLogics.map((log, i) => (
              <div key={i} className="flex gap-5 items-start group">
                <div className="p-3 bg-brand-green/10 rounded-xl border border-brand-green/20 flex-shrink-0 group-hover:bg-brand-green group-hover:scale-110 transition-all duration-500 shadow-[0_0_15px_rgba(0,168,89,0.1)] group-hover:shadow-[0_0_20px_rgba(0,168,89,0.3)]">
                  <log.icon className="text-brand-green group-hover:text-black transition-colors duration-500" size={20} />
                </div>
                <div>
                  <h5 className="text-base font-black text-[var(--text-primary)] uppercase italic tracking-tight mb-1.5 group-hover:text-brand-green transition-colors duration-300">{log.title}</h5>
                  <p className="text-[13px] text-[var(--text-secondary)] font-medium leading-relaxed group-hover:text-[var(--text-primary)]/80 transition-colors duration-300">{log.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Internal Smartphone component for the icon
const Smartphone = ({ size, className }: { size: number, className: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
    <path d="M12 18h.01" />
  </svg>
);
