import React from 'react';
import { motion } from 'motion/react';

export const Comparison = () => {
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
