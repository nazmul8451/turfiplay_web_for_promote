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
    <section id="contact" className="py-20 lg:py-32 bg-brand-bg relative overflow-hidden">
      <div className="max-w-[1880px] mx-auto px-4 sm:px-8 md:px-[10%] lg:px-[12%]">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-black text-[var(--text-primary)] mb-6 sm:mb-8 tracking-tighter leading-tight sm:leading-none">
              আসুন <span className="text-brand-green">কথা বলি।</span>
            </h2>
            <p className="text-sm sm:text-lg text-[var(--text-secondary)] mb-8 sm:mb-10 font-medium leading-relaxed tracking-wider">
              আপনার টার্ফ ব্যবসা নিয়ে কোনো প্রশ্ন থাকুক বা শুরু করার প্রস্তুতি—আমাদের টিম সবসময় আপনার পাশে।
            </p>

            <div className="space-y-6 sm:space-y-8">
              <div className="flex gap-4 sm:gap-8 items-center group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/5 border border-[var(--border-color)] flex items-center justify-center group-hover:border-brand-green/30 transition-all flex-shrink-0">
                  <Mail className="text-brand-green" size={20} />
                </div>
                <div>
                  <p className="text-[9px] sm:text-[10px] font-black text-[var(--text-secondary)] uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-0.5">ইমেইল করুন</p>
                  <p className="text-base sm:text-xl font-black text-[var(--text-primary)] tracking-tight break-all">rimon124567@gmail.com</p>
                </div>
              </div>
              <div className="flex gap-4 sm:gap-8 items-center group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/5 border border-[var(--border-color)] flex items-center justify-center group-hover:border-brand-green/30 transition-all flex-shrink-0">
                  <Phone className="text-brand-green" size={20} />
                </div>
                <div>
                  <p className="text-[9px] sm:text-[10px] font-black text-[var(--text-secondary)] uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-0.5">কল করুন</p>
                  <p className="text-lg sm:text-2xl font-black text-[var(--text-primary)] tracking-tight">+880 1712-XXXXXX</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card !p-6 sm:!p-10 relative"
          >
            {!isSuccess ? (
              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                <div className="space-y-4 sm:space-y-5">
                  <div className="relative">
                    <input
                      required
                      type="text"
                      placeholder="আপনার পুরো নাম"
                      className="w-full bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-xl sm:rounded-2xl py-4 sm:py-5 px-4 sm:px-6 text-sm sm:text-base text-[var(--text-primary)] focus:outline-none focus:border-brand-green/50 placeholder:text-[var(--text-secondary)] font-bold transition-all"
                      value={formState.name}
                      onChange={e => setFormState({ ...formState, name: e.target.value })}
                    />
                  </div>
                  <div className="relative">
                    <input
                      required
                      type="email"
                      placeholder="ইমেইল অ্যাড্রেস"
                      className="w-full bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-xl sm:rounded-2xl py-4 sm:py-5 px-4 sm:px-6 text-sm sm:text-base text-[var(--text-primary)] focus:outline-none focus:border-brand-green/50 placeholder:text-[var(--text-secondary)] font-bold transition-all"
                      value={formState.email}
                      onChange={e => setFormState({ ...formState, email: e.target.value })}
                    />
                  </div>
                  <div className="relative">
                    <textarea
                      required
                      rows={4}
                      placeholder="আপনার বার্তা লিখুন..."
                      className="w-full bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-xl sm:rounded-2xl py-4 sm:py-5 px-4 sm:px-6 text-sm sm:text-base text-[var(--text-primary)] focus:outline-none focus:border-brand-green/50 placeholder:text-[var(--text-secondary)] font-bold transition-all resize-none"
                      value={formState.message}
                      onChange={e => setFormState({ ...formState, message: e.target.value })}
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 sm:py-5 bg-brand-green text-black font-black rounded-xl sm:rounded-2xl uppercase italic tracking-widest text-sm sm:text-base shadow-[0_0_30px_rgba(0,168,89,0.2)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-4 border-black/20 border-t-black rounded-full animate-spin" />
                  ) : (
                    <>
                      বার্তা পাঠান
                      <Send size={20} />
                    </>
                  )}
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-20 text-center"
              >
                <div className="w-24 h-24 bg-brand-green/20 rounded-full flex items-center justify-center mx-auto mb-10 border border-brand-green/30">
                  <CheckCircle2 size={48} className="text-brand-green" />
                </div>
                <h3 className="text-4xl font-black text-[var(--text-primary)] mb-6">বার্তা পাঠানো হয়েছে!</h3>
                <p className="text-xl text-[var(--text-secondary)] font-medium leading-relaxed">আমরা আপনার বার্তা পেয়েছি এবং <br /> ২৪ ঘণ্টার মধ্যে যোগাযোগ করব।</p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="mt-12 text-brand-green font-black tracking-widest text-sm hover:underline"
                >
                  আরো একটি বার্তা পাঠান
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
