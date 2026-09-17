import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, Send, CheckCircle2 } from 'lucide-react';

export const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormState({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-32 bg-brand-bg relative overflow-hidden">
      <div className="container-fluid">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-900 mb-4 sm:mb-6 tracking-tight uppercase italic leading-tight">
              যোগাযোগ <span className="text-[#00A859]">করুন।</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mb-8 sm:mb-10 font-medium leading-relaxed tracking-wide">
              আপনার কোনো প্রশ্ন থাকলে বা টার্ফ পরিচালনায় পরিবর্তন আনতে চাইলে আমাদের সাথে নির্দ্বিধায় যোগাযোগ করুন।
            </p>

            <div className="space-y-6 sm:space-y-8">
              <div className="flex gap-4 sm:gap-6 items-center group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shrink-0 group-hover:border-[#00A859]/50 transition-all shadow-sm">
                  <Mail className="text-[#00A859]" size={20} />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-0.5">ইমেইল করুন</p>
                  <p className="text-base sm:text-xl font-black text-slate-900 tracking-tight break-all">rimon124567@gmail.com</p>
                </div>
              </div>
              <div className="flex gap-4 sm:gap-6 items-center group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shrink-0 group-hover:border-[#00A859]/50 transition-all shadow-sm">
                  <Phone className="text-[#00A859]" size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-0.5">সাপোর্ট নম্বর</p>
                  <p className="text-lg sm:text-2xl font-black text-slate-900 tracking-tight">+880 1712-XXXXXX</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card !p-6 sm:!p-10 relative bg-white border border-slate-200 shadow-lg rounded-2xl sm:rounded-3xl"
          >
            {!isSuccess ? (
              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                <div className="space-y-4">
                  <div className="relative">
                    <input
                      required
                      type="text"
                      placeholder="আপনার পূর্ণ নাম"
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3.5 px-4 sm:py-4 sm:px-6 text-slate-900 focus:outline-none focus:border-[#00A859] placeholder:text-slate-400 font-semibold transition-all text-sm"
                      value={formState.name}
                      onChange={e => setFormState({ ...formState, name: e.target.value })}
                    />
                  </div>
                  <div className="relative">
                    <input
                      required
                      type="email"
                      placeholder="ইমেইল অ্যাড্রেস"
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3.5 px-4 sm:py-4 sm:px-6 text-slate-900 focus:outline-none focus:border-[#00A859] placeholder:text-slate-400 font-semibold transition-all text-sm"
                      value={formState.email}
                      onChange={e => setFormState({ ...formState, email: e.target.value })}
                    />
                  </div>
                  <div className="relative">
                    <textarea
                      required
                      rows={4}
                      placeholder="আপনার বার্তা লিখুন..."
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3.5 px-4 sm:py-4 sm:px-6 text-slate-900 focus:outline-none focus:border-[#00A859] placeholder:text-slate-400 font-semibold transition-all resize-none text-sm"
                      value={formState.message}
                      onChange={e => setFormState({ ...formState, message: e.target.value })}
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 sm:py-5 bg-[#00A859] hover:bg-[#008746] text-white font-black rounded-2xl uppercase tracking-wider text-sm sm:text-base shadow-lg shadow-[#00A859]/25 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-3 cursor-pointer"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-3 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>বার্তা পাঠান</span>
                      <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-10 sm:py-16 text-center"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#00A859]/15 rounded-full flex items-center justify-center mx-auto mb-6 border border-[#00A859]/30">
                  <CheckCircle2 size={36} className="text-[#00A859]" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3 uppercase">বার্তা পাঠানো হয়েছে!</h3>
                <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
                  আমরা আপনার বার্তা পেয়েছি এবং <br /> খুব শীঘ্রই আপনার সাথে যোগাযোগ করবো।
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="mt-8 text-[#00A859] font-black uppercase tracking-wider text-xs sm:text-sm hover:underline cursor-pointer"
                >
                  অন্য একটি বার্তা পাঠান
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
