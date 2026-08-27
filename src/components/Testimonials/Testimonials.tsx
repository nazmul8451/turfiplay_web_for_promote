import React from 'react';
import { motion } from 'motion/react';
import { MessageSquareQuote } from 'lucide-react';

export const Testimonials = () => {
  const reviews = [
    { name: "রাফাত হাসান", role: "মালিক, পিচ ৫৬", quote: "TurfPlay ব্যবহারের আগে ডাবল-বুকিং নিয়ে খুব দুশ্চিন্তায় থাকতে হতো। এখন সব স্লট অটো লক ও সিঙ্ক থাকে। এটি সত্যিই অসাধারণ।" },
    { name: "ইমতিয়াজ আহমেদ", role: "ম্যানেজার, কিকঅফ অ্যারেনা", quote: "রেভিনিউ রিপোর্টগুলো দারুণ। প্রতিদিনই ব্যবসার উন্নতি দেখতে পাই। এমনকি আমার স্টাফদের জন্যও এটি ব্যবহার করা অত্যন্ত সহজ।" },
    { name: "তানভীর হোসেন", role: "মালিক, গোললাইন টার্ফ", quote: "ওয়েটলিস্ট ইন্টারফেসটি খুবই সহজ। আমার কাস্টমাররা এখন বুকিং প্রসেসটি অত্যন্ত প্রফেশনাল মনে করে।" }
  ];

  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-[#F8FAFC] relative">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight uppercase">
            টার্ফ মালিকদের <span className="font-serif italic text-[#00A859] lowercase font-normal">অভিজ্ঞতা।</span>
          </h2>
          <p className="text-base text-slate-600 max-w-xl mx-auto font-medium leading-relaxed">
            আমাদের টার্ফ ম্যানেজার ও মালিকদের বাস্তব মতামত।
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card flex flex-col justify-between bg-white border-[#00A859]/20 shadow-sm"
            >
              <div>
                <MessageSquareQuote className="text-[#00A859]/20 mb-6" size={36} />
                <p className="text-sm text-slate-800 italic leading-relaxed mb-6 font-serif">
                  "{t.quote}"
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#00A859]/10 border border-[#00A859]/30 flex items-center justify-center font-extrabold text-[#00A859]">
                  {t.name[0]}
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-900 text-sm uppercase mb-0.5">{t.name}</h4>
                  <p className="text-[10px] text-[#00A859] font-extrabold uppercase tracking-wider">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
