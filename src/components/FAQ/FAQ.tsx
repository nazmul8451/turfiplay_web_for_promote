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
    <section id="faq" className="py-16 sm:py-20 lg:py-32 bg-white">
      <div className="container-narrow">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-8 sm:mb-12 tracking-tight text-center uppercase italic">
          সাধারণ <span className="text-[#00A859]">জিজ্ঞাসাসমূহ ?</span>
        </h2>
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="glass-card !p-0 overflow-hidden border border-slate-200 bg-white shadow-sm rounded-2xl">
              <button
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                className="w-full py-4 px-4 sm:py-6 sm:px-8 flex items-center justify-between text-left group cursor-pointer gap-4"
              >
                <span className="text-sm sm:text-lg md:text-xl font-black text-slate-900 uppercase italic tracking-tight group-hover:text-[#00A859] transition-colors leading-snug">
                  {faq.q}
                </span>
                <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${activeIndex === i ? 'border-[#00A859] bg-[#00A859] text-white rotate-90' : 'border-slate-200 text-slate-500'}`}>
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
                    <div className="px-4 pb-5 sm:px-8 sm:pb-8">
                      <p className="text-xs sm:text-base text-slate-600 font-medium leading-relaxed border-l-3 sm:border-l-4 border-[#00A859]/30 pl-4 sm:pl-6">
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
