import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight } from 'lucide-react';

export const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const faqs = [
    { q: "শুরু করতে কতদিন সময় লাগবে?", a: "বেশিরভাগ টার্ফ মাত্র ২৪ ঘণ্টার মধ্যে লাইভ হয়ে যায়। আমাদের টিম অনবোর্ডিংয়ের সময় আপনার স্লট ও মূল্য তালিকা সেটআপে সাহায্য করবে।" },
    { q: "একাধিক টার্ফ কি একসাথে পরিচালনা করা যাবে?", a: "হ্যাঁ, আমাদের এন্টারপ্রাইজ প্ল্যান একাধিক লোকেশনের টার্ফ মালিকদের জন্য বিশেষভাবে ডিজাইন করা হয়েছে। একটি কেন্দ্রীয় ড্যাশবোর্ড থেকে সব কিছু নিয়ন্ত্রণ করুন।" },
    { q: "কাস্টমার সাপোর্ট কীভাবে পাওয়া যাবে?", a: "অবশ্যই। প্রফেশনাল ও এন্টারপ্রাইজ ক্লায়েন্টরা হোয়াটসঅ্যাপ ও ফোনে ২৪/৭ ডেডিকেটেড সাপোর্ট পাবেন।" },
    { q: "কোনো দীর্ঘমেয়াদী চুক্তি করতে হবে কি?", a: "না, আমাদের মাসিক প্ল্যান সম্পূর্ণ ফ্লেক্সিবল এবং যেকোনো সময় বাতিল করা যাবে। তবে বার্ষিক সাবস্ক্রিপশনে আকর্ষণীয় ছাড় পাওয়া যায়।" }
  ];

  return (
    <section id="faq" className="py-20 lg:py-32 bg-brand-bg">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 md:px-10">
        <h2 className="text-3xl md:text-5xl font-black text-[var(--text-primary)] mb-10 md:mb-12 tracking-tighter text-center leading-tight">
          সাধারণ জিজ্ঞাসা <span className="text-brand-green">?</span>
        </h2>
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="glass-card !p-0 overflow-hidden border-white/5">
              <button
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                className="w-full py-5 sm:py-7 px-5 sm:px-8 flex items-center justify-between text-left group gap-4"
              >
                <span className="text-sm sm:text-lg md:text-xl font-black text-[var(--text-primary)] tracking-tight group-hover:text-brand-green transition-colors leading-snug">
                  {faq.q}
                </span>
                <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full border flex-shrink-0 flex items-center justify-center transition-all duration-500 ${activeIndex === i ? 'border-brand-green bg-brand-green text-black rotate-90' : 'border-[var(--border-color)] text-[var(--text-secondary)]'}`}>
                  <ChevronRight size={16} />
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
                    <div className="px-5 sm:px-8 pb-6 sm:pb-8">
                      <p className="text-xs sm:text-base md:text-lg text-[var(--text-secondary)] font-medium leading-relaxed border-l-2 sm:border-l-4 border-brand-green/30 pl-4 sm:pl-6">
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
