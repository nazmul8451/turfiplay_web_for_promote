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
    <section className="py-20 lg:py-32 bg-[#F8FAFC] border-y border-slate-200 relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight uppercase">
            Excel vs <span className="font-serif italic text-[#00A859] lowercase font-normal">TurfPlay</span>
          </h2>
          <p className="text-slate-600 font-medium leading-relaxed uppercase tracking-[0.2em] text-xs">The era of digital turf management is here.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card overflow-hidden !p-0 border border-slate-200 bg-white shadow-sm"
        >
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="py-6 px-8 text-left text-xs font-extrabold text-slate-700 uppercase tracking-wider">Feature</th>
                <th className="py-6 px-8 text-center text-xs font-extrabold text-[#00A859] uppercase tracking-wider bg-[#00A859]/10">TurfPlay</th>
                <th className="py-6 px-8 text-center text-xs font-extrabold text-slate-500 uppercase tracking-wider">Manual / Excel</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors group">
                  <td className="p-6 text-sm font-extrabold text-slate-900 tracking-tight group-hover:text-[#00A859] transition-colors">{row.feature}</td>
                  <td className="p-6 text-sm text-[#00A859] font-extrabold tracking-tight text-center bg-[#00A859]/5">{row.new}</td>
                  <td className="p-6 text-xs text-slate-500 font-medium text-center">{row.old}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
};
