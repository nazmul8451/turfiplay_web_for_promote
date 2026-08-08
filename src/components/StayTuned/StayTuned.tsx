import React from 'react';
import { motion } from 'motion/react';
import { Zap, Facebook, Instagram, ChevronRight, Twitter } from 'lucide-react';

export const StayTuned = () => {
  return (
    <section className="py-24 lg:py-48 bg-brand-navy relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-brand-green/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-[1880px] mx-auto px-4 sm:px-8 md:px-[10%] lg:px-[12%] text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-3 mb-8 sm:mb-12 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-brand-green/10 border border-brand-green/20">
            <Zap className="text-brand-green animate-pulse" size={16} />
            <span className="text-[10px] sm:text-xs font-black text-brand-green uppercase tracking-[0.3em] sm:tracking-[0.4em]">আমাদের যাত্রা অনুসরণ করুন</span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-8xl font-black text-[var(--text-primary)] mb-6 sm:mb-8 italic uppercase tracking-tighter">
            আপডেট <span className="text-brand-green">থাকুন।</span>
          </h2>

          <p className="text-sm sm:text-lg md:text-xl text-[var(--text-secondary)] mb-12 sm:mb-20 max-w-3xl mx-auto font-medium leading-relaxed tracking-wider">
            আমরা স্পোর্টস ম্যানেজমেন্টের ভবিষ্যৎ তৈরি করছি। এক্সক্লুসিভ আপডেটের জন্য আমাদের কমিউনিটিতে যোগ দিন।
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 lg:gap-12">
            {[
              { name: "Facebook", icon: Facebook, sub: "কমিউনিটিতে যোগ দিন" },
              { name: "Instagram", icon: Instagram, sub: "লাইভ অ্যাকশন দেখুন" }
            ].map((social, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ y: -6 }}
                className="glass-card flex items-center gap-4 sm:gap-8 p-5 sm:!p-8 group w-full sm:w-auto sm:min-w-[280px] md:min-w-[320px]"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-brand-green/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-brand-green/20 transition-all duration-500 flex-shrink-0">
                  <social.icon size={26} className="text-brand-green" />
                </div>
                <div className="text-left">
                  <p className="text-[9px] sm:text-[10px] font-black text-[var(--text-secondary)] uppercase tracking-[0.25em] sm:tracking-[0.3em] mb-1">{social.sub}</p>
                  <p className="text-xl sm:text-2xl md:text-3xl font-black text-[var(--text-primary)] tracking-tight group-hover:text-brand-green transition-colors">{social.name}</p>
                </div>
                <ChevronRight className="ml-auto text-[var(--text-secondary)]/30 group-hover:text-brand-green group-hover:translate-x-2 transition-all flex-shrink-0" size={20} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
