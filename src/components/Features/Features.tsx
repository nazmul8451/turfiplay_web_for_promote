import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Star, LayoutDashboard, Zap, ShieldCheck, MapPin, CreditCard, BarChart3, Bell } from 'lucide-react';
import { ComingSoonModal } from '../Modals/ComingSoonModal';

export const Features = () => {
  const [modalData, setModalData] = useState<{ isOpen: boolean, title: string }>({ isOpen: false, title: '' });

  const features = [
    {
      title: "Smart Dashboard",
      desc: "A centralized command center for your entire turf operation. Real-time slot monitoring, staff management, and quick booking access in one ultra-clean interface.",
      icon: LayoutDashboard,
      delay: 0.1,
      gridClass: "md:col-span-2 md:row-span-2",
      gradient: "from-brand-green/20 via-transparent to-transparent",
      isComingSoon: true
    },
    {
      title: "Real-time Sync",
      desc: "Zero delay. Instant updates across all devices to prevent double bookings.",
      icon: Zap,
      delay: 0.2,
      gridClass: "md:col-span-1 md:row-span-1",
      gradient: "from-blue-500/10 via-transparent to-transparent",
      isComingSoon: true
    },
    {
      title: "Advanced Security",
      desc: "Bank-grade encryption for all your business and customer data.",
      icon: ShieldCheck,
      delay: 0.3,
      gridClass: "md:col-span-1 md:row-span-1",
      gradient: "from-purple-500/10 via-transparent to-transparent",
      isComingSoon: true
    },
    {
      title: "Player Discovery",
      desc: "Connect with the largest community of sports enthusiasts in Bangladesh. Our map integration brings players straight to your door with seamless navigation and slot discovery.",
      icon: MapPin,
      delay: 0.4,
      gridClass: "md:col-span-1 md:row-span-2",
      gradient: "from-orange-500/10 via-transparent to-transparent",
      isComingSoon: true
    },
    {
      title: "Digital Payments",
      desc: "One-tap payments via Bkash, Nagad, and leading banks.",
      icon: CreditCard,
      delay: 0.5,
      gridClass: "md:col-span-1 md:row-span-1",
      gradient: "from-brand-green/10 via-transparent to-transparent",
      isComingSoon: true
    },
    {
      title: "Business Analytics",
      desc: "Visualized data to help you understand peak hours, peak seasons, and revenue growth. Make data-driven decisions that scale your facility's profitability.",
      icon: BarChart3,
      delay: 0.6,
      gridClass: "md:col-span-2 md:row-span-1",
      gradient: "from-brand-green/20 via-transparent to-transparent",
      isComingSoon: true
    },
    {
      title: "Automated Alerts",
      desc: "Smart WhatsApp & SMS notifications for every event.",
      icon: Bell,
      delay: 0.7,
      gridClass: "md:col-span-1 md:row-span-1",
      gradient: "from-yellow-500/10 via-transparent to-transparent",
      isComingSoon: true
    }
  ];

  return (
    <section id="features" className="py-24 lg:py-48 bg-brand-bg relative overflow-hidden">
      <ComingSoonModal
        isOpen={modalData.isOpen}
        onClose={() => setModalData({ ...modalData, isOpen: false })}
        title={modalData.title}
      />

      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-brand-green/5 blur-[250px] rounded-full" />
        <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-brand-green/5 blur-[250px] rounded-full" />
      </div>

      <div className="max-w-[1880px] mx-auto px-10 md:px-[10%] lg:px-[12%]">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-20 lg:mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-4 mb-8 px-4 py-2 rounded-full bg-brand-green/10 border border-brand-green/20">
              <Star className="text-brand-green animate-pulse" size={14} />
              <span className="text-[10px] font-black text-brand-green uppercase tracking-[0.4em]">Feature Ecosystem</span>
            </div>
            <h2 className="text-5xl md:text-8xl font-black text-[var(--text-primary)] tracking-tighter uppercase italic leading-[0.9]">
              Everything <br />
              <span className="text-brand-green neon-glow">to Win.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:text-right max-w-lg"
          >
            <p className="text-lg md:text-xl text-[var(--text-secondary)] font-medium leading-relaxed uppercase tracking-widest">
              Stop surviving in chaos. Start thriving with Bangladesh's most advanced turf management infrastructure.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: feature.delay, duration: 0.5 }}
              onClick={() => feature.isComingSoon && setModalData({ isOpen: true, title: feature.title })}
              className={`glass-card !p-0 group transition-all duration-700 relative overflow-hidden flex flex-col ${feature.gridClass} ${feature.isComingSoon ? 'cursor-pointer' : ''}`}
            >
              {/* Mesh Gradient Effect */}
              <div className={`absolute top-0 right-0 w-2/3 h-2/3 bg-gradient-to-bl ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10`} />
              
              <div className="p-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-8">
                  <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center group-hover:border-brand-green/40 group-hover:scale-110 group-hover:bg-brand-green/5 transition-all duration-500 shadow-xl group-hover:shadow-brand-green/10">
                    <feature.icon className="text-brand-green" size={28} />
                  </div>
                  {feature.isComingSoon && (
                    <div className="text-[9px] font-black text-brand-green/40 uppercase tracking-[0.2em] group-hover:text-brand-green transition-colors">
                      Reserved
                    </div>
                  )}
                </div>

                <div className="mt-auto">
                  <h3 className="text-2xl font-black text-[var(--text-primary)] mb-4 tracking-tighter uppercase italic group-hover:text-brand-green transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-[15px] text-[var(--text-secondary)] font-medium leading-[1.6] group-hover:text-[var(--text-primary)] transition-colors duration-500">
                    {feature.desc}
                  </p>
                </div>

                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-green to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
