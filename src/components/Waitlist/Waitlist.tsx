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
    const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]{6,15}$/;

    if (!email || !emailRegex.test(email)) {
      newErrors.email = 'সঠিক ইমেইল অ্যাড্রেস প্রদান করুন';
    }

    if (!phone || !phoneRegex.test(phone.replace(/\s/g, ''))) {
      newErrors.phone = 'সঠিক ফোন নম্বর প্রদান করুন';
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
    <section id="waitlist" className="py-16 sm:py-20 lg:py-32 relative overflow-hidden bg-[#F8FAFC]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-[#00A859]/8 blur-[200px] rounded-full" />
      </div>

      <div className="container-fluid">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card !p-6 sm:!p-10 md:!p-16 border-[#00A859]/25 bg-white shadow-xl relative overflow-hidden text-center max-w-4xl mx-auto rounded-2xl sm:rounded-3xl"
        >
          <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-transparent via-[#00A859] to-transparent shadow-sm" />

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-4 sm:mb-6 leading-tight tracking-tight uppercase">
            আপনার টার্ফ ডিজিটাল করতে <br />
            <span className="font-serif italic text-[#00A859] lowercase font-normal">প্রস্তুত?</span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-slate-600 mb-8 sm:mb-12 max-w-xl mx-auto font-medium leading-relaxed">
            ম্যানুয়াল খাতার দিন শেষ। সবার আগে TurfPlay ব্যবহারের অভিজ্ঞতা নিতে ওয়েটলিস্টে নাম দিন।
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4 sm:space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-1.5">
                  <div className="relative">
                    <Mail className="absolute left-4 sm:left-5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input
                      type="email"
                      placeholder="ইমেইল অ্যাড্রেস"
                      className={`w-full bg-[#F8FAFC] border rounded-2xl py-3.5 pl-11 pr-4 sm:py-4 sm:pl-12 sm:pr-6 text-slate-900 focus:outline-none focus:border-[#00A859] transition-all placeholder:text-slate-400 font-medium text-xs sm:text-sm ${
                        errors.email ? 'border-red-500' : 'border-slate-200'
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
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-xs font-bold text-left pl-2"
                    >
                      {errors.email}
                    </motion.p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <div className="relative">
                    <Phone className="absolute left-4 sm:left-5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input
                      type="tel"
                      placeholder="০১XXXXXXXXX"
                      className={`w-full bg-[#F8FAFC] border rounded-2xl py-3.5 pl-11 pr-4 sm:py-4 sm:pl-12 sm:pr-6 text-slate-900 focus:outline-none focus:border-[#00A859] transition-all placeholder:text-slate-400 font-medium text-xs sm:text-sm ${
                        errors.phone ? 'border-red-500' : 'border-slate-200'
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
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-xs font-bold text-left pl-2"
                    >
                      {errors.phone}
                    </motion.p>
                  )}
                </div>
              </div>

              <button
                type="submit"
                className="group relative overflow-hidden w-full btn-primary !py-4 sm:!py-5 !text-sm sm:!text-lg uppercase tracking-wider font-extrabold flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#00A859]/25 hover:scale-[1.01] active:scale-[0.99] transition-all"
              >
                <span>আগাম অ্যাক্সেস নিন</span>
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </motion.div>
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-12"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
                className="w-20 h-20 bg-[#00A859]/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-[#00A859]/30"
              >
                <CheckCircle2 size={40} className="text-[#00A859]" />
              </motion.div>
              <h3 className="text-3xl font-extrabold text-slate-900 mb-3 uppercase">আপনি ওয়েটলিস্টে যুক্ত হয়েছেন!</h3>
              <p className="text-base text-slate-600 font-medium">অ্যাপটি পুরোদমে চালু হওয়া মাত্রই আমরা আপনার সাথে যোগাযোগ করবো।</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};
