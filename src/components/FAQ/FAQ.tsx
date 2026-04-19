import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight } from 'lucide-react';

export const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const faqs = [
    { q: "How long does it take to get started?", a: "Most turfs are up and running within 24 hours. Our team helps you set up your slots and pricing structure during onboarding." },
    { q: "Can I manage multiple turfs at once?", a: "Yes, our Enterprise plan is designed specifically for owners with multiple locations, giving you a centralized dashboard for all your properties." },
    { q: "Do you offer customer support?", a: "Absolutely. Professional and Enterprise clients get 24/7 dedicated support via WhatsApp and phone." },
    { q: "Is there a contract I have to sign?", a: "Our monthly plans are flexible, and you can cancel anytime. Year-long commitments come with significant discounts." }
  ];

  return (
    <section id="faq" className="py-20 lg:py-32 bg-brand-bg">
      <div className="max-w-[1100px] mx-auto px-10">
        <h2 className="text-3xl md:text-5xl font-black text-[var(--text-primary)] mb-12 tracking-tighter text-center uppercase italic">QUESTIONS <span className="text-brand-green">?</span></h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="glass-card !p-0 overflow-hidden border-white/5">
              <button
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                className="w-full py-8 px-10 flex items-center justify-between text-left group"
              >
                <span className="text-xl font-black text-[var(--text-primary)] uppercase italic tracking-tight group-hover:text-brand-green transition-colors">{faq.q}</span>
                <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-500 ${activeIndex === i ? 'border-brand-green bg-brand-green text-black rotate-90' : 'border-[var(--border-color)] text-[var(--text-secondary)]'}`}>
                  <ChevronRight size={18} />
                </div>
              </button>
              <AnimatePresence>
                {activeIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-10 pb-10">
                      <p className="text-lg text-[var(--text-secondary)] font-medium leading-relaxed border-l-4 border-brand-green/30 pl-6">
                        {faq.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
