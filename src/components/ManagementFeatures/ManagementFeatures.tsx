import React from 'react';
import { motion } from 'motion/react';
import { Smartphone, Zap, CheckCircle2, Star, LayoutDashboard } from 'lucide-react';

export const ManagementFeatures = () => {
  const ownerFeatures = [
    { icon: Smartphone, title: "মোবাইল নম্বর লগইন", desc: "কোনো জটিল পাসওয়ার্ডের ঝামেলা নেই। ওটিপি দিয়েই সহজে লগইন।" },
    { icon: Zap, title: "১০ সেকেন্ডে নতুন বুকিং", desc: "ফোনে কথা বলতে বলতেই চোখের পলকে বুকিং এন্ট্রি করে ফেলুন।" },
    { icon: CheckCircle2, title: "অটো স্লট লকিং", desc: "একবার বুক করা হলে সেই স্লট অন্য কারো জন্য স্বয়ংক্রিয়ভাবে লক হয়ে যাবে।" },
    { icon: Star, title: "কাস্টমার রেকর্ড ট্র্যাকিং", desc: "প্রতিটি বুকিংয়ের সাথে গ্রাহকের নাম ও মোবাইল নম্বর সংরক্ষিত থাকবে।" }
  ];

  const reportFeatures = [
    { icon: LayoutDashboard, title: "দৈনিক আয় রিপোর্ট", desc: "আজকের দিনে কোন স্লট থেকে কত আয় হলো তা এক ক্লিকেই দেখুন।" },
    { icon: Zap, title: "মাসিক প্রবৃদ্ধি রিপোর্ট", desc: "প্রতি মাসের মোট আয়, খরচ ও ব্যবসার আর্থিক প্রবৃদ্ধি পর্যবেক্ষণ করুন।" },
    { icon: Smartphone, title: "পেমেন্ট স্ট্যাটাস ট্র্যাকিং", desc: "ক্যাশ অথবা অনলাইন পেমেন্ট—পেইড বা পেন্ডিং স্ট্যাটাস আপডেট করুন।" },
    { icon: CheckCircle2, title: "স্লট অ্যানালিটিক্স", desc: "কোন দিন ও কোন সময়ে আপনার টার্ফের বুকিং চাহিদা সবচেয়ে বেশি তা জানুন।" }
  ];

  return (
    <section id="management" className="py-20 lg:py-32 bg-[#FFFFFF] relative">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight leading-tight">
            প্রফেশনাল <span className="font-serif italic text-[#00A859] font-normal">ম্যানেজমেন্ট।</span>
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto text-xs sm:text-sm md:text-base font-bold leading-relaxed tracking-wider">
            টার্ফ ব্যবসাকে আধুনিক ও লাভজনক করার প্রয়োজনীয় সকল ডিজিটাল টুলস।
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Booking Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6 sm:p-8 lg:p-10 relative overflow-hidden bg-white border-[#00A859]/20 shadow-sm"
          >
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-8 flex items-center gap-3 sm:gap-4 tracking-tight">
              <div className="w-10 h-10 rounded-xl bg-[#00A859]/10 flex items-center justify-center flex-shrink-0">
                <Smartphone className="text-[#00A859]" size={20} />
              </div>
              বুকিং ওয়ার্কফ্লো
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {ownerFeatures.map((f, i) => (
                <div key={i} className="group">
                  <f.icon className="text-[#00A859]/50 mb-3 group-hover:text-[#00A859] transition-colors" size={24} />
                  <h4 className="text-base font-extrabold text-slate-900 mb-1.5 tracking-tight">{f.title}</h4>
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
            className="glass-card p-6 sm:p-8 lg:p-10 relative overflow-hidden bg-white border-[#00A859]/20 shadow-sm"
          >
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-8 flex items-center gap-3 sm:gap-4 tracking-tight">
              <div className="w-10 h-10 rounded-xl bg-[#00A859]/10 flex items-center justify-center flex-shrink-0">
                <LayoutDashboard className="text-[#00A859]" size={20} />
              </div>
              আয় ও রাজস্ব ট্র্যাকিং
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {reportFeatures.map((f, i) => (
                <div key={i} className="group">
                  <f.icon className="text-[#00A859]/50 mb-3 group-hover:text-[#00A859] transition-colors" size={24} />
                  <h4 className="text-base font-extrabold text-slate-900 mb-1.5 tracking-tight">{f.title}</h4>
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
