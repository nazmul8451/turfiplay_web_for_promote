import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import logoImg from '../../assets/images/sports/Layer_1.png';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: 'হোম', href: 'home' },
    { name: 'কেন TurfPlay', href: 'why-join' },
    { name: 'সমাধান', href: 'problem-solution' },
    { name: 'ফিচারসমূহ', href: 'features' },
    { name: 'মোবাইল অ্যাপ', href: 'mobile-dashboard' },
    { name: 'যোগাযোগ', href: 'contact' },
  ];

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          setIsScrolled(currentScrollY > 20);

          // Section tracking for active state
          const scrollPosition = currentScrollY + 250;
          
          if (currentScrollY < 120) {
            setActiveSection('home');
          } else {
            for (const item of navItems) {
              const element = document.getElementById(item.href);
              if (element) {
                const top = element.offsetTop;
                const height = element.offsetHeight;
                if (scrollPosition >= top && scrollPosition < top + height) {
                  setActiveSection(item.href);
                  break;
                }
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-3 md:pt-4 px-3 md:px-6 lg:px-8 pointer-events-none">
      <nav 
        className={`pointer-events-auto max-w-[1380px] mx-auto px-4 sm:px-6 py-2 sm:py-2.5 flex justify-between items-center rounded-full transition-all duration-300 backdrop-blur-2xl ${
          isScrolled 
            ? 'bg-white/90 border border-white/95 shadow-[0_12px_36px_rgba(0,0,0,0.12)]' 
            : 'bg-white/80 border border-white/85 shadow-[0_8px_25px_rgba(0,0,0,0.06)]'
        }`}
      >
        {/* Logo */}
        <div
          className="flex items-center gap-2 sm:gap-2.5 cursor-pointer group shrink-0"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img
            src={logoImg}
            alt="TurfPlay Logo"
            className="h-8 sm:h-9 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
          />
          <span className="font-serif text-lg sm:text-xl tracking-tight text-slate-900 group-hover:text-[#00A859] transition-colors whitespace-nowrap">
            Turf<span className="italic text-[#00A859]">Play</span>
          </span>
        </div>

        {/* Desktop Links (Clean, No Icon Clutter) */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-2 shrink-0">
          {navItems.map((item) => {
            const isActive = activeSection === item.href;

            return (
              <a
                key={item.href}
                href={`#${item.href}`}
                className={`relative px-3.5 xl:px-4 py-1.5 xl:py-2 text-[12px] xl:text-[13px] font-bold tracking-normal rounded-full transition-all duration-200 select-none whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'text-[#00A859] bg-[#00A859]/10 font-black shadow-xs'
                    : 'text-slate-700 hover:text-[#00A859] hover:bg-slate-100/60'
                }`}
              >
                <span className="whitespace-nowrap">
                  {item.name}
                </span>
              </a>
            );
          })}
        </div>

        {/* Desktop Action Button */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <a
            href="#register"
            className="group relative overflow-hidden px-5 py-2.5 bg-[#00A859] hover:bg-[#008f4c] text-white font-bold rounded-full transition-all duration-200 shadow-md shadow-[#00A859]/25 hover:shadow-lg hover:shadow-[#00A859]/35 hover:scale-[1.02] active:scale-[0.98] text-xs sm:text-[13px] flex items-center gap-1.5 whitespace-nowrap shrink-0"
          >
            <span className="whitespace-nowrap">টার্ফ রেজিস্টার করুন</span>
            <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform duration-200 shrink-0" />
          </a>
        </div>

        {/* Mobile controls */}
        <div className="lg:hidden flex items-center gap-2.5">
          <a
            href="#register"
            className="px-3.5 py-1.5 bg-[#00A859] text-white font-extrabold rounded-full text-[11px] uppercase tracking-wider shadow-sm"
          >
            রেজিস্টার
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative w-8 h-8 flex flex-col justify-center items-center gap-1.5 focus:outline-none z-50 text-slate-900 cursor-pointer"
            aria-label="Toggle Menu"
          >
            <span
              className={`w-5 h-0.5 bg-slate-900 rounded-full transition-transform duration-200 ${
                isOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`w-5 h-0.5 bg-slate-900 rounded-full transition-opacity duration-200 ${
                isOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`w-5 h-0.5 bg-slate-900 rounded-full transition-transform duration-200 ${
                isOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Glass Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, scale: 0.96 }}
            animate={{ opacity: 1, height: "auto", scale: 1 }}
            exit={{ opacity: 0, height: 0, scale: 0.96 }}
            transition={{ duration: 0.25 }}
            className="pointer-events-auto lg:hidden max-w-6xl mx-auto mt-2 bg-white/90 backdrop-blur-2xl rounded-3xl border border-white/80 shadow-2xl overflow-hidden"
          >
            <div className="px-6 py-5 space-y-3">
              {navItems.map((item) => {
                const isActive = activeSection === item.href;

                return (
                  <a
                    key={item.href}
                    href={`#${item.href}`}
                    onClick={() => setIsOpen(false)}
                    className={`block py-2.5 text-sm font-bold tracking-wide transition-colors ${
                      isActive ? 'text-[#00A859] font-black' : 'text-slate-700 hover:text-[#00A859]'
                    }`}
                  >
                    <span>{item.name}</span>
                  </a>
                );
              })}

              <div className="pt-2">
                <a
                  href="#register"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center py-3 bg-[#00A859] hover:bg-[#008f4c] text-white font-extrabold rounded-full uppercase tracking-wider text-xs shadow-md shadow-[#00A859]/25 active:scale-95 transition-all"
                >
                  টার্ফ রেজিস্ট্রেশন ফরম
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
