import React from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';

export const Story = () => {
  return (
    <section id="story" className="py-24 lg:py-48 bg-brand-bg relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-grid" />
      </div>

      <div className="max-w-[1469px] mx-auto px-10 md:px-[10%] lg:px-[12%] relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-4 mb-16 px-6 py-3 rounded-full bg-brand-green/10 border border-brand-green/20">
            <Star className="text-brand-green animate-pulse" size={16} />
            <span className="text-xs font-black text-brand-green uppercase tracking-[0.4em]">Real Stories, Real Challenges</span>
          </div>

          <h2 className="text-6xl md:text-9xl font-black text-[var(--text-primary)] mb-20 italic leading-none tracking-tighter text-center uppercase">
            The WhatsApp <br /> <span className="text-brand-green">Nightmare.</span>
          </h2>

          <div className="space-y-24 text-2xl md:text-3xl text-[var(--text-secondary)] leading-relaxed font-medium max-w-5xl mx-auto text-center">
            <p className="hover:text-[var(--text-primary)] transition-colors duration-700">
              It’s Friday evening. Your phone is buzzing every 2 minutes. Five different people are asking for the 8 PM slot. You're scrolling through WhatsApp, trying to remember if you already promised it to someone else.
            </p>

            <motion.p
              whileInView={{ scale: [0.98, 1], opacity: [0, 1] }}
              className="text-[var(--text-primary)] text-3xl md:text-5xl font-black tracking-tighter leading-tight italic"
            >
              You write it down in a notebook, but then someone calls to cancel. You forget to cross it out. Another team calls, you tell them it's full. <br />
              <span className="text-[var(--text-secondary)]/20">Later, you realize the slot went empty.</span>
            </motion.p>

            <p className="hover:text-[var(--text-primary)] transition-colors duration-700">
              "Is the slot free?", "Can I get a discount?", "Where is the location?". The endless phone calls never stop. You're a turf owner, not a call center agent.
            </p>


            <p className="text-[var(--text-primary)]/80 font-black text-3xl md:text-4xl leading-tight">
              TurfiPlay was built to end this chaos. No more scrolling through messages. No more endless, distracting calls. Just one dashboard to rule them all.
            </p>

            <p className="text-brand-green font-black text-3xl md:text-6xl tracking-tighter pt-12 animate-pulse-slow">
              RUN YOUR TURF LIKE A PRO.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
