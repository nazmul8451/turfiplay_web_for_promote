import React from 'react';
import { motion } from 'motion/react';
import { Map, Calendar, Zap, LayoutDashboard, MapPin, Clock, MessageSquare, BarChart3, ShieldCheck, Bell, Globe } from 'lucide-react';

export const HowItWorks = () => {
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
              <Smartphone size={18} className="text-brand-green" />
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
