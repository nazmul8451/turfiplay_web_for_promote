import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Star, LayoutDashboard, Zap, ShieldCheck, MapPin, CreditCard, BarChart3, Bell } from 'lucide-react';
import { ComingSoonModal } from '../Modals/ComingSoonModal';

export const Features = () => {
  const [modalData, setModalData] = useState<{ isOpen: boolean; title: string }>({ isOpen: false, title: '' });

  const features = [
    {
      title: "স্মার্ট ড্যাশবোর্ড",
      desc: "আপনার সম্পূর্ণ টার্ফ অপারেশনের কেন্দ্রীয় পয়েন্ট। রিয়েল-টাইম স্লট মনিটরিং, স্টাফ ম্যানেজমেন্ট ও দ্রুত বুকিং এক পরিষ্কার ইন্টারফেসে।",
      icon: LayoutDashboard,
      delay: 0.1,
      gridClass: "md:col-span-2 md:row-span-2",
      gradient: "from-[#00A859]/15 via-transparent to-transparent",
      isComingSoon: true
    },
    {
      title: "রিয়েল-টাইম সিঙ্ক",
      desc: "কোনো বিলম্ব ছাড়াই সব ডিভাইসে তাৎক্ষণিক আপডেট যা ডাবল-বুকিং সম্পূর্ণ প্রতিরোধ করে।",
      icon: Zap,
      delay: 0.2,
      gridClass: "md:col-span-1 md:row-span-1",
      gradient: "from-[#00A859]/10 via-transparent to-transparent",
      isComingSoon: true
    },
    {
      title: "উন্নত নিরাপত্তা",
      desc: "আপনার ব্যবসা ও গ্রাহকের তথ্যের জন্য সর্বোচ্চ সিকিউরিটি অ্যান্ড এনক্রিপশন।",
      icon: ShieldCheck,
      delay: 0.3,
      gridClass: "md:col-span-1 md:row-span-1",
      gradient: "from-[#00A859]/10 via-transparent to-transparent",
      isComingSoon: true
    },
    {
      title: "খেলোয়াড় কানেক্ট",
      desc: "আপনার এলাকার ক্রীড়াপ্রেমীদের বিশাল কমিউনিটির সাথে যুক্ত হন। ম্যাপ ইন্টিগ্রেশনের মাধ্যমে খেলোয়াড়রা সরাসরি আপনার টার্ফ খুঁজে পাবে।",
      icon: MapPin,
      delay: 0.4,
      gridClass: "md:col-span-1 md:row-span-2",
      gradient: "from-[#00A859]/10 via-transparent to-transparent",
      isComingSoon: true
    },
    {
      title: "ডিজিটাল পেমেন্ট",
      desc: "বিকাশ, নগদ এবং ব্যাংক কার্ডের মাধ্যমে এক ট্যাপে সহজে পেমেন্ট গ্রহণ।",
      icon: CreditCard,
      delay: 0.5,
      gridClass: "md:col-span-1 md:row-span-1",
      gradient: "from-[#00A859]/10 via-transparent to-transparent",
      isComingSoon: true
    },
    {
      title: "বিজনেস অ্যানালিটিক্স",
      desc: "পিক আওয়ার, সেরা সিজন এবং আয়ের গ্রাফ দেখে ডাটা-ভিত্তিক সিদ্ধান্ত নিয়ে লাভ বাড়ান।",
      icon: BarChart3,
      delay: 0.6,
      gridClass: "md:col-span-2 md:row-span-1",
      gradient: "from-[#00A859]/15 via-transparent to-transparent",
      isComingSoon: true
    },
    {
      title: "স্বয়ংক্রিয় অ্যালার্ট",
      desc: "প্রতিটি বুকিং ও আপডেট জানতে সরাসরি হোয়াটসঅ্যাপ ও এসএমএস নোটিফিকেশন।",
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
              <span className="text-xs font-extrabold text-[#00A859] uppercase tracking-[0.2em]">ফিচার ইকোসিস্টেম</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight uppercase leading-[0.95]">
              ব্যবসায় সফল হতে <br />
              <span className="font-serif italic text-[#00A859] font-normal">প্রয়োজনীয় সবকিছু।</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:text-right max-w-md"
          >
            <p className="text-base text-slate-600 font-medium leading-relaxed">
              ঝামেলা এড়িয়ে বাংলাদেশের সবচেয়ে আধুনিক টার্ফ ম্যানেজমেন্ট সিস্টেমের মাধ্যমে আপনার ব্যবসা বাড়িয়ে তুলুন।
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
                      শীঘ্রই আসছে
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
