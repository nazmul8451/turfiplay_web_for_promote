import React from 'react';
import { motion } from 'motion/react';

export const Comparison = () => {
  const rows = [
    { feature: "বুকিং নেওয়ার গতি", old: "ধীরগতি (হোয়াটসঅ্যাপ/বারবার কল)", new: "মুহূর্তেই (মাত্র ১০ সেকেন্ডে)" },
    { feature: "স্লট বুকিংয়ের নির্ভুলতা", old: "ঝুঁকিপূর্ণ (ডাবল বুকিংয়ের ভয়)", new: "১০০% নিরাপদ (অটো-লকিং)" },
    { feature: "আয়-ব্যয়ের হিসাব", old: "এলোমেলো (হাতে লেখা খাতা/এক্সেল)", new: "পরিষ্কার (স্বয়ংক্রিয় রিপোর্ট)" },
    { feature: "কাস্টমার ডাটাবেস", old: "হারিয়ে যাওয়া মেসেজ হিস্ট্রি", new: "গোছানো ডিজিটাল রেকর্ড" },
    { feature: "ব্যবসা পরিচালনা", old: "অতিরিক্ত মানসিক চাপ ও বিশৃঙ্খলা", new: "স্মার্ট, প্রফেশনাল ও ডিজিটাল" }
  ];

  return (
    <section className="py-20 lg:py-32 bg-[#F8FAFC] border-y border-slate-200 relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight leading-tight">
            খাতা-কলম বনাম <span className="font-serif italic text-[#00A859] font-normal">TurfPlay</span>
          </h2>
          <p className="text-slate-600 font-medium leading-relaxed text-xs sm:text-sm tracking-wider">
            ডিজিটাল টার্ফ ম্যানেজমেন্টের নতুন যুগ শুরু হয়েছে।
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card overflow-hidden !p-0 border border-slate-200 bg-white shadow-sm"
        >
          <div className="overflow-x-auto w-full custom-scrollbar">
            <table className="w-full text-left border-collapse min-w-[540px] sm:min-w-full">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="py-4 sm:py-6 px-4 sm:px-8 text-left text-xs font-extrabold text-slate-700 uppercase tracking-wider">বৈশিষ্ট্য</th>
                  <th className="py-4 sm:py-6 px-4 sm:px-8 text-center text-xs font-extrabold text-[#00A859] uppercase tracking-wider bg-[#00A859]/10">TurfPlay প্ল্যাটফর্ম</th>
                  <th className="py-4 sm:py-6 px-4 sm:px-8 text-center text-xs font-extrabold text-slate-500 uppercase tracking-wider">ম্যানুয়াল খাতা / এক্সেল</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={i} className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors group">
                    <td className="p-4 sm:p-6 text-xs sm:text-sm font-extrabold text-slate-900 tracking-tight group-hover:text-[#00A859] transition-colors">{row.feature}</td>
                    <td className="p-4 sm:p-6 text-xs sm:text-sm text-[#00A859] font-extrabold tracking-tight text-center bg-[#00A859]/5">{row.new}</td>
                    <td className="p-4 sm:p-6 text-[11px] sm:text-xs text-slate-500 font-medium text-center">{row.old}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
