import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Star, LayoutDashboard, Zap, ShieldCheck, MapPin, CreditCard, BarChart3, Bell } from 'lucide-react';
import { ComingSoonModal } from '../Modals/ComingSoonModal';

export const Features = () => {
  const [modalData, setModalData] = useState<{ isOpen: boolean; title: string }>({ isOpen: false, title: '' });

  const features = [
    {
      title: "Smart Dashboard",
      desc: "A centralized command center for your entire turf operation. Real-time slot monitoring, staff management, and quick booking access in one ultra-clean interface.",
      icon: LayoutDashboard,
      delay: 0.1,
      gridClass: "md:col-span-2 md:row-span-2",
      gradient: "from-[#00A859]/15 via-transparent to-transparent",
      isComingSoon: true
    },
    {
      title: "Real-time Sync",
      desc: "Zero delay. Instant updates across all devices to prevent double bookings.",
      icon: Zap,
      delay: 0.2,
      gridClass: "md:col-span-1 md:row-span-1",
      gradient: "from-[#00A859]/10 via-transparent to-transparent",
      isComingSoon: true
    },
    {
      title: "Advanced Security",
      desc: "Bank-grade encryption for all your business and customer data.",
      icon: ShieldCheck,
      delay: 0.3,
      gridClass: "md:col-span-1 md:row-span-1",
      gradient: "from-[#00A859]/10 via-transparent to-transparent",
      isComingSoon: true
    },
    {
      title: "Player Discovery",
      desc: "Connect with the largest community of sports enthusiasts in your area. Our map integration brings players straight to your door with seamless navigation and slot discovery.",
      icon: MapPin,
      delay: 0.4,
      gridClass: "md:col-span-1 md:row-span-2",
      gradient: "from-[#00A859]/10 via-transparent to-transparent",
      isComingSoon: true
    },
    {
      title: "Digital Payments",
      desc: "One-tap payments via Bkash, Nagad, and leading banks.",
      icon: CreditCard,
      delay: 0.5,
      gridClass: "md:col-span-1 md:row-span-1",
      gradient: "from-[#00A859]/10 via-transparent to-transparent",
      isComingSoon: true
    },
    {
      title: "Business Analytics",
      desc: "Visualized data to help you understand peak hours, peak seasons, and revenue growth. Make data-driven decisions that scale your facility's profitability.",
      icon: BarChart3,
      delay: 0.6,
      gridClass: "md:col-span-2 md:row-span-1",
      gradient: "from-[#00A859]/15 via-transparent to-transparent",
      isComingSoon: true
    },
    {
      title: "Automated Alerts",
      desc: "Smart WhatsApp & SMS notifications for every event.",
      icon: Bell,
      delay: 0.7,
      gridClass: "md:col-span-1 md:row-span-1",
      gradient: "from-[#00A859]/10 via-transparent to-transparent",
      isComingSoon: true
    }
  ];

  return (
    <section id="features" className="py-20 lg:py-32 bg-[#F8FAFC] relative overflow-hidden">
      <ComingSoonModal
        isOpen={modalData.isOpen}
        onClose={() => setModalData({ ...modalData, isOpen: false })}
        title={modalData.title}
      />

      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full bg-[#00A859]/10 border border-[#00A859]/20">
              <Star className="text-[#00A859] animate-pulse" size={14} />
              <span className="text-xs font-extrabold text-[#00A859] uppercase tracking-[0.2em]">Feature Ecosystem</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight uppercase leading-[0.95]">
              Everything <br />
              <span className="font-serif italic text-[#00A859] lowercase font-normal">to win.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:text-right max-w-md"
          >
            <p className="text-base text-slate-600 font-medium leading-relaxed">
              Stop surviving in chaos. Start thriving with Bangladesh's most advanced turf management infrastructure.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: feature.delay, duration: 0.5 }}
              onClick={() => feature.isComingSoon && setModalData({ isOpen: true, title: feature.title })}
              className={`glass-card !p-0 group transition-all duration-500 relative overflow-hidden flex flex-col bg-white border-[#00A859]/18 shadow-sm hover:shadow-lg hover:border-[#00A859]/40 ${feature.gridClass} ${feature.isComingSoon ? 'cursor-pointer' : ''}`}
            >
              <div className={`absolute top-0 right-0 w-2/3 h-2/3 bg-gradient-to-bl ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10`} />
              
              <div className="p-8 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-14 h-14 bg-[#00A859]/10 border border-[#00A859]/20 rounded-2xl flex items-center justify-center group-hover:border-[#00A859] group-hover:bg-[#00A859] group-hover:text-white transition-all duration-300 shadow-sm">
                    <feature.icon className="text-[#00A859] group-hover:text-white transition-colors" size={24} />
                  </div>
                  {feature.isComingSoon && (
                    <div className="text-[10px] font-extrabold text-[#00A859] uppercase tracking-wider bg-[#00A859]/10 px-3 py-1 rounded-full border border-[#00A859]/20">
                      Coming Soon
                    </div>
                  )}
                </div>

                <div className="mt-auto">
                  <h3 className="text-xl font-extrabold text-slate-900 mb-2 uppercase tracking-tight group-hover:text-[#00A859] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
