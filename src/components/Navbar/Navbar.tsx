import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Zap, X, Menu } from 'lucide-react';
import { ThemeToggle } from '../Theme/ThemeContext';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-20 px-6 pt-1 md:pt-1">
      <nav className="max-w-[1880px] mx-auto glass-card px-8 py-0.5 flex justify-between items-center border border-white/10 shadow-2xl">
        <div
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="w-8 h-8 bg-brand-green rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(0,168,89,0.3)] group-hover:scale-110 transition-transform duration-500">
            <Zap className="text-black fill-black" size={16} />
          </div>
          <span className="text-lg tracking-[-0.05em] text-[var(--text-primary)] select-none">
            <span className="font-extralight opacity-80">Turfi</span>
            <span className="font-black text-brand-green italic drop-shadow-[0_0_15px_rgba(0,168,89,0.4)]">Play</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <a href="#about" className="text-[13px] font-black text-[var(--text-secondary)] hover:text-brand-green transition-colors uppercase tracking-[0.3em]">About</a>
          <a href="#features" className="text-[13px] font-black text-[var(--text-secondary)] hover:text-brand-green transition-colors uppercase tracking-[0.3em]">Features</a>
          <a href="#pricing" className="text-[13px] font-black text-[var(--text-secondary)] hover:text-brand-green transition-colors uppercase tracking-[0.3em]">Pricing</a>
          <a href="#testimonials" className="text-[13px] font-black text-[var(--text-secondary)] hover:text-brand-green transition-colors uppercase tracking-[0.3em]">Testimonials</a>
          <a href="#contact" className="text-[13px] font-black text-[var(--text-secondary)] hover:text-brand-green transition-colors uppercase tracking-[0.3em]">Contact</a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <a href="#waitlist" className="px-5 py-1.5 bg-brand-green text-black font-black rounded-full hover:scale-105 transition-all shadow-[0_0_30px_rgba(0, 168, 89, 0.2)] uppercase tracking-tighter text-xs inline-block">
            Join Waitlist
          </a>
        </div>

        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button onClick={() => setIsOpen(!isOpen)} className="text-[var(--text-primary)]">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 glass-card border border-white/10 overflow-hidden"
          >
            <div className="px-6 py-8 space-y-6">
              <a href="#about" onClick={() => setIsOpen(false)} className="block text-lg font-black text-[var(--text-primary)] uppercase">About</a>
              <a href="#features" onClick={() => setIsOpen(false)} className="block text-lg font-black text-[var(--text-primary)] uppercase">Features</a>
              <a href="#pricing" onClick={() => setIsOpen(false)} className="block text-lg font-black text-[var(--text-primary)] uppercase">Pricing</a>
              <a href="#testimonials" onClick={() => setIsOpen(false)} className="block text-lg font-black text-[var(--text-primary)] uppercase">Testimonials</a>
              <a href="#contact" onClick={() => setIsOpen(false)} className="block text-lg font-black text-[var(--text-primary)] uppercase">Contact</a>
              <a href="#waitlist" onClick={() => setIsOpen(false)} className="block w-full text-center py-4 bg-brand-green text-black font-black rounded-2xl uppercase tracking-tighter">
                Join Waitlist
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
