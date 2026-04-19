import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Zap } from 'lucide-react';

export const ComingSoonModal = ({ isOpen, onClose, title }: { isOpen: boolean, onClose: () => void, title: string }) => {
  if (!isOpen) return null;
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-xl"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, y: 20, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.9, y: 20, opacity: 0 }}
          className="glass-card max-w-lg w-full !p-12 text-center relative overflow-hidden border-brand-green/20 shadow-[0_0_100px_rgba(0,168,89,0.1)]"
          onClick={e => e.stopPropagation()}
        >
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-brand-green to-transparent" />

          <div className="w-20 h-20 rounded-2xl bg-brand-green/10 flex items-center justify-center mx-auto mb-10 border border-brand-green/20">
            <Zap className="text-brand-green animate-pulse" size={32} />
          </div>

          <h3 className="text-4xl font-black text-[var(--text-primary)] mb-6 uppercase italic tracking-tighter">
            {title} <br />
            <span className="text-brand-green">Coming Soon</span>
          </h3>

          <p className="text-lg text-[var(--text-secondary)] font-medium leading-relaxed mb-12">
            We are currently in <span className="text-[var(--text-primary)]">Development Mode</span>. Our team is working hard to bring the ultimate TurfiPlay experience to Bangladesh.
          </p>

          <button
            onClick={onClose}
            className="w-full py-6 bg-brand-green text-black font-black rounded-xl hover:scale-[1.02] transition-all uppercase italic tracking-[0.2em] text-sm shadow-[0_0_40px_rgba(0,168,89,0.3)]"
          >
            Stay With Us
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
