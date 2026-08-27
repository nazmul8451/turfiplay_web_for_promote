import React from 'react';
import { motion } from 'motion/react';

export const Comparison = () => {
  const rows = [
    { feature: "বুকিং স্পিড", old: "ধীরগতির (হোয়াটসঅ্যাপ/কল)", new: "তাৎক্ষণিক (১০ সেকেন্ড)" },
    { feature: "স্লট সঠিকতা", old: "ঝুঁকিপূর্ণ (ডাবল-বুকিং)", new: "১০০% (অটো-লকিং)" },
    { feature: "রেভিনিউ ট্র্যাকিং", old: "এলোমেলো (ম্যানুয়াল এক্সেল)", new: "স্পষ্ট (অটো-রিপোর্ট)" },
    { feature: "গ্রাহক ডাটা", old: "বিচ্ছিন্ন মেসেজ", new: "সুসংগঠিত ডাটাবেস" },
    { feature: "ম্যানেজমেন্ট", old: "ঝামেলাপূর্ণ ও ম্যানুয়াল", new: "প্রফেশনাল ও ডিজিটাল" }
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
            এক্সেল বনাম <span className="font-serif italic text-[#00A859] lowercase font-normal">TurfPlay</span>
          </h2>
          <p className="text-slate-600 font-medium leading-relaxed uppercase tracking-[0.2em] text-xs">ডিজিটাল টার্ফ ম্যানেজমেন্টের নতুন যুগ এখন হাতের মুঠোয়।</p>
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
                <th className="py-6 px-8 text-left text-xs font-extrabold text-slate-700 uppercase tracking-wider">ফিচার</th>
                <th className="py-6 px-8 text-center text-xs font-extrabold text-[#00A859] uppercase tracking-wider bg-[#00A859]/10">TurfPlay</th>
                <th className="py-6 px-8 text-center text-xs font-extrabold text-slate-500 uppercase tracking-wider">ম্যানুয়াল / এক্সেল</th>
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
