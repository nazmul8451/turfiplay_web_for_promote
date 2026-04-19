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
    <section id="pricing" className="py-20 lg:py-32 bg-brand-navy relative overflow-hidden">
      <div className="max-w-[1880px] mx-auto px-10 md:px-[10%] lg:px-[12%] relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-[var(--text-primary)] mb-6 tracking-tighter uppercase italic leading-[1.1]">
            Why Modern Owners <br />
            <span className="text-brand-green">Choose TurfiPlay</span>
          </h2>
          <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto font-medium leading-relaxed">
            A side-by-side look at why hundreds of turf owners are leaving manual management behind.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-10 items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`glass-card relative flex flex-col ${plan.isPopular ? 'border-brand-green/40 shadow-[0_0_50px_rgba(0,168,89,0.1)]' : ''}`}
            >
              {plan.isPopular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-brand-green text-black px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest">
                  Most Recommended
                </div>
              )}
              <div className="mb-12">
                <h3 className="text-2xl font-black text-[var(--text-primary)] mb-2 uppercase italic tracking-tighter">{plan.name}</h3>
                <div className="flex items-baseline gap-2 mb-8">
                  <span className="text-[var(--text-secondary)] text-sm font-black uppercase">BDT</span>
                  <span className="text-5xl font-black text-[var(--text-primary)] tracking-tighter italic">{plan.price}</span>
                  <span className="text-[var(--text-secondary)] text-sm font-bold">/mo</span>
                </div>
                <div className="space-y-4 mb-10">
                  {plan.features.map((f, fi) => (
                    <div key={fi} className="flex items-center gap-4 group/item">
                      <div className="w-5 h-5 rounded-full bg-brand-green/10 flex items-center justify-center flex-shrink-0 group-hover/item:bg-brand-green/20 transition-colors">
                        <CheckCircle2 className="text-brand-green" size={12} />
                      </div>
                      <span className="text-sm font-medium text-[var(--text-secondary)] group-hover/item:text-[var(--text-primary)] transition-colors">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
              <button className={`w-full py-6 rounded-2xl font-black uppercase italic tracking-widest transition-all ${plan.isPopular ? 'bg-brand-green text-black hover:scale-[1.02] shadow-[0_0_30px_rgba(0,168,89,0.2)]' : 'bg-white/5 text-[var(--text-primary)] hover:bg-white/10'}`}>
                Get Started Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
