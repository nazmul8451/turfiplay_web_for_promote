import React from 'react';
import { motion } from 'motion/react';
import { MessageSquareQuote } from 'lucide-react';

export const Testimonials = () => {
  const reviews = [
    { name: "Rafat Hasan", role: "Owner, Pitch 56", quote: "Before TurfiPlay, I was losing sleep over double bookings. Now, everything stays locked and synced. It's a game changer." },
    { name: "Imtiaz Ahmed", role: "Manager, Kickoff Arena", quote: "The revenue reports are incredible. I can see my growth day-by-day. Very easy to use even for my staff." },
    { name: "Tanvir Hossain", role: "Owner, GoalLine Turf", quote: "The waitlist interface is so simple. My customers love how professional the booking process looks now." }
  ];

  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-brand-bg relative">
      <div className="max-w-[1880px] mx-auto px-10 md:px-[10%] lg:px-[12%]">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-[var(--text-primary)] mb-6 tracking-tighter uppercase italic leading-[1.1]">
            How TurfiPlay <br />
            <span className="text-brand-green">Revolutionizes</span> Your Turf.
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto font-medium leading-relaxed">
            From the first booking to final matching reporting, we've automated every single step of your business.
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
              className="glass-card flex flex-col justify-between"
            >
              <div>
                <MessageSquareQuote className="text-brand-green/20 mb-8" size={40} />
                <p className="text-lg text-[var(--text-primary)] italic leading-relaxed mb-8 font-medium">
                  "{t.quote}"
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-brand-green/20 border border-brand-green/30 flex items-center justify-center font-black text-brand-green italic">
                  {t.name[0]}
                </div>
                <div>
                  <h4 className="font-black text-[var(--text-primary)] uppercase italic leading-none mb-1">{t.name}</h4>
                  <p className="text-[10px] text-brand-green font-black uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
