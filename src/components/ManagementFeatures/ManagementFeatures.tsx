import React from 'react';
import { motion } from 'motion/react';
import { Smartphone, Zap, CheckCircle2, Star, LayoutDashboard } from 'lucide-react';

export const ManagementFeatures = () => {
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
