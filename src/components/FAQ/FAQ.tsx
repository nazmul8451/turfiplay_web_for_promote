import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight } from 'lucide-react';

export const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const faqs = [
    { q: "চালু করতে কত সময় লাগে?", a: "অধিকাংশ টার্ফ ২৪ ঘণ্টার মধ্যেই চালু হয়ে যায়। আমাদের টিম শুরুতেই আপনার স্লট এবং প্রাইসিং সেটআপ করতে সাহায্য করবে।" },
    { q: "আমি কি একসাথে একাধিক টার্ফ পরিচালনা করতে পারবো?", a: "হ্যাঁ, একাধিক লোকেশনের টার্ফ মালিকদের জন্য আমাদের এন্টারপ্রাইজ প্ল্যানে রয়েছে সেন্ট্রালাইজড ড্যাশবোর্ড।" },
    { q: "আপনাদের কি কাস্টমার সাপোর্ট আছে?", a: "অবশ্যই। প্রফেশনাল ও এন্টারপ্রাইজ ক্লায়েন্টরা ২৪/৭ হোয়াটসঅ্যাপ এবং ফোনে ডেডিকেটেড সাপোর্ট পাবেন।" },
    { q: "কোনো দীর্ঘমেয়াদী চুক্তি করতে হবে কি?", a: "আমাদের মাসিক প্ল্যানগুলো একদম ফ্লেক্সিবল, আপনি যেকোনো সময় বাতিল করতে পারেন। বার্ষিক সাবস্ক্রিপশনে বিশেষ ডিসকাউন্ট রয়েছে।" }
  ];

  return (
    <section id="faq" className="py-20 lg:py-32 bg-brand-bg">
      <div className="max-w-[1100px] mx-auto px-10">
        <h2 className="text-3xl md:text-5xl font-black text-[var(--text-primary)] mb-12 tracking-tighter text-center uppercase italic">সাধারণ <span className="text-brand-green">জিজ্ঞাসাসমূহ ?</span></h2>
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
