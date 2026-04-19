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
      <div className="max-w-[1880px] mx-auto px-10 md:px-[10%] lg:px-[12%]">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-7xl font-black text-[var(--text-primary)] mb-8 tracking-tighter uppercase italic leading-none">LET'S <span className="text-brand-green">TALK.</span></h2>
            <p className="text-lg text-[var(--text-secondary)] mb-10 font-medium leading-relaxed uppercase tracking-widest">Whether you have a question or are ready to transform your turf, our team is here to help.</p>

            <div className="space-y-8">
              <div className="flex gap-8 items-center group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-[var(--border-color)] flex items-center justify-center group-hover:border-brand-green/30 transition-all">
                  <Mail className="text-brand-green" size={22} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-[var(--text-secondary)] uppercase tracking-[0.4em] mb-1">Email Us</p>
                  <p className="text-xl font-black text-[var(--text-primary)] tracking-tight">rimon124567@gmail.com</p>
                </div>
              </div>
              <div className="flex gap-8 items-center group">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-[var(--border-color)] flex items-center justify-center group-hover:border-brand-green/30 transition-all">
                  <Phone className="text-brand-green" size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-[var(--text-secondary)] uppercase tracking-[0.4em] mb-2">Call Support</p>
                  <p className="text-2xl font-black text-[var(--text-primary)] tracking-tight">+880 1712-XXXXXX</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card relative"
          >
            {!isSuccess ? (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-6">
                  <div className="relative">
                    <input
                      required
                      type="text"
                      placeholder="Your Full Name"
                      className="w-full bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-2xl py-6 px-8 text-[var(--text-primary)] focus:outline-none focus:border-brand-green/50 placeholder:text-[var(--text-secondary)] font-bold transition-all"
                      value={formState.name}
                      onChange={e => setFormState({ ...formState, name: e.target.value })}
                    />
                  </div>
                  <div className="relative">
                    <input
                      required
                      type="email"
                      placeholder="Email Address"
                      className="w-full bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-2xl py-6 px-8 text-[var(--text-primary)] focus:outline-none focus:border-brand-green/50 placeholder:text-[var(--text-secondary)] font-bold transition-all"
                      value={formState.email}
                      onChange={e => setFormState({ ...formState, email: e.target.value })}
                    />
                  </div>
                  <div className="relative">
                    <textarea
                      required
                      rows={5}
                      placeholder="Your Message..."
                      className="w-full bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-2xl py-6 px-8 text-[var(--text-primary)] focus:outline-none focus:border-brand-green/50 placeholder:text-[var(--text-secondary)] font-bold transition-all resize-none"
                      value={formState.message}
                      onChange={e => setFormState({ ...formState, message: e.target.value })}
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-8 bg-brand-green text-black font-black rounded-2xl uppercase italic tracking-widest text-lg shadow-[0_0_40px_rgba(0,168,89,0.2)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-4"
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-4 border-black/20 border-t-black rounded-full animate-spin" />
                  ) : (
                    <>
                      Send Message
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
                <h3 className="text-4xl font-black text-[var(--text-primary)] mb-6 uppercase italic">Message Sent!</h3>
                <p className="text-xl text-[var(--text-secondary)] font-medium leading-relaxed">We've received your inquiry and will <br /> get back to you within 24 hours.</p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="mt-12 text-brand-green font-black uppercase italic tracking-widest text-sm hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
