import React from 'react';
import { motion } from 'motion/react';
import { Phone, LayoutDashboard, X } from 'lucide-react';

export const Problem = () => {
  const problems = [
    {
      title: "হোয়াটসঅ্যাপের বিশৃঙ্খলা",
      desc: "রাত ৮টার স্লট কে বুক করেছিল তা দেখতে ১০০টি মেসেজ স্ক্রোল করার ঝামেলা।",
      icon: Phone
    },
    {
      title: "ডাবল-বুকিংয়ের দুশ্চিন্তা",
      desc: "লিখে রাখতে ভুলে যাওয়ার কারণে একই সময়ে ২টি দল টার্ফে খেলতে চলে আসা।",
      icon: X
    },
    {
      title: "পেমেন্ট রেকর্ডের অভাব",
      desc: "কে অগ্রিম দিয়েছে আর কার কাছে টাকা বাকি তা ম্যানুয়ালি হিসাব করা কঠিন।",
      icon: LayoutDashboard
    }
  ];

  return (
    <section id="problem" className="py-16 sm:py-24 lg:py-36 bg-white relative overflow-hidden">
      {/* Abstract background shapes */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#00A859]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-4 sm:mb-8 leading-tight tracking-tight">
              এখনও হোয়াটসঅ্যাপ <br />
              <span className="text-slate-400">ও এক্সেল ব্যবহার করছেন?</span>
            </h2>
            <p className="text-sm sm:text-base md:text-xl text-slate-600 mb-8 sm:mb-12 leading-relaxed max-w-xl font-medium">
              হোয়াটসঅ্যাপ বা এক্সেল মেসেজ পাঠানোর জন্য ভালো হলেও প্রফেশনাল স্পোর্টস টার্ফ চালানোর জন্য তৈরি নয়। ম্যানুয়াল হিসাব কষে সময় নষ্ট বন্ধ করুন।
            </p>
            <div className="space-y-5 sm:space-y-8">
              {problems.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4 sm:gap-6 group items-start"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#00A859]/10 border border-[#00A859]/20 flex items-center justify-center shrink-0 group-hover:border-[#00A859]/40 transition-all duration-300 group-hover:scale-105">
                    <p.icon className="text-[#00A859]" size={22} />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-xl font-bold text-slate-900 mb-1 sm:mb-2 tracking-tight group-hover:text-[#00A859] transition-colors">{p.title}</h4>
                    <p className="text-xs sm:text-base text-slate-600 leading-relaxed font-medium transition-colors">{p.desc}</p>
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
            <div className="aspect-square max-w-[480px] mx-auto rounded-3xl sm:rounded-[3rem] bg-gradient-to-br from-slate-100 to-slate-50 p-[1px] border border-slate-200 shadow-xl">
              <div className="w-full h-full rounded-[1.4rem] sm:rounded-[2.9rem] bg-white overflow-hidden flex items-center justify-center p-6 sm:p-12 relative group">
                <div className="absolute inset-0 bg-[#00A859]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="text-center relative z-10">
                  <div className="w-20 h-20 sm:w-28 sm:h-28 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8 border border-red-500/20 shadow-[0_0_30px_rgba(239,68,68,0.1)]">
                    <X className="text-red-500" size={40} />
                  </div>
                  <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-3 sm:mb-4 italic tracking-tight leading-tight">
                    "একটু দাঁড়ান, আমি এক্সেল শিট দেখে বলছি..."
                  </p>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium">ব্যবসায় প্রফেশনালিজম হারানোর চিত্র।</p>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};
