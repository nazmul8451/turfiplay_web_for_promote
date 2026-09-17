import React from 'react';
import { motion } from 'motion/react';
import { Zap, Facebook, Instagram, ChevronRight, Twitter } from 'lucide-react';

export const StayTuned = () => {
  return (
    <section className="py-24 lg:py-48 bg-brand-navy relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-brand-green/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container-fluid text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-3 sm:gap-4 mb-8 sm:mb-12 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-brand-green/10 border border-brand-green/20">
            <Zap className="text-brand-green animate-pulse" size={16} />
            <span className="text-[10px] sm:text-xs font-black text-brand-green uppercase tracking-[0.3em] sm:tracking-[0.4em]">আমাদের সাথে যুক্ত থাকুন</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-7xl font-black text-slate-900 mb-6 sm:mb-8 italic uppercase tracking-tight">
            সাথে <span className="text-brand-green">থাকুন।</span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-slate-600 mb-12 sm:mb-20 max-w-2xl mx-auto font-medium leading-relaxed tracking-wide">
            আমরা তৈরি করছি স্পোর্টস ম্যানেজমেন্টের নতুন ভবিষ্যৎ। বিশেষ আপডেট পেতে আমাদের সাথে যুক্ত হোন।
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 lg:gap-8 max-w-2xl mx-auto">
            {[
              { name: "Facebook", icon: Facebook, sub: "কমিউনিটিতে যুক্ত হন" },
              { name: "Instagram", icon: Instagram, sub: "আপডেটসমূহ দেখুন" }
            ].map((social, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ y: -6 }}
                className="glass-card flex items-center gap-4 sm:gap-6 !p-5 sm:!p-7 group w-full sm:flex-1 max-w-sm bg-white border border-slate-200 shadow-sm"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-brand-green/10 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-brand-green/20 transition-all duration-300">
                  <social.icon size={26} className="text-brand-green" />
                </div>
                <div className="text-left min-w-0">
                  <p className="text-[9px] sm:text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-1 truncate">{social.sub}</p>
                  <p className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight group-hover:text-brand-green transition-colors">{social.name}</p>
                </div>
                <ChevronRight className="ml-auto text-slate-300 group-hover:text-brand-green group-hover:translate-x-1 transition-all shrink-0" size={20} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
