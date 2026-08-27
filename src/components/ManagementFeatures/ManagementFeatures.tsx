import React from 'react';
import { motion } from 'motion/react';
import { Smartphone, Zap, CheckCircle2, Star, LayoutDashboard } from 'lucide-react';

export const ManagementFeatures = () => {
  const ownerFeatures = [
    { icon: Smartphone, title: "মোবাইল লগইন", desc: "মোবাইল নম্বর দিয়ে সহজেই লগইন করুন। পাসওয়ার্ডের ঝামেলা নেই।" },
    { icon: Zap, title: "১০ সেকেন্ডে বুকিং যোগ", desc: "কয়েক সেকেন্ডের মধ্যেই নতুন বুকিং এন্ট্রি দিন। এটি এতটাই দ্রুত।" },
    { icon: CheckCircle2, title: "অটো স্লট লক", desc: "বুকিং যোগ হওয়া মাত্র স্লটটি স্বয়ংক্রিয়ভাবে লক হয়ে যাবে।" },
    { icon: Star, title: "কাস্টমার ট্র্যাকিং", desc: "প্রতিটি বুকিংয়ে গ্রাহকের নাম ও মোবাইল নম্বর সহজে সংরক্ষণ করুন।" }
  ];

  const reportFeatures = [
    { icon: LayoutDashboard, title: "দৈনিক রিপোর্ট", desc: "আজকে কত আয় হলো তা এক ক্লিকেই দেখে নিন।" },
    { icon: Zap, title: "মাসিক রিপোর্ট", desc: "মাসিক আয় এবং প্রবৃদ্ধির ধারা সহজে ট্রাক করুন।" },
    { icon: Smartphone, title: "পেমেন্ট স্ট্যাটাস", desc: "এক ট্যাপে পেমেন্ট পেইড বা পেন্ডিং হিসেবে চিহ্নিত করুন।" },
    { icon: CheckCircle2, title: "স্লট অ্যানালিটিক্স", desc: "জানুন কোন স্লটগুলো আপনার গ্রাহকদের কাছে সবচেয়ে জনপ্রিয়।" }
  ];

  return (
    <section id="management" className="py-20 lg:py-32 bg-[#FFFFFF] relative">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight uppercase">
            প্রফেশনাল <span className="font-serif italic text-[#00A859] lowercase font-normal">ম্যানেজমেন্ট।</span>
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto text-sm md:text-base font-bold leading-relaxed uppercase tracking-[0.2em]">আপনার টার্ফ ব্যবসাকে এগিয়ে নিতে প্রয়োজনীয় সবকিছু।</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Booking Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 lg:p-10 relative overflow-hidden bg-white border-[#00A859]/20 shadow-sm"
          >
            <h3 className="text-2xl font-extrabold text-slate-900 mb-8 flex items-center gap-4 uppercase tracking-tight">
              <div className="w-10 h-10 rounded-xl bg-[#00A859]/10 flex items-center justify-center">
                <Smartphone className="text-[#00A859]" size={20} />
              </div>
              বুকিং ওয়ার্কফ্লো
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {ownerFeatures.map((f, i) => (
                <div key={i} className="group">
                  <f.icon className="text-[#00A859]/50 mb-3 group-hover:text-[#00A859] transition-colors" size={24} />
                  <h4 className="text-base font-extrabold text-slate-900 mb-1.5 tracking-tight uppercase">{f.title}</h4>
                  <p className="text-slate-600 text-xs leading-relaxed font-medium">{f.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Reports Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 lg:p-10 relative overflow-hidden bg-white border-[#00A859]/20 shadow-sm"
          >
            <h3 className="text-2xl font-extrabold text-slate-900 mb-8 flex items-center gap-4 uppercase tracking-tight">
              <div className="w-10 h-10 rounded-xl bg-[#00A859]/10 flex items-center justify-center">
                <LayoutDashboard className="text-[#00A859]" size={20} />
              </div>
              রেভিনিউ ট্র্যাকিং
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {reportFeatures.map((f, i) => (
                <div key={i} className="group">
                  <f.icon className="text-[#00A859]/50 mb-3 group-hover:text-[#00A859] transition-colors" size={24} />
                  <h4 className="text-base font-extrabold text-slate-900 mb-1.5 tracking-tight uppercase">{f.title}</h4>
                  <p className="text-slate-600 text-xs leading-relaxed font-medium">{f.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
