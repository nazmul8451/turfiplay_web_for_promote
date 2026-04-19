import React from 'react';
import { motion } from 'motion/react';
import { Award, Zap, BarChart3, Users } from 'lucide-react';

export const About = () => {
  const values = [
    { title: "Turf First", desc: "We don't build generic booking apps. We build specifically for the unique needs of sports turf owners.", icon: Award },
    { title: "Zero Friction", desc: "Our interface is designed to be usable even in the middle of a busy match day, with one-tap actions.", icon: Zap },
    { title: "Growth Focused", desc: "We provide the data you need to understand your peak hours and maximize your revenue.", icon: BarChart3 }
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-brand-dark relative overflow-hidden">
      <div className="max-w-[1880px] mx-auto px-10 md:px-[10%] lg:px-[12%]">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-black text-[var(--text-primary)] mb-6 tracking-tighter uppercase italic leading-[1.1]">
              Built by Turf <br />
              <span className="text-brand-green">Enthusiasts.</span>
            </h2>
            <p className="text-lg text-[var(--text-secondary)] mb-10 font-medium leading-relaxed">
              We spent months talking to turf owners in Bangladesh to understand their daily struggles. The result? A management system that actually works the way you do.
            </p>
            <div className="space-y-6">
              {values.map((v, i) => (
                <div key={i} className="flex gap-6 items-start group">
                  <div className="w-12 h-12 rounded-xl bg-brand-green/10 flex items-center justify-center border border-brand-green/20 group-hover:bg-brand-green group-hover:text-black transition-all">
                    <v.icon size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-black text-[var(--text-primary)] mb-2 uppercase italic tracking-tight">{v.title}</h4>
                    <p className="text-[var(--text-secondary)] font-medium leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square glass-card !p-0 overflow-hidden relative group">
              <div className="absolute inset-0 bg-brand-green/10 opacity-50 mix-blend-overlay" />
              <div className="absolute inset-x-0 bottom-0 p-12 bg-gradient-to-t from-black to-transparent">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-brand-green/20 border border-brand-green/30 flex items-center justify-center">
                    <Users size={20} className="text-brand-green" />
                  </div>
                  <span className="text-brand-green font-black uppercase text-[10px] tracking-widest">Customer Story</span>
                </div>
                <p className="text-3xl font-black text-[var(--text-primary)] italic tracking-tighter mb-6 leading-none">"Finally, a system that understands my turf business."</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-green/40 border border-brand-green/50" />
                  <div>
                    <p className="text-[var(--text-primary)] font-bold uppercase text-xs tracking-widest">Sifat Ullah</p>
                    <p className="text-[var(--text-secondary)] text-[10px] font-bold uppercase tracking-[0.2em]">Owner, Arena 71</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
