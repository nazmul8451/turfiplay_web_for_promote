import React from 'react';
import { motion } from 'motion/react';
import { Zap, Facebook, Instagram, ChevronRight, Twitter } from 'lucide-react';

export const StayTuned = () => {
  return (
    <section className="py-24 lg:py-48 bg-brand-navy relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-brand-green/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-[1880px] mx-auto px-10 md:px-[10%] lg:px-[12%] text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-4 mb-12 px-6 py-3 rounded-full bg-brand-green/10 border border-brand-green/20">
            <Zap className="text-brand-green animate-pulse" size={16} />
            <span className="text-xs font-black text-brand-green uppercase tracking-[0.4em]">আমাদের সাথে যুক্ত থাকুন</span>
          </div>

          <h2 className="text-5xl md:text-8xl font-black text-[var(--text-primary)] mb-8 italic uppercase tracking-tighter">
            সাথে <span className="text-brand-green">থাকুন।</span>
          </h2>

          <p className="text-xl text-[var(--text-secondary)] mb-24 max-w-3xl mx-auto font-medium leading-relaxed uppercase tracking-widest">
            আমরা তৈরি করছি স্পোর্টস ম্যানেজমেন্টের নতুন ভবিষ্যৎ। বিশেষ আপডেট পেতে আমাদের সাথে যুক্ত হোন।
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-8 lg:gap-12">
            {[
              { name: "Facebook", icon: Facebook, sub: "কমিউনিটিতে যুক্ত হন" },
              { name: "Instagram", icon: Instagram, sub: "আপডেটসমূহ দেখুন" }
            ].map((social, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ y: -10 }}
                className="glass-card flex items-center gap-10 !p-10 group min-w-[320px]"
              >
                <div className="w-20 h-20 rounded-2xl bg-brand-green/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-brand-green/20 transition-all duration-500">
                  <social.icon size={36} className="text-brand-green" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-black text-[var(--text-secondary)] uppercase tracking-[0.3em] mb-2">{social.sub}</p>
                  <p className="text-3xl font-black text-[var(--text-primary)] tracking-tighter group-hover:text-brand-green transition-colors">{social.name}</p>
                </div>
                <ChevronRight className="ml-auto text-[var(--text-secondary)]/10 group-hover:text-brand-green group-hover:translate-x-2 transition-all" size={24} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
