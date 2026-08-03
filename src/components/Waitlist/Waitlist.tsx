import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Mail, Phone, ArrowRight } from 'lucide-react';

export const Waitlist = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; phone?: string }>({});

  const validateForm = () => {
    const newErrors: { email?: string; phone?: string } = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^(?:\+88|88)?(01[3-9]\d{8})$/;

    if (!email || !emailRegex.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!phone || !phoneRegex.test(phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid Bangladeshi phone number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitted(true);
      setEmail('');
      setPhone('');
      setErrors({});
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
                <div className="space-y-2">
                  <div className="relative">
                    <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]" size={20} />
                    <input
                      type="email"
                      placeholder="Email Address"
                      className={`w-full bg-[var(--bg-surface)] border rounded-2xl py-6 pl-14 pr-8 text-[var(--text-primary)] focus:outline-none transition-all placeholder:text-[var(--text-secondary)] font-bold ${
                        errors.email ? 'border-red-500' : 'border-[var(--border-color)] focus:border-brand-green/50'
                      }`}
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.email) {
                          setErrors(prev => ({ ...prev, email: undefined }));
                        }
                      }}
                    />
                  </div>
                  {errors.email && (
                    <motion.p 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-sm font-bold text-left pl-2"
                    >
                      {errors.email}
                    </motion.p>
                  )}
                </div>

                <div className="space-y-2">
                  <div className="relative">
                    <Phone className="absolute left-6 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]" size={20} />
                    <input
                      type="tel"
                      placeholder="01XXXXXXXXX"
                      className={`w-full bg-[var(--bg-surface)] border rounded-2xl py-6 pl-14 pr-8 text-[var(--text-primary)] focus:outline-none transition-all placeholder:text-[var(--text-secondary)] font-bold ${
                        errors.phone ? 'border-red-500' : 'border-[var(--border-color)] focus:border-brand-green/50'
                      }`}
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                        if (errors.phone) {
                          setErrors(prev => ({ ...prev, phone: undefined }));
                        }
                      }}
                    />
                  </div>
                  {errors.phone && (
                    <motion.p 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-sm font-bold text-left pl-2"
                    >
                      {errors.phone}
                    </motion.p>
                  )}
                </div>
              </div>

              <button
                type="submit"
                className="group relative overflow-hidden w-full btn-primary !py-8 !text-2xl uppercase tracking-widest italic flex items-center justify-center gap-3"
              >
                <span>Claim Early Access</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
                </motion.div>
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-20"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
                className="w-24 h-24 bg-brand-green/20 rounded-full flex items-center justify-center mx-auto mb-10 border border-brand-green/30"
              >
                <CheckCircle2 size={48} className="text-brand-green" />
              </motion.div>
              <h3 className="text-4xl font-black text-[var(--text-primary)] mb-6 uppercase italic">You're on the list!</h3>
              <p className="text-xl text-[var(--text-secondary)] font-medium">We'll reach out to you as soon as we're ready for Liftoff.</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};
