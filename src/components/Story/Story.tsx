import React from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';

export const Story = () => {
  return (
    <section id="story" className="py-20 sm:py-28 lg:py-40 bg-brand-bg relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-grid" />
      </div>

      <div className="max-w-[1469px] mx-auto px-4 sm:px-8 md:px-[10%] lg:px-[12%] relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-3 mb-10 sm:mb-16 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-brand-green/10 border border-brand-green/20">
            <Star className="text-brand-green animate-pulse" size={16} />
            <span className="text-[10px] sm:text-xs font-black text-brand-green uppercase tracking-[0.3em] sm:tracking-[0.4em]">সত্যিকারের সমস্যা, সত্যিকারের সমাধান</span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-[var(--text-primary)] mb-12 sm:mb-20 italic leading-tight sm:leading-none tracking-tighter text-center uppercase">
            হোয়াটসঅ্যাপের <br /> <span className="text-brand-green">দুঃস্বপ্ন।</span>
          </h2>

          <div className="space-y-12 sm:space-y-16 md:space-y-24 text-base sm:text-xl md:text-2xl lg:text-3xl text-[var(--text-secondary)] leading-relaxed font-medium max-w-5xl mx-auto text-center">
            <p className="hover:text-[var(--text-primary)] transition-colors duration-700">
              শুক্রবার সন্ধ্যা। প্রতি ২ মিনিটে ফোন বাজছে। পাঁচজন আলাদা মানুষ রাত ৮টার স্লট চাইছে। আপনি হোয়াটসঅ্যাপ স্ক্রল করছেন—কাকে আগে দিয়েছেন সেটা মনেই নেই।
            </p>

            <motion.p
              whileInView={{ scale: [0.98, 1], opacity: [0, 1] }}
              className="text-[var(--text-primary)] text-xl sm:text-3xl md:text-5xl font-black tracking-tighter leading-snug sm:leading-tight italic"
            >
              খাতায় লিখলেন, কিন্তু একজন বাতিল করল। কেটে দিতে ভুলে গেলেন। আরেকজন ফোন দিল, বললেন ভর্তি। <br className="hidden sm:inline" />
              <span className="text-[var(--text-secondary)]/50 sm:text-[var(--text-secondary)]/20">পরে দেখলেন স্লট ফাঁকাই পড়ে আছে।</span>
            </motion.p>

            <p className="hover:text-[var(--text-primary)] transition-colors duration-700">
              "স্লট আছে?", "ডিসকাউন্ট দেবেন?", "ঠিকানাটা আবার বলেন"—এই অন্তহীন কলের ঝামেলা কখন শেষ হবে? আপনি টার্ফ মালিক, কল সেন্টারের এজেন্ট নন।
            </p>

            <p className="text-[var(--text-primary)]/90 font-black text-xl sm:text-3xl md:text-4xl leading-tight">
              TurfPlay তৈরি হয়েছে এই বিশৃঙ্খলার অবসান ঘটাতে। মেসেজ স্ক্রল নয়, বিরামহীন কল নয়—শুধু একটি ড্যাশবোর্ড দিয়েই সব নিয়ন্ত্রণ করুন।
            </p>

            <p className="text-brand-green font-black text-2xl sm:text-4xl md:text-6xl tracking-tighter pt-6 sm:pt-12 animate-pulse-slow">
              এখন থেকে টার্ফ চালান প্রফেশনালের মতো।
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
