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
    <section id="management" className="py-20 lg:py-32 bg-[#FFFFFF] relative">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight uppercase">
            Professional <span className="font-serif italic text-[#00A859] lowercase font-normal">management.</span>
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto text-sm md:text-base font-bold leading-relaxed uppercase tracking-[0.2em]">Everything you need to scale your turf business.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Booking Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 lg:p-10 relative overflow-hidden bg-white border-[#00A859]/20 shadow-sm"
          >
            <h3 className="text-2xl font-extrabold text-slate-900 mb-8 flex items-center gap-4 uppercase tracking-tight">
              <div className="w-10 h-10 rounded-xl bg-[#00A859]/10 flex items-center justify-center">
                <Smartphone className="text-[#00A859]" size={20} />
              </div>
              Booking Workflow
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {ownerFeatures.map((f, i) => (
                <div key={i} className="group">
                  <f.icon className="text-[#00A859]/50 mb-3 group-hover:text-[#00A859] transition-colors" size={24} />
                  <h4 className="text-base font-extrabold text-slate-900 mb-1.5 tracking-tight uppercase">{f.title}</h4>
                  <p className="text-slate-600 text-xs leading-relaxed font-medium">{f.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Reports Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 lg:p-10 relative overflow-hidden bg-white border-[#00A859]/20 shadow-sm"
          >
            <h3 className="text-2xl font-extrabold text-slate-900 mb-8 flex items-center gap-4 uppercase tracking-tight">
              <div className="w-10 h-10 rounded-xl bg-[#00A859]/10 flex items-center justify-center">
                <LayoutDashboard className="text-[#00A859]" size={20} />
              </div>
              Revenue Tracking
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {reportFeatures.map((f, i) => (
                <div key={i} className="group">
                  <f.icon className="text-[#00A859]/50 mb-3 group-hover:text-[#00A859] transition-colors" size={24} />
                  <h4 className="text-base font-extrabold text-slate-900 mb-1.5 tracking-tight uppercase">{f.title}</h4>
                  <p className="text-slate-600 text-xs leading-relaxed font-medium">{f.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
