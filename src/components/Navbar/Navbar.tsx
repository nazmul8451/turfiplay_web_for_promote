import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Zap, ArrowRight } from 'lucide-react';
import { ThemeToggle } from '../Theme/ThemeContext';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: 'About', href: 'about' },
    { name: 'Features', href: 'features' },
    { name: 'Pricing', href: 'pricing' },
    { name: 'Testimonials', href: 'testimonials' },
    { name: 'Contact', href: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Scrolled state for border/shadow change
      setIsScrolled(currentScrollY > 20);

      // Smart Sticky Header logic
      if (currentScrollY < 100) {
        setIsVisible(true);
      } else {
        if (currentScrollY > lastScrollY) {
          setIsVisible(false); // scrolling down
        } else {
          setIsVisible(true); // scrolling up
        }
      }
      setLastScrollY(currentScrollY);

      // Scrollspy active section tracking
      const scrollPosition = currentScrollY + 200; // offset for navbar height
      
      if (currentScrollY < 100) {
        setActiveSection('home');
        return;
      }

      for (const item of navItems) {
        const el = document.getElementById(item.href);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.href);
            break;
          }
        }
      }
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
      className="fixed top-0 left-6 right-6 md:left-[10%] md:right-[10%] lg:left-[18%] lg:right-[18%] z-50 pt-4 md:pt-8"
    >
      <nav className={`px-6 py-2.5 flex justify-between items-center rounded-full border border-[var(--glass-border)] bg-[var(--glass-bg)] backdrop-blur-xl shadow-lg transition-all duration-500 ${
        isScrolled ? 'shadow-2xl shadow-brand-green/5 border-brand-green/20' : ''
      }`}>
        {/* Logo */}
        <div
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="w-8 h-8 bg-brand-green rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(0,168,89,0.3)] group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(0,168,89,0.5)] transition-all duration-500">
            <Zap className="text-black fill-black" size={14} />
          </div>
          <span className="text-base tracking-[-0.05em] text-[var(--text-primary)] select-none">
            <span className="font-extralight opacity-80">Turfi</span>
            <span className="font-black text-brand-green italic drop-shadow-[0_0_15px_rgba(0,168,89,0.4)]">Play</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-2">
          {navItems.map((item, index) => {
            const isActive = activeSection === item.href;
            const isHovered = hoveredIndex === index;

            return (
              <a
                key={item.href}
                href={`#${item.href}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative px-4 py-2 text-[11px] font-black tracking-[0.25em] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-300 uppercase select-none"
              >
                {/* Sliding background capsule */}
                <AnimatePresence>
                  {(isHovered || (hoveredIndex === null && isActive)) && (
                    <motion.span
                      layoutId="navbar-hover-capsule"
                      className="absolute inset-0 bg-brand-green/10 border border-brand-green/20 rounded-full -z-10"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30
                      }}
                    />
                  )}
                </AnimatePresence>

                {/* Active Indicator dot */}
                {isActive && (
                  <motion.span
                    layoutId="navbar-active-dot"
                    className="absolute bottom-[-2px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-brand-green rounded-full shadow-[0_0_10px_#00A859]"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30
                    }}
                  />
                )}

                <span className={isActive ? "text-[var(--text-primary)]" : ""}>
                  {item.name}
                </span>
              </a>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <a
            href="#waitlist"
            className="group relative overflow-hidden px-5 py-2 bg-brand-green text-black font-black rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(0,168,89,0.2)] hover:shadow-[0_0_30px_rgba(0,168,89,0.4)] hover:scale-[1.03] uppercase tracking-wider text-[10px] flex items-center gap-1.5"
          >
            <span>Join Waitlist</span>
            <ArrowRight size={12} className="transform group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          {/* Custom morphing hamburger menu icon */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative w-8 h-8 flex flex-col justify-center items-center gap-1.5 focus:outline-none z-50 text-[var(--text-primary)]"
            aria-label="Toggle Menu"
          >
            <motion.span
              animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="w-6 h-0.5 bg-[var(--text-primary)] rounded-full origin-center"
            />
            <motion.span
              animate={isOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="w-6 h-0.5 bg-[var(--text-primary)] rounded-full"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="w-6 h-0.5 bg-[var(--text-primary)] rounded-full origin-center"
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, scale: 0.95 }}
            animate={{ opacity: 1, height: "auto", scale: 1 }}
            exit={{ opacity: 0, height: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden mt-4 glass-card border border-[var(--glass-border)] overflow-hidden"
          >
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
                closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
              }}
              className="px-6 py-8 space-y-6"
            >
              {navItems.map((item) => (
                <motion.div
                  key={item.href}
                  variants={{
                    open: { y: 0, opacity: 1 },
                    closed: { y: -10, opacity: 0 }
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <a
                    href={`#${item.href}`}
                    onClick={() => setIsOpen(false)}
                    className={`block text-lg font-black uppercase tracking-widest transition-colors ${
                      activeSection === item.href ? 'text-brand-green' : 'text-[var(--text-primary)] hover:text-brand-green'
                    }`}
                  >
                    {item.name}
                  </a>
                </motion.div>
              ))}
              <motion.div
                variants={{
                  open: { y: 0, opacity: 1 },
                  closed: { y: -10, opacity: 0 }
                }}
                transition={{ duration: 0.3 }}
              >
                <a
                  href="#waitlist"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center py-4 bg-brand-green text-black font-black rounded-2xl uppercase tracking-wider text-sm hover:scale-[1.02] transition-transform shadow-[0_0_20px_rgba(0,168,89,0.2)]"
                >
                  Join Waitlist
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
