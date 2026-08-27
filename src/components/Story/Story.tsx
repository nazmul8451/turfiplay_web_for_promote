import React from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';

export const Story = () => {
  return (
    <section id="story" className="py-24 lg:py-48 bg-brand-bg relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-grid" />
      </div>

      <div className="max-w-[1469px] mx-auto px-10 md:px-[10%] lg:px-[12%] relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-4 mb-16 px-6 py-3 rounded-full bg-brand-green/10 border border-brand-green/20">
            <Star className="text-brand-green animate-pulse" size={16} />
            <span className="text-xs font-black text-brand-green uppercase tracking-[0.4em]">বাস্তব গল্প, বাস্তব চ্যালেঞ্জ</span>
          </div>

          <h2 className="text-5xl md:text-8xl font-black text-[var(--text-primary)] mb-20 italic leading-none tracking-tighter text-center uppercase">
            হোয়াটসঅ্যাপের <br /> <span className="text-brand-green">ঝামেলা।</span>
          </h2>

          <div className="space-y-24 text-xl md:text-2xl text-[var(--text-secondary)] leading-relaxed font-medium max-w-5xl mx-auto text-center">
            <p className="hover:text-[var(--text-primary)] transition-colors duration-700">
              শুক্রবার সন্ধ্যা। প্রতি ২ মিনিটে আপনার ফোন বেজে উঠছে। ৫ জন আলাদা মানুষ রাত ৮টার স্লট চাইছে। আপনি হোয়াটসঅ্যাপ স্ক্রোল করছেন আর চিন্তা করছেন কাউকে কি আগেই বুকিং দেওয়া হয়েছিল?
            </p>

            <motion.p
              whileInView={{ scale: [0.98, 1], opacity: [0, 1] }}
              className="text-[var(--text-primary)] text-2xl md:text-4xl font-black tracking-tighter leading-tight italic"
            >
              আপনি খাতায় লিখে রেখেছেন, কিন্তু পরে কেউ কল করে বুকিং বাতিল করলো। আপনি কাটতে ভুলে গেলেন। অন্য একটি দল কল করলে বললেন বুকড। <br />
              <span className="text-[var(--text-secondary)]/30">পরে দেখলেন স্লটটি খালিই পড়ে রইলো!</span>
            </motion.p>

            <p className="hover:text-[var(--text-primary)] transition-colors duration-700">
              "স্লট কি খালি আছে?", "ডিসকাউন্ট দেওয়া যাবে?", "লোকেশন কোথায়?"—এই অগণিত কলের কোনো শেষ নেই। আপনি একজন টার্ফ মালিক, কল সেন্টার এজেন্ট নন!
            </p>

            <p className="text-[var(--text-primary)]/80 font-black text-2xl md:text-3xl leading-tight">
              এই বিশৃঙ্খলা দূর করতেই TurfPlay-এর জন্ম। মেসেজ স্ক্রোল করার দিন শেষ, অনবরত কল ধরারও দরকার নেই। একটিমাত্র ড্যাশবোর্ডেই নিয়ন্ত্রণ করুন সবকিছু।
            </p>

            <p className="text-brand-green font-black text-2xl md:text-5xl tracking-tighter pt-12 animate-pulse-slow">
              প্রফেশনালের মতো পরিচালনা করুন আপনার টার্ফ।
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
