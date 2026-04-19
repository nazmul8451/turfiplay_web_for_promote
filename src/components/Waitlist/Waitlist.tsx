import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export const Waitlist = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email || phone) {
      setSubmitted(true);
      setEmail('');
      setPhone('');
    }
  };

  return (
    <section id="waitlist" className="py-24 lg:py-50 relative overflow-hidden bg-brand-bg">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-brand-green/5 blur-[250px] rounded-full" />
      </div>

      <div className="max-w-[1880px] mx-auto px-10 md:px-[10%] lg:px-[12%]">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="glass-card !p-12 lg:!p-20 border-white/10 relative overflow-hidden text-center group max-w-5xl mx-auto"
        >
          <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-brand-green to-transparent shadow-[0_0_30px_rgba(0,168,89,0.5)]" />

          <h2 className="text-4xl md:text-8xl font-black text-[var(--text-primary)] mb-8 leading-tight tracking-tighter uppercase italic">
            Ready to Run <br />
            <span className="text-brand-green text-gradient">Your Turf?</span>
          </h2>

          <p className="text-xl text-[var(--text-secondary)] mb-20 max-w-2xl mx-auto font-medium leading-relaxed">
            The era of manual management is over. Be among the first to experience TurfiPlay in Bangladesh.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-2xl py-6 px-8 text-[var(--text-primary)] focus:outline-none focus:border-brand-green/50 transition-all placeholder:text-[var(--text-secondary)] font-bold"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-2xl py-6 px-8 text-[var(--text-primary)] focus:outline-none focus:border-brand-green/50 transition-all placeholder:text-[var(--text-secondary)] font-bold"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full btn-primary !py-8 !text-2xl uppercase tracking-widest italic"
              >
                Claim Early Access
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-20"
            >
              <div className="w-24 h-24 bg-brand-green/20 rounded-full flex items-center justify-center mx-auto mb-10 border border-brand-green/30">
                <CheckCircle2 size={48} className="text-brand-green" />
              </div>
              <h3 className="text-4xl font-black text-[var(--text-primary)] mb-6 uppercase italic">You're on the list!</h3>
              <p className="text-xl text-[var(--text-secondary)] font-medium">We'll reach out to you as soon as we're ready for Liftoff.</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};
