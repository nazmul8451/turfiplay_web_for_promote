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
    <section id="problem" className="py-24 lg:py-48 bg-brand-bg relative overflow-hidden">
      {/* Abstract background shapes */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-brand-green/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-[1880px] mx-auto px-10 md:px-[10%] lg:px-[12%]">
        <div className="grid lg:grid-cols-2 gap-24 lg:gap-32 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-black text-[var(--text-primary)] mb-8 leading-tight tracking-tighter">
              এখনও হোয়াটসঅ্যাপ <br />
              <span className="text-[var(--text-secondary)] opacity-50">ও এক্সেল ব্যবহার করছেন?</span>
            </h2>
            <p className="text-lg md:text-xl text-[var(--text-secondary)] mb-12 leading-relaxed max-w-xl font-medium">
              হোয়াটসঅ্যাপ বা এক্সেল মেসেজ পাঠানোর জন্য ভালো হলেও প্রফেশনাল স্পোর্টস টার্ফ চালানোর জন্য তৈরি নয়। ম্যানুয়াল হিসাব কষে সময় নষ্ট বন্ধ করুন।
            </p>
            <div className="space-y-8">
              {problems.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-8 group items-start"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-[var(--border-color)] flex items-center justify-center flex-shrink-0 group-hover:border-brand-green/30 transition-all duration-500 group-hover:scale-110">
                    <p.icon className="text-brand-green/60 group-hover:text-brand-green" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[var(--text-primary)] mb-2 tracking-tight group-hover:text-brand-green transition-colors">{p.title}</h4>
                    <p className="text-base text-[var(--text-secondary)] leading-relaxed font-medium group-hover:text-[var(--text-primary)] transition-colors">{p.desc}</p>
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
            <div className="aspect-square rounded-[4rem] bg-gradient-to-br from-white/10 to-transparent p-[1px]">
              <div className="w-full h-full rounded-[3.9rem] bg-brand-surface/50 backdrop-blur-3xl overflow-hidden flex items-center justify-center p-12 relative group">
                <div className="absolute inset-0 bg-brand-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                <div className="text-center relative z-10">
                  <div className="w-32 h-32 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-10 border border-red-500/20 shadow-[0_0_40px_rgba(239,68,68,0.1)]">
                    <X className="text-red-500" size={50} />
                  </div>
                  <p className="text-3xl font-black text-white mb-6 italic tracking-tight leading-tight">"একটু দাঁড়ান, আমি এক্সেল শিট দেখে বলছি..."</p>
                  <p className="text-lg text-white/30 font-medium">ব্যবসায় প্রফেশনালিজম হারানোর চিত্র।</p>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};
