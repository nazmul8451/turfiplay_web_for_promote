import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Calendar, Zap, Users } from 'lucide-react';

export const About = () => {
  const values = [
    { title: "কাছের টার্ফসমূহ", desc: "আপনার এলাকায় মানসম্পন্ন স্পোর্টস টার্ফ খুঁজুন। দূরত্ব, রেটিং এবং সুযোগ-সুবিধা দেখে বেছে নিন।", icon: MapPin },
    { title: "লাইভ স্লট বুকিং", desc: "হোমপেজ থেকেই রিয়েল-টাইম স্লট বুকিংয়ের তথ্য দেখুন। কল করার ঝামেলা ছাড়াই ম্যাচ বুক করুন।", icon: Calendar },
    { title: "সহজে পেমেন্ট", desc: "বিকাশ, নগদ বা কার্ডের মাধ্যমে নিরাপদে পেমেন্ট করুন। তাৎক্ষণিক নিশ্চিতকরণ পান।", icon: Zap }
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
              খেলাধুলা বেশি। <br />
              <span className="text-brand-green">চাপ কম।</span>
            </h2>
            <p className="text-lg text-[var(--text-secondary)] mb-10 font-medium leading-relaxed">
              আপনার চারপাশের টার্ফ খুঁজুন, রিয়েল-টাইম স্লট চেক করুন এবং এক মিনিটের কম সময়ে বুকিং সম্পন্ন করুন।
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
                  <span className="text-brand-green font-black uppercase text-[10px] tracking-widest">খেলোয়াড়দের মতামত</span>
                </div>
                <p className="text-3xl font-black text-[var(--text-primary)] italic tracking-tighter mb-6 leading-none">"টার্ফ খুঁজে পাওয়া আর সবার কাছ থেকে টাকা তোলা আগে খুব ঝামেলার ছিল। এখন হোমপেজে কাছের গ্রাউন্ড দেখেই ঝটপট বুক করে ফেলি!"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-green/40 border border-brand-green/50 animate-pulse" />
                  <div>
                    <p className="text-[var(--text-primary)] font-bold uppercase text-xs tracking-widest">নাফিস ফুয়াদ</p>
                    <p className="text-[var(--text-secondary)] text-[10px] font-bold uppercase tracking-[0.2em]">অধিনায়ক, এফসি ফিনিক্স</p>
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
