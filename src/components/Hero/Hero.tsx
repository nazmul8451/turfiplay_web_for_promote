import React from 'react';
import { motion } from 'motion/react';
import mockup1 from '../../assets/images/mockup1.jpg';
import mockup2 from '../../assets/images/mockup2.jpg';
import mockup3 from '../../assets/images/mockup3.jpg';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-40 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-brand-bg">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
           animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            rotate: [0, 10, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-brand-green/10 blur-[150px] rounded-full"
        />
        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-green/10 blur-[150px] rounded-full"
        />
      </div>

      <div className="max-w-[1880px] mx-auto px-10 md:px-[18%] lg:px-[10%]">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 lg:gap-40 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="hero-heading mb-12 leading-[1.05] text-6xl md:text-8xl lg:text-[110px] tracking-tighter">
              Run Your Turf <br />
              Without <br />
              <span className="text-brand-green neon-glow">Booking Stress.</span>
            </h1>

            <p className="max-w-2xl text-xl md:text-2xl text-[var(--text-secondary)] mb-12 leading-relaxed font-medium mx-auto lg:mx-0">
              Manage bookings, prevent double slots, track payments, and run your turf professionally — all from one simple app.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-10 mb-16">
              <div className="w-full sm:w-auto px-10 py-6 bg-brand-green/10 border border-brand-green/20 backdrop-blur-xl rounded-3xl flex items-center justify-center gap-5 shadow-[0_0_50px_rgba(0,168,89,0.1)]">
                <span className="flex h-3 w-3 rounded-full bg-brand-green animate-pulse" />
                <span className="text-sm font-black text-brand-green uppercase tracking-[0.4em]">Launching Soon in Bangladesh 🇧🇩</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            {/* App Mockups Container */}
            <div className="relative z-10 flex items-center justify-center py-12">
              {/* Main Phone (Screen 3) */}
              <motion.div
                initial={{ y: 0 }}
                className="relative z-20 w-[260px] md:w-[320px] aspect-[9/19] bg-[#0F172A] rounded-[3.5rem] p-3 shadow-[0_0_100px_rgba(0, 168, 89, 0.1)] border border-white/10"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-[#0F172A] rounded-b-3xl z-50 flex justify-center items-start pt-1">
                  <div className="w-12 h-1 bg-black/40 rounded-full" />
                </div>
                <div className="w-full h-full rounded-[2.8rem] overflow-hidden bg-black">
                  <img src={mockup2} alt="Mockup 2 Dashboard" className="w-full h-full object-cover" />
                </div>
              </motion.div>

              {/* Secondary Phone Left (Screen 1) */}
              <motion.div
                initial={{ rotate: -15, x: 0 }}
                className="absolute top-10 -left-16 md:-left-32 w-[220px] md:w-[280px] aspect-[9/19] bg-[#0F172A] rounded-[3rem] p-2.5 shadow-xl opacity-40 -z-10 overflow-hidden border border-white/5"
              >
                <div className="w-full h-full rounded-[2.4rem] overflow-hidden bg-black">
                  <img src={mockup1} alt="Mockup 1" className="w-full h-full object-cover" />
                </div>
              </motion.div>

              {/* Secondary Phone Right (Screen 2) */}
              <motion.div
                initial={{ rotate: 15, x: 0 }}
                className="absolute top-10 -right-16 md:-right-32 w-[220px] md:w-[280px] aspect-[9/19] bg-[#0F172A] rounded-[3rem] p-2.5 shadow-xl opacity-40 -z-10 overflow-hidden border border-white/5"
              >
                <div className="w-full h-full rounded-[2.4rem] overflow-hidden bg-black">
                  <img src={mockup3} alt="Mockup 3" className="w-full h-full object-cover" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
