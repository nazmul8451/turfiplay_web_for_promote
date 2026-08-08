import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export const Pricing = () => {
  const plans = [
    {
      name: "স্টার্টার",
      price: "২,৫০০",
      desc: "যারা সবে ডিজিটাল ম্যানেজমেন্ট শুরু করতে চান, তাদের জন্য আদর্শ।",
      features: ["দৈনিক স্লট ড্যাশবোর্ড", "হোয়াটসঅ্যাপ ইন্টিগ্রেশন", "বেসিক আয়ের রিপোর্ট", "মোবাইল-ফার্স্ট অ্যাক্সেস"],
      isPopular: false
    },
    {
      name: "প্রফেশনাল",
      price: "৫,০০০",
      desc: "বেশি বুকিং ও দ্রুত বর্ধমান টার্ফ ব্যবসার জন্য সেরা সমাধান।",
      features: ["স্টার্টারের সব সুবিধা", "অটো SMS অ্যালার্ট", "কাস্টমার অ্যানালিটিক্স", "অ্যাডভান্সড রিপোর্ট", "ডিজিটাল পেমেন্ট ইন্টিগ্রেশন"],
      isPopular: true
    },
    {
      name: "এন্টারপ্রাইজ",
      price: "কাস্টম",
      desc: "একাধিক টার্ফ বা স্পোর্টস কমপ্লেক্স পরিচালনার জন্য পূর্ণাঙ্গ প্যাকেজ।",
      features: ["প্রো-র সব সুবিধা", "মাল্টি-লোকেশন সাপোর্ট", "ডেডিকেটেড অ্যাকাউন্ট ম্যানেজার", "হোয়াইট-লেবেল অপশন", "কাস্টম ইন্টিগ্রেশন"],
      isPopular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 lg:py-32 bg-[#FFFFFF] relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight leading-tight">
            পরিষ্কার ও সহজ <span className="font-serif italic text-[#00A859] font-normal">প্রাইসিং।</span>
          </h2>
          <p className="text-xs sm:text-base text-slate-600 max-w-xl mx-auto font-medium leading-relaxed">
            আপনার টার্ফের আকার ও চাহিদা অনুযায়ী সঠিক প্ল্যানটি বেছে নিন।
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`glass-card relative flex flex-col bg-white border-[#00A859]/20 shadow-sm ${plan.isPopular ? 'border-[#00A859] shadow-xl shadow-[#00A859]/10' : ''}`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#00A859] text-white px-5 py-1.5 rounded-full text-[10px] font-extrabold uppercase tracking-widest shadow-md">
                  সবচেয়ে জনপ্রিয়
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-xl font-extrabold text-slate-900 mb-2 tracking-tight">{plan.name}</h3>
                <p className="text-xs text-slate-500 font-medium mb-6">{plan.desc}</p>
                <div className="flex items-baseline gap-1.5 mb-6">
                  <span className="text-slate-500 text-xs font-bold uppercase">BDT</span>
                  <span className="text-4xl font-black text-slate-900 tracking-tight">{plan.price}</span>
                  <span className="text-slate-500 text-xs font-medium">/মাস</span>
                </div>
                <div className="space-y-3 mb-8">
                  {plan.features.map((f, fi) => (
                    <div key={fi} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#00A859]/10 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="text-[#00A859]" size={14} />
                      </div>
                      <span className="text-xs font-medium text-slate-700">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
              <button className={`w-full py-4 rounded-full font-extrabold tracking-wider text-xs transition-all ${plan.isPopular ? 'bg-[#00A859] text-white hover:bg-[#008746] shadow-md shadow-[#00A859]/25' : 'bg-slate-100 text-slate-900 hover:bg-slate-200'}`}>
                এখনই শুরু করুন
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
