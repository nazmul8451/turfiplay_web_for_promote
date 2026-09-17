import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export const Pricing = () => {
  const plans = [
    {
      name: "স্টার্টার",
      price: "২,৫০০",
      desc: "ডিজিটাল যাত্রা শুরু করতে চান এমন একক টার্ফ মালিকদের জন্য উপযুক্ত।",
      features: ["দৈনিক স্লট ড্যাশবোর্ড", "হোয়াটসঅ্যাপ ইন্টিগ্রেশন", "মৌলিক আয় ট্র্যাকিং", "মোবাইল অ্যাক্সেস"],
      isPopular: false
    },
    {
      name: "প্রফেশনাল",
      price: "৫,০০০",
      desc: "বেশি বুকিং হওয়া বিকাশমান টার্ফ সেন্টারের জন্য।",
      features: ["স্টার্টারের সব ফিচার", "স্বয়ংক্রিয় এসএমএস অ্যালার্ট", "কাস্টমার অ্যানালিটিক্স", "উন্নত রিপোর্টসমূহ", "ডিজিটাল পেমেন্ট সাপোর্ট"],
      isPopular: true
    },
    {
      name: "এন্টারপ্রাইজ",
      price: "কাস্টম",
      desc: "মাল্টি-টার্ফ চেইন এবং বড় স্পোর্টস কমপ্লেক্সের জন্য সম্পূর্ণ সমাধান।",
      features: ["প্রো প্ল্যানের সব ফিচার", "মাল্টি-লোকেশন সাপোর্ট", "ডেডিকেটেড অ্যাকাউন্ট ম্যানেজার", "হোয়াইট-লেবেল অপশন", "কাস্টম ইন্টিগ্রেশন"],
      isPopular: false
    }
  ];

  return (
    <section id="pricing" className="py-16 sm:py-20 lg:py-32 bg-[#FFFFFF] relative overflow-hidden">
      <div className="container-fluid relative">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-3 sm:mb-4 tracking-tight uppercase">
            স্বচ্ছ <span className="font-serif italic text-[#00A859] lowercase font-normal">মূল্য তালিকা।</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto font-medium leading-relaxed">
            আপনার টার্ফের আকার অনুযায়ী সেরা প্ল্যানটি বেছে নিন এবং ব্যবসা বৃদ্ধির সাথে সাথে পরিবর্ধন করুন।
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`glass-card !p-6 sm:!p-8 relative flex flex-col justify-between bg-white border-[#00A859]/20 shadow-sm rounded-2xl sm:rounded-3xl ${plan.isPopular ? 'border-[#00A859] shadow-xl shadow-[#00A859]/10' : ''}`}
            >
              {plan.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#00A859] text-white px-4 py-1 rounded-full text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest shadow-md">
                  সবচেয়ে জনপ্রিয়
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-1.5 uppercase tracking-tight">{plan.name}</h3>
                <p className="text-[11px] sm:text-xs text-slate-500 font-medium mb-4 sm:mb-6">{plan.desc}</p>
                <div className="flex items-baseline gap-1.5 mb-5 sm:mb-6">
                  <span className="text-slate-500 text-xs font-bold uppercase">৳</span>
                  <span className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">{plan.price}</span>
                  <span className="text-slate-500 text-xs font-medium">/মাস</span>
                </div>
                <div className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8">
                  {plan.features.map((f, fi) => (
                    <div key={fi} className="flex items-center gap-2.5 sm:gap-3">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#00A859]/10 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="text-[#00A859]" size={13} />
                      </div>
                      <span className="text-[11px] sm:text-xs font-medium text-slate-700">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
              <button className={`w-full py-3.5 sm:py-4 rounded-full font-extrabold uppercase tracking-wider text-xs transition-all cursor-pointer ${plan.isPopular ? 'bg-[#00A859] text-white hover:bg-[#008746] shadow-md shadow-[#00A859]/25 hover:scale-[1.01]' : 'bg-slate-100 text-slate-900 hover:bg-slate-200'}`}>
                এখনই শুরু করুন
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
