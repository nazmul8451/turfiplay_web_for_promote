import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "2,500",
      desc: "Perfect for single turf owners starting their digital journey.",
      features: ["Daily Slot Dashboard", "WhatsApp Integration", "Basic Revenue Tracking", "Mobile-First Access"],
      isPopular: false
    },
    {
      name: "Professional",
      price: "5,000",
      desc: "For growing facilities with high booking volumes.",
      features: ["Everything in Starter", "Automated SMS Alerts", "Customer Analytics", "Advanced Reports", "Digital Payment Integration"],
      isPopular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      desc: "Full-scale solution for multi-turf chains and sports complexes.",
      features: ["All Pro Features", "Multi-Location Support", "Dedicated Account Manager", "White-label Option", "Custom Integrations"],
      isPopular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 lg:py-32 bg-[#FFFFFF] relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight uppercase">
            Transparent <span className="font-serif italic text-[#00A859] lowercase font-normal">pricing.</span>
          </h2>
          <p className="text-base text-slate-600 max-w-xl mx-auto font-medium leading-relaxed">
            Choose the plan that fits your facility's scale and scale seamlessly as your bookings grow.
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
                  Most Recommended
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-xl font-extrabold text-slate-900 mb-2 uppercase tracking-tight">{plan.name}</h3>
                <p className="text-xs text-slate-500 font-medium mb-6">{plan.desc}</p>
                <div className="flex items-baseline gap-1.5 mb-6">
                  <span className="text-slate-500 text-xs font-bold uppercase">BDT</span>
                  <span className="text-4xl font-black text-slate-900 tracking-tight">{plan.price}</span>
                  <span className="text-slate-500 text-xs font-medium">/mo</span>
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
              <button className={`w-full py-4 rounded-full font-extrabold uppercase tracking-wider text-xs transition-all ${plan.isPopular ? 'bg-[#00A859] text-white hover:bg-[#008746] shadow-md shadow-[#00A859]/25' : 'bg-slate-100 text-slate-900 hover:bg-slate-200'}`}>
                Get Started Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
