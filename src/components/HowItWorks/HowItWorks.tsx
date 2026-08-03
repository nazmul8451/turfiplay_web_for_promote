import React from 'react';
import { motion } from 'motion/react';
import { LayoutDashboard, ShieldCheck, Bell, Globe } from 'lucide-react';

export const HowItWorks = () => {
  const userSteps = [
    { 
      title: "Map Discovery", 
      desc: "Find nearby turfs directly on Google Maps integration.", 
      icon: () => (
        <svg className="w-7 h-7 text-[#00A859] group-hover:text-white transition-colors duration-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 6L9 3L15 6L21 3V18L15 21L9 18L3 21V6Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-60" />
          <path d="M9 3V18" stroke="currentColor" strokeWidth="1.5" className="opacity-60" />
          <path d="M15 6V21" stroke="currentColor" strokeWidth="1.5" className="opacity-60" />
          <path d="M12 14C14.2091 14 16 12.2091 16 10C16 7.79086 14.2091 6 12 6C9.79086 6 8 7.79086 8 10C8 12.2091 9.79086 14 12 14Z" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="2" />
          <path d="M12 10V10.01" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      )
    },
    { 
      title: "Select Slot", 
      desc: "View real-time availability and pick your preferred time.", 
      icon: () => (
        <svg className="w-7 h-7 text-[#00A859] group-hover:text-white transition-colors duration-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="4" width="18" height="16" rx="3" stroke="currentColor" strokeWidth="1.5" className="opacity-60" />
          <path d="M3 10H21" stroke="currentColor" strokeWidth="1.5" className="opacity-60" />
          <path d="M8 2V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="opacity-60" />
          <path d="M16 2V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="opacity-60" />
          <rect x="6" y="13" width="4" height="4" rx="1" fill="currentColor" fillOpacity="0.2" />
          <circle cx="15.5" cy="14.5" r="4.5" fill="#F8FAFC" stroke="currentColor" strokeWidth="1.5" />
          <path d="M15.5 12.5V14.5L17 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      )
    },
    { 
      title: "Instant Booking", 
      desc: "Secure your slot with integrated digital payments (Bkash/Nagad).", 
      icon: () => (
        <svg className="w-7 h-7 text-[#00A859] group-hover:text-white transition-colors duration-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" className="opacity-60" />
          <path d="M3 10H21" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" className="opacity-60" />
          <path d="M13 2L6 12H12L11 20L18 10H12L13 2Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        </svg>
      )
    },
    { 
      title: "Booking History", 
      desc: "Manage upcoming games and view all past transactions.", 
      icon: () => (
        <svg className="w-7 h-7 text-[#00A859] group-hover:text-white transition-colors duration-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 3H17C18.1046 3 19 3.89543 19 5V17" stroke="currentColor" strokeWidth="1.5" className="opacity-40" />
          <rect x="4" y="6" width="12" height="15" rx="2" stroke="currentColor" strokeWidth="1.5" className="opacity-60" />
          <path d="M7 10H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="opacity-60" />
          <path d="M7 13H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="opacity-60" />
          <circle cx="16" cy="15" r="5" fill="currentColor" fillOpacity="0.2" />
          <path d="M14 15L15.5 16.5L18 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    }
  ];

  const ownerSteps = [
    { 
      title: "Turf Profile", 
      desc: "Set up your turf with images, facilities, and dynamic pricing.", 
      icon: () => (
        <svg className="w-7 h-7 text-[#00A859] group-hover:text-white transition-colors duration-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" className="opacity-60" />
          <path d="M12 4V20" stroke="currentColor" strokeWidth="1.5" className="opacity-60" />
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" className="opacity-60" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        </svg>
      )
    },
    { 
      title: "Dynamic Slots", 
      desc: "Manage pricing and availability for every single hour.", 
      icon: () => (
        <svg className="w-7 h-7 text-[#00A859] group-hover:text-white transition-colors duration-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" className="opacity-60" />
          <path d="M12 3V5" stroke="currentColor" strokeWidth="1.5" className="opacity-60" />
          <path d="M12 19V21" stroke="currentColor" strokeWidth="1.5" className="opacity-60" />
          <path d="M3 12H5" stroke="currentColor" strokeWidth="1.5" className="opacity-60" />
          <path d="M19 12H21" stroke="currentColor" strokeWidth="1.5" className="opacity-60" />
          <path d="M12 8V16M9.5 10H14.5M9.5 14H14.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    },
    { 
      title: "Handle Requests", 
      desc: "Receive and confirm booking requests instantly via dashboard.", 
      icon: () => (
        <svg className="w-7 h-7 text-[#00A859] group-hover:text-white transition-colors duration-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 11.5C21 15.6421 16.9706 19 12 19C10.4578 19 9.0145 18.6603 7.7471 18.0622L3 19.5L4.5422 15.1118C3.5709 14.108 3 12.8687 3 11.5C3 7.35786 7.02944 4 12 4C16.9706 4 21 7.35786 21 11.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-60" />
          <path d="M8 12L10.5 14.5L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    { 
      title: "Revenue Stats", 
      desc: "Complete statistics of daily and monthly business growth.", 
      icon: () => (
        <svg className="w-7 h-7 text-[#00A859] group-hover:text-white transition-colors duration-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 20H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="opacity-60" />
          <path d="M3 4V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="opacity-60" />
          <rect x="6" y="13" width="3" height="7" rx="0.75" fill="currentColor" fillOpacity="0.2" />
          <rect x="11" y="9" width="3" height="11" rx="0.75" fill="currentColor" fillOpacity="0.2" />
          <rect x="16" y="6" width="3" height="14" rx="0.75" fill="currentColor" fillOpacity="0.2" />
          <path d="M6 15L11 11L16 7L20 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
    <section id="how-it-works" className="py-20 lg:py-28 bg-[#FFFFFF] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#00A859]/5 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight uppercase">
            OUR <span className="font-serif italic text-[#00A859] lowercase font-normal">ecosystem.</span>
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto text-sm md:text-base font-bold leading-relaxed uppercase tracking-[0.2em]">
            Connecting <span className="text-[#00A859] italic">Players</span> and <span className="text-slate-900 font-extrabold">Turf Owners</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 mb-16">
          {/* User Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-3 bg-[#00A859]/10 border border-[#00A859]/20 px-5 py-2 rounded-full">
              <Smartphone size={16} className="text-[#00A859]" />
              <span className="text-xs font-extrabold text-[#00A859] uppercase tracking-[0.2em]">For Players</span>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              {userSteps.map((s, i) => {
                const IconComponent = s.icon;
                return (
                  <div 
                    key={i} 
                    className="relative glass-card !p-6 cursor-pointer group hover:border-[#00A859]/40 hover:shadow-lg hover:shadow-[#00A859]/10 transition-all duration-300 overflow-hidden bg-white"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-[#00A859]/10 flex items-center justify-center mb-5 border border-[#00A859]/20 group-hover:bg-[#00A859] group-hover:shadow-md transition-all duration-300">
                      <IconComponent />
                    </div>
                    
                    <h4 className="text-base font-extrabold text-slate-900 mb-2 uppercase tracking-tight group-hover:text-[#00A859] transition-colors">{s.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed font-medium">{s.desc}</p>
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
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-3 bg-[#00A859]/10 border border-[#00A859]/20 px-5 py-2 rounded-full">
              <LayoutDashboard className="text-[#00A859]" size={16} />
              <span className="text-xs font-extrabold text-[#00A859] uppercase tracking-[0.2em]">For Turf Owners</span>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              {ownerSteps.map((s, i) => {
                const IconComponent = s.icon;
                return (
                  <div 
                    key={i} 
                    className="relative glass-card !p-6 cursor-pointer group hover:border-[#00A859]/40 hover:shadow-lg hover:shadow-[#00A859]/10 transition-all duration-300 overflow-hidden bg-white"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-[#00A859]/10 flex items-center justify-center mb-5 border border-[#00A859]/20 group-hover:bg-[#00A859] group-hover:shadow-md transition-all duration-300">
                      <IconComponent />
                    </div>
                    
                    <h4 className="text-base font-extrabold text-slate-900 mb-2 uppercase tracking-tight group-hover:text-[#00A859] transition-colors">{s.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed font-medium">{s.desc}</p>
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
          className="glass-card !p-8 border border-[#00A859]/20 shadow-sm bg-white"
        >
          <div className="grid md:grid-cols-3 gap-8">
            {coreLogics.map((log, i) => (
              <div key={i} className="flex gap-4 items-start group">
                <div className="p-3 bg-[#00A859]/10 rounded-xl border border-[#00A859]/20 flex-shrink-0 group-hover:bg-[#00A859] transition-all">
                  <log.icon className="text-[#00A859] group-hover:text-white transition-colors" size={20} />
                </div>
                <div>
                  <h5 className="text-base font-extrabold text-slate-900 uppercase tracking-tight mb-1 group-hover:text-[#00A859] transition-colors">{log.title}</h5>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">{log.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

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
