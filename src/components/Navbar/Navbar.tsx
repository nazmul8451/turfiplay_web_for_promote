import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import logoImg from '../../assets/images/sports/Layer_1.png';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: 'ইকোসিস্টেম', href: 'how-it-works' },
    { name: 'ফিচারসমূহ', href: 'features' },
    { name: 'মূল্য তালিকা', href: 'pricing' },
    { name: 'মতামত', href: 'testimonials' },
    { name: 'যোগাযোগ', href: 'contact' },
  ];

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

      const scrollPosition = currentScrollY + 200;
      
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
      className="fixed top-0 left-4 right-4 md:left-[8%] md:right-[8%] lg:left-[15%] lg:right-[15%] z-50 pt-4 md:pt-6"
    >
      <nav className={`px-6 py-3 flex justify-between items-center rounded-full border border-brand-green/20 bg-white/90 backdrop-blur-xl shadow-lg transition-all duration-500 ${
        isScrolled ? 'shadow-xl shadow-brand-green/10 border-brand-green/35 bg-white/95' : ''
      }`}>
        {/* Logo */}
        <div
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img
            src={logoImg}
            alt="TurfiPlay Logo"
            className="h-9 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
          />
          <span className="font-serif text-xl tracking-tight text-slate-900 group-hover:text-[#00A859] transition-colors">
            Turf<span className="italic text-[#00A859]">Play</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item, index) => {
            const isActive = activeSection === item.href;
            const isHovered = hoveredIndex === index;

            return (
              <a
                key={item.href}
                href={`#${item.href}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative px-4 py-2 text-[12px] font-bold tracking-wider text-slate-600 hover:text-[#00A859] transition-colors duration-300 uppercase select-none"
              >
                {/* Sliding background capsule */}
                <AnimatePresence>
                  {(isHovered || (hoveredIndex === null && isActive)) && (
                    <motion.span
                      layoutId="navbar-hover-capsule"
                      className="absolute inset-0 bg-[#00A859]/10 border border-[#00A859]/20 rounded-full -z-10"
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
                    className="absolute bottom-[-2px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#00A859] rounded-full shadow-[0_0_8px_#00A859]"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30
                    }}
                  />
                )}

                <span className={isActive ? "text-[#00A859] font-black" : ""}>
                  {item.name}
                </span>
              </a>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#waitlist"
            className="group relative overflow-hidden px-6 py-2.5 bg-[#00A859] text-white font-bold rounded-full transition-all duration-300 shadow-md shadow-[#00A859]/20 hover:shadow-lg hover:shadow-[#00A859]/35 hover:scale-[1.03] uppercase tracking-wider text-[11px] flex items-center gap-2"
          >
            <span>ওয়েটলিস্টে যোগ দিন</span>
            <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative w-8 h-8 flex flex-col justify-center items-center gap-1.5 focus:outline-none z-50 text-slate-900"
            aria-label="Toggle Menu"
          >
            <motion.span
              animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="w-6 h-0.5 bg-slate-900 rounded-full origin-center"
            />
            <motion.span
              animate={isOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="w-6 h-0.5 bg-slate-900 rounded-full"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="w-6 h-0.5 bg-slate-900 rounded-full origin-center"
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
            className="md:hidden mt-3 bg-white/95 backdrop-blur-xl rounded-3xl border border-[#00A859]/20 shadow-xl overflow-hidden"
          >
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
                closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
              }}
              className="px-6 py-6 space-y-4"
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
                    className={`block text-base font-bold uppercase tracking-wider transition-colors ${
                      activeSection === item.href ? 'text-[#00A859]' : 'text-slate-700 hover:text-[#00A859]'
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
                  className="block w-full text-center py-3 bg-[#00A859] text-white font-extrabold rounded-full uppercase tracking-wider text-xs shadow-md shadow-[#00A859]/25 hover:scale-[1.02] transition-transform"
                >
                  ওয়েটলিস্টে যোগ দিন
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
