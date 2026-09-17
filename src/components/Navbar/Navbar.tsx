import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import logoImg from '../../assets/images/sports/Layer_1.png';

export const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 20);

      if (currentScrollY < 100) {
        setIsVisible(true);
      } else {
        if (currentScrollY > lastScrollY) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <motion.div
      animate={{
        y: isVisible ? 0 : -120,
        opacity: isVisible ? 1 : 0
      }}
      transition={{
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1]
      }}
      className="fixed top-0 left-3 right-3 sm:left-4 sm:right-4 md:left-[8%] md:right-[8%] lg:left-[15%] lg:right-[15%] z-50 pt-3 sm:pt-4 md:pt-6"
    >
      <nav className={`px-4 sm:px-6 py-2.5 sm:py-3 flex justify-between items-center rounded-full border border-brand-green/20 bg-white/90 backdrop-blur-xl shadow-lg transition-all duration-500 ${
        isScrolled ? 'shadow-xl shadow-brand-green/10 border-brand-green/35 bg-white/95' : ''
      }`}>
        {/* Logo */}
        <div
          className="flex items-center gap-2.5 sm:gap-3 cursor-pointer group"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img
            src={logoImg}
            alt="TurfiPlay Logo"
            className="h-8 sm:h-9 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
          />
          <span className="font-serif text-lg sm:text-xl tracking-tight text-slate-900 group-hover:text-[#00A859] transition-colors">
            Turf<span className="italic text-[#00A859]">Play</span>
          </span>
        </div>

        {/* Action Button */}
        <div className="flex items-center gap-3">
          <a
            href="#waitlist"
            className="group relative overflow-hidden px-4 sm:px-6 py-2 sm:py-2.5 bg-[#00A859] text-white font-bold rounded-full transition-all duration-300 shadow-md shadow-[#00A859]/20 hover:shadow-lg hover:shadow-[#00A859]/35 hover:scale-[1.03] text-[11px] sm:text-xs flex items-center gap-1.5 sm:gap-2"
          >
            <span>টার্ফ মালিকদের জন্য</span>
            <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </nav>
    </motion.div>
  );
};
